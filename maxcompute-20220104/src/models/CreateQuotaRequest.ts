// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * Billing type. Use payasyougo for pay-as-you-go or subscription for subscription.
   * 
   * This parameter is required.
   * 
   * @example
   * payasyougo
   */
  chargeType?: string;
  /**
   * @remarks
   * Product code. For example:
   * Alibaba Cloud China Website (www\\.aliyun.com): use odps for pay-as-you-go and odpsplus for subscription.
   * Alibaba Cloud International Website (www\\.alibabacloud.com): use odps_intl for pay-as-you-go and odpsplus_intl for subscription.
   * 
   * This parameter is required.
   * 
   * @example
   * odps
   */
  commodityCode?: string;
  /**
   * @remarks
   * Quota specification.
   * >Notice: Required only for subscription quotas.
   * The minimum CU value is 50.
   * ord_time supports month and year.
   * 
   * @example
   * {"CU":50,"ord_time":"1:Month","autoRenew":false}
   */
  commodityData?: string;
  /**
   * @remarks
   * >Notice: 
   * 
   * Required only for subscription quotas.
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

