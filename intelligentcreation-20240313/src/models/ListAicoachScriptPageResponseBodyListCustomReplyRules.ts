// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAICoachScriptPageResponseBodyListCustomReplyRulesAction } from "./ListAicoachScriptPageResponseBodyListCustomReplyRulesAction";
import { ListAICoachScriptPageResponseBodyListCustomReplyRulesMainCondition } from "./ListAicoachScriptPageResponseBodyListCustomReplyRulesMainCondition";
import { ListAICoachScriptPageResponseBodyListCustomReplyRulesSubCondition } from "./ListAicoachScriptPageResponseBodyListCustomReplyRulesSubCondition";


export class ListAICoachScriptPageResponseBodyListCustomReplyRules extends $dara.Model {
  action?: ListAICoachScriptPageResponseBodyListCustomReplyRulesAction;
  logic?: string;
  mainCondition?: ListAICoachScriptPageResponseBodyListCustomReplyRulesMainCondition;
  priority?: number;
  sortNo?: number;
  subCondition?: ListAICoachScriptPageResponseBodyListCustomReplyRulesSubCondition;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      logic: 'logic',
      mainCondition: 'mainCondition',
      priority: 'priority',
      sortNo: 'sortNo',
      subCondition: 'subCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: ListAICoachScriptPageResponseBodyListCustomReplyRulesAction,
      logic: 'string',
      mainCondition: ListAICoachScriptPageResponseBodyListCustomReplyRulesMainCondition,
      priority: 'number',
      sortNo: 'number',
      subCondition: ListAICoachScriptPageResponseBodyListCustomReplyRulesSubCondition,
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

