// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceEndpointsResponseBodyItemsEndpointConfigAuth extends $dara.Model {
  apiKey?: string;
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
   * @example
   * cert-xxx
   */
  certIdentifier?: string;
  /**
   * @example
   * MATRIX
   */
  component?: string;
  createTime?: string;
  /**
   * @example
   * matrix.example.com
   */
  domain?: string;
  /**
   * @example
   * CUSTOM
   */
  domainType?: string;
  endpointConfig?: ListServiceEndpointsResponseBodyItemsEndpointConfig;
  endpointId?: string;
  /**
   * @example
   * matrix-service
   */
  endpointName?: string;
  instanceId?: string;
  /**
   * @example
   * INTERNET
   */
  networkType?: string;
  /**
   * @example
   * CONFIGURED
   */
  status?: string;
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
   * @example
   * SUCCESS
   */
  code?: string;
  items?: ListServiceEndpointsResponseBodyItems[];
  /**
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  nextToken?: string;
  /**
   * @example
   * xxx
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

