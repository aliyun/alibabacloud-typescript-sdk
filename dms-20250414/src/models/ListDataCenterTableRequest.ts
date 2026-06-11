// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCenterTableRequest extends $dara.Model {
  /**
   * @remarks
   * For frontend use only.
   * 
   * @example
   * 仅前端使用
   */
  callFrom?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * - If `ImportType` is `FILE`, this parameter represents the file name.
   * 
   * @example
   * diamonds.csv
   */
  databaseName?: string;
  /**
   * @remarks
   * The current DMS unit.
   * 
   * @example
   * cn-hangzhou
   */
  dmsUnit?: string;
  /**
   * @remarks
   * The import type.
   * 
   * - FILE
   * 
   * @example
   * FILE
   */
  importType?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * - If `ImportType` is `FILE`, this parameter represents the file ID of the data center.
   * 
   * @example
   * f-ean8u5881qk4*********xh5y
   */
  instanceName?: string;
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records to return per page. Default: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The keyword for a fuzzy search of database tables.
   * 
   * @example
   * testdb
   */
  searchKey?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * diamonds
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      callFrom: 'CallFrom',
      databaseName: 'DatabaseName',
      dmsUnit: 'DmsUnit',
      importType: 'ImportType',
      instanceName: 'InstanceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callFrom: 'string',
      databaseName: 'string',
      dmsUnit: 'string',
      importType: 'string',
      instanceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchKey: 'string',
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

