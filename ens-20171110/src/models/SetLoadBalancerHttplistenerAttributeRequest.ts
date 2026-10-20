// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLoadBalancerHTTPListenerAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The listener name. The name must be **1** to **80** characters in length.
   * 
   * > The name cannot start with `http://` or `https://`.
   * 
   * @example
   * Listener description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable health checks. Valid values:
   * - **on**: enabled.
   * - **off**: disabled.
   * 
   * @example
   * on
   */
  healthCheck?: string;
  /**
   * @remarks
   * The port used for health checks. Valid values: **1** to **65535**. If this parameter is not configured in Settings, the backend service port (BackendServerPort) is used.
   * 
   * > This parameter takes effect only when HealthCheck is set to on.
   * 
   * @example
   * 65500
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The domain name used for health checks.
   * 
   * > This parameter takes effect only when HealthCheck is set to on.
   * 
   * @example
   * www.aliyundoc.com
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status code that indicates a successful health check. Valid values:
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
   * The health check method for the HTTP listener. Valid values:
   * 
   * - **head**.
   * - **get**.
   * 
   * > This parameter takes effect only when HealthCheck is set to on.
   * 
   * @example
   * head
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The amount of time to wait for a response from a health check. If the backend ECS instance does not respond within the specified time, the health check fails.
   * - Default value: 5 seconds.
   * - Valid values: **1** to **300**.
   * - Unit: seconds.
   * > - This parameter takes effect only when HealthCheck is set to on.
   * >- If the value of HealthCheckTimeout is less than the value of HealthCheckInterval, HealthCheckTimeout becomes ineffective and the timeout period equals the value of HealthCheckInterval.
   * 
   * @example
   * 5
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The URI used for health checks. The URI must be **1** to **80** characters in length.
   * 
   * > - The URI cannot be only `/` but must start with `/`.
   * >- This parameter takes effect only when HealthCheck is set to on.
   * 
   * @example
   * /checkpreload.htm
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The number of consecutive successful health checks required before a backend server is declared healthy (changing the status from fail to success). Valid values: **2** to **10**.
   * > This parameter takes effect only when HealthCheck is set to on.
   * 
   * @example
   * 3
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The idle connection timeout period. Default value: 15 seconds. Valid values: **1** to **60**. Unit: seconds.
   * 
   * > If no access request is received within the timeout period, the load balancing instance temporarily breaks the current connection and re-establishes a new connection when the next request arrives.
   * 
   * @example
   * 15
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The listener port whose attributes you want to modify. Valid values: **1** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 8080
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
   * The request timeout period. Default value: 60 seconds. Valid values: **1** to **180**. Unit: seconds.
   * 
   * > If no response is received from the backend server within the timeout period, the load balancing instance stops waiting and returns an HTTP 504 error code to the client.
   * 
   * @example
   * 60
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * - **wrr**: Backend servers with higher weights are polled more frequently.
   * - **wlc**: Requests are distributed based on the weight and actual load (number of connections) of each backend server. When the weights are the same, backend servers with fewer connections are polled more frequently.
   * - **rr**: Requests are distributed to backend servers in sequence.
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
   * The number of consecutive failed health checks required before a backend server is declared unhealthy (changing the status from success to fail). Valid values: **2** to **10**.
   * > This parameter takes effect only when HealthCheck is set to on.
   * 
   * @example
   * 3
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * Specifies whether to use the X-Forwarded-For header to retrieve the originating IP address of the client. Valid values:
   * - **on** (default): enabled.
   * - **off**: disabled.
   * 
   * @example
   * on
   */
  XForwardedFor?: string;
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
      unhealthyThreshold: 'UnhealthyThreshold',
      XForwardedFor: 'XForwardedFor',
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

