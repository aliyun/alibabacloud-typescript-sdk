// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcePermissionsRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The search keyword.
   * 
   * @example
   * xxTest
   */
  searchText?: string;
  /**
   * @remarks
   * The tab type. Valid values:
   * 
   * - TABLE: table.
   * - DATASOURCE: datasource.
   * 
   * This parameter is required.
   * 
   * @example
   * TABLE
   */
  tabType?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
      searchText: 'SearchText',
      tabType: 'TabType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      searchText: 'string',
      tabType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionsRequest extends $dara.Model {
  /**
   * @remarks
   * The paged query request.
   * 
   * This parameter is required.
   */
  listQuery?: ListResourcePermissionsRequestListQuery;
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
      listQuery: ListResourcePermissionsRequestListQuery,
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

