import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { $OpenApiUtil } from '@alicloud/openapi-core';
import * as $_model from './models/model';
export * from './models/model';
export default class Client extends OpenApi {
    constructor(config: $OpenApiUtil.Config);
    getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {
        [key: string]: string;
    }, endpoint: string): string;
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
    addContextDatabaseSyncJobExclusionWithOptions(request: $_model.AddContextDatabaseSyncJobExclusionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddContextDatabaseSyncJobExclusionResponse>;
    /**
     * Adds an exclusion item to an import task.
     *
     * @remarks
     * Adds a job exclusion item.
     *
     * @param request - AddContextDatabaseSyncJobExclusionRequest
     * @returns AddContextDatabaseSyncJobExclusionResponse
     */
    addContextDatabaseSyncJobExclusion(request: $_model.AddContextDatabaseSyncJobExclusionRequest): Promise<$_model.AddContextDatabaseSyncJobExclusionResponse>;
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
    cancelContextDatabaseSyncDiscoveryWithOptions(request: $_model.CancelContextDatabaseSyncDiscoveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelContextDatabaseSyncDiscoveryResponse>;
    /**
     * Cancels an in-progress discovery task by task ID.
     *
     * @remarks
     * You can specify a ClientToken to ensure idempotence for write operations. If you do not specify this parameter, the backend automatically generates one.
     *
     * @param request - CancelContextDatabaseSyncDiscoveryRequest
     * @returns CancelContextDatabaseSyncDiscoveryResponse
     */
    cancelContextDatabaseSyncDiscovery(request: $_model.CancelContextDatabaseSyncDiscoveryRequest): Promise<$_model.CancelContextDatabaseSyncDiscoveryResponse>;
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
    cancelContextDatabaseSyncRunWithOptions(request: $_model.CancelContextDatabaseSyncRunRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelContextDatabaseSyncRunResponse>;
    /**
     * Cancels a run.
     *
     * @remarks
     * Write operations support idempotence through ClientToken. If ClientToken is not provided, the backend generates one automatically. Cancellation is best-effort. Completed RunItems are not affected.
     *
     * @param request - CancelContextDatabaseSyncRunRequest
     * @returns CancelContextDatabaseSyncRunResponse
     */
    cancelContextDatabaseSyncRun(request: $_model.CancelContextDatabaseSyncRunRequest): Promise<$_model.CancelContextDatabaseSyncRunResponse>;
    /**
     * Sends a conversation message.
     *
     * @param tmpReq - ChatMessagesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ChatMessagesResponse
     */
    chatMessagesWithSSE(tmpReq: $_model.ChatMessagesRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.ChatMessagesResponse, any, unknown>;
    /**
     * Sends a conversation message.
     *
     * @param tmpReq - ChatMessagesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ChatMessagesResponse
     */
    chatMessagesWithOptions(tmpReq: $_model.ChatMessagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatMessagesResponse>;
    /**
     * Sends a conversation message.
     *
     * @param request - ChatMessagesRequest
     * @returns ChatMessagesResponse
     */
    chatMessages(request: $_model.ChatMessagesRequest): Promise<$_model.ChatMessagesResponse>;
    /**
     * Stops a conversation.
     *
     * @param request - ChatMessagesTaskStopRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ChatMessagesTaskStopResponse
     */
    chatMessagesTaskStopWithOptions(request: $_model.ChatMessagesTaskStopRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatMessagesTaskStopResponse>;
    /**
     * Stops a conversation.
     *
     * @param request - ChatMessagesTaskStopRequest
     * @returns ChatMessagesTaskStopResponse
     */
    chatMessagesTaskStop(request: $_model.ChatMessagesTaskStopRequest): Promise<$_model.ChatMessagesTaskStopResponse>;
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
    createApiKeyWithOptions(request: $_model.CreateApiKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApiKeyResponse>;
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
    createApiKey(request: $_model.CreateApiKeyRequest): Promise<$_model.CreateApiKeyResponse>;
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
    createAppInstanceWithOptions(tmpReq: $_model.CreateAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppInstanceResponse>;
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
    createAppInstance(request: $_model.CreateAppInstanceRequest): Promise<$_model.CreateAppInstanceResponse>;
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
    createContextDatabaseApiKeyWithOptions(request: $_model.CreateContextDatabaseApiKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateContextDatabaseApiKeyResponse>;
    /**
     * Creates a context database API key.
     *
     * @remarks
     * Creates an API key and returns the plaintext apiKey.
     *
     * @param request - CreateContextDatabaseApiKeyRequest
     * @returns CreateContextDatabaseApiKeyResponse
     */
    createContextDatabaseApiKey(request: $_model.CreateContextDatabaseApiKeyRequest): Promise<$_model.CreateContextDatabaseApiKeyResponse>;
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
    createContextDatabaseMemberWithOptions(request: $_model.CreateContextDatabaseMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateContextDatabaseMemberResponse>;
    /**
     * Creates a ContextDB member.
     *
     * @remarks
     * Creates a member. If GenerateInitialKey is set to true, the first API key is also issued, and the plaintext ApiKey is returned in the response. This is a sensitive field and is returned only once. Store it securely. After the member is created, you can call the List or Get operation to query the member and the metadata of the API keys under the member.
     *
     * @param request - CreateContextDatabaseMemberRequest
     * @returns CreateContextDatabaseMemberResponse
     */
    createContextDatabaseMember(request: $_model.CreateContextDatabaseMemberRequest): Promise<$_model.CreateContextDatabaseMemberResponse>;
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
    createContextDatabaseSyncConnectionWithOptions(request: $_model.CreateContextDatabaseSyncConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateContextDatabaseSyncConnectionResponse>;
    /**
     * Creates a synchronization connection.
     *
     * @remarks
     * For write operations, you can specify a ClientToken to ensure idempotency. If no ClientToken is provided, the backend automatically generates one. Upon successful creation, the complete information of the created object is returned, including the ID that can be used for subsequent queries or updates.
     *
     * @param request - CreateContextDatabaseSyncConnectionRequest
     * @returns CreateContextDatabaseSyncConnectionResponse
     */
    createContextDatabaseSyncConnection(request: $_model.CreateContextDatabaseSyncConnectionRequest): Promise<$_model.CreateContextDatabaseSyncConnectionResponse>;
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
    createContextDatabaseSyncJobWithOptions(tmpReq: $_model.CreateContextDatabaseSyncJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateContextDatabaseSyncJobResponse>;
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
    createContextDatabaseSyncJob(request: $_model.CreateContextDatabaseSyncJobRequest): Promise<$_model.CreateContextDatabaseSyncJobResponse>;
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
    createContextDatabaseSyncSourceWithOptions(tmpReq: $_model.CreateContextDatabaseSyncSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateContextDatabaseSyncSourceResponse>;
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
    createContextDatabaseSyncSource(request: $_model.CreateContextDatabaseSyncSourceRequest): Promise<$_model.CreateContextDatabaseSyncSourceResponse>;
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
    createContextDatabaseWorkspaceWithOptions(request: $_model.CreateContextDatabaseWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateContextDatabaseWorkspaceResponse>;
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
    createContextDatabaseWorkspace(request: $_model.CreateContextDatabaseWorkspaceRequest): Promise<$_model.CreateContextDatabaseWorkspaceResponse>;
    /**
     * Creates a custom agent.
     *
     * @param tmpReq - CreateCustomAgentRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateCustomAgentResponse
     */
    createCustomAgentWithOptions(tmpReq: $_model.CreateCustomAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomAgentResponse>;
    /**
     * Creates a custom agent.
     *
     * @param request - CreateCustomAgentRequest
     * @returns CreateCustomAgentResponse
     */
    createCustomAgent(request: $_model.CreateCustomAgentRequest): Promise<$_model.CreateCustomAgentResponse>;
    /**
     * Creates a batch instance inspection task.
     *
     * @param request - CreateInspectionTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateInspectionTaskResponse
     */
    createInspectionTaskWithOptions(request: $_model.CreateInspectionTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInspectionTaskResponse>;
    /**
     * Creates a batch instance inspection task.
     *
     * @param request - CreateInspectionTaskRequest
     * @returns CreateInspectionTaskResponse
     */
    createInspectionTask(request: $_model.CreateInspectionTaskRequest): Promise<$_model.CreateInspectionTaskResponse>;
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
    createMOUsageDetailExportWithOptions(request: $_model.CreateMOUsageDetailExportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMOUsageDetailExportResponse>;
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
    createMOUsageDetailExport(request: $_model.CreateMOUsageDetailExportRequest): Promise<$_model.CreateMOUsageDetailExportResponse>;
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
    createSandboxTemplateWithOptions(tmpReq: $_model.CreateSandboxTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSandboxTemplateResponse>;
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
    createSandboxTemplate(request: $_model.CreateSandboxTemplateRequest): Promise<$_model.CreateSandboxTemplateResponse>;
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
    createScheduledTaskWithOptions(request: $_model.CreateScheduledTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateScheduledTaskResponse>;
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
    createScheduledTask(request: $_model.CreateScheduledTaskRequest): Promise<$_model.CreateScheduledTaskResponse>;
    /**
     * Creates a user-defined skill.
     *
     * @param tmpReq - CreateSkillRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateSkillResponse
     */
    createSkillWithOptions(tmpReq: $_model.CreateSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSkillResponse>;
    /**
     * Creates a user-defined skill.
     *
     * @param request - CreateSkillRequest
     * @returns CreateSkillResponse
     */
    createSkill(request: $_model.CreateSkillRequest): Promise<$_model.CreateSkillResponse>;
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
    deleteApiKeyWithOptions(request: $_model.DeleteApiKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApiKeyResponse>;
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
    deleteApiKey(request: $_model.DeleteApiKeyRequest): Promise<$_model.DeleteApiKeyResponse>;
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
    deleteAppInstanceWithOptions(request: $_model.DeleteAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppInstanceResponse>;
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
    deleteAppInstance(request: $_model.DeleteAppInstanceRequest): Promise<$_model.DeleteAppInstanceResponse>;
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
    deleteContextDatabaseMemberWithOptions(request: $_model.DeleteContextDatabaseMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteContextDatabaseMemberResponse>;
    /**
     * Deletes a context database member.
     *
     * @remarks
     * Deletes a member. This is a hard delete and cannot be undone.
     *
     * @param request - DeleteContextDatabaseMemberRequest
     * @returns DeleteContextDatabaseMemberResponse
     */
    deleteContextDatabaseMember(request: $_model.DeleteContextDatabaseMemberRequest): Promise<$_model.DeleteContextDatabaseMemberResponse>;
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
    deleteContextDatabaseSyncConnectionWithOptions(request: $_model.DeleteContextDatabaseSyncConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteContextDatabaseSyncConnectionResponse>;
    /**
     * Deletes a data source.
     *
     * @remarks
     * For write operations, you can specify a ClientToken to ensure idempotency. If you do not specify a ClientToken, the backend automatically generates one.
     *
     * @param request - DeleteContextDatabaseSyncConnectionRequest
     * @returns DeleteContextDatabaseSyncConnectionResponse
     */
    deleteContextDatabaseSyncConnection(request: $_model.DeleteContextDatabaseSyncConnectionRequest): Promise<$_model.DeleteContextDatabaseSyncConnectionResponse>;
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
    deleteContextDatabaseSyncJobWithOptions(request: $_model.DeleteContextDatabaseSyncJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteContextDatabaseSyncJobResponse>;
    /**
     * Deletes an import task.
     *
     * @remarks
     * You can provide a ClientToken to ensure idempotency for write operations. If not provided, the backend automatically generates one.
     *
     * @param request - DeleteContextDatabaseSyncJobRequest
     * @returns DeleteContextDatabaseSyncJobResponse
     */
    deleteContextDatabaseSyncJob(request: $_model.DeleteContextDatabaseSyncJobRequest): Promise<$_model.DeleteContextDatabaseSyncJobResponse>;
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
    deleteContextDatabaseSyncSourceWithOptions(request: $_model.DeleteContextDatabaseSyncSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteContextDatabaseSyncSourceResponse>;
    /**
     * Deletes a data selection scope.
     *
     * @remarks
     * Write operations support idempotence through ClientToken. If ClientToken is not provided, the backend generates one automatically.
     *
     * @param request - DeleteContextDatabaseSyncSourceRequest
     * @returns DeleteContextDatabaseSyncSourceResponse
     */
    deleteContextDatabaseSyncSource(request: $_model.DeleteContextDatabaseSyncSourceRequest): Promise<$_model.DeleteContextDatabaseSyncSourceResponse>;
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
    deleteContextDatabaseWorkspaceWithOptions(request: $_model.DeleteContextDatabaseWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteContextDatabaseWorkspaceResponse>;
    /**
     * Deletes a ContextDB workspace.
     *
     * @remarks
     * Deletes a workspace. This is a hard deletion and cannot be undone. After the workspace is deleted, local metadata is synchronously soft deleted, and the deleted workspace is no longer counted towards the quota.
     *
     * @param request - DeleteContextDatabaseWorkspaceRequest
     * @returns DeleteContextDatabaseWorkspaceResponse
     */
    deleteContextDatabaseWorkspace(request: $_model.DeleteContextDatabaseWorkspaceRequest): Promise<$_model.DeleteContextDatabaseWorkspaceResponse>;
    /**
     * Deletes a dedicated agent created by the user.
     *
     * @param request - DeleteCustomAgentRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteCustomAgentResponse
     */
    deleteCustomAgentWithOptions(request: $_model.DeleteCustomAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomAgentResponse>;
    /**
     * Deletes a dedicated agent created by the user.
     *
     * @param request - DeleteCustomAgentRequest
     * @returns DeleteCustomAgentResponse
     */
    deleteCustomAgent(request: $_model.DeleteCustomAgentRequest): Promise<$_model.DeleteCustomAgentResponse>;
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
    deleteSandboxTemplateWithOptions(request: $_model.DeleteSandboxTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSandboxTemplateResponse>;
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
    deleteSandboxTemplate(request: $_model.DeleteSandboxTemplateRequest): Promise<$_model.DeleteSandboxTemplateResponse>;
    /**
     * Deletes a specified inspection configuration.
     *
     * @param request - DeleteScheduledTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteScheduledTaskResponse
     */
    deleteScheduledTaskWithOptions(request: $_model.DeleteScheduledTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteScheduledTaskResponse>;
    /**
     * Deletes a specified inspection configuration.
     *
     * @param request - DeleteScheduledTaskRequest
     * @returns DeleteScheduledTaskResponse
     */
    deleteScheduledTask(request: $_model.DeleteScheduledTaskRequest): Promise<$_model.DeleteScheduledTaskResponse>;
    /**
     * Deletes a specified Skill.
     *
     * @param request - DeleteSkillRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteSkillResponse
     */
    deleteSkillWithOptions(request: $_model.DeleteSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSkillResponse>;
    /**
     * Deletes a specified Skill.
     *
     * @param request - DeleteSkillRequest
     * @returns DeleteSkillResponse
     */
    deleteSkill(request: $_model.DeleteSkillRequest): Promise<$_model.DeleteSkillResponse>;
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
    describeAppInstanceAttributeWithOptions(request: $_model.DescribeAppInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppInstanceAttributeResponse>;
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
    describeAppInstanceAttribute(request: $_model.DescribeAppInstanceAttributeRequest): Promise<$_model.DescribeAppInstanceAttributeResponse>;
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
    describeAppInstancesWithOptions(request: $_model.DescribeAppInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppInstancesResponse>;
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
    describeAppInstances(request: $_model.DescribeAppInstancesRequest): Promise<$_model.DescribeAppInstancesResponse>;
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
    describeCommonSandboxTemplatesWithOptions(request: $_model.DescribeCommonSandboxTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCommonSandboxTemplatesResponse>;
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
    describeCommonSandboxTemplates(request: $_model.DescribeCommonSandboxTemplatesRequest): Promise<$_model.DescribeCommonSandboxTemplatesResponse>;
    /**
     * Queries the event list.
     *
     * @param request - DescribeEventsListRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeEventsListResponse
     */
    describeEventsListWithOptions(request: $_model.DescribeEventsListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventsListResponse>;
    /**
     * Queries the event list.
     *
     * @param request - DescribeEventsListRequest
     * @returns DescribeEventsListResponse
     */
    describeEventsList(request: $_model.DescribeEventsListRequest): Promise<$_model.DescribeEventsListResponse>;
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
    describeInstanceAuthInfoWithOptions(request: $_model.DescribeInstanceAuthInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceAuthInfoResponse>;
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
    describeInstanceAuthInfo(request: $_model.DescribeInstanceAuthInfoRequest): Promise<$_model.DescribeInstanceAuthInfoResponse>;
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
    describeInstanceEndpointsWithOptions(request: $_model.DescribeInstanceEndpointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceEndpointsResponse>;
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
    describeInstanceEndpoints(request: $_model.DescribeInstanceEndpointsRequest): Promise<$_model.DescribeInstanceEndpointsResponse>;
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
    describeInstanceIpWhitelistWithOptions(request: $_model.DescribeInstanceIpWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceIpWhitelistResponse>;
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
    describeInstanceIpWhitelist(request: $_model.DescribeInstanceIpWhitelistRequest): Promise<$_model.DescribeInstanceIpWhitelistResponse>;
    /**
     * Queries the RAG Agent configuration of an RDS AI application instance.
     *
     * @param request - DescribeInstanceRAGConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeInstanceRAGConfigResponse
     */
    describeInstanceRAGConfigWithOptions(request: $_model.DescribeInstanceRAGConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceRAGConfigResponse>;
    /**
     * Queries the RAG Agent configuration of an RDS AI application instance.
     *
     * @param request - DescribeInstanceRAGConfigRequest
     * @returns DescribeInstanceRAGConfigResponse
     */
    describeInstanceRAGConfig(request: $_model.DescribeInstanceRAGConfigRequest): Promise<$_model.DescribeInstanceRAGConfigResponse>;
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
    describeInstanceSSLWithOptions(request: $_model.DescribeInstanceSSLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceSSLResponse>;
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
    describeInstanceSSL(request: $_model.DescribeInstanceSSLRequest): Promise<$_model.DescribeInstanceSSLResponse>;
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
    describeInstanceStorageConfigWithOptions(request: $_model.DescribeInstanceStorageConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceStorageConfigResponse>;
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
    describeInstanceStorageConfig(request: $_model.DescribeInstanceStorageConfigRequest): Promise<$_model.DescribeInstanceStorageConfigResponse>;
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
    describeMOTokenUsageDetailWithOptions(request: $_model.DescribeMOTokenUsageDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMOTokenUsageDetailResponse>;
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
    describeMOTokenUsageDetail(request: $_model.DescribeMOTokenUsageDetailRequest): Promise<$_model.DescribeMOTokenUsageDetailResponse>;
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
    describeMOTokenUsageSummaryWithOptions(request: $_model.DescribeMOTokenUsageSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMOTokenUsageSummaryResponse>;
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
    describeMOTokenUsageSummary(request: $_model.DescribeMOTokenUsageSummaryRequest): Promise<$_model.DescribeMOTokenUsageSummaryResponse>;
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
    describeMOUsageDetailExportWithOptions(request: $_model.DescribeMOUsageDetailExportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMOUsageDetailExportResponse>;
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
    describeMOUsageDetailExport(request: $_model.DescribeMOUsageDetailExportRequest): Promise<$_model.DescribeMOUsageDetailExportResponse>;
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
    describeModelOperatorWithOptions(request: $_model.DescribeModelOperatorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeModelOperatorResponse>;
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
    describeModelOperator(request: $_model.DescribeModelOperatorRequest): Promise<$_model.DescribeModelOperatorResponse>;
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
    describeMonitorDataWithOptions(tmpReq: $_model.DescribeMonitorDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMonitorDataResponse>;
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
    describeMonitorData(request: $_model.DescribeMonitorDataRequest): Promise<$_model.DescribeMonitorDataResponse>;
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
    describeSandboxTemplatesWithOptions(request: $_model.DescribeSandboxTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSandboxTemplatesResponse>;
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
    describeSandboxTemplates(request: $_model.DescribeSandboxTemplatesRequest): Promise<$_model.DescribeSandboxTemplatesResponse>;
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
    describeWhitelistIpsWithOptions(request: $_model.DescribeWhitelistIpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWhitelistIpsResponse>;
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
    describeWhitelistIps(request: $_model.DescribeWhitelistIpsRequest): Promise<$_model.DescribeWhitelistIpsResponse>;
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
    disableAgentRuntimeWithOptions(request: $_model.DisableAgentRuntimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableAgentRuntimeResponse>;
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
    disableAgentRuntime(request: $_model.DisableAgentRuntimeRequest): Promise<$_model.DisableAgentRuntimeResponse>;
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
    enableAgentRuntimeWithOptions(request: $_model.EnableAgentRuntimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableAgentRuntimeResponse>;
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
    enableAgentRuntime(request: $_model.EnableAgentRuntimeRequest): Promise<$_model.EnableAgentRuntimeResponse>;
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
    getAvailableLLMModelsWithOptions(request: $_model.GetAvailableLLMModelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAvailableLLMModelsResponse>;
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
    getAvailableLLMModels(request: $_model.GetAvailableLLMModelsRequest): Promise<$_model.GetAvailableLLMModelsResponse>;
    /**
     * Retrieves the available models for a session.
     *
     * @param request - GetChatModelRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetChatModelResponse
     */
    getChatModelWithOptions(request: $_model.GetChatModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetChatModelResponse>;
    /**
     * Retrieves the available models for a session.
     *
     * @param request - GetChatModelRequest
     * @returns GetChatModelResponse
     */
    getChatModel(request: $_model.GetChatModelRequest): Promise<$_model.GetChatModelResponse>;
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
    getContextDatabaseSyncConnectionWithOptions(request: $_model.GetContextDatabaseSyncConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetContextDatabaseSyncConnectionResponse>;
    /**
     * Retrieves the details of a datasource configuration.
     *
     * @remarks
     * Retrieves the details of a connection.
     *
     * @param request - GetContextDatabaseSyncConnectionRequest
     * @returns GetContextDatabaseSyncConnectionResponse
     */
    getContextDatabaseSyncConnection(request: $_model.GetContextDatabaseSyncConnectionRequest): Promise<$_model.GetContextDatabaseSyncConnectionResponse>;
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
    getContextDatabaseSyncConnectionAuthorizationWithOptions(request: $_model.GetContextDatabaseSyncConnectionAuthorizationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetContextDatabaseSyncConnectionAuthorizationResponse>;
    /**
     * Queries the authorization scope of a data source.
     *
     * @remarks
     * Queries the authorization scope of a connection.
     *
     * @param request - GetContextDatabaseSyncConnectionAuthorizationRequest
     * @returns GetContextDatabaseSyncConnectionAuthorizationResponse
     */
    getContextDatabaseSyncConnectionAuthorization(request: $_model.GetContextDatabaseSyncConnectionAuthorizationRequest): Promise<$_model.GetContextDatabaseSyncConnectionAuthorizationResponse>;
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
    getContextDatabaseSyncDiscoveryTaskWithOptions(request: $_model.GetContextDatabaseSyncDiscoveryTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetContextDatabaseSyncDiscoveryTaskResponse>;
    /**
     * Queries the status of a discovery task by task ID.
     *
     * @remarks
     * Queries the status of a discovery task by task ID.
     *
     * @param request - GetContextDatabaseSyncDiscoveryTaskRequest
     * @returns GetContextDatabaseSyncDiscoveryTaskResponse
     */
    getContextDatabaseSyncDiscoveryTask(request: $_model.GetContextDatabaseSyncDiscoveryTaskRequest): Promise<$_model.GetContextDatabaseSyncDiscoveryTaskResponse>;
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
    getContextDatabaseSyncJobWithOptions(request: $_model.GetContextDatabaseSyncJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetContextDatabaseSyncJobResponse>;
    /**
     * Retrieves the details of an import job.
     *
     * @remarks
     * Retrieves the details of a job.
     *
     * @param request - GetContextDatabaseSyncJobRequest
     * @returns GetContextDatabaseSyncJobResponse
     */
    getContextDatabaseSyncJob(request: $_model.GetContextDatabaseSyncJobRequest): Promise<$_model.GetContextDatabaseSyncJobResponse>;
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
    getContextDatabaseSyncJobReadinessWithOptions(request: $_model.GetContextDatabaseSyncJobReadinessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetContextDatabaseSyncJobReadinessResponse>;
    /**
     * Queries whether an import task can be started.
     *
     * @remarks
     * Queries whether a job can be started.
     *
     * @param request - GetContextDatabaseSyncJobReadinessRequest
     * @returns GetContextDatabaseSyncJobReadinessResponse
     */
    getContextDatabaseSyncJobReadiness(request: $_model.GetContextDatabaseSyncJobReadinessRequest): Promise<$_model.GetContextDatabaseSyncJobReadinessResponse>;
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
    getContextDatabaseSyncJobScheduleWithOptions(request: $_model.GetContextDatabaseSyncJobScheduleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetContextDatabaseSyncJobScheduleResponse>;
    /**
     * Queries the scheduling configuration of an import task.
     *
     * @remarks
     * Queries the scheduling configuration of a job.
     *
     * @param request - GetContextDatabaseSyncJobScheduleRequest
     * @returns GetContextDatabaseSyncJobScheduleResponse
     */
    getContextDatabaseSyncJobSchedule(request: $_model.GetContextDatabaseSyncJobScheduleRequest): Promise<$_model.GetContextDatabaseSyncJobScheduleResponse>;
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
    getContextDatabaseSyncRunWithOptions(request: $_model.GetContextDatabaseSyncRunRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetContextDatabaseSyncRunResponse>;
    /**
     * Retrieves the details of a run.
     *
     * @remarks
     * Retrieves the details of a run.
     *
     * @param request - GetContextDatabaseSyncRunRequest
     * @returns GetContextDatabaseSyncRunResponse
     */
    getContextDatabaseSyncRun(request: $_model.GetContextDatabaseSyncRunRequest): Promise<$_model.GetContextDatabaseSyncRunResponse>;
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
    getContextDatabaseSyncSourceWithOptions(request: $_model.GetContextDatabaseSyncSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetContextDatabaseSyncSourceResponse>;
    /**
     * Retrieves the details of a data selection scope.
     *
     * @remarks
     * Retrieves the details of a source.
     *
     * @param request - GetContextDatabaseSyncSourceRequest
     * @returns GetContextDatabaseSyncSourceResponse
     */
    getContextDatabaseSyncSource(request: $_model.GetContextDatabaseSyncSourceRequest): Promise<$_model.GetContextDatabaseSyncSourceResponse>;
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
    getContextDatabaseSyncSourceSelectionWithOptions(request: $_model.GetContextDatabaseSyncSourceSelectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetContextDatabaseSyncSourceSelectionResponse>;
    /**
     * Queries the current node selection in the data selection scope.
     *
     * @remarks
     * Queries the current node selection of the source.
     *
     * @param request - GetContextDatabaseSyncSourceSelectionRequest
     * @returns GetContextDatabaseSyncSourceSelectionResponse
     */
    getContextDatabaseSyncSourceSelection(request: $_model.GetContextDatabaseSyncSourceSelectionRequest): Promise<$_model.GetContextDatabaseSyncSourceSelectionResponse>;
    /**
     * Queries the historical conversations of a user.
     *
     * @param request - GetConversationsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetConversationsResponse
     */
    getConversationsWithOptions(request: $_model.GetConversationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetConversationsResponse>;
    /**
     * Queries the historical conversations of a user.
     *
     * @param request - GetConversationsRequest
     * @returns GetConversationsResponse
     */
    getConversations(request: $_model.GetConversationsRequest): Promise<$_model.GetConversationsResponse>;
    /**
     * Queries a dedicated agent created by the user.
     *
     * @param request - GetCustomAgentRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetCustomAgentResponse
     */
    getCustomAgentWithOptions(request: $_model.GetCustomAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCustomAgentResponse>;
    /**
     * Queries a dedicated agent created by the user.
     *
     * @param request - GetCustomAgentRequest
     * @returns GetCustomAgentResponse
     */
    getCustomAgent(request: $_model.GetCustomAgentRequest): Promise<$_model.GetCustomAgentResponse>;
    /**
     * Retrieves the details of an inspection report by report ID.
     *
     * @param request - GetInspectionReportRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetInspectionReportResponse
     */
    getInspectionReportWithOptions(request: $_model.GetInspectionReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInspectionReportResponse>;
    /**
     * Retrieves the details of an inspection report by report ID.
     *
     * @param request - GetInspectionReportRequest
     * @returns GetInspectionReportResponse
     */
    getInspectionReport(request: $_model.GetInspectionReportRequest): Promise<$_model.GetInspectionReportResponse>;
    /**
     * Queries the details of specific conversation messages.
     *
     * @param request - GetMessagesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetMessagesResponse
     */
    getMessagesWithOptions(request: $_model.GetMessagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMessagesResponse>;
    /**
     * Queries the details of specific conversation messages.
     *
     * @param request - GetMessagesRequest
     * @returns GetMessagesResponse
     */
    getMessages(request: $_model.GetMessagesRequest): Promise<$_model.GetMessagesResponse>;
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
    getModelOperatorOrderWithOptions(request: $_model.GetModelOperatorOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetModelOperatorOrderResponse>;
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
    getModelOperatorOrder(request: $_model.GetModelOperatorOrderRequest): Promise<$_model.GetModelOperatorOrderResponse>;
    /**
     * Queries the list of all instance IDs included in a specified scheduled inspection configuration.
     *
     * @param request - GetScheduledInstancesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetScheduledInstancesResponse
     */
    getScheduledInstancesWithOptions(request: $_model.GetScheduledInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetScheduledInstancesResponse>;
    /**
     * Queries the list of all instance IDs included in a specified scheduled inspection configuration.
     *
     * @param request - GetScheduledInstancesRequest
     * @returns GetScheduledInstancesResponse
     */
    getScheduledInstances(request: $_model.GetScheduledInstancesRequest): Promise<$_model.GetScheduledInstancesResponse>;
    /**
     * Queries all inspection reports for a specified scheduled task. Supports filtering by time range and pagination.
     *
     * @param request - GetScheduledReportsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetScheduledReportsResponse
     */
    getScheduledReportsWithOptions(request: $_model.GetScheduledReportsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetScheduledReportsResponse>;
    /**
     * Queries all inspection reports for a specified scheduled task. Supports filtering by time range and pagination.
     *
     * @param request - GetScheduledReportsRequest
     * @returns GetScheduledReportsResponse
     */
    getScheduledReports(request: $_model.GetScheduledReportsRequest): Promise<$_model.GetScheduledReportsResponse>;
    /**
     * Retrieves the details of a specified skill. You can retrieve your own skills or system preset skills.
     *
     * @param request - GetSkillRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetSkillResponse
     */
    getSkillWithOptions(request: $_model.GetSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSkillResponse>;
    /**
     * Retrieves the details of a specified skill. You can retrieve your own skills or system preset skills.
     *
     * @param request - GetSkillRequest
     * @returns GetSkillResponse
     */
    getSkill(request: $_model.GetSkillRequest): Promise<$_model.GetSkillResponse>;
    /**
     * Queries the list of individual inspection reports for all non-scheduled tasks under a specified user, with pagination support.
     *
     * @param request - GetStandAloneReportsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetStandAloneReportsResponse
     */
    getStandAloneReportsWithOptions(request: $_model.GetStandAloneReportsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStandAloneReportsResponse>;
    /**
     * Queries the list of individual inspection reports for all non-scheduled tasks under a specified user, with pagination support.
     *
     * @param request - GetStandAloneReportsRequest
     * @returns GetStandAloneReportsResponse
     */
    getStandAloneReports(request: $_model.GetStandAloneReportsRequest): Promise<$_model.GetStandAloneReportsResponse>;
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
    listApiKeysWithOptions(request: $_model.ListApiKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApiKeysResponse>;
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
    listApiKeys(request: $_model.ListApiKeysRequest): Promise<$_model.ListApiKeysResponse>;
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
    listContextDatabaseApiKeysWithOptions(request: $_model.ListContextDatabaseApiKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListContextDatabaseApiKeysResponse>;
    /**
     * Lists the API keys for a context database.
     *
     * @remarks
     * Lists the API keys under a specified member. The plaintext key values are not returned.
     *
     * @param request - ListContextDatabaseApiKeysRequest
     * @returns ListContextDatabaseApiKeysResponse
     */
    listContextDatabaseApiKeys(request: $_model.ListContextDatabaseApiKeysRequest): Promise<$_model.ListContextDatabaseApiKeysResponse>;
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
    listContextDatabaseMembersWithOptions(request: $_model.ListContextDatabaseMembersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListContextDatabaseMembersResponse>;
    /**
     * Lists context database members.
     *
     * @remarks
     * Lists all members in a specified workspace. Each member includes a list of API keys (plaintext values are not returned).
     *
     * @param request - ListContextDatabaseMembersRequest
     * @returns ListContextDatabaseMembersResponse
     */
    listContextDatabaseMembers(request: $_model.ListContextDatabaseMembersRequest): Promise<$_model.ListContextDatabaseMembersResponse>;
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
    listContextDatabaseSyncConnectionsWithOptions(request: $_model.ListContextDatabaseSyncConnectionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListContextDatabaseSyncConnectionsResponse>;
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
    listContextDatabaseSyncConnections(request: $_model.ListContextDatabaseSyncConnectionsRequest): Promise<$_model.ListContextDatabaseSyncConnectionsResponse>;
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
    listContextDatabaseSyncJobDocumentsWithOptions(request: $_model.ListContextDatabaseSyncJobDocumentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListContextDatabaseSyncJobDocumentsResponse>;
    /**
     * Lists the documents associated with an import task.
     *
     * @remarks
     * By default, this operation returns paginated results. The Page and PageSize parameters are optional. The Data field in the response is returned as an array, and the Total field indicates the total number of matching entries.
     *
     * @param request - ListContextDatabaseSyncJobDocumentsRequest
     * @returns ListContextDatabaseSyncJobDocumentsResponse
     */
    listContextDatabaseSyncJobDocuments(request: $_model.ListContextDatabaseSyncJobDocumentsRequest): Promise<$_model.ListContextDatabaseSyncJobDocumentsResponse>;
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
    listContextDatabaseSyncJobExclusionsWithOptions(request: $_model.ListContextDatabaseSyncJobExclusionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListContextDatabaseSyncJobExclusionsResponse>;
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
    listContextDatabaseSyncJobExclusions(request: $_model.ListContextDatabaseSyncJobExclusionsRequest): Promise<$_model.ListContextDatabaseSyncJobExclusionsResponse>;
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
    listContextDatabaseSyncJobsWithOptions(request: $_model.ListContextDatabaseSyncJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListContextDatabaseSyncJobsResponse>;
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
    listContextDatabaseSyncJobs(request: $_model.ListContextDatabaseSyncJobsRequest): Promise<$_model.ListContextDatabaseSyncJobsResponse>;
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
    listContextDatabaseSyncPluginsWithOptions(request: $_model.ListContextDatabaseSyncPluginsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListContextDatabaseSyncPluginsResponse>;
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
    listContextDatabaseSyncPlugins(request: $_model.ListContextDatabaseSyncPluginsRequest): Promise<$_model.ListContextDatabaseSyncPluginsResponse>;
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
    listContextDatabaseSyncRunItemsWithOptions(request: $_model.ListContextDatabaseSyncRunItemsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListContextDatabaseSyncRunItemsResponse>;
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
    listContextDatabaseSyncRunItems(request: $_model.ListContextDatabaseSyncRunItemsRequest): Promise<$_model.ListContextDatabaseSyncRunItemsResponse>;
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
    listContextDatabaseSyncRunLogsWithOptions(request: $_model.ListContextDatabaseSyncRunLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListContextDatabaseSyncRunLogsResponse>;
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
    listContextDatabaseSyncRunLogs(request: $_model.ListContextDatabaseSyncRunLogsRequest): Promise<$_model.ListContextDatabaseSyncRunLogsResponse>;
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
    listContextDatabaseSyncRunsWithOptions(request: $_model.ListContextDatabaseSyncRunsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListContextDatabaseSyncRunsResponse>;
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
    listContextDatabaseSyncRuns(request: $_model.ListContextDatabaseSyncRunsRequest): Promise<$_model.ListContextDatabaseSyncRunsResponse>;
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
    listContextDatabaseSyncSourceTreeNodesWithOptions(request: $_model.ListContextDatabaseSyncSourceTreeNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListContextDatabaseSyncSourceTreeNodesResponse>;
    /**
     * Lists the discovered tree nodes for the data selection scope.
     *
     * @remarks
     * List operations return paginated results by default. Page and PageSize are optional parameters. The Data list field in the response is returned as an array, and Total indicates the total number of entries that meet the conditions.
     *
     * @param request - ListContextDatabaseSyncSourceTreeNodesRequest
     * @returns ListContextDatabaseSyncSourceTreeNodesResponse
     */
    listContextDatabaseSyncSourceTreeNodes(request: $_model.ListContextDatabaseSyncSourceTreeNodesRequest): Promise<$_model.ListContextDatabaseSyncSourceTreeNodesResponse>;
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
    listContextDatabaseSyncSourcesWithOptions(request: $_model.ListContextDatabaseSyncSourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListContextDatabaseSyncSourcesResponse>;
    /**
     * Lists the data selection scopes.
     *
     * @remarks
     * By default, the list operation returns paginated results. Page and PageSize are optional parameters. The Data list field in the response is returned as an array, and Total indicates the total number of entries that meet the conditions.
     *
     * @param request - ListContextDatabaseSyncSourcesRequest
     * @returns ListContextDatabaseSyncSourcesResponse
     */
    listContextDatabaseSyncSources(request: $_model.ListContextDatabaseSyncSourcesRequest): Promise<$_model.ListContextDatabaseSyncSourcesResponse>;
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
    listContextDatabaseWorkspacesWithOptions(request: $_model.ListContextDatabaseWorkspacesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListContextDatabaseWorkspacesResponse>;
    /**
     * Lists ContextDB workspaces.
     *
     * @remarks
     * Lists ContextDB workspaces.
     *
     * @param request - ListContextDatabaseWorkspacesRequest
     * @returns ListContextDatabaseWorkspacesResponse
     */
    listContextDatabaseWorkspaces(request: $_model.ListContextDatabaseWorkspacesRequest): Promise<$_model.ListContextDatabaseWorkspacesResponse>;
    /**
     * Queries the list of dedicated agents created by the user.
     *
     * @param request - ListCustomAgentRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListCustomAgentResponse
     */
    listCustomAgentWithOptions(request: $_model.ListCustomAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomAgentResponse>;
    /**
     * Queries the list of dedicated agents created by the user.
     *
     * @param request - ListCustomAgentRequest
     * @returns ListCustomAgentResponse
     */
    listCustomAgent(request: $_model.ListCustomAgentRequest): Promise<$_model.ListCustomAgentResponse>;
    /**
     * Queries the list of Agent tools for a user.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListCustomAgentToolsResponse
     */
    listCustomAgentToolsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomAgentToolsResponse>;
    /**
     * Queries the list of Agent tools for a user.
     * @returns ListCustomAgentToolsResponse
     */
    listCustomAgentTools(): Promise<$_model.ListCustomAgentToolsResponse>;
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
    listLLMTokenUsageWithOptions(request: $_model.ListLLMTokenUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLLMTokenUsageResponse>;
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
    listLLMTokenUsage(request: $_model.ListLLMTokenUsageRequest): Promise<$_model.ListLLMTokenUsageResponse>;
    /**
     * Queries the list of basic information about all inspection configurations under a specified user UID.
     *
     * @param request - ListScheduledTasksRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListScheduledTasksResponse
     */
    listScheduledTasksWithOptions(request: $_model.ListScheduledTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListScheduledTasksResponse>;
    /**
     * Queries the list of basic information about all inspection configurations under a specified user UID.
     *
     * @param request - ListScheduledTasksRequest
     * @returns ListScheduledTasksResponse
     */
    listScheduledTasks(request: $_model.ListScheduledTasksRequest): Promise<$_model.ListScheduledTasksResponse>;
    /**
     * Retrieves the custom skills of the current user and all system-preset skills.
     *
     * @param request - ListSkillRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListSkillResponse
     */
    listSkillWithOptions(request: $_model.ListSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSkillResponse>;
    /**
     * Retrieves the custom skills of the current user and all system-preset skills.
     *
     * @param request - ListSkillRequest
     * @returns ListSkillResponse
     */
    listSkill(request: $_model.ListSkillRequest): Promise<$_model.ListSkillResponse>;
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
    modifyAppInstanceWithOptions(tmpReq: $_model.ModifyAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAppInstanceResponse>;
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
    modifyAppInstance(request: $_model.ModifyAppInstanceRequest): Promise<$_model.ModifyAppInstanceResponse>;
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
    modifyInstanceAuthConfigWithOptions(tmpReq: $_model.ModifyInstanceAuthConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceAuthConfigResponse>;
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
    modifyInstanceAuthConfig(request: $_model.ModifyInstanceAuthConfigRequest): Promise<$_model.ModifyInstanceAuthConfigResponse>;
    /**
     * Modifies the general configurations of an instance, such as Elastic IP (EIP) and NAT configurations.
     *
     * @param request - ModifyInstanceConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyInstanceConfigResponse
     */
    modifyInstanceConfigWithOptions(request: $_model.ModifyInstanceConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceConfigResponse>;
    /**
     * Modifies the general configurations of an instance, such as Elastic IP (EIP) and NAT configurations.
     *
     * @param request - ModifyInstanceConfigRequest
     * @returns ModifyInstanceConfigResponse
     */
    modifyInstanceConfig(request: $_model.ModifyInstanceConfigRequest): Promise<$_model.ModifyInstanceConfigResponse>;
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
    modifyInstanceIpWhitelistWithOptions(request: $_model.ModifyInstanceIpWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceIpWhitelistResponse>;
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
    modifyInstanceIpWhitelist(request: $_model.ModifyInstanceIpWhitelistRequest): Promise<$_model.ModifyInstanceIpWhitelistResponse>;
    /**
     * Modifies the RAG Agent configuration of an ApsaraDB RDS AI application instance.
     *
     * @param tmpReq - ModifyInstanceRAGConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyInstanceRAGConfigResponse
     */
    modifyInstanceRAGConfigWithOptions(tmpReq: $_model.ModifyInstanceRAGConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceRAGConfigResponse>;
    /**
     * Modifies the RAG Agent configuration of an ApsaraDB RDS AI application instance.
     *
     * @param request - ModifyInstanceRAGConfigRequest
     * @returns ModifyInstanceRAGConfigResponse
     */
    modifyInstanceRAGConfig(request: $_model.ModifyInstanceRAGConfigRequest): Promise<$_model.ModifyInstanceRAGConfigResponse>;
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
    modifyInstanceSSLWithOptions(request: $_model.ModifyInstanceSSLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceSSLResponse>;
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
    modifyInstanceSSL(request: $_model.ModifyInstanceSSLRequest): Promise<$_model.ModifyInstanceSSLResponse>;
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
    modifyInstanceStorageConfigWithOptions(tmpReq: $_model.ModifyInstanceStorageConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceStorageConfigResponse>;
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
    modifyInstanceStorageConfig(request: $_model.ModifyInstanceStorageConfigRequest): Promise<$_model.ModifyInstanceStorageConfigResponse>;
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
    modifyInstancesSSLWithOptions(tmpReq: $_model.ModifyInstancesSSLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstancesSSLResponse>;
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
    modifyInstancesSSL(request: $_model.ModifyInstancesSSLRequest): Promise<$_model.ModifyInstancesSSLResponse>;
    /**
     * Modifies message feedback.
     *
     * @param request - ModifyMessagesFeedbacksRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyMessagesFeedbacksResponse
     */
    modifyMessagesFeedbacksWithOptions(request: $_model.ModifyMessagesFeedbacksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMessagesFeedbacksResponse>;
    /**
     * Modifies message feedback.
     *
     * @param request - ModifyMessagesFeedbacksRequest
     * @returns ModifyMessagesFeedbacksResponse
     */
    modifyMessagesFeedbacks(request: $_model.ModifyMessagesFeedbacksRequest): Promise<$_model.ModifyMessagesFeedbacksResponse>;
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
    modifySandboxTemplateWithOptions(tmpReq: $_model.ModifySandboxTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySandboxTemplateResponse>;
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
    modifySandboxTemplate(request: $_model.ModifySandboxTemplateRequest): Promise<$_model.ModifySandboxTemplateResponse>;
    /**
     * Modifies an existing inspection configuration.
     *
     * @param request - ModifyScheduledTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyScheduledTaskResponse
     */
    modifyScheduledTaskWithOptions(request: $_model.ModifyScheduledTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyScheduledTaskResponse>;
    /**
     * Modifies an existing inspection configuration.
     *
     * @param request - ModifyScheduledTaskRequest
     * @returns ModifyScheduledTaskResponse
     */
    modifyScheduledTask(request: $_model.ModifyScheduledTaskRequest): Promise<$_model.ModifyScheduledTaskResponse>;
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
    modifyWhitelistIpsWithOptions(request: $_model.ModifyWhitelistIpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyWhitelistIpsResponse>;
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
    modifyWhitelistIps(request: $_model.ModifyWhitelistIpsRequest): Promise<$_model.ModifyWhitelistIpsResponse>;
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
    removeContextDatabaseSyncJobExclusionWithOptions(request: $_model.RemoveContextDatabaseSyncJobExclusionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveContextDatabaseSyncJobExclusionResponse>;
    /**
     * Deletes an exclusion item for an import job.
     *
     * @remarks
     * Deletes an exclusion item for a job.
     *
     * @param request - RemoveContextDatabaseSyncJobExclusionRequest
     * @returns RemoveContextDatabaseSyncJobExclusionResponse
     */
    removeContextDatabaseSyncJobExclusion(request: $_model.RemoveContextDatabaseSyncJobExclusionRequest): Promise<$_model.RemoveContextDatabaseSyncJobExclusionResponse>;
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
    renameApiKeyWithOptions(request: $_model.RenameApiKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenameApiKeyResponse>;
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
    renameApiKey(request: $_model.RenameApiKeyRequest): Promise<$_model.RenameApiKeyResponse>;
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
    resetApiKeyWithOptions(request: $_model.ResetApiKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetApiKeyResponse>;
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
    resetApiKey(request: $_model.ResetApiKeyRequest): Promise<$_model.ResetApiKeyResponse>;
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
    resetInstanceKeysWithOptions(request: $_model.ResetInstanceKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetInstanceKeysResponse>;
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
    resetInstanceKeys(request: $_model.ResetInstanceKeysRequest): Promise<$_model.ResetInstanceKeysResponse>;
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
    resetInstancePasswordWithOptions(request: $_model.ResetInstancePasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetInstancePasswordResponse>;
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
    resetInstancePassword(request: $_model.ResetInstancePasswordRequest): Promise<$_model.ResetInstancePasswordResponse>;
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
    restartInstanceWithOptions(request: $_model.RestartInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartInstanceResponse>;
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
    restartInstance(request: $_model.RestartInstanceRequest): Promise<$_model.RestartInstanceResponse>;
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
    retryFailedContextDatabaseSyncRunWithOptions(request: $_model.RetryFailedContextDatabaseSyncRunRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RetryFailedContextDatabaseSyncRunResponse>;
    /**
     * Retries failed items based on a snapshot.
     *
     * @remarks
     * For write operations, you can pass a ClientToken to ensure idempotence. If not provided, the backend automatically generates one. The retry generates a new run based on the failed items, and the status of the original run remains unchanged.
     *
     * @param request - RetryFailedContextDatabaseSyncRunRequest
     * @returns RetryFailedContextDatabaseSyncRunResponse
     */
    retryFailedContextDatabaseSyncRun(request: $_model.RetryFailedContextDatabaseSyncRunRequest): Promise<$_model.RetryFailedContextDatabaseSyncRunResponse>;
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
    revokeContextDatabaseApiKeyWithOptions(request: $_model.RevokeContextDatabaseApiKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeContextDatabaseApiKeyResponse>;
    /**
     * Revokes an API key for a context database.
     *
     * @remarks
     * Revokes an API key.
     *
     * @param request - RevokeContextDatabaseApiKeyRequest
     * @returns RevokeContextDatabaseApiKeyResponse
     */
    revokeContextDatabaseApiKey(request: $_model.RevokeContextDatabaseApiKeyRequest): Promise<$_model.RevokeContextDatabaseApiKeyResponse>;
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
    startContextDatabaseSyncRunWithOptions(request: $_model.StartContextDatabaseSyncRunRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartContextDatabaseSyncRunResponse>;
    /**
     * Manually triggers a run.
     *
     * @remarks
     * Write operations support idempotence by passing a ClientToken. If no ClientToken is provided, the backend generates one automatically.
     *
     * @param request - StartContextDatabaseSyncRunRequest
     * @returns StartContextDatabaseSyncRunResponse
     */
    startContextDatabaseSyncRun(request: $_model.StartContextDatabaseSyncRunRequest): Promise<$_model.StartContextDatabaseSyncRunResponse>;
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
    startContextDatabaseSyncSourceDiscoveryWithOptions(request: $_model.StartContextDatabaseSyncSourceDiscoveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartContextDatabaseSyncSourceDiscoveryResponse>;
    /**
     * Initiates a snapshot discovery task for data selection scope configuration.
     *
     * @remarks
     * Write operations support idempotence by passing a ClientToken. If no ClientToken is provided, the backend generates one automatically. Discovery is an asynchronous operation. The operation returns a discovery task identifier. Poll for results to retrieve SelectedNodeKeys.
     *
     * @param request - StartContextDatabaseSyncSourceDiscoveryRequest
     * @returns StartContextDatabaseSyncSourceDiscoveryResponse
     */
    startContextDatabaseSyncSourceDiscovery(request: $_model.StartContextDatabaseSyncSourceDiscoveryRequest): Promise<$_model.StartContextDatabaseSyncSourceDiscoveryResponse>;
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
    startInstanceWithOptions(request: $_model.StartInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartInstanceResponse>;
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
    startInstance(request: $_model.StartInstanceRequest): Promise<$_model.StartInstanceResponse>;
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
    stopInstanceWithOptions(request: $_model.StopInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopInstanceResponse>;
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
    stopInstance(request: $_model.StopInstanceRequest): Promise<$_model.StopInstanceResponse>;
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
    updateApiKeyQuotaWithOptions(tmpReq: $_model.UpdateApiKeyQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApiKeyQuotaResponse>;
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
    updateApiKeyQuota(request: $_model.UpdateApiKeyQuotaRequest): Promise<$_model.UpdateApiKeyQuotaResponse>;
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
    updateContextDatabaseApiKeyWithOptions(request: $_model.UpdateContextDatabaseApiKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateContextDatabaseApiKeyResponse>;
    /**
     * Updates the API key of a context database.
     *
     * @remarks
     * Updates the display metadata of an API key. At least one of Name or Description must be specified. The plaintext key is not reissued.
     *
     * @param request - UpdateContextDatabaseApiKeyRequest
     * @returns UpdateContextDatabaseApiKeyResponse
     */
    updateContextDatabaseApiKey(request: $_model.UpdateContextDatabaseApiKeyRequest): Promise<$_model.UpdateContextDatabaseApiKeyResponse>;
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
    updateContextDatabaseMemberWithOptions(request: $_model.UpdateContextDatabaseMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateContextDatabaseMemberResponse>;
    /**
     * Updates a context database member.
     *
     * @remarks
     * Updates the role or status of a member.
     *
     * @param request - UpdateContextDatabaseMemberRequest
     * @returns UpdateContextDatabaseMemberResponse
     */
    updateContextDatabaseMember(request: $_model.UpdateContextDatabaseMemberRequest): Promise<$_model.UpdateContextDatabaseMemberResponse>;
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
    updateContextDatabaseSyncConnectionWithOptions(request: $_model.UpdateContextDatabaseSyncConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateContextDatabaseSyncConnectionResponse>;
    /**
     * Updates the metadata of a data source.
     *
     * @remarks
     * For write operations, you can specify a ClientToken to ensure idempotence. If you do not specify it, the backend automatically generates one.
     *
     * @param request - UpdateContextDatabaseSyncConnectionRequest
     * @returns UpdateContextDatabaseSyncConnectionResponse
     */
    updateContextDatabaseSyncConnection(request: $_model.UpdateContextDatabaseSyncConnectionRequest): Promise<$_model.UpdateContextDatabaseSyncConnectionResponse>;
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
    updateContextDatabaseSyncConnectionCredentialWithOptions(tmpReq: $_model.UpdateContextDatabaseSyncConnectionCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateContextDatabaseSyncConnectionCredentialResponse>;
    /**
     * Rotates the credentials of a data source individually.
     *
     * @remarks
     * You can specify the ClientToken parameter to ensure idempotence for write operations. If you do not specify this parameter, the backend automatically generates one.
     *
     * @param request - UpdateContextDatabaseSyncConnectionCredentialRequest
     * @returns UpdateContextDatabaseSyncConnectionCredentialResponse
     */
    updateContextDatabaseSyncConnectionCredential(request: $_model.UpdateContextDatabaseSyncConnectionCredentialRequest): Promise<$_model.UpdateContextDatabaseSyncConnectionCredentialResponse>;
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
    updateContextDatabaseSyncJobWithOptions(tmpReq: $_model.UpdateContextDatabaseSyncJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateContextDatabaseSyncJobResponse>;
    /**
     * Updates the metadata of an import task.
     *
     * @remarks
     * For write operations, you can pass in a ClientToken to ensure idempotency. If it is not provided, the backend automatically generates one. Target is an implicit concept. The invoker only needs to pass in the KnowledgeBaseId, and the backend performs automatic creation or matching of the target.
     *
     * @param request - UpdateContextDatabaseSyncJobRequest
     * @returns UpdateContextDatabaseSyncJobResponse
     */
    updateContextDatabaseSyncJob(request: $_model.UpdateContextDatabaseSyncJobRequest): Promise<$_model.UpdateContextDatabaseSyncJobResponse>;
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
    updateContextDatabaseSyncJobScheduleWithOptions(tmpReq: $_model.UpdateContextDatabaseSyncJobScheduleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateContextDatabaseSyncJobScheduleResponse>;
    /**
     * Updates the scheduling configuration of an import task.
     *
     * @remarks
     * You can specify a ClientToken for write operations to ensure idempotence. If no ClientToken is provided, the backend automatically generates one.
     *
     * @param request - UpdateContextDatabaseSyncJobScheduleRequest
     * @returns UpdateContextDatabaseSyncJobScheduleResponse
     */
    updateContextDatabaseSyncJobSchedule(request: $_model.UpdateContextDatabaseSyncJobScheduleRequest): Promise<$_model.UpdateContextDatabaseSyncJobScheduleResponse>;
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
    updateContextDatabaseSyncSourceWithOptions(tmpReq: $_model.UpdateContextDatabaseSyncSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateContextDatabaseSyncSourceResponse>;
    /**
     * Updates the metadata of a data selection scope.
     *
     * @remarks
     * Write operations support idempotence via ClientToken. If ClientToken is not provided, the backend generates one automatically.
     *
     * @param request - UpdateContextDatabaseSyncSourceRequest
     * @returns UpdateContextDatabaseSyncSourceResponse
     */
    updateContextDatabaseSyncSource(request: $_model.UpdateContextDatabaseSyncSourceRequest): Promise<$_model.UpdateContextDatabaseSyncSourceResponse>;
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
    updateContextDatabaseSyncSourceSelectionWithOptions(tmpReq: $_model.UpdateContextDatabaseSyncSourceSelectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateContextDatabaseSyncSourceSelectionResponse>;
    /**
     * Updates the explicit node selection for the data selection scope.
     *
     * @remarks
     * For write operations, you can pass the ClientToken parameter to ensure idempotency. If this parameter is not provided, the backend automatically generates one.
     *
     * @param request - UpdateContextDatabaseSyncSourceSelectionRequest
     * @returns UpdateContextDatabaseSyncSourceSelectionResponse
     */
    updateContextDatabaseSyncSourceSelection(request: $_model.UpdateContextDatabaseSyncSourceSelectionRequest): Promise<$_model.UpdateContextDatabaseSyncSourceSelectionResponse>;
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
    updateContextDatabaseWorkspaceWithOptions(request: $_model.UpdateContextDatabaseWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateContextDatabaseWorkspaceResponse>;
    /**
     * Updates a ContextDB workspace.
     *
     * @remarks
     * Modifies the name of a workspace.
     *
     * @param request - UpdateContextDatabaseWorkspaceRequest
     * @returns UpdateContextDatabaseWorkspaceResponse
     */
    updateContextDatabaseWorkspace(request: $_model.UpdateContextDatabaseWorkspaceRequest): Promise<$_model.UpdateContextDatabaseWorkspaceResponse>;
    /**
     * Updates a custom agent.
     *
     * @param tmpReq - UpdateCustomAgentRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateCustomAgentResponse
     */
    updateCustomAgentWithOptions(tmpReq: $_model.UpdateCustomAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCustomAgentResponse>;
    /**
     * Updates a custom agent.
     *
     * @param request - UpdateCustomAgentRequest
     * @returns UpdateCustomAgentResponse
     */
    updateCustomAgent(request: $_model.UpdateCustomAgentRequest): Promise<$_model.UpdateCustomAgentResponse>;
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
    updateMOQuotaAlertThresholdWithOptions(tmpReq: $_model.UpdateMOQuotaAlertThresholdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMOQuotaAlertThresholdResponse>;
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
    updateMOQuotaAlertThreshold(request: $_model.UpdateMOQuotaAlertThresholdRequest): Promise<$_model.UpdateMOQuotaAlertThresholdResponse>;
    /**
     * Updates the information of a specified Skill.
     *
     * @param tmpReq - UpdateSkillRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateSkillResponse
     */
    updateSkillWithOptions(tmpReq: $_model.UpdateSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSkillResponse>;
    /**
     * Updates the information of a specified Skill.
     *
     * @param request - UpdateSkillRequest
     * @returns UpdateSkillResponse
     */
    updateSkill(request: $_model.UpdateSkillRequest): Promise<$_model.UpdateSkillResponse>;
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
    verifyContextDatabaseSyncConnectionWithOptions(request: $_model.VerifyContextDatabaseSyncConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyContextDatabaseSyncConnectionResponse>;
    /**
     * Validates datasource credentials and authorization.
     *
     * @remarks
     * Validates the connection credentials and authorization.
     *
     * @param request - VerifyContextDatabaseSyncConnectionRequest
     * @returns VerifyContextDatabaseSyncConnectionResponse
     */
    verifyContextDatabaseSyncConnection(request: $_model.VerifyContextDatabaseSyncConnectionRequest): Promise<$_model.VerifyContextDatabaseSyncConnectionResponse>;
}
