// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNetDeviceInfoWithSizeRequest extends $dara.Model {
  appCode?: string;
  appName?: string;
  cursor?: number;
  hostName?: string;
  id?: number;
  idc?: string;
  logicNetPod?: string;
  manufacturer?: string;
  mgnIp?: string;
  model?: string;
  netPod?: string;
  pageSize?: number;
  password?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  role?: string;
  serviceTag?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appName: 'AppName',
      cursor: 'Cursor',
      hostName: 'HostName',
      id: 'Id',
      idc: 'Idc',
      logicNetPod: 'LogicNetPod',
      manufacturer: 'Manufacturer',
      mgnIp: 'MgnIp',
      model: 'Model',
      netPod: 'NetPod',
      pageSize: 'PageSize',
      password: 'Password',
      requestId: 'RequestId',
      role: 'Role',
      serviceTag: 'ServiceTag',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appName: 'string',
      cursor: 'number',
      hostName: 'string',
      id: 'number',
      idc: 'string',
      logicNetPod: 'string',
      manufacturer: 'string',
      mgnIp: 'string',
      model: 'string',
      netPod: 'string',
      pageSize: 'number',
      password: 'string',
      requestId: 'string',
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

