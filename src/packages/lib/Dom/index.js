import Stack
  from '../Stack';

/**
 * Dom
 */
class Dom {
  constructor(ele) {
    this._ele = ele;
  }

  /**
   * Create Stack for dom element path
   */
  get domPath() {
    let ele = this._ele;
    const stack = new Stack();
    /**
     * While our target element has a parent node we will traverse
     * its children in order to build the path
     */
    while ( ele.parentNode != null ) {
      let sibCount = 0;
      let sibIndex = 0;
      for ( let i = 0; i < ele.parentNode.childNodes.length; i++ ) {
        const sib = ele.parentNode.childNodes[i];
        if ( sib.nodeName === ele.nodeName ) {
          if ( sib === ele ) {
            sibIndex = sibCount;
          }
          sibCount++;
        }
      }
      const elementNodeName = ele.nodeName.toLowerCase();
      /**
       * Categorize parent element based on
       * id
       * tag name index if multiple tag names
       * tag name
       */
      if (ele.id) {
        const idQuerySelector =  `#${ele.id}`;
        stack.add(idQuerySelector);
      } else if (ele.className) {
        const classNameQuerySelector =  `.${ele.className.split(' ')[0]}`;
        stack.add(classNameQuerySelector);
      }
      else if ( sibCount > 1 ) {
        const equalQuerySelector = `${elementNodeName}:eq(${sibIndex})`;
        stack.add(equalQuerySelector);
      } else {
        const tagQuerySelector = elementNodeName;
        stack.add(tagQuerySelector);
      }
      // Move up the chain to next parent ele
      ele = ele.parentNode;
    }

    return stack;
  }

  forEach(callback) {
    this.domPath.traverse(callback);
  }

  toArray() {
    return this.domPath.toArray();
  }
}

export default Dom;
