// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopGroupSessionsResponseBodySessions extends $dara.Model {
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
   * The OS that the client runs.
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
   * The ID of the desktop group.
   * 
   * @example
   * dg-iaqu3bi2xtie****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The name of the desktop group.
   * 
   * @example
   * Test
   */
  desktopGroupName?: string;
  /**
   * @remarks
   * If the session is being established, the value of this parameter indicates the ID of the current cloud desktop. If the session is disconnected, the value of this parameter indicates the ID of the cloud desktop that was most recently connected.
   * 
   * @example
   * ecd-g6t1ukbaea****
   */
  desktopId?: string;
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
   * The ID of the end user.
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
   * The duration of the most recent session.
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
   * The name of the workspace.
   * 
   * @example
   * Test
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The OS. Valid values:
   * 
   * *   Windows
   * *   Linux
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
   * The type of the protocol.
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The duration during which the cloud desktop stays in the Idle state.
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
   * The total duration of the sessions.
   * 
   * @example
   * 120
   */
  totalConnectionDuration?: number;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      desktopGroupId: 'DesktopGroupId',
      desktopGroupName: 'DesktopGroupName',
      desktopId: 'DesktopId',
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
      totalConnectionDuration: 'TotalConnectionDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      desktopGroupId: 'string',
      desktopGroupName: 'string',
      desktopId: 'string',
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
      totalConnectionDuration: 'number',
    };
  }

  validate() {
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

