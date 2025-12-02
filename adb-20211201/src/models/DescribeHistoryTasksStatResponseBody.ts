// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryTasksStatResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * Authorized action
   * 
   * @example
   * test
   */
  authAction?: string;
  /**
   * @remarks
   * The display name of the requester.
   * 
   * @example
   * test
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the authentication principal belongs.
   * 
   * @example
   * 141345906006****
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The requester type.
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
   * The type of the policy denial. Valid values:
   * 
   * *   **ImplicitDeny**: The resource holder has not configured a policy for the current user. By default, unauthorized operations are denied.
   * *   **ExplicitDeny**: The RAM policy configured by the resource holder explicitly denies the current user access to the corresponding resources.
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * The type of the policy that causes the access denied error.
   * 
   * *   **ControlPolicy**: control policy
   * *   **SessionPolicy**: an additional policy that is added to the temporary token.
   * *   **AssumeRolePolicy**: the authorization policy of the RAM role.
   * *   **AccountLevelIdentityBasedPolicy**: the principal policies of the account authorization scope, including custom policies and system policies.
   * *   **ResourceGroupLevelIdentityBasedPolicy**: the principal policy of the resource group authorization scope, including custom policies and system policies.
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
   * The status of the APS job.
   * 
   * *   **Scheduled**
   * *   **Running**
   * *   **Succeed**
   * *   **Failed**: The task failed.
   * *   **Cancelling**
   * *   **Canceled**
   * *   **Waiting**
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
   * The queried information about the request denial.
   */
  accessDeniedDetail?: DescribeHistoryTasksStatResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * API status or POP error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The tasks.
   */
  items?: DescribeHistoryTasksStatResponseBodyItems[];
  /**
   * @remarks
   * The returned message. Valid values:
   * 
   * *   If the request was successful, an success message is returned.
   * *   If the request failed, an error message is returned.
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
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
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

