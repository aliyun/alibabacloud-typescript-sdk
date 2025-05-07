// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGlobalDesktopsResponseBodyDesktopsClients } from "./DescribeGlobalDesktopsResponseBodyDesktopsClients";
import { DescribeGlobalDesktopsResponseBodyDesktopsDesktopTimers } from "./DescribeGlobalDesktopsResponseBodyDesktopsDesktopTimers";
import { DescribeGlobalDesktopsResponseBodyDesktopsDisks } from "./DescribeGlobalDesktopsResponseBodyDesktopsDisks";
import { DescribeGlobalDesktopsResponseBodyDesktopsFotaUpdate } from "./DescribeGlobalDesktopsResponseBodyDesktopsFotaUpdate";
import { DescribeGlobalDesktopsResponseBodyDesktopsSessions } from "./DescribeGlobalDesktopsResponseBodyDesktopsSessions";


export class DescribeGlobalDesktopsResponseBodyDesktops extends $dara.Model {
  /**
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * 支持的客户端信息
   */
  clients?: DescribeGlobalDesktopsResponseBodyDesktopsClients[];
  /**
   * @example
   * Disconnected
   */
  connectionStatus?: string;
  /**
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @example
   * 2020-11-06T08:28Z
   */
  creationTime?: string;
  /**
   * @example
   * dg-3uiojcc0j4kh7****
   */
  desktopGroupId?: string;
  /**
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string;
  /**
   * @example
   * testDesktopName
   */
  desktopName?: string;
  /**
   * @example
   * Running
   */
  desktopStatus?: string;
  desktopTimers?: DescribeGlobalDesktopsResponseBodyDesktopsDesktopTimers[];
  /**
   * @example
   * ecd.basic.large
   */
  desktopType?: string;
  /**
   * @example
   * cn-hangzhou+dir-jedbpr4sl9l37****
   */
  directoryId?: string;
  disks?: DescribeGlobalDesktopsResponseBodyDesktopsDisks[];
  /**
   * @example
   * User1
   */
  endUserId?: string;
  endUserIds?: string[];
  /**
   * @example
   * 2021-12-31T15:59Z
   */
  expiredTime?: string;
  fotaUpdate?: DescribeGlobalDesktopsResponseBodyDesktopsFotaUpdate;
  /**
   * @example
   * 2048
   */
  gpuMemory?: number;
  hibernationBeta?: boolean;
  /**
   * @example
   * testName
   */
  hostName?: string;
  /**
   * @example
   * m-4zfb6zj728hhr****
   */
  imageId?: string;
  /**
   * @example
   * 2021-07-13T15:59Z
   */
  lastStartTime?: string;
  localName?: string;
  managementFlags?: string[];
  /**
   * @example
   * 4096
   */
  memory?: number;
  /**
   * @example
   * 192.168.xx.xx
   */
  networkInterfaceIp?: string;
  /**
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  os?: string;
  osDescription?: string;
  /**
   * @example
   * Windows
   */
  osType?: string;
  platform?: string;
  /**
   * @example
   * pg-9cktlowtxfl6****
   */
  policyGroupId?: string;
  /**
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @example
   * ecd-gx2x1dhsm****
   */
  realDesktopId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  regionLocation?: string;
  sessionType?: string;
  sessions?: DescribeGlobalDesktopsResponseBodyDesktopsSessions[];
  /**
   * @example
   * true
   */
  supportHibernation?: boolean;
  /**
   * @example
   * testDesktop
   */
  userCustomName?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      clients: 'Clients',
      connectionStatus: 'ConnectionStatus',
      cpu: 'Cpu',
      creationTime: 'CreationTime',
      desktopGroupId: 'DesktopGroupId',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatus: 'DesktopStatus',
      desktopTimers: 'DesktopTimers',
      desktopType: 'DesktopType',
      directoryId: 'DirectoryId',
      disks: 'Disks',
      endUserId: 'EndUserId',
      endUserIds: 'EndUserIds',
      expiredTime: 'ExpiredTime',
      fotaUpdate: 'FotaUpdate',
      gpuMemory: 'GpuMemory',
      hibernationBeta: 'HibernationBeta',
      hostName: 'HostName',
      imageId: 'ImageId',
      lastStartTime: 'LastStartTime',
      localName: 'LocalName',
      managementFlags: 'ManagementFlags',
      memory: 'Memory',
      networkInterfaceIp: 'NetworkInterfaceIp',
      officeSiteId: 'OfficeSiteId',
      os: 'Os',
      osDescription: 'OsDescription',
      osType: 'OsType',
      platform: 'Platform',
      policyGroupId: 'PolicyGroupId',
      protocolType: 'ProtocolType',
      realDesktopId: 'RealDesktopId',
      regionId: 'RegionId',
      regionLocation: 'RegionLocation',
      sessionType: 'SessionType',
      sessions: 'Sessions',
      supportHibernation: 'SupportHibernation',
      userCustomName: 'UserCustomName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      clients: { 'type': 'array', 'itemType': DescribeGlobalDesktopsResponseBodyDesktopsClients },
      connectionStatus: 'string',
      cpu: 'number',
      creationTime: 'string',
      desktopGroupId: 'string',
      desktopId: 'string',
      desktopName: 'string',
      desktopStatus: 'string',
      desktopTimers: { 'type': 'array', 'itemType': DescribeGlobalDesktopsResponseBodyDesktopsDesktopTimers },
      desktopType: 'string',
      directoryId: 'string',
      disks: { 'type': 'array', 'itemType': DescribeGlobalDesktopsResponseBodyDesktopsDisks },
      endUserId: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      expiredTime: 'string',
      fotaUpdate: DescribeGlobalDesktopsResponseBodyDesktopsFotaUpdate,
      gpuMemory: 'number',
      hibernationBeta: 'boolean',
      hostName: 'string',
      imageId: 'string',
      lastStartTime: 'string',
      localName: 'string',
      managementFlags: { 'type': 'array', 'itemType': 'string' },
      memory: 'number',
      networkInterfaceIp: 'string',
      officeSiteId: 'string',
      os: 'string',
      osDescription: 'string',
      osType: 'string',
      platform: 'string',
      policyGroupId: 'string',
      protocolType: 'string',
      realDesktopId: 'string',
      regionId: 'string',
      regionLocation: 'string',
      sessionType: 'string',
      sessions: { 'type': 'array', 'itemType': DescribeGlobalDesktopsResponseBodyDesktopsSessions },
      supportHibernation: 'boolean',
      userCustomName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clients)) {
      $dara.Model.validateArray(this.clients);
    }
    if(Array.isArray(this.desktopTimers)) {
      $dara.Model.validateArray(this.desktopTimers);
    }
    if(Array.isArray(this.disks)) {
      $dara.Model.validateArray(this.disks);
    }
    if(Array.isArray(this.endUserIds)) {
      $dara.Model.validateArray(this.endUserIds);
    }
    if(this.fotaUpdate && typeof (this.fotaUpdate as any).validate === 'function') {
      (this.fotaUpdate as any).validate();
    }
    if(Array.isArray(this.managementFlags)) {
      $dara.Model.validateArray(this.managementFlags);
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

