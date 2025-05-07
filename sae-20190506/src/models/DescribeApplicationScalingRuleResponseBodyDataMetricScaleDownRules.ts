// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationScalingRuleResponseBodyDataMetricScaleDownRules extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the application scale-in is disabled. Valid values:
   * 
   * *   **true**: disabled.
   * *   **false**: enabled.
   * 
   * >  When this parameter is set to true, the application instances are never reduced. This prevents risks to your business in peak hours. By default, this parameter is set to false.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The cooldown time of the scale-in. Valid values: 0 to 3600. Unit: seconds. Default value: 0.
   * 
   * @example
   * 300
   */
  stabilizationWindowSeconds?: number;
  /**
   * @remarks
   * The step size for the scale-in. The maximum number of instances that can be reduced within a specific period of time.
   * 
   * @example
   * 100
   */
  step?: number;
  static names(): { [key: string]: string } {
    return {
      disabled: 'Disabled',
      stabilizationWindowSeconds: 'StabilizationWindowSeconds',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disabled: 'boolean',
      stabilizationWindowSeconds: 'number',
      step: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

