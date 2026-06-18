// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLoadBalancerRequestAdaptiveRouting extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform origin-pull across address pools.
   * 
   * - `true`: Enables origin-pull across address pools.
   * 
   * - `false`: Disables origin-pull across address pools.
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
   * The number of consecutive failed health checks required to declare an origin server unhealthy. For example, `5`.
   * 
   * @example
   * 5
   */
  consecutiveDown?: number;
  /**
   * @remarks
   * The number of consecutive successful health checks required to declare an origin server healthy. For example, `3`.
   * 
   * @example
   * 3
   */
  consecutiveUp?: number;
  /**
   * @remarks
   * The expected HTTP status codes that indicate a healthy response. For example, `200,202`.
   * 
   * @example
   * 200,202
   */
  expectedCodes?: string;
  /**
   * @remarks
   * Specifies whether the health check monitor follows HTTP redirections.
   * 
   * - `true`: The monitor follows HTTP redirections.
   * 
   * - `false`: The monitor does not follow HTTP redirections.
   * 
   * @example
   * true
   */
  followRedirects?: boolean;
  /**
   * @remarks
   * The HTTP request headers to send with each health check.
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
   * The interval in seconds between each health check. For example, `60`.
   * 
   * @example
   * 100
   */
  interval?: number;
  /**
   * @remarks
   * The HTTP method to use for the health check. For example, `GET`.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The regions from which the health checks are performed. The default value is `Global`.
   * 
   * - `Global`: From probe locations worldwide.
   * 
   * - `ChineseMainland`: From probe locations within the Chinese mainland.
   * 
   * - `OutsideChineseMainland`: From probe locations outside the Chinese mainland.
   * 
   * @example
   * Global
   */
  monitoringRegion?: string;
  /**
   * @remarks
   * The path on the origin server to request for the health check. For example, `/healthcheck`.
   * 
   * @example
   * /health
   */
  path?: string;
  /**
   * @remarks
   * The port on the origin server to use for the health check.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The timeout for the health check, in seconds. The value must be between 1 and 10, inclusive.
   * 
   * @example
   * 5
   */
  timeout?: number;
  /**
   * @remarks
   * The protocol to use for the health check, such as `HTTP`. If you set this to `off`, no health check is performed.
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
   * The default weight applied to all address pools that do not have a specific weight defined. The value must be an integer from 0 to 100, inclusive.
   * 
   * @example
   * 50
   */
  defaultWeight?: number;
  /**
   * @remarks
   * A map of pool IDs to their corresponding weights. These weights determine the proportion of traffic routed to each backend server pool.
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
   * The value of the `Content-Type` field in the HTTP response header.
   * 
   * @example
   * application/json
   */
  contentType?: string;
  /**
   * @remarks
   * The value of the `Location` field in the HTTP response header. This is typically used for redirections.
   * 
   * @example
   * http://www.example.com/index.html
   */
  location?: string;
  /**
   * @remarks
   * The content of the response body.
   * 
   * @example
   * Hello World!
   */
  messageBody?: string;
  /**
   * @remarks
   * The HTTP status code of the response.
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
   * The fixed response to return when the rule\\"s condition is met.
   */
  fixedResponse?: UpdateLoadBalancerRequestRulesFixedResponse;
  /**
   * @remarks
   * The settings to override for requests that match this rule\\"s condition. These settings take precedence over the load balancer\\"s main configuration.
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
   * The content of the rule, specified as a conditional expression to match user requests. This parameter is not required when you configure global settings. Use cases:
   * 
   * - To match all incoming requests, set the value to `true`.
   * 
   * - To match specific requests, set the value to a custom expression, such as `(http.host eq "video.example.com")`.
   * 
   * @example
   * http.request.method eq "GET"
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether the rule is enabled. This parameter is not required when you configure global settings. Valid values:
   * 
   * - `on`: Enabled.
   * 
   * - `off`: Disabled.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The name of the rule. This parameter is not required when you configure global settings.
   * 
   * @example
   * rule_1
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution priority of the rule. This parameter is optional. If you do not specify this parameter, rules are executed in the order they are listed. If specified, the value must be an integer greater than 0. A larger value indicates a higher priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * Specifies whether to stop processing subsequent rules after this rule is matched.
   * 
   * - `true`: Stop processing subsequent rules.
   * 
   * - `false`: Continue processing subsequent rules. This is the default value.
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
   * Configures origin-pull behavior across address pools.
   */
  adaptiveRouting?: UpdateLoadBalancerRequestAdaptiveRouting;
  /**
   * @remarks
   * A list of default address pool IDs.
   */
  defaultPools?: number[];
  /**
   * @remarks
   * An optional description of the load balancer for easier identification and management.
   * 
   * @example
   * Load balancer description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the load balancer is enabled.
   * 
   * - `true`: The load balancer is enabled.
   * 
   * - `false`: The load balancer is disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The ID of the fallback address pool. Traffic is routed to this pool when all other address pools are unavailable.
   * 
   * @example
   * 96228666776****
   */
  fallbackPool?: number;
  /**
   * @remarks
   * The ID of the load balancer. You can obtain this ID by calling the [ListLoadBalancers](https://help.aliyun.com/document_detail/2868897.html) API operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 95913670174****
   */
  id?: number;
  /**
   * @remarks
   * The health check monitor configuration.
   */
  monitor?: UpdateLoadBalancerRequestMonitor;
  /**
   * @remarks
   * The configuration for weighted round-robin. This setting controls the weight of traffic distributed to different address pools.
   */
  randomSteering?: UpdateLoadBalancerRequestRandomSteering;
  /**
   * @remarks
   * A map of primary regions to their corresponding address pools.
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
   * A list of rules that define behavior overrides for specific conditions.
   * 
   * **if can be null:**
   * false
   */
  rules?: UpdateLoadBalancerRequestRules[];
  /**
   * @remarks
   * The method for session affinity, which ensures that requests from the same client are routed to the same origin server. Valid values:
   * 
   * - `off`: Disables session affinity.
   * 
   * - `ip`: Enables session affinity based on the client IP address.
   * 
   * - `cookie`: Enables session affinity based on a cookie.
   * 
   * @example
   * ip
   */
  sessionAffinity?: string;
  /**
   * @remarks
   * The ID of the Site. You can obtain this ID by calling the [ListSites](~~ListSites~~) API operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1159101787****
   */
  siteId?: number;
  /**
   * @remarks
   * The traffic steering policy, which determines how traffic is distributed among the address pools.
   * 
   * @example
   * order
   */
  steeringPolicy?: string;
  /**
   * @remarks
   * A map of secondary regions to their corresponding address pools. To assign the same address pools to multiple secondary regions, combine their codes into a single, comma-separated key.
   * 
   * @example
   * {"AL,MO": [92298024898****],"CN-SH,CN-SX,CN-SC":[92304347804****,92843536908****]}
   */
  subRegionPools?: any;
  /**
   * @remarks
   * The Time to Live (TTL) for the DNS record, in seconds. The default is 30. The value must be between 10 and 600, inclusive.
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

