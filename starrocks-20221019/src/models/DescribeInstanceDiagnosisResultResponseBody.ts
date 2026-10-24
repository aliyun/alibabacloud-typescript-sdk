// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceDiagnosisResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The best practices.
   * 
   * @example
   * None
   */
  bestPractice?: string;
  /**
   * @remarks
   * The diagnosis item description.
   * 
   * @example
   * Unreasonable partitioning and bucketing
   */
  description?: string;
  /**
   * @remarks
   * The evaluation dimension.
   * 
   * @example
   * table_analysis
   */
  dimension?: string;
  /**
   * @remarks
   * The evaluation time.
   * 
   * @example
   * 2026-03-08T02:12:32Z
   */
  evaluationTime?: number;
  /**
   * @remarks
   * The full score of the evaluation item.
   * 
   * @example
   * 10.0
   */
  fullScore?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * c-b25e21e243889XXX
   */
  instanceId?: string;
  /**
   * @remarks
   * The evaluation item introduction.
   * 
   * @example
   * for autotest
   */
  introduction?: string;
  /**
   * @remarks
   * The evaluation item ID.
   * 
   * @example
   * 02cf887a
   */
  itemId?: string;
  /**
   * @remarks
   * The evaluation item name.
   * 
   * @example
   * Unreasonable partitioning and bucketing
   */
  itemName?: string;
  /**
   * @remarks
   * The report date in the YYYY-MM-DD format.
   * 
   * @example
   * 2026-03-08
   */
  reportDate?: string;
  /**
   * @remarks
   * The diagnosis score.
   * 
   * @example
   * 10.0
   */
  score?: number;
  /**
   * @remarks
   * The status list. Valid values:
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
   * The diagnosis suggestion.
   * 
   * @example
   * No bucket exceeds 5 GB in size. The evaluation result is healthy
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
   * The returned data.
   */
  data?: DescribeInstanceDiagnosisResultResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidParams
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Invalid params: [instance not exists].
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 32A44F0D-BFF6-5664-999A-218BBDE74XXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * false
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of query results.
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

