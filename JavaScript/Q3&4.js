let obj={};
function groupObjectsBy(array,property)
{
    for(let val of array){
        let key=val[property];
        if(!obj[key])
        {
            obj[key]=[];
        }
        obj[key].push(val);
    }
}

const array=[ 
    {
      "channel": "A",
      "name": "shoe"
    },
    {
      "channel": "A",
      "name": "electronics"
    },
    {
      "channel": "B",
      "name": "apparel"
    },
    {
      "channel": "C",
      "name": "electronics"
    }
  ]
  groupObjectsBy(array,"channel");
  console.log(obj);

  