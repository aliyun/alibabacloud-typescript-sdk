// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConnectionRequestAuthParametersApiKeyAuthParameters extends $dara.Model {
  /**
   * @remarks
   * The key of the API Key.
   * 
   * @example
   * name
   */
  apiKeyName?: string;
  /**
   * @remarks
   * The value of the API Key.
   * 
   * @example
   * demo
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

export class UpdateConnectionRequestAuthParametersBasicAuthParameters extends $dara.Model {
  /**
   * @remarks
   * The password for Basic authentication.
   * 
   * @example
   * admin
   */
  password?: string;
  /**
   * @remarks
   * The username for Basic authentication.
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

export class UpdateConnectionRequestAuthParametersOAuthParametersClientParameters extends $dara.Model {
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
   * ClientSecret
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

export class UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersBodyParameters extends $dara.Model {
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
   * name
   */
  key?: string;
  /**
   * @remarks
   * The value of the body request parameter.
   * 
   * @example
   * demo
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

export class UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters extends $dara.Model {
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
   * name
   */
  key?: string;
  /**
   * @remarks
   * The value of the header parameter.
   * 
   * @example
   * demo
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

export class UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters extends $dara.Model {
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
   * name
   */
  key?: string;
  /**
   * @remarks
   * The value of the URI of the request path parameter.
   * 
   * @example
   * demo
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

export class UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParameters extends $dara.Model {
  /**
   * @remarks
   * The list of body request parameter data structures.
   */
  bodyParameters?: UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersBodyParameters[];
  /**
   * @remarks
   * The list of header parameter data structures.
   */
  headerParameters?: UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters[];
  /**
   * @remarks
   * The data structure of the URI of the request path parameters.
   */
  queryStringParameters?: UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters[];
  static names(): { [key: string]: string } {
    return {
      bodyParameters: 'BodyParameters',
      headerParameters: 'HeaderParameters',
      queryStringParameters: 'QueryStringParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyParameters: { 'type': 'array', 'itemType': UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersBodyParameters },
      headerParameters: { 'type': 'array', 'itemType': UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters },
      queryStringParameters: { 'type': 'array', 'itemType': UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters },
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

export class UpdateConnectionRequestAuthParametersOAuthParameters extends $dara.Model {
  /**
   * @remarks
   * The request URL for obtaining the OAuth token. Maximum length: 127 characters.
   * 
   * @example
   * http://localhost:8080/oauth/token
   */
  authorizationEndpoint?: string;
  /**
   * @remarks
   * The data structure for client parameters.
   */
  clientParameters?: UpdateConnectionRequestAuthParametersOAuthParametersClientParameters;
  /**
   * @remarks
   * The HTTP method for the probe request. Valid values:
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
  OAuthHttpParameters?: UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParameters;
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
      clientParameters: UpdateConnectionRequestAuthParametersOAuthParametersClientParameters,
      httpMethod: 'string',
      OAuthHttpParameters: UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParameters,
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

export class UpdateConnectionRequestAuthParameters extends $dara.Model {
  /**
   * @remarks
   * The data structure for API Key authentication.
   */
  apiKeyAuthParameters?: UpdateConnectionRequestAuthParametersApiKeyAuthParameters;
  /**
   * @remarks
   * The authentication type:
   * 
   * - BASIC: BASIC_AUTH. This authorization method is a basic authorization method implemented by browsers in compliance with the HTTP protocol. During HTTP communication, the HTTP protocol defines a basic authentication method that allows HTTP servers to verify client identities. Add Authorization: Basic Base64-encoded(`username:password`) in the request header in a fixed format. Username and Password are required.
   * 
   * - API KEY: API_KEY_AUTH. Add Token: token value in the request header in a fixed format. ApiKeyName and ApiKeyValue are required.
   * 
   * - OAUTH: OAUTH_AUTH. OAuth 2.0 is an authorization mechanism. Normally, without an authorization mechanism such as OAuth 2.0, clients can directly access resources on the resource server. To ensure secure data access, an Access Token mechanism is added. Clients must carry an Access Token to access protected resources. OAuth 2.0 prevents resources from being accessed by malicious clients, thereby improving system security. AuthorizationEndpoint, OAuthHttpParameters, and HttpMethod are required.
   * 
   * @example
   * BASIC_AUTH
   */
  authorizationType?: string;
  /**
   * @remarks
   * The data structure for Basic authentication.
   */
  basicAuthParameters?: UpdateConnectionRequestAuthParametersBasicAuthParameters;
  /**
   * @remarks
   * The data structure for OAuth authentication parameters.
   */
  OAuthParameters?: UpdateConnectionRequestAuthParametersOAuthParameters;
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
      apiKeyAuthParameters: UpdateConnectionRequestAuthParametersApiKeyAuthParameters,
      authorizationType: 'string',
      basicAuthParameters: UpdateConnectionRequestAuthParametersBasicAuthParameters,
      OAuthParameters: UpdateConnectionRequestAuthParametersOAuthParameters,
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

export class UpdateConnectionRequestNetworkParameters extends $dara.Model {
  /**
   * @remarks
   * - Public network: PublicNetwork
   * 
   * - Virtual private cloud (VPC): PrivateNetwork
   * 
   * 
   * > If you select PrivateNetwork, VpcId, VswitcheId, and SecurityGroupId are required.
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
   * eb-167adad548759-security_grop/sg-bp1addad26peuh9qh9rtyb
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * eb-test/vpc-bp1symadadwnwgmqud
   */
  vpcId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1iu4x7aeradadown1og8,vsw-bp193sqmadadlaszpeqbt2c
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

export class UpdateConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The authentication data structure.
   */
  authParameters?: UpdateConnectionRequestAuthParameters;
  /**
   * @remarks
   * The name of the connection to update. Maximum length: 127 characters. Minimum length: 2 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * connection-name
   */
  connectionName?: string;
  /**
   * @remarks
   * The description. Maximum length: 255 characters.
   * 
   * @example
   * Description of the connection configuration
   */
  description?: string;
  /**
   * @remarks
   * The data structure of the network configuration.
   * 
   * This parameter is required.
   */
  networkParameters?: UpdateConnectionRequestNetworkParameters;
  /**
   * @remarks
   * The data source connection parameters (JSON object). For specific field definitions, call the GetConnectionType operation and refer to ParamsSchema in the response.
   * 
   * @example
   * {"HostName":"xxx.mysql.rds.aliyuncs.com","Port":"3306","User":"root","Password":"xxx","DatabaseName":"demo_db"}
   */
  parameters?: any;
  /**
   * @remarks
   * The connection type. Valid values: MySQL, PostgreSQL, Elasticsearch, OSS_TABLES, SLS, OTS, MaxCompute, MongoDB, Redis, SQLServer, ClickHouse, Oracle, Hive, Iceberg, lakehouse, Http.
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
      authParameters: UpdateConnectionRequestAuthParameters,
      connectionName: 'string',
      description: 'string',
      networkParameters: UpdateConnectionRequestNetworkParameters,
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

