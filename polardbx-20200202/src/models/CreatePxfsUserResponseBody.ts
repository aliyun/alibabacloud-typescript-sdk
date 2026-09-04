// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePxfsUserResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @example
   * xxx
   */
  authAction?: string;
  /**
   * @example
   * xxx
   */
  authPrincipalDisplayName?: string;
  /**
   * @example
   * 111
   */
  authPrincipalOwnerId?: string;
  /**
   * @example
   * 222
   */
  authPrincipalType?: string;
  /**
   * @example
   * AQEAAAAAaKPfwjY0MzMyODRGLUZCQkQtNTA1RS04MUUxLTc5NTkzODk2MUIzMg==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
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

export class CreatePxfsUserResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Agent文件服务租户内的身份名称，不是阿里云账号UID。
   * 
   * @example
   * agent-runtime
   */
  identityName?: string;
  /**
   * @remarks
   * 客户端业务进程使用的POSIX GID。
   * 
   * @example
   * 1000
   */
  posixGid?: number;
  /**
   * @remarks
   * 客户端业务进程使用的POSIX UID。
   * 
   * @example
   * 1000
   */
  posixUid?: number;
  /**
   * @remarks
   * 租户身份角色，取值为ADMIN或MEMBER。
   * 
   * @example
   * MEMBER
   */
  role?: string;
  /**
   * @remarks
   * 当前资源状态。
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * Agent文件服务的租户ID。
   * 
   * @example
   * tenant-001
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      identityName: 'IdentityName',
      posixGid: 'PosixGid',
      posixUid: 'PosixUid',
      role: 'Role',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityName: 'string',
      posixGid: 'number',
      posixUid: 'number',
      role: 'string',
      status: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePxfsUserResponseBody extends $dara.Model {
  accessDeniedDetail?: CreatePxfsUserResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * 接口返回的业务数据。
   */
  data?: CreatePxfsUserResponseBodyData;
  /**
   * @remarks
   * 请求的唯一标识，可用于排查问题。
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
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
      accessDeniedDetail: CreatePxfsUserResponseBodyAccessDeniedDetail,
      data: CreatePxfsUserResponseBodyData,
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

