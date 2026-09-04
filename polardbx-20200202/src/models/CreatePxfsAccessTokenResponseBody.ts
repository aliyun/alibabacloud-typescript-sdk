// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePxfsAccessTokenResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The authorization action.
   * 
   * @example
   * polardbx:QueryColumnarLog
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

export class CreatePxfsAccessTokenResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The access endpoint.
   * 
   * @example
   * agent-files.example.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The expiration time of the token.
   * 
   * @example
   * 2026-12-31T23:59:59Z
   */
  expiresAt?: string;
  /**
   * @remarks
   * The identity name.
   * 
   * @example
   * agent-runtime
   */
  identityName?: string;
  /**
   * @remarks
   * The token label.
   * 
   * @example
   * production-agent
   */
  label?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 12049
   */
  port?: number;
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
   * The token in plaintext.
   * 
   * @example
   * pxfs_tenant-001.token-001.******
   */
  token?: string;
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
      endpoint: 'Endpoint',
      expiresAt: 'ExpiresAt',
      identityName: 'IdentityName',
      label: 'Label',
      port: 'Port',
      tenantId: 'TenantId',
      token: 'Token',
      tokenId: 'TokenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      expiresAt: 'string',
      identityName: 'string',
      label: 'string',
      port: 'number',
      tenantId: 'string',
      token: 'string',
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

export class CreatePxfsAccessTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   */
  accessDeniedDetail?: CreatePxfsAccessTokenResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The response data.
   */
  data?: CreatePxfsAccessTokenResponseBodyData;
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
      accessDeniedDetail: CreatePxfsAccessTokenResponseBodyAccessDeniedDetail,
      data: CreatePxfsAccessTokenResponseBodyData,
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

