// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DescribeOnDemandInstanceRequest extends $tea.Model {
  pageNo: number;
  pageSize: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOnDemandInstanceResponse extends $tea.Model {
  requestId: string;
  total: string;
  instances: DescribeOnDemandInstanceResponseInstances[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'string',
      instances: { 'type': 'array', 'itemType': DescribeOnDemandInstanceResponseInstances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOnDemaondDefenseStatusRequest extends $tea.Model {
  instanceId: string;
  defenseStatus: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      defenseStatus: 'DefenseStatus',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      defenseStatus: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOnDemaondDefenseStatusResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  currentPage: number;
  pageSize: number;
  startTime: number;
  endTime: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      currentPage: 'number',
      pageSize: 'number',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  opEntities: DescribeOpEntitiesResponseOpEntities[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      opEntities: 'OpEntities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      opEntities: { 'type': 'array', 'itemType': DescribeOpEntitiesResponseOpEntities },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackPaidTrafficRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  currentPage: number;
  pageSize: number;
  startTime: number;
  endTime: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackPaidTrafficResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  packPaidTraffics: DescribePackPaidTrafficResponsePackPaidTraffics[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      packPaidTraffics: 'PackPaidTraffics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      packPaidTraffics: { 'type': 'array', 'itemType': DescribePackPaidTrafficResponsePackPaidTraffics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackUsageRequest extends $tea.Model {
  sourceIp?: string;
  endTime: number;
  startTime: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      endTime: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackUsageResponse extends $tea.Model {
  requestId: string;
  interval: number;
  startTime: number;
  endTime: number;
  packUsages: DescribeResourcePackUsageResponsePackUsages[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      interval: 'Interval',
      startTime: 'StartTime',
      endTime: 'EndTime',
      packUsages: 'PackUsages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      interval: 'number',
      startTime: 'number',
      endTime: 'number',
      packUsages: { 'type': 'array', 'itemType': DescribeResourcePackUsageResponsePackUsages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackStatisticsRequest extends $tea.Model {
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackStatisticsResponse extends $tea.Model {
  requestId: string;
  availablePackNum: number;
  totalCurrCapacity: number;
  totalUsedCapacity: number;
  totalInitCapacity: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      availablePackNum: 'AvailablePackNum',
      totalCurrCapacity: 'TotalCurrCapacity',
      totalUsedCapacity: 'TotalUsedCapacity',
      totalInitCapacity: 'TotalInitCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      availablePackNum: 'number',
      totalCurrCapacity: 'number',
      totalUsedCapacity: 'number',
      totalInitCapacity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackInstancesRequest extends $tea.Model {
  sourceIp?: string;
  pageSize: number;
  currentPage: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackInstancesResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  resourcePacks: DescribeResourcePackInstancesResponseResourcePacks[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      resourcePacks: 'ResourcePacks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      resourcePacks: { 'type': 'array', 'itemType': DescribeResourcePackInstancesResponseResourcePacks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBlackholeRequest extends $tea.Model {
  sourceIp?: string;
  packId: string;
  ip: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      packId: 'PackId',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      packId: 'string',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBlackholeResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckGrantRequest extends $tea.Model {
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckGrantResponse extends $tea.Model {
  requestId: string;
  status: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductRequest extends $tea.Model {
  sourceIp?: string;
  packId: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      packId: 'PackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      packId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProductRequest extends $tea.Model {
  sourceIp?: string;
  packId: string;
  product: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      packId: 'PackId',
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      packId: 'string',
      product: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProductResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIpRequest extends $tea.Model {
  sourceIp?: string;
  packId: string;
  ipList: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      packId: 'PackId',
      ipList: 'IpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      packId: 'string',
      ipList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIpResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceListRequest extends $tea.Model {
  sourceIp?: string;
  packIdList?: string;
  instanceIdList?: string;
  pageNo: number;
  pageSize: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      packIdList: 'PackIdList',
      instanceIdList: 'InstanceIdList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      packIdList: 'string',
      instanceIdList: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceListResponse extends $tea.Model {
  requestId: string;
  total: number;
  instanceList: DescribeInstanceListResponseInstanceList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      instanceList: 'InstanceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      instanceList: { 'type': 'array', 'itemType': DescribeInstanceListResponseInstanceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopTrafficRequest extends $tea.Model {
  instanceId: string;
  ipnet?: string;
  startTime: string;
  endTime: string;
  rn?: number;
  pageNo?: number;
  pageSize?: number;
  resourceGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ipnet: 'Ipnet',
      startTime: 'StartTime',
      endTime: 'EndTime',
      rn: 'Rn',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ipnet: 'string',
      startTime: 'string',
      endTime: 'string',
      rn: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopTrafficResponse extends $tea.Model {
  requestId: string;
  total: number;
  trafficList: DescribeTopTrafficResponseTrafficList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      trafficList: 'TrafficList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      trafficList: { 'type': 'array', 'itemType': DescribeTopTrafficResponseTrafficList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosEventRequest extends $tea.Model {
  sourceIp?: string;
  packId: string;
  startTime: number;
  endTime: number;
  pageSize: number;
  pageNo: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      packId: 'PackId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      packId: 'string',
      startTime: 'number',
      endTime: 'number',
      pageSize: 'number',
      pageNo: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosEventResponse extends $tea.Model {
  requestId: string;
  total: number;
  events: DescribeDdosEventResponseEvents[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      events: 'Events',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      events: { 'type': 'array', 'itemType': DescribeDdosEventResponseEvents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficRequest extends $tea.Model {
  sourceIp?: string;
  name: string;
  startTime: number;
  endTime: number;
  interval: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      name: 'Name',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      name: 'string',
      startTime: 'number',
      endTime: 'number',
      interval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficResponse extends $tea.Model {
  requestId: string;
  flowList: DescribeTrafficResponseFlowList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      flowList: 'FlowList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      flowList: { 'type': 'array', 'itemType': DescribeTrafficResponseFlowList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpRequest extends $tea.Model {
  sourceIp?: string;
  packId: string;
  ipList: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      packId: 'PackId',
      ipList: 'IpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      packId: 'string',
      ipList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackRequest extends $tea.Model {
  sourceIp?: string;
  packId: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      packId: 'PackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      packId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackResponse extends $tea.Model {
  requestId: string;
  packInfo: DescribePackResponsePackInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      packInfo: 'PackInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      packInfo: DescribePackResponsePackInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackListRequest extends $tea.Model {
  resourceGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackListResponse extends $tea.Model {
  requestId: string;
  packList: DescribePackListResponsePackList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      packList: 'PackList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      packList: { 'type': 'array', 'itemType': DescribePackListResponsePackList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOnDemandInstanceResponseInstances extends $tea.Model {
  instanceId: string;
  remark: string;
  defenseStatus: string;
  regionId: string;
  ipnet: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      remark: 'Remark',
      defenseStatus: 'DefenseStatus',
      regionId: 'RegionId',
      ipnet: 'Ipnet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      remark: 'string',
      defenseStatus: 'string',
      regionId: 'string',
      ipnet: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesResponseOpEntities extends $tea.Model {
  entityObject: string;
  entityType: number;
  opDesc: string;
  opAccount: string;
  opAction: number;
  gmtCreate: number;
  static names(): { [key: string]: string } {
    return {
      entityObject: 'EntityObject',
      entityType: 'EntityType',
      opDesc: 'OpDesc',
      opAccount: 'OpAccount',
      opAction: 'OpAction',
      gmtCreate: 'GmtCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityObject: 'string',
      entityType: 'number',
      opDesc: 'string',
      opAccount: 'string',
      opAction: 'number',
      gmtCreate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackPaidTrafficResponsePackPaidTraffics extends $tea.Model {
  instanceId: string;
  startTime: number;
  baseBandwidth: number;
  elasticBandwidth: number;
  paidCapacity: number;
  totalCapacity: number;
  maxAttack: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      baseBandwidth: 'BaseBandwidth',
      elasticBandwidth: 'ElasticBandwidth',
      paidCapacity: 'PaidCapacity',
      totalCapacity: 'TotalCapacity',
      maxAttack: 'MaxAttack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startTime: 'number',
      baseBandwidth: 'number',
      elasticBandwidth: 'number',
      paidCapacity: 'number',
      totalCapacity: 'number',
      maxAttack: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackUsageResponsePackUsages extends $tea.Model {
  traffic: number;
  time: number;
  static names(): { [key: string]: string } {
    return {
      traffic: 'Traffic',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traffic: 'number',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackInstancesResponseResourcePacks extends $tea.Model {
  resourcePackId: string;
  initCapacity: number;
  currCapacity: number;
  startTime: number;
  endTime: number;
  status: string;
  static names(): { [key: string]: string } {
    return {
      resourcePackId: 'ResourcePackId',
      initCapacity: 'InitCapacity',
      currCapacity: 'CurrCapacity',
      startTime: 'StartTime',
      endTime: 'EndTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourcePackId: 'string',
      initCapacity: 'number',
      currCapacity: 'number',
      startTime: 'number',
      endTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceListResponseInstanceList extends $tea.Model {
  expireTime: number;
  instanceId: string;
  product: string;
  remark: string;
  status: string;
  packId: string;
  gmtCreate: number;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      product: 'Product',
      remark: 'Remark',
      status: 'Status',
      packId: 'PackId',
      gmtCreate: 'GmtCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      instanceId: 'string',
      product: 'string',
      remark: 'string',
      status: 'string',
      packId: 'string',
      gmtCreate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopTrafficResponseTrafficList extends $tea.Model {
  pps: number;
  bps: number;
  attackBps: number;
  attackPps: number;
  ip: string;
  static names(): { [key: string]: string } {
    return {
      pps: 'Pps',
      bps: 'Bps',
      attackBps: 'AttackBps',
      attackPps: 'AttackPps',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pps: 'number',
      bps: 'number',
      attackBps: 'number',
      attackPps: 'number',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosEventResponseEvents extends $tea.Model {
  startTime: number;
  endTime: number;
  pps: number;
  ip: string;
  mbps: number;
  status: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      pps: 'Pps',
      ip: 'Ip',
      mbps: 'Mbps',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      endTime: 'number',
      pps: 'number',
      ip: 'string',
      mbps: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficResponseFlowList extends $tea.Model {
  pps: number;
  flowType: string;
  kbps: number;
  name: string;
  time: number;
  static names(): { [key: string]: string } {
    return {
      pps: 'Pps',
      flowType: 'FlowType',
      kbps: 'Kbps',
      name: 'Name',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pps: 'number',
      flowType: 'string',
      kbps: 'number',
      name: 'string',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackResponsePackInfoIpList extends $tea.Model {
  ip: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackResponsePackInfoPackConfig extends $tea.Model {
  packAdvThre: number;
  ipAdvanceThre: number;
  ipBasicThre: number;
  packBasicThre: number;
  ipSpec: number;
  static names(): { [key: string]: string } {
    return {
      packAdvThre: 'PackAdvThre',
      ipAdvanceThre: 'IpAdvanceThre',
      ipBasicThre: 'IpBasicThre',
      packBasicThre: 'PackBasicThre',
      ipSpec: 'IpSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packAdvThre: 'number',
      ipAdvanceThre: 'number',
      ipBasicThre: 'number',
      packBasicThre: 'number',
      ipSpec: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackResponsePackInfo extends $tea.Model {
  region: string;
  availableDeleteBlackholeCount: number;
  ipList: DescribePackResponsePackInfoIpList[];
  packConfig: DescribePackResponsePackInfoPackConfig;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      availableDeleteBlackholeCount: 'AvailableDeleteBlackholeCount',
      ipList: 'IpList',
      packConfig: 'PackConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      availableDeleteBlackholeCount: 'number',
      ipList: { 'type': 'array', 'itemType': DescribePackResponsePackInfoIpList },
      packConfig: DescribePackResponsePackInfoPackConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackListResponsePackListPackConfig extends $tea.Model {
  packAdvThre: number;
  ipAdvanceThre: number;
  ipBasicThre: number;
  packBasicThre: number;
  ipSpec: number;
  static names(): { [key: string]: string } {
    return {
      packAdvThre: 'PackAdvThre',
      ipAdvanceThre: 'IpAdvanceThre',
      ipBasicThre: 'IpBasicThre',
      packBasicThre: 'PackBasicThre',
      ipSpec: 'IpSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packAdvThre: 'number',
      ipAdvanceThre: 'number',
      ipBasicThre: 'number',
      packBasicThre: 'number',
      ipSpec: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackListResponsePackList extends $tea.Model {
  availableDeleteBlackholeCount: number;
  region: string;
  packId: string;
  packConfig: DescribePackListResponsePackListPackConfig;
  static names(): { [key: string]: string } {
    return {
      availableDeleteBlackholeCount: 'AvailableDeleteBlackholeCount',
      region: 'Region',
      packId: 'PackId',
      packConfig: 'PackConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableDeleteBlackholeCount: 'number',
      region: 'string',
      packId: 'string',
      packConfig: DescribePackListResponsePackListPackConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends RPC {

  constructor(config: $RPC.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-qingdao': "ddosbgp.aliyuncs.com",
      'cn-beijing': "ddosbgp.aliyuncs.com",
      'cn-zhangjiakou': "ddosbgp.aliyuncs.com",
      'cn-huhehaote': "ddosbgp.aliyuncs.com",
      'cn-hangzhou': "ddosbgp.aliyuncs.com",
      'cn-shanghai': "ddosbgp.aliyuncs.com",
      'cn-shenzhen': "ddosbgp.aliyuncs.com",
      'ap-northeast-1': "ddosbgp.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "ddosbgp.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "ddosbgp.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "ddosbgp.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "ddosbgp.ap-southeast-1.aliyuncs.com",
      'cn-chengdu': "ddosbgp.aliyuncs.com",
      'eu-central-1': "ddosbgp.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "ddosbgp.ap-southeast-1.aliyuncs.com",
      'me-east-1': "ddosbgp.ap-southeast-1.aliyuncs.com",
      'cn-hangzhou-finance': "ddosbgp.aliyuncs.com",
      'cn-shenzhen-finance-1': "ddosbgp.aliyuncs.com",
      'cn-shanghai-finance-1': "ddosbgp.aliyuncs.com",
      'cn-north-2-gov-1': "ddosbgp.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ddosbgp", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  async describeOnDemandInstanceWithOptions(request: DescribeOnDemandInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOnDemandInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeOnDemandInstanceResponse>(await this.doRequest("DescribeOnDemandInstance", "HTTPS", "POST", "2017-11-20", "AK", null, $tea.toMap(request), runtime), new DescribeOnDemandInstanceResponse({}));
  }

  async describeOnDemandInstance(request: DescribeOnDemandInstanceRequest): Promise<DescribeOnDemandInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOnDemandInstanceWithOptions(request, runtime);
  }

  async modifyOnDemaondDefenseStatusWithOptions(request: ModifyOnDemaondDefenseStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyOnDemaondDefenseStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyOnDemaondDefenseStatusResponse>(await this.doRequest("ModifyOnDemaondDefenseStatus", "HTTPS", "POST", "2017-11-20", "AK", null, $tea.toMap(request), runtime), new ModifyOnDemaondDefenseStatusResponse({}));
  }

  async modifyOnDemaondDefenseStatus(request: ModifyOnDemaondDefenseStatusRequest): Promise<ModifyOnDemaondDefenseStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyOnDemaondDefenseStatusWithOptions(request, runtime);
  }

  async describeOpEntitiesWithOptions(request: DescribeOpEntitiesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOpEntitiesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeOpEntitiesResponse>(await this.doRequest("DescribeOpEntities", "HTTPS", "POST", "2017-11-20", "AK", null, $tea.toMap(request), runtime), new DescribeOpEntitiesResponse({}));
  }

  async describeOpEntities(request: DescribeOpEntitiesRequest): Promise<DescribeOpEntitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOpEntitiesWithOptions(request, runtime);
  }

  async describePackPaidTrafficWithOptions(request: DescribePackPaidTrafficRequest, runtime: $Util.RuntimeOptions): Promise<DescribePackPaidTrafficResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribePackPaidTrafficResponse>(await this.doRequest("DescribePackPaidTraffic", "HTTPS", "POST", "2017-11-20", "AK", null, $tea.toMap(request), runtime), new DescribePackPaidTrafficResponse({}));
  }

  async describePackPaidTraffic(request: DescribePackPaidTrafficRequest): Promise<DescribePackPaidTrafficResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePackPaidTrafficWithOptions(request, runtime);
  }

  async describeResourcePackUsageWithOptions(request: DescribeResourcePackUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourcePackUsageResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeResourcePackUsageResponse>(await this.doRequest("DescribeResourcePackUsage", "HTTPS", "POST", "2017-11-20", "AK", null, $tea.toMap(request), runtime), new DescribeResourcePackUsageResponse({}));
  }

  async describeResourcePackUsage(request: DescribeResourcePackUsageRequest): Promise<DescribeResourcePackUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourcePackUsageWithOptions(request, runtime);
  }

  async describeResourcePackStatisticsWithOptions(request: DescribeResourcePackStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourcePackStatisticsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeResourcePackStatisticsResponse>(await this.doRequest("DescribeResourcePackStatistics", "HTTPS", "POST", "2017-11-20", "AK", null, $tea.toMap(request), runtime), new DescribeResourcePackStatisticsResponse({}));
  }

  async describeResourcePackStatistics(request: DescribeResourcePackStatisticsRequest): Promise<DescribeResourcePackStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourcePackStatisticsWithOptions(request, runtime);
  }

  async describeResourcePackInstancesWithOptions(request: DescribeResourcePackInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourcePackInstancesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeResourcePackInstancesResponse>(await this.doRequest("DescribeResourcePackInstances", "HTTPS", "POST", "2017-11-20", "AK", null, $tea.toMap(request), runtime), new DescribeResourcePackInstancesResponse({}));
  }

  async describeResourcePackInstances(request: DescribeResourcePackInstancesRequest): Promise<DescribeResourcePackInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourcePackInstancesWithOptions(request, runtime);
  }

  async deleteBlackholeWithOptions(request: DeleteBlackholeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBlackholeResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteBlackholeResponse>(await this.doRequest("DeleteBlackhole", "HTTPS", "POST", "2017-11-20", "AK", null, $tea.toMap(request), runtime), new DeleteBlackholeResponse({}));
  }

  async deleteBlackhole(request: DeleteBlackholeRequest): Promise<DeleteBlackholeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBlackholeWithOptions(request, runtime);
  }

  async checkGrantWithOptions(request: CheckGrantRequest, runtime: $Util.RuntimeOptions): Promise<CheckGrantResponse> {
    Util.validateModel(request);
    return $tea.cast<CheckGrantResponse>(await this.doRequest("CheckGrant", "HTTPS", "GET", "2017-11-20", "AK", $tea.toMap(request), null, runtime), new CheckGrantResponse({}));
  }

  async checkGrant(request: CheckGrantRequest): Promise<CheckGrantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkGrantWithOptions(request, runtime);
  }

  async deleteProductWithOptions(request: DeleteProductRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProductResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteProductResponse>(await this.doRequest("DeleteProduct", "HTTPS", "POST", "2017-11-20", "AK", null, $tea.toMap(request), runtime), new DeleteProductResponse({}));
  }

  async deleteProduct(request: DeleteProductRequest): Promise<DeleteProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProductWithOptions(request, runtime);
  }

  async addProductWithOptions(request: AddProductRequest, runtime: $Util.RuntimeOptions): Promise<AddProductResponse> {
    Util.validateModel(request);
    return $tea.cast<AddProductResponse>(await this.doRequest("AddProduct", "HTTPS", "POST", "2017-11-20", "AK", null, $tea.toMap(request), runtime), new AddProductResponse({}));
  }

  async addProduct(request: AddProductRequest): Promise<AddProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addProductWithOptions(request, runtime);
  }

  async addIpWithOptions(request: AddIpRequest, runtime: $Util.RuntimeOptions): Promise<AddIpResponse> {
    Util.validateModel(request);
    return $tea.cast<AddIpResponse>(await this.doRequest("AddIp", "HTTPS", "POST", "2017-11-20", "AK", null, $tea.toMap(request), runtime), new AddIpResponse({}));
  }

  async addIp(request: AddIpRequest): Promise<AddIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addIpWithOptions(request, runtime);
  }

  async describeInstanceListWithOptions(request: DescribeInstanceListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceListResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInstanceListResponse>(await this.doRequest("DescribeInstanceList", "HTTPS", "POST", "2017-11-20", "AK", null, $tea.toMap(request), runtime), new DescribeInstanceListResponse({}));
  }

  async describeInstanceList(request: DescribeInstanceListRequest): Promise<DescribeInstanceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceListWithOptions(request, runtime);
  }

  async describeTopTrafficWithOptions(request: DescribeTopTrafficRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTopTrafficResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeTopTrafficResponse>(await this.doRequest("DescribeTopTraffic", "HTTPS", "POST", "2017-11-20", "AK", null, $tea.toMap(request), runtime), new DescribeTopTrafficResponse({}));
  }

  async describeTopTraffic(request: DescribeTopTrafficRequest): Promise<DescribeTopTrafficResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTopTrafficWithOptions(request, runtime);
  }

  async describeDdosEventWithOptions(request: DescribeDdosEventRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDdosEventResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDdosEventResponse>(await this.doRequest("DescribeDdosEvent", "HTTPS", "POST", "2017-11-20", "AK", null, $tea.toMap(request), runtime), new DescribeDdosEventResponse({}));
  }

  async describeDdosEvent(request: DescribeDdosEventRequest): Promise<DescribeDdosEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDdosEventWithOptions(request, runtime);
  }

  async describeTrafficWithOptions(request: DescribeTrafficRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTrafficResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeTrafficResponse>(await this.doRequest("DescribeTraffic", "HTTPS", "POST", "2017-11-20", "AK", null, $tea.toMap(request), runtime), new DescribeTrafficResponse({}));
  }

  async describeTraffic(request: DescribeTrafficRequest): Promise<DescribeTrafficResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTrafficWithOptions(request, runtime);
  }

  async deleteIpWithOptions(request: DeleteIpRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIpResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteIpResponse>(await this.doRequest("DeleteIp", "HTTPS", "POST", "2017-11-20", "AK", null, $tea.toMap(request), runtime), new DeleteIpResponse({}));
  }

  async deleteIp(request: DeleteIpRequest): Promise<DeleteIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIpWithOptions(request, runtime);
  }

  async describePackWithOptions(request: DescribePackRequest, runtime: $Util.RuntimeOptions): Promise<DescribePackResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribePackResponse>(await this.doRequest("DescribePack", "HTTPS", "POST", "2017-11-20", "AK", null, $tea.toMap(request), runtime), new DescribePackResponse({}));
  }

  async describePack(request: DescribePackRequest): Promise<DescribePackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePackWithOptions(request, runtime);
  }

  async describePackListWithOptions(request: DescribePackListRequest, runtime: $Util.RuntimeOptions): Promise<DescribePackListResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribePackListResponse>(await this.doRequest("DescribePackList", "HTTPS", "POST", "2017-11-20", "AK", null, $tea.toMap(request), runtime), new DescribePackListResponse({}));
  }

  async describePackList(request: DescribePackListRequest): Promise<DescribePackListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePackListWithOptions(request, runtime);
  }

  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

}
