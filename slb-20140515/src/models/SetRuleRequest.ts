// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The cookie that is configured on the server.
   * 
   * The cookie must be 1 to 200 characters in length and can contain only ASCII characters and digits. It cannot contain commas (,), semicolons (;), or space characters. It cannot start with a dollar sign ($).
   * 
   * >  This parameter is required and takes effect if **StickySession** is set to **on** and **StickySessionType** is set to **server**.
   * 
   * @example
   * 23ffsa
   */
  cookie?: string;
  /**
   * @remarks
   * The timeout period of a cookie. Unit: seconds. Valid values: **1** to **86400**.
   * 
   * >  This parameter is required and takes effect if **StickySession** is set to **on** and **StickySessionType** is set to **insert**.
   * 
   * @example
   * 123
   */
  cookieTimeout?: number;
  /**
   * @remarks
   * Specifies whether to enable the health check feature. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * >  This parameter is required and takes effect if the **ListenerSync** parameter is set to **off**.
   * 
   * @example
   * off
   */
  healthCheck?: string;
  /**
   * @remarks
   * The port that is used for health checks. Valid values: **1** to **65535**.
   * 
   * >  This parameter takes effect when the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 80
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The domain name that is used for health checks. Valid values:
   * 
   * *   **$_ip**: the private IP address of a backend server. If you do not set this parameter or set the parameter to $_ip, the SLB instance uses the private IP address of each backend server for health checks.
   * *   **domain**: The domain name must be 1 to 80 characters in length, and can contain letters, digits, periods (.), and hyphens (-).
   * 
   * >  This parameter takes effect if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * $_ip
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status code for a successful health check. Multiple HTTP status codes are separated by commas (,).
   * 
   * Valid values: **http_2xx**, **http_3xx**, **http_4xx**, and **http_5xx**.
   * 
   * >  This parameter is required and takes effect if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * http_2xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The interval between two consecutive health checks. Unit: seconds. Valid values: **1** to **50**.
   * 
   * >  This parameter is required and takes effect if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 20
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The timeout period of a health check response. If a backend server, such as an Elastic Compute Service (ECS) instance, does not return a health check response within the specified timeout period, the server fails the health check. Unit: seconds. Valid values: **1** to **300**.
   * 
   * >  This parameter is required and takes effect if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 20
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The URI that is used for health checks.
   * 
   * >  This parameter is required and takes effect if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * /example
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from **fail** to **success**.
   * 
   * Valid values: **2** to **10**.
   * 
   * >  This parameter is required and takes effect if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * Specifies whether to use the scheduling algorithm, session persistence, and health check configurations of the listener. Valid values:
   * 
   * *   **on**: uses the configurations of the listener.
   * *   **off**: does not use the configurations of the listener. You can customize the health check and session persistence configurations for the forwarding rule.
   * 
   * @example
   * off
   */
  listenerSync?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the Classic Load Balancer (CLB) instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * This parameter is required.
   * 
   * @example
   * rule-3ejhkt****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the forwarding rule. The name must be 1 to 40 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
   * 
   * > On the same listener, the forwarding rule names must be unique.
   * 
   * @example
   * doctest
   */
  ruleName?: string;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * *   **wrr**: Backend servers with higher weights receive more requests than those with lower weights.
   * *   **rr**: Requests are distributed to backend servers in sequence.
   * 
   * >  This parameter is required and takes effect if the **ListenerSync** parameter is set to **off**.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * Specifies whether to enable session persistence. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * This parameter is required and takes effect if the **ListenerSync** parameter is set to **off**.
   * 
   * @example
   * off
   */
  stickySession?: string;
  /**
   * @remarks
   * The method that is used to handle a cookie. Valid values:
   * 
   * *   **insert**: inserts a cookie.
   * 
   *     CLB inserts the backend server ID as a cookie into the first HTTP or HTTPS response that is sent to a client. The next request from the client will contain this cookie, and the listener will distribute this request to the recorded backend server.
   * 
   * *   **server**: rewrites a cookie.
   * 
   *     When CLB detects a user-defined cookie, it overwrites the original cookie with the user-defined cookie. The next request from the client will contain the user-defined cookie, and the listener will distribute this request to the recorded backend server.
   * 
   * >  This parameter is required and takes effect if the **StickySession** parameter is set to **on**.
   * 
   * @example
   * insert
   */
  stickySessionType?: string;
  /**
   * @remarks
   * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from **success** to **fail**.
   * 
   * Valid values: **2** to **10**.
   * 
   * >  This parameter is required and takes effect if the **HealthCheck** parameter is set to **on**.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * The ID of the vServer group that is associated with the forwarding rule.
   * 
   * @example
   * rsp-cige6****
   */
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      cookie: 'Cookie',
      cookieTimeout: 'CookieTimeout',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      listenerSync: 'ListenerSync',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      scheduler: 'Scheduler',
      stickySession: 'StickySession',
      stickySessionType: 'StickySessionType',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookie: 'string',
      cookieTimeout: 'number',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckTimeout: 'number',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      listenerSync: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ruleId: 'string',
      ruleName: 'string',
      scheduler: 'string',
      stickySession: 'string',
      stickySessionType: 'string',
      unhealthyThreshold: 'number',
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

