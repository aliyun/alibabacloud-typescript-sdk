// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleConditionCaseList extends $dara.Model {
  condition?: string;
  countCondition?: string;
  level?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      countCondition: 'countCondition',
      level: 'level',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      countCondition: 'string',
      level: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

