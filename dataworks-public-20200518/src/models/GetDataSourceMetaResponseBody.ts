// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataSourceMetaResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The reason why the metadata of the data source fails to be obtained. If the metadata of the data source is obtained, no value is returned for this parameter.
   * 
   * @example
   * read datasource time out
   */
  message?: string;
  /**
   * @remarks
   * The returned metadata of the data source. The returned metadata is in the JSON format.
   * 
   * `{"dbTables":[{"dbName":"testdb","schema":[{"tableInfos":[{"dbName":"testdb","enable":true,"table":"table1","tableName":"table1"}]},{"tableInfos":[{"dbName":"testdb","enable":true,"table":"table2","tableName":"table2"}]}]}]}`
   * 
   * Parameter description:
   * 
   * *   dbName: the name of the database in which the data source resides.
   * *   schema: the schema of the database.
   * *   enable: indicates whether the database is available. The valid values are true and false. The value true indicates that the database is available. The value false indicates that the database is unavailable.
   * *   tableName: the name of the table in the database.
   * *   tableInfos: the information about the table in the database.
   * 
   * @example
   * {"dbTables":[{"dbName":"testdb","schema":[{"tableInfos":[{"dbName":"testdb","enable":true,"table":"table1","tableName":"table1"}]},{"tableInfos":[{"dbName":"testdb","enable":true,"table":"table2","tableName":"table2"}]}]}]}
   */
  meta?: string;
  /**
   * @remarks
   * Indicates whether the metadata of the data source is obtained. Valid values:
   * 
   * *   success: The metadata of the data source is obtained.
   * *   fail: The metadata of the data source failed to be obtained. You can troubleshoot issues based on the Message parameter.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      meta: 'Meta',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      meta: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: GetDataSourceMetaResponseBodyData;
  /**
   * @remarks
   * The request ID. You can locate logs and troubleshoot issues based on the ID.
   * 
   * @example
   * 0000-ABCD-EFG
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDataSourceMetaResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

