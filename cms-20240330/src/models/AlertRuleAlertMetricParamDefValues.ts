// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleAlertMetricParamDefValues extends $dara.Model {
  labelCn?: string;
  labelEn?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      labelCn: 'labelCn',
      labelEn: 'labelEn',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelCn: 'string',
      labelEn: 'string',
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

