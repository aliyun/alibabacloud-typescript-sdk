// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafRulesetsResponseBodyRulesets extends $dara.Model {
  /**
   * @remarks
   * The list of match objects.
   */
  fields?: string[];
  /**
   * @remarks
   * The ID of the WAF ruleset. You can call the [ListWafRulesets](https://help.aliyun.com/document_detail/2878359.html) operation to obtain the ruleset ID.
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @remarks
   * The ruleset name.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The WAF rule execution phase. Valid values:
   * - http_whitelist: whitelist rules
   * - http_custom: custom rules
   * - http_managed: managed rules
   * - http_anti_scan: scan protection rules
   * - http_ratelimit: frequency control rules
   * - ip_access_rule: IP access rules
   * - http_bot: advanced mode bots
   * - http_security_level_rule: security rules
   * 
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @remarks
   * The ruleset status.
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * The protection target type in http_bot.
   * 
   * @example
   * web
   */
  target?: string;
  /**
   * @remarks
   * The list of rule types.
   */
  types?: string[];
  /**
   * @remarks
   * The last modification time of the ruleset.
   * 
   * Format: RFC 3339 / ISO 8601, UTC time zone (ending with Z).
   * 
   * Example: 2026-06-10T14:23:45Z
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
      id: 'Id',
      name: 'Name',
      phase: 'Phase',
      status: 'Status',
      target: 'Target',
      types: 'Types',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': 'string' },
      id: 'number',
      name: 'string',
      phase: 'string',
      status: 'string',
      target: 'string',
      types: { 'type': 'array', 'itemType': 'string' },
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafRulesetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of WAF rulesets used by the instance in this WAF execution phase.
   * 
   * @example
   * 10
   */
  instanceUsage?: number;
  /**
   * @remarks
   * The current page number.
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
   * The list of rulesets, including detailed information about each ruleset.
   */
  rulesets?: ListWafRulesetsResponseBodyRulesets[];
  /**
   * @remarks
   * The number of WAF rulesets used by the site in this WAF execution phase.
   * 
   * @example
   * 5
   */
  siteUsage?: number;
  /**
   * @remarks
   * The total number of records after filtering.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceUsage: 'InstanceUsage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      rulesets: 'Rulesets',
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
      rulesets: { 'type': 'array', 'itemType': ListWafRulesetsResponseBodyRulesets },
      siteUsage: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rulesets)) {
      $dara.Model.validateArray(this.rulesets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

