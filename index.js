 var int1 = 0;
 var int2 = 0;
 var ccc = 0;
 var aaa = '';

 new Vue({
  el: '#app',
  data: function () {
      return {
          msg1: "",
          msg2: "",
          msg3: ""
      };
  },
  methods: {
    showMessage1: function () {
      int1 *= 10;
      int1 += 1;
      this.msg1 = int2;
      this.msg2 = aaa;
      this.msg3 = int1;
  },
  showMessage2: function () {
    int1 *= 10;
    int1 += 2;     
    this.msg1 = int2;
    this.msg2 = aaa;
    this.msg3 = int1;
  },
  showMessage3: function () {
    int1 *= 10;
    int1 += 3;
    this.msg1 = int2;
    this.msg2 = aaa;
    this.msg3 = int1;
  },
  showMessage4: function () {
    int1 *= 10;
    int1 += 4;
    this.msg1 = int2;
    this.msg2 = aaa;
    this.msg3 = int1;
  },
  showMessage5: function () {
    int1 *= 10;
    int1 += 5;
    this.msg1 = int2;
    this.msg2 = aaa;
    this.msg3 = int1;
  },
  showMessage6: function () {
    int1 *= 10;
    int1 += 6;
    this.msg1 = int2;
    this.msg2 = aaa;
    this.msg3 = int1;
  },
  showMessage7: function () {
    int1 *= 10;
    int1 += 7;
    this.msg1 = int2;
    this.msg2 = aaa;
    this.msg3 = int1;
  },
  showMessage8: function () {
    int1 *= 10;
    int1 += 8;
    this.msg1 = int2;
    this.msg2 = aaa;
    this.msg3 = int1;
  },
  showMessage9: function () {
    int1 *= 10;
    int1 += 9; 
    this.msg1 = int2;
    this.msg2 = aaa;
    this.msg3 = int1;
  },
  showMessage0: function () {
    int1 *= 10;
    int1 += 0;
    this.msg1 = int2;
    this.msg2 = aaa;
    this.msg3 = int1;
  },
  showMessage10: function () {
    if(ccc == 1){
      int2 += int1;
       }else{
         if(ccc == 2){
           int2 -= int1;
         }else{
           if(ccc == 3){
             int2 *= int1;
           }else{
             if(ccc == 4){
               int2 /= int1;
             }else{
                 int2 = int1;
               }
             }
           }
         }
    int1 = 0;
    ccc = 1;
    aaa = '+';
    this.msg1 = int2;
    this.msg2 = aaa;
    this.msg3 = int1;
  },

  showMessage11: function () {
    if(ccc == 1){
      int2 += int1;
       }else{
         if(ccc == 2){
           int2 -= int1;
         }else{
           if(ccc == 3){
             int2 *= int1;
           }else{
             if(ccc == 4){
               int2 /= int1;
             }else{
                 int2 = int1;
               }
             }
           }
         }
    int1 = 0;
    ccc = 2;
    aaa = '-';
    this.msg1 = int2;
    this.msg2 = aaa;
    this.msg3 = int1;
  },


  showMessage12: function () {
    if(ccc == 1){
      int2 += int1;
       }else{
         if(ccc == 2){
           int2 -= int1;
         }else{
           if(ccc == 3){
             int2 *= int1;
           }else{
             if(ccc == 4){
               int2 /= int1;
             }else{
                 int2 = int1;
               }
             }
           }
         }
    int1 = 0;
    ccc = 3;      
    aaa = '*';
    this.msg1 = int2;
    this.msg2 = aaa;
    this.msg3 = int1;
  },

showMessage13: function () {
  if(ccc == 1){
    int2 += int1;
     }else{
       if(ccc == 2){
         int2 -= int1;
       }else{
         if(ccc == 3){
           int2 *= int1;
         }else{
           if(ccc == 4){
             int2 /= int1;
           }else{
               int2 = int1;
             }
           }
         }
       }
     int1 = 0;
     ccc = 4;  
     aaa = '/';
     this.msg1 = int2;
     this.msg2 = aaa;
     this.msg3 = int1;

},
showMessage14: function () {
  if(ccc == 1){
    int2 += int1;
     }else{
       if(ccc == 2){
         int2 -= int1;
       }else{
         if(ccc == 3){
           int2 *= int1;
         }else{
           if(ccc == 4){
             int2 /= int1;
           }else{
               int2 = int1;
             }
           }
         }
       }
     int1 = 0;
     ccc = 0;  
     aaa = '';         
     this.msg1 = int2;
     this.msg2 = aaa;
     this.msg3 = int1;
},
}
});