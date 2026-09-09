// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("agenticbas", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建渗透测试任务
   * 
   * @param tmpReq - CreatePentestTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePentestTaskResponse
   */
  async createPentestTaskWithOptions(tmpReq: $_model.CreatePentestTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePentestTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePentestTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.operationInput)) {
      request.operationInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationInput, "OperationInput", "json");
    }

    let query = { };
    if (!$dara.isNull(request.operationInputShrink)) {
      query["OperationInput"] = request.operationInputShrink;
    }

    if (!$dara.isNull(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePentestTask",
      version: "2026-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePentestTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreatePentestTaskResponse({}));
  }

  /**
   * 创建渗透测试任务
   * 
   * @param request - CreatePentestTaskRequest
   * @returns CreatePentestTaskResponse
   */
  async createPentestTask(request: $_model.CreatePentestTaskRequest): Promise<$_model.CreatePentestTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPentestTaskWithOptions(request, runtime);
  }

  /**
   * 查询渗透测试报告内容
   * 
   * @param tmpReq - DescribePentestReportContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePentestReportContentResponse
   */
  async describePentestReportContentWithOptions(tmpReq: $_model.DescribePentestReportContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePentestReportContentResponse> {
    tmpReq.validate();
    let request = new $_model.DescribePentestReportContentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.operationInput)) {
      request.operationInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationInput, "OperationInput", "json");
    }

    let query = { };
    if (!$dara.isNull(request.operationInputShrink)) {
      query["OperationInput"] = request.operationInputShrink;
    }

    if (!$dara.isNull(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePentestReportContent",
      version: "2026-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePentestReportContentResponse>(await this.callApi(params, req, runtime), new $_model.DescribePentestReportContentResponse({}));
  }

  /**
   * 查询渗透测试报告内容
   * 
   * @param request - DescribePentestReportContentRequest
   * @returns DescribePentestReportContentResponse
   */
  async describePentestReportContent(request: $_model.DescribePentestReportContentRequest): Promise<$_model.DescribePentestReportContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePentestReportContentWithOptions(request, runtime);
  }

  /**
   * 查询渗透测试任务列表
   * 
   * @param tmpReq - DescribePentestTaskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePentestTaskListResponse
   */
  async describePentestTaskListWithOptions(tmpReq: $_model.DescribePentestTaskListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePentestTaskListResponse> {
    tmpReq.validate();
    let request = new $_model.DescribePentestTaskListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.operationInput)) {
      request.operationInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationInput, "OperationInput", "json");
    }

    let query = { };
    if (!$dara.isNull(request.operationInputShrink)) {
      query["OperationInput"] = request.operationInputShrink;
    }

    if (!$dara.isNull(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePentestTaskList",
      version: "2026-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePentestTaskListResponse>(await this.callApi(params, req, runtime), new $_model.DescribePentestTaskListResponse({}));
  }

  /**
   * 查询渗透测试任务列表
   * 
   * @param request - DescribePentestTaskListRequest
   * @returns DescribePentestTaskListResponse
   */
  async describePentestTaskList(request: $_model.DescribePentestTaskListRequest): Promise<$_model.DescribePentestTaskListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePentestTaskListWithOptions(request, runtime);
  }

  /**
   * 查询渗透测试漏洞列表
   * 
   * @param tmpReq - DescribePentestVulnListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePentestVulnListResponse
   */
  async describePentestVulnListWithOptions(tmpReq: $_model.DescribePentestVulnListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePentestVulnListResponse> {
    tmpReq.validate();
    let request = new $_model.DescribePentestVulnListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.operationInput)) {
      request.operationInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationInput, "OperationInput", "json");
    }

    let query = { };
    if (!$dara.isNull(request.operationInputShrink)) {
      query["OperationInput"] = request.operationInputShrink;
    }

    if (!$dara.isNull(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePentestVulnList",
      version: "2026-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePentestVulnListResponse>(await this.callApi(params, req, runtime), new $_model.DescribePentestVulnListResponse({}));
  }

  /**
   * 查询渗透测试漏洞列表
   * 
   * @param request - DescribePentestVulnListRequest
   * @returns DescribePentestVulnListResponse
   */
  async describePentestVulnList(request: $_model.DescribePentestVulnListRequest): Promise<$_model.DescribePentestVulnListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePentestVulnListWithOptions(request, runtime);
  }

}
