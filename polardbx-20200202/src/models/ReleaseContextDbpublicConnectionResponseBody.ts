// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseContextDBPublicConnectionResponseBodyAccessDeniedDetail extends $dara.Model {
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
   * The identity used for authentication in the request.
   * 
   * @example
   * xxx
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The type of the authentication principal.
   * 
   * @example
   * 111
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The type of the authentication principal.
   * 
   * @example
   * 222
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * The encoded diagnostic message.
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

export class ReleaseContextDBPublicConnectionResponseBodyData extends $dara.Model {
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
   * pxc-xxxxxxxxxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * 0
   */
  netType?: number;
  /**
   * @remarks
   * The query node type. Valid values:
   * - service
   * - dashboard
   * 
   * @example
   * service
   */
  nodeType?: string;
  /**
   * @remarks
   * The database endpoint before the switchover.
   * 
   * @example
   * ***.polarxcontextdb.rds.aliyuncs.com
   */
  oldConnectionString?: string;
  /**
   * @remarks
   * The previous port value.
   * 
   * @example
   * 8080
   */
  oldPort?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 2209883
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      contextDBInstanceName: 'ContextDBInstanceName',
      DBInstanceId: 'DBInstanceId',
      DBInstanceName: 'DBInstanceName',
      netType: 'NetType',
      nodeType: 'NodeType',
      oldConnectionString: 'OldConnectionString',
      oldPort: 'OldPort',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextDBInstanceName: 'string',
      DBInstanceId: 'number',
      DBInstanceName: 'string',
      netType: 'number',
      nodeType: 'string',
      oldConnectionString: 'string',
      oldPort: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseContextDBPublicConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   */
  accessDeniedDetail?: ReleaseContextDBPublicConnectionResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The operation result.
   */
  data?: ReleaseContextDBPublicConnectionResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B87E2AB3-B7C9-4394-9160-7F639F732031
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
      accessDeniedDetail: ReleaseContextDBPublicConnectionResponseBodyAccessDeniedDetail,
      data: ReleaseContextDBPublicConnectionResponseBodyData,
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

