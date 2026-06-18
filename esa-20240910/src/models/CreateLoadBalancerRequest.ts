// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerRequestAdaptiveRouting extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to fail over across address pools.
   * 
   * - `true`: Yes.
   * 
   * - `false`: No.
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

export class CreateLoadBalancerRequestMonitor extends $dara.Model {
  /**
   * @remarks
   * The number of consecutive failed health checks required to mark an origin server as unhealthy. For example, `5`.
   * 
   * @example
   * 5
   */
  consecutiveDown?: number;
  /**
   * @remarks
   * The number of consecutive successful health checks required to mark an origin server as healthy. For example, `3`.
   * 
   * @example
   * 3
   */
  consecutiveUp?: number;
  /**
   * @remarks
   * The expected HTTP status codes that indicate a successful health check. Separate multiple codes with commas. For example, `200,202`.
   * 
   * @example
   * 200
   */
  expectedCodes?: string;
  /**
   * @remarks
   * Specifies whether the health check monitor follows HTTP redirects.
   * 
   * - `true`: Yes.
   * 
   * - `false`: No.
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
   * The interval in seconds between consecutive health checks. For example, `60`.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The HTTP method for the health check. For example, `GET`.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The regions from which the monitor initiates health check probes. Default: `Global`. Valid values:
   * 
   * - `Global`: Worldwide.
   * 
   * - `ChineseMainland`: Chinese mainland.
   * 
   * - `OutsideChineseMainland`: Regions outside the Chinese mainland.
   * 
   * @example
   * Global
   */
  monitoringRegion?: string;
  /**
   * @remarks
   * The request path for the HTTP health check. For example, `/healthcheck`.
   * 
   * @example
   * /health
   */
  path?: string;
  /**
   * @remarks
   * The port on the origin server to check.
   * 
   * @example
   * 1921
   */
  port?: number;
  /**
   * @remarks
   * The timeout for the health check, in seconds. The value must be between 1 and 10.
   * 
   * @example
   * 5
   */
  timeout?: number;
  /**
   * @remarks
   * The protocol for the health check. Setting this to `off` disables health checks. Valid values:
   * 
   * - TCP
   * 
   * - UDP
   * 
   * - SMTP
   * 
   * - HTTPS
   * 
   * - HTTP
   * 
   * - ICMP Ping
   * 
   * - off
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

export class CreateLoadBalancerRequestRandomSteering extends $dara.Model {
  /**
   * @remarks
   * The default weight for the weighted round-robin policy. This weight applies to all address pools without a specifically assigned weight. Valid values: 0–100.
   * 
   * @example
   * 50
   */
  defaultWeight?: number;
  /**
   * @remarks
   * A map of weights for each address pool, where the key is the pool ID and the value is its weight. The weight determines the proportion of traffic that the pool receives.
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

export class CreateLoadBalancerRequestRulesFixedResponse extends $dara.Model {
  /**
   * @remarks
   * The value of the `Content-Type` field in the HTTP response header.
   * 
   * @example
   * application/octet-stream
   */
  contentType?: string;
  /**
   * @remarks
   * The value of the `Location` field in the HTTP response header, typically used for redirects.
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

export class CreateLoadBalancerRequestRules extends $dara.Model {
  /**
   * @remarks
   * Specifies a fixed response to return when a request matches the rule.
   * 
   * @example
   * {"content_type": "application/json", "location": "www.example.com", "message_body": "Testing Hello", "status_code": 0}
   */
  fixedResponse?: CreateLoadBalancerRequestRulesFixedResponse;
  /**
   * @remarks
   * The Server Load Balancer settings to override when a request matches the rule. The fields specified here replace the corresponding fields in the main Server Load Balancer configuration.
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
   * A conditional expression that matches incoming requests.
   * 
   * - To match all incoming requests, set the value to `true`.
   * 
   * - To match specific requests, provide a custom expression, such as `(http.host eq "video.example.com")`.
   * 
   * @example
   * (http.request.method eq "GET" and http.request.version eq "HTTP/1.0") or (ip.geoip.country eq "CN") or (http.host eq "www.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether the rule is enabled. This parameter is not required when adding a global configuration. Valid values:
   * 
   * - `on`: The rule is enabled.
   * 
   * - `off`: The rule is disabled.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The name of the rule. This parameter is not required when adding a global configuration.
   * 
   * @example
   * rule_1
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution order of the rule. If you do not specify a value, the system executes rules in the order they appear in the list. If specified, the value must be an integer greater than 0. The system executes rules with a higher value first.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * Specifies whether to stop processing subsequent rules after a match.
   * 
   * - `true`: Yes.
   * 
   * - `false`: No. (Default)
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
      fixedResponse: CreateLoadBalancerRequestRulesFixedResponse,
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

export class CreateLoadBalancerRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration for failover across address pools.
   * 
   * @example
   * true
   */
  adaptiveRouting?: CreateLoadBalancerRequestAdaptiveRouting;
  /**
   * @remarks
   * A list of default address pool IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  defaultPools?: number[];
  /**
   * @remarks
   * A description of the Server Load Balancer.
   * 
   * @example
   * Test load balancer description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the Server Load Balancer.
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
   * The ID of the fallback pool. The system directs traffic to this pool when all other pools are unavailable.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  fallbackPool?: number;
  /**
   * @remarks
   * The monitor configuration for health checks.
   * 
   * This parameter is required.
   * 
   * @example
   * order
   */
  monitor?: CreateLoadBalancerRequestMonitor;
  /**
   * @remarks
   * The name of the Server Load Balancer. It must be a valid domain name and a subdomain of the site.
   * 
   * This parameter is required.
   * 
   * @example
   * lb.example.com
   */
  name?: string;
  /**
   * @remarks
   * The configuration for weighted round-robin steering. This setting controls how the system distributes traffic across different address pools based on their weights.
   * 
   * @example
   * 123
   */
  randomSteering?: CreateLoadBalancerRequestRandomSteering;
  /**
   * @remarks
   * The mapping of primary regions to address pools.
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
   * A list of rules to override the default traffic steering policy for specific requests.
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
  rules?: CreateLoadBalancerRequestRules[];
  /**
   * @remarks
   * Specifies the session affinity policy, which consistently routes requests from the same client to the same origin server. Valid values:
   * 
   * - `off`: Disables session affinity.
   * 
   * - `ip`: Routes requests based on the client\\"s IP address.
   * 
   * - `cookie`: Uses a cookie to maintain session affinity.
   * 
   * @example
   * ip
   */
  sessionAffinity?: string;
  /**
   * @remarks
   * The site ID. Call the [ListSites](~~ListSites~~) operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456789****
   */
  siteId?: number;
  /**
   * @remarks
   * The traffic steering policy, which determines how the system distributes traffic among the address pools. Valid values:
   * 
   * - `geo`: Geographic routing.
   * 
   * - `random`: Weighted round-robin.
   * 
   * - `order`: Primary/standby.
   * 
   * This parameter is required.
   * 
   * @example
   * order
   */
  steeringPolicy?: string;
  /**
   * @remarks
   * The mapping of secondary regions to address pools. To map multiple secondary regions to the same address pools, combine their region codes with commas to form the key.
   * 
   * @example
   * {"AL,MO": [92298024898****],"CN-SH,CN-SX,CN-SC":[92304347804****,92843536908****]}
   */
  subRegionPools?: any;
  /**
   * @remarks
   * The time to live (TTL) for the DNS record, in seconds. The default value is 30. The value must be between 10 and 600.
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
      monitor: 'Monitor',
      name: 'Name',
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
      adaptiveRouting: CreateLoadBalancerRequestAdaptiveRouting,
      defaultPools: { 'type': 'array', 'itemType': 'number' },
      description: 'string',
      enabled: 'boolean',
      fallbackPool: 'number',
      monitor: CreateLoadBalancerRequestMonitor,
      name: 'string',
      randomSteering: CreateLoadBalancerRequestRandomSteering,
      regionPools: 'any',
      rules: { 'type': 'array', 'itemType': CreateLoadBalancerRequestRules },
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

