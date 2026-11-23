// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPxfsTenantQuotaResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The name of the API operation.
   * 
   * @example
   * polardbx:ModifyPxfsTenantQuota
   */
  authAction?: string;
  /**
   * @remarks
   * The display name of the authenticated principal.
   * 
   * @example
   * Sample RAM user
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The owner ID of the authenticated principal.
   * 
   * @example
   * 111
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The type of identity used for authentication in the request. Valid values:
   * - SubUser: RAM user.
   * - AssumedRoleUser: RAM role.
   * - Federated: SSO federated identity.
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

export class ModifyPxfsTenantQuotaResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of bytes saved for the tenant after data deduplication.
   * 
   * @example
   * 268435456
   */
  dedupBytes?: number;
  /**
   * @remarks
   * The current logical usage of the tenant, in bytes.
   * 
   * @example
   * 1073741824
   */
  logicalBytes?: number;
  /**
   * @remarks
   * The current number of logical files of the tenant.
   * 
   * @example
   * 1000
   */
  logicalFiles?: number;
  /**
   * @remarks
   * The actual physical storage space occupied by the tenant, in bytes.
   * 
   * @example
   * 805306368
   */
  physicalBytes?: number;
  /**
   * @remarks
   * The storage capacity quota.
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
   * The maximum request rate.
   * 
   * @example
   * 1000
   */
  rateLimitRps?: number;
  /**
   * @remarks
   * The maximum write bandwidth.
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
   * The tenant ID.
   * 
   * @example
   * tenant-001
   */
  tenantId?: string;
  /**
   * @remarks
   * The tenant name.
   * 
   * @example
   * agent-files
   */
  tenantName?: string;
  static names(): { [key: string]: string } {
    return {
      dedupBytes: 'DedupBytes',
      logicalBytes: 'LogicalBytes',
      logicalFiles: 'LogicalFiles',
      physicalBytes: 'PhysicalBytes',
      quotaBytes: 'QuotaBytes',
      quotaFiles: 'QuotaFiles',
      rateLimitRps: 'RateLimitRps',
      rateLimitWbps: 'RateLimitWbps',
      status: 'Status',
      tenantId: 'TenantId',
      tenantName: 'TenantName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedupBytes: 'number',
      logicalBytes: 'number',
      logicalFiles: 'number',
      physicalBytes: 'number',
      quotaBytes: 'number',
      quotaFiles: 'number',
      rateLimitRps: 'number',
      rateLimitWbps: 'number',
      status: 'string',
      tenantId: 'string',
      tenantName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPxfsTenantQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denied error.
   */
  accessDeniedDetail?: ModifyPxfsTenantQuotaResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The new connection string information.
   */
  data?: ModifyPxfsTenantQuotaResponseBodyData;
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
      accessDeniedDetail: ModifyPxfsTenantQuotaResponseBodyAccessDeniedDetail,
      data: ModifyPxfsTenantQuotaResponseBodyData,
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

