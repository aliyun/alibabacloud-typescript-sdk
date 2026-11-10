// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The back-to-origin configuration across origin address pools.
   * 
   * @example
   * true
   */
  adaptiveRoutingShrink?: string;
  /**
   * @remarks
   * The list of default address pools.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  defaultPoolsShrink?: string;
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
  monitorShrink?: string;
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
  randomSteeringShrink?: string;
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
  rulesShrink?: string;
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

