// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRulesResponseBodyRulesRule extends $dara.Model {
  /**
   * @remarks
   * The cookie that is configured on the backend server.
   * 
   * The value must be 1 to 200 characters in length, and can contain only ASCII letters and digits. It cannot contain commas (,), semicolons (;), or spaces. It cannot start with a dollar sign ($).
   * 
   * >  If you set the **StickySession** parameter to **on** and the **StickySessionType** parameter to **server**, this parameter is required.
   * 
   * @example
   * 23
   */
  cookie?: string;
  /**
   * @remarks
   * The timeout period of a cookie. Valid values: **1 to 86400**. Unit: seconds.
   * 
   * >  If you set the **StickySession** parameter to **on** and the **StickySessionType** parameter to **insert**, this parameter is required.
   * 
   * @example
   * 56
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * The requested domain name specified in the forwarding rule.
   * 
   * @example
   * test.com
   */
  domain?: string;
  /**
   * @remarks
   * Indicates whether health checks are enabled.
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
   * Valid values: **1 to 65535**.
   * 
   * >  If you set the **HealthCheck** parameter to **on**, this parameter is required. If this parameter is empty but **HealthCheck** is set to **on**, the listener port is used for health checks.
   * 
   * @example
   * 45
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The domain name that is used for health checks. Valid values:
   * 
   * *   **$_ip**: The private IP address of the backend server.
   * 
   *     If you do not set this parameter or set the parameter to $_ip, the SLB instance uses the private IP address of each backend server as the domain name for health checks.
   * 
   * *   **domain**: The domain name must be 1 to 80 characters in length. The domain name can contain only letters, digits, periods (.),and hyphens (-).
   * 
   * >  If you set the **HealthCheck** parameter to **on**, this parameter is required.
   * 
   * @example
   * www.domain.com
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status code that indicates a successful health check. Multiple HTTP status codes are separated by commas (,). Default value: **http_2xx**.
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
   * Valid values: **1 to 50**. Unit: seconds.
   * 
   * >  If you set the **HealthCheck** parameter to **on**, this parameter is required.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The timeout period of a health check response. If a backend ECS instance does not respond within the specified timeout period, the ECS instance fails the health check. Unit: seconds
   * 
   * Valid values: **1 to 300**.
   * 
   * >  When you set the **HealthCheck** parameter to **on**, this parameter takes effect.
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
   * /example
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * Specifies the number of successful health checks that must be consecutively performed before a backend server can be declared healthy (from **fail** to **success**).
   * 
   * Valid values: **2 to 10**.
   * 
   * >  If you set the **HealthCheck** parameter to **on**, this parameter is required.
   * 
   * @example
   * 5
   */
  healthyThreshold?: number;
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
   * The ID of the forwarding rule.
   * 
   * @example
   * rule-tybqi6****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the forwarding rule. The name must be 1 to 80 characters in length, and can contain only letters, digits, hyphens (-), forward slashes (/), periods (.),and underscores (_).
   * 
   * >  The name of each forwarding rule must be unique within a listener.
   * 
   * @example
   * Rule2
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
   * Specifies whether to enable session persistence.
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
   * Specifies the number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy (from **success** to **fail**).
   * 
   * Valid values: **2 to 10**
   * 
   * >  If you set the **HealthCheck** parameter to **on**, this parameter is required.
   * 
   * @example
   * 2
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * The requested path specified in the forwarding rule.
   * 
   * @example
   * /cache
   */
  url?: string;
  /**
   * @remarks
   * The ID of the destination vServer group specified in the forwarding rule.
   * 
   * @example
   * rsp-6cejjzl****
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
      listenerSync: 'ListenerSync',
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
      listenerSync: 'string',
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

export class DescribeRulesResponseBodyRules extends $dara.Model {
  rule?: DescribeRulesResponseBodyRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeRulesResponseBodyRulesRule },
    };
  }

  validate() {
    if(Array.isArray(this.rule)) {
      $dara.Model.validateArray(this.rule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRulesResponseBody extends $dara.Model {
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
   * The forwarding rules.
   */
  rules?: DescribeRulesResponseBodyRules;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rules: DescribeRulesResponseBodyRules,
    };
  }

  validate() {
    if(this.rules && typeof (this.rules as any).validate === 'function') {
      (this.rules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

