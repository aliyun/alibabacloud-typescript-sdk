// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerHTTPListenerRequest extends $dara.Model {
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
   * The listener port that is used to redirect HTTP requests to HTTPS.
   * 
   * @example
   * 0
   */
  forwardPort?: number;
  /**
   * @remarks
   * Specifies whether to enable the health check feature. Valid values:
   * 
   * *   **on**
   * *   **off** (default)
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  healthCheck?: string;
  /**
   * @remarks
   * The backend port that is used for health checks. Valid values: **1** to **65535**.
   * 
   * >  This parameter takes effect only if you set HealthCheck to on.
   * 
   * @example
   * 30040
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The domain name that you want to use for health checks.
   * 
   * >  This parameter takes effect only if you set HealthCheck to on.
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
   * *   **http_3xx**
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
   * The interval at which health checks are performed. Valid values: **1** to **50**. Default value: **2**. Unit: seconds.
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
   * *   **head** (default)
   * *   **get**
   * 
   * >  This parameter takes effect only if the HealthCheck parameter is set to on.
   * 
   * @example
   * head
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The timeout period of a health check response. If a backend server does not respond within the specified timeout period, the server fails the health check.
   * 
   * *   Default value: 5.
   * *   Valid values: **1** to **300**.
   * *   Unit: seconds.
   * 
   * > 
   * 
   * *   This parameter takes effect only if the HealthCheck parameter is set to on.
   * 
   * *   If the value of HealthCheckTimeout is smaller than the value of HealthCheckInterval, the timeout period specified by HealthCheckTimeout becomes invalid, and the value of HealthCheckInterval is used as the timeout period.
   * 
   * @example
   * 5
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
   * The number of consecutive successful health checks that must occur before an unhealthy and inaccessible backend server is declared healthy and accessible. Valid values: **2** to **10**. Default value: **3**.
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
   * >  If no request is received within the specified timeout period, ELB closes the connection. When a request is received, ELB creates a new connection.
   * 
   * @example
   * 15
   */
  idleTimeout?: number;
  /**
   * @remarks
   * Specifies whether to enable redirection from HTTP to HTTPS. Valid values:
   * 
   * *   **on**
   * *   **off** (default)
   * 
   * @example
   * off
   */
  listenerForward?: string;
  /**
   * @remarks
   * The listener port that is used by Edge Load Balancer (ELB) to receive requests and forward the requests to backend servers. Valid values: **1** to **65535**.
   * 
   * >  We recommend that you use port 80 for HTTP.
   * 
   * This parameter is required.
   * 
   * @example
   * 8080
   */
  listenerPort?: number;
  /**
   * @remarks
   * The ID of the Edge Load Balancer (ELB) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-5s7crik3yo3bp03gqrbp5****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The timeout period of a request. Default value: 60. Valid values: **1** to **180**. Unit: seconds.
   * 
   * >  If no response is received from the backend server within the specified timeout period, ALB returns an HTTP 504 error code to the client.
   * 
   * @example
   * 60
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * *   **wrr** (default): Backend servers with higher weights receive more requests than backend servers with lower weights.
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
   * The number of consecutive failed health checks that must occur before a healthy and accessible backend server is declared unhealthy and inaccessible. Valid values: **2** to **10**. Default value: **3**.
   * 
   * >  This parameter takes effect only if you set HealthCheck to on.
   * 
   * @example
   * 3
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * Specifies whether to use the X-Forwarded-For header to obtain the real IP address of the client. Valid values:
   * 
   * *   **on**
   * *   **off** (default)
   * 
   * @example
   * off
   */
  XForwardedFor?: string;
  static names(): { [key: string]: string } {
    return {
      backendServerPort: 'BackendServerPort',
      description: 'Description',
      forwardPort: 'ForwardPort',
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
      listenerForward: 'ListenerForward',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      requestTimeout: 'RequestTimeout',
      scheduler: 'Scheduler',
      unhealthyThreshold: 'UnhealthyThreshold',
      XForwardedFor: 'XForwardedFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServerPort: 'number',
      description: 'string',
      forwardPort: 'number',
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
      listenerForward: 'string',
      listenerPort: 'number',
      loadBalancerId: 'string',
      requestTimeout: 'number',
      scheduler: 'string',
      unhealthyThreshold: 'number',
      XForwardedFor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

