// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJDBCDataSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the service was created.
   * 
   * @example
   * 2019-09-08T16:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the service. The description can be up to 256 characters in length.
   * 
   * @example
   * mysql data source config
   */
  dataSourceDescription?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 123
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The name of data soruce
   * 
   * @example
   * hdfs_pxf
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The status of the service. Valid values:
   * 
   * *   Init
   * *   Running
   * *   Exception
   * 
   * @example
   * Running
   */
  dataSourceStatus?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * MySQL
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The id of the external data service
   * 
   * @example
   * 2989
   */
  externalDataServiceId?: string;
  /**
   * @remarks
   * The JDBC connection string.
   * 
   * @example
   * xxxxxx
   */
  JDBCConnectionString?: string;
  /**
   * @remarks
   * The password of the database account.
   * 
   * @example
   * xxxxxx
   */
  JDBCPassword?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * xxxxxx
   */
  JDBCUserName?: string;
  /**
   * @remarks
   * The time when the data source was last modified.
   * 
   * @example
   * 2024-08-27T02:01:10Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
   */
  requestId?: string;
  /**
   * @remarks
   * The message of the status
   * 
   * @example
   * ""
   */
  statusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataSourceDescription: 'DataSourceDescription',
      dataSourceId: 'DataSourceId',
      dataSourceName: 'DataSourceName',
      dataSourceStatus: 'DataSourceStatus',
      dataSourceType: 'DataSourceType',
      externalDataServiceId: 'ExternalDataServiceId',
      JDBCConnectionString: 'JDBCConnectionString',
      JDBCPassword: 'JDBCPassword',
      JDBCUserName: 'JDBCUserName',
      modifyTime: 'ModifyTime',
      requestId: 'RequestId',
      statusMessage: 'StatusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dataSourceDescription: 'string',
      dataSourceId: 'string',
      dataSourceName: 'string',
      dataSourceStatus: 'string',
      dataSourceType: 'string',
      externalDataServiceId: 'string',
      JDBCConnectionString: 'string',
      JDBCPassword: 'string',
      JDBCUserName: 'string',
      modifyTime: 'string',
      requestId: 'string',
      statusMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

