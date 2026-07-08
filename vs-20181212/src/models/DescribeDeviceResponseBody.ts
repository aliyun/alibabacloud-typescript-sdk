// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeviceResponseBodyDirectory extends $dara.Model {
  /**
   * @remarks
   * Directory creation time.
   * 
   * @example
   * 2019-02-28T17:00:17Z
   */
  createdTime?: string;
  /**
   * @remarks
   * Directory description.
   * 
   * @example
   * 目录1
   */
  description?: string;
  /**
   * @remarks
   * Space ID to which the directory belongs.
   * 
   * @example
   * 3238848****092994-cn-qingdao
   */
  groupId?: string;
  /**
   * @remarks
   * Directory ID.
   * 
   * @example
   * 3238848****092994-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * Directory name.
   * 
   * @example
   * 目录1
   */
  name?: string;
  /**
   * @remarks
   * Parent directory ID.
   * 
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
   * @remarks
   * Number of channels.
   * 
   * @example
   * 1
   */
  channelNum?: number;
  /**
   * @remarks
   * Number of failed streams.
   * 
   * @example
   * 1
   */
  failedNum?: number;
  /**
   * @remarks
   * Number of offline streams.
   * 
   * @example
   * 1
   */
  offlineNum?: number;
  /**
   * @remarks
   * Number of online streams.
   * 
   * @example
   * 1
   */
  onlineNum?: number;
  /**
   * @remarks
   * Number of streams.
   * 
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
   * @remarks
   * Subscribed GB alarm method. Valid values:
   * 
   * - 0 (all)
   * 
   * - 5 (video alarm)
   * 
   * - 7 (other alarms)
   * 
   * > * An empty value means no subscription.
   * >
   * > * Multiple values are supported, separated by commas (,).
   * 
   * @example
   * 5
   */
  alarmMethod?: string;
  autoDirectory?: boolean;
  /**
   * @remarks
   * Indicates whether device location subscription is enabled.
   * 
   * @example
   * false
   */
  autoPos?: boolean;
  /**
   * @remarks
   * Automatically start the stream.
   * 
   * @example
   * false
   */
  autoStart?: boolean;
  /**
   * @remarks
   * Channel synchronization time.
   * 
   * @example
   * 2019-02-28T17:01:17Z
   */
  channelSyncTime?: string;
  /**
   * @remarks
   * Device creation time.
   * 
   * @example
   * 2019-02-28T17:00:17Z
   */
  createdTime?: string;
  /**
   * @remarks
   * Device description.
   * 
   * @example
   * xxx路口摄像头
   */
  description?: string;
  /**
   * @remarks
   * Directory information.
   */
  directory?: DescribeDeviceResponseBodyDirectory;
  /**
   * @remarks
   * Directory ID.
   * 
   * @example
   * 3238848****092994-cn-qingdao
   */
  directoryId?: string;
  /**
   * @remarks
   * Device serial number.
   * 
   * @example
   * 7D0*****4C0
   */
  dsn?: string;
  /**
   * @remarks
   * Whether the device is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * GB device ID.
   * 
   * > This applies only to GB protocols.
   * 
   * @example
   * 31000000****00000002
   */
  gbId?: string;
  /**
   * @remarks
   * Space ID to which the device belongs.
   * 
   * @example
   * 3238848****092994-cn-qingdao
   */
  groupId?: string;
  /**
   * @remarks
   * Device ID.
   * 
   * @example
   * 3238848****092996-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * Device IP address.
   * 
   * @example
   * 10.10.10.10
   */
  ip?: string;
  /**
   * @remarks
   * Device latitude.
   * 
   * @example
   * 119.20
   */
  latitude?: string;
  /**
   * @remarks
   * Device longitude.
   * 
   * @example
   * 45.00
   */
  longitude?: string;
  /**
   * @remarks
   * Device name.
   * 
   * @example
   * xxx路口摄像头
   */
  name?: string;
  /**
   * @remarks
   * Other device parameters.
   * 
   * @example
   * {}
   */
  params?: string;
  /**
   * @remarks
   * Parent device ID. For example, the platform ID to which a camera belongs.
   * 
   * @example
   * 3238848****092995-cn-qingdao
   */
  parentId?: string;
  /**
   * @remarks
   * Device password.
   * 
   * @example
   * admin
   */
  password?: string;
  /**
   * @remarks
   * Device port.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * Position subscription interval, in seconds.
   * 
   * @example
   * 300
   */
  posInterval?: number;
  /**
   * @remarks
   * Device registration protocol.
   * 
   * @example
   * gb28181
   */
  protocol?: string;
  /**
   * @remarks
   * Device registration time.
   * 
   * @example
   * 2019-02-28T17:00:17Z
   */
  registeredTime?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * Device stream statistics.
   */
  stats?: DescribeDeviceResponseBodyStats;
  /**
   * @remarks
   * Device status. Valid values:
   * 
   * - on (online)
   * 
   * - off (offline)
   * 
   * - failed (locked)
   * 
   * - new (unregistered)
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * Device type. Valid values:
   * 
   * - ipc (camera)
   * 
   * - platform (platform)
   * 
   * - ied (intelligent device)
   * 
   * @example
   * ipc
   */
  type?: string;
  /**
   * @remarks
   * Stream URL on the device.
   * 
   * @example
   * rtmp://xxx/xxx
   */
  url?: string;
  /**
   * @remarks
   * Device username.
   * 
   * @example
   * admin
   */
  username?: string;
  /**
   * @remarks
   * Device vendor.
   * 
   * @example
   * 公司A
   */
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

