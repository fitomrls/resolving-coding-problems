function invertir(param) {
    if(param.length==0) return ''
    if(/[a-zA-Z]/.test(param)){

        const arr = param.split('')
        const others = []
        const letters = []
        arr.forEach(element => {
            if(element.match(/[a-z]/i)){
                letters.unshift(element)
            }else{
                others.push(element)
            }
        })
        let othersStr = others.join('')
        let lettersStr = letters.join('')
        let result = othersStr+lettersStr
        //.reverse().join('')
        return result
    } else{
        return param
    }
}

module.exports = invertir