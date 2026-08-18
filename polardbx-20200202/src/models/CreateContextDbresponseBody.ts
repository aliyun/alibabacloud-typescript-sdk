// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContextDBResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * As described above.
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
   * NoPermissionType
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

export class CreateContextDBResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The administrator key of the context service.
   * 
   * @example
   * ctx-admin-***
   */
  contextDBAdminKey?: string;
  /**
   * @remarks
   * The name of the context service instance.
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
   * pxc-*********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The name of the context service dashboard instance.
   * 
   * @example
   * pxt-*********-d
   */
  dashboardReplicaSetName?: string;
  /**
   * @remarks
   * The name of the PolarDB-X Search instance.
   * 
   * @example
   * pxs-*********
   */
  openSearchInstanceName?: string;
  /**
   * @remarks
   * The name of the context service service instance.
   * 
   * @example
   * pxt-*********-s
   */
  serviceReplicaSetName?: string;
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
      contextDBAdminKey: 'ContextDBAdminKey',
      contextDBInstanceName: 'ContextDBInstanceName',
      DBInstanceName: 'DBInstanceName',
      dashboardReplicaSetName: 'DashboardReplicaSetName',
      openSearchInstanceName: 'OpenSearchInstanceName',
      serviceReplicaSetName: 'ServiceReplicaSetName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextDBAdminKey: 'string',
      contextDBInstanceName: 'string',
      DBInstanceName: 'string',
      dashboardReplicaSetName: 'string',
      openSearchInstanceName: 'string',
      serviceReplicaSetName: 'string',
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

export class CreateContextDBResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   */
  accessDeniedDetail?: CreateContextDBResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The returned result.
   */
  data?: CreateContextDBResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A501A191-BD70-5E50-98A9-C2A486A82****
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
      accessDeniedDetail: CreateContextDBResponseBodyAccessDeniedDetail,
      data: CreateContextDBResponseBodyData,
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

