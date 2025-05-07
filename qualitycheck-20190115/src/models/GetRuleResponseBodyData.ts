// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRuleResponseBodyDataRules } from "./GetRuleResponseBodyDataRules";


export class GetRuleResponseBodyData extends $dara.Model {
  rules?: GetRuleResponseBodyDataRules;
  static names(): { [key: string]: string } {
    return {
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rules: GetRuleResponseBodyDataRules,
    };
  }

  validate() {
    if(this.rules && typeof (this.rules as any).validate === 'function') {
      (this.rules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

