// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserPoolClientResponseBodyClientClientScopes extends $dara.Model {
  /**
   * @example
   * OpenID Connect authentication
   */
  description?: string;
  /**
   * @example
   * openid
   */
  scopeName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      scopeName: 'ScopeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      scopeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserPoolClientResponseBodyClient extends $dara.Model {
  /**
   * @example
   * 3600
   */
  accessTokenValidity?: string;
  /**
   * @example
   * client_xxxxxxxxxxxxxxxxxxxx
   */
  clientId?: string;
  /**
   * @example
   * my-web-app
   */
  clientName?: string;
  clientScopes?: GetUserPoolClientResponseBodyClientClientScopes[];
  /**
   * @example
   * 2026-05-07T06:19:17Z
   */
  createTime?: string;
  /**
   * @example
   * true
   */
  enforcePKCE?: boolean;
  redirectURIs?: string[];
  /**
   * @example
   * 86400
   */
  refreshTokenValidity?: string;
  /**
   * @example
   * true
   */
  secretRequired?: boolean;
  /**
   * @example
   * 2026-05-07T06:19:17Z
   */
  updateTime?: string;
  /**
   * @example
   * my-agent-userpool
   */
  userPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenValidity: 'AccessTokenValidity',
      clientId: 'ClientId',
      clientName: 'ClientName',
      clientScopes: 'ClientScopes',
      createTime: 'CreateTime',
      enforcePKCE: 'EnforcePKCE',
      redirectURIs: 'RedirectURIs',
      refreshTokenValidity: 'RefreshTokenValidity',
      secretRequired: 'SecretRequired',
      updateTime: 'UpdateTime',
      userPoolName: 'UserPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenValidity: 'string',
      clientId: 'string',
      clientName: 'string',
      clientScopes: { 'type': 'array', 'itemType': GetUserPoolClientResponseBodyClientClientScopes },
      createTime: 'string',
      enforcePKCE: 'boolean',
      redirectURIs: { 'type': 'array', 'itemType': 'string' },
      refreshTokenValidity: 'string',
      secretRequired: 'boolean',
      updateTime: 'string',
      userPoolName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clientScopes)) {
      $dara.Model.validateArray(this.clientScopes);
    }
    if(Array.isArray(this.redirectURIs)) {
      $dara.Model.validateArray(this.redirectURIs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserPoolClientResponseBody extends $dara.Model {
  client?: GetUserPoolClientResponseBodyClient;
  /**
   * @example
   * AABD6E03-4B3A-5687-88FF-72232670ED0C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      client: 'Client',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      client: GetUserPoolClientResponseBodyClient,
      requestId: 'string',
    };
  }

  validate() {
    if(this.client && typeof (this.client as any).validate === 'function') {
      (this.client as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

