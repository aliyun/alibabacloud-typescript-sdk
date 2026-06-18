// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleConfig } from "./WafRuleConfig";
import { WafTimer } from "./WafTimer";


export class ListWafRulesResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * The action to take when a rule matches.
   * 
   * - `deny`: Block the request.
   * 
   * - `monitor`: Log the request without blocking it.
   * 
   * - `js`: Issue a JS challenge.
   * 
   * - `captcha`: Issue a CAPTCHA challenge.
   * 
   * @example
   * deny
   */
  action?: string;
  /**
   * @remarks
   * A list of tracking characteristics for rate limit rules.
   */
  characteristicsFields?: string[];
  /**
   * @remarks
   * The rule configuration object.
   */
  config?: WafRuleConfig;
  /**
   * @remarks
   * An array of match fields for the rule.
   */
  fields?: string[];
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 20000001
   */
  id?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The WAF rule\\"s execution phase.
   * 
   * - `http_whitelist`: Whitelist rule.
   * 
   * - `http_custom`: Custom rule.
   * 
   * - `http_managed`: Managed rule.
   * 
   * - `http_anti_scan`: Scan protection rule.
   * 
   * - `http_ratelimit`: Rate limit rule.
   * 
   * - `ip_access_rule`: IP access rule.
   * 
   * - `http_bot`: Advanced bot management rule.
   * 
   * - `http_security_level_rule`: Security level rule.
   * 
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @remarks
   * The position of the rule within the ruleset.
   * 
   * @example
   * 1
   */
  position?: number;
  /**
   * @remarks
   * The ID of the ruleset.
   * 
   * @example
   * 10000001
   */
  rulesetId?: number;
  /**
   * @remarks
   * The skip behavior for whitelist rules.
   * 
   * @example
   * part
   */
  skip?: string;
  /**
   * @remarks
   * The status of the rule.
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * An array of WAF phases to skip when the whitelist rule matches.
   */
  tags?: string[];
  /**
   * @remarks
   * The effective time configuration for the rule.
   */
  timer?: WafTimer;
  /**
   * @remarks
   * The type of the rule.
   * 
   * @example
   * http_custom
   */
  type?: string;
  /**
   * @remarks
   * When the rule was last updated.
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

export class ListWafRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of rules used in this WAF phase for the site\\"s instance.
   * 
   * @example
   * 10
   */
  instanceUsage?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of items per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
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
   * An array of rule objects.
   */
  rules?: ListWafRulesResponseBodyRules[];
  /**
   * @remarks
   * The number of rules used by the site.
   * 
   * @example
   * 5
   */
  siteUsage?: number;
  /**
   * @remarks
   * The total number of filtered rules.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceUsage: 'InstanceUsage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      rules: 'Rules',
      siteUsage: 'SiteUsage',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceUsage: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': ListWafRulesResponseBodyRules },
      siteUsage: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

