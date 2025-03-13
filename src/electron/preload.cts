const electron = require("electron")

electron.contextBridge.exposeInMainWorld('electron', {
    subscribeStatics: (callback: (statistics: any) => void) => {
        electron.ipcRenderer.on("statistics", (_ : any, stats : any) => {
            callback(stats)
        })
    },
    getStaticData: () => electron.ipcRenderer.invoke("getStaticData")
})