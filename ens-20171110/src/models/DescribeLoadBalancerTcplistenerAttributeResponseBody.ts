// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancerTCPListenerAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The port used by the backend server of the ELB instance. Valid values: **1** to **65535**.
   * 
   * @example
   * 8080
   */
  backendServerPort?: number;
  /**
   * @remarks
   * The peak bandwidth of the Edge Load Balancer (ELB) instance. The default value is -1, which indicates that the bandwidth is not limited.
   * 
   * @example
   * 5
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
   * Indicates whether EIP pass-through is enabled. Valid values:
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
   * Indicates whether the health check feature is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  healthCheck?: string;
  /**
   * @remarks
   * The port that is used for health checks. Valid values: **1** to **65535**. If an empty string is returned for this parameter, the port specified by BackendServerPort is used for health checks.
   * 
   * >  This parameter is returned only if you set HealthCheck to on.
   * 
   * @example
   * 8000
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
   * > 
   * 
   * *   This parameter takes effect only if the HealthCheck parameter is set to on.
   * 
   * *   If the value of the HealthCheckTimeout property is smaller than the value of the HealthCheckInterval property, the timeout period specified by the HealthCheckTimeout property becomes invalid and the value of the HealthCheckInterval property is used as the timeout period.
   * 
   * @example
   * 100
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * The domain name that is used for health checks.
   * 
   * >  This parameter is returned only if you set HealthCheck to on.
   * 
   * @example
   * example.com
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status codes for a successful health check. Valid values:
   * 
   * *   **http_2xx** (default)
   * *   **http_3xx**
   * *   **http_4xx**
   * *   **http_5xx**
   * 
   * >  This parameter is returned only if you set HealthCheck to on.
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
   * The URI used for health checks. The URI must be **1** to **80** characters in length.
   * 
   * > 
   * 
   * *   A URL must start with a forward slash (`/`) but cannot contain only forward slashes (`/`).
   * 
   * *   This parameter takes effect only if the HealthCheck parameter is set to on.
   * 
   * @example
   * /example/index.html
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The number of consecutive successful health checks that must occur before an unhealthy and inaccessible backend server is declared healthy and accessible. Valid values: **2** to **10**.
   * 
   * >  This parameter is returned only if you set HealthCheck to on.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The frontend port that is used by the ELB instance.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
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
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The routing algorithm. Valid values:
   * 
   * *   **wrr**: Backend servers with higher weights receive more requests than those with lower weights.
   * *   **wlc**: Requests are distributed based on the weight and load of each backend server. The load refers to the number of connections to a backend server. If two backend servers have the same weight, the backend server that has fewer connections receives more requests.
   * *   **rr**: Requests are distributed to backend servers in sequence.
   * *   **sch**: consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
   * *   **qch**: consistent hashing that is based on QUIC connection IDs. Requests that contain the same QUIC connection ID are distributed to the same backend server.
   * *   **iqch**: consistent hashing that is based on specific three bytes of the iQUIC CIDs. Requests whose second to fourth bytes are the same are distributed to the same backend server.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The status of the listener. Valid values:
   * 
   * *   **Running**
   * *   **Stopped**
   * *   **Starting**
   * *   **Configuring**
   * *   **Stopping**
   * 
   * @example
   * Stopped
   */
  status?: string;
  /**
   * @remarks
   * The number of consecutive failed health checks that must occur before a healthy and accessible backend server is declared unhealthy and inaccessible. Valid values: **2** to **10**.
   * 
   * >  This parameter is returned only if you set HealthCheck to on.
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

