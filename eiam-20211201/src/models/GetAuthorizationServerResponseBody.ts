// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthorizationServerResponseBodyAuthorizationServerProtocolEndpoint extends $dara.Model {
  /**
   * @remarks
   * The token endpoint of the authorization server.
   * 
   * @example
   * https://xxxx.aliyunidaas.com/api/v2/iauths_system/oauth2/token
   */
  oauth2TokenEndpoint?: string;
  /**
   * @remarks
   * The JWKS endpoint of the authorization server.
   * 
   * @example
   * https://xxxx.aliyunidaas.com/api/v2/iauths_system/oauth2/jwks
   */
  oidcJwksEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      oauth2TokenEndpoint: 'Oauth2TokenEndpoint',
      oidcJwksEndpoint: 'OidcJwksEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oauth2TokenEndpoint: 'string',
      oidcJwksEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationServerResponseBodyAuthorizationServer extends $dara.Model {
  /**
   * @remarks
   * The authorization server ID.
   * 
   * @example
   * iauths_system
   */
  authorizationServerId?: string;
  /**
   * @remarks
   * The name of the authorization server.
   * 
   * @example
   * System_Default
   */
  authorizationServerName?: string;
  /**
   * @remarks
   * The time when the authorization server was created.
   * 
   * @example
   * 1754620108295
   */
  createTime?: number;
  /**
   * @remarks
   * The creation type.
   * 
   * @example
   * system_init
   */
  creationType?: string;
  /**
   * @remarks
   * The description of the authorization server.
   * 
   * @example
   * description of authorization server
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_qzljgbhtwnnsywtdbz7yzy2any
   */
  instanceId?: string;
  /**
   * @remarks
   * The issuer of the authorization token.
   * 
   * @example
   * https://xxxx.aliyunidaas.com/api/v2/iauths_system/oauth2
   */
  issuer?: string;
  /**
   * @remarks
   * The domain name used by the issuer.
   * 
   * @example
   * xxxx.aliyunidaas.com
   */
  issuerDomain?: string;
  /**
   * @remarks
   * The issuer mode.
   * 
   * @example
   * static
   */
  issuerMode?: string;
  /**
   * @remarks
   * The time when the authorization server was last updated.
   * 
   * @example
   * 1781608572164
   */
  lastUpdateTime?: number;
  /**
   * @remarks
   * The endpoint configuration of the authorization server.
   */
  protocolEndpoint?: GetAuthorizationServerResponseBodyAuthorizationServerProtocolEndpoint;
  /**
   * @remarks
   * The status of the authorization server.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationServerId: 'AuthorizationServerId',
      authorizationServerName: 'AuthorizationServerName',
      createTime: 'CreateTime',
      creationType: 'CreationType',
      description: 'Description',
      instanceId: 'InstanceId',
      issuer: 'Issuer',
      issuerDomain: 'IssuerDomain',
      issuerMode: 'IssuerMode',
      lastUpdateTime: 'LastUpdateTime',
      protocolEndpoint: 'ProtocolEndpoint',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationServerId: 'string',
      authorizationServerName: 'string',
      createTime: 'number',
      creationType: 'string',
      description: 'string',
      instanceId: 'string',
      issuer: 'string',
      issuerDomain: 'string',
      issuerMode: 'string',
      lastUpdateTime: 'number',
      protocolEndpoint: GetAuthorizationServerResponseBodyAuthorizationServerProtocolEndpoint,
      status: 'string',
    };
  }

  validate() {
    if(this.protocolEndpoint && typeof (this.protocolEndpoint as any).validate === 'function') {
      (this.protocolEndpoint as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authorization server.
   */
  authorizationServer?: GetAuthorizationServerResponseBodyAuthorizationServer;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationServer: 'AuthorizationServer',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationServer: GetAuthorizationServerResponseBodyAuthorizationServer,
      requestId: 'string',
    };
  }

  validate() {
    if(this.authorizationServer && typeof (this.authorizationServer as any).validate === 'function') {
      (this.authorizationServer as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

