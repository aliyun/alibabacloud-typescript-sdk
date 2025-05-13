// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleConditionCompareListValueLevelList extends $dara.Model {
  level?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      level: 'level',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

