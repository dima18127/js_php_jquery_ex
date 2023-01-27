let Obj = {data:[   {itemId:1, itemName:"пункт №1", itemParentId:0},
                    {itemId:2, itemName:"пункт №1.1", itemParentId:1},
                    {itemId:3, itemName:"пункт №1.2", itemParentId:1},
                    {itemId:4, itemName:"пункт №1.2.1", itemParentId:3},
                    {itemId:5, itemName:"пункт №1.2.2", itemParentId:3},
                    {itemId:6, itemName:"пункт №1.2.3", itemParentId:3},
                    {itemId:7, itemName:"пункт №2", itemParentId:0},
                    {itemId:8, itemName:"пункт №3", itemParentId:0},
                    {itemId:9, itemName:"пункт №3.1", itemParentId:8},
                    {itemId:10, itemName:"пункт №3.2", itemParentId:8},
                    {itemId:11, itemName:"пункт №3.3", itemParentId:8},
                    {itemId:12, itemName:"пункт №3.3.1", itemParentId:11},
                    {itemId:13, itemName:"пункт №3.3.1.1", itemParentId:12},
                    {itemId:14, itemName:"пункт №3.3.1.2", itemParentId:12},
                    {itemId:15, itemName:"пункт №3.3.1.3", itemParentId:12},
                    {itemId:16, itemName:"пункт №3.3.2", itemParentId:11},
                    {itemId:17, itemName:"пункт №4", itemParentId:0},
                    {itemId:18, itemName:"пункт №5", itemParentId:0},
                    {itemId:19, itemName:"пункт №5.1", itemParentId:18}
    ]}
    let ul = document.createElement('ul')
    ul.setAttribute('id', 0)

    document.querySelector('.result').insertAdjacentElement( "afterend", ul)

    let Counter = 0;
    function recurse(){
        if (Counter === Obj.data.length) { return "done"}
        let ParentId = Obj.data[Counter]['itemParentId']
        let parent = document.getElementById(ParentId) 
        let li = document.createElement('li')
        if (parent.nodeName === "UL" ){
            parent.append(li)
            li.append(Obj.data[Counter]['itemName'])
            li.setAttribute('id', Obj.data[Counter]['itemId'])
        }
        else {
            let ul2 = document.createElement('ul');
            parent.append(ul2)
            ul2.append(Obj.data[Counter]['itemName'])
            ul2.setAttribute('id', Obj.data[Counter]['itemId'])
        }
        Counter++ 
       return recurse()
    }
    recurse()