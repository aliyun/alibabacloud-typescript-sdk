// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._productId = "RdsAi";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-wulanchabu': "rdsai.aliyuncs.com",
      'cn-beijing': "rdsai.aliyuncs.com",
      'cn-shanghai': "rdsai.aliyuncs.com",
      'cn-hangzhou': "rdsai.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("rdsai", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds an exclusion item to an import task.
   * 
   * @remarks
   * Adds a job exclusion item.
   * 
   * @param request - AddContextDatabaseSyncJobExclusionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddContextDatabaseSyncJobExclusionResponse
   */
  async addContextDatabaseSyncJobExclusionWithOptions(request: $_model.AddContextDatabaseSyncJobExclusionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddContextDatabaseSyncJobExclusionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.documentId)) {
      query["DocumentId"] = request.documentId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddContextDatabaseSyncJobExclusion",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddContextDatabaseSyncJobExclusionResponse>(await this.callApi(params, req, runtime), new $_model.AddContextDatabaseSyncJobExclusionResponse({}));
  }

  /**
   * Adds an exclusion item to an import task.
   * 
   * @remarks
   * Adds a job exclusion item.
   * 
   * @param request - AddContextDatabaseSyncJobExclusionRequest
   * @returns AddContextDatabaseSyncJobExclusionResponse
   */
  async addContextDatabaseSyncJobExclusion(request: $_model.AddContextDatabaseSyncJobExclusionRequest): Promise<$_model.AddContextDatabaseSyncJobExclusionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addContextDatabaseSyncJobExclusionWithOptions(request, runtime);
  }

  /**
   * Cancels an in-progress discovery task by task ID.
   * 
   * @remarks
   * You can specify a ClientToken to ensure idempotence for write operations. If you do not specify this parameter, the backend automatically generates one.
   * 
   * @param request - CancelContextDatabaseSyncDiscoveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelContextDatabaseSyncDiscoveryResponse
   */
  async cancelContextDatabaseSyncDiscoveryWithOptions(request: $_model.CancelContextDatabaseSyncDiscoveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelContextDatabaseSyncDiscoveryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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
      action: "CancelContextDatabaseSyncDiscovery",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelContextDatabaseSyncDiscoveryResponse>(await this.callApi(params, req, runtime), new $_model.CancelContextDatabaseSyncDiscoveryResponse({}));
  }

  /**
   * Cancels an in-progress discovery task by task ID.
   * 
   * @remarks
   * You can specify a ClientToken to ensure idempotence for write operations. If you do not specify this parameter, the backend automatically generates one.
   * 
   * @param request - CancelContextDatabaseSyncDiscoveryRequest
   * @returns CancelContextDatabaseSyncDiscoveryResponse
   */
  async cancelContextDatabaseSyncDiscovery(request: $_model.CancelContextDatabaseSyncDiscoveryRequest): Promise<$_model.CancelContextDatabaseSyncDiscoveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelContextDatabaseSyncDiscoveryWithOptions(request, runtime);
  }

  /**
   * Cancels a run.
   * 
   * @remarks
   * Write operations support idempotence through ClientToken. If ClientToken is not provided, the backend generates one automatically. Cancellation is best-effort. Completed RunItems are not affected.
   * 
   * @param request - CancelContextDatabaseSyncRunRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelContextDatabaseSyncRunResponse
   */
  async cancelContextDatabaseSyncRunWithOptions(request: $_model.CancelContextDatabaseSyncRunRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelContextDatabaseSyncRunResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.runId)) {
      query["RunId"] = request.runId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelContextDatabaseSyncRun",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelContextDatabaseSyncRunResponse>(await this.callApi(params, req, runtime), new $_model.CancelContextDatabaseSyncRunResponse({}));
  }

  /**
   * Cancels a run.
   * 
   * @remarks
   * Write operations support idempotence through ClientToken. If ClientToken is not provided, the backend generates one automatically. Cancellation is best-effort. Completed RunItems are not affected.
   * 
   * @param request - CancelContextDatabaseSyncRunRequest
   * @returns CancelContextDatabaseSyncRunResponse
   */
  async cancelContextDatabaseSyncRun(request: $_model.CancelContextDatabaseSyncRunRequest): Promise<$_model.CancelContextDatabaseSyncRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelContextDatabaseSyncRunWithOptions(request, runtime);
  }

  /**
   * Sends a conversation message.
   * 
   * @param tmpReq - ChatMessagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatMessagesResponse
   */
  async *chatMessagesWithSSE(tmpReq: $_model.ChatMessagesRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.ChatMessagesResponse, any, unknown> {
    tmpReq.validate();
    let request = new $_model.ChatMessagesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.files)) {
      request.filesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.files, "Files", "json");
    }

    if (!$dara.isNull(tmpReq.inputs)) {
      request.inputsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inputs, "Inputs", "json");
    }

    let query = { };
    if (!$dara.isNull(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.eventMode)) {
      query["EventMode"] = request.eventMode;
    }

    if (!$dara.isNull(request.filesShrink)) {
      query["Files"] = request.filesShrink;
    }

    if (!$dara.isNull(request.inputsShrink)) {
      query["Inputs"] = request.inputsShrink;
    }

    if (!$dara.isNull(request.parentMessageId)) {
      query["ParentMessageId"] = request.parentMessageId;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatMessages",
      version: "2025-05-07",
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
        yield $dara.cast<$_model.ChatMessagesResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.ChatMessagesResponse({}));
      }

    }
  }

  /**
   * Sends a conversation message.
   * 
   * @param tmpReq - ChatMessagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatMessagesResponse
   */
  async chatMessagesWithOptions(tmpReq: $_model.ChatMessagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatMessagesResponse> {
    tmpReq.validate();
    let request = new $_model.ChatMessagesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.files)) {
      request.filesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.files, "Files", "json");
    }

    if (!$dara.isNull(tmpReq.inputs)) {
      request.inputsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inputs, "Inputs", "json");
    }

    let query = { };
    if (!$dara.isNull(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.eventMode)) {
      query["EventMode"] = request.eventMode;
    }

    if (!$dara.isNull(request.filesShrink)) {
      query["Files"] = request.filesShrink;
    }

    if (!$dara.isNull(request.inputsShrink)) {
      query["Inputs"] = request.inputsShrink;
    }

    if (!$dara.isNull(request.parentMessageId)) {
      query["ParentMessageId"] = request.parentMessageId;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatMessages",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatMessagesResponse>(await this.callApi(params, req, runtime), new $_model.ChatMessagesResponse({}));
  }

  /**
   * Sends a conversation message.
   * 
   * @param request - ChatMessagesRequest
   * @returns ChatMessagesResponse
   */
  async chatMessages(request: $_model.ChatMessagesRequest): Promise<$_model.ChatMessagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatMessagesWithOptions(request, runtime);
  }

  /**
   * Stops a conversation.
   * 
   * @param request - ChatMessagesTaskStopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatMessagesTaskStopResponse
   */
  async chatMessagesTaskStopWithOptions(request: $_model.ChatMessagesTaskStopRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatMessagesTaskStopResponse> {
    request.validate();
    let query = { };
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
      action: "ChatMessagesTaskStop",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatMessagesTaskStopResponse>(await this.callApi(params, req, runtime), new $_model.ChatMessagesTaskStopResponse({}));
  }

  /**
   * Stops a conversation.
   * 
   * @param request - ChatMessagesTaskStopRequest
   * @returns ChatMessagesTaskStopResponse
   */
  async chatMessagesTaskStop(request: $_model.ChatMessagesTaskStopRequest): Promise<$_model.ChatMessagesTaskStopResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatMessagesTaskStopWithOptions(request, runtime);
  }

  /**
   * Creates a custom API key.
   * 
   * @remarks
   * ### Applicable engines
   * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param request - CreateApiKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApiKeyResponse
   */
  async createApiKeyWithOptions(request: $_model.CreateApiKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApiKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dailyTokenQuota)) {
      query["DailyTokenQuota"] = request.dailyTokenQuota;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.keyName)) {
      query["KeyName"] = request.keyName;
    }

    if (!$dara.isNull(request.limitRate)) {
      query["LimitRate"] = request.limitRate;
    }

    if (!$dara.isNull(request.limitType)) {
      query["LimitType"] = request.limitType;
    }

    if (!$dara.isNull(request.quantity)) {
      query["Quantity"] = request.quantity;
    }

    if (!$dara.isNull(request.roleArn)) {
      query["RoleArn"] = request.roleArn;
    }

    if (!$dara.isNull(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    if (!$dara.isNull(request.tokenQuota)) {
      query["TokenQuota"] = request.tokenQuota;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApiKey",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.CreateApiKeyResponse({}));
  }

  /**
   * Creates a custom API key.
   * 
   * @remarks
   * ### Applicable engines
   * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param request - CreateApiKeyRequest
   * @returns CreateApiKeyResponse
   */
  async createApiKey(request: $_model.CreateApiKeyRequest): Promise<$_model.CreateApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApiKeyWithOptions(request, runtime);
  }

  /**
   * Creates an ApsaraDB RDS AI application instance.
   * 
   * @remarks
   * ### Supported engines
   * ApsaraDB RDS for PostgreSQL
   * ### Related feature documentation
   * >Warning: This API operation incurs fees. Read the related feature documentation carefully before you proceed.
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param tmpReq - CreateAppInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppInstanceResponse
   */
  async createAppInstanceWithOptions(tmpReq: $_model.CreateAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAppInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.components)) {
      request.componentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.components, "Components", "json");
    }

    if (!$dara.isNull(tmpReq.DBInstanceConfig)) {
      request.DBInstanceConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.DBInstanceConfig, "DBInstanceConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.componentsShrink)) {
      query["Components"] = request.componentsShrink;
    }

    if (!$dara.isNull(request.DBInstanceConfigShrink)) {
      query["DBInstanceConfig"] = request.DBInstanceConfigShrink;
    }

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.dashboardPassword)) {
      query["DashboardPassword"] = request.dashboardPassword;
    }

    if (!$dara.isNull(request.dashboardUsername)) {
      query["DashboardUsername"] = request.dashboardUsername;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
    }

    if (!$dara.isNull(request.databasePassword)) {
      query["DatabasePassword"] = request.databasePassword;
    }

    if (!$dara.isNull(request.initializeWithExistingData)) {
      query["InitializeWithExistingData"] = request.initializeWithExistingData;
    }

    if (!$dara.isNull(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!$dara.isNull(request.publicEndpointEnabled)) {
      query["PublicEndpointEnabled"] = request.publicEndpointEnabled;
    }

    if (!$dara.isNull(request.publicNetworkAccessEnabled)) {
      query["PublicNetworkAccessEnabled"] = request.publicNetworkAccessEnabled;
    }

    if (!$dara.isNull(request.RAGEnabled)) {
      query["RAGEnabled"] = request.RAGEnabled;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppInstance",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppInstanceResponse({}));
  }

  /**
   * Creates an ApsaraDB RDS AI application instance.
   * 
   * @remarks
   * ### Supported engines
   * ApsaraDB RDS for PostgreSQL
   * ### Related feature documentation
   * >Warning: This API operation incurs fees. Read the related feature documentation carefully before you proceed.
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - CreateAppInstanceRequest
   * @returns CreateAppInstanceResponse
   */
  async createAppInstance(request: $_model.CreateAppInstanceRequest): Promise<$_model.CreateAppInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a context database API key.
   * 
   * @remarks
   * Creates an API key and returns the plaintext apiKey.
   * 
   * @param request - CreateContextDatabaseApiKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateContextDatabaseApiKeyResponse
   */
  async createContextDatabaseApiKeyWithOptions(request: $_model.CreateContextDatabaseApiKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateContextDatabaseApiKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.memberId)) {
      query["MemberId"] = request.memberId;
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
      action: "CreateContextDatabaseApiKey",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateContextDatabaseApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.CreateContextDatabaseApiKeyResponse({}));
  }

  /**
   * Creates a context database API key.
   * 
   * @remarks
   * Creates an API key and returns the plaintext apiKey.
   * 
   * @param request - CreateContextDatabaseApiKeyRequest
   * @returns CreateContextDatabaseApiKeyResponse
   */
  async createContextDatabaseApiKey(request: $_model.CreateContextDatabaseApiKeyRequest): Promise<$_model.CreateContextDatabaseApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createContextDatabaseApiKeyWithOptions(request, runtime);
  }

  /**
   * Creates a ContextDB member.
   * 
   * @remarks
   * Creates a member. If GenerateInitialKey is set to true, the first API key is also issued, and the plaintext ApiKey is returned in the response. This is a sensitive field and is returned only once. Store it securely. After the member is created, you can call the List or Get operation to query the member and the metadata of the API keys under the member.
   * 
   * @param request - CreateContextDatabaseMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateContextDatabaseMemberResponse
   */
  async createContextDatabaseMemberWithOptions(request: $_model.CreateContextDatabaseMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateContextDatabaseMemberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.generateInitialKey)) {
      query["GenerateInitialKey"] = request.generateInitialKey;
    }

    if (!$dara.isNull(request.initialKeyName)) {
      query["InitialKeyName"] = request.initialKeyName;
    }

    if (!$dara.isNull(request.memberName)) {
      query["MemberName"] = request.memberName;
    }

    if (!$dara.isNull(request.role)) {
      query["Role"] = request.role;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateContextDatabaseMember",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateContextDatabaseMemberResponse>(await this.callApi(params, req, runtime), new $_model.CreateContextDatabaseMemberResponse({}));
  }

  /**
   * Creates a ContextDB member.
   * 
   * @remarks
   * Creates a member. If GenerateInitialKey is set to true, the first API key is also issued, and the plaintext ApiKey is returned in the response. This is a sensitive field and is returned only once. Store it securely. After the member is created, you can call the List or Get operation to query the member and the metadata of the API keys under the member.
   * 
   * @param request - CreateContextDatabaseMemberRequest
   * @returns CreateContextDatabaseMemberResponse
   */
  async createContextDatabaseMember(request: $_model.CreateContextDatabaseMemberRequest): Promise<$_model.CreateContextDatabaseMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createContextDatabaseMemberWithOptions(request, runtime);
  }

  /**
   * Creates a synchronization connection.
   * 
   * @remarks
   * For write operations, you can specify a ClientToken to ensure idempotency. If no ClientToken is provided, the backend automatically generates one. Upon successful creation, the complete information of the created object is returned, including the ID that can be used for subsequent queries or updates.
   * 
   * @param request - CreateContextDatabaseSyncConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateContextDatabaseSyncConnectionResponse
   */
  async createContextDatabaseSyncConnectionWithOptions(request: $_model.CreateContextDatabaseSyncConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateContextDatabaseSyncConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authKind)) {
      query["AuthKind"] = request.authKind;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateContextDatabaseSyncConnection",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateContextDatabaseSyncConnectionResponse>(await this.callApi(params, req, runtime), new $_model.CreateContextDatabaseSyncConnectionResponse({}));
  }

  /**
   * Creates a synchronization connection.
   * 
   * @remarks
   * For write operations, you can specify a ClientToken to ensure idempotency. If no ClientToken is provided, the backend automatically generates one. Upon successful creation, the complete information of the created object is returned, including the ID that can be used for subsequent queries or updates.
   * 
   * @param request - CreateContextDatabaseSyncConnectionRequest
   * @returns CreateContextDatabaseSyncConnectionResponse
   */
  async createContextDatabaseSyncConnection(request: $_model.CreateContextDatabaseSyncConnectionRequest): Promise<$_model.CreateContextDatabaseSyncConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createContextDatabaseSyncConnectionWithOptions(request, runtime);
  }

  /**
   * Creates an import task.
   * 
   * @remarks
   * Write operations support idempotence via ClientToken. If ClientToken is not provided, the backend generates one automatically. Target is an implicit concept — you only need to provide KnowledgeBaseId, and the backend automatically creates or matches the Target.
   * On success, the response returns the complete information of the created object. The Id field is active and can be used for subsequent queries or updates.
   * 
   * @param tmpReq - CreateContextDatabaseSyncJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateContextDatabaseSyncJobResponse
   */
  async createContextDatabaseSyncJobWithOptions(tmpReq: $_model.CreateContextDatabaseSyncJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateContextDatabaseSyncJobResponse> {
    tmpReq.validate();
    let request = new $_model.CreateContextDatabaseSyncJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filters)) {
      request.filtersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filters, "Filters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.filtersShrink)) {
      query["Filters"] = request.filtersShrink;
    }

    if (!$dara.isNull(request.knowledgeBaseId)) {
      query["KnowledgeBaseId"] = request.knowledgeBaseId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetKnowledgeBaseId)) {
      query["TargetKnowledgeBaseId"] = request.targetKnowledgeBaseId;
    }

    if (!$dara.isNull(request.targetKnowledgeBaseName)) {
      query["TargetKnowledgeBaseName"] = request.targetKnowledgeBaseName;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateContextDatabaseSyncJob",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateContextDatabaseSyncJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateContextDatabaseSyncJobResponse({}));
  }

  /**
   * Creates an import task.
   * 
   * @remarks
   * Write operations support idempotence via ClientToken. If ClientToken is not provided, the backend generates one automatically. Target is an implicit concept — you only need to provide KnowledgeBaseId, and the backend automatically creates or matches the Target.
   * On success, the response returns the complete information of the created object. The Id field is active and can be used for subsequent queries or updates.
   * 
   * @param request - CreateContextDatabaseSyncJobRequest
   * @returns CreateContextDatabaseSyncJobResponse
   */
  async createContextDatabaseSyncJob(request: $_model.CreateContextDatabaseSyncJobRequest): Promise<$_model.CreateContextDatabaseSyncJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createContextDatabaseSyncJobWithOptions(request, runtime);
  }

  /**
   * Creates a data selection scope.
   * 
   * @remarks
   * Write operations support idempotence by passing a ClientToken. If no token is provided, the backend generates one automatically. After creating a data selection scope, you typically need to call StartContextDatabaseSyncSourceDiscovery to discover available nodes.
   * On success, the response returns the complete information of the created object. The Id field can be used for subsequent queries or updates.
   * 
   * @param tmpReq - CreateContextDatabaseSyncSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateContextDatabaseSyncSourceResponse
   */
  async createContextDatabaseSyncSourceWithOptions(tmpReq: $_model.CreateContextDatabaseSyncSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateContextDatabaseSyncSourceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateContextDatabaseSyncSourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sourceConfig)) {
      request.sourceConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceConfig, "SourceConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionId)) {
      query["ConnectionId"] = request.connectionId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.sourceConfigShrink)) {
      query["SourceConfig"] = request.sourceConfigShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateContextDatabaseSyncSource",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateContextDatabaseSyncSourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateContextDatabaseSyncSourceResponse({}));
  }

  /**
   * Creates a data selection scope.
   * 
   * @remarks
   * Write operations support idempotence by passing a ClientToken. If no token is provided, the backend generates one automatically. After creating a data selection scope, you typically need to call StartContextDatabaseSyncSourceDiscovery to discover available nodes.
   * On success, the response returns the complete information of the created object. The Id field can be used for subsequent queries or updates.
   * 
   * @param request - CreateContextDatabaseSyncSourceRequest
   * @returns CreateContextDatabaseSyncSourceResponse
   */
  async createContextDatabaseSyncSource(request: $_model.CreateContextDatabaseSyncSourceRequest): Promise<$_model.CreateContextDatabaseSyncSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createContextDatabaseSyncSourceWithOptions(request, runtime);
  }

  /**
   * Creates a ContextDB workspace and its first member, and optionally generates an initial API key.
   * 
   * @remarks
   * Creates a ContextDB workspace and its first member.
   * - GenerateInitialKey defaults to `true`. An initial API key is generated during creation, and the plaintext key is returned only once. Save the returned key. If set to `false`, no initial API key is generated, and the ApiKeyName and ApiKey fields in the response are empty.
   * - You can use ClusterId to specify the cluster to which the workspace belongs.
   * - You can use PermissionMode to select the compatibility mode or the advanced permission mode. The advanced permission mode can only be selected by the Alibaba Cloud account. It takes effect immediately after the workspace is created and cannot be disabled.
   * 
   * @param request - CreateContextDatabaseWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateContextDatabaseWorkspaceResponse
   */
  async createContextDatabaseWorkspaceWithOptions(request: $_model.CreateContextDatabaseWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateContextDatabaseWorkspaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.generateInitialKey)) {
      query["GenerateInitialKey"] = request.generateInitialKey;
    }

    if (!$dara.isNull(request.memberName)) {
      query["MemberName"] = request.memberName;
    }

    if (!$dara.isNull(request.permissionMode)) {
      query["PermissionMode"] = request.permissionMode;
    }

    if (!$dara.isNull(request.workspaceName)) {
      query["WorkspaceName"] = request.workspaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateContextDatabaseWorkspace",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateContextDatabaseWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateContextDatabaseWorkspaceResponse({}));
  }

  /**
   * Creates a ContextDB workspace and its first member, and optionally generates an initial API key.
   * 
   * @remarks
   * Creates a ContextDB workspace and its first member.
   * - GenerateInitialKey defaults to `true`. An initial API key is generated during creation, and the plaintext key is returned only once. Save the returned key. If set to `false`, no initial API key is generated, and the ApiKeyName and ApiKey fields in the response are empty.
   * - You can use ClusterId to specify the cluster to which the workspace belongs.
   * - You can use PermissionMode to select the compatibility mode or the advanced permission mode. The advanced permission mode can only be selected by the Alibaba Cloud account. It takes effect immediately after the workspace is created and cannot be disabled.
   * 
   * @param request - CreateContextDatabaseWorkspaceRequest
   * @returns CreateContextDatabaseWorkspaceResponse
   */
  async createContextDatabaseWorkspace(request: $_model.CreateContextDatabaseWorkspaceRequest): Promise<$_model.CreateContextDatabaseWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createContextDatabaseWorkspaceWithOptions(request, runtime);
  }

  /**
   * Creates a custom agent.
   * 
   * @param tmpReq - CreateCustomAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomAgentResponse
   */
  async createCustomAgentWithOptions(tmpReq: $_model.CreateCustomAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomAgentResponse> {
    tmpReq.validate();
    let request = new $_model.CreateCustomAgentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.skillIds)) {
      request.skillIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.skillIds, "SkillIds", "json");
    }

    if (!$dara.isNull(tmpReq.tools)) {
      request.toolsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tools, "Tools", "json");
    }

    let query = { };
    if (!$dara.isNull(request.enableTools)) {
      query["EnableTools"] = request.enableTools;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.skillIdsShrink)) {
      query["SkillIds"] = request.skillIdsShrink;
    }

    if (!$dara.isNull(request.systemPrompt)) {
      query["SystemPrompt"] = request.systemPrompt;
    }

    if (!$dara.isNull(request.toolsShrink)) {
      query["Tools"] = request.toolsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomAgent",
      version: "2025-05-07",
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
   * Creates a custom agent.
   * 
   * @param request - CreateCustomAgentRequest
   * @returns CreateCustomAgentResponse
   */
  async createCustomAgent(request: $_model.CreateCustomAgentRequest): Promise<$_model.CreateCustomAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomAgentWithOptions(request, runtime);
  }

  /**
   * Creates a batch instance inspection task.
   * 
   * @param request - CreateInspectionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInspectionTaskResponse
   */
  async createInspectionTaskWithOptions(request: $_model.CreateInspectionTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInspectionTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.inspectionItems)) {
      query["InspectionItems"] = request.inspectionItems;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.reportLanguage)) {
      query["ReportLanguage"] = request.reportLanguage;
    }

    if (!$dara.isNull(request.reportRegionId)) {
      query["ReportRegionId"] = request.reportRegionId;
    }

    if (!$dara.isNull(request.reportType)) {
      query["ReportType"] = request.reportType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInspectionTask",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInspectionTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateInspectionTaskResponse({}));
  }

  /**
   * Creates a batch instance inspection task.
   * 
   * @param request - CreateInspectionTaskRequest
   * @returns CreateInspectionTaskResponse
   */
  async createInspectionTask(request: $_model.CreateInspectionTaskRequest): Promise<$_model.CreateInspectionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInspectionTaskWithOptions(request, runtime);
  }

  /**
   * Triggers an asynchronous export task for MO usage details in CSV format.
   * 
   * @remarks
   * ### Applicable engine
   * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param request - CreateMOUsageDetailExportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMOUsageDetailExportResponse
   */
  async createMOUsageDetailExportWithOptions(request: $_model.CreateMOUsageDetailExportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMOUsageDetailExportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiKey)) {
      query["ApiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.usageType)) {
      query["UsageType"] = request.usageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMOUsageDetailExport",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMOUsageDetailExportResponse>(await this.callApi(params, req, runtime), new $_model.CreateMOUsageDetailExportResponse({}));
  }

  /**
   * Triggers an asynchronous export task for MO usage details in CSV format.
   * 
   * @remarks
   * ### Applicable engine
   * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param request - CreateMOUsageDetailExportRequest
   * @returns CreateMOUsageDetailExportResponse
   */
  async createMOUsageDetailExport(request: $_model.CreateMOUsageDetailExportRequest): Promise<$_model.CreateMOUsageDetailExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMOUsageDetailExportWithOptions(request, runtime);
  }

  /**
   * Creates a sandbox template.
   * 
   * @remarks
   * ### Applicable engine
   * RDS Supabase
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param tmpReq - CreateSandboxTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSandboxTemplateResponse
   */
  async createSandboxTemplateWithOptions(tmpReq: $_model.CreateSandboxTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSandboxTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSandboxTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.defaultCpu)) {
      query["DefaultCpu"] = request.defaultCpu;
    }

    if (!$dara.isNull(request.defaultMemory)) {
      query["DefaultMemory"] = request.defaultMemory;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.image)) {
      query["Image"] = request.image;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSandboxTemplate",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSandboxTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateSandboxTemplateResponse({}));
  }

  /**
   * Creates a sandbox template.
   * 
   * @remarks
   * ### Applicable engine
   * RDS Supabase
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - CreateSandboxTemplateRequest
   * @returns CreateSandboxTemplateResponse
   */
  async createSandboxTemplate(request: $_model.CreateSandboxTemplateRequest): Promise<$_model.CreateSandboxTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSandboxTemplateWithOptions(request, runtime);
  }

  /**
   * Creates a scheduled inspection configuration for batch instances.
   * 
   * @remarks
   * ### Applicable engine
   * RDS PostgreSQL
   * ### Related feature documentation
   * >Warning: This API operation incurs fees. Read the related feature documentation carefully before you perform this operation.
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - CreateScheduledTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScheduledTaskResponse
   */
  async createScheduledTaskWithOptions(request: $_model.CreateScheduledTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateScheduledTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.frequency)) {
      query["Frequency"] = request.frequency;
    }

    if (!$dara.isNull(request.inspectionItems)) {
      query["InspectionItems"] = request.inspectionItems;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.reportLanguage)) {
      query["ReportLanguage"] = request.reportLanguage;
    }

    if (!$dara.isNull(request.reportRegionId)) {
      query["ReportRegionId"] = request.reportRegionId;
    }

    if (!$dara.isNull(request.reportType)) {
      query["ReportType"] = request.reportType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.timeRange)) {
      query["TimeRange"] = request.timeRange;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScheduledTask",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateScheduledTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateScheduledTaskResponse({}));
  }

  /**
   * Creates a scheduled inspection configuration for batch instances.
   * 
   * @remarks
   * ### Applicable engine
   * RDS PostgreSQL
   * ### Related feature documentation
   * >Warning: This API operation incurs fees. Read the related feature documentation carefully before you perform this operation.
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - CreateScheduledTaskRequest
   * @returns CreateScheduledTaskResponse
   */
  async createScheduledTask(request: $_model.CreateScheduledTaskRequest): Promise<$_model.CreateScheduledTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createScheduledTaskWithOptions(request, runtime);
  }

  /**
   * Creates a user-defined skill.
   * 
   * @param tmpReq - CreateSkillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSkillResponse
   */
  async createSkillWithOptions(tmpReq: $_model.CreateSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSkillResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSkillShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.content)) {
      request.contentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.content, "Content", "json");
    }

    if (!$dara.isNull(tmpReq.dbtypes)) {
      request.dbtypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dbtypes, "Dbtypes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.contentShrink)) {
      query["Content"] = request.contentShrink;
    }

    if (!$dara.isNull(request.dbtypesShrink)) {
      query["Dbtypes"] = request.dbtypesShrink;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.updateNote)) {
      query["UpdateNote"] = request.updateNote;
    }

    if (!$dara.isNull(request.uploadId)) {
      query["UploadId"] = request.uploadId;
    }

    if (!$dara.isNull(request.uploadToken)) {
      query["UploadToken"] = request.uploadToken;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSkill",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSkillResponse>(await this.callApi(params, req, runtime), new $_model.CreateSkillResponse({}));
  }

  /**
   * Creates a user-defined skill.
   * 
   * @param request - CreateSkillRequest
   * @returns CreateSkillResponse
   */
  async createSkill(request: $_model.CreateSkillRequest): Promise<$_model.CreateSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSkillWithOptions(request, runtime);
  }

  /**
   * Deletes a custom API key.
   * 
   * @remarks
   * ### Applicable engine
   * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param request - DeleteApiKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApiKeyResponse
   */
  async deleteApiKeyWithOptions(request: $_model.DeleteApiKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApiKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiKey)) {
      query["ApiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApiKey",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApiKeyResponse({}));
  }

  /**
   * Deletes a custom API key.
   * 
   * @remarks
   * ### Applicable engine
   * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param request - DeleteApiKeyRequest
   * @returns DeleteApiKeyResponse
   */
  async deleteApiKey(request: $_model.DeleteApiKeyRequest): Promise<$_model.DeleteApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApiKeyWithOptions(request, runtime);
  }

  /**
   * Deletes an RDS AI application instance.
   * 
   * @remarks
   * ### Applicable DPI engine
   * RDS PostgreSQL
   * ### Related feature documentation
   * >Warning: This API operation incurs fees. Read the related feature documentation carefully before you perform this operation.
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * >Notice: Deleting an RDS Supabase project does not automatically delete the ApsaraDB RDS for PostgreSQL instance or the Internet NAT gateway that were created along with the project. You must [manual release the instance](https://help.aliyun.com/document_detail/96749.html) and delete the [Internet NAT gateway](https://help.aliyun.com/document_detail/121139.html) and [EIP](https://help.aliyun.com/document_detail/121527.html).
   * 
   * @param request - DeleteAppInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppInstanceResponse
   */
  async deleteAppInstanceWithOptions(request: $_model.DeleteAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deleteDBInstance)) {
      query["DeleteDBInstance"] = request.deleteDBInstance;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppInstance",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppInstanceResponse({}));
  }

  /**
   * Deletes an RDS AI application instance.
   * 
   * @remarks
   * ### Applicable DPI engine
   * RDS PostgreSQL
   * ### Related feature documentation
   * >Warning: This API operation incurs fees. Read the related feature documentation carefully before you perform this operation.
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * >Notice: Deleting an RDS Supabase project does not automatically delete the ApsaraDB RDS for PostgreSQL instance or the Internet NAT gateway that were created along with the project. You must [manual release the instance](https://help.aliyun.com/document_detail/96749.html) and delete the [Internet NAT gateway](https://help.aliyun.com/document_detail/121139.html) and [EIP](https://help.aliyun.com/document_detail/121527.html).
   * 
   * @param request - DeleteAppInstanceRequest
   * @returns DeleteAppInstanceResponse
   */
  async deleteAppInstance(request: $_model.DeleteAppInstanceRequest): Promise<$_model.DeleteAppInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppInstanceWithOptions(request, runtime);
  }

  /**
   * Deletes a context database member.
   * 
   * @remarks
   * Deletes a member. This is a hard delete and cannot be undone.
   * 
   * @param request - DeleteContextDatabaseMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteContextDatabaseMemberResponse
   */
  async deleteContextDatabaseMemberWithOptions(request: $_model.DeleteContextDatabaseMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteContextDatabaseMemberResponse> {
    request.validate();
    let query = { };
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
      action: "DeleteContextDatabaseMember",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteContextDatabaseMemberResponse>(await this.callApi(params, req, runtime), new $_model.DeleteContextDatabaseMemberResponse({}));
  }

  /**
   * Deletes a context database member.
   * 
   * @remarks
   * Deletes a member. This is a hard delete and cannot be undone.
   * 
   * @param request - DeleteContextDatabaseMemberRequest
   * @returns DeleteContextDatabaseMemberResponse
   */
  async deleteContextDatabaseMember(request: $_model.DeleteContextDatabaseMemberRequest): Promise<$_model.DeleteContextDatabaseMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteContextDatabaseMemberWithOptions(request, runtime);
  }

  /**
   * Deletes a data source.
   * 
   * @remarks
   * For write operations, you can specify a ClientToken to ensure idempotency. If you do not specify a ClientToken, the backend automatically generates one.
   * 
   * @param request - DeleteContextDatabaseSyncConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteContextDatabaseSyncConnectionResponse
   */
  async deleteContextDatabaseSyncConnectionWithOptions(request: $_model.DeleteContextDatabaseSyncConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteContextDatabaseSyncConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionId)) {
      query["ConnectionId"] = request.connectionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteContextDatabaseSyncConnection",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteContextDatabaseSyncConnectionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteContextDatabaseSyncConnectionResponse({}));
  }

  /**
   * Deletes a data source.
   * 
   * @remarks
   * For write operations, you can specify a ClientToken to ensure idempotency. If you do not specify a ClientToken, the backend automatically generates one.
   * 
   * @param request - DeleteContextDatabaseSyncConnectionRequest
   * @returns DeleteContextDatabaseSyncConnectionResponse
   */
  async deleteContextDatabaseSyncConnection(request: $_model.DeleteContextDatabaseSyncConnectionRequest): Promise<$_model.DeleteContextDatabaseSyncConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteContextDatabaseSyncConnectionWithOptions(request, runtime);
  }

  /**
   * Deletes an import task.
   * 
   * @remarks
   * You can provide a ClientToken to ensure idempotency for write operations. If not provided, the backend automatically generates one.
   * 
   * @param request - DeleteContextDatabaseSyncJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteContextDatabaseSyncJobResponse
   */
  async deleteContextDatabaseSyncJobWithOptions(request: $_model.DeleteContextDatabaseSyncJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteContextDatabaseSyncJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteContextDatabaseSyncJob",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteContextDatabaseSyncJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteContextDatabaseSyncJobResponse({}));
  }

  /**
   * Deletes an import task.
   * 
   * @remarks
   * You can provide a ClientToken to ensure idempotency for write operations. If not provided, the backend automatically generates one.
   * 
   * @param request - DeleteContextDatabaseSyncJobRequest
   * @returns DeleteContextDatabaseSyncJobResponse
   */
  async deleteContextDatabaseSyncJob(request: $_model.DeleteContextDatabaseSyncJobRequest): Promise<$_model.DeleteContextDatabaseSyncJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteContextDatabaseSyncJobWithOptions(request, runtime);
  }

  /**
   * Deletes a data selection scope.
   * 
   * @remarks
   * Write operations support idempotence through ClientToken. If ClientToken is not provided, the backend generates one automatically.
   * 
   * @param request - DeleteContextDatabaseSyncSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteContextDatabaseSyncSourceResponse
   */
  async deleteContextDatabaseSyncSourceWithOptions(request: $_model.DeleteContextDatabaseSyncSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteContextDatabaseSyncSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteContextDatabaseSyncSource",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteContextDatabaseSyncSourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteContextDatabaseSyncSourceResponse({}));
  }

  /**
   * Deletes a data selection scope.
   * 
   * @remarks
   * Write operations support idempotence through ClientToken. If ClientToken is not provided, the backend generates one automatically.
   * 
   * @param request - DeleteContextDatabaseSyncSourceRequest
   * @returns DeleteContextDatabaseSyncSourceResponse
   */
  async deleteContextDatabaseSyncSource(request: $_model.DeleteContextDatabaseSyncSourceRequest): Promise<$_model.DeleteContextDatabaseSyncSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteContextDatabaseSyncSourceWithOptions(request, runtime);
  }

  /**
   * Deletes a ContextDB workspace.
   * 
   * @remarks
   * Deletes a workspace. This is a hard deletion and cannot be undone. After the workspace is deleted, local metadata is synchronously soft deleted, and the deleted workspace is no longer counted towards the quota.
   * 
   * @param request - DeleteContextDatabaseWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteContextDatabaseWorkspaceResponse
   */
  async deleteContextDatabaseWorkspaceWithOptions(request: $_model.DeleteContextDatabaseWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteContextDatabaseWorkspaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteContextDatabaseWorkspace",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteContextDatabaseWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteContextDatabaseWorkspaceResponse({}));
  }

  /**
   * Deletes a ContextDB workspace.
   * 
   * @remarks
   * Deletes a workspace. This is a hard deletion and cannot be undone. After the workspace is deleted, local metadata is synchronously soft deleted, and the deleted workspace is no longer counted towards the quota.
   * 
   * @param request - DeleteContextDatabaseWorkspaceRequest
   * @returns DeleteContextDatabaseWorkspaceResponse
   */
  async deleteContextDatabaseWorkspace(request: $_model.DeleteContextDatabaseWorkspaceRequest): Promise<$_model.DeleteContextDatabaseWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteContextDatabaseWorkspaceWithOptions(request, runtime);
  }

  /**
   * Deletes a dedicated agent created by the user.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomAgent",
      version: "2025-05-07",
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
   * Deletes a dedicated agent created by the user.
   * 
   * @param request - DeleteCustomAgentRequest
   * @returns DeleteCustomAgentResponse
   */
  async deleteCustomAgent(request: $_model.DeleteCustomAgentRequest): Promise<$_model.DeleteCustomAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomAgentWithOptions(request, runtime);
  }

  /**
   * Deletes a sandbox template.
   * 
   * @remarks
   * ### Supported engine
   * RDS Supabase
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - DeleteSandboxTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSandboxTemplateResponse
   */
  async deleteSandboxTemplateWithOptions(request: $_model.DeleteSandboxTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSandboxTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSandboxTemplate",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSandboxTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSandboxTemplateResponse({}));
  }

  /**
   * Deletes a sandbox template.
   * 
   * @remarks
   * ### Supported engine
   * RDS Supabase
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - DeleteSandboxTemplateRequest
   * @returns DeleteSandboxTemplateResponse
   */
  async deleteSandboxTemplate(request: $_model.DeleteSandboxTemplateRequest): Promise<$_model.DeleteSandboxTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSandboxTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes a specified inspection configuration.
   * 
   * @param request - DeleteScheduledTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScheduledTaskResponse
   */
  async deleteScheduledTaskWithOptions(request: $_model.DeleteScheduledTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteScheduledTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.scheduledId)) {
      query["ScheduledId"] = request.scheduledId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteScheduledTask",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteScheduledTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteScheduledTaskResponse({}));
  }

  /**
   * Deletes a specified inspection configuration.
   * 
   * @param request - DeleteScheduledTaskRequest
   * @returns DeleteScheduledTaskResponse
   */
  async deleteScheduledTask(request: $_model.DeleteScheduledTaskRequest): Promise<$_model.DeleteScheduledTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteScheduledTaskWithOptions(request, runtime);
  }

  /**
   * Deletes a specified Skill.
   * 
   * @param request - DeleteSkillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSkillResponse
   */
  async deleteSkillWithOptions(request: $_model.DeleteSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSkillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.skillId)) {
      query["SkillId"] = request.skillId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSkill",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSkillResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSkillResponse({}));
  }

  /**
   * Deletes a specified Skill.
   * 
   * @param request - DeleteSkillRequest
   * @returns DeleteSkillResponse
   */
  async deleteSkill(request: $_model.DeleteSkillRequest): Promise<$_model.DeleteSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSkillWithOptions(request, runtime);
  }

  /**
   * Queries the details of an RDS AI application instance.
   * 
   * @remarks
   * ### Supported engines
   * RDS PostgreSQL
   * ### Related feature documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - DescribeAppInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppInstanceAttributeResponse
   */
  async describeAppInstanceAttributeWithOptions(request: $_model.DescribeAppInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppInstanceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.branchName)) {
      query["BranchName"] = request.branchName;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppInstanceAttribute",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppInstanceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppInstanceAttributeResponse({}));
  }

  /**
   * Queries the details of an RDS AI application instance.
   * 
   * @remarks
   * ### Supported engines
   * RDS PostgreSQL
   * ### Related feature documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - DescribeAppInstanceAttributeRequest
   * @returns DescribeAppInstanceAttributeResponse
   */
  async describeAppInstanceAttribute(request: $_model.DescribeAppInstanceAttributeRequest): Promise<$_model.DescribeAppInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the list of RDS AI application instances.
   * 
   * @remarks
   * ### Supported engines
   * RDS PostgreSQL
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - DescribeAppInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppInstancesResponse
   */
  async describeAppInstancesWithOptions(request: $_model.DescribeAppInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppInstances",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppInstancesResponse({}));
  }

  /**
   * Queries the list of RDS AI application instances.
   * 
   * @remarks
   * ### Supported engines
   * RDS PostgreSQL
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - DescribeAppInstancesRequest
   * @returns DescribeAppInstancesResponse
   */
  async describeAppInstances(request: $_model.DescribeAppInstancesRequest): Promise<$_model.DescribeAppInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the list of supported sandbox templates.
   * 
   * @remarks
   * ### Applicable engine
   * RDS Supabase
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - DescribeCommonSandboxTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCommonSandboxTemplatesResponse
   */
  async describeCommonSandboxTemplatesWithOptions(request: $_model.DescribeCommonSandboxTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCommonSandboxTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCommonSandboxTemplates",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCommonSandboxTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCommonSandboxTemplatesResponse({}));
  }

  /**
   * Queries the list of supported sandbox templates.
   * 
   * @remarks
   * ### Applicable engine
   * RDS Supabase
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - DescribeCommonSandboxTemplatesRequest
   * @returns DescribeCommonSandboxTemplatesResponse
   */
  async describeCommonSandboxTemplates(request: $_model.DescribeCommonSandboxTemplatesRequest): Promise<$_model.DescribeCommonSandboxTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCommonSandboxTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries the event list.
   * 
   * @param request - DescribeEventsListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventsListResponse
   */
  async describeEventsListWithOptions(request: $_model.DescribeEventsListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventsListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceIdList)) {
      query["InstanceIdList"] = request.instanceIdList;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEventsList",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventsListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventsListResponse({}));
  }

  /**
   * Queries the event list.
   * 
   * @param request - DescribeEventsListRequest
   * @returns DescribeEventsListResponse
   */
  async describeEventsList(request: $_model.DescribeEventsListRequest): Promise<$_model.DescribeEventsListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventsListWithOptions(request, runtime);
  }

  /**
   * Queries the authentication information of an RDS AI application instance.
   * 
   * @remarks
   * ### Supported engines
   * RDS PostgreSQL
   * ### Related feature documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - DescribeInstanceAuthInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceAuthInfoResponse
   */
  async describeInstanceAuthInfoWithOptions(request: $_model.DescribeInstanceAuthInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceAuthInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.branchName)) {
      query["BranchName"] = request.branchName;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceAuthInfo",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceAuthInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceAuthInfoResponse({}));
  }

  /**
   * Queries the authentication information of an RDS AI application instance.
   * 
   * @remarks
   * ### Supported engines
   * RDS PostgreSQL
   * ### Related feature documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - DescribeInstanceAuthInfoRequest
   * @returns DescribeInstanceAuthInfoResponse
   */
  async describeInstanceAuthInfo(request: $_model.DescribeInstanceAuthInfoRequest): Promise<$_model.DescribeInstanceAuthInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceAuthInfoWithOptions(request, runtime);
  }

  /**
   * Queries the endpoint information of an RDS AI application instance.
   * 
   * @remarks
   * ### Applicable engine
   * RDS PostgreSQL
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - DescribeInstanceEndpointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceEndpointsResponse
   */
  async describeInstanceEndpointsWithOptions(request: $_model.DescribeInstanceEndpointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceEndpointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.branchName)) {
      query["BranchName"] = request.branchName;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceEndpoints",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceEndpointsResponse({}));
  }

  /**
   * Queries the endpoint information of an RDS AI application instance.
   * 
   * @remarks
   * ### Applicable engine
   * RDS PostgreSQL
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - DescribeInstanceEndpointsRequest
   * @returns DescribeInstanceEndpointsResponse
   */
  async describeInstanceEndpoints(request: $_model.DescribeInstanceEndpointsRequest): Promise<$_model.DescribeInstanceEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceEndpointsWithOptions(request, runtime);
  }

  /**
   * Queries the IP whitelist of an RDS AI application instance.
   * 
   * @remarks
   * ### Supported engine
   * RDS PostgreSQL
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - DescribeInstanceIpWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceIpWhitelistResponse
   */
  async describeInstanceIpWhitelistWithOptions(request: $_model.DescribeInstanceIpWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceIpWhitelistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.branchName)) {
      query["BranchName"] = request.branchName;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceIpWhitelist",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceIpWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceIpWhitelistResponse({}));
  }

  /**
   * Queries the IP whitelist of an RDS AI application instance.
   * 
   * @remarks
   * ### Supported engine
   * RDS PostgreSQL
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - DescribeInstanceIpWhitelistRequest
   * @returns DescribeInstanceIpWhitelistResponse
   */
  async describeInstanceIpWhitelist(request: $_model.DescribeInstanceIpWhitelistRequest): Promise<$_model.DescribeInstanceIpWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceIpWhitelistWithOptions(request, runtime);
  }

  /**
   * Queries the RAG Agent configuration of an RDS AI application instance.
   * 
   * @param request - DescribeInstanceRAGConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceRAGConfigResponse
   */
  async describeInstanceRAGConfigWithOptions(request: $_model.DescribeInstanceRAGConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceRAGConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.branchName)) {
      query["BranchName"] = request.branchName;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceRAGConfig",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceRAGConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceRAGConfigResponse({}));
  }

  /**
   * Queries the RAG Agent configuration of an RDS AI application instance.
   * 
   * @param request - DescribeInstanceRAGConfigRequest
   * @returns DescribeInstanceRAGConfigResponse
   */
  async describeInstanceRAGConfig(request: $_model.DescribeInstanceRAGConfigRequest): Promise<$_model.DescribeInstanceRAGConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceRAGConfigWithOptions(request, runtime);
  }

  /**
   * Retrieves the SSL configuration of an ApsaraDB RDS AI application instance.
   * 
   * @remarks
   * ### Supported engines
   * ApsaraDB RDS for PostgreSQL
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - DescribeInstanceSSLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceSSLResponse
   */
  async describeInstanceSSLWithOptions(request: $_model.DescribeInstanceSSLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceSSLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.branchName)) {
      query["BranchName"] = request.branchName;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceSSL",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceSSLResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceSSLResponse({}));
  }

  /**
   * Retrieves the SSL configuration of an ApsaraDB RDS AI application instance.
   * 
   * @remarks
   * ### Supported engines
   * ApsaraDB RDS for PostgreSQL
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - DescribeInstanceSSLRequest
   * @returns DescribeInstanceSSLResponse
   */
  async describeInstanceSSL(request: $_model.DescribeInstanceSSLRequest): Promise<$_model.DescribeInstanceSSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceSSLWithOptions(request, runtime);
  }

  /**
   * Queries the storage configuration of an RDS AI application instance.
   * 
   * @remarks
   * ### Supported engines
   * RDS PostgreSQL
   * ### Related feature documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * > Currently, only Object Storage Service (OSS) is supported.
   * 
   * @param request - DescribeInstanceStorageConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceStorageConfigResponse
   */
  async describeInstanceStorageConfigWithOptions(request: $_model.DescribeInstanceStorageConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceStorageConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.branchName)) {
      query["BranchName"] = request.branchName;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceStorageConfig",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceStorageConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceStorageConfigResponse({}));
  }

  /**
   * Queries the storage configuration of an RDS AI application instance.
   * 
   * @remarks
   * ### Supported engines
   * RDS PostgreSQL
   * ### Related feature documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * > Currently, only Object Storage Service (OSS) is supported.
   * 
   * @param request - DescribeInstanceStorageConfigRequest
   * @returns DescribeInstanceStorageConfigResponse
   */
  async describeInstanceStorageConfig(request: $_model.DescribeInstanceStorageConfigRequest): Promise<$_model.DescribeInstanceStorageConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceStorageConfigWithOptions(request, runtime);
  }

  /**
   * Queries the token usage records of RDS AI Assistant Ultimate Edition.
   * 
   * @remarks
   * ### Applicable engine
   * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param request - DescribeMOTokenUsageDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMOTokenUsageDetailResponse
   */
  async describeMOTokenUsageDetailWithOptions(request: $_model.DescribeMOTokenUsageDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMOTokenUsageDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiKey)) {
      query["ApiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.consumerName)) {
      query["ConsumerName"] = request.consumerName;
    }

    if (!$dara.isNull(request.cursor)) {
      query["Cursor"] = request.cursor;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.usageType)) {
      query["UsageType"] = request.usageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMOTokenUsageDetail",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMOTokenUsageDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMOTokenUsageDetailResponse({}));
  }

  /**
   * Queries the token usage records of RDS AI Assistant Ultimate Edition.
   * 
   * @remarks
   * ### Applicable engine
   * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param request - DescribeMOTokenUsageDetailRequest
   * @returns DescribeMOTokenUsageDetailResponse
   */
  async describeMOTokenUsageDetail(request: $_model.DescribeMOTokenUsageDetailRequest): Promise<$_model.DescribeMOTokenUsageDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMOTokenUsageDetailWithOptions(request, runtime);
  }

  /**
   * Queries the token usage summary for a model operator instance.
   * 
   * @remarks
   * ### Applicable engine
   * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param request - DescribeMOTokenUsageSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMOTokenUsageSummaryResponse
   */
  async describeMOTokenUsageSummaryWithOptions(request: $_model.DescribeMOTokenUsageSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMOTokenUsageSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiKey)) {
      query["ApiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.usageType)) {
      query["UsageType"] = request.usageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMOTokenUsageSummary",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMOTokenUsageSummaryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMOTokenUsageSummaryResponse({}));
  }

  /**
   * Queries the token usage summary for a model operator instance.
   * 
   * @remarks
   * ### Applicable engine
   * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param request - DescribeMOTokenUsageSummaryRequest
   * @returns DescribeMOTokenUsageSummaryResponse
   */
  async describeMOTokenUsageSummary(request: $_model.DescribeMOTokenUsageSummaryRequest): Promise<$_model.DescribeMOTokenUsageSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMOTokenUsageSummaryWithOptions(request, runtime);
  }

  /**
   * Queries the status or download link of an asynchronous CSV export task for MO usage details.
   * 
   * @remarks
   * ### Applicable engine
   * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param request - DescribeMOUsageDetailExportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMOUsageDetailExportResponse
   */
  async describeMOUsageDetailExportWithOptions(request: $_model.DescribeMOUsageDetailExportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMOUsageDetailExportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMOUsageDetailExport",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMOUsageDetailExportResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMOUsageDetailExportResponse({}));
  }

  /**
   * Queries the status or download link of an asynchronous CSV export task for MO usage details.
   * 
   * @remarks
   * ### Applicable engine
   * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param request - DescribeMOUsageDetailExportRequest
   * @returns DescribeMOUsageDetailExportResponse
   */
  async describeMOUsageDetailExport(request: $_model.DescribeMOUsageDetailExportRequest): Promise<$_model.DescribeMOUsageDetailExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMOUsageDetailExportWithOptions(request, runtime);
  }

  /**
   * Queries the basic information and usage of an RDS AI Assistant Ultimate Edition instance.
   * 
   * @remarks
   * ### Applicable engine
   * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param request - DescribeModelOperatorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeModelOperatorResponse
   */
  async describeModelOperatorWithOptions(request: $_model.DescribeModelOperatorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeModelOperatorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeModelOperator",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeModelOperatorResponse>(await this.callApi(params, req, runtime), new $_model.DescribeModelOperatorResponse({}));
  }

  /**
   * Queries the basic information and usage of an RDS AI Assistant Ultimate Edition instance.
   * 
   * @remarks
   * ### Applicable engine
   * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param request - DescribeModelOperatorRequest
   * @returns DescribeModelOperatorResponse
   */
  async describeModelOperator(request: $_model.DescribeModelOperatorRequest): Promise<$_model.DescribeModelOperatorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeModelOperatorWithOptions(request, runtime);
  }

  /**
   * Queries instance monitoring data of an RDS AI Assistant Ultimate Edition instance.
   * 
   * @remarks
   * ### Applicable engine
   * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param tmpReq - DescribeMonitorDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMonitorDataResponse
   */
  async describeMonitorDataWithOptions(tmpReq: $_model.DescribeMonitorDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMonitorDataResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeMonitorDataShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.apiKeyName)) {
      request.apiKeyNameShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.apiKeyName, "ApiKeyName", "json");
    }

    let query = { };
    if (!$dara.isNull(request.apiKeyNameShrink)) {
      query["ApiKeyName"] = request.apiKeyNameShrink;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.metric)) {
      query["Metric"] = request.metric;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMonitorData",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMonitorDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMonitorDataResponse({}));
  }

  /**
   * Queries instance monitoring data of an RDS AI Assistant Ultimate Edition instance.
   * 
   * @remarks
   * ### Applicable engine
   * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param request - DescribeMonitorDataRequest
   * @returns DescribeMonitorDataResponse
   */
  async describeMonitorData(request: $_model.DescribeMonitorDataRequest): Promise<$_model.DescribeMonitorDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMonitorDataWithOptions(request, runtime);
  }

  /**
   * Queries a list of sandbox templates for creating Supabase sandboxes.
   * 
   * @remarks
   * ### Applicable engine
   * RDS Supabase
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - DescribeSandboxTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSandboxTemplatesResponse
   */
  async describeSandboxTemplatesWithOptions(request: $_model.DescribeSandboxTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSandboxTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.branchName)) {
      query["BranchName"] = request.branchName;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSandboxTemplates",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSandboxTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSandboxTemplatesResponse({}));
  }

  /**
   * Queries a list of sandbox templates for creating Supabase sandboxes.
   * 
   * @remarks
   * ### Applicable engine
   * RDS Supabase
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - DescribeSandboxTemplatesRequest
   * @returns DescribeSandboxTemplatesResponse
   */
  async describeSandboxTemplates(request: $_model.DescribeSandboxTemplatesRequest): Promise<$_model.DescribeSandboxTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSandboxTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries the whitelist of an RDS AI Assistant Ultimate Edition instance.
   * 
   * @remarks
   * ### Applicable engine
   * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param request - DescribeWhitelistIpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWhitelistIpsResponse
   */
  async describeWhitelistIpsWithOptions(request: $_model.DescribeWhitelistIpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWhitelistIpsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWhitelistIps",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWhitelistIpsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWhitelistIpsResponse({}));
  }

  /**
   * Queries the whitelist of an RDS AI Assistant Ultimate Edition instance.
   * 
   * @remarks
   * ### Applicable engine
   * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param request - DescribeWhitelistIpsRequest
   * @returns DescribeWhitelistIpsResponse
   */
  async describeWhitelistIps(request: $_model.DescribeWhitelistIpsRequest): Promise<$_model.DescribeWhitelistIpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWhitelistIpsWithOptions(request, runtime);
  }

  /**
   * Disables the sandbox and Edge Routine capabilities of Supabase. Note: This operation deletes all sandboxes and Edge Routines of the instance. Evaluate business risks before you perform this operation.
   * 
   * @remarks
   * Disables the sandbox and Edge Routine capabilities of Supabase.
   * >Notice: This operation deletes all sandboxes and Edge Routines of the Supabase instance. Evaluate business risks before you perform this operation.
   * 
   * @param request - DisableAgentRuntimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableAgentRuntimeResponse
   */
  async disableAgentRuntimeWithOptions(request: $_model.DisableAgentRuntimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableAgentRuntimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.branchName)) {
      query["BranchName"] = request.branchName;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableAgentRuntime",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableAgentRuntimeResponse>(await this.callApi(params, req, runtime), new $_model.DisableAgentRuntimeResponse({}));
  }

  /**
   * Disables the sandbox and Edge Routine capabilities of Supabase. Note: This operation deletes all sandboxes and Edge Routines of the instance. Evaluate business risks before you perform this operation.
   * 
   * @remarks
   * Disables the sandbox and Edge Routine capabilities of Supabase.
   * >Notice: This operation deletes all sandboxes and Edge Routines of the Supabase instance. Evaluate business risks before you perform this operation.
   * 
   * @param request - DisableAgentRuntimeRequest
   * @returns DisableAgentRuntimeResponse
   */
  async disableAgentRuntime(request: $_model.DisableAgentRuntimeRequest): Promise<$_model.DisableAgentRuntimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableAgentRuntimeWithOptions(request, runtime);
  }

  /**
   * Enables the sandbox and Edge Routine capabilities for Supabase. Read the operation description carefully before you call this API operation.
   * 
   * @remarks
   * During the public preview, the sandbox and Edge Routine features are provided free of charge.
   * ### Before you begin
   * Before you use this feature, you must [authorize the service-linked role](https://api.aliyun.com/api/ResourceManager/2020-03-31/CreateServiceLinkedRole?spm=api-workbench.API%20Document.0.0.4ea75094rJgPzK&RegionId=cn-beijing&tab=DEBUG&params=%7B%2522ServiceName%2522:%2522supabase.rdsai.aliyuncs.com%2522%7D&sdkStyle=old). The service-linked role used is [AliyunServiceRoleForRDSAISupabase](https://www.alibabacloud.com/help/en/ram/product-overview/services-that-work-with-service-linked-roles).
   * 
   * @param request - EnableAgentRuntimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableAgentRuntimeResponse
   */
  async enableAgentRuntimeWithOptions(request: $_model.EnableAgentRuntimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableAgentRuntimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.branchName)) {
      query["BranchName"] = request.branchName;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableAgentRuntime",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableAgentRuntimeResponse>(await this.callApi(params, req, runtime), new $_model.EnableAgentRuntimeResponse({}));
  }

  /**
   * Enables the sandbox and Edge Routine capabilities for Supabase. Read the operation description carefully before you call this API operation.
   * 
   * @remarks
   * During the public preview, the sandbox and Edge Routine features are provided free of charge.
   * ### Before you begin
   * Before you use this feature, you must [authorize the service-linked role](https://api.aliyun.com/api/ResourceManager/2020-03-31/CreateServiceLinkedRole?spm=api-workbench.API%20Document.0.0.4ea75094rJgPzK&RegionId=cn-beijing&tab=DEBUG&params=%7B%2522ServiceName%2522:%2522supabase.rdsai.aliyuncs.com%2522%7D&sdkStyle=old). The service-linked role used is [AliyunServiceRoleForRDSAISupabase](https://www.alibabacloud.com/help/en/ram/product-overview/services-that-work-with-service-linked-roles).
   * 
   * @param request - EnableAgentRuntimeRequest
   * @returns EnableAgentRuntimeResponse
   */
  async enableAgentRuntime(request: $_model.EnableAgentRuntimeRequest): Promise<$_model.EnableAgentRuntimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableAgentRuntimeWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of large language models supported by the current RDS Supabase AI gateway.
   * 
   * @remarks
   * ### Applicable engine
   * RDS Supabase.
   * 
   * @param request - GetAvailableLLMModelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAvailableLLMModelsResponse
   */
  async getAvailableLLMModelsWithOptions(request: $_model.GetAvailableLLMModelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAvailableLLMModelsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAvailableLLMModels",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAvailableLLMModelsResponse>(await this.callApi(params, req, runtime), new $_model.GetAvailableLLMModelsResponse({}));
  }

  /**
   * Retrieves the list of large language models supported by the current RDS Supabase AI gateway.
   * 
   * @remarks
   * ### Applicable engine
   * RDS Supabase.
   * 
   * @param request - GetAvailableLLMModelsRequest
   * @returns GetAvailableLLMModelsResponse
   */
  async getAvailableLLMModels(request: $_model.GetAvailableLLMModelsRequest): Promise<$_model.GetAvailableLLMModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAvailableLLMModelsWithOptions(request, runtime);
  }

  /**
   * Retrieves the available models for a session.
   * 
   * @param request - GetChatModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChatModelResponse
   */
  async getChatModelWithOptions(request: $_model.GetChatModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetChatModelResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetChatModel",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetChatModelResponse>(await this.callApi(params, req, runtime), new $_model.GetChatModelResponse({}));
  }

  /**
   * Retrieves the available models for a session.
   * 
   * @param request - GetChatModelRequest
   * @returns GetChatModelResponse
   */
  async getChatModel(request: $_model.GetChatModelRequest): Promise<$_model.GetChatModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getChatModelWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a datasource configuration.
   * 
   * @remarks
   * Retrieves the details of a connection.
   * 
   * @param request - GetContextDatabaseSyncConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetContextDatabaseSyncConnectionResponse
   */
  async getContextDatabaseSyncConnectionWithOptions(request: $_model.GetContextDatabaseSyncConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetContextDatabaseSyncConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionId)) {
      query["ConnectionId"] = request.connectionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetContextDatabaseSyncConnection",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetContextDatabaseSyncConnectionResponse>(await this.callApi(params, req, runtime), new $_model.GetContextDatabaseSyncConnectionResponse({}));
  }

  /**
   * Retrieves the details of a datasource configuration.
   * 
   * @remarks
   * Retrieves the details of a connection.
   * 
   * @param request - GetContextDatabaseSyncConnectionRequest
   * @returns GetContextDatabaseSyncConnectionResponse
   */
  async getContextDatabaseSyncConnection(request: $_model.GetContextDatabaseSyncConnectionRequest): Promise<$_model.GetContextDatabaseSyncConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getContextDatabaseSyncConnectionWithOptions(request, runtime);
  }

  /**
   * Queries the authorization scope of a data source.
   * 
   * @remarks
   * Queries the authorization scope of a connection.
   * 
   * @param request - GetContextDatabaseSyncConnectionAuthorizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetContextDatabaseSyncConnectionAuthorizationResponse
   */
  async getContextDatabaseSyncConnectionAuthorizationWithOptions(request: $_model.GetContextDatabaseSyncConnectionAuthorizationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetContextDatabaseSyncConnectionAuthorizationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionId)) {
      query["ConnectionId"] = request.connectionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetContextDatabaseSyncConnectionAuthorization",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetContextDatabaseSyncConnectionAuthorizationResponse>(await this.callApi(params, req, runtime), new $_model.GetContextDatabaseSyncConnectionAuthorizationResponse({}));
  }

  /**
   * Queries the authorization scope of a data source.
   * 
   * @remarks
   * Queries the authorization scope of a connection.
   * 
   * @param request - GetContextDatabaseSyncConnectionAuthorizationRequest
   * @returns GetContextDatabaseSyncConnectionAuthorizationResponse
   */
  async getContextDatabaseSyncConnectionAuthorization(request: $_model.GetContextDatabaseSyncConnectionAuthorizationRequest): Promise<$_model.GetContextDatabaseSyncConnectionAuthorizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getContextDatabaseSyncConnectionAuthorizationWithOptions(request, runtime);
  }

  /**
   * Queries the status of a discovery task by task ID.
   * 
   * @remarks
   * Queries the status of a discovery task by task ID.
   * 
   * @param request - GetContextDatabaseSyncDiscoveryTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetContextDatabaseSyncDiscoveryTaskResponse
   */
  async getContextDatabaseSyncDiscoveryTaskWithOptions(request: $_model.GetContextDatabaseSyncDiscoveryTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetContextDatabaseSyncDiscoveryTaskResponse> {
    request.validate();
    let query = { };
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
      action: "GetContextDatabaseSyncDiscoveryTask",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetContextDatabaseSyncDiscoveryTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetContextDatabaseSyncDiscoveryTaskResponse({}));
  }

  /**
   * Queries the status of a discovery task by task ID.
   * 
   * @remarks
   * Queries the status of a discovery task by task ID.
   * 
   * @param request - GetContextDatabaseSyncDiscoveryTaskRequest
   * @returns GetContextDatabaseSyncDiscoveryTaskResponse
   */
  async getContextDatabaseSyncDiscoveryTask(request: $_model.GetContextDatabaseSyncDiscoveryTaskRequest): Promise<$_model.GetContextDatabaseSyncDiscoveryTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getContextDatabaseSyncDiscoveryTaskWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of an import job.
   * 
   * @remarks
   * Retrieves the details of a job.
   * 
   * @param request - GetContextDatabaseSyncJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetContextDatabaseSyncJobResponse
   */
  async getContextDatabaseSyncJobWithOptions(request: $_model.GetContextDatabaseSyncJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetContextDatabaseSyncJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetContextDatabaseSyncJob",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetContextDatabaseSyncJobResponse>(await this.callApi(params, req, runtime), new $_model.GetContextDatabaseSyncJobResponse({}));
  }

  /**
   * Retrieves the details of an import job.
   * 
   * @remarks
   * Retrieves the details of a job.
   * 
   * @param request - GetContextDatabaseSyncJobRequest
   * @returns GetContextDatabaseSyncJobResponse
   */
  async getContextDatabaseSyncJob(request: $_model.GetContextDatabaseSyncJobRequest): Promise<$_model.GetContextDatabaseSyncJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getContextDatabaseSyncJobWithOptions(request, runtime);
  }

  /**
   * Queries whether an import task can be started.
   * 
   * @remarks
   * Queries whether a job can be started.
   * 
   * @param request - GetContextDatabaseSyncJobReadinessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetContextDatabaseSyncJobReadinessResponse
   */
  async getContextDatabaseSyncJobReadinessWithOptions(request: $_model.GetContextDatabaseSyncJobReadinessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetContextDatabaseSyncJobReadinessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetContextDatabaseSyncJobReadiness",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetContextDatabaseSyncJobReadinessResponse>(await this.callApi(params, req, runtime), new $_model.GetContextDatabaseSyncJobReadinessResponse({}));
  }

  /**
   * Queries whether an import task can be started.
   * 
   * @remarks
   * Queries whether a job can be started.
   * 
   * @param request - GetContextDatabaseSyncJobReadinessRequest
   * @returns GetContextDatabaseSyncJobReadinessResponse
   */
  async getContextDatabaseSyncJobReadiness(request: $_model.GetContextDatabaseSyncJobReadinessRequest): Promise<$_model.GetContextDatabaseSyncJobReadinessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getContextDatabaseSyncJobReadinessWithOptions(request, runtime);
  }

  /**
   * Queries the scheduling configuration of an import task.
   * 
   * @remarks
   * Queries the scheduling configuration of a job.
   * 
   * @param request - GetContextDatabaseSyncJobScheduleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetContextDatabaseSyncJobScheduleResponse
   */
  async getContextDatabaseSyncJobScheduleWithOptions(request: $_model.GetContextDatabaseSyncJobScheduleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetContextDatabaseSyncJobScheduleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetContextDatabaseSyncJobSchedule",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetContextDatabaseSyncJobScheduleResponse>(await this.callApi(params, req, runtime), new $_model.GetContextDatabaseSyncJobScheduleResponse({}));
  }

  /**
   * Queries the scheduling configuration of an import task.
   * 
   * @remarks
   * Queries the scheduling configuration of a job.
   * 
   * @param request - GetContextDatabaseSyncJobScheduleRequest
   * @returns GetContextDatabaseSyncJobScheduleResponse
   */
  async getContextDatabaseSyncJobSchedule(request: $_model.GetContextDatabaseSyncJobScheduleRequest): Promise<$_model.GetContextDatabaseSyncJobScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getContextDatabaseSyncJobScheduleWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a run.
   * 
   * @remarks
   * Retrieves the details of a run.
   * 
   * @param request - GetContextDatabaseSyncRunRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetContextDatabaseSyncRunResponse
   */
  async getContextDatabaseSyncRunWithOptions(request: $_model.GetContextDatabaseSyncRunRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetContextDatabaseSyncRunResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.runId)) {
      query["RunId"] = request.runId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetContextDatabaseSyncRun",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetContextDatabaseSyncRunResponse>(await this.callApi(params, req, runtime), new $_model.GetContextDatabaseSyncRunResponse({}));
  }

  /**
   * Retrieves the details of a run.
   * 
   * @remarks
   * Retrieves the details of a run.
   * 
   * @param request - GetContextDatabaseSyncRunRequest
   * @returns GetContextDatabaseSyncRunResponse
   */
  async getContextDatabaseSyncRun(request: $_model.GetContextDatabaseSyncRunRequest): Promise<$_model.GetContextDatabaseSyncRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getContextDatabaseSyncRunWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a data selection scope.
   * 
   * @remarks
   * Retrieves the details of a source.
   * 
   * @param request - GetContextDatabaseSyncSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetContextDatabaseSyncSourceResponse
   */
  async getContextDatabaseSyncSourceWithOptions(request: $_model.GetContextDatabaseSyncSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetContextDatabaseSyncSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetContextDatabaseSyncSource",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetContextDatabaseSyncSourceResponse>(await this.callApi(params, req, runtime), new $_model.GetContextDatabaseSyncSourceResponse({}));
  }

  /**
   * Retrieves the details of a data selection scope.
   * 
   * @remarks
   * Retrieves the details of a source.
   * 
   * @param request - GetContextDatabaseSyncSourceRequest
   * @returns GetContextDatabaseSyncSourceResponse
   */
  async getContextDatabaseSyncSource(request: $_model.GetContextDatabaseSyncSourceRequest): Promise<$_model.GetContextDatabaseSyncSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getContextDatabaseSyncSourceWithOptions(request, runtime);
  }

  /**
   * Queries the current node selection in the data selection scope.
   * 
   * @remarks
   * Queries the current node selection of the source.
   * 
   * @param request - GetContextDatabaseSyncSourceSelectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetContextDatabaseSyncSourceSelectionResponse
   */
  async getContextDatabaseSyncSourceSelectionWithOptions(request: $_model.GetContextDatabaseSyncSourceSelectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetContextDatabaseSyncSourceSelectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetContextDatabaseSyncSourceSelection",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetContextDatabaseSyncSourceSelectionResponse>(await this.callApi(params, req, runtime), new $_model.GetContextDatabaseSyncSourceSelectionResponse({}));
  }

  /**
   * Queries the current node selection in the data selection scope.
   * 
   * @remarks
   * Queries the current node selection of the source.
   * 
   * @param request - GetContextDatabaseSyncSourceSelectionRequest
   * @returns GetContextDatabaseSyncSourceSelectionResponse
   */
  async getContextDatabaseSyncSourceSelection(request: $_model.GetContextDatabaseSyncSourceSelectionRequest): Promise<$_model.GetContextDatabaseSyncSourceSelectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getContextDatabaseSyncSourceSelectionWithOptions(request, runtime);
  }

  /**
   * Queries the historical conversations of a user.
   * 
   * @param request - GetConversationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConversationsResponse
   */
  async getConversationsWithOptions(request: $_model.GetConversationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetConversationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lastId)) {
      query["LastId"] = request.lastId;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.pinned)) {
      query["Pinned"] = request.pinned;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConversations",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConversationsResponse>(await this.callApi(params, req, runtime), new $_model.GetConversationsResponse({}));
  }

  /**
   * Queries the historical conversations of a user.
   * 
   * @param request - GetConversationsRequest
   * @returns GetConversationsResponse
   */
  async getConversations(request: $_model.GetConversationsRequest): Promise<$_model.GetConversationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConversationsWithOptions(request, runtime);
  }

  /**
   * Queries a dedicated agent created by the user.
   * 
   * @param request - GetCustomAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomAgentResponse
   */
  async getCustomAgentWithOptions(request: $_model.GetCustomAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCustomAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customAgentId)) {
      query["CustomAgentId"] = request.customAgentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCustomAgent",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCustomAgentResponse>(await this.callApi(params, req, runtime), new $_model.GetCustomAgentResponse({}));
  }

  /**
   * Queries a dedicated agent created by the user.
   * 
   * @param request - GetCustomAgentRequest
   * @returns GetCustomAgentResponse
   */
  async getCustomAgent(request: $_model.GetCustomAgentRequest): Promise<$_model.GetCustomAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCustomAgentWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of an inspection report by report ID.
   * 
   * @param request - GetInspectionReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInspectionReportResponse
   */
  async getInspectionReportWithOptions(request: $_model.GetInspectionReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInspectionReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.reportType)) {
      query["ReportType"] = request.reportType;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInspectionReport",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInspectionReportResponse>(await this.callApi(params, req, runtime), new $_model.GetInspectionReportResponse({}));
  }

  /**
   * Retrieves the details of an inspection report by report ID.
   * 
   * @param request - GetInspectionReportRequest
   * @returns GetInspectionReportResponse
   */
  async getInspectionReport(request: $_model.GetInspectionReportRequest): Promise<$_model.GetInspectionReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInspectionReportWithOptions(request, runtime);
  }

  /**
   * Queries the details of specific conversation messages.
   * 
   * @param request - GetMessagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMessagesResponse
   */
  async getMessagesWithOptions(request: $_model.GetMessagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMessagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.conversationId)) {
      query["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.eventMode)) {
      query["EventMode"] = request.eventMode;
    }

    if (!$dara.isNull(request.firstId)) {
      query["FirstId"] = request.firstId;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMessages",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMessagesResponse>(await this.callApi(params, req, runtime), new $_model.GetMessagesResponse({}));
  }

  /**
   * Queries the details of specific conversation messages.
   * 
   * @param request - GetMessagesRequest
   * @returns GetMessagesResponse
   */
  async getMessages(request: $_model.GetMessagesRequest): Promise<$_model.GetMessagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMessagesWithOptions(request, runtime);
  }

  /**
   * Retrieves the order information for the RDS AI Assistant Ultimate Edition.
   * 
   * @remarks
   * ### Applicable engine
   * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param request - GetModelOperatorOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModelOperatorOrderResponse
   */
  async getModelOperatorOrderWithOptions(request: $_model.GetModelOperatorOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetModelOperatorOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetModelOperatorOrder",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetModelOperatorOrderResponse>(await this.callApi(params, req, runtime), new $_model.GetModelOperatorOrderResponse({}));
  }

  /**
   * Retrieves the order information for the RDS AI Assistant Ultimate Edition.
   * 
   * @remarks
   * ### Applicable engine
   * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param request - GetModelOperatorOrderRequest
   * @returns GetModelOperatorOrderResponse
   */
  async getModelOperatorOrder(request: $_model.GetModelOperatorOrderRequest): Promise<$_model.GetModelOperatorOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getModelOperatorOrderWithOptions(request, runtime);
  }

  /**
   * Queries the list of all instance IDs included in a specified scheduled inspection configuration.
   * 
   * @param request - GetScheduledInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScheduledInstancesResponse
   */
  async getScheduledInstancesWithOptions(request: $_model.GetScheduledInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetScheduledInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.scheduledId)) {
      query["ScheduledId"] = request.scheduledId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetScheduledInstances",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetScheduledInstancesResponse>(await this.callApi(params, req, runtime), new $_model.GetScheduledInstancesResponse({}));
  }

  /**
   * Queries the list of all instance IDs included in a specified scheduled inspection configuration.
   * 
   * @param request - GetScheduledInstancesRequest
   * @returns GetScheduledInstancesResponse
   */
  async getScheduledInstances(request: $_model.GetScheduledInstancesRequest): Promise<$_model.GetScheduledInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getScheduledInstancesWithOptions(request, runtime);
  }

  /**
   * Queries all inspection reports for a specified scheduled task. Supports filtering by time range and pagination.
   * 
   * @param request - GetScheduledReportsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScheduledReportsResponse
   */
  async getScheduledReportsWithOptions(request: $_model.GetScheduledReportsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetScheduledReportsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.scheduledId)) {
      query["ScheduledId"] = request.scheduledId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetScheduledReports",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetScheduledReportsResponse>(await this.callApi(params, req, runtime), new $_model.GetScheduledReportsResponse({}));
  }

  /**
   * Queries all inspection reports for a specified scheduled task. Supports filtering by time range and pagination.
   * 
   * @param request - GetScheduledReportsRequest
   * @returns GetScheduledReportsResponse
   */
  async getScheduledReports(request: $_model.GetScheduledReportsRequest): Promise<$_model.GetScheduledReportsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getScheduledReportsWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a specified skill. You can retrieve your own skills or system preset skills.
   * 
   * @param request - GetSkillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSkillResponse
   */
  async getSkillWithOptions(request: $_model.GetSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSkillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.download)) {
      query["Download"] = request.download;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.skillId)) {
      query["SkillId"] = request.skillId;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSkill",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSkillResponse>(await this.callApi(params, req, runtime), new $_model.GetSkillResponse({}));
  }

  /**
   * Retrieves the details of a specified skill. You can retrieve your own skills or system preset skills.
   * 
   * @param request - GetSkillRequest
   * @returns GetSkillResponse
   */
  async getSkill(request: $_model.GetSkillRequest): Promise<$_model.GetSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillWithOptions(request, runtime);
  }

  /**
   * Queries the list of individual inspection reports for all non-scheduled tasks under a specified user, with pagination support.
   * 
   * @param request - GetStandAloneReportsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStandAloneReportsResponse
   */
  async getStandAloneReportsWithOptions(request: $_model.GetStandAloneReportsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStandAloneReportsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.reportType)) {
      query["ReportType"] = request.reportType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStandAloneReports",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStandAloneReportsResponse>(await this.callApi(params, req, runtime), new $_model.GetStandAloneReportsResponse({}));
  }

  /**
   * Queries the list of individual inspection reports for all non-scheduled tasks under a specified user, with pagination support.
   * 
   * @param request - GetStandAloneReportsRequest
   * @returns GetStandAloneReportsResponse
   */
  async getStandAloneReports(request: $_model.GetStandAloneReportsRequest): Promise<$_model.GetStandAloneReportsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStandAloneReportsWithOptions(request, runtime);
  }

  /**
   * Queries custom API keys.
   * 
   * @remarks
   * ### Applicable engine
   * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param request - ListApiKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApiKeysResponse
   */
  async listApiKeysWithOptions(request: $_model.ListApiKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApiKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApiKeys",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApiKeysResponse>(await this.callApi(params, req, runtime), new $_model.ListApiKeysResponse({}));
  }

  /**
   * Queries custom API keys.
   * 
   * @remarks
   * ### Applicable engine
   * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param request - ListApiKeysRequest
   * @returns ListApiKeysResponse
   */
  async listApiKeys(request: $_model.ListApiKeysRequest): Promise<$_model.ListApiKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApiKeysWithOptions(request, runtime);
  }

  /**
   * Lists the API keys for a context database.
   * 
   * @remarks
   * Lists the API keys under a specified member. The plaintext key values are not returned.
   * 
   * @param request - ListContextDatabaseApiKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListContextDatabaseApiKeysResponse
   */
  async listContextDatabaseApiKeysWithOptions(request: $_model.ListContextDatabaseApiKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListContextDatabaseApiKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.memberId)) {
      query["MemberId"] = request.memberId;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListContextDatabaseApiKeys",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListContextDatabaseApiKeysResponse>(await this.callApi(params, req, runtime), new $_model.ListContextDatabaseApiKeysResponse({}));
  }

  /**
   * Lists the API keys for a context database.
   * 
   * @remarks
   * Lists the API keys under a specified member. The plaintext key values are not returned.
   * 
   * @param request - ListContextDatabaseApiKeysRequest
   * @returns ListContextDatabaseApiKeysResponse
   */
  async listContextDatabaseApiKeys(request: $_model.ListContextDatabaseApiKeysRequest): Promise<$_model.ListContextDatabaseApiKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listContextDatabaseApiKeysWithOptions(request, runtime);
  }

  /**
   * Lists context database members.
   * 
   * @remarks
   * Lists all members in a specified workspace. Each member includes a list of API keys (plaintext values are not returned).
   * 
   * @param request - ListContextDatabaseMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListContextDatabaseMembersResponse
   */
  async listContextDatabaseMembersWithOptions(request: $_model.ListContextDatabaseMembersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListContextDatabaseMembersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListContextDatabaseMembers",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListContextDatabaseMembersResponse>(await this.callApi(params, req, runtime), new $_model.ListContextDatabaseMembersResponse({}));
  }

  /**
   * Lists context database members.
   * 
   * @remarks
   * Lists all members in a specified workspace. Each member includes a list of API keys (plaintext values are not returned).
   * 
   * @param request - ListContextDatabaseMembersRequest
   * @returns ListContextDatabaseMembersResponse
   */
  async listContextDatabaseMembers(request: $_model.ListContextDatabaseMembersRequest): Promise<$_model.ListContextDatabaseMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listContextDatabaseMembersWithOptions(request, runtime);
  }

  /**
   * Lists the data sources in a workspace.
   * 
   * @remarks
   * By default, the list operation returns paginated results. The Page and PageSize parameters are optional.
   * The Data field in the response is returned as an array, and Total indicates the total number of matching entries.
   * 
   * @param request - ListContextDatabaseSyncConnectionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListContextDatabaseSyncConnectionsResponse
   */
  async listContextDatabaseSyncConnectionsWithOptions(request: $_model.ListContextDatabaseSyncConnectionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListContextDatabaseSyncConnectionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListContextDatabaseSyncConnections",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListContextDatabaseSyncConnectionsResponse>(await this.callApi(params, req, runtime), new $_model.ListContextDatabaseSyncConnectionsResponse({}));
  }

  /**
   * Lists the data sources in a workspace.
   * 
   * @remarks
   * By default, the list operation returns paginated results. The Page and PageSize parameters are optional.
   * The Data field in the response is returned as an array, and Total indicates the total number of matching entries.
   * 
   * @param request - ListContextDatabaseSyncConnectionsRequest
   * @returns ListContextDatabaseSyncConnectionsResponse
   */
  async listContextDatabaseSyncConnections(request: $_model.ListContextDatabaseSyncConnectionsRequest): Promise<$_model.ListContextDatabaseSyncConnectionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listContextDatabaseSyncConnectionsWithOptions(request, runtime);
  }

  /**
   * Lists the documents associated with an import task.
   * 
   * @remarks
   * By default, this operation returns paginated results. The Page and PageSize parameters are optional. The Data field in the response is returned as an array, and the Total field indicates the total number of matching entries.
   * 
   * @param request - ListContextDatabaseSyncJobDocumentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListContextDatabaseSyncJobDocumentsResponse
   */
  async listContextDatabaseSyncJobDocumentsWithOptions(request: $_model.ListContextDatabaseSyncJobDocumentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListContextDatabaseSyncJobDocumentsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListContextDatabaseSyncJobDocuments",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListContextDatabaseSyncJobDocumentsResponse>(await this.callApi(params, req, runtime), new $_model.ListContextDatabaseSyncJobDocumentsResponse({}));
  }

  /**
   * Lists the documents associated with an import task.
   * 
   * @remarks
   * By default, this operation returns paginated results. The Page and PageSize parameters are optional. The Data field in the response is returned as an array, and the Total field indicates the total number of matching entries.
   * 
   * @param request - ListContextDatabaseSyncJobDocumentsRequest
   * @returns ListContextDatabaseSyncJobDocumentsResponse
   */
  async listContextDatabaseSyncJobDocuments(request: $_model.ListContextDatabaseSyncJobDocumentsRequest): Promise<$_model.ListContextDatabaseSyncJobDocumentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listContextDatabaseSyncJobDocumentsWithOptions(request, runtime);
  }

  /**
   * Lists the exclusions of an import task.
   * 
   * @remarks
   * This operation uses pagination by default. Page and PageSize are optional parameters.
   * The Data field in the response returns an array. Total indicates the total number of records that match the specified conditions.
   * 
   * @param request - ListContextDatabaseSyncJobExclusionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListContextDatabaseSyncJobExclusionsResponse
   */
  async listContextDatabaseSyncJobExclusionsWithOptions(request: $_model.ListContextDatabaseSyncJobExclusionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListContextDatabaseSyncJobExclusionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListContextDatabaseSyncJobExclusions",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListContextDatabaseSyncJobExclusionsResponse>(await this.callApi(params, req, runtime), new $_model.ListContextDatabaseSyncJobExclusionsResponse({}));
  }

  /**
   * Lists the exclusions of an import task.
   * 
   * @remarks
   * This operation uses pagination by default. Page and PageSize are optional parameters.
   * The Data field in the response returns an array. Total indicates the total number of records that match the specified conditions.
   * 
   * @param request - ListContextDatabaseSyncJobExclusionsRequest
   * @returns ListContextDatabaseSyncJobExclusionsResponse
   */
  async listContextDatabaseSyncJobExclusions(request: $_model.ListContextDatabaseSyncJobExclusionsRequest): Promise<$_model.ListContextDatabaseSyncJobExclusionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listContextDatabaseSyncJobExclusionsWithOptions(request, runtime);
  }

  /**
   * Lists import jobs.
   * 
   * @remarks
   * The list API returns paginated results by default. Page and PageSize are optional parameters.
   * The Data list field in the response is returned as an array, and Total indicates the total number of matching entries.
   * 
   * @param request - ListContextDatabaseSyncJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListContextDatabaseSyncJobsResponse
   */
  async listContextDatabaseSyncJobsWithOptions(request: $_model.ListContextDatabaseSyncJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListContextDatabaseSyncJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.knowledgeBaseId)) {
      query["KnowledgeBaseId"] = request.knowledgeBaseId;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListContextDatabaseSyncJobs",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListContextDatabaseSyncJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListContextDatabaseSyncJobsResponse({}));
  }

  /**
   * Lists import jobs.
   * 
   * @remarks
   * The list API returns paginated results by default. Page and PageSize are optional parameters.
   * The Data list field in the response is returned as an array, and Total indicates the total number of matching entries.
   * 
   * @param request - ListContextDatabaseSyncJobsRequest
   * @returns ListContextDatabaseSyncJobsResponse
   */
  async listContextDatabaseSyncJobs(request: $_model.ListContextDatabaseSyncJobsRequest): Promise<$_model.ListContextDatabaseSyncJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listContextDatabaseSyncJobsWithOptions(request, runtime);
  }

  /**
   * Lists available synchronization plugins.
   * 
   * @remarks
   * This operation returns a fixed-length array of available plugins in the workspace and does not support pagination.
   * The Data list field in the response is returned as an array, and Total indicates the total number of entries that meet the conditions.
   * 
   * @param request - ListContextDatabaseSyncPluginsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListContextDatabaseSyncPluginsResponse
   */
  async listContextDatabaseSyncPluginsWithOptions(request: $_model.ListContextDatabaseSyncPluginsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListContextDatabaseSyncPluginsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListContextDatabaseSyncPlugins",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListContextDatabaseSyncPluginsResponse>(await this.callApi(params, req, runtime), new $_model.ListContextDatabaseSyncPluginsResponse({}));
  }

  /**
   * Lists available synchronization plugins.
   * 
   * @remarks
   * This operation returns a fixed-length array of available plugins in the workspace and does not support pagination.
   * The Data list field in the response is returned as an array, and Total indicates the total number of entries that meet the conditions.
   * 
   * @param request - ListContextDatabaseSyncPluginsRequest
   * @returns ListContextDatabaseSyncPluginsResponse
   */
  async listContextDatabaseSyncPlugins(request: $_model.ListContextDatabaseSyncPluginsRequest): Promise<$_model.ListContextDatabaseSyncPluginsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listContextDatabaseSyncPluginsWithOptions(request, runtime);
  }

  /**
   * Lists the run records.
   * 
   * @remarks
   * The list API returns paginated results by default. The Page and PageSize parameters are optional. Run records are a list of RunItems that show the processing results of each document in each import run.
   * The Data list field in the response is returned as an array, and Total indicates the total number of entries that meet the conditions.
   * 
   * @param request - ListContextDatabaseSyncRunItemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListContextDatabaseSyncRunItemsResponse
   */
  async listContextDatabaseSyncRunItemsWithOptions(request: $_model.ListContextDatabaseSyncRunItemsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListContextDatabaseSyncRunItemsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.runId)) {
      query["RunId"] = request.runId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListContextDatabaseSyncRunItems",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListContextDatabaseSyncRunItemsResponse>(await this.callApi(params, req, runtime), new $_model.ListContextDatabaseSyncRunItemsResponse({}));
  }

  /**
   * Lists the run records.
   * 
   * @remarks
   * The list API returns paginated results by default. The Page and PageSize parameters are optional. Run records are a list of RunItems that show the processing results of each document in each import run.
   * The Data list field in the response is returned as an array, and Total indicates the total number of entries that meet the conditions.
   * 
   * @param request - ListContextDatabaseSyncRunItemsRequest
   * @returns ListContextDatabaseSyncRunItemsResponse
   */
  async listContextDatabaseSyncRunItems(request: $_model.ListContextDatabaseSyncRunItemsRequest): Promise<$_model.ListContextDatabaseSyncRunItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listContextDatabaseSyncRunItemsWithOptions(request, runtime);
  }

  /**
   * Lists the run logs.
   * 
   * @remarks
   * The list API returns paginated results by default. Page and PageSize are optional parameters.
   * The Data list field in the response is returned as an array, and Total indicates the total number of matching entries.
   * 
   * @param request - ListContextDatabaseSyncRunLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListContextDatabaseSyncRunLogsResponse
   */
  async listContextDatabaseSyncRunLogsWithOptions(request: $_model.ListContextDatabaseSyncRunLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListContextDatabaseSyncRunLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.runId)) {
      query["RunId"] = request.runId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListContextDatabaseSyncRunLogs",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListContextDatabaseSyncRunLogsResponse>(await this.callApi(params, req, runtime), new $_model.ListContextDatabaseSyncRunLogsResponse({}));
  }

  /**
   * Lists the run logs.
   * 
   * @remarks
   * The list API returns paginated results by default. Page and PageSize are optional parameters.
   * The Data list field in the response is returned as an array, and Total indicates the total number of matching entries.
   * 
   * @param request - ListContextDatabaseSyncRunLogsRequest
   * @returns ListContextDatabaseSyncRunLogsResponse
   */
  async listContextDatabaseSyncRunLogs(request: $_model.ListContextDatabaseSyncRunLogsRequest): Promise<$_model.ListContextDatabaseSyncRunLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listContextDatabaseSyncRunLogsWithOptions(request, runtime);
  }

  /**
   * Lists the runs.
   * 
   * @remarks
   * By default, this operation returns paginated results. The Page and PageSize parameters are optional.
   * The Data field in the response is returned as an array, and the Total field indicates the total number of items that meet the query conditions.
   * 
   * @param request - ListContextDatabaseSyncRunsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListContextDatabaseSyncRunsResponse
   */
  async listContextDatabaseSyncRunsWithOptions(request: $_model.ListContextDatabaseSyncRunsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListContextDatabaseSyncRunsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListContextDatabaseSyncRuns",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListContextDatabaseSyncRunsResponse>(await this.callApi(params, req, runtime), new $_model.ListContextDatabaseSyncRunsResponse({}));
  }

  /**
   * Lists the runs.
   * 
   * @remarks
   * By default, this operation returns paginated results. The Page and PageSize parameters are optional.
   * The Data field in the response is returned as an array, and the Total field indicates the total number of items that meet the query conditions.
   * 
   * @param request - ListContextDatabaseSyncRunsRequest
   * @returns ListContextDatabaseSyncRunsResponse
   */
  async listContextDatabaseSyncRuns(request: $_model.ListContextDatabaseSyncRunsRequest): Promise<$_model.ListContextDatabaseSyncRunsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listContextDatabaseSyncRunsWithOptions(request, runtime);
  }

  /**
   * Lists the discovered tree nodes for the data selection scope.
   * 
   * @remarks
   * List operations return paginated results by default. Page and PageSize are optional parameters. The Data list field in the response is returned as an array, and Total indicates the total number of entries that meet the conditions.
   * 
   * @param request - ListContextDatabaseSyncSourceTreeNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListContextDatabaseSyncSourceTreeNodesResponse
   */
  async listContextDatabaseSyncSourceTreeNodesWithOptions(request: $_model.ListContextDatabaseSyncSourceTreeNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListContextDatabaseSyncSourceTreeNodesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListContextDatabaseSyncSourceTreeNodes",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListContextDatabaseSyncSourceTreeNodesResponse>(await this.callApi(params, req, runtime), new $_model.ListContextDatabaseSyncSourceTreeNodesResponse({}));
  }

  /**
   * Lists the discovered tree nodes for the data selection scope.
   * 
   * @remarks
   * List operations return paginated results by default. Page and PageSize are optional parameters. The Data list field in the response is returned as an array, and Total indicates the total number of entries that meet the conditions.
   * 
   * @param request - ListContextDatabaseSyncSourceTreeNodesRequest
   * @returns ListContextDatabaseSyncSourceTreeNodesResponse
   */
  async listContextDatabaseSyncSourceTreeNodes(request: $_model.ListContextDatabaseSyncSourceTreeNodesRequest): Promise<$_model.ListContextDatabaseSyncSourceTreeNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listContextDatabaseSyncSourceTreeNodesWithOptions(request, runtime);
  }

  /**
   * Lists the data selection scopes.
   * 
   * @remarks
   * By default, the list operation returns paginated results. Page and PageSize are optional parameters. The Data list field in the response is returned as an array, and Total indicates the total number of entries that meet the conditions.
   * 
   * @param request - ListContextDatabaseSyncSourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListContextDatabaseSyncSourcesResponse
   */
  async listContextDatabaseSyncSourcesWithOptions(request: $_model.ListContextDatabaseSyncSourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListContextDatabaseSyncSourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListContextDatabaseSyncSources",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListContextDatabaseSyncSourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListContextDatabaseSyncSourcesResponse({}));
  }

  /**
   * Lists the data selection scopes.
   * 
   * @remarks
   * By default, the list operation returns paginated results. Page and PageSize are optional parameters. The Data list field in the response is returned as an array, and Total indicates the total number of entries that meet the conditions.
   * 
   * @param request - ListContextDatabaseSyncSourcesRequest
   * @returns ListContextDatabaseSyncSourcesResponse
   */
  async listContextDatabaseSyncSources(request: $_model.ListContextDatabaseSyncSourcesRequest): Promise<$_model.ListContextDatabaseSyncSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listContextDatabaseSyncSourcesWithOptions(request, runtime);
  }

  /**
   * Lists ContextDB workspaces.
   * 
   * @remarks
   * Lists ContextDB workspaces.
   * 
   * @param request - ListContextDatabaseWorkspacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListContextDatabaseWorkspacesResponse
   */
  async listContextDatabaseWorkspacesWithOptions(request: $_model.ListContextDatabaseWorkspacesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListContextDatabaseWorkspacesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
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
      action: "ListContextDatabaseWorkspaces",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListContextDatabaseWorkspacesResponse>(await this.callApi(params, req, runtime), new $_model.ListContextDatabaseWorkspacesResponse({}));
  }

  /**
   * Lists ContextDB workspaces.
   * 
   * @remarks
   * Lists ContextDB workspaces.
   * 
   * @param request - ListContextDatabaseWorkspacesRequest
   * @returns ListContextDatabaseWorkspacesResponse
   */
  async listContextDatabaseWorkspaces(request: $_model.ListContextDatabaseWorkspacesRequest): Promise<$_model.ListContextDatabaseWorkspacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listContextDatabaseWorkspacesWithOptions(request, runtime);
  }

  /**
   * Queries the list of dedicated agents created by the user.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomAgent",
      version: "2025-05-07",
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
   * Queries the list of dedicated agents created by the user.
   * 
   * @param request - ListCustomAgentRequest
   * @returns ListCustomAgentResponse
   */
  async listCustomAgent(request: $_model.ListCustomAgentRequest): Promise<$_model.ListCustomAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomAgentWithOptions(request, runtime);
  }

  /**
   * Queries the list of Agent tools for a user.
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomAgentToolsResponse
   */
  async listCustomAgentToolsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomAgentToolsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomAgentTools",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCustomAgentToolsResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomAgentToolsResponse({}));
  }

  /**
   * Queries the list of Agent tools for a user.
   * @returns ListCustomAgentToolsResponse
   */
  async listCustomAgentTools(): Promise<$_model.ListCustomAgentToolsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomAgentToolsWithOptions(runtime);
  }

  /**
   * Retrieves the AI gateway token usage for an RDS Supabase instance.
   * 
   * @remarks
   * ### Applicable engine
   * RDS Supabase.
   * 
   * @param request - ListLLMTokenUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLLMTokenUsageResponse
   */
  async listLLMTokenUsageWithOptions(request: $_model.ListLLMTokenUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLLMTokenUsageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLLMTokenUsage",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLLMTokenUsageResponse>(await this.callApi(params, req, runtime), new $_model.ListLLMTokenUsageResponse({}));
  }

  /**
   * Retrieves the AI gateway token usage for an RDS Supabase instance.
   * 
   * @remarks
   * ### Applicable engine
   * RDS Supabase.
   * 
   * @param request - ListLLMTokenUsageRequest
   * @returns ListLLMTokenUsageResponse
   */
  async listLLMTokenUsage(request: $_model.ListLLMTokenUsageRequest): Promise<$_model.ListLLMTokenUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLLMTokenUsageWithOptions(request, runtime);
  }

  /**
   * Queries the list of basic information about all inspection configurations under a specified user UID.
   * 
   * @param request - ListScheduledTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScheduledTasksResponse
   */
  async listScheduledTasksWithOptions(request: $_model.ListScheduledTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListScheduledTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.scheduledId)) {
      query["ScheduledId"] = request.scheduledId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScheduledTasks",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListScheduledTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListScheduledTasksResponse({}));
  }

  /**
   * Queries the list of basic information about all inspection configurations under a specified user UID.
   * 
   * @param request - ListScheduledTasksRequest
   * @returns ListScheduledTasksResponse
   */
  async listScheduledTasks(request: $_model.ListScheduledTasksRequest): Promise<$_model.ListScheduledTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listScheduledTasksWithOptions(request, runtime);
  }

  /**
   * Retrieves the custom skills of the current user and all system-preset skills.
   * 
   * @param request - ListSkillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSkillResponse
   */
  async listSkillWithOptions(request: $_model.ListSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSkillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSkill",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSkillResponse>(await this.callApi(params, req, runtime), new $_model.ListSkillResponse({}));
  }

  /**
   * Retrieves the custom skills of the current user and all system-preset skills.
   * 
   * @param request - ListSkillRequest
   * @returns ListSkillResponse
   */
  async listSkill(request: $_model.ListSkillRequest): Promise<$_model.ListSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSkillWithOptions(request, runtime);
  }

  /**
   * Modifies the modules of an ApsaraDB RDS AI application instance.
   * 
   * @remarks
   * ### Applicable engine
   * RDS PostgreSQL
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param tmpReq - ModifyAppInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppInstanceResponse
   */
  async modifyAppInstanceWithOptions(tmpReq: $_model.ModifyAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAppInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyAppInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.components)) {
      request.componentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.components, "Components", "json");
    }

    let query = { };
    if (!$dara.isNull(request.branchName)) {
      query["BranchName"] = request.branchName;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.componentsShrink)) {
      query["Components"] = request.componentsShrink;
    }

    if (!$dara.isNull(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!$dara.isNull(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAppInstance",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAppInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAppInstanceResponse({}));
  }

  /**
   * Modifies the modules of an ApsaraDB RDS AI application instance.
   * 
   * @remarks
   * ### Applicable engine
   * RDS PostgreSQL
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - ModifyAppInstanceRequest
   * @returns ModifyAppInstanceResponse
   */
  async modifyAppInstance(request: $_model.ModifyAppInstanceRequest): Promise<$_model.ModifyAppInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppInstanceWithOptions(request, runtime);
  }

  /**
   * Modifies the authentication configuration of an ApsaraDB RDS AI application instance.
   * 
   * @remarks
   * ### Supported engines
   * ApsaraDB RDS for PostgreSQL
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param tmpReq - ModifyInstanceAuthConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceAuthConfigResponse
   */
  async modifyInstanceAuthConfigWithOptions(tmpReq: $_model.ModifyInstanceAuthConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceAuthConfigResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyInstanceAuthConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.configList)) {
      request.configListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configList, "ConfigList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.branchName)) {
      query["BranchName"] = request.branchName;
    }

    if (!$dara.isNull(request.configListShrink)) {
      query["ConfigList"] = request.configListShrink;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceAuthConfig",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceAuthConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceAuthConfigResponse({}));
  }

  /**
   * Modifies the authentication configuration of an ApsaraDB RDS AI application instance.
   * 
   * @remarks
   * ### Supported engines
   * ApsaraDB RDS for PostgreSQL
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - ModifyInstanceAuthConfigRequest
   * @returns ModifyInstanceAuthConfigResponse
   */
  async modifyInstanceAuthConfig(request: $_model.ModifyInstanceAuthConfigRequest): Promise<$_model.ModifyInstanceAuthConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceAuthConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the general configurations of an instance, such as Elastic IP (EIP) and NAT configurations.
   * 
   * @param request - ModifyInstanceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceConfigResponse
   */
  async modifyInstanceConfigWithOptions(request: $_model.ModifyInstanceConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.branchName)) {
      query["BranchName"] = request.branchName;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configName)) {
      query["ConfigName"] = request.configName;
    }

    if (!$dara.isNull(request.configValue)) {
      query["ConfigValue"] = request.configValue;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceConfig",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceConfigResponse({}));
  }

  /**
   * Modifies the general configurations of an instance, such as Elastic IP (EIP) and NAT configurations.
   * 
   * @param request - ModifyInstanceConfigRequest
   * @returns ModifyInstanceConfigResponse
   */
  async modifyInstanceConfig(request: $_model.ModifyInstanceConfigRequest): Promise<$_model.ModifyInstanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the IP address whitelist of an RDS AI application instance.
   * 
   * @remarks
   * ### Supported engines
   * RDS PostgreSQL
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - ModifyInstanceIpWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceIpWhitelistResponse
   */
  async modifyInstanceIpWhitelistWithOptions(request: $_model.ModifyInstanceIpWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceIpWhitelistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.branchName)) {
      query["BranchName"] = request.branchName;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.ipWhitelist)) {
      query["IpWhitelist"] = request.ipWhitelist;
    }

    if (!$dara.isNull(request.modifyMode)) {
      query["ModifyMode"] = request.modifyMode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceIpWhitelist",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceIpWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceIpWhitelistResponse({}));
  }

  /**
   * Modifies the IP address whitelist of an RDS AI application instance.
   * 
   * @remarks
   * ### Supported engines
   * RDS PostgreSQL
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - ModifyInstanceIpWhitelistRequest
   * @returns ModifyInstanceIpWhitelistResponse
   */
  async modifyInstanceIpWhitelist(request: $_model.ModifyInstanceIpWhitelistRequest): Promise<$_model.ModifyInstanceIpWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceIpWhitelistWithOptions(request, runtime);
  }

  /**
   * Modifies the RAG Agent configuration of an ApsaraDB RDS AI application instance.
   * 
   * @param tmpReq - ModifyInstanceRAGConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceRAGConfigResponse
   */
  async modifyInstanceRAGConfigWithOptions(tmpReq: $_model.ModifyInstanceRAGConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceRAGConfigResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyInstanceRAGConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.configList)) {
      request.configListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configList, "ConfigList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.branchName)) {
      query["BranchName"] = request.branchName;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configListShrink)) {
      query["ConfigList"] = request.configListShrink;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceRAGConfig",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceRAGConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceRAGConfigResponse({}));
  }

  /**
   * Modifies the RAG Agent configuration of an ApsaraDB RDS AI application instance.
   * 
   * @param request - ModifyInstanceRAGConfigRequest
   * @returns ModifyInstanceRAGConfigResponse
   */
  async modifyInstanceRAGConfig(request: $_model.ModifyInstanceRAGConfigRequest): Promise<$_model.ModifyInstanceRAGConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceRAGConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the SSL configuration of an RDS AI application instance.
   * 
   * @remarks
   * ### Supported engines
   * RDS PostgreSQL
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - ModifyInstanceSSLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceSSLResponse
   */
  async modifyInstanceSSLWithOptions(request: $_model.ModifyInstanceSSLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceSSLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.branchName)) {
      query["BranchName"] = request.branchName;
    }

    if (!$dara.isNull(request.CAType)) {
      query["CAType"] = request.CAType;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.SSLEnabled)) {
      query["SSLEnabled"] = request.SSLEnabled;
    }

    if (!$dara.isNull(request.serverCert)) {
      query["ServerCert"] = request.serverCert;
    }

    if (!$dara.isNull(request.serverKey)) {
      query["ServerKey"] = request.serverKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceSSL",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceSSLResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceSSLResponse({}));
  }

  /**
   * Modifies the SSL configuration of an RDS AI application instance.
   * 
   * @remarks
   * ### Supported engines
   * RDS PostgreSQL
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - ModifyInstanceSSLRequest
   * @returns ModifyInstanceSSLResponse
   */
  async modifyInstanceSSL(request: $_model.ModifyInstanceSSLRequest): Promise<$_model.ModifyInstanceSSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceSSLWithOptions(request, runtime);
  }

  /**
   * Modifies the storage configuration of an RDS AI application instance.
   * 
   * @remarks
   * ### Supported engines
   * RDS PostgreSQL
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * > Currently, only Object Storage Service (OSS) is supported.
   * 
   * @param tmpReq - ModifyInstanceStorageConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceStorageConfigResponse
   */
  async modifyInstanceStorageConfigWithOptions(tmpReq: $_model.ModifyInstanceStorageConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceStorageConfigResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyInstanceStorageConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.configList)) {
      request.configListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configList, "ConfigList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.branchName)) {
      query["BranchName"] = request.branchName;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configListShrink)) {
      query["ConfigList"] = request.configListShrink;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceStorageConfig",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceStorageConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceStorageConfigResponse({}));
  }

  /**
   * Modifies the storage configuration of an RDS AI application instance.
   * 
   * @remarks
   * ### Supported engines
   * RDS PostgreSQL
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * > Currently, only Object Storage Service (OSS) is supported.
   * 
   * @param request - ModifyInstanceStorageConfigRequest
   * @returns ModifyInstanceStorageConfigResponse
   */
  async modifyInstanceStorageConfig(request: $_model.ModifyInstanceStorageConfigRequest): Promise<$_model.ModifyInstanceStorageConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceStorageConfigWithOptions(request, runtime);
  }

  /**
   * Batch modifies the SSL configurations of RDS AI application instances.
   * 
   * @remarks
   * ### Applicable engine
   * RDS PostgreSQL
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param tmpReq - ModifyInstancesSSLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstancesSSLResponse
   */
  async modifyInstancesSSLWithOptions(tmpReq: $_model.ModifyInstancesSSLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstancesSSLResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyInstancesSSLShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceNames)) {
      request.instanceNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceNames, "InstanceNames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.CAType)) {
      query["CAType"] = request.CAType;
    }

    if (!$dara.isNull(request.instanceNamesShrink)) {
      query["InstanceNames"] = request.instanceNamesShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.SSLEnabled)) {
      query["SSLEnabled"] = request.SSLEnabled;
    }

    if (!$dara.isNull(request.serverCert)) {
      query["ServerCert"] = request.serverCert;
    }

    if (!$dara.isNull(request.serverKey)) {
      query["ServerKey"] = request.serverKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstancesSSL",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstancesSSLResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstancesSSLResponse({}));
  }

  /**
   * Batch modifies the SSL configurations of RDS AI application instances.
   * 
   * @remarks
   * ### Applicable engine
   * RDS PostgreSQL
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - ModifyInstancesSSLRequest
   * @returns ModifyInstancesSSLResponse
   */
  async modifyInstancesSSL(request: $_model.ModifyInstancesSSLRequest): Promise<$_model.ModifyInstancesSSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstancesSSLWithOptions(request, runtime);
  }

  /**
   * Modifies message feedback.
   * 
   * @param request - ModifyMessagesFeedbacksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMessagesFeedbacksResponse
   */
  async modifyMessagesFeedbacksWithOptions(request: $_model.ModifyMessagesFeedbacksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMessagesFeedbacksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    if (!$dara.isNull(request.rating)) {
      query["Rating"] = request.rating;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyMessagesFeedbacks",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyMessagesFeedbacksResponse>(await this.callApi(params, req, runtime), new $_model.ModifyMessagesFeedbacksResponse({}));
  }

  /**
   * Modifies message feedback.
   * 
   * @param request - ModifyMessagesFeedbacksRequest
   * @returns ModifyMessagesFeedbacksResponse
   */
  async modifyMessagesFeedbacks(request: $_model.ModifyMessagesFeedbacksRequest): Promise<$_model.ModifyMessagesFeedbacksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyMessagesFeedbacksWithOptions(request, runtime);
  }

  /**
   * Modifies a sandbox template.
   * 
   * @remarks
   * ### Applicable engine
   * RDS Supabase
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param tmpReq - ModifySandboxTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySandboxTemplateResponse
   */
  async modifySandboxTemplateWithOptions(tmpReq: $_model.ModifySandboxTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySandboxTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.ModifySandboxTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.defaultCpu)) {
      query["DefaultCpu"] = request.defaultCpu;
    }

    if (!$dara.isNull(request.defaultMemory)) {
      query["DefaultMemory"] = request.defaultMemory;
    }

    if (!$dara.isNull(request.image)) {
      query["Image"] = request.image;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySandboxTemplate",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySandboxTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ModifySandboxTemplateResponse({}));
  }

  /**
   * Modifies a sandbox template.
   * 
   * @remarks
   * ### Applicable engine
   * RDS Supabase
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - ModifySandboxTemplateRequest
   * @returns ModifySandboxTemplateResponse
   */
  async modifySandboxTemplate(request: $_model.ModifySandboxTemplateRequest): Promise<$_model.ModifySandboxTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySandboxTemplateWithOptions(request, runtime);
  }

  /**
   * Modifies an existing inspection configuration.
   * 
   * @param request - ModifyScheduledTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyScheduledTaskResponse
   */
  async modifyScheduledTaskWithOptions(request: $_model.ModifyScheduledTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyScheduledTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.frequency)) {
      query["Frequency"] = request.frequency;
    }

    if (!$dara.isNull(request.inspectionItems)) {
      query["InspectionItems"] = request.inspectionItems;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.reportLanguage)) {
      query["ReportLanguage"] = request.reportLanguage;
    }

    if (!$dara.isNull(request.scheduledId)) {
      query["ScheduledId"] = request.scheduledId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.timeRange)) {
      query["TimeRange"] = request.timeRange;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyScheduledTask",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyScheduledTaskResponse>(await this.callApi(params, req, runtime), new $_model.ModifyScheduledTaskResponse({}));
  }

  /**
   * Modifies an existing inspection configuration.
   * 
   * @param request - ModifyScheduledTaskRequest
   * @returns ModifyScheduledTaskResponse
   */
  async modifyScheduledTask(request: $_model.ModifyScheduledTaskRequest): Promise<$_model.ModifyScheduledTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyScheduledTaskWithOptions(request, runtime);
  }

  /**
   * Modifies the IP whitelist of an RDS AI Assistant Ultimate Edition instance.
   * 
   * @remarks
   * ### Applicable engine
   * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param request - ModifyWhitelistIpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyWhitelistIpsResponse
   */
  async modifyWhitelistIpsWithOptions(request: $_model.ModifyWhitelistIpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyWhitelistIpsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ipWhitelist)) {
      query["IpWhitelist"] = request.ipWhitelist;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyWhitelistIps",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyWhitelistIpsResponse>(await this.callApi(params, req, runtime), new $_model.ModifyWhitelistIpsResponse({}));
  }

  /**
   * Modifies the IP whitelist of an RDS AI Assistant Ultimate Edition instance.
   * 
   * @remarks
   * ### Applicable engine
   * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param request - ModifyWhitelistIpsRequest
   * @returns ModifyWhitelistIpsResponse
   */
  async modifyWhitelistIps(request: $_model.ModifyWhitelistIpsRequest): Promise<$_model.ModifyWhitelistIpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWhitelistIpsWithOptions(request, runtime);
  }

  /**
   * Deletes an exclusion item for an import job.
   * 
   * @remarks
   * Deletes an exclusion item for a job.
   * 
   * @param request - RemoveContextDatabaseSyncJobExclusionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveContextDatabaseSyncJobExclusionResponse
   */
  async removeContextDatabaseSyncJobExclusionWithOptions(request: $_model.RemoveContextDatabaseSyncJobExclusionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveContextDatabaseSyncJobExclusionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.documentId)) {
      query["DocumentId"] = request.documentId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveContextDatabaseSyncJobExclusion",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveContextDatabaseSyncJobExclusionResponse>(await this.callApi(params, req, runtime), new $_model.RemoveContextDatabaseSyncJobExclusionResponse({}));
  }

  /**
   * Deletes an exclusion item for an import job.
   * 
   * @remarks
   * Deletes an exclusion item for a job.
   * 
   * @param request - RemoveContextDatabaseSyncJobExclusionRequest
   * @returns RemoveContextDatabaseSyncJobExclusionResponse
   */
  async removeContextDatabaseSyncJobExclusion(request: $_model.RemoveContextDatabaseSyncJobExclusionRequest): Promise<$_model.RemoveContextDatabaseSyncJobExclusionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeContextDatabaseSyncJobExclusionWithOptions(request, runtime);
  }

  /**
   * Renames a custom API key.
   * 
   * @remarks
   * ### Applicable engine
   * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param request - RenameApiKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenameApiKeyResponse
   */
  async renameApiKeyWithOptions(request: $_model.RenameApiKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenameApiKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiKey)) {
      query["ApiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.keyName)) {
      query["KeyName"] = request.keyName;
    }

    if (!$dara.isNull(request.roleArn)) {
      query["RoleArn"] = request.roleArn;
    }

    if (!$dara.isNull(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenameApiKey",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenameApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.RenameApiKeyResponse({}));
  }

  /**
   * Renames a custom API key.
   * 
   * @remarks
   * ### Applicable engine
   * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param request - RenameApiKeyRequest
   * @returns RenameApiKeyResponse
   */
  async renameApiKey(request: $_model.RenameApiKeyRequest): Promise<$_model.RenameApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renameApiKeyWithOptions(request, runtime);
  }

  /**
   * Resets the API key.
   * 
   * @remarks
   * ### Applicable engine
   * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param request - ResetApiKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetApiKeyResponse
   */
  async resetApiKeyWithOptions(request: $_model.ResetApiKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetApiKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiKey)) {
      query["ApiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetApiKey",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.ResetApiKeyResponse({}));
  }

  /**
   * Resets the API key.
   * 
   * @remarks
   * ### Applicable engine
   * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param request - ResetApiKeyRequest
   * @returns ResetApiKeyResponse
   */
  async resetApiKey(request: $_model.ResetApiKeyRequest): Promise<$_model.ResetApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetApiKeyWithOptions(request, runtime);
  }

  /**
   * Resets the keys of an RDS AI instance, including AnonKey, ServiceKey, and JwtSecret. After the reset, the old keys and secret become invalid immediately. Ensure that your applications are updated accordingly.
   * 
   * @remarks
   * ### Applicable engine
   * RDS PostgreSQL
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - ResetInstanceKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetInstanceKeysResponse
   */
  async resetInstanceKeysWithOptions(request: $_model.ResetInstanceKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetInstanceKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetInstanceKeys",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetInstanceKeysResponse>(await this.callApi(params, req, runtime), new $_model.ResetInstanceKeysResponse({}));
  }

  /**
   * Resets the keys of an RDS AI instance, including AnonKey, ServiceKey, and JwtSecret. After the reset, the old keys and secret become invalid immediately. Ensure that your applications are updated accordingly.
   * 
   * @remarks
   * ### Applicable engine
   * RDS PostgreSQL
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - ResetInstanceKeysRequest
   * @returns ResetInstanceKeysResponse
   */
  async resetInstanceKeys(request: $_model.ResetInstanceKeysRequest): Promise<$_model.ResetInstanceKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetInstanceKeysWithOptions(request, runtime);
  }

  /**
   * Resets the logon password and database access password of an RDS AI application instance.
   * 
   * @remarks
   * ### Supported engines
   * RDS PostgreSQL
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * > Currently, only the password of the RDS Supabase Dashboard user can be changed.
   * 
   * @param request - ResetInstancePasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetInstancePasswordResponse
   */
  async resetInstancePasswordWithOptions(request: $_model.ResetInstancePasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetInstancePasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.branchName)) {
      query["BranchName"] = request.branchName;
    }

    if (!$dara.isNull(request.dashboardPassword)) {
      query["DashboardPassword"] = request.dashboardPassword;
    }

    if (!$dara.isNull(request.databasePassword)) {
      query["DatabasePassword"] = request.databasePassword;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetInstancePassword",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetInstancePasswordResponse>(await this.callApi(params, req, runtime), new $_model.ResetInstancePasswordResponse({}));
  }

  /**
   * Resets the logon password and database access password of an RDS AI application instance.
   * 
   * @remarks
   * ### Supported engines
   * RDS PostgreSQL
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * > Currently, only the password of the RDS Supabase Dashboard user can be changed.
   * 
   * @param request - ResetInstancePasswordRequest
   * @returns ResetInstancePasswordResponse
   */
  async resetInstancePassword(request: $_model.ResetInstancePasswordRequest): Promise<$_model.ResetInstancePasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetInstancePasswordWithOptions(request, runtime);
  }

  /**
   * Restarts an RDS AI application instance that is in the Running state.
   * 
   * @remarks
   * ### Supported engine
   * RDS PostgreSQL
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - RestartInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartInstanceResponse
   */
  async restartInstanceWithOptions(request: $_model.RestartInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.branchName)) {
      query["BranchName"] = request.branchName;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartInstance",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RestartInstanceResponse({}));
  }

  /**
   * Restarts an RDS AI application instance that is in the Running state.
   * 
   * @remarks
   * ### Supported engine
   * RDS PostgreSQL
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - RestartInstanceRequest
   * @returns RestartInstanceResponse
   */
  async restartInstance(request: $_model.RestartInstanceRequest): Promise<$_model.RestartInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartInstanceWithOptions(request, runtime);
  }

  /**
   * Retries failed items based on a snapshot.
   * 
   * @remarks
   * For write operations, you can pass a ClientToken to ensure idempotence. If not provided, the backend automatically generates one. The retry generates a new run based on the failed items, and the status of the original run remains unchanged.
   * 
   * @param request - RetryFailedContextDatabaseSyncRunRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryFailedContextDatabaseSyncRunResponse
   */
  async retryFailedContextDatabaseSyncRunWithOptions(request: $_model.RetryFailedContextDatabaseSyncRunRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RetryFailedContextDatabaseSyncRunResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.runId)) {
      query["RunId"] = request.runId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RetryFailedContextDatabaseSyncRun",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetryFailedContextDatabaseSyncRunResponse>(await this.callApi(params, req, runtime), new $_model.RetryFailedContextDatabaseSyncRunResponse({}));
  }

  /**
   * Retries failed items based on a snapshot.
   * 
   * @remarks
   * For write operations, you can pass a ClientToken to ensure idempotence. If not provided, the backend automatically generates one. The retry generates a new run based on the failed items, and the status of the original run remains unchanged.
   * 
   * @param request - RetryFailedContextDatabaseSyncRunRequest
   * @returns RetryFailedContextDatabaseSyncRunResponse
   */
  async retryFailedContextDatabaseSyncRun(request: $_model.RetryFailedContextDatabaseSyncRunRequest): Promise<$_model.RetryFailedContextDatabaseSyncRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.retryFailedContextDatabaseSyncRunWithOptions(request, runtime);
  }

  /**
   * Revokes an API key for a context database.
   * 
   * @remarks
   * Revokes an API key.
   * 
   * @param request - RevokeContextDatabaseApiKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeContextDatabaseApiKeyResponse
   */
  async revokeContextDatabaseApiKeyWithOptions(request: $_model.RevokeContextDatabaseApiKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeContextDatabaseApiKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
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
      action: "RevokeContextDatabaseApiKey",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeContextDatabaseApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.RevokeContextDatabaseApiKeyResponse({}));
  }

  /**
   * Revokes an API key for a context database.
   * 
   * @remarks
   * Revokes an API key.
   * 
   * @param request - RevokeContextDatabaseApiKeyRequest
   * @returns RevokeContextDatabaseApiKeyResponse
   */
  async revokeContextDatabaseApiKey(request: $_model.RevokeContextDatabaseApiKeyRequest): Promise<$_model.RevokeContextDatabaseApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeContextDatabaseApiKeyWithOptions(request, runtime);
  }

  /**
   * Manually triggers a run.
   * 
   * @remarks
   * Write operations support idempotence by passing a ClientToken. If no ClientToken is provided, the backend generates one automatically.
   * 
   * @param request - StartContextDatabaseSyncRunRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartContextDatabaseSyncRunResponse
   */
  async startContextDatabaseSyncRunWithOptions(request: $_model.StartContextDatabaseSyncRunRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartContextDatabaseSyncRunResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartContextDatabaseSyncRun",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartContextDatabaseSyncRunResponse>(await this.callApi(params, req, runtime), new $_model.StartContextDatabaseSyncRunResponse({}));
  }

  /**
   * Manually triggers a run.
   * 
   * @remarks
   * Write operations support idempotence by passing a ClientToken. If no ClientToken is provided, the backend generates one automatically.
   * 
   * @param request - StartContextDatabaseSyncRunRequest
   * @returns StartContextDatabaseSyncRunResponse
   */
  async startContextDatabaseSyncRun(request: $_model.StartContextDatabaseSyncRunRequest): Promise<$_model.StartContextDatabaseSyncRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startContextDatabaseSyncRunWithOptions(request, runtime);
  }

  /**
   * Initiates a snapshot discovery task for data selection scope configuration.
   * 
   * @remarks
   * Write operations support idempotence by passing a ClientToken. If no ClientToken is provided, the backend generates one automatically. Discovery is an asynchronous operation. The operation returns a discovery task identifier. Poll for results to retrieve SelectedNodeKeys.
   * 
   * @param request - StartContextDatabaseSyncSourceDiscoveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartContextDatabaseSyncSourceDiscoveryResponse
   */
  async startContextDatabaseSyncSourceDiscoveryWithOptions(request: $_model.StartContextDatabaseSyncSourceDiscoveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartContextDatabaseSyncSourceDiscoveryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartContextDatabaseSyncSourceDiscovery",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartContextDatabaseSyncSourceDiscoveryResponse>(await this.callApi(params, req, runtime), new $_model.StartContextDatabaseSyncSourceDiscoveryResponse({}));
  }

  /**
   * Initiates a snapshot discovery task for data selection scope configuration.
   * 
   * @remarks
   * Write operations support idempotence by passing a ClientToken. If no ClientToken is provided, the backend generates one automatically. Discovery is an asynchronous operation. The operation returns a discovery task identifier. Poll for results to retrieve SelectedNodeKeys.
   * 
   * @param request - StartContextDatabaseSyncSourceDiscoveryRequest
   * @returns StartContextDatabaseSyncSourceDiscoveryResponse
   */
  async startContextDatabaseSyncSourceDiscovery(request: $_model.StartContextDatabaseSyncSourceDiscoveryRequest): Promise<$_model.StartContextDatabaseSyncSourceDiscoveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startContextDatabaseSyncSourceDiscoveryWithOptions(request, runtime);
  }

  /**
   * Starts an ApsaraDB RDS AI application instance that is in the Stopped state.
   * 
   * @remarks
   * ### Supported engines
   * ApsaraDB RDS for PostgreSQL
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - StartInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartInstanceResponse
   */
  async startInstanceWithOptions(request: $_model.StartInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.branchName)) {
      query["BranchName"] = request.branchName;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartInstance",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StartInstanceResponse({}));
  }

  /**
   * Starts an ApsaraDB RDS AI application instance that is in the Stopped state.
   * 
   * @remarks
   * ### Supported engines
   * ApsaraDB RDS for PostgreSQL
   * ### Related documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - StartInstanceRequest
   * @returns StartInstanceResponse
   */
  async startInstance(request: $_model.StartInstanceRequest): Promise<$_model.StartInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startInstanceWithOptions(request, runtime);
  }

  /**
   * Pauses an RDS AI application instance that is in the Running state.
   * 
   * @remarks
   * ### Applicable engine
   * RDS PostgreSQL
   * ### Related feature documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - StopInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopInstanceResponse
   */
  async stopInstanceWithOptions(request: $_model.StopInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.branchName)) {
      query["BranchName"] = request.branchName;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopInstance",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StopInstanceResponse({}));
  }

  /**
   * Pauses an RDS AI application instance that is in the Running state.
   * 
   * @remarks
   * ### Applicable engine
   * RDS PostgreSQL
   * ### Related feature documentation
   * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
   * 
   * @param request - StopInstanceRequest
   * @returns StopInstanceResponse
   */
  async stopInstance(request: $_model.StopInstanceRequest): Promise<$_model.StopInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopInstanceWithOptions(request, runtime);
  }

  /**
   * Updates the API key quota.
   * 
   * @remarks
   * ### Applicable engine
   * [Ultimate Edition of RDS AI Assistant](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param tmpReq - UpdateApiKeyQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApiKeyQuotaResponse
   */
  async updateApiKeyQuotaWithOptions(tmpReq: $_model.UpdateApiKeyQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApiKeyQuotaResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateApiKeyQuotaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.keys)) {
      request.keysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keys, "Keys", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.keysShrink)) {
      query["Keys"] = request.keysShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApiKeyQuota",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApiKeyQuotaResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApiKeyQuotaResponse({}));
  }

  /**
   * Updates the API key quota.
   * 
   * @remarks
   * ### Applicable engine
   * [Ultimate Edition of RDS AI Assistant](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param request - UpdateApiKeyQuotaRequest
   * @returns UpdateApiKeyQuotaResponse
   */
  async updateApiKeyQuota(request: $_model.UpdateApiKeyQuotaRequest): Promise<$_model.UpdateApiKeyQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateApiKeyQuotaWithOptions(request, runtime);
  }

  /**
   * Updates the API key of a context database.
   * 
   * @remarks
   * Updates the display metadata of an API key. At least one of Name or Description must be specified. The plaintext key is not reissued.
   * 
   * @param request - UpdateContextDatabaseApiKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateContextDatabaseApiKeyResponse
   */
  async updateContextDatabaseApiKeyWithOptions(request: $_model.UpdateContextDatabaseApiKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateContextDatabaseApiKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!$dara.isNull(request.memberId)) {
      query["MemberId"] = request.memberId;
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
      action: "UpdateContextDatabaseApiKey",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateContextDatabaseApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateContextDatabaseApiKeyResponse({}));
  }

  /**
   * Updates the API key of a context database.
   * 
   * @remarks
   * Updates the display metadata of an API key. At least one of Name or Description must be specified. The plaintext key is not reissued.
   * 
   * @param request - UpdateContextDatabaseApiKeyRequest
   * @returns UpdateContextDatabaseApiKeyResponse
   */
  async updateContextDatabaseApiKey(request: $_model.UpdateContextDatabaseApiKeyRequest): Promise<$_model.UpdateContextDatabaseApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateContextDatabaseApiKeyWithOptions(request, runtime);
  }

  /**
   * Updates a context database member.
   * 
   * @remarks
   * Updates the role or status of a member.
   * 
   * @param request - UpdateContextDatabaseMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateContextDatabaseMemberResponse
   */
  async updateContextDatabaseMemberWithOptions(request: $_model.UpdateContextDatabaseMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateContextDatabaseMemberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.memberId)) {
      query["MemberId"] = request.memberId;
    }

    if (!$dara.isNull(request.role)) {
      query["Role"] = request.role;
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
      action: "UpdateContextDatabaseMember",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateContextDatabaseMemberResponse>(await this.callApi(params, req, runtime), new $_model.UpdateContextDatabaseMemberResponse({}));
  }

  /**
   * Updates a context database member.
   * 
   * @remarks
   * Updates the role or status of a member.
   * 
   * @param request - UpdateContextDatabaseMemberRequest
   * @returns UpdateContextDatabaseMemberResponse
   */
  async updateContextDatabaseMember(request: $_model.UpdateContextDatabaseMemberRequest): Promise<$_model.UpdateContextDatabaseMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateContextDatabaseMemberWithOptions(request, runtime);
  }

  /**
   * Updates the metadata of a data source.
   * 
   * @remarks
   * For write operations, you can specify a ClientToken to ensure idempotence. If you do not specify it, the backend automatically generates one.
   * 
   * @param request - UpdateContextDatabaseSyncConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateContextDatabaseSyncConnectionResponse
   */
  async updateContextDatabaseSyncConnectionWithOptions(request: $_model.UpdateContextDatabaseSyncConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateContextDatabaseSyncConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionId)) {
      query["ConnectionId"] = request.connectionId;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateContextDatabaseSyncConnection",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateContextDatabaseSyncConnectionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateContextDatabaseSyncConnectionResponse({}));
  }

  /**
   * Updates the metadata of a data source.
   * 
   * @remarks
   * For write operations, you can specify a ClientToken to ensure idempotence. If you do not specify it, the backend automatically generates one.
   * 
   * @param request - UpdateContextDatabaseSyncConnectionRequest
   * @returns UpdateContextDatabaseSyncConnectionResponse
   */
  async updateContextDatabaseSyncConnection(request: $_model.UpdateContextDatabaseSyncConnectionRequest): Promise<$_model.UpdateContextDatabaseSyncConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateContextDatabaseSyncConnectionWithOptions(request, runtime);
  }

  /**
   * Rotates the credentials of a data source individually.
   * 
   * @remarks
   * You can specify the ClientToken parameter to ensure idempotence for write operations. If you do not specify this parameter, the backend automatically generates one.
   * 
   * @param tmpReq - UpdateContextDatabaseSyncConnectionCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateContextDatabaseSyncConnectionCredentialResponse
   */
  async updateContextDatabaseSyncConnectionCredentialWithOptions(tmpReq: $_model.UpdateContextDatabaseSyncConnectionCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateContextDatabaseSyncConnectionCredentialResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateContextDatabaseSyncConnectionCredentialShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.credentials)) {
      request.credentialsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentials, "Credentials", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionId)) {
      query["ConnectionId"] = request.connectionId;
    }

    if (!$dara.isNull(request.credentialsShrink)) {
      query["Credentials"] = request.credentialsShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateContextDatabaseSyncConnectionCredential",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateContextDatabaseSyncConnectionCredentialResponse>(await this.callApi(params, req, runtime), new $_model.UpdateContextDatabaseSyncConnectionCredentialResponse({}));
  }

  /**
   * Rotates the credentials of a data source individually.
   * 
   * @remarks
   * You can specify the ClientToken parameter to ensure idempotence for write operations. If you do not specify this parameter, the backend automatically generates one.
   * 
   * @param request - UpdateContextDatabaseSyncConnectionCredentialRequest
   * @returns UpdateContextDatabaseSyncConnectionCredentialResponse
   */
  async updateContextDatabaseSyncConnectionCredential(request: $_model.UpdateContextDatabaseSyncConnectionCredentialRequest): Promise<$_model.UpdateContextDatabaseSyncConnectionCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateContextDatabaseSyncConnectionCredentialWithOptions(request, runtime);
  }

  /**
   * Updates the metadata of an import task.
   * 
   * @remarks
   * For write operations, you can pass in a ClientToken to ensure idempotency. If it is not provided, the backend automatically generates one. Target is an implicit concept. The invoker only needs to pass in the KnowledgeBaseId, and the backend performs automatic creation or matching of the target.
   * 
   * @param tmpReq - UpdateContextDatabaseSyncJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateContextDatabaseSyncJobResponse
   */
  async updateContextDatabaseSyncJobWithOptions(tmpReq: $_model.UpdateContextDatabaseSyncJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateContextDatabaseSyncJobResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateContextDatabaseSyncJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filters)) {
      request.filtersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filters, "Filters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.filtersShrink)) {
      query["Filters"] = request.filtersShrink;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.targetKnowledgeBaseId)) {
      query["TargetKnowledgeBaseId"] = request.targetKnowledgeBaseId;
    }

    if (!$dara.isNull(request.targetKnowledgeBaseName)) {
      query["TargetKnowledgeBaseName"] = request.targetKnowledgeBaseName;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateContextDatabaseSyncJob",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateContextDatabaseSyncJobResponse>(await this.callApi(params, req, runtime), new $_model.UpdateContextDatabaseSyncJobResponse({}));
  }

  /**
   * Updates the metadata of an import task.
   * 
   * @remarks
   * For write operations, you can pass in a ClientToken to ensure idempotency. If it is not provided, the backend automatically generates one. Target is an implicit concept. The invoker only needs to pass in the KnowledgeBaseId, and the backend performs automatic creation or matching of the target.
   * 
   * @param request - UpdateContextDatabaseSyncJobRequest
   * @returns UpdateContextDatabaseSyncJobResponse
   */
  async updateContextDatabaseSyncJob(request: $_model.UpdateContextDatabaseSyncJobRequest): Promise<$_model.UpdateContextDatabaseSyncJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateContextDatabaseSyncJobWithOptions(request, runtime);
  }

  /**
   * Updates the scheduling configuration of an import task.
   * 
   * @remarks
   * You can specify a ClientToken for write operations to ensure idempotence. If no ClientToken is provided, the backend automatically generates one.
   * 
   * @param tmpReq - UpdateContextDatabaseSyncJobScheduleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateContextDatabaseSyncJobScheduleResponse
   */
  async updateContextDatabaseSyncJobScheduleWithOptions(tmpReq: $_model.UpdateContextDatabaseSyncJobScheduleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateContextDatabaseSyncJobScheduleResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateContextDatabaseSyncJobScheduleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dailyTimes)) {
      request.dailyTimesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dailyTimes, "DailyTimes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dailyTimesShrink)) {
      query["DailyTimes"] = request.dailyTimesShrink;
    }

    if (!$dara.isNull(request.intervalMinutes)) {
      query["IntervalMinutes"] = request.intervalMinutes;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.missedPolicy)) {
      query["MissedPolicy"] = request.missedPolicy;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateContextDatabaseSyncJobSchedule",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateContextDatabaseSyncJobScheduleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateContextDatabaseSyncJobScheduleResponse({}));
  }

  /**
   * Updates the scheduling configuration of an import task.
   * 
   * @remarks
   * You can specify a ClientToken for write operations to ensure idempotence. If no ClientToken is provided, the backend automatically generates one.
   * 
   * @param request - UpdateContextDatabaseSyncJobScheduleRequest
   * @returns UpdateContextDatabaseSyncJobScheduleResponse
   */
  async updateContextDatabaseSyncJobSchedule(request: $_model.UpdateContextDatabaseSyncJobScheduleRequest): Promise<$_model.UpdateContextDatabaseSyncJobScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateContextDatabaseSyncJobScheduleWithOptions(request, runtime);
  }

  /**
   * Updates the metadata of a data selection scope.
   * 
   * @remarks
   * Write operations support idempotence via ClientToken. If ClientToken is not provided, the backend generates one automatically.
   * 
   * @param tmpReq - UpdateContextDatabaseSyncSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateContextDatabaseSyncSourceResponse
   */
  async updateContextDatabaseSyncSourceWithOptions(tmpReq: $_model.UpdateContextDatabaseSyncSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateContextDatabaseSyncSourceResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateContextDatabaseSyncSourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sourceConfig)) {
      request.sourceConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceConfig, "SourceConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.sourceConfigShrink)) {
      query["SourceConfig"] = request.sourceConfigShrink;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateContextDatabaseSyncSource",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateContextDatabaseSyncSourceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateContextDatabaseSyncSourceResponse({}));
  }

  /**
   * Updates the metadata of a data selection scope.
   * 
   * @remarks
   * Write operations support idempotence via ClientToken. If ClientToken is not provided, the backend generates one automatically.
   * 
   * @param request - UpdateContextDatabaseSyncSourceRequest
   * @returns UpdateContextDatabaseSyncSourceResponse
   */
  async updateContextDatabaseSyncSource(request: $_model.UpdateContextDatabaseSyncSourceRequest): Promise<$_model.UpdateContextDatabaseSyncSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateContextDatabaseSyncSourceWithOptions(request, runtime);
  }

  /**
   * Updates the explicit node selection for the data selection scope.
   * 
   * @remarks
   * For write operations, you can pass the ClientToken parameter to ensure idempotency. If this parameter is not provided, the backend automatically generates one.
   * 
   * @param tmpReq - UpdateContextDatabaseSyncSourceSelectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateContextDatabaseSyncSourceSelectionResponse
   */
  async updateContextDatabaseSyncSourceSelectionWithOptions(tmpReq: $_model.UpdateContextDatabaseSyncSourceSelectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateContextDatabaseSyncSourceSelectionResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateContextDatabaseSyncSourceSelectionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.selectedNodeKeys)) {
      request.selectedNodeKeysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.selectedNodeKeys, "SelectedNodeKeys", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.selectedNodeKeysShrink)) {
      query["SelectedNodeKeys"] = request.selectedNodeKeysShrink;
    }

    if (!$dara.isNull(request.selectionPolicy)) {
      query["SelectionPolicy"] = request.selectionPolicy;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateContextDatabaseSyncSourceSelection",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateContextDatabaseSyncSourceSelectionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateContextDatabaseSyncSourceSelectionResponse({}));
  }

  /**
   * Updates the explicit node selection for the data selection scope.
   * 
   * @remarks
   * For write operations, you can pass the ClientToken parameter to ensure idempotency. If this parameter is not provided, the backend automatically generates one.
   * 
   * @param request - UpdateContextDatabaseSyncSourceSelectionRequest
   * @returns UpdateContextDatabaseSyncSourceSelectionResponse
   */
  async updateContextDatabaseSyncSourceSelection(request: $_model.UpdateContextDatabaseSyncSourceSelectionRequest): Promise<$_model.UpdateContextDatabaseSyncSourceSelectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateContextDatabaseSyncSourceSelectionWithOptions(request, runtime);
  }

  /**
   * Updates a ContextDB workspace.
   * 
   * @remarks
   * Modifies the name of a workspace.
   * 
   * @param request - UpdateContextDatabaseWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateContextDatabaseWorkspaceResponse
   */
  async updateContextDatabaseWorkspaceWithOptions(request: $_model.UpdateContextDatabaseWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateContextDatabaseWorkspaceResponse> {
    request.validate();
    let query = { };
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
      action: "UpdateContextDatabaseWorkspace",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateContextDatabaseWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateContextDatabaseWorkspaceResponse({}));
  }

  /**
   * Updates a ContextDB workspace.
   * 
   * @remarks
   * Modifies the name of a workspace.
   * 
   * @param request - UpdateContextDatabaseWorkspaceRequest
   * @returns UpdateContextDatabaseWorkspaceResponse
   */
  async updateContextDatabaseWorkspace(request: $_model.UpdateContextDatabaseWorkspaceRequest): Promise<$_model.UpdateContextDatabaseWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateContextDatabaseWorkspaceWithOptions(request, runtime);
  }

  /**
   * Updates a custom agent.
   * 
   * @param tmpReq - UpdateCustomAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomAgentResponse
   */
  async updateCustomAgentWithOptions(tmpReq: $_model.UpdateCustomAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCustomAgentResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateCustomAgentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.skillIds)) {
      request.skillIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.skillIds, "SkillIds", "json");
    }

    if (!$dara.isNull(tmpReq.tools)) {
      request.toolsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tools, "Tools", "json");
    }

    let query = { };
    if (!$dara.isNull(request.customAgentId)) {
      query["CustomAgentId"] = request.customAgentId;
    }

    if (!$dara.isNull(request.enableTools)) {
      query["EnableTools"] = request.enableTools;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.skillIdsShrink)) {
      query["SkillIds"] = request.skillIdsShrink;
    }

    if (!$dara.isNull(request.systemPrompt)) {
      query["SystemPrompt"] = request.systemPrompt;
    }

    if (!$dara.isNull(request.toolsShrink)) {
      query["Tools"] = request.toolsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCustomAgent",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCustomAgentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCustomAgentResponse({}));
  }

  /**
   * Updates a custom agent.
   * 
   * @param request - UpdateCustomAgentRequest
   * @returns UpdateCustomAgentResponse
   */
  async updateCustomAgent(request: $_model.UpdateCustomAgentRequest): Promise<$_model.UpdateCustomAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCustomAgentWithOptions(request, runtime);
  }

  /**
   * Updates the alert threshold percentage for an API key.
   * 
   * @remarks
   * ### Applicable engine
   * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param tmpReq - UpdateMOQuotaAlertThresholdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMOQuotaAlertThresholdResponse
   */
  async updateMOQuotaAlertThresholdWithOptions(tmpReq: $_model.UpdateMOQuotaAlertThresholdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMOQuotaAlertThresholdResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateMOQuotaAlertThresholdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.apikey)) {
      request.apikeyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.apikey, "Apikey", "json");
    }

    let query = { };
    if (!$dara.isNull(request.apikeyShrink)) {
      query["Apikey"] = request.apikeyShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMOQuotaAlertThreshold",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMOQuotaAlertThresholdResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMOQuotaAlertThresholdResponse({}));
  }

  /**
   * Updates the alert threshold percentage for an API key.
   * 
   * @remarks
   * ### Applicable engine
   * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
   * 
   * @param request - UpdateMOQuotaAlertThresholdRequest
   * @returns UpdateMOQuotaAlertThresholdResponse
   */
  async updateMOQuotaAlertThreshold(request: $_model.UpdateMOQuotaAlertThresholdRequest): Promise<$_model.UpdateMOQuotaAlertThresholdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMOQuotaAlertThresholdWithOptions(request, runtime);
  }

  /**
   * Updates the information of a specified Skill.
   * 
   * @param tmpReq - UpdateSkillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSkillResponse
   */
  async updateSkillWithOptions(tmpReq: $_model.UpdateSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSkillResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateSkillShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.content)) {
      request.contentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.content, "Content", "json");
    }

    if (!$dara.isNull(tmpReq.dbtypes)) {
      request.dbtypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dbtypes, "Dbtypes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.contentShrink)) {
      query["Content"] = request.contentShrink;
    }

    if (!$dara.isNull(request.dbtypesShrink)) {
      query["Dbtypes"] = request.dbtypesShrink;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.skillId)) {
      query["SkillId"] = request.skillId;
    }

    if (!$dara.isNull(request.updateNote)) {
      query["UpdateNote"] = request.updateNote;
    }

    if (!$dara.isNull(request.uploadId)) {
      query["UploadId"] = request.uploadId;
    }

    if (!$dara.isNull(request.uploadToken)) {
      query["UploadToken"] = request.uploadToken;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSkill",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSkillResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSkillResponse({}));
  }

  /**
   * Updates the information of a specified Skill.
   * 
   * @param request - UpdateSkillRequest
   * @returns UpdateSkillResponse
   */
  async updateSkill(request: $_model.UpdateSkillRequest): Promise<$_model.UpdateSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSkillWithOptions(request, runtime);
  }

  /**
   * Validates datasource credentials and authorization.
   * 
   * @remarks
   * Validates the connection credentials and authorization.
   * 
   * @param request - VerifyContextDatabaseSyncConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyContextDatabaseSyncConnectionResponse
   */
  async verifyContextDatabaseSyncConnectionWithOptions(request: $_model.VerifyContextDatabaseSyncConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyContextDatabaseSyncConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionId)) {
      query["ConnectionId"] = request.connectionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyContextDatabaseSyncConnection",
      version: "2025-05-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifyContextDatabaseSyncConnectionResponse>(await this.callApi(params, req, runtime), new $_model.VerifyContextDatabaseSyncConnectionResponse({}));
  }

  /**
   * Validates datasource credentials and authorization.
   * 
   * @remarks
   * Validates the connection credentials and authorization.
   * 
   * @param request - VerifyContextDatabaseSyncConnectionRequest
   * @returns VerifyContextDatabaseSyncConnectionResponse
   */
  async verifyContextDatabaseSyncConnection(request: $_model.VerifyContextDatabaseSyncConnectionRequest): Promise<$_model.VerifyContextDatabaseSyncConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyContextDatabaseSyncConnectionWithOptions(request, runtime);
  }

}
