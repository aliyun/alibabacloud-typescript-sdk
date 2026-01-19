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
    this._endpoint = this.getEndpoint("xtee", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Add Sample Data via CSV
   * 
   * @param request - AddSampleDataByCsvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSampleDataByCsvResponse
   */
  async addSampleDataByCsvWithOptions(request: $_model.AddSampleDataByCsvRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddSampleDataByCsvResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.ossFileName)) {
      query["ossFileName"] = request.ossFileName;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.sampleBatchUuid)) {
      query["sampleBatchUuid"] = request.sampleBatchUuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddSampleDataByCsv",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddSampleDataByCsvResponse>(await this.callApi(params, req, runtime), new $_model.AddSampleDataByCsvResponse({}));
  }

  /**
   * Add Sample Data via CSV
   * 
   * @param request - AddSampleDataByCsvRequest
   * @returns AddSampleDataByCsvResponse
   */
  async addSampleDataByCsv(request: $_model.AddSampleDataByCsvRequest): Promise<$_model.AddSampleDataByCsvResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addSampleDataByCsvWithOptions(request, runtime);
  }

  /**
   * Add list data through a text box for samples
   * 
   * @param request - AddSampleDataByTextRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSampleDataByTextResponse
   */
  async addSampleDataByTextWithOptions(request: $_model.AddSampleDataByTextRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddSampleDataByTextResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.dataValue)) {
      query["dataValue"] = request.dataValue;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.sampleBatchUuid)) {
      query["sampleBatchUuid"] = request.sampleBatchUuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddSampleDataByText",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddSampleDataByTextResponse>(await this.callApi(params, req, runtime), new $_model.AddSampleDataByTextResponse({}));
  }

  /**
   * Add list data through a text box for samples
   * 
   * @param request - AddSampleDataByTextRequest
   * @returns AddSampleDataByTextResponse
   */
  async addSampleDataByText(request: $_model.AddSampleDataByTextRequest): Promise<$_model.AddSampleDataByTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addSampleDataByTextWithOptions(request, runtime);
  }

  /**
   * Batch Delete Sample List Data
   * 
   * @param request - BatchDeleteSampleDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteSampleDataResponse
   */
  async batchDeleteSampleDataWithOptions(request: $_model.BatchDeleteSampleDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDeleteSampleDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.uuids)) {
      query["uuids"] = request.uuids;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchDeleteSampleData",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchDeleteSampleDataResponse>(await this.callApi(params, req, runtime), new $_model.BatchDeleteSampleDataResponse({}));
  }

  /**
   * Batch Delete Sample List Data
   * 
   * @param request - BatchDeleteSampleDataRequest
   * @returns BatchDeleteSampleDataResponse
   */
  async batchDeleteSampleData(request: $_model.BatchDeleteSampleDataRequest): Promise<$_model.BatchDeleteSampleDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchDeleteSampleDataWithOptions(request, runtime);
  }

  /**
   * Variable binding operation
   * 
   * @param request - BindVariableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindVariableResponse
   */
  async bindVariableWithOptions(request: $_model.BindVariableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindVariableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.apiRegionId)) {
      query["apiRegionId"] = request.apiRegionId;
    }

    if (!$dara.isNull(request.apiType)) {
      query["apiType"] = request.apiType;
    }

    if (!$dara.isNull(request.createType)) {
      query["createType"] = request.createType;
    }

    if (!$dara.isNull(request.defineId)) {
      query["defineId"] = request.defineId;
    }

    if (!$dara.isNull(request.defineIds)) {
      query["defineIds"] = request.defineIds;
    }

    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.exceptionValue)) {
      query["exceptionValue"] = request.exceptionValue;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.outputField)) {
      query["outputField"] = request.outputField;
    }

    if (!$dara.isNull(request.outputType)) {
      query["outputType"] = request.outputType;
    }

    if (!$dara.isNull(request.params)) {
      query["params"] = request.params;
    }

    if (!$dara.isNull(request.paramsList)) {
      query["paramsList"] = request.paramsList;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["sourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.title)) {
      query["title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindVariable",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindVariableResponse>(await this.callApi(params, req, runtime), new $_model.BindVariableResponse({}));
  }

  /**
   * Variable binding operation
   * 
   * @param request - BindVariableRequest
   * @returns BindVariableResponse
   */
  async bindVariable(request: $_model.BindVariableRequest): Promise<$_model.BindVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindVariableWithOptions(request, runtime);
  }

  /**
   * Policy Replication Lineage Check
   * 
   * @param request - CheckCopyRuleVariableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckCopyRuleVariableResponse
   */
  async checkCopyRuleVariableWithOptions(request: $_model.CheckCopyRuleVariableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckCopyRuleVariableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createType)) {
      query["CreateType"] = request.createType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["RegId"] = request.regId;
    }

    if (!$dara.isNull(request.sourceRuleId)) {
      query["SourceRuleId"] = request.sourceRuleId;
    }

    if (!$dara.isNull(request.sourceRuleIds)) {
      query["SourceRuleIds"] = request.sourceRuleIds;
    }

    if (!$dara.isNull(request.targetEventCode)) {
      query["TargetEventCode"] = request.targetEventCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckCopyRuleVariable",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckCopyRuleVariableResponse>(await this.callApi(params, req, runtime), new $_model.CheckCopyRuleVariableResponse({}));
  }

  /**
   * Policy Replication Lineage Check
   * 
   * @param request - CheckCopyRuleVariableRequest
   * @returns CheckCopyRuleVariableResponse
   */
  async checkCopyRuleVariable(request: $_model.CheckCopyRuleVariableRequest): Promise<$_model.CheckCopyRuleVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkCopyRuleVariableWithOptions(request, runtime);
  }

  /**
   * Check if the cumulative number of variables exceeds the limit
   * 
   * @param request - CheckCustVariableLimitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckCustVariableLimitResponse
   */
  async checkCustVariableLimitWithOptions(request: $_model.CheckCustVariableLimitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckCustVariableLimitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.createType)) {
      query["createType"] = request.createType;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckCustVariableLimit",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckCustVariableLimitResponse>(await this.callApi(params, req, runtime), new $_model.CheckCustVariableLimitResponse({}));
  }

  /**
   * Check if the cumulative number of variables exceeds the limit
   * 
   * @param request - CheckCustVariableLimitRequest
   * @returns CheckCustVariableLimitResponse
   */
  async checkCustVariableLimit(request: $_model.CheckCustVariableLimitRequest): Promise<$_model.CheckCustVariableLimitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkCustVariableLimitWithOptions(request, runtime);
  }

  /**
   * Check if Creating Variables Exceeds the Limit
   * 
   * @param request - CheckExpressionVariableLimitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckExpressionVariableLimitResponse
   */
  async checkExpressionVariableLimitWithOptions(request: $_model.CheckExpressionVariableLimitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckExpressionVariableLimitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckExpressionVariableLimit",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckExpressionVariableLimitResponse>(await this.callApi(params, req, runtime), new $_model.CheckExpressionVariableLimitResponse({}));
  }

  /**
   * Check if Creating Variables Exceeds the Limit
   * 
   * @param request - CheckExpressionVariableLimitRequest
   * @returns CheckExpressionVariableLimitResponse
   */
  async checkExpressionVariableLimit(request: $_model.CheckExpressionVariableLimitRequest): Promise<$_model.CheckExpressionVariableLimitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkExpressionVariableLimitWithOptions(request, runtime);
  }

  /**
   * Check if the number of fields exceeds the limit
   * 
   * @param request - CheckFieldLimitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckFieldLimitResponse
   */
  async checkFieldLimitWithOptions(request: $_model.CheckFieldLimitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckFieldLimitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.source)) {
      query["source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckFieldLimit",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckFieldLimitResponse>(await this.callApi(params, req, runtime), new $_model.CheckFieldLimitResponse({}));
  }

  /**
   * Check if the number of fields exceeds the limit
   * 
   * @param request - CheckFieldLimitRequest
   * @returns CheckFieldLimitResponse
   */
  async checkFieldLimit(request: $_model.CheckFieldLimitRequest): Promise<$_model.CheckFieldLimitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkFieldLimitWithOptions(request, runtime);
  }

  /**
   * Validate Variable Reference
   * 
   * @param request - CheckUsageVariableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckUsageVariableResponse
   */
  async checkUsageVariableWithOptions(request: $_model.CheckUsageVariableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckUsageVariableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckUsageVariable",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckUsageVariableResponse>(await this.callApi(params, req, runtime), new $_model.CheckUsageVariableResponse({}));
  }

  /**
   * Validate Variable Reference
   * 
   * @param request - CheckUsageVariableRequest
   * @returns CheckUsageVariableResponse
   */
  async checkUsageVariable(request: $_model.CheckUsageVariableRequest): Promise<$_model.CheckUsageVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkUsageVariableWithOptions(request, runtime);
  }

  /**
   * Policy Comparison
   * 
   * @param request - CompareCopyRuleVariableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompareCopyRuleVariableResponse
   */
  async compareCopyRuleVariableWithOptions(request: $_model.CompareCopyRuleVariableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CompareCopyRuleVariableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createType)) {
      query["CreateType"] = request.createType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["RegId"] = request.regId;
    }

    if (!$dara.isNull(request.sourceRuleId)) {
      query["SourceRuleId"] = request.sourceRuleId;
    }

    if (!$dara.isNull(request.sourceRuleIds)) {
      query["SourceRuleIds"] = request.sourceRuleIds;
    }

    if (!$dara.isNull(request.targetEventCode)) {
      query["TargetEventCode"] = request.targetEventCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CompareCopyRuleVariable",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CompareCopyRuleVariableResponse>(await this.callApi(params, req, runtime), new $_model.CompareCopyRuleVariableResponse({}));
  }

  /**
   * Policy Comparison
   * 
   * @param request - CompareCopyRuleVariableRequest
   * @returns CompareCopyRuleVariableResponse
   */
  async compareCopyRuleVariable(request: $_model.CompareCopyRuleVariableRequest): Promise<$_model.CompareCopyRuleVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.compareCopyRuleVariableWithOptions(request, runtime);
  }

  /**
   * Policy Comparison.
   * 
   * @param request - CompareRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompareRuleResponse
   */
  async compareRuleWithOptions(request: $_model.CompareRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CompareRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.previousRuleVersionId)) {
      query["previousRuleVersionId"] = request.previousRuleVersionId;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.ruleVersionId)) {
      query["ruleVersionId"] = request.ruleVersionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CompareRule",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CompareRuleResponse>(await this.callApi(params, req, runtime), new $_model.CompareRuleResponse({}));
  }

  /**
   * Policy Comparison.
   * 
   * @param request - CompareRuleRequest
   * @returns CompareRuleResponse
   */
  async compareRule(request: $_model.CompareRuleRequest): Promise<$_model.CompareRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.compareRuleWithOptions(request, runtime);
  }

  /**
   * Add Query Conditions
   * 
   * @param request - CreateAnalysisConditionFavoriteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAnalysisConditionFavoriteResponse
   */
  async createAnalysisConditionFavoriteWithOptions(request: $_model.CreateAnalysisConditionFavoriteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAnalysisConditionFavoriteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.condition)) {
      query["condition"] = request.condition;
    }

    if (!$dara.isNull(request.eventBeginTime)) {
      query["eventBeginTime"] = request.eventBeginTime;
    }

    if (!$dara.isNull(request.eventCodes)) {
      query["eventCodes"] = request.eventCodes;
    }

    if (!$dara.isNull(request.eventEndTime)) {
      query["eventEndTime"] = request.eventEndTime;
    }

    if (!$dara.isNull(request.fieldName)) {
      query["fieldName"] = request.fieldName;
    }

    if (!$dara.isNull(request.fieldValue)) {
      query["fieldValue"] = request.fieldValue;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAnalysisConditionFavorite",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAnalysisConditionFavoriteResponse>(await this.callApi(params, req, runtime), new $_model.CreateAnalysisConditionFavoriteResponse({}));
  }

  /**
   * Add Query Conditions
   * 
   * @param request - CreateAnalysisConditionFavoriteRequest
   * @returns CreateAnalysisConditionFavoriteResponse
   */
  async createAnalysisConditionFavorite(request: $_model.CreateAnalysisConditionFavoriteRequest): Promise<$_model.CreateAnalysisConditionFavoriteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAnalysisConditionFavoriteWithOptions(request, runtime);
  }

  /**
   * Create Export Task
   * 
   * @param request - CreateAnalysisExportTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAnalysisExportTaskResponse
   */
  async createAnalysisExportTaskWithOptions(request: $_model.CreateAnalysisExportTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAnalysisExportTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.columns)) {
      query["columns"] = request.columns;
    }

    if (!$dara.isNull(request.conditions)) {
      query["conditions"] = request.conditions;
    }

    if (!$dara.isNull(request.eventBeginTime)) {
      query["eventBeginTime"] = request.eventBeginTime;
    }

    if (!$dara.isNull(request.eventCodes)) {
      query["eventCodes"] = request.eventCodes;
    }

    if (!$dara.isNull(request.eventEndTime)) {
      query["eventEndTime"] = request.eventEndTime;
    }

    if (!$dara.isNull(request.fieldName)) {
      query["fieldName"] = request.fieldName;
    }

    if (!$dara.isNull(request.fieldValue)) {
      query["fieldValue"] = request.fieldValue;
    }

    if (!$dara.isNull(request.fileFormat)) {
      query["fileFormat"] = request.fileFormat;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.scope)) {
      query["scope"] = request.scope;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAnalysisExportTask",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAnalysisExportTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateAnalysisExportTaskResponse({}));
  }

  /**
   * Create Export Task
   * 
   * @param request - CreateAnalysisExportTaskRequest
   * @returns CreateAnalysisExportTaskResponse
   */
  async createAnalysisExportTask(request: $_model.CreateAnalysisExportTaskRequest): Promise<$_model.CreateAnalysisExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAnalysisExportTaskWithOptions(request, runtime);
  }

  /**
   * Create AppKey
   * 
   * @param request - CreateAppKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppKeyResponse
   */
  async createAppKeyWithOptions(request: $_model.CreateAppKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppKey",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppKeyResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppKeyResponse({}));
  }

  /**
   * Create AppKey
   * 
   * @param request - CreateAppKeyRequest
   * @returns CreateAppKeyResponse
   */
  async createAppKey(request: $_model.CreateAppKeyRequest): Promise<$_model.CreateAppKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppKeyWithOptions(request, runtime);
  }

  /**
   * Create Accumulative Variable
   * 
   * @param request - CreateCustVariableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustVariableResponse
   */
  async createCustVariableWithOptions(request: $_model.CreateCustVariableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustVariableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.condition)) {
      query["condition"] = request.condition;
    }

    if (!$dara.isNull(request.createType)) {
      query["createType"] = request.createType;
    }

    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.eventCodes)) {
      query["eventCodes"] = request.eventCodes;
    }

    if (!$dara.isNull(request.historyValueType)) {
      query["historyValueType"] = request.historyValueType;
    }

    if (!$dara.isNull(request.object)) {
      query["object"] = request.object;
    }

    if (!$dara.isNull(request.outputs)) {
      query["outputs"] = request.outputs;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.subject)) {
      query["subject"] = request.subject;
    }

    if (!$dara.isNull(request.timeType)) {
      query["timeType"] = request.timeType;
    }

    if (!$dara.isNull(request.title)) {
      query["title"] = request.title;
    }

    if (!$dara.isNull(request.twCount)) {
      query["twCount"] = request.twCount;
    }

    if (!$dara.isNull(request.velocityFC)) {
      query["velocityFC"] = request.velocityFC;
    }

    if (!$dara.isNull(request.velocityTW)) {
      query["velocityTW"] = request.velocityTW;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustVariable",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCustVariableResponse>(await this.callApi(params, req, runtime), new $_model.CreateCustVariableResponse({}));
  }

  /**
   * Create Accumulative Variable
   * 
   * @param request - CreateCustVariableRequest
   * @returns CreateCustVariableResponse
   */
  async createCustVariable(request: $_model.CreateCustVariableRequest): Promise<$_model.CreateCustVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustVariableWithOptions(request, runtime);
  }

  /**
   * Add Data Source
   * 
   * @param request - CreateDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataSourceResponse
   */
  async createDataSourceWithOptions(request: $_model.CreateDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.ossKey)) {
      query["ossKey"] = request.ossKey;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataSource",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataSourceResponse({}));
  }

  /**
   * Add Data Source
   * 
   * @param request - CreateDataSourceRequest
   * @returns CreateDataSourceResponse
   */
  async createDataSource(request: $_model.CreateDataSourceRequest): Promise<$_model.CreateDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataSourceWithOptions(request, runtime);
  }

  /**
   * Create Event
   * 
   * @param request - CreateEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEventResponse
   */
  async createEventWithOptions(request: $_model.CreateEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.createType)) {
      query["createType"] = request.createType;
    }

    if (!$dara.isNull(request.eventName)) {
      query["eventName"] = request.eventName;
    }

    if (!$dara.isNull(request.inputFieldsStr)) {
      query["inputFieldsStr"] = request.inputFieldsStr;
    }

    if (!$dara.isNull(request.memo)) {
      query["memo"] = request.memo;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["templateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateName)) {
      query["templateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateType)) {
      query["templateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEvent",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEventResponse>(await this.callApi(params, req, runtime), new $_model.CreateEventResponse({}));
  }

  /**
   * Create Event
   * 
   * @param request - CreateEventRequest
   * @returns CreateEventResponse
   */
  async createEvent(request: $_model.CreateEventRequest): Promise<$_model.CreateEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEventWithOptions(request, runtime);
  }

  /**
   * Create Custom Variable
   * 
   * @param request - CreateExpressionVariableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExpressionVariableResponse
   */
  async createExpressionVariableWithOptions(request: $_model.CreateExpressionVariableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateExpressionVariableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.expression)) {
      query["expression"] = request.expression;
    }

    if (!$dara.isNull(request.expressionTitle)) {
      query["expressionTitle"] = request.expressionTitle;
    }

    if (!$dara.isNull(request.expressionVariable)) {
      query["expressionVariable"] = request.expressionVariable;
    }

    if (!$dara.isNull(request.outlier)) {
      query["outlier"] = request.outlier;
    }

    if (!$dara.isNull(request.outputs)) {
      query["outputs"] = request.outputs;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.title)) {
      query["title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateExpressionVariable",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateExpressionVariableResponse>(await this.callApi(params, req, runtime), new $_model.CreateExpressionVariableResponse({}));
  }

  /**
   * Create Custom Variable
   * 
   * @param request - CreateExpressionVariableRequest
   * @returns CreateExpressionVariableResponse
   */
  async createExpressionVariable(request: $_model.CreateExpressionVariableRequest): Promise<$_model.CreateExpressionVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createExpressionVariableWithOptions(request, runtime);
  }

  /**
   * Add New Field
   * 
   * @param request - CreateFieldRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFieldResponse
   */
  async createFieldWithOptions(request: $_model.CreateFieldRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFieldResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.classify)) {
      query["classify"] = request.classify;
    }

    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.enumData)) {
      query["enumData"] = request.enumData;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.source)) {
      query["source"] = request.source;
    }

    if (!$dara.isNull(request.title)) {
      query["title"] = request.title;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateField",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFieldResponse>(await this.callApi(params, req, runtime), new $_model.CreateFieldResponse({}));
  }

  /**
   * Add New Field
   * 
   * @param request - CreateFieldRequest
   * @returns CreateFieldResponse
   */
  async createField(request: $_model.CreateFieldRequest): Promise<$_model.CreateFieldResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFieldWithOptions(request, runtime);
  }

  /**
   * Submit Task
   * 
   * @param request - CreateModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModelResponse
   */
  async createModelWithOptions(request: $_model.CreateModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateModelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucId)) {
      query["BucId"] = request.bucId;
    }

    if (!$dara.isNull(request.counts)) {
      query["Counts"] = request.counts;
    }

    if (!$dara.isNull(request.fileMD5)) {
      query["FileMD5"] = request.fileMD5;
    }

    if (!$dara.isNull(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!$dara.isNull(request.modelName)) {
      query["ModelName"] = request.modelName;
    }

    if (!$dara.isNull(request.modelScene)) {
      query["ModelScene"] = request.modelScene;
    }

    if (!$dara.isNull(request.parameterNum)) {
      query["ParameterNum"] = request.parameterNum;
    }

    if (!$dara.isNull(request.regId)) {
      query["RegId"] = request.regId;
    }

    if (!$dara.isNull(request.userLocalFileName)) {
      query["UserLocalFileName"] = request.userLocalFileName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateModel",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateModelResponse>(await this.callApi(params, req, runtime), new $_model.CreateModelResponse({}));
  }

  /**
   * Submit Task
   * 
   * @param request - CreateModelRequest
   * @returns CreateModelResponse
   */
  async createModel(request: $_model.CreateModelRequest): Promise<$_model.CreateModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createModelWithOptions(request, runtime);
  }

  /**
   * Create POC
   * 
   * @param request - CreatePocEvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePocEvResponse
   */
  async createPocEvWithOptions(request: $_model.CreatePocEvRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePocEvResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dateFormat)) {
      query["DateFormat"] = request.dateFormat;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileType)) {
      query["FileType"] = request.fileType;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["RegId"] = request.regId;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.tab)) {
      query["Tab"] = request.tab;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePocEv",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePocEvResponse>(await this.callApi(params, req, runtime), new $_model.CreatePocEvResponse({}));
  }

  /**
   * Create POC
   * 
   * @param request - CreatePocEvRequest
   * @returns CreatePocEvResponse
   */
  async createPocEv(request: $_model.CreatePocEvRequest): Promise<$_model.CreatePocEvResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPocEvWithOptions(request, runtime);
  }

  /**
   * Add New Custom Query Variable
   * 
   * @param request - CreateQueryVariableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQueryVariableResponse
   */
  async createQueryVariableWithOptions(request: $_model.CreateQueryVariableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateQueryVariableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.dataSourceCode)) {
      query["dataSourceCode"] = request.dataSourceCode;
    }

    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.expression)) {
      query["expression"] = request.expression;
    }

    if (!$dara.isNull(request.expressionTitle)) {
      query["expressionTitle"] = request.expressionTitle;
    }

    if (!$dara.isNull(request.expressionVariable)) {
      query["expressionVariable"] = request.expressionVariable;
    }

    if (!$dara.isNull(request.outlier)) {
      query["outlier"] = request.outlier;
    }

    if (!$dara.isNull(request.outputs)) {
      query["outputs"] = request.outputs;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.title)) {
      query["title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQueryVariable",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateQueryVariableResponse>(await this.callApi(params, req, runtime), new $_model.CreateQueryVariableResponse({}));
  }

  /**
   * Add New Custom Query Variable
   * 
   * @param request - CreateQueryVariableRequest
   * @returns CreateQueryVariableResponse
   */
  async createQueryVariable(request: $_model.CreateQueryVariableRequest): Promise<$_model.CreateQueryVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createQueryVariableWithOptions(request, runtime);
  }

  /**
   * Create Recommended Event Strategy
   * 
   * @param request - CreateRecommendEventRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRecommendEventRuleResponse
   */
  async createRecommendEventRuleWithOptions(request: $_model.CreateRecommendEventRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRecommendEventRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.eventName)) {
      query["eventName"] = request.eventName;
    }

    if (!$dara.isNull(request.recommendRuleIdsStr)) {
      query["recommendRuleIdsStr"] = request.recommendRuleIdsStr;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRecommendEventRule",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRecommendEventRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateRecommendEventRuleResponse({}));
  }

  /**
   * Create Recommended Event Strategy
   * 
   * @param request - CreateRecommendEventRuleRequest
   * @returns CreateRecommendEventRuleResponse
   */
  async createRecommendEventRule(request: $_model.CreateRecommendEventRuleRequest): Promise<$_model.CreateRecommendEventRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRecommendEventRuleWithOptions(request, runtime);
  }

  /**
   * Create Recommendation Task
   * 
   * @param request - CreateRecommendTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRecommendTaskResponse
   */
  async createRecommendTaskWithOptions(request: $_model.CreateRecommendTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRecommendTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.sampleId)) {
      query["sampleId"] = request.sampleId;
    }

    if (!$dara.isNull(request.variablesStr)) {
      query["variablesStr"] = request.variablesStr;
    }

    if (!$dara.isNull(request.velocitiesStr)) {
      query["velocitiesStr"] = request.velocitiesStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRecommendTask",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRecommendTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateRecommendTaskResponse({}));
  }

  /**
   * Create Recommendation Task
   * 
   * @param request - CreateRecommendTaskRequest
   * @returns CreateRecommendTaskResponse
   */
  async createRecommendTask(request: $_model.CreateRecommendTaskRequest): Promise<$_model.CreateRecommendTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRecommendTaskWithOptions(request, runtime);
  }

  /**
   * Create Policy & Version
   * 
   * @param request - CreateRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRuleResponse
   */
  async createRuleWithOptions(request: $_model.CreateRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.consoleRuleId)) {
      query["consoleRuleId"] = request.consoleRuleId;
    }

    if (!$dara.isNull(request.createType)) {
      query["createType"] = request.createType;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.eventName)) {
      query["eventName"] = request.eventName;
    }

    if (!$dara.isNull(request.logicExpression)) {
      query["logicExpression"] = request.logicExpression;
    }

    if (!$dara.isNull(request.memo)) {
      query["memo"] = request.memo;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.ruleActions)) {
      query["ruleActions"] = request.ruleActions;
    }

    if (!$dara.isNull(request.ruleBody)) {
      query["ruleBody"] = request.ruleBody;
    }

    if (!$dara.isNull(request.ruleExpressions)) {
      query["ruleExpressions"] = request.ruleExpressions;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["ruleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.ruleStatus)) {
      query["ruleStatus"] = request.ruleStatus;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["ruleType"] = request.ruleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRule",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateRuleResponse({}));
  }

  /**
   * Create Policy & Version
   * 
   * @param request - CreateRuleRequest
   * @returns CreateRuleResponse
   */
  async createRule(request: $_model.CreateRuleRequest): Promise<$_model.CreateRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRuleWithOptions(request, runtime);
  }

  /**
   * Add Sample
   * 
   * @param request - CreateSampleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSampleResponse
   */
  async createSampleWithOptions(request: $_model.CreateSampleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSampleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.clientFileName)) {
      query["clientFileName"] = request.clientFileName;
    }

    if (!$dara.isNull(request.clientPath)) {
      query["clientPath"] = request.clientPath;
    }

    if (!$dara.isNull(request.fileType)) {
      query["fileType"] = request.fileType;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.sampleTag)) {
      query["sampleTag"] = request.sampleTag;
    }

    if (!$dara.isNull(request.sampleType)) {
      query["sampleType"] = request.sampleType;
    }

    if (!$dara.isNull(request.sampleValues)) {
      query["sampleValues"] = request.sampleValues;
    }

    if (!$dara.isNull(request.uploadType)) {
      query["uploadType"] = request.uploadType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSample",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSampleResponse>(await this.callApi(params, req, runtime), new $_model.CreateSampleResponse({}));
  }

  /**
   * Add Sample
   * 
   * @param request - CreateSampleRequest
   * @returns CreateSampleResponse
   */
  async createSample(request: $_model.CreateSampleRequest): Promise<$_model.CreateSampleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSampleWithOptions(request, runtime);
  }

  /**
   * User-level Single API to Create Sample Batches
   * 
   * @param request - CreateSampleApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSampleApiResponse
   */
  async createSampleApiWithOptions(request: $_model.CreateSampleApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSampleApiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.dataValue)) {
      query["DataValue"] = request.dataValue;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["RegId"] = request.regId;
    }

    if (!$dara.isNull(request.sampleBatchType)) {
      query["SampleBatchType"] = request.sampleBatchType;
    }

    if (!$dara.isNull(request.serviceList)) {
      query["ServiceList"] = request.serviceList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSampleApi",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSampleApiResponse>(await this.callApi(params, req, runtime), new $_model.CreateSampleApiResponse({}));
  }

  /**
   * User-level Single API to Create Sample Batches
   * 
   * @param request - CreateSampleApiRequest
   * @returns CreateSampleApiResponse
   */
  async createSampleApi(request: $_model.CreateSampleApiRequest): Promise<$_model.CreateSampleApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSampleApiWithOptions(request, runtime);
  }

  /**
   * Create Sample Batch
   * 
   * @param request - CreateSampleBatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSampleBatchResponse
   */
  async createSampleBatchWithOptions(request: $_model.CreateSampleBatchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSampleBatchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.batchName)) {
      query["batchName"] = request.batchName;
    }

    if (!$dara.isNull(request.dataType)) {
      query["dataType"] = request.dataType;
    }

    if (!$dara.isNull(request.dataValue)) {
      query["dataValue"] = request.dataValue;
    }

    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.ossFileName)) {
      query["ossFileName"] = request.ossFileName;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.sampleBatchType)) {
      query["sampleBatchType"] = request.sampleBatchType;
    }

    if (!$dara.isNull(request.serviceList)) {
      query["serviceList"] = request.serviceList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSampleBatch",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSampleBatchResponse>(await this.callApi(params, req, runtime), new $_model.CreateSampleBatchResponse({}));
  }

  /**
   * Create Sample Batch
   * 
   * @param request - CreateSampleBatchRequest
   * @returns CreateSampleBatchResponse
   */
  async createSampleBatch(request: $_model.CreateSampleBatchRequest): Promise<$_model.CreateSampleBatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSampleBatchWithOptions(request, runtime);
  }

  /**
   * Create Sample Data
   * 
   * @param request - CreateSampleDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSampleDataResponse
   */
  async createSampleDataWithOptions(request: $_model.CreateSampleDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSampleDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.encryptType)) {
      query["encryptType"] = request.encryptType;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.riskValue)) {
      query["riskValue"] = request.riskValue;
    }

    if (!$dara.isNull(request.scene)) {
      query["scene"] = request.scene;
    }

    if (!$dara.isNull(request.storePath)) {
      query["storePath"] = request.storePath;
    }

    if (!$dara.isNull(request.storeType)) {
      query["storeType"] = request.storeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSampleData",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSampleDataResponse>(await this.callApi(params, req, runtime), new $_model.CreateSampleDataResponse({}));
  }

  /**
   * Create Sample Data
   * 
   * @param request - CreateSampleDataRequest
   * @returns CreateSampleDataResponse
   */
  async createSampleData(request: $_model.CreateSampleDataRequest): Promise<$_model.CreateSampleDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSampleDataWithOptions(request, runtime);
  }

  /**
   * Create Task
   * 
   * @param request - CreateSimulationTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSimulationTaskResponse
   */
  async createSimulationTaskWithOptions(request: $_model.CreateSimulationTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSimulationTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.dataSourceConfig)) {
      query["dataSourceConfig"] = request.dataSourceConfig;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      query["dataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.filtersStr)) {
      query["filtersStr"] = request.filtersStr;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.rulesStr)) {
      query["rulesStr"] = request.rulesStr;
    }

    if (!$dara.isNull(request.runTask)) {
      query["runTask"] = request.runTask;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.taskName)) {
      query["taskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSimulationTask",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSimulationTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateSimulationTaskResponse({}));
  }

  /**
   * Create Task
   * 
   * @param request - CreateSimulationTaskRequest
   * @returns CreateSimulationTaskResponse
   */
  async createSimulationTask(request: $_model.CreateSimulationTaskRequest): Promise<$_model.CreateSimulationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSimulationTaskWithOptions(request, runtime);
  }

  /**
   * Policy Replication
   * 
   * @param request - DeepCopyRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeepCopyRuleResponse
   */
  async deepCopyRuleWithOptions(request: $_model.DeepCopyRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeepCopyRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createType)) {
      query["CreateType"] = request.createType;
    }

    if (!$dara.isNull(request.custInsertInfo)) {
      query["CustInsertInfo"] = request.custInsertInfo;
    }

    if (!$dara.isNull(request.custWriteInfo)) {
      query["CustWriteInfo"] = request.custWriteInfo;
    }

    if (!$dara.isNull(request.expressionVariableInfo)) {
      query["ExpressionVariableInfo"] = request.expressionVariableInfo;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.queryExpressionVariableInfo)) {
      query["QueryExpressionVariableInfo"] = request.queryExpressionVariableInfo;
    }

    if (!$dara.isNull(request.regId)) {
      query["RegId"] = request.regId;
    }

    if (!$dara.isNull(request.sourceRuleId)) {
      query["SourceRuleId"] = request.sourceRuleId;
    }

    if (!$dara.isNull(request.sourceRuleIds)) {
      query["SourceRuleIds"] = request.sourceRuleIds;
    }

    if (!$dara.isNull(request.targetEventCode)) {
      query["TargetEventCode"] = request.targetEventCode;
    }

    if (!$dara.isNull(request.targetEventName)) {
      query["TargetEventName"] = request.targetEventName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeepCopyRule",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeepCopyRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeepCopyRuleResponse({}));
  }

  /**
   * Policy Replication
   * 
   * @param request - DeepCopyRuleRequest
   * @returns DeepCopyRuleResponse
   */
  async deepCopyRule(request: $_model.DeepCopyRuleRequest): Promise<$_model.DeepCopyRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deepCopyRuleWithOptions(request, runtime);
  }

  /**
   * Delete Query Condition
   * 
   * @param request - DeleteAnalysisConditionFavoriteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAnalysisConditionFavoriteResponse
   */
  async deleteAnalysisConditionFavoriteWithOptions(request: $_model.DeleteAnalysisConditionFavoriteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAnalysisConditionFavoriteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAnalysisConditionFavorite",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAnalysisConditionFavoriteResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAnalysisConditionFavoriteResponse({}));
  }

  /**
   * Delete Query Condition
   * 
   * @param request - DeleteAnalysisConditionFavoriteRequest
   * @returns DeleteAnalysisConditionFavoriteResponse
   */
  async deleteAnalysisConditionFavorite(request: $_model.DeleteAnalysisConditionFavoriteRequest): Promise<$_model.DeleteAnalysisConditionFavoriteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAnalysisConditionFavoriteWithOptions(request, runtime);
  }

  /**
   * Delete Bypass Event
   * 
   * @param request - DeleteByPassShuntEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteByPassShuntEventResponse
   */
  async deleteByPassShuntEventWithOptions(request: $_model.DeleteByPassShuntEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteByPassShuntEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.eventId)) {
      query["eventId"] = request.eventId;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteByPassShuntEvent",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteByPassShuntEventResponse>(await this.callApi(params, req, runtime), new $_model.DeleteByPassShuntEventResponse({}));
  }

  /**
   * Delete Bypass Event
   * 
   * @param request - DeleteByPassShuntEventRequest
   * @returns DeleteByPassShuntEventResponse
   */
  async deleteByPassShuntEvent(request: $_model.DeleteByPassShuntEventRequest): Promise<$_model.DeleteByPassShuntEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteByPassShuntEventWithOptions(request, runtime);
  }

  /**
   * Delete Accumulated Variable
   * 
   * @param request - DeleteCustVariableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustVariableResponse
   */
  async deleteCustVariableWithOptions(request: $_model.DeleteCustVariableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustVariableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.createType)) {
      query["createType"] = request.createType;
    }

    if (!$dara.isNull(request.dataVersion)) {
      query["dataVersion"] = request.dataVersion;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.variableId)) {
      query["variableId"] = request.variableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustVariable",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustVariableResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustVariableResponse({}));
  }

  /**
   * Delete Accumulated Variable
   * 
   * @param request - DeleteCustVariableRequest
   * @returns DeleteCustVariableResponse
   */
  async deleteCustVariable(request: $_model.DeleteCustVariableRequest): Promise<$_model.DeleteCustVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustVariableWithOptions(request, runtime);
  }

  /**
   * Delete Data Source
   * 
   * @param request - DeleteDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataSourceResponse
   */
  async deleteDataSourceWithOptions(request: $_model.DeleteDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataSource",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataSourceResponse({}));
  }

  /**
   * Delete Data Source
   * 
   * @param request - DeleteDataSourceRequest
   * @returns DeleteDataSourceResponse
   */
  async deleteDataSource(request: $_model.DeleteDataSourceRequest): Promise<$_model.DeleteDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataSourceWithOptions(request, runtime);
  }

  /**
   * Delete Event Field
   * 
   * @param request - DeleteEventFieldRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEventFieldResponse
   */
  async deleteEventFieldWithOptions(request: $_model.DeleteEventFieldRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEventFieldResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.fieldName)) {
      query["fieldName"] = request.fieldName;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEventField",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEventFieldResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEventFieldResponse({}));
  }

  /**
   * Delete Event Field
   * 
   * @param request - DeleteEventFieldRequest
   * @returns DeleteEventFieldResponse
   */
  async deleteEventField(request: $_model.DeleteEventFieldRequest): Promise<$_model.DeleteEventFieldResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEventFieldWithOptions(request, runtime);
  }

  /**
   * Delete Custom Variable
   * 
   * @param request - DeleteExpressionVariableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExpressionVariableResponse
   */
  async deleteExpressionVariableWithOptions(request: $_model.DeleteExpressionVariableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteExpressionVariableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.dataVersion)) {
      query["dataVersion"] = request.dataVersion;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteExpressionVariable",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteExpressionVariableResponse>(await this.callApi(params, req, runtime), new $_model.DeleteExpressionVariableResponse({}));
  }

  /**
   * Delete Custom Variable
   * 
   * @param request - DeleteExpressionVariableRequest
   * @returns DeleteExpressionVariableResponse
   */
  async deleteExpressionVariable(request: $_model.DeleteExpressionVariableRequest): Promise<$_model.DeleteExpressionVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteExpressionVariableWithOptions(request, runtime);
  }

  /**
   * 删除字段
   * 
   * @param request - DeleteFieldRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFieldResponse
   */
  async deleteFieldWithOptions(request: $_model.DeleteFieldRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFieldResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteField",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFieldResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFieldResponse({}));
  }

  /**
   * 删除字段
   * 
   * @param request - DeleteFieldRequest
   * @returns DeleteFieldResponse
   */
  async deleteField(request: $_model.DeleteFieldRequest): Promise<$_model.DeleteFieldResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFieldWithOptions(request, runtime);
  }

  /**
   * Delete Name List
   * 
   * @param request - DeleteNameListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNameListResponse
   */
  async deleteNameListWithOptions(request: $_model.DeleteNameListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNameListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.ids)) {
      query["ids"] = request.ids;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNameList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNameListResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNameListResponse({}));
  }

  /**
   * Delete Name List
   * 
   * @param request - DeleteNameListRequest
   * @returns DeleteNameListResponse
   */
  async deleteNameList(request: $_model.DeleteNameListRequest): Promise<$_model.DeleteNameListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNameListWithOptions(request, runtime);
  }

  /**
   * Delete (pseudo) name list variable data
   * 
   * @param request - DeleteNameListDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNameListDataResponse
   */
  async deleteNameListDataWithOptions(request: $_model.DeleteNameListDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNameListDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.variableId)) {
      query["variableId"] = request.variableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNameListData",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNameListDataResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNameListDataResponse({}));
  }

  /**
   * Delete (pseudo) name list variable data
   * 
   * @param request - DeleteNameListDataRequest
   * @returns DeleteNameListDataResponse
   */
  async deleteNameListData(request: $_model.DeleteNameListDataRequest): Promise<$_model.DeleteNameListDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNameListDataWithOptions(request, runtime);
  }

  /**
   * Delete Query Variable
   * 
   * @param request - DeleteQueryVariableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQueryVariableResponse
   */
  async deleteQueryVariableWithOptions(request: $_model.DeleteQueryVariableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteQueryVariableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQueryVariable",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteQueryVariableResponse>(await this.callApi(params, req, runtime), new $_model.DeleteQueryVariableResponse({}));
  }

  /**
   * Delete Query Variable
   * 
   * @param request - DeleteQueryVariableRequest
   * @returns DeleteQueryVariableResponse
   */
  async deleteQueryVariable(request: $_model.DeleteQueryVariableRequest): Promise<$_model.DeleteQueryVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteQueryVariableWithOptions(request, runtime);
  }

  /**
   * Delete Policy Version
   * 
   * @param request - DeleteRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRuleResponse
   */
  async deleteRuleWithOptions(request: $_model.DeleteRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.consoleRuleId)) {
      query["consoleRuleId"] = request.consoleRuleId;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["ruleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleVersionId)) {
      query["ruleVersionId"] = request.ruleVersionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRule",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRuleResponse({}));
  }

  /**
   * Delete Policy Version
   * 
   * @param request - DeleteRuleRequest
   * @returns DeleteRuleResponse
   */
  async deleteRule(request: $_model.DeleteRuleRequest): Promise<$_model.DeleteRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRuleWithOptions(request, runtime);
  }

  /**
   * Batch Delete Samples
   * 
   * @param request - DeleteSampleBatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSampleBatchResponse
   */
  async deleteSampleBatchWithOptions(request: $_model.DeleteSampleBatchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSampleBatchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.ids)) {
      query["ids"] = request.ids;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.versions)) {
      query["versions"] = request.versions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSampleBatch",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSampleBatchResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSampleBatchResponse({}));
  }

  /**
   * Batch Delete Samples
   * 
   * @param request - DeleteSampleBatchRequest
   * @returns DeleteSampleBatchResponse
   */
  async deleteSampleBatch(request: $_model.DeleteSampleBatchRequest): Promise<$_model.DeleteSampleBatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSampleBatchWithOptions(request, runtime);
  }

  /**
   * Sample Deletion
   * 
   * @param request - DeleteSampleBatchMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSampleBatchMetaResponse
   */
  async deleteSampleBatchMetaWithOptions(request: $_model.DeleteSampleBatchMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSampleBatchMetaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.batchUuid)) {
      query["batchUuid"] = request.batchUuid;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSampleBatchMeta",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSampleBatchMetaResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSampleBatchMetaResponse({}));
  }

  /**
   * Sample Deletion
   * 
   * @param request - DeleteSampleBatchMetaRequest
   * @returns DeleteSampleBatchMetaResponse
   */
  async deleteSampleBatchMeta(request: $_model.DeleteSampleBatchMetaRequest): Promise<$_model.DeleteSampleBatchMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSampleBatchMetaWithOptions(request, runtime);
  }

  /**
   * Delete Sample Data
   * 
   * @param request - DeleteSampleDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSampleDataResponse
   */
  async deleteSampleDataWithOptions(request: $_model.DeleteSampleDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSampleDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSampleData",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSampleDataResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSampleDataResponse({}));
  }

  /**
   * Delete Sample Data
   * 
   * @param request - DeleteSampleDataRequest
   * @returns DeleteSampleDataResponse
   */
  async deleteSampleData(request: $_model.DeleteSampleDataRequest): Promise<$_model.DeleteSampleDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSampleDataWithOptions(request, runtime);
  }

  /**
   * Delete Custom System Variable
   * 
   * @param request - DeleteSelfBindVariableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSelfBindVariableResponse
   */
  async deleteSelfBindVariableWithOptions(request: $_model.DeleteSelfBindVariableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSelfBindVariableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSelfBindVariable",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSelfBindVariableResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSelfBindVariableResponse({}));
  }

  /**
   * Delete Custom System Variable
   * 
   * @param request - DeleteSelfBindVariableRequest
   * @returns DeleteSelfBindVariableResponse
   */
  async deleteSelfBindVariable(request: $_model.DeleteSelfBindVariableRequest): Promise<$_model.DeleteSelfBindVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSelfBindVariableWithOptions(request, runtime);
  }

  /**
   * 高级查询获取左变量接口
   * 
   * @param request - DescribeAdvanceSearchLeftVariableListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAdvanceSearchLeftVariableListResponse
   */
  async describeAdvanceSearchLeftVariableListWithOptions(request: $_model.DescribeAdvanceSearchLeftVariableListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAdvanceSearchLeftVariableListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.eventCodes)) {
      query["eventCodes"] = request.eventCodes;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.scene)) {
      query["scene"] = request.scene;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAdvanceSearchLeftVariableList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAdvanceSearchLeftVariableListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAdvanceSearchLeftVariableListResponse({}));
  }

  /**
   * 高级查询获取左变量接口
   * 
   * @param request - DescribeAdvanceSearchLeftVariableListRequest
   * @returns DescribeAdvanceSearchLeftVariableListResponse
   */
  async describeAdvanceSearchLeftVariableList(request: $_model.DescribeAdvanceSearchLeftVariableListRequest): Promise<$_model.DescribeAdvanceSearchLeftVariableListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAdvanceSearchLeftVariableListWithOptions(request, runtime);
  }

  /**
   * Advanced Query
   * 
   * @param request - DescribeAdvanceSearchPageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAdvanceSearchPageListResponse
   */
  async describeAdvanceSearchPageListWithOptions(request: $_model.DescribeAdvanceSearchPageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAdvanceSearchPageListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.condition)) {
      query["condition"] = request.condition;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.eventBeginTime)) {
      query["eventBeginTime"] = request.eventBeginTime;
    }

    if (!$dara.isNull(request.eventCodes)) {
      query["eventCodes"] = request.eventCodes;
    }

    if (!$dara.isNull(request.eventEndTime)) {
      query["eventEndTime"] = request.eventEndTime;
    }

    if (!$dara.isNull(request.fieldName)) {
      query["fieldName"] = request.fieldName;
    }

    if (!$dara.isNull(request.fieldValue)) {
      query["fieldValue"] = request.fieldValue;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAdvanceSearchPageList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAdvanceSearchPageListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAdvanceSearchPageListResponse({}));
  }

  /**
   * Advanced Query
   * 
   * @param request - DescribeAdvanceSearchPageListRequest
   * @returns DescribeAdvanceSearchPageListResponse
   */
  async describeAdvanceSearchPageList(request: $_model.DescribeAdvanceSearchPageListRequest): Promise<$_model.DescribeAdvanceSearchPageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAdvanceSearchPageListWithOptions(request, runtime);
  }

  /**
   * 数据源列表
   * 
   * @param request - DescribeAllDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAllDataSourceResponse
   */
  async describeAllDataSourceWithOptions(request: $_model.DescribeAllDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAllDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAllDataSource",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAllDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAllDataSourceResponse({}));
  }

  /**
   * 数据源列表
   * 
   * @param request - DescribeAllDataSourceRequest
   * @returns DescribeAllDataSourceResponse
   */
  async describeAllDataSource(request: $_model.DescribeAllDataSourceRequest): Promise<$_model.DescribeAllDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAllDataSourceWithOptions(request, runtime);
  }

  /**
   * Event List Query
   * 
   * @param request - DescribeAllEventNameAndCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAllEventNameAndCodeResponse
   */
  async describeAllEventNameAndCodeWithOptions(request: $_model.DescribeAllEventNameAndCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAllEventNameAndCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.createType)) {
      query["createType"] = request.createType;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAllEventNameAndCode",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAllEventNameAndCodeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAllEventNameAndCodeResponse({}));
  }

  /**
   * Event List Query
   * 
   * @param request - DescribeAllEventNameAndCodeRequest
   * @returns DescribeAllEventNameAndCodeResponse
   */
  async describeAllEventNameAndCode(request: $_model.DescribeAllEventNameAndCodeRequest): Promise<$_model.DescribeAllEventNameAndCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAllEventNameAndCodeWithOptions(request, runtime);
  }

  /**
   * Display all root variables when testing custom expressions
   * 
   * @param request - DescribeAllRootVariableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAllRootVariableResponse
   */
  async describeAllRootVariableWithOptions(request: $_model.DescribeAllRootVariableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAllRootVariableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.deviceVariableIds)) {
      query["deviceVariableIds"] = request.deviceVariableIds;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.expressionVariableIds)) {
      query["expressionVariableIds"] = request.expressionVariableIds;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.nativeVariableIds)) {
      query["nativeVariableIds"] = request.nativeVariableIds;
    }

    if (!$dara.isNull(request.queryVariableIds)) {
      query["queryVariableIds"] = request.queryVariableIds;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.velocityVariableIds)) {
      query["velocityVariableIds"] = request.velocityVariableIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAllRootVariable",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAllRootVariableResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAllRootVariableResponse({}));
  }

  /**
   * Display all root variables when testing custom expressions
   * 
   * @param request - DescribeAllRootVariableRequest
   * @returns DescribeAllRootVariableResponse
   */
  async describeAllRootVariable(request: $_model.DescribeAllRootVariableRequest): Promise<$_model.DescribeAllRootVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAllRootVariableWithOptions(request, runtime);
  }

  /**
   * Display All Fields
   * 
   * @param request - DescribeAnalysisColumnFieldListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAnalysisColumnFieldListResponse
   */
  async describeAnalysisColumnFieldListWithOptions(request: $_model.DescribeAnalysisColumnFieldListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAnalysisColumnFieldListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAnalysisColumnFieldList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAnalysisColumnFieldListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAnalysisColumnFieldListResponse({}));
  }

  /**
   * Display All Fields
   * 
   * @param request - DescribeAnalysisColumnFieldListRequest
   * @returns DescribeAnalysisColumnFieldListResponse
   */
  async describeAnalysisColumnFieldList(request: $_model.DescribeAnalysisColumnFieldListRequest): Promise<$_model.DescribeAnalysisColumnFieldListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAnalysisColumnFieldListWithOptions(request, runtime);
  }

  /**
   * Query Custom Columns
   * 
   * @param request - DescribeAnalysisColumnListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAnalysisColumnListResponse
   */
  async describeAnalysisColumnListWithOptions(request: $_model.DescribeAnalysisColumnListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAnalysisColumnListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAnalysisColumnList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAnalysisColumnListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAnalysisColumnListResponse({}));
  }

  /**
   * Query Custom Columns
   * 
   * @param request - DescribeAnalysisColumnListRequest
   * @returns DescribeAnalysisColumnListResponse
   */
  async describeAnalysisColumnList(request: $_model.DescribeAnalysisColumnListRequest): Promise<$_model.DescribeAnalysisColumnListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAnalysisColumnListWithOptions(request, runtime);
  }

  /**
   * Query Condition List
   * 
   * @param request - DescribeAnalysisConditionFavoriteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAnalysisConditionFavoriteListResponse
   */
  async describeAnalysisConditionFavoriteListWithOptions(request: $_model.DescribeAnalysisConditionFavoriteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAnalysisConditionFavoriteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAnalysisConditionFavoriteList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAnalysisConditionFavoriteListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAnalysisConditionFavoriteListResponse({}));
  }

  /**
   * Query Condition List
   * 
   * @param request - DescribeAnalysisConditionFavoriteListRequest
   * @returns DescribeAnalysisConditionFavoriteListResponse
   */
  async describeAnalysisConditionFavoriteList(request: $_model.DescribeAnalysisConditionFavoriteListRequest): Promise<$_model.DescribeAnalysisConditionFavoriteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAnalysisConditionFavoriteListWithOptions(request, runtime);
  }

  /**
   * Download Query Results
   * 
   * @param request - DescribeAnalysisExportTaskDownloadUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAnalysisExportTaskDownloadUrlResponse
   */
  async describeAnalysisExportTaskDownloadUrlWithOptions(request: $_model.DescribeAnalysisExportTaskDownloadUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAnalysisExportTaskDownloadUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAnalysisExportTaskDownloadUrl",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAnalysisExportTaskDownloadUrlResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAnalysisExportTaskDownloadUrlResponse({}));
  }

  /**
   * Download Query Results
   * 
   * @param request - DescribeAnalysisExportTaskDownloadUrlRequest
   * @returns DescribeAnalysisExportTaskDownloadUrlResponse
   */
  async describeAnalysisExportTaskDownloadUrl(request: $_model.DescribeAnalysisExportTaskDownloadUrlRequest): Promise<$_model.DescribeAnalysisExportTaskDownloadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAnalysisExportTaskDownloadUrlWithOptions(request, runtime);
  }

  /**
   * Get API Details
   * 
   * @param request - DescribeApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApiResponse
   */
  async describeApiWithOptions(request: $_model.DescribeApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.apiId)) {
      query["apiId"] = request.apiId;
    }

    if (!$dara.isNull(request.apiRegionId)) {
      query["apiRegionId"] = request.apiRegionId;
    }

    if (!$dara.isNull(request.apiType)) {
      query["apiType"] = request.apiType;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApi",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApiResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApiResponse({}));
  }

  /**
   * Get API Details
   * 
   * @param request - DescribeApiRequest
   * @returns DescribeApiResponse
   */
  async describeApi(request: $_model.DescribeApiRequest): Promise<$_model.DescribeApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApiWithOptions(request, runtime);
  }

  /**
   * Get API groups including those purchased by the user and custom ones
   * 
   * @param request - DescribeApiGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApiGroupsResponse
   */
  async describeApiGroupsWithOptions(request: $_model.DescribeApiGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApiGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.apiRegionId)) {
      query["apiRegionId"] = request.apiRegionId;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApiGroups",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApiGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApiGroupsResponse({}));
  }

  /**
   * Get API groups including those purchased by the user and custom ones
   * 
   * @param request - DescribeApiGroupsRequest
   * @returns DescribeApiGroupsResponse
   */
  async describeApiGroups(request: $_model.DescribeApiGroupsRequest): Promise<$_model.DescribeApiGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApiGroupsWithOptions(request, runtime);
  }

  /**
   * Query the limit information for creating API tasks
   * 
   * @param request - DescribeApiLimitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApiLimitResponse
   */
  async describeApiLimitWithOptions(request: $_model.DescribeApiLimitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApiLimitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApiLimit",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApiLimitResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApiLimitResponse({}));
  }

  /**
   * Query the limit information for creating API tasks
   * 
   * @param request - DescribeApiLimitRequest
   * @returns DescribeApiLimitResponse
   */
  async describeApiLimit(request: $_model.DescribeApiLimitRequest): Promise<$_model.DescribeApiLimitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApiLimitWithOptions(request, runtime);
  }

  /**
   * Get API Service Name
   * 
   * @param request - DescribeApiNameListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApiNameListResponse
   */
  async describeApiNameListWithOptions(request: $_model.DescribeApiNameListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApiNameListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApiNameList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApiNameListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApiNameListResponse({}));
  }

  /**
   * Get API Service Name
   * 
   * @param request - DescribeApiNameListRequest
   * @returns DescribeApiNameListResponse
   */
  async describeApiNameList(request: $_model.DescribeApiNameListRequest): Promise<$_model.DescribeApiNameListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApiNameListWithOptions(request, runtime);
  }

  /**
   * Query Variable Details
   * 
   * @param request - DescribeApiVariableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApiVariableResponse
   */
  async describeApiVariableWithOptions(request: $_model.DescribeApiVariableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApiVariableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApiVariable",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApiVariableResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApiVariableResponse({}));
  }

  /**
   * Query Variable Details
   * 
   * @param request - DescribeApiVariableRequest
   * @returns DescribeApiVariableResponse
   */
  async describeApiVariable(request: $_model.DescribeApiVariableRequest): Promise<$_model.DescribeApiVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApiVariableWithOptions(request, runtime);
  }

  /**
   * Get API list including purchased and customized APIs
   * 
   * @param request - DescribeApisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApisResponse
   */
  async describeApisWithOptions(request: $_model.DescribeApisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.apiGroupId)) {
      query["apiGroupId"] = request.apiGroupId;
    }

    if (!$dara.isNull(request.apiRegionId)) {
      query["apiRegionId"] = request.apiRegionId;
    }

    if (!$dara.isNull(request.apiType)) {
      query["apiType"] = request.apiType;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApis",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApisResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApisResponse({}));
  }

  /**
   * Get API list including purchased and customized APIs
   * 
   * @param request - DescribeApisRequest
   * @returns DescribeApisResponse
   */
  async describeApis(request: $_model.DescribeApisRequest): Promise<$_model.DescribeApisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApisWithOptions(request, runtime);
  }

  /**
   * Query appKey List
   * 
   * @param request - DescribeAppKeyPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppKeyPageResponse
   */
  async describeAppKeyPageWithOptions(request: $_model.DescribeAppKeyPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppKeyPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppKeyPage",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppKeyPageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppKeyPageResponse({}));
  }

  /**
   * Query appKey List
   * 
   * @param request - DescribeAppKeyPageRequest
   * @returns DescribeAppKeyPageResponse
   */
  async describeAppKeyPage(request: $_model.DescribeAppKeyPageRequest): Promise<$_model.DescribeAppKeyPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppKeyPageWithOptions(request, runtime);
  }

  /**
   * Approval Switch
   * 
   * @param request - DescribeAuditConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAuditConfigResponse
   */
  async describeAuditConfigWithOptions(request: $_model.DescribeAuditConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAuditConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.auditRelationType)) {
      query["auditRelationType"] = request.auditRelationType;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAuditConfig",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAuditConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAuditConfigResponse({}));
  }

  /**
   * Approval Switch
   * 
   * @param request - DescribeAuditConfigRequest
   * @returns DescribeAuditConfigResponse
   */
  async describeAuditConfig(request: $_model.DescribeAuditConfigRequest): Promise<$_model.DescribeAuditConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAuditConfigWithOptions(request, runtime);
  }

  /**
   * Approval Details
   * 
   * @param request - DescribeAuditDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAuditDetailsResponse
   */
  async describeAuditDetailsWithOptions(request: $_model.DescribeAuditDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAuditDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAuditDetails",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAuditDetailsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAuditDetailsResponse({}));
  }

  /**
   * Approval Details
   * 
   * @param request - DescribeAuditDetailsRequest
   * @returns DescribeAuditDetailsResponse
   */
  async describeAuditDetails(request: $_model.DescribeAuditDetailsRequest): Promise<$_model.DescribeAuditDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAuditDetailsWithOptions(request, runtime);
  }

  /**
   * Display and Query of Audit List
   * 
   * @param request - DescribeAuditPageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAuditPageListResponse
   */
  async describeAuditPageListWithOptions(request: $_model.DescribeAuditPageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAuditPageListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.auditStatus)) {
      query["auditStatus"] = request.auditStatus;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["ruleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAuditPageList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAuditPageListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAuditPageListResponse({}));
  }

  /**
   * Display and Query of Audit List
   * 
   * @param request - DescribeAuditPageListRequest
   * @returns DescribeAuditPageListResponse
   */
  async describeAuditPageList(request: $_model.DescribeAuditPageListRequest): Promise<$_model.DescribeAuditPageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAuditPageListWithOptions(request, runtime);
  }

  /**
   * Query the list of event names for the current user
   * 
   * @param request - DescribeAuthEventNameListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAuthEventNameListResponse
   */
  async describeAuthEventNameListWithOptions(request: $_model.DescribeAuthEventNameListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAuthEventNameListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAuthEventNameList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAuthEventNameListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAuthEventNameListResponse({}));
  }

  /**
   * Query the list of event names for the current user
   * 
   * @param request - DescribeAuthEventNameListRequest
   * @returns DescribeAuthEventNameListResponse
   */
  async describeAuthEventNameList(request: $_model.DescribeAuthEventNameListRequest): Promise<$_model.DescribeAuthEventNameListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAuthEventNameListWithOptions(request, runtime);
  }

  /**
   * 策略列表
   * 
   * @param request - DescribeAuthRulePageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAuthRulePageListResponse
   */
  async describeAuthRulePageListWithOptions(request: $_model.DescribeAuthRulePageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAuthRulePageListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["ruleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAuthRulePageList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAuthRulePageListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAuthRulePageListResponse({}));
  }

  /**
   * 策略列表
   * 
   * @param request - DescribeAuthRulePageListRequest
   * @returns DescribeAuthRulePageListResponse
   */
  async describeAuthRulePageList(request: $_model.DescribeAuthRulePageListRequest): Promise<$_model.DescribeAuthRulePageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAuthRulePageListWithOptions(request, runtime);
  }

  /**
   * 场景列表
   * 
   * @param request - DescribeAuthSceneListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAuthSceneListResponse
   */
  async describeAuthSceneListWithOptions(request: $_model.DescribeAuthSceneListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAuthSceneListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAuthSceneList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAuthSceneListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAuthSceneListResponse({}));
  }

  /**
   * 场景列表
   * 
   * @param request - DescribeAuthSceneListRequest
   * @returns DescribeAuthSceneListResponse
   */
  async describeAuthSceneList(request: $_model.DescribeAuthSceneListRequest): Promise<$_model.DescribeAuthSceneListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAuthSceneListWithOptions(request, runtime);
  }

  /**
   * Scene List
   * 
   * @param request - DescribeAuthScenePageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAuthScenePageListResponse
   */
  async describeAuthScenePageListWithOptions(request: $_model.DescribeAuthScenePageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAuthScenePageListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.sceneName)) {
      query["sceneName"] = request.sceneName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAuthScenePageList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAuthScenePageListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAuthScenePageListResponse({}));
  }

  /**
   * Scene List
   * 
   * @param request - DescribeAuthScenePageListRequest
   * @returns DescribeAuthScenePageListResponse
   */
  async describeAuthScenePageList(request: $_model.DescribeAuthScenePageListRequest): Promise<$_model.DescribeAuthScenePageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAuthScenePageListWithOptions(request, runtime);
  }

  /**
   * Check Authorization
   * 
   * @param request - DescribeAuthStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAuthStatusResponse
   */
  async describeAuthStatusWithOptions(request: $_model.DescribeAuthStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAuthStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAuthStatus",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAuthStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAuthStatusResponse({}));
  }

  /**
   * Check Authorization
   * 
   * @param request - DescribeAuthStatusRequest
   * @returns DescribeAuthStatusResponse
   */
  async describeAuthStatus(request: $_model.DescribeAuthStatusRequest): Promise<$_model.DescribeAuthStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAuthStatusWithOptions(request, runtime);
  }

  /**
   * Average Execution Time
   * 
   * @param request - DescribeAvgExecuteCostReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAvgExecuteCostReportResponse
   */
  async describeAvgExecuteCostReportWithOptions(request: $_model.DescribeAvgExecuteCostReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAvgExecuteCostReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAvgExecuteCostReport",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAvgExecuteCostReportResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAvgExecuteCostReportResponse({}));
  }

  /**
   * Average Execution Time
   * 
   * @param request - DescribeAvgExecuteCostReportRequest
   * @returns DescribeAvgExecuteCostReportResponse
   */
  async describeAvgExecuteCostReport(request: $_model.DescribeAvgExecuteCostReportRequest): Promise<$_model.DescribeAvgExecuteCostReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAvgExecuteCostReportWithOptions(request, runtime);
  }

  /**
   * Basic Query
   * 
   * @param request - DescribeBasicSearchPageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBasicSearchPageListResponse
   */
  async describeBasicSearchPageListWithOptions(request: $_model.DescribeBasicSearchPageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBasicSearchPageListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.eventBeginTime)) {
      query["eventBeginTime"] = request.eventBeginTime;
    }

    if (!$dara.isNull(request.eventCodes)) {
      query["eventCodes"] = request.eventCodes;
    }

    if (!$dara.isNull(request.eventEndTime)) {
      query["eventEndTime"] = request.eventEndTime;
    }

    if (!$dara.isNull(request.fieldName)) {
      query["fieldName"] = request.fieldName;
    }

    if (!$dara.isNull(request.fieldValue)) {
      query["fieldValue"] = request.fieldValue;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBasicSearchPageList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBasicSearchPageListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBasicSearchPageListResponse({}));
  }

  /**
   * Basic Query
   * 
   * @param request - DescribeBasicSearchPageListRequest
   * @returns DescribeBasicSearchPageListResponse
   */
  async describeBasicSearchPageList(request: $_model.DescribeBasicSearchPageListRequest): Promise<$_model.DescribeBasicSearchPageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBasicSearchPageListWithOptions(request, runtime);
  }

  /**
   * 基础统计
   * 
   * @param request - DescribeBasicStartRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBasicStartResponse
   */
  async describeBasicStartWithOptions(request: $_model.DescribeBasicStartRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBasicStartResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["appKey"] = request.appKey;
    }

    if (!$dara.isNull(request.endDs)) {
      query["endDs"] = request.endDs;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.service)) {
      query["service"] = request.service;
    }

    if (!$dara.isNull(request.startDs)) {
      query["startDs"] = request.startDs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBasicStart",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBasicStartResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBasicStartResponse({}));
  }

  /**
   * 基础统计
   * 
   * @param request - DescribeBasicStartRequest
   * @returns DescribeBasicStartResponse
   */
  async describeBasicStart(request: $_model.DescribeBasicStartRequest): Promise<$_model.DescribeBasicStartResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBasicStartWithOptions(request, runtime);
  }

  /**
   * View Bypass Event
   * 
   * @param request - DescribeByPassShuntEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeByPassShuntEventResponse
   */
  async describeByPassShuntEventWithOptions(request: $_model.DescribeByPassShuntEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeByPassShuntEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.eventId)) {
      query["eventId"] = request.eventId;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeByPassShuntEvent",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeByPassShuntEventResponse>(await this.callApi(params, req, runtime), new $_model.DescribeByPassShuntEventResponse({}));
  }

  /**
   * View Bypass Event
   * 
   * @param request - DescribeByPassShuntEventRequest
   * @returns DescribeByPassShuntEventResponse
   */
  async describeByPassShuntEvent(request: $_model.DescribeByPassShuntEventRequest): Promise<$_model.DescribeByPassShuntEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeByPassShuntEventWithOptions(request, runtime);
  }

  /**
   * Query the type configuration of custom accumulated variables
   * 
   * @param request - DescribeCustVariableConfigListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustVariableConfigListResponse
   */
  async describeCustVariableConfigListWithOptions(request: $_model.DescribeCustVariableConfigListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCustVariableConfigListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.bizType)) {
      query["bizType"] = request.bizType;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.timeType)) {
      query["timeType"] = request.timeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCustVariableConfigList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCustVariableConfigListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCustVariableConfigListResponse({}));
  }

  /**
   * Query the type configuration of custom accumulated variables
   * 
   * @param request - DescribeCustVariableConfigListRequest
   * @returns DescribeCustVariableConfigListResponse
   */
  async describeCustVariableConfigList(request: $_model.DescribeCustVariableConfigListRequest): Promise<$_model.DescribeCustVariableConfigListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustVariableConfigListWithOptions(request, runtime);
  }

  /**
   * Cumulative Variable Details
   * 
   * @param request - DescribeCustVariableDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustVariableDetailResponse
   */
  async describeCustVariableDetailWithOptions(request: $_model.DescribeCustVariableDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCustVariableDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCustVariableDetail",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCustVariableDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCustVariableDetailResponse({}));
  }

  /**
   * Cumulative Variable Details
   * 
   * @param request - DescribeCustVariableDetailRequest
   * @returns DescribeCustVariableDetailResponse
   */
  async describeCustVariableDetail(request: $_model.DescribeCustVariableDetailRequest): Promise<$_model.DescribeCustVariableDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustVariableDetailWithOptions(request, runtime);
  }

  /**
   * Query Custom Accumulated Variable List
   * 
   * @remarks
   * List Query of Accumulated Variables
   * 
   * @param request - DescribeCustVariablePageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustVariablePageResponse
   */
  async describeCustVariablePageWithOptions(request: $_model.DescribeCustVariablePageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCustVariablePageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.createType)) {
      query["createType"] = request.createType;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCustVariablePage",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCustVariablePageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCustVariablePageResponse({}));
  }

  /**
   * Query Custom Accumulated Variable List
   * 
   * @remarks
   * List Query of Accumulated Variables
   * 
   * @param request - DescribeCustVariablePageRequest
   * @returns DescribeCustVariablePageResponse
   */
  async describeCustVariablePage(request: $_model.DescribeCustVariablePageRequest): Promise<$_model.DescribeCustVariablePageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustVariablePageWithOptions(request, runtime);
  }

  /**
   * Get Data Source Data Download Link
   * 
   * @param request - DescribeDataSourceDataDownloadUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataSourceDataDownloadUrlResponse
   */
  async describeDataSourceDataDownloadUrlWithOptions(request: $_model.DescribeDataSourceDataDownloadUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataSourceDataDownloadUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      query["dataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDataSourceDataDownloadUrl",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataSourceDataDownloadUrlResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataSourceDataDownloadUrlResponse({}));
  }

  /**
   * Get Data Source Data Download Link
   * 
   * @param request - DescribeDataSourceDataDownloadUrlRequest
   * @returns DescribeDataSourceDataDownloadUrlResponse
   */
  async describeDataSourceDataDownloadUrl(request: $_model.DescribeDataSourceDataDownloadUrlRequest): Promise<$_model.DescribeDataSourceDataDownloadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataSourceDataDownloadUrlWithOptions(request, runtime);
  }

  /**
   * Retrieve all fields of a data source
   * 
   * @param request - DescribeDataSourceFieldsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataSourceFieldsResponse
   */
  async describeDataSourceFieldsWithOptions(request: $_model.DescribeDataSourceFieldsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataSourceFieldsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.dataSourceCode)) {
      query["dataSourceCode"] = request.dataSourceCode;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDataSourceFields",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataSourceFieldsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataSourceFieldsResponse({}));
  }

  /**
   * Retrieve all fields of a data source
   * 
   * @param request - DescribeDataSourceFieldsRequest
   * @returns DescribeDataSourceFieldsResponse
   */
  async describeDataSourceFields(request: $_model.DescribeDataSourceFieldsRequest): Promise<$_model.DescribeDataSourceFieldsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataSourceFieldsWithOptions(request, runtime);
  }

  /**
   * Data Source List Interface
   * 
   * @param request - DescribeDataSourcePageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataSourcePageListResponse
   */
  async describeDataSourcePageListWithOptions(request: $_model.DescribeDataSourcePageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataSourcePageListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDataSourcePageList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataSourcePageListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataSourcePageListResponse({}));
  }

  /**
   * Data Source List Interface
   * 
   * @param request - DescribeDataSourcePageListRequest
   * @returns DescribeDataSourcePageListResponse
   */
  async describeDataSourcePageList(request: $_model.DescribeDataSourcePageListRequest): Promise<$_model.DescribeDataSourcePageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataSourcePageListWithOptions(request, runtime);
  }

  /**
   * Decision Result Fluctuation Detection
   * 
   * @param request - DescribeDecisionResultFluctuationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDecisionResultFluctuationResponse
   */
  async describeDecisionResultFluctuationWithOptions(request: $_model.DescribeDecisionResultFluctuationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDecisionResultFluctuationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.eventCodes)) {
      query["eventCodes"] = request.eventCodes;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDecisionResultFluctuation",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDecisionResultFluctuationResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDecisionResultFluctuationResponse({}));
  }

  /**
   * Decision Result Fluctuation Detection
   * 
   * @param request - DescribeDecisionResultFluctuationRequest
   * @returns DescribeDecisionResultFluctuationResponse
   */
  async describeDecisionResultFluctuation(request: $_model.DescribeDecisionResultFluctuationRequest): Promise<$_model.DescribeDecisionResultFluctuationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDecisionResultFluctuationWithOptions(request, runtime);
  }

  /**
   * Decision Result Fluctuation Trend
   * 
   * @param request - DescribeDecisionResultTrendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDecisionResultTrendResponse
   */
  async describeDecisionResultTrendWithOptions(request: $_model.DescribeDecisionResultTrendRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDecisionResultTrendResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.beginTime)) {
      query["beginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventCodes)) {
      query["eventCodes"] = request.eventCodes;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDecisionResultTrend",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDecisionResultTrendResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDecisionResultTrendResponse({}));
  }

  /**
   * Decision Result Fluctuation Trend
   * 
   * @param request - DescribeDecisionResultTrendRequest
   * @returns DescribeDecisionResultTrendResponse
   */
  async describeDecisionResultTrend(request: $_model.DescribeDecisionResultTrendRequest): Promise<$_model.DescribeDecisionResultTrendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDecisionResultTrendWithOptions(request, runtime);
  }

  /**
   * Detailed Statistics
   * 
   * @param request - DescribeDetailStartRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDetailStartResponse
   */
  async describeDetailStartWithOptions(request: $_model.DescribeDetailStartRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDetailStartResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["appKey"] = request.appKey;
    }

    if (!$dara.isNull(request.endDs)) {
      query["endDs"] = request.endDs;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.service)) {
      query["service"] = request.service;
    }

    if (!$dara.isNull(request.startDs)) {
      query["startDs"] = request.startDs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDetailStart",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDetailStartResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDetailStartResponse({}));
  }

  /**
   * Detailed Statistics
   * 
   * @param request - DescribeDetailStartRequest
   * @returns DescribeDetailStartResponse
   */
  async describeDetailStart(request: $_model.DescribeDetailStartRequest): Promise<$_model.DescribeDetailStartResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDetailStartWithOptions(request, runtime);
  }

  /**
   * Download
   * 
   * @param request - DescribeDownloadUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDownloadUrlResponse
   */
  async describeDownloadUrlWithOptions(request: $_model.DescribeDownloadUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDownloadUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileType)) {
      query["FileType"] = request.fileType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["RegId"] = request.regId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDownloadUrl",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDownloadUrlResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDownloadUrlResponse({}));
  }

  /**
   * Download
   * 
   * @param request - DescribeDownloadUrlRequest
   * @returns DescribeDownloadUrlResponse
   */
  async describeDownloadUrl(request: $_model.DescribeDownloadUrlRequest): Promise<$_model.DescribeDownloadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDownloadUrlWithOptions(request, runtime);
  }

  /**
   * Query Event Details
   * 
   * @param request - DescribeEventBaseInfoByEventCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventBaseInfoByEventCodeResponse
   */
  async describeEventBaseInfoByEventCodeWithOptions(request: $_model.DescribeEventBaseInfoByEventCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventBaseInfoByEventCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.createType)) {
      query["createType"] = request.createType;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEventBaseInfoByEventCode",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventBaseInfoByEventCodeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventBaseInfoByEventCodeResponse({}));
  }

  /**
   * Query Event Details
   * 
   * @param request - DescribeEventBaseInfoByEventCodeRequest
   * @returns DescribeEventBaseInfoByEventCodeResponse
   */
  async describeEventBaseInfoByEventCode(request: $_model.DescribeEventBaseInfoByEventCodeRequest): Promise<$_model.DescribeEventBaseInfoByEventCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventBaseInfoByEventCodeWithOptions(request, runtime);
  }

  /**
   * Query Total Event Count
   * 
   * @param request - DescribeEventCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventCountResponse
   */
  async describeEventCountWithOptions(request: $_model.DescribeEventCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.createType)) {
      query["createType"] = request.createType;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEventCount",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventCountResponse({}));
  }

  /**
   * Query Total Event Count
   * 
   * @param request - DescribeEventCountRequest
   * @returns DescribeEventCountResponse
   */
  async describeEventCount(request: $_model.DescribeEventCountRequest): Promise<$_model.DescribeEventCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventCountWithOptions(request, runtime);
  }

  /**
   * Query event details based on the request ID
   * 
   * @param request - DescribeEventDetailByRequestIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventDetailByRequestIdResponse
   */
  async describeEventDetailByRequestIdWithOptions(request: $_model.DescribeEventDetailByRequestIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventDetailByRequestIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.eventTime)) {
      query["eventTime"] = request.eventTime;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.sRequestId)) {
      query["sRequestId"] = request.sRequestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEventDetailByRequestId",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventDetailByRequestIdResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventDetailByRequestIdResponse({}));
  }

  /**
   * Query event details based on the request ID
   * 
   * @param request - DescribeEventDetailByRequestIdRequest
   * @returns DescribeEventDetailByRequestIdResponse
   */
  async describeEventDetailByRequestId(request: $_model.DescribeEventDetailByRequestIdRequest): Promise<$_model.DescribeEventDetailByRequestIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventDetailByRequestIdWithOptions(request, runtime);
  }

  /**
   * Query Event History Details
   * 
   * @param request - DescribeEventLogDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventLogDetailResponse
   */
  async describeEventLogDetailWithOptions(request: $_model.DescribeEventLogDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventLogDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.reqIdByLog)) {
      query["reqIdByLog"] = request.reqIdByLog;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEventLogDetail",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventLogDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventLogDetailResponse({}));
  }

  /**
   * Query Event History Details
   * 
   * @param request - DescribeEventLogDetailRequest
   * @returns DescribeEventLogDetailResponse
   */
  async describeEventLogDetail(request: $_model.DescribeEventLogDetailRequest): Promise<$_model.DescribeEventLogDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventLogDetailWithOptions(request, runtime);
  }

  /**
   * Query Event History List
   * 
   * @param request - DescribeEventLogPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventLogPageResponse
   */
  async describeEventLogPageWithOptions(request: $_model.DescribeEventLogPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventLogPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.accountIdPRP)) {
      query["accountIdPRP"] = request.accountIdPRP;
    }

    if (!$dara.isNull(request.beginTime)) {
      query["beginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.condition1AL)) {
      query["condition1AL"] = request.condition1AL;
    }

    if (!$dara.isNull(request.condition2AL)) {
      query["condition2AL"] = request.condition2AL;
    }

    if (!$dara.isNull(request.condition3AL)) {
      query["condition3AL"] = request.condition3AL;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.deviceTypeLRP)) {
      query["deviceTypeLRP"] = request.deviceTypeLRP;
    }

    if (!$dara.isNull(request.emailPRP)) {
      query["emailPRP"] = request.emailPRP;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.failReasonLRP)) {
      query["failReasonLRP"] = request.failReasonLRP;
    }

    if (!$dara.isNull(request.ipPRP)) {
      query["ipPRP"] = request.ipPRP;
    }

    if (!$dara.isNull(request.loginResultARP)) {
      query["loginResultARP"] = request.loginResultARP;
    }

    if (!$dara.isNull(request.loginTypeLRP)) {
      query["loginTypeLRP"] = request.loginTypeLRP;
    }

    if (!$dara.isNull(request.macPRP)) {
      query["macPRP"] = request.macPRP;
    }

    if (!$dara.isNull(request.mobilePRP)) {
      query["mobilePRP"] = request.mobilePRP;
    }

    if (!$dara.isNull(request.nickNamePRP)) {
      query["nickNamePRP"] = request.nickNamePRP;
    }

    if (!$dara.isNull(request.operateSourceLRP)) {
      query["operateSourceLRP"] = request.operateSourceLRP;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.referPRP)) {
      query["referPRP"] = request.referPRP;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.registerIpPRP)) {
      query["registerIpPRP"] = request.registerIpPRP;
    }

    if (!$dara.isNull(request.reqIdPBS)) {
      query["reqIdPBS"] = request.reqIdPBS;
    }

    if (!$dara.isNull(request.scoreEBS)) {
      query["scoreEBS"] = request.scoreEBS;
    }

    if (!$dara.isNull(request.scoreSBS)) {
      query["scoreSBS"] = request.scoreSBS;
    }

    if (!$dara.isNull(request.serviceABS)) {
      query["serviceABS"] = request.serviceABS;
    }

    if (!$dara.isNull(request.tagsLBS)) {
      query["tagsLBS"] = request.tagsLBS;
    }

    if (!$dara.isNull(request.umidPDI)) {
      query["umidPDI"] = request.umidPDI;
    }

    if (!$dara.isNull(request.userAgentPRP)) {
      query["userAgentPRP"] = request.userAgentPRP;
    }

    if (!$dara.isNull(request.userNameTypeLRP)) {
      query["userNameTypeLRP"] = request.userNameTypeLRP;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEventLogPage",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventLogPageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventLogPageResponse({}));
  }

  /**
   * Query Event History List
   * 
   * @param request - DescribeEventLogPageRequest
   * @returns DescribeEventLogPageResponse
   */
  async describeEventLogPage(request: $_model.DescribeEventLogPageRequest): Promise<$_model.DescribeEventLogPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventLogPageWithOptions(request, runtime);
  }

  /**
   * Paged Query for Events
   * 
   * @param request - DescribeEventPageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventPageListResponse
   */
  async describeEventPageListWithOptions(request: $_model.DescribeEventPageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventPageListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.createType)) {
      query["createType"] = request.createType;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.eventName)) {
      query["eventName"] = request.eventName;
    }

    if (!$dara.isNull(request.eventStatus)) {
      query["eventStatus"] = request.eventStatus;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEventPageList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventPageListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventPageListResponse({}));
  }

  /**
   * Paged Query for Events
   * 
   * @param request - DescribeEventPageListRequest
   * @returns DescribeEventPageListResponse
   */
  async describeEventPageList(request: $_model.DescribeEventPageListRequest): Promise<$_model.DescribeEventPageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventPageListWithOptions(request, runtime);
  }

  /**
   * Risk Dashboard
   * 
   * @param request - DescribeEventResultBarChartRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventResultBarChartResponse
   */
  async describeEventResultBarChartWithOptions(request: $_model.DescribeEventResultBarChartRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventResultBarChartResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.beginTime)) {
      query["beginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventCodes)) {
      query["eventCodes"] = request.eventCodes;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEventResultBarChart",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventResultBarChartResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventResultBarChartResponse({}));
  }

  /**
   * Risk Dashboard
   * 
   * @param request - DescribeEventResultBarChartRequest
   * @returns DescribeEventResultBarChartResponse
   */
  async describeEventResultBarChart(request: $_model.DescribeEventResultBarChartRequest): Promise<$_model.DescribeEventResultBarChartResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventResultBarChartWithOptions(request, runtime);
  }

  /**
   * Event Overview List
   * 
   * @param request - DescribeEventResultListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventResultListResponse
   */
  async describeEventResultListWithOptions(request: $_model.DescribeEventResultListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventResultListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.beginTime)) {
      query["beginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEventResultList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventResultListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventResultListResponse({}));
  }

  /**
   * Event Overview List
   * 
   * @param request - DescribeEventResultListRequest
   * @returns DescribeEventResultListResponse
   */
  async describeEventResultList(request: $_model.DescribeEventResultListRequest): Promise<$_model.DescribeEventResultListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventResultListWithOptions(request, runtime);
  }

  /**
   * Query Policy Download List
   * 
   * @param request - DescribeEventTaskHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventTaskHistoryResponse
   */
  async describeEventTaskHistoryWithOptions(request: $_model.DescribeEventTaskHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventTaskHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEventTaskHistory",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventTaskHistoryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventTaskHistoryResponse({}));
  }

  /**
   * Query Policy Download List
   * 
   * @param request - DescribeEventTaskHistoryRequest
   * @returns DescribeEventTaskHistoryResponse
   */
  async describeEventTaskHistory(request: $_model.DescribeEventTaskHistoryRequest): Promise<$_model.DescribeEventTaskHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventTaskHistoryWithOptions(request, runtime);
  }

  /**
   * Event Invocation Count
   * 
   * @param request - DescribeEventTotalCountReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventTotalCountReportResponse
   */
  async describeEventTotalCountReportWithOptions(request: $_model.DescribeEventTotalCountReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventTotalCountReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEventTotalCountReport",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventTotalCountReportResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventTotalCountReportResponse({}));
  }

  /**
   * Event Invocation Count
   * 
   * @param request - DescribeEventTotalCountReportRequest
   * @returns DescribeEventTotalCountReportResponse
   */
  async describeEventTotalCountReport(request: $_model.DescribeEventTotalCountReportRequest): Promise<$_model.DescribeEventTotalCountReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventTotalCountReportWithOptions(request, runtime);
  }

  /**
   * Batch Import Policy
   * 
   * @param request - DescribeEventUploadPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventUploadPolicyResponse
   */
  async describeEventUploadPolicyWithOptions(request: $_model.DescribeEventUploadPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventUploadPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEventUploadPolicy",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventUploadPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventUploadPolicyResponse({}));
  }

  /**
   * Batch Import Policy
   * 
   * @param request - DescribeEventUploadPolicyRequest
   * @returns DescribeEventUploadPolicyResponse
   */
  async describeEventUploadPolicy(request: $_model.DescribeEventUploadPolicyRequest): Promise<$_model.DescribeEventUploadPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventUploadPolicyWithOptions(request, runtime);
  }

  /**
   * Query event variables
   * 
   * @remarks
   * Cumulative Variable List Query
   * 
   * @param request - DescribeEventVariableListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventVariableListResponse
   */
  async describeEventVariableListWithOptions(request: $_model.DescribeEventVariableListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventVariableListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.createType)) {
      query["createType"] = request.createType;
    }

    if (!$dara.isNull(request.filterDTO)) {
      query["filterDTO"] = request.filterDTO;
    }

    if (!$dara.isNull(request.refObjId)) {
      query["refObjId"] = request.refObjId;
    }

    if (!$dara.isNull(request.refObjType)) {
      query["refObjType"] = request.refObjType;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEventVariableList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventVariableListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventVariableListResponse({}));
  }

  /**
   * Query event variables
   * 
   * @remarks
   * Cumulative Variable List Query
   * 
   * @param request - DescribeEventVariableListRequest
   * @returns DescribeEventVariableListResponse
   */
  async describeEventVariableList(request: $_model.DescribeEventVariableListRequest): Promise<$_model.DescribeEventVariableListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventVariableListWithOptions(request, runtime);
  }

  /**
   * Query Event Template
   * 
   * @param request - DescribeEventVariableTemplateBindRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventVariableTemplateBindResponse
   */
  async describeEventVariableTemplateBindWithOptions(request: $_model.DescribeEventVariableTemplateBindRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventVariableTemplateBindResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.inputs)) {
      query["inputs"] = request.inputs;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["templateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEventVariableTemplateBind",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventVariableTemplateBindResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventVariableTemplateBindResponse({}));
  }

  /**
   * Query Event Template
   * 
   * @param request - DescribeEventVariableTemplateBindRequest
   * @returns DescribeEventVariableTemplateBindResponse
   */
  async describeEventVariableTemplateBind(request: $_model.DescribeEventVariableTemplateBindRequest): Promise<$_model.DescribeEventVariableTemplateBindResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventVariableTemplateBindWithOptions(request, runtime);
  }

  /**
   * Query Event Template
   * 
   * @param request - DescribeEventVariableTemplateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventVariableTemplateListResponse
   */
  async describeEventVariableTemplateListWithOptions(request: $_model.DescribeEventVariableTemplateListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventVariableTemplateListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.inputs)) {
      query["inputs"] = request.inputs;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["templateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEventVariableTemplateList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventVariableTemplateListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventVariableTemplateListResponse({}));
  }

  /**
   * Query Event Template
   * 
   * @param request - DescribeEventVariableTemplateListRequest
   * @returns DescribeEventVariableTemplateListResponse
   */
  async describeEventVariableTemplateList(request: $_model.DescribeEventVariableTemplateListRequest): Promise<$_model.DescribeEventVariableTemplateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventVariableTemplateListWithOptions(request, runtime);
  }

  /**
   * Query Event Variables
   * 
   * @param request - DescribeEventsVariableListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventsVariableListResponse
   */
  async describeEventsVariableListWithOptions(request: $_model.DescribeEventsVariableListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventsVariableListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.createType)) {
      query["createType"] = request.createType;
    }

    if (!$dara.isNull(request.eventCodes)) {
      query["eventCodes"] = request.eventCodes;
    }

    if (!$dara.isNull(request.filterDTO)) {
      query["filterDTO"] = request.filterDTO;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.scene)) {
      query["scene"] = request.scene;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEventsVariableList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventsVariableListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventsVariableListResponse({}));
  }

  /**
   * Query Event Variables
   * 
   * @param request - DescribeEventsVariableListRequest
   * @returns DescribeEventsVariableListResponse
   */
  async describeEventsVariableList(request: $_model.DescribeEventsVariableListRequest): Promise<$_model.DescribeEventsVariableListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventsVariableListWithOptions(request, runtime);
  }

  /**
   * Self-service call list.
   * 
   * @param request - DescribeExcuteNumRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExcuteNumResponse
   */
  async describeExcuteNumWithOptions(request: $_model.DescribeExcuteNumRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExcuteNumResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.code)) {
      query["Code"] = request.code;
    }

    if (!$dara.isNull(request.degree)) {
      query["Degree"] = request.degree;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeExcuteNum",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExcuteNumResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExcuteNumResponse({}));
  }

  /**
   * Self-service call list.
   * 
   * @param request - DescribeExcuteNumRequest
   * @returns DescribeExcuteNumResponse
   */
  async describeExcuteNum(request: $_model.DescribeExcuteNumRequest): Promise<$_model.DescribeExcuteNumResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExcuteNumWithOptions(request, runtime);
  }

  /**
   * Validate if the field name is duplicated (based on user\\"s organization)
   * 
   * @param request - DescribeExistNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExistNameResponse
   */
  async describeExistNameWithOptions(request: $_model.DescribeExistNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExistNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeExistName",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExistNameResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExistNameResponse({}));
  }

  /**
   * Validate if the field name is duplicated (based on user\\"s organization)
   * 
   * @param request - DescribeExistNameRequest
   * @returns DescribeExistNameResponse
   */
  async describeExistName(request: $_model.DescribeExistNameRequest): Promise<$_model.DescribeExistNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExistNameWithOptions(request, runtime);
  }

  /**
   * Check if Scene Exists
   * 
   * @param request - DescribeExistSceneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExistSceneResponse
   */
  async describeExistSceneWithOptions(request: $_model.DescribeExistSceneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExistSceneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.sceneName)) {
      query["SceneName"] = request.sceneName;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeExistScene",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExistSceneResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExistSceneResponse({}));
  }

  /**
   * Check if Scene Exists
   * 
   * @param request - DescribeExistSceneRequest
   * @returns DescribeExistSceneResponse
   */
  async describeExistScene(request: $_model.DescribeExistSceneRequest): Promise<$_model.DescribeExistSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExistSceneWithOptions(request, runtime);
  }

  /**
   * Custom Variable Details
   * 
   * @param request - DescribeExpressionVariableDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExpressionVariableDetailResponse
   */
  async describeExpressionVariableDetailWithOptions(request: $_model.DescribeExpressionVariableDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExpressionVariableDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeExpressionVariableDetail",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExpressionVariableDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExpressionVariableDetailResponse({}));
  }

  /**
   * Custom Variable Details
   * 
   * @param request - DescribeExpressionVariableDetailRequest
   * @returns DescribeExpressionVariableDetailResponse
   */
  async describeExpressionVariableDetail(request: $_model.DescribeExpressionVariableDetailRequest): Promise<$_model.DescribeExpressionVariableDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExpressionVariableDetailWithOptions(request, runtime);
  }

  /**
   * Function List
   * 
   * @param request - DescribeExpressionVariableFunctionListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExpressionVariableFunctionListResponse
   */
  async describeExpressionVariableFunctionListWithOptions(request: $_model.DescribeExpressionVariableFunctionListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExpressionVariableFunctionListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeExpressionVariableFunctionList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExpressionVariableFunctionListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExpressionVariableFunctionListResponse({}));
  }

  /**
   * Function List
   * 
   * @param request - DescribeExpressionVariableFunctionListRequest
   * @returns DescribeExpressionVariableFunctionListResponse
   */
  async describeExpressionVariableFunctionList(request: $_model.DescribeExpressionVariableFunctionListRequest): Promise<$_model.DescribeExpressionVariableFunctionListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExpressionVariableFunctionListWithOptions(request, runtime);
  }

  /**
   * Paged Query for Custom Variables.
   * 
   * @param request - DescribeExpressionVariablePageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExpressionVariablePageResponse
   */
  async describeExpressionVariablePageWithOptions(request: $_model.DescribeExpressionVariablePageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExpressionVariablePageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.outputs)) {
      query["outputs"] = request.outputs;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.value)) {
      query["value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeExpressionVariablePage",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExpressionVariablePageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExpressionVariablePageResponse({}));
  }

  /**
   * Paged Query for Custom Variables.
   * 
   * @param request - DescribeExpressionVariablePageRequest
   * @returns DescribeExpressionVariablePageResponse
   */
  async describeExpressionVariablePage(request: $_model.DescribeExpressionVariablePageRequest): Promise<$_model.DescribeExpressionVariablePageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExpressionVariablePageWithOptions(request, runtime);
  }

  /**
   * Custom Variable Version Details.
   * 
   * @param request - DescribeExpressionVariableVersionDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExpressionVariableVersionDetailResponse
   */
  async describeExpressionVariableVersionDetailWithOptions(request: $_model.DescribeExpressionVariableVersionDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExpressionVariableVersionDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.objectCode)) {
      query["objectCode"] = request.objectCode;
    }

    if (!$dara.isNull(request.objectId)) {
      query["objectId"] = request.objectId;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    if (!$dara.isNull(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeExpressionVariableVersionDetail",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExpressionVariableVersionDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExpressionVariableVersionDetailResponse({}));
  }

  /**
   * Custom Variable Version Details.
   * 
   * @param request - DescribeExpressionVariableVersionDetailRequest
   * @returns DescribeExpressionVariableVersionDetailResponse
   */
  async describeExpressionVariableVersionDetail(request: $_model.DescribeExpressionVariableVersionDetailRequest): Promise<$_model.DescribeExpressionVariableVersionDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExpressionVariableVersionDetailWithOptions(request, runtime);
  }

  /**
   * Get Field Details
   * 
   * @param request - DescribeFieldByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFieldByIdResponse
   */
  async describeFieldByIdWithOptions(request: $_model.DescribeFieldByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFieldByIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFieldById",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFieldByIdResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFieldByIdResponse({}));
  }

  /**
   * Get Field Details
   * 
   * @param request - DescribeFieldByIdRequest
   * @returns DescribeFieldByIdResponse
   */
  async describeFieldById(request: $_model.DescribeFieldByIdRequest): Promise<$_model.DescribeFieldByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFieldByIdWithOptions(request, runtime);
  }

  /**
   * Query Field List
   * 
   * @param request - DescribeFieldListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFieldListResponse
   */
  async describeFieldListWithOptions(request: $_model.DescribeFieldListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFieldListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.condition)) {
      query["condition"] = request.condition;
    }

    if (!$dara.isNull(request.inputs)) {
      query["inputs"] = request.inputs;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFieldList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFieldListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFieldListResponse({}));
  }

  /**
   * Query Field List
   * 
   * @param request - DescribeFieldListRequest
   * @returns DescribeFieldListResponse
   */
  async describeFieldList(request: $_model.DescribeFieldListRequest): Promise<$_model.DescribeFieldListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFieldListWithOptions(request, runtime);
  }

  /**
   * Query paged list of fields
   * 
   * @param request - DescribeFieldPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFieldPageResponse
   */
  async describeFieldPageWithOptions(request: $_model.DescribeFieldPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFieldPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.classify)) {
      query["classify"] = request.classify;
    }

    if (!$dara.isNull(request.condition)) {
      query["condition"] = request.condition;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.source)) {
      query["source"] = request.source;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.title)) {
      query["title"] = request.title;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFieldPage",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFieldPageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFieldPageResponse({}));
  }

  /**
   * Query paged list of fields
   * 
   * @param request - DescribeFieldPageRequest
   * @returns DescribeFieldPageResponse
   */
  async describeFieldPage(request: $_model.DescribeFieldPageRequest): Promise<$_model.DescribeFieldPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFieldPageWithOptions(request, runtime);
  }

  /**
   * Community Account List
   * 
   * @param request - DescribeGroupAccountPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGroupAccountPageResponse
   */
  async describeGroupAccountPageWithOptions(request: $_model.DescribeGroupAccountPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGroupAccountPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.communityNo)) {
      query["communityNo"] = request.communityNo;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.direction)) {
      query["direction"] = request.direction;
    }

    if (!$dara.isNull(request.fieldKey)) {
      query["fieldKey"] = request.fieldKey;
    }

    if (!$dara.isNull(request.fieldVal)) {
      query["fieldVal"] = request.fieldVal;
    }

    if (!$dara.isNull(request.isPage)) {
      query["isPage"] = request.isPage;
    }

    if (!$dara.isNull(request.order)) {
      query["order"] = request.order;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGroupAccountPage",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGroupAccountPageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGroupAccountPageResponse({}));
  }

  /**
   * Community Account List
   * 
   * @param request - DescribeGroupAccountPageRequest
   * @returns DescribeGroupAccountPageResponse
   */
  async describeGroupAccountPage(request: $_model.DescribeGroupAccountPageRequest): Promise<$_model.DescribeGroupAccountPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGroupAccountPageWithOptions(request, runtime);
  }

  /**
   * Community List Query Conditions
   * 
   * @param request - DescribeGroupConditionListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGroupConditionListResponse
   */
  async describeGroupConditionListWithOptions(request: $_model.DescribeGroupConditionListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGroupConditionListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGroupConditionList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGroupConditionListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGroupConditionListResponse({}));
  }

  /**
   * Community List Query Conditions
   * 
   * @param request - DescribeGroupConditionListRequest
   * @returns DescribeGroupConditionListResponse
   */
  async describeGroupConditionList(request: $_model.DescribeGroupConditionListRequest): Promise<$_model.DescribeGroupConditionListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGroupConditionListWithOptions(request, runtime);
  }

  /**
   * Community List
   * 
   * @param request - DescribeGroupPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGroupPageResponse
   */
  async describeGroupPageWithOptions(request: $_model.DescribeGroupPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGroupPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.direction)) {
      query["direction"] = request.direction;
    }

    if (!$dara.isNull(request.order)) {
      query["order"] = request.order;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    if (!$dara.isNull(request.timeType)) {
      query["timeType"] = request.timeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGroupPage",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGroupPageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGroupPageResponse({}));
  }

  /**
   * Community List
   * 
   * @param request - DescribeGroupPageRequest
   * @returns DescribeGroupPageResponse
   */
  async describeGroupPage(request: $_model.DescribeGroupPageRequest): Promise<$_model.DescribeGroupPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGroupPageWithOptions(request, runtime);
  }

  /**
   * Risk Communities Discovered Today
   * 
   * @param request - DescribeGroupStatisticsByTodayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGroupStatisticsByTodayResponse
   */
  async describeGroupStatisticsByTodayWithOptions(request: $_model.DescribeGroupStatisticsByTodayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGroupStatisticsByTodayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGroupStatisticsByToday",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGroupStatisticsByTodayResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGroupStatisticsByTodayResponse({}));
  }

  /**
   * Risk Communities Discovered Today
   * 
   * @param request - DescribeGroupStatisticsByTodayRequest
   * @returns DescribeGroupStatisticsByTodayResponse
   */
  async describeGroupStatisticsByToday(request: $_model.DescribeGroupStatisticsByTodayRequest): Promise<$_model.DescribeGroupStatisticsByTodayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGroupStatisticsByTodayWithOptions(request, runtime);
  }

  /**
   * Recent Trends in Risk Communities
   * 
   * @param request - DescribeGroupTrendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGroupTrendResponse
   */
  async describeGroupTrendWithOptions(request: $_model.DescribeGroupTrendRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGroupTrendResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.day)) {
      query["day"] = request.day;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGroupTrend",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGroupTrendResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGroupTrendResponse({}));
  }

  /**
   * Recent Trends in Risk Communities
   * 
   * @param request - DescribeGroupTrendRequest
   * @returns DescribeGroupTrendResponse
   */
  async describeGroupTrend(request: $_model.DescribeGroupTrendRequest): Promise<$_model.DescribeGroupTrendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGroupTrendWithOptions(request, runtime);
  }

  /**
   * Check if the policy name under the event name exists
   * 
   * @param request - DescribeHasRuleNameByEventCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHasRuleNameByEventCodeResponse
   */
  async describeHasRuleNameByEventCodeWithOptions(request: $_model.DescribeHasRuleNameByEventCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHasRuleNameByEventCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.excludeRuleId)) {
      query["excludeRuleId"] = request.excludeRuleId;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["ruleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHasRuleNameByEventCode",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHasRuleNameByEventCodeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHasRuleNameByEventCodeResponse({}));
  }

  /**
   * Check if the policy name under the event name exists
   * 
   * @param request - DescribeHasRuleNameByEventCodeRequest
   * @returns DescribeHasRuleNameByEventCodeResponse
   */
  async describeHasRuleNameByEventCode(request: $_model.DescribeHasRuleNameByEventCodeRequest): Promise<$_model.DescribeHasRuleNameByEventCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHasRuleNameByEventCodeWithOptions(request, runtime);
  }

  /**
   * Risk Map Overview Chart (Pie Chart)
   * 
   * @param request - DescribeHighRiskPieChartRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHighRiskPieChartResponse
   */
  async describeHighRiskPieChartWithOptions(request: $_model.DescribeHighRiskPieChartRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHighRiskPieChartResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.beginTime)) {
      query["beginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventCodes)) {
      query["eventCodes"] = request.eventCodes;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHighRiskPieChart",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHighRiskPieChartResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHighRiskPieChartResponse({}));
  }

  /**
   * Risk Map Overview Chart (Pie Chart)
   * 
   * @param request - DescribeHighRiskPieChartRequest
   * @returns DescribeHighRiskPieChartResponse
   */
  async describeHighRiskPieChart(request: $_model.DescribeHighRiskPieChartRequest): Promise<$_model.DescribeHighRiskPieChartResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHighRiskPieChartWithOptions(request, runtime);
  }

  /**
   * Policy Hit Fluctuation Detection
   * 
   * @param request - DescribeHitRuleFluctuationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHitRuleFluctuationResponse
   */
  async describeHitRuleFluctuationWithOptions(request: $_model.DescribeHitRuleFluctuationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHitRuleFluctuationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.eventCodes)) {
      query["eventCodes"] = request.eventCodes;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.ruleStatus)) {
      query["ruleStatus"] = request.ruleStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHitRuleFluctuation",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHitRuleFluctuationResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHitRuleFluctuationResponse({}));
  }

  /**
   * Policy Hit Fluctuation Detection
   * 
   * @param request - DescribeHitRuleFluctuationRequest
   * @returns DescribeHitRuleFluctuationResponse
   */
  async describeHitRuleFluctuation(request: $_model.DescribeHitRuleFluctuationRequest): Promise<$_model.DescribeHitRuleFluctuationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHitRuleFluctuationWithOptions(request, runtime);
  }

  /**
   * Top 20 Hits for Main Events/Bypass/Diversion Strategies
   * 
   * @param request - DescribeHitRuleListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHitRuleListResponse
   */
  async describeHitRuleListWithOptions(request: $_model.DescribeHitRuleListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHitRuleListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.beginTime)) {
      query["beginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventCodes)) {
      query["eventCodes"] = request.eventCodes;
    }

    if (!$dara.isNull(request.eventType)) {
      query["eventType"] = request.eventType;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHitRuleList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHitRuleListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHitRuleListResponse({}));
  }

  /**
   * Top 20 Hits for Main Events/Bypass/Diversion Strategies
   * 
   * @param request - DescribeHitRuleListRequest
   * @returns DescribeHitRuleListResponse
   */
  async describeHitRuleList(request: $_model.DescribeHitRuleListRequest): Promise<$_model.DescribeHitRuleListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHitRuleListWithOptions(request, runtime);
  }

  /**
   * Hit Rule Trend
   * 
   * @param request - DescribeHitRuleTrendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHitRuleTrendResponse
   */
  async describeHitRuleTrendWithOptions(request: $_model.DescribeHitRuleTrendRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHitRuleTrendResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.beginTime)) {
      query["beginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventCodes)) {
      query["eventCodes"] = request.eventCodes;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.ruleStatus)) {
      query["ruleStatus"] = request.ruleStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHitRuleTrend",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHitRuleTrendResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHitRuleTrendResponse({}));
  }

  /**
   * Hit Rule Trend
   * 
   * @param request - DescribeHitRuleTrendRequest
   * @returns DescribeHitRuleTrendResponse
   */
  async describeHitRuleTrend(request: $_model.DescribeHitRuleTrendRequest): Promise<$_model.DescribeHitRuleTrendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHitRuleTrendWithOptions(request, runtime);
  }

  /**
   * Initialization Popup Information
   * 
   * @remarks
   * Add prompt information in BOPS, POC new page initialization popup prompts this information
   * 
   * @param request - DescribeInitDigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInitDigResponse
   */
  async describeInitDigWithOptions(request: $_model.DescribeInitDigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInitDigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["RegId"] = request.regId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInitDig",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInitDigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInitDigResponse({}));
  }

  /**
   * Initialization Popup Information
   * 
   * @remarks
   * Add prompt information in BOPS, POC new page initialization popup prompts this information
   * 
   * @param request - DescribeInitDigRequest
   * @returns DescribeInitDigResponse
   */
  async describeInitDig(request: $_model.DescribeInitDigRequest): Promise<$_model.DescribeInitDigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInitDigWithOptions(request, runtime);
  }

  /**
   * Query Total Number of Events
   * 
   * @param request - DescribeInputFeildCountByEventCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInputFeildCountByEventCodeResponse
   */
  async describeInputFeildCountByEventCodeWithOptions(request: $_model.DescribeInputFeildCountByEventCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInputFeildCountByEventCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.createType)) {
      query["createType"] = request.createType;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInputFeildCountByEventCode",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInputFeildCountByEventCodeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInputFeildCountByEventCodeResponse({}));
  }

  /**
   * Query Total Number of Events
   * 
   * @param request - DescribeInputFeildCountByEventCodeRequest
   * @returns DescribeInputFeildCountByEventCodeResponse
   */
  async describeInputFeildCountByEventCode(request: $_model.DescribeInputFeildCountByEventCodeRequest): Promise<$_model.DescribeInputFeildCountByEventCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInputFeildCountByEventCodeWithOptions(request, runtime);
  }

  /**
   * Display of Model List
   * 
   * @param request - DescribeListModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeListModelResponse
   */
  async describeListModelWithOptions(request: $_model.DescribeListModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeListModelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["RegId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeListModel",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeListModelResponse>(await this.callApi(params, req, runtime), new $_model.DescribeListModelResponse({}));
  }

  /**
   * Display of Model List
   * 
   * @param request - DescribeListModelRequest
   * @returns DescribeListModelResponse
   */
  async describeListModel(request: $_model.DescribeListModelRequest): Promise<$_model.DescribeListModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeListModelWithOptions(request, runtime);
  }

  /**
   * Task List
   * 
   * @param request - DescribeListPocRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeListPocResponse
   */
  async describeListPocWithOptions(request: $_model.DescribeListPocRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeListPocResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["RegId"] = request.regId;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.taskStatus)) {
      query["TaskStatus"] = request.taskStatus;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeListPoc",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeListPocResponse>(await this.callApi(params, req, runtime), new $_model.DescribeListPocResponse({}));
  }

  /**
   * Task List
   * 
   * @param request - DescribeListPocRequest
   * @returns DescribeListPocResponse
   */
  async describeListPoc(request: $_model.DescribeListPocRequest): Promise<$_model.DescribeListPocResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeListPocWithOptions(request, runtime);
  }

  /**
   * Get Monitoring Object List
   * 
   * @param request - DescribeLoanExecListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLoanExecListResponse
   */
  async describeLoanExecListWithOptions(request: $_model.DescribeLoanExecListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLoanExecListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.batchNo)) {
      query["batchNo"] = request.batchNo;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.monitorObj)) {
      query["monitorObj"] = request.monitorObj;
    }

    if (!$dara.isNull(request.monitorStatus)) {
      query["monitorStatus"] = request.monitorStatus;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLoanExecList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLoanExecListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLoanExecListResponse({}));
  }

  /**
   * Get Monitoring Object List
   * 
   * @param request - DescribeLoanExecListRequest
   * @returns DescribeLoanExecListResponse
   */
  async describeLoanExecList(request: $_model.DescribeLoanExecListRequest): Promise<$_model.DescribeLoanExecListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLoanExecListWithOptions(request, runtime);
  }

  /**
   * Get Loan Monitoring Task List
   * 
   * @param request - DescribeLoanTaskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLoanTaskListResponse
   */
  async describeLoanTaskListWithOptions(request: $_model.DescribeLoanTaskListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLoanTaskListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.batchNo)) {
      query["batchNo"] = request.batchNo;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.monitorStatus)) {
      query["monitorStatus"] = request.monitorStatus;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLoanTaskList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLoanTaskListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLoanTaskListResponse({}));
  }

  /**
   * Get Loan Monitoring Task List
   * 
   * @param request - DescribeLoanTaskListRequest
   * @returns DescribeLoanTaskListResponse
   */
  async describeLoanTaskList(request: $_model.DescribeLoanTaskListRequest): Promise<$_model.DescribeLoanTaskListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLoanTaskListWithOptions(request, runtime);
  }

  /**
   * Mark List
   * 
   * @param request - DescribeMarkPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMarkPageResponse
   */
  async describeMarkPageWithOptions(request: $_model.DescribeMarkPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMarkPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.direction)) {
      query["direction"] = request.direction;
    }

    if (!$dara.isNull(request.isPage)) {
      query["isPage"] = request.isPage;
    }

    if (!$dara.isNull(request.order)) {
      query["order"] = request.order;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.taskLogId)) {
      query["taskLogId"] = request.taskLogId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMarkPage",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMarkPageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMarkPageResponse({}));
  }

  /**
   * Mark List
   * 
   * @param request - DescribeMarkPageRequest
   * @returns DescribeMarkPageResponse
   */
  async describeMarkPage(request: $_model.DescribeMarkPageRequest): Promise<$_model.DescribeMarkPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMarkPageWithOptions(request, runtime);
  }

  /**
   * Check Permission
   * 
   * @param request - DescribeMenuPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMenuPermissionResponse
   */
  async describeMenuPermissionWithOptions(request: $_model.DescribeMenuPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMenuPermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.permissionType)) {
      query["permissionType"] = request.permissionType;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMenuPermission",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMenuPermissionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMenuPermissionResponse({}));
  }

  /**
   * Check Permission
   * 
   * @param request - DescribeMenuPermissionRequest
   * @returns DescribeMenuPermissionResponse
   */
  async describeMenuPermission(request: $_model.DescribeMenuPermissionRequest): Promise<$_model.DescribeMenuPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMenuPermissionWithOptions(request, runtime);
  }

  /**
   * View Result
   * 
   * @param request - DescribeModelDetailsByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeModelDetailsByIdResponse
   */
  async describeModelDetailsByIdWithOptions(request: $_model.DescribeModelDetailsByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeModelDetailsByIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.modelId)) {
      query["ModelId"] = request.modelId;
    }

    if (!$dara.isNull(request.regId)) {
      query["RegId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeModelDetailsById",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeModelDetailsByIdResponse>(await this.callApi(params, req, runtime), new $_model.DescribeModelDetailsByIdResponse({}));
  }

  /**
   * View Result
   * 
   * @param request - DescribeModelDetailsByIdRequest
   * @returns DescribeModelDetailsByIdResponse
   */
  async describeModelDetailsById(request: $_model.DescribeModelDetailsByIdRequest): Promise<$_model.DescribeModelDetailsByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeModelDetailsByIdWithOptions(request, runtime);
  }

  /**
   * Get File Upload Credentials
   * 
   * @param request - DescribeModelOssPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeModelOssPolicyResponse
   */
  async describeModelOssPolicyWithOptions(request: $_model.DescribeModelOssPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeModelOssPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeModelOssPolicy",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeModelOssPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeModelOssPolicyResponse({}));
  }

  /**
   * Get File Upload Credentials
   * 
   * @param request - DescribeModelOssPolicyRequest
   * @returns DescribeModelOssPolicyResponse
   */
  async describeModelOssPolicy(request: $_model.DescribeModelOssPolicyRequest): Promise<$_model.DescribeModelOssPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeModelOssPolicyWithOptions(request, runtime);
  }

  /**
   * Query Task Limit
   * 
   * @param request - DescribeMonitorTaskLimitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMonitorTaskLimitResponse
   */
  async describeMonitorTaskLimitWithOptions(request: $_model.DescribeMonitorTaskLimitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMonitorTaskLimitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMonitorTaskLimit",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMonitorTaskLimitResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMonitorTaskLimitResponse({}));
  }

  /**
   * Query Task Limit
   * 
   * @param request - DescribeMonitorTaskLimitRequest
   * @returns DescribeMonitorTaskLimitResponse
   */
  async describeMonitorTaskLimit(request: $_model.DescribeMonitorTaskLimitRequest): Promise<$_model.DescribeMonitorTaskLimitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMonitorTaskLimitWithOptions(request, runtime);
  }

  /**
   * Query Name List Pagination
   * 
   * @param request - DescribeNameListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNameListResponse
   */
  async describeNameListWithOptions(request: $_model.DescribeNameListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNameListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.createType)) {
      query["createType"] = request.createType;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.value)) {
      query["value"] = request.value;
    }

    if (!$dara.isNull(request.variableId)) {
      query["variableId"] = request.variableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNameList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNameListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNameListResponse({}));
  }

  /**
   * Query Name List Pagination
   * 
   * @param request - DescribeNameListRequest
   * @returns DescribeNameListResponse
   */
  async describeNameList(request: $_model.DescribeNameListRequest): Promise<$_model.DescribeNameListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNameListWithOptions(request, runtime);
  }

  /**
   * Download Name List
   * 
   * @param request - DescribeNameListDownloadUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNameListDownloadUrlResponse
   */
  async describeNameListDownloadUrlWithOptions(request: $_model.DescribeNameListDownloadUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNameListDownloadUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.variableId)) {
      query["variableId"] = request.variableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNameListDownloadUrl",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNameListDownloadUrlResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNameListDownloadUrlResponse({}));
  }

  /**
   * Download Name List
   * 
   * @param request - DescribeNameListDownloadUrlRequest
   * @returns DescribeNameListDownloadUrlResponse
   */
  async describeNameListDownloadUrl(request: $_model.DescribeNameListDownloadUrlRequest): Promise<$_model.DescribeNameListDownloadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNameListDownloadUrlWithOptions(request, runtime);
  }

  /**
   * Query Name List Limit
   * 
   * @param request - DescribeNameListLimitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNameListLimitResponse
   */
  async describeNameListLimitWithOptions(request: $_model.DescribeNameListLimitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNameListLimitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.createType)) {
      query["createType"] = request.createType;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNameListLimit",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNameListLimitResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNameListLimitResponse({}));
  }

  /**
   * Query Name List Limit
   * 
   * @param request - DescribeNameListLimitRequest
   * @returns DescribeNameListLimitResponse
   */
  async describeNameListLimit(request: $_model.DescribeNameListLimitRequest): Promise<$_model.DescribeNameListLimitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNameListLimitWithOptions(request, runtime);
  }

  /**
   * Query the content of the list
   * 
   * @param request - DescribeNameListPageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNameListPageListResponse
   */
  async describeNameListPageListWithOptions(request: $_model.DescribeNameListPageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNameListPageListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.updateBeginTime)) {
      query["updateBeginTime"] = request.updateBeginTime;
    }

    if (!$dara.isNull(request.updateEndTime)) {
      query["updateEndTime"] = request.updateEndTime;
    }

    if (!$dara.isNull(request.value)) {
      query["value"] = request.value;
    }

    if (!$dara.isNull(request.variableId)) {
      query["variableId"] = request.variableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNameListPageList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNameListPageListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNameListPageListResponse({}));
  }

  /**
   * Query the content of the list
   * 
   * @param request - DescribeNameListPageListRequest
   * @returns DescribeNameListPageListResponse
   */
  async describeNameListPageList(request: $_model.DescribeNameListPageListRequest): Promise<$_model.DescribeNameListPageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNameListPageListWithOptions(request, runtime);
  }

  /**
   * List of Name Types
   * 
   * @param request - DescribeNameListTypeListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNameListTypeListResponse
   */
  async describeNameListTypeListWithOptions(request: $_model.DescribeNameListTypeListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNameListTypeListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNameListTypeList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNameListTypeListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNameListTypeListResponse({}));
  }

  /**
   * List of Name Types
   * 
   * @param request - DescribeNameListTypeListRequest
   * @returns DescribeNameListTypeListResponse
   */
  async describeNameListTypeList(request: $_model.DescribeNameListTypeListRequest): Promise<$_model.DescribeNameListTypeListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNameListTypeListWithOptions(request, runtime);
  }

  /**
   * Name List
   * 
   * @param request - DescribeNameListVariablePageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNameListVariablePageListResponse
   */
  async describeNameListVariablePageListWithOptions(request: $_model.DescribeNameListVariablePageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNameListVariablePageListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.nameListType)) {
      query["nameListType"] = request.nameListType;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.value)) {
      query["value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNameListVariablePageList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNameListVariablePageListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNameListVariablePageListResponse({}));
  }

  /**
   * Name List
   * 
   * @param request - DescribeNameListVariablePageListRequest
   * @returns DescribeNameListVariablePageListResponse
   */
  async describeNameListVariablePageList(request: $_model.DescribeNameListVariablePageListRequest): Promise<$_model.DescribeNameListVariablePageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNameListVariablePageListWithOptions(request, runtime);
  }

  /**
   * Query Operation Log Monitoring Statistics
   * 
   * @param request - DescribeOperationLogMonitoringRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOperationLogMonitoringResponse
   */
  async describeOperationLogMonitoringWithOptions(request: $_model.DescribeOperationLogMonitoringRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOperationLogMonitoringResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.endDate)) {
      query["endDate"] = request.endDate;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.startDate)) {
      query["startDate"] = request.startDate;
    }

    if (!$dara.isNull(request.userNameSearch)) {
      query["userNameSearch"] = request.userNameSearch;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOperationLogMonitoring",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOperationLogMonitoringResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOperationLogMonitoringResponse({}));
  }

  /**
   * Query Operation Log Monitoring Statistics
   * 
   * @param request - DescribeOperationLogMonitoringRequest
   * @returns DescribeOperationLogMonitoringResponse
   */
  async describeOperationLogMonitoring(request: $_model.DescribeOperationLogMonitoringRequest): Promise<$_model.DescribeOperationLogMonitoringResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOperationLogMonitoringWithOptions(request, runtime);
  }

  /**
   * Query event list by event name
   * 
   * @param request - DescribeOperationLogPageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOperationLogPageListResponse
   */
  async describeOperationLogPageListWithOptions(request: $_model.DescribeOperationLogPageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOperationLogPageListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endDate)) {
      query["endDate"] = request.endDate;
    }

    if (!$dara.isNull(request.operationSummary)) {
      query["operationSummary"] = request.operationSummary;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.startDate)) {
      query["startDate"] = request.startDate;
    }

    if (!$dara.isNull(request.userNameSearch)) {
      query["userNameSearch"] = request.userNameSearch;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOperationLogPageList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOperationLogPageListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOperationLogPageListResponse({}));
  }

  /**
   * Query event list by event name
   * 
   * @param request - DescribeOperationLogPageListRequest
   * @returns DescribeOperationLogPageListResponse
   */
  async describeOperationLogPageList(request: $_model.DescribeOperationLogPageListRequest): Promise<$_model.DescribeOperationLogPageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOperationLogPageListWithOptions(request, runtime);
  }

  /**
   * Query the operator mapping list based on customer ID
   * 
   * @param request - DescribeOperatorListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOperatorListResponse
   */
  async describeOperatorListWithOptions(request: $_model.DescribeOperatorListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOperatorListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOperatorList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOperatorListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOperatorListResponse({}));
  }

  /**
   * Query the operator mapping list based on customer ID
   * 
   * @param request - DescribeOperatorListRequest
   * @returns DescribeOperatorListResponse
   */
  async describeOperatorList(request: $_model.DescribeOperatorListRequest): Promise<$_model.DescribeOperatorListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOperatorListWithOptions(request, runtime);
  }

  /**
   * Query Operator Mapping List
   * 
   * @param request - DescribeOperatorListBySceneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOperatorListBySceneResponse
   */
  async describeOperatorListBySceneWithOptions(request: $_model.DescribeOperatorListBySceneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOperatorListBySceneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.scene)) {
      query["scene"] = request.scene;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOperatorListByScene",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOperatorListBySceneResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOperatorListBySceneResponse({}));
  }

  /**
   * Query Operator Mapping List
   * 
   * @param request - DescribeOperatorListBySceneRequest
   * @returns DescribeOperatorListBySceneResponse
   */
  async describeOperatorListByScene(request: $_model.DescribeOperatorListBySceneRequest): Promise<$_model.DescribeOperatorListBySceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOperatorListBySceneWithOptions(request, runtime);
  }

  /**
   * Query Operator Mapping List
   * 
   * @param request - DescribeOperatorListByTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOperatorListByTypeResponse
   */
  async describeOperatorListByTypeWithOptions(request: $_model.DescribeOperatorListByTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOperatorListByTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOperatorListByType",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOperatorListByTypeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOperatorListByTypeResponse({}));
  }

  /**
   * Query Operator Mapping List
   * 
   * @param request - DescribeOperatorListByTypeRequest
   * @returns DescribeOperatorListByTypeResponse
   */
  async describeOperatorListByType(request: $_model.DescribeOperatorListByTypeRequest): Promise<$_model.DescribeOperatorListByTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOperatorListByTypeWithOptions(request, runtime);
  }

  /**
   * Check Oss Authorization
   * 
   * @param request - DescribeOssAuthStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOssAuthStatusResponse
   */
  async describeOssAuthStatusWithOptions(request: $_model.DescribeOssAuthStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOssAuthStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOssAuthStatus",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOssAuthStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOssAuthStatusResponse({}));
  }

  /**
   * Check Oss Authorization
   * 
   * @param request - DescribeOssAuthStatusRequest
   * @returns DescribeOssAuthStatusResponse
   */
  async describeOssAuthStatus(request: $_model.DescribeOssAuthStatusRequest): Promise<$_model.DescribeOssAuthStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOssAuthStatusWithOptions(request, runtime);
  }

  /**
   * Get OSS Policy
   * 
   * @param request - DescribeOssPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOssPolicyResponse
   */
  async describeOssPolicyWithOptions(request: $_model.DescribeOssPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOssPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.scene)) {
      query["scene"] = request.scene;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOssPolicy",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOssPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOssPolicyResponse({}));
  }

  /**
   * Get OSS Policy
   * 
   * @param request - DescribeOssPolicyRequest
   * @returns DescribeOssPolicyResponse
   */
  async describeOssPolicy(request: $_model.DescribeOssPolicyRequest): Promise<$_model.DescribeOssPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOssPolicyWithOptions(request, runtime);
  }

  /**
   * Get File Upload Credentials
   * 
   * @param request - DescribeOssTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOssTokenResponse
   */
  async describeOssTokenWithOptions(request: $_model.DescribeOssTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOssTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.uploadType)) {
      query["uploadType"] = request.uploadType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOssToken",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOssTokenResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOssTokenResponse({}));
  }

  /**
   * Get File Upload Credentials
   * 
   * @param request - DescribeOssTokenRequest
   * @returns DescribeOssTokenResponse
   */
  async describeOssToken(request: $_model.DescribeOssTokenRequest): Promise<$_model.DescribeOssTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOssTokenWithOptions(request, runtime);
  }

  /**
   * Query Event Property List
   * 
   * @param request - DescribeParamByEventCodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParamByEventCodesResponse
   */
  async describeParamByEventCodesWithOptions(request: $_model.DescribeParamByEventCodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParamByEventCodesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.eventCodes)) {
      query["eventCodes"] = request.eventCodes;
    }

    if (!$dara.isNull(request.parma)) {
      query["parma"] = request.parma;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeParamByEventCodes",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeParamByEventCodesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeParamByEventCodesResponse({}));
  }

  /**
   * Query Event Property List
   * 
   * @param request - DescribeParamByEventCodesRequest
   * @returns DescribeParamByEventCodesResponse
   */
  async describeParamByEventCodes(request: $_model.DescribeParamByEventCodesRequest): Promise<$_model.DescribeParamByEventCodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParamByEventCodesWithOptions(request, runtime);
  }

  /**
   * Get File Upload Credentials
   * 
   * @param request - DescribePocOssTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePocOssTokenResponse
   */
  async describePocOssTokenWithOptions(request: $_model.DescribePocOssTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePocOssTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePocOssToken",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePocOssTokenResponse>(await this.callApi(params, req, runtime), new $_model.DescribePocOssTokenResponse({}));
  }

  /**
   * Get File Upload Credentials
   * 
   * @param request - DescribePocOssTokenRequest
   * @returns DescribePocOssTokenResponse
   */
  async describePocOssToken(request: $_model.DescribePocOssTokenRequest): Promise<$_model.DescribePocOssTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePocOssTokenWithOptions(request, runtime);
  }

  /**
   * Get POC Task List
   * 
   * @param request - DescribePocTaskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePocTaskListResponse
   */
  async describePocTaskListWithOptions(request: $_model.DescribePocTaskListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePocTaskListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePocTaskList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePocTaskListResponse>(await this.callApi(params, req, runtime), new $_model.DescribePocTaskListResponse({}));
  }

  /**
   * Get POC Task List
   * 
   * @param request - DescribePocTaskListRequest
   * @returns DescribePocTaskListResponse
   */
  async describePocTaskList(request: $_model.DescribePocTaskListRequest): Promise<$_model.DescribePocTaskListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePocTaskListWithOptions(request, runtime);
  }

  /**
   * Determine if Stack Private Domain Mode is Enabled
   * 
   * @param request - DescribePrivateStackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePrivateStackResponse
   */
  async describePrivateStackWithOptions(request: $_model.DescribePrivateStackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePrivateStackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePrivateStack",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePrivateStackResponse>(await this.callApi(params, req, runtime), new $_model.DescribePrivateStackResponse({}));
  }

  /**
   * Determine if Stack Private Domain Mode is Enabled
   * 
   * @param request - DescribePrivateStackRequest
   * @returns DescribePrivateStackResponse
   */
  async describePrivateStack(request: $_model.DescribePrivateStackRequest): Promise<$_model.DescribePrivateStackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePrivateStackWithOptions(request, runtime);
  }

  /**
   * Query Variable Detail Query
   * 
   * @param request - DescribeQueryVariableDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeQueryVariableDetailResponse
   */
  async describeQueryVariableDetailWithOptions(request: $_model.DescribeQueryVariableDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeQueryVariableDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeQueryVariableDetail",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeQueryVariableDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeQueryVariableDetailResponse({}));
  }

  /**
   * Query Variable Detail Query
   * 
   * @param request - DescribeQueryVariableDetailRequest
   * @returns DescribeQueryVariableDetailResponse
   */
  async describeQueryVariableDetail(request: $_model.DescribeQueryVariableDetailRequest): Promise<$_model.DescribeQueryVariableDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeQueryVariableDetailWithOptions(request, runtime);
  }

  /**
   * 查询变量列表查询
   * 
   * @param request - DescribeQueryVariablePageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeQueryVariablePageListResponse
   */
  async describeQueryVariablePageListWithOptions(request: $_model.DescribeQueryVariablePageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeQueryVariablePageListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dataSourceCode)) {
      query["dataSourceCode"] = request.dataSourceCode;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeQueryVariablePageList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeQueryVariablePageListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeQueryVariablePageListResponse({}));
  }

  /**
   * 查询变量列表查询
   * 
   * @param request - DescribeQueryVariablePageListRequest
   * @returns DescribeQueryVariablePageListResponse
   */
  async describeQueryVariablePageList(request: $_model.DescribeQueryVariablePageListRequest): Promise<$_model.DescribeQueryVariablePageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeQueryVariablePageListWithOptions(request, runtime);
  }

  /**
   * Query Variable List under Sample & Scenario
   * 
   * @param request - DescribeRecommendSceneVariablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecommendSceneVariablesResponse
   */
  async describeRecommendSceneVariablesWithOptions(request: $_model.DescribeRecommendSceneVariablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRecommendSceneVariablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.sampleId)) {
      query["sampleId"] = request.sampleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRecommendSceneVariables",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRecommendSceneVariablesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRecommendSceneVariablesResponse({}));
  }

  /**
   * Query Variable List under Sample & Scenario
   * 
   * @param request - DescribeRecommendSceneVariablesRequest
   * @returns DescribeRecommendSceneVariablesResponse
   */
  async describeRecommendSceneVariables(request: $_model.DescribeRecommendSceneVariablesRequest): Promise<$_model.DescribeRecommendSceneVariablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRecommendSceneVariablesWithOptions(request, runtime);
  }

  /**
   * Variable Recommendation Details Query Interface
   * 
   * @param request - DescribeRecommendTaskDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecommendTaskDetailResponse
   */
  async describeRecommendTaskDetailWithOptions(request: $_model.DescribeRecommendTaskDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRecommendTaskDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRecommendTaskDetail",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRecommendTaskDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRecommendTaskDetailResponse({}));
  }

  /**
   * Variable Recommendation Details Query Interface
   * 
   * @param request - DescribeRecommendTaskDetailRequest
   * @returns DescribeRecommendTaskDetailResponse
   */
  async describeRecommendTaskDetail(request: $_model.DescribeRecommendTaskDetailRequest): Promise<$_model.DescribeRecommendTaskDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRecommendTaskDetailWithOptions(request, runtime);
  }

  /**
   * Variable Recommendation List Query Interface
   * 
   * @param request - DescribeRecommendTaskPageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecommendTaskPageListResponse
   */
  async describeRecommendTaskPageListWithOptions(request: $_model.DescribeRecommendTaskPageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRecommendTaskPageListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.taskName)) {
      query["taskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRecommendTaskPageList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRecommendTaskPageListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRecommendTaskPageListResponse({}));
  }

  /**
   * Variable Recommendation List Query Interface
   * 
   * @param request - DescribeRecommendTaskPageListRequest
   * @returns DescribeRecommendTaskPageListResponse
   */
  async describeRecommendTaskPageList(request: $_model.DescribeRecommendTaskPageListRequest): Promise<$_model.DescribeRecommendTaskPageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRecommendTaskPageListWithOptions(request, runtime);
  }

  /**
   * Query Indicators Information under Variables
   * 
   * @param request - DescribeRecommendVariablesVelocityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecommendVariablesVelocityResponse
   */
  async describeRecommendVariablesVelocityWithOptions(request: $_model.DescribeRecommendVariablesVelocityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRecommendVariablesVelocityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    if (!$dara.isNull(request.variableIdsStr)) {
      query["variableIdsStr"] = request.variableIdsStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRecommendVariablesVelocity",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRecommendVariablesVelocityResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRecommendVariablesVelocityResponse({}));
  }

  /**
   * Query Indicators Information under Variables
   * 
   * @param request - DescribeRecommendVariablesVelocityRequest
   * @returns DescribeRecommendVariablesVelocityResponse
   */
  async describeRecommendVariablesVelocity(request: $_model.DescribeRecommendVariablesVelocityRequest): Promise<$_model.DescribeRecommendVariablesVelocityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRecommendVariablesVelocityWithOptions(request, runtime);
  }

  /**
   * Query Supported Metrics List
   * 
   * @param request - DescribeRecommendVelocitiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecommendVelocitiesResponse
   */
  async describeRecommendVelocitiesWithOptions(request: $_model.DescribeRecommendVelocitiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRecommendVelocitiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.code)) {
      query["code"] = request.code;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRecommendVelocities",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRecommendVelocitiesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRecommendVelocitiesResponse({}));
  }

  /**
   * Query Supported Metrics List
   * 
   * @param request - DescribeRecommendVelocitiesRequest
   * @returns DescribeRecommendVelocitiesResponse
   */
  async describeRecommendVelocities(request: $_model.DescribeRecommendVelocitiesRequest): Promise<$_model.DescribeRecommendVelocitiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRecommendVelocitiesWithOptions(request, runtime);
  }

  /**
   * Query the list of regions supported by ApiGateway
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionsResponse({}));
  }

  /**
   * Query the list of regions supported by ApiGateway
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Query Request Hit Details
   * 
   * @param request - DescribeRequestHitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRequestHitResponse
   */
  async describeRequestHitWithOptions(request: $_model.DescribeRequestHitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRequestHitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.sRequestId)) {
      query["sRequestId"] = request.sRequestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRequestHit",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRequestHitResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRequestHitResponse({}));
  }

  /**
   * Query Request Hit Details
   * 
   * @param request - DescribeRequestHitRequest
   * @returns DescribeRequestHitResponse
   */
  async describeRequestHit(request: $_model.DescribeRequestHitRequest): Promise<$_model.DescribeRequestHitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRequestHitWithOptions(request, runtime);
  }

  /**
   * Request Peak
   * 
   * @param request - DescribeRequestPeakReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRequestPeakReportResponse
   */
  async describeRequestPeakReportWithOptions(request: $_model.DescribeRequestPeakReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRequestPeakReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRequestPeakReport",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRequestPeakReportResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRequestPeakReportResponse({}));
  }

  /**
   * Request Peak
   * 
   * @param request - DescribeRequestPeakReportRequest
   * @returns DescribeRequestPeakReportResponse
   */
  async describeRequestPeakReport(request: $_model.DescribeRequestPeakReportRequest): Promise<$_model.DescribeRequestPeakReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRequestPeakReportWithOptions(request, runtime);
  }

  /**
   * Drill-down Analysis
   * 
   * @param request - DescribeResultCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResultCountResponse
   */
  async describeResultCountWithOptions(request: $_model.DescribeResultCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResultCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.beginTime)) {
      query["beginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResultCount",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResultCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResultCountResponse({}));
  }

  /**
   * Drill-down Analysis
   * 
   * @param request - DescribeResultCountRequest
   * @returns DescribeResultCountResponse
   */
  async describeResultCount(request: $_model.DescribeResultCountRequest): Promise<$_model.DescribeResultCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResultCountWithOptions(request, runtime);
  }

  /**
   * Risk map overview chart (line chart)
   * 
   * @param request - DescribeRiskLineChartRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRiskLineChartResponse
   */
  async describeRiskLineChartWithOptions(request: $_model.DescribeRiskLineChartRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRiskLineChartResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.beginTime)) {
      query["beginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventCodes)) {
      query["eventCodes"] = request.eventCodes;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRiskLineChart",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRiskLineChartResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRiskLineChartResponse({}));
  }

  /**
   * Risk map overview chart (line chart)
   * 
   * @param request - DescribeRiskLineChartRequest
   * @returns DescribeRiskLineChartResponse
   */
  async describeRiskLineChart(request: $_model.DescribeRiskLineChartRequest): Promise<$_model.DescribeRiskLineChartResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRiskLineChartWithOptions(request, runtime);
  }

  /**
   * Tag Hit Rate Tag Hit Dimension
   * 
   * @param request - DescribeRiskTagsLineChartRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRiskTagsLineChartResponse
   */
  async describeRiskTagsLineChartWithOptions(request: $_model.DescribeRiskTagsLineChartRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRiskTagsLineChartResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventCodes)) {
      query["EventCodes"] = request.eventCodes;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["RegId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRiskTagsLineChart",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRiskTagsLineChartResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRiskTagsLineChartResponse({}));
  }

  /**
   * Tag Hit Rate Tag Hit Dimension
   * 
   * @param request - DescribeRiskTagsLineChartRequest
   * @returns DescribeRiskTagsLineChartResponse
   */
  async describeRiskTagsLineChart(request: $_model.DescribeRiskTagsLineChartRequest): Promise<$_model.DescribeRiskTagsLineChartResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRiskTagsLineChartWithOptions(request, runtime);
  }

  /**
   * Policy Overview List
   * 
   * @param request - DescribeRuleBarChartRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRuleBarChartResponse
   */
  async describeRuleBarChartWithOptions(request: $_model.DescribeRuleBarChartRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRuleBarChartResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.beginTime)) {
      query["beginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventCodes)) {
      query["eventCodes"] = request.eventCodes;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRuleBarChart",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRuleBarChartResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRuleBarChartResponse({}));
  }

  /**
   * Policy Overview List
   * 
   * @param request - DescribeRuleBarChartRequest
   * @returns DescribeRuleBarChartResponse
   */
  async describeRuleBarChart(request: $_model.DescribeRuleBarChartRequest): Promise<$_model.DescribeRuleBarChartResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRuleBarChartWithOptions(request, runtime);
  }

  /**
   * Query Policy Count by User ID
   * 
   * @param request - DescribeRuleCountByUserIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRuleCountByUserIdResponse
   */
  async describeRuleCountByUserIdWithOptions(request: $_model.DescribeRuleCountByUserIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRuleCountByUserIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.createType)) {
      query["createType"] = request.createType;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRuleCountByUserId",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRuleCountByUserIdResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRuleCountByUserIdResponse({}));
  }

  /**
   * Query Policy Count by User ID
   * 
   * @param request - DescribeRuleCountByUserIdRequest
   * @returns DescribeRuleCountByUserIdResponse
   */
  async describeRuleCountByUserId(request: $_model.DescribeRuleCountByUserIdRequest): Promise<$_model.DescribeRuleCountByUserIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRuleCountByUserIdWithOptions(request, runtime);
  }

  /**
   * Query policy/version details
   * 
   * @param request - DescribeRuleDetailByRuleIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRuleDetailByRuleIdResponse
   */
  async describeRuleDetailByRuleIdWithOptions(request: $_model.DescribeRuleDetailByRuleIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRuleDetailByRuleIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.consoleRuleId)) {
      query["consoleRuleId"] = request.consoleRuleId;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["ruleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleVersionId)) {
      query["ruleVersionId"] = request.ruleVersionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRuleDetailByRuleId",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRuleDetailByRuleIdResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRuleDetailByRuleIdResponse({}));
  }

  /**
   * Query policy/version details
   * 
   * @param request - DescribeRuleDetailByRuleIdRequest
   * @returns DescribeRuleDetailByRuleIdResponse
   */
  async describeRuleDetailByRuleId(request: $_model.DescribeRuleDetailByRuleIdRequest): Promise<$_model.DescribeRuleDetailByRuleIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRuleDetailByRuleIdWithOptions(request, runtime);
  }

  /**
   * Query rule hit details
   * 
   * @param request - DescribeRuleHitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRuleHitResponse
   */
  async describeRuleHitWithOptions(request: $_model.DescribeRuleHitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRuleHitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.requestTime)) {
      query["requestTime"] = request.requestTime;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["ruleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleSnapshotId)) {
      query["ruleSnapshotId"] = request.ruleSnapshotId;
    }

    if (!$dara.isNull(request.sRequestId)) {
      query["sRequestId"] = request.sRequestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRuleHit",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRuleHitResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRuleHitResponse({}));
  }

  /**
   * Query rule hit details
   * 
   * @param request - DescribeRuleHitRequest
   * @returns DescribeRuleHitResponse
   */
  async describeRuleHit(request: $_model.DescribeRuleHitRequest): Promise<$_model.DescribeRuleHitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRuleHitWithOptions(request, runtime);
  }

  /**
   * Query policy list
   * 
   * @param request - DescribeRuleListByEventCodesListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRuleListByEventCodesListResponse
   */
  async describeRuleListByEventCodesListWithOptions(request: $_model.DescribeRuleListByEventCodesListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRuleListByEventCodesListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.eventCodes)) {
      query["eventCodes"] = request.eventCodes;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRuleListByEventCodesList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRuleListByEventCodesListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRuleListByEventCodesListResponse({}));
  }

  /**
   * Query policy list
   * 
   * @param request - DescribeRuleListByEventCodesListRequest
   * @returns DescribeRuleListByEventCodesListResponse
   */
  async describeRuleListByEventCodesList(request: $_model.DescribeRuleListByEventCodesListRequest): Promise<$_model.DescribeRuleListByEventCodesListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRuleListByEventCodesListWithOptions(request, runtime);
  }

  /**
   * Query the list of policies
   * 
   * @param request - DescribeRulePageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRulePageListResponse
   */
  async describeRulePageListWithOptions(request: $_model.DescribeRulePageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRulePageListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.createType)) {
      query["createType"] = request.createType;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.ruleAuthType)) {
      query["ruleAuthType"] = request.ruleAuthType;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["ruleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.ruleStatus)) {
      query["ruleStatus"] = request.ruleStatus;
    }

    if (!$dara.isNull(request.sort)) {
      query["sort"] = request.sort;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRulePageList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRulePageListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRulePageListResponse({}));
  }

  /**
   * Query the list of policies
   * 
   * @param request - DescribeRulePageListRequest
   * @returns DescribeRulePageListResponse
   */
  async describeRulePageList(request: $_model.DescribeRulePageListRequest): Promise<$_model.DescribeRulePageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRulePageListWithOptions(request, runtime);
  }

  /**
   * Query historical snapshots based on ruleId and version
   * 
   * @param request - DescribeRuleSnapshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRuleSnapshotResponse
   */
  async describeRuleSnapshotWithOptions(request: $_model.DescribeRuleSnapshotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRuleSnapshotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["ruleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.snapshotVersion)) {
      query["snapshotVersion"] = request.snapshotVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRuleSnapshot",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRuleSnapshotResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRuleSnapshotResponse({}));
  }

  /**
   * Query historical snapshots based on ruleId and version
   * 
   * @param request - DescribeRuleSnapshotRequest
   * @returns DescribeRuleSnapshotResponse
   */
  async describeRuleSnapshot(request: $_model.DescribeRuleSnapshotRequest): Promise<$_model.DescribeRuleSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRuleSnapshotWithOptions(request, runtime);
  }

  /**
   * Query Policy Version List
   * 
   * @param request - DescribeRuleVersionListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRuleVersionListResponse
   */
  async describeRuleVersionListWithOptions(request: $_model.DescribeRuleVersionListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRuleVersionListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.consoleRuleId)) {
      query["consoleRuleId"] = request.consoleRuleId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["ruleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRuleVersionList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRuleVersionListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRuleVersionListResponse({}));
  }

  /**
   * Query Policy Version List
   * 
   * @param request - DescribeRuleVersionListRequest
   * @returns DescribeRuleVersionListResponse
   */
  async describeRuleVersionList(request: $_model.DescribeRuleVersionListRequest): Promise<$_model.DescribeRuleVersionListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRuleVersionListWithOptions(request, runtime);
  }

  /**
   * SDK Download List
   * 
   * @param request - DescribeSDKDownloadListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSDKDownloadListResponse
   */
  async describeSDKDownloadListWithOptions(request: $_model.DescribeSDKDownloadListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSDKDownloadListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.deviceType)) {
      query["deviceType"] = request.deviceType;
    }

    if (!$dara.isNull(request.listType)) {
      query["listType"] = request.listType;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSDKDownloadList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSDKDownloadListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSDKDownloadListResponse({}));
  }

  /**
   * SDK Download List
   * 
   * @param request - DescribeSDKDownloadListRequest
   * @returns DescribeSDKDownloadListResponse
   */
  async describeSDKDownloadList(request: $_model.DescribeSDKDownloadListRequest): Promise<$_model.DescribeSDKDownloadListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSDKDownloadListWithOptions(request, runtime);
  }

  /**
   * Query SAF permissions.
   * 
   * @param request - DescribeSafConsoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSafConsoleResponse
   */
  async describeSafConsoleWithOptions(request: $_model.DescribeSafConsoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSafConsoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.content)) {
      query["content"] = request.content;
    }

    if (!$dara.isNull(request.service)) {
      query["service"] = request.service;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSafConsole",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSafConsoleResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSafConsoleResponse({}));
  }

  /**
   * Query SAF permissions.
   * 
   * @param request - DescribeSafConsoleRequest
   * @returns DescribeSafConsoleResponse
   */
  async describeSafConsole(request: $_model.DescribeSafConsoleRequest): Promise<$_model.DescribeSafConsoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSafConsoleWithOptions(request, runtime);
  }

  /**
   * Query saf_de Order
   * 
   * @param request - DescribeSafDeOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSafDeOrderResponse
   */
  async describeSafDeOrderWithOptions(request: $_model.DescribeSafDeOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSafDeOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endDate)) {
      query["endDate"] = request.endDate;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.startDate)) {
      query["startDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSafDeOrder",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSafDeOrderResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSafDeOrderResponse({}));
  }

  /**
   * Query saf_de Order
   * 
   * @param request - DescribeSafDeOrderRequest
   * @returns DescribeSafDeOrderResponse
   */
  async describeSafDeOrder(request: $_model.DescribeSafDeOrderRequest): Promise<$_model.DescribeSafDeOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSafDeOrderWithOptions(request, runtime);
  }

  /**
   * Query Order Information
   * 
   * @param request - DescribeSafOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSafOrderResponse
   */
  async describeSafOrderWithOptions(request: $_model.DescribeSafOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSafOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endDate)) {
      query["endDate"] = request.endDate;
    }

    if (!$dara.isNull(request.exactProductCode)) {
      query["exactProductCode"] = request.exactProductCode;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.startDate)) {
      query["startDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSafOrder",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSafOrderResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSafOrderResponse({}));
  }

  /**
   * Query Order Information
   * 
   * @param request - DescribeSafOrderRequest
   * @returns DescribeSafOrderResponse
   */
  async describeSafOrder(request: $_model.DescribeSafOrderRequest): Promise<$_model.DescribeSafOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSafOrderWithOptions(request, runtime);
  }

  /**
   * Query Access Configuration
   * 
   * @param request - DescribeSafStartConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSafStartConfigResponse
   */
  async describeSafStartConfigWithOptions(request: $_model.DescribeSafStartConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSafStartConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSafStartConfig",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSafStartConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSafStartConfigResponse({}));
  }

  /**
   * Query Access Configuration
   * 
   * @param request - DescribeSafStartConfigRequest
   * @returns DescribeSafStartConfigResponse
   */
  async describeSafStartConfig(request: $_model.DescribeSafStartConfigRequest): Promise<$_model.DescribeSafStartConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSafStartConfigWithOptions(request, runtime);
  }

  /**
   * Query Access Configuration
   * 
   * @param request - DescribeSafStartStepsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSafStartStepsResponse
   */
  async describeSafStartStepsWithOptions(request: $_model.DescribeSafStartStepsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSafStartStepsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.aliyunServer)) {
      query["aliyunServer"] = request.aliyunServer;
    }

    if (!$dara.isNull(request.deviceTypesStr)) {
      query["deviceTypesStr"] = request.deviceTypesStr;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.language)) {
      query["language"] = request.language;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.serverRegion)) {
      query["serverRegion"] = request.serverRegion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSafStartSteps",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSafStartStepsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSafStartStepsResponse({}));
  }

  /**
   * Query Access Configuration
   * 
   * @param request - DescribeSafStartStepsRequest
   * @returns DescribeSafStartStepsResponse
   */
  async describeSafStartSteps(request: $_model.DescribeSafStartStepsRequest): Promise<$_model.DescribeSafStartStepsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSafStartStepsWithOptions(request, runtime);
  }

  /**
   * Get Risk Tag List
   * 
   * @param request - DescribeSafTagListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSafTagListResponse
   */
  async describeSafTagListWithOptions(request: $_model.DescribeSafTagListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSafTagListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    if (!$dara.isNull(request.apiId)) {
      query["apiId"] = request.apiId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSafTagList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSafTagListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSafTagListResponse({}));
  }

  /**
   * Get Risk Tag List
   * 
   * @param request - DescribeSafTagListRequest
   * @returns DescribeSafTagListResponse
   */
  async describeSafTagList(request: $_model.DescribeSafTagListRequest): Promise<$_model.DescribeSafTagListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSafTagListWithOptions(request, runtime);
  }

  /**
   * Get File Upload Credentials
   * 
   * @param request - DescribeSampleBatchOssPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSampleBatchOssPolicyResponse
   */
  async describeSampleBatchOssPolicyWithOptions(request: $_model.DescribeSampleBatchOssPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSampleBatchOssPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.batchName)) {
      query["batchName"] = request.batchName;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSampleBatchOssPolicy",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSampleBatchOssPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSampleBatchOssPolicyResponse({}));
  }

  /**
   * Get File Upload Credentials
   * 
   * @param request - DescribeSampleBatchOssPolicyRequest
   * @returns DescribeSampleBatchOssPolicyResponse
   */
  async describeSampleBatchOssPolicy(request: $_model.DescribeSampleBatchOssPolicyRequest): Promise<$_model.DescribeSampleBatchOssPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSampleBatchOssPolicyWithOptions(request, runtime);
  }

  /**
   * Sample List
   * 
   * @param request - DescribeSampleDataByBatchUUidPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSampleDataByBatchUUidPageResponse
   */
  async describeSampleDataByBatchUUidPageWithOptions(request: $_model.DescribeSampleDataByBatchUUidPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSampleDataByBatchUUidPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.batchUuid)) {
      query["batchUuid"] = request.batchUuid;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dataValue)) {
      query["dataValue"] = request.dataValue;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.updateBeginTime)) {
      query["updateBeginTime"] = request.updateBeginTime;
    }

    if (!$dara.isNull(request.updateEndTime)) {
      query["updateEndTime"] = request.updateEndTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSampleDataByBatchUUidPage",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSampleDataByBatchUUidPageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSampleDataByBatchUUidPageResponse({}));
  }

  /**
   * Sample List
   * 
   * @param request - DescribeSampleDataByBatchUUidPageRequest
   * @returns DescribeSampleDataByBatchUUidPageResponse
   */
  async describeSampleDataByBatchUUidPage(request: $_model.DescribeSampleDataByBatchUUidPageRequest): Promise<$_model.DescribeSampleDataByBatchUUidPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSampleDataByBatchUUidPageWithOptions(request, runtime);
  }

  /**
   * Paged Query of Sample List
   * 
   * @param request - DescribeSampleDataListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSampleDataListResponse
   */
  async describeSampleDataListWithOptions(request: $_model.DescribeSampleDataListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSampleDataListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.deleteTag)) {
      query["deleteTag"] = request.deleteTag;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryContent)) {
      query["queryContent"] = request.queryContent;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.sampleId)) {
      query["sampleId"] = request.sampleId;
    }

    if (!$dara.isNull(request.scene)) {
      query["scene"] = request.scene;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSampleDataList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSampleDataListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSampleDataListResponse({}));
  }

  /**
   * Paged Query of Sample List
   * 
   * @param request - DescribeSampleDataListRequest
   * @returns DescribeSampleDataListResponse
   */
  async describeSampleDataList(request: $_model.DescribeSampleDataListRequest): Promise<$_model.DescribeSampleDataListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSampleDataListWithOptions(request, runtime);
  }

  /**
   * Sample List
   * 
   * @param request - DescribeSampleDataPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSampleDataPageResponse
   */
  async describeSampleDataPageWithOptions(request: $_model.DescribeSampleDataPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSampleDataPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dataValue)) {
      query["dataValue"] = request.dataValue;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.updateBeginTime)) {
      query["updateBeginTime"] = request.updateBeginTime;
    }

    if (!$dara.isNull(request.updateEndTime)) {
      query["updateEndTime"] = request.updateEndTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSampleDataPage",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSampleDataPageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSampleDataPageResponse({}));
  }

  /**
   * Sample List
   * 
   * @param request - DescribeSampleDataPageRequest
   * @returns DescribeSampleDataPageResponse
   */
  async describeSampleDataPage(request: $_model.DescribeSampleDataPageRequest): Promise<$_model.DescribeSampleDataPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSampleDataPageWithOptions(request, runtime);
  }

  /**
   * Query Sample Example Authorization
   * 
   * @param request - DescribeSampleDemoDownloadUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSampleDemoDownloadUrlResponse
   */
  async describeSampleDemoDownloadUrlWithOptions(request: $_model.DescribeSampleDemoDownloadUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSampleDemoDownloadUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.scene)) {
      query["scene"] = request.scene;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSampleDemoDownloadUrl",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSampleDemoDownloadUrlResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSampleDemoDownloadUrlResponse({}));
  }

  /**
   * Query Sample Example Authorization
   * 
   * @param request - DescribeSampleDemoDownloadUrlRequest
   * @returns DescribeSampleDemoDownloadUrlResponse
   */
  async describeSampleDemoDownloadUrl(request: $_model.DescribeSampleDemoDownloadUrlRequest): Promise<$_model.DescribeSampleDemoDownloadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSampleDemoDownloadUrlWithOptions(request, runtime);
  }

  /**
   * Query Sample Download Authorization Information
   * 
   * @param request - DescribeSampleDownloadUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSampleDownloadUrlResponse
   */
  async describeSampleDownloadUrlWithOptions(request: $_model.DescribeSampleDownloadUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSampleDownloadUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.sampleId)) {
      query["sampleId"] = request.sampleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSampleDownloadUrl",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSampleDownloadUrlResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSampleDownloadUrlResponse({}));
  }

  /**
   * Query Sample Download Authorization Information
   * 
   * @param request - DescribeSampleDownloadUrlRequest
   * @returns DescribeSampleDownloadUrlResponse
   */
  async describeSampleDownloadUrl(request: $_model.DescribeSampleDownloadUrlRequest): Promise<$_model.DescribeSampleDownloadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSampleDownloadUrlWithOptions(request, runtime);
  }

  /**
   * Query Sample Details
   * 
   * @param request - DescribeSampleInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSampleInfoResponse
   */
  async describeSampleInfoWithOptions(request: $_model.DescribeSampleInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSampleInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.versions)) {
      query["versions"] = request.versions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSampleInfo",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSampleInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSampleInfoResponse({}));
  }

  /**
   * Query Sample Details
   * 
   * @param request - DescribeSampleInfoRequest
   * @returns DescribeSampleInfoResponse
   */
  async describeSampleInfo(request: $_model.DescribeSampleInfoRequest): Promise<$_model.DescribeSampleInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSampleInfoWithOptions(request, runtime);
  }

  /**
   * Query Sample List
   * 
   * @param request - DescribeSampleListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSampleListResponse
   */
  async describeSampleListWithOptions(request: $_model.DescribeSampleListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSampleListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.sampleType)) {
      query["sampleType"] = request.sampleType;
    }

    if (!$dara.isNull(request.sampleValue)) {
      query["sampleValue"] = request.sampleValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSampleList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSampleListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSampleListResponse({}));
  }

  /**
   * Query Sample List
   * 
   * @param request - DescribeSampleListRequest
   * @returns DescribeSampleListResponse
   */
  async describeSampleList(request: $_model.DescribeSampleListRequest): Promise<$_model.DescribeSampleListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSampleListWithOptions(request, runtime);
  }

  /**
   * Query Scene List
   * 
   * @param request - DescribeSampleSceneListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSampleSceneListResponse
   */
  async describeSampleSceneListWithOptions(request: $_model.DescribeSampleSceneListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSampleSceneListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSampleSceneList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSampleSceneListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSampleSceneListResponse({}));
  }

  /**
   * Query Scene List
   * 
   * @param request - DescribeSampleSceneListRequest
   * @returns DescribeSampleSceneListResponse
   */
  async describeSampleSceneList(request: $_model.DescribeSampleSceneListRequest): Promise<$_model.DescribeSampleSceneListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSampleSceneListWithOptions(request, runtime);
  }

  /**
   * Get Tag List
   * 
   * @param request - DescribeSampleTagListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSampleTagListResponse
   */
  async describeSampleTagListWithOptions(request: $_model.DescribeSampleTagListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSampleTagListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSampleTagList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSampleTagListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSampleTagListResponse({}));
  }

  /**
   * Get Tag List
   * 
   * @param request - DescribeSampleTagListRequest
   * @returns DescribeSampleTagListResponse
   */
  async describeSampleTagList(request: $_model.DescribeSampleTagListRequest): Promise<$_model.DescribeSampleTagListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSampleTagListWithOptions(request, runtime);
  }

  /**
   * Query Sample Upload Authorization Information
   * 
   * @param request - DescribeSampleUploadPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSampleUploadPolicyResponse
   */
  async describeSampleUploadPolicyWithOptions(request: $_model.DescribeSampleUploadPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSampleUploadPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSampleUploadPolicy",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSampleUploadPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSampleUploadPolicyResponse({}));
  }

  /**
   * Query Sample Upload Authorization Information
   * 
   * @param request - DescribeSampleUploadPolicyRequest
   * @returns DescribeSampleUploadPolicyResponse
   */
  async describeSampleUploadPolicy(request: $_model.DescribeSampleUploadPolicyRequest): Promise<$_model.DescribeSampleUploadPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSampleUploadPolicyWithOptions(request, runtime);
  }

  /**
   * Sample Batch List
   * 
   * @param request - DescribeSamplebatchPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSamplebatchPageResponse
   */
  async describeSamplebatchPageWithOptions(request: $_model.DescribeSamplebatchPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSamplebatchPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dataValue)) {
      query["dataValue"] = request.dataValue;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSamplebatchPage",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSamplebatchPageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSamplebatchPageResponse({}));
  }

  /**
   * Sample Batch List
   * 
   * @param request - DescribeSamplebatchPageRequest
   * @returns DescribeSamplebatchPageResponse
   */
  async describeSamplebatchPage(request: $_model.DescribeSamplebatchPageRequest): Promise<$_model.DescribeSamplebatchPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSamplebatchPageWithOptions(request, runtime);
  }

  /**
   * Dropdown list for scenario-based service events
   * 
   * @remarks
   * Dropdown list for scenario-based risk control events
   * 
   * @param request - DescribeSceneAllEventNameCodeListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSceneAllEventNameCodeListResponse
   */
  async describeSceneAllEventNameCodeListWithOptions(request: $_model.DescribeSceneAllEventNameCodeListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSceneAllEventNameCodeListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.createType)) {
      query["createType"] = request.createType;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSceneAllEventNameCodeList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSceneAllEventNameCodeListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSceneAllEventNameCodeListResponse({}));
  }

  /**
   * Dropdown list for scenario-based service events
   * 
   * @remarks
   * Dropdown list for scenario-based risk control events
   * 
   * @param request - DescribeSceneAllEventNameCodeListRequest
   * @returns DescribeSceneAllEventNameCodeListResponse
   */
  async describeSceneAllEventNameCodeList(request: $_model.DescribeSceneAllEventNameCodeListRequest): Promise<$_model.DescribeSceneAllEventNameCodeListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSceneAllEventNameCodeListWithOptions(request, runtime);
  }

  /**
   * List of Scenario-based Risk Control Events
   * 
   * @param request - DescribeSceneEventPageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSceneEventPageListResponse
   */
  async describeSceneEventPageListWithOptions(request: $_model.DescribeSceneEventPageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSceneEventPageListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.nameOrCode)) {
      query["nameOrCode"] = request.nameOrCode;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSceneEventPageList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSceneEventPageListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSceneEventPageListResponse({}));
  }

  /**
   * List of Scenario-based Risk Control Events
   * 
   * @param request - DescribeSceneEventPageListRequest
   * @returns DescribeSceneEventPageListResponse
   */
  async describeSceneEventPageList(request: $_model.DescribeSceneEventPageListRequest): Promise<$_model.DescribeSceneEventPageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSceneEventPageListWithOptions(request, runtime);
  }

  /**
   * White-boxed strategy list for risk control services
   * 
   * @remarks
   * Query the list of scenarized risk control event strategies
   * 
   * @param request - DescribeSceneRulePageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSceneRulePageListResponse
   */
  async describeSceneRulePageListWithOptions(request: $_model.DescribeSceneRulePageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSceneRulePageListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.createType)) {
      query["createType"] = request.createType;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.ruleAuthType)) {
      query["ruleAuthType"] = request.ruleAuthType;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["ruleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.ruleStatus)) {
      query["ruleStatus"] = request.ruleStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSceneRulePageList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSceneRulePageListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSceneRulePageListResponse({}));
  }

  /**
   * White-boxed strategy list for risk control services
   * 
   * @remarks
   * Query the list of scenarized risk control event strategies
   * 
   * @param request - DescribeSceneRulePageListRequest
   * @returns DescribeSceneRulePageListResponse
   */
  async describeSceneRulePageList(request: $_model.DescribeSceneRulePageListRequest): Promise<$_model.DescribeSceneRulePageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSceneRulePageListWithOptions(request, runtime);
  }

  /**
   * Score Distribution
   * 
   * @param request - DescribeScoreListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScoreListResponse
   */
  async describeScoreListWithOptions(request: $_model.DescribeScoreListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeScoreListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScoreList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeScoreListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeScoreListResponse({}));
  }

  /**
   * Score Distribution
   * 
   * @param request - DescribeScoreListRequest
   * @returns DescribeScoreListResponse
   */
  async describeScoreList(request: $_model.DescribeScoreListRequest): Promise<$_model.DescribeScoreListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScoreListWithOptions(request, runtime);
  }

  /**
   * Score Range Quantity Analysis
   * 
   * @param request - DescribeScoreSectionNumLineChartRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScoreSectionNumLineChartResponse
   */
  async describeScoreSectionNumLineChartWithOptions(request: $_model.DescribeScoreSectionNumLineChartRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeScoreSectionNumLineChartResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.beginTime)) {
      query["beginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.byPassEventCodes)) {
      query["byPassEventCodes"] = request.byPassEventCodes;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.mainEventCodes)) {
      query["mainEventCodes"] = request.mainEventCodes;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.shuntEventCodes)) {
      query["shuntEventCodes"] = request.shuntEventCodes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScoreSectionNumLineChart",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeScoreSectionNumLineChartResponse>(await this.callApi(params, req, runtime), new $_model.DescribeScoreSectionNumLineChartResponse({}));
  }

  /**
   * Score Range Quantity Analysis
   * 
   * @param request - DescribeScoreSectionNumLineChartRequest
   * @returns DescribeScoreSectionNumLineChartResponse
   */
  async describeScoreSectionNumLineChart(request: $_model.DescribeScoreSectionNumLineChartRequest): Promise<$_model.DescribeScoreSectionNumLineChartResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScoreSectionNumLineChartWithOptions(request, runtime);
  }

  /**
   * Proportion of Score Ranges for Main Events/Bypass Events/Diversion Events
   * 
   * @param request - DescribeScoreSectionPieChartRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScoreSectionPieChartResponse
   */
  async describeScoreSectionPieChartWithOptions(request: $_model.DescribeScoreSectionPieChartRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeScoreSectionPieChartResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.beginTime)) {
      query["beginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventCodes)) {
      query["eventCodes"] = request.eventCodes;
    }

    if (!$dara.isNull(request.eventType)) {
      query["eventType"] = request.eventType;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScoreSectionPieChart",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeScoreSectionPieChartResponse>(await this.callApi(params, req, runtime), new $_model.DescribeScoreSectionPieChartResponse({}));
  }

  /**
   * Proportion of Score Ranges for Main Events/Bypass Events/Diversion Events
   * 
   * @param request - DescribeScoreSectionPieChartRequest
   * @returns DescribeScoreSectionPieChartResponse
   */
  async describeScoreSectionPieChart(request: $_model.DescribeScoreSectionPieChartRequest): Promise<$_model.DescribeScoreSectionPieChartResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScoreSectionPieChartWithOptions(request, runtime);
  }

  /**
   * Score Section Ratio Analysis
   * 
   * @param request - DescribeScoreSectionRatioLineChartRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScoreSectionRatioLineChartResponse
   */
  async describeScoreSectionRatioLineChartWithOptions(request: $_model.DescribeScoreSectionRatioLineChartRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeScoreSectionRatioLineChartResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.beginTime)) {
      query["beginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.byPassEventCodes)) {
      query["byPassEventCodes"] = request.byPassEventCodes;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.mainEventCodes)) {
      query["mainEventCodes"] = request.mainEventCodes;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.shuntEventCodes)) {
      query["shuntEventCodes"] = request.shuntEventCodes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScoreSectionRatioLineChart",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeScoreSectionRatioLineChartResponse>(await this.callApi(params, req, runtime), new $_model.DescribeScoreSectionRatioLineChartResponse({}));
  }

  /**
   * Score Section Ratio Analysis
   * 
   * @param request - DescribeScoreSectionRatioLineChartRequest
   * @returns DescribeScoreSectionRatioLineChartResponse
   */
  async describeScoreSectionRatioLineChart(request: $_model.DescribeScoreSectionRatioLineChartRequest): Promise<$_model.DescribeScoreSectionRatioLineChartResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScoreSectionRatioLineChartWithOptions(request, runtime);
  }

  /**
   * Query Task ID List
   * 
   * @param request - DescribeSelectItemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSelectItemResponse
   */
  async describeSelectItemWithOptions(request: $_model.DescribeSelectItemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSelectItemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSelectItem",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSelectItemResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSelectItemResponse({}));
  }

  /**
   * Query Task ID List
   * 
   * @param request - DescribeSelectItemRequest
   * @returns DescribeSelectItemResponse
   */
  async describeSelectItem(request: $_model.DescribeSelectItemRequest): Promise<$_model.DescribeSelectItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSelectItemWithOptions(request, runtime);
  }

  /**
   * ServiceAppkey dropdown
   * 
   * @param request - DescribeServiceAppKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceAppKeyResponse
   */
  async describeServiceAppKeyWithOptions(request: $_model.DescribeServiceAppKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServiceAppKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceAppKey",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServiceAppKeyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServiceAppKeyResponse({}));
  }

  /**
   * ServiceAppkey dropdown
   * 
   * @param request - DescribeServiceAppKeyRequest
   * @returns DescribeServiceAppKeyResponse
   */
  async describeServiceAppKey(request: $_model.DescribeServiceAppKeyRequest): Promise<$_model.DescribeServiceAppKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeServiceAppKeyWithOptions(request, runtime);
  }

  /**
   * ServiceCodeName Information
   * 
   * @param request - DescribeServiceCodeNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceCodeNameResponse
   */
  async describeServiceCodeNameWithOptions(request: $_model.DescribeServiceCodeNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServiceCodeNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.tab)) {
      query["Tab"] = request.tab;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceCodeName",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServiceCodeNameResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServiceCodeNameResponse({}));
  }

  /**
   * ServiceCodeName Information
   * 
   * @param request - DescribeServiceCodeNameRequest
   * @returns DescribeServiceCodeNameResponse
   */
  async describeServiceCodeName(request: $_model.DescribeServiceCodeNameRequest): Promise<$_model.DescribeServiceCodeNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeServiceCodeNameWithOptions(request, runtime);
  }

  /**
   * Get Service List
   * 
   * @param request - DescribeServiceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceListResponse
   */
  async describeServiceListWithOptions(request: $_model.DescribeServiceListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServiceListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServiceListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServiceListResponse({}));
  }

  /**
   * Get Service List
   * 
   * @param request - DescribeServiceListRequest
   * @returns DescribeServiceListResponse
   */
  async describeServiceList(request: $_model.DescribeServiceListRequest): Promise<$_model.DescribeServiceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeServiceListWithOptions(request, runtime);
  }

  /**
   * Estimate Call Information
   * 
   * @param request - DescribeSimulationPreditInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSimulationPreditInfoResponse
   */
  async describeSimulationPreditInfoWithOptions(request: $_model.DescribeSimulationPreditInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSimulationPreditInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.rulesStr)) {
      query["rulesStr"] = request.rulesStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSimulationPreditInfo",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSimulationPreditInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSimulationPreditInfoResponse({}));
  }

  /**
   * Estimate Call Information
   * 
   * @param request - DescribeSimulationPreditInfoRequest
   * @returns DescribeSimulationPreditInfoResponse
   */
  async describeSimulationPreditInfo(request: $_model.DescribeSimulationPreditInfoRequest): Promise<$_model.DescribeSimulationPreditInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSimulationPreditInfoWithOptions(request, runtime);
  }

  /**
   * Query Task Record Count
   * 
   * @param request - DescribeSimulationTaskCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSimulationTaskCountResponse
   */
  async describeSimulationTaskCountWithOptions(request: $_model.DescribeSimulationTaskCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSimulationTaskCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.dataSourceConfig)) {
      query["dataSourceConfig"] = request.dataSourceConfig;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      query["dataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.filtersStr)) {
      query["filtersStr"] = request.filtersStr;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSimulationTaskCount",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSimulationTaskCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSimulationTaskCountResponse({}));
  }

  /**
   * Query Task Record Count
   * 
   * @param request - DescribeSimulationTaskCountRequest
   * @returns DescribeSimulationTaskCountResponse
   */
  async describeSimulationTaskCount(request: $_model.DescribeSimulationTaskCountRequest): Promise<$_model.DescribeSimulationTaskCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSimulationTaskCountWithOptions(request, runtime);
  }

  /**
   * Task List
   * 
   * @param request - DescribeSimulationTaskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSimulationTaskListResponse
   */
  async describeSimulationTaskListWithOptions(request: $_model.DescribeSimulationTaskListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSimulationTaskListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.title)) {
      query["title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSimulationTaskList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSimulationTaskListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSimulationTaskListResponse({}));
  }

  /**
   * Task List
   * 
   * @param request - DescribeSimulationTaskListRequest
   * @returns DescribeSimulationTaskListResponse
   */
  async describeSimulationTaskList(request: $_model.DescribeSimulationTaskListRequest): Promise<$_model.DescribeSimulationTaskListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSimulationTaskListWithOptions(request, runtime);
  }

  /**
   * Get Project Configuration
   * 
   * @param request - DescribeSlsUrlConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlsUrlConfigResponse
   */
  async describeSlsUrlConfigWithOptions(request: $_model.DescribeSlsUrlConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlsUrlConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlsUrlConfig",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSlsUrlConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSlsUrlConfigResponse({}));
  }

  /**
   * Get Project Configuration
   * 
   * @param request - DescribeSlsUrlConfigRequest
   * @returns DescribeSlsUrlConfigResponse
   */
  async describeSlsUrlConfig(request: $_model.DescribeSlsUrlConfigRequest): Promise<$_model.DescribeSlsUrlConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlsUrlConfigWithOptions(request, runtime);
  }

  /**
   * Query List of Policies Supporting Simulation
   * 
   * @param request - DescribeSupportRuleListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSupportRuleListResponse
   */
  async describeSupportRuleListWithOptions(request: $_model.DescribeSupportRuleListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSupportRuleListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSupportRuleList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSupportRuleListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSupportRuleListResponse({}));
  }

  /**
   * Query List of Policies Supporting Simulation
   * 
   * @param request - DescribeSupportRuleListRequest
   * @returns DescribeSupportRuleListResponse
   */
  async describeSupportRuleList(request: $_model.DescribeSupportRuleListRequest): Promise<$_model.DescribeSupportRuleListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSupportRuleListWithOptions(request, runtime);
  }

  /**
   * Tag List
   * 
   * @param request - DescribeTagListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagListResponse
   */
  async describeTagListWithOptions(request: $_model.DescribeTagListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTagListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["RegId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTagList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTagListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTagListResponse({}));
  }

  /**
   * Tag List
   * 
   * @param request - DescribeTagListRequest
   * @returns DescribeTagListResponse
   */
  async describeTagList(request: $_model.DescribeTagListRequest): Promise<$_model.DescribeTagListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagListWithOptions(request, runtime);
  }

  /**
   * Tag Overview List
   * 
   * @param request - DescribeTagsBarChartRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagsBarChartResponse
   */
  async describeTagsBarChartWithOptions(request: $_model.DescribeTagsBarChartRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTagsBarChartResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.beginTime)) {
      query["beginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventCodes)) {
      query["eventCodes"] = request.eventCodes;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.result)) {
      query["result"] = request.result;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTagsBarChart",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTagsBarChartResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTagsBarChartResponse({}));
  }

  /**
   * Tag Overview List
   * 
   * @param request - DescribeTagsBarChartRequest
   * @returns DescribeTagsBarChartResponse
   */
  async describeTagsBarChart(request: $_model.DescribeTagsBarChartRequest): Promise<$_model.DescribeTagsBarChartResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagsBarChartWithOptions(request, runtime);
  }

  /**
   * Tag Fluctuation Detection
   * 
   * @param request - DescribeTagsFluctuationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagsFluctuationResponse
   */
  async describeTagsFluctuationWithOptions(request: $_model.DescribeTagsFluctuationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTagsFluctuationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.eventCodes)) {
      query["eventCodes"] = request.eventCodes;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTagsFluctuation",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTagsFluctuationResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTagsFluctuationResponse({}));
  }

  /**
   * Tag Fluctuation Detection
   * 
   * @param request - DescribeTagsFluctuationRequest
   * @returns DescribeTagsFluctuationResponse
   */
  async describeTagsFluctuation(request: $_model.DescribeTagsFluctuationRequest): Promise<$_model.DescribeTagsFluctuationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagsFluctuationWithOptions(request, runtime);
  }

  /**
   * Get Tag List
   * 
   * @param request - DescribeTagsListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagsListResponse
   */
  async describeTagsListWithOptions(request: $_model.DescribeTagsListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTagsListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTagsList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTagsListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTagsListResponse({}));
  }

  /**
   * Get Tag List
   * 
   * @param request - DescribeTagsListRequest
   * @returns DescribeTagsListResponse
   */
  async describeTagsList(request: $_model.DescribeTagsListRequest): Promise<$_model.DescribeTagsListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagsListWithOptions(request, runtime);
  }

  /**
   * Tag Hit Count Analysis
   * 
   * @param request - DescribeTagsNumLineChartRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagsNumLineChartResponse
   */
  async describeTagsNumLineChartWithOptions(request: $_model.DescribeTagsNumLineChartRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTagsNumLineChartResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.beginTime)) {
      query["beginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.byPassEventCodes)) {
      query["byPassEventCodes"] = request.byPassEventCodes;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.mainEventCodes)) {
      query["mainEventCodes"] = request.mainEventCodes;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.shuntEventCodes)) {
      query["shuntEventCodes"] = request.shuntEventCodes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTagsNumLineChart",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTagsNumLineChartResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTagsNumLineChartResponse({}));
  }

  /**
   * Tag Hit Count Analysis
   * 
   * @param request - DescribeTagsNumLineChartRequest
   * @returns DescribeTagsNumLineChartResponse
   */
  async describeTagsNumLineChart(request: $_model.DescribeTagsNumLineChartRequest): Promise<$_model.DescribeTagsNumLineChartResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagsNumLineChartWithOptions(request, runtime);
  }

  /**
   * Tag Hit Ratio Analysis
   * 
   * @param request - DescribeTagsRatioLineChartRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagsRatioLineChartResponse
   */
  async describeTagsRatioLineChartWithOptions(request: $_model.DescribeTagsRatioLineChartRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTagsRatioLineChartResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.beginTime)) {
      query["beginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.byPassEventCodes)) {
      query["byPassEventCodes"] = request.byPassEventCodes;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.mainEventCodes)) {
      query["mainEventCodes"] = request.mainEventCodes;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.shuntEventCodes)) {
      query["shuntEventCodes"] = request.shuntEventCodes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTagsRatioLineChart",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTagsRatioLineChartResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTagsRatioLineChartResponse({}));
  }

  /**
   * Tag Hit Ratio Analysis
   * 
   * @param request - DescribeTagsRatioLineChartRequest
   * @returns DescribeTagsRatioLineChartResponse
   */
  async describeTagsRatioLineChart(request: $_model.DescribeTagsRatioLineChartRequest): Promise<$_model.DescribeTagsRatioLineChartResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagsRatioLineChartWithOptions(request, runtime);
  }

  /**
   * Tag Hit Trend
   * 
   * @param request - DescribeTagsTrendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagsTrendResponse
   */
  async describeTagsTrendWithOptions(request: $_model.DescribeTagsTrendRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTagsTrendResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.beginTime)) {
      query["beginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventCodes)) {
      query["eventCodes"] = request.eventCodes;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.result)) {
      query["result"] = request.result;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTagsTrend",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTagsTrendResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTagsTrendResponse({}));
  }

  /**
   * Tag Hit Trend
   * 
   * @param request - DescribeTagsTrendRequest
   * @returns DescribeTagsTrendResponse
   */
  async describeTagsTrend(request: $_model.DescribeTagsTrendRequest): Promise<$_model.DescribeTagsTrendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagsTrendWithOptions(request, runtime);
  }

  /**
   * Task List
   * 
   * @param request - DescribeTaskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTaskListResponse
   */
  async describeTaskListWithOptions(request: $_model.DescribeTaskListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTaskListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.isPage)) {
      query["IsPage"] = request.isPage;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTaskList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTaskListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTaskListResponse({}));
  }

  /**
   * Task List
   * 
   * @param request - DescribeTaskListRequest
   * @returns DescribeTaskListResponse
   */
  async describeTaskList(request: $_model.DescribeTaskListRequest): Promise<$_model.DescribeTaskListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTaskListWithOptions(request, runtime);
  }

  /**
   * Task Log List
   * 
   * @param request - DescribeTaskLogListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTaskLogListResponse
   */
  async describeTaskLogListWithOptions(request: $_model.DescribeTaskLogListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTaskLogListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.isPage)) {
      query["IsPage"] = request.isPage;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskLogId)) {
      query["TaskLogId"] = request.taskLogId;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTaskLogList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTaskLogListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTaskLogListResponse({}));
  }

  /**
   * Task Log List
   * 
   * @param request - DescribeTaskLogListRequest
   * @returns DescribeTaskLogListResponse
   */
  async describeTaskLogList(request: $_model.DescribeTaskLogListRequest): Promise<$_model.DescribeTaskLogListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTaskLogListWithOptions(request, runtime);
  }

  /**
   * Query Total Event Count
   * 
   * @param request - DescribeTemplateCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTemplateCountResponse
   */
  async describeTemplateCountWithOptions(request: $_model.DescribeTemplateCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTemplateCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTemplateCount",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTemplateCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTemplateCountResponse({}));
  }

  /**
   * Query Total Event Count
   * 
   * @param request - DescribeTemplateCountRequest
   * @returns DescribeTemplateCountResponse
   */
  async describeTemplateCount(request: $_model.DescribeTemplateCountRequest): Promise<$_model.DescribeTemplateCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTemplateCountWithOptions(request, runtime);
  }

  /**
   * Template Download
   * 
   * @param request - DescribeTemplateDownloadRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTemplateDownloadResponse
   */
  async describeTemplateDownloadWithOptions(request: $_model.DescribeTemplateDownloadRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTemplateDownloadResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTemplateDownload",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTemplateDownloadResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTemplateDownloadResponse({}));
  }

  /**
   * Template Download
   * 
   * @param request - DescribeTemplateDownloadRequest
   * @returns DescribeTemplateDownloadResponse
   */
  async describeTemplateDownload(request: $_model.DescribeTemplateDownloadRequest): Promise<$_model.DescribeTemplateDownloadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTemplateDownloadWithOptions(request, runtime);
  }

  /**
   * Query Event List by Event Name
   * 
   * @param request - DescribeTemplatePageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTemplatePageListResponse
   */
  async describeTemplatePageListWithOptions(request: $_model.DescribeTemplatePageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTemplatePageListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.eventCodes)) {
      query["eventCodes"] = request.eventCodes;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["templateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateSearchItem)) {
      query["templateSearchItem"] = request.templateSearchItem;
    }

    if (!$dara.isNull(request.templateStatus)) {
      query["templateStatus"] = request.templateStatus;
    }

    if (!$dara.isNull(request.templateType)) {
      query["templateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTemplatePageList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTemplatePageListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTemplatePageListResponse({}));
  }

  /**
   * Query Event List by Event Name
   * 
   * @param request - DescribeTemplatePageListRequest
   * @returns DescribeTemplatePageListResponse
   */
  async describeTemplatePageList(request: $_model.DescribeTemplatePageListRequest): Promise<$_model.DescribeTemplatePageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTemplatePageListWithOptions(request, runtime);
  }

  /**
   * Get List of Services Used by User
   * 
   * @param request - DescribeUsedServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUsedServiceResponse
   */
  async describeUsedServiceWithOptions(request: $_model.DescribeUsedServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUsedServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUsedService",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUsedServiceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUsedServiceResponse({}));
  }

  /**
   * Get List of Services Used by User
   * 
   * @param request - DescribeUsedServiceRequest
   * @returns DescribeUsedServiceResponse
   */
  async describeUsedService(request: $_model.DescribeUsedServiceRequest): Promise<$_model.DescribeUsedServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUsedServiceWithOptions(request, runtime);
  }

  /**
   * Get Current Logged-in User Information
   * 
   * @param request - DescribeUserInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserInfoResponse
   */
  async describeUserInfoWithOptions(request: $_model.DescribeUserInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserInfo",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserInfoResponse({}));
  }

  /**
   * Get Current Logged-in User Information
   * 
   * @param request - DescribeUserInfoRequest
   * @returns DescribeUserInfoResponse
   */
  async describeUserInfo(request: $_model.DescribeUserInfoRequest): Promise<$_model.DescribeUserInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserInfoWithOptions(request, runtime);
  }

  /**
   * Query Variable Binding Information
   * 
   * @param request - DescribeVariableBindDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVariableBindDetailResponse
   */
  async describeVariableBindDetailWithOptions(request: $_model.DescribeVariableBindDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVariableBindDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.defineId)) {
      query["defineId"] = request.defineId;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVariableBindDetail",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVariableBindDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVariableBindDetailResponse({}));
  }

  /**
   * Query Variable Binding Information
   * 
   * @param request - DescribeVariableBindDetailRequest
   * @returns DescribeVariableBindDetailResponse
   */
  async describeVariableBindDetail(request: $_model.DescribeVariableBindDetailRequest): Promise<$_model.DescribeVariableBindDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVariableBindDetailWithOptions(request, runtime);
  }

  /**
   * Query variable details
   * 
   * @param request - DescribeVariableDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVariableDetailResponse
   */
  async describeVariableDetailWithOptions(request: $_model.DescribeVariableDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVariableDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVariableDetail",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVariableDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVariableDetailResponse({}));
  }

  /**
   * Query variable details
   * 
   * @param request - DescribeVariableDetailRequest
   * @returns DescribeVariableDetailResponse
   */
  async describeVariableDetail(request: $_model.DescribeVariableDetailRequest): Promise<$_model.DescribeVariableDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVariableDetailWithOptions(request, runtime);
  }

  /**
   * Query Variable Fee Information
   * 
   * @param request - DescribeVariableFeeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVariableFeeResponse
   */
  async describeVariableFeeWithOptions(request: $_model.DescribeVariableFeeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVariableFeeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.ids)) {
      query["ids"] = request.ids;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVariableFee",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVariableFeeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVariableFeeResponse({}));
  }

  /**
   * Query Variable Fee Information
   * 
   * @param request - DescribeVariableFeeRequest
   * @returns DescribeVariableFeeResponse
   */
  async describeVariableFee(request: $_model.DescribeVariableFeeRequest): Promise<$_model.DescribeVariableFeeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVariableFeeWithOptions(request, runtime);
  }

  /**
   * Query Variable Details
   * 
   * @param request - DescribeVariableListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVariableListResponse
   */
  async describeVariableListWithOptions(request: $_model.DescribeVariableListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVariableListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.createType)) {
      query["createType"] = request.createType;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.refObjId)) {
      query["refObjId"] = request.refObjId;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["sourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    if (!$dara.isNull(request.typesStr)) {
      query["typesStr"] = request.typesStr;
    }

    if (!$dara.isNull(request.value)) {
      query["value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVariableList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVariableListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVariableListResponse({}));
  }

  /**
   * Query Variable Details
   * 
   * @param request - DescribeVariableListRequest
   * @returns DescribeVariableListResponse
   */
  async describeVariableList(request: $_model.DescribeVariableListRequest): Promise<$_model.DescribeVariableListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVariableListWithOptions(request, runtime);
  }

  /**
   * Query Variable Definitions
   * 
   * @param request - DescribeVariableMarketListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVariableMarketListResponse
   */
  async describeVariableMarketListWithOptions(request: $_model.DescribeVariableMarketListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVariableMarketListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.chargingMode)) {
      query["chargingMode"] = request.chargingMode;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.paging)) {
      query["paging"] = request.paging;
    }

    if (!$dara.isNull(request.queryContent)) {
      query["queryContent"] = request.queryContent;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.scenesStr)) {
      query["scenesStr"] = request.scenesStr;
    }

    if (!$dara.isNull(request.source)) {
      query["source"] = request.source;
    }

    if (!$dara.isNull(request.title)) {
      query["title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVariableMarketList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVariableMarketListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVariableMarketListResponse({}));
  }

  /**
   * Query Variable Definitions
   * 
   * @param request - DescribeVariableMarketListRequest
   * @returns DescribeVariableMarketListResponse
   */
  async describeVariableMarketList(request: $_model.DescribeVariableMarketListRequest): Promise<$_model.DescribeVariableMarketListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVariableMarketListWithOptions(request, runtime);
  }

  /**
   * Query Configuration Information
   * 
   * @param request - DescribeVariableSceneListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVariableSceneListResponse
   */
  async describeVariableSceneListWithOptions(request: $_model.DescribeVariableSceneListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVariableSceneListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.bizType)) {
      query["bizType"] = request.bizType;
    }

    if (!$dara.isNull(request.configKey)) {
      query["configKey"] = request.configKey;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.paging)) {
      query["paging"] = request.paging;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVariableSceneList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVariableSceneListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVariableSceneListResponse({}));
  }

  /**
   * Query Configuration Information
   * 
   * @param request - DescribeVariableSceneListRequest
   * @returns DescribeVariableSceneListResponse
   */
  async describeVariableSceneList(request: $_model.DescribeVariableSceneListRequest): Promise<$_model.DescribeVariableSceneListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVariableSceneListWithOptions(request, runtime);
  }

  /**
   * Cumulative Variable Version Details.
   * 
   * @param request - DescribeVariableVersionDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVariableVersionDetailResponse
   */
  async describeVariableVersionDetailWithOptions(request: $_model.DescribeVariableVersionDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVariableVersionDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.objectCode)) {
      query["objectCode"] = request.objectCode;
    }

    if (!$dara.isNull(request.objectId)) {
      query["objectId"] = request.objectId;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    if (!$dara.isNull(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVariableVersionDetail",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVariableVersionDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVariableVersionDetailResponse({}));
  }

  /**
   * Cumulative Variable Version Details.
   * 
   * @param request - DescribeVariableVersionDetailRequest
   * @returns DescribeVariableVersionDetailResponse
   */
  async describeVariableVersionDetail(request: $_model.DescribeVariableVersionDetailRequest): Promise<$_model.DescribeVariableVersionDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVariableVersionDetailWithOptions(request, runtime);
  }

  /**
   * Variable Version List Query
   * 
   * @param request - DescribeVersionPageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVersionPageListResponse
   */
  async describeVersionPageListWithOptions(request: $_model.DescribeVersionPageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVersionPageListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.objectCode)) {
      query["objectCode"] = request.objectCode;
    }

    if (!$dara.isNull(request.objectId)) {
      query["objectId"] = request.objectId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.paging)) {
      query["paging"] = request.paging;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVersionPageList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVersionPageListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVersionPageListResponse({}));
  }

  /**
   * Variable Version List Query
   * 
   * @param request - DescribeVersionPageListRequest
   * @returns DescribeVersionPageListResponse
   */
  async describeVersionPageList(request: $_model.DescribeVersionPageListRequest): Promise<$_model.DescribeVersionPageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVersionPageListWithOptions(request, runtime);
  }

  /**
   * Sample List Data Download
   * 
   * @param request - DownloadSmapleBatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DownloadSmapleBatchResponse
   */
  async downloadSmapleBatchWithOptions(request: $_model.DownloadSmapleBatchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DownloadSmapleBatchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.batchUuid)) {
      query["batchUuid"] = request.batchUuid;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DownloadSmapleBatch",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DownloadSmapleBatchResponse>(await this.callApi(params, req, runtime), new $_model.DownloadSmapleBatchResponse({}));
  }

  /**
   * Sample List Data Download
   * 
   * @param request - DownloadSmapleBatchRequest
   * @returns DownloadSmapleBatchResponse
   */
  async downloadSmapleBatch(request: $_model.DownloadSmapleBatchRequest): Promise<$_model.DownloadSmapleBatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.downloadSmapleBatchWithOptions(request, runtime);
  }

  /**
   * Custom Variable Test
   * 
   * @param request - ExpressionTestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExpressionTestResponse
   */
  async expressionTestWithOptions(request: $_model.ExpressionTestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExpressionTestResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.expression)) {
      query["expression"] = request.expression;
    }

    if (!$dara.isNull(request.expressionVariable)) {
      query["expressionVariable"] = request.expressionVariable;
    }

    if (!$dara.isNull(request.expressionVariableIds)) {
      query["expressionVariableIds"] = request.expressionVariableIds;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.scene)) {
      query["scene"] = request.scene;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExpressionTest",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExpressionTestResponse>(await this.callApi(params, req, runtime), new $_model.ExpressionTestResponse({}));
  }

  /**
   * Custom Variable Test
   * 
   * @param request - ExpressionTestRequest
   * @returns ExpressionTestResponse
   */
  async expressionTest(request: $_model.ExpressionTestRequest): Promise<$_model.ExpressionTestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.expressionTestWithOptions(request, runtime);
  }

  /**
   * File Upload
   * 
   * @param request - FileUploadRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FileUploadResponse
   */
  async fileUploadWithOptions(request: $_model.FileUploadRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FileUploadResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.tab)) {
      query["Tab"] = request.tab;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FileUpload",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FileUploadResponse>(await this.callApi(params, req, runtime), new $_model.FileUploadResponse({}));
  }

  /**
   * File Upload
   * 
   * @param request - FileUploadRequest
   * @returns FileUploadResponse
   */
  async fileUpload(request: $_model.FileUploadRequest): Promise<$_model.FileUploadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.fileUploadWithOptions(request, runtime);
  }

  /**
   * Batch Import
   * 
   * @param request - ImportFieldRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportFieldResponse
   */
  async importFieldWithOptions(request: $_model.ImportFieldRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportFieldResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["RegId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportField",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportFieldResponse>(await this.callApi(params, req, runtime), new $_model.ImportFieldResponse({}));
  }

  /**
   * Batch Import
   * 
   * @param request - ImportFieldRequest
   * @returns ImportFieldResponse
   */
  async importField(request: $_model.ImportFieldRequest): Promise<$_model.ImportFieldResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importFieldWithOptions(request, runtime);
  }

  /**
   * Create or Import Name List
   * 
   * @param request - ImportNameListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportNameListResponse
   */
  async importNameListWithOptions(request: $_model.ImportNameListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportNameListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.createType)) {
      query["createType"] = request.createType;
    }

    if (!$dara.isNull(request.data)) {
      query["data"] = request.data;
    }

    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.importType)) {
      query["importType"] = request.importType;
    }

    if (!$dara.isNull(request.memo)) {
      query["memo"] = request.memo;
    }

    if (!$dara.isNull(request.nameListType)) {
      query["nameListType"] = request.nameListType;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.title)) {
      query["title"] = request.title;
    }

    if (!$dara.isNull(request.variableId)) {
      query["variableId"] = request.variableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportNameList",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportNameListResponse>(await this.callApi(params, req, runtime), new $_model.ImportNameListResponse({}));
  }

  /**
   * Create or Import Name List
   * 
   * @param request - ImportNameListRequest
   * @returns ImportNameListResponse
   */
  async importNameList(request: $_model.ImportNameListRequest): Promise<$_model.ImportNameListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importNameListWithOptions(request, runtime);
  }

  /**
   * Import Template Event
   * 
   * @param request - ImportTemplateEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportTemplateEventResponse
   */
  async importTemplateEventWithOptions(request: $_model.ImportTemplateEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportTemplateEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.eventTemplateIds)) {
      query["eventTemplateIds"] = request.eventTemplateIds;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportTemplateEvent",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportTemplateEventResponse>(await this.callApi(params, req, runtime), new $_model.ImportTemplateEventResponse({}));
  }

  /**
   * Import Template Event
   * 
   * @param request - ImportTemplateEventRequest
   * @returns ImportTemplateEventResponse
   */
  async importTemplateEvent(request: $_model.ImportTemplateEventRequest): Promise<$_model.ImportTemplateEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importTemplateEventWithOptions(request, runtime);
  }

  /**
   * Query Variable Definition
   * 
   * @param request - ListVariableDefineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVariableDefineResponse
   */
  async listVariableDefineWithOptions(request: $_model.ListVariableDefineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVariableDefineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.allowBind)) {
      query["allowBind"] = request.allowBind;
    }

    if (!$dara.isNull(request.chargingMode)) {
      query["chargingMode"] = request.chargingMode;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.paging)) {
      query["paging"] = request.paging;
    }

    if (!$dara.isNull(request.queryContent)) {
      query["queryContent"] = request.queryContent;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.roleType)) {
      query["roleType"] = request.roleType;
    }

    if (!$dara.isNull(request.scenesStr)) {
      query["scenesStr"] = request.scenesStr;
    }

    if (!$dara.isNull(request.source)) {
      query["source"] = request.source;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.title)) {
      query["title"] = request.title;
    }

    if (!$dara.isNull(request.typesStr)) {
      query["typesStr"] = request.typesStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVariableDefine",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVariableDefineResponse>(await this.callApi(params, req, runtime), new $_model.ListVariableDefineResponse({}));
  }

  /**
   * Query Variable Definition
   * 
   * @param request - ListVariableDefineRequest
   * @returns ListVariableDefineResponse
   */
  async listVariableDefine(request: $_model.ListVariableDefineRequest): Promise<$_model.ListVariableDefineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVariableDefineWithOptions(request, runtime);
  }

  /**
   * Delete
   * 
   * @param request - ModelDeleteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelDeleteResponse
   */
  async modelDeleteWithOptions(request: $_model.ModelDeleteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModelDeleteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.modelName)) {
      query["ModelName"] = request.modelName;
    }

    if (!$dara.isNull(request.regId)) {
      query["RegId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelDelete",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelDeleteResponse>(await this.callApi(params, req, runtime), new $_model.ModelDeleteResponse({}));
  }

  /**
   * Delete
   * 
   * @param request - ModelDeleteRequest
   * @returns ModelDeleteResponse
   */
  async modelDelete(request: $_model.ModelDeleteRequest): Promise<$_model.ModelDeleteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modelDeleteWithOptions(request, runtime);
  }

  /**
   * File Upload
   * 
   * @param request - ModelFileUploadRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelFileUploadResponse
   */
  async modelFileUploadWithOptions(request: $_model.ModelFileUploadRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModelFileUploadResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.objectName)) {
      query["ObjectName"] = request.objectName;
    }

    if (!$dara.isNull(request.regId)) {
      query["RegId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelFileUpload",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelFileUploadResponse>(await this.callApi(params, req, runtime), new $_model.ModelFileUploadResponse({}));
  }

  /**
   * File Upload
   * 
   * @param request - ModelFileUploadRequest
   * @returns ModelFileUploadResponse
   */
  async modelFileUpload(request: $_model.ModelFileUploadRequest): Promise<$_model.ModelFileUploadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modelFileUploadWithOptions(request, runtime);
  }

  /**
   * Enable, Disable
   * 
   * @param request - ModelIsUsingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelIsUsingResponse
   */
  async modelIsUsingWithOptions(request: $_model.ModelIsUsingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModelIsUsingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.modelCode)) {
      query["ModelCode"] = request.modelCode;
    }

    if (!$dara.isNull(request.modelId)) {
      query["ModelId"] = request.modelId;
    }

    if (!$dara.isNull(request.modelName)) {
      query["ModelName"] = request.modelName;
    }

    if (!$dara.isNull(request.regId)) {
      query["RegId"] = request.regId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelIsUsing",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelIsUsingResponse>(await this.callApi(params, req, runtime), new $_model.ModelIsUsingResponse({}));
  }

  /**
   * Enable, Disable
   * 
   * @param request - ModelIsUsingRequest
   * @returns ModelIsUsingResponse
   */
  async modelIsUsing(request: $_model.ModelIsUsingRequest): Promise<$_model.ModelIsUsingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modelIsUsingWithOptions(request, runtime);
  }

  /**
   * Is Model Name Duplicated
   * 
   * @param request - ModelNameIsDuplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelNameIsDuplicationResponse
   */
  async modelNameIsDuplicationWithOptions(request: $_model.ModelNameIsDuplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModelNameIsDuplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.modelName)) {
      query["ModelName"] = request.modelName;
    }

    if (!$dara.isNull(request.regId)) {
      query["RegId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelNameIsDuplication",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelNameIsDuplicationResponse>(await this.callApi(params, req, runtime), new $_model.ModelNameIsDuplicationResponse({}));
  }

  /**
   * Is Model Name Duplicated
   * 
   * @param request - ModelNameIsDuplicationRequest
   * @returns ModelNameIsDuplicationResponse
   */
  async modelNameIsDuplication(request: $_model.ModelNameIsDuplicationRequest): Promise<$_model.ModelNameIsDuplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modelNameIsDuplicationWithOptions(request, runtime);
  }

  /**
   * Template Download
   * 
   * @param request - ModelSampleDownloadRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelSampleDownloadResponse
   */
  async modelSampleDownloadWithOptions(request: $_model.ModelSampleDownloadRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModelSampleDownloadResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regId)) {
      query["RegId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelSampleDownload",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelSampleDownloadResponse>(await this.callApi(params, req, runtime), new $_model.ModelSampleDownloadResponse({}));
  }

  /**
   * Template Download
   * 
   * @param request - ModelSampleDownloadRequest
   * @returns ModelSampleDownloadResponse
   */
  async modelSampleDownload(request: $_model.ModelSampleDownloadRequest): Promise<$_model.ModelSampleDownloadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modelSampleDownloadWithOptions(request, runtime);
  }

  /**
   * Update Memo
   * 
   * @param request - ModifyAppKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppKeyResponse
   */
  async modifyAppKeyWithOptions(request: $_model.ModifyAppKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAppKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.appKey)) {
      query["appKey"] = request.appKey;
    }

    if (!$dara.isNull(request.memo)) {
      query["memo"] = request.memo;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAppKey",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAppKeyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAppKeyResponse({}));
  }

  /**
   * Update Memo
   * 
   * @param request - ModifyAppKeyRequest
   * @returns ModifyAppKeyResponse
   */
  async modifyAppKey(request: $_model.ModifyAppKeyRequest): Promise<$_model.ModifyAppKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppKeyWithOptions(request, runtime);
  }

  /**
   * Edit Accumulated Variable
   * 
   * @param request - ModifyCustVariableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCustVariableResponse
   */
  async modifyCustVariableWithOptions(request: $_model.ModifyCustVariableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCustVariableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.condition)) {
      query["condition"] = request.condition;
    }

    if (!$dara.isNull(request.dataVersion)) {
      query["dataVersion"] = request.dataVersion;
    }

    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.eventCodes)) {
      query["eventCodes"] = request.eventCodes;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.outputs)) {
      query["outputs"] = request.outputs;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCustVariable",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCustVariableResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCustVariableResponse({}));
  }

  /**
   * Edit Accumulated Variable
   * 
   * @param request - ModifyCustVariableRequest
   * @returns ModifyCustVariableResponse
   */
  async modifyCustVariable(request: $_model.ModifyCustVariableRequest): Promise<$_model.ModifyCustVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCustVariableWithOptions(request, runtime);
  }

  /**
   * Edit Event
   * 
   * @param request - ModifyEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyEventResponse
   */
  async modifyEventWithOptions(request: $_model.ModifyEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.bizVersion)) {
      query["bizVersion"] = request.bizVersion;
    }

    if (!$dara.isNull(request.createType)) {
      query["createType"] = request.createType;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.eventName)) {
      query["eventName"] = request.eventName;
    }

    if (!$dara.isNull(request.inputFieldsStr)) {
      query["inputFieldsStr"] = request.inputFieldsStr;
    }

    if (!$dara.isNull(request.memo)) {
      query["memo"] = request.memo;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.templateType)) {
      query["templateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyEvent",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyEventResponse>(await this.callApi(params, req, runtime), new $_model.ModifyEventResponse({}));
  }

  /**
   * Edit Event
   * 
   * @param request - ModifyEventRequest
   * @returns ModifyEventResponse
   */
  async modifyEvent(request: $_model.ModifyEventRequest): Promise<$_model.ModifyEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyEventWithOptions(request, runtime);
  }

  /**
   * Modify Event Status
   * 
   * @param request - ModifyEventStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyEventStatusResponse
   */
  async modifyEventStatusWithOptions(request: $_model.ModifyEventStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyEventStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.createType)) {
      query["createType"] = request.createType;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.fromEventSatus)) {
      query["fromEventSatus"] = request.fromEventSatus;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.toEventSatus)) {
      query["toEventSatus"] = request.toEventSatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyEventStatus",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyEventStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyEventStatusResponse({}));
  }

  /**
   * Modify Event Status
   * 
   * @param request - ModifyEventStatusRequest
   * @returns ModifyEventStatusResponse
   */
  async modifyEventStatus(request: $_model.ModifyEventStatusRequest): Promise<$_model.ModifyEventStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyEventStatusWithOptions(request, runtime);
  }

  /**
   * Edit Custom Variable
   * 
   * @param request - ModifyExpressionVariableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyExpressionVariableResponse
   */
  async modifyExpressionVariableWithOptions(request: $_model.ModifyExpressionVariableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyExpressionVariableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.dataVersion)) {
      query["dataVersion"] = request.dataVersion;
    }

    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.expression)) {
      query["expression"] = request.expression;
    }

    if (!$dara.isNull(request.expressionTitle)) {
      query["expressionTitle"] = request.expressionTitle;
    }

    if (!$dara.isNull(request.expressionVariable)) {
      query["expressionVariable"] = request.expressionVariable;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.outlier)) {
      query["outlier"] = request.outlier;
    }

    if (!$dara.isNull(request.outputs)) {
      query["outputs"] = request.outputs;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.title)) {
      query["title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyExpressionVariable",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyExpressionVariableResponse>(await this.callApi(params, req, runtime), new $_model.ModifyExpressionVariableResponse({}));
  }

  /**
   * Edit Custom Variable
   * 
   * @param request - ModifyExpressionVariableRequest
   * @returns ModifyExpressionVariableResponse
   */
  async modifyExpressionVariable(request: $_model.ModifyExpressionVariableRequest): Promise<$_model.ModifyExpressionVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyExpressionVariableWithOptions(request, runtime);
  }

  /**
   * Modify Field
   * 
   * @param request - ModifyFieldRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFieldResponse
   */
  async modifyFieldWithOptions(request: $_model.ModifyFieldRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyFieldResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.classify)) {
      query["classify"] = request.classify;
    }

    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.enumData)) {
      query["enumData"] = request.enumData;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.title)) {
      query["title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyField",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyFieldResponse>(await this.callApi(params, req, runtime), new $_model.ModifyFieldResponse({}));
  }

  /**
   * Modify Field
   * 
   * @param request - ModifyFieldRequest
   * @returns ModifyFieldResponse
   */
  async modifyField(request: $_model.ModifyFieldRequest): Promise<$_model.ModifyFieldResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyFieldWithOptions(request, runtime);
  }

  /**
   * Modify Policy Priority
   * 
   * @param request - ModifyRulePriorityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRulePriorityResponse
   */
  async modifyRulePriorityWithOptions(request: $_model.ModifyRulePriorityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRulePriorityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.consoleRuleId)) {
      query["consoleRuleId"] = request.consoleRuleId;
    }

    if (!$dara.isNull(request.priority)) {
      query["priority"] = request.priority;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["ruleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyRulePriority",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyRulePriorityResponse>(await this.callApi(params, req, runtime), new $_model.ModifyRulePriorityResponse({}));
  }

  /**
   * Modify Policy Priority
   * 
   * @param request - ModifyRulePriorityRequest
   * @returns ModifyRulePriorityResponse
   */
  async modifyRulePriority(request: $_model.ModifyRulePriorityRequest): Promise<$_model.ModifyRulePriorityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRulePriorityWithOptions(request, runtime);
  }

  /**
   * Change the status of a policy version application
   * 
   * @param request - ModifyRuleStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRuleStatusResponse
   */
  async modifyRuleStatusWithOptions(request: $_model.ModifyRuleStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRuleStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.applyUserId)) {
      query["applyUserId"] = request.applyUserId;
    }

    if (!$dara.isNull(request.applyUserName)) {
      query["applyUserName"] = request.applyUserName;
    }

    if (!$dara.isNull(request.auditRemark)) {
      query["auditRemark"] = request.auditRemark;
    }

    if (!$dara.isNull(request.auditUserId)) {
      query["auditUserId"] = request.auditUserId;
    }

    if (!$dara.isNull(request.auditUserName)) {
      query["auditUserName"] = request.auditUserName;
    }

    if (!$dara.isNull(request.consoleRuleId)) {
      query["consoleRuleId"] = request.consoleRuleId;
    }

    if (!$dara.isNull(request.eventType)) {
      query["eventType"] = request.eventType;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.ruleAuditType)) {
      query["ruleAuditType"] = request.ruleAuditType;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["ruleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleVersionId)) {
      query["ruleVersionId"] = request.ruleVersionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyRuleStatus",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyRuleStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyRuleStatusResponse({}));
  }

  /**
   * Change the status of a policy version application
   * 
   * @param request - ModifyRuleStatusRequest
   * @returns ModifyRuleStatusResponse
   */
  async modifyRuleStatus(request: $_model.ModifyRuleStatusRequest): Promise<$_model.ModifyRuleStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRuleStatusWithOptions(request, runtime);
  }

  /**
   * Activate Service
   * 
   * @param request - OpenConsoleSlsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenConsoleSlsResponse
   */
  async openConsoleSlsWithOptions(request: $_model.OpenConsoleSlsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenConsoleSlsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.scene)) {
      query["scene"] = request.scene;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenConsoleSls",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenConsoleSlsResponse>(await this.callApi(params, req, runtime), new $_model.OpenConsoleSlsResponse({}));
  }

  /**
   * Activate Service
   * 
   * @param request - OpenConsoleSlsRequest
   * @returns OpenConsoleSlsResponse
   */
  async openConsoleSls(request: $_model.OpenConsoleSlsRequest): Promise<$_model.OpenConsoleSlsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openConsoleSlsWithOptions(request, runtime);
  }

  /**
   * Operate Favorites
   * 
   * @param request - OperateFavoriteVariableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateFavoriteVariableResponse
   */
  async operateFavoriteVariableWithOptions(request: $_model.OperateFavoriteVariableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateFavoriteVariableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.operate)) {
      query["operate"] = request.operate;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateFavoriteVariable",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateFavoriteVariableResponse>(await this.callApi(params, req, runtime), new $_model.OperateFavoriteVariableResponse({}));
  }

  /**
   * Operate Favorites
   * 
   * @param request - OperateFavoriteVariableRequest
   * @returns OperateFavoriteVariableResponse
   */
  async operateFavoriteVariable(request: $_model.OperateFavoriteVariableRequest): Promise<$_model.OperateFavoriteVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateFavoriteVariableWithOptions(request, runtime);
  }

  /**
   * Enterprise Verification
   * 
   * @param request - PermissionCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PermissionCheckResponse
   */
  async permissionCheckWithOptions(request: $_model.PermissionCheckRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PermissionCheckResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["RegId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PermissionCheck",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PermissionCheckResponse>(await this.callApi(params, req, runtime), new $_model.PermissionCheckResponse({}));
  }

  /**
   * Enterprise Verification
   * 
   * @param request - PermissionCheckRequest
   * @returns PermissionCheckResponse
   */
  async permissionCheck(request: $_model.PermissionCheckRequest): Promise<$_model.PermissionCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.permissionCheckWithOptions(request, runtime);
  }

  /**
   * createTask
   * 
   * @param request - PocCreateTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PocCreateTaskResponse
   */
  async pocCreateTaskWithOptions(request: $_model.PocCreateTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PocCreateTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dateFormat)) {
      query["DateFormat"] = request.dateFormat;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["RegId"] = request.regId;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PocCreateTask",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PocCreateTaskResponse>(await this.callApi(params, req, runtime), new $_model.PocCreateTaskResponse({}));
  }

  /**
   * createTask
   * 
   * @param request - PocCreateTaskRequest
   * @returns PocCreateTaskResponse
   */
  async pocCreateTask(request: $_model.PocCreateTaskRequest): Promise<$_model.PocCreateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pocCreateTaskWithOptions(request, runtime);
  }

  /**
   * PocGetDownloadUrl
   * 
   * @param request - PocGetDownloadUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PocGetDownloadUrlResponse
   */
  async pocGetDownloadUrlWithOptions(request: $_model.PocGetDownloadUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PocGetDownloadUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PocGetDownloadUrl",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PocGetDownloadUrlResponse>(await this.callApi(params, req, runtime), new $_model.PocGetDownloadUrlResponse({}));
  }

  /**
   * PocGetDownloadUrl
   * 
   * @param request - PocGetDownloadUrlRequest
   * @returns PocGetDownloadUrlResponse
   */
  async pocGetDownloadUrl(request: $_model.PocGetDownloadUrlRequest): Promise<$_model.PocGetDownloadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pocGetDownloadUrlWithOptions(request, runtime);
  }

  /**
   * getToken
   * 
   * @param request - PocGetTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PocGetTokenResponse
   */
  async pocGetTokenWithOptions(request: $_model.PocGetTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PocGetTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["RegId"] = request.regId;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PocGetToken",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PocGetTokenResponse>(await this.callApi(params, req, runtime), new $_model.PocGetTokenResponse({}));
  }

  /**
   * getToken
   * 
   * @param request - PocGetTokenRequest
   * @returns PocGetTokenResponse
   */
  async pocGetToken(request: $_model.PocGetTokenRequest): Promise<$_model.PocGetTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pocGetTokenWithOptions(request, runtime);
  }

  /**
   * sendData
   * 
   * @param request - PocSendDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PocSendDataResponse
   */
  async pocSendDataWithOptions(request: $_model.PocSendDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PocSendDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.batchNo)) {
      query["BatchNo"] = request.batchNo;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.paramsList)) {
      query["ParamsList"] = request.paramsList;
    }

    if (!$dara.isNull(request.regId)) {
      query["RegId"] = request.regId;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PocSendData",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PocSendDataResponse>(await this.callApi(params, req, runtime), new $_model.PocSendDataResponse({}));
  }

  /**
   * sendData
   * 
   * @param request - PocSendDataRequest
   * @returns PocSendDataResponse
   */
  async pocSendData(request: $_model.PocSendDataRequest): Promise<$_model.PocSendDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pocSendDataWithOptions(request, runtime);
  }

  /**
   * Query White-box Strategy Details
   * 
   * @param request - QueryAuthRuleDetailByRuleIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAuthRuleDetailByRuleIdResponse
   */
  async queryAuthRuleDetailByRuleIdWithOptions(request: $_model.QueryAuthRuleDetailByRuleIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAuthRuleDetailByRuleIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.consoleRuleId)) {
      query["consoleRuleId"] = request.consoleRuleId;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["ruleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleVersionId)) {
      query["ruleVersionId"] = request.ruleVersionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAuthRuleDetailByRuleId",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAuthRuleDetailByRuleIdResponse>(await this.callApi(params, req, runtime), new $_model.QueryAuthRuleDetailByRuleIdResponse({}));
  }

  /**
   * Query White-box Strategy Details
   * 
   * @param request - QueryAuthRuleDetailByRuleIdRequest
   * @returns QueryAuthRuleDetailByRuleIdResponse
   */
  async queryAuthRuleDetailByRuleId(request: $_model.QueryAuthRuleDetailByRuleIdRequest): Promise<$_model.QueryAuthRuleDetailByRuleIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAuthRuleDetailByRuleIdWithOptions(request, runtime);
  }

  /**
   * Recall.
   * 
   * @param request - RecallRuleAuditRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecallRuleAuditResponse
   */
  async recallRuleAuditWithOptions(request: $_model.RecallRuleAuditRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecallRuleAuditResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecallRuleAudit",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecallRuleAuditResponse>(await this.callApi(params, req, runtime), new $_model.RecallRuleAuditResponse({}));
  }

  /**
   * Recall.
   * 
   * @param request - RecallRuleAuditRequest
   * @returns RecallRuleAuditResponse
   */
  async recallRuleAudit(request: $_model.RecallRuleAuditRequest): Promise<$_model.RecallRuleAuditResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recallRuleAuditWithOptions(request, runtime);
  }

  /**
   * Delete Event
   * 
   * @param request - RemoveEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveEventResponse
   */
  async removeEventWithOptions(request: $_model.RemoveEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.createType)) {
      query["createType"] = request.createType;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["templateCode"] = request.templateCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveEvent",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveEventResponse>(await this.callApi(params, req, runtime), new $_model.RemoveEventResponse({}));
  }

  /**
   * Delete Event
   * 
   * @param request - RemoveEventRequest
   * @returns RemoveEventResponse
   */
  async removeEvent(request: $_model.RemoveEventRequest): Promise<$_model.RemoveEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeEventWithOptions(request, runtime);
  }

  /**
   * Template Download
   * 
   * @param request - SampleFileDownloadRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SampleFileDownloadResponse
   */
  async sampleFileDownloadWithOptions(request: $_model.SampleFileDownloadRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SampleFileDownloadResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["RegId"] = request.regId;
    }

    if (!$dara.isNull(request.tab)) {
      query["Tab"] = request.tab;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SampleFileDownload",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SampleFileDownloadResponse>(await this.callApi(params, req, runtime), new $_model.SampleFileDownloadResponse({}));
  }

  /**
   * Template Download
   * 
   * @param request - SampleFileDownloadRequest
   * @returns SampleFileDownloadResponse
   */
  async sampleFileDownload(request: $_model.SampleFileDownloadRequest): Promise<$_model.SampleFileDownloadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sampleFileDownloadWithOptions(request, runtime);
  }

  /**
   * Save Custom Columns
   * 
   * @param request - SaveAnalysisColumnRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveAnalysisColumnResponse
   */
  async saveAnalysisColumnWithOptions(request: $_model.SaveAnalysisColumnRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveAnalysisColumnResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.columns)) {
      query["columns"] = request.columns;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveAnalysisColumn",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveAnalysisColumnResponse>(await this.callApi(params, req, runtime), new $_model.SaveAnalysisColumnResponse({}));
  }

  /**
   * Save Custom Columns
   * 
   * @param request - SaveAnalysisColumnRequest
   * @returns SaveAnalysisColumnResponse
   */
  async saveAnalysisColumn(request: $_model.SaveAnalysisColumnRequest): Promise<$_model.SaveAnalysisColumnResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveAnalysisColumnWithOptions(request, runtime);
  }

  /**
   * Bypass/Shunt Configuration
   * 
   * @param request - SaveByPassOrShuntEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveByPassOrShuntEventResponse
   */
  async saveByPassOrShuntEventWithOptions(request: $_model.SaveByPassOrShuntEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveByPassOrShuntEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.eventId)) {
      query["eventId"] = request.eventId;
    }

    if (!$dara.isNull(request.eventName)) {
      query["eventName"] = request.eventName;
    }

    if (!$dara.isNull(request.eventType)) {
      query["eventType"] = request.eventType;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveByPassOrShuntEvent",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveByPassOrShuntEventResponse>(await this.callApi(params, req, runtime), new $_model.SaveByPassOrShuntEventResponse({}));
  }

  /**
   * Bypass/Shunt Configuration
   * 
   * @param request - SaveByPassOrShuntEventRequest
   * @returns SaveByPassOrShuntEventResponse
   */
  async saveByPassOrShuntEvent(request: $_model.SaveByPassOrShuntEventRequest): Promise<$_model.SaveByPassOrShuntEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveByPassOrShuntEventWithOptions(request, runtime);
  }

  /**
   * Start/Stop Bypass Event
   * 
   * @param request - StartOrStopByPassShuntEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartOrStopByPassShuntEventResponse
   */
  async startOrStopByPassShuntEventWithOptions(request: $_model.StartOrStopByPassShuntEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartOrStopByPassShuntEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.eventId)) {
      query["eventId"] = request.eventId;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartOrStopByPassShuntEvent",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartOrStopByPassShuntEventResponse>(await this.callApi(params, req, runtime), new $_model.StartOrStopByPassShuntEventResponse({}));
  }

  /**
   * Start/Stop Bypass Event
   * 
   * @param request - StartOrStopByPassShuntEventRequest
   * @returns StartOrStopByPassShuntEventResponse
   */
  async startOrStopByPassShuntEvent(request: $_model.StartOrStopByPassShuntEventRequest): Promise<$_model.StartOrStopByPassShuntEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startOrStopByPassShuntEventWithOptions(request, runtime);
  }

  /**
   * Start Task Execution
   * 
   * @param request - StartSimulationTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartSimulationTaskResponse
   */
  async startSimulationTaskWithOptions(request: $_model.StartSimulationTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartSimulationTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartSimulationTask",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartSimulationTaskResponse>(await this.callApi(params, req, runtime), new $_model.StartSimulationTaskResponse({}));
  }

  /**
   * Start Task Execution
   * 
   * @param request - StartSimulationTaskRequest
   * @returns StartSimulationTaskResponse
   */
  async startSimulationTask(request: $_model.StartSimulationTaskRequest): Promise<$_model.StartSimulationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startSimulationTaskWithOptions(request, runtime);
  }

  /**
   * Stop Task
   * 
   * @param request - StopSimulationTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopSimulationTaskResponse
   */
  async stopSimulationTaskWithOptions(request: $_model.StopSimulationTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopSimulationTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopSimulationTask",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopSimulationTaskResponse>(await this.callApi(params, req, runtime), new $_model.StopSimulationTaskResponse({}));
  }

  /**
   * Stop Task
   * 
   * @param request - StopSimulationTaskRequest
   * @returns StopSimulationTaskResponse
   */
  async stopSimulationTask(request: $_model.StopSimulationTaskRequest): Promise<$_model.StopSimulationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopSimulationTaskWithOptions(request, runtime);
  }

  /**
   * Custom Variable Switch
   * 
   * @param request - SwitchExpressionVariableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchExpressionVariableResponse
   */
  async switchExpressionVariableWithOptions(request: $_model.SwitchExpressionVariableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchExpressionVariableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.dataVersion)) {
      query["dataVersion"] = request.dataVersion;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchExpressionVariable",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchExpressionVariableResponse>(await this.callApi(params, req, runtime), new $_model.SwitchExpressionVariableResponse({}));
  }

  /**
   * Custom Variable Switch
   * 
   * @param request - SwitchExpressionVariableRequest
   * @returns SwitchExpressionVariableResponse
   */
  async switchExpressionVariable(request: $_model.SwitchExpressionVariableRequest): Promise<$_model.SwitchExpressionVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchExpressionVariableWithOptions(request, runtime);
  }

  /**
   * Field Switch
   * 
   * @param request - SwitchFieldRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchFieldResponse
   */
  async switchFieldWithOptions(request: $_model.SwitchFieldRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchFieldResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.source)) {
      query["source"] = request.source;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchField",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchFieldResponse>(await this.callApi(params, req, runtime), new $_model.SwitchFieldResponse({}));
  }

  /**
   * Field Switch
   * 
   * @param request - SwitchFieldRequest
   * @returns SwitchFieldResponse
   */
  async switchField(request: $_model.SwitchFieldRequest): Promise<$_model.SwitchFieldResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchFieldWithOptions(request, runtime);
  }

  /**
   * Query Variable Enable/Disable
   * 
   * @param request - SwitchQueryVariableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchQueryVariableResponse
   */
  async switchQueryVariableWithOptions(request: $_model.SwitchQueryVariableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchQueryVariableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchQueryVariable",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchQueryVariableResponse>(await this.callApi(params, req, runtime), new $_model.SwitchQueryVariableResponse({}));
  }

  /**
   * Query Variable Enable/Disable
   * 
   * @param request - SwitchQueryVariableRequest
   * @returns SwitchQueryVariableResponse
   */
  async switchQueryVariable(request: $_model.SwitchQueryVariableRequest): Promise<$_model.SwitchQueryVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchQueryVariableWithOptions(request, runtime);
  }

  /**
   * One-click switch online
   * 
   * @param request - SwitchToOnlineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchToOnlineResponse
   */
  async switchToOnlineWithOptions(request: $_model.SwitchToOnlineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchToOnlineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.eventId)) {
      query["eventId"] = request.eventId;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchToOnline",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchToOnlineResponse>(await this.callApi(params, req, runtime), new $_model.SwitchToOnlineResponse({}));
  }

  /**
   * One-click switch online
   * 
   * @param request - SwitchToOnlineRequest
   * @returns SwitchToOnlineResponse
   */
  async switchToOnline(request: $_model.SwitchToOnlineRequest): Promise<$_model.SwitchToOnlineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchToOnlineWithOptions(request, runtime);
  }

  /**
   * Cumulative Variable Switch
   * 
   * @param request - SwitchVariableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchVariableResponse
   */
  async switchVariableWithOptions(request: $_model.SwitchVariableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchVariableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.dataVersion)) {
      query["dataVersion"] = request.dataVersion;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchVariable",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchVariableResponse>(await this.callApi(params, req, runtime), new $_model.SwitchVariableResponse({}));
  }

  /**
   * Cumulative Variable Switch
   * 
   * @param request - SwitchVariableRequest
   * @returns SwitchVariableResponse
   */
  async switchVariable(request: $_model.SwitchVariableRequest): Promise<$_model.SwitchVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchVariableWithOptions(request, runtime);
  }

  /**
   * Determine if the task name is duplicated
   * 
   * @param request - TaskNameByUserIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TaskNameByUserIdResponse
   */
  async taskNameByUserIdWithOptions(request: $_model.TaskNameByUserIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TaskNameByUserIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regId)) {
      query["RegId"] = request.regId;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TaskNameByUserId",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TaskNameByUserIdResponse>(await this.callApi(params, req, runtime), new $_model.TaskNameByUserIdResponse({}));
  }

  /**
   * Determine if the task name is duplicated
   * 
   * @param request - TaskNameByUserIdRequest
   * @returns TaskNameByUserIdResponse
   */
  async taskNameByUserId(request: $_model.TaskNameByUserIdRequest): Promise<$_model.TaskNameByUserIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.taskNameByUserIdWithOptions(request, runtime);
  }

  /**
   * Modify Query Conditions
   * 
   * @param request - UpdateAnalysisConditionFavoriteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAnalysisConditionFavoriteResponse
   */
  async updateAnalysisConditionFavoriteWithOptions(request: $_model.UpdateAnalysisConditionFavoriteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAnalysisConditionFavoriteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.condition)) {
      query["condition"] = request.condition;
    }

    if (!$dara.isNull(request.eventBeginTime)) {
      query["eventBeginTime"] = request.eventBeginTime;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.eventEndTime)) {
      query["eventEndTime"] = request.eventEndTime;
    }

    if (!$dara.isNull(request.fieldName)) {
      query["fieldName"] = request.fieldName;
    }

    if (!$dara.isNull(request.fieldValue)) {
      query["fieldValue"] = request.fieldValue;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAnalysisConditionFavorite",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAnalysisConditionFavoriteResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAnalysisConditionFavoriteResponse({}));
  }

  /**
   * Modify Query Conditions
   * 
   * @param request - UpdateAnalysisConditionFavoriteRequest
   * @returns UpdateAnalysisConditionFavoriteResponse
   */
  async updateAnalysisConditionFavorite(request: $_model.UpdateAnalysisConditionFavoriteRequest): Promise<$_model.UpdateAnalysisConditionFavoriteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAnalysisConditionFavoriteWithOptions(request, runtime);
  }

  /**
   * Approval
   * 
   * @param request - UpdateAuditRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAuditResponse
   */
  async updateAuditWithOptions(request: $_model.UpdateAuditRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAuditResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.auditMsg)) {
      query["auditMsg"] = request.auditMsg;
    }

    if (!$dara.isNull(request.auditRelationType)) {
      query["auditRelationType"] = request.auditRelationType;
    }

    if (!$dara.isNull(request.auditStatus)) {
      query["auditStatus"] = request.auditStatus;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAudit",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAuditResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAuditResponse({}));
  }

  /**
   * Approval
   * 
   * @param request - UpdateAuditRequest
   * @returns UpdateAuditResponse
   */
  async updateAudit(request: $_model.UpdateAuditRequest): Promise<$_model.UpdateAuditResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAuditWithOptions(request, runtime);
  }

  /**
   * Modify Authorization Policy
   * 
   * @param request - UpdateAuthRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAuthRuleResponse
   */
  async updateAuthRuleWithOptions(request: $_model.UpdateAuthRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAuthRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.consoleRuleId)) {
      query["consoleRuleId"] = request.consoleRuleId;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.ruleActions)) {
      query["ruleActions"] = request.ruleActions;
    }

    if (!$dara.isNull(request.ruleExpressions)) {
      query["ruleExpressions"] = request.ruleExpressions;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["ruleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleVersionId)) {
      query["ruleVersionId"] = request.ruleVersionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAuthRule",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAuthRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAuthRuleResponse({}));
  }

  /**
   * Modify Authorization Policy
   * 
   * @param request - UpdateAuthRuleRequest
   * @returns UpdateAuthRuleResponse
   */
  async updateAuthRule(request: $_model.UpdateAuthRuleRequest): Promise<$_model.UpdateAuthRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAuthRuleWithOptions(request, runtime);
  }

  /**
   * Edit Bypass Event
   * 
   * @param request - UpdateByPassShuntEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateByPassShuntEventResponse
   */
  async updateByPassShuntEventWithOptions(request: $_model.UpdateByPassShuntEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateByPassShuntEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.eventId)) {
      query["eventId"] = request.eventId;
    }

    if (!$dara.isNull(request.eventName)) {
      query["eventName"] = request.eventName;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateByPassShuntEvent",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateByPassShuntEventResponse>(await this.callApi(params, req, runtime), new $_model.UpdateByPassShuntEventResponse({}));
  }

  /**
   * Edit Bypass Event
   * 
   * @param request - UpdateByPassShuntEventRequest
   * @returns UpdateByPassShuntEventResponse
   */
  async updateByPassShuntEvent(request: $_model.UpdateByPassShuntEventRequest): Promise<$_model.UpdateByPassShuntEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateByPassShuntEventWithOptions(request, runtime);
  }

  /**
   * Modify Data Source
   * 
   * @param request - UpdateDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataSourceResponse
   */
  async updateDataSourceWithOptions(request: $_model.UpdateDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.ossKey)) {
      query["ossKey"] = request.ossKey;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataSource",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataSourceResponse({}));
  }

  /**
   * Modify Data Source
   * 
   * @param request - UpdateDataSourceRequest
   * @returns UpdateDataSourceResponse
   */
  async updateDataSource(request: $_model.UpdateDataSourceRequest): Promise<$_model.UpdateDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataSourceWithOptions(request, runtime);
  }

  /**
   * Modify Custom Query Variable
   * 
   * @param request - UpdateQueryVariableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateQueryVariableResponse
   */
  async updateQueryVariableWithOptions(request: $_model.UpdateQueryVariableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateQueryVariableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.dataSourceCode)) {
      query["dataSourceCode"] = request.dataSourceCode;
    }

    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.expression)) {
      query["expression"] = request.expression;
    }

    if (!$dara.isNull(request.expressionTitle)) {
      query["expressionTitle"] = request.expressionTitle;
    }

    if (!$dara.isNull(request.expressionVariable)) {
      query["expressionVariable"] = request.expressionVariable;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.outlier)) {
      query["outlier"] = request.outlier;
    }

    if (!$dara.isNull(request.outputs)) {
      query["outputs"] = request.outputs;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.title)) {
      query["title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateQueryVariable",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateQueryVariableResponse>(await this.callApi(params, req, runtime), new $_model.UpdateQueryVariableResponse({}));
  }

  /**
   * Modify Custom Query Variable
   * 
   * @param request - UpdateQueryVariableRequest
   * @returns UpdateQueryVariableResponse
   */
  async updateQueryVariable(request: $_model.UpdateQueryVariableRequest): Promise<$_model.UpdateQueryVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateQueryVariableWithOptions(request, runtime);
  }

  /**
   * Update Policy
   * 
   * @param request - UpdateRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRuleResponse
   */
  async updateRuleWithOptions(request: $_model.UpdateRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.consoleRuleId)) {
      query["consoleRuleId"] = request.consoleRuleId;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.logicExpression)) {
      query["logicExpression"] = request.logicExpression;
    }

    if (!$dara.isNull(request.memo)) {
      query["memo"] = request.memo;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.ruleActions)) {
      query["ruleActions"] = request.ruleActions;
    }

    if (!$dara.isNull(request.ruleBody)) {
      query["ruleBody"] = request.ruleBody;
    }

    if (!$dara.isNull(request.ruleExpressions)) {
      query["ruleExpressions"] = request.ruleExpressions;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["ruleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["ruleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.ruleStatus)) {
      query["ruleStatus"] = request.ruleStatus;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["ruleType"] = request.ruleType;
    }

    if (!$dara.isNull(request.ruleVersionId)) {
      query["ruleVersionId"] = request.ruleVersionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRule",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRuleResponse({}));
  }

  /**
   * Update Policy
   * 
   * @param request - UpdateRuleRequest
   * @returns UpdateRuleResponse
   */
  async updateRule(request: $_model.UpdateRuleRequest): Promise<$_model.UpdateRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRuleWithOptions(request, runtime);
  }

  /**
   * Update Basic Policy Information
   * 
   * @param request - UpdateRuleBaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRuleBaseResponse
   */
  async updateRuleBaseWithOptions(request: $_model.UpdateRuleBaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRuleBaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.consoleRuleId)) {
      query["consoleRuleId"] = request.consoleRuleId;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["eventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.memo)) {
      query["memo"] = request.memo;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["ruleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["ruleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRuleBase",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRuleBaseResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRuleBaseResponse({}));
  }

  /**
   * Update Basic Policy Information
   * 
   * @param request - UpdateRuleBaseRequest
   * @returns UpdateRuleBaseResponse
   */
  async updateRuleBase(request: $_model.UpdateRuleBaseRequest): Promise<$_model.UpdateRuleBaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRuleBaseWithOptions(request, runtime);
  }

  /**
   * Batch Update Samples
   * 
   * @param request - UpdateSampleBatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSampleBatchResponse
   */
  async updateSampleBatchWithOptions(request: $_model.UpdateSampleBatchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSampleBatchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.ids)) {
      query["ids"] = request.ids;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.tags)) {
      query["tags"] = request.tags;
    }

    if (!$dara.isNull(request.versions)) {
      query["versions"] = request.versions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSampleBatch",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSampleBatchResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSampleBatchResponse({}));
  }

  /**
   * Batch Update Samples
   * 
   * @param request - UpdateSampleBatchRequest
   * @returns UpdateSampleBatchResponse
   */
  async updateSampleBatch(request: $_model.UpdateSampleBatchRequest): Promise<$_model.UpdateSampleBatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSampleBatchWithOptions(request, runtime);
  }

  /**
   * Sample Inspection
   * 
   * @param request - UploadFileCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadFileCheckResponse
   */
  async uploadFileCheckWithOptions(request: $_model.UploadFileCheckRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadFileCheckResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.batchName)) {
      query["batchName"] = request.batchName;
    }

    if (!$dara.isNull(request.dataType)) {
      query["dataType"] = request.dataType;
    }

    if (!$dara.isNull(request.ossFileName)) {
      query["ossFileName"] = request.ossFileName;
    }

    if (!$dara.isNull(request.regId)) {
      query["regId"] = request.regId;
    }

    if (!$dara.isNull(request.sampleTagType)) {
      query["sampleTagType"] = request.sampleTagType;
    }

    if (!$dara.isNull(request.serviceList)) {
      query["serviceList"] = request.serviceList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadFileCheck",
      version: "2021-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadFileCheckResponse>(await this.callApi(params, req, runtime), new $_model.UploadFileCheckResponse({}));
  }

  /**
   * Sample Inspection
   * 
   * @param request - UploadFileCheckRequest
   * @returns UploadFileCheckResponse
   */
  async uploadFileCheck(request: $_model.UploadFileCheckRequest): Promise<$_model.UploadFileCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadFileCheckWithOptions(request, runtime);
  }

}
