function metadataParser(version,channel,keyField){
        this._version=version;
        this._channel=channel;
        this._keyField=keyField;
        this.getVersion=function(){
            return this._version;
        };
        this.getchannel=function(){
            return this._channel;
        };
        
        this.setVersion=function(version){
            this._version=version;
        };
        this.setChannel=function(channel){
            this._channel=channel;
        };

        this.getKeyField=function(array){
            return array.map((x)=>{
                return x.keyField;
            });
        }
    
}
const obj=new metadataParser(1,12,13);
console.log(obj);
obj.setChannel(15);
obj.setVersion(15);
console.log(obj.getVersion());
console.log(obj.getchannel());
console.log(obj.getKeyField([{keyField: "A"}, {keyField: "B"}, {keyField :"C"}]));
console.log(obj);
