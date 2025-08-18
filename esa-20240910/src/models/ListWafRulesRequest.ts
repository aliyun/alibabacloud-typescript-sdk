// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafRulesRequestQueryArgs extends $dara.Model {
  /**
   * @remarks
   * Fuzzy search for values in IP access control.
   * 
   * @example
   * 10.0.0.1
   */
  configValueLike?: string;
  /**
   * @remarks
   * Whether to reverse the sorting result.
   * 
   * @example
   * true
   */
  desc?: boolean;
  /**
   * @remarks
   * Exact query for WAF rule ID.
   * 
   * @example
   * 20000001
   */
  id?: number;
  /**
   * @remarks
   * Fuzzy query for WAF rule ID or name.
   * 
   * @example
   * example
   */
  idNameLike?: string;
  /**
   * @remarks
   * Fuzzy query for WAF rule name.
   * 
   * @example
   * example
   */
  nameLike?: string;
  /**
   * @remarks
   * Sort the returned list by the specified column.
   * 
   * @example
   * position
   */
  orderBy?: string;
  /**
   * @remarks
   * Exact query for WAF rule status.
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
   * Query page number, used for pagination.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Query page size, used for pagination.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * WAF rule type. Values:
   * 
   * - http_anti_scan: Scan protection
   * - http_bot: Bots
   * 
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @remarks
   * Query filter conditions.
   * 
   * @example
   * http_custom
   */
  queryArgs?: ListWafRulesRequestQueryArgs;
  rulesetId?: number;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  siteId?: number;
  /**
   * @remarks
   * Site version.
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

