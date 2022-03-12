const components = {

    base: "fx_version \"adamant\"\ngames {\"rdr3\"}\nrdr3_warning 'I acknowledge that this is a prerelease build of RedM, and I am aware my resources *will* become incompatible once RedM ships.'\n\n",

    server: "server_scripts {\n\t'server/server.lua'\n}\n\n",

    client: "client_scripts {\n\t'client/client.lua'\n}\n\n",

    config: "shared_scripts {\n\t'config.lua'\n}\n\n",

    nui: "files {\n\t'ui/img/*',\n\t'ui/css/*.css',\n\t'ui/index.html',\n\t'ui/fonts/*',\n}\n\nui_page 'ui/index.html'\n\n"

}

class FxManifest {

    manifest = ""

    addComponent(name) {
        if(!components[name])
            return
        this.manifest += components[name]
        return this
    }

    build() {
        return this.manifest
    }

}

export default FxManifest