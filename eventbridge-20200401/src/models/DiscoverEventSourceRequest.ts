// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DiscoverEventSourceRequestSourceMySQLParameters extends $dara.Model {
  /**
   * @example
   * database1
   */
  databaseName?: string;
  /**
   * @example
   * rm-xxx.mysql.rds.aliyuncs.com
   */
  hostName?: string;
  /**
   * @example
   * 20
   */
  limit?: string;
  /**
   * @example
   * PrivateNetwork
   */
  networkType?: string;
  /**
   * @example
   * 30
   */
  offset?: string;
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
   * sg-bp1ic0vsbwyv176e9inx
   */
  securityGroupId?: string;
  /**
   * @example
   * database1.table1
   */
  tableName?: string;
  /**
   * @example
   * user1
   */
  user?: string;
  /**
   * @example
   * vsw-gw824tpaptxtlo256lqub
   */
  vSwitchIds?: string;
  /**
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

