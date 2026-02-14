// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCenterTableRequest extends $dara.Model {
  callFrom?: string;
  /**
   * @example
   * diamonds.csv
   */
  databaseName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  dmsUnit?: string;
  /**
   * @example
   * FILE
   */
  importType?: string;
  /**
   * @example
   * f-ean8u5881qk4*********xh5y
   */
  instanceName?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * testdb
   */
  searchKey?: string;
  /**
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

