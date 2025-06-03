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
    this._endpoint = this.getEndpoint("apds", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 保存集群接口
   * 
   * @param request - CreateMigrationGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMigrationGroupResponse
   */
  async createMigrationGroupWithOptions(request: $_model.CreateMigrationGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMigrationGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.extra)) {
      body["extra"] = request.extra;
    }

    if (!$dara.isNull(request.id)) {
      body["id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMigrationGroup",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/okss-services/migration-group/save-migration-group`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMigrationGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateMigrationGroupResponse({}));
  }

  /**
   * 保存集群接口
   * 
   * @param request - CreateMigrationGroupRequest
   * @returns CreateMigrationGroupResponse
   */
  async createMigrationGroup(request: $_model.CreateMigrationGroupRequest): Promise<$_model.CreateMigrationGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMigrationGroupWithOptions(request, headers, runtime);
  }

  /**
   * 写入同步任务
   * 
   * @param request - CreateMigrationJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMigrationJobResponse
   */
  async createMigrationJobWithOptions(request: $_model.CreateMigrationJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMigrationJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.migrationJobList)) {
      body["migrationJobList"] = request.migrationJobList;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMigrationJob",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/okss-services/migration-job/create-migration-jobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMigrationJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateMigrationJobResponse({}));
  }

  /**
   * 写入同步任务
   * 
   * @param request - CreateMigrationJobRequest
   * @returns CreateMigrationJobResponse
   */
  async createMigrationJob(request: $_model.CreateMigrationJobRequest): Promise<$_model.CreateMigrationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMigrationJobWithOptions(request, headers, runtime);
  }

  /**
   * 南天门订单通知
   * 
   * @param request - CreatePayOrderCallbackRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePayOrderCallbackResponse
   */
  async createPayOrderCallbackWithOptions(request: $_model.CreatePayOrderCallbackRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePayOrderCallbackResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.data)) {
      query["data"] = request.data;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePayOrderCallback",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/sys/user/pop/api/v1/payOrderCallback`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePayOrderCallbackResponse>(await this.callApi(params, req, runtime), new $_model.CreatePayOrderCallbackResponse({}));
  }

  /**
   * 南天门订单通知
   * 
   * @param request - CreatePayOrderCallbackRequest
   * @returns CreatePayOrderCallbackResponse
   */
  async createPayOrderCallback(request: $_model.CreatePayOrderCallbackRequest): Promise<$_model.CreatePayOrderCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPayOrderCallbackWithOptions(request, headers, runtime);
  }

  /**
   * 退订
   * 
   * @param request - CreateRefundRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRefundResponse
   */
  async createRefundWithOptions(request: $_model.CreateRefundRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRefundResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.data)) {
      query["data"] = request.data;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRefund",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/sys/user/pop/api/v1/refund`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRefundResponse>(await this.callApi(params, req, runtime), new $_model.CreateRefundResponse({}));
  }

  /**
   * 退订
   * 
   * @param request - CreateRefundRequest
   * @returns CreateRefundResponse
   */
  async createRefund(request: $_model.CreateRefundRequest): Promise<$_model.CreateRefundResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRefundWithOptions(request, headers, runtime);
  }

  /**
   * 新增扫描任务
   * 
   * @param request - CreateSurveyJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSurveyJobResponse
   */
  async createSurveyJobWithOptions(request: $_model.CreateSurveyJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSurveyJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ak)) {
      body["ak"] = request.ak;
    }

    if (!$dara.isNull(request.autoConfirm)) {
      body["autoConfirm"] = request.autoConfirm;
    }

    if (!$dara.isNull(request.channel)) {
      body["channel"] = request.channel;
    }

    if (!$dara.isNull(request.cloudType)) {
      body["cloudType"] = request.cloudType;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.ossObjectName)) {
      body["ossObjectName"] = request.ossObjectName;
    }

    if (!$dara.isNull(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.region)) {
      body["region"] = request.region;
    }

    if (!$dara.isNull(request.resourceTypeList)) {
      body["resourceTypeList"] = request.resourceTypeList;
    }

    if (!$dara.isNull(request.sk)) {
      body["sk"] = request.sk;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["tenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.zone)) {
      body["zone"] = request.zone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSurveyJob",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/okss-services/winback/add-survey-job`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSurveyJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateSurveyJobResponse({}));
  }

  /**
   * 新增扫描任务
   * 
   * @param request - CreateSurveyJobRequest
   * @returns CreateSurveyJobResponse
   */
  async createSurveyJob(request: $_model.CreateSurveyJobRequest): Promise<$_model.CreateSurveyJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSurveyJobWithOptions(request, headers, runtime);
  }

  /**
   * 新增扫描任务
   * 
   * @param request - CreateSurveyJobOfflineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSurveyJobOfflineResponse
   */
  async createSurveyJobOfflineWithOptions(request: $_model.CreateSurveyJobOfflineRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSurveyJobOfflineResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoConfirm)) {
      body["autoConfirm"] = request.autoConfirm;
    }

    if (!$dara.isNull(request.channel)) {
      body["channel"] = request.channel;
    }

    if (!$dara.isNull(request.cloudType)) {
      body["cloudType"] = request.cloudType;
    }

    if (!$dara.isNull(request.fileName)) {
      body["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.objectName)) {
      body["objectName"] = request.objectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSurveyJobOffline",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/okss-services/winback/add-import-survey-job`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSurveyJobOfflineResponse>(await this.callApi(params, req, runtime), new $_model.CreateSurveyJobOfflineResponse({}));
  }

  /**
   * 新增扫描任务
   * 
   * @param request - CreateSurveyJobOfflineRequest
   * @returns CreateSurveyJobOfflineResponse
   */
  async createSurveyJobOffline(request: $_model.CreateSurveyJobOfflineRequest): Promise<$_model.CreateSurveyJobOfflineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSurveyJobOfflineWithOptions(request, headers, runtime);
  }

  /**
   * 删除任务
   * 
   * @param request - DeleteMigrationJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMigrationJobResponse
   */
  async deleteMigrationJobWithOptions(request: $_model.DeleteMigrationJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMigrationJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMigrationJob",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/okss-services/migration-job/remove-migration-job`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMigrationJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMigrationJobResponse({}));
  }

  /**
   * 删除任务
   * 
   * @param request - DeleteMigrationJobRequest
   * @returns DeleteMigrationJobResponse
   */
  async deleteMigrationJob(request: $_model.DeleteMigrationJobRequest): Promise<$_model.DeleteMigrationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMigrationJobWithOptions(request, headers, runtime);
  }

  /**
   * 根据key删除oss文件
   * 
   * @param request - DeleteOssFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOssFileResponse
   */
  async deleteOssFileWithOptions(request: $_model.DeleteOssFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOssFileResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.objectName)) {
      query["objectName"] = request.objectName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOssFile",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/okss-services/file-job/delete-file`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteOssFileResponse>(await this.callApi(params, req, runtime), new $_model.DeleteOssFileResponse({}));
  }

  /**
   * 根据key删除oss文件
   * 
   * @param request - DeleteOssFileRequest
   * @returns DeleteOssFileResponse
   */
  async deleteOssFile(request: $_model.DeleteOssFileRequest): Promise<$_model.DeleteOssFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteOssFileWithOptions(request, headers, runtime);
  }

  /**
   * 根据id删除扫描任务
   * 
   * @param request - DeleteSurveyJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSurveyJobResponse
   */
  async deleteSurveyJobWithOptions(request: $_model.DeleteSurveyJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSurveyJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSurveyJob",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/okss-services/winback/delete-survey-job`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSurveyJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSurveyJobResponse({}));
  }

  /**
   * 根据id删除扫描任务
   * 
   * @param request - DeleteSurveyJobRequest
   * @returns DeleteSurveyJobResponse
   */
  async deleteSurveyJob(request: $_model.DeleteSurveyJobRequest): Promise<$_model.DeleteSurveyJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSurveyJobWithOptions(request, headers, runtime);
  }

  /**
   * 发现-批量删除资源接口
   * 
   * @param request - DeleteSurveyResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSurveyResourcesResponse
   */
  async deleteSurveyResourcesWithOptions(request: $_model.DeleteSurveyResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSurveyResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ids)) {
      query["ids"] = request.ids;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSurveyResources",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/okss-services/confirm-resource/destroy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSurveyResourcesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSurveyResourcesResponse({}));
  }

  /**
   * 发现-批量删除资源接口
   * 
   * @param request - DeleteSurveyResourcesRequest
   * @returns DeleteSurveyResourcesResponse
   */
  async deleteSurveyResources(request: $_model.DeleteSurveyResourcesRequest): Promise<$_model.DeleteSurveyResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSurveyResourcesWithOptions(request, headers, runtime);
  }

  /**
   * 查询用户维度同步任务的设置状态
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMigrationJobConfigResponse
   */
  async describeMigrationJobConfigWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMigrationJobConfigResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMigrationJobConfig",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/okss-services/migration-job/describe-migration-job-config`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMigrationJobConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMigrationJobConfigResponse({}));
  }

  /**
   * 查询用户维度同步任务的设置状态
   * @returns DescribeMigrationJobConfigResponse
   */
  async describeMigrationJobConfig(): Promise<$_model.DescribeMigrationJobConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeMigrationJobConfigWithOptions(headers, runtime);
  }

  /**
   * 查询同步任务数量
   * 
   * @param request - DescribeMigrationJobCountRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMigrationJobCountResponse
   */
  async describeMigrationJobCountWithOptions(request: $_model.DescribeMigrationJobCountRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMigrationJobCountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.batchTaskGroupId)) {
      body["batchTaskGroupId"] = request.batchTaskGroupId;
    }

    if (!$dara.isNull(request.cutoverPlanId)) {
      body["cutoverPlanId"] = request.cutoverPlanId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.outSideId)) {
      body["outSideId"] = request.outSideId;
    }

    if (!$dara.isNull(request.source)) {
      body["source"] = request.source;
    }

    if (!$dara.isNull(request.surveyResourceId)) {
      body["surveyResourceId"] = request.surveyResourceId;
    }

    if (!$dara.isNull(request.tagList)) {
      body["tagList"] = request.tagList;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    if (!$dara.isNull(request.typeList)) {
      body["typeList"] = request.typeList;
    }

    if (!$dara.isNull(request.usedType)) {
      body["usedType"] = request.usedType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMigrationJobCount",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/okss-services/migration-job/count-migration-jobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMigrationJobCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMigrationJobCountResponse({}));
  }

  /**
   * 查询同步任务数量
   * 
   * @param request - DescribeMigrationJobCountRequest
   * @returns DescribeMigrationJobCountResponse
   */
  async describeMigrationJobCount(request: $_model.DescribeMigrationJobCountRequest): Promise<$_model.DescribeMigrationJobCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeMigrationJobCountWithOptions(request, headers, runtime);
  }

  /**
   * 获取临时授权
   * 
   * @param request - DescribeOssStsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOssStsResponse
   */
  async describeOssStsWithOptions(request: $_model.DescribeOssStsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOssStsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ak)) {
      query["ak"] = request.ak;
    }

    if (!$dara.isNull(request.cloudType)) {
      query["cloudType"] = request.cloudType;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sk)) {
      query["sk"] = request.sk;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOssSts",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/okss-services/file-job/sts`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOssStsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOssStsResponse({}));
  }

  /**
   * 获取临时授权
   * 
   * @param request - DescribeOssStsRequest
   * @returns DescribeOssStsResponse
   */
  async describeOssSts(request: $_model.DescribeOssStsRequest): Promise<$_model.DescribeOssStsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeOssStsWithOptions(request, headers, runtime);
  }

  /**
   * 根据状态进行汇总
   * 
   * @param request - DescribeSummaryByStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSummaryByStatusResponse
   */
  async describeSummaryByStatusWithOptions(request: $_model.DescribeSummaryByStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSummaryByStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSummaryByStatus",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/okss-services/summary/summary-by-status`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSummaryByStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSummaryByStatusResponse({}));
  }

  /**
   * 根据状态进行汇总
   * 
   * @param request - DescribeSummaryByStatusRequest
   * @returns DescribeSummaryByStatusResponse
   */
  async describeSummaryByStatus(request: $_model.DescribeSummaryByStatusRequest): Promise<$_model.DescribeSummaryByStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSummaryByStatusWithOptions(request, headers, runtime);
  }

  /**
   * 根据状态和集群进行汇总
   * 
   * @param request - DescribeSummaryByStatusAndGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSummaryByStatusAndGroupResponse
   */
  async describeSummaryByStatusAndGroupWithOptions(request: $_model.DescribeSummaryByStatusAndGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSummaryByStatusAndGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSummaryByStatusAndGroup",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/okss-services/summary/summary-by-status-and-region`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSummaryByStatusAndGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSummaryByStatusAndGroupResponse({}));
  }

  /**
   * 根据状态和集群进行汇总
   * 
   * @param request - DescribeSummaryByStatusAndGroupRequest
   * @returns DescribeSummaryByStatusAndGroupResponse
   */
  async describeSummaryByStatusAndGroup(request: $_model.DescribeSummaryByStatusAndGroupRequest): Promise<$_model.DescribeSummaryByStatusAndGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSummaryByStatusAndGroupWithOptions(request, headers, runtime);
  }

  /**
   * 查询扫描任务
   * 
   * @param request - DescribeSurveyJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSurveyJobResponse
   */
  async describeSurveyJobWithOptions(request: $_model.DescribeSurveyJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSurveyJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSurveyJob",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/okss-services/winback/query-survey-job`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSurveyJobResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSurveyJobResponse({}));
  }

  /**
   * 查询扫描任务
   * 
   * @param request - DescribeSurveyJobRequest
   * @returns DescribeSurveyJobResponse
   */
  async describeSurveyJob(request: $_model.DescribeSurveyJobRequest): Promise<$_model.DescribeSurveyJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSurveyJobWithOptions(request, headers, runtime);
  }

  /**
   * 查询扫描任务
   * 
   * @param request - DescribeSurveyJobCountRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSurveyJobCountResponse
   */
  async describeSurveyJobCountWithOptions(request: $_model.DescribeSurveyJobCountRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSurveyJobCountResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channelList)) {
      body["channelList"] = request.channelList;
    }

    if (!$dara.isNull(request.cloudTypeList)) {
      body["cloudTypeList"] = request.cloudTypeList;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSurveyJobCount",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/okss-services/winback/count-survey-job`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSurveyJobCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSurveyJobCountResponse({}));
  }

  /**
   * 查询扫描任务
   * 
   * @param request - DescribeSurveyJobCountRequest
   * @returns DescribeSurveyJobCountResponse
   */
  async describeSurveyJobCount(request: $_model.DescribeSurveyJobCountRequest): Promise<$_model.DescribeSurveyJobCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSurveyJobCountWithOptions(request, headers, runtime);
  }

  /**
   * 获取资源标签信息
   * 
   * @param request - DescribeSurveyResourceTagRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSurveyResourceTagResponse
   */
  async describeSurveyResourceTagWithOptions(request: $_model.DescribeSurveyResourceTagRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSurveyResourceTagResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.scene)) {
      body["scene"] = request.scene;
    }

    if (!$dara.isNull(request.sourceUserIdList)) {
      body["sourceUserIdList"] = request.sourceUserIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSurveyResourceTag",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/okss-services/confirm-resource/get-resource-tag`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSurveyResourceTagResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSurveyResourceTagResponse({}));
  }

  /**
   * 获取资源标签信息
   * 
   * @param request - DescribeSurveyResourceTagRequest
   * @returns DescribeSurveyResourceTagResponse
   */
  async describeSurveyResourceTag(request: $_model.DescribeSurveyResourceTagRequest): Promise<$_model.DescribeSurveyResourceTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSurveyResourceTagWithOptions(request, headers, runtime);
  }

  /**
   * 查询资源调研参数模板列表type
   * 
   * @param request - DescribeSurveyTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSurveyTemplateResponse
   */
  async describeSurveyTemplateWithOptions(request: $_model.DescribeSurveyTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSurveyTemplateResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSurveyTemplate",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/okss-services/survey-template/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSurveyTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSurveyTemplateResponse({}));
  }

  /**
   * 查询资源调研参数模板列表type
   * 
   * @param request - DescribeSurveyTemplateRequest
   * @returns DescribeSurveyTemplateResponse
   */
  async describeSurveyTemplate(request: $_model.DescribeSurveyTemplateRequest): Promise<$_model.DescribeSurveyTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSurveyTemplateWithOptions(request, headers, runtime);
  }

  /**
   * 获得脚本中的表名，以及获取已知的不支持转换函数
   * 
   * @param request - GetTableMetaInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableMetaInfoResponse
   */
  async getTableMetaInfoWithOptions(request: $_model.GetTableMetaInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTableMetaInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sourceDialect)) {
      body["sourceDialect"] = request.sourceDialect;
    }

    if (!$dara.isNull(request.sourceSqlScript)) {
      body["sourceSqlScript"] = request.sourceSqlScript;
    }

    if (!$dara.isNull(request.targetDialect)) {
      body["targetDialect"] = request.targetDialect;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTableMetaInfo",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/api/bigdata/sql-translator/open/single/get-table-info`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTableMetaInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetTableMetaInfoResponse({}));
  }

  /**
   * 获得脚本中的表名，以及获取已知的不支持转换函数
   * 
   * @param request - GetTableMetaInfoRequest
   * @returns GetTableMetaInfoResponse
   */
  async getTableMetaInfo(request: $_model.GetTableMetaInfoRequest): Promise<$_model.GetTableMetaInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTableMetaInfoWithOptions(request, headers, runtime);
  }

  /**
   * 回显任务详情
   * 
   * @param request - GetTaskDetailRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskDetailResponse
   */
  async getTaskDetailWithOptions(request: $_model.GetTaskDetailRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskDetail",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/api/bigdata/jobMigrate/sqlTranslator/task/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskDetailResponse({}));
  }

  /**
   * 回显任务详情
   * 
   * @param request - GetTaskDetailRequest
   * @returns GetTaskDetailResponse
   */
  async getTaskDetail(request: $_model.GetTaskDetailRequest): Promise<$_model.GetTaskDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskDetailWithOptions(request, headers, runtime);
  }

  /**
   * 分发页下载统计
   * 
   * @param request - ListAppDownloadHistoryRequest
   * @param headers - ListAppDownloadHistoryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppDownloadHistoryResponse
   */
  async listAppDownloadHistoryWithOptions(request: $_model.ListAppDownloadHistoryRequest, headers: $_model.ListAppDownloadHistoryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppDownloadHistoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!$dara.isNull(request.platform)) {
      body["platform"] = request.platform;
    }

    if (!$dara.isNull(request.startDate)) {
      body["startDate"] = request.startDate;
    }

    if (!$dara.isNull(request.tenantUid)) {
      body["tenantUid"] = request.tenantUid;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.bizModuleCode)) {
      realHeaders["biz-module-code"] = String(headers.bizModuleCode);
    }

    if (!$dara.isNull(headers.tenantProxyUid)) {
      realHeaders["tenant-proxy-uid"] = String(headers.tenantProxyUid);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppDownloadHistory",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/abm/app/manager/api/v1/fetchAppDownloadHistory`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppDownloadHistoryResponse>(await this.callApi(params, req, runtime), new $_model.ListAppDownloadHistoryResponse({}));
  }

  /**
   * 分发页下载统计
   * 
   * @param request - ListAppDownloadHistoryRequest
   * @returns ListAppDownloadHistoryResponse
   */
  async listAppDownloadHistory(request: $_model.ListAppDownloadHistoryRequest): Promise<$_model.ListAppDownloadHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListAppDownloadHistoryHeaders({ });
    return await this.listAppDownloadHistoryWithOptions(request, headers, runtime);
  }

  /**
   * 查询同步任务
   * 
   * @param request - ListMigrationJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMigrationJobsResponse
   */
  async listMigrationJobsWithOptions(request: $_model.ListMigrationJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMigrationJobsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.batchTaskGroupId)) {
      body["batchTaskGroupId"] = request.batchTaskGroupId;
    }

    if (!$dara.isNull(request.cutoverPlanId)) {
      body["cutoverPlanId"] = request.cutoverPlanId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.outSideId)) {
      body["outSideId"] = request.outSideId;
    }

    if (!$dara.isNull(request.pageNum)) {
      body["pageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortCol)) {
      body["sortCol"] = request.sortCol;
    }

    if (!$dara.isNull(request.sortType)) {
      body["sortType"] = request.sortType;
    }

    if (!$dara.isNull(request.source)) {
      body["source"] = request.source;
    }

    if (!$dara.isNull(request.surveyResourceId)) {
      body["surveyResourceId"] = request.surveyResourceId;
    }

    if (!$dara.isNull(request.tagList)) {
      body["tagList"] = request.tagList;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    if (!$dara.isNull(request.typeList)) {
      body["typeList"] = request.typeList;
    }

    if (!$dara.isNull(request.usedType)) {
      body["usedType"] = request.usedType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMigrationJobs",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/okss-services/migration-job/describe-migration-jobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMigrationJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListMigrationJobsResponse({}));
  }

  /**
   * 查询同步任务
   * 
   * @param request - ListMigrationJobsRequest
   * @returns ListMigrationJobsResponse
   */
  async listMigrationJobs(request: $_model.ListMigrationJobsRequest): Promise<$_model.ListMigrationJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMigrationJobsWithOptions(request, headers, runtime);
  }

  /**
   * 获取调研任务下载列表
   * 
   * @param request - ListSurveyJobDownLoadJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSurveyJobDownLoadJobsResponse
   */
  async listSurveyJobDownLoadJobsWithOptions(request: $_model.ListSurveyJobDownLoadJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSurveyJobDownLoadJobsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNum)) {
      body["pageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortCol)) {
      body["sortCol"] = request.sortCol;
    }

    if (!$dara.isNull(request.sortType)) {
      body["sortType"] = request.sortType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSurveyJobDownLoadJobs",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/okss-services/file-job/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSurveyJobDownLoadJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListSurveyJobDownLoadJobsResponse({}));
  }

  /**
   * 获取调研任务下载列表
   * 
   * @param request - ListSurveyJobDownLoadJobsRequest
   * @returns ListSurveyJobDownLoadJobsResponse
   */
  async listSurveyJobDownLoadJobs(request: $_model.ListSurveyJobDownLoadJobsRequest): Promise<$_model.ListSurveyJobDownLoadJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSurveyJobDownLoadJobsWithOptions(request, headers, runtime);
  }

  /**
   * 查看调研任务列表
   * 
   * @param request - ListSurveyJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSurveyJobsResponse
   */
  async listSurveyJobsWithOptions(request: $_model.ListSurveyJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSurveyJobsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channelList)) {
      body["channelList"] = request.channelList;
    }

    if (!$dara.isNull(request.cloudTypeList)) {
      body["cloudTypeList"] = request.cloudTypeList;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.pageNum)) {
      body["pageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.region)) {
      body["region"] = request.region;
    }

    if (!$dara.isNull(request.surveyRange)) {
      body["surveyRange"] = request.surveyRange;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSurveyJobs",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/okss-services/winback/query-survey-jobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSurveyJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListSurveyJobsResponse({}));
  }

  /**
   * 查看调研任务列表
   * 
   * @param request - ListSurveyJobsRequest
   * @returns ListSurveyJobsResponse
   */
  async listSurveyJobs(request: $_model.ListSurveyJobsRequest): Promise<$_model.ListSurveyJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSurveyJobsWithOptions(request, headers, runtime);
  }

  /**
   * 通过集群ids获取下属资源
   * 
   * @param tmpReq - ListSurveyResourceByMigrationGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSurveyResourceByMigrationGroupsResponse
   */
  async listSurveyResourceByMigrationGroupsWithOptions(tmpReq: $_model.ListSurveyResourceByMigrationGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSurveyResourceByMigrationGroupsResponse> {
    tmpReq.validate();
    let request = new $_model.ListSurveyResourceByMigrationGroupsShrinkRequest({ });
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
      action: "ListSurveyResourceByMigrationGroups",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/okss-services/migration-group/get-survey-resource`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSurveyResourceByMigrationGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListSurveyResourceByMigrationGroupsResponse({}));
  }

  /**
   * 通过集群ids获取下属资源
   * 
   * @param request - ListSurveyResourceByMigrationGroupsRequest
   * @returns ListSurveyResourceByMigrationGroupsResponse
   */
  async listSurveyResourceByMigrationGroups(request: $_model.ListSurveyResourceByMigrationGroupsRequest): Promise<$_model.ListSurveyResourceByMigrationGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSurveyResourceByMigrationGroupsWithOptions(request, headers, runtime);
  }

  /**
   * 查询资源网络拓扑
   * 
   * @param request - ListSurveyResourceConnectionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSurveyResourceConnectionsResponse
   */
  async listSurveyResourceConnectionsWithOptions(request: $_model.ListSurveyResourceConnectionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSurveyResourceConnectionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ids)) {
      body["ids"] = request.ids;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSurveyResourceConnections",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/okss-services/resource-connects`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSurveyResourceConnectionsResponse>(await this.callApi(params, req, runtime), new $_model.ListSurveyResourceConnectionsResponse({}));
  }

  /**
   * 查询资源网络拓扑
   * 
   * @param request - ListSurveyResourceConnectionsRequest
   * @returns ListSurveyResourceConnectionsResponse
   */
  async listSurveyResourceConnections(request: $_model.ListSurveyResourceConnectionsRequest): Promise<$_model.ListSurveyResourceConnectionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSurveyResourceConnectionsWithOptions(request, headers, runtime);
  }

  /**
   * 获取资源类型列表
   * 
   * @param request - ListSurveyResourceTypesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSurveyResourceTypesResponse
   */
  async listSurveyResourceTypesWithOptions(request: $_model.ListSurveyResourceTypesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSurveyResourceTypesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ak)) {
      query["ak"] = request.ak;
    }

    if (!$dara.isNull(request.cloudType)) {
      query["cloudType"] = request.cloudType;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sk)) {
      query["sk"] = request.sk;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSurveyResourceTypes",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/okss-services/winback/query-resource-type`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSurveyResourceTypesResponse>(await this.callApi(params, req, runtime), new $_model.ListSurveyResourceTypesResponse({}));
  }

  /**
   * 获取资源类型列表
   * 
   * @param request - ListSurveyResourceTypesRequest
   * @returns ListSurveyResourceTypesResponse
   */
  async listSurveyResourceTypes(request: $_model.ListSurveyResourceTypesRequest): Promise<$_model.ListSurveyResourceTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSurveyResourceTypesWithOptions(request, headers, runtime);
  }

  /**
   * 查询任务下属资源列表详情
   * 
   * @param request - ListSurveyResourcesDetailRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSurveyResourcesDetailResponse
   */
  async listSurveyResourcesDetailWithOptions(request: $_model.ListSurveyResourcesDetailRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSurveyResourcesDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ip)) {
      body["ip"] = request.ip;
    }

    if (!$dara.isNull(request.jobId)) {
      body["jobId"] = request.jobId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.subProjectId)) {
      body["subProjectId"] = request.subProjectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSurveyResourcesDetail",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/okss-services/survey-detail/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSurveyResourcesDetailResponse>(await this.callApi(params, req, runtime), new $_model.ListSurveyResourcesDetailResponse({}));
  }

  /**
   * 查询任务下属资源列表详情
   * 
   * @param request - ListSurveyResourcesDetailRequest
   * @returns ListSurveyResourcesDetailResponse
   */
  async listSurveyResourcesDetail(request: $_model.ListSurveyResourcesDetailRequest): Promise<$_model.ListSurveyResourcesDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSurveyResourcesDetailWithOptions(request, headers, runtime);
  }

  /**
   * 新增sql转换任务
   * 
   * @param request - PopCreateTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PopCreateTaskResponse
   */
  async popCreateTaskWithOptions(request: $_model.PopCreateTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PopCreateTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataTypeMappingFile)) {
      body["dataTypeMappingFile"] = request.dataTypeMappingFile;
    }

    if (!$dara.isNull(request.dataTypeOssFileName)) {
      body["dataTypeOssFileName"] = request.dataTypeOssFileName;
    }

    if (!$dara.isNull(request.dataTypeOssObjectName)) {
      body["dataTypeOssObjectName"] = request.dataTypeOssObjectName;
    }

    if (!$dara.isNull(request.dataTypeRealFileName)) {
      body["dataTypeRealFileName"] = request.dataTypeRealFileName;
    }

    if (!$dara.isNull(request.dqlAssociationDDLTaskList)) {
      body["dqlAssociationDDLTaskList"] = request.dqlAssociationDDLTaskList;
    }

    if (!$dara.isNull(request.dqlRelateTargetDatasourceId)) {
      body["dqlRelateTargetDatasourceId"] = request.dqlRelateTargetDatasourceId;
    }

    if (!$dara.isNull(request.dqlTestDatasourceId)) {
      body["dqlTestDatasourceId"] = request.dqlTestDatasourceId;
    }

    if (!$dara.isNull(request.dqlTestProject)) {
      body["dqlTestProject"] = request.dqlTestProject;
    }

    if (!$dara.isNull(request.fileName)) {
      body["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.globalParams)) {
      body["globalParams"] = request.globalParams;
    }

    if (!$dara.isNull(request.identifier)) {
      body["identifier"] = request.identifier;
    }

    if (!$dara.isNull(request.ossObjectName)) {
      body["ossObjectName"] = request.ossObjectName;
    }

    if (!$dara.isNull(request.realFileName)) {
      body["realFileName"] = request.realFileName;
    }

    if (!$dara.isNull(request.relatedDdlContentOssFileName)) {
      body["relatedDdlContentOssFileName"] = request.relatedDdlContentOssFileName;
    }

    if (!$dara.isNull(request.relatedDdlContentOssObjectName)) {
      body["relatedDdlContentOssObjectName"] = request.relatedDdlContentOssObjectName;
    }

    if (!$dara.isNull(request.relatedDdlContentRealFileName)) {
      body["relatedDdlContentRealFileName"] = request.relatedDdlContentRealFileName;
    }

    if (!$dara.isNull(request.sourceDatasourceId)) {
      body["sourceDatasourceId"] = request.sourceDatasourceId;
    }

    if (!$dara.isNull(request.sourceDialect)) {
      body["sourceDialect"] = request.sourceDialect;
    }

    if (!$dara.isNull(request.sourceProject)) {
      body["sourceProject"] = request.sourceProject;
    }

    if (!$dara.isNull(request.tableNameMappingFile)) {
      body["tableNameMappingFile"] = request.tableNameMappingFile;
    }

    if (!$dara.isNull(request.tableNameOssFileName)) {
      body["tableNameOssFileName"] = request.tableNameOssFileName;
    }

    if (!$dara.isNull(request.tableNameOssObjectName)) {
      body["tableNameOssObjectName"] = request.tableNameOssObjectName;
    }

    if (!$dara.isNull(request.tableNameRealFileName)) {
      body["tableNameRealFileName"] = request.tableNameRealFileName;
    }

    if (!$dara.isNull(request.targetDatasourceId)) {
      body["targetDatasourceId"] = request.targetDatasourceId;
    }

    if (!$dara.isNull(request.targetDialect)) {
      body["targetDialect"] = request.targetDialect;
    }

    if (!$dara.isNull(request.targetProject)) {
      body["targetProject"] = request.targetProject;
    }

    if (!$dara.isNull(request.taskDescription)) {
      body["taskDescription"] = request.taskDescription;
    }

    if (!$dara.isNull(request.taskName)) {
      body["taskName"] = request.taskName;
    }

    if (!$dara.isNull(request.taskType)) {
      body["taskType"] = request.taskType;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["tenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.transformSchema)) {
      body["transformSchema"] = request.transformSchema;
    }

    if (!$dara.isNull(request.uid)) {
      body["uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PopCreateTask",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/api/bigdata/jobMigrate/sqlTranslator/task/popAdd`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PopCreateTaskResponse>(await this.callApi(params, req, runtime), new $_model.PopCreateTaskResponse({}));
  }

  /**
   * 新增sql转换任务
   * 
   * @param request - PopCreateTaskRequest
   * @returns PopCreateTaskResponse
   */
  async popCreateTask(request: $_model.PopCreateTaskRequest): Promise<$_model.PopCreateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.popCreateTaskWithOptions(request, headers, runtime);
  }

  /**
   * 下载表名映射模板
   * 
   * @param request - PopDownloadTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PopDownloadTemplateResponse
   */
  async popDownloadTemplateWithOptions(request: $_model.PopDownloadTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PopDownloadTemplateResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.targetDialect)) {
      query["targetDialect"] = request.targetDialect;
    }

    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PopDownloadTemplate",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/api/bigdata/jobMigrate/sqlTranslator/task/popDownload/TableNameMappingTemplate`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PopDownloadTemplateResponse>(await this.callApi(params, req, runtime), new $_model.PopDownloadTemplateResponse({}));
  }

  /**
   * 下载表名映射模板
   * 
   * @param request - PopDownloadTemplateRequest
   * @returns PopDownloadTemplateResponse
   */
  async popDownloadTemplate(request: $_model.PopDownloadTemplateRequest): Promise<$_model.PopDownloadTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.popDownloadTemplateWithOptions(request, headers, runtime);
  }

  /**
   * 编辑sql转换任务
   * 
   * @param request - PopEditTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PopEditTaskResponse
   */
  async popEditTaskWithOptions(request: $_model.PopEditTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PopEditTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!$dara.isNull(request.dataTypeMappingFile)) {
      body["dataTypeMappingFile"] = request.dataTypeMappingFile;
    }

    if (!$dara.isNull(request.dataTypeOssFileName)) {
      body["dataTypeOssFileName"] = request.dataTypeOssFileName;
    }

    if (!$dara.isNull(request.dataTypeOssObjectName)) {
      body["dataTypeOssObjectName"] = request.dataTypeOssObjectName;
    }

    if (!$dara.isNull(request.dataTypeRealFileName)) {
      body["dataTypeRealFileName"] = request.dataTypeRealFileName;
    }

    if (!$dara.isNull(request.dqlAssociationDDLTaskList)) {
      body["dqlAssociationDDLTaskList"] = request.dqlAssociationDDLTaskList;
    }

    if (!$dara.isNull(request.dqlRelateTargetDatasourceId)) {
      body["dqlRelateTargetDatasourceId"] = request.dqlRelateTargetDatasourceId;
    }

    if (!$dara.isNull(request.dqlTestDatasourceId)) {
      body["dqlTestDatasourceId"] = request.dqlTestDatasourceId;
    }

    if (!$dara.isNull(request.dqlTestProject)) {
      body["dqlTestProject"] = request.dqlTestProject;
    }

    if (!$dara.isNull(request.fileName)) {
      body["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.globalParams)) {
      body["globalParams"] = request.globalParams;
    }

    if (!$dara.isNull(request.identifier)) {
      body["identifier"] = request.identifier;
    }

    if (!$dara.isNull(request.ossObjectName)) {
      body["ossObjectName"] = request.ossObjectName;
    }

    if (!$dara.isNull(request.realFileName)) {
      body["realFileName"] = request.realFileName;
    }

    if (!$dara.isNull(request.relatedDdlContentOssFileName)) {
      body["relatedDdlContentOssFileName"] = request.relatedDdlContentOssFileName;
    }

    if (!$dara.isNull(request.relatedDdlContentOssObjectName)) {
      body["relatedDdlContentOssObjectName"] = request.relatedDdlContentOssObjectName;
    }

    if (!$dara.isNull(request.relatedDdlContentRealFileName)) {
      body["relatedDdlContentRealFileName"] = request.relatedDdlContentRealFileName;
    }

    if (!$dara.isNull(request.sourceDatasourceId)) {
      body["sourceDatasourceId"] = request.sourceDatasourceId;
    }

    if (!$dara.isNull(request.sourceDialect)) {
      body["sourceDialect"] = request.sourceDialect;
    }

    if (!$dara.isNull(request.sourceProject)) {
      body["sourceProject"] = request.sourceProject;
    }

    if (!$dara.isNull(request.tableNameMappingFile)) {
      body["tableNameMappingFile"] = request.tableNameMappingFile;
    }

    if (!$dara.isNull(request.tableNameOssFileName)) {
      body["tableNameOssFileName"] = request.tableNameOssFileName;
    }

    if (!$dara.isNull(request.tableNameOssObjectName)) {
      body["tableNameOssObjectName"] = request.tableNameOssObjectName;
    }

    if (!$dara.isNull(request.tableNameRealFileName)) {
      body["tableNameRealFileName"] = request.tableNameRealFileName;
    }

    if (!$dara.isNull(request.targetDatasourceId)) {
      body["targetDatasourceId"] = request.targetDatasourceId;
    }

    if (!$dara.isNull(request.targetDialect)) {
      body["targetDialect"] = request.targetDialect;
    }

    if (!$dara.isNull(request.targetProject)) {
      body["targetProject"] = request.targetProject;
    }

    if (!$dara.isNull(request.taskDescription)) {
      body["taskDescription"] = request.taskDescription;
    }

    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskName)) {
      body["taskName"] = request.taskName;
    }

    if (!$dara.isNull(request.taskType)) {
      body["taskType"] = request.taskType;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["tenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.transformSchema)) {
      body["transformSchema"] = request.transformSchema;
    }

    if (!$dara.isNull(request.uid)) {
      body["uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PopEditTask",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/api/bigdata/jobMigrate/sqlTranslator/task/popEdit`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PopEditTaskResponse>(await this.callApi(params, req, runtime), new $_model.PopEditTaskResponse({}));
  }

  /**
   * 编辑sql转换任务
   * 
   * @param request - PopEditTaskRequest
   * @returns PopEditTaskResponse
   */
  async popEditTask(request: $_model.PopEditTaskRequest): Promise<$_model.PopEditTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.popEditTaskWithOptions(request, headers, runtime);
  }

  /**
   * 恢复删除任务
   * 
   * @param request - RecoverMigrationJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecoverMigrationJobResponse
   */
  async recoverMigrationJobWithOptions(request: $_model.RecoverMigrationJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RecoverMigrationJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecoverMigrationJob",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/okss-services/migration-job/recover-migration-job`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecoverMigrationJobResponse>(await this.callApi(params, req, runtime), new $_model.RecoverMigrationJobResponse({}));
  }

  /**
   * 恢复删除任务
   * 
   * @param request - RecoverMigrationJobRequest
   * @returns RecoverMigrationJobResponse
   */
  async recoverMigrationJob(request: $_model.RecoverMigrationJobRequest): Promise<$_model.RecoverMigrationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.recoverMigrationJobWithOptions(request, headers, runtime);
  }

  /**
   * 此接口不直接前端使用，供外部调用的接口，可在此接口上做权限校验以及限流
   * 
   * @param request - SingleScriptSyncTranslateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SingleScriptSyncTranslateResponse
   */
  async singleScriptSyncTranslateWithOptions(request: $_model.SingleScriptSyncTranslateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SingleScriptSyncTranslateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sourceDialect)) {
      body["sourceDialect"] = request.sourceDialect;
    }

    if (!$dara.isNull(request.sourceSqlScript)) {
      body["sourceSqlScript"] = request.sourceSqlScript;
    }

    if (!$dara.isNull(request.tableMapping)) {
      body["tableMapping"] = request.tableMapping;
    }

    if (!$dara.isNull(request.targetDialect)) {
      body["targetDialect"] = request.targetDialect;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SingleScriptSyncTranslate",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/api/bigdata/sql-translator/open/single/translate-sync`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SingleScriptSyncTranslateResponse>(await this.callApi(params, req, runtime), new $_model.SingleScriptSyncTranslateResponse({}));
  }

  /**
   * 此接口不直接前端使用，供外部调用的接口，可在此接口上做权限校验以及限流
   * 
   * @param request - SingleScriptSyncTranslateRequest
   * @returns SingleScriptSyncTranslateResponse
   */
  async singleScriptSyncTranslate(request: $_model.SingleScriptSyncTranslateRequest): Promise<$_model.SingleScriptSyncTranslateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.singleScriptSyncTranslateWithOptions(request, headers, runtime);
  }

  /**
   * 断开同步任务
   * 
   * @param request - StopSyncMigrationJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopSyncMigrationJobResponse
   */
  async stopSyncMigrationJobWithOptions(request: $_model.StopSyncMigrationJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopSyncMigrationJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobType)) {
      query["jobType"] = request.jobType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopSyncMigrationJob",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/okss-services/migration-job/unsync-migration-job`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopSyncMigrationJobResponse>(await this.callApi(params, req, runtime), new $_model.StopSyncMigrationJobResponse({}));
  }

  /**
   * 断开同步任务
   * 
   * @param request - StopSyncMigrationJobRequest
   * @returns StopSyncMigrationJobResponse
   */
  async stopSyncMigrationJob(request: $_model.StopSyncMigrationJobRequest): Promise<$_model.StopSyncMigrationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopSyncMigrationJobWithOptions(request, headers, runtime);
  }

  /**
   * 同步迁移任务信息
   * 
   * @param request - SyncMigrationJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncMigrationJobResponse
   */
  async syncMigrationJobWithOptions(request: $_model.SyncMigrationJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SyncMigrationJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobType)) {
      query["jobType"] = request.jobType;
    }

    if (!$dara.isNull(request.operationType)) {
      query["operationType"] = request.operationType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regions)) {
      query["regions"] = request.regions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncMigrationJob",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/okss-services/migration-job/sync-migration-job`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncMigrationJobResponse>(await this.callApi(params, req, runtime), new $_model.SyncMigrationJobResponse({}));
  }

  /**
   * 同步迁移任务信息
   * 
   * @param request - SyncMigrationJobRequest
   * @returns SyncMigrationJobResponse
   */
  async syncMigrationJob(request: $_model.SyncMigrationJobRequest): Promise<$_model.SyncMigrationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.syncMigrationJobWithOptions(request, headers, runtime);
  }

  /**
   * 更新push
   * 
   * @param request - UpdatePushAppRequest
   * @param headers - UpdatePushAppHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePushAppResponse
   */
  async updatePushAppWithOptions(request: $_model.UpdatePushAppRequest, headers: $_model.UpdatePushAppHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePushAppResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.downloadLink)) {
      body["DownloadLink"] = request.downloadLink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.tenantProxyUid)) {
      realHeaders["tenant-proxy-uid"] = String(headers.tenantProxyUid);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePushApp",
      version: "2022-03-31",
      protocol: "HTTPS",
      pathname: `/abm/app/manager/api/v1/push`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePushAppResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePushAppResponse({}));
  }

  /**
   * 更新push
   * 
   * @param request - UpdatePushAppRequest
   * @returns UpdatePushAppResponse
   */
  async updatePushApp(request: $_model.UpdatePushAppRequest): Promise<$_model.UpdatePushAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdatePushAppHeaders({ });
    return await this.updatePushAppWithOptions(request, headers, runtime);
  }

}
