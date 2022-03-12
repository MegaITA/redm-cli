import fs from 'fs'
import FxManifest from './templates/FxManifest.js'

class Project {

    projectName = ""
    projectComponents = []

    setName(name) {
        this.projectName = name
    } 

    setComponents(projectComponents) {
        this.projectComponents = projectComponents
    }

    async build() {
        fs.mkdirSync(this.projectName)
        let fxmanifest = new FxManifest()
        fxmanifest.addComponent('base')
        for(const component of this.projectComponents) {
            fxmanifest.addComponent(component)
            if(component == 'client' || component == 'server') {
                fs.mkdirSync(`${this.projectName}/${component}`)
                fs.writeFileSync(`${this.projectName}/${component}/${component}.lua`, '')
            } else if(component == 'nui') {
                fs.mkdirSync(`${this.projectName}/ui`)
                fs.writeFileSync(`${this.projectName}/ui/index.html`, '')
                fs.mkdirSync(`${this.projectName}/ui/css`)
                fs.writeFileSync(`${this.projectName}/ui/css/style.css`, '')
                fs.mkdirSync(`${this.projectName}/ui/js`)
                fs.writeFileSync(`${this.projectName}/ui/js/index.js`, '')
                fs.mkdirSync(`${this.projectName}/ui/img`)
                fs.mkdirSync(`${this.projectName}/ui/fonts`)
            } else if(component == 'config') {
                fs.writeFileSync(`${this.projectName}/config.lua`, 'Config = {}')
            }
        }
        fs.writeFileSync(`${this.projectName}/fxmanifest.lua`, fxmanifest.build())

    }

}

export default Project