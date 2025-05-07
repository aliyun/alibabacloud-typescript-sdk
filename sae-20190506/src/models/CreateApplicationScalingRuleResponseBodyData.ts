// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateApplicationScalingRuleResponseBodyDataMetric } from "./CreateApplicationScalingRuleResponseBodyDataMetric";
import { CreateApplicationScalingRuleResponseBodyDataTimer } from "./CreateApplicationScalingRuleResponseBodyDataTimer";


export class CreateApplicationScalingRuleResponseBodyData extends $dara.Model {
  /**
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  /**
   * @example
   * 1616642248938
   */
  createTime?: number;
  enableIdle?: boolean;
  /**
   * @example
   * 1641882854484
   */
  lastDisableTime?: number;
  metric?: CreateApplicationScalingRuleResponseBodyDataMetric;
  /**
   * @example
   * true
   */
  scaleRuleEnabled?: boolean;
  /**
   * @example
   * test
   */
  scaleRuleName?: string;
  /**
   * @example
   * timing
   */
  scaleRuleType?: string;
  timer?: CreateApplicationScalingRuleResponseBodyDataTimer;
  /**
   * @example
   * 1616642248938
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      enableIdle: 'EnableIdle',
      lastDisableTime: 'LastDisableTime',
      metric: 'Metric',
      scaleRuleEnabled: 'ScaleRuleEnabled',
      scaleRuleName: 'ScaleRuleName',
      scaleRuleType: 'ScaleRuleType',
      timer: 'Timer',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'number',
      enableIdle: 'boolean',
      lastDisableTime: 'number',
      metric: CreateApplicationScalingRuleResponseBodyDataMetric,
      scaleRuleEnabled: 'boolean',
      scaleRuleName: 'string',
      scaleRuleType: 'string',
      timer: CreateApplicationScalingRuleResponseBodyDataTimer,
      updateTime: 'number',
    };
  }

  validate() {
    if(this.metric && typeof (this.metric as any).validate === 'function') {
      (this.metric as any).validate();
    }
    if(this.timer && typeof (this.timer as any).validate === 'function') {
      (this.timer as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

