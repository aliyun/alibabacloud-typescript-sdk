// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAICoachScriptResponseBodyCustomReplyRulesAction } from "./GetAicoachScriptResponseBodyCustomReplyRulesAction";
import { GetAICoachScriptResponseBodyCustomReplyRulesMainCondition } from "./GetAicoachScriptResponseBodyCustomReplyRulesMainCondition";
import { GetAICoachScriptResponseBodyCustomReplyRulesSubCondition } from "./GetAicoachScriptResponseBodyCustomReplyRulesSubCondition";


export class GetAICoachScriptResponseBodyCustomReplyRules extends $dara.Model {
  action?: GetAICoachScriptResponseBodyCustomReplyRulesAction;
  logic?: string;
  mainCondition?: GetAICoachScriptResponseBodyCustomReplyRulesMainCondition;
  priority?: number;
  subCondition?: GetAICoachScriptResponseBodyCustomReplyRulesSubCondition;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      logic: 'logic',
      mainCondition: 'mainCondition',
      priority: 'priority',
      subCondition: 'subCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: GetAICoachScriptResponseBodyCustomReplyRulesAction,
      logic: 'string',
      mainCondition: GetAICoachScriptResponseBodyCustomReplyRulesMainCondition,
      priority: 'number',
      subCondition: GetAICoachScriptResponseBodyCustomReplyRulesSubCondition,
    };
  }

  validate() {
    if(this.action && typeof (this.action as any).validate === 'function') {
      (this.action as any).validate();
    }
    if(this.mainCondition && typeof (this.mainCondition as any).validate === 'function') {
      (this.mainCondition as any).validate();
    }
    if(this.subCondition && typeof (this.subCondition as any).validate === 'function') {
      (this.subCondition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

