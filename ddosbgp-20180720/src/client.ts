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
  instanceId?: string;
  ipList?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ipList: 'IpList',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ipList: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRdMemberListRequest extends $tea.Model {
  memberList?: AddRdMemberListRequestMemberList[];
  static names(): { [key: string]: string } {
    return {
      memberList: 'MemberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberList: { 'type': 'array', 'itemType': AddRdMemberListRequestMemberList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRdMemberListShrinkRequest extends $tea.Model {
  memberListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      memberListShrink: 'MemberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRdMemberListResponseBody extends $tea.Model {
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

export class AddRdMemberListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddRdMemberListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddRdMemberListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachAssetGroupToInstanceRequest extends $tea.Model {
  assetGroupList?: AttachAssetGroupToInstanceRequestAssetGroupList[];
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      assetGroupList: 'AssetGroupList',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetGroupList: { 'type': 'array', 'itemType': AttachAssetGroupToInstanceRequestAssetGroupList },
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachAssetGroupToInstanceShrinkRequest extends $tea.Model {
  assetGroupListShrink?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      assetGroupListShrink: 'AssetGroupList',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetGroupListShrink: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachAssetGroupToInstanceResponseBody extends $tea.Model {
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

export class AttachAssetGroupToInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachAssetGroupToInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachAssetGroupToInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAccessLogAuthRequest extends $tea.Model {
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAccessLogAuthResponseBody extends $tea.Model {
  accessLogAuth?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessLogAuth: 'AccessLogAuth',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogAuth: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAccessLogAuthResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckAccessLogAuthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckAccessLogAuthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckGrantRequest extends $tea.Model {
  isSlr?: boolean;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      isSlr: 'IsSlr',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSlr: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckGrantResponseBody extends $tea.Model {
  requestId?: string;
  status?: number;
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

export class CheckGrantResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckGrantResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckGrantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigSchedruleOnDemandRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  ruleAction?: string;
  ruleConditionCnt?: string;
  ruleConditionKpps?: string;
  ruleConditionMbps?: string;
  ruleName?: string;
  ruleSwitch?: string;
  ruleUndoBeginTime?: string;
  ruleUndoEndTime?: string;
  ruleUndoMode?: string;
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      ruleAction: 'RuleAction',
      ruleConditionCnt: 'RuleConditionCnt',
      ruleConditionKpps: 'RuleConditionKpps',
      ruleConditionMbps: 'RuleConditionMbps',
      ruleName: 'RuleName',
      ruleSwitch: 'RuleSwitch',
      ruleUndoBeginTime: 'RuleUndoBeginTime',
      ruleUndoEndTime: 'RuleUndoEndTime',
      ruleUndoMode: 'RuleUndoMode',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      ruleAction: 'string',
      ruleConditionCnt: 'string',
      ruleConditionKpps: 'string',
      ruleConditionMbps: 'string',
      ruleName: 'string',
      ruleSwitch: 'string',
      ruleUndoBeginTime: 'string',
      ruleUndoEndTime: 'string',
      ruleUndoMode: 'string',
      timeZone: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigSchedruleOnDemandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfigSchedruleOnDemandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyRequest extends $tea.Model {
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyResponseBody extends $tea.Model {
  id?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchedruleOnDemandRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  ruleAction?: string;
  ruleConditionCnt?: string;
  ruleConditionKpps?: string;
  ruleConditionMbps?: string;
  ruleName?: string;
  ruleSwitch?: string;
  ruleUndoBeginTime?: string;
  ruleUndoEndTime?: string;
  ruleUndoMode?: string;
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      ruleAction: 'RuleAction',
      ruleConditionCnt: 'RuleConditionCnt',
      ruleConditionKpps: 'RuleConditionKpps',
      ruleConditionMbps: 'RuleConditionMbps',
      ruleName: 'RuleName',
      ruleSwitch: 'RuleSwitch',
      ruleUndoBeginTime: 'RuleUndoBeginTime',
      ruleUndoEndTime: 'RuleUndoEndTime',
      ruleUndoMode: 'RuleUndoMode',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      ruleAction: 'string',
      ruleConditionCnt: 'string',
      ruleConditionKpps: 'string',
      ruleConditionMbps: 'string',
      ruleName: 'string',
      ruleSwitch: 'string',
      ruleUndoBeginTime: 'string',
      ruleUndoEndTime: 'string',
      ruleUndoMode: 'string',
      timeZone: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSchedruleOnDemandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSchedruleOnDemandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBlackholeRequest extends $tea.Model {
  instanceId?: string;
  ip?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ip: 'Ip',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ip: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBlackholeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteBlackholeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpRequest extends $tea.Model {
  instanceId?: string;
  ipList?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ipList: 'IpList',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ipList: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyResponseBody extends $tea.Model {
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

export class DeletePolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRdMemberListRequest extends $tea.Model {
  memberList?: DeleteRdMemberListRequestMemberList[];
  static names(): { [key: string]: string } {
    return {
      memberList: 'MemberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberList: { 'type': 'array', 'itemType': DeleteRdMemberListRequestMemberList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRdMemberListShrinkRequest extends $tea.Model {
  memberListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      memberListShrink: 'MemberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRdMemberListResponseBody extends $tea.Model {
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

export class DeleteRdMemberListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRdMemberListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRdMemberListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSchedruleOnDemandRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      ruleName: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSchedruleOnDemandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSchedruleOnDemandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetGroupRequest extends $tea.Model {
  name?: string;
  region?: string;
  regionId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      region: 'Region',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      region: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetGroupResponseBody extends $tea.Model {
  assetGroupList?: DescribeAssetGroupResponseBodyAssetGroupList[];
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      assetGroupList: 'AssetGroupList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetGroupList: { 'type': 'array', 'itemType': DescribeAssetGroupResponseBodyAssetGroupList },
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAssetGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAssetGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetGroupToInstanceRequest extends $tea.Model {
  instanceId?: string;
  memberUid?: string;
  name?: string;
  region?: string;
  regionId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      memberUid: 'MemberUid',
      name: 'Name',
      region: 'Region',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      memberUid: 'string',
      name: 'string',
      region: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetGroupToInstanceResponseBody extends $tea.Model {
  dataList?: DescribeAssetGroupToInstanceResponseBodyDataList[];
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeAssetGroupToInstanceResponseBodyDataList },
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetGroupToInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAssetGroupToInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAssetGroupToInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosEventRequest extends $tea.Model {
  endTime?: number;
  instanceId?: string;
  ip?: string;
  pageNo?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      ip: 'Ip',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      ip: 'string',
      pageNo: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosEventResponseBody extends $tea.Model {
  events?: DescribeDdosEventResponseBodyEvents[];
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': DescribeDdosEventResponseBodyEvents },
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDdosEventResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDdosEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosOriginInstanceBillRequest extends $tea.Model {
  endTime?: number;
  isShowList?: boolean;
  startTime?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      isShowList: 'IsShowList',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      isShowList: 'boolean',
      startTime: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosOriginInstanceBillResponseBody extends $tea.Model {
  debtStatus?: number;
  flowList?: DescribeDdosOriginInstanceBillResponseBodyFlowList[];
  flowRegion?: { [key: string]: any };
  instanceId?: string;
  ipCount?: number;
  ipCountOrFunctionList?: DescribeDdosOriginInstanceBillResponseBodyIpCountOrFunctionList[];
  ipInfo?: string;
  requestId?: string;
  standardAssetsFlowList?: DescribeDdosOriginInstanceBillResponseBodyStandardAssetsFlowList[];
  standardAssetsFlowRegion?: { [key: string]: any };
  standardAssetsTotalFlowCn?: number;
  standardAssetsTotalFlowOv?: number;
  status?: number;
  totalFlowCn?: number;
  totalFlowOv?: number;
  static names(): { [key: string]: string } {
    return {
      debtStatus: 'DebtStatus',
      flowList: 'FlowList',
      flowRegion: 'FlowRegion',
      instanceId: 'InstanceId',
      ipCount: 'IpCount',
      ipCountOrFunctionList: 'IpCountOrFunctionList',
      ipInfo: 'IpInfo',
      requestId: 'RequestId',
      standardAssetsFlowList: 'StandardAssetsFlowList',
      standardAssetsFlowRegion: 'StandardAssetsFlowRegion',
      standardAssetsTotalFlowCn: 'StandardAssetsTotalFlowCn',
      standardAssetsTotalFlowOv: 'StandardAssetsTotalFlowOv',
      status: 'Status',
      totalFlowCn: 'TotalFlowCn',
      totalFlowOv: 'TotalFlowOv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debtStatus: 'number',
      flowList: { 'type': 'array', 'itemType': DescribeDdosOriginInstanceBillResponseBodyFlowList },
      flowRegion: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      instanceId: 'string',
      ipCount: 'number',
      ipCountOrFunctionList: { 'type': 'array', 'itemType': DescribeDdosOriginInstanceBillResponseBodyIpCountOrFunctionList },
      ipInfo: 'string',
      requestId: 'string',
      standardAssetsFlowList: { 'type': 'array', 'itemType': DescribeDdosOriginInstanceBillResponseBodyStandardAssetsFlowList },
      standardAssetsFlowRegion: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      standardAssetsTotalFlowCn: 'number',
      standardAssetsTotalFlowOv: 'number',
      status: 'number',
      totalFlowCn: 'number',
      totalFlowOv: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosOriginInstanceBillResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDdosOriginInstanceBillResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDdosOriginInstanceBillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExcpetionCountRequest extends $tea.Model {
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExcpetionCountResponseBody extends $tea.Model {
  exceptionIpCount?: number;
  expireTimeCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exceptionIpCount: 'ExceptionIpCount',
      expireTimeCount: 'ExpireTimeCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionIpCount: 'number',
      expireTimeCount: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExcpetionCountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeExcpetionCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeExcpetionCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceListRequest extends $tea.Model {
  instanceIdList?: string;
  instanceType?: string;
  instanceTypeList?: string[];
  ip?: string;
  ipVersion?: string;
  orderby?: string;
  orderdire?: string;
  pageNo?: number;
  pageSize?: number;
  regionId?: string;
  remark?: string;
  resourceGroupId?: string;
  tag?: DescribeInstanceListRequestTag[];
  static names(): { [key: string]: string } {
    return {
      instanceIdList: 'InstanceIdList',
      instanceType: 'InstanceType',
      instanceTypeList: 'InstanceTypeList',
      ip: 'Ip',
      ipVersion: 'IpVersion',
      orderby: 'Orderby',
      orderdire: 'Orderdire',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdList: 'string',
      instanceType: 'string',
      instanceTypeList: { 'type': 'array', 'itemType': 'string' },
      ip: 'string',
      ipVersion: 'string',
      orderby: 'string',
      orderdire: 'string',
      pageNo: 'number',
      pageSize: 'number',
      regionId: 'string',
      remark: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeInstanceListRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceListResponseBody extends $tea.Model {
  instanceList?: DescribeInstanceListResponseBodyInstanceList[];
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      instanceList: 'InstanceList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceList: { 'type': 'array', 'itemType': DescribeInstanceListResponseBodyInstanceList },
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsRequest extends $tea.Model {
  instanceIdList?: string;
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

export class DescribeInstanceSpecsResponseBody extends $tea.Model {
  instanceSpecs?: DescribeInstanceSpecsResponseBodyInstanceSpecs[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceSpecs: 'InstanceSpecs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSpecs: { 'type': 'array', 'itemType': DescribeInstanceSpecsResponseBodyInstanceSpecs },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceSpecsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceSpecsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOnDemandDdosEventRequest extends $tea.Model {
  endTime?: number;
  instanceId?: string;
  ip?: string;
  pageNo?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      ip: 'Ip',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      ip: 'string',
      pageNo: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOnDemandDdosEventResponseBody extends $tea.Model {
  events?: DescribeOnDemandDdosEventResponseBodyEvents[];
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': DescribeOnDemandDdosEventResponseBodyEvents },
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOnDemandDdosEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOnDemandDdosEventResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOnDemandDdosEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOnDemandInstanceStatusRequest extends $tea.Model {
  instanceIdList?: string[];
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOnDemandInstanceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOnDemandInstanceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesRequest extends $tea.Model {
  currentPage?: number;
  endTime?: number;
  instanceId?: string;
  orderBy?: string;
  orderDir?: string;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      orderBy: 'OrderBy',
      orderDir: 'OrderDir',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'number',
      instanceId: 'string',
      orderBy: 'string',
      orderDir: 'string',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesResponseBody extends $tea.Model {
  opEntities?: DescribeOpEntitiesResponseBodyOpEntities[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      opEntities: 'OpEntities',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opEntities: { 'type': 'array', 'itemType': DescribeOpEntitiesResponseBodyOpEntities },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOpEntitiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOpEntitiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackIpListRequest extends $tea.Model {
  instanceId?: string;
  ip?: string;
  memberUid?: string;
  pageNo?: number;
  pageSize?: number;
  productName?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ip: 'Ip',
      memberUid: 'MemberUid',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      productName: 'ProductName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ip: 'string',
      memberUid: 'string',
      pageNo: 'number',
      pageSize: 'number',
      productName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackIpListResponseBody extends $tea.Model {
  code?: string;
  ipList?: DescribePackIpListResponseBodyIpList[];
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ipList: 'IpList',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      ipList: { 'type': 'array', 'itemType': DescribePackIpListResponseBodyIpList },
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackIpListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePackIpListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePackIpListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdMemberListRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  resourceDirectoryId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceDirectoryId: 'ResourceDirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      resourceDirectoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdMemberListResponseBody extends $tea.Model {
  memberList?: DescribeRdMemberListResponseBodyMemberList[];
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      memberList: 'MemberList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberList: { 'type': 'array', 'itemType': DescribeRdMemberListResponseBodyMemberList },
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdMemberListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRdMemberListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRdMemberListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdStatusResponseBody extends $tea.Model {
  currentUid?: string;
  currentUidType?: string;
  enabled?: boolean;
  localEnable?: boolean;
  masterUid?: string;
  remoteEnable?: boolean;
  requestId?: string;
  rootUid?: string;
  servicePrincipalEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      currentUid: 'CurrentUid',
      currentUidType: 'CurrentUidType',
      enabled: 'Enabled',
      localEnable: 'LocalEnable',
      masterUid: 'MasterUid',
      remoteEnable: 'RemoteEnable',
      requestId: 'RequestId',
      rootUid: 'RootUid',
      servicePrincipalEnabled: 'ServicePrincipalEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentUid: 'string',
      currentUidType: 'string',
      enabled: 'boolean',
      localEnable: 'boolean',
      masterUid: 'string',
      remoteEnable: 'boolean',
      requestId: 'string',
      rootUid: 'string',
      servicePrincipalEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRdStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRdStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  code?: string;
  regions?: DescribeRegionsResponseBodyRegions[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      regions: 'Regions',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficRequest extends $tea.Model {
  endTime?: number;
  flowType?: string;
  instanceId?: string;
  interval?: number;
  ip?: string;
  ipnet?: string;
  regionId?: string;
  resourceGroupId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      flowType: 'FlowType',
      instanceId: 'InstanceId',
      interval: 'Interval',
      ip: 'Ip',
      ipnet: 'Ipnet',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      flowType: 'string',
      instanceId: 'string',
      interval: 'number',
      ip: 'string',
      ipnet: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTrafficResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTrafficResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachFromPolicyRequest extends $tea.Model {
  ipPortProtocolList?: DetachFromPolicyRequestIpPortProtocolList[];
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      ipPortProtocolList: 'IpPortProtocolList',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipPortProtocolList: { 'type': 'array', 'itemType': DetachFromPolicyRequestIpPortProtocolList },
      policyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachFromPolicyShrinkRequest extends $tea.Model {
  ipPortProtocolListShrink?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      ipPortProtocolListShrink: 'IpPortProtocolList',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipPortProtocolListShrink: 'string',
      policyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachFromPolicyResponseBody extends $tea.Model {
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

export class DetachFromPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachFromPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachFromPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DettachAssetGroupToInstanceRequest extends $tea.Model {
  assetGroupList?: DettachAssetGroupToInstanceRequestAssetGroupList[];
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      assetGroupList: 'AssetGroupList',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetGroupList: { 'type': 'array', 'itemType': DettachAssetGroupToInstanceRequestAssetGroupList },
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DettachAssetGroupToInstanceShrinkRequest extends $tea.Model {
  assetGroupListShrink?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      assetGroupListShrink: 'AssetGroupList',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetGroupListShrink: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DettachAssetGroupToInstanceResponseBody extends $tea.Model {
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

export class DettachAssetGroupToInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DettachAssetGroupToInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DettachAssetGroupToInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSlsOpenStatusRequest extends $tea.Model {
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSlsOpenStatusResponseBody extends $tea.Model {
  requestId?: string;
  slsOpenStatus?: boolean;
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

export class GetSlsOpenStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSlsOpenStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSlsOpenStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenedAccessLogInstancesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenedAccessLogInstancesResponseBody extends $tea.Model {
  requestId?: string;
  slsConfigStatus?: ListOpenedAccessLogInstancesResponseBodySlsConfigStatus[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slsConfigStatus: 'SlsConfigStatus',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slsConfigStatus: { 'type': 'array', 'itemType': ListOpenedAccessLogInstancesResponseBodySlsConfigStatus },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenedAccessLogInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOpenedAccessLogInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListOpenedAccessLogInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyRequest extends $tea.Model {
  name?: string;
  pageNo?: number;
  pageSize?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNo: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyResponseBody extends $tea.Model {
  policyList?: ListPolicyResponseBodyPolicyList[];
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      policyList: 'PolicyList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyList: { 'type': 'array', 'itemType': ListPolicyResponseBodyPolicyList },
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyAttachmentRequest extends $tea.Model {
  ipPortProtocolList?: ListPolicyAttachmentRequestIpPortProtocolList[];
  pageNo?: number;
  pageSize?: number;
  policyId?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      ipPortProtocolList: 'IpPortProtocolList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      policyId: 'PolicyId',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipPortProtocolList: { 'type': 'array', 'itemType': ListPolicyAttachmentRequestIpPortProtocolList },
      pageNo: 'number',
      pageSize: 'number',
      policyId: 'string',
      policyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyAttachmentShrinkRequest extends $tea.Model {
  ipPortProtocolListShrink?: string;
  pageNo?: number;
  pageSize?: number;
  policyId?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      ipPortProtocolListShrink: 'IpPortProtocolList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      policyId: 'PolicyId',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipPortProtocolListShrink: 'string',
      pageNo: 'number',
      pageSize: 'number',
      policyId: 'string',
      policyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyAttachmentResponseBody extends $tea.Model {
  attachmentList?: ListPolicyAttachmentResponseBodyAttachmentList[];
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentList: 'AttachmentList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentList: { 'type': 'array', 'itemType': ListPolicyAttachmentResponseBodyAttachmentList },
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyAttachmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPolicyAttachmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPolicyAttachmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBody extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  requestId?: string;
  tagKeys?: ListTagKeysResponseBodyTagKeys[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tagKeys: 'TagKeys',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      tagKeys: { 'type': 'array', 'itemType': ListTagKeysResponseBodyTagKeys },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  nextToken?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyRequest extends $tea.Model {
  actionType?: number;
  content?: ModifyPolicyRequestContent;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      content: 'Content',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'number',
      content: ModifyPolicyRequestContent,
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyShrinkRequest extends $tea.Model {
  actionType?: number;
  contentShrink?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      contentShrink: 'Content',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'number',
      contentShrink: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyResponseBody extends $tea.Model {
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

export class ModifyPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyContentRequest extends $tea.Model {
  content?: ModifyPolicyContentRequestContent;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: ModifyPolicyContentRequestContent,
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyContentShrinkRequest extends $tea.Model {
  contentShrink?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      contentShrink: 'Content',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentShrink: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyContentResponseBody extends $tea.Model {
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

export class ModifyPolicyContentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPolicyContentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyPolicyContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRemarkRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  remark?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      remark: 'string',
      resourceGroupId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyRemarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyRemarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySchedruleOnDemandRequest extends $tea.Model {
  instanceId?: string;
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

export class QuerySchedruleOnDemandResponseBody extends $tea.Model {
  instanceId?: string;
  requestId?: string;
  ruleConfig?: QuerySchedruleOnDemandResponseBodyRuleConfig[];
  ruleStatus?: QuerySchedruleOnDemandResponseBodyRuleStatus[];
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      ruleConfig: 'RuleConfig',
      ruleStatus: 'RuleStatus',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
      ruleConfig: { 'type': 'array', 'itemType': QuerySchedruleOnDemandResponseBodyRuleConfig },
      ruleStatus: { 'type': 'array', 'itemType': QuerySchedruleOnDemandResponseBodyRuleStatus },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySchedruleOnDemandResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySchedruleOnDemandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySchedruleOnDemandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseDdosOriginInstanceRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseDdosOriginInstanceResponseBody extends $tea.Model {
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

export class ReleaseDdosOriginInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseDdosOriginInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleaseDdosOriginInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInstanceModeOnDemandRequest extends $tea.Model {
  instanceIdList?: string[];
  mode?: string;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetInstanceModeOnDemandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetInstanceModeOnDemandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceGroupId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  all?: boolean;
  regionId?: string;
  resourceGroupId?: string;
  resourceId?: string[];
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRdMemberListRequestMemberList extends $tea.Model {
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachAssetGroupToInstanceRequestAssetGroupList extends $tea.Model {
  memberUid?: string;
  name?: string;
  region?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      memberUid: 'MemberUid',
      name: 'Name',
      region: 'Region',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberUid: 'string',
      name: 'string',
      region: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRdMemberListRequestMemberList extends $tea.Model {
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetGroupResponseBodyAssetGroupList extends $tea.Model {
  name?: string;
  region?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      region: 'Region',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      region: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetGroupToInstanceResponseBodyDataList extends $tea.Model {
  instanceId?: string;
  memberUid?: string;
  name?: string;
  region?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      memberUid: 'MemberUid',
      name: 'Name',
      region: 'Region',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      memberUid: 'string',
      name: 'string',
      region: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosEventResponseBodyEvents extends $tea.Model {
  endTime?: number;
  ip?: string;
  mbps?: number;
  pps?: number;
  startTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ip: 'Ip',
      mbps: 'Mbps',
      pps: 'Pps',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      ip: 'string',
      mbps: 'number',
      pps: 'number',
      startTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosOriginInstanceBillResponseBodyFlowList extends $tea.Model {
  memberFlow?: string;
  regionFlow?: string;
  time?: number;
  totalFlow?: number;
  static names(): { [key: string]: string } {
    return {
      memberFlow: 'MemberFlow',
      regionFlow: 'RegionFlow',
      time: 'Time',
      totalFlow: 'TotalFlow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberFlow: 'string',
      regionFlow: 'string',
      time: 'number',
      totalFlow: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosOriginInstanceBillResponseBodyIpCountOrFunctionList extends $tea.Model {
  coverage?: string;
  ipCntCn?: number;
  ipCntOv?: number;
  memberIpCnt?: string;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      coverage: 'Coverage',
      ipCntCn: 'IpCntCn',
      ipCntOv: 'IpCntOv',
      memberIpCnt: 'MemberIpCnt',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverage: 'string',
      ipCntCn: 'number',
      ipCntOv: 'number',
      memberIpCnt: 'string',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosOriginInstanceBillResponseBodyStandardAssetsFlowList extends $tea.Model {
  memberFlow?: string;
  regionFlow?: string;
  time?: number;
  totalFlow?: number;
  static names(): { [key: string]: string } {
    return {
      memberFlow: 'MemberFlow',
      regionFlow: 'RegionFlow',
      time: 'Time',
      totalFlow: 'TotalFlow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberFlow: 'string',
      regionFlow: 'string',
      time: 'number',
      totalFlow: 'number',
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

export class DescribeInstanceListResponseBodyInstanceListAutoProtectCondition extends $tea.Model {
  events?: string[];
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceListResponseBodyInstanceList extends $tea.Model {
  autoProtectCondition?: DescribeInstanceListResponseBodyInstanceListAutoProtectCondition;
  autoRenewal?: boolean;
  blackholdingCount?: string;
  commodityType?: string;
  coverageType?: number;
  expireTime?: number;
  gmtCreate?: number;
  instanceId?: string;
  instanceType?: string;
  ipType?: string;
  product?: string;
  remark?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      autoProtectCondition: 'AutoProtectCondition',
      autoRenewal: 'AutoRenewal',
      blackholdingCount: 'BlackholdingCount',
      commodityType: 'CommodityType',
      coverageType: 'CoverageType',
      expireTime: 'ExpireTime',
      gmtCreate: 'GmtCreate',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ipType: 'IpType',
      product: 'Product',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoProtectCondition: DescribeInstanceListResponseBodyInstanceListAutoProtectCondition,
      autoRenewal: 'boolean',
      blackholdingCount: 'string',
      commodityType: 'string',
      coverageType: 'number',
      expireTime: 'number',
      gmtCreate: 'number',
      instanceId: 'string',
      instanceType: 'string',
      ipType: 'string',
      product: 'string',
      remark: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsResponseBodyInstanceSpecsPackConfig extends $tea.Model {
  bandwidth?: number;
  bindIpCount?: number;
  ipAdvanceThre?: number;
  ipBasicThre?: number;
  ipSpec?: number;
  normalBandwidth?: number;
  packAdvThre?: number;
  packBasicThre?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      bindIpCount: 'BindIpCount',
      ipAdvanceThre: 'IpAdvanceThre',
      ipBasicThre: 'IpBasicThre',
      ipSpec: 'IpSpec',
      normalBandwidth: 'NormalBandwidth',
      packAdvThre: 'PackAdvThre',
      packBasicThre: 'PackBasicThre',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      bindIpCount: 'number',
      ipAdvanceThre: 'number',
      ipBasicThre: 'number',
      ipSpec: 'number',
      normalBandwidth: 'number',
      packAdvThre: 'number',
      packBasicThre: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsResponseBodyInstanceSpecs extends $tea.Model {
  availableDefenseTimes?: number;
  availableDeleteBlackholeCount?: string;
  defenseTimesPercent?: number;
  instanceId?: string;
  isFullDefenseMode?: number;
  packConfig?: DescribeInstanceSpecsResponseBodyInstanceSpecsPackConfig;
  region?: string;
  totalDefenseTimes?: number;
  static names(): { [key: string]: string } {
    return {
      availableDefenseTimes: 'AvailableDefenseTimes',
      availableDeleteBlackholeCount: 'AvailableDeleteBlackholeCount',
      defenseTimesPercent: 'DefenseTimesPercent',
      instanceId: 'InstanceId',
      isFullDefenseMode: 'IsFullDefenseMode',
      packConfig: 'PackConfig',
      region: 'Region',
      totalDefenseTimes: 'TotalDefenseTimes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableDefenseTimes: 'number',
      availableDeleteBlackholeCount: 'string',
      defenseTimesPercent: 'number',
      instanceId: 'string',
      isFullDefenseMode: 'number',
      packConfig: DescribeInstanceSpecsResponseBodyInstanceSpecsPackConfig,
      region: 'string',
      totalDefenseTimes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOnDemandDdosEventResponseBodyEvents extends $tea.Model {
  endTime?: number;
  ip?: string;
  mbps?: number;
  pps?: number;
  startTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ip: 'Ip',
      mbps: 'Mbps',
      pps: 'Pps',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      ip: 'string',
      mbps: 'number',
      pps: 'number',
      startTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOnDemandInstanceStatusResponseBodyInstances extends $tea.Model {
  declared?: string;
  desc?: string;
  instanceId?: string;
  mode?: string;
  net?: string;
  registedAs?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      declared: 'Declared',
      desc: 'Desc',
      instanceId: 'InstanceId',
      mode: 'Mode',
      net: 'Net',
      registedAs: 'RegistedAs',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      declared: 'string',
      desc: 'string',
      instanceId: 'string',
      mode: 'string',
      net: 'string',
      registedAs: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesResponseBodyOpEntities extends $tea.Model {
  entityObject?: string;
  entityType?: number;
  gmtCreate?: number;
  opAccount?: string;
  opAction?: number;
  opDesc?: string;
  static names(): { [key: string]: string } {
    return {
      entityObject: 'EntityObject',
      entityType: 'EntityType',
      gmtCreate: 'GmtCreate',
      opAccount: 'OpAccount',
      opAction: 'OpAction',
      opDesc: 'OpDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityObject: 'string',
      entityType: 'number',
      gmtCreate: 'number',
      opAccount: 'string',
      opAction: 'number',
      opDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackIpListResponseBodyIpList extends $tea.Model {
  ip?: string;
  memberUid?: string;
  nsmExpireAt?: number;
  nsmStartAt?: number;
  nsmStatus?: number;
  product?: string;
  region?: string;
  remark?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      memberUid: 'MemberUid',
      nsmExpireAt: 'NsmExpireAt',
      nsmStartAt: 'NsmStartAt',
      nsmStatus: 'NsmStatus',
      product: 'Product',
      region: 'Region',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      memberUid: 'string',
      nsmExpireAt: 'number',
      nsmStartAt: 'number',
      nsmStatus: 'number',
      product: 'string',
      region: 'string',
      remark: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdMemberListResponseBodyMemberList extends $tea.Model {
  gmtCreate?: number;
  name?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      name: 'Name',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      name: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  regionEnName?: string;
  regionId?: string;
  regionName?: string;
  static names(): { [key: string]: string } {
    return {
      regionEnName: 'RegionEnName',
      regionId: 'RegionId',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionEnName: 'string',
      regionId: 'string',
      regionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficResponseBodyFlowList extends $tea.Model {
  attackBps?: number;
  attackPps?: number;
  flowType?: string;
  kbps?: number;
  name?: string;
  pps?: number;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      attackBps: 'AttackBps',
      attackPps: 'AttackPps',
      flowType: 'FlowType',
      kbps: 'Kbps',
      name: 'Name',
      pps: 'Pps',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackBps: 'number',
      attackPps: 'number',
      flowType: 'string',
      kbps: 'number',
      name: 'string',
      pps: 'number',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachFromPolicyRequestIpPortProtocolList extends $tea.Model {
  ip?: string;
  port?: number;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      port: 'number',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DettachAssetGroupToInstanceRequestAssetGroupList extends $tea.Model {
  name?: string;
  region?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      region: 'Region',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      region: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenedAccessLogInstancesResponseBodySlsConfigStatus extends $tea.Model {
  enable?: boolean;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyResponseBodyPolicyListContentFingerPrintRuleList extends $tea.Model {
  dstPortEnd?: number;
  dstPortStart?: number;
  id?: string;
  matchAction?: string;
  maxPktLen?: number;
  minPktLen?: number;
  offset?: number;
  payloadBytes?: string;
  protocol?: string;
  rateValue?: number;
  seqNo?: number;
  srcPortEnd?: number;
  srcPortStart?: number;
  static names(): { [key: string]: string } {
    return {
      dstPortEnd: 'DstPortEnd',
      dstPortStart: 'DstPortStart',
      id: 'Id',
      matchAction: 'MatchAction',
      maxPktLen: 'MaxPktLen',
      minPktLen: 'MinPktLen',
      offset: 'Offset',
      payloadBytes: 'PayloadBytes',
      protocol: 'Protocol',
      rateValue: 'RateValue',
      seqNo: 'SeqNo',
      srcPortEnd: 'SrcPortEnd',
      srcPortStart: 'SrcPortStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstPortEnd: 'number',
      dstPortStart: 'number',
      id: 'string',
      matchAction: 'string',
      maxPktLen: 'number',
      minPktLen: 'number',
      offset: 'number',
      payloadBytes: 'string',
      protocol: 'string',
      rateValue: 'number',
      seqNo: 'number',
      srcPortEnd: 'number',
      srcPortStart: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyResponseBodyPolicyListContentL4RuleListConditionList extends $tea.Model {
  arg?: string;
  depth?: number;
  position?: number;
  static names(): { [key: string]: string } {
    return {
      arg: 'Arg',
      depth: 'Depth',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      depth: 'number',
      position: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyResponseBodyPolicyListContentL4RuleList extends $tea.Model {
  action?: string;
  conditionList?: ListPolicyResponseBodyPolicyListContentL4RuleListConditionList[];
  limited?: number;
  match?: string;
  method?: string;
  name?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      conditionList: 'ConditionList',
      limited: 'Limited',
      match: 'Match',
      method: 'Method',
      name: 'Name',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      conditionList: { 'type': 'array', 'itemType': ListPolicyResponseBodyPolicyListContentL4RuleListConditionList },
      limited: 'number',
      match: 'string',
      method: 'string',
      name: 'string',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyResponseBodyPolicyListContentPortRuleList extends $tea.Model {
  dstPortEnd?: number;
  dstPortStart?: number;
  id?: string;
  matchAction?: string;
  protocol?: string;
  seqNo?: number;
  srcPortEnd?: number;
  srcPortStart?: number;
  static names(): { [key: string]: string } {
    return {
      dstPortEnd: 'DstPortEnd',
      dstPortStart: 'DstPortStart',
      id: 'Id',
      matchAction: 'MatchAction',
      protocol: 'Protocol',
      seqNo: 'SeqNo',
      srcPortEnd: 'SrcPortEnd',
      srcPortStart: 'SrcPortStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstPortEnd: 'number',
      dstPortStart: 'number',
      id: 'string',
      matchAction: 'string',
      protocol: 'string',
      seqNo: 'number',
      srcPortEnd: 'number',
      srcPortStart: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyResponseBodyPolicyListContentSourceBlockList extends $tea.Model {
  blockExpireSeconds?: number;
  everySeconds?: number;
  exceedLimitTimes?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      blockExpireSeconds: 'BlockExpireSeconds',
      everySeconds: 'EverySeconds',
      exceedLimitTimes: 'ExceedLimitTimes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockExpireSeconds: 'number',
      everySeconds: 'number',
      exceedLimitTimes: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyResponseBodyPolicyListContentSourceLimit extends $tea.Model {
  bps?: number;
  pps?: number;
  synBps?: number;
  synPps?: number;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      pps: 'Pps',
      synBps: 'SynBps',
      synPps: 'SynPps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      pps: 'number',
      synBps: 'number',
      synPps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyResponseBodyPolicyListContent extends $tea.Model {
  blackIpListExpireAt?: number;
  enableDropIcmp?: boolean;
  enableIntelligence?: boolean;
  enableL4Defense?: boolean;
  fingerPrintRuleList?: ListPolicyResponseBodyPolicyListContentFingerPrintRuleList[];
  intelligenceLevel?: string;
  l4RuleList?: ListPolicyResponseBodyPolicyListContentL4RuleList[];
  portRuleList?: ListPolicyResponseBodyPolicyListContentPortRuleList[];
  reflectBlockUdpPortList?: number[];
  regionBlockCountryList?: number[];
  regionBlockProvinceList?: number[];
  sourceBlockList?: ListPolicyResponseBodyPolicyListContentSourceBlockList[];
  sourceLimit?: ListPolicyResponseBodyPolicyListContentSourceLimit;
  whitenGfbrNets?: boolean;
  static names(): { [key: string]: string } {
    return {
      blackIpListExpireAt: 'BlackIpListExpireAt',
      enableDropIcmp: 'EnableDropIcmp',
      enableIntelligence: 'EnableIntelligence',
      enableL4Defense: 'EnableL4Defense',
      fingerPrintRuleList: 'FingerPrintRuleList',
      intelligenceLevel: 'IntelligenceLevel',
      l4RuleList: 'L4RuleList',
      portRuleList: 'PortRuleList',
      reflectBlockUdpPortList: 'ReflectBlockUdpPortList',
      regionBlockCountryList: 'RegionBlockCountryList',
      regionBlockProvinceList: 'RegionBlockProvinceList',
      sourceBlockList: 'SourceBlockList',
      sourceLimit: 'SourceLimit',
      whitenGfbrNets: 'WhitenGfbrNets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackIpListExpireAt: 'number',
      enableDropIcmp: 'boolean',
      enableIntelligence: 'boolean',
      enableL4Defense: 'boolean',
      fingerPrintRuleList: { 'type': 'array', 'itemType': ListPolicyResponseBodyPolicyListContentFingerPrintRuleList },
      intelligenceLevel: 'string',
      l4RuleList: { 'type': 'array', 'itemType': ListPolicyResponseBodyPolicyListContentL4RuleList },
      portRuleList: { 'type': 'array', 'itemType': ListPolicyResponseBodyPolicyListContentPortRuleList },
      reflectBlockUdpPortList: { 'type': 'array', 'itemType': 'number' },
      regionBlockCountryList: { 'type': 'array', 'itemType': 'number' },
      regionBlockProvinceList: { 'type': 'array', 'itemType': 'number' },
      sourceBlockList: { 'type': 'array', 'itemType': ListPolicyResponseBodyPolicyListContentSourceBlockList },
      sourceLimit: ListPolicyResponseBodyPolicyListContentSourceLimit,
      whitenGfbrNets: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyResponseBodyPolicyList extends $tea.Model {
  attachedCount?: number;
  content?: ListPolicyResponseBodyPolicyListContent;
  id?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attachedCount: 'AttachedCount',
      content: 'Content',
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedCount: 'number',
      content: ListPolicyResponseBodyPolicyListContent,
      id: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyAttachmentRequestIpPortProtocolList extends $tea.Model {
  ip?: string;
  port?: number;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      port: 'number',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyAttachmentResponseBodyAttachmentList extends $tea.Model {
  ip?: string;
  memberUid?: string;
  policyId?: string;
  policyName?: string;
  policyType?: string;
  port?: number;
  protocol?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      memberUid: 'MemberUid',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      port: 'Port',
      protocol: 'Protocol',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      memberUid: 'string',
      policyId: 'string',
      policyName: 'string',
      policyType: 'string',
      port: 'number',
      protocol: 'string',
      region: 'string',
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
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
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

export class ModifyPolicyRequestContentFingerPrintRuleList extends $tea.Model {
  dstPortEnd?: number;
  dstPortStart?: number;
  id?: string;
  matchAction?: string;
  maxPktLen?: number;
  minPktLen?: number;
  offset?: number;
  payloadBytes?: string;
  protocol?: string;
  rateValue?: number;
  seqNo?: number;
  srcPortEnd?: number;
  srcPortStart?: number;
  static names(): { [key: string]: string } {
    return {
      dstPortEnd: 'DstPortEnd',
      dstPortStart: 'DstPortStart',
      id: 'Id',
      matchAction: 'MatchAction',
      maxPktLen: 'MaxPktLen',
      minPktLen: 'MinPktLen',
      offset: 'Offset',
      payloadBytes: 'PayloadBytes',
      protocol: 'Protocol',
      rateValue: 'RateValue',
      seqNo: 'SeqNo',
      srcPortEnd: 'SrcPortEnd',
      srcPortStart: 'SrcPortStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstPortEnd: 'number',
      dstPortStart: 'number',
      id: 'string',
      matchAction: 'string',
      maxPktLen: 'number',
      minPktLen: 'number',
      offset: 'number',
      payloadBytes: 'string',
      protocol: 'string',
      rateValue: 'number',
      seqNo: 'number',
      srcPortEnd: 'number',
      srcPortStart: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyRequestContentL4RuleListConditionList extends $tea.Model {
  arg?: string;
  depth?: number;
  position?: number;
  static names(): { [key: string]: string } {
    return {
      arg: 'Arg',
      depth: 'Depth',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      depth: 'number',
      position: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyRequestContentL4RuleList extends $tea.Model {
  action?: string;
  conditionList?: ModifyPolicyRequestContentL4RuleListConditionList[];
  limited?: number;
  match?: string;
  method?: string;
  name?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      conditionList: 'ConditionList',
      limited: 'Limited',
      match: 'Match',
      method: 'Method',
      name: 'Name',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      conditionList: { 'type': 'array', 'itemType': ModifyPolicyRequestContentL4RuleListConditionList },
      limited: 'number',
      match: 'string',
      method: 'string',
      name: 'string',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyRequestContentPortRuleList extends $tea.Model {
  dstPortEnd?: number;
  dstPortStart?: number;
  id?: string;
  matchAction?: string;
  protocol?: string;
  seqNo?: number;
  srcPortEnd?: number;
  srcPortStart?: number;
  static names(): { [key: string]: string } {
    return {
      dstPortEnd: 'DstPortEnd',
      dstPortStart: 'DstPortStart',
      id: 'Id',
      matchAction: 'MatchAction',
      protocol: 'Protocol',
      seqNo: 'SeqNo',
      srcPortEnd: 'SrcPortEnd',
      srcPortStart: 'SrcPortStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstPortEnd: 'number',
      dstPortStart: 'number',
      id: 'string',
      matchAction: 'string',
      protocol: 'string',
      seqNo: 'number',
      srcPortEnd: 'number',
      srcPortStart: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyRequestContentSourceBlockList extends $tea.Model {
  blockExpireSeconds?: number;
  everySeconds?: number;
  exceedLimitTimes?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      blockExpireSeconds: 'BlockExpireSeconds',
      everySeconds: 'EverySeconds',
      exceedLimitTimes: 'ExceedLimitTimes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockExpireSeconds: 'number',
      everySeconds: 'number',
      exceedLimitTimes: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyRequestContentSourceLimit extends $tea.Model {
  bps?: number;
  pps?: number;
  synBps?: number;
  synPps?: number;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      pps: 'Pps',
      synBps: 'SynBps',
      synPps: 'SynPps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      pps: 'number',
      synBps: 'number',
      synPps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyRequestContent extends $tea.Model {
  blackIpList?: string[];
  blackIpListExpireAt?: number;
  enableDropIcmp?: boolean;
  enableIntelligence?: boolean;
  enableL4Defense?: boolean;
  fingerPrintRuleList?: ModifyPolicyRequestContentFingerPrintRuleList[];
  intelligenceLevel?: string;
  l4RuleList?: ModifyPolicyRequestContentL4RuleList[];
  portRuleList?: ModifyPolicyRequestContentPortRuleList[];
  reflectBlockUdpPortList?: number[];
  regionBlockCountryList?: number[];
  regionBlockProvinceList?: number[];
  sourceBlockList?: ModifyPolicyRequestContentSourceBlockList[];
  sourceLimit?: ModifyPolicyRequestContentSourceLimit;
  whiteIpList?: string[];
  whitenGfbrNets?: boolean;
  static names(): { [key: string]: string } {
    return {
      blackIpList: 'BlackIpList',
      blackIpListExpireAt: 'BlackIpListExpireAt',
      enableDropIcmp: 'EnableDropIcmp',
      enableIntelligence: 'EnableIntelligence',
      enableL4Defense: 'EnableL4Defense',
      fingerPrintRuleList: 'FingerPrintRuleList',
      intelligenceLevel: 'IntelligenceLevel',
      l4RuleList: 'L4RuleList',
      portRuleList: 'PortRuleList',
      reflectBlockUdpPortList: 'ReflectBlockUdpPortList',
      regionBlockCountryList: 'RegionBlockCountryList',
      regionBlockProvinceList: 'RegionBlockProvinceList',
      sourceBlockList: 'SourceBlockList',
      sourceLimit: 'SourceLimit',
      whiteIpList: 'WhiteIpList',
      whitenGfbrNets: 'WhitenGfbrNets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackIpList: { 'type': 'array', 'itemType': 'string' },
      blackIpListExpireAt: 'number',
      enableDropIcmp: 'boolean',
      enableIntelligence: 'boolean',
      enableL4Defense: 'boolean',
      fingerPrintRuleList: { 'type': 'array', 'itemType': ModifyPolicyRequestContentFingerPrintRuleList },
      intelligenceLevel: 'string',
      l4RuleList: { 'type': 'array', 'itemType': ModifyPolicyRequestContentL4RuleList },
      portRuleList: { 'type': 'array', 'itemType': ModifyPolicyRequestContentPortRuleList },
      reflectBlockUdpPortList: { 'type': 'array', 'itemType': 'number' },
      regionBlockCountryList: { 'type': 'array', 'itemType': 'number' },
      regionBlockProvinceList: { 'type': 'array', 'itemType': 'number' },
      sourceBlockList: { 'type': 'array', 'itemType': ModifyPolicyRequestContentSourceBlockList },
      sourceLimit: ModifyPolicyRequestContentSourceLimit,
      whiteIpList: { 'type': 'array', 'itemType': 'string' },
      whitenGfbrNets: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyContentRequestContentFingerPrintRuleList extends $tea.Model {
  dstPortEnd?: number;
  dstPortStart?: number;
  id?: string;
  matchAction?: string;
  maxPktLen?: number;
  minPktLen?: number;
  offset?: number;
  payloadBytes?: string;
  protocol?: string;
  rateValue?: number;
  seqNo?: number;
  srcPortEnd?: number;
  srcPortStart?: number;
  static names(): { [key: string]: string } {
    return {
      dstPortEnd: 'DstPortEnd',
      dstPortStart: 'DstPortStart',
      id: 'Id',
      matchAction: 'MatchAction',
      maxPktLen: 'MaxPktLen',
      minPktLen: 'MinPktLen',
      offset: 'Offset',
      payloadBytes: 'PayloadBytes',
      protocol: 'Protocol',
      rateValue: 'RateValue',
      seqNo: 'SeqNo',
      srcPortEnd: 'SrcPortEnd',
      srcPortStart: 'SrcPortStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstPortEnd: 'number',
      dstPortStart: 'number',
      id: 'string',
      matchAction: 'string',
      maxPktLen: 'number',
      minPktLen: 'number',
      offset: 'number',
      payloadBytes: 'string',
      protocol: 'string',
      rateValue: 'number',
      seqNo: 'number',
      srcPortEnd: 'number',
      srcPortStart: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyContentRequestContentL4RuleListConditionList extends $tea.Model {
  arg?: string;
  depth?: number;
  position?: number;
  static names(): { [key: string]: string } {
    return {
      arg: 'Arg',
      depth: 'Depth',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      depth: 'number',
      position: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyContentRequestContentL4RuleList extends $tea.Model {
  action?: string;
  conditionList?: ModifyPolicyContentRequestContentL4RuleListConditionList[];
  limited?: number;
  match?: string;
  method?: string;
  name?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      conditionList: 'ConditionList',
      limited: 'Limited',
      match: 'Match',
      method: 'Method',
      name: 'Name',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      conditionList: { 'type': 'array', 'itemType': ModifyPolicyContentRequestContentL4RuleListConditionList },
      limited: 'number',
      match: 'string',
      method: 'string',
      name: 'string',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyContentRequestContentPortRuleList extends $tea.Model {
  dstPortEnd?: number;
  dstPortStart?: number;
  id?: string;
  matchAction?: string;
  protocol?: string;
  seqNo?: number;
  srcPortEnd?: number;
  srcPortStart?: number;
  static names(): { [key: string]: string } {
    return {
      dstPortEnd: 'DstPortEnd',
      dstPortStart: 'DstPortStart',
      id: 'Id',
      matchAction: 'MatchAction',
      protocol: 'Protocol',
      seqNo: 'SeqNo',
      srcPortEnd: 'SrcPortEnd',
      srcPortStart: 'SrcPortStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstPortEnd: 'number',
      dstPortStart: 'number',
      id: 'string',
      matchAction: 'string',
      protocol: 'string',
      seqNo: 'number',
      srcPortEnd: 'number',
      srcPortStart: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyContentRequestContentSourceBlockList extends $tea.Model {
  blockExpireSeconds?: number;
  everySeconds?: number;
  exceedLimitTimes?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      blockExpireSeconds: 'BlockExpireSeconds',
      everySeconds: 'EverySeconds',
      exceedLimitTimes: 'ExceedLimitTimes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockExpireSeconds: 'number',
      everySeconds: 'number',
      exceedLimitTimes: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyContentRequestContentSourceLimit extends $tea.Model {
  bps?: number;
  pps?: number;
  synBps?: number;
  synPps?: number;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      pps: 'Pps',
      synBps: 'SynBps',
      synPps: 'SynPps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      pps: 'number',
      synBps: 'number',
      synPps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyContentRequestContent extends $tea.Model {
  blackIpListExpireAt?: number;
  enableDropIcmp?: boolean;
  enableIntelligence?: boolean;
  enableL4Defense?: boolean;
  fingerPrintRuleList?: ModifyPolicyContentRequestContentFingerPrintRuleList[];
  intelligenceLevel?: string;
  l4RuleList?: ModifyPolicyContentRequestContentL4RuleList[];
  portRuleList?: ModifyPolicyContentRequestContentPortRuleList[];
  reflectBlockUdpPortList?: number[];
  regionBlockCountryList?: number[];
  regionBlockProvinceList?: number[];
  sourceBlockList?: ModifyPolicyContentRequestContentSourceBlockList[];
  sourceLimit?: ModifyPolicyContentRequestContentSourceLimit;
  whitenGfbrNets?: boolean;
  static names(): { [key: string]: string } {
    return {
      blackIpListExpireAt: 'BlackIpListExpireAt',
      enableDropIcmp: 'EnableDropIcmp',
      enableIntelligence: 'EnableIntelligence',
      enableL4Defense: 'EnableL4Defense',
      fingerPrintRuleList: 'FingerPrintRuleList',
      intelligenceLevel: 'IntelligenceLevel',
      l4RuleList: 'L4RuleList',
      portRuleList: 'PortRuleList',
      reflectBlockUdpPortList: 'ReflectBlockUdpPortList',
      regionBlockCountryList: 'RegionBlockCountryList',
      regionBlockProvinceList: 'RegionBlockProvinceList',
      sourceBlockList: 'SourceBlockList',
      sourceLimit: 'SourceLimit',
      whitenGfbrNets: 'WhitenGfbrNets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackIpListExpireAt: 'number',
      enableDropIcmp: 'boolean',
      enableIntelligence: 'boolean',
      enableL4Defense: 'boolean',
      fingerPrintRuleList: { 'type': 'array', 'itemType': ModifyPolicyContentRequestContentFingerPrintRuleList },
      intelligenceLevel: 'string',
      l4RuleList: { 'type': 'array', 'itemType': ModifyPolicyContentRequestContentL4RuleList },
      portRuleList: { 'type': 'array', 'itemType': ModifyPolicyContentRequestContentPortRuleList },
      reflectBlockUdpPortList: { 'type': 'array', 'itemType': 'number' },
      regionBlockCountryList: { 'type': 'array', 'itemType': 'number' },
      regionBlockProvinceList: { 'type': 'array', 'itemType': 'number' },
      sourceBlockList: { 'type': 'array', 'itemType': ModifyPolicyContentRequestContentSourceBlockList },
      sourceLimit: ModifyPolicyContentRequestContentSourceLimit,
      whitenGfbrNets: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySchedruleOnDemandResponseBodyRuleConfig extends $tea.Model {
  ruleAction?: string;
  ruleConditionCnt?: string;
  ruleConditionKpps?: string;
  ruleConditionMbps?: string;
  ruleName?: string;
  ruleSwitch?: string;
  ruleUndoBeginTime?: string;
  ruleUndoEndTime?: string;
  ruleUndoMode?: string;
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      ruleAction: 'RuleAction',
      ruleConditionCnt: 'RuleConditionCnt',
      ruleConditionKpps: 'RuleConditionKpps',
      ruleConditionMbps: 'RuleConditionMbps',
      ruleName: 'RuleName',
      ruleSwitch: 'RuleSwitch',
      ruleUndoBeginTime: 'RuleUndoBeginTime',
      ruleUndoEndTime: 'RuleUndoEndTime',
      ruleUndoMode: 'RuleUndoMode',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleAction: 'string',
      ruleConditionCnt: 'string',
      ruleConditionKpps: 'string',
      ruleConditionMbps: 'string',
      ruleName: 'string',
      ruleSwitch: 'string',
      ruleUndoBeginTime: 'string',
      ruleUndoEndTime: 'string',
      ruleUndoMode: 'string',
      timeZone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySchedruleOnDemandResponseBodyRuleStatus extends $tea.Model {
  net?: string;
  ruleSchedStatus?: string;
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

  /**
   * @summary Adds IP addresses to an Anti-DDoS Origin Enterprise instance.
   *
   * @param request AddIpRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AddIpResponse
   */
  async addIpWithOptions(request: AddIpRequest, runtime: $Util.RuntimeOptions): Promise<AddIpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ipList)) {
      query["IpList"] = request.ipList;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddIp",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddIpResponse>(await this.callApi(params, req, runtime), new AddIpResponse({}));
  }

  /**
   * @summary Adds IP addresses to an Anti-DDoS Origin Enterprise instance.
   *
   * @param request AddIpRequest
   * @return AddIpResponse
   */
  async addIp(request: AddIpRequest): Promise<AddIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addIpWithOptions(request, runtime);
  }

  /**
   * @summary 添加资源目录成员账号列表
   *
   * @param tmpReq AddRdMemberListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AddRdMemberListResponse
   */
  async addRdMemberListWithOptions(tmpReq: AddRdMemberListRequest, runtime: $Util.RuntimeOptions): Promise<AddRdMemberListResponse> {
    Util.validateModel(tmpReq);
    let request = new AddRdMemberListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.memberList)) {
      request.memberListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.memberList, "MemberList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.memberListShrink)) {
      query["MemberList"] = request.memberListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddRdMemberList",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddRdMemberListResponse>(await this.callApi(params, req, runtime), new AddRdMemberListResponse({}));
  }

  /**
   * @summary 添加资源目录成员账号列表
   *
   * @param request AddRdMemberListRequest
   * @return AddRdMemberListResponse
   */
  async addRdMemberList(request: AddRdMemberListRequest): Promise<AddRdMemberListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addRdMemberListWithOptions(request, runtime);
  }

  /**
   * @summary Associates an asset with an Anti-DDoS Origin instance of a paid edition.
   *
   * @param tmpReq AttachAssetGroupToInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AttachAssetGroupToInstanceResponse
   */
  async attachAssetGroupToInstanceWithOptions(tmpReq: AttachAssetGroupToInstanceRequest, runtime: $Util.RuntimeOptions): Promise<AttachAssetGroupToInstanceResponse> {
    Util.validateModel(tmpReq);
    let request = new AttachAssetGroupToInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.assetGroupList)) {
      request.assetGroupListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assetGroupList, "AssetGroupList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.assetGroupListShrink)) {
      query["AssetGroupList"] = request.assetGroupListShrink;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachAssetGroupToInstance",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachAssetGroupToInstanceResponse>(await this.callApi(params, req, runtime), new AttachAssetGroupToInstanceResponse({}));
  }

  /**
   * @summary Associates an asset with an Anti-DDoS Origin instance of a paid edition.
   *
   * @param request AttachAssetGroupToInstanceRequest
   * @return AttachAssetGroupToInstanceResponse
   */
  async attachAssetGroupToInstance(request: AttachAssetGroupToInstanceRequest): Promise<AttachAssetGroupToInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachAssetGroupToInstanceWithOptions(request, runtime);
  }

  /**
   * @summary Checks whether Anti-DDoS Origin is authorized to access Log Service.
   *
   * @param request CheckAccessLogAuthRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CheckAccessLogAuthResponse
   */
  async checkAccessLogAuthWithOptions(request: CheckAccessLogAuthRequest, runtime: $Util.RuntimeOptions): Promise<CheckAccessLogAuthResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckAccessLogAuth",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckAccessLogAuthResponse>(await this.callApi(params, req, runtime), new CheckAccessLogAuthResponse({}));
  }

  /**
   * @summary Checks whether Anti-DDoS Origin is authorized to access Log Service.
   *
   * @param request CheckAccessLogAuthRequest
   * @return CheckAccessLogAuthResponse
   */
  async checkAccessLogAuth(request: CheckAccessLogAuthRequest): Promise<CheckAccessLogAuthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkAccessLogAuthWithOptions(request, runtime);
  }

  /**
   * @summary Queries whether Anti-DDoS Origin is authorized to obtain information about the assets within the current Alibaba Cloud account.
   *
   * @description You can call the CheckGrant operation to query whether Anti-DDoS Origin is authorized to obtain information about the assets within the current Alibaba Cloud account.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request CheckGrantRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CheckGrantResponse
   */
  async checkGrantWithOptions(request: CheckGrantRequest, runtime: $Util.RuntimeOptions): Promise<CheckGrantResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckGrant",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckGrantResponse>(await this.callApi(params, req, runtime), new CheckGrantResponse({}));
  }

  /**
   * @summary Queries whether Anti-DDoS Origin is authorized to obtain information about the assets within the current Alibaba Cloud account.
   *
   * @description You can call the CheckGrant operation to query whether Anti-DDoS Origin is authorized to obtain information about the assets within the current Alibaba Cloud account.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request CheckGrantRequest
   * @return CheckGrantResponse
   */
  async checkGrant(request: CheckGrantRequest): Promise<CheckGrantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkGrantWithOptions(request, runtime);
  }

  /**
   * @param request ConfigSchedruleOnDemandRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ConfigSchedruleOnDemandResponse
   */
  async configSchedruleOnDemandWithOptions(request: ConfigSchedruleOnDemandRequest, runtime: $Util.RuntimeOptions): Promise<ConfigSchedruleOnDemandResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.ruleAction)) {
      query["RuleAction"] = request.ruleAction;
    }

    if (!Util.isUnset(request.ruleConditionCnt)) {
      query["RuleConditionCnt"] = request.ruleConditionCnt;
    }

    if (!Util.isUnset(request.ruleConditionKpps)) {
      query["RuleConditionKpps"] = request.ruleConditionKpps;
    }

    if (!Util.isUnset(request.ruleConditionMbps)) {
      query["RuleConditionMbps"] = request.ruleConditionMbps;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.ruleSwitch)) {
      query["RuleSwitch"] = request.ruleSwitch;
    }

    if (!Util.isUnset(request.ruleUndoBeginTime)) {
      query["RuleUndoBeginTime"] = request.ruleUndoBeginTime;
    }

    if (!Util.isUnset(request.ruleUndoEndTime)) {
      query["RuleUndoEndTime"] = request.ruleUndoEndTime;
    }

    if (!Util.isUnset(request.ruleUndoMode)) {
      query["RuleUndoMode"] = request.ruleUndoMode;
    }

    if (!Util.isUnset(request.timeZone)) {
      query["TimeZone"] = request.timeZone;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigSchedruleOnDemand",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigSchedruleOnDemandResponse>(await this.callApi(params, req, runtime), new ConfigSchedruleOnDemandResponse({}));
  }

  /**
   * @param request ConfigSchedruleOnDemandRequest
   * @return ConfigSchedruleOnDemandResponse
   */
  async configSchedruleOnDemand(request: ConfigSchedruleOnDemandRequest): Promise<ConfigSchedruleOnDemandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configSchedruleOnDemandWithOptions(request, runtime);
  }

  /**
   * @summary 创建策略
   *
   * @param request CreatePolicyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreatePolicyResponse
   */
  async createPolicyWithOptions(request: CreatePolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreatePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePolicy",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePolicyResponse>(await this.callApi(params, req, runtime), new CreatePolicyResponse({}));
  }

  /**
   * @summary 创建策略
   *
   * @param request CreatePolicyRequest
   * @return CreatePolicyResponse
   */
  async createPolicy(request: CreatePolicyRequest): Promise<CreatePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPolicyWithOptions(request, runtime);
  }

  /**
   * @summary Creates a scheduling rule for an on-demand instance.
   *
   * @param request CreateSchedruleOnDemandRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateSchedruleOnDemandResponse
   */
  async createSchedruleOnDemandWithOptions(request: CreateSchedruleOnDemandRequest, runtime: $Util.RuntimeOptions): Promise<CreateSchedruleOnDemandResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.ruleAction)) {
      query["RuleAction"] = request.ruleAction;
    }

    if (!Util.isUnset(request.ruleConditionCnt)) {
      query["RuleConditionCnt"] = request.ruleConditionCnt;
    }

    if (!Util.isUnset(request.ruleConditionKpps)) {
      query["RuleConditionKpps"] = request.ruleConditionKpps;
    }

    if (!Util.isUnset(request.ruleConditionMbps)) {
      query["RuleConditionMbps"] = request.ruleConditionMbps;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.ruleSwitch)) {
      query["RuleSwitch"] = request.ruleSwitch;
    }

    if (!Util.isUnset(request.ruleUndoBeginTime)) {
      query["RuleUndoBeginTime"] = request.ruleUndoBeginTime;
    }

    if (!Util.isUnset(request.ruleUndoEndTime)) {
      query["RuleUndoEndTime"] = request.ruleUndoEndTime;
    }

    if (!Util.isUnset(request.ruleUndoMode)) {
      query["RuleUndoMode"] = request.ruleUndoMode;
    }

    if (!Util.isUnset(request.timeZone)) {
      query["TimeZone"] = request.timeZone;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSchedruleOnDemand",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSchedruleOnDemandResponse>(await this.callApi(params, req, runtime), new CreateSchedruleOnDemandResponse({}));
  }

  /**
   * @summary Creates a scheduling rule for an on-demand instance.
   *
   * @param request CreateSchedruleOnDemandRequest
   * @return CreateSchedruleOnDemandResponse
   */
  async createSchedruleOnDemand(request: CreateSchedruleOnDemandRequest): Promise<CreateSchedruleOnDemandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSchedruleOnDemandWithOptions(request, runtime);
  }

  /**
   * @summary Deactivates blackhole filtering for a protected IP address.
   *
   * @description You can call the DeleteBlackhole operation to deactivate blackhole filtering for a protected IP address.
   * Before you call this operation, you can call the [DescribePackIpList](https://help.aliyun.com/document_detail/118701.html) operation to query the protection status of the IP addresses that are protected by your Anti-DDoS Origin instance. For example, you can query whether blackhole filtering is triggered for an IP address.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DeleteBlackholeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteBlackholeResponse
   */
  async deleteBlackholeWithOptions(request: DeleteBlackholeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBlackholeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBlackhole",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBlackholeResponse>(await this.callApi(params, req, runtime), new DeleteBlackholeResponse({}));
  }

  /**
   * @summary Deactivates blackhole filtering for a protected IP address.
   *
   * @description You can call the DeleteBlackhole operation to deactivate blackhole filtering for a protected IP address.
   * Before you call this operation, you can call the [DescribePackIpList](https://help.aliyun.com/document_detail/118701.html) operation to query the protection status of the IP addresses that are protected by your Anti-DDoS Origin instance. For example, you can query whether blackhole filtering is triggered for an IP address.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DeleteBlackholeRequest
   * @return DeleteBlackholeResponse
   */
  async deleteBlackhole(request: DeleteBlackholeRequest): Promise<DeleteBlackholeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBlackholeWithOptions(request, runtime);
  }

  /**
   * @summary Removes specific IP addresses from an Anti-DDoS Origin Enterprise instance.
   *
   * @description The Anti-DDoS Origin Enterprise instance no longer protects the IP addresses that are removed.
   *
   * @param request DeleteIpRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteIpResponse
   */
  async deleteIpWithOptions(request: DeleteIpRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ipList)) {
      query["IpList"] = request.ipList;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteIp",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteIpResponse>(await this.callApi(params, req, runtime), new DeleteIpResponse({}));
  }

  /**
   * @summary Removes specific IP addresses from an Anti-DDoS Origin Enterprise instance.
   *
   * @description The Anti-DDoS Origin Enterprise instance no longer protects the IP addresses that are removed.
   *
   * @param request DeleteIpRequest
   * @return DeleteIpResponse
   */
  async deleteIp(request: DeleteIpRequest): Promise<DeleteIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIpWithOptions(request, runtime);
  }

  /**
   * @summary 删除策略
   *
   * @param request DeletePolicyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeletePolicyResponse
   */
  async deletePolicyWithOptions(request: DeletePolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeletePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePolicy",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePolicyResponse>(await this.callApi(params, req, runtime), new DeletePolicyResponse({}));
  }

  /**
   * @summary 删除策略
   *
   * @param request DeletePolicyRequest
   * @return DeletePolicyResponse
   */
  async deletePolicy(request: DeletePolicyRequest): Promise<DeletePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePolicyWithOptions(request, runtime);
  }

  /**
   * @summary 删除资源目录成员账号列表
   *
   * @param tmpReq DeleteRdMemberListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteRdMemberListResponse
   */
  async deleteRdMemberListWithOptions(tmpReq: DeleteRdMemberListRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRdMemberListResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteRdMemberListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.memberList)) {
      request.memberListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.memberList, "MemberList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.memberListShrink)) {
      query["MemberList"] = request.memberListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRdMemberList",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRdMemberListResponse>(await this.callApi(params, req, runtime), new DeleteRdMemberListResponse({}));
  }

  /**
   * @summary 删除资源目录成员账号列表
   *
   * @param request DeleteRdMemberListRequest
   * @return DeleteRdMemberListResponse
   */
  async deleteRdMemberList(request: DeleteRdMemberListRequest): Promise<DeleteRdMemberListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRdMemberListWithOptions(request, runtime);
  }

  /**
   * @param request DeleteSchedruleOnDemandRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteSchedruleOnDemandResponse
   */
  async deleteSchedruleOnDemandWithOptions(request: DeleteSchedruleOnDemandRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSchedruleOnDemandResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSchedruleOnDemand",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSchedruleOnDemandResponse>(await this.callApi(params, req, runtime), new DeleteSchedruleOnDemandResponse({}));
  }

  /**
   * @param request DeleteSchedruleOnDemandRequest
   * @return DeleteSchedruleOnDemandResponse
   */
  async deleteSchedruleOnDemand(request: DeleteSchedruleOnDemandRequest): Promise<DeleteSchedruleOnDemandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSchedruleOnDemandWithOptions(request, runtime);
  }

  /**
   * @summary Queries the association between an asset and an Anti-DDoS Origin instance of a paid edition.
   *
   * @param request DescribeAssetGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeAssetGroupResponse
   */
  async describeAssetGroupWithOptions(request: DescribeAssetGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAssetGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAssetGroup",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAssetGroupResponse>(await this.callApi(params, req, runtime), new DescribeAssetGroupResponse({}));
  }

  /**
   * @summary Queries the association between an asset and an Anti-DDoS Origin instance of a paid edition.
   *
   * @param request DescribeAssetGroupRequest
   * @return DescribeAssetGroupResponse
   */
  async describeAssetGroup(request: DescribeAssetGroupRequest): Promise<DescribeAssetGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAssetGroupWithOptions(request, runtime);
  }

  /**
   * @summary Queries the association between an asset and an Anti-DDoS Origin instance of a paid edition.
   *
   * @param request DescribeAssetGroupToInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeAssetGroupToInstanceResponse
   */
  async describeAssetGroupToInstanceWithOptions(request: DescribeAssetGroupToInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAssetGroupToInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAssetGroupToInstance",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAssetGroupToInstanceResponse>(await this.callApi(params, req, runtime), new DescribeAssetGroupToInstanceResponse({}));
  }

  /**
   * @summary Queries the association between an asset and an Anti-DDoS Origin instance of a paid edition.
   *
   * @param request DescribeAssetGroupToInstanceRequest
   * @return DescribeAssetGroupToInstanceResponse
   */
  async describeAssetGroupToInstance(request: DescribeAssetGroupToInstanceRequest): Promise<DescribeAssetGroupToInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAssetGroupToInstanceWithOptions(request, runtime);
  }

  /**
   * @summary Queries the details about the DDoS attack events that occurred on a specific Anti-DDoS Origin instance.
   *
   * @description You can call the DescribeDdosEvent operation to query the details about the DDoS attack events that occurred on a specific Anti-DDoS Origin instance by page. The details include the start time, end time, attacked IP address, and status of each event.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribeDdosEventRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDdosEventResponse
   */
  async describeDdosEventWithOptions(request: DescribeDdosEventRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDdosEventResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDdosEvent",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDdosEventResponse>(await this.callApi(params, req, runtime), new DescribeDdosEventResponse({}));
  }

  /**
   * @summary Queries the details about the DDoS attack events that occurred on a specific Anti-DDoS Origin instance.
   *
   * @description You can call the DescribeDdosEvent operation to query the details about the DDoS attack events that occurred on a specific Anti-DDoS Origin instance by page. The details include the start time, end time, attacked IP address, and status of each event.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribeDdosEventRequest
   * @return DescribeDdosEventResponse
   */
  async describeDdosEvent(request: DescribeDdosEventRequest): Promise<DescribeDdosEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDdosEventWithOptions(request, runtime);
  }

  /**
   * @summary 查询账单
   *
   * @param request DescribeDdosOriginInstanceBillRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDdosOriginInstanceBillResponse
   */
  async describeDdosOriginInstanceBillWithOptions(request: DescribeDdosOriginInstanceBillRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDdosOriginInstanceBillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.isShowList)) {
      query["IsShowList"] = request.isShowList;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDdosOriginInstanceBill",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDdosOriginInstanceBillResponse>(await this.callApi(params, req, runtime), new DescribeDdosOriginInstanceBillResponse({}));
  }

  /**
   * @summary 查询账单
   *
   * @param request DescribeDdosOriginInstanceBillRequest
   * @return DescribeDdosOriginInstanceBillResponse
   */
  async describeDdosOriginInstanceBill(request: DescribeDdosOriginInstanceBillRequest): Promise<DescribeDdosOriginInstanceBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDdosOriginInstanceBillWithOptions(request, runtime);
  }

  /**
   * @summary Queries the number of assets that are in an abnormal state and the number of Anti-DDoS
   *                   Origin instances that are about to expire in a specific region. The assets can be
   *                   elastic IP addresses (EIPs). The assets can also be Elastic Compute Service (ECS)
   *                   instances or Server Load Balancer (SLB) instances that are assigned public IP addresses.
   *
   * @description ## Usage notes
   * You can call the DescribeExcpetionCount operation to query the number of assets that are in an abnormal state and the number of Anti-DDoS Origin instances that are about to expire in a specific region. For example, if blackhole filtering is triggered for an IP address, the IP address is in an abnormal state. An instance whose remaining validity period is less than seven days is considered as an instance that is about to expire.
   *
   * @param request DescribeExcpetionCountRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeExcpetionCountResponse
   */
  async describeExcpetionCountWithOptions(request: DescribeExcpetionCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExcpetionCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeExcpetionCount",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeExcpetionCountResponse>(await this.callApi(params, req, runtime), new DescribeExcpetionCountResponse({}));
  }

  /**
   * @summary Queries the number of assets that are in an abnormal state and the number of Anti-DDoS
   *                   Origin instances that are about to expire in a specific region. The assets can be
   *                   elastic IP addresses (EIPs). The assets can also be Elastic Compute Service (ECS)
   *                   instances or Server Load Balancer (SLB) instances that are assigned public IP addresses.
   *
   * @description ## Usage notes
   * You can call the DescribeExcpetionCount operation to query the number of assets that are in an abnormal state and the number of Anti-DDoS Origin instances that are about to expire in a specific region. For example, if blackhole filtering is triggered for an IP address, the IP address is in an abnormal state. An instance whose remaining validity period is less than seven days is considered as an instance that is about to expire.
   *
   * @param request DescribeExcpetionCountRequest
   * @return DescribeExcpetionCountResponse
   */
  async describeExcpetionCount(request: DescribeExcpetionCountRequest): Promise<DescribeExcpetionCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExcpetionCountWithOptions(request, runtime);
  }

  /**
   * @summary Queries the details of all Anti-DDoS Origin instances.
   *
   * @description You can call the DescribeInstanceList operation to query the details of all Anti-DDoS Origin instances within your Alibaba Cloud account by page. The details include the ID, validity period, and status of each instance.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribeInstanceListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeInstanceListResponse
   */
  async describeInstanceListWithOptions(request: DescribeInstanceListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIdList)) {
      query["InstanceIdList"] = request.instanceIdList;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.instanceTypeList)) {
      query["InstanceTypeList"] = request.instanceTypeList;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!Util.isUnset(request.orderby)) {
      query["Orderby"] = request.orderby;
    }

    if (!Util.isUnset(request.orderdire)) {
      query["Orderdire"] = request.orderdire;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceList",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceListResponse>(await this.callApi(params, req, runtime), new DescribeInstanceListResponse({}));
  }

  /**
   * @summary Queries the details of all Anti-DDoS Origin instances.
   *
   * @description You can call the DescribeInstanceList operation to query the details of all Anti-DDoS Origin instances within your Alibaba Cloud account by page. The details include the ID, validity period, and status of each instance.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribeInstanceListRequest
   * @return DescribeInstanceListResponse
   */
  async describeInstanceList(request: DescribeInstanceListRequest): Promise<DescribeInstanceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceListWithOptions(request, runtime);
  }

  /**
   * @param request DescribeInstanceSpecsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeInstanceSpecsResponse
   */
  async describeInstanceSpecsWithOptions(request: DescribeInstanceSpecsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceSpecsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIdList)) {
      query["InstanceIdList"] = request.instanceIdList;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceSpecs",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceSpecsResponse>(await this.callApi(params, req, runtime), new DescribeInstanceSpecsResponse({}));
  }

  /**
   * @param request DescribeInstanceSpecsRequest
   * @return DescribeInstanceSpecsResponse
   */
  async describeInstanceSpecs(request: DescribeInstanceSpecsRequest): Promise<DescribeInstanceSpecsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceSpecsWithOptions(request, runtime);
  }

  /**
   * @summary Call the DescribeOnDemandDdosEvent operation to query the DDoS events recorded for the IP address of the Anti-DDoS on-demand instance.
   *
   * @description >  Anti-DDoS Origin API operations are available for only Anti-DDoS Origin Enterprise users.
   *
   * @param request DescribeOnDemandDdosEventRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeOnDemandDdosEventResponse
   */
  async describeOnDemandDdosEventWithOptions(request: DescribeOnDemandDdosEventRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOnDemandDdosEventResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOnDemandDdosEvent",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOnDemandDdosEventResponse>(await this.callApi(params, req, runtime), new DescribeOnDemandDdosEventResponse({}));
  }

  /**
   * @summary Call the DescribeOnDemandDdosEvent operation to query the DDoS events recorded for the IP address of the Anti-DDoS on-demand instance.
   *
   * @description >  Anti-DDoS Origin API operations are available for only Anti-DDoS Origin Enterprise users.
   *
   * @param request DescribeOnDemandDdosEventRequest
   * @return DescribeOnDemandDdosEventResponse
   */
  async describeOnDemandDdosEvent(request: DescribeOnDemandDdosEventRequest): Promise<DescribeOnDemandDdosEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOnDemandDdosEventWithOptions(request, runtime);
  }

  /**
   * @param request DescribeOnDemandInstanceStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeOnDemandInstanceStatusResponse
   */
  async describeOnDemandInstanceStatusWithOptions(request: DescribeOnDemandInstanceStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOnDemandInstanceStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIdList)) {
      query["InstanceIdList"] = request.instanceIdList;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOnDemandInstanceStatus",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOnDemandInstanceStatusResponse>(await this.callApi(params, req, runtime), new DescribeOnDemandInstanceStatusResponse({}));
  }

  /**
   * @param request DescribeOnDemandInstanceStatusRequest
   * @return DescribeOnDemandInstanceStatusResponse
   */
  async describeOnDemandInstanceStatus(request: DescribeOnDemandInstanceStatusRequest): Promise<DescribeOnDemandInstanceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOnDemandInstanceStatusWithOptions(request, runtime);
  }

  /**
   * @summary The number of entries to return on each page.
   *
   * @description The start time. Operation logs that were generated after this time are queried.**** This value is a UNIX timestamp. Unit: milliseconds.
   *
   * @param request DescribeOpEntitiesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeOpEntitiesResponse
   */
  async describeOpEntitiesWithOptions(request: DescribeOpEntitiesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOpEntitiesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.orderDir)) {
      query["OrderDir"] = request.orderDir;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOpEntities",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOpEntitiesResponse>(await this.callApi(params, req, runtime), new DescribeOpEntitiesResponse({}));
  }

  /**
   * @summary The number of entries to return on each page.
   *
   * @description The start time. Operation logs that were generated after this time are queried.**** This value is a UNIX timestamp. Unit: milliseconds.
   *
   * @param request DescribeOpEntitiesRequest
   * @return DescribeOpEntitiesResponse
   */
  async describeOpEntities(request: DescribeOpEntitiesRequest): Promise<DescribeOpEntitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOpEntitiesWithOptions(request, runtime);
  }

  /**
   * @summary Queries the IP addresses that are protected by a specific Anti-DDoS Origin instance.
   *
   * @description You can call the DescribePackIpList operation to query the details about each IP address that is protected by a specific Anti-DDoS Origin instance by page. The details include the IP address and the type of the cloud asset to which the IP address belongs. The details also include the status of the IP address, such as whether blackhole filtering is triggered for the IP address.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribePackIpListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribePackIpListResponse
   */
  async describePackIpListWithOptions(request: DescribePackIpListRequest, runtime: $Util.RuntimeOptions): Promise<DescribePackIpListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productName)) {
      query["ProductName"] = request.productName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePackIpList",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePackIpListResponse>(await this.callApi(params, req, runtime), new DescribePackIpListResponse({}));
  }

  /**
   * @summary Queries the IP addresses that are protected by a specific Anti-DDoS Origin instance.
   *
   * @description You can call the DescribePackIpList operation to query the details about each IP address that is protected by a specific Anti-DDoS Origin instance by page. The details include the IP address and the type of the cloud asset to which the IP address belongs. The details also include the status of the IP address, such as whether blackhole filtering is triggered for the IP address.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribePackIpListRequest
   * @return DescribePackIpListResponse
   */
  async describePackIpList(request: DescribePackIpListRequest): Promise<DescribePackIpListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePackIpListWithOptions(request, runtime);
  }

  /**
   * @summary 查询资源目录成员账号列表
   *
   * @param request DescribeRdMemberListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeRdMemberListResponse
   */
  async describeRdMemberListWithOptions(request: DescribeRdMemberListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRdMemberListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceDirectoryId)) {
      query["ResourceDirectoryId"] = request.resourceDirectoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRdMemberList",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRdMemberListResponse>(await this.callApi(params, req, runtime), new DescribeRdMemberListResponse({}));
  }

  /**
   * @summary 查询资源目录成员账号列表
   *
   * @param request DescribeRdMemberListRequest
   * @return DescribeRdMemberListResponse
   */
  async describeRdMemberList(request: DescribeRdMemberListRequest): Promise<DescribeRdMemberListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRdMemberListWithOptions(request, runtime);
  }

  /**
   * @summary 查询RD状态
   *
   * @param request DescribeRdStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeRdStatusResponse
   */
  async describeRdStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeRdStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeRdStatus",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRdStatusResponse>(await this.callApi(params, req, runtime), new DescribeRdStatusResponse({}));
  }

  /**
   * @summary 查询RD状态
   *
   * @return DescribeRdStatusResponse
   */
  async describeRdStatus(): Promise<DescribeRdStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRdStatusWithOptions(runtime);
  }

  /**
   * @summary Queries the regions of cloud assets that are supported by an Anti-DDoS Origin instance.
   *
   * @param request DescribeRegionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  /**
   * @summary Queries the regions of cloud assets that are supported by an Anti-DDoS Origin instance.
   *
   * @param request DescribeRegionsRequest
   * @return DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * @summary Queries traffic statistics of an Anti-DDoS Origin instance within a specific time period.
   *
   * @description You can call the DescribeTraffic operation to query traffic statistics of an Anti-DDoS Origin instance within a specific time period.  
   * >  When you call this operation, you must configure the **InstanceId** parameter to specify the Anti-DDoS Origin instance whose traffic statistics you want to query.  
   * ## Limits
   * You can call this operation once per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribeTrafficRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeTrafficResponse
   */
  async describeTrafficWithOptions(request: DescribeTrafficRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTrafficResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.flowType)) {
      query["FlowType"] = request.flowType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.ipnet)) {
      query["Ipnet"] = request.ipnet;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTraffic",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTrafficResponse>(await this.callApi(params, req, runtime), new DescribeTrafficResponse({}));
  }

  /**
   * @summary Queries traffic statistics of an Anti-DDoS Origin instance within a specific time period.
   *
   * @description You can call the DescribeTraffic operation to query traffic statistics of an Anti-DDoS Origin instance within a specific time period.  
   * >  When you call this operation, you must configure the **InstanceId** parameter to specify the Anti-DDoS Origin instance whose traffic statistics you want to query.  
   * ## Limits
   * You can call this operation once per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DescribeTrafficRequest
   * @return DescribeTrafficResponse
   */
  async describeTraffic(request: DescribeTrafficRequest): Promise<DescribeTrafficResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTrafficWithOptions(request, runtime);
  }

  /**
   * @summary 策略解绑
   *
   * @param tmpReq DetachFromPolicyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DetachFromPolicyResponse
   */
  async detachFromPolicyWithOptions(tmpReq: DetachFromPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DetachFromPolicyResponse> {
    Util.validateModel(tmpReq);
    let request = new DetachFromPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.ipPortProtocolList)) {
      request.ipPortProtocolListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ipPortProtocolList, "IpPortProtocolList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.ipPortProtocolListShrink)) {
      query["IpPortProtocolList"] = request.ipPortProtocolListShrink;
    }

    if (!Util.isUnset(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachFromPolicy",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachFromPolicyResponse>(await this.callApi(params, req, runtime), new DetachFromPolicyResponse({}));
  }

  /**
   * @summary 策略解绑
   *
   * @param request DetachFromPolicyRequest
   * @return DetachFromPolicyResponse
   */
  async detachFromPolicy(request: DetachFromPolicyRequest): Promise<DetachFromPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachFromPolicyWithOptions(request, runtime);
  }

  /**
   * @summary Dissociates an asset from an Anti-DDoS Origin instance of a paid edition.
   *
   * @param tmpReq DettachAssetGroupToInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DettachAssetGroupToInstanceResponse
   */
  async dettachAssetGroupToInstanceWithOptions(tmpReq: DettachAssetGroupToInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DettachAssetGroupToInstanceResponse> {
    Util.validateModel(tmpReq);
    let request = new DettachAssetGroupToInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.assetGroupList)) {
      request.assetGroupListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assetGroupList, "AssetGroupList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.assetGroupListShrink)) {
      query["AssetGroupList"] = request.assetGroupListShrink;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DettachAssetGroupToInstance",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DettachAssetGroupToInstanceResponse>(await this.callApi(params, req, runtime), new DettachAssetGroupToInstanceResponse({}));
  }

  /**
   * @summary Dissociates an asset from an Anti-DDoS Origin instance of a paid edition.
   *
   * @param request DettachAssetGroupToInstanceRequest
   * @return DettachAssetGroupToInstanceResponse
   */
  async dettachAssetGroupToInstance(request: DettachAssetGroupToInstanceRequest): Promise<DettachAssetGroupToInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dettachAssetGroupToInstanceWithOptions(request, runtime);
  }

  /**
   * @summary Checks whether Log Service is activated.
   *
   * @param request GetSlsOpenStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetSlsOpenStatusResponse
   */
  async getSlsOpenStatusWithOptions(request: GetSlsOpenStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetSlsOpenStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSlsOpenStatus",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSlsOpenStatusResponse>(await this.callApi(params, req, runtime), new GetSlsOpenStatusResponse({}));
  }

  /**
   * @summary Checks whether Log Service is activated.
   *
   * @param request GetSlsOpenStatusRequest
   * @return GetSlsOpenStatusResponse
   */
  async getSlsOpenStatus(request: GetSlsOpenStatusRequest): Promise<GetSlsOpenStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSlsOpenStatusWithOptions(request, runtime);
  }

  /**
   * @summary Queries the Anti-DDoS Origin instances for which log analysis is enabled.
   *
   * @param request ListOpenedAccessLogInstancesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListOpenedAccessLogInstancesResponse
   */
  async listOpenedAccessLogInstancesWithOptions(request: ListOpenedAccessLogInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListOpenedAccessLogInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOpenedAccessLogInstances",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListOpenedAccessLogInstancesResponse>(await this.callApi(params, req, runtime), new ListOpenedAccessLogInstancesResponse({}));
  }

  /**
   * @summary Queries the Anti-DDoS Origin instances for which log analysis is enabled.
   *
   * @param request ListOpenedAccessLogInstancesRequest
   * @return ListOpenedAccessLogInstancesResponse
   */
  async listOpenedAccessLogInstances(request: ListOpenedAccessLogInstancesRequest): Promise<ListOpenedAccessLogInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOpenedAccessLogInstancesWithOptions(request, runtime);
  }

  /**
   * @summary 查询策略
   *
   * @param request ListPolicyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListPolicyResponse
   */
  async listPolicyWithOptions(request: ListPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ListPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPolicy",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPolicyResponse>(await this.callApi(params, req, runtime), new ListPolicyResponse({}));
  }

  /**
   * @summary 查询策略
   *
   * @param request ListPolicyRequest
   * @return ListPolicyResponse
   */
  async listPolicy(request: ListPolicyRequest): Promise<ListPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPolicyWithOptions(request, runtime);
  }

  /**
   * @summary 查询策略绑定
   *
   * @param tmpReq ListPolicyAttachmentRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListPolicyAttachmentResponse
   */
  async listPolicyAttachmentWithOptions(tmpReq: ListPolicyAttachmentRequest, runtime: $Util.RuntimeOptions): Promise<ListPolicyAttachmentResponse> {
    Util.validateModel(tmpReq);
    let request = new ListPolicyAttachmentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.ipPortProtocolList)) {
      request.ipPortProtocolListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ipPortProtocolList, "IpPortProtocolList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.ipPortProtocolListShrink)) {
      query["IpPortProtocolList"] = request.ipPortProtocolListShrink;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPolicyAttachment",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPolicyAttachmentResponse>(await this.callApi(params, req, runtime), new ListPolicyAttachmentResponse({}));
  }

  /**
   * @summary 查询策略绑定
   *
   * @param request ListPolicyAttachmentRequest
   * @return ListPolicyAttachmentResponse
   */
  async listPolicyAttachment(request: ListPolicyAttachmentRequest): Promise<ListPolicyAttachmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPolicyAttachmentWithOptions(request, runtime);
  }

  /**
   * @summary Queries all tags.
   *
   * @param request ListTagKeysRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTagKeysResponse
   */
  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListTagKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagKeys",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagKeysResponse>(await this.callApi(params, req, runtime), new ListTagKeysResponse({}));
  }

  /**
   * @summary Queries all tags.
   *
   * @param request ListTagKeysRequest
   * @return ListTagKeysResponse
   */
  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * @description You can call the ListTagResources operation to query the tags that are added to Anti-DDoS Origin instances at a time.
   *
   * @param request ListTagResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * @description You can call the ListTagResources operation to query the tags that are added to Anti-DDoS Origin instances at a time.
   *
   * @param request ListTagResourcesRequest
   * @return ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * @summary 修改策略
   *
   * @param tmpReq ModifyPolicyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyPolicyResponse
   */
  async modifyPolicyWithOptions(tmpReq: ModifyPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPolicyResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.content)) {
      request.contentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.content, "Content", "json");
    }

    let query = { };
    if (!Util.isUnset(request.actionType)) {
      query["ActionType"] = request.actionType;
    }

    if (!Util.isUnset(request.contentShrink)) {
      query["Content"] = request.contentShrink;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPolicy",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyPolicyResponse>(await this.callApi(params, req, runtime), new ModifyPolicyResponse({}));
  }

  /**
   * @summary 修改策略
   *
   * @param request ModifyPolicyRequest
   * @return ModifyPolicyResponse
   */
  async modifyPolicy(request: ModifyPolicyRequest): Promise<ModifyPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPolicyWithOptions(request, runtime);
  }

  /**
   * @summary 修改策略
   *
   * @param tmpReq ModifyPolicyContentRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyPolicyContentResponse
   */
  async modifyPolicyContentWithOptions(tmpReq: ModifyPolicyContentRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPolicyContentResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyPolicyContentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.content)) {
      request.contentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.content, "Content", "json");
    }

    let query = { };
    if (!Util.isUnset(request.contentShrink)) {
      query["Content"] = request.contentShrink;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPolicyContent",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyPolicyContentResponse>(await this.callApi(params, req, runtime), new ModifyPolicyContentResponse({}));
  }

  /**
   * @summary 修改策略
   *
   * @param request ModifyPolicyContentRequest
   * @return ModifyPolicyContentResponse
   */
  async modifyPolicyContent(request: ModifyPolicyContentRequest): Promise<ModifyPolicyContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPolicyContentWithOptions(request, runtime);
  }

  /**
   * @summary Adds remarks for a specific Anti-DDoS Origin instance.
   *
   * @description You can call the ModifyRemark operation to add remarks for a single Anti-DDoS Origin instance.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ModifyRemarkRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyRemarkResponse
   */
  async modifyRemarkWithOptions(request: ModifyRemarkRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRemarkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyRemark",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyRemarkResponse>(await this.callApi(params, req, runtime), new ModifyRemarkResponse({}));
  }

  /**
   * @summary Adds remarks for a specific Anti-DDoS Origin instance.
   *
   * @description You can call the ModifyRemark operation to add remarks for a single Anti-DDoS Origin instance.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ModifyRemarkRequest
   * @return ModifyRemarkResponse
   */
  async modifyRemark(request: ModifyRemarkRequest): Promise<ModifyRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRemarkWithOptions(request, runtime);
  }

  /**
   * @summary Queries the scheduling rule of an on-demand instance.
   *
   * @param request QuerySchedruleOnDemandRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QuerySchedruleOnDemandResponse
   */
  async querySchedruleOnDemandWithOptions(request: QuerySchedruleOnDemandRequest, runtime: $Util.RuntimeOptions): Promise<QuerySchedruleOnDemandResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySchedruleOnDemand",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySchedruleOnDemandResponse>(await this.callApi(params, req, runtime), new QuerySchedruleOnDemandResponse({}));
  }

  /**
   * @summary Queries the scheduling rule of an on-demand instance.
   *
   * @param request QuerySchedruleOnDemandRequest
   * @return QuerySchedruleOnDemandResponse
   */
  async querySchedruleOnDemand(request: QuerySchedruleOnDemandRequest): Promise<QuerySchedruleOnDemandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySchedruleOnDemandWithOptions(request, runtime);
  }

  /**
   * @summary 释放原生防护全局实例
   *
   * @param request ReleaseDdosOriginInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ReleaseDdosOriginInstanceResponse
   */
  async releaseDdosOriginInstanceWithOptions(request: ReleaseDdosOriginInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseDdosOriginInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseDdosOriginInstance",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseDdosOriginInstanceResponse>(await this.callApi(params, req, runtime), new ReleaseDdosOriginInstanceResponse({}));
  }

  /**
   * @summary 释放原生防护全局实例
   *
   * @param request ReleaseDdosOriginInstanceRequest
   * @return ReleaseDdosOriginInstanceResponse
   */
  async releaseDdosOriginInstance(request: ReleaseDdosOriginInstanceRequest): Promise<ReleaseDdosOriginInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseDdosOriginInstanceWithOptions(request, runtime);
  }

  /**
   * @param request SetInstanceModeOnDemandRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SetInstanceModeOnDemandResponse
   */
  async setInstanceModeOnDemandWithOptions(request: SetInstanceModeOnDemandRequest, runtime: $Util.RuntimeOptions): Promise<SetInstanceModeOnDemandResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIdList)) {
      query["InstanceIdList"] = request.instanceIdList;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetInstanceModeOnDemand",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetInstanceModeOnDemandResponse>(await this.callApi(params, req, runtime), new SetInstanceModeOnDemandResponse({}));
  }

  /**
   * @param request SetInstanceModeOnDemandRequest
   * @return SetInstanceModeOnDemandResponse
   */
  async setInstanceModeOnDemand(request: SetInstanceModeOnDemandRequest): Promise<SetInstanceModeOnDemandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setInstanceModeOnDemandWithOptions(request, runtime);
  }

  /**
   * @summary Adds tags to Anti-DDoS Origin instances.
   *
   * @description You can call the TagResources operation to add tags to Anti-DDoS Origin instances. 
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request TagResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * @summary Adds tags to Anti-DDoS Origin instances.
   *
   * @description You can call the TagResources operation to add tags to Anti-DDoS Origin instances. 
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request TagResourcesRequest
   * @return TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * @summary Removes tags from Anti-DDoS Origin Enterprise instances.
   *
   * @param request UntagResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
   * @summary Removes tags from Anti-DDoS Origin Enterprise instances.
   *
   * @param request UntagResourcesRequest
   * @return UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
