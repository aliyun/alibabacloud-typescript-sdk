// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLoadBalancerUDPListenerAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the listener. The name must be **1** to **80** characters long.
   * 
   * > The name cannot start with `http://` or `https://`.
   * 
   * @example
   * example
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable EIP passthrough. Valid values:
   * 
   * - **on**: Enables EIP passthrough.
   * 
   * - **off** (default): Disables EIP passthrough.
   * 
   * @example
   * on
   */
  eipTransmit?: string;
  /**
   * @remarks
   * The timeout for established connections, in seconds. The value must be an integer from **10** to **900**. The default value is **900**.
   * 
   * @example
   * 500
   */
  establishedTimeout?: number;
  /**
   * @remarks
   * The port used for health checks. Valid values: **1** to **65535**. Defaults to the backend server port (`BackendServerPort`) if not specified.
   * 
   * @example
   * 8080
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The timeout for a health check response. If a backend ENS instance does not respond within this timeout period, the health check fails.
   * 
   * - Default value: 5
   * 
   * - Valid values: **1** to **300**
   * 
   * - Unit: seconds
   * 
   * > If the value of `HealthCheckConnectTimeout` is less than the value of `HealthCheckInterval`, the system ignores `HealthCheckConnectTimeout` and uses the value of `HealthCheckInterval` as the timeout period.
   * 
   * @example
   * 100
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * The expected response string for a UDP listener health check. The string can contain only letters and digits and must be at most 64 characters long.
   * 
   * @example
   * ok
   */
  healthCheckExp?: string;
  /**
   * @remarks
   * The interval, in seconds, between consecutive health checks. Valid values: **1** to **50**.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The request string for a UDP listener health check. The string can contain only letters and digits and must be at most 64 characters long.
   * 
   * @example
   * hello
   */
  healthCheckReq?: string;
  /**
   * @remarks
   * The number of consecutive successful health checks required to mark an unhealthy backend server as healthy. Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The listener port to modify. Valid values: **1** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The ID of the load balancer instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-5pzipr2fszqtl2xf64uy5****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * - **wrr**: Weighted Round Robin. Backend servers with higher weights receive a larger proportion of requests.
   * 
   * - **wlc**: Weighted Least Connections. Requests are distributed based on both the weights and the number of active connections of backend servers. If servers have the same weight, the server with the fewest active connections receives more requests.
   * 
   * - **rr**: Round Robin. Requests are distributed to backend servers in sequence.
   * 
   * - **sch**: Source IP Hash. A consistent hash based on the source IP address. Requests from the same source IP address are routed to the same backend server.
   * 
   * - **tch**: 4-Tuple Hash. A consistent hash based on the 4-tuple (source IP, destination IP, source port, and destination port). Flows with the same 4-tuple are routed to the same backend server.
   * 
   * - **qch**: QUIC Connection ID Hash. A consistent hash based on the QUIC Connection ID. Requests with the same QUIC Connection ID are routed to the same backend server.
   * 
   * - **iqch**: iQUIC CID Hash. A consistent hash based on three specific bytes (from the second to the fourth byte) of the iQUIC CID. Requests with identical values in these three bytes are routed to the same backend server.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The number of consecutive failed health checks required to mark a healthy backend server as unhealthy. Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eipTransmit: 'EipTransmit',
      establishedTimeout: 'EstablishedTimeout',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckExp: 'HealthCheckExp',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckReq: 'HealthCheckReq',
      healthyThreshold: 'HealthyThreshold',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      scheduler: 'Scheduler',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eipTransmit: 'string',
      establishedTimeout: 'number',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckExp: 'string',
      healthCheckInterval: 'number',
      healthCheckReq: 'string',
      healthyThreshold: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      scheduler: 'string',
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

