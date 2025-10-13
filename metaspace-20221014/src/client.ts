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
    this._endpoint = this.getEndpoint("metaspace", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 协同者发起流协同请求并获取协同ticket的API接口。
   * 
   * @remarks
   * ## 请求说明
   * - 该API为内部使用，主要用于协同者发起流协同。
   * - `DependOnMainStream`参数指定了是否依赖主流的状态来建立或断开协同流。
   * - 当`InitiatorType`设置为强制协同类型时（如`ADMIN_INITIATE_FORCE`或`COORDINATOR_INITIATE_FORCE`），将返回一个`CoordinateTicket`。
   * - 协同资源列表`CoordinationResourceCandidates`中必须包含至少一项资源信息，并且所有提供的资源ID、类型和地区等信息需准确无误。
   * - 确保`OwnerAliUid`与协同者的租户ID相同，否则可能无法成功发起协同请求。
   * - 对于AD用户，请务必填写`AdDomainName`字段。
   * 
   * @param request - ApplyCoordinationForCoordinatorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyCoordinationForCoordinatorResponse
   */
  async applyCoordinationForCoordinatorWithOptions(request: $_model.ApplyCoordinationForCoordinatorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyCoordinationForCoordinatorResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.coordinationResourceCandidates)) {
      bodyFlat["CoordinationResourceCandidates"] = request.coordinationResourceCandidates;
    }

    if (!$dara.isNull(request.initiatorType)) {
      body["InitiatorType"] = request.initiatorType;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyCoordinationForCoordinator",
      version: "2022-10-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyCoordinationForCoordinatorResponse>(await this.callApi(params, req, runtime), new $_model.ApplyCoordinationForCoordinatorResponse({}));
  }

  /**
   * 协同者发起流协同请求并获取协同ticket的API接口。
   * 
   * @remarks
   * ## 请求说明
   * - 该API为内部使用，主要用于协同者发起流协同。
   * - `DependOnMainStream`参数指定了是否依赖主流的状态来建立或断开协同流。
   * - 当`InitiatorType`设置为强制协同类型时（如`ADMIN_INITIATE_FORCE`或`COORDINATOR_INITIATE_FORCE`），将返回一个`CoordinateTicket`。
   * - 协同资源列表`CoordinationResourceCandidates`中必须包含至少一项资源信息，并且所有提供的资源ID、类型和地区等信息需准确无误。
   * - 确保`OwnerAliUid`与协同者的租户ID相同，否则可能无法成功发起协同请求。
   * - 对于AD用户，请务必填写`AdDomainName`字段。
   * 
   * @param request - ApplyCoordinationForCoordinatorRequest
   * @returns ApplyCoordinationForCoordinatorResponse
   */
  async applyCoordinationForCoordinator(request: $_model.ApplyCoordinationForCoordinatorRequest): Promise<$_model.ApplyCoordinationForCoordinatorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyCoordinationForCoordinatorWithOptions(request, runtime);
  }

  /**
   * 取消协同请求
   * 
   * @param request - CancelCoordinationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelCoordinationResponse
   */
  async cancelCoordinationWithOptions(request: $_model.CancelCoordinationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelCoordinationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.coIds)) {
      bodyFlat["CoIds"] = request.coIds;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelCoordination",
      version: "2022-10-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelCoordinationResponse>(await this.callApi(params, req, runtime), new $_model.CancelCoordinationResponse({}));
  }

  /**
   * 取消协同请求
   * 
   * @param request - CancelCoordinationRequest
   * @returns CancelCoordinationResponse
   */
  async cancelCoordination(request: $_model.CancelCoordinationRequest): Promise<$_model.CancelCoordinationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelCoordinationWithOptions(request, runtime);
  }

  /**
   * 获取协同流连接ticket
   * 
   * @param request - GetCoordinationTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCoordinationTicketResponse
   */
  async getCoordinationTicketWithOptions(request: $_model.GetCoordinationTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCoordinationTicketResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.coId)) {
      body["CoId"] = request.coId;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCoordinationTicket",
      version: "2022-10-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCoordinationTicketResponse>(await this.callApi(params, req, runtime), new $_model.GetCoordinationTicketResponse({}));
  }

  /**
   * 获取协同流连接ticket
   * 
   * @param request - GetCoordinationTicketRequest
   * @returns GetCoordinationTicketResponse
   */
  async getCoordinationTicket(request: $_model.GetCoordinationTicketRequest): Promise<$_model.GetCoordinationTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCoordinationTicketWithOptions(request, runtime);
  }

}
