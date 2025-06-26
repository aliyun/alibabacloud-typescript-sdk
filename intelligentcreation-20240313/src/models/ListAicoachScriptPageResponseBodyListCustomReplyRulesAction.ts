// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAICoachScriptPageResponseBodyListCustomReplyRulesActionParameters } from "./ListAicoachScriptPageResponseBodyListCustomReplyRulesActionParameters";


export class ListAICoachScriptPageResponseBodyListCustomReplyRulesAction extends $dara.Model {
  parameters?: ListAICoachScriptPageResponseBodyListCustomReplyRulesActionParameters;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'parameters',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: ListAICoachScriptPageResponseBodyListCustomReplyRulesActionParameters,
      type: 'string',
    };
  }

  validate() {
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

