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
      'ap-northeast-2-pop': "actiontrail.ap-northeast-1.aliyuncs.com",
      'cn-beijing-finance-1': "actiontrail.aliyuncs.com",
      'cn-beijing-finance-pop': "actiontrail.aliyuncs.com",
      'cn-beijing-gov-1': "actiontrail.aliyuncs.com",
      'cn-beijing-nu16-b01': "actiontrail.aliyuncs.com",
      'cn-edge-1': "actiontrail.aliyuncs.com",
      'cn-fujian': "actiontrail.aliyuncs.com",
      'cn-haidian-cm12-c01': "actiontrail.aliyuncs.com",
      'cn-hangzhou-bj-b01': "actiontrail.aliyuncs.com",
      'cn-hangzhou-finance': "actiontrail.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "actiontrail.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "actiontrail.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "actiontrail.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "actiontrail.aliyuncs.com",
      'cn-hangzhou-test-306': "actiontrail.aliyuncs.com",
      'cn-hongkong-finance-pop': "actiontrail.aliyuncs.com",
      'cn-qingdao-nebula': "actiontrail.aliyuncs.com",
      'cn-shanghai-et15-b01': "actiontrail.aliyuncs.com",
      'cn-shanghai-et2-b01': "actiontrail.aliyuncs.com",
      'cn-shanghai-inner': "actiontrail.aliyuncs.com",
      'cn-shanghai-internal-test-1': "actiontrail.aliyuncs.com",
      'cn-shenzhen-finance-1': "actiontrail.aliyuncs.com",
      'cn-shenzhen-inner': "actiontrail.aliyuncs.com",
      'cn-shenzhen-st4-d01': "actiontrail.aliyuncs.com",
      'cn-shenzhen-su18-b01': "actiontrail.aliyuncs.com",
      'cn-wuhan': "actiontrail.aliyuncs.com",
      'cn-yushanfang': "actiontrail.aliyuncs.com",
      'cn-zhangbei-na61-b01': "actiontrail.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "actiontrail.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "actiontrail.aliyuncs.com",
      'eu-west-1-oxs': "actiontrail.ap-northeast-1.aliyuncs.com",
      'rus-west-1-pop': "actiontrail.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("actiontrail", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建高级查询历史记录
   * 
   * @param request - CreateAdvancedQueryHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAdvancedQueryHistoryResponse
   */
  async createAdvancedQueryHistoryWithOptions(request: $_model.CreateAdvancedQueryHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAdvancedQueryHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.querySql)) {
      query["QuerySql"] = request.querySql;
    }

    if (!$dara.isNull(request.simpleQuery)) {
      query["SimpleQuery"] = request.simpleQuery;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAdvancedQueryHistory",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAdvancedQueryHistoryResponse>(await this.callApi(params, req, runtime), new $_model.CreateAdvancedQueryHistoryResponse({}));
  }

  /**
   * 创建高级查询历史记录
   * 
   * @param request - CreateAdvancedQueryHistoryRequest
   * @returns CreateAdvancedQueryHistoryResponse
   */
  async createAdvancedQueryHistory(request: $_model.CreateAdvancedQueryHistoryRequest): Promise<$_model.CreateAdvancedQueryHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAdvancedQueryHistoryWithOptions(request, runtime);
  }

  /**
   * 创建高级查询模板
   * 
   * @param request - CreateAdvancedQueryTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAdvancedQueryTemplateResponse
   */
  async createAdvancedQueryTemplateWithOptions(request: $_model.CreateAdvancedQueryTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAdvancedQueryTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.simpleQuery)) {
      query["SimpleQuery"] = request.simpleQuery;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateSql)) {
      query["TemplateSql"] = request.templateSql;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAdvancedQueryTemplate",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAdvancedQueryTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateAdvancedQueryTemplateResponse({}));
  }

  /**
   * 创建高级查询模板
   * 
   * @param request - CreateAdvancedQueryTemplateRequest
   * @returns CreateAdvancedQueryTemplateResponse
   */
  async createAdvancedQueryTemplate(request: $_model.CreateAdvancedQueryTemplateRequest): Promise<$_model.CreateAdvancedQueryTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAdvancedQueryTemplateWithOptions(request, runtime);
  }

  /**
   * Creates a data backfill task.
   * 
   * @remarks
   * Limits
   * *   Make sure that you have created a single-account trail to deliver events to Simple Log Service by calling the [CreateTrail](https://help.aliyun.com/document_detail/212313.html) operation.
   * *   Only one data backfill task can run at a time within an Alibaba Cloud account.
   * This topic provides an example on how to create a data backfill task for a trail named `trail-name`.
   * 
   * @param request - CreateDeliveryHistoryJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDeliveryHistoryJobResponse
   */
  async createDeliveryHistoryJobWithOptions(request: $_model.CreateDeliveryHistoryJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDeliveryHistoryJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.trailName)) {
      query["TrailName"] = request.trailName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDeliveryHistoryJob",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDeliveryHistoryJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateDeliveryHistoryJobResponse({}));
  }

  /**
   * Creates a data backfill task.
   * 
   * @remarks
   * Limits
   * *   Make sure that you have created a single-account trail to deliver events to Simple Log Service by calling the [CreateTrail](https://help.aliyun.com/document_detail/212313.html) operation.
   * *   Only one data backfill task can run at a time within an Alibaba Cloud account.
   * This topic provides an example on how to create a data backfill task for a trail named `trail-name`.
   * 
   * @param request - CreateDeliveryHistoryJobRequest
   * @returns CreateDeliveryHistoryJobResponse
   */
  async createDeliveryHistoryJob(request: $_model.CreateDeliveryHistoryJobRequest): Promise<$_model.CreateDeliveryHistoryJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDeliveryHistoryJobWithOptions(request, runtime);
  }

  /**
   * Creates a trail. By default, ActionTrail allows you to query events generated within your Alibaba Cloud account in the last 90 days. To query and analyze events generated more than 90 days ago, create a trail to deliver events to Object Storage Service (OSS), Simple Log Service, or MaxCompute.
   * 
   * @remarks
   * *Operation description**
   * >By default, a trail that is created by calling an operation is in the Disabled state. You must call the StartLogging operation to enable the trail. This way, ActionTrail can deliver events to the destination cloud service.
   * **Prerequisites**
   * Before you create a trail, make sure that at least one of the following storage configurations is complete:
   * - Deliver events to OSS
   *   - OSS is activated and a bucket is created.
   *   
   * - Deliver events to Simple Log Service
   *   - Simple Log Service is activated and a project is created.
   *  >When a trail is created, ActionTrail automatically creates a Logstore named `actiontrail_<Trail name>` in the project. You cannot write data other than the audit data to the Logstore. This ensures the accuracy of the audit data.
   *     
   * - Deliver events to MaxCompute
   *   - MaxCompute is activated.
   * >When a trail is created, ActionTrail automatically creates a project named `actiontrail_<Account ID>` on the Projects page. You cannot write data other than the audit data to the project. This ensures the accuracy of the audit data.
   * **Usage Notes**
   * This topic provides an example on how to create a single-account trail named `trail-test` to deliver events to an OSS bucket named `audit-log`.
   * 
   * @param request - CreateTrailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTrailResponse
   */
  async createTrailWithOptions(request: $_model.CreateTrailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTrailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventRW)) {
      query["EventRW"] = request.eventRW;
    }

    if (!$dara.isNull(request.isOrganizationTrail)) {
      query["IsOrganizationTrail"] = request.isOrganizationTrail;
    }

    if (!$dara.isNull(request.maxComputeProjectArn)) {
      query["MaxComputeProjectArn"] = request.maxComputeProjectArn;
    }

    if (!$dara.isNull(request.maxComputeWriteRoleArn)) {
      query["MaxComputeWriteRoleArn"] = request.maxComputeWriteRoleArn;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ossBucketName)) {
      query["OssBucketName"] = request.ossBucketName;
    }

    if (!$dara.isNull(request.ossKeyPrefix)) {
      query["OssKeyPrefix"] = request.ossKeyPrefix;
    }

    if (!$dara.isNull(request.ossWriteRoleArn)) {
      query["OssWriteRoleArn"] = request.ossWriteRoleArn;
    }

    if (!$dara.isNull(request.slsProjectArn)) {
      query["SlsProjectArn"] = request.slsProjectArn;
    }

    if (!$dara.isNull(request.slsWriteRoleArn)) {
      query["SlsWriteRoleArn"] = request.slsWriteRoleArn;
    }

    if (!$dara.isNull(request.trailRegion)) {
      query["TrailRegion"] = request.trailRegion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTrail",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTrailResponse>(await this.callApi(params, req, runtime), new $_model.CreateTrailResponse({}));
  }

  /**
   * Creates a trail. By default, ActionTrail allows you to query events generated within your Alibaba Cloud account in the last 90 days. To query and analyze events generated more than 90 days ago, create a trail to deliver events to Object Storage Service (OSS), Simple Log Service, or MaxCompute.
   * 
   * @remarks
   * *Operation description**
   * >By default, a trail that is created by calling an operation is in the Disabled state. You must call the StartLogging operation to enable the trail. This way, ActionTrail can deliver events to the destination cloud service.
   * **Prerequisites**
   * Before you create a trail, make sure that at least one of the following storage configurations is complete:
   * - Deliver events to OSS
   *   - OSS is activated and a bucket is created.
   *   
   * - Deliver events to Simple Log Service
   *   - Simple Log Service is activated and a project is created.
   *  >When a trail is created, ActionTrail automatically creates a Logstore named `actiontrail_<Trail name>` in the project. You cannot write data other than the audit data to the Logstore. This ensures the accuracy of the audit data.
   *     
   * - Deliver events to MaxCompute
   *   - MaxCompute is activated.
   * >When a trail is created, ActionTrail automatically creates a project named `actiontrail_<Account ID>` on the Projects page. You cannot write data other than the audit data to the project. This ensures the accuracy of the audit data.
   * **Usage Notes**
   * This topic provides an example on how to create a single-account trail named `trail-test` to deliver events to an OSS bucket named `audit-log`.
   * 
   * @param request - CreateTrailRequest
   * @returns CreateTrailResponse
   */
  async createTrail(request: $_model.CreateTrailRequest): Promise<$_model.CreateTrailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTrailWithOptions(request, runtime);
  }

  /**
   * 删除高级查询历史记录
   * 
   * @param request - DeleteAdvancedQueryHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAdvancedQueryHistoryResponse
   */
  async deleteAdvancedQueryHistoryWithOptions(request: $_model.DeleteAdvancedQueryHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAdvancedQueryHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.queryId)) {
      query["QueryId"] = request.queryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAdvancedQueryHistory",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAdvancedQueryHistoryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAdvancedQueryHistoryResponse({}));
  }

  /**
   * 删除高级查询历史记录
   * 
   * @param request - DeleteAdvancedQueryHistoryRequest
   * @returns DeleteAdvancedQueryHistoryResponse
   */
  async deleteAdvancedQueryHistory(request: $_model.DeleteAdvancedQueryHistoryRequest): Promise<$_model.DeleteAdvancedQueryHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAdvancedQueryHistoryWithOptions(request, runtime);
  }

  /**
   * 删除高级查询模板
   * 
   * @param request - DeleteAdvancedQueryTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAdvancedQueryTemplateResponse
   */
  async deleteAdvancedQueryTemplateWithOptions(request: $_model.DeleteAdvancedQueryTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAdvancedQueryTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAdvancedQueryTemplate",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAdvancedQueryTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAdvancedQueryTemplateResponse({}));
  }

  /**
   * 删除高级查询模板
   * 
   * @param request - DeleteAdvancedQueryTemplateRequest
   * @returns DeleteAdvancedQueryTemplateResponse
   */
  async deleteAdvancedQueryTemplate(request: $_model.DeleteAdvancedQueryTemplateRequest): Promise<$_model.DeleteAdvancedQueryTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAdvancedQueryTemplateWithOptions(request, runtime);
  }

  /**
   * 删除数据事件选择器
   * 
   * @param request - DeleteDataEventSelectorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataEventSelectorResponse
   */
  async deleteDataEventSelectorWithOptions(request: $_model.DeleteDataEventSelectorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataEventSelectorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.trailName)) {
      query["TrailName"] = request.trailName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataEventSelector",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataEventSelectorResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataEventSelectorResponse({}));
  }

  /**
   * 删除数据事件选择器
   * 
   * @param request - DeleteDataEventSelectorRequest
   * @returns DeleteDataEventSelectorResponse
   */
  async deleteDataEventSelector(request: $_model.DeleteDataEventSelectorRequest): Promise<$_model.DeleteDataEventSelectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataEventSelectorWithOptions(request, runtime);
  }

  /**
   * Deletes a data backfill task.
   * 
   * @remarks
   * This topic describes how to delete a data backfill task whose ID is `16602`.
   * 
   * @param request - DeleteDeliveryHistoryJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDeliveryHistoryJobResponse
   */
  async deleteDeliveryHistoryJobWithOptions(request: $_model.DeleteDeliveryHistoryJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDeliveryHistoryJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDeliveryHistoryJob",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDeliveryHistoryJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDeliveryHistoryJobResponse({}));
  }

  /**
   * Deletes a data backfill task.
   * 
   * @remarks
   * This topic describes how to delete a data backfill task whose ID is `16602`.
   * 
   * @param request - DeleteDeliveryHistoryJobRequest
   * @returns DeleteDeliveryHistoryJobResponse
   */
  async deleteDeliveryHistoryJob(request: $_model.DeleteDeliveryHistoryJobRequest): Promise<$_model.DeleteDeliveryHistoryJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDeliveryHistoryJobWithOptions(request, runtime);
  }

  /**
   * Deletes a trail.
   * 
   * @remarks
   * This topic describes how to delete a sample trail named `trail-test`.
   * 
   * @param request - DeleteTrailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTrailResponse
   */
  async deleteTrailWithOptions(request: $_model.DeleteTrailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTrailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTrail",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTrailResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTrailResponse({}));
  }

  /**
   * Deletes a trail.
   * 
   * @remarks
   * This topic describes how to delete a sample trail named `trail-test`.
   * 
   * @param request - DeleteTrailRequest
   * @returns DeleteTrailResponse
   */
  async deleteTrail(request: $_model.DeleteTrailRequest): Promise<$_model.DeleteTrailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTrailWithOptions(request, runtime);
  }

  /**
   * 查询高级查询历史记录
   * 
   * @param request - DescribeAdvancedQueryHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAdvancedQueryHistoryResponse
   */
  async describeAdvancedQueryHistoryWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAdvancedQueryHistoryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAdvancedQueryHistory",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAdvancedQueryHistoryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAdvancedQueryHistoryResponse({}));
  }

  /**
   * 查询高级查询历史记录
   * @returns DescribeAdvancedQueryHistoryResponse
   */
  async describeAdvancedQueryHistory(): Promise<$_model.DescribeAdvancedQueryHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAdvancedQueryHistoryWithOptions(runtime);
  }

  /**
   * 查询高级查询模板
   * 
   * @param request - DescribeAdvancedQueryTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAdvancedQueryTemplateResponse
   */
  async describeAdvancedQueryTemplateWithOptions(request: $_model.DescribeAdvancedQueryTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAdvancedQueryTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAdvancedQueryTemplate",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAdvancedQueryTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAdvancedQueryTemplateResponse({}));
  }

  /**
   * 查询高级查询模板
   * 
   * @param request - DescribeAdvancedQueryTemplateRequest
   * @returns DescribeAdvancedQueryTemplateResponse
   */
  async describeAdvancedQueryTemplate(request: $_model.DescribeAdvancedQueryTemplateRequest): Promise<$_model.DescribeAdvancedQueryTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAdvancedQueryTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the Alibaba Cloud regions that are supported by ActionTrail.
   * 
   * @remarks
   * For more information, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2020-07-06",
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
   * Queries the Alibaba Cloud regions that are supported by ActionTrail.
   * 
   * @remarks
   * For more information, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * 列举资源生命周期事件
   * 
   * @param request - DescribeResourceLifeCycleEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceLifeCycleEventsResponse
   */
  async describeResourceLifeCycleEventsWithOptions(request: $_model.DescribeResourceLifeCycleEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResourceLifeCycleEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResourceLifeCycleEvents",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResourceLifeCycleEventsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResourceLifeCycleEventsResponse({}));
  }

  /**
   * 列举资源生命周期事件
   * 
   * @param request - DescribeResourceLifeCycleEventsRequest
   * @returns DescribeResourceLifeCycleEventsResponse
   */
  async describeResourceLifeCycleEvents(request: $_model.DescribeResourceLifeCycleEventsRequest): Promise<$_model.DescribeResourceLifeCycleEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResourceLifeCycleEventsWithOptions(request, runtime);
  }

  /**
   * 查询所有场景
   * 
   * @param request - DescribeScenesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScenesResponse
   */
  async describeScenesWithOptions(request: $_model.DescribeScenesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeScenesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.searchCode)) {
      query["SearchCode"] = request.searchCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScenes",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeScenesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeScenesResponse({}));
  }

  /**
   * 查询所有场景
   * 
   * @param request - DescribeScenesRequest
   * @returns DescribeScenesResponse
   */
  async describeScenes(request: $_model.DescribeScenesRequest): Promise<$_model.DescribeScenesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScenesWithOptions(request, runtime);
  }

  /**
   * 列举所有模版
   * 
   * @param request - DescribeSearchTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSearchTemplatesResponse
   */
  async describeSearchTemplatesWithOptions(request: $_model.DescribeSearchTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSearchTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSearchTemplates",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSearchTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSearchTemplatesResponse({}));
  }

  /**
   * 列举所有模版
   * 
   * @param request - DescribeSearchTemplatesRequest
   * @returns DescribeSearchTemplatesResponse
   */
  async describeSearchTemplates(request: $_model.DescribeSearchTemplatesRequest): Promise<$_model.DescribeSearchTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSearchTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries created trails.
   * 
   * @remarks
   * This topic shows you how to query the information about the single-account trails within an Alibaba Cloud account. In this example, the information about a trail named `test-4` is returned.
   * 
   * @param request - DescribeTrailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTrailsResponse
   */
  async describeTrailsWithOptions(request: $_model.DescribeTrailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTrailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.includeOrganizationTrail)) {
      query["IncludeOrganizationTrail"] = request.includeOrganizationTrail;
    }

    if (!$dara.isNull(request.includeShadowTrails)) {
      query["IncludeShadowTrails"] = request.includeShadowTrails;
    }

    if (!$dara.isNull(request.nameList)) {
      query["NameList"] = request.nameList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTrails",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTrailsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTrailsResponse({}));
  }

  /**
   * Queries created trails.
   * 
   * @remarks
   * This topic shows you how to query the information about the single-account trails within an Alibaba Cloud account. In this example, the information about a trail named `test-4` is returned.
   * 
   * @param request - DescribeTrailsRequest
   * @returns DescribeTrailsResponse
   */
  async describeTrails(request: $_model.DescribeTrailsRequest): Promise<$_model.DescribeTrailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTrailsWithOptions(request, runtime);
  }

  /**
   * 查询用户告警量
   * 
   * @param request - DescribeUserAlertCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserAlertCountResponse
   */
  async describeUserAlertCountWithOptions(request: $_model.DescribeUserAlertCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserAlertCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserAlertCount",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserAlertCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserAlertCountResponse({}));
  }

  /**
   * 查询用户告警量
   * 
   * @param request - DescribeUserAlertCountRequest
   * @returns DescribeUserAlertCountResponse
   */
  async describeUserAlertCount(request: $_model.DescribeUserAlertCountRequest): Promise<$_model.DescribeUserAlertCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserAlertCountWithOptions(request, runtime);
  }

  /**
   * 查询用户日志量
   * 
   * @param request - DescribeUserLogCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserLogCountResponse
   */
  async describeUserLogCountWithOptions(request: $_model.DescribeUserLogCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserLogCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserLogCount",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserLogCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserLogCountResponse({}));
  }

  /**
   * 查询用户日志量
   * 
   * @param request - DescribeUserLogCountRequest
   * @returns DescribeUserLogCountResponse
   */
  async describeUserLogCount(request: $_model.DescribeUserLogCountRequest): Promise<$_model.DescribeUserLogCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserLogCountWithOptions(request, runtime);
  }

  /**
   * Enables the Insights feature
   * 
   * @param request - EnableInsightRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableInsightResponse
   */
  async enableInsightWithOptions(request: $_model.EnableInsightRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableInsightResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.insightType)) {
      query["InsightType"] = request.insightType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableInsight",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableInsightResponse>(await this.callApi(params, req, runtime), new $_model.EnableInsightResponse({}));
  }

  /**
   * Enables the Insights feature
   * 
   * @param request - EnableInsightRequest
   * @returns EnableInsightResponse
   */
  async enableInsight(request: $_model.EnableInsightRequest): Promise<$_model.EnableInsightResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableInsightWithOptions(request, runtime);
  }

  /**
   * Queries the information about the most recent events that are generated when a specified AccessKey pair is called to access Alibaba Cloud services.
   * 
   * @remarks
   * You can call this operation to query only the information about the most recent events that are generated within 400 days after February 1, 2022 when a specified AccessKey pair is called to access Alibaba Cloud services. For more information about supported events, see [Alibaba Cloud services and events that are supported by the AccessKey pair audit feature](https://help.aliyun.com/document_detail/419214.html). Data is updated at 1-hour intervals, which can cause query latency. We recommend that you do not change an AccessKey pair unless required.
   * 
   * @param request - GetAccessKeyLastUsedEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccessKeyLastUsedEventsResponse
   */
  async getAccessKeyLastUsedEventsWithOptions(request: $_model.GetAccessKeyLastUsedEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccessKeyLastUsedEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessKey)) {
      query["AccessKey"] = request.accessKey;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAccessKeyLastUsedEvents",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccessKeyLastUsedEventsResponse>(await this.callApi(params, req, runtime), new $_model.GetAccessKeyLastUsedEventsResponse({}));
  }

  /**
   * Queries the information about the most recent events that are generated when a specified AccessKey pair is called to access Alibaba Cloud services.
   * 
   * @remarks
   * You can call this operation to query only the information about the most recent events that are generated within 400 days after February 1, 2022 when a specified AccessKey pair is called to access Alibaba Cloud services. For more information about supported events, see [Alibaba Cloud services and events that are supported by the AccessKey pair audit feature](https://help.aliyun.com/document_detail/419214.html). Data is updated at 1-hour intervals, which can cause query latency. We recommend that you do not change an AccessKey pair unless required.
   * 
   * @param request - GetAccessKeyLastUsedEventsRequest
   * @returns GetAccessKeyLastUsedEventsResponse
   */
  async getAccessKeyLastUsedEvents(request: $_model.GetAccessKeyLastUsedEventsRequest): Promise<$_model.GetAccessKeyLastUsedEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccessKeyLastUsedEventsWithOptions(request, runtime);
  }

  /**
   * Queries the information about the most recent call of a specified AccessKey pair.
   * 
   * @remarks
   * You can call this operation to query only the information about the most recent call of a specified AccessKey pair within 400 days after February 1, 2022. Data is updated at 1-hour intervals, which can cause query latency. We recommend that you do not change an AccessKey pair unless required.
   * 
   * @param request - GetAccessKeyLastUsedInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccessKeyLastUsedInfoResponse
   */
  async getAccessKeyLastUsedInfoWithOptions(request: $_model.GetAccessKeyLastUsedInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccessKeyLastUsedInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessKey)) {
      query["AccessKey"] = request.accessKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAccessKeyLastUsedInfo",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccessKeyLastUsedInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetAccessKeyLastUsedInfoResponse({}));
  }

  /**
   * Queries the information about the most recent call of a specified AccessKey pair.
   * 
   * @remarks
   * You can call this operation to query only the information about the most recent call of a specified AccessKey pair within 400 days after February 1, 2022. Data is updated at 1-hour intervals, which can cause query latency. We recommend that you do not change an AccessKey pair unless required.
   * 
   * @param request - GetAccessKeyLastUsedInfoRequest
   * @returns GetAccessKeyLastUsedInfoResponse
   */
  async getAccessKeyLastUsedInfo(request: $_model.GetAccessKeyLastUsedInfoRequest): Promise<$_model.GetAccessKeyLastUsedInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccessKeyLastUsedInfoWithOptions(request, runtime);
  }

  /**
   * Queries the information about the IP addresses that are most recently used when an AccessKey pair is called to access Alibaba Cloud services.
   * 
   * @remarks
   * You can call this operation to query only the information about the IP addresses that are most recently used within 400 days after February 1, 2022 when a specified AccessKey pair is called to access Alibaba Cloud services. Data is updated at 1-hour intervals, which can cause query latency. We recommend that you do not change an AccessKey pair unless required.
   * 
   * @param request - GetAccessKeyLastUsedIpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccessKeyLastUsedIpsResponse
   */
  async getAccessKeyLastUsedIpsWithOptions(request: $_model.GetAccessKeyLastUsedIpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccessKeyLastUsedIpsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessKey)) {
      query["AccessKey"] = request.accessKey;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAccessKeyLastUsedIps",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccessKeyLastUsedIpsResponse>(await this.callApi(params, req, runtime), new $_model.GetAccessKeyLastUsedIpsResponse({}));
  }

  /**
   * Queries the information about the IP addresses that are most recently used when an AccessKey pair is called to access Alibaba Cloud services.
   * 
   * @remarks
   * You can call this operation to query only the information about the IP addresses that are most recently used within 400 days after February 1, 2022 when a specified AccessKey pair is called to access Alibaba Cloud services. Data is updated at 1-hour intervals, which can cause query latency. We recommend that you do not change an AccessKey pair unless required.
   * 
   * @param request - GetAccessKeyLastUsedIpsRequest
   * @returns GetAccessKeyLastUsedIpsResponse
   */
  async getAccessKeyLastUsedIps(request: $_model.GetAccessKeyLastUsedIpsRequest): Promise<$_model.GetAccessKeyLastUsedIpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccessKeyLastUsedIpsWithOptions(request, runtime);
  }

  /**
   * Queries the information about the Alibaba Cloud services that are most recently accessed by using a specified AccessKey pair.
   * 
   * @remarks
   * You can call this operation to query only the information about Alibaba Cloud services that are most recently accessed by using a specified AccessKey pair within 400 days after February 1, 2022. Data is updated at 1-hour intervals, which can cause query latency. We recommend that you do not change an AccessKey pair unless required.
   * 
   * @param request - GetAccessKeyLastUsedProductsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccessKeyLastUsedProductsResponse
   */
  async getAccessKeyLastUsedProductsWithOptions(request: $_model.GetAccessKeyLastUsedProductsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccessKeyLastUsedProductsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessKey)) {
      query["AccessKey"] = request.accessKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAccessKeyLastUsedProducts",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccessKeyLastUsedProductsResponse>(await this.callApi(params, req, runtime), new $_model.GetAccessKeyLastUsedProductsResponse({}));
  }

  /**
   * Queries the information about the Alibaba Cloud services that are most recently accessed by using a specified AccessKey pair.
   * 
   * @remarks
   * You can call this operation to query only the information about Alibaba Cloud services that are most recently accessed by using a specified AccessKey pair within 400 days after February 1, 2022. Data is updated at 1-hour intervals, which can cause query latency. We recommend that you do not change an AccessKey pair unless required.
   * 
   * @param request - GetAccessKeyLastUsedProductsRequest
   * @returns GetAccessKeyLastUsedProductsResponse
   */
  async getAccessKeyLastUsedProducts(request: $_model.GetAccessKeyLastUsedProductsRequest): Promise<$_model.GetAccessKeyLastUsedProductsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccessKeyLastUsedProductsWithOptions(request, runtime);
  }

  /**
   * Queries the information about the resources that are most recently accessed by using a specified AccessKey pair.
   * 
   * @remarks
   * You can call this operation to query only the information about resources that are most recently accessed by using a specified AccessKey pair within 400 days after February 1, 2022. Data is updated at 1-hour intervals, which can cause query latency. We recommend that you do not change an AccessKey pair unless required.
   * 
   * @param request - GetAccessKeyLastUsedResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccessKeyLastUsedResourcesResponse
   */
  async getAccessKeyLastUsedResourcesWithOptions(request: $_model.GetAccessKeyLastUsedResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccessKeyLastUsedResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessKey)) {
      query["AccessKey"] = request.accessKey;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAccessKeyLastUsedResources",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccessKeyLastUsedResourcesResponse>(await this.callApi(params, req, runtime), new $_model.GetAccessKeyLastUsedResourcesResponse({}));
  }

  /**
   * Queries the information about the resources that are most recently accessed by using a specified AccessKey pair.
   * 
   * @remarks
   * You can call this operation to query only the information about resources that are most recently accessed by using a specified AccessKey pair within 400 days after February 1, 2022. Data is updated at 1-hour intervals, which can cause query latency. We recommend that you do not change an AccessKey pair unless required.
   * 
   * @param request - GetAccessKeyLastUsedResourcesRequest
   * @returns GetAccessKeyLastUsedResourcesResponse
   */
  async getAccessKeyLastUsedResources(request: $_model.GetAccessKeyLastUsedResourcesRequest): Promise<$_model.GetAccessKeyLastUsedResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccessKeyLastUsedResourcesWithOptions(request, runtime);
  }

  /**
   * 查询单个高级查询模板
   * 
   * @param request - GetAdvancedQueryTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAdvancedQueryTemplateResponse
   */
  async getAdvancedQueryTemplateWithOptions(request: $_model.GetAdvancedQueryTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAdvancedQueryTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAdvancedQueryTemplate",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAdvancedQueryTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetAdvancedQueryTemplateResponse({}));
  }

  /**
   * 查询单个高级查询模板
   * 
   * @param request - GetAdvancedQueryTemplateRequest
   * @returns GetAdvancedQueryTemplateResponse
   */
  async getAdvancedQueryTemplate(request: $_model.GetAdvancedQueryTemplateRequest): Promise<$_model.GetAdvancedQueryTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAdvancedQueryTemplateWithOptions(request, runtime);
  }

  /**
   * 查询事件选择器
   * 
   * @param request - GetDataEventSelectorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataEventSelectorResponse
   */
  async getDataEventSelectorWithOptions(request: $_model.GetDataEventSelectorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataEventSelectorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.trailName)) {
      query["TrailName"] = request.trailName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataEventSelector",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataEventSelectorResponse>(await this.callApi(params, req, runtime), new $_model.GetDataEventSelectorResponse({}));
  }

  /**
   * 查询事件选择器
   * 
   * @param request - GetDataEventSelectorRequest
   * @returns GetDataEventSelectorResponse
   */
  async getDataEventSelector(request: $_model.GetDataEventSelectorRequest): Promise<$_model.GetDataEventSelectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataEventSelectorWithOptions(request, runtime);
  }

  /**
   * Queries the details of a data backfill task.
   * 
   * @remarks
   * This topic provides an example on how to query the details of a data backfill task whose ID is `16602`. The return result shows that historical events for a trail named `trail-name` are delivered to Simple Log Service and the task is complete.
   * 
   * @param request - GetDeliveryHistoryJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeliveryHistoryJobResponse
   */
  async getDeliveryHistoryJobWithOptions(request: $_model.GetDeliveryHistoryJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeliveryHistoryJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeliveryHistoryJob",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeliveryHistoryJobResponse>(await this.callApi(params, req, runtime), new $_model.GetDeliveryHistoryJobResponse({}));
  }

  /**
   * Queries the details of a data backfill task.
   * 
   * @remarks
   * This topic provides an example on how to query the details of a data backfill task whose ID is `16602`. The return result shows that historical events for a trail named `trail-name` are delivered to Simple Log Service and the task is complete.
   * 
   * @param request - GetDeliveryHistoryJobRequest
   * @returns GetDeliveryHistoryJobResponse
   */
  async getDeliveryHistoryJob(request: $_model.GetDeliveryHistoryJobRequest): Promise<$_model.GetDeliveryHistoryJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDeliveryHistoryJobWithOptions(request, runtime);
  }

  /**
   * Queries the region where global events are stored.
   * 
   * @remarks
   * By default, global events are stored in the Singapore region.
   * To obtain the permissions to call the API operation, you must submit a ticket.
   * 
   * @param request - GetGlobalEventsStorageRegionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGlobalEventsStorageRegionResponse
   */
  async getGlobalEventsStorageRegionWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetGlobalEventsStorageRegionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetGlobalEventsStorageRegion",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGlobalEventsStorageRegionResponse>(await this.callApi(params, req, runtime), new $_model.GetGlobalEventsStorageRegionResponse({}));
  }

  /**
   * Queries the region where global events are stored.
   * 
   * @remarks
   * By default, global events are stored in the Singapore region.
   * To obtain the permissions to call the API operation, you must submit a ticket.
   * @returns GetGlobalEventsStorageRegionResponse
   */
  async getGlobalEventsStorageRegion(): Promise<$_model.GetGlobalEventsStorageRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGlobalEventsStorageRegionWithOptions(runtime);
  }

  /**
   * 操作审计成熟度查询接口
   * 
   * @param request - GetGovernanceMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGovernanceMetricsResponse
   */
  async getGovernanceMetricsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetGovernanceMetricsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetGovernanceMetrics",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGovernanceMetricsResponse>(await this.callApi(params, req, runtime), new $_model.GetGovernanceMetricsResponse({}));
  }

  /**
   * 操作审计成熟度查询接口
   * @returns GetGovernanceMetricsResponse
   */
  async getGovernanceMetrics(): Promise<$_model.GetGovernanceMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGovernanceMetricsWithOptions(runtime);
  }

  /**
   * Queries the status of a trail.
   * 
   * @remarks
   * This topic describes how to query the status of a sample single-account trail named `trail-test`.
   * 
   * @param request - GetTrailStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTrailStatusResponse
   */
  async getTrailStatusWithOptions(request: $_model.GetTrailStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTrailStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.isOrganizationTrail)) {
      query["IsOrganizationTrail"] = request.isOrganizationTrail;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTrailStatus",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTrailStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetTrailStatusResponse({}));
  }

  /**
   * Queries the status of a trail.
   * 
   * @remarks
   * This topic describes how to query the status of a sample single-account trail named `trail-test`.
   * 
   * @param request - GetTrailStatusRequest
   * @returns GetTrailStatusResponse
   */
  async getTrailStatus(request: $_model.GetTrailStatusRequest): Promise<$_model.GetTrailStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTrailStatusWithOptions(request, runtime);
  }

  /**
   * 批量查询事件选择器
   * 
   * @param request - ListDataEventSelectorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataEventSelectorsResponse
   */
  async listDataEventSelectorsWithOptions(request: $_model.ListDataEventSelectorsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataEventSelectorsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataEventSelectors",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataEventSelectorsResponse>(await this.callApi(params, req, runtime), new $_model.ListDataEventSelectorsResponse({}));
  }

  /**
   * 批量查询事件选择器
   * 
   * @param request - ListDataEventSelectorsRequest
   * @returns ListDataEventSelectorsResponse
   */
  async listDataEventSelectors(request: $_model.ListDataEventSelectorsRequest): Promise<$_model.ListDataEventSelectorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataEventSelectorsWithOptions(request, runtime);
  }

  /**
   * 查询数据事件支持的服务与事件名称
   * 
   * @param request - ListDataEventServicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataEventServicesResponse
   */
  async listDataEventServicesWithOptions(request: $_model.ListDataEventServicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataEventServicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataEventServices",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataEventServicesResponse>(await this.callApi(params, req, runtime), new $_model.ListDataEventServicesResponse({}));
  }

  /**
   * 查询数据事件支持的服务与事件名称
   * 
   * @param request - ListDataEventServicesRequest
   * @returns ListDataEventServicesResponse
   */
  async listDataEventServices(request: $_model.ListDataEventServicesRequest): Promise<$_model.ListDataEventServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataEventServicesWithOptions(request, runtime);
  }

  /**
   * Queries a list of data backfill tasks.
   * 
   * @remarks
   * This topic provides an example on how to query a list of data backfill tasks. The returned result shows that a data backfill task with the ID `16602` is used to deliver historical events for a trail named `trail-name` to Simple Log Service.
   * 
   * @param request - ListDeliveryHistoryJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeliveryHistoryJobsResponse
   */
  async listDeliveryHistoryJobsWithOptions(request: $_model.ListDeliveryHistoryJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDeliveryHistoryJobsResponse> {
    request.validate();
    let query = { };
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
      action: "ListDeliveryHistoryJobs",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDeliveryHistoryJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListDeliveryHistoryJobsResponse({}));
  }

  /**
   * Queries a list of data backfill tasks.
   * 
   * @remarks
   * This topic provides an example on how to query a list of data backfill tasks. The returned result shows that a data backfill task with the ID `16602` is used to deliver historical events for a trail named `trail-name` to Simple Log Service.
   * 
   * @param request - ListDeliveryHistoryJobsRequest
   * @returns ListDeliveryHistoryJobsResponse
   */
  async listDeliveryHistoryJobs(request: $_model.ListDeliveryHistoryJobsRequest): Promise<$_model.ListDeliveryHistoryJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDeliveryHistoryJobsWithOptions(request, runtime);
  }

  /**
   * Queries event details.
   * 
   * @remarks
   * When you call this operation to query event details, you can query the event details at most twice per second.
   * > Do not frequently call this operation. You can create a trail to deliver events to Log Service. Then, you can query event details in near real time by using the real-time log consumption feature of Log Service. For more information, see [Create a single-account trail](https://help.aliyun.com/document_detail/28810.html), [Create a multi-account trail](https://help.aliyun.com/document_detail/160661.html), and [Overview](https://help.aliyun.com/document_detail/28997.html).
   * 
   * @param request - LookupEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LookupEventsResponse
   */
  async lookupEventsWithOptions(request: $_model.LookupEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LookupEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lookupAttribute)) {
      query["LookupAttribute"] = request.lookupAttribute;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LookupEvents",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LookupEventsResponse>(await this.callApi(params, req, runtime), new $_model.LookupEventsResponse({}));
  }

  /**
   * Queries event details.
   * 
   * @remarks
   * When you call this operation to query event details, you can query the event details at most twice per second.
   * > Do not frequently call this operation. You can create a trail to deliver events to Log Service. Then, you can query event details in near real time by using the real-time log consumption feature of Log Service. For more information, see [Create a single-account trail](https://help.aliyun.com/document_detail/28810.html), [Create a multi-account trail](https://help.aliyun.com/document_detail/160661.html), and [Overview](https://help.aliyun.com/document_detail/28997.html).
   * 
   * @param request - LookupEventsRequest
   * @returns LookupEventsResponse
   */
  async lookupEvents(request: $_model.LookupEventsRequest): Promise<$_model.LookupEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.lookupEventsWithOptions(request, runtime);
  }

  /**
   * 创建事件选择器
   * 
   * @param request - PutDataEventSelectorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutDataEventSelectorResponse
   */
  async putDataEventSelectorWithOptions(request: $_model.PutDataEventSelectorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutDataEventSelectorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventSelectors)) {
      query["EventSelectors"] = request.eventSelectors;
    }

    if (!$dara.isNull(request.isTrailAllRegion)) {
      query["IsTrailAllRegion"] = request.isTrailAllRegion;
    }

    if (!$dara.isNull(request.trailName)) {
      query["TrailName"] = request.trailName;
    }

    if (!$dara.isNull(request.trailRegionIds)) {
      query["TrailRegionIds"] = request.trailRegionIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutDataEventSelector",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutDataEventSelectorResponse>(await this.callApi(params, req, runtime), new $_model.PutDataEventSelectorResponse({}));
  }

  /**
   * 创建事件选择器
   * 
   * @param request - PutDataEventSelectorRequest
   * @returns PutDataEventSelectorResponse
   */
  async putDataEventSelector(request: $_model.PutDataEventSelectorRequest): Promise<$_model.PutDataEventSelectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putDataEventSelectorWithOptions(request, runtime);
  }

  /**
   * Enables a trail to deliver events to an Object Storage Service (OSS) bucket or a Simple Log Service Logstore.
   * 
   * @remarks
   * This topic describes how to enable logging for a sample trail named `trail-test`.
   * 
   * @param request - StartLoggingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartLoggingResponse
   */
  async startLoggingWithOptions(request: $_model.StartLoggingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartLoggingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartLogging",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartLoggingResponse>(await this.callApi(params, req, runtime), new $_model.StartLoggingResponse({}));
  }

  /**
   * Enables a trail to deliver events to an Object Storage Service (OSS) bucket or a Simple Log Service Logstore.
   * 
   * @remarks
   * This topic describes how to enable logging for a sample trail named `trail-test`.
   * 
   * @param request - StartLoggingRequest
   * @returns StartLoggingResponse
   */
  async startLogging(request: $_model.StartLoggingRequest): Promise<$_model.StartLoggingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startLoggingWithOptions(request, runtime);
  }

  /**
   * Disables a trail to stop the delivery of events to an Object Storage Service (OSS) bucket or a  Simple Log Service Logstore.
   * 
   * @remarks
   * This topic describes how to disable logging for a sample trail named `trail-test`.
   * 
   * @param request - StopLoggingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopLoggingResponse
   */
  async stopLoggingWithOptions(request: $_model.StopLoggingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopLoggingResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopLogging",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopLoggingResponse>(await this.callApi(params, req, runtime), new $_model.StopLoggingResponse({}));
  }

  /**
   * Disables a trail to stop the delivery of events to an Object Storage Service (OSS) bucket or a  Simple Log Service Logstore.
   * 
   * @remarks
   * This topic describes how to disable logging for a sample trail named `trail-test`.
   * 
   * @param request - StopLoggingRequest
   * @returns StopLoggingResponse
   */
  async stopLogging(request: $_model.StopLoggingRequest): Promise<$_model.StopLoggingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopLoggingWithOptions(request, runtime);
  }

  /**
   * 更新高级查询模板
   * 
   * @param request - UpdateAdvancedQueryTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAdvancedQueryTemplateResponse
   */
  async updateAdvancedQueryTemplateWithOptions(request: $_model.UpdateAdvancedQueryTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAdvancedQueryTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.simpleQuery)) {
      query["SimpleQuery"] = request.simpleQuery;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateSql)) {
      query["TemplateSql"] = request.templateSql;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAdvancedQueryTemplate",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAdvancedQueryTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAdvancedQueryTemplateResponse({}));
  }

  /**
   * 更新高级查询模板
   * 
   * @param request - UpdateAdvancedQueryTemplateRequest
   * @returns UpdateAdvancedQueryTemplateResponse
   */
  async updateAdvancedQueryTemplate(request: $_model.UpdateAdvancedQueryTemplateRequest): Promise<$_model.UpdateAdvancedQueryTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAdvancedQueryTemplateWithOptions(request, runtime);
  }

  /**
   * Specifies the region where you want to store global events.
   * 
   * @remarks
   * By default, global events are stored in the Singapore region.
   * *   To obtain the permissions to call the API operation, you must submit a ticket.
   * *   Only the China (Hangzhou) region (cn-hangzhou) and the Singapore region (ap-southeast-1) are supported.
   * 
   * @param request - UpdateGlobalEventsStorageRegionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGlobalEventsStorageRegionResponse
   */
  async updateGlobalEventsStorageRegionWithOptions(request: $_model.UpdateGlobalEventsStorageRegionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGlobalEventsStorageRegionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.storageRegion)) {
      query["StorageRegion"] = request.storageRegion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGlobalEventsStorageRegion",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGlobalEventsStorageRegionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGlobalEventsStorageRegionResponse({}));
  }

  /**
   * Specifies the region where you want to store global events.
   * 
   * @remarks
   * By default, global events are stored in the Singapore region.
   * *   To obtain the permissions to call the API operation, you must submit a ticket.
   * *   Only the China (Hangzhou) region (cn-hangzhou) and the Singapore region (ap-southeast-1) are supported.
   * 
   * @param request - UpdateGlobalEventsStorageRegionRequest
   * @returns UpdateGlobalEventsStorageRegionResponse
   */
  async updateGlobalEventsStorageRegion(request: $_model.UpdateGlobalEventsStorageRegionRequest): Promise<$_model.UpdateGlobalEventsStorageRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGlobalEventsStorageRegionWithOptions(request, runtime);
  }

  /**
   * Updates the configurations of a trail.
   * 
   * @remarks
   * This topic shows you how to change the destination Object Storage Service (OSS) bucket of a sample trail named `trail-test` to `audit-log`.
   * 
   * @param request - UpdateTrailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTrailResponse
   */
  async updateTrailWithOptions(request: $_model.UpdateTrailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTrailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventRW)) {
      query["EventRW"] = request.eventRW;
    }

    if (!$dara.isNull(request.maxComputeProjectArn)) {
      query["MaxComputeProjectArn"] = request.maxComputeProjectArn;
    }

    if (!$dara.isNull(request.maxComputeWriteRoleArn)) {
      query["MaxComputeWriteRoleArn"] = request.maxComputeWriteRoleArn;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ossBucketName)) {
      query["OssBucketName"] = request.ossBucketName;
    }

    if (!$dara.isNull(request.ossKeyPrefix)) {
      query["OssKeyPrefix"] = request.ossKeyPrefix;
    }

    if (!$dara.isNull(request.ossWriteRoleArn)) {
      query["OssWriteRoleArn"] = request.ossWriteRoleArn;
    }

    if (!$dara.isNull(request.slsProjectArn)) {
      query["SlsProjectArn"] = request.slsProjectArn;
    }

    if (!$dara.isNull(request.slsWriteRoleArn)) {
      query["SlsWriteRoleArn"] = request.slsWriteRoleArn;
    }

    if (!$dara.isNull(request.trailRegion)) {
      query["TrailRegion"] = request.trailRegion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTrail",
      version: "2020-07-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTrailResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTrailResponse({}));
  }

  /**
   * Updates the configurations of a trail.
   * 
   * @remarks
   * This topic shows you how to change the destination Object Storage Service (OSS) bucket of a sample trail named `trail-test` to `audit-log`.
   * 
   * @param request - UpdateTrailRequest
   * @returns UpdateTrailResponse
   */
  async updateTrail(request: $_model.UpdateTrailRequest): Promise<$_model.UpdateTrailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTrailWithOptions(request, runtime);
  }

}
