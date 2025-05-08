// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCacheReserveSpecResponseBody extends $dara.Model {
  /**
   * @example
   * esa-cr-9tuv*********
   */
  instanceId?: string;
  /**
   * @example
   * 2223332122***
   */
  orderId?: string;
  /**
   * @example
   * 40423A7F-A83D-1E24-B80E-86DD25790759
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

