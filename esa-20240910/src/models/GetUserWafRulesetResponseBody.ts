// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafBatchRuleShared } from "./WafBatchRuleShared";
import { WafRuleConfig } from "./WafRuleConfig";


export class GetUserWafRulesetResponseBodyRulesetRules extends $dara.Model {
  action?: string;
  characteristicsFields?: string[];
  config?: WafRuleConfig;
  fields?: string[];
  id?: number;
  name?: string;
  phase?: string;
  position?: number;
  rulesetId?: number;
  skip?: string;
  status?: string;
  tags?: string[];
  type?: string;
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserWafRulesetResponseBodyRuleset extends $dara.Model {
  description?: string;
  expression?: string;
  id?: number;
  name?: string;
  phase?: string;
  position?: number;
  rules?: GetUserWafRulesetResponseBodyRulesetRules[];
  shared?: WafBatchRuleShared;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      expression: 'Expression',
      id: 'Id',
      name: 'Name',
      phase: 'Phase',
      position: 'Position',
      rules: 'Rules',
      shared: 'Shared',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      expression: 'string',
      id: 'number',
      name: 'string',
      phase: 'string',
      position: 'number',
      rules: { 'type': 'array', 'itemType': GetUserWafRulesetResponseBodyRulesetRules },
      shared: WafBatchRuleShared,
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    if(this.shared && typeof (this.shared as any).validate === 'function') {
      (this.shared as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserWafRulesetResponseBody extends $dara.Model {
  /**
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  ruleset?: GetUserWafRulesetResponseBodyRuleset;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleset: 'Ruleset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleset: GetUserWafRulesetResponseBodyRuleset,
    };
  }

  validate() {
    if(this.ruleset && typeof (this.ruleset as any).validate === 'function') {
      (this.ruleset as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

