// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInterveneRulesResponseBodyDataInterveneRuleListAnswerConfig } from "./ListInterveneRulesResponseBodyDataInterveneRuleListAnswerConfig";


export class ListInterveneRulesResponseBodyDataInterveneRuleList extends $dara.Model {
  answerConfig?: ListInterveneRulesResponseBodyDataInterveneRuleListAnswerConfig[];
  /**
   * @example
   * 2023-06-05 15:17:01
   */
  createTime?: string;
  /**
   * @example
   * 2023-04-03 02:42:01
   */
  effectTime?: string;
  /**
   * @example
   * 0
   */
  interveneType?: number;
  namespaceList?: string[];
  /**
   * @example
   * mr-iuo9pi9w555phfbb
   */
  ruleId?: number;
  /**
   * @example
   * ruletest
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      answerConfig: 'AnswerConfig',
      createTime: 'CreateTime',
      effectTime: 'EffectTime',
      interveneType: 'InterveneType',
      namespaceList: 'NamespaceList',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerConfig: { 'type': 'array', 'itemType': ListInterveneRulesResponseBodyDataInterveneRuleListAnswerConfig },
      createTime: 'string',
      effectTime: 'string',
      interveneType: 'number',
      namespaceList: { 'type': 'array', 'itemType': 'string' },
      ruleId: 'number',
      ruleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.answerConfig)) {
      $dara.Model.validateArray(this.answerConfig);
    }
    if(Array.isArray(this.namespaceList)) {
      $dara.Model.validateArray(this.namespaceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

