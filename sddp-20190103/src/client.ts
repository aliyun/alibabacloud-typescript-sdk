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
    this._endpointMap = {
      'cn-hongkong': "sddp-api.cn-hongkong.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("sddp", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Modifies the configurations of a common configuration item for alerts.
   * 
   * @remarks
   * You can call this operation to create or restore configurations based on the codes of common configuration items. This allows you to manage the configurations of common configuration items.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConfigResponse
   */
  async createConfigWithOptions(request: $_model.CreateConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.code)) {
      query["Code"] = request.code;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConfig",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateConfigResponse({}));
  }

  /**
   * Modifies the configurations of a common configuration item for alerts.
   * 
   * @remarks
   * You can call this operation to create or restore configurations based on the codes of common configuration items. This allows you to manage the configurations of common configuration items.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateConfigRequest
   * @returns CreateConfigResponse
   */
  async createConfig(request: $_model.CreateConfigRequest): Promise<$_model.CreateConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createConfigWithOptions(request, runtime);
  }

  /**
   * Authorizes Data Security Center (DSC) to scan data assets. The data assets can be a database, a project, or a bucket.
   * 
   * @remarks
   * You can call this operation to authorize DSC to scan data assets to ensure the security of the data assets.
   * 
   * @param request - CreateDataLimitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataLimitResponse
   */
  async createDataLimitWithOptions(request: $_model.CreateDataLimitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataLimitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auditStatus)) {
      query["AuditStatus"] = request.auditStatus;
    }

    if (!$dara.isNull(request.autoScan)) {
      query["AutoScan"] = request.autoScan;
    }

    if (!$dara.isNull(request.certificatePermission)) {
      query["CertificatePermission"] = request.certificatePermission;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.engineType)) {
      query["EngineType"] = request.engineType;
    }

    if (!$dara.isNull(request.eventStatus)) {
      query["EventStatus"] = request.eventStatus;
    }

    if (!$dara.isNull(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!$dara.isNull(request.instantlyScan)) {
      query["InstantlyScan"] = request.instantlyScan;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.logStoreDay)) {
      query["LogStoreDay"] = request.logStoreDay;
    }

    if (!$dara.isNull(request.ocrStatus)) {
      query["OcrStatus"] = request.ocrStatus;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.samplingSize)) {
      query["SamplingSize"] = request.samplingSize;
    }

    if (!$dara.isNull(request.serviceRegionId)) {
      query["ServiceRegionId"] = request.serviceRegionId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataLimit",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataLimitResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataLimitResponse({}));
  }

  /**
   * Authorizes Data Security Center (DSC) to scan data assets. The data assets can be a database, a project, or a bucket.
   * 
   * @remarks
   * You can call this operation to authorize DSC to scan data assets to ensure the security of the data assets.
   * 
   * @param request - CreateDataLimitRequest
   * @returns CreateDataLimitResponse
   */
  async createDataLimit(request: $_model.CreateDataLimitRequest): Promise<$_model.CreateDataLimitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataLimitWithOptions(request, runtime);
  }

  /**
   * Creates a custom sensitive data detection rule.
   * 
   * @param request - CreateRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRuleResponse
   */
  async createRuleWithOptions(request: $_model.CreateRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.contentCategory)) {
      query["ContentCategory"] = request.contentCategory;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.matchType)) {
      query["MatchType"] = request.matchType;
    }

    if (!$dara.isNull(request.modelRuleIds)) {
      query["ModelRuleIds"] = request.modelRuleIds;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.riskLevelId)) {
      query["RiskLevelId"] = request.riskLevelId;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.statExpress)) {
      query["StatExpress"] = request.statExpress;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.supportForm)) {
      query["SupportForm"] = request.supportForm;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    if (!$dara.isNull(request.templateRuleIds)) {
      query["TemplateRuleIds"] = request.templateRuleIds;
    }

    if (!$dara.isNull(request.warnLevel)) {
      query["WarnLevel"] = request.warnLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRule",
      version: "2019-01-03",
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
   * Creates a custom sensitive data detection rule.
   * 
   * @param request - CreateRuleRequest
   * @returns CreateRuleResponse
   */
  async createRule(request: $_model.CreateRuleRequest): Promise<$_model.CreateRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRuleWithOptions(request, runtime);
  }

  /**
   * Creates a custom scan task. The custom scan task is used to scan data assets on which Data Security Center (DSC) is granted the scan permissions for sensitive data.
   * 
   * @remarks
   * You can call this operation to create a custom scan task for authorized data assets. You can customize the interval between two consecutive scan tasks and the time when the scan task is executed next time.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateScanTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScanTaskResponse
   */
  async createScanTaskWithOptions(request: $_model.CreateScanTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateScanTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataLimitId)) {
      query["DataLimitId"] = request.dataLimitId;
    }

    if (!$dara.isNull(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!$dara.isNull(request.intervalDay)) {
      query["IntervalDay"] = request.intervalDay;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.ossScanPath)) {
      query["OssScanPath"] = request.ossScanPath;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.runHour)) {
      query["RunHour"] = request.runHour;
    }

    if (!$dara.isNull(request.runMinute)) {
      query["RunMinute"] = request.runMinute;
    }

    if (!$dara.isNull(request.scanRange)) {
      query["ScanRange"] = request.scanRange;
    }

    if (!$dara.isNull(request.scanRangeContent)) {
      query["ScanRangeContent"] = request.scanRangeContent;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.taskUserName)) {
      query["TaskUserName"] = request.taskUserName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScanTask",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateScanTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateScanTaskResponse({}));
  }

  /**
   * Creates a custom scan task. The custom scan task is used to scan data assets on which Data Security Center (DSC) is granted the scan permissions for sensitive data.
   * 
   * @remarks
   * You can call this operation to create a custom scan task for authorized data assets. You can customize the interval between two consecutive scan tasks and the time when the scan task is executed next time.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateScanTaskRequest
   * @returns CreateScanTaskResponse
   */
  async createScanTask(request: $_model.CreateScanTaskRequest): Promise<$_model.CreateScanTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createScanTaskWithOptions(request, runtime);
  }

  /**
   * Creates a service-linked role for Data Security Center (DSC) to grant DSC the permissions to access data assets in other services.
   * 
   * @remarks
   * You can call this operation to allow DSC to access the data assets in services such as Object Storage Service (OSS), ApsaraDB RDS, and MaxCompute. After you call this operation, the system automatically creates a service-linked role named AliyunServiceRoleForSDDP and attaches the AliyunServiceRolePolicyForSDDP policy to the role.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateSlrRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSlrRoleResponse
   */
  async createSlrRoleWithOptions(request: $_model.CreateSlrRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSlrRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSlrRole",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSlrRoleResponse>(await this.callApi(params, req, runtime), new $_model.CreateSlrRoleResponse({}));
  }

  /**
   * Creates a service-linked role for Data Security Center (DSC) to grant DSC the permissions to access data assets in other services.
   * 
   * @remarks
   * You can call this operation to allow DSC to access the data assets in services such as Object Storage Service (OSS), ApsaraDB RDS, and MaxCompute. After you call this operation, the system automatically creates a service-linked role named AliyunServiceRoleForSDDP and attaches the AliyunServiceRolePolicyForSDDP policy to the role.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateSlrRoleRequest
   * @returns CreateSlrRoleResponse
   */
  async createSlrRole(request: $_model.CreateSlrRoleRequest): Promise<$_model.CreateSlrRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSlrRoleWithOptions(request, runtime);
  }

  /**
   * Revokes the scan permissions on a data asset. The data asset can be a database, an instance, or a bucket.
   * 
   * @remarks
   * You can call this operation to revoke the permissions on a data asset from Data Security Center (DSC).
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteDataLimitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataLimitResponse
   */
  async deleteDataLimitWithOptions(request: $_model.DeleteDataLimitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataLimitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataLimit",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataLimitResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataLimitResponse({}));
  }

  /**
   * Revokes the scan permissions on a data asset. The data asset can be a database, an instance, or a bucket.
   * 
   * @remarks
   * You can call this operation to revoke the permissions on a data asset from Data Security Center (DSC).
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteDataLimitRequest
   * @returns DeleteDataLimitResponse
   */
  async deleteDataLimit(request: $_model.DeleteDataLimitRequest): Promise<$_model.DeleteDataLimitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataLimitWithOptions(request, runtime);
  }

  /**
   * Deletes a custom sensitive data detection rule from Data Security Center (DSC).
   * 
   * @param request - DeleteRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRuleResponse
   */
  async deleteRuleWithOptions(request: $_model.DeleteRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRule",
      version: "2019-01-03",
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
   * Deletes a custom sensitive data detection rule from Data Security Center (DSC).
   * 
   * @param request - DeleteRuleRequest
   * @returns DeleteRuleResponse
   */
  async deleteRule(request: $_model.DeleteRuleRequest): Promise<$_model.DeleteRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRuleWithOptions(request, runtime);
  }

  /**
   * 查询审计告警日志列表
   * 
   * @param request - DescribeAuditLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAuditLogsResponse
   */
  async describeAuditLogsWithOptions(request: $_model.DescribeAuditLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAuditLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.asyncRequestId)) {
      query["AsyncRequestId"] = request.asyncRequestId;
    }

    if (!$dara.isNull(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.clientUa)) {
      query["ClientUa"] = request.clientUa;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.effectRowRange)) {
      query["EffectRowRange"] = request.effectRowRange;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.executeTimeRange)) {
      query["ExecuteTimeRange"] = request.executeTimeRange;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.ipType)) {
      query["IpType"] = request.ipType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.loadWhiteList)) {
      query["LoadWhiteList"] = request.loadWhiteList;
    }

    if (!$dara.isNull(request.logSource)) {
      query["LogSource"] = request.logSource;
    }

    if (!$dara.isNull(request.memberAccount)) {
      query["MemberAccount"] = request.memberAccount;
    }

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    if (!$dara.isNull(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!$dara.isNull(request.ossObjectKey)) {
      query["OssObjectKey"] = request.ossObjectKey;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.ruleAggQuery)) {
      query["RuleAggQuery"] = request.ruleAggQuery;
    }

    if (!$dara.isNull(request.ruleCategory)) {
      query["RuleCategory"] = request.ruleCategory;
    }

    if (!$dara.isNull(request.ruleID)) {
      query["RuleID"] = request.ruleID;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.sqlText)) {
      query["SqlText"] = request.sqlText;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAuditLogs",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAuditLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAuditLogsResponse({}));
  }

  /**
   * 查询审计告警日志列表
   * 
   * @param request - DescribeAuditLogsRequest
   * @returns DescribeAuditLogsResponse
   */
  async describeAuditLogs(request: $_model.DescribeAuditLogsRequest): Promise<$_model.DescribeAuditLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAuditLogsWithOptions(request, runtime);
  }

  /**
   * Call this interface to query the list of industry templates.
   * 
   * @param request - DescribeCategoryTemplateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCategoryTemplateListResponse
   */
  async describeCategoryTemplateListWithOptions(request: $_model.DescribeCategoryTemplateListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCategoryTemplateListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.usageScenario)) {
      query["UsageScenario"] = request.usageScenario;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCategoryTemplateList",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCategoryTemplateListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCategoryTemplateListResponse({}));
  }

  /**
   * Call this interface to query the list of industry templates.
   * 
   * @param request - DescribeCategoryTemplateListRequest
   * @returns DescribeCategoryTemplateListResponse
   */
  async describeCategoryTemplateList(request: $_model.DescribeCategoryTemplateListRequest): Promise<$_model.DescribeCategoryTemplateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCategoryTemplateListWithOptions(request, runtime);
  }

  /**
   * Queries rules in a classification template by page.
   * 
   * @remarks
   * You can call this operation to query rules in a classification template.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeCategoryTemplateRuleListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCategoryTemplateRuleListResponse
   */
  async describeCategoryTemplateRuleListWithOptions(request: $_model.DescribeCategoryTemplateRuleListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCategoryTemplateRuleListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.riskLevelId)) {
      query["RiskLevelId"] = request.riskLevelId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCategoryTemplateRuleList",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCategoryTemplateRuleListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCategoryTemplateRuleListResponse({}));
  }

  /**
   * Queries rules in a classification template by page.
   * 
   * @remarks
   * You can call this operation to query rules in a classification template.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeCategoryTemplateRuleListRequest
   * @returns DescribeCategoryTemplateRuleListResponse
   */
  async describeCategoryTemplateRuleList(request: $_model.DescribeCategoryTemplateRuleListRequest): Promise<$_model.DescribeCategoryTemplateRuleListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCategoryTemplateRuleListWithOptions(request, runtime);
  }

  /**
   * Queries data in the columns of the tables that Data Security Center (DSC) is authorized to access. The tables include the tables of MaxCompute and ApsaraDB RDS.
   * 
   * @remarks
   * You can call this operation to query the data in columns of a table that may contain sensitive data. This helps you analyze sensitive data.
   * ## [](#)Precautions
   * The DescribeColumns operation is changed to DescribeColumnsV2. We recommend that you call the DescribeColumnsV2 operation when you develop your applications.
   * ## [](#qps)Limits
   * Each Alibaba Cloud account can call this operation up to 10 times per second. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeColumnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeColumnsResponse
   */
  async describeColumnsWithOptions(request: $_model.DescribeColumnsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeColumnsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.engineType)) {
      query["EngineType"] = request.engineType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.modelTagId)) {
      query["ModelTagId"] = request.modelTagId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.riskLevelId)) {
      query["RiskLevelId"] = request.riskLevelId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.sensLevelName)) {
      query["SensLevelName"] = request.sensLevelName;
    }

    if (!$dara.isNull(request.tableId)) {
      query["TableId"] = request.tableId;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateRuleId)) {
      query["TemplateRuleId"] = request.templateRuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeColumns",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeColumnsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeColumnsResponse({}));
  }

  /**
   * Queries data in the columns of the tables that Data Security Center (DSC) is authorized to access. The tables include the tables of MaxCompute and ApsaraDB RDS.
   * 
   * @remarks
   * You can call this operation to query the data in columns of a table that may contain sensitive data. This helps you analyze sensitive data.
   * ## [](#)Precautions
   * The DescribeColumns operation is changed to DescribeColumnsV2. We recommend that you call the DescribeColumnsV2 operation when you develop your applications.
   * ## [](#qps)Limits
   * Each Alibaba Cloud account can call this operation up to 10 times per second. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeColumnsRequest
   * @returns DescribeColumnsResponse
   */
  async describeColumns(request: $_model.DescribeColumnsRequest): Promise<$_model.DescribeColumnsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeColumnsWithOptions(request, runtime);
  }

  /**
   * Query data in columns of data assets such as MaxCompute, RDS, etc., that are authorized by the Data Security Center.
   * 
   * @param request - DescribeColumnsV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeColumnsV2Response
   */
  async describeColumnsV2WithOptions(request: $_model.DescribeColumnsV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeColumnsV2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.engineType)) {
      query["EngineType"] = request.engineType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.riskLevelId)) {
      query["RiskLevelId"] = request.riskLevelId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.sensLevelName)) {
      query["SensLevelName"] = request.sensLevelName;
    }

    if (!$dara.isNull(request.tableId)) {
      query["TableId"] = request.tableId;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeColumnsV2",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeColumnsV2Response>(await this.callApi(params, req, runtime), new $_model.DescribeColumnsV2Response({}));
  }

  /**
   * Query data in columns of data assets such as MaxCompute, RDS, etc., that are authorized by the Data Security Center.
   * 
   * @param request - DescribeColumnsV2Request
   * @returns DescribeColumnsV2Response
   */
  async describeColumnsV2(request: $_model.DescribeColumnsV2Request): Promise<$_model.DescribeColumnsV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeColumnsV2WithOptions(request, runtime);
  }

  /**
   * Queries common configuration items for alerts.
   * 
   * @param request - DescribeConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeConfigsResponse
   */
  async describeConfigsWithOptions(request: $_model.DescribeConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeConfigs",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeConfigsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeConfigsResponse({}));
  }

  /**
   * Queries common configuration items for alerts.
   * 
   * @param request - DescribeConfigsRequest
   * @returns DescribeConfigsResponse
   */
  async describeConfigs(request: $_model.DescribeConfigsRequest): Promise<$_model.DescribeConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeConfigsWithOptions(request, runtime);
  }

  /**
   * Queries the sensitive data detection results of data assets that Data Security Center (DSC) is authorized to access.
   * 
   * @param request - DescribeDataAssetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataAssetsResponse
   */
  async describeDataAssetsWithOptions(request: $_model.DescribeDataAssetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataAssetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.rangeId)) {
      query["RangeId"] = request.rangeId;
    }

    if (!$dara.isNull(request.riskLevels)) {
      query["RiskLevels"] = request.riskLevels;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDataAssets",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataAssetsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataAssetsResponse({}));
  }

  /**
   * Queries the sensitive data detection results of data assets that Data Security Center (DSC) is authorized to access.
   * 
   * @param request - DescribeDataAssetsRequest
   * @returns DescribeDataAssetsResponse
   */
  async describeDataAssets(request: $_model.DescribeDataAssetsRequest): Promise<$_model.DescribeDataAssetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataAssetsWithOptions(request, runtime);
  }

  /**
   * Queries the details of a data asset, such as a MaxCompute project, an ApsaraDB RDS database, or an Object Storage Service (OSS) bucket, that you authorize Data Security Center (DSC) to access.
   * 
   * @param request - DescribeDataLimitDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataLimitDetailResponse
   */
  async describeDataLimitDetailWithOptions(request: $_model.DescribeDataLimitDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataLimitDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDataLimitDetail",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataLimitDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataLimitDetailResponse({}));
  }

  /**
   * Queries the details of a data asset, such as a MaxCompute project, an ApsaraDB RDS database, or an Object Storage Service (OSS) bucket, that you authorize Data Security Center (DSC) to access.
   * 
   * @param request - DescribeDataLimitDetailRequest
   * @returns DescribeDataLimitDetailResponse
   */
  async describeDataLimitDetail(request: $_model.DescribeDataLimitDetailRequest): Promise<$_model.DescribeDataLimitDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataLimitDetailWithOptions(request, runtime);
  }

  /**
   * Queries data assets, such as instances, databases, and Object Storage Service (OSS) buckets, that you authorize Data Security Center (DSC) to scan in a service.
   * 
   * @remarks
   * You can call this operation to query the data assets that are authorized to be scanned. This facilitates resource search and aggregation.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDataLimitSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataLimitSetResponse
   */
  async describeDataLimitSetWithOptions(request: $_model.DescribeDataLimitSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataLimitSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!$dara.isNull(request.regionType)) {
      query["RegionType"] = request.regionType;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDataLimitSet",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataLimitSetResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataLimitSetResponse({}));
  }

  /**
   * Queries data assets, such as instances, databases, and Object Storage Service (OSS) buckets, that you authorize Data Security Center (DSC) to scan in a service.
   * 
   * @remarks
   * You can call this operation to query the data assets that are authorized to be scanned. This facilitates resource search and aggregation.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDataLimitSetRequest
   * @returns DescribeDataLimitSetResponse
   */
  async describeDataLimitSet(request: $_model.DescribeDataLimitSetRequest): Promise<$_model.DescribeDataLimitSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataLimitSetWithOptions(request, runtime);
  }

  /**
   * Queries the data assets such as instances, databases, or buckets that Data Security Center (DSC) is authorized to access.
   * 
   * @param request - DescribeDataLimitsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataLimitsResponse
   */
  async describeDataLimitsWithOptions(request: $_model.DescribeDataLimitsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataLimitsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auditStatus)) {
      query["AuditStatus"] = request.auditStatus;
    }

    if (!$dara.isNull(request.checkStatus)) {
      query["CheckStatus"] = request.checkStatus;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.datamaskStatus)) {
      query["DatamaskStatus"] = request.datamaskStatus;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.engineType)) {
      query["EngineType"] = request.engineType;
    }

    if (!$dara.isNull(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.memberAccount)) {
      query["MemberAccount"] = request.memberAccount;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceRegionId)) {
      query["ServiceRegionId"] = request.serviceRegionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDataLimits",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataLimitsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataLimitsResponse({}));
  }

  /**
   * Queries the data assets such as instances, databases, or buckets that Data Security Center (DSC) is authorized to access.
   * 
   * @param request - DescribeDataLimitsRequest
   * @returns DescribeDataLimitsResponse
   */
  async describeDataLimits(request: $_model.DescribeDataLimitsRequest): Promise<$_model.DescribeDataLimitsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataLimitsWithOptions(request, runtime);
  }

  /**
   * Queries the execution information about a de-identification task.
   * 
   * @remarks
   * You can call this operation to query the execution information of a static de-identification task, including the status and progress.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDataMaskingRunHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataMaskingRunHistoryResponse
   */
  async describeDataMaskingRunHistoryWithOptions(request: $_model.DescribeDataMaskingRunHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataMaskingRunHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dstType)) {
      query["DstType"] = request.dstType;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.mainProcessId)) {
      query["MainProcessId"] = request.mainProcessId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.srcTableName)) {
      query["SrcTableName"] = request.srcTableName;
    }

    if (!$dara.isNull(request.srcType)) {
      query["SrcType"] = request.srcType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDataMaskingRunHistory",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataMaskingRunHistoryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataMaskingRunHistoryResponse({}));
  }

  /**
   * Queries the execution information about a de-identification task.
   * 
   * @remarks
   * You can call this operation to query the execution information of a static de-identification task, including the status and progress.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDataMaskingRunHistoryRequest
   * @returns DescribeDataMaskingRunHistoryResponse
   */
  async describeDataMaskingRunHistory(request: $_model.DescribeDataMaskingRunHistoryRequest): Promise<$_model.DescribeDataMaskingRunHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataMaskingRunHistoryWithOptions(request, runtime);
  }

  /**
   * Queries de-identification tasks.
   * 
   * @remarks
   * You can call this operation to query static de-identification tasks. This facilitates task queries and management.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDataMaskingTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataMaskingTasksResponse
   */
  async describeDataMaskingTasksWithOptions(request: $_model.DescribeDataMaskingTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataMaskingTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dstType)) {
      query["DstType"] = request.dstType;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDataMaskingTasks",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataMaskingTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataMaskingTasksResponse({}));
  }

  /**
   * Queries de-identification tasks.
   * 
   * @remarks
   * You can call this operation to query static de-identification tasks. This facilitates task queries and management.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDataMaskingTasksRequest
   * @returns DescribeDataMaskingTasksResponse
   */
  async describeDataMaskingTasks(request: $_model.DescribeDataMaskingTasksRequest): Promise<$_model.DescribeDataMaskingTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataMaskingTasksWithOptions(request, runtime);
  }

  /**
   * View data object column details
   * 
   * @remarks
   * ## Notes
   * The DescribeDataObjectColumnDetail interface has been revised to DescribeDataObjectColumnDetailV2. It is recommended that you use the newer version, DescribeDataObjectColumnDetailV2, when developing your application.
   * 
   * @param request - DescribeDataObjectColumnDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataObjectColumnDetailResponse
   */
  async describeDataObjectColumnDetailWithOptions(request: $_model.DescribeDataObjectColumnDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataObjectColumnDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDataObjectColumnDetail",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataObjectColumnDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataObjectColumnDetailResponse({}));
  }

  /**
   * View data object column details
   * 
   * @remarks
   * ## Notes
   * The DescribeDataObjectColumnDetail interface has been revised to DescribeDataObjectColumnDetailV2. It is recommended that you use the newer version, DescribeDataObjectColumnDetailV2, when developing your application.
   * 
   * @param request - DescribeDataObjectColumnDetailRequest
   * @returns DescribeDataObjectColumnDetailResponse
   */
  async describeDataObjectColumnDetail(request: $_model.DescribeDataObjectColumnDetailRequest): Promise<$_model.DescribeDataObjectColumnDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataObjectColumnDetailWithOptions(request, runtime);
  }

  /**
   * View Data Object Column Details V2
   * 
   * @param request - DescribeDataObjectColumnDetailV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataObjectColumnDetailV2Response
   */
  async describeDataObjectColumnDetailV2WithOptions(request: $_model.DescribeDataObjectColumnDetailV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataObjectColumnDetailV2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDataObjectColumnDetailV2",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataObjectColumnDetailV2Response>(await this.callApi(params, req, runtime), new $_model.DescribeDataObjectColumnDetailV2Response({}));
  }

  /**
   * View Data Object Column Details V2
   * 
   * @param request - DescribeDataObjectColumnDetailV2Request
   * @returns DescribeDataObjectColumnDetailV2Response
   */
  async describeDataObjectColumnDetailV2(request: $_model.DescribeDataObjectColumnDetailV2Request): Promise<$_model.DescribeDataObjectColumnDetailV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataObjectColumnDetailV2WithOptions(request, runtime);
  }

  /**
   * Paginated Query of Data Catalog Objects
   * 
   * @param request - DescribeDataObjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataObjectsResponse
   */
  async describeDataObjectsWithOptions(request: $_model.DescribeDataObjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataObjectsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!$dara.isNull(request.fileCategoryCode)) {
      query["FileCategoryCode"] = request.fileCategoryCode;
    }

    if (!$dara.isNull(request.fileType)) {
      query["FileType"] = request.fileType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.memberAccount)) {
      query["MemberAccount"] = request.memberAccount;
    }

    if (!$dara.isNull(request.modelIds)) {
      query["ModelIds"] = request.modelIds;
    }

    if (!$dara.isNull(request.modelTagIds)) {
      query["ModelTagIds"] = request.modelTagIds;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentCategoryIds)) {
      query["ParentCategoryIds"] = request.parentCategoryIds;
    }

    if (!$dara.isNull(request.productIds)) {
      query["ProductIds"] = request.productIds;
    }

    if (!$dara.isNull(request.queryName)) {
      query["QueryName"] = request.queryName;
    }

    if (!$dara.isNull(request.riskLevels)) {
      query["RiskLevels"] = request.riskLevels;
    }

    if (!$dara.isNull(request.serviceRegionId)) {
      query["ServiceRegionId"] = request.serviceRegionId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDataObjects",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataObjectsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataObjectsResponse({}));
  }

  /**
   * Paginated Query of Data Catalog Objects
   * 
   * @param request - DescribeDataObjectsRequest
   * @returns DescribeDataObjectsResponse
   */
  async describeDataObjects(request: $_model.DescribeDataObjectsRequest): Promise<$_model.DescribeDataObjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataObjectsWithOptions(request, runtime);
  }

  /**
   * Queries a list of OSS object types that can be identified.
   * 
   * @param request - DescribeDocTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDocTypesResponse
   */
  async describeDocTypesWithOptions(request: $_model.DescribeDocTypesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDocTypesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDocTypes",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDocTypesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDocTypesResponse({}));
  }

  /**
   * Queries a list of OSS object types that can be identified.
   * 
   * @param request - DescribeDocTypesRequest
   * @returns DescribeDocTypesResponse
   */
  async describeDocTypes(request: $_model.DescribeDocTypesRequest): Promise<$_model.DescribeDocTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDocTypesWithOptions(request, runtime);
  }

  /**
   * Queries the details of an anomalous event. The details include the time when the anomalous event occurred, and the description and handling status of the anomalous event.
   * 
   * @param request - DescribeEventDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventDetailResponse
   */
  async describeEventDetailWithOptions(request: $_model.DescribeEventDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventDetailResponse> {
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
      action: "DescribeEventDetail",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventDetailResponse({}));
  }

  /**
   * Queries the details of an anomalous event. The details include the time when the anomalous event occurred, and the description and handling status of the anomalous event.
   * 
   * @param request - DescribeEventDetailRequest
   * @returns DescribeEventDetailResponse
   */
  async describeEventDetail(request: $_model.DescribeEventDetailRequest): Promise<$_model.DescribeEventDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventDetailWithOptions(request, runtime);
  }

  /**
   * Queries the types of anomalous events.
   * 
   * @param request - DescribeEventTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventTypesResponse
   */
  async describeEventTypesWithOptions(request: $_model.DescribeEventTypesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventTypesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.parentTypeId)) {
      query["ParentTypeId"] = request.parentTypeId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEventTypes",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventTypesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventTypesResponse({}));
  }

  /**
   * Queries the types of anomalous events.
   * 
   * @param request - DescribeEventTypesRequest
   * @returns DescribeEventTypesResponse
   */
  async describeEventTypes(request: $_model.DescribeEventTypesRequest): Promise<$_model.DescribeEventTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventTypesWithOptions(request, runtime);
  }

  /**
   * Queries anomalous events.
   * 
   * @remarks
   * You can call this operation to query anomalous events that may involve data leaks. This helps you search for and handle anomalous events.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventsResponse
   */
  async describeEventsWithOptions(request: $_model.DescribeEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dealUserId)) {
      query["DealUserId"] = request.dealUserId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.subTypeCode)) {
      query["SubTypeCode"] = request.subTypeCode;
    }

    if (!$dara.isNull(request.targetProductCode)) {
      query["TargetProductCode"] = request.targetProductCode;
    }

    if (!$dara.isNull(request.typeCode)) {
      query["TypeCode"] = request.typeCode;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.warnLevel)) {
      query["WarnLevel"] = request.warnLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEvents",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventsResponse({}));
  }

  /**
   * Queries anomalous events.
   * 
   * @remarks
   * You can call this operation to query anomalous events that may involve data leaks. This helps you search for and handle anomalous events.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeEventsRequest
   * @returns DescribeEventsResponse
   */
  async describeEvents(request: $_model.DescribeEventsRequest): Promise<$_model.DescribeEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventsWithOptions(request, runtime);
  }

  /**
   * Query the status of an identification task
   * 
   * @remarks
   * ## QPS Limit
   * The QPS limit for this interface per user is 10 times/second. Exceeding the limit will result in API calls being rate-limited, which may affect your business. Please call it reasonably.
   * 
   * @param request - DescribeIdentifyTaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIdentifyTaskStatusResponse
   */
  async describeIdentifyTaskStatusWithOptions(request: $_model.DescribeIdentifyTaskStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIdentifyTaskStatusResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIdentifyTaskStatus",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIdentifyTaskStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIdentifyTaskStatusResponse({}));
  }

  /**
   * Query the status of an identification task
   * 
   * @remarks
   * ## QPS Limit
   * The QPS limit for this interface per user is 10 times/second. Exceeding the limit will result in API calls being rate-limited, which may affect your business. Please call it reasonably.
   * 
   * @param request - DescribeIdentifyTaskStatusRequest
   * @returns DescribeIdentifyTaskStatusResponse
   */
  async describeIdentifyTaskStatus(request: $_model.DescribeIdentifyTaskStatusRequest): Promise<$_model.DescribeIdentifyTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIdentifyTaskStatusWithOptions(request, runtime);
  }

  /**
   * Queries a list of data assets.
   * 
   * @remarks
   * You can query a list of unauthorized or authorized data assets based on the value of AuthStatus.
   * This operation is no longer used for the KMS console of the new version.
   * 
   * @param request - DescribeInstanceSourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceSourcesResponse
   */
  async describeInstanceSourcesWithOptions(request: $_model.DescribeInstanceSourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceSourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auditStatus)) {
      query["AuditStatus"] = request.auditStatus;
    }

    if (!$dara.isNull(request.authStatus)) {
      query["AuthStatus"] = request.authStatus;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.engineType)) {
      query["EngineType"] = request.engineType;
    }

    if (!$dara.isNull(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.searchType)) {
      query["SearchType"] = request.searchType;
    }

    if (!$dara.isNull(request.serviceRegionId)) {
      query["ServiceRegionId"] = request.serviceRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceSources",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceSourcesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceSourcesResponse({}));
  }

  /**
   * Queries a list of data assets.
   * 
   * @remarks
   * You can query a list of unauthorized or authorized data assets based on the value of AuthStatus.
   * This operation is no longer used for the KMS console of the new version.
   * 
   * @param request - DescribeInstanceSourcesRequest
   * @returns DescribeInstanceSourcesResponse
   */
  async describeInstanceSources(request: $_model.DescribeInstanceSourcesRequest): Promise<$_model.DescribeInstanceSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceSourcesWithOptions(request, runtime);
  }

  /**
   * Queries data assets such as MaxCompute, ApsaraDB RDS, and Object Storage Service (OSS) that you authorize Data Security Center (DSC) to access.
   * 
   * @remarks
   * When you call the DescribeInstances operation, you can specify parameters such as Name and RiskLevelId to query data assets that meet filter conditions.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstancesResponse
   */
  async describeInstancesWithOptions(request: $_model.DescribeInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.riskLevelId)) {
      query["RiskLevelId"] = request.riskLevelId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.serviceRegionId)) {
      query["ServiceRegionId"] = request.serviceRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstances",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstancesResponse({}));
  }

  /**
   * Queries data assets such as MaxCompute, ApsaraDB RDS, and Object Storage Service (OSS) that you authorize Data Security Center (DSC) to access.
   * 
   * @remarks
   * When you call the DescribeInstances operation, you can specify parameters such as Name and RiskLevelId to query data assets that meet filter conditions.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeInstancesRequest
   * @returns DescribeInstancesResponse
   */
  async describeInstances(request: $_model.DescribeInstancesRequest): Promise<$_model.DescribeInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the details of an Object Storage Service (OSS) object that Data Security Center (DSC) is authorized to access.
   * 
   * @remarks
   * You can call this operation to query the details of an Object Storage Service (OSS) object. This helps you locate sensitive data detected in OSS.
   * ## [](#)Precautions
   * The DescribeOssObjectDetail operation is chagned to DescribeOssObjectDetailV2. We recommend that you call the DescribeOssObjectDetailV2 operation when you develop your applications.
   * ## [](#qps)Limits
   * Each Alibaba Cloud account can call this operation up to 10 times per second. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeOssObjectDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOssObjectDetailResponse
   */
  async describeOssObjectDetailWithOptions(request: $_model.DescribeOssObjectDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOssObjectDetailResponse> {
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
      action: "DescribeOssObjectDetail",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOssObjectDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOssObjectDetailResponse({}));
  }

  /**
   * Queries the details of an Object Storage Service (OSS) object that Data Security Center (DSC) is authorized to access.
   * 
   * @remarks
   * You can call this operation to query the details of an Object Storage Service (OSS) object. This helps you locate sensitive data detected in OSS.
   * ## [](#)Precautions
   * The DescribeOssObjectDetail operation is chagned to DescribeOssObjectDetailV2. We recommend that you call the DescribeOssObjectDetailV2 operation when you develop your applications.
   * ## [](#qps)Limits
   * Each Alibaba Cloud account can call this operation up to 10 times per second. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeOssObjectDetailRequest
   * @returns DescribeOssObjectDetailResponse
   */
  async describeOssObjectDetail(request: $_model.DescribeOssObjectDetailRequest): Promise<$_model.DescribeOssObjectDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOssObjectDetailWithOptions(request, runtime);
  }

  /**
   * Call this interface to query the details of a single storage object in OSS that is authorized by the Data Security Center.
   * 
   * @remarks
   * This interface is generally used to query the detailed information of OSS storage objects, which facilitates the accurate positioning of sensitive OSS assets.
   * 
   * @param request - DescribeOssObjectDetailV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOssObjectDetailV2Response
   */
  async describeOssObjectDetailV2WithOptions(request: $_model.DescribeOssObjectDetailV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOssObjectDetailV2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.objectKey)) {
      query["ObjectKey"] = request.objectKey;
    }

    if (!$dara.isNull(request.serviceRegionId)) {
      query["ServiceRegionId"] = request.serviceRegionId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOssObjectDetailV2",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOssObjectDetailV2Response>(await this.callApi(params, req, runtime), new $_model.DescribeOssObjectDetailV2Response({}));
  }

  /**
   * Call this interface to query the details of a single storage object in OSS that is authorized by the Data Security Center.
   * 
   * @remarks
   * This interface is generally used to query the detailed information of OSS storage objects, which facilitates the accurate positioning of sensitive OSS assets.
   * 
   * @param request - DescribeOssObjectDetailV2Request
   * @returns DescribeOssObjectDetailV2Response
   */
  async describeOssObjectDetailV2(request: $_model.DescribeOssObjectDetailV2Request): Promise<$_model.DescribeOssObjectDetailV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOssObjectDetailV2WithOptions(request, runtime);
  }

  /**
   * Queries Object Storage Service (OSS) objects that you authorize Data Security Center (DSC) to access.
   * 
   * @param request - DescribeOssObjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOssObjectsResponse
   */
  async describeOssObjectsWithOptions(request: $_model.DescribeOssObjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOssObjectsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.fileCategoryCode)) {
      query["FileCategoryCode"] = request.fileCategoryCode;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.lastScanTimeEnd)) {
      query["LastScanTimeEnd"] = request.lastScanTimeEnd;
    }

    if (!$dara.isNull(request.lastScanTimeStart)) {
      query["LastScanTimeStart"] = request.lastScanTimeStart;
    }

    if (!$dara.isNull(request.marker)) {
      query["Marker"] = request.marker;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.riskLevelId)) {
      query["RiskLevelId"] = request.riskLevelId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.serviceRegionId)) {
      query["ServiceRegionId"] = request.serviceRegionId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOssObjects",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOssObjectsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOssObjectsResponse({}));
  }

  /**
   * Queries Object Storage Service (OSS) objects that you authorize Data Security Center (DSC) to access.
   * 
   * @param request - DescribeOssObjectsRequest
   * @returns DescribeOssObjectsResponse
   */
  async describeOssObjects(request: $_model.DescribeOssObjectsRequest): Promise<$_model.DescribeOssObjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOssObjectsWithOptions(request, runtime);
  }

  /**
   * Queries information about the MaxCompute packages that Data Security Center (DSC) is authorized to access. The information includes the names of MaxCompute packages, the accounts of MaxCompute package owners, and the sensitivity levels of MaxCompute packages.
   * 
   * @remarks
   * You can call this operation to query MaxCompute packages that are scanned by DSC. This helps you search for MaxCompute packages and view the summary of MaxCompute packages.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribePackagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePackagesResponse
   */
  async describePackagesWithOptions(request: $_model.DescribePackagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePackagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.riskLevelId)) {
      query["RiskLevelId"] = request.riskLevelId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePackages",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePackagesResponse>(await this.callApi(params, req, runtime), new $_model.DescribePackagesResponse({}));
  }

  /**
   * Queries information about the MaxCompute packages that Data Security Center (DSC) is authorized to access. The information includes the names of MaxCompute packages, the accounts of MaxCompute package owners, and the sensitivity levels of MaxCompute packages.
   * 
   * @remarks
   * You can call this operation to query MaxCompute packages that are scanned by DSC. This helps you search for MaxCompute packages and view the summary of MaxCompute packages.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribePackagesRequest
   * @returns DescribePackagesResponse
   */
  async describePackages(request: $_model.DescribePackagesRequest): Promise<$_model.DescribePackagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePackagesWithOptions(request, runtime);
  }

  /**
   * Gets the list of first-level authorizations.
   * 
   * @param request - DescribeParentInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParentInstanceResponse
   */
  async describeParentInstanceWithOptions(request: $_model.DescribeParentInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParentInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authStatus)) {
      query["AuthStatus"] = request.authStatus;
    }

    if (!$dara.isNull(request.checkStatus)) {
      query["CheckStatus"] = request.checkStatus;
    }

    if (!$dara.isNull(request.clusterStatus)) {
      query["ClusterStatus"] = request.clusterStatus;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.engineType)) {
      query["EngineType"] = request.engineType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.memberAccount)) {
      query["MemberAccount"] = request.memberAccount;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceRegionId)) {
      query["ServiceRegionId"] = request.serviceRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeParentInstance",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeParentInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeParentInstanceResponse({}));
  }

  /**
   * Gets the list of first-level authorizations.
   * 
   * @param request - DescribeParentInstanceRequest
   * @returns DescribeParentInstanceResponse
   */
  async describeParentInstance(request: $_model.DescribeParentInstanceRequest): Promise<$_model.DescribeParentInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParentInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the sensitivity levels that are defined in a rule template provided by Data Security Center (DSC).
   * 
   * @remarks
   * You can call this operation to query the sensitivity levels that are defined in the current rule template provided by DSC. This helps you learn about the number of times that each sensitivity level is referenced in the rule template and the highest sensitivity level.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeRiskLevelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRiskLevelsResponse
   */
  async describeRiskLevelsWithOptions(request: $_model.DescribeRiskLevelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRiskLevelsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRiskLevels",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRiskLevelsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRiskLevelsResponse({}));
  }

  /**
   * Queries the sensitivity levels that are defined in a rule template provided by Data Security Center (DSC).
   * 
   * @remarks
   * You can call this operation to query the sensitivity levels that are defined in the current rule template provided by DSC. This helps you learn about the number of times that each sensitivity level is referenced in the rule template and the highest sensitivity level.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeRiskLevelsRequest
   * @returns DescribeRiskLevelsResponse
   */
  async describeRiskLevels(request: $_model.DescribeRiskLevelsRequest): Promise<$_model.DescribeRiskLevelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRiskLevelsWithOptions(request, runtime);
  }

  /**
   * Queries sensitive data detection rules.
   * 
   * @param request - DescribeRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRulesResponse
   */
  async describeRulesWithOptions(request: $_model.DescribeRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.contentCategory)) {
      query["ContentCategory"] = request.contentCategory;
    }

    if (!$dara.isNull(request.cooperationChannel)) {
      query["CooperationChannel"] = request.cooperationChannel;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.customType)) {
      query["CustomType"] = request.customType;
    }

    if (!$dara.isNull(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.keywordCompatible)) {
      query["KeywordCompatible"] = request.keywordCompatible;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.matchType)) {
      query["MatchType"] = request.matchType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.riskLevelId)) {
      query["RiskLevelId"] = request.riskLevelId;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!$dara.isNull(request.simplify)) {
      query["Simplify"] = request.simplify;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.supportForm)) {
      query["SupportForm"] = request.supportForm;
    }

    if (!$dara.isNull(request.warnLevel)) {
      query["WarnLevel"] = request.warnLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRules",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRulesResponse({}));
  }

  /**
   * Queries sensitive data detection rules.
   * 
   * @param request - DescribeRulesRequest
   * @returns DescribeRulesResponse
   */
  async describeRules(request: $_model.DescribeRulesRequest): Promise<$_model.DescribeRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRulesWithOptions(request, runtime);
  }

  /**
   * Queries tables in data assets, such as MaxCompute projects and ApsaraDB RDS instances, that you authorize Data Security Center (DSC) to access.
   * 
   * @remarks
   * When you call the DescribeTables operation to query tables, you can specify parameters such as Name and RiskLevelId to filter tables.
   * # Limits
   * You can send up to 10 requests per second to call this operation by using your Alibaba Cloud account. If you send excessive requests, throttling is implemented, and your business may be affected.
   * 
   * @param request - DescribeTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTablesResponse
   */
  async describeTablesWithOptions(request: $_model.DescribeTablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.packageId)) {
      query["PackageId"] = request.packageId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.riskLevelId)) {
      query["RiskLevelId"] = request.riskLevelId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.serviceRegionId)) {
      query["ServiceRegionId"] = request.serviceRegionId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTables",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTablesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTablesResponse({}));
  }

  /**
   * Queries tables in data assets, such as MaxCompute projects and ApsaraDB RDS instances, that you authorize Data Security Center (DSC) to access.
   * 
   * @remarks
   * When you call the DescribeTables operation to query tables, you can specify parameters such as Name and RiskLevelId to filter tables.
   * # Limits
   * You can send up to 10 requests per second to call this operation by using your Alibaba Cloud account. If you send excessive requests, throttling is implemented, and your business may be affected.
   * 
   * @param request - DescribeTablesRequest
   * @returns DescribeTablesResponse
   */
  async describeTables(request: $_model.DescribeTablesRequest): Promise<$_model.DescribeTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTablesWithOptions(request, runtime);
  }

  /**
   * Call this interface to query all models list of industry templates.
   * 
   * @param request - DescribeTemplateAllRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTemplateAllRulesResponse
   */
  async describeTemplateAllRulesWithOptions(request: $_model.DescribeTemplateAllRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTemplateAllRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTemplateAllRules",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTemplateAllRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTemplateAllRulesResponse({}));
  }

  /**
   * Call this interface to query all models list of industry templates.
   * 
   * @param request - DescribeTemplateAllRulesRequest
   * @returns DescribeTemplateAllRulesResponse
   */
  async describeTemplateAllRules(request: $_model.DescribeTemplateAllRulesRequest): Promise<$_model.DescribeTemplateAllRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTemplateAllRulesWithOptions(request, runtime);
  }

  /**
   * Queries the information about an account.
   * 
   * @remarks
   * You can call this operation to query the information about the current account. This helps you get familiar with your account that accesses Data Security Center (DSC).
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeUserStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserStatusResponse
   */
  async describeUserStatusWithOptions(request: $_model.DescribeUserStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserStatus",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserStatusResponse({}));
  }

  /**
   * Queries the information about an account.
   * 
   * @remarks
   * You can call this operation to query the information about the current account. This helps you get familiar with your account that accesses Data Security Center (DSC).
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeUserStatusRequest
   * @returns DescribeUserStatusResponse
   */
  async describeUserStatus(request: $_model.DescribeUserStatusRequest): Promise<$_model.DescribeUserStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserStatusWithOptions(request, runtime);
  }

  /**
   * Disables a configuration item. After you disable a configuration item, you can call the CreateConfig operation to enable the configuration item by specifying the code of the configuration item for the Code parameter in the request.
   * 
   * @remarks
   * You can call this operation to disable a configuration item based on the code of the configuration item. This helps you modify configurations at the earliest opportunity.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DisableUserConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableUserConfigResponse
   */
  async disableUserConfigWithOptions(request: $_model.DisableUserConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableUserConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.code)) {
      query["Code"] = request.code;
    }

    if (!$dara.isNull(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableUserConfig",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableUserConfigResponse>(await this.callApi(params, req, runtime), new $_model.DisableUserConfigResponse({}));
  }

  /**
   * Disables a configuration item. After you disable a configuration item, you can call the CreateConfig operation to enable the configuration item by specifying the code of the configuration item for the Code parameter in the request.
   * 
   * @remarks
   * You can call this operation to disable a configuration item based on the code of the configuration item. This helps you modify configurations at the earliest opportunity.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DisableUserConfigRequest
   * @returns DisableUserConfigResponse
   */
  async disableUserConfig(request: $_model.DisableUserConfigRequest): Promise<$_model.DisableUserConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableUserConfigWithOptions(request, runtime);
  }

  /**
   * Dynamically de-identifies sensitive data.
   * 
   * @param request - ExecDatamaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecDatamaskResponse
   */
  async execDatamaskWithOptions(request: $_model.ExecDatamaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecDatamaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.data)) {
      query["Data"] = request.data;
    }

    if (!$dara.isNull(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecDatamask",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecDatamaskResponse>(await this.callApi(params, req, runtime), new $_model.ExecDatamaskResponse({}));
  }

  /**
   * Dynamically de-identifies sensitive data.
   * 
   * @param request - ExecDatamaskRequest
   * @returns ExecDatamaskResponse
   */
  async execDatamask(request: $_model.ExecDatamaskRequest): Promise<$_model.ExecDatamaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.execDatamaskWithOptions(request, runtime);
  }

  /**
   * Triggers a de-identification task.
   * 
   * @param request - ManualTriggerMaskingProcessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ManualTriggerMaskingProcessResponse
   */
  async manualTriggerMaskingProcessWithOptions(request: $_model.ManualTriggerMaskingProcessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ManualTriggerMaskingProcessResponse> {
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
      action: "ManualTriggerMaskingProcess",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ManualTriggerMaskingProcessResponse>(await this.callApi(params, req, runtime), new $_model.ManualTriggerMaskingProcessResponse({}));
  }

  /**
   * Triggers a de-identification task.
   * 
   * @param request - ManualTriggerMaskingProcessRequest
   * @returns ManualTriggerMaskingProcessResponse
   */
  async manualTriggerMaskingProcess(request: $_model.ManualTriggerMaskingProcessRequest): Promise<$_model.ManualTriggerMaskingProcessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.manualTriggerMaskingProcessWithOptions(request, runtime);
  }

  /**
   * OSS图片脱敏
   * 
   * @param request - MaskOssImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MaskOssImageResponse
   */
  async maskOssImageWithOptions(request: $_model.MaskOssImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MaskOssImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!$dara.isNull(request.isAlwaysUpload)) {
      query["IsAlwaysUpload"] = request.isAlwaysUpload;
    }

    if (!$dara.isNull(request.isSupportRestore)) {
      query["IsSupportRestore"] = request.isSupportRestore;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.maskRuleIdList)) {
      query["MaskRuleIdList"] = request.maskRuleIdList;
    }

    if (!$dara.isNull(request.objectKey)) {
      query["ObjectKey"] = request.objectKey;
    }

    if (!$dara.isNull(request.serviceRegionId)) {
      query["ServiceRegionId"] = request.serviceRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MaskOssImage",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MaskOssImageResponse>(await this.callApi(params, req, runtime), new $_model.MaskOssImageResponse({}));
  }

  /**
   * OSS图片脱敏
   * 
   * @param request - MaskOssImageRequest
   * @returns MaskOssImageResponse
   */
  async maskOssImage(request: $_model.MaskOssImageRequest): Promise<$_model.MaskOssImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.maskOssImageWithOptions(request, runtime);
  }

  /**
   * Modifies configuration items for a data asset that you authorize Data Security Center (DSC) to access.
   * 
   * @param request - ModifyDataLimitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDataLimitResponse
   */
  async modifyDataLimitWithOptions(request: $_model.ModifyDataLimitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDataLimitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auditStatus)) {
      query["AuditStatus"] = request.auditStatus;
    }

    if (!$dara.isNull(request.autoScan)) {
      query["AutoScan"] = request.autoScan;
    }

    if (!$dara.isNull(request.engineType)) {
      query["EngineType"] = request.engineType;
    }

    if (!$dara.isNull(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.logStoreDay)) {
      query["LogStoreDay"] = request.logStoreDay;
    }

    if (!$dara.isNull(request.modifyPassword)) {
      query["ModifyPassword"] = request.modifyPassword;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.samplingSize)) {
      query["SamplingSize"] = request.samplingSize;
    }

    if (!$dara.isNull(request.securityGroupIdList)) {
      query["SecurityGroupIdList"] = request.securityGroupIdList;
    }

    if (!$dara.isNull(request.serviceRegionId)) {
      query["ServiceRegionId"] = request.serviceRegionId;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.vSwitchIdList)) {
      query["VSwitchIdList"] = request.vSwitchIdList;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDataLimit",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDataLimitResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDataLimitResponse({}));
  }

  /**
   * Modifies configuration items for a data asset that you authorize Data Security Center (DSC) to access.
   * 
   * @param request - ModifyDataLimitRequest
   * @returns ModifyDataLimitResponse
   */
  async modifyDataLimit(request: $_model.ModifyDataLimitRequest): Promise<$_model.ModifyDataLimitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDataLimitWithOptions(request, runtime);
  }

  /**
   * Changes the sensitivity levels of sensitive data. You can change the default sensitivity levels of data that cannot be classified as sensitive or insensitive, and the sensitivity levels of data that can be classified as sensitive.
   * 
   * @remarks
   * You can call this operation to modify the sensitivity levels of data. This helps you manage the sensitivity levels.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyDefaultLevelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDefaultLevelResponse
   */
  async modifyDefaultLevelWithOptions(request: $_model.ModifyDefaultLevelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDefaultLevelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.defaultId)) {
      query["DefaultId"] = request.defaultId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.sensitiveIds)) {
      query["SensitiveIds"] = request.sensitiveIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDefaultLevel",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDefaultLevelResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDefaultLevelResponse({}));
  }

  /**
   * Changes the sensitivity levels of sensitive data. You can change the default sensitivity levels of data that cannot be classified as sensitive or insensitive, and the sensitivity levels of data that can be classified as sensitive.
   * 
   * @remarks
   * You can call this operation to modify the sensitivity levels of data. This helps you manage the sensitivity levels.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyDefaultLevelRequest
   * @returns ModifyDefaultLevelResponse
   */
  async modifyDefaultLevel(request: $_model.ModifyDefaultLevelRequest): Promise<$_model.ModifyDefaultLevelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDefaultLevelWithOptions(request, runtime);
  }

  /**
   * Handles an anomalous event.
   * 
   * @remarks
   * You can call this operation to handle anomalous events that involve data leaks. This helps protect your data assets at the earliest opportunity.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyEventStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyEventStatusResponse
   */
  async modifyEventStatusWithOptions(request: $_model.ModifyEventStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyEventStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backed)) {
      query["Backed"] = request.backed;
    }

    if (!$dara.isNull(request.dealReason)) {
      query["DealReason"] = request.dealReason;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyEventStatus",
      version: "2019-01-03",
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
   * Handles an anomalous event.
   * 
   * @remarks
   * You can call this operation to handle anomalous events that involve data leaks. This helps protect your data assets at the earliest opportunity.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyEventStatusRequest
   * @returns ModifyEventStatusResponse
   */
  async modifyEventStatus(request: $_model.ModifyEventStatusRequest): Promise<$_model.ModifyEventStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyEventStatusWithOptions(request, runtime);
  }

  /**
   * Enables the detection of anomalous events of subtypes.
   * 
   * @param request - ModifyEventTypeStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyEventTypeStatusResponse
   */
  async modifyEventTypeStatusWithOptions(request: $_model.ModifyEventTypeStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyEventTypeStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.subTypeIds)) {
      query["SubTypeIds"] = request.subTypeIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyEventTypeStatus",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyEventTypeStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyEventTypeStatusResponse({}));
  }

  /**
   * Enables the detection of anomalous events of subtypes.
   * 
   * @param request - ModifyEventTypeStatusRequest
   * @returns ModifyEventTypeStatusResponse
   */
  async modifyEventTypeStatus(request: $_model.ModifyEventTypeStatusRequest): Promise<$_model.ModifyEventTypeStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyEventTypeStatusWithOptions(request, runtime);
  }

  /**
   * Enables or disables the report task.
   * 
   * @remarks
   * You can call this operation to enable or disable the report task. After you activate Data Security Center (DSC), the report task is enabled by default. After you disable the report task, you cannot view statistics that are newly generated in the Report Center module, on the Overview page of the Cloud Native Data Audit module, and in the Data security lab module. Existing statistics are not affected.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyReportTaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyReportTaskStatusResponse
   */
  async modifyReportTaskStatusWithOptions(request: $_model.ModifyReportTaskStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyReportTaskStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.reportTaskStatus)) {
      query["ReportTaskStatus"] = request.reportTaskStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyReportTaskStatus",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyReportTaskStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyReportTaskStatusResponse({}));
  }

  /**
   * Enables or disables the report task.
   * 
   * @remarks
   * You can call this operation to enable or disable the report task. After you activate Data Security Center (DSC), the report task is enabled by default. After you disable the report task, you cannot view statistics that are newly generated in the Report Center module, on the Overview page of the Cloud Native Data Audit module, and in the Data security lab module. Existing statistics are not affected.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyReportTaskStatusRequest
   * @returns ModifyReportTaskStatusResponse
   */
  async modifyReportTaskStatus(request: $_model.ModifyReportTaskStatusRequest): Promise<$_model.ModifyReportTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyReportTaskStatusWithOptions(request, runtime);
  }

  /**
   * Modifies a custom sensitive data detection rule in Data Security Center (DSC).
   * 
   * @remarks
   * When you call this operation, you must configure request parameters to specify the rule name, rule ID, and rule content.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRuleResponse
   */
  async modifyRuleWithOptions(request: $_model.ModifyRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.matchType)) {
      query["MatchType"] = request.matchType;
    }

    if (!$dara.isNull(request.modelRuleIds)) {
      query["ModelRuleIds"] = request.modelRuleIds;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.riskLevelId)) {
      query["RiskLevelId"] = request.riskLevelId;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!$dara.isNull(request.supportForm)) {
      query["SupportForm"] = request.supportForm;
    }

    if (!$dara.isNull(request.templateRuleIds)) {
      query["TemplateRuleIds"] = request.templateRuleIds;
    }

    if (!$dara.isNull(request.warnLevel)) {
      query["WarnLevel"] = request.warnLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyRule",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyRuleResponse>(await this.callApi(params, req, runtime), new $_model.ModifyRuleResponse({}));
  }

  /**
   * Modifies a custom sensitive data detection rule in Data Security Center (DSC).
   * 
   * @remarks
   * When you call this operation, you must configure request parameters to specify the rule name, rule ID, and rule content.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyRuleRequest
   * @returns ModifyRuleResponse
   */
  async modifyRule(request: $_model.ModifyRuleRequest): Promise<$_model.ModifyRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRuleWithOptions(request, runtime);
  }

  /**
   * Enables or disables a sensitive data detection rule.
   * 
   * @param request - ModifyRuleStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRuleStatusResponse
   */
  async modifyRuleStatusWithOptions(request: $_model.ModifyRuleStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRuleStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyRuleStatus",
      version: "2019-01-03",
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
   * Enables or disables a sensitive data detection rule.
   * 
   * @param request - ModifyRuleStatusRequest
   * @returns ModifyRuleStatusResponse
   */
  async modifyRuleStatus(request: $_model.ModifyRuleStatusRequest): Promise<$_model.ModifyRuleStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRuleStatusWithOptions(request, runtime);
  }

  /**
   * 图片复原
   * 
   * @param request - RestoreOssImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestoreOssImageResponse
   */
  async restoreOssImageWithOptions(request: $_model.RestoreOssImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestoreOssImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucket)) {
      query["Bucket"] = request.bucket;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.objectKey)) {
      query["ObjectKey"] = request.objectKey;
    }

    if (!$dara.isNull(request.serviceRegionId)) {
      query["ServiceRegionId"] = request.serviceRegionId;
    }

    if (!$dara.isNull(request.targetObjectKey)) {
      query["TargetObjectKey"] = request.targetObjectKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestoreOssImage",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestoreOssImageResponse>(await this.callApi(params, req, runtime), new $_model.RestoreOssImageResponse({}));
  }

  /**
   * 图片复原
   * 
   * @param request - RestoreOssImageRequest
   * @returns RestoreOssImageResponse
   */
  async restoreOssImage(request: $_model.RestoreOssImageRequest): Promise<$_model.RestoreOssImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restoreOssImageWithOptions(request, runtime);
  }

  /**
   * Creates an identification task to scan sensitive data in Object Storage Service (OSS) objects.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * To call this operation, make sure that asset authorization for your OSS bucket is complete and the bucket is connected. If the authorization is not complete, the bucket_not_authorized error code is returned when you call the operation.
   * ### [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * ### [](#)Additional information
   * After you call this operation, you can obtain the task ID. You can specify the task ID in the DescribeIdentifyTaskDetail operation to query the state of the task.
   * After the task is complete, you can call the DescribeOssObjectDetailV2 operation to query the identification results of sensitive data in the related OSS objects. When you call the DescribeOssObjectDetailV2 operation, you must specify BucketName, ServiceRegionId, and ObjectKey.
   * 
   * @param tmpReq - ScanOssObjectV1Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScanOssObjectV1Response
   */
  async scanOssObjectV1WithOptions(tmpReq: $_model.ScanOssObjectV1Request, runtime: $dara.RuntimeOptions): Promise<$_model.ScanOssObjectV1Response> {
    tmpReq.validate();
    let request = new $_model.ScanOssObjectV1ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.objectKeyList)) {
      request.objectKeyListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.objectKeyList, "ObjectKeyList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.objectKeyListShrink)) {
      query["ObjectKeyList"] = request.objectKeyListShrink;
    }

    if (!$dara.isNull(request.serviceRegionId)) {
      query["ServiceRegionId"] = request.serviceRegionId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ScanOssObjectV1",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ScanOssObjectV1Response>(await this.callApi(params, req, runtime), new $_model.ScanOssObjectV1Response({}));
  }

  /**
   * Creates an identification task to scan sensitive data in Object Storage Service (OSS) objects.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * To call this operation, make sure that asset authorization for your OSS bucket is complete and the bucket is connected. If the authorization is not complete, the bucket_not_authorized error code is returned when you call the operation.
   * ### [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * ### [](#)Additional information
   * After you call this operation, you can obtain the task ID. You can specify the task ID in the DescribeIdentifyTaskDetail operation to query the state of the task.
   * After the task is complete, you can call the DescribeOssObjectDetailV2 operation to query the identification results of sensitive data in the related OSS objects. When you call the DescribeOssObjectDetailV2 operation, you must specify BucketName, ServiceRegionId, and ObjectKey.
   * 
   * @param request - ScanOssObjectV1Request
   * @returns ScanOssObjectV1Response
   */
  async scanOssObjectV1(request: $_model.ScanOssObjectV1Request): Promise<$_model.ScanOssObjectV1Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.scanOssObjectV1WithOptions(request, runtime);
  }

  /**
   * Stops a de-identification task. After you stop a de-identification task, you can resume the task by calling the ManualTriggerMaskingProcess operation.
   * 
   * @remarks
   * You can call this operation to stop a de-identification task that is running. For example, you can stop a de-identification task that is used to de-identify specific data.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - StopMaskingProcessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopMaskingProcessResponse
   */
  async stopMaskingProcessWithOptions(request: $_model.StopMaskingProcessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopMaskingProcessResponse> {
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
      action: "StopMaskingProcess",
      version: "2019-01-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopMaskingProcessResponse>(await this.callApi(params, req, runtime), new $_model.StopMaskingProcessResponse({}));
  }

  /**
   * Stops a de-identification task. After you stop a de-identification task, you can resume the task by calling the ManualTriggerMaskingProcess operation.
   * 
   * @remarks
   * You can call this operation to stop a de-identification task that is running. For example, you can stop a de-identification task that is used to de-identify specific data.
   * # Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - StopMaskingProcessRequest
   * @returns StopMaskingProcessResponse
   */
  async stopMaskingProcess(request: $_model.StopMaskingProcessRequest): Promise<$_model.StopMaskingProcessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopMaskingProcessWithOptions(request, runtime);
  }

}
