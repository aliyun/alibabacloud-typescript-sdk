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
  requestId?: string;
  onlineStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      onlineStatus: 'OnlineStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      onlineStatus: 'boolean',
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
  requestId?: string;
  msgId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      msgId: 'MsgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      msgId: 'string',
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

export class ListGroupIdResponseBodyData extends $tea.Model {
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

}
