// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceDiagnosisResultResponseBodyData extends $dara.Model {
  bestPractice?: string;
  description?: string;
  /**
   * @example
   * table_analysis
   */
  dimension?: string;
  /**
   * @example
   * 2026-03-08T02:12:32Z
   */
  evaluationTime?: number;
  /**
   * @example
   * 10.0
   */
  fullScore?: number;
  /**
   * @example
   * c-b25e21e243889XXX
   */
  instanceId?: string;
  /**
   * @example
   * for autotest
   */
  introduction?: string;
  /**
   * @example
   * 02cf887a
   */
  itemId?: string;
  itemName?: string;
  /**
   * @example
   * 2026-03-08
   */
  reportDate?: string;
  /**
   * @example
   * 10.0
   */
  score?: number;
  /**
   * @example
   * healthy
   */
  status?: string;
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
  data?: DescribeInstanceDiagnosisResultResponseBodyData[];
  /**
   * @example
   * InvalidParams
   */
  errCode?: string;
  /**
   * @example
   * Invalid params: [instance not exists].
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 32A44F0D-BFF6-5664-999A-218BBDE74XXX
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  /**
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

