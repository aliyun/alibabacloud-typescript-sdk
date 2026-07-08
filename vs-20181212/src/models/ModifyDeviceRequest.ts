// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * GB-compliant alarm method to subscribe to. Valid values:
   * 
   * - 0 (all)
   * 
   * - 5 (video alarm)
   * 
   * - 7 (other alarms)
   * 
   * > * An empty value means no subscription.
   * >
   * > * Multiple values are supported. Separate them with commas.
   * 
   * @example
   * 0
   */
  alarmMethod?: string;
  autoDirectory?: boolean;
  /**
   * @remarks
   * Whether to enable location subscription for the device. Default value: false.
   * 
   * @example
   * false
   */
  autoPos?: boolean;
  /**
   * @remarks
   * Whether to automatically start the stream. Default value: false.
   * 
   * @example
   * false
   */
  autoStart?: boolean;
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
   * Directory ID for the device.
   * 
   * @example
   * 399*****488-cn-qingdao
   */
  directoryId?: string;
  /**
   * @remarks
   * GB-compliant device ID.
   * 
   * > This parameter applies only to GB-compliant protocols.
   * 
   * @example
   * 3100000****000000002
   */
  gbId?: string;
  /**
   * @remarks
   * Space ID.
   * 
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @remarks
   * Device ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * IP address of the device.
   * 
   * @example
   * 10.10.10.10
   */
  ip?: string;
  /**
   * @remarks
   * The device dimension.
   * 
   * @example
   * 119.20
   */
  latitude?: string;
  /**
   * @remarks
   * Longitude of the device.
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
  ownerId?: number;
  /**
   * @remarks
   * Additional device parameters, formatted as a JSON-serialized string.
   * 
   * @example
   * {}
   */
  params?: string;
  /**
   * @remarks
   * Parent device ID.
   * 
   * @example
   * 399*****774-cn-qingdao
   */
  parentId?: string;
  /**
   * @remarks
   * Password for the device.
   * 
   * @example
   * admin
   */
  password?: string;
  /**
   * @remarks
   * Port number of the device.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * Location subscription interval, in seconds.
   * 
   * @example
   * 300
   */
  posInterval?: number;
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
   * Username for the device.
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
      description: 'Description',
      directoryId: 'DirectoryId',
      gbId: 'GbId',
      groupId: 'GroupId',
      id: 'Id',
      ip: 'Ip',
      latitude: 'Latitude',
      longitude: 'Longitude',
      name: 'Name',
      ownerId: 'OwnerId',
      params: 'Params',
      parentId: 'ParentId',
      password: 'Password',
      port: 'Port',
      posInterval: 'PosInterval',
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
      description: 'string',
      directoryId: 'string',
      gbId: 'string',
      groupId: 'string',
      id: 'string',
      ip: 'string',
      latitude: 'string',
      longitude: 'string',
      name: 'string',
      ownerId: 'number',
      params: 'string',
      parentId: 'string',
      password: 'string',
      port: 'number',
      posInterval: 'number',
      type: 'string',
      url: 'string',
      username: 'string',
      vendor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

