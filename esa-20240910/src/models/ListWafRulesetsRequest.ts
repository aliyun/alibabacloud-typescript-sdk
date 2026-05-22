// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafRulesetsRequestQueryArgs extends $dara.Model {
  /**
   * @remarks
   * Fuzzy search for rule set ID, rule set name, rule ID, and rule name.
   * 
   * @example
   * example
   */
  anyLike?: string;
  /**
   * @remarks
   * Whether to sort in descending order.
   */
  desc?: boolean;
  /**
   * @remarks
   * Fuzzy search for rule set name.
   * 
   * @example
   * example
   */
  nameLike?: string;
  /**
   * @remarks
   * Specify the column to sort by.
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
   * Page number, specifying the current page number for paginated queries.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, specifying the number of records per page for paginated queries.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * WAF operation phase, specifying the rule set phase to query.
   * 
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @remarks
   * Query parameters, passed in JSON format, containing various filtering conditions.
   * 
   * @example
   * http_bot
   */
  queryArgs?: ListWafRulesetsRequestQueryArgs;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) interface.
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

