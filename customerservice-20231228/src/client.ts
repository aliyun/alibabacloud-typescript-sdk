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
    this._endpoint = this.getEndpoint("customerservice", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 获取我的企业支持计划
   * 
   * @param request - ListEnterpriseSupportPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnterpriseSupportPlanResponse
   */
  async listEnterpriseSupportPlanWithOptions(request: $_model.ListEnterpriseSupportPlanRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListEnterpriseSupportPlanResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNum)) {
      body["pageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEnterpriseSupportPlan",
      version: "2023-12-28",
      protocol: "HTTPS",
      pathname: `/customerWorkbench/pop/api/enterpriseSupport/listEnterpriseSupportPlan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEnterpriseSupportPlanResponse>(await this.callApi(params, req, runtime), new $_model.ListEnterpriseSupportPlanResponse({}));
  }

  /**
   * 获取我的企业支持计划
   * 
   * @param request - ListEnterpriseSupportPlanRequest
   * @returns ListEnterpriseSupportPlanResponse
   */
  async listEnterpriseSupportPlan(request: $_model.ListEnterpriseSupportPlanRequest): Promise<$_model.ListEnterpriseSupportPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEnterpriseSupportPlanWithOptions(request, headers, runtime);
  }

  /**
   * 获取我的企业支持计划(下拉)
   * 
   * @param request - ListEnterpriseSupportPlanSimpleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnterpriseSupportPlanSimpleResponse
   */
  async listEnterpriseSupportPlanSimpleWithOptions(request: $_model.ListEnterpriseSupportPlanSimpleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListEnterpriseSupportPlanSimpleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNum)) {
      body["pageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEnterpriseSupportPlanSimple",
      version: "2023-12-28",
      protocol: "HTTPS",
      pathname: `/customerWorkbench/pop/api/enterpriseSupport/listEnterpriseSupportPlanSimple`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEnterpriseSupportPlanSimpleResponse>(await this.callApi(params, req, runtime), new $_model.ListEnterpriseSupportPlanSimpleResponse({}));
  }

  /**
   * 获取我的企业支持计划(下拉)
   * 
   * @param request - ListEnterpriseSupportPlanSimpleRequest
   * @returns ListEnterpriseSupportPlanSimpleResponse
   */
  async listEnterpriseSupportPlanSimple(request: $_model.ListEnterpriseSupportPlanSimpleRequest): Promise<$_model.ListEnterpriseSupportPlanSimpleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEnterpriseSupportPlanSimpleWithOptions(request, headers, runtime);
  }

  /**
   * 获取专家服务列表
   * 
   * @param request - ListServiceApplyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceApplyResponse
   */
  async listServiceApplyWithOptions(request: $_model.ListServiceApplyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceApplyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applyType)) {
      body["applyType"] = request.applyType;
    }

    if (!$dara.isNull(request.endDate)) {
      body["endDate"] = request.endDate;
    }

    if (!$dara.isNull(request.pageNum)) {
      body["pageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productCode)) {
      body["productCode"] = request.productCode;
    }

    if (!$dara.isNull(request.startDate)) {
      body["startDate"] = request.startDate;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceApply",
      version: "2023-12-28",
      protocol: "HTTPS",
      pathname: `/customerWorkbench/pop/api/expert/service/listServiceApply`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceApplyResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceApplyResponse({}));
  }

  /**
   * 获取专家服务列表
   * 
   * @param request - ListServiceApplyRequest
   * @returns ListServiceApplyResponse
   */
  async listServiceApply(request: $_model.ListServiceApplyRequest): Promise<$_model.ListServiceApplyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceApplyWithOptions(request, headers, runtime);
  }

  /**
   * 通过UID分页获取云企任务单
   * 
   * @param request - ListYunQiTaskByUidRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListYunQiTaskByUidResponse
   */
  async listYunQiTaskByUidWithOptions(request: $_model.ListYunQiTaskByUidRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListYunQiTaskByUidResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createTimeEnd)) {
      body["createTimeEnd"] = request.createTimeEnd;
    }

    if (!$dara.isNull(request.createTimeStart)) {
      body["createTimeStart"] = request.createTimeStart;
    }

    if (!$dara.isNull(request.freeOrderApplyCodes)) {
      body["freeOrderApplyCodes"] = request.freeOrderApplyCodes;
    }

    if (!$dara.isNull(request.freeOrderApplyIds)) {
      body["freeOrderApplyIds"] = request.freeOrderApplyIds;
    }

    if (!$dara.isNull(request.orderIds)) {
      body["orderIds"] = request.orderIds;
    }

    if (!$dara.isNull(request.pageNum)) {
      body["pageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.statusList)) {
      body["statusList"] = request.statusList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListYunQiTaskByUid",
      version: "2023-12-28",
      protocol: "HTTPS",
      pathname: `/customerWorkbench/pop/api/record/listYunQiTaskByUid`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListYunQiTaskByUidResponse>(await this.callApi(params, req, runtime), new $_model.ListYunQiTaskByUidResponse({}));
  }

  /**
   * 通过UID分页获取云企任务单
   * 
   * @param request - ListYunQiTaskByUidRequest
   * @returns ListYunQiTaskByUidResponse
   */
  async listYunQiTaskByUid(request: $_model.ListYunQiTaskByUidRequest): Promise<$_model.ListYunQiTaskByUidResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listYunQiTaskByUidWithOptions(request, headers, runtime);
  }

}
