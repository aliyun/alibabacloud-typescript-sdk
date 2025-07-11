// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeviceResponseBodyDirectory extends $dara.Model {
  /**
   * @example
   * 2019-02-28T17:00:17Z
   */
  createdTime?: string;
  description?: string;
  /**
   * @example
   * 3238848****092994-cn-qingdao
   */
  groupId?: string;
  /**
   * @example
   * 3238848****092994-cn-qingdao
   */
  id?: string;
  name?: string;
  /**
   * @example
   * 3238848****092995-cn-qingdao
   */
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      groupId: 'GroupId',
      id: 'Id',
      name: 'Name',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      groupId: 'string',
      id: 'string',
      name: 'string',
      parentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceResponseBodyStats extends $dara.Model {
  /**
   * @example
   * 1
   */
  channelNum?: number;
  /**
   * @example
   * 1
   */
  failedNum?: number;
  /**
   * @example
   * 1
   */
  offlineNum?: number;
  /**
   * @example
   * 1
   */
  onlineNum?: number;
  /**
   * @example
   * 1
   */
  streamNum?: number;
  static names(): { [key: string]: string } {
    return {
      channelNum: 'ChannelNum',
      failedNum: 'FailedNum',
      offlineNum: 'OfflineNum',
      onlineNum: 'OnlineNum',
      streamNum: 'StreamNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelNum: 'number',
      failedNum: 'number',
      offlineNum: 'number',
      onlineNum: 'number',
      streamNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceResponseBody extends $dara.Model {
  /**
   * @example
   * 5
   */
  alarmMethod?: string;
  autoDirectory?: boolean;
  /**
   * @example
   * false
   */
  autoPos?: boolean;
  /**
   * @example
   * false
   */
  autoStart?: boolean;
  /**
   * @example
   * 2019-02-28T17:01:17Z
   */
  channelSyncTime?: string;
  /**
   * @example
   * 2019-02-28T17:00:17Z
   */
  createdTime?: string;
  description?: string;
  directory?: DescribeDeviceResponseBodyDirectory;
  /**
   * @example
   * 3238848****092994-cn-qingdao
   */
  directoryId?: string;
  /**
   * @example
   * 7D0*****4C0
   */
  dsn?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * 31000000****00000002
   */
  gbId?: string;
  /**
   * @example
   * 3238848****092994-cn-qingdao
   */
  groupId?: string;
  /**
   * @example
   * 3238848****092996-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * 10.10.10.10
   */
  ip?: string;
  /**
   * @example
   * 119.20
   */
  latitude?: string;
  /**
   * @example
   * 45.00
   */
  longitude?: string;
  name?: string;
  /**
   * @example
   * {}
   */
  params?: string;
  /**
   * @example
   * 3238848****092995-cn-qingdao
   */
  parentId?: string;
  /**
   * @example
   * admin
   */
  password?: string;
  /**
   * @example
   * 8080
   */
  port?: number;
  /**
   * @example
   * 300
   */
  posInterval?: number;
  /**
   * @example
   * gb28181
   */
  protocol?: string;
  /**
   * @example
   * 2019-02-28T17:00:17Z
   */
  registeredTime?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  stats?: DescribeDeviceResponseBodyStats;
  /**
   * @example
   * on
   */
  status?: string;
  /**
   * @example
   * ipc
   */
  type?: string;
  /**
   * @example
   * rtmp://xxx/xxx
   */
  url?: string;
  /**
   * @example
   * admin
   */
  username?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      alarmMethod: 'AlarmMethod',
      autoDirectory: 'AutoDirectory',
      autoPos: 'AutoPos',
      autoStart: 'AutoStart',
      channelSyncTime: 'ChannelSyncTime',
      createdTime: 'CreatedTime',
      description: 'Description',
      directory: 'Directory',
      directoryId: 'DirectoryId',
      dsn: 'Dsn',
      enabled: 'Enabled',
      gbId: 'GbId',
      groupId: 'GroupId',
      id: 'Id',
      ip: 'Ip',
      latitude: 'Latitude',
      longitude: 'Longitude',
      name: 'Name',
      params: 'Params',
      parentId: 'ParentId',
      password: 'Password',
      port: 'Port',
      posInterval: 'PosInterval',
      protocol: 'Protocol',
      registeredTime: 'RegisteredTime',
      requestId: 'RequestId',
      stats: 'Stats',
      status: 'Status',
      type: 'Type',
      url: 'Url',
      username: 'Username',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmMethod: 'string',
      autoDirectory: 'boolean',
      autoPos: 'boolean',
      autoStart: 'boolean',
      channelSyncTime: 'string',
      createdTime: 'string',
      description: 'string',
      directory: DescribeDeviceResponseBodyDirectory,
      directoryId: 'string',
      dsn: 'string',
      enabled: 'boolean',
      gbId: 'string',
      groupId: 'string',
      id: 'string',
      ip: 'string',
      latitude: 'string',
      longitude: 'string',
      name: 'string',
      params: 'string',
      parentId: 'string',
      password: 'string',
      port: 'number',
      posInterval: 'number',
      protocol: 'string',
      registeredTime: 'string',
      requestId: 'string',
      stats: DescribeDeviceResponseBodyStats,
      status: 'string',
      type: 'string',
      url: 'string',
      username: 'string',
      vendor: 'string',
    };
  }

  validate() {
    if(this.directory && typeof (this.directory as any).validate === 'function') {
      (this.directory as any).validate();
    }
    if(this.stats && typeof (this.stats as any).validate === 'function') {
      (this.stats as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

