// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafRulesetsResponseBodyRulesets extends $dara.Model {
  /**
   * @remarks
   * A list of match fields.
   */
  fields?: string[];
  /**
   * @remarks
   * The ID of the WAF ruleset. This value is returned by the [ListWafRulesets](https://help.aliyun.com/document_detail/2878359.html) operation.
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
   * The execution phase of the ruleset. Valid values are:
   * 
   * - `http_whitelist`: whitelist rule
   * 
   * - `http_custom`: custom rule
   * 
   * - `http_managed`: managed rule
   * 
   * - `http_anti_scan`: scan protection rule
   * 
   * - `http_ratelimit`: rate limiting rule
   * 
   * - `ip_access_rule`: IP access rule
   * 
   * - `http_bot`: advanced bot protection
   * 
   * - `http_security_level_rule`: security rule
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
   * The protection target for the \\"http_bot\\" phase.
   * 
   * @example
   * web
   */
  target?: string;
  /**
   * @remarks
   * A list of rule types.
   */
  types?: string[];
  /**
   * @remarks
   * The time the ruleset was last modified.
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
   * The number of WAF rulesets used by the instance in this WAF phase.
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
   * A list of rulesets.
   */
  rulesets?: ListWafRulesetsResponseBodyRulesets[];
  /**
   * @remarks
   * The number of WAF rulesets used by the site in this WAF phase.
   * 
   * @example
   * 5
   */
  siteUsage?: number;
  /**
   * @remarks
   * The total number of entries returned after filtering.
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

