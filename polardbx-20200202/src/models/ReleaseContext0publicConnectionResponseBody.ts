// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseContext0PublicConnectionResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The description is as above.
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
   * The description is as above.
   * 
   * @example
   * 111
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The description is as above.
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

export class ReleaseContext0PublicConnectionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The context service instance name.
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
      context0InstanceName: 'Context0InstanceName',
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
      context0InstanceName: 'string',
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

export class ReleaseContext0PublicConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   */
  accessDeniedDetail?: ReleaseContext0PublicConnectionResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The task details.
   */
  data?: ReleaseContext0PublicConnectionResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C457B28E-9CAB-4B77-B5C6-5D71B7870B6E
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
      accessDeniedDetail: ReleaseContext0PublicConnectionResponseBodyAccessDeniedDetail,
      data: ReleaseContext0PublicConnectionResponseBodyData,
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

