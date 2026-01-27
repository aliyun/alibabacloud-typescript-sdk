// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCDiskChargeTypeResponseBody extends $dara.Model {
  /**
   * @example
   * Prepaid
   */
  chargeType?: string;
  expiredTime?: string[];
  instanceIds?: string[];
  /**
   * @example
   * 2133400000****
   */
  orderId?: string;
  /**
   * @example
   * 6EF82B07-28D2-48D1-B5D6-7E78FED277C7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      expiredTime: 'ExpiredTime',
      instanceIds: 'InstanceIds',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      expiredTime: { 'type': 'array', 'itemType': 'string' },
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.expiredTime)) {
      $dara.Model.validateArray(this.expiredTime);
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

