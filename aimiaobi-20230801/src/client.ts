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
    this._endpoint = this.getEndpoint("aimiaobi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 添加文档到数据集
   * 
   * @param tmpReq - AddDatasetDocumentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDatasetDocumentResponse
   */
  async addDatasetDocumentWithOptions(tmpReq: $_model.AddDatasetDocumentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDatasetDocumentResponse> {
    tmpReq.validate();
    let request = new $_model.AddDatasetDocumentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.document)) {
      request.documentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.document, "Document", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!$dara.isNull(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.documentShrink)) {
      body["Document"] = request.documentShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDatasetDocument",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDatasetDocumentResponse>(await this.callApi(params, req, runtime), new $_model.AddDatasetDocumentResponse({}));
  }

  /**
   * 添加文档到数据集
   * 
   * @param request - AddDatasetDocumentRequest
   * @returns AddDatasetDocumentResponse
   */
  async addDatasetDocument(request: $_model.AddDatasetDocumentRequest): Promise<$_model.AddDatasetDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDatasetDocumentWithOptions(request, runtime);
  }

  /**
   * 取消异步任务
   * 
   * @param request - CancelAsyncTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelAsyncTaskResponse
   */
  async cancelAsyncTaskWithOptions(request: $_model.CancelAsyncTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelAsyncTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelAsyncTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelAsyncTaskResponse>(await this.callApi(params, req, runtime), new $_model.CancelAsyncTaskResponse({}));
  }

  /**
   * 取消异步任务
   * 
   * @param request - CancelAsyncTaskRequest
   * @returns CancelAsyncTaskResponse
   */
  async cancelAsyncTask(request: $_model.CancelAsyncTaskRequest): Promise<$_model.CancelAsyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelAsyncTaskWithOptions(request, runtime);
  }

  /**
   * 清除所有干预内容
   * 
   * @param request - ClearIntervenesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClearIntervenesResponse
   */
  async clearIntervenesWithOptions(request: $_model.ClearIntervenesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClearIntervenesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClearIntervenes",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClearIntervenesResponse>(await this.callApi(params, req, runtime), new $_model.ClearIntervenesResponse({}));
  }

  /**
   * 清除所有干预内容
   * 
   * @param request - ClearIntervenesRequest
   * @returns ClearIntervenesResponse
   */
  async clearIntervenes(request: $_model.ClearIntervenesRequest): Promise<$_model.ClearIntervenesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clearIntervenesWithOptions(request, runtime);
  }

  /**
   * 数据集管理-创建
   * 
   * @param tmpReq - CreateDatasetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatasetResponse
   */
  async createDatasetWithOptions(tmpReq: $_model.CreateDatasetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDatasetResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDatasetShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.datasetConfig)) {
      request.datasetConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.datasetConfig, "DatasetConfig", "json");
    }

    if (!$dara.isNull(tmpReq.documentHandleConfig)) {
      request.documentHandleConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.documentHandleConfig, "DocumentHandleConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetConfigShrink)) {
      body["DatasetConfig"] = request.datasetConfigShrink;
    }

    if (!$dara.isNull(request.datasetDescription)) {
      body["DatasetDescription"] = request.datasetDescription;
    }

    if (!$dara.isNull(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.datasetType)) {
      body["DatasetType"] = request.datasetType;
    }

    if (!$dara.isNull(request.documentHandleConfigShrink)) {
      body["DocumentHandleConfig"] = request.documentHandleConfigShrink;
    }

    if (!$dara.isNull(request.invokeType)) {
      body["InvokeType"] = request.invokeType;
    }

    if (!$dara.isNull(request.searchDatasetEnable)) {
      body["SearchDatasetEnable"] = request.searchDatasetEnable;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataset",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDatasetResponse>(await this.callApi(params, req, runtime), new $_model.CreateDatasetResponse({}));
  }

  /**
   * 数据集管理-创建
   * 
   * @param request - CreateDatasetRequest
   * @returns CreateDatasetResponse
   */
  async createDataset(request: $_model.CreateDatasetRequest): Promise<$_model.CreateDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDatasetWithOptions(request, runtime);
  }

  /**
   * 文档管理-创建
   * 
   * @param tmpReq - CreateGeneratedContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGeneratedContentResponse
   */
  async createGeneratedContentWithOptions(tmpReq: $_model.CreateGeneratedContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGeneratedContentResponse> {
    tmpReq.validate();
    let request = new $_model.CreateGeneratedContentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.keywords)) {
      request.keywordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keywords, "Keywords", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.contentDomain)) {
      body["ContentDomain"] = request.contentDomain;
    }

    if (!$dara.isNull(request.contentText)) {
      body["ContentText"] = request.contentText;
    }

    if (!$dara.isNull(request.keywordsShrink)) {
      body["Keywords"] = request.keywordsShrink;
    }

    if (!$dara.isNull(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGeneratedContent",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGeneratedContentResponse>(await this.callApi(params, req, runtime), new $_model.CreateGeneratedContentResponse({}));
  }

  /**
   * 文档管理-创建
   * 
   * @param request - CreateGeneratedContentRequest
   * @returns CreateGeneratedContentResponse
   */
  async createGeneratedContent(request: $_model.CreateGeneratedContentRequest): Promise<$_model.CreateGeneratedContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGeneratedContentWithOptions(request, runtime);
  }

  /**
   * 获取授权token
   * 
   * @param request - CreateTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTokenResponse
   */
  async createTokenWithOptions(request: $_model.CreateTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateToken",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTokenResponse>(await this.callApi(params, req, runtime), new $_model.CreateTokenResponse({}));
  }

  /**
   * 获取授权token
   * 
   * @param request - CreateTokenRequest
   * @returns CreateTokenResponse
   */
  async createToken(request: $_model.CreateTokenRequest): Promise<$_model.CreateTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTokenWithOptions(request, runtime);
  }

  /**
   * 删除自定义文本
   * 
   * @param request - DeleteCustomTextRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomTextResponse
   */
  async deleteCustomTextWithOptions(request: $_model.DeleteCustomTextRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomTextResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.commodityCode)) {
      body["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomText",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomTextResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomTextResponse({}));
  }

  /**
   * 删除自定义文本
   * 
   * @param request - DeleteCustomTextRequest
   * @returns DeleteCustomTextResponse
   */
  async deleteCustomText(request: $_model.DeleteCustomTextRequest): Promise<$_model.DeleteCustomTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomTextWithOptions(request, runtime);
  }

  /**
   * 根据主题删除自定义主题事件
   * 
   * @param request - DeleteCustomTopicByTopicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomTopicByTopicResponse
   */
  async deleteCustomTopicByTopicWithOptions(request: $_model.DeleteCustomTopicByTopicRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomTopicByTopicResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.topic)) {
      body["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomTopicByTopic",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomTopicByTopicResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomTopicByTopicResponse({}));
  }

  /**
   * 根据主题删除自定义主题事件
   * 
   * @param request - DeleteCustomTopicByTopicRequest
   * @returns DeleteCustomTopicByTopicResponse
   */
  async deleteCustomTopicByTopic(request: $_model.DeleteCustomTopicByTopicRequest): Promise<$_model.DeleteCustomTopicByTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomTopicByTopicWithOptions(request, runtime);
  }

  /**
   * 根据自定义观点ID删除自定义观点
   * 
   * @param request - DeleteCustomTopicViewPointByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomTopicViewPointByIdResponse
   */
  async deleteCustomTopicViewPointByIdWithOptions(request: $_model.DeleteCustomTopicViewPointByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomTopicViewPointByIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customViewPointId)) {
      body["CustomViewPointId"] = request.customViewPointId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomTopicViewPointById",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomTopicViewPointByIdResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomTopicViewPointByIdResponse({}));
  }

  /**
   * 根据自定义观点ID删除自定义观点
   * 
   * @param request - DeleteCustomTopicViewPointByIdRequest
   * @returns DeleteCustomTopicViewPointByIdResponse
   */
  async deleteCustomTopicViewPointById(request: $_model.DeleteCustomTopicViewPointByIdRequest): Promise<$_model.DeleteCustomTopicViewPointByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomTopicViewPointByIdWithOptions(request, runtime);
  }

  /**
   * 数据集管理-删除
   * 
   * @param request - DeleteDatasetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatasetResponse
   */
  async deleteDatasetWithOptions(request: $_model.DeleteDatasetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDatasetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataset",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDatasetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDatasetResponse({}));
  }

  /**
   * 数据集管理-删除
   * 
   * @param request - DeleteDatasetRequest
   * @returns DeleteDatasetResponse
   */
  async deleteDataset(request: $_model.DeleteDatasetRequest): Promise<$_model.DeleteDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDatasetWithOptions(request, runtime);
  }

  /**
   * 删除数据集文档
   * 
   * @param request - DeleteDatasetDocumentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatasetDocumentResponse
   */
  async deleteDatasetDocumentWithOptions(request: $_model.DeleteDatasetDocumentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDatasetDocumentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!$dara.isNull(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.docId)) {
      body["DocId"] = request.docId;
    }

    if (!$dara.isNull(request.docUuid)) {
      body["DocUuid"] = request.docUuid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDatasetDocument",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDatasetDocumentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDatasetDocumentResponse({}));
  }

  /**
   * 删除数据集文档
   * 
   * @param request - DeleteDatasetDocumentRequest
   * @returns DeleteDatasetDocumentResponse
   */
  async deleteDatasetDocument(request: $_model.DeleteDatasetDocumentRequest): Promise<$_model.DeleteDatasetDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDatasetDocumentWithOptions(request, runtime);
  }

  /**
   * 妙读删除多个文档
   * 
   * @param tmpReq - DeleteDocsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDocsResponse
   */
  async deleteDocsWithOptions(tmpReq: $_model.DeleteDocsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDocsResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteDocsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.docIds)) {
      request.docIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.docIds, "DocIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docIdsShrink)) {
      body["DocIds"] = request.docIdsShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDocs",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDocsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDocsResponse({}));
  }

  /**
   * 妙读删除多个文档
   * 
   * @param request - DeleteDocsRequest
   * @returns DeleteDocsResponse
   */
  async deleteDocs(request: $_model.DeleteDocsRequest): Promise<$_model.DeleteDocsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDocsWithOptions(request, runtime);
  }

  /**
   * 文档管理-删除。
   * 
   * @param request - DeleteGeneratedContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGeneratedContentResponse
   */
  async deleteGeneratedContentWithOptions(request: $_model.DeleteGeneratedContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGeneratedContentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGeneratedContent",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGeneratedContentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGeneratedContentResponse({}));
  }

  /**
   * 文档管理-删除。
   * 
   * @param request - DeleteGeneratedContentRequest
   * @returns DeleteGeneratedContentResponse
   */
  async deleteGeneratedContent(request: $_model.DeleteGeneratedContentRequest): Promise<$_model.DeleteGeneratedContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGeneratedContentWithOptions(request, runtime);
  }

  /**
   * 删除干预规则
   * 
   * @param request - DeleteInterveneRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInterveneRuleResponse
   */
  async deleteInterveneRuleWithOptions(request: $_model.DeleteInterveneRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInterveneRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInterveneRule",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInterveneRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInterveneRuleResponse({}));
  }

  /**
   * 删除干预规则
   * 
   * @param request - DeleteInterveneRuleRequest
   * @returns DeleteInterveneRuleResponse
   */
  async deleteInterveneRule(request: $_model.DeleteInterveneRuleRequest): Promise<$_model.DeleteInterveneRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInterveneRuleWithOptions(request, runtime);
  }

  /**
   * 根据ID删除素材
   * 
   * @param request - DeleteMaterialByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMaterialByIdResponse
   */
  async deleteMaterialByIdWithOptions(request: $_model.DeleteMaterialByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMaterialByIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMaterialById",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMaterialByIdResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMaterialByIdResponse({}));
  }

  /**
   * 根据ID删除素材
   * 
   * @param request - DeleteMaterialByIdRequest
   * @returns DeleteMaterialByIdResponse
   */
  async deleteMaterialById(request: $_model.DeleteMaterialByIdRequest): Promise<$_model.DeleteMaterialByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMaterialByIdWithOptions(request, runtime);
  }

  /**
   * 从链接中提取文档内容
   * 
   * @param tmpReq - DocumentExtractionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DocumentExtractionResponse
   */
  async documentExtractionWithOptions(tmpReq: $_model.DocumentExtractionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DocumentExtractionResponse> {
    tmpReq.validate();
    let request = new $_model.DocumentExtractionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.urls)) {
      request.urlsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.urls, "Urls", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.urlsShrink)) {
      body["Urls"] = request.urlsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DocumentExtraction",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DocumentExtractionResponse>(await this.callApi(params, req, runtime), new $_model.DocumentExtractionResponse({}));
  }

  /**
   * 从链接中提取文档内容
   * 
   * @param request - DocumentExtractionRequest
   * @returns DocumentExtractionResponse
   */
  async documentExtraction(request: $_model.DocumentExtractionRequest): Promise<$_model.DocumentExtractionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.documentExtractionWithOptions(request, runtime);
  }

  /**
   * 导出企业VOC分析任务明细列表
   * 
   * @param tmpReq - ExportAnalysisTagDetailByTaskIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportAnalysisTagDetailByTaskIdResponse
   */
  async exportAnalysisTagDetailByTaskIdWithOptions(tmpReq: $_model.ExportAnalysisTagDetailByTaskIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportAnalysisTagDetailByTaskIdResponse> {
    tmpReq.validate();
    let request = new $_model.ExportAnalysisTagDetailByTaskIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.categories)) {
      request.categoriesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.categories, "Categories", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoriesShrink)) {
      body["Categories"] = request.categoriesShrink;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportAnalysisTagDetailByTaskId",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportAnalysisTagDetailByTaskIdResponse>(await this.callApi(params, req, runtime), new $_model.ExportAnalysisTagDetailByTaskIdResponse({}));
  }

  /**
   * 导出企业VOC分析任务明细列表
   * 
   * @param request - ExportAnalysisTagDetailByTaskIdRequest
   * @returns ExportAnalysisTagDetailByTaskIdResponse
   */
  async exportAnalysisTagDetailByTaskId(request: $_model.ExportAnalysisTagDetailByTaskIdRequest): Promise<$_model.ExportAnalysisTagDetailByTaskIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportAnalysisTagDetailByTaskIdWithOptions(request, runtime);
  }

  /**
   * 文档管理-导出。
   * 
   * @param request - ExportGeneratedContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportGeneratedContentResponse
   */
  async exportGeneratedContentWithOptions(request: $_model.ExportGeneratedContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportGeneratedContentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportGeneratedContent",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportGeneratedContentResponse>(await this.callApi(params, req, runtime), new $_model.ExportGeneratedContentResponse({}));
  }

  /**
   * 文档管理-导出。
   * 
   * @param request - ExportGeneratedContentRequest
   * @returns ExportGeneratedContentResponse
   */
  async exportGeneratedContent(request: $_model.ExportGeneratedContentRequest): Promise<$_model.ExportGeneratedContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportGeneratedContentWithOptions(request, runtime);
  }

  /**
   * 导出选题策划文档，响应为一个可公开访问的URL。一小时后失效
   * 
   * @param tmpReq - ExportHotTopicPlanningProposalsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportHotTopicPlanningProposalsResponse
   */
  async exportHotTopicPlanningProposalsWithOptions(tmpReq: $_model.ExportHotTopicPlanningProposalsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportHotTopicPlanningProposalsResponse> {
    tmpReq.validate();
    let request = new $_model.ExportHotTopicPlanningProposalsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.customViewPointIds)) {
      request.customViewPointIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customViewPointIds, "CustomViewPointIds", "json");
    }

    if (!$dara.isNull(tmpReq.titles)) {
      request.titlesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.titles, "Titles", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customViewPointIdsShrink)) {
      body["CustomViewPointIds"] = request.customViewPointIdsShrink;
    }

    if (!$dara.isNull(request.exportType)) {
      body["ExportType"] = request.exportType;
    }

    if (!$dara.isNull(request.titlesShrink)) {
      body["Titles"] = request.titlesShrink;
    }

    if (!$dara.isNull(request.topic)) {
      body["Topic"] = request.topic;
    }

    if (!$dara.isNull(request.topicSource)) {
      body["TopicSource"] = request.topicSource;
    }

    if (!$dara.isNull(request.viewPointType)) {
      body["ViewPointType"] = request.viewPointType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportHotTopicPlanningProposals",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportHotTopicPlanningProposalsResponse>(await this.callApi(params, req, runtime), new $_model.ExportHotTopicPlanningProposalsResponse({}));
  }

  /**
   * 导出选题策划文档，响应为一个可公开访问的URL。一小时后失效
   * 
   * @param request - ExportHotTopicPlanningProposalsRequest
   * @returns ExportHotTopicPlanningProposalsResponse
   */
  async exportHotTopicPlanningProposals(request: $_model.ExportHotTopicPlanningProposalsRequest): Promise<$_model.ExportHotTopicPlanningProposalsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportHotTopicPlanningProposalsWithOptions(request, runtime);
  }

  /**
   * 导出所有干预内容
   * 
   * @param request - ExportIntervenesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportIntervenesResponse
   */
  async exportIntervenesWithOptions(request: $_model.ExportIntervenesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportIntervenesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportIntervenes",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportIntervenesResponse>(await this.callApi(params, req, runtime), new $_model.ExportIntervenesResponse({}));
  }

  /**
   * 导出所有干预内容
   * 
   * @param request - ExportIntervenesRequest
   * @returns ExportIntervenesResponse
   */
  async exportIntervenes(request: $_model.ExportIntervenesRequest): Promise<$_model.ExportIntervenesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportIntervenesWithOptions(request, runtime);
  }

  /**
   * 反馈某次生成的结果
   * 
   * @param tmpReq - FeedbackDialogueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FeedbackDialogueResponse
   */
  async feedbackDialogueWithOptions(tmpReq: $_model.FeedbackDialogueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FeedbackDialogueResponse> {
    tmpReq.validate();
    let request = new $_model.FeedbackDialogueShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ratingTags)) {
      request.ratingTagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ratingTags, "RatingTags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customerResponse)) {
      body["CustomerResponse"] = request.customerResponse;
    }

    if (!$dara.isNull(request.goodText)) {
      body["GoodText"] = request.goodText;
    }

    if (!$dara.isNull(request.modifiedResponse)) {
      body["ModifiedResponse"] = request.modifiedResponse;
    }

    if (!$dara.isNull(request.rating)) {
      body["Rating"] = request.rating;
    }

    if (!$dara.isNull(request.ratingTagsShrink)) {
      body["RatingTags"] = request.ratingTagsShrink;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FeedbackDialogue",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FeedbackDialogueResponse>(await this.callApi(params, req, runtime), new $_model.FeedbackDialogueResponse({}));
  }

  /**
   * 反馈某次生成的结果
   * 
   * @param request - FeedbackDialogueRequest
   * @returns FeedbackDialogueResponse
   */
  async feedbackDialogue(request: $_model.FeedbackDialogueRequest): Promise<$_model.FeedbackDialogueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.feedbackDialogueWithOptions(request, runtime);
  }

  /**
   * 获取图片任务执行结果
   * 
   * @param tmpReq - FetchImageTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FetchImageTaskResponse
   */
  async fetchImageTaskWithOptions(tmpReq: $_model.FetchImageTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FetchImageTaskResponse> {
    tmpReq.validate();
    let request = new $_model.FetchImageTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.taskIdList)) {
      request.taskIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskIdList, "TaskIdList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.articleTaskId)) {
      body["ArticleTaskId"] = request.articleTaskId;
    }

    if (!$dara.isNull(request.taskIdListShrink)) {
      body["TaskIdList"] = request.taskIdListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FetchImageTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FetchImageTaskResponse>(await this.callApi(params, req, runtime), new $_model.FetchImageTaskResponse({}));
  }

  /**
   * 获取图片任务执行结果
   * 
   * @param request - FetchImageTaskRequest
   * @returns FetchImageTaskResponse
   */
  async fetchImageTask(request: $_model.FetchImageTaskRequest): Promise<$_model.FetchImageTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.fetchImageTaskWithOptions(request, runtime);
  }

  /**
   * 生成临时可访问的公开url
   * 
   * @param request - GenerateFileUrlByKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateFileUrlByKeyResponse
   */
  async generateFileUrlByKeyWithOptions(request: $_model.GenerateFileUrlByKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateFileUrlByKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileKey)) {
      body["FileKey"] = request.fileKey;
    }

    if (!$dara.isNull(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateFileUrlByKey",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateFileUrlByKeyResponse>(await this.callApi(params, req, runtime), new $_model.GenerateFileUrlByKeyResponse({}));
  }

  /**
   * 生成临时可访问的公开url
   * 
   * @param request - GenerateFileUrlByKeyRequest
   * @returns GenerateFileUrlByKeyResponse
   */
  async generateFileUrlByKey(request: $_model.GenerateFileUrlByKeyRequest): Promise<$_model.GenerateFileUrlByKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateFileUrlByKeyWithOptions(request, runtime);
  }

  /**
   * 智能配图，图片生成任务
   * 
   * @param tmpReq - GenerateImageTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateImageTaskResponse
   */
  async generateImageTaskWithOptions(tmpReq: $_model.GenerateImageTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateImageTaskResponse> {
    tmpReq.validate();
    let request = new $_model.GenerateImageTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.paragraphList)) {
      request.paragraphListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.paragraphList, "ParagraphList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.articleTaskId)) {
      body["ArticleTaskId"] = request.articleTaskId;
    }

    if (!$dara.isNull(request.paragraphListShrink)) {
      body["ParagraphList"] = request.paragraphListShrink;
    }

    if (!$dara.isNull(request.size)) {
      body["Size"] = request.size;
    }

    if (!$dara.isNull(request.style)) {
      body["Style"] = request.style;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateImageTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateImageTaskResponse>(await this.callApi(params, req, runtime), new $_model.GenerateImageTaskResponse({}));
  }

  /**
   * 智能配图，图片生成任务
   * 
   * @param request - GenerateImageTaskRequest
   * @returns GenerateImageTaskResponse
   */
  async generateImageTask(request: $_model.GenerateImageTaskRequest): Promise<$_model.GenerateImageTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateImageTaskWithOptions(request, runtime);
  }

  /**
   * 生成上传配置
   * 
   * @param request - GenerateUploadConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateUploadConfigResponse
   */
  async generateUploadConfigWithOptions(request: $_model.GenerateUploadConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateUploadConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.parentDir)) {
      body["ParentDir"] = request.parentDir;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateUploadConfig",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateUploadConfigResponse>(await this.callApi(params, req, runtime), new $_model.GenerateUploadConfigResponse({}));
  }

  /**
   * 生成上传配置
   * 
   * @param request - GenerateUploadConfigRequest
   * @returns GenerateUploadConfigResponse
   */
  async generateUploadConfig(request: $_model.GenerateUploadConfigRequest): Promise<$_model.GenerateUploadConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateUploadConfigWithOptions(request, runtime);
  }

  /**
   * 视角生成
   * 
   * @param tmpReq - GenerateViewPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateViewPointResponse
   */
  async generateViewPointWithOptions(tmpReq: $_model.GenerateViewPointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateViewPointResponse> {
    tmpReq.validate();
    let request = new $_model.GenerateViewPointShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.referenceData)) {
      request.referenceDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.referenceData, "ReferenceData", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.referenceDataShrink)) {
      body["ReferenceData"] = request.referenceDataShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateViewPoint",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateViewPointResponse>(await this.callApi(params, req, runtime), new $_model.GenerateViewPointResponse({}));
  }

  /**
   * 视角生成
   * 
   * @param request - GenerateViewPointRequest
   * @returns GenerateViewPointResponse
   */
  async generateViewPoint(request: $_model.GenerateViewPointRequest): Promise<$_model.GenerateViewPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateViewPointWithOptions(request, runtime);
  }

  /**
   * 获取某次标签挖掘结果分类
   * 
   * @param request - GetCategoriesByTaskIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCategoriesByTaskIdResponse
   */
  async getCategoriesByTaskIdWithOptions(request: $_model.GetCategoriesByTaskIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCategoriesByTaskIdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCategoriesByTaskId",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCategoriesByTaskIdResponse>(await this.callApi(params, req, runtime), new $_model.GetCategoriesByTaskIdResponse({}));
  }

  /**
   * 获取某次标签挖掘结果分类
   * 
   * @param request - GetCategoriesByTaskIdRequest
   * @returns GetCategoriesByTaskIdResponse
   */
  async getCategoriesByTaskId(request: $_model.GetCategoriesByTaskIdRequest): Promise<$_model.GetCategoriesByTaskIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCategoriesByTaskIdWithOptions(request, runtime);
  }

  /**
   * 获取自定义播报单任务结果
   * 
   * @param request - GetCustomHotTopicBroadcastJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomHotTopicBroadcastJobResponse
   */
  async getCustomHotTopicBroadcastJobWithOptions(request: $_model.GetCustomHotTopicBroadcastJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCustomHotTopicBroadcastJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCustomHotTopicBroadcastJob",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCustomHotTopicBroadcastJobResponse>(await this.callApi(params, req, runtime), new $_model.GetCustomHotTopicBroadcastJobResponse({}));
  }

  /**
   * 获取自定义播报单任务结果
   * 
   * @param request - GetCustomHotTopicBroadcastJobRequest
   * @returns GetCustomHotTopicBroadcastJobResponse
   */
  async getCustomHotTopicBroadcastJob(request: $_model.GetCustomHotTopicBroadcastJobRequest): Promise<$_model.GetCustomHotTopicBroadcastJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCustomHotTopicBroadcastJobWithOptions(request, runtime);
  }

  /**
   * 获取自定义文本
   * 
   * @param request - GetCustomTextRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomTextResponse
   */
  async getCustomTextWithOptions(request: $_model.GetCustomTextRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCustomTextResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.commodityCode)) {
      body["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCustomText",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCustomTextResponse>(await this.callApi(params, req, runtime), new $_model.GetCustomTextResponse({}));
  }

  /**
   * 获取自定义文本
   * 
   * @param request - GetCustomTextRequest
   * @returns GetCustomTextResponse
   */
  async getCustomText(request: $_model.GetCustomTextRequest): Promise<$_model.GetCustomTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCustomTextWithOptions(request, runtime);
  }

  /**
   * 获取自定义选题视角分析任务结果
   * 
   * @param request - GetCustomTopicSelectionPerspectiveAnalysisTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomTopicSelectionPerspectiveAnalysisTaskResponse
   */
  async getCustomTopicSelectionPerspectiveAnalysisTaskWithOptions(request: $_model.GetCustomTopicSelectionPerspectiveAnalysisTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCustomTopicSelectionPerspectiveAnalysisTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCustomTopicSelectionPerspectiveAnalysisTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCustomTopicSelectionPerspectiveAnalysisTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetCustomTopicSelectionPerspectiveAnalysisTaskResponse({}));
  }

  /**
   * 获取自定义选题视角分析任务结果
   * 
   * @param request - GetCustomTopicSelectionPerspectiveAnalysisTaskRequest
   * @returns GetCustomTopicSelectionPerspectiveAnalysisTaskResponse
   */
  async getCustomTopicSelectionPerspectiveAnalysisTask(request: $_model.GetCustomTopicSelectionPerspectiveAnalysisTaskRequest): Promise<$_model.GetCustomTopicSelectionPerspectiveAnalysisTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCustomTopicSelectionPerspectiveAnalysisTaskWithOptions(request, runtime);
  }

  /**
   * 获取系统数据源配置和个人配置
   * 
   * @param request - GetDataSourceOrderConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataSourceOrderConfigResponse
   */
  async getDataSourceOrderConfigWithOptions(request: $_model.GetDataSourceOrderConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataSourceOrderConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.generateTechnology)) {
      body["GenerateTechnology"] = request.generateTechnology;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataSourceOrderConfig",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataSourceOrderConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetDataSourceOrderConfigResponse({}));
  }

  /**
   * 获取系统数据源配置和个人配置
   * 
   * @param request - GetDataSourceOrderConfigRequest
   * @returns GetDataSourceOrderConfigResponse
   */
  async getDataSourceOrderConfig(request: $_model.GetDataSourceOrderConfigRequest): Promise<$_model.GetDataSourceOrderConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataSourceOrderConfigWithOptions(request, runtime);
  }

  /**
   * 数据集管理-详情
   * 
   * @param request - GetDatasetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatasetResponse
   */
  async getDatasetWithOptions(request: $_model.GetDatasetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDatasetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!$dara.isNull(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataset",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDatasetResponse>(await this.callApi(params, req, runtime), new $_model.GetDatasetResponse({}));
  }

  /**
   * 数据集管理-详情
   * 
   * @param request - GetDatasetRequest
   * @returns GetDatasetResponse
   */
  async getDataset(request: $_model.GetDatasetRequest): Promise<$_model.GetDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDatasetWithOptions(request, runtime);
  }

  /**
   * 获取数据集文档
   * 
   * @param request - GetDatasetDocumentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatasetDocumentResponse
   */
  async getDatasetDocumentWithOptions(request: $_model.GetDatasetDocumentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDatasetDocumentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!$dara.isNull(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.docId)) {
      body["DocId"] = request.docId;
    }

    if (!$dara.isNull(request.docUuid)) {
      body["DocUuid"] = request.docUuid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDatasetDocument",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDatasetDocumentResponse>(await this.callApi(params, req, runtime), new $_model.GetDatasetDocumentResponse({}));
  }

  /**
   * 获取数据集文档
   * 
   * @param request - GetDatasetDocumentRequest
   * @returns GetDatasetDocumentResponse
   */
  async getDatasetDocument(request: $_model.GetDatasetDocumentRequest): Promise<$_model.GetDatasetDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDatasetDocumentWithOptions(request, runtime);
  }

  /**
   * 获取文档聚合任务结果
   * 
   * @param request - GetDocClusterTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocClusterTaskResponse
   */
  async getDocClusterTaskWithOptions(request: $_model.GetDocClusterTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDocClusterTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocClusterTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDocClusterTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetDocClusterTaskResponse({}));
  }

  /**
   * 获取文档聚合任务结果
   * 
   * @param request - GetDocClusterTaskRequest
   * @returns GetDocClusterTaskResponse
   */
  async getDocClusterTask(request: $_model.GetDocClusterTaskRequest): Promise<$_model.GetDocClusterTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDocClusterTaskWithOptions(request, runtime);
  }

  /**
   * 妙读获取文档信息
   * 
   * @param request - GetDocInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocInfoResponse
   */
  async getDocInfoWithOptions(request: $_model.GetDocInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDocInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.docId)) {
      body["DocId"] = request.docId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocInfo",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDocInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetDocInfoResponse({}));
  }

  /**
   * 妙读获取文档信息
   * 
   * @param request - GetDocInfoRequest
   * @returns GetDocInfoResponse
   */
  async getDocInfo(request: $_model.GetDocInfoRequest): Promise<$_model.GetDocInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDocInfoWithOptions(request, runtime);
  }

  /**
   * 获取企业VOC分析任务结果
   * 
   * @param request - GetEnterpriseVocAnalysisTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEnterpriseVocAnalysisTaskResponse
   */
  async getEnterpriseVocAnalysisTaskWithOptions(request: $_model.GetEnterpriseVocAnalysisTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEnterpriseVocAnalysisTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEnterpriseVocAnalysisTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEnterpriseVocAnalysisTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetEnterpriseVocAnalysisTaskResponse({}));
  }

  /**
   * 获取企业VOC分析任务结果
   * 
   * @param request - GetEnterpriseVocAnalysisTaskRequest
   * @returns GetEnterpriseVocAnalysisTaskResponse
   */
  async getEnterpriseVocAnalysisTask(request: $_model.GetEnterpriseVocAnalysisTaskRequest): Promise<$_model.GetEnterpriseVocAnalysisTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEnterpriseVocAnalysisTaskWithOptions(request, runtime);
  }

  /**
   * 文档管理-查询详情。
   * 
   * @param request - GetGeneratedContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGeneratedContentResponse
   */
  async getGeneratedContentWithOptions(request: $_model.GetGeneratedContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetGeneratedContentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGeneratedContent",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGeneratedContentResponse>(await this.callApi(params, req, runtime), new $_model.GetGeneratedContentResponse({}));
  }

  /**
   * 文档管理-查询详情。
   * 
   * @param request - GetGeneratedContentRequest
   * @returns GetGeneratedContentResponse
   */
  async getGeneratedContent(request: $_model.GetGeneratedContentRequest): Promise<$_model.GetGeneratedContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGeneratedContentWithOptions(request, runtime);
  }

  /**
   * 查询新闻播报单
   * 
   * @param tmpReq - GetHotTopicBroadcastRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotTopicBroadcastResponse
   */
  async getHotTopicBroadcastWithOptions(tmpReq: $_model.GetHotTopicBroadcastRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotTopicBroadcastResponse> {
    tmpReq.validate();
    let request = new $_model.GetHotTopicBroadcastShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.locations)) {
      request.locationsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.locations, "Locations", "json");
    }

    if (!$dara.isNull(tmpReq.stepForCustomSummaryStyleConfig)) {
      request.stepForCustomSummaryStyleConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.stepForCustomSummaryStyleConfig, "StepForCustomSummaryStyleConfig", "json");
    }

    if (!$dara.isNull(tmpReq.stepForNewsBroadcastContentConfig)) {
      request.stepForNewsBroadcastContentConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.stepForNewsBroadcastContentConfig, "StepForNewsBroadcastContentConfig", "json");
    }

    if (!$dara.isNull(tmpReq.topics)) {
      request.topicsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.topics, "Topics", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.calcTotalToken)) {
      body["CalcTotalToken"] = request.calcTotalToken;
    }

    if (!$dara.isNull(request.category)) {
      body["Category"] = request.category;
    }

    if (!$dara.isNull(request.current)) {
      body["Current"] = request.current;
    }

    if (!$dara.isNull(request.hotTopicVersion)) {
      body["HotTopicVersion"] = request.hotTopicVersion;
    }

    if (!$dara.isNull(request.locationQuery)) {
      body["LocationQuery"] = request.locationQuery;
    }

    if (!$dara.isNull(request.locationsShrink)) {
      body["Locations"] = request.locationsShrink;
    }

    if (!$dara.isNull(request.query)) {
      body["Query"] = request.query;
    }

    if (!$dara.isNull(request.size)) {
      body["Size"] = request.size;
    }

    if (!$dara.isNull(request.stepForCustomSummaryStyleConfigShrink)) {
      body["StepForCustomSummaryStyleConfig"] = request.stepForCustomSummaryStyleConfigShrink;
    }

    if (!$dara.isNull(request.stepForNewsBroadcastContentConfigShrink)) {
      body["StepForNewsBroadcastContentConfig"] = request.stepForNewsBroadcastContentConfigShrink;
    }

    if (!$dara.isNull(request.topicsShrink)) {
      body["Topics"] = request.topicsShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotTopicBroadcast",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotTopicBroadcastResponse>(await this.callApi(params, req, runtime), new $_model.GetHotTopicBroadcastResponse({}));
  }

  /**
   * 查询新闻播报单
   * 
   * @param request - GetHotTopicBroadcastRequest
   * @returns GetHotTopicBroadcastResponse
   */
  async getHotTopicBroadcast(request: $_model.GetHotTopicBroadcastRequest): Promise<$_model.GetHotTopicBroadcastResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotTopicBroadcastWithOptions(request, runtime);
  }

  /**
   * 获得干预全局回复
   * 
   * @param request - GetInterveneGlobalReplyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInterveneGlobalReplyResponse
   */
  async getInterveneGlobalReplyWithOptions(request: $_model.GetInterveneGlobalReplyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInterveneGlobalReplyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInterveneGlobalReply",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInterveneGlobalReplyResponse>(await this.callApi(params, req, runtime), new $_model.GetInterveneGlobalReplyResponse({}));
  }

  /**
   * 获得干预全局回复
   * 
   * @param request - GetInterveneGlobalReplyRequest
   * @returns GetInterveneGlobalReplyResponse
   */
  async getInterveneGlobalReply(request: $_model.GetInterveneGlobalReplyRequest): Promise<$_model.GetInterveneGlobalReplyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInterveneGlobalReplyWithOptions(request, runtime);
  }

  /**
   * 获得导入任务信息
   * 
   * @param request - GetInterveneImportTaskInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInterveneImportTaskInfoResponse
   */
  async getInterveneImportTaskInfoWithOptions(request: $_model.GetInterveneImportTaskInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInterveneImportTaskInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInterveneImportTaskInfo",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInterveneImportTaskInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetInterveneImportTaskInfoResponse({}));
  }

  /**
   * 获得导入任务信息
   * 
   * @param request - GetInterveneImportTaskInfoRequest
   * @returns GetInterveneImportTaskInfoResponse
   */
  async getInterveneImportTaskInfo(request: $_model.GetInterveneImportTaskInfoRequest): Promise<$_model.GetInterveneImportTaskInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInterveneImportTaskInfoWithOptions(request, runtime);
  }

  /**
   * 获得干预项规则详情
   * 
   * @param request - GetInterveneRuleDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInterveneRuleDetailResponse
   */
  async getInterveneRuleDetailWithOptions(request: $_model.GetInterveneRuleDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInterveneRuleDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInterveneRuleDetail",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInterveneRuleDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetInterveneRuleDetailResponse({}));
  }

  /**
   * 获得干预项规则详情
   * 
   * @param request - GetInterveneRuleDetailRequest
   * @returns GetInterveneRuleDetailResponse
   */
  async getInterveneRuleDetail(request: $_model.GetInterveneRuleDetailRequest): Promise<$_model.GetInterveneRuleDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInterveneRuleDetailWithOptions(request, runtime);
  }

  /**
   * 获得干预导入模版文件下载地址
   * 
   * @param request - GetInterveneTemplateFileUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInterveneTemplateFileUrlResponse
   */
  async getInterveneTemplateFileUrlWithOptions(request: $_model.GetInterveneTemplateFileUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInterveneTemplateFileUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInterveneTemplateFileUrl",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInterveneTemplateFileUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetInterveneTemplateFileUrlResponse({}));
  }

  /**
   * 获得干预导入模版文件下载地址
   * 
   * @param request - GetInterveneTemplateFileUrlRequest
   * @returns GetInterveneTemplateFileUrlResponse
   */
  async getInterveneTemplateFileUrl(request: $_model.GetInterveneTemplateFileUrlRequest): Promise<$_model.GetInterveneTemplateFileUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInterveneTemplateFileUrlWithOptions(request, runtime);
  }

  /**
   * 根据ID获取素材内容
   * 
   * @param request - GetMaterialByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMaterialByIdResponse
   */
  async getMaterialByIdWithOptions(request: $_model.GetMaterialByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMaterialByIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMaterialById",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMaterialByIdResponse>(await this.callApi(params, req, runtime), new $_model.GetMaterialByIdResponse({}));
  }

  /**
   * 根据ID获取素材内容
   * 
   * @param request - GetMaterialByIdRequest
   * @returns GetMaterialByIdResponse
   */
  async getMaterialById(request: $_model.GetMaterialByIdRequest): Promise<$_model.GetMaterialByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMaterialByIdWithOptions(request, runtime);
  }

  /**
   * 获取当前用户的配置
   * 
   * @param request - GetPropertiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPropertiesResponse
   */
  async getPropertiesWithOptions(request: $_model.GetPropertiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPropertiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProperties",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPropertiesResponse>(await this.callApi(params, req, runtime), new $_model.GetPropertiesResponse({}));
  }

  /**
   * 获取当前用户的配置
   * 
   * @param request - GetPropertiesRequest
   * @returns GetPropertiesResponse
   */
  async getProperties(request: $_model.GetPropertiesRequest): Promise<$_model.GetPropertiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPropertiesWithOptions(request, runtime);
  }

  /**
   * 查询一键成片剪辑任务
   * 
   * @param request - GetSmartClipTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSmartClipTaskResponse
   */
  async getSmartClipTaskWithOptions(request: $_model.GetSmartClipTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSmartClipTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSmartClipTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSmartClipTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetSmartClipTaskResponse({}));
  }

  /**
   * 查询一键成片剪辑任务
   * 
   * @param request - GetSmartClipTaskRequest
   * @returns GetSmartClipTaskResponse
   */
  async getSmartClipTask(request: $_model.GetSmartClipTaskRequest): Promise<$_model.GetSmartClipTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSmartClipTaskWithOptions(request, runtime);
  }

  /**
   * 根据ID获取热点事件信息
   * 
   * @param request - GetTopicByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTopicByIdResponse
   */
  async getTopicByIdWithOptions(request: $_model.GetTopicByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTopicByIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTopicById",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTopicByIdResponse>(await this.callApi(params, req, runtime), new $_model.GetTopicByIdResponse({}));
  }

  /**
   * 根据ID获取热点事件信息
   * 
   * @param request - GetTopicByIdRequest
   * @returns GetTopicByIdResponse
   */
  async getTopicById(request: $_model.GetTopicByIdRequest): Promise<$_model.GetTopicByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTopicByIdWithOptions(request, runtime);
  }

  /**
   * 获取选题视角分析任务结果
   * 
   * @param request - GetTopicSelectionPerspectiveAnalysisTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTopicSelectionPerspectiveAnalysisTaskResponse
   */
  async getTopicSelectionPerspectiveAnalysisTaskWithOptions(request: $_model.GetTopicSelectionPerspectiveAnalysisTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTopicSelectionPerspectiveAnalysisTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTopicSelectionPerspectiveAnalysisTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTopicSelectionPerspectiveAnalysisTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetTopicSelectionPerspectiveAnalysisTaskResponse({}));
  }

  /**
   * 获取选题视角分析任务结果
   * 
   * @param request - GetTopicSelectionPerspectiveAnalysisTaskRequest
   * @returns GetTopicSelectionPerspectiveAnalysisTaskResponse
   */
  async getTopicSelectionPerspectiveAnalysisTask(request: $_model.GetTopicSelectionPerspectiveAnalysisTaskRequest): Promise<$_model.GetTopicSelectionPerspectiveAnalysisTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTopicSelectionPerspectiveAnalysisTaskWithOptions(request, runtime);
  }

  /**
   * 导入干预文件
   * 
   * @param request - ImportInterveneFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportInterveneFileResponse
   */
  async importInterveneFileWithOptions(request: $_model.ImportInterveneFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportInterveneFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docName)) {
      body["DocName"] = request.docName;
    }

    if (!$dara.isNull(request.fileKey)) {
      body["FileKey"] = request.fileKey;
    }

    if (!$dara.isNull(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportInterveneFile",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportInterveneFileResponse>(await this.callApi(params, req, runtime), new $_model.ImportInterveneFileResponse({}));
  }

  /**
   * 导入干预文件
   * 
   * @param request - ImportInterveneFileRequest
   * @returns ImportInterveneFileResponse
   */
  async importInterveneFile(request: $_model.ImportInterveneFileRequest): Promise<$_model.ImportInterveneFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importInterveneFileWithOptions(request, runtime);
  }

  /**
   * 异步导入干预文件
   * 
   * @param request - ImportInterveneFileAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportInterveneFileAsyncResponse
   */
  async importInterveneFileAsyncWithOptions(request: $_model.ImportInterveneFileAsyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportInterveneFileAsyncResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docName)) {
      body["DocName"] = request.docName;
    }

    if (!$dara.isNull(request.fileKey)) {
      body["FileKey"] = request.fileKey;
    }

    if (!$dara.isNull(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportInterveneFileAsync",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportInterveneFileAsyncResponse>(await this.callApi(params, req, runtime), new $_model.ImportInterveneFileAsyncResponse({}));
  }

  /**
   * 异步导入干预文件
   * 
   * @param request - ImportInterveneFileAsyncRequest
   * @returns ImportInterveneFileAsyncResponse
   */
  async importInterveneFileAsync(request: $_model.ImportInterveneFileAsyncRequest): Promise<$_model.ImportInterveneFileAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importInterveneFileAsyncWithOptions(request, runtime);
  }

  /**
   * 设置干预全局回复
   * 
   * @param tmpReq - InsertInterveneGlobalReplyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsertInterveneGlobalReplyResponse
   */
  async insertInterveneGlobalReplyWithOptions(tmpReq: $_model.InsertInterveneGlobalReplyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InsertInterveneGlobalReplyResponse> {
    tmpReq.validate();
    let request = new $_model.InsertInterveneGlobalReplyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.replyMessagList)) {
      request.replyMessagListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.replyMessagList, "ReplyMessagList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.replyMessagListShrink)) {
      body["ReplyMessagList"] = request.replyMessagListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsertInterveneGlobalReply",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsertInterveneGlobalReplyResponse>(await this.callApi(params, req, runtime), new $_model.InsertInterveneGlobalReplyResponse({}));
  }

  /**
   * 设置干预全局回复
   * 
   * @param request - InsertInterveneGlobalReplyRequest
   * @returns InsertInterveneGlobalReplyResponse
   */
  async insertInterveneGlobalReply(request: $_model.InsertInterveneGlobalReplyRequest): Promise<$_model.InsertInterveneGlobalReplyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.insertInterveneGlobalReplyWithOptions(request, runtime);
  }

  /**
   * 插入干预规则
   * 
   * @param tmpReq - InsertInterveneRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsertInterveneRuleResponse
   */
  async insertInterveneRuleWithOptions(tmpReq: $_model.InsertInterveneRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InsertInterveneRuleResponse> {
    tmpReq.validate();
    let request = new $_model.InsertInterveneRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.interveneRuleConfig)) {
      request.interveneRuleConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.interveneRuleConfig, "InterveneRuleConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.interveneRuleConfigShrink)) {
      body["InterveneRuleConfig"] = request.interveneRuleConfigShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsertInterveneRule",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsertInterveneRuleResponse>(await this.callApi(params, req, runtime), new $_model.InsertInterveneRuleResponse({}));
  }

  /**
   * 插入干预规则
   * 
   * @param request - InsertInterveneRuleRequest
   * @returns InsertInterveneRuleResponse
   */
  async insertInterveneRule(request: $_model.InsertInterveneRuleRequest): Promise<$_model.InsertInterveneRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.insertInterveneRuleWithOptions(request, runtime);
  }

  /**
   * 分页获取企业VOC分析任务明细列表
   * 
   * @param tmpReq - ListAnalysisTagDetailByTaskIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAnalysisTagDetailByTaskIdResponse
   */
  async listAnalysisTagDetailByTaskIdWithOptions(tmpReq: $_model.ListAnalysisTagDetailByTaskIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAnalysisTagDetailByTaskIdResponse> {
    tmpReq.validate();
    let request = new $_model.ListAnalysisTagDetailByTaskIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.categories)) {
      request.categoriesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.categories, "Categories", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoriesShrink)) {
      body["Categories"] = request.categoriesShrink;
    }

    if (!$dara.isNull(request.current)) {
      body["Current"] = request.current;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.size)) {
      body["Size"] = request.size;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAnalysisTagDetailByTaskId",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAnalysisTagDetailByTaskIdResponse>(await this.callApi(params, req, runtime), new $_model.ListAnalysisTagDetailByTaskIdResponse({}));
  }

  /**
   * 分页获取企业VOC分析任务明细列表
   * 
   * @param request - ListAnalysisTagDetailByTaskIdRequest
   * @returns ListAnalysisTagDetailByTaskIdResponse
   */
  async listAnalysisTagDetailByTaskId(request: $_model.ListAnalysisTagDetailByTaskIdRequest): Promise<$_model.ListAnalysisTagDetailByTaskIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAnalysisTagDetailByTaskIdWithOptions(request, runtime);
  }

  /**
   * 查询任务列表
   * 
   * @param tmpReq - ListAsyncTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAsyncTasksResponse
   */
  async listAsyncTasksWithOptions(tmpReq: $_model.ListAsyncTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAsyncTasksResponse> {
    tmpReq.validate();
    let request = new $_model.ListAsyncTasksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.taskStatusList)) {
      request.taskStatusListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskStatusList, "TaskStatusList", "json");
    }

    if (!$dara.isNull(tmpReq.taskTypeList)) {
      request.taskTypeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskTypeList, "TaskTypeList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createTimeEnd)) {
      body["CreateTimeEnd"] = request.createTimeEnd;
    }

    if (!$dara.isNull(request.createTimeStart)) {
      body["CreateTimeStart"] = request.createTimeStart;
    }

    if (!$dara.isNull(request.current)) {
      body["Current"] = request.current;
    }

    if (!$dara.isNull(request.size)) {
      body["Size"] = request.size;
    }

    if (!$dara.isNull(request.taskCode)) {
      body["TaskCode"] = request.taskCode;
    }

    if (!$dara.isNull(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.taskStatus)) {
      body["TaskStatus"] = request.taskStatus;
    }

    if (!$dara.isNull(request.taskStatusListShrink)) {
      body["TaskStatusList"] = request.taskStatusListShrink;
    }

    if (!$dara.isNull(request.taskType)) {
      body["TaskType"] = request.taskType;
    }

    if (!$dara.isNull(request.taskTypeListShrink)) {
      body["TaskTypeList"] = request.taskTypeListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAsyncTasks",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAsyncTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListAsyncTasksResponse({}));
  }

  /**
   * 查询任务列表
   * 
   * @param request - ListAsyncTasksRequest
   * @returns ListAsyncTasksResponse
   */
  async listAsyncTasks(request: $_model.ListAsyncTasksRequest): Promise<$_model.ListAsyncTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAsyncTasksWithOptions(request, runtime);
  }

  /**
   * 获取系统自定义预设
   * 
   * @param request - ListBuildConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBuildConfigsResponse
   */
  async listBuildConfigsWithOptions(request: $_model.ListBuildConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBuildConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBuildConfigs",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBuildConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListBuildConfigsResponse({}));
  }

  /**
   * 获取系统自定义预设
   * 
   * @param request - ListBuildConfigsRequest
   * @returns ListBuildConfigsResponse
   */
  async listBuildConfigs(request: $_model.ListBuildConfigsRequest): Promise<$_model.ListBuildConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBuildConfigsWithOptions(request, runtime);
  }

  /**
   * 自定义文本列表
   * 
   * @param request - ListCustomTextRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomTextResponse
   */
  async listCustomTextWithOptions(request: $_model.ListCustomTextRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomTextResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.commodityCode)) {
      body["CommodityCode"] = request.commodityCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomText",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCustomTextResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomTextResponse({}));
  }

  /**
   * 自定义文本列表
   * 
   * @param request - ListCustomTextRequest
   * @returns ListCustomTextResponse
   */
  async listCustomText(request: $_model.ListCustomTextRequest): Promise<$_model.ListCustomTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomTextWithOptions(request, runtime);
  }

  /**
   * 自定义视角列表
   * 
   * @param tmpReq - ListCustomViewPointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomViewPointsResponse
   */
  async listCustomViewPointsWithOptions(tmpReq: $_model.ListCustomViewPointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomViewPointsResponse> {
    tmpReq.validate();
    let request = new $_model.ListCustomViewPointsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.attitudes)) {
      request.attitudesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.attitudes, "Attitudes", "json");
    }

    if (!$dara.isNull(tmpReq.customViewPointIds)) {
      request.customViewPointIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customViewPointIds, "CustomViewPointIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attitude)) {
      body["Attitude"] = request.attitude;
    }

    if (!$dara.isNull(request.attitudesShrink)) {
      body["Attitudes"] = request.attitudesShrink;
    }

    if (!$dara.isNull(request.customViewPointId)) {
      body["CustomViewPointId"] = request.customViewPointId;
    }

    if (!$dara.isNull(request.customViewPointIdsShrink)) {
      body["CustomViewPointIds"] = request.customViewPointIdsShrink;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.topic)) {
      body["Topic"] = request.topic;
    }

    if (!$dara.isNull(request.topicId)) {
      body["TopicId"] = request.topicId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomViewPoints",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCustomViewPointsResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomViewPointsResponse({}));
  }

  /**
   * 自定义视角列表
   * 
   * @param request - ListCustomViewPointsRequest
   * @returns ListCustomViewPointsResponse
   */
  async listCustomViewPoints(request: $_model.ListCustomViewPointsRequest): Promise<$_model.ListCustomViewPointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomViewPointsWithOptions(request, runtime);
  }

  /**
   * 查询数据集文档列表
   * 
   * @param tmpReq - ListDatasetDocumentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatasetDocumentsResponse
   */
  async listDatasetDocumentsWithOptions(tmpReq: $_model.ListDatasetDocumentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDatasetDocumentsResponse> {
    tmpReq.validate();
    let request = new $_model.ListDatasetDocumentsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.excludeFields)) {
      request.excludeFieldsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.excludeFields, "ExcludeFields", "json");
    }

    if (!$dara.isNull(tmpReq.includeFields)) {
      request.includeFieldsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.includeFields, "IncludeFields", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetDescription)) {
      body["DatasetDescription"] = request.datasetDescription;
    }

    if (!$dara.isNull(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!$dara.isNull(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.docType)) {
      body["DocType"] = request.docType;
    }

    if (!$dara.isNull(request.excludeFieldsShrink)) {
      body["ExcludeFields"] = request.excludeFieldsShrink;
    }

    if (!$dara.isNull(request.includeFieldsShrink)) {
      body["IncludeFields"] = request.includeFieldsShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      body["Query"] = request.query;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatasetDocuments",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDatasetDocumentsResponse>(await this.callApi(params, req, runtime), new $_model.ListDatasetDocumentsResponse({}));
  }

  /**
   * 查询数据集文档列表
   * 
   * @param request - ListDatasetDocumentsRequest
   * @returns ListDatasetDocumentsResponse
   */
  async listDatasetDocuments(request: $_model.ListDatasetDocumentsRequest): Promise<$_model.ListDatasetDocumentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDatasetDocumentsWithOptions(request, runtime);
  }

  /**
   * 数据集管理-查询
   * 
   * @param request - ListDatasetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatasetsResponse
   */
  async listDatasetsWithOptions(request: $_model.ListDatasetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDatasetsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!$dara.isNull(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.datasetType)) {
      body["DatasetType"] = request.datasetType;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.includeConfig)) {
      body["IncludeConfig"] = request.includeConfig;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchDatasetEnable)) {
      body["SearchDatasetEnable"] = request.searchDatasetEnable;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatasets",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDatasetsResponse>(await this.callApi(params, req, runtime), new $_model.ListDatasetsResponse({}));
  }

  /**
   * 数据集管理-查询
   * 
   * @param request - ListDatasetsRequest
   * @returns ListDatasetsResponse
   */
  async listDatasets(request: $_model.ListDatasetsRequest): Promise<$_model.ListDatasetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDatasetsWithOptions(request, runtime);
  }

  /**
   * 生成历史列表
   * 
   * @param request - ListDialoguesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDialoguesResponse
   */
  async listDialoguesWithOptions(request: $_model.ListDialoguesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDialoguesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.current)) {
      body["Current"] = request.current;
    }

    if (!$dara.isNull(request.dialogueType)) {
      body["DialogueType"] = request.dialogueType;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.size)) {
      body["Size"] = request.size;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDialogues",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDialoguesResponse>(await this.callApi(params, req, runtime), new $_model.ListDialoguesResponse({}));
  }

  /**
   * 生成历史列表
   * 
   * @param request - ListDialoguesRequest
   * @returns ListDialoguesResponse
   */
  async listDialogues(request: $_model.ListDialoguesRequest): Promise<$_model.ListDialoguesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDialoguesWithOptions(request, runtime);
  }

  /**
   * 妙读获取文档列表
   * 
   * @param tmpReq - ListDocsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDocsResponse
   */
  async listDocsWithOptions(tmpReq: $_model.ListDocsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDocsResponse> {
    tmpReq.validate();
    let request = new $_model.ListDocsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.statuses)) {
      request.statusesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.statuses, "Statuses", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.docName)) {
      body["DocName"] = request.docName;
    }

    if (!$dara.isNull(request.docType)) {
      body["DocType"] = request.docType;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.skip)) {
      body["Skip"] = request.skip;
    }

    if (!$dara.isNull(request.statusesShrink)) {
      body["Statuses"] = request.statusesShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDocs",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDocsResponse>(await this.callApi(params, req, runtime), new $_model.ListDocsResponse({}));
  }

  /**
   * 妙读获取文档列表
   * 
   * @param request - ListDocsRequest
   * @returns ListDocsResponse
   */
  async listDocs(request: $_model.ListDocsRequest): Promise<$_model.ListDocsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDocsWithOptions(request, runtime);
  }

  /**
   * 新颖视角列表
   * 
   * @param request - ListFreshViewPointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFreshViewPointsResponse
   */
  async listFreshViewPointsWithOptions(request: $_model.ListFreshViewPointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFreshViewPointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.topic)) {
      body["Topic"] = request.topic;
    }

    if (!$dara.isNull(request.topicSource)) {
      body["TopicSource"] = request.topicSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFreshViewPoints",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFreshViewPointsResponse>(await this.callApi(params, req, runtime), new $_model.ListFreshViewPointsResponse({}));
  }

  /**
   * 新颖视角列表
   * 
   * @param request - ListFreshViewPointsRequest
   * @returns ListFreshViewPointsResponse
   */
  async listFreshViewPoints(request: $_model.ListFreshViewPointsRequest): Promise<$_model.ListFreshViewPointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFreshViewPointsWithOptions(request, runtime);
  }

  /**
   * 文档管理-列表。
   * 
   * @param request - ListGeneratedContentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGeneratedContentsResponse
   */
  async listGeneratedContentsWithOptions(request: $_model.ListGeneratedContentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGeneratedContentsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contentDomain)) {
      body["ContentDomain"] = request.contentDomain;
    }

    if (!$dara.isNull(request.current)) {
      body["Current"] = request.current;
    }

    if (!$dara.isNull(request.dataType)) {
      body["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.query)) {
      body["Query"] = request.query;
    }

    if (!$dara.isNull(request.size)) {
      body["Size"] = request.size;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGeneratedContents",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGeneratedContentsResponse>(await this.callApi(params, req, runtime), new $_model.ListGeneratedContentsResponse({}));
  }

  /**
   * 文档管理-列表。
   * 
   * @param request - ListGeneratedContentsRequest
   * @returns ListGeneratedContentsResponse
   */
  async listGeneratedContents(request: $_model.ListGeneratedContentsRequest): Promise<$_model.ListGeneratedContentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGeneratedContentsWithOptions(request, runtime);
  }

  /**
   * 获取分类的热点新闻
   * 
   * @param tmpReq - ListHotNewsWithTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotNewsWithTypeResponse
   */
  async listHotNewsWithTypeWithOptions(tmpReq: $_model.ListHotNewsWithTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHotNewsWithTypeResponse> {
    tmpReq.validate();
    let request = new $_model.ListHotNewsWithTypeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.newsTypes)) {
      request.newsTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.newsTypes, "NewsTypes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.current)) {
      body["Current"] = request.current;
    }

    if (!$dara.isNull(request.newsType)) {
      body["NewsType"] = request.newsType;
    }

    if (!$dara.isNull(request.newsTypesShrink)) {
      body["NewsTypes"] = request.newsTypesShrink;
    }

    if (!$dara.isNull(request.size)) {
      body["Size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotNewsWithType",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHotNewsWithTypeResponse>(await this.callApi(params, req, runtime), new $_model.ListHotNewsWithTypeResponse({}));
  }

  /**
   * 获取分类的热点新闻
   * 
   * @param request - ListHotNewsWithTypeRequest
   * @returns ListHotNewsWithTypeResponse
   */
  async listHotNewsWithType(request: $_model.ListHotNewsWithTypeRequest): Promise<$_model.ListHotNewsWithTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHotNewsWithTypeWithOptions(request, runtime);
  }

  /**
   * 获取所有平台热榜源列表
   * 
   * @param request - ListHotSourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotSourcesResponse
   */
  async listHotSourcesWithOptions(request: $_model.ListHotSourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHotSourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotSources",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHotSourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListHotSourcesResponse({}));
  }

  /**
   * 获取所有平台热榜源列表
   * 
   * @param request - ListHotSourcesRequest
   * @returns ListHotSourcesResponse
   */
  async listHotSources(request: $_model.ListHotSourcesRequest): Promise<$_model.ListHotSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHotSourcesWithOptions(request, runtime);
  }

  /**
   * 获取热点事件列表
   * 
   * @param tmpReq - ListHotTopicsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotTopicsResponse
   */
  async listHotTopicsWithOptions(tmpReq: $_model.ListHotTopicsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHotTopicsResponse> {
    tmpReq.validate();
    let request = new $_model.ListHotTopicsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.topicIds)) {
      request.topicIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.topicIds, "TopicIds", "json");
    }

    if (!$dara.isNull(tmpReq.topics)) {
      request.topicsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.topics, "Topics", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.topicIdsShrink)) {
      body["TopicIds"] = request.topicIdsShrink;
    }

    if (!$dara.isNull(request.topicQuery)) {
      body["TopicQuery"] = request.topicQuery;
    }

    if (!$dara.isNull(request.topicSource)) {
      body["TopicSource"] = request.topicSource;
    }

    if (!$dara.isNull(request.topicVersion)) {
      body["TopicVersion"] = request.topicVersion;
    }

    if (!$dara.isNull(request.topicsShrink)) {
      body["Topics"] = request.topicsShrink;
    }

    if (!$dara.isNull(request.withNews)) {
      body["WithNews"] = request.withNews;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotTopics",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHotTopicsResponse>(await this.callApi(params, req, runtime), new $_model.ListHotTopicsResponse({}));
  }

  /**
   * 获取热点事件列表
   * 
   * @param request - ListHotTopicsRequest
   * @returns ListHotTopicsResponse
   */
  async listHotTopics(request: $_model.ListHotTopicsRequest): Promise<$_model.ListHotTopicsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHotTopicsWithOptions(request, runtime);
  }

  /**
   * 热门视角列表
   * 
   * @param request - ListHotViewPointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotViewPointsResponse
   */
  async listHotViewPointsWithOptions(request: $_model.ListHotViewPointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHotViewPointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.topic)) {
      body["Topic"] = request.topic;
    }

    if (!$dara.isNull(request.topicSource)) {
      body["TopicSource"] = request.topicSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotViewPoints",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHotViewPointsResponse>(await this.callApi(params, req, runtime), new $_model.ListHotViewPointsResponse({}));
  }

  /**
   * 热门视角列表
   * 
   * @param request - ListHotViewPointsRequest
   * @returns ListHotViewPointsResponse
   */
  async listHotViewPoints(request: $_model.ListHotViewPointsRequest): Promise<$_model.ListHotViewPointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHotViewPointsWithOptions(request, runtime);
  }

  /**
   * 获得干预项目数量列表
   * 
   * @param request - ListInterveneCntRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInterveneCntResponse
   */
  async listInterveneCntWithOptions(request: $_model.ListInterveneCntRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInterveneCntResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInterveneCnt",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInterveneCntResponse>(await this.callApi(params, req, runtime), new $_model.ListInterveneCntResponse({}));
  }

  /**
   * 获得干预项目数量列表
   * 
   * @param request - ListInterveneCntRequest
   * @returns ListInterveneCntResponse
   */
  async listInterveneCnt(request: $_model.ListInterveneCntRequest): Promise<$_model.ListInterveneCntResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInterveneCntWithOptions(request, runtime);
  }

  /**
   * 获得导入任务列表
   * 
   * @param request - ListInterveneImportTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInterveneImportTasksResponse
   */
  async listInterveneImportTasksWithOptions(request: $_model.ListInterveneImportTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInterveneImportTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInterveneImportTasks",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInterveneImportTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListInterveneImportTasksResponse({}));
  }

  /**
   * 获得导入任务列表
   * 
   * @param request - ListInterveneImportTasksRequest
   * @returns ListInterveneImportTasksResponse
   */
  async listInterveneImportTasks(request: $_model.ListInterveneImportTasksRequest): Promise<$_model.ListInterveneImportTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInterveneImportTasksWithOptions(request, runtime);
  }

  /**
   * 获得干预规则列表
   * 
   * @param request - ListInterveneRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInterveneRulesResponse
   */
  async listInterveneRulesWithOptions(request: $_model.ListInterveneRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInterveneRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInterveneRules",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInterveneRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListInterveneRulesResponse({}));
  }

  /**
   * 获得干预规则列表
   * 
   * @param request - ListInterveneRulesRequest
   * @returns ListInterveneRulesResponse
   */
  async listInterveneRules(request: $_model.ListInterveneRulesRequest): Promise<$_model.ListInterveneRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInterveneRulesWithOptions(request, runtime);
  }

  /**
   * 获得干预项列表
   * 
   * @param request - ListIntervenesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIntervenesResponse
   */
  async listIntervenesWithOptions(request: $_model.ListIntervenesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIntervenesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.interveneType)) {
      body["InterveneType"] = request.interveneType;
    }

    if (!$dara.isNull(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      body["Query"] = request.query;
    }

    if (!$dara.isNull(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIntervenes",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIntervenesResponse>(await this.callApi(params, req, runtime), new $_model.ListIntervenesResponse({}));
  }

  /**
   * 获得干预项列表
   * 
   * @param request - ListIntervenesRequest
   * @returns ListIntervenesResponse
   */
  async listIntervenes(request: $_model.ListIntervenesRequest): Promise<$_model.ListIntervenesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIntervenesWithOptions(request, runtime);
  }

  /**
   * 查询素材列表
   * 
   * @param tmpReq - ListMaterialDocumentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMaterialDocumentsResponse
   */
  async listMaterialDocumentsWithOptions(tmpReq: $_model.ListMaterialDocumentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMaterialDocumentsResponse> {
    tmpReq.validate();
    let request = new $_model.ListMaterialDocumentsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.docTypeList)) {
      request.docTypeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.docTypeList, "DocTypeList", "json");
    }

    if (!$dara.isNull(tmpReq.keywords)) {
      request.keywordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keywords, "Keywords", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.createTimeEnd)) {
      body["CreateTimeEnd"] = request.createTimeEnd;
    }

    if (!$dara.isNull(request.createTimeStart)) {
      body["CreateTimeStart"] = request.createTimeStart;
    }

    if (!$dara.isNull(request.current)) {
      body["Current"] = request.current;
    }

    if (!$dara.isNull(request.docType)) {
      body["DocType"] = request.docType;
    }

    if (!$dara.isNull(request.docTypeListShrink)) {
      body["DocTypeList"] = request.docTypeListShrink;
    }

    if (!$dara.isNull(request.generatePublicUrl)) {
      body["GeneratePublicUrl"] = request.generatePublicUrl;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.keywordsShrink)) {
      body["Keywords"] = request.keywordsShrink;
    }

    if (!$dara.isNull(request.query)) {
      body["Query"] = request.query;
    }

    if (!$dara.isNull(request.shareAttr)) {
      body["ShareAttr"] = request.shareAttr;
    }

    if (!$dara.isNull(request.size)) {
      body["Size"] = request.size;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    if (!$dara.isNull(request.updateTimeEnd)) {
      body["UpdateTimeEnd"] = request.updateTimeEnd;
    }

    if (!$dara.isNull(request.updateTimeStart)) {
      body["UpdateTimeStart"] = request.updateTimeStart;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMaterialDocuments",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMaterialDocumentsResponse>(await this.callApi(params, req, runtime), new $_model.ListMaterialDocumentsResponse({}));
  }

  /**
   * 查询素材列表
   * 
   * @param request - ListMaterialDocumentsRequest
   * @returns ListMaterialDocumentsResponse
   */
  async listMaterialDocuments(request: $_model.ListMaterialDocumentsRequest): Promise<$_model.ListMaterialDocumentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMaterialDocumentsWithOptions(request, runtime);
  }

  /**
   * 获取选题策划列表
   * 
   * @param tmpReq - ListPlanningProposalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPlanningProposalResponse
   */
  async listPlanningProposalWithOptions(tmpReq: $_model.ListPlanningProposalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPlanningProposalResponse> {
    tmpReq.validate();
    let request = new $_model.ListPlanningProposalShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.customViewPointIds)) {
      request.customViewPointIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customViewPointIds, "CustomViewPointIds", "json");
    }

    if (!$dara.isNull(tmpReq.titles)) {
      request.titlesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.titles, "Titles", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customViewPointId)) {
      body["CustomViewPointId"] = request.customViewPointId;
    }

    if (!$dara.isNull(request.customViewPointIdsShrink)) {
      body["CustomViewPointIds"] = request.customViewPointIdsShrink;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.titlesShrink)) {
      body["Titles"] = request.titlesShrink;
    }

    if (!$dara.isNull(request.topic)) {
      body["Topic"] = request.topic;
    }

    if (!$dara.isNull(request.topicSource)) {
      body["TopicSource"] = request.topicSource;
    }

    if (!$dara.isNull(request.topicVersion)) {
      body["TopicVersion"] = request.topicVersion;
    }

    if (!$dara.isNull(request.viewPointType)) {
      body["ViewPointType"] = request.viewPointType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPlanningProposal",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPlanningProposalResponse>(await this.callApi(params, req, runtime), new $_model.ListPlanningProposalResponse({}));
  }

  /**
   * 获取选题策划列表
   * 
   * @param request - ListPlanningProposalRequest
   * @returns ListPlanningProposalResponse
   */
  async listPlanningProposal(request: $_model.ListPlanningProposalRequest): Promise<$_model.ListPlanningProposalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPlanningProposalWithOptions(request, runtime);
  }

  /**
   * 查询搜索生成任务对话详情中数据列表
   * 
   * @param request - ListSearchTaskDialogueDatasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSearchTaskDialogueDatasResponse
   */
  async listSearchTaskDialogueDatasWithOptions(request: $_model.ListSearchTaskDialogueDatasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSearchTaskDialogueDatasResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.includeContent)) {
      body["IncludeContent"] = request.includeContent;
    }

    if (!$dara.isNull(request.multimodalSearchType)) {
      body["MultimodalSearchType"] = request.multimodalSearchType;
    }

    if (!$dara.isNull(request.originalSessionId)) {
      body["OriginalSessionId"] = request.originalSessionId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      body["Query"] = request.query;
    }

    if (!$dara.isNull(request.searchModel)) {
      body["SearchModel"] = request.searchModel;
    }

    if (!$dara.isNull(request.searchModelDataValue)) {
      body["SearchModelDataValue"] = request.searchModelDataValue;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSearchTaskDialogueDatas",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSearchTaskDialogueDatasResponse>(await this.callApi(params, req, runtime), new $_model.ListSearchTaskDialogueDatasResponse({}));
  }

  /**
   * 查询搜索生成任务对话详情中数据列表
   * 
   * @param request - ListSearchTaskDialogueDatasRequest
   * @returns ListSearchTaskDialogueDatasResponse
   */
  async listSearchTaskDialogueDatas(request: $_model.ListSearchTaskDialogueDatasRequest): Promise<$_model.ListSearchTaskDialogueDatasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSearchTaskDialogueDatasWithOptions(request, runtime);
  }

  /**
   * 查询妙搜搜索生成任务详情列表
   * 
   * @param request - ListSearchTaskDialoguesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSearchTaskDialoguesResponse
   */
  async listSearchTaskDialoguesWithOptions(request: $_model.ListSearchTaskDialoguesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSearchTaskDialoguesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSearchTaskDialogues",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSearchTaskDialoguesResponse>(await this.callApi(params, req, runtime), new $_model.ListSearchTaskDialoguesResponse({}));
  }

  /**
   * 查询妙搜搜索生成任务详情列表
   * 
   * @param request - ListSearchTaskDialoguesRequest
   * @returns ListSearchTaskDialoguesResponse
   */
  async listSearchTaskDialogues(request: $_model.ListSearchTaskDialoguesRequest): Promise<$_model.ListSearchTaskDialoguesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSearchTaskDialoguesWithOptions(request, runtime);
  }

  /**
   * 查询妙搜搜索生成历史任务列表
   * 
   * @param tmpReq - ListSearchTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSearchTasksResponse
   */
  async listSearchTasksWithOptions(tmpReq: $_model.ListSearchTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSearchTasksResponse> {
    tmpReq.validate();
    let request = new $_model.ListSearchTasksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dialogueTypes)) {
      request.dialogueTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dialogueTypes, "DialogueTypes", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dialogueTypesShrink)) {
      body["DialogueTypes"] = request.dialogueTypesShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSearchTasks",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSearchTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListSearchTasksResponse({}));
  }

  /**
   * 查询妙搜搜索生成历史任务列表
   * 
   * @param request - ListSearchTasksRequest
   * @returns ListSearchTasksResponse
   */
  async listSearchTasks(request: $_model.ListSearchTasksRequest): Promise<$_model.ListSearchTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSearchTasksWithOptions(request, runtime);
  }

  /**
   * 获取文体学习分析结果列表
   * 
   * @param request - ListStyleLearningResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStyleLearningResultResponse
   */
  async listStyleLearningResultWithOptions(request: $_model.ListStyleLearningResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListStyleLearningResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.current)) {
      body["Current"] = request.current;
    }

    if (!$dara.isNull(request.size)) {
      body["Size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListStyleLearningResult",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListStyleLearningResultResponse>(await this.callApi(params, req, runtime), new $_model.ListStyleLearningResultResponse({}));
  }

  /**
   * 获取文体学习分析结果列表
   * 
   * @param request - ListStyleLearningResultRequest
   * @returns ListStyleLearningResultResponse
   */
  async listStyleLearningResult(request: $_model.ListStyleLearningResultRequest): Promise<$_model.ListStyleLearningResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listStyleLearningResultWithOptions(request, runtime);
  }

  /**
   * 时效性视角列表
   * 
   * @param request - ListTimedViewAttitudeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTimedViewAttitudeResponse
   */
  async listTimedViewAttitudeWithOptions(request: $_model.ListTimedViewAttitudeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTimedViewAttitudeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.topic)) {
      body["Topic"] = request.topic;
    }

    if (!$dara.isNull(request.topicSource)) {
      body["TopicSource"] = request.topicSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTimedViewAttitude",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTimedViewAttitudeResponse>(await this.callApi(params, req, runtime), new $_model.ListTimedViewAttitudeResponse({}));
  }

  /**
   * 时效性视角列表
   * 
   * @param request - ListTimedViewAttitudeRequest
   * @returns ListTimedViewAttitudeResponse
   */
  async listTimedViewAttitude(request: $_model.ListTimedViewAttitudeRequest): Promise<$_model.ListTimedViewAttitudeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTimedViewAttitudeWithOptions(request, runtime);
  }

  /**
   * 获取热点推荐事件
   * 
   * @param request - ListTopicRecommendEventListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTopicRecommendEventListResponse
   */
  async listTopicRecommendEventListWithOptions(request: $_model.ListTopicRecommendEventListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTopicRecommendEventListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTopicRecommendEventList",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTopicRecommendEventListResponse>(await this.callApi(params, req, runtime), new $_model.ListTopicRecommendEventListResponse({}));
  }

  /**
   * 获取热点推荐事件
   * 
   * @param request - ListTopicRecommendEventListRequest
   * @returns ListTopicRecommendEventListResponse
   */
  async listTopicRecommendEventList(request: $_model.ListTopicRecommendEventListRequest): Promise<$_model.ListTopicRecommendEventListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTopicRecommendEventListWithOptions(request, runtime);
  }

  /**
   * 获取主题事件推荐观点列表
   * 
   * @param request - ListTopicViewPointRecommendEventListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTopicViewPointRecommendEventListResponse
   */
  async listTopicViewPointRecommendEventListWithOptions(request: $_model.ListTopicViewPointRecommendEventListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTopicViewPointRecommendEventListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTopicViewPointRecommendEventList",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTopicViewPointRecommendEventListResponse>(await this.callApi(params, req, runtime), new $_model.ListTopicViewPointRecommendEventListResponse({}));
  }

  /**
   * 获取主题事件推荐观点列表
   * 
   * @param request - ListTopicViewPointRecommendEventListRequest
   * @returns ListTopicViewPointRecommendEventListResponse
   */
  async listTopicViewPointRecommendEventList(request: $_model.ListTopicViewPointRecommendEventListRequest): Promise<$_model.ListTopicViewPointRecommendEventListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTopicViewPointRecommendEventListWithOptions(request, runtime);
  }

  /**
   * 获取系统所有实例信息
   * 
   * @param request - ListVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVersionsResponse
   */
  async listVersionsWithOptions(request: $_model.ListVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVersionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVersions",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListVersionsResponse({}));
  }

  /**
   * 获取系统所有实例信息
   * 
   * @param request - ListVersionsRequest
   * @returns ListVersionsResponse
   */
  async listVersions(request: $_model.ListVersionsRequest): Promise<$_model.ListVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVersionsWithOptions(request, runtime);
  }

  /**
   * 网友视角列表
   * 
   * @param request - ListWebReviewPointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWebReviewPointsResponse
   */
  async listWebReviewPointsWithOptions(request: $_model.ListWebReviewPointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWebReviewPointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.topic)) {
      body["Topic"] = request.topic;
    }

    if (!$dara.isNull(request.topicSource)) {
      body["TopicSource"] = request.topicSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWebReviewPoints",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWebReviewPointsResponse>(await this.callApi(params, req, runtime), new $_model.ListWebReviewPointsResponse({}));
  }

  /**
   * 网友视角列表
   * 
   * @param request - ListWebReviewPointsRequest
   * @returns ListWebReviewPointsResponse
   */
  async listWebReviewPoints(request: $_model.ListWebReviewPointsRequest): Promise<$_model.ListWebReviewPointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWebReviewPointsWithOptions(request, runtime);
  }

  /**
   * 根据taskId查询异步任务状态
   * 
   * @param request - QueryAsyncTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAsyncTaskResponse
   */
  async queryAsyncTaskWithOptions(request: $_model.QueryAsyncTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAsyncTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAsyncTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAsyncTaskResponse>(await this.callApi(params, req, runtime), new $_model.QueryAsyncTaskResponse({}));
  }

  /**
   * 根据taskId查询异步任务状态
   * 
   * @param request - QueryAsyncTaskRequest
   * @returns QueryAsyncTaskResponse
   */
  async queryAsyncTask(request: $_model.QueryAsyncTaskRequest): Promise<$_model.QueryAsyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAsyncTaskWithOptions(request, runtime);
  }

  /**
   * 内容缩写
   * 
   * @param request - RunAbbreviationContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunAbbreviationContentResponse
   */
  async runAbbreviationContentWithOptions(request: $_model.RunAbbreviationContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunAbbreviationContentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunAbbreviationContent",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunAbbreviationContentResponse>(await this.callApi(params, req, runtime), new $_model.RunAbbreviationContentResponse({}));
  }

  /**
   * 内容缩写
   * 
   * @param request - RunAbbreviationContentRequest
   * @returns RunAbbreviationContentResponse
   */
  async runAbbreviationContent(request: $_model.RunAbbreviationContentRequest): Promise<$_model.RunAbbreviationContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runAbbreviationContentWithOptions(request, runtime);
  }

  /**
   * 书籍导读接口
   * 
   * @param request - RunBookIntroductionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunBookIntroductionResponse
   */
  async runBookIntroductionWithOptions(request: $_model.RunBookIntroductionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunBookIntroductionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docId)) {
      body["DocId"] = request.docId;
    }

    if (!$dara.isNull(request.keyPointPrompt)) {
      body["KeyPointPrompt"] = request.keyPointPrompt;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.summaryPrompt)) {
      body["SummaryPrompt"] = request.summaryPrompt;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunBookIntroduction",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunBookIntroductionResponse>(await this.callApi(params, req, runtime), new $_model.RunBookIntroductionResponse({}));
  }

  /**
   * 书籍导读接口
   * 
   * @param request - RunBookIntroductionRequest
   * @returns RunBookIntroductionResponse
   */
  async runBookIntroduction(request: $_model.RunBookIntroductionRequest): Promise<$_model.RunBookIntroductionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runBookIntroductionWithOptions(request, runtime);
  }

  /**
   * 书籍智能卡片接口
   * 
   * @param request - RunBookSmartCardRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunBookSmartCardResponse
   */
  async runBookSmartCardWithOptions(request: $_model.RunBookSmartCardRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunBookSmartCardResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docId)) {
      body["DocId"] = request.docId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunBookSmartCard",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunBookSmartCardResponse>(await this.callApi(params, req, runtime), new $_model.RunBookSmartCardResponse({}));
  }

  /**
   * 书籍智能卡片接口
   * 
   * @param request - RunBookSmartCardRequest
   * @returns RunBookSmartCardResponse
   */
  async runBookSmartCard(request: $_model.RunBookSmartCardRequest): Promise<$_model.RunBookSmartCardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runBookSmartCardWithOptions(request, runtime);
  }

  /**
   * 客户之声预测
   * 
   * @param tmpReq - RunCommentGenerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunCommentGenerationResponse
   */
  async runCommentGenerationWithOptions(tmpReq: $_model.RunCommentGenerationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunCommentGenerationResponse> {
    tmpReq.validate();
    let request = new $_model.RunCommentGenerationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.lengthRange)) {
      request.lengthRangeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.lengthRange, "LengthRange", "json");
    }

    if (!$dara.isNull(tmpReq.sentiment)) {
      request.sentimentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sentiment, "Sentiment", "json");
    }

    if (!$dara.isNull(tmpReq.type)) {
      request.typeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.type, "Type", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allowEmoji)) {
      body["AllowEmoji"] = request.allowEmoji;
    }

    if (!$dara.isNull(request.extraInfo)) {
      body["ExtraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.length)) {
      body["Length"] = request.length;
    }

    if (!$dara.isNull(request.lengthRangeShrink)) {
      body["LengthRange"] = request.lengthRangeShrink;
    }

    if (!$dara.isNull(request.numComments)) {
      body["NumComments"] = request.numComments;
    }

    if (!$dara.isNull(request.sentimentShrink)) {
      body["Sentiment"] = request.sentimentShrink;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.sourceMaterial)) {
      body["SourceMaterial"] = request.sourceMaterial;
    }

    if (!$dara.isNull(request.style)) {
      body["Style"] = request.style;
    }

    if (!$dara.isNull(request.typeShrink)) {
      body["Type"] = request.typeShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunCommentGeneration",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunCommentGenerationResponse>(await this.callApi(params, req, runtime), new $_model.RunCommentGenerationResponse({}));
  }

  /**
   * 客户之声预测
   * 
   * @param request - RunCommentGenerationRequest
   * @returns RunCommentGenerationResponse
   */
  async runCommentGeneration(request: $_model.RunCommentGenerationRequest): Promise<$_model.RunCommentGenerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runCommentGenerationWithOptions(request, runtime);
  }

  /**
   * 内容续写
   * 
   * @param request - RunContinueContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunContinueContentResponse
   */
  async runContinueContentWithOptions(request: $_model.RunContinueContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunContinueContentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunContinueContent",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunContinueContentResponse>(await this.callApi(params, req, runtime), new $_model.RunContinueContentResponse({}));
  }

  /**
   * 内容续写
   * 
   * @param request - RunContinueContentRequest
   * @returns RunContinueContentResponse
   */
  async runContinueContent(request: $_model.RunContinueContentRequest): Promise<$_model.RunContinueContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runContinueContentWithOptions(request, runtime);
  }

  /**
   * 自定义热点话题分析
   * 
   * @param request - RunCustomHotTopicAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunCustomHotTopicAnalysisResponse
   */
  async runCustomHotTopicAnalysisWithOptions(request: $_model.RunCustomHotTopicAnalysisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunCustomHotTopicAnalysisResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.askUser)) {
      body["AskUser"] = request.askUser;
    }

    if (!$dara.isNull(request.forceAnalysisExistsTopic)) {
      body["ForceAnalysisExistsTopic"] = request.forceAnalysisExistsTopic;
    }

    if (!$dara.isNull(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.userBack)) {
      body["UserBack"] = request.userBack;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunCustomHotTopicAnalysis",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunCustomHotTopicAnalysisResponse>(await this.callApi(params, req, runtime), new $_model.RunCustomHotTopicAnalysisResponse({}));
  }

  /**
   * 自定义热点话题分析
   * 
   * @param request - RunCustomHotTopicAnalysisRequest
   * @returns RunCustomHotTopicAnalysisResponse
   */
  async runCustomHotTopicAnalysis(request: $_model.RunCustomHotTopicAnalysisRequest): Promise<$_model.RunCustomHotTopicAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runCustomHotTopicAnalysisWithOptions(request, runtime);
  }

  /**
   * 自定义选题视角分析
   * 
   * @param request - RunCustomHotTopicViewPointAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunCustomHotTopicViewPointAnalysisResponse
   */
  async runCustomHotTopicViewPointAnalysisWithOptions(request: $_model.RunCustomHotTopicViewPointAnalysisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunCustomHotTopicViewPointAnalysisResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.askUser)) {
      body["AskUser"] = request.askUser;
    }

    if (!$dara.isNull(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.searchQuery)) {
      body["SearchQuery"] = request.searchQuery;
    }

    if (!$dara.isNull(request.skipAskUser)) {
      body["SkipAskUser"] = request.skipAskUser;
    }

    if (!$dara.isNull(request.topic)) {
      body["Topic"] = request.topic;
    }

    if (!$dara.isNull(request.topicId)) {
      body["TopicId"] = request.topicId;
    }

    if (!$dara.isNull(request.topicSource)) {
      body["TopicSource"] = request.topicSource;
    }

    if (!$dara.isNull(request.topicVersion)) {
      body["TopicVersion"] = request.topicVersion;
    }

    if (!$dara.isNull(request.userBack)) {
      body["UserBack"] = request.userBack;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunCustomHotTopicViewPointAnalysis",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunCustomHotTopicViewPointAnalysisResponse>(await this.callApi(params, req, runtime), new $_model.RunCustomHotTopicViewPointAnalysisResponse({}));
  }

  /**
   * 自定义选题视角分析
   * 
   * @param request - RunCustomHotTopicViewPointAnalysisRequest
   * @returns RunCustomHotTopicViewPointAnalysisResponse
   */
  async runCustomHotTopicViewPointAnalysis(request: $_model.RunCustomHotTopicViewPointAnalysisRequest): Promise<$_model.RunCustomHotTopicViewPointAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runCustomHotTopicViewPointAnalysisWithOptions(request, runtime);
  }

  /**
   * 妙读脑图生成接口
   * 
   * @param request - RunDocBrainmapRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunDocBrainmapResponse
   */
  async runDocBrainmapWithOptions(request: $_model.RunDocBrainmapRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunDocBrainmapResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cleanCache)) {
      body["CleanCache"] = request.cleanCache;
    }

    if (!$dara.isNull(request.docId)) {
      body["DocId"] = request.docId;
    }

    if (!$dara.isNull(request.nodeNumber)) {
      body["NodeNumber"] = request.nodeNumber;
    }

    if (!$dara.isNull(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.wordNumber)) {
      body["WordNumber"] = request.wordNumber;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    if (!$dara.isNull(request.referenceContent)) {
      body["referenceContent"] = request.referenceContent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunDocBrainmap",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunDocBrainmapResponse>(await this.callApi(params, req, runtime), new $_model.RunDocBrainmapResponse({}));
  }

  /**
   * 妙读脑图生成接口
   * 
   * @param request - RunDocBrainmapRequest
   * @returns RunDocBrainmapResponse
   */
  async runDocBrainmap(request: $_model.RunDocBrainmapRequest): Promise<$_model.RunDocBrainmapResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runDocBrainmapWithOptions(request, runtime);
  }

  /**
   * 妙读文档导读接口
   * 
   * @param request - RunDocIntroductionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunDocIntroductionResponse
   */
  async runDocIntroductionWithOptions(request: $_model.RunDocIntroductionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunDocIntroductionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cleanCache)) {
      body["CleanCache"] = request.cleanCache;
    }

    if (!$dara.isNull(request.docId)) {
      body["DocId"] = request.docId;
    }

    if (!$dara.isNull(request.introductionPrompt)) {
      body["IntroductionPrompt"] = request.introductionPrompt;
    }

    if (!$dara.isNull(request.keyPointPrompt)) {
      body["KeyPointPrompt"] = request.keyPointPrompt;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.summaryPrompt)) {
      body["SummaryPrompt"] = request.summaryPrompt;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    if (!$dara.isNull(request.referenceContent)) {
      body["referenceContent"] = request.referenceContent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunDocIntroduction",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunDocIntroductionResponse>(await this.callApi(params, req, runtime), new $_model.RunDocIntroductionResponse({}));
  }

  /**
   * 妙读文档导读接口
   * 
   * @param request - RunDocIntroductionRequest
   * @returns RunDocIntroductionResponse
   */
  async runDocIntroduction(request: $_model.RunDocIntroductionRequest): Promise<$_model.RunDocIntroductionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runDocIntroductionWithOptions(request, runtime);
  }

  /**
   * 妙读问答接口
   * 
   * @param tmpReq - RunDocQaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunDocQaResponse
   */
  async runDocQaWithOptions(tmpReq: $_model.RunDocQaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunDocQaResponse> {
    tmpReq.validate();
    let request = new $_model.RunDocQaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.categoryIds)) {
      request.categoryIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.categoryIds, "CategoryIds", "json");
    }

    if (!$dara.isNull(tmpReq.conversationContexts)) {
      request.conversationContextsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.conversationContexts, "ConversationContexts", "json");
    }

    if (!$dara.isNull(tmpReq.docIds)) {
      request.docIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.docIds, "DocIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryIdsShrink)) {
      body["CategoryIds"] = request.categoryIdsShrink;
    }

    if (!$dara.isNull(request.conversationContextsShrink)) {
      body["ConversationContexts"] = request.conversationContextsShrink;
    }

    if (!$dara.isNull(request.docIdsShrink)) {
      body["DocIds"] = request.docIdsShrink;
    }

    if (!$dara.isNull(request.query)) {
      body["Query"] = request.query;
    }

    if (!$dara.isNull(request.referenceContent)) {
      body["ReferenceContent"] = request.referenceContent;
    }

    if (!$dara.isNull(request.searchSource)) {
      body["SearchSource"] = request.searchSource;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunDocQa",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunDocQaResponse>(await this.callApi(params, req, runtime), new $_model.RunDocQaResponse({}));
  }

  /**
   * 妙读问答接口
   * 
   * @param request - RunDocQaRequest
   * @returns RunDocQaResponse
   */
  async runDocQa(request: $_model.RunDocQaRequest): Promise<$_model.RunDocQaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runDocQaWithOptions(request, runtime);
  }

  /**
   * 文档智能卡片接口
   * 
   * @param request - RunDocSmartCardRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunDocSmartCardResponse
   */
  async runDocSmartCardWithOptions(request: $_model.RunDocSmartCardRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunDocSmartCardResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docId)) {
      body["DocId"] = request.docId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunDocSmartCard",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunDocSmartCardResponse>(await this.callApi(params, req, runtime), new $_model.RunDocSmartCardResponse({}));
  }

  /**
   * 文档智能卡片接口
   * 
   * @param request - RunDocSmartCardRequest
   * @returns RunDocSmartCardResponse
   */
  async runDocSmartCard(request: $_model.RunDocSmartCardRequest): Promise<$_model.RunDocSmartCardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runDocSmartCardWithOptions(request, runtime);
  }

  /**
   * 妙读文档总结摘要接口
   * 
   * @param request - RunDocSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunDocSummaryResponse
   */
  async runDocSummaryWithOptions(request: $_model.RunDocSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunDocSummaryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cleanCache)) {
      body["CleanCache"] = request.cleanCache;
    }

    if (!$dara.isNull(request.docId)) {
      body["DocId"] = request.docId;
    }

    if (!$dara.isNull(request.query)) {
      body["Query"] = request.query;
    }

    if (!$dara.isNull(request.recommendContent)) {
      body["RecommendContent"] = request.recommendContent;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunDocSummary",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunDocSummaryResponse>(await this.callApi(params, req, runtime), new $_model.RunDocSummaryResponse({}));
  }

  /**
   * 妙读文档总结摘要接口
   * 
   * @param request - RunDocSummaryRequest
   * @returns RunDocSummaryResponse
   */
  async runDocSummary(request: $_model.RunDocSummaryRequest): Promise<$_model.RunDocSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runDocSummaryWithOptions(request, runtime);
  }

  /**
   * 妙读文档翻译接口
   * 
   * @param request - RunDocTranslationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunDocTranslationResponse
   */
  async runDocTranslationWithOptions(request: $_model.RunDocTranslationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunDocTranslationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cleanCache)) {
      body["CleanCache"] = request.cleanCache;
    }

    if (!$dara.isNull(request.docId)) {
      body["DocId"] = request.docId;
    }

    if (!$dara.isNull(request.recommendContent)) {
      body["RecommendContent"] = request.recommendContent;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.transType)) {
      body["TransType"] = request.transType;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunDocTranslation",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunDocTranslationResponse>(await this.callApi(params, req, runtime), new $_model.RunDocTranslationResponse({}));
  }

  /**
   * 妙读文档翻译接口
   * 
   * @param request - RunDocTranslationRequest
   * @returns RunDocTranslationResponse
   */
  async runDocTranslation(request: $_model.RunDocTranslationRequest): Promise<$_model.RunDocTranslationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runDocTranslationWithOptions(request, runtime);
  }

  /**
   * 文档改写
   * 
   * @param request - RunDocWashingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunDocWashingResponse
   */
  async runDocWashingWithOptions(request: $_model.RunDocWashingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunDocWashingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.referenceContent)) {
      body["ReferenceContent"] = request.referenceContent;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.topic)) {
      body["Topic"] = request.topic;
    }

    if (!$dara.isNull(request.wordNumber)) {
      body["WordNumber"] = request.wordNumber;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    if (!$dara.isNull(request.writingTypeName)) {
      body["WritingTypeName"] = request.writingTypeName;
    }

    if (!$dara.isNull(request.writingTypeRefDoc)) {
      body["WritingTypeRefDoc"] = request.writingTypeRefDoc;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunDocWashing",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunDocWashingResponse>(await this.callApi(params, req, runtime), new $_model.RunDocWashingResponse({}));
  }

  /**
   * 文档改写
   * 
   * @param request - RunDocWashingRequest
   * @returns RunDocWashingResponse
   */
  async runDocWashing(request: $_model.RunDocWashingRequest): Promise<$_model.RunDocWashingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runDocWashingWithOptions(request, runtime);
  }

  /**
   * 内容扩写
   * 
   * @param request - RunExpandContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunExpandContentResponse
   */
  async runExpandContentWithOptions(request: $_model.RunExpandContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunExpandContentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunExpandContent",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunExpandContentResponse>(await this.callApi(params, req, runtime), new $_model.RunExpandContentResponse({}));
  }

  /**
   * 内容扩写
   * 
   * @param request - RunExpandContentRequest
   * @returns RunExpandContentResponse
   */
  async runExpandContent(request: $_model.RunExpandContentRequest): Promise<$_model.RunExpandContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runExpandContentWithOptions(request, runtime);
  }

  /**
   * 妙读猜你想问接口
   * 
   * @param request - RunGenerateQuestionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunGenerateQuestionsResponse
   */
  async runGenerateQuestionsWithOptions(request: $_model.RunGenerateQuestionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunGenerateQuestionsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docId)) {
      body["DocId"] = request.docId;
    }

    if (!$dara.isNull(request.referenceContent)) {
      body["ReferenceContent"] = request.referenceContent;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunGenerateQuestions",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunGenerateQuestionsResponse>(await this.callApi(params, req, runtime), new $_model.RunGenerateQuestionsResponse({}));
  }

  /**
   * 妙读猜你想问接口
   * 
   * @param request - RunGenerateQuestionsRequest
   * @returns RunGenerateQuestionsResponse
   */
  async runGenerateQuestions(request: $_model.RunGenerateQuestionsRequest): Promise<$_model.RunGenerateQuestionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runGenerateQuestionsWithOptions(request, runtime);
  }

  /**
   * 妙读文档关键词抽取接口
   * 
   * @param request - RunHotwordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunHotwordResponse
   */
  async runHotwordWithOptions(request: $_model.RunHotwordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunHotwordResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docId)) {
      body["DocId"] = request.docId;
    }

    if (!$dara.isNull(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.referenceContent)) {
      body["ReferenceContent"] = request.referenceContent;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunHotword",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunHotwordResponse>(await this.callApi(params, req, runtime), new $_model.RunHotwordResponse({}));
  }

  /**
   * 妙读文档关键词抽取接口
   * 
   * @param request - RunHotwordRequest
   * @returns RunHotwordResponse
   */
  async runHotword(request: $_model.RunHotwordRequest): Promise<$_model.RunHotwordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runHotwordWithOptions(request, runtime);
  }

  /**
   * AI妙笔-创作-抽取关键词
   * 
   * @param tmpReq - RunKeywordsExtractionGenerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunKeywordsExtractionGenerationResponse
   */
  async runKeywordsExtractionGenerationWithOptions(tmpReq: $_model.RunKeywordsExtractionGenerationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunKeywordsExtractionGenerationResponse> {
    tmpReq.validate();
    let request = new $_model.RunKeywordsExtractionGenerationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.referenceData)) {
      request.referenceDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.referenceData, "ReferenceData", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.referenceDataShrink)) {
      body["ReferenceData"] = request.referenceDataShrink;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunKeywordsExtractionGeneration",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunKeywordsExtractionGenerationResponse>(await this.callApi(params, req, runtime), new $_model.RunKeywordsExtractionGenerationResponse({}));
  }

  /**
   * AI妙笔-创作-抽取关键词
   * 
   * @param request - RunKeywordsExtractionGenerationRequest
   * @returns RunKeywordsExtractionGenerationResponse
   */
  async runKeywordsExtractionGeneration(request: $_model.RunKeywordsExtractionGenerationRequest): Promise<$_model.RunKeywordsExtractionGenerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runKeywordsExtractionGenerationWithOptions(request, runtime);
  }

  /**
   * 文档批量导读
   * 
   * @param tmpReq - RunMultiDocIntroductionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunMultiDocIntroductionResponse
   */
  async runMultiDocIntroductionWithOptions(tmpReq: $_model.RunMultiDocIntroductionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunMultiDocIntroductionResponse> {
    tmpReq.validate();
    let request = new $_model.RunMultiDocIntroductionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.docIds)) {
      request.docIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.docIds, "DocIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docIdsShrink)) {
      body["DocIds"] = request.docIdsShrink;
    }

    if (!$dara.isNull(request.keyPointPrompt)) {
      body["KeyPointPrompt"] = request.keyPointPrompt;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.summaryPrompt)) {
      body["SummaryPrompt"] = request.summaryPrompt;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunMultiDocIntroduction",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunMultiDocIntroductionResponse>(await this.callApi(params, req, runtime), new $_model.RunMultiDocIntroductionResponse({}));
  }

  /**
   * 文档批量导读
   * 
   * @param request - RunMultiDocIntroductionRequest
   * @returns RunMultiDocIntroductionResponse
   */
  async runMultiDocIntroduction(request: $_model.RunMultiDocIntroductionRequest): Promise<$_model.RunMultiDocIntroductionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runMultiDocIntroductionWithOptions(request, runtime);
  }

  /**
   * AI妙搜-智能搜索生成
   * 
   * @param tmpReq - RunSearchGenerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunSearchGenerationResponse
   */
  async runSearchGenerationWithOptions(tmpReq: $_model.RunSearchGenerationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunSearchGenerationResponse> {
    tmpReq.validate();
    let request = new $_model.RunSearchGenerationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.agentContext)) {
      request.agentContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentContext, "AgentContext", "json");
    }

    if (!$dara.isNull(tmpReq.chatConfig)) {
      request.chatConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.chatConfig, "ChatConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentContextShrink)) {
      body["AgentContext"] = request.agentContextShrink;
    }

    if (!$dara.isNull(request.chatConfigShrink)) {
      body["ChatConfig"] = request.chatConfigShrink;
    }

    if (!$dara.isNull(request.modelId)) {
      body["ModelId"] = request.modelId;
    }

    if (!$dara.isNull(request.originalSessionId)) {
      body["OriginalSessionId"] = request.originalSessionId;
    }

    if (!$dara.isNull(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunSearchGeneration",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunSearchGenerationResponse>(await this.callApi(params, req, runtime), new $_model.RunSearchGenerationResponse({}));
  }

  /**
   * AI妙搜-智能搜索生成
   * 
   * @param request - RunSearchGenerationRequest
   * @returns RunSearchGenerationResponse
   */
  async runSearchGeneration(request: $_model.RunSearchGenerationRequest): Promise<$_model.RunSearchGenerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runSearchGenerationWithOptions(request, runtime);
  }

  /**
   * 妙搜-文搜文
   * 
   * @param tmpReq - RunSearchSimilarArticlesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunSearchSimilarArticlesResponse
   */
  async runSearchSimilarArticlesWithOptions(tmpReq: $_model.RunSearchSimilarArticlesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunSearchSimilarArticlesResponse> {
    tmpReq.validate();
    let request = new $_model.RunSearchSimilarArticlesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.chatConfig)) {
      request.chatConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.chatConfig, "ChatConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chatConfigShrink)) {
      body["ChatConfig"] = request.chatConfigShrink;
    }

    if (!$dara.isNull(request.docType)) {
      body["DocType"] = request.docType;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    if (!$dara.isNull(request.url)) {
      body["Url"] = request.url;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunSearchSimilarArticles",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunSearchSimilarArticlesResponse>(await this.callApi(params, req, runtime), new $_model.RunSearchSimilarArticlesResponse({}));
  }

  /**
   * 妙搜-文搜文
   * 
   * @param request - RunSearchSimilarArticlesRequest
   * @returns RunSearchSimilarArticlesResponse
   */
  async runSearchSimilarArticles(request: $_model.RunSearchSimilarArticlesRequest): Promise<$_model.RunSearchSimilarArticlesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runSearchSimilarArticlesWithOptions(request, runtime);
  }

  /**
   * 创作-分步骤写作
   * 
   * @param tmpReq - RunStepByStepWritingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunStepByStepWritingResponse
   */
  async runStepByStepWritingWithOptions(tmpReq: $_model.RunStepByStepWritingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunStepByStepWritingResponse> {
    tmpReq.validate();
    let request = new $_model.RunStepByStepWritingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.referenceData)) {
      request.referenceDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.referenceData, "ReferenceData", "json");
    }

    if (!$dara.isNull(tmpReq.writingConfig)) {
      request.writingConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.writingConfig, "WritingConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.originSessionId)) {
      body["OriginSessionId"] = request.originSessionId;
    }

    if (!$dara.isNull(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.referenceDataShrink)) {
      body["ReferenceData"] = request.referenceDataShrink;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    if (!$dara.isNull(request.writingConfigShrink)) {
      body["WritingConfig"] = request.writingConfigShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunStepByStepWriting",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunStepByStepWritingResponse>(await this.callApi(params, req, runtime), new $_model.RunStepByStepWritingResponse({}));
  }

  /**
   * 创作-分步骤写作
   * 
   * @param request - RunStepByStepWritingRequest
   * @returns RunStepByStepWritingResponse
   */
  async runStepByStepWriting(request: $_model.RunStepByStepWritingRequest): Promise<$_model.RunStepByStepWritingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runStepByStepWritingWithOptions(request, runtime);
  }

  /**
   * 内容特点分析
   * 
   * @param tmpReq - RunStyleFeatureAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunStyleFeatureAnalysisResponse
   */
  async runStyleFeatureAnalysisWithOptions(tmpReq: $_model.RunStyleFeatureAnalysisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunStyleFeatureAnalysisResponse> {
    tmpReq.validate();
    let request = new $_model.RunStyleFeatureAnalysisShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.contents)) {
      request.contentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contents, "Contents", "json");
    }

    if (!$dara.isNull(tmpReq.materialIds)) {
      request.materialIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.materialIds, "MaterialIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contentsShrink)) {
      body["Contents"] = request.contentsShrink;
    }

    if (!$dara.isNull(request.materialIdsShrink)) {
      body["MaterialIds"] = request.materialIdsShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunStyleFeatureAnalysis",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunStyleFeatureAnalysisResponse>(await this.callApi(params, req, runtime), new $_model.RunStyleFeatureAnalysisResponse({}));
  }

  /**
   * 内容特点分析
   * 
   * @param request - RunStyleFeatureAnalysisRequest
   * @returns RunStyleFeatureAnalysisResponse
   */
  async runStyleFeatureAnalysis(request: $_model.RunStyleFeatureAnalysisRequest): Promise<$_model.RunStyleFeatureAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runStyleFeatureAnalysisWithOptions(request, runtime);
  }

  /**
   * 内容摘要生成
   * 
   * @param request - RunSummaryGenerateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunSummaryGenerateResponse
   */
  async runSummaryGenerateWithOptions(request: $_model.RunSummaryGenerateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunSummaryGenerateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunSummaryGenerate",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunSummaryGenerateResponse>(await this.callApi(params, req, runtime), new $_model.RunSummaryGenerateResponse({}));
  }

  /**
   * 内容摘要生成
   * 
   * @param request - RunSummaryGenerateRequest
   * @returns RunSummaryGenerateResponse
   */
  async runSummaryGenerate(request: $_model.RunSummaryGenerateRequest): Promise<$_model.RunSummaryGenerateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runSummaryGenerateWithOptions(request, runtime);
  }

  /**
   * 创作-文本润色
   * 
   * @param request - RunTextPolishingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunTextPolishingResponse
   */
  async runTextPolishingWithOptions(request: $_model.RunTextPolishingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunTextPolishingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunTextPolishing",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunTextPolishingResponse>(await this.callApi(params, req, runtime), new $_model.RunTextPolishingResponse({}));
  }

  /**
   * 创作-文本润色
   * 
   * @param request - RunTextPolishingRequest
   * @returns RunTextPolishingResponse
   */
  async runTextPolishing(request: $_model.RunTextPolishingRequest): Promise<$_model.RunTextPolishingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runTextPolishingWithOptions(request, runtime);
  }

  /**
   * 妙笔：标题生成
   * 
   * @param tmpReq - RunTitleGenerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunTitleGenerationResponse
   */
  async runTitleGenerationWithOptions(tmpReq: $_model.RunTitleGenerationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunTitleGenerationResponse> {
    tmpReq.validate();
    let request = new $_model.RunTitleGenerationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deduplicatedTitles)) {
      request.deduplicatedTitlesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deduplicatedTitles, "DeduplicatedTitles", "json");
    }

    if (!$dara.isNull(tmpReq.referenceData)) {
      request.referenceDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.referenceData, "ReferenceData", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deduplicatedTitlesShrink)) {
      body["DeduplicatedTitles"] = request.deduplicatedTitlesShrink;
    }

    if (!$dara.isNull(request.referenceDataShrink)) {
      body["ReferenceData"] = request.referenceDataShrink;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.titleCount)) {
      body["TitleCount"] = request.titleCount;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunTitleGeneration",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunTitleGenerationResponse>(await this.callApi(params, req, runtime), new $_model.RunTitleGenerationResponse({}));
  }

  /**
   * 妙笔：标题生成
   * 
   * @param request - RunTitleGenerationRequest
   * @returns RunTitleGenerationResponse
   */
  async runTitleGeneration(request: $_model.RunTitleGenerationRequest): Promise<$_model.RunTitleGenerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runTitleGenerationWithOptions(request, runtime);
  }

  /**
   * AI妙笔-创作-中英文翻译
   * 
   * @param tmpReq - RunTranslateGenerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunTranslateGenerationResponse
   */
  async runTranslateGenerationWithOptions(tmpReq: $_model.RunTranslateGenerationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunTranslateGenerationResponse> {
    tmpReq.validate();
    let request = new $_model.RunTranslateGenerationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.referenceData)) {
      request.referenceDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.referenceData, "ReferenceData", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.referenceDataShrink)) {
      body["ReferenceData"] = request.referenceDataShrink;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunTranslateGeneration",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunTranslateGenerationResponse>(await this.callApi(params, req, runtime), new $_model.RunTranslateGenerationResponse({}));
  }

  /**
   * AI妙笔-创作-中英文翻译
   * 
   * @param request - RunTranslateGenerationRequest
   * @returns RunTranslateGenerationResponse
   */
  async runTranslateGeneration(request: $_model.RunTranslateGenerationRequest): Promise<$_model.RunTranslateGenerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runTranslateGenerationWithOptions(request, runtime);
  }

  /**
   * AI妙笔-创作-文风改写
   * 
   * @param tmpReq - RunWriteToneGenerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunWriteToneGenerationResponse
   */
  async runWriteToneGenerationWithOptions(tmpReq: $_model.RunWriteToneGenerationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunWriteToneGenerationResponse> {
    tmpReq.validate();
    let request = new $_model.RunWriteToneGenerationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.referenceData)) {
      request.referenceDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.referenceData, "ReferenceData", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.referenceDataShrink)) {
      body["ReferenceData"] = request.referenceDataShrink;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunWriteToneGeneration",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunWriteToneGenerationResponse>(await this.callApi(params, req, runtime), new $_model.RunWriteToneGenerationResponse({}));
  }

  /**
   * AI妙笔-创作-文风改写
   * 
   * @param request - RunWriteToneGenerationRequest
   * @returns RunWriteToneGenerationResponse
   */
  async runWriteToneGeneration(request: $_model.RunWriteToneGenerationRequest): Promise<$_model.RunWriteToneGenerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runWriteToneGenerationWithOptions(request, runtime);
  }

  /**
   * 直接写作
   * 
   * @param tmpReq - RunWritingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunWritingResponse
   */
  async runWritingWithOptions(tmpReq: $_model.RunWritingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunWritingResponse> {
    tmpReq.validate();
    let request = new $_model.RunWritingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.referenceData)) {
      request.referenceDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.referenceData, "ReferenceData", "json");
    }

    if (!$dara.isNull(tmpReq.writingConfig)) {
      request.writingConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.writingConfig, "WritingConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.originSessionId)) {
      body["OriginSessionId"] = request.originSessionId;
    }

    if (!$dara.isNull(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.referenceDataShrink)) {
      body["ReferenceData"] = request.referenceDataShrink;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    if (!$dara.isNull(request.writingConfigShrink)) {
      body["WritingConfig"] = request.writingConfigShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunWriting",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunWritingResponse>(await this.callApi(params, req, runtime), new $_model.RunWritingResponse({}));
  }

  /**
   * 直接写作
   * 
   * @param request - RunWritingRequest
   * @returns RunWritingResponse
   */
  async runWriting(request: $_model.RunWritingRequest): Promise<$_model.RunWritingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runWritingWithOptions(request, runtime);
  }

  /**
   * 保存自定义文本
   * 
   * @param request - SaveCustomTextRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveCustomTextResponse
   */
  async saveCustomTextWithOptions(request: $_model.SaveCustomTextRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveCustomTextResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.commodityCode)) {
      body["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveCustomText",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveCustomTextResponse>(await this.callApi(params, req, runtime), new $_model.SaveCustomTextResponse({}));
  }

  /**
   * 保存自定义文本
   * 
   * @param request - SaveCustomTextRequest
   * @returns SaveCustomTextResponse
   */
  async saveCustomText(request: $_model.SaveCustomTextRequest): Promise<$_model.SaveCustomTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveCustomTextWithOptions(request, runtime);
  }

  /**
   * 保存用户的信源配置
   * 
   * @param tmpReq - SaveDataSourceOrderConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveDataSourceOrderConfigResponse
   */
  async saveDataSourceOrderConfigWithOptions(tmpReq: $_model.SaveDataSourceOrderConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveDataSourceOrderConfigResponse> {
    tmpReq.validate();
    let request = new $_model.SaveDataSourceOrderConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userConfigDataSourceList)) {
      request.userConfigDataSourceListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userConfigDataSourceList, "UserConfigDataSourceList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.generateTechnology)) {
      body["GenerateTechnology"] = request.generateTechnology;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.userConfigDataSourceListShrink)) {
      body["UserConfigDataSourceList"] = request.userConfigDataSourceListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveDataSourceOrderConfig",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveDataSourceOrderConfigResponse>(await this.callApi(params, req, runtime), new $_model.SaveDataSourceOrderConfigResponse({}));
  }

  /**
   * 保存用户的信源配置
   * 
   * @param request - SaveDataSourceOrderConfigRequest
   * @returns SaveDataSourceOrderConfigResponse
   */
  async saveDataSourceOrderConfig(request: $_model.SaveDataSourceOrderConfigRequest): Promise<$_model.SaveDataSourceOrderConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveDataSourceOrderConfigWithOptions(request, runtime);
  }

  /**
   * 保存素材
   * 
   * @param tmpReq - SaveMaterialDocumentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveMaterialDocumentResponse
   */
  async saveMaterialDocumentWithOptions(tmpReq: $_model.SaveMaterialDocumentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveMaterialDocumentResponse> {
    tmpReq.validate();
    let request = new $_model.SaveMaterialDocumentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.docKeywords)) {
      request.docKeywordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.docKeywords, "DocKeywords", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.author)) {
      body["Author"] = request.author;
    }

    if (!$dara.isNull(request.bothSavePrivateAndShare)) {
      body["BothSavePrivateAndShare"] = request.bothSavePrivateAndShare;
    }

    if (!$dara.isNull(request.docKeywordsShrink)) {
      body["DocKeywords"] = request.docKeywordsShrink;
    }

    if (!$dara.isNull(request.docType)) {
      body["DocType"] = request.docType;
    }

    if (!$dara.isNull(request.externalUrl)) {
      body["ExternalUrl"] = request.externalUrl;
    }

    if (!$dara.isNull(request.htmlContent)) {
      body["HtmlContent"] = request.htmlContent;
    }

    if (!$dara.isNull(request.pubTime)) {
      body["PubTime"] = request.pubTime;
    }

    if (!$dara.isNull(request.shareAttr)) {
      body["ShareAttr"] = request.shareAttr;
    }

    if (!$dara.isNull(request.srcFrom)) {
      body["SrcFrom"] = request.srcFrom;
    }

    if (!$dara.isNull(request.summary)) {
      body["Summary"] = request.summary;
    }

    if (!$dara.isNull(request.textContent)) {
      body["TextContent"] = request.textContent;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    if (!$dara.isNull(request.url)) {
      body["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveMaterialDocument",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveMaterialDocumentResponse>(await this.callApi(params, req, runtime), new $_model.SaveMaterialDocumentResponse({}));
  }

  /**
   * 保存素材
   * 
   * @param request - SaveMaterialDocumentRequest
   * @returns SaveMaterialDocumentResponse
   */
  async saveMaterialDocument(request: $_model.SaveMaterialDocumentRequest): Promise<$_model.SaveMaterialDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveMaterialDocumentWithOptions(request, runtime);
  }

  /**
   * 保存自定义文体
   * 
   * @param tmpReq - SaveStyleLearningResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveStyleLearningResultResponse
   */
  async saveStyleLearningResultWithOptions(tmpReq: $_model.SaveStyleLearningResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveStyleLearningResultResponse> {
    tmpReq.validate();
    let request = new $_model.SaveStyleLearningResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.customTextIdList)) {
      request.customTextIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customTextIdList, "CustomTextIdList", "json");
    }

    if (!$dara.isNull(tmpReq.materialIdList)) {
      request.materialIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.materialIdList, "MaterialIdList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentKey)) {
      body["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.aigcResult)) {
      body["AigcResult"] = request.aigcResult;
    }

    if (!$dara.isNull(request.customTextIdListShrink)) {
      body["CustomTextIdList"] = request.customTextIdListShrink;
    }

    if (!$dara.isNull(request.materialIdListShrink)) {
      body["MaterialIdList"] = request.materialIdListShrink;
    }

    if (!$dara.isNull(request.rewriteResult)) {
      body["RewriteResult"] = request.rewriteResult;
    }

    if (!$dara.isNull(request.styleName)) {
      body["StyleName"] = request.styleName;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveStyleLearningResult",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveStyleLearningResultResponse>(await this.callApi(params, req, runtime), new $_model.SaveStyleLearningResultResponse({}));
  }

  /**
   * 保存自定义文体
   * 
   * @param request - SaveStyleLearningResultRequest
   * @returns SaveStyleLearningResultResponse
   */
  async saveStyleLearningResult(request: $_model.SaveStyleLearningResultRequest): Promise<$_model.SaveStyleLearningResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveStyleLearningResultWithOptions(request, runtime);
  }

  /**
   * 搜索数据集文档
   * 
   * @param request - SearchDatasetDocumentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchDatasetDocumentsResponse
   */
  async searchDatasetDocumentsWithOptions(request: $_model.SearchDatasetDocumentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchDatasetDocumentsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!$dara.isNull(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.extend1)) {
      body["Extend1"] = request.extend1;
    }

    if (!$dara.isNull(request.includeContent)) {
      body["IncludeContent"] = request.includeContent;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      body["Query"] = request.query;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchDatasetDocuments",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchDatasetDocumentsResponse>(await this.callApi(params, req, runtime), new $_model.SearchDatasetDocumentsResponse({}));
  }

  /**
   * 搜索数据集文档
   * 
   * @param request - SearchDatasetDocumentsRequest
   * @returns SearchDatasetDocumentsResponse
   */
  async searchDatasetDocuments(request: $_model.SearchDatasetDocumentsRequest): Promise<$_model.SearchDatasetDocumentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchDatasetDocumentsWithOptions(request, runtime);
  }

  /**
   * 新闻检索
   * 
   * @param tmpReq - SearchNewsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchNewsResponse
   */
  async searchNewsWithOptions(tmpReq: $_model.SearchNewsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchNewsResponse> {
    tmpReq.validate();
    let request = new $_model.SearchNewsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.searchSources)) {
      request.searchSourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.searchSources, "SearchSources", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filterNotNull)) {
      body["FilterNotNull"] = request.filterNotNull;
    }

    if (!$dara.isNull(request.includeContent)) {
      body["IncludeContent"] = request.includeContent;
    }

    if (!$dara.isNull(request.page)) {
      body["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      body["Query"] = request.query;
    }

    if (!$dara.isNull(request.searchSourcesShrink)) {
      body["SearchSources"] = request.searchSourcesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchNews",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchNewsResponse>(await this.callApi(params, req, runtime), new $_model.SearchNewsResponse({}));
  }

  /**
   * 新闻检索
   * 
   * @param request - SearchNewsRequest
   * @returns SearchNewsResponse
   */
  async searchNews(request: $_model.SearchNewsRequest): Promise<$_model.SearchNewsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchNewsWithOptions(request, runtime);
  }

  /**
   * 提交异步任务
   * 
   * @param request - SubmitAsyncTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAsyncTaskResponse
   */
  async submitAsyncTaskWithOptions(request: $_model.SubmitAsyncTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitAsyncTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskCode)) {
      body["TaskCode"] = request.taskCode;
    }

    if (!$dara.isNull(request.taskExecuteTime)) {
      body["TaskExecuteTime"] = request.taskExecuteTime;
    }

    if (!$dara.isNull(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.taskParam)) {
      body["TaskParam"] = request.taskParam;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitAsyncTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitAsyncTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitAsyncTaskResponse({}));
  }

  /**
   * 提交异步任务
   * 
   * @param request - SubmitAsyncTaskRequest
   * @returns SubmitAsyncTaskResponse
   */
  async submitAsyncTask(request: $_model.SubmitAsyncTaskRequest): Promise<$_model.SubmitAsyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitAsyncTaskWithOptions(request, runtime);
  }

  /**
   * 提交自定义播报单任务
   * 
   * @param tmpReq - SubmitCustomHotTopicBroadcastJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitCustomHotTopicBroadcastJobResponse
   */
  async submitCustomHotTopicBroadcastJobWithOptions(tmpReq: $_model.SubmitCustomHotTopicBroadcastJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitCustomHotTopicBroadcastJobResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitCustomHotTopicBroadcastJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.hotTopicBroadcastConfig)) {
      request.hotTopicBroadcastConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hotTopicBroadcastConfig, "HotTopicBroadcastConfig", "json");
    }

    if (!$dara.isNull(tmpReq.topics)) {
      request.topicsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.topics, "Topics", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotTopicBroadcastConfigShrink)) {
      body["HotTopicBroadcastConfig"] = request.hotTopicBroadcastConfigShrink;
    }

    if (!$dara.isNull(request.hotTopicVersion)) {
      body["HotTopicVersion"] = request.hotTopicVersion;
    }

    if (!$dara.isNull(request.topicsShrink)) {
      body["Topics"] = request.topicsShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitCustomHotTopicBroadcastJob",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitCustomHotTopicBroadcastJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitCustomHotTopicBroadcastJobResponse({}));
  }

  /**
   * 提交自定义播报单任务
   * 
   * @param request - SubmitCustomHotTopicBroadcastJobRequest
   * @returns SubmitCustomHotTopicBroadcastJobResponse
   */
  async submitCustomHotTopicBroadcastJob(request: $_model.SubmitCustomHotTopicBroadcastJobRequest): Promise<$_model.SubmitCustomHotTopicBroadcastJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitCustomHotTopicBroadcastJobWithOptions(request, runtime);
  }

  /**
   * 提交自定义热点选题视角分析任务
   * 
   * @param tmpReq - SubmitCustomTopicSelectionPerspectiveAnalysisTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitCustomTopicSelectionPerspectiveAnalysisTaskResponse
   */
  async submitCustomTopicSelectionPerspectiveAnalysisTaskWithOptions(tmpReq: $_model.SubmitCustomTopicSelectionPerspectiveAnalysisTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitCustomTopicSelectionPerspectiveAnalysisTaskResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitCustomTopicSelectionPerspectiveAnalysisTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.documents)) {
      request.documentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.documents, "Documents", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.documentsShrink)) {
      body["Documents"] = request.documentsShrink;
    }

    if (!$dara.isNull(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.topic)) {
      body["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitCustomTopicSelectionPerspectiveAnalysisTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitCustomTopicSelectionPerspectiveAnalysisTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitCustomTopicSelectionPerspectiveAnalysisTaskResponse({}));
  }

  /**
   * 提交自定义热点选题视角分析任务
   * 
   * @param request - SubmitCustomTopicSelectionPerspectiveAnalysisTaskRequest
   * @returns SubmitCustomTopicSelectionPerspectiveAnalysisTaskResponse
   */
  async submitCustomTopicSelectionPerspectiveAnalysisTask(request: $_model.SubmitCustomTopicSelectionPerspectiveAnalysisTaskRequest): Promise<$_model.SubmitCustomTopicSelectionPerspectiveAnalysisTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitCustomTopicSelectionPerspectiveAnalysisTaskWithOptions(request, runtime);
  }

  /**
   * 提交文档聚合任务
   * 
   * @param tmpReq - SubmitDocClusterTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitDocClusterTaskResponse
   */
  async submitDocClusterTaskWithOptions(tmpReq: $_model.SubmitDocClusterTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitDocClusterTaskResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitDocClusterTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.documents)) {
      request.documentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.documents, "Documents", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.documentsShrink)) {
      body["Documents"] = request.documentsShrink;
    }

    if (!$dara.isNull(request.summaryLength)) {
      body["SummaryLength"] = request.summaryLength;
    }

    if (!$dara.isNull(request.titleLength)) {
      body["TitleLength"] = request.titleLength;
    }

    if (!$dara.isNull(request.topicCount)) {
      body["TopicCount"] = request.topicCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitDocClusterTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitDocClusterTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitDocClusterTaskResponse({}));
  }

  /**
   * 提交文档聚合任务
   * 
   * @param request - SubmitDocClusterTaskRequest
   * @returns SubmitDocClusterTaskResponse
   */
  async submitDocClusterTask(request: $_model.SubmitDocClusterTaskRequest): Promise<$_model.SubmitDocClusterTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitDocClusterTaskWithOptions(request, runtime);
  }

  /**
   * 提交VOC异步任务
   * 
   * @param tmpReq - SubmitEnterpriseVocAnalysisTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitEnterpriseVocAnalysisTaskResponse
   */
  async submitEnterpriseVocAnalysisTaskWithOptions(tmpReq: $_model.SubmitEnterpriseVocAnalysisTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitEnterpriseVocAnalysisTaskResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitEnterpriseVocAnalysisTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.contentTags)) {
      request.contentTagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contentTags, "ContentTags", "json");
    }

    if (!$dara.isNull(tmpReq.contents)) {
      request.contentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contents, "Contents", "json");
    }

    if (!$dara.isNull(tmpReq.filterTags)) {
      request.filterTagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterTags, "FilterTags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKey)) {
      body["ApiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.contentTagsShrink)) {
      body["ContentTags"] = request.contentTagsShrink;
    }

    if (!$dara.isNull(request.contentsShrink)) {
      body["Contents"] = request.contentsShrink;
    }

    if (!$dara.isNull(request.fileKey)) {
      body["FileKey"] = request.fileKey;
    }

    if (!$dara.isNull(request.filterTagsShrink)) {
      body["FilterTags"] = request.filterTagsShrink;
    }

    if (!$dara.isNull(request.materialType)) {
      body["MaterialType"] = request.materialType;
    }

    if (!$dara.isNull(request.modelId)) {
      body["ModelId"] = request.modelId;
    }

    if (!$dara.isNull(request.positiveSample)) {
      body["PositiveSample"] = request.positiveSample;
    }

    if (!$dara.isNull(request.positiveSampleFileKey)) {
      body["PositiveSampleFileKey"] = request.positiveSampleFileKey;
    }

    if (!$dara.isNull(request.taskType)) {
      body["TaskType"] = request.taskType;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitEnterpriseVocAnalysisTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitEnterpriseVocAnalysisTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitEnterpriseVocAnalysisTaskResponse({}));
  }

  /**
   * 提交VOC异步任务
   * 
   * @param request - SubmitEnterpriseVocAnalysisTaskRequest
   * @returns SubmitEnterpriseVocAnalysisTaskResponse
   */
  async submitEnterpriseVocAnalysisTask(request: $_model.SubmitEnterpriseVocAnalysisTaskRequest): Promise<$_model.SubmitEnterpriseVocAnalysisTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitEnterpriseVocAnalysisTaskWithOptions(request, runtime);
  }

  /**
   * 提交一键成片剪辑任务
   * 
   * @param tmpReq - SubmitSmartClipTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSmartClipTaskResponse
   */
  async submitSmartClipTaskWithOptions(tmpReq: $_model.SubmitSmartClipTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitSmartClipTaskResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitSmartClipTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.editingConfig)) {
      request.editingConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.editingConfig, "EditingConfig", "json");
    }

    if (!$dara.isNull(tmpReq.inputConfig)) {
      request.inputConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inputConfig, "InputConfig", "json");
    }

    if (!$dara.isNull(tmpReq.outputConfig)) {
      request.outputConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.outputConfig, "OutputConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.editingConfigShrink)) {
      body["EditingConfig"] = request.editingConfigShrink;
    }

    if (!$dara.isNull(request.extendParam)) {
      body["ExtendParam"] = request.extendParam;
    }

    if (!$dara.isNull(request.inputConfigShrink)) {
      body["InputConfig"] = request.inputConfigShrink;
    }

    if (!$dara.isNull(request.outputConfigShrink)) {
      body["OutputConfig"] = request.outputConfigShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitSmartClipTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitSmartClipTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitSmartClipTaskResponse({}));
  }

  /**
   * 提交一键成片剪辑任务
   * 
   * @param request - SubmitSmartClipTaskRequest
   * @returns SubmitSmartClipTaskResponse
   */
  async submitSmartClipTask(request: $_model.SubmitSmartClipTaskRequest): Promise<$_model.SubmitSmartClipTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitSmartClipTaskWithOptions(request, runtime);
  }

  /**
   * 提交选题热点分析任务
   * 
   * @param tmpReq - SubmitTopicSelectionPerspectiveAnalysisTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitTopicSelectionPerspectiveAnalysisTaskResponse
   */
  async submitTopicSelectionPerspectiveAnalysisTaskWithOptions(tmpReq: $_model.SubmitTopicSelectionPerspectiveAnalysisTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitTopicSelectionPerspectiveAnalysisTaskResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitTopicSelectionPerspectiveAnalysisTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.documents)) {
      request.documentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.documents, "Documents", "json");
    }

    if (!$dara.isNull(tmpReq.perspectiveTypes)) {
      request.perspectiveTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.perspectiveTypes, "PerspectiveTypes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.documentsShrink)) {
      body["Documents"] = request.documentsShrink;
    }

    if (!$dara.isNull(request.perspectiveTypesShrink)) {
      body["PerspectiveTypes"] = request.perspectiveTypesShrink;
    }

    if (!$dara.isNull(request.topic)) {
      body["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitTopicSelectionPerspectiveAnalysisTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitTopicSelectionPerspectiveAnalysisTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitTopicSelectionPerspectiveAnalysisTaskResponse({}));
  }

  /**
   * 提交选题热点分析任务
   * 
   * @param request - SubmitTopicSelectionPerspectiveAnalysisTaskRequest
   * @returns SubmitTopicSelectionPerspectiveAnalysisTaskResponse
   */
  async submitTopicSelectionPerspectiveAnalysisTask(request: $_model.SubmitTopicSelectionPerspectiveAnalysisTaskRequest): Promise<$_model.SubmitTopicSelectionPerspectiveAnalysisTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitTopicSelectionPerspectiveAnalysisTaskWithOptions(request, runtime);
  }

  /**
   * 更新自定义文本
   * 
   * @param request - UpdateCustomTextRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomTextResponse
   */
  async updateCustomTextWithOptions(request: $_model.UpdateCustomTextRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCustomTextResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.commodityCode)) {
      body["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCustomText",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCustomTextResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCustomTextResponse({}));
  }

  /**
   * 更新自定义文本
   * 
   * @param request - UpdateCustomTextRequest
   * @returns UpdateCustomTextResponse
   */
  async updateCustomText(request: $_model.UpdateCustomTextRequest): Promise<$_model.UpdateCustomTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCustomTextWithOptions(request, runtime);
  }

  /**
   * 数据集管理-更新
   * 
   * @param tmpReq - UpdateDatasetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDatasetResponse
   */
  async updateDatasetWithOptions(tmpReq: $_model.UpdateDatasetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDatasetResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDatasetShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.datasetConfig)) {
      request.datasetConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.datasetConfig, "DatasetConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetConfigShrink)) {
      body["DatasetConfig"] = request.datasetConfigShrink;
    }

    if (!$dara.isNull(request.datasetDescription)) {
      body["DatasetDescription"] = request.datasetDescription;
    }

    if (!$dara.isNull(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!$dara.isNull(request.searchDatasetEnable)) {
      body["SearchDatasetEnable"] = request.searchDatasetEnable;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataset",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDatasetResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDatasetResponse({}));
  }

  /**
   * 数据集管理-更新
   * 
   * @param request - UpdateDatasetRequest
   * @returns UpdateDatasetResponse
   */
  async updateDataset(request: $_model.UpdateDatasetRequest): Promise<$_model.UpdateDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDatasetWithOptions(request, runtime);
  }

  /**
   * 修改数据集文档
   * 
   * @param tmpReq - UpdateDatasetDocumentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDatasetDocumentResponse
   */
  async updateDatasetDocumentWithOptions(tmpReq: $_model.UpdateDatasetDocumentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDatasetDocumentResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDatasetDocumentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.document)) {
      request.documentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.document, "Document", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetId)) {
      body["DatasetId"] = request.datasetId;
    }

    if (!$dara.isNull(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.documentShrink)) {
      body["Document"] = request.documentShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDatasetDocument",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDatasetDocumentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDatasetDocumentResponse({}));
  }

  /**
   * 修改数据集文档
   * 
   * @param request - UpdateDatasetDocumentRequest
   * @returns UpdateDatasetDocumentResponse
   */
  async updateDatasetDocument(request: $_model.UpdateDatasetDocumentRequest): Promise<$_model.UpdateDatasetDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDatasetDocumentWithOptions(request, runtime);
  }

  /**
   * 文档管理-更新。
   * 
   * @param tmpReq - UpdateGeneratedContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGeneratedContentResponse
   */
  async updateGeneratedContentWithOptions(tmpReq: $_model.UpdateGeneratedContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGeneratedContentResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateGeneratedContentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.keywords)) {
      request.keywordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keywords, "Keywords", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.contentText)) {
      body["ContentText"] = request.contentText;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.keywordsShrink)) {
      body["Keywords"] = request.keywordsShrink;
    }

    if (!$dara.isNull(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGeneratedContent",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGeneratedContentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGeneratedContentResponse({}));
  }

  /**
   * 文档管理-更新。
   * 
   * @param request - UpdateGeneratedContentRequest
   * @returns UpdateGeneratedContentResponse
   */
  async updateGeneratedContent(request: $_model.UpdateGeneratedContentRequest): Promise<$_model.UpdateGeneratedContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGeneratedContentWithOptions(request, runtime);
  }

  /**
   * 根据ID更新素材
   * 
   * @param tmpReq - UpdateMaterialDocumentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMaterialDocumentResponse
   */
  async updateMaterialDocumentWithOptions(tmpReq: $_model.UpdateMaterialDocumentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMaterialDocumentResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateMaterialDocumentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.docKeywords)) {
      request.docKeywordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.docKeywords, "DocKeywords", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.author)) {
      body["Author"] = request.author;
    }

    if (!$dara.isNull(request.docKeywordsShrink)) {
      body["DocKeywords"] = request.docKeywordsShrink;
    }

    if (!$dara.isNull(request.docType)) {
      body["DocType"] = request.docType;
    }

    if (!$dara.isNull(request.externalUrl)) {
      body["ExternalUrl"] = request.externalUrl;
    }

    if (!$dara.isNull(request.htmlContent)) {
      body["HtmlContent"] = request.htmlContent;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.pubTime)) {
      body["PubTime"] = request.pubTime;
    }

    if (!$dara.isNull(request.shareAttr)) {
      body["ShareAttr"] = request.shareAttr;
    }

    if (!$dara.isNull(request.srcFrom)) {
      body["SrcFrom"] = request.srcFrom;
    }

    if (!$dara.isNull(request.summary)) {
      body["Summary"] = request.summary;
    }

    if (!$dara.isNull(request.textContent)) {
      body["TextContent"] = request.textContent;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    if (!$dara.isNull(request.url)) {
      body["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMaterialDocument",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMaterialDocumentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMaterialDocumentResponse({}));
  }

  /**
   * 根据ID更新素材
   * 
   * @param request - UpdateMaterialDocumentRequest
   * @returns UpdateMaterialDocumentResponse
   */
  async updateMaterialDocument(request: $_model.UpdateMaterialDocumentRequest): Promise<$_model.UpdateMaterialDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMaterialDocumentWithOptions(request, runtime);
  }

  /**
   * 妙读上传书籍
   * 
   * @param tmpReq - UploadBookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadBookResponse
   */
  async uploadBookWithOptions(tmpReq: $_model.UploadBookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadBookResponse> {
    tmpReq.validate();
    let request = new $_model.UploadBookShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.docs)) {
      request.docsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.docs, "Docs", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.docsShrink)) {
      body["Docs"] = request.docsShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadBook",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadBookResponse>(await this.callApi(params, req, runtime), new $_model.UploadBookResponse({}));
  }

  /**
   * 妙读上传书籍
   * 
   * @param request - UploadBookRequest
   * @returns UploadBookResponse
   */
  async uploadBook(request: $_model.UploadBookRequest): Promise<$_model.UploadBookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadBookWithOptions(request, runtime);
  }

  /**
   * 妙读上传文档接口
   * 
   * @param tmpReq - UploadDocRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadDocResponse
   */
  async uploadDocWithOptions(tmpReq: $_model.UploadDocRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadDocResponse> {
    tmpReq.validate();
    let request = new $_model.UploadDocShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.docs)) {
      request.docsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.docs, "Docs", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.docsShrink)) {
      body["Docs"] = request.docsShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadDoc",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadDocResponse>(await this.callApi(params, req, runtime), new $_model.UploadDocResponse({}));
  }

  /**
   * 妙读上传文档接口
   * 
   * @param request - UploadDocRequest
   * @returns UploadDocResponse
   */
  async uploadDoc(request: $_model.UploadDocRequest): Promise<$_model.UploadDocResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadDocWithOptions(request, runtime);
  }

  /**
   * 校验企业VOC上传模板
   * 
   * @param request - ValidateUploadTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateUploadTemplateResponse
   */
  async validateUploadTemplateWithOptions(request: $_model.ValidateUploadTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ValidateUploadTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileKey)) {
      body["FileKey"] = request.fileKey;
    }

    if (!$dara.isNull(request.taskType)) {
      body["TaskType"] = request.taskType;
    }

    if (!$dara.isNull(request.templateType)) {
      body["TemplateType"] = request.templateType;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateUploadTemplate",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidateUploadTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ValidateUploadTemplateResponse({}));
  }

  /**
   * 校验企业VOC上传模板
   * 
   * @param request - ValidateUploadTemplateRequest
   * @returns ValidateUploadTemplateResponse
   */
  async validateUploadTemplate(request: $_model.ValidateUploadTemplateRequest): Promise<$_model.ValidateUploadTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.validateUploadTemplateWithOptions(request, runtime);
  }

}
