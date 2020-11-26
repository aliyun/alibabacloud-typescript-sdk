// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DescribeOnDemandInstanceStatusRequest extends $tea.Model {
  instanceIdList: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIdList: 'InstanceIdList',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOnDemandInstanceStatusResponse extends $tea.Model {
  requestId: string;
  instances: DescribeOnDemandInstanceStatusResponseInstances[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instances: { 'type': 'array', 'itemType': DescribeOnDemandInstanceStatusResponseInstances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInstanceModeOnDemandRequest extends $tea.Model {
  instanceIdList: string[];
  mode: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIdList: 'InstanceIdList',
      mode: 'Mode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
      mode: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInstanceModeOnDemandResponse extends $tea.Model {
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

export class QuerySchedruleOnDemandRequest extends $tea.Model {
  instanceId: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySchedruleOnDemandResponse extends $tea.Model {
  requestId: string;
  userId: string;
  instanceId: string;
  ruleConfig: QuerySchedruleOnDemandResponseRuleConfig[];
  ruleStatus: QuerySchedruleOnDemandResponseRuleStatus[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userId: 'UserId',
      instanceId: 'InstanceId',
      ruleConfig: 'RuleConfig',
      ruleStatus: 'RuleStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userId: 'string',
      instanceId: 'string',
      ruleConfig: { 'type': 'array', 'itemType': QuerySchedruleOnDemandResponseRuleConfig },
      ruleStatus: { 'type': 'array', 'itemType': QuerySchedruleOnDemandResponseRuleStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSchedruleOnDemandRequest extends $tea.Model {
  instanceId: string;
  ruleName: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ruleName: 'RuleName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ruleName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSchedruleOnDemandResponse extends $tea.Model {
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

export class ConfigSchedruleOnDemandRequest extends $tea.Model {
  instanceId: string;
  ruleName: string;
  ruleConditionMbps: string;
  ruleConditionKpps: string;
  ruleConditionCnt: string;
  ruleAction: string;
  ruleSwitch: string;
  ruleUndoMode: string;
  ruleUndoBeginTime: string;
  ruleUndoEndTime?: string;
  timeZone: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ruleName: 'RuleName',
      ruleConditionMbps: 'RuleConditionMbps',
      ruleConditionKpps: 'RuleConditionKpps',
      ruleConditionCnt: 'RuleConditionCnt',
      ruleAction: 'RuleAction',
      ruleSwitch: 'RuleSwitch',
      ruleUndoMode: 'RuleUndoMode',
      ruleUndoBeginTime: 'RuleUndoBeginTime',
      ruleUndoEndTime: 'RuleUndoEndTime',
      timeZone: 'TimeZone',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ruleName: 'string',
      ruleConditionMbps: 'string',
      ruleConditionKpps: 'string',
      ruleConditionCnt: 'string',
      ruleAction: 'string',
      ruleSwitch: 'string',
      ruleUndoMode: 'string',
      ruleUndoBeginTime: 'string',
      ruleUndoEndTime: 'string',
      timeZone: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigSchedruleOnDemandResponse extends $tea.Model {
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

export class CreateSchedruleOnDemandRequest extends $tea.Model {
  instanceId: string;
  ruleName: string;
  ruleConditionMbps: string;
  ruleConditionKpps: string;
  ruleConditionCnt: string;
  ruleAction: string;
  ruleSwitch: string;
  ruleUndoMode: string;
  ruleUndoBeginTime: string;
  ruleUndoEndTime?: string;
  timeZone: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ruleName: 'RuleName',
      ruleConditionMbps: 'RuleConditionMbps',
      ruleConditionKpps: 'RuleConditionKpps',
      ruleConditionCnt: 'RuleConditionCnt',
      ruleAction: 'RuleAction',
      ruleSwitch: 'RuleSwitch',
      ruleUndoMode: 'RuleUndoMode',
      ruleUndoBeginTime: 'RuleUndoBeginTime',
      ruleUndoEndTime: 'RuleUndoEndTime',
      timeZone: 'TimeZone',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ruleName: 'string',
      ruleConditionMbps: 'string',
      ruleConditionKpps: 'string',
      ruleConditionCnt: 'string',
      ruleAction: 'string',
      ruleSwitch: 'string',
      ruleUndoMode: 'string',
      ruleUndoBeginTime: 'string',
      ruleUndoEndTime: 'string',
      timeZone: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchedruleOnDemandResponse extends $tea.Model {
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

export class DescribeOnDemandDdosEventRequest extends $tea.Model {
  startTime: number;
  endTime: number;
  pageSize: number;
  pageNo: number;
  instanceId: string;
  ip?: string;
  resourceGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
      instanceId: 'InstanceId',
      ip: 'Ip',
      resourceGroupId: 'ResourceGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      endTime: 'number',
      pageSize: 'number',
      pageNo: 'number',
      instanceId: 'string',
      ip: 'string',
      resourceGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOnDemandDdosEventResponse extends $tea.Model {
  requestId: string;
  total: number;
  events: DescribeOnDemandDdosEventResponseEvents[];
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
      events: { 'type': 'array', 'itemType': DescribeOnDemandDdosEventResponseEvents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $tea.Model {
  regionId: string;
  resourceType: string;
  pageSize?: number;
  currentPage?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      pageSize: 'number',
      currentPage: 'number',
      resourceGroupId: 'string',
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

export class ListTagResourcesRequest extends $tea.Model {
  resourceGroupId?: string;
  regionId: string;
  resourceType: string;
  resourceId?: string[];
  tag?: ListTagResourcesRequestTag[];
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      regionId: 'string',
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

export class UntagResourcesRequest extends $tea.Model {
  resourceGroupId?: string;
  regionId: string;
  resourceType: string;
  resourceId: string[];
  tagKey?: string[];
  all?: boolean;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
      all: 'All',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      regionId: 'string',
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
  resourceGroupId?: string;
  regionId: string;
  resourceType: string;
  resourceId: string[];
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      regionId: 'string',
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

export class DescribeExcpetionCountRequest extends $tea.Model {
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

export class DescribeExcpetionCountResponse extends $tea.Model {
  requestId: string;
  exceptionIpCount: number;
  expireTimeCount: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      exceptionIpCount: 'ExceptionIpCount',
      expireTimeCount: 'ExpireTimeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      exceptionIpCount: 'number',
      expireTimeCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackIpListRequest extends $tea.Model {
  pageNo: number;
  pageSize: number;
  instanceId: string;
  ip?: string;
  productName?: string;
  resourceGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      instanceId: 'InstanceId',
      ip: 'Ip',
      productName: 'ProductName',
      resourceGroupId: 'ResourceGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      instanceId: 'string',
      ip: 'string',
      productName: 'string',
      resourceGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackIpListResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  total: number;
  ipList: DescribePackIpListResponseIpList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      total: 'Total',
      ipList: 'IpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      total: 'number',
      ipList: { 'type': 'array', 'itemType': DescribePackIpListResponseIpList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
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

export class DescribeRegionsResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  regions: DescribeRegionsResponseRegions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseRegions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRemarkRequest extends $tea.Model {
  instanceId: string;
  remark: string;
  resourceGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      remark: 'string',
      resourceGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRemarkResponse extends $tea.Model {
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

export class DescribeTrafficRequest extends $tea.Model {
  instanceId?: string;
  ipnet?: string;
  ip?: string;
  startTime: number;
  endTime?: number;
  interval?: number;
  resourceGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ipnet: 'Ipnet',
      ip: 'Ip',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      resourceGroupId: 'ResourceGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ipnet: 'string',
      ip: 'string',
      startTime: 'number',
      endTime: 'number',
      interval: 'number',
      resourceGroupId: 'string',
      regionId: 'string',
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

export class DescribeResourcePackUsageRequest extends $tea.Model {
  sourceIp?: string;
  endTime: number;
  startTime: number;
  instanceId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      endTime: 'EndTime',
      startTime: 'StartTime',
      instanceId: 'InstanceId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      endTime: 'number',
      startTime: 'number',
      instanceId: 'string',
      resourceGroupId: 'string',
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
  ddosRegionId?: string;
  instanceId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      ddosRegionId: 'DdosRegionId',
      instanceId: 'InstanceId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      ddosRegionId: 'string',
      instanceId: 'string',
      resourceGroupId: 'string',
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
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      pageSize: 'number',
      currentPage: 'number',
      resourceGroupId: 'string',
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

export class DescribePackPaidTrafficRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  currentPage: number;
  pageSize: number;
  startTime: number;
  endTime: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      endTime: 'EndTime',
      resourceGroupId: 'ResourceGroupId',
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
      resourceGroupId: 'string',
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

export class DescribeOpEntitiesRequest extends $tea.Model {
  currentPage: number;
  pageSize: number;
  startTime: number;
  endTime: number;
  orderBy?: string;
  orderDir?: string;
  instanceId?: string;
  resourceGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      endTime: 'EndTime',
      orderBy: 'OrderBy',
      orderDir: 'OrderDir',
      instanceId: 'InstanceId',
      resourceGroupId: 'ResourceGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      startTime: 'number',
      endTime: 'number',
      orderBy: 'string',
      orderDir: 'string',
      instanceId: 'string',
      resourceGroupId: 'string',
      regionId: 'string',
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

export class DescribeInstanceSpecsRequest extends $tea.Model {
  instanceIdList: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIdList: 'InstanceIdList',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdList: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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

export class DescribeInstanceListRequest extends $tea.Model {
  resourceGroupId?: string;
  instanceIdList?: string;
  remark?: string;
  pageNo: number;
  pageSize: number;
  ipVersion?: string;
  instanceType?: string;
  ip?: string;
  orderby?: string;
  orderdire?: string;
  regionId?: string;
  tag?: DescribeInstanceListRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      instanceIdList: 'InstanceIdList',
      remark: 'Remark',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      ipVersion: 'IpVersion',
      instanceType: 'InstanceType',
      ip: 'Ip',
      orderby: 'Orderby',
      orderdire: 'Orderdire',
      regionId: 'RegionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      instanceIdList: 'string',
      remark: 'string',
      pageNo: 'number',
      pageSize: 'number',
      ipVersion: 'string',
      instanceType: 'string',
      ip: 'string',
      orderby: 'string',
      orderdire: 'string',
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeInstanceListRequestTag },
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

export class DescribeDdosEventRequest extends $tea.Model {
  startTime: number;
  endTime: number;
  pageSize: number;
  pageNo: number;
  instanceId: string;
  ip?: string;
  resourceGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
      instanceId: 'InstanceId',
      ip: 'Ip',
      resourceGroupId: 'ResourceGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      endTime: 'number',
      pageSize: 'number',
      pageNo: 'number',
      instanceId: 'string',
      ip: 'string',
      resourceGroupId: 'string',
      regionId: 'string',
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

export class DeleteIpRequest extends $tea.Model {
  ipList: string;
  instanceId: string;
  resourceGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ipList: 'IpList',
      instanceId: 'InstanceId',
      resourceGroupId: 'ResourceGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipList: 'string',
      instanceId: 'string',
      resourceGroupId: 'string',
      regionId: 'string',
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

export class DeleteBlackholeRequest extends $tea.Model {
  ip: string;
  instanceId: string;
  resourceGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      instanceId: 'InstanceId',
      resourceGroupId: 'ResourceGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      instanceId: 'string',
      resourceGroupId: 'string',
      regionId: 'string',
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

export class AddIpRequest extends $tea.Model {
  ipList: string;
  instanceId: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ipList: 'IpList',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipList: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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

export class DescribeOnDemandInstanceStatusResponseInstances extends $tea.Model {
  userId: string;
  net: string;
  instanceId: string;
  registedAs: string;
  desc: string;
  declared: string;
  mode: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      net: 'Net',
      instanceId: 'InstanceId',
      registedAs: 'RegistedAs',
      desc: 'Desc',
      declared: 'Declared',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      net: 'string',
      instanceId: 'string',
      registedAs: 'string',
      desc: 'string',
      declared: 'string',
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySchedruleOnDemandResponseRuleConfig extends $tea.Model {
  ruleName: string;
  ruleConditionCnt: string;
  ruleUndoBeginTime: string;
  ruleUndoMode: string;
  ruleUndoEndTime: string;
  ruleConditionMbps: string;
  ruleConditionKpps: string;
  ruleSwitch: string;
  ruleAction: string;
  timeZone: string;
  static names(): { [key: string]: string } {
    return {
      ruleName: 'RuleName',
      ruleConditionCnt: 'RuleConditionCnt',
      ruleUndoBeginTime: 'RuleUndoBeginTime',
      ruleUndoMode: 'RuleUndoMode',
      ruleUndoEndTime: 'RuleUndoEndTime',
      ruleConditionMbps: 'RuleConditionMbps',
      ruleConditionKpps: 'RuleConditionKpps',
      ruleSwitch: 'RuleSwitch',
      ruleAction: 'RuleAction',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleName: 'string',
      ruleConditionCnt: 'string',
      ruleUndoBeginTime: 'string',
      ruleUndoMode: 'string',
      ruleUndoEndTime: 'string',
      ruleConditionMbps: 'string',
      ruleConditionKpps: 'string',
      ruleSwitch: 'string',
      ruleAction: 'string',
      timeZone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySchedruleOnDemandResponseRuleStatus extends $tea.Model {
  net: string;
  ruleSchedStatus: string;
  static names(): { [key: string]: string } {
    return {
      net: 'Net',
      ruleSchedStatus: 'RuleSchedStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      net: 'string',
      ruleSchedStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOnDemandDdosEventResponseEvents extends $tea.Model {
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

export class DescribePackIpListResponseIpList extends $tea.Model {
  ip: string;
  product: string;
  status: string;
  remark: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      product: 'Product',
      status: 'Status',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      product: 'string',
      status: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseRegions extends $tea.Model {
  regionEnName: string;
  regionName: string;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      regionEnName: 'RegionEnName',
      regionName: 'RegionName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionEnName: 'string',
      regionName: 'string',
      regionId: 'string',
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
  attackBps: number;
  attackPps: number;
  time: number;
  static names(): { [key: string]: string } {
    return {
      pps: 'Pps',
      flowType: 'FlowType',
      kbps: 'Kbps',
      name: 'Name',
      attackBps: 'AttackBps',
      attackPps: 'AttackPps',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pps: 'number',
      flowType: 'string',
      kbps: 'number',
      name: 'string',
      attackBps: 'number',
      attackPps: 'number',
      time: 'number',
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

export class DescribeInstanceSpecsResponseInstanceSpecsPackConfig extends $tea.Model {
  packAdvThre: number;
  ipAdvanceThre: number;
  ipBasicThre: number;
  packBasicThre: number;
  ipSpec: number;
  bindIpCount: number;
  static names(): { [key: string]: string } {
    return {
      packAdvThre: 'PackAdvThre',
      ipAdvanceThre: 'IpAdvanceThre',
      ipBasicThre: 'IpBasicThre',
      packBasicThre: 'PackBasicThre',
      ipSpec: 'IpSpec',
      bindIpCount: 'BindIpCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packAdvThre: 'number',
      ipAdvanceThre: 'number',
      ipBasicThre: 'number',
      packBasicThre: 'number',
      ipSpec: 'number',
      bindIpCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsResponseInstanceSpecs extends $tea.Model {
  region: string;
  availableDeleteBlackholeCount: string;
  instanceId: string;
  packConfig: DescribeInstanceSpecsResponseInstanceSpecsPackConfig;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      availableDeleteBlackholeCount: 'AvailableDeleteBlackholeCount',
      instanceId: 'InstanceId',
      packConfig: 'PackConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      availableDeleteBlackholeCount: 'string',
      instanceId: 'string',
      packConfig: DescribeInstanceSpecsResponseInstanceSpecsPackConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceListRequestTag extends $tea.Model {
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

export class DescribeInstanceListResponseInstanceList extends $tea.Model {
  expireTime: number;
  instanceId: string;
  product: string;
  remark: string;
  status: string;
  ipType: string;
  autoRenewal: boolean;
  blackholdingCount: string;
  gmtCreate: number;
  instanceType: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      product: 'Product',
      remark: 'Remark',
      status: 'Status',
      ipType: 'IpType',
      autoRenewal: 'AutoRenewal',
      blackholdingCount: 'BlackholdingCount',
      gmtCreate: 'GmtCreate',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      instanceId: 'string',
      product: 'string',
      remark: 'string',
      status: 'string',
      ipType: 'string',
      autoRenewal: 'boolean',
      blackholdingCount: 'string',
      gmtCreate: 'number',
      instanceType: 'string',
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


  async describeOnDemandInstanceStatusWithOptions(request: DescribeOnDemandInstanceStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOnDemandInstanceStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeOnDemandInstanceStatusResponse>(await this.doRequest("DescribeOnDemandInstanceStatus", "HTTPS", "POST", "2018-07-20", "AK", null, $tea.toMap(request), runtime), new DescribeOnDemandInstanceStatusResponse({}));
  }

  async describeOnDemandInstanceStatus(request: DescribeOnDemandInstanceStatusRequest): Promise<DescribeOnDemandInstanceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOnDemandInstanceStatusWithOptions(request, runtime);
  }

  async setInstanceModeOnDemandWithOptions(request: SetInstanceModeOnDemandRequest, runtime: $Util.RuntimeOptions): Promise<SetInstanceModeOnDemandResponse> {
    Util.validateModel(request);
    return $tea.cast<SetInstanceModeOnDemandResponse>(await this.doRequest("SetInstanceModeOnDemand", "HTTPS", "POST", "2018-07-20", "AK", null, $tea.toMap(request), runtime), new SetInstanceModeOnDemandResponse({}));
  }

  async setInstanceModeOnDemand(request: SetInstanceModeOnDemandRequest): Promise<SetInstanceModeOnDemandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setInstanceModeOnDemandWithOptions(request, runtime);
  }

  async querySchedruleOnDemandWithOptions(request: QuerySchedruleOnDemandRequest, runtime: $Util.RuntimeOptions): Promise<QuerySchedruleOnDemandResponse> {
    Util.validateModel(request);
    return $tea.cast<QuerySchedruleOnDemandResponse>(await this.doRequest("QuerySchedruleOnDemand", "HTTPS", "POST", "2018-07-20", "AK", null, $tea.toMap(request), runtime), new QuerySchedruleOnDemandResponse({}));
  }

  async querySchedruleOnDemand(request: QuerySchedruleOnDemandRequest): Promise<QuerySchedruleOnDemandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySchedruleOnDemandWithOptions(request, runtime);
  }

  async deleteSchedruleOnDemandWithOptions(request: DeleteSchedruleOnDemandRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSchedruleOnDemandResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteSchedruleOnDemandResponse>(await this.doRequest("DeleteSchedruleOnDemand", "HTTPS", "POST", "2018-07-20", "AK", null, $tea.toMap(request), runtime), new DeleteSchedruleOnDemandResponse({}));
  }

  async deleteSchedruleOnDemand(request: DeleteSchedruleOnDemandRequest): Promise<DeleteSchedruleOnDemandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSchedruleOnDemandWithOptions(request, runtime);
  }

  async configSchedruleOnDemandWithOptions(request: ConfigSchedruleOnDemandRequest, runtime: $Util.RuntimeOptions): Promise<ConfigSchedruleOnDemandResponse> {
    Util.validateModel(request);
    return $tea.cast<ConfigSchedruleOnDemandResponse>(await this.doRequest("ConfigSchedruleOnDemand", "HTTPS", "POST", "2018-07-20", "AK", null, $tea.toMap(request), runtime), new ConfigSchedruleOnDemandResponse({}));
  }

  async configSchedruleOnDemand(request: ConfigSchedruleOnDemandRequest): Promise<ConfigSchedruleOnDemandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configSchedruleOnDemandWithOptions(request, runtime);
  }

  async createSchedruleOnDemandWithOptions(request: CreateSchedruleOnDemandRequest, runtime: $Util.RuntimeOptions): Promise<CreateSchedruleOnDemandResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateSchedruleOnDemandResponse>(await this.doRequest("CreateSchedruleOnDemand", "HTTPS", "POST", "2018-07-20", "AK", null, $tea.toMap(request), runtime), new CreateSchedruleOnDemandResponse({}));
  }

  async createSchedruleOnDemand(request: CreateSchedruleOnDemandRequest): Promise<CreateSchedruleOnDemandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSchedruleOnDemandWithOptions(request, runtime);
  }

  async describeOnDemandDdosEventWithOptions(request: DescribeOnDemandDdosEventRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOnDemandDdosEventResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeOnDemandDdosEventResponse>(await this.doRequest("DescribeOnDemandDdosEvent", "HTTPS", "POST", "2018-07-20", "AK", null, $tea.toMap(request), runtime), new DescribeOnDemandDdosEventResponse({}));
  }

  async describeOnDemandDdosEvent(request: DescribeOnDemandDdosEventRequest): Promise<DescribeOnDemandDdosEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOnDemandDdosEventWithOptions(request, runtime);
  }

  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListTagKeysResponse> {
    Util.validateModel(request);
    return $tea.cast<ListTagKeysResponse>(await this.doRequest("ListTagKeys", "HTTPS", "POST", "2018-07-20", "AK", null, $tea.toMap(request), runtime), new ListTagKeysResponse({}));
  }

  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListTagResourcesResponse>(await this.doRequest("ListTagResources", "HTTPS", "POST", "2018-07-20", "AK", null, $tea.toMap(request), runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    return $tea.cast<UntagResourcesResponse>(await this.doRequest("UntagResources", "HTTPS", "POST", "2018-07-20", "AK", null, $tea.toMap(request), runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    return $tea.cast<TagResourcesResponse>(await this.doRequest("TagResources", "HTTPS", "POST", "2018-07-20", "AK", null, $tea.toMap(request), runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async describeExcpetionCountWithOptions(request: DescribeExcpetionCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExcpetionCountResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeExcpetionCountResponse>(await this.doRequest("DescribeExcpetionCount", "HTTPS", "POST", "2018-07-20", "AK", null, $tea.toMap(request), runtime), new DescribeExcpetionCountResponse({}));
  }

  async describeExcpetionCount(request: DescribeExcpetionCountRequest): Promise<DescribeExcpetionCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExcpetionCountWithOptions(request, runtime);
  }

  async describePackIpListWithOptions(request: DescribePackIpListRequest, runtime: $Util.RuntimeOptions): Promise<DescribePackIpListResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribePackIpListResponse>(await this.doRequest("DescribePackIpList", "HTTPS", "POST", "2018-07-20", "AK", null, $tea.toMap(request), runtime), new DescribePackIpListResponse({}));
  }

  async describePackIpList(request: DescribePackIpListRequest): Promise<DescribePackIpListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePackIpListWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeRegionsResponse>(await this.doRequest("DescribeRegions", "HTTPS", "POST", "2018-07-20", "AK", null, $tea.toMap(request), runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async modifyRemarkWithOptions(request: ModifyRemarkRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRemarkResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyRemarkResponse>(await this.doRequest("ModifyRemark", "HTTPS", "POST", "2018-07-20", "AK", null, $tea.toMap(request), runtime), new ModifyRemarkResponse({}));
  }

  async modifyRemark(request: ModifyRemarkRequest): Promise<ModifyRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRemarkWithOptions(request, runtime);
  }

  async describeTrafficWithOptions(request: DescribeTrafficRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTrafficResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeTrafficResponse>(await this.doRequest("DescribeTraffic", "HTTPS", "POST", "2018-07-20", "AK", null, $tea.toMap(request), runtime), new DescribeTrafficResponse({}));
  }

  async describeTraffic(request: DescribeTrafficRequest): Promise<DescribeTrafficResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTrafficWithOptions(request, runtime);
  }

  async describeResourcePackUsageWithOptions(request: DescribeResourcePackUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourcePackUsageResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeResourcePackUsageResponse>(await this.doRequest("DescribeResourcePackUsage", "HTTPS", "POST", "2018-07-20", "AK", null, $tea.toMap(request), runtime), new DescribeResourcePackUsageResponse({}));
  }

  async describeResourcePackUsage(request: DescribeResourcePackUsageRequest): Promise<DescribeResourcePackUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourcePackUsageWithOptions(request, runtime);
  }

  async describeResourcePackStatisticsWithOptions(request: DescribeResourcePackStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourcePackStatisticsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeResourcePackStatisticsResponse>(await this.doRequest("DescribeResourcePackStatistics", "HTTPS", "POST", "2018-07-20", "AK", null, $tea.toMap(request), runtime), new DescribeResourcePackStatisticsResponse({}));
  }

  async describeResourcePackStatistics(request: DescribeResourcePackStatisticsRequest): Promise<DescribeResourcePackStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourcePackStatisticsWithOptions(request, runtime);
  }

  async describeResourcePackInstancesWithOptions(request: DescribeResourcePackInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourcePackInstancesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeResourcePackInstancesResponse>(await this.doRequest("DescribeResourcePackInstances", "HTTPS", "POST", "2018-07-20", "AK", null, $tea.toMap(request), runtime), new DescribeResourcePackInstancesResponse({}));
  }

  async describeResourcePackInstances(request: DescribeResourcePackInstancesRequest): Promise<DescribeResourcePackInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourcePackInstancesWithOptions(request, runtime);
  }

  async describePackPaidTrafficWithOptions(request: DescribePackPaidTrafficRequest, runtime: $Util.RuntimeOptions): Promise<DescribePackPaidTrafficResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribePackPaidTrafficResponse>(await this.doRequest("DescribePackPaidTraffic", "HTTPS", "POST", "2018-07-20", "AK", null, $tea.toMap(request), runtime), new DescribePackPaidTrafficResponse({}));
  }

  async describePackPaidTraffic(request: DescribePackPaidTrafficRequest): Promise<DescribePackPaidTrafficResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePackPaidTrafficWithOptions(request, runtime);
  }

  async describeOpEntitiesWithOptions(request: DescribeOpEntitiesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOpEntitiesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeOpEntitiesResponse>(await this.doRequest("DescribeOpEntities", "HTTPS", "POST", "2018-07-20", "AK", null, $tea.toMap(request), runtime), new DescribeOpEntitiesResponse({}));
  }

  async describeOpEntities(request: DescribeOpEntitiesRequest): Promise<DescribeOpEntitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOpEntitiesWithOptions(request, runtime);
  }

  async describeInstanceSpecsWithOptions(request: DescribeInstanceSpecsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceSpecsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInstanceSpecsResponse>(await this.doRequest("DescribeInstanceSpecs", "HTTPS", "POST", "2018-07-20", "AK", null, $tea.toMap(request), runtime), new DescribeInstanceSpecsResponse({}));
  }

  async describeInstanceSpecs(request: DescribeInstanceSpecsRequest): Promise<DescribeInstanceSpecsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceSpecsWithOptions(request, runtime);
  }

  async describeInstanceListWithOptions(request: DescribeInstanceListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceListResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInstanceListResponse>(await this.doRequest("DescribeInstanceList", "HTTPS", "POST", "2018-07-20", "AK", null, $tea.toMap(request), runtime), new DescribeInstanceListResponse({}));
  }

  async describeInstanceList(request: DescribeInstanceListRequest): Promise<DescribeInstanceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceListWithOptions(request, runtime);
  }

  async describeDdosEventWithOptions(request: DescribeDdosEventRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDdosEventResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDdosEventResponse>(await this.doRequest("DescribeDdosEvent", "HTTPS", "POST", "2018-07-20", "AK", null, $tea.toMap(request), runtime), new DescribeDdosEventResponse({}));
  }

  async describeDdosEvent(request: DescribeDdosEventRequest): Promise<DescribeDdosEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDdosEventWithOptions(request, runtime);
  }

  async deleteIpWithOptions(request: DeleteIpRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIpResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteIpResponse>(await this.doRequest("DeleteIp", "HTTPS", "POST", "2018-07-20", "AK", null, $tea.toMap(request), runtime), new DeleteIpResponse({}));
  }

  async deleteIp(request: DeleteIpRequest): Promise<DeleteIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIpWithOptions(request, runtime);
  }

  async deleteBlackholeWithOptions(request: DeleteBlackholeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBlackholeResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteBlackholeResponse>(await this.doRequest("DeleteBlackhole", "HTTPS", "POST", "2018-07-20", "AK", null, $tea.toMap(request), runtime), new DeleteBlackholeResponse({}));
  }

  async deleteBlackhole(request: DeleteBlackholeRequest): Promise<DeleteBlackholeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBlackholeWithOptions(request, runtime);
  }

  async checkGrantWithOptions(request: CheckGrantRequest, runtime: $Util.RuntimeOptions): Promise<CheckGrantResponse> {
    Util.validateModel(request);
    return $tea.cast<CheckGrantResponse>(await this.doRequest("CheckGrant", "HTTPS", "GET", "2018-07-20", "AK", $tea.toMap(request), null, runtime), new CheckGrantResponse({}));
  }

  async checkGrant(request: CheckGrantRequest): Promise<CheckGrantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkGrantWithOptions(request, runtime);
  }

  async addIpWithOptions(request: AddIpRequest, runtime: $Util.RuntimeOptions): Promise<AddIpResponse> {
    Util.validateModel(request);
    return $tea.cast<AddIpResponse>(await this.doRequest("AddIp", "HTTPS", "POST", "2018-07-20", "AK", null, $tea.toMap(request), runtime), new AddIpResponse({}));
  }

  async addIp(request: AddIpRequest): Promise<AddIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addIpWithOptions(request, runtime);
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
