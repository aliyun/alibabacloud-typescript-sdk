// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTablesRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The asset catalog, such as the project name or business unit name.
   * 
   * @example
   * LD_test01_dev
   */
  catalog?: string;
  /**
   * @remarks
   * The keyword for searching. Table names are supported.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @example
   * 30012011
   */
  ownerId?: string;
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
  subTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      keyword: 'Keyword',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      subTypes: 'SubTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      keyword: 'string',
      ownerId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      subTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.subTypes)) {
      $dara.Model.validateArray(this.subTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The paged query conditions.
   */
  listQuery?: ListTablesRequestListQuery;
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
  /**
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListTablesRequestListQuery,
      opTenantId: 'number',
      opUserId: 'string',
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

