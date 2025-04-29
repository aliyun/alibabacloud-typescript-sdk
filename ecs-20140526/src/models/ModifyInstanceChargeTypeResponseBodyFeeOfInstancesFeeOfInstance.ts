// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceChargeTypeResponseBodyFeeOfInstancesFeeOfInstance extends $dara.Model {
  /**
   * @remarks
   * The unit of currency for the bill.
   * 
   * Alibaba Cloud China site (aliyun.com): CNY.
   * 
   * Alibaba Cloud International site (alibabacloud.com): USD.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The cost value.
   * 
   * @example
   * 0
   */
  fee?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp67acfmxazb4p****
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

