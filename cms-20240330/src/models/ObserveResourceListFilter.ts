// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObserveResourceListFilter extends $dara.Model {
  /**
   * @remarks
   * Returns resources if a specified property contains any string in this array.
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

