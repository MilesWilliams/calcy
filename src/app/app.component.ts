import { Component } from '@angular/core';
import { KeyInput, FuncTypes } from './key-input.interface';
import { allKeys, metaKeys, availableKeys } from './available-keys';

// const { clipboard } = require('electron')
import {clipboard} from 'electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  private readonly defaultDisplay = "0";
  
  public calculation: string = "0";
  public calcPreview: string = "0";
  
  private keyLogger: string[] = [];
  public keys = allKeys;
  public availableKeys = availableKeys;
  public metaKeys = metaKeys;

  constructor() {

    document.addEventListener('keydown', (e: KeyboardEvent) => {
      console.log(e);
      if (e.key === 'Meta') return this.keyLogger[0] = e.key;

      if (this.keyLogger.length > 0 || e.key === 'Backspace') {
        const metaKeys = this.GetStringKeyEntities(this.keys).filter((k: KeyInput) => k.requires_meta);

        if (this.keys[e.key]) {
          const key = this.keys[e.key];
          this.mapToFuction(key.function, key.keyCode, key.value);
        }
      } else {
        if (this.keys[e.key] && !this.keys[e.key].requires_meta) {
          const key = this.keys[e.key];
          this.mapToFuction(key.function, key.keyCode, key.value);
        }
      }
    })

    //Clean up the keyLogger when the meta keys are released.
    document.addEventListener('keyup', (e: KeyboardEvent) => {if (e.key === 'Meta') this.keyLogger.length = 0;} )
  }

  public _appendToCalc(value) {
    if (this.calculation === "0") this.calculation = value;

    else {
      const calc = String(this.calculation);
      switch (calc.split("")[this.calculation.length -1] ) {
        case "+":
        case "-":
        case "/":
        case "(":
        case ")":
        case "*":
        case "%":
          this.calculation = this.calculation + " " + value;
          break;
      
        default:
          switch (value) {
            case "+":
            case "-":
            case "/":
            case "(":
            case ")":
            case "*":
            case "%":
                this.calculation = this.calculation + " " + value;
                break;

            default:
              this.calculation = this.calculation + value;  
              break;
          }
          break;
      }
    }

    this._calucatePreview();

  }

  private _clearCalc() {
    this.calculation = this.defaultDisplay;
    this.calcPreview = this.defaultDisplay;
  }

  private _calculate() {
    try {
      if (this.calculation[this.calculation.length - 1] === "%") {
        this.calculation = this.calculation + "1";
      }
      
      this.calculation = eval(this.calculation).toFixed(2);
    } catch (error) {
      // console.log(error);
    }
  }

  private _calucatePreview() {
    try {
      this.calcPreview = eval(this.calculation).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

    } catch (error) {
      // console.log(error);
    }
  }

  private _calculateTip() {
    try {
      const currentCalc = parseInt(eval(this.calculation));
      const tip = currentCalc * 0.15;

      this.calcPreview = 'R ' + (currentCalc + tip).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');;
      if (this.calculation[this.calculation.length - 1] !== '+' || this.calculation[this.calculation.length -1] !== '-') {
        this.calculation = 'R ' + this.calculation + ' + R ' + String(tip);
      } else {
        this.calculation = 'R ' + this.calculation + 'R ' + String(tip.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
      }
    } catch (error) {
      // console.log(error);
    }
  }

  private _copy() {
    clipboard.writeText(String(this.calcPreview));
  }

  private _paste() {
    this.calculation=  clipboard.readText();
    this.calcPreview =  clipboard.readText();
  }

  private _deleteInput() {
    this.calculation = String(this.calculation);
    if (this.calculation.length > 1) this.calculation = this.calculation.substring(0, this.calculation.length - 1);
    else this.calculation = this.defaultDisplay;
    
    this._calucatePreview();
  }

  public mapToFuction(func: FuncTypes, code, value) {
    switch (func) {

      case 'append':
        this._appendToCalc(value);
        break;

      case 'delete':
        this._deleteInput();
        break;

      case 'clear':
        this._clearCalc();
        break;

      case 'calculate':
        this._calculate();
        break;

      case 'tip':
        this._calculateTip();
        break;

      case 'copy':
        this._copy();
        break;

      case 'paste':
        this._paste();
        break;
    }
  }

  // Converts hashmap to array
  public GetStringKeyEntities(entities): any[] {
    return Object.keys(entities).map(key => {
      if (key) return entities[key];
    });
  }

  public GetSortedStringKeyEntities(entities): any[] {
    const arr =Object.keys(entities).map(key => {
      if (key) return entities[key];
    }).sort(function(obj1, obj2) {return obj1.position - obj2.position;})

    console.log(arr);
    return arr;
  }
}
