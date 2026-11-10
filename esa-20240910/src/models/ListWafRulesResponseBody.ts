// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleConfig } from "./WafRuleConfig";
import { WafTimer } from "./WafTimer";


export class ListWafRulesResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * The action corresponding to the rule. Valid values:
   * - deny: block
   * - monitor: monitor
   * - js: JavaScript challenge
   * - captcha: slider challenge
   * 
   * @example
   * deny
   */
  action?: string;
  /**
   * @remarks
   * The list of statistical objects for rate limiting rules.
   */
  characteristicsFields?: string[];
  /**
   * @remarks
   * The rule configuration.
   */
  config?: WafRuleConfig;
  /**
   * @remarks
   * The list of match fields for the rule.
   */
  fields?: string[];
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 20000001
   */
  id?: number;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The execution phase of the WAF rule. Valid values:
   * - http_whitelist: whitelist rules
   * - http_custom: custom rules
   * - http_managed: managed rules
   * - http_anti_scan: scan protection rules
   * - http_ratelimit: rate limiting rules
   * - ip_access_rule: IP access rules
   * - http_bot: advanced bot management
   * - http_security_level_rule: security rules
   * 
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @remarks
   * The position sequence of the rule in the corresponding ruleset.
   * 
   * @example
   * 1
   */
  position?: number;
  /**
   * @remarks
   * The ruleset ID.
   * 
   * @example
   * 10000001
   */
  rulesetId?: number;
  /**
   * @remarks
   * The skip property for whitelist rules.
   * 
   * @example
   * part
   */
  skip?: string;
  /**
   * @remarks
   * The rule status.
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * The list of skipped WAF phases for whitelist rules.
   */
  tags?: string[];
  /**
   * @remarks
   * The effective period configuration of the rule.
   */
  timer?: WafTimer;
  /**
   * @remarks
   * The rule type.
   * 
   * @example
   * http_custom
   */
  type?: string;
  /**
   * @remarks
   * The last update time of the rule.
   * 
   * Format: RFC 3339 or ISO 8601, UTC time zone (ending with Z).
   * 
   * Example: 2026-06-10T14:23:45Z
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
   * The number of rules used in the WAF phase for the instance associated with the site.
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
   * The page size.
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
   * The returned list of rules.
   */
  rules?: ListWafRulesResponseBodyRules[];
  /**
   * @remarks
   * The site usage.
   * 
   * @example
   * 5
   */
  siteUsage?: number;
  /**
   * @remarks
   * The total number of rules after filtering.
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

