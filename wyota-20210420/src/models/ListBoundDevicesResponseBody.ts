// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBoundDevicesResponseBodyDataDevices extends $dara.Model {
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

export class ListBoundDevicesResponseBodyData extends $dara.Model {
  devices?: ListBoundDevicesResponseBodyDataDevices[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': ListBoundDevicesResponseBodyDataDevices },
      pageNumber: 'number',
      pageSize: 'number',
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

export class ListBoundDevicesResponseBody extends $dara.Model {
  code?: string;
  data?: ListBoundDevicesResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListBoundDevicesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

