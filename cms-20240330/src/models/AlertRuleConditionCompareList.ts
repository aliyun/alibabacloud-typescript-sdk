// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlertRuleConditionCompareListValueLevelList } from "./AlertRuleConditionCompareListValueLevelList";


export class AlertRuleConditionCompareList extends $dara.Model {
  aggregate?: string;
  oper?: string;
  value?: number;
  valueLevelList?: AlertRuleConditionCompareListValueLevelList[];
  yoyTimeUnit?: string;
  yoyTimeValue?: number;
  static names(): { [key: string]: string } {
    return {
      aggregate: 'aggregate',
      oper: 'oper',
      value: 'value',
      valueLevelList: 'valueLevelList',
      yoyTimeUnit: 'yoyTimeUnit',
      yoyTimeValue: 'yoyTimeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregate: 'string',
      oper: 'string',
      value: 'number',
      valueLevelList: { 'type': 'array', 'itemType': AlertRuleConditionCompareListValueLevelList },
      yoyTimeUnit: 'string',
      yoyTimeValue: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.valueLevelList)) {
      $dara.Model.validateArray(this.valueLevelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

