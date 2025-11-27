// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCElasticScalingResponseBodyScheduledRuleTemplates extends $dara.Model {
  items?: string[];
  static names(): { [key: string]: string } {
    return {
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCElasticScalingResponseBody extends $dara.Model {
  /**
   * @example
   * gn8is
   */
  acuType?: string;
  /**
   * @example
   * rc-a0e466b01tif2pk
   */
  instanceId?: string;
  /**
   * @example
   * 1F7B8B09-36F3-1165-BADB-13E376FE9BD7
   */
  requestId?: string;
  scalingEnabled?: boolean;
  scalingSupported?: boolean;
  /**
   * @example
   * {"rule":[{"beginTime":"09:00","endTime":"17:00","acu":4}]}
   */
  scheduledRule?: string;
  scheduledRuleTemplates?: DescribeRCElasticScalingResponseBodyScheduledRuleTemplates;
  /**
   * @example
   * mysql.x2.medium.9cm
   */
  targetInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
      acuType: 'AcuType',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      scalingEnabled: 'ScalingEnabled',
      scalingSupported: 'ScalingSupported',
      scheduledRule: 'ScheduledRule',
      scheduledRuleTemplates: 'ScheduledRuleTemplates',
      targetInstanceType: 'TargetInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acuType: 'string',
      instanceId: 'string',
      requestId: 'string',
      scalingEnabled: 'boolean',
      scalingSupported: 'boolean',
      scheduledRule: 'string',
      scheduledRuleTemplates: DescribeRCElasticScalingResponseBodyScheduledRuleTemplates,
      targetInstanceType: 'string',
    };
  }

  validate() {
    if(this.scheduledRuleTemplates && typeof (this.scheduledRuleTemplates as any).validate === 'function') {
      (this.scheduledRuleTemplates as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

