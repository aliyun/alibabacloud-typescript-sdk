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
   * 为空间添加用户
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
   * 为空间添加用户
   * 
   * @param request - AddUserToDataAgentWorkspaceRequest
   * @returns AddUserToDataAgentWorkspaceResponse
   */
  async addUserToDataAgentWorkspace(request: $_model.AddUserToDataAgentWorkspaceRequest): Promise<$_model.AddUserToDataAgentWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUserToDataAgentWorkspaceWithOptions(request, runtime);
  }

  /**
   * 批量新建湖仓表分区
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
   * 批量新建湖仓表分区
   * 
   * @param request - BatchCreateDataLakePartitionsRequest
   * @returns BatchCreateDataLakePartitionsResponse
   */
  async batchCreateDataLakePartitions(request: $_model.BatchCreateDataLakePartitionsRequest): Promise<$_model.BatchCreateDataLakePartitionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchCreateDataLakePartitionsWithOptions(request, runtime);
  }

  /**
   * 批量删除湖仓表分区
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
   * 批量删除湖仓表分区
   * 
   * @param request - BatchDeleteDataLakePartitionsRequest
   * @returns BatchDeleteDataLakePartitionsResponse
   */
  async batchDeleteDataLakePartitions(request: $_model.BatchDeleteDataLakePartitionsRequest): Promise<$_model.BatchDeleteDataLakePartitionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchDeleteDataLakePartitionsWithOptions(request, runtime);
  }

  /**
   * 批量更新湖仓表分区
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
   * 批量更新湖仓表分区
   * 
   * @param request - BatchUpdateDataLakePartitionsRequest
   * @returns BatchUpdateDataLakePartitionsResponse
   */
  async batchUpdateDataLakePartitions(request: $_model.BatchUpdateDataLakePartitionsRequest): Promise<$_model.BatchUpdateDataLakePartitionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchUpdateDataLakePartitionsWithOptions(request, runtime);
  }

  /**
   * 更新Airflow实例的自定义配置
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
   * 更新Airflow实例的自定义配置
   * 
   * @param request - ConfigAirflowRequest
   * @returns ConfigAirflowResponse
   */
  async configAirflow(request: $_model.ConfigAirflowRequest): Promise<$_model.ConfigAirflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configAirflowWithOptions(request, runtime);
  }

  /**
   * 创建Airflow
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
   * 创建Airflow
   * 
   * @param request - CreateAirflowRequest
   * @returns CreateAirflowResponse
   */
  async createAirflow(request: $_model.CreateAirflowRequest): Promise<$_model.CreateAirflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAirflowWithOptions(request, runtime);
  }

  /**
   * Queries the Airflow logon credential. You can use this credential to log on to the DMS-managed Airflow instance.
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
   * Queries the Airflow logon credential. You can use this credential to log on to the DMS-managed Airflow instance.
   * 
   * @param request - CreateAirflowLoginTokenRequest
   * @returns CreateAirflowLoginTokenResponse
   */
  async createAirflowLoginToken(request: $_model.CreateAirflowLoginTokenRequest): Promise<$_model.CreateAirflowLoginTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAirflowLoginTokenWithOptions(request, runtime);
  }

  /**
   * CreateCustomAgent
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
   * CreateCustomAgent
   * 
   * @param request - CreateCustomAgentRequest
   * @returns CreateCustomAgentResponse
   */
  async createCustomAgent(request: $_model.CreateCustomAgentRequest): Promise<$_model.CreateCustomAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomAgentWithOptions(request, runtime);
  }

  /**
   * CreateDataAgentKnowledgeBase
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
   * CreateDataAgentKnowledgeBase
   * 
   * @param request - CreateDataAgentKnowledgeBaseRequest
   * @returns CreateDataAgentKnowledgeBaseResponse
   */
  async createDataAgentKnowledgeBase(request: $_model.CreateDataAgentKnowledgeBaseRequest): Promise<$_model.CreateDataAgentKnowledgeBaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataAgentKnowledgeBaseWithOptions(request, runtime);
  }

  /**
   * CreateDataAgentSession
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
   * CreateDataAgentSession
   * 
   * @param request - CreateDataAgentSessionRequest
   * @returns CreateDataAgentSessionResponse
   */
  async createDataAgentSession(request: $_model.CreateDataAgentSessionRequest): Promise<$_model.CreateDataAgentSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataAgentSessionWithOptions(request, runtime);
  }

  /**
   * 创建DataAgent工作空间
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
   * 创建DataAgent工作空间
   * 
   * @param request - CreateDataAgentWorkspaceRequest
   * @returns CreateDataAgentWorkspaceResponse
   */
  async createDataAgentWorkspace(request: $_model.CreateDataAgentWorkspaceRequest): Promise<$_model.CreateDataAgentWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataAgentWorkspaceWithOptions(request, runtime);
  }

  /**
   * 新建湖仓数据库
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
   * 新建湖仓数据库
   * 
   * @param request - CreateDataLakeDatabaseRequest
   * @returns CreateDataLakeDatabaseResponse
   */
  async createDataLakeDatabase(request: $_model.CreateDataLakeDatabaseRequest): Promise<$_model.CreateDataLakeDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataLakeDatabaseWithOptions(request, runtime);
  }

  /**
   * 新建湖仓自定义函数
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
   * 新建湖仓自定义函数
   * 
   * @param request - CreateDataLakeFunctionRequest
   * @returns CreateDataLakeFunctionResponse
   */
  async createDataLakeFunction(request: $_model.CreateDataLakeFunctionRequest): Promise<$_model.CreateDataLakeFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataLakeFunctionWithOptions(request, runtime);
  }

  /**
   * 新建湖仓表分区
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
   * 新建湖仓表分区
   * 
   * @param request - CreateDataLakePartitionRequest
   * @returns CreateDataLakePartitionResponse
   */
  async createDataLakePartition(request: $_model.CreateDataLakePartitionRequest): Promise<$_model.CreateDataLakePartitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataLakePartitionWithOptions(request, runtime);
  }

  /**
   * 新建湖仓表
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
   * 新建湖仓表
   * 
   * @param request - CreateDataLakeTableRequest
   * @returns CreateDataLakeTableResponse
   */
  async createDataLakeTable(request: $_model.CreateDataLakeTableRequest): Promise<$_model.CreateDataLakeTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataLakeTableWithOptions(request, runtime);
  }

  /**
   * 删除Airflow
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
   * 删除Airflow
   * 
   * @param request - DeleteAirflowRequest
   * @returns DeleteAirflowResponse
   */
  async deleteAirflow(request: $_model.DeleteAirflowRequest): Promise<$_model.DeleteAirflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAirflowWithOptions(request, runtime);
  }

  /**
   * DeleteCustomAgent
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
   * DeleteCustomAgent
   * 
   * @param request - DeleteCustomAgentRequest
   * @returns DeleteCustomAgentResponse
   */
  async deleteCustomAgent(request: $_model.DeleteCustomAgentRequest): Promise<$_model.DeleteCustomAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomAgentWithOptions(request, runtime);
  }

  /**
   * DeleteDataAgentKnowledgeBase
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
   * DeleteDataAgentKnowledgeBase
   * 
   * @param request - DeleteDataAgentKnowledgeBaseRequest
   * @returns DeleteDataAgentKnowledgeBaseResponse
   */
  async deleteDataAgentKnowledgeBase(request: $_model.DeleteDataAgentKnowledgeBaseRequest): Promise<$_model.DeleteDataAgentKnowledgeBaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataAgentKnowledgeBaseWithOptions(request, runtime);
  }

  /**
   * 删除DataAgent工作空间
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
   * 删除DataAgent工作空间
   * 
   * @param request - DeleteDataAgentWorkspaceRequest
   * @returns DeleteDataAgentWorkspaceResponse
   */
  async deleteDataAgentWorkspace(request: $_model.DeleteDataAgentWorkspaceRequest): Promise<$_model.DeleteDataAgentWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataAgentWorkspaceWithOptions(request, runtime);
  }

  /**
   * 删除湖仓数据库
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
   * 删除湖仓数据库
   * 
   * @param request - DeleteDataLakeDatabaseRequest
   * @returns DeleteDataLakeDatabaseResponse
   */
  async deleteDataLakeDatabase(request: $_model.DeleteDataLakeDatabaseRequest): Promise<$_model.DeleteDataLakeDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataLakeDatabaseWithOptions(request, runtime);
  }

  /**
   * 删除湖仓自定义函数
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
   * 删除湖仓自定义函数
   * 
   * @param request - DeleteDataLakeFunctionRequest
   * @returns DeleteDataLakeFunctionResponse
   */
  async deleteDataLakeFunction(request: $_model.DeleteDataLakeFunctionRequest): Promise<$_model.DeleteDataLakeFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataLakeFunctionWithOptions(request, runtime);
  }

  /**
   * 删除湖仓表分区
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
   * 删除湖仓表分区
   * 
   * @param request - DeleteDataLakePartitionRequest
   * @returns DeleteDataLakePartitionResponse
   */
  async deleteDataLakePartition(request: $_model.DeleteDataLakePartitionRequest): Promise<$_model.DeleteDataLakePartitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataLakePartitionWithOptions(request, runtime);
  }

  /**
   * 删除湖仓表
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
   * 删除湖仓表
   * 
   * @param request - DeleteDataLakeTableRequest
   * @returns DeleteDataLakeTableResponse
   */
  async deleteDataLakeTable(request: $_model.DeleteDataLakeTableRequest): Promise<$_model.DeleteDataLakeTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataLakeTableWithOptions(request, runtime);
  }

  /**
   * 删除文档
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
   * 删除文档
   * 
   * @param request - DeleteDocumentRequest
   * @returns DeleteDocumentResponse
   */
  async deleteDocument(request: $_model.DeleteDocumentRequest): Promise<$_model.DeleteDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDocumentWithOptions(request, runtime);
  }

  /**
   * 删除onemeta3.0的知识库chunks
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
   * 删除onemeta3.0的知识库chunks
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
   * DescribeCustomAgent
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
   * DescribeCustomAgent
   * 
   * @param request - DescribeCustomAgentRequest
   * @returns DescribeCustomAgentResponse
   */
  async describeCustomAgent(request: $_model.DescribeCustomAgentRequest): Promise<$_model.DescribeCustomAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustomAgentWithOptions(request, runtime);
  }

  /**
   * DescribeDataAgentSession
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
   * DescribeDataAgentSession
   * 
   * @param request - DescribeDataAgentSessionRequest
   * @returns DescribeDataAgentSessionResponse
   */
  async describeDataAgentSession(request: $_model.DescribeDataAgentSessionRequest): Promise<$_model.DescribeDataAgentSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataAgentSessionWithOptions(request, runtime);
  }

  /**
   * 获取文档详情
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
   * 获取文档详情
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
   * 获取onemeta3.0的知识库统计信息
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
   * 获取onemeta3.0的知识库统计信息
   * 
   * @param request - DescribeKnowledgeBaseStatsRequest
   * @returns DescribeKnowledgeBaseStatsResponse
   */
  async describeKnowledgeBaseStats(request: $_model.DescribeKnowledgeBaseStatsRequest): Promise<$_model.DescribeKnowledgeBaseStatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeKnowledgeBaseStatsWithOptions(request, runtime);
  }

  /**
   * 获取知识库中的上传签名
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
   * 获取知识库中的上传签名
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
   * 查询 Airflow
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
   * 查询 Airflow
   * 
   * @param request - GetAirflowRequest
   * @returns GetAirflowResponse
   */
  async getAirflow(request: $_model.GetAirflowRequest): Promise<$_model.GetAirflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAirflowWithOptions(request, runtime);
  }

  /**
   * GetChatContent
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
   * GetChatContent
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
   * GetChatContent
   * 
   * @param request - GetChatContentRequest
   * @returns GetChatContentResponse
   */
  async getChatContent(request: $_model.GetChatContentRequest): Promise<$_model.GetChatContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getChatContentWithOptions(request, runtime);
  }

  /**
   * 获取主账号下的子账号信息
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
   * 获取主账号下的子账号信息
   * 
   * @param request - GetDataAgentSubAccountInfoRequest
   * @returns GetDataAgentSubAccountInfoResponse
   */
  async getDataAgentSubAccountInfo(request: $_model.GetDataAgentSubAccountInfoRequest): Promise<$_model.GetDataAgentSubAccountInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataAgentSubAccountInfoWithOptions(request, runtime);
  }

  /**
   * 获取空间信息
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
   * 获取空间信息
   * 
   * @param request - GetDataAgentWorkspaceInfoRequest
   * @returns GetDataAgentWorkspaceInfoResponse
   */
  async getDataAgentWorkspaceInfo(request: $_model.GetDataAgentWorkspaceInfoRequest): Promise<$_model.GetDataAgentWorkspaceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataAgentWorkspaceInfoWithOptions(request, runtime);
  }

  /**
   * 获取uc的数据库目录
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
   * 获取uc的数据库目录
   * 
   * @param request - GetDataLakeCatalogRequest
   * @returns GetDataLakeCatalogResponse
   */
  async getDataLakeCatalog(request: $_model.GetDataLakeCatalogRequest): Promise<$_model.GetDataLakeCatalogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataLakeCatalogWithOptions(request, runtime);
  }

  /**
   * 获取UC的数据库
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
   * 获取UC的数据库
   * 
   * @param request - GetDataLakeDatabaseRequest
   * @returns GetDataLakeDatabaseResponse
   */
  async getDataLakeDatabase(request: $_model.GetDataLakeDatabaseRequest): Promise<$_model.GetDataLakeDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataLakeDatabaseWithOptions(request, runtime);
  }

  /**
   * 获取湖仓自定义函数详细信息
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
   * 获取湖仓自定义函数详细信息
   * 
   * @param request - GetDataLakeFunctionRequest
   * @returns GetDataLakeFunctionResponse
   */
  async getDataLakeFunction(request: $_model.GetDataLakeFunctionRequest): Promise<$_model.GetDataLakeFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataLakeFunctionWithOptions(request, runtime);
  }

  /**
   * 获取湖仓表分区详情
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
   * 获取湖仓表分区详情
   * 
   * @param request - GetDataLakePartitionRequest
   * @returns GetDataLakePartitionResponse
   */
  async getDataLakePartition(request: $_model.GetDataLakePartitionRequest): Promise<$_model.GetDataLakePartitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataLakePartitionWithOptions(request, runtime);
  }

  /**
   * 获取表信息
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
   * 获取表信息
   * 
   * @param request - GetDataLakeTableRequest
   * @returns GetDataLakeTableResponse
   */
  async getDataLakeTable(request: $_model.GetDataLakeTableRequest): Promise<$_model.GetDataLakeTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataLakeTableWithOptions(request, runtime);
  }

  /**
   * 调度运行Notebook文件
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
   * 调度运行Notebook文件
   * 
   * @param request - GetNotebookAndSubmitTaskRequest
   * @returns GetNotebookAndSubmitTaskResponse
   */
  async getNotebookAndSubmitTask(request: $_model.GetNotebookAndSubmitTaskRequest): Promise<$_model.GetNotebookAndSubmitTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNotebookAndSubmitTaskWithOptions(request, runtime);
  }

  /**
   * 查看Notebook任务运行结果
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
   * 查看Notebook任务运行结果
   * 
   * @param request - GetNotebookTaskStatusRequest
   * @returns GetNotebookTaskStatusResponse
   */
  async getNotebookTaskStatus(request: $_model.GetNotebookTaskStatusRequest): Promise<$_model.GetNotebookTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNotebookTaskStatusWithOptions(request, runtime);
  }

  /**
   * 获取工作空间发布配置
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
   * 获取工作空间发布配置
   * 
   * @param request - GetWorkspaceCodePublishSettingRequest
   * @returns GetWorkspaceCodePublishSettingResponse
   */
  async getWorkspaceCodePublishSetting(request: $_model.GetWorkspaceCodePublishSettingRequest): Promise<$_model.GetWorkspaceCodePublishSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkspaceCodePublishSettingWithOptions(request, runtime);
  }

  /**
   * 获取工作空间配额
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
   * 获取工作空间配额
   * 
   * @param request - GetWorkspaceQuotaRequest
   * @returns GetWorkspaceQuotaResponse
   */
  async getWorkspaceQuota(request: $_model.GetWorkspaceQuotaRequest): Promise<$_model.GetWorkspaceQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkspaceQuotaWithOptions(request, runtime);
  }

  /**
   * 获取可用的Airflow版本列表
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
   * 获取可用的Airflow版本列表
   * 
   * @param request - ListAirflowVersionsRequest
   * @returns ListAirflowVersionsResponse
   */
  async listAirflowVersions(request: $_model.ListAirflowVersionsRequest): Promise<$_model.ListAirflowVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAirflowVersionsWithOptions(request, runtime);
  }

  /**
   * 列出资源Airflow
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
   * 列出资源Airflow
   * 
   * @param request - ListAirflowsRequest
   * @returns ListAirflowsResponse
   */
  async listAirflows(request: $_model.ListAirflowsRequest): Promise<$_model.ListAirflowsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAirflowsWithOptions(request, runtime);
  }

  /**
   * ListCustomAgent
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
   * ListCustomAgent
   * 
   * @param request - ListCustomAgentRequest
   * @returns ListCustomAgentResponse
   */
  async listCustomAgent(request: $_model.ListCustomAgentRequest): Promise<$_model.ListCustomAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomAgentWithOptions(request, runtime);
  }

  /**
   * ListDataAgentSession
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
   * ListDataAgentSession
   * 
   * @param request - ListDataAgentSessionRequest
   * @returns ListDataAgentSessionResponse
   */
  async listDataAgentSession(request: $_model.ListDataAgentSessionRequest): Promise<$_model.ListDataAgentSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataAgentSessionWithOptions(request, runtime);
  }

  /**
   * 获取主账号下的空间（分页）
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
   * 获取主账号下的空间（分页）
   * 
   * @param request - ListDataAgentWorkspaceRequest
   * @returns ListDataAgentWorkspaceResponse
   */
  async listDataAgentWorkspace(request: $_model.ListDataAgentWorkspaceRequest): Promise<$_model.ListDataAgentWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataAgentWorkspaceWithOptions(request, runtime);
  }

  /**
   * 获取空间所有成员
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
   * 获取空间所有成员
   * 
   * @param request - ListDataAgentWorkspaceMemberRequest
   * @returns ListDataAgentWorkspaceMemberResponse
   */
  async listDataAgentWorkspaceMember(request: $_model.ListDataAgentWorkspaceMemberRequest): Promise<$_model.ListDataAgentWorkspaceMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataAgentWorkspaceMemberWithOptions(request, runtime);
  }

  /**
   * ListDataCenterDatabase
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
   * ListDataCenterDatabase
   * 
   * @param request - ListDataCenterDatabaseRequest
   * @returns ListDataCenterDatabaseResponse
   */
  async listDataCenterDatabase(request: $_model.ListDataCenterDatabaseRequest): Promise<$_model.ListDataCenterDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataCenterDatabaseWithOptions(request, runtime);
  }

  /**
   * ListDataCenterTable
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
   * ListDataCenterTable
   * 
   * @param request - ListDataCenterTableRequest
   * @returns ListDataCenterTableResponse
   */
  async listDataCenterTable(request: $_model.ListDataCenterTableRequest): Promise<$_model.ListDataCenterTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataCenterTableWithOptions(request, runtime);
  }

  /**
   * 获取uc的数据库目录列表
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
   * 获取uc的数据库目录列表
   * 
   * @param request - ListDataLakeCatalogRequest
   * @returns ListDataLakeCatalogResponse
   */
  async listDataLakeCatalog(request: $_model.ListDataLakeCatalogRequest): Promise<$_model.ListDataLakeCatalogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakeCatalogWithOptions(request, runtime);
  }

  /**
   * 获取数据库列表
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
   * 获取数据库列表
   * 
   * @param request - ListDataLakeDatabaseRequest
   * @returns ListDataLakeDatabaseResponse
   */
  async listDataLakeDatabase(request: $_model.ListDataLakeDatabaseRequest): Promise<$_model.ListDataLakeDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakeDatabaseWithOptions(request, runtime);
  }

  /**
   * 获取数据湖函数列表
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
   * 获取数据湖函数列表
   * 
   * @param request - ListDataLakeFunctionRequest
   * @returns ListDataLakeFunctionResponse
   */
  async listDataLakeFunction(request: $_model.ListDataLakeFunctionRequest): Promise<$_model.ListDataLakeFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakeFunctionWithOptions(request, runtime);
  }

  /**
   * 获取数据湖函数名列表
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
   * 获取数据湖函数名列表
   * 
   * @param request - ListDataLakeFunctionNameRequest
   * @returns ListDataLakeFunctionNameResponse
   */
  async listDataLakeFunctionName(request: $_model.ListDataLakeFunctionNameRequest): Promise<$_model.ListDataLakeFunctionNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakeFunctionNameWithOptions(request, runtime);
  }

  /**
   * 获取数据湖表分区列表
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
   * 获取数据湖表分区列表
   * 
   * @param request - ListDataLakePartitionRequest
   * @returns ListDataLakePartitionResponse
   */
  async listDataLakePartition(request: $_model.ListDataLakePartitionRequest): Promise<$_model.ListDataLakePartitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakePartitionWithOptions(request, runtime);
  }

  /**
   * 根据筛选条件获取数据湖表分区列表
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
   * 根据筛选条件获取数据湖表分区列表
   * 
   * @param request - ListDataLakePartitionByFilterRequest
   * @returns ListDataLakePartitionByFilterResponse
   */
  async listDataLakePartitionByFilter(request: $_model.ListDataLakePartitionByFilterRequest): Promise<$_model.ListDataLakePartitionByFilterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakePartitionByFilterWithOptions(request, runtime);
  }

  /**
   * 获取数据湖表分区名列表
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
   * 获取数据湖表分区名列表
   * 
   * @param request - ListDataLakePartitionNameRequest
   * @returns ListDataLakePartitionNameResponse
   */
  async listDataLakePartitionName(request: $_model.ListDataLakePartitionNameRequest): Promise<$_model.ListDataLakePartitionNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakePartitionNameWithOptions(request, runtime);
  }

  /**
   * 获取数据湖表列表
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
   * 获取数据湖表列表
   * 
   * @param request - ListDataLakeTableRequest
   * @returns ListDataLakeTableResponse
   */
  async listDataLakeTable(request: $_model.ListDataLakeTableRequest): Promise<$_model.ListDataLakeTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakeTableWithOptions(request, runtime);
  }

  /**
   * 获取数据湖表名列表
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
   * 获取数据湖表名列表
   * 
   * @param request - ListDataLakeTableNameRequest
   * @returns ListDataLakeTableNameResponse
   */
  async listDataLakeTableName(request: $_model.ListDataLakeTableNameRequest): Promise<$_model.ListDataLakeTableNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakeTableNameWithOptions(request, runtime);
  }

  /**
   * 获取表信息
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
   * 获取表信息
   * 
   * @param request - ListDataLakeTablebaseInfoRequest
   * @returns ListDataLakeTablebaseInfoResponse
   */
  async listDataLakeTablebaseInfo(request: $_model.ListDataLakeTablebaseInfoRequest): Promise<$_model.ListDataLakeTablebaseInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakeTablebaseInfoWithOptions(request, runtime);
  }

  /**
   * 分页查询onemeta3.0的知识库chunks
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
   * 分页查询onemeta3.0的知识库chunks
   * 
   * @param request - ListDocumentChunksRequest
   * @returns ListDocumentChunksResponse
   */
  async listDocumentChunks(request: $_model.ListDocumentChunksRequest): Promise<$_model.ListDocumentChunksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDocumentChunksWithOptions(request, runtime);
  }

  /**
   * 获取文档列表
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
   * 获取文档列表
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
   * 分页查询onemeta3.0的知识库
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
   * 分页查询onemeta3.0的知识库
   * 
   * @param request - ListKnowledgeBasesRequest
   * @returns ListKnowledgeBasesResponse
   */
  async listKnowledgeBases(request: $_model.ListKnowledgeBasesRequest): Promise<$_model.ListKnowledgeBasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listKnowledgeBasesWithOptions(request, runtime);
  }

  /**
   * ModifyCustomAgent
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
   * ModifyCustomAgent
   * 
   * @param request - ModifyCustomAgentRequest
   * @returns ModifyCustomAgentResponse
   */
  async modifyCustomAgent(request: $_model.ModifyCustomAgentRequest): Promise<$_model.ModifyCustomAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCustomAgentWithOptions(request, runtime);
  }

  /**
   * OperateCustomAgent
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
   * OperateCustomAgent
   * 
   * @param request - OperateCustomAgentRequest
   * @returns OperateCustomAgentResponse
   */
  async operateCustomAgent(request: $_model.OperateCustomAgentRequest): Promise<$_model.OperateCustomAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateCustomAgentWithOptions(request, runtime);
  }

  /**
   * 重新部署Airflow实例
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
   * 重新部署Airflow实例
   * 
   * @param request - RedeployAirflowRequest
   * @returns RedeployAirflowResponse
   */
  async redeployAirflow(request: $_model.RedeployAirflowRequest): Promise<$_model.RedeployAirflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.redeployAirflowWithOptions(request, runtime);
  }

  /**
   * 从空间中移除用户
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
   * 从空间中移除用户
   * 
   * @param request - RemoveUserToDataAgentWorkspaceRequest
   * @returns RemoveUserToDataAgentWorkspaceResponse
   */
  async removeUserToDataAgentWorkspace(request: $_model.RemoveUserToDataAgentWorkspaceRequest): Promise<$_model.RemoveUserToDataAgentWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeUserToDataAgentWorkspaceWithOptions(request, runtime);
  }

  /**
   * SendChatMessage
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
   * SendChatMessage
   * 
   * @param request - SendChatMessageRequest
   * @returns SendChatMessageResponse
   */
  async sendChatMessage(request: $_model.SendChatMessageRequest): Promise<$_model.SendChatMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendChatMessageWithOptions(request, runtime);
  }

  /**
   * 设置工作空间代码发布配置
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
   * 设置工作空间代码发布配置
   * 
   * @param request - SetWorkspaceCodePublishSettingRequest
   * @returns SetWorkspaceCodePublishSettingResponse
   */
  async setWorkspaceCodePublishSetting(request: $_model.SetWorkspaceCodePublishSettingRequest): Promise<$_model.SetWorkspaceCodePublishSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setWorkspaceCodePublishSettingWithOptions(request, runtime);
  }

  /**
   * 设置工作空间配额
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
   * 设置工作空间配额
   * 
   * @param request - SetWorkspaceQuotaRequest
   * @returns SetWorkspaceQuotaResponse
   */
  async setWorkspaceQuota(request: $_model.SetWorkspaceQuotaRequest): Promise<$_model.SetWorkspaceQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setWorkspaceQuotaWithOptions(request, runtime);
  }

  /**
   * 更新UpdateAirflow
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
   * 更新UpdateAirflow
   * 
   * @param request - UpdateAirflowRequest
   * @returns UpdateAirflowResponse
   */
  async updateAirflow(request: $_model.UpdateAirflowRequest): Promise<$_model.UpdateAirflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAirflowWithOptions(request, runtime);
  }

  /**
   * 更新空间的信息
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
   * 更新空间的信息
   * 
   * @param request - UpdateDataAgentSpaceInfoRequest
   * @returns UpdateDataAgentSpaceInfoResponse
   */
  async updateDataAgentSpaceInfo(request: $_model.UpdateDataAgentSpaceInfoRequest): Promise<$_model.UpdateDataAgentSpaceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataAgentSpaceInfoWithOptions(request, runtime);
  }

  /**
   * 调整空间成员的角色
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
   * 调整空间成员的角色
   * 
   * @param request - UpdateDataAgentWorkspaceMemberRoleRequest
   * @returns UpdateDataAgentWorkspaceMemberRoleResponse
   */
  async updateDataAgentWorkspaceMemberRole(request: $_model.UpdateDataAgentWorkspaceMemberRoleRequest): Promise<$_model.UpdateDataAgentWorkspaceMemberRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataAgentWorkspaceMemberRoleWithOptions(request, runtime);
  }

  /**
   * 更新湖仓数据库
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
   * 更新湖仓数据库
   * 
   * @param request - UpdateDataLakeDatabaseRequest
   * @returns UpdateDataLakeDatabaseResponse
   */
  async updateDataLakeDatabase(request: $_model.UpdateDataLakeDatabaseRequest): Promise<$_model.UpdateDataLakeDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataLakeDatabaseWithOptions(request, runtime);
  }

  /**
   * 更新湖仓自定义函数
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
   * 更新湖仓自定义函数
   * 
   * @param request - UpdateDataLakeFunctionRequest
   * @returns UpdateDataLakeFunctionResponse
   */
  async updateDataLakeFunction(request: $_model.UpdateDataLakeFunctionRequest): Promise<$_model.UpdateDataLakeFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataLakeFunctionWithOptions(request, runtime);
  }

  /**
   * 更新湖仓表分区
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
   * 更新湖仓表分区
   * 
   * @param request - UpdateDataLakePartitionRequest
   * @returns UpdateDataLakePartitionResponse
   */
  async updateDataLakePartition(request: $_model.UpdateDataLakePartitionRequest): Promise<$_model.UpdateDataLakePartitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataLakePartitionWithOptions(request, runtime);
  }

  /**
   * 更新湖仓表信息
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
   * 更新湖仓表信息
   * 
   * @param request - UpdateDataLakeTableRequest
   * @returns UpdateDataLakeTableResponse
   */
  async updateDataLakeTable(request: $_model.UpdateDataLakeTableRequest): Promise<$_model.UpdateDataLakeTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataLakeTableWithOptions(request, runtime);
  }

  /**
   * 更新文档
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
   * 更新文档
   * 
   * @param request - UpdateDocumentRequest
   * @returns UpdateDocumentResponse
   */
  async updateDocument(request: $_model.UpdateDocumentRequest): Promise<$_model.UpdateDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDocumentWithOptions(request, runtime);
  }

  /**
   * 更新onemeta3.0的知识库
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
   * 更新onemeta3.0的知识库
   * 
   * @param request - UpdateKnowledgeBaseRequest
   * @returns UpdateKnowledgeBaseResponse
   */
  async updateKnowledgeBase(request: $_model.UpdateKnowledgeBaseRequest): Promise<$_model.UpdateKnowledgeBaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateKnowledgeBaseWithOptions(request, runtime);
  }

  /**
   * 上传文档
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
   * 上传文档
   * 
   * @param request - UploadDocumentRequest
   * @returns UploadDocumentResponse
   */
  async uploadDocument(request: $_model.UploadDocumentRequest): Promise<$_model.UploadDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadDocumentWithOptions(request, runtime);
  }

  /**
   * 更新或插入onemeta3.0的知识库chunks
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
   * 更新或插入onemeta3.0的知识库chunks
   * 
   * @param request - UpsertDocumentChunksRequest
   * @returns UpsertDocumentChunksResponse
   */
  async upsertDocumentChunks(request: $_model.UpsertDocumentChunksRequest): Promise<$_model.UpsertDocumentChunksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upsertDocumentChunksWithOptions(request, runtime);
  }

  /**
   * 工作空间异步操作日志查询接口
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
   * 工作空间异步操作日志查询接口
   * 
   * @param request - WorkspaceActionLogRequest
   * @returns WorkspaceActionLogResponse
   */
  async workspaceActionLog(request: $_model.WorkspaceActionLogRequest): Promise<$_model.WorkspaceActionLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.workspaceActionLogWithOptions(request, runtime);
  }

  /**
   * 工作空间异步操作状态查询接口
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
   * 工作空间异步操作状态查询接口
   * 
   * @param request - WorkspaceActionStatusRequest
   * @returns WorkspaceActionStatusResponse
   */
  async workspaceActionStatus(request: $_model.WorkspaceActionStatusRequest): Promise<$_model.WorkspaceActionStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.workspaceActionStatusWithOptions(request, runtime);
  }

  /**
   * 工作空间代码发布。这是个异步接口，请求返回一个key，请根据key查询 WorkspaceActionStatus接口获取状态
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
   * 工作空间代码发布。这是个异步接口，请求返回一个key，请根据key查询 WorkspaceActionStatus接口获取状态
   * 
   * @param request - WorkspaceCodePublishRequest
   * @returns WorkspaceCodePublishResponse
   */
  async workspaceCodePublish(request: $_model.WorkspaceCodePublishRequest): Promise<$_model.WorkspaceCodePublishResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.workspaceCodePublishWithOptions(request, runtime);
  }

}
