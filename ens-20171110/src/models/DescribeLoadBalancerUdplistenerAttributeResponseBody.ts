// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancerUDPListenerAttributeResponseBody extends $dara.Model {
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
   * The peak bandwidth of the load balancer. A value of -1 indicates that no rate limit is applied.
   * 
   * @example
   * 5
   */
  bandwidth?: number;
  /**
   * @remarks
   * The listener name.
   * 
   * @example
   * example
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable EIP passthrough. Valid values:
   * 
   * - **on**: Enabled.
   * 
   * - **off** (default): Disabled.
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
   * Specifies whether to enable health checks. Valid values:
   * 
   * - **on**: Enabled.
   * 
   * - **off**: Disabled.
   * 
   * @example
   * on
   */
  healthCheck?: string;
  /**
   * @remarks
   * The port used for health checks. Valid values: **1** to **65535**. If you do not specify this parameter, the value of `BackendServerPort` is used.
   * 
   * @example
   * 8000
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The timeout period for a health check response. If a backend ENS instance does not respond within the specified timeout period, the health check fails.
   * 
   * - Default value: 5.
   * 
   * - Valid values: **1** to **300**.
   * 
   * - Unit: seconds.
   * 
   * > * This parameter takes effect only when `HealthCheck` is set to `on`.
   * >
   * > * If the value of `HealthCheckConnectTimeout` is less than the value of `HealthCheckInterval`, the value of `HealthCheckInterval` is used as the timeout period.
   * 
   * @example
   * 100
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * The response string for UDP health checks. The string can contain only letters and digits and can be up to 64 characters in length.
   * 
   * @example
   * ok
   */
  healthCheckExp?: string;
  /**
   * @remarks
   * The interval between health checks. Valid values: **1** to **50**. Unit: seconds.
   * 
   * > This parameter takes effect only when `HealthCheck` is set to `on`.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The request string for UDP health checks. The string can contain only letters and digits and can be up to 64 characters in length.
   * 
   * @example
   * hello
   */
  healthCheckReq?: string;
  /**
   * @remarks
   * The number of consecutive successful health checks that must occur before a backend server can be declared healthy. Valid values: **2** to **10**.
   * 
   * > This parameter takes effect only when `HealthCheck` is set to `on`.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The listener port.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5D7597CF-1630-54EC-A945-624A33F2E7E8
   */
  requestId?: string;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * - **wrr** (Weighted Round Robin): Backend servers with higher weights receive a larger proportion of requests.
   * 
   * - **wlc** (Weighted Least Connections): Requests are distributed based on both the weight and the current connection count of each backend server. If backend servers have the same weight, the server with the fewest connections receives more new requests.
   * 
   * - **rr** (Round Robin): Requests are distributed to backend servers sequentially.
   * 
   * - **sch** (Source IP Hash): Routes requests from the same source IP address to the same backend server by using a consistent hash of the source IP address.
   * 
   * - **tch** (4-tuple Hash): Routes packets from the same flow to the same backend server by using a consistent hash of the 4-tuple (source IP address, destination IP address, source port, and destination port).
   * 
   * - **qch** (QUIC Connection ID Hash): Uses a consistent hashing algorithm on the QUIC Connection ID to ensure that requests with the same connection ID are always routed to the same backend server.
   * 
   * - **iqch** (iQUIC CID Hash): Uses a consistent hashing algorithm on bytes 2, 3, and 4 of the iQUIC CID. Requests where these three bytes are the same are routed to the same backend server.
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
   * - **Starting**: The listener is starting.
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
   * The number of consecutive failed health checks that must occur before a backend server can be declared unhealthy. Valid values: **2** to **10**.
   * 
   * > This parameter takes effect only when `HealthCheck` is set to `on`.
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
      healthCheckExp: 'HealthCheckExp',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckReq: 'HealthCheckReq',
      healthyThreshold: 'HealthyThreshold',
      listenerPort: 'ListenerPort',
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
      healthCheckExp: 'string',
      healthCheckInterval: 'number',
      healthCheckReq: 'string',
      healthyThreshold: 'number',
      listenerPort: 'number',
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

