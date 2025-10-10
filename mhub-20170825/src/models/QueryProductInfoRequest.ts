// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryProductInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  productId?: string;
  static names(): { [key: string]: string } {
    return {
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

