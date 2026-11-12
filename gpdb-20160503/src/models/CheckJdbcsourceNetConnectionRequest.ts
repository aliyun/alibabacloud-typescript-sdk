// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckJDBCSourceNetConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * You must specify either DataSourceId or JdbcConnectionString. Otherwise, an error occurs. If both parameters are specified, JdbcConnectionString takes precedence.
   * 
   * @example
   * 123
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The JDBC connection string.
   * 
   * @example
   * jdbc:mysql://rm-xxx.mysql.rds.aliyuncs.com:3306/testadmin
   */
  jdbcConnectionString?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      dataSourceId: 'DataSourceId',
      jdbcConnectionString: 'JdbcConnectionString',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      dataSourceId: 'string',
      jdbcConnectionString: 'string',
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

