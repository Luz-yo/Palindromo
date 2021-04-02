class Stack { 
    contructor() {
        this.stack = [];
    }
// Las pilas operan bajo una modalidad llamada LIFO (Last In First Out). Esto quiere decir, que siempre el último elemento agregado va a ser el primero que saquemos.    
    
//  push: Agrega un nuevo valor a la pila, ubicándolo al final de ésta.
    push(element) {
        this.stack.push(element);
        return this.stack;
    }

//  pop: Retorna el último valor ingresado a la pila, sacándolo de ésta.
    pop(){
        return this.stack.pop();
    }
//peek: Retorna el último valor ingresado a la pila, sin sacarlo de ésta.
    peek() {
        return this.stack[this.stack.length - 1];
    }    
//  size: Retorna el número de elementos que contiene la pila.
    size(){
        return this.stack.length;
    }
}

// Extraido de https://medium.com/noders/estructuras-de-datos-con-javascript-parte-1-pilas-stacks-5a2092cff16a