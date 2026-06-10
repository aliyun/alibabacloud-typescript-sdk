// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopSessionsResponseBodySessionsResourceGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-8whrmo2gtsb8bxxxx
   */
  id?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * RgTest
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopSessionsResponseBodySessionsTerminalInfo extends $dara.Model {
  /**
   * @remarks
   * The model of the terminal device.
   * 
   * @example
   * Mac
   */
  model?: string;
  /**
   * @remarks
   * The type of the terminal device.
   * 
   * @example
   * Mac
   */
  productName?: string;
  /**
   * @remarks
   * The serial number of the terminal device.
   * 
   * @example
   * 96c530bc-6095-4014-8bbc-d461b8ac****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The universally unique identifier (UUID) of the logon device.
   * 
   * @example
   * EBFDC7773BEBAD418A9F89429652****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      model: 'Model',
      productName: 'ProductName',
      serialNumber: 'SerialNumber',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
      productName: 'string',
      serialNumber: 'string',
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

export class DescribeDesktopSessionsResponseBodySessions extends $dara.Model {
  /**
   * @remarks
   * The type of the account.
   * 
   * @example
   * SIMPLE
   */
  accountType?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 172.21.XX.XX
   */
  clientIp?: string;
  /**
   * @remarks
   * The operating system of the client.
   * 
   * @example
   * windows_\\"Windows10Enterprise\\"10.0(Build22000)
   */
  clientOS?: string;
  /**
   * @remarks
   * The version of the client.
   * 
   * @example
   * 2.0.0-R-20221030.08****
   */
  clientVersion?: string;
  /**
   * @remarks
   * The ID of the cloud computer.
   * 
   * @example
   * ecd-g6t1ukbaea****
   */
  desktopId?: string;
  /**
   * @remarks
   * The name of the cloud computer.
   * 
   * @example
   * DemoComputer
   */
  desktopName?: string;
  /**
   * @remarks
   * The type of the office network.
   * 
   * @example
   * SIMPLE
   */
  directoryType?: string;
  /**
   * @remarks
   * The duration of remote assistance initiated by the end user. Unit: seconds.
   * 
   * @example
   * 120
   */
  endUserApplyCoordinateTime?: number;
  /**
   * @remarks
   * The ID of the end user.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The duration of the last connection to the cloud computer. Unit: seconds.
   * 
   * @example
   * 120
   */
  latestConnectionTime?: number;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * cn-hangzhou+dir-8904****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The name of the office site.
   * 
   * @example
   * TestOfficeSite
   */
  officeSiteName?: string;
  /**
   * @remarks
   * Indicates the session status of the cloud desktop.
   * 
   * @example
   * true
   */
  osSessionStatus?: string;
  /**
   * @remarks
   * The operating system type.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The information about the resource group.
   */
  resourceGroups?: DescribeDesktopSessionsResponseBodySessionsResourceGroups[];
  /**
   * @remarks
   * The time when the session ended.
   * 
   * @example
   * 2023-01-28T02:31:43Z
   */
  sessionEndTime?: string;
  /**
   * @remarks
   * The duration for which the session was idle. Unit: seconds.
   * 
   * @example
   * 120
   */
  sessionIdleTime?: number;
  /**
   * @remarks
   * The time when the session started.
   * 
   * @example
   * 2023-01-28T02:31:43Z
   */
  sessionStartTime?: string;
  /**
   * @remarks
   * The connection status of the session.
   * 
   * @example
   * Connected
   */
  sessionStatus?: string;
  /**
   * @remarks
   * The billing method of the cloud computer.
   * 
   * @example
   * monthPackage
   */
  subPayType?: string;
  /**
   * @remarks
   * The description of the terminal device.
   */
  terminalInfo?: DescribeDesktopSessionsResponseBodySessionsTerminalInfo;
  /**
   * @remarks
   * The total connection duration. Unit: seconds.
   * 
   * @example
   * 240
   */
  totalConnectionTime?: number;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      directoryType: 'DirectoryType',
      endUserApplyCoordinateTime: 'EndUserApplyCoordinateTime',
      endUserId: 'EndUserId',
      latestConnectionTime: 'LatestConnectionTime',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      osSessionStatus: 'OsSessionStatus',
      osType: 'OsType',
      protocolType: 'ProtocolType',
      resourceGroups: 'ResourceGroups',
      sessionEndTime: 'SessionEndTime',
      sessionIdleTime: 'SessionIdleTime',
      sessionStartTime: 'SessionStartTime',
      sessionStatus: 'SessionStatus',
      subPayType: 'SubPayType',
      terminalInfo: 'TerminalInfo',
      totalConnectionTime: 'TotalConnectionTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      desktopId: 'string',
      desktopName: 'string',
      directoryType: 'string',
      endUserApplyCoordinateTime: 'number',
      endUserId: 'string',
      latestConnectionTime: 'number',
      officeSiteId: 'string',
      officeSiteName: 'string',
      osSessionStatus: 'string',
      osType: 'string',
      protocolType: 'string',
      resourceGroups: { 'type': 'array', 'itemType': DescribeDesktopSessionsResponseBodySessionsResourceGroups },
      sessionEndTime: 'string',
      sessionIdleTime: 'number',
      sessionStartTime: 'string',
      sessionStatus: 'string',
      subPayType: 'string',
      terminalInfo: DescribeDesktopSessionsResponseBodySessionsTerminalInfo,
      totalConnectionTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resourceGroups)) {
      $dara.Model.validateArray(this.resourceGroups);
    }
    if(this.terminalInfo && typeof (this.terminalInfo as any).validate === 'function') {
      (this.terminalInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopSessionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3EC4A6DB-EC8D-55B0-9038-543DE671****
   */
  requestId?: string;
  /**
   * @remarks
   * The session details.
   */
  sessions?: DescribeDesktopSessionsResponseBodySessions[];
  /**
   * @remarks
   * The total number of query results.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sessions: 'Sessions',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sessions: { 'type': 'array', 'itemType': DescribeDesktopSessionsResponseBodySessions },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sessions)) {
      $dara.Model.validateArray(this.sessions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

