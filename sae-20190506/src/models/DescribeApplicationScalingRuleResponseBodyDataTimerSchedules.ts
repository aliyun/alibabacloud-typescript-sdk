// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationScalingRuleResponseBodyDataTimerSchedules extends $dara.Model {
  /**
   * @remarks
   * The point in time. Format: **Hour:Minute**.
   * 
   * @example
   * 08:00
   */
  atTime?: string;
  /**
   * @example
   * 10
   */
  maxReplicas?: number;
  /**
   * @example
   * 1
   */
  minReplicas?: number;
  /**
   * @remarks
   * The expected number of instances.
   * 
   * @example
   * 2
   */
  targetReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      atTime: 'AtTime',
      maxReplicas: 'MaxReplicas',
      minReplicas: 'MinReplicas',
      targetReplicas: 'TargetReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atTime: 'string',
      maxReplicas: 'number',
      minReplicas: 'number',
      targetReplicas: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

