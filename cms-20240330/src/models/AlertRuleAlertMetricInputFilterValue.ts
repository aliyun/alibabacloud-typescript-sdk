// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleAlertMetricInputFilterValue extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dim?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  opt?: string;
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

