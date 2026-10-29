// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDevicesResponseBodyDevicesDirectory extends $dara.Model {
  /**
   * @remarks
   * The time when the directory was created. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2019-02-28T17:00:17Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The directory description.
   * 
   * @example
   * Directory 1
   */
  description?: string;
  /**
   * @remarks
   * The ID of the workspace to which the directory belongs.
   * 
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * 399*****488-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * The directory name.
   * 
   * @example
   * Directory 1
   */
  name?: string;
  /**
   * @remarks
   * The ID of the parent directory.
   * 
   * @example
   * 399*****774-cn-qingdao
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

export class DescribeDevicesResponseBodyDevicesStats extends $dara.Model {
  /**
   * @remarks
   * The number of channels.
   * 
   * @example
   * 0
   */
  channelNum?: number;
  /**
   * @remarks
   * The number of failed streams.
   * 
   * @example
   * 0
   */
  failedNum?: number;
  /**
   * @remarks
   * The number of offline streams.
   * 
   * @example
   * 0
   */
  offlineNum?: number;
  /**
   * @remarks
   * The number of online streams.
   * 
   * @example
   * 0
   */
  onlineNum?: number;
  /**
   * @remarks
   * The number of streams.
   * 
   * @example
   * 0
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

export class DescribeDevicesResponseBodyDevices extends $dara.Model {
  /**
   * @remarks
   * The subscribed national standard alarm methods. Valid values:
   * - 0: All.
   * - 5: Video alarm.
   * - 7: Other alarms.
   * An empty value indicates no subscription. You can specify multiple values separated by commas (,).
   * 
   * @example
   * 0
   */
  alarmMethod?: string;
  /**
   * @remarks
   * Specifies whether to enable directory reporting for platform devices.
   * 
   * @example
   * true
   */
  autoDirectory?: boolean;
  /**
   * @remarks
   * Specifies whether to enable device position subscription.
   * 
   * @example
   * false
   */
  autoPos?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically start the stream.
   * 
   * @example
   * false
   */
  autoStart?: boolean;
  /**
   * @remarks
   * The channel synchronization time. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2019-02-28T17:01:17Z
   */
  channelSyncTime?: string;
  /**
   * @remarks
   * The time when the device was created. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2019-02-28T17:00:17Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The device description.
   * 
   * @example
   * Camera at the XXX intersection
   */
  description?: string;
  /**
   * @remarks
   * The directory information.
   */
  directory?: DescribeDevicesResponseBodyDevicesDirectory;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * 399*****488-cn-qingdao
   */
  directoryId?: string;
  /**
   * @remarks
   * The device serial number. This parameter is applicable only to the AUVSP and ODCAP protocols.
   * 
   * @example
   * 7D0*****4C0
   */
  dsn?: string;
  /**
   * @remarks
   * Specifies whether the device is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The national standard ID of the device. This parameter is applicable only to the national standard protocol.
   * 
   * @example
   * 310000000****0000002
   */
  gbId?: string;
  /**
   * @remarks
   * The ID of the workspace to which the device belongs.
   * 
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @remarks
   * The device ID.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * The IP address of the device.
   * 
   * @example
   * 10.10.10.10
   */
  ip?: string;
  /**
   * @remarks
   * The latitude of the device.
   * 
   * @example
   * 119.20
   */
  latitude?: string;
  /**
   * @remarks
   * The longitude of the device.
   * 
   * @example
   * 45.00
   */
  longitude?: string;
  /**
   * @remarks
   * The device name.
   * 
   * @example
   * Camera at the XXX intersection
   */
  name?: string;
  /**
   * @remarks
   * Other parameters of the device.
   * 
   * @example
   * {}
   */
  params?: string;
  /**
   * @remarks
   * The ID of the parent device, such as the ID of the platform to which a camera belongs.
   * 
   * @example
   * 3238848****092995
   */
  parentId?: string;
  /**
   * @remarks
   * The device password.
   * 
   * @example
   * admin
   */
  password?: string;
  /**
   * @remarks
   * The device port.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The position subscription interval, in seconds.
   * 
   * @example
   * 300
   */
  posInterval?: number;
  /**
   * @remarks
   * The device protocol.
   * 
   * @example
   * gb28181
   */
  protocol?: string;
  /**
   * @remarks
   * The time when the device was registered. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2019-02-28T17:00:17Z
   */
  registeredTime?: string;
  /**
   * @remarks
   * The stream statistics information of the device.
   */
  stats?: DescribeDevicesResponseBodyDevicesStats;
  /**
   * @remarks
   * The device status. Valid values:
   * - on: Online.
   * - off: Offline.
   * - failed: Locked.
   * - new: Unregistered.
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * The device type. Valid values:
   * - ipc: Camera.
   * - platform: Platform.
   * - ied: Intelligent device.
   * 
   * @example
   * ipc
   */
  type?: string;
  /**
   * @remarks
   * The stream URL on the device.
   * 
   * @example
   * rtmp://xxx/xxx
   */
  url?: string;
  /**
   * @remarks
   * The device username.
   * 
   * @example
   * admin
   */
  username?: string;
  /**
   * @remarks
   * The device vendor.
   * 
   * @example
   * Company A
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
      directory: DescribeDevicesResponseBodyDevicesDirectory,
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
      stats: DescribeDevicesResponseBodyDevicesStats,
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

export class DescribeDevicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of devices.
   */
  devices?: DescribeDevicesResponseBodyDevices[];
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 5
   */
  pageCount?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of devices.
   * 
   * @example
   * 77
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      pageCount: 'PageCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': DescribeDevicesResponseBodyDevices },
      pageCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.devices)) {
      $dara.Model.validateArray(this.devices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

