// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerShrinkRequest extends $dara.Model {
  adaptiveRoutingShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  defaultPoolsShrink?: string;
  description?: string;
  enabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  fallbackPool?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  monitorShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  randomSteeringShrink?: string;
  regionPools?: any;
  rulesShrink?: string;
  sessionAffinity?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
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

