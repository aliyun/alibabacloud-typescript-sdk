// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyRCInstanceChargeTypeResponseBodyFeeOfInstances } from "./ModifyRcinstanceChargeTypeResponseBodyFeeOfInstances";


export class ModifyRCInstanceChargeTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The billing method.
   * *   **POSTPAY**: pay-as-you-go.
   * *   **PREPAY**: subscription.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the instance expires.
   * >  If you change the billing method from subscription to pay-as-you-go, this parameter is not returned.
   */
  expiredTime?: string[];
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   */
  feeOfInstances?: ModifyRCInstanceChargeTypeResponseBodyFeeOfInstances[];
  /**
   * @remarks
   * The list of instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 2133400000****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6EF82B07-28D2-48D1-B5D6-7E78FED277C7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      expiredTime: 'ExpiredTime',
      feeOfInstances: 'FeeOfInstances',
      instanceIds: 'InstanceIds',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      expiredTime: { 'type': 'array', 'itemType': 'string' },
      feeOfInstances: { 'type': 'array', 'itemType': ModifyRCInstanceChargeTypeResponseBodyFeeOfInstances },
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.expiredTime)) {
      $dara.Model.validateArray(this.expiredTime);
    }
    if(Array.isArray(this.feeOfInstances)) {
      $dara.Model.validateArray(this.feeOfInstances);
    }
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

