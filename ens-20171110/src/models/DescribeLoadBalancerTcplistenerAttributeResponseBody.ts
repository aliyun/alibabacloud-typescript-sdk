// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancerTCPListenerAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The port used by the backend server of the load balancing instance. Valid values: **1** to **65535**.
   * 
   * @example
   * 8080
   */
  backendServerPort?: number;
  /**
   * @remarks
   * The peak bandwidth of the load balancing instance. Default value: -1, which indicates that no bandwidth throttling is applied.
   * 
   * @example
   * -1
   */
  bandwidth?: number;
  /**
   * @remarks
   * The name of the listener.
   * 
   * @example
   * example
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable EIP pass-through. Valid values:
   * 
   * - **on**: enabled
   * - **off** (default): disabled
   * 
   * @example
   * on
   */
  eipTransmit?: string;
  /**
   * @remarks
   * The connection timeout period. Valid values: **10** to **900**. Unit: seconds.
   * 
   * @example
   * 500
   */
  establishedTimeout?: number;
  /**
   * @remarks
   * Specifies whether to enable the health check feature. Valid values:
   * 
   * - **on**: enabled
   * - **off**: disabled
   * 
   * @example
   * on
   */
  healthCheck?: string;
  /**
   * @remarks
   * The port used for health checks. Valid values: **1** to **65535**. If the Settings for this parameter are not specified, the backend service port (BackendServerPort) is used.
   * > This parameter takes effect only when HealthCheck is set to on.
   * 
   * @example
   * 8000
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The timeout period for receiving a health check response. If a backend ENS instance does not respond within the specified timeout period, the health check fails.
   * - Default value: 5.
   * - Valid values: **1** to **300**.
   * - Unit: seconds.
   * > - This parameter takes effect only when HealthCheck is set to on.
   * > - If the value of HealthCheckConnectTimeout is less than the value of HealthCheckInterval, HealthCheckConnectTimeout becomes invalid and the timeout period is the value of HealthCheckInterval.
   * 
   * @example
   * 100
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * The domain name used for health checks.
   * > This parameter takes effect only when HealthCheck is set to on.
   * 
   * @example
   * example.com
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status code that indicates a successful health check. Valid values:
   * 
   * - **http_2xx** (default)
   * - **http_3xx**
   * - **http_4xx**
   * - **http_5xx**
   * 
   * > This parameter takes effect only when HealthCheck is set to on.
   * 
   * @example
   * http_2xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The interval between two consecutive health checks. Valid values: **1** to **50**. Unit: seconds.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The health check type. Valid values:
   * - **tcp** (default)
   * - **http**
   * 
   * @example
   * tcp
   */
  healthCheckType?: string;
  /**
   * @remarks
   * The URI used for health checks. The URI must be **1** to **80** characters in length.
   * > - The URI cannot contain only a forward slash (`/`), but it must start with a forward slash.
   * > - This parameter takes effect only when HealthCheck is set to on.
   * 
   * @example
   * /example/index.html
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The number of consecutive successful health checks required to change the health check status of a backend server from fail (unreachable) to success (reachable). Valid values: **2** to **10**.
   * > This parameter takes effect only when HealthCheck is set to on.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The frontend port used by the load balancing instance.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The timeout period for session persistence.
   * 
   * - Default value: 0, which indicates that session persistence is disabled.
   * - Valid values: **0** to **3600**.
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
   * - **wrr**: Backend servers with higher weights are polled more frequently.
   * - **wlc**: Backend servers are polled based on their weights and actual loads (number of connections). If weights are the same, backend servers with fewer current connections are polled more frequently.
   * - **rr**: External requests are distributed to backend servers in sequence.
   * - **sch**: Consistent hashing is based on source IP addresses. Requests from the same source IP address are scheduled to the same backend server.
   * - **tch**: Consistent hashing is based on quadruples (source IP address, destination IP address, source port, and destination port). Requests from the same stream are scheduled to the same backend server.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The status of the listener. Valid values:
   * 
   * - **Running**: running normally
   * - **Stopped**: stopped
   * - **Starting**: starting
   * - **Configuring**: configuring
   * - **Stopping**: stopping
   * 
   * @example
   * Stopped
   */
  status?: string;
  /**
   * @remarks
   * The number of consecutive failed health checks required to change the health check status of a backend server from success (reachable) to fail (unreachable). Valid values: **2** to **10**.
   * 
   * > This parameter takes effect only when HealthCheck is set to on.
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

