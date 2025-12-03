// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRuleAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cookie to be configured on the backend server.
   * 
   * The cookie must be 1 to 200 characters in length and can contain ASCII letters and digits. It cannot contain commas (,), semicolons (;), or whitespace characters. It cannot start with a dollar sign ($).
   * 
   * If you set the **StickySession** parameter to **on** and the **StickySessionType** parameter to **server**, this parameter is required.
   * 
   * @example
   * wwe
   */
  cookie?: string;
  /**
   * @remarks
   * The timeout period of a cookie.
   * 
   * Valid values: **1 to 86400**. Unit: seconds.
   * 
   * >  If you set the **StickySession** parameter to **on** and the **StickySessionType** parameter to **insert**, this parameter is required.
   * 
   * @example
   * 12
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * The domain name that is configured in the forwarding rule.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * Specifies whether to enable health checks.
   * 
   * Valid values: **on** and **off**.
   * 
   * >  If you set the **ListenerSync** parameter to **off**, this parameter is required. If you set the parameter to **on**, the configuration of the listener is used.
   * 
   * @example
   * off
   */
  healthCheck?: string;
  /**
   * @remarks
   * The backend port that is used for health checks.
   * 
   * Valid values: **1** to **65535**.
   * 
   * >  If you set the **HealthCheck** parameter to **on**, this parameter is required. If this parameter is empty but **HealthCheck** is set to **on**, the listener port is used for health checks.
   * 
   * @example
   * 23
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The domain name that is used for health checks. Valid values:
   * 
   * *   **$_ip**: The private IP address of the backend server. If the $_ip parameter is set or the HealthCheckDomain parameter is not set, SLB uses the private IP addresses of backend servers as the domain names for health checks.
   * *   **domain**: The domain name must be 1 to 80 characters in length. It can contain only letters, digits, periods (.),and hyphens (-).
   * 
   * >  If you set the **HealthCheck** parameter to **on**, this parameter is required.
   * 
   * @example
   * www.example.com
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status code that indicates a successful health check. Separate multiple HTTP status codes with commas (,). Default value: **http_2xx**.
   * 
   * Valid values: **http_2xx**, **http_3xx**, **http_4xx**, and **http_5xx**.
   * 
   * >  If you set the **HealthCheck** parameter to **on**, this parameter is required.
   * 
   * @example
   * http_3xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The time interval between two consecutive health checks.
   * 
   * Valid values: **1** to **50**. Unit: seconds.
   * 
   * >  If you set the **HealthCheck** parameter to **on**, this parameter is required.
   * 
   * @example
   * 34
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The timeout period of a health check response. If a backend ECS instance does not respond within the specified timeout period, the ECS instance fails the health check.
   * 
   * Valid values: **1** to **300**. Unit: seconds.
   * 
   * >  If you set the **HealthCheck** parameter to **on**, this parameter is required.
   * 
   * @example
   * 34
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The URI that is used for health checks.
   * 
   * >  If you set the **HealthCheck** parameter to **on**, this parameter is required.
   * 
   * @example
   * /rest
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The number of consecutive successful health checks that must occur before an unhealthy backend server is declared healthy. In this case, the health check state is changed from **fail** to **success**.
   * 
   * Valid values: **2** to **10**.
   * 
   * >  If you set the **HealthCheck** parameter to **on**, this parameter is required.
   * 
   * @example
   * 2
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The listener port that is used by the SLB instance.
   * 
   * @example
   * 90
   */
  listenerPort?: string;
  /**
   * @remarks
   * Indicates whether the forwarding rule uses the scheduling algorithm, session persistence, and health check configurations of the listener.
   * 
   * Valid values: **on** and **off**.
   * 
   * *   **off**: does not use the configurations of the listener. You can customize health check and session persistence configurations for the forwarding rule.
   * *   **on**: uses the configurations of the listener.
   * 
   * @example
   * off
   */
  listenerSync?: string;
  /**
   * @remarks
   * The ID of the SLB instance.
   * 
   * @example
   * lb-bp1ca0zt07t934wxe****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9DEC9C28-AB05-4DDF-9A78-6B08EC9CE18C
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * @example
   * rule-hfgnd*****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the forwarding rule.
   * 
   * @example
   * Rule1
   */
  ruleName?: string;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * *   **wrr** (default): Backend servers that have higher weights receive more requests than backend servers that have lower weights.
   * *   **rr**: Requests are distributed to backend servers in sequence.
   * 
   * >  If you set the **ListenerSync** parameter to **off**, this parameter is required. If you set the parameter to **on**, the configuration of the listener is used.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * Indicates whether session persistence is enabled.
   * 
   * Valid values: **on** and **off**.
   * 
   * >  If you set the **ListenerSync** parameter to **off**, this parameter is required. If you set the parameter to **on**, the configuration of the listener is used.
   * 
   * @example
   * off
   */
  stickySession?: string;
  /**
   * @remarks
   * The method that is used to handle a cookie. Valid values:
   * 
   * *   **insert**: inserts a cookie into the response. SLB inserts a cookie (SERVERID) into the first HTTP or HTTPS response packet that is sent to a client. The next request from the client will contain this cookie, and the listener will distribute this request to the recorded backend server.
   * *   **server**: rewrites a cookie. When SLB detects a user-defined cookie, SLB overwrites the original cookie with the user-defined cookie. The next request from the client contains the user-defined cookie, and the listener distributes the request to the recorded backend server.
   * 
   * >  If you set the **StickySession** parameter to **on**, this parameter is required.
   * 
   * @example
   * insert
   */
  stickySessionType?: string;
  /**
   * @remarks
   * The number of consecutive failed health checks that must occur before a healthy backend server is declared unhealthy. In this case, the health check state is changed from **success** to **fail**.
   * 
   * Valid values: **2** to **10**.
   * 
   * >  If you set the **HealthCheck** parameter to **on**, this parameter is required.
   * 
   * @example
   * 3
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * The URL that is configured in the forwarding rule.
   * 
   * @example
   * /cache
   */
  url?: string;
  /**
   * @remarks
   * The ID of the vServer group that is associated with the forwarding rule.
   * 
   * @example
   * rsp-cige6j****
   */
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      domain: 'Domain',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      listenerPort: 'ListenerPort',
      listenerSync: 'ListenerSync',
      loadBalancerId: 'LoadBalancerId',
      requestId: 'RequestId',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      scheduler: 'Scheduler',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      unhealthyThreshold: 'UnhealthyThreshold',
      url: 'Url',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookie: 'string',
      cookieTimeout: 'number',
      domain: 'string',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckTimeout: 'number',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      listenerPort: 'string',
      listenerSync: 'string',
      loadBalancerId: 'string',
      requestId: 'string',
      ruleId: 'string',
      ruleName: 'string',
      scheduler: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      unhealthyThreshold: 'number',
      url: 'string',
      VServerGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

