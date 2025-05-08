// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RulesValueRulesSpringcloud } from "./RulesValueRulesSpringcloud";
import { RulesValueRulesDubbo } from "./RulesValueRulesDubbo";


export class RulesValueRules extends $dara.Model {
  springcloud?: RulesValueRulesSpringcloud[];
  dubbo?: RulesValueRulesDubbo[];
  static names(): { [key: string]: string } {
    return {
      springcloud: 'springcloud',
      dubbo: 'dubbo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      springcloud: { 'type': 'array', 'itemType': RulesValueRulesSpringcloud },
      dubbo: { 'type': 'array', 'itemType': RulesValueRulesDubbo },
    };
  }

  validate() {
    if(Array.isArray(this.springcloud)) {
      $dara.Model.validateArray(this.springcloud);
    }
    if(Array.isArray(this.dubbo)) {
      $dara.Model.validateArray(this.dubbo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

