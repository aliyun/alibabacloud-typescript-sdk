// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalDesktopRecordsResponseBodySessionsResourceGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the enterprise resource group.
   * 
   * @example
   * rg-f3s3dgt8dtb0vlqc8
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * dms_test
   */
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      resourceGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDesktopRecordsResponseBodySessionsSessions extends $dara.Model {
  /**
   * @remarks
   * The ID of the end user.
   * 
   * @example
   * TestUser
   */
  endUserId?: string;
  /**
   * @remarks
   * The creation time of the session. The time follows the ISO 8601 standard in UTC: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2022-08-31T06:56:45Z
   */
  establishmentTime?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      establishmentTime: 'EstablishmentTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      establishmentTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDesktopRecordsResponseBodySessions extends $dara.Model {
  /**
   * @remarks
   * The connection status.
   * 
   * @example
   * Connected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The creation time of the cloud desktop. The time follows the ISO 8601 standard in UTC.
   * 
   * @example
   * 2020-11-06T08:28Z
   */
  creationTime?: string;
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
   * The desktop status.
   * 
   * @example
   * Running
   */
  desktopStatus?: string;
  /**
   * @remarks
   * The ID of the end user.
   * 
   * @example
   * TestUser
   */
  endUserId?: string;
  /**
   * @remarks
   * The list of assigned end user IDs.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The GPU memory size.
   * 
   * @example
   * 8GiB
   */
  gpuSpec?: string;
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
   * The latest end time of the current session. The time follows the ISO 8601 standard in UTC: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2026-09-14T05:01:12Z
   */
  latestSessionEndTime?: string;
  /**
   * @remarks
   * The desktop management status.
   */
  managementFlags?: string[];
  /**
   * @remarks
   * The memory of the cloud computer. Unit: MiB.
   * 
   * @example
   * 4096
   */
  memory?: number;
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
   * The name of the office network.
   * 
   * @example
   * TestOfficeSite
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The office network type.
   * 
   * @example
   * Simple
   */
  officeSiteType?: string;
  /**
   * @remarks
   * The operating system type. Valid values:
   * 
   * - Windows
   * - Linux
   * 
   * @example
   * Linux
   */
  osType?: string;
  /**
   * @remarks
   * The specific operating system model.
   * 
   * @example
   * Windows 10
   */
  platform?: string;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * - HDX
   * - ASP
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the enterprise resource group.
   */
  resourceGroups?: DescribeGlobalDesktopRecordsResponseBodySessionsResourceGroups[];
  /**
   * @remarks
   * The idle duration of the session. Unit: minutes.
   * 
   * @example
   * 120
   */
  sessionIdleTime?: number;
  /**
   * @remarks
   * The session details.
   */
  sessions?: DescribeGlobalDesktopRecordsResponseBodySessionsSessions[];
  /**
   * @remarks
   * The UNIX timestamp of the time when the cloud computer status changed. Unit: milliseconds.
   * 
   * @example
   * 1760583xxxx
   */
  statusChangeTime?: number;
  /**
   * @remarks
   * The billing method of the cloud computer. Valid values:
   * 
   * - prePaid: monthly subscription with unlimited duration
   * - postPaid: pay-as-you-go
   * - monthPackage: monthly time package
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
  /**
   * @remarks
   * The uptime of the cloud computer. Unit: seconds.
   * 
   * @example
   * 86400
   */
  upTime?: number;
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'ConnectionStatus',
      cpu: 'Cpu',
      creationTime: 'CreationTime',
      desktopGroupId: 'DesktopGroupId',
      desktopGroupName: 'DesktopGroupName',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatus: 'DesktopStatus',
      endUserId: 'EndUserId',
      endUserIds: 'EndUserIds',
      gpuSpec: 'GpuSpec',
      latestConnectionTime: 'LatestConnectionTime',
      latestSessionEndTime: 'LatestSessionEndTime',
      managementFlags: 'ManagementFlags',
      memory: 'Memory',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      officeSiteType: 'OfficeSiteType',
      osType: 'OsType',
      platform: 'Platform',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
      resourceGroups: 'ResourceGroups',
      sessionIdleTime: 'SessionIdleTime',
      sessions: 'Sessions',
      statusChangeTime: 'StatusChangeTime',
      subPayType: 'SubPayType',
      totalConnectionTime: 'TotalConnectionTime',
      upTime: 'UpTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      cpu: 'number',
      creationTime: 'string',
      desktopGroupId: 'string',
      desktopGroupName: 'string',
      desktopId: 'string',
      desktopName: 'string',
      desktopStatus: 'string',
      endUserId: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      gpuSpec: 'string',
      latestConnectionTime: 'number',
      latestSessionEndTime: 'string',
      managementFlags: { 'type': 'array', 'itemType': 'string' },
      memory: 'number',
      officeSiteId: 'string',
      officeSiteName: 'string',
      officeSiteType: 'string',
      osType: 'string',
      platform: 'string',
      protocolType: 'string',
      regionId: 'string',
      resourceGroups: { 'type': 'array', 'itemType': DescribeGlobalDesktopRecordsResponseBodySessionsResourceGroups },
      sessionIdleTime: 'number',
      sessions: { 'type': 'array', 'itemType': DescribeGlobalDesktopRecordsResponseBodySessionsSessions },
      statusChangeTime: 'number',
      subPayType: 'string',
      totalConnectionTime: 'number',
      upTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.endUserIds)) {
      $dara.Model.validateArray(this.endUserIds);
    }
    if(Array.isArray(this.managementFlags)) {
      $dara.Model.validateArray(this.managementFlags);
    }
    if(Array.isArray(this.resourceGroups)) {
      $dara.Model.validateArray(this.resourceGroups);
    }
    if(Array.isArray(this.sessions)) {
      $dara.Model.validateArray(this.sessions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDesktopRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The session details.
   */
  sessions?: DescribeGlobalDesktopRecordsResponseBodySessions[];
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
      sessions: { 'type': 'array', 'itemType': DescribeGlobalDesktopRecordsResponseBodySessions },
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

