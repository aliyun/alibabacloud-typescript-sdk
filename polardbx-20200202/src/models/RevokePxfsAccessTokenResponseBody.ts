// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokePxfsAccessTokenResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The authorization action. See the description above.
   * 
   * @example
   * xxx
   */
  authAction?: string;
  /**
   * @remarks
   * The display name of the authorization principal.
   * 
   * @example
   * xxx
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The owner ID of the authorization principal.
   * 
   * @example
   * 111
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The type of the authorization principal.
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

export class RevokePxfsAccessTokenResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the token has been revoked.
   * 
   * @example
   * true
   */
  revoked?: boolean;
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
   * Token ID
   * 
   * @example
   * token-001
   */
  tokenId?: string;
  static names(): { [key: string]: string } {
    return {
      revoked: 'Revoked',
      tenantId: 'TenantId',
      tokenId: 'TokenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      revoked: 'boolean',
      tenantId: 'string',
      tokenId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokePxfsAccessTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   */
  accessDeniedDetail?: RevokePxfsAccessTokenResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The response data.
   */
  data?: RevokePxfsAccessTokenResponseBodyData;
  /**
   * @remarks
   * The request ID.
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
      accessDeniedDetail: RevokePxfsAccessTokenResponseBodyAccessDeniedDetail,
      data: RevokePxfsAccessTokenResponseBodyData,
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

