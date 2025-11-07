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
    this._endpoint = this.getEndpoint("nis", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Initiates a task for analyzing network reachability.
   * 
   * @remarks
   * You can call this operation to initiate a task for analyzing network reachability by specifying only the information about the source and destination. You do not need to create a network path for reachability analysis. The analysis result is not recorded in the system. If you want to record the path parameters and analysis result in the Network Intelligence Service (NIS) console, we recommend that you call the **createNetworkReachableAnalysis** operation.
   * 
   * @param request - CreateAndAnalyzeNetworkPathRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAndAnalyzeNetworkPathResponse
   */
  async createAndAnalyzeNetworkPathWithOptions(request: $_model.CreateAndAnalyzeNetworkPathRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAndAnalyzeNetworkPathResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAndAnalyzeNetworkPath",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAndAnalyzeNetworkPathResponse>(await this.callApi(params, req, runtime), new $_model.CreateAndAnalyzeNetworkPathResponse({}));
  }

  /**
   * Initiates a task for analyzing network reachability.
   * 
   * @remarks
   * You can call this operation to initiate a task for analyzing network reachability by specifying only the information about the source and destination. You do not need to create a network path for reachability analysis. The analysis result is not recorded in the system. If you want to record the path parameters and analysis result in the Network Intelligence Service (NIS) console, we recommend that you call the **createNetworkReachableAnalysis** operation.
   * 
   * @param request - CreateAndAnalyzeNetworkPathRequest
   * @returns CreateAndAnalyzeNetworkPathResponse
   */
  async createAndAnalyzeNetworkPath(request: $_model.CreateAndAnalyzeNetworkPathRequest): Promise<$_model.CreateAndAnalyzeNetworkPathResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAndAnalyzeNetworkPathWithOptions(request, runtime);
  }

  /**
   * Creates a network path in the cloud for reachability analysis.
   * 
   * @remarks
   *   You can call the **CreateNetworkPath** operation to create network paths in multiple networking scenarios and between multiple resources. After a path is created, the path parameters are saved for repeated analysis.
   * *   You can create up to 100 network paths within one Alibaba Cloud account.
   * 
   * @param request - CreateNetworkPathRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNetworkPathResponse
   */
  async createNetworkPathWithOptions(request: $_model.CreateNetworkPathRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNetworkPathResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.networkPathDescription)) {
      query["NetworkPathDescription"] = request.networkPathDescription;
    }

    if (!$dara.isNull(request.networkPathName)) {
      query["NetworkPathName"] = request.networkPathName;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceIpAddress)) {
      query["SourceIpAddress"] = request.sourceIpAddress;
    }

    if (!$dara.isNull(request.sourcePort)) {
      query["SourcePort"] = request.sourcePort;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetIpAddress)) {
      query["TargetIpAddress"] = request.targetIpAddress;
    }

    if (!$dara.isNull(request.targetPort)) {
      query["TargetPort"] = request.targetPort;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNetworkPath",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNetworkPathResponse>(await this.callApi(params, req, runtime), new $_model.CreateNetworkPathResponse({}));
  }

  /**
   * Creates a network path in the cloud for reachability analysis.
   * 
   * @remarks
   *   You can call the **CreateNetworkPath** operation to create network paths in multiple networking scenarios and between multiple resources. After a path is created, the path parameters are saved for repeated analysis.
   * *   You can create up to 100 network paths within one Alibaba Cloud account.
   * 
   * @param request - CreateNetworkPathRequest
   * @returns CreateNetworkPathResponse
   */
  async createNetworkPath(request: $_model.CreateNetworkPathRequest): Promise<$_model.CreateNetworkPathResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNetworkPathWithOptions(request, runtime);
  }

  /**
   * Creates a task for analyzing network reachability.
   * 
   * @remarks
   *   The **CreateNetworkReachableAnalysis** operation is used to create a task for analyzing the reachability of the network path that is created by calling the **CreateNetworkPath** operation and record the analysis results.
   * *   The **CreateNetworkReachableAnalysis** operation can be called to repeatedly analyze the reachability of a network path.
   * *   You can create up to 1,000 reachability analysis records within one Alibaba Cloud account.
   * 
   * @param request - CreateNetworkReachableAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNetworkReachableAnalysisResponse
   */
  async createNetworkReachableAnalysisWithOptions(request: $_model.CreateNetworkReachableAnalysisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNetworkReachableAnalysisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.networkPathId)) {
      query["NetworkPathId"] = request.networkPathId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNetworkReachableAnalysis",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNetworkReachableAnalysisResponse>(await this.callApi(params, req, runtime), new $_model.CreateNetworkReachableAnalysisResponse({}));
  }

  /**
   * Creates a task for analyzing network reachability.
   * 
   * @remarks
   *   The **CreateNetworkReachableAnalysis** operation is used to create a task for analyzing the reachability of the network path that is created by calling the **CreateNetworkPath** operation and record the analysis results.
   * *   The **CreateNetworkReachableAnalysis** operation can be called to repeatedly analyze the reachability of a network path.
   * *   You can create up to 1,000 reachability analysis records within one Alibaba Cloud account.
   * 
   * @param request - CreateNetworkReachableAnalysisRequest
   * @returns CreateNetworkReachableAnalysisResponse
   */
  async createNetworkReachableAnalysis(request: $_model.CreateNetworkReachableAnalysisRequest): Promise<$_model.CreateNetworkReachableAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNetworkReachableAnalysisWithOptions(request, runtime);
  }

  /**
   * Deletes a network path.
   * 
   * @param tmpReq - DeleteNetworkPathRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNetworkPathResponse
   */
  async deleteNetworkPathWithOptions(tmpReq: $_model.DeleteNetworkPathRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNetworkPathResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteNetworkPathShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.networkPathIds)) {
      request.networkPathIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.networkPathIds, "NetworkPathIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.networkPathIdsShrink)) {
      query["NetworkPathIds"] = request.networkPathIdsShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNetworkPath",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNetworkPathResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNetworkPathResponse({}));
  }

  /**
   * Deletes a network path.
   * 
   * @param request - DeleteNetworkPathRequest
   * @returns DeleteNetworkPathResponse
   */
  async deleteNetworkPath(request: $_model.DeleteNetworkPathRequest): Promise<$_model.DeleteNetworkPathResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNetworkPathWithOptions(request, runtime);
  }

  /**
   * Deletes a task for analyzing network reachability.
   * 
   * @param tmpReq - DeleteNetworkReachableAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNetworkReachableAnalysisResponse
   */
  async deleteNetworkReachableAnalysisWithOptions(tmpReq: $_model.DeleteNetworkReachableAnalysisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNetworkReachableAnalysisResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteNetworkReachableAnalysisShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.networkReachableAnalysisIds)) {
      request.networkReachableAnalysisIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.networkReachableAnalysisIds, "NetworkReachableAnalysisIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.networkReachableAnalysisIdsShrink)) {
      query["NetworkReachableAnalysisIds"] = request.networkReachableAnalysisIdsShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNetworkReachableAnalysis",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNetworkReachableAnalysisResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNetworkReachableAnalysisResponse({}));
  }

  /**
   * Deletes a task for analyzing network reachability.
   * 
   * @param request - DeleteNetworkReachableAnalysisRequest
   * @returns DeleteNetworkReachableAnalysisResponse
   */
  async deleteNetworkReachableAnalysis(request: $_model.DeleteNetworkReachableAnalysisRequest): Promise<$_model.DeleteNetworkReachableAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNetworkReachableAnalysisWithOptions(request, runtime);
  }

  /**
   * 删除报告
   * 
   * @param request - DeleteNisInspectionReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNisInspectionReportResponse
   */
  async deleteNisInspectionReportWithOptions(request: $_model.DeleteNisInspectionReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNisInspectionReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.inspectionReportId)) {
      query["InspectionReportId"] = request.inspectionReportId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNisInspectionReport",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNisInspectionReportResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNisInspectionReportResponse({}));
  }

  /**
   * 删除报告
   * 
   * @param request - DeleteNisInspectionReportRequest
   * @returns DeleteNisInspectionReportResponse
   */
  async deleteNisInspectionReport(request: $_model.DeleteNisInspectionReportRequest): Promise<$_model.DeleteNisInspectionReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNisInspectionReportWithOptions(request, runtime);
  }

  /**
   * 删除巡检任务
   * 
   * @param request - DeleteNisInspectionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNisInspectionTaskResponse
   */
  async deleteNisInspectionTaskWithOptions(request: $_model.DeleteNisInspectionTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNisInspectionTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.inspectionTaskId)) {
      query["InspectionTaskId"] = request.inspectionTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNisInspectionTask",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNisInspectionTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNisInspectionTaskResponse({}));
  }

  /**
   * 删除巡检任务
   * 
   * @param request - DeleteNisInspectionTaskRequest
   * @returns DeleteNisInspectionTaskResponse
   */
  async deleteNisInspectionTask(request: $_model.DeleteNisInspectionTaskRequest): Promise<$_model.DeleteNisInspectionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNisInspectionTaskWithOptions(request, runtime);
  }

  /**
   * 受影响资源列表
   * 
   * @param request - DescribeNisInspectionRecommendationResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNisInspectionRecommendationResourcesResponse
   */
  async describeNisInspectionRecommendationResourcesWithOptions(request: $_model.DescribeNisInspectionRecommendationResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNisInspectionRecommendationResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.inspectionReportId)) {
      query["InspectionReportId"] = request.inspectionReportId;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.recommendationCode)) {
      query["RecommendationCode"] = request.recommendationCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNisInspectionRecommendationResources",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNisInspectionRecommendationResourcesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNisInspectionRecommendationResourcesResponse({}));
  }

  /**
   * 受影响资源列表
   * 
   * @param request - DescribeNisInspectionRecommendationResourcesRequest
   * @returns DescribeNisInspectionRecommendationResourcesResponse
   */
  async describeNisInspectionRecommendationResources(request: $_model.DescribeNisInspectionRecommendationResourcesRequest): Promise<$_model.DescribeNisInspectionRecommendationResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNisInspectionRecommendationResourcesWithOptions(request, runtime);
  }

  /**
   * 报告巡检项列表
   * 
   * @param tmpReq - DescribeNisInspectionReportCheckItemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNisInspectionReportCheckItemsResponse
   */
  async describeNisInspectionReportCheckItemsWithOptions(tmpReq: $_model.DescribeNisInspectionReportCheckItemsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNisInspectionReportCheckItemsResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeNisInspectionReportCheckItemsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceType)) {
      request.resourceTypeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceType, "ResourceType", "json");
    }

    if (!$dara.isNull(tmpReq.riskLevel)) {
      request.riskLevelShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.riskLevel, "RiskLevel", "json");
    }

    let query = { };
    if (!$dara.isNull(request.categoryCode)) {
      query["CategoryCode"] = request.categoryCode;
    }

    if (!$dara.isNull(request.inspectionReportId)) {
      query["InspectionReportId"] = request.inspectionReportId;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceTypeShrink)) {
      query["ResourceType"] = request.resourceTypeShrink;
    }

    if (!$dara.isNull(request.riskLevelShrink)) {
      query["RiskLevel"] = request.riskLevelShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNisInspectionReportCheckItems",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNisInspectionReportCheckItemsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNisInspectionReportCheckItemsResponse({}));
  }

  /**
   * 报告巡检项列表
   * 
   * @param request - DescribeNisInspectionReportCheckItemsRequest
   * @returns DescribeNisInspectionReportCheckItemsResponse
   */
  async describeNisInspectionReportCheckItems(request: $_model.DescribeNisInspectionReportCheckItemsRequest): Promise<$_model.DescribeNisInspectionReportCheckItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNisInspectionReportCheckItemsWithOptions(request, runtime);
  }

  /**
   * 查询报告状态
   * 
   * @param request - DescribeNisInspectionReportStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNisInspectionReportStatusResponse
   */
  async describeNisInspectionReportStatusWithOptions(request: $_model.DescribeNisInspectionReportStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNisInspectionReportStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.inspectionReportId)) {
      query["InspectionReportId"] = request.inspectionReportId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNisInspectionReportStatus",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNisInspectionReportStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNisInspectionReportStatusResponse({}));
  }

  /**
   * 查询报告状态
   * 
   * @param request - DescribeNisInspectionReportStatusRequest
   * @returns DescribeNisInspectionReportStatusResponse
   */
  async describeNisInspectionReportStatus(request: $_model.DescribeNisInspectionReportStatusRequest): Promise<$_model.DescribeNisInspectionReportStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNisInspectionReportStatusWithOptions(request, runtime);
  }

  /**
   * 报告总结信息
   * 
   * @param request - DescribeNisInspectionReportSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNisInspectionReportSummaryResponse
   */
  async describeNisInspectionReportSummaryWithOptions(request: $_model.DescribeNisInspectionReportSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNisInspectionReportSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.inspectionReportId)) {
      query["InspectionReportId"] = request.inspectionReportId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNisInspectionReportSummary",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNisInspectionReportSummaryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNisInspectionReportSummaryResponse({}));
  }

  /**
   * 报告总结信息
   * 
   * @param request - DescribeNisInspectionReportSummaryRequest
   * @returns DescribeNisInspectionReportSummaryResponse
   */
  async describeNisInspectionReportSummary(request: $_model.DescribeNisInspectionReportSummaryRequest): Promise<$_model.DescribeNisInspectionReportSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNisInspectionReportSummaryWithOptions(request, runtime);
  }

  /**
   * 查询巡检任务
   * 
   * @param request - DescribeNisInspectionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNisInspectionTaskResponse
   */
  async describeNisInspectionTaskWithOptions(request: $_model.DescribeNisInspectionTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNisInspectionTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.inspectionTaskId)) {
      query["InspectionTaskId"] = request.inspectionTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNisInspectionTask",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNisInspectionTaskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNisInspectionTaskResponse({}));
  }

  /**
   * 查询巡检任务
   * 
   * @param request - DescribeNisInspectionTaskRequest
   * @returns DescribeNisInspectionTaskResponse
   */
  async describeNisInspectionTask(request: $_model.DescribeNisInspectionTaskRequest): Promise<$_model.DescribeNisInspectionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNisInspectionTaskWithOptions(request, runtime);
  }

  /**
   * Queries the rankings of Internet traffic data in the form of 1-tuple, 2-tuple, or 5-tuple. Internet traffic data can be ranked by metrics such as traffic volumes and the number of packets.
   * 
   * @deprecated OpenAPI GetInternetTuple is deprecated, please use nis::2021-12-16::GetNisNetworkRanking instead.
   * 
   * @param tmpReq - GetInternetTupleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInternetTupleResponse
   */
  async getInternetTupleWithOptions(tmpReq: $_model.GetInternetTupleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInternetTupleResponse> {
    tmpReq.validate();
    let request = new $_model.GetInternetTupleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.cloudIpList)) {
      request.cloudIpListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.cloudIpList, "CloudIpList", "json");
    }

    if (!$dara.isNull(tmpReq.instanceList)) {
      request.instanceListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceList, "InstanceList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.accountIds)) {
      query["AccountIds"] = request.accountIds;
    }

    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.cloudIp)) {
      query["CloudIp"] = request.cloudIp;
    }

    if (!$dara.isNull(request.cloudIpListShrink)) {
      query["CloudIpList"] = request.cloudIpListShrink;
    }

    if (!$dara.isNull(request.cloudIsp)) {
      query["CloudIsp"] = request.cloudIsp;
    }

    if (!$dara.isNull(request.cloudPort)) {
      query["CloudPort"] = request.cloudPort;
    }

    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceListShrink)) {
      query["InstanceList"] = request.instanceListShrink;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.otherCity)) {
      query["OtherCity"] = request.otherCity;
    }

    if (!$dara.isNull(request.otherCountry)) {
      query["OtherCountry"] = request.otherCountry;
    }

    if (!$dara.isNull(request.otherIp)) {
      query["OtherIp"] = request.otherIp;
    }

    if (!$dara.isNull(request.otherIsp)) {
      query["OtherIsp"] = request.otherIsp;
    }

    if (!$dara.isNull(request.otherPort)) {
      query["OtherPort"] = request.otherPort;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!$dara.isNull(request.topN)) {
      query["TopN"] = request.topN;
    }

    if (!$dara.isNull(request.tupleType)) {
      query["TupleType"] = request.tupleType;
    }

    if (!$dara.isNull(request.useMultiAccount)) {
      query["UseMultiAccount"] = request.useMultiAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInternetTuple",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInternetTupleResponse>(await this.callApi(params, req, runtime), new $_model.GetInternetTupleResponse({}));
  }

  /**
   * Queries the rankings of Internet traffic data in the form of 1-tuple, 2-tuple, or 5-tuple. Internet traffic data can be ranked by metrics such as traffic volumes and the number of packets.
   * 
   * @deprecated OpenAPI GetInternetTuple is deprecated, please use nis::2021-12-16::GetNisNetworkRanking instead.
   * 
   * @param request - GetInternetTupleRequest
   * @returns GetInternetTupleResponse
   */
  // Deprecated
  async getInternetTuple(request: $_model.GetInternetTupleRequest): Promise<$_model.GetInternetTupleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInternetTupleWithOptions(request, runtime);
  }

  /**
   * Queries the real-time SNAT performance ranking of a NAT gateway.
   * 
   * @deprecated OpenAPI GetNatTopN is deprecated, please use nis::2021-12-16::GetNisNetworkRanking instead.
   * 
   * @param request - GetNatTopNRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNatTopNResponse
   */
  async getNatTopNWithOptions(request: $_model.GetNatTopNRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNatTopNResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.topN)) {
      query["TopN"] = request.topN;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNatTopN",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNatTopNResponse>(await this.callApi(params, req, runtime), new $_model.GetNatTopNResponse({}));
  }

  /**
   * Queries the real-time SNAT performance ranking of a NAT gateway.
   * 
   * @deprecated OpenAPI GetNatTopN is deprecated, please use nis::2021-12-16::GetNisNetworkRanking instead.
   * 
   * @param request - GetNatTopNRequest
   * @returns GetNatTopNResponse
   */
  // Deprecated
  async getNatTopN(request: $_model.GetNatTopNRequest): Promise<$_model.GetNatTopNResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNatTopNWithOptions(request, runtime);
  }

  /**
   * Obtains the results of network reachability analysis.
   * 
   * @remarks
   * *GetNetworkReachableAnalysis** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can query the state of the task for analyzing network reachability.
   * *   The **init** state indicates that the task is in progress.
   * *   The **finish** state indicates that the task is complete. In this state, you can obtain the analysis result.
   * 
   * @param request - GetNetworkReachableAnalysisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNetworkReachableAnalysisResponse
   */
  async getNetworkReachableAnalysisWithOptions(request: $_model.GetNetworkReachableAnalysisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNetworkReachableAnalysisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.networkReachableAnalysisId)) {
      query["NetworkReachableAnalysisId"] = request.networkReachableAnalysisId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNetworkReachableAnalysis",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNetworkReachableAnalysisResponse>(await this.callApi(params, req, runtime), new $_model.GetNetworkReachableAnalysisResponse({}));
  }

  /**
   * Obtains the results of network reachability analysis.
   * 
   * @remarks
   * *GetNetworkReachableAnalysis** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can query the state of the task for analyzing network reachability.
   * *   The **init** state indicates that the task is in progress.
   * *   The **finish** state indicates that the task is complete. In this state, you can obtain the analysis result.
   * 
   * @param request - GetNetworkReachableAnalysisRequest
   * @returns GetNetworkReachableAnalysisResponse
   */
  async getNetworkReachableAnalysis(request: $_model.GetNetworkReachableAnalysisRequest): Promise<$_model.GetNetworkReachableAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNetworkReachableAnalysisWithOptions(request, runtime);
  }

  /**
   * 获取云网络指标趋势
   * 
   * @param tmpReq - GetNisNetworkMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNisNetworkMetricsResponse
   */
  async getNisNetworkMetricsWithOptions(tmpReq: $_model.GetNisNetworkMetricsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNisNetworkMetricsResponse> {
    tmpReq.validate();
    let request = new $_model.GetNisNetworkMetricsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dimensions)) {
      request.dimensionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dimensions, "Dimensions", "json");
    }

    let query = { };
    if (!$dara.isNull(request.accountIds)) {
      query["AccountIds"] = request.accountIds;
    }

    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.dimensionsShrink)) {
      query["Dimensions"] = request.dimensionsShrink;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.scanBy)) {
      query["ScanBy"] = request.scanBy;
    }

    if (!$dara.isNull(request.stepMinutes)) {
      query["StepMinutes"] = request.stepMinutes;
    }

    if (!$dara.isNull(request.useCrossAccount)) {
      query["UseCrossAccount"] = request.useCrossAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNisNetworkMetrics",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNisNetworkMetricsResponse>(await this.callApi(params, req, runtime), new $_model.GetNisNetworkMetricsResponse({}));
  }

  /**
   * 获取云网络指标趋势
   * 
   * @param request - GetNisNetworkMetricsRequest
   * @returns GetNisNetworkMetricsResponse
   */
  async getNisNetworkMetrics(request: $_model.GetNisNetworkMetricsRequest): Promise<$_model.GetNisNetworkMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNisNetworkMetricsWithOptions(request, runtime);
  }

  /**
   * 获取云网络指标排名
   * 
   * @param tmpReq - GetNisNetworkRankingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNisNetworkRankingResponse
   */
  async getNisNetworkRankingWithOptions(tmpReq: $_model.GetNisNetworkRankingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNisNetworkRankingResponse> {
    tmpReq.validate();
    let request = new $_model.GetNisNetworkRankingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "Filter", "json");
    }

    let query = { };
    if (!$dara.isNull(request.accountIds)) {
      query["AccountIds"] = request.accountIds;
    }

    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.filterShrink)) {
      query["Filter"] = request.filterShrink;
    }

    if (!$dara.isNull(request.groupBy)) {
      query["GroupBy"] = request.groupBy;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!$dara.isNull(request.topN)) {
      query["TopN"] = request.topN;
    }

    if (!$dara.isNull(request.useCrossAccount)) {
      query["UseCrossAccount"] = request.useCrossAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNisNetworkRanking",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNisNetworkRankingResponse>(await this.callApi(params, req, runtime), new $_model.GetNisNetworkRankingResponse({}));
  }

  /**
   * 获取云网络指标排名
   * 
   * @param request - GetNisNetworkRankingRequest
   * @returns GetNisNetworkRankingResponse
   */
  async getNisNetworkRanking(request: $_model.GetNisNetworkRankingRequest): Promise<$_model.GetNisNetworkRankingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNisNetworkRankingWithOptions(request, runtime);
  }

  /**
   * Queries the rankings of inter-region traffic data in the form of 1-tuple, 2-tuple, or 5-tuple. Inter-region traffic data can be ranked by metrics such as traffic volumes and the number of packets.
   * 
   * @deprecated OpenAPI GetTransitRouterFlowTopN is deprecated, please use nis::2021-12-16::GetNisNetworkRanking instead.
   * 
   * @param tmpReq - GetTransitRouterFlowTopNRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTransitRouterFlowTopNResponse
   */
  async getTransitRouterFlowTopNWithOptions(tmpReq: $_model.GetTransitRouterFlowTopNRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTransitRouterFlowTopNResponse> {
    tmpReq.validate();
    let request = new $_model.GetTransitRouterFlowTopNShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.accountIds)) {
      request.accountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.accountIds, "AccountIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.accountIdsShrink)) {
      query["AccountIds"] = request.accountIdsShrink;
    }

    if (!$dara.isNull(request.bandwithPackageId)) {
      query["BandwithPackageId"] = request.bandwithPackageId;
    }

    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.groupBy)) {
      query["GroupBy"] = request.groupBy;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.otherIp)) {
      query["OtherIp"] = request.otherIp;
    }

    if (!$dara.isNull(request.otherPort)) {
      query["OtherPort"] = request.otherPort;
    }

    if (!$dara.isNull(request.otherRegion)) {
      query["OtherRegion"] = request.otherRegion;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!$dara.isNull(request.thisIp)) {
      query["ThisIp"] = request.thisIp;
    }

    if (!$dara.isNull(request.thisPort)) {
      query["ThisPort"] = request.thisPort;
    }

    if (!$dara.isNull(request.thisRegion)) {
      query["ThisRegion"] = request.thisRegion;
    }

    if (!$dara.isNull(request.topN)) {
      query["TopN"] = request.topN;
    }

    if (!$dara.isNull(request.useMultiAccount)) {
      query["UseMultiAccount"] = request.useMultiAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTransitRouterFlowTopN",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTransitRouterFlowTopNResponse>(await this.callApi(params, req, runtime), new $_model.GetTransitRouterFlowTopNResponse({}));
  }

  /**
   * Queries the rankings of inter-region traffic data in the form of 1-tuple, 2-tuple, or 5-tuple. Inter-region traffic data can be ranked by metrics such as traffic volumes and the number of packets.
   * 
   * @deprecated OpenAPI GetTransitRouterFlowTopN is deprecated, please use nis::2021-12-16::GetNisNetworkRanking instead.
   * 
   * @param request - GetTransitRouterFlowTopNRequest
   * @returns GetTransitRouterFlowTopNResponse
   */
  // Deprecated
  async getTransitRouterFlowTopN(request: $_model.GetTransitRouterFlowTopNRequest): Promise<$_model.GetTransitRouterFlowTopNResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTransitRouterFlowTopNWithOptions(request, runtime);
  }

  /**
   * Queries the rankings of hybrid cloud traffic data in the form of 1-tuple, 2-tuple, or 5-tuple. Hybrid cloud traffic data can be ranked by metrics such as traffic volumes and the number of packets.
   * 
   * @deprecated OpenAPI GetVbrFlowTopN is deprecated, please use nis::2021-12-16::GetNisNetworkRanking instead.
   * 
   * @param tmpReq - GetVbrFlowTopNRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVbrFlowTopNResponse
   */
  async getVbrFlowTopNWithOptions(tmpReq: $_model.GetVbrFlowTopNRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVbrFlowTopNResponse> {
    tmpReq.validate();
    let request = new $_model.GetVbrFlowTopNShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.accountIds)) {
      request.accountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.accountIds, "AccountIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.accountIdsShrink)) {
      query["AccountIds"] = request.accountIdsShrink;
    }

    if (!$dara.isNull(request.attachmentId)) {
      query["AttachmentId"] = request.attachmentId;
    }

    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!$dara.isNull(request.cloudIp)) {
      query["CloudIp"] = request.cloudIp;
    }

    if (!$dara.isNull(request.cloudPort)) {
      query["CloudPort"] = request.cloudPort;
    }

    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.groupBy)) {
      query["GroupBy"] = request.groupBy;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.otherIp)) {
      query["OtherIp"] = request.otherIp;
    }

    if (!$dara.isNull(request.otherPort)) {
      query["OtherPort"] = request.otherPort;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!$dara.isNull(request.topN)) {
      query["TopN"] = request.topN;
    }

    if (!$dara.isNull(request.useMultiAccount)) {
      query["UseMultiAccount"] = request.useMultiAccount;
    }

    if (!$dara.isNull(request.virtualBorderRouterId)) {
      query["VirtualBorderRouterId"] = request.virtualBorderRouterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVbrFlowTopN",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVbrFlowTopNResponse>(await this.callApi(params, req, runtime), new $_model.GetVbrFlowTopNResponse({}));
  }

  /**
   * Queries the rankings of hybrid cloud traffic data in the form of 1-tuple, 2-tuple, or 5-tuple. Hybrid cloud traffic data can be ranked by metrics such as traffic volumes and the number of packets.
   * 
   * @deprecated OpenAPI GetVbrFlowTopN is deprecated, please use nis::2021-12-16::GetNisNetworkRanking instead.
   * 
   * @param request - GetVbrFlowTopNRequest
   * @returns GetVbrFlowTopNResponse
   */
  // Deprecated
  async getVbrFlowTopN(request: $_model.GetVbrFlowTopNRequest): Promise<$_model.GetVbrFlowTopNResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVbrFlowTopNWithOptions(request, runtime);
  }

  /**
   * 巡检资源类型列表
   * 
   * @param request - ListNisInspectionResourceTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNisInspectionResourceTypeResponse
   */
  async listNisInspectionResourceTypeWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListNisInspectionResourceTypeResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListNisInspectionResourceType",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNisInspectionResourceTypeResponse>(await this.callApi(params, req, runtime), new $_model.ListNisInspectionResourceTypeResponse({}));
  }

  /**
   * 巡检资源类型列表
   * @returns ListNisInspectionResourceTypeResponse
   */
  async listNisInspectionResourceType(): Promise<$_model.ListNisInspectionResourceTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNisInspectionResourceTypeWithOptions(runtime);
  }

  /**
   * 查询巡检报告列表
   * 
   * @param request - ListNisInspectionTaskReportsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNisInspectionTaskReportsResponse
   */
  async listNisInspectionTaskReportsWithOptions(request: $_model.ListNisInspectionTaskReportsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNisInspectionTaskReportsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.inspectionTaskId)) {
      query["InspectionTaskId"] = request.inspectionTaskId;
    }

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
      action: "ListNisInspectionTaskReports",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNisInspectionTaskReportsResponse>(await this.callApi(params, req, runtime), new $_model.ListNisInspectionTaskReportsResponse({}));
  }

  /**
   * 查询巡检报告列表
   * 
   * @param request - ListNisInspectionTaskReportsRequest
   * @returns ListNisInspectionTaskReportsResponse
   */
  async listNisInspectionTaskReports(request: $_model.ListNisInspectionTaskReportsRequest): Promise<$_model.ListNisInspectionTaskReportsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNisInspectionTaskReportsWithOptions(request, runtime);
  }

  /**
   * 巡检任务列表
   * 
   * @param request - ListNisInspectionTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNisInspectionTasksResponse
   */
  async listNisInspectionTasksWithOptions(request: $_model.ListNisInspectionTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNisInspectionTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.inspectionName)) {
      query["InspectionName"] = request.inspectionName;
    }

    if (!$dara.isNull(request.inspectionProject)) {
      query["InspectionProject"] = request.inspectionProject;
    }

    if (!$dara.isNull(request.inspectionTaskId)) {
      query["InspectionTaskId"] = request.inspectionTaskId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNisInspectionTasks",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNisInspectionTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListNisInspectionTasksResponse({}));
  }

  /**
   * 巡检任务列表
   * 
   * @param request - ListNisInspectionTasksRequest
   * @returns ListNisInspectionTasksResponse
   */
  async listNisInspectionTasks(request: $_model.ListNisInspectionTasksRequest): Promise<$_model.ListNisInspectionTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNisInspectionTasksWithOptions(request, runtime);
  }

  /**
   * 请补充描述开启任务
   * 
   * @param request - StartNisInspectionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartNisInspectionTaskResponse
   */
  async startNisInspectionTaskWithOptions(request: $_model.StartNisInspectionTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartNisInspectionTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.inspectionTaskId)) {
      query["InspectionTaskId"] = request.inspectionTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartNisInspectionTask",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartNisInspectionTaskResponse>(await this.callApi(params, req, runtime), new $_model.StartNisInspectionTaskResponse({}));
  }

  /**
   * 请补充描述开启任务
   * 
   * @param request - StartNisInspectionTaskRequest
   * @returns StartNisInspectionTaskResponse
   */
  async startNisInspectionTask(request: $_model.StartNisInspectionTaskRequest): Promise<$_model.StartNisInspectionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startNisInspectionTaskWithOptions(request, runtime);
  }

  /**
   * 修改巡检项
   * 
   * @param request - UpdateNisInspectionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNisInspectionTaskResponse
   */
  async updateNisInspectionTaskWithOptions(request: $_model.UpdateNisInspectionTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNisInspectionTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.inspectionTaskId)) {
      query["InspectionTaskId"] = request.inspectionTaskId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNisInspectionTask",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNisInspectionTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNisInspectionTaskResponse({}));
  }

  /**
   * 修改巡检项
   * 
   * @param request - UpdateNisInspectionTaskRequest
   * @returns UpdateNisInspectionTaskResponse
   */
  async updateNisInspectionTask(request: $_model.UpdateNisInspectionTaskRequest): Promise<$_model.UpdateNisInspectionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNisInspectionTaskWithOptions(request, runtime);
  }

}
