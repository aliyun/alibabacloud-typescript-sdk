// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerRequestAdaptiveRouting extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to route traffic back to the origin across origin address pools. Valid values:
   * - true: Yes.
   * - false: No.
   * 
   * @example
   * true
   */
  failoverAcrossPools?: boolean;
  /**
   * @remarks
   * Specifies whether to retry the next IP address if a back-to-origin request fails, the origin server is a domain name, and the domain name is resolved to multiple IP addresses.
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

export class CreateLoadBalancerRequestMonitor extends $dara.Model {
  /**
   * @remarks
   * The number of consecutive failed probes required to determine a failed health check, such as `5`.
   * 
   * @example
   * 5
   */
  consecutiveDown?: number;
  /**
   * @remarks
   * The number of consecutive successful probes required to determine a successful health check, such as `3`.
   * 
   * @example
   * 3
   */
  consecutiveUp?: number;
  /**
   * @remarks
   * The expected status codes for successful HTTP responses, such as `200,202`.
   * 
   * @example
   * 200
   */
  expectedCodes?: string;
  /**
   * @remarks
   * Specifies whether to follow redirects. Valid values:
   * - true: Yes.
   * - false: No.
   * 
   * @example
   * true
   */
  followRedirects?: boolean;
  /**
   * @remarks
   * The HTTP headers included in the probe requests.
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
   * The monitoring interval, such as `60` seconds. This parameter specifies the check frequency.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The request method of the monitor, such as `GET` in the HTTP protocol.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The region where the probe nodes are located. Default value: Global. Valid values:
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
   * The health check path of the monitor, such as `/healthcheck`, the URI of the request.
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
   * 1921
   */
  port?: number;
  /**
   * @remarks
   * The timeout period for health checks. Unit: seconds. Valid values: 1 to 10.
   * 
   * @example
   * 5
   */
  timeout?: number;
  /**
   * @remarks
   * The protocol type of the monitor for health checks, such as HTTP. A value of off indicates that health checks are disabled. Valid values:
   * - TCP
   * - UDP
   * - SMTP
   * - HTTPS
   * - HTTP
   * - ICMP Ping
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
   * The default round-robin weight for all address pools that do not have a specified weight. Valid values: integers from 0 to 100.
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

export class CreateLoadBalancerRequestRulesFixedResponse extends $dara.Model {
  /**
   * @remarks
   * The Content-Type field in the HTTP header.
   * 
   * @example
   * application/octet-stream
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
   * The body value of the response.
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

export class CreateLoadBalancerRequestRules extends $dara.Model {
  /**
   * @remarks
   * The specified content to return in the response after a rule is matched.
   * 
   * @example
   * {"content_type": "application/json", "location": "www.example.com", "message_body": "Testing Hello", "status_code": 0}
   */
  fixedResponse?: CreateLoadBalancerRequestRulesFixedResponse;
  /**
   * @remarks
   * The load balancing configuration modified for the corresponding request rewrite after a rule is matched. The configured fields override the corresponding fields in the load balancer configuration.
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
   * The content of the rule. A conditional expression is used to match user requests. You do not need to set this parameter when adding a global configuration. Two scenarios are supported:
   * - Match all incoming requests: Set the value to true.
   * - Match specific requests: Set the value to a custom expression, such as (http.host eq "video.example.com").
   * 
   * @example
   * (http.request.method eq "GET" and http.request.version eq "HTTP/1.0") or (ip.geoip.country eq "CN") or (http.host eq "www.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * The rule switch. You do not need to set this parameter when adding a global configuration. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The name of the rule. You do not need to set this parameter when adding a global configuration.
   * 
   * @example
   * rule_1
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution sequence of the rule. This parameter is optional. If you do not specify this parameter, rules are executed in the order they are listed. If you specify this parameter, the value must be an integer greater than 0. A larger value indicates a higher execution priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * Specifies whether to stop executing subsequent rules. Valid values:
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
   * The back-to-origin configuration across origin address pools.
   * 
   * @example
   * true
   */
  adaptiveRouting?: CreateLoadBalancerRequestAdaptiveRouting;
  /**
   * @remarks
   * The list of default address pools.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  defaultPools?: number[];
  /**
   * @remarks
   * The detailed description of the load balancer for easy management and identification.
   * 
   * @example
   * Load Balancer Description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the load balancer is enabled. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The ID of the fallback address pool. Traffic is routed to this pool when all other pools are unavailable.
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
   * The name of the load balancer. The name must pass the domain name format validation and be a subdomain of the site.
   * 
   * This parameter is required.
   * 
   * @example
   * lb.example.com
   */
  name?: string;
  /**
   * @remarks
   * The weighted round-robin configuration used to control the traffic distribution weights of different address pools.
   * 
   * @example
   * 123
   */
  randomSteering?: CreateLoadBalancerRequestRandomSteering;
  /**
   * @remarks
   * The address pools corresponding to primary regions.
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
   * The rule information.
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
   * The session persistence configuration. Valid values:
   * - off: Disabled.
   * - ip: Session persistence based on IP addresses.
   * - cookie: Session persistence based on cookies.
   * - http_header: Session persistence based on HTTP headers.
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
   * 123456789****
   */
  siteId?: number;
  /**
   * @remarks
   * The load balancing policy. Valid values:
   * - geo: Geolocation-based policy.
   * - random: Weighted round-robin.
   * - order: Active/standby mode.
   * 
   * This parameter is required.
   * 
   * @example
   * order
   */
  steeringPolicy?: string;
  /**
   * @remarks
   * The address pools corresponding to secondary regions. When multiple secondary regions share the same set of address pools, you can concatenate the secondary regions with commas (,) to use as the key.
   * 
   * @example
   * {"AL,MO": [92298024898****],"CN-SH,CN-SX,CN-SC":[92304347804****,92843536908****]}
   */
  subRegionPools?: any;
  /**
   * @remarks
   * The time-to-live (TTL) value of the DNS record. Default value: 30. Unit: seconds. Valid values: 10 to 600.
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

