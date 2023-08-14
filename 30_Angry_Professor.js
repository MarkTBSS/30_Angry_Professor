function angryProfessor(k, a) {
    var onTimeStudent = 0;
    a.forEach(x => {
        if (x <= 0) {
            onTimeStudent++;
        }
    });
    var lateStudent = 0
    a.forEach(x => {
        if (x > 0) {
            lateStudent++;
        }
    });
    var classCanceled = "YES"
    if (onTimeStudent >= k) { classCanceled = "NO" }
    return classCanceled
}

var k = 3
var a = [-2, -1, 0, 1, 2]
console.log(angryProfessor(k, a))