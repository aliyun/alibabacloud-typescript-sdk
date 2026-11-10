// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLoadBalancerShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cross-pool back-to-origin configuration.
   */
  adaptiveRoutingShrink?: string;
  /**
   * @remarks
   * The list of default pool IDs.
   */
  defaultPoolsShrink?: string;
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
  monitorShrink?: string;
  /**
   * @remarks
   * The weighted round-robin configuration. This configuration controls the traffic distribution weights for different pools.
   */
  randomSteeringShrink?: string;
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
  rulesShrink?: string;
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

