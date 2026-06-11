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
    this._endpoint = this.getEndpoint("dms", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds a user to a specified workspace.
   * 
   * @param request - AddUserToDataAgentWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserToDataAgentWorkspaceResponse
   */
  async addUserToDataAgentWorkspaceWithOptions(request: $_model.AddUserToDataAgentWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddUserToDataAgentWorkspaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DMSUnit)) {
      query["DMSUnit"] = request.DMSUnit;
    }

    if (!$dara.isNull(request.memberId)) {
      query["MemberId"] = request.memberId;
    }

    if (!$dara.isNull(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUserToDataAgentWorkspace",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddUserToDataAgentWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.AddUserToDataAgentWorkspaceResponse({}));
  }

  /**
   * Adds a user to a specified workspace.
   * 
   * @param request - AddUserToDataAgentWorkspaceRequest
   * @returns AddUserToDataAgentWorkspaceResponse
   */
  async addUserToDataAgentWorkspace(request: $_model.AddUserToDataAgentWorkspaceRequest): Promise<$_model.AddUserToDataAgentWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUserToDataAgentWorkspaceWithOptions(request, runtime);
  }

  /**
   * Creates partitions for a data lake table in a batch.
   * 
   * @param tmpReq - BatchCreateDataLakePartitionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchCreateDataLakePartitionsResponse
   */
  async batchCreateDataLakePartitionsWithOptions(tmpReq: $_model.BatchCreateDataLakePartitionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchCreateDataLakePartitionsResponse> {
    tmpReq.validate();
    let request = new $_model.BatchCreateDataLakePartitionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.partitionInputs)) {
      request.partitionInputsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.partitionInputs, "PartitionInputs", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.ifNotExists)) {
      query["IfNotExists"] = request.ifNotExists;
    }

    if (!$dara.isNull(request.needResult)) {
      query["NeedResult"] = request.needResult;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.partitionInputsShrink)) {
      body["PartitionInputs"] = request.partitionInputsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchCreateDataLakePartitions",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchCreateDataLakePartitionsResponse>(await this.callApi(params, req, runtime), new $_model.BatchCreateDataLakePartitionsResponse({}));
  }

  /**
   * Creates partitions for a data lake table in a batch.
   * 
   * @param request - BatchCreateDataLakePartitionsRequest
   * @returns BatchCreateDataLakePartitionsResponse
   */
  async batchCreateDataLakePartitions(request: $_model.BatchCreateDataLakePartitionsRequest): Promise<$_model.BatchCreateDataLakePartitionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchCreateDataLakePartitionsWithOptions(request, runtime);
  }

  /**
   * Batch deletes partitions from a data lake table.
   * 
   * @param request - BatchDeleteDataLakePartitionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteDataLakePartitionsResponse
   */
  async batchDeleteDataLakePartitionsWithOptions(request: $_model.BatchDeleteDataLakePartitionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDeleteDataLakePartitionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.ifExists)) {
      query["IfExists"] = request.ifExists;
    }

    if (!$dara.isNull(request.partitionValuesList)) {
      query["PartitionValuesList"] = request.partitionValuesList;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchDeleteDataLakePartitions",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchDeleteDataLakePartitionsResponse>(await this.callApi(params, req, runtime), new $_model.BatchDeleteDataLakePartitionsResponse({}));
  }

  /**
   * Batch deletes partitions from a data lake table.
   * 
   * @param request - BatchDeleteDataLakePartitionsRequest
   * @returns BatchDeleteDataLakePartitionsResponse
   */
  async batchDeleteDataLakePartitions(request: $_model.BatchDeleteDataLakePartitionsRequest): Promise<$_model.BatchDeleteDataLakePartitionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchDeleteDataLakePartitionsWithOptions(request, runtime);
  }

  /**
   * Update partitions in a data lake table in batch.
   * 
   * @param tmpReq - BatchUpdateDataLakePartitionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchUpdateDataLakePartitionsResponse
   */
  async batchUpdateDataLakePartitionsWithOptions(tmpReq: $_model.BatchUpdateDataLakePartitionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchUpdateDataLakePartitionsResponse> {
    tmpReq.validate();
    let request = new $_model.BatchUpdateDataLakePartitionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.partitionInputs)) {
      request.partitionInputsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.partitionInputs, "PartitionInputs", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.partitionInputsShrink)) {
      body["PartitionInputs"] = request.partitionInputsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchUpdateDataLakePartitions",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchUpdateDataLakePartitionsResponse>(await this.callApi(params, req, runtime), new $_model.BatchUpdateDataLakePartitionsResponse({}));
  }

  /**
   * Update partitions in a data lake table in batch.
   * 
   * @param request - BatchUpdateDataLakePartitionsRequest
   * @returns BatchUpdateDataLakePartitionsResponse
   */
  async batchUpdateDataLakePartitions(request: $_model.BatchUpdateDataLakePartitionsRequest): Promise<$_model.BatchUpdateDataLakePartitionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchUpdateDataLakePartitionsWithOptions(request, runtime);
  }

  /**
   * Update an Airflow instance\\"s custom configuration
   * 
   * @remarks
   * Configure the airflow\\.cfg file for DMS Airflow.
   * 
   * @param tmpReq - ConfigAirflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigAirflowResponse
   */
  async configAirflowWithOptions(tmpReq: $_model.ConfigAirflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigAirflowResponse> {
    tmpReq.validate();
    let request = new $_model.ConfigAirflowShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.customAirflowCfg)) {
      request.customAirflowCfgShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customAirflowCfg, "CustomAirflowCfg", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.airflowId)) {
      query["AirflowId"] = request.airflowId;
    }

    if (!$dara.isNull(request.customAirflowCfgShrink)) {
      query["CustomAirflowCfg"] = request.customAirflowCfgShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigAirflow",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigAirflowResponse>(await this.callApi(params, req, runtime), new $_model.ConfigAirflowResponse({}));
  }

  /**
   * Update an Airflow instance\\"s custom configuration
   * 
   * @remarks
   * Configure the airflow\\.cfg file for DMS Airflow.
   * 
   * @param request - ConfigAirflowRequest
   * @returns ConfigAirflowResponse
   */
  async configAirflow(request: $_model.ConfigAirflowRequest): Promise<$_model.ConfigAirflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configAirflowWithOptions(request, runtime);
  }

  /**
   * Creates an Airflow instance in a workspace.
   * 
   * @remarks
   * Creates an Airflow instance in a workspace.
   * 
   * @param tmpReq - CreateAirflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAirflowResponse
   */
  async createAirflowWithOptions(tmpReq: $_model.CreateAirflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAirflowResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAirflowShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dataMountInfoList)) {
      request.dataMountInfoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataMountInfoList, "DataMountInfoList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.airflowName)) {
      query["AirflowName"] = request.airflowName;
    }

    if (!$dara.isNull(request.airflowVersion)) {
      query["AirflowVersion"] = request.airflowVersion;
    }

    if (!$dara.isNull(request.appSpec)) {
      query["AppSpec"] = request.appSpec;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dagsDir)) {
      query["DagsDir"] = request.dagsDir;
    }

    if (!$dara.isNull(request.dataMountInfoListShrink)) {
      query["DataMountInfoList"] = request.dataMountInfoListShrink;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.enableServerless)) {
      query["EnableServerless"] = request.enableServerless;
    }

    if (!$dara.isNull(request.gracefulShutdownTimeout)) {
      query["GracefulShutdownTimeout"] = request.gracefulShutdownTimeout;
    }

    if (!$dara.isNull(request.ossBucketName)) {
      query["OssBucketName"] = request.ossBucketName;
    }

    if (!$dara.isNull(request.ossPath)) {
      query["OssPath"] = request.ossPath;
    }

    if (!$dara.isNull(request.pluginsDir)) {
      query["PluginsDir"] = request.pluginsDir;
    }

    if (!$dara.isNull(request.requirementFile)) {
      query["RequirementFile"] = request.requirementFile;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.startupFile)) {
      query["StartupFile"] = request.startupFile;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.workerServerlessReplicas)) {
      query["WorkerServerlessReplicas"] = request.workerServerlessReplicas;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAirflow",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAirflowResponse>(await this.callApi(params, req, runtime), new $_model.CreateAirflowResponse({}));
  }

  /**
   * Creates an Airflow instance in a workspace.
   * 
   * @remarks
   * Creates an Airflow instance in a workspace.
   * 
   * @param request - CreateAirflowRequest
   * @returns CreateAirflowResponse
   */
  async createAirflow(request: $_model.CreateAirflowRequest): Promise<$_model.CreateAirflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAirflowWithOptions(request, runtime);
  }

  /**
   * Obtains logon credentials for an Airflow instance hosted by Data Management Service (DMS). Use the returned token and host endpoint to construct a logon URL for the Airflow web UI.
   * 
   * @param request - CreateAirflowLoginTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAirflowLoginTokenResponse
   */
  async createAirflowLoginTokenWithOptions(request: $_model.CreateAirflowLoginTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAirflowLoginTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.airflowId)) {
      query["AirflowId"] = request.airflowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAirflowLoginToken",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAirflowLoginTokenResponse>(await this.callApi(params, req, runtime), new $_model.CreateAirflowLoginTokenResponse({}));
  }

  /**
   * Obtains logon credentials for an Airflow instance hosted by Data Management Service (DMS). Use the returned token and host endpoint to construct a logon URL for the Airflow web UI.
   * 
   * @param request - CreateAirflowLoginTokenRequest
   * @returns CreateAirflowLoginTokenResponse
   */
  async createAirflowLoginToken(request: $_model.CreateAirflowLoginTokenRequest): Promise<$_model.CreateAirflowLoginTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAirflowLoginTokenWithOptions(request, runtime);
  }

  /**
   * Create a custom agent in your personal space or a workspace.
   * 
   * @param tmpReq - CreateCustomAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomAgentResponse
   */
  async createCustomAgentWithOptions(tmpReq: $_model.CreateCustomAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomAgentResponse> {
    tmpReq.validate();
    let request = new $_model.CreateCustomAgentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.callbackConfig)) {
      request.callbackConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.callbackConfig, "CallbackConfig", "json");
    }

    if (!$dara.isNull(tmpReq.executionConfig)) {
      request.executionConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.executionConfig, "ExecutionConfig", "json");
    }

    if (!$dara.isNull(tmpReq.knowledgeConfigList)) {
      request.knowledgeConfigListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.knowledgeConfigList, "KnowledgeConfigList", "json");
    }

    if (!$dara.isNull(tmpReq.scheduleTaskConfig)) {
      request.scheduleTaskConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scheduleTaskConfig, "ScheduleTaskConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.callbackConfigShrink)) {
      query["CallbackConfig"] = request.callbackConfigShrink;
    }

    if (!$dara.isNull(request.DMSUnit)) {
      query["DMSUnit"] = request.DMSUnit;
    }

    if (!$dara.isNull(request.dataJson)) {
      query["DataJson"] = request.dataJson;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.executionConfigShrink)) {
      query["ExecutionConfig"] = request.executionConfigShrink;
    }

    if (!$dara.isNull(request.instruction)) {
      query["Instruction"] = request.instruction;
    }

    if (!$dara.isNull(request.knowledge)) {
      query["Knowledge"] = request.knowledge;
    }

    if (!$dara.isNull(request.knowledgeConfigListShrink)) {
      query["KnowledgeConfigList"] = request.knowledgeConfigListShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.relatedSessionId)) {
      query["RelatedSessionId"] = request.relatedSessionId;
    }

    if (!$dara.isNull(request.scheduleTaskConfigShrink)) {
      query["ScheduleTaskConfig"] = request.scheduleTaskConfigShrink;
    }

    if (!$dara.isNull(request.textReportConfig)) {
      query["TextReportConfig"] = request.textReportConfig;
    }

    if (!$dara.isNull(request.webReportConfig)) {
      query["WebReportConfig"] = request.webReportConfig;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomAgent",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCustomAgentResponse>(await this.callApi(params, req, runtime), new $_model.CreateCustomAgentResponse({}));
  }

  /**
   * Create a custom agent in your personal space or a workspace.
   * 
   * @param request - CreateCustomAgentRequest
   * @returns CreateCustomAgentResponse
   */
  async createCustomAgent(request: $_model.CreateCustomAgentRequest): Promise<$_model.CreateCustomAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomAgentWithOptions(request, runtime);
  }

  /**
   * Creates a DataAgent knowledge base. The knowledge base creator has read and write permissions. Other workspace members have permission to use it.
   * 
   * @param request - CreateDataAgentKnowledgeBaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataAgentKnowledgeBaseResponse
   */
  async createDataAgentKnowledgeBaseWithOptions(request: $_model.CreateDataAgentKnowledgeBaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataAgentKnowledgeBaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DMSUnit)) {
      query["DMSUnit"] = request.DMSUnit;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fromKbUuid)) {
      query["FromKbUuid"] = request.fromKbUuid;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataAgentKnowledgeBase",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataAgentKnowledgeBaseResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataAgentKnowledgeBaseResponse({}));
  }

  /**
   * Creates a DataAgent knowledge base. The knowledge base creator has read and write permissions. Other workspace members have permission to use it.
   * 
   * @param request - CreateDataAgentKnowledgeBaseRequest
   * @returns CreateDataAgentKnowledgeBaseResponse
   */
  async createDataAgentKnowledgeBase(request: $_model.CreateDataAgentKnowledgeBaseRequest): Promise<$_model.CreateDataAgentKnowledgeBaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataAgentKnowledgeBaseWithOptions(request, runtime);
  }

  /**
   * Create a DataAgent session
   * 
   * @param tmpReq - CreateDataAgentSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataAgentSessionResponse
   */
  async createDataAgentSessionWithOptions(tmpReq: $_model.CreateDataAgentSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataAgentSessionResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDataAgentSessionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sessionConfig)) {
      request.sessionConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sessionConfig, "SessionConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.DMSUnit)) {
      query["DMSUnit"] = request.DMSUnit;
    }

    if (!$dara.isNull(request.file)) {
      query["File"] = request.file;
    }

    if (!$dara.isNull(request.sessionConfigShrink)) {
      query["SessionConfig"] = request.sessionConfigShrink;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataAgentSession",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataAgentSessionResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataAgentSessionResponse({}));
  }

  /**
   * Create a DataAgent session
   * 
   * @param request - CreateDataAgentSessionRequest
   * @returns CreateDataAgentSessionResponse
   */
  async createDataAgentSession(request: $_model.CreateDataAgentSessionRequest): Promise<$_model.CreateDataAgentSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataAgentSessionWithOptions(request, runtime);
  }

  /**
   * Creates a DataAgent workspace.
   * 
   * @param request - CreateDataAgentWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataAgentWorkspaceResponse
   */
  async createDataAgentWorkspaceWithOptions(request: $_model.CreateDataAgentWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataAgentWorkspaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DMSUnit)) {
      query["DMSUnit"] = request.DMSUnit;
    }

    if (!$dara.isNull(request.isSessionShareEnabled)) {
      query["IsSessionShareEnabled"] = request.isSessionShareEnabled;
    }

    if (!$dara.isNull(request.workspaceDesc)) {
      query["WorkspaceDesc"] = request.workspaceDesc;
    }

    if (!$dara.isNull(request.workspaceName)) {
      query["WorkspaceName"] = request.workspaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataAgentWorkspace",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataAgentWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataAgentWorkspaceResponse({}));
  }

  /**
   * Creates a DataAgent workspace.
   * 
   * @param request - CreateDataAgentWorkspaceRequest
   * @returns CreateDataAgentWorkspaceResponse
   */
  async createDataAgentWorkspace(request: $_model.CreateDataAgentWorkspaceRequest): Promise<$_model.CreateDataAgentWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataAgentWorkspaceWithOptions(request, runtime);
  }

  /**
   * Creates a data lake database.
   * 
   * @param tmpReq - CreateDataLakeDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataLakeDatabaseResponse
   */
  async createDataLakeDatabaseWithOptions(tmpReq: $_model.CreateDataLakeDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataLakeDatabaseResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDataLakeDatabaseShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.location)) {
      query["Location"] = request.location;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataLakeDatabase",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataLakeDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataLakeDatabaseResponse({}));
  }

  /**
   * Creates a data lake database.
   * 
   * @param request - CreateDataLakeDatabaseRequest
   * @returns CreateDataLakeDatabaseResponse
   */
  async createDataLakeDatabase(request: $_model.CreateDataLakeDatabaseRequest): Promise<$_model.CreateDataLakeDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataLakeDatabaseWithOptions(request, runtime);
  }

  /**
   * Creates a user-defined function (UDF) for a data lake.
   * 
   * @param tmpReq - CreateDataLakeFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataLakeFunctionResponse
   */
  async createDataLakeFunctionWithOptions(tmpReq: $_model.CreateDataLakeFunctionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataLakeFunctionResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDataLakeFunctionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.functionInput)) {
      request.functionInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.functionInput, "FunctionInput", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.functionInputShrink)) {
      body["FunctionInput"] = request.functionInputShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataLakeFunction",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataLakeFunctionResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataLakeFunctionResponse({}));
  }

  /**
   * Creates a user-defined function (UDF) for a data lake.
   * 
   * @param request - CreateDataLakeFunctionRequest
   * @returns CreateDataLakeFunctionResponse
   */
  async createDataLakeFunction(request: $_model.CreateDataLakeFunctionRequest): Promise<$_model.CreateDataLakeFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataLakeFunctionWithOptions(request, runtime);
  }

  /**
   * Creates a partition for a data lake table.
   * 
   * @param tmpReq - CreateDataLakePartitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataLakePartitionResponse
   */
  async createDataLakePartitionWithOptions(tmpReq: $_model.CreateDataLakePartitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataLakePartitionResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDataLakePartitionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.partitionInput)) {
      request.partitionInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.partitionInput, "PartitionInput", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.ifNotExists)) {
      query["IfNotExists"] = request.ifNotExists;
    }

    if (!$dara.isNull(request.needResult)) {
      query["NeedResult"] = request.needResult;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.partitionInputShrink)) {
      body["PartitionInput"] = request.partitionInputShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataLakePartition",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataLakePartitionResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataLakePartitionResponse({}));
  }

  /**
   * Creates a partition for a data lake table.
   * 
   * @param request - CreateDataLakePartitionRequest
   * @returns CreateDataLakePartitionResponse
   */
  async createDataLakePartition(request: $_model.CreateDataLakePartitionRequest): Promise<$_model.CreateDataLakePartitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataLakePartitionWithOptions(request, runtime);
  }

  /**
   * Creates a data lake table in Data Management (DMS).
   * 
   * @param tmpReq - CreateDataLakeTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataLakeTableResponse
   */
  async createDataLakeTableWithOptions(tmpReq: $_model.CreateDataLakeTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataLakeTableResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDataLakeTableShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tableInput)) {
      request.tableInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tableInput, "TableInput", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tableInputShrink)) {
      body["TableInput"] = request.tableInputShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataLakeTable",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataLakeTableResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataLakeTableResponse({}));
  }

  /**
   * Creates a data lake table in Data Management (DMS).
   * 
   * @param request - CreateDataLakeTableRequest
   * @returns CreateDataLakeTableResponse
   */
  async createDataLakeTable(request: $_model.CreateDataLakeTableRequest): Promise<$_model.CreateDataLakeTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataLakeTableWithOptions(request, runtime);
  }

  /**
   * Deletes an Airflow instance.
   * 
   * @param request - DeleteAirflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAirflowResponse
   */
  async deleteAirflowWithOptions(request: $_model.DeleteAirflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAirflowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.airflowId)) {
      query["AirflowId"] = request.airflowId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAirflow",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAirflowResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAirflowResponse({}));
  }

  /**
   * Deletes an Airflow instance.
   * 
   * @param request - DeleteAirflowRequest
   * @returns DeleteAirflowResponse
   */
  async deleteAirflow(request: $_model.DeleteAirflowRequest): Promise<$_model.DeleteAirflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAirflowWithOptions(request, runtime);
  }

  /**
   * Delete a custom agent in your personal workspace or a shared workspace. Note: Only custom agents that are newly created or offline can be deleted.
   * 
   * @param request - DeleteCustomAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomAgentResponse
   */
  async deleteCustomAgentWithOptions(request: $_model.DeleteCustomAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customAgentId)) {
      query["CustomAgentId"] = request.customAgentId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomAgent",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomAgentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomAgentResponse({}));
  }

  /**
   * Delete a custom agent in your personal workspace or a shared workspace. Note: Only custom agents that are newly created or offline can be deleted.
   * 
   * @param request - DeleteCustomAgentRequest
   * @returns DeleteCustomAgentResponse
   */
  async deleteCustomAgent(request: $_model.DeleteCustomAgentRequest): Promise<$_model.DeleteCustomAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomAgentWithOptions(request, runtime);
  }

  /**
   * Deletes a DataAgent knowledge base.
   * 
   * @param request - DeleteDataAgentKnowledgeBaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataAgentKnowledgeBaseResponse
   */
  async deleteDataAgentKnowledgeBaseWithOptions(request: $_model.DeleteDataAgentKnowledgeBaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataAgentKnowledgeBaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DMSUnit)) {
      query["DMSUnit"] = request.DMSUnit;
    }

    if (!$dara.isNull(request.kbUuid)) {
      query["KbUuid"] = request.kbUuid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataAgentKnowledgeBase",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataAgentKnowledgeBaseResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataAgentKnowledgeBaseResponse({}));
  }

  /**
   * Deletes a DataAgent knowledge base.
   * 
   * @param request - DeleteDataAgentKnowledgeBaseRequest
   * @returns DeleteDataAgentKnowledgeBaseResponse
   */
  async deleteDataAgentKnowledgeBase(request: $_model.DeleteDataAgentKnowledgeBaseRequest): Promise<$_model.DeleteDataAgentKnowledgeBaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataAgentKnowledgeBaseWithOptions(request, runtime);
  }

  /**
   * Deletes a DataAgent workspace.
   * 
   * @param request - DeleteDataAgentWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataAgentWorkspaceResponse
   */
  async deleteDataAgentWorkspaceWithOptions(request: $_model.DeleteDataAgentWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataAgentWorkspaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DMSUnit)) {
      query["DMSUnit"] = request.DMSUnit;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataAgentWorkspace",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataAgentWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataAgentWorkspaceResponse({}));
  }

  /**
   * Deletes a DataAgent workspace.
   * 
   * @param request - DeleteDataAgentWorkspaceRequest
   * @returns DeleteDataAgentWorkspaceResponse
   */
  async deleteDataAgentWorkspace(request: $_model.DeleteDataAgentWorkspaceRequest): Promise<$_model.DeleteDataAgentWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataAgentWorkspaceWithOptions(request, runtime);
  }

  /**
   * Deletes a data lake database.
   * 
   * @param request - DeleteDataLakeDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataLakeDatabaseResponse
   */
  async deleteDataLakeDatabaseWithOptions(request: $_model.DeleteDataLakeDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataLakeDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataLakeDatabase",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataLakeDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataLakeDatabaseResponse({}));
  }

  /**
   * Deletes a data lake database.
   * 
   * @param request - DeleteDataLakeDatabaseRequest
   * @returns DeleteDataLakeDatabaseResponse
   */
  async deleteDataLakeDatabase(request: $_model.DeleteDataLakeDatabaseRequest): Promise<$_model.DeleteDataLakeDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataLakeDatabaseWithOptions(request, runtime);
  }

  /**
   * Deletes a user-defined function in a data lake.
   * 
   * @param request - DeleteDataLakeFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataLakeFunctionResponse
   */
  async deleteDataLakeFunctionWithOptions(request: $_model.DeleteDataLakeFunctionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataLakeFunctionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.functionName)) {
      query["FunctionName"] = request.functionName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataLakeFunction",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataLakeFunctionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataLakeFunctionResponse({}));
  }

  /**
   * Deletes a user-defined function in a data lake.
   * 
   * @param request - DeleteDataLakeFunctionRequest
   * @returns DeleteDataLakeFunctionResponse
   */
  async deleteDataLakeFunction(request: $_model.DeleteDataLakeFunctionRequest): Promise<$_model.DeleteDataLakeFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataLakeFunctionWithOptions(request, runtime);
  }

  /**
   * Deletes a partition from a data lake table.
   * 
   * @param tmpReq - DeleteDataLakePartitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataLakePartitionResponse
   */
  async deleteDataLakePartitionWithOptions(tmpReq: $_model.DeleteDataLakePartitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataLakePartitionResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteDataLakePartitionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.partitionValues)) {
      request.partitionValuesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.partitionValues, "PartitionValues", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.ifExists)) {
      query["IfExists"] = request.ifExists;
    }

    if (!$dara.isNull(request.partitionValuesShrink)) {
      query["PartitionValues"] = request.partitionValuesShrink;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataLakePartition",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataLakePartitionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataLakePartitionResponse({}));
  }

  /**
   * Deletes a partition from a data lake table.
   * 
   * @param request - DeleteDataLakePartitionRequest
   * @returns DeleteDataLakePartitionResponse
   */
  async deleteDataLakePartition(request: $_model.DeleteDataLakePartitionRequest): Promise<$_model.DeleteDataLakePartitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataLakePartitionWithOptions(request, runtime);
  }

  /**
   * Deletes a data lake table.
   * 
   * @param request - DeleteDataLakeTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataLakeTableResponse
   */
  async deleteDataLakeTableWithOptions(request: $_model.DeleteDataLakeTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataLakeTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataLakeTable",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataLakeTableResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataLakeTableResponse({}));
  }

  /**
   * Deletes a data lake table.
   * 
   * @param request - DeleteDataLakeTableRequest
   * @returns DeleteDataLakeTableResponse
   */
  async deleteDataLakeTable(request: $_model.DeleteDataLakeTableRequest): Promise<$_model.DeleteDataLakeTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataLakeTableWithOptions(request, runtime);
  }

  /**
   * Deletes a document from a specified knowledge base.
   * 
   * @param request - DeleteDocumentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDocumentResponse
   */
  async deleteDocumentWithOptions(request: $_model.DeleteDocumentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDocumentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.documentName)) {
      body["DocumentName"] = request.documentName;
    }

    if (!$dara.isNull(request.kbUuid)) {
      body["KbUuid"] = request.kbUuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDocument",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDocumentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDocumentResponse({}));
  }

  /**
   * Deletes a document from a specified knowledge base.
   * 
   * @param request - DeleteDocumentRequest
   * @returns DeleteDocumentResponse
   */
  async deleteDocument(request: $_model.DeleteDocumentRequest): Promise<$_model.DeleteDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDocumentWithOptions(request, runtime);
  }

  /**
   * Deletes chunks from a document in a knowledge base.
   * 
   * @param tmpReq - DeleteDocumentChunksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDocumentChunksResponse
   */
  async deleteDocumentChunksWithOptions(tmpReq: $_model.DeleteDocumentChunksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDocumentChunksResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteDocumentChunksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.chunkIds)) {
      request.chunkIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.chunkIds, "ChunkIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chunkIdsShrink)) {
      body["ChunkIds"] = request.chunkIdsShrink;
    }

    if (!$dara.isNull(request.documentName)) {
      body["DocumentName"] = request.documentName;
    }

    if (!$dara.isNull(request.kbUuid)) {
      body["KbUuid"] = request.kbUuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDocumentChunks",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDocumentChunksResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDocumentChunksResponse({}));
  }

  /**
   * Deletes chunks from a document in a knowledge base.
   * 
   * @param request - DeleteDocumentChunksRequest
   * @returns DeleteDocumentChunksResponse
   */
  async deleteDocumentChunks(request: $_model.DeleteDocumentChunksRequest): Promise<$_model.DeleteDocumentChunksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDocumentChunksWithOptions(request, runtime);
  }

  /**
   * DeleteFileUpload
   * 
   * @param request - DeleteFileUploadRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFileUploadResponse
   */
  async deleteFileUploadWithOptions(request: $_model.DeleteFileUploadRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFileUploadResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callFrom)) {
      query["CallFrom"] = request.callFrom;
    }

    if (!$dara.isNull(request.dmsUnit)) {
      query["DmsUnit"] = request.dmsUnit;
    }

    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFileUpload",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFileUploadResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFileUploadResponse({}));
  }

  /**
   * DeleteFileUpload
   * 
   * @param request - DeleteFileUploadRequest
   * @returns DeleteFileUploadResponse
   */
  async deleteFileUpload(request: $_model.DeleteFileUploadRequest): Promise<$_model.DeleteFileUploadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFileUploadWithOptions(request, runtime);
  }

  /**
   * Deletes a code file or directory from a workspace.
   * 
   * @remarks
   * This operation permanently removes a specified code file or directory.
   * 
   * @param request - DeleteWorkspaceCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkspaceCodeResponse
   */
  async deleteWorkspaceCodeWithOptions(request: $_model.DeleteWorkspaceCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWorkspaceCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.repo)) {
      query["Repo"] = request.repo;
    }

    if (!$dara.isNull(request.symlink)) {
      query["Symlink"] = request.symlink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorkspaceCode",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWorkspaceCodeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWorkspaceCodeResponse({}));
  }

  /**
   * Deletes a code file or directory from a workspace.
   * 
   * @remarks
   * This operation permanently removes a specified code file or directory.
   * 
   * @param request - DeleteWorkspaceCodeRequest
   * @returns DeleteWorkspaceCodeResponse
   */
  async deleteWorkspaceCode(request: $_model.DeleteWorkspaceCodeRequest): Promise<$_model.DeleteWorkspaceCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWorkspaceCodeWithOptions(request, runtime);
  }

  /**
   * `DescribeCustomAgent` retrieves the details of a custom agent by its agent ID.
   * 
   * @param request - DescribeCustomAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomAgentResponse
   */
  async describeCustomAgentWithOptions(request: $_model.DescribeCustomAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCustomAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customAgentId)) {
      query["CustomAgentId"] = request.customAgentId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCustomAgent",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCustomAgentResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCustomAgentResponse({}));
  }

  /**
   * `DescribeCustomAgent` retrieves the details of a custom agent by its agent ID.
   * 
   * @param request - DescribeCustomAgentRequest
   * @returns DescribeCustomAgentResponse
   */
  async describeCustomAgent(request: $_model.DescribeCustomAgentRequest): Promise<$_model.DescribeCustomAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustomAgentWithOptions(request, runtime);
  }

  /**
   * Gets the details of a DataAgent session.
   * 
   * @param request - DescribeDataAgentSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataAgentSessionResponse
   */
  async describeDataAgentSessionWithOptions(request: $_model.DescribeDataAgentSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataAgentSessionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DMSUnit)) {
      query["DMSUnit"] = request.DMSUnit;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDataAgentSession",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataAgentSessionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataAgentSessionResponse({}));
  }

  /**
   * Gets the details of a DataAgent session.
   * 
   * @param request - DescribeDataAgentSessionRequest
   * @returns DescribeDataAgentSessionResponse
   */
  async describeDataAgentSession(request: $_model.DescribeDataAgentSessionRequest): Promise<$_model.DescribeDataAgentSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataAgentSessionWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a specific document.
   * 
   * @param request - DescribeDocumentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDocumentResponse
   */
  async describeDocumentWithOptions(request: $_model.DescribeDocumentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDocumentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.documentName)) {
      body["DocumentName"] = request.documentName;
    }

    if (!$dara.isNull(request.kbUuid)) {
      body["KbUuid"] = request.kbUuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDocument",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDocumentResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDocumentResponse({}));
  }

  /**
   * Retrieves the details of a specific document.
   * 
   * @param request - DescribeDocumentRequest
   * @returns DescribeDocumentResponse
   */
  async describeDocument(request: $_model.DescribeDocumentRequest): Promise<$_model.DescribeDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDocumentWithOptions(request, runtime);
  }

  /**
   * DescribeFileUploadSignature
   * 
   * @param request - DescribeFileUploadSignatureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFileUploadSignatureResponse
   */
  async describeFileUploadSignatureWithOptions(request: $_model.DescribeFileUploadSignatureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFileUploadSignatureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callFrom)) {
      query["CallFrom"] = request.callFrom;
    }

    if (!$dara.isNull(request.dmsUnit)) {
      query["DmsUnit"] = request.dmsUnit;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFileUploadSignature",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFileUploadSignatureResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFileUploadSignatureResponse({}));
  }

  /**
   * DescribeFileUploadSignature
   * 
   * @param request - DescribeFileUploadSignatureRequest
   * @returns DescribeFileUploadSignatureResponse
   */
  async describeFileUploadSignature(request: $_model.DescribeFileUploadSignatureRequest): Promise<$_model.DescribeFileUploadSignatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFileUploadSignatureWithOptions(request, runtime);
  }

  /**
   * Retrieves the statistics of a knowledge base.
   * 
   * @param request - DescribeKnowledgeBaseStatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeKnowledgeBaseStatsResponse
   */
  async describeKnowledgeBaseStatsWithOptions(request: $_model.DescribeKnowledgeBaseStatsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeKnowledgeBaseStatsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.kbUuid)) {
      query["KbUuid"] = request.kbUuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeKnowledgeBaseStats",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeKnowledgeBaseStatsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeKnowledgeBaseStatsResponse({}));
  }

  /**
   * Retrieves the statistics of a knowledge base.
   * 
   * @param request - DescribeKnowledgeBaseStatsRequest
   * @returns DescribeKnowledgeBaseStatsResponse
   */
  async describeKnowledgeBaseStats(request: $_model.DescribeKnowledgeBaseStatsRequest): Promise<$_model.DescribeKnowledgeBaseStatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeKnowledgeBaseStatsWithOptions(request, runtime);
  }

  /**
   * Generates a signature to upload a document to a knowledge base.
   * 
   * @param request - DescribeKnowledgeBaseUploadSignatureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeKnowledgeBaseUploadSignatureResponse
   */
  async describeKnowledgeBaseUploadSignatureWithOptions(request: $_model.DescribeKnowledgeBaseUploadSignatureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeKnowledgeBaseUploadSignatureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.kbUuid)) {
      query["KbUuid"] = request.kbUuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeKnowledgeBaseUploadSignature",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeKnowledgeBaseUploadSignatureResponse>(await this.callApi(params, req, runtime), new $_model.DescribeKnowledgeBaseUploadSignatureResponse({}));
  }

  /**
   * Generates a signature to upload a document to a knowledge base.
   * 
   * @param request - DescribeKnowledgeBaseUploadSignatureRequest
   * @returns DescribeKnowledgeBaseUploadSignatureResponse
   */
  async describeKnowledgeBaseUploadSignature(request: $_model.DescribeKnowledgeBaseUploadSignatureRequest): Promise<$_model.DescribeKnowledgeBaseUploadSignatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeKnowledgeBaseUploadSignatureWithOptions(request, runtime);
  }

  /**
   * FileUploadCallback
   * 
   * @param request - FileUploadCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FileUploadCallbackResponse
   */
  async fileUploadCallbackWithOptions(request: $_model.FileUploadCallbackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FileUploadCallbackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callFrom)) {
      query["CallFrom"] = request.callFrom;
    }

    if (!$dara.isNull(request.dmsUnit)) {
      query["DmsUnit"] = request.dmsUnit;
    }

    if (!$dara.isNull(request.fileSize)) {
      query["FileSize"] = request.fileSize;
    }

    if (!$dara.isNull(request.filename)) {
      query["Filename"] = request.filename;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.uploadLocation)) {
      query["UploadLocation"] = request.uploadLocation;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FileUploadCallback",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FileUploadCallbackResponse>(await this.callApi(params, req, runtime), new $_model.FileUploadCallbackResponse({}));
  }

  /**
   * FileUploadCallback
   * 
   * @param request - FileUploadCallbackRequest
   * @returns FileUploadCallbackResponse
   */
  async fileUploadCallback(request: $_model.FileUploadCallbackRequest): Promise<$_model.FileUploadCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.fileUploadCallbackWithOptions(request, runtime);
  }

  /**
   * Queries the configuration and status of an Airflow instance.
   * 
   * @param request - GetAirflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAirflowResponse
   */
  async getAirflowWithOptions(request: $_model.GetAirflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAirflowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.airflowId)) {
      query["AirflowId"] = request.airflowId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAirflow",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAirflowResponse>(await this.callApi(params, req, runtime), new $_model.GetAirflowResponse({}));
  }

  /**
   * Queries the configuration and status of an Airflow instance.
   * 
   * @param request - GetAirflowRequest
   * @returns GetAirflowResponse
   */
  async getAirflow(request: $_model.GetAirflowRequest): Promise<$_model.GetAirflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAirflowWithOptions(request, runtime);
  }

  /**
   * Retrieves chat content from a specific checkpoint by specifying a session ID and an agent ID.
   * 
   * @remarks
   * ## Request
   * - The response is an SSE stream. Each event follows the`SSEEvent` schema and includes metadata, such as the message level.
   * - The `content` field contains either message text or a JSON object, as determined by the `content_type` field.
   * 
   * @param request - GetChatContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChatContentResponse
   */
  async *getChatContentWithSSE(request: $_model.GetChatContentRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.GetChatContentResponse, any, unknown> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.checkpoint)) {
      query["Checkpoint"] = request.checkpoint;
    }

    if (!$dara.isNull(request.DMSUnit)) {
      query["DMSUnit"] = request.DMSUnit;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetChatContent",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.GetChatContentResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.GetChatContentResponse({}));
      }

    }
  }

  /**
   * Retrieves chat content from a specific checkpoint by specifying a session ID and an agent ID.
   * 
   * @remarks
   * ## Request
   * - The response is an SSE stream. Each event follows the`SSEEvent` schema and includes metadata, such as the message level.
   * - The `content` field contains either message text or a JSON object, as determined by the `content_type` field.
   * 
   * @param request - GetChatContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChatContentResponse
   */
  async getChatContentWithOptions(request: $_model.GetChatContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetChatContentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.checkpoint)) {
      query["Checkpoint"] = request.checkpoint;
    }

    if (!$dara.isNull(request.DMSUnit)) {
      query["DMSUnit"] = request.DMSUnit;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetChatContent",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetChatContentResponse>(await this.callApi(params, req, runtime), new $_model.GetChatContentResponse({}));
  }

  /**
   * Retrieves chat content from a specific checkpoint by specifying a session ID and an agent ID.
   * 
   * @remarks
   * ## Request
   * - The response is an SSE stream. Each event follows the`SSEEvent` schema and includes metadata, such as the message level.
   * - The `content` field contains either message text or a JSON object, as determined by the `content_type` field.
   * 
   * @param request - GetChatContentRequest
   * @returns GetChatContentResponse
   */
  async getChatContent(request: $_model.GetChatContentRequest): Promise<$_model.GetChatContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getChatContentWithOptions(request, runtime);
  }

  /**
   * Retrieves information about a RAM user that belongs to an Alibaba Cloud account.
   * 
   * @param request - GetDataAgentSubAccountInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataAgentSubAccountInfoResponse
   */
  async getDataAgentSubAccountInfoWithOptions(request: $_model.GetDataAgentSubAccountInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataAgentSubAccountInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dmsUnit)) {
      query["DmsUnit"] = request.dmsUnit;
    }

    if (!$dara.isNull(request.subAccountId)) {
      query["SubAccountId"] = request.subAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataAgentSubAccountInfo",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataAgentSubAccountInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetDataAgentSubAccountInfoResponse({}));
  }

  /**
   * Retrieves information about a RAM user that belongs to an Alibaba Cloud account.
   * 
   * @param request - GetDataAgentSubAccountInfoRequest
   * @returns GetDataAgentSubAccountInfoResponse
   */
  async getDataAgentSubAccountInfo(request: $_model.GetDataAgentSubAccountInfoRequest): Promise<$_model.GetDataAgentSubAccountInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataAgentSubAccountInfoWithOptions(request, runtime);
  }

  /**
   * Retrieves workspace details.
   * 
   * @param request - GetDataAgentWorkspaceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataAgentWorkspaceInfoResponse
   */
  async getDataAgentWorkspaceInfoWithOptions(request: $_model.GetDataAgentWorkspaceInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataAgentWorkspaceInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DMSUnit)) {
      query["DMSUnit"] = request.DMSUnit;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataAgentWorkspaceInfo",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataAgentWorkspaceInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetDataAgentWorkspaceInfoResponse({}));
  }

  /**
   * Retrieves workspace details.
   * 
   * @param request - GetDataAgentWorkspaceInfoRequest
   * @returns GetDataAgentWorkspaceInfoResponse
   */
  async getDataAgentWorkspaceInfo(request: $_model.GetDataAgentWorkspaceInfoRequest): Promise<$_model.GetDataAgentWorkspaceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataAgentWorkspaceInfoWithOptions(request, runtime);
  }

  /**
   * Retrieves the data catalog of a data lake.
   * 
   * @param request - GetDataLakeCatalogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataLakeCatalogResponse
   */
  async getDataLakeCatalogWithOptions(request: $_model.GetDataLakeCatalogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataLakeCatalogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataLakeCatalog",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataLakeCatalogResponse>(await this.callApi(params, req, runtime), new $_model.GetDataLakeCatalogResponse({}));
  }

  /**
   * Retrieves the data catalog of a data lake.
   * 
   * @param request - GetDataLakeCatalogRequest
   * @returns GetDataLakeCatalogResponse
   */
  async getDataLakeCatalog(request: $_model.GetDataLakeCatalogRequest): Promise<$_model.GetDataLakeCatalogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataLakeCatalogWithOptions(request, runtime);
  }

  /**
   * Retrieves information about a database in a data lake.
   * 
   * @param request - GetDataLakeDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataLakeDatabaseResponse
   */
  async getDataLakeDatabaseWithOptions(request: $_model.GetDataLakeDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataLakeDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataLakeDatabase",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataLakeDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.GetDataLakeDatabaseResponse({}));
  }

  /**
   * Retrieves information about a database in a data lake.
   * 
   * @param request - GetDataLakeDatabaseRequest
   * @returns GetDataLakeDatabaseResponse
   */
  async getDataLakeDatabase(request: $_model.GetDataLakeDatabaseRequest): Promise<$_model.GetDataLakeDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataLakeDatabaseWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a user-defined function in a data lake.
   * 
   * @param request - GetDataLakeFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataLakeFunctionResponse
   */
  async getDataLakeFunctionWithOptions(request: $_model.GetDataLakeFunctionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataLakeFunctionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.functionName)) {
      query["FunctionName"] = request.functionName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataLakeFunction",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataLakeFunctionResponse>(await this.callApi(params, req, runtime), new $_model.GetDataLakeFunctionResponse({}));
  }

  /**
   * Retrieves the details of a user-defined function in a data lake.
   * 
   * @param request - GetDataLakeFunctionRequest
   * @returns GetDataLakeFunctionResponse
   */
  async getDataLakeFunction(request: $_model.GetDataLakeFunctionRequest): Promise<$_model.GetDataLakeFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataLakeFunctionWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a data lakehouse table partition.
   * 
   * @param tmpReq - GetDataLakePartitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataLakePartitionResponse
   */
  async getDataLakePartitionWithOptions(tmpReq: $_model.GetDataLakePartitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataLakePartitionResponse> {
    tmpReq.validate();
    let request = new $_model.GetDataLakePartitionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.partitionValues)) {
      request.partitionValuesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.partitionValues, "PartitionValues", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.partitionValuesShrink)) {
      query["PartitionValues"] = request.partitionValuesShrink;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataLakePartition",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataLakePartitionResponse>(await this.callApi(params, req, runtime), new $_model.GetDataLakePartitionResponse({}));
  }

  /**
   * Retrieves the details of a data lakehouse table partition.
   * 
   * @param request - GetDataLakePartitionRequest
   * @returns GetDataLakePartitionResponse
   */
  async getDataLakePartition(request: $_model.GetDataLakePartitionRequest): Promise<$_model.GetDataLakePartitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataLakePartitionWithOptions(request, runtime);
  }

  /**
   * Retrieves information about a table in a data lake.
   * 
   * @param request - GetDataLakeTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataLakeTableResponse
   */
  async getDataLakeTableWithOptions(request: $_model.GetDataLakeTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataLakeTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataLakeTable",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataLakeTableResponse>(await this.callApi(params, req, runtime), new $_model.GetDataLakeTableResponse({}));
  }

  /**
   * Retrieves information about a table in a data lake.
   * 
   * @param request - GetDataLakeTableRequest
   * @returns GetDataLakeTableResponse
   */
  async getDataLakeTable(request: $_model.GetDataLakeTableRequest): Promise<$_model.GetDataLakeTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataLakeTableWithOptions(request, runtime);
  }

  /**
   * Submits a task to schedule and run a Notebook file.
   * 
   * @param request - GetNotebookAndSubmitTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNotebookAndSubmitTaskResponse
   */
  async getNotebookAndSubmitTaskWithOptions(request: $_model.GetNotebookAndSubmitTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNotebookAndSubmitTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.params)) {
      body["Params"] = request.params;
    }

    if (!$dara.isNull(request.path)) {
      body["Path"] = request.path;
    }

    if (!$dara.isNull(request.retry)) {
      body["Retry"] = request.retry;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNotebookAndSubmitTask",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNotebookAndSubmitTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetNotebookAndSubmitTaskResponse({}));
  }

  /**
   * Submits a task to schedule and run a Notebook file.
   * 
   * @param request - GetNotebookAndSubmitTaskRequest
   * @returns GetNotebookAndSubmitTaskResponse
   */
  async getNotebookAndSubmitTask(request: $_model.GetNotebookAndSubmitTaskRequest): Promise<$_model.GetNotebookAndSubmitTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNotebookAndSubmitTaskWithOptions(request, runtime);
  }

  /**
   * Retrieves the execution status of a Notebook task.
   * 
   * @param request - GetNotebookTaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNotebookTaskStatusResponse
   */
  async getNotebookTaskStatusWithOptions(request: $_model.GetNotebookTaskStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNotebookTaskStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNotebookTaskStatus",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNotebookTaskStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetNotebookTaskStatusResponse({}));
  }

  /**
   * Retrieves the execution status of a Notebook task.
   * 
   * @param request - GetNotebookTaskStatusRequest
   * @returns GetNotebookTaskStatusResponse
   */
  async getNotebookTaskStatus(request: $_model.GetNotebookTaskStatusRequest): Promise<$_model.GetNotebookTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNotebookTaskStatusWithOptions(request, runtime);
  }

  /**
   * Retrieves the content of a code file from a workspace. The response header includes the file\\"s modification time (`mtime`).
   * 
   * @remarks
   * Retrieves the content of a specified code file from a workspace.
   * 
   * @param request - GetWorkspaceCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkspaceCodeResponse
   */
  async getWorkspaceCodeWithOptions(request: $_model.GetWorkspaceCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkspaceCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.iac)) {
      query["Iac"] = request.iac;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkspaceCode",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkspaceCodeResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkspaceCodeResponse({}));
  }

  /**
   * Retrieves the content of a code file from a workspace. The response header includes the file\\"s modification time (`mtime`).
   * 
   * @remarks
   * Retrieves the content of a specified code file from a workspace.
   * 
   * @param request - GetWorkspaceCodeRequest
   * @returns GetWorkspaceCodeResponse
   */
  async getWorkspaceCode(request: $_model.GetWorkspaceCodeRequest): Promise<$_model.GetWorkspaceCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkspaceCodeWithOptions(request, runtime);
  }

  /**
   * Retrieves the deployment configuration of a workspace.
   * 
   * @remarks
   * This operation retrieves the deployment configuration of a workspace. The configuration includes details such as repository and branch information, and directories to exclude.
   * 
   * @param request - GetWorkspaceCodePublishSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkspaceCodePublishSettingResponse
   */
  async getWorkspaceCodePublishSettingWithOptions(request: $_model.GetWorkspaceCodePublishSettingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkspaceCodePublishSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkspaceCodePublishSetting",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkspaceCodePublishSettingResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkspaceCodePublishSettingResponse({}));
  }

  /**
   * Retrieves the deployment configuration of a workspace.
   * 
   * @remarks
   * This operation retrieves the deployment configuration of a workspace. The configuration includes details such as repository and branch information, and directories to exclude.
   * 
   * @param request - GetWorkspaceCodePublishSettingRequest
   * @returns GetWorkspaceCodePublishSettingResponse
   */
  async getWorkspaceCodePublishSetting(request: $_model.GetWorkspaceCodePublishSettingRequest): Promise<$_model.GetWorkspaceCodePublishSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkspaceCodePublishSettingWithOptions(request, runtime);
  }

  /**
   * Returns the quota for a workspace.
   * 
   * @remarks
   * Retrieves the resource quotas and instance status for a workspace.
   * 
   * @param request - GetWorkspaceQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkspaceQuotaResponse
   */
  async getWorkspaceQuotaWithOptions(request: $_model.GetWorkspaceQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkspaceQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkspaceQuota",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkspaceQuotaResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkspaceQuotaResponse({}));
  }

  /**
   * Returns the quota for a workspace.
   * 
   * @remarks
   * Retrieves the resource quotas and instance status for a workspace.
   * 
   * @param request - GetWorkspaceQuotaRequest
   * @returns GetWorkspaceQuotaResponse
   */
  async getWorkspaceQuota(request: $_model.GetWorkspaceQuotaRequest): Promise<$_model.GetWorkspaceQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkspaceQuotaWithOptions(request, runtime);
  }

  /**
   * Lists the available Airflow versions.
   * 
   * @remarks
   * Lists the available Airflow versions.
   * 
   * @param request - ListAirflowVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAirflowVersionsResponse
   */
  async listAirflowVersionsWithOptions(request: $_model.ListAirflowVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAirflowVersionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAirflowVersions",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAirflowVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListAirflowVersionsResponse({}));
  }

  /**
   * Lists the available Airflow versions.
   * 
   * @remarks
   * Lists the available Airflow versions.
   * 
   * @param request - ListAirflowVersionsRequest
   * @returns ListAirflowVersionsResponse
   */
  async listAirflowVersions(request: $_model.ListAirflowVersionsRequest): Promise<$_model.ListAirflowVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAirflowVersionsWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of Airflow instances in a workspace.
   * 
   * @param request - ListAirflowsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAirflowsResponse
   */
  async listAirflowsWithOptions(request: $_model.ListAirflowsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAirflowsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.skip)) {
      query["Skip"] = request.skip;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAirflows",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAirflowsResponse>(await this.callApi(params, req, runtime), new $_model.ListAirflowsResponse({}));
  }

  /**
   * Retrieves a list of Airflow instances in a workspace.
   * 
   * @param request - ListAirflowsRequest
   * @returns ListAirflowsResponse
   */
  async listAirflows(request: $_model.ListAirflowsRequest): Promise<$_model.ListAirflowsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAirflowsWithOptions(request, runtime);
  }

  /**
   * ListCustomAgent returns a list of all custom agents from the personal space and workspaces.
   * 
   * @param request - ListCustomAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomAgentResponse
   */
  async listCustomAgentWithOptions(request: $_model.ListCustomAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryAllReleased)) {
      query["QueryAllReleased"] = request.queryAllReleased;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomAgent",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCustomAgentResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomAgentResponse({}));
  }

  /**
   * ListCustomAgent returns a list of all custom agents from the personal space and workspaces.
   * 
   * @param request - ListCustomAgentRequest
   * @returns ListCustomAgentResponse
   */
  async listCustomAgent(request: $_model.ListCustomAgentRequest): Promise<$_model.ListCustomAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomAgentWithOptions(request, runtime);
  }

  /**
   * Retrieve a list of Data Agent session descriptions.
   * 
   * @param request - ListDataAgentSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataAgentSessionResponse
   */
  async listDataAgentSessionWithOptions(request: $_model.ListDataAgentSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataAgentSessionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createEndTime)) {
      query["CreateEndTime"] = request.createEndTime;
    }

    if (!$dara.isNull(request.createStartTime)) {
      query["CreateStartTime"] = request.createStartTime;
    }

    if (!$dara.isNull(request.customAgentId)) {
      query["CustomAgentId"] = request.customAgentId;
    }

    if (!$dara.isNull(request.DMSUnit)) {
      query["DMSUnit"] = request.DMSUnit;
    }

    if (!$dara.isNull(request.isSaved)) {
      query["IsSaved"] = request.isSaved;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataAgentSession",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataAgentSessionResponse>(await this.callApi(params, req, runtime), new $_model.ListDataAgentSessionResponse({}));
  }

  /**
   * Retrieve a list of Data Agent session descriptions.
   * 
   * @param request - ListDataAgentSessionRequest
   * @returns ListDataAgentSessionResponse
   */
  async listDataAgentSession(request: $_model.ListDataAgentSessionRequest): Promise<$_model.ListDataAgentSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataAgentSessionWithOptions(request, runtime);
  }

  /**
   * Retrieves paginated collaboration workspaces for an Alibaba Cloud account.
   * 
   * @param request - ListDataAgentWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataAgentWorkspaceResponse
   */
  async listDataAgentWorkspaceWithOptions(request: $_model.ListDataAgentWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataAgentWorkspaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DMSUnit)) {
      query["DMSUnit"] = request.DMSUnit;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.workspaceName)) {
      query["WorkspaceName"] = request.workspaceName;
    }

    if (!$dara.isNull(request.workspaceType)) {
      query["WorkspaceType"] = request.workspaceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataAgentWorkspace",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataAgentWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.ListDataAgentWorkspaceResponse({}));
  }

  /**
   * Retrieves paginated collaboration workspaces for an Alibaba Cloud account.
   * 
   * @param request - ListDataAgentWorkspaceRequest
   * @returns ListDataAgentWorkspaceResponse
   */
  async listDataAgentWorkspace(request: $_model.ListDataAgentWorkspaceRequest): Promise<$_model.ListDataAgentWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataAgentWorkspaceWithOptions(request, runtime);
  }

  /**
   * Lists all members in a workspace.
   * 
   * @param request - ListDataAgentWorkspaceMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataAgentWorkspaceMemberResponse
   */
  async listDataAgentWorkspaceMemberWithOptions(request: $_model.ListDataAgentWorkspaceMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataAgentWorkspaceMemberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DMSUnit)) {
      query["DMSUnit"] = request.DMSUnit;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchMemberId)) {
      query["SearchMemberId"] = request.searchMemberId;
    }

    if (!$dara.isNull(request.searchRoleName)) {
      query["SearchRoleName"] = request.searchRoleName;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataAgentWorkspaceMember",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataAgentWorkspaceMemberResponse>(await this.callApi(params, req, runtime), new $_model.ListDataAgentWorkspaceMemberResponse({}));
  }

  /**
   * Lists all members in a workspace.
   * 
   * @param request - ListDataAgentWorkspaceMemberRequest
   * @returns ListDataAgentWorkspaceMemberResponse
   */
  async listDataAgentWorkspaceMember(request: $_model.ListDataAgentWorkspaceMemberRequest): Promise<$_model.ListDataAgentWorkspaceMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataAgentWorkspaceMemberWithOptions(request, runtime);
  }

  /**
   * Lists user-uploaded files in a data center, excluding databases.
   * 
   * @param request - ListDataCenterDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataCenterDatabaseResponse
   */
  async listDataCenterDatabaseWithOptions(request: $_model.ListDataCenterDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataCenterDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callFrom)) {
      query["CallFrom"] = request.callFrom;
    }

    if (!$dara.isNull(request.dmsUnit)) {
      query["DmsUnit"] = request.dmsUnit;
    }

    if (!$dara.isNull(request.importType)) {
      query["ImportType"] = request.importType;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataCenterDatabase",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataCenterDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.ListDataCenterDatabaseResponse({}));
  }

  /**
   * Lists user-uploaded files in a data center, excluding databases.
   * 
   * @param request - ListDataCenterDatabaseRequest
   * @returns ListDataCenterDatabaseResponse
   */
  async listDataCenterDatabase(request: $_model.ListDataCenterDatabaseRequest): Promise<$_model.ListDataCenterDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataCenterDatabaseWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of user-uploaded tables from the data center, for file types only.
   * 
   * @param request - ListDataCenterTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataCenterTableResponse
   */
  async listDataCenterTableWithOptions(request: $_model.ListDataCenterTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataCenterTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callFrom)) {
      query["CallFrom"] = request.callFrom;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.dmsUnit)) {
      query["DmsUnit"] = request.dmsUnit;
    }

    if (!$dara.isNull(request.importType)) {
      query["ImportType"] = request.importType;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataCenterTable",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataCenterTableResponse>(await this.callApi(params, req, runtime), new $_model.ListDataCenterTableResponse({}));
  }

  /**
   * Retrieves a list of user-uploaded tables from the data center, for file types only.
   * 
   * @param request - ListDataCenterTableRequest
   * @returns ListDataCenterTableResponse
   */
  async listDataCenterTable(request: $_model.ListDataCenterTableRequest): Promise<$_model.ListDataCenterTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataCenterTableWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of data lake catalogs.
   * 
   * @param request - ListDataLakeCatalogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLakeCatalogResponse
   */
  async listDataLakeCatalogWithOptions(request: $_model.ListDataLakeCatalogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLakeCatalogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLakeCatalog",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLakeCatalogResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLakeCatalogResponse({}));
  }

  /**
   * Retrieves a list of data lake catalogs.
   * 
   * @param request - ListDataLakeCatalogRequest
   * @returns ListDataLakeCatalogResponse
   */
  async listDataLakeCatalog(request: $_model.ListDataLakeCatalogRequest): Promise<$_model.ListDataLakeCatalogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakeCatalogWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of databases in a data lake.
   * 
   * @param request - ListDataLakeDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLakeDatabaseResponse
   */
  async listDataLakeDatabaseWithOptions(request: $_model.ListDataLakeDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLakeDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLakeDatabase",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLakeDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLakeDatabaseResponse({}));
  }

  /**
   * Retrieves a list of databases in a data lake.
   * 
   * @param request - ListDataLakeDatabaseRequest
   * @returns ListDataLakeDatabaseResponse
   */
  async listDataLakeDatabase(request: $_model.ListDataLakeDatabaseRequest): Promise<$_model.ListDataLakeDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakeDatabaseWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of data lake functions.
   * 
   * @param request - ListDataLakeFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLakeFunctionResponse
   */
  async listDataLakeFunctionWithOptions(request: $_model.ListDataLakeFunctionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLakeFunctionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.functionNamePattern)) {
      query["FunctionNamePattern"] = request.functionNamePattern;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLakeFunction",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLakeFunctionResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLakeFunctionResponse({}));
  }

  /**
   * Retrieves a list of data lake functions.
   * 
   * @param request - ListDataLakeFunctionRequest
   * @returns ListDataLakeFunctionResponse
   */
  async listDataLakeFunction(request: $_model.ListDataLakeFunctionRequest): Promise<$_model.ListDataLakeFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakeFunctionWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of data lake function names.
   * 
   * @param request - ListDataLakeFunctionNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLakeFunctionNameResponse
   */
  async listDataLakeFunctionNameWithOptions(request: $_model.ListDataLakeFunctionNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLakeFunctionNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.functionNamePattern)) {
      query["FunctionNamePattern"] = request.functionNamePattern;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLakeFunctionName",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLakeFunctionNameResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLakeFunctionNameResponse({}));
  }

  /**
   * Retrieves a list of data lake function names.
   * 
   * @param request - ListDataLakeFunctionNameRequest
   * @returns ListDataLakeFunctionNameResponse
   */
  async listDataLakeFunctionName(request: $_model.ListDataLakeFunctionNameRequest): Promise<$_model.ListDataLakeFunctionNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakeFunctionNameWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of partitions of a data lake table.
   * 
   * @param tmpReq - ListDataLakePartitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLakePartitionResponse
   */
  async listDataLakePartitionWithOptions(tmpReq: $_model.ListDataLakePartitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLakePartitionResponse> {
    tmpReq.validate();
    let request = new $_model.ListDataLakePartitionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.partNames)) {
      request.partNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.partNames, "PartNames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.partNamesShrink)) {
      body["PartNames"] = request.partNamesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLakePartition",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLakePartitionResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLakePartitionResponse({}));
  }

  /**
   * Retrieves the list of partitions of a data lake table.
   * 
   * @param request - ListDataLakePartitionRequest
   * @returns ListDataLakePartitionResponse
   */
  async listDataLakePartition(request: $_model.ListDataLakePartitionRequest): Promise<$_model.ListDataLakePartitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakePartitionWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of partitions for a data lake table based on filter conditions.
   * 
   * @param request - ListDataLakePartitionByFilterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLakePartitionByFilterResponse
   */
  async listDataLakePartitionByFilterWithOptions(request: $_model.ListDataLakePartitionByFilterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLakePartitionByFilterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filter)) {
      body["Filter"] = request.filter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLakePartitionByFilter",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLakePartitionByFilterResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLakePartitionByFilterResponse({}));
  }

  /**
   * Retrieves a list of partitions for a data lake table based on filter conditions.
   * 
   * @param request - ListDataLakePartitionByFilterRequest
   * @returns ListDataLakePartitionByFilterResponse
   */
  async listDataLakePartitionByFilter(request: $_model.ListDataLakePartitionByFilterRequest): Promise<$_model.ListDataLakePartitionByFilterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakePartitionByFilterWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of partition names for a data lake table.
   * 
   * @param request - ListDataLakePartitionNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLakePartitionNameResponse
   */
  async listDataLakePartitionNameWithOptions(request: $_model.ListDataLakePartitionNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLakePartitionNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLakePartitionName",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLakePartitionNameResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLakePartitionNameResponse({}));
  }

  /**
   * Retrieves a list of partition names for a data lake table.
   * 
   * @param request - ListDataLakePartitionNameRequest
   * @returns ListDataLakePartitionNameResponse
   */
  async listDataLakePartitionName(request: $_model.ListDataLakePartitionNameRequest): Promise<$_model.ListDataLakePartitionNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakePartitionNameWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of data lake tables.
   * 
   * @param request - ListDataLakeTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLakeTableResponse
   */
  async listDataLakeTableWithOptions(request: $_model.ListDataLakeTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLakeTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.tableNamePattern)) {
      query["TableNamePattern"] = request.tableNamePattern;
    }

    if (!$dara.isNull(request.tableType)) {
      query["TableType"] = request.tableType;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLakeTable",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLakeTableResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLakeTableResponse({}));
  }

  /**
   * Retrieves a list of data lake tables.
   * 
   * @param request - ListDataLakeTableRequest
   * @returns ListDataLakeTableResponse
   */
  async listDataLakeTable(request: $_model.ListDataLakeTableRequest): Promise<$_model.ListDataLakeTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakeTableWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of data lake table names.
   * 
   * @param request - ListDataLakeTableNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLakeTableNameResponse
   */
  async listDataLakeTableNameWithOptions(request: $_model.ListDataLakeTableNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLakeTableNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.tableNamePattern)) {
      query["TableNamePattern"] = request.tableNamePattern;
    }

    if (!$dara.isNull(request.tableType)) {
      query["TableType"] = request.tableType;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLakeTableName",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLakeTableNameResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLakeTableNameResponse({}));
  }

  /**
   * Retrieves a list of data lake table names.
   * 
   * @param request - ListDataLakeTableNameRequest
   * @returns ListDataLakeTableNameResponse
   */
  async listDataLakeTableName(request: $_model.ListDataLakeTableNameRequest): Promise<$_model.ListDataLakeTableNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakeTableNameWithOptions(request, runtime);
  }

  /**
   * Retrieves the basic information about tables in a data lake.
   * 
   * @param request - ListDataLakeTablebaseInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLakeTablebaseInfoResponse
   */
  async listDataLakeTablebaseInfoWithOptions(request: $_model.ListDataLakeTablebaseInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLakeTablebaseInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.rows)) {
      query["Rows"] = request.rows;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLakeTablebaseInfo",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLakeTablebaseInfoResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLakeTablebaseInfoResponse({}));
  }

  /**
   * Retrieves the basic information about tables in a data lake.
   * 
   * @param request - ListDataLakeTablebaseInfoRequest
   * @returns ListDataLakeTablebaseInfoResponse
   */
  async listDataLakeTablebaseInfo(request: $_model.ListDataLakeTablebaseInfoRequest): Promise<$_model.ListDataLakeTablebaseInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakeTablebaseInfoWithOptions(request, runtime);
  }

  /**
   * Queries a list of chunks.
   * 
   * @param request - ListDocumentChunksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDocumentChunksResponse
   */
  async listDocumentChunksWithOptions(request: $_model.ListDocumentChunksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDocumentChunksResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chunkTitlePattern)) {
      body["ChunkTitlePattern"] = request.chunkTitlePattern;
    }

    if (!$dara.isNull(request.documentName)) {
      body["DocumentName"] = request.documentName;
    }

    if (!$dara.isNull(request.kbUuid)) {
      body["KbUuid"] = request.kbUuid;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.sortFieldName)) {
      body["SortFieldName"] = request.sortFieldName;
    }

    if (!$dara.isNull(request.sortOrder)) {
      body["SortOrder"] = request.sortOrder;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDocumentChunks",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDocumentChunksResponse>(await this.callApi(params, req, runtime), new $_model.ListDocumentChunksResponse({}));
  }

  /**
   * Queries a list of chunks.
   * 
   * @param request - ListDocumentChunksRequest
   * @returns ListDocumentChunksResponse
   */
  async listDocumentChunks(request: $_model.ListDocumentChunksRequest): Promise<$_model.ListDocumentChunksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDocumentChunksWithOptions(request, runtime);
  }

  /**
   * Lists the documents in a knowledge base.
   * 
   * @param request - ListDocumentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDocumentsResponse
   */
  async listDocumentsWithOptions(request: $_model.ListDocumentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDocumentsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filters)) {
      body["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.kbUuid)) {
      body["KbUuid"] = request.kbUuid;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.namePattern)) {
      body["NamePattern"] = request.namePattern;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.sortFieldName)) {
      body["SortFieldName"] = request.sortFieldName;
    }

    if (!$dara.isNull(request.sortOrder)) {
      body["SortOrder"] = request.sortOrder;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDocuments",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDocumentsResponse>(await this.callApi(params, req, runtime), new $_model.ListDocumentsResponse({}));
  }

  /**
   * Lists the documents in a knowledge base.
   * 
   * @param request - ListDocumentsRequest
   * @returns ListDocumentsResponse
   */
  async listDocuments(request: $_model.ListDocumentsRequest): Promise<$_model.ListDocumentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDocumentsWithOptions(request, runtime);
  }

  /**
   * ListFileUpload
   * 
   * @param request - ListFileUploadRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFileUploadResponse
   */
  async listFileUploadWithOptions(request: $_model.ListFileUploadRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFileUploadResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callFrom)) {
      query["CallFrom"] = request.callFrom;
    }

    if (!$dara.isNull(request.dmsUnit)) {
      query["DmsUnit"] = request.dmsUnit;
    }

    if (!$dara.isNull(request.downloadLinkExpire)) {
      query["DownloadLinkExpire"] = request.downloadLinkExpire;
    }

    if (!$dara.isNull(request.fileCategory)) {
      query["FileCategory"] = request.fileCategory;
    }

    if (!$dara.isNull(request.fileFrom)) {
      query["FileFrom"] = request.fileFrom;
    }

    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.sortColumn)) {
      query["SortColumn"] = request.sortColumn;
    }

    if (!$dara.isNull(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFileUpload",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFileUploadResponse>(await this.callApi(params, req, runtime), new $_model.ListFileUploadResponse({}));
  }

  /**
   * ListFileUpload
   * 
   * @param request - ListFileUploadRequest
   * @returns ListFileUploadResponse
   */
  async listFileUpload(request: $_model.ListFileUploadRequest): Promise<$_model.ListFileUploadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFileUploadWithOptions(request, runtime);
  }

  /**
   * Returns a paginated list of knowledge bases.
   * 
   * @param request - ListKnowledgeBasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKnowledgeBasesResponse
   */
  async listKnowledgeBasesWithOptions(request: $_model.ListKnowledgeBasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListKnowledgeBasesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filters)) {
      body["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.namePattern)) {
      body["NamePattern"] = request.namePattern;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.sortFieldName)) {
      body["SortFieldName"] = request.sortFieldName;
    }

    if (!$dara.isNull(request.sortOrder)) {
      body["SortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListKnowledgeBases",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListKnowledgeBasesResponse>(await this.callApi(params, req, runtime), new $_model.ListKnowledgeBasesResponse({}));
  }

  /**
   * Returns a paginated list of knowledge bases.
   * 
   * @param request - ListKnowledgeBasesRequest
   * @returns ListKnowledgeBasesResponse
   */
  async listKnowledgeBases(request: $_model.ListKnowledgeBasesRequest): Promise<$_model.ListKnowledgeBasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listKnowledgeBasesWithOptions(request, runtime);
  }

  /**
   * Lists code files and directories at a specified path in a workspace.
   * 
   * @remarks
   * This operation lists the code files and directories at a specified path in a workspace.
   * 
   * @param request - ListWorkspaceCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspaceCodeResponse
   */
  async listWorkspaceCodeWithOptions(request: $_model.ListWorkspaceCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkspaceCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkspaceCode",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkspaceCodeResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkspaceCodeResponse({}));
  }

  /**
   * Lists code files and directories at a specified path in a workspace.
   * 
   * @remarks
   * This operation lists the code files and directories at a specified path in a workspace.
   * 
   * @param request - ListWorkspaceCodeRequest
   * @returns ListWorkspaceCodeResponse
   */
  async listWorkspaceCode(request: $_model.ListWorkspaceCodeRequest): Promise<$_model.ListWorkspaceCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWorkspaceCodeWithOptions(request, runtime);
  }

  /**
   * Modify a custom agent in a personal space or workspace
   * 
   * @param tmpReq - ModifyCustomAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCustomAgentResponse
   */
  async modifyCustomAgentWithOptions(tmpReq: $_model.ModifyCustomAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCustomAgentResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyCustomAgentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.callbackConfig)) {
      request.callbackConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.callbackConfig, "CallbackConfig", "json");
    }

    if (!$dara.isNull(tmpReq.executionConfig)) {
      request.executionConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.executionConfig, "ExecutionConfig", "json");
    }

    if (!$dara.isNull(tmpReq.knowledgeConfigList)) {
      request.knowledgeConfigListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.knowledgeConfigList, "KnowledgeConfigList", "json");
    }

    if (!$dara.isNull(tmpReq.scheduleTaskConfig)) {
      request.scheduleTaskConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scheduleTaskConfig, "ScheduleTaskConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.callbackConfigShrink)) {
      query["CallbackConfig"] = request.callbackConfigShrink;
    }

    if (!$dara.isNull(request.customAgentId)) {
      query["CustomAgentId"] = request.customAgentId;
    }

    if (!$dara.isNull(request.DMSUnit)) {
      query["DMSUnit"] = request.DMSUnit;
    }

    if (!$dara.isNull(request.dataJson)) {
      query["DataJson"] = request.dataJson;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.executionConfigShrink)) {
      query["ExecutionConfig"] = request.executionConfigShrink;
    }

    if (!$dara.isNull(request.instruction)) {
      query["Instruction"] = request.instruction;
    }

    if (!$dara.isNull(request.knowledge)) {
      query["Knowledge"] = request.knowledge;
    }

    if (!$dara.isNull(request.knowledgeConfigListShrink)) {
      query["KnowledgeConfigList"] = request.knowledgeConfigListShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.relatedSessionId)) {
      query["RelatedSessionId"] = request.relatedSessionId;
    }

    if (!$dara.isNull(request.scheduleTaskConfigShrink)) {
      query["ScheduleTaskConfig"] = request.scheduleTaskConfigShrink;
    }

    if (!$dara.isNull(request.textReportConfig)) {
      query["TextReportConfig"] = request.textReportConfig;
    }

    if (!$dara.isNull(request.webReportConfig)) {
      query["WebReportConfig"] = request.webReportConfig;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCustomAgent",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCustomAgentResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCustomAgentResponse({}));
  }

  /**
   * Modify a custom agent in a personal space or workspace
   * 
   * @param request - ModifyCustomAgentRequest
   * @returns ModifyCustomAgentResponse
   */
  async modifyCustomAgent(request: $_model.ModifyCustomAgentRequest): Promise<$_model.ModifyCustomAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCustomAgentWithOptions(request, runtime);
  }

  /**
   * Operate custom agents in personal spaces and workspaces.
   * 
   * @param request - OperateCustomAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateCustomAgentResponse
   */
  async operateCustomAgentWithOptions(request: $_model.OperateCustomAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateCustomAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customAgentId)) {
      query["CustomAgentId"] = request.customAgentId;
    }

    if (!$dara.isNull(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateCustomAgent",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateCustomAgentResponse>(await this.callApi(params, req, runtime), new $_model.OperateCustomAgentResponse({}));
  }

  /**
   * Operate custom agents in personal spaces and workspaces.
   * 
   * @param request - OperateCustomAgentRequest
   * @returns OperateCustomAgentResponse
   */
  async operateCustomAgent(request: $_model.OperateCustomAgentRequest): Promise<$_model.OperateCustomAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateCustomAgentWithOptions(request, runtime);
  }

  /**
   * Redeploy an Airflow instance
   * 
   * @remarks
   * Redeploys an Airflow instance.
   * 
   * @param request - RedeployAirflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RedeployAirflowResponse
   */
  async redeployAirflowWithOptions(request: $_model.RedeployAirflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RedeployAirflowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.airflowId)) {
      query["AirflowId"] = request.airflowId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RedeployAirflow",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RedeployAirflowResponse>(await this.callApi(params, req, runtime), new $_model.RedeployAirflowResponse({}));
  }

  /**
   * Redeploy an Airflow instance
   * 
   * @remarks
   * Redeploys an Airflow instance.
   * 
   * @param request - RedeployAirflowRequest
   * @returns RedeployAirflowResponse
   */
  async redeployAirflow(request: $_model.RedeployAirflowRequest): Promise<$_model.RedeployAirflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.redeployAirflowWithOptions(request, runtime);
  }

  /**
   * Removes a user from a workspace.
   * 
   * @param request - RemoveUserToDataAgentWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUserToDataAgentWorkspaceResponse
   */
  async removeUserToDataAgentWorkspaceWithOptions(request: $_model.RemoveUserToDataAgentWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveUserToDataAgentWorkspaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DMSUnit)) {
      query["DMSUnit"] = request.DMSUnit;
    }

    if (!$dara.isNull(request.memberId)) {
      query["MemberId"] = request.memberId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveUserToDataAgentWorkspace",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveUserToDataAgentWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.RemoveUserToDataAgentWorkspaceResponse({}));
  }

  /**
   * Removes a user from a workspace.
   * 
   * @param request - RemoveUserToDataAgentWorkspaceRequest
   * @returns RemoveUserToDataAgentWorkspaceResponse
   */
  async removeUserToDataAgentWorkspace(request: $_model.RemoveUserToDataAgentWorkspaceRequest): Promise<$_model.RemoveUserToDataAgentWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeUserToDataAgentWorkspaceWithOptions(request, runtime);
  }

  /**
   * Query a knowledge base
   * 
   * @param request - RetrieveKnowledgeBaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetrieveKnowledgeBaseResponse
   */
  async retrieveKnowledgeBaseWithOptions(request: $_model.RetrieveKnowledgeBaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RetrieveKnowledgeBaseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filter)) {
      body["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.hybridSearch)) {
      body["HybridSearch"] = request.hybridSearch;
    }

    if (!$dara.isNull(request.hybridSearchArgs)) {
      body["HybridSearchArgs"] = request.hybridSearchArgs;
    }

    if (!$dara.isNull(request.includeMetadataFields)) {
      body["IncludeMetadataFields"] = request.includeMetadataFields;
    }

    if (!$dara.isNull(request.includeVector)) {
      body["IncludeVector"] = request.includeVector;
    }

    if (!$dara.isNull(request.kbUuid)) {
      body["KbUuid"] = request.kbUuid;
    }

    if (!$dara.isNull(request.metrics)) {
      body["Metrics"] = request.metrics;
    }

    if (!$dara.isNull(request.offset)) {
      body["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.orderBy)) {
      body["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.query)) {
      body["Query"] = request.query;
    }

    if (!$dara.isNull(request.recallWindow)) {
      body["RecallWindow"] = request.recallWindow;
    }

    if (!$dara.isNull(request.rerankFactor)) {
      body["RerankFactor"] = request.rerankFactor;
    }

    if (!$dara.isNull(request.topK)) {
      body["TopK"] = request.topK;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RetrieveKnowledgeBase",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetrieveKnowledgeBaseResponse>(await this.callApi(params, req, runtime), new $_model.RetrieveKnowledgeBaseResponse({}));
  }

  /**
   * Query a knowledge base
   * 
   * @param request - RetrieveKnowledgeBaseRequest
   * @returns RetrieveKnowledgeBaseResponse
   */
  async retrieveKnowledgeBase(request: $_model.RetrieveKnowledgeBaseRequest): Promise<$_model.RetrieveKnowledgeBaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.retrieveKnowledgeBaseWithOptions(request, runtime);
  }

  /**
   * Saves code in a workspace and creates the file if it does not exist.
   * 
   * @remarks
   * Saves code in a workspace and optionally publishes it to a repository.
   * 
   * @param request - SaveWorkspaceCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveWorkspaceCodeResponse
   */
  async saveWorkspaceCodeWithOptions(request: $_model.SaveWorkspaceCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveWorkspaceCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.force)) {
      body["Force"] = request.force;
    }

    if (!$dara.isNull(request.iac)) {
      body["Iac"] = request.iac;
    }

    if (!$dara.isNull(request.mtime)) {
      body["Mtime"] = request.mtime;
    }

    if (!$dara.isNull(request.path)) {
      body["Path"] = request.path;
    }

    if (!$dara.isNull(request.repo)) {
      body["Repo"] = request.repo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveWorkspaceCode",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveWorkspaceCodeResponse>(await this.callApi(params, req, runtime), new $_model.SaveWorkspaceCodeResponse({}));
  }

  /**
   * Saves code in a workspace and creates the file if it does not exist.
   * 
   * @remarks
   * Saves code in a workspace and optionally publishes it to a repository.
   * 
   * @param request - SaveWorkspaceCodeRequest
   * @returns SaveWorkspaceCodeResponse
   */
  async saveWorkspaceCode(request: $_model.SaveWorkspaceCodeRequest): Promise<$_model.SaveWorkspaceCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveWorkspaceCodeWithOptions(request, runtime);
  }

  /**
   * Sends a user message to a specified session or ends the session.
   * 
   * @remarks
   * ## Request
   * - The `agent_id` and `session_id` fields are required.
   * - The `message_type` field defaults to `primary`. Set it to `additional` to append information or to `cancel` to end the session.
   * - The `reply_to` field specifies which agent message the current message is a response to. It defaults to `0`.
   * - When `message_type` is `additional`, the `question` field is required.
   * - Use the `quoted_message` field to reference a previous user message.
   * - The optional fields `data_source`, `dms_user`, `db_metadata`, and `session_config` provide more detailed context.
   * 
   * @param tmpReq - SendChatMessageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendChatMessageResponse
   */
  async sendChatMessageWithOptions(tmpReq: $_model.SendChatMessageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendChatMessageResponse> {
    tmpReq.validate();
    let request = new $_model.SendChatMessageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dataSource)) {
      request.dataSourceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataSource, "DataSource", "json");
    }

    if (!$dara.isNull(tmpReq.dataSources)) {
      request.dataSourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataSources, "DataSources", "json");
    }

    if (!$dara.isNull(tmpReq.sessionConfig)) {
      request.sessionConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sessionConfig, "SessionConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.DMSUnit)) {
      query["DMSUnit"] = request.DMSUnit;
    }

    if (!$dara.isNull(request.dataSourceShrink)) {
      query["DataSource"] = request.dataSourceShrink;
    }

    if (!$dara.isNull(request.dataSourcesShrink)) {
      query["DataSources"] = request.dataSourcesShrink;
    }

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    if (!$dara.isNull(request.messageType)) {
      query["MessageType"] = request.messageType;
    }

    if (!$dara.isNull(request.parentSessionId)) {
      query["ParentSessionId"] = request.parentSessionId;
    }

    if (!$dara.isNull(request.question)) {
      query["Question"] = request.question;
    }

    if (!$dara.isNull(request.quotedMessage)) {
      query["QuotedMessage"] = request.quotedMessage;
    }

    if (!$dara.isNull(request.replyTo)) {
      query["ReplyTo"] = request.replyTo;
    }

    if (!$dara.isNull(request.sessionConfigShrink)) {
      query["SessionConfig"] = request.sessionConfigShrink;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendChatMessage",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendChatMessageResponse>(await this.callApi(params, req, runtime), new $_model.SendChatMessageResponse({}));
  }

  /**
   * Sends a user message to a specified session or ends the session.
   * 
   * @remarks
   * ## Request
   * - The `agent_id` and `session_id` fields are required.
   * - The `message_type` field defaults to `primary`. Set it to `additional` to append information or to `cancel` to end the session.
   * - The `reply_to` field specifies which agent message the current message is a response to. It defaults to `0`.
   * - When `message_type` is `additional`, the `question` field is required.
   * - Use the `quoted_message` field to reference a previous user message.
   * - The optional fields `data_source`, `dms_user`, `db_metadata`, and `session_config` provide more detailed context.
   * 
   * @param request - SendChatMessageRequest
   * @returns SendChatMessageResponse
   */
  async sendChatMessage(request: $_model.SendChatMessageRequest): Promise<$_model.SendChatMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendChatMessageWithOptions(request, runtime);
  }

  /**
   * Sets the code deployment configuration for a workspace. This is an asynchronous operation that returns a key. Use this key to query the operation\\"s status by calling the WorkspaceActionStatus operation.
   * 
   * @remarks
   * Sets the default code deployment configuration for a workspace. This configuration includes the Git repository branch and the directories to exclude from deployment.
   * 
   * @param request - SetWorkspaceCodePublishSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetWorkspaceCodePublishSettingResponse
   */
  async setWorkspaceCodePublishSettingWithOptions(request: $_model.SetWorkspaceCodePublishSettingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetWorkspaceCodePublishSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetWorkspaceCodePublishSetting",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetWorkspaceCodePublishSettingResponse>(await this.callApi(params, req, runtime), new $_model.SetWorkspaceCodePublishSettingResponse({}));
  }

  /**
   * Sets the code deployment configuration for a workspace. This is an asynchronous operation that returns a key. Use this key to query the operation\\"s status by calling the WorkspaceActionStatus operation.
   * 
   * @remarks
   * Sets the default code deployment configuration for a workspace. This configuration includes the Git repository branch and the directories to exclude from deployment.
   * 
   * @param request - SetWorkspaceCodePublishSettingRequest
   * @returns SetWorkspaceCodePublishSettingResponse
   */
  async setWorkspaceCodePublishSetting(request: $_model.SetWorkspaceCodePublishSettingRequest): Promise<$_model.SetWorkspaceCodePublishSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setWorkspaceCodePublishSettingWithOptions(request, runtime);
  }

  /**
   * Sets the quota for a workspace.
   * 
   * @remarks
   * Sets the quota for a specific workspace.
   * 
   * @param request - SetWorkspaceQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetWorkspaceQuotaResponse
   */
  async setWorkspaceQuotaWithOptions(request: $_model.SetWorkspaceQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetWorkspaceQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.cuQuota)) {
      query["CuQuota"] = request.cuQuota;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetWorkspaceQuota",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetWorkspaceQuotaResponse>(await this.callApi(params, req, runtime), new $_model.SetWorkspaceQuotaResponse({}));
  }

  /**
   * Sets the quota for a workspace.
   * 
   * @remarks
   * Sets the quota for a specific workspace.
   * 
   * @param request - SetWorkspaceQuotaRequest
   * @returns SetWorkspaceQuotaResponse
   */
  async setWorkspaceQuota(request: $_model.SetWorkspaceQuotaRequest): Promise<$_model.SetWorkspaceQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setWorkspaceQuotaWithOptions(request, runtime);
  }

  /**
   * Updates the properties of an Airflow instance.
   * 
   * @param tmpReq - UpdateAirflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAirflowResponse
   */
  async updateAirflowWithOptions(tmpReq: $_model.UpdateAirflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAirflowResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateAirflowShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dataMountInfoList)) {
      request.dataMountInfoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataMountInfoList, "DataMountInfoList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.airflowId)) {
      query["AirflowId"] = request.airflowId;
    }

    if (!$dara.isNull(request.airflowName)) {
      query["AirflowName"] = request.airflowName;
    }

    if (!$dara.isNull(request.appSpec)) {
      query["AppSpec"] = request.appSpec;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dagsDir)) {
      query["DagsDir"] = request.dagsDir;
    }

    if (!$dara.isNull(request.dataMountInfoListShrink)) {
      query["DataMountInfoList"] = request.dataMountInfoListShrink;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.enableServerless)) {
      query["EnableServerless"] = request.enableServerless;
    }

    if (!$dara.isNull(request.gracefulShutdownTimeout)) {
      query["GracefulShutdownTimeout"] = request.gracefulShutdownTimeout;
    }

    if (!$dara.isNull(request.pluginsDir)) {
      query["PluginsDir"] = request.pluginsDir;
    }

    if (!$dara.isNull(request.requirementFile)) {
      query["RequirementFile"] = request.requirementFile;
    }

    if (!$dara.isNull(request.startupFile)) {
      query["StartupFile"] = request.startupFile;
    }

    if (!$dara.isNull(request.workerServerlessReplicas)) {
      query["WorkerServerlessReplicas"] = request.workerServerlessReplicas;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAirflow",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAirflowResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAirflowResponse({}));
  }

  /**
   * Updates the properties of an Airflow instance.
   * 
   * @param request - UpdateAirflowRequest
   * @returns UpdateAirflowResponse
   */
  async updateAirflow(request: $_model.UpdateAirflowRequest): Promise<$_model.UpdateAirflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAirflowWithOptions(request, runtime);
  }

  /**
   * Updates workspace information.
   * 
   * @param request - UpdateDataAgentSpaceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataAgentSpaceInfoResponse
   */
  async updateDataAgentSpaceInfoWithOptions(request: $_model.UpdateDataAgentSpaceInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataAgentSpaceInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DMSUnit)) {
      query["DMSUnit"] = request.DMSUnit;
    }

    if (!$dara.isNull(request.isSessionShareEnabled)) {
      query["IsSessionShareEnabled"] = request.isSessionShareEnabled;
    }

    if (!$dara.isNull(request.workspaceDesc)) {
      query["WorkspaceDesc"] = request.workspaceDesc;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    if (!$dara.isNull(request.workspaceName)) {
      query["WorkspaceName"] = request.workspaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataAgentSpaceInfo",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataAgentSpaceInfoResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataAgentSpaceInfoResponse({}));
  }

  /**
   * Updates workspace information.
   * 
   * @param request - UpdateDataAgentSpaceInfoRequest
   * @returns UpdateDataAgentSpaceInfoResponse
   */
  async updateDataAgentSpaceInfo(request: $_model.UpdateDataAgentSpaceInfoRequest): Promise<$_model.UpdateDataAgentSpaceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataAgentSpaceInfoWithOptions(request, runtime);
  }

  /**
   * Changes the role of a workspace member.
   * 
   * @param request - UpdateDataAgentWorkspaceMemberRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataAgentWorkspaceMemberRoleResponse
   */
  async updateDataAgentWorkspaceMemberRoleWithOptions(request: $_model.UpdateDataAgentWorkspaceMemberRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataAgentWorkspaceMemberRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DMSUnit)) {
      query["DMSUnit"] = request.DMSUnit;
    }

    if (!$dara.isNull(request.memberId)) {
      query["MemberId"] = request.memberId;
    }

    if (!$dara.isNull(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataAgentWorkspaceMemberRole",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataAgentWorkspaceMemberRoleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataAgentWorkspaceMemberRoleResponse({}));
  }

  /**
   * Changes the role of a workspace member.
   * 
   * @param request - UpdateDataAgentWorkspaceMemberRoleRequest
   * @returns UpdateDataAgentWorkspaceMemberRoleResponse
   */
  async updateDataAgentWorkspaceMemberRole(request: $_model.UpdateDataAgentWorkspaceMemberRoleRequest): Promise<$_model.UpdateDataAgentWorkspaceMemberRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataAgentWorkspaceMemberRoleWithOptions(request, runtime);
  }

  /**
   * Updates the information of a data lakehouse database.
   * 
   * @param tmpReq - UpdateDataLakeDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataLakeDatabaseResponse
   */
  async updateDataLakeDatabaseWithOptions(tmpReq: $_model.UpdateDataLakeDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataLakeDatabaseResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDataLakeDatabaseShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.location)) {
      query["Location"] = request.location;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataLakeDatabase",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataLakeDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataLakeDatabaseResponse({}));
  }

  /**
   * Updates the information of a data lakehouse database.
   * 
   * @param request - UpdateDataLakeDatabaseRequest
   * @returns UpdateDataLakeDatabaseResponse
   */
  async updateDataLakeDatabase(request: $_model.UpdateDataLakeDatabaseRequest): Promise<$_model.UpdateDataLakeDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataLakeDatabaseWithOptions(request, runtime);
  }

  /**
   * Update a user-defined function in a data lake.
   * 
   * @param tmpReq - UpdateDataLakeFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataLakeFunctionResponse
   */
  async updateDataLakeFunctionWithOptions(tmpReq: $_model.UpdateDataLakeFunctionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataLakeFunctionResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDataLakeFunctionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.functionInput)) {
      request.functionInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.functionInput, "FunctionInput", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.functionName)) {
      query["FunctionName"] = request.functionName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.functionInputShrink)) {
      body["FunctionInput"] = request.functionInputShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataLakeFunction",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataLakeFunctionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataLakeFunctionResponse({}));
  }

  /**
   * Update a user-defined function in a data lake.
   * 
   * @param request - UpdateDataLakeFunctionRequest
   * @returns UpdateDataLakeFunctionResponse
   */
  async updateDataLakeFunction(request: $_model.UpdateDataLakeFunctionRequest): Promise<$_model.UpdateDataLakeFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataLakeFunctionWithOptions(request, runtime);
  }

  /**
   * Updates the partition information of a data lake table.
   * 
   * @param tmpReq - UpdateDataLakePartitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataLakePartitionResponse
   */
  async updateDataLakePartitionWithOptions(tmpReq: $_model.UpdateDataLakePartitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataLakePartitionResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDataLakePartitionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.partitionInput)) {
      request.partitionInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.partitionInput, "PartitionInput", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.partitionInputShrink)) {
      body["PartitionInput"] = request.partitionInputShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataLakePartition",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataLakePartitionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataLakePartitionResponse({}));
  }

  /**
   * Updates the partition information of a data lake table.
   * 
   * @param request - UpdateDataLakePartitionRequest
   * @returns UpdateDataLakePartitionResponse
   */
  async updateDataLakePartition(request: $_model.UpdateDataLakePartitionRequest): Promise<$_model.UpdateDataLakePartitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataLakePartitionWithOptions(request, runtime);
  }

  /**
   * Updates the information of a data lake table.
   * 
   * @param tmpReq - UpdateDataLakeTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataLakeTableResponse
   */
  async updateDataLakeTableWithOptions(tmpReq: $_model.UpdateDataLakeTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataLakeTableResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDataLakeTableShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tableInput)) {
      request.tableInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tableInput, "TableInput", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tableInputShrink)) {
      body["TableInput"] = request.tableInputShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataLakeTable",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataLakeTableResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataLakeTableResponse({}));
  }

  /**
   * Updates the information of a data lake table.
   * 
   * @param request - UpdateDataLakeTableRequest
   * @returns UpdateDataLakeTableResponse
   */
  async updateDataLakeTable(request: $_model.UpdateDataLakeTableRequest): Promise<$_model.UpdateDataLakeTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataLakeTableWithOptions(request, runtime);
  }

  /**
   * Updates the description of a document.
   * 
   * @param request - UpdateDocumentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDocumentResponse
   */
  async updateDocumentWithOptions(request: $_model.UpdateDocumentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDocumentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.documentName)) {
      body["DocumentName"] = request.documentName;
    }

    if (!$dara.isNull(request.kbUuid)) {
      body["KbUuid"] = request.kbUuid;
    }

    if (!$dara.isNull(request.newDescription)) {
      body["NewDescription"] = request.newDescription;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDocument",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDocumentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDocumentResponse({}));
  }

  /**
   * Updates the description of a document.
   * 
   * @param request - UpdateDocumentRequest
   * @returns UpdateDocumentResponse
   */
  async updateDocument(request: $_model.UpdateDocumentRequest): Promise<$_model.UpdateDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDocumentWithOptions(request, runtime);
  }

  /**
   * Updates a knowledge base.
   * 
   * @param request - UpdateKnowledgeBaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateKnowledgeBaseResponse
   */
  async updateKnowledgeBaseWithOptions(request: $_model.UpdateKnowledgeBaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateKnowledgeBaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.kbUuid)) {
      query["KbUuid"] = request.kbUuid;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateKnowledgeBase",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateKnowledgeBaseResponse>(await this.callApi(params, req, runtime), new $_model.UpdateKnowledgeBaseResponse({}));
  }

  /**
   * Updates a knowledge base.
   * 
   * @param request - UpdateKnowledgeBaseRequest
   * @returns UpdateKnowledgeBaseResponse
   */
  async updateKnowledgeBase(request: $_model.UpdateKnowledgeBaseRequest): Promise<$_model.UpdateKnowledgeBaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateKnowledgeBaseWithOptions(request, runtime);
  }

  /**
   * Uploads a document to a knowledge base.
   * 
   * @param tmpReq - UploadDocumentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadDocumentResponse
   */
  async uploadDocumentWithOptions(tmpReq: $_model.UploadDocumentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadDocumentResponse> {
    tmpReq.validate();
    let request = new $_model.UploadDocumentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.separators)) {
      request.separatorsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.separators, "Separators", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chunkOverlap)) {
      body["ChunkOverlap"] = request.chunkOverlap;
    }

    if (!$dara.isNull(request.chunkSize)) {
      body["ChunkSize"] = request.chunkSize;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.documentLoaderName)) {
      body["DocumentLoaderName"] = request.documentLoaderName;
    }

    if (!$dara.isNull(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.kbUuid)) {
      body["KbUuid"] = request.kbUuid;
    }

    if (!$dara.isNull(request.location)) {
      body["Location"] = request.location;
    }

    if (!$dara.isNull(request.separatorsShrink)) {
      body["Separators"] = request.separatorsShrink;
    }

    if (!$dara.isNull(request.splitterModel)) {
      body["SplitterModel"] = request.splitterModel;
    }

    if (!$dara.isNull(request.textSplitterName)) {
      body["TextSplitterName"] = request.textSplitterName;
    }

    if (!$dara.isNull(request.vlEnhance)) {
      body["VlEnhance"] = request.vlEnhance;
    }

    if (!$dara.isNull(request.zhTitleEnhance)) {
      body["ZhTitleEnhance"] = request.zhTitleEnhance;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadDocument",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadDocumentResponse>(await this.callApi(params, req, runtime), new $_model.UploadDocumentResponse({}));
  }

  /**
   * Uploads a document to a knowledge base.
   * 
   * @param request - UploadDocumentRequest
   * @returns UploadDocumentResponse
   */
  async uploadDocument(request: $_model.UploadDocumentRequest): Promise<$_model.UploadDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadDocumentWithOptions(request, runtime);
  }

  /**
   * Upserts document chunks into a knowledge base.
   * 
   * @param request - UpsertDocumentChunksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpsertDocumentChunksResponse
   */
  async upsertDocumentChunksWithOptions(request: $_model.UpsertDocumentChunksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpsertDocumentChunksResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chunks)) {
      body["Chunks"] = request.chunks;
    }

    if (!$dara.isNull(request.documentName)) {
      body["DocumentName"] = request.documentName;
    }

    if (!$dara.isNull(request.kbUuid)) {
      body["KbUuid"] = request.kbUuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpsertDocumentChunks",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpsertDocumentChunksResponse>(await this.callApi(params, req, runtime), new $_model.UpsertDocumentChunksResponse({}));
  }

  /**
   * Upserts document chunks into a knowledge base.
   * 
   * @param request - UpsertDocumentChunksRequest
   * @returns UpsertDocumentChunksResponse
   */
  async upsertDocumentChunks(request: $_model.UpsertDocumentChunksRequest): Promise<$_model.UpsertDocumentChunksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upsertDocumentChunksWithOptions(request, runtime);
  }

  /**
   * Queries the log of an asynchronous task in a workspace.
   * 
   * @remarks
   * Pass the `key` to view the execution log of the corresponding asynchronous task. Use this API for troubleshooting.
   * 
   * @param request - WorkspaceActionLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WorkspaceActionLogResponse
   */
  async workspaceActionLogWithOptions(request: $_model.WorkspaceActionLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.WorkspaceActionLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "WorkspaceActionLog",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.WorkspaceActionLogResponse>(await this.callApi(params, req, runtime), new $_model.WorkspaceActionLogResponse({}));
  }

  /**
   * Queries the log of an asynchronous task in a workspace.
   * 
   * @remarks
   * Pass the `key` to view the execution log of the corresponding asynchronous task. Use this API for troubleshooting.
   * 
   * @param request - WorkspaceActionLogRequest
   * @returns WorkspaceActionLogResponse
   */
  async workspaceActionLog(request: $_model.WorkspaceActionLogRequest): Promise<$_model.WorkspaceActionLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.workspaceActionLogWithOptions(request, runtime);
  }

  /**
   * Queries the status of an asynchronous task in a workspace. Operations such as a deployment return a key. Call this operation with the key to retrieve the task\\"s status.
   * 
   * @remarks
   * Provide the key returned by an asynchronous action, such as a deployment, to retrieve the task\\"s status.
   * 
   * @param request - WorkspaceActionStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WorkspaceActionStatusResponse
   */
  async workspaceActionStatusWithOptions(request: $_model.WorkspaceActionStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.WorkspaceActionStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "WorkspaceActionStatus",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.WorkspaceActionStatusResponse>(await this.callApi(params, req, runtime), new $_model.WorkspaceActionStatusResponse({}));
  }

  /**
   * Queries the status of an asynchronous task in a workspace. Operations such as a deployment return a key. Call this operation with the key to retrieve the task\\"s status.
   * 
   * @remarks
   * Provide the key returned by an asynchronous action, such as a deployment, to retrieve the task\\"s status.
   * 
   * @param request - WorkspaceActionStatusRequest
   * @returns WorkspaceActionStatusResponse
   */
  async workspaceActionStatus(request: $_model.WorkspaceActionStatusRequest): Promise<$_model.WorkspaceActionStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.workspaceActionStatusWithOptions(request, runtime);
  }

  /**
   * This asynchronous API returns a key. Use this key to query the WorkspaceActionStatus API for the code deployment status.
   * 
   * @remarks
   * Deploys the code in a workspace.
   * 
   * @param request - WorkspaceCodePublishRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WorkspaceCodePublishResponse
   */
  async workspaceCodePublishWithOptions(request: $_model.WorkspaceCodePublishRequest, runtime: $dara.RuntimeOptions): Promise<$_model.WorkspaceCodePublishResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "WorkspaceCodePublish",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.WorkspaceCodePublishResponse>(await this.callApi(params, req, runtime), new $_model.WorkspaceCodePublishResponse({}));
  }

  /**
   * This asynchronous API returns a key. Use this key to query the WorkspaceActionStatus API for the code deployment status.
   * 
   * @remarks
   * Deploys the code in a workspace.
   * 
   * @param request - WorkspaceCodePublishRequest
   * @returns WorkspaceCodePublishResponse
   */
  async workspaceCodePublish(request: $_model.WorkspaceCodePublishRequest): Promise<$_model.WorkspaceCodePublishResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.workspaceCodePublishWithOptions(request, runtime);
  }

}
