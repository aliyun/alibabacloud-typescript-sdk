// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLoadBalancerShrinkRequest extends $dara.Model {
  adaptiveRoutingShrink?: string;
  defaultPoolsShrink?: string;
  description?: string;
  enabled?: boolean;
  fallbackPool?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  id?: number;
  monitorShrink?: string;
  randomSteeringShrink?: string;
  regionPools?: any;
  /**
   * **if can be null:**
   * false
   */
  rulesShrink?: string;
  sessionAffinity?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  steeringPolicy?: string;
  subRegionPools?: any;
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

