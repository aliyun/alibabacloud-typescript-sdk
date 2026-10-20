// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerTCPListenerRequest extends $dara.Model {
  /**
   * @remarks
   * The port used by backend servers. Valid values: **1** to **65535**.
   * 
   * @example
   * 8080
   */
  backendServerPort?: number;
  /**
   * @remarks
   * The description of the listener. The description must be **1** to **80** characters in length.
   * 
   * > The description cannot start with `http://` or `https://`.
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
   * The timeout period for established connections, in seconds. Valid values: **10** to **900**. Default value: **900**.
   * 
   * @example
   * 500
   */
  establishedTimeout?: number;
  /**
   * @remarks
   * The port used for health checks. Valid values: **1** to **65535**. If you do not specify this parameter, the port specified by `BackendServerPort` is used by default.
   * 
   * @example
   * 8080
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The maximum time to wait for a health check response. If a backend ENS instance does not respond within this timeout period, the health check fails.
   * 
   * - Default value: 5.
   * 
   * - Valid values: **1** to **300**.
   * 
   * - Unit: seconds.
   * 
   * > If the value of this parameter is less than the value of `HealthCheckInterval`, this parameter is ignored and the value of `HealthCheckInterval` is used as the timeout period.
   * 
   * @example
   * 100
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * The domain name used for health checks.
   * 
   * @example
   * www.aliyundoc.com
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status codes that indicate a successful health check. Valid values:
   * 
   * - **http_2xx** (default)
   * 
   * - **http_3xx**
   * 
   * - **http_4xx**
   * 
   * - **http_5xx**
   * 
   * @example
   * http_2xx
   */
  healthCheckHttpCode?: string;
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
   * The health check type. Valid values:
   * 
   * - **tcp** (default)
   * 
   * - **http**
   * 
   * @example
   * tcp
   */
  healthCheckType?: string;
  /**
   * @remarks
   * The URI for health checks. The URI must be **1** to **80** characters in length.
   * 
   * > The URI must start with a forward slash (/) but cannot be only a forward slash (/).
   * 
   * @example
   * /checkpreload.htm
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The number of consecutive successful health checks required for a backend server to be considered healthy (from a `fail` to `success` state). Valid values: **2** to **10**. Default value: **3**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The listener port that receives and forwards requests to backend servers. Valid values: **1** to **65535**.
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
   * lb-5ovkn1piwqmoqrfjdyhq4****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The timeout period for session persistence.
   * 
   * - Default value: **0**, which indicates that session persistence is disabled.
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
   * The scheduling algorithm. Valid values:
   * 
   * - **wrr** (default): Weighted Round Robin. Requests are distributed to backend servers based on their weights. Backend servers with higher weights receive more requests.
   * 
   * - **wlc**: Weighted Least Connections. Requests are distributed to backend servers based on both their weights and the number of connections. If multiple backend servers have the same weight, the one with the fewest connections receives more requests.
   * 
   * - **rr**: Round Robin. Requests are distributed to backend servers in sequential order.
   * 
   * - **sch**: Source IP Hash. Requests are routed based on a consistent hash of the source IP address, ensuring that requests from the same source IP address are sent to the same backend server.
   * 
   * - **tch**: Four-tuple Hash. Requests are routed based on a consistent hash of a four-tuple (source IP address, destination IP address, source port, and destination port), ensuring that requests from the same flow are sent to the same backend server.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The number of consecutive failed health checks required for a backend server to be considered unhealthy (from a `success` to `fail` state). Valid values: **2** to **10**. Default value: **3**.
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
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckType: 'HealthCheckType',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      persistenceTimeout: 'PersistenceTimeout',
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
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckType: 'string',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      persistenceTimeout: 'number',
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

