// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetLoadBalancerResponseBodyAdaptiveRouting } from "./GetLoadBalancerResponseBodyAdaptiveRouting";
import { GetLoadBalancerResponseBodyMonitor } from "./GetLoadBalancerResponseBodyMonitor";
import { GetLoadBalancerResponseBodyRandomSteering } from "./GetLoadBalancerResponseBodyRandomSteering";
import { GetLoadBalancerResponseBodyRules } from "./GetLoadBalancerResponseBodyRules";


export class GetLoadBalancerResponseBody extends $dara.Model {
  /**
   * @remarks
   * Cross-pool failover configuration.
   */
  adaptiveRouting?: GetLoadBalancerResponseBodyAdaptiveRouting;
  /**
   * @remarks
   * List of default pool IDs.
   */
  defaultPools?: number[];
  /**
   * @remarks
   * Description of the load balancer.
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
   * true
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
   * 99867648760****
   */
  id?: number;
  /**
   * @remarks
   * Monitor configuration.
   */
  monitor?: GetLoadBalancerResponseBodyMonitor;
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
  randomSteering?: GetLoadBalancerResponseBodyRandomSteering;
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
   * Request ID.
   * 
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
   */
  requestId?: string;
  /**
   * @remarks
   * A list of rule configurations, used to define behavior under specific conditions.
   */
  rules?: GetLoadBalancerResponseBodyRules[];
  /**
   * @remarks
   * Session persistence, with values:
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
   * 11591017874****
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
   * Load balancing policy.
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
   * TTL value, the time-to-live for DNS records, with a default of 30 seconds.
   * 
   * @example
   * 60
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
      requestId: 'RequestId',
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
      adaptiveRouting: GetLoadBalancerResponseBodyAdaptiveRouting,
      defaultPools: { 'type': 'array', 'itemType': 'number' },
      description: 'string',
      enabled: 'boolean',
      fallbackPool: 'number',
      id: 'number',
      monitor: GetLoadBalancerResponseBodyMonitor,
      name: 'string',
      randomSteering: GetLoadBalancerResponseBodyRandomSteering,
      regionPools: 'any',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': GetLoadBalancerResponseBodyRules },
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

