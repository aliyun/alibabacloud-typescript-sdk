// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDBInstanceReplicationRequest extends $dara.Model {
  /**
   * @remarks
   * 复制通道名称，用于标识需要删除的复制链路
   * 
   * @example
   * replication-channel-001
   */
  channelName?: string;
  /**
   * @remarks
   * 目标RDS实例ID，复制链路将从此实例上删除
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp1234567890abcdef
   */
  dbInstanceId?: string;
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
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelName: 'string',
      dbInstanceId: 'string',
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

