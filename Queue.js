class Queue {
  constructor() {
    this.queue = [];
  }
//enqueue: Agrega un nuevo elemento a la cola, situándolo al final de ésta.

  enqueue(element) {
    this.queue.push(element);
    return this.queue;
  }

//dequeue: Retorna el primer elemento de la cola, quitándolo de ésta.
    
  dequeue() {
    return this.queue.shift();
  }
    
// peek: Retorna el primer elemento de la cola, sin quitarlo de ésta.
    
  peek() {
    return this.queue[0];
  }

//size: Retorna el número de elementos que contiene la cola.

  size() {
    return this.queue.length;
  }


    
  isEmpty() {
    return this.queue.length === 0;
  }
    
//print: Muestra el contenido de la cola.
    
  print() {
    return this.queue;
  }
}

// Extraido de https://medium.com/noders/estructuras-de-datos-con-javascript-parte-2-colas-queues-dbd86125d3d5