// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResizeDiskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 21522202681****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 689412F2-8402-181E-8C87-1EF62331DCC4
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

