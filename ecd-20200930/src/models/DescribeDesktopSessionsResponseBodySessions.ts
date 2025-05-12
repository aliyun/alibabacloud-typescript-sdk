// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopSessionsResponseBodySessions extends $dara.Model {
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
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      endUserApplyCoordinateTime: 'EndUserApplyCoordinateTime',
      endUserId: 'EndUserId',
      latestConnectionTime: 'LatestConnectionTime',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      osSessionStatus: 'OsSessionStatus',
      osType: 'OsType',
      protocolType: 'ProtocolType',
      sessionEndTime: 'SessionEndTime',
      sessionIdleTime: 'SessionIdleTime',
      sessionStartTime: 'SessionStartTime',
      sessionStatus: 'SessionStatus',
      subPayType: 'SubPayType',
      totalConnectionTime: 'TotalConnectionTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      desktopId: 'string',
      desktopName: 'string',
      endUserApplyCoordinateTime: 'number',
      endUserId: 'string',
      latestConnectionTime: 'number',
      officeSiteId: 'string',
      officeSiteName: 'string',
      osSessionStatus: 'string',
      osType: 'string',
      protocolType: 'string',
      sessionEndTime: 'string',
      sessionIdleTime: 'number',
      sessionStartTime: 'string',
      sessionStatus: 'string',
      subPayType: 'string',
      totalConnectionTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

