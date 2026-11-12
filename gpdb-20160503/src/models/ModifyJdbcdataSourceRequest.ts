// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyJDBCDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Data source description.
   * 
   * @example
   * test
   */
  dataSourceDescription?: string;
  /**
   * @remarks
   * Data source ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  dataSourceId?: string;
  /**
   * @remarks
   * Database type: - mysql - postgresql - sqlserver
   * 
   * @example
   * mysql
   */
  dataSourceType?: string;
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
   * The region ID of the instance.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      dataSourceDescription: 'DataSourceDescription',
      dataSourceId: 'DataSourceId',
      dataSourceType: 'DataSourceType',
      JDBCConnectionString: 'JDBCConnectionString',
      JDBCPassword: 'JDBCPassword',
      JDBCUserName: 'JDBCUserName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      dataSourceDescription: 'string',
      dataSourceId: 'string',
      dataSourceType: 'string',
      JDBCConnectionString: 'string',
      JDBCPassword: 'string',
      JDBCUserName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

