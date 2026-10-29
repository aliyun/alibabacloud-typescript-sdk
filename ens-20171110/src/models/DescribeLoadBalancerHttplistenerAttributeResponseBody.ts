// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancerHTTPListenerAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The port used by the backend server of the load balancing instance. Valid values: **1** to **65535**.
   * 
   * @example
   * 8080
   */
  backendServerPort?: number;
  /**
   * @remarks
   * The peak bandwidth of load balancing. Default value: -1, which indicates that bandwidth is not limited.
   * 
   * @example
   * -1
   */
  bandwidth?: number;
  /**
   * @remarks
   * The description of the listener. The description must be **1** to **80** characters in length.
   * > It cannot start with `http://` or `https://`.
   * 
   * @example
   * abc
   */
  description?: string;
  /**
   * @remarks
   * The forwarding port for HTTP-to-HTTPS listeners.
   * 
   * @example
   * 10002
   */
  forwardPort?: number;
  /**
   * @remarks
   * Indicates whether health checks are enabled. Valid values:
   * - **on**: enabled.
   * - **off**: disabled.
   * 
   * @example
   * on
   */
  healthCheck?: string;
  /**
   * @remarks
   * The port used for health checks. Valid values: **1** to **65535**. If this parameter is not specified, the backend server port (BackendServerPort) is used.
   * > This parameter takes effect only when HealthCheck is set to on.
   * 
   * @example
   * 5000
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The domain name used for health checks.
   * > This parameter takes effect only when HealthCheck is set to on.
   * 
   * @example
   * www.example.com
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status code that indicates a successful health check. Valid values:
   * - **http_2xx** (default)
   * - **http_3xx**
   * - **http_4xx**
   * - **http_5xx**
   * > This parameter takes effect only when HealthCheck is set to on.
   * 
   * @example
   * http_2xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The interval between two consecutive health checks. Valid values: **1** to **50**. Unit: seconds.
   * > This parameter takes effect only when HealthCheck is set to on.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The HTTP method used for health checks. Valid values:
   * - **head**: Requests only the header of the page.
   * - **get**: Requests the specified page information and returns the entity body.
   * > This parameter takes effect only when HealthCheck is set to on.
   * 
   * @example
   * head
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The timeout period for a health check response. If a backend ENS instance does not respond within the specified timeout period, the health check fails.
   * - Default value: 5.
   * - Valid values: **1** to **300**.
   * - Unit: seconds.
   * > - This parameter takes effect only when HealthCheck is set to on.
   * > - If the value of HealthCheckTimeout is less than the value of HealthCheckInterval, HealthCheckTimeout becomes invalid and the timeout period equals the value of HealthCheckInterval.
   * 
   * @example
   * 10
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The URI used for health checks. The URI must be **1** to **80** characters in length.
   * > - The URI cannot be only a forward slash (`/`), but it must start with a forward slash (`/`).
   * > - This parameter takes effect only when HealthCheck is set to on.
   * 
   * @example
   * /checkpreload.htm
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The number of consecutive successful health checks that must occur before the health check status of a backend server is changed from fail (unreachable) to success (reachable). Valid values: **2** to **10**.
   * > This parameter takes effect only when HealthCheck is set to on.
   * 
   * @example
   * 3
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The idle connection timeout period. Default value: 15. Valid values: **1** to **60**. Unit: seconds.
   * > If no request is received within the specified timeout period, load balancing temporarily interrupts the current connection and establishes a new connection when the next request arrives.
   * 
   * @example
   * 15
   */
  idleTimeout?: number;
  /**
   * @remarks
   * Indicates whether HTTP-to-HTTPS forwarding is enabled. Valid values:
   * - **on**: enabled.
   * - **off** (default): disabled.
   * 
   * @example
   * off
   */
  listenerForward?: string;
  /**
   * @remarks
   * The listener port.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The request timeout period. Default value: 60. Valid values: **1** to **180**. Unit: seconds.
   * > If a backend server does not return a response within the specified timeout period, load balancing stops waiting and returns an HTTP 504 error code to the client.
   * 
   * @example
   * 60
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * - **wrr**: Backend servers with higher weights receive more requests.
   * - **wlc**: Requests are distributed based on the weights and actual loads (connections) of backend servers. If two backend servers have the same weight, the backend server with fewer connections receives more requests.
   * - **rr**: Requests are evenly and sequentially distributed to backend servers.
   * - **sch**: Consistent hashing based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
   * - **qch**: Consistent hashing based on QUIC Connection IDs. Requests with the same QUIC Connection ID are distributed to the same backend server.
   * - **iqch**: Consistent hashing based on specific three bytes of the iQUIC CID. Requests with the same second to fourth bytes are distributed to the same backend server.
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
   * The status of the listener. Valid values:
   * - **Running**: The listener is running.
   * - **Stopped**: The listener is stopped.
   * - **Starting**: The listener is starting.
   * - **Configuring**: The listener is being configured.
   * - **Stopping**: The listener is being stopped.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The number of consecutive failed health checks that must occur before the health check status of a backend server is changed from success (reachable) to fail (unreachable). Valid values: **2** to **10**.
   * > This parameter takes effect only when HealthCheck is set to on.
   * 
   * @example
   * 3
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * Indicates whether the X-Forwarded-For header is used to retrieve the originating IP addresses of clients. Valid values:
   * - **on** (default): enabled.
   * - **off**: disabled.
   * 
   * @example
   * on
   */
  XForwardedFor?: string;
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
      XForwardedFor: 'XForwardedFor',
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

