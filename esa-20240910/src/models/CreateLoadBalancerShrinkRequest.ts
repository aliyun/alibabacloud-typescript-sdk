// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration for failover across address pools.
   * 
   * @example
   * true
   */
  adaptiveRoutingShrink?: string;
  /**
   * @remarks
   * A list of default address pool IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  defaultPoolsShrink?: string;
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
  monitorShrink?: string;
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
  randomSteeringShrink?: string;
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
  rulesShrink?: string;
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

