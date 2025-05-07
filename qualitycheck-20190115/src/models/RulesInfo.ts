// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConditionBasicInfo } from "./ConditionBasicInfo";
import { RuleTestDialogue } from "./RuleTestDialogue";
import { RuleInfo } from "./RuleInfo";


export class RulesInfo extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  conditions?: ConditionBasicInfo[];
  count?: number;
  /**
   * **if can be null:**
   * true
   */
  dialogues?: RuleTestDialogue[];
  pageNumber?: number;
  pageSize?: number;
  rules?: RuleInfo[];
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      count: 'Count',
      dialogues: 'Dialogues',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': ConditionBasicInfo },
      count: 'number',
      dialogues: { 'type': 'array', 'itemType': RuleTestDialogue },
      pageNumber: 'number',
      pageSize: 'number',
      rules: { 'type': 'array', 'itemType': RuleInfo },
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    if(Array.isArray(this.dialogues)) {
      $dara.Model.validateArray(this.dialogues);
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

