// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerUDPListenerRequest extends $dara.Model {
  /**
   * @remarks
   * The port used by the backend ELB server of the ELB instance. Valid values: **1** to **65535**.
   * 
   * @example
   * 8080
   */
  backendServerPort?: number;
  /**
   * @remarks
   * The name of the listener. The value must be **1** to **80** characters in length.
   * 
   * >  The value cannot start with `http://` or `https://`.
   * 
   * @example
   * example
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable Elastic IP address (EIP) pass-through. Valid values:
   * 
   * *   **on**
   * *   **off** (default)
   * 
   * @example
   * on
   */
  eipTransmit?: string;
  /**
   * @remarks
   * The timeout period of a connection. Valid values: **10** to **900**. Default value: **900**. Unit: seconds.
   * 
   * @example
   * 500
   */
  establishedTimeout?: number;
  /**
   * @remarks
   * The port that is used for health checks. Valid values: **1** to **65535**. If you leave this parameter empty, the port specified by BackendServerPort is used for health checks.
   * 
   * @example
   * 8080
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The timeout period for a health check response. If a backend server does not respond within the specified timeout period, the server fails the health check.
   * 
   * *   Default value: 5.
   * *   Valid values: **1** to **300**.
   * *   Unit: seconds.
   * 
   * >  If the value of the HealthCheckConnectTimeout parameter is smaller than that of the HealthCheckInterval parameter, the timeout period specified by the HealthCheckConnectTimeout parameter becomes invalid and the value of the HealthCheckInterval parameter is used as the timeout period.
   * 
   * @example
   * 100
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * The response string for UDP listener health checks. The string can be up to 64 characters in length and can contain only letters and digits.
   * 
   * @example
   * ok
   */
  healthCheckExp?: string;
  /**
   * @remarks
   * The interval at which health checks are performed. Valid values: **1** to **50**. Default value: **2**. Unit: seconds.
   * 
   * @example
   * 3
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The request string for UDP listener health checks. The string can be up to 64 characters in length and can contain only letters and digits.
   * 
   * @example
   * hello
   */
  healthCheckReq?: string;
  /**
   * @remarks
   * The number of consecutive successful health checks that must occur before an unhealthy and inaccessible backend server is declared healthy and accessible. Valid values: **2** to **10**. Default value: **3**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The listener port that is used by Edge Load Balancer (ELB) to receive requests and forward the requests to backend servers. Valid values: **1** to **65535**.
   * 
   * >  You cannot specify ports 250, 4789, or 4790 for UDP listeners. They are system reserved ports.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The ID of the Edge Load Balancer (ELB) instance.
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
   * *   **wrr**: Backend servers with higher weights receive more requests than backend servers with lower weights. This is the default value.
   * *   **wlc**: Requests are distributed based on the weight and load of each backend server. The load refers to the number of connections on a backend server. If two backend servers have the same weight, the backend server that has fewer connections receives more requests.
   * *   **rr**: Requests are distributed to backend servers in sequence.
   * *   **sch**: Consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
   * *   **qch**: Consistent hashing based on Quick UDP Internet Connection (QUIC) IDs. Requests that contain the same QUIC ID are scheduled to the same backend server.
   * *   **iqch**: Consistent hashing based on three specific bytes of iQUIC CID. Requests with the same second, third, and forth bytes are scheduled to the same backend server.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The number of consecutive failed health checks that must occur before a healthy and accessible backend server is declared unhealthy and inaccessible. Valid values: **2** to **10**. Default value: **3**.
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

