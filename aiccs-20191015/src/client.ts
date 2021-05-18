// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class SendHotlineHeartBeatRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  accountName?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      accountName: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendHotlineHeartBeatResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendHotlineHeartBeatResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SendHotlineHeartBeatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendHotlineHeartBeatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartChatWorkRequest extends $tea.Model {
  instanceId?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartChatWorkResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  data?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartChatWorkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartChatWorkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartChatWorkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HangUpDoubleCallRequest extends $tea.Model {
  instanceId?: string;
  acid?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      acid: 'Acid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      acid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HangUpDoubleCallResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HangUpDoubleCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: HangUpDoubleCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: HangUpDoubleCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAgentRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  accountName?: string;
  displayName?: string;
  skillGroupId?: number[];
  skillGroupIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
      displayName: 'DisplayName',
      skillGroupId: 'SkillGroupId',
      skillGroupIdList: 'SkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      accountName: 'string',
      displayName: 'string',
      skillGroupId: { 'type': 'array', 'itemType': 'number' },
      skillGroupIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAgentResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAgentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAgentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAgentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityRuleTagRequest extends $tea.Model {
  instanceId?: string;
  analysisTypes?: EditQualityRuleTagRequestAnalysisTypes[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      analysisTypes: 'AnalysisTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      analysisTypes: { 'type': 'array', 'itemType': EditQualityRuleTagRequestAnalysisTypes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityRuleTagResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityRuleTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EditQualityRuleTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EditQualityRuleTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineServiceVolumeRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  agentIds?: number[];
  depIds?: number[];
  groupIds?: number[];
  timeLatitudeType?: string;
  existAgentGrouping?: boolean;
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      agentIds: 'AgentIds',
      depIds: 'DepIds',
      groupIds: 'GroupIds',
      timeLatitudeType: 'TimeLatitudeType',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      agentIds: { 'type': 'array', 'itemType': 'number' },
      depIds: { 'type': 'array', 'itemType': 'number' },
      groupIds: { 'type': 'array', 'itemType': 'number' },
      timeLatitudeType: 'string',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineServiceVolumeShrinkRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  agentIdsShrink?: string;
  depIdsShrink?: string;
  groupIdsShrink?: string;
  timeLatitudeType?: string;
  existAgentGrouping?: boolean;
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      agentIdsShrink: 'AgentIds',
      depIdsShrink: 'DepIds',
      groupIdsShrink: 'GroupIds',
      timeLatitudeType: 'TimeLatitudeType',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      agentIdsShrink: 'string',
      depIdsShrink: 'string',
      groupIdsShrink: 'string',
      timeLatitudeType: 'string',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineServiceVolumeResponseBody extends $tea.Model {
  message?: string;
  code?: string;
  success?: string;
  data?: GetOnlineServiceVolumeResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      code: 'string',
      success: 'string',
      data: GetOnlineServiceVolumeResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineServiceVolumeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOnlineServiceVolumeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOnlineServiceVolumeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOutboundTaskRequest extends $tea.Model {
  outboundTaskId?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      outboundTaskId: 'OutboundTaskId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outboundTaskId: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOutboundTaskResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOutboundTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteOutboundTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteOutboundTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOuterAccountRequest extends $tea.Model {
  outerAccountId?: string;
  outerAccountType?: string;
  outerAccountName?: string;
  avatar?: string;
  realName?: string;
  outerDepartmentId?: string;
  outerGroupIds?: string;
  ext?: string;
  outerDepartmentType?: string;
  outerGroupType?: string;
  static names(): { [key: string]: string } {
    return {
      outerAccountId: 'OuterAccountId',
      outerAccountType: 'OuterAccountType',
      outerAccountName: 'OuterAccountName',
      avatar: 'Avatar',
      realName: 'RealName',
      outerDepartmentId: 'OuterDepartmentId',
      outerGroupIds: 'OuterGroupIds',
      ext: 'Ext',
      outerDepartmentType: 'OuterDepartmentType',
      outerGroupType: 'OuterGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outerAccountId: 'string',
      outerAccountType: 'string',
      outerAccountName: 'string',
      avatar: 'string',
      realName: 'string',
      outerDepartmentId: 'string',
      outerGroupIds: 'string',
      ext: 'string',
      outerDepartmentType: 'string',
      outerGroupType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOuterAccountResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOuterAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddOuterAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddOuterAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentByIdRequest extends $tea.Model {
  instanceId?: string;
  agentId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      agentId: 'AgentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      agentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentByIdResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetAgentByIdResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetAgentByIdResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAgentByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAgentByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleDetailRequest extends $tea.Model {
  instanceId?: string;
  qualityRuleId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      qualityRuleId: 'QualityRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      qualityRuleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleDetailResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetQualityRuleDetailResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetQualityRuleDetailResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetQualityRuleDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetQualityRuleDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectLogRequest extends $tea.Model {
  instanceId?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectLogResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetQualityProjectLogResponseBodyData[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': GetQualityProjectLogResponseBodyData },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetQualityProjectLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetQualityProjectLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordDetailRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  closeTimeEnd?: number;
  currentPage?: number;
  pageSize?: number;
  closeTimeStart?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      closeTimeEnd: 'CloseTimeEnd',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      closeTimeStart: 'CloseTimeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      closeTimeEnd: 'number',
      currentPage: 'number',
      pageSize: 'number',
      closeTimeStart: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordDetailResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  resultData?: ListHotlineRecordDetailResponseBodyResultData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      resultData: 'ResultData',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      resultData: ListHotlineRecordDetailResponseBodyResultData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListHotlineRecordDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListHotlineRecordDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineMessageLogRequest extends $tea.Model {
  instanceId?: string;
  acid?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      acid: 'Acid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      acid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineMessageLogResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: GetHotlineMessageLogResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: { 'type': 'array', 'itemType': GetHotlineMessageLogResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineMessageLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetHotlineMessageLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetHotlineMessageLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectListRequest extends $tea.Model {
  instanceId?: string;
  projectId?: number;
  projectName?: string;
  status?: number;
  pageNo?: number;
  pageSize?: number;
  checkFreqType?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      status: 'Status',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      checkFreqType: 'checkFreqType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      projectId: 'number',
      projectName: 'string',
      status: 'number',
      pageNo: 'number',
      pageSize: 'number',
      checkFreqType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetQualityProjectListResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetQualityProjectListResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetQualityProjectListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetQualityProjectListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOutboundTaskRequest extends $tea.Model {
  taskType?: number;
  taskName?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  startTime?: string;
  endTime?: string;
  retryTime?: number;
  retryInterval?: number;
  skillGroup?: number;
  ani?: string;
  groupName?: string;
  model?: number;
  departmentId?: number;
  extAttrs?: string;
  callInfos?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      taskType: 'TaskType',
      taskName: 'TaskName',
      description: 'Description',
      startDate: 'StartDate',
      endDate: 'EndDate',
      startTime: 'StartTime',
      endTime: 'EndTime',
      retryTime: 'RetryTime',
      retryInterval: 'RetryInterval',
      skillGroup: 'SkillGroup',
      ani: 'Ani',
      groupName: 'GroupName',
      model: 'Model',
      departmentId: 'DepartmentId',
      extAttrs: 'ExtAttrs',
      callInfos: 'CallInfos',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskType: 'number',
      taskName: 'string',
      description: 'string',
      startDate: 'string',
      endDate: 'string',
      startTime: 'string',
      endTime: 'string',
      retryTime: 'number',
      retryInterval: 'number',
      skillGroup: 'number',
      ani: 'string',
      groupName: 'string',
      model: 'number',
      departmentId: 'number',
      extAttrs: 'string',
      callInfos: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOutboundTaskResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOutboundTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateOutboundTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateOutboundTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineRuntimeInfoRequest extends $tea.Model {
  instanceId?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineRuntimeInfoResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineRuntimeInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetHotlineRuntimeInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetHotlineRuntimeInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeDoubleCallRequest extends $tea.Model {
  instanceId?: string;
  accountName?: string;
  servicerPhone?: string;
  memberPhone?: string;
  outboundCallNumber?: string;
  bizData?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      accountName: 'AccountName',
      servicerPhone: 'ServicerPhone',
      memberPhone: 'MemberPhone',
      outboundCallNumber: 'OutboundCallNumber',
      bizData: 'BizData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      accountName: 'string',
      servicerPhone: 'string',
      memberPhone: 'string',
      outboundCallNumber: 'string',
      bizData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeDoubleCallResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: MakeDoubleCallResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: MakeDoubleCallResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeDoubleCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MakeDoubleCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MakeDoubleCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupAgentStatusDetailsRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  depIds?: number[];
  groupIds?: number[];
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      groupIds: 'GroupIds',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      groupIds: { 'type': 'array', 'itemType': 'number' },
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupAgentStatusDetailsShrinkRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  depIdsShrink?: string;
  groupIdsShrink?: string;
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      groupIdsShrink: 'GroupIds',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      depIdsShrink: 'string',
      groupIdsShrink: 'string',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupAgentStatusDetailsResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  code?: string;
  success?: string;
  data?: GetSkillGroupAgentStatusDetailsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'string',
      data: GetSkillGroupAgentStatusDetailsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupAgentStatusDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSkillGroupAgentStatusDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSkillGroupAgentStatusDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentServiceStatusRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  agentIds?: number[];
  depIds?: number[];
  timeLatitudeType?: string;
  existDepartmentGrouping?: boolean;
  existAgentGrouping?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      agentIds: 'AgentIds',
      depIds: 'DepIds',
      timeLatitudeType: 'TimeLatitudeType',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existAgentGrouping: 'ExistAgentGrouping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      agentIds: { 'type': 'array', 'itemType': 'number' },
      depIds: { 'type': 'array', 'itemType': 'number' },
      timeLatitudeType: 'string',
      existDepartmentGrouping: 'boolean',
      existAgentGrouping: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentServiceStatusShrinkRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  agentIdsShrink?: string;
  depIdsShrink?: string;
  timeLatitudeType?: string;
  existDepartmentGrouping?: boolean;
  existAgentGrouping?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      agentIdsShrink: 'AgentIds',
      depIdsShrink: 'DepIds',
      timeLatitudeType: 'TimeLatitudeType',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existAgentGrouping: 'ExistAgentGrouping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      agentIdsShrink: 'string',
      depIdsShrink: 'string',
      timeLatitudeType: 'string',
      existDepartmentGrouping: 'boolean',
      existAgentGrouping: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentServiceStatusResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetAgentServiceStatusResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetAgentServiceStatusResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentServiceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAgentServiceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAgentServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNumLocationRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  phoneNum?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      phoneNum: 'PhoneNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      phoneNum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNumLocationResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNumLocationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetNumLocationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetNumLocationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleListRequest extends $tea.Model {
  instanceId?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetQualityRuleListResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetQualityRuleListResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetQualityRuleListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetQualityRuleListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundPhoneNumberRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundPhoneNumberResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': 'string' },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundPhoneNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOutboundPhoneNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOutboundPhoneNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentBySkillGroupIdRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  skillGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      skillGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentBySkillGroupIdResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListAgentBySkillGroupIdResponseBodyData[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListAgentBySkillGroupIdResponseBodyData },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentBySkillGroupIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAgentBySkillGroupIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAgentBySkillGroupIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HangupThirdCallRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  accountName?: string;
  callId?: string;
  jobId?: string;
  connectionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
      callId: 'CallId',
      jobId: 'JobId',
      connectionId: 'ConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      accountName: 'string',
      callId: 'string',
      jobId: 'string',
      connectionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HangupThirdCallResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HangupThirdCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: HangupThirdCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: HangupThirdCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartHotlineServiceRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartHotlineServiceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  success?: boolean;
  httpStatusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
      httpStatusCode: 'HttpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
      success: 'boolean',
      httpStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartHotlineServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartHotlineServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartHotlineServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetAgentResponseBodyData;
  code?: string;
  success?: boolean;
  httpStatusCode?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
      httpStatusCode: 'HttpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetAgentResponseBodyData,
      code: 'string',
      success: 'boolean',
      httpStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAgentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAgentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentIndexRealTimeRequest extends $tea.Model {
  instanceId?: string;
  pageSize?: number;
  currentPage?: number;
  depIds?: number[];
  groupIds?: number[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      groupIds: 'GroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageSize: 'number',
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      groupIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentIndexRealTimeResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetAgentIndexRealTimeResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetAgentIndexRealTimeResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentIndexRealTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAgentIndexRealTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAgentIndexRealTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineGroupDetailReportRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  startDate?: number;
  endDate?: number;
  instanceId?: string;
  depIds?: number[];
  groupIds?: number[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      depIds: 'DepIds',
      groupIds: 'GroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      startDate: 'number',
      endDate: 'number',
      instanceId: 'string',
      depIds: { 'type': 'array', 'itemType': 'number' },
      groupIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineGroupDetailReportResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetHotlineGroupDetailReportResponseBodyData;
  code?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetHotlineGroupDetailReportResponseBodyData,
      code: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineGroupDetailReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetHotlineGroupDetailReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetHotlineGroupDetailReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptPhoneNumRequest extends $tea.Model {
  instanceId?: string;
  phoneNum?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      phoneNum: 'PhoneNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      phoneNum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptPhoneNumResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptPhoneNumResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EncryptPhoneNumResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EncryptPhoneNumResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  httpStatusCode?: number;
  commodityInstances?: GetInstanceListResponseBodyCommodityInstances[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      httpStatusCode: 'HttpStatusCode',
      commodityInstances: 'CommodityInstances',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      httpStatusCode: 'number',
      commodityInstances: { 'type': 'array', 'itemType': GetInstanceListResponseBodyCommodityInstances },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectDetailRequest extends $tea.Model {
  instanceId?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectDetailResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetQualityProjectDetailResponseBodyData;
  code?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetQualityProjectDetailResponseBodyData,
      code: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetQualityProjectDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetQualityProjectDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCcoSmartCallOperateRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  prodCode?: string;
  callId?: string;
  command?: string;
  param?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      prodCode: 'ProdCode',
      callId: 'CallId',
      command: 'Command',
      param: 'Param',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      prodCode: 'string',
      callId: 'string',
      command: 'string',
      param: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCcoSmartCallOperateResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCcoSmartCallOperateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SendCcoSmartCallOperateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendCcoSmartCallOperateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnswerCallRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  accountName?: string;
  callId?: string;
  jobId?: string;
  connectionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
      callId: 'CallId',
      jobId: 'JobId',
      connectionId: 'ConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      accountName: 'string',
      callId: 'string',
      jobId: 'string',
      connectionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnswerCallResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AnswerCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AnswerCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AnswerCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMicroOutboundRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  prodCode?: string;
  accountType?: string;
  accountId?: string;
  commandCode?: string;
  callingNumber?: string;
  calledNumber?: string;
  extInfo?: string;
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      prodCode: 'ProdCode',
      accountType: 'AccountType',
      accountId: 'AccountId',
      commandCode: 'CommandCode',
      callingNumber: 'CallingNumber',
      calledNumber: 'CalledNumber',
      extInfo: 'ExtInfo',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      prodCode: 'string',
      accountType: 'string',
      accountId: 'string',
      commandCode: 'string',
      callingNumber: 'string',
      calledNumber: 'string',
      extInfo: 'string',
      appName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMicroOutboundResponseBody extends $tea.Model {
  invokeCreateTime?: string;
  requestId?: string;
  message?: string;
  invokeCmdId?: string;
  customerInfo?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      invokeCreateTime: 'InvokeCreateTime',
      requestId: 'RequestId',
      message: 'Message',
      invokeCmdId: 'InvokeCmdId',
      customerInfo: 'CustomerInfo',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeCreateTime: 'string',
      requestId: 'string',
      message: 'string',
      invokeCmdId: 'string',
      customerInfo: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMicroOutboundResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartMicroOutboundResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartMicroOutboundResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendHotlineServiceRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  accountName?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      accountName: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendHotlineServiceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendHotlineServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SuspendHotlineServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SuspendHotlineServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentStatisticsRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  agentIds?: number[];
  depIds?: number[];
  timeLatitudeType?: string;
  existDepartmentGrouping?: boolean;
  existAgentGrouping?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      agentIds: 'AgentIds',
      depIds: 'DepIds',
      timeLatitudeType: 'TimeLatitudeType',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existAgentGrouping: 'ExistAgentGrouping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      agentIds: { 'type': 'array', 'itemType': 'number' },
      depIds: { 'type': 'array', 'itemType': 'number' },
      timeLatitudeType: 'string',
      existDepartmentGrouping: 'boolean',
      existAgentGrouping: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentStatisticsShrinkRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  agentIdsShrink?: string;
  depIdsShrink?: string;
  timeLatitudeType?: string;
  existDepartmentGrouping?: boolean;
  existAgentGrouping?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      agentIdsShrink: 'AgentIds',
      depIdsShrink: 'DepIds',
      timeLatitudeType: 'TimeLatitudeType',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existAgentGrouping: 'ExistAgentGrouping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      agentIdsShrink: 'string',
      depIdsShrink: 'string',
      timeLatitudeType: 'string',
      existDepartmentGrouping: 'boolean',
      existAgentGrouping: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  code?: string;
  success?: string;
  data?: GetAgentStatisticsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'string',
      data: GetAgentStatisticsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAgentStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAgentStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOuterAccountRequest extends $tea.Model {
  outerAccountId?: string;
  outerAccountType?: string;
  outerAccountName?: string;
  avatar?: string;
  realName?: string;
  outerDepartmentId?: string;
  outerGroupIds?: string;
  ext?: string;
  outerGroupType?: string;
  outerDepartmentType?: string;
  static names(): { [key: string]: string } {
    return {
      outerAccountId: 'OuterAccountId',
      outerAccountType: 'OuterAccountType',
      outerAccountName: 'OuterAccountName',
      avatar: 'Avatar',
      realName: 'RealName',
      outerDepartmentId: 'OuterDepartmentId',
      outerGroupIds: 'OuterGroupIds',
      ext: 'Ext',
      outerGroupType: 'OuterGroupType',
      outerDepartmentType: 'OuterDepartmentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outerAccountId: 'string',
      outerAccountType: 'string',
      outerAccountName: 'string',
      avatar: 'string',
      realName: 'string',
      outerDepartmentId: 'string',
      outerGroupIds: 'string',
      ext: 'string',
      outerGroupType: 'string',
      outerDepartmentType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOuterAccountResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOuterAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateOuterAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateOuterAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineWaitingNumberRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineWaitingNumberResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: number;
  code?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'number',
      code: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineWaitingNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetHotlineWaitingNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetHotlineWaitingNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HoldCallRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  accountName?: string;
  callId?: string;
  jobId?: string;
  connectionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
      callId: 'CallId',
      jobId: 'JobId',
      connectionId: 'ConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      accountName: 'string',
      callId: 'string',
      jobId: 'string',
      connectionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HoldCallResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HoldCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: HoldCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: HoldCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSeatInformationRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  depIds?: number[];
  existDepartmentGrouping?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'startDate',
      endDate: 'endDate',
      pageSize: 'pageSize',
      currentPage: 'currentPage',
      depIds: 'depIds',
      existDepartmentGrouping: 'existDepartmentGrouping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      existDepartmentGrouping: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSeatInformationShrinkRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  depIdsShrink?: string;
  existDepartmentGrouping?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'startDate',
      endDate: 'endDate',
      pageSize: 'pageSize',
      currentPage: 'currentPage',
      depIdsShrink: 'depIds',
      existDepartmentGrouping: 'existDepartmentGrouping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      depIdsShrink: 'string',
      existDepartmentGrouping: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSeatInformationResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  code?: string;
  success?: string;
  data?: GetSeatInformationResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'string',
      data: GetSeatInformationResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSeatInformationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSeatInformationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSeatInformationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRtcTokenRequest extends $tea.Model {
  instanceId?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRtcTokenResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: GetRtcTokenResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: GetRtcTokenResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRtcTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRtcTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRtcTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupAndAgentStatusSummaryRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  depIds?: number[];
  groupIds?: number[];
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      groupIds: 'GroupIds',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      groupIds: { 'type': 'array', 'itemType': 'number' },
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupAndAgentStatusSummaryShrinkRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  depIdsShrink?: string;
  groupIdsShrink?: string;
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      groupIdsShrink: 'GroupIds',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      depIdsShrink: 'string',
      groupIdsShrink: 'string',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupAndAgentStatusSummaryResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  code?: string;
  success?: string;
  data?: GetSkillGroupAndAgentStatusSummaryResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'string',
      data: GetSkillGroupAndAgentStatusSummaryResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupAndAgentStatusSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSkillGroupAndAgentStatusSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSkillGroupAndAgentStatusSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordDataRequest extends $tea.Model {
  instanceId?: string;
  acid?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      acid: 'Acid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      acid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordDataResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetRecordDataResponseBodyData;
  code?: string;
  success?: boolean;
  httpStatusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
      httpStatusCode: 'HttpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetRecordDataResponseBodyData,
      code: 'string',
      success: 'boolean',
      httpStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRecordDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRecordDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupLatitudeStateRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  depIds?: number[];
  groupIds?: number[];
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      groupIds: 'GroupIds',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      groupIds: { 'type': 'array', 'itemType': 'number' },
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupLatitudeStateShrinkRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  depIdsShrink?: string;
  groupIdsShrink?: string;
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      groupIdsShrink: 'GroupIds',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      depIdsShrink: 'string',
      groupIdsShrink: 'string',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupLatitudeStateResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  code?: string;
  success?: string;
  data?: GetSkillGroupLatitudeStateResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'string',
      data: GetSkillGroupLatitudeStateResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupLatitudeStateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSkillGroupLatitudeStateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSkillGroupLatitudeStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityRuleRequest extends $tea.Model {
  instanceId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteQualityRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteQualityRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendOutboundTaskRequest extends $tea.Model {
  outboundTaskId?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      outboundTaskId: 'OutboundTaskId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outboundTaskId: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendOutboundTaskResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendOutboundTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SuspendOutboundTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SuspendOutboundTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineServiceStatisticsRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  agentIds?: number[];
  depIds?: number[];
  groupIds?: number[];
  timeLatitudeType?: string;
  existAgentGrouping?: boolean;
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      agentIds: 'AgentIds',
      depIds: 'DepIds',
      groupIds: 'GroupIds',
      timeLatitudeType: 'TimeLatitudeType',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      agentIds: { 'type': 'array', 'itemType': 'number' },
      depIds: { 'type': 'array', 'itemType': 'number' },
      groupIds: { 'type': 'array', 'itemType': 'number' },
      timeLatitudeType: 'string',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineServiceStatisticsShrinkRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  agentIdsShrink?: string;
  depIdsShrink?: string;
  groupIdsShrink?: string;
  timeLatitudeType?: string;
  existAgentGrouping?: boolean;
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      agentIdsShrink: 'AgentIds',
      depIdsShrink: 'DepIds',
      groupIdsShrink: 'GroupIds',
      timeLatitudeType: 'TimeLatitudeType',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      agentIdsShrink: 'string',
      depIdsShrink: 'string',
      groupIdsShrink: 'string',
      timeLatitudeType: 'string',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineServiceStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  code?: string;
  success?: string;
  data?: GetHotlineServiceStatisticsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'string',
      data: GetHotlineServiceStatisticsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineServiceStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetHotlineServiceStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetHotlineServiceStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityProjectRequest extends $tea.Model {
  instanceId?: string;
  projectId?: number;
  projectName?: string;
  checkFreqType?: number;
  projectVersion?: number;
  scopeType?: number;
  timeRangeStart?: string;
  timeRangeEnd?: string;
  analysisIds?: number[];
  depList?: number[];
  groupList?: number[];
  servicerList?: string[];
  channelTouchType?: number[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      checkFreqType: 'CheckFreqType',
      projectVersion: 'ProjectVersion',
      scopeType: 'ScopeType',
      timeRangeStart: 'TimeRangeStart',
      timeRangeEnd: 'TimeRangeEnd',
      analysisIds: 'AnalysisIds',
      depList: 'DepList',
      groupList: 'GroupList',
      servicerList: 'ServicerList',
      channelTouchType: 'ChannelTouchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      projectId: 'number',
      projectName: 'string',
      checkFreqType: 'number',
      projectVersion: 'number',
      scopeType: 'number',
      timeRangeStart: 'string',
      timeRangeEnd: 'string',
      analysisIds: { 'type': 'array', 'itemType': 'number' },
      depList: { 'type': 'array', 'itemType': 'number' },
      groupList: { 'type': 'array', 'itemType': 'number' },
      servicerList: { 'type': 'array', 'itemType': 'string' },
      channelTouchType: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityProjectResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: EditQualityProjectResponseBodyData[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': EditQualityProjectResponseBodyData },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EditQualityProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EditQualityProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOuterOrderedNumbersRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  prodCode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      prodCode: 'ProdCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      prodCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOuterOrderedNumbersResponseBody extends $tea.Model {
  numbers?: string[];
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      numbers: 'Numbers',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      numbers: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOuterOrderedNumbersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOuterOrderedNumbersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOuterOrderedNumbersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentBasisStatusRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  agentIds?: number[];
  depIds?: number[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      agentIds: 'AgentIds',
      depIds: 'DepIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      agentIds: { 'type': 'array', 'itemType': 'number' },
      depIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentBasisStatusShrinkRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  agentIdsShrink?: string;
  depIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      agentIdsShrink: 'AgentIds',
      depIdsShrink: 'DepIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      agentIdsShrink: 'string',
      depIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentBasisStatusResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  code?: string;
  success?: string;
  data?: GetAgentBasisStatusResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'string',
      data: GetAgentBasisStatusResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentBasisStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAgentBasisStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAgentBasisStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityResultRequest extends $tea.Model {
  instanceId?: string;
  pageNo?: number;
  pageSize?: number;
  touchStartTime?: string;
  touchEndTime?: string;
  channelType?: string;
  hitStatus?: number;
  groupIds?: number[];
  qualityRuleIds?: number[];
  projectIds?: number[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      touchStartTime: 'TouchStartTime',
      touchEndTime: 'TouchEndTime',
      channelType: 'ChannelType',
      hitStatus: 'HitStatus',
      groupIds: 'GroupIds',
      qualityRuleIds: 'QualityRuleIds',
      projectIds: 'ProjectIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      touchStartTime: 'string',
      touchEndTime: 'string',
      channelType: 'string',
      hitStatus: 'number',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      qualityRuleIds: { 'type': 'array', 'itemType': 'number' },
      projectIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityResultResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetQualityResultResponseBodyData;
  code?: string;
  channelTypeName?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      channelTypeName: 'ChannelTypeName',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetQualityResultResponseBodyData,
      code: 'string',
      channelTypeName: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetQualityResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetQualityResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexCurrentValueRequest extends $tea.Model {
  depIds?: string;
  groupIds?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      depIds: 'DepIds',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depIds: 'string',
      groupIds: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexCurrentValueResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: { [key: string]: any }[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexCurrentValueResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetIndexCurrentValueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetIndexCurrentValueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateWebSocketSignRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateWebSocketSignResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  success?: boolean;
  httpStatusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
      httpStatusCode: 'HttpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
      success: 'boolean',
      httpStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateWebSocketSignResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateWebSocketSignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateWebSocketSignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  accountName?: string;
  displayName?: string;
  skillGroupId?: number[];
  skillGroupIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
      displayName: 'DisplayName',
      skillGroupId: 'SkillGroupId',
      skillGroupIdList: 'SkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      accountName: 'string',
      displayName: 'string',
      skillGroupId: { 'type': 'array', 'itemType': 'number' },
      skillGroupIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: number;
  code?: string;
  success?: boolean;
  httpStatusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
      httpStatusCode: 'HttpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'number',
      code: 'string',
      success: 'boolean',
      httpStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAgentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAgentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailRequest extends $tea.Model {
  outboundTaskId?: string;
  statusList?: string;
  endReasonList?: string;
  skillGroup?: string;
  servicerName?: string;
  servicerId?: string;
  priorityList?: string;
  taskId?: number;
  ani?: string;
  dnis?: string;
  sid?: string;
  departmentIdList?: string;
  instanceId?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      outboundTaskId: 'OutboundTaskId',
      statusList: 'StatusList',
      endReasonList: 'EndReasonList',
      skillGroup: 'SkillGroup',
      servicerName: 'ServicerName',
      servicerId: 'ServicerId',
      priorityList: 'PriorityList',
      taskId: 'TaskId',
      ani: 'Ani',
      dnis: 'Dnis',
      sid: 'Sid',
      departmentIdList: 'DepartmentIdList',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outboundTaskId: 'string',
      statusList: 'string',
      endReasonList: 'string',
      skillGroup: 'string',
      servicerName: 'string',
      servicerId: 'string',
      priorityList: 'string',
      taskId: 'number',
      ani: 'string',
      dnis: 'string',
      sid: 'string',
      departmentIdList: 'string',
      instanceId: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: string;
  data?: QueryTaskDetailResponseBodyData;
  code?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'string',
      data: QueryTaskDetailResponseBodyData,
      code: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTaskDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTaskDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityRuleRequest extends $tea.Model {
  instanceId?: string;
  name?: string;
  ruleTag?: number;
  matchType?: number;
  qualityRuleId?: number;
  keyWords?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      ruleTag: 'RuleTag',
      matchType: 'MatchType',
      qualityRuleId: 'QualityRuleId',
      keyWords: 'KeyWords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      ruleTag: 'number',
      matchType: 'number',
      qualityRuleId: 'number',
      keyWords: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EditQualityRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EditQualityRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcuLvsIpRequest extends $tea.Model {
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

export class GetMcuLvsIpResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcuLvsIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMcuLvsIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMcuLvsIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepGroupTreeDataRequest extends $tea.Model {
  instanceId?: string;
  agentId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      agentId: 'AgentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      agentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepGroupTreeDataResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  code?: string;
  success?: string;
  data?: GetDepGroupTreeDataResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'string',
      data: { 'type': 'array', 'itemType': GetDepGroupTreeDataResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepGroupTreeDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDepGroupTreeDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDepGroupTreeDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAgentRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAgentResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  httpStatusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      httpStatusCode: 'HttpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
      httpStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAgentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAgentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAgentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerInfoRequest extends $tea.Model {
  instanceId?: string;
  memberId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      memberId: 'MemberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      memberId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerInfoResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  code?: string;
  success?: boolean;
  data?: GetCustomerInfoResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      data: GetCustomerInfoResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCustomerInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCustomerInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentDetailReportRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  startDate?: number;
  endDate?: number;
  instanceId?: string;
  depIds?: number[];
  groupIds?: number[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      depIds: 'DepIds',
      groupIds: 'GroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      startDate: 'number',
      endDate: 'number',
      instanceId: 'string',
      depIds: { 'type': 'array', 'itemType': 'number' },
      groupIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentDetailReportResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetHotlineAgentDetailReportResponseBodyData;
  code?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetHotlineAgentDetailReportResponseBodyData,
      code: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentDetailReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetHotlineAgentDetailReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetHotlineAgentDetailReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCcoSmartCallRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  prodCode?: string;
  calledShowNumber?: string;
  calledNumber?: string;
  voiceCode?: string;
  outId?: string;
  playTimes?: number;
  volume?: number;
  speed?: number;
  asrModelId?: string;
  asrBaseId?: string;
  asrAlsAmId?: string;
  asrVocabularyId?: string;
  recordFlag?: boolean;
  pauseTime?: number;
  muteTime?: number;
  actionCodeBreak?: boolean;
  dynamicId?: string;
  earlyMediaAsr?: boolean;
  voiceCodeParam?: string;
  sessionTimeout?: number;
  actionCodeTimeBreak?: number;
  ttsConf?: boolean;
  ttsStyle?: string;
  ttsVolume?: number;
  ttsSpeed?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      prodCode: 'ProdCode',
      calledShowNumber: 'CalledShowNumber',
      calledNumber: 'CalledNumber',
      voiceCode: 'VoiceCode',
      outId: 'OutId',
      playTimes: 'PlayTimes',
      volume: 'Volume',
      speed: 'Speed',
      asrModelId: 'AsrModelId',
      asrBaseId: 'AsrBaseId',
      asrAlsAmId: 'AsrAlsAmId',
      asrVocabularyId: 'AsrVocabularyId',
      recordFlag: 'RecordFlag',
      pauseTime: 'PauseTime',
      muteTime: 'MuteTime',
      actionCodeBreak: 'ActionCodeBreak',
      dynamicId: 'DynamicId',
      earlyMediaAsr: 'EarlyMediaAsr',
      voiceCodeParam: 'VoiceCodeParam',
      sessionTimeout: 'SessionTimeout',
      actionCodeTimeBreak: 'ActionCodeTimeBreak',
      ttsConf: 'TtsConf',
      ttsStyle: 'TtsStyle',
      ttsVolume: 'TtsVolume',
      ttsSpeed: 'TtsSpeed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      prodCode: 'string',
      calledShowNumber: 'string',
      calledNumber: 'string',
      voiceCode: 'string',
      outId: 'string',
      playTimes: 'number',
      volume: 'number',
      speed: 'number',
      asrModelId: 'string',
      asrBaseId: 'string',
      asrAlsAmId: 'string',
      asrVocabularyId: 'string',
      recordFlag: 'boolean',
      pauseTime: 'number',
      muteTime: 'number',
      actionCodeBreak: 'boolean',
      dynamicId: 'string',
      earlyMediaAsr: 'boolean',
      voiceCodeParam: 'string',
      sessionTimeout: 'number',
      actionCodeTimeBreak: 'number',
      ttsConf: 'boolean',
      ttsStyle: 'string',
      ttsVolume: 'number',
      ttsSpeed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCcoSmartCallResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCcoSmartCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SendCcoSmartCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendCcoSmartCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatRecordDetailRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  closeTimeEnd?: number;
  currentPage?: number;
  pageSize?: number;
  closeTimeStart?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      closeTimeEnd: 'CloseTimeEnd',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      closeTimeStart: 'CloseTimeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      closeTimeEnd: 'number',
      currentPage: 'number',
      pageSize: 'number',
      closeTimeStart: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatRecordDetailResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  resultData?: ListChatRecordDetailResponseBodyResultData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      resultData: 'ResultData',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      resultData: ListChatRecordDetailResponseBodyResultData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatRecordDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListChatRecordDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListChatRecordDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSkillGroupRequest extends $tea.Model {
  outerGroupId?: string;
  outerGroupName?: string;
  outerGroupType?: string;
  outerDepartmentId?: string;
  outerDepartmentType?: string;
  static names(): { [key: string]: string } {
    return {
      outerGroupId: 'OuterGroupId',
      outerGroupName: 'OuterGroupName',
      outerGroupType: 'OuterGroupType',
      outerDepartmentId: 'OuterDepartmentId',
      outerDepartmentType: 'OuterDepartmentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outerGroupId: 'string',
      outerGroupName: 'string',
      outerGroupType: 'string',
      outerDepartmentId: 'string',
      outerDepartmentType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSkillGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSkillGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HangupCallRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  accountName?: string;
  callId?: string;
  jobId?: string;
  connectionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
      callId: 'CallId',
      jobId: 'JobId',
      connectionId: 'ConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      accountName: 'string',
      callId: 'string',
      jobId: 'string',
      connectionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HangupCallResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HangupCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: HangupCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: HangupCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSkillGroupRequest extends $tea.Model {
  outerGroupType?: string;
  outerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      outerGroupType: 'OuterGroupType',
      outerGroupId: 'OuterGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outerGroupType: 'string',
      outerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSkillGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: boolean;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'boolean',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSkillGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityProjectRequest extends $tea.Model {
  projectName?: string;
  checkFreqType?: number;
  scopeType?: number;
  timeRangeStart?: string;
  timeRangeEnd?: string;
  instanceId?: string;
  channelTouchType?: number[];
  depList?: number[];
  groupList?: number[];
  servicerList?: string[];
  analysisIds?: number[];
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      checkFreqType: 'CheckFreqType',
      scopeType: 'ScopeType',
      timeRangeStart: 'TimeRangeStart',
      timeRangeEnd: 'TimeRangeEnd',
      instanceId: 'InstanceId',
      channelTouchType: 'ChannelTouchType',
      depList: 'DepList',
      groupList: 'GroupList',
      servicerList: 'ServicerList',
      analysisIds: 'AnalysisIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      checkFreqType: 'number',
      scopeType: 'number',
      timeRangeStart: 'string',
      timeRangeEnd: 'string',
      instanceId: 'string',
      channelTouchType: { 'type': 'array', 'itemType': 'number' },
      depList: { 'type': 'array', 'itemType': 'number' },
      groupList: { 'type': 'array', 'itemType': 'number' },
      servicerList: { 'type': 'array', 'itemType': 'string' },
      analysisIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityProjectResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: CreateQualityProjectResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: CreateQualityProjectResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateQualityProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateQualityProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkillGroupsRequest extends $tea.Model {
  instanceId?: string;
  pageNo?: number;
  pageSize?: number;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkillGroupsResponseBody extends $tea.Model {
  onePageSize?: number;
  totalPage?: number;
  requestId?: string;
  currentPage?: number;
  totalResults?: number;
  data?: QuerySkillGroupsResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      onePageSize: 'OnePageSize',
      totalPage: 'TotalPage',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      totalResults: 'TotalResults',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onePageSize: 'number',
      totalPage: 'number',
      requestId: 'string',
      currentPage: 'number',
      totalResults: 'number',
      data: { 'type': 'array', 'itemType': QuerySkillGroupsResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkillGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QuerySkillGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QuerySkillGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityRuleRequest extends $tea.Model {
  instanceId?: string;
  name?: string;
  ruleTag?: number;
  matchType?: number;
  keyWords?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      ruleTag: 'RuleTag',
      matchType: 'MatchType',
      keyWords: 'KeyWords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      ruleTag: 'number',
      matchType: 'number',
      keyWords: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateQualityRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateQualityRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  data?: ListRolesResponseBodyData[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      data: { 'type': 'array', 'itemType': ListRolesResponseBodyData },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRolesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRolesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineCallActionRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  accountName?: string;
  act?: number;
  fromSource?: string;
  biz?: string;
  acc?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
      act: 'Act',
      fromSource: 'FromSource',
      biz: 'Biz',
      acc: 'Acc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      accountName: 'string',
      act: 'number',
      fromSource: 'string',
      biz: 'string',
      acc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineCallActionResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetHotlineCallActionResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetHotlineCallActionResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineCallActionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetHotlineCallActionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetHotlineCallActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  channelType?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      channelType: 'ChannelType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      channelType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListSkillGroupResponseBodyData[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListSkillGroupResponseBodyData },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineSeatInformationRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  agentIds?: number[];
  depIds?: number[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      agentIds: 'AgentIds',
      depIds: 'DepIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      agentIds: { 'type': 'array', 'itemType': 'number' },
      depIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineSeatInformationShrinkRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  agentIdsShrink?: string;
  depIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      agentIdsShrink: 'AgentIds',
      depIdsShrink: 'DepIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      agentIdsShrink: 'string',
      depIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineSeatInformationResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  code?: string;
  success?: string;
  data?: GetOnlineSeatInformationResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'string',
      data: GetOnlineSeatInformationResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineSeatInformationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOnlineSeatInformationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOnlineSeatInformationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityProjectRequest extends $tea.Model {
  instanceId?: string;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityProjectResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteQualityProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteQualityProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTouchListRequest extends $tea.Model {
  instanceId?: string;
  firstTimeStart?: number;
  firstTimeEnd?: number;
  closeTimeStart?: number;
  closeTimeEnd?: number;
  touchId?: number[];
  channelId?: string[];
  channelType?: number[];
  touchType?: number[];
  memberId?: number[];
  memberName?: string[];
  servicerId?: number[];
  servicerName?: string[];
  queueId?: number[];
  evaluationStatus?: number[];
  evaluationLevel?: number[];
  evaluationScore?: number[];
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      firstTimeStart: 'FirstTimeStart',
      firstTimeEnd: 'FirstTimeEnd',
      closeTimeStart: 'CloseTimeStart',
      closeTimeEnd: 'CloseTimeEnd',
      touchId: 'TouchId',
      channelId: 'ChannelId',
      channelType: 'ChannelType',
      touchType: 'TouchType',
      memberId: 'MemberId',
      memberName: 'MemberName',
      servicerId: 'ServicerId',
      servicerName: 'ServicerName',
      queueId: 'QueueId',
      evaluationStatus: 'EvaluationStatus',
      evaluationLevel: 'EvaluationLevel',
      evaluationScore: 'EvaluationScore',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      firstTimeStart: 'number',
      firstTimeEnd: 'number',
      closeTimeStart: 'number',
      closeTimeEnd: 'number',
      touchId: { 'type': 'array', 'itemType': 'number' },
      channelId: { 'type': 'array', 'itemType': 'string' },
      channelType: { 'type': 'array', 'itemType': 'number' },
      touchType: { 'type': 'array', 'itemType': 'number' },
      memberId: { 'type': 'array', 'itemType': 'number' },
      memberName: { 'type': 'array', 'itemType': 'string' },
      servicerId: { 'type': 'array', 'itemType': 'number' },
      servicerName: { 'type': 'array', 'itemType': 'string' },
      queueId: { 'type': 'array', 'itemType': 'number' },
      evaluationStatus: { 'type': 'array', 'itemType': 'number' },
      evaluationLevel: { 'type': 'array', 'itemType': 'number' },
      evaluationScore: { 'type': 'array', 'itemType': 'number' },
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTouchListResponseBody extends $tea.Model {
  resultData?: QueryTouchListResponseBodyResultData;
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      resultData: 'ResultData',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultData: QueryTouchListResponseBodyResultData,
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTouchListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTouchListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTouchListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotlineInQueueRequest extends $tea.Model {
  outerGroupId?: string;
  outerGroupType?: string;
  static names(): { [key: string]: string } {
    return {
      outerGroupId: 'OuterGroupId',
      outerGroupType: 'OuterGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outerGroupId: 'string',
      outerGroupType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotlineInQueueResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotlineInQueueResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryHotlineInQueueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryHotlineInQueueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinishHotlineServiceRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinishHotlineServiceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  httpStatusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      httpStatusCode: 'HttpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
      httpStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinishHotlineServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FinishHotlineServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FinishHotlineServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundStrategiesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  prodCode?: string;
  buId?: number;
  keyword?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      prodCode: 'ProdCode',
      buId: 'BuId',
      keyword: 'Keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      prodCode: 'string',
      buId: 'number',
      keyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundStrategiesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  outboundStrategies?: ListOutboundStrategiesResponseBodyOutboundStrategies[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      outboundStrategies: 'OutboundStrategies',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      outboundStrategies: { 'type': 'array', 'itemType': ListOutboundStrategiesResponseBodyOutboundStrategies },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundStrategiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOutboundStrategiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOutboundStrategiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  callId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      callId: 'CallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      callId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListHotlineRecordResponseBodyData[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListHotlineRecordResponseBodyData },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListHotlineRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListHotlineRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeQualityProjectStatusRequest extends $tea.Model {
  instanceId?: string;
  status?: number;
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      status: 'Status',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      status: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeQualityProjectStatusResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeQualityProjectStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ChangeQualityProjectStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ChangeQualityProjectStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferCallToSkillGroupRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  accountName?: string;
  skillGroupId?: number;
  callId?: string;
  jobId?: string;
  connectionId?: string;
  holdConnectionId?: string;
  type?: number;
  isSingleTransfer?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
      skillGroupId: 'SkillGroupId',
      callId: 'CallId',
      jobId: 'JobId',
      connectionId: 'ConnectionId',
      holdConnectionId: 'HoldConnectionId',
      type: 'Type',
      isSingleTransfer: 'IsSingleTransfer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      accountName: 'string',
      skillGroupId: 'number',
      callId: 'string',
      jobId: 'string',
      connectionId: 'string',
      holdConnectionId: 'string',
      type: 'number',
      isSingleTransfer: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferCallToSkillGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferCallToSkillGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TransferCallToSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TransferCallToSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupServiceCapabilityRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  depIds?: number[];
  groupIds?: number[];
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      groupIds: 'GroupIds',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      groupIds: { 'type': 'array', 'itemType': 'number' },
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupServiceCapabilityShrinkRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  depIdsShrink?: string;
  groupIdsShrink?: string;
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      groupIdsShrink: 'GroupIds',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      depIdsShrink: 'string',
      groupIdsShrink: 'string',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupServiceCapabilityResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  code?: string;
  success?: string;
  data?: GetSkillGroupServiceCapabilityResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'string',
      data: GetSkillGroupServiceCapabilityResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupServiceCapabilityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSkillGroupServiceCapabilityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSkillGroupServiceCapabilityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSkillGroupRequest extends $tea.Model {
  instanceId?: string;
  skillGroupId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSkillGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveSkillGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCallV2Request extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  accountName?: string;
  caller?: string;
  callerType?: number;
  callee?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
      caller: 'Caller',
      callerType: 'CallerType',
      callee: 'Callee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      accountName: 'string',
      caller: 'string',
      callerType: 'number',
      callee: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCallV2ResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCallV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: StartCallV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartCallV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeChatAgentStatusRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  accountName?: string;
  method?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
      method: 'Method',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      accountName: 'string',
      method: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeChatAgentStatusResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  data?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeChatAgentStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ChangeChatAgentStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ChangeChatAgentStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordDataRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  prodCode?: string;
  accountType?: string;
  accountId?: string;
  acid?: string;
  secLevel?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      prodCode: 'ProdCode',
      accountType: 'AccountType',
      accountId: 'AccountId',
      acid: 'Acid',
      secLevel: 'SecLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      prodCode: 'string',
      accountType: 'string',
      accountId: 'string',
      acid: 'string',
      secLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordDataResponseBody extends $tea.Model {
  acid?: string;
  requestId?: string;
  message?: string;
  ossLink?: string;
  agentId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      requestId: 'RequestId',
      message: 'Message',
      ossLink: 'OssLink',
      agentId: 'AgentId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      requestId: 'string',
      message: 'string',
      ossLink: 'string',
      agentId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRecordDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRecordDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOuterAccountRequest extends $tea.Model {
  outerAccountId?: string;
  outerAccountType?: string;
  static names(): { [key: string]: string } {
    return {
      outerAccountId: 'OuterAccountId',
      outerAccountType: 'OuterAccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outerAccountId: 'string',
      outerAccountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOuterAccountResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: boolean;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'boolean',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOuterAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteOuterAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteOuterAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepartmentalLatitudeAgentStatusRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  depIds?: number[];
  existDepartmentGrouping?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      existDepartmentGrouping: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepartmentalLatitudeAgentStatusShrinkRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  depIdsShrink?: string;
  existDepartmentGrouping?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      depIdsShrink: 'string',
      existDepartmentGrouping: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepartmentalLatitudeAgentStatusResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetDepartmentalLatitudeAgentStatusResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetDepartmentalLatitudeAgentStatusResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepartmentalLatitudeAgentStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDepartmentalLatitudeAgentStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDepartmentalLatitudeAgentStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentDetailRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentDetailResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetHotlineAgentDetailResponseBodyData;
  code?: string;
  success?: boolean;
  httpStatusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
      httpStatusCode: 'HttpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetHotlineAgentDetailResponseBodyData,
      code: 'string',
      success: 'boolean',
      httpStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetHotlineAgentDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetHotlineAgentDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeCallRequest extends $tea.Model {
  outerAccountId?: string;
  outerAccountType?: string;
  commandCode?: string;
  callingNumber?: string;
  calledNumber?: string;
  extInfo?: string;
  static names(): { [key: string]: string } {
    return {
      outerAccountId: 'OuterAccountId',
      outerAccountType: 'OuterAccountType',
      commandCode: 'CommandCode',
      callingNumber: 'CallingNumber',
      calledNumber: 'CalledNumber',
      extInfo: 'ExtInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outerAccountId: 'string',
      outerAccountType: 'string',
      commandCode: 'string',
      callingNumber: 'string',
      calledNumber: 'string',
      extInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeCallResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MakeCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MakeCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchCallRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  accountName?: string;
  callId?: string;
  jobId?: string;
  connectionId?: string;
  holdConnectionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
      callId: 'CallId',
      jobId: 'JobId',
      connectionId: 'ConnectionId',
      holdConnectionId: 'HoldConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      accountName: 'string',
      callId: 'string',
      jobId: 'string',
      connectionId: 'string',
      holdConnectionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchCallResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FetchCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FetchCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentStatusRequest extends $tea.Model {
  instanceId?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentStatusResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  success?: boolean;
  httpStatusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
      httpStatusCode: 'HttpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
      success: 'boolean',
      httpStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetHotlineAgentStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetHotlineAgentStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCallRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  accountName?: string;
  caller?: string;
  callee?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
      caller: 'Caller',
      callee: 'Callee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      accountName: 'string',
      caller: 'string',
      callee: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCallResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleTagListRequest extends $tea.Model {
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

export class GetQualityRuleTagListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetQualityRuleTagListResponseBodyData[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': GetQualityRuleTagListResponseBodyData },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleTagListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetQualityRuleTagListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetQualityRuleTagListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutbounNumListRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutbounNumListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetOutbounNumListResponseBodyData;
  code?: string;
  success?: boolean;
  httpStatusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
      httpStatusCode: 'HttpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetOutbounNumListResponseBodyData,
      code: 'string',
      success: 'boolean',
      httpStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutbounNumListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOutbounNumListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOutbounNumListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateThirdSsoAgentRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  clientId?: string;
  accountId?: string;
  accountName?: string;
  displayName?: string;
  skillGroupIds?: number[];
  roleIds?: number[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      clientId: 'ClientId',
      accountId: 'AccountId',
      accountName: 'AccountName',
      displayName: 'DisplayName',
      skillGroupIds: 'SkillGroupIds',
      roleIds: 'RoleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      clientId: 'string',
      accountId: 'string',
      accountName: 'string',
      displayName: 'string',
      skillGroupIds: { 'type': 'array', 'itemType': 'number' },
      roleIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateThirdSsoAgentResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: number;
  data?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'number',
      data: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateThirdSsoAgentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateThirdSsoAgentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateThirdSsoAgentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupStatusTotalRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  agentIds?: number[];
  depIds?: number[];
  groupIds?: number[];
  timeLatitudeType?: string;
  existAgentGrouping?: boolean;
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      agentIds: 'AgentIds',
      depIds: 'DepIds',
      groupIds: 'GroupIds',
      timeLatitudeType: 'TimeLatitudeType',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      agentIds: { 'type': 'array', 'itemType': 'number' },
      depIds: { 'type': 'array', 'itemType': 'number' },
      groupIds: { 'type': 'array', 'itemType': 'number' },
      timeLatitudeType: 'string',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupStatusTotalShrinkRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  agentIdsShrink?: string;
  depIdsShrink?: string;
  groupIdsShrink?: string;
  timeLatitudeType?: string;
  existAgentGrouping?: boolean;
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      agentIdsShrink: 'AgentIds',
      depIdsShrink: 'DepIds',
      groupIdsShrink: 'GroupIds',
      timeLatitudeType: 'TimeLatitudeType',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      agentIdsShrink: 'string',
      depIdsShrink: 'string',
      groupIdsShrink: 'string',
      timeLatitudeType: 'string',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupStatusTotalResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  code?: string;
  success?: string;
  data?: GetSkillGroupStatusTotalResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'string',
      data: GetSkillGroupStatusTotalResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupStatusTotalResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSkillGroupStatusTotalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSkillGroupStatusTotalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateQualityProjectsRequest extends $tea.Model {
  projectName?: string;
  checkFreqType?: number;
  timeRangeStart?: string;
  timeRangeEnd?: string;
  analysisIds?: number[];
  instanceList?: string[];
  channelTouchType?: number[];
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      checkFreqType: 'CheckFreqType',
      timeRangeStart: 'TimeRangeStart',
      timeRangeEnd: 'TimeRangeEnd',
      analysisIds: 'AnalysisIds',
      instanceList: 'InstanceList',
      channelTouchType: 'ChannelTouchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      checkFreqType: 'number',
      timeRangeStart: 'string',
      timeRangeEnd: 'string',
      analysisIds: { 'type': 'array', 'itemType': 'number' },
      instanceList: { 'type': 'array', 'itemType': 'string' },
      channelTouchType: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateQualityProjectsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: BatchCreateQualityProjectsResponseBodyData[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': BatchCreateQualityProjectsResponseBodyData },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateQualityProjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchCreateQualityProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchCreateQualityProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertTaskDetailRequest extends $tea.Model {
  outboundTaskId?: number;
  callInfos?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      outboundTaskId: 'OutboundTaskId',
      callInfos: 'CallInfos',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outboundTaskId: 'number',
      callInfos: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertTaskDetailResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertTaskDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InsertTaskDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InsertTaskDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSkillGroupRequest extends $tea.Model {
  instanceId?: string;
  skillGroupId?: number;
  skillGroupName?: string;
  description?: string;
  displayName?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      description: 'Description',
      displayName: 'DisplayName',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupId: 'number',
      skillGroupName: 'string',
      description: 'string',
      displayName: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSkillGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSkillGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotlineSessionQueryRequest extends $tea.Model {
  instanceId?: string;
  acid?: string;
  callType?: number;
  calledNumber?: string;
  callingNumber?: string;
  groupId?: number;
  groupName?: string;
  memberId?: string;
  memberName?: string;
  queryEndTime?: number;
  queryStartTime?: number;
  requestId?: string;
  servicerName?: string;
  servicerId?: string;
  params?: string;
  pageSize?: number;
  pageNo?: number;
  callResult?: string;
  id?: string;
  acidList?: string[];
  callTypeList?: number[];
  groupIdList?: number[];
  callingNumberList?: string[];
  calledNumberList?: string[];
  memberIdList?: string[];
  servicerIdList?: string[];
  callResultList?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      acid: 'Acid',
      callType: 'CallType',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      groupId: 'GroupId',
      groupName: 'GroupName',
      memberId: 'MemberId',
      memberName: 'MemberName',
      queryEndTime: 'QueryEndTime',
      queryStartTime: 'QueryStartTime',
      requestId: 'RequestId',
      servicerName: 'ServicerName',
      servicerId: 'ServicerId',
      params: 'Params',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
      callResult: 'CallResult',
      id: 'Id',
      acidList: 'AcidList',
      callTypeList: 'CallTypeList',
      groupIdList: 'GroupIdList',
      callingNumberList: 'CallingNumberList',
      calledNumberList: 'CalledNumberList',
      memberIdList: 'MemberIdList',
      servicerIdList: 'ServicerIdList',
      callResultList: 'CallResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      acid: 'string',
      callType: 'number',
      calledNumber: 'string',
      callingNumber: 'string',
      groupId: 'number',
      groupName: 'string',
      memberId: 'string',
      memberName: 'string',
      queryEndTime: 'number',
      queryStartTime: 'number',
      requestId: 'string',
      servicerName: 'string',
      servicerId: 'string',
      params: 'string',
      pageSize: 'number',
      pageNo: 'number',
      callResult: 'string',
      id: 'string',
      acidList: { 'type': 'array', 'itemType': 'string' },
      callTypeList: { 'type': 'array', 'itemType': 'number' },
      groupIdList: { 'type': 'array', 'itemType': 'number' },
      callingNumberList: { 'type': 'array', 'itemType': 'string' },
      calledNumberList: { 'type': 'array', 'itemType': 'string' },
      memberIdList: { 'type': 'array', 'itemType': 'string' },
      servicerIdList: { 'type': 'array', 'itemType': 'string' },
      callResultList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotlineSessionQueryResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: HotlineSessionQueryResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: HotlineSessionQueryResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotlineSessionQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: HotlineSessionQueryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: HotlineSessionQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueInformationRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  depIds?: number[];
  groupIds?: number[];
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      groupIds: 'GroupIds',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      groupIds: { 'type': 'array', 'itemType': 'number' },
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueInformationShrinkRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  depIdsShrink?: string;
  groupIdsShrink?: string;
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      groupIdsShrink: 'GroupIds',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      depIdsShrink: 'string',
      groupIdsShrink: 'string',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueInformationResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  code?: string;
  success?: string;
  data?: GetQueueInformationResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'string',
      data: GetQueueInformationResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueInformationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetQueueInformationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetQueueInformationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupServiceStatusRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  agentIds?: number[];
  depIds?: number[];
  groupIds?: number[];
  timeLatitudeType?: string;
  existAgentGrouping?: boolean;
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  existRobotInstanceGrouping?: boolean;
  existChannelInstanceGrouping?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      agentIds: 'AgentIds',
      depIds: 'DepIds',
      groupIds: 'GroupIds',
      timeLatitudeType: 'TimeLatitudeType',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      existRobotInstanceGrouping: 'ExistRobotInstanceGrouping',
      existChannelInstanceGrouping: 'ExistChannelInstanceGrouping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      agentIds: { 'type': 'array', 'itemType': 'number' },
      depIds: { 'type': 'array', 'itemType': 'number' },
      groupIds: { 'type': 'array', 'itemType': 'number' },
      timeLatitudeType: 'string',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      existRobotInstanceGrouping: 'boolean',
      existChannelInstanceGrouping: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupServiceStatusShrinkRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  agentIdsShrink?: string;
  depIdsShrink?: string;
  groupIdsShrink?: string;
  timeLatitudeType?: string;
  existAgentGrouping?: boolean;
  existDepartmentGrouping?: boolean;
  existSkillGroupGrouping?: boolean;
  existRobotInstanceGrouping?: boolean;
  existChannelInstanceGrouping?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      agentIdsShrink: 'AgentIds',
      depIdsShrink: 'DepIds',
      groupIdsShrink: 'GroupIds',
      timeLatitudeType: 'TimeLatitudeType',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      existRobotInstanceGrouping: 'ExistRobotInstanceGrouping',
      existChannelInstanceGrouping: 'ExistChannelInstanceGrouping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      agentIdsShrink: 'string',
      depIdsShrink: 'string',
      groupIdsShrink: 'string',
      timeLatitudeType: 'string',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      existRobotInstanceGrouping: 'boolean',
      existChannelInstanceGrouping: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupServiceStatusResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  code?: string;
  success?: string;
  data?: GetSkillGroupServiceStatusResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'string',
      data: GetSkillGroupServiceStatusResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupServiceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSkillGroupServiceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSkillGroupServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDetailReportRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  agentIds?: number[];
  depIds?: number[];
  timeLatitudeType?: string;
  existAgentGrouping?: boolean;
  existDepartmentGrouping?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      agentIds: 'AgentIds',
      depIds: 'DepIds',
      timeLatitudeType: 'TimeLatitudeType',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      agentIds: { 'type': 'array', 'itemType': 'number' },
      depIds: { 'type': 'array', 'itemType': 'number' },
      timeLatitudeType: 'string',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDetailReportShrinkRequest extends $tea.Model {
  instanceId?: string;
  startDate?: number;
  endDate?: number;
  pageSize?: number;
  currentPage?: number;
  agentIdsShrink?: string;
  depIdsShrink?: string;
  timeLatitudeType?: string;
  existAgentGrouping?: boolean;
  existDepartmentGrouping?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      agentIdsShrink: 'AgentIds',
      depIdsShrink: 'DepIds',
      timeLatitudeType: 'TimeLatitudeType',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startDate: 'number',
      endDate: 'number',
      pageSize: 'number',
      currentPage: 'number',
      agentIdsShrink: 'string',
      depIdsShrink: 'string',
      timeLatitudeType: 'string',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDetailReportResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  code?: string;
  success?: string;
  data?: GetAgentDetailReportResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'string',
      data: GetAgentDetailReportResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDetailReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAgentDetailReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAgentDetailReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTicketsRequest extends $tea.Model {
  instanceId?: string;
  caseId?: number;
  caseType?: number;
  caseStatus?: number;
  srType?: number;
  taskStatus?: number;
  channelId?: string;
  channelType?: number;
  touchId?: number;
  dealId?: number;
  extra?: { [key: string]: any };
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      caseId: 'CaseId',
      caseType: 'CaseType',
      caseStatus: 'CaseStatus',
      srType: 'SrType',
      taskStatus: 'TaskStatus',
      channelId: 'ChannelId',
      channelType: 'ChannelType',
      touchId: 'TouchId',
      dealId: 'DealId',
      extra: 'Extra',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      caseId: 'number',
      caseType: 'number',
      caseStatus: 'number',
      srType: 'number',
      taskStatus: 'number',
      channelId: 'string',
      channelType: 'number',
      touchId: 'number',
      dealId: 'number',
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTicketsShrinkRequest extends $tea.Model {
  instanceId?: string;
  caseId?: number;
  caseType?: number;
  caseStatus?: number;
  srType?: number;
  taskStatus?: number;
  channelId?: string;
  channelType?: number;
  touchId?: number;
  dealId?: number;
  extraShrink?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      caseId: 'CaseId',
      caseType: 'CaseType',
      caseStatus: 'CaseStatus',
      srType: 'SrType',
      taskStatus: 'TaskStatus',
      channelId: 'ChannelId',
      channelType: 'ChannelType',
      touchId: 'TouchId',
      dealId: 'DealId',
      extraShrink: 'Extra',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      caseId: 'number',
      caseType: 'number',
      caseStatus: 'number',
      srType: 'number',
      taskStatus: 'number',
      channelId: 'string',
      channelType: 'number',
      touchId: 'number',
      dealId: 'number',
      extraShrink: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTicketsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTicketsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTicketsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTicketsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOutboundTaskRequest extends $tea.Model {
  taskId?: number;
  taskType?: number;
  taskName?: string;
  startDate?: string;
  endDate?: string;
  startTime?: string;
  endTime?: string;
  skillGroup?: number;
  ani?: string;
  status?: string;
  groupName?: string;
  departmentId?: string;
  instanceId?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      taskType: 'TaskType',
      taskName: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      startTime: 'StartTime',
      endTime: 'EndTime',
      skillGroup: 'SkillGroup',
      ani: 'Ani',
      status: 'Status',
      groupName: 'GroupName',
      departmentId: 'DepartmentId',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
      taskType: 'number',
      taskName: 'string',
      startDate: 'string',
      endDate: 'string',
      startTime: 'string',
      endTime: 'string',
      skillGroup: 'number',
      ani: 'string',
      status: 'string',
      groupName: 'string',
      departmentId: 'string',
      instanceId: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOutboundTaskResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  httpStatusCode?: string;
  data?: QueryOutboundTaskResponseBodyData;
  code?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'string',
      data: QueryOutboundTaskResponseBodyData,
      code: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOutboundTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryOutboundTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryOutboundTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinThirdCallRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  accountName?: string;
  callId?: string;
  jobId?: string;
  connectionId?: string;
  holdConnectionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
      callId: 'CallId',
      jobId: 'JobId',
      connectionId: 'ConnectionId',
      holdConnectionId: 'HoldConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      accountName: 'string',
      callId: 'string',
      jobId: 'string',
      connectionId: 'string',
      holdConnectionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinThirdCallResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinThirdCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: JoinThirdCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: JoinThirdCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillGroupRequest extends $tea.Model {
  instanceId?: string;
  skillGroupName?: string;
  description?: string;
  displayName?: string;
  channelType?: number;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupName: 'SkillGroupName',
      description: 'Description',
      displayName: 'DisplayName',
      channelType: 'ChannelType',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      skillGroupName: 'string',
      description: 'string',
      displayName: 'string',
      channelType: 'number',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSkillGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSkillGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartOutboundTaskRequest extends $tea.Model {
  outboundTaskId?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      outboundTaskId: 'OutboundTaskId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outboundTaskId: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartOutboundTaskResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartOutboundTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RestartOutboundTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestartOutboundTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityRuleTagRequestAnalysisTypes extends $tea.Model {
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineServiceVolumeResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  totalNum?: number;
  rows?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      rows: 'Rows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      rows: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentByIdResponseBodyData extends $tea.Model {
  showName?: string;
  foreignKey?: string;
  servicerType?: number;
  realName?: string;
  createUserName?: string;
  agentId?: number;
  foreignNick?: string;
  static names(): { [key: string]: string } {
    return {
      showName: 'ShowName',
      foreignKey: 'ForeignKey',
      servicerType: 'ServicerType',
      realName: 'RealName',
      createUserName: 'CreateUserName',
      agentId: 'AgentId',
      foreignNick: 'ForeignNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      showName: 'string',
      foreignKey: 'string',
      servicerType: 'number',
      realName: 'string',
      createUserName: 'string',
      agentId: 'number',
      foreignNick: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleDetailResponseBodyData extends $tea.Model {
  ruleTag?: number;
  keyWords?: string[];
  matchType?: number;
  name?: string;
  ruleCreateTime?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      ruleTag: 'RuleTag',
      keyWords: 'KeyWords',
      matchType: 'MatchType',
      name: 'Name',
      ruleCreateTime: 'RuleCreateTime',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleTag: 'number',
      keyWords: { 'type': 'array', 'itemType': 'string' },
      matchType: 'number',
      name: 'string',
      ruleCreateTime: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectLogResponseBodyData extends $tea.Model {
  actionType?: string;
  actionData?: string;
  projectId?: number;
  projectCreateTime?: string;
  actionTime?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      actionData: 'ActionData',
      projectId: 'ProjectId',
      projectCreateTime: 'ProjectCreateTime',
      actionTime: 'ActionTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      actionData: 'string',
      projectId: 'number',
      projectCreateTime: 'string',
      actionTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordDetailResponseBodyResultDataData extends $tea.Model {
  servicerName?: string;
  startTime?: number;
  endTime?: number;
  ossUrl?: string;
  static names(): { [key: string]: string } {
    return {
      servicerName: 'ServicerName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      ossUrl: 'OssUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      servicerName: 'string',
      startTime: 'number',
      endTime: 'number',
      ossUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordDetailResponseBodyResultData extends $tea.Model {
  currentPage?: number;
  totalResults?: number;
  totalPage?: number;
  onePageSize?: number;
  data?: ListHotlineRecordDetailResponseBodyResultDataData[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      totalResults: 'TotalResults',
      totalPage: 'TotalPage',
      onePageSize: 'OnePageSize',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      totalResults: 'number',
      totalPage: 'number',
      onePageSize: 'number',
      data: { 'type': 'array', 'itemType': ListHotlineRecordDetailResponseBodyResultDataData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineMessageLogResponseBodyData extends $tea.Model {
  acid?: string;
  senderType?: number;
  startTime?: number;
  endTime?: number;
  mid?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      senderType: 'SenderType',
      startTime: 'StartTime',
      endTime: 'EndTime',
      mid: 'Mid',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      senderType: 'number',
      startTime: 'number',
      endTime: 'number',
      mid: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectListResponseBodyDataQualityProjectList extends $tea.Model {
  status?: number;
  qualityType?: number;
  qualityRuleIds?: number[];
  createTime?: string;
  projectName?: string;
  checkFreqType?: number;
  depList?: number[];
  servicerList?: number[];
  version?: number;
  groupList?: number[];
  id?: number;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      qualityType: 'QualityType',
      qualityRuleIds: 'QualityRuleIds',
      createTime: 'CreateTime',
      projectName: 'ProjectName',
      checkFreqType: 'CheckFreqType',
      depList: 'DepList',
      servicerList: 'ServicerList',
      version: 'Version',
      groupList: 'GroupList',
      id: 'Id',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      qualityType: 'number',
      qualityRuleIds: { 'type': 'array', 'itemType': 'number' },
      createTime: 'string',
      projectName: 'string',
      checkFreqType: 'number',
      depList: { 'type': 'array', 'itemType': 'number' },
      servicerList: { 'type': 'array', 'itemType': 'number' },
      version: 'number',
      groupList: { 'type': 'array', 'itemType': 'number' },
      id: 'number',
      modifyTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectListResponseBodyData extends $tea.Model {
  qualityProjectList?: GetQualityProjectListResponseBodyDataQualityProjectList[];
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      qualityProjectList: 'QualityProjectList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityProjectList: { 'type': 'array', 'itemType': GetQualityProjectListResponseBodyDataQualityProjectList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeDoubleCallResponseBodyData extends $tea.Model {
  acid?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupAgentStatusDetailsResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  totalNum?: number;
  rows?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      rows: 'Rows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      rows: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentServiceStatusResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  totalNum?: number;
  rows?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      rows: 'Rows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      rows: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleListResponseBodyDataQualityRuleList extends $tea.Model {
  ruleTag?: number;
  keyWords?: string[];
  matchType?: number;
  name?: string;
  ruleCreateTime?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      ruleTag: 'RuleTag',
      keyWords: 'KeyWords',
      matchType: 'MatchType',
      name: 'Name',
      ruleCreateTime: 'RuleCreateTime',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleTag: 'number',
      keyWords: { 'type': 'array', 'itemType': 'string' },
      matchType: 'number',
      name: 'string',
      ruleCreateTime: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleListResponseBodyData extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  total?: number;
  qualityRuleList?: GetQualityRuleListResponseBodyDataQualityRuleList[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
      qualityRuleList: 'QualityRuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
      qualityRuleList: { 'type': 'array', 'itemType': GetQualityRuleListResponseBodyDataQualityRuleList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentBySkillGroupIdResponseBodyData extends $tea.Model {
  status?: number;
  displayName?: string;
  agentId?: number;
  accountName?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      displayName: 'DisplayName',
      agentId: 'AgentId',
      accountName: 'AccountName',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      displayName: 'string',
      agentId: 'number',
      accountName: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentResponseBodyDataGroupList extends $tea.Model {
  displayName?: string;
  description?: string;
  channelType?: number;
  skillGroupId?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      description: 'Description',
      channelType: 'ChannelType',
      skillGroupId: 'SkillGroupId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      description: 'string',
      channelType: 'number',
      skillGroupId: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentResponseBodyData extends $tea.Model {
  status?: number;
  displayName?: string;
  agentId?: number;
  groupList?: GetAgentResponseBodyDataGroupList[];
  accountName?: string;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      displayName: 'DisplayName',
      agentId: 'AgentId',
      groupList: 'GroupList',
      accountName: 'AccountName',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      displayName: 'string',
      agentId: 'number',
      groupList: { 'type': 'array', 'itemType': GetAgentResponseBodyDataGroupList },
      accountName: 'string',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentIndexRealTimeResponseBodyDataColumns extends $tea.Model {
  key?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentIndexRealTimeResponseBodyData extends $tea.Model {
  rows?: { [key: string]: any }[];
  pageSize?: number;
  total?: number;
  columns?: GetAgentIndexRealTimeResponseBodyDataColumns[];
  page?: number;
  static names(): { [key: string]: string } {
    return {
      rows: 'Rows',
      pageSize: 'PageSize',
      total: 'Total',
      columns: 'Columns',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rows: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      pageSize: 'number',
      total: 'number',
      columns: { 'type': 'array', 'itemType': GetAgentIndexRealTimeResponseBodyDataColumns },
      page: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineGroupDetailReportResponseBodyDataColumns extends $tea.Model {
  key?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineGroupDetailReportResponseBodyData extends $tea.Model {
  rows?: { [key: string]: any }[];
  pageSize?: number;
  total?: number;
  columns?: GetHotlineGroupDetailReportResponseBodyDataColumns[];
  page?: number;
  static names(): { [key: string]: string } {
    return {
      rows: 'Rows',
      pageSize: 'PageSize',
      total: 'Total',
      columns: 'Columns',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rows: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      pageSize: 'number',
      total: 'number',
      columns: { 'type': 'array', 'itemType': GetHotlineGroupDetailReportResponseBodyDataColumns },
      page: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceListResponseBodyCommodityInstances extends $tea.Model {
  instanceId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectDetailResponseBodyData extends $tea.Model {
  status?: number;
  qualityType?: number;
  qualityRuleIds?: number[];
  createTime?: string;
  projectName?: string;
  checkFreqType?: number;
  depList?: number[];
  servicerList?: number[];
  version?: number;
  groupList?: number[];
  id?: number;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      qualityType: 'QualityType',
      qualityRuleIds: 'QualityRuleIds',
      createTime: 'CreateTime',
      projectName: 'ProjectName',
      checkFreqType: 'CheckFreqType',
      depList: 'DepList',
      servicerList: 'ServicerList',
      version: 'Version',
      groupList: 'GroupList',
      id: 'Id',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      qualityType: 'number',
      qualityRuleIds: { 'type': 'array', 'itemType': 'number' },
      createTime: 'string',
      projectName: 'string',
      checkFreqType: 'number',
      depList: { 'type': 'array', 'itemType': 'number' },
      servicerList: { 'type': 'array', 'itemType': 'number' },
      version: 'number',
      groupList: { 'type': 'array', 'itemType': 'number' },
      id: 'number',
      modifyTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentStatisticsResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  totalNum?: number;
  rows?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      rows: 'Rows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      rows: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSeatInformationResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  totalNum?: number;
  rowr?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      rowr: 'Rowr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      rowr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRtcTokenResponseBodyData extends $tea.Model {
  token?: string;
  rtcId?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      token: 'Token',
      rtcId: 'RtcId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
      rtcId: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupAndAgentStatusSummaryResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  totalNum?: number;
  rows?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      rows: 'Rows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      rows: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecordDataResponseBodyData extends $tea.Model {
  ossLink?: string;
  acid?: string;
  static names(): { [key: string]: string } {
    return {
      ossLink: 'OssLink',
      acid: 'Acid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossLink: 'string',
      acid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupLatitudeStateResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  totalNum?: number;
  rows?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      rows: 'Rows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      rows: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineServiceStatisticsResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  totalNum?: number;
  rows?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      rows: 'Rows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      rows: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityProjectResponseBodyData extends $tea.Model {
  version?: number;
  projectId?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      projectId: 'ProjectId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'number',
      projectId: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentBasisStatusResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  totalNum?: number;
  rows?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      rows: 'Rows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      rows: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityResultResponseBodyDataQualityResultResponseList extends $tea.Model {
  touchId?: string;
  servicerName?: string;
  memberName?: string;
  projectName?: string;
  projectId?: string;
  channelType?: string;
  channelTypeName?: string;
  touchStartTime?: string;
  servicerId?: string;
  ruleName?: string;
  ruleId?: string;
  groupName?: string;
  groupId?: string;
  instanceName?: string;
  hitStatus?: boolean;
  hitDetail?: string;
  static names(): { [key: string]: string } {
    return {
      touchId: 'TouchId',
      servicerName: 'ServicerName',
      memberName: 'MemberName',
      projectName: 'ProjectName',
      projectId: 'ProjectId',
      channelType: 'ChannelType',
      channelTypeName: 'ChannelTypeName',
      touchStartTime: 'TouchStartTime',
      servicerId: 'ServicerId',
      ruleName: 'RuleName',
      ruleId: 'RuleId',
      groupName: 'GroupName',
      groupId: 'GroupId',
      instanceName: 'InstanceName',
      hitStatus: 'HitStatus',
      hitDetail: 'HitDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      touchId: 'string',
      servicerName: 'string',
      memberName: 'string',
      projectName: 'string',
      projectId: 'string',
      channelType: 'string',
      channelTypeName: 'string',
      touchStartTime: 'string',
      servicerId: 'string',
      ruleName: 'string',
      ruleId: 'string',
      groupName: 'string',
      groupId: 'string',
      instanceName: 'string',
      hitStatus: 'boolean',
      hitDetail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityResultResponseBodyData extends $tea.Model {
  pageNo?: number;
  qualityResultResponseList?: GetQualityResultResponseBodyDataQualityResultResponseList[];
  pageSize?: number;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      qualityResultResponseList: 'QualityResultResponseList',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      qualityResultResponseList: { 'type': 'array', 'itemType': GetQualityResultResponseBodyDataQualityResultResponseList },
      pageSize: 'number',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailResponseBodyDataList extends $tea.Model {
  status?: number;
  memberName?: string;
  servicerName?: string;
  outboundNum?: number;
  retryTime?: string;
  priority?: number;
  gmtModified?: number;
  dnis?: string;
  servicerId?: number;
  outboundTaskId?: number;
  buId?: number;
  endReason?: number;
  gmtCreate?: number;
  departmentId?: number;
  ani?: string;
  memberId?: number;
  skillGroup?: number;
  extAttrs?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      memberName: 'MemberName',
      servicerName: 'ServicerName',
      outboundNum: 'OutboundNum',
      retryTime: 'RetryTime',
      priority: 'Priority',
      gmtModified: 'GmtModified',
      dnis: 'Dnis',
      servicerId: 'ServicerId',
      outboundTaskId: 'OutboundTaskId',
      buId: 'BuId',
      endReason: 'EndReason',
      gmtCreate: 'GmtCreate',
      departmentId: 'DepartmentId',
      ani: 'Ani',
      memberId: 'MemberId',
      skillGroup: 'SkillGroup',
      extAttrs: 'ExtAttrs',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      memberName: 'string',
      servicerName: 'string',
      outboundNum: 'number',
      retryTime: 'string',
      priority: 'number',
      gmtModified: 'number',
      dnis: 'string',
      servicerId: 'number',
      outboundTaskId: 'number',
      buId: 'number',
      endReason: 'number',
      gmtCreate: 'number',
      departmentId: 'number',
      ani: 'string',
      memberId: 'number',
      skillGroup: 'number',
      extAttrs: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskDetailResponseBodyData extends $tea.Model {
  totalResults?: string;
  currentPage?: string;
  list?: QueryTaskDetailResponseBodyDataList[];
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      totalResults: 'TotalResults',
      currentPage: 'CurrentPage',
      list: 'List',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalResults: 'string',
      currentPage: 'string',
      list: { 'type': 'array', 'itemType': QueryTaskDetailResponseBodyDataList },
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepGroupTreeDataResponseBodyDataGroupDTOS extends $tea.Model {
  skillGroupId?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      skillGroupId: 'SkillGroupId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupId: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepGroupTreeDataResponseBodyData extends $tea.Model {
  depGroupName?: string;
  depGroupId?: string;
  groupDTOS?: GetDepGroupTreeDataResponseBodyDataGroupDTOS[];
  static names(): { [key: string]: string } {
    return {
      depGroupName: 'DepGroupName',
      depGroupId: 'DepGroupId',
      groupDTOS: 'GroupDTOS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depGroupName: 'string',
      depGroupId: 'string',
      groupDTOS: { 'type': 'array', 'itemType': GetDepGroupTreeDataResponseBodyDataGroupDTOS },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerInfoResponseBodyData extends $tea.Model {
  nick?: string;
  photo?: string;
  userId?: number;
  realName?: string;
  outerId?: string;
  customizeFields?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      nick: 'Nick',
      photo: 'Photo',
      userId: 'UserId',
      realName: 'RealName',
      outerId: 'OuterId',
      customizeFields: 'CustomizeFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nick: 'string',
      photo: 'string',
      userId: 'number',
      realName: 'string',
      outerId: 'string',
      customizeFields: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentDetailReportResponseBodyDataColumns extends $tea.Model {
  key?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentDetailReportResponseBodyData extends $tea.Model {
  rows?: { [key: string]: any }[];
  pageSize?: number;
  total?: number;
  columns?: GetHotlineAgentDetailReportResponseBodyDataColumns[];
  page?: number;
  static names(): { [key: string]: string } {
    return {
      rows: 'Rows',
      pageSize: 'PageSize',
      total: 'Total',
      columns: 'Columns',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rows: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      pageSize: 'number',
      total: 'number',
      columns: { 'type': 'array', 'itemType': GetHotlineAgentDetailReportResponseBodyDataColumns },
      page: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatRecordDetailResponseBodyResultDataDataMessageList extends $tea.Model {
  senderName?: string;
  content?: string;
  senderType?: number;
  createTime?: number;
  msgType?: string;
  static names(): { [key: string]: string } {
    return {
      senderName: 'SenderName',
      content: 'Content',
      senderType: 'SenderType',
      createTime: 'CreateTime',
      msgType: 'MsgType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      senderName: 'string',
      content: 'string',
      senderType: 'number',
      createTime: 'number',
      msgType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatRecordDetailResponseBodyResultDataData extends $tea.Model {
  servicerName?: string;
  startTime?: number;
  endTime?: number;
  messageList?: ListChatRecordDetailResponseBodyResultDataDataMessageList[];
  static names(): { [key: string]: string } {
    return {
      servicerName: 'ServicerName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      messageList: 'MessageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      servicerName: 'string',
      startTime: 'number',
      endTime: 'number',
      messageList: { 'type': 'array', 'itemType': ListChatRecordDetailResponseBodyResultDataDataMessageList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatRecordDetailResponseBodyResultData extends $tea.Model {
  currentPage?: number;
  totalResults?: number;
  totalPage?: number;
  onePageSize?: number;
  data?: ListChatRecordDetailResponseBodyResultDataData[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      totalResults: 'TotalResults',
      totalPage: 'TotalPage',
      onePageSize: 'OnePageSize',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      totalResults: 'number',
      totalPage: 'number',
      onePageSize: 'number',
      data: { 'type': 'array', 'itemType': ListChatRecordDetailResponseBodyResultDataData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityProjectResponseBodyData extends $tea.Model {
  version?: number;
  projectId?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      projectId: 'ProjectId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'number',
      projectId: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkillGroupsResponseBodyData extends $tea.Model {
  displayName?: string;
  description?: string;
  channelType?: number;
  skillGroupName?: string;
  skillGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      description: 'Description',
      channelType: 'ChannelType',
      skillGroupName: 'SkillGroupName',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      description: 'string',
      channelType: 'number',
      skillGroupName: 'string',
      skillGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyData extends $tea.Model {
  roleId?: number;
  createTime?: string;
  buId?: number;
  title?: string;
  code?: string;
  description?: string;
  roleGroupId?: number;
  roleGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      roleId: 'RoleId',
      createTime: 'CreateTime',
      buId: 'BuId',
      title: 'Title',
      code: 'Code',
      description: 'Description',
      roleGroupId: 'RoleGroupId',
      roleGroupName: 'RoleGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleId: 'number',
      createTime: 'string',
      buId: 'number',
      title: 'string',
      code: 'string',
      description: 'string',
      roleGroupId: 'number',
      roleGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineCallActionResponseBodyData extends $tea.Model {
  touchId?: number;
  depId?: number;
  memberName?: string;
  servicerName?: string;
  channelType?: number;
  actionId?: number;
  calloutName?: string;
  subTouchId?: number;
  servicerId?: number;
  buId?: number;
  calloutId?: number;
  caseId?: number;
  channelId?: string;
  isTransfer?: string;
  memberId?: number;
  taskId?: number;
  memberList?: string;
  static names(): { [key: string]: string } {
    return {
      touchId: 'TouchId',
      depId: 'DepId',
      memberName: 'MemberName',
      servicerName: 'ServicerName',
      channelType: 'ChannelType',
      actionId: 'ActionId',
      calloutName: 'CalloutName',
      subTouchId: 'SubTouchId',
      servicerId: 'ServicerId',
      buId: 'BuId',
      calloutId: 'CalloutId',
      caseId: 'CaseId',
      channelId: 'ChannelId',
      isTransfer: 'IsTransfer',
      memberId: 'MemberId',
      taskId: 'TaskId',
      memberList: 'MemberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      touchId: 'number',
      depId: 'number',
      memberName: 'string',
      servicerName: 'string',
      channelType: 'number',
      actionId: 'number',
      calloutName: 'string',
      subTouchId: 'number',
      servicerId: 'number',
      buId: 'number',
      calloutId: 'number',
      caseId: 'number',
      channelId: 'string',
      isTransfer: 'string',
      memberId: 'number',
      taskId: 'number',
      memberList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupResponseBodyData extends $tea.Model {
  displayName?: string;
  description?: string;
  channelType?: number;
  skillGroupId?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      description: 'Description',
      channelType: 'ChannelType',
      skillGroupId: 'SkillGroupId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      description: 'string',
      channelType: 'number',
      skillGroupId: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineSeatInformationResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  totalNum?: number;
  rows?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      rows: 'Rows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      rows: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTouchListResponseBodyResultDataDataExtAttrs extends $tea.Model {
  evaluationScore?: number;
  evaluationLevel?: number;
  evaluationSolution?: number;
  onlineSessionSource?: number;
  onlineJoinRespInterval?: number;
  evaluationStatus?: number;
  outCallRouteNumber?: string;
  dnis?: string;
  ani?: string;
  static names(): { [key: string]: string } {
    return {
      evaluationScore: 'EvaluationScore',
      evaluationLevel: 'EvaluationLevel',
      evaluationSolution: 'EvaluationSolution',
      onlineSessionSource: 'OnlineSessionSource',
      onlineJoinRespInterval: 'OnlineJoinRespInterval',
      evaluationStatus: 'EvaluationStatus',
      outCallRouteNumber: 'OutCallRouteNumber',
      dnis: 'Dnis',
      ani: 'Ani',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationScore: 'number',
      evaluationLevel: 'number',
      evaluationSolution: 'number',
      onlineSessionSource: 'number',
      onlineJoinRespInterval: 'number',
      evaluationStatus: 'number',
      outCallRouteNumber: 'string',
      dnis: 'string',
      ani: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTouchListResponseBodyResultDataData extends $tea.Model {
  status?: number;
  toId?: number;
  parentTouchId?: number;
  servicerName?: string;
  channelType?: number;
  closeTime?: number;
  gmtModified?: number;
  servicerId?: number;
  switchUser?: string;
  buId?: number;
  fromId?: number;
  userTouchId?: number;
  touchTime?: string;
  touchContent?: string;
  feedback?: string;
  touchId?: string;
  queueId?: number;
  depId?: number;
  touchEndReason?: number;
  memberName?: string;
  commonQueueName?: string;
  firstTime?: number;
  touchType?: number;
  channelId?: string;
  gmtCreate?: number;
  memberId?: number;
  extAttrs?: QueryTouchListResponseBodyResultDataDataExtAttrs;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      toId: 'ToId',
      parentTouchId: 'ParentTouchId',
      servicerName: 'ServicerName',
      channelType: 'ChannelType',
      closeTime: 'CloseTime',
      gmtModified: 'GmtModified',
      servicerId: 'ServicerId',
      switchUser: 'SwitchUser',
      buId: 'BuId',
      fromId: 'FromId',
      userTouchId: 'UserTouchId',
      touchTime: 'TouchTime',
      touchContent: 'TouchContent',
      feedback: 'Feedback',
      touchId: 'TouchId',
      queueId: 'QueueId',
      depId: 'DepId',
      touchEndReason: 'TouchEndReason',
      memberName: 'MemberName',
      commonQueueName: 'CommonQueueName',
      firstTime: 'FirstTime',
      touchType: 'TouchType',
      channelId: 'ChannelId',
      gmtCreate: 'GmtCreate',
      memberId: 'MemberId',
      extAttrs: 'ExtAttrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      toId: 'number',
      parentTouchId: 'number',
      servicerName: 'string',
      channelType: 'number',
      closeTime: 'number',
      gmtModified: 'number',
      servicerId: 'number',
      switchUser: 'string',
      buId: 'number',
      fromId: 'number',
      userTouchId: 'number',
      touchTime: 'string',
      touchContent: 'string',
      feedback: 'string',
      touchId: 'string',
      queueId: 'number',
      depId: 'number',
      touchEndReason: 'number',
      memberName: 'string',
      commonQueueName: 'string',
      firstTime: 'number',
      touchType: 'number',
      channelId: 'string',
      gmtCreate: 'number',
      memberId: 'number',
      extAttrs: QueryTouchListResponseBodyResultDataDataExtAttrs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTouchListResponseBodyResultData extends $tea.Model {
  totalResults?: number;
  nextPage?: number;
  currentPage?: number;
  data?: QueryTouchListResponseBodyResultDataData[];
  totalPage?: number;
  previousPage?: number;
  onePageSize?: number;
  empty?: boolean;
  static names(): { [key: string]: string } {
    return {
      totalResults: 'TotalResults',
      nextPage: 'NextPage',
      currentPage: 'CurrentPage',
      data: 'Data',
      totalPage: 'TotalPage',
      previousPage: 'PreviousPage',
      onePageSize: 'OnePageSize',
      empty: 'Empty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalResults: 'number',
      nextPage: 'number',
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': QueryTouchListResponseBodyResultDataData },
      totalPage: 'number',
      previousPage: 'number',
      onePageSize: 'number',
      empty: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundStrategiesResponseBodyOutboundStrategies extends $tea.Model {
  status?: number;
  successRate?: number;
  process?: number;
  gmtModifiedStr?: string;
  outboundNum?: string;
  modifierId?: number;
  outboundStrategyName?: string;
  outboundStrategyId?: number;
  sceneName?: string;
  creatorId?: number;
  robotName?: string;
  modifierName?: string;
  resourceAllocation?: number;
  extAttr?: string;
  numType?: number;
  buId?: number;
  robotId?: string;
  creatorName?: string;
  departmentId?: number;
  robotType?: number;
  ruleCode?: number;
  gmtCreateStr?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      successRate: 'SuccessRate',
      process: 'Process',
      gmtModifiedStr: 'GmtModifiedStr',
      outboundNum: 'OutboundNum',
      modifierId: 'ModifierId',
      outboundStrategyName: 'OutboundStrategyName',
      outboundStrategyId: 'OutboundStrategyId',
      sceneName: 'SceneName',
      creatorId: 'CreatorId',
      robotName: 'RobotName',
      modifierName: 'ModifierName',
      resourceAllocation: 'ResourceAllocation',
      extAttr: 'ExtAttr',
      numType: 'NumType',
      buId: 'BuId',
      robotId: 'RobotId',
      creatorName: 'CreatorName',
      departmentId: 'DepartmentId',
      robotType: 'RobotType',
      ruleCode: 'RuleCode',
      gmtCreateStr: 'GmtCreateStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      successRate: 'number',
      process: 'number',
      gmtModifiedStr: 'string',
      outboundNum: 'string',
      modifierId: 'number',
      outboundStrategyName: 'string',
      outboundStrategyId: 'number',
      sceneName: 'string',
      creatorId: 'number',
      robotName: 'string',
      modifierName: 'string',
      resourceAllocation: 'number',
      extAttr: 'string',
      numType: 'number',
      buId: 'number',
      robotId: 'string',
      creatorName: 'string',
      departmentId: 'number',
      robotType: 'number',
      ruleCode: 'number',
      gmtCreateStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordResponseBodyData extends $tea.Model {
  endTime?: number;
  startTime?: number;
  connectionId?: string;
  callId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      connectionId: 'ConnectionId',
      callId: 'CallId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      connectionId: 'string',
      callId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupServiceCapabilityResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  totalNum?: number;
  rows?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      rows: 'Rows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      rows: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDepartmentalLatitudeAgentStatusResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  totalNum?: number;
  rows?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      rows: 'Rows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      rows: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotlineAgentDetailResponseBodyData extends $tea.Model {
  agentStatusCode?: string;
  token?: string;
  agentId?: number;
  assigned?: boolean;
  restType?: number;
  agentStatus?: number;
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      agentStatusCode: 'AgentStatusCode',
      token: 'Token',
      agentId: 'AgentId',
      assigned: 'Assigned',
      restType: 'RestType',
      agentStatus: 'AgentStatus',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStatusCode: 'string',
      token: 'string',
      agentId: 'number',
      assigned: 'boolean',
      restType: 'number',
      agentStatus: 'number',
      tenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleTagListResponseBodyData extends $tea.Model {
  ruleTagId?: number;
  ruleTagName?: string;
  static names(): { [key: string]: string } {
    return {
      ruleTagId: 'RuleTagId',
      ruleTagName: 'RuleTagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleTagId: 'number',
      ruleTagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutbounNumListResponseBodyDataNumGroup extends $tea.Model {
  type?: number;
  value?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      value: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutbounNumListResponseBodyDataNum extends $tea.Model {
  type?: number;
  value?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      value: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutbounNumListResponseBodyData extends $tea.Model {
  numGroup?: GetOutbounNumListResponseBodyDataNumGroup[];
  num?: GetOutbounNumListResponseBodyDataNum[];
  static names(): { [key: string]: string } {
    return {
      numGroup: 'NumGroup',
      num: 'Num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      numGroup: { 'type': 'array', 'itemType': GetOutbounNumListResponseBodyDataNumGroup },
      num: { 'type': 'array', 'itemType': GetOutbounNumListResponseBodyDataNum },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupStatusTotalResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  totalNum?: number;
  rows?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      rows: 'Rows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      rows: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateQualityProjectsResponseBodyData extends $tea.Model {
  version?: number;
  projectId?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      projectId: 'ProjectId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'number',
      projectId: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotlineSessionQueryResponseBodyDataCallDetailRecord extends $tea.Model {
  callResult?: string;
  trunkCall?: string;
  servicerName?: string;
  outQueueTime?: string;
  callContinueTime?: number;
  createTime?: string;
  pickUpTime?: string;
  ringContinueTime?: number;
  calledNumber?: string;
  servicerId?: string;
  hangUpTime?: string;
  evaluationLevel?: number;
  passiveTransferId?: string;
  activeTransferId?: string;
  hangUpRole?: string;
  passiveTransferIdType?: string;
  memberName?: string;
  evaluationScore?: number;
  acid?: string;
  ringStartTime?: string;
  callType?: number;
  groupName?: string;
  groupId?: number;
  ringEndTime?: string;
  callingNumber?: string;
  inQueueTime?: string;
  memberId?: string;
  id?: string;
  queueUpContinueTime?: number;
  static names(): { [key: string]: string } {
    return {
      callResult: 'CallResult',
      trunkCall: 'TrunkCall',
      servicerName: 'ServicerName',
      outQueueTime: 'OutQueueTime',
      callContinueTime: 'CallContinueTime',
      createTime: 'CreateTime',
      pickUpTime: 'PickUpTime',
      ringContinueTime: 'RingContinueTime',
      calledNumber: 'CalledNumber',
      servicerId: 'ServicerId',
      hangUpTime: 'HangUpTime',
      evaluationLevel: 'EvaluationLevel',
      passiveTransferId: 'PassiveTransferId',
      activeTransferId: 'ActiveTransferId',
      hangUpRole: 'HangUpRole',
      passiveTransferIdType: 'PassiveTransferIdType',
      memberName: 'MemberName',
      evaluationScore: 'EvaluationScore',
      acid: 'Acid',
      ringStartTime: 'RingStartTime',
      callType: 'CallType',
      groupName: 'GroupName',
      groupId: 'GroupId',
      ringEndTime: 'RingEndTime',
      callingNumber: 'CallingNumber',
      inQueueTime: 'InQueueTime',
      memberId: 'MemberId',
      id: 'Id',
      queueUpContinueTime: 'QueueUpContinueTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callResult: 'string',
      trunkCall: 'string',
      servicerName: 'string',
      outQueueTime: 'string',
      callContinueTime: 'number',
      createTime: 'string',
      pickUpTime: 'string',
      ringContinueTime: 'number',
      calledNumber: 'string',
      servicerId: 'string',
      hangUpTime: 'string',
      evaluationLevel: 'number',
      passiveTransferId: 'string',
      activeTransferId: 'string',
      hangUpRole: 'string',
      passiveTransferIdType: 'string',
      memberName: 'string',
      evaluationScore: 'number',
      acid: 'string',
      ringStartTime: 'string',
      callType: 'number',
      groupName: 'string',
      groupId: 'number',
      ringEndTime: 'string',
      callingNumber: 'string',
      inQueueTime: 'string',
      memberId: 'string',
      id: 'string',
      queueUpContinueTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotlineSessionQueryResponseBodyData extends $tea.Model {
  callDetailRecord?: HotlineSessionQueryResponseBodyDataCallDetailRecord[];
  pageSize?: number;
  pageNumber?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      callDetailRecord: 'CallDetailRecord',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callDetailRecord: { 'type': 'array', 'itemType': HotlineSessionQueryResponseBodyDataCallDetailRecord },
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueInformationResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  totalNum?: number;
  rows?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      rows: 'Rows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      rows: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupServiceStatusResponseBodyData extends $tea.Model {
  pageSize?: number;
  totalNum?: number;
  rows?: string;
  pageNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      rows: 'Rows',
      pageNum: 'PageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      totalNum: 'number',
      rows: 'string',
      pageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDetailReportResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  totalNum?: number;
  rows?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      rows: 'Rows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      rows: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOutboundTaskResponseBodyDataList extends $tea.Model {
  status?: number;
  type?: number;
  endDate?: string;
  retryTime?: number;
  retryInterval?: number;
  startDate?: string;
  gmtModified?: number;
  creator?: string;
  endTime?: string;
  startTime?: string;
  model?: number;
  buId?: number;
  modifier?: string;
  groupName?: string;
  description?: string;
  departmentId?: number;
  gmtCreate?: number;
  skillGroup?: number;
  name?: string;
  extAttrs?: string;
  callerNum?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      endDate: 'EndDate',
      retryTime: 'RetryTime',
      retryInterval: 'RetryInterval',
      startDate: 'StartDate',
      gmtModified: 'GmtModified',
      creator: 'Creator',
      endTime: 'EndTime',
      startTime: 'StartTime',
      model: 'Model',
      buId: 'BuId',
      modifier: 'Modifier',
      groupName: 'GroupName',
      description: 'Description',
      departmentId: 'DepartmentId',
      gmtCreate: 'GmtCreate',
      skillGroup: 'SkillGroup',
      name: 'Name',
      extAttrs: 'ExtAttrs',
      callerNum: 'CallerNum',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      type: 'number',
      endDate: 'string',
      retryTime: 'number',
      retryInterval: 'number',
      startDate: 'string',
      gmtModified: 'number',
      creator: 'string',
      endTime: 'string',
      startTime: 'string',
      model: 'number',
      buId: 'number',
      modifier: 'string',
      groupName: 'string',
      description: 'string',
      departmentId: 'number',
      gmtCreate: 'number',
      skillGroup: 'number',
      name: 'string',
      extAttrs: 'string',
      callerNum: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOutboundTaskResponseBodyData extends $tea.Model {
  totalResults?: string;
  currentPage?: string;
  list?: QueryOutboundTaskResponseBodyDataList[];
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      totalResults: 'TotalResults',
      currentPage: 'CurrentPage',
      list: 'List',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalResults: 'string',
      currentPage: 'string',
      list: { 'type': 'array', 'itemType': QueryOutboundTaskResponseBodyDataList },
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("aiccs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async sendHotlineHeartBeatWithOptions(request: SendHotlineHeartBeatRequest, runtime: $Util.RuntimeOptions): Promise<SendHotlineHeartBeatResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SendHotlineHeartBeatResponse>(await this.doRPCRequest("SendHotlineHeartBeat", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new SendHotlineHeartBeatResponse({}));
  }

  async sendHotlineHeartBeat(request: SendHotlineHeartBeatRequest): Promise<SendHotlineHeartBeatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendHotlineHeartBeatWithOptions(request, runtime);
  }

  async startChatWorkWithOptions(request: StartChatWorkRequest, runtime: $Util.RuntimeOptions): Promise<StartChatWorkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartChatWorkResponse>(await this.doRPCRequest("StartChatWork", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new StartChatWorkResponse({}));
  }

  async startChatWork(request: StartChatWorkRequest): Promise<StartChatWorkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startChatWorkWithOptions(request, runtime);
  }

  async hangUpDoubleCallWithOptions(request: HangUpDoubleCallRequest, runtime: $Util.RuntimeOptions): Promise<HangUpDoubleCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<HangUpDoubleCallResponse>(await this.doRPCRequest("HangUpDoubleCall", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new HangUpDoubleCallResponse({}));
  }

  async hangUpDoubleCall(request: HangUpDoubleCallRequest): Promise<HangUpDoubleCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.hangUpDoubleCallWithOptions(request, runtime);
  }

  async updateAgentWithOptions(request: UpdateAgentRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAgentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAgentResponse>(await this.doRPCRequest("UpdateAgent", "2019-10-15", "HTTPS", "PUT", "AK", "json", req, runtime), new UpdateAgentResponse({}));
  }

  async updateAgent(request: UpdateAgentRequest): Promise<UpdateAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAgentWithOptions(request, runtime);
  }

  async editQualityRuleTagWithOptions(request: EditQualityRuleTagRequest, runtime: $Util.RuntimeOptions): Promise<EditQualityRuleTagResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EditQualityRuleTagResponse>(await this.doRPCRequest("EditQualityRuleTag", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new EditQualityRuleTagResponse({}));
  }

  async editQualityRuleTag(request: EditQualityRuleTagRequest): Promise<EditQualityRuleTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editQualityRuleTagWithOptions(request, runtime);
  }

  async getOnlineServiceVolumeWithOptions(tmpReq: GetOnlineServiceVolumeRequest, runtime: $Util.RuntimeOptions): Promise<GetOnlineServiceVolumeResponse> {
    Util.validateModel(tmpReq);
    let request = new GetOnlineServiceVolumeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!Util.isUnset(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetOnlineServiceVolumeResponse>(await this.doRPCRequest("GetOnlineServiceVolume", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetOnlineServiceVolumeResponse({}));
  }

  async getOnlineServiceVolume(request: GetOnlineServiceVolumeRequest): Promise<GetOnlineServiceVolumeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOnlineServiceVolumeWithOptions(request, runtime);
  }

  async deleteOutboundTaskWithOptions(request: DeleteOutboundTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteOutboundTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteOutboundTaskResponse>(await this.doRPCRequest("DeleteOutboundTask", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteOutboundTaskResponse({}));
  }

  async deleteOutboundTask(request: DeleteOutboundTaskRequest): Promise<DeleteOutboundTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteOutboundTaskWithOptions(request, runtime);
  }

  async addOuterAccountWithOptions(request: AddOuterAccountRequest, runtime: $Util.RuntimeOptions): Promise<AddOuterAccountResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<AddOuterAccountResponse>(await this.doRPCRequest("AddOuterAccount", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new AddOuterAccountResponse({}));
  }

  async addOuterAccount(request: AddOuterAccountRequest): Promise<AddOuterAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addOuterAccountWithOptions(request, runtime);
  }

  async getAgentByIdWithOptions(request: GetAgentByIdRequest, runtime: $Util.RuntimeOptions): Promise<GetAgentByIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAgentByIdResponse>(await this.doRPCRequest("GetAgentById", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetAgentByIdResponse({}));
  }

  async getAgentById(request: GetAgentByIdRequest): Promise<GetAgentByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAgentByIdWithOptions(request, runtime);
  }

  async getQualityRuleDetailWithOptions(request: GetQualityRuleDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetQualityRuleDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetQualityRuleDetailResponse>(await this.doRPCRequest("GetQualityRuleDetail", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetQualityRuleDetailResponse({}));
  }

  async getQualityRuleDetail(request: GetQualityRuleDetailRequest): Promise<GetQualityRuleDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQualityRuleDetailWithOptions(request, runtime);
  }

  async getQualityProjectLogWithOptions(request: GetQualityProjectLogRequest, runtime: $Util.RuntimeOptions): Promise<GetQualityProjectLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetQualityProjectLogResponse>(await this.doRPCRequest("GetQualityProjectLog", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetQualityProjectLogResponse({}));
  }

  async getQualityProjectLog(request: GetQualityProjectLogRequest): Promise<GetQualityProjectLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQualityProjectLogWithOptions(request, runtime);
  }

  async listHotlineRecordDetailWithOptions(request: ListHotlineRecordDetailRequest, runtime: $Util.RuntimeOptions): Promise<ListHotlineRecordDetailResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListHotlineRecordDetailResponse>(await this.doRPCRequest("ListHotlineRecordDetail", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new ListHotlineRecordDetailResponse({}));
  }

  async listHotlineRecordDetail(request: ListHotlineRecordDetailRequest): Promise<ListHotlineRecordDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHotlineRecordDetailWithOptions(request, runtime);
  }

  async getHotlineMessageLogWithOptions(request: GetHotlineMessageLogRequest, runtime: $Util.RuntimeOptions): Promise<GetHotlineMessageLogResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetHotlineMessageLogResponse>(await this.doRPCRequest("GetHotlineMessageLog", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetHotlineMessageLogResponse({}));
  }

  async getHotlineMessageLog(request: GetHotlineMessageLogRequest): Promise<GetHotlineMessageLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotlineMessageLogWithOptions(request, runtime);
  }

  async getQualityProjectListWithOptions(request: GetQualityProjectListRequest, runtime: $Util.RuntimeOptions): Promise<GetQualityProjectListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetQualityProjectListResponse>(await this.doRPCRequest("GetQualityProjectList", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetQualityProjectListResponse({}));
  }

  async getQualityProjectList(request: GetQualityProjectListRequest): Promise<GetQualityProjectListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQualityProjectListWithOptions(request, runtime);
  }

  async createOutboundTaskWithOptions(request: CreateOutboundTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateOutboundTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateOutboundTaskResponse>(await this.doRPCRequest("CreateOutboundTask", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateOutboundTaskResponse({}));
  }

  async createOutboundTask(request: CreateOutboundTaskRequest): Promise<CreateOutboundTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOutboundTaskWithOptions(request, runtime);
  }

  async getHotlineRuntimeInfoWithOptions(request: GetHotlineRuntimeInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetHotlineRuntimeInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetHotlineRuntimeInfoResponse>(await this.doRPCRequest("GetHotlineRuntimeInfo", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetHotlineRuntimeInfoResponse({}));
  }

  async getHotlineRuntimeInfo(request: GetHotlineRuntimeInfoRequest): Promise<GetHotlineRuntimeInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotlineRuntimeInfoWithOptions(request, runtime);
  }

  async makeDoubleCallWithOptions(request: MakeDoubleCallRequest, runtime: $Util.RuntimeOptions): Promise<MakeDoubleCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MakeDoubleCallResponse>(await this.doRPCRequest("MakeDoubleCall", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new MakeDoubleCallResponse({}));
  }

  async makeDoubleCall(request: MakeDoubleCallRequest): Promise<MakeDoubleCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.makeDoubleCallWithOptions(request, runtime);
  }

  async getSkillGroupAgentStatusDetailsWithOptions(tmpReq: GetSkillGroupAgentStatusDetailsRequest, runtime: $Util.RuntimeOptions): Promise<GetSkillGroupAgentStatusDetailsResponse> {
    Util.validateModel(tmpReq);
    let request = new GetSkillGroupAgentStatusDetailsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!Util.isUnset(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetSkillGroupAgentStatusDetailsResponse>(await this.doRPCRequest("GetSkillGroupAgentStatusDetails", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetSkillGroupAgentStatusDetailsResponse({}));
  }

  async getSkillGroupAgentStatusDetails(request: GetSkillGroupAgentStatusDetailsRequest): Promise<GetSkillGroupAgentStatusDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSkillGroupAgentStatusDetailsWithOptions(request, runtime);
  }

  async getAgentServiceStatusWithOptions(tmpReq: GetAgentServiceStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetAgentServiceStatusResponse> {
    Util.validateModel(tmpReq);
    let request = new GetAgentServiceStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAgentServiceStatusResponse>(await this.doRPCRequest("GetAgentServiceStatus", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetAgentServiceStatusResponse({}));
  }

  async getAgentServiceStatus(request: GetAgentServiceStatusRequest): Promise<GetAgentServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAgentServiceStatusWithOptions(request, runtime);
  }

  async getNumLocationWithOptions(request: GetNumLocationRequest, runtime: $Util.RuntimeOptions): Promise<GetNumLocationResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetNumLocationResponse>(await this.doRPCRequest("GetNumLocation", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetNumLocationResponse({}));
  }

  async getNumLocation(request: GetNumLocationRequest): Promise<GetNumLocationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNumLocationWithOptions(request, runtime);
  }

  async getQualityRuleListWithOptions(request: GetQualityRuleListRequest, runtime: $Util.RuntimeOptions): Promise<GetQualityRuleListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetQualityRuleListResponse>(await this.doRPCRequest("GetQualityRuleList", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetQualityRuleListResponse({}));
  }

  async getQualityRuleList(request: GetQualityRuleListRequest): Promise<GetQualityRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQualityRuleListWithOptions(request, runtime);
  }

  async listOutboundPhoneNumberWithOptions(request: ListOutboundPhoneNumberRequest, runtime: $Util.RuntimeOptions): Promise<ListOutboundPhoneNumberResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListOutboundPhoneNumberResponse>(await this.doRPCRequest("ListOutboundPhoneNumber", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new ListOutboundPhoneNumberResponse({}));
  }

  async listOutboundPhoneNumber(request: ListOutboundPhoneNumberRequest): Promise<ListOutboundPhoneNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOutboundPhoneNumberWithOptions(request, runtime);
  }

  async listAgentBySkillGroupIdWithOptions(request: ListAgentBySkillGroupIdRequest, runtime: $Util.RuntimeOptions): Promise<ListAgentBySkillGroupIdResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListAgentBySkillGroupIdResponse>(await this.doRPCRequest("ListAgentBySkillGroupId", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new ListAgentBySkillGroupIdResponse({}));
  }

  async listAgentBySkillGroupId(request: ListAgentBySkillGroupIdRequest): Promise<ListAgentBySkillGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAgentBySkillGroupIdWithOptions(request, runtime);
  }

  async hangupThirdCallWithOptions(request: HangupThirdCallRequest, runtime: $Util.RuntimeOptions): Promise<HangupThirdCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<HangupThirdCallResponse>(await this.doRPCRequest("HangupThirdCall", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new HangupThirdCallResponse({}));
  }

  async hangupThirdCall(request: HangupThirdCallRequest): Promise<HangupThirdCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.hangupThirdCallWithOptions(request, runtime);
  }

  async startHotlineServiceWithOptions(request: StartHotlineServiceRequest, runtime: $Util.RuntimeOptions): Promise<StartHotlineServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartHotlineServiceResponse>(await this.doRPCRequest("StartHotlineService", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new StartHotlineServiceResponse({}));
  }

  async startHotlineService(request: StartHotlineServiceRequest): Promise<StartHotlineServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startHotlineServiceWithOptions(request, runtime);
  }

  async getAgentWithOptions(request: GetAgentRequest, runtime: $Util.RuntimeOptions): Promise<GetAgentResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAgentResponse>(await this.doRPCRequest("GetAgent", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetAgentResponse({}));
  }

  async getAgent(request: GetAgentRequest): Promise<GetAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAgentWithOptions(request, runtime);
  }

  async getAgentIndexRealTimeWithOptions(request: GetAgentIndexRealTimeRequest, runtime: $Util.RuntimeOptions): Promise<GetAgentIndexRealTimeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAgentIndexRealTimeResponse>(await this.doRPCRequest("GetAgentIndexRealTime", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetAgentIndexRealTimeResponse({}));
  }

  async getAgentIndexRealTime(request: GetAgentIndexRealTimeRequest): Promise<GetAgentIndexRealTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAgentIndexRealTimeWithOptions(request, runtime);
  }

  async getHotlineGroupDetailReportWithOptions(request: GetHotlineGroupDetailReportRequest, runtime: $Util.RuntimeOptions): Promise<GetHotlineGroupDetailReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetHotlineGroupDetailReportResponse>(await this.doRPCRequest("GetHotlineGroupDetailReport", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetHotlineGroupDetailReportResponse({}));
  }

  async getHotlineGroupDetailReport(request: GetHotlineGroupDetailReportRequest): Promise<GetHotlineGroupDetailReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotlineGroupDetailReportWithOptions(request, runtime);
  }

  async encryptPhoneNumWithOptions(request: EncryptPhoneNumRequest, runtime: $Util.RuntimeOptions): Promise<EncryptPhoneNumResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<EncryptPhoneNumResponse>(await this.doRPCRequest("EncryptPhoneNum", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new EncryptPhoneNumResponse({}));
  }

  async encryptPhoneNum(request: EncryptPhoneNumRequest): Promise<EncryptPhoneNumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.encryptPhoneNumWithOptions(request, runtime);
  }

  async getInstanceListWithOptions(request: GetInstanceListRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetInstanceListResponse>(await this.doRPCRequest("GetInstanceList", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetInstanceListResponse({}));
  }

  async getInstanceList(request: GetInstanceListRequest): Promise<GetInstanceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceListWithOptions(request, runtime);
  }

  async getQualityProjectDetailWithOptions(request: GetQualityProjectDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetQualityProjectDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetQualityProjectDetailResponse>(await this.doRPCRequest("GetQualityProjectDetail", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetQualityProjectDetailResponse({}));
  }

  async getQualityProjectDetail(request: GetQualityProjectDetailRequest): Promise<GetQualityProjectDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQualityProjectDetailWithOptions(request, runtime);
  }

  async sendCcoSmartCallOperateWithOptions(request: SendCcoSmartCallOperateRequest, runtime: $Util.RuntimeOptions): Promise<SendCcoSmartCallOperateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SendCcoSmartCallOperateResponse>(await this.doRPCRequest("SendCcoSmartCallOperate", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new SendCcoSmartCallOperateResponse({}));
  }

  async sendCcoSmartCallOperate(request: SendCcoSmartCallOperateRequest): Promise<SendCcoSmartCallOperateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendCcoSmartCallOperateWithOptions(request, runtime);
  }

  async answerCallWithOptions(request: AnswerCallRequest, runtime: $Util.RuntimeOptions): Promise<AnswerCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AnswerCallResponse>(await this.doRPCRequest("AnswerCall", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new AnswerCallResponse({}));
  }

  async answerCall(request: AnswerCallRequest): Promise<AnswerCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.answerCallWithOptions(request, runtime);
  }

  async startMicroOutboundWithOptions(request: StartMicroOutboundRequest, runtime: $Util.RuntimeOptions): Promise<StartMicroOutboundResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartMicroOutboundResponse>(await this.doRPCRequest("StartMicroOutbound", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new StartMicroOutboundResponse({}));
  }

  async startMicroOutbound(request: StartMicroOutboundRequest): Promise<StartMicroOutboundResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startMicroOutboundWithOptions(request, runtime);
  }

  async suspendHotlineServiceWithOptions(request: SuspendHotlineServiceRequest, runtime: $Util.RuntimeOptions): Promise<SuspendHotlineServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SuspendHotlineServiceResponse>(await this.doRPCRequest("SuspendHotlineService", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new SuspendHotlineServiceResponse({}));
  }

  async suspendHotlineService(request: SuspendHotlineServiceRequest): Promise<SuspendHotlineServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendHotlineServiceWithOptions(request, runtime);
  }

  async getAgentStatisticsWithOptions(tmpReq: GetAgentStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<GetAgentStatisticsResponse> {
    Util.validateModel(tmpReq);
    let request = new GetAgentStatisticsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAgentStatisticsResponse>(await this.doRPCRequest("GetAgentStatistics", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetAgentStatisticsResponse({}));
  }

  async getAgentStatistics(request: GetAgentStatisticsRequest): Promise<GetAgentStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAgentStatisticsWithOptions(request, runtime);
  }

  async updateOuterAccountWithOptions(request: UpdateOuterAccountRequest, runtime: $Util.RuntimeOptions): Promise<UpdateOuterAccountResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<UpdateOuterAccountResponse>(await this.doRPCRequest("UpdateOuterAccount", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new UpdateOuterAccountResponse({}));
  }

  async updateOuterAccount(request: UpdateOuterAccountRequest): Promise<UpdateOuterAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOuterAccountWithOptions(request, runtime);
  }

  async getHotlineWaitingNumberWithOptions(request: GetHotlineWaitingNumberRequest, runtime: $Util.RuntimeOptions): Promise<GetHotlineWaitingNumberResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetHotlineWaitingNumberResponse>(await this.doRPCRequest("GetHotlineWaitingNumber", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetHotlineWaitingNumberResponse({}));
  }

  async getHotlineWaitingNumber(request: GetHotlineWaitingNumberRequest): Promise<GetHotlineWaitingNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotlineWaitingNumberWithOptions(request, runtime);
  }

  async holdCallWithOptions(request: HoldCallRequest, runtime: $Util.RuntimeOptions): Promise<HoldCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<HoldCallResponse>(await this.doRPCRequest("HoldCall", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new HoldCallResponse({}));
  }

  async holdCall(request: HoldCallRequest): Promise<HoldCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.holdCallWithOptions(request, runtime);
  }

  async getSeatInformationWithOptions(tmpReq: GetSeatInformationRequest, runtime: $Util.RuntimeOptions): Promise<GetSeatInformationResponse> {
    Util.validateModel(tmpReq);
    let request = new GetSeatInformationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "depIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetSeatInformationResponse>(await this.doRPCRequest("GetSeatInformation", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetSeatInformationResponse({}));
  }

  async getSeatInformation(request: GetSeatInformationRequest): Promise<GetSeatInformationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSeatInformationWithOptions(request, runtime);
  }

  async getRtcTokenWithOptions(request: GetRtcTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetRtcTokenResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetRtcTokenResponse>(await this.doRPCRequest("GetRtcToken", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetRtcTokenResponse({}));
  }

  async getRtcToken(request: GetRtcTokenRequest): Promise<GetRtcTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRtcTokenWithOptions(request, runtime);
  }

  async getSkillGroupAndAgentStatusSummaryWithOptions(tmpReq: GetSkillGroupAndAgentStatusSummaryRequest, runtime: $Util.RuntimeOptions): Promise<GetSkillGroupAndAgentStatusSummaryResponse> {
    Util.validateModel(tmpReq);
    let request = new GetSkillGroupAndAgentStatusSummaryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!Util.isUnset(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetSkillGroupAndAgentStatusSummaryResponse>(await this.doRPCRequest("GetSkillGroupAndAgentStatusSummary", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetSkillGroupAndAgentStatusSummaryResponse({}));
  }

  async getSkillGroupAndAgentStatusSummary(request: GetSkillGroupAndAgentStatusSummaryRequest): Promise<GetSkillGroupAndAgentStatusSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSkillGroupAndAgentStatusSummaryWithOptions(request, runtime);
  }

  async getRecordDataWithOptions(request: GetRecordDataRequest, runtime: $Util.RuntimeOptions): Promise<GetRecordDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRecordDataResponse>(await this.doRPCRequest("GetRecordData", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetRecordDataResponse({}));
  }

  async getRecordData(request: GetRecordDataRequest): Promise<GetRecordDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRecordDataWithOptions(request, runtime);
  }

  async getSkillGroupLatitudeStateWithOptions(tmpReq: GetSkillGroupLatitudeStateRequest, runtime: $Util.RuntimeOptions): Promise<GetSkillGroupLatitudeStateResponse> {
    Util.validateModel(tmpReq);
    let request = new GetSkillGroupLatitudeStateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!Util.isUnset(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetSkillGroupLatitudeStateResponse>(await this.doRPCRequest("GetSkillGroupLatitudeState", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetSkillGroupLatitudeStateResponse({}));
  }

  async getSkillGroupLatitudeState(request: GetSkillGroupLatitudeStateRequest): Promise<GetSkillGroupLatitudeStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSkillGroupLatitudeStateWithOptions(request, runtime);
  }

  async deleteQualityRuleWithOptions(request: DeleteQualityRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQualityRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteQualityRuleResponse>(await this.doRPCRequest("DeleteQualityRule", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteQualityRuleResponse({}));
  }

  async deleteQualityRule(request: DeleteQualityRuleRequest): Promise<DeleteQualityRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQualityRuleWithOptions(request, runtime);
  }

  async suspendOutboundTaskWithOptions(request: SuspendOutboundTaskRequest, runtime: $Util.RuntimeOptions): Promise<SuspendOutboundTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SuspendOutboundTaskResponse>(await this.doRPCRequest("SuspendOutboundTask", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new SuspendOutboundTaskResponse({}));
  }

  async suspendOutboundTask(request: SuspendOutboundTaskRequest): Promise<SuspendOutboundTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendOutboundTaskWithOptions(request, runtime);
  }

  async getHotlineServiceStatisticsWithOptions(tmpReq: GetHotlineServiceStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<GetHotlineServiceStatisticsResponse> {
    Util.validateModel(tmpReq);
    let request = new GetHotlineServiceStatisticsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!Util.isUnset(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetHotlineServiceStatisticsResponse>(await this.doRPCRequest("GetHotlineServiceStatistics", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetHotlineServiceStatisticsResponse({}));
  }

  async getHotlineServiceStatistics(request: GetHotlineServiceStatisticsRequest): Promise<GetHotlineServiceStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotlineServiceStatisticsWithOptions(request, runtime);
  }

  async editQualityProjectWithOptions(request: EditQualityProjectRequest, runtime: $Util.RuntimeOptions): Promise<EditQualityProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EditQualityProjectResponse>(await this.doRPCRequest("EditQualityProject", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new EditQualityProjectResponse({}));
  }

  async editQualityProject(request: EditQualityProjectRequest): Promise<EditQualityProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editQualityProjectWithOptions(request, runtime);
  }

  async listOuterOrderedNumbersWithOptions(request: ListOuterOrderedNumbersRequest, runtime: $Util.RuntimeOptions): Promise<ListOuterOrderedNumbersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListOuterOrderedNumbersResponse>(await this.doRPCRequest("ListOuterOrderedNumbers", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListOuterOrderedNumbersResponse({}));
  }

  async listOuterOrderedNumbers(request: ListOuterOrderedNumbersRequest): Promise<ListOuterOrderedNumbersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOuterOrderedNumbersWithOptions(request, runtime);
  }

  async getAgentBasisStatusWithOptions(tmpReq: GetAgentBasisStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetAgentBasisStatusResponse> {
    Util.validateModel(tmpReq);
    let request = new GetAgentBasisStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAgentBasisStatusResponse>(await this.doRPCRequest("GetAgentBasisStatus", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetAgentBasisStatusResponse({}));
  }

  async getAgentBasisStatus(request: GetAgentBasisStatusRequest): Promise<GetAgentBasisStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAgentBasisStatusWithOptions(request, runtime);
  }

  async getQualityResultWithOptions(request: GetQualityResultRequest, runtime: $Util.RuntimeOptions): Promise<GetQualityResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetQualityResultResponse>(await this.doRPCRequest("GetQualityResult", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetQualityResultResponse({}));
  }

  async getQualityResult(request: GetQualityResultRequest): Promise<GetQualityResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQualityResultWithOptions(request, runtime);
  }

  async getIndexCurrentValueWithOptions(request: GetIndexCurrentValueRequest, runtime: $Util.RuntimeOptions): Promise<GetIndexCurrentValueResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetIndexCurrentValueResponse>(await this.doRPCRequest("GetIndexCurrentValue", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetIndexCurrentValueResponse({}));
  }

  async getIndexCurrentValue(request: GetIndexCurrentValueRequest): Promise<GetIndexCurrentValueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIndexCurrentValueWithOptions(request, runtime);
  }

  async generateWebSocketSignWithOptions(request: GenerateWebSocketSignRequest, runtime: $Util.RuntimeOptions): Promise<GenerateWebSocketSignResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateWebSocketSignResponse>(await this.doRPCRequest("GenerateWebSocketSign", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateWebSocketSignResponse({}));
  }

  async generateWebSocketSign(request: GenerateWebSocketSignRequest): Promise<GenerateWebSocketSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateWebSocketSignWithOptions(request, runtime);
  }

  async createAgentWithOptions(request: CreateAgentRequest, runtime: $Util.RuntimeOptions): Promise<CreateAgentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAgentResponse>(await this.doRPCRequest("CreateAgent", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAgentResponse({}));
  }

  async createAgent(request: CreateAgentRequest): Promise<CreateAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAgentWithOptions(request, runtime);
  }

  async queryTaskDetailWithOptions(request: QueryTaskDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryTaskDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTaskDetailResponse>(await this.doRPCRequest("QueryTaskDetail", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTaskDetailResponse({}));
  }

  async queryTaskDetail(request: QueryTaskDetailRequest): Promise<QueryTaskDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTaskDetailWithOptions(request, runtime);
  }

  async editQualityRuleWithOptions(request: EditQualityRuleRequest, runtime: $Util.RuntimeOptions): Promise<EditQualityRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EditQualityRuleResponse>(await this.doRPCRequest("EditQualityRule", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new EditQualityRuleResponse({}));
  }

  async editQualityRule(request: EditQualityRuleRequest): Promise<EditQualityRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editQualityRuleWithOptions(request, runtime);
  }

  async getMcuLvsIpWithOptions(request: GetMcuLvsIpRequest, runtime: $Util.RuntimeOptions): Promise<GetMcuLvsIpResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetMcuLvsIpResponse>(await this.doRPCRequest("GetMcuLvsIp", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetMcuLvsIpResponse({}));
  }

  async getMcuLvsIp(request: GetMcuLvsIpRequest): Promise<GetMcuLvsIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMcuLvsIpWithOptions(request, runtime);
  }

  async getDepGroupTreeDataWithOptions(request: GetDepGroupTreeDataRequest, runtime: $Util.RuntimeOptions): Promise<GetDepGroupTreeDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetDepGroupTreeDataResponse>(await this.doRPCRequest("GetDepGroupTreeData", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetDepGroupTreeDataResponse({}));
  }

  async getDepGroupTreeData(request: GetDepGroupTreeDataRequest): Promise<GetDepGroupTreeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDepGroupTreeDataWithOptions(request, runtime);
  }

  async deleteAgentWithOptions(request: DeleteAgentRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAgentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAgentResponse>(await this.doRPCRequest("DeleteAgent", "2019-10-15", "HTTPS", "DELETE", "AK", "json", req, runtime), new DeleteAgentResponse({}));
  }

  async deleteAgent(request: DeleteAgentRequest): Promise<DeleteAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAgentWithOptions(request, runtime);
  }

  async getCustomerInfoWithOptions(request: GetCustomerInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetCustomerInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetCustomerInfoResponse>(await this.doRPCRequest("GetCustomerInfo", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetCustomerInfoResponse({}));
  }

  async getCustomerInfo(request: GetCustomerInfoRequest): Promise<GetCustomerInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCustomerInfoWithOptions(request, runtime);
  }

  async getHotlineAgentDetailReportWithOptions(request: GetHotlineAgentDetailReportRequest, runtime: $Util.RuntimeOptions): Promise<GetHotlineAgentDetailReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetHotlineAgentDetailReportResponse>(await this.doRPCRequest("GetHotlineAgentDetailReport", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetHotlineAgentDetailReportResponse({}));
  }

  async getHotlineAgentDetailReport(request: GetHotlineAgentDetailReportRequest): Promise<GetHotlineAgentDetailReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotlineAgentDetailReportWithOptions(request, runtime);
  }

  async sendCcoSmartCallWithOptions(request: SendCcoSmartCallRequest, runtime: $Util.RuntimeOptions): Promise<SendCcoSmartCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SendCcoSmartCallResponse>(await this.doRPCRequest("SendCcoSmartCall", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new SendCcoSmartCallResponse({}));
  }

  async sendCcoSmartCall(request: SendCcoSmartCallRequest): Promise<SendCcoSmartCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendCcoSmartCallWithOptions(request, runtime);
  }

  async listChatRecordDetailWithOptions(request: ListChatRecordDetailRequest, runtime: $Util.RuntimeOptions): Promise<ListChatRecordDetailResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListChatRecordDetailResponse>(await this.doRPCRequest("ListChatRecordDetail", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new ListChatRecordDetailResponse({}));
  }

  async listChatRecordDetail(request: ListChatRecordDetailRequest): Promise<ListChatRecordDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listChatRecordDetailWithOptions(request, runtime);
  }

  async addSkillGroupWithOptions(request: AddSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddSkillGroupResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<AddSkillGroupResponse>(await this.doRPCRequest("AddSkillGroup", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new AddSkillGroupResponse({}));
  }

  async addSkillGroup(request: AddSkillGroupRequest): Promise<AddSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSkillGroupWithOptions(request, runtime);
  }

  async hangupCallWithOptions(request: HangupCallRequest, runtime: $Util.RuntimeOptions): Promise<HangupCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<HangupCallResponse>(await this.doRPCRequest("HangupCall", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new HangupCallResponse({}));
  }

  async hangupCall(request: HangupCallRequest): Promise<HangupCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.hangupCallWithOptions(request, runtime);
  }

  async deleteSkillGroupWithOptions(request: DeleteSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSkillGroupResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DeleteSkillGroupResponse>(await this.doRPCRequest("DeleteSkillGroup", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new DeleteSkillGroupResponse({}));
  }

  async deleteSkillGroup(request: DeleteSkillGroupRequest): Promise<DeleteSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSkillGroupWithOptions(request, runtime);
  }

  async createQualityProjectWithOptions(request: CreateQualityProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateQualityProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateQualityProjectResponse>(await this.doRPCRequest("CreateQualityProject", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateQualityProjectResponse({}));
  }

  async createQualityProject(request: CreateQualityProjectRequest): Promise<CreateQualityProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQualityProjectWithOptions(request, runtime);
  }

  async querySkillGroupsWithOptions(request: QuerySkillGroupsRequest, runtime: $Util.RuntimeOptions): Promise<QuerySkillGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QuerySkillGroupsResponse>(await this.doRPCRequest("QuerySkillGroups", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new QuerySkillGroupsResponse({}));
  }

  async querySkillGroups(request: QuerySkillGroupsRequest): Promise<QuerySkillGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySkillGroupsWithOptions(request, runtime);
  }

  async createQualityRuleWithOptions(request: CreateQualityRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateQualityRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateQualityRuleResponse>(await this.doRPCRequest("CreateQualityRule", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateQualityRuleResponse({}));
  }

  async createQualityRule(request: CreateQualityRuleRequest): Promise<CreateQualityRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQualityRuleWithOptions(request, runtime);
  }

  async listRolesWithOptions(request: ListRolesRequest, runtime: $Util.RuntimeOptions): Promise<ListRolesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListRolesResponse>(await this.doRPCRequest("ListRoles", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new ListRolesResponse({}));
  }

  async listRoles(request: ListRolesRequest): Promise<ListRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRolesWithOptions(request, runtime);
  }

  async getHotlineCallActionWithOptions(request: GetHotlineCallActionRequest, runtime: $Util.RuntimeOptions): Promise<GetHotlineCallActionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetHotlineCallActionResponse>(await this.doRPCRequest("GetHotlineCallAction", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetHotlineCallActionResponse({}));
  }

  async getHotlineCallAction(request: GetHotlineCallActionRequest): Promise<GetHotlineCallActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotlineCallActionWithOptions(request, runtime);
  }

  async listSkillGroupWithOptions(request: ListSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListSkillGroupResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListSkillGroupResponse>(await this.doRPCRequest("ListSkillGroup", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new ListSkillGroupResponse({}));
  }

  async listSkillGroup(request: ListSkillGroupRequest): Promise<ListSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSkillGroupWithOptions(request, runtime);
  }

  async getOnlineSeatInformationWithOptions(tmpReq: GetOnlineSeatInformationRequest, runtime: $Util.RuntimeOptions): Promise<GetOnlineSeatInformationResponse> {
    Util.validateModel(tmpReq);
    let request = new GetOnlineSeatInformationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetOnlineSeatInformationResponse>(await this.doRPCRequest("GetOnlineSeatInformation", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetOnlineSeatInformationResponse({}));
  }

  async getOnlineSeatInformation(request: GetOnlineSeatInformationRequest): Promise<GetOnlineSeatInformationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOnlineSeatInformationWithOptions(request, runtime);
  }

  async deleteQualityProjectWithOptions(request: DeleteQualityProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQualityProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteQualityProjectResponse>(await this.doRPCRequest("DeleteQualityProject", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteQualityProjectResponse({}));
  }

  async deleteQualityProject(request: DeleteQualityProjectRequest): Promise<DeleteQualityProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQualityProjectWithOptions(request, runtime);
  }

  async queryTouchListWithOptions(request: QueryTouchListRequest, runtime: $Util.RuntimeOptions): Promise<QueryTouchListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTouchListResponse>(await this.doRPCRequest("QueryTouchList", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTouchListResponse({}));
  }

  async queryTouchList(request: QueryTouchListRequest): Promise<QueryTouchListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTouchListWithOptions(request, runtime);
  }

  async queryHotlineInQueueWithOptions(request: QueryHotlineInQueueRequest, runtime: $Util.RuntimeOptions): Promise<QueryHotlineInQueueResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<QueryHotlineInQueueResponse>(await this.doRPCRequest("QueryHotlineInQueue", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new QueryHotlineInQueueResponse({}));
  }

  async queryHotlineInQueue(request: QueryHotlineInQueueRequest): Promise<QueryHotlineInQueueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryHotlineInQueueWithOptions(request, runtime);
  }

  async finishHotlineServiceWithOptions(request: FinishHotlineServiceRequest, runtime: $Util.RuntimeOptions): Promise<FinishHotlineServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FinishHotlineServiceResponse>(await this.doRPCRequest("FinishHotlineService", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new FinishHotlineServiceResponse({}));
  }

  async finishHotlineService(request: FinishHotlineServiceRequest): Promise<FinishHotlineServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.finishHotlineServiceWithOptions(request, runtime);
  }

  async listOutboundStrategiesWithOptions(request: ListOutboundStrategiesRequest, runtime: $Util.RuntimeOptions): Promise<ListOutboundStrategiesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListOutboundStrategiesResponse>(await this.doRPCRequest("ListOutboundStrategies", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListOutboundStrategiesResponse({}));
  }

  async listOutboundStrategies(request: ListOutboundStrategiesRequest): Promise<ListOutboundStrategiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOutboundStrategiesWithOptions(request, runtime);
  }

  async listHotlineRecordWithOptions(request: ListHotlineRecordRequest, runtime: $Util.RuntimeOptions): Promise<ListHotlineRecordResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListHotlineRecordResponse>(await this.doRPCRequest("ListHotlineRecord", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new ListHotlineRecordResponse({}));
  }

  async listHotlineRecord(request: ListHotlineRecordRequest): Promise<ListHotlineRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHotlineRecordWithOptions(request, runtime);
  }

  async changeQualityProjectStatusWithOptions(request: ChangeQualityProjectStatusRequest, runtime: $Util.RuntimeOptions): Promise<ChangeQualityProjectStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ChangeQualityProjectStatusResponse>(await this.doRPCRequest("ChangeQualityProjectStatus", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new ChangeQualityProjectStatusResponse({}));
  }

  async changeQualityProjectStatus(request: ChangeQualityProjectStatusRequest): Promise<ChangeQualityProjectStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeQualityProjectStatusWithOptions(request, runtime);
  }

  async transferCallToSkillGroupWithOptions(request: TransferCallToSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<TransferCallToSkillGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TransferCallToSkillGroupResponse>(await this.doRPCRequest("TransferCallToSkillGroup", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new TransferCallToSkillGroupResponse({}));
  }

  async transferCallToSkillGroup(request: TransferCallToSkillGroupRequest): Promise<TransferCallToSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferCallToSkillGroupWithOptions(request, runtime);
  }

  async getSkillGroupServiceCapabilityWithOptions(tmpReq: GetSkillGroupServiceCapabilityRequest, runtime: $Util.RuntimeOptions): Promise<GetSkillGroupServiceCapabilityResponse> {
    Util.validateModel(tmpReq);
    let request = new GetSkillGroupServiceCapabilityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!Util.isUnset(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetSkillGroupServiceCapabilityResponse>(await this.doRPCRequest("GetSkillGroupServiceCapability", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetSkillGroupServiceCapabilityResponse({}));
  }

  async getSkillGroupServiceCapability(request: GetSkillGroupServiceCapabilityRequest): Promise<GetSkillGroupServiceCapabilityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSkillGroupServiceCapabilityWithOptions(request, runtime);
  }

  async removeSkillGroupWithOptions(request: RemoveSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveSkillGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveSkillGroupResponse>(await this.doRPCRequest("RemoveSkillGroup", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveSkillGroupResponse({}));
  }

  async removeSkillGroup(request: RemoveSkillGroupRequest): Promise<RemoveSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeSkillGroupWithOptions(request, runtime);
  }

  async startCallV2WithOptions(request: StartCallV2Request, runtime: $Util.RuntimeOptions): Promise<StartCallV2Response> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartCallV2Response>(await this.doRPCRequest("StartCallV2", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new StartCallV2Response({}));
  }

  async startCallV2(request: StartCallV2Request): Promise<StartCallV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startCallV2WithOptions(request, runtime);
  }

  async changeChatAgentStatusWithOptions(request: ChangeChatAgentStatusRequest, runtime: $Util.RuntimeOptions): Promise<ChangeChatAgentStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ChangeChatAgentStatusResponse>(await this.doRPCRequest("ChangeChatAgentStatus", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new ChangeChatAgentStatusResponse({}));
  }

  async changeChatAgentStatus(request: ChangeChatAgentStatusRequest): Promise<ChangeChatAgentStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeChatAgentStatusWithOptions(request, runtime);
  }

  async describeRecordDataWithOptions(request: DescribeRecordDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecordDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRecordDataResponse>(await this.doRPCRequest("DescribeRecordData", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRecordDataResponse({}));
  }

  async describeRecordData(request: DescribeRecordDataRequest): Promise<DescribeRecordDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecordDataWithOptions(request, runtime);
  }

  async deleteOuterAccountWithOptions(request: DeleteOuterAccountRequest, runtime: $Util.RuntimeOptions): Promise<DeleteOuterAccountResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DeleteOuterAccountResponse>(await this.doRPCRequest("DeleteOuterAccount", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new DeleteOuterAccountResponse({}));
  }

  async deleteOuterAccount(request: DeleteOuterAccountRequest): Promise<DeleteOuterAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteOuterAccountWithOptions(request, runtime);
  }

  async getDepartmentalLatitudeAgentStatusWithOptions(tmpReq: GetDepartmentalLatitudeAgentStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetDepartmentalLatitudeAgentStatusResponse> {
    Util.validateModel(tmpReq);
    let request = new GetDepartmentalLatitudeAgentStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetDepartmentalLatitudeAgentStatusResponse>(await this.doRPCRequest("GetDepartmentalLatitudeAgentStatus", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetDepartmentalLatitudeAgentStatusResponse({}));
  }

  async getDepartmentalLatitudeAgentStatus(request: GetDepartmentalLatitudeAgentStatusRequest): Promise<GetDepartmentalLatitudeAgentStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDepartmentalLatitudeAgentStatusWithOptions(request, runtime);
  }

  async getHotlineAgentDetailWithOptions(request: GetHotlineAgentDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetHotlineAgentDetailResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetHotlineAgentDetailResponse>(await this.doRPCRequest("GetHotlineAgentDetail", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetHotlineAgentDetailResponse({}));
  }

  async getHotlineAgentDetail(request: GetHotlineAgentDetailRequest): Promise<GetHotlineAgentDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotlineAgentDetailWithOptions(request, runtime);
  }

  async makeCallWithOptions(request: MakeCallRequest, runtime: $Util.RuntimeOptions): Promise<MakeCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MakeCallResponse>(await this.doRPCRequest("MakeCall", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new MakeCallResponse({}));
  }

  async makeCall(request: MakeCallRequest): Promise<MakeCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.makeCallWithOptions(request, runtime);
  }

  async fetchCallWithOptions(request: FetchCallRequest, runtime: $Util.RuntimeOptions): Promise<FetchCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FetchCallResponse>(await this.doRPCRequest("FetchCall", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new FetchCallResponse({}));
  }

  async fetchCall(request: FetchCallRequest): Promise<FetchCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.fetchCallWithOptions(request, runtime);
  }

  async getHotlineAgentStatusWithOptions(request: GetHotlineAgentStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetHotlineAgentStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetHotlineAgentStatusResponse>(await this.doRPCRequest("GetHotlineAgentStatus", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetHotlineAgentStatusResponse({}));
  }

  async getHotlineAgentStatus(request: GetHotlineAgentStatusRequest): Promise<GetHotlineAgentStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotlineAgentStatusWithOptions(request, runtime);
  }

  async startCallWithOptions(request: StartCallRequest, runtime: $Util.RuntimeOptions): Promise<StartCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartCallResponse>(await this.doRPCRequest("StartCall", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new StartCallResponse({}));
  }

  async startCall(request: StartCallRequest): Promise<StartCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startCallWithOptions(request, runtime);
  }

  async getQualityRuleTagListWithOptions(request: GetQualityRuleTagListRequest, runtime: $Util.RuntimeOptions): Promise<GetQualityRuleTagListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetQualityRuleTagListResponse>(await this.doRPCRequest("GetQualityRuleTagList", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetQualityRuleTagListResponse({}));
  }

  async getQualityRuleTagList(request: GetQualityRuleTagListRequest): Promise<GetQualityRuleTagListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQualityRuleTagListWithOptions(request, runtime);
  }

  async getOutbounNumListWithOptions(request: GetOutbounNumListRequest, runtime: $Util.RuntimeOptions): Promise<GetOutbounNumListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetOutbounNumListResponse>(await this.doRPCRequest("GetOutbounNumList", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetOutbounNumListResponse({}));
  }

  async getOutbounNumList(request: GetOutbounNumListRequest): Promise<GetOutbounNumListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOutbounNumListWithOptions(request, runtime);
  }

  async createThirdSsoAgentWithOptions(request: CreateThirdSsoAgentRequest, runtime: $Util.RuntimeOptions): Promise<CreateThirdSsoAgentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateThirdSsoAgentResponse>(await this.doRPCRequest("CreateThirdSsoAgent", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateThirdSsoAgentResponse({}));
  }

  async createThirdSsoAgent(request: CreateThirdSsoAgentRequest): Promise<CreateThirdSsoAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createThirdSsoAgentWithOptions(request, runtime);
  }

  async getSkillGroupStatusTotalWithOptions(tmpReq: GetSkillGroupStatusTotalRequest, runtime: $Util.RuntimeOptions): Promise<GetSkillGroupStatusTotalResponse> {
    Util.validateModel(tmpReq);
    let request = new GetSkillGroupStatusTotalShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!Util.isUnset(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetSkillGroupStatusTotalResponse>(await this.doRPCRequest("GetSkillGroupStatusTotal", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetSkillGroupStatusTotalResponse({}));
  }

  async getSkillGroupStatusTotal(request: GetSkillGroupStatusTotalRequest): Promise<GetSkillGroupStatusTotalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSkillGroupStatusTotalWithOptions(request, runtime);
  }

  async batchCreateQualityProjectsWithOptions(request: BatchCreateQualityProjectsRequest, runtime: $Util.RuntimeOptions): Promise<BatchCreateQualityProjectsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchCreateQualityProjectsResponse>(await this.doRPCRequest("BatchCreateQualityProjects", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new BatchCreateQualityProjectsResponse({}));
  }

  async batchCreateQualityProjects(request: BatchCreateQualityProjectsRequest): Promise<BatchCreateQualityProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchCreateQualityProjectsWithOptions(request, runtime);
  }

  async insertTaskDetailWithOptions(request: InsertTaskDetailRequest, runtime: $Util.RuntimeOptions): Promise<InsertTaskDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InsertTaskDetailResponse>(await this.doRPCRequest("InsertTaskDetail", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new InsertTaskDetailResponse({}));
  }

  async insertTaskDetail(request: InsertTaskDetailRequest): Promise<InsertTaskDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertTaskDetailWithOptions(request, runtime);
  }

  async updateSkillGroupWithOptions(request: UpdateSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSkillGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSkillGroupResponse>(await this.doRPCRequest("UpdateSkillGroup", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSkillGroupResponse({}));
  }

  async updateSkillGroup(request: UpdateSkillGroupRequest): Promise<UpdateSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSkillGroupWithOptions(request, runtime);
  }

  async hotlineSessionQueryWithOptions(request: HotlineSessionQueryRequest, runtime: $Util.RuntimeOptions): Promise<HotlineSessionQueryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<HotlineSessionQueryResponse>(await this.doRPCRequest("HotlineSessionQuery", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new HotlineSessionQueryResponse({}));
  }

  async hotlineSessionQuery(request: HotlineSessionQueryRequest): Promise<HotlineSessionQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.hotlineSessionQueryWithOptions(request, runtime);
  }

  async getQueueInformationWithOptions(tmpReq: GetQueueInformationRequest, runtime: $Util.RuntimeOptions): Promise<GetQueueInformationResponse> {
    Util.validateModel(tmpReq);
    let request = new GetQueueInformationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!Util.isUnset(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetQueueInformationResponse>(await this.doRPCRequest("GetQueueInformation", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetQueueInformationResponse({}));
  }

  async getQueueInformation(request: GetQueueInformationRequest): Promise<GetQueueInformationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQueueInformationWithOptions(request, runtime);
  }

  async getSkillGroupServiceStatusWithOptions(tmpReq: GetSkillGroupServiceStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetSkillGroupServiceStatusResponse> {
    Util.validateModel(tmpReq);
    let request = new GetSkillGroupServiceStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    if (!Util.isUnset(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetSkillGroupServiceStatusResponse>(await this.doRPCRequest("GetSkillGroupServiceStatus", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetSkillGroupServiceStatusResponse({}));
  }

  async getSkillGroupServiceStatus(request: GetSkillGroupServiceStatusRequest): Promise<GetSkillGroupServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSkillGroupServiceStatusWithOptions(request, runtime);
  }

  async getAgentDetailReportWithOptions(tmpReq: GetAgentDetailReportRequest, runtime: $Util.RuntimeOptions): Promise<GetAgentDetailReportResponse> {
    Util.validateModel(tmpReq);
    let request = new GetAgentDetailReportShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.agentIds)) {
      request.agentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentIds, "AgentIds", "simple");
    }

    if (!Util.isUnset(tmpReq.depIds)) {
      request.depIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.depIds, "DepIds", "simple");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAgentDetailReportResponse>(await this.doRPCRequest("GetAgentDetailReport", "2019-10-15", "HTTPS", "GET", "AK", "json", req, runtime), new GetAgentDetailReportResponse({}));
  }

  async getAgentDetailReport(request: GetAgentDetailReportRequest): Promise<GetAgentDetailReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAgentDetailReportWithOptions(request, runtime);
  }

  async queryTicketsWithOptions(tmpReq: QueryTicketsRequest, runtime: $Util.RuntimeOptions): Promise<QueryTicketsResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryTicketsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extra)) {
      request.extraShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extra, "Extra", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTicketsResponse>(await this.doRPCRequest("QueryTickets", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTicketsResponse({}));
  }

  async queryTickets(request: QueryTicketsRequest): Promise<QueryTicketsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTicketsWithOptions(request, runtime);
  }

  async queryOutboundTaskWithOptions(request: QueryOutboundTaskRequest, runtime: $Util.RuntimeOptions): Promise<QueryOutboundTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryOutboundTaskResponse>(await this.doRPCRequest("QueryOutboundTask", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new QueryOutboundTaskResponse({}));
  }

  async queryOutboundTask(request: QueryOutboundTaskRequest): Promise<QueryOutboundTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOutboundTaskWithOptions(request, runtime);
  }

  async joinThirdCallWithOptions(request: JoinThirdCallRequest, runtime: $Util.RuntimeOptions): Promise<JoinThirdCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<JoinThirdCallResponse>(await this.doRPCRequest("JoinThirdCall", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new JoinThirdCallResponse({}));
  }

  async joinThirdCall(request: JoinThirdCallRequest): Promise<JoinThirdCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.joinThirdCallWithOptions(request, runtime);
  }

  async createSkillGroupWithOptions(request: CreateSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateSkillGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSkillGroupResponse>(await this.doRPCRequest("CreateSkillGroup", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSkillGroupResponse({}));
  }

  async createSkillGroup(request: CreateSkillGroupRequest): Promise<CreateSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSkillGroupWithOptions(request, runtime);
  }

  async restartOutboundTaskWithOptions(request: RestartOutboundTaskRequest, runtime: $Util.RuntimeOptions): Promise<RestartOutboundTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RestartOutboundTaskResponse>(await this.doRPCRequest("RestartOutboundTask", "2019-10-15", "HTTPS", "POST", "AK", "json", req, runtime), new RestartOutboundTaskResponse({}));
  }

  async restartOutboundTask(request: RestartOutboundTaskRequest): Promise<RestartOutboundTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartOutboundTaskWithOptions(request, runtime);
  }

}
