// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePxfsTenantResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @example
   * polardbx:QueryColumnarLog
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

export class DescribePxfsTenantResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 租户容量配额，单位为字节；0表示禁止新增数据。
   * 
   * @example
   * 107374182400
   */
  quotaBytes?: number;
  /**
   * @remarks
   * 租户文件数量配额；0表示禁止新增文件。
   * 
   * @example
   * 1000000
   */
  quotaFiles?: number;
  /**
   * @remarks
   * 租户每秒请求数上限；0表示不限制。
   * 
   * @example
   * 1000
   */
  rateLimitRps?: number;
  /**
   * @remarks
   * 租户每秒写入字节数上限；0表示不限制。
   * 
   * @example
   * 104857600
   */
  rateLimitWbps?: number;
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
  /**
   * @remarks
   * Agent文件服务的租户名称。
   * 
   * @example
   * agent-files
   */
  tenantName?: string;
  /**
   * @remarks
   * 租户已使用的容量，单位为字节。
   * 
   * @example
   * 1048576
   */
  usedBytes?: number;
  /**
   * @remarks
   * 租户已使用的文件数量。
   * 
   * @example
   * 128
   */
  usedFiles?: number;
  static names(): { [key: string]: string } {
    return {
      quotaBytes: 'QuotaBytes',
      quotaFiles: 'QuotaFiles',
      rateLimitRps: 'RateLimitRps',
      rateLimitWbps: 'RateLimitWbps',
      status: 'Status',
      tenantId: 'TenantId',
      tenantName: 'TenantName',
      usedBytes: 'UsedBytes',
      usedFiles: 'UsedFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaBytes: 'number',
      quotaFiles: 'number',
      rateLimitRps: 'number',
      rateLimitWbps: 'number',
      status: 'string',
      tenantId: 'string',
      tenantName: 'string',
      usedBytes: 'number',
      usedFiles: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePxfsTenantResponseBody extends $dara.Model {
  accessDeniedDetail?: DescribePxfsTenantResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * 接口返回的业务数据。
   */
  data?: DescribePxfsTenantResponseBodyData;
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
      accessDeniedDetail: DescribePxfsTenantResponseBodyAccessDeniedDetail,
      data: DescribePxfsTenantResponseBodyData,
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

