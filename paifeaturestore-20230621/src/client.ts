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
    this._endpoint = this.getEndpoint("paifeaturestore", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 检测资源连接状态。
   * 
   * @param request - CheckInstanceDatasourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckInstanceDatasourceResponse
   */
  async checkInstanceDatasourceWithOptions(InstanceId: string, request: $_model.CheckInstanceDatasourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CheckInstanceDatasourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.uri)) {
      body["Uri"] = request.uri;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckInstanceDatasource",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/action/checkdatasource`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckInstanceDatasourceResponse>(await this.callApi(params, req, runtime), new $_model.CheckInstanceDatasourceResponse({}));
  }

  /**
   * 检测资源连接状态。
   * 
   * @param request - CheckInstanceDatasourceRequest
   * @returns CheckInstanceDatasourceResponse
   */
  async checkInstanceDatasource(InstanceId: string, request: $_model.CheckInstanceDatasourceRequest): Promise<$_model.CheckInstanceDatasourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkInstanceDatasourceWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 创建数据源。
   * 
   * @param request - CreateDatasourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatasourceResponse
   */
  async createDatasourceWithOptions(InstanceId: string, request: $_model.CreateDatasourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDatasourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.uri)) {
      body["Uri"] = request.uri;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDatasource",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/datasources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDatasourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateDatasourceResponse({}));
  }

  /**
   * 创建数据源。
   * 
   * @param request - CreateDatasourceRequest
   * @returns CreateDatasourceResponse
   */
  async createDatasource(InstanceId: string, request: $_model.CreateDatasourceRequest): Promise<$_model.CreateDatasourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDatasourceWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 创建特征实体
   * 
   * @param request - CreateFeatureEntityRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFeatureEntityResponse
   */
  async createFeatureEntityWithOptions(InstanceId: string, request: $_model.CreateFeatureEntityRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFeatureEntityResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.joinId)) {
      body["JoinId"] = request.joinId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFeatureEntity",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/featureentities`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFeatureEntityResponse>(await this.callApi(params, req, runtime), new $_model.CreateFeatureEntityResponse({}));
  }

  /**
   * 创建特征实体
   * 
   * @param request - CreateFeatureEntityRequest
   * @returns CreateFeatureEntityResponse
   */
  async createFeatureEntity(InstanceId: string, request: $_model.CreateFeatureEntityRequest): Promise<$_model.CreateFeatureEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFeatureEntityWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 创建特征视图。
   * 
   * @param request - CreateFeatureViewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFeatureViewResponse
   */
  async createFeatureViewWithOptions(InstanceId: string, request: $_model.CreateFeatureViewRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFeatureViewResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.featureEntityId)) {
      body["FeatureEntityId"] = request.featureEntityId;
    }

    if (!$dara.isNull(request.fields)) {
      body["Fields"] = request.fields;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.registerDatasourceId)) {
      body["RegisterDatasourceId"] = request.registerDatasourceId;
    }

    if (!$dara.isNull(request.registerTable)) {
      body["RegisterTable"] = request.registerTable;
    }

    if (!$dara.isNull(request.syncOnlineTable)) {
      body["SyncOnlineTable"] = request.syncOnlineTable;
    }

    if (!$dara.isNull(request.TTL)) {
      body["TTL"] = request.TTL;
    }

    if (!$dara.isNull(request.tags)) {
      body["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.writeMethod)) {
      body["WriteMethod"] = request.writeMethod;
    }

    if (!$dara.isNull(request.writeToFeatureDB)) {
      body["WriteToFeatureDB"] = request.writeToFeatureDB;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFeatureView",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/featureviews`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFeatureViewResponse>(await this.callApi(params, req, runtime), new $_model.CreateFeatureViewResponse({}));
  }

  /**
   * 创建特征视图。
   * 
   * @param request - CreateFeatureViewRequest
   * @returns CreateFeatureViewResponse
   */
  async createFeatureView(InstanceId: string, request: $_model.CreateFeatureViewRequest): Promise<$_model.CreateFeatureViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFeatureViewWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 创建Feature Store实例。
   * 
   * @param request - CreateInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: $_model.CreateInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstance",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceResponse({}));
  }

  /**
   * 创建Feature Store实例。
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: $_model.CreateInstanceRequest): Promise<$_model.CreateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceWithOptions(request, headers, runtime);
  }

  /**
   * 创建label表
   * 
   * @param request - CreateLabelTableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLabelTableResponse
   */
  async createLabelTableWithOptions(InstanceId: string, request: $_model.CreateLabelTableRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLabelTableResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasourceId)) {
      body["DatasourceId"] = request.datasourceId;
    }

    if (!$dara.isNull(request.fields)) {
      body["Fields"] = request.fields;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLabelTable",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/labeltables`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLabelTableResponse>(await this.callApi(params, req, runtime), new $_model.CreateLabelTableResponse({}));
  }

  /**
   * 创建label表
   * 
   * @param request - CreateLabelTableRequest
   * @returns CreateLabelTableResponse
   */
  async createLabelTable(InstanceId: string, request: $_model.CreateLabelTableRequest): Promise<$_model.CreateLabelTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLabelTableWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 创建模型特征。
   * 
   * @param request - CreateModelFeatureRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModelFeatureResponse
   */
  async createModelFeatureWithOptions(InstanceId: string, request: $_model.CreateModelFeatureRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateModelFeatureResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.features)) {
      body["Features"] = request.features;
    }

    if (!$dara.isNull(request.labelPriorityLevel)) {
      body["LabelPriorityLevel"] = request.labelPriorityLevel;
    }

    if (!$dara.isNull(request.labelTableId)) {
      body["LabelTableId"] = request.labelTableId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.sequenceFeatureViewIds)) {
      body["SequenceFeatureViewIds"] = request.sequenceFeatureViewIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateModelFeature",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/modelfeatures`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateModelFeatureResponse>(await this.callApi(params, req, runtime), new $_model.CreateModelFeatureResponse({}));
  }

  /**
   * 创建模型特征。
   * 
   * @param request - CreateModelFeatureRequest
   * @returns CreateModelFeatureResponse
   */
  async createModelFeature(InstanceId: string, request: $_model.CreateModelFeatureRequest): Promise<$_model.CreateModelFeatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModelFeatureWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 创建FeatureStore项目
   * 
   * @param request - CreateProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectResponse
   */
  async createProjectWithOptions(InstanceId: string, request: $_model.CreateProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.offlineDatasourceId)) {
      body["OfflineDatasourceId"] = request.offlineDatasourceId;
    }

    if (!$dara.isNull(request.offlineLifeCycle)) {
      body["OfflineLifeCycle"] = request.offlineLifeCycle;
    }

    if (!$dara.isNull(request.onlineDatasourceId)) {
      body["OnlineDatasourceId"] = request.onlineDatasourceId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProject",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/projects`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProjectResponse>(await this.callApi(params, req, runtime), new $_model.CreateProjectResponse({}));
  }

  /**
   * 创建FeatureStore项目
   * 
   * @param request - CreateProjectRequest
   * @returns CreateProjectResponse
   */
  async createProject(InstanceId: string, request: $_model.CreateProjectRequest): Promise<$_model.CreateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProjectWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 创建feature store服务账户角色
   * 
   * @param request - CreateServiceIdentityRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceIdentityRoleResponse
   */
  async createServiceIdentityRoleWithOptions(request: $_model.CreateServiceIdentityRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceIdentityRoleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.roleName)) {
      body["RoleName"] = request.roleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceIdentityRole",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/serviceidentityroles`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServiceIdentityRoleResponse>(await this.callApi(params, req, runtime), new $_model.CreateServiceIdentityRoleResponse({}));
  }

  /**
   * 创建feature store服务账户角色
   * 
   * @param request - CreateServiceIdentityRoleRequest
   * @returns CreateServiceIdentityRoleResponse
   */
  async createServiceIdentityRole(request: $_model.CreateServiceIdentityRoleRequest): Promise<$_model.CreateServiceIdentityRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceIdentityRoleWithOptions(request, headers, runtime);
  }

  /**
   * 删除指定数据源。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatasourceResponse
   */
  async deleteDatasourceWithOptions(InstanceId: string, DatasourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDatasourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDatasource",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/datasources/${$dara.URL.percentEncode(DatasourceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDatasourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDatasourceResponse({}));
  }

  /**
   * 删除指定数据源。
   * @returns DeleteDatasourceResponse
   */
  async deleteDatasource(InstanceId: string, DatasourceId: string): Promise<$_model.DeleteDatasourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDatasourceWithOptions(InstanceId, DatasourceId, headers, runtime);
  }

  /**
   * 删除指定特征实体
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFeatureEntityResponse
   */
  async deleteFeatureEntityWithOptions(InstanceId: string, FeatureEntityId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFeatureEntityResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFeatureEntity",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/featureentities/${$dara.URL.percentEncode(FeatureEntityId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFeatureEntityResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFeatureEntityResponse({}));
  }

  /**
   * 删除指定特征实体
   * @returns DeleteFeatureEntityResponse
   */
  async deleteFeatureEntity(InstanceId: string, FeatureEntityId: string): Promise<$_model.DeleteFeatureEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFeatureEntityWithOptions(InstanceId, FeatureEntityId, headers, runtime);
  }

  /**
   * 删除指定特征视图。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFeatureViewResponse
   */
  async deleteFeatureViewWithOptions(InstanceId: string, FeatureViewId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFeatureViewResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFeatureView",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/featureviews/${$dara.URL.percentEncode(FeatureViewId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFeatureViewResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFeatureViewResponse({}));
  }

  /**
   * 删除指定特征视图。
   * @returns DeleteFeatureViewResponse
   */
  async deleteFeatureView(InstanceId: string, FeatureViewId: string): Promise<$_model.DeleteFeatureViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFeatureViewWithOptions(InstanceId, FeatureViewId, headers, runtime);
  }

  /**
   * 删除label表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLabelTableResponse
   */
  async deleteLabelTableWithOptions(InstanceId: string, LabelTableId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLabelTableResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLabelTable",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/labeltables/${$dara.URL.percentEncode(LabelTableId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLabelTableResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLabelTableResponse({}));
  }

  /**
   * 删除label表
   * @returns DeleteLabelTableResponse
   */
  async deleteLabelTable(InstanceId: string, LabelTableId: string): Promise<$_model.DeleteLabelTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLabelTableWithOptions(InstanceId, LabelTableId, headers, runtime);
  }

  /**
   * 删除指定模型特征。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelFeatureResponse
   */
  async deleteModelFeatureWithOptions(InstanceId: string, ModelFeatureId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteModelFeatureResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteModelFeature",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/modelfeatures/${$dara.URL.percentEncode(ModelFeatureId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteModelFeatureResponse>(await this.callApi(params, req, runtime), new $_model.DeleteModelFeatureResponse({}));
  }

  /**
   * 删除指定模型特征。
   * @returns DeleteModelFeatureResponse
   */
  async deleteModelFeature(InstanceId: string, ModelFeatureId: string): Promise<$_model.DeleteModelFeatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModelFeatureWithOptions(InstanceId, ModelFeatureId, headers, runtime);
  }

  /**
   * 删除指定Feature Store项目。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProjectResponse
   */
  async deleteProjectWithOptions(InstanceId: string, ProjectId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProjectResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProject",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/projects/${$dara.URL.percentEncode(ProjectId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteProjectResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProjectResponse({}));
  }

  /**
   * 删除指定Feature Store项目。
   * @returns DeleteProjectResponse
   */
  async deleteProject(InstanceId: string, ProjectId: string): Promise<$_model.DeleteProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProjectWithOptions(InstanceId, ProjectId, headers, runtime);
  }

  /**
   * 导出训练集表。
   * 
   * @param request - ExportModelFeatureTrainingSetTableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportModelFeatureTrainingSetTableResponse
   */
  async exportModelFeatureTrainingSetTableWithOptions(InstanceId: string, ModelFeatureId: string, request: $_model.ExportModelFeatureTrainingSetTableRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExportModelFeatureTrainingSetTableResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.featureViewConfig)) {
      body["FeatureViewConfig"] = request.featureViewConfig;
    }

    if (!$dara.isNull(request.labelInputConfig)) {
      body["LabelInputConfig"] = request.labelInputConfig;
    }

    if (!$dara.isNull(request.realTimeIterateInterval)) {
      body["RealTimeIterateInterval"] = request.realTimeIterateInterval;
    }

    if (!$dara.isNull(request.realTimePartitionCountValue)) {
      body["RealTimePartitionCountValue"] = request.realTimePartitionCountValue;
    }

    if (!$dara.isNull(request.trainingSetConfig)) {
      body["TrainingSetConfig"] = request.trainingSetConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportModelFeatureTrainingSetTable",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/modelfeatures/${$dara.URL.percentEncode(ModelFeatureId)}/action/exporttrainingsettable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportModelFeatureTrainingSetTableResponse>(await this.callApi(params, req, runtime), new $_model.ExportModelFeatureTrainingSetTableResponse({}));
  }

  /**
   * 导出训练集表。
   * 
   * @param request - ExportModelFeatureTrainingSetTableRequest
   * @returns ExportModelFeatureTrainingSetTableResponse
   */
  async exportModelFeatureTrainingSetTable(InstanceId: string, ModelFeatureId: string, request: $_model.ExportModelFeatureTrainingSetTableRequest): Promise<$_model.ExportModelFeatureTrainingSetTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.exportModelFeatureTrainingSetTableWithOptions(InstanceId, ModelFeatureId, request, headers, runtime);
  }

  /**
   * 获取数据源详细信息。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatasourceResponse
   */
  async getDatasourceWithOptions(InstanceId: string, DatasourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDatasourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDatasource",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/datasources/${$dara.URL.percentEncode(DatasourceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDatasourceResponse>(await this.callApi(params, req, runtime), new $_model.GetDatasourceResponse({}));
  }

  /**
   * 获取数据源详细信息。
   * @returns GetDatasourceResponse
   */
  async getDatasource(InstanceId: string, DatasourceId: string): Promise<$_model.GetDatasourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatasourceWithOptions(InstanceId, DatasourceId, headers, runtime);
  }

  /**
   * 获取数据源下指定表的详细信息。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatasourceTableResponse
   */
  async getDatasourceTableWithOptions(InstanceId: string, DatasourceId: string, TableName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDatasourceTableResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDatasourceTable",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/datasources/${$dara.URL.percentEncode(DatasourceId)}/tables/${$dara.URL.percentEncode(TableName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDatasourceTableResponse>(await this.callApi(params, req, runtime), new $_model.GetDatasourceTableResponse({}));
  }

  /**
   * 获取数据源下指定表的详细信息。
   * @returns GetDatasourceTableResponse
   */
  async getDatasourceTable(InstanceId: string, DatasourceId: string, TableName: string): Promise<$_model.GetDatasourceTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatasourceTableWithOptions(InstanceId, DatasourceId, TableName, headers, runtime);
  }

  /**
   * 获取特征实体详细信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFeatureEntityResponse
   */
  async getFeatureEntityWithOptions(InstanceId: string, FeatureEntityId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetFeatureEntityResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFeatureEntity",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/featureentities/${$dara.URL.percentEncode(FeatureEntityId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFeatureEntityResponse>(await this.callApi(params, req, runtime), new $_model.GetFeatureEntityResponse({}));
  }

  /**
   * 获取特征实体详细信息
   * @returns GetFeatureEntityResponse
   */
  async getFeatureEntity(InstanceId: string, FeatureEntityId: string): Promise<$_model.GetFeatureEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFeatureEntityWithOptions(InstanceId, FeatureEntityId, headers, runtime);
  }

  /**
   * 获取特征视图详细信息。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFeatureViewResponse
   */
  async getFeatureViewWithOptions(InstanceId: string, FeatureViewId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetFeatureViewResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFeatureView",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/featureviews/${$dara.URL.percentEncode(FeatureViewId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFeatureViewResponse>(await this.callApi(params, req, runtime), new $_model.GetFeatureViewResponse({}));
  }

  /**
   * 获取特征视图详细信息。
   * @returns GetFeatureViewResponse
   */
  async getFeatureView(InstanceId: string, FeatureViewId: string): Promise<$_model.GetFeatureViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFeatureViewWithOptions(InstanceId, FeatureViewId, headers, runtime);
  }

  /**
   * 获取实例详细信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
   */
  async getInstanceWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstance",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceResponse({}));
  }

  /**
   * 获取实例详细信息
   * @returns GetInstanceResponse
   */
  async getInstance(InstanceId: string): Promise<$_model.GetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceWithOptions(InstanceId, headers, runtime);
  }

  /**
   * 获取Label表详细信息。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLabelTableResponse
   */
  async getLabelTableWithOptions(InstanceId: string, LabelTableId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLabelTableResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLabelTable",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/labeltables/${$dara.URL.percentEncode(LabelTableId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLabelTableResponse>(await this.callApi(params, req, runtime), new $_model.GetLabelTableResponse({}));
  }

  /**
   * 获取Label表详细信息。
   * @returns GetLabelTableResponse
   */
  async getLabelTable(InstanceId: string, LabelTableId: string): Promise<$_model.GetLabelTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLabelTableWithOptions(InstanceId, LabelTableId, headers, runtime);
  }

  /**
   * 获取模型特征详情。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModelFeatureResponse
   */
  async getModelFeatureWithOptions(InstanceId: string, ModelFeatureId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetModelFeatureResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetModelFeature",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/modelfeatures/${$dara.URL.percentEncode(ModelFeatureId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetModelFeatureResponse>(await this.callApi(params, req, runtime), new $_model.GetModelFeatureResponse({}));
  }

  /**
   * 获取模型特征详情。
   * @returns GetModelFeatureResponse
   */
  async getModelFeature(InstanceId: string, ModelFeatureId: string): Promise<$_model.GetModelFeatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModelFeatureWithOptions(InstanceId, ModelFeatureId, headers, runtime);
  }

  /**
   * 获取模型特征的FG特征配置信息。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModelFeatureFGFeatureResponse
   */
  async getModelFeatureFGFeatureWithOptions(InstanceId: string, ModelFeatureId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetModelFeatureFGFeatureResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetModelFeatureFGFeature",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/modelfeatures/${$dara.URL.percentEncode(ModelFeatureId)}/fgfeature`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetModelFeatureFGFeatureResponse>(await this.callApi(params, req, runtime), new $_model.GetModelFeatureFGFeatureResponse({}));
  }

  /**
   * 获取模型特征的FG特征配置信息。
   * @returns GetModelFeatureFGFeatureResponse
   */
  async getModelFeatureFGFeature(InstanceId: string, ModelFeatureId: string): Promise<$_model.GetModelFeatureFGFeatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModelFeatureFGFeatureWithOptions(InstanceId, ModelFeatureId, headers, runtime);
  }

  /**
   * 获取模型特征的fg.json文件配置信息。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModelFeatureFGInfoResponse
   */
  async getModelFeatureFGInfoWithOptions(InstanceId: string, ModelFeatureId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetModelFeatureFGInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetModelFeatureFGInfo",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/modelfeatures/${$dara.URL.percentEncode(ModelFeatureId)}/fginfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetModelFeatureFGInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetModelFeatureFGInfoResponse({}));
  }

  /**
   * 获取模型特征的fg.json文件配置信息。
   * @returns GetModelFeatureFGInfoResponse
   */
  async getModelFeatureFGInfo(InstanceId: string, ModelFeatureId: string): Promise<$_model.GetModelFeatureFGInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModelFeatureFGInfoWithOptions(InstanceId, ModelFeatureId, headers, runtime);
  }

  /**
   * 获取指定Feature Store项目详细信息。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectResponse
   */
  async getProjectWithOptions(InstanceId: string, ProjectId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetProjectResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProject",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/projects/${$dara.URL.percentEncode(ProjectId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProjectResponse>(await this.callApi(params, req, runtime), new $_model.GetProjectResponse({}));
  }

  /**
   * 获取指定Feature Store项目详细信息。
   * @returns GetProjectResponse
   */
  async getProject(InstanceId: string, ProjectId: string): Promise<$_model.GetProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectWithOptions(InstanceId, ProjectId, headers, runtime);
  }

  /**
   * 获取项目下特征实体详细信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectFeatureEntityResponse
   */
  async getProjectFeatureEntityWithOptions(InstanceId: string, ProjectId: string, FeatureEntityName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetProjectFeatureEntityResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProjectFeatureEntity",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/projects/${$dara.URL.percentEncode(ProjectId)}/featureentities/${$dara.URL.percentEncode(FeatureEntityName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProjectFeatureEntityResponse>(await this.callApi(params, req, runtime), new $_model.GetProjectFeatureEntityResponse({}));
  }

  /**
   * 获取项目下特征实体详细信息
   * @returns GetProjectFeatureEntityResponse
   */
  async getProjectFeatureEntity(InstanceId: string, ProjectId: string, FeatureEntityName: string): Promise<$_model.GetProjectFeatureEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectFeatureEntityWithOptions(InstanceId, ProjectId, FeatureEntityName, headers, runtime);
  }

  /**
   * 获取feature store服务账户角色。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceIdentityRoleResponse
   */
  async getServiceIdentityRoleWithOptions(RoleName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceIdentityRoleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceIdentityRole",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/serviceidentityroles/${$dara.URL.percentEncode(RoleName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceIdentityRoleResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceIdentityRoleResponse({}));
  }

  /**
   * 获取feature store服务账户角色。
   * @returns GetServiceIdentityRoleResponse
   */
  async getServiceIdentityRole(RoleName: string): Promise<$_model.GetServiceIdentityRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceIdentityRoleWithOptions(RoleName, headers, runtime);
  }

  /**
   * 获取任务详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskResponse
   */
  async getTaskWithOptions(InstanceId: string, TaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTask",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/tasks/${$dara.URL.percentEncode(TaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskResponse({}));
  }

  /**
   * 获取任务详情
   * @returns GetTaskResponse
   */
  async getTask(InstanceId: string, TaskId: string): Promise<$_model.GetTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskWithOptions(InstanceId, TaskId, headers, runtime);
  }

  /**
   * 获取数据源下所有表。
   * 
   * @param request - ListDatasourceTablesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatasourceTablesResponse
   */
  async listDatasourceTablesWithOptions(InstanceId: string, DatasourceId: string, request: $_model.ListDatasourceTablesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDatasourceTablesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatasourceTables",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/datasources/${$dara.URL.percentEncode(DatasourceId)}/tables`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDatasourceTablesResponse>(await this.callApi(params, req, runtime), new $_model.ListDatasourceTablesResponse({}));
  }

  /**
   * 获取数据源下所有表。
   * 
   * @param request - ListDatasourceTablesRequest
   * @returns ListDatasourceTablesResponse
   */
  async listDatasourceTables(InstanceId: string, DatasourceId: string, request: $_model.ListDatasourceTablesRequest): Promise<$_model.ListDatasourceTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDatasourceTablesWithOptions(InstanceId, DatasourceId, request, headers, runtime);
  }

  /**
   * 获取数据源列表。
   * 
   * @param request - ListDatasourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatasourcesResponse
   */
  async listDatasourcesWithOptions(InstanceId: string, request: $_model.ListDatasourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDatasourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatasources",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/datasources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDatasourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListDatasourcesResponse({}));
  }

  /**
   * 获取数据源列表。
   * 
   * @param request - ListDatasourcesRequest
   * @returns ListDatasourcesResponse
   */
  async listDatasources(InstanceId: string, request: $_model.ListDatasourcesRequest): Promise<$_model.ListDatasourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDatasourcesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 创建特征实体列表
   * 
   * @param tmpReq - ListFeatureEntitiesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFeatureEntitiesResponse
   */
  async listFeatureEntitiesWithOptions(InstanceId: string, tmpReq: $_model.ListFeatureEntitiesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListFeatureEntitiesResponse> {
    tmpReq.validate();
    let request = new $_model.ListFeatureEntitiesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.featureEntityIds)) {
      request.featureEntityIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.featureEntityIds, "FeatureEntityIds", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.featureEntityIdsShrink)) {
      query["FeatureEntityIds"] = request.featureEntityIdsShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFeatureEntities",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/featureentities`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFeatureEntitiesResponse>(await this.callApi(params, req, runtime), new $_model.ListFeatureEntitiesResponse({}));
  }

  /**
   * 创建特征实体列表
   * 
   * @param request - ListFeatureEntitiesRequest
   * @returns ListFeatureEntitiesResponse
   */
  async listFeatureEntities(InstanceId: string, request: $_model.ListFeatureEntitiesRequest): Promise<$_model.ListFeatureEntitiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureEntitiesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 获取特征字段血缘关系。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFeatureViewFieldRelationshipsResponse
   */
  async listFeatureViewFieldRelationshipsWithOptions(InstanceId: string, FeatureViewId: string, FieldName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListFeatureViewFieldRelationshipsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFeatureViewFieldRelationships",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/featureviews/${$dara.URL.percentEncode(FeatureViewId)}/fields/${$dara.URL.percentEncode(FieldName)}/relationships`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFeatureViewFieldRelationshipsResponse>(await this.callApi(params, req, runtime), new $_model.ListFeatureViewFieldRelationshipsResponse({}));
  }

  /**
   * 获取特征字段血缘关系。
   * @returns ListFeatureViewFieldRelationshipsResponse
   */
  async listFeatureViewFieldRelationships(InstanceId: string, FeatureViewId: string, FieldName: string): Promise<$_model.ListFeatureViewFieldRelationshipsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureViewFieldRelationshipsWithOptions(InstanceId, FeatureViewId, FieldName, headers, runtime);
  }

  /**
   * 获取特征视图下的在线特征数据。
   * 
   * @param tmpReq - ListFeatureViewOnlineFeaturesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFeatureViewOnlineFeaturesResponse
   */
  async listFeatureViewOnlineFeaturesWithOptions(InstanceId: string, FeatureViewId: string, tmpReq: $_model.ListFeatureViewOnlineFeaturesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListFeatureViewOnlineFeaturesResponse> {
    tmpReq.validate();
    let request = new $_model.ListFeatureViewOnlineFeaturesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.joinIds)) {
      request.joinIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.joinIds, "JoinIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.joinIdsShrink)) {
      query["JoinIds"] = request.joinIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFeatureViewOnlineFeatures",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/featureviews/${$dara.URL.percentEncode(FeatureViewId)}/onlinefeatures`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFeatureViewOnlineFeaturesResponse>(await this.callApi(params, req, runtime), new $_model.ListFeatureViewOnlineFeaturesResponse({}));
  }

  /**
   * 获取特征视图下的在线特征数据。
   * 
   * @param request - ListFeatureViewOnlineFeaturesRequest
   * @returns ListFeatureViewOnlineFeaturesResponse
   */
  async listFeatureViewOnlineFeatures(InstanceId: string, FeatureViewId: string, request: $_model.ListFeatureViewOnlineFeaturesRequest): Promise<$_model.ListFeatureViewOnlineFeaturesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureViewOnlineFeaturesWithOptions(InstanceId, FeatureViewId, request, headers, runtime);
  }

  /**
   * 获取特征视图血缘关系。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFeatureViewRelationshipsResponse
   */
  async listFeatureViewRelationshipsWithOptions(InstanceId: string, FeatureViewId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListFeatureViewRelationshipsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFeatureViewRelationships",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/featureviews/${$dara.URL.percentEncode(FeatureViewId)}/relationships`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFeatureViewRelationshipsResponse>(await this.callApi(params, req, runtime), new $_model.ListFeatureViewRelationshipsResponse({}));
  }

  /**
   * 获取特征视图血缘关系。
   * @returns ListFeatureViewRelationshipsResponse
   */
  async listFeatureViewRelationships(InstanceId: string, FeatureViewId: string): Promise<$_model.ListFeatureViewRelationshipsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureViewRelationshipsWithOptions(InstanceId, FeatureViewId, headers, runtime);
  }

  /**
   * 获取特征视图列表。
   * 
   * @param tmpReq - ListFeatureViewsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFeatureViewsResponse
   */
  async listFeatureViewsWithOptions(InstanceId: string, tmpReq: $_model.ListFeatureViewsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListFeatureViewsResponse> {
    tmpReq.validate();
    let request = new $_model.ListFeatureViewsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.featureViewIds)) {
      request.featureViewIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.featureViewIds, "FeatureViewIds", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.featureName)) {
      query["FeatureName"] = request.featureName;
    }

    if (!$dara.isNull(request.featureViewIdsShrink)) {
      query["FeatureViewIds"] = request.featureViewIdsShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFeatureViews",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/featureviews`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFeatureViewsResponse>(await this.callApi(params, req, runtime), new $_model.ListFeatureViewsResponse({}));
  }

  /**
   * 获取特征视图列表。
   * 
   * @param request - ListFeatureViewsRequest
   * @returns ListFeatureViewsResponse
   */
  async listFeatureViews(InstanceId: string, request: $_model.ListFeatureViewsRequest): Promise<$_model.ListFeatureViewsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeatureViewsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 获取Feature Store实例列表。
   * 
   * @param request - ListInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(request: $_model.ListInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancesResponse({}));
  }

  /**
   * 获取Feature Store实例列表。
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: $_model.ListInstancesRequest): Promise<$_model.ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesWithOptions(request, headers, runtime);
  }

  /**
   * 获取Label表列表。
   * 
   * @param tmpReq - ListLabelTablesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLabelTablesResponse
   */
  async listLabelTablesWithOptions(InstanceId: string, tmpReq: $_model.ListLabelTablesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListLabelTablesResponse> {
    tmpReq.validate();
    let request = new $_model.ListLabelTablesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.labelTableIds)) {
      request.labelTableIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelTableIds, "LabelTableIds", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labelTableIdsShrink)) {
      query["LabelTableIds"] = request.labelTableIdsShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLabelTables",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/labeltables`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLabelTablesResponse>(await this.callApi(params, req, runtime), new $_model.ListLabelTablesResponse({}));
  }

  /**
   * 获取Label表列表。
   * 
   * @param request - ListLabelTablesRequest
   * @returns ListLabelTablesResponse
   */
  async listLabelTables(InstanceId: string, request: $_model.ListLabelTablesRequest): Promise<$_model.ListLabelTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLabelTablesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 获取注册FG特征时模型特征下可选的所有特征。
   * 
   * @param request - ListModelFeatureAvailableFeaturesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelFeatureAvailableFeaturesResponse
   */
  async listModelFeatureAvailableFeaturesWithOptions(InstanceId: string, ModelFeatureId: string, request: $_model.ListModelFeatureAvailableFeaturesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListModelFeatureAvailableFeaturesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.featureName)) {
      query["FeatureName"] = request.featureName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListModelFeatureAvailableFeatures",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/modelfeatures/${$dara.URL.percentEncode(ModelFeatureId)}/availablefeatures`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListModelFeatureAvailableFeaturesResponse>(await this.callApi(params, req, runtime), new $_model.ListModelFeatureAvailableFeaturesResponse({}));
  }

  /**
   * 获取注册FG特征时模型特征下可选的所有特征。
   * 
   * @param request - ListModelFeatureAvailableFeaturesRequest
   * @returns ListModelFeatureAvailableFeaturesResponse
   */
  async listModelFeatureAvailableFeatures(InstanceId: string, ModelFeatureId: string, request: $_model.ListModelFeatureAvailableFeaturesRequest): Promise<$_model.ListModelFeatureAvailableFeaturesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModelFeatureAvailableFeaturesWithOptions(InstanceId, ModelFeatureId, request, headers, runtime);
  }

  /**
   * 获取模型特征列表。
   * 
   * @param tmpReq - ListModelFeaturesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelFeaturesResponse
   */
  async listModelFeaturesWithOptions(InstanceId: string, tmpReq: $_model.ListModelFeaturesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListModelFeaturesResponse> {
    tmpReq.validate();
    let request = new $_model.ListModelFeaturesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.modelFeatureIds)) {
      request.modelFeatureIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.modelFeatureIds, "ModelFeatureIds", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.modelFeatureIdsShrink)) {
      query["ModelFeatureIds"] = request.modelFeatureIdsShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListModelFeatures",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/modelfeatures`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListModelFeaturesResponse>(await this.callApi(params, req, runtime), new $_model.ListModelFeaturesResponse({}));
  }

  /**
   * 获取模型特征列表。
   * 
   * @param request - ListModelFeaturesRequest
   * @returns ListModelFeaturesResponse
   */
  async listModelFeatures(InstanceId: string, request: $_model.ListModelFeaturesRequest): Promise<$_model.ListModelFeaturesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModelFeaturesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 获取项目下的所有特征视图、特征信息。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectFeatureViewsResponse
   */
  async listProjectFeatureViewsWithOptions(InstanceId: string, ProjectId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectFeatureViewsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjectFeatureViews",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/projects/${$dara.URL.percentEncode(ProjectId)}/featureviews`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectFeatureViewsResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectFeatureViewsResponse({}));
  }

  /**
   * 获取项目下的所有特征视图、特征信息。
   * @returns ListProjectFeatureViewsResponse
   */
  async listProjectFeatureViews(InstanceId: string, ProjectId: string): Promise<$_model.ListProjectFeatureViewsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectFeatureViewsWithOptions(InstanceId, ProjectId, headers, runtime);
  }

  /**
   * 获取Feature Store项目列表。
   * 
   * @param tmpReq - ListProjectsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectsResponse
   */
  async listProjectsWithOptions(InstanceId: string, tmpReq: $_model.ListProjectsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectsResponse> {
    tmpReq.validate();
    let request = new $_model.ListProjectsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.projectIds)) {
      request.projectIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.projectIds, "ProjectIds", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectIdsShrink)) {
      query["ProjectIds"] = request.projectIdsShrink;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjects",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/projects`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectsResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectsResponse({}));
  }

  /**
   * 获取Feature Store项目列表。
   * 
   * @param request - ListProjectsRequest
   * @returns ListProjectsResponse
   */
  async listProjects(InstanceId: string, request: $_model.ListProjectsRequest): Promise<$_model.ListProjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 获取任务日志列表
   * 
   * @param request - ListTaskLogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTaskLogsResponse
   */
  async listTaskLogsWithOptions(InstanceId: string, TaskId: string, request: $_model.ListTaskLogsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTaskLogsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTaskLogs",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/tasks/${$dara.URL.percentEncode(TaskId)}/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTaskLogsResponse>(await this.callApi(params, req, runtime), new $_model.ListTaskLogsResponse({}));
  }

  /**
   * 获取任务日志列表
   * 
   * @param request - ListTaskLogsRequest
   * @returns ListTaskLogsResponse
   */
  async listTaskLogs(InstanceId: string, TaskId: string, request: $_model.ListTaskLogsRequest): Promise<$_model.ListTaskLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTaskLogsWithOptions(InstanceId, TaskId, request, headers, runtime);
  }

  /**
   * 获取任务列表
   * 
   * @param tmpReq - ListTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTasksResponse
   */
  async listTasksWithOptions(InstanceId: string, tmpReq: $_model.ListTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTasksResponse> {
    tmpReq.validate();
    let request = new $_model.ListTasksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.taskIds)) {
      request.taskIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskIds, "TaskIds", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.objectId)) {
      query["ObjectId"] = request.objectId;
    }

    if (!$dara.isNull(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskIdsShrink)) {
      query["TaskIds"] = request.taskIdsShrink;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTasks",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListTasksResponse({}));
  }

  /**
   * 获取任务列表
   * 
   * @param request - ListTasksRequest
   * @returns ListTasksResponse
   */
  async listTasks(InstanceId: string, request: $_model.ListTasksRequest): Promise<$_model.ListTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTasksWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 将特征视图的离线数据发布/同步到线上。
   * 
   * @param request - PublishFeatureViewTableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishFeatureViewTableResponse
   */
  async publishFeatureViewTableWithOptions(InstanceId: string, FeatureViewId: string, request: $_model.PublishFeatureViewTableRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PublishFeatureViewTableResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.eventTime)) {
      body["EventTime"] = request.eventTime;
    }

    if (!$dara.isNull(request.mode)) {
      body["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.offlineToOnline)) {
      body["OfflineToOnline"] = request.offlineToOnline;
    }

    if (!$dara.isNull(request.partitions)) {
      body["Partitions"] = request.partitions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishFeatureViewTable",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/featureviews/${$dara.URL.percentEncode(FeatureViewId)}/action/publishtable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishFeatureViewTableResponse>(await this.callApi(params, req, runtime), new $_model.PublishFeatureViewTableResponse({}));
  }

  /**
   * 将特征视图的离线数据发布/同步到线上。
   * 
   * @param request - PublishFeatureViewTableRequest
   * @returns PublishFeatureViewTableResponse
   */
  async publishFeatureViewTable(InstanceId: string, FeatureViewId: string, request: $_model.PublishFeatureViewTableRequest): Promise<$_model.PublishFeatureViewTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishFeatureViewTableWithOptions(InstanceId, FeatureViewId, request, headers, runtime);
  }

  /**
   * 更新数据源信息。
   * 
   * @param request - UpdateDatasourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDatasourceResponse
   */
  async updateDatasourceWithOptions(InstanceId: string, DatasourceId: string, request: $_model.UpdateDatasourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDatasourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.uri)) {
      body["Uri"] = request.uri;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDatasource",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/datasources/${$dara.URL.percentEncode(DatasourceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDatasourceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDatasourceResponse({}));
  }

  /**
   * 更新数据源信息。
   * 
   * @param request - UpdateDatasourceRequest
   * @returns UpdateDatasourceResponse
   */
  async updateDatasource(InstanceId: string, DatasourceId: string, request: $_model.UpdateDatasourceRequest): Promise<$_model.UpdateDatasourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDatasourceWithOptions(InstanceId, DatasourceId, request, headers, runtime);
  }

  /**
   * 更新label表。
   * 
   * @param request - UpdateLabelTableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLabelTableResponse
   */
  async updateLabelTableWithOptions(InstanceId: string, LabelTableId: string, request: $_model.UpdateLabelTableRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLabelTableResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasourceId)) {
      body["DatasourceId"] = request.datasourceId;
    }

    if (!$dara.isNull(request.fields)) {
      body["Fields"] = request.fields;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLabelTable",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/labeltables/${$dara.URL.percentEncode(LabelTableId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLabelTableResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLabelTableResponse({}));
  }

  /**
   * 更新label表。
   * 
   * @param request - UpdateLabelTableRequest
   * @returns UpdateLabelTableResponse
   */
  async updateLabelTable(InstanceId: string, LabelTableId: string, request: $_model.UpdateLabelTableRequest): Promise<$_model.UpdateLabelTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLabelTableWithOptions(InstanceId, LabelTableId, request, headers, runtime);
  }

  /**
   * 更新模型特征。
   * 
   * @param request - UpdateModelFeatureRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateModelFeatureResponse
   */
  async updateModelFeatureWithOptions(InstanceId: string, ModelFeatureId: string, request: $_model.UpdateModelFeatureRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateModelFeatureResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.features)) {
      body["Features"] = request.features;
    }

    if (!$dara.isNull(request.labelPriorityLevel)) {
      body["LabelPriorityLevel"] = request.labelPriorityLevel;
    }

    if (!$dara.isNull(request.labelTableId)) {
      body["LabelTableId"] = request.labelTableId;
    }

    if (!$dara.isNull(request.sequenceFeatureViewIds)) {
      body["SequenceFeatureViewIds"] = request.sequenceFeatureViewIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateModelFeature",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/modelfeatures/${$dara.URL.percentEncode(ModelFeatureId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateModelFeatureResponse>(await this.callApi(params, req, runtime), new $_model.UpdateModelFeatureResponse({}));
  }

  /**
   * 更新模型特征。
   * 
   * @param request - UpdateModelFeatureRequest
   * @returns UpdateModelFeatureResponse
   */
  async updateModelFeature(InstanceId: string, ModelFeatureId: string, request: $_model.UpdateModelFeatureRequest): Promise<$_model.UpdateModelFeatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateModelFeatureWithOptions(InstanceId, ModelFeatureId, request, headers, runtime);
  }

  /**
   * 更新模型特征的FG特征配置信息。
   * 
   * @param request - UpdateModelFeatureFGFeatureRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateModelFeatureFGFeatureResponse
   */
  async updateModelFeatureFGFeatureWithOptions(InstanceId: string, ModelFeatureId: string, request: $_model.UpdateModelFeatureFGFeatureRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateModelFeatureFGFeatureResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lookupFeatures)) {
      body["LookupFeatures"] = request.lookupFeatures;
    }

    if (!$dara.isNull(request.rawFeatures)) {
      body["RawFeatures"] = request.rawFeatures;
    }

    if (!$dara.isNull(request.reserves)) {
      body["Reserves"] = request.reserves;
    }

    if (!$dara.isNull(request.sequenceFeatures)) {
      body["SequenceFeatures"] = request.sequenceFeatures;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateModelFeatureFGFeature",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/modelfeatures/${$dara.URL.percentEncode(ModelFeatureId)}/fgfeature`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateModelFeatureFGFeatureResponse>(await this.callApi(params, req, runtime), new $_model.UpdateModelFeatureFGFeatureResponse({}));
  }

  /**
   * 更新模型特征的FG特征配置信息。
   * 
   * @param request - UpdateModelFeatureFGFeatureRequest
   * @returns UpdateModelFeatureFGFeatureResponse
   */
  async updateModelFeatureFGFeature(InstanceId: string, ModelFeatureId: string, request: $_model.UpdateModelFeatureFGFeatureRequest): Promise<$_model.UpdateModelFeatureFGFeatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateModelFeatureFGFeatureWithOptions(InstanceId, ModelFeatureId, request, headers, runtime);
  }

  /**
   * 更新指定Feature Store项目信息。
   * 
   * @param request - UpdateProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectResponse
   */
  async updateProjectWithOptions(InstanceId: string, ProjectId: string, request: $_model.UpdateProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProject",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/projects/${$dara.URL.percentEncode(ProjectId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProjectResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProjectResponse({}));
  }

  /**
   * 更新指定Feature Store项目信息。
   * 
   * @param request - UpdateProjectRequest
   * @returns UpdateProjectResponse
   */
  async updateProject(InstanceId: string, ProjectId: string, request: $_model.UpdateProjectRequest): Promise<$_model.UpdateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProjectWithOptions(InstanceId, ProjectId, request, headers, runtime);
  }

  /**
   * 获取特征视图血缘关系。
   * 
   * @param request - WriteFeatureViewTableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WriteFeatureViewTableResponse
   */
  async writeFeatureViewTableWithOptions(InstanceId: string, FeatureViewId: string, request: $_model.WriteFeatureViewTableRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.WriteFeatureViewTableResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.mode)) {
      body["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.partitions)) {
      body["Partitions"] = request.partitions;
    }

    if (!$dara.isNull(request.urlDatasource)) {
      body["UrlDatasource"] = request.urlDatasource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "WriteFeatureViewTable",
      version: "2023-06-21",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(InstanceId)}/featureviews/${$dara.URL.percentEncode(FeatureViewId)}/action/writetable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.WriteFeatureViewTableResponse>(await this.callApi(params, req, runtime), new $_model.WriteFeatureViewTableResponse({}));
  }

  /**
   * 获取特征视图血缘关系。
   * 
   * @param request - WriteFeatureViewTableRequest
   * @returns WriteFeatureViewTableResponse
   */
  async writeFeatureViewTable(InstanceId: string, FeatureViewId: string, request: $_model.WriteFeatureViewTableRequest): Promise<$_model.WriteFeatureViewTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.writeFeatureViewTableWithOptions(InstanceId, FeatureViewId, request, headers, runtime);
  }

}
