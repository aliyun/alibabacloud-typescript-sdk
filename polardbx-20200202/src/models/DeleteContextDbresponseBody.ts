// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteContextDBResponseBodyAccessDeniedDetail extends $dara.Model {
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

export class DeleteContextDBResponseBodyData extends $dara.Model {
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
   * The instance name.
   * 
   * @example
   * pxc-unrf5ssig0ecg8
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The context service dashboard instance name.
   * 
   * @example
   * pxt-*********-d
   */
  dashboardReplicaSetName?: string;
  /**
   * @remarks
   * The context service service instance name.
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
      contextDBInstanceName: 'ContextDBInstanceName',
      DBInstanceName: 'DBInstanceName',
      dashboardReplicaSetName: 'DashboardReplicaSetName',
      serviceReplicaSetName: 'ServiceReplicaSetName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextDBInstanceName: 'string',
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

export class DeleteContextDBResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   */
  accessDeniedDetail?: DeleteContextDBResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The parameter details.
   */
  data?: DeleteContextDBResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D6A4256F-7B83-5BD7-9AC0-72E1FAC05330
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
      accessDeniedDetail: DeleteContextDBResponseBodyAccessDeniedDetail,
      data: DeleteContextDBResponseBodyData,
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

