// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class QueryTokenForMnsQueueRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  messageType?: string;
  ownerId?: number;
  queueName?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      messageType: 'MessageType',
      ownerId: 'OwnerId',
      queueName: 'QueueName',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageType: 'string',
      ownerId: 'number',
      queueName: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTokenForMnsQueueResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  messageTokenDTO?: QueryTokenForMnsQueueResponseBodyMessageTokenDTO;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      messageTokenDTO: 'MessageTokenDTO',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      messageTokenDTO: QueryTokenForMnsQueueResponseBodyMessageTokenDTO,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTokenForMnsQueueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTokenForMnsQueueResponseBody;
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
      body: QueryTokenForMnsQueueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTokenForMnsQueueResponseBodyMessageTokenDTO extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  createTime?: string;
  expireTime?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      createTime: 'string',
      expireTime: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dybaseapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - QueryTokenForMnsQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTokenForMnsQueueResponse
   */
  async queryTokenForMnsQueueWithOptions(request: QueryTokenForMnsQueueRequest, runtime: $Util.RuntimeOptions): Promise<QueryTokenForMnsQueueResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.messageType)) {
      query["MessageType"] = request.messageType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTokenForMnsQueue",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTokenForMnsQueueResponse>(await this.callApi(params, req, runtime), new QueryTokenForMnsQueueResponse({}));
  }

  /**
   * @param request - QueryTokenForMnsQueueRequest
   * @returns QueryTokenForMnsQueueResponse
   */
  async queryTokenForMnsQueue(request: QueryTokenForMnsQueueRequest): Promise<QueryTokenForMnsQueueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTokenForMnsQueueWithOptions(request, runtime);
  }

}
