// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cross-origin address pool back-to-origin configuration.
   * 
   * @example
   * true
   */
  adaptiveRoutingShrink?: string;
  /**
   * @remarks
   * The list of default address pool IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  defaultPoolsShrink?: string;
  /**
   * @remarks
   * The description of the load balancer for management and identification purposes.
   * 
   * @example
   * Load Balancer Description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the load balancer is enabled. Valid values:
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
   * The fallback address pool ID. Traffic is directed to this pool when all other pools are unavailable.
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
  monitorShrink?: string;
  /**
   * @remarks
   * The name of the load balancer. The name must be in a valid domain name format and must be a subdomain of the site.
   * 
   * This parameter is required.
   * 
   * @example
   * lb.example.com
   */
  name?: string;
  /**
   * @remarks
   * The weighted round-robin configuration that controls the traffic distribution weight across different address pools.
   * 
   * @example
   * 123
   */
  randomSteeringShrink?: string;
  /**
   * @remarks
   * The address pools mapped to primary regions.
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
  rulesShrink?: string;
  /**
   * @remarks
   * The session persistence mode. Valid values:
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
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID.
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
   * 
   * - geo: geo-based routing.
   * - random: weighted round-robin.
   * - order: primary/secondary mode.
   * 
   * This parameter is required.
   * 
   * @example
   * order
   */
  steeringPolicy?: string;
  /**
   * @remarks
   * The address pools mapped to secondary regions. If multiple secondary regions share the same set of address pools, you can concatenate the secondary region names with commas as the key.
   * 
   * @example
   * {"AL,MO": [92298024898****],"CN-SH,CN-SX,CN-SC":[92304347804****,92843536908****]}
   */
  subRegionPools?: any;
  /**
   * @remarks
   * The TTL value, which specifies the time-to-live of the DNS record. Default value: 30 seconds. Valid values: 10 to 600.
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

