// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLoadBalancerResponseBodyAdaptiveRouting extends $dara.Model {
  /**
   * @remarks
   * Indicates whether failover across origin pools is enabled.
   * 
   * - true: Enabled.
   * - false: Not enabled.
   * 
   * @example
   * true
   */
  failoverAcrossPools?: boolean;
  /**
   * @remarks
   * Specifies whether to retry the next IP address when back-to-origin fails and the origin server is a domain name that resolves to multiple IP addresses.
   * 
   * @example
   * false
   */
  originLevelRetry?: boolean;
  static names(): { [key: string]: string } {
    return {
      failoverAcrossPools: 'FailoverAcrossPools',
      originLevelRetry: 'OriginLevelRetry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failoverAcrossPools: 'boolean',
      originLevelRetry: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerResponseBodyMonitor extends $dara.Model {
  /**
   * @remarks
   * The number of consecutive failed probes required to consider the check failed, such as `5`.
   * 
   * @example
   * 5
   */
  consecutiveDown?: number;
  /**
   * @remarks
   * The number of consecutive successful probes required to consider the check successful, such as `3`.
   * 
   * @example
   * 3
   */
  consecutiveUp?: number;
  /**
   * @remarks
   * The expected status codes for a successful HTTP response, such as 200,202.
   * 
   * @example
   * 200,202
   */
  expectedCodes?: string;
  /**
   * @remarks
   * Indicates whether to follow redirects.
   * 
   * - true: Yes.
   * - false: No.
   * 
   * @example
   * true
   */
  followRedirects?: boolean;
  /**
   * @remarks
   * The HTTP header information included in the probe request.
   * 
   * @example
   * {
   *         "host": [
   *             "example1.com",
   *             "example2.com"
   *         ]
   *     }
   */
  header?: any;
  /**
   * @remarks
   * The health check interval. Unit: seconds.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The health check method.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The region where the probe nodes are located. Default value: Global.
   * 
   * - Global: worldwide.
   * - ChineseMainland: the Chinese mainland.
   * - OutsideChineseMainland: worldwide (excluding the Chinese mainland).
   * 
   * @example
   * Global
   */
  monitoringRegion?: string;
  /**
   * @remarks
   * The path.
   * 
   * @example
   * /
   */
  path?: string;
  /**
   * @remarks
   * The target port.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The health check timeout period. Unit: seconds.
   * 
   * @example
   * 5
   */
  timeout?: number;
  /**
   * @remarks
   * The monitor protocol type, such as HTTP, used for health checks. A value of off indicates that no health check is performed.
   * 
   * @example
   * HTTP
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      consecutiveDown: 'ConsecutiveDown',
      consecutiveUp: 'ConsecutiveUp',
      expectedCodes: 'ExpectedCodes',
      followRedirects: 'FollowRedirects',
      header: 'Header',
      interval: 'Interval',
      method: 'Method',
      monitoringRegion: 'MonitoringRegion',
      path: 'Path',
      port: 'Port',
      timeout: 'Timeout',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consecutiveDown: 'number',
      consecutiveUp: 'number',
      expectedCodes: 'string',
      followRedirects: 'boolean',
      header: 'any',
      interval: 'number',
      method: 'string',
      monitoringRegion: 'string',
      path: 'string',
      port: 'number',
      timeout: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerResponseBodyRandomSteering extends $dara.Model {
  /**
   * @remarks
   * The default round-robin weight applied to all pools that do not have an individually specified weight. Valid values: 0 to 100.
   * 
   * @example
   * 50
   */
  defaultWeight?: number;
  /**
   * @remarks
   * The weight configuration for each backend server pool. The key is the pool ID and the value is the weight coefficient. The weight coefficient represents the relative proportion of traffic distribution.
   */
  poolWeights?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      defaultWeight: 'DefaultWeight',
      poolWeights: 'PoolWeights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultWeight: 'number',
      poolWeights: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
    };
  }

  validate() {
    if(this.poolWeights) {
      $dara.Model.validateMap(this.poolWeights);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerResponseBodyRulesFixedResponse extends $dara.Model {
  /**
   * @remarks
   * The Content-Type field in the HTTP header.
   * 
   * @example
   * application/json
   */
  contentType?: string;
  /**
   * @remarks
   * The location field in the HTTP response.
   * 
   * @example
   * http://www.example.com/index.html
   */
  location?: string;
  /**
   * @remarks
   * The response body value.
   * 
   * @example
   * Hello World.
   */
  messageBody?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      location: 'Location',
      messageBody: 'MessageBody',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      location: 'string',
      messageBody: 'string',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * The fixed response content returned when the rule is matched.
   */
  fixedResponse?: GetLoadBalancerResponseBodyRulesFixedResponse;
  /**
   * @remarks
   * The load balancing configuration overrides applied to matching requests. The configured fields override the corresponding fields in the load balancer configuration.
   * 
   * @example
   * {
   *             "adaptive_routing": {
   *                 "failover_across_pools": true
   *             },
   *             "sub_region_pools": {
   *                 "GB": [
   *                     96228666776****
   *                 ],
   *                 "US": [
   *                     96228666776****
   *                 ]
   *             },
   *             "default_pools": [
   *                 96228666776****,
   *                 96228666776****
   *             ],
   *             "fallback_pool": 96228666776****,
   *             "location_strategy": {
   *                 "mode": "resolver_ip",
   *                 "prefer_ecs": "always"
   *             },
   *             "random_steering": {
   *                 "default_weight": 30,
   *                 "pool_weights": {
   *                     "96228666776****": 70,
   *                     "96228666776****": 80
   *                 }
   *             },
   *             "region_pools": {
   *                 "ENAM": [
   *                     96228666776****,
   *                     92843536908****
   *                 ],
   *                 "WNAM": [
   *                     92843536908****
   *                 ]
   *             },
   *             "session_affinity": "cookie",
   *             "session_affinity_attributes": {
   *                 "drain_duration": 100,
   *                 "headers": ["none"],
   *                 "require_all_headers": false,
   *                 "samesite": "Auto",
   *                 "secure": "Auto",
   *                 "zero_downtime_failover": "sticky"
   *             },
   *             "session_affinity_ttl": 1800,
   *             "steering_policy": "dynamic_latency",
   *             "ttl": 30
   *         }
   */
  overrides?: any;
  /**
   * @remarks
   * The rule content, which uses conditional expressions to match user requests. This parameter is not required when you add a global configuration. Two scenarios are supported:
   * - Match all incoming requests: Set the value to true.
   * - Match specific requests: Set the value to a custom expression, such as (http.host eq \\"video.example.com\\").
   * 
   * @example
   * http.request.uri.path contains "/testing"
   */
  rule?: string;
  /**
   * @remarks
   * The rule switch. This parameter is not required when you add a global configuration. Valid values:
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * off
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name. This parameter is not required when you add a global configuration.
   * 
   * @example
   * r2
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule execution order. A larger value indicates a higher priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * Indicates whether to terminate the execution of subsequent rules.
   * 
   * - true: Yes.
   * - false: No. This is the default value.
   * 
   * @example
   * true
   */
  terminates?: boolean;
  static names(): { [key: string]: string } {
    return {
      fixedResponse: 'FixedResponse',
      overrides: 'Overrides',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      terminates: 'Terminates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fixedResponse: GetLoadBalancerResponseBodyRulesFixedResponse,
      overrides: 'any',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      terminates: 'boolean',
    };
  }

  validate() {
    if(this.fixedResponse && typeof (this.fixedResponse as any).validate === 'function') {
      (this.fixedResponse as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cross-origin pool back-to-origin configuration.
   */
  adaptiveRouting?: GetLoadBalancerResponseBodyAdaptiveRouting;
  /**
   * @remarks
   * The list of default pool IDs.
   */
  defaultPools?: number[];
  /**
   * @remarks
   * The description of the load balancer.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the load balancer is enabled.
   * 
   * - true: Enabled.
   * - false: Not enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The fallback pool ID. When all other pools are unavailable, traffic is redirected to this pool.
   * 
   * @example
   * 96228666776****
   */
  fallbackPool?: number;
  /**
   * @remarks
   * The unique ID of the load balancer.
   * 
   * @example
   * 99867648760****
   */
  id?: number;
  /**
   * @remarks
   * The monitor configuration.
   */
  monitor?: GetLoadBalancerResponseBodyMonitor;
  /**
   * @remarks
   * The name of the load balancer.
   * 
   * @example
   * lb.example.com
   */
  name?: string;
  /**
   * @remarks
   * The weighted round-robin configuration, which controls the traffic distribution weight across different pools.
   */
  randomSteering?: GetLoadBalancerResponseBodyRandomSteering;
  /**
   * @remarks
   * The pools mapped to primary regions.
   * 
   * @example
   * {
   *   "ENAM": [
   *     12345678****
   *   ],
   *   "WNAM": [
   *     23456789****,
   *     23456789****
   *   ]
   * }
   */
  regionPools?: any;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
   */
  requestId?: string;
  /**
   * @remarks
   * The list of rule configurations that define behaviors under specific conditions.
   */
  rules?: GetLoadBalancerResponseBodyRules[];
  /**
   * @remarks
   * The session persistence setting. Valid values:
   * - off: disabled.
   * - ip: IP-based session persistence.
   * - cookie: cookie-based session persistence.
   * - http_header: HTTP header-based session persistence.
   * 
   * @example
   * ip
   */
  sessionAffinity?: string;
  /**
   * @remarks
   * The ID of the site to which the load balancer belongs.
   * 
   * @example
   * 11591017874****
   */
  siteId?: number;
  /**
   * @remarks
   * The status of the load balancer.
   * 
   * @example
   * healthy
   */
  status?: string;
  /**
   * @remarks
   * The load balancing policy.
   * 
   * @example
   * order
   */
  steeringPolicy?: string;
  /**
   * @remarks
   * The pools mapped to secondary regions. When multiple secondary regions share the same set of pools, you can concatenate multiple secondary regions with commas as the key.
   * 
   * @example
   * {"AL,MO": [92298024898****],"CN-SH,CN-SX,CN-SC":[92304347804****,92843536908****]}
   */
  subRegionPools?: any;
  /**
   * @remarks
   * The TTL value, which specifies the time-to-live of the DNS record. Default value: 30 seconds.
   * 
   * @example
   * 60
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      adaptiveRouting: 'AdaptiveRouting',
      defaultPools: 'DefaultPools',
      description: 'Description',
      enabled: 'Enabled',
      fallbackPool: 'FallbackPool',
      id: 'Id',
      monitor: 'Monitor',
      name: 'Name',
      randomSteering: 'RandomSteering',
      regionPools: 'RegionPools',
      requestId: 'RequestId',
      rules: 'Rules',
      sessionAffinity: 'SessionAffinity',
      siteId: 'SiteId',
      status: 'Status',
      steeringPolicy: 'SteeringPolicy',
      subRegionPools: 'SubRegionPools',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptiveRouting: GetLoadBalancerResponseBodyAdaptiveRouting,
      defaultPools: { 'type': 'array', 'itemType': 'number' },
      description: 'string',
      enabled: 'boolean',
      fallbackPool: 'number',
      id: 'number',
      monitor: GetLoadBalancerResponseBodyMonitor,
      name: 'string',
      randomSteering: GetLoadBalancerResponseBodyRandomSteering,
      regionPools: 'any',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': GetLoadBalancerResponseBodyRules },
      sessionAffinity: 'string',
      siteId: 'number',
      status: 'string',
      steeringPolicy: 'string',
      subRegionPools: 'any',
      ttl: 'number',
    };
  }

  validate() {
    if(this.adaptiveRouting && typeof (this.adaptiveRouting as any).validate === 'function') {
      (this.adaptiveRouting as any).validate();
    }
    if(Array.isArray(this.defaultPools)) {
      $dara.Model.validateArray(this.defaultPools);
    }
    if(this.monitor && typeof (this.monitor as any).validate === 'function') {
      (this.monitor as any).validate();
    }
    if(this.randomSteering && typeof (this.randomSteering as any).validate === 'function') {
      (this.randomSteering as any).validate();
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

