// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLoadBalancerResponseBodyAdaptiveRouting extends $dara.Model {
  /**
   * @remarks
   * Indicates whether failover across pools is enabled.
   * 
   * - `true`: Enabled.
   * 
   * - `false`: Disabled.
   * 
   * @example
   * true
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

export class GetLoadBalancerResponseBodyMonitor extends $dara.Model {
  /**
   * @remarks
   * The number of consecutive failed probes required to declare an origin unhealthy. For example, `5`.
   * 
   * @example
   * 5
   */
  consecutiveDown?: number;
  /**
   * @remarks
   * The number of consecutive successful probes required to declare an origin healthy. For example, `3`.
   * 
   * @example
   * 3
   */
  consecutiveUp?: number;
  /**
   * @remarks
   * The expected HTTP status codes for a successful response, such as 200 or 202.
   * 
   * @example
   * 200,202
   */
  expectedCodes?: string;
  /**
   * @remarks
   * Specifies whether the health check probe follows redirects.
   * 
   * - `true`: Follows redirects.
   * 
   * - `false`: Does not follow redirects.
   * 
   * @example
   * true
   */
  followRedirects?: boolean;
  /**
   * @remarks
   * The HTTP headers to include in the health check request.
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
   * The interval for health checks, in seconds.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The method for the health check.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The region from which probes are sent. Default is `Global`. Valid values:
   * 
   * - `Global`: From global locations.
   * 
   * - `ChineseMainland`: From locations within the Chinese Mainland.
   * 
   * - `OutsideChineseMainland`: From global locations outside of the Chinese Mainland.
   * 
   * @example
   * Global
   */
  monitoringRegion?: string;
  /**
   * @remarks
   * The path for the health check request.
   * 
   * @example
   * /
   */
  path?: string;
  /**
   * @remarks
   * The destination port for the health check.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The health check timeout, in seconds.
   * 
   * @example
   * 5
   */
  timeout?: number;
  /**
   * @remarks
   * The protocol used for health checks, such as HTTP. If set to `off`, health checks are disabled.
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
   * The default weight for origin pools that do not have an individually assigned weight. The value must be an integer from 0 to 100.
   * 
   * @example
   * 50
   */
  defaultWeight?: number;
  /**
   * @remarks
   * A map of weights for individual origin pools, where the key is the origin pool ID and the value is its weight. The weight determines the traffic distribution ratio.
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
   * The value for the `Content-Type` HTTP response header.
   * 
   * @example
   * application/json
   */
  contentType?: string;
  /**
   * @remarks
   * The value for the `Location` HTTP response header.
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
   * Hello World.
   */
  messageBody?: string;
  /**
   * @remarks
   * The HTTP status code.
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
   * Specifies a fixed response to return when the rule matches.
   */
  fixedResponse?: GetLoadBalancerResponseBodyRulesFixedResponse;
  /**
   * @remarks
   * A set of settings that override the primary load balancer configuration when this rule matches. Fields defined here take precedence over the primary configuration.
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
   * The conditional expression used to match incoming requests. This parameter is not required for the global configuration.
   * 
   * - To match all requests, set the value to `true`.
   * 
   * - To match specific requests, use a custom expression. For example, `(http.host eq "video.example.com")`.
   * 
   * @example
   * http.request.uri.path contains "/testing"
   */
  rule?: string;
  /**
   * @remarks
   * Indicates whether the rule is enabled. This parameter is not required for the global configuration. Valid values are:
   * 
   * - `on`: Enabled.
   * 
   * - `off`: Disabled.
   * 
   * @example
   * off
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The name of the rule. This parameter is not required when adding a global configuration.
   * 
   * @example
   * r2
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution priority of the rule. A higher value indicates a higher priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * Indicates whether to stop evaluating subsequent rules after this one matches.
   * 
   * - `true`: Stop evaluation.
   * 
   * - `false`: Continues evaluation. (Default)
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
   * The configuration for failover across pools.
   */
  adaptiveRouting?: GetLoadBalancerResponseBodyAdaptiveRouting;
  /**
   * @remarks
   * A list of default origin pool IDs.
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
   * - `true`: Enabled.
   * 
   * - `false`: Disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The ID of the fallback pool. Routes traffic to this origin pool when all other origin pools are unavailable.
   * 
   * @example
   * 96228666776****
   */
  fallbackPool?: number;
  /**
   * @remarks
   * The unique identifier for the load balancer.
   * 
   * @example
   * 99867648760****
   */
  id?: number;
  /**
   * @remarks
   * The health check configuration.
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
   * The weighted routing configuration, which controls the traffic distribution weight among origin pools.
   */
  randomSteering?: GetLoadBalancerResponseBodyRandomSteering;
  /**
   * @remarks
   * A map of regions to their corresponding origin pools.
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
   * A list of rule configurations that define behavior for specific conditions.
   */
  rules?: GetLoadBalancerResponseBodyRules[];
  /**
   * @remarks
   * The session affinity policy. Valid values are:
   * 
   * - `off`: Session affinity is disabled.
   * 
   * - `ip`: Session affinity is based on the client\\"s IP address.
   * 
   * - `cookie`: Session affinity is based on a cookie.
   * 
   * @example
   * ip
   */
  sessionAffinity?: string;
  /**
   * @remarks
   * The ID of the site for the load balancer.
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
   * The steering policy.
   * 
   * @example
   * order
   */
  steeringPolicy?: string;
  /**
   * @remarks
   * A map of sub-regions to their corresponding origin pools. To map multiple sub-regions to the same set of origin pools, concatenate their codes with commas to create the key.
   * 
   * @example
   * {"AL,MO": [92298024898****],"CN-SH,CN-SX,CN-SC":[92304347804****,92843536908****]}
   */
  subRegionPools?: any;
  /**
   * @remarks
   * The Time to Live (TTL) for the DNS record, in seconds. The default is 30.
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

