// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NewNetDeviceInfoRequestDevices extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  hostName?: string;
  idc?: string;
  logicNetPod?: string;
  manufacturer?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  mgnIp?: string;
  model?: string;
  netPod?: string;
  password?: string;
  role?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  serviceTag?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      hostName: 'HostName',
      idc: 'Idc',
      logicNetPod: 'LogicNetPod',
      manufacturer: 'Manufacturer',
      mgnIp: 'MgnIp',
      model: 'Model',
      netPod: 'NetPod',
      password: 'Password',
      role: 'Role',
      serviceTag: 'ServiceTag',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostName: 'string',
      idc: 'string',
      logicNetPod: 'string',
      manufacturer: 'string',
      mgnIp: 'string',
      model: 'string',
      netPod: 'string',
      password: 'string',
      role: 'string',
      serviceTag: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NewNetDeviceInfoRequest extends $dara.Model {
  appCode?: string;
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  devices?: NewNetDeviceInfoRequestDevices[];
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appName: 'AppName',
      devices: 'Devices',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appName: 'string',
      devices: { 'type': 'array', 'itemType': NewNetDeviceInfoRequestDevices },
      requestId: 'string',
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

