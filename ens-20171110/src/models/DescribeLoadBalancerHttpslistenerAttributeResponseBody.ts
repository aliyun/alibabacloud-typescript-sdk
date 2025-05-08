// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancerHTTPSListenerAttributeResponseBody extends $dara.Model {
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
   * The peak bandwidth of the Edge Load Balancer (ELB). The default value is -1, which indicates that the bandwidth is not limited.
   * 
   * @example
   * 50
   */
  bandwidth?: number;
  /**
   * @remarks
   * The description of the listener. The description must be **1** to **80** characters in length.
   * 
   * @example
   * abc
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
   * >  This parameter is returned only if the HealthCheck parameter is set to on.
   * 
   * @example
   * 9902
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The domain name that is used for health checks.
   * 
   * >  This parameter is returned only if the HealthCheck parameter is set to on.
   * 
   * @example
   * www.test.com
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
   * >  This parameter is returned only if the HealthCheck parameter is set to on.
   * 
   * @example
   * http_2xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The interval at which health checks are performed. Valid values: **1** to **50**. Unit: seconds.
   * 
   * >  This parameter is returned only if the HealthCheck parameter is set to on.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The health check method used in HTTP health checks. Valid values:
   * 
   * *   **head**: requests the head of the page.
   * *   **get**: requests the specified part of the page and returns the entity body.
   * 
   * >  This parameter is returned only if the HealthCheck parameter is set to on.
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
   * The URI that is used for health checks. The URI must be **1** to **80** characters in length.
   * 
   * *   The URL must start with `/` and contain characters other than `/`.
   * *   This parameter is returned only if the HealthCheck parameter is set to on.
   * 
   * @example
   * /checkpreload.htm
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The number of consecutive successful health checks that must occur before an unhealthy and inaccessible backend server is declared healthy and accessible. Valid values: **2** to **10**.
   * 
   * >  This parameter is returned only if the HealthCheck parameter is set to on.
   * 
   * @example
   * 3
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The timeout period for idle connections. Default value: 15. Valid values: **1** to **60**. Unit: seconds.
   * 
   * >  If no request is received within the specified timeout period, ELB closes the connection. When another request is received, CLB establishes a new connection.
   * 
   * @example
   * 15
   */
  idleTimeout?: number;
  /**
   * @remarks
   * Indicates whether HTTP-to-HTTPS redirection is enabled. Valid values:
   * 
   * *   on
   * *   off
   * 
   * @example
   * off
   */
  listenerForward?: string;
  /**
   * @remarks
   * The frontend port that is used by the ELB instance. Valid values: **1** to **65535**.
   * 
   * @example
   * 8080
   */
  listenerPort?: number;
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
   * The ID of the server certificate.
   * 
   * @example
   * 60276**
   */
  serverCertificateId?: string;
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
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The number of consecutive failed health checks that must occur before a healthy and accessible backend server is declared unhealthy and inaccessible. Valid values: **2** to **10**.
   * 
   * >  This parameter is returned only if the HealthCheck parameter is set to on.
   * 
   * @example
   * 3
   */
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
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
      requestId: 'RequestId',
      requestTimeout: 'RequestTimeout',
      scheduler: 'Scheduler',
      serverCertificateId: 'ServerCertificateId',
      status: 'Status',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServerPort: 'number',
      bandwidth: 'number',
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
      requestId: 'string',
      requestTimeout: 'number',
      scheduler: 'string',
      serverCertificateId: 'string',
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

