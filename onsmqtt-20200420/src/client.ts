// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ApplyTokenRequest extends $tea.Model {
  resources?: string;
  instanceId?: string;
  expireTime?: number;
  actions?: string;
  static names(): { [key: string]: string } {
    return {
      resources: 'Resources',
      instanceId: 'InstanceId',
      expireTime: 'ExpireTime',
      actions: 'Actions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resources: 'string',
      instanceId: 'string',
      expireTime: 'number',
      actions: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyTokenResponseBody extends $tea.Model {
  token?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      token: 'Token',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ApplyTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ApplyTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQuerySessionByClientIdsRequest extends $tea.Model {
  instanceId?: string;
  clientIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      clientIdList: 'ClientIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      clientIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQuerySessionByClientIdsResponseBody extends $tea.Model {
  requestId?: string;
  onlineStatusList?: BatchQuerySessionByClientIdsResponseBodyOnlineStatusList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      onlineStatusList: 'OnlineStatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      onlineStatusList: { 'type': 'array', 'itemType': BatchQuerySessionByClientIdsResponseBodyOnlineStatusList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQuerySessionByClientIdsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchQuerySessionByClientIdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchQuerySessionByClientIdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupIdRequest extends $tea.Model {
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

export class CreateGroupIdResponseBody extends $tea.Model {
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

export class CreateGroupIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateGroupIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateGroupIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupIdRequest extends $tea.Model {
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

export class DeleteGroupIdResponseBody extends $tea.Model {
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

export class DeleteGroupIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteGroupIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteGroupIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceCredentialRequest extends $tea.Model {
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

export class GetDeviceCredentialResponseBody extends $tea.Model {
  requestId?: string;
  deviceCredential?: GetDeviceCredentialResponseBodyDeviceCredential;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceCredential: 'DeviceCredential',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceCredential: GetDeviceCredentialResponseBodyDeviceCredential,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceCredentialResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDeviceCredentialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDeviceCredentialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupIdRequest extends $tea.Model {
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

export class ListGroupIdResponseBody extends $tea.Model {
  requestId?: string;
  data?: ListGroupIdResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListGroupIdResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListGroupIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListGroupIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceDeviceRequest extends $tea.Model {
  mqttRegionId?: string;
  instanceId?: string;
  reverse?: boolean;
  clientId?: string;
  beginTime?: number;
  endTime?: number;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      mqttRegionId: 'MqttRegionId',
      instanceId: 'InstanceId',
      reverse: 'Reverse',
      clientId: 'ClientId',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqttRegionId: 'string',
      instanceId: 'string',
      reverse: 'boolean',
      clientId: 'string',
      beginTime: 'number',
      endTime: 'number',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceDeviceResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  pageSize?: number;
  total?: number;
  deviceInfoList?: QueryMqttTraceDeviceResponseBodyDeviceInfoList[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      total: 'Total',
      deviceInfoList: 'DeviceInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'number',
      total: 'number',
      deviceInfoList: { 'type': 'array', 'itemType': QueryMqttTraceDeviceResponseBodyDeviceInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryMqttTraceDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryMqttTraceDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessageOfClientRequest extends $tea.Model {
  mqttRegionId?: string;
  instanceId?: string;
  clientId?: string;
  beginTime?: number;
  endTime?: number;
  currentPage?: number;
  pageSize?: number;
  reverse?: boolean;
  static names(): { [key: string]: string } {
    return {
      mqttRegionId: 'MqttRegionId',
      instanceId: 'InstanceId',
      clientId: 'ClientId',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      reverse: 'Reverse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqttRegionId: 'string',
      instanceId: 'string',
      clientId: 'string',
      beginTime: 'number',
      endTime: 'number',
      currentPage: 'number',
      pageSize: 'number',
      reverse: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessageOfClientResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  pageSize?: number;
  total?: number;
  messageOfClientList?: QueryMqttTraceMessageOfClientResponseBodyMessageOfClientList[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      total: 'Total',
      messageOfClientList: 'MessageOfClientList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'number',
      total: 'number',
      messageOfClientList: { 'type': 'array', 'itemType': QueryMqttTraceMessageOfClientResponseBodyMessageOfClientList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessageOfClientResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryMqttTraceMessageOfClientResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryMqttTraceMessageOfClientResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessagePublishRequest extends $tea.Model {
  mqttRegionId?: string;
  instanceId?: string;
  msgId?: string;
  beginTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      mqttRegionId: 'MqttRegionId',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqttRegionId: 'string',
      instanceId: 'string',
      msgId: 'string',
      beginTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessagePublishResponseBody extends $tea.Model {
  requestId?: string;
  messageTraceLists?: QueryMqttTraceMessagePublishResponseBodyMessageTraceLists[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      messageTraceLists: 'MessageTraceLists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      messageTraceLists: { 'type': 'array', 'itemType': QueryMqttTraceMessagePublishResponseBodyMessageTraceLists },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessagePublishResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryMqttTraceMessagePublishResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryMqttTraceMessagePublishResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessageSubscribeRequest extends $tea.Model {
  mqttRegionId?: string;
  instanceId?: string;
  reverse?: boolean;
  clientId?: string;
  beginTime?: number;
  endTime?: number;
  currentPage?: number;
  pageSize?: number;
  msgId?: string;
  static names(): { [key: string]: string } {
    return {
      mqttRegionId: 'MqttRegionId',
      instanceId: 'InstanceId',
      reverse: 'Reverse',
      clientId: 'ClientId',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      msgId: 'MsgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqttRegionId: 'string',
      instanceId: 'string',
      reverse: 'boolean',
      clientId: 'string',
      beginTime: 'number',
      endTime: 'number',
      currentPage: 'number',
      pageSize: 'number',
      msgId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessageSubscribeResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  pageSize?: number;
  total?: number;
  messageTraceLists?: QueryMqttTraceMessageSubscribeResponseBodyMessageTraceLists[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      total: 'Total',
      messageTraceLists: 'MessageTraceLists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'number',
      total: 'number',
      messageTraceLists: { 'type': 'array', 'itemType': QueryMqttTraceMessageSubscribeResponseBodyMessageTraceLists },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessageSubscribeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryMqttTraceMessageSubscribeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryMqttTraceMessageSubscribeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySessionByClientIdRequest extends $tea.Model {
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

export class QuerySessionByClientIdResponseBody extends $tea.Model {
  onlineStatus?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      onlineStatus: 'OnlineStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlineStatus: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySessionByClientIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QuerySessionByClientIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QuerySessionByClientIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTokenRequest extends $tea.Model {
  token?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      token: 'Token',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTokenResponseBody extends $tea.Model {
  tokenStatus?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      tokenStatus: 'TokenStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tokenStatus: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDeviceCredentialRequest extends $tea.Model {
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

export class RefreshDeviceCredentialResponseBody extends $tea.Model {
  requestId?: string;
  deviceCredential?: RefreshDeviceCredentialResponseBodyDeviceCredential;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceCredential: 'DeviceCredential',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceCredential: RefreshDeviceCredentialResponseBodyDeviceCredential,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDeviceCredentialResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RefreshDeviceCredentialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RefreshDeviceCredentialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceCredentialRequest extends $tea.Model {
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

export class RegisterDeviceCredentialResponseBody extends $tea.Model {
  requestId?: string;
  deviceCredential?: RegisterDeviceCredentialResponseBodyDeviceCredential;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceCredential: 'DeviceCredential',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceCredential: RegisterDeviceCredentialResponseBodyDeviceCredential,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceCredentialResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RegisterDeviceCredentialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RegisterDeviceCredentialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeTokenRequest extends $tea.Model {
  token?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      token: 'Token',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeTokenResponseBody extends $tea.Model {
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

export class RevokeTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RevokeTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RevokeTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageRequest extends $tea.Model {
  mqttTopic?: string;
  instanceId?: string;
  payload?: string;
  static names(): { [key: string]: string } {
    return {
      mqttTopic: 'MqttTopic',
      instanceId: 'InstanceId',
      payload: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqttTopic: 'string',
      instanceId: 'string',
      payload: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageResponseBody extends $tea.Model {
  msgId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      msgId: 'MsgId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msgId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SendMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnRegisterDeviceCredentialRequest extends $tea.Model {
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

export class UnRegisterDeviceCredentialResponseBody extends $tea.Model {
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

export class UnRegisterDeviceCredentialResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnRegisterDeviceCredentialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnRegisterDeviceCredentialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQuerySessionByClientIdsResponseBodyOnlineStatusList extends $tea.Model {
  onlineStatus?: boolean;
  clientId?: string;
  static names(): { [key: string]: string } {
    return {
      onlineStatus: 'OnlineStatus',
      clientId: 'ClientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlineStatus: 'boolean',
      clientId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceCredentialResponseBodyDeviceCredential extends $tea.Model {
  updateTime?: number;
  deviceAccessKeyId?: string;
  createTime?: number;
  instanceId?: string;
  deviceAccessKeySecret?: string;
  clientId?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      deviceAccessKeyId: 'DeviceAccessKeyId',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      deviceAccessKeySecret: 'DeviceAccessKeySecret',
      clientId: 'ClientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      deviceAccessKeyId: 'string',
      createTime: 'number',
      instanceId: 'string',
      deviceAccessKeySecret: 'string',
      clientId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupIdResponseBodyData extends $tea.Model {
  updateTime?: number;
  instanceId?: string;
  independentNaming?: boolean;
  groupId?: string;
  createTime?: number;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      instanceId: 'InstanceId',
      independentNaming: 'IndependentNaming',
      groupId: 'GroupId',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      instanceId: 'string',
      independentNaming: 'boolean',
      groupId: 'string',
      createTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceDeviceResponseBodyDeviceInfoList extends $tea.Model {
  channelId?: string;
  time?: string;
  actionCode?: string;
  action?: string;
  actionInfo?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      time: 'Time',
      actionCode: 'ActionCode',
      action: 'Action',
      actionInfo: 'ActionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      time: 'string',
      actionCode: 'string',
      action: 'string',
      actionInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessageOfClientResponseBodyMessageOfClientList extends $tea.Model {
  time?: string;
  action?: string;
  actionCode?: string;
  actionInfo?: string;
  msgId?: string;
  clientId?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      action: 'Action',
      actionCode: 'ActionCode',
      actionInfo: 'ActionInfo',
      msgId: 'MsgId',
      clientId: 'ClientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      action: 'string',
      actionCode: 'string',
      actionInfo: 'string',
      msgId: 'string',
      clientId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessagePublishResponseBodyMessageTraceLists extends $tea.Model {
  time?: string;
  action?: string;
  actionCode?: string;
  actionInfo?: string;
  msgId?: string;
  clientId?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      action: 'Action',
      actionCode: 'ActionCode',
      actionInfo: 'ActionInfo',
      msgId: 'MsgId',
      clientId: 'ClientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      action: 'string',
      actionCode: 'string',
      actionInfo: 'string',
      msgId: 'string',
      clientId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessageSubscribeResponseBodyMessageTraceLists extends $tea.Model {
  time?: string;
  action?: string;
  actionCode?: string;
  actionInfo?: string;
  msgId?: string;
  clientId?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      action: 'Action',
      actionCode: 'ActionCode',
      actionInfo: 'ActionInfo',
      msgId: 'MsgId',
      clientId: 'ClientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      action: 'string',
      actionCode: 'string',
      actionInfo: 'string',
      msgId: 'string',
      clientId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDeviceCredentialResponseBodyDeviceCredential extends $tea.Model {
  updateTime?: number;
  deviceAccessKeyId?: string;
  createTime?: number;
  instanceId?: string;
  deviceAccessKeySecret?: string;
  clientId?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      deviceAccessKeyId: 'DeviceAccessKeyId',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      deviceAccessKeySecret: 'DeviceAccessKeySecret',
      clientId: 'ClientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      deviceAccessKeyId: 'string',
      createTime: 'number',
      instanceId: 'string',
      deviceAccessKeySecret: 'string',
      clientId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceCredentialResponseBodyDeviceCredential extends $tea.Model {
  updateTime?: number;
  deviceAccessKeyId?: string;
  createTime?: number;
  instanceId?: string;
  deviceAccessKeySecret?: string;
  clientId?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      deviceAccessKeyId: 'DeviceAccessKeyId',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      deviceAccessKeySecret: 'DeviceAccessKeySecret',
      clientId: 'ClientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      deviceAccessKeyId: 'string',
      createTime: 'number',
      instanceId: 'string',
      deviceAccessKeySecret: 'string',
      clientId: 'string',
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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("onsmqtt", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async applyTokenWithOptions(request: ApplyTokenRequest, runtime: $Util.RuntimeOptions): Promise<ApplyTokenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ApplyTokenResponse>(await this.doRPCRequest("ApplyToken", "2020-04-20", "HTTPS", "POST", "AK", "json", req, runtime), new ApplyTokenResponse({}));
  }

  async applyToken(request: ApplyTokenRequest): Promise<ApplyTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyTokenWithOptions(request, runtime);
  }

  async batchQuerySessionByClientIdsWithOptions(request: BatchQuerySessionByClientIdsRequest, runtime: $Util.RuntimeOptions): Promise<BatchQuerySessionByClientIdsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchQuerySessionByClientIdsResponse>(await this.doRPCRequest("BatchQuerySessionByClientIds", "2020-04-20", "HTTPS", "POST", "AK", "json", req, runtime), new BatchQuerySessionByClientIdsResponse({}));
  }

  async batchQuerySessionByClientIds(request: BatchQuerySessionByClientIdsRequest): Promise<BatchQuerySessionByClientIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchQuerySessionByClientIdsWithOptions(request, runtime);
  }

  async createGroupIdWithOptions(request: CreateGroupIdRequest, runtime: $Util.RuntimeOptions): Promise<CreateGroupIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateGroupIdResponse>(await this.doRPCRequest("CreateGroupId", "2020-04-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateGroupIdResponse({}));
  }

  async createGroupId(request: CreateGroupIdRequest): Promise<CreateGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGroupIdWithOptions(request, runtime);
  }

  async deleteGroupIdWithOptions(request: DeleteGroupIdRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGroupIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteGroupIdResponse>(await this.doRPCRequest("DeleteGroupId", "2020-04-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteGroupIdResponse({}));
  }

  async deleteGroupId(request: DeleteGroupIdRequest): Promise<DeleteGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGroupIdWithOptions(request, runtime);
  }

  async getDeviceCredentialWithOptions(request: GetDeviceCredentialRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceCredentialResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDeviceCredentialResponse>(await this.doRPCRequest("GetDeviceCredential", "2020-04-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetDeviceCredentialResponse({}));
  }

  async getDeviceCredential(request: GetDeviceCredentialRequest): Promise<GetDeviceCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceCredentialWithOptions(request, runtime);
  }

  async listGroupIdWithOptions(request: ListGroupIdRequest, runtime: $Util.RuntimeOptions): Promise<ListGroupIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListGroupIdResponse>(await this.doRPCRequest("ListGroupId", "2020-04-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListGroupIdResponse({}));
  }

  async listGroupId(request: ListGroupIdRequest): Promise<ListGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupIdWithOptions(request, runtime);
  }

  async queryMqttTraceDeviceWithOptions(request: QueryMqttTraceDeviceRequest, runtime: $Util.RuntimeOptions): Promise<QueryMqttTraceDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryMqttTraceDeviceResponse>(await this.doRPCRequest("QueryMqttTraceDevice", "2020-04-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryMqttTraceDeviceResponse({}));
  }

  async queryMqttTraceDevice(request: QueryMqttTraceDeviceRequest): Promise<QueryMqttTraceDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMqttTraceDeviceWithOptions(request, runtime);
  }

  async queryMqttTraceMessageOfClientWithOptions(request: QueryMqttTraceMessageOfClientRequest, runtime: $Util.RuntimeOptions): Promise<QueryMqttTraceMessageOfClientResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryMqttTraceMessageOfClientResponse>(await this.doRPCRequest("QueryMqttTraceMessageOfClient", "2020-04-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryMqttTraceMessageOfClientResponse({}));
  }

  async queryMqttTraceMessageOfClient(request: QueryMqttTraceMessageOfClientRequest): Promise<QueryMqttTraceMessageOfClientResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMqttTraceMessageOfClientWithOptions(request, runtime);
  }

  async queryMqttTraceMessagePublishWithOptions(request: QueryMqttTraceMessagePublishRequest, runtime: $Util.RuntimeOptions): Promise<QueryMqttTraceMessagePublishResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryMqttTraceMessagePublishResponse>(await this.doRPCRequest("QueryMqttTraceMessagePublish", "2020-04-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryMqttTraceMessagePublishResponse({}));
  }

  async queryMqttTraceMessagePublish(request: QueryMqttTraceMessagePublishRequest): Promise<QueryMqttTraceMessagePublishResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMqttTraceMessagePublishWithOptions(request, runtime);
  }

  async queryMqttTraceMessageSubscribeWithOptions(request: QueryMqttTraceMessageSubscribeRequest, runtime: $Util.RuntimeOptions): Promise<QueryMqttTraceMessageSubscribeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryMqttTraceMessageSubscribeResponse>(await this.doRPCRequest("QueryMqttTraceMessageSubscribe", "2020-04-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryMqttTraceMessageSubscribeResponse({}));
  }

  async queryMqttTraceMessageSubscribe(request: QueryMqttTraceMessageSubscribeRequest): Promise<QueryMqttTraceMessageSubscribeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMqttTraceMessageSubscribeWithOptions(request, runtime);
  }

  async querySessionByClientIdWithOptions(request: QuerySessionByClientIdRequest, runtime: $Util.RuntimeOptions): Promise<QuerySessionByClientIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QuerySessionByClientIdResponse>(await this.doRPCRequest("QuerySessionByClientId", "2020-04-20", "HTTPS", "POST", "AK", "json", req, runtime), new QuerySessionByClientIdResponse({}));
  }

  async querySessionByClientId(request: QuerySessionByClientIdRequest): Promise<QuerySessionByClientIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySessionByClientIdWithOptions(request, runtime);
  }

  async queryTokenWithOptions(request: QueryTokenRequest, runtime: $Util.RuntimeOptions): Promise<QueryTokenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTokenResponse>(await this.doRPCRequest("QueryToken", "2020-04-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTokenResponse({}));
  }

  async queryToken(request: QueryTokenRequest): Promise<QueryTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTokenWithOptions(request, runtime);
  }

  async refreshDeviceCredentialWithOptions(request: RefreshDeviceCredentialRequest, runtime: $Util.RuntimeOptions): Promise<RefreshDeviceCredentialResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RefreshDeviceCredentialResponse>(await this.doRPCRequest("RefreshDeviceCredential", "2020-04-20", "HTTPS", "POST", "AK", "json", req, runtime), new RefreshDeviceCredentialResponse({}));
  }

  async refreshDeviceCredential(request: RefreshDeviceCredentialRequest): Promise<RefreshDeviceCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshDeviceCredentialWithOptions(request, runtime);
  }

  async registerDeviceCredentialWithOptions(request: RegisterDeviceCredentialRequest, runtime: $Util.RuntimeOptions): Promise<RegisterDeviceCredentialResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RegisterDeviceCredentialResponse>(await this.doRPCRequest("RegisterDeviceCredential", "2020-04-20", "HTTPS", "POST", "AK", "json", req, runtime), new RegisterDeviceCredentialResponse({}));
  }

  async registerDeviceCredential(request: RegisterDeviceCredentialRequest): Promise<RegisterDeviceCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerDeviceCredentialWithOptions(request, runtime);
  }

  async revokeTokenWithOptions(request: RevokeTokenRequest, runtime: $Util.RuntimeOptions): Promise<RevokeTokenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RevokeTokenResponse>(await this.doRPCRequest("RevokeToken", "2020-04-20", "HTTPS", "POST", "AK", "json", req, runtime), new RevokeTokenResponse({}));
  }

  async revokeToken(request: RevokeTokenRequest): Promise<RevokeTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeTokenWithOptions(request, runtime);
  }

  async sendMessageWithOptions(request: SendMessageRequest, runtime: $Util.RuntimeOptions): Promise<SendMessageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SendMessageResponse>(await this.doRPCRequest("SendMessage", "2020-04-20", "HTTPS", "POST", "AK", "json", req, runtime), new SendMessageResponse({}));
  }

  async sendMessage(request: SendMessageRequest): Promise<SendMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendMessageWithOptions(request, runtime);
  }

  async unRegisterDeviceCredentialWithOptions(request: UnRegisterDeviceCredentialRequest, runtime: $Util.RuntimeOptions): Promise<UnRegisterDeviceCredentialResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnRegisterDeviceCredentialResponse>(await this.doRPCRequest("UnRegisterDeviceCredential", "2020-04-20", "HTTPS", "POST", "AK", "json", req, runtime), new UnRegisterDeviceCredentialResponse({}));
  }

  async unRegisterDeviceCredential(request: UnRegisterDeviceCredentialRequest): Promise<UnRegisterDeviceCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unRegisterDeviceCredentialWithOptions(request, runtime);
  }

}
