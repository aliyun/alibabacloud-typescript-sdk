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
    this._endpoint = this.getEndpoint("agentexplorer", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 获取阿里云 Agent Skill 内容
   * 
   * @param request - GetSkillContentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSkillContentResponse
   */
  async getSkillContentWithOptions(skillName: string, request: $_model.GetSkillContentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSkillContentResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSkillContent",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: `/openapi/skills/${$dara.URL.percentEncode(skillName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSkillContentResponse>(await this.callApi(params, req, runtime), new $_model.GetSkillContentResponse({}));
  }

  /**
   * 获取阿里云 Agent Skill 内容
   * 
   * @param request - GetSkillContentRequest
   * @returns GetSkillContentResponse
   */
  async getSkillContent(skillName: string, request: $_model.GetSkillContentRequest): Promise<$_model.GetSkillContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSkillContentWithOptions(skillName, request, headers, runtime);
  }

  /**
   * 列举所有的阿里云 Skills 类目
   * 
   * @param request - ListCategoriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCategoriesResponse
   */
  async listCategoriesWithOptions(request: $_model.ListCategoriesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListCategoriesResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCategories",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: `/openapi/categories`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCategoriesResponse>(await this.callApi(params, req, runtime), new $_model.ListCategoriesResponse({}));
  }

  /**
   * 列举所有的阿里云 Skills 类目
   * 
   * @param request - ListCategoriesRequest
   * @returns ListCategoriesResponse
   */
  async listCategories(request: $_model.ListCategoriesRequest): Promise<$_model.ListCategoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCategoriesWithOptions(request, headers, runtime);
  }

  /**
   * 通过关键词、类目搜索阿里云 Agent Skills
   * 
   * @param request - SearchSkillsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchSkillsResponse
   */
  async searchSkillsWithOptions(request: $_model.SearchSkillsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SearchSkillsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryCode)) {
      query["categoryCode"] = request.categoryCode;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.skip)) {
      query["skip"] = request.skip;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchSkills",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: `/openapi/skills`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchSkillsResponse>(await this.callApi(params, req, runtime), new $_model.SearchSkillsResponse({}));
  }

  /**
   * 通过关键词、类目搜索阿里云 Agent Skills
   * 
   * @param request - SearchSkillsRequest
   * @returns SearchSkillsResponse
   */
  async searchSkills(request: $_model.SearchSkillsRequest): Promise<$_model.SearchSkillsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchSkillsWithOptions(request, headers, runtime);
  }

}
