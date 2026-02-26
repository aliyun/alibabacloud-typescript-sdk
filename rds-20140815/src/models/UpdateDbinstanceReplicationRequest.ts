// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDBInstanceReplicationRequest extends $dara.Model {
  /**
   * @remarks
   * 复制通道名称，用于标识复制链路
   * 
   * @example
   * replication-channel-001
   */
  channelName?: string;
  /**
   * @remarks
   * 目标RDS实例ID，复制链路将在此实例上更新
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp1234567890abcdef
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * 主数据库主机地址，支持IP或域名，仅在需要更新时提供
   * 
   * @example
   * 192.168.1.100
   */
  masterHost?: string;
  /**
   * @remarks
   * 主数据库密码，用于验证复制用户，需要提前经过Base64编码，仅在需要更新时提供
   * 
   * @example
   * U2VjdXJlUGFzczEyMyE=
   */
  masterPassword?: string;
  /**
   * @remarks
   * 主数据库端口号，通常为3306（MySQL）或5432（PostgreSQL），仅在需要更新时提供
   * 
   * @example
   * 3306
   */
  masterPort?: number;
  /**
   * @remarks
   * 主数据库用户名，用于建立复制连接，仅在需要更新时提供
   * 
   * @example
   * repl_user
   */
  masterUser?: string;
  /**
   * @remarks
   * 操作类型，指定对复制链路执行的操作
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
   * 地域ID，表示RDS实例所在的地域
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

