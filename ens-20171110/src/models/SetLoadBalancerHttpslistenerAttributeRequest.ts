// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLoadBalancerHTTPSListenerAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the listener. The name must be **1** to **80** characters in length.
   * 
   * > It cannot start with `http://` or `https://`.
   * 
   * @example
   * Listener description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the health check. Valid values:
   * - **on**: enables the health check.
   * - **off**: disables the health check.
   * 
   * @example
   * on
   */
  healthCheck?: string;
  /**
   * @remarks
   * The port used for health checks. Valid values: **1** to **65535**. If the Settings for this parameter are not specified, the backend service port (BackendServerPort) is used.
   * > This parameter takes effect only when HealthCheck is set to on.
   * 
   * @example
   * 7001
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The domain name used for health checks.
   * 
   * > This parameter takes effect only when HealthCheck is set to on.
   * 
   * @example
   * www.example.com
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status codes that indicate a successful health check. Valid values:
   * 
   * - **http_2xx** (default).
   * - **http_3xx**.
   * - **http_4xx**.
   * - **http_5xx**.
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
   * 2
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The HTTP method used for health checks. Valid values:
   * 
   * - **head** (default): requests only the header of the page.
   * - **get**: requests the specified page information and returns the entity body.
   * 
   * > This parameter takes effect only when HealthCheck is set to on.
   * 
   * @example
   * get
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The timeout period for a health check response. If a backend server does not respond within the specified timeout period, the health check fails.
   * - Default value: 5.
   * - Valid values: **1** to **300**.
   * - Unit: seconds.
   * > - This parameter takes effect only when HealthCheck is set to on.
   * > - If the value of HealthCheckTimeout is less than the value of HealthCheckInterval, HealthCheckTimeout is invalid and the timeout period is the value of HealthCheckInterval.
   * 
   * @example
   * 9
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The URI used for health checks. The URI must be **1** to **80** characters in length.
   * > - The URI cannot be only `/`, but must start with `/`.
   * > - This parameter takes effect only when HealthCheck is set to on.
   * 
   * @example
   * /checkpreload.htm
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The number of consecutive successful health checks that must occur before the health check status of a backend server changes from fail (unreachable) to success (reachable). Valid values: **2** to **10**.
   * > This parameter takes effect only when HealthCheck is set to on.
   * 
   * @example
   * 3
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The idle connection timeout period. Default value: 15. Valid values: **1** to **60**. Unit: seconds.
   * > If there is no access request within the timeout period, load balancing temporarily breaks the current connection until a new connection is established when the next request arrives.
   * 
   * @example
   * 15
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The frontend port of the listener whose attributes you want to modify. Valid values: **1** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 10002
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
   * The request timeout period. Default value: 60. Valid values: **1** to **180**. Unit: seconds.
   * > If a backend server does not send a response within the timeout period, load balancing stops waiting and returns an HTTP 504 error code to the client.
   * 
   * @example
   * 60
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * - **wrr**: Backend servers with higher weights receive more requests.
   * - **wlc**: Requests are distributed based on the weights and actual loads (connections) of backend servers. If the weights are the same, backend servers with fewer connections receive more requests.
   * - **rr**: Requests are evenly distributed to backend servers in sequence.
   * - **sch**: Consistent hashing based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
   * - **qch**: Consistent hashing based on QUIC Connection IDs. Requests with the same QUIC Connection ID are distributed to the same backend server.
   * - **iqch**: Consistent hashing based on specific three bytes of the iQUIC CID. Requests with the same 2nd to 4th bytes are distributed to the same backend server.
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
   * The number of consecutive failed health checks that must occur before the health check status of a backend server changes from success (reachable) to fail (unreachable). Valid values: **2** to **10**.
   * > This parameter takes effect only when HealthCheck is set to on.
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

