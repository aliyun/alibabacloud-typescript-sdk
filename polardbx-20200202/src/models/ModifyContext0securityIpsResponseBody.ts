// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyContext0SecurityIpsResponseBodyAccessDeniedDetail extends $dara.Model {
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
   * The owner ID of the authentication principal.
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
   * NoPermissionType
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * PolicyType
   * 
   * @example
   * PRIORITY
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

export class ModifyContext0SecurityIpsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the context service instance.
   * 
   * @example
   * context0-example
   */
  context0InstanceName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pxsp-xxxxxxxxxx
   */
  DBInstanceId?: number;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * pxc-hzjasd****
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
      context0InstanceName: 'Context0InstanceName',
      DBInstanceId: 'DBInstanceId',
      DBInstanceName: 'DBInstanceName',
      taskId: 'TaskId',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context0InstanceName: 'string',
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

export class ModifyContext0SecurityIpsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   */
  accessDeniedDetail?: ModifyContext0SecurityIpsResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The returned data.
   */
  data?: ModifyContext0SecurityIpsResponseBodyData;
  /**
   * @remarks
   * The request ID.
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
      accessDeniedDetail: ModifyContext0SecurityIpsResponseBodyAccessDeniedDetail,
      data: ModifyContext0SecurityIpsResponseBodyData,
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

