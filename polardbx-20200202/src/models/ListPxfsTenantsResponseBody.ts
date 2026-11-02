// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPxfsTenantsResponseBodyAccessDeniedDetail extends $dara.Model {
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
   * The ID of the owner of the authentication principal.
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
   * The type of the access denial.
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

export class ListPxfsTenantsResponseBodyDataTenants extends $dara.Model {
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
   * The current number of logical files for the tenant.
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
   * The capacity quota.
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
   * 0
   */
  rateLimitRps?: number;
  /**
   * @remarks
   * The write bandwidth limit.
   * 
   * @example
   * 0
   */
  rateLimitWbps?: number;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * zero-v1zhme7mtddrkfn40hrr9ifk
   */
  tenantId?: string;
  /**
   * @remarks
   * The tenant name.
   * 
   * @example
   * zero-v1zhme7mtddrkfn40hrr9ifk
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

export class ListPxfsTenantsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of PXFS tenants.
   */
  tenants?: ListPxfsTenantsResponseBodyDataTenants[];
  static names(): { [key: string]: string } {
    return {
      tenants: 'Tenants',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenants: { 'type': 'array', 'itemType': ListPxfsTenantsResponseBodyDataTenants },
    };
  }

  validate() {
    if(Array.isArray(this.tenants)) {
      $dara.Model.validateArray(this.tenants);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPxfsTenantsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access denial details.
   */
  accessDeniedDetail?: ListPxfsTenantsResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The data struct.
   */
  data?: ListPxfsTenantsResponseBodyData;
  /**
   * @remarks
   * The request ID.
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
      accessDeniedDetail: ListPxfsTenantsResponseBodyAccessDeniedDetail,
      data: ListPxfsTenantsResponseBodyData,
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

