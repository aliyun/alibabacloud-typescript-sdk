// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductAbilitiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Products supported by the edge node.
   */
  productAbilities?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * xxxxx-75ED-422E-A022-7121FA18C968
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      productAbilities: 'ProductAbilities',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productAbilities: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.productAbilities)) {
      $dara.Model.validateArray(this.productAbilities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

