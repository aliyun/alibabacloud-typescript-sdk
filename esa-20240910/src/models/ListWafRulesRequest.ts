// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafRulesRequestQueryArgs extends $dara.Model {
  /**
   * @remarks
   * The fuzzy value to search for in IP access control.
   * 
   * @example
   * 10.0.0.1
   */
  configValueLike?: string;
  /**
   * @remarks
   * Specifies whether to reverse the sort order.
   * 
   * @example
   * true
   */
  desc?: boolean;
  /**
   * @remarks
   * The exact WAF rule ID to query.
   * 
   * @example
   * 20000001
   */
  id?: number;
  /**
   * @remarks
   * The fuzzy WAF rule ID or name to query.
   * 
   * @example
   * example
   */
  idNameLike?: string;
  /**
   * @remarks
   * The fuzzy WAF rule name to query.
   * 
   * @example
   * example
   */
  nameLike?: string;
  /**
   * @remarks
   * The column by which to sort the returned list.
   * 
   * @example
   * position
   */
  orderBy?: string;
  /**
   * @remarks
   * The exact WAF rule status to query.
   * 
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configValueLike: 'ConfigValueLike',
      desc: 'Desc',
      id: 'Id',
      idNameLike: 'IdNameLike',
      nameLike: 'NameLike',
      orderBy: 'OrderBy',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValueLike: 'string',
      desc: 'boolean',
      id: 'number',
      idNameLike: 'string',
      nameLike: 'string',
      orderBy: 'string',
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

export class ListWafRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number for pagination.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size for pagination.
   * 
   * @example
   * 20
   */
  pageSize?: number;
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
   * This parameter is required.
   * 
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @remarks
   * The query filter conditions.
   * 
   * @example
   * http_custom
   */
  queryArgs?: ListWafRulesRequestQueryArgs;
  /**
   * @remarks
   * The ID of the WAF ruleset. You can call the [ListWafRulesets](https://help.aliyun.com/document_detail/2878359.html) operation to obtain the ruleset ID.
   * 
   * @example
   * 10000001
   */
  rulesetId?: number;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  siteId?: number;
  /**
   * @remarks
   * The version number of the site configuration. For sites with configuration version management enabled, you can use this parameter to specify the site version for which the configuration takes effect. Default value: 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      phase: 'Phase',
      queryArgs: 'QueryArgs',
      rulesetId: 'RulesetId',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      phase: 'string',
      queryArgs: ListWafRulesRequestQueryArgs,
      rulesetId: 'number',
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  validate() {
    if(this.queryArgs && typeof (this.queryArgs as any).validate === 'function') {
      (this.queryArgs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

