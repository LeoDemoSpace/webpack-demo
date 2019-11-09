console.log('test');

@log
class A {
    a = 1;
}

const a = new A();

console.log(a.a);

function log(target) {
    console.log(target);
}