// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteProductResponseBody extends $dara.Model {
  /**
   * @example
   * PRODUCT_NOT_ALONE
   */
  message?: string;
  /**
   * @example
   * 126D4DDD-05A5-49B1-B18C-39C4A929BFB2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
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

