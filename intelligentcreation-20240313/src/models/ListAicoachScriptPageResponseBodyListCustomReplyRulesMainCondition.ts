// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAICoachScriptPageResponseBodyListCustomReplyRulesMainConditionParameters } from "./ListAicoachScriptPageResponseBodyListCustomReplyRulesMainConditionParameters";


export class ListAICoachScriptPageResponseBodyListCustomReplyRulesMainCondition extends $dara.Model {
  parameters?: ListAICoachScriptPageResponseBodyListCustomReplyRulesMainConditionParameters;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'parameters',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: ListAICoachScriptPageResponseBodyListCustomReplyRulesMainConditionParameters,
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

