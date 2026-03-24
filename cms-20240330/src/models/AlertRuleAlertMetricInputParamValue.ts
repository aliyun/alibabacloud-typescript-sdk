// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleAlertMetricInputParamValue extends $dara.Model {
  /**
   * @remarks
   * 预定义指标参数名
   * 
   * This parameter is required.
   * 
   * @example
   * paramName
   */
  name?: string;
  /**
   * @remarks
   * 预定义指标参数值
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

