// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePxfsTenantResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The authentication action.
   * 
   * @example
   * polardbx:QueryColumnarLog
   */
  authAction?: string;
  /**
   * @remarks
   * The display name of the authentication principal.
   * 
   * @example
   * Sample RAM user
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
   * The diagnostic message.
   * 
   * @example
   * AQEAAAAAaKPfwjY0MzMyODRGLUZCQkQtNTA1RS04MUUxLTc5NTkzODk2MUIzMg==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * The no-permission type.
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

export class DescribePxfsTenantResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The storage quota.
   * 
   * @example
   * 107374182400
   */
  quotaBytes?: number;
  /**
   * @remarks
   * The file count quota.
   * 
   * @example
   * 1000000
   */
  quotaFiles?: number;
  /**
   * @remarks
   * The request rate limit.
   * 
   * @example
   * 1000
   */
  rateLimitRps?: number;
  /**
   * @remarks
   * The write bandwidth limit.
   * 
   * @example
   * 104857600
   */
  rateLimitWbps?: number;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * tenant-001
   */
  tenantId?: string;
  /**
   * @remarks
   * The name of the tenant.
   * 
   * @example
   * agent-files
   */
  tenantName?: string;
  /**
   * @remarks
   * The used storage capacity.
   * 
   * @example
   * 1048576
   */
  usedBytes?: number;
  /**
   * @remarks
   * The number of used files.
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
  /**
   * @remarks
   * The details of the access denial.
   */
  accessDeniedDetail?: DescribePxfsTenantResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The response data.
   */
  data?: DescribePxfsTenantResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
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

