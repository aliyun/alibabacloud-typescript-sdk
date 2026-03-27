// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleAlertMetricInputFilterValue extends $dara.Model {
  /**
   * @remarks
   * Dimension of the filter condition.
   * 
   * This parameter is required.
   * 
   * @example
   * rootIp
   */
  dim?: string;
  /**
   * @remarks
   * Filter Condition Operator.
   * 
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  opt?: string;
  /**
   * @remarks
   * Filter Condition Value.
   * 
   * @example
   * 127.0.0.1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      dim: 'dim',
      opt: 'opt',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dim: 'string',
      opt: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

