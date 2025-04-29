// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDedicatedHostsChargeTypeResponseBodyFeeOfInstancesFeeOfInstance extends $dara.Model {
  /**
   * @remarks
   * The unit of currency for the bill.
   * 
   * Alibaba Cloud China site (aliyun.com): CNY
   * 
   * Alibaba Cloud International site (alibabacloud.com): USD
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The charged amount.
   * 
   * @example
   * 0
   */
  fee?: string;
  /**
   * @remarks
   * The IDs of the dedicated hosts.
   * 
   * @example
   * dh-bp181e5064b5sotrr****
   */
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

