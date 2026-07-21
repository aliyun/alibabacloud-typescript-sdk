// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopSessionsResponseBodySessionsResourceGroups extends $dara.Model {
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-8whrmo2gtsb8bxxxx
   */
  id?: string;
  /**
   * @remarks
   * The resource group name.
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
   * The terminal device information.
   * 
   * @example
   * Mac
   */
  model?: string;
  /**
   * @remarks
   * The terminal device type.
   * 
   * @example
   * Mac
   */
  productName?: string;
  /**
   * @remarks
   * The terminal device serial number.
   * 
   * @example
   * 96c530bc-6095-4014-8bbc-d461b8ac****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The UUID of the logon device.
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
   * The client operating system.
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
   * The cloud computer ID.
   * 
   * @example
   * ecd-g6t1ukbaea****
   */
  desktopId?: string;
  /**
   * @remarks
   * The cloud computer name.
   * 
   * @example
   * DemoComputer
   */
  desktopName?: string;
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
   * The duration of remote assistance for the end user. Unit: seconds.
   * 
   * @example
   * 120
   */
  endUserApplyCoordinateTime?: number;
  /**
   * @remarks
   * The end user ID.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The duration of the most recent connection to the cloud computer. Unit: seconds.
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
   * TestOfficeSite
   */
  officeSiteName?: string;
  /**
   * @remarks
   * Specifies whether to check the session status within the cloud computer.
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
   * The resource group information.
   */
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
   * The session idle duration. Unit: seconds.
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
   * The session connection status.
   * 
   * @example
   * Connected
   */
  sessionStatus?: string;
  /**
   * @remarks
   * The purchase method of the cloud computer.
   * 
   * @example
   * monthPackage
   */
  subPayType?: string;
  /**
   * @remarks
   * The terminal device information.
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

