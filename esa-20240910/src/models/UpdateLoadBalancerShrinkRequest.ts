// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLoadBalancerShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Configures origin-pull behavior across address pools.
   */
  adaptiveRoutingShrink?: string;
  /**
   * @remarks
   * A list of default address pool IDs.
   */
  defaultPoolsShrink?: string;
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
  monitorShrink?: string;
  /**
   * @remarks
   * The configuration for weighted round-robin. This setting controls the weight of traffic distributed to different address pools.
   */
  randomSteeringShrink?: string;
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
  rulesShrink?: string;
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

