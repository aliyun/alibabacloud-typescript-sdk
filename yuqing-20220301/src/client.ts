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
    this._endpoint = this.getEndpoint("yuqing", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 关闭舆情产品
   * 
   * @param request - CloseProductRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseProductResponse
   */
  async closeProductWithOptions(request: $_model.CloseProductRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CloseProductResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.requestId)) {
      query["requestId"] = request.requestId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.productInstance)) {
      body["productInstance"] = request.productInstance;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloseProduct",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/closeProduct.json`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloseProductResponse>(await this.callApi(params, req, runtime), new $_model.CloseProductResponse({}));
  }

  /**
   * 关闭舆情产品
   * 
   * @param request - CloseProductRequest
   * @returns CloseProductResponse
   */
  async closeProduct(request: $_model.CloseProductRequest): Promise<$_model.CloseProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.closeProductWithOptions(request, headers, runtime);
  }

  /**
   * 控制台统一代理API
   * 
   * @param request - ConsoleApiProxyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConsoleApiProxyResponse
   */
  async consoleApiProxyWithOptions(request: $_model.ConsoleApiProxyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ConsoleApiProxyResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConsoleApiProxy",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/consoleApiProxy.json`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConsoleApiProxyResponse>(await this.callApi(params, req, runtime), new $_model.ConsoleApiProxyResponse({}));
  }

  /**
   * 控制台统一代理API
   * 
   * @param request - ConsoleApiProxyRequest
   * @returns ConsoleApiProxyResponse
   */
  async consoleApiProxy(request: $_model.ConsoleApiProxyRequest): Promise<$_model.ConsoleApiProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.consoleApiProxyWithOptions(request, headers, runtime);
  }

  /**
   * 控制台统一代理API
   * 
   * @deprecated OpenAPI ConsoleProxy is deprecated
   * 
   * @param request - ConsoleProxyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConsoleProxyResponse
   */
  async consoleProxyWithOptions(request: $_model.ConsoleProxyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ConsoleProxyResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.requestId)) {
      query["requestId"] = request.requestId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appCode)) {
      body["appCode"] = request.appCode;
    }

    if (!$dara.isNull(request.interfaceName)) {
      body["interfaceName"] = request.interfaceName;
    }

    if (!$dara.isNull(request.paramJson)) {
      body["paramJson"] = request.paramJson;
    }

    if (!$dara.isNull(request.teamHashId)) {
      body["teamHashId"] = request.teamHashId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConsoleProxy",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/consoleProxy.json`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConsoleProxyResponse>(await this.callApi(params, req, runtime), new $_model.ConsoleProxyResponse({}));
  }

  /**
   * 控制台统一代理API
   * 
   * @deprecated OpenAPI ConsoleProxy is deprecated
   * 
   * @param request - ConsoleProxyRequest
   * @returns ConsoleProxyResponse
   */
  // Deprecated
  async consoleProxy(request: $_model.ConsoleProxyRequest): Promise<$_model.ConsoleProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.consoleProxyWithOptions(request, headers, runtime);
  }

  /**
   * 读取分析组件计算任务结果
   * 
   * @param request - GetAnalysisTaskResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAnalysisTaskResultResponse
   */
  async getAnalysisTaskResultWithOptions(request: $_model.GetAnalysisTaskResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAnalysisTaskResultResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.analysisId)) {
      query["analysisId"] = request.analysisId;
    }

    if (!$dara.isNull(request.requestId)) {
      query["requestId"] = request.requestId;
    }

    if (!$dara.isNull(request.teamHashId)) {
      query["teamHashId"] = request.teamHashId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAnalysisTaskResult",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/getAnalysisComponentResult.json`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAnalysisTaskResultResponse>(await this.callApi(params, req, runtime), new $_model.GetAnalysisTaskResultResponse({}));
  }

  /**
   * 读取分析组件计算任务结果
   * 
   * @param request - GetAnalysisTaskResultRequest
   * @returns GetAnalysisTaskResultResponse
   */
  async getAnalysisTaskResult(request: $_model.GetAnalysisTaskResultRequest): Promise<$_model.GetAnalysisTaskResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAnalysisTaskResultWithOptions(request, headers, runtime);
  }

  /**
   * 开通舆情产品
   * 
   * @param request - OpenProductRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenProductResponse
   */
  async openProductWithOptions(request: $_model.OpenProductRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.OpenProductResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.requestId)) {
      query["requestId"] = request.requestId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.productInstance)) {
      body["productInstance"] = request.productInstance;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenProduct",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/openProduct.json`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenProductResponse>(await this.callApi(params, req, runtime), new $_model.OpenProductResponse({}));
  }

  /**
   * 开通舆情产品
   * 
   * @param request - OpenProductRequest
   * @returns OpenProductResponse
   */
  async openProduct(request: $_model.OpenProductRequest): Promise<$_model.OpenProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.openProductWithOptions(request, headers, runtime);
  }

  /**
   * 查询产品开通实例列表
   * 
   * @param request - QueryProductInstanceListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryProductInstanceListResponse
   */
  async queryProductInstanceListWithOptions(request: $_model.QueryProductInstanceListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryProductInstanceListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appCode)) {
      query["appCode"] = request.appCode;
    }

    if (!$dara.isNull(request.fromTime)) {
      query["fromTime"] = request.fromTime;
    }

    if (!$dara.isNull(request.requestId)) {
      query["requestId"] = request.requestId;
    }

    if (!$dara.isNull(request.tenantUid)) {
      query["tenantUid"] = request.tenantUid;
    }

    if (!$dara.isNull(request.toTime)) {
      query["toTime"] = request.toTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryProductInstanceList",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/queryProductInstanceList.json`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryProductInstanceListResponse>(await this.callApi(params, req, runtime), new $_model.QueryProductInstanceListResponse({}));
  }

  /**
   * 查询产品开通实例列表
   * 
   * @param request - QueryProductInstanceListRequest
   * @returns QueryProductInstanceListResponse
   */
  async queryProductInstanceList(request: $_model.QueryProductInstanceListRequest): Promise<$_model.QueryProductInstanceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryProductInstanceListWithOptions(request, headers, runtime);
  }

  /**
   * 查询舆情文章列表
   * 
   * @param request - QueryYuqingMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryYuqingMessageResponse
   */
  async queryYuqingMessageWithOptions(request: $_model.QueryYuqingMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryYuqingMessageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.requestId)) {
      query["requestId"] = request.requestId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.searchCondition)) {
      body["searchCondition"] = request.searchCondition;
    }

    if (!$dara.isNull(request.teamHashId)) {
      body["teamHashId"] = request.teamHashId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryYuqingMessage",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/queryYuqingMessage.json`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryYuqingMessageResponse>(await this.callApi(params, req, runtime), new $_model.QueryYuqingMessageResponse({}));
  }

  /**
   * 查询舆情文章列表
   * 
   * @param request - QueryYuqingMessageRequest
   * @returns QueryYuqingMessageResponse
   */
  async queryYuqingMessage(request: $_model.QueryYuqingMessageRequest): Promise<$_model.QueryYuqingMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryYuqingMessageWithOptions(request, headers, runtime);
  }

  /**
   * 提交分析组件计算任务
   * 
   * @param request - SubmitAnalysisTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAnalysisTaskResponse
   */
  async submitAnalysisTaskWithOptions(request: $_model.SubmitAnalysisTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitAnalysisTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.requestId)) {
      query["requestId"] = request.requestId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.analyseType)) {
      body["analyseType"] = request.analyseType;
    }

    if (!$dara.isNull(request.searchCondition)) {
      body["searchCondition"] = request.searchCondition;
    }

    if (!$dara.isNull(request.teamHashId)) {
      body["teamHashId"] = request.teamHashId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitAnalysisTask",
      version: "2022-03-01",
      protocol: "HTTPS",
      pathname: `/openapi/aliyun/submitAnalysisComponent.json`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitAnalysisTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitAnalysisTaskResponse({}));
  }

  /**
   * 提交分析组件计算任务
   * 
   * @param request - SubmitAnalysisTaskRequest
   * @returns SubmitAnalysisTaskResponse
   */
  async submitAnalysisTask(request: $_model.SubmitAnalysisTaskRequest): Promise<$_model.SubmitAnalysisTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitAnalysisTaskWithOptions(request, headers, runtime);
  }

}
