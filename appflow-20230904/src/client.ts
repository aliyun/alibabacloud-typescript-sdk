// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("appflow", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Generate Login Session Token
   * 
   * @param request - GenerateUserSessionTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateUserSessionTokenResponse
   */
  async generateUserSessionTokenWithOptions(request: $_model.GenerateUserSessionTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateUserSessionTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chatbotId)) {
      query["ChatbotId"] = request.chatbotId;
    }

    if (!$dara.isNull(request.expireSecond)) {
      query["ExpireSecond"] = request.expireSecond;
    }

    if (!$dara.isNull(request.extraInfo)) {
      query["ExtraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.integrateId)) {
      query["IntegrateId"] = request.integrateId;
    }

    if (!$dara.isNull(request.userAvatar)) {
      query["UserAvatar"] = request.userAvatar;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateUserSessionToken",
      version: "2023-09-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateUserSessionTokenResponse>(await this.callApi(params, req, runtime), new $_model.GenerateUserSessionTokenResponse({}));
  }

  /**
   * Generate Login Session Token
   * 
   * @param request - GenerateUserSessionTokenRequest
   * @returns GenerateUserSessionTokenResponse
   */
  async generateUserSessionToken(request: $_model.GenerateUserSessionTokenRequest): Promise<$_model.GenerateUserSessionTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateUserSessionTokenWithOptions(request, runtime);
  }

  /**
   * 运行连接器的执行动作
   * 
   * @param tmpReq - InvokeActionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvokeActionResponse
   */
  async *invokeActionWithSSE(tmpReq: $_model.InvokeActionRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.InvokeActionResponse, any, unknown> {
    tmpReq.validate();
    let request = new $_model.InvokeActionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.authConfig)) {
      request.authConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.authConfig, "AuthConfig", "json");
    }

    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "Body", "json");
    }

    if (!$dara.isNull(tmpReq.headers)) {
      request.headersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.headers, "Headers", "json");
    }

    if (!$dara.isNull(tmpReq.path)) {
      request.pathShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.path, "Path", "json");
    }

    if (!$dara.isNull(tmpReq.query)) {
      request.queryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.query, "Query", "json");
    }

    let query = { };
    if (!$dara.isNull(request.actionId)) {
      query["ActionId"] = request.actionId;
    }

    if (!$dara.isNull(request.actionVersion)) {
      query["ActionVersion"] = request.actionVersion;
    }

    if (!$dara.isNull(request.authConfigShrink)) {
      query["AuthConfig"] = request.authConfigShrink;
    }

    if (!$dara.isNull(request.bodyShrink)) {
      query["Body"] = request.bodyShrink;
    }

    if (!$dara.isNull(request.connectorId)) {
      query["ConnectorId"] = request.connectorId;
    }

    if (!$dara.isNull(request.connectorVersion)) {
      query["ConnectorVersion"] = request.connectorVersion;
    }

    if (!$dara.isNull(request.headersShrink)) {
      query["Headers"] = request.headersShrink;
    }

    if (!$dara.isNull(request.pathShrink)) {
      query["Path"] = request.pathShrink;
    }

    if (!$dara.isNull(request.queryShrink)) {
      query["Query"] = request.queryShrink;
    }

    if (!$dara.isNull(request.stream)) {
      query["Stream"] = request.stream;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvokeAction",
      version: "2023-09-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.InvokeActionResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.InvokeActionResponse({}));
      }

    }
  }

  /**
   * 运行连接器的执行动作
   * 
   * @param tmpReq - InvokeActionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvokeActionResponse
   */
  async invokeActionWithOptions(tmpReq: $_model.InvokeActionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InvokeActionResponse> {
    tmpReq.validate();
    let request = new $_model.InvokeActionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.authConfig)) {
      request.authConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.authConfig, "AuthConfig", "json");
    }

    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "Body", "json");
    }

    if (!$dara.isNull(tmpReq.headers)) {
      request.headersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.headers, "Headers", "json");
    }

    if (!$dara.isNull(tmpReq.path)) {
      request.pathShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.path, "Path", "json");
    }

    if (!$dara.isNull(tmpReq.query)) {
      request.queryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.query, "Query", "json");
    }

    let query = { };
    if (!$dara.isNull(request.actionId)) {
      query["ActionId"] = request.actionId;
    }

    if (!$dara.isNull(request.actionVersion)) {
      query["ActionVersion"] = request.actionVersion;
    }

    if (!$dara.isNull(request.authConfigShrink)) {
      query["AuthConfig"] = request.authConfigShrink;
    }

    if (!$dara.isNull(request.bodyShrink)) {
      query["Body"] = request.bodyShrink;
    }

    if (!$dara.isNull(request.connectorId)) {
      query["ConnectorId"] = request.connectorId;
    }

    if (!$dara.isNull(request.connectorVersion)) {
      query["ConnectorVersion"] = request.connectorVersion;
    }

    if (!$dara.isNull(request.headersShrink)) {
      query["Headers"] = request.headersShrink;
    }

    if (!$dara.isNull(request.pathShrink)) {
      query["Path"] = request.pathShrink;
    }

    if (!$dara.isNull(request.queryShrink)) {
      query["Query"] = request.queryShrink;
    }

    if (!$dara.isNull(request.stream)) {
      query["Stream"] = request.stream;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvokeAction",
      version: "2023-09-04",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InvokeActionResponse>(await this.callApi(params, req, runtime), new $_model.InvokeActionResponse({}));
  }

  /**
   * 运行连接器的执行动作
   * 
   * @param request - InvokeActionRequest
   * @returns InvokeActionResponse
   */
  async invokeAction(request: $_model.InvokeActionRequest): Promise<$_model.InvokeActionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.invokeActionWithOptions(request, runtime);
  }

}
