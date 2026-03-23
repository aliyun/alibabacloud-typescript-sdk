// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceReplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the replication channel, used to identify the replication link.
   * 
   * @example
   * replication-channel-001
   */
  channelName?: string;
  /**
   * @remarks
   * The instance ID. You can obtain it by invoking DescribeDBInstances.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp1234567890abcdef
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The host address of the master database, which can be an IP address or a domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.1.100
   */
  masterHost?: string;
  /**
   * @remarks
   * The password of the master database, used to authenticate the replication user. It must be Base64-encoded in advance.
   * 
   * This parameter is required.
   * 
   * @example
   * U2VjdXJlUGFzczEyMyE=
   */
  masterPassword?: string;
  /**
   * @remarks
   * The port number of the master database, typically 3306 for MySQL.
   * 
   * This parameter is required.
   * 
   * @example
   * 3306
   */
  masterPort?: number;
  /**
   * @remarks
   * The username of the master database, used to establish the replication connection.
   * 
   * This parameter is required.
   * 
   * @example
   * repl_user
   */
  masterUser?: string;
  /**
   * @remarks
   * 阿里云账号ID，用于指定资源的所有者
   * 
   * @example
   * 1234567890123456
   */
  ownerId?: number;
  /**
   * @remarks
   * The ID of the Region where the instance is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      channelName: 'ChannelName',
      dbInstanceId: 'DbInstanceId',
      masterHost: 'MasterHost',
      masterPassword: 'MasterPassword',
      masterPort: 'MasterPort',
      masterUser: 'MasterUser',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelName: 'string',
      dbInstanceId: 'string',
      masterHost: 'string',
      masterPassword: 'string',
      masterPort: 'number',
      masterUser: 'string',
      ownerId: 'number',
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

