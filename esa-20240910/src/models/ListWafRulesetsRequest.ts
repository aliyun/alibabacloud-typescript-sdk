// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafRulesetsRequestQueryArgs extends $dara.Model {
  /**
   * @remarks
   * The fuzzy match string for the ruleset ID, ruleset name, rule ID, or rule name.
   * 
   * @example
   * example
   */
  anyLike?: string;
  /**
   * @remarks
   * Specifies whether to sort the results in descending order.
   */
  desc?: boolean;
  /**
   * @remarks
   * The fuzzy match string for the ruleset name.
   * 
   * @example
   * example
   */
  nameLike?: string;
  /**
   * @remarks
   * The column by which to sort the results.
   * 
   * @example
   * id
   */
  orderBy?: string;
  static names(): { [key: string]: string } {
    return {
      anyLike: 'AnyLike',
      desc: 'Desc',
      nameLike: 'NameLike',
      orderBy: 'OrderBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anyLike: 'string',
      desc: 'boolean',
      nameLike: 'string',
      orderBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafRulesetsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Specifies the current page number for paging queries.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. Specifies the number of records per page for paging queries.
   * 
   * @example
   * 20
   */
  pageSize?: number;
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
   * The query parameters, passed in JSON format, including various filter conditions.
   * 
   * @example
   * http_bot
   */
  queryArgs?: ListWafRulesetsRequestQueryArgs;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the site ID.
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
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      phase: 'string',
      queryArgs: ListWafRulesetsRequestQueryArgs,
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

