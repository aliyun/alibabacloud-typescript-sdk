// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancerHTTPSListenerAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The port used by the backend server of the load balancer instance. Valid values: **1** to **65535**.
   * 
   * @example
   * 8080
   */
  backendServerPort?: number;
  /**
   * @remarks
   * The peak bandwidth of the load balancer. Default value: -1, which indicates that bandwidth is not limited.
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
   * The HTTP-to-HTTPS forwarding port for the listener.
   * 
   * @example
   * 0
   */
  forwardPort?: number;
  /**
   * @remarks
   * Specifies whether to enable the health check. Valid values:
   * - **on**: Enables the health check.
   * - **off**: Disables the health check.
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
   * 9902
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The domain name used for health checks.
   * 
   * > This parameter takes effect only when HealthCheck is set to on.
   * 
   * @example
   * www.test.com
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status codes that indicate a successful health check. Valid values:
   * 
   * - **http_2xx** (default)
   * - **http_3xx**
   * - **http_4xx**
   * - **http_5xx**
   * 
   * > This parameter takes effect only when HealthCheck is set to on.
   * 
   * @example
   * http_2xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The interval between two consecutive health checks. Valid values: **1** to **50**. Unit: seconds.
   * 
   * > This parameter takes effect only when HealthCheck is set to on.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The HTTP method used for health checks. Valid values:
   * 
   * - **head**: Requests only the header of the page.
   * - **get**: Requests the specified page information and returns the entity body.
   * 
   * > This parameter takes effect only when HealthCheck is set to on.
   * 
   * @example
   * head
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The timeout period for receiving a response from a health check. If the backend ENS instance does not respond within the specified timeout period, the health check fails.
   * - Default value: 5.
   * - Valid values: **1** to **300**.
   * - Unit: seconds.
   * > - This parameter takes effect only when HealthCheck is set to on.
   * > - If the value of HealthCheckTimeout is less than the value of HealthCheckInterval, HealthCheckTimeout is invalid and the timeout period is the value of HealthCheckInterval.
   * 
   * @example
   * 5
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The URI used for health checks. The URI must be **1** to **80** characters in length.
   * - The URI cannot be only a forward slash (`/`), but must start with a forward slash.
   * - This parameter takes effect only when HealthCheck is set to on.
   * 
   * @example
   * /checkpreload.htm
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The number of consecutive successful health checks required to change the health check status of a backend server from fail (unreachable) to success (reachable). Valid values: **2** to **10**.
   * > This parameter takes effect only when HealthCheck is set to on.
   * 
   * @example
   * 3
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The idle connection timeout period. Default value: 15. Valid values: **1** to **60**. Unit: seconds.
   * > If no access request is received within the timeout period, the load balancer temporarily interrupts the current connection and establishes a new connection when the next request arrives.
   * 
   * @example
   * 15
   */
  idleTimeout?: number;
  /**
   * @remarks
   * Specifies whether to enable HTTP-to-HTTPS forwarding. Valid values:
   * 
   * - **on**: Enables HTTP-to-HTTPS forwarding.
   * - **off**: Disables HTTP-to-HTTPS forwarding.
   * 
   * @example
   * off
   */
  listenerForward?: string;
  /**
   * @remarks
   * The frontend port used by the load balancer instance. Valid values: **1** to **65535**.
   * 
   * @example
   * 8080
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
   * > If no response is received from the backend server within the timeout period, the load balancer stops waiting and returns an HTTP 504 error code to the client.
   * 
   * @example
   * 60
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * - **wrr**: Backend servers with higher weights are polled more frequently.
   * - **wlc**: In addition to the weight of each backend server, the actual load (number of connections) of the backend server is also considered. If the weights are the same, backend servers with fewer current connections are polled more frequently.
   * - **rr**: External requests are distributed to backend servers in sequence.
   * - **sch**: Consistent hashing based on source IP addresses. Requests from the same source IP address are scheduled to the same backend server.
   * - **qch**: Consistent hashing based on QUIC Connection IDs. Requests with the same QUIC Connection ID are scheduled to the same backend server.
   * - **iqch**: Consistent hashing based on three specific bytes of the iQUIC CID. Requests with the same 2nd to 4th bytes are scheduled to the same backend server.
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
   * The current status of the listener. Valid values:
   * 
   * - **Running**: The listener is running normally.
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
   * The number of consecutive failed health checks required to change the health check status of a backend server from success (reachable) to fail (unreachable). Valid values: **2** to **10**.
   * > This parameter takes effect only when HealthCheck is set to on.
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

