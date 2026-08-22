// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContext0ResponseBodyAccessDeniedDetail extends $dara.Model {
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

export class CreateContext0ResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The administrator key of the context service.
   * 
   * @example
   * admin-key-example
   */
  context0AdminKey?: string;
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
   * The instance name.
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
   * The name of the context service instance.
   * 
   * @example
   * pxt-*********-s
   */
  serviceReplicaSetName?: string;
  /**
   * @remarks
   * The backend task ID.
   * 
   * @example
   * 2209883
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      context0AdminKey: 'Context0AdminKey',
      context0InstanceName: 'Context0InstanceName',
      DBInstanceName: 'DBInstanceName',
      dashboardReplicaSetName: 'DashboardReplicaSetName',
      openSearchInstanceName: 'OpenSearchInstanceName',
      serviceReplicaSetName: 'ServiceReplicaSetName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context0AdminKey: 'string',
      context0InstanceName: 'string',
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

export class CreateContext0ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   */
  accessDeniedDetail?: CreateContext0ResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The instance data.
   */
  data?: CreateContext0ResponseBodyData;
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
      accessDeniedDetail: CreateContext0ResponseBodyAccessDeniedDetail,
      data: CreateContext0ResponseBodyData,
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

