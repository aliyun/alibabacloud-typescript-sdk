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
   * Activate a Quota Plan Immediately.
   * 
   * @remarks
   * Please ensure that before using this interface, you have fully understood the <props="china">[Pricing and Charges](https://help.aliyun.com/zh/maxcompute/product-overview/computing-pricing-1)
   * <props="intl">[Pricing and Charges](https://www.alibabacloud.com/help/maxcompute/product-overview/computing-pricing-1) of MaxCompute Elastic Reserved CU.
   * 
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
   * Activate a Quota Plan Immediately.
   * 
   * @remarks
   * Please ensure that before using this interface, you have fully understood the <props="china">[Pricing and Charges](https://help.aliyun.com/zh/maxcompute/product-overview/computing-pricing-1)
   * <props="intl">[Pricing and Charges](https://www.alibabacloud.com/help/maxcompute/product-overview/computing-pricing-1) of MaxCompute Elastic Reserved CU.
   * @returns ApplyComputeQuotaPlanResponse
   */
  async applyComputeQuotaPlan(nickname: string, planName: string): Promise<$_model.ApplyComputeQuotaPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.applyComputeQuotaPlanWithOptions(nickname, planName, headers, runtime);
  }

  /**
   * Create MaxCompute ComputeQuotaPlan.
   * 
   * @remarks
   * Please ensure that before using this interface, you have fully understood the <props="china">[Pricing and Charges](https://help.aliyun.com/zh/maxcompute/product-overview/computing-pricing-1)
   * <props="intl">[Pricing and Charges](https://www.alibabacloud.com/help/maxcompute/product-overview/computing-pricing-1) of MaxCompute Elastic Reserved CU.
   * 
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
   * Create MaxCompute ComputeQuotaPlan.
   * 
   * @remarks
   * Please ensure that before using this interface, you have fully understood the <props="china">[Pricing and Charges](https://help.aliyun.com/zh/maxcompute/product-overview/computing-pricing-1)
   * <props="intl">[Pricing and Charges](https://www.alibabacloud.com/help/maxcompute/product-overview/computing-pricing-1) of MaxCompute Elastic Reserved CU.
   * 
   * @param request - CreateComputeQuotaPlanRequest
   * @returns CreateComputeQuotaPlanResponse
   */
  async createComputeQuotaPlan(nickname: string, request: $_model.CreateComputeQuotaPlanRequest): Promise<$_model.CreateComputeQuotaPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createComputeQuotaPlanWithOptions(nickname, request, headers, runtime);
  }

  /**
   * CreateMmsDataSource
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
   * CreateMmsDataSource
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
   * 创建数据源的更新元数据操作
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMmsFetchMetadataJobResponse
   */
  async createMmsFetchMetadataJobWithOptions(sourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMmsFetchMetadataJobResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
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
   * 创建数据源的更新元数据操作
   * @returns CreateMmsFetchMetadataJobResponse
   */
  async createMmsFetchMetadataJob(sourceId: string): Promise<$_model.CreateMmsFetchMetadataJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMmsFetchMetadataJobWithOptions(sourceId, headers, runtime);
  }

  /**
   * 创建迁移任务
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
   * 创建迁移任务
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
   * Creates a package.
   * 
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
   * Creates a package.
   * 
   * @param request - CreatePackageRequest
   * @returns CreatePackageResponse
   */
  async createPackage(projectName: string, request: $_model.CreatePackageRequest): Promise<$_model.CreatePackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPackageWithOptions(projectName, request, headers, runtime);
  }

  /**
   * Creates a MaxCompute project.
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
   * Creates a MaxCompute project.
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
   * Creates a quota plan.
   * 
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
   * Creates a quota plan.
   * 
   * @param request - CreateQuotaPlanRequest
   * @returns CreateQuotaPlanResponse
   */
  async createQuotaPlan(nickname: string, request: $_model.CreateQuotaPlanRequest): Promise<$_model.CreateQuotaPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createQuotaPlanWithOptions(nickname, request, headers, runtime);
  }

  /**
   * Creates a role at the MaxCompute project level.
   * 
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
   * Creates a role at the MaxCompute project level.
   * 
   * @param request - CreateRoleRequest
   * @returns CreateRoleResponse
   */
  async createRole(projectName: string, request: $_model.CreateRoleRequest): Promise<$_model.CreateRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRoleWithOptions(projectName, request, headers, runtime);
  }

  /**
   * Delete MaxCompute compute quota plan.
   * 
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
   * Delete MaxCompute compute quota plan.
   * @returns DeleteComputeQuotaPlanResponse
   */
  async deleteComputeQuotaPlan(nickname: string, planName: string): Promise<$_model.DeleteComputeQuotaPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteComputeQuotaPlanWithOptions(nickname, planName, headers, runtime);
  }

  /**
   * 删除数据源
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
   * 删除数据源
   * @returns DeleteMmsDataSourceResponse
   */
  async deleteMmsDataSource(sourceId: string): Promise<$_model.DeleteMmsDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMmsDataSourceWithOptions(sourceId, headers, runtime);
  }

  /**
   * 删除迁移计划
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
   * 删除迁移计划
   * @returns DeleteMmsJobResponse
   */
  async deleteMmsJob(sourceId: string, jobId: string): Promise<$_model.DeleteMmsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMmsJobWithOptions(sourceId, jobId, headers, runtime);
  }

  /**
   * Deletes a quota plan.
   * 
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
   * Deletes a quota plan.
   * 
   * @param request - DeleteQuotaPlanRequest
   * @returns DeleteQuotaPlanResponse
   */
  async deleteQuotaPlan(nickname: string, planName: string, request: $_model.DeleteQuotaPlanRequest): Promise<$_model.DeleteQuotaPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteQuotaPlanWithOptions(nickname, planName, request, headers, runtime);
  }

  /**
   * GetComputeEffectivePlan.
   * 
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
   * GetComputeEffectivePlan.
   * @returns GetComputeEffectivePlanResponse
   */
  async getComputeEffectivePlan(nickname: string): Promise<$_model.GetComputeEffectivePlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getComputeEffectivePlanWithOptions(nickname, headers, runtime);
  }

  /**
   * Get detailed information of a single compute quota plan.
   * 
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
   * Get detailed information of a single compute quota plan.
   * @returns GetComputeQuotaPlanResponse
   */
  async getComputeQuotaPlan(nickname: string, planName: string): Promise<$_model.GetComputeQuotaPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getComputeQuotaPlanWithOptions(nickname, planName, headers, runtime);
  }

  /**
   * Displays the time-specific configuration of compute quota.
   * 
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
   * Displays the time-specific configuration of compute quota.
   * 
   * @param request - GetComputeQuotaScheduleRequest
   * @returns GetComputeQuotaScheduleResponse
   */
  async getComputeQuotaSchedule(nickname: string, request: $_model.GetComputeQuotaScheduleRequest): Promise<$_model.GetComputeQuotaScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getComputeQuotaScheduleWithOptions(nickname, request, headers, runtime);
  }

  /**
   * Queries the basic information about a job.
   * 
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
   * Queries the basic information about a job.
   * @returns GetJobInfoResponse
   */
  async getJobInfo(instanceId: string): Promise<$_model.GetJobInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobInfoWithOptions(instanceId, headers, runtime);
  }

  /**
   * Performs statistics on all jobs that are complete on a specified day and obtains the total resource usage of each job executor on a daily basis.
   * 
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
   * Performs statistics on all jobs that are complete on a specified day and obtains the total resource usage of each job executor on a daily basis.
   * 
   * @param request - GetJobResourceUsageRequest
   * @returns GetJobResourceUsageResponse
   */
  async getJobResourceUsage(request: $_model.GetJobResourceUsageRequest): Promise<$_model.GetJobResourceUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobResourceUsageWithOptions(request, headers, runtime);
  }

  /**
   * GetMmsAsyncTask
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
   * GetMmsAsyncTask
   * @returns GetMmsAsyncTaskResponse
   */
  async getMmsAsyncTask(sourceId: string, asyncTaskId: string): Promise<$_model.GetMmsAsyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMmsAsyncTaskWithOptions(sourceId, asyncTaskId, headers, runtime);
  }

  /**
   * 获取数据源
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
   * 获取数据源
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
   * GetMmsDb
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
   * GetMmsDb
   * @returns GetMmsDbResponse
   */
  async getMmsDb(sourceId: string, dbId: string): Promise<$_model.GetMmsDbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMmsDbWithOptions(sourceId, dbId, headers, runtime);
  }

  /**
   * GetMmsFetchMetadataJob
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
   * GetMmsFetchMetadataJob
   * @returns GetMmsFetchMetadataJobResponse
   */
  async getMmsFetchMetadataJob(sourceId: string, scanId: string): Promise<$_model.GetMmsFetchMetadataJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMmsFetchMetadataJobWithOptions(sourceId, scanId, headers, runtime);
  }

  /**
   * 获取迁移计划
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
   * 获取迁移计划
   * @returns GetMmsJobResponse
   */
  async getMmsJob(sourceId: string, jobId: string): Promise<$_model.GetMmsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMmsJobWithOptions(sourceId, jobId, headers, runtime);
  }

  /**
   * GetMmsPartition
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
   * GetMmsPartition
   * @returns GetMmsPartitionResponse
   */
  async getMmsPartition(sourceId: string, partitionId: string): Promise<$_model.GetMmsPartitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMmsPartitionWithOptions(sourceId, partitionId, headers, runtime);
  }

  /**
   * GetMmsTable
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
   * GetMmsTable
   * @returns GetMmsTableResponse
   */
  async getMmsTable(sourceId: string, tableId: string): Promise<$_model.GetMmsTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMmsTableWithOptions(sourceId, tableId, headers, runtime);
  }

  /**
   * GetMmsTask
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
   * GetMmsTask
   * @returns GetMmsTaskResponse
   */
  async getMmsTask(sourceId: string, taskId: string): Promise<$_model.GetMmsTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMmsTaskWithOptions(sourceId, taskId, headers, runtime);
  }

  /**
   * Obtains the information about a package.
   * 
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
   * Obtains the information about a package.
   * 
   * @param request - GetPackageRequest
   * @returns GetPackageResponse
   */
  async getPackage(projectName: string, packageName: string, request: $_model.GetPackageRequest): Promise<$_model.GetPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPackageWithOptions(projectName, packageName, request, headers, runtime);
  }

  /**
   * Queries the information about a MaxCompute project.
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
   * Queries the information about a MaxCompute project.
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
   * Obtains the information about a specified level-1 quota.
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
   * Obtains the information about a specified level-1 quota.
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
   * Obtains the information of a quota plan.
   * 
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
   * Obtains the information of a quota plan.
   * 
   * @param request - GetQuotaPlanRequest
   * @returns GetQuotaPlanResponse
   */
  async getQuotaPlan(nickname: string, planName: string, request: $_model.GetQuotaPlanRequest): Promise<$_model.GetQuotaPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getQuotaPlanWithOptions(nickname, planName, request, headers, runtime);
  }

  /**
   * Obtains the scheduling plan for a quota plan.
   * 
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
   * Obtains the scheduling plan for a quota plan.
   * 
   * @param request - GetQuotaScheduleRequest
   * @returns GetQuotaScheduleResponse
   */
  async getQuotaSchedule(nickname: string, request: $_model.GetQuotaScheduleRequest): Promise<$_model.GetQuotaScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getQuotaScheduleWithOptions(nickname, request, headers, runtime);
  }

  /**
   * Queries quota resource consumption information.
   * 
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
   * Queries quota resource consumption information.
   * 
   * @param request - GetQuotaUsageRequest
   * @returns GetQuotaUsageResponse
   */
  async getQuotaUsage(nickname: string, request: $_model.GetQuotaUsageRequest): Promise<$_model.GetQuotaUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getQuotaUsageWithOptions(nickname, request, headers, runtime);
  }

  /**
   * Obtains the ACL-based permissions that is granted to a project-level role.
   * 
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
   * Obtains the ACL-based permissions that is granted to a project-level role.
   * @returns GetRoleAclResponse
   */
  async getRoleAcl(projectName: string, roleName: string): Promise<$_model.GetRoleAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRoleAclWithOptions(projectName, roleName, headers, runtime);
  }

  /**
   * Obtains ACL-based permissions on an object that are granted to a project-level role.
   * 
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
   * Obtains ACL-based permissions on an object that are granted to a project-level role.
   * 
   * @param request - GetRoleAclOnObjectRequest
   * @returns GetRoleAclOnObjectResponse
   */
  async getRoleAclOnObject(projectName: string, roleName: string, request: $_model.GetRoleAclOnObjectRequest): Promise<$_model.GetRoleAclOnObjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRoleAclOnObjectWithOptions(projectName, roleName, request, headers, runtime);
  }

  /**
   * Obtains the policy that is attached to a project-level role.
   * 
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
   * Obtains the policy that is attached to a project-level role.
   * @returns GetRolePolicyResponse
   */
  async getRolePolicy(projectName: string, roleName: string): Promise<$_model.GetRolePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRolePolicyWithOptions(projectName, roleName, headers, runtime);
  }

  /**
   * Obtains the running state data of jobs that are in the running state in a specified period of time.
   * 
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
   * Obtains the running state data of jobs that are in the running state in a specified period of time.
   * 
   * @param request - GetRunningJobsRequest
   * @returns GetRunningJobsResponse
   */
  async getRunningJobs(request: $_model.GetRunningJobsRequest): Promise<$_model.GetRunningJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRunningJobsWithOptions(request, headers, runtime);
  }

  /**
   * Views the information about MaxCompute internal tables, views, external tables, clustered tables, or transactional tables.
   * 
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
   * Views the information about MaxCompute internal tables, views, external tables, clustered tables, or transactional tables.
   * 
   * @param request - GetTableInfoRequest
   * @returns GetTableInfoResponse
   */
  async getTableInfo(projectName: string, tableName: string, request: $_model.GetTableInfoRequest): Promise<$_model.GetTableInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTableInfoWithOptions(projectName, tableName, request, headers, runtime);
  }

  /**
   * Obtains the trusted projects of the current project.
   * 
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
   * Obtains the trusted projects of the current project.
   * @returns GetTrustedProjectsResponse
   */
  async getTrustedProjects(projectName: string): Promise<$_model.GetTrustedProjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTrustedProjectsWithOptions(projectName, headers, runtime);
  }

  /**
   * Terminates a running job.
   * 
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
   * Terminates a running job.
   * 
   * @param request - KillJobsRequest
   * @returns KillJobsResponse
   */
  async killJobs(request: $_model.KillJobsRequest): Promise<$_model.KillJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.killJobsWithOptions(request, headers, runtime);
  }

  /**
   * Get compute usage of pay-as-you-go jobs.
   * 
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
   * Get compute usage of pay-as-you-go jobs.
   * 
   * @param request - ListComputeMetricsByInstanceRequest
   * @returns ListComputeMetricsByInstanceResponse
   */
  async listComputeMetricsByInstance(request: $_model.ListComputeMetricsByInstanceRequest): Promise<$_model.ListComputeMetricsByInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listComputeMetricsByInstanceWithOptions(request, headers, runtime);
  }

  /**
   * Get computeQuotaPlan list.
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
   * Get computeQuotaPlan list.
   * @returns ListComputeQuotaPlanResponse
   */
  async listComputeQuotaPlan(nickname: string): Promise<$_model.ListComputeQuotaPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listComputeQuotaPlanWithOptions(nickname, headers, runtime);
  }

  /**
   * Obtains functions in a MaxCompute project.
   * 
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
   * Obtains functions in a MaxCompute project.
   * 
   * @param request - ListFunctionsRequest
   * @returns ListFunctionsResponse
   */
  async listFunctions(projectName: string, request: $_model.ListFunctionsRequest): Promise<$_model.ListFunctionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFunctionsWithOptions(projectName, request, headers, runtime);
  }

  /**
   * Views a list of jobs.
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
   * Views a list of jobs.
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
   * Retrieve performance metrics for completed jobs.
   * 
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
   * Retrieve performance metrics for completed jobs.
   * 
   * @param request - ListJobMetricRequest
   * @returns ListJobMetricResponse
   */
  async listJobMetric(request: $_model.ListJobMetricRequest): Promise<$_model.ListJobMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJobMetricWithOptions(request, headers, runtime);
  }

  /**
   * Views a list of job snapshot data at a specific point in time.
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
   * Views a list of job snapshot data at a specific point in time.
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
   * ListMmsDataSources
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
   * ListMmsDataSources
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
   * 获取一个数据源内“库”列表
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
   * 获取一个数据源内“库”列表
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
   * ListMmsJobs
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
   * ListMmsJobs
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
   * 获取元数据-分区
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
   * 获取元数据-分区
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
   * ListMmsTables
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
   * ListMmsTables
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
   * ListMmsTaskLogs
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
   * ListMmsTaskLogs
   * @returns ListMmsTaskLogsResponse
   */
  async listMmsTaskLogs(sourceId: string, taskId: string): Promise<$_model.ListMmsTaskLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMmsTaskLogsWithOptions(sourceId, taskId, headers, runtime);
  }

  /**
   * ListMmsTasks
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
   * ListMmsTasks
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
   * Queries the packages in a MaxCompute project.
   * 
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
   * Queries the packages in a MaxCompute project.
   * @returns ListPackagesResponse
   */
  async listPackages(projectName: string): Promise<$_model.ListPackagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPackagesWithOptions(projectName, headers, runtime);
  }

  /**
   * Queries a list of users in a project.
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
   * Queries a list of users in a project.
   * @returns ListProjectUsersResponse
   */
  async listProjectUsers(projectName: string): Promise<$_model.ListProjectUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectUsersWithOptions(projectName, headers, runtime);
  }

  /**
   * Queries a list of MaxCompute projects.
   * 
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
   * Queries a list of MaxCompute projects.
   * 
   * @param request - ListProjectsRequest
   * @returns ListProjectsResponse
   */
  async listProjects(request: $_model.ListProjectsRequest): Promise<$_model.ListProjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectsWithOptions(request, headers, runtime);
  }

  /**
   * Queries quotas.
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
   * Queries quotas.
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
   * Obtains quota plans.
   * 
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
   * Obtains quota plans.
   * 
   * @param request - ListQuotasPlansRequest
   * @returns ListQuotasPlansResponse
   */
  async listQuotasPlans(nickname: string, request: $_model.ListQuotasPlansRequest): Promise<$_model.ListQuotasPlansResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQuotasPlansWithOptions(nickname, request, headers, runtime);
  }

  /**
   * Obtains resources in a MaxCompute project.
   * 
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
   * Obtains resources in a MaxCompute project.
   * 
   * @param request - ListResourcesRequest
   * @returns ListResourcesResponse
   */
  async listResources(projectName: string, request: $_model.ListResourcesRequest): Promise<$_model.ListResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourcesWithOptions(projectName, request, headers, runtime);
  }

  /**
   * Obtains MaxCompute project-level roles.
   * 
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
   * Obtains MaxCompute project-level roles.
   * @returns ListRolesResponse
   */
  async listRoles(projectName: string): Promise<$_model.ListRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRolesWithOptions(projectName, headers, runtime);
  }

  /**
   * Queries the storage details of a specific partition in a partitioned table in a MaxCompute project.
   * 
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
   * Queries the storage details of a specific partition in a partitioned table in a MaxCompute project.
   * 
   * @param request - ListStoragePartitionsInfoRequest
   * @returns ListStoragePartitionsInfoResponse
   */
  async listStoragePartitionsInfo(project: string, table: string, request: $_model.ListStoragePartitionsInfoRequest): Promise<$_model.ListStoragePartitionsInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listStoragePartitionsInfoWithOptions(project, table, request, headers, runtime);
  }

  /**
   * Queries the table storage details of a MaxCompute project.
   * 
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
   * Queries the table storage details of a MaxCompute project.
   * 
   * @param request - ListStorageTablesInfoRequest
   * @returns ListStorageTablesInfoResponse
   */
  async listStorageTablesInfo(project: string, request: $_model.ListStorageTablesInfoRequest): Promise<$_model.ListStorageTablesInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listStorageTablesInfoWithOptions(project, request, headers, runtime);
  }

  /**
   * Obtains tables in a MaxCompute project.
   * 
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
   * Obtains tables in a MaxCompute project.
   * 
   * @param request - ListTablesRequest
   * @returns ListTablesResponse
   */
  async listTables(projectName: string, request: $_model.ListTablesRequest): Promise<$_model.ListTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTablesWithOptions(projectName, request, headers, runtime);
  }

  /**
   * Displays the time-specific configuration of an exclusive resource group for Tunnel (referred to as Tunnel quota).
   * 
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
   * Displays the time-specific configuration of an exclusive resource group for Tunnel (referred to as Tunnel quota).
   * @returns ListTunnelQuotaTimerResponse
   */
  async listTunnelQuotaTimer(nickname: string): Promise<$_model.ListTunnelQuotaTimerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTunnelQuotaTimerWithOptions(nickname, headers, runtime);
  }

  /**
   * Queries a list of all users under a tenant.
   * 
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
   * Queries a list of all users under a tenant.
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: $_model.ListUsersRequest): Promise<$_model.ListUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUsersWithOptions(request, headers, runtime);
  }

  /**
   * Obtains information about the users who are assigned a project-level role.
   * 
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
   * Obtains information about the users who are assigned a project-level role.
   * @returns ListUsersByRoleResponse
   */
  async listUsersByRole(projectName: string, roleName: string): Promise<$_model.ListUsersByRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUsersByRoleWithOptions(projectName, roleName, headers, runtime);
  }

  /**
   * Queries the information about a specified level-1 quota group.
   * 
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
   * Queries the information about a specified level-1 quota group.
   * 
   * @param request - QueryQuotaRequest
   * @returns QueryQuotaResponse
   */
  async queryQuota(nickname: string, request: $_model.QueryQuotaRequest): Promise<$_model.QueryQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryQuotaWithOptions(nickname, request, headers, runtime);
  }

  /**
   * 查询tunnel资源使用信息
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
   * 查询tunnel资源使用信息
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
   * 查询tunnel资源使用详情
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
   * 查询tunnel资源使用详情
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
   * RetryMmsJob
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
   * RetryMmsJob
   * @returns RetryMmsJobResponse
   */
  async retryMmsJob(sourceId: string, jobId: string): Promise<$_model.RetryMmsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.retryMmsJobWithOptions(sourceId, jobId, headers, runtime);
  }

  /**
   * StartMmsJob
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
   * StartMmsJob
   * @returns StartMmsJobResponse
   */
  async startMmsJob(sourceId: string, jobId: string): Promise<$_model.StartMmsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startMmsJobWithOptions(sourceId, jobId, headers, runtime);
  }

  /**
   * StopMmsJob
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
   * StopMmsJob
   * @returns StopMmsJobResponse
   */
  async stopMmsJob(sourceId: string, jobId: string): Promise<$_model.StopMmsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopMmsJobWithOptions(sourceId, jobId, headers, runtime);
  }

  /**
   * Update the ComputeQuotaPlan.
   * 
   * @remarks
   * Please ensure that before using this interface, you have fully understood the <props="china">[Pricing and Charges](https://help.aliyun.com/zh/maxcompute/product-overview/computing-pricing-1)
   * <props="intl">[Pricing and Charges](https://www.alibabacloud.com/help/maxcompute/product-overview/computing-pricing-1) of MaxCompute Elastic Reserved CU.
   * 
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
   * Update the ComputeQuotaPlan.
   * 
   * @remarks
   * Please ensure that before using this interface, you have fully understood the <props="china">[Pricing and Charges](https://help.aliyun.com/zh/maxcompute/product-overview/computing-pricing-1)
   * <props="intl">[Pricing and Charges](https://www.alibabacloud.com/help/maxcompute/product-overview/computing-pricing-1) of MaxCompute Elastic Reserved CU.
   * 
   * @param request - UpdateComputeQuotaPlanRequest
   * @returns UpdateComputeQuotaPlanResponse
   */
  async updateComputeQuotaPlan(nickname: string, request: $_model.UpdateComputeQuotaPlanRequest): Promise<$_model.UpdateComputeQuotaPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateComputeQuotaPlanWithOptions(nickname, request, headers, runtime);
  }

  /**
   * Update the time-based plan for computing quota.
   * 
   * @remarks
   * Please ensure that before using this interface, you have fully understood the<props="china">[Pricing and Billing](https://help.aliyun.com/zh/maxcompute/product-overview/computing-pricing-1)
   * <props="intl">[Pricing and Billing](https://www.alibabacloud.com/help/maxcompute/product-overview/computing-pricing-1) of MaxCompute Elastic Reserved CU.
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
   * Update the time-based plan for computing quota.
   * 
   * @remarks
   * Please ensure that before using this interface, you have fully understood the<props="china">[Pricing and Billing](https://help.aliyun.com/zh/maxcompute/product-overview/computing-pricing-1)
   * <props="intl">[Pricing and Billing](https://www.alibabacloud.com/help/maxcompute/product-overview/computing-pricing-1) of MaxCompute Elastic Reserved CU.
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
   * Update the basic configuration of the calculation quota, including adding or deleting the sub quota, modifying the basic properties of the secondary quota, and the CU configuration of the effective quota plan.
   * 
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
   * Update the basic configuration of the calculation quota, including adding or deleting the sub quota, modifying the basic properties of the secondary quota, and the CU configuration of the effective quota plan.
   * 
   * @param request - UpdateComputeSubQuotaRequest
   * @returns UpdateComputeSubQuotaResponse
   */
  async updateComputeSubQuota(nickname: string, request: $_model.UpdateComputeSubQuotaRequest): Promise<$_model.UpdateComputeSubQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateComputeSubQuotaWithOptions(nickname, request, headers, runtime);
  }

  /**
   * 更新数据源配置、名称，启/停数据源实例
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
   * 更新数据源配置、名称，启/停数据源实例
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
   * Updates the objects in a package and projects in which the package can be installed.
   * 
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
   * Updates the objects in a package and projects in which the package can be installed.
   * 
   * @param request - UpdatePackageRequest
   * @returns UpdatePackageResponse
   */
  async updatePackage(projectName: string, packageName: string, request: $_model.UpdatePackageRequest): Promise<$_model.UpdatePackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePackageWithOptions(projectName, packageName, request, headers, runtime);
  }

  /**
   * Update Project Basic Information
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
   * Update Project Basic Information
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
   * Modify Default Project Compute Quota
   * 
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
   * Modify Default Project Compute Quota
   * 
   * @param request - UpdateProjectDefaultQuotaRequest
   * @returns UpdateProjectDefaultQuotaResponse
   */
  async updateProjectDefaultQuota(projectName: string, request: $_model.UpdateProjectDefaultQuotaRequest): Promise<$_model.UpdateProjectDefaultQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProjectDefaultQuotaWithOptions(projectName, request, headers, runtime);
  }

  /**
   * Modifies the IP address whitelist of a MaxCompute project.
   * 
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
   * Modifies the IP address whitelist of a MaxCompute project.
   * 
   * @param request - UpdateProjectIpWhiteListRequest
   * @returns UpdateProjectIpWhiteListResponse
   */
  async updateProjectIpWhiteList(projectName: string, request: $_model.UpdateProjectIpWhiteListRequest): Promise<$_model.UpdateProjectIpWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProjectIpWhiteListWithOptions(projectName, request, headers, runtime);
  }

  /**
   * Updates a quota plan.
   * 
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
   * Updates a quota plan.
   * 
   * @param request - UpdateQuotaPlanRequest
   * @returns UpdateQuotaPlanResponse
   */
  async updateQuotaPlan(nickname: string, planName: string, request: $_model.UpdateQuotaPlanRequest): Promise<$_model.UpdateQuotaPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateQuotaPlanWithOptions(nickname, planName, request, headers, runtime);
  }

  /**
   * Updates the scheduling plan for a quota plan.
   * 
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
   * Updates the scheduling plan for a quota plan.
   * 
   * @param request - UpdateQuotaScheduleRequest
   * @returns UpdateQuotaScheduleResponse
   */
  async updateQuotaSchedule(nickname: string, request: $_model.UpdateQuotaScheduleRequest): Promise<$_model.UpdateQuotaScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateQuotaScheduleWithOptions(nickname, request, headers, runtime);
  }

  /**
   * Updates the time-specific configuration of an exclusive resource group for Tunnel (referred to as Tunnel quota).
   * 
   * @remarks
   * Before you call this operation, make sure that you are familiar with the [billing and prices](https://www.alibabacloud.com/help/maxcompute/product-overview/data-transfer-fees-hourly-billing) of Tunnel quotas and elastically reserved computing resources.
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
   * Updates the time-specific configuration of an exclusive resource group for Tunnel (referred to as Tunnel quota).
   * 
   * @remarks
   * Before you call this operation, make sure that you are familiar with the [billing and prices](https://www.alibabacloud.com/help/maxcompute/product-overview/data-transfer-fees-hourly-billing) of Tunnel quotas and elastically reserved computing resources.
   * 
   * @param request - UpdateTunnelQuotaTimerRequest
   * @returns UpdateTunnelQuotaTimerResponse
   */
  async updateTunnelQuotaTimer(nickname: string, request: $_model.UpdateTunnelQuotaTimerRequest): Promise<$_model.UpdateTunnelQuotaTimerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTunnelQuotaTimerWithOptions(nickname, request, headers, runtime);
  }

}
