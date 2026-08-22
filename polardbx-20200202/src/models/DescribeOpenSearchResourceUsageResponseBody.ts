// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOpenSearchResourceUsageResponseBodyAccessDeniedDetail extends $dara.Model {
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

export class DescribeOpenSearchResourceUsageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total number of documents in the cluster.
   * 
   * @example
   * 1000000
   */
  docCount?: number;
  /**
   * @remarks
   * The number of indexes. This is a filter condition for the number of indexes that the missing index table currently has. The input format is `operator + separator "" + index count`, for example, `>=100`.
   * 
   * @example
   * >=
   */
  indexCount?: number;
  /**
   * @remarks
   * The used storage space, in bytes.
   * 
   * @example
   * 107374182400
   */
  storageSizeInBytes?: number;
  /**
   * @remarks
   * The total storage capacity, in bytes.
   * 
   * @example
   * 536870912000
   */
  storageTotalInBytes?: number;
  /**
   * @remarks
   * The storage space usage.
   * 
   * @example
   * 20.0
   */
  storageUsagePercent?: number;
  static names(): { [key: string]: string } {
    return {
      docCount: 'DocCount',
      indexCount: 'IndexCount',
      storageSizeInBytes: 'StorageSizeInBytes',
      storageTotalInBytes: 'StorageTotalInBytes',
      storageUsagePercent: 'StorageUsagePercent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docCount: 'number',
      indexCount: 'number',
      storageSizeInBytes: 'number',
      storageTotalInBytes: 'number',
      storageUsagePercent: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenSearchResourceUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   */
  accessDeniedDetail?: DescribeOpenSearchResourceUsageResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeOpenSearchResourceUsageResponseBodyData;
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
      accessDeniedDetail: DescribeOpenSearchResourceUsageResponseBodyAccessDeniedDetail,
      data: DescribeOpenSearchResourceUsageResponseBodyData,
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

