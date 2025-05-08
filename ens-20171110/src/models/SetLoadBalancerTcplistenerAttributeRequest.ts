// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLoadBalancerTCPListenerAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the listener. The description must be **1** to **80** characters in length.
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
   * The timeout period of a connection. Valid values: **10** to **900**. Unit: seconds.
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
   * 8000
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The timeout period for a health check response. If the value of HealthCheckTimeout is smaller than the value of HealthCheckInterval, the timeout period specified by HealthCheckTimeout becomes invalid, and the value of HealthCheckInterval is used as the timeout period.
   * 
   * *   Default value: 5.
   * *   Valid values: **1** to **300**.
   * *   Unit: seconds.
   * 
   * >  If the value of the HealthCheckConnectTimeout parameter is smaller than that of the HealthCheckInterval parameter, the timeout period specified by the HealthCheckConnectTimeout parameter is ignored and the period of time specified by the HealthCheckInterval parameter is used as the timeout period.
   * 
   * @example
   * 100
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * The domain name that you want to use for health checks.
   * 
   * @example
   * www.aliyundoc.com
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status code for a successful health check. Valid values:
   * 
   * *   **http_2xx** (default)
   * *   **http_3xx**.
   * *   **http_4xx**
   * *   **http_5xx**
   * 
   * @example
   * http_2xx
   */
  healthCheckHttpCode?: string;
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
   * The type of health checks. Valid values:
   * 
   * *   **tcp** (default)
   * *   **http**
   * 
   * @example
   * tcp
   */
  healthCheckType?: string;
  /**
   * @remarks
   * The Uniform Resource Identifier (URI) that you want to use for health checks. The URI must be **1** to **80** characters in length.
   * 
   * >  The URL must start with `/` and contain characters other than `/`.
   * 
   * @example
   * /aliyundoc/index.html
   */
  healthCheckURI?: string;
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
   * lb-5snthcyu1x10g7tywj7iu****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The timeout period of session persistence.
   * 
   * *   Default value: 0. If the default value is used, the system disables session persistence.
   * *   Valid values: **0** to **3600**.
   * *   Unit: seconds.
   * 
   * @example
   * 0
   */
  persistenceTimeout?: number;
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

