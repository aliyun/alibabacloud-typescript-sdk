// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyContextDBSecurityIpsResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The authentication action.
   * 
   * @example
   * xxx
   */
  authAction?: string;
  /**
   * @remarks
   * The display name of the authentication principal.
   * 
   * @example
   * xxx
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the authentication principal belongs.
   * 
   * @example
   * 111
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The identity type used for authentication in the request. Valid values:
   * - SubUser: RAM user.
   * - AssumedRoleUser: RAM role.
   * - Federated: SSO federated identity.
   * 
   * @example
   * 222
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * The diagnostic information.
   * 
   * @example
   * AQEAAAAAaKPfwjY0MzMyODRGLUZCQkQtNTA1RS04MUUxLTc5NTkzODk2MUIzMg==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * The type of the permission denial.
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * System
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

export class ModifyContextDBSecurityIpsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The context service instance name.
   * 
   * @example
   * pxt-*********
   */
  contextDBInstanceName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pxc-xxxxxxxxxx
   */
  DBInstanceId?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pxc-supabase-001
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * ******
   */
  taskId?: number;
  /**
   * @remarks
   * The list of task IDs in the task group.
   */
  taskIds?: number[];
  static names(): { [key: string]: string } {
    return {
      contextDBInstanceName: 'ContextDBInstanceName',
      DBInstanceId: 'DBInstanceId',
      DBInstanceName: 'DBInstanceName',
      taskId: 'TaskId',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextDBInstanceName: 'string',
      DBInstanceId: 'number',
      DBInstanceName: 'string',
      taskId: 'number',
      taskIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyContextDBSecurityIpsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   */
  accessDeniedDetail?: ModifyContextDBSecurityIpsResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The data struct.
   */
  data?: ModifyContextDBSecurityIpsResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9B2F3840-5C98-475C-B269-2D5C3A31797C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: ModifyContextDBSecurityIpsResponseBodyAccessDeniedDetail,
      data: ModifyContextDBSecurityIpsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

