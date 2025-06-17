// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApplicationScalingRuleResponseBodyDataMetric } from "./DescribeApplicationScalingRuleResponseBodyDataMetric";
import { DescribeApplicationScalingRuleResponseBodyDataTimer } from "./DescribeApplicationScalingRuleResponseBodyDataTimer";


export class DescribeApplicationScalingRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * a0d2e04c-159d-40a8-b240-d2f2c263****
   */
  appId?: string;
  /**
   * @remarks
   * The time when the auto scaling policy was created. Unit: milliseconds.
   * 
   * @example
   * 1624329843790
   */
  createTime?: number;
  /**
   * @remarks
   * The time when the auto scaling policy was last disabled.
   * 
   * @example
   * 1641882854484
   */
  lastDisableTime?: number;
  /**
   * @remarks
   * The details of the metric-based auto scaling policy.
   */
  metric?: DescribeApplicationScalingRuleResponseBodyDataMetric;
  /**
   * @remarks
   * The ratio of the minimum number of available instances to the current number of instances. Valid values:
   * 
   * *   **-1** (default value): The minimum number of available instances is not determined based on this parameter.
   * *   **0 to 100**: The minimum number of available instances is calculated by using the following formula: Number of existing instances × Value of MinReadyInstanceRatio × 100%. The calculation result is rounded up to the nearest integer. For example, if the number of existing instances is 5 and MinReadyInstanceRatio is set to 50, the minimum number of available instances is 3.
   * 
   * >  If the **MinReadyInstanceRatio** and **MinReadyInstanceRatio** parameters are configured and the **MinReadyInstanceRatio** parameter is set to a number from 0 to 100, the value of the MinReadyInstanceRatio parameter takes precedence. For example, if the **MinReadyInstances** parameter is set to **5**, and the **MinReadyInstanceRatio** parameter is set to **50**, the minimum number of available instances is set to the nearest integer rounded up from the calculated result of the following formula: Nmber of existing instances × **50**.
   * 
   * @example
   * -1
   */
  minReadyInstanceRatio?: number;
  /**
   * @remarks
   * The minimum number of available instances. Valid values:
   * 
   * *   If you set the value to **0**, business is interrupted when the application is updated.
   * *   If you set this property to -1, the system calculates a recommended value as the minimum number of available instances by using the following formula: Recommended value = Number of existing instances × 25%. The calculation result is rounded up to the nearest integer. For example, if the number of existing instances is 5, the recommended value is calculated by using the following formula: 5 × 25% = 1.25. In this case, the minimum number of available instances is 2.
   * 
   * >  To ensure business continuity, make sure that at least one instance is available during application deployment and rollback.
   * 
   * @example
   * 1
   */
  minReadyInstances?: number;
  /**
   * @remarks
   * Indicates whether the auto scaling policy is enabled. Valid values:
   * 
   * *   **true**: enabled
   * *   **false**: disabled
   * 
   * @example
   * true
   */
  scaleRuleEnabled?: boolean;
  /**
   * @remarks
   * The name of the auto scaling policy.
   * 
   * @example
   * test
   */
  scaleRuleName?: string;
  /**
   * @remarks
   * The type of the auto scaling policy. Valid values:
   * 
   * *   **timing**: the scheduled auto scaling policy.
   * *   **metric**: the metric-based auto scaling policy.
   * *   **mix**: the hybrid auto scaling policy.
   * 
   * @example
   * timing
   */
  scaleRuleType?: string;
  /**
   * @remarks
   * The details of the scheduled auto scaling policy.
   */
  timer?: DescribeApplicationScalingRuleResponseBodyDataTimer;
  /**
   * @remarks
   * The time when the auto scaling policy was updated. Unit: milliseconds.
   * 
   * @example
   * 1624330075827
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      lastDisableTime: 'LastDisableTime',
      metric: 'Metric',
      minReadyInstanceRatio: 'MinReadyInstanceRatio',
      minReadyInstances: 'MinReadyInstances',
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
      lastDisableTime: 'number',
      metric: DescribeApplicationScalingRuleResponseBodyDataMetric,
      minReadyInstanceRatio: 'number',
      minReadyInstances: 'number',
      scaleRuleEnabled: 'boolean',
      scaleRuleName: 'string',
      scaleRuleType: 'string',
      timer: DescribeApplicationScalingRuleResponseBodyDataTimer,
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

