// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUnbindDevicesResponseBodyDataDevices extends $dara.Model {
  alias?: string;
  boundTime?: string;
  buildId?: string;
  clientType?: string;
  connectionStatus?: string;
  deviceMqttConnectionStatus?: number;
  deviceOs?: string;
  devicePlatform?: string;
  inManage?: boolean;
  lastLoginTime?: string;
  lastLoginUser?: string;
  loginUser?: string;
  model?: string;
  passwordFreeLoginUser?: string;
  passwordFreeLoginUserNickName?: string;
  privateIp?: string;
  productName?: string;
  publicIp?: string;
  serialNo?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      boundTime: 'BoundTime',
      buildId: 'BuildId',
      clientType: 'ClientType',
      connectionStatus: 'ConnectionStatus',
      deviceMqttConnectionStatus: 'DeviceMqttConnectionStatus',
      deviceOs: 'DeviceOs',
      devicePlatform: 'DevicePlatform',
      inManage: 'InManage',
      lastLoginTime: 'LastLoginTime',
      lastLoginUser: 'LastLoginUser',
      loginUser: 'LoginUser',
      model: 'Model',
      passwordFreeLoginUser: 'PasswordFreeLoginUser',
      passwordFreeLoginUserNickName: 'PasswordFreeLoginUserNickName',
      privateIp: 'PrivateIp',
      productName: 'ProductName',
      publicIp: 'PublicIp',
      serialNo: 'SerialNo',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      boundTime: 'string',
      buildId: 'string',
      clientType: 'string',
      connectionStatus: 'string',
      deviceMqttConnectionStatus: 'number',
      deviceOs: 'string',
      devicePlatform: 'string',
      inManage: 'boolean',
      lastLoginTime: 'string',
      lastLoginUser: 'string',
      loginUser: 'string',
      model: 'string',
      passwordFreeLoginUser: 'string',
      passwordFreeLoginUserNickName: 'string',
      privateIp: 'string',
      productName: 'string',
      publicIp: 'string',
      serialNo: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

