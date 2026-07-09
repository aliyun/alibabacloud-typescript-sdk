// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSensitiveScanResultResponseBodyResultOssObjectDetailRuleList extends $dara.Model {
  /**
   * @remarks
   * The category name of the rule.
   * 
   * @example
   * 个人信息
   */
  categoryName?: string;
  /**
   * @remarks
   * The number of hits.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The risk level name of the rule.
   * 
   * @example
   * S2
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * 身份证号
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      count: 'Count',
      riskLevelName: 'RiskLevelName',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      count: 'number',
      riskLevelName: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSensitiveScanResultResponseBodyResultOssObjectDetail extends $dara.Model {
  /**
   * @remarks
   * The name of the bucket to which the object belongs.
   * 
   * @example
   * aideepsign-bucket
   */
  bucketName?: string;
  /**
   * @remarks
   * The sensitive data category name.
   * 
   * @example
   * 个人信息
   */
  categoryName?: string;
  /**
   * @remarks
   * The name of the scanned object.
   * 
   * @example
   * abc12345.jpg
   */
  name?: string;
  /**
   * @remarks
   * The overall risk level name.
   * 
   * @example
   * S2
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The list of sensitive data rules that are hit.
   */
  ruleList?: GetSensitiveScanResultResponseBodyResultOssObjectDetailRuleList[];
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      categoryName: 'CategoryName',
      name: 'Name',
      riskLevelName: 'RiskLevelName',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      categoryName: 'string',
      name: 'string',
      riskLevelName: 'string',
      ruleList: { 'type': 'array', 'itemType': GetSensitiveScanResultResponseBodyResultOssObjectDetailRuleList },
    };
  }

  validate() {
    if(Array.isArray(this.ruleList)) {
      $dara.Model.validateArray(this.ruleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSensitiveScanResultResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The name of the scanned object.
   */
  ossObjectDetail?: GetSensitiveScanResultResponseBodyResultOssObjectDetail;
  static names(): { [key: string]: string } {
    return {
      ossObjectDetail: 'OssObjectDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossObjectDetail: GetSensitiveScanResultResponseBodyResultOssObjectDetail,
    };
  }

  validate() {
    if(this.ossObjectDetail && typeof (this.ossObjectDetail as any).validate === 'function') {
      (this.ossObjectDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSensitiveScanResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business error code. The value "OK" is returned when the request succeeds.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code. The value 200 is returned when the request succeeds.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The additional information. The value "success" is returned when the request succeeds.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1B2C3D4-E5F6-7890-ABCD-EF1234567890
   */
  requestId?: string;
  /**
   * @remarks
   * The scan result. This parameter is returned only when the status is completed.
   */
  result?: GetSensitiveScanResultResponseBodyResult;
  /**
   * @remarks
   * The task status. Valid values:
   * - running: The task is running.
   * - completed: The task is completed.
   * - terminated: The task is terminated or failed.
   * 
   * @example
   * completed
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      result: GetSensitiveScanResultResponseBodyResult,
      status: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

