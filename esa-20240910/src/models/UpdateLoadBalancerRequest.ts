// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLoadBalancerRequestAdaptiveRouting extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable cross-pool back-to-origin routing.
   * 
   * - true: Yes.
   * - false: No.
   * 
   * @example
   * false
   */
  failoverAcrossPools?: boolean;
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

export class UpdateLoadBalancerRequestMonitor extends $dara.Model {
  /**
   * @remarks
   * The number of consecutive failed probes required to consider the target unhealthy, such as 5.
   * 
   * @example
   * 5
   */
  consecutiveDown?: number;
  /**
   * @remarks
   * The number of consecutive successful probes required to consider the target healthy, such as 3.
   * 
   * @example
   * 3
   */
  consecutiveUp?: number;
  /**
   * @remarks
   * The expected status codes for a successful HTTP response, such as 200 and 202.
   * 
   * @example
   * 200,202
   */
  expectedCodes?: string;
  /**
   * @remarks
   * Specifies whether to follow redirects.
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
   * The monitor request header configuration.
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
   * The monitor interval, such as 60 seconds. This parameter specifies the check frequency.
   * 
   * @example
   * 100
   */
  interval?: number;
  /**
   * @remarks
   * The monitor request method, such as GET in the HTTP protocol.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The region where the probe nodes are located. Default value: Global. Valid values:
   * 
   * - Global: Global.
   * - ChineseMainland: The Chinese mainland.
   * - OutsideChineseMainland: Global (excluding the Chinese mainland).
   * 
   * @example
   * Global
   */
  monitoringRegion?: string;
  /**
   * @remarks
   * The health check path of the monitor, such as /healthcheck, which is the URI of the request.
   * 
   * @example
   * /health
   */
  path?: string;
  /**
   * @remarks
   * The origin server port.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The health check timeout period, in seconds. Valid values: 1 to 10.
   * 
   * @example
   * 5
   */
  timeout?: number;
  /**
   * @remarks
   * The monitor protocol type for health checks, such as HTTP. A value of off indicates that health checks are disabled.
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

export class UpdateLoadBalancerRequestRandomSteering extends $dara.Model {
  /**
   * @remarks
   * The default round-robin weight for all pools that do not have a specific weight configured. Valid values: integers from 0 to 100.
   * 
   * @example
   * 50
   */
  defaultWeight?: number;
  /**
   * @remarks
   * The weight configuration for each backend server pool. The key is the pool ID and the value is the weight coefficient. The weight coefficient indicates the proportion of relative traffic distribution.
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

export class UpdateLoadBalancerRequestRulesFixedResponse extends $dara.Model {
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
   * The Location field in the HTTP response.
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
   * Hello World!
   */
  messageBody?: string;
  /**
   * @remarks
   * The response status code.
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

export class UpdateLoadBalancerRequestRules extends $dara.Model {
  /**
   * @remarks
   * The specified content to return in the response after a rule is matched.
   */
  fixedResponse?: UpdateLoadBalancerRequestRulesFixedResponse;
  /**
   * @remarks
   * The load balancing configuration to modify for request rewriting after a rule is matched. The configured fields overwrite the corresponding fields in the load balancing instance configuration.
   * 
   * @example
   * {
   *             "adaptive_routing": {
   *                 "failover_across_pools": true
   *             },
   *             "sub_region_pools": {
   *                 "AL,AT": [
   *                     92298024898****,
   *                     92304347804****
   *                 ],
   *                 "BG,BY": [
   *                     92298024898****
   *                 ]
   *             },
   *             "default_pools": [
   *                 92298024898****,
   *                 92304347804****
   *             ],
   *             "fallback_pool": 92298024898****,
   *             "location_strategy": {
   *                 "mode": "resolver_ip",
   *                 "prefer_ecs": "always"
   *             },
   *             "random_steering": {
   *                 "default_weight": 0.3,
   *                 "pool_weights": {
   *                     "92298024898****": 0.7,
   *                     "92304347804****": 0.8
   *                 }
   *             },
   *             "region_pools": {
   *                 "CN,SEAS": [
   *                     92298024898****,
   *                     92304347804****
   *                 ],
   *                 "SAF,SAS": [
   *                     92304347804****
   *                 ]
   *             },
   *             "session_affinity": "ip",
   *             "steering_policy": "geo",
   *             "ttl": 30
   *         }
   */
  overrides?: any;
  /**
   * @remarks
   * The rule content. This parameter uses conditional expressions to match user requests. This parameter is not required when you add a global configuration. Two scenarios are supported:
   * - Match all incoming requests: Set the value to true.
   * - Match specific requests: Set the value to a custom expression, such as (http.host eq \\"video.example.com\\").
   * 
   * @example
   * http.request.method eq "GET"
   */
  rule?: string;
  /**
   * @remarks
   * The rule switch. This parameter is not required when you add a global configuration. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name. This parameter is not required when you add a global configuration.
   * 
   * @example
   * rule_1
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule execution sequence. This parameter is optional. If you do not specify this parameter, rules are executed in the order they appear in the list. If you specify this parameter, the value must be an integer greater than 0. A larger value indicates a higher execution priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * Specifies whether to stop executing subsequent rules.
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
      fixedResponse: UpdateLoadBalancerRequestRulesFixedResponse,
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

export class UpdateLoadBalancerRequest extends $dara.Model {
  /**
   * @remarks
   * The cross-pool back-to-origin configuration.
   */
  adaptiveRouting?: UpdateLoadBalancerRequestAdaptiveRouting;
  /**
   * @remarks
   * The list of default pool IDs.
   */
  defaultPools?: number[];
  /**
   * @remarks
   * The detailed description of the load balancing instance. This description facilitates management and identification.
   * 
   * @example
   * Load balancer description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the load balancing instance is enabled.
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The fallback pool ID. Traffic is routed to this pool when all other pools are unavailable.
   * 
   * @example
   * 96228666776****
   */
  fallbackPool?: number;
  /**
   * @remarks
   * The load balancing instance ID. You can invoke the [ListLoadBalancers](https://help.aliyun.com/document_detail/2868897.html) operation to obtain the load balancing instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 95913670174****
   */
  id?: number;
  /**
   * @remarks
   * The monitor configuration for health checks.
   */
  monitor?: UpdateLoadBalancerRequestMonitor;
  /**
   * @remarks
   * The weighted round-robin configuration. This configuration controls the traffic distribution weights for different pools.
   */
  randomSteering?: UpdateLoadBalancerRequestRandomSteering;
  /**
   * @remarks
   * The pools that correspond to the primary regions.
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
   * The list of rule configurations. This list is used to define behavior overrides under specific conditions.
   * 
   * **if can be null:**
   * false
   */
  rules?: UpdateLoadBalancerRequestRules[];
  /**
   * @remarks
   * The session persistence policy. Valid values:
   * - off: Disabled.
   * - ip: Session persistence based on IP address.
   * - cookie: Session persistence based on cookie.
   * 
   * @example
   * ip
   */
  sessionAffinity?: string;
  /**
   * @remarks
   * The site ID. You can obtain the site ID by calling the [ListSites](~~ListSites~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1159101787****
   */
  siteId?: number;
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
   * The pools that correspond to the secondary regions. When multiple secondary regions share the same set of pools, you can concatenate multiple secondary regions with commas (,) to use as the key.
   * 
   * @example
   * {"AL,MO": [92298024898****],"CN-SH,CN-SX,CN-SC":[92304347804****,92843536908****]}
   */
  subRegionPools?: any;
  /**
   * @remarks
   * The time-to-live (TTL) value of the DNS record. Default value: 30. Valid values: 10 to 600.
   * 
   * @example
   * 300
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
      randomSteering: 'RandomSteering',
      regionPools: 'RegionPools',
      rules: 'Rules',
      sessionAffinity: 'SessionAffinity',
      siteId: 'SiteId',
      steeringPolicy: 'SteeringPolicy',
      subRegionPools: 'SubRegionPools',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptiveRouting: UpdateLoadBalancerRequestAdaptiveRouting,
      defaultPools: { 'type': 'array', 'itemType': 'number' },
      description: 'string',
      enabled: 'boolean',
      fallbackPool: 'number',
      id: 'number',
      monitor: UpdateLoadBalancerRequestMonitor,
      randomSteering: UpdateLoadBalancerRequestRandomSteering,
      regionPools: 'any',
      rules: { 'type': 'array', 'itemType': UpdateLoadBalancerRequestRules },
      sessionAffinity: 'string',
      siteId: 'number',
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

