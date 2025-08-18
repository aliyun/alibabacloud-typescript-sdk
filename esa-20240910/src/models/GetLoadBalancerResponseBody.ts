// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLoadBalancerResponseBodyAdaptiveRouting extends $dara.Model {
  /**
   * @remarks
   * Whether to fail over across pools.
   * 
   * - true: Yes.
   * - false: No.
   * 
   * @example
   * true
   */
  failoverAcrossPools?: boolean;
  static names(): { [key: string]: string } {
    return {
      failoverAcrossPools: 'FailoverAcrossPools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failoverAcrossPools: 'boolean',
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
   * The number of consecutive failed probes required to consider the target as unhealthy, for example, `5`.
   * 
   * @example
   * 5
   */
  consecutiveDown?: number;
  /**
   * @remarks
   * The number of consecutive successful probes required to consider the target as healthy, for example, `3`.
   * 
   * @example
   * 3
   */
  consecutiveUp?: number;
  /**
   * @remarks
   * Expected status codes, such as 200, 202, for successful HTTP responses.
   * 
   * @example
   * 200,202
   */
  expectedCodes?: string;
  /**
   * @remarks
   * Whether to follow redirects.
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
   * The HTTP headers to be included in the probe request.
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
   * Health check interval, in seconds.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * Health check method.
   * 
   * @example
   * GET
   */
  method?: string;
  monitoringRegion?: string;
  /**
   * @remarks
   * Path.
   * 
   * @example
   * /
   */
  path?: string;
  /**
   * @remarks
   * Target port.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The timeout for the health check, in seconds.
   * 
   * @example
   * 5
   */
  timeout?: number;
  /**
   * @remarks
   * Monitor protocol type, such as HTTP, used for health checks. When the value is `off`, it indicates that no check is performed.
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
   * The default round-robin weight, used for all pools that do not have individually specified weights. The value range is 0-100.
   * 
   * @example
   * 50
   */
  defaultWeight?: number;
  /**
   * @remarks
   * Weight configurations for each backend server pool, where the key is the pool ID and the value is the weight coefficient. The weight coefficient represents the relative traffic distribution ratio.
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
   * The Content-Type field in the HTTP Header.
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
   * The body value of the response.
   * 
   * @example
   * Hello World.
   */
  messageBody?: string;
  /**
   * @remarks
   * Status code.
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
   * Executes a specified response after matching the rule.
   */
  fixedResponse?: GetLoadBalancerResponseBodyRulesFixedResponse;
  /**
   * @remarks
   * Modifies the load balancer configuration for the corresponding request after matching the rule. The fields in this configuration will override the corresponding fields in the load balancer\\"s configuration.
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
   * Rule content, using conditional expressions to match user requests. This parameter is not required when adding global configurations. There are two usage scenarios:
   * - Match all incoming requests: Set the value to true
   * - Match specific requests: Set the value to a custom expression, for example: (http.host eq \\"video.example.com\\")
   * 
   * @example
   * http.request.uri.path contains "/testing"
   */
  rule?: string;
  /**
   * @remarks
   * Rule switch. This parameter is not required when adding global configurations. Possible values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * off
   */
  ruleEnable?: string;
  /**
   * @remarks
   * Rule name. This parameter is not required when adding global configurations.
   * 
   * @example
   * r2
   */
  ruleName?: string;
  /**
   * @remarks
   * Rule execution order. The higher the number, the higher the priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * Whether to terminate the execution of subsequent rules.
   * 
   * - true: Yes.
   * - false: No, default value.
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
   * Cross-pool failover configuration.
   */
  adaptiveRouting?: GetLoadBalancerResponseBodyAdaptiveRouting;
  /**
   * @remarks
   * List of default pool IDs.
   */
  defaultPools?: number[];
  /**
   * @remarks
   * Description of the load balancer.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Whether the load balancer is enabled.
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
   * The fallback pool ID, to which traffic will be redirected if all other pools are unavailable.
   * 
   * @example
   * 96228666776****
   */
  fallbackPool?: number;
  /**
   * @remarks
   * The unique identifier ID of the load balancer.
   * 
   * @example
   * 99867648760****
   */
  id?: number;
  /**
   * @remarks
   * Monitor configuration.
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
   * Weighted round-robin configuration, used to control the traffic distribution weights among different pools.
   */
  randomSteering?: GetLoadBalancerResponseBodyRandomSteering;
  /**
   * @remarks
   * Address pools corresponding to primary regions.
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
   * Request ID.
   * 
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
   */
  requestId?: string;
  /**
   * @remarks
   * A list of rule configurations, used to define behavior under specific conditions.
   */
  rules?: GetLoadBalancerResponseBodyRules[];
  /**
   * @remarks
   * Session persistence, with values:
   * - off: Not enabled.
   * - ip: Session persistence by IP.
   * - cookie: Session persistence by cookie.
   * 
   * @example
   * ip
   */
  sessionAffinity?: string;
  /**
   * @remarks
   * The site ID to which the load balancer belongs.
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
   * Load balancing policy.
   * 
   * @example
   * order
   */
  steeringPolicy?: string;
  /**
   * @remarks
   * Address pools corresponding to secondary regions. When multiple secondary regions share a set of address pools, the keys can be concatenated with commas.
   * 
   * @example
   * {"AL,MO": [92298024898****],"CN-SH,CN-SX,CN-SC":[92304347804****,92843536908****]}
   */
  subRegionPools?: any;
  /**
   * @remarks
   * TTL value, the time-to-live for DNS records, with a default of 30 seconds.
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

