// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailAnswerConfig } from "./GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailAnswerConfig";
import { GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailEffectConfig } from "./GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailEffectConfig";


export class GetInterveneRuleDetailResponseBodyDataInterveneRuleDetail extends $dara.Model {
  answerConfig?: GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailAnswerConfig[];
  effectConfig?: GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailEffectConfig;
  /**
   * @example
   * 0
   */
  interveneType?: number;
  namespaceList?: string[];
  /**
   * @example
   * 100418
   */
  ruleId?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      answerConfig: 'AnswerConfig',
      effectConfig: 'EffectConfig',
      interveneType: 'InterveneType',
      namespaceList: 'NamespaceList',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerConfig: { 'type': 'array', 'itemType': GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailAnswerConfig },
      effectConfig: GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailEffectConfig,
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
    if(this.effectConfig && typeof (this.effectConfig as any).validate === 'function') {
      (this.effectConfig as any).validate();
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

