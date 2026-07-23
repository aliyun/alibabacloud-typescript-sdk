// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConnectionResponseBodyDataConnectionsAuthParametersApiKeyAuthParameters extends $dara.Model {
  /**
   * @remarks
   * The key of the API key.
   * 
   * @example
   * key
   */
  apiKeyName?: string;
  /**
   * @remarks
   * The value of the API key.
   * 
   * @example
   * value
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

export class GetConnectionResponseBodyDataConnectionsAuthParametersBasicAuthParameters extends $dara.Model {
  /**
   * @remarks
   * The password for basic authentication.
   * 
   * @example
   * ********
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

export class GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersClientParameters extends $dara.Model {
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
   * Qo57Q~F249~S74GmNPA36pZJoJK4f4****
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

export class GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersBodyParameters extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the parameter is used for authentication.
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

export class GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the parameter is used for authentication.
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
   * keyDemo
   */
  key?: string;
  /**
   * @remarks
   * The value of the request header parameter.
   * 
   * @example
   * keyDemo
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

export class GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the parameter is used for authentication.
   * 
   * @example
   * false
   */
  isValueSecret?: string;
  /**
   * @remarks
   * The key of the request path parameter.
   * 
   * @example
   * keyDemo
   */
  key?: string;
  /**
   * @remarks
   * The value of the request path parameter.
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

export class GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParameters extends $dara.Model {
  /**
   * @remarks
   * The list of request parameter data structures.
   */
  bodyParameters?: GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersBodyParameters[];
  /**
   * @remarks
   * The list of request header parameters.
   */
  headerParameters?: GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters[];
  /**
   * @remarks
   * The data structure of the request path parameters.
   */
  queryStringParameters?: GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters[];
  static names(): { [key: string]: string } {
    return {
      bodyParameters: 'BodyParameters',
      headerParameters: 'HeaderParameters',
      queryStringParameters: 'QueryStringParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyParameters: { 'type': 'array', 'itemType': GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersBodyParameters },
      headerParameters: { 'type': 'array', 'itemType': GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters },
      queryStringParameters: { 'type': 'array', 'itemType': GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters },
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

export class GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParameters extends $dara.Model {
  /**
   * @remarks
   * The request URL for obtaining the OAuth token.
   * 
   * @example
   * http://localhost:8080/oauth/token
   */
  authorizationEndpoint?: string;
  /**
   * @remarks
   * The data structure of the client parameters.
   */
  clientParameters?: GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersClientParameters;
  /**
   * @remarks
   * The HTTP method used for the request. Valid values:
   * 
   * - GET
   * - POST
   * - HEAD
   * 
   * @example
   * POST
   */
  httpMethod?: string;
  /**
   * @remarks
   * The request parameters for OAuth authentication.
   */
  OAuthHttpParameters?: GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParameters;
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
      clientParameters: GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersClientParameters,
      httpMethod: 'string',
      OAuthHttpParameters: GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParameters,
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

export class GetConnectionResponseBodyDataConnectionsAuthParameters extends $dara.Model {
  /**
   * @remarks
   * The data structure of the API KEY.
   */
  apiKeyAuthParameters?: GetConnectionResponseBodyDataConnectionsAuthParametersApiKeyAuthParameters;
  /**
   * @remarks
   * The authorization type:
   * 
   * - BASIC: BASIC_AUTH
   * 
   * - API KEY: API_KEY_AUTH
   * 
   * - OAUTH: OAUTH_AUTH
   * 
   * @example
   * BASIC_AUTH
   */
  authorizationType?: string;
  /**
   * @remarks
   * The data structure of Basic authentication.
   */
  basicAuthParameters?: GetConnectionResponseBodyDataConnectionsAuthParametersBasicAuthParameters;
  /**
   * @remarks
   * The data structure of OAuth request parameters.
   */
  OAuthParameters?: GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParameters;
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
      apiKeyAuthParameters: GetConnectionResponseBodyDataConnectionsAuthParametersApiKeyAuthParameters,
      authorizationType: 'string',
      basicAuthParameters: GetConnectionResponseBodyDataConnectionsAuthParametersBasicAuthParameters,
      OAuthParameters: GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParameters,
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

export class GetConnectionResponseBodyDataConnectionsNetworkParameters extends $dara.Model {
  /**
   * @remarks
   * - Internet: PublicNetwork
   * 
   * - Virtual private cloud (VPC): PrivateNetwork
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
   * The ID of the virtual private cloud (VPC).
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
   * vsw-bp1iu4x7aeradadown****,vsw-bp193sqmadadlaszpeq****
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

export class GetConnectionResponseBodyDataConnections extends $dara.Model {
  /**
   * @remarks
   * The data structure of the permission.
   */
  authParameters?: GetConnectionResponseBodyDataConnectionsAuthParameters;
  /**
   * @remarks
   * The name of the connection configuration.
   * 
   * @example
   * demo
   */
  connectionName?: string;
  /**
   * @remarks
   * The description of the connection configuration.
   * 
   * @example
   * demo
   */
  description?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1669648905
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 5668
   */
  id?: number;
  /**
   * @remarks
   * The data structure of the network configuration.
   */
  networkParameters?: GetConnectionResponseBodyDataConnectionsNetworkParameters;
  /**
   * @remarks
   * The data source connection parameters (JSON object). Only returned for data source type connections. Empty for the Http type. For field definitions, refer to the ParamsSchema returned by GetConnectionType.
   * 
   * @example
   * {"HostName":"xxx.mysql.rds.aliyuncs.com","Port":"3306","User":"root","Password":"xxx","DatabaseName":"demo_db"}
   */
  parameters?: any;
  /**
   * @remarks
   * The connection type. Valid values: Http, MySQL, PostgreSQL, Elasticsearch.
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
      gmtCreate: 'GmtCreate',
      id: 'Id',
      networkParameters: 'NetworkParameters',
      parameters: 'Parameters',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authParameters: GetConnectionResponseBodyDataConnectionsAuthParameters,
      connectionName: 'string',
      description: 'string',
      gmtCreate: 'number',
      id: 'number',
      networkParameters: GetConnectionResponseBodyDataConnectionsNetworkParameters,
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

export class GetConnectionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of connection configuration information.
   */
  connections?: GetConnectionResponseBodyDataConnections[];
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: { 'type': 'array', 'itemType': GetConnectionResponseBodyDataConnections },
    };
  }

  validate() {
    if(Array.isArray(this.connections)) {
      $dara.Model.validateArray(this.connections);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status or POP error code. Valid values: Success: The request was successful.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: GetConnectionResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The information returned by the API request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The returned request ID.
   * 
   * @example
   * 34AD682D-5B91-5773-8132-AA38C130****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetConnectionResponseBodyData,
      httpCode: 'number',
      message: 'string',
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

