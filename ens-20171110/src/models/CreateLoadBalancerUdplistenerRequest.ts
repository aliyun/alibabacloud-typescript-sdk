// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerUDPListenerRequest extends $dara.Model {
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
   * Specifies whether EIP pass-through is enabled. Valid values:
   * 
   * - **on**: Enables EIP pass-through.
   * 
   * - **off** (default): Disables EIP pass-through.
   * 
   * @example
   * on
   */
  eipTransmit?: string;
  /**
   * @remarks
   * The timeout for established connections. Valid values: **10** to **900**. Default value: **900**. Unit: seconds.
   * 
   * @example
   * 500
   */
  establishedTimeout?: number;
  /**
   * @remarks
   * The port used for health checks. Valid values: **1** to **65535**. If you do not specify this parameter, the port specified by `BackendServerPort` is used.
   * 
   * @example
   * 8080
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The maximum time to wait for a response to a health check. A health check fails if a backend ENS instance does not respond within this time.
   * 
   * - Default value: 5.
   * 
   * - Valid values: **1** to **300**.
   * 
   * - Unit: seconds.
   * 
   * > If this timeout is shorter than the health check interval (`HealthCheckInterval`), the interval value is used for the timeout instead.
   * 
   * @example
   * 100
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * The expected response string for UDP health checks. The string must be up to 64 characters long and contain only letters and digits.
   * 
   * @example
   * ok
   */
  healthCheckExp?: string;
  /**
   * @remarks
   * The interval between health checks, in seconds. Valid values: **1** to **50**. Default value: **2**.
   * 
   * @example
   * 3
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The request string for UDP health checks. The string must be up to 64 characters long and contain only letters and digits.
   * 
   * @example
   * hello
   */
  healthCheckReq?: string;
  /**
   * @remarks
   * The number of consecutive successful health checks required for a backend server to be considered healthy. Valid values: **2** to **10**. Default value: **3**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The listener port used to receive requests and forward them to backend servers. Valid values: **1** to **65535**.
   * 
   * > For UDP listeners, ports 250, 4789, and 4790 are system-reserved and not available for use.
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
   * lb-5q73cv04zeyh43lh74lp4****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * - **wrr** (default): Weighted Round Robin. Backend servers with a higher weight receive more requests.
   * 
   * - **wlc**: Weighted Least Connections. Requests are distributed based on both the weight and the number of current connections of each backend server. If multiple backend servers have the same weight, the one with the fewest active connections receives the next request.
   * 
   * - **rr**: Round Robin. Requests are distributed to backend servers sequentially.
   * 
   * - **sch**: Source IP Hash. Requests from the same source IP address are routed to the same backend server.
   * 
   * - **tch**: Four-tuple Hash. Requests are routed to backend servers based on a hash of four values: source IP address, destination IP address, source port, and destination port. Flows with the same four values are routed to the same backend server.
   * 
   * - **qch**: QUIC Connection ID Hash. Requests with the same QUIC Connection ID are routed to the same backend server.
   * 
   * - **iqch**: A consistent hash algorithm for iQUIC Connection IDs. Flows with the same second, third, and fourth bytes in the iQUIC CID are routed to the same backend server.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The number of consecutive failed health checks required for a backend server to be considered unhealthy. Valid values: **2** to **10**. Default value: **3**.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      backendServerPort: 'BackendServerPort',
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
      backendServerPort: 'number',
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

