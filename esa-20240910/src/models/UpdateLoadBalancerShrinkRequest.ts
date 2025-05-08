// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLoadBalancerShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Configuration for failover across pools.
   */
  adaptiveRoutingShrink?: string;
  /**
   * @remarks
   * List of default pool IDs.
   */
  defaultPoolsShrink?: string;
  /**
   * @remarks
   * Detailed description of the load balancer, for easier management and identification.
   * 
   * @example
   * 负载均衡器描述
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
   * Fallback pool ID, where traffic will be directed when all other pools are unavailable.
   * 
   * @example
   * 96228666776****
   */
  fallbackPool?: number;
  /**
   * @remarks
   * Load balancer ID, which can be obtained by calling the [ListLoadBalancers](https://help.aliyun.com/document_detail/2868897.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 95913670174****
   */
  id?: number;
  /**
   * @remarks
   * Monitor configuration for health checks.
   */
  monitorShrink?: string;
  /**
   * @remarks
   * Weighted round-robin configuration, used to control the traffic distribution weights among different pools.
   */
  randomSteeringShrink?: string;
  /**
   * @remarks
   * Address pool corresponding to the primary region.
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
   * Rule configuration list, used to define behavior overrides under specific conditions.
   * 
   * **if can be null:**
   * false
   */
  rulesShrink?: string;
  /**
   * @remarks
   * Session persistence, with possible values:
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
   * Site ID, which can be obtained by calling the [ListSites](~~ListSites~~) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 1159101787****
   */
  siteId?: number;
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
   * Address pool corresponding to the secondary region. When multiple secondary regions share the same address pool, the keys can be concatenated with commas.
   * 
   * @example
   * {"AL,MO": [92298024898****],"CN-SH,CN-SX,CN-SC":[92304347804****,92843536908****]}
   */
  subRegionPools?: any;
  /**
   * @remarks
   * TTL value, the time-to-live for DNS records, with a default of 30 and a range of 10-600.
   * 
   * @example
   * 300
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      adaptiveRoutingShrink: 'AdaptiveRouting',
      defaultPoolsShrink: 'DefaultPools',
      description: 'Description',
      enabled: 'Enabled',
      fallbackPool: 'FallbackPool',
      id: 'Id',
      monitorShrink: 'Monitor',
      randomSteeringShrink: 'RandomSteering',
      regionPools: 'RegionPools',
      rulesShrink: 'Rules',
      sessionAffinity: 'SessionAffinity',
      siteId: 'SiteId',
      steeringPolicy: 'SteeringPolicy',
      subRegionPools: 'SubRegionPools',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptiveRoutingShrink: 'string',
      defaultPoolsShrink: 'string',
      description: 'string',
      enabled: 'boolean',
      fallbackPool: 'number',
      id: 'number',
      monitorShrink: 'string',
      randomSteeringShrink: 'string',
      regionPools: 'any',
      rulesShrink: 'string',
      sessionAffinity: 'string',
      siteId: 'number',
      steeringPolicy: 'string',
      subRegionPools: 'any',
      ttl: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

