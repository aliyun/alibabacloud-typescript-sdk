// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method. Valid values: payasyougo (pay-as-you-go) and subscription.
   * 
   * This parameter is required.
   * 
   * @example
   * payasyougo
   */
  chargeType?: string;
  /**
   * @remarks
   * The commodity code. Example: On Alibaba Cloud China Website (www.aliyun.com), the commodity code for pay-as-you-go is odps and the commodity code for subscription is odpsplus. On Alibaba Cloud International Website (www.alibabacloud.com), the commodity code for pay-as-you-go is odps_intl and the commodity code for subscription is odpsplus_intl.
   * 
   * This parameter is required.
   * 
   * @example
   * odps
   */
  commodityCode?: string;
  /**
   * @remarks
   * The commodity specifications of the quota.
   * 
   * >Notice: 
   * 
   * - This parameter is required only for subscription quotas.
   * The minimum unit for cu is 50.
   * ord_time supports monthly (month) and yearly (year) billing.
   * 
   * - After creation, commodityData cannot be modified. To modify it, go to the MaxCompute console.
   * 
   * @example
   * {"CU":50,"ord_time":"1:Month","autoRenew":false}
   */
  commodityData?: string;
  /**
   * @remarks
   * >Notice: This parameter is required only for subscription quotas.
   * 
   * @example
   * MyQuota
   */
  partNickName?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      commodityCode: 'commodityCode',
      commodityData: 'commodityData',
      partNickName: 'partNickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      commodityData: 'string',
      partNickName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

