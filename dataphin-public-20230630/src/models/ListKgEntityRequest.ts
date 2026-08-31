// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKgEntityRequestListQueryFilterList extends $dara.Model {
  /**
   * @remarks
   * The operator. Valid values:
   * - eq: equal to.
   * - neq: not equal to.
   * - contains: contains.
   * - gt: greater than.
   * - gte: greater than or equal to.
   * - lt: less than.
   * - lte: less than or equal to.
   * - like: fuzzy match.
   * 
   * This parameter is required.
   * 
   * @example
   * eq
   */
  op?: string;
  /**
   * @remarks
   * The property code.
   * 
   * This parameter is required.
   * 
   * @example
   * company_name
   */
  propertyCode?: string;
  /**
   * @remarks
   * The property match value.
   * 
   * This parameter is required.
   * 
   * @example
   * Alibaba
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      op: 'Op',
      propertyCode: 'PropertyCode',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      op: 'string',
      propertyCode: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKgEntityRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The property filter conditions.
   */
  filterList?: ListKgEntityRequestListQueryFilterList[];
  /**
   * @remarks
   * The keyword for searching display properties.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of records per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      filterList: 'FilterList',
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterList: { 'type': 'array', 'itemType': ListKgEntityRequestListQueryFilterList },
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.filterList)) {
      $dara.Model.validateArray(this.filterList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKgEntityRequest extends $dara.Model {
  /**
   * @remarks
   * The entity type code.
   * 
   * @example
   * Company
   */
  entityType?: string;
  /**
   * @remarks
   * The paged query filter conditions.
   */
  listQuery?: ListKgEntityRequestListQuery;
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
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * f1d4559a4db044158305e2d89bccf81f
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      entityType: 'EntityType',
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityType: 'string',
      listQuery: ListKgEntityRequestListQuery,
      opTenantId: 'number',
      opUserId: 'string',
      workspaceId: 'string',
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

