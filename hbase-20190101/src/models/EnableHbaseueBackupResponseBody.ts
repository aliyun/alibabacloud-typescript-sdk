// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableHBaseueBackupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID of the activated BDS backup service.
   * 
   * @example
   * bds-m5e54q06ceyhxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 1449xxx
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15272D5D-46E8-4400-9CC8-A7E7B589F575
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
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

