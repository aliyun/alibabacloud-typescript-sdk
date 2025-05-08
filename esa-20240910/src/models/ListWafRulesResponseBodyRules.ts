// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleConfig } from "./WafRuleConfig";
import { WafTimer } from "./WafTimer";


export class ListWafRulesResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * The action corresponding to the rule.
   * 
   * @example
   * deny
   */
  action?: string;
  /**
   * @remarks
   * List of statistical objects for frequency control rules.
   */
  characteristicsFields?: string[];
  /**
   * @remarks
   * Rule configuration.
   */
  config?: WafRuleConfig;
  /**
   * @remarks
   * List of fields for rule matching
   */
  fields?: string[];
  /**
   * @remarks
   * Rule ID.
   * 
   * @example
   * 20000001
   */
  id?: number;
  /**
   * @remarks
   * Rule name.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * WAF phase.
   * 
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @remarks
   * Position order of the rule in the corresponding ruleset.
   * 
   * @example
   * 1
   */
  position?: number;
  /**
   * @remarks
   * Ruleset ID.
   * 
   * @example
   * 10000001
   */
  rulesetId?: number;
  /**
   * @remarks
   * Skip attribute for whitelist rules.
   * 
   * @example
   * part
   */
  skip?: string;
  /**
   * @remarks
   * Rule status.
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * List of WAF phases to be skipped by whitelist rules.
   */
  tags?: string[];
  /**
   * @remarks
   * Configuration for the effective time of the rule.
   */
  timer?: WafTimer;
  /**
   * @remarks
   * Rule type.
   * 
   * @example
   * http_custom
   */
  type?: string;
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      characteristicsFields: 'CharacteristicsFields',
      config: 'Config',
      fields: 'Fields',
      id: 'Id',
      name: 'Name',
      phase: 'Phase',
      position: 'Position',
      rulesetId: 'RulesetId',
      skip: 'Skip',
      status: 'Status',
      tags: 'Tags',
      timer: 'Timer',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      characteristicsFields: { 'type': 'array', 'itemType': 'string' },
      config: WafRuleConfig,
      fields: { 'type': 'array', 'itemType': 'string' },
      id: 'number',
      name: 'string',
      phase: 'string',
      position: 'number',
      rulesetId: 'number',
      skip: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      timer: WafTimer,
      type: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.characteristicsFields)) {
      $dara.Model.validateArray(this.characteristicsFields);
    }
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.timer && typeof (this.timer as any).validate === 'function') {
      (this.timer as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

