// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopGroupSessionsResponseBodySessionsTerminalInfo extends $dara.Model {
  /**
   * @remarks
   * The type of the terminal.
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
   * Terminal Serial Number
   * 
   * @example
   * 96c530bc-6095-4014-8bbc-d461b8ac****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The terminal UUID.
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
   * 账号类型
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
   * The ID of the shared cloud computer.
   * 
   * @example
   * dg-iaqu3bi2xtie****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The name of the cloud computer share.
   * 
   * @example
   * Test
   */
  desktopGroupName?: string;
  /**
   * @remarks
   * If the session status is Connected, it indicates the ID of the cloud computer that is currently connected. If the session status is Disconnected, it indicates the ID of the cloud computer that was last connected.
   * 
   * @example
   * ecd-g6t1ukbaea****
   */
  desktopId?: string;
  /**
   * @remarks
   * 办公网络类型
   * 
   * @example
   * SIMPLE
   */
  directoryType?: string;
  /**
   * @remarks
   * The point in time when the end user applies for administrator assistance.
   * 
   * @example
   * 1678794261000
   */
  endUserApplyCoordinateTime?: number;
  /**
   * @remarks
   * The user ID of the terminal that connects to the session.
   * 
   * @example
   * xianqiu
   */
  endUserId?: string;
  /**
   * @remarks
   * The end time of the most recent connection.
   * 
   * @example
   * 2022-08-31 06:56:45
   */
  lastSessionEndTime?: string;
  /**
   * @remarks
   * The start time of the most recent connection.
   * 
   * @example
   * 2022-08-31 06:56:45
   */
  lastSessionStartTime?: string;
  /**
   * @remarks
   * The duration of the most recent session. Unit: seconds.
   * 
   * @example
   * 120
   */
  latestConnectionTime?: number;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-8904****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The office network name.
   * 
   * @example
   * Test
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The operating system type of the cloud computer.
   * 
   * Valid values:
   * 
   * *   linux.
   * *   Windows.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The type of the session.
   * 
   * Valid values:
   * 
   * *   0: single-session
   * *   1: multi-session
   * 
   * @example
   * 0
   */
  ownType?: number;
  /**
   * @remarks
   * The protocol type supported by the rule.
   * 
   * Valid value:
   * 
   * *   High-definition Experience (HDX).
   * *   ASP.
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
   * The state of the session.
   * 
   * Valid values:
   * 
   * *   Connected
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Disconnected
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Connected
   */
  sessionStatus?: string;
  /**
   * @remarks
   * Terminal Info
   */
  terminalInfo?: DescribeDesktopGroupSessionsResponseBodySessionsTerminalInfo;
  /**
   * @remarks
   * The total duration of the sessions. Unit: seconds.
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
   * A pagination token. It can be used in the next request to retrieve a new page of results.
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
   * The sessions.
   */
  sessions?: DescribeDesktopGroupSessionsResponseBodySessions[];
  /**
   * @remarks
   * The total number of sessions.
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

