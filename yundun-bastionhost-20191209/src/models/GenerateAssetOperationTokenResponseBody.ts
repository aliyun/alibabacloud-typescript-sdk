// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateAssetOperationTokenResponseBodyAssetOperationToken extends $dara.Model {
  /**
   * @remarks
   * The remaining number of times that you can use the O\\&M token.
   * 
   * @example
   * 1
   */
  countLeft?: number;
  /**
   * @remarks
   * The time when the O\\&M token expires. The value is a UNIX timestamp.
   * 
   * @example
   * 1709110797
   */
  expireTime?: number;
  /**
   * @remarks
   * Indicates whether the number of times that you can use the O\\&M token is limited.
   * 
   * @example
   * true
   */
  hasCountLimit?: boolean;
  /**
   * @remarks
   * The maximum number of renewals. A value of 0 indicates that renewal is not supported.
   * 
   * @example
   * 10
   */
  maxRenewCount?: number;
  /**
   * @remarks
   * The number of times the O\\&M token is renewed.
   * 
   * @example
   * 1
   */
  renewCount?: number;
  /**
   * @remarks
   * The single sign-on (SSO) URL.
   * 
   * @example
   * sso://eyJOT0RFX0NPTU1PTiI6eyJNb2R******
   */
  ssoUrl?: string;
  /**
   * @remarks
   * The O\\&M token that you apply for.
   * 
   * @example
   * NmYyMmEzNmMwYzljNGY******
   */
  token?: string;
  /**
   * @remarks
   * The ID of the O\\&M token.
   * 
   * @example
   * 1
   */
  tokenId?: string;
  static names(): { [key: string]: string } {
    return {
      countLeft: 'CountLeft',
      expireTime: 'ExpireTime',
      hasCountLimit: 'HasCountLimit',
      maxRenewCount: 'MaxRenewCount',
      renewCount: 'RenewCount',
      ssoUrl: 'SsoUrl',
      token: 'Token',
      tokenId: 'TokenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countLeft: 'number',
      expireTime: 'number',
      hasCountLimit: 'boolean',
      maxRenewCount: 'number',
      renewCount: 'number',
      ssoUrl: 'string',
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

export class GenerateAssetOperationTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  assetOperationToken?: GenerateAssetOperationTokenResponseBodyAssetOperationToken;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assetOperationToken: 'AssetOperationToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetOperationToken: GenerateAssetOperationTokenResponseBodyAssetOperationToken,
      requestId: 'string',
    };
  }

  validate() {
    if(this.assetOperationToken && typeof (this.assetOperationToken as any).validate === 'function') {
      (this.assetOperationToken as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

