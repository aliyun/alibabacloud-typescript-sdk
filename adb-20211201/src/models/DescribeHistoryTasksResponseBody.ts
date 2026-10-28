// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryTasksResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The authentication action.
   * 
   * @example
   * test
   */
  authAction?: string;
  /**
   * @remarks
   * The display name of the authorization principal.
   * 
   * @example
   * test
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the authentication principal.
   * 
   * @example
   * 141345906006****
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The type of the authorization principal.
   * 
   * @example
   * test
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * The encoded diagnostic message.
   * 
   * @example
   * AQFmy+hZZsvoWTQ2NTJFQUFBLUIyNjktMzk5NS05MEZCLUMxMzgwNDUwMDA2Ng==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * The type of the access policy denial. Valid values:
   * - **ImplicitDeny**: The resource owner has not configured a relevant access policy for the current user, and unauthorized operations are denied by default.
   * - **ExplicitDeny**: The RAM policy configured by the resource owner explicitly denies the current user from accessing the corresponding resource.
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * The type of the policy that causes the permission denial. Valid values:
   * - **ControlPolicy**: Control policy.
   * - **SessionPolicy**: Session policy, which is an additional permission policy added to a temporary token.
   * - **AssumeRolePolicy**: Assume role policy, which is the trust policy of a RAM role.
   * - **AccountLevelIdentityBasedPolicy**: Account-level identity-access policy, which includes custom policies and system policies.
   * - **ResourceGroupLevelIdentityBasedPolicy**: Resource group-level identity-access policy, which includes custom policies and system policies.
   * 
   * @example
   * ControlPolicy
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The allowed operation information. When you use this parameter, the system matches the operation action based on the currentStepName and status in this information. If no action is matched, the current task status does not support the operation.
   * 
   * @example
   * {\\"steps\\":[{\\"action_info\\":{\\"Waiting\\":[\\"modifySwitchTime\\"]},\\"step_name\\":\\"exec_task\\"}]}
   */
  actionInfo?: string;
  /**
   * @remarks
   * The ID of the requesting user. If callerSource is User, it represents the user UID.
   * 
   * @example
   * 141345906006****
   */
  callerSource?: string;
  /**
   * @remarks
   * The request source. Valid values:
   * 
   * - **System**: System.
   * 
   * - **User**: User.
   * 
   * @example
   * User
   */
  callerUid?: string;
  /**
   * @remarks
   * The name of the current step. If this parameter is empty, the task has not started.
   * 
   * @example
   * exec_task
   */
  currentStepName?: string;
  /**
   * @remarks
   * The database type.
   * 
   * @example
   * analyticdb
   */
  dbType?: string;
  /**
   * @remarks
   * The end time of the task. The time is displayed in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is in UTC.
   * 
   * @example
   * 2022-02-03T12:06:17Z
   */
  endTime?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-********
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * Instance
   */
  instanceType?: string;
  /**
   * @remarks
   * The product.
   * 
   * @example
   * ads
   */
  product?: string;
  /**
   * @remarks
   * The current progress.
   * 
   * @example
   * 79.0
   */
  progress?: number;
  /**
   * @remarks
   * The reason why the current task is initiated.
   * 
   * @example
   * test
   */
  reasonCode?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The estimated remaining execution time. Unit: seconds.
   * 
   * @example
   * 1000
   */
  remainTime?: number;
  /**
   * @remarks
   * The start time of the task. The time is displayed in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is in UTC.
   * 
   * @example
   * 2022-02-03T11:31:03Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **Scheduled**: Pending execution.
   * 
   * - **Running**: Running.
   * 
   * - **Succeed**: Succeeded.
   * 
   * - **Failed**: Failed.
   * 
   * - **Cancelling**: Being canceled.
   * 
   * - **Canceled**: Canceled.
   * 
   * - **Waiting**: Waiting for the scheduled time.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The task details.
   * 
   * @example
   * {\\"callerUid\\":\\"test\\"}
   */
  taskDetail?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-83br18hloy3faf****
   */
  taskId?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * autotest_dispatch_cases
   */
  taskType?: string;
  /**
   * @remarks
   * The ID of the user to which the resource belongs.
   * 
   * @example
   * 141345906006****
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      actionInfo: 'ActionInfo',
      callerSource: 'CallerSource',
      callerUid: 'CallerUid',
      currentStepName: 'CurrentStepName',
      dbType: 'DbType',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      product: 'Product',
      progress: 'Progress',
      reasonCode: 'ReasonCode',
      regionId: 'RegionId',
      remainTime: 'RemainTime',
      startTime: 'StartTime',
      status: 'Status',
      taskDetail: 'TaskDetail',
      taskId: 'TaskId',
      taskType: 'TaskType',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionInfo: 'string',
      callerSource: 'string',
      callerUid: 'string',
      currentStepName: 'string',
      dbType: 'string',
      endTime: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceType: 'string',
      product: 'string',
      progress: 'number',
      reasonCode: 'string',
      regionId: 'string',
      remainTime: 'number',
      startTime: 'string',
      status: 'string',
      taskDetail: 'string',
      taskId: 'string',
      taskType: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial. This field is returned only when RAM authentication fails.
   */
  accessDeniedDetail?: DescribeHistoryTasksResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The API status code or POP error code.
   * 
   * @example
   * 200
   */
  code?: string;
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
   * The task list.
   */
  items?: DescribeHistoryTasksResponseBodyItems[];
  /**
   * @remarks
   * The additional information about the call result. Valid values:
   * - If the request is normal, **Success** is returned. 
   * - If the request is abnormal, a specific error code is returned.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The page number of the query result.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E51713A3-BB45-5616-AB15-170B704F8F01
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * - **true**: Successful.
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      items: 'Items',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: DescribeHistoryTasksResponseBodyAccessDeniedDetail,
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': DescribeHistoryTasksResponseBodyItems },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

