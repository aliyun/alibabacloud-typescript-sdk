// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddIpRequest extends $tea.Model {
  sourceIp?: string;
  ipList?: string;
  instanceId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      ipList: 'IpList',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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

export class AddIpResponseBody extends $tea.Model {
  requestId?: string;
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

export class AddIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckGrantRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckGrantResponseBody extends $tea.Model {
  status?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckGrantResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckGrantResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckGrantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigSchedruleOnDemandRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  ruleName?: string;
  ruleConditionMbps?: string;
  ruleConditionKpps?: string;
  ruleConditionCnt?: string;
  ruleAction?: string;
  ruleSwitch?: string;
  ruleUndoMode?: string;
  ruleUndoBeginTime?: string;
  ruleUndoEndTime?: string;
  timeZone?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
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
      sourceIp: 'string',
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

export class ConfigSchedruleOnDemandResponseBody extends $tea.Model {
  requestId?: string;
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

export class ConfigSchedruleOnDemandResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigSchedruleOnDemandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigSchedruleOnDemandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchedruleOnDemandRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  ruleName?: string;
  ruleConditionMbps?: string;
  ruleConditionKpps?: string;
  ruleConditionCnt?: string;
  ruleAction?: string;
  ruleSwitch?: string;
  ruleUndoMode?: string;
  ruleUndoBeginTime?: string;
  ruleUndoEndTime?: string;
  timeZone?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
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
      sourceIp: 'string',
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

export class CreateSchedruleOnDemandResponseBody extends $tea.Model {
  requestId?: string;
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

export class CreateSchedruleOnDemandResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSchedruleOnDemandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSchedruleOnDemandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBlackholeRequest extends $tea.Model {
  sourceIp?: string;
  ip?: string;
  instanceId?: string;
  resourceGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      ip: 'Ip',
      instanceId: 'InstanceId',
      resourceGroupId: 'ResourceGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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

export class DeleteBlackholeResponseBody extends $tea.Model {
  requestId?: string;
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

export class DeleteBlackholeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteBlackholeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteBlackholeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpRequest extends $tea.Model {
  sourceIp?: string;
  ipList?: string;
  instanceId?: string;
  resourceGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      ipList: 'IpList',
      instanceId: 'InstanceId',
      resourceGroupId: 'ResourceGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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

export class DeleteIpResponseBody extends $tea.Model {
  requestId?: string;
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

export class DeleteIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSchedruleOnDemandRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  ruleName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      ruleName: 'RuleName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      ruleName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSchedruleOnDemandResponseBody extends $tea.Model {
  requestId?: string;
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

export class DeleteSchedruleOnDemandResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSchedruleOnDemandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSchedruleOnDemandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosEventRequest extends $tea.Model {
  sourceIp?: string;
  startTime?: number;
  endTime?: number;
  pageSize?: number;
  pageNo?: number;
  instanceId?: string;
  ip?: string;
  resourceGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
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
      sourceIp: 'string',
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

export class DescribeDdosEventResponseBody extends $tea.Model {
  requestId?: string;
  events?: DescribeDdosEventResponseBodyEvents[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      events: 'Events',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      events: { 'type': 'array', 'itemType': DescribeDdosEventResponseBodyEvents },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosEventResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDdosEventResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDdosEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExcpetionCountRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExcpetionCountResponseBody extends $tea.Model {
  requestId?: string;
  exceptionIpCount?: number;
  expireTimeCount?: number;
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

export class DescribeExcpetionCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeExcpetionCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeExcpetionCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceListRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  instanceIdList?: string;
  remark?: string;
  pageNo?: number;
  pageSize?: number;
  ipVersion?: string;
  instanceType?: string;
  ip?: string;
  orderby?: string;
  orderdire?: string;
  regionId?: string;
  tag?: DescribeInstanceListRequestTag[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
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
      sourceIp: 'string',
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

export class DescribeInstanceListResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  instanceList?: DescribeInstanceListResponseBodyInstanceList[];
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
      instanceList: { 'type': 'array', 'itemType': DescribeInstanceListResponseBodyInstanceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  instanceIdList?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      instanceIdList: 'InstanceIdList',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      instanceIdList: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsResponseBody extends $tea.Model {
  requestId?: string;
  instanceSpecs?: DescribeInstanceSpecsResponseBodyInstanceSpecs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceSpecs: 'InstanceSpecs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceSpecs: { 'type': 'array', 'itemType': DescribeInstanceSpecsResponseBodyInstanceSpecs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceSpecsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceSpecsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOnDemandDdosEventRequest extends $tea.Model {
  sourceIp?: string;
  startTime?: number;
  endTime?: number;
  pageSize?: number;
  pageNo?: number;
  instanceId?: string;
  ip?: string;
  resourceGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
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
      sourceIp: 'string',
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

export class DescribeOnDemandDdosEventResponseBody extends $tea.Model {
  requestId?: string;
  events?: DescribeOnDemandDdosEventResponseBodyEvents[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      events: 'Events',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      events: { 'type': 'array', 'itemType': DescribeOnDemandDdosEventResponseBodyEvents },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOnDemandDdosEventResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeOnDemandDdosEventResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeOnDemandDdosEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOnDemandInstanceStatusRequest extends $tea.Model {
  sourceIp?: string;
  regionId?: string;
  instanceIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      regionId: 'RegionId',
      instanceIdList: 'InstanceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      regionId: 'string',
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOnDemandInstanceStatusResponseBody extends $tea.Model {
  instances?: DescribeOnDemandInstanceStatusResponseBodyInstances[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeOnDemandInstanceStatusResponseBodyInstances },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOnDemandInstanceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeOnDemandInstanceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeOnDemandInstanceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  currentPage?: number;
  pageSize?: number;
  startTime?: number;
  endTime?: number;
  orderBy?: string;
  orderDir?: string;
  instanceId?: string;
  resourceGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
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
      sourceIp: 'string',
      lang: 'string',
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

export class DescribeOpEntitiesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  opEntities?: DescribeOpEntitiesResponseBodyOpEntities[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      opEntities: 'OpEntities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      opEntities: { 'type': 'array', 'itemType': DescribeOpEntitiesResponseBodyOpEntities },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeOpEntitiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeOpEntitiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackIpListRequest extends $tea.Model {
  sourceIp?: string;
  pageNo?: number;
  pageSize?: number;
  instanceId?: string;
  ip?: string;
  productName?: string;
  resourceGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
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
      sourceIp: 'string',
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

export class DescribePackIpListResponseBody extends $tea.Model {
  requestId?: string;
  ipList?: DescribePackIpListResponseBodyIpList[];
  total?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ipList: 'IpList',
      total: 'Total',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ipList: { 'type': 'array', 'itemType': DescribePackIpListResponseBodyIpList },
      total: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackIpListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePackIpListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePackIpListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackPaidTrafficRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  currentPage?: number;
  pageSize?: number;
  startTime?: number;
  endTime?: number;
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

export class DescribePackPaidTrafficResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  packPaidTraffics?: DescribePackPaidTrafficResponseBodyPackPaidTraffics[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      packPaidTraffics: 'PackPaidTraffics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      packPaidTraffics: { 'type': 'array', 'itemType': DescribePackPaidTrafficResponseBodyPackPaidTraffics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackPaidTrafficResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePackPaidTrafficResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePackPaidTrafficResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeRegionsResponseBodyRegions[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackInstancesRequest extends $tea.Model {
  sourceIp?: string;
  pageSize?: number;
  currentPage?: number;
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

export class DescribeResourcePackInstancesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  resourcePacks?: DescribeResourcePackInstancesResponseBodyResourcePacks[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      resourcePacks: 'ResourcePacks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      resourcePacks: { 'type': 'array', 'itemType': DescribeResourcePackInstancesResponseBodyResourcePacks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeResourcePackInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeResourcePackInstancesResponseBody,
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

export class DescribeResourcePackStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  totalInitCapacity?: number;
  totalCurrCapacity?: number;
  availablePackNum?: number;
  totalUsedCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalInitCapacity: 'TotalInitCapacity',
      totalCurrCapacity: 'TotalCurrCapacity',
      availablePackNum: 'AvailablePackNum',
      totalUsedCapacity: 'TotalUsedCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalInitCapacity: 'number',
      totalCurrCapacity: 'number',
      availablePackNum: 'number',
      totalUsedCapacity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeResourcePackStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeResourcePackStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackUsageRequest extends $tea.Model {
  sourceIp?: string;
  endTime?: number;
  startTime?: number;
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

export class DescribeResourcePackUsageResponseBody extends $tea.Model {
  endTime?: number;
  requestId?: string;
  packUsages?: DescribeResourcePackUsageResponseBodyPackUsages[];
  startTime?: number;
  interval?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      packUsages: 'PackUsages',
      startTime: 'StartTime',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      requestId: 'string',
      packUsages: { 'type': 'array', 'itemType': DescribeResourcePackUsageResponseBodyPackUsages },
      startTime: 'number',
      interval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackUsageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeResourcePackUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeResourcePackUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  ipnet?: string;
  ip?: string;
  startTime?: number;
  endTime?: number;
  interval?: number;
  resourceGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
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
      sourceIp: 'string',
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

export class DescribeTrafficResponseBody extends $tea.Model {
  flowList?: DescribeTrafficResponseBodyFlowList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      flowList: 'FlowList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowList: { 'type': 'array', 'itemType': DescribeTrafficResponseBodyFlowList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTrafficResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTrafficResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $tea.Model {
  sourceIp?: string;
  regionId?: string;
  tagOwnerUid?: string;
  tagOwnerBid?: string;
  resourceType?: string;
  scope?: string;
  pageSize?: number;
  currentPage?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      regionId: 'RegionId',
      tagOwnerUid: 'TagOwnerUid',
      tagOwnerBid: 'TagOwnerBid',
      resourceType: 'ResourceType',
      scope: 'Scope',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      regionId: 'string',
      tagOwnerUid: 'string',
      tagOwnerBid: 'string',
      resourceType: 'string',
      scope: 'string',
      pageSize: 'number',
      currentPage: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  currentPage?: number;
  tagKeys?: ListTagKeysResponseBodyTagKeys[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      currentPage: 'number',
      tagKeys: { 'type': 'array', 'itemType': ListTagKeysResponseBodyTagKeys },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  regionId?: string;
  tagOwnerUid?: string;
  tagOwnerBid?: string;
  resourceType?: string;
  scope?: string;
  nextToken?: string;
  resourceId?: string[];
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      regionId: 'RegionId',
      tagOwnerUid: 'TagOwnerUid',
      tagOwnerBid: 'TagOwnerBid',
      resourceType: 'ResourceType',
      scope: 'Scope',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      regionId: 'string',
      tagOwnerUid: 'string',
      tagOwnerBid: 'string',
      resourceType: 'string',
      scope: 'string',
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRemarkRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  instanceId?: string;
  remark?: string;
  resourceGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
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

export class ModifyRemarkResponseBody extends $tea.Model {
  requestId?: string;
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

export class ModifyRemarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyRemarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyRemarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySchedruleOnDemandRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySchedruleOnDemandResponseBody extends $tea.Model {
  requestId?: string;
  instanceId?: string;
  userId?: string;
  ruleStatus?: QuerySchedruleOnDemandResponseBodyRuleStatus[];
  ruleConfig?: QuerySchedruleOnDemandResponseBodyRuleConfig[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      userId: 'UserId',
      ruleStatus: 'RuleStatus',
      ruleConfig: 'RuleConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceId: 'string',
      userId: 'string',
      ruleStatus: { 'type': 'array', 'itemType': QuerySchedruleOnDemandResponseBodyRuleStatus },
      ruleConfig: { 'type': 'array', 'itemType': QuerySchedruleOnDemandResponseBodyRuleConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySchedruleOnDemandResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QuerySchedruleOnDemandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QuerySchedruleOnDemandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInstanceModeOnDemandRequest extends $tea.Model {
  sourceIp?: string;
  mode?: string;
  regionId?: string;
  instanceIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      mode: 'Mode',
      regionId: 'RegionId',
      instanceIdList: 'InstanceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      mode: 'string',
      regionId: 'string',
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInstanceModeOnDemandResponseBody extends $tea.Model {
  requestId?: string;
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

export class SetInstanceModeOnDemandResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetInstanceModeOnDemandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetInstanceModeOnDemandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  regionId?: string;
  tagOwnerUid?: string;
  tagOwnerBid?: string;
  resourceType?: string;
  scope?: string;
  resourceId?: string[];
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      regionId: 'RegionId',
      tagOwnerUid: 'TagOwnerUid',
      tagOwnerBid: 'TagOwnerBid',
      resourceType: 'ResourceType',
      scope: 'Scope',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      regionId: 'string',
      tagOwnerUid: 'string',
      tagOwnerBid: 'string',
      resourceType: 'string',
      scope: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  requestId?: string;
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

export class TagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  regionId?: string;
  tagOwnerUid?: string;
  tagOwnerBid?: string;
  resourceType?: string;
  all?: boolean;
  resourceId?: string[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      regionId: 'RegionId',
      tagOwnerUid: 'TagOwnerUid',
      tagOwnerBid: 'TagOwnerBid',
      resourceType: 'ResourceType',
      all: 'All',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      regionId: 'string',
      tagOwnerUid: 'string',
      tagOwnerBid: 'string',
      resourceType: 'string',
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  requestId?: string;
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

export class UntagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosEventResponseBodyEvents extends $tea.Model {
  endTime?: number;
  status?: string;
  startTime?: number;
  mbps?: number;
  ip?: string;
  pps?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      status: 'Status',
      startTime: 'StartTime',
      mbps: 'Mbps',
      ip: 'Ip',
      pps: 'Pps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      status: 'string',
      startTime: 'number',
      mbps: 'number',
      ip: 'string',
      pps: 'number',
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

export class DescribeInstanceListResponseBodyInstanceList extends $tea.Model {
  status?: string;
  ipType?: string;
  autoRenewal?: boolean;
  remark?: string;
  expireTime?: number;
  product?: string;
  gmtCreate?: number;
  instanceId?: string;
  instanceType?: string;
  blackholdingCount?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      ipType: 'IpType',
      autoRenewal: 'AutoRenewal',
      remark: 'Remark',
      expireTime: 'ExpireTime',
      product: 'Product',
      gmtCreate: 'GmtCreate',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      blackholdingCount: 'BlackholdingCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      ipType: 'string',
      autoRenewal: 'boolean',
      remark: 'string',
      expireTime: 'number',
      product: 'string',
      gmtCreate: 'number',
      instanceId: 'string',
      instanceType: 'string',
      blackholdingCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsResponseBodyInstanceSpecsPackConfig extends $tea.Model {
  packBasicThre?: number;
  bindIpCount?: number;
  packAdvThre?: number;
  ipBasicThre?: number;
  ipAdvanceThre?: number;
  ipSpec?: number;
  static names(): { [key: string]: string } {
    return {
      packBasicThre: 'PackBasicThre',
      bindIpCount: 'BindIpCount',
      packAdvThre: 'PackAdvThre',
      ipBasicThre: 'IpBasicThre',
      ipAdvanceThre: 'IpAdvanceThre',
      ipSpec: 'IpSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packBasicThre: 'number',
      bindIpCount: 'number',
      packAdvThre: 'number',
      ipBasicThre: 'number',
      ipAdvanceThre: 'number',
      ipSpec: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsResponseBodyInstanceSpecs extends $tea.Model {
  packConfig?: DescribeInstanceSpecsResponseBodyInstanceSpecsPackConfig;
  region?: string;
  availableDeleteBlackholeCount?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      packConfig: 'PackConfig',
      region: 'Region',
      availableDeleteBlackholeCount: 'AvailableDeleteBlackholeCount',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packConfig: DescribeInstanceSpecsResponseBodyInstanceSpecsPackConfig,
      region: 'string',
      availableDeleteBlackholeCount: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOnDemandDdosEventResponseBodyEvents extends $tea.Model {
  endTime?: number;
  status?: string;
  startTime?: number;
  mbps?: number;
  ip?: string;
  pps?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      status: 'Status',
      startTime: 'StartTime',
      mbps: 'Mbps',
      ip: 'Ip',
      pps: 'Pps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      status: 'string',
      startTime: 'number',
      mbps: 'number',
      ip: 'string',
      pps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOnDemandInstanceStatusResponseBodyInstances extends $tea.Model {
  userId?: string;
  mode?: string;
  instanceId?: string;
  declared?: string;
  registedAs?: string;
  net?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      mode: 'Mode',
      instanceId: 'InstanceId',
      declared: 'Declared',
      registedAs: 'RegistedAs',
      net: 'Net',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      mode: 'string',
      instanceId: 'string',
      declared: 'string',
      registedAs: 'string',
      net: 'string',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesResponseBodyOpEntities extends $tea.Model {
  entityType?: number;
  entityObject?: string;
  opAction?: number;
  gmtCreate?: number;
  opAccount?: string;
  opDesc?: string;
  static names(): { [key: string]: string } {
    return {
      entityType: 'EntityType',
      entityObject: 'EntityObject',
      opAction: 'OpAction',
      gmtCreate: 'GmtCreate',
      opAccount: 'OpAccount',
      opDesc: 'OpDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityType: 'number',
      entityObject: 'string',
      opAction: 'number',
      gmtCreate: 'number',
      opAccount: 'string',
      opDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackIpListResponseBodyIpList extends $tea.Model {
  status?: string;
  remark?: string;
  product?: string;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      remark: 'Remark',
      product: 'Product',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      remark: 'string',
      product: 'string',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackPaidTrafficResponseBodyPackPaidTraffics extends $tea.Model {
  startTime?: number;
  baseBandwidth?: number;
  elasticBandwidth?: number;
  totalCapacity?: number;
  maxAttack?: number;
  instanceId?: string;
  paidCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      baseBandwidth: 'BaseBandwidth',
      elasticBandwidth: 'ElasticBandwidth',
      totalCapacity: 'TotalCapacity',
      maxAttack: 'MaxAttack',
      instanceId: 'InstanceId',
      paidCapacity: 'PaidCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      baseBandwidth: 'number',
      elasticBandwidth: 'number',
      totalCapacity: 'number',
      maxAttack: 'number',
      instanceId: 'string',
      paidCapacity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  regionEnName?: string;
  regionName?: string;
  regionId?: string;
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

export class DescribeResourcePackInstancesResponseBodyResourcePacks extends $tea.Model {
  endTime?: number;
  status?: string;
  startTime?: number;
  resourcePackId?: string;
  currCapacity?: number;
  initCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      status: 'Status',
      startTime: 'StartTime',
      resourcePackId: 'ResourcePackId',
      currCapacity: 'CurrCapacity',
      initCapacity: 'InitCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      status: 'string',
      startTime: 'number',
      resourcePackId: 'string',
      currCapacity: 'number',
      initCapacity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackUsageResponseBodyPackUsages extends $tea.Model {
  time?: number;
  traffic?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      traffic: 'Traffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      traffic: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficResponseBodyFlowList extends $tea.Model {
  time?: number;
  flowType?: string;
  attackPps?: number;
  name?: string;
  pps?: number;
  kbps?: number;
  attackBps?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      flowType: 'FlowType',
      attackPps: 'AttackPps',
      name: 'Name',
      pps: 'Pps',
      kbps: 'Kbps',
      attackBps: 'AttackBps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      flowType: 'string',
      attackPps: 'number',
      name: 'string',
      pps: 'number',
      kbps: 'number',
      attackBps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBodyTagKeys extends $tea.Model {
  tagCount?: number;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagCount: 'TagCount',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagCount: 'number',
      tagKey: 'string',
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

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
  resourceType?: string;
  tagValue?: string;
  resourceId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      tagValue: 'TagValue',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      tagValue: 'string',
      resourceId: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySchedruleOnDemandResponseBodyRuleStatus extends $tea.Model {
  ruleSchedStatus?: string;
  net?: string;
  static names(): { [key: string]: string } {
    return {
      ruleSchedStatus: 'RuleSchedStatus',
      net: 'Net',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleSchedStatus: 'string',
      net: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySchedruleOnDemandResponseBodyRuleConfig extends $tea.Model {
  ruleSwitch?: string;
  ruleConditionMbps?: string;
  timeZone?: string;
  ruleAction?: string;
  ruleConditionKpps?: string;
  ruleUndoMode?: string;
  ruleUndoBeginTime?: string;
  ruleConditionCnt?: string;
  ruleUndoEndTime?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      ruleSwitch: 'RuleSwitch',
      ruleConditionMbps: 'RuleConditionMbps',
      timeZone: 'TimeZone',
      ruleAction: 'RuleAction',
      ruleConditionKpps: 'RuleConditionKpps',
      ruleUndoMode: 'RuleUndoMode',
      ruleUndoBeginTime: 'RuleUndoBeginTime',
      ruleConditionCnt: 'RuleConditionCnt',
      ruleUndoEndTime: 'RuleUndoEndTime',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleSwitch: 'string',
      ruleConditionMbps: 'string',
      timeZone: 'string',
      ruleAction: 'string',
      ruleConditionKpps: 'string',
      ruleUndoMode: 'string',
      ruleUndoBeginTime: 'string',
      ruleConditionCnt: 'string',
      ruleUndoEndTime: 'string',
      ruleName: 'string',
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


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
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


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async addIpWithOptions(request: AddIpRequest, runtime: $Util.RuntimeOptions): Promise<AddIpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddIpResponse>(await this.doRPCRequest("AddIp", "2018-07-20", "HTTPS", "POST", "AK", "json", req, runtime), new AddIpResponse({}));
  }

  async addIp(request: AddIpRequest): Promise<AddIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addIpWithOptions(request, runtime);
  }

  async checkGrantWithOptions(request: CheckGrantRequest, runtime: $Util.RuntimeOptions): Promise<CheckGrantResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<CheckGrantResponse>(await this.doRPCRequest("CheckGrant", "2018-07-20", "HTTPS", "GET", "AK", "json", req, runtime), new CheckGrantResponse({}));
  }

  async checkGrant(request: CheckGrantRequest): Promise<CheckGrantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkGrantWithOptions(request, runtime);
  }

  async configSchedruleOnDemandWithOptions(request: ConfigSchedruleOnDemandRequest, runtime: $Util.RuntimeOptions): Promise<ConfigSchedruleOnDemandResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigSchedruleOnDemandResponse>(await this.doRPCRequest("ConfigSchedruleOnDemand", "2018-07-20", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigSchedruleOnDemandResponse({}));
  }

  async configSchedruleOnDemand(request: ConfigSchedruleOnDemandRequest): Promise<ConfigSchedruleOnDemandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configSchedruleOnDemandWithOptions(request, runtime);
  }

  async createSchedruleOnDemandWithOptions(request: CreateSchedruleOnDemandRequest, runtime: $Util.RuntimeOptions): Promise<CreateSchedruleOnDemandResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSchedruleOnDemandResponse>(await this.doRPCRequest("CreateSchedruleOnDemand", "2018-07-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSchedruleOnDemandResponse({}));
  }

  async createSchedruleOnDemand(request: CreateSchedruleOnDemandRequest): Promise<CreateSchedruleOnDemandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSchedruleOnDemandWithOptions(request, runtime);
  }

  async deleteBlackholeWithOptions(request: DeleteBlackholeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBlackholeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteBlackholeResponse>(await this.doRPCRequest("DeleteBlackhole", "2018-07-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteBlackholeResponse({}));
  }

  async deleteBlackhole(request: DeleteBlackholeRequest): Promise<DeleteBlackholeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBlackholeWithOptions(request, runtime);
  }

  async deleteIpWithOptions(request: DeleteIpRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteIpResponse>(await this.doRPCRequest("DeleteIp", "2018-07-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteIpResponse({}));
  }

  async deleteIp(request: DeleteIpRequest): Promise<DeleteIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIpWithOptions(request, runtime);
  }

  async deleteSchedruleOnDemandWithOptions(request: DeleteSchedruleOnDemandRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSchedruleOnDemandResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSchedruleOnDemandResponse>(await this.doRPCRequest("DeleteSchedruleOnDemand", "2018-07-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSchedruleOnDemandResponse({}));
  }

  async deleteSchedruleOnDemand(request: DeleteSchedruleOnDemandRequest): Promise<DeleteSchedruleOnDemandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSchedruleOnDemandWithOptions(request, runtime);
  }

  async describeDdosEventWithOptions(request: DescribeDdosEventRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDdosEventResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDdosEventResponse>(await this.doRPCRequest("DescribeDdosEvent", "2018-07-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDdosEventResponse({}));
  }

  async describeDdosEvent(request: DescribeDdosEventRequest): Promise<DescribeDdosEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDdosEventWithOptions(request, runtime);
  }

  async describeExcpetionCountWithOptions(request: DescribeExcpetionCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExcpetionCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeExcpetionCountResponse>(await this.doRPCRequest("DescribeExcpetionCount", "2018-07-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeExcpetionCountResponse({}));
  }

  async describeExcpetionCount(request: DescribeExcpetionCountRequest): Promise<DescribeExcpetionCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExcpetionCountWithOptions(request, runtime);
  }

  async describeInstanceListWithOptions(request: DescribeInstanceListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceListResponse>(await this.doRPCRequest("DescribeInstanceList", "2018-07-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceListResponse({}));
  }

  async describeInstanceList(request: DescribeInstanceListRequest): Promise<DescribeInstanceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceListWithOptions(request, runtime);
  }

  async describeInstanceSpecsWithOptions(request: DescribeInstanceSpecsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceSpecsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceSpecsResponse>(await this.doRPCRequest("DescribeInstanceSpecs", "2018-07-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceSpecsResponse({}));
  }

  async describeInstanceSpecs(request: DescribeInstanceSpecsRequest): Promise<DescribeInstanceSpecsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceSpecsWithOptions(request, runtime);
  }

  async describeOnDemandDdosEventWithOptions(request: DescribeOnDemandDdosEventRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOnDemandDdosEventResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeOnDemandDdosEventResponse>(await this.doRPCRequest("DescribeOnDemandDdosEvent", "2018-07-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeOnDemandDdosEventResponse({}));
  }

  async describeOnDemandDdosEvent(request: DescribeOnDemandDdosEventRequest): Promise<DescribeOnDemandDdosEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOnDemandDdosEventWithOptions(request, runtime);
  }

  async describeOnDemandInstanceStatusWithOptions(request: DescribeOnDemandInstanceStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOnDemandInstanceStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeOnDemandInstanceStatusResponse>(await this.doRPCRequest("DescribeOnDemandInstanceStatus", "2018-07-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeOnDemandInstanceStatusResponse({}));
  }

  async describeOnDemandInstanceStatus(request: DescribeOnDemandInstanceStatusRequest): Promise<DescribeOnDemandInstanceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOnDemandInstanceStatusWithOptions(request, runtime);
  }

  async describeOpEntitiesWithOptions(request: DescribeOpEntitiesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOpEntitiesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeOpEntitiesResponse>(await this.doRPCRequest("DescribeOpEntities", "2018-07-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeOpEntitiesResponse({}));
  }

  async describeOpEntities(request: DescribeOpEntitiesRequest): Promise<DescribeOpEntitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOpEntitiesWithOptions(request, runtime);
  }

  async describePackIpListWithOptions(request: DescribePackIpListRequest, runtime: $Util.RuntimeOptions): Promise<DescribePackIpListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePackIpListResponse>(await this.doRPCRequest("DescribePackIpList", "2018-07-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePackIpListResponse({}));
  }

  async describePackIpList(request: DescribePackIpListRequest): Promise<DescribePackIpListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePackIpListWithOptions(request, runtime);
  }

  async describePackPaidTrafficWithOptions(request: DescribePackPaidTrafficRequest, runtime: $Util.RuntimeOptions): Promise<DescribePackPaidTrafficResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePackPaidTrafficResponse>(await this.doRPCRequest("DescribePackPaidTraffic", "2018-07-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePackPaidTrafficResponse({}));
  }

  async describePackPaidTraffic(request: DescribePackPaidTrafficRequest): Promise<DescribePackPaidTrafficResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePackPaidTrafficWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2018-07-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeResourcePackInstancesWithOptions(request: DescribeResourcePackInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourcePackInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeResourcePackInstancesResponse>(await this.doRPCRequest("DescribeResourcePackInstances", "2018-07-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeResourcePackInstancesResponse({}));
  }

  async describeResourcePackInstances(request: DescribeResourcePackInstancesRequest): Promise<DescribeResourcePackInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourcePackInstancesWithOptions(request, runtime);
  }

  async describeResourcePackStatisticsWithOptions(request: DescribeResourcePackStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourcePackStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeResourcePackStatisticsResponse>(await this.doRPCRequest("DescribeResourcePackStatistics", "2018-07-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeResourcePackStatisticsResponse({}));
  }

  async describeResourcePackStatistics(request: DescribeResourcePackStatisticsRequest): Promise<DescribeResourcePackStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourcePackStatisticsWithOptions(request, runtime);
  }

  async describeResourcePackUsageWithOptions(request: DescribeResourcePackUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourcePackUsageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeResourcePackUsageResponse>(await this.doRPCRequest("DescribeResourcePackUsage", "2018-07-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeResourcePackUsageResponse({}));
  }

  async describeResourcePackUsage(request: DescribeResourcePackUsageRequest): Promise<DescribeResourcePackUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourcePackUsageWithOptions(request, runtime);
  }

  async describeTrafficWithOptions(request: DescribeTrafficRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTrafficResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTrafficResponse>(await this.doRPCRequest("DescribeTraffic", "2018-07-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTrafficResponse({}));
  }

  async describeTraffic(request: DescribeTrafficRequest): Promise<DescribeTrafficResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTrafficWithOptions(request, runtime);
  }

  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListTagKeysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagKeysResponse>(await this.doRPCRequest("ListTagKeys", "2018-07-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagKeysResponse({}));
  }

  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2018-07-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async modifyRemarkWithOptions(request: ModifyRemarkRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRemarkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyRemarkResponse>(await this.doRPCRequest("ModifyRemark", "2018-07-20", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyRemarkResponse({}));
  }

  async modifyRemark(request: ModifyRemarkRequest): Promise<ModifyRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRemarkWithOptions(request, runtime);
  }

  async querySchedruleOnDemandWithOptions(request: QuerySchedruleOnDemandRequest, runtime: $Util.RuntimeOptions): Promise<QuerySchedruleOnDemandResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QuerySchedruleOnDemandResponse>(await this.doRPCRequest("QuerySchedruleOnDemand", "2018-07-20", "HTTPS", "POST", "AK", "json", req, runtime), new QuerySchedruleOnDemandResponse({}));
  }

  async querySchedruleOnDemand(request: QuerySchedruleOnDemandRequest): Promise<QuerySchedruleOnDemandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySchedruleOnDemandWithOptions(request, runtime);
  }

  async setInstanceModeOnDemandWithOptions(request: SetInstanceModeOnDemandRequest, runtime: $Util.RuntimeOptions): Promise<SetInstanceModeOnDemandResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetInstanceModeOnDemandResponse>(await this.doRPCRequest("SetInstanceModeOnDemand", "2018-07-20", "HTTPS", "POST", "AK", "json", req, runtime), new SetInstanceModeOnDemandResponse({}));
  }

  async setInstanceModeOnDemand(request: SetInstanceModeOnDemandRequest): Promise<SetInstanceModeOnDemandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setInstanceModeOnDemandWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2018-07-20", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2018-07-20", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
