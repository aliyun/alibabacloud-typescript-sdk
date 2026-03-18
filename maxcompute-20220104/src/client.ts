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
      'ap-northeast-1': "maxcompute.aliyuncs.com",
      'ap-northeast-2-pop': "maxcompute.aliyuncs.com",
      'ap-south-1': "maxcompute.aliyuncs.com",
      'ap-southeast-1': "maxcompute.aliyuncs.com",
      'ap-southeast-2': "maxcompute.aliyuncs.com",
      'ap-southeast-3': "maxcompute.aliyuncs.com",
      'ap-southeast-5': "maxcompute.aliyuncs.com",
      'cn-beijing': "maxcompute.aliyuncs.com",
      'cn-beijing-finance-1': "maxcompute.aliyuncs.com",
      'cn-beijing-finance-pop': "maxcompute.aliyuncs.com",
      'cn-beijing-gov-1': "maxcompute.aliyuncs.com",
      'cn-beijing-nu16-b01': "maxcompute.aliyuncs.com",
      'cn-chengdu': "maxcompute.aliyuncs.com",
      'cn-edge-1': "maxcompute.aliyuncs.com",
      'cn-fujian': "maxcompute.aliyuncs.com",
      'cn-haidian-cm12-c01': "maxcompute.aliyuncs.com",
      'cn-hangzhou': "maxcompute.aliyuncs.com",
      'cn-hangzhou-bj-b01': "maxcompute.aliyuncs.com",
      'cn-hangzhou-finance': "maxcompute.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "maxcompute.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "maxcompute.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "maxcompute.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "maxcompute.aliyuncs.com",
      'cn-hangzhou-test-306': "maxcompute.aliyuncs.com",
      'cn-hongkong': "maxcompute.aliyuncs.com",
      'cn-hongkong-finance-pop': "maxcompute.aliyuncs.com",
      'cn-huhehaote': "maxcompute.aliyuncs.com",
      'cn-north-2-gov-1': "maxcompute.aliyuncs.com",
      'cn-qingdao': "maxcompute.aliyuncs.com",
      'cn-qingdao-nebula': "maxcompute.aliyuncs.com",
      'cn-shanghai': "maxcompute.aliyuncs.com",
      'cn-shanghai-et15-b01': "maxcompute.aliyuncs.com",
      'cn-shanghai-et2-b01': "maxcompute.aliyuncs.com",
      'cn-shanghai-finance-1': "maxcompute.aliyuncs.com",
      'cn-shanghai-inner': "maxcompute.aliyuncs.com",
      'cn-shanghai-internal-test-1': "maxcompute.aliyuncs.com",
      'cn-shenzhen': "maxcompute.aliyuncs.com",
      'cn-shenzhen-finance-1': "maxcompute.aliyuncs.com",
      'cn-shenzhen-inner': "maxcompute.aliyuncs.com",
      'cn-shenzhen-st4-d01': "maxcompute.aliyuncs.com",
      'cn-shenzhen-su18-b01': "maxcompute.aliyuncs.com",
      'cn-wuhan': "maxcompute.aliyuncs.com",
      'cn-yushanfang': "maxcompute.aliyuncs.com",
      'cn-zhangbei-na61-b01': "maxcompute.aliyuncs.com",
      'cn-zhangjiakou': "maxcompute.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "maxcompute.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "maxcompute.aliyuncs.com",
      'eu-central-1': "maxcompute.aliyuncs.com",
      'eu-west-1': "maxcompute.aliyuncs.com",
      'eu-west-1-oxs': "maxcompute.aliyuncs.com",
      'me-east-1': "maxcompute.aliyuncs.com",
      'rus-west-1-pop': "maxcompute.aliyuncs.com",
      'us-east-1': "maxcompute.aliyuncs.com",
      'us-west-1': "maxcompute.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("maxcompute", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyComputeQuotaPlanResponse
   */
  async applyComputeQuotaPlanWithOptions(nickname: string, planName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyComputeQuotaPlanResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyComputeQuotaPlan",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/computeQuotaPlan/${$dara.URL.percentEncode(planName)}/apply`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyComputeQuotaPlanResponse>(await this.callApi(params, req, runtime), new $_model.ApplyComputeQuotaPlanResponse({}));
  }

  /**
   * @returns ApplyComputeQuotaPlanResponse
   */
  async applyComputeQuotaPlan(nickname: string, planName: string): Promise<$_model.ApplyComputeQuotaPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.applyComputeQuotaPlanWithOptions(nickname, planName, headers, runtime);
  }

  /**
   * @param request - CreateComputeQuotaPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateComputeQuotaPlanResponse
   */
  async createComputeQuotaPlanWithOptions(nickname: string, request: $_model.CreateComputeQuotaPlanRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateComputeQuotaPlanResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.quota)) {
      body["quota"] = request.quota;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateComputeQuotaPlan",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/computeQuotaPlan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateComputeQuotaPlanResponse>(await this.callApi(params, req, runtime), new $_model.CreateComputeQuotaPlanResponse({}));
  }

  /**
   * @param request - CreateComputeQuotaPlanRequest
   * @returns CreateComputeQuotaPlanResponse
   */
  async createComputeQuotaPlan(nickname: string, request: $_model.CreateComputeQuotaPlanRequest): Promise<$_model.CreateComputeQuotaPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createComputeQuotaPlanWithOptions(nickname, request, headers, runtime);
  }

  /**
   * Creates a data source to migrate data to MaxCompute using MaxCompute Migration Assist (MMA).
   * 
   * @param request - CreateMmsDataSourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMmsDataSourceResponse
   */
  async createMmsDataSourceWithOptions(request: $_model.CreateMmsDataSourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMmsDataSourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.networklink)) {
      body["networklink"] = request.networklink;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMmsDataSource",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMmsDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateMmsDataSourceResponse({}));
  }

  /**
   * Creates a data source to migrate data to MaxCompute using MaxCompute Migration Assist (MMA).
   * 
   * @param request - CreateMmsDataSourceRequest
   * @returns CreateMmsDataSourceResponse
   */
  async createMmsDataSource(request: $_model.CreateMmsDataSourceRequest): Promise<$_model.CreateMmsDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMmsDataSourceWithOptions(request, headers, runtime);
  }

  /**
   * Creates a job to pull metadata from a data source.
   * 
   * @param request - CreateMmsFetchMetadataJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMmsFetchMetadataJobResponse
   */
  async createMmsFetchMetadataJobWithOptions(sourceId: string, request: $_model.CreateMmsFetchMetadataJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMmsFetchMetadataJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dbName)) {
      body["dbName"] = request.dbName;
    }

    if (!$dara.isNull(request.tableNames)) {
      body["tableNames"] = request.tableNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMmsFetchMetadataJob",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/scans`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMmsFetchMetadataJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateMmsFetchMetadataJobResponse({}));
  }

  /**
   * Creates a job to pull metadata from a data source.
   * 
   * @param request - CreateMmsFetchMetadataJobRequest
   * @returns CreateMmsFetchMetadataJobResponse
   */
  async createMmsFetchMetadataJob(sourceId: string, request: $_model.CreateMmsFetchMetadataJobRequest): Promise<$_model.CreateMmsFetchMetadataJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMmsFetchMetadataJobWithOptions(sourceId, request, headers, runtime);
  }

  /**
   * Creates a data migration task.
   * 
   * @param request - CreateMmsJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMmsJobResponse
   */
  async createMmsJobWithOptions(sourceId: string, request: $_model.CreateMmsJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMmsJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.columnMapping)) {
      body["columnMapping"] = request.columnMapping;
    }

    if (!$dara.isNull(request.dstDbName)) {
      body["dstDbName"] = request.dstDbName;
    }

    if (!$dara.isNull(request.dstSchemaName)) {
      body["dstSchemaName"] = request.dstSchemaName;
    }

    if (!$dara.isNull(request.enableDataMigration)) {
      body["enableDataMigration"] = request.enableDataMigration;
    }

    if (!$dara.isNull(request.enableSchemaMigration)) {
      body["enableSchemaMigration"] = request.enableSchemaMigration;
    }

    if (!$dara.isNull(request.enableVerification)) {
      body["enableVerification"] = request.enableVerification;
    }

    if (!$dara.isNull(request.eta)) {
      body["eta"] = request.eta;
    }

    if (!$dara.isNull(request.increment)) {
      body["increment"] = request.increment;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.others)) {
      body["others"] = request.others;
    }

    if (!$dara.isNull(request.partitionFilters)) {
      body["partitionFilters"] = request.partitionFilters;
    }

    if (!$dara.isNull(request.partitions)) {
      body["partitions"] = request.partitions;
    }

    if (!$dara.isNull(request.schemaOnly)) {
      body["schemaOnly"] = request.schemaOnly;
    }

    if (!$dara.isNull(request.sourceId)) {
      body["sourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceName)) {
      body["sourceName"] = request.sourceName;
    }

    if (!$dara.isNull(request.srcDbName)) {
      body["srcDbName"] = request.srcDbName;
    }

    if (!$dara.isNull(request.srcSchemaName)) {
      body["srcSchemaName"] = request.srcSchemaName;
    }

    if (!$dara.isNull(request.tableBlackList)) {
      body["tableBlackList"] = request.tableBlackList;
    }

    if (!$dara.isNull(request.tableMapping)) {
      body["tableMapping"] = request.tableMapping;
    }

    if (!$dara.isNull(request.tableWhiteList)) {
      body["tableWhiteList"] = request.tableWhiteList;
    }

    if (!$dara.isNull(request.tables)) {
      body["tables"] = request.tables;
    }

    if (!$dara.isNull(request.taskType)) {
      body["taskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMmsJob",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/jobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMmsJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateMmsJobResponse({}));
  }

  /**
   * Creates a data migration task.
   * 
   * @param request - CreateMmsJobRequest
   * @returns CreateMmsJobResponse
   */
  async createMmsJob(sourceId: string, request: $_model.CreateMmsJobRequest): Promise<$_model.CreateMmsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMmsJobWithOptions(sourceId, request, headers, runtime);
  }

  /**
   * @param request - CreatePackageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePackageResponse
   */
  async createPackageWithOptions(projectName: string, request: $_model.CreatePackageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePackageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isInstall)) {
      query["isInstall"] = request.isInstall;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePackage",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/packages`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePackageResponse>(await this.callApi(params, req, runtime), new $_model.CreatePackageResponse({}));
  }

  /**
   * @param request - CreatePackageRequest
   * @returns CreatePackageResponse
   */
  async createPackage(projectName: string, request: $_model.CreatePackageRequest): Promise<$_model.CreatePackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPackageWithOptions(projectName, request, headers, runtime);
  }

  /**
   * 创建项目
   * 
   * @param request - CreateProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectResponse
   */
  async createProjectWithOptions(request: $_model.CreateProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProjectResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProject",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProjectResponse>(await this.callApi(params, req, runtime), new $_model.CreateProjectResponse({}));
  }

  /**
   * 创建项目
   * 
   * @param request - CreateProjectRequest
   * @returns CreateProjectResponse
   */
  async createProject(request: $_model.CreateProjectRequest): Promise<$_model.CreateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProjectWithOptions(request, headers, runtime);
  }

  /**
   * Creates a quota. When you enable MaxCompute for the first time, a pay-as-you-go quota must be created. If you create a subscription quota, your Alibaba Cloud account is automatically charged.
   * 
   * @remarks
   * *Before using this operation, review the MaxCompute billing model and [pricing](https://www.aliyun.com/product/maxcompute/pricing?spm=5176.30275541.J_ZGek9Blx07Hclc3Ddt9dg.2.19502f3dPPfezu\\&scm=20140722.S_card@@%E4%BA%A7%E5%93%81@@143540.S_new~UND~card.ID_card@@%E4%BA%A7%E5%93%81@@143540-RL_MaxCompute-LOC_2024SPSearchCard-OR_ser-PAR1_213c994b17738148516424527d0d07-V_4-RE_new9-P0_0-P1_0).**
   * 
   * @param request - CreateQuotaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQuotaResponse
   */
  async createQuotaWithOptions(request: $_model.CreateQuotaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateQuotaResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chargeType)) {
      query["chargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.commodityCode)) {
      query["commodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.commodityData)) {
      query["commodityData"] = request.commodityData;
    }

    if (!$dara.isNull(request.partNickName)) {
      query["partNickName"] = request.partNickName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQuota",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateQuotaResponse>(await this.callApi(params, req, runtime), new $_model.CreateQuotaResponse({}));
  }

  /**
   * Creates a quota. When you enable MaxCompute for the first time, a pay-as-you-go quota must be created. If you create a subscription quota, your Alibaba Cloud account is automatically charged.
   * 
   * @remarks
   * *Before using this operation, review the MaxCompute billing model and [pricing](https://www.aliyun.com/product/maxcompute/pricing?spm=5176.30275541.J_ZGek9Blx07Hclc3Ddt9dg.2.19502f3dPPfezu\\&scm=20140722.S_card@@%E4%BA%A7%E5%93%81@@143540.S_new~UND~card.ID_card@@%E4%BA%A7%E5%93%81@@143540-RL_MaxCompute-LOC_2024SPSearchCard-OR_ser-PAR1_213c994b17738148516424527d0d07-V_4-RE_new9-P0_0-P1_0).**
   * 
   * @param request - CreateQuotaRequest
   * @returns CreateQuotaResponse
   */
  async createQuota(request: $_model.CreateQuotaRequest): Promise<$_model.CreateQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createQuotaWithOptions(request, headers, runtime);
  }

  /**
   * @param request - CreateQuotaPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQuotaPlanResponse
   */
  async createQuotaPlanWithOptions(nickname: string, request: $_model.CreateQuotaPlanRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateQuotaPlanResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQuotaPlan",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/plans`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateQuotaPlanResponse>(await this.callApi(params, req, runtime), new $_model.CreateQuotaPlanResponse({}));
  }

  /**
   * @param request - CreateQuotaPlanRequest
   * @returns CreateQuotaPlanResponse
   */
  async createQuotaPlan(nickname: string, request: $_model.CreateQuotaPlanRequest): Promise<$_model.CreateQuotaPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createQuotaPlanWithOptions(nickname, request, headers, runtime);
  }

  /**
   * @param request - CreateRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRoleResponse
   */
  async createRoleWithOptions(projectName: string, request: $_model.CreateRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRoleResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRole",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/roles`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRoleResponse>(await this.callApi(params, req, runtime), new $_model.CreateRoleResponse({}));
  }

  /**
   * @param request - CreateRoleRequest
   * @returns CreateRoleResponse
   */
  async createRole(projectName: string, request: $_model.CreateRoleRequest): Promise<$_model.CreateRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRoleWithOptions(projectName, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteComputeQuotaPlanResponse
   */
  async deleteComputeQuotaPlanWithOptions(nickname: string, planName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteComputeQuotaPlanResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteComputeQuotaPlan",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/computeQuotaPlan/${$dara.URL.percentEncode(planName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteComputeQuotaPlanResponse>(await this.callApi(params, req, runtime), new $_model.DeleteComputeQuotaPlanResponse({}));
  }

  /**
   * @returns DeleteComputeQuotaPlanResponse
   */
  async deleteComputeQuotaPlan(nickname: string, planName: string): Promise<$_model.DeleteComputeQuotaPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteComputeQuotaPlanWithOptions(nickname, planName, headers, runtime);
  }

  /**
   * Deletes a MaxCompute Migration Assist (MMA) data source and its associated migration plans and metadata.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMmsDataSourceResponse
   */
  async deleteMmsDataSourceWithOptions(sourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMmsDataSourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMmsDataSource",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMmsDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMmsDataSourceResponse({}));
  }

  /**
   * Deletes a MaxCompute Migration Assist (MMA) data source and its associated migration plans and metadata.
   * @returns DeleteMmsDataSourceResponse
   */
  async deleteMmsDataSource(sourceId: string): Promise<$_model.DeleteMmsDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMmsDataSourceWithOptions(sourceId, headers, runtime);
  }

  /**
   * Deletes a MaxCompute Migration Assist (MMA) data migration plan.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMmsJobResponse
   */
  async deleteMmsJobWithOptions(sourceId: string, jobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMmsJobResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMmsJob",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/jobs/${$dara.URL.percentEncode(jobId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMmsJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMmsJobResponse({}));
  }

  /**
   * Deletes a MaxCompute Migration Assist (MMA) data migration plan.
   * @returns DeleteMmsJobResponse
   */
  async deleteMmsJob(sourceId: string, jobId: string): Promise<$_model.DeleteMmsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMmsJobWithOptions(sourceId, jobId, headers, runtime);
  }

  /**
   * Deletes a MaxCompute project. This operation is irreversible. Use this API with caution.
   * 
   * @param request - DeleteProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProjectResponse
   */
  async deleteProjectWithOptions(projectName: string, request: $_model.DeleteProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProjectResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isLogical)) {
      query["isLogical"] = request.isLogical;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProject",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteProjectResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProjectResponse({}));
  }

  /**
   * Deletes a MaxCompute project. This operation is irreversible. Use this API with caution.
   * 
   * @param request - DeleteProjectRequest
   * @returns DeleteProjectResponse
   */
  async deleteProject(projectName: string, request: $_model.DeleteProjectRequest): Promise<$_model.DeleteProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProjectWithOptions(projectName, request, headers, runtime);
  }

  /**
   * @param request - DeleteQuotaPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQuotaPlanResponse
   */
  async deleteQuotaPlanWithOptions(nickname: string, planName: string, request: $_model.DeleteQuotaPlanRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteQuotaPlanResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQuotaPlan",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/plans/${$dara.URL.percentEncode(planName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteQuotaPlanResponse>(await this.callApi(params, req, runtime), new $_model.DeleteQuotaPlanResponse({}));
  }

  /**
   * @param request - DeleteQuotaPlanRequest
   * @returns DeleteQuotaPlanResponse
   */
  async deleteQuotaPlan(nickname: string, planName: string, request: $_model.DeleteQuotaPlanRequest): Promise<$_model.DeleteQuotaPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteQuotaPlanWithOptions(nickname, planName, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetComputeEffectivePlanResponse
   */
  async getComputeEffectivePlanWithOptions(nickname: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetComputeEffectivePlanResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetComputeEffectivePlan",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/computeEffectivePlan/`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetComputeEffectivePlanResponse>(await this.callApi(params, req, runtime), new $_model.GetComputeEffectivePlanResponse({}));
  }

  /**
   * @returns GetComputeEffectivePlanResponse
   */
  async getComputeEffectivePlan(nickname: string): Promise<$_model.GetComputeEffectivePlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getComputeEffectivePlanWithOptions(nickname, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetComputeQuotaPlanResponse
   */
  async getComputeQuotaPlanWithOptions(nickname: string, planName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetComputeQuotaPlanResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetComputeQuotaPlan",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/computeQuotaPlan/${$dara.URL.percentEncode(planName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetComputeQuotaPlanResponse>(await this.callApi(params, req, runtime), new $_model.GetComputeQuotaPlanResponse({}));
  }

  /**
   * @returns GetComputeQuotaPlanResponse
   */
  async getComputeQuotaPlan(nickname: string, planName: string): Promise<$_model.GetComputeQuotaPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getComputeQuotaPlanWithOptions(nickname, planName, headers, runtime);
  }

  /**
   * @param request - GetComputeQuotaScheduleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetComputeQuotaScheduleResponse
   */
  async getComputeQuotaScheduleWithOptions(nickname: string, request: $_model.GetComputeQuotaScheduleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetComputeQuotaScheduleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.displayTimezone)) {
      query["displayTimezone"] = request.displayTimezone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetComputeQuotaSchedule",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/computeQuotaSchedule`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetComputeQuotaScheduleResponse>(await this.callApi(params, req, runtime), new $_model.GetComputeQuotaScheduleResponse({}));
  }

  /**
   * @param request - GetComputeQuotaScheduleRequest
   * @returns GetComputeQuotaScheduleResponse
   */
  async getComputeQuotaSchedule(nickname: string, request: $_model.GetComputeQuotaScheduleRequest): Promise<$_model.GetComputeQuotaScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getComputeQuotaScheduleWithOptions(nickname, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobInfoResponse
   */
  async getJobInfoWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetJobInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJobInfo",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/${$dara.URL.percentEncode(instanceId)}/info`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJobInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetJobInfoResponse({}));
  }

  /**
   * @returns GetJobInfoResponse
   */
  async getJobInfo(instanceId: string): Promise<$_model.GetJobInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobInfoWithOptions(instanceId, headers, runtime);
  }

  /**
   * @param tmpReq - GetJobResourceUsageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobResourceUsageResponse
   */
  async getJobResourceUsageWithOptions(tmpReq: $_model.GetJobResourceUsageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetJobResourceUsageResponse> {
    tmpReq.validate();
    let request = new $_model.GetJobResourceUsageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.jobOwnerList)) {
      request.jobOwnerListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobOwnerList, "jobOwnerList", "simple");
    }

    if (!$dara.isNull(tmpReq.quotaNicknameList)) {
      request.quotaNicknameListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.quotaNicknameList, "quotaNicknameList", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.date)) {
      query["date"] = request.date;
    }

    if (!$dara.isNull(request.jobOwnerListShrink)) {
      query["jobOwnerList"] = request.jobOwnerListShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.quotaNicknameListShrink)) {
      query["quotaNicknameList"] = request.quotaNicknameListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJobResourceUsage",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/resourceUsage`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJobResourceUsageResponse>(await this.callApi(params, req, runtime), new $_model.GetJobResourceUsageResponse({}));
  }

  /**
   * @param request - GetJobResourceUsageRequest
   * @returns GetJobResourceUsageResponse
   */
  async getJobResourceUsage(request: $_model.GetJobResourceUsageRequest): Promise<$_model.GetJobResourceUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobResourceUsageWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a single asynchronous task from MaxCompute Migration Assist (MMA).
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMmsAsyncTaskResponse
   */
  async getMmsAsyncTaskWithOptions(sourceId: string, asyncTaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMmsAsyncTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMmsAsyncTask",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/asyncTasks/${$dara.URL.percentEncode(asyncTaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMmsAsyncTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetMmsAsyncTaskResponse({}));
  }

  /**
   * Retrieves a single asynchronous task from MaxCompute Migration Assist (MMA).
   * @returns GetMmsAsyncTaskResponse
   */
  async getMmsAsyncTask(sourceId: string, asyncTaskId: string): Promise<$_model.GetMmsAsyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMmsAsyncTaskWithOptions(sourceId, asyncTaskId, headers, runtime);
  }

  /**
   * Retrieves the details of a single MaxCompute Migration Assist (MMA) data source.
   * 
   * @param request - GetMmsDataSourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMmsDataSourceResponse
   */
  async getMmsDataSourceWithOptions(sourceId: string, request: $_model.GetMmsDataSourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMmsDataSourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      query["lang"] = request.lang;
    }

    if (!$dara.isNull(request.withConfig)) {
      query["withConfig"] = request.withConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMmsDataSource",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMmsDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.GetMmsDataSourceResponse({}));
  }

  /**
   * Retrieves the details of a single MaxCompute Migration Assist (MMA) data source.
   * 
   * @param request - GetMmsDataSourceRequest
   * @returns GetMmsDataSourceResponse
   */
  async getMmsDataSource(sourceId: string, request: $_model.GetMmsDataSourceRequest): Promise<$_model.GetMmsDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMmsDataSourceWithOptions(sourceId, request, headers, runtime);
  }

  /**
   * Retrieves a database from a MaxCompute Migration Assist (MMA) data source.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMmsDbResponse
   */
  async getMmsDbWithOptions(sourceId: string, dbId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMmsDbResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMmsDb",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/dbs/${$dara.URL.percentEncode(dbId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMmsDbResponse>(await this.callApi(params, req, runtime), new $_model.GetMmsDbResponse({}));
  }

  /**
   * Retrieves a database from a MaxCompute Migration Assist (MMA) data source.
   * @returns GetMmsDbResponse
   */
  async getMmsDb(sourceId: string, dbId: string): Promise<$_model.GetMmsDbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMmsDbWithOptions(sourceId, dbId, headers, runtime);
  }

  /**
   * Retrieves the details of a MaxCompute Migration Assist (MMA) job that fetches metadata.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMmsFetchMetadataJobResponse
   */
  async getMmsFetchMetadataJobWithOptions(sourceId: string, scanId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMmsFetchMetadataJobResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMmsFetchMetadataJob",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/scans/${$dara.URL.percentEncode(scanId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMmsFetchMetadataJobResponse>(await this.callApi(params, req, runtime), new $_model.GetMmsFetchMetadataJobResponse({}));
  }

  /**
   * Retrieves the details of a MaxCompute Migration Assist (MMA) job that fetches metadata.
   * @returns GetMmsFetchMetadataJobResponse
   */
  async getMmsFetchMetadataJob(sourceId: string, scanId: string): Promise<$_model.GetMmsFetchMetadataJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMmsFetchMetadataJobWithOptions(sourceId, scanId, headers, runtime);
  }

  /**
   * Retrieves the details of a single MaxCompute Migration Assist (MMA) migration plan.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMmsJobResponse
   */
  async getMmsJobWithOptions(sourceId: string, jobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMmsJobResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMmsJob",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/jobs/${$dara.URL.percentEncode(jobId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMmsJobResponse>(await this.callApi(params, req, runtime), new $_model.GetMmsJobResponse({}));
  }

  /**
   * Retrieves the details of a single MaxCompute Migration Assist (MMA) migration plan.
   * @returns GetMmsJobResponse
   */
  async getMmsJob(sourceId: string, jobId: string): Promise<$_model.GetMmsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMmsJobWithOptions(sourceId, jobId, headers, runtime);
  }

  /**
   * Retrieves a partition from a MaxCompute Migration Assist (MMA) data source.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMmsPartitionResponse
   */
  async getMmsPartitionWithOptions(sourceId: string, partitionId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMmsPartitionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMmsPartition",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/partitions/${$dara.URL.percentEncode(partitionId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMmsPartitionResponse>(await this.callApi(params, req, runtime), new $_model.GetMmsPartitionResponse({}));
  }

  /**
   * Retrieves a partition from a MaxCompute Migration Assist (MMA) data source.
   * @returns GetMmsPartitionResponse
   */
  async getMmsPartition(sourceId: string, partitionId: string): Promise<$_model.GetMmsPartitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMmsPartitionWithOptions(sourceId, partitionId, headers, runtime);
  }

  /**
   * Retrieves a table from a MaxCompute Migration Assist (MMA) data source.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMmsTableResponse
   */
  async getMmsTableWithOptions(sourceId: string, tableId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMmsTableResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMmsTable",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/tables/${$dara.URL.percentEncode(tableId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMmsTableResponse>(await this.callApi(params, req, runtime), new $_model.GetMmsTableResponse({}));
  }

  /**
   * Retrieves a table from a MaxCompute Migration Assist (MMA) data source.
   * @returns GetMmsTableResponse
   */
  async getMmsTable(sourceId: string, tableId: string): Promise<$_model.GetMmsTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMmsTableWithOptions(sourceId, tableId, headers, runtime);
  }

  /**
   * Retrieves the details of a specific migration task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMmsTaskResponse
   */
  async getMmsTaskWithOptions(sourceId: string, taskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMmsTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMmsTask",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/tasks/${$dara.URL.percentEncode(taskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMmsTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetMmsTaskResponse({}));
  }

  /**
   * Retrieves the details of a specific migration task.
   * @returns GetMmsTaskResponse
   */
  async getMmsTask(sourceId: string, taskId: string): Promise<$_model.GetMmsTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMmsTaskWithOptions(sourceId, taskId, headers, runtime);
  }

  /**
   * @param request - GetPackageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPackageResponse
   */
  async getPackageWithOptions(projectName: string, packageName: string, request: $_model.GetPackageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPackageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sourceProject)) {
      query["sourceProject"] = request.sourceProject;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPackage",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/packages/${$dara.URL.percentEncode(packageName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPackageResponse>(await this.callApi(params, req, runtime), new $_model.GetPackageResponse({}));
  }

  /**
   * @param request - GetPackageRequest
   * @returns GetPackageResponse
   */
  async getPackage(projectName: string, packageName: string, request: $_model.GetPackageRequest): Promise<$_model.GetPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPackageWithOptions(projectName, packageName, request, headers, runtime);
  }

  /**
   * Queries the basic information about a MaxCompute project.
   * 
   * @param request - GetProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectResponse
   */
  async getProjectWithOptions(projectName: string, request: $_model.GetProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetProjectResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.verbose)) {
      query["verbose"] = request.verbose;
    }

    if (!$dara.isNull(request.withQuotaProductType)) {
      query["withQuotaProductType"] = request.withQuotaProductType;
    }

    if (!$dara.isNull(request.withStorageTierInfo)) {
      query["withStorageTierInfo"] = request.withStorageTierInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProject",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProjectResponse>(await this.callApi(params, req, runtime), new $_model.GetProjectResponse({}));
  }

  /**
   * Queries the basic information about a MaxCompute project.
   * 
   * @param request - GetProjectRequest
   * @returns GetProjectResponse
   */
  async getProject(projectName: string, request: $_model.GetProjectRequest): Promise<$_model.GetProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectWithOptions(projectName, request, headers, runtime);
  }

  /**
   * Retrieve information for the specified level-1 quota group. Warning: This operation will be decommissioned on July 31, 2024. It will be replaced by the `QueryQuota` operation. The request parameters, response parameters, and features of the two operations are the same.
   * 
   * @param request - GetQuotaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQuotaResponse
   */
  async getQuotaWithOptions(nickname: string, request: $_model.GetQuotaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetQuotaResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.akProven)) {
      query["AkProven"] = request.akProven;
    }

    if (!$dara.isNull(request.mock)) {
      query["mock"] = request.mock;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQuota",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQuotaResponse>(await this.callApi(params, req, runtime), new $_model.GetQuotaResponse({}));
  }

  /**
   * Retrieve information for the specified level-1 quota group. Warning: This operation will be decommissioned on July 31, 2024. It will be replaced by the `QueryQuota` operation. The request parameters, response parameters, and features of the two operations are the same.
   * 
   * @param request - GetQuotaRequest
   * @returns GetQuotaResponse
   */
  async getQuota(nickname: string, request: $_model.GetQuotaRequest): Promise<$_model.GetQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getQuotaWithOptions(nickname, request, headers, runtime);
  }

  /**
   * @param request - GetQuotaPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQuotaPlanResponse
   */
  async getQuotaPlanWithOptions(nickname: string, planName: string, request: $_model.GetQuotaPlanRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetQuotaPlanResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQuotaPlan",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/plans/${$dara.URL.percentEncode(planName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQuotaPlanResponse>(await this.callApi(params, req, runtime), new $_model.GetQuotaPlanResponse({}));
  }

  /**
   * @param request - GetQuotaPlanRequest
   * @returns GetQuotaPlanResponse
   */
  async getQuotaPlan(nickname: string, planName: string, request: $_model.GetQuotaPlanRequest): Promise<$_model.GetQuotaPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getQuotaPlanWithOptions(nickname, planName, request, headers, runtime);
  }

  /**
   * @param request - GetQuotaScheduleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQuotaScheduleResponse
   */
  async getQuotaScheduleWithOptions(nickname: string, request: $_model.GetQuotaScheduleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetQuotaScheduleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.displayTimezone)) {
      query["displayTimezone"] = request.displayTimezone;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQuotaSchedule",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/schedule`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQuotaScheduleResponse>(await this.callApi(params, req, runtime), new $_model.GetQuotaScheduleResponse({}));
  }

  /**
   * @param request - GetQuotaScheduleRequest
   * @returns GetQuotaScheduleResponse
   */
  async getQuotaSchedule(nickname: string, request: $_model.GetQuotaScheduleRequest): Promise<$_model.GetQuotaScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getQuotaScheduleWithOptions(nickname, request, headers, runtime);
  }

  /**
   * @param tmpReq - GetQuotaUsageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQuotaUsageResponse
   */
  async getQuotaUsageWithOptions(nickname: string, tmpReq: $_model.GetQuotaUsageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetQuotaUsageResponse> {
    tmpReq.validate();
    let request = new $_model.GetQuotaUsageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.plotTypes)) {
      request.plotTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.plotTypes, "plotTypes", "simple");
    }

    if (!$dara.isNull(tmpReq.yAxisTypes)) {
      request.yAxisTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.yAxisTypes, "yAxisTypes", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aggMethod)) {
      query["aggMethod"] = request.aggMethod;
    }

    if (!$dara.isNull(request.from)) {
      query["from"] = request.from;
    }

    if (!$dara.isNull(request.plotTypesShrink)) {
      query["plotTypes"] = request.plotTypesShrink;
    }

    if (!$dara.isNull(request.productId)) {
      query["productId"] = request.productId;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.subQuotaNickname)) {
      query["subQuotaNickname"] = request.subQuotaNickname;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.to)) {
      query["to"] = request.to;
    }

    if (!$dara.isNull(request.yAxisTypesShrink)) {
      query["yAxisTypes"] = request.yAxisTypesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQuotaUsage",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/usage`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQuotaUsageResponse>(await this.callApi(params, req, runtime), new $_model.GetQuotaUsageResponse({}));
  }

  /**
   * @param request - GetQuotaUsageRequest
   * @returns GetQuotaUsageResponse
   */
  async getQuotaUsage(nickname: string, request: $_model.GetQuotaUsageRequest): Promise<$_model.GetQuotaUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getQuotaUsageWithOptions(nickname, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRoleAclResponse
   */
  async getRoleAclWithOptions(projectName: string, roleName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRoleAclResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRoleAcl",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/roles/${$dara.URL.percentEncode(roleName)}/roleAcl`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRoleAclResponse>(await this.callApi(params, req, runtime), new $_model.GetRoleAclResponse({}));
  }

  /**
   * @returns GetRoleAclResponse
   */
  async getRoleAcl(projectName: string, roleName: string): Promise<$_model.GetRoleAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRoleAclWithOptions(projectName, roleName, headers, runtime);
  }

  /**
   * @param request - GetRoleAclOnObjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRoleAclOnObjectResponse
   */
  async getRoleAclOnObjectWithOptions(projectName: string, roleName: string, request: $_model.GetRoleAclOnObjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRoleAclOnObjectResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.objectName)) {
      query["objectName"] = request.objectName;
    }

    if (!$dara.isNull(request.objectType)) {
      query["objectType"] = request.objectType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRoleAclOnObject",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/roles/${$dara.URL.percentEncode(roleName)}/acl`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRoleAclOnObjectResponse>(await this.callApi(params, req, runtime), new $_model.GetRoleAclOnObjectResponse({}));
  }

  /**
   * @param request - GetRoleAclOnObjectRequest
   * @returns GetRoleAclOnObjectResponse
   */
  async getRoleAclOnObject(projectName: string, roleName: string, request: $_model.GetRoleAclOnObjectRequest): Promise<$_model.GetRoleAclOnObjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRoleAclOnObjectWithOptions(projectName, roleName, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRolePolicyResponse
   */
  async getRolePolicyWithOptions(projectName: string, roleName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRolePolicyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRolePolicy",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/roles/${$dara.URL.percentEncode(roleName)}/policy`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRolePolicyResponse>(await this.callApi(params, req, runtime), new $_model.GetRolePolicyResponse({}));
  }

  /**
   * @returns GetRolePolicyResponse
   */
  async getRolePolicy(projectName: string, roleName: string): Promise<$_model.GetRolePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRolePolicyWithOptions(projectName, roleName, headers, runtime);
  }

  /**
   * @param tmpReq - GetRunningJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRunningJobsResponse
   */
  async getRunningJobsWithOptions(tmpReq: $_model.GetRunningJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRunningJobsResponse> {
    tmpReq.validate();
    let request = new $_model.GetRunningJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.jobOwnerList)) {
      request.jobOwnerListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobOwnerList, "jobOwnerList", "simple");
    }

    if (!$dara.isNull(tmpReq.quotaNicknameList)) {
      request.quotaNicknameListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.quotaNicknameList, "quotaNicknameList", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.from)) {
      query["from"] = request.from;
    }

    if (!$dara.isNull(request.jobOwnerListShrink)) {
      query["jobOwnerList"] = request.jobOwnerListShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.quotaNicknameListShrink)) {
      query["quotaNicknameList"] = request.quotaNicknameListShrink;
    }

    if (!$dara.isNull(request.to)) {
      query["to"] = request.to;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRunningJobs",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/runningJobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRunningJobsResponse>(await this.callApi(params, req, runtime), new $_model.GetRunningJobsResponse({}));
  }

  /**
   * @param request - GetRunningJobsRequest
   * @returns GetRunningJobsResponse
   */
  async getRunningJobs(request: $_model.GetRunningJobsRequest): Promise<$_model.GetRunningJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRunningJobsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a summary of the total storage amount.
   * 
   * @param request - GetStorageAmountSummaryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStorageAmountSummaryResponse
   */
  async getStorageAmountSummaryWithOptions(request: $_model.GetStorageAmountSummaryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetStorageAmountSummaryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.date)) {
      query["date"] = request.date;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStorageAmountSummary",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/observations/analysis/storage/amount`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStorageAmountSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetStorageAmountSummaryResponse({}));
  }

  /**
   * Retrieves a summary of the total storage amount.
   * 
   * @param request - GetStorageAmountSummaryRequest
   * @returns GetStorageAmountSummaryResponse
   */
  async getStorageAmountSummary(request: $_model.GetStorageAmountSummaryRequest): Promise<$_model.GetStorageAmountSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getStorageAmountSummaryWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a summary of storage usage.
   * 
   * @param request - GetStorageSizeSummaryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStorageSizeSummaryResponse
   */
  async getStorageSizeSummaryWithOptions(request: $_model.GetStorageSizeSummaryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetStorageSizeSummaryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.date)) {
      query["date"] = request.date;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStorageSizeSummary",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/observations/analysis/storage/size`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStorageSizeSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetStorageSizeSummaryResponse({}));
  }

  /**
   * Retrieves a summary of storage usage.
   * 
   * @param request - GetStorageSizeSummaryRequest
   * @returns GetStorageSizeSummaryResponse
   */
  async getStorageSizeSummary(request: $_model.GetStorageSizeSummaryRequest): Promise<$_model.GetStorageSizeSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getStorageSizeSummaryWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the year-on-year (YoY) change in storage usage.
   * 
   * @param tmpReq - GetStorageSummaryComparedRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStorageSummaryComparedResponse
   */
  async getStorageSummaryComparedWithOptions(type: string, tmpReq: $_model.GetStorageSummaryComparedRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetStorageSummaryComparedResponse> {
    tmpReq.validate();
    let request = new $_model.GetStorageSummaryComparedShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.projects)) {
      request.projectsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.projects, "projects", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.beginDate)) {
      query["beginDate"] = request.beginDate;
    }

    if (!$dara.isNull(request.endDate)) {
      query["endDate"] = request.endDate;
    }

    if (!$dara.isNull(request.projectsShrink)) {
      query["projects"] = request.projectsShrink;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStorageSummaryCompared",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/observations/analysis/storage/${$dara.URL.percentEncode(type)}/compared`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStorageSummaryComparedResponse>(await this.callApi(params, req, runtime), new $_model.GetStorageSummaryComparedResponse({}));
  }

  /**
   * Retrieves the year-on-year (YoY) change in storage usage.
   * 
   * @param request - GetStorageSummaryComparedRequest
   * @returns GetStorageSummaryComparedResponse
   */
  async getStorageSummaryCompared(type: string, request: $_model.GetStorageSummaryComparedRequest): Promise<$_model.GetStorageSummaryComparedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getStorageSummaryComparedWithOptions(type, request, headers, runtime);
  }

  /**
   * @param request - GetTableInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableInfoResponse
   */
  async getTableInfoWithOptions(projectName: string, tableName: string, request: $_model.GetTableInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTableInfoResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.schemaName)) {
      query["schemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTableInfo",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/tables/${$dara.URL.percentEncode(tableName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTableInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetTableInfoResponse({}));
  }

  /**
   * @param request - GetTableInfoRequest
   * @returns GetTableInfoResponse
   */
  async getTableInfo(projectName: string, tableName: string, request: $_model.GetTableInfoRequest): Promise<$_model.GetTableInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTableInfoWithOptions(projectName, tableName, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTrustedProjectsResponse
   */
  async getTrustedProjectsWithOptions(projectName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTrustedProjectsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTrustedProjects",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/trustedProjects`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTrustedProjectsResponse>(await this.callApi(params, req, runtime), new $_model.GetTrustedProjectsResponse({}));
  }

  /**
   * @returns GetTrustedProjectsResponse
   */
  async getTrustedProjects(projectName: string): Promise<$_model.GetTrustedProjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTrustedProjectsWithOptions(projectName, headers, runtime);
  }

  /**
   * @param request - KillJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns KillJobsResponse
   */
  async killJobsWithOptions(request: $_model.KillJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.KillJobsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "KillJobs",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/kill`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.KillJobsResponse>(await this.callApi(params, req, runtime), new $_model.KillJobsResponse({}));
  }

  /**
   * @param request - KillJobsRequest
   * @returns KillJobsResponse
   */
  async killJobs(request: $_model.KillJobsRequest): Promise<$_model.KillJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.killJobsWithOptions(request, headers, runtime);
  }

  /**
   * @param request - ListComputeMetricsByInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListComputeMetricsByInstanceResponse
   */
  async listComputeMetricsByInstanceWithOptions(request: $_model.ListComputeMetricsByInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListComputeMetricsByInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endDate)) {
      body["endDate"] = request.endDate;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["instanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobOwner)) {
      body["jobOwner"] = request.jobOwner;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectNames)) {
      body["projectNames"] = request.projectNames;
    }

    if (!$dara.isNull(request.region)) {
      body["region"] = request.region;
    }

    if (!$dara.isNull(request.signature)) {
      body["signature"] = request.signature;
    }

    if (!$dara.isNull(request.specCodes)) {
      body["specCodes"] = request.specCodes;
    }

    if (!$dara.isNull(request.startDate)) {
      body["startDate"] = request.startDate;
    }

    if (!$dara.isNull(request.types)) {
      body["types"] = request.types;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListComputeMetricsByInstance",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/computeMetrics/listByInstance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListComputeMetricsByInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ListComputeMetricsByInstanceResponse({}));
  }

  /**
   * @param request - ListComputeMetricsByInstanceRequest
   * @returns ListComputeMetricsByInstanceResponse
   */
  async listComputeMetricsByInstance(request: $_model.ListComputeMetricsByInstanceRequest): Promise<$_model.ListComputeMetricsByInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listComputeMetricsByInstanceWithOptions(request, headers, runtime);
  }

  /**
   * Lists compute quota plans.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListComputeQuotaPlanResponse
   */
  async listComputeQuotaPlanWithOptions(nickname: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListComputeQuotaPlanResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListComputeQuotaPlan",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/computeQuotaPlan`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListComputeQuotaPlanResponse>(await this.callApi(params, req, runtime), new $_model.ListComputeQuotaPlanResponse({}));
  }

  /**
   * Lists compute quota plans.
   * @returns ListComputeQuotaPlanResponse
   */
  async listComputeQuotaPlan(nickname: string): Promise<$_model.ListComputeQuotaPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listComputeQuotaPlanWithOptions(nickname, headers, runtime);
  }

  /**
   * @param request - ListFunctionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFunctionsResponse
   */
  async listFunctionsWithOptions(projectName: string, request: $_model.ListFunctionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListFunctionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.marker)) {
      query["marker"] = request.marker;
    }

    if (!$dara.isNull(request.maxItem)) {
      query["maxItem"] = request.maxItem;
    }

    if (!$dara.isNull(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    if (!$dara.isNull(request.schemaName)) {
      query["schemaName"] = request.schemaName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFunctions",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/functions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFunctionsResponse>(await this.callApi(params, req, runtime), new $_model.ListFunctionsResponse({}));
  }

  /**
   * @param request - ListFunctionsRequest
   * @returns ListFunctionsResponse
   */
  async listFunctions(projectName: string, request: $_model.ListFunctionsRequest): Promise<$_model.ListFunctionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFunctionsWithOptions(projectName, request, headers, runtime);
  }

  /**
   * Retrieves a list of jobs.
   * 
   * @param request - ListJobInfosRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobInfosResponse
   */
  async listJobInfosWithOptions(request: $_model.ListJobInfosRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobInfosResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ascOrder)) {
      query["ascOrder"] = request.ascOrder;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["orderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.extNodeIdList)) {
      body["extNodeIdList"] = request.extNodeIdList;
    }

    if (!$dara.isNull(request.extNodeNameList)) {
      body["extNodeNameList"] = request.extNodeNameList;
    }

    if (!$dara.isNull(request.from)) {
      body["from"] = request.from;
    }

    if (!$dara.isNull(request.instanceIdList)) {
      body["instanceIdList"] = request.instanceIdList;
    }

    if (!$dara.isNull(request.jobOwnerList)) {
      body["jobOwnerList"] = request.jobOwnerList;
    }

    if (!$dara.isNull(request.priorityList)) {
      body["priorityList"] = request.priorityList;
    }

    if (!$dara.isNull(request.projectList)) {
      body["projectList"] = request.projectList;
    }

    if (!$dara.isNull(request.quotaNickname)) {
      body["quotaNickname"] = request.quotaNickname;
    }

    if (!$dara.isNull(request.sceneTagList)) {
      body["sceneTagList"] = request.sceneTagList;
    }

    if (!$dara.isNull(request.signatureList)) {
      body["signatureList"] = request.signatureList;
    }

    if (!$dara.isNull(request.sortByList)) {
      body["sortByList"] = request.sortByList;
    }

    if (!$dara.isNull(request.sortOrderList)) {
      body["sortOrderList"] = request.sortOrderList;
    }

    if (!$dara.isNull(request.statusList)) {
      body["statusList"] = request.statusList;
    }

    if (!$dara.isNull(request.taskNameList)) {
      body["taskNameList"] = request.taskNameList;
    }

    if (!$dara.isNull(request.to)) {
      body["to"] = request.to;
    }

    if (!$dara.isNull(request.typeList)) {
      body["typeList"] = request.typeList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobInfos",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJobInfosResponse>(await this.callApi(params, req, runtime), new $_model.ListJobInfosResponse({}));
  }

  /**
   * Retrieves a list of jobs.
   * 
   * @param request - ListJobInfosRequest
   * @returns ListJobInfosResponse
   */
  async listJobInfos(request: $_model.ListJobInfosRequest): Promise<$_model.ListJobInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJobInfosWithOptions(request, headers, runtime);
  }

  /**
   * @param request - ListJobMetricRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobMetricResponse
   */
  async listJobMetricWithOptions(request: $_model.ListJobMetricRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobMetricResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.group)) {
      body["group"] = request.group;
    }

    if (!$dara.isNull(request.metric)) {
      body["metric"] = request.metric;
    }

    if (!$dara.isNull(request.period)) {
      body["period"] = request.period;
    }

    if (!$dara.isNull(request.project)) {
      body["project"] = request.project;
    }

    if (!$dara.isNull(request.quota)) {
      body["quota"] = request.quota;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobMetric",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/metric`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJobMetricResponse>(await this.callApi(params, req, runtime), new $_model.ListJobMetricResponse({}));
  }

  /**
   * @param request - ListJobMetricRequest
   * @returns ListJobMetricResponse
   */
  async listJobMetric(request: $_model.ListJobMetricRequest): Promise<$_model.ListJobMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJobMetricWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves job snapshot data at a specific point in time.
   * 
   * @param request - ListJobSnapshotInfosRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobSnapshotInfosResponse
   */
  async listJobSnapshotInfosWithOptions(request: $_model.ListJobSnapshotInfosRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobSnapshotInfosResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ascOrder)) {
      query["ascOrder"] = request.ascOrder;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["orderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.extNodeIdList)) {
      body["extNodeIdList"] = request.extNodeIdList;
    }

    if (!$dara.isNull(request.from)) {
      body["from"] = request.from;
    }

    if (!$dara.isNull(request.instanceIdList)) {
      body["instanceIdList"] = request.instanceIdList;
    }

    if (!$dara.isNull(request.jobOwnerList)) {
      body["jobOwnerList"] = request.jobOwnerList;
    }

    if (!$dara.isNull(request.priorityList)) {
      body["priorityList"] = request.priorityList;
    }

    if (!$dara.isNull(request.projectList)) {
      body["projectList"] = request.projectList;
    }

    if (!$dara.isNull(request.quotaNickname)) {
      body["quotaNickname"] = request.quotaNickname;
    }

    if (!$dara.isNull(request.signatureList)) {
      body["signatureList"] = request.signatureList;
    }

    if (!$dara.isNull(request.sortByList)) {
      body["sortByList"] = request.sortByList;
    }

    if (!$dara.isNull(request.sortOrderList)) {
      body["sortOrderList"] = request.sortOrderList;
    }

    if (!$dara.isNull(request.statusList)) {
      body["statusList"] = request.statusList;
    }

    if (!$dara.isNull(request.to)) {
      body["to"] = request.to;
    }

    if (!$dara.isNull(request.typeList)) {
      body["typeList"] = request.typeList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobSnapshotInfos",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/snapshot`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJobSnapshotInfosResponse>(await this.callApi(params, req, runtime), new $_model.ListJobSnapshotInfosResponse({}));
  }

  /**
   * Retrieves job snapshot data at a specific point in time.
   * 
   * @param request - ListJobSnapshotInfosRequest
   * @returns ListJobSnapshotInfosResponse
   */
  async listJobSnapshotInfos(request: $_model.ListJobSnapshotInfosRequest): Promise<$_model.ListJobSnapshotInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJobSnapshotInfosWithOptions(request, headers, runtime);
  }

  /**
   * Lists the MaxCompute Migration Assist (MMA) data sources.
   * 
   * @param request - ListMmsDataSourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMmsDataSourcesResponse
   */
  async listMmsDataSourcesWithOptions(request: $_model.ListMmsDataSourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMmsDataSourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMmsDataSources",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMmsDataSourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListMmsDataSourcesResponse({}));
  }

  /**
   * Lists the MaxCompute Migration Assist (MMA) data sources.
   * 
   * @param request - ListMmsDataSourcesRequest
   * @returns ListMmsDataSourcesResponse
   */
  async listMmsDataSources(request: $_model.ListMmsDataSourcesRequest): Promise<$_model.ListMmsDataSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMmsDataSourcesWithOptions(request, headers, runtime);
  }

  /**
   * List databases in the MMA data source.
   * 
   * @param tmpReq - ListMmsDbsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMmsDbsResponse
   */
  async listMmsDbsWithOptions(sourceId: string, tmpReq: $_model.ListMmsDbsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMmsDbsResponse> {
    tmpReq.validate();
    let request = new $_model.ListMmsDbsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sorter)) {
      request.sorterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sorter, "sorter", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sorterShrink)) {
      query["sorter"] = request.sorterShrink;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMmsDbs",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/dbs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMmsDbsResponse>(await this.callApi(params, req, runtime), new $_model.ListMmsDbsResponse({}));
  }

  /**
   * List databases in the MMA data source.
   * 
   * @param request - ListMmsDbsRequest
   * @returns ListMmsDbsResponse
   */
  async listMmsDbs(sourceId: string, request: $_model.ListMmsDbsRequest): Promise<$_model.ListMmsDbsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMmsDbsWithOptions(sourceId, request, headers, runtime);
  }

  /**
   * Lists migration jobs.
   * 
   * @param request - ListMmsJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMmsJobsResponse
   */
  async listMmsJobsWithOptions(sourceId: string, request: $_model.ListMmsJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMmsJobsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dstDbName)) {
      query["dstDbName"] = request.dstDbName;
    }

    if (!$dara.isNull(request.dstTableName)) {
      query["dstTableName"] = request.dstTableName;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.srcDbName)) {
      query["srcDbName"] = request.srcDbName;
    }

    if (!$dara.isNull(request.srcTableName)) {
      query["srcTableName"] = request.srcTableName;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.stopped)) {
      query["stopped"] = request.stopped;
    }

    if (!$dara.isNull(request.timerId)) {
      query["timerId"] = request.timerId;
    }

    if (!$dara.isNull(request.sorter)) {
      query["sorter"] = request.sorter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMmsJobs",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/jobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMmsJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListMmsJobsResponse({}));
  }

  /**
   * Lists migration jobs.
   * 
   * @param request - ListMmsJobsRequest
   * @returns ListMmsJobsResponse
   */
  async listMmsJobs(sourceId: string, request: $_model.ListMmsJobsRequest): Promise<$_model.ListMmsJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMmsJobsWithOptions(sourceId, request, headers, runtime);
  }

  /**
   * Lists the partitions in a MaxCompute Migration Assist (MMA) data source.
   * 
   * @param tmpReq - ListMmsPartitionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMmsPartitionsResponse
   */
  async listMmsPartitionsWithOptions(sourceId: string, tmpReq: $_model.ListMmsPartitionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMmsPartitionsResponse> {
    tmpReq.validate();
    let request = new $_model.ListMmsPartitionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.status)) {
      request.statusShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.status, "status", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dbId)) {
      query["dbId"] = request.dbId;
    }

    if (!$dara.isNull(request.dbName)) {
      query["dbName"] = request.dbName;
    }

    if (!$dara.isNull(request.lastDdlTimeEnd)) {
      query["lastDdlTimeEnd"] = request.lastDdlTimeEnd;
    }

    if (!$dara.isNull(request.lastDdlTimeStart)) {
      query["lastDdlTimeStart"] = request.lastDdlTimeStart;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.statusShrink)) {
      query["status"] = request.statusShrink;
    }

    if (!$dara.isNull(request.tableId)) {
      query["tableId"] = request.tableId;
    }

    if (!$dara.isNull(request.tableName)) {
      query["tableName"] = request.tableName;
    }

    if (!$dara.isNull(request.updated)) {
      query["updated"] = request.updated;
    }

    if (!$dara.isNull(request.value)) {
      query["value"] = request.value;
    }

    if (!$dara.isNull(request.sorter)) {
      query["sorter"] = request.sorter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMmsPartitions",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/partitions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMmsPartitionsResponse>(await this.callApi(params, req, runtime), new $_model.ListMmsPartitionsResponse({}));
  }

  /**
   * Lists the partitions in a MaxCompute Migration Assist (MMA) data source.
   * 
   * @param request - ListMmsPartitionsRequest
   * @returns ListMmsPartitionsResponse
   */
  async listMmsPartitions(sourceId: string, request: $_model.ListMmsPartitionsRequest): Promise<$_model.ListMmsPartitionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMmsPartitionsWithOptions(sourceId, request, headers, runtime);
  }

  /**
   * Lists the tables in a MaxCompute Migration Assist (MMA) data source.
   * 
   * @param tmpReq - ListMmsTablesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMmsTablesResponse
   */
  async listMmsTablesWithOptions(sourceId: string, tmpReq: $_model.ListMmsTablesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMmsTablesResponse> {
    tmpReq.validate();
    let request = new $_model.ListMmsTablesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.status)) {
      request.statusShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.status, "status", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dbId)) {
      query["dbId"] = request.dbId;
    }

    if (!$dara.isNull(request.dbName)) {
      query["dbName"] = request.dbName;
    }

    if (!$dara.isNull(request.dstName)) {
      query["dstName"] = request.dstName;
    }

    if (!$dara.isNull(request.dstProjectName)) {
      query["dstProjectName"] = request.dstProjectName;
    }

    if (!$dara.isNull(request.dstSchemaName)) {
      query["dstSchemaName"] = request.dstSchemaName;
    }

    if (!$dara.isNull(request.hasPartitions)) {
      query["hasPartitions"] = request.hasPartitions;
    }

    if (!$dara.isNull(request.lastDdlTimeEnd)) {
      query["lastDdlTimeEnd"] = request.lastDdlTimeEnd;
    }

    if (!$dara.isNull(request.lastDdlTimeStart)) {
      query["lastDdlTimeStart"] = request.lastDdlTimeStart;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.onlyName)) {
      query["onlyName"] = request.onlyName;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.statusShrink)) {
      query["status"] = request.statusShrink;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    if (!$dara.isNull(request.sorter)) {
      query["sorter"] = request.sorter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMmsTables",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/tables`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMmsTablesResponse>(await this.callApi(params, req, runtime), new $_model.ListMmsTablesResponse({}));
  }

  /**
   * Lists the tables in a MaxCompute Migration Assist (MMA) data source.
   * 
   * @param request - ListMmsTablesRequest
   * @returns ListMmsTablesResponse
   */
  async listMmsTables(sourceId: string, request: $_model.ListMmsTablesRequest): Promise<$_model.ListMmsTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMmsTablesWithOptions(sourceId, request, headers, runtime);
  }

  /**
   * Lists the execution logs for a specific migration task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMmsTaskLogsResponse
   */
  async listMmsTaskLogsWithOptions(sourceId: string, taskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMmsTaskLogsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMmsTaskLogs",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/tasks/${$dara.URL.percentEncode(taskId)}/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMmsTaskLogsResponse>(await this.callApi(params, req, runtime), new $_model.ListMmsTaskLogsResponse({}));
  }

  /**
   * Lists the execution logs for a specific migration task.
   * @returns ListMmsTaskLogsResponse
   */
  async listMmsTaskLogs(sourceId: string, taskId: string): Promise<$_model.ListMmsTaskLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMmsTaskLogsWithOptions(sourceId, taskId, headers, runtime);
  }

  /**
   * Retrieves a list of migration tasks.
   * 
   * @param request - ListMmsTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMmsTasksResponse
   */
  async listMmsTasksWithOptions(sourceId: string, request: $_model.ListMmsTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMmsTasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dstDbName)) {
      query["dstDbName"] = request.dstDbName;
    }

    if (!$dara.isNull(request.dstTableName)) {
      query["dstTableName"] = request.dstTableName;
    }

    if (!$dara.isNull(request.jobId)) {
      query["jobId"] = request.jobId;
    }

    if (!$dara.isNull(request.jobName)) {
      query["jobName"] = request.jobName;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.partition)) {
      query["partition"] = request.partition;
    }

    if (!$dara.isNull(request.srcDbName)) {
      query["srcDbName"] = request.srcDbName;
    }

    if (!$dara.isNull(request.srcTableName)) {
      query["srcTableName"] = request.srcTableName;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.sorter)) {
      query["sorter"] = request.sorter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMmsTasks",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMmsTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListMmsTasksResponse({}));
  }

  /**
   * Retrieves a list of migration tasks.
   * 
   * @param request - ListMmsTasksRequest
   * @returns ListMmsTasksResponse
   */
  async listMmsTasks(sourceId: string, request: $_model.ListMmsTasksRequest): Promise<$_model.ListMmsTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMmsTasksWithOptions(sourceId, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPackagesResponse
   */
  async listPackagesWithOptions(projectName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPackagesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPackages",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/packages`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPackagesResponse>(await this.callApi(params, req, runtime), new $_model.ListPackagesResponse({}));
  }

  /**
   * @returns ListPackagesResponse
   */
  async listPackages(projectName: string): Promise<$_model.ListPackagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPackagesWithOptions(projectName, headers, runtime);
  }

  /**
   * ListProjectUsers
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectUsersResponse
   */
  async listProjectUsersWithOptions(projectName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectUsersResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjectUsers",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/users`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectUsersResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectUsersResponse({}));
  }

  /**
   * ListProjectUsers
   * @returns ListProjectUsersResponse
   */
  async listProjectUsers(projectName: string): Promise<$_model.ListProjectUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectUsersWithOptions(projectName, headers, runtime);
  }

  /**
   * @param request - ListProjectsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectsResponse
   */
  async listProjectsWithOptions(request: $_model.ListProjectsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listSystemCatalog)) {
      query["listSystemCatalog"] = request.listSystemCatalog;
    }

    if (!$dara.isNull(request.marker)) {
      query["marker"] = request.marker;
    }

    if (!$dara.isNull(request.maxItem)) {
      query["maxItem"] = request.maxItem;
    }

    if (!$dara.isNull(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    if (!$dara.isNull(request.quotaName)) {
      query["quotaName"] = request.quotaName;
    }

    if (!$dara.isNull(request.quotaNickName)) {
      query["quotaNickName"] = request.quotaNickName;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.saleTags)) {
      query["saleTags"] = request.saleTags;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjects",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectsResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectsResponse({}));
  }

  /**
   * @param request - ListProjectsRequest
   * @returns ListProjectsResponse
   */
  async listProjects(request: $_model.ListProjectsRequest): Promise<$_model.ListProjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a list of quotas.
   * 
   * @param request - ListQuotasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQuotasResponse
   */
  async listQuotasWithOptions(request: $_model.ListQuotasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListQuotasResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billingType)) {
      query["billingType"] = request.billingType;
    }

    if (!$dara.isNull(request.marker)) {
      query["marker"] = request.marker;
    }

    if (!$dara.isNull(request.maxItem)) {
      query["maxItem"] = request.maxItem;
    }

    if (!$dara.isNull(request.productId)) {
      query["productId"] = request.productId;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.saleTags)) {
      query["saleTags"] = request.saleTags;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQuotas",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQuotasResponse>(await this.callApi(params, req, runtime), new $_model.ListQuotasResponse({}));
  }

  /**
   * Retrieves a list of quotas.
   * 
   * @param request - ListQuotasRequest
   * @returns ListQuotasResponse
   */
  async listQuotas(request: $_model.ListQuotasRequest): Promise<$_model.ListQuotasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQuotasWithOptions(request, headers, runtime);
  }

  /**
   * @param request - ListQuotasPlansRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQuotasPlansResponse
   */
  async listQuotasPlansWithOptions(nickname: string, request: $_model.ListQuotasPlansRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListQuotasPlansResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQuotasPlans",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/plans`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQuotasPlansResponse>(await this.callApi(params, req, runtime), new $_model.ListQuotasPlansResponse({}));
  }

  /**
   * @param request - ListQuotasPlansRequest
   * @returns ListQuotasPlansResponse
   */
  async listQuotasPlans(nickname: string, request: $_model.ListQuotasPlansRequest): Promise<$_model.ListQuotasPlansResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQuotasPlansWithOptions(nickname, request, headers, runtime);
  }

  /**
   * @param request - ListResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourcesResponse
   */
  async listResourcesWithOptions(projectName: string, request: $_model.ListResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.marker)) {
      query["marker"] = request.marker;
    }

    if (!$dara.isNull(request.maxItem)) {
      query["maxItem"] = request.maxItem;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.schemaName)) {
      query["schemaName"] = request.schemaName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResources",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/resources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListResourcesResponse({}));
  }

  /**
   * @param request - ListResourcesRequest
   * @returns ListResourcesResponse
   */
  async listResources(projectName: string, request: $_model.ListResourcesRequest): Promise<$_model.ListResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourcesWithOptions(projectName, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRolesResponse
   */
  async listRolesWithOptions(projectName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRolesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRoles",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/roles`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRolesResponse>(await this.callApi(params, req, runtime), new $_model.ListRolesResponse({}));
  }

  /**
   * @returns ListRolesResponse
   */
  async listRoles(projectName: string): Promise<$_model.ListRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRolesWithOptions(projectName, headers, runtime);
  }

  /**
   * @param tmpReq - ListStoragePartitionsInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStoragePartitionsInfoResponse
   */
  async listStoragePartitionsInfoWithOptions(project: string, table: string, tmpReq: $_model.ListStoragePartitionsInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListStoragePartitionsInfoResponse> {
    tmpReq.validate();
    let request = new $_model.ListStoragePartitionsInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.types)) {
      request.typesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.types, "types", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ascOrder)) {
      query["ascOrder"] = request.ascOrder;
    }

    if (!$dara.isNull(request.date)) {
      query["date"] = request.date;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["orderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.partitionPrefix)) {
      query["partitionPrefix"] = request.partitionPrefix;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.schema)) {
      query["schema"] = request.schema;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.typesShrink)) {
      query["types"] = request.typesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListStoragePartitionsInfo",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/observations/analysis/storage/projects/${$dara.URL.percentEncode(project)}/tables/${$dara.URL.percentEncode(table)}/partitionsInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListStoragePartitionsInfoResponse>(await this.callApi(params, req, runtime), new $_model.ListStoragePartitionsInfoResponse({}));
  }

  /**
   * @param request - ListStoragePartitionsInfoRequest
   * @returns ListStoragePartitionsInfoResponse
   */
  async listStoragePartitionsInfo(project: string, table: string, request: $_model.ListStoragePartitionsInfoRequest): Promise<$_model.ListStoragePartitionsInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listStoragePartitionsInfoWithOptions(project, table, request, headers, runtime);
  }

  /**
   * Retrieves the storage details of projects.
   * 
   * @param request - ListStorageProjectsInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStorageProjectsInfoResponse
   */
  async listStorageProjectsInfoWithOptions(request: $_model.ListStorageProjectsInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListStorageProjectsInfoResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ascOrder)) {
      query["ascOrder"] = request.ascOrder;
    }

    if (!$dara.isNull(request.date)) {
      query["date"] = request.date;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["orderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectPrefix)) {
      query["projectPrefix"] = request.projectPrefix;
    }

    if (!$dara.isNull(request.recentDays)) {
      query["recentDays"] = request.recentDays;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListStorageProjectsInfo",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/observations/analysis/storage/projectsInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListStorageProjectsInfoResponse>(await this.callApi(params, req, runtime), new $_model.ListStorageProjectsInfoResponse({}));
  }

  /**
   * Retrieves the storage details of projects.
   * 
   * @param request - ListStorageProjectsInfoRequest
   * @returns ListStorageProjectsInfoResponse
   */
  async listStorageProjectsInfo(request: $_model.ListStorageProjectsInfoRequest): Promise<$_model.ListStorageProjectsInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listStorageProjectsInfoWithOptions(request, headers, runtime);
  }

  /**
   * @param tmpReq - ListStorageTablesInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStorageTablesInfoResponse
   */
  async listStorageTablesInfoWithOptions(project: string, tmpReq: $_model.ListStorageTablesInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListStorageTablesInfoResponse> {
    tmpReq.validate();
    let request = new $_model.ListStorageTablesInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.types)) {
      request.typesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.types, "types", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ascOrder)) {
      query["ascOrder"] = request.ascOrder;
    }

    if (!$dara.isNull(request.date)) {
      query["date"] = request.date;
    }

    if (!$dara.isNull(request.orderColumn)) {
      query["orderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.recentDays)) {
      query["recentDays"] = request.recentDays;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.schema)) {
      query["schema"] = request.schema;
    }

    if (!$dara.isNull(request.tablePrefix)) {
      query["tablePrefix"] = request.tablePrefix;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.typesShrink)) {
      query["types"] = request.typesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListStorageTablesInfo",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/observations/analysis/storage/projects/${$dara.URL.percentEncode(project)}/tablesInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListStorageTablesInfoResponse>(await this.callApi(params, req, runtime), new $_model.ListStorageTablesInfoResponse({}));
  }

  /**
   * @param request - ListStorageTablesInfoRequest
   * @returns ListStorageTablesInfoResponse
   */
  async listStorageTablesInfo(project: string, request: $_model.ListStorageTablesInfoRequest): Promise<$_model.ListStorageTablesInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listStorageTablesInfoWithOptions(project, request, headers, runtime);
  }

  /**
   * @param request - ListTablesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTablesResponse
   */
  async listTablesWithOptions(projectName: string, request: $_model.ListTablesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTablesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.marker)) {
      query["marker"] = request.marker;
    }

    if (!$dara.isNull(request.maxItem)) {
      query["maxItem"] = request.maxItem;
    }

    if (!$dara.isNull(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    if (!$dara.isNull(request.schemaName)) {
      query["schemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTables",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/tables`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTablesResponse>(await this.callApi(params, req, runtime), new $_model.ListTablesResponse({}));
  }

  /**
   * @param request - ListTablesRequest
   * @returns ListTablesResponse
   */
  async listTables(projectName: string, request: $_model.ListTablesRequest): Promise<$_model.ListTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTablesWithOptions(projectName, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTunnelQuotaTimerResponse
   */
  async listTunnelQuotaTimerWithOptions(nickname: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTunnelQuotaTimerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTunnelQuotaTimer",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/tunnel/${$dara.URL.percentEncode(nickname)}/timers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTunnelQuotaTimerResponse>(await this.callApi(params, req, runtime), new $_model.ListTunnelQuotaTimerResponse({}));
  }

  /**
   * @returns ListTunnelQuotaTimerResponse
   */
  async listTunnelQuotaTimer(nickname: string): Promise<$_model.ListTunnelQuotaTimerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTunnelQuotaTimerWithOptions(nickname, headers, runtime);
  }

  /**
   * @param request - ListUsersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
   */
  async listUsersWithOptions(request: $_model.ListUsersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsers",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/users`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUsersResponse>(await this.callApi(params, req, runtime), new $_model.ListUsersResponse({}));
  }

  /**
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: $_model.ListUsersRequest): Promise<$_model.ListUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUsersWithOptions(request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersByRoleResponse
   */
  async listUsersByRoleWithOptions(projectName: string, roleName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersByRoleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsersByRole",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/roles/${$dara.URL.percentEncode(roleName)}/users`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUsersByRoleResponse>(await this.callApi(params, req, runtime), new $_model.ListUsersByRoleResponse({}));
  }

  /**
   * @returns ListUsersByRoleResponse
   */
  async listUsersByRole(projectName: string, roleName: string): Promise<$_model.ListUsersByRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUsersByRoleWithOptions(projectName, roleName, headers, runtime);
  }

  /**
   * @param request - QueryQuotaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryQuotaResponse
   */
  async queryQuotaWithOptions(nickname: string, request: $_model.QueryQuotaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryQuotaResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.akProven)) {
      query["AkProven"] = request.akProven;
    }

    if (!$dara.isNull(request.mock)) {
      query["mock"] = request.mock;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryQuota",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/query`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryQuotaResponse>(await this.callApi(params, req, runtime), new $_model.QueryQuotaResponse({}));
  }

  /**
   * @param request - QueryQuotaRequest
   * @returns QueryQuotaResponse
   */
  async queryQuota(nickname: string, request: $_model.QueryQuotaRequest): Promise<$_model.QueryQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryQuotaWithOptions(nickname, request, headers, runtime);
  }

  /**
   * Queries the time series data of resource consumption for a quota.
   * 
   * @param request - QueryQuotaMetricRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryQuotaMetricResponse
   */
  async queryQuotaMetricWithOptions(metric: string, request: $_model.QueryQuotaMetricRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryQuotaMetricResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.strategy)) {
      query["strategy"] = request.strategy;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.interval)) {
      body["interval"] = request.interval;
    }

    if (!$dara.isNull(request.nickname)) {
      body["nickname"] = request.nickname;
    }

    if (!$dara.isNull(request.subMetric)) {
      body["subMetric"] = request.subMetric;
    }

    if (!$dara.isNull(request.subQuotaNickname)) {
      body["subQuotaNickname"] = request.subQuotaNickname;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryQuotaMetric",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/observations/quota/${$dara.URL.percentEncode(metric)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryQuotaMetricResponse>(await this.callApi(params, req, runtime), new $_model.QueryQuotaMetricResponse({}));
  }

  /**
   * Queries the time series data of resource consumption for a quota.
   * 
   * @param request - QueryQuotaMetricRequest
   * @returns QueryQuotaMetricResponse
   */
  async queryQuotaMetric(metric: string, request: $_model.QueryQuotaMetricRequest): Promise<$_model.QueryQuotaMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryQuotaMetricWithOptions(metric, request, headers, runtime);
  }

  /**
   * Queries time-series metrics of data storage.
   * 
   * @param request - QueryStorageMetricRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryStorageMetricResponse
   */
  async queryStorageMetricWithOptions(metric: string, request: $_model.QueryStorageMetricRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryStorageMetricResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectList)) {
      body["projectList"] = request.projectList;
    }

    if (!$dara.isNull(request.typeList)) {
      body["typeList"] = request.typeList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryStorageMetric",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/observations/storage/${$dara.URL.percentEncode(metric)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryStorageMetricResponse>(await this.callApi(params, req, runtime), new $_model.QueryStorageMetricResponse({}));
  }

  /**
   * Queries time-series metrics of data storage.
   * 
   * @param request - QueryStorageMetricRequest
   * @returns QueryStorageMetricResponse
   */
  async queryStorageMetric(metric: string, request: $_model.QueryStorageMetricRequest): Promise<$_model.QueryStorageMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryStorageMetricWithOptions(metric, request, headers, runtime);
  }

  /**
   * Queries metric data for the Tunnel Data Transmission Service within a specified time range.
   * 
   * @remarks
   * - You can use this API to query various Tunnel metrics, such as slot usage (`slot_usage`), slot usage limit (`slot_max`), throughput (`throughput`), throughput rate (`throughput_speed`), and number of requests (`request`).
   * - The `startTime` and `endTime` parameters are required. They specify the start and end of the time range for the query. The values are UNIX timestamps in seconds.
   * - The `metric` parameter is also required. It specifies the type of metric to query.
   * - Depending on the value of `metric`, you may need to specify additional parameters for filtering to refine your query. These parameters include `quotaNickname`, `project`, `tableList`, `operationList`, `codeList`, `groupList`, and `topN`.
   * - For some `metric` values, you must specify other parameters. For example, if `groupList` contains `table` or `ip`, you must specify the `project` parameter and other required parameters. In this case, the system returns only the top N results.
   * - The `strategy` parameter defines the data aggregation logic. This logic is used when the automatic step size exceeds 60 seconds over a long time range. The default value is `max`.
   * - Ensure all parameters meet the requirements in this document to prevent request failures.
   * 
   * @param request - QueryTunnelMetricRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTunnelMetricResponse
   */
  async queryTunnelMetricWithOptions(metric: string, request: $_model.QueryTunnelMetricRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTunnelMetricResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.strategy)) {
      query["strategy"] = request.strategy;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.codeList)) {
      body["codeList"] = request.codeList;
    }

    if (!$dara.isNull(request.groupList)) {
      body["groupList"] = request.groupList;
    }

    if (!$dara.isNull(request.operationList)) {
      body["operationList"] = request.operationList;
    }

    if (!$dara.isNull(request.project)) {
      body["project"] = request.project;
    }

    if (!$dara.isNull(request.quotaNickname)) {
      body["quotaNickname"] = request.quotaNickname;
    }

    if (!$dara.isNull(request.tableList)) {
      body["tableList"] = request.tableList;
    }

    if (!$dara.isNull(request.topN)) {
      body["topN"] = request.topN;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTunnelMetric",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/observations/tunnel/${$dara.URL.percentEncode(metric)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTunnelMetricResponse>(await this.callApi(params, req, runtime), new $_model.QueryTunnelMetricResponse({}));
  }

  /**
   * Queries metric data for the Tunnel Data Transmission Service within a specified time range.
   * 
   * @remarks
   * - You can use this API to query various Tunnel metrics, such as slot usage (`slot_usage`), slot usage limit (`slot_max`), throughput (`throughput`), throughput rate (`throughput_speed`), and number of requests (`request`).
   * - The `startTime` and `endTime` parameters are required. They specify the start and end of the time range for the query. The values are UNIX timestamps in seconds.
   * - The `metric` parameter is also required. It specifies the type of metric to query.
   * - Depending on the value of `metric`, you may need to specify additional parameters for filtering to refine your query. These parameters include `quotaNickname`, `project`, `tableList`, `operationList`, `codeList`, `groupList`, and `topN`.
   * - For some `metric` values, you must specify other parameters. For example, if `groupList` contains `table` or `ip`, you must specify the `project` parameter and other required parameters. In this case, the system returns only the top N results.
   * - The `strategy` parameter defines the data aggregation logic. This logic is used when the automatic step size exceeds 60 seconds over a long time range. The default value is `max`.
   * - Ensure all parameters meet the requirements in this document to prevent request failures.
   * 
   * @param request - QueryTunnelMetricRequest
   * @returns QueryTunnelMetricResponse
   */
  async queryTunnelMetric(metric: string, request: $_model.QueryTunnelMetricRequest): Promise<$_model.QueryTunnelMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryTunnelMetricWithOptions(metric, request, headers, runtime);
  }

  /**
   * Queries detailed data for the Tunnel Data Transmission Service within a specified time range.
   * 
   * @remarks
   * - This operation queries various Tunnel metrics, such as slot usage details (`slot_usage_detail`), throughput details (`throughput_detail`), and a throughput summary (`throughput_summary`).
   * - The `quotaNickname` and `project` parameters cannot both be empty.
   * - If the groupList parameter contains `table` or `ip`, you must specify the `project` parameter. If the `groupList` parameter contains `ip`, you must also specify the `tableList` parameter.
   * - The orderColumn parameter can be set to `maxValue`, `minValue`, `avgValue`, or `sumValue`. The `sumValue` option is valid only for `throughput_summary`. By default, this parameter is empty, which means that no sorting is performed.
   * - The default value of the `ascOrder` parameter is `false`, which indicates that the results are sorted in descending order.
   * - The `limit` parameter specifies the maximum number of entries to return. The default value is 10, and the maximum value is 100.
   * 
   * @param request - QueryTunnelMetricDetailRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTunnelMetricDetailResponse
   */
  async queryTunnelMetricDetailWithOptions(metric: string, request: $_model.QueryTunnelMetricDetailRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTunnelMetricDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ascOrder)) {
      body["ascOrder"] = request.ascOrder;
    }

    if (!$dara.isNull(request.groupList)) {
      body["groupList"] = request.groupList;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.operationList)) {
      body["operationList"] = request.operationList;
    }

    if (!$dara.isNull(request.orderColumn)) {
      body["orderColumn"] = request.orderColumn;
    }

    if (!$dara.isNull(request.project)) {
      body["project"] = request.project;
    }

    if (!$dara.isNull(request.quotaNickname)) {
      body["quotaNickname"] = request.quotaNickname;
    }

    if (!$dara.isNull(request.tableList)) {
      body["tableList"] = request.tableList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTunnelMetricDetail",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/observations/tunnel/${$dara.URL.percentEncode(metric)}/detail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTunnelMetricDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryTunnelMetricDetailResponse({}));
  }

  /**
   * Queries detailed data for the Tunnel Data Transmission Service within a specified time range.
   * 
   * @remarks
   * - This operation queries various Tunnel metrics, such as slot usage details (`slot_usage_detail`), throughput details (`throughput_detail`), and a throughput summary (`throughput_summary`).
   * - The `quotaNickname` and `project` parameters cannot both be empty.
   * - If the groupList parameter contains `table` or `ip`, you must specify the `project` parameter. If the `groupList` parameter contains `ip`, you must also specify the `tableList` parameter.
   * - The orderColumn parameter can be set to `maxValue`, `minValue`, `avgValue`, or `sumValue`. The `sumValue` option is valid only for `throughput_summary`. By default, this parameter is empty, which means that no sorting is performed.
   * - The default value of the `ascOrder` parameter is `false`, which indicates that the results are sorted in descending order.
   * - The `limit` parameter specifies the maximum number of entries to return. The default value is 10, and the maximum value is 100.
   * 
   * @param request - QueryTunnelMetricDetailRequest
   * @returns QueryTunnelMetricDetailResponse
   */
  async queryTunnelMetricDetail(metric: string, request: $_model.QueryTunnelMetricDetailRequest): Promise<$_model.QueryTunnelMetricDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryTunnelMetricDetailWithOptions(metric, request, headers, runtime);
  }

  /**
   * Retries a data migration job.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryMmsJobResponse
   */
  async retryMmsJobWithOptions(sourceId: string, jobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RetryMmsJobResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RetryMmsJob",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/jobs/${$dara.URL.percentEncode(jobId)}/retry`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetryMmsJobResponse>(await this.callApi(params, req, runtime), new $_model.RetryMmsJobResponse({}));
  }

  /**
   * Retries a data migration job.
   * @returns RetryMmsJobResponse
   */
  async retryMmsJob(sourceId: string, jobId: string): Promise<$_model.RetryMmsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.retryMmsJobWithOptions(sourceId, jobId, headers, runtime);
  }

  /**
   * Starts a data migration job.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartMmsJobResponse
   */
  async startMmsJobWithOptions(sourceId: string, jobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartMmsJobResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StartMmsJob",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/jobs/${$dara.URL.percentEncode(jobId)}/start`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartMmsJobResponse>(await this.callApi(params, req, runtime), new $_model.StartMmsJobResponse({}));
  }

  /**
   * Starts a data migration job.
   * @returns StartMmsJobResponse
   */
  async startMmsJob(sourceId: string, jobId: string): Promise<$_model.StartMmsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startMmsJobWithOptions(sourceId, jobId, headers, runtime);
  }

  /**
   * Stops a data migration job.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopMmsJobResponse
   */
  async stopMmsJobWithOptions(sourceId: string, jobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopMmsJobResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopMmsJob",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}/jobs/${$dara.URL.percentEncode(jobId)}/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopMmsJobResponse>(await this.callApi(params, req, runtime), new $_model.StopMmsJobResponse({}));
  }

  /**
   * Stops a data migration job.
   * @returns StopMmsJobResponse
   */
  async stopMmsJob(sourceId: string, jobId: string): Promise<$_model.StopMmsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopMmsJobWithOptions(sourceId, jobId, headers, runtime);
  }

  /**
   * Retrieves the storage information for each category or project on a specified date.
   * 
   * @param request - SumStorageMetricsByDateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SumStorageMetricsByDateResponse
   */
  async sumStorageMetricsByDateWithOptions(request: $_model.SumStorageMetricsByDateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SumStorageMetricsByDateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endDate)) {
      body["endDate"] = request.endDate;
    }

    if (!$dara.isNull(request.projectNames)) {
      body["projectNames"] = request.projectNames;
    }

    if (!$dara.isNull(request.region)) {
      body["region"] = request.region;
    }

    if (!$dara.isNull(request.startDate)) {
      body["startDate"] = request.startDate;
    }

    if (!$dara.isNull(request.statsType)) {
      body["statsType"] = request.statsType;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SumStorageMetricsByDate",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/storageMetrics/sumByDate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SumStorageMetricsByDateResponse>(await this.callApi(params, req, runtime), new $_model.SumStorageMetricsByDateResponse({}));
  }

  /**
   * Retrieves the storage information for each category or project on a specified date.
   * 
   * @param request - SumStorageMetricsByDateRequest
   * @returns SumStorageMetricsByDateResponse
   */
  async sumStorageMetricsByDate(request: $_model.SumStorageMetricsByDateRequest): Promise<$_model.SumStorageMetricsByDateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sumStorageMetricsByDateWithOptions(request, headers, runtime);
  }

  /**
   * @param request - UpdateComputeQuotaPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateComputeQuotaPlanResponse
   */
  async updateComputeQuotaPlanWithOptions(nickname: string, request: $_model.UpdateComputeQuotaPlanRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateComputeQuotaPlanResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.quota)) {
      body["quota"] = request.quota;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateComputeQuotaPlan",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/computeQuotaPlan`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateComputeQuotaPlanResponse>(await this.callApi(params, req, runtime), new $_model.UpdateComputeQuotaPlanResponse({}));
  }

  /**
   * @param request - UpdateComputeQuotaPlanRequest
   * @returns UpdateComputeQuotaPlanResponse
   */
  async updateComputeQuotaPlan(nickname: string, request: $_model.UpdateComputeQuotaPlanRequest): Promise<$_model.UpdateComputeQuotaPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateComputeQuotaPlanWithOptions(nickname, request, headers, runtime);
  }

  /**
   * Updates the time-based schedule for a computing quota.
   * 
   * @remarks
   * Before you call this operation, ensure that you understand the <props="china">[billing methods and pricing](https://help.aliyun.com/zh/maxcompute/product-overview/computing-pricing-1)<props="intl">[billing methods and pricing](https://www.alibabacloud.com/help/maxcompute/product-overview/computing-pricing-1) of reserved compute units (CUs) in MaxCompute.
   * 
   * @param request - UpdateComputeQuotaScheduleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateComputeQuotaScheduleResponse
   */
  async updateComputeQuotaScheduleWithOptions(nickname: string, request: $_model.UpdateComputeQuotaScheduleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateComputeQuotaScheduleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.scheduleTimezone)) {
      query["scheduleTimezone"] = request.scheduleTimezone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.toArray(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateComputeQuotaSchedule",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/computeQuotaSchedule`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateComputeQuotaScheduleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateComputeQuotaScheduleResponse({}));
  }

  /**
   * Updates the time-based schedule for a computing quota.
   * 
   * @remarks
   * Before you call this operation, ensure that you understand the <props="china">[billing methods and pricing](https://help.aliyun.com/zh/maxcompute/product-overview/computing-pricing-1)<props="intl">[billing methods and pricing](https://www.alibabacloud.com/help/maxcompute/product-overview/computing-pricing-1) of reserved compute units (CUs) in MaxCompute.
   * 
   * @param request - UpdateComputeQuotaScheduleRequest
   * @returns UpdateComputeQuotaScheduleResponse
   */
  async updateComputeQuotaSchedule(nickname: string, request: $_model.UpdateComputeQuotaScheduleRequest): Promise<$_model.UpdateComputeQuotaScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateComputeQuotaScheduleWithOptions(nickname, request, headers, runtime);
  }

  /**
   * @param request - UpdateComputeSubQuotaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateComputeSubQuotaResponse
   */
  async updateComputeSubQuotaWithOptions(nickname: string, request: $_model.UpdateComputeSubQuotaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateComputeSubQuotaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.subQuotaInfoList)) {
      body["subQuotaInfoList"] = request.subQuotaInfoList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateComputeSubQuota",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/computeSubQuota`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateComputeSubQuotaResponse>(await this.callApi(params, req, runtime), new $_model.UpdateComputeSubQuotaResponse({}));
  }

  /**
   * @param request - UpdateComputeSubQuotaRequest
   * @returns UpdateComputeSubQuotaResponse
   */
  async updateComputeSubQuota(nickname: string, request: $_model.UpdateComputeSubQuotaRequest): Promise<$_model.UpdateComputeSubQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateComputeSubQuotaWithOptions(nickname, request, headers, runtime);
  }

  /**
   * Refreshes the metadata of a MaxCompute Migration Assist (MMA) data source.
   * 
   * @param request - UpdateMmsDataSourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMmsDataSourceResponse
   */
  async updateMmsDataSourceWithOptions(sourceId: string, request: $_model.UpdateMmsDataSourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMmsDataSourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.action)) {
      body["action"] = request.action;
    }

    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.test)) {
      body["test"] = request.test;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMmsDataSource",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/mms/datasources/${$dara.URL.percentEncode(sourceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMmsDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMmsDataSourceResponse({}));
  }

  /**
   * Refreshes the metadata of a MaxCompute Migration Assist (MMA) data source.
   * 
   * @param request - UpdateMmsDataSourceRequest
   * @returns UpdateMmsDataSourceResponse
   */
  async updateMmsDataSource(sourceId: string, request: $_model.UpdateMmsDataSourceRequest): Promise<$_model.UpdateMmsDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMmsDataSourceWithOptions(sourceId, request, headers, runtime);
  }

  /**
   * @param request - UpdatePackageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePackageResponse
   */
  async updatePackageWithOptions(projectName: string, packageName: string, request: $_model.UpdatePackageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePackageResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePackage",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/packages/${$dara.URL.percentEncode(packageName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePackageResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePackageResponse({}));
  }

  /**
   * @param request - UpdatePackageRequest
   * @returns UpdatePackageResponse
   */
  async updatePackage(projectName: string, packageName: string, request: $_model.UpdatePackageRequest): Promise<$_model.UpdatePackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePackageWithOptions(projectName, packageName, request, headers, runtime);
  }

  /**
   * Modifies the basic information of a project.
   * 
   * @param request - UpdateProjectBasicMetaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectBasicMetaResponse
   */
  async updateProjectBasicMetaWithOptions(projectName: string, request: $_model.UpdateProjectBasicMetaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProjectBasicMetaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.comment)) {
      body["comment"] = request.comment;
    }

    if (!$dara.isNull(request.properties)) {
      body["properties"] = request.properties;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProjectBasicMeta",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/meta`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProjectBasicMetaResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProjectBasicMetaResponse({}));
  }

  /**
   * Modifies the basic information of a project.
   * 
   * @param request - UpdateProjectBasicMetaRequest
   * @returns UpdateProjectBasicMetaResponse
   */
  async updateProjectBasicMeta(projectName: string, request: $_model.UpdateProjectBasicMetaRequest): Promise<$_model.UpdateProjectBasicMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProjectBasicMetaWithOptions(projectName, request, headers, runtime);
  }

  /**
   * @param request - UpdateProjectDefaultQuotaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectDefaultQuotaResponse
   */
  async updateProjectDefaultQuotaWithOptions(projectName: string, request: $_model.UpdateProjectDefaultQuotaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProjectDefaultQuotaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.quota)) {
      body["quota"] = request.quota;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProjectDefaultQuota",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/quota`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProjectDefaultQuotaResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProjectDefaultQuotaResponse({}));
  }

  /**
   * @param request - UpdateProjectDefaultQuotaRequest
   * @returns UpdateProjectDefaultQuotaResponse
   */
  async updateProjectDefaultQuota(projectName: string, request: $_model.UpdateProjectDefaultQuotaRequest): Promise<$_model.UpdateProjectDefaultQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProjectDefaultQuotaWithOptions(projectName, request, headers, runtime);
  }

  /**
   * @param request - UpdateProjectIpWhiteListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectIpWhiteListResponse
   */
  async updateProjectIpWhiteListWithOptions(projectName: string, request: $_model.UpdateProjectIpWhiteListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProjectIpWhiteListResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProjectIpWhiteList",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/ipWhiteList`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProjectIpWhiteListResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProjectIpWhiteListResponse({}));
  }

  /**
   * @param request - UpdateProjectIpWhiteListRequest
   * @returns UpdateProjectIpWhiteListResponse
   */
  async updateProjectIpWhiteList(projectName: string, request: $_model.UpdateProjectIpWhiteListRequest): Promise<$_model.UpdateProjectIpWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProjectIpWhiteListWithOptions(projectName, request, headers, runtime);
  }

  /**
   * Upgrades a project\\"s Layer 2 model to a Layer 3 model.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectModelTierResponse
   */
  async updateProjectModelTierWithOptions(projectName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProjectModelTierResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProjectModelTier",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/modelTier`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProjectModelTierResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProjectModelTierResponse({}));
  }

  /**
   * Upgrades a project\\"s Layer 2 model to a Layer 3 model.
   * @returns UpdateProjectModelTierResponse
   */
  async updateProjectModelTier(projectName: string): Promise<$_model.UpdateProjectModelTierResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProjectModelTierWithOptions(projectName, headers, runtime);
  }

  /**
   * @param request - UpdateQuotaPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateQuotaPlanResponse
   */
  async updateQuotaPlanWithOptions(nickname: string, planName: string, request: $_model.UpdateQuotaPlanRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateQuotaPlanResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateQuotaPlan",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/plans/${$dara.URL.percentEncode(planName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateQuotaPlanResponse>(await this.callApi(params, req, runtime), new $_model.UpdateQuotaPlanResponse({}));
  }

  /**
   * @param request - UpdateQuotaPlanRequest
   * @returns UpdateQuotaPlanResponse
   */
  async updateQuotaPlan(nickname: string, planName: string, request: $_model.UpdateQuotaPlanRequest): Promise<$_model.UpdateQuotaPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateQuotaPlanWithOptions(nickname, planName, request, headers, runtime);
  }

  /**
   * @param request - UpdateQuotaScheduleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateQuotaScheduleResponse
   */
  async updateQuotaScheduleWithOptions(nickname: string, request: $_model.UpdateQuotaScheduleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateQuotaScheduleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateQuotaSchedule",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(nickname)}/schedule`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateQuotaScheduleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateQuotaScheduleResponse({}));
  }

  /**
   * @param request - UpdateQuotaScheduleRequest
   * @returns UpdateQuotaScheduleResponse
   */
  async updateQuotaSchedule(nickname: string, request: $_model.UpdateQuotaScheduleRequest): Promise<$_model.UpdateQuotaScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateQuotaScheduleWithOptions(nickname, request, headers, runtime);
  }

  /**
   * Updates the time-based auto-scaling configuration for an exclusive resource group for Data Transmission Service (Tunnel Quota).
   * 
   * @remarks
   * Before you call this operation, ensure that you fully understand the <props="china">[billing methods and pricing](https://help.aliyun.com/zh/maxcompute/product-overview/data-transfer-fees-hourly-billing)<props="intl">[billing methods and pricing](https://www.alibabacloud.com/help/maxcompute/product-overview/data-transfer-fees-hourly-billing) for exclusive Data Transmission Service resource groups and elastic reserved computing resources.
   * 
   * @param request - UpdateTunnelQuotaTimerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTunnelQuotaTimerResponse
   */
  async updateTunnelQuotaTimerWithOptions(nickname: string, request: $_model.UpdateTunnelQuotaTimerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTunnelQuotaTimerResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.timezone)) {
      query["timezone"] = request.timezone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.toArray(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTunnelQuotaTimer",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/tunnel/${$dara.URL.percentEncode(nickname)}/timers`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTunnelQuotaTimerResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTunnelQuotaTimerResponse({}));
  }

  /**
   * Updates the time-based auto-scaling configuration for an exclusive resource group for Data Transmission Service (Tunnel Quota).
   * 
   * @remarks
   * Before you call this operation, ensure that you fully understand the <props="china">[billing methods and pricing](https://help.aliyun.com/zh/maxcompute/product-overview/data-transfer-fees-hourly-billing)<props="intl">[billing methods and pricing](https://www.alibabacloud.com/help/maxcompute/product-overview/data-transfer-fees-hourly-billing) for exclusive Data Transmission Service resource groups and elastic reserved computing resources.
   * 
   * @param request - UpdateTunnelQuotaTimerRequest
   * @returns UpdateTunnelQuotaTimerResponse
   */
  async updateTunnelQuotaTimer(nickname: string, request: $_model.UpdateTunnelQuotaTimerRequest): Promise<$_model.UpdateTunnelQuotaTimerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTunnelQuotaTimerWithOptions(nickname, request, headers, runtime);
  }

  /**
   * Adds or removes users from a project role.
   * 
   * @param request - UpdateUsersToRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUsersToRoleResponse
   */
  async updateUsersToRoleWithOptions(projectName: string, roleName: string, request: $_model.UpdateUsersToRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUsersToRoleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.add)) {
      body["add"] = request.add;
    }

    if (!$dara.isNull(request.remove)) {
      body["remove"] = request.remove;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUsersToRole",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${$dara.URL.percentEncode(projectName)}/roles/${$dara.URL.percentEncode(roleName)}/users`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUsersToRoleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUsersToRoleResponse({}));
  }

  /**
   * Adds or removes users from a project role.
   * 
   * @param request - UpdateUsersToRoleRequest
   * @returns UpdateUsersToRoleResponse
   */
  async updateUsersToRole(projectName: string, roleName: string, request: $_model.UpdateUsersToRoleRequest): Promise<$_model.UpdateUsersToRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateUsersToRoleWithOptions(projectName, roleName, request, headers, runtime);
  }

}
