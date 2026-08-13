// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPoliciesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of days to retain backup data.
   * 
   * @example
   * 7
   */
  expireDays?: number;
  /**
   * @remarks
   * The hour.
   * 
   * @example
   * 2
   */
  hour?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * c-96f3bc7f04b2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The minute.
   * 
   * @example
   * 30
   */
  minute?: string;
  /**
   * @remarks
   * The backup policy ID.
   * 
   * @example
   * 1
   */
  policyId?: string;
  /**
   * @remarks
   * The numeric values for the policy execution cycle.
   */
  recurrenceValues?: number[];
  /**
   * @remarks
   * The timeout period for the backup job.
   * 
   * @example
   * 3600
   */
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      expireDays: 'ExpireDays',
      hour: 'Hour',
      instanceId: 'InstanceId',
      minute: 'Minute',
      policyId: 'PolicyId',
      recurrenceValues: 'RecurrenceValues',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireDays: 'number',
      hour: 'string',
      instanceId: 'string',
      minute: 'string',
      policyId: 'string',
      recurrenceValues: { 'type': 'array', 'itemType': 'number' },
      timeoutSeconds: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.recurrenceValues)) {
      $dara.Model.validateArray(this.recurrenceValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the access denial.
   * 
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxx",     "EncodedDiagnosticMessage": "xxx",     "AuthPrincipalType": "xxx",     "AuthPrincipalDisplayName": "xxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "sr:xxx"   }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Information about the instance.
   */
  data?: DescribeBackupPoliciesResponseBodyData[];
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
   * Invalid params: [Region id should be select from set [cn-beijing, cn-hangzhou]]
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
   * 32A44F0D-BFF6-5664-999A-218BBDE7****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * false
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of instances.
   * 
   * @example
   * 100
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
      data: { 'type': 'array', 'itemType': DescribeBackupPoliciesResponseBodyData },
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

