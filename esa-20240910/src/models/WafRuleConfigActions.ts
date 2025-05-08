// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleConfigActionsBypass } from "./WafRuleConfigActionsBypass";
import { WafRuleConfigActionsResponse } from "./WafRuleConfigActionsResponse";


export class WafRuleConfigActions extends $dara.Model {
  bypass?: WafRuleConfigActionsBypass;
  response?: WafRuleConfigActionsResponse;
  static names(): { [key: string]: string } {
    return {
      bypass: 'Bypass',
      response: 'Response',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bypass: WafRuleConfigActionsBypass,
      response: WafRuleConfigActionsResponse,
    };
  }

  validate() {
    if(this.bypass && typeof (this.bypass as any).validate === 'function') {
      (this.bypass as any).validate();
    }
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

