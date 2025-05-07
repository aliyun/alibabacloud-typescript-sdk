// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InsertInterveneRuleRequestInterveneRuleConfigAnswerConfig } from "./InsertInterveneRuleRequestInterveneRuleConfigAnswerConfig";
import { InsertInterveneRuleRequestInterveneRuleConfigEffectConfig } from "./InsertInterveneRuleRequestInterveneRuleConfigEffectConfig";
import { InsertInterveneRuleRequestInterveneRuleConfigInterveneConfigList } from "./InsertInterveneRuleRequestInterveneRuleConfigInterveneConfigList";


export class InsertInterveneRuleRequestInterveneRuleConfig extends $dara.Model {
  answerConfig?: InsertInterveneRuleRequestInterveneRuleConfigAnswerConfig[];
  effectConfig?: InsertInterveneRuleRequestInterveneRuleConfigEffectConfig;
  interveneConfigList?: InsertInterveneRuleRequestInterveneRuleConfigInterveneConfigList[];
  /**
   * @example
   * 0
   */
  interveneType?: number;
  namespaceList?: string[];
  /**
   * @example
   * 2
   */
  ruleId?: number;
  /**
   * @example
   * tf-test-rule
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      answerConfig: 'AnswerConfig',
      effectConfig: 'EffectConfig',
      interveneConfigList: 'InterveneConfigList',
      interveneType: 'InterveneType',
      namespaceList: 'NamespaceList',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerConfig: { 'type': 'array', 'itemType': InsertInterveneRuleRequestInterveneRuleConfigAnswerConfig },
      effectConfig: InsertInterveneRuleRequestInterveneRuleConfigEffectConfig,
      interveneConfigList: { 'type': 'array', 'itemType': InsertInterveneRuleRequestInterveneRuleConfigInterveneConfigList },
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
    if(Array.isArray(this.interveneConfigList)) {
      $dara.Model.validateArray(this.interveneConfigList);
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

