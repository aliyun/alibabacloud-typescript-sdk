// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleasePxfsPublicConnectionResponseBodyAccessDeniedDetail extends $dara.Model {
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

export class ReleasePxfsPublicConnectionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Agent文件服务关联的PolarDB-X实例ID。
   * 
   * @example
   * pxc-xxxxxxxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * Agent文件服务实例ID。
   * 
   * @example
   * pxfs-xxxxxxxx
   */
  pxfsInstanceId?: string;
  /**
   * @remarks
   * 异步任务ID，可用于查询任务状态。
   * 
   * @example
   * 123456789
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      pxfsInstanceId: 'PxfsInstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      pxfsInstanceId: 'string',
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

export class ReleasePxfsPublicConnectionResponseBody extends $dara.Model {
  accessDeniedDetail?: ReleasePxfsPublicConnectionResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * 接口返回的业务数据。
   */
  data?: ReleasePxfsPublicConnectionResponseBodyData;
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
      accessDeniedDetail: ReleasePxfsPublicConnectionResponseBodyAccessDeniedDetail,
      data: ReleasePxfsPublicConnectionResponseBodyData,
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

