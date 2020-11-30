// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ModifyFullLogTtlRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  ttl: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      ttl: 'Ttl',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      ttl: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFullLogTtlResponse extends $tea.Model {
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

export class ReleaseValueAddedRequest extends $tea.Model {
  sourceIp?: string;
  instanceId: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseValueAddedResponse extends $tea.Model {
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

export class ListValueAddedRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListValueAddedResponse extends $tea.Model {
  requestId: string;
  valueAddedList: ListValueAddedResponseValueAddedList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      valueAddedList: 'ValueAddedList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      valueAddedList: { 'type': 'array', 'itemType': ListValueAddedResponseValueAddedList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayer7CustomPortsRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayer7CustomPortsResponse extends $tea.Model {
  requestId: string;
  layer7CustomPorts: ListLayer7CustomPortsResponseLayer7CustomPorts[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      layer7CustomPorts: 'Layer7CustomPorts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      layer7CustomPorts: { 'type': 'array', 'itemType': ListLayer7CustomPortsResponseLayer7CustomPorts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSimpleDomainsRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSimpleDomainsResponse extends $tea.Model {
  requestId: string;
  domainList: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainList: 'DomainList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseCountStatisticsRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseCountStatisticsResponse extends $tea.Model {
  requestId: string;
  defenseCountStatistics: DescribeDefenseCountStatisticsResponseDefenseCountStatistics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      defenseCountStatistics: 'DefenseCountStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      defenseCountStatistics: DescribeDefenseCountStatisticsResponseDefenseCountStatistics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  regionId: string;
  resourceGroupId?: string;
  resourceType: string;
  resourceId: string[];
  tagKey?: string[];
  all?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
      all: 'All',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tagKey: { 'type': 'array', 'itemType': 'string' },
      all: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
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

export class TagResourcesRequest extends $tea.Model {
  regionId: string;
  resourceGroupId?: string;
  resourceType: string;
  resourceId: string[];
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
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

export class ListTagResourcesRequest extends $tea.Model {
  regionId: string;
  resourceGroupId?: string;
  resourceType: string;
  resourceId?: string[];
  tag?: ListTagResourcesRequestTag[];
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  requestId: string;
  nextToken: string;
  tagResources: ListTagResourcesResponseTagResources;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nextToken: 'NextToken',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nextToken: 'string',
      tagResources: ListTagResourcesResponseTagResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $tea.Model {
  regionId: string;
  resourceGroupId?: string;
  resourceType: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceType: 'ResourceType',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponse extends $tea.Model {
  requestId: string;
  currentPage: number;
  pageSize: number;
  totalCount: number;
  tagKeys: ListTagKeysResponseTagKeys[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      tagKeys: { 'type': 'array', 'itemType': ListTagKeysResponseTagKeys },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsWithCacheRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  startTime: number;
  endTime: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsWithCacheResponse extends $tea.Model {
  requestId: string;
  interval: number;
  startTime: number;
  totals: string[];
  blocks: string[];
  cacheHits: string[];
  preciseBlocks: string[];
  regionBlocks: string[];
  ipBlockQps: string[];
  ccJsQps: string[];
  preciseJsQps: string[];
  ccBlockQps: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      interval: 'Interval',
      startTime: 'StartTime',
      totals: 'Totals',
      blocks: 'Blocks',
      cacheHits: 'CacheHits',
      preciseBlocks: 'PreciseBlocks',
      regionBlocks: 'RegionBlocks',
      ipBlockQps: 'IpBlockQps',
      ccJsQps: 'CcJsQps',
      preciseJsQps: 'PreciseJsQps',
      ccBlockQps: 'CcBlockQps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      interval: 'number',
      startTime: 'number',
      totals: { 'type': 'array', 'itemType': 'string' },
      blocks: { 'type': 'array', 'itemType': 'string' },
      cacheHits: { 'type': 'array', 'itemType': 'string' },
      preciseBlocks: { 'type': 'array', 'itemType': 'string' },
      regionBlocks: { 'type': 'array', 'itemType': 'string' },
      ipBlockQps: { 'type': 'array', 'itemType': 'string' },
      ccJsQps: { 'type': 'array', 'itemType': 'string' },
      preciseJsQps: { 'type': 'array', 'itemType': 'string' },
      ccBlockQps: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogStoreExistStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogStoreExistStatusResponse extends $tea.Model {
  requestId: string;
  existStatus: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      existStatus: 'ExistStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      existStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchSlsDispatchStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchSlsDispatchStatusResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  slsConfigStatusList: DescribeBatchSlsDispatchStatusResponseSlsConfigStatusList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      slsConfigStatusList: 'SlsConfigStatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      slsConfigStatusList: { 'type': 'array', 'itemType': DescribeBatchSlsDispatchStatusResponseSlsConfigStatusList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsEmptyCountRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsEmptyCountResponse extends $tea.Model {
  requestId: string;
  availableCount: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      availableCount: 'AvailableCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      availableCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EmptySlsLogstoreRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EmptySlsLogstoreResponse extends $tea.Model {
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

export class CloseDomainSlsConfigRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  domain: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseDomainSlsConfigResponse extends $tea.Model {
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

export class OpenDomainSlsConfigRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  domain: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenDomainSlsConfigResponse extends $tea.Model {
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

export class DescribeSlsLogstoreInfoRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsLogstoreInfoResponse extends $tea.Model {
  requestId: string;
  quota: number;
  logStore: string;
  used: number;
  project: string;
  ttl: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      quota: 'Quota',
      logStore: 'LogStore',
      used: 'Used',
      project: 'Project',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      quota: 'number',
      logStore: 'string',
      used: 'number',
      project: 'string',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsAuthStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsAuthStatusResponse extends $tea.Model {
  requestId: string;
  slsAuthStatus: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slsAuthStatus: 'SlsAuthStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slsAuthStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsOpenStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsOpenStatusResponse extends $tea.Model {
  requestId: string;
  slsOpenStatus: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slsOpenStatus: 'SlsOpenStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slsOpenStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSlsStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  domain: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSlsStatusResponse extends $tea.Model {
  requestId: string;
  slsStatus: boolean;
  slsLogstore: string;
  slsProject: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slsStatus: 'SlsStatus',
      slsLogstore: 'SlsLogstore',
      slsProject: 'SlsProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slsStatus: 'boolean',
      slsLogstore: 'string',
      slsProject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigDomainAccessModeRequest extends $tea.Model {
  sourceIp?: string;
  domain: string;
  accessMode: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      domain: 'Domain',
      accessMode: 'AccessMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      domain: 'string',
      accessMode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigDomainAccessModeResponse extends $tea.Model {
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

export class DescribeDomainAccessModeRequest extends $tea.Model {
  sourceIp?: string;
  domainList: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      domainList: 'DomainList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      domainList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAccessModeResponse extends $tea.Model {
  requestId: string;
  domainModeList: DescribeDomainAccessModeResponseDomainModeList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainModeList: 'DomainModeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainModeList: { 'type': 'array', 'itemType': DescribeDomainAccessModeResponseDomainModeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAsyncTaskRequest extends $tea.Model {
  resourceGroupId?: string;
  taskId: number;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAsyncTaskResponse extends $tea.Model {
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

export class CreateAsyncTaskRequest extends $tea.Model {
  resourceGroupId?: string;
  taskType: number;
  taskParams: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      taskType: 'TaskType',
      taskParams: 'TaskParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      taskType: 'number',
      taskParams: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAsyncTaskResponse extends $tea.Model {
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

export class ListAsyncTaskRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceGroupId?: string;
  pageNo: number;
  pageSize: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceGroupId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncTaskResponse extends $tea.Model {
  requestId: string;
  total: number;
  asyncTasks: ListAsyncTaskResponseAsyncTasks[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      asyncTasks: 'AsyncTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      asyncTasks: { 'type': 'array', 'itemType': ListAsyncTaskResponseAsyncTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLayer7CCRuleRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLayer7CCRuleResponse extends $tea.Model {
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

export class EnableLayer7CCRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLayer7CCResponse extends $tea.Model {
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

export class DisableLayer7CCRuleRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableLayer7CCRuleResponse extends $tea.Model {
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

export class DisableLayer7CCRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableLayer7CCResponse extends $tea.Model {
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

export class DescribleLayer7InstanceRelationsRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domainList: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domainList: 'DomainList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domainList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribleLayer7InstanceRelationsResponse extends $tea.Model {
  requestId: string;
  layer7InstanceRelations: DescribleLayer7InstanceRelationsResponseLayer7InstanceRelations[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      layer7InstanceRelations: 'Layer7InstanceRelations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      layer7InstanceRelations: { 'type': 'array', 'itemType': DescribleLayer7InstanceRelationsResponseLayer7InstanceRelations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribleCertListRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribleCertListResponse extends $tea.Model {
  requestId: string;
  certList: DescribleCertListResponseCertList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      certList: 'CertList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      certList: { 'type': 'array', 'itemType': DescribleCertListResponseCertList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer7CCRulesRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain: string;
  offset: number;
  pageSize: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      offset: 'Offset',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      offset: 'number',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer7CCRulesResponse extends $tea.Model {
  requestId: string;
  total: number;
  layer7CCRules: DescribeLayer7CCRulesResponseLayer7CCRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      layer7CCRules: 'Layer7CCRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      layer7CCRules: { 'type': 'array', 'itemType': DescribeLayer7CCRulesResponseLayer7CCRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain?: string;
  queryDomainPattern?: string;
  offset: number;
  pageSize: string;
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      queryDomainPattern: 'QueryDomainPattern',
      offset: 'Offset',
      pageSize: 'PageSize',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      queryDomainPattern: 'string',
      offset: 'number',
      pageSize: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponse extends $tea.Model {
  requestId: string;
  total: number;
  domains: DescribeDomainsResponseDomains[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      domains: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      domains: { 'type': 'array', 'itemType': DescribeDomainsResponseDomains },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  domain: string;
  startTime: number;
  endTime: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      domain: 'string',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsResponse extends $tea.Model {
  requestId: string;
  interval: number;
  startTime: number;
  totals: string[];
  blocks: string[];
  cacheHits: string[];
  preciseBlocks: string[];
  regionBlocks: string[];
  ipBlockQps: string[];
  ccJsQps: string[];
  preciseJsQps: string[];
  ccBlockQps: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      interval: 'Interval',
      startTime: 'StartTime',
      totals: 'Totals',
      blocks: 'Blocks',
      cacheHits: 'CacheHits',
      preciseBlocks: 'PreciseBlocks',
      regionBlocks: 'RegionBlocks',
      ipBlockQps: 'IpBlockQps',
      ccJsQps: 'CcJsQps',
      preciseJsQps: 'PreciseJsQps',
      ccBlockQps: 'CcBlockQps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      interval: 'number',
      startTime: 'number',
      totals: { 'type': 'array', 'itemType': 'string' },
      blocks: { 'type': 'array', 'itemType': 'string' },
      cacheHits: { 'type': 'array', 'itemType': 'string' },
      preciseBlocks: { 'type': 'array', 'itemType': 'string' },
      regionBlocks: { 'type': 'array', 'itemType': 'string' },
      ipBlockQps: { 'type': 'array', 'itemType': 'string' },
      ccJsQps: { 'type': 'array', 'itemType': 'string' },
      preciseJsQps: { 'type': 'array', 'itemType': 'string' },
      ccBlockQps: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAttackEventsRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  startTime: number;
  endTime: number;
  domain: string;
  offset: number;
  pageSize: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      domain: 'Domain',
      offset: 'Offset',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
      endTime: 'number',
      domain: 'string',
      offset: 'number',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAttackEventsResponse extends $tea.Model {
  requestId: string;
  total: number;
  events: DescribeDomainAttackEventsResponseEvents[];
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
      events: { 'type': 'array', 'itemType': DescribeDomainAttackEventsResponseEvents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackSourceCidrRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  line?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      line: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackSourceCidrResponse extends $tea.Model {
  requestId: string;
  cidrList: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      cidrList: 'CidrList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      cidrList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLayer7RuleRequest extends $tea.Model {
  resourceGroupId?: string;
  domain: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLayer7RuleResponse extends $tea.Model {
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

export class DeleteLayer7CCRuleRequest extends $tea.Model {
  resourceGroupId?: string;
  domain: string;
  name: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      domain: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLayer7CCRuleResponse extends $tea.Model {
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

export class CreateLayer7RuleRequest extends $tea.Model {
  resourceGroupId?: string;
  domain: string;
  rsType: number;
  rules: string;
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      rsType: 'RsType',
      rules: 'Rules',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      domain: 'string',
      rsType: 'number',
      rules: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayer7RuleResponse extends $tea.Model {
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

export class ConfigLayer7RuleRequest extends $tea.Model {
  resourceGroupId?: string;
  domain: string;
  proxyTypeList?: string;
  proxyTypes?: string[];
  rsType: number;
  realServers: string[];
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      proxyTypeList: 'ProxyTypeList',
      proxyTypes: 'ProxyTypes',
      rsType: 'RsType',
      realServers: 'RealServers',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      domain: 'string',
      proxyTypeList: 'string',
      proxyTypes: { 'type': 'array', 'itemType': 'string' },
      rsType: 'number',
      realServers: { 'type': 'array', 'itemType': 'string' },
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer7RuleResponse extends $tea.Model {
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

export class ConfigLayer7CertRequest extends $tea.Model {
  resourceGroupId?: string;
  domain: string;
  certId?: number;
  certName?: string;
  cert?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      certId: 'CertId',
      certName: 'CertName',
      cert: 'Cert',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      domain: 'string',
      certId: 'number',
      certName: 'string',
      cert: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer7CertResponse extends $tea.Model {
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

export class ConfigLayer7CCTemplateRequest extends $tea.Model {
  resourceGroupId?: string;
  domain: string;
  template: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      domain: 'string',
      template: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer7CCTemplateResponse extends $tea.Model {
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

export class ConfigLayer7CCRuleRequest extends $tea.Model {
  resourceGroupId?: string;
  domain: string;
  name: string;
  act: string;
  count: number;
  interval: number;
  mode: string;
  ttl: number;
  uri: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      name: 'Name',
      act: 'Act',
      count: 'Count',
      interval: 'Interval',
      mode: 'Mode',
      ttl: 'Ttl',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      domain: 'string',
      name: 'string',
      act: 'string',
      count: 'number',
      interval: 'number',
      mode: 'string',
      ttl: 'number',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer7CCRuleResponse extends $tea.Model {
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

export class ConfigLayer7BlackWhiteListRequest extends $tea.Model {
  resourceGroupId?: string;
  domain: string;
  blackList?: string[];
  whiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      blackList: 'BlackList',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      domain: 'string',
      blackList: { 'type': 'array', 'itemType': 'string' },
      whiteList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer7BlackWhiteListResponse extends $tea.Model {
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

export class AddLayer7CCRuleRequest extends $tea.Model {
  resourceGroupId?: string;
  domain: string;
  name: string;
  act: string;
  count: number;
  interval: number;
  mode: string;
  ttl: number;
  uri: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      domain: 'Domain',
      name: 'Name',
      act: 'Act',
      count: 'Count',
      interval: 'Interval',
      mode: 'Mode',
      ttl: 'Ttl',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      domain: 'string',
      name: 'string',
      act: 'string',
      count: 'number',
      interval: 'number',
      mode: 'string',
      ttl: 'number',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLayer7CCRuleResponse extends $tea.Model {
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

export class ReleaseInstanceRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceResponse extends $tea.Model {
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

export class ModifyInstanceRemarkRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceRemarkResponse extends $tea.Model {
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

export class ModifyElasticBandWidthRequest extends $tea.Model {
  sourceIp?: string;
  elasticBandwidth: number;
  instanceId: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      elasticBandwidth: 'ElasticBandwidth',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      elasticBandwidth: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElasticBandWidthResponse extends $tea.Model {
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
  resourceGroupId?: string;
  entityType?: number;
  entityObject?: string;
  startTime: number;
  endTime: number;
  pageNo: number;
  pageSize: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      entityType: 'EntityType',
      entityObject: 'EntityObject',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      entityType: 'number',
      entityObject: 'string',
      startTime: 'number',
      endTime: 'number',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesResponse extends $tea.Model {
  requestId: string;
  total: number;
  opEntities: DescribeOpEntitiesResponseOpEntities[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      opEntities: 'OpEntities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      opEntities: { 'type': 'array', 'itemType': DescribeOpEntitiesResponseOpEntities },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RulesRequest extends $tea.Model {
  sourceIp?: string;
  instanceId: string;
  forwardProtocol?: string;
  frontendPort?: number;
  offset: number;
  pageSize: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      forwardProtocol: 'ForwardProtocol',
      frontendPort: 'FrontendPort',
      offset: 'Offset',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      forwardProtocol: 'string',
      frontendPort: 'number',
      offset: 'number',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RulesResponse extends $tea.Model {
  requestId: string;
  total: number;
  listeners: DescribeLayer4RulesResponseListeners[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      listeners: 'Listeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      listeners: { 'type': 'array', 'itemType': DescribeLayer4RulesResponseListeners },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesRequest extends $tea.Model {
  sourceIp?: string;
  listeners: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      listeners: 'Listeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      listeners: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesResponse extends $tea.Model {
  requestId: string;
  listeners: DescribeLayer4RuleAttributesResponseListeners[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      listeners: 'Listeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      listeners: { 'type': 'array', 'itemType': DescribeLayer4RuleAttributesResponseListeners },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpTrafficRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  startTime: number;
  interval: number;
  endTime: number;
  eip: string;
  port?: number;
  queryProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      interval: 'Interval',
      endTime: 'EndTime',
      eip: 'Eip',
      port: 'Port',
      queryProtocol: 'QueryProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
      interval: 'number',
      endTime: 'number',
      eip: 'string',
      port: 'number',
      queryProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpTrafficResponse extends $tea.Model {
  requestId: string;
  maxInBps: number;
  avgInBps: number;
  maxOutBps: number;
  avgOutBps: number;
  ipTrafficPoints: DescribeIpTrafficResponseIpTrafficPoints[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      maxInBps: 'MaxInBps',
      avgInBps: 'AvgInBps',
      maxOutBps: 'MaxOutBps',
      avgOutBps: 'AvgOutBps',
      ipTrafficPoints: 'IpTrafficPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      maxInBps: 'number',
      avgInBps: 'number',
      maxOutBps: 'number',
      avgOutBps: 'number',
      ipTrafficPoints: { 'type': 'array', 'itemType': DescribeIpTrafficResponseIpTrafficPoints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatisticsRequest extends $tea.Model {
  sourceIp?: string;
  instanceIds: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatisticsResponse extends $tea.Model {
  requestId: string;
  instanceStatistics: DescribeInstanceStatisticsResponseInstanceStatistics[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceStatistics: 'InstanceStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceStatistics: { 'type': 'array', 'itemType': DescribeInstanceStatisticsResponseInstanceStatistics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsRequest extends $tea.Model {
  sourceIp?: string;
  instanceIds: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsResponse extends $tea.Model {
  requestId: string;
  instanceSpecs: DescribeInstanceSpecsResponseInstanceSpecs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceSpecs: 'InstanceSpecs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceSpecs: { 'type': 'array', 'itemType': DescribeInstanceSpecsResponseInstanceSpecs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  instanceIds?: string;
  pageNo: string;
  pageSize: string;
  ip?: string;
  remark?: string;
  edition?: number;
  enabled?: number;
  expireStartTime?: number;
  expireEndTime?: number;
  status?: number[];
  tag?: DescribeInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      instanceIds: 'InstanceIds',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      ip: 'Ip',
      remark: 'Remark',
      edition: 'Edition',
      enabled: 'Enabled',
      expireStartTime: 'ExpireStartTime',
      expireEndTime: 'ExpireEndTime',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      instanceIds: 'string',
      pageNo: 'string',
      pageSize: 'string',
      ip: 'string',
      remark: 'string',
      edition: 'number',
      enabled: 'number',
      expireStartTime: 'number',
      expireEndTime: 'number',
      status: { 'type': 'array', 'itemType': 'number' },
      tag: { 'type': 'array', 'itemType': DescribeInstancesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponse extends $tea.Model {
  requestId: string;
  total: number;
  instances: DescribeInstancesResponseInstances[];
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
      total: 'number',
      instances: { 'type': 'array', 'itemType': DescribeInstancesResponseInstances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDetailsRequest extends $tea.Model {
  sourceIp?: string;
  instanceIds: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDetailsResponse extends $tea.Model {
  requestId: string;
  instanceDetails: DescribeInstanceDetailsResponseInstanceDetails[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceDetails: 'InstanceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceDetails: { 'type': 'array', 'itemType': DescribeInstanceDetailsResponseInstanceDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckStatusListRequest extends $tea.Model {
  sourceIp?: string;
  listeners: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      listeners: 'Listeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      listeners: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckStatusListResponse extends $tea.Model {
  requestId: string;
  healthCheckStatusList: DescribeHealthCheckStatusListResponseHealthCheckStatusList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      healthCheckStatusList: 'HealthCheckStatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      healthCheckStatusList: { 'type': 'array', 'itemType': DescribeHealthCheckStatusListResponseHealthCheckStatusList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckListRequest extends $tea.Model {
  sourceIp?: string;
  listeners: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      listeners: 'Listeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      listeners: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckListResponse extends $tea.Model {
  requestId: string;
  listeners: DescribeHealthCheckListResponseListeners[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      listeners: 'Listeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      listeners: { 'type': 'array', 'itemType': DescribeHealthCheckListResponseListeners },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticBandwidthSpecRequest extends $tea.Model {
  sourceIp?: string;
  instanceId: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticBandwidthSpecResponse extends $tea.Model {
  requestId: string;
  elasticBandwidthSpec: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      elasticBandwidthSpec: 'ElasticBandwidthSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      elasticBandwidthSpec: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSTrafficRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  startTime: number;
  interval: number;
  endTime: number;
  eip: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      interval: 'Interval',
      endTime: 'EndTime',
      eip: 'Eip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
      interval: 'number',
      endTime: 'number',
      eip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSTrafficResponse extends $tea.Model {
  requestId: string;
  defenseInBytes: number;
  sourceInBytes: number;
  DDoSTrafficPoints: DescribeDDoSTrafficResponseDDoSTrafficPoints[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      defenseInBytes: 'DefenseInBytes',
      sourceInBytes: 'SourceInBytes',
      DDoSTrafficPoints: 'DDoSTrafficPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      defenseInBytes: 'number',
      sourceInBytes: 'number',
      DDoSTrafficPoints: { 'type': 'array', 'itemType': DescribeDDoSTrafficResponseDDoSTrafficPoints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSEventsRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  startTime: number;
  endTime: number;
  eip: string;
  offset: number;
  pageSize: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      eip: 'Eip',
      offset: 'Offset',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
      endTime: 'number',
      eip: 'string',
      offset: 'number',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSEventsResponse extends $tea.Model {
  requestId: string;
  total: number;
  events: DescribeDDoSEventsResponseEvents[];
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
      events: { 'type': 'array', 'itemType': DescribeDDoSEventsResponseEvents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLayer4RuleRequest extends $tea.Model {
  listeners: string;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLayer4RuleResponse extends $tea.Model {
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

export class CreateLayer4RuleRequest extends $tea.Model {
  listeners: string;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayer4RuleResponse extends $tea.Model {
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

export class ConfigLayer4RuleAttributeRequest extends $tea.Model {
  instanceId: string;
  forwardProtocol: string;
  frontendPort: number;
  config: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      forwardProtocol: 'ForwardProtocol',
      frontendPort: 'FrontendPort',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      forwardProtocol: 'string',
      frontendPort: 'number',
      config: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer4RuleAttributeResponse extends $tea.Model {
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

export class ConfigLayer4RuleRequest extends $tea.Model {
  listeners: string;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer4RuleResponse extends $tea.Model {
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

export class ConfigHealthCheckRequest extends $tea.Model {
  instanceId: string;
  forwardProtocol: string;
  frontendPort: number;
  healthCheck: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      forwardProtocol: 'ForwardProtocol',
      frontendPort: 'FrontendPort',
      healthCheck: 'HealthCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      forwardProtocol: 'string',
      frontendPort: 'number',
      healthCheck: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigHealthCheckResponse extends $tea.Model {
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

export class ListValueAddedResponseValueAddedList extends $tea.Model {
  instanceId: string;
  status: number;
  expireTime: number;
  gmtCreate: number;
  logSize: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      status: 'Status',
      expireTime: 'ExpireTime',
      gmtCreate: 'GmtCreate',
      logSize: 'LogSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      status: 'number',
      expireTime: 'number',
      gmtCreate: 'number',
      logSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayer7CustomPortsResponseLayer7CustomPorts extends $tea.Model {
  proxyType: string;
  proxyPorts: string[];
  static names(): { [key: string]: string } {
    return {
      proxyType: 'ProxyType',
      proxyPorts: 'ProxyPorts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxyType: 'string',
      proxyPorts: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseCountStatisticsResponseDefenseCountStatistics extends $tea.Model {
  defenseCountTotalUsageOfCurrentMonth: number;
  flowPackCountRemain: number;
  maxUsableDefenseCountCurrentMonth: number;
  static names(): { [key: string]: string } {
    return {
      defenseCountTotalUsageOfCurrentMonth: 'DefenseCountTotalUsageOfCurrentMonth',
      flowPackCountRemain: 'FlowPackCountRemain',
      maxUsableDefenseCountCurrentMonth: 'MaxUsableDefenseCountCurrentMonth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseCountTotalUsageOfCurrentMonth: 'number',
      flowPackCountRemain: 'number',
      maxUsableDefenseCountCurrentMonth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseTagResourcesTagResource extends $tea.Model {
  resourceType: string;
  resourceId: string;
  tagKey: string;
  tagValue: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      resourceId: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseTagResources extends $tea.Model {
  tagResource: ListTagResourcesResponseTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseTagResourcesTagResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseTagKeys extends $tea.Model {
  tagKey: string;
  tagCount: number;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagCount: 'TagCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchSlsDispatchStatusResponseSlsConfigStatusList extends $tea.Model {
  enable: boolean;
  domain: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAccessModeResponseDomainModeList extends $tea.Model {
  domain: string;
  accessMode: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      accessMode: 'AccessMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      accessMode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncTaskResponseAsyncTasks extends $tea.Model {
  taskId: number;
  endTime: number;
  startTime: number;
  taskStatus: number;
  taskResult: string;
  taskParams: string;
  taskType: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      endTime: 'EndTime',
      startTime: 'StartTime',
      taskStatus: 'TaskStatus',
      taskResult: 'TaskResult',
      taskParams: 'TaskParams',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
      endTime: 'number',
      startTime: 'number',
      taskStatus: 'number',
      taskResult: 'string',
      taskParams: 'string',
      taskType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribleLayer7InstanceRelationsResponseLayer7InstanceRelationsInstanceDetails extends $tea.Model {
  instanceId: string;
  functionVersion: string;
  eipList: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      functionVersion: 'FunctionVersion',
      eipList: 'EipList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      functionVersion: 'string',
      eipList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribleLayer7InstanceRelationsResponseLayer7InstanceRelations extends $tea.Model {
  domain: string;
  instanceDetails: DescribleLayer7InstanceRelationsResponseLayer7InstanceRelationsInstanceDetails[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceDetails: 'InstanceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceDetails: { 'type': 'array', 'itemType': DescribleLayer7InstanceRelationsResponseLayer7InstanceRelationsInstanceDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribleCertListResponseCertList extends $tea.Model {
  id: number;
  name: string;
  common: string;
  issuer: string;
  startDate: string;
  endDate: string;
  domainRelated: boolean;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      common: 'Common',
      issuer: 'Issuer',
      startDate: 'StartDate',
      endDate: 'EndDate',
      domainRelated: 'DomainRelated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      common: 'string',
      issuer: 'string',
      startDate: 'string',
      endDate: 'string',
      domainRelated: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer7CCRulesResponseLayer7CCRules extends $tea.Model {
  name: string;
  act: string;
  count: number;
  interval: number;
  mode: string;
  ttl: number;
  uri: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      act: 'Act',
      count: 'Count',
      interval: 'Interval',
      mode: 'Mode',
      ttl: 'Ttl',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      act: 'string',
      count: 'number',
      interval: 'number',
      mode: 'string',
      ttl: 'number',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseDomainsProxyTypeList extends $tea.Model {
  proxyType: string;
  proxyPorts: string[];
  static names(): { [key: string]: string } {
    return {
      proxyType: 'ProxyType',
      proxyPorts: 'ProxyPorts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxyType: 'string',
      proxyPorts: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseDomainsRealServers extends $tea.Model {
  rsType: number;
  realServer: string;
  static names(): { [key: string]: string } {
    return {
      rsType: 'RsType',
      realServer: 'RealServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rsType: 'number',
      realServer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseDomains extends $tea.Model {
  domain: string;
  ccEnabled: boolean;
  ccRuleEnabled: boolean;
  ccTemplate: string;
  sslProtocols: string;
  sslCiphers: string;
  http2Enable: boolean;
  cname: string;
  certName: string;
  proxyTypeList: DescribeDomainsResponseDomainsProxyTypeList[];
  realServers: DescribeDomainsResponseDomainsRealServers[];
  whiteList: string[];
  blackList: string[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      ccEnabled: 'CcEnabled',
      ccRuleEnabled: 'CcRuleEnabled',
      ccTemplate: 'CcTemplate',
      sslProtocols: 'SslProtocols',
      sslCiphers: 'SslCiphers',
      http2Enable: 'Http2Enable',
      cname: 'Cname',
      certName: 'CertName',
      proxyTypeList: 'ProxyTypeList',
      realServers: 'RealServers',
      whiteList: 'WhiteList',
      blackList: 'BlackList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      ccEnabled: 'boolean',
      ccRuleEnabled: 'boolean',
      ccTemplate: 'string',
      sslProtocols: 'string',
      sslCiphers: 'string',
      http2Enable: 'boolean',
      cname: 'string',
      certName: 'string',
      proxyTypeList: { 'type': 'array', 'itemType': DescribeDomainsResponseDomainsProxyTypeList },
      realServers: { 'type': 'array', 'itemType': DescribeDomainsResponseDomainsRealServers },
      whiteList: { 'type': 'array', 'itemType': 'string' },
      blackList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAttackEventsResponseEvents extends $tea.Model {
  startTime: number;
  endTime: number;
  duration: number;
  finished: boolean;
  maxQps: number;
  blockCount: number;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      duration: 'Duration',
      finished: 'Finished',
      maxQps: 'MaxQps',
      blockCount: 'BlockCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      endTime: 'number',
      duration: 'number',
      finished: 'boolean',
      maxQps: 'number',
      blockCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesResponseOpEntities extends $tea.Model {
  gmtCreate: number;
  entityType: number;
  entityObject: string;
  opAction: number;
  opAccount: string;
  opDesc: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      entityType: 'EntityType',
      entityObject: 'EntityObject',
      opAction: 'OpAction',
      opAccount: 'OpAccount',
      opDesc: 'OpDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      entityType: 'number',
      entityObject: 'string',
      opAction: 'number',
      opAccount: 'string',
      opDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RulesResponseListeners extends $tea.Model {
  instanceId: string;
  protocol: string;
  frontendPort: number;
  backendPort: number;
  isAutoCreate: boolean;
  realServers: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      protocol: 'Protocol',
      frontendPort: 'FrontendPort',
      backendPort: 'BackendPort',
      isAutoCreate: 'IsAutoCreate',
      realServers: 'RealServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      protocol: 'string',
      frontendPort: 'number',
      backendPort: 'number',
      isAutoCreate: 'boolean',
      realServers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesResponseListenersConfigSla extends $tea.Model {
  cps: number;
  maxconn: number;
  cpsEnable: number;
  maxconnEnable: number;
  static names(): { [key: string]: string } {
    return {
      cps: 'Cps',
      maxconn: 'Maxconn',
      cpsEnable: 'CpsEnable',
      maxconnEnable: 'MaxconnEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cps: 'number',
      maxconn: 'number',
      cpsEnable: 'number',
      maxconnEnable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesResponseListenersConfigSlimit extends $tea.Model {
  cps: number;
  maxconn: number;
  cpsEnable: number;
  cpsMode: number;
  maxconnEnable: number;
  bps: number;
  pps: number;
  static names(): { [key: string]: string } {
    return {
      cps: 'Cps',
      maxconn: 'Maxconn',
      cpsEnable: 'CpsEnable',
      cpsMode: 'CpsMode',
      maxconnEnable: 'MaxconnEnable',
      bps: 'Bps',
      pps: 'Pps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cps: 'number',
      maxconn: 'number',
      cpsEnable: 'number',
      cpsMode: 'number',
      maxconnEnable: 'number',
      bps: 'number',
      pps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesResponseListenersConfigPayloadLen extends $tea.Model {
  min: number;
  max: number;
  static names(): { [key: string]: string } {
    return {
      min: 'Min',
      max: 'Max',
    };
  }

  static types(): { [key: string]: any } {
    return {
      min: 'number',
      max: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesResponseListenersConfigCcSblack extends $tea.Model {
  during: number;
  expires: number;
  cnt: number;
  type: number;
  static names(): { [key: string]: string } {
    return {
      during: 'During',
      expires: 'Expires',
      cnt: 'Cnt',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      during: 'number',
      expires: 'number',
      cnt: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesResponseListenersConfigCc extends $tea.Model {
  sblack: DescribeLayer4RuleAttributesResponseListenersConfigCcSblack[];
  static names(): { [key: string]: string } {
    return {
      sblack: 'Sblack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sblack: { 'type': 'array', 'itemType': DescribeLayer4RuleAttributesResponseListenersConfigCcSblack },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesResponseListenersConfig extends $tea.Model {
  persistenceTimeout: number;
  synproxy: string;
  nodataConn: string;
  sla: DescribeLayer4RuleAttributesResponseListenersConfigSla;
  slimit: DescribeLayer4RuleAttributesResponseListenersConfigSlimit;
  payloadLen: DescribeLayer4RuleAttributesResponseListenersConfigPayloadLen;
  cc: DescribeLayer4RuleAttributesResponseListenersConfigCc;
  static names(): { [key: string]: string } {
    return {
      persistenceTimeout: 'PersistenceTimeout',
      synproxy: 'Synproxy',
      nodataConn: 'NodataConn',
      sla: 'Sla',
      slimit: 'Slimit',
      payloadLen: 'PayloadLen',
      cc: 'Cc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      persistenceTimeout: 'number',
      synproxy: 'string',
      nodataConn: 'string',
      sla: DescribeLayer4RuleAttributesResponseListenersConfigSla,
      slimit: DescribeLayer4RuleAttributesResponseListenersConfigSlimit,
      payloadLen: DescribeLayer4RuleAttributesResponseListenersConfigPayloadLen,
      cc: DescribeLayer4RuleAttributesResponseListenersConfigCc,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesResponseListeners extends $tea.Model {
  instanceId: string;
  protocol: string;
  frontendPort: number;
  config: DescribeLayer4RuleAttributesResponseListenersConfig;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      protocol: 'Protocol',
      frontendPort: 'FrontendPort',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      protocol: 'string',
      frontendPort: 'number',
      config: DescribeLayer4RuleAttributesResponseListenersConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpTrafficResponseIpTrafficPoints extends $tea.Model {
  time: number;
  maxInbps: number;
  maxOutbps: number;
  cps: number;
  actConns: number;
  inactConns: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      maxInbps: 'MaxInbps',
      maxOutbps: 'MaxOutbps',
      cps: 'Cps',
      actConns: 'ActConns',
      inactConns: 'InactConns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      maxInbps: 'number',
      maxOutbps: 'number',
      cps: 'number',
      actConns: 'number',
      inactConns: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatisticsResponseInstanceStatistics extends $tea.Model {
  instanceId: string;
  portUsage: number;
  domainUsage: number;
  siteUsage: number;
  defenseCountUsage: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      portUsage: 'PortUsage',
      domainUsage: 'DomainUsage',
      siteUsage: 'SiteUsage',
      defenseCountUsage: 'DefenseCountUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      portUsage: 'number',
      domainUsage: 'number',
      siteUsage: 'number',
      defenseCountUsage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsResponseInstanceSpecs extends $tea.Model {
  instanceId: string;
  baseBandwidth: number;
  elasticBandwidth: number;
  portLimit: number;
  siteLimit: number;
  domainLimit: number;
  bandwidthMbps: number;
  defenseCount: number;
  functionVersion: string;
  qpsLimit: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      baseBandwidth: 'BaseBandwidth',
      elasticBandwidth: 'ElasticBandwidth',
      portLimit: 'PortLimit',
      siteLimit: 'SiteLimit',
      domainLimit: 'DomainLimit',
      bandwidthMbps: 'BandwidthMbps',
      defenseCount: 'DefenseCount',
      functionVersion: 'FunctionVersion',
      qpsLimit: 'QpsLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      baseBandwidth: 'number',
      elasticBandwidth: 'number',
      portLimit: 'number',
      siteLimit: 'number',
      domainLimit: 'number',
      bandwidthMbps: 'number',
      defenseCount: 'number',
      functionVersion: 'string',
      qpsLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseInstances extends $tea.Model {
  instanceId: string;
  remark: string;
  status: number;
  debtStatus: number;
  expireTime: number;
  gmtCreate: number;
  edition: number;
  enabled: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      remark: 'Remark',
      status: 'Status',
      debtStatus: 'DebtStatus',
      expireTime: 'ExpireTime',
      gmtCreate: 'GmtCreate',
      edition: 'Edition',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      remark: 'string',
      status: 'number',
      debtStatus: 'number',
      expireTime: 'number',
      gmtCreate: 'number',
      edition: 'number',
      enabled: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDetailsResponseInstanceDetailsEipInfoList extends $tea.Model {
  eip: string;
  status: string;
  static names(): { [key: string]: string } {
    return {
      eip: 'Eip',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eip: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDetailsResponseInstanceDetails extends $tea.Model {
  instanceId: string;
  line: string;
  eipInfoList: DescribeInstanceDetailsResponseInstanceDetailsEipInfoList[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      line: 'Line',
      eipInfoList: 'EipInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      line: 'string',
      eipInfoList: { 'type': 'array', 'itemType': DescribeInstanceDetailsResponseInstanceDetailsEipInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckStatusListResponseHealthCheckStatusListRealServerStatusList extends $tea.Model {
  address: string;
  status: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckStatusListResponseHealthCheckStatusList extends $tea.Model {
  instanceId: string;
  protocol: string;
  frontendPort: number;
  status: string;
  realServerStatusList: DescribeHealthCheckStatusListResponseHealthCheckStatusListRealServerStatusList[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      protocol: 'Protocol',
      frontendPort: 'FrontendPort',
      status: 'Status',
      realServerStatusList: 'RealServerStatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      protocol: 'string',
      frontendPort: 'number',
      status: 'string',
      realServerStatusList: { 'type': 'array', 'itemType': DescribeHealthCheckStatusListResponseHealthCheckStatusListRealServerStatusList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckListResponseListenersHealthCheck extends $tea.Model {
  type: string;
  domain: string;
  uri: string;
  down: number;
  interval: number;
  port: number;
  timeout: number;
  up: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      domain: 'Domain',
      uri: 'Uri',
      down: 'Down',
      interval: 'Interval',
      port: 'Port',
      timeout: 'Timeout',
      up: 'Up',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      domain: 'string',
      uri: 'string',
      down: 'number',
      interval: 'number',
      port: 'number',
      timeout: 'number',
      up: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckListResponseListeners extends $tea.Model {
  instanceId: string;
  protocol: string;
  frontendPort: number;
  healthCheck: DescribeHealthCheckListResponseListenersHealthCheck;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      protocol: 'Protocol',
      frontendPort: 'FrontendPort',
      healthCheck: 'HealthCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      protocol: 'string',
      frontendPort: 'number',
      healthCheck: DescribeHealthCheckListResponseListenersHealthCheck,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSTrafficResponseDDoSTrafficPoints extends $tea.Model {
  time: number;
  defenseMaxInBps: number;
  sourceMaxInBps: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      defenseMaxInBps: 'DefenseMaxInBps',
      sourceMaxInBps: 'SourceMaxInBps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      defenseMaxInBps: 'number',
      sourceMaxInBps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSEventsResponseEvents extends $tea.Model {
  startTime: number;
  endTime: number;
  interval: number;
  status: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      endTime: 'number',
      interval: 'number',
      status: 'string',
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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ddoscoo", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  async modifyFullLogTtlWithOptions(request: ModifyFullLogTtlRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFullLogTtlResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyFullLogTtlResponse>(await this.doRequest("ModifyFullLogTtl", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new ModifyFullLogTtlResponse({}));
  }

  async modifyFullLogTtl(request: ModifyFullLogTtlRequest): Promise<ModifyFullLogTtlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFullLogTtlWithOptions(request, runtime);
  }

  async releaseValueAddedWithOptions(request: ReleaseValueAddedRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseValueAddedResponse> {
    Util.validateModel(request);
    return $tea.cast<ReleaseValueAddedResponse>(await this.doRequest("ReleaseValueAdded", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new ReleaseValueAddedResponse({}));
  }

  async releaseValueAdded(request: ReleaseValueAddedRequest): Promise<ReleaseValueAddedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseValueAddedWithOptions(request, runtime);
  }

  async listValueAddedWithOptions(request: ListValueAddedRequest, runtime: $Util.RuntimeOptions): Promise<ListValueAddedResponse> {
    Util.validateModel(request);
    return $tea.cast<ListValueAddedResponse>(await this.doRequest("ListValueAdded", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new ListValueAddedResponse({}));
  }

  async listValueAdded(request: ListValueAddedRequest): Promise<ListValueAddedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listValueAddedWithOptions(request, runtime);
  }

  async listLayer7CustomPortsWithOptions(request: ListLayer7CustomPortsRequest, runtime: $Util.RuntimeOptions): Promise<ListLayer7CustomPortsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListLayer7CustomPortsResponse>(await this.doRequest("ListLayer7CustomPorts", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new ListLayer7CustomPortsResponse({}));
  }

  async listLayer7CustomPorts(request: ListLayer7CustomPortsRequest): Promise<ListLayer7CustomPortsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLayer7CustomPortsWithOptions(request, runtime);
  }

  async describeSimpleDomainsWithOptions(request: DescribeSimpleDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSimpleDomainsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeSimpleDomainsResponse>(await this.doRequest("DescribeSimpleDomains", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribeSimpleDomainsResponse({}));
  }

  async describeSimpleDomains(request: DescribeSimpleDomainsRequest): Promise<DescribeSimpleDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSimpleDomainsWithOptions(request, runtime);
  }

  async describeDefenseCountStatisticsWithOptions(request: DescribeDefenseCountStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefenseCountStatisticsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDefenseCountStatisticsResponse>(await this.doRequest("DescribeDefenseCountStatistics", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribeDefenseCountStatisticsResponse({}));
  }

  async describeDefenseCountStatistics(request: DescribeDefenseCountStatisticsRequest): Promise<DescribeDefenseCountStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefenseCountStatisticsWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    return $tea.cast<UntagResourcesResponse>(await this.doRequest("UntagResources", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    return $tea.cast<TagResourcesResponse>(await this.doRequest("TagResources", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListTagResourcesResponse>(await this.doRequest("ListTagResources", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListTagKeysResponse> {
    Util.validateModel(request);
    return $tea.cast<ListTagKeysResponse>(await this.doRequest("ListTagKeys", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new ListTagKeysResponse({}));
  }

  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  async describeDomainQpsWithCacheWithOptions(request: DescribeDomainQpsWithCacheRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainQpsWithCacheResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDomainQpsWithCacheResponse>(await this.doRequest("DescribeDomainQpsWithCache", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribeDomainQpsWithCacheResponse({}));
  }

  async describeDomainQpsWithCache(request: DescribeDomainQpsWithCacheRequest): Promise<DescribeDomainQpsWithCacheResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainQpsWithCacheWithOptions(request, runtime);
  }

  async describeLogStoreExistStatusWithOptions(request: DescribeLogStoreExistStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogStoreExistStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLogStoreExistStatusResponse>(await this.doRequest("DescribeLogStoreExistStatus", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribeLogStoreExistStatusResponse({}));
  }

  async describeLogStoreExistStatus(request: DescribeLogStoreExistStatusRequest): Promise<DescribeLogStoreExistStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogStoreExistStatusWithOptions(request, runtime);
  }

  async describeBatchSlsDispatchStatusWithOptions(request: DescribeBatchSlsDispatchStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBatchSlsDispatchStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeBatchSlsDispatchStatusResponse>(await this.doRequest("DescribeBatchSlsDispatchStatus", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribeBatchSlsDispatchStatusResponse({}));
  }

  async describeBatchSlsDispatchStatus(request: DescribeBatchSlsDispatchStatusRequest): Promise<DescribeBatchSlsDispatchStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBatchSlsDispatchStatusWithOptions(request, runtime);
  }

  async describeSlsEmptyCountWithOptions(request: DescribeSlsEmptyCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlsEmptyCountResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeSlsEmptyCountResponse>(await this.doRequest("DescribeSlsEmptyCount", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribeSlsEmptyCountResponse({}));
  }

  async describeSlsEmptyCount(request: DescribeSlsEmptyCountRequest): Promise<DescribeSlsEmptyCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlsEmptyCountWithOptions(request, runtime);
  }

  async emptySlsLogstoreWithOptions(request: EmptySlsLogstoreRequest, runtime: $Util.RuntimeOptions): Promise<EmptySlsLogstoreResponse> {
    Util.validateModel(request);
    return $tea.cast<EmptySlsLogstoreResponse>(await this.doRequest("EmptySlsLogstore", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new EmptySlsLogstoreResponse({}));
  }

  async emptySlsLogstore(request: EmptySlsLogstoreRequest): Promise<EmptySlsLogstoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.emptySlsLogstoreWithOptions(request, runtime);
  }

  async closeDomainSlsConfigWithOptions(request: CloseDomainSlsConfigRequest, runtime: $Util.RuntimeOptions): Promise<CloseDomainSlsConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<CloseDomainSlsConfigResponse>(await this.doRequest("CloseDomainSlsConfig", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new CloseDomainSlsConfigResponse({}));
  }

  async closeDomainSlsConfig(request: CloseDomainSlsConfigRequest): Promise<CloseDomainSlsConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.closeDomainSlsConfigWithOptions(request, runtime);
  }

  async openDomainSlsConfigWithOptions(request: OpenDomainSlsConfigRequest, runtime: $Util.RuntimeOptions): Promise<OpenDomainSlsConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<OpenDomainSlsConfigResponse>(await this.doRequest("OpenDomainSlsConfig", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new OpenDomainSlsConfigResponse({}));
  }

  async openDomainSlsConfig(request: OpenDomainSlsConfigRequest): Promise<OpenDomainSlsConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openDomainSlsConfigWithOptions(request, runtime);
  }

  async describeSlsLogstoreInfoWithOptions(request: DescribeSlsLogstoreInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlsLogstoreInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeSlsLogstoreInfoResponse>(await this.doRequest("DescribeSlsLogstoreInfo", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribeSlsLogstoreInfoResponse({}));
  }

  async describeSlsLogstoreInfo(request: DescribeSlsLogstoreInfoRequest): Promise<DescribeSlsLogstoreInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlsLogstoreInfoWithOptions(request, runtime);
  }

  async describeSlsAuthStatusWithOptions(request: DescribeSlsAuthStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlsAuthStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeSlsAuthStatusResponse>(await this.doRequest("DescribeSlsAuthStatus", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribeSlsAuthStatusResponse({}));
  }

  async describeSlsAuthStatus(request: DescribeSlsAuthStatusRequest): Promise<DescribeSlsAuthStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlsAuthStatusWithOptions(request, runtime);
  }

  async describeSlsOpenStatusWithOptions(request: DescribeSlsOpenStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlsOpenStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeSlsOpenStatusResponse>(await this.doRequest("DescribeSlsOpenStatus", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribeSlsOpenStatusResponse({}));
  }

  async describeSlsOpenStatus(request: DescribeSlsOpenStatusRequest): Promise<DescribeSlsOpenStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlsOpenStatusWithOptions(request, runtime);
  }

  async describeDomainSlsStatusWithOptions(request: DescribeDomainSlsStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainSlsStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDomainSlsStatusResponse>(await this.doRequest("DescribeDomainSlsStatus", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribeDomainSlsStatusResponse({}));
  }

  async describeDomainSlsStatus(request: DescribeDomainSlsStatusRequest): Promise<DescribeDomainSlsStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainSlsStatusWithOptions(request, runtime);
  }

  async configDomainAccessModeWithOptions(request: ConfigDomainAccessModeRequest, runtime: $Util.RuntimeOptions): Promise<ConfigDomainAccessModeResponse> {
    Util.validateModel(request);
    return $tea.cast<ConfigDomainAccessModeResponse>(await this.doRequest("ConfigDomainAccessMode", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new ConfigDomainAccessModeResponse({}));
  }

  async configDomainAccessMode(request: ConfigDomainAccessModeRequest): Promise<ConfigDomainAccessModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configDomainAccessModeWithOptions(request, runtime);
  }

  async describeDomainAccessModeWithOptions(request: DescribeDomainAccessModeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainAccessModeResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDomainAccessModeResponse>(await this.doRequest("DescribeDomainAccessMode", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribeDomainAccessModeResponse({}));
  }

  async describeDomainAccessMode(request: DescribeDomainAccessModeRequest): Promise<DescribeDomainAccessModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainAccessModeWithOptions(request, runtime);
  }

  async deleteAsyncTaskWithOptions(request: DeleteAsyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAsyncTaskResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteAsyncTaskResponse>(await this.doRequest("DeleteAsyncTask", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DeleteAsyncTaskResponse({}));
  }

  async deleteAsyncTask(request: DeleteAsyncTaskRequest): Promise<DeleteAsyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAsyncTaskWithOptions(request, runtime);
  }

  async createAsyncTaskWithOptions(request: CreateAsyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateAsyncTaskResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateAsyncTaskResponse>(await this.doRequest("CreateAsyncTask", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new CreateAsyncTaskResponse({}));
  }

  async createAsyncTask(request: CreateAsyncTaskRequest): Promise<CreateAsyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAsyncTaskWithOptions(request, runtime);
  }

  async listAsyncTaskWithOptions(request: ListAsyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<ListAsyncTaskResponse> {
    Util.validateModel(request);
    return $tea.cast<ListAsyncTaskResponse>(await this.doRequest("ListAsyncTask", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new ListAsyncTaskResponse({}));
  }

  async listAsyncTask(request: ListAsyncTaskRequest): Promise<ListAsyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAsyncTaskWithOptions(request, runtime);
  }

  async enableLayer7CCRuleWithOptions(request: EnableLayer7CCRuleRequest, runtime: $Util.RuntimeOptions): Promise<EnableLayer7CCRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<EnableLayer7CCRuleResponse>(await this.doRequest("EnableLayer7CCRule", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new EnableLayer7CCRuleResponse({}));
  }

  async enableLayer7CCRule(request: EnableLayer7CCRuleRequest): Promise<EnableLayer7CCRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableLayer7CCRuleWithOptions(request, runtime);
  }

  async enableLayer7CCWithOptions(request: EnableLayer7CCRequest, runtime: $Util.RuntimeOptions): Promise<EnableLayer7CCResponse> {
    Util.validateModel(request);
    return $tea.cast<EnableLayer7CCResponse>(await this.doRequest("EnableLayer7CC", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new EnableLayer7CCResponse({}));
  }

  async enableLayer7CC(request: EnableLayer7CCRequest): Promise<EnableLayer7CCResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableLayer7CCWithOptions(request, runtime);
  }

  async disableLayer7CCRuleWithOptions(request: DisableLayer7CCRuleRequest, runtime: $Util.RuntimeOptions): Promise<DisableLayer7CCRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<DisableLayer7CCRuleResponse>(await this.doRequest("DisableLayer7CCRule", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DisableLayer7CCRuleResponse({}));
  }

  async disableLayer7CCRule(request: DisableLayer7CCRuleRequest): Promise<DisableLayer7CCRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableLayer7CCRuleWithOptions(request, runtime);
  }

  async disableLayer7CCWithOptions(request: DisableLayer7CCRequest, runtime: $Util.RuntimeOptions): Promise<DisableLayer7CCResponse> {
    Util.validateModel(request);
    return $tea.cast<DisableLayer7CCResponse>(await this.doRequest("DisableLayer7CC", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DisableLayer7CCResponse({}));
  }

  async disableLayer7CC(request: DisableLayer7CCRequest): Promise<DisableLayer7CCResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableLayer7CCWithOptions(request, runtime);
  }

  async describleLayer7InstanceRelationsWithOptions(request: DescribleLayer7InstanceRelationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribleLayer7InstanceRelationsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribleLayer7InstanceRelationsResponse>(await this.doRequest("DescribleLayer7InstanceRelations", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribleLayer7InstanceRelationsResponse({}));
  }

  async describleLayer7InstanceRelations(request: DescribleLayer7InstanceRelationsRequest): Promise<DescribleLayer7InstanceRelationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describleLayer7InstanceRelationsWithOptions(request, runtime);
  }

  async describleCertListWithOptions(request: DescribleCertListRequest, runtime: $Util.RuntimeOptions): Promise<DescribleCertListResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribleCertListResponse>(await this.doRequest("DescribleCertList", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribleCertListResponse({}));
  }

  async describleCertList(request: DescribleCertListRequest): Promise<DescribleCertListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describleCertListWithOptions(request, runtime);
  }

  async describeLayer7CCRulesWithOptions(request: DescribeLayer7CCRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLayer7CCRulesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLayer7CCRulesResponse>(await this.doRequest("DescribeLayer7CCRules", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribeLayer7CCRulesResponse({}));
  }

  async describeLayer7CCRules(request: DescribeLayer7CCRulesRequest): Promise<DescribeLayer7CCRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLayer7CCRulesWithOptions(request, runtime);
  }

  async describeDomainsWithOptions(request: DescribeDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDomainsResponse>(await this.doRequest("DescribeDomains", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribeDomainsResponse({}));
  }

  async describeDomains(request: DescribeDomainsRequest): Promise<DescribeDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainsWithOptions(request, runtime);
  }

  async describeDomainQpsWithOptions(request: DescribeDomainQpsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainQpsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDomainQpsResponse>(await this.doRequest("DescribeDomainQps", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribeDomainQpsResponse({}));
  }

  async describeDomainQps(request: DescribeDomainQpsRequest): Promise<DescribeDomainQpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainQpsWithOptions(request, runtime);
  }

  async describeDomainAttackEventsWithOptions(request: DescribeDomainAttackEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainAttackEventsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDomainAttackEventsResponse>(await this.doRequest("DescribeDomainAttackEvents", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribeDomainAttackEventsResponse({}));
  }

  async describeDomainAttackEvents(request: DescribeDomainAttackEventsRequest): Promise<DescribeDomainAttackEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainAttackEventsWithOptions(request, runtime);
  }

  async describeBackSourceCidrWithOptions(request: DescribeBackSourceCidrRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackSourceCidrResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeBackSourceCidrResponse>(await this.doRequest("DescribeBackSourceCidr", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribeBackSourceCidrResponse({}));
  }

  async describeBackSourceCidr(request: DescribeBackSourceCidrRequest): Promise<DescribeBackSourceCidrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackSourceCidrWithOptions(request, runtime);
  }

  async deleteLayer7RuleWithOptions(request: DeleteLayer7RuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLayer7RuleResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteLayer7RuleResponse>(await this.doRequest("DeleteLayer7Rule", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DeleteLayer7RuleResponse({}));
  }

  async deleteLayer7Rule(request: DeleteLayer7RuleRequest): Promise<DeleteLayer7RuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLayer7RuleWithOptions(request, runtime);
  }

  async deleteLayer7CCRuleWithOptions(request: DeleteLayer7CCRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLayer7CCRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteLayer7CCRuleResponse>(await this.doRequest("DeleteLayer7CCRule", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DeleteLayer7CCRuleResponse({}));
  }

  async deleteLayer7CCRule(request: DeleteLayer7CCRuleRequest): Promise<DeleteLayer7CCRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLayer7CCRuleWithOptions(request, runtime);
  }

  async createLayer7RuleWithOptions(request: CreateLayer7RuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateLayer7RuleResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateLayer7RuleResponse>(await this.doRequest("CreateLayer7Rule", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new CreateLayer7RuleResponse({}));
  }

  async createLayer7Rule(request: CreateLayer7RuleRequest): Promise<CreateLayer7RuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLayer7RuleWithOptions(request, runtime);
  }

  async configLayer7RuleWithOptions(request: ConfigLayer7RuleRequest, runtime: $Util.RuntimeOptions): Promise<ConfigLayer7RuleResponse> {
    Util.validateModel(request);
    return $tea.cast<ConfigLayer7RuleResponse>(await this.doRequest("ConfigLayer7Rule", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new ConfigLayer7RuleResponse({}));
  }

  async configLayer7Rule(request: ConfigLayer7RuleRequest): Promise<ConfigLayer7RuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configLayer7RuleWithOptions(request, runtime);
  }

  async configLayer7CertWithOptions(request: ConfigLayer7CertRequest, runtime: $Util.RuntimeOptions): Promise<ConfigLayer7CertResponse> {
    Util.validateModel(request);
    return $tea.cast<ConfigLayer7CertResponse>(await this.doRequest("ConfigLayer7Cert", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new ConfigLayer7CertResponse({}));
  }

  async configLayer7Cert(request: ConfigLayer7CertRequest): Promise<ConfigLayer7CertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configLayer7CertWithOptions(request, runtime);
  }

  async configLayer7CCTemplateWithOptions(request: ConfigLayer7CCTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ConfigLayer7CCTemplateResponse> {
    Util.validateModel(request);
    return $tea.cast<ConfigLayer7CCTemplateResponse>(await this.doRequest("ConfigLayer7CCTemplate", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new ConfigLayer7CCTemplateResponse({}));
  }

  async configLayer7CCTemplate(request: ConfigLayer7CCTemplateRequest): Promise<ConfigLayer7CCTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configLayer7CCTemplateWithOptions(request, runtime);
  }

  async configLayer7CCRuleWithOptions(request: ConfigLayer7CCRuleRequest, runtime: $Util.RuntimeOptions): Promise<ConfigLayer7CCRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<ConfigLayer7CCRuleResponse>(await this.doRequest("ConfigLayer7CCRule", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new ConfigLayer7CCRuleResponse({}));
  }

  async configLayer7CCRule(request: ConfigLayer7CCRuleRequest): Promise<ConfigLayer7CCRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configLayer7CCRuleWithOptions(request, runtime);
  }

  async configLayer7BlackWhiteListWithOptions(request: ConfigLayer7BlackWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<ConfigLayer7BlackWhiteListResponse> {
    Util.validateModel(request);
    return $tea.cast<ConfigLayer7BlackWhiteListResponse>(await this.doRequest("ConfigLayer7BlackWhiteList", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new ConfigLayer7BlackWhiteListResponse({}));
  }

  async configLayer7BlackWhiteList(request: ConfigLayer7BlackWhiteListRequest): Promise<ConfigLayer7BlackWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configLayer7BlackWhiteListWithOptions(request, runtime);
  }

  async addLayer7CCRuleWithOptions(request: AddLayer7CCRuleRequest, runtime: $Util.RuntimeOptions): Promise<AddLayer7CCRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<AddLayer7CCRuleResponse>(await this.doRequest("AddLayer7CCRule", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new AddLayer7CCRuleResponse({}));
  }

  async addLayer7CCRule(request: AddLayer7CCRuleRequest): Promise<AddLayer7CCRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLayer7CCRuleWithOptions(request, runtime);
  }

  async releaseInstanceWithOptions(request: ReleaseInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<ReleaseInstanceResponse>(await this.doRequest("ReleaseInstance", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new ReleaseInstanceResponse({}));
  }

  async releaseInstance(request: ReleaseInstanceRequest): Promise<ReleaseInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseInstanceWithOptions(request, runtime);
  }

  async modifyInstanceRemarkWithOptions(request: ModifyInstanceRemarkRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceRemarkResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyInstanceRemarkResponse>(await this.doRequest("ModifyInstanceRemark", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new ModifyInstanceRemarkResponse({}));
  }

  async modifyInstanceRemark(request: ModifyInstanceRemarkRequest): Promise<ModifyInstanceRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceRemarkWithOptions(request, runtime);
  }

  async modifyElasticBandWidthWithOptions(request: ModifyElasticBandWidthRequest, runtime: $Util.RuntimeOptions): Promise<ModifyElasticBandWidthResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyElasticBandWidthResponse>(await this.doRequest("ModifyElasticBandWidth", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new ModifyElasticBandWidthResponse({}));
  }

  async modifyElasticBandWidth(request: ModifyElasticBandWidthRequest): Promise<ModifyElasticBandWidthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyElasticBandWidthWithOptions(request, runtime);
  }

  async describeOpEntitiesWithOptions(request: DescribeOpEntitiesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOpEntitiesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeOpEntitiesResponse>(await this.doRequest("DescribeOpEntities", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribeOpEntitiesResponse({}));
  }

  async describeOpEntities(request: DescribeOpEntitiesRequest): Promise<DescribeOpEntitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOpEntitiesWithOptions(request, runtime);
  }

  async describeLayer4RulesWithOptions(request: DescribeLayer4RulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLayer4RulesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLayer4RulesResponse>(await this.doRequest("DescribeLayer4Rules", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribeLayer4RulesResponse({}));
  }

  async describeLayer4Rules(request: DescribeLayer4RulesRequest): Promise<DescribeLayer4RulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLayer4RulesWithOptions(request, runtime);
  }

  async describeLayer4RuleAttributesWithOptions(request: DescribeLayer4RuleAttributesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLayer4RuleAttributesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeLayer4RuleAttributesResponse>(await this.doRequest("DescribeLayer4RuleAttributes", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribeLayer4RuleAttributesResponse({}));
  }

  async describeLayer4RuleAttributes(request: DescribeLayer4RuleAttributesRequest): Promise<DescribeLayer4RuleAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLayer4RuleAttributesWithOptions(request, runtime);
  }

  async describeIpTrafficWithOptions(request: DescribeIpTrafficRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIpTrafficResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeIpTrafficResponse>(await this.doRequest("DescribeIpTraffic", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribeIpTrafficResponse({}));
  }

  async describeIpTraffic(request: DescribeIpTrafficRequest): Promise<DescribeIpTrafficResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIpTrafficWithOptions(request, runtime);
  }

  async describeInstanceStatisticsWithOptions(request: DescribeInstanceStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceStatisticsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInstanceStatisticsResponse>(await this.doRequest("DescribeInstanceStatistics", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribeInstanceStatisticsResponse({}));
  }

  async describeInstanceStatistics(request: DescribeInstanceStatisticsRequest): Promise<DescribeInstanceStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceStatisticsWithOptions(request, runtime);
  }

  async describeInstanceSpecsWithOptions(request: DescribeInstanceSpecsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceSpecsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInstanceSpecsResponse>(await this.doRequest("DescribeInstanceSpecs", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribeInstanceSpecsResponse({}));
  }

  async describeInstanceSpecs(request: DescribeInstanceSpecsRequest): Promise<DescribeInstanceSpecsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceSpecsWithOptions(request, runtime);
  }

  async describeInstancesWithOptions(request: DescribeInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInstancesResponse>(await this.doRequest("DescribeInstances", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribeInstancesResponse({}));
  }

  async describeInstances(request: DescribeInstancesRequest): Promise<DescribeInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  async describeInstanceDetailsWithOptions(request: DescribeInstanceDetailsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceDetailsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInstanceDetailsResponse>(await this.doRequest("DescribeInstanceDetails", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribeInstanceDetailsResponse({}));
  }

  async describeInstanceDetails(request: DescribeInstanceDetailsRequest): Promise<DescribeInstanceDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceDetailsWithOptions(request, runtime);
  }

  async describeHealthCheckStatusListWithOptions(request: DescribeHealthCheckStatusListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHealthCheckStatusListResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeHealthCheckStatusListResponse>(await this.doRequest("DescribeHealthCheckStatusList", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribeHealthCheckStatusListResponse({}));
  }

  async describeHealthCheckStatusList(request: DescribeHealthCheckStatusListRequest): Promise<DescribeHealthCheckStatusListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHealthCheckStatusListWithOptions(request, runtime);
  }

  async describeHealthCheckListWithOptions(request: DescribeHealthCheckListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHealthCheckListResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeHealthCheckListResponse>(await this.doRequest("DescribeHealthCheckList", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribeHealthCheckListResponse({}));
  }

  async describeHealthCheckList(request: DescribeHealthCheckListRequest): Promise<DescribeHealthCheckListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHealthCheckListWithOptions(request, runtime);
  }

  async describeElasticBandwidthSpecWithOptions(request: DescribeElasticBandwidthSpecRequest, runtime: $Util.RuntimeOptions): Promise<DescribeElasticBandwidthSpecResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeElasticBandwidthSpecResponse>(await this.doRequest("DescribeElasticBandwidthSpec", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribeElasticBandwidthSpecResponse({}));
  }

  async describeElasticBandwidthSpec(request: DescribeElasticBandwidthSpecRequest): Promise<DescribeElasticBandwidthSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeElasticBandwidthSpecWithOptions(request, runtime);
  }

  async describeDDoSTrafficWithOptions(request: DescribeDDoSTrafficRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDDoSTrafficResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDDoSTrafficResponse>(await this.doRequest("DescribeDDoSTraffic", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribeDDoSTrafficResponse({}));
  }

  async describeDDoSTraffic(request: DescribeDDoSTrafficRequest): Promise<DescribeDDoSTrafficResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDDoSTrafficWithOptions(request, runtime);
  }

  async describeDDoSEventsWithOptions(request: DescribeDDoSEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDDoSEventsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDDoSEventsResponse>(await this.doRequest("DescribeDDoSEvents", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DescribeDDoSEventsResponse({}));
  }

  async describeDDoSEvents(request: DescribeDDoSEventsRequest): Promise<DescribeDDoSEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDDoSEventsWithOptions(request, runtime);
  }

  async deleteLayer4RuleWithOptions(request: DeleteLayer4RuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLayer4RuleResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteLayer4RuleResponse>(await this.doRequest("DeleteLayer4Rule", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new DeleteLayer4RuleResponse({}));
  }

  async deleteLayer4Rule(request: DeleteLayer4RuleRequest): Promise<DeleteLayer4RuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLayer4RuleWithOptions(request, runtime);
  }

  async createLayer4RuleWithOptions(request: CreateLayer4RuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateLayer4RuleResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateLayer4RuleResponse>(await this.doRequest("CreateLayer4Rule", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new CreateLayer4RuleResponse({}));
  }

  async createLayer4Rule(request: CreateLayer4RuleRequest): Promise<CreateLayer4RuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLayer4RuleWithOptions(request, runtime);
  }

  async configLayer4RuleAttributeWithOptions(request: ConfigLayer4RuleAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ConfigLayer4RuleAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<ConfigLayer4RuleAttributeResponse>(await this.doRequest("ConfigLayer4RuleAttribute", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new ConfigLayer4RuleAttributeResponse({}));
  }

  async configLayer4RuleAttribute(request: ConfigLayer4RuleAttributeRequest): Promise<ConfigLayer4RuleAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configLayer4RuleAttributeWithOptions(request, runtime);
  }

  async configLayer4RuleWithOptions(request: ConfigLayer4RuleRequest, runtime: $Util.RuntimeOptions): Promise<ConfigLayer4RuleResponse> {
    Util.validateModel(request);
    return $tea.cast<ConfigLayer4RuleResponse>(await this.doRequest("ConfigLayer4Rule", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new ConfigLayer4RuleResponse({}));
  }

  async configLayer4Rule(request: ConfigLayer4RuleRequest): Promise<ConfigLayer4RuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configLayer4RuleWithOptions(request, runtime);
  }

  async configHealthCheckWithOptions(request: ConfigHealthCheckRequest, runtime: $Util.RuntimeOptions): Promise<ConfigHealthCheckResponse> {
    Util.validateModel(request);
    return $tea.cast<ConfigHealthCheckResponse>(await this.doRequest("ConfigHealthCheck", "HTTPS", "POST", "2017-12-28", "AK", null, $tea.toMap(request), runtime), new ConfigHealthCheckResponse({}));
  }

  async configHealthCheck(request: ConfigHealthCheckRequest): Promise<ConfigHealthCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configHealthCheckWithOptions(request, runtime);
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
