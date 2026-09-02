// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConnectionRequestAuthParametersApiKeyAuthParameters extends $dara.Model {
  /**
   * @remarks
   * The key of the API key.
   * 
   * @example
   * Token
   */
  apiKeyName?: string;
  /**
   * @remarks
   * The value of the API key.
   * 
   * @example
   * adkjnakddh****
   */
  apiKeyValue?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyName: 'ApiKeyName',
      apiKeyValue: 'ApiKeyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyName: 'string',
      apiKeyValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionRequestAuthParametersBasicAuthParameters extends $dara.Model {
  /**
   * @remarks
   * The password for basic authentication.
   * 
   * @example
   * *******
   */
  password?: string;
  /**
   * @remarks
   * The username for basic authentication.
   * 
   * @example
   * admin
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionRequestAuthParametersOAuthParametersClientParameters extends $dara.Model {
  /**
   * @remarks
   * The client ID.
   * 
   * @example
   * ClientID
   */
  clientID?: string;
  /**
   * @remarks
   * The client secret of the application.
   * 
   * @example
   * Qo57Q~F249~S74GmNPA36pZJoJK4f4LY****
   */
  clientSecret?: string;
  static names(): { [key: string]: string } {
    return {
      clientID: 'ClientID',
      clientSecret: 'ClientSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientID: 'string',
      clientSecret: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersBodyParameters extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the value is used for authentication.
   * 
   * @example
   * false
   */
  isValueSecret?: string;
  /**
   * @remarks
   * The key of the body request parameter.
   * 
   * @example
   * keyDemo
   */
  key?: string;
  /**
   * @remarks
   * The value of the body request parameter.
   * 
   * @example
   * keyValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isValueSecret: 'IsValueSecret',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isValueSecret: 'string',
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the value is used for authentication.
   * 
   * @example
   * false
   */
  isValueSecret?: string;
  /**
   * @remarks
   * The key of the header parameter.
   * 
   * @example
   * keyDemo
   */
  key?: string;
  /**
   * @remarks
   * The value of the header parameter.
   * 
   * @example
   * keyValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isValueSecret: 'IsValueSecret',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isValueSecret: 'string',
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the value is used for authentication.
   * 
   * @example
   * false
   */
  isValueSecret?: string;
  /**
   * @remarks
   * The key of the URI of the request path parameter.
   * 
   * @example
   * keyDemo
   */
  key?: string;
  /**
   * @remarks
   * The value of the URI of the request path parameter.
   * 
   * @example
   * valueDemo
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isValueSecret: 'IsValueSecret',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isValueSecret: 'string',
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParameters extends $dara.Model {
  /**
   * @remarks
   * The list of body request parameter data structures.
   */
  bodyParameters?: CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersBodyParameters[];
  /**
   * @remarks
   * The list of header parameters.
   */
  headerParameters?: CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters[];
  /**
   * @remarks
   * The data structure of the URI of the request path parameters.
   */
  queryStringParameters?: CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters[];
  static names(): { [key: string]: string } {
    return {
      bodyParameters: 'BodyParameters',
      headerParameters: 'HeaderParameters',
      queryStringParameters: 'QueryStringParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyParameters: { 'type': 'array', 'itemType': CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersBodyParameters },
      headerParameters: { 'type': 'array', 'itemType': CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters },
      queryStringParameters: { 'type': 'array', 'itemType': CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters },
    };
  }

  validate() {
    if(Array.isArray(this.bodyParameters)) {
      $dara.Model.validateArray(this.bodyParameters);
    }
    if(Array.isArray(this.headerParameters)) {
      $dara.Model.validateArray(this.headerParameters);
    }
    if(Array.isArray(this.queryStringParameters)) {
      $dara.Model.validateArray(this.queryStringParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionRequestAuthParametersOAuthParameters extends $dara.Model {
  /**
   * @remarks
   * The authorization endpoint address. Maximum length: 127 characters.
   * 
   * @example
   * http://localhost:8080/oauth/token
   */
  authorizationEndpoint?: string;
  /**
   * @remarks
   * The client parameters data structure.
   */
  clientParameters?: CreateConnectionRequestAuthParametersOAuthParametersClientParameters;
  /**
   * @remarks
   * The HTTP method for the probe. Valid values:
   * 
   * - GET
   * - POST
   * - HEAD
   * - DELETE
   * - PUT
   * - PATCH
   * 
   * @example
   * POST
   */
  httpMethod?: string;
  /**
   * @remarks
   * The request parameters for OAuth authentication.
   */
  OAuthHttpParameters?: CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParameters;
  static names(): { [key: string]: string } {
    return {
      authorizationEndpoint: 'AuthorizationEndpoint',
      clientParameters: 'ClientParameters',
      httpMethod: 'HttpMethod',
      OAuthHttpParameters: 'OAuthHttpParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationEndpoint: 'string',
      clientParameters: CreateConnectionRequestAuthParametersOAuthParametersClientParameters,
      httpMethod: 'string',
      OAuthHttpParameters: CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParameters,
    };
  }

  validate() {
    if(this.clientParameters && typeof (this.clientParameters as any).validate === 'function') {
      (this.clientParameters as any).validate();
    }
    if(this.OAuthHttpParameters && typeof (this.OAuthHttpParameters as any).validate === 'function') {
      (this.OAuthHttpParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionRequestAuthParameters extends $dara.Model {
  /**
   * @remarks
   * The data structure of the API key.
   */
  apiKeyAuthParameters?: CreateConnectionRequestAuthParametersApiKeyAuthParameters;
  /**
   * @remarks
   * The authentication type:
   * 
   * - BASIC: BASIC_AUTH. This authorization method is a basic authorization method implemented by browsers in compliance with the HTTP protocol. During HTTP communication, the HTTP protocol defines a basic authentication method that allows an HTTP server to authenticate clients. Add Authorization: Basic Base64-encoded(`username:password`) in the fixed format to the request header. Username and Password are required.
   * 
   * - API KEY: API_KEY_AUTH. Add Token: Token value in the fixed format to the request header. ApiKeyName and ApiKeyValue are required.
   * 
   * - OAUTH: OAUTH_AUTH. OAuth 2.0 is an authorization mechanism. Normally, without an authorization mechanism such as OAuth 2.0, clients can directly access resources on the resource server. To ensure secure data access, an Access Token mechanism is added. Clients must carry an Access Token to access protected resources. OAuth 2.0 ensures that resources are not accessed by malicious clients, which improves system security. AuthorizationEndpoint, OAuthHttpParameters, and HttpMethod are required.
   * 
   * @example
   * BASIC_AUTH
   */
  authorizationType?: string;
  /**
   * @remarks
   * The data structure of basic authentication.
   */
  basicAuthParameters?: CreateConnectionRequestAuthParametersBasicAuthParameters;
  /**
   * @remarks
   * The data structure of OAuth authentication parameters.
   */
  OAuthParameters?: CreateConnectionRequestAuthParametersOAuthParameters;
  static names(): { [key: string]: string } {
    return {
      apiKeyAuthParameters: 'ApiKeyAuthParameters',
      authorizationType: 'AuthorizationType',
      basicAuthParameters: 'BasicAuthParameters',
      OAuthParameters: 'OAuthParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyAuthParameters: CreateConnectionRequestAuthParametersApiKeyAuthParameters,
      authorizationType: 'string',
      basicAuthParameters: CreateConnectionRequestAuthParametersBasicAuthParameters,
      OAuthParameters: CreateConnectionRequestAuthParametersOAuthParameters,
    };
  }

  validate() {
    if(this.apiKeyAuthParameters && typeof (this.apiKeyAuthParameters as any).validate === 'function') {
      (this.apiKeyAuthParameters as any).validate();
    }
    if(this.basicAuthParameters && typeof (this.basicAuthParameters as any).validate === 'function') {
      (this.basicAuthParameters as any).validate();
    }
    if(this.OAuthParameters && typeof (this.OAuthParameters as any).validate === 'function') {
      (this.OAuthParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionRequestNetworkParameters extends $dara.Model {
  /**
   * @remarks
   * - Public network: PublicNetwork
   * 
   * - Virtual private cloud (VPC): PrivateNetwork
   * 
   * >Notice: If you select PrivateNetwork, VpcId, VswitcheId, and SecurityGroupId are required.
   * 
   * This parameter is required.
   * 
   * @example
   * PublicNetwork
   */
  networkType?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * eb-167adad548759-security_grop/sg-bp1addad26peuh9qh9****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * eb-test/vpc-bp1symadadwnwg****
   */
  vpcId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1iu4x7aeradadown1og8,vsw-bp193sqmadadlaszpeq****
   */
  vswitcheId?: string;
  static names(): { [key: string]: string } {
    return {
      networkType: 'NetworkType',
      securityGroupId: 'SecurityGroupId',
      vpcId: 'VpcId',
      vswitcheId: 'VswitcheId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkType: 'string',
      securityGroupId: 'string',
      vpcId: 'string',
      vswitcheId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The authentication data structure.
   */
  authParameters?: CreateConnectionRequestAuthParameters;
  /**
   * @remarks
   * The connection configuration name. Maximum length: 127 characters. Minimum length: 2 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * connection-name
   */
  connectionName?: string;
  /**
   * @remarks
   * The description of the connection configuration. Maximum length: 255 characters.
   * 
   * @example
   * demo
   */
  description?: string;
  /**
   * @remarks
   * The network configuration data structure.
   * 
   * This parameter is required.
   */
  networkParameters?: CreateConnectionRequestNetworkParameters;
  /**
   * @remarks
   * The data source connection parameters (JSON object). This parameter is required when Type is a data source type. It is not required for the Http type. For specific field definitions, call the GetConnectionType operation and refer to ParamsSchema in the response.
   * 
   * @example
   * {"HostName":"xxx.mysql.rds.aliyuncs.com","Port":"3306","User":"root","Password":"xxx","DatabaseName":"demo_db"}
   */
  parameters?: any;
  /**
   * @remarks
   * The connection type. Valid values: MySQL, PostgreSQL, Elasticsearch, OSS_TABLES, SLS, OTS, MaxCompute, MongoDB, Redis, SQLServer, ClickHouse, Oracle, Hive, Iceberg, lakehouse, and Http. This parameter is required for data source type connections. If this parameter is not specified, the default value Http is used. The Http type is used for API Destination and other HTTP protocol targets. Hive and Iceberg are used for the corresponding data lakehouse sources. lakehouse is used only for compatibility with existing connections. Other data source types are used for data connections in the integration marketplace.
   * 
   * @example
   * Http
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      authParameters: 'AuthParameters',
      connectionName: 'ConnectionName',
      description: 'Description',
      networkParameters: 'NetworkParameters',
      parameters: 'Parameters',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authParameters: CreateConnectionRequestAuthParameters,
      connectionName: 'string',
      description: 'string',
      networkParameters: CreateConnectionRequestNetworkParameters,
      parameters: 'any',
      type: 'string',
    };
  }

  validate() {
    if(this.authParameters && typeof (this.authParameters as any).validate === 'function') {
      (this.authParameters as any).validate();
    }
    if(this.networkParameters && typeof (this.networkParameters as any).validate === 'function') {
      (this.networkParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

