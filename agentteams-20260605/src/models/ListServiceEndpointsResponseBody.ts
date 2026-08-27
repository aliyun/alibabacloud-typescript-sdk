// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceEndpointsResponseBodyItemsEndpointConfigAuth extends $dara.Model {
  /**
   * @remarks
   * API Key
   * 
   * @example
   * xxx
   */
  apiKey?: string;
  /**
   * @remarks
   * The API key name.
   * 
   * @example
   * Authorization
   */
  apiKeyName?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      apiKeyName: 'ApiKeyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      apiKeyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceEndpointsResponseBodyItemsEndpointConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication configuration.
   * 
   * @example
   * {}
   */
  auth?: ListServiceEndpointsResponseBodyItemsEndpointConfigAuth;
  static names(): { [key: string]: string } {
    return {
      auth: 'Auth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auth: ListServiceEndpointsResponseBodyItemsEndpointConfigAuth,
    };
  }

  validate() {
    if(this.auth && typeof (this.auth as any).validate === 'function') {
      (this.auth as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceEndpointsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The certificate identifier.
   * 
   * @example
   * cert-xxx
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The endpoint component. Valid values: `ELEMENT`, `MATRIX`, `WORKER`, and `TUNNEL`.
   * 
   * @example
   * MATRIX
   */
  component?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * matrix.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The domain name type. Valid values: `BUILTIN` and `CUSTOM`.
   * 
   * @example
   * CUSTOM
   */
  domainType?: string;
  /**
   * @remarks
   * The configuration information of the endpoint.
   * 
   * @example
   * {}
   */
  endpointConfig?: ListServiceEndpointsResponseBodyItemsEndpointConfig;
  /**
   * @remarks
   * Endpoint ID
   * 
   * @example
   * ep-xxx
   */
  endpointId?: string;
  /**
   * @remarks
   * The service name. Exact match is used.
   * 
   * @example
   * matrix-service
   */
  endpointName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * agentteams-cn-xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The network type. Valid values: `INTRANET` and `INTERNET`.
   * 
   * @example
   * INTERNET
   */
  networkType?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * CONFIGURED
   */
  status?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      component: 'Component',
      createTime: 'CreateTime',
      domain: 'Domain',
      domainType: 'DomainType',
      endpointConfig: 'EndpointConfig',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      instanceId: 'InstanceId',
      networkType: 'NetworkType',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      component: 'string',
      createTime: 'string',
      domain: 'string',
      domainType: 'string',
      endpointConfig: ListServiceEndpointsResponseBodyItemsEndpointConfig,
      endpointId: 'string',
      endpointName: 'string',
      instanceId: 'string',
      networkType: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.endpointConfig && typeof (this.endpointConfig as any).validate === 'function') {
      (this.endpointConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceEndpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * items
   * 
   * @example
   * [...]
   */
  items?: ListServiceEndpointsResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of results returned.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * nextToken
   * 
   * @example
   * 2
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * totalCount
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      items: 'Items',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': ListServiceEndpointsResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

