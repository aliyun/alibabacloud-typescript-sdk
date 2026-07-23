// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PurchaseDDoSInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * esa-ddos-9tuv*********
   */
  instanceId?: string;
  /**
   * @example
   * 2223332122***
   */
  orderId?: string;
  /**
   * @example
   * F61CDR30-E83C-4FDA-BF73-9A94CDD44229
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

