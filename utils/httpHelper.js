
module.exports={
    request:function(url, port, path, method, bodyJson, callBack=null){
        let xhr = new XMLHttpRequest();
        xhr.open(method, `http://${url}:${port}/${path}`);

        if(method !== "GET"){
            xhr.setRequestHeader('Content-Type', 'application/json');
        }
        xhr.onload = function () {
            if (this.status >= 200 && this.status <= 304) {
                if(callBack){
                    callBack(this.status)
                }
            }
        };
        xhr.onerror = function () {
            //do nothing
        };
        try{
            xhr.send(JSON.stringify(bodyJson));
        }catch(err){
            //do nothing
        }
    }
}

