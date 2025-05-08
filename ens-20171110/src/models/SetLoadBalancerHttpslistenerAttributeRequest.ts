// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLoadBalancerHTTPSListenerAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the listener. The value must be **1** to **80** characters in length.
   * 
   * >  The value cannot start with `http://` or `https://`.
   * 
   * @example
   * Monitoring instructions
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the health check feature. Valid values:
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
   * The port that is used for health checks. Valid values: **1** to **65535**. If you leave this parameter empty, the port specified by BackendServerPort is used for health checks.
   * 
   * >  This parameter takes effect only if you set HealthCheck to on.
   * 
   * @example
   * 7001
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The domain name that you want to use for health checks.
   * 
   * >  This parameter takes effect only if you set HealthCheck to on.
   * 
   * @example
   * www.example.com
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
   * >  This parameter takes effect only if you set HealthCheck to on.
   * 
   * @example
   * http_2xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The interval at which health checks are performed. Valid values: **1** to **50**. Unit: seconds.
   * 
   * >  This parameter takes effect only if you set HealthCheck to on.
   * 
   * @example
   * 2
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The HTTP request method for health checks. Valid values:
   * 
   * *   **head** (default): requests the head of the page.
   * *   **get**: requests the specified part of the page and returns the entity body.
   * 
   * >  This parameter takes effect only if the HealthCheck parameter is set to on.
   * 
   * @example
   * get
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The timeout period of a health check response. If the backend ENS does not respond within the specified time, the health check fails.
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
   * 9
   */
  healthCheckTimeout?: number;
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
   * /checkpreload.htm
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The number of consecutive successful health checks that must occur before an unhealthy and inaccessible backend server is declared healthy and accessible. Valid values: **2** to **10**.
   * 
   * >  This parameter takes effect only if you set HealthCheck to on.
   * 
   * @example
   * 3
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The timeout period for idle connections. Default value: 15. Valid values: **1** to **60**. Unit: seconds.
   * 
   * >  If no request is received within the specified timeout period, ELB closes the connection. When another request is received, ELB establishes a new connection.
   * 
   * @example
   * 15
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The listener port whose attributes are to be modified. Valid values: **1** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 10002
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
   * The timeout period of requests. Default value: 60. Valid values: **1** to **180**. Unit: seconds.
   * 
   * >  If no response is received from the backend server within the specified timeout period, ELB returns an HTTP 504 error code to the client.
   * 
   * @example
   * 60
   */
  requestTimeout?: number;
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
   * The ID of the server certificate.
   * 
   * @example
   * 6027667
   */
  serverCertificateId?: string;
  /**
   * @remarks
   * The number of consecutive failed health checks that must occur before a healthy and accessible backend server is declared unhealthy and inaccessible. Valid values: **2** to **10**.
   * 
   * >  This parameter takes effect only if you set HealthCheck to on.
   * 
   * @example
   * 3
   */
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      idleTimeout: 'IdleTimeout',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      requestTimeout: 'RequestTimeout',
      scheduler: 'Scheduler',
      serverCertificateId: 'ServerCertificateId',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckTimeout: 'number',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      idleTimeout: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      requestTimeout: 'number',
      scheduler: 'string',
      serverCertificateId: 'string',
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

