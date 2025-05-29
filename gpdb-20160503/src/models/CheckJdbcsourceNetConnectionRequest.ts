// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckJDBCSourceNetConnectionRequest extends $dara.Model {
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
   * Either DataSourceId or JdbcConnectionString must be specified as input, otherwise an error will occur. If both parameters are specified, JdbcConnectionString will be used preferentially.
   * 
   * @example
   * 123
   */
  dataSourceId?: string;
  /**
   * @remarks
   * JDBC connection string.
   * 
   * @example
   * jdbc:mysql://rm-xxx.mysql.rds.aliyuncs.com:3306/testadmin
   */
  jdbcConnectionString?: string;
  /**
   * @remarks
   * The ID of the region where the instance is located.
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

