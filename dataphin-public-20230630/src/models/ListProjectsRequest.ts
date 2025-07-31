// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsRequestListQuery extends $dara.Model {
  /**
   * @example
   * DEV
   */
  env?: string;
  /**
   * @example
   * test
   */
  keyword?: string;
  /**
   * @example
   * BASIC
   */
  mode?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
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
   * This parameter is required.
   */
  listQuery?: ListProjectsRequestListQuery;
  /**
   * @remarks
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

