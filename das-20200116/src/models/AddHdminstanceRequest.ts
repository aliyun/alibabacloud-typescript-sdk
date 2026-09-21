// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddHDMInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The database engine. Valid values:
   * 
   * - **MySQL**
   * - **PostgreSQL**
   * - **SQLServer**
   * - **PolarDBMySQL**
   * - **PolarDBPostgreSQL**
   * - **Redis**
   * - **MongoDB**
   * - **PolarDBOracle**
   * - **PolarDBX**
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  flushAccount?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * yuecq--test****
   */
  instanceAlias?: string;
  /**
   * @remarks
   * The database product to which the instance belongs. Valid values:
   * 
   * - **RDS**: cloud instance.
   * - **ECS**: self-managed instance on ECS.
   * - **IDC**: self-managed instance not on a public cloud.
   * 
   * > IDC stands for Internet Data Center.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS
   */
  instanceArea?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-2ze1jdv45i7l6****
   */
  instanceId?: string;
  /**
   * @remarks
   * The internal endpoint of the instance to be connected.
   * 
   * @example
   * rm-2ze1jdv45i7l6****.mysql.rds.aliyuncs.com
   */
  ip?: string;
  /**
   * @remarks
   * The network type of the instance.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The password of the username.
   * 
   * @example
   * 122****
   */
  password?: string;
  /**
   * @remarks
   * The internal network connection port of the instance.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test****
   */
  username?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-m5e666n89m2bx8jar****
   */
  vpcId?: string;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  context?: string;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      flushAccount: 'FlushAccount',
      instanceAlias: 'InstanceAlias',
      instanceArea: 'InstanceArea',
      instanceId: 'InstanceId',
      ip: 'Ip',
      networkType: 'NetworkType',
      password: 'Password',
      port: 'Port',
      region: 'Region',
      username: 'Username',
      vpcId: 'VpcId',
      context: '__context',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      flushAccount: 'string',
      instanceAlias: 'string',
      instanceArea: 'string',
      instanceId: 'string',
      ip: 'string',
      networkType: 'string',
      password: 'string',
      port: 'string',
      region: 'string',
      username: 'string',
      vpcId: 'string',
      context: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

