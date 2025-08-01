// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnsServiceClustersResponseBodyDataAppDetail extends $dara.Model {
  /**
   * @remarks
   * The ID of the application for which Microservices Governance is enabled.
   * 
   * @example
   * hkhon1po62@904cba2c0xxxxxx
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application for which Microservices Governance is enabled.
   * 
   * @example
   * spring-cloud-b
   */
  appName?: string;
  /**
   * @remarks
   * The health check interval. Unit: seconds.
   * 
   * @example
   * 2
   */
  checkInternal?: number;
  /**
   * @remarks
   * The path of the health check. This parameter is required only when the CheckType parameter is set to http.
   * 
   * @example
   * /health
   */
  checkPath?: string;
  /**
   * @remarks
   * The timeout period of the health check response. Unit: seconds.
   * 
   * @example
   * 5
   */
  checkTimeout?: number;
  /**
   * @remarks
   * The type of the health check. Valid values:
   * 
   * *   connection: connection status check
   * *   tcp: TCP connection check
   * *   http: HTTP connection check
   * 
   * @example
   * connection
   */
  checkType?: string;
  /**
   * @remarks
   * The maximum number of health check retries when the instance state changes from unhealthy to healthy.
   * 
   * @example
   * 2
   */
  healthyCheckTimes?: number;
  /**
   * @remarks
   * The port number of the application for which Microservices Governance is enabled.
   * 
   * @example
   * 6001
   */
  port?: number;
  /**
   * @remarks
   * The maximum number of health check retries when the instance state changes from healthy to unhealthy.
   * 
   * @example
   * 2
   */
  unhealthyCheckTimes?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      checkInternal: 'CheckInternal',
      checkPath: 'CheckPath',
      checkTimeout: 'CheckTimeout',
      checkType: 'CheckType',
      healthyCheckTimes: 'HealthyCheckTimes',
      port: 'Port',
      unhealthyCheckTimes: 'UnhealthyCheckTimes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      checkInternal: 'number',
      checkPath: 'string',
      checkTimeout: 'number',
      checkType: 'string',
      healthyCheckTimes: 'number',
      port: 'number',
      unhealthyCheckTimes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnsServiceClustersResponseBodyDataClusters extends $dara.Model {
  /**
   * @remarks
   * The default port used for a health check.
   * 
   * @example
   * 80
   */
  defaultCheckPort?: number;
  /**
   * @remarks
   * The default port.
   * 
   * @example
   * 80
   */
  defaultPort?: number;
  /**
   * @remarks
   * The type of the health check.
   * 
   * @example
   * Heartbeat Reporting
   */
  healthCheckerType?: string;
  /**
   * @remarks
   * The metadata of the cluster.
   * 
   * @example
   * 111
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The full name of the service.
   * 
   * @example
   * DEFAULT_GROUP@@nacos.test.3
   */
  serviceName?: string;
  /**
   * @remarks
   * Indicates whether an end-to-end health check was initiated by the server. This parameter is valid only if the service is not a temporary service.
   * 
   * @example
   * true
   */
  useIPPort4Check?: boolean;
  static names(): { [key: string]: string } {
    return {
      defaultCheckPort: 'DefaultCheckPort',
      defaultPort: 'DefaultPort',
      healthCheckerType: 'HealthCheckerType',
      metadata: 'Metadata',
      name: 'Name',
      serviceName: 'ServiceName',
      useIPPort4Check: 'UseIPPort4Check',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultCheckPort: 'number',
      defaultPort: 'number',
      healthCheckerType: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      serviceName: 'string',
      useIPPort4Check: 'boolean',
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnsServiceClustersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the associated application for which Microservices Governance is enabled when the Source parameter is set to governance.
   */
  appDetail?: ListAnsServiceClustersResponseBodyDataAppDetail;
  /**
   * @remarks
   * The cluster information.
   */
  clusters?: ListAnsServiceClustersResponseBodyDataClusters[];
  /**
   * @remarks
   * Indicates whether the service is a temporary service. Valid values:
   * 
   * *   `true`: yes
   * *   `false`: no
   * 
   * @example
   * true
   */
  ephemeral?: boolean;
  /**
   * @remarks
   * The service group to which the service belongs.
   * 
   * @example
   * DEFAULT_GROUP
   */
  groupName?: string;
  /**
   * @remarks
   * The metadata of the service.
   * 
   * @example
   * 111
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * nacos.test.3
   */
  name?: string;
  /**
   * @remarks
   * The protection threshold.
   * 
   * @example
   * 0
   */
  protectThreshold?: number;
  /**
   * @remarks
   * The election mode.
   * 
   * @example
   * none
   */
  selectorType?: string;
  /**
   * @remarks
   * The source type of the service. Valid values:
   * 
   * *   console: The service was registered in the console.
   * *   sdk: The service was registered by using the SDK.
   * *   governance: The service was registered on Microservices Governance.
   * 
   * @example
   * console
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appDetail: 'AppDetail',
      clusters: 'Clusters',
      ephemeral: 'Ephemeral',
      groupName: 'GroupName',
      metadata: 'Metadata',
      name: 'Name',
      protectThreshold: 'ProtectThreshold',
      selectorType: 'SelectorType',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDetail: ListAnsServiceClustersResponseBodyDataAppDetail,
      clusters: { 'type': 'array', 'itemType': ListAnsServiceClustersResponseBodyDataClusters },
      ephemeral: 'boolean',
      groupName: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      protectThreshold: 'number',
      selectorType: 'string',
      source: 'string',
    };
  }

  validate() {
    if(this.appDetail && typeof (this.appDetail as any).validate === 'function') {
      (this.appDetail as any).validate();
    }
    if(Array.isArray(this.clusters)) {
      $dara.Model.validateArray(this.clusters);
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnsServiceClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListAnsServiceClustersResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: string;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * The request was successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 52BA6DA6-A702-4362-A32F-DFF79655****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListAnsServiceClustersResponseBodyData,
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

