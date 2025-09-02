// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaTableColumnRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the E-MapReduce (EMR) cluster. You can log on to the EMR console to obtain the ID.
   * 
   * @example
   * C-010A704DA760****
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the data source. Set the value to emr.
   * 
   * @example
   * emr
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The name of the metadatabase of the EMR cluster. You can call the [ListMetaDB](https://help.aliyun.com/document_detail/2780105.html) operation to query the name.
   * 
   * @example
   * abc
   */
  databaseName?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The GUID of the metatable. You can call the [GetMetaDBTableList](https://help.aliyun.com/document_detail/2780086.html) operation to query the GUID.
   * 
   * @example
   * odps.engine_name.table_name
   */
  tableGuid?: string;
  /**
   * @remarks
   * The name of the metatable in the EMR cluster. You can call the [GetMetaDBTableList](https://help.aliyun.com/document_detail/2780086.html) operation to query the name.
   * 
   * @example
   * abc
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataSourceType: 'DataSourceType',
      databaseName: 'DatabaseName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataSourceType: 'string',
      databaseName: 'string',
      pageNum: 'number',
      pageSize: 'number',
      tableGuid: 'string',
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

