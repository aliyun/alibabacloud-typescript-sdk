// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestEventSourceConfigRequestSourceMySQLParameters extends $dara.Model {
  /**
   * @remarks
   * The list of allowed CIDR blocks.
   */
  allowedCIDRs?: string;
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
   * rm-bp1vxxx.mysql.rds.aliyuncs.com
   */
  hostName?: string;
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
   * The password for the specified username.
   * 
   * @example
   * 1234xxx
   */
  password?: string;
  /**
   * @remarks
   * The database connection port.
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
   * sg-xxx
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The snapshot mode.
   */
  snapshotMode?: string;
  /**
   * @remarks
   * The table name. The name must be prefixed with the database name in the ${DatabaseName}.${TableName} format.
   * 
   * @example
   * database1.table1
   */
  tableNames?: string;
  /**
   * @remarks
   * The username for the database.
   * 
   * @example
   * user***
   */
  user?: string;
  /**
   * @remarks
   * The vSwitch IDs.
   * 
   * @example
   * vsw-bp1gb7xxx
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-xxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      allowedCIDRs: 'AllowedCIDRs',
      databaseName: 'DatabaseName',
      hostName: 'HostName',
      networkType: 'NetworkType',
      password: 'Password',
      port: 'Port',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      snapshotMode: 'SnapshotMode',
      tableNames: 'TableNames',
      user: 'User',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedCIDRs: 'string',
      databaseName: 'string',
      hostName: 'string',
      networkType: 'string',
      password: 'string',
      port: 'number',
      regionId: 'string',
      securityGroupId: 'string',
      snapshotMode: 'string',
      tableNames: 'string',
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

export class TestEventSourceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters for the MySQL source.
   */
  sourceMySQLParameters?: TestEventSourceConfigRequestSourceMySQLParameters;
  static names(): { [key: string]: string } {
    return {
      sourceMySQLParameters: 'SourceMySQLParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceMySQLParameters: TestEventSourceConfigRequestSourceMySQLParameters,
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

