// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDBInstanceReplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the replication channel, which is used to identify the replication channel.
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
   * The host address of the primary database, which supports an IP address or a domain name.
   * 
   * @example
   * 192.168.1.100
   */
  masterHost?: string;
  /**
   * @remarks
   * The password of the primary database, which is used to authenticate the replication user. The password must be Base64-encoded in advance.
   * 
   * @example
   * U2VjdXJlUGFzczEyMyE=
   */
  masterPassword?: string;
  /**
   * @remarks
   * The port number of the primary database, which is typically 3306 for MySQL.
   * 
   * @example
   * 3306
   */
  masterPort?: number;
  /**
   * @remarks
   * The username of the primary database, which is used to establish a replication connection. Specify this parameter only when an update is required.
   * 
   * @example
   * repl_user
   */
  masterUser?: string;
  /**
   * @remarks
   * The operation type, which specifies the operation to be performed on the replication channel.
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
   * The region ID.
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

