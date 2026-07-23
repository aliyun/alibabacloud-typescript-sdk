// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DiscoverEventSourceRequestSourceMySQLParameters extends $dara.Model {
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * database1
   */
  databaseName?: string;
  /**
   * @remarks
   * The database endpoint.
   * 
   * @example
   * rm-xxx.mysql.rds.aliyuncs.com
   */
  hostName?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * @example
   * 20
   */
  limit?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * PrivateNetwork
   */
  networkType?: string;
  /**
   * @remarks
   * The offset for paging the query results.
   * 
   * @example
   * 30
   */
  offset?: string;
  /**
   * @remarks
   * The database password.
   * 
   * @example
   * 1234xxx
   */
  password?: string;
  /**
   * @remarks
   * The connection port of the database.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-bp1ic0vsbwyv176e9inx
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The name of the database table. The database name must be added as a prefix in the ${DatabaseName}.${TableName} format.
   * 
   * @example
   * database1.table1
   */
  tableName?: string;
  /**
   * @remarks
   * The database username.
   * 
   * @example
   * user1
   */
  user?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-gw824tpaptxtlo256lqub
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The ID of the Virtual Private Cloud (VPC).
   * 
   * @example
   * vpc-uf6hwiei8u5uil3bfahc1
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      hostName: 'HostName',
      limit: 'Limit',
      networkType: 'NetworkType',
      offset: 'Offset',
      password: 'Password',
      port: 'Port',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      tableName: 'TableName',
      user: 'User',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      hostName: 'string',
      limit: 'string',
      networkType: 'string',
      offset: 'string',
      password: 'string',
      port: 'number',
      regionId: 'string',
      securityGroupId: 'string',
      tableName: 'string',
      user: 'string',
      vSwitchIds: 'string',
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

export class DiscoverEventSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The MySQL source parameters.
   */
  sourceMySQLParameters?: DiscoverEventSourceRequestSourceMySQLParameters;
  static names(): { [key: string]: string } {
    return {
      sourceMySQLParameters: 'SourceMySQLParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceMySQLParameters: DiscoverEventSourceRequestSourceMySQLParameters,
    };
  }

  validate() {
    if(this.sourceMySQLParameters && typeof (this.sourceMySQLParameters as any).validate === 'function') {
      (this.sourceMySQLParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

