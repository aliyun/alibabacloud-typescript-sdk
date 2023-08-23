// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ListTagResourcesRequest extends $tea.Model {
  instanceId?: string;
  nextToken?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nextToken: 'string',
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
  statusCode: number;
  body: ListTagResourcesResponseBody;
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

export class OnsConsumerAccumulateRequest extends $tea.Model {
  detail?: boolean;
  groupId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'boolean',
      groupId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerAccumulateResponseBody extends $tea.Model {
  data?: OnsConsumerAccumulateResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsConsumerAccumulateResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerAccumulateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OnsConsumerAccumulateResponseBody;
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
  data?: OnsConsumerGetConnectionResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsConsumerGetConnectionResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerGetConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OnsConsumerGetConnectionResponseBody;
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
      body: OnsConsumerGetConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerResetOffsetRequest extends $tea.Model {
  groupId?: string;
  instanceId?: string;
  resetTimestamp?: number;
  topic?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      resetTimestamp: 'ResetTimestamp',
      topic: 'Topic',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
      resetTimestamp: 'number',
      topic: 'string',
      type: 'number',
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
  statusCode: number;
  body: OnsConsumerResetOffsetResponseBody;
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
      body: OnsConsumerResetOffsetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusRequest extends $tea.Model {
  detail?: boolean;
  groupId?: string;
  instanceId?: string;
  needJstack?: boolean;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      needJstack: 'NeedJstack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'boolean',
      groupId: 'string',
      instanceId: 'string',
      needJstack: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBody extends $tea.Model {
  data?: OnsConsumerStatusResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsConsumerStatusResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OnsConsumerStatusResponseBody;
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
      body: OnsConsumerStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerTimeSpanRequest extends $tea.Model {
  groupId?: string;
  instanceId?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerTimeSpanResponseBody extends $tea.Model {
  data?: OnsConsumerTimeSpanResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsConsumerTimeSpanResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerTimeSpanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OnsConsumerTimeSpanResponseBody;
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
      body: OnsConsumerTimeSpanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessageGetByIdRequest extends $tea.Model {
  groupId?: string;
  instanceId?: string;
  msgId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
      msgId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessageGetByIdResponseBody extends $tea.Model {
  data?: OnsDLQMessageGetByIdResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsDLQMessageGetByIdResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessageGetByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OnsDLQMessageGetByIdResponseBody;
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
      body: OnsDLQMessageGetByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessagePageQueryByGroupIdRequest extends $tea.Model {
  beginTime?: number;
  currentPage?: number;
  endTime?: number;
  groupId?: string;
  instanceId?: string;
  pageSize?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      currentPage: 'number',
      endTime: 'number',
      groupId: 'string',
      instanceId: 'string',
      pageSize: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessagePageQueryByGroupIdResponseBody extends $tea.Model {
  msgFoundDo?: OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      msgFoundDo: 'MsgFoundDo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msgFoundDo: OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessagePageQueryByGroupIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OnsDLQMessagePageQueryByGroupIdResponseBody;
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
      body: OnsDLQMessagePageQueryByGroupIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessageResendByIdRequest extends $tea.Model {
  groupId?: string;
  instanceId?: string;
  msgId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
      msgId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessageResendByIdResponseBody extends $tea.Model {
  data?: OnsDLQMessageResendByIdResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsDLQMessageResendByIdResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessageResendByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OnsDLQMessageResendByIdResponseBody;
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
      body: OnsDLQMessageResendByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupConsumerUpdateRequest extends $tea.Model {
  groupId?: string;
  instanceId?: string;
  readEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      readEnable: 'ReadEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
      readEnable: 'boolean',
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
  statusCode: number;
  body: OnsGroupConsumerUpdateResponseBody;
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
      body: OnsGroupConsumerUpdateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupCreateRequest extends $tea.Model {
  groupId?: string;
  groupType?: string;
  instanceId?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupType: 'GroupType',
      instanceId: 'InstanceId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupType: 'string',
      instanceId: 'string',
      remark: 'string',
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
  statusCode: number;
  body: OnsGroupCreateResponseBody;
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
  statusCode: number;
  body: OnsGroupDeleteResponseBody;
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
      body: OnsGroupDeleteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupListRequest extends $tea.Model {
  groupId?: string;
  groupType?: string;
  instanceId?: string;
  tag?: OnsGroupListRequestTag[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupType: 'GroupType',
      instanceId: 'InstanceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupType: 'string',
      instanceId: 'string',
      tag: { 'type': 'array', 'itemType': OnsGroupListRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupListResponseBody extends $tea.Model {
  data?: OnsGroupListResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsGroupListResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OnsGroupListResponseBody;
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
      body: OnsGroupListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupSubDetailRequest extends $tea.Model {
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

export class OnsGroupSubDetailResponseBody extends $tea.Model {
  data?: OnsGroupSubDetailResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsGroupSubDetailResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupSubDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OnsGroupSubDetailResponseBody;
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
  statusCode: number;
  body: OnsInstanceBaseInfoResponseBody;
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
      body: OnsInstanceBaseInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceCreateRequest extends $tea.Model {
  instanceName?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceCreateResponseBody extends $tea.Model {
  data?: OnsInstanceCreateResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsInstanceCreateResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceCreateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OnsInstanceCreateResponseBody;
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
  statusCode: number;
  body: OnsInstanceDeleteResponseBody;
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
      body: OnsInstanceDeleteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceInServiceListRequest extends $tea.Model {
  needResourceInfo?: boolean;
  tag?: OnsInstanceInServiceListRequestTag[];
  static names(): { [key: string]: string } {
    return {
      needResourceInfo: 'NeedResourceInfo',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needResourceInfo: 'boolean',
      tag: { 'type': 'array', 'itemType': OnsInstanceInServiceListRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceInServiceListResponseBody extends $tea.Model {
  data?: OnsInstanceInServiceListResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsInstanceInServiceListResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceInServiceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OnsInstanceInServiceListResponseBody;
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
      body: OnsInstanceInServiceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceUpdateRequest extends $tea.Model {
  instanceId?: string;
  instanceName?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      remark: 'string',
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
  statusCode: number;
  body: OnsInstanceUpdateResponseBody;
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
      body: OnsInstanceUpdateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageDetailRequest extends $tea.Model {
  instanceId?: string;
  msgId?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      msgId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageDetailResponseBody extends $tea.Model {
  data?: OnsMessageDetailResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsMessageDetailResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OnsMessageDetailResponseBody;
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
      body: OnsMessageDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByKeyRequest extends $tea.Model {
  instanceId?: string;
  key?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      key: 'Key',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      key: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByKeyResponseBody extends $tea.Model {
  data?: OnsMessageGetByKeyResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsMessageGetByKeyResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OnsMessageGetByKeyResponseBody;
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
      body: OnsMessageGetByKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByMsgIdRequest extends $tea.Model {
  instanceId?: string;
  msgId?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      msgId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByMsgIdResponseBody extends $tea.Model {
  data?: OnsMessageGetByMsgIdResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsMessageGetByMsgIdResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByMsgIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OnsMessageGetByMsgIdResponseBody;
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
      body: OnsMessageGetByMsgIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessagePageQueryByTopicRequest extends $tea.Model {
  beginTime?: number;
  currentPage?: number;
  endTime?: number;
  instanceId?: string;
  pageSize?: number;
  taskId?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      taskId: 'TaskId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      currentPage: 'number',
      endTime: 'number',
      instanceId: 'string',
      pageSize: 'number',
      taskId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessagePageQueryByTopicResponseBody extends $tea.Model {
  msgFoundDo?: OnsMessagePageQueryByTopicResponseBodyMsgFoundDo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      msgFoundDo: 'MsgFoundDo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msgFoundDo: OnsMessagePageQueryByTopicResponseBodyMsgFoundDo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessagePageQueryByTopicResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OnsMessagePageQueryByTopicResponseBody;
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
      body: OnsMessagePageQueryByTopicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessagePushRequest extends $tea.Model {
  clientId?: string;
  groupId?: string;
  instanceId?: string;
  msgId?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      groupId: 'string',
      instanceId: 'string',
      msgId: 'string',
      topic: 'string',
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
  statusCode: number;
  body: OnsMessagePushResponseBody;
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
      body: OnsMessagePushResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageTraceRequest extends $tea.Model {
  instanceId?: string;
  msgId?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      msgId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageTraceResponseBody extends $tea.Model {
  data?: OnsMessageTraceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsMessageTraceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageTraceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OnsMessageTraceResponseBody;
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
      body: OnsMessageTraceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsRegionListResponseBody extends $tea.Model {
  data?: OnsRegionListResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsRegionListResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsRegionListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OnsRegionListResponseBody;
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
      body: OnsRegionListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicCreateRequest extends $tea.Model {
  instanceId?: string;
  messageType?: number;
  remark?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      messageType: 'MessageType',
      remark: 'Remark',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      messageType: 'number',
      remark: 'string',
      topic: 'string',
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
  statusCode: number;
  body: OnsTopicCreateResponseBody;
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
      body: OnsTopicCreateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicDeleteRequest extends $tea.Model {
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
  statusCode: number;
  body: OnsTopicDeleteResponseBody;
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
      body: OnsTopicDeleteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicListRequest extends $tea.Model {
  instanceId?: string;
  tag?: OnsTopicListRequestTag[];
  topic?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tag: 'Tag',
      topic: 'Topic',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      tag: { 'type': 'array', 'itemType': OnsTopicListRequestTag },
      topic: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicListResponseBody extends $tea.Model {
  data?: OnsTopicListResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsTopicListResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OnsTopicListResponseBody;
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
      body: OnsTopicListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicStatusRequest extends $tea.Model {
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

export class OnsTopicStatusResponseBody extends $tea.Model {
  data?: OnsTopicStatusResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsTopicStatusResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OnsTopicStatusResponseBody;
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
  data?: OnsTopicSubDetailResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsTopicSubDetailResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicSubDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OnsTopicSubDetailResponseBody;
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
      body: OnsTopicSubDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicUpdateRequest extends $tea.Model {
  instanceId?: string;
  perm?: number;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      perm: 'Perm',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      perm: 'number',
      topic: 'string',
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
  statusCode: number;
  body: OnsTopicUpdateResponseBody;
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
  statusCode: number;
  body: OnsTraceGetResultResponseBody;
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
      body: OnsTraceGetResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceQueryByMsgIdRequest extends $tea.Model {
  beginTime?: number;
  endTime?: number;
  instanceId?: string;
  msgId?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      instanceId: 'string',
      msgId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceQueryByMsgIdResponseBody extends $tea.Model {
  queryId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queryId: 'QueryId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceQueryByMsgIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OnsTraceQueryByMsgIdResponseBody;
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
      body: OnsTraceQueryByMsgIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceQueryByMsgKeyRequest extends $tea.Model {
  beginTime?: number;
  endTime?: number;
  instanceId?: string;
  msgKey?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      msgKey: 'MsgKey',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      instanceId: 'string',
      msgKey: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceQueryByMsgKeyResponseBody extends $tea.Model {
  queryId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queryId: 'QueryId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceQueryByMsgKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OnsTraceQueryByMsgKeyResponseBody;
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
      body: OnsTraceQueryByMsgKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendGroupOutputTpsRequest extends $tea.Model {
  beginTime?: number;
  endTime?: number;
  groupId?: string;
  instanceId?: string;
  period?: number;
  topic?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      period: 'Period',
      topic: 'Topic',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      groupId: 'string',
      instanceId: 'string',
      period: 'number',
      topic: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendGroupOutputTpsResponseBody extends $tea.Model {
  data?: OnsTrendGroupOutputTpsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsTrendGroupOutputTpsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendGroupOutputTpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OnsTrendGroupOutputTpsResponseBody;
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
      body: OnsTrendGroupOutputTpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendTopicInputTpsRequest extends $tea.Model {
  beginTime?: number;
  endTime?: number;
  instanceId?: string;
  period?: number;
  topic?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      period: 'Period',
      topic: 'Topic',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      instanceId: 'string',
      period: 'number',
      topic: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendTopicInputTpsResponseBody extends $tea.Model {
  data?: OnsTrendTopicInputTpsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsTrendTopicInputTpsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendTopicInputTpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OnsTrendTopicInputTpsResponseBody;
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
      body: OnsTrendTopicInputTpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenOnsServiceResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenOnsServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OpenOnsServiceResponseBody;
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
      body: OpenOnsServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  instanceId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: TagResourcesResponseBody;
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
  instanceId?: string;
  resourceId?: string[];
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      instanceId: 'InstanceId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      instanceId: 'string',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UntagResourcesResponseBody;
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
  instanceId?: string;
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

export class OnsConsumerAccumulateResponseBodyDataDetailInTopicListDetailInTopicDo extends $tea.Model {
  delayTime?: number;
  lastTimestamp?: number;
  topic?: string;
  totalDiff?: number;
  static names(): { [key: string]: string } {
    return {
      delayTime: 'DelayTime',
      lastTimestamp: 'LastTimestamp',
      topic: 'Topic',
      totalDiff: 'TotalDiff',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayTime: 'number',
      lastTimestamp: 'number',
      topic: 'string',
      totalDiff: 'number',
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
  detailInTopicList?: OnsConsumerAccumulateResponseBodyDataDetailInTopicList;
  lastTimestamp?: number;
  online?: boolean;
  totalDiff?: number;
  static names(): { [key: string]: string } {
    return {
      consumeTps: 'ConsumeTps',
      delayTime: 'DelayTime',
      detailInTopicList: 'DetailInTopicList',
      lastTimestamp: 'LastTimestamp',
      online: 'Online',
      totalDiff: 'TotalDiff',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeTps: 'number',
      delayTime: 'number',
      detailInTopicList: OnsConsumerAccumulateResponseBodyDataDetailInTopicList,
      lastTimestamp: 'number',
      online: 'boolean',
      totalDiff: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerGetConnectionResponseBodyDataConnectionListConnectionDo extends $tea.Model {
  clientAddr?: string;
  clientId?: string;
  language?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientAddr: 'ClientAddr',
      clientId: 'ClientId',
      language: 'Language',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientAddr: 'string',
      clientId: 'string',
      language: 'string',
      version: 'string',
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
  clientAddr?: string;
  clientId?: string;
  language?: string;
  remoteIP?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientAddr: 'ClientAddr',
      clientId: 'ClientId',
      language: 'Language',
      remoteIP: 'RemoteIP',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientAddr: 'string',
      clientId: 'string',
      language: 'string',
      remoteIP: 'string',
      version: 'string',
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
  thread?: string;
  trackList?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstackThreadTrackDoTrackList;
  static names(): { [key: string]: string } {
    return {
      thread: 'Thread',
      trackList: 'TrackList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thread: 'string',
      trackList: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstackThreadTrackDoTrackList,
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

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoRunningDataListConsumerRunningDataDo extends $tea.Model {
  failedCountPerHour?: number;
  failedTps?: number;
  groupId?: string;
  okTps?: number;
  rt?: number;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      failedCountPerHour: 'FailedCountPerHour',
      failedTps: 'FailedTps',
      groupId: 'GroupId',
      okTps: 'OkTps',
      rt: 'Rt',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedCountPerHour: 'number',
      failedTps: 'number',
      groupId: 'string',
      okTps: 'number',
      rt: 'number',
      topic: 'string',
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
  tagsSet?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSetSubscriptionDataTagsSet;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      subString: 'SubString',
      subVersion: 'SubVersion',
      tagsSet: 'TagsSet',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subString: 'string',
      subVersion: 'number',
      tagsSet: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSetSubscriptionDataTagsSet,
      topic: 'string',
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

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDo extends $tea.Model {
  clientId?: string;
  connection?: string;
  consumeModel?: string;
  consumeType?: string;
  jstack?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstack;
  language?: string;
  lastTimeStamp?: number;
  runningDataList?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoRunningDataList;
  startTimeStamp?: number;
  subscriptionSet?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSet;
  threadCount?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      connection: 'Connection',
      consumeModel: 'ConsumeModel',
      consumeType: 'ConsumeType',
      jstack: 'Jstack',
      language: 'Language',
      lastTimeStamp: 'LastTimeStamp',
      runningDataList: 'RunningDataList',
      startTimeStamp: 'StartTimeStamp',
      subscriptionSet: 'SubscriptionSet',
      threadCount: 'ThreadCount',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      connection: 'string',
      consumeModel: 'string',
      consumeType: 'string',
      jstack: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstack,
      language: 'string',
      lastTimeStamp: 'number',
      runningDataList: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoRunningDataList,
      startTimeStamp: 'number',
      subscriptionSet: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSet,
      threadCount: 'number',
      version: 'string',
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
  lastTimestamp?: number;
  topic?: string;
  totalDiff?: number;
  static names(): { [key: string]: string } {
    return {
      delayTime: 'DelayTime',
      lastTimestamp: 'LastTimestamp',
      topic: 'Topic',
      totalDiff: 'TotalDiff',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayTime: 'number',
      lastTimestamp: 'number',
      topic: 'string',
      totalDiff: 'number',
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
  connectionSet?: OnsConsumerStatusResponseBodyDataConnectionSet;
  consumeModel?: string;
  consumeTps?: number;
  consumerConnectionInfoList?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoList;
  delayTime?: number;
  detailInTopicList?: OnsConsumerStatusResponseBodyDataDetailInTopicList;
  instanceId?: string;
  lastTimestamp?: number;
  online?: boolean;
  rebalanceOK?: boolean;
  subscriptionSame?: boolean;
  totalDiff?: number;
  static names(): { [key: string]: string } {
    return {
      connectionSet: 'ConnectionSet',
      consumeModel: 'ConsumeModel',
      consumeTps: 'ConsumeTps',
      consumerConnectionInfoList: 'ConsumerConnectionInfoList',
      delayTime: 'DelayTime',
      detailInTopicList: 'DetailInTopicList',
      instanceId: 'InstanceId',
      lastTimestamp: 'LastTimestamp',
      online: 'Online',
      rebalanceOK: 'RebalanceOK',
      subscriptionSame: 'SubscriptionSame',
      totalDiff: 'TotalDiff',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionSet: OnsConsumerStatusResponseBodyDataConnectionSet,
      consumeModel: 'string',
      consumeTps: 'number',
      consumerConnectionInfoList: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoList,
      delayTime: 'number',
      detailInTopicList: OnsConsumerStatusResponseBodyDataDetailInTopicList,
      instanceId: 'string',
      lastTimestamp: 'number',
      online: 'boolean',
      rebalanceOK: 'boolean',
      subscriptionSame: 'boolean',
      totalDiff: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerTimeSpanResponseBodyData extends $tea.Model {
  consumeTimeStamp?: number;
  instanceId?: string;
  maxTimeStamp?: number;
  minTimeStamp?: number;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      consumeTimeStamp: 'ConsumeTimeStamp',
      instanceId: 'InstanceId',
      maxTimeStamp: 'MaxTimeStamp',
      minTimeStamp: 'MinTimeStamp',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeTimeStamp: 'number',
      instanceId: 'string',
      maxTimeStamp: 'number',
      minTimeStamp: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessageGetByIdResponseBodyDataPropertyListMessageProperty extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
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
  bodyCRC?: number;
  bornHost?: string;
  bornTimestamp?: number;
  instanceId?: string;
  msgId?: string;
  propertyList?: OnsDLQMessageGetByIdResponseBodyDataPropertyList;
  reconsumeTimes?: number;
  storeHost?: string;
  storeSize?: number;
  storeTimestamp?: number;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      bodyCRC: 'BodyCRC',
      bornHost: 'BornHost',
      bornTimestamp: 'BornTimestamp',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      propertyList: 'PropertyList',
      reconsumeTimes: 'ReconsumeTimes',
      storeHost: 'StoreHost',
      storeSize: 'StoreSize',
      storeTimestamp: 'StoreTimestamp',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyCRC: 'number',
      bornHost: 'string',
      bornTimestamp: 'number',
      instanceId: 'string',
      msgId: 'string',
      propertyList: OnsDLQMessageGetByIdResponseBodyDataPropertyList,
      reconsumeTimes: 'number',
      storeHost: 'string',
      storeSize: 'number',
      storeTimestamp: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyListMessageProperty extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
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
  bodyCRC?: number;
  bornHost?: string;
  bornTimestamp?: number;
  instanceId?: string;
  msgId?: string;
  propertyList?: OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyList;
  reconsumeTimes?: number;
  storeHost?: string;
  storeSize?: number;
  storeTimestamp?: number;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      bodyCRC: 'BodyCRC',
      bornHost: 'BornHost',
      bornTimestamp: 'BornTimestamp',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      propertyList: 'PropertyList',
      reconsumeTimes: 'ReconsumeTimes',
      storeHost: 'StoreHost',
      storeSize: 'StoreSize',
      storeTimestamp: 'StoreTimestamp',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyCRC: 'number',
      bornHost: 'string',
      bornTimestamp: 'number',
      instanceId: 'string',
      msgId: 'string',
      propertyList: OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyList,
      reconsumeTimes: 'number',
      storeHost: 'string',
      storeSize: 'number',
      storeTimestamp: 'number',
      topic: 'string',
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
  maxPageCount?: number;
  msgFoundList?: OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundList;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      maxPageCount: 'MaxPageCount',
      msgFoundList: 'MsgFoundList',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      maxPageCount: 'number',
      msgFoundList: OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundList,
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
  createTime?: number;
  groupId?: string;
  groupType?: string;
  independentNaming?: boolean;
  instanceId?: string;
  owner?: string;
  remark?: string;
  tags?: OnsGroupListResponseBodyDataSubscribeInfoDoTags;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      groupId: 'GroupId',
      groupType: 'GroupType',
      independentNaming: 'IndependentNaming',
      instanceId: 'InstanceId',
      owner: 'Owner',
      remark: 'Remark',
      tags: 'Tags',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      groupId: 'string',
      groupType: 'string',
      independentNaming: 'boolean',
      instanceId: 'string',
      owner: 'string',
      remark: 'string',
      tags: OnsGroupListResponseBodyDataSubscribeInfoDoTags,
      updateTime: 'number',
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
  groupId?: string;
  messageModel?: string;
  online?: boolean;
  subscriptionDataList?: OnsGroupSubDetailResponseBodyDataSubscriptionDataList;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      messageModel: 'MessageModel',
      online: 'Online',
      subscriptionDataList: 'SubscriptionDataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      messageModel: 'string',
      online: 'boolean',
      subscriptionDataList: OnsGroupSubDetailResponseBodyDataSubscriptionDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceBaseInfoResponseBodyInstanceBaseInfoEndpoints extends $tea.Model {
  httpInternalEndpoint?: string;
  httpInternetEndpoint?: string;
  httpInternetSecureEndpoint?: string;
  tcpEndpoint?: string;
  tcpInternetEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      httpInternalEndpoint: 'HttpInternalEndpoint',
      httpInternetEndpoint: 'HttpInternetEndpoint',
      httpInternetSecureEndpoint: 'HttpInternetSecureEndpoint',
      tcpEndpoint: 'TcpEndpoint',
      tcpInternetEndpoint: 'TcpInternetEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpInternalEndpoint: 'string',
      httpInternetEndpoint: 'string',
      httpInternetSecureEndpoint: 'string',
      tcpEndpoint: 'string',
      tcpInternetEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceBaseInfoResponseBodyInstanceBaseInfo extends $tea.Model {
  createTime?: string;
  endpoints?: OnsInstanceBaseInfoResponseBodyInstanceBaseInfoEndpoints;
  independentNaming?: boolean;
  instanceId?: string;
  instanceName?: string;
  instanceStatus?: number;
  instanceType?: number;
  maxTps?: number;
  releaseTime?: number;
  remark?: string;
  topicCapacity?: number;
  spInstanceId?: string;
  spInstanceType?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endpoints: 'Endpoints',
      independentNaming: 'IndependentNaming',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      maxTps: 'MaxTps',
      releaseTime: 'ReleaseTime',
      remark: 'Remark',
      topicCapacity: 'TopicCapacity',
      spInstanceId: 'spInstanceId',
      spInstanceType: 'spInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      endpoints: OnsInstanceBaseInfoResponseBodyInstanceBaseInfoEndpoints,
      independentNaming: 'boolean',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'number',
      instanceType: 'number',
      maxTps: 'number',
      releaseTime: 'number',
      remark: 'string',
      topicCapacity: 'number',
      spInstanceId: 'string',
      spInstanceType: 'number',
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
  createTime?: number;
  groupCount?: number;
  independentNaming?: boolean;
  instanceId?: string;
  instanceName?: string;
  instanceStatus?: number;
  instanceType?: number;
  releaseTime?: number;
  tags?: OnsInstanceInServiceListResponseBodyDataInstanceVOTags;
  topicCount?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      groupCount: 'GroupCount',
      independentNaming: 'IndependentNaming',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      releaseTime: 'ReleaseTime',
      tags: 'Tags',
      topicCount: 'TopicCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      groupCount: 'number',
      independentNaming: 'boolean',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'number',
      instanceType: 'number',
      releaseTime: 'number',
      tags: OnsInstanceInServiceListResponseBodyDataInstanceVOTags,
      topicCount: 'number',
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

export class OnsMessageDetailResponseBodyDataPropertyList extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageDetailResponseBodyData extends $tea.Model {
  body?: string;
  bodyCRC?: number;
  bodyStr?: string;
  bornHost?: string;
  bornTimestamp?: number;
  instanceId?: string;
  msgId?: string;
  propertyList?: OnsMessageDetailResponseBodyDataPropertyList[];
  reconsumeTimes?: number;
  storeHost?: string;
  storeSize?: number;
  storeTimestamp?: number;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      bodyCRC: 'BodyCRC',
      bodyStr: 'BodyStr',
      bornHost: 'BornHost',
      bornTimestamp: 'BornTimestamp',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      propertyList: 'PropertyList',
      reconsumeTimes: 'ReconsumeTimes',
      storeHost: 'StoreHost',
      storeSize: 'StoreSize',
      storeTimestamp: 'StoreTimestamp',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      bodyCRC: 'number',
      bodyStr: 'string',
      bornHost: 'string',
      bornTimestamp: 'number',
      instanceId: 'string',
      msgId: 'string',
      propertyList: { 'type': 'array', 'itemType': OnsMessageDetailResponseBodyDataPropertyList },
      reconsumeTimes: 'number',
      storeHost: 'string',
      storeSize: 'number',
      storeTimestamp: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByKeyResponseBodyDataOnsRestMessageDoPropertyListMessageProperty extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
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
  bodyCRC?: number;
  bornHost?: string;
  bornTimestamp?: number;
  instanceId?: string;
  msgId?: string;
  propertyList?: OnsMessageGetByKeyResponseBodyDataOnsRestMessageDoPropertyList;
  reconsumeTimes?: number;
  storeHost?: string;
  storeSize?: number;
  storeTimestamp?: number;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      bodyCRC: 'BodyCRC',
      bornHost: 'BornHost',
      bornTimestamp: 'BornTimestamp',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      propertyList: 'PropertyList',
      reconsumeTimes: 'ReconsumeTimes',
      storeHost: 'StoreHost',
      storeSize: 'StoreSize',
      storeTimestamp: 'StoreTimestamp',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyCRC: 'number',
      bornHost: 'string',
      bornTimestamp: 'number',
      instanceId: 'string',
      msgId: 'string',
      propertyList: OnsMessageGetByKeyResponseBodyDataOnsRestMessageDoPropertyList,
      reconsumeTimes: 'number',
      storeHost: 'string',
      storeSize: 'number',
      storeTimestamp: 'number',
      topic: 'string',
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
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
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
  bodyCRC?: number;
  bornHost?: string;
  bornTimestamp?: number;
  instanceId?: string;
  msgId?: string;
  propertyList?: OnsMessageGetByMsgIdResponseBodyDataPropertyList;
  reconsumeTimes?: number;
  storeHost?: string;
  storeSize?: number;
  storeTimestamp?: number;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      bodyCRC: 'BodyCRC',
      bornHost: 'BornHost',
      bornTimestamp: 'BornTimestamp',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      propertyList: 'PropertyList',
      reconsumeTimes: 'ReconsumeTimes',
      storeHost: 'StoreHost',
      storeSize: 'StoreSize',
      storeTimestamp: 'StoreTimestamp',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyCRC: 'number',
      bornHost: 'string',
      bornTimestamp: 'number',
      instanceId: 'string',
      msgId: 'string',
      propertyList: OnsMessageGetByMsgIdResponseBodyDataPropertyList,
      reconsumeTimes: 'number',
      storeHost: 'string',
      storeSize: 'number',
      storeTimestamp: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyListMessageProperty extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
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
  bodyCRC?: number;
  bornHost?: string;
  bornTimestamp?: number;
  instanceId?: string;
  msgId?: string;
  propertyList?: OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyList;
  reconsumeTimes?: number;
  storeHost?: string;
  storeSize?: number;
  storeTimestamp?: number;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      bodyCRC: 'BodyCRC',
      bornHost: 'BornHost',
      bornTimestamp: 'BornTimestamp',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      propertyList: 'PropertyList',
      reconsumeTimes: 'ReconsumeTimes',
      storeHost: 'StoreHost',
      storeSize: 'StoreSize',
      storeTimestamp: 'StoreTimestamp',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyCRC: 'number',
      bornHost: 'string',
      bornTimestamp: 'number',
      instanceId: 'string',
      msgId: 'string',
      propertyList: OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyList,
      reconsumeTimes: 'number',
      storeHost: 'string',
      storeSize: 'number',
      storeTimestamp: 'number',
      topic: 'string',
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
  maxPageCount?: number;
  msgFoundList?: OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundList;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      maxPageCount: 'MaxPageCount',
      msgFoundList: 'MsgFoundList',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      maxPageCount: 'number',
      msgFoundList: OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundList,
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageTraceResponseBodyDataMessageTrack extends $tea.Model {
  consumerGroup?: string;
  instanceId?: string;
  trackType?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroup: 'ConsumerGroup',
      instanceId: 'InstanceId',
      trackType: 'TrackType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroup: 'string',
      instanceId: 'string',
      trackType: 'string',
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

export class OnsRegionListResponseBodyDataRegionDo extends $tea.Model {
  onsRegionId?: string;
  regionName?: string;
  static names(): { [key: string]: string } {
    return {
      onsRegionId: 'OnsRegionId',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onsRegionId: 'string',
      regionName: 'string',
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
  createTime?: number;
  independentNaming?: boolean;
  instanceId?: string;
  messageType?: number;
  owner?: string;
  relation?: number;
  relationName?: string;
  remark?: string;
  serviceStatus?: number;
  tags?: OnsTopicListResponseBodyDataPublishInfoDoTags;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      independentNaming: 'IndependentNaming',
      instanceId: 'InstanceId',
      messageType: 'MessageType',
      owner: 'Owner',
      relation: 'Relation',
      relationName: 'RelationName',
      remark: 'Remark',
      serviceStatus: 'ServiceStatus',
      tags: 'Tags',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      independentNaming: 'boolean',
      instanceId: 'string',
      messageType: 'number',
      owner: 'string',
      relation: 'number',
      relationName: 'string',
      remark: 'string',
      serviceStatus: 'number',
      tags: OnsTopicListResponseBodyDataPublishInfoDoTags,
      topic: 'string',
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
  lastTimeStamp?: number;
  perm?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      lastTimeStamp: 'LastTimeStamp',
      perm: 'Perm',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastTimeStamp: 'number',
      perm: 'number',
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
  clientHost?: string;
  costTime?: number;
  reconsumeTimes?: number;
  status?: string;
  subGroupName?: string;
  subTime?: number;
  static names(): { [key: string]: string } {
    return {
      clientHost: 'ClientHost',
      costTime: 'CostTime',
      reconsumeTimes: 'ReconsumeTimes',
      status: 'Status',
      subGroupName: 'SubGroupName',
      subTime: 'SubTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientHost: 'string',
      costTime: 'number',
      reconsumeTimes: 'number',
      status: 'string',
      subGroupName: 'string',
      subTime: 'number',
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
  bornHost?: string;
  costTime?: number;
  msgId?: string;
  msgKey?: string;
  pubGroupName?: string;
  pubTime?: number;
  status?: string;
  subList?: OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubList;
  tag?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      bornHost: 'BornHost',
      costTime: 'CostTime',
      msgId: 'MsgId',
      msgKey: 'MsgKey',
      pubGroupName: 'PubGroupName',
      pubTime: 'PubTime',
      status: 'Status',
      subList: 'SubList',
      tag: 'Tag',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bornHost: 'string',
      costTime: 'number',
      msgId: 'string',
      msgKey: 'string',
      pubGroupName: 'string',
      pubTime: 'number',
      status: 'string',
      subList: OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubList,
      tag: 'string',
      topic: 'string',
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
  createTime?: number;
  instanceId?: string;
  msgId?: string;
  msgKey?: string;
  queryId?: string;
  status?: string;
  topic?: string;
  traceList?: OnsTraceGetResultResponseBodyTraceDataTraceList;
  updateTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      msgKey: 'MsgKey',
      queryId: 'QueryId',
      status: 'Status',
      topic: 'Topic',
      traceList: 'TraceList',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      instanceId: 'string',
      msgId: 'string',
      msgKey: 'string',
      queryId: 'string',
      status: 'string',
      topic: 'string',
      traceList: OnsTraceGetResultResponseBodyTraceDataTraceList,
      updateTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendGroupOutputTpsResponseBodyDataRecordsStatsDataDo extends $tea.Model {
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
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
  title?: string;
  XUnit?: string;
  YUnit?: string;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      title: 'Title',
      XUnit: 'XUnit',
      YUnit: 'YUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: OnsTrendGroupOutputTpsResponseBodyDataRecords,
      title: 'string',
      XUnit: 'string',
      YUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendTopicInputTpsResponseBodyDataRecordsStatsDataDo extends $tea.Model {
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
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
  title?: string;
  XUnit?: string;
  YUnit?: string;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      title: 'Title',
      XUnit: 'XUnit',
      YUnit: 'YUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: OnsTrendTopicInputTpsResponseBodyDataRecords,
      title: 'string',
      XUnit: 'string',
      YUnit: 'string',
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

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * When you call the **ListTagResources** operation, specify at least one of the following parameters in the request: **Key** and **ResourceId**. You can specify a resource ID to query all tags that are attached to the specified resource. You can also specify a tag key to query the tag value and resource to which the tag is attached.
    * *   If you include the **Key** parameter in a request, you can obtain the tag value and the ID of the resource to which the tag is attached.********
    * *   If you include the **ResourceId** parameter in a request, you can obtain the keys and values of all tags that are attached to the specified resource.
    *
    * @param request ListTagResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
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
      version: "2019-02-14",
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
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * When you call the **ListTagResources** operation, specify at least one of the following parameters in the request: **Key** and **ResourceId**. You can specify a resource ID to query all tags that are attached to the specified resource. You can also specify a tag key to query the tag value and resource to which the tag is attached.
    * *   If you include the **Key** parameter in a request, you can obtain the tag value and the ID of the resource to which the tag is attached.********
    * *   If you include the **ResourceId** parameter in a request, you can obtain the keys and values of all tags that are attached to the specified resource.
    *
    * @param request ListTagResourcesRequest
    * @return ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * You can call this operation in scenarios in which you want to know the message consumption progress of a specified consumer group in production environments. You can obtain the information about message consumption and consumption latency based on the returned information. This operation returns the total number of accumulated messages in all topics to which the specified consumer group subscribes and the number of accumulated messages in each topic.
    *
    * @param request OnsConsumerAccumulateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsConsumerAccumulateResponse
   */
  async onsConsumerAccumulateWithOptions(request: OnsConsumerAccumulateRequest, runtime: $Util.RuntimeOptions): Promise<OnsConsumerAccumulateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.detail)) {
      query["Detail"] = request.detail;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsConsumerAccumulate",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsConsumerAccumulateResponse>(await this.callApi(params, req, runtime), new OnsConsumerAccumulateResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * You can call this operation in scenarios in which you want to know the message consumption progress of a specified consumer group in production environments. You can obtain the information about message consumption and consumption latency based on the returned information. This operation returns the total number of accumulated messages in all topics to which the specified consumer group subscribes and the number of accumulated messages in each topic.
    *
    * @param request OnsConsumerAccumulateRequest
    * @return OnsConsumerAccumulateResponse
   */
  async onsConsumerAccumulate(request: OnsConsumerAccumulateRequest): Promise<OnsConsumerAccumulateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsConsumerAccumulateWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * When messages are accumulated in a topic, you can call this operation to check whether a consumer is online.
    *
    * @param request OnsConsumerGetConnectionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsConsumerGetConnectionResponse
   */
  async onsConsumerGetConnectionWithOptions(request: OnsConsumerGetConnectionRequest, runtime: $Util.RuntimeOptions): Promise<OnsConsumerGetConnectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsConsumerGetConnection",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsConsumerGetConnectionResponse>(await this.callApi(params, req, runtime), new OnsConsumerGetConnectionResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * When messages are accumulated in a topic, you can call this operation to check whether a consumer is online.
    *
    * @param request OnsConsumerGetConnectionRequest
    * @return OnsConsumerGetConnectionResponse
   */
  async onsConsumerGetConnection(request: OnsConsumerGetConnectionRequest): Promise<OnsConsumerGetConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsConsumerGetConnectionWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * You can call this operation to clear accumulated messages or reset a consumer offset to a specified timestamp. You can use one of the following methods to clear accumulated messages:
    * *   Clear all accumulated messages in a specified topic.
    * *   Clear the messages that were published to the specified topic before a specified point in time.
    *
    * @param request OnsConsumerResetOffsetRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsConsumerResetOffsetResponse
   */
  async onsConsumerResetOffsetWithOptions(request: OnsConsumerResetOffsetRequest, runtime: $Util.RuntimeOptions): Promise<OnsConsumerResetOffsetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.resetTimestamp)) {
      query["ResetTimestamp"] = request.resetTimestamp;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsConsumerResetOffset",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsConsumerResetOffsetResponse>(await this.callApi(params, req, runtime), new OnsConsumerResetOffsetResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * You can call this operation to clear accumulated messages or reset a consumer offset to a specified timestamp. You can use one of the following methods to clear accumulated messages:
    * *   Clear all accumulated messages in a specified topic.
    * *   Clear the messages that were published to the specified topic before a specified point in time.
    *
    * @param request OnsConsumerResetOffsetRequest
    * @return OnsConsumerResetOffsetResponse
   */
  async onsConsumerResetOffset(request: OnsConsumerResetOffsetRequest): Promise<OnsConsumerResetOffsetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsConsumerResetOffsetWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * *   You can call this operation in scenarios in which consumers are online and messages are accumulated. You can troubleshoot errors based on the information that is returned by this operation. You can check whether all consumers in the consumer group subscribe to the same topics and tags, and whether load balancing is performed as expected. You can also obtain the information about thread stack traces of online consumers.
    * *   This operation uses multiple backend operations to query and aggregate data. The system requires a long period of time to process a request. We recommend that you do not frequently call this operation.
    *
    * @param request OnsConsumerStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsConsumerStatusResponse
   */
  async onsConsumerStatusWithOptions(request: OnsConsumerStatusRequest, runtime: $Util.RuntimeOptions): Promise<OnsConsumerStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.detail)) {
      query["Detail"] = request.detail;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.needJstack)) {
      query["NeedJstack"] = request.needJstack;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsConsumerStatus",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsConsumerStatusResponse>(await this.callApi(params, req, runtime), new OnsConsumerStatusResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * *   You can call this operation in scenarios in which consumers are online and messages are accumulated. You can troubleshoot errors based on the information that is returned by this operation. You can check whether all consumers in the consumer group subscribe to the same topics and tags, and whether load balancing is performed as expected. You can also obtain the information about thread stack traces of online consumers.
    * *   This operation uses multiple backend operations to query and aggregate data. The system requires a long period of time to process a request. We recommend that you do not frequently call this operation.
    *
    * @param request OnsConsumerStatusRequest
    * @return OnsConsumerStatusResponse
   */
  async onsConsumerStatus(request: OnsConsumerStatusRequest): Promise<OnsConsumerStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsConsumerStatusWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * You can call this operation to query the point in time when the earliest stored message was published to a specified topic and the point in time when the most recently stored message was published to the specified topic. You can also call this operation to query the most recent point in time when a message in the topic was consumed. This operation is usually used with the \\*\\*OnsConsumerAccumulate\\*\\* operation to display the overview of the consumption progress.
    *
    * @param request OnsConsumerTimeSpanRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsConsumerTimeSpanResponse
   */
  async onsConsumerTimeSpanWithOptions(request: OnsConsumerTimeSpanRequest, runtime: $Util.RuntimeOptions): Promise<OnsConsumerTimeSpanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsConsumerTimeSpan",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsConsumerTimeSpanResponse>(await this.callApi(params, req, runtime), new OnsConsumerTimeSpanResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * You can call this operation to query the point in time when the earliest stored message was published to a specified topic and the point in time when the most recently stored message was published to the specified topic. You can also call this operation to query the most recent point in time when a message in the topic was consumed. This operation is usually used with the \\*\\*OnsConsumerAccumulate\\*\\* operation to display the overview of the consumption progress.
    *
    * @param request OnsConsumerTimeSpanRequest
    * @return OnsConsumerTimeSpanResponse
   */
  async onsConsumerTimeSpan(request: OnsConsumerTimeSpanRequest): Promise<OnsConsumerTimeSpanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsConsumerTimeSpanWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * This operation uses the exact match method to query a dead-letter message based on the message ID. You can obtain the message ID that is required to query the information about a dead-letter message from the SendResult parameter that is returned after the message is sent. You can also obtain the message ID by calling the OnsDLQMessagePageQueryByGroupId operation to query multiple messages at a time. The queried information about the dead-letter message includes the point in time when the message is stored, the message body, and attributes such as the message tag and the message key.
    *
    * @param request OnsDLQMessageGetByIdRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsDLQMessageGetByIdResponse
   */
  async onsDLQMessageGetByIdWithOptions(request: OnsDLQMessageGetByIdRequest, runtime: $Util.RuntimeOptions): Promise<OnsDLQMessageGetByIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.msgId)) {
      query["MsgId"] = request.msgId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsDLQMessageGetById",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsDLQMessageGetByIdResponse>(await this.callApi(params, req, runtime), new OnsDLQMessageGetByIdResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * This operation uses the exact match method to query a dead-letter message based on the message ID. You can obtain the message ID that is required to query the information about a dead-letter message from the SendResult parameter that is returned after the message is sent. You can also obtain the message ID by calling the OnsDLQMessagePageQueryByGroupId operation to query multiple messages at a time. The queried information about the dead-letter message includes the point in time when the message is stored, the message body, and attributes such as the message tag and the message key.
    *
    * @param request OnsDLQMessageGetByIdRequest
    * @return OnsDLQMessageGetByIdResponse
   */
  async onsDLQMessageGetById(request: OnsDLQMessageGetByIdRequest): Promise<OnsDLQMessageGetByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsDLQMessageGetByIdWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * *   If you do not know the ID of the dead-letter message that you want to query, you can call this operation to query all dead-letter messages that are sent to a specified consumer group within a specified time range. The results are returned by page.
    * *   We recommend that you specify a short time range to query dead-letter messages in this method. If you specify a long time range, a large number of dead-letter messages are returned. In this case, you cannot find the dead-letter message that you want to query in an efficient manner. You can perform the following steps to query dead-letter messages:
    *     1.  Perform a paged query by specifying the group ID, start time, end time, and number of entries to return on each page. If matched messages are found, the information about the dead-letter messages on the first page, total number of pages, and task ID are returned by default.
    *     2.  Specify the task ID and a page number to call this operation again to query the dead-letter messages on the specified page. In this query, the BeginTime, EndTime, and PageSize parameters do not take effect. By default, the system uses the values of these parameters that you specified in the request when you created the specified query task.
    *
    * @param request OnsDLQMessagePageQueryByGroupIdRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsDLQMessagePageQueryByGroupIdResponse
   */
  async onsDLQMessagePageQueryByGroupIdWithOptions(request: OnsDLQMessagePageQueryByGroupIdRequest, runtime: $Util.RuntimeOptions): Promise<OnsDLQMessagePageQueryByGroupIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsDLQMessagePageQueryByGroupId",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsDLQMessagePageQueryByGroupIdResponse>(await this.callApi(params, req, runtime), new OnsDLQMessagePageQueryByGroupIdResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * *   If you do not know the ID of the dead-letter message that you want to query, you can call this operation to query all dead-letter messages that are sent to a specified consumer group within a specified time range. The results are returned by page.
    * *   We recommend that you specify a short time range to query dead-letter messages in this method. If you specify a long time range, a large number of dead-letter messages are returned. In this case, you cannot find the dead-letter message that you want to query in an efficient manner. You can perform the following steps to query dead-letter messages:
    *     1.  Perform a paged query by specifying the group ID, start time, end time, and number of entries to return on each page. If matched messages are found, the information about the dead-letter messages on the first page, total number of pages, and task ID are returned by default.
    *     2.  Specify the task ID and a page number to call this operation again to query the dead-letter messages on the specified page. In this query, the BeginTime, EndTime, and PageSize parameters do not take effect. By default, the system uses the values of these parameters that you specified in the request when you created the specified query task.
    *
    * @param request OnsDLQMessagePageQueryByGroupIdRequest
    * @return OnsDLQMessagePageQueryByGroupIdResponse
   */
  async onsDLQMessagePageQueryByGroupId(request: OnsDLQMessagePageQueryByGroupIdRequest): Promise<OnsDLQMessagePageQueryByGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsDLQMessagePageQueryByGroupIdWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * *   A dead-letter message is a message that still fails to be consumed after the number of consumption retries reaches the upper limit. If the message still cannot be consumed after you re-send it, a message with the same message ID is added to the corresponding dead-letter queue. You can query the message ID on the Dead-letter Queues page in the ApsaraMQ for RocketMQ console or by calling API operations. You can obtain the number of consumption failures for a message based on the number of dead-letter messages with the same message ID in the dead-letter queue.
    * *   A dead-letter message is a message that fails to be consumed after the number of consumption retries reaches the upper limit. Generally, dead-letter messages are produced because of incorrect consumption logic. We recommend that you troubleshoot the consumption failures and then call this operation to send the message to the consumer group for consumption again.
    * *   ApsaraMQ for RocketMQ does not manage the status of dead-letter messages based on the consumption status of the dead-letter messages. After you call this operation to send a dead-letter message to a consumer group and the message is consumed, ApsaraMQ for RocketMQ does not remove the dead-letter message from the dead-letter queue. You must manage dead-letter messages and determine whether to send a dead-letter message to a consumer group for consumption. This way, you do not resend or reconsume the messages that are consumed.
    *
    * @param request OnsDLQMessageResendByIdRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsDLQMessageResendByIdResponse
   */
  async onsDLQMessageResendByIdWithOptions(request: OnsDLQMessageResendByIdRequest, runtime: $Util.RuntimeOptions): Promise<OnsDLQMessageResendByIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.msgId)) {
      query["MsgId"] = request.msgId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsDLQMessageResendById",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsDLQMessageResendByIdResponse>(await this.callApi(params, req, runtime), new OnsDLQMessageResendByIdResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * *   A dead-letter message is a message that still fails to be consumed after the number of consumption retries reaches the upper limit. If the message still cannot be consumed after you re-send it, a message with the same message ID is added to the corresponding dead-letter queue. You can query the message ID on the Dead-letter Queues page in the ApsaraMQ for RocketMQ console or by calling API operations. You can obtain the number of consumption failures for a message based on the number of dead-letter messages with the same message ID in the dead-letter queue.
    * *   A dead-letter message is a message that fails to be consumed after the number of consumption retries reaches the upper limit. Generally, dead-letter messages are produced because of incorrect consumption logic. We recommend that you troubleshoot the consumption failures and then call this operation to send the message to the consumer group for consumption again.
    * *   ApsaraMQ for RocketMQ does not manage the status of dead-letter messages based on the consumption status of the dead-letter messages. After you call this operation to send a dead-letter message to a consumer group and the message is consumed, ApsaraMQ for RocketMQ does not remove the dead-letter message from the dead-letter queue. You must manage dead-letter messages and determine whether to send a dead-letter message to a consumer group for consumption. This way, you do not resend or reconsume the messages that are consumed.
    *
    * @param request OnsDLQMessageResendByIdRequest
    * @return OnsDLQMessageResendByIdResponse
   */
  async onsDLQMessageResendById(request: OnsDLQMessageResendByIdRequest): Promise<OnsDLQMessageResendByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsDLQMessageResendByIdWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * You can call this operation to configure the permissions for a consumer group to read messages based on a specified region of ApsaraMQ for RocketMQ and a specified group ID. You can call this operation in scenarios in which you want to forbid consumers in a specific group from reading messages.
    *
    * @param request OnsGroupConsumerUpdateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsGroupConsumerUpdateResponse
   */
  async onsGroupConsumerUpdateWithOptions(request: OnsGroupConsumerUpdateRequest, runtime: $Util.RuntimeOptions): Promise<OnsGroupConsumerUpdateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.readEnable)) {
      query["ReadEnable"] = request.readEnable;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsGroupConsumerUpdate",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsGroupConsumerUpdateResponse>(await this.callApi(params, req, runtime), new OnsGroupConsumerUpdateResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * You can call this operation to configure the permissions for a consumer group to read messages based on a specified region of ApsaraMQ for RocketMQ and a specified group ID. You can call this operation in scenarios in which you want to forbid consumers in a specific group from reading messages.
    *
    * @param request OnsGroupConsumerUpdateRequest
    * @return OnsGroupConsumerUpdateResponse
   */
  async onsGroupConsumerUpdate(request: OnsGroupConsumerUpdateRequest): Promise<OnsGroupConsumerUpdateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsGroupConsumerUpdateWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * When you release a new application or implement new business logic, you need new consumer groups. You can call this operation to create a consumer group.
    *
    * @param request OnsGroupCreateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsGroupCreateResponse
   */
  async onsGroupCreateWithOptions(request: OnsGroupCreateRequest, runtime: $Util.RuntimeOptions): Promise<OnsGroupCreateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsGroupCreate",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsGroupCreateResponse>(await this.callApi(params, req, runtime), new OnsGroupCreateResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * When you release a new application or implement new business logic, you need new consumer groups. You can call this operation to create a consumer group.
    *
    * @param request OnsGroupCreateRequest
    * @return OnsGroupCreateResponse
   */
  async onsGroupCreate(request: OnsGroupCreateRequest): Promise<OnsGroupCreateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsGroupCreateWithOptions(request, runtime);
  }

  /**
    * > 
    * *   API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * *   After you delete a group, the consumers in the group immediately stop receiving messages. Exercise caution when you call this operation.
    * You can call this operation to delete a group when you need to reclaim the resources of the group. For example, after an application is brought offline, you can delete the groups that are used for the application. After you delete a group, the backend of ApsaraMQ for RocketMQ reclaims the resources of the group. The system requires a long period of time to reclaim the resources. We recommend that you do not create a group that uses the same name as a deleted group immediately after you delete the group. If the system fails to delete the specified group, troubleshoot the issue based on the error code.
    *
    * @param request OnsGroupDeleteRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsGroupDeleteResponse
   */
  async onsGroupDeleteWithOptions(request: OnsGroupDeleteRequest, runtime: $Util.RuntimeOptions): Promise<OnsGroupDeleteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsGroupDelete",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsGroupDeleteResponse>(await this.callApi(params, req, runtime), new OnsGroupDeleteResponse({}));
  }

  /**
    * > 
    * *   API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * *   After you delete a group, the consumers in the group immediately stop receiving messages. Exercise caution when you call this operation.
    * You can call this operation to delete a group when you need to reclaim the resources of the group. For example, after an application is brought offline, you can delete the groups that are used for the application. After you delete a group, the backend of ApsaraMQ for RocketMQ reclaims the resources of the group. The system requires a long period of time to reclaim the resources. We recommend that you do not create a group that uses the same name as a deleted group immediately after you delete the group. If the system fails to delete the specified group, troubleshoot the issue based on the error code.
    *
    * @param request OnsGroupDeleteRequest
    * @return OnsGroupDeleteResponse
   */
  async onsGroupDelete(request: OnsGroupDeleteRequest): Promise<OnsGroupDeleteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsGroupDeleteWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    *
    * @param request OnsGroupListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsGroupListResponse
   */
  async onsGroupListWithOptions(request: OnsGroupListRequest, runtime: $Util.RuntimeOptions): Promise<OnsGroupListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsGroupList",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsGroupListResponse>(await this.callApi(params, req, runtime), new OnsGroupListResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    *
    * @param request OnsGroupListRequest
    * @return OnsGroupListResponse
   */
  async onsGroupList(request: OnsGroupListRequest): Promise<OnsGroupListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsGroupListWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    *
    * @param request OnsGroupSubDetailRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsGroupSubDetailResponse
   */
  async onsGroupSubDetailWithOptions(request: OnsGroupSubDetailRequest, runtime: $Util.RuntimeOptions): Promise<OnsGroupSubDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsGroupSubDetail",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsGroupSubDetailResponse>(await this.callApi(params, req, runtime), new OnsGroupSubDetailResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    *
    * @param request OnsGroupSubDetailRequest
    * @return OnsGroupSubDetailResponse
   */
  async onsGroupSubDetail(request: OnsGroupSubDetailRequest): Promise<OnsGroupSubDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsGroupSubDetailWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * To send and receive messages, a client must be connected to a ApsaraMQ for RocketMQ instance by using an endpoint. You can call this operation to query the endpoints of the instance.
    *
    * @param request OnsInstanceBaseInfoRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsInstanceBaseInfoResponse
   */
  async onsInstanceBaseInfoWithOptions(request: OnsInstanceBaseInfoRequest, runtime: $Util.RuntimeOptions): Promise<OnsInstanceBaseInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsInstanceBaseInfo",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsInstanceBaseInfoResponse>(await this.callApi(params, req, runtime), new OnsInstanceBaseInfoResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * To send and receive messages, a client must be connected to a ApsaraMQ for RocketMQ instance by using an endpoint. You can call this operation to query the endpoints of the instance.
    *
    * @param request OnsInstanceBaseInfoRequest
    * @return OnsInstanceBaseInfoResponse
   */
  async onsInstanceBaseInfo(request: OnsInstanceBaseInfoRequest): Promise<OnsInstanceBaseInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsInstanceBaseInfoWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * An instance is a virtual machine (VM) that can be used to store information about the topics and groups of ApsaraMQ for RocketMQ. You can call this operation when you need to create service resources for the business that you want to launch. Before you call this operation, take note of the following limits:
    * *   A maximum of eight ApsaraMQ for RocketMQ instances can be deployed in each region.
    * *   This operation can be called to create only a Standard Edition instance. You can use the ApsaraMQ for RocketMQ console to create Standard Edition instances and Enterprise Platinum Edition instances. For information about how to create ApsaraMQ for RocketMQ instances, see [Manage instances](~~200153~~).
    *
    * @param request OnsInstanceCreateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsInstanceCreateResponse
   */
  async onsInstanceCreateWithOptions(request: OnsInstanceCreateRequest, runtime: $Util.RuntimeOptions): Promise<OnsInstanceCreateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsInstanceCreate",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsInstanceCreateResponse>(await this.callApi(params, req, runtime), new OnsInstanceCreateResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * An instance is a virtual machine (VM) that can be used to store information about the topics and groups of ApsaraMQ for RocketMQ. You can call this operation when you need to create service resources for the business that you want to launch. Before you call this operation, take note of the following limits:
    * *   A maximum of eight ApsaraMQ for RocketMQ instances can be deployed in each region.
    * *   This operation can be called to create only a Standard Edition instance. You can use the ApsaraMQ for RocketMQ console to create Standard Edition instances and Enterprise Platinum Edition instances. For information about how to create ApsaraMQ for RocketMQ instances, see [Manage instances](~~200153~~).
    *
    * @param request OnsInstanceCreateRequest
    * @return OnsInstanceCreateResponse
   */
  async onsInstanceCreate(request: OnsInstanceCreateRequest): Promise<OnsInstanceCreateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsInstanceCreateWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * *   You can call this operation when you need to reclaim resources. For example, after you unpublish an application, you can reclaim the resources that were used for the application. An instance can be deleted only when the instance does not contain topics and groups.
    * *   After an instance is deleted, the instance cannot be restored. Exercise caution when you call this operation.
    *
    * @param request OnsInstanceDeleteRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsInstanceDeleteResponse
   */
  async onsInstanceDeleteWithOptions(request: OnsInstanceDeleteRequest, runtime: $Util.RuntimeOptions): Promise<OnsInstanceDeleteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsInstanceDelete",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsInstanceDeleteResponse>(await this.callApi(params, req, runtime), new OnsInstanceDeleteResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * *   You can call this operation when you need to reclaim resources. For example, after you unpublish an application, you can reclaim the resources that were used for the application. An instance can be deleted only when the instance does not contain topics and groups.
    * *   After an instance is deleted, the instance cannot be restored. Exercise caution when you call this operation.
    *
    * @param request OnsInstanceDeleteRequest
    * @return OnsInstanceDeleteResponse
   */
  async onsInstanceDelete(request: OnsInstanceDeleteRequest): Promise<OnsInstanceDeleteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsInstanceDeleteWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    *
    * @param request OnsInstanceInServiceListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsInstanceInServiceListResponse
   */
  async onsInstanceInServiceListWithOptions(request: OnsInstanceInServiceListRequest, runtime: $Util.RuntimeOptions): Promise<OnsInstanceInServiceListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.needResourceInfo)) {
      query["NeedResourceInfo"] = request.needResourceInfo;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsInstanceInServiceList",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsInstanceInServiceListResponse>(await this.callApi(params, req, runtime), new OnsInstanceInServiceListResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    *
    * @param request OnsInstanceInServiceListRequest
    * @return OnsInstanceInServiceListResponse
   */
  async onsInstanceInServiceList(request: OnsInstanceInServiceListRequest): Promise<OnsInstanceInServiceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsInstanceInServiceListWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * A maximum of eight ApsaraMQ for RocketMQ instances can be deployed in each region.
    *
    * @param request OnsInstanceUpdateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsInstanceUpdateResponse
   */
  async onsInstanceUpdateWithOptions(request: OnsInstanceUpdateRequest, runtime: $Util.RuntimeOptions): Promise<OnsInstanceUpdateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsInstanceUpdate",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsInstanceUpdateResponse>(await this.callApi(params, req, runtime), new OnsInstanceUpdateResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * A maximum of eight ApsaraMQ for RocketMQ instances can be deployed in each region.
    *
    * @param request OnsInstanceUpdateRequest
    * @return OnsInstanceUpdateResponse
   */
  async onsInstanceUpdate(request: OnsInstanceUpdateRequest): Promise<OnsInstanceUpdateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsInstanceUpdateWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    *
    * @param request OnsMessageDetailRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsMessageDetailResponse
   */
  async onsMessageDetailWithOptions(request: OnsMessageDetailRequest, runtime: $Util.RuntimeOptions): Promise<OnsMessageDetailResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsMessageDetail",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsMessageDetailResponse>(await this.callApi(params, req, runtime), new OnsMessageDetailResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    *
    * @param request OnsMessageDetailRequest
    * @return OnsMessageDetailResponse
   */
  async onsMessageDetail(request: OnsMessageDetailRequest): Promise<OnsMessageDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsMessageDetailWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * *   This operation uses the fuzzy match method to query messages based on a specified message key. The same message key may be used by multiple messages. Therefore, the returned result may contain information about multiple messages.
    * *   This operation can be used in scenarios in which you cannot obtain the IDs of the messages that you want to query. You can perform the following steps to query the information about messages:
    *     1.  Call this operation to query message IDs.
    *     2.  Call the **OnsMessageGetByMsgId** operation that uses the exact match method to query the details of a specified message. For more information about the **OnsMessageGetByMsgId** operation, see [OnsMessageGetByMsgId](~~29607~~).
    *
    * @param request OnsMessageGetByKeyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsMessageGetByKeyResponse
   */
  async onsMessageGetByKeyWithOptions(request: OnsMessageGetByKeyRequest, runtime: $Util.RuntimeOptions): Promise<OnsMessageGetByKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsMessageGetByKey",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsMessageGetByKeyResponse>(await this.callApi(params, req, runtime), new OnsMessageGetByKeyResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * *   This operation uses the fuzzy match method to query messages based on a specified message key. The same message key may be used by multiple messages. Therefore, the returned result may contain information about multiple messages.
    * *   This operation can be used in scenarios in which you cannot obtain the IDs of the messages that you want to query. You can perform the following steps to query the information about messages:
    *     1.  Call this operation to query message IDs.
    *     2.  Call the **OnsMessageGetByMsgId** operation that uses the exact match method to query the details of a specified message. For more information about the **OnsMessageGetByMsgId** operation, see [OnsMessageGetByMsgId](~~29607~~).
    *
    * @param request OnsMessageGetByKeyRequest
    * @return OnsMessageGetByKeyResponse
   */
  async onsMessageGetByKey(request: OnsMessageGetByKeyRequest): Promise<OnsMessageGetByKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsMessageGetByKeyWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * *   If a message is not consumed as expected, you can call this operation to query the information about the message for troubleshooting.
    * *   This operation uses the exact match method to query a message based on the message ID. You can obtain the message ID from the SendResult parameter that is returned after the message is sent. You must store the returned information after each message is sent. The queried information about a message includes the point in time when the message was sent, the broker on which the message is stored, and the attributes of the message such as the message key and tag.
    *
    * @param request OnsMessageGetByMsgIdRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsMessageGetByMsgIdResponse
   */
  async onsMessageGetByMsgIdWithOptions(request: OnsMessageGetByMsgIdRequest, runtime: $Util.RuntimeOptions): Promise<OnsMessageGetByMsgIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.msgId)) {
      query["MsgId"] = request.msgId;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsMessageGetByMsgId",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsMessageGetByMsgIdResponse>(await this.callApi(params, req, runtime), new OnsMessageGetByMsgIdResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * *   If a message is not consumed as expected, you can call this operation to query the information about the message for troubleshooting.
    * *   This operation uses the exact match method to query a message based on the message ID. You can obtain the message ID from the SendResult parameter that is returned after the message is sent. You must store the returned information after each message is sent. The queried information about a message includes the point in time when the message was sent, the broker on which the message is stored, and the attributes of the message such as the message key and tag.
    *
    * @param request OnsMessageGetByMsgIdRequest
    * @return OnsMessageGetByMsgIdResponse
   */
  async onsMessageGetByMsgId(request: OnsMessageGetByMsgIdRequest): Promise<OnsMessageGetByMsgIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsMessageGetByMsgIdWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * *   If you do not know the ID or key of a message that you want to query, you can call this operation to query all messages that are stored in the topic within a specified time range. The results are displayed by page.
    * *   We recommend that you specify a short time range to query messages. If you specify a long time range, a large number of messages are returned. In this case, you cannot find the message that you want to query in an efficient manner. You can perform the following steps to query messages:
    *     1.  Perform a paged query by specifying the topic, start time, end time, and number of entries to return on each page. If the topic contains messages, the information about the messages on the first page, total number of pages, and task ID are returned by default.
    *     2.  Specify the task ID and a page number to call this operation again to query the messages on the specified page. The BeginTime, EndTime, and PageSize parameters do not take effect. By default, the system uses the values of these parameters that you specified in the request when you created the specified query task.
    *
    * @param request OnsMessagePageQueryByTopicRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsMessagePageQueryByTopicResponse
   */
  async onsMessagePageQueryByTopicWithOptions(request: OnsMessagePageQueryByTopicRequest, runtime: $Util.RuntimeOptions): Promise<OnsMessagePageQueryByTopicResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsMessagePageQueryByTopic",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsMessagePageQueryByTopicResponse>(await this.callApi(params, req, runtime), new OnsMessagePageQueryByTopicResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * *   If you do not know the ID or key of a message that you want to query, you can call this operation to query all messages that are stored in the topic within a specified time range. The results are displayed by page.
    * *   We recommend that you specify a short time range to query messages. If you specify a long time range, a large number of messages are returned. In this case, you cannot find the message that you want to query in an efficient manner. You can perform the following steps to query messages:
    *     1.  Perform a paged query by specifying the topic, start time, end time, and number of entries to return on each page. If the topic contains messages, the information about the messages on the first page, total number of pages, and task ID are returned by default.
    *     2.  Specify the task ID and a page number to call this operation again to query the messages on the specified page. The BeginTime, EndTime, and PageSize parameters do not take effect. By default, the system uses the values of these parameters that you specified in the request when you created the specified query task.
    *
    * @param request OnsMessagePageQueryByTopicRequest
    * @return OnsMessagePageQueryByTopicResponse
   */
  async onsMessagePageQueryByTopic(request: OnsMessagePageQueryByTopicRequest): Promise<OnsMessagePageQueryByTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsMessagePageQueryByTopicWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * This operation can be used to check whether messages in a specified topic can be consumed by consumers in a specified consumer group. This operation obtains the body of the message that is specified by the MsgId parameter, re-encapsulates the message body to produce a new message, and then pushes the new message to a specified consumer. The content of the message that is sent to the consumer is the same as the content of the original message. They are not the same message because they use different message IDs.
    *
    * @param request OnsMessagePushRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsMessagePushResponse
   */
  async onsMessagePushWithOptions(request: OnsMessagePushRequest, runtime: $Util.RuntimeOptions): Promise<OnsMessagePushResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.msgId)) {
      query["MsgId"] = request.msgId;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsMessagePush",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsMessagePushResponse>(await this.callApi(params, req, runtime), new OnsMessagePushResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * This operation can be used to check whether messages in a specified topic can be consumed by consumers in a specified consumer group. This operation obtains the body of the message that is specified by the MsgId parameter, re-encapsulates the message body to produce a new message, and then pushes the new message to a specified consumer. The content of the message that is sent to the consumer is the same as the content of the original message. They are not the same message because they use different message IDs.
    *
    * @param request OnsMessagePushRequest
    * @return OnsMessagePushResponse
   */
  async onsMessagePush(request: OnsMessagePushRequest): Promise<OnsMessagePushResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsMessagePushWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * *   You can call this operation to check whether a specified message is consumed. If the message is not consumed, you can troubleshoot the issue based on the returned information.
    * *   This operation queries information based on the built-in offset mechanism of ApsaraMQ for RocketMQ. In most cases, the results are correct. If you have reset the consumer offset or cleared accumulated messages, the results may not be correct.
    *
    * @param request OnsMessageTraceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsMessageTraceResponse
   */
  async onsMessageTraceWithOptions(request: OnsMessageTraceRequest, runtime: $Util.RuntimeOptions): Promise<OnsMessageTraceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.msgId)) {
      query["MsgId"] = request.msgId;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsMessageTrace",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsMessageTraceResponse>(await this.callApi(params, req, runtime), new OnsMessageTraceResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * *   You can call this operation to check whether a specified message is consumed. If the message is not consumed, you can troubleshoot the issue based on the returned information.
    * *   This operation queries information based on the built-in offset mechanism of ApsaraMQ for RocketMQ. In most cases, the results are correct. If you have reset the consumer offset or cleared accumulated messages, the results may not be correct.
    *
    * @param request OnsMessageTraceRequest
    * @return OnsMessageTraceResponse
   */
  async onsMessageTrace(request: OnsMessageTraceRequest): Promise<OnsMessageTraceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsMessageTraceWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * When you use an SDK to access and manage a ApsaraMQ for RocketMQ instance, you must sequentially specify the information about two regions. You can query the information about the second region by calling the OnsRegionList operation. You must apply for a public endpoint in the following scenarios:
    * *   Connect your application to ApsaraMQ for RocketMQ: Select the nearest API gateway endpoint based on the region where your application is deployed, and enter the corresponding **region ID**. The **regionId** is used to access Alibaba Cloud API Gateway because ApsaraMQ for RocketMQ instances provide API services by using the OpenAPI Explorer platform, which is also called POP.
    * *   Access a region to manage its resources: Specify a region where you want to manage ApsaraMQ for RocketMQ resources and enter the region ID. You can call the **OnsRegionList** operation to query a region ID.
    *
    * @param request OnsRegionListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsRegionListResponse
   */
  async onsRegionListWithOptions(runtime: $Util.RuntimeOptions): Promise<OnsRegionListResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "OnsRegionList",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsRegionListResponse>(await this.callApi(params, req, runtime), new OnsRegionListResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * When you use an SDK to access and manage a ApsaraMQ for RocketMQ instance, you must sequentially specify the information about two regions. You can query the information about the second region by calling the OnsRegionList operation. You must apply for a public endpoint in the following scenarios:
    * *   Connect your application to ApsaraMQ for RocketMQ: Select the nearest API gateway endpoint based on the region where your application is deployed, and enter the corresponding **region ID**. The **regionId** is used to access Alibaba Cloud API Gateway because ApsaraMQ for RocketMQ instances provide API services by using the OpenAPI Explorer platform, which is also called POP.
    * *   Access a region to manage its resources: Specify a region where you want to manage ApsaraMQ for RocketMQ resources and enter the region ID. You can call the **OnsRegionList** operation to query a region ID.
    *
    * @return OnsRegionListResponse
   */
  async onsRegionList(): Promise<OnsRegionListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsRegionListWithOptions(runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * When you want to release a new application or expand your business, you can call this operation to create a topic based on your business requirements.
    *
    * @param request OnsTopicCreateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsTopicCreateResponse
   */
  async onsTopicCreateWithOptions(request: OnsTopicCreateRequest, runtime: $Util.RuntimeOptions): Promise<OnsTopicCreateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.messageType)) {
      query["MessageType"] = request.messageType;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsTopicCreate",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsTopicCreateResponse>(await this.callApi(params, req, runtime), new OnsTopicCreateResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * When you want to release a new application or expand your business, you can call this operation to create a topic based on your business requirements.
    *
    * @param request OnsTopicCreateRequest
    * @return OnsTopicCreateResponse
   */
  async onsTopicCreate(request: OnsTopicCreateRequest): Promise<OnsTopicCreateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTopicCreateWithOptions(request, runtime);
  }

  /**
    * >  API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur. - After you delete the topic, the publishing and subscription relationships that are constructed based on the topic are cleared. Exercise caution when you call this operation.
    * You can call this operation to delete a topic when you need to reclaim the resources from the topic. For example, after an application is brought offline, you can delete the topics that are used for the application. After you delete a topic, the backend of ApsaraMQ for RocketMQ reclaims the resources from the topic. The system requires a long period of time to reclaim the resources. After you delete a topic, we recommend that you do not create a topic that uses the same name as the deleted topic within a short period of time. If the system fails to delete the specified topic, troubleshoot the issue based on the error code.
    *
    * @param request OnsTopicDeleteRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsTopicDeleteResponse
   */
  async onsTopicDeleteWithOptions(request: OnsTopicDeleteRequest, runtime: $Util.RuntimeOptions): Promise<OnsTopicDeleteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsTopicDelete",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsTopicDeleteResponse>(await this.callApi(params, req, runtime), new OnsTopicDeleteResponse({}));
  }

  /**
    * >  API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur. - After you delete the topic, the publishing and subscription relationships that are constructed based on the topic are cleared. Exercise caution when you call this operation.
    * You can call this operation to delete a topic when you need to reclaim the resources from the topic. For example, after an application is brought offline, you can delete the topics that are used for the application. After you delete a topic, the backend of ApsaraMQ for RocketMQ reclaims the resources from the topic. The system requires a long period of time to reclaim the resources. After you delete a topic, we recommend that you do not create a topic that uses the same name as the deleted topic within a short period of time. If the system fails to delete the specified topic, troubleshoot the issue based on the error code.
    *
    * @param request OnsTopicDeleteRequest
    * @return OnsTopicDeleteResponse
   */
  async onsTopicDelete(request: OnsTopicDeleteRequest): Promise<OnsTopicDeleteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTopicDeleteWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * This operation returns the basic information about topics and does not return the details of topics.
    *
    * @param request OnsTopicListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsTopicListResponse
   */
  async onsTopicListWithOptions(request: OnsTopicListRequest, runtime: $Util.RuntimeOptions): Promise<OnsTopicListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsTopicList",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsTopicListResponse>(await this.callApi(params, req, runtime), new OnsTopicListResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * This operation returns the basic information about topics and does not return the details of topics.
    *
    * @param request OnsTopicListRequest
    * @return OnsTopicListResponse
   */
  async onsTopicList(request: OnsTopicListRequest): Promise<OnsTopicListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTopicListWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * You can determine the resource usage of a topic based on the information that is returned by this operation. The returned information includes the total number of messages in the topic and the most recent point in time when a message was published to the topic.
    *
    * @param request OnsTopicStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsTopicStatusResponse
   */
  async onsTopicStatusWithOptions(request: OnsTopicStatusRequest, runtime: $Util.RuntimeOptions): Promise<OnsTopicStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsTopicStatus",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsTopicStatusResponse>(await this.callApi(params, req, runtime), new OnsTopicStatusResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * You can determine the resource usage of a topic based on the information that is returned by this operation. The returned information includes the total number of messages in the topic and the most recent point in time when a message was published to the topic.
    *
    * @param request OnsTopicStatusRequest
    * @return OnsTopicStatusResponse
   */
  async onsTopicStatus(request: OnsTopicStatusRequest): Promise<OnsTopicStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTopicStatusWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * You can call this operation to query the online consumer groups that subscribe to a specified topic. If all consumers in a group are offline, the information about the group is not returned.
    *
    * @param request OnsTopicSubDetailRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsTopicSubDetailResponse
   */
  async onsTopicSubDetailWithOptions(request: OnsTopicSubDetailRequest, runtime: $Util.RuntimeOptions): Promise<OnsTopicSubDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsTopicSubDetail",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsTopicSubDetailResponse>(await this.callApi(params, req, runtime), new OnsTopicSubDetailResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * You can call this operation to query the online consumer groups that subscribe to a specified topic. If all consumers in a group are offline, the information about the group is not returned.
    *
    * @param request OnsTopicSubDetailRequest
    * @return OnsTopicSubDetailResponse
   */
  async onsTopicSubDetail(request: OnsTopicSubDetailRequest): Promise<OnsTopicSubDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTopicSubDetailWithOptions(request, runtime);
  }

  /**
    * @deprecated
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * You can call this operation to forbid read or write operations on a specific topic.
    *
    * @param request OnsTopicUpdateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsTopicUpdateResponse
   */
  // Deprecated
  async onsTopicUpdateWithOptions(request: OnsTopicUpdateRequest, runtime: $Util.RuntimeOptions): Promise<OnsTopicUpdateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.perm)) {
      query["Perm"] = request.perm;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsTopicUpdate",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsTopicUpdateResponse>(await this.callApi(params, req, runtime), new OnsTopicUpdateResponse({}));
  }

  /**
    * @deprecated
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * You can call this operation to forbid read or write operations on a specific topic.
    *
    * @param request OnsTopicUpdateRequest
    * @return OnsTopicUpdateResponse
   */
  // Deprecated
  async onsTopicUpdate(request: OnsTopicUpdateRequest): Promise<OnsTopicUpdateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTopicUpdateWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * *   Before you call this operation to query the details of the trace of a message, you must create a task to query the trace of the message based on the message ID or message key and obtain the task ID. Then, you can call this operation to query the details of the message trace based on the task ID. You can call the [OnsTraceQueryByMsgId](~~445322~~) operation or the [OnsTraceQueryByMsgKey](~~445324~~) operation to create a task to query the trace of the message and obtain the task ID from the **QueryId** response parameter.
    * *   A trace query task is time-consuming. If you call this operation to query the details immediately after you create a trace query task, the results may be empty. In this case, we recommend that you try again later.
    *
    * @param request OnsTraceGetResultRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsTraceGetResultResponse
   */
  async onsTraceGetResultWithOptions(request: OnsTraceGetResultRequest, runtime: $Util.RuntimeOptions): Promise<OnsTraceGetResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.queryId)) {
      query["QueryId"] = request.queryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsTraceGetResult",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsTraceGetResultResponse>(await this.callApi(params, req, runtime), new OnsTraceGetResultResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * *   Before you call this operation to query the details of the trace of a message, you must create a task to query the trace of the message based on the message ID or message key and obtain the task ID. Then, you can call this operation to query the details of the message trace based on the task ID. You can call the [OnsTraceQueryByMsgId](~~445322~~) operation or the [OnsTraceQueryByMsgKey](~~445324~~) operation to create a task to query the trace of the message and obtain the task ID from the **QueryId** response parameter.
    * *   A trace query task is time-consuming. If you call this operation to query the details immediately after you create a trace query task, the results may be empty. In this case, we recommend that you try again later.
    *
    * @param request OnsTraceGetResultRequest
    * @return OnsTraceGetResultResponse
   */
  async onsTraceGetResult(request: OnsTraceGetResultRequest): Promise<OnsTraceGetResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTraceGetResultWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * If you want to query the trace of a message based on the message ID, you can call this operation to create a query task. After you obtain the task ID, you can call the [OnsTraceGetResult](~~59832~~) operation to query the details of the message trace based on the task ID.
    *
    * @param request OnsTraceQueryByMsgIdRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsTraceQueryByMsgIdResponse
   */
  async onsTraceQueryByMsgIdWithOptions(request: OnsTraceQueryByMsgIdRequest, runtime: $Util.RuntimeOptions): Promise<OnsTraceQueryByMsgIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.msgId)) {
      query["MsgId"] = request.msgId;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsTraceQueryByMsgId",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsTraceQueryByMsgIdResponse>(await this.callApi(params, req, runtime), new OnsTraceQueryByMsgIdResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * If you want to query the trace of a message based on the message ID, you can call this operation to create a query task. After you obtain the task ID, you can call the [OnsTraceGetResult](~~59832~~) operation to query the details of the message trace based on the task ID.
    *
    * @param request OnsTraceQueryByMsgIdRequest
    * @return OnsTraceQueryByMsgIdResponse
   */
  async onsTraceQueryByMsgId(request: OnsTraceQueryByMsgIdRequest): Promise<OnsTraceQueryByMsgIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTraceQueryByMsgIdWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * If you want to query the trace of a message based on the message key that you obtained, you can call this operation to create a query task. After you obtain the task ID, you can call the OnsTraceGetResult operation to query the details of the message trace based on the task ID.
    *
    * @param request OnsTraceQueryByMsgKeyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsTraceQueryByMsgKeyResponse
   */
  async onsTraceQueryByMsgKeyWithOptions(request: OnsTraceQueryByMsgKeyRequest, runtime: $Util.RuntimeOptions): Promise<OnsTraceQueryByMsgKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.msgKey)) {
      query["MsgKey"] = request.msgKey;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsTraceQueryByMsgKey",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsTraceQueryByMsgKeyResponse>(await this.callApi(params, req, runtime), new OnsTraceQueryByMsgKeyResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * If you want to query the trace of a message based on the message key that you obtained, you can call this operation to create a query task. After you obtain the task ID, you can call the OnsTraceGetResult operation to query the details of the message trace based on the task ID.
    *
    * @param request OnsTraceQueryByMsgKeyRequest
    * @return OnsTraceQueryByMsgKeyResponse
   */
  async onsTraceQueryByMsgKey(request: OnsTraceQueryByMsgKeyRequest): Promise<OnsTraceQueryByMsgKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTraceQueryByMsgKeyWithOptions(request, runtime);
  }

  /**
    * >  API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * You can call this operation to query the following statistics that are collected in a production environment:
    * *   The number of messages that are consumed during each sampling period
    * *   The transactions per second (TPS) for message consumption during each sampling period
    * If your application consumes a small number of messages and does not consume messages at specific intervals, we recommend that you query the number of messages that are consumed during each sampling period because the statistics of TPS may not show a clear change trend.
    *
    * @param request OnsTrendGroupOutputTpsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsTrendGroupOutputTpsResponse
   */
  async onsTrendGroupOutputTpsWithOptions(request: OnsTrendGroupOutputTpsRequest, runtime: $Util.RuntimeOptions): Promise<OnsTrendGroupOutputTpsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsTrendGroupOutputTps",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsTrendGroupOutputTpsResponse>(await this.callApi(params, req, runtime), new OnsTrendGroupOutputTpsResponse({}));
  }

  /**
    * >  API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * You can call this operation to query the following statistics that are collected in a production environment:
    * *   The number of messages that are consumed during each sampling period
    * *   The transactions per second (TPS) for message consumption during each sampling period
    * If your application consumes a small number of messages and does not consume messages at specific intervals, we recommend that you query the number of messages that are consumed during each sampling period because the statistics of TPS may not show a clear change trend.
    *
    * @param request OnsTrendGroupOutputTpsRequest
    * @return OnsTrendGroupOutputTpsResponse
   */
  async onsTrendGroupOutputTps(request: OnsTrendGroupOutputTpsRequest): Promise<OnsTrendGroupOutputTpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTrendGroupOutputTpsWithOptions(request, runtime);
  }

  /**
    * >  API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * You can call this operation to query the statistics of messages that are published to a specific topic in a production environment. You can query the number of messages that are published to the topic or the transactions per second (TPS) for message publishing within a specified time range based on your business requirements.
    * If your application publishes a small number of messages and does not publish messages at specific intervals, we recommend that you query the number of messages that are published to the topic during each sampling period because the statistics of TPS may not show a clear change trend.
    *
    * @param request OnsTrendTopicInputTpsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OnsTrendTopicInputTpsResponse
   */
  async onsTrendTopicInputTpsWithOptions(request: OnsTrendTopicInputTpsRequest, runtime: $Util.RuntimeOptions): Promise<OnsTrendTopicInputTpsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsTrendTopicInputTps",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsTrendTopicInputTpsResponse>(await this.callApi(params, req, runtime), new OnsTrendTopicInputTpsResponse({}));
  }

  /**
    * >  API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * You can call this operation to query the statistics of messages that are published to a specific topic in a production environment. You can query the number of messages that are published to the topic or the transactions per second (TPS) for message publishing within a specified time range based on your business requirements.
    * If your application publishes a small number of messages and does not publish messages at specific intervals, we recommend that you query the number of messages that are published to the topic during each sampling period because the statistics of TPS may not show a clear change trend.
    *
    * @param request OnsTrendTopicInputTpsRequest
    * @return OnsTrendTopicInputTpsResponse
   */
  async onsTrendTopicInputTps(request: OnsTrendTopicInputTpsRequest): Promise<OnsTrendTopicInputTpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTrendTopicInputTpsWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * You can call this operation the first time you use ApsaraMQ for RocketMQ. You can use ApsaraMQ for RocketMQ only after the service is activated.
    * The ApsaraMQ for RocketMQ service can be activated only in the China (Hangzhou) region. Service activation is not billed.
    *
    * @param request OpenOnsServiceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OpenOnsServiceResponse
   */
  async openOnsServiceWithOptions(runtime: $Util.RuntimeOptions): Promise<OpenOnsServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "OpenOnsService",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenOnsServiceResponse>(await this.callApi(params, req, runtime), new OpenOnsServiceResponse({}));
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * You can call this operation the first time you use ApsaraMQ for RocketMQ. You can use ApsaraMQ for RocketMQ only after the service is activated.
    * The ApsaraMQ for RocketMQ service can be activated only in the China (Hangzhou) region. Service activation is not billed.
    *
    * @return OpenOnsServiceResponse
   */
  async openOnsService(): Promise<OpenOnsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openOnsServiceWithOptions(runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * You can call this operation to attach tags to a source. You can use tags to classify resources in ApsaraMQ for RocketMQ. This can help you aggregate and search resources in an efficient manner.
    *
    * @param request TagResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      version: "2019-02-14",
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
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    * You can call this operation to attach tags to a source. You can use tags to classify resources in ApsaraMQ for RocketMQ. This can help you aggregate and search resources in an efficient manner.
    *
    * @param request TagResourcesRequest
    * @return TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
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

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      version: "2019-02-14",
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
    * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
    *
    * @param request UntagResourcesRequest
    * @return UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
