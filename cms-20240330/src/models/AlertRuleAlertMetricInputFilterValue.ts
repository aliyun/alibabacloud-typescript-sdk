// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleAlertMetricInputFilterValue extends $dara.Model {
  /**
   * @remarks
   * 过滤条件的维度
   * 
   * This parameter is required.
   * 
   * @example
   * rootIp
   */
  dim?: string;
  /**
   * @remarks
   * 过滤条件操作符
   * 
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  opt?: string;
  /**
   * @remarks
   * 过滤条件值
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

