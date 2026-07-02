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
      'cn-zhangjiakou': "sddp.cn-zhangjiakou.aliyuncs.com",
      'ap-southeast-1': "sddp.ap-southeast-1.aliyuncs.com",
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
   * Modifies the general alert configuration parameters.
   * 
   * @remarks
   * Creates or restores configurations based on the codes of common alert configuration items, allowing you to manage these configurations.
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
   * Modifies the general alert configuration parameters.
   * 
   * @remarks
   * Creates or restores configurations based on the codes of common alert configuration items, allowing you to manage these configurations.
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
   * You can call the CreateDataLimit operation to grant permissions to scan databases, projects, and buckets.
   * 
   * @remarks
   * You can use this operation to grant permissions to scan your data assets. This helps improve the security of your data assets.
   * ## QPS limits
   * The queries per second (QPS) limit for a single user is 10 calls per second. If you exceed this limit, the system throttles your API calls. This may affect your business. Plan your calls accordingly.
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
   * You can call the CreateDataLimit operation to grant permissions to scan databases, projects, and buckets.
   * 
   * @remarks
   * You can use this operation to grant permissions to scan your data assets. This helps improve the security of your data assets.
   * ## QPS limits
   * The queries per second (QPS) limit for a single user is 10 calls per second. If you exceed this limit, the system throttles your API calls. This may affect your business. Plan your calls accordingly.
   * 
   * @param request - CreateDataLimitRequest
   * @returns CreateDataLimitResponse
   */
  async createDataLimit(request: $_model.CreateDataLimitRequest): Promise<$_model.CreateDataLimitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataLimitWithOptions(request, runtime);
  }

  /**
   * Call CreateRule to create a custom sensitive data detection rule.
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
   * Call CreateRule to create a custom sensitive data detection rule.
   * 
   * @param request - CreateRuleRequest
   * @returns CreateRuleResponse
   */
  async createRule(request: $_model.CreateRuleRequest): Promise<$_model.CreateRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRuleWithOptions(request, runtime);
  }

  /**
   * You can call the CreateScanTask operation to create a custom scan task to detect sensitive data in authorized assets.
   * 
   * @remarks
   * This operation creates custom scan tasks for authorized assets. You can control the run interval and runtime of each scan task.
   * ## QPS limits
   * The queries per second (QPS) limit for this operation is 10 calls per second for a single user. If you exceed this limit, API calls are throttled. This may impact your business. Plan your calls accordingly.
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
   * You can call the CreateScanTask operation to create a custom scan task to detect sensitive data in authorized assets.
   * 
   * @remarks
   * This operation creates custom scan tasks for authorized assets. You can control the run interval and runtime of each scan task.
   * ## QPS limits
   * The queries per second (QPS) limit for this operation is 10 calls per second for a single user. If you exceed this limit, API calls are throttled. This may impact your business. Plan your calls accordingly.
   * 
   * @param request - CreateScanTaskRequest
   * @returns CreateScanTaskResponse
   */
  async createScanTask(request: $_model.CreateScanTaskRequest): Promise<$_model.CreateScanTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createScanTaskWithOptions(request, runtime);
  }

  /**
   * Call CreateSlrRole to create a service-linked role for Data Security Center (DSC). This role authorizes DSC to access your cloud resources.
   * 
   * @remarks
   * This operation allows DSC to access the resources of Alibaba Cloud services such as OSS, RDS, and MaxCompute. After you call this operation, the system automatically creates a service-linked role. The role is named AliyunServiceRoleForSDDP, and its access policy is AliyunServiceRolePolicyForSDDP.
   * ## QPS limits
   * The queries per second (QPS) limit for this operation is 10 for each user. If you exceed the limit, API calls are throttled, which can affect your business. Call this operation at a reasonable rate.
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

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
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
   * Call CreateSlrRole to create a service-linked role for Data Security Center (DSC). This role authorizes DSC to access your cloud resources.
   * 
   * @remarks
   * This operation allows DSC to access the resources of Alibaba Cloud services such as OSS, RDS, and MaxCompute. After you call this operation, the system automatically creates a service-linked role. The role is named AliyunServiceRoleForSDDP, and its access policy is AliyunServiceRolePolicyForSDDP.
   * ## QPS limits
   * The queries per second (QPS) limit for this operation is 10 for each user. If you exceed the limit, API calls are throttled, which can affect your business. Call this operation at a reasonable rate.
   * 
   * @param request - CreateSlrRoleRequest
   * @returns CreateSlrRoleResponse
   */
  async createSlrRole(request: $_model.CreateSlrRoleRequest): Promise<$_model.CreateSlrRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSlrRoleWithOptions(request, runtime);
  }

  /**
   * Revokes the scan authorization for a data asset, such as a database, instance, or bucket.
   * 
   * @remarks
   * This operation is typically used to revoke authorization for data assets. This helps you manage data access permissions.
   * ## QPS limit
   * The queries per second (QPS) limit for this operation is 10 calls per second for each user. If you exceed this limit, API calls are throttled. This may affect your business. We recommend that you call this operation within this limit.
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
   * Revokes the scan authorization for a data asset, such as a database, instance, or bucket.
   * 
   * @remarks
   * This operation is typically used to revoke authorization for data assets. This helps you manage data access permissions.
   * ## QPS limit
   * The queries per second (QPS) limit for this operation is 10 calls per second for each user. If you exceed this limit, API calls are throttled. This may affect your business. We recommend that you call this operation within this limit.
   * 
   * @param request - DeleteDataLimitRequest
   * @returns DeleteDataLimitResponse
   */
  async deleteDataLimit(request: $_model.DeleteDataLimitRequest): Promise<$_model.DeleteDataLimitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataLimitWithOptions(request, runtime);
  }

  /**
   * Deletes a custom sensitive data detection rule.
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
   * Deletes a custom sensitive data detection rule.
   * 
   * @param request - DeleteRuleRequest
   * @returns DeleteRuleResponse
   */
  async deleteRule(request: $_model.DeleteRuleRequest): Promise<$_model.DeleteRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRuleWithOptions(request, runtime);
  }

  /**
   * Queries the list of audit alert logs.
   * 
   * @remarks
   * This operation is used to query the list of data audit alert logs, which facilitates alerting search and alerting handling.
   * ## QPS limit
   * The single-user QPS limit for this operation is 10 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Invoke this operation at an appropriate frequency.
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

    if (!$dara.isNull(request.logQueryOpJson)) {
      query["LogQueryOpJson"] = request.logQueryOpJson;
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

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
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
   * Queries the list of audit alert logs.
   * 
   * @remarks
   * This operation is used to query the list of data audit alert logs, which facilitates alerting search and alerting handling.
   * ## QPS limit
   * The single-user QPS limit for this operation is 10 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Invoke this operation at an appropriate frequency.
   * 
   * @param request - DescribeAuditLogsRequest
   * @returns DescribeAuditLogsResponse
   */
  async describeAuditLogs(request: $_model.DescribeAuditLogsRequest): Promise<$_model.DescribeAuditLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAuditLogsWithOptions(request, runtime);
  }

  /**
   * Lists industry-specific templates.
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
   * Lists industry-specific templates.
   * 
   * @param request - DescribeCategoryTemplateListRequest
   * @returns DescribeCategoryTemplateListResponse
   */
  async describeCategoryTemplateList(request: $_model.DescribeCategoryTemplateListRequest): Promise<$_model.DescribeCategoryTemplateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCategoryTemplateListWithOptions(request, runtime);
  }

  /**
   * Queries a paginated list of rules in a data classification template.
   * 
   * @remarks
   * Retrieves the rules in a data classification template to help you review the rule details.
   * ## QPS limit
   * The queries per second (QPS) limit for a single user on this operation is 10 calls per second. If you exceed this limit, API calls are throttled. This may affect your business. Plan your calls accordingly.
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
   * Queries a paginated list of rules in a data classification template.
   * 
   * @remarks
   * Retrieves the rules in a data classification template to help you review the rule details.
   * ## QPS limit
   * The queries per second (QPS) limit for a single user on this operation is 10 calls per second. If you exceed this limit, API calls are throttled. This may affect your business. Plan your calls accordingly.
   * 
   * @param request - DescribeCategoryTemplateRuleListRequest
   * @returns DescribeCategoryTemplateRuleListResponse
   */
  async describeCategoryTemplateRuleList(request: $_model.DescribeCategoryTemplateRuleListRequest): Promise<$_model.DescribeCategoryTemplateRuleListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCategoryTemplateRuleListWithOptions(request, runtime);
  }

  /**
   * You can call the DescribeColumns API to query column data in data asset tables, such as MaxCompute and RDS, that are authorized to connect to Data Security Center.
   * 
   * @remarks
   * This API is typically used to view column data in sensitive data asset information tables. This helps users accurately analyze sensitive data.
   * ## Notes
   * The DescribeColumns API has been revised and replaced by DescribeColumnsV2. Use the newer DescribeColumnsV2 version when developing applications.
   * ## QPS Limits
   * The single-user QPS limit for this API is 10 calls per second. If you exceed this limit, API calls will be rate-limited. This may affect your business. You should call the API reasonably.
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

    if (!$dara.isNull(request.serviceRegionId)) {
      query["ServiceRegionId"] = request.serviceRegionId;
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
   * You can call the DescribeColumns API to query column data in data asset tables, such as MaxCompute and RDS, that are authorized to connect to Data Security Center.
   * 
   * @remarks
   * This API is typically used to view column data in sensitive data asset information tables. This helps users accurately analyze sensitive data.
   * ## Notes
   * The DescribeColumns API has been revised and replaced by DescribeColumnsV2. Use the newer DescribeColumnsV2 version when developing applications.
   * ## QPS Limits
   * The single-user QPS limit for this API is 10 calls per second. If you exceed this limit, API calls will be rate-limited. This may affect your business. You should call the API reasonably.
   * 
   * @param request - DescribeColumnsRequest
   * @returns DescribeColumnsResponse
   */
  async describeColumns(request: $_model.DescribeColumnsRequest): Promise<$_model.DescribeColumnsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeColumnsWithOptions(request, runtime);
  }

  /**
   * The DescribeColumnsV2 operation queries data in the columns of data asset tables, such as those in MaxCompute and RDS, that are authorized in Data Security Center.
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
   * The DescribeColumnsV2 operation queries data in the columns of data asset tables, such as those in MaxCompute and RDS, that are authorized in Data Security Center.
   * 
   * @param request - DescribeColumnsV2Request
   * @returns DescribeColumnsV2Response
   */
  async describeColumnsV2(request: $_model.DescribeColumnsV2Request): Promise<$_model.DescribeColumnsV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeColumnsV2WithOptions(request, runtime);
  }

  /**
   * Queries common configuration items for anomaly alerts.
   * 
   * @remarks
   * # Usage notes
   * Queries common configuration items for anomaly alerts, which you can use to create or restore alert configurations.
   * # QPS limit
   * The maximum number of queries per second (QPS) per user is 10. If this limit is exceeded, API calls are throttled. This may impact your business. Call this operation only as needed.
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
   * Queries common configuration items for anomaly alerts.
   * 
   * @remarks
   * # Usage notes
   * Queries common configuration items for anomaly alerts, which you can use to create or restore alert configurations.
   * # QPS limit
   * The maximum number of queries per second (QPS) per user is 10. If this limit is exceeded, API calls are throttled. This may impact your business. Call this operation only as needed.
   * 
   * @param request - DescribeConfigsRequest
   * @returns DescribeConfigsResponse
   */
  async describeConfigs(request: $_model.DescribeConfigsRequest): Promise<$_model.DescribeConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeConfigsWithOptions(request, runtime);
  }

  /**
   * Searches for data assets on the Overview page of Data Security Center (DSC).
   * 
   * @remarks
   * This operation is typically used to query data assets of different types on the overview page of DSC.
   * ## Usage notes
   * This operation is deprecated and no longer maintained.
   * ## QPS limit
   * The queries per second (QPS) limit for a single user is 10 calls per second. If you exceed this limit, API calls are throttled. This may affect your business. Plan your calls accordingly.
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
   * Searches for data assets on the Overview page of Data Security Center (DSC).
   * 
   * @remarks
   * This operation is typically used to query data assets of different types on the overview page of DSC.
   * ## Usage notes
   * This operation is deprecated and no longer maintained.
   * ## QPS limit
   * The queries per second (QPS) limit for a single user is 10 calls per second. If you exceed this limit, API calls are throttled. This may affect your business. Plan your calls accordingly.
   * 
   * @param request - DescribeDataAssetsRequest
   * @returns DescribeDataAssetsResponse
   */
  async describeDataAssets(request: $_model.DescribeDataAssetsRequest): Promise<$_model.DescribeDataAssetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataAssetsWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of an authorized data asset, such as a MaxCompute project, ApsaraDB RDS database, or OSS bucket.
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
   * Retrieves the details of an authorized data asset, such as a MaxCompute project, ApsaraDB RDS database, or OSS bucket.
   * 
   * @param request - DescribeDataLimitDetailRequest
   * @returns DescribeDataLimitDetailResponse
   */
  async describeDataLimitDetail(request: $_model.DescribeDataLimitDetailRequest): Promise<$_model.DescribeDataLimitDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataLimitDetailWithOptions(request, runtime);
  }

  /**
   * Call the DescribeDataLimitSet operation to query the authorization list for unstructured assets or the list of regions supported by Data Security Center.
   * 
   * @remarks
   * Use this operation to retrieve a list of authorized product assets. This list helps you search for and aggregate resources.
   * ## Notes
   * In the future, this operation will be used only to retrieve the list of regions that a product supports. Other features will no longer be maintained.
   * ## QPS limits
   * The queries per second (QPS) limit for this operation is 10 calls per second for each user. API calls that exceed this limit are throttled. Throttling can affect your business. We recommend that you call this operation a reasonable number of times.
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
   * Call the DescribeDataLimitSet operation to query the authorization list for unstructured assets or the list of regions supported by Data Security Center.
   * 
   * @remarks
   * Use this operation to retrieve a list of authorized product assets. This list helps you search for and aggregate resources.
   * ## Notes
   * In the future, this operation will be used only to retrieve the list of regions that a product supports. Other features will no longer be maintained.
   * ## QPS limits
   * The queries per second (QPS) limit for this operation is 10 calls per second for each user. API calls that exceed this limit are throttled. Throttling can affect your business. We recommend that you call this operation a reasonable number of times.
   * 
   * @param request - DescribeDataLimitSetRequest
   * @returns DescribeDataLimitSetResponse
   */
  async describeDataLimitSet(request: $_model.DescribeDataLimitSetRequest): Promise<$_model.DescribeDataLimitSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataLimitSetWithOptions(request, runtime);
  }

  /**
   * Queries the list of data assets for authorized instances, databases, and buckets.
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
   * Queries the list of data assets for authorized instances, databases, and buckets.
   * 
   * @param request - DescribeDataLimitsRequest
   * @returns DescribeDataLimitsResponse
   */
  async describeDataLimits(request: $_model.DescribeDataLimitsRequest): Promise<$_model.DescribeDataLimitsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataLimitsWithOptions(request, runtime);
  }

  /**
   * You can call DescribeDataMaskingRunHistory to query the execution history of data masking tasks.
   * 
   * @remarks
   * This operation retrieves the execution history of static data masking tasks. You can use it to search for task statuses and view task progress.
   * ## QPS limits
   * The queries per second (QPS) limit for a single user on this operation is 10 calls per second. Calls that exceed this limit are throttled. This may affect your business. Plan your calls accordingly.
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
   * You can call DescribeDataMaskingRunHistory to query the execution history of data masking tasks.
   * 
   * @remarks
   * This operation retrieves the execution history of static data masking tasks. You can use it to search for task statuses and view task progress.
   * ## QPS limits
   * The queries per second (QPS) limit for a single user on this operation is 10 calls per second. Calls that exceed this limit are throttled. This may affect your business. Plan your calls accordingly.
   * 
   * @param request - DescribeDataMaskingRunHistoryRequest
   * @returns DescribeDataMaskingRunHistoryResponse
   */
  async describeDataMaskingRunHistory(request: $_model.DescribeDataMaskingRunHistoryRequest): Promise<$_model.DescribeDataMaskingRunHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataMaskingRunHistoryWithOptions(request, runtime);
  }

  /**
   * Call DescribeDataMaskingTasks to retrieve a list of data masking tasks.
   * 
   * @remarks
   * This operation retrieves a list of static data masking tasks, which you can then search and manage.
   * ## QPS limits
   * The queries per second (QPS) limit for a single user is 10 calls per second. If you exceed this limit, your API calls are throttled, which may affect your business. We recommend that you call this operation at a reasonable rate.
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
   * Call DescribeDataMaskingTasks to retrieve a list of data masking tasks.
   * 
   * @remarks
   * This operation retrieves a list of static data masking tasks, which you can then search and manage.
   * ## QPS limits
   * The queries per second (QPS) limit for a single user is 10 calls per second. If you exceed this limit, your API calls are throttled, which may affect your business. We recommend that you call this operation at a reasonable rate.
   * 
   * @param request - DescribeDataMaskingTasksRequest
   * @returns DescribeDataMaskingTasksResponse
   */
  async describeDataMaskingTasks(request: $_model.DescribeDataMaskingTasksRequest): Promise<$_model.DescribeDataMaskingTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataMaskingTasksWithOptions(request, runtime);
  }

  /**
   * Queries the detection results for columns in a data table.
   * 
   * @remarks
   * ## Notes
   * The DescribeDataObjectColumnDetail operation has been updated to DescribeDataObjectColumnDetailV2. We recommend that you use the latest version, DescribeDataObjectColumnDetailV2, for application development.
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
   * Queries the detection results for columns in a data table.
   * 
   * @remarks
   * ## Notes
   * The DescribeDataObjectColumnDetail operation has been updated to DescribeDataObjectColumnDetailV2. We recommend that you use the latest version, DescribeDataObjectColumnDetailV2, for application development.
   * 
   * @param request - DescribeDataObjectColumnDetailRequest
   * @returns DescribeDataObjectColumnDetailResponse
   */
  async describeDataObjectColumnDetail(request: $_model.DescribeDataObjectColumnDetailRequest): Promise<$_model.DescribeDataObjectColumnDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataObjectColumnDetailWithOptions(request, runtime);
  }

  /**
   * Queries the detection results for the columns of a data table.
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
   * Queries the detection results for the columns of a data table.
   * 
   * @param request - DescribeDataObjectColumnDetailV2Request
   * @returns DescribeDataObjectColumnDetailV2Response
   */
  async describeDataObjectColumnDetailV2(request: $_model.DescribeDataObjectColumnDetailV2Request): Promise<$_model.DescribeDataObjectColumnDetailV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataObjectColumnDetailV2WithOptions(request, runtime);
  }

  /**
   * Query data detection results for tables and files.
   * 
   * @remarks
   * This operation queries data detection results for tables and files, to provide a comprehensive view across all your assets.
   * ## QPS limit
   * The per-user QPS limit for this operation is 10 requests per second. If you exceed this limit, the system throttles your API calls. To prevent business disruptions, call this operation only when necessary.
   * 
   * @param request - DescribeDataObjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataObjectsResponse
   */
  async describeDataObjectsWithOptions(request: $_model.DescribeDataObjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataObjectsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.APIVersion)) {
      query["APIVersion"] = request.APIVersion;
    }

    if (!$dara.isNull(request.bucket)) {
      query["Bucket"] = request.bucket;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
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

    if (!$dara.isNull(request.logStore)) {
      query["LogStore"] = request.logStore;
    }

    if (!$dara.isNull(request.logStoreFlag)) {
      query["LogStoreFlag"] = request.logStoreFlag;
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

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.productIds)) {
      query["ProductIds"] = request.productIds;
    }

    if (!$dara.isNull(request.project)) {
      query["Project"] = request.project;
    }

    if (!$dara.isNull(request.queryName)) {
      query["QueryName"] = request.queryName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.riskLevelIdList)) {
      query["RiskLevelIdList"] = request.riskLevelIdList;
    }

    if (!$dara.isNull(request.riskLevels)) {
      query["RiskLevels"] = request.riskLevels;
    }

    if (!$dara.isNull(request.ruleIds)) {
      query["RuleIds"] = request.ruleIds;
    }

    if (!$dara.isNull(request.serviceRegionId)) {
      query["ServiceRegionId"] = request.serviceRegionId;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
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
   * Query data detection results for tables and files.
   * 
   * @remarks
   * This operation queries data detection results for tables and files, to provide a comprehensive view across all your assets.
   * ## QPS limit
   * The per-user QPS limit for this operation is 10 requests per second. If you exceed this limit, the system throttles your API calls. To prevent business disruptions, call this operation only when necessary.
   * 
   * @param request - DescribeDataObjectsRequest
   * @returns DescribeDataObjectsResponse
   */
  async describeDataObjects(request: $_model.DescribeDataObjectsRequest): Promise<$_model.DescribeDataObjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataObjectsWithOptions(request, runtime);
  }

  /**
   * Queries a list of file types supported by Object Storage Service (OSS).
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
   * Queries a list of file types supported by Object Storage Service (OSS).
   * 
   * @param request - DescribeDocTypesRequest
   * @returns DescribeDocTypesResponse
   */
  async describeDocTypes(request: $_model.DescribeDocTypesRequest): Promise<$_model.DescribeDocTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDocTypesWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of an anomalous event, including its occurrence time, description, and handling status.
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
   * Retrieves the details of an anomalous event, including its occurrence time, description, and handling status.
   * 
   * @param request - DescribeEventDetailRequest
   * @returns DescribeEventDetailResponse
   */
  async describeEventDetail(request: $_model.DescribeEventDetailRequest): Promise<$_model.DescribeEventDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventDetailWithOptions(request, runtime);
  }

  /**
   * Queries anomalous activity types.
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
   * Queries anomalous activity types.
   * 
   * @param request - DescribeEventTypesRequest
   * @returns DescribeEventTypesResponse
   */
  async describeEventTypes(request: $_model.DescribeEventTypesRequest): Promise<$_model.DescribeEventTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventTypesWithOptions(request, runtime);
  }

  /**
   * Lists anomalous events.
   * 
   * @remarks
   * This operation queries alerts for data breach risks to help you find and handle them.
   * ## QPS limits
   * The queries per second (QPS) limit for this operation is 10 for each user. If you exceed the limit, your API calls are throttled. This may affect your business. Plan your API calls accordingly.
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
   * Lists anomalous events.
   * 
   * @remarks
   * This operation queries alerts for data breach risks to help you find and handle them.
   * ## QPS limits
   * The queries per second (QPS) limit for this operation is 10 for each user. If you exceed the limit, your API calls are throttled. This may affect your business. Plan your API calls accordingly.
   * 
   * @param request - DescribeEventsRequest
   * @returns DescribeEventsResponse
   */
  async describeEvents(request: $_model.DescribeEventsRequest): Promise<$_model.DescribeEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventsWithOptions(request, runtime);
  }

  /**
   * Retrieves the completion status of a detection task based on the task ID. You can obtain the task ID from the Id field in the return value of a CreateScanTask or ScanOssObjectV1 API call.
   * 
   * @remarks
   * ## QPS limit
   * The queries per second (QPS) limit for this operation is 10 for each user. If you exceed the limit, API calls are throttled, which may affect your business. Call this operation at a reasonable rate.
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
   * Retrieves the completion status of a detection task based on the task ID. You can obtain the task ID from the Id field in the return value of a CreateScanTask or ScanOssObjectV1 API call.
   * 
   * @remarks
   * ## QPS limit
   * The queries per second (QPS) limit for this operation is 10 for each user. If you exceed the limit, API calls are throttled, which may affect your business. Call this operation at a reasonable rate.
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
   * Queries the list of authorized or unauthorized data assets based on the AuthStatus parameter to help you understand the authorization status of your data assets.
   * This operation is no longer used in the new console.
   * ## QPS limit
   * Each user can call this operation up to 10 times per second. If this limit is exceeded, API calls are throttled, which may affect your business.
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
   * Queries the list of authorized or unauthorized data assets based on the AuthStatus parameter to help you understand the authorization status of your data assets.
   * This operation is no longer used in the new console.
   * ## QPS limit
   * Each user can call this operation up to 10 times per second. If this limit is exceeded, API calls are throttled, which may affect your business.
   * 
   * @param request - DescribeInstanceSourcesRequest
   * @returns DescribeInstanceSourcesResponse
   */
  async describeInstanceSources(request: $_model.DescribeInstanceSourcesRequest): Promise<$_model.DescribeInstanceSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceSourcesWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of authorized MaxCompute, RDS, and OSS data asset instances.
   * 
   * @remarks
   * When you call the DescribeInstances operation, you can set parameters such as search keywords and the threat level of data asset instances to retrieve a list of instances that meet your requirements.
   * ## QPS limit
   * The queries per second (QPS) limit for a single user for this operation is 10 calls per second. If you exceed this limit, API calls are throttled. This can affect your business. Plan your calls accordingly.
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
   * Retrieves a list of authorized MaxCompute, RDS, and OSS data asset instances.
   * 
   * @remarks
   * When you call the DescribeInstances operation, you can set parameters such as search keywords and the threat level of data asset instances to retrieve a list of instances that meet your requirements.
   * ## QPS limit
   * The queries per second (QPS) limit for a single user for this operation is 10 calls per second. If you exceed this limit, API calls are throttled. This can affect your business. Plan your calls accordingly.
   * 
   * @param request - DescribeInstancesRequest
   * @returns DescribeInstancesResponse
   */
  async describeInstances(request: $_model.DescribeInstancesRequest): Promise<$_model.DescribeInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  /**
   * Obtains detailed information about an authorized OSS object in Data Security Center.
   * 
   * @remarks
   * This operation is typically used to query the details of OSS objects. This information helps you accurately locate sensitive data assets in OSS.
   * ## Usage notes
   * The DescribeOssObjectDetail operation has been updated to DescribeOssObjectDetailV2. We recommend that you use the new version, DescribeOssObjectDetailV2, when you develop applications.
   * ## QPS limit
   * A single user can make up to 10 queries per second (QPS). If you exceed the limit, API calls are throttled. This may affect your business. We recommend that you plan your calls accordingly.
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
   * Obtains detailed information about an authorized OSS object in Data Security Center.
   * 
   * @remarks
   * This operation is typically used to query the details of OSS objects. This information helps you accurately locate sensitive data assets in OSS.
   * ## Usage notes
   * The DescribeOssObjectDetail operation has been updated to DescribeOssObjectDetailV2. We recommend that you use the new version, DescribeOssObjectDetailV2, when you develop applications.
   * ## QPS limit
   * A single user can make up to 10 queries per second (QPS). If you exceed the limit, API calls are throttled. This may affect your business. We recommend that you plan your calls accordingly.
   * 
   * @param request - DescribeOssObjectDetailRequest
   * @returns DescribeOssObjectDetailResponse
   */
  async describeOssObjectDetail(request: $_model.DescribeOssObjectDetailRequest): Promise<$_model.DescribeOssObjectDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOssObjectDetailWithOptions(request, runtime);
  }

  /**
   * Obtains detailed information about an authorized OSS object in Data Security Center.
   * 
   * @remarks
   * This operation queries the details of OSS objects. You can use this operation to locate sensitive data assets in OSS.
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
   * Obtains detailed information about an authorized OSS object in Data Security Center.
   * 
   * @remarks
   * This operation queries the details of OSS objects. You can use this operation to locate sensitive data assets in OSS.
   * 
   * @param request - DescribeOssObjectDetailV2Request
   * @returns DescribeOssObjectDetailV2Response
   */
  async describeOssObjectDetailV2(request: $_model.DescribeOssObjectDetailV2Request): Promise<$_model.DescribeOssObjectDetailV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOssObjectDetailV2WithOptions(request, runtime);
  }

  /**
   * Lists authorized OSS objects.
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
   * Lists authorized OSS objects.
   * 
   * @param request - DescribeOssObjectsRequest
   * @returns DescribeOssObjectsResponse
   */
  async describeOssObjects(request: $_model.DescribeOssObjectsRequest): Promise<$_model.DescribeOssObjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOssObjectsWithOptions(request, runtime);
  }

  /**
   * Retrieves information about MaxCompute packages authorized for scanning, including package names, owner accounts, and risk levels.
   * 
   * @remarks
   * This API is typically used to query a list of MaxCompute packages. This helps you search for packages and obtain an overview of sensitive information.
   * ## QPS limit
   * The queries per second (QPS) limit for a single user is 10 calls per second. If you exceed this limit, your API calls are throttled. This can affect your business. Make sure to call this API within the limit.
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
   * Retrieves information about MaxCompute packages authorized for scanning, including package names, owner accounts, and risk levels.
   * 
   * @remarks
   * This API is typically used to query a list of MaxCompute packages. This helps you search for packages and obtain an overview of sensitive information.
   * ## QPS limit
   * The queries per second (QPS) limit for a single user is 10 calls per second. If you exceed this limit, your API calls are throttled. This can affect your business. Make sure to call this API within the limit.
   * 
   * @param request - DescribePackagesRequest
   * @returns DescribePackagesResponse
   */
  async describePackages(request: $_model.DescribePackagesRequest): Promise<$_model.DescribePackagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePackagesWithOptions(request, runtime);
  }

  /**
   * Lists assets and their authorization status.
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
   * Lists assets and their authorization status.
   * 
   * @param request - DescribeParentInstanceRequest
   * @returns DescribeParentInstanceResponse
   */
  async describeParentInstance(request: $_model.DescribeParentInstanceRequest): Promise<$_model.DescribeParentInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParentInstanceWithOptions(request, runtime);
  }

  /**
   * Call the DescribeRiskLevels operation to retrieve a list of risk levels for sensitive data.
   * 
   * @remarks
   * You can use this operation to retrieve a list of risk levels for sensitive data that are defined in the current template. This lets you view the number of rules that reference each risk level and the maximum risk level in the template.
   * ## QPS limits
   * The queries per second (QPS) limit for this operation is 10 calls per second for a single user. If you exceed this limit, your API calls are throttled. This may affect your business. Plan your calls accordingly.
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
   * Call the DescribeRiskLevels operation to retrieve a list of risk levels for sensitive data.
   * 
   * @remarks
   * You can use this operation to retrieve a list of risk levels for sensitive data that are defined in the current template. This lets you view the number of rules that reference each risk level and the maximum risk level in the template.
   * ## QPS limits
   * The queries per second (QPS) limit for this operation is 10 calls per second for a single user. If you exceed this limit, your API calls are throttled. This may affect your business. Plan your calls accordingly.
   * 
   * @param request - DescribeRiskLevelsRequest
   * @returns DescribeRiskLevelsResponse
   */
  async describeRiskLevels(request: $_model.DescribeRiskLevelsRequest): Promise<$_model.DescribeRiskLevelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRiskLevelsWithOptions(request, runtime);
  }

  /**
   * Queries a list of sensitive data detection rules.
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
   * Queries a list of sensitive data detection rules.
   * 
   * @param request - DescribeRulesRequest
   * @returns DescribeRulesResponse
   */
  async describeRules(request: $_model.DescribeRulesRequest): Promise<$_model.DescribeRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRulesWithOptions(request, runtime);
  }

  /**
   * Queries tables in data assets, such as MaxCompute and RDS, that Data Security Center is authorized to access.
   * 
   * @remarks
   * You can call the DescribeTables operation to retrieve information about specific data asset tables. You can specify parameters such as search keywords and risk levels.
   * ## QPS limits
   * Each Alibaba Cloud account can call this operation up to 10 times per second. If you exceed this limit, throttling is triggered, which may affect your business. We recommend that you call this operation at a sustainable rate.
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
   * Queries tables in data assets, such as MaxCompute and RDS, that Data Security Center is authorized to access.
   * 
   * @remarks
   * You can call the DescribeTables operation to retrieve information about specific data asset tables. You can specify parameters such as search keywords and risk levels.
   * ## QPS limits
   * Each Alibaba Cloud account can call this operation up to 10 times per second. If you exceed this limit, throttling is triggered, which may affect your business. We recommend that you call this operation at a sustainable rate.
   * 
   * @param request - DescribeTablesRequest
   * @returns DescribeTablesResponse
   */
  async describeTables(request: $_model.DescribeTablesRequest): Promise<$_model.DescribeTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTablesWithOptions(request, runtime);
  }

  /**
   * Lists all rules in an industry-specific template.
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
   * Lists all rules in an industry-specific template.
   * 
   * @param request - DescribeTemplateAllRulesRequest
   * @returns DescribeTemplateAllRulesResponse
   */
  async describeTemplateAllRules(request: $_model.DescribeTemplateAllRulesRequest): Promise<$_model.DescribeTemplateAllRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTemplateAllRulesWithOptions(request, runtime);
  }

  /**
   * Queries the status of a user account.
   * 
   * @remarks
   * Retrieves information about the current account, such as your usage of Data Security Center (DSC).
   * ## QPS limit
   * The queries per second (QPS) limit for this operation is 10 calls per second for each user. If you exceed this limit, API calls are throttled. This may affect your business. Call this operation at a reasonable frequency.
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
   * Queries the status of a user account.
   * 
   * @remarks
   * Retrieves information about the current account, such as your usage of Data Security Center (DSC).
   * ## QPS limit
   * The queries per second (QPS) limit for this operation is 10 calls per second for each user. If you exceed this limit, API calls are throttled. This may affect your business. Call this operation at a reasonable frequency.
   * 
   * @param request - DescribeUserStatusRequest
   * @returns DescribeUserStatusResponse
   */
  async describeUserStatus(request: $_model.DescribeUserStatusRequest): Promise<$_model.DescribeUserStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserStatusWithOptions(request, runtime);
  }

  /**
   * You can call the DisableUserConfig operation to disable a user configuration. After a configuration is disabled, you can call the CreateConfig operation and specify the same Code parameter to restore the general anomaly alert configuration.
   * 
   * @remarks
   * This operation disables a user configuration based on the code of a configuration item in the general anomaly alert configuration module. This lets you promptly change the status of the user configuration.
   * ## QPS limits
   * This operation is limited to 10 queries per second (QPS) per user. Calls that exceed this limit are throttled. Throttling may impact your business. Plan your calls accordingly.
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
   * You can call the DisableUserConfig operation to disable a user configuration. After a configuration is disabled, you can call the CreateConfig operation and specify the same Code parameter to restore the general anomaly alert configuration.
   * 
   * @remarks
   * This operation disables a user configuration based on the code of a configuration item in the general anomaly alert configuration module. This lets you promptly change the status of the user configuration.
   * ## QPS limits
   * This operation is limited to 10 queries per second (QPS) per user. Calls that exceed this limit are throttled. Throttling may impact your business. Plan your calls accordingly.
   * 
   * @param request - DisableUserConfigRequest
   * @returns DisableUserConfigResponse
   */
  async disableUserConfig(request: $_model.DisableUserConfigRequest): Promise<$_model.DisableUserConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableUserConfigWithOptions(request, runtime);
  }

  /**
   * You can call the ExecDatamask operation to dynamically mask data.
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
   * You can call the ExecDatamask operation to dynamically mask data.
   * 
   * @param request - ExecDatamaskRequest
   * @returns ExecDatamaskResponse
   */
  async execDatamask(request: $_model.ExecDatamaskRequest): Promise<$_model.ExecDatamaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.execDatamaskWithOptions(request, runtime);
  }

  /**
   * Triggers a data masking task.
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
   * Triggers a data masking task.
   * 
   * @param request - ManualTriggerMaskingProcessRequest
   * @returns ManualTriggerMaskingProcessResponse
   */
  async manualTriggerMaskingProcess(request: $_model.ManualTriggerMaskingProcessRequest): Promise<$_model.ManualTriggerMaskingProcessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.manualTriggerMaskingProcessWithOptions(request, runtime);
  }

  /**
   * Use the MaskOssImage operation to mask images stored as objects.
   * 
   * @remarks
   * *Prerequisites**
   * To use this operation, you must have an image masking quota. Each call deducts one unit from your quota.
   * **QPS limit**
   * The QPS limit for a single user is 10. If you exceed this limit, API calls are throttled, which can affect your business. To prevent service disruptions, operate within this limit.
   * **Usage notes**
   * After masking is complete, the system stores the masked image in the aliyun_dsc_desensitization folder within the source bucket.
   * For example, an image at exampledir/test.png in a bucket is saved as aliyun_dsc_desensitization/exampledir/test.png after masking.
   * For more information, see https\\://help.aliyun.com/zh/dsc/data-security-center/user-guide/picture-desensitization
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

    if (!$dara.isNull(request.isCoverObject)) {
      query["IsCoverObject"] = request.isCoverObject;
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
   * Use the MaskOssImage operation to mask images stored as objects.
   * 
   * @remarks
   * *Prerequisites**
   * To use this operation, you must have an image masking quota. Each call deducts one unit from your quota.
   * **QPS limit**
   * The QPS limit for a single user is 10. If you exceed this limit, API calls are throttled, which can affect your business. To prevent service disruptions, operate within this limit.
   * **Usage notes**
   * After masking is complete, the system stores the masked image in the aliyun_dsc_desensitization folder within the source bucket.
   * For example, an image at exampledir/test.png in a bucket is saved as aliyun_dsc_desensitization/exampledir/test.png after masking.
   * For more information, see https\\://help.aliyun.com/zh/dsc/data-security-center/user-guide/picture-desensitization
   * 
   * @param request - MaskOssImageRequest
   * @returns MaskOssImageResponse
   */
  async maskOssImage(request: $_model.MaskOssImageRequest): Promise<$_model.MaskOssImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.maskOssImageWithOptions(request, runtime);
  }

  /**
   * You can call ModifyDataLimit to modify the configuration items of a connection authorization in Data Security Center (DSC).
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
   * You can call ModifyDataLimit to modify the configuration items of a connection authorization in Data Security Center (DSC).
   * 
   * @param request - ModifyDataLimitRequest
   * @returns ModifyDataLimitResponse
   */
  async modifyDataLimit(request: $_model.ModifyDataLimitRequest): Promise<$_model.ModifyDataLimitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDataLimitWithOptions(request, runtime);
  }

  /**
   * Modifies the rules that define threat levels for sensitive data. This includes the default threat level for unidentified data and the threat levels for data that is classified as sensitive.
   * 
   * @remarks
   * This API modifies the rules that define threat levels for sensitive data to help with threat level planning.
   * ## QPS limit
   * The queries per second (QPS) limit for a single user is 10 calls per second. If you exceed this limit, API calls are throttled. Throttling can impact your business. We recommend that you call this API at a reasonable rate.
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
   * Modifies the rules that define threat levels for sensitive data. This includes the default threat level for unidentified data and the threat levels for data that is classified as sensitive.
   * 
   * @remarks
   * This API modifies the rules that define threat levels for sensitive data to help with threat level planning.
   * ## QPS limit
   * The queries per second (QPS) limit for a single user is 10 calls per second. If you exceed this limit, API calls are throttled. Throttling can impact your business. We recommend that you call this API at a reasonable rate.
   * 
   * @param request - ModifyDefaultLevelRequest
   * @returns ModifyDefaultLevelResponse
   */
  async modifyDefaultLevel(request: $_model.ModifyDefaultLevelRequest): Promise<$_model.ModifyDefaultLevelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDefaultLevelWithOptions(request, runtime);
  }

  /**
   * Handles anomalous activities.
   * 
   * @remarks
   * This API operation is typically used to handle alerts for data breach threats, helping you protect your data assets promptly.
   * ## QPS limits
   * This API operation has a queries per second (QPS) limit of 10 for each user. If you exceed the limit, API calls are throttled, which can affect your business. We recommend calling the API operation at a reasonable rate.
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
   * Handles anomalous activities.
   * 
   * @remarks
   * This API operation is typically used to handle alerts for data breach threats, helping you protect your data assets promptly.
   * ## QPS limits
   * This API operation has a queries per second (QPS) limit of 10 for each user. If you exceed the limit, API calls are throttled, which can affect your business. We recommend calling the API operation at a reasonable rate.
   * 
   * @param request - ModifyEventStatusRequest
   * @returns ModifyEventStatusResponse
   */
  async modifyEventStatus(request: $_model.ModifyEventStatusRequest): Promise<$_model.ModifyEventStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyEventStatusWithOptions(request, runtime);
  }

  /**
   * This operation enables anomalous activity detection for subtypes.
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
   * This operation enables anomalous activity detection for subtypes.
   * 
   * @param request - ModifyEventTypeStatusRequest
   * @returns ModifyEventTypeStatusResponse
   */
  async modifyEventTypeStatus(request: $_model.ModifyEventTypeStatusRequest): Promise<$_model.ModifyEventTypeStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyEventTypeStatusWithOptions(request, runtime);
  }

  /**
   * You can call the ModifyReportTaskStatus operation to enable or disable report tasks.
   * 
   * @remarks
   * After you activate Data Security Center (DSC), report tasks are enabled by default. If you disable report tasks, Report Center, Cloud-native Data Audit Overview, and Data Security Lab will not generate new statistical data. Existing data is not affected.
   * ## QPS limit
   * The queries per second (QPS) limit for a single user is 10 calls per second. If you exceed this limit, API calls are throttled, which may affect your business. We recommend that you call this operation at a reasonable rate.
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
   * You can call the ModifyReportTaskStatus operation to enable or disable report tasks.
   * 
   * @remarks
   * After you activate Data Security Center (DSC), report tasks are enabled by default. If you disable report tasks, Report Center, Cloud-native Data Audit Overview, and Data Security Lab will not generate new statistical data. Existing data is not affected.
   * ## QPS limit
   * The queries per second (QPS) limit for a single user is 10 calls per second. If you exceed this limit, API calls are throttled, which may affect your business. We recommend that you call this operation at a reasonable rate.
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
   * You must specify the rule name, rule ID, and rule content.
   * ## QPS limits
   * The queries per second (QPS) limit for this operation is 10 calls per second for a single user. If the limit is exceeded, API calls are throttled. This may affect your business. Plan your calls accordingly.
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
   * You must specify the rule name, rule ID, and rule content.
   * ## QPS limits
   * The queries per second (QPS) limit for this operation is 10 calls per second for a single user. If the limit is exceeded, API calls are throttled. This may affect your business. Plan your calls accordingly.
   * 
   * @param request - ModifyRuleRequest
   * @returns ModifyRuleResponse
   */
  async modifyRule(request: $_model.ModifyRuleRequest): Promise<$_model.ModifyRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRuleWithOptions(request, runtime);
  }

  /**
   * Enables or disables sensitive data detection rules.
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
   * Enables or disables sensitive data detection rules.
   * 
   * @param request - ModifyRuleStatusRequest
   * @returns ModifyRuleStatusResponse
   */
  async modifyRuleStatus(request: $_model.ModifyRuleStatusRequest): Promise<$_model.ModifyRuleStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRuleStatusWithOptions(request, runtime);
  }

  /**
   * You can call the RestoreOssImage operation to restore desensitized images.
   * 
   * @remarks
   * You can use RestoreOssImage to retrieve the original images that were processed by the MaskOssImage operation if the IsAlwaysUpload parameter is set to `true`.
   * For example, the image `aliyun_dsc_desensitization/exampledir/test.png` in a bucket is restored and saved as `aliyun_dsc_original/exampledir/test.png`.
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
   * You can call the RestoreOssImage operation to restore desensitized images.
   * 
   * @remarks
   * You can use RestoreOssImage to retrieve the original images that were processed by the MaskOssImage operation if the IsAlwaysUpload parameter is set to `true`.
   * For example, the image `aliyun_dsc_desensitization/exampledir/test.png` in a bucket is restored and saved as `aliyun_dsc_original/exampledir/test.png`.
   * 
   * @param request - RestoreOssImageRequest
   * @returns RestoreOssImageResponse
   */
  async restoreOssImage(request: $_model.RestoreOssImageRequest): Promise<$_model.RestoreOssImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restoreOssImageWithOptions(request, runtime);
  }

  /**
   * The ScanOssObjectV1 operation creates a scan task to detect sensitive data in a specified object.
   * 
   * @remarks
   * ### Prerequisites
   * You must authorize and connect to the specified bucket before you call this operation. If the bucket is not authorized, the API call returns the bucket_not_authorized error code.
   * ### QPS limits
   * The queries per second (QPS) limit for this operation is 10 calls per second for each user. If you exceed the limit, API calls are throttled. This may affect your business. We recommend that you call the operation at a reasonable rate.
   * ### Usage notes
   * You can use the returned task ID to call the DescribeIdentifyTaskStatus operation to check the running status of the task.
   * After the task is complete, call the DescribeOssObjectDetailV2 operation and provide the BucketName, ServiceRegionId, and ObjectKey to view the sensitive data detection results for the object.
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
   * The ScanOssObjectV1 operation creates a scan task to detect sensitive data in a specified object.
   * 
   * @remarks
   * ### Prerequisites
   * You must authorize and connect to the specified bucket before you call this operation. If the bucket is not authorized, the API call returns the bucket_not_authorized error code.
   * ### QPS limits
   * The queries per second (QPS) limit for this operation is 10 calls per second for each user. If you exceed the limit, API calls are throttled. This may affect your business. We recommend that you call the operation at a reasonable rate.
   * ### Usage notes
   * You can use the returned task ID to call the DescribeIdentifyTaskStatus operation to check the running status of the task.
   * After the task is complete, call the DescribeOssObjectDetailV2 operation and provide the BucketName, ServiceRegionId, and ObjectKey to view the sensitive data detection results for the object.
   * 
   * @param request - ScanOssObjectV1Request
   * @returns ScanOssObjectV1Response
   */
  async scanOssObjectV1(request: $_model.ScanOssObjectV1Request): Promise<$_model.ScanOssObjectV1Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.scanOssObjectV1WithOptions(request, runtime);
  }

  /**
   * You can call the StopMaskingProcess operation to stop a data masking task. You can call the ManualTriggerMaskingProcess operation to restart a stopped task using its unique resource ID.
   * 
   * @remarks
   * This operation stops a running data masking task. For example, you can call this operation if you no longer need to mask data for a previously configured task.
   * ## QPS limit
   * The queries per second (QPS) limit for a single user is 10 calls per second. If you exceed this limit, API calls are throttled. This may affect your business. Ensure that you call this operation within the specified limit.
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
   * You can call the StopMaskingProcess operation to stop a data masking task. You can call the ManualTriggerMaskingProcess operation to restart a stopped task using its unique resource ID.
   * 
   * @remarks
   * This operation stops a running data masking task. For example, you can call this operation if you no longer need to mask data for a previously configured task.
   * ## QPS limit
   * The queries per second (QPS) limit for a single user is 10 calls per second. If you exceed this limit, API calls are throttled. This may affect your business. Ensure that you call this operation within the specified limit.
   * 
   * @param request - StopMaskingProcessRequest
   * @returns StopMaskingProcessResponse
   */
  async stopMaskingProcess(request: $_model.StopMaskingProcessRequest): Promise<$_model.StopMaskingProcessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopMaskingProcessWithOptions(request, runtime);
  }

}
