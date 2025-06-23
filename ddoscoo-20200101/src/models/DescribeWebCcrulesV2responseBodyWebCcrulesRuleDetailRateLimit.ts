// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailRateLimit extends $dara.Model {
  /**
   * @remarks
   * The statistical period. Unit: seconds.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The name of the field. This parameter is required only when the Target parameter is set to header.
   * 
   * @example
   * action
   */
  subKey?: string;
  /**
   * @remarks
   * The statistical method. Valid values:
   * 
   * *   **ip**
   * *   **header**
   * 
   * @example
   * ip
   */
  target?: string;
  /**
   * @remarks
   * The trigger threshold.
   * 
   * @example
   * 20
   */
  threshold?: number;
  /**
   * @remarks
   * The blocking duration. Unit: seconds.
   * 
   * @example
   * 15
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      interval: 'Interval',
      subKey: 'SubKey',
      target: 'Target',
      threshold: 'Threshold',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interval: 'number',
      subKey: 'string',
      target: 'string',
      threshold: 'number',
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

