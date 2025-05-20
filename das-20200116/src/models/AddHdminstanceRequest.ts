// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddHDMInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The database engine. Valid values:
   * 
   * *   **MySQL**
   * *   **PostgreSQL**
   * *   **SQLServer**
   * *   **PolarDBMySQL**
   * *   **PolarDBPostgreSQL**
   * *   **Redis**
   * *   **MongoDB**
   * *   **PolarDBOracle**
   * *   **PolarDBX**
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
   * The name of the instance.
   * 
   * @example
   * yuecq--test****
   */
  instanceAlias?: string;
  /**
   * @remarks
   * The type of the instance on which the database is deployed. Valid values:
   * 
   * *   **RDS**: an Alibaba Cloud database instance.
   * *   **ECS**: an Elastic Compute Service (ECS) instance on which a self-managed database is deployed.
   * *   **IDC**: a self-managed database instance that is not deployed on Alibaba Cloud.
   * 
   * >  IDC refers to your data center.
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
   * The endpoint that is used to access the instance over internal networks.
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
   * The password for the username.
   * 
   * @example
   * 122****
   */
  password?: string;
  /**
   * @remarks
   * The port that is used to access the instance over internal networks.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The username that is used to log on to the database.
   * 
   * @example
   * test****
   */
  username?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
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

