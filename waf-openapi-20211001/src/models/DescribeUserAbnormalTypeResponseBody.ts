// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserAbnormalTypeResponseBodyAbnormal extends $dara.Model {
  /**
   * @remarks
   * The code that identifies the specific risk, such as `Risk_InternalWeakPasswd`.
   * 
   * @example
   * Risk_InternalWeakPasswd
   */
  abnormalCode?: string;
  /**
   * @remarks
   * The total number of risks detected for this risk type.
   * 
   * @example
   * 10
   */
  abnormalCount?: number;
  /**
   * @remarks
   * The parent category of the risk, such as `RiskType_Account`.
   * 
   * @example
   * RiskType_Account
   */
  abnormalParentType?: string;
  /**
   * @remarks
   * The type of the risk detected by API security.
   * 
   * > Call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported risk types.
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
   * The risk types detected by API security and the number of risks for each type.
   */
  abnormal?: DescribeUserAbnormalTypeResponseBodyAbnormal[];
  /**
   * @remarks
   * The ID of the request.
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

