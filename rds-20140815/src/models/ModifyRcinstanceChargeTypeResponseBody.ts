// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCInstanceChargeTypeResponseBodyFeeOfInstances extends $dara.Model {
  currency?: string;
  fee?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      fee: 'Fee',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      fee: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRCInstanceChargeTypeResponseBody extends $dara.Model {
  /**
   * @example
   * Prepaid
   */
  chargeType?: string;
  expiredTime?: string[];
  feeOfInstances?: ModifyRCInstanceChargeTypeResponseBodyFeeOfInstances[];
  instanceIds?: string[];
  orderId?: string;
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

