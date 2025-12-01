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
   * The queried resource group name.
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
   * The end user ID.
   * 
   * @example
   * TestUser
   */
  endUserId?: string;
  /**
   * @remarks
   * The time when the session was created.
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
   * The connection status of the cloud desktop.
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
   * The ID of the cloud computer share.
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
   * DemoCCGroup
   */
  desktopGroupName?: string;
  /**
   * @remarks
   * The cloud computer IDs.
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
   * 桌面状态
   * 
   * @example
   * Running
   */
  desktopStatus?: string;
  /**
   * @remarks
   * The end user ID.
   * 
   * @example
   * TestUser
   */
  endUserId?: string;
  /**
   * @remarks
   * The list of assigned terminal user IDs.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The size of the GPU memory.
   * 
   * @example
   * 8GiB
   */
  gpuSpec?: string;
  /**
   * @remarks
   * The duration of the last connection to the cloud computer. Unit: seconds
   * 
   * @example
   * 120
   */
  latestConnectionTime?: number;
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
   * The office network name.
   * 
   * @example
   * TestOfficeSite
   */
  officeSiteName?: string;
  /**
   * @example
   * Simple
   */
  officeSiteType?: string;
  /**
   * @remarks
   * The OS type. Valid values:
   * 
   * *   Windows
   * *   Linux
   * 
   * @example
   * Linux
   */
  osType?: string;
  /**
   * @remarks
   * The specific model of the operating system.
   * 
   * @example
   * Windows 10
   */
  platform?: string;
  /**
   * @remarks
   * Protocol type.
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
   * The ID of the region where the instance resides.
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
   * The time when the status of the cloud computer was changed.
   * 
   * @example
   * 1760583xxxx
   */
  statusChangeTime?: number;
  /**
   * @remarks
   * The billing method of the cloud computer. Valid values:
   * 
   * *   prePaid: The monthly purchase is unlimited.
   * *   postPaid: pay-as-you-go
   * *   monthPackage: monthly duration.
   * 
   * @example
   * monthPackage
   */
  subPayType?: string;
  /**
   * @remarks
   * The total connection duration. Unit: seconds
   * 
   * @example
   * 240
   */
  totalConnectionTime?: number;
  /**
   * @remarks
   * The startup duration of the cloud computer. Unit: seconds
   * 
   * @example
   * 86400
   */
  upTime?: number;
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'ConnectionStatus',
      cpu: 'Cpu',
      desktopGroupId: 'DesktopGroupId',
      desktopGroupName: 'DesktopGroupName',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatus: 'DesktopStatus',
      endUserId: 'EndUserId',
      endUserIds: 'EndUserIds',
      gpuSpec: 'GpuSpec',
      latestConnectionTime: 'LatestConnectionTime',
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
      desktopGroupId: 'string',
      desktopGroupName: 'string',
      desktopId: 'string',
      desktopName: 'string',
      desktopStatus: 'string',
      endUserId: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      gpuSpec: 'string',
      latestConnectionTime: 'number',
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

