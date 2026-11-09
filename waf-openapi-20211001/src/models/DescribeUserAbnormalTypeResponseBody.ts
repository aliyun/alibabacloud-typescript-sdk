// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserAbnormalTypeResponseBodyAbnormal extends $dara.Model {
  /**
   * @remarks
   * The risk code.
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
   * The risk type.
   * 
   * > You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to obtain the supported risk types.
   * 
   * @example
   * Risk_InternalWeakPasswd
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

export class DescribeUserAbnormalTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of risk types and statistics.
   */
  abnormal?: DescribeUserAbnormalTypeResponseBodyAbnormal[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3E1CB966-1407-5988-9432-7***D784
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      abnormal: 'Abnormal',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormal: { 'type': 'array', 'itemType': DescribeUserAbnormalTypeResponseBodyAbnormal },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.abnormal)) {
      $dara.Model.validateArray(this.abnormal);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

