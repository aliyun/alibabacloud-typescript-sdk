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
    this._endpoint = this.getEndpoint("umeng-finplus", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 提交数据集任务，校验数据集
   * 
   * @param request - BuildStsAKRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BuildStsAKResponse
   */
  async buildStsAKWithOptions(request: $_model.BuildStsAKRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BuildStsAKResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "BuildStsAK",
      version: "2022-09-13",
      protocol: "HTTPS",
      pathname: `/bc/buildStsAK`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BuildStsAKResponse>(await this.callApi(params, req, runtime), new $_model.BuildStsAKResponse({}));
  }

  /**
   * 提交数据集任务，校验数据集
   * 
   * @param request - BuildStsAKRequest
   * @returns BuildStsAKResponse
   */
  async buildStsAK(request: $_model.BuildStsAKRequest): Promise<$_model.BuildStsAKResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.buildStsAKWithOptions(request, headers, runtime);
  }

  /**
   * 提交数据集任务，校验数据集
   * 
   * @param request - BuildStsAK2Request
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BuildStsAK2Response
   */
  async buildStsAK2WithOptions(request: $_model.BuildStsAK2Request, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BuildStsAK2Response> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      body["clientId"] = request.clientId;
    }

    if (!$dara.isNull(request.dataSetId)) {
      body["dataSetId"] = request.dataSetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BuildStsAK2",
      version: "2022-09-13",
      protocol: "HTTPS",
      pathname: `/bc/buildStsAK2`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BuildStsAK2Response>(await this.callApi(params, req, runtime), new $_model.BuildStsAK2Response({}));
  }

  /**
   * 提交数据集任务，校验数据集
   * 
   * @param request - BuildStsAK2Request
   * @returns BuildStsAK2Response
   */
  async buildStsAK2(request: $_model.BuildStsAK2Request): Promise<$_model.BuildStsAK2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.buildStsAK2WithOptions(request, headers, runtime);
  }

  /**
   * 取消批量计算任务
   * 
   * @param request - CancelTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelTaskResponse
   */
  async cancelTaskWithOptions(request: $_model.CancelTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CancelTaskResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelTask",
      version: "2022-09-13",
      protocol: "HTTPS",
      pathname: `/bc/cancelTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelTaskResponse>(await this.callApi(params, req, runtime), new $_model.CancelTaskResponse({}));
  }

  /**
   * 取消批量计算任务
   * 
   * @param request - CancelTaskRequest
   * @returns CancelTaskResponse
   */
  async cancelTask(request: $_model.CancelTaskRequest): Promise<$_model.CancelTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelTaskWithOptions(request, headers, runtime);
  }

  /**
   * 取消批量计算任务
   * 
   * @param request - CancelTask2Request
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelTask2Response
   */
  async cancelTask2WithOptions(request: $_model.CancelTask2Request, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CancelTask2Response> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bcId)) {
      body["bcId"] = request.bcId;
    }

    if (!$dara.isNull(request.clientId)) {
      body["clientId"] = request.clientId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelTask2",
      version: "2022-09-13",
      protocol: "HTTPS",
      pathname: `/bc/cancelTask2`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelTask2Response>(await this.callApi(params, req, runtime), new $_model.CancelTask2Response({}));
  }

  /**
   * 取消批量计算任务
   * 
   * @param request - CancelTask2Request
   * @returns CancelTask2Response
   */
  async cancelTask2(request: $_model.CancelTask2Request): Promise<$_model.CancelTask2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelTask2WithOptions(request, headers, runtime);
  }

  /**
   * 创建批量计算任务
   * 
   * @param request - CreateComputeTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateComputeTaskResponse
   */
  async createComputeTaskWithOptions(request: $_model.CreateComputeTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateComputeTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!$dara.isNull(request.dataSetIds)) {
      body["dataSetIds"] = request.dataSetIds;
    }

    if (!$dara.isNull(request.morseInfoList)) {
      body["morseInfoList"] = request.morseInfoList;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.remarks)) {
      body["remarks"] = request.remarks;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateComputeTask",
      version: "2022-09-13",
      protocol: "HTTPS",
      pathname: `/bc/createComputeTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateComputeTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateComputeTaskResponse({}));
  }

  /**
   * 创建批量计算任务
   * 
   * @param request - CreateComputeTaskRequest
   * @returns CreateComputeTaskResponse
   */
  async createComputeTask(request: $_model.CreateComputeTaskRequest): Promise<$_model.CreateComputeTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createComputeTaskWithOptions(request, headers, runtime);
  }

  /**
   * 创建批量计算任务
   * 
   * @param request - CreateComputeTask2Request
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateComputeTask2Response
   */
  async createComputeTask2WithOptions(request: $_model.CreateComputeTask2Request, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateComputeTask2Response> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!$dara.isNull(request.clientId)) {
      body["clientId"] = request.clientId;
    }

    if (!$dara.isNull(request.dataSetIds)) {
      body["dataSetIds"] = request.dataSetIds;
    }

    if (!$dara.isNull(request.morseInfoList)) {
      body["morseInfoList"] = request.morseInfoList;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.remarks)) {
      body["remarks"] = request.remarks;
    }

    if (!$dara.isNull(request.taskSource)) {
      body["taskSource"] = request.taskSource;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateComputeTask2",
      version: "2022-09-13",
      protocol: "HTTPS",
      pathname: `/bc/createComputeTask2`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateComputeTask2Response>(await this.callApi(params, req, runtime), new $_model.CreateComputeTask2Response({}));
  }

  /**
   * 创建批量计算任务
   * 
   * @param request - CreateComputeTask2Request
   * @returns CreateComputeTask2Response
   */
  async createComputeTask2(request: $_model.CreateComputeTask2Request): Promise<$_model.CreateComputeTask2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createComputeTask2WithOptions(request, headers, runtime);
  }

  /**
   * 创建数据集
   * 
   * @param request - CreateDataSetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataSetResponse
   */
  async createDataSetWithOptions(request: $_model.CreateDataSetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataSetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataSet",
      version: "2022-09-13",
      protocol: "HTTPS",
      pathname: `/bc/createDataSet`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataSetResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataSetResponse({}));
  }

  /**
   * 创建数据集
   * 
   * @param request - CreateDataSetRequest
   * @returns CreateDataSetResponse
   */
  async createDataSet(request: $_model.CreateDataSetRequest): Promise<$_model.CreateDataSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDataSetWithOptions(request, headers, runtime);
  }

  /**
   * 创建数据集
   * 
   * @param request - CreateDataSet2Request
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataSet2Response
   */
  async createDataSet2WithOptions(request: $_model.CreateDataSet2Request, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataSet2Response> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      body["clientId"] = request.clientId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataSet2",
      version: "2022-09-13",
      protocol: "HTTPS",
      pathname: `/bc/createDataSet2`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataSet2Response>(await this.callApi(params, req, runtime), new $_model.CreateDataSet2Response({}));
  }

  /**
   * 创建数据集
   * 
   * @param request - CreateDataSet2Request
   * @returns CreateDataSet2Response
   */
  async createDataSet2(request: $_model.CreateDataSet2Request): Promise<$_model.CreateDataSet2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDataSet2WithOptions(request, headers, runtime);
  }

  /**
   * 友准达-创建知识库
   * 
   * @param tmpReq - CreateKnowLedgeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateKnowLedgeResponse
   */
  async createKnowLedgeWithOptions(tmpReq: $_model.CreateKnowLedgeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateKnowLedgeResponse> {
    tmpReq.validate();
    let request = new $_model.CreateKnowLedgeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateKnowLedge",
      version: "2022-09-13",
      protocol: "HTTPS",
      pathname: `/yzd/createKnowLedge`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateKnowLedgeResponse>(await this.callApi(params, req, runtime), new $_model.CreateKnowLedgeResponse({}));
  }

  /**
   * 友准达-创建知识库
   * 
   * @param request - CreateKnowLedgeRequest
   * @returns CreateKnowLedgeResponse
   */
  async createKnowLedge(request: $_model.CreateKnowLedgeRequest): Promise<$_model.CreateKnowLedgeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createKnowLedgeWithOptions(request, headers, runtime);
  }

  /**
   * 加密调用OpenAPI
   * 
   * @param request - EncryptInvokeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EncryptInvokeResponse
   */
  async encryptInvokeWithOptions(request: $_model.EncryptInvokeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EncryptInvokeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      body["clientId"] = request.clientId;
    }

    if (!$dara.isNull(request.data)) {
      body["data"] = request.data;
    }

    if (!$dara.isNull(request.encryptKey)) {
      body["encryptKey"] = request.encryptKey;
    }

    if (!$dara.isNull(request.methodName)) {
      body["methodName"] = request.methodName;
    }

    if (!$dara.isNull(request.sign)) {
      body["sign"] = request.sign;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EncryptInvoke",
      version: "2022-09-13",
      protocol: "HTTPS",
      pathname: `/bc/encryptInvoke`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.EncryptInvokeResponse>(await this.callApi(params, req, runtime), new $_model.EncryptInvokeResponse({}));
  }

  /**
   * 加密调用OpenAPI
   * 
   * @param request - EncryptInvokeRequest
   * @returns EncryptInvokeResponse
   */
  async encryptInvoke(request: $_model.EncryptInvokeRequest): Promise<$_model.EncryptInvokeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.encryptInvokeWithOptions(request, headers, runtime);
  }

  /**
   * 获取人群集信息
   * 
   * @param tmpReq - GetCrowdDatasetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCrowdDatasetResponse
   */
  async getCrowdDatasetWithOptions(tmpReq: $_model.GetCrowdDatasetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCrowdDatasetResponse> {
    tmpReq.validate();
    let request = new $_model.GetCrowdDatasetShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      query["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCrowdDataset",
      version: "2022-09-13",
      protocol: "HTTPS",
      pathname: `/yzd/getCrowdDataset`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCrowdDatasetResponse>(await this.callApi(params, req, runtime), new $_model.GetCrowdDatasetResponse({}));
  }

  /**
   * 获取人群集信息
   * 
   * @param request - GetCrowdDatasetRequest
   * @returns GetCrowdDatasetResponse
   */
  async getCrowdDataset(request: $_model.GetCrowdDatasetRequest): Promise<$_model.GetCrowdDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCrowdDatasetWithOptions(request, headers, runtime);
  }

  /**
   * 获取知识库数据数据
   * 
   * @param tmpReq - GetKnowledgeDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKnowledgeDataResponse
   */
  async getKnowledgeDataWithOptions(tmpReq: $_model.GetKnowledgeDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetKnowledgeDataResponse> {
    tmpReq.validate();
    let request = new $_model.GetKnowledgeDataShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      query["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetKnowledgeData",
      version: "2022-09-13",
      protocol: "HTTPS",
      pathname: `/yzd/getKnowledgeData`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetKnowledgeDataResponse>(await this.callApi(params, req, runtime), new $_model.GetKnowledgeDataResponse({}));
  }

  /**
   * 获取知识库数据数据
   * 
   * @param request - GetKnowledgeDataRequest
   * @returns GetKnowledgeDataResponse
   */
  async getKnowledgeData(request: $_model.GetKnowledgeDataRequest): Promise<$_model.GetKnowledgeDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getKnowledgeDataWithOptions(request, headers, runtime);
  }

  /**
   * 获取实例结果
   * 
   * @param tmpReq - GetYzdInstanceTaskResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetYzdInstanceTaskResultResponse
   */
  async getYzdInstanceTaskResultWithOptions(tmpReq: $_model.GetYzdInstanceTaskResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetYzdInstanceTaskResultResponse> {
    tmpReq.validate();
    let request = new $_model.GetYzdInstanceTaskResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      query["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetYzdInstanceTaskResult",
      version: "2022-09-13",
      protocol: "HTTPS",
      pathname: `/yzd/getYzdInstanceTaskResult`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetYzdInstanceTaskResultResponse>(await this.callApi(params, req, runtime), new $_model.GetYzdInstanceTaskResultResponse({}));
  }

  /**
   * 获取实例结果
   * 
   * @param request - GetYzdInstanceTaskResultRequest
   * @returns GetYzdInstanceTaskResultResponse
   */
  async getYzdInstanceTaskResult(request: $_model.GetYzdInstanceTaskResultRequest): Promise<$_model.GetYzdInstanceTaskResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getYzdInstanceTaskResultWithOptions(request, headers, runtime);
  }

  /**
   * 友准达知识库获取上传OSS数据文件的TOKEN
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetYzdStsAKResponse
   */
  async getYzdStsAKWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetYzdStsAKResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetYzdStsAK",
      version: "2022-09-13",
      protocol: "HTTPS",
      pathname: `/yzd/getYzdStsAK`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetYzdStsAKResponse>(await this.callApi(params, req, runtime), new $_model.GetYzdStsAKResponse({}));
  }

  /**
   * 友准达知识库获取上传OSS数据文件的TOKEN
   * @returns GetYzdStsAKResponse
   */
  async getYzdStsAK(): Promise<$_model.GetYzdStsAKResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getYzdStsAKWithOptions(headers, runtime);
  }

  /**
   * 查询单个批量任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListComputeTaskResponse
   */
  async listComputeTaskWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListComputeTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListComputeTask",
      version: "2022-09-13",
      protocol: "HTTPS",
      pathname: `/bc/listComputeTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListComputeTaskResponse>(await this.callApi(params, req, runtime), new $_model.ListComputeTaskResponse({}));
  }

  /**
   * 查询单个批量任务
   * @returns ListComputeTaskResponse
   */
  async listComputeTask(): Promise<$_model.ListComputeTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listComputeTaskWithOptions(headers, runtime);
  }

  /**
   * 查询单个批量任务
   * 
   * @param request - ListComputeTask2Request
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListComputeTask2Response
   */
  async listComputeTask2WithOptions(request: $_model.ListComputeTask2Request, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListComputeTask2Response> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      body["clientId"] = request.clientId;
    }

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
      action: "ListComputeTask2",
      version: "2022-09-13",
      protocol: "HTTPS",
      pathname: `/bc/listComputeTask2`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListComputeTask2Response>(await this.callApi(params, req, runtime), new $_model.ListComputeTask2Response({}));
  }

  /**
   * 查询单个批量任务
   * 
   * @param request - ListComputeTask2Request
   * @returns ListComputeTask2Response
   */
  async listComputeTask2(request: $_model.ListComputeTask2Request): Promise<$_model.ListComputeTask2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listComputeTask2WithOptions(request, headers, runtime);
  }

  /**
   * 查询单个数据集
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSetResponse
   */
  async listDataSetWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataSetResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataSet",
      version: "2022-09-13",
      protocol: "HTTPS",
      pathname: `/bc/listDataSet`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataSetResponse>(await this.callApi(params, req, runtime), new $_model.ListDataSetResponse({}));
  }

  /**
   * 查询单个数据集
   * @returns ListDataSetResponse
   */
  async listDataSet(): Promise<$_model.ListDataSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataSetWithOptions(headers, runtime);
  }

  /**
   * 查询单个数据集
   * 
   * @param request - ListDataSet2Request
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSet2Response
   */
  async listDataSet2WithOptions(request: $_model.ListDataSet2Request, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataSet2Response> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      body["clientId"] = request.clientId;
    }

    if (!$dara.isNull(request.pageNo)) {
      body["pageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataSet2",
      version: "2022-09-13",
      protocol: "HTTPS",
      pathname: `/bc/listDataSet2`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataSet2Response>(await this.callApi(params, req, runtime), new $_model.ListDataSet2Response({}));
  }

  /**
   * 查询单个数据集
   * 
   * @param request - ListDataSet2Request
   * @returns ListDataSet2Response
   */
  async listDataSet2(request: $_model.ListDataSet2Request): Promise<$_model.ListDataSet2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataSet2WithOptions(request, headers, runtime);
  }

  /**
   * 删除数据集
   * 
   * @param request - RemoveDataSetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveDataSetResponse
   */
  async removeDataSetWithOptions(request: $_model.RemoveDataSetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveDataSetResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveDataSet",
      version: "2022-09-13",
      protocol: "HTTPS",
      pathname: `/bc/removeDataSet`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveDataSetResponse>(await this.callApi(params, req, runtime), new $_model.RemoveDataSetResponse({}));
  }

  /**
   * 删除数据集
   * 
   * @param request - RemoveDataSetRequest
   * @returns RemoveDataSetResponse
   */
  async removeDataSet(request: $_model.RemoveDataSetRequest): Promise<$_model.RemoveDataSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeDataSetWithOptions(request, headers, runtime);
  }

  /**
   * 删除数据集
   * 
   * @param request - RemoveDataSet2Request
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveDataSet2Response
   */
  async removeDataSet2WithOptions(request: $_model.RemoveDataSet2Request, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveDataSet2Response> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      body["clientId"] = request.clientId;
    }

    if (!$dara.isNull(request.dataSetId)) {
      body["dataSetId"] = request.dataSetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveDataSet2",
      version: "2022-09-13",
      protocol: "HTTPS",
      pathname: `/bc/removeDataSet2`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveDataSet2Response>(await this.callApi(params, req, runtime), new $_model.RemoveDataSet2Response({}));
  }

  /**
   * 删除数据集
   * 
   * @param request - RemoveDataSet2Request
   * @returns RemoveDataSet2Response
   */
  async removeDataSet2(request: $_model.RemoveDataSet2Request): Promise<$_model.RemoveDataSet2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeDataSet2WithOptions(request, headers, runtime);
  }

  /**
   * 创建人群集并绑定数据集
   * 
   * @param tmpReq - SaveCrowdDatasetAndBindingDatasetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveCrowdDatasetAndBindingDatasetResponse
   */
  async saveCrowdDatasetAndBindingDatasetWithOptions(tmpReq: $_model.SaveCrowdDatasetAndBindingDatasetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SaveCrowdDatasetAndBindingDatasetResponse> {
    tmpReq.validate();
    let request = new $_model.SaveCrowdDatasetAndBindingDatasetShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveCrowdDatasetAndBindingDataset",
      version: "2022-09-13",
      protocol: "HTTPS",
      pathname: `/yzd/saveCrowdDatasetAndBindingDataset`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveCrowdDatasetAndBindingDatasetResponse>(await this.callApi(params, req, runtime), new $_model.SaveCrowdDatasetAndBindingDatasetResponse({}));
  }

  /**
   * 创建人群集并绑定数据集
   * 
   * @param request - SaveCrowdDatasetAndBindingDatasetRequest
   * @returns SaveCrowdDatasetAndBindingDatasetResponse
   */
  async saveCrowdDatasetAndBindingDataset(request: $_model.SaveCrowdDatasetAndBindingDatasetRequest): Promise<$_model.SaveCrowdDatasetAndBindingDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.saveCrowdDatasetAndBindingDatasetWithOptions(request, headers, runtime);
  }

  /**
   * 查询单个批量任务
   * 
   * @param request - SelectComputeTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SelectComputeTaskResponse
   */
  async selectComputeTaskWithOptions(request: $_model.SelectComputeTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SelectComputeTaskResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "SelectComputeTask",
      version: "2022-09-13",
      protocol: "HTTPS",
      pathname: `/bc/selectComputeTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SelectComputeTaskResponse>(await this.callApi(params, req, runtime), new $_model.SelectComputeTaskResponse({}));
  }

  /**
   * 查询单个批量任务
   * 
   * @param request - SelectComputeTaskRequest
   * @returns SelectComputeTaskResponse
   */
  async selectComputeTask(request: $_model.SelectComputeTaskRequest): Promise<$_model.SelectComputeTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.selectComputeTaskWithOptions(request, headers, runtime);
  }

  /**
   * 查询单个批量任务
   * 
   * @param request - SelectComputeTask2Request
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SelectComputeTask2Response
   */
  async selectComputeTask2WithOptions(request: $_model.SelectComputeTask2Request, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SelectComputeTask2Response> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bcConfirm)) {
      body["bcConfirm"] = request.bcConfirm;
    }

    if (!$dara.isNull(request.bcId)) {
      body["bcId"] = request.bcId;
    }

    if (!$dara.isNull(request.clientId)) {
      body["clientId"] = request.clientId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SelectComputeTask2",
      version: "2022-09-13",
      protocol: "HTTPS",
      pathname: `/bc/selectComputeTask2`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SelectComputeTask2Response>(await this.callApi(params, req, runtime), new $_model.SelectComputeTask2Response({}));
  }

  /**
   * 查询单个批量任务
   * 
   * @param request - SelectComputeTask2Request
   * @returns SelectComputeTask2Response
   */
  async selectComputeTask2(request: $_model.SelectComputeTask2Request): Promise<$_model.SelectComputeTask2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.selectComputeTask2WithOptions(request, headers, runtime);
  }

  /**
   * 查询单个数据集
   * 
   * @param request - SelectDataSetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SelectDataSetResponse
   */
  async selectDataSetWithOptions(request: $_model.SelectDataSetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SelectDataSetResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "SelectDataSet",
      version: "2022-09-13",
      protocol: "HTTPS",
      pathname: `/bc/selectDataSet`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SelectDataSetResponse>(await this.callApi(params, req, runtime), new $_model.SelectDataSetResponse({}));
  }

  /**
   * 查询单个数据集
   * 
   * @param request - SelectDataSetRequest
   * @returns SelectDataSetResponse
   */
  async selectDataSet(request: $_model.SelectDataSetRequest): Promise<$_model.SelectDataSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.selectDataSetWithOptions(request, headers, runtime);
  }

  /**
   * 查询单个数据集
   * 
   * @param request - SelectDataSet2Request
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SelectDataSet2Response
   */
  async selectDataSet2WithOptions(request: $_model.SelectDataSet2Request, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SelectDataSet2Response> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      body["clientId"] = request.clientId;
    }

    if (!$dara.isNull(request.dataSetId)) {
      body["dataSetId"] = request.dataSetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SelectDataSet2",
      version: "2022-09-13",
      protocol: "HTTPS",
      pathname: `/bc/selectDataSet2`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SelectDataSet2Response>(await this.callApi(params, req, runtime), new $_model.SelectDataSet2Response({}));
  }

  /**
   * 查询单个数据集
   * 
   * @param request - SelectDataSet2Request
   * @returns SelectDataSet2Response
   */
  async selectDataSet2(request: $_model.SelectDataSet2Request): Promise<$_model.SelectDataSet2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.selectDataSet2WithOptions(request, headers, runtime);
  }

  /**
   * 提交数据集任务，校验数据集
   * 
   * @param request - SubmitDataSetTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitDataSetTaskResponse
   */
  async submitDataSetTaskWithOptions(request: $_model.SubmitDataSetTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitDataSetTaskResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitDataSetTask",
      version: "2022-09-13",
      protocol: "HTTPS",
      pathname: `/bc/submitDataSetTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitDataSetTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitDataSetTaskResponse({}));
  }

  /**
   * 提交数据集任务，校验数据集
   * 
   * @param request - SubmitDataSetTaskRequest
   * @returns SubmitDataSetTaskResponse
   */
  async submitDataSetTask(request: $_model.SubmitDataSetTaskRequest): Promise<$_model.SubmitDataSetTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitDataSetTaskWithOptions(request, headers, runtime);
  }

  /**
   * 提交数据集任务，校验数据集
   * 
   * @param request - SubmitDataSetTask2Request
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitDataSetTask2Response
   */
  async submitDataSetTask2WithOptions(request: $_model.SubmitDataSetTask2Request, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitDataSetTask2Response> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      body["clientId"] = request.clientId;
    }

    if (!$dara.isNull(request.dataSetId)) {
      body["dataSetId"] = request.dataSetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitDataSetTask2",
      version: "2022-09-13",
      protocol: "HTTPS",
      pathname: `/bc/submitDataSetTask2`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitDataSetTask2Response>(await this.callApi(params, req, runtime), new $_model.SubmitDataSetTask2Response({}));
  }

  /**
   * 提交数据集任务，校验数据集
   * 
   * @param request - SubmitDataSetTask2Request
   * @returns SubmitDataSetTask2Response
   */
  async submitDataSetTask2(request: $_model.SubmitDataSetTask2Request): Promise<$_model.SubmitDataSetTask2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitDataSetTask2WithOptions(request, headers, runtime);
  }

  /**
   * 提交知识库校验任务
   * 
   * @param tmpReq - ValidateKnowLedgeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateKnowLedgeResponse
   */
  async validateKnowLedgeWithOptions(tmpReq: $_model.ValidateKnowLedgeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ValidateKnowLedgeResponse> {
    tmpReq.validate();
    let request = new $_model.ValidateKnowLedgeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "simple");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateKnowLedge",
      version: "2022-09-13",
      protocol: "HTTPS",
      pathname: `/yzd/validateKnowLedge`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidateKnowLedgeResponse>(await this.callApi(params, req, runtime), new $_model.ValidateKnowLedgeResponse({}));
  }

  /**
   * 提交知识库校验任务
   * 
   * @param request - ValidateKnowLedgeRequest
   * @returns ValidateKnowLedgeResponse
   */
  async validateKnowLedge(request: $_model.ValidateKnowLedgeRequest): Promise<$_model.ValidateKnowLedgeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.validateKnowLedgeWithOptions(request, headers, runtime);
  }

}
