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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("codesec", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Finalize code bundle after client PUT to OSS
   * 
   * @param request - CompleteCodeBundleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompleteCodeBundleResponse
   */
  async completeCodeBundleWithOptions(projectId: string, codeBundleId: string, request: $_model.CompleteCodeBundleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CompleteCodeBundleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.byteSize)) {
      query["byteSize"] = request.byteSize;
    }

    if (!$dara.isNull(request.contentType)) {
      query["contentType"] = request.contentType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CompleteCodeBundle",
      version: "2026-04-01",
      protocol: "HTTPS",
      pathname: `/v1/projects/${$dara.URL.percentEncode(projectId)}/codeBundles/${$dara.URL.percentEncode(codeBundleId)}/complete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CompleteCodeBundleResponse>(await this.callApi(params, req, runtime), new $_model.CompleteCodeBundleResponse({}));
  }

  /**
   * Finalize code bundle after client PUT to OSS
   * 
   * @param request - CompleteCodeBundleRequest
   * @returns CompleteCodeBundleResponse
   */
  async completeCodeBundle(projectId: string, codeBundleId: string, request: $_model.CompleteCodeBundleRequest): Promise<$_model.CompleteCodeBundleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.completeCodeBundleWithOptions(projectId, codeBundleId, request, headers, runtime);
  }

  /**
   * Create pending code bundle with CI metadata and issue direct-to-OSS PUT credentials
   * 
   * @param request - CreateCodeBundleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCodeBundleResponse
   */
  async createCodeBundleWithOptions(projectId: string, request: $_model.CreateCodeBundleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCodeBundleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ciMetadata)) {
      query["ciMetadata"] = request.ciMetadata;
    }

    if (!$dara.isNull(request.filename)) {
      query["filename"] = request.filename;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCodeBundle",
      version: "2026-04-01",
      protocol: "HTTPS",
      pathname: `/v1/projects/${$dara.URL.percentEncode(projectId)}/codeBundles`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCodeBundleResponse>(await this.callApi(params, req, runtime), new $_model.CreateCodeBundleResponse({}));
  }

  /**
   * Create pending code bundle with CI metadata and issue direct-to-OSS PUT credentials
   * 
   * @param request - CreateCodeBundleRequest
   * @returns CreateCodeBundleResponse
   */
  async createCodeBundle(projectId: string, request: $_model.CreateCodeBundleRequest): Promise<$_model.CreateCodeBundleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCodeBundleWithOptions(projectId, request, headers, runtime);
  }

  /**
   * Create project
   * 
   * @param tmpReq - CreateProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectResponse
   */
  async createProjectWithOptions(tmpReq: $_model.CreateProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProjectResponse> {
    tmpReq.validate();
    let request = new $_model.CreateProjectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.engines)) {
      request.enginesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.engines, "engines", "json");
    }

    if (!$dara.isNull(tmpReq.source)) {
      request.sourceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.source, "source", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.enginesShrink)) {
      query["engines"] = request.enginesShrink;
    }

    if (!$dara.isNull(request.instructionPrompt)) {
      query["instructionPrompt"] = request.instructionPrompt;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.sourceShrink)) {
      query["source"] = request.sourceShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProject",
      version: "2026-04-01",
      protocol: "HTTPS",
      pathname: `/v1/projects`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProjectResponse>(await this.callApi(params, req, runtime), new $_model.CreateProjectResponse({}));
  }

  /**
   * Create project
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
   * Create scan
   * 
   * @param request - CreateScanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScanResponse
   */
  async createScanWithOptions(projectId: string, request: $_model.CreateScanRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateScanResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.codeBundleId)) {
      query["codeBundleId"] = request.codeBundleId;
    }

    if (!$dara.isNull(request.kind)) {
      query["kind"] = request.kind;
    }

    if (!$dara.isNull(request.taskName)) {
      query["taskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScan",
      version: "2026-04-01",
      protocol: "HTTPS",
      pathname: `/v1/projects/${$dara.URL.percentEncode(projectId)}/scans`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateScanResponse>(await this.callApi(params, req, runtime), new $_model.CreateScanResponse({}));
  }

  /**
   * Create scan
   * 
   * @param request - CreateScanRequest
   * @returns CreateScanResponse
   */
  async createScan(projectId: string, request: $_model.CreateScanRequest): Promise<$_model.CreateScanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createScanWithOptions(projectId, request, headers, runtime);
  }

  /**
   * Lists projects under the current tenant with pagination. Supports fuzzy match by name or prompt.
   * 
   * @param request - DescribeProjectsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProjectsResponse
   */
  async describeProjectsWithOptions(request: $_model.DescribeProjectsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProjectsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.query)) {
      query["query"] = request.query;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["sortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["sortOrder"] = request.sortOrder;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProjects",
      version: "2026-04-01",
      protocol: "HTTPS",
      pathname: `/v1/projects`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProjectsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProjectsResponse({}));
  }

  /**
   * Lists projects under the current tenant with pagination. Supports fuzzy match by name or prompt.
   * 
   * @param request - DescribeProjectsRequest
   * @returns DescribeProjectsResponse
   */
  async describeProjects(request: $_model.DescribeProjectsRequest): Promise<$_model.DescribeProjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeProjectsWithOptions(request, headers, runtime);
  }

  /**
   * Get scan
   * 
   * @param request - DescribeScanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScanResponse
   */
  async describeScanWithOptions(projectId: string, scanId: string, request: $_model.DescribeScanRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeScanResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScan",
      version: "2026-04-01",
      protocol: "HTTPS",
      pathname: `/v1/projects/${$dara.URL.percentEncode(projectId)}/scans/${$dara.URL.percentEncode(scanId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeScanResponse>(await this.callApi(params, req, runtime), new $_model.DescribeScanResponse({}));
  }

  /**
   * Get scan
   * 
   * @param request - DescribeScanRequest
   * @returns DescribeScanResponse
   */
  async describeScan(projectId: string, scanId: string, request: $_model.DescribeScanRequest): Promise<$_model.DescribeScanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeScanWithOptions(projectId, scanId, request, headers, runtime);
  }

  /**
   * Queries the task result list to retrieve detailed SAST or SCA results for a specific scan.
   * 
   * @param request - DescribeScanResultsByEngineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScanResultsByEngineResponse
   */
  async describeScanResultsByEngineWithOptions(projectId: string, scanId: string, engine: string, request: $_model.DescribeScanResultsByEngineRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeScanResultsByEngineResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baselineState)) {
      query["baselineState"] = request.baselineState;
    }

    if (!$dara.isNull(request.lang)) {
      query["lang"] = request.lang;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.packageName)) {
      query["packageName"] = request.packageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScanResultsByEngine",
      version: "2026-04-01",
      protocol: "HTTPS",
      pathname: `/v1/projects/${$dara.URL.percentEncode(projectId)}/scans/${$dara.URL.percentEncode(scanId)}/results/${$dara.URL.percentEncode(engine)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeScanResultsByEngineResponse>(await this.callApi(params, req, runtime), new $_model.DescribeScanResultsByEngineResponse({}));
  }

  /**
   * Queries the task result list to retrieve detailed SAST or SCA results for a specific scan.
   * 
   * @param request - DescribeScanResultsByEngineRequest
   * @returns DescribeScanResultsByEngineResponse
   */
  async describeScanResultsByEngine(projectId: string, scanId: string, engine: string, request: $_model.DescribeScanResultsByEngineRequest): Promise<$_model.DescribeScanResultsByEngineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeScanResultsByEngineWithOptions(projectId, scanId, engine, request, headers, runtime);
  }

  /**
   * Lists scan tasks under a specified project with pagination.
   * 
   * @param request - DescribeScansRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScansResponse
   */
  async describeScansWithOptions(projectId: string, request: $_model.DescribeScansRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeScansResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.taskName)) {
      query["taskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScans",
      version: "2026-04-01",
      protocol: "HTTPS",
      pathname: `/v1/projects/${$dara.URL.percentEncode(projectId)}/scans`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeScansResponse>(await this.callApi(params, req, runtime), new $_model.DescribeScansResponse({}));
  }

  /**
   * Lists scan tasks under a specified project with pagination.
   * 
   * @param request - DescribeScansRequest
   * @returns DescribeScansResponse
   */
  async describeScans(projectId: string, request: $_model.DescribeScansRequest): Promise<$_model.DescribeScansResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeScansWithOptions(projectId, request, headers, runtime);
  }

}
