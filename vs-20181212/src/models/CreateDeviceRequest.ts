// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDeviceRequest extends $dara.Model {
  /**
   * @example
   * 0
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
  description?: string;
  /**
   * @example
   * 399*****488-cn-qingdao
   */
  directoryId?: string;
  /**
   * @example
   * 7D0*****4C0
   */
  dsn?: string;
  /**
   * @example
   * 31000000****00000002
   */
  gbId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
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
  ownerId?: number;
  /**
   * @example
   * {}
   */
  params?: string;
  /**
   * @example
   * 399*****774-cn-qingdao
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
   * @remarks
   * This parameter is required.
   * 
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

