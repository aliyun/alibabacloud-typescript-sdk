// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopSessionsResponseBodySessionsResourceGroups extends $dara.Model {
  /**
   * @example
   * rg-8whrmo2gtsb8bxxxx
   */
  id?: string;
  /**
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
   * @example
   * Mac
   */
  model?: string;
  /**
   * @example
   * Mac
   */
  productName?: string;
  /**
   * @example
   * 96c530bc-6095-4014-8bbc-d461b8ac****
   */
  serialNumber?: string;
  /**
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
   * The client OS.
   * 
   * @example
   * windows_\\"Windows10Enterprise\\"10.0(Build22000)
   */
  clientOS?: string;
  /**
   * @remarks
   * The client version.
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
   * testDesktop
   */
  desktopName?: string;
  /**
   * @example
   * SIMPLE
   */
  directoryType?: string;
  /**
   * @remarks
   * The duration of the remote assistance. Unit: seconds.
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
   * testUser
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
   * DemoOfficeSite
   */
  officeSiteName?: string;
  /**
   * @remarks
   * Indicates whether the switch to check session status of cloud computers is turned on.
   * 
   * @example
   * true
   */
  osSessionStatus?: string;
  /**
   * @remarks
   * The OS.
   * 
   * Valid values:
   * 
   * *   Linux
   * *   Windows
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * Valid values:
   * 
   * *   HDX
   * *   ASP
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  resourceGroups?: DescribeDesktopSessionsResponseBodySessionsResourceGroups[];
  /**
   * @remarks
   * The end time of the session.
   * 
   * @example
   * 2023-01-28T02:31:43Z
   */
  sessionEndTime?: string;
  /**
   * @remarks
   * The idle duration of the session. Unit: seconds.
   * 
   * @example
   * 120
   */
  sessionIdleTime?: number;
  /**
   * @remarks
   * The start time of the session.
   * 
   * @example
   * 2023-01-28T02:31:43Z
   */
  sessionStartTime?: string;
  /**
   * @remarks
   * The state of the session.
   * 
   * Valid values:
   * 
   * *   Connected
   * *   Disconnected
   * 
   * @example
   * Connected
   */
  sessionStatus?: string;
  /**
   * @remarks
   * The billing method of cloud computers.
   * 
   * Valid values:
   * 
   * *   duration: hourly plan (available for users in the whitelist)
   * *   postPaid: pay-as-you-go
   * *   monthPackage: monthly subscription (120-hour computing plan and 250-hour computing plan)
   * *   prePaid: monthly subscription (Unlimited computing plan)
   * 
   * @example
   * monthPackage
   */
  subPayType?: string;
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
   * Details of sessions.
   */
  sessions?: DescribeDesktopSessionsResponseBodySessions[];
  /**
   * @remarks
   * The total number of entries returned.
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

