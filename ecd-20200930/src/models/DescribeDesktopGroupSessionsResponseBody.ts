// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopGroupSessionsResponseBodySessionsTerminalInfo extends $dara.Model {
  /**
   * @remarks
   * The terminal device model.
   * 
   * @example
   * wuying_mac_x86_64
   */
  model?: string;
  /**
   * @remarks
   * The terminal type.
   * 
   * @example
   * Mac
   */
  productName?: string;
  /**
   * @remarks
   * The terminal serial number.
   * 
   * @example
   * 96c530bc-6095-4014-8bbc-d461b8ac****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The UUID of the terminal device.
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

export class DescribeDesktopGroupSessionsResponseBodySessions extends $dara.Model {
  /**
   * @remarks
   * The account type.
   * 
   * @example
   * SIMPLE
   */
  accountType?: string;
  /**
   * @remarks
   * The client IP address.
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
   * windows
   */
  clientOS?: string;
  /**
   * @remarks
   * The client version.
   * 
   * @example
   * 7.8.0
   */
  clientVersion?: string;
  /**
   * @remarks
   * The ID of the shared cloud computer.
   * 
   * @example
   * dg-iaqu3bi2xtie****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The name of the shared cloud computer.
   * 
   * @example
   * DemoCCGroup
   */
  desktopGroupName?: string;
  /**
   * @remarks
   * The cloud computer ID. If the session status is Connected, this value indicates the ID of the currently connected cloud computer. If the session status is Disconnected, this value indicates the ID of the most recently connected cloud computer.
   * 
   * @example
   * ecd-g6t1ukbaea****
   */
  desktopId?: string;
  /**
   * @remarks
   * The office network type.
   * 
   * @example
   * SIMPLE
   */
  directoryType?: string;
  /**
   * @remarks
   * The point in time when the user requested administrator assistance. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1678794261000
   */
  endUserApplyCoordinateTime?: number;
  /**
   * @remarks
   * The ID of the end user connected to the session.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The end time of the most recent connection. Time format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2022-08-31 07:56:45
   */
  lastSessionEndTime?: string;
  /**
   * @remarks
   * The start time of the most recent connection. Time format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2022-08-31 06:56:45
   */
  lastSessionStartTime?: string;
  /**
   * @remarks
   * The duration of the most recent connection. Unit: seconds.
   * 
   * @example
   * 120
   */
  latestConnectionTime?: number;
  /**
   * @remarks
   * The ID of the office network.
   * 
   * @example
   * cn-hangzhou+dir-8904****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The name of the office network.
   * 
   * @example
   * DemoOfficeNetwork
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The operating system type of the cloud computer.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The session type.
   * 
   * @example
   * 0
   */
  ownType?: number;
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
   * The idle duration of the cloud computer. Unit: seconds.
   * 
   * @example
   * 120
   */
  sessionIdleTime?: number;
  /**
   * @remarks
   * The session connection status.
   * 
   * @example
   * Connected
   */
  sessionStatus?: string;
  /**
   * @remarks
   * The terminal information.
   */
  terminalInfo?: DescribeDesktopGroupSessionsResponseBodySessionsTerminalInfo;
  /**
   * @remarks
   * The total connection duration. Unit: seconds.
   * 
   * @example
   * 120
   */
  totalConnectionDuration?: number;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      desktopGroupId: 'DesktopGroupId',
      desktopGroupName: 'DesktopGroupName',
      desktopId: 'DesktopId',
      directoryType: 'DirectoryType',
      endUserApplyCoordinateTime: 'EndUserApplyCoordinateTime',
      endUserId: 'EndUserId',
      lastSessionEndTime: 'LastSessionEndTime',
      lastSessionStartTime: 'LastSessionStartTime',
      latestConnectionTime: 'LatestConnectionTime',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      osType: 'OsType',
      ownType: 'OwnType',
      protocolType: 'ProtocolType',
      sessionIdleTime: 'SessionIdleTime',
      sessionStatus: 'SessionStatus',
      terminalInfo: 'TerminalInfo',
      totalConnectionDuration: 'TotalConnectionDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      desktopGroupId: 'string',
      desktopGroupName: 'string',
      desktopId: 'string',
      directoryType: 'string',
      endUserApplyCoordinateTime: 'number',
      endUserId: 'string',
      lastSessionEndTime: 'string',
      lastSessionStartTime: 'string',
      latestConnectionTime: 'number',
      officeSiteId: 'string',
      officeSiteName: 'string',
      osType: 'string',
      ownType: 'number',
      protocolType: 'string',
      sessionIdleTime: 'number',
      sessionStatus: 'string',
      terminalInfo: DescribeDesktopGroupSessionsResponseBodySessionsTerminalInfo,
      totalConnectionDuration: 'number',
    };
  }

  validate() {
    if(this.terminalInfo && typeof (this.terminalInfo as any).validate === 'function') {
      (this.terminalInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopGroupSessionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token for the start of the next page.
   * 
   * @example
   * caeba0bbb2
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D0920845-7359-59FC-9899-B****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of session data.
   */
  sessions?: DescribeDesktopGroupSessionsResponseBodySessions[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      sessions: 'Sessions',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      sessions: { 'type': 'array', 'itemType': DescribeDesktopGroupSessionsResponseBodySessions },
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

