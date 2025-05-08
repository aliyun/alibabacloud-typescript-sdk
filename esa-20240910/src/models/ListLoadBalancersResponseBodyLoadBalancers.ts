// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLoadBalancersResponseBodyLoadBalancersAdaptiveRouting } from "./ListLoadBalancersResponseBodyLoadBalancersAdaptiveRouting";
import { ListLoadBalancersResponseBodyLoadBalancersMonitor } from "./ListLoadBalancersResponseBodyLoadBalancersMonitor";
import { ListLoadBalancersResponseBodyLoadBalancersRandomSteering } from "./ListLoadBalancersResponseBodyLoadBalancersRandomSteering";
import { ListLoadBalancersResponseBodyLoadBalancersRules } from "./ListLoadBalancersResponseBodyLoadBalancersRules";


export class ListLoadBalancersResponseBodyLoadBalancers extends $dara.Model {
  /**
   * @remarks
   * Cross-pool failover configuration.
   */
  adaptiveRouting?: ListLoadBalancersResponseBodyLoadBalancersAdaptiveRouting;
  /**
   * @remarks
   * List of default address pool IDs.
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
   * Whether the load balancer is enabled.
   * 
   * - true: Enabled.
   * - false: Not enabled.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The fallback pool ID, to which traffic will be redirected if all other pools are unavailable.
   * 
   * @example
   * 96228666776****
   */
  fallbackPool?: number;
  /**
   * @remarks
   * The unique identifier ID of the load balancer.
   * 
   * @example
   * 998676487607104
   */
  id?: number;
  /**
   * @remarks
   * Monitor configuration.
   */
  monitor?: ListLoadBalancersResponseBodyLoadBalancersMonitor;
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
   * Weighted round-robin configuration, used to control the traffic distribution weights among different pools.
   */
  randomSteering?: ListLoadBalancersResponseBodyLoadBalancersRandomSteering;
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
   * List of rule configurations, used to define behaviors under specific conditions.
   */
  rules?: ListLoadBalancersResponseBodyLoadBalancersRules[];
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
   * The site ID to which the load balancer belongs.
   * 
   * @example
   * 1159101787****
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
   * The load balancing policy.
   * 
   * @example
   * order
   */
  steeringPolicy?: string;
  /**
   * @remarks
   * Address pools corresponding to secondary regions. When multiple secondary regions share a set of address pools, the keys can be concatenated with commas.
   * 
   * @example
   * {"AL,MO": [92298024898****],"CN-SH,CN-SX,CN-SC":[92304347804****,92843536908****]}
   */
  subRegionPools?: any;
  /**
   * @remarks
   * The TTL value, which is the DNS record\\"s time to live, with a default value of 30.
   * 
   * @example
   * 30
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
      adaptiveRouting: ListLoadBalancersResponseBodyLoadBalancersAdaptiveRouting,
      defaultPools: { 'type': 'array', 'itemType': 'number' },
      description: 'string',
      enabled: 'boolean',
      fallbackPool: 'number',
      id: 'number',
      monitor: ListLoadBalancersResponseBodyLoadBalancersMonitor,
      name: 'string',
      randomSteering: ListLoadBalancersResponseBodyLoadBalancersRandomSteering,
      regionPools: 'any',
      rules: { 'type': 'array', 'itemType': ListLoadBalancersResponseBodyLoadBalancersRules },
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

