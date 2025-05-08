// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafBatchRuleSharedActionsResponse } from "./WafBatchRuleSharedActionsResponse";


export class WafBatchRuleSharedActions extends $dara.Model {
  response?: WafBatchRuleSharedActionsResponse;
  static names(): { [key: string]: string } {
    return {
      response: 'Response',
    };
  }

  static types(): { [key: string]: any } {
    return {
      response: WafBatchRuleSharedActionsResponse,
    };
  }

  validate() {
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

