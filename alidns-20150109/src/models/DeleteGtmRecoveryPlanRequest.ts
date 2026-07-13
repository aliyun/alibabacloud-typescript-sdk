// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGtmRecoveryPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. The default value is **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the disaster recovery plan.<props="intl"> To obtain the ID, call [DescribeGtmRecoveryPlans](https://www.alibabacloud.com/help/en/dns/api-alidns-2015-01-09-describegtmrecoveryplans?spm=a2c63.p38356.help-menu-search-29697.d_0).
   * 
   * This parameter is required.
   * 
   * @example
   * 10********
   */
  recoveryPlanId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      recoveryPlanId: 'RecoveryPlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
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

