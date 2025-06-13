// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRulesAttributeRequestRulesRuleActionsInsertHeaderConfig extends $dara.Model {
  coverEnabled?: boolean;
  key?: string;
  value?: string;
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      coverEnabled: 'CoverEnabled',
      key: 'Key',
      value: 'Value',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverEnabled: 'boolean',
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

