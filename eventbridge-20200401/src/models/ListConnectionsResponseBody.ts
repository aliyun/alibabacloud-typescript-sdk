// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConnectionsResponseBodyDataConnectionsAuthParametersApiKeyAuthParameters extends $dara.Model {
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
   * asdkjnqkwejooa
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

export class ListConnectionsResponseBodyDataConnectionsAuthParametersBasicAuthParameters extends $dara.Model {
  /**
   * @remarks
   * The password used for basic authentication.
   * 
   * @example
   * admin
   */
  password?: string;
  /**
   * @remarks
   * The username used for basic authentication.
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

export class ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersClientParameters extends $dara.Model {
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

export class ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersBodyParameters extends $dara.Model {
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

export class ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters extends $dara.Model {
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

export class ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters extends $dara.Model {
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
   * The key of the query string parameter.
   * 
   * @example
   * name
   */
  key?: string;
  /**
   * @remarks
   * The value of the query string parameter.
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

export class ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParameters extends $dara.Model {
  /**
   * @remarks
   * The list of request parameter data structures.
   */
  bodyParameters?: ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersBodyParameters[];
  /**
   * @remarks
   * The list of header parameters.
   */
  headerParameters?: ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters[];
  /**
   * @remarks
   * The data structure of query string parameters.
   */
  queryStringParameters?: ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters[];
  static names(): { [key: string]: string } {
    return {
      bodyParameters: 'BodyParameters',
      headerParameters: 'HeaderParameters',
      queryStringParameters: 'QueryStringParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyParameters: { 'type': 'array', 'itemType': ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersBodyParameters },
      headerParameters: { 'type': 'array', 'itemType': ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters },
      queryStringParameters: { 'type': 'array', 'itemType': ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters },
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

export class ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParameters extends $dara.Model {
  /**
   * @remarks
   * The endpoint URL for obtaining the OAuth token.
   * 
   * @example
   * http://localhost:8080/oauth/token
   */
  authorizationEndpoint?: string;
  /**
   * @remarks
   * The data structure of client parameters.
   */
  clientParameters?: ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersClientParameters;
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
   * The request parameters used for OAuth authentication.
   */
  OAuthHttpParameters?: ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParameters;
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
      clientParameters: ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersClientParameters,
      httpMethod: 'string',
      OAuthHttpParameters: ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParameters,
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

export class ListConnectionsResponseBodyDataConnectionsAuthParameters extends $dara.Model {
  /**
   * @remarks
   * The data structure of API key authentication parameters.
   */
  apiKeyAuthParameters?: ListConnectionsResponseBodyDataConnectionsAuthParametersApiKeyAuthParameters;
  /**
   * @remarks
   * The authentication type. Valid values:
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
   * The data structure of basic authentication parameters.
   */
  basicAuthParameters?: ListConnectionsResponseBodyDataConnectionsAuthParametersBasicAuthParameters;
  /**
   * @remarks
   * The data structure of OAuth request parameters.
   */
  OAuthParameters?: ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParameters;
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
      apiKeyAuthParameters: ListConnectionsResponseBodyDataConnectionsAuthParametersApiKeyAuthParameters,
      authorizationType: 'string',
      basicAuthParameters: ListConnectionsResponseBodyDataConnectionsAuthParametersBasicAuthParameters,
      OAuthParameters: ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParameters,
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

export class ListConnectionsResponseBodyDataConnectionsNetworkParameters extends $dara.Model {
  /**
   * @remarks
   * - Public network: PublicNetwork
   * 
   * - Virtual private cloud: PrivateNetwork
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
   * The ID of the virtual private cloud (VPC).
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

export class ListConnectionsResponseBodyDataConnections extends $dara.Model {
  /**
   * @remarks
   * The data structure of authentication parameters.
   */
  authParameters?: ListConnectionsResponseBodyDataConnectionsAuthParameters;
  /**
   * @remarks
   * The name of the connection configuration.
   * 
   * @example
   * connection-name
   */
  connectionName?: string;
  /**
   * @remarks
   * The description of the connection configuration.
   * 
   * @example
   * Description of the connection configuration
   */
  description?: string;
  /**
   * @remarks
   * The timestamp when the data source was created.
   * 
   * @example
   * 1592838994234
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The ID of the connection configuration.
   * 
   * @example
   * 1141093
   */
  id?: number;
  /**
   * @remarks
   * The data structure of the network configuration.
   */
  networkParameters?: ListConnectionsResponseBodyDataConnectionsNetworkParameters;
  /**
   * @remarks
   * The data source connection parameters (JSON object). This field is only returned for data source type connections and is empty for Http type. For field definitions, refer to the ParamsSchema returned by GetConnectionType.
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
      authParameters: ListConnectionsResponseBodyDataConnectionsAuthParameters,
      connectionName: 'string',
      description: 'string',
      gmtCreate: 'number',
      id: 'number',
      networkParameters: ListConnectionsResponseBodyDataConnectionsNetworkParameters,
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

export class ListConnectionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of returned connection configurations.
   */
  connections?: ListConnectionsResponseBodyDataConnections[];
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * If there are more results to fetch, NextToken is returned.
   * 
   * @example
   * 0
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: { 'type': 'array', 'itemType': ListConnectionsResponseBodyDataConnections },
      maxResults: 'number',
      nextToken: 'string',
      total: 'number',
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

export class ListConnectionsResponseBody extends $dara.Model {
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
   * The list of returned connection configurations.
   */
  data?: ListConnectionsResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Common parameter. The ID of each request is unique and can be used for troubleshooting and issue locating.
   * 
   * @example
   * E3619976-8714-5D88-BBA2-6983D798A8BB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListConnectionsResponseBodyData,
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

