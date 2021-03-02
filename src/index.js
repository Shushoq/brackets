module.exports = function check(str, bracketsConfig) {

    if (str.length % 2 !== 0) return false

    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
        const brackets = bracketsConfig[j][0] + bracketsConfig[j][1]
        console.log(str)
        while (true) {
          if(str.includes(brackets)) {
            str = str.replace(brackets, '')
            --i
          } else break
        }
      }
    }
    return str.length === 0 ? true : false
}
