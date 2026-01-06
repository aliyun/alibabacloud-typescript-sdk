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
    this._endpoint = this.getEndpoint("polardbai", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建chatbi配置表
   * 
   * @param request - ChatBIConfigCreateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatBIConfigCreateResponse
   */
  async chatBIConfigCreateWithOptions(request: $_model.ChatBIConfigCreateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatBIConfigCreateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authMessage)) {
      query["AuthMessage"] = request.authMessage;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatBIConfigCreate",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatBIConfigCreateResponse>(await this.callApi(params, req, runtime), new $_model.ChatBIConfigCreateResponse({}));
  }

  /**
   * 创建chatbi配置表
   * 
   * @param request - ChatBIConfigCreateRequest
   * @returns ChatBIConfigCreateResponse
   */
  async chatBIConfigCreate(request: $_model.ChatBIConfigCreateRequest): Promise<$_model.ChatBIConfigCreateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatBIConfigCreateWithOptions(request, runtime);
  }

  /**
   * 删除chatbi配置表
   * 
   * @param request - ChatBIConfigDeleteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatBIConfigDeleteResponse
   */
  async chatBIConfigDeleteWithOptions(request: $_model.ChatBIConfigDeleteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatBIConfigDeleteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authMessage)) {
      query["AuthMessage"] = request.authMessage;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatBIConfigDelete",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatBIConfigDeleteResponse>(await this.callApi(params, req, runtime), new $_model.ChatBIConfigDeleteResponse({}));
  }

  /**
   * 删除chatbi配置表
   * 
   * @param request - ChatBIConfigDeleteRequest
   * @returns ChatBIConfigDeleteResponse
   */
  async chatBIConfigDelete(request: $_model.ChatBIConfigDeleteRequest): Promise<$_model.ChatBIConfigDeleteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatBIConfigDeleteWithOptions(request, runtime);
  }

  /**
   * 查询chatbi问题模板表内容
   * 
   * @param request - ChatBIConfigDeleteEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatBIConfigDeleteEntryResponse
   */
  async chatBIConfigDeleteEntryWithOptions(request: $_model.ChatBIConfigDeleteEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatBIConfigDeleteEntryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authMessage)) {
      query["AuthMessage"] = request.authMessage;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatBIConfigDeleteEntry",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatBIConfigDeleteEntryResponse>(await this.callApi(params, req, runtime), new $_model.ChatBIConfigDeleteEntryResponse({}));
  }

  /**
   * 查询chatbi问题模板表内容
   * 
   * @param request - ChatBIConfigDeleteEntryRequest
   * @returns ChatBIConfigDeleteEntryResponse
   */
  async chatBIConfigDeleteEntry(request: $_model.ChatBIConfigDeleteEntryRequest): Promise<$_model.ChatBIConfigDeleteEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatBIConfigDeleteEntryWithOptions(request, runtime);
  }

  /**
   * 查询chatbi配置表内容
   * 
   * @param request - ChatBIConfigQueryEntriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatBIConfigQueryEntriesResponse
   */
  async chatBIConfigQueryEntriesWithOptions(request: $_model.ChatBIConfigQueryEntriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatBIConfigQueryEntriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authMessage)) {
      query["AuthMessage"] = request.authMessage;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatBIConfigQueryEntries",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatBIConfigQueryEntriesResponse>(await this.callApi(params, req, runtime), new $_model.ChatBIConfigQueryEntriesResponse({}));
  }

  /**
   * 查询chatbi配置表内容
   * 
   * @param request - ChatBIConfigQueryEntriesRequest
   * @returns ChatBIConfigQueryEntriesResponse
   */
  async chatBIConfigQueryEntries(request: $_model.ChatBIConfigQueryEntriesRequest): Promise<$_model.ChatBIConfigQueryEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatBIConfigQueryEntriesWithOptions(request, runtime);
  }

  /**
   * 查询客户chatbi配置表名
   * 
   * @param request - ChatBIConfigQueryTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatBIConfigQueryTablesResponse
   */
  async chatBIConfigQueryTablesWithOptions(request: $_model.ChatBIConfigQueryTablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatBIConfigQueryTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authMessage)) {
      query["AuthMessage"] = request.authMessage;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.inputField)) {
      query["InputField"] = request.inputField;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatBIConfigQueryTables",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatBIConfigQueryTablesResponse>(await this.callApi(params, req, runtime), new $_model.ChatBIConfigQueryTablesResponse({}));
  }

  /**
   * 查询客户chatbi配置表名
   * 
   * @param request - ChatBIConfigQueryTablesRequest
   * @returns ChatBIConfigQueryTablesResponse
   */
  async chatBIConfigQueryTables(request: $_model.ChatBIConfigQueryTablesRequest): Promise<$_model.ChatBIConfigQueryTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatBIConfigQueryTablesWithOptions(request, runtime);
  }

  /**
   * 修改chatbi配置表内容
   * 
   * @param request - ChatBIConfigUpdateEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatBIConfigUpdateEntryResponse
   */
  async chatBIConfigUpdateEntryWithOptions(request: $_model.ChatBIConfigUpdateEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatBIConfigUpdateEntryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authMessage)) {
      query["AuthMessage"] = request.authMessage;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.formulaFunction)) {
      query["FormulaFunction"] = request.formulaFunction;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.isFunctional)) {
      query["IsFunctional"] = request.isFunctional;
    }

    if (!$dara.isNull(request.queryFunction)) {
      query["QueryFunction"] = request.queryFunction;
    }

    if (!$dara.isNull(request.sqlCondition)) {
      query["SqlCondition"] = request.sqlCondition;
    }

    if (!$dara.isNull(request.sqlFunction)) {
      query["SqlFunction"] = request.sqlFunction;
    }

    if (!$dara.isNull(request.textCondition)) {
      query["TextCondition"] = request.textCondition;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatBIConfigUpdateEntry",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatBIConfigUpdateEntryResponse>(await this.callApi(params, req, runtime), new $_model.ChatBIConfigUpdateEntryResponse({}));
  }

  /**
   * 修改chatbi配置表内容
   * 
   * @param request - ChatBIConfigUpdateEntryRequest
   * @returns ChatBIConfigUpdateEntryResponse
   */
  async chatBIConfigUpdateEntry(request: $_model.ChatBIConfigUpdateEntryRequest): Promise<$_model.ChatBIConfigUpdateEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatBIConfigUpdateEntryWithOptions(request, runtime);
  }

  /**
   * 创建chatbi问题模板表
   * 
   * @param request - ChatBIFileTemplateDownloadRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatBIFileTemplateDownloadResponse
   */
  async chatBIFileTemplateDownloadWithOptions(request: $_model.ChatBIFileTemplateDownloadRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatBIFileTemplateDownloadResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authMessage)) {
      query["AuthMessage"] = request.authMessage;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.tableType)) {
      query["TableType"] = request.tableType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatBIFileTemplateDownload",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatBIFileTemplateDownloadResponse>(await this.callApi(params, req, runtime), new $_model.ChatBIFileTemplateDownloadResponse({}));
  }

  /**
   * 创建chatbi问题模板表
   * 
   * @param request - ChatBIFileTemplateDownloadRequest
   * @returns ChatBIFileTemplateDownloadResponse
   */
  async chatBIFileTemplateDownload(request: $_model.ChatBIFileTemplateDownloadRequest): Promise<$_model.ChatBIFileTemplateDownloadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatBIFileTemplateDownloadWithOptions(request, runtime);
  }

  /**
   * 创建chatbi问题模板表
   * 
   * @param request - ChatBIFileUploadRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatBIFileUploadResponse
   */
  async chatBIFileUploadWithOptions(request: $_model.ChatBIFileUploadRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatBIFileUploadResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authMessage)) {
      query["AuthMessage"] = request.authMessage;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatBIFileUpload",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatBIFileUploadResponse>(await this.callApi(params, req, runtime), new $_model.ChatBIFileUploadResponse({}));
  }

  /**
   * 创建chatbi问题模板表
   * 
   * @param request - ChatBIFileUploadRequest
   * @returns ChatBIFileUploadResponse
   */
  async chatBIFileUpload(request: $_model.ChatBIFileUploadRequest): Promise<$_model.ChatBIFileUploadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatBIFileUploadWithOptions(request, runtime);
  }

  /**
   * 创建chatbi问题模板表
   * 
   * @param request - ChatBIFileUploadCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatBIFileUploadCallbackResponse
   */
  async chatBIFileUploadCallbackWithOptions(request: $_model.ChatBIFileUploadCallbackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatBIFileUploadCallbackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authMessage)) {
      query["AuthMessage"] = request.authMessage;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.characterSetName)) {
      query["CharacterSetName"] = request.characterSetName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tableType)) {
      query["TableType"] = request.tableType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatBIFileUploadCallback",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatBIFileUploadCallbackResponse>(await this.callApi(params, req, runtime), new $_model.ChatBIFileUploadCallbackResponse({}));
  }

  /**
   * 创建chatbi问题模板表
   * 
   * @param request - ChatBIFileUploadCallbackRequest
   * @returns ChatBIFileUploadCallbackResponse
   */
  async chatBIFileUploadCallback(request: $_model.ChatBIFileUploadCallbackRequest): Promise<$_model.ChatBIFileUploadCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatBIFileUploadCallbackWithOptions(request, runtime);
  }

  /**
   * 创建chatbi问题模板表
   * 
   * @param request - ChatBIPatternCreateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatBIPatternCreateResponse
   */
  async chatBIPatternCreateWithOptions(request: $_model.ChatBIPatternCreateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatBIPatternCreateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authMessage)) {
      query["AuthMessage"] = request.authMessage;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.tableNameSuffix)) {
      query["TableNameSuffix"] = request.tableNameSuffix;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatBIPatternCreate",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatBIPatternCreateResponse>(await this.callApi(params, req, runtime), new $_model.ChatBIPatternCreateResponse({}));
  }

  /**
   * 创建chatbi问题模板表
   * 
   * @param request - ChatBIPatternCreateRequest
   * @returns ChatBIPatternCreateResponse
   */
  async chatBIPatternCreate(request: $_model.ChatBIPatternCreateRequest): Promise<$_model.ChatBIPatternCreateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatBIPatternCreateWithOptions(request, runtime);
  }

  /**
   * 删除chatbi问题模板表
   * 
   * @param request - ChatBIPatternDeleteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatBIPatternDeleteResponse
   */
  async chatBIPatternDeleteWithOptions(request: $_model.ChatBIPatternDeleteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatBIPatternDeleteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authMessage)) {
      query["AuthMessage"] = request.authMessage;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatBIPatternDelete",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatBIPatternDeleteResponse>(await this.callApi(params, req, runtime), new $_model.ChatBIPatternDeleteResponse({}));
  }

  /**
   * 删除chatbi问题模板表
   * 
   * @param request - ChatBIPatternDeleteRequest
   * @returns ChatBIPatternDeleteResponse
   */
  async chatBIPatternDelete(request: $_model.ChatBIPatternDeleteRequest): Promise<$_model.ChatBIPatternDeleteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatBIPatternDeleteWithOptions(request, runtime);
  }

  /**
   * 查询chatbi问题模板表内容
   * 
   * @param request - ChatBIPatternDeleteEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatBIPatternDeleteEntryResponse
   */
  async chatBIPatternDeleteEntryWithOptions(request: $_model.ChatBIPatternDeleteEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatBIPatternDeleteEntryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authMessage)) {
      query["AuthMessage"] = request.authMessage;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatBIPatternDeleteEntry",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatBIPatternDeleteEntryResponse>(await this.callApi(params, req, runtime), new $_model.ChatBIPatternDeleteEntryResponse({}));
  }

  /**
   * 查询chatbi问题模板表内容
   * 
   * @param request - ChatBIPatternDeleteEntryRequest
   * @returns ChatBIPatternDeleteEntryResponse
   */
  async chatBIPatternDeleteEntry(request: $_model.ChatBIPatternDeleteEntryRequest): Promise<$_model.ChatBIPatternDeleteEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatBIPatternDeleteEntryWithOptions(request, runtime);
  }

  /**
   * 创建chatbi检索索引表
   * 
   * @param request - ChatBIPatternIndexCreateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatBIPatternIndexCreateResponse
   */
  async chatBIPatternIndexCreateWithOptions(request: $_model.ChatBIPatternIndexCreateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatBIPatternIndexCreateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authMessage)) {
      query["AuthMessage"] = request.authMessage;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.patternTableName)) {
      query["PatternTableName"] = request.patternTableName;
    }

    if (!$dara.isNull(request.tableNameSuffix)) {
      query["TableNameSuffix"] = request.tableNameSuffix;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatBIPatternIndexCreate",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatBIPatternIndexCreateResponse>(await this.callApi(params, req, runtime), new $_model.ChatBIPatternIndexCreateResponse({}));
  }

  /**
   * 创建chatbi检索索引表
   * 
   * @param request - ChatBIPatternIndexCreateRequest
   * @returns ChatBIPatternIndexCreateResponse
   */
  async chatBIPatternIndexCreate(request: $_model.ChatBIPatternIndexCreateRequest): Promise<$_model.ChatBIPatternIndexCreateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatBIPatternIndexCreateWithOptions(request, runtime);
  }

  /**
   * 删除检索索引表
   * 
   * @param request - ChatBIPatternIndexDeleteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatBIPatternIndexDeleteResponse
   */
  async chatBIPatternIndexDeleteWithOptions(request: $_model.ChatBIPatternIndexDeleteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatBIPatternIndexDeleteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authMessage)) {
      query["AuthMessage"] = request.authMessage;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatBIPatternIndexDelete",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatBIPatternIndexDeleteResponse>(await this.callApi(params, req, runtime), new $_model.ChatBIPatternIndexDeleteResponse({}));
  }

  /**
   * 删除检索索引表
   * 
   * @param request - ChatBIPatternIndexDeleteRequest
   * @returns ChatBIPatternIndexDeleteResponse
   */
  async chatBIPatternIndexDelete(request: $_model.ChatBIPatternIndexDeleteRequest): Promise<$_model.ChatBIPatternIndexDeleteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatBIPatternIndexDeleteWithOptions(request, runtime);
  }

  /**
   * 查询检索索引表名
   * 
   * @param request - ChatBIPatternIndexQueryTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatBIPatternIndexQueryTablesResponse
   */
  async chatBIPatternIndexQueryTablesWithOptions(request: $_model.ChatBIPatternIndexQueryTablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatBIPatternIndexQueryTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authMessage)) {
      query["AuthMessage"] = request.authMessage;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.inputField)) {
      query["InputField"] = request.inputField;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatBIPatternIndexQueryTables",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatBIPatternIndexQueryTablesResponse>(await this.callApi(params, req, runtime), new $_model.ChatBIPatternIndexQueryTablesResponse({}));
  }

  /**
   * 查询检索索引表名
   * 
   * @param request - ChatBIPatternIndexQueryTablesRequest
   * @returns ChatBIPatternIndexQueryTablesResponse
   */
  async chatBIPatternIndexQueryTables(request: $_model.ChatBIPatternIndexQueryTablesRequest): Promise<$_model.ChatBIPatternIndexQueryTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatBIPatternIndexQueryTablesWithOptions(request, runtime);
  }

  /**
   * 查询chatbi问题模板表内容
   * 
   * @param request - ChatBIPatternQueryEntriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatBIPatternQueryEntriesResponse
   */
  async chatBIPatternQueryEntriesWithOptions(request: $_model.ChatBIPatternQueryEntriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatBIPatternQueryEntriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authMessage)) {
      query["AuthMessage"] = request.authMessage;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatBIPatternQueryEntries",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatBIPatternQueryEntriesResponse>(await this.callApi(params, req, runtime), new $_model.ChatBIPatternQueryEntriesResponse({}));
  }

  /**
   * 查询chatbi问题模板表内容
   * 
   * @param request - ChatBIPatternQueryEntriesRequest
   * @returns ChatBIPatternQueryEntriesResponse
   */
  async chatBIPatternQueryEntries(request: $_model.ChatBIPatternQueryEntriesRequest): Promise<$_model.ChatBIPatternQueryEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatBIPatternQueryEntriesWithOptions(request, runtime);
  }

  /**
   * 查询chatbi问题模板表名
   * 
   * @param request - ChatBIPatternQueryTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatBIPatternQueryTablesResponse
   */
  async chatBIPatternQueryTablesWithOptions(request: $_model.ChatBIPatternQueryTablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatBIPatternQueryTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authMessage)) {
      query["AuthMessage"] = request.authMessage;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.inputField)) {
      query["InputField"] = request.inputField;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatBIPatternQueryTables",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatBIPatternQueryTablesResponse>(await this.callApi(params, req, runtime), new $_model.ChatBIPatternQueryTablesResponse({}));
  }

  /**
   * 查询chatbi问题模板表名
   * 
   * @param request - ChatBIPatternQueryTablesRequest
   * @returns ChatBIPatternQueryTablesResponse
   */
  async chatBIPatternQueryTables(request: $_model.ChatBIPatternQueryTablesRequest): Promise<$_model.ChatBIPatternQueryTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatBIPatternQueryTablesWithOptions(request, runtime);
  }

  /**
   * 修改chatbi问题模板表内容
   * 
   * @param request - ChatBIPatternUpdateEntryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatBIPatternUpdateEntryResponse
   */
  async chatBIPatternUpdateEntryWithOptions(request: $_model.ChatBIPatternUpdateEntryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatBIPatternUpdateEntryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authMessage)) {
      query["AuthMessage"] = request.authMessage;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.patternDescription)) {
      query["PatternDescription"] = request.patternDescription;
    }

    if (!$dara.isNull(request.patternParams)) {
      query["PatternParams"] = request.patternParams;
    }

    if (!$dara.isNull(request.patternQuestion)) {
      query["PatternQuestion"] = request.patternQuestion;
    }

    if (!$dara.isNull(request.patternSql)) {
      query["PatternSql"] = request.patternSql;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatBIPatternUpdateEntry",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatBIPatternUpdateEntryResponse>(await this.callApi(params, req, runtime), new $_model.ChatBIPatternUpdateEntryResponse({}));
  }

  /**
   * 修改chatbi问题模板表内容
   * 
   * @param request - ChatBIPatternUpdateEntryRequest
   * @returns ChatBIPatternUpdateEntryResponse
   */
  async chatBIPatternUpdateEntry(request: $_model.ChatBIPatternUpdateEntryRequest): Promise<$_model.ChatBIPatternUpdateEntryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatBIPatternUpdateEntryWithOptions(request, runtime);
  }

  /**
   * 流式返回
   * 
   * @param tmpReq - ChatBIPredictSseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatBIPredictSseResponse
   */
  async *chatBIPredictSseWithSSE(tmpReq: $_model.ChatBIPredictSseRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.ChatBIPredictSseResponse, any, unknown> {
    tmpReq.validate();
    let request = new $_model.ChatBIPredictSseShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.authMessage)) {
      query["AuthMessage"] = request.authMessage;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.generateChart)) {
      query["GenerateChart"] = request.generateChart;
    }

    if (!$dara.isNull(request.generateSummary)) {
      query["GenerateSummary"] = request.generateSummary;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.patternIndexTableName)) {
      query["PatternIndexTableName"] = request.patternIndexTableName;
    }

    if (!$dara.isNull(request.question)) {
      query["Question"] = request.question;
    }

    if (!$dara.isNull(request.schemaIndexTableName)) {
      query["SchemaIndexTableName"] = request.schemaIndexTableName;
    }

    if (!$dara.isNull(request.selectData)) {
      query["SelectData"] = request.selectData;
    }

    if (!$dara.isNull(request.thinkingMode)) {
      query["ThinkingMode"] = request.thinkingMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatBIPredictSse",
      version: "2025-10-13",
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
      let data = JSON.parse(resp.event.data);
      yield $dara.cast<$_model.ChatBIPredictSseResponse>({
        statusCode: resp.statusCode,
        headers: resp.headers,
        body: {
          ...data,
          RequestId: resp.event.id,
          Message: resp.event.event,
        },
      }, new $_model.ChatBIPredictSseResponse({}));
    }
  }

  /**
   * 流式返回
   * 
   * @param tmpReq - ChatBIPredictSseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatBIPredictSseResponse
   */
  async chatBIPredictSseWithOptions(tmpReq: $_model.ChatBIPredictSseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatBIPredictSseResponse> {
    tmpReq.validate();
    let request = new $_model.ChatBIPredictSseShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.authMessage)) {
      query["AuthMessage"] = request.authMessage;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.generateChart)) {
      query["GenerateChart"] = request.generateChart;
    }

    if (!$dara.isNull(request.generateSummary)) {
      query["GenerateSummary"] = request.generateSummary;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.patternIndexTableName)) {
      query["PatternIndexTableName"] = request.patternIndexTableName;
    }

    if (!$dara.isNull(request.question)) {
      query["Question"] = request.question;
    }

    if (!$dara.isNull(request.schemaIndexTableName)) {
      query["SchemaIndexTableName"] = request.schemaIndexTableName;
    }

    if (!$dara.isNull(request.selectData)) {
      query["SelectData"] = request.selectData;
    }

    if (!$dara.isNull(request.thinkingMode)) {
      query["ThinkingMode"] = request.thinkingMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatBIPredictSse",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatBIPredictSseResponse>(await this.callApi(params, req, runtime), new $_model.ChatBIPredictSseResponse({}));
  }

  /**
   * 流式返回
   * 
   * @param request - ChatBIPredictSseRequest
   * @returns ChatBIPredictSseResponse
   */
  async chatBIPredictSse(request: $_model.ChatBIPredictSseRequest): Promise<$_model.ChatBIPredictSseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatBIPredictSseWithOptions(request, runtime);
  }

  /**
   * 创建chatbi检索索引表
   * 
   * @param request - ChatBISchemaIndexCreateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatBISchemaIndexCreateResponse
   */
  async chatBISchemaIndexCreateWithOptions(request: $_model.ChatBISchemaIndexCreateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatBISchemaIndexCreateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authMessage)) {
      query["AuthMessage"] = request.authMessage;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.columnsExcluded)) {
      query["ColumnsExcluded"] = request.columnsExcluded;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.tableNameSuffix)) {
      query["TableNameSuffix"] = request.tableNameSuffix;
    }

    if (!$dara.isNull(request.tablesIncluded)) {
      query["TablesIncluded"] = request.tablesIncluded;
    }

    if (!$dara.isNull(request.toSample)) {
      query["ToSample"] = request.toSample;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatBISchemaIndexCreate",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatBISchemaIndexCreateResponse>(await this.callApi(params, req, runtime), new $_model.ChatBISchemaIndexCreateResponse({}));
  }

  /**
   * 创建chatbi检索索引表
   * 
   * @param request - ChatBISchemaIndexCreateRequest
   * @returns ChatBISchemaIndexCreateResponse
   */
  async chatBISchemaIndexCreate(request: $_model.ChatBISchemaIndexCreateRequest): Promise<$_model.ChatBISchemaIndexCreateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatBISchemaIndexCreateWithOptions(request, runtime);
  }

  /**
   * 删除检索索引表
   * 
   * @param request - ChatBISchemaIndexDeleteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatBISchemaIndexDeleteResponse
   */
  async chatBISchemaIndexDeleteWithOptions(request: $_model.ChatBISchemaIndexDeleteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatBISchemaIndexDeleteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authMessage)) {
      query["AuthMessage"] = request.authMessage;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatBISchemaIndexDelete",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatBISchemaIndexDeleteResponse>(await this.callApi(params, req, runtime), new $_model.ChatBISchemaIndexDeleteResponse({}));
  }

  /**
   * 删除检索索引表
   * 
   * @param request - ChatBISchemaIndexDeleteRequest
   * @returns ChatBISchemaIndexDeleteResponse
   */
  async chatBISchemaIndexDelete(request: $_model.ChatBISchemaIndexDeleteRequest): Promise<$_model.ChatBISchemaIndexDeleteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatBISchemaIndexDeleteWithOptions(request, runtime);
  }

  /**
   * 查询检索索引表名
   * 
   * @param request - ChatBISchemaIndexQueryTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatBISchemaIndexQueryTablesResponse
   */
  async chatBISchemaIndexQueryTablesWithOptions(request: $_model.ChatBISchemaIndexQueryTablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatBISchemaIndexQueryTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authMessage)) {
      query["AuthMessage"] = request.authMessage;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.inputField)) {
      query["InputField"] = request.inputField;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatBISchemaIndexQueryTables",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatBISchemaIndexQueryTablesResponse>(await this.callApi(params, req, runtime), new $_model.ChatBISchemaIndexQueryTablesResponse({}));
  }

  /**
   * 查询检索索引表名
   * 
   * @param request - ChatBISchemaIndexQueryTablesRequest
   * @returns ChatBISchemaIndexQueryTablesResponse
   */
  async chatBISchemaIndexQueryTables(request: $_model.ChatBISchemaIndexQueryTablesRequest): Promise<$_model.ChatBISchemaIndexQueryTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatBISchemaIndexQueryTablesWithOptions(request, runtime);
  }

  /**
   * 查询chatbi问题模板表内容
   * 
   * @param request - ChatBIUpdateTableValidationColumnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatBIUpdateTableValidationColumnsResponse
   */
  async chatBIUpdateTableValidationColumnsWithOptions(request: $_model.ChatBIUpdateTableValidationColumnsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatBIUpdateTableValidationColumnsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authMessage)) {
      query["AuthMessage"] = request.authMessage;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tableType)) {
      query["TableType"] = request.tableType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatBIUpdateTableValidationColumns",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatBIUpdateTableValidationColumnsResponse>(await this.callApi(params, req, runtime), new $_model.ChatBIUpdateTableValidationColumnsResponse({}));
  }

  /**
   * 查询chatbi问题模板表内容
   * 
   * @param request - ChatBIUpdateTableValidationColumnsRequest
   * @returns ChatBIUpdateTableValidationColumnsResponse
   */
  async chatBIUpdateTableValidationColumns(request: $_model.ChatBIUpdateTableValidationColumnsRequest): Promise<$_model.ChatBIUpdateTableValidationColumnsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatBIUpdateTableValidationColumnsWithOptions(request, runtime);
  }

  /**
   * 查询多模态数据集列表
   * 
   * @param request - CreateMultimodalDatasetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMultimodalDatasetResponse
   */
  async createMultimodalDatasetWithOptions(request: $_model.CreateMultimodalDatasetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMultimodalDatasetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.datasetDescription)) {
      query["DatasetDescription"] = request.datasetDescription;
    }

    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMultimodalDataset",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMultimodalDatasetResponse>(await this.callApi(params, req, runtime), new $_model.CreateMultimodalDatasetResponse({}));
  }

  /**
   * 查询多模态数据集列表
   * 
   * @param request - CreateMultimodalDatasetRequest
   * @returns CreateMultimodalDatasetResponse
   */
  async createMultimodalDataset(request: $_model.CreateMultimodalDatasetRequest): Promise<$_model.CreateMultimodalDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMultimodalDatasetWithOptions(request, runtime);
  }

  /**
   * 创建Embedding
   * 
   * @param request - CreateMultimodalDatasetEmbeddingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMultimodalDatasetEmbeddingResponse
   */
  async createMultimodalDatasetEmbeddingWithOptions(request: $_model.CreateMultimodalDatasetEmbeddingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMultimodalDatasetEmbeddingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMultimodalDatasetEmbedding",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMultimodalDatasetEmbeddingResponse>(await this.callApi(params, req, runtime), new $_model.CreateMultimodalDatasetEmbeddingResponse({}));
  }

  /**
   * 创建Embedding
   * 
   * @param request - CreateMultimodalDatasetEmbeddingRequest
   * @returns CreateMultimodalDatasetEmbeddingResponse
   */
  async createMultimodalDatasetEmbedding(request: $_model.CreateMultimodalDatasetEmbeddingRequest): Promise<$_model.CreateMultimodalDatasetEmbeddingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMultimodalDatasetEmbeddingWithOptions(request, runtime);
  }

  /**
   * 创建SearchTask
   * 
   * @param tmpReq - CreateMultimodalSearchTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMultimodalSearchTaskResponse
   */
  async createMultimodalSearchTaskWithOptions(tmpReq: $_model.CreateMultimodalSearchTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMultimodalSearchTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateMultimodalSearchTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.datasetIds)) {
      request.datasetIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.datasetIds, "DatasetIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.datasetIdsShrink)) {
      query["DatasetIds"] = request.datasetIdsShrink;
    }

    if (!$dara.isNull(request.embeddingModel)) {
      query["EmbeddingModel"] = request.embeddingModel;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.searchModel)) {
      query["SearchModel"] = request.searchModel;
    }

    if (!$dara.isNull(request.topK)) {
      query["TopK"] = request.topK;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMultimodalSearchTask",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMultimodalSearchTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateMultimodalSearchTaskResponse({}));
  }

  /**
   * 创建SearchTask
   * 
   * @param request - CreateMultimodalSearchTaskRequest
   * @returns CreateMultimodalSearchTaskResponse
   */
  async createMultimodalSearchTask(request: $_model.CreateMultimodalSearchTaskRequest): Promise<$_model.CreateMultimodalSearchTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMultimodalSearchTaskWithOptions(request, runtime);
  }

  /**
   * 删除多模态数据集
   * 
   * @param request - DeleteMultimodalDatasetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMultimodalDatasetResponse
   */
  async deleteMultimodalDatasetWithOptions(request: $_model.DeleteMultimodalDatasetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMultimodalDatasetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMultimodalDataset",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMultimodalDatasetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMultimodalDatasetResponse({}));
  }

  /**
   * 删除多模态数据集
   * 
   * @param request - DeleteMultimodalDatasetRequest
   * @returns DeleteMultimodalDatasetResponse
   */
  async deleteMultimodalDataset(request: $_model.DeleteMultimodalDatasetRequest): Promise<$_model.DeleteMultimodalDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMultimodalDatasetWithOptions(request, runtime);
  }

  /**
   * 删除多模态数据集embedding
   * 
   * @param request - DeleteMultimodalEmbeddingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMultimodalEmbeddingResponse
   */
  async deleteMultimodalEmbeddingWithOptions(request: $_model.DeleteMultimodalEmbeddingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMultimodalEmbeddingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.embedding)) {
      query["Embedding"] = request.embedding;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMultimodalEmbedding",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMultimodalEmbeddingResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMultimodalEmbeddingResponse({}));
  }

  /**
   * 删除多模态数据集embedding
   * 
   * @param request - DeleteMultimodalEmbeddingRequest
   * @returns DeleteMultimodalEmbeddingResponse
   */
  async deleteMultimodalEmbedding(request: $_model.DeleteMultimodalEmbeddingRequest): Promise<$_model.DeleteMultimodalEmbeddingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMultimodalEmbeddingWithOptions(request, runtime);
  }

  /**
   * 下载Search任务的结果元数据
   * 
   * @param request - DownloadMultimodalSearchTaskResultMetadataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DownloadMultimodalSearchTaskResultMetadataResponse
   */
  async downloadMultimodalSearchTaskResultMetadataWithOptions(request: $_model.DownloadMultimodalSearchTaskResultMetadataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DownloadMultimodalSearchTaskResultMetadataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DownloadMultimodalSearchTaskResultMetadata",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DownloadMultimodalSearchTaskResultMetadataResponse>(await this.callApi(params, req, runtime), new $_model.DownloadMultimodalSearchTaskResultMetadataResponse({}));
  }

  /**
   * 下载Search任务的结果元数据
   * 
   * @param request - DownloadMultimodalSearchTaskResultMetadataRequest
   * @returns DownloadMultimodalSearchTaskResultMetadataResponse
   */
  async downloadMultimodalSearchTaskResultMetadata(request: $_model.DownloadMultimodalSearchTaskResultMetadataRequest): Promise<$_model.DownloadMultimodalSearchTaskResultMetadataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.downloadMultimodalSearchTaskResultMetadataWithOptions(request, runtime);
  }

  /**
   * 获得鉴权token
   * 
   * @param request - GetUserTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserTokenResponse
   */
  async getUserTokenWithOptions(request: $_model.GetUserTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserToken",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetUserTokenResponse({}));
  }

  /**
   * 获得鉴权token
   * 
   * @param request - GetUserTokenRequest
   * @returns GetUserTokenResponse
   */
  async getUserToken(request: $_model.GetUserTokenRequest): Promise<$_model.GetUserTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserTokenWithOptions(request, runtime);
  }

  /**
   * 查询多模态数据集列表
   * 
   * @param request - ListMultimodalDatasetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMultimodalDatasetResponse
   */
  async listMultimodalDatasetWithOptions(request: $_model.ListMultimodalDatasetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMultimodalDatasetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.inputField)) {
      query["InputField"] = request.inputField;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMultimodalDataset",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMultimodalDatasetResponse>(await this.callApi(params, req, runtime), new $_model.ListMultimodalDatasetResponse({}));
  }

  /**
   * 查询多模态数据集列表
   * 
   * @param request - ListMultimodalDatasetRequest
   * @returns ListMultimodalDatasetResponse
   */
  async listMultimodalDataset(request: $_model.ListMultimodalDatasetRequest): Promise<$_model.ListMultimodalDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMultimodalDatasetWithOptions(request, runtime);
  }

  /**
   * 查询模型列表
   * 
   * @param request - ListMultimodalEmbeddingModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMultimodalEmbeddingModelResponse
   */
  async listMultimodalEmbeddingModelWithOptions(request: $_model.ListMultimodalEmbeddingModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMultimodalEmbeddingModelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMultimodalEmbeddingModel",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMultimodalEmbeddingModelResponse>(await this.callApi(params, req, runtime), new $_model.ListMultimodalEmbeddingModelResponse({}));
  }

  /**
   * 查询模型列表
   * 
   * @param request - ListMultimodalEmbeddingModelRequest
   * @returns ListMultimodalEmbeddingModelResponse
   */
  async listMultimodalEmbeddingModel(request: $_model.ListMultimodalEmbeddingModelRequest): Promise<$_model.ListMultimodalEmbeddingModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMultimodalEmbeddingModelWithOptions(request, runtime);
  }

  /**
   * 查询search task列表
   * 
   * @param request - ListMultimodalSearchTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMultimodalSearchTaskResponse
   */
  async listMultimodalSearchTaskWithOptions(request: $_model.ListMultimodalSearchTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMultimodalSearchTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMultimodalSearchTask",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMultimodalSearchTaskResponse>(await this.callApi(params, req, runtime), new $_model.ListMultimodalSearchTaskResponse({}));
  }

  /**
   * 查询search task列表
   * 
   * @param request - ListMultimodalSearchTaskRequest
   * @returns ListMultimodalSearchTaskResponse
   */
  async listMultimodalSearchTask(request: $_model.ListMultimodalSearchTaskRequest): Promise<$_model.ListMultimodalSearchTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMultimodalSearchTaskWithOptions(request, runtime);
  }

  /**
   * 查询search task结果列表
   * 
   * @param request - ListMultimodalSearchTaskResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMultimodalSearchTaskResultResponse
   */
  async listMultimodalSearchTaskResultWithOptions(request: $_model.ListMultimodalSearchTaskResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMultimodalSearchTaskResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMultimodalSearchTaskResult",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMultimodalSearchTaskResultResponse>(await this.callApi(params, req, runtime), new $_model.ListMultimodalSearchTaskResultResponse({}));
  }

  /**
   * 查询search task结果列表
   * 
   * @param request - ListMultimodalSearchTaskResultRequest
   * @returns ListMultimodalSearchTaskResultResponse
   */
  async listMultimodalSearchTaskResult(request: $_model.ListMultimodalSearchTaskResultRequest): Promise<$_model.ListMultimodalSearchTaskResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMultimodalSearchTaskResultWithOptions(request, runtime);
  }

  /**
   * 更新数据集信息
   * 
   * @param request - UpdateMultimodalDatasetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMultimodalDatasetResponse
   */
  async updateMultimodalDatasetWithOptions(request: $_model.UpdateMultimodalDatasetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMultimodalDatasetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.datasetDescription)) {
      query["DatasetDescription"] = request.datasetDescription;
    }

    if (!$dara.isNull(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMultimodalDataset",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMultimodalDatasetResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMultimodalDatasetResponse({}));
  }

  /**
   * 更新数据集信息
   * 
   * @param request - UpdateMultimodalDatasetRequest
   * @returns UpdateMultimodalDatasetResponse
   */
  async updateMultimodalDataset(request: $_model.UpdateMultimodalDatasetRequest): Promise<$_model.UpdateMultimodalDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMultimodalDatasetWithOptions(request, runtime);
  }

  /**
   * 导入OSS数据集
   * 
   * @param request - UploadOSSMultimodalDatasetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadOSSMultimodalDatasetResponse
   */
  async uploadOSSMultimodalDatasetWithOptions(request: $_model.UploadOSSMultimodalDatasetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadOSSMultimodalDatasetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    if (!$dara.isNull(request.ossUrl)) {
      query["OssUrl"] = request.ossUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadOSSMultimodalDataset",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadOSSMultimodalDatasetResponse>(await this.callApi(params, req, runtime), new $_model.UploadOSSMultimodalDatasetResponse({}));
  }

  /**
   * 导入OSS数据集
   * 
   * @param request - UploadOSSMultimodalDatasetRequest
   * @returns UploadOSSMultimodalDatasetResponse
   */
  async uploadOSSMultimodalDataset(request: $_model.UploadOSSMultimodalDatasetRequest): Promise<$_model.UploadOSSMultimodalDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadOSSMultimodalDatasetWithOptions(request, runtime);
  }

  /**
   * 预检验鉴权token
   * 
   * @param request - ValidateDatabaseUserTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateDatabaseUserTokenResponse
   */
  async validateDatabaseUserTokenWithOptions(request: $_model.ValidateDatabaseUserTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ValidateDatabaseUserTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authMessage)) {
      query["AuthMessage"] = request.authMessage;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateDatabaseUserToken",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidateDatabaseUserTokenResponse>(await this.callApi(params, req, runtime), new $_model.ValidateDatabaseUserTokenResponse({}));
  }

  /**
   * 预检验鉴权token
   * 
   * @param request - ValidateDatabaseUserTokenRequest
   * @returns ValidateDatabaseUserTokenResponse
   */
  async validateDatabaseUserToken(request: $_model.ValidateDatabaseUserTokenRequest): Promise<$_model.ValidateDatabaseUserTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.validateDatabaseUserTokenWithOptions(request, runtime);
  }

  /**
   * 预检验鉴权token
   * 
   * @param request - ValidateUserTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateUserTokenResponse
   */
  async validateUserTokenWithOptions(request: $_model.ValidateUserTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ValidateUserTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authMessage)) {
      query["AuthMessage"] = request.authMessage;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateUserToken",
      version: "2025-10-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidateUserTokenResponse>(await this.callApi(params, req, runtime), new $_model.ValidateUserTokenResponse({}));
  }

  /**
   * 预检验鉴权token
   * 
   * @param request - ValidateUserTokenRequest
   * @returns ValidateUserTokenResponse
   */
  async validateUserToken(request: $_model.ValidateUserTokenRequest): Promise<$_model.ValidateUserTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.validateUserTokenWithOptions(request, runtime);
  }

}
