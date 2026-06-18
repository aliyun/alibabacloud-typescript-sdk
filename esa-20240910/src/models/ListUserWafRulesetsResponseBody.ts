// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserWafRulesetsResponseBodyRulesets extends $dara.Model {
  /**
   * @remarks
   * The WAF ruleset description.
   * 
   * @example
   * example
   */
  description?: string;
  /**
   * @remarks
   * The WAF ruleset ID.
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @remarks
   * The WAF ruleset name.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The WAF rule execution phase. Possible values:
   * 
   * - `http_whitelist`: Whitelist rule
   * 
   * - `http_custom`: Custom rule
   * 
   * - `http_managed`: Managed rule
   * 
   * - `http_anti_scan`: Scan protection rule
   * 
   * - `http_ratelimit`: Rate limit rule
   * 
   * - `ip_access_rule`: IP access rule
   * 
   * - `http_bot`: Bot rule
   * 
   * - `http_security_level_rule`: Security rule
   * 
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @remarks
   * The WAF ruleset position.
   * 
   * @example
   * 1
   */
  position?: number;
  /**
   * @remarks
   * The WAF ruleset status.
   * 
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      name: 'Name',
      phase: 'Phase',
      position: 'Position',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      name: 'string',
      phase: 'string',
      position: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserWafRulesetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance usage.
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
   * The number of entries returned per page.
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
   * A list of WAF ruleset objects.
   */
  rulesets?: ListUserWafRulesetsResponseBodyRulesets[];
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
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceUsage: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      rulesets: { 'type': 'array', 'itemType': ListUserWafRulesetsResponseBodyRulesets },
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

