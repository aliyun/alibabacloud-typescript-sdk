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
    this._endpoint = this.getEndpoint("mobi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 通过模板创建应用
   * 
   * @param request - CreateAppFromTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppFromTemplateResponse
   */
  async createAppFromTemplateWithOptions(request: $_model.CreateAppFromTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppFromTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actualParameters)) {
      query["ActualParameters"] = request.actualParameters;
    }

    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.connectionsContent)) {
      query["ConnectionsContent"] = request.connectionsContent;
    }

    if (!$dara.isNull(request.databasesContent)) {
      query["DatabasesContent"] = request.databasesContent;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.from)) {
      query["From"] = request.from;
    }

    if (!$dara.isNull(request.icon)) {
      query["Icon"] = request.icon;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.variablesContent)) {
      query["VariablesContent"] = request.variablesContent;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppFromTemplate",
      version: "2024-04-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppFromTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppFromTemplateResponse({}));
  }

  /**
   * 通过模板创建应用
   * 
   * @param request - CreateAppFromTemplateRequest
   * @returns CreateAppFromTemplateResponse
   */
  async createAppFromTemplate(request: $_model.CreateAppFromTemplateRequest): Promise<$_model.CreateAppFromTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppFromTemplateWithOptions(request, runtime);
  }

}
