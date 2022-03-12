#!/usr/bin/env node

import inquirer from 'inquirer'
import Project from './Project.js'
import figlet from 'figlet'
import chalkAnimation from 'chalk-animation'
import Utils from './Utils.js'

let project = new Project()

let { projectName } = await inquirer.prompt({
    type: 'input',
    name: 'projectName',
    message: 'Type in the project\'s name',
    validate(answer) {
        if(answer.length < 1) {
            return "Invalid project name, must be at least 1 character long."
        }

        return true
    }
})

project.setName(projectName)

let { features } = await inquirer.prompt([
    {
        type: 'checkbox',
        message: 'Project components that will be automatically created',
        name: 'features',
        choices: [
            { name: 'Client', value: 'client' },
            { name: 'Server', value: 'server' },
            { name: 'NUI' , value: 'nui' },
            { name: 'Config', value: 'config' }
        ],
        validate(answer) {
            if (answer.length < 1) {
                return 'You have to select at least one component.'
            }

            return true
        }
    },
])

project.setComponents(features)

project.build()

console.clear()

figlet('Project Created, Have Fun!', async function(err, data) {

    let rainbow = chalkAnimation.rainbow(data)

    await Utils.sleep(3000)

    rainbow.stop()

    console.clear()

})