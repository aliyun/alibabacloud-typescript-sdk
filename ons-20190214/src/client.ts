// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ListTagResourcesRequest extends $tea.Model {
  instanceId?: string;
  resourceType?: string;
  nextToken?: string;
  tag?: ListTagResourcesRequestTag[];
  resourceId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      resourceType: 'ResourceType',
      nextToken: 'NextToken',
      tag: 'Tag',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      resourceType: 'string',
      nextToken: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
      resourceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
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
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
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

export class OnsConsumerAccumulateRequest extends $tea.Model {
  groupId?: string;
  detail?: boolean;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      detail: 'Detail',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      detail: 'boolean',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerAccumulateResponseBody extends $tea.Model {
  requestId?: string;
  data?: OnsConsumerAccumulateResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: OnsConsumerAccumulateResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerAccumulateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsConsumerAccumulateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsConsumerAccumulateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerGetConnectionRequest extends $tea.Model {
  groupId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerGetConnectionResponseBody extends $tea.Model {
  requestId?: string;
  data?: OnsConsumerGetConnectionResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: OnsConsumerGetConnectionResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerGetConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsConsumerGetConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsConsumerGetConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerResetOffsetRequest extends $tea.Model {
  groupId?: string;
  topic?: string;
  type?: number;
  resetTimestamp?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      topic: 'Topic',
      type: 'Type',
      resetTimestamp: 'ResetTimestamp',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      topic: 'string',
      type: 'number',
      resetTimestamp: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerResetOffsetResponseBody extends $tea.Model {
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

export class OnsConsumerResetOffsetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsConsumerResetOffsetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsConsumerResetOffsetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusRequest extends $tea.Model {
  groupId?: string;
  detail?: boolean;
  needJstack?: boolean;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      detail: 'Detail',
      needJstack: 'NeedJstack',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      detail: 'boolean',
      needJstack: 'boolean',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBody extends $tea.Model {
  requestId?: string;
  data?: OnsConsumerStatusResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: OnsConsumerStatusResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsConsumerStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsConsumerStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerTimeSpanRequest extends $tea.Model {
  groupId?: string;
  topic?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      topic: 'Topic',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      topic: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerTimeSpanResponseBody extends $tea.Model {
  requestId?: string;
  data?: OnsConsumerTimeSpanResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: OnsConsumerTimeSpanResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerTimeSpanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsConsumerTimeSpanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsConsumerTimeSpanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessageGetByIdRequest extends $tea.Model {
  msgId?: string;
  groupId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      msgId: 'MsgId',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msgId: 'string',
      groupId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessageGetByIdResponseBody extends $tea.Model {
  requestId?: string;
  data?: OnsDLQMessageGetByIdResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: OnsDLQMessageGetByIdResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessageGetByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsDLQMessageGetByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsDLQMessageGetByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessagePageQueryByGroupIdRequest extends $tea.Model {
  groupId?: string;
  beginTime?: number;
  endTime?: number;
  taskId?: string;
  currentPage?: number;
  pageSize?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      taskId: 'TaskId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      beginTime: 'number',
      endTime: 'number',
      taskId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessagePageQueryByGroupIdResponseBody extends $tea.Model {
  requestId?: string;
  msgFoundDo?: OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      msgFoundDo: 'MsgFoundDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      msgFoundDo: OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessagePageQueryByGroupIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsDLQMessagePageQueryByGroupIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsDLQMessagePageQueryByGroupIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessageResendByIdRequest extends $tea.Model {
  msgId?: string;
  groupId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      msgId: 'MsgId',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msgId: 'string',
      groupId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessageResendByIdResponseBody extends $tea.Model {
  requestId?: string;
  data?: OnsDLQMessageResendByIdResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: OnsDLQMessageResendByIdResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessageResendByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsDLQMessageResendByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsDLQMessageResendByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupConsumerUpdateRequest extends $tea.Model {
  groupId?: string;
  readEnable?: boolean;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      readEnable: 'ReadEnable',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      readEnable: 'boolean',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupConsumerUpdateResponseBody extends $tea.Model {
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

export class OnsGroupConsumerUpdateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsGroupConsumerUpdateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsGroupConsumerUpdateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupCreateRequest extends $tea.Model {
  groupId?: string;
  remark?: string;
  instanceId?: string;
  groupType?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      remark: 'Remark',
      instanceId: 'InstanceId',
      groupType: 'GroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      remark: 'string',
      instanceId: 'string',
      groupType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupCreateResponseBody extends $tea.Model {
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

export class OnsGroupCreateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsGroupCreateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsGroupCreateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupDeleteRequest extends $tea.Model {
  groupId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupDeleteResponseBody extends $tea.Model {
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

export class OnsGroupDeleteResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsGroupDeleteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsGroupDeleteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupListRequest extends $tea.Model {
  instanceId?: string;
  groupId?: string;
  groupType?: string;
  tag?: OnsGroupListRequestTag[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      groupId: 'GroupId',
      groupType: 'GroupType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      groupId: 'string',
      groupType: 'string',
      tag: { 'type': 'array', 'itemType': OnsGroupListRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupListResponseBody extends $tea.Model {
  requestId?: string;
  data?: OnsGroupListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: OnsGroupListResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsGroupListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsGroupListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupSubDetailRequest extends $tea.Model {
  instanceId?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupSubDetailResponseBody extends $tea.Model {
  requestId?: string;
  data?: OnsGroupSubDetailResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: OnsGroupSubDetailResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupSubDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsGroupSubDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsGroupSubDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceBaseInfoRequest extends $tea.Model {
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

export class OnsInstanceBaseInfoResponseBody extends $tea.Model {
  instanceBaseInfo?: OnsInstanceBaseInfoResponseBodyInstanceBaseInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceBaseInfo: 'InstanceBaseInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceBaseInfo: OnsInstanceBaseInfoResponseBodyInstanceBaseInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceBaseInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsInstanceBaseInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsInstanceBaseInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceCreateRequest extends $tea.Model {
  remark?: string;
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      instanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceCreateResponseBody extends $tea.Model {
  requestId?: string;
  data?: OnsInstanceCreateResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: OnsInstanceCreateResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceCreateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsInstanceCreateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsInstanceCreateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceDeleteRequest extends $tea.Model {
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

export class OnsInstanceDeleteResponseBody extends $tea.Model {
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

export class OnsInstanceDeleteResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsInstanceDeleteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsInstanceDeleteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceInServiceListRequest extends $tea.Model {
  tag?: OnsInstanceInServiceListRequestTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': OnsInstanceInServiceListRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceInServiceListResponseBody extends $tea.Model {
  requestId?: string;
  data?: OnsInstanceInServiceListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: OnsInstanceInServiceListResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceInServiceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsInstanceInServiceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsInstanceInServiceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceUpdateRequest extends $tea.Model {
  remark?: string;
  instanceName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      instanceName: 'InstanceName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      instanceName: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceUpdateResponseBody extends $tea.Model {
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

export class OnsInstanceUpdateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsInstanceUpdateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsInstanceUpdateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByKeyRequest extends $tea.Model {
  topic?: string;
  key?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      topic: 'Topic',
      key: 'Key',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topic: 'string',
      key: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByKeyResponseBody extends $tea.Model {
  requestId?: string;
  data?: OnsMessageGetByKeyResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: OnsMessageGetByKeyResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsMessageGetByKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsMessageGetByKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByMsgIdRequest extends $tea.Model {
  msgId?: string;
  topic?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      msgId: 'MsgId',
      topic: 'Topic',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msgId: 'string',
      topic: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByMsgIdResponseBody extends $tea.Model {
  requestId?: string;
  data?: OnsMessageGetByMsgIdResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: OnsMessageGetByMsgIdResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByMsgIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsMessageGetByMsgIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsMessageGetByMsgIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessagePageQueryByTopicRequest extends $tea.Model {
  topic?: string;
  beginTime?: number;
  endTime?: number;
  taskId?: string;
  currentPage?: number;
  pageSize?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      topic: 'Topic',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      taskId: 'TaskId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topic: 'string',
      beginTime: 'number',
      endTime: 'number',
      taskId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessagePageQueryByTopicResponseBody extends $tea.Model {
  requestId?: string;
  msgFoundDo?: OnsMessagePageQueryByTopicResponseBodyMsgFoundDo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      msgFoundDo: 'MsgFoundDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      msgFoundDo: OnsMessagePageQueryByTopicResponseBodyMsgFoundDo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessagePageQueryByTopicResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsMessagePageQueryByTopicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsMessagePageQueryByTopicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessagePushRequest extends $tea.Model {
  groupId?: string;
  clientId?: string;
  msgId?: string;
  topic?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      clientId: 'ClientId',
      msgId: 'MsgId',
      topic: 'Topic',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      clientId: 'string',
      msgId: 'string',
      topic: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessagePushResponseBody extends $tea.Model {
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

export class OnsMessagePushResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsMessagePushResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsMessagePushResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageSendRequest extends $tea.Model {
  topic?: string;
  tag?: string;
  key?: string;
  message?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      topic: 'Topic',
      tag: 'Tag',
      key: 'Key',
      message: 'Message',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topic: 'string',
      tag: 'string',
      key: 'string',
      message: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageSendResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageSendResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsMessageSendResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsMessageSendResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageTraceRequest extends $tea.Model {
  topic?: string;
  msgId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      topic: 'Topic',
      msgId: 'MsgId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topic: 'string',
      msgId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageTraceResponseBody extends $tea.Model {
  requestId?: string;
  data?: OnsMessageTraceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: OnsMessageTraceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageTraceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsMessageTraceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsMessageTraceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttGroupIdCreateRequest extends $tea.Model {
  topic?: string;
  groupId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      topic: 'Topic',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topic: 'string',
      groupId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttGroupIdCreateResponseBody extends $tea.Model {
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

export class OnsMqttGroupIdCreateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsMqttGroupIdCreateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsMqttGroupIdCreateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttGroupIdDeleteRequest extends $tea.Model {
  groupId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttGroupIdDeleteResponseBody extends $tea.Model {
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

export class OnsMqttGroupIdDeleteResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsMqttGroupIdDeleteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsMqttGroupIdDeleteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttGroupIdListRequest extends $tea.Model {
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

export class OnsMqttGroupIdListResponseBody extends $tea.Model {
  requestId?: string;
  data?: OnsMqttGroupIdListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: OnsMqttGroupIdListResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttGroupIdListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsMqttGroupIdListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsMqttGroupIdListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttQueryClientByClientIdRequest extends $tea.Model {
  clientId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttQueryClientByClientIdResponseBody extends $tea.Model {
  requestId?: string;
  mqttClientInfoDo?: OnsMqttQueryClientByClientIdResponseBodyMqttClientInfoDo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      mqttClientInfoDo: 'MqttClientInfoDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      mqttClientInfoDo: OnsMqttQueryClientByClientIdResponseBodyMqttClientInfoDo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttQueryClientByClientIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsMqttQueryClientByClientIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsMqttQueryClientByClientIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttQueryClientByGroupIdRequest extends $tea.Model {
  groupId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttQueryClientByGroupIdResponseBody extends $tea.Model {
  requestId?: string;
  mqttClientSetDo?: OnsMqttQueryClientByGroupIdResponseBodyMqttClientSetDo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      mqttClientSetDo: 'MqttClientSetDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      mqttClientSetDo: OnsMqttQueryClientByGroupIdResponseBodyMqttClientSetDo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttQueryClientByGroupIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsMqttQueryClientByGroupIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsMqttQueryClientByGroupIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttQueryClientByTopicRequest extends $tea.Model {
  parentTopic?: string;
  subTopic?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      parentTopic: 'ParentTopic',
      subTopic: 'SubTopic',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentTopic: 'string',
      subTopic: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttQueryClientByTopicResponseBody extends $tea.Model {
  requestId?: string;
  mqttClientSetDo?: OnsMqttQueryClientByTopicResponseBodyMqttClientSetDo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      mqttClientSetDo: 'MqttClientSetDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      mqttClientSetDo: OnsMqttQueryClientByTopicResponseBodyMqttClientSetDo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttQueryClientByTopicResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsMqttQueryClientByTopicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsMqttQueryClientByTopicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttQueryHistoryOnlineRequest extends $tea.Model {
  groupId?: string;
  beginTime?: number;
  endTime?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      beginTime: 'number',
      endTime: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttQueryHistoryOnlineResponseBody extends $tea.Model {
  requestId?: string;
  data?: OnsMqttQueryHistoryOnlineResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: OnsMqttQueryHistoryOnlineResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttQueryHistoryOnlineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsMqttQueryHistoryOnlineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsMqttQueryHistoryOnlineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttQueryMsgTransTrendRequest extends $tea.Model {
  tpsType?: string;
  transType?: string;
  parentTopic?: string;
  subTopic?: string;
  msgType?: string;
  qos?: number;
  beginTime?: number;
  endTime?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      tpsType: 'TpsType',
      transType: 'TransType',
      parentTopic: 'ParentTopic',
      subTopic: 'SubTopic',
      msgType: 'MsgType',
      qos: 'Qos',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tpsType: 'string',
      transType: 'string',
      parentTopic: 'string',
      subTopic: 'string',
      msgType: 'string',
      qos: 'number',
      beginTime: 'number',
      endTime: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttQueryMsgTransTrendResponseBody extends $tea.Model {
  requestId?: string;
  data?: OnsMqttQueryMsgTransTrendResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: OnsMqttQueryMsgTransTrendResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttQueryMsgTransTrendResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsMqttQueryMsgTransTrendResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsMqttQueryMsgTransTrendResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsRegionListResponseBody extends $tea.Model {
  requestId?: string;
  data?: OnsRegionListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: OnsRegionListResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsRegionListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsRegionListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsRegionListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicCreateRequest extends $tea.Model {
  topic?: string;
  messageType?: number;
  remark?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      topic: 'Topic',
      messageType: 'MessageType',
      remark: 'Remark',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topic: 'string',
      messageType: 'number',
      remark: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicCreateResponseBody extends $tea.Model {
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

export class OnsTopicCreateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsTopicCreateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsTopicCreateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicDeleteRequest extends $tea.Model {
  topic?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      topic: 'Topic',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topic: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicDeleteResponseBody extends $tea.Model {
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

export class OnsTopicDeleteResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsTopicDeleteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsTopicDeleteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicListRequest extends $tea.Model {
  topic?: string;
  instanceId?: string;
  tag?: OnsTopicListRequestTag[];
  static names(): { [key: string]: string } {
    return {
      topic: 'Topic',
      instanceId: 'InstanceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topic: 'string',
      instanceId: 'string',
      tag: { 'type': 'array', 'itemType': OnsTopicListRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicListResponseBody extends $tea.Model {
  requestId?: string;
  data?: OnsTopicListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: OnsTopicListResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsTopicListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsTopicListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicStatusRequest extends $tea.Model {
  topic?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      topic: 'Topic',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topic: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicStatusResponseBody extends $tea.Model {
  requestId?: string;
  data?: OnsTopicStatusResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: OnsTopicStatusResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsTopicStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsTopicStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicSubDetailRequest extends $tea.Model {
  instanceId?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicSubDetailResponseBody extends $tea.Model {
  requestId?: string;
  data?: OnsTopicSubDetailResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: OnsTopicSubDetailResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicSubDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsTopicSubDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsTopicSubDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicUpdateRequest extends $tea.Model {
  topic?: string;
  perm?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      topic: 'Topic',
      perm: 'Perm',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topic: 'string',
      perm: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicUpdateResponseBody extends $tea.Model {
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

export class OnsTopicUpdateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsTopicUpdateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsTopicUpdateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceGetResultRequest extends $tea.Model {
  queryId?: string;
  static names(): { [key: string]: string } {
    return {
      queryId: 'QueryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceGetResultResponseBody extends $tea.Model {
  requestId?: string;
  traceData?: OnsTraceGetResultResponseBodyTraceData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      traceData: 'TraceData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      traceData: OnsTraceGetResultResponseBodyTraceData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceGetResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsTraceGetResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsTraceGetResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceQueryByMsgIdRequest extends $tea.Model {
  topic?: string;
  msgId?: string;
  beginTime?: number;
  endTime?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      topic: 'Topic',
      msgId: 'MsgId',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topic: 'string',
      msgId: 'string',
      beginTime: 'number',
      endTime: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceQueryByMsgIdResponseBody extends $tea.Model {
  requestId?: string;
  queryId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      queryId: 'QueryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      queryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceQueryByMsgIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsTraceQueryByMsgIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsTraceQueryByMsgIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceQueryByMsgKeyRequest extends $tea.Model {
  topic?: string;
  msgKey?: string;
  beginTime?: number;
  endTime?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      topic: 'Topic',
      msgKey: 'MsgKey',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topic: 'string',
      msgKey: 'string',
      beginTime: 'number',
      endTime: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceQueryByMsgKeyResponseBody extends $tea.Model {
  requestId?: string;
  queryId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      queryId: 'QueryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      queryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceQueryByMsgKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsTraceQueryByMsgKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsTraceQueryByMsgKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendGroupOutputTpsRequest extends $tea.Model {
  groupId?: string;
  topic?: string;
  beginTime?: number;
  endTime?: number;
  type?: number;
  instanceId?: string;
  period?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      topic: 'Topic',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      type: 'Type',
      instanceId: 'InstanceId',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      topic: 'string',
      beginTime: 'number',
      endTime: 'number',
      type: 'number',
      instanceId: 'string',
      period: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendGroupOutputTpsResponseBody extends $tea.Model {
  requestId?: string;
  data?: OnsTrendGroupOutputTpsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: OnsTrendGroupOutputTpsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendGroupOutputTpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsTrendGroupOutputTpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsTrendGroupOutputTpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendTopicInputTpsRequest extends $tea.Model {
  topic?: string;
  beginTime?: number;
  endTime?: number;
  type?: number;
  instanceId?: string;
  period?: number;
  static names(): { [key: string]: string } {
    return {
      topic: 'Topic',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      type: 'Type',
      instanceId: 'InstanceId',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topic: 'string',
      beginTime: 'number',
      endTime: 'number',
      type: 'number',
      instanceId: 'string',
      period: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendTopicInputTpsResponseBody extends $tea.Model {
  requestId?: string;
  data?: OnsTrendTopicInputTpsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: OnsTrendTopicInputTpsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendTopicInputTpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsTrendTopicInputTpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsTrendTopicInputTpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsWarnCreateRequest extends $tea.Model {
  groupId?: string;
  topic?: string;
  threshold?: string;
  contacts?: string;
  delayTime?: string;
  blockTime?: string;
  alertTime?: string;
  level?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      topic: 'Topic',
      threshold: 'Threshold',
      contacts: 'Contacts',
      delayTime: 'DelayTime',
      blockTime: 'BlockTime',
      alertTime: 'AlertTime',
      level: 'Level',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      topic: 'string',
      threshold: 'string',
      contacts: 'string',
      delayTime: 'string',
      blockTime: 'string',
      alertTime: 'string',
      level: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsWarnCreateResponseBody extends $tea.Model {
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

export class OnsWarnCreateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsWarnCreateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsWarnCreateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsWarnDeleteRequest extends $tea.Model {
  groupId?: string;
  topic?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      topic: 'Topic',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      topic: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsWarnDeleteResponseBody extends $tea.Model {
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

export class OnsWarnDeleteResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OnsWarnDeleteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OnsWarnDeleteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenOnsServiceResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenOnsServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OpenOnsServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OpenOnsServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  instanceId?: string;
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  resourceId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
      resourceId: { 'type': 'array', 'itemType': 'string' },
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
  instanceId?: string;
  resourceType?: string;
  all?: boolean;
  resourceId?: string[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      resourceType: 'ResourceType',
      all: 'All',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  resourceType?: string;
  instanceId?: string;
  tagValue?: string;
  resourceId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      instanceId: 'InstanceId',
      tagValue: 'TagValue',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      instanceId: 'string',
      tagValue: 'string',
      resourceId: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerAccumulateResponseBodyDataDetailInTopicListDetailInTopicDo extends $tea.Model {
  delayTime?: number;
  totalDiff?: number;
  lastTimestamp?: number;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      delayTime: 'DelayTime',
      totalDiff: 'TotalDiff',
      lastTimestamp: 'LastTimestamp',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayTime: 'number',
      totalDiff: 'number',
      lastTimestamp: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerAccumulateResponseBodyDataDetailInTopicList extends $tea.Model {
  detailInTopicDo?: OnsConsumerAccumulateResponseBodyDataDetailInTopicListDetailInTopicDo[];
  static names(): { [key: string]: string } {
    return {
      detailInTopicDo: 'DetailInTopicDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailInTopicDo: { 'type': 'array', 'itemType': OnsConsumerAccumulateResponseBodyDataDetailInTopicListDetailInTopicDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerAccumulateResponseBodyData extends $tea.Model {
  consumeTps?: number;
  delayTime?: number;
  lastTimestamp?: number;
  totalDiff?: number;
  online?: boolean;
  detailInTopicList?: OnsConsumerAccumulateResponseBodyDataDetailInTopicList;
  static names(): { [key: string]: string } {
    return {
      consumeTps: 'ConsumeTps',
      delayTime: 'DelayTime',
      lastTimestamp: 'LastTimestamp',
      totalDiff: 'TotalDiff',
      online: 'Online',
      detailInTopicList: 'DetailInTopicList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeTps: 'number',
      delayTime: 'number',
      lastTimestamp: 'number',
      totalDiff: 'number',
      online: 'boolean',
      detailInTopicList: OnsConsumerAccumulateResponseBodyDataDetailInTopicList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerGetConnectionResponseBodyDataConnectionListConnectionDo extends $tea.Model {
  version?: string;
  clientAddr?: string;
  language?: string;
  clientId?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      clientAddr: 'ClientAddr',
      language: 'Language',
      clientId: 'ClientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      clientAddr: 'string',
      language: 'string',
      clientId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerGetConnectionResponseBodyDataConnectionList extends $tea.Model {
  connectionDo?: OnsConsumerGetConnectionResponseBodyDataConnectionListConnectionDo[];
  static names(): { [key: string]: string } {
    return {
      connectionDo: 'ConnectionDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionDo: { 'type': 'array', 'itemType': OnsConsumerGetConnectionResponseBodyDataConnectionListConnectionDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerGetConnectionResponseBodyData extends $tea.Model {
  connectionList?: OnsConsumerGetConnectionResponseBodyDataConnectionList;
  static names(): { [key: string]: string } {
    return {
      connectionList: 'ConnectionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionList: OnsConsumerGetConnectionResponseBodyDataConnectionList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConnectionSetConnectionDo extends $tea.Model {
  remoteIP?: string;
  version?: string;
  clientAddr?: string;
  language?: string;
  clientId?: string;
  static names(): { [key: string]: string } {
    return {
      remoteIP: 'RemoteIP',
      version: 'Version',
      clientAddr: 'ClientAddr',
      language: 'Language',
      clientId: 'ClientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remoteIP: 'string',
      version: 'string',
      clientAddr: 'string',
      language: 'string',
      clientId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConnectionSet extends $tea.Model {
  connectionDo?: OnsConsumerStatusResponseBodyDataConnectionSetConnectionDo[];
  static names(): { [key: string]: string } {
    return {
      connectionDo: 'ConnectionDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionDo: { 'type': 'array', 'itemType': OnsConsumerStatusResponseBodyDataConnectionSetConnectionDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoRunningDataListConsumerRunningDataDo extends $tea.Model {
  groupId?: string;
  rt?: number;
  topic?: string;
  failedCountPerHour?: number;
  okTps?: number;
  failedTps?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      rt: 'Rt',
      topic: 'Topic',
      failedCountPerHour: 'FailedCountPerHour',
      okTps: 'OkTps',
      failedTps: 'FailedTps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      rt: 'number',
      topic: 'string',
      failedCountPerHour: 'number',
      okTps: 'number',
      failedTps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoRunningDataList extends $tea.Model {
  consumerRunningDataDo?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoRunningDataListConsumerRunningDataDo[];
  static names(): { [key: string]: string } {
    return {
      consumerRunningDataDo: 'ConsumerRunningDataDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerRunningDataDo: { 'type': 'array', 'itemType': OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoRunningDataListConsumerRunningDataDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSetSubscriptionDataTagsSet extends $tea.Model {
  tag?: string[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSetSubscriptionData extends $tea.Model {
  subString?: string;
  subVersion?: number;
  topic?: string;
  tagsSet?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSetSubscriptionDataTagsSet;
  static names(): { [key: string]: string } {
    return {
      subString: 'SubString',
      subVersion: 'SubVersion',
      topic: 'Topic',
      tagsSet: 'TagsSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subString: 'string',
      subVersion: 'number',
      topic: 'string',
      tagsSet: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSetSubscriptionDataTagsSet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSet extends $tea.Model {
  subscriptionData?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSetSubscriptionData[];
  static names(): { [key: string]: string } {
    return {
      subscriptionData: 'SubscriptionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscriptionData: { 'type': 'array', 'itemType': OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSetSubscriptionData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstackThreadTrackDoTrackList extends $tea.Model {
  track?: string[];
  static names(): { [key: string]: string } {
    return {
      track: 'Track',
    };
  }

  static types(): { [key: string]: any } {
    return {
      track: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstackThreadTrackDo extends $tea.Model {
  trackList?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstackThreadTrackDoTrackList;
  thread?: string;
  static names(): { [key: string]: string } {
    return {
      trackList: 'TrackList',
      thread: 'Thread',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trackList: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstackThreadTrackDoTrackList,
      thread: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstack extends $tea.Model {
  threadTrackDo?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstackThreadTrackDo[];
  static names(): { [key: string]: string } {
    return {
      threadTrackDo: 'ThreadTrackDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      threadTrackDo: { 'type': 'array', 'itemType': OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstackThreadTrackDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDo extends $tea.Model {
  consumeModel?: string;
  runningDataList?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoRunningDataList;
  subscriptionSet?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSet;
  jstack?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstack;
  lastTimeStamp?: number;
  startTimeStamp?: number;
  language?: string;
  clientId?: string;
  connection?: string;
  version?: string;
  consumeType?: string;
  threadCount?: number;
  static names(): { [key: string]: string } {
    return {
      consumeModel: 'ConsumeModel',
      runningDataList: 'RunningDataList',
      subscriptionSet: 'SubscriptionSet',
      jstack: 'Jstack',
      lastTimeStamp: 'LastTimeStamp',
      startTimeStamp: 'StartTimeStamp',
      language: 'Language',
      clientId: 'ClientId',
      connection: 'Connection',
      version: 'Version',
      consumeType: 'ConsumeType',
      threadCount: 'ThreadCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeModel: 'string',
      runningDataList: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoRunningDataList,
      subscriptionSet: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSet,
      jstack: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstack,
      lastTimeStamp: 'number',
      startTimeStamp: 'number',
      language: 'string',
      clientId: 'string',
      connection: 'string',
      version: 'string',
      consumeType: 'string',
      threadCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoList extends $tea.Model {
  consumerConnectionInfoDo?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDo[];
  static names(): { [key: string]: string } {
    return {
      consumerConnectionInfoDo: 'ConsumerConnectionInfoDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerConnectionInfoDo: { 'type': 'array', 'itemType': OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataDetailInTopicListDetailInTopicDo extends $tea.Model {
  delayTime?: number;
  totalDiff?: number;
  lastTimestamp?: number;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      delayTime: 'DelayTime',
      totalDiff: 'TotalDiff',
      lastTimestamp: 'LastTimestamp',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayTime: 'number',
      totalDiff: 'number',
      lastTimestamp: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataDetailInTopicList extends $tea.Model {
  detailInTopicDo?: OnsConsumerStatusResponseBodyDataDetailInTopicListDetailInTopicDo[];
  static names(): { [key: string]: string } {
    return {
      detailInTopicDo: 'DetailInTopicDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailInTopicDo: { 'type': 'array', 'itemType': OnsConsumerStatusResponseBodyDataDetailInTopicListDetailInTopicDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyData extends $tea.Model {
  consumeTps?: number;
  consumeModel?: string;
  connectionSet?: OnsConsumerStatusResponseBodyDataConnectionSet;
  totalDiff?: number;
  consumerConnectionInfoList?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoList;
  instanceId?: string;
  detailInTopicList?: OnsConsumerStatusResponseBodyDataDetailInTopicList;
  subscriptionSame?: boolean;
  delayTime?: number;
  lastTimestamp?: number;
  online?: boolean;
  rebalanceOK?: boolean;
  static names(): { [key: string]: string } {
    return {
      consumeTps: 'ConsumeTps',
      consumeModel: 'ConsumeModel',
      connectionSet: 'ConnectionSet',
      totalDiff: 'TotalDiff',
      consumerConnectionInfoList: 'ConsumerConnectionInfoList',
      instanceId: 'InstanceId',
      detailInTopicList: 'DetailInTopicList',
      subscriptionSame: 'SubscriptionSame',
      delayTime: 'DelayTime',
      lastTimestamp: 'LastTimestamp',
      online: 'Online',
      rebalanceOK: 'RebalanceOK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeTps: 'number',
      consumeModel: 'string',
      connectionSet: OnsConsumerStatusResponseBodyDataConnectionSet,
      totalDiff: 'number',
      consumerConnectionInfoList: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoList,
      instanceId: 'string',
      detailInTopicList: OnsConsumerStatusResponseBodyDataDetailInTopicList,
      subscriptionSame: 'boolean',
      delayTime: 'number',
      lastTimestamp: 'number',
      online: 'boolean',
      rebalanceOK: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerTimeSpanResponseBodyData extends $tea.Model {
  maxTimeStamp?: number;
  consumeTimeStamp?: number;
  topic?: string;
  minTimeStamp?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxTimeStamp: 'MaxTimeStamp',
      consumeTimeStamp: 'ConsumeTimeStamp',
      topic: 'Topic',
      minTimeStamp: 'MinTimeStamp',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxTimeStamp: 'number',
      consumeTimeStamp: 'number',
      topic: 'string',
      minTimeStamp: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessageGetByIdResponseBodyDataPropertyListMessageProperty extends $tea.Model {
  value?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessageGetByIdResponseBodyDataPropertyList extends $tea.Model {
  messageProperty?: OnsDLQMessageGetByIdResponseBodyDataPropertyListMessageProperty[];
  static names(): { [key: string]: string } {
    return {
      messageProperty: 'MessageProperty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageProperty: { 'type': 'array', 'itemType': OnsDLQMessageGetByIdResponseBodyDataPropertyListMessageProperty },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessageGetByIdResponseBodyData extends $tea.Model {
  storeSize?: number;
  reconsumeTimes?: number;
  storeTimestamp?: number;
  instanceId?: string;
  msgId?: string;
  storeHost?: string;
  topic?: string;
  propertyList?: OnsDLQMessageGetByIdResponseBodyDataPropertyList;
  bornTimestamp?: number;
  bodyCRC?: number;
  bornHost?: string;
  static names(): { [key: string]: string } {
    return {
      storeSize: 'StoreSize',
      reconsumeTimes: 'ReconsumeTimes',
      storeTimestamp: 'StoreTimestamp',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      storeHost: 'StoreHost',
      topic: 'Topic',
      propertyList: 'PropertyList',
      bornTimestamp: 'BornTimestamp',
      bodyCRC: 'BodyCRC',
      bornHost: 'BornHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storeSize: 'number',
      reconsumeTimes: 'number',
      storeTimestamp: 'number',
      instanceId: 'string',
      msgId: 'string',
      storeHost: 'string',
      topic: 'string',
      propertyList: OnsDLQMessageGetByIdResponseBodyDataPropertyList,
      bornTimestamp: 'number',
      bodyCRC: 'number',
      bornHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyListMessageProperty extends $tea.Model {
  value?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyList extends $tea.Model {
  messageProperty?: OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyListMessageProperty[];
  static names(): { [key: string]: string } {
    return {
      messageProperty: 'MessageProperty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageProperty: { 'type': 'array', 'itemType': OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyListMessageProperty },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDo extends $tea.Model {
  storeSize?: number;
  reconsumeTimes?: number;
  storeTimestamp?: number;
  instanceId?: string;
  msgId?: string;
  storeHost?: string;
  topic?: string;
  propertyList?: OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyList;
  bornTimestamp?: number;
  bodyCRC?: number;
  bornHost?: string;
  static names(): { [key: string]: string } {
    return {
      storeSize: 'StoreSize',
      reconsumeTimes: 'ReconsumeTimes',
      storeTimestamp: 'StoreTimestamp',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      storeHost: 'StoreHost',
      topic: 'Topic',
      propertyList: 'PropertyList',
      bornTimestamp: 'BornTimestamp',
      bodyCRC: 'BodyCRC',
      bornHost: 'BornHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storeSize: 'number',
      reconsumeTimes: 'number',
      storeTimestamp: 'number',
      instanceId: 'string',
      msgId: 'string',
      storeHost: 'string',
      topic: 'string',
      propertyList: OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyList,
      bornTimestamp: 'number',
      bodyCRC: 'number',
      bornHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundList extends $tea.Model {
  onsRestMessageDo?: OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDo[];
  static names(): { [key: string]: string } {
    return {
      onsRestMessageDo: 'OnsRestMessageDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onsRestMessageDo: { 'type': 'array', 'itemType': OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDo extends $tea.Model {
  currentPage?: number;
  msgFoundList?: OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundList;
  maxPageCount?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      msgFoundList: 'MsgFoundList',
      maxPageCount: 'MaxPageCount',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      msgFoundList: OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundList,
      maxPageCount: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessageResendByIdResponseBodyData extends $tea.Model {
  msgId?: string[];
  static names(): { [key: string]: string } {
    return {
      msgId: 'MsgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msgId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupListRequestTag extends $tea.Model {
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

export class OnsGroupListResponseBodyDataSubscribeInfoDoTagsTag extends $tea.Model {
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

export class OnsGroupListResponseBodyDataSubscribeInfoDoTags extends $tea.Model {
  tag?: OnsGroupListResponseBodyDataSubscribeInfoDoTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': OnsGroupListResponseBodyDataSubscribeInfoDoTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupListResponseBodyDataSubscribeInfoDo extends $tea.Model {
  owner?: string;
  updateTime?: number;
  independentNaming?: boolean;
  groupId?: string;
  remark?: string;
  createTime?: number;
  tags?: OnsGroupListResponseBodyDataSubscribeInfoDoTags;
  instanceId?: string;
  groupType?: string;
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      updateTime: 'UpdateTime',
      independentNaming: 'IndependentNaming',
      groupId: 'GroupId',
      remark: 'Remark',
      createTime: 'CreateTime',
      tags: 'Tags',
      instanceId: 'InstanceId',
      groupType: 'GroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      updateTime: 'number',
      independentNaming: 'boolean',
      groupId: 'string',
      remark: 'string',
      createTime: 'number',
      tags: OnsGroupListResponseBodyDataSubscribeInfoDoTags,
      instanceId: 'string',
      groupType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupListResponseBodyData extends $tea.Model {
  subscribeInfoDo?: OnsGroupListResponseBodyDataSubscribeInfoDo[];
  static names(): { [key: string]: string } {
    return {
      subscribeInfoDo: 'SubscribeInfoDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscribeInfoDo: { 'type': 'array', 'itemType': OnsGroupListResponseBodyDataSubscribeInfoDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupSubDetailResponseBodyDataSubscriptionDataListSubscriptionDataList extends $tea.Model {
  subString?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      subString: 'SubString',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subString: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupSubDetailResponseBodyDataSubscriptionDataList extends $tea.Model {
  subscriptionDataList?: OnsGroupSubDetailResponseBodyDataSubscriptionDataListSubscriptionDataList[];
  static names(): { [key: string]: string } {
    return {
      subscriptionDataList: 'SubscriptionDataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscriptionDataList: { 'type': 'array', 'itemType': OnsGroupSubDetailResponseBodyDataSubscriptionDataListSubscriptionDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupSubDetailResponseBodyData extends $tea.Model {
  subscriptionDataList?: OnsGroupSubDetailResponseBodyDataSubscriptionDataList;
  groupId?: string;
  messageModel?: string;
  online?: boolean;
  static names(): { [key: string]: string } {
    return {
      subscriptionDataList: 'SubscriptionDataList',
      groupId: 'GroupId',
      messageModel: 'MessageModel',
      online: 'Online',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscriptionDataList: OnsGroupSubDetailResponseBodyDataSubscriptionDataList,
      groupId: 'string',
      messageModel: 'string',
      online: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceBaseInfoResponseBodyInstanceBaseInfoEndpoints extends $tea.Model {
  tcpEndpoint?: string;
  httpInternetEndpoint?: string;
  httpInternalEndpoint?: string;
  httpInternetSecureEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      tcpEndpoint: 'TcpEndpoint',
      httpInternetEndpoint: 'HttpInternetEndpoint',
      httpInternalEndpoint: 'HttpInternalEndpoint',
      httpInternetSecureEndpoint: 'HttpInternetSecureEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tcpEndpoint: 'string',
      httpInternetEndpoint: 'string',
      httpInternalEndpoint: 'string',
      httpInternetSecureEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceBaseInfoResponseBodyInstanceBaseInfo extends $tea.Model {
  endpoints?: OnsInstanceBaseInfoResponseBodyInstanceBaseInfoEndpoints;
  independentNaming?: boolean;
  maxTps?: number;
  remark?: string;
  instanceName?: string;
  releaseTime?: number;
  topicCapacity?: number;
  instanceStatus?: number;
  instanceId?: string;
  instanceType?: number;
  static names(): { [key: string]: string } {
    return {
      endpoints: 'Endpoints',
      independentNaming: 'IndependentNaming',
      maxTps: 'MaxTps',
      remark: 'Remark',
      instanceName: 'InstanceName',
      releaseTime: 'ReleaseTime',
      topicCapacity: 'TopicCapacity',
      instanceStatus: 'InstanceStatus',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: OnsInstanceBaseInfoResponseBodyInstanceBaseInfoEndpoints,
      independentNaming: 'boolean',
      maxTps: 'number',
      remark: 'string',
      instanceName: 'string',
      releaseTime: 'number',
      topicCapacity: 'number',
      instanceStatus: 'number',
      instanceId: 'string',
      instanceType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceCreateResponseBodyData extends $tea.Model {
  instanceId?: string;
  instanceType?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceInServiceListRequestTag extends $tea.Model {
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

export class OnsInstanceInServiceListResponseBodyDataInstanceVOTagsTag extends $tea.Model {
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

export class OnsInstanceInServiceListResponseBodyDataInstanceVOTags extends $tea.Model {
  tag?: OnsInstanceInServiceListResponseBodyDataInstanceVOTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': OnsInstanceInServiceListResponseBodyDataInstanceVOTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceInServiceListResponseBodyDataInstanceVO extends $tea.Model {
  independentNaming?: boolean;
  instanceName?: string;
  releaseTime?: number;
  instanceStatus?: number;
  tags?: OnsInstanceInServiceListResponseBodyDataInstanceVOTags;
  instanceId?: string;
  instanceType?: number;
  static names(): { [key: string]: string } {
    return {
      independentNaming: 'IndependentNaming',
      instanceName: 'InstanceName',
      releaseTime: 'ReleaseTime',
      instanceStatus: 'InstanceStatus',
      tags: 'Tags',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      independentNaming: 'boolean',
      instanceName: 'string',
      releaseTime: 'number',
      instanceStatus: 'number',
      tags: OnsInstanceInServiceListResponseBodyDataInstanceVOTags,
      instanceId: 'string',
      instanceType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceInServiceListResponseBodyData extends $tea.Model {
  instanceVO?: OnsInstanceInServiceListResponseBodyDataInstanceVO[];
  static names(): { [key: string]: string } {
    return {
      instanceVO: 'InstanceVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceVO: { 'type': 'array', 'itemType': OnsInstanceInServiceListResponseBodyDataInstanceVO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByKeyResponseBodyDataOnsRestMessageDoPropertyListMessageProperty extends $tea.Model {
  value?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByKeyResponseBodyDataOnsRestMessageDoPropertyList extends $tea.Model {
  messageProperty?: OnsMessageGetByKeyResponseBodyDataOnsRestMessageDoPropertyListMessageProperty[];
  static names(): { [key: string]: string } {
    return {
      messageProperty: 'MessageProperty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageProperty: { 'type': 'array', 'itemType': OnsMessageGetByKeyResponseBodyDataOnsRestMessageDoPropertyListMessageProperty },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByKeyResponseBodyDataOnsRestMessageDo extends $tea.Model {
  storeSize?: number;
  reconsumeTimes?: number;
  storeTimestamp?: number;
  instanceId?: string;
  msgId?: string;
  storeHost?: string;
  topic?: string;
  propertyList?: OnsMessageGetByKeyResponseBodyDataOnsRestMessageDoPropertyList;
  bornTimestamp?: number;
  bodyCRC?: number;
  bornHost?: string;
  static names(): { [key: string]: string } {
    return {
      storeSize: 'StoreSize',
      reconsumeTimes: 'ReconsumeTimes',
      storeTimestamp: 'StoreTimestamp',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      storeHost: 'StoreHost',
      topic: 'Topic',
      propertyList: 'PropertyList',
      bornTimestamp: 'BornTimestamp',
      bodyCRC: 'BodyCRC',
      bornHost: 'BornHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storeSize: 'number',
      reconsumeTimes: 'number',
      storeTimestamp: 'number',
      instanceId: 'string',
      msgId: 'string',
      storeHost: 'string',
      topic: 'string',
      propertyList: OnsMessageGetByKeyResponseBodyDataOnsRestMessageDoPropertyList,
      bornTimestamp: 'number',
      bodyCRC: 'number',
      bornHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByKeyResponseBodyData extends $tea.Model {
  onsRestMessageDo?: OnsMessageGetByKeyResponseBodyDataOnsRestMessageDo[];
  static names(): { [key: string]: string } {
    return {
      onsRestMessageDo: 'OnsRestMessageDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onsRestMessageDo: { 'type': 'array', 'itemType': OnsMessageGetByKeyResponseBodyDataOnsRestMessageDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByMsgIdResponseBodyDataPropertyListMessageProperty extends $tea.Model {
  value?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByMsgIdResponseBodyDataPropertyList extends $tea.Model {
  messageProperty?: OnsMessageGetByMsgIdResponseBodyDataPropertyListMessageProperty[];
  static names(): { [key: string]: string } {
    return {
      messageProperty: 'MessageProperty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageProperty: { 'type': 'array', 'itemType': OnsMessageGetByMsgIdResponseBodyDataPropertyListMessageProperty },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByMsgIdResponseBodyData extends $tea.Model {
  storeSize?: number;
  reconsumeTimes?: number;
  storeTimestamp?: number;
  instanceId?: string;
  msgId?: string;
  storeHost?: string;
  topic?: string;
  propertyList?: OnsMessageGetByMsgIdResponseBodyDataPropertyList;
  bornTimestamp?: number;
  bodyCRC?: number;
  bornHost?: string;
  static names(): { [key: string]: string } {
    return {
      storeSize: 'StoreSize',
      reconsumeTimes: 'ReconsumeTimes',
      storeTimestamp: 'StoreTimestamp',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      storeHost: 'StoreHost',
      topic: 'Topic',
      propertyList: 'PropertyList',
      bornTimestamp: 'BornTimestamp',
      bodyCRC: 'BodyCRC',
      bornHost: 'BornHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storeSize: 'number',
      reconsumeTimes: 'number',
      storeTimestamp: 'number',
      instanceId: 'string',
      msgId: 'string',
      storeHost: 'string',
      topic: 'string',
      propertyList: OnsMessageGetByMsgIdResponseBodyDataPropertyList,
      bornTimestamp: 'number',
      bodyCRC: 'number',
      bornHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyListMessageProperty extends $tea.Model {
  value?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyList extends $tea.Model {
  messageProperty?: OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyListMessageProperty[];
  static names(): { [key: string]: string } {
    return {
      messageProperty: 'MessageProperty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageProperty: { 'type': 'array', 'itemType': OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyListMessageProperty },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDo extends $tea.Model {
  storeSize?: number;
  reconsumeTimes?: number;
  storeTimestamp?: number;
  instanceId?: string;
  msgId?: string;
  storeHost?: string;
  topic?: string;
  propertyList?: OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyList;
  bornTimestamp?: number;
  bodyCRC?: number;
  bornHost?: string;
  static names(): { [key: string]: string } {
    return {
      storeSize: 'StoreSize',
      reconsumeTimes: 'ReconsumeTimes',
      storeTimestamp: 'StoreTimestamp',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      storeHost: 'StoreHost',
      topic: 'Topic',
      propertyList: 'PropertyList',
      bornTimestamp: 'BornTimestamp',
      bodyCRC: 'BodyCRC',
      bornHost: 'BornHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storeSize: 'number',
      reconsumeTimes: 'number',
      storeTimestamp: 'number',
      instanceId: 'string',
      msgId: 'string',
      storeHost: 'string',
      topic: 'string',
      propertyList: OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyList,
      bornTimestamp: 'number',
      bodyCRC: 'number',
      bornHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundList extends $tea.Model {
  onsRestMessageDo?: OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDo[];
  static names(): { [key: string]: string } {
    return {
      onsRestMessageDo: 'OnsRestMessageDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onsRestMessageDo: { 'type': 'array', 'itemType': OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessagePageQueryByTopicResponseBodyMsgFoundDo extends $tea.Model {
  currentPage?: number;
  msgFoundList?: OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundList;
  maxPageCount?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      msgFoundList: 'MsgFoundList',
      maxPageCount: 'MaxPageCount',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      msgFoundList: OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundList,
      maxPageCount: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageTraceResponseBodyDataMessageTrack extends $tea.Model {
  trackType?: string;
  consumerGroup?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      trackType: 'TrackType',
      consumerGroup: 'ConsumerGroup',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trackType: 'string',
      consumerGroup: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageTraceResponseBodyData extends $tea.Model {
  messageTrack?: OnsMessageTraceResponseBodyDataMessageTrack[];
  static names(): { [key: string]: string } {
    return {
      messageTrack: 'MessageTrack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageTrack: { 'type': 'array', 'itemType': OnsMessageTraceResponseBodyDataMessageTrack },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttGroupIdListResponseBodyDataMqttGroupIdDo extends $tea.Model {
  updateTime?: number;
  independentNaming?: boolean;
  groupId?: string;
  createTime?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      independentNaming: 'IndependentNaming',
      groupId: 'GroupId',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      independentNaming: 'boolean',
      groupId: 'string',
      createTime: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttGroupIdListResponseBodyData extends $tea.Model {
  mqttGroupIdDo?: OnsMqttGroupIdListResponseBodyDataMqttGroupIdDo[];
  static names(): { [key: string]: string } {
    return {
      mqttGroupIdDo: 'MqttGroupIdDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqttGroupIdDo: { 'type': 'array', 'itemType': OnsMqttGroupIdListResponseBodyDataMqttGroupIdDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttQueryClientByClientIdResponseBodyMqttClientInfoDoSubScriptonDataSubscriptionDo extends $tea.Model {
  subTopic?: string;
  parentTopic?: string;
  qos?: number;
  static names(): { [key: string]: string } {
    return {
      subTopic: 'SubTopic',
      parentTopic: 'ParentTopic',
      qos: 'Qos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subTopic: 'string',
      parentTopic: 'string',
      qos: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttQueryClientByClientIdResponseBodyMqttClientInfoDoSubScriptonData extends $tea.Model {
  subscriptionDo?: OnsMqttQueryClientByClientIdResponseBodyMqttClientInfoDoSubScriptonDataSubscriptionDo[];
  static names(): { [key: string]: string } {
    return {
      subscriptionDo: 'SubscriptionDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscriptionDo: { 'type': 'array', 'itemType': OnsMqttQueryClientByClientIdResponseBodyMqttClientInfoDoSubScriptonDataSubscriptionDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttQueryClientByClientIdResponseBodyMqttClientInfoDo extends $tea.Model {
  online?: boolean;
  lastTouch?: number;
  socketChannel?: string;
  clientId?: string;
  subScriptonData?: OnsMqttQueryClientByClientIdResponseBodyMqttClientInfoDoSubScriptonData;
  static names(): { [key: string]: string } {
    return {
      online: 'Online',
      lastTouch: 'LastTouch',
      socketChannel: 'SocketChannel',
      clientId: 'ClientId',
      subScriptonData: 'SubScriptonData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      online: 'boolean',
      lastTouch: 'number',
      socketChannel: 'string',
      clientId: 'string',
      subScriptonData: OnsMqttQueryClientByClientIdResponseBodyMqttClientInfoDoSubScriptonData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttQueryClientByGroupIdResponseBodyMqttClientSetDo extends $tea.Model {
  onlineCount?: number;
  static names(): { [key: string]: string } {
    return {
      onlineCount: 'OnlineCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlineCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttQueryClientByTopicResponseBodyMqttClientSetDo extends $tea.Model {
  onlineCount?: number;
  static names(): { [key: string]: string } {
    return {
      onlineCount: 'OnlineCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlineCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttQueryHistoryOnlineResponseBodyDataRecordsStatsDataDo extends $tea.Model {
  y?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      y: 'Y',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      y: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttQueryHistoryOnlineResponseBodyDataRecords extends $tea.Model {
  statsDataDo?: OnsMqttQueryHistoryOnlineResponseBodyDataRecordsStatsDataDo[];
  static names(): { [key: string]: string } {
    return {
      statsDataDo: 'StatsDataDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statsDataDo: { 'type': 'array', 'itemType': OnsMqttQueryHistoryOnlineResponseBodyDataRecordsStatsDataDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttQueryHistoryOnlineResponseBodyData extends $tea.Model {
  records?: OnsMqttQueryHistoryOnlineResponseBodyDataRecords;
  XUnit?: string;
  YUnit?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      XUnit: 'XUnit',
      YUnit: 'YUnit',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: OnsMqttQueryHistoryOnlineResponseBodyDataRecords,
      XUnit: 'string',
      YUnit: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttQueryMsgTransTrendResponseBodyDataRecordsStatsDataDo extends $tea.Model {
  y?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      y: 'Y',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      y: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttQueryMsgTransTrendResponseBodyDataRecords extends $tea.Model {
  statsDataDo?: OnsMqttQueryMsgTransTrendResponseBodyDataRecordsStatsDataDo[];
  static names(): { [key: string]: string } {
    return {
      statsDataDo: 'StatsDataDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statsDataDo: { 'type': 'array', 'itemType': OnsMqttQueryMsgTransTrendResponseBodyDataRecordsStatsDataDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMqttQueryMsgTransTrendResponseBodyData extends $tea.Model {
  records?: OnsMqttQueryMsgTransTrendResponseBodyDataRecords;
  XUnit?: string;
  YUnit?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      XUnit: 'XUnit',
      YUnit: 'YUnit',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: OnsMqttQueryMsgTransTrendResponseBodyDataRecords,
      XUnit: 'string',
      YUnit: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsRegionListResponseBodyDataRegionDo extends $tea.Model {
  regionName?: string;
  onsRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionName: 'RegionName',
      onsRegionId: 'OnsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionName: 'string',
      onsRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsRegionListResponseBodyData extends $tea.Model {
  regionDo?: OnsRegionListResponseBodyDataRegionDo[];
  static names(): { [key: string]: string } {
    return {
      regionDo: 'RegionDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionDo: { 'type': 'array', 'itemType': OnsRegionListResponseBodyDataRegionDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicListRequestTag extends $tea.Model {
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

export class OnsTopicListResponseBodyDataPublishInfoDoTagsTag extends $tea.Model {
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

export class OnsTopicListResponseBodyDataPublishInfoDoTags extends $tea.Model {
  tag?: OnsTopicListResponseBodyDataPublishInfoDoTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': OnsTopicListResponseBodyDataPublishInfoDoTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicListResponseBodyDataPublishInfoDo extends $tea.Model {
  messageType?: number;
  relationName?: string;
  owner?: string;
  independentNaming?: boolean;
  remark?: string;
  relation?: number;
  createTime?: number;
  topic?: string;
  tags?: OnsTopicListResponseBodyDataPublishInfoDoTags;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      messageType: 'MessageType',
      relationName: 'RelationName',
      owner: 'Owner',
      independentNaming: 'IndependentNaming',
      remark: 'Remark',
      relation: 'Relation',
      createTime: 'CreateTime',
      topic: 'Topic',
      tags: 'Tags',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageType: 'number',
      relationName: 'string',
      owner: 'string',
      independentNaming: 'boolean',
      remark: 'string',
      relation: 'number',
      createTime: 'number',
      topic: 'string',
      tags: OnsTopicListResponseBodyDataPublishInfoDoTags,
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicListResponseBodyData extends $tea.Model {
  publishInfoDo?: OnsTopicListResponseBodyDataPublishInfoDo[];
  static names(): { [key: string]: string } {
    return {
      publishInfoDo: 'PublishInfoDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publishInfoDo: { 'type': 'array', 'itemType': OnsTopicListResponseBodyDataPublishInfoDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicStatusResponseBodyData extends $tea.Model {
  perm?: number;
  lastTimeStamp?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      perm: 'Perm',
      lastTimeStamp: 'LastTimeStamp',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      perm: 'number',
      lastTimeStamp: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicSubDetailResponseBodyDataSubscriptionDataListSubscriptionDataList extends $tea.Model {
  groupId?: string;
  messageModel?: string;
  subString?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      messageModel: 'MessageModel',
      subString: 'SubString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      messageModel: 'string',
      subString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicSubDetailResponseBodyDataSubscriptionDataList extends $tea.Model {
  subscriptionDataList?: OnsTopicSubDetailResponseBodyDataSubscriptionDataListSubscriptionDataList[];
  static names(): { [key: string]: string } {
    return {
      subscriptionDataList: 'SubscriptionDataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscriptionDataList: { 'type': 'array', 'itemType': OnsTopicSubDetailResponseBodyDataSubscriptionDataListSubscriptionDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicSubDetailResponseBodyData extends $tea.Model {
  subscriptionDataList?: OnsTopicSubDetailResponseBodyDataSubscriptionDataList;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      subscriptionDataList: 'SubscriptionDataList',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscriptionDataList: OnsTopicSubDetailResponseBodyDataSubscriptionDataList,
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubListSubMapDoClientListSubClientInfoDo extends $tea.Model {
  status?: string;
  subTime?: number;
  reconsumeTimes?: number;
  subGroupName?: string;
  clientHost?: string;
  costTime?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      subTime: 'SubTime',
      reconsumeTimes: 'ReconsumeTimes',
      subGroupName: 'SubGroupName',
      clientHost: 'ClientHost',
      costTime: 'CostTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      subTime: 'number',
      reconsumeTimes: 'number',
      subGroupName: 'string',
      clientHost: 'string',
      costTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubListSubMapDoClientList extends $tea.Model {
  subClientInfoDo?: OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubListSubMapDoClientListSubClientInfoDo[];
  static names(): { [key: string]: string } {
    return {
      subClientInfoDo: 'SubClientInfoDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subClientInfoDo: { 'type': 'array', 'itemType': OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubListSubMapDoClientListSubClientInfoDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubListSubMapDo extends $tea.Model {
  clientList?: OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubListSubMapDoClientList;
  failCount?: number;
  subGroupName?: string;
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      clientList: 'ClientList',
      failCount: 'FailCount',
      subGroupName: 'SubGroupName',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientList: OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubListSubMapDoClientList,
      failCount: 'number',
      subGroupName: 'string',
      successCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubList extends $tea.Model {
  subMapDo?: OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubListSubMapDo[];
  static names(): { [key: string]: string } {
    return {
      subMapDo: 'SubMapDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subMapDo: { 'type': 'array', 'itemType': OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubListSubMapDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDo extends $tea.Model {
  status?: string;
  msgKey?: string;
  pubTime?: number;
  subList?: OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubList;
  topic?: string;
  costTime?: number;
  tag?: string;
  msgId?: string;
  pubGroupName?: string;
  bornHost?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      msgKey: 'MsgKey',
      pubTime: 'PubTime',
      subList: 'SubList',
      topic: 'Topic',
      costTime: 'CostTime',
      tag: 'Tag',
      msgId: 'MsgId',
      pubGroupName: 'PubGroupName',
      bornHost: 'BornHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      msgKey: 'string',
      pubTime: 'number',
      subList: OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubList,
      topic: 'string',
      costTime: 'number',
      tag: 'string',
      msgId: 'string',
      pubGroupName: 'string',
      bornHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceGetResultResponseBodyTraceDataTraceList extends $tea.Model {
  traceMapDo?: OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDo[];
  static names(): { [key: string]: string } {
    return {
      traceMapDo: 'TraceMapDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traceMapDo: { 'type': 'array', 'itemType': OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceGetResultResponseBodyTraceData extends $tea.Model {
  status?: string;
  msgKey?: string;
  updateTime?: number;
  createTime?: number;
  topic?: string;
  userId?: string;
  instanceId?: string;
  msgId?: string;
  traceList?: OnsTraceGetResultResponseBodyTraceDataTraceList;
  queryId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      msgKey: 'MsgKey',
      updateTime: 'UpdateTime',
      createTime: 'CreateTime',
      topic: 'Topic',
      userId: 'UserId',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      traceList: 'TraceList',
      queryId: 'QueryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      msgKey: 'string',
      updateTime: 'number',
      createTime: 'number',
      topic: 'string',
      userId: 'string',
      instanceId: 'string',
      msgId: 'string',
      traceList: OnsTraceGetResultResponseBodyTraceDataTraceList,
      queryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendGroupOutputTpsResponseBodyDataRecordsStatsDataDo extends $tea.Model {
  y?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      y: 'Y',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      y: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendGroupOutputTpsResponseBodyDataRecords extends $tea.Model {
  statsDataDo?: OnsTrendGroupOutputTpsResponseBodyDataRecordsStatsDataDo[];
  static names(): { [key: string]: string } {
    return {
      statsDataDo: 'StatsDataDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statsDataDo: { 'type': 'array', 'itemType': OnsTrendGroupOutputTpsResponseBodyDataRecordsStatsDataDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendGroupOutputTpsResponseBodyData extends $tea.Model {
  records?: OnsTrendGroupOutputTpsResponseBodyDataRecords;
  XUnit?: string;
  YUnit?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      XUnit: 'XUnit',
      YUnit: 'YUnit',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: OnsTrendGroupOutputTpsResponseBodyDataRecords,
      XUnit: 'string',
      YUnit: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendTopicInputTpsResponseBodyDataRecordsStatsDataDo extends $tea.Model {
  y?: number;
  x?: number;
  static names(): { [key: string]: string } {
    return {
      y: 'Y',
      x: 'X',
    };
  }

  static types(): { [key: string]: any } {
    return {
      y: 'number',
      x: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendTopicInputTpsResponseBodyDataRecords extends $tea.Model {
  statsDataDo?: OnsTrendTopicInputTpsResponseBodyDataRecordsStatsDataDo[];
  static names(): { [key: string]: string } {
    return {
      statsDataDo: 'StatsDataDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statsDataDo: { 'type': 'array', 'itemType': OnsTrendTopicInputTpsResponseBodyDataRecordsStatsDataDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendTopicInputTpsResponseBodyData extends $tea.Model {
  records?: OnsTrendTopicInputTpsResponseBodyDataRecords;
  XUnit?: string;
  YUnit?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      XUnit: 'XUnit',
      YUnit: 'YUnit',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: OnsTrendTopicInputTpsResponseBodyDataRecords,
      XUnit: 'string',
      YUnit: 'string',
      title: 'string',
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
      'ap-northeast-2-pop': "ons.ap-northeast-1.aliyuncs.com",
      'cn-beijing-finance-1': "ons.aliyuncs.com",
      'cn-beijing-finance-pop': "ons.aliyuncs.com",
      'cn-beijing-gov-1': "ons.aliyuncs.com",
      'cn-beijing-nu16-b01': "ons.aliyuncs.com",
      'cn-edge-1': "ons.aliyuncs.com",
      'cn-fujian': "ons.aliyuncs.com",
      'cn-haidian-cm12-c01': "ons.aliyuncs.com",
      'cn-hangzhou-bj-b01': "ons.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "ons.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "ons.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "ons.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "ons.aliyuncs.com",
      'cn-hangzhou-test-306': "ons.aliyuncs.com",
      'cn-hongkong-finance-pop': "ons.aliyuncs.com",
      'cn-qingdao-nebula': "ons.aliyuncs.com",
      'cn-shanghai-et15-b01': "ons.aliyuncs.com",
      'cn-shanghai-et2-b01': "ons.aliyuncs.com",
      'cn-shanghai-inner': "ons.aliyuncs.com",
      'cn-shanghai-internal-test-1': "ons.aliyuncs.com",
      'cn-shenzhen-inner': "ons.aliyuncs.com",
      'cn-shenzhen-st4-d01': "ons.aliyuncs.com",
      'cn-shenzhen-su18-b01': "ons.aliyuncs.com",
      'cn-wuhan': "ons.aliyuncs.com",
      'cn-yushanfang': "ons.aliyuncs.com",
      'cn-zhangbei-na61-b01': "ons.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "ons.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "ons.aliyuncs.com",
      'eu-west-1-oxs': "ons.ap-northeast-1.aliyuncs.com",
      'rus-west-1-pop': "ons.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ons", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async onsConsumerAccumulateWithOptions(request: OnsConsumerAccumulateRequest, runtime: $Util.RuntimeOptions): Promise<OnsConsumerAccumulateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsConsumerAccumulateResponse>(await this.doRPCRequest("OnsConsumerAccumulate", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsConsumerAccumulateResponse({}));
  }

  async onsConsumerAccumulate(request: OnsConsumerAccumulateRequest): Promise<OnsConsumerAccumulateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsConsumerAccumulateWithOptions(request, runtime);
  }

  async onsConsumerGetConnectionWithOptions(request: OnsConsumerGetConnectionRequest, runtime: $Util.RuntimeOptions): Promise<OnsConsumerGetConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsConsumerGetConnectionResponse>(await this.doRPCRequest("OnsConsumerGetConnection", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsConsumerGetConnectionResponse({}));
  }

  async onsConsumerGetConnection(request: OnsConsumerGetConnectionRequest): Promise<OnsConsumerGetConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsConsumerGetConnectionWithOptions(request, runtime);
  }

  async onsConsumerResetOffsetWithOptions(request: OnsConsumerResetOffsetRequest, runtime: $Util.RuntimeOptions): Promise<OnsConsumerResetOffsetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsConsumerResetOffsetResponse>(await this.doRPCRequest("OnsConsumerResetOffset", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsConsumerResetOffsetResponse({}));
  }

  async onsConsumerResetOffset(request: OnsConsumerResetOffsetRequest): Promise<OnsConsumerResetOffsetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsConsumerResetOffsetWithOptions(request, runtime);
  }

  async onsConsumerStatusWithOptions(request: OnsConsumerStatusRequest, runtime: $Util.RuntimeOptions): Promise<OnsConsumerStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsConsumerStatusResponse>(await this.doRPCRequest("OnsConsumerStatus", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsConsumerStatusResponse({}));
  }

  async onsConsumerStatus(request: OnsConsumerStatusRequest): Promise<OnsConsumerStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsConsumerStatusWithOptions(request, runtime);
  }

  async onsConsumerTimeSpanWithOptions(request: OnsConsumerTimeSpanRequest, runtime: $Util.RuntimeOptions): Promise<OnsConsumerTimeSpanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsConsumerTimeSpanResponse>(await this.doRPCRequest("OnsConsumerTimeSpan", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsConsumerTimeSpanResponse({}));
  }

  async onsConsumerTimeSpan(request: OnsConsumerTimeSpanRequest): Promise<OnsConsumerTimeSpanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsConsumerTimeSpanWithOptions(request, runtime);
  }

  async onsDLQMessageGetByIdWithOptions(request: OnsDLQMessageGetByIdRequest, runtime: $Util.RuntimeOptions): Promise<OnsDLQMessageGetByIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsDLQMessageGetByIdResponse>(await this.doRPCRequest("OnsDLQMessageGetById", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsDLQMessageGetByIdResponse({}));
  }

  async onsDLQMessageGetById(request: OnsDLQMessageGetByIdRequest): Promise<OnsDLQMessageGetByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsDLQMessageGetByIdWithOptions(request, runtime);
  }

  async onsDLQMessagePageQueryByGroupIdWithOptions(request: OnsDLQMessagePageQueryByGroupIdRequest, runtime: $Util.RuntimeOptions): Promise<OnsDLQMessagePageQueryByGroupIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsDLQMessagePageQueryByGroupIdResponse>(await this.doRPCRequest("OnsDLQMessagePageQueryByGroupId", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsDLQMessagePageQueryByGroupIdResponse({}));
  }

  async onsDLQMessagePageQueryByGroupId(request: OnsDLQMessagePageQueryByGroupIdRequest): Promise<OnsDLQMessagePageQueryByGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsDLQMessagePageQueryByGroupIdWithOptions(request, runtime);
  }

  async onsDLQMessageResendByIdWithOptions(request: OnsDLQMessageResendByIdRequest, runtime: $Util.RuntimeOptions): Promise<OnsDLQMessageResendByIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsDLQMessageResendByIdResponse>(await this.doRPCRequest("OnsDLQMessageResendById", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsDLQMessageResendByIdResponse({}));
  }

  async onsDLQMessageResendById(request: OnsDLQMessageResendByIdRequest): Promise<OnsDLQMessageResendByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsDLQMessageResendByIdWithOptions(request, runtime);
  }

  async onsGroupConsumerUpdateWithOptions(request: OnsGroupConsumerUpdateRequest, runtime: $Util.RuntimeOptions): Promise<OnsGroupConsumerUpdateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsGroupConsumerUpdateResponse>(await this.doRPCRequest("OnsGroupConsumerUpdate", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsGroupConsumerUpdateResponse({}));
  }

  async onsGroupConsumerUpdate(request: OnsGroupConsumerUpdateRequest): Promise<OnsGroupConsumerUpdateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsGroupConsumerUpdateWithOptions(request, runtime);
  }

  async onsGroupCreateWithOptions(request: OnsGroupCreateRequest, runtime: $Util.RuntimeOptions): Promise<OnsGroupCreateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsGroupCreateResponse>(await this.doRPCRequest("OnsGroupCreate", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsGroupCreateResponse({}));
  }

  async onsGroupCreate(request: OnsGroupCreateRequest): Promise<OnsGroupCreateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsGroupCreateWithOptions(request, runtime);
  }

  async onsGroupDeleteWithOptions(request: OnsGroupDeleteRequest, runtime: $Util.RuntimeOptions): Promise<OnsGroupDeleteResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsGroupDeleteResponse>(await this.doRPCRequest("OnsGroupDelete", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsGroupDeleteResponse({}));
  }

  async onsGroupDelete(request: OnsGroupDeleteRequest): Promise<OnsGroupDeleteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsGroupDeleteWithOptions(request, runtime);
  }

  async onsGroupListWithOptions(request: OnsGroupListRequest, runtime: $Util.RuntimeOptions): Promise<OnsGroupListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsGroupListResponse>(await this.doRPCRequest("OnsGroupList", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsGroupListResponse({}));
  }

  async onsGroupList(request: OnsGroupListRequest): Promise<OnsGroupListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsGroupListWithOptions(request, runtime);
  }

  async onsGroupSubDetailWithOptions(request: OnsGroupSubDetailRequest, runtime: $Util.RuntimeOptions): Promise<OnsGroupSubDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsGroupSubDetailResponse>(await this.doRPCRequest("OnsGroupSubDetail", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsGroupSubDetailResponse({}));
  }

  async onsGroupSubDetail(request: OnsGroupSubDetailRequest): Promise<OnsGroupSubDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsGroupSubDetailWithOptions(request, runtime);
  }

  async onsInstanceBaseInfoWithOptions(request: OnsInstanceBaseInfoRequest, runtime: $Util.RuntimeOptions): Promise<OnsInstanceBaseInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsInstanceBaseInfoResponse>(await this.doRPCRequest("OnsInstanceBaseInfo", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsInstanceBaseInfoResponse({}));
  }

  async onsInstanceBaseInfo(request: OnsInstanceBaseInfoRequest): Promise<OnsInstanceBaseInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsInstanceBaseInfoWithOptions(request, runtime);
  }

  async onsInstanceCreateWithOptions(request: OnsInstanceCreateRequest, runtime: $Util.RuntimeOptions): Promise<OnsInstanceCreateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsInstanceCreateResponse>(await this.doRPCRequest("OnsInstanceCreate", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsInstanceCreateResponse({}));
  }

  async onsInstanceCreate(request: OnsInstanceCreateRequest): Promise<OnsInstanceCreateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsInstanceCreateWithOptions(request, runtime);
  }

  async onsInstanceDeleteWithOptions(request: OnsInstanceDeleteRequest, runtime: $Util.RuntimeOptions): Promise<OnsInstanceDeleteResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsInstanceDeleteResponse>(await this.doRPCRequest("OnsInstanceDelete", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsInstanceDeleteResponse({}));
  }

  async onsInstanceDelete(request: OnsInstanceDeleteRequest): Promise<OnsInstanceDeleteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsInstanceDeleteWithOptions(request, runtime);
  }

  async onsInstanceInServiceListWithOptions(request: OnsInstanceInServiceListRequest, runtime: $Util.RuntimeOptions): Promise<OnsInstanceInServiceListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsInstanceInServiceListResponse>(await this.doRPCRequest("OnsInstanceInServiceList", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsInstanceInServiceListResponse({}));
  }

  async onsInstanceInServiceList(request: OnsInstanceInServiceListRequest): Promise<OnsInstanceInServiceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsInstanceInServiceListWithOptions(request, runtime);
  }

  async onsInstanceUpdateWithOptions(request: OnsInstanceUpdateRequest, runtime: $Util.RuntimeOptions): Promise<OnsInstanceUpdateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsInstanceUpdateResponse>(await this.doRPCRequest("OnsInstanceUpdate", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsInstanceUpdateResponse({}));
  }

  async onsInstanceUpdate(request: OnsInstanceUpdateRequest): Promise<OnsInstanceUpdateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsInstanceUpdateWithOptions(request, runtime);
  }

  async onsMessageGetByKeyWithOptions(request: OnsMessageGetByKeyRequest, runtime: $Util.RuntimeOptions): Promise<OnsMessageGetByKeyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsMessageGetByKeyResponse>(await this.doRPCRequest("OnsMessageGetByKey", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsMessageGetByKeyResponse({}));
  }

  async onsMessageGetByKey(request: OnsMessageGetByKeyRequest): Promise<OnsMessageGetByKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsMessageGetByKeyWithOptions(request, runtime);
  }

  async onsMessageGetByMsgIdWithOptions(request: OnsMessageGetByMsgIdRequest, runtime: $Util.RuntimeOptions): Promise<OnsMessageGetByMsgIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsMessageGetByMsgIdResponse>(await this.doRPCRequest("OnsMessageGetByMsgId", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsMessageGetByMsgIdResponse({}));
  }

  async onsMessageGetByMsgId(request: OnsMessageGetByMsgIdRequest): Promise<OnsMessageGetByMsgIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsMessageGetByMsgIdWithOptions(request, runtime);
  }

  async onsMessagePageQueryByTopicWithOptions(request: OnsMessagePageQueryByTopicRequest, runtime: $Util.RuntimeOptions): Promise<OnsMessagePageQueryByTopicResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsMessagePageQueryByTopicResponse>(await this.doRPCRequest("OnsMessagePageQueryByTopic", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsMessagePageQueryByTopicResponse({}));
  }

  async onsMessagePageQueryByTopic(request: OnsMessagePageQueryByTopicRequest): Promise<OnsMessagePageQueryByTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsMessagePageQueryByTopicWithOptions(request, runtime);
  }

  async onsMessagePushWithOptions(request: OnsMessagePushRequest, runtime: $Util.RuntimeOptions): Promise<OnsMessagePushResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsMessagePushResponse>(await this.doRPCRequest("OnsMessagePush", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsMessagePushResponse({}));
  }

  async onsMessagePush(request: OnsMessagePushRequest): Promise<OnsMessagePushResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsMessagePushWithOptions(request, runtime);
  }

  async onsMessageSendWithOptions(request: OnsMessageSendRequest, runtime: $Util.RuntimeOptions): Promise<OnsMessageSendResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsMessageSendResponse>(await this.doRPCRequest("OnsMessageSend", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsMessageSendResponse({}));
  }

  async onsMessageSend(request: OnsMessageSendRequest): Promise<OnsMessageSendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsMessageSendWithOptions(request, runtime);
  }

  async onsMessageTraceWithOptions(request: OnsMessageTraceRequest, runtime: $Util.RuntimeOptions): Promise<OnsMessageTraceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsMessageTraceResponse>(await this.doRPCRequest("OnsMessageTrace", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsMessageTraceResponse({}));
  }

  async onsMessageTrace(request: OnsMessageTraceRequest): Promise<OnsMessageTraceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsMessageTraceWithOptions(request, runtime);
  }

  async onsMqttGroupIdCreateWithOptions(request: OnsMqttGroupIdCreateRequest, runtime: $Util.RuntimeOptions): Promise<OnsMqttGroupIdCreateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsMqttGroupIdCreateResponse>(await this.doRPCRequest("OnsMqttGroupIdCreate", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsMqttGroupIdCreateResponse({}));
  }

  async onsMqttGroupIdCreate(request: OnsMqttGroupIdCreateRequest): Promise<OnsMqttGroupIdCreateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsMqttGroupIdCreateWithOptions(request, runtime);
  }

  async onsMqttGroupIdDeleteWithOptions(request: OnsMqttGroupIdDeleteRequest, runtime: $Util.RuntimeOptions): Promise<OnsMqttGroupIdDeleteResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsMqttGroupIdDeleteResponse>(await this.doRPCRequest("OnsMqttGroupIdDelete", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsMqttGroupIdDeleteResponse({}));
  }

  async onsMqttGroupIdDelete(request: OnsMqttGroupIdDeleteRequest): Promise<OnsMqttGroupIdDeleteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsMqttGroupIdDeleteWithOptions(request, runtime);
  }

  async onsMqttGroupIdListWithOptions(request: OnsMqttGroupIdListRequest, runtime: $Util.RuntimeOptions): Promise<OnsMqttGroupIdListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsMqttGroupIdListResponse>(await this.doRPCRequest("OnsMqttGroupIdList", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsMqttGroupIdListResponse({}));
  }

  async onsMqttGroupIdList(request: OnsMqttGroupIdListRequest): Promise<OnsMqttGroupIdListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsMqttGroupIdListWithOptions(request, runtime);
  }

  async onsMqttQueryClientByClientIdWithOptions(request: OnsMqttQueryClientByClientIdRequest, runtime: $Util.RuntimeOptions): Promise<OnsMqttQueryClientByClientIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsMqttQueryClientByClientIdResponse>(await this.doRPCRequest("OnsMqttQueryClientByClientId", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsMqttQueryClientByClientIdResponse({}));
  }

  async onsMqttQueryClientByClientId(request: OnsMqttQueryClientByClientIdRequest): Promise<OnsMqttQueryClientByClientIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsMqttQueryClientByClientIdWithOptions(request, runtime);
  }

  async onsMqttQueryClientByGroupIdWithOptions(request: OnsMqttQueryClientByGroupIdRequest, runtime: $Util.RuntimeOptions): Promise<OnsMqttQueryClientByGroupIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsMqttQueryClientByGroupIdResponse>(await this.doRPCRequest("OnsMqttQueryClientByGroupId", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsMqttQueryClientByGroupIdResponse({}));
  }

  async onsMqttQueryClientByGroupId(request: OnsMqttQueryClientByGroupIdRequest): Promise<OnsMqttQueryClientByGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsMqttQueryClientByGroupIdWithOptions(request, runtime);
  }

  async onsMqttQueryClientByTopicWithOptions(request: OnsMqttQueryClientByTopicRequest, runtime: $Util.RuntimeOptions): Promise<OnsMqttQueryClientByTopicResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsMqttQueryClientByTopicResponse>(await this.doRPCRequest("OnsMqttQueryClientByTopic", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsMqttQueryClientByTopicResponse({}));
  }

  async onsMqttQueryClientByTopic(request: OnsMqttQueryClientByTopicRequest): Promise<OnsMqttQueryClientByTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsMqttQueryClientByTopicWithOptions(request, runtime);
  }

  async onsMqttQueryHistoryOnlineWithOptions(request: OnsMqttQueryHistoryOnlineRequest, runtime: $Util.RuntimeOptions): Promise<OnsMqttQueryHistoryOnlineResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsMqttQueryHistoryOnlineResponse>(await this.doRPCRequest("OnsMqttQueryHistoryOnline", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsMqttQueryHistoryOnlineResponse({}));
  }

  async onsMqttQueryHistoryOnline(request: OnsMqttQueryHistoryOnlineRequest): Promise<OnsMqttQueryHistoryOnlineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsMqttQueryHistoryOnlineWithOptions(request, runtime);
  }

  async onsMqttQueryMsgTransTrendWithOptions(request: OnsMqttQueryMsgTransTrendRequest, runtime: $Util.RuntimeOptions): Promise<OnsMqttQueryMsgTransTrendResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsMqttQueryMsgTransTrendResponse>(await this.doRPCRequest("OnsMqttQueryMsgTransTrend", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsMqttQueryMsgTransTrendResponse({}));
  }

  async onsMqttQueryMsgTransTrend(request: OnsMqttQueryMsgTransTrendRequest): Promise<OnsMqttQueryMsgTransTrendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsMqttQueryMsgTransTrendWithOptions(request, runtime);
  }

  async onsRegionListWithOptions(runtime: $Util.RuntimeOptions): Promise<OnsRegionListResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<OnsRegionListResponse>(await this.doRPCRequest("OnsRegionList", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsRegionListResponse({}));
  }

  async onsRegionList(): Promise<OnsRegionListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsRegionListWithOptions(runtime);
  }

  async onsTopicCreateWithOptions(request: OnsTopicCreateRequest, runtime: $Util.RuntimeOptions): Promise<OnsTopicCreateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsTopicCreateResponse>(await this.doRPCRequest("OnsTopicCreate", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsTopicCreateResponse({}));
  }

  async onsTopicCreate(request: OnsTopicCreateRequest): Promise<OnsTopicCreateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTopicCreateWithOptions(request, runtime);
  }

  async onsTopicDeleteWithOptions(request: OnsTopicDeleteRequest, runtime: $Util.RuntimeOptions): Promise<OnsTopicDeleteResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsTopicDeleteResponse>(await this.doRPCRequest("OnsTopicDelete", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsTopicDeleteResponse({}));
  }

  async onsTopicDelete(request: OnsTopicDeleteRequest): Promise<OnsTopicDeleteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTopicDeleteWithOptions(request, runtime);
  }

  async onsTopicListWithOptions(request: OnsTopicListRequest, runtime: $Util.RuntimeOptions): Promise<OnsTopicListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsTopicListResponse>(await this.doRPCRequest("OnsTopicList", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsTopicListResponse({}));
  }

  async onsTopicList(request: OnsTopicListRequest): Promise<OnsTopicListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTopicListWithOptions(request, runtime);
  }

  async onsTopicStatusWithOptions(request: OnsTopicStatusRequest, runtime: $Util.RuntimeOptions): Promise<OnsTopicStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsTopicStatusResponse>(await this.doRPCRequest("OnsTopicStatus", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsTopicStatusResponse({}));
  }

  async onsTopicStatus(request: OnsTopicStatusRequest): Promise<OnsTopicStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTopicStatusWithOptions(request, runtime);
  }

  async onsTopicSubDetailWithOptions(request: OnsTopicSubDetailRequest, runtime: $Util.RuntimeOptions): Promise<OnsTopicSubDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsTopicSubDetailResponse>(await this.doRPCRequest("OnsTopicSubDetail", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsTopicSubDetailResponse({}));
  }

  async onsTopicSubDetail(request: OnsTopicSubDetailRequest): Promise<OnsTopicSubDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTopicSubDetailWithOptions(request, runtime);
  }

  async onsTopicUpdateWithOptions(request: OnsTopicUpdateRequest, runtime: $Util.RuntimeOptions): Promise<OnsTopicUpdateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsTopicUpdateResponse>(await this.doRPCRequest("OnsTopicUpdate", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsTopicUpdateResponse({}));
  }

  async onsTopicUpdate(request: OnsTopicUpdateRequest): Promise<OnsTopicUpdateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTopicUpdateWithOptions(request, runtime);
  }

  async onsTraceGetResultWithOptions(request: OnsTraceGetResultRequest, runtime: $Util.RuntimeOptions): Promise<OnsTraceGetResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsTraceGetResultResponse>(await this.doRPCRequest("OnsTraceGetResult", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsTraceGetResultResponse({}));
  }

  async onsTraceGetResult(request: OnsTraceGetResultRequest): Promise<OnsTraceGetResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTraceGetResultWithOptions(request, runtime);
  }

  async onsTraceQueryByMsgIdWithOptions(request: OnsTraceQueryByMsgIdRequest, runtime: $Util.RuntimeOptions): Promise<OnsTraceQueryByMsgIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsTraceQueryByMsgIdResponse>(await this.doRPCRequest("OnsTraceQueryByMsgId", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsTraceQueryByMsgIdResponse({}));
  }

  async onsTraceQueryByMsgId(request: OnsTraceQueryByMsgIdRequest): Promise<OnsTraceQueryByMsgIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTraceQueryByMsgIdWithOptions(request, runtime);
  }

  async onsTraceQueryByMsgKeyWithOptions(request: OnsTraceQueryByMsgKeyRequest, runtime: $Util.RuntimeOptions): Promise<OnsTraceQueryByMsgKeyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsTraceQueryByMsgKeyResponse>(await this.doRPCRequest("OnsTraceQueryByMsgKey", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsTraceQueryByMsgKeyResponse({}));
  }

  async onsTraceQueryByMsgKey(request: OnsTraceQueryByMsgKeyRequest): Promise<OnsTraceQueryByMsgKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTraceQueryByMsgKeyWithOptions(request, runtime);
  }

  async onsTrendGroupOutputTpsWithOptions(request: OnsTrendGroupOutputTpsRequest, runtime: $Util.RuntimeOptions): Promise<OnsTrendGroupOutputTpsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsTrendGroupOutputTpsResponse>(await this.doRPCRequest("OnsTrendGroupOutputTps", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsTrendGroupOutputTpsResponse({}));
  }

  async onsTrendGroupOutputTps(request: OnsTrendGroupOutputTpsRequest): Promise<OnsTrendGroupOutputTpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTrendGroupOutputTpsWithOptions(request, runtime);
  }

  async onsTrendTopicInputTpsWithOptions(request: OnsTrendTopicInputTpsRequest, runtime: $Util.RuntimeOptions): Promise<OnsTrendTopicInputTpsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsTrendTopicInputTpsResponse>(await this.doRPCRequest("OnsTrendTopicInputTps", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsTrendTopicInputTpsResponse({}));
  }

  async onsTrendTopicInputTps(request: OnsTrendTopicInputTpsRequest): Promise<OnsTrendTopicInputTpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTrendTopicInputTpsWithOptions(request, runtime);
  }

  async onsWarnCreateWithOptions(request: OnsWarnCreateRequest, runtime: $Util.RuntimeOptions): Promise<OnsWarnCreateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsWarnCreateResponse>(await this.doRPCRequest("OnsWarnCreate", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsWarnCreateResponse({}));
  }

  async onsWarnCreate(request: OnsWarnCreateRequest): Promise<OnsWarnCreateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsWarnCreateWithOptions(request, runtime);
  }

  async onsWarnDeleteWithOptions(request: OnsWarnDeleteRequest, runtime: $Util.RuntimeOptions): Promise<OnsWarnDeleteResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OnsWarnDeleteResponse>(await this.doRPCRequest("OnsWarnDelete", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OnsWarnDeleteResponse({}));
  }

  async onsWarnDelete(request: OnsWarnDeleteRequest): Promise<OnsWarnDeleteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsWarnDeleteWithOptions(request, runtime);
  }

  async openOnsServiceWithOptions(runtime: $Util.RuntimeOptions): Promise<OpenOnsServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<OpenOnsServiceResponse>(await this.doRPCRequest("OpenOnsService", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new OpenOnsServiceResponse({}));
  }

  async openOnsService(): Promise<OpenOnsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openOnsServiceWithOptions(runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
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
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2019-02-14", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
