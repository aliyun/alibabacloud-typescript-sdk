// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleAlertMetricInputFilterValue extends $dara.Model {
  /**
   * @remarks
   * The filter condition dimension.
   * 
   * This parameter is required.
   * 
   * @example
   * rootIp
   */
  dim?: string;
  /**
   * @remarks
   * The filter condition operator.
   * 
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  opt?: string;
  /**
   * @remarks
   * The filter condition value.
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

