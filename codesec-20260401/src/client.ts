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
   * List projects for tenant
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
   * List projects for tenant
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
   * List findings for one engine (SAST / SCA)
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
   * List findings for one engine (SAST / SCA)
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
   * List scans for project
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
   * List scans for project
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
