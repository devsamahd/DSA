// Given a number "n" find the first "n" elements of the Fibonacci sequence

const fibonacci = (num) => {
    let fib = []
    for(let i = 0; i < num; i++) {
        const num = fib.length === 0 ? 0 :fib.length === 1? 1 : fib[fib.length-2] + fib[fib.length-1]
        fib.push(num)
    }
    return fib
}

console.log(fibonacci(4))
