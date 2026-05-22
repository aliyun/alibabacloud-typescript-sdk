// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafRulesRequestQueryArgs extends $dara.Model {
  configValueLike?: string;
  desc?: boolean;
  /**
   * @example
   * 20000001
   */
  id?: number;
  /**
   * @example
   * example
   */
  idNameLike?: string;
  /**
   * @example
   * example
   */
  nameLike?: string;
  /**
   * @example
   * position
   */
  orderBy?: string;
  /**
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
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http_custom
   */
  phase?: string;
  queryArgs?: ListWafRulesRequestQueryArgs;
  rulesetId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  siteId?: number;
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

