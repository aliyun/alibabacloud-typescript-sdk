// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryTasksStatResponseBodyAccessDeniedDetail extends $dara.Model {
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
   * The display name of the authorized principal.
   * 
   * @example
   * test
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the authenticated principal.
   * 
   * @example
   * 141345906006****
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The type of the authorized principal.
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
   * test
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * The type of the access policy denial. Valid values:
   * - **ImplicitDeny**: The resource owner has not configured a relevant access policy for the current user, and unauthorized operations are denied by default.
   * - **ExplicitDeny**: The RAM policy configured by the resource owner explicitly denies the current user access to the corresponding resource.
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * The type of the policy that caused the permission denial. Valid values:
   * - **ControlPolicy**: Control policy.
   * - **SessionPolicy**: An additional permission policy added to the temporary token.
   * - **AssumeRolePolicy**: The trust policy of the RAM role.
   * - **AccountLevelIdentityBasedPolicy**: The identity-access policy at the account level, including custom policies and system policies.
   * - **ResourceGroupLevelIdentityBasedPolicy**: The identity-access policy at the resource group level, including custom policies and system policies.
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

export class DescribeHistoryTasksStatResponseBodyItems extends $dara.Model {
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
   * - **Cancelling**: Cancelling.
   * 
   * - **Canceled**: Canceled.
   * 
   * - **Waiting**: Waiting for the scheduled time.
   * 
   * @example
   * Scheduled
   */
  status?: string;
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryTasksStatResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access denial details.
   */
  accessDeniedDetail?: DescribeHistoryTasksStatResponseBodyAccessDeniedDetail;
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
   * The list of tasks.
   */
  items?: DescribeHistoryTasksStatResponseBodyItems[];
  /**
   * @remarks
   * The additional information about the call result. Valid values:
   * 
   * - If the request is normal, OK is returned.
   * - If the request is abnormal, a specific error code is returned.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      items: 'Items',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: DescribeHistoryTasksStatResponseBodyAccessDeniedDetail,
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': DescribeHistoryTasksStatResponseBodyItems },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

