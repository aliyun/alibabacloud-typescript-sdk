// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * The subscribed national standard alarm methods. Valid values:
   * - 0: All.
   * - 5: Video alarm.
   * - 7: Other alarms.
   * 
   * > - An empty value indicates no subscription.
   * > - Multiple values are supported and must be separated by commas (,).
   * 
   * @example
   * 0
   */
  alarmMethod?: string;
  autoDirectory?: boolean;
  /**
   * @remarks
   * Specifies whether to enable device location subscription. Valid values:
   * - true: Yes.
   * - false: No.
   * Default value: false.
   * 
   * @example
   * false
   */
  autoPos?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically start the stream. Valid values:
   * - true: Yes.
   * - false: No.
   * Default value: false.
   * 
   * @example
   * false
   */
  autoStart?: boolean;
  /**
   * @remarks
   * The description of the device.
   * 
   * @example
   * xxx intersection camera
   */
  description?: string;
  /**
   * @remarks
   * The ID of the folder to which the device belongs.
   * 
   * @example
   * 399*****488-cn-qingdao
   */
  directoryId?: string;
  /**
   * @remarks
   * The serial number of the device.
   * 
   * @example
   * 7D0*****4C0
   */
  dsn?: string;
  /**
   * @remarks
   * The national standard ID of the device.
   * > This parameter is applicable only to the national standard protocol.
   * 
   * @example
   * 31000000****00000002
   */
  gbId?: string;
  /**
   * @remarks
   * The ID of the workspace to which the device belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
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
   * The name of the device.
   * 
   * @example
   * xxx intersection camera
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * The other parameters of the device, in the format of a JSON serialized string.
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
   * 399*****774-cn-qingdao
   */
  parentId?: string;
  /**
   * @remarks
   * The password of the device.
   * 
   * @example
   * admin
   */
  password?: string;
  /**
   * @remarks
   * The port of the device.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The location subscription interval, in seconds.
   * 
   * @example
   * 300
   */
  posInterval?: number;
  /**
   * @remarks
   * The type of the device. Valid values:
   * - ipc: IP camera.
   * - platform: Platform.
   * - ied: Intelligent device.
   * 
   * This parameter is required.
   * 
   * @example
   * ipc
   */
  type?: string;
  /**
   * @remarks
   * The URL of the stream on the device.
   * 
   * @example
   * rtmp://xxx/xxx
   */
  url?: string;
  /**
   * @remarks
   * The username of the device.
   * 
   * @example
   * admin
   */
  username?: string;
  /**
   * @remarks
   * The vendor of the device.
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

