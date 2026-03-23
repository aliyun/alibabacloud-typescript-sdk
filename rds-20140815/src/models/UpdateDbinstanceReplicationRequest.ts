// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDBInstanceReplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the replication channel, used to identify the replication channel.
   * 
   * @example
   * replication-channel-001
   */
  channelName?: string;
  /**
   * @remarks
   * The instance ID.
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
   * @example
   * 192.168.1.100
   */
  masterHost?: string;
  /**
   * @remarks
   * The password of the master database, used to authenticate the replication user. It must be Base64-encoded in advance.
   * 
   * @example
   * U2VjdXJlUGFzczEyMyE=
   */
  masterPassword?: string;
  /**
   * @remarks
   * The port number of the master database, typically 3306 for MySQL.
   * 
   * @example
   * 3306
   */
  masterPort?: number;
  /**
   * @remarks
   * The username of the master database, used to establish the replication connection. Provide this only when an update is required.
   * 
   * @example
   * repl_user
   */
  masterUser?: string;
  /**
   * @remarks
   * The Operation Type, specifying the operation to perform on the replication channel.
   * 
   * This parameter is required.
   * 
   * @example
   * Start
   */
  operation?: string;
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
   * The Region ID.
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
      operation: 'Operation',
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
      operation: 'string',
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

