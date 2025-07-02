// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTerminalResponseBodyData extends $dara.Model {
  alias?: string;
  bindUserCount?: number;
  bindUserId?: string;
  buildId?: string;
  clientType?: number;
  desktopId?: string;
  inManage?: boolean;
  ipv4?: string;
  /**
   * @deprecated
   */
  lastLoginUser?: string;
  locationInfo?: string;
  lockSettings?: boolean;
  loginUser?: string;
  model?: string;
  onlineStatus?: boolean;
  serialNumber?: string;
  terminalGroupId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      bindUserCount: 'BindUserCount',
      bindUserId: 'BindUserId',
      buildId: 'BuildId',
      clientType: 'ClientType',
      desktopId: 'DesktopId',
      inManage: 'InManage',
      ipv4: 'Ipv4',
      lastLoginUser: 'LastLoginUser',
      locationInfo: 'LocationInfo',
      lockSettings: 'LockSettings',
      loginUser: 'LoginUser',
      model: 'Model',
      onlineStatus: 'OnlineStatus',
      serialNumber: 'SerialNumber',
      terminalGroupId: 'TerminalGroupId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      bindUserCount: 'number',
      bindUserId: 'string',
      buildId: 'string',
      clientType: 'number',
      desktopId: 'string',
      inManage: 'boolean',
      ipv4: 'string',
      lastLoginUser: 'string',
      locationInfo: 'string',
      lockSettings: 'boolean',
      loginUser: 'string',
      model: 'string',
      onlineStatus: 'boolean',
      serialNumber: 'string',
      terminalGroupId: 'string',
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

