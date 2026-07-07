// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshAuthTokensResponseBodyDataTokens extends $dara.Model {
  /**
   * @remarks
   * The authorization token value.
   * 
   * @example
   * cp******lp
   */
  authToken?: string;
  /**
   * @remarks
   * The expiration timestamp.
   * 
   * @example
   * 1719648600
   */
  expireAt?: number;
  /**
   * @remarks
   * The validity period in seconds.
   * 
   * @example
   * 600
   */
  expireSeconds?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * acp-2zef0gov2nh2l3xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The issuance timestamp.
   * 
   * @example
   * 1719648000
   */
  issuedAt?: number;
  /**
   * @remarks
   * The license key.
   * 
   * @example
   * lk-abcdef1234567890
   */
  licenseKey?: string;
  static names(): { [key: string]: string } {
    return {
      authToken: 'AuthToken',
      expireAt: 'ExpireAt',
      expireSeconds: 'ExpireSeconds',
      instanceId: 'InstanceId',
      issuedAt: 'IssuedAt',
      licenseKey: 'LicenseKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authToken: 'string',
      expireAt: 'number',
      expireSeconds: 'number',
      instanceId: 'string',
      issuedAt: 'number',
      licenseKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshAuthTokensResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The model gateway access URL.
   * 
   * @example
   * https://ai-gateway.example.com/v1
   */
  baseUrl?: string;
  /**
   * @remarks
   * The list of tokens.
   */
  tokens?: RefreshAuthTokensResponseBodyDataTokens[];
  static names(): { [key: string]: string } {
    return {
      baseUrl: 'BaseUrl',
      tokens: 'Tokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseUrl: 'string',
      tokens: { 'type': 'array', 'itemType': RefreshAuthTokensResponseBodyDataTokens },
    };
  }

  validate() {
    if(Array.isArray(this.tokens)) {
      $dara.Model.validateArray(this.tokens);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshAuthTokensResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token data.
   */
  data?: RefreshAuthTokensResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9A51B1DF-96FF-3BCC-B08C-783161D3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RefreshAuthTokensResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

