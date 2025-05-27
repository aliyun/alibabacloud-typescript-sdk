// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestEventSourceConfigRequestSourceMySQLParameters extends $dara.Model {
  /**
   * @example
   * database1
   */
  databaseName?: string;
  /**
   * @example
   * rm-bp1vxxx.mysql.rds.aliyuncs.com
   */
  hostName?: string;
  /**
   * @example
   * PrivateNetwork
   */
  networkType?: string;
  /**
   * @example
   * 1234xxx
   */
  password?: string;
  /**
   * @example
   * 80
   */
  port?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * sg-xxx
   */
  securityGroupId?: string;
  /**
   * @example
   * database1.table1
   */
  tableNames?: string;
  /**
   * @example
   * user***
   */
  user?: string;
  /**
   * @example
   * vsw-bp1gb7xxx
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-xxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      hostName: 'HostName',
      networkType: 'NetworkType',
      password: 'Password',
      port: 'Port',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      tableNames: 'TableNames',
      user: 'User',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      hostName: 'string',
      networkType: 'string',
      password: 'string',
      port: 'number',
      regionId: 'string',
      securityGroupId: 'string',
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

