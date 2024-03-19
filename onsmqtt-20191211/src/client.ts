// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ApplyTokenRequest extends $tea.Model {
  actions?: string;
  expireTime?: number;
  instanceId?: string;
  resources?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: 'string',
      expireTime: 'number',
      instanceId: 'string',
      resources: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyTokenResponseBody extends $tea.Model {
  requestId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApplyTokenResponseBody;
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
      body: ApplyTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQuerySessionByClientIdsRequest extends $tea.Model {
  clientIdList?: string[];
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientIdList: 'ClientIdList',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIdList: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQuerySessionByClientIdsResponseBody extends $tea.Model {
  onlineStatusList?: BatchQuerySessionByClientIdsResponseBodyOnlineStatusList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      onlineStatusList: 'OnlineStatusList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlineStatusList: { 'type': 'array', 'itemType': BatchQuerySessionByClientIdsResponseBodyOnlineStatusList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQuerySessionByClientIdsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchQuerySessionByClientIdsResponseBody;
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
      body: BatchQuerySessionByClientIdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSendMessagesRequest extends $tea.Model {
  instanceId?: string;
  messages?: BatchSendMessagesRequestMessages[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      messages: 'Messages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      messages: { 'type': 'array', 'itemType': BatchSendMessagesRequestMessages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSendMessagesResponseBody extends $tea.Model {
  requestId?: string;
  responses?: BatchSendMessagesResponseBodyResponses[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responses: 'Responses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responses: { 'type': 'array', 'itemType': BatchSendMessagesResponseBodyResponses },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSendMessagesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchSendMessagesResponseBody;
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
      body: BatchSendMessagesResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGroupIdResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGroupIdResponseBody;
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
      body: DeleteGroupIdResponseBody,
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
  data?: ListGroupIdResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListGroupIdResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGroupIdResponseBody;
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
      body: ListGroupIdResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySessionByClientIdResponseBody;
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
      body: QuerySessionByClientIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTokenRequest extends $tea.Model {
  instanceId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTokenResponseBody extends $tea.Model {
  requestId?: string;
  tokenStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tokenStatus: 'TokenStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tokenStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTokenResponseBody;
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
      body: QueryTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeTokenRequest extends $tea.Model {
  instanceId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      token: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevokeTokenResponseBody;
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
      body: RevokeTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageRequest extends $tea.Model {
  instanceId?: string;
  mqttTopic?: string;
  payload?: string;
  receiptId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mqttTopic: 'MqttTopic',
      payload: 'Payload',
      receiptId: 'ReceiptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mqttTopic: 'string',
      payload: 'string',
      receiptId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendMessageResponseBody;
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
      body: SendMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQuerySessionByClientIdsResponseBodyOnlineStatusList extends $tea.Model {
  clientId?: string;
  onlineStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      onlineStatus: 'OnlineStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      onlineStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSendMessagesRequestMessages extends $tea.Model {
  id?: number;
  payload?: string;
  receiptId?: string;
  topics?: string[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      payload: 'Payload',
      receiptId: 'ReceiptId',
      topics: 'Topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      payload: 'string',
      receiptId: 'string',
      topics: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSendMessagesResponseBodyResponses extends $tea.Model {
  errorCode?: number;
  errorMessage?: string;
  id?: number;
  msgId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      id: 'Id',
      msgId: 'MsgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      errorMessage: 'string',
      id: 'number',
      msgId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupIdResponseBodyData extends $tea.Model {
  createTime?: number;
  groupId?: string;
  independentNaming?: boolean;
  instanceId?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      groupId: 'GroupId',
      independentNaming: 'IndependentNaming',
      instanceId: 'InstanceId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      groupId: 'string',
      independentNaming: 'boolean',
      instanceId: 'string',
      updateTime: 'number',
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
    let query = { };
    if (!Util.isUnset(request.actions)) {
      query["Actions"] = request.actions;
    }

    if (!Util.isUnset(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.resources)) {
      query["Resources"] = request.resources;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApplyToken",
      version: "2019-12-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyTokenResponse>(await this.callApi(params, req, runtime), new ApplyTokenResponse({}));
  }

  async applyToken(request: ApplyTokenRequest): Promise<ApplyTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyTokenWithOptions(request, runtime);
  }

  async batchQuerySessionByClientIdsWithOptions(request: BatchQuerySessionByClientIdsRequest, runtime: $Util.RuntimeOptions): Promise<BatchQuerySessionByClientIdsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientIdList)) {
      query["ClientIdList"] = request.clientIdList;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchQuerySessionByClientIds",
      version: "2019-12-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchQuerySessionByClientIdsResponse>(await this.callApi(params, req, runtime), new BatchQuerySessionByClientIdsResponse({}));
  }

  async batchQuerySessionByClientIds(request: BatchQuerySessionByClientIdsRequest): Promise<BatchQuerySessionByClientIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchQuerySessionByClientIdsWithOptions(request, runtime);
  }

  async batchSendMessagesWithOptions(request: BatchSendMessagesRequest, runtime: $Util.RuntimeOptions): Promise<BatchSendMessagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.messages)) {
      query["Messages"] = request.messages;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchSendMessages",
      version: "2019-12-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchSendMessagesResponse>(await this.callApi(params, req, runtime), new BatchSendMessagesResponse({}));
  }

  async batchSendMessages(request: BatchSendMessagesRequest): Promise<BatchSendMessagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSendMessagesWithOptions(request, runtime);
  }

  async createGroupIdWithOptions(request: CreateGroupIdRequest, runtime: $Util.RuntimeOptions): Promise<CreateGroupIdResponse> {
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
      action: "CreateGroupId",
      version: "2019-12-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGroupIdResponse>(await this.callApi(params, req, runtime), new CreateGroupIdResponse({}));
  }

  async createGroupId(request: CreateGroupIdRequest): Promise<CreateGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGroupIdWithOptions(request, runtime);
  }

  async deleteGroupIdWithOptions(request: DeleteGroupIdRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGroupIdResponse> {
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
      action: "DeleteGroupId",
      version: "2019-12-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGroupIdResponse>(await this.callApi(params, req, runtime), new DeleteGroupIdResponse({}));
  }

  async deleteGroupId(request: DeleteGroupIdRequest): Promise<DeleteGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGroupIdWithOptions(request, runtime);
  }

  async listGroupIdWithOptions(request: ListGroupIdRequest, runtime: $Util.RuntimeOptions): Promise<ListGroupIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGroupId",
      version: "2019-12-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGroupIdResponse>(await this.callApi(params, req, runtime), new ListGroupIdResponse({}));
  }

  async listGroupId(request: ListGroupIdRequest): Promise<ListGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupIdWithOptions(request, runtime);
  }

  async querySessionByClientIdWithOptions(request: QuerySessionByClientIdRequest, runtime: $Util.RuntimeOptions): Promise<QuerySessionByClientIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySessionByClientId",
      version: "2019-12-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySessionByClientIdResponse>(await this.callApi(params, req, runtime), new QuerySessionByClientIdResponse({}));
  }

  async querySessionByClientId(request: QuerySessionByClientIdRequest): Promise<QuerySessionByClientIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySessionByClientIdWithOptions(request, runtime);
  }

  async queryTokenWithOptions(request: QueryTokenRequest, runtime: $Util.RuntimeOptions): Promise<QueryTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryToken",
      version: "2019-12-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTokenResponse>(await this.callApi(params, req, runtime), new QueryTokenResponse({}));
  }

  async queryToken(request: QueryTokenRequest): Promise<QueryTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTokenWithOptions(request, runtime);
  }

  async revokeTokenWithOptions(request: RevokeTokenRequest, runtime: $Util.RuntimeOptions): Promise<RevokeTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RevokeToken",
      version: "2019-12-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevokeTokenResponse>(await this.callApi(params, req, runtime), new RevokeTokenResponse({}));
  }

  async revokeToken(request: RevokeTokenRequest): Promise<RevokeTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeTokenWithOptions(request, runtime);
  }

  async sendMessageWithOptions(request: SendMessageRequest, runtime: $Util.RuntimeOptions): Promise<SendMessageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mqttTopic)) {
      query["MqttTopic"] = request.mqttTopic;
    }

    if (!Util.isUnset(request.payload)) {
      query["Payload"] = request.payload;
    }

    if (!Util.isUnset(request.receiptId)) {
      query["ReceiptId"] = request.receiptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendMessage",
      version: "2019-12-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendMessageResponse>(await this.callApi(params, req, runtime), new SendMessageResponse({}));
  }

  async sendMessage(request: SendMessageRequest): Promise<SendMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendMessageWithOptions(request, runtime);
  }

}
