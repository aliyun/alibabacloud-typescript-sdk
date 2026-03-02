// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MonitorAlertRuleNamesResult extends $dara.Model {
  ruleNames?: string[];
  static names(): { [key: string]: string } {
    return {
      ruleNames: 'ruleNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ruleNames)) {
      $dara.Model.validateArray(this.ruleNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

