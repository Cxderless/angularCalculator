import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, Type } from '@angular/core';
import { init, formula, ExpressionParser } from 'expressionparser'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  solved = false;
  pressedEE = false;
  subText = '';
  mainText = '';
  operand1: number;
  operand2: number;
  operator = '';
  calculationString = '';
  answered = false;
  operatorSet = false;
  flip = 'rad';

  pressKey(key: string) {
    if(this.solved && /\d/g.test(key)) {
      this.allClear();
    }
    if(key === '1/x')
    {
      if (this.mainText.length >= 20) {
        return;
      }
      this.calculationString = ("1 / (" + this.calculationString);
      this.mainText = ("1/(" + this.mainText);
    }
    else if(key === 'flip')
    {
      if(this.flip === 'rad')
      {
        this.flip = 'deg';

        if(this.solved || /\d+/g.test(this.mainText))
        {
          this.mainText = String(Number(this.mainText) * 180/Math.PI);
        }
      }
      else
      {
        this.flip = 'rad';


        if(this.solved || /\d+/g.test(this.mainText))
        {
          this.mainText = String(Number(this.mainText) * Math.PI/180);
        }
      }
    }
    else if(key === 's' || key === 'c' || key === 't' || key === 'o' || key === 'n')
    {
      var dict = {'s': 'sin', 'c': 'cos', 't': 'tan', 'o': 'log', 'n': 'ln'}
      if(this.mainText.length >= 13)
      {
        return;
      }
      if(this.mainText != '')
      {
        this.calculationString += ' ';
      }

      this.calculationString = key + " ( " + this.calculationString;
      this.mainText = dict[key] + "(" + this.mainText;
    }
    else if(key === 'e^x')
    {
      if(this.mainText.length >= 13)
      {
        return;
      }
      if(this.mainText != '')
      {
        this.calculationString += ' ';
      }

      this.calculationString = "e ^ ( " + this.calculationString;
      this.mainText = "e^( " + this.mainText;
    }
    else if(key === 'q')
    {
      if(this.mainText.length >= 13)
      {
        return;
      }
      if(this.mainText != '')
      {
        this.calculationString += ' ';
      }
      this.calculationString = ("2 q (" + this.calculationString);
      this.mainText = ("sqrt(" + this.mainText);
    }
    else if(key === 'x q y')
    {
      if(this.mainText.length >= 13)
      {
        return;
      }
      if(this.mainText != '')
      {
        this.calculationString += ' ';
      }
      this.calculationString = "( " + this.calculationString + " ) " + "q (";
      this.mainText = "(".sup() + this.mainText.sup() + ")".sup() + "sqrt(";
    }
    else if(key === '%') {
      const lastKey = this.mainText[this.mainText.length - 1];
      if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+' || (this.mainText === ''))  {
        return;
      }

      this.operand2 = parseFloat(lastKey) * 0.01;
      if (this.mainText.length >= 16) {
        return;
      }
      this.mainText = this.mainText.slice(0, -1);
      this.mainText += String(this.operand2);

    }
    else if(key === '!')
    {
      const lastKey = this.mainText[this.mainText.length - 1];
      if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+' || (this.mainText === ''))  {
        return;
      }
      if (this.mainText.length >= 20) {
        return;
      }
      this.calculationString += "!";
      this.mainText += "!";
    }
    else if(key === '^ y')
    {
      const lastKey = this.mainText[this.mainText.length - 1];
      if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+' || (this.mainText === ''))  {
        return;
      }
      if (this.mainText.length >= 16) {
        return;
      }
      this.calculationString += ' '
      this.calculationString += "^ (";
      this.mainText += "^(";
    }
    else {
      if (key === '/' || key === 'x' || key === '-' || key === '+' || key === '^ 2' || key === '^ 3' || key === 'EE') {
        const lastKey = this.mainText[this.mainText.length - 1];
        if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+' || (this.mainText === ''))  {
          return;
        }

        if(this.pressedEE)
        {
          this.calculationString += ")";
          this.pressedEE = false;
        }
        if(key === 'EE')
        {
          this.pressedEE = true;
          if (this.mainText.length >= 17) {
            return;
          }
          this.calculationString += " * 10 ^ (";
          this.mainText += key;
          return;
        }
      }
      if (this.mainText.length >= 16 && !(/[s][u][p]/g.test(this.mainText))) {
        return;
      }
      if(this.mainText != '') {
        this.calculationString += ' ';
      }
      this.calculationString += key;
      if(/[^][ ](\d)/g.test(key))
      {
        this.mainText += key.replace(/[^][ ](\d)/g, "^$1");
      }
      else
      {
        this.mainText += key;
      }
    }

  }

  allClear() {
    this.mainText = '';
    this.subText = '';
    this.calculationString = '';
    this.solved = false;
    this.pressedEE = false;
  }
  factorialize(num) {
    num = Number(num);
    if (num < 0)
          return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * this.factorialize(num - 1));
    }
  }
  nthroot(x, n)
  {
    var ng = n % 2;
    if((ng == 1) || x<0)
    {
      x = -x;
    }
    var r = Math.pow(x, 1 / n);
    n = Math.pow(r, n);

    if(Math.abs(x - n) < 1 && (x > 0 === n > 0))
    {
      return ng ? -r : r;
    }
  }
  getAnswer() {
    if(this.pressedEE)
    {
      this.calculationString += " )";
      this.pressedEE = false;
    }
    this.calculationString = this.calculationString.replace(/(\d+)\s+[.]\s+(\d+)/g, "$1.$2");
    this.calculationString = this.calculationString.replace(/\s+(\d+)\s+/g, "$1");
    this.calculationString = this.calculationString.replace(/[(]\s*(\d+)\s*[)]/g, "$1");
    let ops = {'+': 1, '-': 1, '*': 2, '/': 2, '^': 3, 'q': 3, 's': 4, 'c': 4, 't': 4, 'o': 4, 'n': 4};
    let peek = (a) => a[a.length - 1];
    let stack = [];
    this.subText = this.mainText;
    this.calculationString = this.calculationString.replace('pi', String(Math.PI.toFixed(7)));
    this.calculationString = this.calculationString.replace('e', String(Math.E.toFixed(7)));
    if(/(\d+)[!]/g.test(this.calculationString))
    {
      let n = this.calculationString.match(/(\d+)[!]/g);
      for(var i = 0; i < n.length; i++) {
        this.calculationString = this.calculationString.replace(n[i], function(a, b) {
          return String(this.factorialize(b));
        });
      }
    }
    if(this.calculationString === String(Math.E) || this.calculationString === String(Math.PI))
    {
      this.mainText = this.calculationString;
      return;
    }
    var numIn = false;
    this.mainText = this.rpn(this.calculationString
      .split('')
      .reduce((output, token) => {
        if (/\d/g.test(token) || token === ".") {
          if(numIn)
          {
            var lastIn = output.pop();
            output.push(String(lastIn) + String(token));
          }
          else
          {
            output.push(token);
            numIn = true;
          }
        }

        if (token in ops) {
          if(numIn)
          {
            numIn = false;
          }
          while (peek(stack) in ops && ops[token] <= ops[peek(stack)])
            output.push(stack.pop());
          stack.push(token);
        }

        if (token == '(') {
          if(numIn)
          {
            numIn = false;
          }
          stack.push(token);
        }

        if (token == ')') {
          if(numIn)
          {
            numIn = false;
          }
          while (peek(stack) != '(')
            output.push(stack.pop());
          stack.pop();
        }

        return output;
      }, [])
      .concat(stack.reverse())
      .join(' '));
    this.solved = true;
  }

  rpn(infix) {
    var st,tk,i,x,y,z;
    infix = infix.replace(/(\d+)[ ][.][ ](\d+)/g, "$1.$2");
    let s: any = infix.replace(/^\s*|\s*$/g,'');
    s = s.length>0 ? s.split(/\s+/) : [];
    st = [];
    for (i=0; i<s.length; ++i) {
      tk = s[i]
      if (/^[+-]?(\.\d+|\d+(\.\d*)?)$/.test(tk))
        z = Number(tk);
      else {
        if ('+-*/^qscton'.indexOf(tk)==-1) break
        if(tk === '^') {
          y = st.pop();
          x = st.pop();
          var base_x = x;
          for(var f = 0; f < y - 1; f++)
          {
            x = Number(x) * Number(base_x);
          }
          z = Number(String(x).substr(0, 19).trim());
        }
        else if(tk === 'q')
        {
          y = st.pop();
          x = st.pop();
          z = this.nthroot(Number(y), Number(x));
        }
        else if(tk === 's')
        {
          y = st.pop();
          if(this.flip === 'rad')
          {
            z = Math.sin(Number(y));
          }
          else
          {
            z = Math.sin(Number(y)) * (180/Math.PI);
          }
        }
        else if(tk === 'c')
        {
          y = st.pop();
          if(this.flip === 'rad')
          {
            z = Math.cos(Number(y));
          }
          else
          {
            z = Math.cos(Number(y)) * (180/Math.PI);
          }
        }
        else if(tk === 't')
        {
          y = st.pop();
          if(this.flip === 'rad')
          {
            z = Math.tan(Number(y));
          }
          else
          {
            z = Math.tan(Number(y)) * (180/Math.PI);
          }
        }
        else if(tk === 'o')
        {
          y = st.pop();
          z = Math.log10(y);
        }
        else if(tk === 'n')
        {
          y = st.pop();
          z = Math.log(y);
        }
        else {
          y = st.pop();
          x = st.pop();
          z = eval(x+tk+' '+y);
          z = Number(String(z).substr(0, 19).trim());
        }

      }
      st.push(z);
    }
    return i<s.length || st.length>1 ? 'error'
        : st.length==1 ? st.pop() : ''
  }
}
