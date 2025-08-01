// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnsInstancesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * app
   */
  app?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * DEFAULT
   */
  clusterName?: string;
  /**
   * @remarks
   * The reference key.
   * 
   * @example
   * 30.5.XX.XX:unknown:DEFAULT
   */
  datumKey?: string;
  /**
   * @remarks
   * The default key.
   * 
   * @example
   * 30.5.XX.XX:unknown
   */
  defaultKey?: string;
  /**
   * @remarks
   * The effective status of the instance. Valid values:
   * 
   * *   `true`: The instance takes effect.
   * *   `false`: The instance does not take effect.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Indicates whether the information about the ephemeral node is obtained. Valid values:
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
   * The number of counted failures.
   * 
   * @example
   * 0
   */
  failCount?: number;
  /**
   * @remarks
   * The health status of the instance. Valid values:
   * 
   * *   `true`: The instance is healthy.
   * *   `false`: The instance is unhealthy.
   * 
   * @example
   * true
   */
  healthy?: boolean;
  /**
   * @remarks
   * The heartbeat interval of the instance. Unit: seconds.
   * 
   * @example
   * 5000
   */
  instanceHeartBeatInterval?: number;
  /**
   * @remarks
   * The timeout period of the instance heartbeat.
   * 
   * @example
   * 15000
   */
  instanceHeartBeatTimeOut?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 30.5.XX.XX#0#DEFAULT#DEFAULT_GROUP@@consumers:com.alibaba.edas.IHelloService
   */
  instanceId?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 30.5.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The timeout period for removing an IP address.
   * 
   * @example
   * 30000
   */
  ipDeleteTimeout?: number;
  /**
   * @remarks
   * The last heartbeat time.
   * 
   * @example
   * 20201010
   */
  lastBeat?: number;
  /**
   * @remarks
   * Indicates whether the instance was marked. Valid values:
   * 
   * *   `true`: The instance marking was successful.
   * *   `false`: The instance marking failed.
   * 
   * @example
   * true
   */
  marked?: boolean;
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * [int]
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The number of counted successes.
   * 
   * @example
   * 0
   */
  okCount?: number;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * DEFAULT_GROUP@@consumers:com.alibaba.edas.IHelloService::
   */
  serviceName?: string;
  /**
   * @remarks
   * The weight.
   * 
   * @example
   * 1
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      clusterName: 'ClusterName',
      datumKey: 'DatumKey',
      defaultKey: 'DefaultKey',
      enabled: 'Enabled',
      ephemeral: 'Ephemeral',
      failCount: 'FailCount',
      healthy: 'Healthy',
      instanceHeartBeatInterval: 'InstanceHeartBeatInterval',
      instanceHeartBeatTimeOut: 'InstanceHeartBeatTimeOut',
      instanceId: 'InstanceId',
      ip: 'Ip',
      ipDeleteTimeout: 'IpDeleteTimeout',
      lastBeat: 'LastBeat',
      marked: 'Marked',
      metadata: 'Metadata',
      okCount: 'OkCount',
      port: 'Port',
      serviceName: 'ServiceName',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      clusterName: 'string',
      datumKey: 'string',
      defaultKey: 'string',
      enabled: 'boolean',
      ephemeral: 'boolean',
      failCount: 'number',
      healthy: 'boolean',
      instanceHeartBeatInterval: 'number',
      instanceHeartBeatTimeOut: 'number',
      instanceId: 'string',
      ip: 'string',
      ipDeleteTimeout: 'number',
      lastBeat: 'number',
      marked: 'boolean',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      okCount: 'number',
      port: 'number',
      serviceName: 'string',
      weight: 'number',
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

export class ListAnsInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the data.
   */
  data?: ListAnsInstancesResponseBodyData[];
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
   * The HTTP status code returned.
   * 
   * @example
   * 202
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
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
  /**
   * @remarks
   * The total number of returned instances.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAnsInstancesResponseBodyData },
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

