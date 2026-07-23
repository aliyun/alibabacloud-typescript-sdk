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
   * Specifies whether the parameter is used for authentication.
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
   * Specifies whether the parameter is used for authentication.
   * 
   * @example
   * false
   */
  isValueSecret?: string;
  /**
   * @remarks
   * The key of the request header parameter.
   * 
   * @example
   * name
   */
  key?: string;
  /**
   * @remarks
   * The value of the request header parameter.
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
   * Specifies whether the parameter is used for authentication.
   * 
   * @example
   * false
   */
  isValueSecret?: string;
  /**
   * @remarks
   * The key of the request query parameter.
   * 
   * @example
   * name
   */
  key?: string;
  /**
   * @remarks
   * The value of the request query parameter.
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
   * The list of data structures for body request parameters.
   */
  bodyParameters?: UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersBodyParameters[];
  /**
   * @remarks
   * The list of request header parameters.
   */
  headerParameters?: UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters[];
  /**
   * @remarks
   * The data structure of request query parameters.
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
   * The request URL for obtaining the OAuth token. The maximum length is 127 characters.
   * 
   * @example
   * http://localhost:8080/oauth/token
   */
  authorizationEndpoint?: string;
  /**
   * @remarks
   * The data structure of the client parameters.
   */
  clientParameters?: UpdateConnectionRequestAuthParametersOAuthParametersClientParameters;
  /**
   * @remarks
   * The HTTP request method. Valid values:
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
   * The data structure of API Key authentication.
   */
  apiKeyAuthParameters?: UpdateConnectionRequestAuthParametersApiKeyAuthParameters;
  /**
   * @remarks
   * The authentication type. Valid values:
   * 
   * - BASIC: BASIC_AUTH. This authorization method is the basic authentication method implemented by browsers in compliance with the HTTP protocol. During communication using the HTTP protocol, the HTTP protocol defines basic authentication that allows the HTTP server to authenticate the user identity of the client. Add Authorization: Basic followed by one space and the Base64-encoded value of `username:password` to the request header in a fixed format. Username and Password are required.
   * 
   * - API KEY: API_KEY_AUTH. Add Token: TokenValue to the request header in a fixed format. ApiKeyName and ApiKeyValue are required.
   * 
   * - OAUTH: OAUTH_AUTH. OAuth 2.0 is an authorization mechanism. In normal cases, in a system that does not use an authorization mechanism such as OAuth 2.0, the client can directly access resources on the resource server. To ensure secure data access for users, the Access Token mechanism is added between the client and the resource server. The client must carry an Access Token to access protected resources. Therefore, OAuth 2.0 prevents resources from being accessed by malicious clients, thereby improving the security of the system. AuthorizationEndpoint, OAuthHttpParameters, and HttpMethod are required.
   * 
   * @example
   * BASIC_AUTH
   */
  authorizationType?: string;
  /**
   * @remarks
   * The data structure of Basic authentication.
   */
  basicAuthParameters?: UpdateConnectionRequestAuthParametersBasicAuthParameters;
  /**
   * @remarks
   * The data structure of the OAuth authentication parameters.
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
   * - Virtual Private Cloud (VPC): PrivateNetwork
   * 
   * 
   * > When you select PrivateNetwork, VpcId, VswitcheId, and SecurityGroupId are required.
   * 
   * This parameter is required.
   * 
   * @example
   * PublicNetwork
   */
  networkType?: string;
  /**
   * @remarks
   * The ID of the security group.
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
   * The data structure of the authentication parameters.
   */
  authParameters?: UpdateConnectionRequestAuthParameters;
  /**
   * @remarks
   * The name of the connection to be updated. The maximum length is 127 characters. The minimum length is 2 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * connection-name
   */
  connectionName?: string;
  /**
   * @remarks
   * The description. The maximum length is 255 characters.
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
   * The data source connection parameters (JSON object). For specific field definitions, call the GetConnectionType API and refer to the ParamsSchema in the response.
   * 
   * @example
   * {"HostName":"xxx.mysql.rds.aliyuncs.com","Port":"3306","User":"root","Password":"xxx","DatabaseName":"demo_db"}
   */
  parameters?: any;
  /**
   * @remarks
   * The connection type. Valid values: MySQL, PostgreSQL, Elasticsearch, and Http.
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

