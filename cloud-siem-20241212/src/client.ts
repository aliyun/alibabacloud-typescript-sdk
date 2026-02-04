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
    this._endpoint = this.getEndpoint("cloud-siem", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 检查升级项
   * 
   * @param request - CheckUpgradeItemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckUpgradeItemResponse
   */
  async checkUpgradeItemWithOptions(request: $_model.CheckUpgradeItemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckUpgradeItemResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.upgradeItemId)) {
      body["UpgradeItemId"] = request.upgradeItemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckUpgradeItem",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckUpgradeItemResponse>(await this.callApi(params, req, runtime), new $_model.CheckUpgradeItemResponse({}));
  }

  /**
   * 检查升级项
   * 
   * @param request - CheckUpgradeItemRequest
   * @returns CheckUpgradeItemResponse
   */
  async checkUpgradeItem(request: $_model.CheckUpgradeItemRequest): Promise<$_model.CheckUpgradeItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkUpgradeItemWithOptions(request, runtime);
  }

  /**
   * 创建数据源
   * 
   * @param request - CreateDataIngestionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataIngestionResponse
   */
  async createDataIngestionWithOptions(request: $_model.CreateDataIngestionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataIngestionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.capacityCount)) {
      body["CapacityCount"] = request.capacityCount;
    }

    if (!$dara.isNull(request.dataIngestionMode)) {
      body["DataIngestionMode"] = request.dataIngestionMode;
    }

    if (!$dara.isNull(request.dataIngestionStateCode)) {
      body["DataIngestionStateCode"] = request.dataIngestionStateCode;
    }

    if (!$dara.isNull(request.dataIngestionType)) {
      body["DataIngestionType"] = request.dataIngestionType;
    }

    if (!$dara.isNull(request.dataSourceEditable)) {
      body["DataSourceEditable"] = request.dataSourceEditable;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      body["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.normalizationRuleEditable)) {
      body["NormalizationRuleEditable"] = request.normalizationRuleEditable;
    }

    if (!$dara.isNull(request.normalizationRuleId)) {
      body["NormalizationRuleId"] = request.normalizationRuleId;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.scanDataSourceId)) {
      body["ScanDataSourceId"] = request.scanDataSourceId;
    }

    if (!$dara.isNull(request.streamJobId)) {
      body["StreamJobId"] = request.streamJobId;
    }

    if (!$dara.isNull(request.updateTime)) {
      body["UpdateTime"] = request.updateTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataIngestion",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataIngestionResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataIngestionResponse({}));
  }

  /**
   * 创建数据源
   * 
   * @param request - CreateDataIngestionRequest
   * @returns CreateDataIngestionResponse
   */
  async createDataIngestion(request: $_model.CreateDataIngestionRequest): Promise<$_model.CreateDataIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataIngestionWithOptions(request, runtime);
  }

  /**
   * 创建数据集
   * 
   * @param request - CreateDataSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataSetResponse
   */
  async createDataSetWithOptions(request: $_model.CreateDataSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataSetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSetDescription)) {
      body["DataSetDescription"] = request.dataSetDescription;
    }

    if (!$dara.isNull(request.dataSetFieldKeyName)) {
      body["DataSetFieldKeyName"] = request.dataSetFieldKeyName;
    }

    if (!$dara.isNull(request.dataSetFileName)) {
      body["DataSetFileName"] = request.dataSetFileName;
    }

    if (!$dara.isNull(request.dataSetName)) {
      body["DataSetName"] = request.dataSetName;
    }

    if (!$dara.isNull(request.dataSetStatus)) {
      body["DataSetStatus"] = request.dataSetStatus;
    }

    if (!$dara.isNull(request.dataSetType)) {
      body["DataSetType"] = request.dataSetType;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ipWhitelistRecognizers)) {
      bodyFlat["IpWhitelistRecognizers"] = request.ipWhitelistRecognizers;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataSet",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
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
    return await this.createDataSetWithOptions(request, runtime);
  }

  /**
   * 创建数据源
   * 
   * @param tmpReq - CreateDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataSourceResponse
   */
  async createDataSourceWithOptions(tmpReq: $_model.CreateDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataSourceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDataSourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dataSourceIds)) {
      request.dataSourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataSourceIds, "DataSourceIds", "json");
    }

    if (!$dara.isNull(tmpReq.dataSourceReferences)) {
      request.dataSourceReferencesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataSourceReferences, "DataSourceReferences", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSourceFrom)) {
      body["DataSourceFrom"] = request.dataSourceFrom;
    }

    if (!$dara.isNull(request.dataSourceIdsShrink)) {
      body["DataSourceIds"] = request.dataSourceIdsShrink;
    }

    if (!$dara.isNull(request.dataSourceName)) {
      body["DataSourceName"] = request.dataSourceName;
    }

    if (!$dara.isNull(request.dataSourceRecognizeEnabled)) {
      body["DataSourceRecognizeEnabled"] = request.dataSourceRecognizeEnabled;
    }

    if (!$dara.isNull(request.dataSourceRecognizer)) {
      body["DataSourceRecognizer"] = request.dataSourceRecognizer;
    }

    if (!$dara.isNull(request.dataSourceReferencesShrink)) {
      body["DataSourceReferences"] = request.dataSourceReferencesShrink;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSourceStores)) {
      bodyFlat["DataSourceStores"] = request.dataSourceStores;
    }

    if (!$dara.isNull(request.dataSourceTemplateId)) {
      body["DataSourceTemplateId"] = request.dataSourceTemplateId;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.logProjectName)) {
      body["LogProjectName"] = request.logProjectName;
    }

    if (!$dara.isNull(request.logRegionId)) {
      body["LogRegionId"] = request.logRegionId;
    }

    if (!$dara.isNull(request.logStoreName)) {
      body["LogStoreName"] = request.logStoreName;
    }

    if (!$dara.isNull(request.logUserId)) {
      body["LogUserId"] = request.logUserId;
    }

    if (!$dara.isNull(request.order)) {
      body["Order"] = request.order;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataSource",
      version: "2024-12-12",
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
   * 创建数据源
   * 
   * @param request - CreateDataSourceRequest
   * @returns CreateDataSourceResponse
   */
  async createDataSource(request: $_model.CreateDataSourceRequest): Promise<$_model.CreateDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataSourceWithOptions(request, runtime);
  }

  /**
   * 创建检测规则
   * 
   * @param request - CreateDetectionRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDetectionRuleResponse
   */
  async createDetectionRuleWithOptions(request: $_model.CreateDetectionRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDetectionRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertAttCk)) {
      body["AlertAttCk"] = request.alertAttCk;
    }

    if (!$dara.isNull(request.alertDescription)) {
      body["AlertDescription"] = request.alertDescription;
    }

    if (!$dara.isNull(request.alertLevel)) {
      body["AlertLevel"] = request.alertLevel;
    }

    if (!$dara.isNull(request.alertName)) {
      body["AlertName"] = request.alertName;
    }

    if (!$dara.isNull(request.alertSchemaId)) {
      body["AlertSchemaId"] = request.alertSchemaId;
    }

    if (!$dara.isNull(request.alertTacticId)) {
      body["AlertTacticId"] = request.alertTacticId;
    }

    if (!$dara.isNull(request.alertThresholdCount)) {
      body["AlertThresholdCount"] = request.alertThresholdCount;
    }

    if (!$dara.isNull(request.alertThresholdGroup)) {
      body["AlertThresholdGroup"] = request.alertThresholdGroup;
    }

    if (!$dara.isNull(request.alertThresholdPeriod)) {
      body["AlertThresholdPeriod"] = request.alertThresholdPeriod;
    }

    if (!$dara.isNull(request.alertType)) {
      body["AlertType"] = request.alertType;
    }

    if (!$dara.isNull(request.detectionExpressionContent)) {
      body["DetectionExpressionContent"] = request.detectionExpressionContent;
    }

    if (!$dara.isNull(request.detectionExpressionType)) {
      body["DetectionExpressionType"] = request.detectionExpressionType;
    }

    if (!$dara.isNull(request.detectionRuleDescription)) {
      body["DetectionRuleDescription"] = request.detectionRuleDescription;
    }

    if (!$dara.isNull(request.detectionRuleName)) {
      body["DetectionRuleName"] = request.detectionRuleName;
    }

    if (!$dara.isNull(request.detectionRuleStatus)) {
      body["DetectionRuleStatus"] = request.detectionRuleStatus;
    }

    if (!$dara.isNull(request.detectionRuleTemplateId)) {
      body["DetectionRuleTemplateId"] = request.detectionRuleTemplateId;
    }

    if (!$dara.isNull(request.detectionRuleTemplateVersion)) {
      body["DetectionRuleTemplateVersion"] = request.detectionRuleTemplateVersion;
    }

    if (!$dara.isNull(request.detectionRuleType)) {
      body["DetectionRuleType"] = request.detectionRuleType;
    }

    if (!$dara.isNull(request.entityMappings)) {
      body["EntityMappings"] = request.entityMappings;
    }

    if (!$dara.isNull(request.incidentAggregationExpression)) {
      body["IncidentAggregationExpression"] = request.incidentAggregationExpression;
    }

    if (!$dara.isNull(request.incidentAggregationType)) {
      body["IncidentAggregationType"] = request.incidentAggregationType;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.logCategoryId)) {
      body["LogCategoryId"] = request.logCategoryId;
    }

    if (!$dara.isNull(request.logSchemaId)) {
      body["LogSchemaId"] = request.logSchemaId;
    }

    if (!$dara.isNull(request.playbookParameters)) {
      body["PlaybookParameters"] = request.playbookParameters;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.scheduleBeginTime)) {
      body["ScheduleBeginTime"] = request.scheduleBeginTime;
    }

    if (!$dara.isNull(request.scheduleExpression)) {
      body["ScheduleExpression"] = request.scheduleExpression;
    }

    if (!$dara.isNull(request.scheduleMaxRetries)) {
      body["ScheduleMaxRetries"] = request.scheduleMaxRetries;
    }

    if (!$dara.isNull(request.scheduleMaxTimeout)) {
      body["ScheduleMaxTimeout"] = request.scheduleMaxTimeout;
    }

    if (!$dara.isNull(request.scheduleType)) {
      body["ScheduleType"] = request.scheduleType;
    }

    if (!$dara.isNull(request.scheduleWindow)) {
      body["ScheduleWindow"] = request.scheduleWindow;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDetectionRule",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDetectionRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateDetectionRuleResponse({}));
  }

  /**
   * 创建检测规则
   * 
   * @param request - CreateDetectionRuleRequest
   * @returns CreateDetectionRuleResponse
   */
  async createDetectionRule(request: $_model.CreateDetectionRuleRequest): Promise<$_model.CreateDetectionRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDetectionRuleWithOptions(request, runtime);
  }

  /**
   * 创建导出任务
   * 
   * @param request - CreateExportTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExportTaskResponse
   */
  async createExportTaskWithOptions(request: $_model.CreateExportTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateExportTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.exportTaskParameter)) {
      body["ExportTaskParameter"] = request.exportTaskParameter;
    }

    if (!$dara.isNull(request.exportTaskType)) {
      body["ExportTaskType"] = request.exportTaskType;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateExportTask",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateExportTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateExportTaskResponse({}));
  }

  /**
   * 创建导出任务
   * 
   * @param request - CreateExportTaskRequest
   * @returns CreateExportTaskResponse
   */
  async createExportTask(request: $_model.CreateExportTaskRequest): Promise<$_model.CreateExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createExportTaskWithOptions(request, runtime);
  }

  /**
   * 创建LogStore
   * 
   * @param request - CreateLogStoreRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLogStoreResponse
   */
  async createLogStoreWithOptions(request: $_model.CreateLogStoreRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLogStoreResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.logProjectName)) {
      body["LogProjectName"] = request.logProjectName;
    }

    if (!$dara.isNull(request.logRegionId)) {
      body["LogRegionId"] = request.logRegionId;
    }

    if (!$dara.isNull(request.logStoreName)) {
      body["LogStoreName"] = request.logStoreName;
    }

    if (!$dara.isNull(request.logUserId)) {
      body["LogUserId"] = request.logUserId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLogStore",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLogStoreResponse>(await this.callApi(params, req, runtime), new $_model.CreateLogStoreResponse({}));
  }

  /**
   * 创建LogStore
   * 
   * @param request - CreateLogStoreRequest
   * @returns CreateLogStoreResponse
   */
  async createLogStore(request: $_model.CreateLogStoreRequest): Promise<$_model.CreateLogStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLogStoreWithOptions(request, runtime);
  }

  /**
   * 创建标准化规则
   * 
   * @param tmpReq - CreateNormalizationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNormalizationRuleResponse
   */
  async createNormalizationRuleWithOptions(tmpReq: $_model.CreateNormalizationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNormalizationRuleResponse> {
    tmpReq.validate();
    let request = new $_model.CreateNormalizationRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.normalizationRuleIds)) {
      request.normalizationRuleIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.normalizationRuleIds, "NormalizationRuleIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.extendContentPacked)) {
      body["ExtendContentPacked"] = request.extendContentPacked;
    }

    if (!$dara.isNull(request.extendFieldStoreMode)) {
      body["ExtendFieldStoreMode"] = request.extendFieldStoreMode;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.normalizationCategoryId)) {
      body["NormalizationCategoryId"] = request.normalizationCategoryId;
    }

    if (!$dara.isNull(request.normalizationRuleDescription)) {
      body["NormalizationRuleDescription"] = request.normalizationRuleDescription;
    }

    if (!$dara.isNull(request.normalizationRuleExpression)) {
      body["NormalizationRuleExpression"] = request.normalizationRuleExpression;
    }

    if (!$dara.isNull(request.normalizationRuleFormat)) {
      body["NormalizationRuleFormat"] = request.normalizationRuleFormat;
    }

    if (!$dara.isNull(request.normalizationRuleIdsShrink)) {
      body["NormalizationRuleIds"] = request.normalizationRuleIdsShrink;
    }

    if (!$dara.isNull(request.normalizationRuleMode)) {
      body["NormalizationRuleMode"] = request.normalizationRuleMode;
    }

    if (!$dara.isNull(request.normalizationRuleName)) {
      body["NormalizationRuleName"] = request.normalizationRuleName;
    }

    if (!$dara.isNull(request.normalizationRuleType)) {
      body["NormalizationRuleType"] = request.normalizationRuleType;
    }

    if (!$dara.isNull(request.normalizationRuleVersion)) {
      body["NormalizationRuleVersion"] = request.normalizationRuleVersion;
    }

    if (!$dara.isNull(request.normalizationSchemaId)) {
      body["NormalizationSchemaId"] = request.normalizationSchemaId;
    }

    if (!$dara.isNull(request.orderField)) {
      body["OrderField"] = request.orderField;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.vendorId)) {
      body["VendorId"] = request.vendorId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNormalizationRule",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNormalizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateNormalizationRuleResponse({}));
  }

  /**
   * 创建标准化规则
   * 
   * @param request - CreateNormalizationRuleRequest
   * @returns CreateNormalizationRuleResponse
   */
  async createNormalizationRule(request: $_model.CreateNormalizationRuleRequest): Promise<$_model.CreateNormalizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNormalizationRuleWithOptions(request, runtime);
  }

  /**
   * 创建标准化结构
   * 
   * @param request - CreateNormalizationSchemaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNormalizationSchemaResponse
   */
  async createNormalizationSchemaWithOptions(request: $_model.CreateNormalizationSchemaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNormalizationSchemaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.normalizationCategoryId)) {
      body["NormalizationCategoryId"] = request.normalizationCategoryId;
    }

    if (!$dara.isNull(request.normalizationFields)) {
      body["NormalizationFields"] = request.normalizationFields;
    }

    if (!$dara.isNull(request.normalizationSchemaDescription)) {
      body["NormalizationSchemaDescription"] = request.normalizationSchemaDescription;
    }

    if (!$dara.isNull(request.normalizationSchemaId)) {
      body["NormalizationSchemaId"] = request.normalizationSchemaId;
    }

    if (!$dara.isNull(request.normalizationSchemaName)) {
      body["NormalizationSchemaName"] = request.normalizationSchemaName;
    }

    if (!$dara.isNull(request.normalizationSchemaType)) {
      body["NormalizationSchemaType"] = request.normalizationSchemaType;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.targetLogStore)) {
      body["TargetLogStore"] = request.targetLogStore;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNormalizationSchema",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNormalizationSchemaResponse>(await this.callApi(params, req, runtime), new $_model.CreateNormalizationSchemaResponse({}));
  }

  /**
   * 创建标准化结构
   * 
   * @param request - CreateNormalizationSchemaRequest
   * @returns CreateNormalizationSchemaResponse
   */
  async createNormalizationSchema(request: $_model.CreateNormalizationSchemaRequest): Promise<$_model.CreateNormalizationSchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNormalizationSchemaWithOptions(request, runtime);
  }

  /**
   * 创建产品
   * 
   * @param request - CreateProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProductResponse
   */
  async createProductWithOptions(request: $_model.CreateProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProductResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.productName)) {
      body["ProductName"] = request.productName;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.vendorName)) {
      body["VendorName"] = request.vendorName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProduct",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProductResponse>(await this.callApi(params, req, runtime), new $_model.CreateProductResponse({}));
  }

  /**
   * 创建产品
   * 
   * @param request - CreateProductRequest
   * @returns CreateProductResponse
   */
  async createProduct(request: $_model.CreateProductRequest): Promise<$_model.CreateProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProductWithOptions(request, runtime);
  }

  /**
   * 创建厂商
   * 
   * @param request - CreateVendorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVendorResponse
   */
  async createVendorWithOptions(request: $_model.CreateVendorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVendorResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.vendorName)) {
      body["VendorName"] = request.vendorName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVendor",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVendorResponse>(await this.callApi(params, req, runtime), new $_model.CreateVendorResponse({}));
  }

  /**
   * 创建厂商
   * 
   * @param request - CreateVendorRequest
   * @returns CreateVendorResponse
   */
  async createVendor(request: $_model.CreateVendorRequest): Promise<$_model.CreateVendorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVendorWithOptions(request, runtime);
  }

  /**
   * 删除数据接入
   * 
   * @param request - DeleteDataIngestionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataIngestionResponse
   */
  async deleteDataIngestionWithOptions(request: $_model.DeleteDataIngestionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataIngestionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataIngestionId)) {
      body["DataIngestionId"] = request.dataIngestionId;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataIngestion",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataIngestionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataIngestionResponse({}));
  }

  /**
   * 删除数据接入
   * 
   * @param request - DeleteDataIngestionRequest
   * @returns DeleteDataIngestionResponse
   */
  async deleteDataIngestion(request: $_model.DeleteDataIngestionRequest): Promise<$_model.DeleteDataIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataIngestionWithOptions(request, runtime);
  }

  /**
   * 删除数据集
   * 
   * @param request - DeleteDataSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataSetResponse
   */
  async deleteDataSetWithOptions(request: $_model.DeleteDataSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataSetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSetId)) {
      body["DataSetId"] = request.dataSetId;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataSet",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataSetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataSetResponse({}));
  }

  /**
   * 删除数据集
   * 
   * @param request - DeleteDataSetRequest
   * @returns DeleteDataSetResponse
   */
  async deleteDataSet(request: $_model.DeleteDataSetRequest): Promise<$_model.DeleteDataSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataSetWithOptions(request, runtime);
  }

  /**
   * 删除数据集记录
   * 
   * @param request - DeleteDataSetRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataSetRecordResponse
   */
  async deleteDataSetRecordWithOptions(request: $_model.DeleteDataSetRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataSetRecordResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSetId)) {
      body["DataSetId"] = request.dataSetId;
    }

    if (!$dara.isNull(request.dataSetRecordIds)) {
      body["DataSetRecordIds"] = request.dataSetRecordIds;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataSetRecord",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataSetRecordResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataSetRecordResponse({}));
  }

  /**
   * 删除数据集记录
   * 
   * @param request - DeleteDataSetRecordRequest
   * @returns DeleteDataSetRecordResponse
   */
  async deleteDataSetRecord(request: $_model.DeleteDataSetRecordRequest): Promise<$_model.DeleteDataSetRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataSetRecordWithOptions(request, runtime);
  }

  /**
   * 删除数据源
   * 
   * @param request - DeleteDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataSourceResponse
   */
  async deleteDataSourceWithOptions(request: $_model.DeleteDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataSourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSourceId)) {
      body["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataSource",
      version: "2024-12-12",
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
   * 删除数据源
   * 
   * @param request - DeleteDataSourceRequest
   * @returns DeleteDataSourceResponse
   */
  async deleteDataSource(request: $_model.DeleteDataSourceRequest): Promise<$_model.DeleteDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataSourceWithOptions(request, runtime);
  }

  /**
   * 删除检测规则
   * 
   * @param request - DeleteDetectionRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDetectionRuleResponse
   */
  async deleteDetectionRuleWithOptions(request: $_model.DeleteDetectionRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDetectionRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.detectionRuleId)) {
      body["DetectionRuleId"] = request.detectionRuleId;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDetectionRule",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDetectionRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDetectionRuleResponse({}));
  }

  /**
   * 删除检测规则
   * 
   * @param request - DeleteDetectionRuleRequest
   * @returns DeleteDetectionRuleResponse
   */
  async deleteDetectionRule(request: $_model.DeleteDetectionRuleRequest): Promise<$_model.DeleteDetectionRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDetectionRuleWithOptions(request, runtime);
  }

  /**
   * 删除LogStore
   * 
   * @param request - DeleteLogStoreRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLogStoreResponse
   */
  async deleteLogStoreWithOptions(request: $_model.DeleteLogStoreRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLogStoreResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.logProjectName)) {
      body["LogProjectName"] = request.logProjectName;
    }

    if (!$dara.isNull(request.logRegionId)) {
      body["LogRegionId"] = request.logRegionId;
    }

    if (!$dara.isNull(request.logStoreName)) {
      body["LogStoreName"] = request.logStoreName;
    }

    if (!$dara.isNull(request.logUserId)) {
      body["LogUserId"] = request.logUserId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLogStore",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLogStoreResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLogStoreResponse({}));
  }

  /**
   * 删除LogStore
   * 
   * @param request - DeleteLogStoreRequest
   * @returns DeleteLogStoreResponse
   */
  async deleteLogStore(request: $_model.DeleteLogStoreRequest): Promise<$_model.DeleteLogStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLogStoreWithOptions(request, runtime);
  }

  /**
   * 删除标准化规则
   * 
   * @param request - DeleteNormalizationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNormalizationRuleResponse
   */
  async deleteNormalizationRuleWithOptions(request: $_model.DeleteNormalizationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNormalizationRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.normalizationRuleId)) {
      body["NormalizationRuleId"] = request.normalizationRuleId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNormalizationRule",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNormalizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNormalizationRuleResponse({}));
  }

  /**
   * 删除标准化规则
   * 
   * @param request - DeleteNormalizationRuleRequest
   * @returns DeleteNormalizationRuleResponse
   */
  async deleteNormalizationRule(request: $_model.DeleteNormalizationRuleRequest): Promise<$_model.DeleteNormalizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNormalizationRuleWithOptions(request, runtime);
  }

  /**
   * 删除标准化规则版本
   * 
   * @param request - DeleteNormalizationRuleVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNormalizationRuleVersionResponse
   */
  async deleteNormalizationRuleVersionWithOptions(request: $_model.DeleteNormalizationRuleVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNormalizationRuleVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.normalizationRuleId)) {
      body["NormalizationRuleId"] = request.normalizationRuleId;
    }

    if (!$dara.isNull(request.normalizationRuleVersion)) {
      body["NormalizationRuleVersion"] = request.normalizationRuleVersion;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNormalizationRuleVersion",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNormalizationRuleVersionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNormalizationRuleVersionResponse({}));
  }

  /**
   * 删除标准化规则版本
   * 
   * @param request - DeleteNormalizationRuleVersionRequest
   * @returns DeleteNormalizationRuleVersionResponse
   */
  async deleteNormalizationRuleVersion(request: $_model.DeleteNormalizationRuleVersionRequest): Promise<$_model.DeleteNormalizationRuleVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNormalizationRuleVersionWithOptions(request, runtime);
  }

  /**
   * 删除产品
   * 
   * @param request - DeleteProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProductResponse
   */
  async deleteProductWithOptions(request: $_model.DeleteProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProductResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProduct",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteProductResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProductResponse({}));
  }

  /**
   * 删除产品
   * 
   * @param request - DeleteProductRequest
   * @returns DeleteProductResponse
   */
  async deleteProduct(request: $_model.DeleteProductRequest): Promise<$_model.DeleteProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteProductWithOptions(request, runtime);
  }

  /**
   * 删除厂商
   * 
   * @param request - DeleteVendorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVendorResponse
   */
  async deleteVendorWithOptions(request: $_model.DeleteVendorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVendorResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.vendorId)) {
      body["VendorId"] = request.vendorId;
    }

    if (!$dara.isNull(request.vendorName)) {
      body["VendorName"] = request.vendorName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVendor",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVendorResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVendorResponse({}));
  }

  /**
   * 删除厂商
   * 
   * @param request - DeleteVendorRequest
   * @returns DeleteVendorResponse
   */
  async deleteVendor(request: $_model.DeleteVendorRequest): Promise<$_model.DeleteVendorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVendorWithOptions(request, runtime);
  }

  /**
   * 停止数据接入
   * 
   * @param request - DisableDataIngestionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableDataIngestionResponse
   */
  async disableDataIngestionWithOptions(request: $_model.DisableDataIngestionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableDataIngestionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataIngestionId)) {
      body["DataIngestionId"] = request.dataIngestionId;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableDataIngestion",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableDataIngestionResponse>(await this.callApi(params, req, runtime), new $_model.DisableDataIngestionResponse({}));
  }

  /**
   * 停止数据接入
   * 
   * @param request - DisableDataIngestionRequest
   * @returns DisableDataIngestionResponse
   */
  async disableDataIngestion(request: $_model.DisableDataIngestionRequest): Promise<$_model.DisableDataIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableDataIngestionWithOptions(request, runtime);
  }

  /**
   * 启动数据接入
   * 
   * @param request - EnableDataIngestionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableDataIngestionResponse
   */
  async enableDataIngestionWithOptions(request: $_model.EnableDataIngestionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableDataIngestionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataIngestionId)) {
      body["DataIngestionId"] = request.dataIngestionId;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableDataIngestion",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableDataIngestionResponse>(await this.callApi(params, req, runtime), new $_model.EnableDataIngestionResponse({}));
  }

  /**
   * 启动数据接入
   * 
   * @param request - EnableDataIngestionRequest
   * @returns EnableDataIngestionResponse
   */
  async enableDataIngestion(request: $_model.EnableDataIngestionRequest): Promise<$_model.EnableDataIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableDataIngestionWithOptions(request, runtime);
  }

  /**
   * 查看LogStore
   * 
   * @param request - ExecuteLogQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteLogQueryResponse
   */
  async executeLogQueryWithOptions(request: $_model.ExecuteLogQueryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteLogQueryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.extendContentPacked)) {
      body["ExtendContentPacked"] = request.extendContentPacked;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.logProjectName)) {
      body["LogProjectName"] = request.logProjectName;
    }

    if (!$dara.isNull(request.logQuery)) {
      body["LogQuery"] = request.logQuery;
    }

    if (!$dara.isNull(request.logRegionId)) {
      body["LogRegionId"] = request.logRegionId;
    }

    if (!$dara.isNull(request.logStoreName)) {
      body["LogStoreName"] = request.logStoreName;
    }

    if (!$dara.isNull(request.logUserId)) {
      body["LogUserId"] = request.logUserId;
    }

    if (!$dara.isNull(request.normalizationSchemaId)) {
      body["NormalizationSchemaId"] = request.normalizationSchemaId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteLogQuery",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteLogQueryResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteLogQueryResponse({}));
  }

  /**
   * 查看LogStore
   * 
   * @param request - ExecuteLogQueryRequest
   * @returns ExecuteLogQueryResponse
   */
  async executeLogQuery(request: $_model.ExecuteLogQueryRequest): Promise<$_model.ExecuteLogQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeLogQueryWithOptions(request, runtime);
  }

  /**
   * 执行升级
   * 
   * @param request - ExecuteUpgradeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteUpgradeResponse
   */
  async executeUpgradeWithOptions(request: $_model.ExecuteUpgradeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteUpgradeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteUpgrade",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteUpgradeResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteUpgradeResponse({}));
  }

  /**
   * 执行升级
   * 
   * @param request - ExecuteUpgradeRequest
   * @returns ExecuteUpgradeResponse
   */
  async executeUpgrade(request: $_model.ExecuteUpgradeRequest): Promise<$_model.ExecuteUpgradeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeUpgradeWithOptions(request, runtime);
  }

  /**
   * 获取数据批量接入
   * 
   * @param request - GetDataBatchIngestionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataBatchIngestionResponse
   */
  async getDataBatchIngestionWithOptions(request: $_model.GetDataBatchIngestionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataBatchIngestionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataBatchIngestion",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataBatchIngestionResponse>(await this.callApi(params, req, runtime), new $_model.GetDataBatchIngestionResponse({}));
  }

  /**
   * 获取数据批量接入
   * 
   * @param request - GetDataBatchIngestionRequest
   * @returns GetDataBatchIngestionResponse
   */
  async getDataBatchIngestion(request: $_model.GetDataBatchIngestionRequest): Promise<$_model.GetDataBatchIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataBatchIngestionWithOptions(request, runtime);
  }

  /**
   * 获取日志管理页面里用户数据存储的详情。
   * 
   * @param request - GetDataStorageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataStorageResponse
   */
  async getDataStorageWithOptions(request: $_model.GetDataStorageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataStorageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataStorage",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataStorageResponse>(await this.callApi(params, req, runtime), new $_model.GetDataStorageResponse({}));
  }

  /**
   * 获取日志管理页面里用户数据存储的详情。
   * 
   * @param request - GetDataStorageRequest
   * @returns GetDataStorageResponse
   */
  async getDataStorage(request: $_model.GetDataStorageRequest): Promise<$_model.GetDataStorageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataStorageWithOptions(request, runtime);
  }

  /**
   * 更新检测规则
   * 
   * @param request - GetDetectionStatisticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDetectionStatisticResponse
   */
  async getDetectionStatisticWithOptions(request: $_model.GetDetectionStatisticRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDetectionStatisticResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDetectionStatistic",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDetectionStatisticResponse>(await this.callApi(params, req, runtime), new $_model.GetDetectionStatisticResponse({}));
  }

  /**
   * 更新检测规则
   * 
   * @param request - GetDetectionStatisticRequest
   * @returns GetDetectionStatisticResponse
   */
  async getDetectionStatistic(request: $_model.GetDetectionStatisticRequest): Promise<$_model.GetDetectionStatisticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDetectionStatisticWithOptions(request, runtime);
  }

  /**
   * 获取导出任务进度
   * 
   * @param request - GetExportTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExportTaskResponse
   */
  async getExportTaskWithOptions(request: $_model.GetExportTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetExportTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.exportId)) {
      body["ExportId"] = request.exportId;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetExportTask",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetExportTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetExportTaskResponse({}));
  }

  /**
   * 获取导出任务进度
   * 
   * @param request - GetExportTaskRequest
   * @returns GetExportTaskResponse
   */
  async getExportTask(request: $_model.GetExportTaskRequest): Promise<$_model.GetExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getExportTaskWithOptions(request, runtime);
  }

  /**
   * 获取事件列表
   * 
   * @param request - GetIncidentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIncidentResponse
   */
  async getIncidentWithOptions(request: $_model.GetIncidentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIncidentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIncident",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIncidentResponse>(await this.callApi(params, req, runtime), new $_model.GetIncidentResponse({}));
  }

  /**
   * 获取事件列表
   * 
   * @param request - GetIncidentRequest
   * @returns GetIncidentResponse
   */
  async getIncident(request: $_model.GetIncidentRequest): Promise<$_model.GetIncidentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIncidentWithOptions(request, runtime);
  }

  /**
   * 查看LogStore
   * 
   * @param request - GetLogTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLogTicketResponse
   */
  async getLogTicketWithOptions(request: $_model.GetLogTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLogTicketResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.logUserId)) {
      body["LogUserId"] = request.logUserId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLogTicket",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLogTicketResponse>(await this.callApi(params, req, runtime), new $_model.GetLogTicketResponse({}));
  }

  /**
   * 查看LogStore
   * 
   * @param request - GetLogTicketRequest
   * @returns GetLogTicketResponse
   */
  async getLogTicket(request: $_model.GetLogTicketRequest): Promise<$_model.GetLogTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLogTicketWithOptions(request, runtime);
  }

  /**
   * 获取标准化规则
   * 
   * @param request - GetNormalizationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNormalizationRuleResponse
   */
  async getNormalizationRuleWithOptions(request: $_model.GetNormalizationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNormalizationRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.normalizationRuleId)) {
      body["NormalizationRuleId"] = request.normalizationRuleId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNormalizationRule",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNormalizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetNormalizationRuleResponse({}));
  }

  /**
   * 获取标准化规则
   * 
   * @param request - GetNormalizationRuleRequest
   * @returns GetNormalizationRuleResponse
   */
  async getNormalizationRule(request: $_model.GetNormalizationRuleRequest): Promise<$_model.GetNormalizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNormalizationRuleWithOptions(request, runtime);
  }

  /**
   * 获取标准化规则指定版本信息
   * 
   * @param request - GetNormalizationRuleVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNormalizationRuleVersionResponse
   */
  async getNormalizationRuleVersionWithOptions(request: $_model.GetNormalizationRuleVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNormalizationRuleVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.normalizationRuleId)) {
      body["NormalizationRuleId"] = request.normalizationRuleId;
    }

    if (!$dara.isNull(request.normalizationRuleVersion)) {
      body["NormalizationRuleVersion"] = request.normalizationRuleVersion;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNormalizationRuleVersion",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNormalizationRuleVersionResponse>(await this.callApi(params, req, runtime), new $_model.GetNormalizationRuleVersionResponse({}));
  }

  /**
   * 获取标准化规则指定版本信息
   * 
   * @param request - GetNormalizationRuleVersionRequest
   * @returns GetNormalizationRuleVersionResponse
   */
  async getNormalizationRuleVersion(request: $_model.GetNormalizationRuleVersionRequest): Promise<$_model.GetNormalizationRuleVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNormalizationRuleVersionWithOptions(request, runtime);
  }

  /**
   * 获取Schema信息以及字段
   * 
   * @param request - GetNormalizationSchemaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNormalizationSchemaResponse
   */
  async getNormalizationSchemaWithOptions(request: $_model.GetNormalizationSchemaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNormalizationSchemaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.normalizationSchemaId)) {
      body["NormalizationSchemaId"] = request.normalizationSchemaId;
    }

    if (!$dara.isNull(request.normalizationSchemaType)) {
      body["NormalizationSchemaType"] = request.normalizationSchemaType;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNormalizationSchema",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNormalizationSchemaResponse>(await this.callApi(params, req, runtime), new $_model.GetNormalizationSchemaResponse({}));
  }

  /**
   * 获取Schema信息以及字段
   * 
   * @param request - GetNormalizationSchemaRequest
   * @returns GetNormalizationSchemaResponse
   */
  async getNormalizationSchema(request: $_model.GetNormalizationSchemaRequest): Promise<$_model.GetNormalizationSchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNormalizationSchemaWithOptions(request, runtime);
  }

  /**
   * 获取用户配置信息
   * 
   * @param request - GetUserConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserConfigResponse
   */
  async getUserConfigWithOptions(request: $_model.GetUserConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserConfig",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetUserConfigResponse({}));
  }

  /**
   * 获取用户配置信息
   * 
   * @param request - GetUserConfigRequest
   * @returns GetUserConfigResponse
   */
  async getUserConfig(request: $_model.GetUserConfigRequest): Promise<$_model.GetUserConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserConfigWithOptions(request, runtime);
  }

  /**
   * 查询接入模板
   * 
   * @param request - ListDataIngestionTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataIngestionTemplatesResponse
   */
  async listDataIngestionTemplatesWithOptions(request: $_model.ListDataIngestionTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataIngestionTemplatesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataIngestionTemplateStatus)) {
      body["DataIngestionTemplateStatus"] = request.dataIngestionTemplateStatus;
    }

    if (!$dara.isNull(request.dataSourceTemplateIds)) {
      body["DataSourceTemplateIds"] = request.dataSourceTemplateIds;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataIngestionTemplates",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataIngestionTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListDataIngestionTemplatesResponse({}));
  }

  /**
   * 查询接入模板
   * 
   * @param request - ListDataIngestionTemplatesRequest
   * @returns ListDataIngestionTemplatesResponse
   */
  async listDataIngestionTemplates(request: $_model.ListDataIngestionTemplatesRequest): Promise<$_model.ListDataIngestionTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataIngestionTemplatesWithOptions(request, runtime);
  }

  /**
   * 获取数据接入任务列表
   * 
   * @param tmpReq - ListDataIngestionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataIngestionsResponse
   */
  async listDataIngestionsWithOptions(tmpReq: $_model.ListDataIngestionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataIngestionsResponse> {
    tmpReq.validate();
    let request = new $_model.ListDataIngestionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dataIngestionIds)) {
      request.dataIngestionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataIngestionIds, "DataIngestionIds", "simple");
    }

    if (!$dara.isNull(tmpReq.dataIngestionTemplateIds)) {
      request.dataIngestionTemplateIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataIngestionTemplateIds, "DataIngestionTemplateIds", "simple");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataIngestionIdsShrink)) {
      body["DataIngestionIds"] = request.dataIngestionIdsShrink;
    }

    if (!$dara.isNull(request.dataIngestionStatus)) {
      body["DataIngestionStatus"] = request.dataIngestionStatus;
    }

    if (!$dara.isNull(request.dataIngestionTemplateIdsShrink)) {
      body["DataIngestionTemplateIds"] = request.dataIngestionTemplateIdsShrink;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataIngestions",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataIngestionsResponse>(await this.callApi(params, req, runtime), new $_model.ListDataIngestionsResponse({}));
  }

  /**
   * 获取数据接入任务列表
   * 
   * @param request - ListDataIngestionsRequest
   * @returns ListDataIngestionsResponse
   */
  async listDataIngestions(request: $_model.ListDataIngestionsRequest): Promise<$_model.ListDataIngestionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataIngestionsWithOptions(request, runtime);
  }

  /**
   * 获取数据集记录列表
   * 
   * @param request - ListDataSetRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSetRecordsResponse
   */
  async listDataSetRecordsWithOptions(request: $_model.ListDataSetRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataSetRecordsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSetId)) {
      body["DataSetId"] = request.dataSetId;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataSetRecords",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataSetRecordsResponse>(await this.callApi(params, req, runtime), new $_model.ListDataSetRecordsResponse({}));
  }

  /**
   * 获取数据集记录列表
   * 
   * @param request - ListDataSetRecordsRequest
   * @returns ListDataSetRecordsResponse
   */
  async listDataSetRecords(request: $_model.ListDataSetRecordsRequest): Promise<$_model.ListDataSetRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataSetRecordsWithOptions(request, runtime);
  }

  /**
   * 获取数据集列表
   * 
   * @param tmpReq - ListDataSetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSetsResponse
   */
  async listDataSetsWithOptions(tmpReq: $_model.ListDataSetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataSetsResponse> {
    tmpReq.validate();
    let request = new $_model.ListDataSetsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dataSetIds)) {
      request.dataSetIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataSetIds, "DataSetIds", "simple");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSetId)) {
      body["DataSetId"] = request.dataSetId;
    }

    if (!$dara.isNull(request.dataSetIdsShrink)) {
      body["DataSetIds"] = request.dataSetIdsShrink;
    }

    if (!$dara.isNull(request.dataSetName)) {
      body["DataSetName"] = request.dataSetName;
    }

    if (!$dara.isNull(request.dataSetStatus)) {
      body["DataSetStatus"] = request.dataSetStatus;
    }

    if (!$dara.isNull(request.dataSetType)) {
      body["DataSetType"] = request.dataSetType;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderDirection)) {
      body["OrderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.orderFieldName)) {
      body["OrderFieldName"] = request.orderFieldName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataSets",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataSetsResponse>(await this.callApi(params, req, runtime), new $_model.ListDataSetsResponse({}));
  }

  /**
   * 获取数据集列表
   * 
   * @param request - ListDataSetsRequest
   * @returns ListDataSetsResponse
   */
  async listDataSets(request: $_model.ListDataSetsRequest): Promise<$_model.ListDataSetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataSetsWithOptions(request, runtime);
  }

  /**
   * 查询数据源模板
   * 
   * @param tmpReq - ListDataSourceTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourceTemplatesResponse
   */
  async listDataSourceTemplatesWithOptions(tmpReq: $_model.ListDataSourceTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataSourceTemplatesResponse> {
    tmpReq.validate();
    let request = new $_model.ListDataSourceTemplatesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dataSourceTemplateIds)) {
      request.dataSourceTemplateIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataSourceTemplateIds, "DataSourceTemplateIds", "simple");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSourceTemplateIdsShrink)) {
      body["DataSourceTemplateIds"] = request.dataSourceTemplateIdsShrink;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataSourceTemplates",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataSourceTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListDataSourceTemplatesResponse({}));
  }

  /**
   * 查询数据源模板
   * 
   * @param request - ListDataSourceTemplatesRequest
   * @returns ListDataSourceTemplatesResponse
   */
  async listDataSourceTemplates(request: $_model.ListDataSourceTemplatesRequest): Promise<$_model.ListDataSourceTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataSourceTemplatesWithOptions(request, runtime);
  }

  /**
   * 获取厂商列表
   * 
   * @param tmpReq - ListDataSourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourcesResponse
   */
  async listDataSourcesWithOptions(tmpReq: $_model.ListDataSourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataSourcesResponse> {
    tmpReq.validate();
    let request = new $_model.ListDataSourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dataSourceIds)) {
      request.dataSourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataSourceIds, "DataSourceIds", "simple");
    }

    if (!$dara.isNull(tmpReq.dataSourceTemplateIds)) {
      request.dataSourceTemplateIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataSourceTemplateIds, "DataSourceTemplateIds", "simple");
    }

    if (!$dara.isNull(tmpReq.logUserIds)) {
      request.logUserIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.logUserIds, "LogUserIds", "simple");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSourceFrom)) {
      body["DataSourceFrom"] = request.dataSourceFrom;
    }

    if (!$dara.isNull(request.dataSourceIdsShrink)) {
      body["DataSourceIds"] = request.dataSourceIdsShrink;
    }

    if (!$dara.isNull(request.dataSourceName)) {
      body["DataSourceName"] = request.dataSourceName;
    }

    if (!$dara.isNull(request.dataSourceStatus)) {
      body["DataSourceStatus"] = request.dataSourceStatus;
    }

    if (!$dara.isNull(request.dataSourceStoreStatus)) {
      body["DataSourceStoreStatus"] = request.dataSourceStoreStatus;
    }

    if (!$dara.isNull(request.dataSourceTemplateIdsShrink)) {
      body["DataSourceTemplateIds"] = request.dataSourceTemplateIdsShrink;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.logProjectName)) {
      body["LogProjectName"] = request.logProjectName;
    }

    if (!$dara.isNull(request.logRegionId)) {
      body["LogRegionId"] = request.logRegionId;
    }

    if (!$dara.isNull(request.logStoreName)) {
      body["LogStoreName"] = request.logStoreName;
    }

    if (!$dara.isNull(request.logUserIdsShrink)) {
      body["LogUserIds"] = request.logUserIdsShrink;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.order)) {
      body["Order"] = request.order;
    }

    if (!$dara.isNull(request.orderField)) {
      body["OrderField"] = request.orderField;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataSources",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataSourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListDataSourcesResponse({}));
  }

  /**
   * 获取厂商列表
   * 
   * @param request - ListDataSourcesRequest
   * @returns ListDataSourcesResponse
   */
  async listDataSources(request: $_model.ListDataSourcesRequest): Promise<$_model.ListDataSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataSourcesWithOptions(request, runtime);
  }

  /**
   * 获取检测规则列表
   * 
   * @param tmpReq - ListDetectionRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDetectionRulesResponse
   */
  async listDetectionRulesWithOptions(tmpReq: $_model.ListDetectionRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDetectionRulesResponse> {
    tmpReq.validate();
    let request = new $_model.ListDetectionRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.detectionRuleIds)) {
      request.detectionRuleIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.detectionRuleIds, "DetectionRuleIds", "simple");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertAttCk)) {
      body["AlertAttCk"] = request.alertAttCk;
    }

    if (!$dara.isNull(request.alertLevel)) {
      body["AlertLevel"] = request.alertLevel;
    }

    if (!$dara.isNull(request.alertTacticId)) {
      body["AlertTacticId"] = request.alertTacticId;
    }

    if (!$dara.isNull(request.alertType)) {
      body["AlertType"] = request.alertType;
    }

    if (!$dara.isNull(request.detectionExpressionType)) {
      body["DetectionExpressionType"] = request.detectionExpressionType;
    }

    if (!$dara.isNull(request.detectionRuleId)) {
      body["DetectionRuleId"] = request.detectionRuleId;
    }

    if (!$dara.isNull(request.detectionRuleIdsShrink)) {
      body["DetectionRuleIds"] = request.detectionRuleIdsShrink;
    }

    if (!$dara.isNull(request.detectionRuleName)) {
      body["DetectionRuleName"] = request.detectionRuleName;
    }

    if (!$dara.isNull(request.detectionRuleStatus)) {
      body["DetectionRuleStatus"] = request.detectionRuleStatus;
    }

    if (!$dara.isNull(request.detectionRuleType)) {
      body["DetectionRuleType"] = request.detectionRuleType;
    }

    if (!$dara.isNull(request.incidentAggregationType)) {
      body["IncidentAggregationType"] = request.incidentAggregationType;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.logCategoryId)) {
      body["LogCategoryId"] = request.logCategoryId;
    }

    if (!$dara.isNull(request.logSchemaId)) {
      body["LogSchemaId"] = request.logSchemaId;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderDirection)) {
      body["OrderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.orderFieldName)) {
      body["OrderFieldName"] = request.orderFieldName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDetectionRules",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDetectionRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListDetectionRulesResponse({}));
  }

  /**
   * 获取检测规则列表
   * 
   * @param request - ListDetectionRulesRequest
   * @returns ListDetectionRulesResponse
   */
  async listDetectionRules(request: $_model.ListDetectionRulesRequest): Promise<$_model.ListDetectionRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDetectionRulesWithOptions(request, runtime);
  }

  /**
   * 获取事件列表
   * 
   * @param tmpReq - ListIncidentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIncidentsResponse
   */
  async listIncidentsWithOptions(tmpReq: $_model.ListIncidentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIncidentsResponse> {
    tmpReq.validate();
    let request = new $_model.ListIncidentsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.incidentUuids)) {
      request.incidentUuidsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.incidentUuids, "IncidentUuids", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.incidentName)) {
      query["IncidentName"] = request.incidentName;
    }

    if (!$dara.isNull(request.incidentUuidsShrink)) {
      query["IncidentUuids"] = request.incidentUuidsShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertUuid)) {
      body["AlertUuid"] = request.alertUuid;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.incidentStatus)) {
      body["IncidentStatus"] = request.incidentStatus;
    }

    if (!$dara.isNull(request.incidentTags)) {
      body["IncidentTags"] = request.incidentTags;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderDirection)) {
      body["OrderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.orderFieldName)) {
      body["OrderFieldName"] = request.orderFieldName;
    }

    if (!$dara.isNull(request.owners)) {
      body["Owners"] = request.owners;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.relateAssetId)) {
      body["RelateAssetId"] = request.relateAssetId;
    }

    if (!$dara.isNull(request.relateEntityId)) {
      body["RelateEntityId"] = request.relateEntityId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.threatLevel)) {
      body["ThreatLevel"] = request.threatLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIncidents",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIncidentsResponse>(await this.callApi(params, req, runtime), new $_model.ListIncidentsResponse({}));
  }

  /**
   * 获取事件列表
   * 
   * @param request - ListIncidentsRequest
   * @returns ListIncidentsResponse
   */
  async listIncidents(request: $_model.ListIncidentsRequest): Promise<$_model.ListIncidentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIncidentsWithOptions(request, runtime);
  }

  /**
   * 获取日志Project列表
   * 
   * @param request - ListLogProjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLogProjectsResponse
   */
  async listLogProjectsWithOptions(request: $_model.ListLogProjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLogProjectsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.logRegionId)) {
      body["LogRegionId"] = request.logRegionId;
    }

    if (!$dara.isNull(request.logUserId)) {
      body["LogUserId"] = request.logUserId;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLogProjects",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLogProjectsResponse>(await this.callApi(params, req, runtime), new $_model.ListLogProjectsResponse({}));
  }

  /**
   * 获取日志Project列表
   * 
   * @param request - ListLogProjectsRequest
   * @returns ListLogProjectsResponse
   */
  async listLogProjects(request: $_model.ListLogProjectsRequest): Promise<$_model.ListLogProjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLogProjectsWithOptions(request, runtime);
  }

  /**
   * 获取所有的区域
   * 
   * @param request - ListLogRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLogRegionsResponse
   */
  async listLogRegionsWithOptions(request: $_model.ListLogRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLogRegionsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLogRegions",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLogRegionsResponse>(await this.callApi(params, req, runtime), new $_model.ListLogRegionsResponse({}));
  }

  /**
   * 获取所有的区域
   * 
   * @param request - ListLogRegionsRequest
   * @returns ListLogRegionsResponse
   */
  async listLogRegions(request: $_model.ListLogRegionsRequest): Promise<$_model.ListLogRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLogRegionsWithOptions(request, runtime);
  }

  /**
   * 获取日志store列表
   * 
   * @param request - ListLogStoresRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLogStoresResponse
   */
  async listLogStoresWithOptions(request: $_model.ListLogStoresRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLogStoresResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.logProjectName)) {
      body["LogProjectName"] = request.logProjectName;
    }

    if (!$dara.isNull(request.logRegionId)) {
      body["LogRegionId"] = request.logRegionId;
    }

    if (!$dara.isNull(request.logUserId)) {
      body["LogUserId"] = request.logUserId;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLogStores",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLogStoresResponse>(await this.callApi(params, req, runtime), new $_model.ListLogStoresResponse({}));
  }

  /**
   * 获取日志store列表
   * 
   * @param request - ListLogStoresRequest
   * @returns ListLogStoresResponse
   */
  async listLogStores(request: $_model.ListLogStoresRequest): Promise<$_model.ListLogStoresResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLogStoresWithOptions(request, runtime);
  }

  /**
   * 获取标准化目录
   * 
   * @param request - ListNormalizationCategoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNormalizationCategoriesResponse
   */
  async listNormalizationCategoriesWithOptions(request: $_model.ListNormalizationCategoriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNormalizationCategoriesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.normalizationCategoryType)) {
      body["NormalizationCategoryType"] = request.normalizationCategoryType;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNormalizationCategories",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNormalizationCategoriesResponse>(await this.callApi(params, req, runtime), new $_model.ListNormalizationCategoriesResponse({}));
  }

  /**
   * 获取标准化目录
   * 
   * @param request - ListNormalizationCategoriesRequest
   * @returns ListNormalizationCategoriesResponse
   */
  async listNormalizationCategories(request: $_model.ListNormalizationCategoriesRequest): Promise<$_model.ListNormalizationCategoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNormalizationCategoriesWithOptions(request, runtime);
  }

  /**
   * 获取标准化日志所有字段
   * 
   * @param request - ListNormalizationFieldsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNormalizationFieldsResponse
   */
  async listNormalizationFieldsWithOptions(request: $_model.ListNormalizationFieldsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNormalizationFieldsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNormalizationFields",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNormalizationFieldsResponse>(await this.callApi(params, req, runtime), new $_model.ListNormalizationFieldsResponse({}));
  }

  /**
   * 获取标准化日志所有字段
   * 
   * @param request - ListNormalizationFieldsRequest
   * @returns ListNormalizationFieldsResponse
   */
  async listNormalizationFields(request: $_model.ListNormalizationFieldsRequest): Promise<$_model.ListNormalizationFieldsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNormalizationFieldsWithOptions(request, runtime);
  }

  /**
   * 获取规则的安全能力
   * 
   * @param tmpReq - ListNormalizationRuleCapacitiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNormalizationRuleCapacitiesResponse
   */
  async listNormalizationRuleCapacitiesWithOptions(tmpReq: $_model.ListNormalizationRuleCapacitiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNormalizationRuleCapacitiesResponse> {
    tmpReq.validate();
    let request = new $_model.ListNormalizationRuleCapacitiesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.normalizationRuleIds)) {
      request.normalizationRuleIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.normalizationRuleIds, "NormalizationRuleIds", "simple");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.normalizationRuleId)) {
      body["NormalizationRuleId"] = request.normalizationRuleId;
    }

    if (!$dara.isNull(request.normalizationRuleIdsShrink)) {
      body["NormalizationRuleIds"] = request.normalizationRuleIdsShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNormalizationRuleCapacities",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNormalizationRuleCapacitiesResponse>(await this.callApi(params, req, runtime), new $_model.ListNormalizationRuleCapacitiesResponse({}));
  }

  /**
   * 获取规则的安全能力
   * 
   * @param request - ListNormalizationRuleCapacitiesRequest
   * @returns ListNormalizationRuleCapacitiesResponse
   */
  async listNormalizationRuleCapacities(request: $_model.ListNormalizationRuleCapacitiesRequest): Promise<$_model.ListNormalizationRuleCapacitiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNormalizationRuleCapacitiesWithOptions(request, runtime);
  }

  /**
   * 获取标准化规则版本列表
   * 
   * @param request - ListNormalizationRuleVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNormalizationRuleVersionsResponse
   */
  async listNormalizationRuleVersionsWithOptions(request: $_model.ListNormalizationRuleVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNormalizationRuleVersionsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.normalizationRuleId)) {
      body["NormalizationRuleId"] = request.normalizationRuleId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNormalizationRuleVersions",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNormalizationRuleVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListNormalizationRuleVersionsResponse({}));
  }

  /**
   * 获取标准化规则版本列表
   * 
   * @param request - ListNormalizationRuleVersionsRequest
   * @returns ListNormalizationRuleVersionsResponse
   */
  async listNormalizationRuleVersions(request: $_model.ListNormalizationRuleVersionsRequest): Promise<$_model.ListNormalizationRuleVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNormalizationRuleVersionsWithOptions(request, runtime);
  }

  /**
   * 获取标准化规则列表
   * 
   * @param tmpReq - ListNormalizationRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNormalizationRulesResponse
   */
  async listNormalizationRulesWithOptions(tmpReq: $_model.ListNormalizationRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNormalizationRulesResponse> {
    tmpReq.validate();
    let request = new $_model.ListNormalizationRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.normalizationRuleIds)) {
      request.normalizationRuleIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.normalizationRuleIds, "NormalizationRuleIds", "simple");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.normalizationCategoryId)) {
      body["NormalizationCategoryId"] = request.normalizationCategoryId;
    }

    if (!$dara.isNull(request.normalizationRuleIdsShrink)) {
      body["NormalizationRuleIds"] = request.normalizationRuleIdsShrink;
    }

    if (!$dara.isNull(request.normalizationRuleName)) {
      body["NormalizationRuleName"] = request.normalizationRuleName;
    }

    if (!$dara.isNull(request.normalizationRuleType)) {
      body["NormalizationRuleType"] = request.normalizationRuleType;
    }

    if (!$dara.isNull(request.normalizationSchemaId)) {
      body["NormalizationSchemaId"] = request.normalizationSchemaId;
    }

    if (!$dara.isNull(request.orderField)) {
      body["OrderField"] = request.orderField;
    }

    if (!$dara.isNull(request.orderType)) {
      body["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.vendorId)) {
      body["VendorId"] = request.vendorId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNormalizationRules",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNormalizationRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListNormalizationRulesResponse({}));
  }

  /**
   * 获取标准化规则列表
   * 
   * @param request - ListNormalizationRulesRequest
   * @returns ListNormalizationRulesResponse
   */
  async listNormalizationRules(request: $_model.ListNormalizationRulesRequest): Promise<$_model.ListNormalizationRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNormalizationRulesWithOptions(request, runtime);
  }

  /**
   * 获取标准化类目
   * 
   * @param request - ListNormalizationSchemasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNormalizationSchemasResponse
   */
  async listNormalizationSchemasWithOptions(request: $_model.ListNormalizationSchemasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNormalizationSchemasResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.normalizationCategoryId)) {
      body["NormalizationCategoryId"] = request.normalizationCategoryId;
    }

    if (!$dara.isNull(request.normalizationSchemaType)) {
      body["NormalizationSchemaType"] = request.normalizationSchemaType;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNormalizationSchemas",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNormalizationSchemasResponse>(await this.callApi(params, req, runtime), new $_model.ListNormalizationSchemasResponse({}));
  }

  /**
   * 获取标准化类目
   * 
   * @param request - ListNormalizationSchemasRequest
   * @returns ListNormalizationSchemasResponse
   */
  async listNormalizationSchemas(request: $_model.ListNormalizationSchemasRequest): Promise<$_model.ListNormalizationSchemasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNormalizationSchemasWithOptions(request, runtime);
  }

  /**
   * 获取产品列表
   * 
   * @param tmpReq - ListProductsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductsResponse
   */
  async listProductsWithOptions(tmpReq: $_model.ListProductsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProductsResponse> {
    tmpReq.validate();
    let request = new $_model.ListProductsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.productIds)) {
      request.productIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.productIds, "ProductIds", "simple");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.productIdsShrink)) {
      body["ProductIds"] = request.productIdsShrink;
    }

    if (!$dara.isNull(request.productName)) {
      body["ProductName"] = request.productName;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.vendorId)) {
      body["VendorId"] = request.vendorId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProducts",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProductsResponse>(await this.callApi(params, req, runtime), new $_model.ListProductsResponse({}));
  }

  /**
   * 获取产品列表
   * 
   * @param request - ListProductsRequest
   * @returns ListProductsResponse
   */
  async listProducts(request: $_model.ListProductsRequest): Promise<$_model.ListProductsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProductsWithOptions(request, runtime);
  }

  /**
   * 获取接入流量统计
   * 
   * @param tmpReq - ListTrafficStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTrafficStatisticsResponse
   */
  async listTrafficStatisticsWithOptions(tmpReq: $_model.ListTrafficStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTrafficStatisticsResponse> {
    tmpReq.validate();
    let request = new $_model.ListTrafficStatisticsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.logUserIds)) {
      request.logUserIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.logUserIds, "LogUserIds", "simple");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.logUserIdsShrink)) {
      body["LogUserIds"] = request.logUserIdsShrink;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionTag)) {
      body["RegionTag"] = request.regionTag;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.trafficStatisticPeriod)) {
      body["TrafficStatisticPeriod"] = request.trafficStatisticPeriod;
    }

    if (!$dara.isNull(request.trafficStatisticPeriodType)) {
      body["TrafficStatisticPeriodType"] = request.trafficStatisticPeriodType;
    }

    if (!$dara.isNull(request.trafficStatisticType)) {
      body["TrafficStatisticType"] = request.trafficStatisticType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTrafficStatistics",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTrafficStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.ListTrafficStatisticsResponse({}));
  }

  /**
   * 获取接入流量统计
   * 
   * @param request - ListTrafficStatisticsRequest
   * @returns ListTrafficStatisticsResponse
   */
  async listTrafficStatistics(request: $_model.ListTrafficStatisticsRequest): Promise<$_model.ListTrafficStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTrafficStatisticsWithOptions(request, runtime);
  }

  /**
   * 获取升级项列表
   * 
   * @param request - ListUpgradeItemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUpgradeItemsResponse
   */
  async listUpgradeItemsWithOptions(request: $_model.ListUpgradeItemsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUpgradeItemsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUpgradeItems",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUpgradeItemsResponse>(await this.callApi(params, req, runtime), new $_model.ListUpgradeItemsResponse({}));
  }

  /**
   * 获取升级项列表
   * 
   * @param request - ListUpgradeItemsRequest
   * @returns ListUpgradeItemsResponse
   */
  async listUpgradeItems(request: $_model.ListUpgradeItemsRequest): Promise<$_model.ListUpgradeItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUpgradeItemsWithOptions(request, runtime);
  }

  /**
   * 获取厂商列表
   * 
   * @param tmpReq - ListVendorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVendorsResponse
   */
  async listVendorsWithOptions(tmpReq: $_model.ListVendorsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVendorsResponse> {
    tmpReq.validate();
    let request = new $_model.ListVendorsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.vendorIds)) {
      request.vendorIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vendorIds, "VendorIds", "simple");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.vendorIdsShrink)) {
      body["VendorIds"] = request.vendorIdsShrink;
    }

    if (!$dara.isNull(request.vendorName)) {
      body["VendorName"] = request.vendorName;
    }

    if (!$dara.isNull(request.vendorType)) {
      body["VendorType"] = request.vendorType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVendors",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVendorsResponse>(await this.callApi(params, req, runtime), new $_model.ListVendorsResponse({}));
  }

  /**
   * 获取厂商列表
   * 
   * @param request - ListVendorsRequest
   * @returns ListVendorsResponse
   */
  async listVendors(request: $_model.ListVendorsRequest): Promise<$_model.ListVendorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVendorsWithOptions(request, runtime);
  }

  /**
   * 刷新数据源
   * 
   * @param request - RefreshDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshDataSourceResponse
   */
  async refreshDataSourceWithOptions(request: $_model.RefreshDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshDataSourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSourceId)) {
      body["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshDataSource",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefreshDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.RefreshDataSourceResponse({}));
  }

  /**
   * 刷新数据源
   * 
   * @param request - RefreshDataSourceRequest
   * @returns RefreshDataSourceResponse
   */
  async refreshDataSource(request: $_model.RefreshDataSourceRequest): Promise<$_model.RefreshDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshDataSourceWithOptions(request, runtime);
  }

  /**
   * 数据存储的清空操作，该动作会删除已有的数据，重新初始化物理存储。
   * 
   * @param request - ResetDataStorageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetDataStorageResponse
   */
  async resetDataStorageWithOptions(request: $_model.ResetDataStorageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetDataStorageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetDataStorage",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetDataStorageResponse>(await this.callApi(params, req, runtime), new $_model.ResetDataStorageResponse({}));
  }

  /**
   * 数据存储的清空操作，该动作会删除已有的数据，重新初始化物理存储。
   * 
   * @param request - ResetDataStorageRequest
   * @returns ResetDataStorageResponse
   */
  async resetDataStorage(request: $_model.ResetDataStorageRequest): Promise<$_model.ResetDataStorageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetDataStorageWithOptions(request, runtime);
  }

  /**
   * 设置标准化规则默认版本
   * 
   * @param request - SetDefaultNormalizationRuleVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDefaultNormalizationRuleVersionResponse
   */
  async setDefaultNormalizationRuleVersionWithOptions(request: $_model.SetDefaultNormalizationRuleVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDefaultNormalizationRuleVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.normalizationRuleId)) {
      body["NormalizationRuleId"] = request.normalizationRuleId;
    }

    if (!$dara.isNull(request.normalizationRuleVersion)) {
      body["NormalizationRuleVersion"] = request.normalizationRuleVersion;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDefaultNormalizationRuleVersion",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDefaultNormalizationRuleVersionResponse>(await this.callApi(params, req, runtime), new $_model.SetDefaultNormalizationRuleVersionResponse({}));
  }

  /**
   * 设置标准化规则默认版本
   * 
   * @param request - SetDefaultNormalizationRuleVersionRequest
   * @returns SetDefaultNormalizationRuleVersionResponse
   */
  async setDefaultNormalizationRuleVersion(request: $_model.SetDefaultNormalizationRuleVersionRequest): Promise<$_model.SetDefaultNormalizationRuleVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDefaultNormalizationRuleVersionWithOptions(request, runtime);
  }

  /**
   * 更新数据批量接入
   * 
   * @param tmpReq - UpdateDataBatchIngestionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataBatchIngestionResponse
   */
  async updateDataBatchIngestionWithOptions(tmpReq: $_model.UpdateDataBatchIngestionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataBatchIngestionResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDataBatchIngestionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dataIngestionIds)) {
      request.dataIngestionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataIngestionIds, "DataIngestionIds", "simple");
    }

    if (!$dara.isNull(tmpReq.logUserIds)) {
      request.logUserIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.logUserIds, "LogUserIds", "simple");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoScanNew)) {
      body["AutoScanNew"] = request.autoScanNew;
    }

    if (!$dara.isNull(request.dataBatchIngestionMode)) {
      body["DataBatchIngestionMode"] = request.dataBatchIngestionMode;
    }

    if (!$dara.isNull(request.dataIngestionIdsShrink)) {
      body["DataIngestionIds"] = request.dataIngestionIdsShrink;
    }

    if (!$dara.isNull(request.dataSourceRecognizeEnabled)) {
      body["DataSourceRecognizeEnabled"] = request.dataSourceRecognizeEnabled;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.logUserIdsShrink)) {
      body["LogUserIds"] = request.logUserIdsShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataBatchIngestion",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataBatchIngestionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataBatchIngestionResponse({}));
  }

  /**
   * 更新数据批量接入
   * 
   * @param request - UpdateDataBatchIngestionRequest
   * @returns UpdateDataBatchIngestionResponse
   */
  async updateDataBatchIngestion(request: $_model.UpdateDataBatchIngestionRequest): Promise<$_model.UpdateDataBatchIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataBatchIngestionWithOptions(request, runtime);
  }

  /**
   * 更新数据接入信息
   * 
   * @param request - UpdateDataIngestionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataIngestionResponse
   */
  async updateDataIngestionWithOptions(request: $_model.UpdateDataIngestionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataIngestionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataIngestionId)) {
      body["DataIngestionId"] = request.dataIngestionId;
    }

    if (!$dara.isNull(request.dataIngestionMode)) {
      body["DataIngestionMode"] = request.dataIngestionMode;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      body["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.normalizationRuleId)) {
      body["NormalizationRuleId"] = request.normalizationRuleId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataIngestion",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataIngestionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataIngestionResponse({}));
  }

  /**
   * 更新数据接入信息
   * 
   * @param request - UpdateDataIngestionRequest
   * @returns UpdateDataIngestionResponse
   */
  async updateDataIngestion(request: $_model.UpdateDataIngestionRequest): Promise<$_model.UpdateDataIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataIngestionWithOptions(request, runtime);
  }

  /**
   * 更新接入模板
   * 
   * @param request - UpdateDataIngestionTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataIngestionTemplateResponse
   */
  async updateDataIngestionTemplateWithOptions(request: $_model.UpdateDataIngestionTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataIngestionTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataIngestionStatus)) {
      body["DataIngestionStatus"] = request.dataIngestionStatus;
    }

    if (!$dara.isNull(request.dataIngestionTemplateId)) {
      body["DataIngestionTemplateId"] = request.dataIngestionTemplateId;
    }

    if (!$dara.isNull(request.dataIngestionTemplateName)) {
      body["DataIngestionTemplateName"] = request.dataIngestionTemplateName;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.normalizationRuleId)) {
      body["NormalizationRuleId"] = request.normalizationRuleId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataIngestionTemplate",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataIngestionTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataIngestionTemplateResponse({}));
  }

  /**
   * 更新接入模板
   * 
   * @param request - UpdateDataIngestionTemplateRequest
   * @returns UpdateDataIngestionTemplateResponse
   */
  async updateDataIngestionTemplate(request: $_model.UpdateDataIngestionTemplateRequest): Promise<$_model.UpdateDataIngestionTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataIngestionTemplateWithOptions(request, runtime);
  }

  /**
   * 更新数据集
   * 
   * @param request - UpdateDataSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataSetResponse
   */
  async updateDataSetWithOptions(request: $_model.UpdateDataSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataSetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSetDescription)) {
      body["DataSetDescription"] = request.dataSetDescription;
    }

    if (!$dara.isNull(request.dataSetFileName)) {
      body["DataSetFileName"] = request.dataSetFileName;
    }

    if (!$dara.isNull(request.dataSetId)) {
      body["DataSetId"] = request.dataSetId;
    }

    if (!$dara.isNull(request.dataSetName)) {
      body["DataSetName"] = request.dataSetName;
    }

    if (!$dara.isNull(request.dataSetStatus)) {
      body["DataSetStatus"] = request.dataSetStatus;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ipWhitelistRecognizers)) {
      bodyFlat["IpWhitelistRecognizers"] = request.ipWhitelistRecognizers;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataSet",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataSetResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataSetResponse({}));
  }

  /**
   * 更新数据集
   * 
   * @param request - UpdateDataSetRequest
   * @returns UpdateDataSetResponse
   */
  async updateDataSet(request: $_model.UpdateDataSetRequest): Promise<$_model.UpdateDataSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataSetWithOptions(request, runtime);
  }

  /**
   * 更新数据集记录
   * 
   * @param request - UpdateDataSetRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataSetRecordResponse
   */
  async updateDataSetRecordWithOptions(request: $_model.UpdateDataSetRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataSetRecordResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSetFileName)) {
      body["DataSetFileName"] = request.dataSetFileName;
    }

    if (!$dara.isNull(request.dataSetId)) {
      body["DataSetId"] = request.dataSetId;
    }

    if (!$dara.isNull(request.dataSetRecords)) {
      body["DataSetRecords"] = request.dataSetRecords;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataSetRecord",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataSetRecordResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataSetRecordResponse({}));
  }

  /**
   * 更新数据集记录
   * 
   * @param request - UpdateDataSetRecordRequest
   * @returns UpdateDataSetRecordResponse
   */
  async updateDataSetRecord(request: $_model.UpdateDataSetRecordRequest): Promise<$_model.UpdateDataSetRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataSetRecordWithOptions(request, runtime);
  }

  /**
   * 更新数据源
   * 
   * @param request - UpdateDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataSourceResponse
   */
  async updateDataSourceWithOptions(request: $_model.UpdateDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataSourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSourceFrom)) {
      body["DataSourceFrom"] = request.dataSourceFrom;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      body["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.dataSourceName)) {
      body["DataSourceName"] = request.dataSourceName;
    }

    if (!$dara.isNull(request.dataSourceRecognizeEnabled)) {
      body["DataSourceRecognizeEnabled"] = request.dataSourceRecognizeEnabled;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSourceStores)) {
      bodyFlat["DataSourceStores"] = request.dataSourceStores;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.logProjectName)) {
      body["LogProjectName"] = request.logProjectName;
    }

    if (!$dara.isNull(request.logRegionId)) {
      body["LogRegionId"] = request.logRegionId;
    }

    if (!$dara.isNull(request.logStoreName)) {
      body["LogStoreName"] = request.logStoreName;
    }

    if (!$dara.isNull(request.logUserId)) {
      body["LogUserId"] = request.logUserId;
    }

    if (!$dara.isNull(request.orderField)) {
      body["OrderField"] = request.orderField;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataSource",
      version: "2024-12-12",
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
   * 更新数据源
   * 
   * @param request - UpdateDataSourceRequest
   * @returns UpdateDataSourceResponse
   */
  async updateDataSource(request: $_model.UpdateDataSourceRequest): Promise<$_model.UpdateDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataSourceWithOptions(request, runtime);
  }

  /**
   * 修改数据源模板
   * 
   * @param tmpReq - UpdateDataSourceTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataSourceTemplateResponse
   */
  async updateDataSourceTemplateWithOptions(tmpReq: $_model.UpdateDataSourceTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataSourceTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDataSourceTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.logUserIds)) {
      request.logUserIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.logUserIds, "LogUserIds", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.dataSourceRecognizeEnabled)) {
      query["DataSourceRecognizeEnabled"] = request.dataSourceRecognizeEnabled;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoScanNew)) {
      body["AutoScanNew"] = request.autoScanNew;
    }

    if (!$dara.isNull(request.dataSourceTemplateId)) {
      body["DataSourceTemplateId"] = request.dataSourceTemplateId;
    }

    if (!$dara.isNull(request.dataSourceTemplateName)) {
      body["DataSourceTemplateName"] = request.dataSourceTemplateName;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.logProjectPattern)) {
      body["LogProjectPattern"] = request.logProjectPattern;
    }

    if (!$dara.isNull(request.logRegionIds)) {
      body["LogRegionIds"] = request.logRegionIds;
    }

    if (!$dara.isNull(request.logStorePattern)) {
      body["LogStorePattern"] = request.logStorePattern;
    }

    if (!$dara.isNull(request.logUserIdsShrink)) {
      body["LogUserIds"] = request.logUserIdsShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataSourceTemplate",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataSourceTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataSourceTemplateResponse({}));
  }

  /**
   * 修改数据源模板
   * 
   * @param request - UpdateDataSourceTemplateRequest
   * @returns UpdateDataSourceTemplateResponse
   */
  async updateDataSourceTemplate(request: $_model.UpdateDataSourceTemplateRequest): Promise<$_model.UpdateDataSourceTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataSourceTemplateWithOptions(request, runtime);
  }

  /**
   * 获取日志管理页面里用户数据存储的详情。
   * 
   * @param request - UpdateDataStorageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataStorageResponse
   */
  async updateDataStorageWithOptions(request: $_model.UpdateDataStorageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataStorageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataStorageRegionId)) {
      body["DataStorageRegionId"] = request.dataStorageRegionId;
    }

    if (!$dara.isNull(request.deliveryStatus)) {
      body["DeliveryStatus"] = request.deliveryStatus;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataStorage",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataStorageResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataStorageResponse({}));
  }

  /**
   * 获取日志管理页面里用户数据存储的详情。
   * 
   * @param request - UpdateDataStorageRequest
   * @returns UpdateDataStorageResponse
   */
  async updateDataStorage(request: $_model.UpdateDataStorageRequest): Promise<$_model.UpdateDataStorageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataStorageWithOptions(request, runtime);
  }

  /**
   * 操作日志投递.
   * 
   * @param request - UpdateDataStorageDeliveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataStorageDeliveryResponse
   */
  async updateDataStorageDeliveryWithOptions(request: $_model.UpdateDataStorageDeliveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataStorageDeliveryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.logCode)) {
      body["LogCode"] = request.logCode;
    }

    if (!$dara.isNull(request.logDeliveryStatus)) {
      body["LogDeliveryStatus"] = request.logDeliveryStatus;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataStorageDelivery",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataStorageDeliveryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataStorageDeliveryResponse({}));
  }

  /**
   * 操作日志投递.
   * 
   * @param request - UpdateDataStorageDeliveryRequest
   * @returns UpdateDataStorageDeliveryResponse
   */
  async updateDataStorageDelivery(request: $_model.UpdateDataStorageDeliveryRequest): Promise<$_model.UpdateDataStorageDeliveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataStorageDeliveryWithOptions(request, runtime);
  }

  /**
   * 更新数据存储中日志的数据保存天数。
   * 
   * @param request - UpdateDataStorageTtlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataStorageTtlResponse
   */
  async updateDataStorageTtlWithOptions(request: $_model.UpdateDataStorageTtlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataStorageTtlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.logStoreColdTtl)) {
      body["LogStoreColdTtl"] = request.logStoreColdTtl;
    }

    if (!$dara.isNull(request.logStoreHotTtl)) {
      body["LogStoreHotTtl"] = request.logStoreHotTtl;
    }

    if (!$dara.isNull(request.logStoreName)) {
      body["LogStoreName"] = request.logStoreName;
    }

    if (!$dara.isNull(request.logStoreTtl)) {
      body["LogStoreTtl"] = request.logStoreTtl;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataStorageTtl",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataStorageTtlResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataStorageTtlResponse({}));
  }

  /**
   * 更新数据存储中日志的数据保存天数。
   * 
   * @param request - UpdateDataStorageTtlRequest
   * @returns UpdateDataStorageTtlResponse
   */
  async updateDataStorageTtl(request: $_model.UpdateDataStorageTtlRequest): Promise<$_model.UpdateDataStorageTtlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataStorageTtlWithOptions(request, runtime);
  }

  /**
   * 更新检测规则
   * 
   * @param request - UpdateDetectionRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDetectionRuleResponse
   */
  async updateDetectionRuleWithOptions(request: $_model.UpdateDetectionRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDetectionRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertAttCk)) {
      body["AlertAttCk"] = request.alertAttCk;
    }

    if (!$dara.isNull(request.alertDescription)) {
      body["AlertDescription"] = request.alertDescription;
    }

    if (!$dara.isNull(request.alertLevel)) {
      body["AlertLevel"] = request.alertLevel;
    }

    if (!$dara.isNull(request.alertName)) {
      body["AlertName"] = request.alertName;
    }

    if (!$dara.isNull(request.alertSchemaId)) {
      body["AlertSchemaId"] = request.alertSchemaId;
    }

    if (!$dara.isNull(request.alertTacticId)) {
      body["AlertTacticId"] = request.alertTacticId;
    }

    if (!$dara.isNull(request.alertThresholdCount)) {
      body["AlertThresholdCount"] = request.alertThresholdCount;
    }

    if (!$dara.isNull(request.alertThresholdGroup)) {
      body["AlertThresholdGroup"] = request.alertThresholdGroup;
    }

    if (!$dara.isNull(request.alertThresholdPeriod)) {
      body["AlertThresholdPeriod"] = request.alertThresholdPeriod;
    }

    if (!$dara.isNull(request.alertType)) {
      body["AlertType"] = request.alertType;
    }

    if (!$dara.isNull(request.detectionExpressionContent)) {
      body["DetectionExpressionContent"] = request.detectionExpressionContent;
    }

    if (!$dara.isNull(request.detectionExpressionType)) {
      body["DetectionExpressionType"] = request.detectionExpressionType;
    }

    if (!$dara.isNull(request.detectionRuleDescription)) {
      body["DetectionRuleDescription"] = request.detectionRuleDescription;
    }

    if (!$dara.isNull(request.detectionRuleId)) {
      body["DetectionRuleId"] = request.detectionRuleId;
    }

    if (!$dara.isNull(request.detectionRuleName)) {
      body["DetectionRuleName"] = request.detectionRuleName;
    }

    if (!$dara.isNull(request.detectionRuleStatus)) {
      body["DetectionRuleStatus"] = request.detectionRuleStatus;
    }

    if (!$dara.isNull(request.detectionRuleType)) {
      body["DetectionRuleType"] = request.detectionRuleType;
    }

    if (!$dara.isNull(request.entityMappings)) {
      body["EntityMappings"] = request.entityMappings;
    }

    if (!$dara.isNull(request.incidentAggregationExpression)) {
      body["IncidentAggregationExpression"] = request.incidentAggregationExpression;
    }

    if (!$dara.isNull(request.incidentAggregationType)) {
      body["IncidentAggregationType"] = request.incidentAggregationType;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.logCategoryId)) {
      body["LogCategoryId"] = request.logCategoryId;
    }

    if (!$dara.isNull(request.logSchemaId)) {
      body["LogSchemaId"] = request.logSchemaId;
    }

    if (!$dara.isNull(request.playbookParameters)) {
      body["PlaybookParameters"] = request.playbookParameters;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scheduleBeginTime)) {
      body["ScheduleBeginTime"] = request.scheduleBeginTime;
    }

    if (!$dara.isNull(request.scheduleExpression)) {
      body["ScheduleExpression"] = request.scheduleExpression;
    }

    if (!$dara.isNull(request.scheduleMaxRetries)) {
      body["ScheduleMaxRetries"] = request.scheduleMaxRetries;
    }

    if (!$dara.isNull(request.scheduleMaxTimeout)) {
      body["ScheduleMaxTimeout"] = request.scheduleMaxTimeout;
    }

    if (!$dara.isNull(request.scheduleType)) {
      body["ScheduleType"] = request.scheduleType;
    }

    if (!$dara.isNull(request.scheduleWindow)) {
      body["ScheduleWindow"] = request.scheduleWindow;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDetectionRule",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDetectionRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDetectionRuleResponse({}));
  }

  /**
   * 更新检测规则
   * 
   * @param request - UpdateDetectionRuleRequest
   * @returns UpdateDetectionRuleResponse
   */
  async updateDetectionRule(request: $_model.UpdateDetectionRuleRequest): Promise<$_model.UpdateDetectionRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDetectionRuleWithOptions(request, runtime);
  }

  /**
   * 更新标准化规则
   * 
   * @param tmpReq - UpdateNormalizationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNormalizationRuleResponse
   */
  async updateNormalizationRuleWithOptions(tmpReq: $_model.UpdateNormalizationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNormalizationRuleResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateNormalizationRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.normalizationRuleIds)) {
      request.normalizationRuleIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.normalizationRuleIds, "NormalizationRuleIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.extendContentPacked)) {
      body["ExtendContentPacked"] = request.extendContentPacked;
    }

    if (!$dara.isNull(request.extendFieldStoreMode)) {
      body["ExtendFieldStoreMode"] = request.extendFieldStoreMode;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.normalizationCategoryId)) {
      body["NormalizationCategoryId"] = request.normalizationCategoryId;
    }

    if (!$dara.isNull(request.normalizationRuleDescription)) {
      body["NormalizationRuleDescription"] = request.normalizationRuleDescription;
    }

    if (!$dara.isNull(request.normalizationRuleExpression)) {
      body["NormalizationRuleExpression"] = request.normalizationRuleExpression;
    }

    if (!$dara.isNull(request.normalizationRuleFormat)) {
      body["NormalizationRuleFormat"] = request.normalizationRuleFormat;
    }

    if (!$dara.isNull(request.normalizationRuleId)) {
      body["NormalizationRuleId"] = request.normalizationRuleId;
    }

    if (!$dara.isNull(request.normalizationRuleIdsShrink)) {
      body["NormalizationRuleIds"] = request.normalizationRuleIdsShrink;
    }

    if (!$dara.isNull(request.normalizationRuleMode)) {
      body["NormalizationRuleMode"] = request.normalizationRuleMode;
    }

    if (!$dara.isNull(request.normalizationRuleName)) {
      body["NormalizationRuleName"] = request.normalizationRuleName;
    }

    if (!$dara.isNull(request.normalizationRuleType)) {
      body["NormalizationRuleType"] = request.normalizationRuleType;
    }

    if (!$dara.isNull(request.normalizationSchemaId)) {
      body["NormalizationSchemaId"] = request.normalizationSchemaId;
    }

    if (!$dara.isNull(request.orderField)) {
      body["OrderField"] = request.orderField;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.vendorId)) {
      body["VendorId"] = request.vendorId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNormalizationRule",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNormalizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNormalizationRuleResponse({}));
  }

  /**
   * 更新标准化规则
   * 
   * @param request - UpdateNormalizationRuleRequest
   * @returns UpdateNormalizationRuleResponse
   */
  async updateNormalizationRule(request: $_model.UpdateNormalizationRuleRequest): Promise<$_model.UpdateNormalizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNormalizationRuleWithOptions(request, runtime);
  }

  /**
   * 更新标准化结构
   * 
   * @param request - UpdateNormalizationSchemaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNormalizationSchemaResponse
   */
  async updateNormalizationSchemaWithOptions(request: $_model.UpdateNormalizationSchemaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNormalizationSchemaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.normalizationFields)) {
      body["NormalizationFields"] = request.normalizationFields;
    }

    if (!$dara.isNull(request.normalizationSchemaDescription)) {
      body["NormalizationSchemaDescription"] = request.normalizationSchemaDescription;
    }

    if (!$dara.isNull(request.normalizationSchemaId)) {
      body["NormalizationSchemaId"] = request.normalizationSchemaId;
    }

    if (!$dara.isNull(request.normalizationSchemaName)) {
      body["NormalizationSchemaName"] = request.normalizationSchemaName;
    }

    if (!$dara.isNull(request.normalizationSchemaType)) {
      body["NormalizationSchemaType"] = request.normalizationSchemaType;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNormalizationSchema",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNormalizationSchemaResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNormalizationSchemaResponse({}));
  }

  /**
   * 更新标准化结构
   * 
   * @param request - UpdateNormalizationSchemaRequest
   * @returns UpdateNormalizationSchemaResponse
   */
  async updateNormalizationSchema(request: $_model.UpdateNormalizationSchemaRequest): Promise<$_model.UpdateNormalizationSchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNormalizationSchemaWithOptions(request, runtime);
  }

  /**
   * 更新产品品
   * 
   * @param request - UpdateProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProductResponse
   */
  async updateProductWithOptions(request: $_model.UpdateProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProductResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.productName)) {
      body["ProductName"] = request.productName;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.vendorName)) {
      body["VendorName"] = request.vendorName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProduct",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProductResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProductResponse({}));
  }

  /**
   * 更新产品品
   * 
   * @param request - UpdateProductRequest
   * @returns UpdateProductResponse
   */
  async updateProduct(request: $_model.UpdateProductRequest): Promise<$_model.UpdateProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateProductWithOptions(request, runtime);
  }

  /**
   * 更新厂商
   * 
   * @param request - UpdateVendorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVendorResponse
   */
  async updateVendorWithOptions(request: $_model.UpdateVendorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateVendorResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.vendorId)) {
      body["VendorId"] = request.vendorId;
    }

    if (!$dara.isNull(request.vendorName)) {
      body["VendorName"] = request.vendorName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVendor",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateVendorResponse>(await this.callApi(params, req, runtime), new $_model.UpdateVendorResponse({}));
  }

  /**
   * 更新厂商
   * 
   * @param request - UpdateVendorRequest
   * @returns UpdateVendorResponse
   */
  async updateVendor(request: $_model.UpdateVendorRequest): Promise<$_model.UpdateVendorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVendorWithOptions(request, runtime);
  }

  /**
   * 校验LogStore
   * 
   * @param request - ValidateLogStoreRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateLogStoreResponse
   */
  async validateLogStoreWithOptions(request: $_model.ValidateLogStoreRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ValidateLogStoreResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.logProjectName)) {
      body["LogProjectName"] = request.logProjectName;
    }

    if (!$dara.isNull(request.logRegionId)) {
      body["LogRegionId"] = request.logRegionId;
    }

    if (!$dara.isNull(request.logStoreName)) {
      body["LogStoreName"] = request.logStoreName;
    }

    if (!$dara.isNull(request.logUserId)) {
      body["LogUserId"] = request.logUserId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateLogStore",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidateLogStoreResponse>(await this.callApi(params, req, runtime), new $_model.ValidateLogStoreResponse({}));
  }

  /**
   * 校验LogStore
   * 
   * @param request - ValidateLogStoreRequest
   * @returns ValidateLogStoreResponse
   */
  async validateLogStore(request: $_model.ValidateLogStoreRequest): Promise<$_model.ValidateLogStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.validateLogStoreWithOptions(request, runtime);
  }

  /**
   * 校验规则和数据
   * 
   * @param request - ValidateNormalizationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateNormalizationRuleResponse
   */
  async validateNormalizationRuleWithOptions(request: $_model.ValidateNormalizationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ValidateNormalizationRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.data)) {
      body["Data"] = request.data;
    }

    if (!$dara.isNull(request.extendFieldStoreMode)) {
      body["ExtendFieldStoreMode"] = request.extendFieldStoreMode;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.logSample)) {
      body["LogSample"] = request.logSample;
    }

    if (!$dara.isNull(request.normalizationCategoryId)) {
      body["NormalizationCategoryId"] = request.normalizationCategoryId;
    }

    if (!$dara.isNull(request.normalizationRuleExpression)) {
      body["NormalizationRuleExpression"] = request.normalizationRuleExpression;
    }

    if (!$dara.isNull(request.normalizationRuleMode)) {
      body["NormalizationRuleMode"] = request.normalizationRuleMode;
    }

    if (!$dara.isNull(request.normalizationSchemaId)) {
      body["NormalizationSchemaId"] = request.normalizationSchemaId;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.vendorId)) {
      body["VendorId"] = request.vendorId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateNormalizationRule",
      version: "2024-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidateNormalizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.ValidateNormalizationRuleResponse({}));
  }

  /**
   * 校验规则和数据
   * 
   * @param request - ValidateNormalizationRuleRequest
   * @returns ValidateNormalizationRuleResponse
   */
  async validateNormalizationRule(request: $_model.ValidateNormalizationRuleRequest): Promise<$_model.ValidateNormalizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.validateNormalizationRuleWithOptions(request, runtime);
  }

}
