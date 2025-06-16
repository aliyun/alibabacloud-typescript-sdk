// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Configuration for failover across pools.
   * 
   * @example
   * true
   */
  adaptiveRoutingShrink?: string;
  /**
   * @remarks
   * List of default pools.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  defaultPoolsShrink?: string;
  /**
   * @remarks
   * Detailed description of the load balancer, for easier management and identification.
   * 
   * @example
   * Load balancer description
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
   * This parameter is required.
   * 
   * @example
   * 123
   */
  fallbackPool?: number;
  /**
   * @remarks
   * Monitor configuration, used for health checks.
   * 
   * This parameter is required.
   * 
   * @example
   * order
   */
  monitorShrink?: string;
  /**
   * @remarks
   * The name of the load balancer, which must meet the domain name format validation and be a subdomain under the site.
   * 
   * This parameter is required.
   * 
   * @example
   * lb.example.com
   */
  name?: string;
  /**
   * @remarks
   * Weighted round-robin configuration, used to control the traffic distribution weights among different pools.
   * 
   * @example
   * 123
   */
  randomSteeringShrink?: string;
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
   * Rule information.
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
   * 123456789****
   */
  siteId?: number;
  /**
   * @remarks
   * Load balancing strategy.
   * 
   * - geo: Geographical strategy.
   * - random: Weighted round-robin.
   * - order: Primary and backup method.
   * 
   * This parameter is required.
   * 
   * @example
   * order
   */
  steeringPolicy?: string;
  /**
   * @remarks
   * Address pools corresponding to secondary regions. When multiple secondary regions share the same set of address pools, the keys can be concatenated with commas.
   * 
   * @example
   * {"AL,MO": [92298024898****],"CN-SH,CN-SX,CN-SC":[92304347804****,92843536908****]}
   */
  subRegionPools?: any;
  /**
   * @remarks
   * TTL value, the time-to-live for DNS records, with a default of 30 seconds. The value range is 10-600.
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
      monitorShrink: 'Monitor',
      name: 'Name',
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
      monitorShrink: 'string',
      name: 'string',
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

