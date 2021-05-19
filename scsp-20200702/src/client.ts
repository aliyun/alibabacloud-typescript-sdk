// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetUserTokenRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  nick?: string;
  appKey?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      nick: 'Nick',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      nick: 'string',
      appKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserTokenResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetUserTokenResponseBodyData;
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
      data: GetUserTokenResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUserTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTicketListRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  operatorId?: number;
  ticketStatus?: string;
  pageNo?: number;
  pageSize?: number;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      operatorId: 'OperatorId',
      ticketStatus: 'TicketStatus',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      operatorId: 'number',
      ticketStatus: 'string',
      pageNo: 'number',
      pageSize: 'number',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTicketListResponseBody extends $tea.Model {
  onePageSize?: number;
  requestId?: string;
  message?: string;
  totalPage?: number;
  totalResults?: number;
  pageNo?: number;
  data?: SearchTicketListResponseBodyData[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      onePageSize: 'OnePageSize',
      requestId: 'RequestId',
      message: 'Message',
      totalPage: 'TotalPage',
      totalResults: 'TotalResults',
      pageNo: 'PageNo',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onePageSize: 'number',
      requestId: 'string',
      message: 'string',
      totalPage: 'number',
      totalResults: 'number',
      pageNo: 'number',
      data: { 'type': 'array', 'itemType': SearchTicketListResponseBodyData },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTicketListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchTicketListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchTicketListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class EditEntityRouteRequest extends $tea.Model {
  entityId?: string;
  entityName?: string;
  entityBizCode?: string;
  entityBizCodeType?: string;
  entityRelationNumber?: string;
  departmentId?: string;
  groupId?: number;
  serviceId?: number;
  extInfo?: string;
  instanceId?: string;
  uniqueId?: number;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      entityName: 'EntityName',
      entityBizCode: 'EntityBizCode',
      entityBizCodeType: 'EntityBizCodeType',
      entityRelationNumber: 'EntityRelationNumber',
      departmentId: 'DepartmentId',
      groupId: 'GroupId',
      serviceId: 'ServiceId',
      extInfo: 'ExtInfo',
      instanceId: 'InstanceId',
      uniqueId: 'UniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      entityName: 'string',
      entityBizCode: 'string',
      entityBizCodeType: 'string',
      entityRelationNumber: 'string',
      departmentId: 'string',
      groupId: 'number',
      serviceId: 'number',
      extInfo: 'string',
      instanceId: 'string',
      uniqueId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditEntityRouteResponseBody extends $tea.Model {
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

export class EditEntityRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EditEntityRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EditEntityRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagListRequest extends $tea.Model {
  entityId?: string;
  entityType?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      entityType: 'EntityType',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      entityType: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetTagListResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': GetTagListResponseBodyData },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTagListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTagListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTicketRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  ticketId?: number;
  operatorId?: number;
  formData?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      ticketId: 'TicketId',
      operatorId: 'OperatorId',
      formData: 'FormData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      ticketId: 'number',
      operatorId: 'number',
      formData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTicketResponseBody extends $tea.Model {
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

export class UpdateTicketResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateTicketResponseBody,
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
      data: { 'type': 'array', 'itemType': 'string' },
      code: 'string',
      success: 'boolean',
      httpStatusCode: 'number',
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

export class QueryHotlineSessionRequest extends $tea.Model {
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotlineSessionResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: QueryHotlineSessionResponseBodyData;
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
      data: QueryHotlineSessionResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotlineSessionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryHotlineSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryHotlineSessionResponseBody,
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

export class StartCallV2Request extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  accountName?: string;
  caller?: string;
  callee?: string;
  jsonMsg?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
      caller: 'Caller',
      callee: 'Callee',
      jsonMsg: 'JsonMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      accountName: 'string',
      caller: 'string',
      callee: 'string',
      jsonMsg: 'string',
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

export class EnableRoleRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  roleId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      roleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableRoleResponseBody extends $tea.Model {
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

export class EnableRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableRoleResponseBody,
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
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetAgentResponseBodyData,
      code: 'string',
      success: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
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

export class GetCMSIdByForeignIdRequest extends $tea.Model {
  instanceId?: string;
  nick?: string;
  foreignId?: string;
  sourceId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nick: 'Nick',
      foreignId: 'ForeignId',
      sourceId: 'SourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nick: 'string',
      foreignId: 'string',
      sourceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCMSIdByForeignIdResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetCMSIdByForeignIdResponseBodyData;
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
      data: GetCMSIdByForeignIdResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCMSIdByForeignIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCMSIdByForeignIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCMSIdByForeignIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferToThirdCallRequest extends $tea.Model {
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

export class TransferToThirdCallResponseBody extends $tea.Model {
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

export class TransferToThirdCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TransferToThirdCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TransferToThirdCallResponseBody,
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

export class UpdateRingStatusRequest extends $tea.Model {
  uniqueBizId?: string;
  callOutStatus?: string;
  extra?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      uniqueBizId: 'UniqueBizId',
      callOutStatus: 'CallOutStatus',
      extra: 'Extra',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uniqueBizId: 'string',
      callOutStatus: 'string',
      extra: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRingStatusResponseBody extends $tea.Model {
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

export class UpdateRingStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateRingStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateRingStatusResponseBody,
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

export class DeleteEntityRouteRequest extends $tea.Model {
  uniqueId?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      uniqueId: 'UniqueId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uniqueId: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEntityRouteResponseBody extends $tea.Model {
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

export class DeleteEntityRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteEntityRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteEntityRouteResponseBody,
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

export class CreateTicketRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  templateId?: number;
  categoryId?: number;
  creatorId?: number;
  creatorType?: number;
  creatorName?: string;
  memberId?: number;
  memberName?: string;
  fromInfo?: string;
  priority?: number;
  carbonCopy?: string;
  formData?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      templateId: 'TemplateId',
      categoryId: 'CategoryId',
      creatorId: 'CreatorId',
      creatorType: 'CreatorType',
      creatorName: 'CreatorName',
      memberId: 'MemberId',
      memberName: 'MemberName',
      fromInfo: 'FromInfo',
      priority: 'Priority',
      carbonCopy: 'CarbonCopy',
      formData: 'FormData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      templateId: 'number',
      categoryId: 'number',
      creatorId: 'number',
      creatorType: 'number',
      creatorName: 'string',
      memberId: 'number',
      memberName: 'string',
      fromInfo: 'string',
      priority: 'number',
      carbonCopy: 'string',
      formData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTicketResponseBody extends $tea.Model {
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

export class CreateTicketResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomerRequest extends $tea.Model {
  prodLineId?: number;
  bizType?: string;
  name?: string;
  typeCode?: string;
  phone?: string;
  instanceId?: string;
  managerName?: string;
  contacter?: string;
  industry?: string;
  position?: string;
  email?: string;
  dingding?: string;
  outerId?: string;
  outerIdType?: number;
  customerId?: number;
  static names(): { [key: string]: string } {
    return {
      prodLineId: 'ProdLineId',
      bizType: 'BizType',
      name: 'Name',
      typeCode: 'TypeCode',
      phone: 'Phone',
      instanceId: 'InstanceId',
      managerName: 'ManagerName',
      contacter: 'Contacter',
      industry: 'Industry',
      position: 'Position',
      email: 'Email',
      dingding: 'Dingding',
      outerId: 'OuterId',
      outerIdType: 'OuterIdType',
      customerId: 'CustomerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prodLineId: 'number',
      bizType: 'string',
      name: 'string',
      typeCode: 'string',
      phone: 'string',
      instanceId: 'string',
      managerName: 'string',
      contacter: 'string',
      industry: 'string',
      position: 'string',
      email: 'string',
      dingding: 'string',
      outerId: 'string',
      outerIdType: 'number',
      customerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomerResponseBody extends $tea.Model {
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

export class UpdateCustomerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateCustomerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateCustomerResponseBody,
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

export class GetEntityTagRelationRequest extends $tea.Model {
  entityId?: string;
  entityType?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      entityType: 'EntityType',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      entityType: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEntityTagRelationResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetEntityTagRelationResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': GetEntityTagRelationResponseBodyData },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEntityTagRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetEntityTagRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetEntityTagRelationResponseBody,
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

export class GetCallsPerDayRequest extends $tea.Model {
  instanceId?: string;
  dataIdStart?: string;
  dataIdEnd?: string;
  dataId?: string;
  hourId?: string;
  minuteId?: string;
  phoneNumbers?: string;
  havePhoneNumbers?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      dataIdStart: 'DataIdStart',
      dataIdEnd: 'DataIdEnd',
      dataId: 'DataId',
      hourId: 'HourId',
      minuteId: 'MinuteId',
      phoneNumbers: 'PhoneNumbers',
      havePhoneNumbers: 'HavePhoneNumbers',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      dataIdStart: 'string',
      dataIdEnd: 'string',
      dataId: 'string',
      hourId: 'string',
      minuteId: 'string',
      phoneNumbers: 'string',
      havePhoneNumbers: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallsPerDayResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: string;
  data?: GetCallsPerDayResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'string',
      data: GetCallsPerDayResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallsPerDayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCallsPerDayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCallsPerDayResponseBody,
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

export class QueryTicketCountRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  operatorId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      operatorId: 'OperatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      operatorId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTicketCountResponseBody extends $tea.Model {
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

export class QueryTicketCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTicketCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTicketCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppMessagePushRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  status?: number;
  expirationTime?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
      status: 'Status',
      expirationTime: 'ExpirationTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
      status: 'number',
      expirationTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppMessagePushResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  code?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      code: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppMessagePushResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AppMessagePushResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AppMessagePushResponseBody,
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

export class AssignTicketRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  ticketId?: number;
  operatorId?: number;
  acceptorId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      ticketId: 'TicketId',
      operatorId: 'OperatorId',
      acceptorId: 'AcceptorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      ticketId: 'number',
      operatorId: 'number',
      acceptorId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignTicketResponseBody extends $tea.Model {
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

export class AssignTicketResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssignTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssignTicketResponseBody,
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

export class CreateTicketWithBizDataRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  templateId?: number;
  categoryId?: number;
  creatorId?: number;
  creatorType?: number;
  creatorName?: string;
  memberId?: number;
  memberName?: string;
  fromInfo?: string;
  priority?: number;
  carbonCopy?: string;
  formData?: string;
  bizData?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      templateId: 'TemplateId',
      categoryId: 'CategoryId',
      creatorId: 'CreatorId',
      creatorType: 'CreatorType',
      creatorName: 'CreatorName',
      memberId: 'MemberId',
      memberName: 'MemberName',
      fromInfo: 'FromInfo',
      priority: 'Priority',
      carbonCopy: 'CarbonCopy',
      formData: 'FormData',
      bizData: 'BizData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      templateId: 'number',
      categoryId: 'number',
      creatorId: 'number',
      creatorType: 'number',
      creatorName: 'string',
      memberId: 'number',
      memberName: 'string',
      fromInfo: 'string',
      priority: 'number',
      carbonCopy: 'string',
      formData: 'string',
      bizData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTicketWithBizDataResponseBody extends $tea.Model {
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

export class CreateTicketWithBizDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTicketWithBizDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTicketWithBizDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTicketByPhoneRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  phone?: string;
  templateId?: number;
  ticketStatus?: string;
  pageNo?: number;
  pageSize?: number;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      phone: 'Phone',
      templateId: 'TemplateId',
      ticketStatus: 'TicketStatus',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      phone: 'string',
      templateId: 'number',
      ticketStatus: 'string',
      pageNo: 'number',
      pageSize: 'number',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTicketByPhoneResponseBody extends $tea.Model {
  onePageSize?: number;
  requestId?: string;
  message?: string;
  totalPage?: number;
  totalResults?: number;
  pageNo?: number;
  data?: SearchTicketByPhoneResponseBodyData[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      onePageSize: 'OnePageSize',
      requestId: 'RequestId',
      message: 'Message',
      totalPage: 'TotalPage',
      totalResults: 'TotalResults',
      pageNo: 'PageNo',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onePageSize: 'number',
      requestId: 'string',
      message: 'string',
      totalPage: 'number',
      totalResults: 'number',
      pageNo: 'number',
      data: { 'type': 'array', 'itemType': SearchTicketByPhoneResponseBodyData },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTicketByPhoneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchTicketByPhoneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchTicketByPhoneResponseBody,
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

export class CreateEntityIvrRouteRequest extends $tea.Model {
  entityId?: string;
  entityName?: string;
  entityBizCode?: string;
  entityBizCodeType?: string;
  entityRelationNumber?: string;
  departmentId?: string;
  groupId?: number;
  serviceId?: number;
  extInfo?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      entityName: 'EntityName',
      entityBizCode: 'EntityBizCode',
      entityBizCodeType: 'EntityBizCodeType',
      entityRelationNumber: 'EntityRelationNumber',
      departmentId: 'DepartmentId',
      groupId: 'GroupId',
      serviceId: 'ServiceId',
      extInfo: 'ExtInfo',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      entityName: 'string',
      entityBizCode: 'string',
      entityBizCodeType: 'string',
      entityRelationNumber: 'string',
      departmentId: 'string',
      groupId: 'number',
      serviceId: 'number',
      extInfo: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEntityIvrRouteResponseBody extends $tea.Model {
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

export class CreateEntityIvrRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateEntityIvrRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateEntityIvrRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseTicketRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  ticketId?: number;
  actionItems?: string;
  operatorId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      ticketId: 'TicketId',
      actionItems: 'ActionItems',
      operatorId: 'OperatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      ticketId: 'number',
      actionItems: 'string',
      operatorId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseTicketResponseBody extends $tea.Model {
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

export class CloseTicketResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CloseTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CloseTicketResponseBody,
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

export class QueryRingDetailListRequest extends $tea.Model {
  pageSize?: number;
  pageNo?: number;
  startDate?: number;
  endDate?: number;
  callOutStatus?: string;
  extra?: string;
  instanceId?: string;
  fromPhoneNumList?: { [key: string]: any };
  toPhoneNumList?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNo: 'PageNo',
      startDate: 'StartDate',
      endDate: 'EndDate',
      callOutStatus: 'CallOutStatus',
      extra: 'Extra',
      instanceId: 'InstanceId',
      fromPhoneNumList: 'FromPhoneNumList',
      toPhoneNumList: 'ToPhoneNumList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNo: 'number',
      startDate: 'number',
      endDate: 'number',
      callOutStatus: 'string',
      extra: 'string',
      instanceId: 'string',
      fromPhoneNumList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      toPhoneNumList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRingDetailListShrinkRequest extends $tea.Model {
  pageSize?: number;
  pageNo?: number;
  startDate?: number;
  endDate?: number;
  callOutStatus?: string;
  extra?: string;
  instanceId?: string;
  fromPhoneNumListShrink?: string;
  toPhoneNumListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNo: 'PageNo',
      startDate: 'StartDate',
      endDate: 'EndDate',
      callOutStatus: 'CallOutStatus',
      extra: 'Extra',
      instanceId: 'InstanceId',
      fromPhoneNumListShrink: 'FromPhoneNumList',
      toPhoneNumListShrink: 'ToPhoneNumList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNo: 'number',
      startDate: 'number',
      endDate: 'number',
      callOutStatus: 'string',
      extra: 'string',
      instanceId: 'string',
      fromPhoneNumListShrink: 'string',
      toPhoneNumListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRingDetailListResponseBody extends $tea.Model {
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

export class QueryRingDetailListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryRingDetailListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryRingDetailListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTicketByIdRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  ticketId?: number;
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      ticketId: 'TicketId',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      ticketId: 'number',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTicketByIdResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: SearchTicketByIdResponseBodyData;
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
      data: SearchTicketByIdResponseBodyData,
      code: 'string',
      success: 'boolean',
      httpStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTicketByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchTicketByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchTicketByIdResponseBody,
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
  channelType?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      description: 'Description',
      displayName: 'DisplayName',
      clientToken: 'ClientToken',
      channelType: 'ChannelType',
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
      channelType: 'number',
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

export class QueryServiceConfigRequest extends $tea.Model {
  instanceId?: string;
  viewCode?: string;
  parameters?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      viewCode: 'ViewCode',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      viewCode: 'string',
      parameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryServiceConfigResponseBody extends $tea.Model {
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

export class QueryServiceConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryServiceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryServiceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableRoleRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  roleId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      roleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableRoleResponseBody extends $tea.Model {
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

export class DisableRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEntityRouteListRequest extends $tea.Model {
  pageSize?: number;
  pageNo?: number;
  instanceId?: string;
  entityRelationNumber?: string;
  entityName?: string;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNo: 'PageNo',
      instanceId: 'InstanceId',
      entityRelationNumber: 'EntityRelationNumber',
      entityName: 'EntityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNo: 'number',
      instanceId: 'string',
      entityRelationNumber: 'string',
      entityName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEntityRouteListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetEntityRouteListResponseBodyData;
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
      data: GetEntityRouteListResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEntityRouteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetEntityRouteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetEntityRouteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthInfoRequest extends $tea.Model {
  instanceId?: string;
  foreignId?: string;
  appKey?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      foreignId: 'ForeignId',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      foreignId: 'string',
      appKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthInfoResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetAuthInfoResponseBodyData;
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
      data: GetAuthInfoResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAuthInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAuthInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  roleId?: number;
  roleName?: string;
  operator?: string;
  permissionId?: number[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      roleId: 'RoleId',
      roleName: 'RoleName',
      operator: 'Operator',
      permissionId: 'PermissionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      roleId: 'number',
      roleName: 'string',
      operator: 'string',
      permissionId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleResponseBody extends $tea.Model {
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

export class UpdateRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTicketTemplateSchemaRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTicketTemplateSchemaResponseBody extends $tea.Model {
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

export class GetTicketTemplateSchemaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTicketTemplateSchemaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTicketTemplateSchemaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferCallToPhoneRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  accountName?: string;
  caller?: string;
  callee?: string;
  callId?: string;
  jobId?: string;
  connectionId?: string;
  holdConnectionId?: string;
  type?: number;
  isSingleTransfer?: boolean;
  callerPhone?: string;
  calleePhone?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
      caller: 'Caller',
      callee: 'Callee',
      callId: 'CallId',
      jobId: 'JobId',
      connectionId: 'ConnectionId',
      holdConnectionId: 'HoldConnectionId',
      type: 'Type',
      isSingleTransfer: 'IsSingleTransfer',
      callerPhone: 'callerPhone',
      calleePhone: 'calleePhone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      accountName: 'string',
      caller: 'string',
      callee: 'string',
      callId: 'string',
      jobId: 'string',
      connectionId: 'string',
      holdConnectionId: 'string',
      type: 'number',
      isSingleTransfer: 'boolean',
      callerPhone: 'string',
      calleePhone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferCallToPhoneResponseBody extends $tea.Model {
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

export class TransferCallToPhoneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TransferCallToPhoneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TransferCallToPhoneResponseBody,
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
  groupName?: string;
  groupType?: number;
  groupId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      clientToken: 'ClientToken',
      groupName: 'GroupName',
      groupType: 'GroupType',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      clientToken: 'string',
      groupName: 'string',
      groupType: 'number',
      groupId: 'number',
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

export class GetEntityRouteRequest extends $tea.Model {
  entityId?: string;
  uniqueId?: number;
  instanceId?: string;
  entityName?: string;
  entityRelationNumber?: string;
  entityBizCode?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      uniqueId: 'UniqueId',
      instanceId: 'InstanceId',
      entityName: 'EntityName',
      entityRelationNumber: 'EntityRelationNumber',
      entityBizCode: 'EntityBizCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      uniqueId: 'number',
      instanceId: 'string',
      entityName: 'string',
      entityRelationNumber: 'string',
      entityBizCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEntityRouteResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetEntityRouteResponseBodyData;
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
      data: GetEntityRouteResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEntityRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetEntityRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetEntityRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEntityTagRelationRequest extends $tea.Model {
  entityTagParam?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      entityTagParam: 'EntityTagParam',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityTagParam: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEntityTagRelationResponseBody extends $tea.Model {
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

export class UpdateEntityTagRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateEntityTagRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateEntityTagRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOuterCallCenterDataRequest extends $tea.Model {
  sessionId?: string;
  interveneTime?: string;
  callType?: string;
  fromPhoneNum?: string;
  toPhoneNum?: string;
  endReason?: string;
  userInfo?: string;
  recordUrl?: string;
  bizType?: string;
  bizId?: string;
  tenantId?: string;
  extInfo?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
      interveneTime: 'InterveneTime',
      callType: 'CallType',
      fromPhoneNum: 'FromPhoneNum',
      toPhoneNum: 'ToPhoneNum',
      endReason: 'EndReason',
      userInfo: 'UserInfo',
      recordUrl: 'RecordUrl',
      bizType: 'BizType',
      bizId: 'BizId',
      tenantId: 'TenantId',
      extInfo: 'ExtInfo',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
      interveneTime: 'string',
      callType: 'string',
      fromPhoneNum: 'string',
      toPhoneNum: 'string',
      endReason: 'string',
      userInfo: 'string',
      recordUrl: 'string',
      bizType: 'string',
      bizId: 'string',
      tenantId: 'string',
      extInfo: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOuterCallCenterDataResponseBody extends $tea.Model {
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

export class CreateOuterCallCenterDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateOuterCallCenterDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateOuterCallCenterDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendOutboundCommandRequest extends $tea.Model {
  instanceId?: string;
  accountName?: string;
  callingNumber?: string;
  calledNumber?: string;
  customerInfo?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      accountName: 'AccountName',
      callingNumber: 'CallingNumber',
      calledNumber: 'CalledNumber',
      customerInfo: 'CustomerInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      accountName: 'string',
      callingNumber: 'string',
      calledNumber: 'string',
      customerInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendOutboundCommandResponseBody extends $tea.Model {
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

export class SendOutboundCommandResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SendOutboundCommandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendOutboundCommandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoleRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  roleName?: string;
  operator?: string;
  permissionId?: number[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      roleName: 'RoleName',
      operator: 'Operator',
      permissionId: 'PermissionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      roleName: 'string',
      operator: 'string',
      permissionId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoleResponseBody extends $tea.Model {
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

export class CreateRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRoleResponseBody,
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

export class GrantRolesRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  accountName?: string;
  operator?: string;
  roleId?: number[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
      operator: 'Operator',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      accountName: 'string',
      operator: 'string',
      roleId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantRolesResponseBody extends $tea.Model {
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

export class GrantRolesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GrantRolesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GrantRolesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOuterCallCenterDataListRequest extends $tea.Model {
  sessionId?: string;
  fromPhoneNum?: string;
  toPhoneNum?: string;
  bizId?: string;
  instanceId?: string;
  queryStartTime?: string;
  queryEndTime?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
      fromPhoneNum: 'FromPhoneNum',
      toPhoneNum: 'ToPhoneNum',
      bizId: 'BizId',
      instanceId: 'InstanceId',
      queryStartTime: 'QueryStartTime',
      queryEndTime: 'QueryEndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
      fromPhoneNum: 'string',
      toPhoneNum: 'string',
      bizId: 'string',
      instanceId: 'string',
      queryStartTime: 'string',
      queryEndTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOuterCallCenterDataListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetOuterCallCenterDataListResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': GetOuterCallCenterDataListResponseBodyData },
      code: 'string',
      success: 'boolean',
      httpStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOuterCallCenterDataListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOuterCallCenterDataListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOuterCallCenterDataListResponseBody,
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
  accountName?: string;
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
      accountName: 'AccountName',
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
      accountName: 'string',
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
  accountName?: string;
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
      accountName: 'AccountName',
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
      accountName: 'string',
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

export class QueryTicketActionsRequest extends $tea.Model {
  instanceId?: string;
  ticketId?: string;
  actionCodeList?: number[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ticketId: 'TicketId',
      actionCodeList: 'ActionCodeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ticketId: 'string',
      actionCodeList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTicketActionsResponseBody extends $tea.Model {
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

export class QueryTicketActionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTicketActionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTicketActionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferCallToAgentRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  accountName?: string;
  targetAccountName?: string;
  callId?: string;
  jobId?: string;
  connectionId?: string;
  holdConnectionId?: string;
  type?: number;
  isSingleTransfer?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
      targetAccountName: 'TargetAccountName',
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
      targetAccountName: 'string',
      callId: 'string',
      jobId: 'string',
      connectionId: 'string',
      holdConnectionId: 'string',
      type: 'number',
      isSingleTransfer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferCallToAgentResponseBody extends $tea.Model {
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

export class TransferCallToAgentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TransferCallToAgentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TransferCallToAgentResponseBody,
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

export class ExecuteActivityRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  ticketId?: number;
  operatorId?: number;
  activityCode?: string;
  activityForm?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      ticketId: 'TicketId',
      operatorId: 'OperatorId',
      activityCode: 'ActivityCode',
      activityForm: 'ActivityForm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      ticketId: 'number',
      operatorId: 'number',
      activityCode: 'string',
      activityForm: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteActivityResponseBody extends $tea.Model {
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

export class ExecuteActivityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExecuteActivityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExecuteActivityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGrantedRoleIdsRequest extends $tea.Model {
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

export class GetGrantedRoleIdsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: number[];
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
      data: { 'type': 'array', 'itemType': 'number' },
      code: 'string',
      success: 'boolean',
      httpStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGrantedRoleIdsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetGrantedRoleIdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetGrantedRoleIdsResponseBody,
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
      data: { 'type': 'array', 'itemType': ListHotlineRecordResponseBodyData },
      code: 'string',
      success: 'boolean',
      httpStatusCode: 'number',
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

export class CreateCustomerRequest extends $tea.Model {
  prodLineId?: number;
  bizType?: string;
  name?: string;
  typeCode?: string;
  phone?: string;
  instanceId?: string;
  managerName?: string;
  contacter?: string;
  industry?: string;
  position?: string;
  email?: string;
  dingding?: string;
  outerId?: string;
  outerIdType?: number;
  static names(): { [key: string]: string } {
    return {
      prodLineId: 'ProdLineId',
      bizType: 'BizType',
      name: 'Name',
      typeCode: 'TypeCode',
      phone: 'Phone',
      instanceId: 'InstanceId',
      managerName: 'ManagerName',
      contacter: 'Contacter',
      industry: 'Industry',
      position: 'Position',
      email: 'Email',
      dingding: 'Dingding',
      outerId: 'OuterId',
      outerIdType: 'OuterIdType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prodLineId: 'number',
      bizType: 'string',
      name: 'string',
      typeCode: 'string',
      phone: 'string',
      instanceId: 'string',
      managerName: 'string',
      contacter: 'string',
      industry: 'string',
      position: 'string',
      email: 'string',
      dingding: 'string',
      outerId: 'string',
      outerIdType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomerResponseBody extends $tea.Model {
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

export class CreateCustomerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCustomerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCustomerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserTokenResponseBodyData extends $tea.Model {
  expires?: number;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      expires: 'Expires',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expires: 'number',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTicketListResponseBodyData extends $tea.Model {
  memberName?: string;
  carbonCopy?: string;
  createTime?: number;
  serviceId?: number;
  ticketId?: number;
  priority?: number;
  creatorId?: number;
  formData?: string;
  fromInfo?: string;
  modifiedTime?: number;
  taskStatus?: string;
  creatorName?: string;
  categoryId?: number;
  creatorType?: number;
  memberId?: number;
  caseStatus?: number;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      memberName: 'MemberName',
      carbonCopy: 'CarbonCopy',
      createTime: 'CreateTime',
      serviceId: 'ServiceId',
      ticketId: 'TicketId',
      priority: 'Priority',
      creatorId: 'CreatorId',
      formData: 'FormData',
      fromInfo: 'FromInfo',
      modifiedTime: 'ModifiedTime',
      taskStatus: 'TaskStatus',
      creatorName: 'CreatorName',
      categoryId: 'CategoryId',
      creatorType: 'CreatorType',
      memberId: 'MemberId',
      caseStatus: 'CaseStatus',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberName: 'string',
      carbonCopy: 'string',
      createTime: 'number',
      serviceId: 'number',
      ticketId: 'number',
      priority: 'number',
      creatorId: 'number',
      formData: 'string',
      fromInfo: 'string',
      modifiedTime: 'number',
      taskStatus: 'string',
      creatorName: 'string',
      categoryId: 'number',
      creatorType: 'number',
      memberId: 'number',
      caseStatus: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagListResponseBodyDataTagValues extends $tea.Model {
  status?: string;
  description?: string;
  tagName?: string;
  tagGroupCode?: string;
  tagCode?: string;
  tagGroupName?: string;
  entityRelationNumber?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      description: 'Description',
      tagName: 'TagName',
      tagGroupCode: 'TagGroupCode',
      tagCode: 'TagCode',
      tagGroupName: 'TagGroupName',
      entityRelationNumber: 'EntityRelationNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      description: 'string',
      tagName: 'string',
      tagGroupCode: 'string',
      tagCode: 'string',
      tagGroupName: 'string',
      entityRelationNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagListResponseBodyData extends $tea.Model {
  scenarioCode?: string;
  tagGroupCode?: string;
  tagValues?: GetTagListResponseBodyDataTagValues[];
  tagGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      scenarioCode: 'ScenarioCode',
      tagGroupCode: 'TagGroupCode',
      tagValues: 'TagValues',
      tagGroupName: 'TagGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scenarioCode: 'string',
      tagGroupCode: 'string',
      tagValues: { 'type': 'array', 'itemType': GetTagListResponseBodyDataTagValues },
      tagGroupName: 'string',
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

export class QueryHotlineSessionResponseBodyDataCallDetailRecord extends $tea.Model {
  callResult?: string;
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
  hangUpRole?: string;
  memberName?: string;
  evaluationScore?: number;
  acid?: string;
  ringStartTime?: string;
  callType?: number;
  groupName?: string;
  groupId?: number;
  ringEndTime?: string;
  inQueueTime?: string;
  callingNumber?: string;
  memberId?: string;
  queueUpContinueTime?: number;
  static names(): { [key: string]: string } {
    return {
      callResult: 'CallResult',
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
      hangUpRole: 'HangUpRole',
      memberName: 'MemberName',
      evaluationScore: 'EvaluationScore',
      acid: 'Acid',
      ringStartTime: 'RingStartTime',
      callType: 'CallType',
      groupName: 'GroupName',
      groupId: 'GroupId',
      ringEndTime: 'RingEndTime',
      inQueueTime: 'InQueueTime',
      callingNumber: 'CallingNumber',
      memberId: 'MemberId',
      queueUpContinueTime: 'QueueUpContinueTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callResult: 'string',
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
      hangUpRole: 'string',
      memberName: 'string',
      evaluationScore: 'number',
      acid: 'string',
      ringStartTime: 'string',
      callType: 'number',
      groupName: 'string',
      groupId: 'number',
      ringEndTime: 'string',
      inQueueTime: 'string',
      callingNumber: 'string',
      memberId: 'string',
      queueUpContinueTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotlineSessionResponseBodyData extends $tea.Model {
  callDetailRecord?: QueryHotlineSessionResponseBodyDataCallDetailRecord[];
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
      callDetailRecord: { 'type': 'array', 'itemType': QueryHotlineSessionResponseBodyDataCallDetailRecord },
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
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

export class GetCMSIdByForeignIdResponseBodyData extends $tea.Model {
  status?: number;
  customerTypeId?: number;
  avatar?: string;
  gender?: string;
  foreignId?: string;
  userId?: string;
  nick?: string;
  anonymity?: boolean;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      customerTypeId: 'CustomerTypeId',
      avatar: 'Avatar',
      gender: 'Gender',
      foreignId: 'ForeignId',
      userId: 'UserId',
      nick: 'Nick',
      anonymity: 'Anonymity',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      customerTypeId: 'number',
      avatar: 'string',
      gender: 'string',
      foreignId: 'string',
      userId: 'string',
      nick: 'string',
      anonymity: 'boolean',
      phone: 'string',
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

export class GetEntityTagRelationResponseBodyData extends $tea.Model {
  tagName?: string;
  tagGroupCode?: string;
  entityId?: string;
  tagCode?: string;
  entityType?: string;
  tagGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      tagName: 'TagName',
      tagGroupCode: 'TagGroupCode',
      entityId: 'EntityId',
      tagCode: 'TagCode',
      entityType: 'EntityType',
      tagGroupName: 'TagGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagName: 'string',
      tagGroupCode: 'string',
      entityId: 'string',
      tagCode: 'string',
      entityType: 'string',
      tagGroupName: 'string',
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

export class GetCallsPerDayResponseBodyDataCallsPerdayResponseList extends $tea.Model {
  dataId?: string;
  hourId?: string;
  tenantId?: string;
  tenantName?: string;
  phoneNum?: string;
  callOutCnt?: string;
  callInCnt?: string;
  minuteId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      hourId: 'HourId',
      tenantId: 'TenantId',
      tenantName: 'TenantName',
      phoneNum: 'PhoneNum',
      callOutCnt: 'CallOutCnt',
      callInCnt: 'CallInCnt',
      minuteId: 'MinuteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      hourId: 'string',
      tenantId: 'string',
      tenantName: 'string',
      phoneNum: 'string',
      callOutCnt: 'string',
      callInCnt: 'string',
      minuteId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallsPerDayResponseBodyData extends $tea.Model {
  totalNum?: number;
  pageSize?: number;
  pageNo?: string;
  callsPerdayResponseList?: GetCallsPerDayResponseBodyDataCallsPerdayResponseList[];
  static names(): { [key: string]: string } {
    return {
      totalNum: 'TotalNum',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
      callsPerdayResponseList: 'CallsPerdayResponseList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalNum: 'number',
      pageSize: 'number',
      pageNo: 'string',
      callsPerdayResponseList: { 'type': 'array', 'itemType': GetCallsPerDayResponseBodyDataCallsPerdayResponseList },
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

export class SearchTicketByPhoneResponseBodyData extends $tea.Model {
  memberName?: string;
  carbonCopy?: string;
  createTime?: number;
  serviceId?: number;
  ticketId?: number;
  priority?: number;
  creatorId?: number;
  formData?: string;
  fromInfo?: string;
  modifiedTime?: number;
  taskStatus?: string;
  creatorName?: string;
  categoryId?: number;
  creatorType?: number;
  memberId?: number;
  caseStatus?: number;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      memberName: 'MemberName',
      carbonCopy: 'CarbonCopy',
      createTime: 'CreateTime',
      serviceId: 'ServiceId',
      ticketId: 'TicketId',
      priority: 'Priority',
      creatorId: 'CreatorId',
      formData: 'FormData',
      fromInfo: 'FromInfo',
      modifiedTime: 'ModifiedTime',
      taskStatus: 'TaskStatus',
      creatorName: 'CreatorName',
      categoryId: 'CategoryId',
      creatorType: 'CreatorType',
      memberId: 'MemberId',
      caseStatus: 'CaseStatus',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberName: 'string',
      carbonCopy: 'string',
      createTime: 'number',
      serviceId: 'number',
      ticketId: 'number',
      priority: 'number',
      creatorId: 'number',
      formData: 'string',
      fromInfo: 'string',
      modifiedTime: 'number',
      taskStatus: 'string',
      creatorName: 'string',
      categoryId: 'number',
      creatorType: 'number',
      memberId: 'number',
      caseStatus: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTicketByIdResponseBodyDataActivities extends $tea.Model {
  activityFormData?: string;
  activityCode?: string;
  static names(): { [key: string]: string } {
    return {
      activityFormData: 'ActivityFormData',
      activityCode: 'ActivityCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityFormData: 'string',
      activityCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTicketByIdResponseBodyDataActivityRecords extends $tea.Model {
  actionCode?: string;
  actionCodeDesc?: string;
  operatorName?: string;
  memo?: string;
  gmtCreate?: number;
  static names(): { [key: string]: string } {
    return {
      actionCode: 'ActionCode',
      actionCodeDesc: 'ActionCodeDesc',
      operatorName: 'OperatorName',
      memo: 'Memo',
      gmtCreate: 'GmtCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCode: 'string',
      actionCodeDesc: 'string',
      operatorName: 'string',
      memo: 'string',
      gmtCreate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTicketByIdResponseBodyData extends $tea.Model {
  carbonCopy?: string;
  memberName?: string;
  createTime?: number;
  serviceId?: number;
  ticketId?: number;
  priority?: number;
  creatorId?: number;
  formData?: string;
  activities?: SearchTicketByIdResponseBodyDataActivities[];
  activityRecords?: SearchTicketByIdResponseBodyDataActivityRecords[];
  fromInfo?: string;
  modifiedTime?: number;
  creatorName?: string;
  categoryId?: number;
  creatorType?: number;
  memberId?: number;
  caseStatus?: number;
  templateId?: number;
  ticketName?: string;
  static names(): { [key: string]: string } {
    return {
      carbonCopy: 'CarbonCopy',
      memberName: 'MemberName',
      createTime: 'CreateTime',
      serviceId: 'ServiceId',
      ticketId: 'TicketId',
      priority: 'Priority',
      creatorId: 'CreatorId',
      formData: 'FormData',
      activities: 'Activities',
      activityRecords: 'ActivityRecords',
      fromInfo: 'FromInfo',
      modifiedTime: 'ModifiedTime',
      creatorName: 'CreatorName',
      categoryId: 'CategoryId',
      creatorType: 'CreatorType',
      memberId: 'MemberId',
      caseStatus: 'CaseStatus',
      templateId: 'TemplateId',
      ticketName: 'TicketName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonCopy: 'string',
      memberName: 'string',
      createTime: 'number',
      serviceId: 'number',
      ticketId: 'number',
      priority: 'number',
      creatorId: 'number',
      formData: 'string',
      activities: { 'type': 'array', 'itemType': SearchTicketByIdResponseBodyDataActivities },
      activityRecords: { 'type': 'array', 'itemType': SearchTicketByIdResponseBodyDataActivityRecords },
      fromInfo: 'string',
      modifiedTime: 'number',
      creatorName: 'string',
      categoryId: 'number',
      creatorType: 'number',
      memberId: 'number',
      caseStatus: 'number',
      templateId: 'number',
      ticketName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEntityRouteListResponseBodyDataEntityRouteList extends $tea.Model {
  entityBizCodeType?: string;
  groupId?: string;
  entityId?: string;
  serviceId?: string;
  departmentId?: string;
  entityBizCode?: string;
  uniqueId?: number;
  entityName?: string;
  extInfo?: string;
  entityRelationNumber?: string;
  static names(): { [key: string]: string } {
    return {
      entityBizCodeType: 'EntityBizCodeType',
      groupId: 'GroupId',
      entityId: 'EntityId',
      serviceId: 'ServiceId',
      departmentId: 'DepartmentId',
      entityBizCode: 'EntityBizCode',
      uniqueId: 'UniqueId',
      entityName: 'EntityName',
      extInfo: 'ExtInfo',
      entityRelationNumber: 'EntityRelationNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityBizCodeType: 'string',
      groupId: 'string',
      entityId: 'string',
      serviceId: 'string',
      departmentId: 'string',
      entityBizCode: 'string',
      uniqueId: 'number',
      entityName: 'string',
      extInfo: 'string',
      entityRelationNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEntityRouteListResponseBodyData extends $tea.Model {
  entityRouteList?: GetEntityRouteListResponseBodyDataEntityRouteList[];
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      entityRouteList: 'EntityRouteList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityRouteList: { 'type': 'array', 'itemType': GetEntityRouteListResponseBodyDataEntityRouteList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthInfoResponseBodyData extends $tea.Model {
  appName?: string;
  time?: number;
  appKey?: string;
  app?: string;
  userId?: string;
  code?: string;
  sessionId?: string;
  userName?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      time: 'Time',
      appKey: 'AppKey',
      app: 'App',
      userId: 'UserId',
      code: 'Code',
      sessionId: 'SessionId',
      userName: 'UserName',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      time: 'number',
      appKey: 'string',
      app: 'string',
      userId: 'string',
      code: 'string',
      sessionId: 'string',
      userName: 'string',
      tenantId: 'string',
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

export class GetEntityRouteResponseBodyData extends $tea.Model {
  entityBizCodeType?: string;
  groupId?: number;
  entityId?: string;
  serviceId?: number;
  entityBizCode?: string;
  departmentId?: string;
  uniqueId?: number;
  entityName?: string;
  extInfo?: string;
  entityRelationNumber?: string;
  static names(): { [key: string]: string } {
    return {
      entityBizCodeType: 'EntityBizCodeType',
      groupId: 'GroupId',
      entityId: 'EntityId',
      serviceId: 'ServiceId',
      entityBizCode: 'EntityBizCode',
      departmentId: 'DepartmentId',
      uniqueId: 'UniqueId',
      entityName: 'EntityName',
      extInfo: 'ExtInfo',
      entityRelationNumber: 'EntityRelationNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityBizCodeType: 'string',
      groupId: 'number',
      entityId: 'string',
      serviceId: 'number',
      entityBizCode: 'string',
      departmentId: 'string',
      uniqueId: 'number',
      entityName: 'string',
      extInfo: 'string',
      entityRelationNumber: 'string',
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

export class GetOuterCallCenterDataListResponseBodyData extends $tea.Model {
  endReason?: string;
  callType?: string;
  acid?: string;
  toPhoneNum?: string;
  userInfo?: string;
  interveneTime?: string;
  bizId?: string;
  sessionId?: string;
  fromPhoneNum?: string;
  extInfo?: string;
  bizType?: string;
  static names(): { [key: string]: string } {
    return {
      endReason: 'EndReason',
      callType: 'CallType',
      acid: 'Acid',
      toPhoneNum: 'ToPhoneNum',
      userInfo: 'UserInfo',
      interveneTime: 'InterveneTime',
      bizId: 'BizId',
      sessionId: 'SessionId',
      fromPhoneNum: 'FromPhoneNum',
      extInfo: 'ExtInfo',
      bizType: 'BizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endReason: 'string',
      callType: 'string',
      acid: 'string',
      toPhoneNum: 'string',
      userInfo: 'string',
      interveneTime: 'string',
      bizId: 'string',
      sessionId: 'string',
      fromPhoneNum: 'string',
      extInfo: 'string',
      bizType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotlineRecordResponseBodyData extends $tea.Model {
  endTime?: boolean;
  startTime?: boolean;
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
      endTime: 'boolean',
      startTime: 'boolean',
      connectionId: 'string',
      callId: 'string',
      url: 'string',
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
    this._endpointMap = {
      'cn-shanghai': "scsp-vpc.cn-shanghai.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("scsp", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async getUserTokenWithOptions(request: GetUserTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetUserTokenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetUserTokenResponse>(await this.doRPCRequest("GetUserToken", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new GetUserTokenResponse({}));
  }

  async getUserToken(request: GetUserTokenRequest): Promise<GetUserTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserTokenWithOptions(request, runtime);
  }

  async searchTicketListWithOptions(request: SearchTicketListRequest, runtime: $Util.RuntimeOptions): Promise<SearchTicketListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<SearchTicketListResponse>(await this.doRPCRequest("SearchTicketList", "2020-07-02", "HTTPS", "GET", "AK", "json", req, runtime), new SearchTicketListResponse({}));
  }

  async searchTicketList(request: SearchTicketListRequest): Promise<SearchTicketListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTicketListWithOptions(request, runtime);
  }

  async sendHotlineHeartBeatWithOptions(request: SendHotlineHeartBeatRequest, runtime: $Util.RuntimeOptions): Promise<SendHotlineHeartBeatResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SendHotlineHeartBeatResponse>(await this.doRPCRequest("SendHotlineHeartBeat", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new SendHotlineHeartBeatResponse({}));
  }

  async sendHotlineHeartBeat(request: SendHotlineHeartBeatRequest): Promise<SendHotlineHeartBeatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendHotlineHeartBeatWithOptions(request, runtime);
  }

  async transferCallToSkillGroupWithOptions(request: TransferCallToSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<TransferCallToSkillGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TransferCallToSkillGroupResponse>(await this.doRPCRequest("TransferCallToSkillGroup", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new TransferCallToSkillGroupResponse({}));
  }

  async transferCallToSkillGroup(request: TransferCallToSkillGroupRequest): Promise<TransferCallToSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferCallToSkillGroupWithOptions(request, runtime);
  }

  async editEntityRouteWithOptions(request: EditEntityRouteRequest, runtime: $Util.RuntimeOptions): Promise<EditEntityRouteResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EditEntityRouteResponse>(await this.doRPCRequest("EditEntityRoute", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new EditEntityRouteResponse({}));
  }

  async editEntityRoute(request: EditEntityRouteRequest): Promise<EditEntityRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editEntityRouteWithOptions(request, runtime);
  }

  async getTagListWithOptions(request: GetTagListRequest, runtime: $Util.RuntimeOptions): Promise<GetTagListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTagListResponse>(await this.doRPCRequest("GetTagList", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new GetTagListResponse({}));
  }

  async getTagList(request: GetTagListRequest): Promise<GetTagListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTagListWithOptions(request, runtime);
  }

  async updateTicketWithOptions(request: UpdateTicketRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTicketResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateTicketResponse>(await this.doRPCRequest("UpdateTicket", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateTicketResponse({}));
  }

  async updateTicket(request: UpdateTicketRequest): Promise<UpdateTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTicketWithOptions(request, runtime);
  }

  async listOutboundPhoneNumberWithOptions(request: ListOutboundPhoneNumberRequest, runtime: $Util.RuntimeOptions): Promise<ListOutboundPhoneNumberResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListOutboundPhoneNumberResponse>(await this.doRPCRequest("ListOutboundPhoneNumber", "2020-07-02", "HTTPS", "GET", "AK", "json", req, runtime), new ListOutboundPhoneNumberResponse({}));
  }

  async listOutboundPhoneNumber(request: ListOutboundPhoneNumberRequest): Promise<ListOutboundPhoneNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOutboundPhoneNumberWithOptions(request, runtime);
  }

  async removeSkillGroupWithOptions(request: RemoveSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveSkillGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveSkillGroupResponse>(await this.doRPCRequest("RemoveSkillGroup", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveSkillGroupResponse({}));
  }

  async removeSkillGroup(request: RemoveSkillGroupRequest): Promise<RemoveSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeSkillGroupWithOptions(request, runtime);
  }

  async listAgentBySkillGroupIdWithOptions(request: ListAgentBySkillGroupIdRequest, runtime: $Util.RuntimeOptions): Promise<ListAgentBySkillGroupIdResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListAgentBySkillGroupIdResponse>(await this.doRPCRequest("ListAgentBySkillGroupId", "2020-07-02", "HTTPS", "GET", "AK", "json", req, runtime), new ListAgentBySkillGroupIdResponse({}));
  }

  async listAgentBySkillGroupId(request: ListAgentBySkillGroupIdRequest): Promise<ListAgentBySkillGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAgentBySkillGroupIdWithOptions(request, runtime);
  }

  async queryHotlineSessionWithOptions(request: QueryHotlineSessionRequest, runtime: $Util.RuntimeOptions): Promise<QueryHotlineSessionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryHotlineSessionResponse>(await this.doRPCRequest("QueryHotlineSession", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new QueryHotlineSessionResponse({}));
  }

  async queryHotlineSession(request: QueryHotlineSessionRequest): Promise<QueryHotlineSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryHotlineSessionWithOptions(request, runtime);
  }

  async startChatWorkWithOptions(request: StartChatWorkRequest, runtime: $Util.RuntimeOptions): Promise<StartChatWorkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartChatWorkResponse>(await this.doRPCRequest("StartChatWork", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new StartChatWorkResponse({}));
  }

  async startChatWork(request: StartChatWorkRequest): Promise<StartChatWorkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startChatWorkWithOptions(request, runtime);
  }

  async hangupThirdCallWithOptions(request: HangupThirdCallRequest, runtime: $Util.RuntimeOptions): Promise<HangupThirdCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<HangupThirdCallResponse>(await this.doRPCRequest("HangupThirdCall", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new HangupThirdCallResponse({}));
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
    return $tea.cast<StartHotlineServiceResponse>(await this.doRPCRequest("StartHotlineService", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new StartHotlineServiceResponse({}));
  }

  async startHotlineService(request: StartHotlineServiceRequest): Promise<StartHotlineServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startHotlineServiceWithOptions(request, runtime);
  }

  async startCallV2WithOptions(request: StartCallV2Request, runtime: $Util.RuntimeOptions): Promise<StartCallV2Response> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartCallV2Response>(await this.doRPCRequest("StartCallV2", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new StartCallV2Response({}));
  }

  async startCallV2(request: StartCallV2Request): Promise<StartCallV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startCallV2WithOptions(request, runtime);
  }

  async enableRoleWithOptions(request: EnableRoleRequest, runtime: $Util.RuntimeOptions): Promise<EnableRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableRoleResponse>(await this.doRPCRequest("EnableRole", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new EnableRoleResponse({}));
  }

  async enableRole(request: EnableRoleRequest): Promise<EnableRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableRoleWithOptions(request, runtime);
  }

  async getAgentWithOptions(request: GetAgentRequest, runtime: $Util.RuntimeOptions): Promise<GetAgentResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAgentResponse>(await this.doRPCRequest("GetAgent", "2020-07-02", "HTTPS", "GET", "AK", "json", req, runtime), new GetAgentResponse({}));
  }

  async getAgent(request: GetAgentRequest): Promise<GetAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAgentWithOptions(request, runtime);
  }

  async getCMSIdByForeignIdWithOptions(request: GetCMSIdByForeignIdRequest, runtime: $Util.RuntimeOptions): Promise<GetCMSIdByForeignIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetCMSIdByForeignIdResponse>(await this.doRPCRequest("GetCMSIdByForeignId", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new GetCMSIdByForeignIdResponse({}));
  }

  async getCMSIdByForeignId(request: GetCMSIdByForeignIdRequest): Promise<GetCMSIdByForeignIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCMSIdByForeignIdWithOptions(request, runtime);
  }

  async transferToThirdCallWithOptions(request: TransferToThirdCallRequest, runtime: $Util.RuntimeOptions): Promise<TransferToThirdCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TransferToThirdCallResponse>(await this.doRPCRequest("TransferToThirdCall", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new TransferToThirdCallResponse({}));
  }

  async transferToThirdCall(request: TransferToThirdCallRequest): Promise<TransferToThirdCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferToThirdCallWithOptions(request, runtime);
  }

  async updateAgentWithOptions(request: UpdateAgentRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAgentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAgentResponse>(await this.doRPCRequest("UpdateAgent", "2020-07-02", "HTTPS", "PUT", "AK", "json", req, runtime), new UpdateAgentResponse({}));
  }

  async updateAgent(request: UpdateAgentRequest): Promise<UpdateAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAgentWithOptions(request, runtime);
  }

  async changeChatAgentStatusWithOptions(request: ChangeChatAgentStatusRequest, runtime: $Util.RuntimeOptions): Promise<ChangeChatAgentStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ChangeChatAgentStatusResponse>(await this.doRPCRequest("ChangeChatAgentStatus", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new ChangeChatAgentStatusResponse({}));
  }

  async changeChatAgentStatus(request: ChangeChatAgentStatusRequest): Promise<ChangeChatAgentStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeChatAgentStatusWithOptions(request, runtime);
  }

  async generateWebSocketSignWithOptions(request: GenerateWebSocketSignRequest, runtime: $Util.RuntimeOptions): Promise<GenerateWebSocketSignResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateWebSocketSignResponse>(await this.doRPCRequest("GenerateWebSocketSign", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateWebSocketSignResponse({}));
  }

  async generateWebSocketSign(request: GenerateWebSocketSignRequest): Promise<GenerateWebSocketSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateWebSocketSignWithOptions(request, runtime);
  }

  async updateRingStatusWithOptions(request: UpdateRingStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRingStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateRingStatusResponse>(await this.doRPCRequest("UpdateRingStatus", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateRingStatusResponse({}));
  }

  async updateRingStatus(request: UpdateRingStatusRequest): Promise<UpdateRingStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRingStatusWithOptions(request, runtime);
  }

  async createAgentWithOptions(request: CreateAgentRequest, runtime: $Util.RuntimeOptions): Promise<CreateAgentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAgentResponse>(await this.doRPCRequest("CreateAgent", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAgentResponse({}));
  }

  async createAgent(request: CreateAgentRequest): Promise<CreateAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAgentWithOptions(request, runtime);
  }

  async deleteEntityRouteWithOptions(request: DeleteEntityRouteRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEntityRouteResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteEntityRouteResponse>(await this.doRPCRequest("DeleteEntityRoute", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteEntityRouteResponse({}));
  }

  async deleteEntityRoute(request: DeleteEntityRouteRequest): Promise<DeleteEntityRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEntityRouteWithOptions(request, runtime);
  }

  async getHotlineGroupDetailReportWithOptions(request: GetHotlineGroupDetailReportRequest, runtime: $Util.RuntimeOptions): Promise<GetHotlineGroupDetailReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetHotlineGroupDetailReportResponse>(await this.doRPCRequest("GetHotlineGroupDetailReport", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new GetHotlineGroupDetailReportResponse({}));
  }

  async getHotlineGroupDetailReport(request: GetHotlineGroupDetailReportRequest): Promise<GetHotlineGroupDetailReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotlineGroupDetailReportWithOptions(request, runtime);
  }

  async createTicketWithOptions(request: CreateTicketRequest, runtime: $Util.RuntimeOptions): Promise<CreateTicketResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTicketResponse>(await this.doRPCRequest("CreateTicket", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTicketResponse({}));
  }

  async createTicket(request: CreateTicketRequest): Promise<CreateTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTicketWithOptions(request, runtime);
  }

  async updateCustomerWithOptions(request: UpdateCustomerRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCustomerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateCustomerResponse>(await this.doRPCRequest("UpdateCustomer", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateCustomerResponse({}));
  }

  async updateCustomer(request: UpdateCustomerRequest): Promise<UpdateCustomerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCustomerWithOptions(request, runtime);
  }

  async answerCallWithOptions(request: AnswerCallRequest, runtime: $Util.RuntimeOptions): Promise<AnswerCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AnswerCallResponse>(await this.doRPCRequest("AnswerCall", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new AnswerCallResponse({}));
  }

  async answerCall(request: AnswerCallRequest): Promise<AnswerCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.answerCallWithOptions(request, runtime);
  }

  async deleteAgentWithOptions(request: DeleteAgentRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAgentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAgentResponse>(await this.doRPCRequest("DeleteAgent", "2020-07-02", "HTTPS", "DELETE", "AK", "json", req, runtime), new DeleteAgentResponse({}));
  }

  async deleteAgent(request: DeleteAgentRequest): Promise<DeleteAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAgentWithOptions(request, runtime);
  }

  async getEntityTagRelationWithOptions(request: GetEntityTagRelationRequest, runtime: $Util.RuntimeOptions): Promise<GetEntityTagRelationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetEntityTagRelationResponse>(await this.doRPCRequest("GetEntityTagRelation", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new GetEntityTagRelationResponse({}));
  }

  async getEntityTagRelation(request: GetEntityTagRelationRequest): Promise<GetEntityTagRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEntityTagRelationWithOptions(request, runtime);
  }

  async getHotlineAgentDetailWithOptions(request: GetHotlineAgentDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetHotlineAgentDetailResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetHotlineAgentDetailResponse>(await this.doRPCRequest("GetHotlineAgentDetail", "2020-07-02", "HTTPS", "GET", "AK", "json", req, runtime), new GetHotlineAgentDetailResponse({}));
  }

  async getHotlineAgentDetail(request: GetHotlineAgentDetailRequest): Promise<GetHotlineAgentDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotlineAgentDetailWithOptions(request, runtime);
  }

  async suspendHotlineServiceWithOptions(request: SuspendHotlineServiceRequest, runtime: $Util.RuntimeOptions): Promise<SuspendHotlineServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SuspendHotlineServiceResponse>(await this.doRPCRequest("SuspendHotlineService", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new SuspendHotlineServiceResponse({}));
  }

  async suspendHotlineService(request: SuspendHotlineServiceRequest): Promise<SuspendHotlineServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendHotlineServiceWithOptions(request, runtime);
  }

  async getCallsPerDayWithOptions(request: GetCallsPerDayRequest, runtime: $Util.RuntimeOptions): Promise<GetCallsPerDayResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetCallsPerDayResponse>(await this.doRPCRequest("GetCallsPerDay", "2020-07-02", "HTTPS", "GET", "AK", "json", req, runtime), new GetCallsPerDayResponse({}));
  }

  async getCallsPerDay(request: GetCallsPerDayRequest): Promise<GetCallsPerDayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCallsPerDayWithOptions(request, runtime);
  }

  async fetchCallWithOptions(request: FetchCallRequest, runtime: $Util.RuntimeOptions): Promise<FetchCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FetchCallResponse>(await this.doRPCRequest("FetchCall", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new FetchCallResponse({}));
  }

  async fetchCall(request: FetchCallRequest): Promise<FetchCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.fetchCallWithOptions(request, runtime);
  }

  async getHotlineAgentDetailReportWithOptions(request: GetHotlineAgentDetailReportRequest, runtime: $Util.RuntimeOptions): Promise<GetHotlineAgentDetailReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetHotlineAgentDetailReportResponse>(await this.doRPCRequest("GetHotlineAgentDetailReport", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new GetHotlineAgentDetailReportResponse({}));
  }

  async getHotlineAgentDetailReport(request: GetHotlineAgentDetailReportRequest): Promise<GetHotlineAgentDetailReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotlineAgentDetailReportWithOptions(request, runtime);
  }

  async queryTicketCountWithOptions(request: QueryTicketCountRequest, runtime: $Util.RuntimeOptions): Promise<QueryTicketCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTicketCountResponse>(await this.doRPCRequest("QueryTicketCount", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTicketCountResponse({}));
  }

  async queryTicketCount(request: QueryTicketCountRequest): Promise<QueryTicketCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTicketCountWithOptions(request, runtime);
  }

  async appMessagePushWithOptions(request: AppMessagePushRequest, runtime: $Util.RuntimeOptions): Promise<AppMessagePushResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AppMessagePushResponse>(await this.doRPCRequest("AppMessagePush", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new AppMessagePushResponse({}));
  }

  async appMessagePush(request: AppMessagePushRequest): Promise<AppMessagePushResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.appMessagePushWithOptions(request, runtime);
  }

  async getHotlineAgentStatusWithOptions(request: GetHotlineAgentStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetHotlineAgentStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetHotlineAgentStatusResponse>(await this.doRPCRequest("GetHotlineAgentStatus", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new GetHotlineAgentStatusResponse({}));
  }

  async getHotlineAgentStatus(request: GetHotlineAgentStatusRequest): Promise<GetHotlineAgentStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotlineAgentStatusWithOptions(request, runtime);
  }

  async getHotlineWaitingNumberWithOptions(request: GetHotlineWaitingNumberRequest, runtime: $Util.RuntimeOptions): Promise<GetHotlineWaitingNumberResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetHotlineWaitingNumberResponse>(await this.doRPCRequest("GetHotlineWaitingNumber", "2020-07-02", "HTTPS", "GET", "AK", "json", req, runtime), new GetHotlineWaitingNumberResponse({}));
  }

  async getHotlineWaitingNumber(request: GetHotlineWaitingNumberRequest): Promise<GetHotlineWaitingNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotlineWaitingNumberWithOptions(request, runtime);
  }

  async startCallWithOptions(request: StartCallRequest, runtime: $Util.RuntimeOptions): Promise<StartCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartCallResponse>(await this.doRPCRequest("StartCall", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new StartCallResponse({}));
  }

  async startCall(request: StartCallRequest): Promise<StartCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startCallWithOptions(request, runtime);
  }

  async assignTicketWithOptions(request: AssignTicketRequest, runtime: $Util.RuntimeOptions): Promise<AssignTicketResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssignTicketResponse>(await this.doRPCRequest("AssignTicket", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new AssignTicketResponse({}));
  }

  async assignTicket(request: AssignTicketRequest): Promise<AssignTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.assignTicketWithOptions(request, runtime);
  }

  async hangupCallWithOptions(request: HangupCallRequest, runtime: $Util.RuntimeOptions): Promise<HangupCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<HangupCallResponse>(await this.doRPCRequest("HangupCall", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new HangupCallResponse({}));
  }

  async hangupCall(request: HangupCallRequest): Promise<HangupCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.hangupCallWithOptions(request, runtime);
  }

  async getOutbounNumListWithOptions(request: GetOutbounNumListRequest, runtime: $Util.RuntimeOptions): Promise<GetOutbounNumListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetOutbounNumListResponse>(await this.doRPCRequest("GetOutbounNumList", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new GetOutbounNumListResponse({}));
  }

  async getOutbounNumList(request: GetOutbounNumListRequest): Promise<GetOutbounNumListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOutbounNumListWithOptions(request, runtime);
  }

  async createTicketWithBizDataWithOptions(request: CreateTicketWithBizDataRequest, runtime: $Util.RuntimeOptions): Promise<CreateTicketWithBizDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTicketWithBizDataResponse>(await this.doRPCRequest("createTicketWithBizData", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTicketWithBizDataResponse({}));
  }

  async createTicketWithBizData(request: CreateTicketWithBizDataRequest): Promise<CreateTicketWithBizDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTicketWithBizDataWithOptions(request, runtime);
  }

  async searchTicketByPhoneWithOptions(request: SearchTicketByPhoneRequest, runtime: $Util.RuntimeOptions): Promise<SearchTicketByPhoneResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<SearchTicketByPhoneResponse>(await this.doRPCRequest("SearchTicketByPhone", "2020-07-02", "HTTPS", "GET", "AK", "json", req, runtime), new SearchTicketByPhoneResponse({}));
  }

  async searchTicketByPhone(request: SearchTicketByPhoneRequest): Promise<SearchTicketByPhoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTicketByPhoneWithOptions(request, runtime);
  }

  async createThirdSsoAgentWithOptions(request: CreateThirdSsoAgentRequest, runtime: $Util.RuntimeOptions): Promise<CreateThirdSsoAgentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateThirdSsoAgentResponse>(await this.doRPCRequest("CreateThirdSsoAgent", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new CreateThirdSsoAgentResponse({}));
  }

  async createThirdSsoAgent(request: CreateThirdSsoAgentRequest): Promise<CreateThirdSsoAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createThirdSsoAgentWithOptions(request, runtime);
  }

  async createEntityIvrRouteWithOptions(request: CreateEntityIvrRouteRequest, runtime: $Util.RuntimeOptions): Promise<CreateEntityIvrRouteResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateEntityIvrRouteResponse>(await this.doRPCRequest("CreateEntityIvrRoute", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new CreateEntityIvrRouteResponse({}));
  }

  async createEntityIvrRoute(request: CreateEntityIvrRouteRequest): Promise<CreateEntityIvrRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEntityIvrRouteWithOptions(request, runtime);
  }

  async closeTicketWithOptions(request: CloseTicketRequest, runtime: $Util.RuntimeOptions): Promise<CloseTicketResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CloseTicketResponse>(await this.doRPCRequest("CloseTicket", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new CloseTicketResponse({}));
  }

  async closeTicket(request: CloseTicketRequest): Promise<CloseTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.closeTicketWithOptions(request, runtime);
  }

  async holdCallWithOptions(request: HoldCallRequest, runtime: $Util.RuntimeOptions): Promise<HoldCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<HoldCallResponse>(await this.doRPCRequest("HoldCall", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new HoldCallResponse({}));
  }

  async holdCall(request: HoldCallRequest): Promise<HoldCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.holdCallWithOptions(request, runtime);
  }

  async queryRingDetailListWithOptions(tmpReq: QueryRingDetailListRequest, runtime: $Util.RuntimeOptions): Promise<QueryRingDetailListResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryRingDetailListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.fromPhoneNumList)) {
      request.fromPhoneNumListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fromPhoneNumList, "FromPhoneNumList", "json");
    }

    if (!Util.isUnset(tmpReq.toPhoneNumList)) {
      request.toPhoneNumListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.toPhoneNumList, "ToPhoneNumList", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryRingDetailListResponse>(await this.doRPCRequest("QueryRingDetailList", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new QueryRingDetailListResponse({}));
  }

  async queryRingDetailList(request: QueryRingDetailListRequest): Promise<QueryRingDetailListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRingDetailListWithOptions(request, runtime);
  }

  async searchTicketByIdWithOptions(request: SearchTicketByIdRequest, runtime: $Util.RuntimeOptions): Promise<SearchTicketByIdResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<SearchTicketByIdResponse>(await this.doRPCRequest("SearchTicketById", "2020-07-02", "HTTPS", "GET", "AK", "json", req, runtime), new SearchTicketByIdResponse({}));
  }

  async searchTicketById(request: SearchTicketByIdRequest): Promise<SearchTicketByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTicketByIdWithOptions(request, runtime);
  }

  async updateSkillGroupWithOptions(request: UpdateSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSkillGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSkillGroupResponse>(await this.doRPCRequest("UpdateSkillGroup", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSkillGroupResponse({}));
  }

  async updateSkillGroup(request: UpdateSkillGroupRequest): Promise<UpdateSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSkillGroupWithOptions(request, runtime);
  }

  async queryServiceConfigWithOptions(request: QueryServiceConfigRequest, runtime: $Util.RuntimeOptions): Promise<QueryServiceConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<QueryServiceConfigResponse>(await this.doRPCRequest("QueryServiceConfig", "2020-07-02", "HTTPS", "GET", "AK", "json", req, runtime), new QueryServiceConfigResponse({}));
  }

  async queryServiceConfig(request: QueryServiceConfigRequest): Promise<QueryServiceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryServiceConfigWithOptions(request, runtime);
  }

  async disableRoleWithOptions(request: DisableRoleRequest, runtime: $Util.RuntimeOptions): Promise<DisableRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableRoleResponse>(await this.doRPCRequest("DisableRole", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new DisableRoleResponse({}));
  }

  async disableRole(request: DisableRoleRequest): Promise<DisableRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableRoleWithOptions(request, runtime);
  }

  async getEntityRouteListWithOptions(request: GetEntityRouteListRequest, runtime: $Util.RuntimeOptions): Promise<GetEntityRouteListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetEntityRouteListResponse>(await this.doRPCRequest("GetEntityRouteList", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new GetEntityRouteListResponse({}));
  }

  async getEntityRouteList(request: GetEntityRouteListRequest): Promise<GetEntityRouteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEntityRouteListWithOptions(request, runtime);
  }

  async getAuthInfoWithOptions(request: GetAuthInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetAuthInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAuthInfoResponse>(await this.doRPCRequest("GetAuthInfo", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new GetAuthInfoResponse({}));
  }

  async getAuthInfo(request: GetAuthInfoRequest): Promise<GetAuthInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAuthInfoWithOptions(request, runtime);
  }

  async updateRoleWithOptions(request: UpdateRoleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateRoleResponse>(await this.doRPCRequest("UpdateRole", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateRoleResponse({}));
  }

  async updateRole(request: UpdateRoleRequest): Promise<UpdateRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRoleWithOptions(request, runtime);
  }

  async getTicketTemplateSchemaWithOptions(request: GetTicketTemplateSchemaRequest, runtime: $Util.RuntimeOptions): Promise<GetTicketTemplateSchemaResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetTicketTemplateSchemaResponse>(await this.doRPCRequest("GetTicketTemplateSchema", "2020-07-02", "HTTPS", "GET", "AK", "json", req, runtime), new GetTicketTemplateSchemaResponse({}));
  }

  async getTicketTemplateSchema(request: GetTicketTemplateSchemaRequest): Promise<GetTicketTemplateSchemaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTicketTemplateSchemaWithOptions(request, runtime);
  }

  async transferCallToPhoneWithOptions(request: TransferCallToPhoneRequest, runtime: $Util.RuntimeOptions): Promise<TransferCallToPhoneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TransferCallToPhoneResponse>(await this.doRPCRequest("TransferCallToPhone", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new TransferCallToPhoneResponse({}));
  }

  async transferCallToPhone(request: TransferCallToPhoneRequest): Promise<TransferCallToPhoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferCallToPhoneWithOptions(request, runtime);
  }

  async querySkillGroupsWithOptions(request: QuerySkillGroupsRequest, runtime: $Util.RuntimeOptions): Promise<QuerySkillGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QuerySkillGroupsResponse>(await this.doRPCRequest("QuerySkillGroups", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new QuerySkillGroupsResponse({}));
  }

  async querySkillGroups(request: QuerySkillGroupsRequest): Promise<QuerySkillGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySkillGroupsWithOptions(request, runtime);
  }

  async getEntityRouteWithOptions(request: GetEntityRouteRequest, runtime: $Util.RuntimeOptions): Promise<GetEntityRouteResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetEntityRouteResponse>(await this.doRPCRequest("GetEntityRoute", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new GetEntityRouteResponse({}));
  }

  async getEntityRoute(request: GetEntityRouteRequest): Promise<GetEntityRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEntityRouteWithOptions(request, runtime);
  }

  async updateEntityTagRelationWithOptions(request: UpdateEntityTagRelationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEntityTagRelationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateEntityTagRelationResponse>(await this.doRPCRequest("UpdateEntityTagRelation", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateEntityTagRelationResponse({}));
  }

  async updateEntityTagRelation(request: UpdateEntityTagRelationRequest): Promise<UpdateEntityTagRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEntityTagRelationWithOptions(request, runtime);
  }

  async createOuterCallCenterDataWithOptions(request: CreateOuterCallCenterDataRequest, runtime: $Util.RuntimeOptions): Promise<CreateOuterCallCenterDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateOuterCallCenterDataResponse>(await this.doRPCRequest("CreateOuterCallCenterData", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new CreateOuterCallCenterDataResponse({}));
  }

  async createOuterCallCenterData(request: CreateOuterCallCenterDataRequest): Promise<CreateOuterCallCenterDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOuterCallCenterDataWithOptions(request, runtime);
  }

  async sendOutboundCommandWithOptions(request: SendOutboundCommandRequest, runtime: $Util.RuntimeOptions): Promise<SendOutboundCommandResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SendOutboundCommandResponse>(await this.doRPCRequest("SendOutboundCommand", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new SendOutboundCommandResponse({}));
  }

  async sendOutboundCommand(request: SendOutboundCommandRequest): Promise<SendOutboundCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendOutboundCommandWithOptions(request, runtime);
  }

  async createRoleWithOptions(request: CreateRoleRequest, runtime: $Util.RuntimeOptions): Promise<CreateRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRoleResponse>(await this.doRPCRequest("CreateRole", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRoleResponse({}));
  }

  async createRole(request: CreateRoleRequest): Promise<CreateRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRoleWithOptions(request, runtime);
  }

  async listSkillGroupWithOptions(request: ListSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListSkillGroupResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListSkillGroupResponse>(await this.doRPCRequest("ListSkillGroup", "2020-07-02", "HTTPS", "GET", "AK", "json", req, runtime), new ListSkillGroupResponse({}));
  }

  async listSkillGroup(request: ListSkillGroupRequest): Promise<ListSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSkillGroupWithOptions(request, runtime);
  }

  async grantRolesWithOptions(request: GrantRolesRequest, runtime: $Util.RuntimeOptions): Promise<GrantRolesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GrantRolesResponse>(await this.doRPCRequest("GrantRoles", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new GrantRolesResponse({}));
  }

  async grantRoles(request: GrantRolesRequest): Promise<GrantRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantRolesWithOptions(request, runtime);
  }

  async getOuterCallCenterDataListWithOptions(request: GetOuterCallCenterDataListRequest, runtime: $Util.RuntimeOptions): Promise<GetOuterCallCenterDataListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetOuterCallCenterDataListResponse>(await this.doRPCRequest("GetOuterCallCenterDataList", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new GetOuterCallCenterDataListResponse({}));
  }

  async getOuterCallCenterDataList(request: GetOuterCallCenterDataListRequest): Promise<GetOuterCallCenterDataListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOuterCallCenterDataListWithOptions(request, runtime);
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
    return $tea.cast<QueryTicketsResponse>(await this.doRPCRequest("QueryTickets", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTicketsResponse({}));
  }

  async queryTickets(request: QueryTicketsRequest): Promise<QueryTicketsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTicketsWithOptions(request, runtime);
  }

  async queryTicketActionsWithOptions(request: QueryTicketActionsRequest, runtime: $Util.RuntimeOptions): Promise<QueryTicketActionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTicketActionsResponse>(await this.doRPCRequest("QueryTicketActions", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTicketActionsResponse({}));
  }

  async queryTicketActions(request: QueryTicketActionsRequest): Promise<QueryTicketActionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTicketActionsWithOptions(request, runtime);
  }

  async transferCallToAgentWithOptions(request: TransferCallToAgentRequest, runtime: $Util.RuntimeOptions): Promise<TransferCallToAgentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TransferCallToAgentResponse>(await this.doRPCRequest("TransferCallToAgent", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new TransferCallToAgentResponse({}));
  }

  async transferCallToAgent(request: TransferCallToAgentRequest): Promise<TransferCallToAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferCallToAgentWithOptions(request, runtime);
  }

  async finishHotlineServiceWithOptions(request: FinishHotlineServiceRequest, runtime: $Util.RuntimeOptions): Promise<FinishHotlineServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FinishHotlineServiceResponse>(await this.doRPCRequest("FinishHotlineService", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new FinishHotlineServiceResponse({}));
  }

  async finishHotlineService(request: FinishHotlineServiceRequest): Promise<FinishHotlineServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.finishHotlineServiceWithOptions(request, runtime);
  }

  async joinThirdCallWithOptions(request: JoinThirdCallRequest, runtime: $Util.RuntimeOptions): Promise<JoinThirdCallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<JoinThirdCallResponse>(await this.doRPCRequest("JoinThirdCall", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new JoinThirdCallResponse({}));
  }

  async joinThirdCall(request: JoinThirdCallRequest): Promise<JoinThirdCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.joinThirdCallWithOptions(request, runtime);
  }

  async executeActivityWithOptions(request: ExecuteActivityRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteActivityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExecuteActivityResponse>(await this.doRPCRequest("ExecuteActivity", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new ExecuteActivityResponse({}));
  }

  async executeActivity(request: ExecuteActivityRequest): Promise<ExecuteActivityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeActivityWithOptions(request, runtime);
  }

  async getGrantedRoleIdsWithOptions(request: GetGrantedRoleIdsRequest, runtime: $Util.RuntimeOptions): Promise<GetGrantedRoleIdsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetGrantedRoleIdsResponse>(await this.doRPCRequest("GetGrantedRoleIds", "2020-07-02", "HTTPS", "GET", "AK", "json", req, runtime), new GetGrantedRoleIdsResponse({}));
  }

  async getGrantedRoleIds(request: GetGrantedRoleIdsRequest): Promise<GetGrantedRoleIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGrantedRoleIdsWithOptions(request, runtime);
  }

  async listHotlineRecordWithOptions(request: ListHotlineRecordRequest, runtime: $Util.RuntimeOptions): Promise<ListHotlineRecordResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListHotlineRecordResponse>(await this.doRPCRequest("ListHotlineRecord", "2020-07-02", "HTTPS", "GET", "AK", "json", req, runtime), new ListHotlineRecordResponse({}));
  }

  async listHotlineRecord(request: ListHotlineRecordRequest): Promise<ListHotlineRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHotlineRecordWithOptions(request, runtime);
  }

  async getNumLocationWithOptions(request: GetNumLocationRequest, runtime: $Util.RuntimeOptions): Promise<GetNumLocationResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetNumLocationResponse>(await this.doRPCRequest("GetNumLocation", "2020-07-02", "HTTPS", "GET", "AK", "json", req, runtime), new GetNumLocationResponse({}));
  }

  async getNumLocation(request: GetNumLocationRequest): Promise<GetNumLocationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNumLocationWithOptions(request, runtime);
  }

  async createSkillGroupWithOptions(request: CreateSkillGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateSkillGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSkillGroupResponse>(await this.doRPCRequest("CreateSkillGroup", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSkillGroupResponse({}));
  }

  async createSkillGroup(request: CreateSkillGroupRequest): Promise<CreateSkillGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSkillGroupWithOptions(request, runtime);
  }

  async createCustomerWithOptions(request: CreateCustomerRequest, runtime: $Util.RuntimeOptions): Promise<CreateCustomerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCustomerResponse>(await this.doRPCRequest("CreateCustomer", "2020-07-02", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCustomerResponse({}));
  }

  async createCustomer(request: CreateCustomerRequest): Promise<CreateCustomerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCustomerWithOptions(request, runtime);
  }

}
