// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleAlertMetricInputParamValue extends $dara.Model {
  /**
   * @remarks
   * The name of the predefined metric parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * paramName
   */
  name?: string;
  /**
   * @remarks
   * The value of the predefined metric parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * paramValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

