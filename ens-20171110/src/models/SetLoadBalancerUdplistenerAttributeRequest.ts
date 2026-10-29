// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLoadBalancerUDPListenerAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the listener. The name must be **1** to **80** characters in length.
   * > The name cannot start with `http://` or `https://`.
   * 
   * @example
   * example
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable EIP pass-through. Valid values:
   * 
   * - **on**: Enables EIP pass-through.
   * - **off**: Disables EIP pass-through. This is the default value.
   * 
   * @example
   * on
   */
  eipTransmit?: string;
  /**
   * @remarks
   * The connection timeout period. Valid values: **10** to **900**. Default value: **900**. Unit: seconds.
   * 
   * @example
   * 500
   */
  establishedTimeout?: number;
  /**
   * @remarks
   * The port used for health checks. Valid values: **1** to **65535**. If no Settings are specified for this parameter, the backend service port (BackendServerPort) is used.
   * 
   * @example
   * 8080
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The timeout period for a health check response. If a backend ENS instance does not respond within the specified timeout period, the health check fails.
   * - Default value: 5.
   * - Valid values: **1** to **300**.
   * - Unit: seconds.
   * 
   * > If the value of HealthCheckConnectTimeout is less than the value of HealthCheckInterval, HealthCheckConnectTimeout is invalid and the timeout period is the value of HealthCheckInterval.
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
   * The interval between two consecutive health checks. Valid values: **1** to **50**. Unit: seconds.
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
   * The number of consecutive successful health checks that must occur before a backend server is declared healthy (from fail to success). Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The frontend port of the listener whose attributes you want to modify. Valid values: **1** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The ID of the load balancing instance.
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
   * - **wrr**: Backend servers with higher weights receive more requests.
   * - **wlc**: Requests are distributed based on the weights and actual loads (connections) of backend servers. If two backend servers have the same weight, the backend server with fewer connections receives more requests.
   * - **rr**: Requests are evenly and sequentially distributed to backend servers.
   * - **sch**: Consistent hashing based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
   * - **tch**: Consistent hashing based on quadruples (source IP address, destination IP address, source port, and destination port). Requests from the same stream are distributed to the same backend server.
   * - **qch**: Consistent hashing based on QUIC connection IDs. Requests with the same QUIC connection ID are distributed to the same backend server.
   * - **iqch**: Consistent hashing based on specific three bytes of the iQUIC CID. Requests with the same second to fourth bytes are distributed to the same backend server.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The number of consecutive failed health checks that must occur before a backend server is declared unhealthy (from success to fail). Valid values: **2** to **10**.
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

