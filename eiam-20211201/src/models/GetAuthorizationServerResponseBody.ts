// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthorizationServerResponseBodyAuthorizationServerProtocolEndpoint extends $dara.Model {
  /**
   * @example
   * https://xxxx.aliyunidaas.com/api/v2/iauths_system/oauth2/token
   */
  oauth2TokenEndpoint?: string;
  /**
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
   * IDaaS EIAM 授权服务器ID
   * 
   * @example
   * iauths_system
   */
  authorizationServerId?: string;
  /**
   * @remarks
   * IDaaS EIAM 授权服务器名称
   * 
   * @example
   * System_Default
   */
  authorizationServerName?: string;
  /**
   * @remarks
   * IDaaS EIAM 授权服务器创建时间
   * 
   * @example
   * 1754620108295
   */
  createTime?: number;
  /**
   * @remarks
   * 创建类型：system_init-系统默认创建，jwt_credential_provider-JWT凭据提供商创建，user_custom-用户创建
   * 
   * @example
   * system_init
   */
  creationType?: string;
  /**
   * @remarks
   * 授权服务器描述
   * 
   * @example
   * description of authorization server
   */
  description?: string;
  /**
   * @remarks
   * IDaaS EIAM 实例Id
   * 
   * @example
   * idaas_qzljgbhtwnnsywtdbz7yzy2any
   */
  instanceId?: string;
  /**
   * @remarks
   * IDaaS EIAM 授权token颁发者
   * 
   * @example
   * https://xxxx.aliyunidaas.com/api/v2/iauths_system/oauth2
   */
  issuer?: string;
  /**
   * @remarks
   * Issuer使用的域名，可为初始化域名或已添加的自定义域名
   * 
   * @example
   * xxxx.aliyunidaas.com
   */
  issuerDomain?: string;
  /**
   * @remarks
   * Issuer模式：dynamic-动态基于请求域名，static-使用固定域名
   * 
   * @example
   * static
   */
  issuerMode?: string;
  /**
   * @remarks
   * IDaaS EIAM 授权服务器最近更新时间
   * 
   * @example
   * 1781608572164
   */
  lastUpdateTime?: number;
  protocolEndpoint?: GetAuthorizationServerResponseBodyAuthorizationServerProtocolEndpoint;
  /**
   * @remarks
   * IDaaS EIAM 授权服务器状态，enabled启用，disabled禁用
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
  authorizationServer?: GetAuthorizationServerResponseBodyAuthorizationServer;
  /**
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

