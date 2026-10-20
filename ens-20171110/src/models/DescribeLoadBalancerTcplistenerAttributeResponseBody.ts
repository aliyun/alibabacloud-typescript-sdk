// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancerTCPListenerAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The port used by the backend servers. Valid values: **1** to **65535**.
   * 
   * @example
   * 8080
   */
  backendServerPort?: number;
  /**
   * @remarks
   * The peak bandwidth of the load balancer. The default value is -1, which indicates unlimited bandwidth.
   * 
   * @example
   * -1
   */
  bandwidth?: number;
  /**
   * @remarks
   * The description of the listener.
   * 
   * @example
   * example
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether EIP passthrough is enabled. Valid values:
   * 
   * - **on**: enable
   * 
   * - **off** (Default): disable
   * 
   * @example
   * on
   */
  eipTransmit?: string;
  /**
   * @remarks
   * The connection timeout. Valid values: **10** to **900**. Unit: seconds.
   * 
   * @example
   * 500
   */
  establishedTimeout?: number;
  /**
   * @remarks
   * Specifies whether to enable health checks. Valid values:
   * 
   * - **on**: enable
   * 
   * - **off**: disable
   * 
   * @example
   * on
   */
  healthCheck?: string;
  /**
   * @remarks
   * The port used for health checks. Valid values: **1** to **65535**. If this parameter is not specified, the value of `BackendServerPort` is used.
   * 
   * > This parameter takes effect only when the HealthCheck parameter is set to `on`.
   * 
   * @example
   * 8000
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The response timeout for a health check. If a backend ENS instance does not respond within this timeout period, the health check fails.
   * 
   * - Default value: 5.
   * 
   * - Valid values: **1** to **300**.
   * 
   * - Unit: seconds.
   * 
   * > * This parameter takes effect only when the HealthCheck parameter is set to `on`.
   * >
   * > * If this value is less than the `HealthCheckInterval` value, the `HealthCheckInterval` value is used as the timeout period instead.
   * 
   * @example
   * 100
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * The domain name used for health checks.
   * 
   * > This parameter takes effect only when the HealthCheck parameter is set to `on`.
   * 
   * @example
   * example.com
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status codes that indicate a successful health check. Valid values:
   * 
   * - **http_2xx** (Default)
   * 
   * - **http_3xx**
   * 
   * - **http_4xx**
   * 
   * - **http_5xx**
   * 
   * > This parameter takes effect only when the HealthCheck parameter is set to `on`.
   * 
   * @example
   * http_2xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The interval between health checks. Valid values: **1** to **50**. Unit: seconds.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The health check type. Valid values:
   * 
   * - **tcp** (Default)
   * 
   * - **http**
   * 
   * @example
   * tcp
   */
  healthCheckType?: string;
  /**
   * @remarks
   * The URI used for health checks. Length: **1** to **80** characters.
   * 
   * > - The URI must start with `/` but cannot consist solely of `/`.
   * >
   * > - This parameter takes effect only when the HealthCheck parameter is set to `on`.
   * 
   * @example
   * /example/index.html
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The number of consecutive successful health checks required to change the health status of a backend server from `fail` (unhealthy) to `success` (healthy). Valid values: **2** to **10**.
   * 
   * > This parameter takes effect only when the HealthCheck parameter is set to `on`.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The frontend port used by the load balancer instance.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The session persistence timeout.
   * 
   * - Default value: 0. A value of 0 indicates that session persistence is disabled.
   * 
   * - Valid values: **0** to **3600**.
   * 
   * - Unit: seconds.
   * 
   * @example
   * 0
   */
  persistenceTimeout?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * - **wrr**: Weighted Round Robin. Backend servers with higher weights receive more requests.
   * 
   * - **wlc**: Weighted Least Connections. In addition to weights, the system considers the number of active connections to each backend server. If multiple backend servers have the same weight, the system selects the backend server with the fewest active connections.
   * 
   * - **rr**: Round Robin. The system distributes requests sequentially to the backend servers.
   * 
   * - **sch**: Source IP Hash. The system routes requests from the same source IP address to the same backend server.
   * 
   * - **tch**: 4-Tuple Hash. The system routes requests that share the same 4-tuple (source IP address, destination IP address, source port, and destination port) to the same backend server.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The status of the listener. Valid values:
   * 
   * - **Running**: The listener is running.
   * 
   * - **Stopped**: The listener is stopped.
   * 
   * - **Starting**: The listener is being started.
   * 
   * - **Configuring**: The listener is being configured.
   * 
   * - **Stopping**: The listener is being stopped.
   * 
   * @example
   * Stopped
   */
  status?: string;
  /**
   * @remarks
   * The number of consecutive failed health checks required to change the health status of a backend server from `success` (healthy) to `fail` (unhealthy). Valid values: **2** to **10**.
   * 
   * > This parameter takes effect only when the HealthCheck parameter is set to `on`.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
      description: 'Description',
      eipTransmit: 'EipTransmit',
      establishedTimeout: 'EstablishedTimeout',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckType: 'HealthCheckType',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      listenerPort: 'ListenerPort',
      persistenceTimeout: 'PersistenceTimeout',
      requestId: 'RequestId',
      scheduler: 'Scheduler',
      status: 'Status',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServerPort: 'number',
      bandwidth: 'number',
      description: 'string',
      eipTransmit: 'string',
      establishedTimeout: 'number',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckType: 'string',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      listenerPort: 'number',
      persistenceTimeout: 'number',
      requestId: 'string',
      scheduler: 'string',
      status: 'string',
      unhealthyThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

