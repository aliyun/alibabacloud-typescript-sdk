// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceDiagnosisResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Best Practices.
   * 
   * @example
   * 无
   */
  bestPractice?: string;
  /**
   * @remarks
   * Diagnosis item description.
   * 
   * @example
   * Evaluate unreasonable partition and bucket configuration
   */
  description?: string;
  /**
   * @remarks
   * Evaluation dimension.
   * 
   * @example
   * table_analysis
   */
  dimension?: string;
  /**
   * @remarks
   * Evaluation time.
   * 
   * @example
   * 2026-03-08T02:12:32Z
   */
  evaluationTime?: number;
  /**
   * @remarks
   * Full score for the evaluation item.
   * 
   * @example
   * 10.0
   */
  fullScore?: number;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * c-b25e21e243889XXX
   */
  instanceId?: string;
  /**
   * @remarks
   * Evaluation item introduction.
   * 
   * @example
   * for autotest
   */
  introduction?: string;
  /**
   * @remarks
   * Evaluation item ID.
   * 
   * @example
   * 02cf887a
   */
  itemId?: string;
  /**
   * @remarks
   * Evaluation item name.
   * 
   * @example
   * Evaluate unreasonable partition and bucket configuration
   */
  itemName?: string;
  /**
   * @remarks
   * Report date.
   * 
   * @example
   * 2026-03-08
   */
  reportDate?: string;
  /**
   * @remarks
   * Diagnosis score.
   * 
   * @example
   * 10.0
   */
  score?: number;
  /**
   * @remarks
   * Status list.
   * 
   * - healthy
   * 
   * - info
   * 
   * - medium
   * 
   * - critical
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * Diagnosis suggestion.
   * 
   * @example
   * 未出现分桶大小超过5GB的情况，评估结果为健康。
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      bestPractice: 'BestPractice',
      description: 'Description',
      dimension: 'Dimension',
      evaluationTime: 'EvaluationTime',
      fullScore: 'FullScore',
      instanceId: 'InstanceId',
      introduction: 'Introduction',
      itemId: 'ItemId',
      itemName: 'ItemName',
      reportDate: 'ReportDate',
      score: 'Score',
      status: 'Status',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bestPractice: 'string',
      description: 'string',
      dimension: 'string',
      evaluationTime: 'number',
      fullScore: 'number',
      instanceId: 'string',
      introduction: 'string',
      itemId: 'string',
      itemName: 'string',
      reportDate: 'string',
      score: 'number',
      status: 'string',
      suggestion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDiagnosisResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * AccessDeniedDetail
   * 
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxx",     "EncodedDiagnosticMessage": "xxx",     "AuthPrincipalType": "xxx",     "AuthPrincipalDisplayName": "xxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "sr:xxx"   }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Returned data.
   */
  data?: DescribeInstanceDiagnosisResultResponseBodyData[];
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * InvalidParams
   */
  errCode?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * Invalid params: [instance not exists].
   */
  errMessage?: string;
  /**
   * @remarks
   * HTTP request status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 32A44F0D-BFF6-5664-999A-218BBDE74XXX
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the request was successful.
   * 
   * @example
   * false
   */
  success?: boolean;
  /**
   * @remarks
   * Total number of query results.
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: { 'type': 'array', 'itemType': DescribeInstanceDiagnosisResultResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

