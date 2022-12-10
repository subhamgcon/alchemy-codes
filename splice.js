function removeOccurrences(array, num) {
    let count=0;
    for(let i=0;i<array.length;i++)
    {
        if(array[i]===num)
        {
            count++;
            array.splice(i, num);
            if(count>=2)
            {
                array.splice(0,array.length); // delete the whole Array
                
            }
            /*else{
                array.splice(i,num);
            }*/
        }
    }
}

module.exports = removeOccurrences;
