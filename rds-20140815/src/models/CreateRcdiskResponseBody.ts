// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRCDiskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cloud disk ID.
   * 
   * @example
   * rcd-2zegrjtnkp6dqbe1egca
   */
  diskId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 100789370230206
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F2911788-25E8-42E5-A3A3-1B38D263F01E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
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

