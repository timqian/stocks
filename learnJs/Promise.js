function Promise(exector) {
  var queue = [];
  exector(resolve, reject);

  function next(state, val){
    var arr;
    //为了使resolve晚于 then 执行  暂时用一个setTimeout
    setTimeout(function(){
      if(arr = queue.shift()){
        arr[state](val);
      }
    }, 0);
  }

  function resolve(x){
      next(0, x);
  }
  function reject(reason){
      next(1, reason);
  }

  this.then = function(resolve, reject){
    queue.push([resolve, reject]);
  }
}
