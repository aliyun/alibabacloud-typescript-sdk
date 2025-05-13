// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlertRuleAlertMetricParamDefValues } from "./AlertRuleAlertMetricParamDefValues";


export class AlertRuleAlertMetricParamDef extends $dara.Model {
  maxWidth?: number;
  minWidth?: number;
  name?: string;
  placeholderCn?: string;
  placeholderEn?: string;
  type?: string;
  value?: string;
  values?: AlertRuleAlertMetricParamDefValues[];
  static names(): { [key: string]: string } {
    return {
      maxWidth: 'maxWidth',
      minWidth: 'minWidth',
      name: 'name',
      placeholderCn: 'placeholderCn',
      placeholderEn: 'placeholderEn',
      type: 'type',
      value: 'value',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxWidth: 'number',
      minWidth: 'number',
      name: 'string',
      placeholderCn: 'string',
      placeholderEn: 'string',
      type: 'string',
      value: 'string',
      values: { 'type': 'array', 'itemType': AlertRuleAlertMetricParamDefValues },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

