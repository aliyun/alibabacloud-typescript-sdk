// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCElasticScalingRequest extends $dara.Model {
  dryRun?: boolean;
  /**
   * @example
   * rc-3ndh4shwes*
   */
  instanceId?: string;
  /**
   * @example
   * mysql.x2.medium.9cm
   */
  instanceType?: string;
  /**
   * @example
   * cn-hanghzou
   */
  regionId?: string;
  scalingEnabled?: boolean;
  /**
   * @example
   * {"rule":[{"beginTime":"09:00","endTime":"17:00","acu":4}]}
   */
  scheduledRule?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
      scalingEnabled: 'ScalingEnabled',
      scheduledRule: 'ScheduledRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      instanceId: 'string',
      instanceType: 'string',
      regionId: 'string',
      scalingEnabled: 'boolean',
      scheduledRule: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

