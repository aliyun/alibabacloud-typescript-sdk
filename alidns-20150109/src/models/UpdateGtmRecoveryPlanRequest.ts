// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGtmRecoveryPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The list of IDs of the fault address pools.
   * 
   * @example
   * ["hra0**"]
   */
  faultAddrPool?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese
   * 
   * - en: English
   * 
   * Default value: en
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The name of the disaster recovery plan.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @remarks
   * The ID of the disaster recovery plan.<props="china">You can call the [DescribeGtmRecoveryPlans](https://help.aliyun.com/zh/dns/api-alidns-2015-01-09-describegtmrecoveryplans?spm=a2c4g.11186623.help-menu-29697.d_0_5_1_3_13_5.6dd83618vW4yD7) operation to obtain the ID.
   * <props="intl">You can call the [DescribeGtmRecoveryPlans](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-describegtmrecoveryplans?spm=a2c63.p38356.help-menu-search-29697.d_0) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10*******
   */
  recoveryPlanId?: number;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * remark
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      faultAddrPool: 'FaultAddrPool',
      lang: 'Lang',
      name: 'Name',
      recoveryPlanId: 'RecoveryPlanId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faultAddrPool: 'string',
      lang: 'string',
      name: 'string',
      recoveryPlanId: 'number',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

