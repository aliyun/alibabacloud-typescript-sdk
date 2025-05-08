// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRatePlanSpecResponseBody extends $dara.Model {
  /**
   * @example
   * xcdn-as23ds***
   */
  instanceId?: string;
  /**
   * @example
   * 2223332122***
   */
  orderId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 30423A7F-A83D-1E24-B80E-86DD25790758
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

