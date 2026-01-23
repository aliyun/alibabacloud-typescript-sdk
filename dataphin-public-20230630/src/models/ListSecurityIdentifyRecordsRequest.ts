// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecurityIdentifyRecordsRequestListQuery extends $dara.Model {
  /**
   * @example
   * DEV
   */
  datasourceEnv?: string;
  /**
   * @example
   * test
   */
  datasourceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * col1
   */
  fieldName?: string;
  isDatasourceTable?: boolean;
  /**
   * @example
   * test
   */
  keyword?: string;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  tableCatalog?: string;
  /**
   * @remarks
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
   * This parameter is required.
   */
  listQuery?: ListSecurityIdentifyRecordsRequestListQuery;
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

