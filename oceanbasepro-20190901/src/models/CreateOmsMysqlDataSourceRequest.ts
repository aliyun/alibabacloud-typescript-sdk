// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOmsMysqlDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the data source.   
   * 
   * It must be 2 to 256 characters in length. The default value is null.
   * 
   * @example
   * MySQL data source for OMS testing
   */
  description?: string;
  /**
   * @remarks
   * The ID of the database gateway instance.   
   * 
   * > <br>If Type is set to DG, this parameter is required.
   * 
   * @example
   * dg-yhss6sdlaff****
   */
  dgDatabaseId?: string;
  /**
   * @remarks
   * The ID of the ECS instance of the data source.   
   * 
   * > <br>If Type is set to RDS, PolarDB, or DG, this parameter is required.
   * 
   * @example
   * pc-12ab34cd56******
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the data source.   
   * 
   * > <br>If Type is set to INTERNET or VPC, this parameter is required.
   * 
   * @example
   * 10.0.****
   */
  ip?: string;
  /**
   * @remarks
   * The name of the data source.   
   * It must be 2 to 128 characters in length and can contain letters, digits, underscores (_), periods (.), and hyphens (-).   
   * 
   * > <br>Invalid characters, such as slashes (/), are not allowed.
   * 
   * This parameter is required.
   * 
   * @example
   * oms-mysql
   */
  name?: string;
  /**
   * @remarks
   * The password of the username that is used to access the database. It must be Base64 encoded.   
   * For example, for the password abcd123@!, the Base64-encoded value is YWJjZDEyM0Ah.
   * 
   * This parameter is required.
   * 
   * @example
   * YWJjZDEyM0Ah
   */
  password?: string;
  /**
   * @remarks
   * The port number of the data source.   
   * 
   * > <br>If Type is set to INTERNET or VPC, this parameter is required.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The name of the database.   
   * 
   * > <br>If you specify this parameter, subsequent migration or synchronization operations will take effect on this database only.
   * 
   * @example
   * test
   */
  schema?: string;
  /**
   * @remarks
   * The type of the MySQL data source.   
   * Valid values: INTERNET, VPC, RDS, PolarDB, and DG.
   * 
   * This parameter is required.
   * 
   * @example
   * INTERNET
   */
  type?: string;
  /**
   * @remarks
   * The username that is used to access the database.
   * 
   * This parameter is required.
   * 
   * @example
   * omsTestUser
   */
  username?: string;
  /**
   * @remarks
   * The ID of the VPC to which the data source belongs.   
   * 
   * > <br>If Type is set to VPC, this parameter is required.
   * 
   * @example
   * vpc-12345abcde*******
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      dgDatabaseId: 'DgDatabaseId',
      instanceId: 'InstanceId',
      ip: 'Ip',
      name: 'Name',
      password: 'Password',
      port: 'Port',
      schema: 'Schema',
      type: 'Type',
      username: 'Username',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dgDatabaseId: 'string',
      instanceId: 'string',
      ip: 'string',
      name: 'string',
      password: 'string',
      port: 'string',
      schema: 'string',
      type: 'string',
      username: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

