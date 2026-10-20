// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLoadBalancerTCPListenerAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the listener. The description must be **1** to **80** characters in length.
   * > The description cannot start with `http://` or `https://`.
   * 
   * @example
   * example
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable EIP pass-through. Valid values:
   * 
   * - **on**: Enabled.
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
   * The port used for health checks. Valid values: **1** to **65535**. If this parameter is not set, the backend service port (BackendServerPort) is used.
   * 
   * @example
   * 8000
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The maximum amount of time to wait for a response from a health check. If the backend ENS does not respond within the specified time, the health check fails.
   * - Default value: 5 seconds.
   * - Valid values: **1** to **300**.
   * - Unit: seconds.
   * 
   * > If the value of HealthCheckConnectTimeout is less than the value of HealthCheckInterval, HealthCheckConnectTimeout becomes invalid and the timeout period is set to the value of HealthCheckInterval.
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
   * The HTTP status code for a Normal health check. Valid values:
   * 
   * - **http_2xx** (default).
   * - **http_3xx**.
   * - **http_4xx**.
   * - **http_5xx**.
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
   * - **tcp** (default).
   * - **http**.
   * 
   * @example
   * tcp
   */
  healthCheckType?: string;
  /**
   * @remarks
   * The URI used for health checks. The URI must be **1** to **80** characters in length.
   * > The URI cannot be only `/` but must start with `/`.
   * 
   * @example
   * /aliyundoc/index.html
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The number of consecutive successful health checks required before the health check status of a backend server changes from fail (unreachable) to success (reachable). Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The listener port whose attributes you want to modify. Valid values: **1** to **65535**.
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
   * lb-5snthcyu1x10g7tywj7iu****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The timeout period of session persistence.
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
   * The scheduling algorithm. Valid values:
   * - **wrr**: Backend servers with higher weights receive more requests.
   * - **wlc**: Requests are distributed based on the weight and actual load (number of connections) of each backend server. When the weights are the same, backend servers with fewer connections receive more requests.
   * - **rr**: Requests are distributed to backend servers in sequence.
   * - **sch**: Consistent hashing based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
   * - **tch**: Consistent hashing based on four factors: source IP address, destination IP address, source port, and destination port. Requests from the same flow are distributed to the same backend server.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The number of consecutive failed health checks required before the health check status of a backend server changes from success (reachable) to fail (unreachable). Valid values: **2** to **10**.
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

