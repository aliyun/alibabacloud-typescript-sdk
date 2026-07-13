// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewGtmRecoveryPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * zh: Chinese
   * 
   * en: English
   * 
   * Default: en
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The page number. The value starts from **1**. Default: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: **20**. Default: **5**.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the disaster recovery plan.<props="china">You can call the [DescribeGtmRecoveryPlans](https://help.aliyun.com/zh/dns/api-alidns-2015-01-09-describegtmrecoveryplans?spm=a2c4g.11186623.help-menu-29697.d_0_5_1_3_13_5.6dd83618vW4yD7) operation to obtain the ID.<props="intl">You can call the [DescribeGtmRecoveryPlans](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-describegtmrecoveryplans?spm=a2c63.p38356.help-menu-search-29697.d_0) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10**
   */
  recoveryPlanId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      recoveryPlanId: 'RecoveryPlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      recoveryPlanId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

