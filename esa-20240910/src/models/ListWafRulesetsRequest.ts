// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafRulesetsRequestQueryArgs extends $dara.Model {
  /**
   * @remarks
   * A keyword for a fuzzy search on the ID or name of a ruleset or rule.
   * 
   * @example
   * example
   */
  anyLike?: string;
  /**
   * @remarks
   * Specifies whether to sort in descending order.
   */
  desc?: boolean;
  /**
   * @remarks
   * A keyword for a fuzzy search on ruleset names.
   * 
   * @example
   * example
   */
  nameLike?: string;
  /**
   * @remarks
   * Specifies the field for sorting the results.
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
   * The page number for pagination.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The execution phase for WAF rules.
   * 
   * - `http_whitelist`: whitelist rule
   * 
   * - `http_custom`: custom rule
   * 
   * - `http_managed`: managed rule
   * 
   * - `http_anti_scan`: scan protection rule
   * 
   * - `http_ratelimit`: rate-limiting rule
   * 
   * - `ip_access_rule`: IP access rule
   * 
   * - `http_bot`: bot rule
   * 
   * - `http_security_level_rule`: security rule
   * 
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @remarks
   * A JSON object containing query parameters for filtering.
   * 
   * @example
   * http_bot
   */
  queryArgs?: ListWafRulesetsRequestQueryArgs;
  /**
   * @remarks
   * The ID of the site. Get this ID by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) API.
   * 
   * @example
   * 1
   */
  siteId?: number;
  /**
   * @remarks
   * The site\\"s configuration version. For sites with configuration version management enabled, use this parameter to specify the version. The default is 0.
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

