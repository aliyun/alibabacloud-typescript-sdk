// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProductResponseBody extends $dara.Model {
  /**
   * @example
   * 123456
   */
  productId?: number;
  /**
   * @example
   * 126D4DDD-05A5-49B1-B18C-39C4A929BFB2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      productId: 'ProductId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productId: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

