// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AllocateContext0PublicConnectionResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The description is the same as above.
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
   * The owner ID of the authentication principal.
   * 
   * @example
   * 111
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The description is the same as above.
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

export class AllocateContext0PublicConnectionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * test2.polarx.huhehaote.rds.aliyuncs.com
   */
  connectionString?: string;
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
   * The instance ID.
   * 
   * @example
   * pxc-hzjasd****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The network type of the endpoint.
   * 
   * @example
   * 1
   */
  DBInstanceNetType?: number;
  /**
   * @remarks
   * The target node type: service or dashboard.
   * 
   * @example
   * service
   */
  nodeType?: string;
  /**
   * @remarks
   * The port of the endpoint.
   * 
   * @example
   * 3300
   */
  port?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 2209883
   */
  taskId?: number;
  /**
   * @remarks
   * The IP address of the Anti-DDoS Proxy instance protected by the policy.
   * 
   * @example
   * https://anchashi.aliyun-inc.coM
   */
  vip?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      context0InstanceName: 'Context0InstanceName',
      DBInstanceId: 'DBInstanceId',
      DBInstanceName: 'DBInstanceName',
      DBInstanceNetType: 'DBInstanceNetType',
      nodeType: 'NodeType',
      port: 'Port',
      taskId: 'TaskId',
      vip: 'Vip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      context0InstanceName: 'string',
      DBInstanceId: 'number',
      DBInstanceName: 'string',
      DBInstanceNetType: 'number',
      nodeType: 'string',
      port: 'string',
      taskId: 'number',
      vip: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateContext0PublicConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   */
  accessDeniedDetail?: AllocateContext0PublicConnectionResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The task details.
   */
  data?: AllocateContext0PublicConnectionResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C458B1E8-1683-3645-B154-6BA32080EEA
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
      accessDeniedDetail: AllocateContext0PublicConnectionResponseBodyAccessDeniedDetail,
      data: AllocateContext0PublicConnectionResponseBodyData,
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

