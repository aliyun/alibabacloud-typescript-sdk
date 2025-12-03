// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResizeDiskSizeResponseBody extends $dara.Model {
  /**
   * @example
   * 3C22622B-8555-42BF-AD8A-1B960743****
   */
  orderId?: string;
  /**
   * @example
   * 493A762B-E4A6-44E9-B877-CA6D0CAF8B29
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
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

