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
    this._endpoint = this.getEndpoint("opensearch", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Binds a custom analyzer to an Elasticsearch instance.
   * 
   * @param request - BindESUserAnalyzerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindESUserAnalyzerResponse
   */
  async bindESUserAnalyzerWithOptions(appGroupIdentity: string, esInstanceId: string, request: $_model.BindESUserAnalyzerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BindESUserAnalyzerResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "BindESUserAnalyzer",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/es/${$dara.URL.percentEncode(esInstanceId)}/actions/bind-analyzer`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindESUserAnalyzerResponse>(await this.callApi(params, req, runtime), new $_model.BindESUserAnalyzerResponse({}));
  }

  /**
   * Binds a custom analyzer to an Elasticsearch instance.
   * 
   * @param request - BindESUserAnalyzerRequest
   * @returns BindESUserAnalyzerResponse
   */
  async bindESUserAnalyzer(appGroupIdentity: string, esInstanceId: string, request: $_model.BindESUserAnalyzerRequest): Promise<$_model.BindESUserAnalyzerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.bindESUserAnalyzerWithOptions(appGroupIdentity, esInstanceId, request, headers, runtime);
  }

  /**
   * Binds an Elasticsearch instance.
   * 
   * @param request - BindEsInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindEsInstanceResponse
   */
  async bindEsInstanceWithOptions(appGroupIdentity: string, request: $_model.BindEsInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BindEsInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindEsInstance",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/actions/bind-es-instance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindEsInstanceResponse>(await this.callApi(params, req, runtime), new $_model.BindEsInstanceResponse({}));
  }

  /**
   * Binds an Elasticsearch instance.
   * 
   * @param request - BindEsInstanceRequest
   * @returns BindEsInstanceResponse
   */
  async bindEsInstance(appGroupIdentity: string, request: $_model.BindEsInstanceRequest): Promise<$_model.BindEsInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.bindEsInstanceWithOptions(appGroupIdentity, request, headers, runtime);
  }

  /**
   * Compiles a sort script.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompileSortScriptResponse
   */
  async compileSortScriptWithOptions(appGroupIdentity: string, scriptName: string, appVersionId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CompileSortScriptResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CompileSortScript",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appVersionId)}/sort-scripts/${$dara.URL.percentEncode(scriptName)}/actions/compiling`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CompileSortScriptResponse>(await this.callApi(params, req, runtime), new $_model.CompileSortScriptResponse({}));
  }

  /**
   * Compiles a sort script.
   * @returns CompileSortScriptResponse
   */
  async compileSortScript(appGroupIdentity: string, scriptName: string, appVersionId: string): Promise<$_model.CompileSortScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.compileSortScriptWithOptions(appGroupIdentity, scriptName, appVersionId, headers, runtime);
  }

  /**
   * Creates an experiment.
   * 
   * @param request - CreateABTestExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateABTestExperimentResponse
   */
  async createABTestExperimentWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, request: $_model.CreateABTestExperimentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateABTestExperimentResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateABTestExperiment",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/scenes/${$dara.URL.percentEncode(sceneId)}/groups/${$dara.URL.percentEncode(groupId)}/experiments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateABTestExperimentResponse>(await this.callApi(params, req, runtime), new $_model.CreateABTestExperimentResponse({}));
  }

  /**
   * Creates an experiment.
   * 
   * @param request - CreateABTestExperimentRequest
   * @returns CreateABTestExperimentResponse
   */
  async createABTestExperiment(appGroupIdentity: string, sceneId: string, groupId: string, request: $_model.CreateABTestExperimentRequest): Promise<$_model.CreateABTestExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createABTestExperimentWithOptions(appGroupIdentity, sceneId, groupId, request, headers, runtime);
  }

  /**
   * Creates a test group.
   * 
   * @param request - CreateABTestGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateABTestGroupResponse
   */
  async createABTestGroupWithOptions(appGroupIdentity: string, sceneId: string, request: $_model.CreateABTestGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateABTestGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateABTestGroup",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/scenes/${$dara.URL.percentEncode(sceneId)}/groups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateABTestGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateABTestGroupResponse({}));
  }

  /**
   * Creates a test group.
   * 
   * @param request - CreateABTestGroupRequest
   * @returns CreateABTestGroupResponse
   */
  async createABTestGroup(appGroupIdentity: string, sceneId: string, request: $_model.CreateABTestGroupRequest): Promise<$_model.CreateABTestGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createABTestGroupWithOptions(appGroupIdentity, sceneId, request, headers, runtime);
  }

  /**
   * Creates an scenario.
   * 
   * @param request - CreateABTestSceneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateABTestSceneResponse
   */
  async createABTestSceneWithOptions(appGroupIdentity: string, request: $_model.CreateABTestSceneRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateABTestSceneResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateABTestScene",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/scenes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateABTestSceneResponse>(await this.callApi(params, req, runtime), new $_model.CreateABTestSceneResponse({}));
  }

  /**
   * Creates an scenario.
   * 
   * @param request - CreateABTestSceneRequest
   * @returns CreateABTestSceneResponse
   */
  async createABTestScene(appGroupIdentity: string, request: $_model.CreateABTestSceneRequest): Promise<$_model.CreateABTestSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createABTestSceneWithOptions(appGroupIdentity, request, headers, runtime);
  }

  /**
   * Creates a version for an OpenSearch application.
   * 
   * @remarks
   *   When you create a standard application, a new version of the application is created if the specified application name already exists.
   * *   When you create a version of an existing application, you must specify the autoSwitch and realtimeShared parameters.
   * *   When you create a version of an existing application, the value of the quota parameter is the same as that of the quota parameter in the previous version of the application.
   * *   When you create a version of an existing application, the modification of the value of the quota parameter does not take effect.
   * 
   * @param request - CreateAppRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppResponse
   */
  async createAppWithOptions(appGroupIdentity: string, request: $_model.CreateAppRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoSwitch)) {
      body["autoSwitch"] = request.autoSwitch;
    }

    if (!$dara.isNull(request.cluster)) {
      body["cluster"] = request.cluster;
    }

    if (!$dara.isNull(request.configItems)) {
      body["configItems"] = request.configItems;
    }

    if (!$dara.isNull(request.dataSources)) {
      body["dataSources"] = request.dataSources;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.domain)) {
      body["domain"] = request.domain;
    }

    if (!$dara.isNull(request.fetchFields)) {
      body["fetchFields"] = request.fetchFields;
    }

    if (!$dara.isNull(request.firstRanks)) {
      body["firstRanks"] = request.firstRanks;
    }

    if (!$dara.isNull(request.interpretations)) {
      body["interpretations"] = request.interpretations;
    }

    if (!$dara.isNull(request.networkType)) {
      body["networkType"] = request.networkType;
    }

    if (!$dara.isNull(request.prompts)) {
      body["prompts"] = request.prompts;
    }

    if (!$dara.isNull(request.queryProcessors)) {
      body["queryProcessors"] = request.queryProcessors;
    }

    if (!$dara.isNull(request.realtimeShared)) {
      body["realtimeShared"] = request.realtimeShared;
    }

    if (!$dara.isNull(request.schema)) {
      body["schema"] = request.schema;
    }

    if (!$dara.isNull(request.schemas)) {
      body["schemas"] = request.schemas;
    }

    if (!$dara.isNull(request.secondRanks)) {
      body["secondRanks"] = request.secondRanks;
    }

    if (!$dara.isNull(request.summaries)) {
      body["summaries"] = request.summaries;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApp",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppResponse({}));
  }

  /**
   * Creates a version for an OpenSearch application.
   * 
   * @remarks
   *   When you create a standard application, a new version of the application is created if the specified application name already exists.
   * *   When you create a version of an existing application, you must specify the autoSwitch and realtimeShared parameters.
   * *   When you create a version of an existing application, the value of the quota parameter is the same as that of the quota parameter in the previous version of the application.
   * *   When you create a version of an existing application, the modification of the value of the quota parameter does not take effect.
   * 
   * @param request - CreateAppRequest
   * @returns CreateAppResponse
   */
  async createApp(appGroupIdentity: string, request: $_model.CreateAppRequest): Promise<$_model.CreateAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAppWithOptions(appGroupIdentity, request, headers, runtime);
  }

  /**
   * Creates an OpenSearch application.
   * 
   * @param request - CreateAppGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppGroupResponse
   */
  async createAppGroupWithOptions(request: $_model.CreateAppGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chargeType)) {
      body["chargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.quota)) {
      body["quota"] = request.quota;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppGroup",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppGroupResponse({}));
  }

  /**
   * Creates an OpenSearch application.
   * 
   * @param request - CreateAppGroupRequest
   * @returns CreateAppGroupResponse
   */
  async createAppGroup(request: $_model.CreateAppGroupRequest): Promise<$_model.CreateAppGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAppGroupWithOptions(request, headers, runtime);
  }

  /**
   * @param request - CreateAppGroupCredentialsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppGroupCredentialsResponse
   */
  async createAppGroupCredentialsWithOptions(appGroupIdentity: string, request: $_model.CreateAppGroupCredentialsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppGroupCredentialsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppGroupCredentials",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/credentials`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppGroupCredentialsResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppGroupCredentialsResponse({}));
  }

  /**
   * @param request - CreateAppGroupCredentialsRequest
   * @returns CreateAppGroupCredentialsResponse
   */
  async createAppGroupCredentials(appGroupIdentity: string, request: $_model.CreateAppGroupCredentialsRequest): Promise<$_model.CreateAppGroupCredentialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAppGroupCredentialsWithOptions(appGroupIdentity, request, headers, runtime);
  }

  /**
   * Creates a rough sort expression for a version of an OpenSearch application. If you set dryRun to true, this operation checks the specified rough sort expression. By default, the value of dryRun is false if you do not set this parameter.
   * 
   * @param request - CreateFirstRankRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFirstRankResponse
   */
  async createFirstRankWithOptions(appGroupIdentity: string, appId: string, request: $_model.CreateFirstRankRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFirstRankResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFirstRank",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appId)}/first-ranks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFirstRankResponse>(await this.callApi(params, req, runtime), new $_model.CreateFirstRankResponse({}));
  }

  /**
   * Creates a rough sort expression for a version of an OpenSearch application. If you set dryRun to true, this operation checks the specified rough sort expression. By default, the value of dryRun is false if you do not set this parameter.
   * 
   * @param request - CreateFirstRankRequest
   * @returns CreateFirstRankResponse
   */
  async createFirstRank(appGroupIdentity: string, appId: string, request: $_model.CreateFirstRankRequest): Promise<$_model.CreateFirstRankResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFirstRankWithOptions(appGroupIdentity, appId, request, headers, runtime);
  }

  /**
   * Creates an algorithm instance of a feature.
   * 
   * @remarks
   * You can call the [GetFunctionCurrentVersion](https://help.aliyun.com/document_detail/421377.html) operation to query the latest version of a feature. The response of the operation includes the createParameters parameter that is used to create an algorithm instance, the usageParameters parameter, and the requirements for setting these parameters.
   * 
   * @param request - CreateFunctionInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFunctionInstanceResponse
   */
  async createFunctionInstanceWithOptions(appGroupIdentity: string, functionName: string, request: $_model.CreateFunctionInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFunctionInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createParameters)) {
      body["createParameters"] = request.createParameters;
    }

    if (!$dara.isNull(request.cron)) {
      body["cron"] = request.cron;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.functionType)) {
      body["functionType"] = request.functionType;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["instanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.modelType)) {
      body["modelType"] = request.modelType;
    }

    if (!$dara.isNull(request.usageParameters)) {
      body["usageParameters"] = request.usageParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFunctionInstance",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/functions/${$dara.URL.percentEncode(functionName)}/instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFunctionInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateFunctionInstanceResponse({}));
  }

  /**
   * Creates an algorithm instance of a feature.
   * 
   * @remarks
   * You can call the [GetFunctionCurrentVersion](https://help.aliyun.com/document_detail/421377.html) operation to query the latest version of a feature. The response of the operation includes the createParameters parameter that is used to create an algorithm instance, the usageParameters parameter, and the requirements for setting these parameters.
   * 
   * @param request - CreateFunctionInstanceRequest
   * @returns CreateFunctionInstanceResponse
   */
  async createFunctionInstance(appGroupIdentity: string, functionName: string, request: $_model.CreateFunctionInstanceRequest): Promise<$_model.CreateFunctionInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFunctionInstanceWithOptions(appGroupIdentity, functionName, request, headers, runtime);
  }

  /**
   * Creates an algorithm resource for a specific feature.
   * 
   * @param request - CreateFunctionResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFunctionResourceResponse
   */
  async createFunctionResourceWithOptions(appGroupIdentity: string, functionName: string, request: $_model.CreateFunctionResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFunctionResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.data)) {
      body["Data"] = request.data;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.resourceName)) {
      body["ResourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFunctionResource",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/functions/${$dara.URL.percentEncode(functionName)}/resources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFunctionResourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateFunctionResourceResponse({}));
  }

  /**
   * Creates an algorithm resource for a specific feature.
   * 
   * @param request - CreateFunctionResourceRequest
   * @returns CreateFunctionResourceResponse
   */
  async createFunctionResource(appGroupIdentity: string, functionName: string, request: $_model.CreateFunctionResourceRequest): Promise<$_model.CreateFunctionResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFunctionResourceWithOptions(appGroupIdentity, functionName, request, headers, runtime);
  }

  /**
   * Starts a training task for an algorithm instance.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFunctionTaskResponse
   */
  async createFunctionTaskWithOptions(appGroupIdentity: string, functionName: string, instanceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFunctionTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFunctionTask",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/functions/${$dara.URL.percentEncode(functionName)}/instances/${$dara.URL.percentEncode(instanceName)}/tasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFunctionTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateFunctionTaskResponse({}));
  }

  /**
   * Starts a training task for an algorithm instance.
   * @returns CreateFunctionTaskResponse
   */
  async createFunctionTask(appGroupIdentity: string, functionName: string, instanceName: string): Promise<$_model.CreateFunctionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFunctionTaskWithOptions(appGroupIdentity, functionName, instanceName, headers, runtime);
  }

  /**
   * Create an intervention dictionary.
   * 
   * @param request - CreateInterventionDictionaryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInterventionDictionaryResponse
   */
  async createInterventionDictionaryWithOptions(request: $_model.CreateInterventionDictionaryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInterventionDictionaryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.analyzerType)) {
      body["analyzerType"] = request.analyzerType;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
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
      action: "CreateInterventionDictionary",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/intervention-dictionaries`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInterventionDictionaryResponse>(await this.callApi(params, req, runtime), new $_model.CreateInterventionDictionaryResponse({}));
  }

  /**
   * Create an intervention dictionary.
   * 
   * @param request - CreateInterventionDictionaryRequest
   * @returns CreateInterventionDictionaryResponse
   */
  async createInterventionDictionary(request: $_model.CreateInterventionDictionaryRequest): Promise<$_model.CreateInterventionDictionaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInterventionDictionaryWithOptions(request, headers, runtime);
  }

  /**
   * Creates a query analysis rule. If you set dryRun to true, this operation checks the specified query analysis rule. By default, the value of dryRun is false if you do not set this parameter.
   * 
   * @param request - CreateQueryProcessorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQueryProcessorResponse
   */
  async createQueryProcessorWithOptions(appGroupIdentity: string, appId: string, request: $_model.CreateQueryProcessorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateQueryProcessorResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQueryProcessor",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appId)}/query-processors`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateQueryProcessorResponse>(await this.callApi(params, req, runtime), new $_model.CreateQueryProcessorResponse({}));
  }

  /**
   * Creates a query analysis rule. If you set dryRun to true, this operation checks the specified query analysis rule. By default, the value of dryRun is false if you do not set this parameter.
   * 
   * @param request - CreateQueryProcessorRequest
   * @returns CreateQueryProcessorResponse
   */
  async createQueryProcessor(appGroupIdentity: string, appId: string, request: $_model.CreateQueryProcessorRequest): Promise<$_model.CreateQueryProcessorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createQueryProcessorWithOptions(appGroupIdentity, appId, request, headers, runtime);
  }

  /**
   * Creates a scheduled task for an OpenSearch application.
   * 
   * @param request - CreateScheduledTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScheduledTaskResponse
   */
  async createScheduledTaskWithOptions(appGroupIdentity: string, request: $_model.CreateScheduledTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateScheduledTaskResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScheduledTask",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/scheduled-tasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateScheduledTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateScheduledTaskResponse({}));
  }

  /**
   * Creates a scheduled task for an OpenSearch application.
   * 
   * @param request - CreateScheduledTaskRequest
   * @returns CreateScheduledTaskResponse
   */
  async createScheduledTask(appGroupIdentity: string, request: $_model.CreateScheduledTaskRequest): Promise<$_model.CreateScheduledTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createScheduledTaskWithOptions(appGroupIdentity, request, headers, runtime);
  }

  /**
   * Creates a query policy.
   * 
   * @param request - CreateSearchStrategyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSearchStrategyResponse
   */
  async createSearchStrategyWithOptions(appGroupIdentity: string, appId: string, request: $_model.CreateSearchStrategyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSearchStrategyResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSearchStrategy",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appId)}/search-strategies`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSearchStrategyResponse>(await this.callApi(params, req, runtime), new $_model.CreateSearchStrategyResponse({}));
  }

  /**
   * Creates a query policy.
   * 
   * @param request - CreateSearchStrategyRequest
   * @returns CreateSearchStrategyResponse
   */
  async createSearchStrategy(appGroupIdentity: string, appId: string, request: $_model.CreateSearchStrategyRequest): Promise<$_model.CreateSearchStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSearchStrategyWithOptions(appGroupIdentity, appId, request, headers, runtime);
  }

  /**
   * Creates a fine sort expression for a version of an OpenSearch application. If you set dryRun to true, this operation checks the specified fine sort expression. The default value of dryRun is false if you do not set this parameter.
   * 
   * @param request - CreateSecondRankRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSecondRankResponse
   */
  async createSecondRankWithOptions(appGroupIdentity: string, appId: string, request: $_model.CreateSecondRankRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSecondRankResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSecondRank",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appId)}/second-ranks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSecondRankResponse>(await this.callApi(params, req, runtime), new $_model.CreateSecondRankResponse({}));
  }

  /**
   * Creates a fine sort expression for a version of an OpenSearch application. If you set dryRun to true, this operation checks the specified fine sort expression. The default value of dryRun is false if you do not set this parameter.
   * 
   * @param request - CreateSecondRankRequest
   * @returns CreateSecondRankResponse
   */
  async createSecondRank(appGroupIdentity: string, appId: string, request: $_model.CreateSecondRankRequest): Promise<$_model.CreateSecondRankResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSecondRankWithOptions(appGroupIdentity, appId, request, headers, runtime);
  }

  /**
   * Creates a sort script.
   * 
   * @param request - CreateSortScriptRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSortScriptResponse
   */
  async createSortScriptWithOptions(appGroupIdentity: string, appVersionId: string, request: $_model.CreateSortScriptRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSortScriptResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.scope)) {
      body["scope"] = request.scope;
    }

    if (!$dara.isNull(request.scriptName)) {
      body["scriptName"] = request.scriptName;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSortScript",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appVersionId)}/sort-scripts`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSortScriptResponse>(await this.callApi(params, req, runtime), new $_model.CreateSortScriptResponse({}));
  }

  /**
   * Creates a sort script.
   * 
   * @param request - CreateSortScriptRequest
   * @returns CreateSortScriptResponse
   */
  async createSortScript(appGroupIdentity: string, appVersionId: string, request: $_model.CreateSortScriptRequest): Promise<$_model.CreateSortScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSortScriptWithOptions(appGroupIdentity, appVersionId, request, headers, runtime);
  }

  /**
   * Create a custom analyzer.
   * 
   * @param request - CreateUserAnalyzerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserAnalyzerResponse
   */
  async createUserAnalyzerWithOptions(request: $_model.CreateUserAnalyzerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserAnalyzerResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.business)) {
      body["business"] = request.business;
    }

    if (!$dara.isNull(request.businessAppGroupId)) {
      body["businessAppGroupId"] = request.businessAppGroupId;
    }

    if (!$dara.isNull(request.businessType)) {
      body["businessType"] = request.businessType;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
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
      action: "CreateUserAnalyzer",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/user-analyzers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUserAnalyzerResponse>(await this.callApi(params, req, runtime), new $_model.CreateUserAnalyzerResponse({}));
  }

  /**
   * Create a custom analyzer.
   * 
   * @param request - CreateUserAnalyzerRequest
   * @returns CreateUserAnalyzerResponse
   */
  async createUserAnalyzer(request: $_model.CreateUserAnalyzerRequest): Promise<$_model.CreateUserAnalyzerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createUserAnalyzerWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a test.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteABTestExperimentResponse
   */
  async deleteABTestExperimentWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteABTestExperimentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteABTestExperiment",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/scenes/${$dara.URL.percentEncode(sceneId)}/groups/${$dara.URL.percentEncode(groupId)}/experiments/${$dara.URL.percentEncode(experimentId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteABTestExperimentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteABTestExperimentResponse({}));
  }

  /**
   * Deletes a test.
   * @returns DeleteABTestExperimentResponse
   */
  async deleteABTestExperiment(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string): Promise<$_model.DeleteABTestExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteABTestExperimentWithOptions(appGroupIdentity, sceneId, groupId, experimentId, headers, runtime);
  }

  /**
   * 删除实验组
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteABTestGroupResponse
   */
  async deleteABTestGroupWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteABTestGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteABTestGroup",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/scenes/${$dara.URL.percentEncode(sceneId)}/groups/${$dara.URL.percentEncode(groupId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteABTestGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteABTestGroupResponse({}));
  }

  /**
   * 删除实验组
   * @returns DeleteABTestGroupResponse
   */
  async deleteABTestGroup(appGroupIdentity: string, sceneId: string, groupId: string): Promise<$_model.DeleteABTestGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteABTestGroupWithOptions(appGroupIdentity, sceneId, groupId, headers, runtime);
  }

  /**
   * Deletes an A/B test scenario.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteABTestSceneResponse
   */
  async deleteABTestSceneWithOptions(appGroupIdentity: string, sceneId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteABTestSceneResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteABTestScene",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/scenes/${$dara.URL.percentEncode(sceneId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteABTestSceneResponse>(await this.callApi(params, req, runtime), new $_model.DeleteABTestSceneResponse({}));
  }

  /**
   * Deletes an A/B test scenario.
   * @returns DeleteABTestSceneResponse
   */
  async deleteABTestScene(appGroupIdentity: string, sceneId: string): Promise<$_model.DeleteABTestSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteABTestSceneWithOptions(appGroupIdentity, sceneId, headers, runtime);
  }

  /**
   * Deletes an algorithm instance. Before you delete an instance, make sure that it is not in use to prevent service interruptions.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFunctionInstanceResponse
   */
  async deleteFunctionInstanceWithOptions(appGroupIdentity: string, functionName: string, instanceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFunctionInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFunctionInstance",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/functions/${$dara.URL.percentEncode(functionName)}/instances/${$dara.URL.percentEncode(instanceName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFunctionInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFunctionInstanceResponse({}));
  }

  /**
   * Deletes an algorithm instance. Before you delete an instance, make sure that it is not in use to prevent service interruptions.
   * @returns DeleteFunctionInstanceResponse
   */
  async deleteFunctionInstance(appGroupIdentity: string, functionName: string, instanceName: string): Promise<$_model.DeleteFunctionInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFunctionInstanceWithOptions(appGroupIdentity, functionName, instanceName, headers, runtime);
  }

  /**
   * Deletes an algorithm resource.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFunctionResourceResponse
   */
  async deleteFunctionResourceWithOptions(appGroupIdentity: string, functionName: string, resourceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFunctionResourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFunctionResource",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/functions/${$dara.URL.percentEncode(functionName)}/resources/${$dara.URL.percentEncode(resourceName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFunctionResourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFunctionResourceResponse({}));
  }

  /**
   * Deletes an algorithm resource.
   * @returns DeleteFunctionResourceResponse
   */
  async deleteFunctionResource(appGroupIdentity: string, functionName: string, resourceName: string): Promise<$_model.DeleteFunctionResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFunctionResourceWithOptions(appGroupIdentity, functionName, resourceName, headers, runtime);
  }

  /**
   * Deletes a training task. The training task in progress cannot be deleted.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFunctionTaskResponse
   */
  async deleteFunctionTaskWithOptions(appGroupIdentity: string, functionName: string, instanceName: string, generation: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFunctionTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFunctionTask",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/functions/${$dara.URL.percentEncode(functionName)}/instances/${$dara.URL.percentEncode(instanceName)}/tasks/${$dara.URL.percentEncode(generation)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFunctionTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFunctionTaskResponse({}));
  }

  /**
   * Deletes a training task. The training task in progress cannot be deleted.
   * @returns DeleteFunctionTaskResponse
   */
  async deleteFunctionTask(appGroupIdentity: string, functionName: string, instanceName: string, generation: string): Promise<$_model.DeleteFunctionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFunctionTaskWithOptions(appGroupIdentity, functionName, instanceName, generation, headers, runtime);
  }

  /**
   * 删除排序脚本
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSortScriptResponse
   */
  async deleteSortScriptWithOptions(appGroupIdentity: string, scriptName: string, appVersionId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSortScriptResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSortScript",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appVersionId)}/sort-scripts/${$dara.URL.percentEncode(scriptName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSortScriptResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSortScriptResponse({}));
  }

  /**
   * 删除排序脚本
   * @returns DeleteSortScriptResponse
   */
  async deleteSortScript(appGroupIdentity: string, scriptName: string, appVersionId: string): Promise<$_model.DeleteSortScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSortScriptWithOptions(appGroupIdentity, scriptName, appVersionId, headers, runtime);
  }

  /**
   * Deletes a script file.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSortScriptFileResponse
   */
  async deleteSortScriptFileWithOptions(appGroupIdentity: string, appVersionId: string, scriptName: string, fileName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSortScriptFileResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSortScriptFile",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appVersionId)}/sort-scripts/${$dara.URL.percentEncode(scriptName)}/files/src/${$dara.URL.percentEncode(fileName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSortScriptFileResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSortScriptFileResponse({}));
  }

  /**
   * Deletes a script file.
   * @returns DeleteSortScriptFileResponse
   */
  async deleteSortScriptFile(appGroupIdentity: string, appVersionId: string, scriptName: string, fileName: string): Promise<$_model.DeleteSortScriptFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSortScriptFileWithOptions(appGroupIdentity, appVersionId, scriptName, fileName, headers, runtime);
  }

  /**
   * 获取实验详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeABTestExperimentResponse
   */
  async describeABTestExperimentWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeABTestExperimentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeABTestExperiment",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/scenes/${$dara.URL.percentEncode(sceneId)}/groups/${$dara.URL.percentEncode(groupId)}/experiments/${$dara.URL.percentEncode(experimentId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeABTestExperimentResponse>(await this.callApi(params, req, runtime), new $_model.DescribeABTestExperimentResponse({}));
  }

  /**
   * 获取实验详情
   * @returns DescribeABTestExperimentResponse
   */
  async describeABTestExperiment(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string): Promise<$_model.DescribeABTestExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeABTestExperimentWithOptions(appGroupIdentity, sceneId, groupId, experimentId, headers, runtime);
  }

  /**
   * Queries the details of a test group.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeABTestGroupResponse
   */
  async describeABTestGroupWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeABTestGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeABTestGroup",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/scenes/${$dara.URL.percentEncode(sceneId)}/groups/${$dara.URL.percentEncode(groupId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeABTestGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeABTestGroupResponse({}));
  }

  /**
   * Queries the details of a test group.
   * @returns DescribeABTestGroupResponse
   */
  async describeABTestGroup(appGroupIdentity: string, sceneId: string, groupId: string): Promise<$_model.DescribeABTestGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeABTestGroupWithOptions(appGroupIdentity, sceneId, groupId, headers, runtime);
  }

  /**
   * Queries the information about an A/B test scenario.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeABTestSceneResponse
   */
  async describeABTestSceneWithOptions(appGroupIdentity: string, sceneId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeABTestSceneResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeABTestScene",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/scenes/${$dara.URL.percentEncode(sceneId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeABTestSceneResponse>(await this.callApi(params, req, runtime), new $_model.DescribeABTestSceneResponse({}));
  }

  /**
   * Queries the information about an A/B test scenario.
   * @returns DescribeABTestSceneResponse
   */
  async describeABTestScene(appGroupIdentity: string, sceneId: string): Promise<$_model.DescribeABTestSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeABTestSceneWithOptions(appGroupIdentity, sceneId, headers, runtime);
  }

  /**
   * Queries the information about a version of an OpenSearch application.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppResponse
   */
  async describeAppWithOptions(appGroupIdentity: string, appId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApp",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppResponse({}));
  }

  /**
   * Queries the information about a version of an OpenSearch application.
   * @returns DescribeAppResponse
   */
  async describeApp(appGroupIdentity: string, appId: string): Promise<$_model.DescribeAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppWithOptions(appGroupIdentity, appId, headers, runtime);
  }

  /**
   * Queries the details of an OpenSearch application.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppGroupResponse
   */
  async describeAppGroupWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppGroup",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppGroupResponse({}));
  }

  /**
   * Queries the details of an OpenSearch application.
   * @returns DescribeAppGroupResponse
   */
  async describeAppGroup(appGroupIdentity: string): Promise<$_model.DescribeAppGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppGroupWithOptions(appGroupIdentity, headers, runtime);
  }

  /**
   * Queries the statistics about a version of an OpenSearch application.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppStatisticsResponse
   */
  async describeAppStatisticsWithOptions(appGroupIdentity: string, appId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppStatisticsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppStatistics",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appId)}/statistics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppStatisticsResponse({}));
  }

  /**
   * Queries the statistics about a version of an OpenSearch application.
   * @returns DescribeAppStatisticsResponse
   */
  async describeAppStatistics(appGroupIdentity: string, appId: string): Promise<$_model.DescribeAppStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppStatisticsWithOptions(appGroupIdentity, appId, headers, runtime);
  }

  /**
   * Queries the version list of an OpenSearch application.
   * 
   * @remarks
   *   When you create a standard application, a new version of the application is created if the specified application name already exists.
   * *   When you create a version of an existing application, you must specify the autoSwitch and realtimeShared parameters.
   * *   When you create a version of an existing application, the value of the quota parameter is the same as that of the quota parameter in the previous version of the application.
   * *   When you create a version of an existing application, the modification of the value of the quota parameter does not take effect.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppsResponse
   */
  async describeAppsWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApps",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppsResponse({}));
  }

  /**
   * Queries the version list of an OpenSearch application.
   * 
   * @remarks
   *   When you create a standard application, a new version of the application is created if the specified application name already exists.
   * *   When you create a version of an existing application, you must specify the autoSwitch and realtimeShared parameters.
   * *   When you create a version of an existing application, the value of the quota parameter is the same as that of the quota parameter in the previous version of the application.
   * *   When you create a version of an existing application, the modification of the value of the quota parameter does not take effect.
   * @returns DescribeAppsResponse
   */
  async describeApps(appGroupIdentity: string): Promise<$_model.DescribeAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppsWithOptions(appGroupIdentity, headers, runtime);
  }

  /**
   * Queries the details of a data collection task of an application.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataCollctionResponse
   */
  async describeDataCollctionWithOptions(appGroupIdentity: string, dataCollectionIdentity: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataCollctionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDataCollction",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/data-collections/${$dara.URL.percentEncode(dataCollectionIdentity)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataCollctionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataCollctionResponse({}));
  }

  /**
   * Queries the details of a data collection task of an application.
   * @returns DescribeDataCollctionResponse
   */
  async describeDataCollction(appGroupIdentity: string, dataCollectionIdentity: string): Promise<$_model.DescribeDataCollctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeDataCollctionWithOptions(appGroupIdentity, dataCollectionIdentity, headers, runtime);
  }

  /**
   * Queries a rough sort expression that is configured for an OpenSearch application version.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFirstRankResponse
   */
  async describeFirstRankWithOptions(appGroupIdentity: string, appId: string, name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFirstRankResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFirstRank",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appId)}/first-ranks/${$dara.URL.percentEncode(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFirstRankResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFirstRankResponse({}));
  }

  /**
   * Queries a rough sort expression that is configured for an OpenSearch application version.
   * @returns DescribeFirstRankResponse
   */
  async describeFirstRank(appGroupIdentity: string, appId: string, name: string): Promise<$_model.DescribeFirstRankResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeFirstRankWithOptions(appGroupIdentity, appId, name, headers, runtime);
  }

  /**
   * Queries the details of an intervention dictionary.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInterventionDictionaryResponse
   */
  async describeInterventionDictionaryWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInterventionDictionaryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInterventionDictionary",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/intervention-dictionaries/${$dara.URL.percentEncode(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInterventionDictionaryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInterventionDictionaryResponse({}));
  }

  /**
   * Queries the details of an intervention dictionary.
   * @returns DescribeInterventionDictionaryResponse
   */
  async describeInterventionDictionary(name: string): Promise<$_model.DescribeInterventionDictionaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeInterventionDictionaryWithOptions(name, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeQueryProcessorResponse
   */
  async describeQueryProcessorWithOptions(appGroupIdentity: string, appId: string, name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeQueryProcessorResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeQueryProcessor",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appId)}/query-processors/${$dara.URL.percentEncode(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeQueryProcessorResponse>(await this.callApi(params, req, runtime), new $_model.DescribeQueryProcessorResponse({}));
  }

  /**
   * @returns DescribeQueryProcessorResponse
   */
  async describeQueryProcessor(appGroupIdentity: string, appId: string, name: string): Promise<$_model.DescribeQueryProcessorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeQueryProcessorWithOptions(appGroupIdentity, appId, name, headers, runtime);
  }

  /**
   * Queries the endpoints of all regions that support OpenSearch.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/regions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionsResponse({}));
  }

  /**
   * Queries the endpoints of all regions that support OpenSearch.
   * @returns DescribeRegionsResponse
   */
  async describeRegions(): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRegionsWithOptions(headers, runtime);
  }

  /**
   * 查看应用定时任务详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScheduledTaskResponse
   */
  async describeScheduledTaskWithOptions(appGroupIdentity: string, taskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeScheduledTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScheduledTask",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/scheduled-tasks/${$dara.URL.percentEncode(taskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeScheduledTaskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeScheduledTaskResponse({}));
  }

  /**
   * 查看应用定时任务详情
   * @returns DescribeScheduledTaskResponse
   */
  async describeScheduledTask(appGroupIdentity: string, taskId: string): Promise<$_model.DescribeScheduledTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeScheduledTaskWithOptions(appGroupIdentity, taskId, headers, runtime);
  }

  /**
   * Queries a fine sort expression that is configured for a version of an OpenSearch application.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecondRankResponse
   */
  async describeSecondRankWithOptions(appGroupIdentity: string, appId: string, name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSecondRankResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSecondRank",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appId)}/second-ranks/${$dara.URL.percentEncode(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSecondRankResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSecondRankResponse({}));
  }

  /**
   * Queries a fine sort expression that is configured for a version of an OpenSearch application.
   * @returns DescribeSecondRankResponse
   */
  async describeSecondRank(appGroupIdentity: string, appId: string, name: string): Promise<$_model.DescribeSecondRankResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSecondRankWithOptions(appGroupIdentity, appId, name, headers, runtime);
  }

  /**
   * 获取优化大师慢查询开通状态
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlowQueryStatusResponse
   */
  async describeSlowQueryStatusWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlowQueryStatusResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlowQueryStatus",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/optimizers/slow-query`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSlowQueryStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSlowQueryStatusResponse({}));
  }

  /**
   * 获取优化大师慢查询开通状态
   * @returns DescribeSlowQueryStatusResponse
   */
  async describeSlowQueryStatus(appGroupIdentity: string): Promise<$_model.DescribeSlowQueryStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSlowQueryStatusWithOptions(appGroupIdentity, headers, runtime);
  }

  /**
   * 获取自定义分析器详情
   * 
   * @param request - DescribeUserAnalyzerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserAnalyzerResponse
   */
  async describeUserAnalyzerWithOptions(name: string, request: $_model.DescribeUserAnalyzerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserAnalyzerResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.with)) {
      query["with"] = request.with;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserAnalyzer",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/user-analyzers/${$dara.URL.percentEncode(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserAnalyzerResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserAnalyzerResponse({}));
  }

  /**
   * 获取自定义分析器详情
   * 
   * @param request - DescribeUserAnalyzerRequest
   * @returns DescribeUserAnalyzerResponse
   */
  async describeUserAnalyzer(name: string, request: $_model.DescribeUserAnalyzerRequest): Promise<$_model.DescribeUserAnalyzerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeUserAnalyzerWithOptions(name, request, headers, runtime);
  }

  /**
   * 禁用优化大师慢查询服务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableSlowQueryResponse
   */
  async disableSlowQueryWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DisableSlowQueryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableSlowQuery",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/optimizers/slow-query/actions/disable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableSlowQueryResponse>(await this.callApi(params, req, runtime), new $_model.DisableSlowQueryResponse({}));
  }

  /**
   * 禁用优化大师慢查询服务
   * @returns DisableSlowQueryResponse
   */
  async disableSlowQuery(appGroupIdentity: string): Promise<$_model.DisableSlowQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableSlowQueryWithOptions(appGroupIdentity, headers, runtime);
  }

  /**
   * Enables slow query optimization of Optimization Master.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableSlowQueryResponse
   */
  async enableSlowQueryWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EnableSlowQueryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableSlowQuery",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/optimizers/slow-query/actions/enable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableSlowQueryResponse>(await this.callApi(params, req, runtime), new $_model.EnableSlowQueryResponse({}));
  }

  /**
   * Enables slow query optimization of Optimization Master.
   * @returns EnableSlowQueryResponse
   */
  async enableSlowQuery(appGroupIdentity: string): Promise<$_model.EnableSlowQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableSlowQueryWithOptions(appGroupIdentity, headers, runtime);
  }

  /**
   * Queries the information about a wide table that is generated after a JOIN operation is performed on multiple tables.
   * 
   * @param request - GenerateMergedTableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateMergedTableResponse
   */
  async generateMergedTableWithOptions(request: $_model.GenerateMergedTableRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateMergedTableResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.spec)) {
      query["spec"] = request.spec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateMergedTable",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/assist/schema/actions/merge`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateMergedTableResponse>(await this.callApi(params, req, runtime), new $_model.GenerateMergedTableResponse({}));
  }

  /**
   * Queries the information about a wide table that is generated after a JOIN operation is performed on multiple tables.
   * 
   * @param request - GenerateMergedTableRequest
   * @returns GenerateMergedTableResponse
   */
  async generateMergedTable(request: $_model.GenerateMergedTableRequest): Promise<$_model.GenerateMergedTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateMergedTableWithOptions(request, headers, runtime);
  }

  /**
   * Queries the type of an industry.
   * 
   * @param request - GetDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDomainResponse
   */
  async getDomainWithOptions(domainName: string, request: $_model.GetDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDomainResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appGroupIdentity)) {
      query["appGroupIdentity"] = request.appGroupIdentity;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDomain",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/domains/${$dara.URL.percentEncode(domainName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDomainResponse>(await this.callApi(params, req, runtime), new $_model.GetDomainResponse({}));
  }

  /**
   * Queries the type of an industry.
   * 
   * @param request - GetDomainRequest
   * @returns GetDomainResponse
   */
  async getDomain(domainName: string, request: $_model.GetDomainRequest): Promise<$_model.GetDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDomainWithOptions(domainName, request, headers, runtime);
  }

  /**
   * Queries the version information about the current feature when you create an instance.
   * 
   * @param request - GetFunctionCurrentVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFunctionCurrentVersionResponse
   */
  async getFunctionCurrentVersionWithOptions(functionName: string, request: $_model.GetFunctionCurrentVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetFunctionCurrentVersionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.category)) {
      query["category"] = request.category;
    }

    if (!$dara.isNull(request.domain)) {
      query["domain"] = request.domain;
    }

    if (!$dara.isNull(request.functionType)) {
      query["functionType"] = request.functionType;
    }

    if (!$dara.isNull(request.modelType)) {
      query["modelType"] = request.modelType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFunctionCurrentVersion",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/functions/${$dara.URL.percentEncode(functionName)}/current-version`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFunctionCurrentVersionResponse>(await this.callApi(params, req, runtime), new $_model.GetFunctionCurrentVersionResponse({}));
  }

  /**
   * Queries the version information about the current feature when you create an instance.
   * 
   * @param request - GetFunctionCurrentVersionRequest
   * @returns GetFunctionCurrentVersionResponse
   */
  async getFunctionCurrentVersion(functionName: string, request: $_model.GetFunctionCurrentVersionRequest): Promise<$_model.GetFunctionCurrentVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFunctionCurrentVersionWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Queries the algorithm instance that an application uses by default.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFunctionDefaultInstanceResponse
   */
  async getFunctionDefaultInstanceWithOptions(appGroupIdentity: string, functionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetFunctionDefaultInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFunctionDefaultInstance",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/functions/${$dara.URL.percentEncode(functionName)}/default-instance`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFunctionDefaultInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetFunctionDefaultInstanceResponse({}));
  }

  /**
   * Queries the algorithm instance that an application uses by default.
   * @returns GetFunctionDefaultInstanceResponse
   */
  async getFunctionDefaultInstance(appGroupIdentity: string, functionName: string): Promise<$_model.GetFunctionDefaultInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFunctionDefaultInstanceWithOptions(appGroupIdentity, functionName, headers, runtime);
  }

  /**
   * Queries the details of an algorithm instance by instance name.
   * 
   * @param request - GetFunctionInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFunctionInstanceResponse
   */
  async getFunctionInstanceWithOptions(appGroupIdentity: string, functionName: string, instanceName: string, request: $_model.GetFunctionInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetFunctionInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.output)) {
      query["output"] = request.output;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFunctionInstance",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/functions/${$dara.URL.percentEncode(functionName)}/instances/${$dara.URL.percentEncode(instanceName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFunctionInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetFunctionInstanceResponse({}));
  }

  /**
   * Queries the details of an algorithm instance by instance name.
   * 
   * @param request - GetFunctionInstanceRequest
   * @returns GetFunctionInstanceResponse
   */
  async getFunctionInstance(appGroupIdentity: string, functionName: string, instanceName: string, request: $_model.GetFunctionInstanceRequest): Promise<$_model.GetFunctionInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFunctionInstanceWithOptions(appGroupIdentity, functionName, instanceName, request, headers, runtime);
  }

  /**
   * Queries an algorithm resource.
   * 
   * @param request - GetFunctionResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFunctionResourceResponse
   */
  async getFunctionResourceWithOptions(appGroupIdentity: string, functionName: string, resourceName: string, request: $_model.GetFunctionResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetFunctionResourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.output)) {
      query["output"] = request.output;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFunctionResource",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/functions/${$dara.URL.percentEncode(functionName)}/resources/${$dara.URL.percentEncode(resourceName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFunctionResourceResponse>(await this.callApi(params, req, runtime), new $_model.GetFunctionResourceResponse({}));
  }

  /**
   * Queries an algorithm resource.
   * 
   * @param request - GetFunctionResourceRequest
   * @returns GetFunctionResourceResponse
   */
  async getFunctionResource(appGroupIdentity: string, functionName: string, resourceName: string, request: $_model.GetFunctionResourceRequest): Promise<$_model.GetFunctionResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFunctionResourceWithOptions(appGroupIdentity, functionName, resourceName, request, headers, runtime);
  }

  /**
   * Queries the details of a training task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFunctionTaskResponse
   */
  async getFunctionTaskWithOptions(appGroupIdentity: string, functionName: string, instanceName: string, generation: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetFunctionTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFunctionTask",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/functions/${$dara.URL.percentEncode(functionName)}/instances/${$dara.URL.percentEncode(instanceName)}/tasks/${$dara.URL.percentEncode(generation)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFunctionTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetFunctionTaskResponse({}));
  }

  /**
   * Queries the details of a training task.
   * @returns GetFunctionTaskResponse
   */
  async getFunctionTask(appGroupIdentity: string, functionName: string, instanceName: string, generation: string): Promise<$_model.GetFunctionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFunctionTaskWithOptions(appGroupIdentity, functionName, instanceName, generation, headers, runtime);
  }

  /**
   * Queries version information by version ID.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFunctionVersionResponse
   */
  async getFunctionVersionWithOptions(functionName: string, versionId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetFunctionVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFunctionVersion",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/functions/${$dara.URL.percentEncode(functionName)}/versions/${$dara.URL.percentEncode(versionId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFunctionVersionResponse>(await this.callApi(params, req, runtime), new $_model.GetFunctionVersionResponse({}));
  }

  /**
   * Queries version information by version ID.
   * @returns GetFunctionVersionResponse
   */
  async getFunctionVersion(functionName: string, versionId: string): Promise<$_model.GetFunctionVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFunctionVersionWithOptions(functionName, versionId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScriptFileNamesResponse
   */
  async getScriptFileNamesWithOptions(appGroupIdentity: string, appVersionId: string, scriptName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetScriptFileNamesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetScriptFileNames",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appVersionId)}/sort-scripts/${$dara.URL.percentEncode(scriptName)}/file-names`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetScriptFileNamesResponse>(await this.callApi(params, req, runtime), new $_model.GetScriptFileNamesResponse({}));
  }

  /**
   * @returns GetScriptFileNamesResponse
   */
  async getScriptFileNames(appGroupIdentity: string, appVersionId: string, scriptName: string): Promise<$_model.GetScriptFileNamesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getScriptFileNamesWithOptions(appGroupIdentity, appVersionId, scriptName, headers, runtime);
  }

  /**
   * Queries the details of a query policy.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSearchStrategyResponse
   */
  async getSearchStrategyWithOptions(appGroupIdentity: string, appId: string, strategyName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSearchStrategyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSearchStrategy",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appId)}/search-strategies/${$dara.URL.percentEncode(strategyName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSearchStrategyResponse>(await this.callApi(params, req, runtime), new $_model.GetSearchStrategyResponse({}));
  }

  /**
   * Queries the details of a query policy.
   * @returns GetSearchStrategyResponse
   */
  async getSearchStrategy(appGroupIdentity: string, appId: string, strategyName: string): Promise<$_model.GetSearchStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSearchStrategyWithOptions(appGroupIdentity, appId, strategyName, headers, runtime);
  }

  /**
   * Queries the details of a sort script.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSortScriptResponse
   */
  async getSortScriptWithOptions(appGroupIdentity: string, scriptName: string, appVersionId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSortScriptResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSortScript",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appVersionId)}/sort-scripts/${$dara.URL.percentEncode(scriptName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSortScriptResponse>(await this.callApi(params, req, runtime), new $_model.GetSortScriptResponse({}));
  }

  /**
   * Queries the details of a sort script.
   * @returns GetSortScriptResponse
   */
  async getSortScript(appGroupIdentity: string, scriptName: string, appVersionId: string): Promise<$_model.GetSortScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSortScriptWithOptions(appGroupIdentity, scriptName, appVersionId, headers, runtime);
  }

  /**
   * Queries the content of a sort script.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSortScriptFileResponse
   */
  async getSortScriptFileWithOptions(appGroupIdentity: string, scriptName: string, appVersionId: string, fileName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSortScriptFileResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSortScriptFile",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appVersionId)}/sort-scripts/${$dara.URL.percentEncode(scriptName)}/files/src/${$dara.URL.percentEncode(fileName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSortScriptFileResponse>(await this.callApi(params, req, runtime), new $_model.GetSortScriptFileResponse({}));
  }

  /**
   * Queries the content of a sort script.
   * @returns GetSortScriptFileResponse
   */
  async getSortScriptFile(appGroupIdentity: string, scriptName: string, appVersionId: string, fileName: string): Promise<$_model.GetSortScriptFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSortScriptFileWithOptions(appGroupIdentity, scriptName, appVersionId, fileName, headers, runtime);
  }

  /**
   * Queries a list of experiments.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListABTestExperimentsResponse
   */
  async listABTestExperimentsWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListABTestExperimentsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListABTestExperiments",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/scenes/${$dara.URL.percentEncode(sceneId)}/groups/${$dara.URL.percentEncode(groupId)}/experiments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListABTestExperimentsResponse>(await this.callApi(params, req, runtime), new $_model.ListABTestExperimentsResponse({}));
  }

  /**
   * Queries a list of experiments.
   * @returns ListABTestExperimentsResponse
   */
  async listABTestExperiments(appGroupIdentity: string, sceneId: string, groupId: string): Promise<$_model.ListABTestExperimentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listABTestExperimentsWithOptions(appGroupIdentity, sceneId, groupId, headers, runtime);
  }

  /**
   * Queries whitelists.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListABTestFixedFlowDividersResponse
   */
  async listABTestFixedFlowDividersWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListABTestFixedFlowDividersResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListABTestFixedFlowDividers",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/scenes/${$dara.URL.percentEncode(sceneId)}/groups/${$dara.URL.percentEncode(groupId)}/experiments/${$dara.URL.percentEncode(experimentId)}/fixed-flow-dividers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListABTestFixedFlowDividersResponse>(await this.callApi(params, req, runtime), new $_model.ListABTestFixedFlowDividersResponse({}));
  }

  /**
   * Queries whitelists.
   * @returns ListABTestFixedFlowDividersResponse
   */
  async listABTestFixedFlowDividers(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string): Promise<$_model.ListABTestFixedFlowDividersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listABTestFixedFlowDividersWithOptions(appGroupIdentity, sceneId, groupId, experimentId, headers, runtime);
  }

  /**
   * 获取实验组清单
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListABTestGroupsResponse
   */
  async listABTestGroupsWithOptions(appGroupIdentity: string, sceneId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListABTestGroupsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListABTestGroups",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/scenes/${$dara.URL.percentEncode(sceneId)}/groups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListABTestGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListABTestGroupsResponse({}));
  }

  /**
   * 获取实验组清单
   * @returns ListABTestGroupsResponse
   */
  async listABTestGroups(appGroupIdentity: string, sceneId: string): Promise<$_model.ListABTestGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listABTestGroupsWithOptions(appGroupIdentity, sceneId, headers, runtime);
  }

  /**
   * Queries test scenarios.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListABTestScenesResponse
   */
  async listABTestScenesWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListABTestScenesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListABTestScenes",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/scenes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListABTestScenesResponse>(await this.callApi(params, req, runtime), new $_model.ListABTestScenesResponse({}));
  }

  /**
   * Queries test scenarios.
   * @returns ListABTestScenesResponse
   */
  async listABTestScenes(appGroupIdentity: string): Promise<$_model.ListABTestScenesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listABTestScenesWithOptions(appGroupIdentity, headers, runtime);
  }

  /**
   * Queries a list of OpenSearch applications.
   * 
   * @remarks
   *   This operation allows you to query applications by application name, instance ID, and application type.
   * *   This operation allows you to sort the applications based on their creation time.
   * *   This operation supports the parameters for paging.
   * 
   * @param tmpReq - ListAppGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppGroupsResponse
   */
  async listAppGroupsWithOptions(tmpReq: $_model.ListAppGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppGroupsResponse> {
    tmpReq.validate();
    let request = new $_model.ListAppGroupsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["sortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppGroups",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListAppGroupsResponse({}));
  }

  /**
   * Queries a list of OpenSearch applications.
   * 
   * @remarks
   *   This operation allows you to query applications by application name, instance ID, and application type.
   * *   This operation allows you to sort the applications based on their creation time.
   * *   This operation supports the parameters for paging.
   * 
   * @param request - ListAppGroupsRequest
   * @returns ListAppGroupsResponse
   */
  async listAppGroups(request: $_model.ListAppGroupsRequest): Promise<$_model.ListAppGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAppGroupsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the data collection tasks of an OpenSearch application.
   * 
   * @param request - ListDataCollectionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataCollectionsResponse
   */
  async listDataCollectionsWithOptions(appGroupIdentity: string, request: $_model.ListDataCollectionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataCollectionsResponse> {
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
      action: "ListDataCollections",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/data-collections`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataCollectionsResponse>(await this.callApi(params, req, runtime), new $_model.ListDataCollectionsResponse({}));
  }

  /**
   * Queries the data collection tasks of an OpenSearch application.
   * 
   * @param request - ListDataCollectionsRequest
   * @returns ListDataCollectionsResponse
   */
  async listDataCollections(appGroupIdentity: string, request: $_model.ListDataCollectionsRequest): Promise<$_model.ListDataCollectionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataCollectionsWithOptions(appGroupIdentity, request, headers, runtime);
  }

  /**
   * Queries all fields in a table of a data source. This operation is for internal use only.
   * 
   * @param request - ListDataSourceTableFieldsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourceTableFieldsResponse
   */
  async listDataSourceTableFieldsWithOptions(dataSourceType: string, request: $_model.ListDataSourceTableFieldsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataSourceTableFieldsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.params)) {
      query["params"] = request.params;
    }

    if (!$dara.isNull(request.rawType)) {
      query["rawType"] = request.rawType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataSourceTableFields",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/assist/data-sources/${$dara.URL.percentEncode(dataSourceType)}/fields`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataSourceTableFieldsResponse>(await this.callApi(params, req, runtime), new $_model.ListDataSourceTableFieldsResponse({}));
  }

  /**
   * Queries all fields in a table of a data source. This operation is for internal use only.
   * 
   * @param request - ListDataSourceTableFieldsRequest
   * @returns ListDataSourceTableFieldsResponse
   */
  async listDataSourceTableFields(dataSourceType: string, request: $_model.ListDataSourceTableFieldsRequest): Promise<$_model.ListDataSourceTableFieldsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataSourceTableFieldsWithOptions(dataSourceType, request, headers, runtime);
  }

  /**
   * Obtains all data from a specified data source.
   * 
   * @param request - ListDataSourceTablesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourceTablesResponse
   */
  async listDataSourceTablesWithOptions(dataSourceType: string, request: $_model.ListDataSourceTablesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataSourceTablesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.params)) {
      query["params"] = request.params;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataSourceTables",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/assist/data-sources/${$dara.URL.percentEncode(dataSourceType)}/tables`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataSourceTablesResponse>(await this.callApi(params, req, runtime), new $_model.ListDataSourceTablesResponse({}));
  }

  /**
   * Obtains all data from a specified data source.
   * 
   * @param request - ListDataSourceTablesRequest
   * @returns ListDataSourceTablesResponse
   */
  async listDataSourceTables(dataSourceType: string, request: $_model.ListDataSourceTablesRequest): Promise<$_model.ListDataSourceTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataSourceTablesWithOptions(dataSourceType, request, headers, runtime);
  }

  /**
   * Queries the rough sort expressions that are configured for a version of an OpenSearch application.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFirstRanksResponse
   */
  async listFirstRanksWithOptions(appGroupIdentity: string, appId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListFirstRanksResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFirstRanks",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appId)}/first-ranks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFirstRanksResponse>(await this.callApi(params, req, runtime), new $_model.ListFirstRanksResponse({}));
  }

  /**
   * Queries the rough sort expressions that are configured for a version of an OpenSearch application.
   * @returns ListFirstRanksResponse
   */
  async listFirstRanks(appGroupIdentity: string, appId: string): Promise<$_model.ListFirstRanksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFirstRanksWithOptions(appGroupIdentity, appId, headers, runtime);
  }

  /**
   * Queries all algorithm instances of a user, which meet specified conditions.
   * 
   * @param request - ListFunctionInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFunctionInstancesResponse
   */
  async listFunctionInstancesWithOptions(appGroupIdentity: string, functionName: string, request: $_model.ListFunctionInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListFunctionInstancesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.functionType)) {
      query["functionType"] = request.functionType;
    }

    if (!$dara.isNull(request.modelType)) {
      query["modelType"] = request.modelType;
    }

    if (!$dara.isNull(request.output)) {
      query["output"] = request.output;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.source)) {
      query["source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFunctionInstances",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/functions/${$dara.URL.percentEncode(functionName)}/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFunctionInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListFunctionInstancesResponse({}));
  }

  /**
   * Queries all algorithm instances of a user, which meet specified conditions.
   * 
   * @param request - ListFunctionInstancesRequest
   * @returns ListFunctionInstancesResponse
   */
  async listFunctionInstances(appGroupIdentity: string, functionName: string, request: $_model.ListFunctionInstancesRequest): Promise<$_model.ListFunctionInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFunctionInstancesWithOptions(appGroupIdentity, functionName, request, headers, runtime);
  }

  /**
   * Queries algorithm resources.
   * 
   * @param request - ListFunctionResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFunctionResourcesResponse
   */
  async listFunctionResourcesWithOptions(appGroupIdentity: string, functionName: string, request: $_model.ListFunctionResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListFunctionResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.output)) {
      query["output"] = request.output;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFunctionResources",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/functions/${$dara.URL.percentEncode(functionName)}/resources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFunctionResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListFunctionResourcesResponse({}));
  }

  /**
   * Queries algorithm resources.
   * 
   * @param request - ListFunctionResourcesRequest
   * @returns ListFunctionResourcesResponse
   */
  async listFunctionResources(appGroupIdentity: string, functionName: string, request: $_model.ListFunctionResourcesRequest): Promise<$_model.ListFunctionResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFunctionResourcesWithOptions(appGroupIdentity, functionName, request, headers, runtime);
  }

  /**
   * Queries the training tasks. The returned results are sorted by start time in descending order.
   * 
   * @param request - ListFunctionTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFunctionTasksResponse
   */
  async listFunctionTasksWithOptions(appGroupIdentity: string, functionName: string, instanceName: string, request: $_model.ListFunctionTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListFunctionTasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFunctionTasks",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/functions/${$dara.URL.percentEncode(functionName)}/instances/${$dara.URL.percentEncode(instanceName)}/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFunctionTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListFunctionTasksResponse({}));
  }

  /**
   * Queries the training tasks. The returned results are sorted by start time in descending order.
   * 
   * @param request - ListFunctionTasksRequest
   * @returns ListFunctionTasksResponse
   */
  async listFunctionTasks(appGroupIdentity: string, functionName: string, instanceName: string, request: $_model.ListFunctionTasksRequest): Promise<$_model.ListFunctionTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFunctionTasksWithOptions(appGroupIdentity, functionName, instanceName, request, headers, runtime);
  }

  /**
   * 获取用户的干预词典列表
   * 
   * @param request - ListInterventionDictionariesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInterventionDictionariesResponse
   */
  async listInterventionDictionariesWithOptions(request: $_model.ListInterventionDictionariesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInterventionDictionariesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.types)) {
      query["types"] = request.types;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInterventionDictionaries",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/intervention-dictionaries`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInterventionDictionariesResponse>(await this.callApi(params, req, runtime), new $_model.ListInterventionDictionariesResponse({}));
  }

  /**
   * 获取用户的干预词典列表
   * 
   * @param request - ListInterventionDictionariesRequest
   * @returns ListInterventionDictionariesResponse
   */
  async listInterventionDictionaries(request: $_model.ListInterventionDictionariesRequest): Promise<$_model.ListInterventionDictionariesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInterventionDictionariesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the intervention entries in an intervention dictionary.
   * 
   * @param request - ListInterventionDictionaryEntriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInterventionDictionaryEntriesResponse
   */
  async listInterventionDictionaryEntriesWithOptions(name: string, request: $_model.ListInterventionDictionaryEntriesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInterventionDictionaryEntriesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.word)) {
      query["word"] = request.word;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInterventionDictionaryEntries",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/intervention-dictionaries/${$dara.URL.percentEncode(name)}/entries`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInterventionDictionaryEntriesResponse>(await this.callApi(params, req, runtime), new $_model.ListInterventionDictionaryEntriesResponse({}));
  }

  /**
   * Queries the intervention entries in an intervention dictionary.
   * 
   * @param request - ListInterventionDictionaryEntriesRequest
   * @returns ListInterventionDictionaryEntriesResponse
   */
  async listInterventionDictionaryEntries(name: string, request: $_model.ListInterventionDictionaryEntriesRequest): Promise<$_model.ListInterventionDictionaryEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInterventionDictionaryEntriesWithOptions(name, request, headers, runtime);
  }

  /**
   * 获取实体识别结果
   * 
   * @param request - ListInterventionDictionaryNerResultsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInterventionDictionaryNerResultsResponse
   */
  async listInterventionDictionaryNerResultsWithOptions(name: string, request: $_model.ListInterventionDictionaryNerResultsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInterventionDictionaryNerResultsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.query)) {
      query["query"] = request.query;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInterventionDictionaryNerResults",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/intervention-dictionaries/${$dara.URL.percentEncode(name)}/ner-results`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInterventionDictionaryNerResultsResponse>(await this.callApi(params, req, runtime), new $_model.ListInterventionDictionaryNerResultsResponse({}));
  }

  /**
   * 获取实体识别结果
   * 
   * @param request - ListInterventionDictionaryNerResultsRequest
   * @returns ListInterventionDictionaryNerResultsResponse
   */
  async listInterventionDictionaryNerResults(name: string, request: $_model.ListInterventionDictionaryNerResultsRequest): Promise<$_model.ListInterventionDictionaryNerResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInterventionDictionaryNerResultsWithOptions(name, request, headers, runtime);
  }

  /**
   * Queries the resources that are associated with an intervention dictionary. If the intervention dictionary is referenced by query analysis rules, this operation returns all applications that use the intervention dictionary and the information about the query analysis rules.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInterventionDictionaryRelatedEntitiesResponse
   */
  async listInterventionDictionaryRelatedEntitiesWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInterventionDictionaryRelatedEntitiesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInterventionDictionaryRelatedEntities",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/intervention-dictionaries/${$dara.URL.percentEncode(name)}/related`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInterventionDictionaryRelatedEntitiesResponse>(await this.callApi(params, req, runtime), new $_model.ListInterventionDictionaryRelatedEntitiesResponse({}));
  }

  /**
   * Queries the resources that are associated with an intervention dictionary. If the intervention dictionary is referenced by query analysis rules, this operation returns all applications that use the intervention dictionary and the information about the query analysis rules.
   * @returns ListInterventionDictionaryRelatedEntitiesResponse
   */
  async listInterventionDictionaryRelatedEntities(name: string): Promise<$_model.ListInterventionDictionaryRelatedEntitiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInterventionDictionaryRelatedEntitiesWithOptions(name, headers, runtime);
  }

  /**
   * 查看当前的处理流
   * 
   * @param request - ListProceedingsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProceedingsResponse
   */
  async listProceedingsWithOptions(appGroupIdentity: string, request: $_model.ListProceedingsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListProceedingsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filterFinished)) {
      query["filterFinished"] = request.filterFinished;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProceedings",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/proceedings`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProceedingsResponse>(await this.callApi(params, req, runtime), new $_model.ListProceedingsResponse({}));
  }

  /**
   * 查看当前的处理流
   * 
   * @param request - ListProceedingsRequest
   * @returns ListProceedingsResponse
   */
  async listProceedings(appGroupIdentity: string, request: $_model.ListProceedingsRequest): Promise<$_model.ListProceedingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProceedingsWithOptions(appGroupIdentity, request, headers, runtime);
  }

  /**
   * Queries the results of a query analysis test. This API operation is available only to existing applications of OpenSearch Open Source Compatible Edition.
   * 
   * @param request - ListQueryProcessorAnalyzerResultsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQueryProcessorAnalyzerResultsResponse
   */
  async listQueryProcessorAnalyzerResultsWithOptions(appGroupIdentity: string, appId: string, name: string, request: $_model.ListQueryProcessorAnalyzerResultsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListQueryProcessorAnalyzerResultsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.text)) {
      query["text"] = request.text;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQueryProcessorAnalyzerResults",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appId)}/query-processors/${$dara.URL.percentEncode(name)}/analyze`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQueryProcessorAnalyzerResultsResponse>(await this.callApi(params, req, runtime), new $_model.ListQueryProcessorAnalyzerResultsResponse({}));
  }

  /**
   * Queries the results of a query analysis test. This API operation is available only to existing applications of OpenSearch Open Source Compatible Edition.
   * 
   * @param request - ListQueryProcessorAnalyzerResultsRequest
   * @returns ListQueryProcessorAnalyzerResultsResponse
   */
  async listQueryProcessorAnalyzerResults(appGroupIdentity: string, appId: string, name: string, request: $_model.ListQueryProcessorAnalyzerResultsRequest): Promise<$_model.ListQueryProcessorAnalyzerResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQueryProcessorAnalyzerResultsWithOptions(appGroupIdentity, appId, name, request, headers, runtime);
  }

  /**
   * Queries the recommended priority settings of entity types for named entity recognition (NER).
   * 
   * @param request - ListQueryProcessorNersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQueryProcessorNersResponse
   */
  async listQueryProcessorNersWithOptions(request: $_model.ListQueryProcessorNersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListQueryProcessorNersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.domain)) {
      query["domain"] = request.domain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQueryProcessorNers",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/query-processor/ner/default-priorities`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQueryProcessorNersResponse>(await this.callApi(params, req, runtime), new $_model.ListQueryProcessorNersResponse({}));
  }

  /**
   * Queries the recommended priority settings of entity types for named entity recognition (NER).
   * 
   * @param request - ListQueryProcessorNersRequest
   * @returns ListQueryProcessorNersResponse
   */
  async listQueryProcessorNers(request: $_model.ListQueryProcessorNersRequest): Promise<$_model.ListQueryProcessorNersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQueryProcessorNersWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of query analysis rules that are configured for a version of an OpenSearch application.
   * 
   * @param request - ListQueryProcessorsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQueryProcessorsResponse
   */
  async listQueryProcessorsWithOptions(appGroupIdentity: string, appId: string, request: $_model.ListQueryProcessorsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListQueryProcessorsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isActive)) {
      query["isActive"] = request.isActive;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQueryProcessors",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appId)}/query-processors`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQueryProcessorsResponse>(await this.callApi(params, req, runtime), new $_model.ListQueryProcessorsResponse({}));
  }

  /**
   * Queries a list of query analysis rules that are configured for a version of an OpenSearch application.
   * 
   * @param request - ListQueryProcessorsRequest
   * @returns ListQueryProcessorsResponse
   */
  async listQueryProcessors(appGroupIdentity: string, appId: string, request: $_model.ListQueryProcessorsRequest): Promise<$_model.ListQueryProcessorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQueryProcessorsWithOptions(appGroupIdentity, appId, request, headers, runtime);
  }

  /**
   * Queries tickets that are submitted to apply for quotas for an OpenSearch application.
   * 
   * @param request - ListQuotaReviewTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQuotaReviewTasksResponse
   */
  async listQuotaReviewTasksWithOptions(appGroupIdentity: string, request: $_model.ListQuotaReviewTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListQuotaReviewTasksResponse> {
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
      action: "ListQuotaReviewTasks",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/quota-review-tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQuotaReviewTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListQuotaReviewTasksResponse({}));
  }

  /**
   * Queries tickets that are submitted to apply for quotas for an OpenSearch application.
   * 
   * @param request - ListQuotaReviewTasksRequest
   * @returns ListQuotaReviewTasksResponse
   */
  async listQuotaReviewTasks(appGroupIdentity: string, request: $_model.ListQuotaReviewTasksRequest): Promise<$_model.ListQuotaReviewTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQuotaReviewTasksWithOptions(appGroupIdentity, request, headers, runtime);
  }

  /**
   * Queries a list of scheduled tasks of an OpenSearch application.
   * 
   * @param request - ListScheduledTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScheduledTasksResponse
   */
  async listScheduledTasksWithOptions(appGroupIdentity: string, request: $_model.ListScheduledTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListScheduledTasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScheduledTasks",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/scheduled-tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListScheduledTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListScheduledTasksResponse({}));
  }

  /**
   * Queries a list of scheduled tasks of an OpenSearch application.
   * 
   * @param request - ListScheduledTasksRequest
   * @returns ListScheduledTasksResponse
   */
  async listScheduledTasks(appGroupIdentity: string, request: $_model.ListScheduledTasksRequest): Promise<$_model.ListScheduledTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listScheduledTasksWithOptions(appGroupIdentity, request, headers, runtime);
  }

  /**
   * Queries the details of query policies.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSearchStrategiesResponse
   */
  async listSearchStrategiesWithOptions(appGroupIdentity: string, appId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSearchStrategiesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSearchStrategies",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appId)}/search-strategies`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSearchStrategiesResponse>(await this.callApi(params, req, runtime), new $_model.ListSearchStrategiesResponse({}));
  }

  /**
   * Queries the details of query policies.
   * @returns ListSearchStrategiesResponse
   */
  async listSearchStrategies(appGroupIdentity: string, appId: string): Promise<$_model.ListSearchStrategiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSearchStrategiesWithOptions(appGroupIdentity, appId, headers, runtime);
  }

  /**
   * Queries the fine sort expressions that are configured for a version of an OpenSearch application.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSecondRanksResponse
   */
  async listSecondRanksWithOptions(appGroupIdentity: string, appId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSecondRanksResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSecondRanks",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appId)}/second-ranks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSecondRanksResponse>(await this.callApi(params, req, runtime), new $_model.ListSecondRanksResponse({}));
  }

  /**
   * Queries the fine sort expressions that are configured for a version of an OpenSearch application.
   * @returns ListSecondRanksResponse
   */
  async listSecondRanks(appGroupIdentity: string, appId: string): Promise<$_model.ListSecondRanksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSecondRanksWithOptions(appGroupIdentity, appId, headers, runtime);
  }

  /**
   * Queries the suggestions that are provided by Optimization Master for slow queries.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSlowQueryCategoriesResponse
   */
  async listSlowQueryCategoriesWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSlowQueryCategoriesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSlowQueryCategories",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/optimizers/slow-query/categories`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSlowQueryCategoriesResponse>(await this.callApi(params, req, runtime), new $_model.ListSlowQueryCategoriesResponse({}));
  }

  /**
   * Queries the suggestions that are provided by Optimization Master for slow queries.
   * @returns ListSlowQueryCategoriesResponse
   */
  async listSlowQueryCategories(appGroupIdentity: string): Promise<$_model.ListSlowQueryCategoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSlowQueryCategoriesWithOptions(appGroupIdentity, headers, runtime);
  }

  /**
   * 列出优化大师慢查询Query清单
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSlowQueryQueriesResponse
   */
  async listSlowQueryQueriesWithOptions(appGroupIdentity: string, categoryIndex: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSlowQueryQueriesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSlowQueryQueries",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/optimizers/slow-query/categories/${$dara.URL.percentEncode(categoryIndex)}/queries`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSlowQueryQueriesResponse>(await this.callApi(params, req, runtime), new $_model.ListSlowQueryQueriesResponse({}));
  }

  /**
   * 列出优化大师慢查询Query清单
   * @returns ListSlowQueryQueriesResponse
   */
  async listSlowQueryQueries(appGroupIdentity: string, categoryIndex: string): Promise<$_model.ListSlowQueryQueriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSlowQueryQueriesWithOptions(appGroupIdentity, categoryIndex, headers, runtime);
  }

  /**
   * Queries a list of sort expressions that are configured for a version of an OpenSearch application.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSortExpressionsResponse
   */
  async listSortExpressionsWithOptions(appGroupIdentity: string, appId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSortExpressionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSortExpressions",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appId)}/sort-expressions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSortExpressionsResponse>(await this.callApi(params, req, runtime), new $_model.ListSortExpressionsResponse({}));
  }

  /**
   * Queries a list of sort expressions that are configured for a version of an OpenSearch application.
   * @returns ListSortExpressionsResponse
   */
  async listSortExpressions(appGroupIdentity: string, appId: string): Promise<$_model.ListSortExpressionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSortExpressionsWithOptions(appGroupIdentity, appId, headers, runtime);
  }

  /**
   * Queries all sort scripts of an application version.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSortScriptsResponse
   */
  async listSortScriptsWithOptions(appGroupIdentity: string, appVersionId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSortScriptsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSortScripts",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appVersionId)}/sort-scripts`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSortScriptsResponse>(await this.callApi(params, req, runtime), new $_model.ListSortScriptsResponse({}));
  }

  /**
   * Queries all sort scripts of an application version.
   * @returns ListSortScriptsResponse
   */
  async listSortScripts(appGroupIdentity: string, appVersionId: string): Promise<$_model.ListSortScriptsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSortScriptsWithOptions(appGroupIdentity, appVersionId, headers, runtime);
  }

  /**
   * Queries log statistics, such as application error logs, hotword rankings, and slow query logs.
   * 
   * @param request - ListStatisticLogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStatisticLogsResponse
   */
  async listStatisticLogsWithOptions(appGroupIdentity: string, moduleName: string, request: $_model.ListStatisticLogsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListStatisticLogsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.columns)) {
      query["columns"] = request.columns;
    }

    if (!$dara.isNull(request.distinct)) {
      query["distinct"] = request.distinct;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      query["query"] = request.query;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["sortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.stopTime)) {
      query["stopTime"] = request.stopTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListStatisticLogs",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/statistic-logs/${$dara.URL.percentEncode(moduleName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListStatisticLogsResponse>(await this.callApi(params, req, runtime), new $_model.ListStatisticLogsResponse({}));
  }

  /**
   * Queries log statistics, such as application error logs, hotword rankings, and slow query logs.
   * 
   * @param request - ListStatisticLogsRequest
   * @returns ListStatisticLogsResponse
   */
  async listStatisticLogs(appGroupIdentity: string, moduleName: string, request: $_model.ListStatisticLogsRequest): Promise<$_model.ListStatisticLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listStatisticLogsWithOptions(appGroupIdentity, moduleName, request, headers, runtime);
  }

  /**
   * Queries statistical reports, such as application reports, drop-down suggestion reports, hotword shading reports, A/B test reports, and data quality reports.
   * 
   * @param request - ListStatisticReportRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStatisticReportResponse
   */
  async listStatisticReportWithOptions(appGroupIdentity: string, moduleName: string, request: $_model.ListStatisticReportRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListStatisticReportResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.columns)) {
      query["columns"] = request.columns;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      query["query"] = request.query;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListStatisticReport",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/statistic-report/${$dara.URL.percentEncode(moduleName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListStatisticReportResponse>(await this.callApi(params, req, runtime), new $_model.ListStatisticReportResponse({}));
  }

  /**
   * Queries statistical reports, such as application reports, drop-down suggestion reports, hotword shading reports, A/B test reports, and data quality reports.
   * 
   * @param request - ListStatisticReportRequest
   * @returns ListStatisticReportResponse
   */
  async listStatisticReport(appGroupIdentity: string, moduleName: string, request: $_model.ListStatisticReportRequest): Promise<$_model.ListStatisticReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listStatisticReportWithOptions(appGroupIdentity, moduleName, request, headers, runtime);
  }

  /**
   * Queries tagged resources.
   * 
   * @param tmpReq - ListTagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(tmpReq: $_model.ListTagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    tmpReq.validate();
    let request = new $_model.ListTagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceId)) {
      request.resourceIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceId, "resourceId", "json");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceIdShrink)) {
      query["resourceId"] = request.resourceIdShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/resource-tags`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResourcesResponse({}));
  }

  /**
   * Queries tagged resources.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the entries of a custom analyzer.
   * 
   * @param request - ListUserAnalyzerEntriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserAnalyzerEntriesResponse
   */
  async listUserAnalyzerEntriesWithOptions(name: string, request: $_model.ListUserAnalyzerEntriesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserAnalyzerEntriesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.word)) {
      query["word"] = request.word;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserAnalyzerEntries",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/user-analyzers/${$dara.URL.percentEncode(name)}/entries`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserAnalyzerEntriesResponse>(await this.callApi(params, req, runtime), new $_model.ListUserAnalyzerEntriesResponse({}));
  }

  /**
   * Queries the entries of a custom analyzer.
   * 
   * @param request - ListUserAnalyzerEntriesRequest
   * @returns ListUserAnalyzerEntriesResponse
   */
  async listUserAnalyzerEntries(name: string, request: $_model.ListUserAnalyzerEntriesRequest): Promise<$_model.ListUserAnalyzerEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserAnalyzerEntriesWithOptions(name, request, headers, runtime);
  }

  /**
   * Queries the custom analyzers that belong to the current account.
   * 
   * @param request - ListUserAnalyzersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserAnalyzersResponse
   */
  async listUserAnalyzersWithOptions(request: $_model.ListUserAnalyzersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserAnalyzersResponse> {
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
      action: "ListUserAnalyzers",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/user-analyzers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserAnalyzersResponse>(await this.callApi(params, req, runtime), new $_model.ListUserAnalyzersResponse({}));
  }

  /**
   * Queries the custom analyzers that belong to the current account.
   * 
   * @param request - ListUserAnalyzersRequest
   * @returns ListUserAnalyzersResponse
   */
  async listUserAnalyzers(request: $_model.ListUserAnalyzersRequest): Promise<$_model.ListUserAnalyzersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserAnalyzersWithOptions(request, headers, runtime);
  }

  /**
   * Modifies the properties of an OpenSearch application or sets the online version of an OpenSearch application.
   * 
   * @param request - ModifyAppGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppGroupResponse
   */
  async modifyAppGroupWithOptions(appGroupIdentity: string, request: $_model.ModifyAppGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAppGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentVersion)) {
      body["currentVersion"] = request.currentVersion;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.domain)) {
      body["domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAppGroup",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAppGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAppGroupResponse({}));
  }

  /**
   * Modifies the properties of an OpenSearch application or sets the online version of an OpenSearch application.
   * 
   * @param request - ModifyAppGroupRequest
   * @returns ModifyAppGroupResponse
   */
  async modifyAppGroup(appGroupIdentity: string, request: $_model.ModifyAppGroupRequest): Promise<$_model.ModifyAppGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyAppGroupWithOptions(appGroupIdentity, request, headers, runtime);
  }

  /**
   * Modifies the quotas of an OpenSearch application.
   * 
   * @param request - ModifyAppGroupQuotaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppGroupQuotaResponse
   */
  async modifyAppGroupQuotaWithOptions(appGroupIdentity: string, request: $_model.ModifyAppGroupQuotaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAppGroupQuotaResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAppGroupQuota",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/quota`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAppGroupQuotaResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAppGroupQuotaResponse({}));
  }

  /**
   * Modifies the quotas of an OpenSearch application.
   * 
   * @param request - ModifyAppGroupQuotaRequest
   * @returns ModifyAppGroupQuotaResponse
   */
  async modifyAppGroupQuota(appGroupIdentity: string, request: $_model.ModifyAppGroupQuotaRequest): Promise<$_model.ModifyAppGroupQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyAppGroupQuotaWithOptions(appGroupIdentity, request, headers, runtime);
  }

  /**
   * Modifies a rough sort expression for an OpenSearch application. If you set dryRun to true, this operation checks the rough sort expression after the expression is modified. If you do not specify this parameter, false is used by default.
   * 
   * @param request - ModifyFirstRankRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFirstRankResponse
   */
  async modifyFirstRankWithOptions(appGroupIdentity: string, appId: string, name: string, request: $_model.ModifyFirstRankRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyFirstRankResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyFirstRank",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appId)}/first-ranks/${$dara.URL.percentEncode(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyFirstRankResponse>(await this.callApi(params, req, runtime), new $_model.ModifyFirstRankResponse({}));
  }

  /**
   * Modifies a rough sort expression for an OpenSearch application. If you set dryRun to true, this operation checks the rough sort expression after the expression is modified. If you do not specify this parameter, false is used by default.
   * 
   * @param request - ModifyFirstRankRequest
   * @returns ModifyFirstRankResponse
   */
  async modifyFirstRank(appGroupIdentity: string, appId: string, name: string, request: $_model.ModifyFirstRankRequest): Promise<$_model.ModifyFirstRankResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyFirstRankWithOptions(appGroupIdentity, appId, name, request, headers, runtime);
  }

  /**
   * Modifies a query analysis rule for a specific application version. If you set dryRun to true, this operation checks the specified query analysis rule. By default, the value of dryRun is false if you do not specify this parameter.
   * 
   * @param request - ModifyQueryProcessorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyQueryProcessorResponse
   */
  async modifyQueryProcessorWithOptions(appGroupIdentity: string, appId: string, name: string, request: $_model.ModifyQueryProcessorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyQueryProcessorResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyQueryProcessor",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appId)}/query-processors/${$dara.URL.percentEncode(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyQueryProcessorResponse>(await this.callApi(params, req, runtime), new $_model.ModifyQueryProcessorResponse({}));
  }

  /**
   * Modifies a query analysis rule for a specific application version. If you set dryRun to true, this operation checks the specified query analysis rule. By default, the value of dryRun is false if you do not specify this parameter.
   * 
   * @param request - ModifyQueryProcessorRequest
   * @returns ModifyQueryProcessorResponse
   */
  async modifyQueryProcessor(appGroupIdentity: string, appId: string, name: string, request: $_model.ModifyQueryProcessorRequest): Promise<$_model.ModifyQueryProcessorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyQueryProcessorWithOptions(appGroupIdentity, appId, name, request, headers, runtime);
  }

  /**
   * Modifies a scheduled task.
   * 
   * @param request - ModifyScheduledTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyScheduledTaskResponse
   */
  async modifyScheduledTaskWithOptions(appGroupIdentity: string, taskId: string, request: $_model.ModifyScheduledTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyScheduledTaskResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyScheduledTask",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/scheduled-tasks/${$dara.URL.percentEncode(taskId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyScheduledTaskResponse>(await this.callApi(params, req, runtime), new $_model.ModifyScheduledTaskResponse({}));
  }

  /**
   * Modifies a scheduled task.
   * 
   * @param request - ModifyScheduledTaskRequest
   * @returns ModifyScheduledTaskResponse
   */
  async modifyScheduledTask(appGroupIdentity: string, taskId: string, request: $_model.ModifyScheduledTaskRequest): Promise<$_model.ModifyScheduledTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyScheduledTaskWithOptions(appGroupIdentity, taskId, request, headers, runtime);
  }

  /**
   * Modifies a fine sort expression that is configured for a specific OpenSearch application version. If you set dryRun to true, the specified fine sort expression is checked after the expression is modified. By default, the value of dryRun is false if you do not specify this parameter.
   * 
   * @param request - ModifySecondRankRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySecondRankResponse
   */
  async modifySecondRankWithOptions(appGroupIdentity: string, appId: string, name: string, request: $_model.ModifySecondRankRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySecondRankResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySecondRank",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appId)}/second-ranks/${$dara.URL.percentEncode(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySecondRankResponse>(await this.callApi(params, req, runtime), new $_model.ModifySecondRankResponse({}));
  }

  /**
   * Modifies a fine sort expression that is configured for a specific OpenSearch application version. If you set dryRun to true, the specified fine sort expression is checked after the expression is modified. By default, the value of dryRun is false if you do not specify this parameter.
   * 
   * @param request - ModifySecondRankRequest
   * @returns ModifySecondRankResponse
   */
  async modifySecondRank(appGroupIdentity: string, appId: string, name: string, request: $_model.ModifySecondRankRequest): Promise<$_model.ModifySecondRankResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifySecondRankWithOptions(appGroupIdentity, appId, name, request, headers, runtime);
  }

  /**
   * Accepts the changes in intervention entries.
   * 
   * @param request - PushInterventionDictionaryEntriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushInterventionDictionaryEntriesResponse
   */
  async pushInterventionDictionaryEntriesWithOptions(name: string, request: $_model.PushInterventionDictionaryEntriesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PushInterventionDictionaryEntriesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.toArray(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushInterventionDictionaryEntries",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/intervention-dictionaries/${$dara.URL.percentEncode(name)}/entries/actions/bulk`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushInterventionDictionaryEntriesResponse>(await this.callApi(params, req, runtime), new $_model.PushInterventionDictionaryEntriesResponse({}));
  }

  /**
   * Accepts the changes in intervention entries.
   * 
   * @param request - PushInterventionDictionaryEntriesRequest
   * @returns PushInterventionDictionaryEntriesResponse
   */
  async pushInterventionDictionaryEntries(name: string, request: $_model.PushInterventionDictionaryEntriesRequest): Promise<$_model.PushInterventionDictionaryEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushInterventionDictionaryEntriesWithOptions(name, request, headers, runtime);
  }

  /**
   * Accepts the changes in the entries of a custom analyzer.
   * 
   * @param request - PushUserAnalyzerEntriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushUserAnalyzerEntriesResponse
   */
  async pushUserAnalyzerEntriesWithOptions(name: string, request: $_model.PushUserAnalyzerEntriesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PushUserAnalyzerEntriesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.entries)) {
      body["entries"] = request.entries;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushUserAnalyzerEntries",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/user-analyzers/${$dara.URL.percentEncode(name)}/entries/actions/bulk`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushUserAnalyzerEntriesResponse>(await this.callApi(params, req, runtime), new $_model.PushUserAnalyzerEntriesResponse({}));
  }

  /**
   * Accepts the changes in the entries of a custom analyzer.
   * 
   * @param request - PushUserAnalyzerEntriesRequest
   * @returns PushUserAnalyzerEntriesResponse
   */
  async pushUserAnalyzerEntries(name: string, request: $_model.PushUserAnalyzerEntriesRequest): Promise<$_model.PushUserAnalyzerEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushUserAnalyzerEntriesWithOptions(name, request, headers, runtime);
  }

  /**
   * 发布排序脚本
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseSortScriptResponse
   */
  async releaseSortScriptWithOptions(appGroupIdentity: string, scriptName: string, appVersionId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseSortScriptResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseSortScript",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appVersionId)}/sort-scripts/${$dara.URL.percentEncode(scriptName)}/actions/release`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseSortScriptResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseSortScriptResponse({}));
  }

  /**
   * 发布排序脚本
   * @returns ReleaseSortScriptResponse
   */
  async releaseSortScript(appGroupIdentity: string, scriptName: string, appVersionId: string): Promise<$_model.ReleaseSortScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.releaseSortScriptWithOptions(appGroupIdentity, scriptName, appVersionId, headers, runtime);
  }

  /**
   * Deletes a version of an OpenSearch application.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveAppResponse
   */
  async removeAppWithOptions(appGroupIdentity: string, appId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveAppResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveApp",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveAppResponse>(await this.callApi(params, req, runtime), new $_model.RemoveAppResponse({}));
  }

  /**
   * Deletes a version of an OpenSearch application.
   * @returns RemoveAppResponse
   */
  async removeApp(appGroupIdentity: string, appId: string): Promise<$_model.RemoveAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeAppWithOptions(appGroupIdentity, appId, headers, runtime);
  }

  /**
   * Deletes an OpenSearch application.
   * 
   * @remarks
   * You can delete only pay-as-you-go applications. You cannot delete subscription applications.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveAppGroupResponse
   */
  async removeAppGroupWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveAppGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveAppGroup",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveAppGroupResponse>(await this.callApi(params, req, runtime), new $_model.RemoveAppGroupResponse({}));
  }

  /**
   * Deletes an OpenSearch application.
   * 
   * @remarks
   * You can delete only pay-as-you-go applications. You cannot delete subscription applications.
   * @returns RemoveAppGroupResponse
   */
  async removeAppGroup(appGroupIdentity: string): Promise<$_model.RemoveAppGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeAppGroupWithOptions(appGroupIdentity, headers, runtime);
  }

  /**
   * Disables data collection.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveDataCollectionResponse
   */
  async removeDataCollectionWithOptions(appGroupIdentity: string, dataCollectionIdentity: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveDataCollectionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveDataCollection",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/data-collections/${$dara.URL.percentEncode(dataCollectionIdentity)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveDataCollectionResponse>(await this.callApi(params, req, runtime), new $_model.RemoveDataCollectionResponse({}));
  }

  /**
   * Disables data collection.
   * @returns RemoveDataCollectionResponse
   */
  async removeDataCollection(appGroupIdentity: string, dataCollectionIdentity: string): Promise<$_model.RemoveDataCollectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeDataCollectionWithOptions(appGroupIdentity, dataCollectionIdentity, headers, runtime);
  }

  /**
   * Deletes a rough sort expression for a version of an OpenSearch application.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveFirstRankResponse
   */
  async removeFirstRankWithOptions(appGroupIdentity: string, appId: string, name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveFirstRankResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveFirstRank",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appId)}/first-ranks/${$dara.URL.percentEncode(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveFirstRankResponse>(await this.callApi(params, req, runtime), new $_model.RemoveFirstRankResponse({}));
  }

  /**
   * Deletes a rough sort expression for a version of an OpenSearch application.
   * @returns RemoveFirstRankResponse
   */
  async removeFirstRank(appGroupIdentity: string, appId: string, name: string): Promise<$_model.RemoveFirstRankResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeFirstRankWithOptions(appGroupIdentity, appId, name, headers, runtime);
  }

  /**
   * Deletes an intervention dictionary.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveInterventionDictionaryResponse
   */
  async removeInterventionDictionaryWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveInterventionDictionaryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveInterventionDictionary",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/intervention-dictionaries/${$dara.URL.percentEncode(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveInterventionDictionaryResponse>(await this.callApi(params, req, runtime), new $_model.RemoveInterventionDictionaryResponse({}));
  }

  /**
   * Deletes an intervention dictionary.
   * @returns RemoveInterventionDictionaryResponse
   */
  async removeInterventionDictionary(name: string): Promise<$_model.RemoveInterventionDictionaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeInterventionDictionaryWithOptions(name, headers, runtime);
  }

  /**
   * Deletes a query analysis rule for an OpenSearch application version.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveQueryProcessorResponse
   */
  async removeQueryProcessorWithOptions(appGroupIdentity: string, appId: string, name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveQueryProcessorResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveQueryProcessor",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appId)}/query-processors/${$dara.URL.percentEncode(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveQueryProcessorResponse>(await this.callApi(params, req, runtime), new $_model.RemoveQueryProcessorResponse({}));
  }

  /**
   * Deletes a query analysis rule for an OpenSearch application version.
   * @returns RemoveQueryProcessorResponse
   */
  async removeQueryProcessor(appGroupIdentity: string, appId: string, name: string): Promise<$_model.RemoveQueryProcessorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeQueryProcessorWithOptions(appGroupIdentity, appId, name, headers, runtime);
  }

  /**
   * Deletes a scheduled task of an OpenSearch application.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveScheduledTaskResponse
   */
  async removeScheduledTaskWithOptions(appGroupIdentity: string, taskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveScheduledTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveScheduledTask",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/scheduled-tasks/${$dara.URL.percentEncode(taskId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveScheduledTaskResponse>(await this.callApi(params, req, runtime), new $_model.RemoveScheduledTaskResponse({}));
  }

  /**
   * Deletes a scheduled task of an OpenSearch application.
   * @returns RemoveScheduledTaskResponse
   */
  async removeScheduledTask(appGroupIdentity: string, taskId: string): Promise<$_model.RemoveScheduledTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeScheduledTaskWithOptions(appGroupIdentity, taskId, headers, runtime);
  }

  /**
   * Deletes a query policy.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveSearchStrategyResponse
   */
  async removeSearchStrategyWithOptions(appGroupIdentity: string, appId: string, strategyName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveSearchStrategyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveSearchStrategy",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appId)}/search-strategies/${$dara.URL.percentEncode(strategyName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveSearchStrategyResponse>(await this.callApi(params, req, runtime), new $_model.RemoveSearchStrategyResponse({}));
  }

  /**
   * Deletes a query policy.
   * @returns RemoveSearchStrategyResponse
   */
  async removeSearchStrategy(appGroupIdentity: string, appId: string, strategyName: string): Promise<$_model.RemoveSearchStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeSearchStrategyWithOptions(appGroupIdentity, appId, strategyName, headers, runtime);
  }

  /**
   * Deletes a fine sort expression from a version of an OpenSearch application.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveSecondRankResponse
   */
  async removeSecondRankWithOptions(appGroupIdentity: string, appId: string, name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveSecondRankResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveSecondRank",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appId)}/second-ranks/${$dara.URL.percentEncode(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveSecondRankResponse>(await this.callApi(params, req, runtime), new $_model.RemoveSecondRankResponse({}));
  }

  /**
   * Deletes a fine sort expression from a version of an OpenSearch application.
   * @returns RemoveSecondRankResponse
   */
  async removeSecondRank(appGroupIdentity: string, appId: string, name: string): Promise<$_model.RemoveSecondRankResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeSecondRankWithOptions(appGroupIdentity, appId, name, headers, runtime);
  }

  /**
   * Deletes a custom analyzer.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUserAnalyzerResponse
   */
  async removeUserAnalyzerWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveUserAnalyzerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveUserAnalyzer",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/user-analyzers/${$dara.URL.percentEncode(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveUserAnalyzerResponse>(await this.callApi(params, req, runtime), new $_model.RemoveUserAnalyzerResponse({}));
  }

  /**
   * Deletes a custom analyzer.
   * @returns RemoveUserAnalyzerResponse
   */
  async removeUserAnalyzer(name: string): Promise<$_model.RemoveUserAnalyzerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeUserAnalyzerWithOptions(name, headers, runtime);
  }

  /**
   * Renews an application. This operation is not available now. You must renew an application in the OpenSearch console.
   * 
   * @param request - RenewAppGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewAppGroupResponse
   */
  async renewAppGroupWithOptions(appGroupIdentity: string, request: $_model.RenewAppGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RenewAppGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewAppGroup",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/actions/renew`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewAppGroupResponse>(await this.callApi(params, req, runtime), new $_model.RenewAppGroupResponse({}));
  }

  /**
   * Renews an application. This operation is not available now. You must renew an application in the OpenSearch console.
   * 
   * @param request - RenewAppGroupRequest
   * @returns RenewAppGroupResponse
   */
  async renewAppGroup(appGroupIdentity: string, request: $_model.RenewAppGroupRequest): Promise<$_model.RenewAppGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renewAppGroupWithOptions(appGroupIdentity, request, headers, runtime);
  }

  /**
   * Converts a service-based application to an instance-based application.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReplaceAppGroupCommodityCodeResponse
   */
  async replaceAppGroupCommodityCodeWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ReplaceAppGroupCommodityCodeResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ReplaceAppGroupCommodityCode",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/actions/to-instance-typed`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReplaceAppGroupCommodityCodeResponse>(await this.callApi(params, req, runtime), new $_model.ReplaceAppGroupCommodityCodeResponse({}));
  }

  /**
   * Converts a service-based application to an instance-based application.
   * @returns ReplaceAppGroupCommodityCodeResponse
   */
  async replaceAppGroupCommodityCode(appGroupIdentity: string): Promise<$_model.ReplaceAppGroupCommodityCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.replaceAppGroupCommodityCodeWithOptions(appGroupIdentity, headers, runtime);
  }

  /**
   * Uploads a sort script.
   * 
   * @param request - SaveSortScriptFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSortScriptFileResponse
   */
  async saveSortScriptFileWithOptions(appGroupIdentity: string, scriptName: string, appVersionId: string, fileName: string, request: $_model.SaveSortScriptFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SaveSortScriptFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.version)) {
      body["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveSortScriptFile",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appVersionId)}/sort-scripts/${$dara.URL.percentEncode(scriptName)}/files/src/${$dara.URL.percentEncode(fileName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveSortScriptFileResponse>(await this.callApi(params, req, runtime), new $_model.SaveSortScriptFileResponse({}));
  }

  /**
   * Uploads a sort script.
   * 
   * @param request - SaveSortScriptFileRequest
   * @returns SaveSortScriptFileResponse
   */
  async saveSortScriptFile(appGroupIdentity: string, scriptName: string, appVersionId: string, fileName: string, request: $_model.SaveSortScriptFileRequest): Promise<$_model.SaveSortScriptFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.saveSortScriptFileWithOptions(appGroupIdentity, scriptName, appVersionId, fileName, request, headers, runtime);
  }

  /**
   * 立即进行慢查询分析
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartSlowQueryAnalyzerResponse
   */
  async startSlowQueryAnalyzerWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartSlowQueryAnalyzerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StartSlowQueryAnalyzer",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/optimizers/slow-query/actions/run`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartSlowQueryAnalyzerResponse>(await this.callApi(params, req, runtime), new $_model.StartSlowQueryAnalyzerResponse({}));
  }

  /**
   * 立即进行慢查询分析
   * @returns StartSlowQueryAnalyzerResponse
   */
  async startSlowQueryAnalyzer(appGroupIdentity: string): Promise<$_model.StartSlowQueryAnalyzerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startSlowQueryAnalyzerWithOptions(appGroupIdentity, headers, runtime);
  }

  /**
   * Adds tags to resources.
   * 
   * @param request - TagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceId)) {
      body["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      body["tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/resource-tags`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * Adds tags to resources.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Unbinds a custom analyzer from an Elasticsearch instance.
   * 
   * @remarks
   * You can call this operation to unbind a custom analyzer from an Elasticsearch instance.
   * 
   * @param request - UnbindESUserAnalyzerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindESUserAnalyzerResponse
   */
  async unbindESUserAnalyzerWithOptions(appGroupIdentity: string, esInstanceId: string, request: $_model.UnbindESUserAnalyzerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindESUserAnalyzerResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindESUserAnalyzer",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/es/${$dara.URL.percentEncode(esInstanceId)}/actions/unbind-analyzer`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindESUserAnalyzerResponse>(await this.callApi(params, req, runtime), new $_model.UnbindESUserAnalyzerResponse({}));
  }

  /**
   * Unbinds a custom analyzer from an Elasticsearch instance.
   * 
   * @remarks
   * You can call this operation to unbind a custom analyzer from an Elasticsearch instance.
   * 
   * @param request - UnbindESUserAnalyzerRequest
   * @returns UnbindESUserAnalyzerResponse
   */
  async unbindESUserAnalyzer(appGroupIdentity: string, esInstanceId: string, request: $_model.UnbindESUserAnalyzerRequest): Promise<$_model.UnbindESUserAnalyzerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unbindESUserAnalyzerWithOptions(appGroupIdentity, esInstanceId, request, headers, runtime);
  }

  /**
   * Unbinds an Elasticsearch instance from an OpenSearch application.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindEsInstanceResponse
   */
  async unbindEsInstanceWithOptions(appGroupIdentity: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindEsInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindEsInstance",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/actions/unbind-es-instance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindEsInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UnbindEsInstanceResponse({}));
  }

  /**
   * Unbinds an Elasticsearch instance from an OpenSearch application.
   * @returns UnbindEsInstanceResponse
   */
  async unbindEsInstance(appGroupIdentity: string): Promise<$_model.UnbindEsInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unbindEsInstanceWithOptions(appGroupIdentity, headers, runtime);
  }

  /**
   * Remove tags from resources.
   * 
   * @param tmpReq - UntagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(tmpReq: $_model.UntagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    tmpReq.validate();
    let request = new $_model.UntagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceId)) {
      request.resourceIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceId, "resourceId", "json");
    }

    if (!$dara.isNull(tmpReq.tagKey)) {
      request.tagKeyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagKey, "tagKey", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.all)) {
      query["all"] = request.all;
    }

    if (!$dara.isNull(request.resourceIdShrink)) {
      query["resourceId"] = request.resourceIdShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKeyShrink)) {
      query["tagKey"] = request.tagKeyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/resource-tags`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UntagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UntagResourcesResponse({}));
  }

  /**
   * Remove tags from resources.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.untagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Modifies the parameters of an A/B test.
   * 
   * @param request - UpdateABTestExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateABTestExperimentResponse
   */
  async updateABTestExperimentWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string, request: $_model.UpdateABTestExperimentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateABTestExperimentResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateABTestExperiment",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/scenes/${$dara.URL.percentEncode(sceneId)}/groups/${$dara.URL.percentEncode(groupId)}/experiments/${$dara.URL.percentEncode(experimentId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateABTestExperimentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateABTestExperimentResponse({}));
  }

  /**
   * Modifies the parameters of an A/B test.
   * 
   * @param request - UpdateABTestExperimentRequest
   * @returns UpdateABTestExperimentResponse
   */
  async updateABTestExperiment(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string, request: $_model.UpdateABTestExperimentRequest): Promise<$_model.UpdateABTestExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateABTestExperimentWithOptions(appGroupIdentity, sceneId, groupId, experimentId, request, headers, runtime);
  }

  /**
   * Modifies whitelists.
   * 
   * @param request - UpdateABTestFixedFlowDividersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateABTestFixedFlowDividersResponse
   */
  async updateABTestFixedFlowDividersWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string, request: $_model.UpdateABTestFixedFlowDividersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateABTestFixedFlowDividersResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateABTestFixedFlowDividers",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/scenes/${$dara.URL.percentEncode(sceneId)}/groups/${$dara.URL.percentEncode(groupId)}/experiments/${$dara.URL.percentEncode(experimentId)}/fixed-flow-dividers`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateABTestFixedFlowDividersResponse>(await this.callApi(params, req, runtime), new $_model.UpdateABTestFixedFlowDividersResponse({}));
  }

  /**
   * Modifies whitelists.
   * 
   * @param request - UpdateABTestFixedFlowDividersRequest
   * @returns UpdateABTestFixedFlowDividersResponse
   */
  async updateABTestFixedFlowDividers(appGroupIdentity: string, sceneId: string, groupId: string, experimentId: string, request: $_model.UpdateABTestFixedFlowDividersRequest): Promise<$_model.UpdateABTestFixedFlowDividersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateABTestFixedFlowDividersWithOptions(appGroupIdentity, sceneId, groupId, experimentId, request, headers, runtime);
  }

  /**
   * Modifies a test group.
   * 
   * @param request - UpdateABTestGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateABTestGroupResponse
   */
  async updateABTestGroupWithOptions(appGroupIdentity: string, sceneId: string, groupId: string, request: $_model.UpdateABTestGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateABTestGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateABTestGroup",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/scenes/${$dara.URL.percentEncode(sceneId)}/groups/${$dara.URL.percentEncode(groupId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateABTestGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateABTestGroupResponse({}));
  }

  /**
   * Modifies a test group.
   * 
   * @param request - UpdateABTestGroupRequest
   * @returns UpdateABTestGroupResponse
   */
  async updateABTestGroup(appGroupIdentity: string, sceneId: string, groupId: string, request: $_model.UpdateABTestGroupRequest): Promise<$_model.UpdateABTestGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateABTestGroupWithOptions(appGroupIdentity, sceneId, groupId, request, headers, runtime);
  }

  /**
   * Modifies an A/B test scenario.
   * 
   * @param request - UpdateABTestSceneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateABTestSceneResponse
   */
  async updateABTestSceneWithOptions(appGroupIdentity: string, sceneId: string, request: $_model.UpdateABTestSceneRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateABTestSceneResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateABTestScene",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/scenes/${$dara.URL.percentEncode(sceneId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateABTestSceneResponse>(await this.callApi(params, req, runtime), new $_model.UpdateABTestSceneResponse({}));
  }

  /**
   * Modifies an A/B test scenario.
   * 
   * @param request - UpdateABTestSceneRequest
   * @returns UpdateABTestSceneResponse
   */
  async updateABTestScene(appGroupIdentity: string, sceneId: string, request: $_model.UpdateABTestSceneRequest): Promise<$_model.UpdateABTestSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateABTestSceneWithOptions(appGroupIdentity, sceneId, request, headers, runtime);
  }

  /**
   * Updates fetch fields. A dry run is supported.
   * 
   * @param request - UpdateFetchFieldsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFetchFieldsResponse
   */
  async updateFetchFieldsWithOptions(appGroupIdentity: string, appId: string, request: $_model.UpdateFetchFieldsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFetchFieldsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFetchFields",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appId)}/fetch-fields`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFetchFieldsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFetchFieldsResponse({}));
  }

  /**
   * Updates fetch fields. A dry run is supported.
   * 
   * @param request - UpdateFetchFieldsRequest
   * @returns UpdateFetchFieldsResponse
   */
  async updateFetchFields(appGroupIdentity: string, appId: string, request: $_model.UpdateFetchFieldsRequest): Promise<$_model.UpdateFetchFieldsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFetchFieldsWithOptions(appGroupIdentity, appId, request, headers, runtime);
  }

  /**
   * Sets the default algorithm instance used by the specified application. The new algorithm instance automatically overwrites the most recently set default instance. If no instance is set, the default instance is canceled.
   * 
   * @param request - UpdateFunctionDefaultInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFunctionDefaultInstanceResponse
   */
  async updateFunctionDefaultInstanceWithOptions(appGroupIdentity: string, functionName: string, request: $_model.UpdateFunctionDefaultInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFunctionDefaultInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceName)) {
      body["instanceName"] = request.instanceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFunctionDefaultInstance",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/functions/${$dara.URL.percentEncode(functionName)}/default-instance`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFunctionDefaultInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFunctionDefaultInstanceResponse({}));
  }

  /**
   * Sets the default algorithm instance used by the specified application. The new algorithm instance automatically overwrites the most recently set default instance. If no instance is set, the default instance is canceled.
   * 
   * @param request - UpdateFunctionDefaultInstanceRequest
   * @returns UpdateFunctionDefaultInstanceResponse
   */
  async updateFunctionDefaultInstance(appGroupIdentity: string, functionName: string, request: $_model.UpdateFunctionDefaultInstanceRequest): Promise<$_model.UpdateFunctionDefaultInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFunctionDefaultInstanceWithOptions(appGroupIdentity, functionName, request, headers, runtime);
  }

  /**
   * Updates an algorithm instance.
   * 
   * @param request - UpdateFunctionInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFunctionInstanceResponse
   */
  async updateFunctionInstanceWithOptions(appGroupIdentity: string, functionName: string, instanceName: string, request: $_model.UpdateFunctionInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFunctionInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createParameters)) {
      body["createParameters"] = request.createParameters;
    }

    if (!$dara.isNull(request.cron)) {
      body["cron"] = request.cron;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.usageParameters)) {
      body["usageParameters"] = request.usageParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFunctionInstance",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/functions/${$dara.URL.percentEncode(functionName)}/instances/${$dara.URL.percentEncode(instanceName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFunctionInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFunctionInstanceResponse({}));
  }

  /**
   * Updates an algorithm instance.
   * 
   * @param request - UpdateFunctionInstanceRequest
   * @returns UpdateFunctionInstanceResponse
   */
  async updateFunctionInstance(appGroupIdentity: string, functionName: string, instanceName: string, request: $_model.UpdateFunctionInstanceRequest): Promise<$_model.UpdateFunctionInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFunctionInstanceWithOptions(appGroupIdentity, functionName, instanceName, request, headers, runtime);
  }

  /**
   * Updates an algorithm resource.
   * 
   * @remarks
   * You can call this operation to update the information about resources by resource name. You can modify only the values of data and description.
   * 
   * @param request - UpdateFunctionResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFunctionResourceResponse
   */
  async updateFunctionResourceWithOptions(appGroupIdentity: string, functionName: string, resourceName: string, request: $_model.UpdateFunctionResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFunctionResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.data)) {
      body["Data"] = request.data;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFunctionResource",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/functions/${$dara.URL.percentEncode(functionName)}/resources/${$dara.URL.percentEncode(resourceName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFunctionResourceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFunctionResourceResponse({}));
  }

  /**
   * Updates an algorithm resource.
   * 
   * @remarks
   * You can call this operation to update the information about resources by resource name. You can modify only the values of data and description.
   * 
   * @param request - UpdateFunctionResourceRequest
   * @returns UpdateFunctionResourceResponse
   */
  async updateFunctionResource(appGroupIdentity: string, functionName: string, resourceName: string, request: $_model.UpdateFunctionResourceRequest): Promise<$_model.UpdateFunctionResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFunctionResourceWithOptions(appGroupIdentity, functionName, resourceName, request, headers, runtime);
  }

  /**
   * Modifies a query policy.
   * 
   * @param request - UpdateSearchStrategyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSearchStrategyResponse
   */
  async updateSearchStrategyWithOptions(appGroupIdentity: string, appId: string, strategyName: string, request: $_model.UpdateSearchStrategyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSearchStrategyResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSearchStrategy",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appId)}/search-strategies/${$dara.URL.percentEncode(strategyName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSearchStrategyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSearchStrategyResponse({}));
  }

  /**
   * Modifies a query policy.
   * 
   * @param request - UpdateSearchStrategyRequest
   * @returns UpdateSearchStrategyResponse
   */
  async updateSearchStrategy(appGroupIdentity: string, appId: string, strategyName: string, request: $_model.UpdateSearchStrategyRequest): Promise<$_model.UpdateSearchStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSearchStrategyWithOptions(appGroupIdentity, appId, strategyName, request, headers, runtime);
  }

  /**
   * Modifies the description of a sort script.
   * 
   * @remarks
   * You can call this operation to modify the description of a sort script.
   * 
   * @param request - UpdateSortScriptRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSortScriptResponse
   */
  async updateSortScriptWithOptions(appGroupIdentity: string, appVersionId: string, scriptName: string, request: $_model.UpdateSortScriptRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSortScriptResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSortScript",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appVersionId)}/sort-scripts/${$dara.URL.percentEncode(scriptName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSortScriptResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSortScriptResponse({}));
  }

  /**
   * Modifies the description of a sort script.
   * 
   * @remarks
   * You can call this operation to modify the description of a sort script.
   * 
   * @param request - UpdateSortScriptRequest
   * @returns UpdateSortScriptResponse
   */
  async updateSortScript(appGroupIdentity: string, appVersionId: string, scriptName: string, request: $_model.UpdateSortScriptRequest): Promise<$_model.UpdateSortScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSortScriptWithOptions(appGroupIdentity, appVersionId, scriptName, request, headers, runtime);
  }

  /**
   * Updates summaries. A dry run is supported.
   * 
   * @param request - UpdateSummariesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSummariesResponse
   */
  async updateSummariesWithOptions(appGroupIdentity: string, appId: string, request: $_model.UpdateSummariesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSummariesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.toArray(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSummaries",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/app-groups/${$dara.URL.percentEncode(appGroupIdentity)}/apps/${$dara.URL.percentEncode(appId)}/summaries`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSummariesResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSummariesResponse({}));
  }

  /**
   * Updates summaries. A dry run is supported.
   * 
   * @param request - UpdateSummariesRequest
   * @returns UpdateSummariesResponse
   */
  async updateSummaries(appGroupIdentity: string, appId: string, request: $_model.UpdateSummariesRequest): Promise<$_model.UpdateSummariesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSummariesWithOptions(appGroupIdentity, appId, request, headers, runtime);
  }

  /**
   * Verifies data sources.
   * 
   * @param request - ValidateDataSourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateDataSourcesResponse
   */
  async validateDataSourcesWithOptions(request: $_model.ValidateDataSourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ValidateDataSourcesResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateDataSources",
      version: "2017-12-25",
      protocol: "HTTPS",
      pathname: `/v4/openapi/assist/data-sources/validations`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidateDataSourcesResponse>(await this.callApi(params, req, runtime), new $_model.ValidateDataSourcesResponse({}));
  }

  /**
   * Verifies data sources.
   * 
   * @param request - ValidateDataSourcesRequest
   * @returns ValidateDataSourcesResponse
   */
  async validateDataSources(request: $_model.ValidateDataSourcesRequest): Promise<$_model.ValidateDataSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.validateDataSourcesWithOptions(request, headers, runtime);
  }

}
