// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The environment identifier.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The keyword for fuzzy match.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The project mode.
   * 
   * @example
   * BASIC
   */
  mode?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of records per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The project tags.
   */
  tagList?: string[];
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      keyword: 'Keyword',
      mode: 'Mode',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      tagList: 'TagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      keyword: 'string',
      mode: 'string',
      pageNo: 'number',
      pageSize: 'number',
      tagList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsRequest extends $dara.Model {
  /**
   * @remarks
   * The query conditions.
   * 
   * This parameter is required.
   */
  listQuery?: ListProjectsRequestListQuery;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListProjectsRequestListQuery,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.listQuery && typeof (this.listQuery as any).validate === 'function') {
      (this.listQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

