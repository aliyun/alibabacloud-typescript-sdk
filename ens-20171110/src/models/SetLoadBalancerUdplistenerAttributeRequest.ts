// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLoadBalancerUDPListenerAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the listener. The valuemust be **1** to **80** characters in length.
   * 
   * >  The value cannot start with `http://` or `https://`.
   * 
   * @example
   * example
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable elastic IP address (EIP) pass-through. Valid values:
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
   * The port that is used for health checks. Valid values: **1** to **65535**. If you leave this parameter empty, the port specified for BackendServerPort is used for health checks.
   * 
   * @example
   * 8080
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The timeout period of a health check response. If the backend ENS does not respond within the specified time, the health check fails.
   * 
   * *   Default value: 5.
   * *   Valid values: **1** to **300**.
   * *   Unit: seconds.
   * 
   * >  If the value of the HealthCheckTimeout property is smaller than the value of the HealthCheckInterval property, the timeout period specified by the HealthCheckTimeout property becomes invalid and the value of the HealthCheckInterval property is used as the timeout period.
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
   * The interval at which health checks are performed. Valid values: **1** to **50**. Unit: seconds.
   * 
   * @example
   * 5
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
   * The number of consecutive successful health checks that must occur before an unhealthy and inaccessible backend server is declared healthy and accessible. Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The listener port whose attributes are to be modified. Valid values: **1** to **65535**.
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
   * lb-5pzipr2fszqtl2xf64uy5****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * *   **wrr**: Backend servers with higher weights receive more requests than those with lower weights.
   * *   **wlc**: Requests are distributed based on the weights and number of connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections receives more requests.
   * *   **rr**: Requests are distributed to backend servers in sequence.
   * *   **sch**: consistent hashing based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
   * *   **qch**: consistent hashing based on QUIC connection IDs (CIDs). Requests that contain the same QUIC CID are distributed to the same backend server.
   * *   **iqch**: consistent hashing based on three specific bytes of iQUIC CIDs. Requests with the same second, third, and fourth bytes are distributed to the same backend server.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The number of consecutive failed health checks that must occur before a healthy and accessible backend server is declared unhealthy and inaccessible. Valid values: **2** to **10**.
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

