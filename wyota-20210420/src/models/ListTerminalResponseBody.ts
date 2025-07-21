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

export class ListTerminalResponseBody extends $dara.Model {
  code?: string;
  data?: ListTerminalResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListTerminalResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

