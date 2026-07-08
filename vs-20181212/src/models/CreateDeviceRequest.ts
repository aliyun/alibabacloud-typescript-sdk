// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDeviceRequest extends $dara.Model {
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
   * > * You can specify multiple values, separated by commas (,).
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
   * ID of the folder that contains the device.
   * 
   * @example
   * 399*****488-cn-qingdao
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
   * GB-compliant device ID.
   * 
   * > This parameter applies only to GB-compliant protocols.
   * 
   * @example
   * 31000000****00000002
   */
  gbId?: string;
  /**
   * @remarks
   * ID of the space that contains the device.
   * 
   * This parameter is required.
   * 
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
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
   * The dimension of the device.
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
  ownerId?: number;
  /**
   * @remarks
   * Additional device parameters, formatted as a JSON string.
   * 
   * @example
   * {}
   */
  params?: string;
  /**
   * @remarks
   * ID of the parent device. For example, the ID of the platform that hosts the camera.
   * 
   * @example
   * 399*****774-cn-qingdao
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
   * This parameter is required.
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
      description: 'Description',
      directoryId: 'DirectoryId',
      dsn: 'Dsn',
      gbId: 'GbId',
      groupId: 'GroupId',
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
      dsn: 'string',
      gbId: 'string',
      groupId: 'string',
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

