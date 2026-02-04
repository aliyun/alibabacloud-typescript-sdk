// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResizeTairKVCacheCustomInstanceDiskResponseBody extends $dara.Model {
  /**
   * @example
   * 20905403119****
   */
  orderId?: string;
  /**
   * @example
   * ABAF95F6-35C1-4177-AF3A-70969EBD****
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

