    function Ajax(dataType,bool){
        var ajax = new Object;
        ajax.xhr = new  XMLHttpRequest(); 
        ajax.type = dataType == undefined ? 'HTML' : dataType;
        ajax.callback;
        ajax.bool = bool == undefined ? true : bool;
        ajax.change = function(){
            if(ajax.xhr.readyState==4 && ajax.xhr.status == 200){
                if(ajax.type == 'HTML'){
                    ajax.callback(ajax.xhr.responseText);
                }else if(ajax.type == 'json'){
                    var obj = JSON.parse(ajax.xhr.responseText());
                    ajax.callback(obj);
                }
            }
        }
        ajax.get = function(url,callback){
            ajax.callback = callback;
            ajax.xhr.onreadystatechange = ajax.change;
            ajax.xhr.open('GET',url,ajax.bool);
            ajax.xhr.send();
        } 
        ajax.post = function(url,data,callback){
            ajax.callback = callback;
            ajax.xhr.onreadystatechange = ajax.change;
            ajax.xhr.open('POST',url,ajax.bool);
            ajax.xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            ajax.xhr.send(data);
        }
        return ajax;
    }

