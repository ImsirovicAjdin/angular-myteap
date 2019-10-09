// Operators
/*
Now let’s go beyond basics and talk about the next most important component of RxJS, Operators. 

Operators offer a way to manipulate values from an observable, returning a transformed value for the subscriber or a new observable of transformed values.

e.g. Let’s suppose the water our user is getting from the municipality water supply is 
having some impurities and he wants to purify that water. 
For that, he installed an RO(Reverse Osmosis Purifier) machine before the tap. 
Now he can get the purified water from the tap of the RO. 
This is similar to the functionality of operators. 
RxJS has operators which process the incoming data stream
and returns another processed observable or data value.

*/
import { range } from 'rxjs/observable/range';
import { filter } from 'rxjs/operators';

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {

  // Build an Observable using range
  public observable = range(1,10);

  // Apply the filter operator on the observable and get a new filtered data stream
  public filteredObservable = this.observable.pipe(filter(num => num % 2 !== 0))

  constructor(){
    // Subscribe the observable to get the data from the data stream
    this.filteredObservable.subscribe((val) => console.log(val));
  }

}