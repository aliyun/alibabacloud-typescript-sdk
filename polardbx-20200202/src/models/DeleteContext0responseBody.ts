// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteContext0ResponseBodyAccessDeniedDetail extends $dara.Model {
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

export class DeleteContext0ResponseBodyData extends $dara.Model {
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
   * The name of the instance.
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
   * The name of the context service instance.
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
   * ******
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      context0InstanceName: 'Context0InstanceName',
      DBInstanceName: 'DBInstanceName',
      dashboardReplicaSetName: 'DashboardReplicaSetName',
      serviceReplicaSetName: 'ServiceReplicaSetName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context0InstanceName: 'string',
      DBInstanceName: 'string',
      dashboardReplicaSetName: 'string',
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

export class DeleteContext0ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   */
  accessDeniedDetail?: DeleteContext0ResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The data struct.
   */
  data?: DeleteContext0ResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6352AC16-76BF-5135-B1EA-ED49293526E6
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
      accessDeniedDetail: DeleteContext0ResponseBodyAccessDeniedDetail,
      data: DeleteContext0ResponseBodyData,
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

