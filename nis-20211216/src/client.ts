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
      'cn-shanghai': "nis.aliyuncs.com",
      'ap-southeast-1': "nis-intl.aliyuncs.com",
    };
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
   * Creates a network path for reachability analysis.
   * 
   * @remarks
   * - You can call the **CreateNetworkPath** operation to create network paths in multiple networking scenarios and between multiple resources. After a path is created, the path parameters are saved for repeated analysis.
   * - You can create up to 100 network paths within one Alibaba Cloud account.
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
   * Creates a network path for reachability analysis.
   * 
   * @remarks
   * - You can call the **CreateNetworkPath** operation to create network paths in multiple networking scenarios and between multiple resources. After a path is created, the path parameters are saved for repeated analysis.
   * - You can create up to 100 network paths within one Alibaba Cloud account.
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
   * - The **CreateNetworkReachableAnalysis** operation is used to create a task for analyzing the reachability of the network path that is created by calling the **CreateNetworkPath** operation and record the analysis results.
   * - The **CreateNetworkReachableAnalysis** operation can be called to repeatedly analyze the reachability of a network path.
   * - You can create up to 1,000 reachability analysis records within one Alibaba Cloud account.
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
   * - The **CreateNetworkReachableAnalysis** operation is used to create a task for analyzing the reachability of the network path that is created by calling the **CreateNetworkPath** operation and record the analysis results.
   * - The **CreateNetworkReachableAnalysis** operation can be called to repeatedly analyze the reachability of a network path.
   * - You can create up to 1,000 reachability analysis records within one Alibaba Cloud account.
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
   * Deletes an inspection report.
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
   * Deletes an inspection report.
   * 
   * @param request - DeleteNisInspectionReportRequest
   * @returns DeleteNisInspectionReportResponse
   */
  async deleteNisInspectionReport(request: $_model.DeleteNisInspectionReportRequest): Promise<$_model.DeleteNisInspectionReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNisInspectionReportWithOptions(request, runtime);
  }

  /**
   * Deletes an inspection task.
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
   * Deletes an inspection task.
   * 
   * @param request - DeleteNisInspectionTaskRequest
   * @returns DeleteNisInspectionTaskResponse
   */
  async deleteNisInspectionTask(request: $_model.DeleteNisInspectionTaskRequest): Promise<$_model.DeleteNisInspectionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNisInspectionTaskWithOptions(request, runtime);
  }

  /**
   * Queries the instances of abnormal items identified in an inspection report.
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
   * Queries the instances of abnormal items identified in an inspection report.
   * 
   * @param request - DescribeNisInspectionRecommendationResourcesRequest
   * @returns DescribeNisInspectionRecommendationResourcesResponse
   */
  async describeNisInspectionRecommendationResources(request: $_model.DescribeNisInspectionRecommendationResourcesRequest): Promise<$_model.DescribeNisInspectionRecommendationResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNisInspectionRecommendationResourcesWithOptions(request, runtime);
  }

  /**
   * Describes the details of check items in an inspection report.
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
   * Describes the details of check items in an inspection report.
   * 
   * @param request - DescribeNisInspectionReportCheckItemsRequest
   * @returns DescribeNisInspectionReportCheckItemsResponse
   */
  async describeNisInspectionReportCheckItems(request: $_model.DescribeNisInspectionReportCheckItemsRequest): Promise<$_model.DescribeNisInspectionReportCheckItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNisInspectionReportCheckItemsWithOptions(request, runtime);
  }

  /**
   * Describes the status of an inspection report.
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
   * Describes the status of an inspection report.
   * 
   * @param request - DescribeNisInspectionReportStatusRequest
   * @returns DescribeNisInspectionReportStatusResponse
   */
  async describeNisInspectionReportStatus(request: $_model.DescribeNisInspectionReportStatusRequest): Promise<$_model.DescribeNisInspectionReportStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNisInspectionReportStatusWithOptions(request, runtime);
  }

  /**
   * Queries an inspection report summary.
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
   * Queries an inspection report summary.
   * 
   * @param request - DescribeNisInspectionReportSummaryRequest
   * @returns DescribeNisInspectionReportSummaryResponse
   */
  async describeNisInspectionReportSummary(request: $_model.DescribeNisInspectionReportSummaryRequest): Promise<$_model.DescribeNisInspectionReportSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNisInspectionReportSummaryWithOptions(request, runtime);
  }

  /**
   * Queries the details of an inspection task.
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
   * Queries the details of an inspection task.
   * 
   * @param request - DescribeNisInspectionTaskRequest
   * @returns DescribeNisInspectionTaskResponse
   */
  async describeNisInspectionTask(request: $_model.DescribeNisInspectionTaskRequest): Promise<$_model.DescribeNisInspectionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNisInspectionTaskWithOptions(request, runtime);
  }

  /**
   * Queries the results of NIS traffic ranking analysis.
   * 
   * @remarks
   * [Before using this operation, make sure that you fully understand the billing method and pricing of the NIS Traffic Analyzer.](https://www.alibabacloud.com/help/en/nis/product-overview/billing-method-new-version)
   * Supported analysis scenarios: 
   * - All VPC network traffic analysis
   * - Public VPC network traffic analysis
   * - All TR network traffic analysis
   * - Internet Shared Bandwidth metric analysis
   * ## VPC flow log - All VPC flow log query and analysis results
   * ### Request parameters
   * | Name                | Type    | Required | Description                                                                 | Example                                      | Valid values |
   * |---------------------|---------|----------|-----------------------------------------------------------------------------|---------------------------------------------|--------|
   * | NisTrafficRankingId | string  | Yes      | The ID of the network traffic analysis result.                              | task-6462a7b4c4a54b****                     |        |
   * | NextToken           | string  | No       | The paging token. Set this parameter to the NextToken value returned in the previous API call. | 2A07PfBPlzmmNi/75Qca9SK73UfY48/+WBiREjfVfXqMQxtV8XckOg5lk7F2bhC+ |        |
   * | MaxResults          | integer | No       | The paging size. Valid values: 1 to 100. Default value: 20.                 | 20                                          |        |
   * ### Response parameters
   * | Name                | Type    | Description                                    | Example                                      | Valid values |
   * |---------------------|---------|------------------------------------------------|---------------------------------------------|--------|
   * | -                   | object  | RpcResponse                                    |                                             |        |
   * | RequestId           | string  | The request ID.                                | 4DAC4BE1-BEEA-5D84-BE06-E1B796F3B941        |        |
   * | NisTrafficRankingId | string  | The ID of the network traffic analysis result. | task-7619ecb1db9148bab9f4                   |        |
   * | Status              | string  | The task running status.                       | Complete                                    |        |
   * | NextToken           | string  | The token for the next query.                  | LoeJLhK0fsDqYoXkXieZUqB2vWnccJtVnsyKu9KxFFOMQxtV8XckOg5lk7F2bhC+ |        |
   * | MaxResults          | integer | The paging size. Valid values: 1 to 100. Default value: 20. | 20                                          |        |
   * | TotalCount          | integer | The total number of entries returned.          | 72                                          |        |
   * | FlowRankingList     | array   | The list of network traffic analysis results.  |                                             |        |
   * #### FlowRankingList element structure
   * | Name               | Type   | Description                                                                                       | Example            | Valid values   |
   * |--------------------|--------|---------------------------------------------------------------------------------------------------|--------------------|----------|
   * | RegionId           | string | The region where the flow log resides.                                                            | ap-southeast-1     |          |
   * | VpcId              | string | The VPC ID.                                                                                       | vpc-m5ec6i0h5xss*** |         |
   * | VSwitchId          | string | The vSwitch ID.                                                                                   | vsw-2zeekevlh****  |          |
   * | NetworkInterfaceId | string | The elastic network interface (ENI) ID.                                                           | eni-8vbf2jxul***   |          |
   * | EcsId              | string | The ECS instance ID of the management node.                                                       | i-uf6i1zi6yhq7h*** |          |
   * | TrafficPath        | string | The traffic path.                                                                                 | all                |          |
   * | Direction          | string | The traffic direction based on the Alibaba Cloud network resource instance. Valid values:
   * ● in: inbound traffic.
   * ● out: outbound traffic. | in                 | -in / -out |
   * | SourceIp           | string | The source IP address.
   * ● This field is returned only when 2-tuple statistics are collected.    | 47.92.245.***      |          |
   * | SourcePort         | string | The source port.
   * ● This field is returned only when 5-tuple statistics are collected.          | 5432               |          |
   * | DestinationIp      | string | The destination IP address.
   * ● This field is returned only when 2-tuple statistics are collected.| 192.168.***.0      |          |
   * | DestinationPort    | string | The destination port.
   * ● This field is returned only when 5-tuple statistics are collected.     | 23                 |          |
   * | Protocol           | string | The network protocol.
   * ● This field is returned only when 5-tuple statistics are collected.     | TCP                |          |
   * | Bytes              | number | The bandwidth.                                                                                    | 100                |          |
   * | Packets            | number | The number of packets.                                                                            | 100                |          |
   * | RoundTripTime      | number | The TCP RTT.                                                                                      | 2                  |          |
   * | BytesRate          | number | The traffic ratio.                                                                                | 0.2                |          |
   * ---
   * ## VPC flow log - Public VPC flow log query and analysis results
   * ### Request parameters
   * | Name                | Type    | Required | Description                                                                 | Example                                      | Valid values |
   * |---------------------|---------|----------|-----------------------------------------------------------------------------|---------------------------------------------|--------|
   * | NisTrafficRankingId | string  | Yes      | The ID of the network traffic analysis result.                              | task-6462a7b4c4a54b****                     |        |
   * | NextToken           | string  | No       | The paging token. Set this parameter to the NextToken value returned in the previous API call. | 2A07PfBPlzmmNi/75Qca9SK73UfY48/+WBiREjfVfXqMQxtV8XckOg5lk7F2bhC+ |        |
   * | MaxResults          | integer | No       | The paging size. Valid values: 1 to 100. Default value: 20.                 | 20                                          |        |
   * ### Response parameters
   * | Name                | Type    | Description                                    | Example                                      | Valid values |
   * |---------------------|---------|------------------------------------------------|---------------------------------------------|--------|
   * | -                   | object  | RpcResponse                                    |                                             |        |
   * | RequestId           | string  | The request ID.                                | 4DAC4BE1-BEEA-5D84-BE06-E1B796F3B941        |        |
   * | NisTrafficRankingId | string  | The ID of the network traffic analysis result. | task-7619ecb1db9148bab9f4                   |        |
   * | Status              | string  | The task running status.                       | Complete                                    |        |
   * | NextToken           | string  | The token for the next query.                  | LoeJLhK0fsDqYoXkXieZUqB2vWnccJtVnsyKu9KxFFOMQxtV8XckOg5lk7F2bhC+ |        |
   * | MaxResults          | integer | The paging size. Valid values: 1 to 100. Default value: 20. | 20                                          |        |
   * | TotalCount          | integer | The total number of entries returned.          | 72                                          |        |
   * | FlowRankingList     | array   | The list of network traffic analysis results.  |                                             |        |
   * #### FlowRankingList element structure
   * | Name               | Type   | Description                                                                                       | Example                | Valid values   |
   * |--------------------|--------|---------------------------------------------------------------------------------------------------|------------------------|----------|
   * | RegionId           | string | The region where the flow log resides.                                                            | ap-southeast-1         |          |
   * | VpcId              | string | The VPC ID.                                                                                       | vpc-m5ec6i0h5xss***    |          |
   * | VSwitchId          | string | The vSwitch ID.                                                                                   | vsw-2zeekevlh****      |          |
   * | NetworkInterfaceId | string | The elastic network interface (ENI) ID.                                                           | eni-8vbf2jxul***       |          |
   * | EcsId              | string | The ECS instance ID of the management node.                                                       | i-uf6i1zi6yhq7h***     |          |
   * | TrafficPath        | string | The traffic path.                                                                                 | all                    |          |
   * | Direction          | string | The traffic direction based on the Alibaba Cloud network resource instance. Valid values:
   * ● in: inbound traffic.
   * ● out: outbound traffic. | in                     | -in / -out |
   * | SourceIp           | string | The source IP address.
   * ● This field is returned only when 2-tuple statistics are collected.    | 47.92.245.***          |          |
   * | SourcePort         | string | The source port.
   * ● This field is returned only when 5-tuple statistics are collected.          | 5432                   |          |
   * | DestinationIp      | string | The destination IP address.
   * ● This field is returned only when 2-tuple statistics are collected.| 192.168.***.0          |          |
   * | DestinationPort    | string | The destination port.
   * ● This field is returned only when 5-tuple statistics are collected.     | 23                     |          |
   * | Protocol           | string | The network protocol.
   * ● This field is returned only when 5-tuple statistics are collected.     | TCP                    |          |
   * | ClientCountry      | string | The country of the client.                                                                        | China                  |          |
   * | ClientProvince     | string | The province of the client.                                                                       | Hong Kong SAR          |          |
   * | ClientCity         | string | The city of the client.                                                                           | Kowloon                |          |
   * | ClientIsp          | string | The network service provider.                                                                     | Alibaba Cloud          |          |
   * | ClientAsn          | string | The autonomous system number.                                                                     | 45102                  |          |
   * | Bytes              | number | The bandwidth.                                                                                    | 100                    |          |
   * | Packets            | number | The number of packets.                                                                            | 100                    |          |
   * | RoundTripTime      | number | The TCP RTT.                                                                                      | 2                      |          |
   * | BytesRate          | number | The traffic ratio.                                                                                | 0.2                    |          |
   * ---
   * ## TR flow log - TR cross-region scenario analysis results.
   * ### Request parameters
   * | Name                | Type    | Required | Description                                                                 | Example                                      | Valid values |
   * |---------------------|---------|----------|-----------------------------------------------------------------------------|---------------------------------------------|--------|
   * | NisTrafficRankingId | string  | Yes      | The ID of the network traffic analysis result.                              | task-6462a7b4c4a54b****                     |        |
   * | NextToken           | string  | No       | The paging token. Set this parameter to the NextToken value returned in the previous API call. | 2A07PfBPlzmmNi/75Qca9SK73UfY48/+WBiREjfVfXqMQxtV8XckOg5lk7F2bhC+ |        |
   * | MaxResults          | integer | No       | The paging size. Valid values: 1 to 100. Default value: 20.                 | 20                                          |        |
   * ### Response parameters
   * | Name                | Type    | Description                                    | Example                                      | Valid values |
   * |---------------------|---------|------------------------------------------------|---------------------------------------------|--------|
   * | -                   | object  | RpcResponse                                    |                                             |        |
   * | RequestId           | string  | The request ID.                                | 4DAC4BE1-BEEA-5D84-BE06-E1B796F3B941        |        |
   * | NisTrafficRankingId | string  | The ID of the network traffic analysis result. | task-7619ecb1db9148bab9f4                   |        |
   * | Status              | string  | The task running status.                       | Complete                                    |        |
   * | NextToken           | string  | The token for the next query.                  | LoeJLhK0fsDqYoXkXieZUqB2vWnccJtVnsyKu9KxFFOMQxtV8XckOg5lk7F2bhC+ |        |
   * | MaxResults          | integer | The paging size. Valid values: 1 to 100. Default value: 20. | 20                                          |        |
   * | TotalCount          | integer | The total number of entries returned.          | 72                                          |        |
   * | FlowRankingList     | array   | The list of network traffic analysis results.  |                                             |        |
   * #### FlowRankingList element structure
   * | Name                      | Type   | Description                                                                                       | Example                 | Valid values   |
   * |---------------------------|--------|---------------------------------------------------------------------------------------------------|-------------------------|----------|
   * | Direction                 | string | The traffic direction based on the Alibaba Cloud network resource instance. Valid values:
   * ● in: inbound traffic.
   * ● out: outbound traffic. | in                      | -in / -out |
   * | SourceIp                  | string | The source IP address.
   * ● This field is returned only when 2-tuple statistics are collected.    | 47.92.245.***           |          |
   * | SourcePort                | string | The source port.
   * ● This field is returned only when 5-tuple statistics are collected.          | 5432                    |          |
   * | DestinationIp             | string | The destination IP address.
   * ● This field is returned only when 2-tuple statistics are collected.| 192.168.***.0           |          |
   * | DestinationPort           | string | The destination port.
   * ● This field is returned only when 5-tuple statistics are collected.     | 23                      |          |
   * | Protocol                  | string | The network protocol.
   * ● This field is returned only when 5-tuple statistics are collected.     | TCP                     |          |
   * | Dscp                      | string | The Differentiated Services Code Point (DSCP) value.                                              | 0                       |          |
   * | DestinationRegionNo       | string | The destination region ID.                                                                        | ap-southeast-1          |          |
   * | SourceRegionNo            | string | The source region ID.                                                                             | ap-southeast-1          |          |
   * | TransitRouterAttachmentId | string | The network instance connection ID.                                                               | tr-attach-bfde1cd4cj*** |          |
   * | TransitRouterId           | string | The transit router instance ID.                                                                   | tr-2zefvwy2fz3444***    |          |
   * | TransitRouterPairAttachmentId | string | The transit router peering connection instance ID.                                            | tr-attach-okvj1cd4cjp*** |         |
   * | Bytes                     | number | The bandwidth.                                                                                    | 100                     |          |
   * | Packets                   | number | The number of packets.                                                                            | 100                     |          |
   * | BytesRate                 | number | The traffic ratio.                                                                                | 0.2                     |          |
   * | PacketsLostNoRoute        | number | The number of packets dropped due to no route.                                                    | 2                       |          |
   * | PacketsLostBlackhole      | number | The number of packets dropped due to blackhole routes.                                            | 4                       |          |
   * | PacketsLostTTLExpired     | number | The number of packets dropped due to TTL expiration.                                              | 7                       |          |
   * ---
   * ## TR flow log - VPC connection traffic scenario analysis results.
   * ### Request parameters
   * | Name                | Type    | Required | Description                                                                 | Example                                      | Valid values |
   * |---------------------|---------|----------|-----------------------------------------------------------------------------|---------------------------------------------|--------|
   * | NisTrafficRankingId | string  | Yes      | The ID of the network traffic analysis result.                              | task-6462a7b4c4a54b****                     |        |
   * | NextToken           | string  | No       | The paging token. Set this parameter to the NextToken value returned in the previous API call. | 2A07PfBPlzmmNi/75Qca9SK73UfY48/+WBiREjfVfXqMQxtV8XckOg5lk7F2bhC+ |        |
   * | MaxResults          | integer | No       | The paging size. Valid values: 1 to 100. Default value: 20.                 | 20                                          |        |
   * ### Response parameters
   * | Name                | Type    | Description                                    | Example                                      | Valid values |
   * |---------------------|---------|------------------------------------------------|---------------------------------------------|--------|
   * | -                   | object  | RpcResponse                                    |                                             |        |
   * | RequestId           | string  | The request ID.                                | 4DAC4BE1-BEEA-5D84-BE06-E1B796F3B941        |        |
   * | NisTrafficRankingId | string  | The ID of the network traffic analysis result. | task-7619ecb1db9148bab9f4                   |        |
   * | Status              | string  | The task running status.                       | Complete                                    |        |
   * | NextToken           | string  | The token for the next query.                  | LoeJLhK0fsDqYoXkXieZUqB2vWnccJtVnsyKu9KxFFOMQxtV8XckOg5lk7F2bhC+ |        |
   * | MaxResults          | integer | The paging size. Valid values: 1 to 100. Default value: 20. | 20                                          |        |
   * | TotalCount          | integer | The total number of entries returned.          | 72                                          |        |
   * | FlowRankingList     | array   | The list of network traffic analysis results.  |                                             |        |
   * #### FlowRankingList element structure
   * | Name                                   | Type   | Description                                                                                       | Example                         | Valid values   |
   * |----------------------------------------|--------|---------------------------------------------------------------------------------------------------|---------------------------------|----------|
   * | Direction                              | string | The traffic direction based on the Alibaba Cloud network resource instance. Valid values:
   * ● in: inbound traffic.
   * ● out: outbound traffic. | in                              | -in / -out |
   * | SourceIp                               | string | The source IP address.
   * ● This field is returned only when 2-tuple statistics are collected.    | 47.92.245.***                   |          |
   * | SourcePort                             | string | The source port.
   * ● This field is returned only when 5-tuple statistics are collected.          | 5432                            |          |
   * | DestinationIp                          | string | The destination IP address.
   * ● This field is returned only when 2-tuple statistics are collected.| 192.168.***.0                   |          |
   * | DestinationPort                        | string | The destination port.
   * ● This field is returned only when 5-tuple statistics are collected.     | 23                              |          |
   * | Protocol                               | string | The network protocol.
   * ● This field is returned only when 5-tuple statistics are collected.     | TCP                             |          |
   * | Dscp                                   | string | The Differentiated Services Code Point (DSCP) value.                                              | 0                               |          |
   * | DestinationRegionNo                    | string | The destination region ID.                                                                        | ap-southeast-1                  |          |
   * | SourceRegionNo                         | string | The source region ID.                                                                             | ap-southeast-1                  |          |
   * | TransitRouterAttachmentId              | string | The network instance connection ID.                                                               | tr-attach-bfde1cd4cj***         |          |
   * | TransitRouterId                        | string | The transit router instance ID.                                                                   | tr-2zefvwy2fz3444***            |          |
   * | TransitRouterPairAttachmentId          | string | The transit router peering connection instance ID.                                                 | tr-attach-okvj1cd4cjp***        |          |
   * | TransitRouterSourceResourceId          | string | The source network instance ID.                                                                   | tr-attach-hvve1cd4cjpj***       |          |
   * | TransitRouterSourceAccountId           | string | The account ID of the source network instance.                                                    | 1906814138***                   |          |
   * | TransitRouterSourceVSwitchId           | string | The vSwitch ID of the source TR ENI.                                                              | vsw-ikfdkevlhxpqxuz****         |          |
   * | TransitRouterSourceNetworkInterface    | string | The source TR ENI.                                                                                | eni-8vbf2jxulma***              |          |
   * | TransitRouterSourceAvailableZone       | string | The source zone ID.                                                                               | ap-southeast-1-j                |          |
   * | TransitRouterDestinationResourceId     | string | The destination network instance ID.                                                              | tr-attach-bfve1cd4cjp****       |          |
   * | TransitRouterDestinationAccountId      | string | The account ID of the destination network instance.                                               | 1906814138***                   |          |
   * | TransitRouterDestinationVSwitchId      | string | The vSwitch ID of the destination TR ENI.                                                         | vsw-ikfdkevlhxpqxuz****         |          |
   * | TransitRouterDestinationNetworkInterface | string | The destination TR ENI.                                                                         | eni-7kcf2jxulma***              |          |
   * | TransitRouterDestinationAvailableZone  | string | The destination zone ID.                                                                          | ap-southeast-1-j                |          |
   * | Bytes                                  | number | The bandwidth.                                                                                    | 100                             |          |
   * | Packets                                | number | The number of packets.                                                                            | 100                             |          |
   * | BytesRate                              | number | The traffic ratio.                                                                                | 0.2                             |          |
   * | PacketsLostNoRoute                     | number | The number of packets dropped due to no route.                                                    | 2                               |          |
   * | PacketsLostBlackhole                   | number | The number of packets dropped due to blackhole routes.                                            | 4                               |          |
   * | PacketsLostTTLExpired                  | number | The number of packets dropped due to TTL expiration.                                              | 7                               |          |
   * ---
   * ## TR flow log - VBR traffic scenario analysis results.
   * ### Request parameters
   * | Name                | Type    | Required | Description                                                                 | Example                                      | Valid values |
   * |---------------------|---------|----------|-----------------------------------------------------------------------------|---------------------------------------------|--------|
   * | NisTrafficRankingId | string  | Yes      | The ID of the network traffic analysis result.                              | task-6462a7b4c4a54b****                     |        |
   * | NextToken           | string  | No       | The paging token. Set this parameter to the NextToken value returned in the previous API call. | 2A07PfBPlzmmNi/75Qca9SK73UfY48/+WBiREjfVfXqMQxtV8XckOg5lk7F2bhC+ |        |
   * | MaxResults          | integer | No       | The paging size. Valid values: 1 to 100. Default value: 20.                 | 20                                          |        |
   * ### Response parameters
   * | Name                | Type    | Description                                    | Example                                      | Valid values |
   * |---------------------|---------|------------------------------------------------|---------------------------------------------|--------|
   * | -                   | object  | RpcResponse                                    |                                             |        |
   * | RequestId           | string  | The request ID.                                | 4DAC4BE1-BEEA-5D84-BE06-E1B796F3B941        |        |
   * | NisTrafficRankingId | string  | The ID of the network traffic analysis result. | task-7619ecb1db9148bab9f4                   |        |
   * | Status              | string  | The task running status.                       | Complete                                    |        |
   * | NextToken           | string  | The token for the next query.                  | LoeJLhK0fsDqYoXkXieZUqB2vWnccJtVnsyKu9KxFFOMQxtV8XckOg5lk7F2bhC+ |        |
   * | MaxResults          | integer | The paging size. Valid values: 1 to 100. Default value: 20. | 20                                          |        |
   * | TotalCount          | integer | The total number of entries returned.          | 72                                          |        |
   * | FlowRankingList     | array   | The list of network traffic analysis results.  |                                             |        |
   * #### FlowRankingList element structure
   * | Name                              | Type   | Description                                                                                       | Example                         | Valid values   |
   * |-----------------------------------|--------|---------------------------------------------------------------------------------------------------|---------------------------------|----------|
   * | Direction                         | string | The traffic direction based on the Alibaba Cloud network resource instance. Valid values:
   * ● in: inbound traffic.
   * ● out: outbound traffic. | in                              | -in / -out |
   * | SourceIp                          | string | The source IP address.
   * ● This field is returned only when 2-tuple statistics are collected.    | 47.92.245.***                   |          |
   * | SourcePort                        | string | The source port.
   * ● This field is returned only when 5-tuple statistics are collected.          | 5432                            |          |
   * | DestinationIp                     | string | The destination IP address.
   * ● This field is returned only when 2-tuple statistics are collected.| 192.168.***.0                   |          |
   * | DestinationPort                   | string | The destination port.
   * ● This field is returned only when 5-tuple statistics are collected.     | 23                              |          |
   * | Protocol                          | string | The network protocol.
   * ● This field is returned only when 5-tuple statistics are collected.     | TCP                             |          |
   * | Dscp                              | string | The Differentiated Services Code Point (DSCP) value.                                              | 0                               |          |
   * | DestinationRegionNo               | string | The destination region ID.                                                                        | ap-southeast-1                  |          |
   * | SourceRegionNo                    | string | The source region ID.                                                                             | ap-southeast-1                  |          |
   * | TransitRouterAttachmentId         | string | The network instance connection ID.                                                               | tr-attach-bfde1cd4cj***         |          |
   * | TransitRouterId                   | string | The transit router instance ID.                                                                   | tr-2zefvwy2fz3444***            |          |
   * | TransitRouterPairAttachmentId     | string | The transit router peering connection instance ID.                                                 | tr-attach-okvj1cd4cjp***        |          |
   * | TransitRouterSourceResourceId     | string | The source network instance ID.                                                                   | tr-attach-hvve1cd4cjpj***       |          |
   * | TransitRouterSourceAccountId      | string | The account ID of the source network instance.                                                    | 1906814138***                   |          |
   * | TransitRouterDestinationResourceId| string | The destination network instance ID.                                                              | tr-attach-bfve1cd4cjp****       |          |
   * | TransitRouterDestinationAccountId | string | The account ID of the destination network instance.                                               | 1906814138***                   |          |
   * | Bytes                             | number | The bandwidth.                                                                                    | 100                             |          |
   * | Packets                           | number | The number of packets.                                                                            | 100                             |          |
   * | BytesRate                         | number | The traffic ratio.                                                                                | 0.2                             |          |
   * | PacketsLostNoRoute                | number | The number of packets dropped due to no route.                                                    | 2                               |          |
   * | PacketsLostBlackhole              | number | The number of packets dropped due to blackhole routes.                                            | 4                               |          |
   * | PacketsLostTTLExpired             | number | The number of packets dropped due to TTL expiration.                                              | 7                               |          |
   * ---
   * ## TR flow log - ECR traffic scenario analysis results.
   * ### Request parameters
   * | Name                | Type    | Required | Description                                                                 | Example                                      | Valid values |
   * |---------------------|---------|----------|-----------------------------------------------------------------------------|---------------------------------------------|--------|
   * | NisTrafficRankingId | string  | Yes      | The ID of the network traffic analysis result.                              | task-6462a7b4c4a54b****                     |        |
   * | NextToken           | string  | No       | The paging token. Set this parameter to the NextToken value returned in the previous API call. | 2A07PfBPlzmmNi/75Qca9SK73UfY48/+WBiREjfVfXqMQxtV8XckOg5lk7F2bhC+ |        |
   * | MaxResults          | integer | No       | The paging size. Valid values: 1 to 100. Default value: 20.                 | 20                                          |        |
   * ### Response parameters
   * | Name                | Type    | Description                                    | Example                                      | Valid values |
   * |---------------------|---------|------------------------------------------------|---------------------------------------------|--------|
   * | -                   | object  | RpcResponse                                    |                                             |        |
   * | RequestId           | string  | The request ID.                                | 4DAC4BE1-BEEA-5D84-BE06-E1B796F3B941        |        |
   * | NisTrafficRankingId | string  | The ID of the network traffic analysis result. | task-7619ecb1db9148bab9f4                   |        |
   * | Status              | string  | The task running status.                       | Complete                                    |        |
   * | NextToken           | string  | The token for the next query.                  | LoeJLhK0fsDqYoXkXieZUqB2vWnccJtVnsyKu9KxFFOMQxtV8XckOg5lk7F2bhC+ |        |
   * | MaxResults          | integer | The paging size. Valid values: 1 to 100. Default value: 20. | 20                                          |        |
   * | TotalCount          | integer | The total number of entries returned.          | 72                                          |        |
   * | FlowRankingList     | array   | The list of network traffic analysis results.  |                                             |        |
   * #### FlowRankingList element structure
   * | Name                              | Type   | Description                                                                                       | Example                         | Valid values   |
   * |-----------------------------------|--------|---------------------------------------------------------------------------------------------------|---------------------------------|----------|
   * | Direction                         | string | The traffic direction based on the
   * 
   * @param request - DescribeNisTrafficRankingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNisTrafficRankingResponse
   */
  async describeNisTrafficRankingWithOptions(request: $_model.DescribeNisTrafficRankingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNisTrafficRankingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.nisTrafficRankingId)) {
      query["NisTrafficRankingId"] = request.nisTrafficRankingId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNisTrafficRanking",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNisTrafficRankingResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNisTrafficRankingResponse({}));
  }

  /**
   * Queries the results of NIS traffic ranking analysis.
   * 
   * @remarks
   * [Before using this operation, make sure that you fully understand the billing method and pricing of the NIS Traffic Analyzer.](https://www.alibabacloud.com/help/en/nis/product-overview/billing-method-new-version)
   * Supported analysis scenarios: 
   * - All VPC network traffic analysis
   * - Public VPC network traffic analysis
   * - All TR network traffic analysis
   * - Internet Shared Bandwidth metric analysis
   * ## VPC flow log - All VPC flow log query and analysis results
   * ### Request parameters
   * | Name                | Type    | Required | Description                                                                 | Example                                      | Valid values |
   * |---------------------|---------|----------|-----------------------------------------------------------------------------|---------------------------------------------|--------|
   * | NisTrafficRankingId | string  | Yes      | The ID of the network traffic analysis result.                              | task-6462a7b4c4a54b****                     |        |
   * | NextToken           | string  | No       | The paging token. Set this parameter to the NextToken value returned in the previous API call. | 2A07PfBPlzmmNi/75Qca9SK73UfY48/+WBiREjfVfXqMQxtV8XckOg5lk7F2bhC+ |        |
   * | MaxResults          | integer | No       | The paging size. Valid values: 1 to 100. Default value: 20.                 | 20                                          |        |
   * ### Response parameters
   * | Name                | Type    | Description                                    | Example                                      | Valid values |
   * |---------------------|---------|------------------------------------------------|---------------------------------------------|--------|
   * | -                   | object  | RpcResponse                                    |                                             |        |
   * | RequestId           | string  | The request ID.                                | 4DAC4BE1-BEEA-5D84-BE06-E1B796F3B941        |        |
   * | NisTrafficRankingId | string  | The ID of the network traffic analysis result. | task-7619ecb1db9148bab9f4                   |        |
   * | Status              | string  | The task running status.                       | Complete                                    |        |
   * | NextToken           | string  | The token for the next query.                  | LoeJLhK0fsDqYoXkXieZUqB2vWnccJtVnsyKu9KxFFOMQxtV8XckOg5lk7F2bhC+ |        |
   * | MaxResults          | integer | The paging size. Valid values: 1 to 100. Default value: 20. | 20                                          |        |
   * | TotalCount          | integer | The total number of entries returned.          | 72                                          |        |
   * | FlowRankingList     | array   | The list of network traffic analysis results.  |                                             |        |
   * #### FlowRankingList element structure
   * | Name               | Type   | Description                                                                                       | Example            | Valid values   |
   * |--------------------|--------|---------------------------------------------------------------------------------------------------|--------------------|----------|
   * | RegionId           | string | The region where the flow log resides.                                                            | ap-southeast-1     |          |
   * | VpcId              | string | The VPC ID.                                                                                       | vpc-m5ec6i0h5xss*** |         |
   * | VSwitchId          | string | The vSwitch ID.                                                                                   | vsw-2zeekevlh****  |          |
   * | NetworkInterfaceId | string | The elastic network interface (ENI) ID.                                                           | eni-8vbf2jxul***   |          |
   * | EcsId              | string | The ECS instance ID of the management node.                                                       | i-uf6i1zi6yhq7h*** |          |
   * | TrafficPath        | string | The traffic path.                                                                                 | all                |          |
   * | Direction          | string | The traffic direction based on the Alibaba Cloud network resource instance. Valid values:
   * ● in: inbound traffic.
   * ● out: outbound traffic. | in                 | -in / -out |
   * | SourceIp           | string | The source IP address.
   * ● This field is returned only when 2-tuple statistics are collected.    | 47.92.245.***      |          |
   * | SourcePort         | string | The source port.
   * ● This field is returned only when 5-tuple statistics are collected.          | 5432               |          |
   * | DestinationIp      | string | The destination IP address.
   * ● This field is returned only when 2-tuple statistics are collected.| 192.168.***.0      |          |
   * | DestinationPort    | string | The destination port.
   * ● This field is returned only when 5-tuple statistics are collected.     | 23                 |          |
   * | Protocol           | string | The network protocol.
   * ● This field is returned only when 5-tuple statistics are collected.     | TCP                |          |
   * | Bytes              | number | The bandwidth.                                                                                    | 100                |          |
   * | Packets            | number | The number of packets.                                                                            | 100                |          |
   * | RoundTripTime      | number | The TCP RTT.                                                                                      | 2                  |          |
   * | BytesRate          | number | The traffic ratio.                                                                                | 0.2                |          |
   * ---
   * ## VPC flow log - Public VPC flow log query and analysis results
   * ### Request parameters
   * | Name                | Type    | Required | Description                                                                 | Example                                      | Valid values |
   * |---------------------|---------|----------|-----------------------------------------------------------------------------|---------------------------------------------|--------|
   * | NisTrafficRankingId | string  | Yes      | The ID of the network traffic analysis result.                              | task-6462a7b4c4a54b****                     |        |
   * | NextToken           | string  | No       | The paging token. Set this parameter to the NextToken value returned in the previous API call. | 2A07PfBPlzmmNi/75Qca9SK73UfY48/+WBiREjfVfXqMQxtV8XckOg5lk7F2bhC+ |        |
   * | MaxResults          | integer | No       | The paging size. Valid values: 1 to 100. Default value: 20.                 | 20                                          |        |
   * ### Response parameters
   * | Name                | Type    | Description                                    | Example                                      | Valid values |
   * |---------------------|---------|------------------------------------------------|---------------------------------------------|--------|
   * | -                   | object  | RpcResponse                                    |                                             |        |
   * | RequestId           | string  | The request ID.                                | 4DAC4BE1-BEEA-5D84-BE06-E1B796F3B941        |        |
   * | NisTrafficRankingId | string  | The ID of the network traffic analysis result. | task-7619ecb1db9148bab9f4                   |        |
   * | Status              | string  | The task running status.                       | Complete                                    |        |
   * | NextToken           | string  | The token for the next query.                  | LoeJLhK0fsDqYoXkXieZUqB2vWnccJtVnsyKu9KxFFOMQxtV8XckOg5lk7F2bhC+ |        |
   * | MaxResults          | integer | The paging size. Valid values: 1 to 100. Default value: 20. | 20                                          |        |
   * | TotalCount          | integer | The total number of entries returned.          | 72                                          |        |
   * | FlowRankingList     | array   | The list of network traffic analysis results.  |                                             |        |
   * #### FlowRankingList element structure
   * | Name               | Type   | Description                                                                                       | Example                | Valid values   |
   * |--------------------|--------|---------------------------------------------------------------------------------------------------|------------------------|----------|
   * | RegionId           | string | The region where the flow log resides.                                                            | ap-southeast-1         |          |
   * | VpcId              | string | The VPC ID.                                                                                       | vpc-m5ec6i0h5xss***    |          |
   * | VSwitchId          | string | The vSwitch ID.                                                                                   | vsw-2zeekevlh****      |          |
   * | NetworkInterfaceId | string | The elastic network interface (ENI) ID.                                                           | eni-8vbf2jxul***       |          |
   * | EcsId              | string | The ECS instance ID of the management node.                                                       | i-uf6i1zi6yhq7h***     |          |
   * | TrafficPath        | string | The traffic path.                                                                                 | all                    |          |
   * | Direction          | string | The traffic direction based on the Alibaba Cloud network resource instance. Valid values:
   * ● in: inbound traffic.
   * ● out: outbound traffic. | in                     | -in / -out |
   * | SourceIp           | string | The source IP address.
   * ● This field is returned only when 2-tuple statistics are collected.    | 47.92.245.***          |          |
   * | SourcePort         | string | The source port.
   * ● This field is returned only when 5-tuple statistics are collected.          | 5432                   |          |
   * | DestinationIp      | string | The destination IP address.
   * ● This field is returned only when 2-tuple statistics are collected.| 192.168.***.0          |          |
   * | DestinationPort    | string | The destination port.
   * ● This field is returned only when 5-tuple statistics are collected.     | 23                     |          |
   * | Protocol           | string | The network protocol.
   * ● This field is returned only when 5-tuple statistics are collected.     | TCP                    |          |
   * | ClientCountry      | string | The country of the client.                                                                        | China                  |          |
   * | ClientProvince     | string | The province of the client.                                                                       | Hong Kong SAR          |          |
   * | ClientCity         | string | The city of the client.                                                                           | Kowloon                |          |
   * | ClientIsp          | string | The network service provider.                                                                     | Alibaba Cloud          |          |
   * | ClientAsn          | string | The autonomous system number.                                                                     | 45102                  |          |
   * | Bytes              | number | The bandwidth.                                                                                    | 100                    |          |
   * | Packets            | number | The number of packets.                                                                            | 100                    |          |
   * | RoundTripTime      | number | The TCP RTT.                                                                                      | 2                      |          |
   * | BytesRate          | number | The traffic ratio.                                                                                | 0.2                    |          |
   * ---
   * ## TR flow log - TR cross-region scenario analysis results.
   * ### Request parameters
   * | Name                | Type    | Required | Description                                                                 | Example                                      | Valid values |
   * |---------------------|---------|----------|-----------------------------------------------------------------------------|---------------------------------------------|--------|
   * | NisTrafficRankingId | string  | Yes      | The ID of the network traffic analysis result.                              | task-6462a7b4c4a54b****                     |        |
   * | NextToken           | string  | No       | The paging token. Set this parameter to the NextToken value returned in the previous API call. | 2A07PfBPlzmmNi/75Qca9SK73UfY48/+WBiREjfVfXqMQxtV8XckOg5lk7F2bhC+ |        |
   * | MaxResults          | integer | No       | The paging size. Valid values: 1 to 100. Default value: 20.                 | 20                                          |        |
   * ### Response parameters
   * | Name                | Type    | Description                                    | Example                                      | Valid values |
   * |---------------------|---------|------------------------------------------------|---------------------------------------------|--------|
   * | -                   | object  | RpcResponse                                    |                                             |        |
   * | RequestId           | string  | The request ID.                                | 4DAC4BE1-BEEA-5D84-BE06-E1B796F3B941        |        |
   * | NisTrafficRankingId | string  | The ID of the network traffic analysis result. | task-7619ecb1db9148bab9f4                   |        |
   * | Status              | string  | The task running status.                       | Complete                                    |        |
   * | NextToken           | string  | The token for the next query.                  | LoeJLhK0fsDqYoXkXieZUqB2vWnccJtVnsyKu9KxFFOMQxtV8XckOg5lk7F2bhC+ |        |
   * | MaxResults          | integer | The paging size. Valid values: 1 to 100. Default value: 20. | 20                                          |        |
   * | TotalCount          | integer | The total number of entries returned.          | 72                                          |        |
   * | FlowRankingList     | array   | The list of network traffic analysis results.  |                                             |        |
   * #### FlowRankingList element structure
   * | Name                      | Type   | Description                                                                                       | Example                 | Valid values   |
   * |---------------------------|--------|---------------------------------------------------------------------------------------------------|-------------------------|----------|
   * | Direction                 | string | The traffic direction based on the Alibaba Cloud network resource instance. Valid values:
   * ● in: inbound traffic.
   * ● out: outbound traffic. | in                      | -in / -out |
   * | SourceIp                  | string | The source IP address.
   * ● This field is returned only when 2-tuple statistics are collected.    | 47.92.245.***           |          |
   * | SourcePort                | string | The source port.
   * ● This field is returned only when 5-tuple statistics are collected.          | 5432                    |          |
   * | DestinationIp             | string | The destination IP address.
   * ● This field is returned only when 2-tuple statistics are collected.| 192.168.***.0           |          |
   * | DestinationPort           | string | The destination port.
   * ● This field is returned only when 5-tuple statistics are collected.     | 23                      |          |
   * | Protocol                  | string | The network protocol.
   * ● This field is returned only when 5-tuple statistics are collected.     | TCP                     |          |
   * | Dscp                      | string | The Differentiated Services Code Point (DSCP) value.                                              | 0                       |          |
   * | DestinationRegionNo       | string | The destination region ID.                                                                        | ap-southeast-1          |          |
   * | SourceRegionNo            | string | The source region ID.                                                                             | ap-southeast-1          |          |
   * | TransitRouterAttachmentId | string | The network instance connection ID.                                                               | tr-attach-bfde1cd4cj*** |          |
   * | TransitRouterId           | string | The transit router instance ID.                                                                   | tr-2zefvwy2fz3444***    |          |
   * | TransitRouterPairAttachmentId | string | The transit router peering connection instance ID.                                            | tr-attach-okvj1cd4cjp*** |         |
   * | Bytes                     | number | The bandwidth.                                                                                    | 100                     |          |
   * | Packets                   | number | The number of packets.                                                                            | 100                     |          |
   * | BytesRate                 | number | The traffic ratio.                                                                                | 0.2                     |          |
   * | PacketsLostNoRoute        | number | The number of packets dropped due to no route.                                                    | 2                       |          |
   * | PacketsLostBlackhole      | number | The number of packets dropped due to blackhole routes.                                            | 4                       |          |
   * | PacketsLostTTLExpired     | number | The number of packets dropped due to TTL expiration.                                              | 7                       |          |
   * ---
   * ## TR flow log - VPC connection traffic scenario analysis results.
   * ### Request parameters
   * | Name                | Type    | Required | Description                                                                 | Example                                      | Valid values |
   * |---------------------|---------|----------|-----------------------------------------------------------------------------|---------------------------------------------|--------|
   * | NisTrafficRankingId | string  | Yes      | The ID of the network traffic analysis result.                              | task-6462a7b4c4a54b****                     |        |
   * | NextToken           | string  | No       | The paging token. Set this parameter to the NextToken value returned in the previous API call. | 2A07PfBPlzmmNi/75Qca9SK73UfY48/+WBiREjfVfXqMQxtV8XckOg5lk7F2bhC+ |        |
   * | MaxResults          | integer | No       | The paging size. Valid values: 1 to 100. Default value: 20.                 | 20                                          |        |
   * ### Response parameters
   * | Name                | Type    | Description                                    | Example                                      | Valid values |
   * |---------------------|---------|------------------------------------------------|---------------------------------------------|--------|
   * | -                   | object  | RpcResponse                                    |                                             |        |
   * | RequestId           | string  | The request ID.                                | 4DAC4BE1-BEEA-5D84-BE06-E1B796F3B941        |        |
   * | NisTrafficRankingId | string  | The ID of the network traffic analysis result. | task-7619ecb1db9148bab9f4                   |        |
   * | Status              | string  | The task running status.                       | Complete                                    |        |
   * | NextToken           | string  | The token for the next query.                  | LoeJLhK0fsDqYoXkXieZUqB2vWnccJtVnsyKu9KxFFOMQxtV8XckOg5lk7F2bhC+ |        |
   * | MaxResults          | integer | The paging size. Valid values: 1 to 100. Default value: 20. | 20                                          |        |
   * | TotalCount          | integer | The total number of entries returned.          | 72                                          |        |
   * | FlowRankingList     | array   | The list of network traffic analysis results.  |                                             |        |
   * #### FlowRankingList element structure
   * | Name                                   | Type   | Description                                                                                       | Example                         | Valid values   |
   * |----------------------------------------|--------|---------------------------------------------------------------------------------------------------|---------------------------------|----------|
   * | Direction                              | string | The traffic direction based on the Alibaba Cloud network resource instance. Valid values:
   * ● in: inbound traffic.
   * ● out: outbound traffic. | in                              | -in / -out |
   * | SourceIp                               | string | The source IP address.
   * ● This field is returned only when 2-tuple statistics are collected.    | 47.92.245.***                   |          |
   * | SourcePort                             | string | The source port.
   * ● This field is returned only when 5-tuple statistics are collected.          | 5432                            |          |
   * | DestinationIp                          | string | The destination IP address.
   * ● This field is returned only when 2-tuple statistics are collected.| 192.168.***.0                   |          |
   * | DestinationPort                        | string | The destination port.
   * ● This field is returned only when 5-tuple statistics are collected.     | 23                              |          |
   * | Protocol                               | string | The network protocol.
   * ● This field is returned only when 5-tuple statistics are collected.     | TCP                             |          |
   * | Dscp                                   | string | The Differentiated Services Code Point (DSCP) value.                                              | 0                               |          |
   * | DestinationRegionNo                    | string | The destination region ID.                                                                        | ap-southeast-1                  |          |
   * | SourceRegionNo                         | string | The source region ID.                                                                             | ap-southeast-1                  |          |
   * | TransitRouterAttachmentId              | string | The network instance connection ID.                                                               | tr-attach-bfde1cd4cj***         |          |
   * | TransitRouterId                        | string | The transit router instance ID.                                                                   | tr-2zefvwy2fz3444***            |          |
   * | TransitRouterPairAttachmentId          | string | The transit router peering connection instance ID.                                                 | tr-attach-okvj1cd4cjp***        |          |
   * | TransitRouterSourceResourceId          | string | The source network instance ID.                                                                   | tr-attach-hvve1cd4cjpj***       |          |
   * | TransitRouterSourceAccountId           | string | The account ID of the source network instance.                                                    | 1906814138***                   |          |
   * | TransitRouterSourceVSwitchId           | string | The vSwitch ID of the source TR ENI.                                                              | vsw-ikfdkevlhxpqxuz****         |          |
   * | TransitRouterSourceNetworkInterface    | string | The source TR ENI.                                                                                | eni-8vbf2jxulma***              |          |
   * | TransitRouterSourceAvailableZone       | string | The source zone ID.                                                                               | ap-southeast-1-j                |          |
   * | TransitRouterDestinationResourceId     | string | The destination network instance ID.                                                              | tr-attach-bfve1cd4cjp****       |          |
   * | TransitRouterDestinationAccountId      | string | The account ID of the destination network instance.                                               | 1906814138***                   |          |
   * | TransitRouterDestinationVSwitchId      | string | The vSwitch ID of the destination TR ENI.                                                         | vsw-ikfdkevlhxpqxuz****         |          |
   * | TransitRouterDestinationNetworkInterface | string | The destination TR ENI.                                                                         | eni-7kcf2jxulma***              |          |
   * | TransitRouterDestinationAvailableZone  | string | The destination zone ID.                                                                          | ap-southeast-1-j                |          |
   * | Bytes                                  | number | The bandwidth.                                                                                    | 100                             |          |
   * | Packets                                | number | The number of packets.                                                                            | 100                             |          |
   * | BytesRate                              | number | The traffic ratio.                                                                                | 0.2                             |          |
   * | PacketsLostNoRoute                     | number | The number of packets dropped due to no route.                                                    | 2                               |          |
   * | PacketsLostBlackhole                   | number | The number of packets dropped due to blackhole routes.                                            | 4                               |          |
   * | PacketsLostTTLExpired                  | number | The number of packets dropped due to TTL expiration.                                              | 7                               |          |
   * ---
   * ## TR flow log - VBR traffic scenario analysis results.
   * ### Request parameters
   * | Name                | Type    | Required | Description                                                                 | Example                                      | Valid values |
   * |---------------------|---------|----------|-----------------------------------------------------------------------------|---------------------------------------------|--------|
   * | NisTrafficRankingId | string  | Yes      | The ID of the network traffic analysis result.                              | task-6462a7b4c4a54b****                     |        |
   * | NextToken           | string  | No       | The paging token. Set this parameter to the NextToken value returned in the previous API call. | 2A07PfBPlzmmNi/75Qca9SK73UfY48/+WBiREjfVfXqMQxtV8XckOg5lk7F2bhC+ |        |
   * | MaxResults          | integer | No       | The paging size. Valid values: 1 to 100. Default value: 20.                 | 20                                          |        |
   * ### Response parameters
   * | Name                | Type    | Description                                    | Example                                      | Valid values |
   * |---------------------|---------|------------------------------------------------|---------------------------------------------|--------|
   * | -                   | object  | RpcResponse                                    |                                             |        |
   * | RequestId           | string  | The request ID.                                | 4DAC4BE1-BEEA-5D84-BE06-E1B796F3B941        |        |
   * | NisTrafficRankingId | string  | The ID of the network traffic analysis result. | task-7619ecb1db9148bab9f4                   |        |
   * | Status              | string  | The task running status.                       | Complete                                    |        |
   * | NextToken           | string  | The token for the next query.                  | LoeJLhK0fsDqYoXkXieZUqB2vWnccJtVnsyKu9KxFFOMQxtV8XckOg5lk7F2bhC+ |        |
   * | MaxResults          | integer | The paging size. Valid values: 1 to 100. Default value: 20. | 20                                          |        |
   * | TotalCount          | integer | The total number of entries returned.          | 72                                          |        |
   * | FlowRankingList     | array   | The list of network traffic analysis results.  |                                             |        |
   * #### FlowRankingList element structure
   * | Name                              | Type   | Description                                                                                       | Example                         | Valid values   |
   * |-----------------------------------|--------|---------------------------------------------------------------------------------------------------|---------------------------------|----------|
   * | Direction                         | string | The traffic direction based on the Alibaba Cloud network resource instance. Valid values:
   * ● in: inbound traffic.
   * ● out: outbound traffic. | in                              | -in / -out |
   * | SourceIp                          | string | The source IP address.
   * ● This field is returned only when 2-tuple statistics are collected.    | 47.92.245.***                   |          |
   * | SourcePort                        | string | The source port.
   * ● This field is returned only when 5-tuple statistics are collected.          | 5432                            |          |
   * | DestinationIp                     | string | The destination IP address.
   * ● This field is returned only when 2-tuple statistics are collected.| 192.168.***.0                   |          |
   * | DestinationPort                   | string | The destination port.
   * ● This field is returned only when 5-tuple statistics are collected.     | 23                              |          |
   * | Protocol                          | string | The network protocol.
   * ● This field is returned only when 5-tuple statistics are collected.     | TCP                             |          |
   * | Dscp                              | string | The Differentiated Services Code Point (DSCP) value.                                              | 0                               |          |
   * | DestinationRegionNo               | string | The destination region ID.                                                                        | ap-southeast-1                  |          |
   * | SourceRegionNo                    | string | The source region ID.                                                                             | ap-southeast-1                  |          |
   * | TransitRouterAttachmentId         | string | The network instance connection ID.                                                               | tr-attach-bfde1cd4cj***         |          |
   * | TransitRouterId                   | string | The transit router instance ID.                                                                   | tr-2zefvwy2fz3444***            |          |
   * | TransitRouterPairAttachmentId     | string | The transit router peering connection instance ID.                                                 | tr-attach-okvj1cd4cjp***        |          |
   * | TransitRouterSourceResourceId     | string | The source network instance ID.                                                                   | tr-attach-hvve1cd4cjpj***       |          |
   * | TransitRouterSourceAccountId      | string | The account ID of the source network instance.                                                    | 1906814138***                   |          |
   * | TransitRouterDestinationResourceId| string | The destination network instance ID.                                                              | tr-attach-bfve1cd4cjp****       |          |
   * | TransitRouterDestinationAccountId | string | The account ID of the destination network instance.                                               | 1906814138***                   |          |
   * | Bytes                             | number | The bandwidth.                                                                                    | 100                             |          |
   * | Packets                           | number | The number of packets.                                                                            | 100                             |          |
   * | BytesRate                         | number | The traffic ratio.                                                                                | 0.2                             |          |
   * | PacketsLostNoRoute                | number | The number of packets dropped due to no route.                                                    | 2                               |          |
   * | PacketsLostBlackhole              | number | The number of packets dropped due to blackhole routes.                                            | 4                               |          |
   * | PacketsLostTTLExpired             | number | The number of packets dropped due to TTL expiration.                                              | 7                               |          |
   * ---
   * ## TR flow log - ECR traffic scenario analysis results.
   * ### Request parameters
   * | Name                | Type    | Required | Description                                                                 | Example                                      | Valid values |
   * |---------------------|---------|----------|-----------------------------------------------------------------------------|---------------------------------------------|--------|
   * | NisTrafficRankingId | string  | Yes      | The ID of the network traffic analysis result.                              | task-6462a7b4c4a54b****                     |        |
   * | NextToken           | string  | No       | The paging token. Set this parameter to the NextToken value returned in the previous API call. | 2A07PfBPlzmmNi/75Qca9SK73UfY48/+WBiREjfVfXqMQxtV8XckOg5lk7F2bhC+ |        |
   * | MaxResults          | integer | No       | The paging size. Valid values: 1 to 100. Default value: 20.                 | 20                                          |        |
   * ### Response parameters
   * | Name                | Type    | Description                                    | Example                                      | Valid values |
   * |---------------------|---------|------------------------------------------------|---------------------------------------------|--------|
   * | -                   | object  | RpcResponse                                    |                                             |        |
   * | RequestId           | string  | The request ID.                                | 4DAC4BE1-BEEA-5D84-BE06-E1B796F3B941        |        |
   * | NisTrafficRankingId | string  | The ID of the network traffic analysis result. | task-7619ecb1db9148bab9f4                   |        |
   * | Status              | string  | The task running status.                       | Complete                                    |        |
   * | NextToken           | string  | The token for the next query.                  | LoeJLhK0fsDqYoXkXieZUqB2vWnccJtVnsyKu9KxFFOMQxtV8XckOg5lk7F2bhC+ |        |
   * | MaxResults          | integer | The paging size. Valid values: 1 to 100. Default value: 20. | 20                                          |        |
   * | TotalCount          | integer | The total number of entries returned.          | 72                                          |        |
   * | FlowRankingList     | array   | The list of network traffic analysis results.  |                                             |        |
   * #### FlowRankingList element structure
   * | Name                              | Type   | Description                                                                                       | Example                         | Valid values   |
   * |-----------------------------------|--------|---------------------------------------------------------------------------------------------------|---------------------------------|----------|
   * | Direction                         | string | The traffic direction based on the
   * 
   * @param request - DescribeNisTrafficRankingRequest
   * @returns DescribeNisTrafficRankingResponse
   */
  async describeNisTrafficRanking(request: $_model.DescribeNisTrafficRankingRequest): Promise<$_model.DescribeNisTrafficRankingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNisTrafficRankingWithOptions(request, runtime);
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
   * - The **init** state indicates that the task is in progress.
   * - The **finish** state indicates that the task is complete. In this state, you can obtain the analysis result.
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
   * - The **init** state indicates that the task is in progress.
   * - The **finish** state indicates that the task is complete. In this state, you can obtain the analysis result.
   * 
   * @param request - GetNetworkReachableAnalysisRequest
   * @returns GetNetworkReachableAnalysisResponse
   */
  async getNetworkReachableAnalysis(request: $_model.GetNetworkReachableAnalysisRequest): Promise<$_model.GetNetworkReachableAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNetworkReachableAnalysisWithOptions(request, runtime);
  }

  /**
   * Retrieves detailed monitoring metric trends data for a specified NIS network analysis scenario, including traffic metric trends for network traffic analysis scenarios and performance metric trends for performance observation scenarios.
   * 
   * @remarks
   * Data query result synchronization:
   * - API data is synchronized every 6 hours. You can query current network analysis data only after 6 hours.
   * Supported analysis scenarios: 
   * - Internet performance observation dashboard scenario
   * - Cross-zone internal network performance observation dashboard scenario
   * - Cross-region internal network performance observation dashboard scenario
   * ## Internet performance observation dashboard scenario
   * **Note**
   * The maximum query time span is 24 hours. If not specified, the most recent 1 hour is queried by default. The query result contains one data point per minute.
   * ### **Request parameters**
   * | **Name** | **Type** | **Required** | **Description** |
   * | --- | --- | --- | --- |
   * | RegionNo | string | Yes | The Alibaba Cloud region where the probing source is located. |
   * | ResourceType | string | Yes | Set to **InternetProbing** to query Internet performance monitoring trends. |
   * | MetricName | string | Yes | The metric for which to query trends. Valid value: **rtt**, the round-trip time of probing. |
   * | Dimensions | object[\\] | Yes | The filter information. |
   * | \\-Name | string | Yes | The filter condition. Valid values:
   *  - **Country**: the probing country.
   *  - **Province**: the probing province.
   *  - **Isp**: the probing ISP.
   *  **Note:** Specify at least one of the preceding parameters. |
   * | \\-Value | string | Yes | The filter value corresponding to the filter condition. Examples:
   *  - Country: China
   *  - Province: Zhejiang 
   * - Isp: Alibaba 
   * **Note:** Country and province values are capitalized. The ISP parameter value must match the name displayed in the console. |
   * ### **Response parameters**
   * | **Name** | **Type** | **Description** |
   * | --- | --- | --- |
   * | RequestId | string | The request ID. |
   * | Data | object | The cloud network metric trends data object. |
   * | Metrics | array | The collection of metric trends data. |
   * | \\-TimeStamp | long | The UNIX timestamp in milliseconds. |
   * | \\-Value | double | The metric value corresponding to the **MetricName** input parameter. |
   * | Unit | String | The unit of **Value**. |
   * ## Cross-zone internal network performance observation dashboard scenario
   * **Note**
   * -   If the query time span exceeds 5 days, the query result contains one data point per day.
   *     
   * -   If the query time span exceeds 1 day, the query result contains one data point per hour.
   *     
   * -   If the query time span is less than 1 day, the query result contains one data point per 5 minutes.
   * ### **Request parameters**
   * | **Name** | **Type** | **Required** | **Description** |
   * | --- | --- | --- | --- |
   * | RegionNo | string | Yes | The Alibaba Cloud region. |
   * | ResourceType | string | Yes | Set to **IntranetProbing** to query cross-zone performance monitoring trends. |
   * | MetricName | string | Yes | The metric for which to query trends. Valid value: **rtt**, the round-trip time of probing. |
   * | Dimensions | object[\\] | Yes | The filter information. |
   * | \\-Name | string | Yes | The filter condition. Valid values:
   *  - **SourceZone**: the source zone for probing. This parameter is required.
   *  - **DestinationZone**: the destination zone for probing. This parameter is required. |
   * | \\-Value | string | Yes | The filter value corresponding to the filter condition. Examples:
   *  - SourceZone: cn-hangzhou-j
   *  - DestinationZone: cn-hangzhou-k |
   * ### **Response parameters**
   * | **Name** | **Type** | **Description** |
   * | --- | --- | --- |
   * | RequestId | string | The request ID. |
   * | Data | object | The cloud network metric trends data object. |
   * | Metrics | array | The collection of metric trends data. |
   * | \\-TimeStamp | long | The UNIX timestamp in milliseconds. |
   * | \\-Value | double | The metric value corresponding to the **MetricName** input parameter. |
   * | Unit | String | The unit of **Value**. |
   * ## **Cross-region internal network performance observation dashboard scenario**
   * **Note**
   * -   If the query time span exceeds 5 days, the query result contains one data point per day.
   *     
   * -   If the query time span exceeds 1 day, the query result contains one data point per hour.
   *     
   * -   If the query time span is less than 1 day, the query result contains one data point per 5 minutes.
   * ### **Request parameters**
   * | **Name** | **Type** | **Required** | **Description** |
   * | --- | --- | --- | --- |
   * | RegionNo | string | Yes | The Alibaba Cloud region. |
   * | ResourceType | string | Yes | Set to **IntranetProbing** to query cross-region performance observation rankings. |
   * | Direction | string | Yes | The probing direction. Valid values:
   *  - **in**: probing with RegionNo as the destination.
   *  - **out**: probing with RegionNo as the source. |
   * | MetricName | string | Yes | The metric for which to query trends. Valid value: **rtt**, the round-trip time of probing. |
   * | Dimensions | object[\\] | No | The filter information. |
   * | \\-Name | string | No | The filter condition. Valid value: **DestinationRegionNo**, the destination region for probing. This parameter is required. |
   * | \\-Value | string | No | The destination region ID. Example: DestinationRegionNo: cn-shenzhen |
   * ### **Response parameters**
   * | **Name** | **Type** | **Description** |
   * | --- | --- | --- |
   * | RequestId | string | The request ID. |
   * | Data | object | The cloud network metric trends data object. |
   * | Metrics | array | The collection of metric trends data. |
   * | \\-TimeStamp | long | The UNIX timestamp in milliseconds. |
   * | \\-Value | double | The metric value corresponding to the **MetricName** input parameter. |
   * | Unit | String | The unit of **Value**. |
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
   * Retrieves detailed monitoring metric trends data for a specified NIS network analysis scenario, including traffic metric trends for network traffic analysis scenarios and performance metric trends for performance observation scenarios.
   * 
   * @remarks
   * Data query result synchronization:
   * - API data is synchronized every 6 hours. You can query current network analysis data only after 6 hours.
   * Supported analysis scenarios: 
   * - Internet performance observation dashboard scenario
   * - Cross-zone internal network performance observation dashboard scenario
   * - Cross-region internal network performance observation dashboard scenario
   * ## Internet performance observation dashboard scenario
   * **Note**
   * The maximum query time span is 24 hours. If not specified, the most recent 1 hour is queried by default. The query result contains one data point per minute.
   * ### **Request parameters**
   * | **Name** | **Type** | **Required** | **Description** |
   * | --- | --- | --- | --- |
   * | RegionNo | string | Yes | The Alibaba Cloud region where the probing source is located. |
   * | ResourceType | string | Yes | Set to **InternetProbing** to query Internet performance monitoring trends. |
   * | MetricName | string | Yes | The metric for which to query trends. Valid value: **rtt**, the round-trip time of probing. |
   * | Dimensions | object[\\] | Yes | The filter information. |
   * | \\-Name | string | Yes | The filter condition. Valid values:
   *  - **Country**: the probing country.
   *  - **Province**: the probing province.
   *  - **Isp**: the probing ISP.
   *  **Note:** Specify at least one of the preceding parameters. |
   * | \\-Value | string | Yes | The filter value corresponding to the filter condition. Examples:
   *  - Country: China
   *  - Province: Zhejiang 
   * - Isp: Alibaba 
   * **Note:** Country and province values are capitalized. The ISP parameter value must match the name displayed in the console. |
   * ### **Response parameters**
   * | **Name** | **Type** | **Description** |
   * | --- | --- | --- |
   * | RequestId | string | The request ID. |
   * | Data | object | The cloud network metric trends data object. |
   * | Metrics | array | The collection of metric trends data. |
   * | \\-TimeStamp | long | The UNIX timestamp in milliseconds. |
   * | \\-Value | double | The metric value corresponding to the **MetricName** input parameter. |
   * | Unit | String | The unit of **Value**. |
   * ## Cross-zone internal network performance observation dashboard scenario
   * **Note**
   * -   If the query time span exceeds 5 days, the query result contains one data point per day.
   *     
   * -   If the query time span exceeds 1 day, the query result contains one data point per hour.
   *     
   * -   If the query time span is less than 1 day, the query result contains one data point per 5 minutes.
   * ### **Request parameters**
   * | **Name** | **Type** | **Required** | **Description** |
   * | --- | --- | --- | --- |
   * | RegionNo | string | Yes | The Alibaba Cloud region. |
   * | ResourceType | string | Yes | Set to **IntranetProbing** to query cross-zone performance monitoring trends. |
   * | MetricName | string | Yes | The metric for which to query trends. Valid value: **rtt**, the round-trip time of probing. |
   * | Dimensions | object[\\] | Yes | The filter information. |
   * | \\-Name | string | Yes | The filter condition. Valid values:
   *  - **SourceZone**: the source zone for probing. This parameter is required.
   *  - **DestinationZone**: the destination zone for probing. This parameter is required. |
   * | \\-Value | string | Yes | The filter value corresponding to the filter condition. Examples:
   *  - SourceZone: cn-hangzhou-j
   *  - DestinationZone: cn-hangzhou-k |
   * ### **Response parameters**
   * | **Name** | **Type** | **Description** |
   * | --- | --- | --- |
   * | RequestId | string | The request ID. |
   * | Data | object | The cloud network metric trends data object. |
   * | Metrics | array | The collection of metric trends data. |
   * | \\-TimeStamp | long | The UNIX timestamp in milliseconds. |
   * | \\-Value | double | The metric value corresponding to the **MetricName** input parameter. |
   * | Unit | String | The unit of **Value**. |
   * ## **Cross-region internal network performance observation dashboard scenario**
   * **Note**
   * -   If the query time span exceeds 5 days, the query result contains one data point per day.
   *     
   * -   If the query time span exceeds 1 day, the query result contains one data point per hour.
   *     
   * -   If the query time span is less than 1 day, the query result contains one data point per 5 minutes.
   * ### **Request parameters**
   * | **Name** | **Type** | **Required** | **Description** |
   * | --- | --- | --- | --- |
   * | RegionNo | string | Yes | The Alibaba Cloud region. |
   * | ResourceType | string | Yes | Set to **IntranetProbing** to query cross-region performance observation rankings. |
   * | Direction | string | Yes | The probing direction. Valid values:
   *  - **in**: probing with RegionNo as the destination.
   *  - **out**: probing with RegionNo as the source. |
   * | MetricName | string | Yes | The metric for which to query trends. Valid value: **rtt**, the round-trip time of probing. |
   * | Dimensions | object[\\] | No | The filter information. |
   * | \\-Name | string | No | The filter condition. Valid value: **DestinationRegionNo**, the destination region for probing. This parameter is required. |
   * | \\-Value | string | No | The destination region ID. Example: DestinationRegionNo: cn-shenzhen |
   * ### **Response parameters**
   * | **Name** | **Type** | **Description** |
   * | --- | --- | --- |
   * | RequestId | string | The request ID. |
   * | Data | object | The cloud network metric trends data object. |
   * | Metrics | array | The collection of metric trends data. |
   * | \\-TimeStamp | long | The UNIX timestamp in milliseconds. |
   * | \\-Value | double | The metric value corresponding to the **MetricName** input parameter. |
   * | Unit | String | The unit of **Value**. |
   * 
   * @param request - GetNisNetworkMetricsRequest
   * @returns GetNisNetworkMetricsResponse
   */
  async getNisNetworkMetrics(request: $_model.GetNisNetworkMetricsRequest): Promise<$_model.GetNisNetworkMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNisNetworkMetricsWithOptions(request, runtime);
  }

  /**
   * Supports ranking analysis of traffic flowing through different cloud network resources by using sorting algorithms and data processing capabilities, and sorts detection metrics of Alibaba Cloud performance observation to help you quickly identify network bottlenecks, optimize resource configurations, and improve overall network performance.
   * 
   * @remarks
   * Supported analysis scenarios:
   * ## Internet performance observation dashboard scenario.
   * ### **Request parameters**
   * ### **Response parameters**
   * ## Cross-zone internal network performance observation dashboard scenario.
   * ### **Request parameters**
   * ### **Response parameters**
   * ## **Cross-region internal network performance observation dashboard scenario**
   * ### **Request parameters**
   * ### **Response parameters**
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
   * Supports ranking analysis of traffic flowing through different cloud network resources by using sorting algorithms and data processing capabilities, and sorts detection metrics of Alibaba Cloud performance observation to help you quickly identify network bottlenecks, optimize resource configurations, and improve overall network performance.
   * 
   * @remarks
   * Supported analysis scenarios:
   * ## Internet performance observation dashboard scenario.
   * ### **Request parameters**
   * ### **Response parameters**
   * ## Cross-zone internal network performance observation dashboard scenario.
   * ### **Request parameters**
   * ### **Response parameters**
   * ## **Cross-region internal network performance observation dashboard scenario**
   * ### **Request parameters**
   * ### **Response parameters**
   * 
   * @param request - GetNisNetworkRankingRequest
   * @returns GetNisNetworkRankingResponse
   */
  async getNisNetworkRanking(request: $_model.GetNisNetworkRankingRequest): Promise<$_model.GetNisNetworkRankingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNisNetworkRankingWithOptions(request, runtime);
  }

  /**
   * Retrieves the metric trends for network traffic analysis.
   * 
   * @param tmpReq - GetNisTrafficMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNisTrafficMetricsResponse
   */
  async getNisTrafficMetricsWithOptions(tmpReq: $_model.GetNisTrafficMetricsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNisTrafficMetricsResponse> {
    tmpReq.validate();
    let request = new $_model.GetNisTrafficMetricsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "Filter", "json");
    }

    let query = { };
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

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!$dara.isNull(request.scanBy)) {
      query["ScanBy"] = request.scanBy;
    }

    if (!$dara.isNull(request.stepMinutes)) {
      query["StepMinutes"] = request.stepMinutes;
    }

    if (!$dara.isNull(request.storageInterval)) {
      query["StorageInterval"] = request.storageInterval;
    }

    if (!$dara.isNull(request.trafficAnalyzerId)) {
      query["TrafficAnalyzerId"] = request.trafficAnalyzerId;
    }

    if (!$dara.isNull(request.trafficScenario)) {
      query["TrafficScenario"] = request.trafficScenario;
    }

    if (!$dara.isNull(request.tupleDimension)) {
      query["TupleDimension"] = request.tupleDimension;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNisTrafficMetrics",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNisTrafficMetricsResponse>(await this.callApi(params, req, runtime), new $_model.GetNisTrafficMetricsResponse({}));
  }

  /**
   * Retrieves the metric trends for network traffic analysis.
   * 
   * @param request - GetNisTrafficMetricsRequest
   * @returns GetNisTrafficMetricsResponse
   */
  async getNisTrafficMetrics(request: $_model.GetNisTrafficMetricsRequest): Promise<$_model.GetNisTrafficMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNisTrafficMetricsWithOptions(request, runtime);
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
   * Lists the resource types available for inspection.
   * 
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
   * Lists the resource types available for inspection.
   * @returns ListNisInspectionResourceTypeResponse
   */
  async listNisInspectionResourceType(): Promise<$_model.ListNisInspectionResourceTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNisInspectionResourceTypeWithOptions(runtime);
  }

  /**
   * Queries a list of inspection task reports.
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
   * Queries a list of inspection task reports.
   * 
   * @param request - ListNisInspectionTaskReportsRequest
   * @returns ListNisInspectionTaskReportsResponse
   */
  async listNisInspectionTaskReports(request: $_model.ListNisInspectionTaskReportsRequest): Promise<$_model.ListNisInspectionTaskReportsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNisInspectionTaskReportsWithOptions(request, runtime);
  }

  /**
   * Lists the network inspection tasks.
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
   * Lists the network inspection tasks.
   * 
   * @param request - ListNisInspectionTasksRequest
   * @returns ListNisInspectionTasksResponse
   */
  async listNisInspectionTasks(request: $_model.ListNisInspectionTasksRequest): Promise<$_model.ListNisInspectionTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNisInspectionTasksWithOptions(request, runtime);
  }

  /**
   * Starts an inspection task to generate an inspection report.
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
   * Starts an inspection task to generate an inspection report.
   * 
   * @param request - StartNisInspectionTaskRequest
   * @returns StartNisInspectionTaskResponse
   */
  async startNisInspectionTask(request: $_model.StartNisInspectionTaskRequest): Promise<$_model.StartNisInspectionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startNisInspectionTaskWithOptions(request, runtime);
  }

  /**
   * Triggers the NIS traffic analyzer to execute a traffic sorting task within a specified scope.
   * 
   * @remarks
   * [Before using this operation, make sure that you fully understand the billing method and pricing of the NIS traffic analyzer.](https://www.alibabacloud.com/help/en/nis/product-overview/billing-method-new-version)
   * Before using this operation, create a traffic analyzer and add a data source.
   * [Create a traffic analyzer](https://www.alibabacloud.com/help/en/nis/user-guide/traffic-analyzer-management#39d1693bce6yp)
   * [Add a data source](https://www.alibabacloud.com/help/en/nis/user-guide/data-source-management#73845748bfstv)
   * Supported analysis scenarios: 
   * - All VPC network traffic analysis
   * - Internet VPC network traffic analysis
   * - All TR network traffic analysis
   * - Internet Shared Bandwidth metric analysis
   * ## All VPC flow log analysis.
   * ### Request parameters
   * | Name              | Type     | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Example                                     | Valid values                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
   * |-------------------|----------|------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   * | RegionNo          | string   | Yes   | The region where the resource resides.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | cn-shanghai                              | -                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
   * | TrafficAnalyzerId | string   | Yes   | The traffic analyzer ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | nta-262****ca07f                         | -                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
   * | TrafficScenario   | string   | Yes   | The supported analysis scenario:
   * ● All VPC flow log analysis                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Fixed value: VpcFlowLogAll                    | VpcFlowLogAll                                                                                                                                                                                                                                                                                                                                                                                                                                         |
   * | Direction         | string   | Yes   | The network traffic direction based on Alibaba Cloud resources. ● In: Traffic flowing into the elastic network interface (ENI).
   * ● Out: Traffic flowing out of the elastic network interface (ENI).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | In                         |  - In 
   * - Out                                                                                                                                                                                                                                                                                                                                                                                                                                            |
   * | TupleDimension    | string   | Yes   | The traffic storage aggregation dimension.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Tuple1                 | - Tuple1 
   * - Tuple2 
   * - Tuple5                                                                                                                                                                                                                                                                                                                                                                                                                              |
   * | GroupBy           | array    | No   | Specifies multiple traffic dimensions for aggregation and sorting.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |  | -                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
   * |                   | string   | No   | Based on the TupleDimension field, you can specify the following aggregation dimensions:
   * ● When TupleDimension = Tuple1:
   * 　■  VpcId: VPC ID
   * 　■  VSwitchId: vSwitch ID
   * 　■  NetworkInterfaceId: elastic network interfaces (ENIs) ID
   * 　■  EcsId: ECS instance ID
   * 　■  CloudIp: Cloud IP
   * ● When TupleDimension = Tuple2:
   * 　■ VpcId: VPC ID
   * 　■ VSwitchId: vSwitch ID
   * 　■ NetworkInterfaceId: elastic network interfaces (ENIs) ID
   * 　■ EcsId: ECS instance ID
   * 　■ SourceIp: Source IP
   * 　■ DestinationIp: Destination IP
   * 　■ TrafficPath: Traffic path
   * ● When TupleDimension = Tuple5:
   * 　■ VpcId: VPC ID
   * 　■ VSwitchId: vSwitch ID
   * 　■ NetworkInterfaceId: elastic network interfaces (ENIs) ID
   * 　■ EcsId: ECS instance ID
   * 　■ SourceIp: Source IP
   * 　■ DestinationIp: Destination IP
   * 　■ TrafficPath: Traffic path
   * 　■ SourcePort: Source port
   * 　■ DestinationPort: Destination port
   * 　■ Protocol: Network protocol | ["VpcId"]                                | - VpcId
   * - VSwitchId
   * - CloudIp
   * - SourceIp
   * - DestinationIp
   * - Protocol
   * - SourcePort
   * - DestinationPort
   * - TrafficPath
   * - Country
   * - Province
   * - City
   * - Isp
   * - Asn                                                                                                                                                                                                                                          |
   * | OrderBy           | string   | Yes   | Based on the TrafficScenario field, the following traffic metrics are supported for sorting:
   * TrafficScenario = VpcFlowLogAll / VpcFlowLogInternet (VPC flow log scenario):
   * ● Bytes: Bandwidth
   * ● Packets: Packet count
   * ● RoundTripTime: TCP RTT                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Bytes                                    | - Bytes
   * - Packets
   * - RoundTripTime                                                                                                                                                                                                                                                                                                                                                                                                                     |
   * | Filter            | array    | No   | Specifies additional filter conditions for focused traffic analysis.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |                                          | -                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
   * |                   | object   | No   | The filter condition for traffic, a Key-Value-Operator object.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                          | -                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
   * | key               | string   | No   | The supported filter condition label keys are as follows:
   * - When `TupleDimension` is 1-tuple:
   * 　- `FlowAction`: The action type executed on traffic after matching the corresponding rule or policy (**required**, the corresponding value does not support multiple selections)
   * 　- `VpcId`: VPC ID (the corresponding value supports multiple selections)
   * 　- `VSwitchId`: vSwitch ID (the corresponding value supports multiple selections)
   * 　- `NetworkInterfaceId`: elastic network interfaces (ENIs) ID (the corresponding value supports multiple selections)
   * 　- `EcsId`: ECS instance ID (the corresponding value supports multiple selections)
   * 　- `CloudIp`: Cloud IP (the corresponding value supports multiple selections)
   * - When `TupleDimension` is 2-tuple:
   * 　- `FlowAction`: The action type executed on traffic after matching the corresponding rule or policy (**required**, the corresponding value does not support multiple selections)
   * 　- `VpcId`: VPC ID (the corresponding value supports multiple selections)
   * 　- `VSwitchId`: vSwitch ID (the corresponding value supports multiple selections)
   * 　- `NetworkInterfaceId`: elastic network interfaces (ENIs) ID (the corresponding value supports multiple selections)
   * 　- `EcsId`: ECS instance ID (the corresponding value supports multiple selections)
   * 　- `SourceIp`: Source IP (the corresponding value supports multiple selections)
   * 　- `DestinationIp`: Destination IP (the corresponding value supports multiple selections)
   * 　- `TrafficPath`: Traffic path (the corresponding value supports multiple selections)
   * - When `TupleDimension` is 5-tuple:
   * 　- `FlowAction`: The action type executed on traffic after matching the corresponding rule or policy (**required**, the corresponding value does not support multiple selections)
   * 　- `VpcId`: VPC ID (the corresponding value supports multiple selections)
   * 　- `VSwitchId`: vSwitch ID (the corresponding value supports multiple selections)
   * 　- `NetworkInterfaceId`: elastic network interfaces (ENIs) ID (the corresponding value supports multiple selections)
   * 　- `EcsId`: ECS instance ID (the corresponding value supports multiple selections)
   * 　- `SourceIp`: Source IP
   * 　- `DestinationIp`: Destination IP
   * 　- `TrafficPath`: Traffic path (the corresponding value supports multiple selections)
   * 　- `SourcePort`: Source port (the corresponding value supports multiple selections)
   * 　- `DestinationPort`: Destination port (the corresponding value supports multiple selections)
   * 　- `Protocol`: Network protocol (the corresponding value supports multiple selections)
   * - In VPC scenarios, you can also filter by traffic metrics:
   * 　- `MinBytes`: The minimum traffic volume for sorting, in bytes (the corresponding value does not support multiple selections)
   * 　- `MaxBytes`: The maximum traffic volume for sorting, in bytes (the corresponding value does not support multiple selections)
   * 　- `MinRoundTripTime`: The minimum RTT for sorting, in ms (the corresponding value does not support multiple selections)
   * 　- `MaxRoundTripTime`: The maximum RTT for sorting, in ms (the corresponding value does not support multiple selections)
   * 　- `MinPackages`: The minimum packet count for sorting (the corresponding value does not support multiple selections)
   * 　- `MaxPackages`: The maximum packet count for sorting (the corresponding value does not support multiple selections) | FlowAction                               | - FlowAction
   * - VpcId
   * - VSwitchId
   * - NetworkInterfaceId
   * - CloudIp
   * - DestinationIp
   * - SourceIp
   * - EcsId
   * - TrafficPath
   * - SourcePort
   * - DestinationPort
   * - Protocol
   * - MinBytes
   * - MaxBytes
   * - MinRoundTripTime
   * - MaxRoundTripTime
   * - MinPackages
   * - MaxPackages                                                                                                                |
   * | value             | array    | No   | The filter condition values.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |                                          | -                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
   * |                   | string   | No   | The filter value corresponding to the specified key type.
   * When the key is `FlowAction`, the valid values are:
   * 　- `ACCEPT` (default: `Accept`): Traffic allowed by security groups and network ACLs
   * 　- `REJECT`: Traffic denied by security groups and network ACLs                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Accept                                   | When the key is FlowAction: ACCEPT / REJECT                                                                                                                                                                                                                                                                                                                                                              |
   * | Operator          | string   | No   | For specified key types, some support operators for character string matching on the passed value. The supported values are as follows (default: in):
   * ● in: Equals
   * ● not in: Not equals
   * ● like: Contains
   * Based on the TupleDimension and TrafficScenario fields, the support for `like` is as follows:
   * TrafficScenario = VpcFlowLogAll / VpcFlowLogInternet (VPC flow log scenario):
   * The following keys support `like`:
   * 　○ CloudIp
   * 　○ SourceIp
   * 　○ DestinationIp
   * All other keys support only `in` and `not in` operators.                                                                                                                                                                                                                                                                                                                                                                                                                           | in                                       | - not in
   * - in
   * - like                                                                                                                                                                                                                                                                                                                                                                                                                                   |
   * | BeginTime         | long     | Yes   | The start time of the query as a millisecond UNIX timestamp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 1638239092000                            | -                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
   * | EndTime           | long     | Yes   | The end time of the query as a millisecond UNIX timestamp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 1684373700099                            | -                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
   * | Sort              | string   | No   | The sorting order for traffic analysis:
   * ● ASC: Ascending order.
   * ● DESC: Descending order.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Desc                                     | - Desc
   * - Asc                                                                                                                                                                                                                                                                                                                                                                                                                                           |
   * | TopN              | integer  | No   | The number of entries to return for the traffic sorting query.
   * You can specify a custom number. If this field is not specified, all traffic data that meets the specified conditions is sorted and analyzed within the performance limits of traffic analysis data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | 10                                       | -                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
   * | Language          | string   | No   | The language. Valid values: zh-CN, en-US.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | zh-CN                                    | - zh-CN
   * - en-US                                                                                                                                                                                                                                                                                                                                                                                                                                        |
   * | NextToken         | string   | No   | The pagination token. Leave this parameter empty for the first query or when no more results are available. If more results exist, set this to the NextToken value returned by the previous API call.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | 2A07PfBPlzmmNi/75Qca9SK73UfY48/+WBiREjfVfXqMQxtV8XckOg5lk7F2bhC+ | -                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
   * | MaxResults        | integer  | No   | The page size. Valid values: 1 to 100. Default value: 20.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | 20                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                         |
   * | StorageInterval   | integer  | No   | The storage bucket granularity property.
   * The storage bucket granularity specifies the storage aggregation period for the query. Two granularity levels are supported: high-precision (such as 1 minute) and long-period (such as 1 day). The specific granularity is determined by the traffic analysis sampling interval configured for high-precision or long-period traffic statistics when creating or editing the traffic analyzer.
   * - The supported storage granularity values for the traffic analyzer tuple are:
   * 　- `1`: In minutes (1 minute)
   * 　- `10`: In minutes (10 minutes)
   * 　- `60`: In minutes (60 minutes, i.e., 1 hour)
   * 　- `1440`: In minutes (1440 minutes, i.e., 1 day)
   * - The storage bucket granularity serves two typical purposes:
   * 　- High-precision traffic statistics: such as 1-minute, 10-minute, or 60-minute aggregation
   * 　- Long-period traffic statistics: such as 1440-minute (1-day) aggregation
   * - Specify this field during the query to select the storage aggregation period. For example:
   * 　- Pass `10`: Query short-period data aggregated at 10-minute granularity
   * 　- Pass `1440`: Query long-period data aggregated at 1-day granularity | 10                                       | - 1
   * - 10
   * - 60
   * - 1440                                                                                                                                                                                                                                                                                                                                                                                                                                   |
   * ### Response elements
   * | Name                | Type   | Description                                                                                       | Example value                    | Valid values |
   * |---------------------|--------|--------------------------------------------------------------------------------------------|---------------------------|--------|
   * |       | object | RpcResponse <ArrayList>                                                                    |                           | -      |
   * | RequestId           | string | The request ID.                                                                                   | 4DAC4BE1-BEEA-5D84-BE06-E1B796F3B941 | -      |
   * | NisTrafficRankingId | string | The result ID of this traffic ranking analysis. Call the DescribeNisTrafficRanking operation to obtain the final analysis results.    | task-6462a7b4c4a54b****   | -      |
   * ## Internet VPC flow log analysis.
   * ### Request parameters
   * | Name              | Type    | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Example                                     | Valid values                                                                                                                                                                                                                                                                                                           |
   * |-------------------|---------|------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   * | RegionNo          | string  | Yes   | The region where the resource resides.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | cn-shanghai                              | -                                                                                                                                                                                                                                                                                                                |
   * | TrafficAnalyzerId | string  | Yes   | The traffic analyzer ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | nta-262****ca07f                         | -                                                                                                                                                                                                                                                                                                                |
   * | TrafficScenario   | string  | Yes   | The supported analysis scenario:
   * ● Internet VPC flow log analysis                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Fixed value: VpcFlowLogInternet              | VpcFlowLogInternet                                                                                                                                                                                                                                                                                               |
   * | Direction         | string  | Yes   | The network traffic direction based on Alibaba Cloud resources. ● In: Traffic flowing into the elastic network interfaces (ENIs).
   * ● Out: Traffic flowing out of the elastic network interfaces (ENIs).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | In                                       | - In
   * - Out                                                                                                                                                                                                                                                                                                      |
   * | TupleDimension    | string  | Yes   | The traffic storage aggregation dimension.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Tuple1                                   | - Tuple1
   * - Tuple2
   * - Tuple5                                                                                                                                                                                                                                                                                    |
   * | GroupBy           | array   | No   | Specifies multiple traffic dimensions for aggregation and sorting.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                                          | -                                                                                                                                                                                                                                                                                                                |
   * |                   | string  | No   | Based on the TupleDimension field, you can specify the following aggregation dimensions:
   * ● When TupleDimension = Tuple1:
   * 　■ VpcId: VPC ID
   * 　■ VSwitchId: vSwitch ID
   * 　■ NetworkInterfaceId: elastic network interfaces (ENIs) ID
   * 　■ EcsId: ECS instance ID
   * 　■ CloudIp: Cloud IP
   * ● When TupleDimension = Tuple2:
   * 　■ VpcId: VPC ID
   * 　■ VSwitchId: vSwitch ID
   * 　■ NetworkInterfaceId: elastic network interfaces (ENIs) ID
   * 　■ EcsId: ECS instance ID
   * 　■ SourceIp: Source IP
   * 　■ DestinationIp: Destination IP
   * 　■ TrafficPath: Traffic path
   * 　■ `Country`: Client country
   * 　■ `Province`: Client province
   * 　■ `City`: Client city
   * 　■ `Isp`: Internet service provider
   * 　■ `Asn`: Autonomous system number
   * ● When TupleDimension = Tuple5:
   * 　■ VpcId: VPC ID
   * 　■ VSwitchId: vSwitch ID
   * 　■ NetworkInterfaceId: elastic network interfaces (ENIs) ID
   * 　■ EcsId: ECS instance ID
   * 　■ SourceIp: Source IP
   * 　■ DestinationIp: Destination IP
   * 　■ TrafficPath: Traffic path
   * 　■ SourcePort: Source port
   * 　■ DestinationPort: Destination port
   * 　■ Protocol: Network protocol
   * 　■ Country: Client country
   * 　■ Province: Client province
   * 　■ City: Client city
   * 　■ Isp: Internet service provider
   * 　■ Asn: Autonomous system number | ["VpcId"]                                | - VpcId
   * - VSwitchId
   * - CloudIp
   * - SourceIp
   * - DestinationIp
   * - Protocol
   * - SourcePort
   * - DestinationPort
   * - TrafficPath
   * - Country
   * - Province
   * - City
   * - Isp
   * - Asn                                                                                         |
   * | OrderBy           | string  | Yes   | The following traffic metrics are supported for sorting: Bytes, Packets, RoundTripTime.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Bytes                                    | - Bytes
   * - Packets
   * - RoundTripTime                                                                                                                                                                                                                                                                         |
   * | Filter            | array   | No   | Specifies additional filter conditions for focused traffic analysis.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                                          | -                                                                                                                                                                                                                                                                                                                |
   * |                   | object  | No   | The filter condition for traffic, a Key-Value-Operator object.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                          | -                                                                                                                                                                                                                                                                                                                |
   * | key               | string  | No   | The supported filter condition label keys are as follows:
   * - When `TupleDimension` is 1-tuple:
   * 　- `FlowAction`: The action type executed on traffic after matching the corresponding rule or policy (required, the corresponding value does not support multiple selections)
   * 　- `VpcId`: VPC ID (the corresponding value supports multiple selections)
   * 　- `VSwitchId`: vSwitch ID (the corresponding value supports multiple selections)
   * 　- `NetworkInterfaceId`: elastic network interfaces (ENIs) ID (the corresponding value supports multiple selections)
   * 　- `EcsId`: ECS instance ID (the corresponding value supports multiple selections)
   * 　- `CloudIp`: Cloud IP (the corresponding value supports multiple selections)
   * - When `TupleDimension` is 2-tuple:
   * 　- `FlowAction`: The action type executed on traffic after matching the corresponding rule or policy (required, the corresponding value does not support multiple selections)
   * 　- `VpcId`: VPC ID (the corresponding value supports multiple selections)
   * 　- `VSwitchId`: vSwitch ID (the corresponding value supports multiple selections)
   * 　- `NetworkInterfaceId`: elastic network interfaces (ENIs) ID (the corresponding value supports multiple selections)
   * 　- `EcsId`: ECS instance ID (the corresponding value supports multiple selections)
   * 　- `SourceIp`: Source IP (the corresponding value supports multiple selections)
   * 　- `DestinationIp`: Destination IP (the corresponding value supports multiple selections)
   * 　- `TrafficPath`: Traffic path (the corresponding value supports multiple selections)
   * 　- `ClientCountry`: Filter traffic analysis scope by country (the corresponding value supports multiple selections)
   * 　- `ClientCity`: Filter traffic analysis scope by city (the corresponding value supports multiple selections)
   * 　- `ClientAsn`: Filter traffic analysis scope by ASN (the corresponding value supports multiple selections)
   * 　- `ClientIsp`: Filter traffic analysis scope by client ISP (the corresponding value supports multiple selections)
   * - When `TupleDimension` is 5-tuple:
   * 　- `FlowAction`: The action type executed on traffic after matching the corresponding rule or policy (required, the corresponding value does not support multiple selections)
   * 　- `VpcId`: VPC ID (the corresponding value supports multiple selections)
   * 　- `VSwitchId`: vSwitch ID (the corresponding value supports multiple selections)
   * 　- `NetworkInterfaceId`: elastic network interfaces (ENIs) ID (the corresponding value supports multiple selections)
   * 　- `EcsId`: ECS instance ID (the corresponding value supports multiple selections)
   * 　- `SourceIp`: Source IP
   * 　- `DestinationIp`: Destination IP
   * 　- `TrafficPath`: Traffic path (the corresponding value supports multiple selections)
   * 　- `SourcePort`: Source port (the corresponding value supports multiple selections)
   * 　- `DestinationPort`: Destination port (the corresponding value supports multiple selections)
   * 
   * @param tmpReq - StartNisTrafficRankingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartNisTrafficRankingResponse
   */
  async startNisTrafficRankingWithOptions(tmpReq: $_model.StartNisTrafficRankingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartNisTrafficRankingResponse> {
    tmpReq.validate();
    let request = new $_model.StartNisTrafficRankingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "Filter", "json");
    }

    if (!$dara.isNull(tmpReq.groupBy)) {
      request.groupByShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupBy, "GroupBy", "json");
    }

    let query = { };
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

    if (!$dara.isNull(request.groupByShrink)) {
      query["GroupBy"] = request.groupByShrink;
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

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.regionNo)) {
      query["RegionNo"] = request.regionNo;
    }

    if (!$dara.isNull(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!$dara.isNull(request.storageInterval)) {
      query["StorageInterval"] = request.storageInterval;
    }

    if (!$dara.isNull(request.topN)) {
      query["TopN"] = request.topN;
    }

    if (!$dara.isNull(request.trafficAnalyzerId)) {
      query["TrafficAnalyzerId"] = request.trafficAnalyzerId;
    }

    if (!$dara.isNull(request.trafficScenario)) {
      query["TrafficScenario"] = request.trafficScenario;
    }

    if (!$dara.isNull(request.tupleDimension)) {
      query["TupleDimension"] = request.tupleDimension;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartNisTrafficRanking",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartNisTrafficRankingResponse>(await this.callApi(params, req, runtime), new $_model.StartNisTrafficRankingResponse({}));
  }

  /**
   * Triggers the NIS traffic analyzer to execute a traffic sorting task within a specified scope.
   * 
   * @remarks
   * [Before using this operation, make sure that you fully understand the billing method and pricing of the NIS traffic analyzer.](https://www.alibabacloud.com/help/en/nis/product-overview/billing-method-new-version)
   * Before using this operation, create a traffic analyzer and add a data source.
   * [Create a traffic analyzer](https://www.alibabacloud.com/help/en/nis/user-guide/traffic-analyzer-management#39d1693bce6yp)
   * [Add a data source](https://www.alibabacloud.com/help/en/nis/user-guide/data-source-management#73845748bfstv)
   * Supported analysis scenarios: 
   * - All VPC network traffic analysis
   * - Internet VPC network traffic analysis
   * - All TR network traffic analysis
   * - Internet Shared Bandwidth metric analysis
   * ## All VPC flow log analysis.
   * ### Request parameters
   * | Name              | Type     | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Example                                     | Valid values                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
   * |-------------------|----------|------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   * | RegionNo          | string   | Yes   | The region where the resource resides.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | cn-shanghai                              | -                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
   * | TrafficAnalyzerId | string   | Yes   | The traffic analyzer ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | nta-262****ca07f                         | -                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
   * | TrafficScenario   | string   | Yes   | The supported analysis scenario:
   * ● All VPC flow log analysis                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Fixed value: VpcFlowLogAll                    | VpcFlowLogAll                                                                                                                                                                                                                                                                                                                                                                                                                                         |
   * | Direction         | string   | Yes   | The network traffic direction based on Alibaba Cloud resources. ● In: Traffic flowing into the elastic network interface (ENI).
   * ● Out: Traffic flowing out of the elastic network interface (ENI).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | In                         |  - In 
   * - Out                                                                                                                                                                                                                                                                                                                                                                                                                                            |
   * | TupleDimension    | string   | Yes   | The traffic storage aggregation dimension.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Tuple1                 | - Tuple1 
   * - Tuple2 
   * - Tuple5                                                                                                                                                                                                                                                                                                                                                                                                                              |
   * | GroupBy           | array    | No   | Specifies multiple traffic dimensions for aggregation and sorting.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |  | -                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
   * |                   | string   | No   | Based on the TupleDimension field, you can specify the following aggregation dimensions:
   * ● When TupleDimension = Tuple1:
   * 　■  VpcId: VPC ID
   * 　■  VSwitchId: vSwitch ID
   * 　■  NetworkInterfaceId: elastic network interfaces (ENIs) ID
   * 　■  EcsId: ECS instance ID
   * 　■  CloudIp: Cloud IP
   * ● When TupleDimension = Tuple2:
   * 　■ VpcId: VPC ID
   * 　■ VSwitchId: vSwitch ID
   * 　■ NetworkInterfaceId: elastic network interfaces (ENIs) ID
   * 　■ EcsId: ECS instance ID
   * 　■ SourceIp: Source IP
   * 　■ DestinationIp: Destination IP
   * 　■ TrafficPath: Traffic path
   * ● When TupleDimension = Tuple5:
   * 　■ VpcId: VPC ID
   * 　■ VSwitchId: vSwitch ID
   * 　■ NetworkInterfaceId: elastic network interfaces (ENIs) ID
   * 　■ EcsId: ECS instance ID
   * 　■ SourceIp: Source IP
   * 　■ DestinationIp: Destination IP
   * 　■ TrafficPath: Traffic path
   * 　■ SourcePort: Source port
   * 　■ DestinationPort: Destination port
   * 　■ Protocol: Network protocol | ["VpcId"]                                | - VpcId
   * - VSwitchId
   * - CloudIp
   * - SourceIp
   * - DestinationIp
   * - Protocol
   * - SourcePort
   * - DestinationPort
   * - TrafficPath
   * - Country
   * - Province
   * - City
   * - Isp
   * - Asn                                                                                                                                                                                                                                          |
   * | OrderBy           | string   | Yes   | Based on the TrafficScenario field, the following traffic metrics are supported for sorting:
   * TrafficScenario = VpcFlowLogAll / VpcFlowLogInternet (VPC flow log scenario):
   * ● Bytes: Bandwidth
   * ● Packets: Packet count
   * ● RoundTripTime: TCP RTT                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Bytes                                    | - Bytes
   * - Packets
   * - RoundTripTime                                                                                                                                                                                                                                                                                                                                                                                                                     |
   * | Filter            | array    | No   | Specifies additional filter conditions for focused traffic analysis.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |                                          | -                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
   * |                   | object   | No   | The filter condition for traffic, a Key-Value-Operator object.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                          | -                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
   * | key               | string   | No   | The supported filter condition label keys are as follows:
   * - When `TupleDimension` is 1-tuple:
   * 　- `FlowAction`: The action type executed on traffic after matching the corresponding rule or policy (**required**, the corresponding value does not support multiple selections)
   * 　- `VpcId`: VPC ID (the corresponding value supports multiple selections)
   * 　- `VSwitchId`: vSwitch ID (the corresponding value supports multiple selections)
   * 　- `NetworkInterfaceId`: elastic network interfaces (ENIs) ID (the corresponding value supports multiple selections)
   * 　- `EcsId`: ECS instance ID (the corresponding value supports multiple selections)
   * 　- `CloudIp`: Cloud IP (the corresponding value supports multiple selections)
   * - When `TupleDimension` is 2-tuple:
   * 　- `FlowAction`: The action type executed on traffic after matching the corresponding rule or policy (**required**, the corresponding value does not support multiple selections)
   * 　- `VpcId`: VPC ID (the corresponding value supports multiple selections)
   * 　- `VSwitchId`: vSwitch ID (the corresponding value supports multiple selections)
   * 　- `NetworkInterfaceId`: elastic network interfaces (ENIs) ID (the corresponding value supports multiple selections)
   * 　- `EcsId`: ECS instance ID (the corresponding value supports multiple selections)
   * 　- `SourceIp`: Source IP (the corresponding value supports multiple selections)
   * 　- `DestinationIp`: Destination IP (the corresponding value supports multiple selections)
   * 　- `TrafficPath`: Traffic path (the corresponding value supports multiple selections)
   * - When `TupleDimension` is 5-tuple:
   * 　- `FlowAction`: The action type executed on traffic after matching the corresponding rule or policy (**required**, the corresponding value does not support multiple selections)
   * 　- `VpcId`: VPC ID (the corresponding value supports multiple selections)
   * 　- `VSwitchId`: vSwitch ID (the corresponding value supports multiple selections)
   * 　- `NetworkInterfaceId`: elastic network interfaces (ENIs) ID (the corresponding value supports multiple selections)
   * 　- `EcsId`: ECS instance ID (the corresponding value supports multiple selections)
   * 　- `SourceIp`: Source IP
   * 　- `DestinationIp`: Destination IP
   * 　- `TrafficPath`: Traffic path (the corresponding value supports multiple selections)
   * 　- `SourcePort`: Source port (the corresponding value supports multiple selections)
   * 　- `DestinationPort`: Destination port (the corresponding value supports multiple selections)
   * 　- `Protocol`: Network protocol (the corresponding value supports multiple selections)
   * - In VPC scenarios, you can also filter by traffic metrics:
   * 　- `MinBytes`: The minimum traffic volume for sorting, in bytes (the corresponding value does not support multiple selections)
   * 　- `MaxBytes`: The maximum traffic volume for sorting, in bytes (the corresponding value does not support multiple selections)
   * 　- `MinRoundTripTime`: The minimum RTT for sorting, in ms (the corresponding value does not support multiple selections)
   * 　- `MaxRoundTripTime`: The maximum RTT for sorting, in ms (the corresponding value does not support multiple selections)
   * 　- `MinPackages`: The minimum packet count for sorting (the corresponding value does not support multiple selections)
   * 　- `MaxPackages`: The maximum packet count for sorting (the corresponding value does not support multiple selections) | FlowAction                               | - FlowAction
   * - VpcId
   * - VSwitchId
   * - NetworkInterfaceId
   * - CloudIp
   * - DestinationIp
   * - SourceIp
   * - EcsId
   * - TrafficPath
   * - SourcePort
   * - DestinationPort
   * - Protocol
   * - MinBytes
   * - MaxBytes
   * - MinRoundTripTime
   * - MaxRoundTripTime
   * - MinPackages
   * - MaxPackages                                                                                                                |
   * | value             | array    | No   | The filter condition values.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |                                          | -                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
   * |                   | string   | No   | The filter value corresponding to the specified key type.
   * When the key is `FlowAction`, the valid values are:
   * 　- `ACCEPT` (default: `Accept`): Traffic allowed by security groups and network ACLs
   * 　- `REJECT`: Traffic denied by security groups and network ACLs                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Accept                                   | When the key is FlowAction: ACCEPT / REJECT                                                                                                                                                                                                                                                                                                                                                              |
   * | Operator          | string   | No   | For specified key types, some support operators for character string matching on the passed value. The supported values are as follows (default: in):
   * ● in: Equals
   * ● not in: Not equals
   * ● like: Contains
   * Based on the TupleDimension and TrafficScenario fields, the support for `like` is as follows:
   * TrafficScenario = VpcFlowLogAll / VpcFlowLogInternet (VPC flow log scenario):
   * The following keys support `like`:
   * 　○ CloudIp
   * 　○ SourceIp
   * 　○ DestinationIp
   * All other keys support only `in` and `not in` operators.                                                                                                                                                                                                                                                                                                                                                                                                                           | in                                       | - not in
   * - in
   * - like                                                                                                                                                                                                                                                                                                                                                                                                                                   |
   * | BeginTime         | long     | Yes   | The start time of the query as a millisecond UNIX timestamp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 1638239092000                            | -                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
   * | EndTime           | long     | Yes   | The end time of the query as a millisecond UNIX timestamp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 1684373700099                            | -                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
   * | Sort              | string   | No   | The sorting order for traffic analysis:
   * ● ASC: Ascending order.
   * ● DESC: Descending order.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Desc                                     | - Desc
   * - Asc                                                                                                                                                                                                                                                                                                                                                                                                                                           |
   * | TopN              | integer  | No   | The number of entries to return for the traffic sorting query.
   * You can specify a custom number. If this field is not specified, all traffic data that meets the specified conditions is sorted and analyzed within the performance limits of traffic analysis data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | 10                                       | -                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
   * | Language          | string   | No   | The language. Valid values: zh-CN, en-US.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | zh-CN                                    | - zh-CN
   * - en-US                                                                                                                                                                                                                                                                                                                                                                                                                                        |
   * | NextToken         | string   | No   | The pagination token. Leave this parameter empty for the first query or when no more results are available. If more results exist, set this to the NextToken value returned by the previous API call.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | 2A07PfBPlzmmNi/75Qca9SK73UfY48/+WBiREjfVfXqMQxtV8XckOg5lk7F2bhC+ | -                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
   * | MaxResults        | integer  | No   | The page size. Valid values: 1 to 100. Default value: 20.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | 20                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                         |
   * | StorageInterval   | integer  | No   | The storage bucket granularity property.
   * The storage bucket granularity specifies the storage aggregation period for the query. Two granularity levels are supported: high-precision (such as 1 minute) and long-period (such as 1 day). The specific granularity is determined by the traffic analysis sampling interval configured for high-precision or long-period traffic statistics when creating or editing the traffic analyzer.
   * - The supported storage granularity values for the traffic analyzer tuple are:
   * 　- `1`: In minutes (1 minute)
   * 　- `10`: In minutes (10 minutes)
   * 　- `60`: In minutes (60 minutes, i.e., 1 hour)
   * 　- `1440`: In minutes (1440 minutes, i.e., 1 day)
   * - The storage bucket granularity serves two typical purposes:
   * 　- High-precision traffic statistics: such as 1-minute, 10-minute, or 60-minute aggregation
   * 　- Long-period traffic statistics: such as 1440-minute (1-day) aggregation
   * - Specify this field during the query to select the storage aggregation period. For example:
   * 　- Pass `10`: Query short-period data aggregated at 10-minute granularity
   * 　- Pass `1440`: Query long-period data aggregated at 1-day granularity | 10                                       | - 1
   * - 10
   * - 60
   * - 1440                                                                                                                                                                                                                                                                                                                                                                                                                                   |
   * ### Response elements
   * | Name                | Type   | Description                                                                                       | Example value                    | Valid values |
   * |---------------------|--------|--------------------------------------------------------------------------------------------|---------------------------|--------|
   * |       | object | RpcResponse <ArrayList>                                                                    |                           | -      |
   * | RequestId           | string | The request ID.                                                                                   | 4DAC4BE1-BEEA-5D84-BE06-E1B796F3B941 | -      |
   * | NisTrafficRankingId | string | The result ID of this traffic ranking analysis. Call the DescribeNisTrafficRanking operation to obtain the final analysis results.    | task-6462a7b4c4a54b****   | -      |
   * ## Internet VPC flow log analysis.
   * ### Request parameters
   * | Name              | Type    | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Example                                     | Valid values                                                                                                                                                                                                                                                                                                           |
   * |-------------------|---------|------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   * | RegionNo          | string  | Yes   | The region where the resource resides.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | cn-shanghai                              | -                                                                                                                                                                                                                                                                                                                |
   * | TrafficAnalyzerId | string  | Yes   | The traffic analyzer ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | nta-262****ca07f                         | -                                                                                                                                                                                                                                                                                                                |
   * | TrafficScenario   | string  | Yes   | The supported analysis scenario:
   * ● Internet VPC flow log analysis                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Fixed value: VpcFlowLogInternet              | VpcFlowLogInternet                                                                                                                                                                                                                                                                                               |
   * | Direction         | string  | Yes   | The network traffic direction based on Alibaba Cloud resources. ● In: Traffic flowing into the elastic network interfaces (ENIs).
   * ● Out: Traffic flowing out of the elastic network interfaces (ENIs).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | In                                       | - In
   * - Out                                                                                                                                                                                                                                                                                                      |
   * | TupleDimension    | string  | Yes   | The traffic storage aggregation dimension.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Tuple1                                   | - Tuple1
   * - Tuple2
   * - Tuple5                                                                                                                                                                                                                                                                                    |
   * | GroupBy           | array   | No   | Specifies multiple traffic dimensions for aggregation and sorting.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                                          | -                                                                                                                                                                                                                                                                                                                |
   * |                   | string  | No   | Based on the TupleDimension field, you can specify the following aggregation dimensions:
   * ● When TupleDimension = Tuple1:
   * 　■ VpcId: VPC ID
   * 　■ VSwitchId: vSwitch ID
   * 　■ NetworkInterfaceId: elastic network interfaces (ENIs) ID
   * 　■ EcsId: ECS instance ID
   * 　■ CloudIp: Cloud IP
   * ● When TupleDimension = Tuple2:
   * 　■ VpcId: VPC ID
   * 　■ VSwitchId: vSwitch ID
   * 　■ NetworkInterfaceId: elastic network interfaces (ENIs) ID
   * 　■ EcsId: ECS instance ID
   * 　■ SourceIp: Source IP
   * 　■ DestinationIp: Destination IP
   * 　■ TrafficPath: Traffic path
   * 　■ `Country`: Client country
   * 　■ `Province`: Client province
   * 　■ `City`: Client city
   * 　■ `Isp`: Internet service provider
   * 　■ `Asn`: Autonomous system number
   * ● When TupleDimension = Tuple5:
   * 　■ VpcId: VPC ID
   * 　■ VSwitchId: vSwitch ID
   * 　■ NetworkInterfaceId: elastic network interfaces (ENIs) ID
   * 　■ EcsId: ECS instance ID
   * 　■ SourceIp: Source IP
   * 　■ DestinationIp: Destination IP
   * 　■ TrafficPath: Traffic path
   * 　■ SourcePort: Source port
   * 　■ DestinationPort: Destination port
   * 　■ Protocol: Network protocol
   * 　■ Country: Client country
   * 　■ Province: Client province
   * 　■ City: Client city
   * 　■ Isp: Internet service provider
   * 　■ Asn: Autonomous system number | ["VpcId"]                                | - VpcId
   * - VSwitchId
   * - CloudIp
   * - SourceIp
   * - DestinationIp
   * - Protocol
   * - SourcePort
   * - DestinationPort
   * - TrafficPath
   * - Country
   * - Province
   * - City
   * - Isp
   * - Asn                                                                                         |
   * | OrderBy           | string  | Yes   | The following traffic metrics are supported for sorting: Bytes, Packets, RoundTripTime.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Bytes                                    | - Bytes
   * - Packets
   * - RoundTripTime                                                                                                                                                                                                                                                                         |
   * | Filter            | array   | No   | Specifies additional filter conditions for focused traffic analysis.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                                          | -                                                                                                                                                                                                                                                                                                                |
   * |                   | object  | No   | The filter condition for traffic, a Key-Value-Operator object.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                          | -                                                                                                                                                                                                                                                                                                                |
   * | key               | string  | No   | The supported filter condition label keys are as follows:
   * - When `TupleDimension` is 1-tuple:
   * 　- `FlowAction`: The action type executed on traffic after matching the corresponding rule or policy (required, the corresponding value does not support multiple selections)
   * 　- `VpcId`: VPC ID (the corresponding value supports multiple selections)
   * 　- `VSwitchId`: vSwitch ID (the corresponding value supports multiple selections)
   * 　- `NetworkInterfaceId`: elastic network interfaces (ENIs) ID (the corresponding value supports multiple selections)
   * 　- `EcsId`: ECS instance ID (the corresponding value supports multiple selections)
   * 　- `CloudIp`: Cloud IP (the corresponding value supports multiple selections)
   * - When `TupleDimension` is 2-tuple:
   * 　- `FlowAction`: The action type executed on traffic after matching the corresponding rule or policy (required, the corresponding value does not support multiple selections)
   * 　- `VpcId`: VPC ID (the corresponding value supports multiple selections)
   * 　- `VSwitchId`: vSwitch ID (the corresponding value supports multiple selections)
   * 　- `NetworkInterfaceId`: elastic network interfaces (ENIs) ID (the corresponding value supports multiple selections)
   * 　- `EcsId`: ECS instance ID (the corresponding value supports multiple selections)
   * 　- `SourceIp`: Source IP (the corresponding value supports multiple selections)
   * 　- `DestinationIp`: Destination IP (the corresponding value supports multiple selections)
   * 　- `TrafficPath`: Traffic path (the corresponding value supports multiple selections)
   * 　- `ClientCountry`: Filter traffic analysis scope by country (the corresponding value supports multiple selections)
   * 　- `ClientCity`: Filter traffic analysis scope by city (the corresponding value supports multiple selections)
   * 　- `ClientAsn`: Filter traffic analysis scope by ASN (the corresponding value supports multiple selections)
   * 　- `ClientIsp`: Filter traffic analysis scope by client ISP (the corresponding value supports multiple selections)
   * - When `TupleDimension` is 5-tuple:
   * 　- `FlowAction`: The action type executed on traffic after matching the corresponding rule or policy (required, the corresponding value does not support multiple selections)
   * 　- `VpcId`: VPC ID (the corresponding value supports multiple selections)
   * 　- `VSwitchId`: vSwitch ID (the corresponding value supports multiple selections)
   * 　- `NetworkInterfaceId`: elastic network interfaces (ENIs) ID (the corresponding value supports multiple selections)
   * 　- `EcsId`: ECS instance ID (the corresponding value supports multiple selections)
   * 　- `SourceIp`: Source IP
   * 　- `DestinationIp`: Destination IP
   * 　- `TrafficPath`: Traffic path (the corresponding value supports multiple selections)
   * 　- `SourcePort`: Source port (the corresponding value supports multiple selections)
   * 　- `DestinationPort`: Destination port (the corresponding value supports multiple selections)
   * 
   * @param request - StartNisTrafficRankingRequest
   * @returns StartNisTrafficRankingResponse
   */
  async startNisTrafficRanking(request: $_model.StartNisTrafficRankingRequest): Promise<$_model.StartNisTrafficRankingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startNisTrafficRankingWithOptions(request, runtime);
  }

  /**
   * Updates an inspection task.
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
   * Updates an inspection task.
   * 
   * @param request - UpdateNisInspectionTaskRequest
   * @returns UpdateNisInspectionTaskResponse
   */
  async updateNisInspectionTask(request: $_model.UpdateNisInspectionTaskRequest): Promise<$_model.UpdateNisInspectionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNisInspectionTaskWithOptions(request, runtime);
  }

}
