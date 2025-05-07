// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserAbnormalTypeResponseBodyAbnormal extends $dara.Model {
  /**
   * @remarks
   * The code of the risk.
   * 
   * @example
   * Risk_InternalWeakPasswd
   */
  abnormalCode?: string;
  /**
   * @remarks
   * The number of risks.
   * 
   * @example
   * 10
   */
  abnormalCount?: number;
  /**
   * @remarks
   * The parent type of the risk.
   * 
   * @example
   * RiskType_Account
   */
  abnormalParentType?: string;
  /**
   * @remarks
   * The type of the risk.
   * 
   * >  You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported types of risks.
   * 
   * @example
   * LackOfSpeedLimit
   */
  abnormalType?: string;
  static names(): { [key: string]: string } {
    return {
      abnormalCode: 'AbnormalCode',
      abnormalCount: 'AbnormalCount',
      abnormalParentType: 'AbnormalParentType',
      abnormalType: 'AbnormalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalCode: 'string',
      abnormalCount: 'number',
      abnormalParentType: 'string',
      abnormalType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

