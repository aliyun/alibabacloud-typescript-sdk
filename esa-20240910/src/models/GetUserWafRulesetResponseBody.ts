// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafBatchRuleShared } from "./WafBatchRuleShared";
import { WafRuleConfig } from "./WafRuleConfig";


export class GetUserWafRulesetResponseBodyRulesetRules extends $dara.Model {
  /**
   * @remarks
   * The action for the rule. Valid values:
   * 
   * - `deny`: Blocks the request.
   * 
   * - `monitor`: Monitors the request.
   * 
   * - `js`: Triggers a JS challenge.
   * 
   * - `captcha`: Triggers a CAPTCHA challenge.
   * 
   * @example
   * deny
   */
  action?: string;
  /**
   * @remarks
   * A list of WAF rule statistics fields.
   * 
   * @example
   * ["http.host"]
   */
  characteristicsFields?: string[];
  /**
   * @remarks
   * The WAF rule configuration.
   * 
   * @example
   * {
   *   "Id": 20000001,
   *   "Name": "rule1",
   *   "Expression": "ip.src eq 1.1.1.1",
   *   "Action": "deny"
   * }
   */
  config?: WafRuleConfig;
  /**
   * @remarks
   * A list of WAF rule match fields.
   * 
   * @example
   * ["ip.src"]
   */
  fields?: string[];
  /**
   * @remarks
   * The ID of the WAF rule.
   * 
   * @example
   * 20000001
   */
  id?: number;
  /**
   * @remarks
   * The name of the WAF rule.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The evaluation phase of the WAF rule. Valid values:
   * 
   * - `http_whitelist`: A whitelist rule.
   * 
   * - `http_custom`: A custom rule.
   * 
   * - `http_managed`: A managed rule.
   * 
   * - `http_anti_scan`: A scan protection rule.
   * 
   * - `http_ratelimit`: A rate limiting rule.
   * 
   * - `ip_access_rule`: An IP access rule.
   * 
   * - `http_bot`: A bot management rule.
   * 
   * - `http_security_level_rule`: A security level rule.
   * 
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @remarks
   * The position of the WAF rule.
   * 
   * @example
   * 1
   */
  position?: number;
  /**
   * @remarks
   * The ID of the WAF rule set.
   * 
   * @example
   * 10000001
   */
  rulesetId?: number;
  /**
   * @remarks
   * The skip mode for the WAF rule.
   * 
   * @example
   * all
   */
  skip?: string;
  /**
   * @remarks
   * The status of the WAF rule.
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * The phases that the rule skips.
   * 
   * @example
   * ["http_custom"]
   */
  tags?: string[];
  /**
   * @remarks
   * The type of the WAF rule.
   * 
   * @example
   * http_ratelimit
   */
  type?: string;
  /**
   * @remarks
   * The time the WAF rule was last updated.
   * 
   * @example
   * 2025-07-07T15:00:00Z
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
  /**
   * @remarks
   * The description of the WAF rule set.
   * 
   * @example
   * example
   */
  description?: string;
  /**
   * @remarks
   * The expression of the WAF rule set.
   * 
   * @example
   * ip.src == 1.1.1.1
   */
  expression?: string;
  /**
   * @remarks
   * The ID of the WAF rule set.
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @remarks
   * The name of the WAF rule set.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The evaluation phase of the WAF rule set. Valid values:
   * 
   * - `http_whitelist`: A whitelist rule.
   * 
   * - `http_custom`: A custom rule.
   * 
   * - `http_managed`: A managed rule.
   * 
   * - `http_anti_scan`: A scan protection rule.
   * 
   * - `http_ratelimit`: A rate limiting rule.
   * 
   * - `ip_access_rule`: An IP access rule.
   * 
   * - `http_bot`: A bot management rule.
   * 
   * - `http_security_level_rule`: A security level rule.
   * 
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @remarks
   * The position of the WAF rule set.
   * 
   * @example
   * 1
   */
  position?: number;
  /**
   * @remarks
   * A list of rules in the WAF rule set.
   * 
   * @example
   * [{}]
   */
  rules?: GetUserWafRulesetResponseBodyRulesetRules[];
  /**
   * @remarks
   * The shared configuration of the WAF rule set.
   * 
   * @example
   * {}
   */
  shared?: WafBatchRuleShared;
  /**
   * @remarks
   * The status of the WAF rule set.
   * 
   * @example
   * on
   */
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
   * @remarks
   * The request ID.
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @remarks
   * The WAF rule set.
   * 
   * @example
   * {}
   */
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

