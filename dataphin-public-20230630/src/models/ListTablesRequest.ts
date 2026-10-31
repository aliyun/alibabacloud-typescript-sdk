// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTablesRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The asset catalog: project name and business unit name.
   * 
   * @example
   * LD_test01_dev
   */
  catalog?: string;
  /**
   * @remarks
   * The supported keyword: table name.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The ID of the owner.
   * 
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
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The table types. If you do not specify this parameter or pass an empty list, all table types are queried. Valid values:
   * - PHYSICAL_TABLE: Physical table of the compute source.
   * - PHYSICAL_VIEW: View of the compute source.
   * - PHYSICAL_MATERIALIZED_VIEW: Materialized view of the compute source.
   * - STREAM_TABLE: Meta table.
   * - MIRROR_TABLE: Mirror table.
   * - DIM: Logical dimension table.
   * - FACT: Logical fact table.
   * - SUM_BIZ_UNIT: Logical aggregate table.
   * - LOGIC_VIEW: Logical view.
   * - DATASOURCE_TABLE: Data source table.
   * - DATASOURCE_VIEW: Data source view.
   * - DATASOURCE_MATERIALIZED_VIEW: Data source materialized view.
   */
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
   * @remarks
   * The ID of the operator.
   * 
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

