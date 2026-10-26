// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObserveResourceListFilter extends $dara.Model {
  /**
   * @remarks
   * The match condition: the observeResourceList of a rule contains at least one instance ID in the array (OR semantics).
   * 
   * @example
   * ["i-bp1a2b3c4d5e6f7g8h9i"]
   */
  contains?: string[];
  static names(): { [key: string]: string } {
    return {
      contains: 'contains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contains: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.contains)) {
      $dara.Model.validateArray(this.contains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

