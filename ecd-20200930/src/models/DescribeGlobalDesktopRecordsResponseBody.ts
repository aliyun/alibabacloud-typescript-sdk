// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalDesktopRecordsResponseBodySessionsResourceGroups extends $dara.Model {
  /**
   * @example
   * rg-f3s3dgt8dtb0vlqc8
   */
  resourceGroupId?: string;
  /**
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
   * @example
   * TestUser
   */
  endUserId?: string;
  /**
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
   * @example
   * Connected
   */
  connectionStatus?: string;
  /**
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @example
   * dg-iaqu3bi2xtie****
   */
  desktopGroupId?: string;
  /**
   * @example
   * DemoCCGroup
   */
  desktopGroupName?: string;
  /**
   * @example
   * ecd-g6t1ukbaea****
   */
  desktopId?: string;
  /**
   * @example
   * DemoComputer
   */
  desktopName?: string;
  /**
   * @example
   * Running
   */
  desktopStatus?: string;
  /**
   * @example
   * TestUser
   */
  endUserId?: string;
  endUserIds?: string[];
  /**
   * @example
   * 8GiB
   */
  gpuSpec?: string;
  /**
   * @example
   * 120
   */
  latestConnectionTime?: number;
  /**
   * @example
   * 4096
   */
  memory?: number;
  /**
   * @example
   * cn-hangzhou+dir-8904****
   */
  officeSiteId?: string;
  /**
   * @example
   * TestOfficeSite
   */
  officeSiteName?: string;
  /**
   * @example
   * Linux
   */
  osType?: string;
  /**
   * @example
   * Windows 10
   */
  platform?: string;
  /**
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceGroups?: DescribeGlobalDesktopRecordsResponseBodySessionsResourceGroups[];
  /**
   * @example
   * 120
   */
  sessionIdleTime?: number;
  sessions?: DescribeGlobalDesktopRecordsResponseBodySessionsSessions[];
  /**
   * @example
   * 1760583xxxx
   */
  statusChangeTime?: number;
  /**
   * @example
   * monthPackage
   */
  subPayType?: string;
  /**
   * @example
   * 240
   */
  totalConnectionTime?: number;
  /**
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
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  sessions?: DescribeGlobalDesktopRecordsResponseBodySessions[];
  /**
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

