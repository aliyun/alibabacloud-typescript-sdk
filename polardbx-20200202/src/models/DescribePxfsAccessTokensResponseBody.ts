// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePxfsAccessTokensResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The authorization action.
   * 
   * @example
   * xxx
   */
  authAction?: string;
  /**
   * @remarks
   * The identity used for authorization in the request.
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

export class DescribePxfsAccessTokensResponseBodyDataAccessTokens extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-09-03T12:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The expiration time.
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
   * The status.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
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
      createTime: 'CreateTime',
      expiresAt: 'ExpiresAt',
      identityName: 'IdentityName',
      label: 'Label',
      status: 'Status',
      tokenId: 'TokenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      expiresAt: 'string',
      identityName: 'string',
      label: 'string',
      status: 'string',
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

export class DescribePxfsAccessTokensResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of access tokens.
   */
  accessTokens?: DescribePxfsAccessTokensResponseBodyDataAccessTokens[];
  static names(): { [key: string]: string } {
    return {
      accessTokens: 'AccessTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokens: { 'type': 'array', 'itemType': DescribePxfsAccessTokensResponseBodyDataAccessTokens },
    };
  }

  validate() {
    if(Array.isArray(this.accessTokens)) {
      $dara.Model.validateArray(this.accessTokens);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePxfsAccessTokensResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason why access was denied.
   */
  accessDeniedDetail?: DescribePxfsAccessTokensResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The response data.
   */
  data?: DescribePxfsAccessTokensResponseBodyData;
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
      accessDeniedDetail: DescribePxfsAccessTokensResponseBodyAccessDeniedDetail,
      data: DescribePxfsAccessTokensResponseBodyData,
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

