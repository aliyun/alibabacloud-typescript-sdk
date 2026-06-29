// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecurityIdentifyRecordsRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The datasource environment identifier. This parameter is required only for datasource tables.
   * 
   * @example
   * DEV
   */
  datasourceEnv?: string;
  /**
   * @remarks
   * The datasource name. This parameter is required only for datasource tables.
   * 
   * @example
   * test
   */
  datasourceName?: string;
  /**
   * @remarks
   * The field name.
   * 
   * This parameter is required.
   * 
   * @example
   * col1
   */
  fieldName?: string;
  /**
   * @remarks
   * Specifies whether the table is a datasource table. Default value: false (treated as a Dataphin table).
   */
  isDatasourceTable?: boolean;
  /**
   * @remarks
   * The search keyword. The search scope is the field name.
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
   * The table catalog. For datasource tables, specify the database or schema name. For Dataphin physical tables, specify the project name in English. For Dataphin logical tables, specify the business unit name in English.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  tableCatalog?: string;
  /**
   * @remarks
   * The table name.
   * 
   * This parameter is required.
   * 
   * @example
   * t_test
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      datasourceEnv: 'DatasourceEnv',
      datasourceName: 'DatasourceName',
      fieldName: 'FieldName',
      isDatasourceTable: 'IsDatasourceTable',
      keyword: 'Keyword',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      tableCatalog: 'TableCatalog',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceEnv: 'string',
      datasourceName: 'string',
      fieldName: 'string',
      isDatasourceTable: 'boolean',
      keyword: 'string',
      pageNo: 'number',
      pageSize: 'number',
      tableCatalog: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityIdentifyRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The query conditions.
   * 
   * This parameter is required.
   */
  listQuery?: ListSecurityIdentifyRecordsRequestListQuery;
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
      listQuery: ListSecurityIdentifyRecordsRequestListQuery,
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

