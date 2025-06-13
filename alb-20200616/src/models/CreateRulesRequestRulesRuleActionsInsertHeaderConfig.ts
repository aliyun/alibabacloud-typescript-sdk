// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRulesRequestRulesRuleActionsInsertHeaderConfig extends $dara.Model {
  key?: string;
  value?: string;
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      valueType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

