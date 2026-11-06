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
     * Aborts an upgrade or migration task.
     *
     * @remarks
     * - Aborts an upgrade or migration task.
     * > Before you call this operation, create an upgrade task for the cluster by calling the [CreateDBCluster](https://help.aliyun.com/document_detail/98169.html) operation and setting the **CreationOption** parameter to **MigrationFromRDS**. For more information, see [Upgrade an ApsaraDB RDS for MySQL instance to a PolarDB for MySQL cluster](https://help.aliyun.com/document_detail/121582.html).
     *
     * @param request - AbortDBClusterMigrationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AbortDBClusterMigrationResponse
     */
    abortDBClusterMigrationWithOptions(request: $_model.AbortDBClusterMigrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AbortDBClusterMigrationResponse>;
    /**
     * Aborts an upgrade or migration task.
     *
     * @remarks
     * - Aborts an upgrade or migration task.
     * > Before you call this operation, create an upgrade task for the cluster by calling the [CreateDBCluster](https://help.aliyun.com/document_detail/98169.html) operation and setting the **CreationOption** parameter to **MigrationFromRDS**. For more information, see [Upgrade an ApsaraDB RDS for MySQL instance to a PolarDB for MySQL cluster](https://help.aliyun.com/document_detail/121582.html).
     *
     * @param request - AbortDBClusterMigrationRequest
     * @returns AbortDBClusterMigrationResponse
     */
    abortDBClusterMigration(request: $_model.AbortDBClusterMigrationRequest): Promise<$_model.AbortDBClusterMigrationResponse>;
    /**
     * Grants permissions to a role.
     *
     * @param request - AddEncryptionDBRolePrivilegeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AddEncryptionDBRolePrivilegeResponse
     */
    addEncryptionDBRolePrivilegeWithOptions(request: $_model.AddEncryptionDBRolePrivilegeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddEncryptionDBRolePrivilegeResponse>;
    /**
     * Grants permissions to a role.
     *
     * @param request - AddEncryptionDBRolePrivilegeRequest
     * @returns AddEncryptionDBRolePrivilegeResponse
     */
    addEncryptionDBRolePrivilege(request: $_model.AddEncryptionDBRolePrivilegeRequest): Promise<$_model.AddEncryptionDBRolePrivilegeResponse>;
    /**
     * Adds SQL firewall rules.
     *
     * @param request - AddFirewallRulesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AddFirewallRulesResponse
     */
    addFirewallRulesWithOptions(request: $_model.AddFirewallRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddFirewallRulesResponse>;
    /**
     * Adds SQL firewall rules.
     *
     * @param request - AddFirewallRulesRequest
     * @returns AddFirewallRulesResponse
     */
    addFirewallRules(request: $_model.AddFirewallRulesRequest): Promise<$_model.AddFirewallRulesResponse>;
    /**
     * Adds an MCP server to a specified PolarClaw application.
     *
     * @remarks
     * ## Request description
     * - `ApplicationId` and `ServerName` are required query parameters.
     * - `ApplicationId` specifies the ID of the application program to operate on.
     * - `ServerName` specifies the name of the MCP server to add.
     * - A successful response returns the request ID, message, status code, application program ID, and server name.
     * - In case of a failed request, a 500 error code may be returned, along with a specific error message describing the fault.
     *
     * @param tmpReq - AddPolarClawMCPServerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AddPolarClawMCPServerResponse
     */
    addPolarClawMCPServerWithOptions(tmpReq: $_model.AddPolarClawMCPServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddPolarClawMCPServerResponse>;
    /**
     * Adds an MCP server to a specified PolarClaw application.
     *
     * @remarks
     * ## Request description
     * - `ApplicationId` and `ServerName` are required query parameters.
     * - `ApplicationId` specifies the ID of the application program to operate on.
     * - `ServerName` specifies the name of the MCP server to add.
     * - A successful response returns the request ID, message, status code, application program ID, and server name.
     * - In case of a failed request, a 500 error code may be returned, along with a specific error message describing the fault.
     *
     * @param request - AddPolarClawMCPServerRequest
     * @returns AddPolarClawMCPServerResponse
     */
    addPolarClawMCPServer(request: $_model.AddPolarClawMCPServerRequest): Promise<$_model.AddPolarClawMCPServerResponse>;
    /**
     * Adds a transparent acceleration path.
     *
     * @remarks
     * Adds a transparent acceleration path for a PolarFS instance. Before you call this operation, make sure that you have a running PolarDB cluster, a valid OSS bucket in the same region, and a PolarFS instance of the basic type with acceleration enabled. The bucket endpoint format is {bucket-name}.oss-{regionId}-internal.aliyuncs.com. This operation is not applicable to instances of the cold type or instances with acceleration disabled. You can call the DescribePolarFs and DescribePolarFsAttribute operations to verify the instance type and acceleration status.
     *
     * @param request - AddPolarFsPathMappingRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AddPolarFsPathMappingResponse
     */
    addPolarFsPathMappingWithOptions(request: $_model.AddPolarFsPathMappingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddPolarFsPathMappingResponse>;
    /**
     * Adds a transparent acceleration path.
     *
     * @remarks
     * Adds a transparent acceleration path for a PolarFS instance. Before you call this operation, make sure that you have a running PolarDB cluster, a valid OSS bucket in the same region, and a PolarFS instance of the basic type with acceleration enabled. The bucket endpoint format is {bucket-name}.oss-{regionId}-internal.aliyuncs.com. This operation is not applicable to instances of the cold type or instances with acceleration disabled. You can call the DescribePolarFs and DescribePolarFsAttribute operations to verify the instance type and acceleration status.
     *
     * @param request - AddPolarFsPathMappingRequest
     * @returns AddPolarFsPathMappingResponse
     */
    addPolarFsPathMapping(request: $_model.AddPolarFsPathMappingRequest): Promise<$_model.AddPolarFsPathMappingResponse>;
    /**
     * Adds a new directory quota rule to a Polarlakebase instance.
     *
     * @remarks
     * ## Request description
     * - This operation adds a new path policy—a directory quota rule—to a specified Polarlakebase instance.
     * - The `Quotas` parameter is a list. Each element represents a new quota rule. You can add up to 11 rules in a single request.
     * - Each rule must include the `Name` and `Include` fields. Other fields, such as `Description` and `Exclude`, are optional.
     * - To define the quota limit, specify at least one of the following parameters: `SizeLimit`, `FileCountLimit`, `AccessTTL`, or `ChangeTTL`.
     * - The `Priority` field specifies the rule priority. A larger value indicates higher priority. The default value is 0.
     * - The `Enabled` field determines whether the rule takes effect immediately. The default value is true.
     *
     * @param request - AddPolarFsQuotaRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AddPolarFsQuotaResponse
     */
    addPolarFsQuotaWithOptions(request: $_model.AddPolarFsQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddPolarFsQuotaResponse>;
    /**
     * Adds a new directory quota rule to a Polarlakebase instance.
     *
     * @remarks
     * ## Request description
     * - This operation adds a new path policy—a directory quota rule—to a specified Polarlakebase instance.
     * - The `Quotas` parameter is a list. Each element represents a new quota rule. You can add up to 11 rules in a single request.
     * - Each rule must include the `Name` and `Include` fields. Other fields, such as `Description` and `Exclude`, are optional.
     * - To define the quota limit, specify at least one of the following parameters: `SizeLimit`, `FileCountLimit`, `AccessTTL`, or `ChangeTTL`.
     * - The `Priority` field specifies the rule priority. A larger value indicates higher priority. The default value is 0.
     * - The `Enabled` field determines whether the rule takes effect immediately. The default value is true.
     *
     * @param request - AddPolarFsQuotaRequest
     * @returns AddPolarFsQuotaResponse
     */
    addPolarFsQuota(request: $_model.AddPolarFsQuotaRequest): Promise<$_model.AddPolarFsQuotaResponse>;
    /**
     * Adds authorized accounts for cold storage.
     *
     * @param request - AddPolarOSSAuthorizedAccountRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AddPolarOSSAuthorizedAccountResponse
     */
    addPolarOSSAuthorizedAccountWithOptions(request: $_model.AddPolarOSSAuthorizedAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddPolarOSSAuthorizedAccountResponse>;
    /**
     * Adds authorized accounts for cold storage.
     *
     * @param request - AddPolarOSSAuthorizedAccountRequest
     * @returns AddPolarOSSAuthorizedAccountResponse
     */
    addPolarOSSAuthorizedAccount(request: $_model.AddPolarOSSAuthorizedAccountRequest): Promise<$_model.AddPolarOSSAuthorizedAccountResponse>;
    /**
     * Adds SQL throttling rules.
     *
     * @param request - AddSQLRateLimitingRulesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AddSQLRateLimitingRulesResponse
     */
    addSQLRateLimitingRulesWithOptions(request: $_model.AddSQLRateLimitingRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddSQLRateLimitingRulesResponse>;
    /**
     * Adds SQL throttling rules.
     *
     * @param request - AddSQLRateLimitingRulesRequest
     * @returns AddSQLRateLimitingRulesResponse
     */
    addSQLRateLimitingRules(request: $_model.AddSQLRateLimitingRulesRequest): Promise<$_model.AddSQLRateLimitingRulesResponse>;
    /**
     * Answers a single-turn question based on a knowledge base.
     *
     * @param request - AnswerKnowledgeBaseRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AnswerKnowledgeBaseResponse
     */
    answerKnowledgeBaseWithOptions(request: $_model.AnswerKnowledgeBaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AnswerKnowledgeBaseResponse>;
    /**
     * Answers a single-turn question based on a knowledge base.
     *
     * @param request - AnswerKnowledgeBaseRequest
     * @returns AnswerKnowledgeBaseResponse
     */
    answerKnowledgeBase(request: $_model.AnswerKnowledgeBaseRequest): Promise<$_model.AnswerKnowledgeBaseResponse>;
    /**
     * Applies a prompt policy to an instance.
     *
     * @remarks
     * Before you begin: This operation applies only to mem0 applications created by calling CreateApplication with MemApplicationSpec specified. Create a mem0 application, call CreateApplicationPrompt to create a prompt, and then call this operation to apply the prompt policy.
     *
     * @param tmpReq - ApplyApplicationPromptsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ApplyApplicationPromptsResponse
     */
    applyApplicationPromptsWithOptions(tmpReq: $_model.ApplyApplicationPromptsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyApplicationPromptsResponse>;
    /**
     * Applies a prompt policy to an instance.
     *
     * @remarks
     * Before you begin: This operation applies only to mem0 applications created by calling CreateApplication with MemApplicationSpec specified. Create a mem0 application, call CreateApplicationPrompt to create a prompt, and then call this operation to apply the prompt policy.
     *
     * @param request - ApplyApplicationPromptsRequest
     * @returns ApplyApplicationPromptsResponse
     */
    applyApplicationPrompts(request: $_model.ApplyApplicationPromptsRequest): Promise<$_model.ApplyApplicationPromptsResponse>;
    /**
     * Applies a parameter template to Lakebase.
     *
     * @param request - ApplyLakebaseMountParameterGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ApplyLakebaseMountParameterGroupResponse
     */
    applyLakebaseMountParameterGroupWithOptions(request: $_model.ApplyLakebaseMountParameterGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyLakebaseMountParameterGroupResponse>;
    /**
     * Applies a parameter template to Lakebase.
     *
     * @param request - ApplyLakebaseMountParameterGroupRequest
     * @returns ApplyLakebaseMountParameterGroupResponse
     */
    applyLakebaseMountParameterGroup(request: $_model.ApplyLakebaseMountParameterGroupRequest): Promise<$_model.ApplyLakebaseMountParameterGroupResponse>;
    /**
     * Approves PolarClaw device pairing.
     *
     * @param request - ApprovePolarClawDevicePairRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ApprovePolarClawDevicePairResponse
     */
    approvePolarClawDevicePairWithOptions(request: $_model.ApprovePolarClawDevicePairRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApprovePolarClawDevicePairResponse>;
    /**
     * Approves PolarClaw device pairing.
     *
     * @param request - ApprovePolarClawDevicePairRequest
     * @returns ApprovePolarClawDevicePairResponse
     */
    approvePolarClawDevicePair(request: $_model.ApprovePolarClawDevicePairRequest): Promise<$_model.ApprovePolarClawDevicePairResponse>;
    /**
     * Attaches a specified PolarLakeBase cold-storage instance to a PolarDB application.
     *
     * @param request - AttachApplicationPolarFSRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AttachApplicationPolarFSResponse
     */
    attachApplicationPolarFSWithOptions(request: $_model.AttachApplicationPolarFSRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachApplicationPolarFSResponse>;
    /**
     * Attaches a specified PolarLakeBase cold-storage instance to a PolarDB application.
     *
     * @param request - AttachApplicationPolarFSRequest
     * @returns AttachApplicationPolarFSResponse
     */
    attachApplicationPolarFS(request: $_model.AttachApplicationPolarFSRequest): Promise<$_model.AttachApplicationPolarFSResponse>;
    /**
     * Associates a specified channel with a specific PolarClaw agent.
     *
     * @remarks
     * ## Request description
     * This API operation associates a PolarClaw agent (specified by AgentId) of a PolarClaw application (identified by ApplicationId) with a given communication channel (Channel). If necessary, you can also specify the account ID (ChannelAccountId) within the channel.
     *
     * @param request - BindPolarClawAgentRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns BindPolarClawAgentResponse
     */
    bindPolarClawAgentWithOptions(request: $_model.BindPolarClawAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindPolarClawAgentResponse>;
    /**
     * Associates a specified channel with a specific PolarClaw agent.
     *
     * @remarks
     * ## Request description
     * This API operation associates a PolarClaw agent (specified by AgentId) of a PolarClaw application (identified by ApplicationId) with a given communication channel (Channel). If necessary, you can also specify the account ID (ChannelAccountId) within the channel.
     *
     * @param request - BindPolarClawAgentRequest
     * @returns BindPolarClawAgentResponse
     */
    bindPolarClawAgent(request: $_model.BindPolarClawAgentRequest): Promise<$_model.BindPolarClawAgentResponse>;
    /**
     * Binds a specified resource control rule to a user, database, query, or connection in a PolarDB for MySQL cluster. After the binding succeeds, the target object is subject to the CPU quota limit defined by the resource control rule.
     *
     * @remarks
     * Resource Control limits the CPU resources that can be used by specified users, databases, queries, or connections in a PolarDB for MySQL cluster. This release supports creating, modifying, deleting, binding, and unbinding resource control rules. Querying Resource Control CPU usage is not supported.
     * ### Before you begin
     * - This feature applies only to PolarDB for MySQL Cluster Edition clusters that support Resource Control. PolarDB for MySQL Standard Edition is not supported.
     * - The cluster kernel parameter loose_enable_resource_control must be set to ON.
     * >Notice: This is a notice.</notice>
     *
     * @param request - BindResourceControlRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns BindResourceControlResponse
     */
    bindResourceControlWithOptions(request: $_model.BindResourceControlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindResourceControlResponse>;
    /**
     * Binds a specified resource control rule to a user, database, query, or connection in a PolarDB for MySQL cluster. After the binding succeeds, the target object is subject to the CPU quota limit defined by the resource control rule.
     *
     * @remarks
     * Resource Control limits the CPU resources that can be used by specified users, databases, queries, or connections in a PolarDB for MySQL cluster. This release supports creating, modifying, deleting, binding, and unbinding resource control rules. Querying Resource Control CPU usage is not supported.
     * ### Before you begin
     * - This feature applies only to PolarDB for MySQL Cluster Edition clusters that support Resource Control. PolarDB for MySQL Standard Edition is not supported.
     * - The cluster kernel parameter loose_enable_resource_control must be set to ON.
     * >Notice: This is a notice.</notice>
     *
     * @param request - BindResourceControlRequest
     * @returns BindResourceControlResponse
     */
    bindResourceControl(request: $_model.BindResourceControlRequest): Promise<$_model.BindResourceControlResponse>;
    /**
     * Cancels O\\\\\\&M events at a time.
     *
     * @param request - CancelActiveOperationTasksRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CancelActiveOperationTasksResponse
     */
    cancelActiveOperationTasksWithOptions(request: $_model.CancelActiveOperationTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelActiveOperationTasksResponse>;
    /**
     * Cancels O\\\\\\&M events at a time.
     *
     * @param request - CancelActiveOperationTasksRequest
     * @returns CancelActiveOperationTasksResponse
     */
    cancelActiveOperationTasks(request: $_model.CancelActiveOperationTasksRequest): Promise<$_model.CancelActiveOperationTasksResponse>;
    /**
     * Cancels an auto triggered task policy.
     *
     * @param request - CancelCronJobPolicyServerlessRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CancelCronJobPolicyServerlessResponse
     */
    cancelCronJobPolicyServerlessWithOptions(request: $_model.CancelCronJobPolicyServerlessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelCronJobPolicyServerlessResponse>;
    /**
     * Cancels an auto triggered task policy.
     *
     * @param request - CancelCronJobPolicyServerlessRequest
     * @returns CancelCronJobPolicyServerlessResponse
     */
    cancelCronJobPolicyServerless(request: $_model.CancelCronJobPolicyServerlessRequest): Promise<$_model.CancelCronJobPolicyServerlessResponse>;
    /**
     * Deletes quota rules for one or more file paths within a specified Polarlakebase instance.
     *
     * @remarks
     * ## Request description
     * - The `PolarFsInstanceId` parameter is required. It specifies the Polarlakebase instance for the operation.
     * - The `FilePathIds` parameter is required. It accepts a string containing the IDs of the file paths for which you want to delete quota rules. Ensure that each ID is valid and belongs to the specified Polarlakebase instance.
     * - A single API call can delete quotas for multiple file paths. However, limit the number of paths in a single request to avoid performance issues.
     *
     * @param request - CancelPolarFsFileQuotaRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CancelPolarFsFileQuotaResponse
     */
    cancelPolarFsFileQuotaWithOptions(request: $_model.CancelPolarFsFileQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelPolarFsFileQuotaResponse>;
    /**
     * Deletes quota rules for one or more file paths within a specified Polarlakebase instance.
     *
     * @remarks
     * ## Request description
     * - The `PolarFsInstanceId` parameter is required. It specifies the Polarlakebase instance for the operation.
     * - The `FilePathIds` parameter is required. It accepts a string containing the IDs of the file paths for which you want to delete quota rules. Ensure that each ID is valid and belongs to the specified Polarlakebase instance.
     * - A single API call can delete quotas for multiple file paths. However, limit the number of paths in a single request to avoid performance issues.
     *
     * @param request - CancelPolarFsFileQuotaRequest
     * @returns CancelPolarFsFileQuotaResponse
     */
    cancelPolarFsFileQuota(request: $_model.CancelPolarFsFileQuotaRequest): Promise<$_model.CancelPolarFsFileQuotaResponse>;
    /**
     * Cancels scheduled tasks that have not started.
     *
     * @param request - CancelScheduleTasksRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CancelScheduleTasksResponse
     */
    cancelScheduleTasksWithOptions(request: $_model.CancelScheduleTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelScheduleTasksResponse>;
    /**
     * Cancels scheduled tasks that have not started.
     *
     * @param request - CancelScheduleTasksRequest
     * @returns CancelScheduleTasksResponse
     */
    cancelScheduleTasks(request: $_model.CancelScheduleTasksRequest): Promise<$_model.CancelScheduleTasksResponse>;
    /**
     * Checks whether an account name is valid or unique in a cluster.
     *
     * @param request - CheckAccountNameRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CheckAccountNameResponse
     */
    checkAccountNameWithOptions(request: $_model.CheckAccountNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckAccountNameResponse>;
    /**
     * Checks whether an account name is valid or unique in a cluster.
     *
     * @param request - CheckAccountNameRequest
     * @returns CheckAccountNameResponse
     */
    checkAccountName(request: $_model.CheckAccountNameRequest): Promise<$_model.CheckAccountNameResponse>;
    /**
     * Checks the PolarDB account name.
     *
     * @param request - CheckAccountNameZonalRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CheckAccountNameZonalResponse
     */
    checkAccountNameZonalWithOptions(request: $_model.CheckAccountNameZonalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckAccountNameZonalResponse>;
    /**
     * Checks the PolarDB account name.
     *
     * @param request - CheckAccountNameZonalRequest
     * @returns CheckAccountNameZonalResponse
     */
    checkAccountNameZonal(request: $_model.CheckAccountNameZonalRequest): Promise<$_model.CheckAccountNameZonalResponse>;
    /**
     * Checks the connection string of a cluster.
     *
     * @param request - CheckConnectionStringRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CheckConnectionStringResponse
     */
    checkConnectionStringWithOptions(request: $_model.CheckConnectionStringRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckConnectionStringResponse>;
    /**
     * Checks the connection string of a cluster.
     *
     * @param request - CheckConnectionStringRequest
     * @returns CheckConnectionStringResponse
     */
    checkConnectionString(request: $_model.CheckConnectionStringRequest): Promise<$_model.CheckConnectionStringResponse>;
    /**
     * Checks whether a database name is valid or if a database with the same name already exists in the current cluster.
     *
     * @param request - CheckDBNameRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CheckDBNameResponse
     */
    checkDBNameWithOptions(request: $_model.CheckDBNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckDBNameResponse>;
    /**
     * Checks whether a database name is valid or if a database with the same name already exists in the current cluster.
     *
     * @param request - CheckDBNameRequest
     * @returns CheckDBNameResponse
     */
    checkDBName(request: $_model.CheckDBNameRequest): Promise<$_model.CheckDBNameResponse>;
    /**
     * Checks the ApsaraDB database name for PolarDB on ENS.
     *
     * @param request - CheckDBNameZonalRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CheckDBNameZonalResponse
     */
    checkDBNameZonalWithOptions(request: $_model.CheckDBNameZonalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckDBNameZonalResponse>;
    /**
     * Checks the ApsaraDB database name for PolarDB on ENS.
     *
     * @param request - CheckDBNameZonalRequest
     * @returns CheckDBNameZonalResponse
     */
    checkDBNameZonal(request: $_model.CheckDBNameZonalRequest): Promise<$_model.CheckDBNameZonalResponse>;
    /**
     * Checks whether a user is authorized to use Key Management Service (KMS).
     *
     * @param request - CheckKMSAuthorizedRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CheckKMSAuthorizedResponse
     */
    checkKMSAuthorizedWithOptions(request: $_model.CheckKMSAuthorizedRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckKMSAuthorizedResponse>;
    /**
     * Checks whether a user is authorized to use Key Management Service (KMS).
     *
     * @param request - CheckKMSAuthorizedRequest
     * @returns CheckKMSAuthorizedResponse
     */
    checkKMSAuthorized(request: $_model.CheckKMSAuthorizedRequest): Promise<$_model.CheckKMSAuthorizedResponse>;
    /**
     * Pre-checks a skill.
     *
     * @remarks
     * ## Request description
     * This operation pre-validates a skill before uploading it to a PolarClaw instance.
     *
     * @param request - CheckPolarClawSkillRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CheckPolarClawSkillResponse
     */
    checkPolarClawSkillWithOptions(request: $_model.CheckPolarClawSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckPolarClawSkillResponse>;
    /**
     * Pre-checks a skill.
     *
     * @remarks
     * ## Request description
     * This operation pre-validates a skill before uploading it to a PolarClaw instance.
     *
     * @param request - CheckPolarClawSkillRequest
     * @returns CheckPolarClawSkillResponse
     */
    checkPolarClawSkill(request: $_model.CheckPolarClawSkillRequest): Promise<$_model.CheckPolarClawSkillResponse>;
    /**
     * Checks the consistency of quota settings in a PolarFS instance.
     *
     * @remarks
     * ## Description
     * This operation verifies the consistency of quota configurations within a specified PolarFS instance. These configurations include storage capacity and inode limits on directory paths. If inconsistencies are found, the operation returns a list of the inconsistent paths and any related error information.
     * ### Usage notes
     * - Ensure that the `PolarFsInstanceId` parameter correctly identifies the target PolarFS instance.
     * - When the system detects quota inconsistencies, it returns `IsConsistent=false` and populates the `InconsistentPaths` array.
     * - If the request is successful and no inconsistencies are found, the `InconsistentPaths` array is empty and `IsConsistent` is set to `true`.
     * - For errors such as insufficient permissions or a non-existent resource, see the error codes for details.
     *
     * @param request - CheckPolarFsQuotaConsistencyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CheckPolarFsQuotaConsistencyResponse
     */
    checkPolarFsQuotaConsistencyWithOptions(request: $_model.CheckPolarFsQuotaConsistencyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckPolarFsQuotaConsistencyResponse>;
    /**
     * Checks the consistency of quota settings in a PolarFS instance.
     *
     * @remarks
     * ## Description
     * This operation verifies the consistency of quota configurations within a specified PolarFS instance. These configurations include storage capacity and inode limits on directory paths. If inconsistencies are found, the operation returns a list of the inconsistent paths and any related error information.
     * ### Usage notes
     * - Ensure that the `PolarFsInstanceId` parameter correctly identifies the target PolarFS instance.
     * - When the system detects quota inconsistencies, it returns `IsConsistent=false` and populates the `InconsistentPaths` array.
     * - If the request is successful and no inconsistencies are found, the `InconsistentPaths` array is empty and `IsConsistent` is set to `true`.
     * - For errors such as insufficient permissions or a non-existent resource, see the error codes for details.
     *
     * @param request - CheckPolarFsQuotaConsistencyRequest
     * @returns CheckPolarFsQuotaConsistencyResponse
     */
    checkPolarFsQuotaConsistency(request: $_model.CheckPolarFsQuotaConsistencyRequest): Promise<$_model.CheckPolarFsQuotaConsistencyResponse>;
    /**
     * Checks whether a service-linked role has been created.
     *
     * @param request - CheckServiceLinkedRoleRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CheckServiceLinkedRoleResponse
     */
    checkServiceLinkedRoleWithOptions(request: $_model.CheckServiceLinkedRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckServiceLinkedRoleResponse>;
    /**
     * Checks whether a service-linked role has been created.
     *
     * @param request - CheckServiceLinkedRoleRequest
     * @returns CheckServiceLinkedRoleResponse
     */
    checkServiceLinkedRole(request: $_model.CheckServiceLinkedRoleRequest): Promise<$_model.CheckServiceLinkedRoleResponse>;
    /**
     * Clones a snapshot of a file or folder for a Basic Edition instance.
     *
     * @remarks
     * ## Request description
     * - `PolarFsInstanceId` is required. It specifies the PolarDB instance for the operation.
     *
     * @param request - ClonePolarFsBasicSnapshotRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ClonePolarFsBasicSnapshotResponse
     */
    clonePolarFsBasicSnapshotWithOptions(request: $_model.ClonePolarFsBasicSnapshotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClonePolarFsBasicSnapshotResponse>;
    /**
     * Clones a snapshot of a file or folder for a Basic Edition instance.
     *
     * @remarks
     * ## Request description
     * - `PolarFsInstanceId` is required. It specifies the PolarDB instance for the operation.
     *
     * @param request - ClonePolarFsBasicSnapshotRequest
     * @returns ClonePolarFsBasicSnapshotResponse
     */
    clonePolarFsBasicSnapshot(request: $_model.ClonePolarFsBasicSnapshotRequest): Promise<$_model.ClonePolarFsBasicSnapshotResponse>;
    /**
     * Disables the PolarDB for AI feature.
     *
     * @param request - CloseAITaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CloseAITaskResponse
     */
    closeAITaskWithOptions(request: $_model.CloseAITaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloseAITaskResponse>;
    /**
     * Disables the PolarDB for AI feature.
     *
     * @param request - CloseAITaskRequest
     * @returns CloseAITaskResponse
     */
    closeAITask(request: $_model.CloseAITaskRequest): Promise<$_model.CloseAITaskResponse>;
    /**
     * Cancels or completes the migration task that upgrades an RDS cluster to a PolarDB cluster.
     *
     * @remarks
     * - Cancel the migration task before data migration.
     * - Perform the migration task after data migration.
     * > Before you call this operation, ensure that a one-click upgrade task has been created for the cluster. You can call the [CreateDBCluster](https://help.aliyun.com/document_detail/98169.html)Operation to create an upgrade task. Set the **CreationOption**Parameter to **MigrationFromRDS**. For more information, see [Create a PolarDB for MySQL cluster by using the Migration from RDS method](https://help.aliyun.com/document_detail/121582.html).
     *
     * @param request - CloseDBClusterMigrationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CloseDBClusterMigrationResponse
     */
    closeDBClusterMigrationWithOptions(request: $_model.CloseDBClusterMigrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloseDBClusterMigrationResponse>;
    /**
     * Cancels or completes the migration task that upgrades an RDS cluster to a PolarDB cluster.
     *
     * @remarks
     * - Cancel the migration task before data migration.
     * - Perform the migration task after data migration.
     * > Before you call this operation, ensure that a one-click upgrade task has been created for the cluster. You can call the [CreateDBCluster](https://help.aliyun.com/document_detail/98169.html)Operation to create an upgrade task. Set the **CreationOption**Parameter to **MigrationFromRDS**. For more information, see [Create a PolarDB for MySQL cluster by using the Migration from RDS method](https://help.aliyun.com/document_detail/121582.html).
     *
     * @param request - CloseDBClusterMigrationRequest
     * @returns CloseDBClusterMigrationResponse
     */
    closeDBClusterMigration(request: $_model.CloseDBClusterMigrationRequest): Promise<$_model.CloseDBClusterMigrationResponse>;
    /**
     * Continues the current migration or upgrade task.
     *
     * @param request - ContinueDBClusterMigrationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ContinueDBClusterMigrationResponse
     */
    continueDBClusterMigrationWithOptions(request: $_model.ContinueDBClusterMigrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ContinueDBClusterMigrationResponse>;
    /**
     * Continues the current migration or upgrade task.
     *
     * @param request - ContinueDBClusterMigrationRequest
     * @returns ContinueDBClusterMigrationResponse
     */
    continueDBClusterMigration(request: $_model.ContinueDBClusterMigrationRequest): Promise<$_model.ContinueDBClusterMigrationResponse>;
    /**
     * Creates an AI cluster.
     *
     * @param request - CreateAIDBClusterRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAIDBClusterResponse
     */
    createAIDBClusterWithOptions(request: $_model.CreateAIDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAIDBClusterResponse>;
    /**
     * Creates an AI cluster.
     *
     * @param request - CreateAIDBClusterRequest
     * @returns CreateAIDBClusterResponse
     */
    createAIDBCluster(request: $_model.CreateAIDBClusterRequest): Promise<$_model.CreateAIDBClusterResponse>;
    /**
     * Creates an API key for the model creation service.
     *
     * @param request - CreateAIDBClusterApiKeyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAIDBClusterApiKeyResponse
     */
    createAIDBClusterApiKeyWithOptions(request: $_model.CreateAIDBClusterApiKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAIDBClusterApiKeyResponse>;
    /**
     * Creates an API key for the model creation service.
     *
     * @param request - CreateAIDBClusterApiKeyRequest
     * @returns CreateAIDBClusterApiKeyResponse
     */
    createAIDBClusterApiKey(request: $_model.CreateAIDBClusterApiKeyRequest): Promise<$_model.CreateAIDBClusterApiKeyResponse>;
    /**
     * Creates a dataset.
     *
     * @param request - CreateAIDBClusterDatasetRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAIDBClusterDatasetResponse
     */
    createAIDBClusterDatasetWithOptions(request: $_model.CreateAIDBClusterDatasetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAIDBClusterDatasetResponse>;
    /**
     * Creates a dataset.
     *
     * @param request - CreateAIDBClusterDatasetRequest
     * @returns CreateAIDBClusterDatasetResponse
     */
    createAIDBClusterDataset(request: $_model.CreateAIDBClusterDatasetRequest): Promise<$_model.CreateAIDBClusterDatasetResponse>;
    /**
     * Creates a model creation operator instance.
     *
     * @param request - CreateAIDBClusterTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAIDBClusterTaskResponse
     */
    createAIDBClusterTaskWithOptions(request: $_model.CreateAIDBClusterTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAIDBClusterTaskResponse>;
    /**
     * Creates a model creation operator instance.
     *
     * @param request - CreateAIDBClusterTaskRequest
     * @returns CreateAIDBClusterTaskResponse
     */
    createAIDBClusterTask(request: $_model.CreateAIDBClusterTaskRequest): Promise<$_model.CreateAIDBClusterTaskResponse>;
    /**
     * Creates AI nodes.
     *
     * @param request - CreateAINodesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAINodesResponse
     */
    createAINodesWithOptions(request: $_model.CreateAINodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAINodesResponse>;
    /**
     * Creates AI nodes.
     *
     * @param request - CreateAINodesRequest
     * @returns CreateAINodesResponse
     */
    createAINodes(request: $_model.CreateAINodesRequest): Promise<$_model.CreateAINodesResponse>;
    /**
     * Creates a PolarDB database account.
     *
     * @param request - CreateAccountRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAccountResponse
     */
    createAccountWithOptions(request: $_model.CreateAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAccountResponse>;
    /**
     * Creates a PolarDB database account.
     *
     * @param request - CreateAccountRequest
     * @returns CreateAccountResponse
     */
    createAccount(request: $_model.CreateAccountRequest): Promise<$_model.CreateAccountResponse>;
    /**
     * Creates an account for an edge cluster.
     *
     * @param request - CreateAccountZonalRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAccountZonalResponse
     */
    createAccountZonalWithOptions(request: $_model.CreateAccountZonalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAccountZonalResponse>;
    /**
     * Creates an account for an edge cluster.
     *
     * @param request - CreateAccountZonalRequest
     * @returns CreateAccountZonalResponse
     */
    createAccountZonal(request: $_model.CreateAccountZonalRequest): Promise<$_model.CreateAccountZonalResponse>;
    /**
     * Generates an activation code for the lightweight edition.
     *
     * @param request - CreateActivationCodeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateActivationCodeResponse
     */
    createActivationCodeWithOptions(request: $_model.CreateActivationCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateActivationCodeResponse>;
    /**
     * Generates an activation code for the lightweight edition.
     *
     * @param request - CreateActivationCodeRequest
     * @returns CreateActivationCodeResponse
     */
    createActivationCode(request: $_model.CreateActivationCodeRequest): Promise<$_model.CreateActivationCodeResponse>;
    /**
     * Creates an AgenticDB branch.
     *
     * @param request - CreateAgenticDBBranchRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAgenticDBBranchResponse
     */
    createAgenticDBBranchWithOptions(request: $_model.CreateAgenticDBBranchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAgenticDBBranchResponse>;
    /**
     * Creates an AgenticDB branch.
     *
     * @param request - CreateAgenticDBBranchRequest
     * @returns CreateAgenticDBBranchResponse
     */
    createAgenticDBBranch(request: $_model.CreateAgenticDBBranchRequest): Promise<$_model.CreateAgenticDBBranchResponse>;
    /**
     * Creates an AgenticDB project.
     *
     * @param request - CreateAgenticDBProjectRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAgenticDBProjectResponse
     */
    createAgenticDBProjectWithOptions(request: $_model.CreateAgenticDBProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAgenticDBProjectResponse>;
    /**
     * Creates an AgenticDB project.
     *
     * @param request - CreateAgenticDBProjectRequest
     * @returns CreateAgenticDBProjectResponse
     */
    createAgenticDBProject(request: $_model.CreateAgenticDBProjectRequest): Promise<$_model.CreateAgenticDBProjectResponse>;
    /**
     * Creates an AgenticDB tenant.
     *
     * @remarks
     * Creates an independent business tenant without creating an API key.
     *
     * @param request - CreateAgenticDBTenantRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAgenticDBTenantResponse
     */
    createAgenticDBTenantWithOptions(request: $_model.CreateAgenticDBTenantRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAgenticDBTenantResponse>;
    /**
     * Creates an AgenticDB tenant.
     *
     * @remarks
     * Creates an independent business tenant without creating an API key.
     *
     * @param request - CreateAgenticDBTenantRequest
     * @returns CreateAgenticDBTenantResponse
     */
    createAgenticDBTenant(request: $_model.CreateAgenticDBTenantRequest): Promise<$_model.CreateAgenticDBTenantResponse>;
    /**
     * Creates an AgenticDB tenant API key.
     *
     * @param request - CreateAgenticDBTenantApiKeyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAgenticDBTenantApiKeyResponse
     */
    createAgenticDBTenantApiKeyWithOptions(request: $_model.CreateAgenticDBTenantApiKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAgenticDBTenantApiKeyResponse>;
    /**
     * Creates an AgenticDB tenant API key.
     *
     * @param request - CreateAgenticDBTenantApiKeyRequest
     * @returns CreateAgenticDBTenantApiKeyResponse
     */
    createAgenticDBTenantApiKey(request: $_model.CreateAgenticDBTenantApiKeyRequest): Promise<$_model.CreateAgenticDBTenantApiKeyResponse>;
    /**
     * Creates an application attached to a PolarDB instance.
     *
     * @param tmpReq - CreateApplicationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateApplicationResponse
     */
    createApplicationWithOptions(tmpReq: $_model.CreateApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApplicationResponse>;
    /**
     * Creates an application attached to a PolarDB instance.
     *
     * @param request - CreateApplicationRequest
     * @returns CreateApplicationResponse
     */
    createApplication(request: $_model.CreateApplicationRequest): Promise<$_model.CreateApplicationResponse>;
    /**
     * Binds an Agent to a Squad.
     *
     * @param request - CreateApplicationAgentRelationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateApplicationAgentRelationResponse
     */
    createApplicationAgentRelationWithOptions(request: $_model.CreateApplicationAgentRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApplicationAgentRelationResponse>;
    /**
     * Binds an Agent to a Squad.
     *
     * @param request - CreateApplicationAgentRelationRequest
     * @returns CreateApplicationAgentRelationResponse
     */
    createApplicationAgentRelation(request: $_model.CreateApplicationAgentRelationRequest): Promise<$_model.CreateApplicationAgentRelationResponse>;
    /**
     * Creates a backup for a specified PolarDB application and returns the backup job ID and workflow task ID.
     *
     * @param request - CreateApplicationBackupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateApplicationBackupResponse
     */
    createApplicationBackupWithOptions(request: $_model.CreateApplicationBackupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApplicationBackupResponse>;
    /**
     * Creates a backup for a specified PolarDB application and returns the backup job ID and workflow task ID.
     *
     * @param request - CreateApplicationBackupRequest
     * @returns CreateApplicationBackupResponse
     */
    createApplicationBackup(request: $_model.CreateApplicationBackupRequest): Promise<$_model.CreateApplicationBackupResponse>;
    /**
     * Creates a connection address for a specified application.
     *
     * @param request - CreateApplicationEndpointAddressRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateApplicationEndpointAddressResponse
     */
    createApplicationEndpointAddressWithOptions(request: $_model.CreateApplicationEndpointAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApplicationEndpointAddressResponse>;
    /**
     * Creates a connection address for a specified application.
     *
     * @param request - CreateApplicationEndpointAddressRequest
     * @returns CreateApplicationEndpointAddressResponse
     */
    createApplicationEndpointAddress(request: $_model.CreateApplicationEndpointAddressRequest): Promise<$_model.CreateApplicationEndpointAddressResponse>;
    /**
     * Creates a Prompt for an Application.
     *
     * @param request - CreateApplicationPromptRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateApplicationPromptResponse
     */
    createApplicationPromptWithOptions(request: $_model.CreateApplicationPromptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApplicationPromptResponse>;
    /**
     * Creates a Prompt for an Application.
     *
     * @param request - CreateApplicationPromptRequest
     * @returns CreateApplicationPromptResponse
     */
    createApplicationPrompt(request: $_model.CreateApplicationPromptRequest): Promise<$_model.CreateApplicationPromptResponse>;
    /**
     * Creates a full snapshot backup for a PolarDB cluster.
     *
     * @remarks
     * > * Each cluster can have up to three manually created backups at a time.
     * > * If the error message `Exceeding the daily backup times of this DB cluster` appears, it indicates that three manually created backups already exist in your cluster. [Delete a backup](https://help.aliyun.com/document_detail/98101.html) before you call this operation.
     * > * After you call this operation, a backup task is created in the background. If the data volume is large, the task may take a long time to complete.
     *
     * @param request - CreateBackupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateBackupResponse
     */
    createBackupWithOptions(request: $_model.CreateBackupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBackupResponse>;
    /**
     * Creates a full snapshot backup for a PolarDB cluster.
     *
     * @remarks
     * > * Each cluster can have up to three manually created backups at a time.
     * > * If the error message `Exceeding the daily backup times of this DB cluster` appears, it indicates that three manually created backups already exist in your cluster. [Delete a backup](https://help.aliyun.com/document_detail/98101.html) before you call this operation.
     * > * After you call this operation, a backup task is created in the background. If the data volume is large, the task may take a long time to complete.
     *
     * @param request - CreateBackupRequest
     * @returns CreateBackupResponse
     */
    createBackup(request: $_model.CreateBackupRequest): Promise<$_model.CreateBackupResponse>;
    /**
     * Creates API keys in batches.
     *
     * @remarks
     * Prerequisites: Call CreateGwConsumerOrder first, providing GatewayId, PackageSpec, KeyCount, RegionId, and ExpireTime to obtain a CreditToken, and then call this operation to create consumers in batches. Before the call, you must also obtain a valid ConsumerGroupId by calling DescribeConsumerGroups with GwClusterId and RegionId, and explicitly pass it in.
     *
     * @param request - CreateBatchConsumerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateBatchConsumerResponse
     */
    createBatchConsumerWithOptions(request: $_model.CreateBatchConsumerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBatchConsumerResponse>;
    /**
     * Creates API keys in batches.
     *
     * @remarks
     * Prerequisites: Call CreateGwConsumerOrder first, providing GatewayId, PackageSpec, KeyCount, RegionId, and ExpireTime to obtain a CreditToken, and then call this operation to create consumers in batches. Before the call, you must also obtain a valid ConsumerGroupId by calling DescribeConsumerGroups with GwClusterId and RegionId, and explicitly pass it in.
     *
     * @param request - CreateBatchConsumerRequest
     * @returns CreateBatchConsumerResponse
     */
    createBatchConsumer(request: $_model.CreateBatchConsumerRequest): Promise<$_model.CreateBatchConsumerResponse>;
    /**
     * Creates a batch task.
     *
     * @param tmpReq - CreateBatchTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateBatchTaskResponse
     */
    createBatchTaskWithOptions(tmpReq: $_model.CreateBatchTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBatchTaskResponse>;
    /**
     * Creates a batch task.
     *
     * @param request - CreateBatchTaskRequest
     * @returns CreateBatchTaskResponse
     */
    createBatchTask(request: $_model.CreateBatchTaskRequest): Promise<$_model.CreateBatchTaskResponse>;
    /**
     * Creates a budget policy.
     *
     * @param request - CreateBudgetPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateBudgetPolicyResponse
     */
    createBudgetPolicyWithOptions(request: $_model.CreateBudgetPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBudgetPolicyResponse>;
    /**
     * Creates a budget policy.
     *
     * @param request - CreateBudgetPolicyRequest
     * @returns CreateBudgetPolicyResponse
     */
    createBudgetPolicy(request: $_model.CreateBudgetPolicyRequest): Promise<$_model.CreateBudgetPolicyResponse>;
    /**
     * Creates a cold storage instance.
     *
     * @param request - CreateColdStorageInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateColdStorageInstanceResponse
     */
    createColdStorageInstanceWithOptions(request: $_model.CreateColdStorageInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateColdStorageInstanceResponse>;
    /**
     * Creates a cold storage instance.
     *
     * @param request - CreateColdStorageInstanceRequest
     * @returns CreateColdStorageInstanceResponse
     */
    createColdStorageInstance(request: $_model.CreateColdStorageInstanceRequest): Promise<$_model.CreateColdStorageInstanceResponse>;
    /**
     * Creates a consumer.
     *
     * @param request - CreateConsumerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateConsumerResponse
     */
    createConsumerWithOptions(request: $_model.CreateConsumerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConsumerResponse>;
    /**
     * Creates a consumer.
     *
     * @param request - CreateConsumerRequest
     * @returns CreateConsumerResponse
     */
    createConsumer(request: $_model.CreateConsumerRequest): Promise<$_model.CreateConsumerResponse>;
    /**
     * Creates a consumer group.
     *
     * @param request - CreateConsumerGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateConsumerGroupResponse
     */
    createConsumerGroupWithOptions(request: $_model.CreateConsumerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConsumerGroupResponse>;
    /**
     * Creates a consumer group.
     *
     * @param request - CreateConsumerGroupRequest
     * @returns CreateConsumerGroupResponse
     */
    createConsumerGroup(request: $_model.CreateConsumerGroupRequest): Promise<$_model.CreateConsumerGroupResponse>;
    /**
     * Creates a cost rule.
     *
     * @param request - CreateCostRuleRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateCostRuleResponse
     */
    createCostRuleWithOptions(request: $_model.CreateCostRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCostRuleResponse>;
    /**
     * Creates a cost rule.
     *
     * @param request - CreateCostRuleRequest
     * @returns CreateCostRuleResponse
     */
    createCostRule(request: $_model.CreateCostRuleRequest): Promise<$_model.CreateCostRuleResponse>;
    /**
     * Creates a scheduled task policy for a serverless cluster.
     *
     * @param request - CreateCronJobPolicyServerlessRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateCronJobPolicyServerlessResponse
     */
    createCronJobPolicyServerlessWithOptions(request: $_model.CreateCronJobPolicyServerlessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCronJobPolicyServerlessResponse>;
    /**
     * Creates a scheduled task policy for a serverless cluster.
     *
     * @param request - CreateCronJobPolicyServerlessRequest
     * @returns CreateCronJobPolicyServerlessResponse
     */
    createCronJobPolicyServerless(request: $_model.CreateCronJobPolicyServerlessRequest): Promise<$_model.CreateCronJobPolicyServerlessResponse>;
    /**
     * Creates a PolarDB cluster.
     *
     * @remarks
     * A DBLink can connect two PolarDB for PostgreSQL (Compatible with Oracle) clusters, or connect a PolarDB for PostgreSQL (Compatible with Oracle) cluster to a self-managed PostgreSQL database on an ECS instance. You can use DBLink to query data across clusters.
     * > - You can create up to 10 DBLinks for a cluster.
     * > - A DBLink occupies one DBLink quota on both the source cluster and the destination cluster.
     * > - The source cluster and the destination cluster or destination ECS instance must be in the same region.
     *
     * @param request - CreateDBClusterRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateDBClusterResponse
     */
    createDBClusterWithOptions(request: $_model.CreateDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBClusterResponse>;
    /**
     * Creates a PolarDB cluster.
     *
     * @remarks
     * A DBLink can connect two PolarDB for PostgreSQL (Compatible with Oracle) clusters, or connect a PolarDB for PostgreSQL (Compatible with Oracle) cluster to a self-managed PostgreSQL database on an ECS instance. You can use DBLink to query data across clusters.
     * > - You can create up to 10 DBLinks for a cluster.
     * > - A DBLink occupies one DBLink quota on both the source cluster and the destination cluster.
     * > - The source cluster and the destination cluster or destination ECS instance must be in the same region.
     *
     * @param request - CreateDBClusterRequest
     * @returns CreateDBClusterResponse
     */
    createDBCluster(request: $_model.CreateDBClusterRequest): Promise<$_model.CreateDBClusterResponse>;
    /**
     * Creates a custom cluster endpoint for a PolarDB cluster.
     *
     * @param request - CreateDBClusterEndpointRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateDBClusterEndpointResponse
     */
    createDBClusterEndpointWithOptions(request: $_model.CreateDBClusterEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBClusterEndpointResponse>;
    /**
     * Creates a custom cluster endpoint for a PolarDB cluster.
     *
     * @param request - CreateDBClusterEndpointRequest
     * @returns CreateDBClusterEndpointResponse
     */
    createDBClusterEndpoint(request: $_model.CreateDBClusterEndpointRequest): Promise<$_model.CreateDBClusterEndpointResponse>;
    /**
     * Creates a custom cluster endpoint for a PolarDB on ENS cluster.
     *
     * @param request - CreateDBClusterEndpointZonalRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateDBClusterEndpointZonalResponse
     */
    createDBClusterEndpointZonalWithOptions(request: $_model.CreateDBClusterEndpointZonalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBClusterEndpointZonalResponse>;
    /**
     * Creates a custom cluster endpoint for a PolarDB on ENS cluster.
     *
     * @param request - CreateDBClusterEndpointZonalRequest
     * @returns CreateDBClusterEndpointZonalResponse
     */
    createDBClusterEndpointZonal(request: $_model.CreateDBClusterEndpointZonalRequest): Promise<$_model.CreateDBClusterEndpointZonalResponse>;
    /**
     * Creates a public endpoint for the primary endpoint, the default cluster endpoint, or a custom cluster endpoint of a PolarDB cluster.
     *
     * @remarks
     * > You can create a public endpoint for the primary endpoint, the default cluster endpoint, or a custom cluster endpoint of a PolarDB cluster.
     *
     * @param request - CreateDBEndpointAddressRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateDBEndpointAddressResponse
     */
    createDBEndpointAddressWithOptions(request: $_model.CreateDBEndpointAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBEndpointAddressResponse>;
    /**
     * Creates a public endpoint for the primary endpoint, the default cluster endpoint, or a custom cluster endpoint of a PolarDB cluster.
     *
     * @remarks
     * > You can create a public endpoint for the primary endpoint, the default cluster endpoint, or a custom cluster endpoint of a PolarDB cluster.
     *
     * @param request - CreateDBEndpointAddressRequest
     * @returns CreateDBEndpointAddressResponse
     */
    createDBEndpointAddress(request: $_model.CreateDBEndpointAddressRequest): Promise<$_model.CreateDBEndpointAddressResponse>;
    /**
     * Creates a DBLink.
     *
     * @remarks
     * A DBLink provides connectivity between two PolarDB for PostgreSQL (Oracle-compatible) clusters, or between a PolarDB for PostgreSQL (Oracle-compatible) cluster and a self-managed PostgreSQL database on an Elastic Compute Service (ECS) instance. This lets you query data across clusters.
     * > - Each cluster supports a maximum of 10 DBLinks.
     * >
     * > - A DBLink consumes one DBLink quota from both the source cluster and the destination cluster.
     * >
     * > - The source cluster and the destination cluster or destination ECS instance must be in the same region.
     *
     * @param request - CreateDBLinkRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateDBLinkResponse
     */
    createDBLinkWithOptions(request: $_model.CreateDBLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBLinkResponse>;
    /**
     * Creates a DBLink.
     *
     * @remarks
     * A DBLink provides connectivity between two PolarDB for PostgreSQL (Oracle-compatible) clusters, or between a PolarDB for PostgreSQL (Oracle-compatible) cluster and a self-managed PostgreSQL database on an Elastic Compute Service (ECS) instance. This lets you query data across clusters.
     * > - Each cluster supports a maximum of 10 DBLinks.
     * >
     * > - A DBLink consumes one DBLink quota from both the source cluster and the destination cluster.
     * >
     * > - The source cluster and the destination cluster or destination ECS instance must be in the same region.
     *
     * @param request - CreateDBLinkRequest
     * @returns CreateDBLinkResponse
     */
    createDBLink(request: $_model.CreateDBLinkRequest): Promise<$_model.CreateDBLinkResponse>;
    /**
     * Adds read-only nodes to a PolarDB cluster.
     *
     * @param request - CreateDBNodesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateDBNodesResponse
     */
    createDBNodesWithOptions(request: $_model.CreateDBNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBNodesResponse>;
    /**
     * Adds read-only nodes to a PolarDB cluster.
     *
     * @param request - CreateDBNodesRequest
     * @returns CreateDBNodesResponse
     */
    createDBNodes(request: $_model.CreateDBNodesRequest): Promise<$_model.CreateDBNodesResponse>;
    /**
     * Creates a task to process data in PolarFS based on a specified template and write the data to a PolarDB database.
     *
     * @param request - CreateDataProcessJobRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateDataProcessJobResponse
     */
    createDataProcessJobWithOptions(request: $_model.CreateDataProcessJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataProcessJobResponse>;
    /**
     * Creates a task to process data in PolarFS based on a specified template and write the data to a PolarDB database.
     *
     * @param request - CreateDataProcessJobRequest
     * @returns CreateDataProcessJobResponse
     */
    createDataProcessJob(request: $_model.CreateDataProcessJobRequest): Promise<$_model.CreateDataProcessJobResponse>;
    /**
     * Creates a task template for image data processing in a specified region.
     *
     * @param request - CreateDataProcessJobTemplateRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateDataProcessJobTemplateResponse
     */
    createDataProcessJobTemplateWithOptions(request: $_model.CreateDataProcessJobTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataProcessJobTemplateResponse>;
    /**
     * Creates a task template for image data processing in a specified region.
     *
     * @param request - CreateDataProcessJobTemplateRequest
     * @returns CreateDataProcessJobTemplateResponse
     */
    createDataProcessJobTemplate(request: $_model.CreateDataProcessJobTemplateRequest): Promise<$_model.CreateDataProcessJobTemplateResponse>;
    /**
     * Creates a database for a PolarDB cluster.
     *
     * @remarks
     * Before you call this operation, make sure that the following requirements are met:
     * *   The cluster is in the Running state.
     * *   The cluster is unlocked.
     *
     * @param request - CreateDatabaseRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateDatabaseResponse
     */
    createDatabaseWithOptions(request: $_model.CreateDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDatabaseResponse>;
    /**
     * Creates a database for a PolarDB cluster.
     *
     * @remarks
     * Before you call this operation, make sure that the following requirements are met:
     * *   The cluster is in the Running state.
     * *   The cluster is unlocked.
     *
     * @param request - CreateDatabaseRequest
     * @returns CreateDatabaseResponse
     */
    createDatabase(request: $_model.CreateDatabaseRequest): Promise<$_model.CreateDatabaseResponse>;
    /**
     * Creates a database of an edge cluster for PolarDB on ENS.
     *
     * @param request - CreateDatabaseZonalRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateDatabaseZonalResponse
     */
    createDatabaseZonalWithOptions(request: $_model.CreateDatabaseZonalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDatabaseZonalResponse>;
    /**
     * Creates a database of an edge cluster for PolarDB on ENS.
     *
     * @param request - CreateDatabaseZonalRequest
     * @returns CreateDatabaseZonalResponse
     */
    createDatabaseZonal(request: $_model.CreateDatabaseZonalRequest): Promise<$_model.CreateDatabaseZonalResponse>;
    /**
     * Creates one or more extensions.
     *
     * @param request - CreateExtensionsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateExtensionsResponse
     */
    createExtensionsWithOptions(request: $_model.CreateExtensionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateExtensionsResponse>;
    /**
     * Creates one or more extensions.
     *
     * @param request - CreateExtensionsRequest
     * @returns CreateExtensionsResponse
     */
    createExtensions(request: $_model.CreateExtensionsRequest): Promise<$_model.CreateExtensionsResponse>;
    /**
     * Creates a gateway instance.
     *
     * @param request - CreateGatewayRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateGatewayResponse
     */
    createGatewayWithOptions(request: $_model.CreateGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGatewayResponse>;
    /**
     * Creates a gateway instance.
     *
     * @param request - CreateGatewayRequest
     * @returns CreateGatewayResponse
     */
    createGateway(request: $_model.CreateGatewayRequest): Promise<$_model.CreateGatewayResponse>;
    /**
     * Create a new PolarLakeBase Global Data Network (GDN).
     *
     * @remarks
     * > This API creates a PolarFileSystem (PolarFS) Global Data Network (GDN). Do not confuse it with the CreateGlobalDatabaseNetwork API, which operates on a PolarDB cluster. Ensure you are using the correct API to avoid unintended actions.
     *
     * @param request - CreateGlobalDataNetworkRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateGlobalDataNetworkResponse
     */
    createGlobalDataNetworkWithOptions(request: $_model.CreateGlobalDataNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGlobalDataNetworkResponse>;
    /**
     * Create a new PolarLakeBase Global Data Network (GDN).
     *
     * @remarks
     * > This API creates a PolarFileSystem (PolarFS) Global Data Network (GDN). Do not confuse it with the CreateGlobalDatabaseNetwork API, which operates on a PolarDB cluster. Ensure you are using the correct API to avoid unintended actions.
     *
     * @param request - CreateGlobalDataNetworkRequest
     * @returns CreateGlobalDataNetworkResponse
     */
    createGlobalDataNetwork(request: $_model.CreateGlobalDataNetworkRequest): Promise<$_model.CreateGlobalDataNetworkResponse>;
    /**
     * Creates a new global database network (GDN).
     *
     * @remarks
     * > A cluster can belong to only one GDN.
     *
     * @param request - CreateGlobalDatabaseNetworkRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateGlobalDatabaseNetworkResponse
     */
    createGlobalDatabaseNetworkWithOptions(request: $_model.CreateGlobalDatabaseNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGlobalDatabaseNetworkResponse>;
    /**
     * Creates a new global database network (GDN).
     *
     * @remarks
     * > A cluster can belong to only one GDN.
     *
     * @param request - CreateGlobalDatabaseNetworkRequest
     * @returns CreateGlobalDatabaseNetworkResponse
     */
    createGlobalDatabaseNetwork(request: $_model.CreateGlobalDatabaseNetworkRequest): Promise<$_model.CreateGlobalDatabaseNetworkResponse>;
    /**
     * Creates a global IP whitelist template.
     *
     * @param request - CreateGlobalSecurityIPGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateGlobalSecurityIPGroupResponse
     */
    createGlobalSecurityIPGroupWithOptions(request: $_model.CreateGlobalSecurityIPGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGlobalSecurityIPGroupResponse>;
    /**
     * Creates a global IP whitelist template.
     *
     * @param request - CreateGlobalSecurityIPGroupRequest
     * @returns CreateGlobalSecurityIPGroupResponse
     */
    createGlobalSecurityIPGroup(request: $_model.CreateGlobalSecurityIPGroupRequest): Promise<$_model.CreateGlobalSecurityIPGroupResponse>;
    /**
     * Places an order to purchase a token resource plan and activates a redemption code.
     *
     * @param request - CreateGwConsumerOrderRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateGwConsumerOrderResponse
     */
    createGwConsumerOrderWithOptions(request: $_model.CreateGwConsumerOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGwConsumerOrderResponse>;
    /**
     * Places an order to purchase a token resource plan and activates a redemption code.
     *
     * @param request - CreateGwConsumerOrderRequest
     * @returns CreateGwConsumerOrderResponse
     */
    createGwConsumerOrder(request: $_model.CreateGwConsumerOrderRequest): Promise<$_model.CreateGwConsumerOrderResponse>;
    /**
     * Creates a periodic inspection task for specified PolarDB clusters.
     *
     * @param request - CreateInspectionTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateInspectionTaskResponse
     */
    createInspectionTaskWithOptions(request: $_model.CreateInspectionTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInspectionTaskResponse>;
    /**
     * Creates a periodic inspection task for specified PolarDB clusters.
     *
     * @param request - CreateInspectionTaskRequest
     * @returns CreateInspectionTaskResponse
     */
    createInspectionTask(request: $_model.CreateInspectionTaskRequest): Promise<$_model.CreateInspectionTaskResponse>;
    /**
     * Creates a knowledge base synchronization link.
     *
     * @param request - CreateKBSyncLinkRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateKBSyncLinkResponse
     */
    createKBSyncLinkWithOptions(request: $_model.CreateKBSyncLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateKBSyncLinkResponse>;
    /**
     * Creates a knowledge base synchronization link.
     *
     * @param request - CreateKBSyncLinkRequest
     * @returns CreateKBSyncLinkResponse
     */
    createKBSyncLink(request: $_model.CreateKBSyncLinkRequest): Promise<$_model.CreateKBSyncLinkResponse>;
    /**
     * Creates a knowledge base.
     *
     * @param request - CreateKnowledgeBaseRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateKnowledgeBaseResponse
     */
    createKnowledgeBaseWithOptions(request: $_model.CreateKnowledgeBaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateKnowledgeBaseResponse>;
    /**
     * Creates a knowledge base.
     *
     * @param request - CreateKnowledgeBaseRequest
     * @returns CreateKnowledgeBaseResponse
     */
    createKnowledgeBase(request: $_model.CreateKnowledgeBaseRequest): Promise<$_model.CreateKnowledgeBaseResponse>;
    /**
     * Creates a knowledge space.
     *
     * @remarks
     * Prerequisites: Before you call this operation, you must activate the PrivateLink service in your current account. If the service is not activated, the API returns the PrivateLinkService.NotOpen (400) error. You can check the activation status of the service in the PrivateLink console. Before creating a knowledge space, you must also prepare the VpcId, VSwitchId, SecurityGroupId, and OSSBucket parameters. You can query VPCs and vSwitches by calling the DescribeVpcs and DescribeVSwitches operations of VPC, query security groups by calling the DescribeSecurityGroups operation of ECS, and query buckets by calling the ListBuckets operation of OSS. If the resources do not exist, create them in the corresponding services first.
     *
     * @param request - CreateKnowledgeSpaceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateKnowledgeSpaceResponse
     */
    createKnowledgeSpaceWithOptions(request: $_model.CreateKnowledgeSpaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateKnowledgeSpaceResponse>;
    /**
     * Creates a knowledge space.
     *
     * @remarks
     * Prerequisites: Before you call this operation, you must activate the PrivateLink service in your current account. If the service is not activated, the API returns the PrivateLinkService.NotOpen (400) error. You can check the activation status of the service in the PrivateLink console. Before creating a knowledge space, you must also prepare the VpcId, VSwitchId, SecurityGroupId, and OSSBucket parameters. You can query VPCs and vSwitches by calling the DescribeVpcs and DescribeVSwitches operations of VPC, query security groups by calling the DescribeSecurityGroups operation of ECS, and query buckets by calling the ListBuckets operation of OSS. If the resources do not exist, create them in the corresponding services first.
     *
     * @param request - CreateKnowledgeSpaceRequest
     * @returns CreateKnowledgeSpaceResponse
     */
    createKnowledgeSpace(request: $_model.CreateKnowledgeSpaceRequest): Promise<$_model.CreateKnowledgeSpaceResponse>;
    /**
     * Creates a Lakebase parameter template.
     *
     * @param request - CreateLakebaseMountParameterGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateLakebaseMountParameterGroupResponse
     */
    createLakebaseMountParameterGroupWithOptions(request: $_model.CreateLakebaseMountParameterGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLakebaseMountParameterGroupResponse>;
    /**
     * Creates a Lakebase parameter template.
     *
     * @param request - CreateLakebaseMountParameterGroupRequest
     * @returns CreateLakebaseMountParameterGroupResponse
     */
    createLakebaseMountParameterGroup(request: $_model.CreateLakebaseMountParameterGroupRequest): Promise<$_model.CreateLakebaseMountParameterGroupResponse>;
    /**
     * Creates a PolarFS S3 account.
     *
     * @param request - CreateLakebaseS3AccountRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateLakebaseS3AccountResponse
     */
    createLakebaseS3AccountWithOptions(request: $_model.CreateLakebaseS3AccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLakebaseS3AccountResponse>;
    /**
     * Creates a PolarFS S3 account.
     *
     * @param request - CreateLakebaseS3AccountRequest
     * @returns CreateLakebaseS3AccountResponse
     */
    createLakebaseS3Account(request: $_model.CreateLakebaseS3AccountRequest): Promise<$_model.CreateLakebaseS3AccountResponse>;
    /**
     * Creates a routing rule.
     *
     * @param request - CreateModelApiRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateModelApiResponse
     */
    createModelApiWithOptions(request: $_model.CreateModelApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateModelApiResponse>;
    /**
     * Creates a routing rule.
     *
     * @param request - CreateModelApiRequest
     * @returns CreateModelApiResponse
     */
    createModelApi(request: $_model.CreateModelApiRequest): Promise<$_model.CreateModelApiResponse>;
    /**
     * Creates a model creation service.
     *
     * @param request - CreateModelServiceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateModelServiceResponse
     */
    createModelServiceWithOptions(request: $_model.CreateModelServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateModelServiceResponse>;
    /**
     * Creates a model creation service.
     *
     * @param request - CreateModelServiceRequest
     * @returns CreateModelServiceResponse
     */
    createModelService(request: $_model.CreateModelServiceRequest): Promise<$_model.CreateModelServiceResponse>;
    /**
     * Creates a network channel.
     *
     * @param request - CreateNetworkChannelRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateNetworkChannelResponse
     */
    createNetworkChannelWithOptions(request: $_model.CreateNetworkChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNetworkChannelResponse>;
    /**
     * Creates a network channel.
     *
     * @param request - CreateNetworkChannelRequest
     * @returns CreateNetworkChannelResponse
     */
    createNetworkChannel(request: $_model.CreateNetworkChannelRequest): Promise<$_model.CreateNetworkChannelResponse>;
    /**
     * Creates or retrieves a virtual certificate order.
     *
     * @param request - CreateOrGetVirtualLicenseOrderRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateOrGetVirtualLicenseOrderResponse
     */
    createOrGetVirtualLicenseOrderWithOptions(request: $_model.CreateOrGetVirtualLicenseOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrGetVirtualLicenseOrderResponse>;
    /**
     * Creates or retrieves a virtual certificate order.
     *
     * @param request - CreateOrGetVirtualLicenseOrderRequest
     * @returns CreateOrGetVirtualLicenseOrderResponse
     */
    createOrGetVirtualLicenseOrder(request: $_model.CreateOrGetVirtualLicenseOrderRequest): Promise<$_model.CreateOrGetVirtualLicenseOrderResponse>;
    /**
     * Creates a PolarDB parameter template.
     *
     * @remarks
     * Parameter templates allow you to manage cluster parameters in batches. You can use this feature to quickly apply parameter templates to PolarDB clusters. For more information, see [Use parameter templates](https://help.aliyun.com/document_detail/207009.html).
     * > This feature is available only for PolarDB for MySQL clusters.
     *
     * @param request - CreateParameterGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateParameterGroupResponse
     */
    createParameterGroupWithOptions(request: $_model.CreateParameterGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateParameterGroupResponse>;
    /**
     * Creates a PolarDB parameter template.
     *
     * @remarks
     * Parameter templates allow you to manage cluster parameters in batches. You can use this feature to quickly apply parameter templates to PolarDB clusters. For more information, see [Use parameter templates](https://help.aliyun.com/document_detail/207009.html).
     * > This feature is available only for PolarDB for MySQL clusters.
     *
     * @param request - CreateParameterGroupRequest
     * @returns CreateParameterGroupResponse
     */
    createParameterGroup(request: $_model.CreateParameterGroupRequest): Promise<$_model.CreateParameterGroupResponse>;
    /**
     * Creates a new PolarClaw agent.
     *
     * @remarks
     * ## Request description
     * You can use this API to create a PolarClaw agent and optionally configure its `Emoji` and `Avatar`.
     *
     * @param request - CreatePolarClawAgentRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreatePolarClawAgentResponse
     */
    createPolarClawAgentWithOptions(request: $_model.CreatePolarClawAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePolarClawAgentResponse>;
    /**
     * Creates a new PolarClaw agent.
     *
     * @remarks
     * ## Request description
     * You can use this API to create a PolarClaw agent and optionally configure its `Emoji` and `Avatar`.
     *
     * @param request - CreatePolarClawAgentRequest
     * @returns CreatePolarClawAgentResponse
     */
    createPolarClawAgent(request: $_model.CreatePolarClawAgentRequest): Promise<$_model.CreatePolarClawAgentResponse>;
    /**
     * Creates a new communication channel in PolarClaw.
     *
     * @remarks
     * ## Request description.
     *
     * @param tmpReq - CreatePolarClawChannelRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreatePolarClawChannelResponse
     */
    createPolarClawChannelWithOptions(tmpReq: $_model.CreatePolarClawChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePolarClawChannelResponse>;
    /**
     * Creates a new communication channel in PolarClaw.
     *
     * @remarks
     * ## Request description.
     *
     * @param request - CreatePolarClawChannelRequest
     * @returns CreatePolarClawChannelResponse
     */
    createPolarClawChannel(request: $_model.CreatePolarClawChannelRequest): Promise<$_model.CreatePolarClawChannelResponse>;
    /**
     * Creates a PolarClaw scheduled task.
     *
     * @remarks
     * ## Request description
     * This API allows you to define and create a new scheduled task (cron job). The task is triggered periodically based on a given schedule and carries specific messages or instructions. It supports advanced options such as customizing the execution frequency, time zone settings, and alert mechanisms for failures. In addition, you can configure detailed information such as the message content, destination channel, and recipients.
     *
     * @param tmpReq - CreatePolarClawCronJobRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreatePolarClawCronJobResponse
     */
    createPolarClawCronJobWithOptions(tmpReq: $_model.CreatePolarClawCronJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePolarClawCronJobResponse>;
    /**
     * Creates a PolarClaw scheduled task.
     *
     * @remarks
     * ## Request description
     * This API allows you to define and create a new scheduled task (cron job). The task is triggered periodically based on a given schedule and carries specific messages or instructions. It supports advanced options such as customizing the execution frequency, time zone settings, and alert mechanisms for failures. In addition, you can configure detailed information such as the message content, destination channel, and recipients.
     *
     * @param request - CreatePolarClawCronJobRequest
     * @returns CreatePolarClawCronJobResponse
     */
    createPolarClawCronJob(request: $_model.CreatePolarClawCronJobRequest): Promise<$_model.CreatePolarClawCronJobResponse>;
    /**
     * Uploads a skill.
     *
     * @param request - CreatePolarClawSkillRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreatePolarClawSkillResponse
     */
    createPolarClawSkillWithOptions(request: $_model.CreatePolarClawSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePolarClawSkillResponse>;
    /**
     * Uploads a skill.
     *
     * @param request - CreatePolarClawSkillRequest
     * @returns CreatePolarClawSkillResponse
     */
    createPolarClawSkill(request: $_model.CreatePolarClawSkillRequest): Promise<$_model.CreatePolarClawSkillResponse>;
    /**
     * Creates a PolarClaw skill template.
     *
     * @param request - CreatePolarClawSkillTemplateRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreatePolarClawSkillTemplateResponse
     */
    createPolarClawSkillTemplateWithOptions(request: $_model.CreatePolarClawSkillTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePolarClawSkillTemplateResponse>;
    /**
     * Creates a PolarClaw skill template.
     *
     * @param request - CreatePolarClawSkillTemplateRequest
     * @returns CreatePolarClawSkillTemplateResponse
     */
    createPolarClawSkillTemplate(request: $_model.CreatePolarClawSkillTemplateRequest): Promise<$_model.CreatePolarClawSkillTemplateResponse>;
    /**
     * Enables PolarFS support.
     *
     * @param request - CreatePolarFsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreatePolarFsResponse
     */
    createPolarFsWithOptions(request: $_model.CreatePolarFsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePolarFsResponse>;
    /**
     * Enables PolarFS support.
     *
     * @param request - CreatePolarFsRequest
     * @returns CreatePolarFsResponse
     */
    createPolarFs(request: $_model.CreatePolarFsRequest): Promise<$_model.CreatePolarFsResponse>;
    /**
     * Creates a new directory in a specified PolarFS instance.
     *
     * @remarks
     * ## Request description
     * - **Path**: The absolute path of the folder to create.
     * - **Recursive**: Specifies whether to use recursion to create parent folders. Default value: `false`.
     * - This operation supports creating single-level or multi-level folder structures in a specified PolarFS instance.
     * - If the `Recursive` Settings are `true`, the automatic creation of all non-existent parent folders is enabled.
     * - Ensure that you have sufficient permissions when creating a folder.
     *
     * @param request - CreatePolarFsObjectRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreatePolarFsObjectResponse
     */
    createPolarFsObjectWithOptions(request: $_model.CreatePolarFsObjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePolarFsObjectResponse>;
    /**
     * Creates a new directory in a specified PolarFS instance.
     *
     * @remarks
     * ## Request description
     * - **Path**: The absolute path of the folder to create.
     * - **Recursive**: Specifies whether to use recursion to create parent folders. Default value: `false`.
     * - This operation supports creating single-level or multi-level folder structures in a specified PolarFS instance.
     * - If the `Recursive` Settings are `true`, the automatic creation of all non-existent parent folders is enabled.
     * - Ensure that you have sufficient permissions when creating a folder.
     *
     * @param request - CreatePolarFsObjectRequest
     * @returns CreatePolarFsObjectResponse
     */
    createPolarFsObject(request: $_model.CreatePolarFsObjectRequest): Promise<$_model.CreatePolarFsObjectResponse>;
    /**
     * Creates a rate limiting policy.
     *
     * @param request - CreateRateLimitPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateRateLimitPolicyResponse
     */
    createRateLimitPolicyWithOptions(request: $_model.CreateRateLimitPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRateLimitPolicyResponse>;
    /**
     * Creates a rate limiting policy.
     *
     * @param request - CreateRateLimitPolicyRequest
     * @returns CreateRateLimitPolicyResponse
     */
    createRateLimitPolicy(request: $_model.CreateRateLimitPolicyRequest): Promise<$_model.CreateRateLimitPolicyResponse>;
    /**
     * Creates a resource control rule for a specified PolarDB for MySQL cluster. You can use MaxCpu to specify the maximum CPU quota percentage or CpuCount to specify the maximum number of CPU cores that the rule can use. You must specify exactly one of the MaxCpu and CpuCount parameters when you create the rule.
     *
     * @remarks
     * Resource Control limits the CPU resources available to specified users, databases, queries, or connections in a PolarDB for MySQL cluster. This release supports creating, modifying, deleting, binding, and unbinding resource control rules, but does not support querying CPU utilization for Resource Control.
     * ### Limits
     * - Applies only to PolarDB for MySQL Cluster Edition that supports Resource Control. PolarDB for MySQL Standard Edition is not supported.
     * - The cluster kernel parameter loose_enable_resource_control must be set to ON.
     * - MaxCpu and CpuCount are two mutually exclusive CPU quota modes.
     * - The maximum value of CpuCount is determined by the resource_control_cpu_count_limit kernel parameter of the target cluster.
     * >Notice: This is a notice.</notice>
     *
     * @param request - CreateResourceControlRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateResourceControlResponse
     */
    createResourceControlWithOptions(request: $_model.CreateResourceControlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResourceControlResponse>;
    /**
     * Creates a resource control rule for a specified PolarDB for MySQL cluster. You can use MaxCpu to specify the maximum CPU quota percentage or CpuCount to specify the maximum number of CPU cores that the rule can use. You must specify exactly one of the MaxCpu and CpuCount parameters when you create the rule.
     *
     * @remarks
     * Resource Control limits the CPU resources available to specified users, databases, queries, or connections in a PolarDB for MySQL cluster. This release supports creating, modifying, deleting, binding, and unbinding resource control rules, but does not support querying CPU utilization for Resource Control.
     * ### Limits
     * - Applies only to PolarDB for MySQL Cluster Edition that supports Resource Control. PolarDB for MySQL Standard Edition is not supported.
     * - The cluster kernel parameter loose_enable_resource_control must be set to ON.
     * - MaxCpu and CpuCount are two mutually exclusive CPU quota modes.
     * - The maximum value of CpuCount is determined by the resource_control_cpu_count_limit kernel parameter of the target cluster.
     * >Notice: This is a notice.</notice>
     *
     * @param request - CreateResourceControlRequest
     * @returns CreateResourceControlResponse
     */
    createResourceControl(request: $_model.CreateResourceControlRequest): Promise<$_model.CreateResourceControlResponse>;
    /**
     * Ccreates a service-linked role.
     *
     * @param request - CreateServiceLinkedRoleRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateServiceLinkedRoleResponse
     */
    createServiceLinkedRoleWithOptions(request: $_model.CreateServiceLinkedRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceLinkedRoleResponse>;
    /**
     * Ccreates a service-linked role.
     *
     * @param request - CreateServiceLinkedRoleRequest
     * @returns CreateServiceLinkedRoleResponse
     */
    createServiceLinkedRole(request: $_model.CreateServiceLinkedRoleRequest): Promise<$_model.CreateServiceLinkedRoleResponse>;
    /**
     * Purchases a storage plan.
     *
     * @param request - CreateStoragePlanRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateStoragePlanResponse
     */
    createStoragePlanWithOptions(request: $_model.CreateStoragePlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStoragePlanResponse>;
    /**
     * Purchases a storage plan.
     *
     * @param request - CreateStoragePlanRequest
     * @returns CreateStoragePlanResponse
     */
    createStoragePlan(request: $_model.CreateStoragePlanRequest): Promise<$_model.CreateStoragePlanResponse>;
    /**
     * Deletes an AI cluster instance.
     *
     * @param request - DeleteAIDBClusterRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAIDBClusterResponse
     */
    deleteAIDBClusterWithOptions(request: $_model.DeleteAIDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAIDBClusterResponse>;
    /**
     * Deletes an AI cluster instance.
     *
     * @param request - DeleteAIDBClusterRequest
     * @returns DeleteAIDBClusterResponse
     */
    deleteAIDBCluster(request: $_model.DeleteAIDBClusterRequest): Promise<$_model.DeleteAIDBClusterResponse>;
    /**
     * Deletes an API key for the model service.
     *
     * @param request - DeleteAIDBClusterApiKeyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAIDBClusterApiKeyResponse
     */
    deleteAIDBClusterApiKeyWithOptions(request: $_model.DeleteAIDBClusterApiKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAIDBClusterApiKeyResponse>;
    /**
     * Deletes an API key for the model service.
     *
     * @param request - DeleteAIDBClusterApiKeyRequest
     * @returns DeleteAIDBClusterApiKeyResponse
     */
    deleteAIDBClusterApiKey(request: $_model.DeleteAIDBClusterApiKeyRequest): Promise<$_model.DeleteAIDBClusterApiKeyResponse>;
    /**
     * Deletes a custom model registration for an AI cluster.
     *
     * @param request - DeleteAIDBClusterCustomModelRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAIDBClusterCustomModelResponse
     */
    deleteAIDBClusterCustomModelWithOptions(request: $_model.DeleteAIDBClusterCustomModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAIDBClusterCustomModelResponse>;
    /**
     * Deletes a custom model registration for an AI cluster.
     *
     * @param request - DeleteAIDBClusterCustomModelRequest
     * @returns DeleteAIDBClusterCustomModelResponse
     */
    deleteAIDBClusterCustomModel(request: $_model.DeleteAIDBClusterCustomModelRequest): Promise<$_model.DeleteAIDBClusterCustomModelResponse>;
    /**
     * Deletes a dataset.
     *
     * @param request - DeleteAIDBClusterDatasetRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAIDBClusterDatasetResponse
     */
    deleteAIDBClusterDatasetWithOptions(request: $_model.DeleteAIDBClusterDatasetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAIDBClusterDatasetResponse>;
    /**
     * Deletes a dataset.
     *
     * @param request - DeleteAIDBClusterDatasetRequest
     * @returns DeleteAIDBClusterDatasetResponse
     */
    deleteAIDBClusterDataset(request: $_model.DeleteAIDBClusterDatasetRequest): Promise<$_model.DeleteAIDBClusterDatasetResponse>;
    /**
     * Deletes a task instance.
     *
     * @param request - DeleteAIDBClusterTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAIDBClusterTaskResponse
     */
    deleteAIDBClusterTaskWithOptions(request: $_model.DeleteAIDBClusterTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAIDBClusterTaskResponse>;
    /**
     * Deletes a task instance.
     *
     * @param request - DeleteAIDBClusterTaskRequest
     * @returns DeleteAIDBClusterTaskResponse
     */
    deleteAIDBClusterTask(request: $_model.DeleteAIDBClusterTaskRequest): Promise<$_model.DeleteAIDBClusterTaskResponse>;
    /**
     * Deletes child nodes of an AI instance.
     *
     * @param request - DeleteAINodesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAINodesResponse
     */
    deleteAINodesWithOptions(request: $_model.DeleteAINodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAINodesResponse>;
    /**
     * Deletes child nodes of an AI instance.
     *
     * @param request - DeleteAINodesRequest
     * @returns DeleteAINodesResponse
     */
    deleteAINodes(request: $_model.DeleteAINodesRequest): Promise<$_model.DeleteAINodesResponse>;
    /**
     * Deletes a PolarDB database account.
     *
     * @remarks
     * > The cluster must be in the running state for this operation to succeed.
     *
     * @param request - DeleteAccountRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAccountResponse
     */
    deleteAccountWithOptions(request: $_model.DeleteAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAccountResponse>;
    /**
     * Deletes a PolarDB database account.
     *
     * @remarks
     * > The cluster must be in the running state for this operation to succeed.
     *
     * @param request - DeleteAccountRequest
     * @returns DeleteAccountResponse
     */
    deleteAccount(request: $_model.DeleteAccountRequest): Promise<$_model.DeleteAccountResponse>;
    /**
     * Deletes an account for a PolarDB on ENS cluster.
     *
     * @param request - DeleteAccountZonalRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAccountZonalResponse
     */
    deleteAccountZonalWithOptions(request: $_model.DeleteAccountZonalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAccountZonalResponse>;
    /**
     * Deletes an account for a PolarDB on ENS cluster.
     *
     * @param request - DeleteAccountZonalRequest
     * @returns DeleteAccountZonalResponse
     */
    deleteAccountZonal(request: $_model.DeleteAccountZonalRequest): Promise<$_model.DeleteAccountZonalResponse>;
    /**
     * Deletes an AgenticDB branch.
     *
     * @param request - DeleteAgenticDBBranchRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAgenticDBBranchResponse
     */
    deleteAgenticDBBranchWithOptions(request: $_model.DeleteAgenticDBBranchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAgenticDBBranchResponse>;
    /**
     * Deletes an AgenticDB branch.
     *
     * @param request - DeleteAgenticDBBranchRequest
     * @returns DeleteAgenticDBBranchResponse
     */
    deleteAgenticDBBranch(request: $_model.DeleteAgenticDBBranchRequest): Promise<$_model.DeleteAgenticDBBranchResponse>;
    /**
     * Deletes an AgenticDB compute cluster.
     *
     * @param request - DeleteAgenticDBComputeClusterRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAgenticDBComputeClusterResponse
     */
    deleteAgenticDBComputeClusterWithOptions(request: $_model.DeleteAgenticDBComputeClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAgenticDBComputeClusterResponse>;
    /**
     * Deletes an AgenticDB compute cluster.
     *
     * @param request - DeleteAgenticDBComputeClusterRequest
     * @returns DeleteAgenticDBComputeClusterResponse
     */
    deleteAgenticDBComputeCluster(request: $_model.DeleteAgenticDBComputeClusterRequest): Promise<$_model.DeleteAgenticDBComputeClusterResponse>;
    /**
     * Deletes an AgenticDB project.
     *
     * @param request - DeleteAgenticDBProjectRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAgenticDBProjectResponse
     */
    deleteAgenticDBProjectWithOptions(request: $_model.DeleteAgenticDBProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAgenticDBProjectResponse>;
    /**
     * Deletes an AgenticDB project.
     *
     * @param request - DeleteAgenticDBProjectRequest
     * @returns DeleteAgenticDBProjectResponse
     */
    deleteAgenticDBProject(request: $_model.DeleteAgenticDBProjectRequest): Promise<$_model.DeleteAgenticDBProjectResponse>;
    /**
     * Deletes an AgenticDB tenant.
     *
     * @remarks
     * You can only delete a tenant whose projects and branches have been cleaned up. After the tenant is deleted, all its API keys become invalid. This operation does not automatically clean up projects, branches, or storage.
     *
     * @param request - DeleteAgenticDBTenantRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAgenticDBTenantResponse
     */
    deleteAgenticDBTenantWithOptions(request: $_model.DeleteAgenticDBTenantRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAgenticDBTenantResponse>;
    /**
     * Deletes an AgenticDB tenant.
     *
     * @remarks
     * You can only delete a tenant whose projects and branches have been cleaned up. After the tenant is deleted, all its API keys become invalid. This operation does not automatically clean up projects, branches, or storage.
     *
     * @param request - DeleteAgenticDBTenantRequest
     * @returns DeleteAgenticDBTenantResponse
     */
    deleteAgenticDBTenant(request: $_model.DeleteAgenticDBTenantRequest): Promise<$_model.DeleteAgenticDBTenantResponse>;
    /**
     * Deletes an API key of an AgenticDB tenant.
     *
     * @param request - DeleteAgenticDBTenantApiKeyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAgenticDBTenantApiKeyResponse
     */
    deleteAgenticDBTenantApiKeyWithOptions(request: $_model.DeleteAgenticDBTenantApiKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAgenticDBTenantApiKeyResponse>;
    /**
     * Deletes an API key of an AgenticDB tenant.
     *
     * @param request - DeleteAgenticDBTenantApiKeyRequest
     * @returns DeleteAgenticDBTenantApiKeyResponse
     */
    deleteAgenticDBTenantApiKey(request: $_model.DeleteAgenticDBTenantApiKeyRequest): Promise<$_model.DeleteAgenticDBTenantApiKeyResponse>;
    /**
     * Deletes the specified PolarDB application. This operation does not delete the associated PolarDB instance.
     *
     * @remarks
     * ## Important
     * - This operation deletes a PolarDB application but does not affect the associated PolarDB instance.
     * - The delete operation is irreversible and permanently deletes the application. Proceed with caution.
     * - Ensure that you have backed up all critical data before proceeding.Before you delete an application, make sure that you have backed up all important data.
     *
     * @param request - DeleteApplicationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteApplicationResponse
     */
    deleteApplicationWithOptions(request: $_model.DeleteApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApplicationResponse>;
    /**
     * Deletes the specified PolarDB application. This operation does not delete the associated PolarDB instance.
     *
     * @remarks
     * ## Important
     * - This operation deletes a PolarDB application but does not affect the associated PolarDB instance.
     * - The delete operation is irreversible and permanently deletes the application. Proceed with caution.
     * - Ensure that you have backed up all critical data before proceeding.Before you delete an application, make sure that you have backed up all important data.
     *
     * @param request - DeleteApplicationRequest
     * @returns DeleteApplicationResponse
     */
    deleteApplication(request: $_model.DeleteApplicationRequest): Promise<$_model.DeleteApplicationResponse>;
    /**
     * Deletes a specified connection address for a PolarDB application.
     *
     * @param request - DeleteApplicationEndpointAddressRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteApplicationEndpointAddressResponse
     */
    deleteApplicationEndpointAddressWithOptions(request: $_model.DeleteApplicationEndpointAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApplicationEndpointAddressResponse>;
    /**
     * Deletes a specified connection address for a PolarDB application.
     *
     * @param request - DeleteApplicationEndpointAddressRequest
     * @returns DeleteApplicationEndpointAddressResponse
     */
    deleteApplicationEndpointAddress(request: $_model.DeleteApplicationEndpointAddressRequest): Promise<$_model.DeleteApplicationEndpointAddressResponse>;
    /**
     * Deletes an application prompt.
     *
     * @param request - DeleteApplicationPromptRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteApplicationPromptResponse
     */
    deleteApplicationPromptWithOptions(request: $_model.DeleteApplicationPromptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApplicationPromptResponse>;
    /**
     * Deletes an application prompt.
     *
     * @param request - DeleteApplicationPromptRequest
     * @returns DeleteApplicationPromptResponse
     */
    deleteApplicationPrompt(request: $_model.DeleteApplicationPromptRequest): Promise<$_model.DeleteApplicationPromptResponse>;
    /**
     * Deletes the backup sets of a PolarDB cluster.
     *
     * @remarks
     * Before you call this operation, make sure that the cluster meets the following requirements:
     * *   The cluster is in the Running state.
     * *   The backup sets are in the Success state.
     * > *   You can call the [DescribeBackups](https://help.aliyun.com/document_detail/98102.html) operation to query the status of backup sets.
     * >*   After you delete the backup set file, the storage space that is occupied by the file is released. The released storage space is smaller than the size of the file because your snapshots share some data blocks
     *
     * @param request - DeleteBackupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteBackupResponse
     */
    deleteBackupWithOptions(request: $_model.DeleteBackupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBackupResponse>;
    /**
     * Deletes the backup sets of a PolarDB cluster.
     *
     * @remarks
     * Before you call this operation, make sure that the cluster meets the following requirements:
     * *   The cluster is in the Running state.
     * *   The backup sets are in the Success state.
     * > *   You can call the [DescribeBackups](https://help.aliyun.com/document_detail/98102.html) operation to query the status of backup sets.
     * >*   After you delete the backup set file, the storage space that is occupied by the file is released. The released storage space is smaller than the size of the file because your snapshots share some data blocks
     *
     * @param request - DeleteBackupRequest
     * @returns DeleteBackupResponse
     */
    deleteBackup(request: $_model.DeleteBackupRequest): Promise<$_model.DeleteBackupResponse>;
    /**
     * Deletes a budget policy.
     *
     * @param request - DeleteBudgetPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteBudgetPolicyResponse
     */
    deleteBudgetPolicyWithOptions(request: $_model.DeleteBudgetPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBudgetPolicyResponse>;
    /**
     * Deletes a budget policy.
     *
     * @param request - DeleteBudgetPolicyRequest
     * @returns DeleteBudgetPolicyResponse
     */
    deleteBudgetPolicy(request: $_model.DeleteBudgetPolicyRequest): Promise<$_model.DeleteBudgetPolicyResponse>;
    /**
     * Deletes a consumer.
     *
     * @param request - DeleteConsumerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteConsumerResponse
     */
    deleteConsumerWithOptions(request: $_model.DeleteConsumerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConsumerResponse>;
    /**
     * Deletes a consumer.
     *
     * @param request - DeleteConsumerRequest
     * @returns DeleteConsumerResponse
     */
    deleteConsumer(request: $_model.DeleteConsumerRequest): Promise<$_model.DeleteConsumerResponse>;
    /**
     * Deletes a consumer group.
     *
     * @param request - DeleteConsumerGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteConsumerGroupResponse
     */
    deleteConsumerGroupWithOptions(request: $_model.DeleteConsumerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConsumerGroupResponse>;
    /**
     * Deletes a consumer group.
     *
     * @param request - DeleteConsumerGroupRequest
     * @returns DeleteConsumerGroupResponse
     */
    deleteConsumerGroup(request: $_model.DeleteConsumerGroupRequest): Promise<$_model.DeleteConsumerGroupResponse>;
    /**
     * Deletes a cost rule.
     *
     * @param request - DeleteCostRuleRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteCostRuleResponse
     */
    deleteCostRuleWithOptions(request: $_model.DeleteCostRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCostRuleResponse>;
    /**
     * Deletes a cost rule.
     *
     * @param request - DeleteCostRuleRequest
     * @returns DeleteCostRuleResponse
     */
    deleteCostRule(request: $_model.DeleteCostRuleRequest): Promise<$_model.DeleteCostRuleResponse>;
    /**
     * Releases a pay-as-you-go PolarDB cluster.
     *
     * @param request - DeleteDBClusterRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteDBClusterResponse
     */
    deleteDBClusterWithOptions(request: $_model.DeleteDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBClusterResponse>;
    /**
     * Releases a pay-as-you-go PolarDB cluster.
     *
     * @param request - DeleteDBClusterRequest
     * @returns DeleteDBClusterResponse
     */
    deleteDBCluster(request: $_model.DeleteDBClusterRequest): Promise<$_model.DeleteDBClusterResponse>;
    /**
     * Releases a custom cluster endpoint of a PolarDB cluster.
     *
     * @param request - DeleteDBClusterEndpointRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteDBClusterEndpointResponse
     */
    deleteDBClusterEndpointWithOptions(request: $_model.DeleteDBClusterEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBClusterEndpointResponse>;
    /**
     * Releases a custom cluster endpoint of a PolarDB cluster.
     *
     * @param request - DeleteDBClusterEndpointRequest
     * @returns DeleteDBClusterEndpointResponse
     */
    deleteDBClusterEndpoint(request: $_model.DeleteDBClusterEndpointRequest): Promise<$_model.DeleteDBClusterEndpointResponse>;
    /**
     * Deletes a cluster endpoint of a PolarDB for Edge cluster.
     *
     * @param request - DeleteDBClusterEndpointZonalRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteDBClusterEndpointZonalResponse
     */
    deleteDBClusterEndpointZonalWithOptions(request: $_model.DeleteDBClusterEndpointZonalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBClusterEndpointZonalResponse>;
    /**
     * Deletes a cluster endpoint of a PolarDB for Edge cluster.
     *
     * @param request - DeleteDBClusterEndpointZonalRequest
     * @returns DeleteDBClusterEndpointZonalResponse
     */
    deleteDBClusterEndpointZonal(request: $_model.DeleteDBClusterEndpointZonalRequest): Promise<$_model.DeleteDBClusterEndpointZonalResponse>;
    /**
     * Releases the public endpoints of a PolarDB cluster, including the primary endpoint, default cluster endpoint, and custom cluster endpoint.
     *
     * @remarks
     * > - You can delete a public-facing or classic network endpoint of the primary endpoint, the default cluster endpoint, or a custom cluster endpoint.
     * >
     * > - Classic network endpoints are supported only on the China site (aliyun.com). Therefore, you do not need to delete classic network endpoints on the International site (alibabacloud.com).
     *
     * @param request - DeleteDBEndpointAddressRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteDBEndpointAddressResponse
     */
    deleteDBEndpointAddressWithOptions(request: $_model.DeleteDBEndpointAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBEndpointAddressResponse>;
    /**
     * Releases the public endpoints of a PolarDB cluster, including the primary endpoint, default cluster endpoint, and custom cluster endpoint.
     *
     * @remarks
     * > - You can delete a public-facing or classic network endpoint of the primary endpoint, the default cluster endpoint, or a custom cluster endpoint.
     * >
     * > - Classic network endpoints are supported only on the China site (aliyun.com). Therefore, you do not need to delete classic network endpoints on the International site (alibabacloud.com).
     *
     * @param request - DeleteDBEndpointAddressRequest
     * @returns DeleteDBEndpointAddressResponse
     */
    deleteDBEndpointAddress(request: $_model.DeleteDBEndpointAddressRequest): Promise<$_model.DeleteDBEndpointAddressResponse>;
    /**
     * Deletes a DBLink from a PolarDB for PostgreSQL (Compatible with Oracle) cluster.
     *
     * @param request - DeleteDBLinkRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteDBLinkResponse
     */
    deleteDBLinkWithOptions(request: $_model.DeleteDBLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBLinkResponse>;
    /**
     * Deletes a DBLink from a PolarDB for PostgreSQL (Compatible with Oracle) cluster.
     *
     * @param request - DeleteDBLinkRequest
     * @returns DeleteDBLinkResponse
     */
    deleteDBLink(request: $_model.DeleteDBLinkRequest): Promise<$_model.DeleteDBLinkResponse>;
    /**
     * Deletes a read-only node from a PolarDB cluster.
     *
     * @remarks
     * Deletes a read-only node from a PolarDB cluster. Before you call this operation, the cluster must be in the Running state. You can call the DescribeDBClusters operation to query the DBClusterStatus parameter and check the cluster state. If the cluster is in a transitional state such as DBNodeCreating or DBNodeDeleting, wait until the cluster returns to the Running state before you call this operation.
     *
     * @param request - DeleteDBNodesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteDBNodesResponse
     */
    deleteDBNodesWithOptions(request: $_model.DeleteDBNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBNodesResponse>;
    /**
     * Deletes a read-only node from a PolarDB cluster.
     *
     * @remarks
     * Deletes a read-only node from a PolarDB cluster. Before you call this operation, the cluster must be in the Running state. You can call the DescribeDBClusters operation to query the DBClusterStatus parameter and check the cluster state. If the cluster is in a transitional state such as DBNodeCreating or DBNodeDeleting, wait until the cluster returns to the Running state before you call this operation.
     *
     * @param request - DeleteDBNodesRequest
     * @returns DeleteDBNodesResponse
     */
    deleteDBNodes(request: $_model.DeleteDBNodesRequest): Promise<$_model.DeleteDBNodesResponse>;
    /**
     * Deletes a data processing task template in a specified region.
     *
     * @param request - DeleteDataProcessJobTemplateRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteDataProcessJobTemplateResponse
     */
    deleteDataProcessJobTemplateWithOptions(request: $_model.DeleteDataProcessJobTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataProcessJobTemplateResponse>;
    /**
     * Deletes a data processing task template in a specified region.
     *
     * @param request - DeleteDataProcessJobTemplateRequest
     * @returns DeleteDataProcessJobTemplateResponse
     */
    deleteDataProcessJobTemplate(request: $_model.DeleteDataProcessJobTemplateRequest): Promise<$_model.DeleteDataProcessJobTemplateResponse>;
    /**
     * Deletes a database from a PolarDB cluster.
     *
     * @remarks
     * >- The cluster must be in the Running state and unlocked. Otherwise, the specified database cannot be deleted.
     * >- The delete operation is performed in an asynchronous manner. A long period of time may be required to delete a large database. A success response for this operation only indicates that the request to delete the database is sent. You must query the database to check whether the database is deleted.
     *
     * @param request - DeleteDatabaseRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteDatabaseResponse
     */
    deleteDatabaseWithOptions(request: $_model.DeleteDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDatabaseResponse>;
    /**
     * Deletes a database from a PolarDB cluster.
     *
     * @remarks
     * >- The cluster must be in the Running state and unlocked. Otherwise, the specified database cannot be deleted.
     * >- The delete operation is performed in an asynchronous manner. A long period of time may be required to delete a large database. A success response for this operation only indicates that the request to delete the database is sent. You must query the database to check whether the database is deleted.
     *
     * @param request - DeleteDatabaseRequest
     * @returns DeleteDatabaseResponse
     */
    deleteDatabase(request: $_model.DeleteDatabaseRequest): Promise<$_model.DeleteDatabaseResponse>;
    /**
     * Deletes a database in a PolarDB on ENS cluster.
     *
     * @param request - DeleteDatabaseZonalRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteDatabaseZonalResponse
     */
    deleteDatabaseZonalWithOptions(request: $_model.DeleteDatabaseZonalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDatabaseZonalResponse>;
    /**
     * Deletes a database in a PolarDB on ENS cluster.
     *
     * @param request - DeleteDatabaseZonalRequest
     * @returns DeleteDatabaseZonalResponse
     */
    deleteDatabaseZonal(request: $_model.DeleteDatabaseZonalRequest): Promise<$_model.DeleteDatabaseZonalResponse>;
    /**
     * Deletes a role.
     *
     * @param request - DeleteEncryptionDBRolePrivilegeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteEncryptionDBRolePrivilegeResponse
     */
    deleteEncryptionDBRolePrivilegeWithOptions(request: $_model.DeleteEncryptionDBRolePrivilegeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEncryptionDBRolePrivilegeResponse>;
    /**
     * Deletes a role.
     *
     * @param request - DeleteEncryptionDBRolePrivilegeRequest
     * @returns DeleteEncryptionDBRolePrivilegeResponse
     */
    deleteEncryptionDBRolePrivilege(request: $_model.DeleteEncryptionDBRolePrivilegeRequest): Promise<$_model.DeleteEncryptionDBRolePrivilegeResponse>;
    /**
     * Deletes an extension.
     *
     * @param request - DeleteExtensionsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteExtensionsResponse
     */
    deleteExtensionsWithOptions(request: $_model.DeleteExtensionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteExtensionsResponse>;
    /**
     * Deletes an extension.
     *
     * @param request - DeleteExtensionsRequest
     * @returns DeleteExtensionsResponse
     */
    deleteExtensions(request: $_model.DeleteExtensionsRequest): Promise<$_model.DeleteExtensionsResponse>;
    /**
     * Deletes the specified SQL firewall rules.
     *
     * @param request - DeleteFirewallRulesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteFirewallRulesResponse
     */
    deleteFirewallRulesWithOptions(request: $_model.DeleteFirewallRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFirewallRulesResponse>;
    /**
     * Deletes the specified SQL firewall rules.
     *
     * @param request - DeleteFirewallRulesRequest
     * @returns DeleteFirewallRulesResponse
     */
    deleteFirewallRules(request: $_model.DeleteFirewallRulesRequest): Promise<$_model.DeleteFirewallRulesResponse>;
    /**
     * Deletes a gateway instance.
     *
     * @param request - DeleteGatewayRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteGatewayResponse
     */
    deleteGatewayWithOptions(request: $_model.DeleteGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGatewayResponse>;
    /**
     * Deletes a gateway instance.
     *
     * @param request - DeleteGatewayRequest
     * @returns DeleteGatewayResponse
     */
    deleteGateway(request: $_model.DeleteGatewayRequest): Promise<$_model.DeleteGatewayResponse>;
    /**
     * Deletes a Polarlakebase Global Data Network (GDN).
     *
     * @remarks
     * > This API deletes the Global Data Network (GDN) for PolarFS. Do not confuse it with the DeleteGlobalDatabaseNetwork API, which applies to PolarDB clusters.
     *
     * @param request - DeleteGlobalDataNetworkRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteGlobalDataNetworkResponse
     */
    deleteGlobalDataNetworkWithOptions(request: $_model.DeleteGlobalDataNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGlobalDataNetworkResponse>;
    /**
     * Deletes a Polarlakebase Global Data Network (GDN).
     *
     * @remarks
     * > This API deletes the Global Data Network (GDN) for PolarFS. Do not confuse it with the DeleteGlobalDatabaseNetwork API, which applies to PolarDB clusters.
     *
     * @param request - DeleteGlobalDataNetworkRequest
     * @returns DeleteGlobalDataNetworkResponse
     */
    deleteGlobalDataNetwork(request: $_model.DeleteGlobalDataNetworkRequest): Promise<$_model.DeleteGlobalDataNetworkResponse>;
    /**
     * Deletes a global database network (GDN).
     *
     * @remarks
     * > A GDN can be deleted only if it contains a single primary cluster.
     *
     * @param request - DeleteGlobalDatabaseNetworkRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteGlobalDatabaseNetworkResponse
     */
    deleteGlobalDatabaseNetworkWithOptions(request: $_model.DeleteGlobalDatabaseNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGlobalDatabaseNetworkResponse>;
    /**
     * Deletes a global database network (GDN).
     *
     * @remarks
     * > A GDN can be deleted only if it contains a single primary cluster.
     *
     * @param request - DeleteGlobalDatabaseNetworkRequest
     * @returns DeleteGlobalDatabaseNetworkResponse
     */
    deleteGlobalDatabaseNetwork(request: $_model.DeleteGlobalDatabaseNetworkRequest): Promise<$_model.DeleteGlobalDatabaseNetworkResponse>;
    /**
     * Deletes a global IP whitelist template.
     *
     * @param request - DeleteGlobalSecurityIPGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteGlobalSecurityIPGroupResponse
     */
    deleteGlobalSecurityIPGroupWithOptions(request: $_model.DeleteGlobalSecurityIPGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGlobalSecurityIPGroupResponse>;
    /**
     * Deletes a global IP whitelist template.
     *
     * @param request - DeleteGlobalSecurityIPGroupRequest
     * @returns DeleteGlobalSecurityIPGroupResponse
     */
    deleteGlobalSecurityIPGroup(request: $_model.DeleteGlobalSecurityIPGroupRequest): Promise<$_model.DeleteGlobalSecurityIPGroupResponse>;
    /**
     * Deletes a knowledge base synchronization link.
     *
     * @param request - DeleteKBSyncLinkRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteKBSyncLinkResponse
     */
    deleteKBSyncLinkWithOptions(request: $_model.DeleteKBSyncLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteKBSyncLinkResponse>;
    /**
     * Deletes a knowledge base synchronization link.
     *
     * @param request - DeleteKBSyncLinkRequest
     * @returns DeleteKBSyncLinkResponse
     */
    deleteKBSyncLink(request: $_model.DeleteKBSyncLinkRequest): Promise<$_model.DeleteKBSyncLinkResponse>;
    /**
     * Deletes a knowledge base.
     *
     * @param request - DeleteKnowledgeBaseRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteKnowledgeBaseResponse
     */
    deleteKnowledgeBaseWithOptions(request: $_model.DeleteKnowledgeBaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteKnowledgeBaseResponse>;
    /**
     * Deletes a knowledge base.
     *
     * @param request - DeleteKnowledgeBaseRequest
     * @returns DeleteKnowledgeBaseResponse
     */
    deleteKnowledgeBase(request: $_model.DeleteKnowledgeBaseRequest): Promise<$_model.DeleteKnowledgeBaseResponse>;
    /**
     * Deletes a knowledge base file.
     *
     * @param request - DeleteKnowledgeBaseFileRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteKnowledgeBaseFileResponse
     */
    deleteKnowledgeBaseFileWithOptions(request: $_model.DeleteKnowledgeBaseFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteKnowledgeBaseFileResponse>;
    /**
     * Deletes a knowledge base file.
     *
     * @param request - DeleteKnowledgeBaseFileRequest
     * @returns DeleteKnowledgeBaseFileResponse
     */
    deleteKnowledgeBaseFile(request: $_model.DeleteKnowledgeBaseFileRequest): Promise<$_model.DeleteKnowledgeBaseFileResponse>;
    /**
     * Deletes a parameter template mounted to Lakebase.
     *
     * @param request - DeleteLakebaseMountParameterGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteLakebaseMountParameterGroupResponse
     */
    deleteLakebaseMountParameterGroupWithOptions(request: $_model.DeleteLakebaseMountParameterGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLakebaseMountParameterGroupResponse>;
    /**
     * Deletes a parameter template mounted to Lakebase.
     *
     * @param request - DeleteLakebaseMountParameterGroupRequest
     * @returns DeleteLakebaseMountParameterGroupResponse
     */
    deleteLakebaseMountParameterGroup(request: $_model.DeleteLakebaseMountParameterGroupRequest): Promise<$_model.DeleteLakebaseMountParameterGroupResponse>;
    /**
     * Deletes a PolarFS S3 account.
     *
     * @param request - DeleteLakebaseS3AccountRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteLakebaseS3AccountResponse
     */
    deleteLakebaseS3AccountWithOptions(request: $_model.DeleteLakebaseS3AccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLakebaseS3AccountResponse>;
    /**
     * Deletes a PolarFS S3 account.
     *
     * @param request - DeleteLakebaseS3AccountRequest
     * @returns DeleteLakebaseS3AccountResponse
     */
    deleteLakebaseS3Account(request: $_model.DeleteLakebaseS3AccountRequest): Promise<$_model.DeleteLakebaseS3AccountResponse>;
    /**
     * Deletes the specified data masking rules.
     *
     * @param request - DeleteMaskingRulesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteMaskingRulesResponse
     */
    deleteMaskingRulesWithOptions(request: $_model.DeleteMaskingRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMaskingRulesResponse>;
    /**
     * Deletes the specified data masking rules.
     *
     * @param request - DeleteMaskingRulesRequest
     * @returns DeleteMaskingRulesResponse
     */
    deleteMaskingRules(request: $_model.DeleteMaskingRulesRequest): Promise<$_model.DeleteMaskingRulesResponse>;
    /**
     * Deletes a model API.
     *
     * @param request - DeleteModelApiRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteModelApiResponse
     */
    deleteModelApiWithOptions(request: $_model.DeleteModelApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteModelApiResponse>;
    /**
     * Deletes a model API.
     *
     * @param request - DeleteModelApiRequest
     * @returns DeleteModelApiResponse
     */
    deleteModelApi(request: $_model.DeleteModelApiRequest): Promise<$_model.DeleteModelApiResponse>;
    /**
     * Deletes a model service.
     *
     * @param request - DeleteModelServiceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteModelServiceResponse
     */
    deleteModelServiceWithOptions(request: $_model.DeleteModelServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteModelServiceResponse>;
    /**
     * Deletes a model service.
     *
     * @param request - DeleteModelServiceRequest
     * @returns DeleteModelServiceResponse
     */
    deleteModelService(request: $_model.DeleteModelServiceRequest): Promise<$_model.DeleteModelServiceResponse>;
    /**
     * Deletes a network channel.
     *
     * @param request - DeleteNetworkChannelRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteNetworkChannelResponse
     */
    deleteNetworkChannelWithOptions(request: $_model.DeleteNetworkChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNetworkChannelResponse>;
    /**
     * Deletes a network channel.
     *
     * @param request - DeleteNetworkChannelRequest
     * @returns DeleteNetworkChannelResponse
     */
    deleteNetworkChannel(request: $_model.DeleteNetworkChannelRequest): Promise<$_model.DeleteNetworkChannelResponse>;
    /**
     * Deletes a PolarDB parameter template.
     *
     * @remarks
     * Parameter templates help you manage cluster parameters in batches. You can quickly apply a template to PolarDB clusters. For more information, see [Use parameter templates](https://help.aliyun.com/document_detail/207009.html).
     * > Deleting a parameter template does not affect PolarDB clusters to which the template has been applied.
     *
     * @param request - DeleteParameterGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteParameterGroupResponse
     */
    deleteParameterGroupWithOptions(request: $_model.DeleteParameterGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteParameterGroupResponse>;
    /**
     * Deletes a PolarDB parameter template.
     *
     * @remarks
     * Parameter templates help you manage cluster parameters in batches. You can quickly apply a template to PolarDB clusters. For more information, see [Use parameter templates](https://help.aliyun.com/document_detail/207009.html).
     * > Deleting a parameter template does not affect PolarDB clusters to which the template has been applied.
     *
     * @param request - DeleteParameterGroupRequest
     * @returns DeleteParameterGroupResponse
     */
    deleteParameterGroup(request: $_model.DeleteParameterGroupRequest): Promise<$_model.DeleteParameterGroupResponse>;
    /**
     * Removes an agent and its associated bindings from a specified PolarClaw.
     *
     * @remarks
     * ## Request description
     * - After this API is executed, it returns the ID of the successfully removed agent and the number of removed bindings.
     * - Ensure that you know the target `AgentId` before calling this API. Otherwise, the operation may fail or affect unexpected agents.
     *
     * @param request - DeletePolarClawAgentRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeletePolarClawAgentResponse
     */
    deletePolarClawAgentWithOptions(request: $_model.DeletePolarClawAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePolarClawAgentResponse>;
    /**
     * Removes an agent and its associated bindings from a specified PolarClaw.
     *
     * @remarks
     * ## Request description
     * - After this API is executed, it returns the ID of the successfully removed agent and the number of removed bindings.
     * - Ensure that you know the target `AgentId` before calling this API. Otherwise, the operation may fail or affect unexpected agents.
     *
     * @param request - DeletePolarClawAgentRequest
     * @returns DeletePolarClawAgentResponse
     */
    deletePolarClawAgent(request: $_model.DeletePolarClawAgentRequest): Promise<$_model.DeletePolarClawAgentResponse>;
    /**
     * Deletes a PolarClaw Channel.
     *
     * @remarks
     * ## Description
     * Use the `DeletePolarClawChannel` operation to delete a specified PolarClaw Channel. You can also uninstall the associated channel plugin. Before you delete the channel, back up all important data and ensure that no critical tasks are running on it.
     *
     * @param request - DeletePolarClawChannelRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeletePolarClawChannelResponse
     */
    deletePolarClawChannelWithOptions(request: $_model.DeletePolarClawChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePolarClawChannelResponse>;
    /**
     * Deletes a PolarClaw Channel.
     *
     * @remarks
     * ## Description
     * Use the `DeletePolarClawChannel` operation to delete a specified PolarClaw Channel. You can also uninstall the associated channel plugin. Before you delete the channel, back up all important data and ensure that no critical tasks are running on it.
     *
     * @param request - DeletePolarClawChannelRequest
     * @returns DeletePolarClawChannelResponse
     */
    deletePolarClawChannel(request: $_model.DeletePolarClawChannelRequest): Promise<$_model.DeletePolarClawChannelResponse>;
    /**
     * Deletes a PolarClaw cron job.
     *
     * @remarks
     * ## Description
     * To delete a PolarClaw cron job, provide its `ApplicationId` and `JobId`. Ensure that the IDs are correct to prevent accidental deletion of other jobs.
     * **Note**: This operation is irreversible. Proceed with caution.
     *
     * @param request - DeletePolarClawCronJobRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeletePolarClawCronJobResponse
     */
    deletePolarClawCronJobWithOptions(request: $_model.DeletePolarClawCronJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePolarClawCronJobResponse>;
    /**
     * Deletes a PolarClaw cron job.
     *
     * @remarks
     * ## Description
     * To delete a PolarClaw cron job, provide its `ApplicationId` and `JobId`. Ensure that the IDs are correct to prevent accidental deletion of other jobs.
     * **Note**: This operation is irreversible. Proceed with caution.
     *
     * @param request - DeletePolarClawCronJobRequest
     * @returns DeletePolarClawCronJobResponse
     */
    deletePolarClawCronJob(request: $_model.DeletePolarClawCronJobRequest): Promise<$_model.DeletePolarClawCronJobResponse>;
    /**
     * Deletes a PolarClaw skill.
     *
     * @param request - DeletePolarClawSkillRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeletePolarClawSkillResponse
     */
    deletePolarClawSkillWithOptions(request: $_model.DeletePolarClawSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePolarClawSkillResponse>;
    /**
     * Deletes a PolarClaw skill.
     *
     * @param request - DeletePolarClawSkillRequest
     * @returns DeletePolarClawSkillResponse
     */
    deletePolarClawSkill(request: $_model.DeletePolarClawSkillRequest): Promise<$_model.DeletePolarClawSkillResponse>;
    /**
     * Releases a pay-as-you-go PolarFs instance.
     *
     * @param request - DeletePolarFsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeletePolarFsResponse
     */
    deletePolarFsWithOptions(request: $_model.DeletePolarFsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePolarFsResponse>;
    /**
     * Releases a pay-as-you-go PolarFs instance.
     *
     * @param request - DeletePolarFsRequest
     * @returns DeletePolarFsResponse
     */
    deletePolarFs(request: $_model.DeletePolarFsRequest): Promise<$_model.DeletePolarFsResponse>;
    /**
     * Deletes objects from PolarLakebase. This operation supports only Basic Edition and Cold Storage Edition instances.
     *
     * @remarks
     * ## 请求说明
     * - `PolarFsInstanceId` 是必须提供的参数，用来指定要操作的PolarFS实例。
     * - `DBClusterId` 参数是可选的，如果提供，则表示与特定PolarDB集群关联的操作。
     * - `Objects` 参数是一个字符串数组，列出了所有需要被删除的对象路径，并且是必需的。
     *
     * @param tmpReq - DeletePolarFsObjectsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeletePolarFsObjectsResponse
     */
    deletePolarFsObjectsWithOptions(tmpReq: $_model.DeletePolarFsObjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePolarFsObjectsResponse>;
    /**
     * Deletes objects from PolarLakebase. This operation supports only Basic Edition and Cold Storage Edition instances.
     *
     * @remarks
     * ## 请求说明
     * - `PolarFsInstanceId` 是必须提供的参数，用来指定要操作的PolarFS实例。
     * - `DBClusterId` 参数是可选的，如果提供，则表示与特定PolarDB集群关联的操作。
     * - `Objects` 参数是一个字符串数组，列出了所有需要被删除的对象路径，并且是必需的。
     *
     * @param request - DeletePolarFsObjectsRequest
     * @returns DeletePolarFsObjectsResponse
     */
    deletePolarFsObjects(request: $_model.DeletePolarFsObjectsRequest): Promise<$_model.DeletePolarFsObjectsResponse>;
    /**
     * Deletes a transparent acceleration path mapping.
     *
     * @param request - DeletePolarFsPathMappingRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeletePolarFsPathMappingResponse
     */
    deletePolarFsPathMappingWithOptions(request: $_model.DeletePolarFsPathMappingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePolarFsPathMappingResponse>;
    /**
     * Deletes a transparent acceleration path mapping.
     *
     * @param request - DeletePolarFsPathMappingRequest
     * @returns DeletePolarFsPathMappingResponse
     */
    deletePolarFsPathMapping(request: $_model.DeletePolarFsPathMappingRequest): Promise<$_model.DeletePolarFsPathMappingResponse>;
    /**
     * Deletes one or more quota rules from a specified Polarlakebase instance.
     *
     * @remarks
     * ## Request description
     * - You must specify the `PolarFsInstanceId` parameter to identify the Polarlakebase instance.
     * - The `Quotas` parameter is a list of quota rules to delete. Each rule is uniquely identified by its `Name` and `Id`. You can delete up to 21 rules in a single request.
     * - For each quota rule, provide both the `Name` and `Id`. This information must match an existing rule.
     *
     * @param request - DeletePolarFsQuotaRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeletePolarFsQuotaResponse
     */
    deletePolarFsQuotaWithOptions(request: $_model.DeletePolarFsQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePolarFsQuotaResponse>;
    /**
     * Deletes one or more quota rules from a specified Polarlakebase instance.
     *
     * @remarks
     * ## Request description
     * - You must specify the `PolarFsInstanceId` parameter to identify the Polarlakebase instance.
     * - The `Quotas` parameter is a list of quota rules to delete. Each rule is uniquely identified by its `Name` and `Id`. You can delete up to 21 rules in a single request.
     * - For each quota rule, provide both the `Name` and `Id`. This information must match an existing rule.
     *
     * @param request - DeletePolarFsQuotaRequest
     * @returns DeletePolarFsQuotaResponse
     */
    deletePolarFsQuota(request: $_model.DeletePolarFsQuotaRequest): Promise<$_model.DeletePolarFsQuotaResponse>;
    /**
     * Deletes authorized accounts for cold storage.
     *
     * @param request - DeletePolarOSSAuthorizedAccountRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeletePolarOSSAuthorizedAccountResponse
     */
    deletePolarOSSAuthorizedAccountWithOptions(request: $_model.DeletePolarOSSAuthorizedAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePolarOSSAuthorizedAccountResponse>;
    /**
     * Deletes authorized accounts for cold storage.
     *
     * @param request - DeletePolarOSSAuthorizedAccountRequest
     * @returns DeletePolarOSSAuthorizedAccountResponse
     */
    deletePolarOSSAuthorizedAccount(request: $_model.DeletePolarOSSAuthorizedAccountRequest): Promise<$_model.DeletePolarOSSAuthorizedAccountResponse>;
    /**
     * Deletes a throttling policy.
     *
     * @param request - DeleteRateLimitPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteRateLimitPolicyResponse
     */
    deleteRateLimitPolicyWithOptions(request: $_model.DeleteRateLimitPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRateLimitPolicyResponse>;
    /**
     * Deletes a throttling policy.
     *
     * @param request - DeleteRateLimitPolicyRequest
     * @returns DeleteRateLimitPolicyResponse
     */
    deleteRateLimitPolicy(request: $_model.DeleteRateLimitPolicyRequest): Promise<$_model.DeleteRateLimitPolicyResponse>;
    /**
     * Deletes a resource control rule from a specified PolarDB for MySQL cluster.
     *
     * @remarks
     * Resource Control is used to limit the CPU resources available to specified users, databases, queries, or connections in a PolarDB for MySQL cluster. This release supports the create, update, delete, attach, and detach operations for resource control rules. Querying Resource Control CPU usage is not supported.
     * ### Limits
     * - This feature applies only to PolarDB for MySQL Cluster Edition clusters that support Resource Control. PolarDB for MySQL Standard Edition is not supported.
     * - In the cluster kernel parameter Settings, loose_enable_resource_control must be set to ON.
     * >Notice: This is a notice.</notice>
     *
     * @param request - DeleteResourceControlRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteResourceControlResponse
     */
    deleteResourceControlWithOptions(request: $_model.DeleteResourceControlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteResourceControlResponse>;
    /**
     * Deletes a resource control rule from a specified PolarDB for MySQL cluster.
     *
     * @remarks
     * Resource Control is used to limit the CPU resources available to specified users, databases, queries, or connections in a PolarDB for MySQL cluster. This release supports the create, update, delete, attach, and detach operations for resource control rules. Querying Resource Control CPU usage is not supported.
     * ### Limits
     * - This feature applies only to PolarDB for MySQL Cluster Edition clusters that support Resource Control. PolarDB for MySQL Standard Edition is not supported.
     * - In the cluster kernel parameter Settings, loose_enable_resource_control must be set to ON.
     * >Notice: This is a notice.</notice>
     *
     * @param request - DeleteResourceControlRequest
     * @returns DeleteResourceControlResponse
     */
    deleteResourceControl(request: $_model.DeleteResourceControlRequest): Promise<$_model.DeleteResourceControlResponse>;
    /**
     * Deletes SQL throttling rules.
     *
     * @param request - DeleteSQLRateLimitingRulesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteSQLRateLimitingRulesResponse
     */
    deleteSQLRateLimitingRulesWithOptions(request: $_model.DeleteSQLRateLimitingRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSQLRateLimitingRulesResponse>;
    /**
     * Deletes SQL throttling rules.
     *
     * @param request - DeleteSQLRateLimitingRulesRequest
     * @returns DeleteSQLRateLimitingRulesResponse
     */
    deleteSQLRateLimitingRules(request: $_model.DeleteSQLRateLimitingRulesRequest): Promise<$_model.DeleteSQLRateLimitingRulesResponse>;
    /**
     * Queries the AI assistant order information for the current account, including the order status, version, capacity package, and expiration time.
     *
     * @param request - DescribeAIAgentOrderRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAIAgentOrderResponse
     */
    describeAIAgentOrderWithOptions(request: $_model.DescribeAIAgentOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAIAgentOrderResponse>;
    /**
     * Queries the AI assistant order information for the current account, including the order status, version, capacity package, and expiration time.
     *
     * @param request - DescribeAIAgentOrderRequest
     * @returns DescribeAIAgentOrderResponse
     */
    describeAIAgentOrder(request: $_model.DescribeAIAgentOrderRequest): Promise<$_model.DescribeAIAgentOrderResponse>;
    /**
     * Queries the API keys for the model service.
     *
     * @param request - DescribeAIDBClusterApiKeysRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAIDBClusterApiKeysResponse
     */
    describeAIDBClusterApiKeysWithOptions(request: $_model.DescribeAIDBClusterApiKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAIDBClusterApiKeysResponse>;
    /**
     * Queries the API keys for the model service.
     *
     * @param request - DescribeAIDBClusterApiKeysRequest
     * @returns DescribeAIDBClusterApiKeysResponse
     */
    describeAIDBClusterApiKeys(request: $_model.DescribeAIDBClusterApiKeysRequest): Promise<$_model.DescribeAIDBClusterApiKeysResponse>;
    /**
     * Queries the details of a custom instance.
     *
     * @param request - DescribeAIDBClusterAttributeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAIDBClusterAttributeResponse
     */
    describeAIDBClusterAttributeWithOptions(request: $_model.DescribeAIDBClusterAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAIDBClusterAttributeResponse>;
    /**
     * Queries the details of a custom instance.
     *
     * @param request - DescribeAIDBClusterAttributeRequest
     * @returns DescribeAIDBClusterAttributeResponse
     */
    describeAIDBClusterAttribute(request: $_model.DescribeAIDBClusterAttributeRequest): Promise<$_model.DescribeAIDBClusterAttributeResponse>;
    /**
     * Queries a list of datasets.
     *
     * @param request - DescribeAIDBClusterDatasetsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAIDBClusterDatasetsResponse
     */
    describeAIDBClusterDatasetsWithOptions(request: $_model.DescribeAIDBClusterDatasetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAIDBClusterDatasetsResponse>;
    /**
     * Queries a list of datasets.
     *
     * @param request - DescribeAIDBClusterDatasetsRequest
     * @returns DescribeAIDBClusterDatasetsResponse
     */
    describeAIDBClusterDatasets(request: $_model.DescribeAIDBClusterDatasetsRequest): Promise<$_model.DescribeAIDBClusterDatasetsResponse>;
    /**
     * Retrieves AI container performance metrics.
     *
     * @param request - DescribeAIDBClusterPerformanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAIDBClusterPerformanceResponse
     */
    describeAIDBClusterPerformanceWithOptions(request: $_model.DescribeAIDBClusterPerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAIDBClusterPerformanceResponse>;
    /**
     * Retrieves AI container performance metrics.
     *
     * @param request - DescribeAIDBClusterPerformanceRequest
     * @returns DescribeAIDBClusterPerformanceResponse
     */
    describeAIDBClusterPerformance(request: $_model.DescribeAIDBClusterPerformanceRequest): Promise<$_model.DescribeAIDBClusterPerformanceResponse>;
    /**
     * Queries the node resource usage and pod resource requests in an AI database cluster.
     *
     * @param request - DescribeAIDBClusterResourceUsageRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAIDBClusterResourceUsageResponse
     */
    describeAIDBClusterResourceUsageWithOptions(request: $_model.DescribeAIDBClusterResourceUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAIDBClusterResourceUsageResponse>;
    /**
     * Queries the node resource usage and pod resource requests in an AI database cluster.
     *
     * @param request - DescribeAIDBClusterResourceUsageRequest
     * @returns DescribeAIDBClusterResourceUsageResponse
     */
    describeAIDBClusterResourceUsage(request: $_model.DescribeAIDBClusterResourceUsageRequest): Promise<$_model.DescribeAIDBClusterResourceUsageResponse>;
    /**
     * Retrieves the details of a task instance.
     *
     * @param request - DescribeAIDBClusterTaskAttributeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAIDBClusterTaskAttributeResponse
     */
    describeAIDBClusterTaskAttributeWithOptions(request: $_model.DescribeAIDBClusterTaskAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAIDBClusterTaskAttributeResponse>;
    /**
     * Retrieves the details of a task instance.
     *
     * @param request - DescribeAIDBClusterTaskAttributeRequest
     * @returns DescribeAIDBClusterTaskAttributeResponse
     */
    describeAIDBClusterTaskAttribute(request: $_model.DescribeAIDBClusterTaskAttributeRequest): Promise<$_model.DescribeAIDBClusterTaskAttributeResponse>;
    /**
     * Queries the logs of model operators.
     *
     * @param request - DescribeAIDBClusterTaskLogFilesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAIDBClusterTaskLogFilesResponse
     */
    describeAIDBClusterTaskLogFilesWithOptions(request: $_model.DescribeAIDBClusterTaskLogFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAIDBClusterTaskLogFilesResponse>;
    /**
     * Queries the logs of model operators.
     *
     * @param request - DescribeAIDBClusterTaskLogFilesRequest
     * @returns DescribeAIDBClusterTaskLogFilesResponse
     */
    describeAIDBClusterTaskLogFiles(request: $_model.DescribeAIDBClusterTaskLogFilesRequest): Promise<$_model.DescribeAIDBClusterTaskLogFilesResponse>;
    /**
     * Queries the metrics of model operators.
     *
     * @remarks
     * > For more information about kernel versions for PolarDB for MySQL clusters, see [Kernel versions](https://help.aliyun.com/document_detail/471239.html) and [Kernel release notes](https://help.aliyun.com/document_detail/423884.html).
     *
     * @param request - DescribeAIDBClusterTaskMetricsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAIDBClusterTaskMetricsResponse
     */
    describeAIDBClusterTaskMetricsWithOptions(request: $_model.DescribeAIDBClusterTaskMetricsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAIDBClusterTaskMetricsResponse>;
    /**
     * Queries the metrics of model operators.
     *
     * @remarks
     * > For more information about kernel versions for PolarDB for MySQL clusters, see [Kernel versions](https://help.aliyun.com/document_detail/471239.html) and [Kernel release notes](https://help.aliyun.com/document_detail/423884.html).
     *
     * @param request - DescribeAIDBClusterTaskMetricsRequest
     * @returns DescribeAIDBClusterTaskMetricsResponse
     */
    describeAIDBClusterTaskMetrics(request: $_model.DescribeAIDBClusterTaskMetricsRequest): Promise<$_model.DescribeAIDBClusterTaskMetricsResponse>;
    /**
     * Retrieves the list of model operators for a specified PolarDB instance.
     *
     * @remarks
     * ## Request description
     * - This operation allows you to filter and retrieve a list of model operators by using the `RelativeDBClusterId` and `KubeType` parameters.
     * - Note: Make sure that the `RelativeDBClusterId` you provide matches the instance ID of an existing PolarDB database. Otherwise, the data cannot be retrieved.
     *
     * @param request - DescribeAIDBClusterTasksRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAIDBClusterTasksResponse
     */
    describeAIDBClusterTasksWithOptions(request: $_model.DescribeAIDBClusterTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAIDBClusterTasksResponse>;
    /**
     * Retrieves the list of model operators for a specified PolarDB instance.
     *
     * @remarks
     * ## Request description
     * - This operation allows you to filter and retrieve a list of model operators by using the `RelativeDBClusterId` and `KubeType` parameters.
     * - Note: Make sure that the `RelativeDBClusterId` you provide matches the instance ID of an existing PolarDB database. Otherwise, the data cannot be retrieved.
     *
     * @param request - DescribeAIDBClusterTasksRequest
     * @returns DescribeAIDBClusterTasksResponse
     */
    describeAIDBClusterTasks(request: $_model.DescribeAIDBClusterTasksRequest): Promise<$_model.DescribeAIDBClusterTasksResponse>;
    /**
     * Queries the list of custom clusters.
     *
     * @param request - DescribeAIDBClustersRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAIDBClustersResponse
     */
    describeAIDBClustersWithOptions(request: $_model.DescribeAIDBClustersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAIDBClustersResponse>;
    /**
     * Queries the list of custom clusters.
     *
     * @param request - DescribeAIDBClustersRequest
     * @returns DescribeAIDBClustersResponse
     */
    describeAIDBClusters(request: $_model.DescribeAIDBClustersRequest): Promise<$_model.DescribeAIDBClustersResponse>;
    /**
     * Retrieves the status of the PolarDB for AI feature.
     *
     * @param request - DescribeAITaskStatusRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAITaskStatusResponse
     */
    describeAITaskStatusWithOptions(request: $_model.DescribeAITaskStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAITaskStatusResponse>;
    /**
     * Retrieves the status of the PolarDB for AI feature.
     *
     * @param request - DescribeAITaskStatusRequest
     * @returns DescribeAITaskStatusResponse
     */
    describeAITaskStatus(request: $_model.DescribeAITaskStatusRequest): Promise<$_model.DescribeAITaskStatusResponse>;
    /**
     * Queries a database account of a PolarDB cluster.
     *
     * @param request - DescribeAccountsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAccountsResponse
     */
    describeAccountsWithOptions(request: $_model.DescribeAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccountsResponse>;
    /**
     * Queries a database account of a PolarDB cluster.
     *
     * @param request - DescribeAccountsRequest
     * @returns DescribeAccountsResponse
     */
    describeAccounts(request: $_model.DescribeAccountsRequest): Promise<$_model.DescribeAccountsResponse>;
    /**
     * Queries the list of PolarDB edge clusters.
     *
     * @param request - DescribeAccountsZonalRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAccountsZonalResponse
     */
    describeAccountsZonalWithOptions(request: $_model.DescribeAccountsZonalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccountsZonalResponse>;
    /**
     * Queries the list of PolarDB edge clusters.
     *
     * @param request - DescribeAccountsZonalRequest
     * @returns DescribeAccountsZonalResponse
     */
    describeAccountsZonal(request: $_model.DescribeAccountsZonalRequest): Promise<$_model.DescribeAccountsZonalResponse>;
    /**
     * Queries an activation code.
     *
     * @param request - DescribeActivationCodeDetailsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeActivationCodeDetailsResponse
     */
    describeActivationCodeDetailsWithOptions(request: $_model.DescribeActivationCodeDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeActivationCodeDetailsResponse>;
    /**
     * Queries an activation code.
     *
     * @param request - DescribeActivationCodeDetailsRequest
     * @returns DescribeActivationCodeDetailsResponse
     */
    describeActivationCodeDetails(request: $_model.DescribeActivationCodeDetailsRequest): Promise<$_model.DescribeActivationCodeDetailsResponse>;
    /**
     * Retrieves a paginated list of activation codes associated with your account. You can filter the results by order ID or specific hardware identifiers.
     *
     * @param request - DescribeActivationCodesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeActivationCodesResponse
     */
    describeActivationCodesWithOptions(request: $_model.DescribeActivationCodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeActivationCodesResponse>;
    /**
     * Retrieves a paginated list of activation codes associated with your account. You can filter the results by order ID or specific hardware identifiers.
     *
     * @param request - DescribeActivationCodesRequest
     * @returns DescribeActivationCodesResponse
     */
    describeActivationCodes(request: $_model.DescribeActivationCodesRequest): Promise<$_model.DescribeActivationCodesResponse>;
    /**
     * Retrieves the O&M configuration of a user, which currently includes proactive O&M window information.
     *
     * @param request - DescribeActiveOperationMaintainConfRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeActiveOperationMaintainConfResponse
     */
    describeActiveOperationMaintainConfWithOptions(request: $_model.DescribeActiveOperationMaintainConfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeActiveOperationMaintainConfResponse>;
    /**
     * Retrieves the O&M configuration of a user, which currently includes proactive O&M window information.
     *
     * @param request - DescribeActiveOperationMaintainConfRequest
     * @returns DescribeActiveOperationMaintainConfResponse
     */
    describeActiveOperationMaintainConf(request: $_model.DescribeActiveOperationMaintainConfRequest): Promise<$_model.DescribeActiveOperationMaintainConfResponse>;
    /**
     * Queries the details of pending tasks.
     *
     * @param request - DescribeActiveOperationTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeActiveOperationTaskResponse
     */
    describeActiveOperationTaskWithOptions(request: $_model.DescribeActiveOperationTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeActiveOperationTaskResponse>;
    /**
     * Queries the details of pending tasks.
     *
     * @param request - DescribeActiveOperationTaskRequest
     * @returns DescribeActiveOperationTaskResponse
     */
    describeActiveOperationTask(request: $_model.DescribeActiveOperationTaskRequest): Promise<$_model.DescribeActiveOperationTaskResponse>;
    /**
     * Queries operation and maintenance events for instances.
     *
     * @param request - DescribeActiveOperationTasksRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeActiveOperationTasksResponse
     */
    describeActiveOperationTasksWithOptions(request: $_model.DescribeActiveOperationTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeActiveOperationTasksResponse>;
    /**
     * Queries operation and maintenance events for instances.
     *
     * @param request - DescribeActiveOperationTasksRequest
     * @returns DescribeActiveOperationTasksResponse
     */
    describeActiveOperationTasks(request: $_model.DescribeActiveOperationTasksRequest): Promise<$_model.DescribeActiveOperationTasksResponse>;
    /**
     * Queries the details of an AgenticDB branch.
     *
     * @param request - DescribeAgenticDBBranchRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAgenticDBBranchResponse
     */
    describeAgenticDBBranchWithOptions(request: $_model.DescribeAgenticDBBranchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAgenticDBBranchResponse>;
    /**
     * Queries the details of an AgenticDB branch.
     *
     * @param request - DescribeAgenticDBBranchRequest
     * @returns DescribeAgenticDBBranchResponse
     */
    describeAgenticDBBranch(request: $_model.DescribeAgenticDBBranchRequest): Promise<$_model.DescribeAgenticDBBranchResponse>;
    /**
     * Queries the connection information of an AgenticDB branch.
     *
     * @param request - DescribeAgenticDBBranchEndpointsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAgenticDBBranchEndpointsResponse
     */
    describeAgenticDBBranchEndpointsWithOptions(request: $_model.DescribeAgenticDBBranchEndpointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAgenticDBBranchEndpointsResponse>;
    /**
     * Queries the connection information of an AgenticDB branch.
     *
     * @param request - DescribeAgenticDBBranchEndpointsRequest
     * @returns DescribeAgenticDBBranchEndpointsResponse
     */
    describeAgenticDBBranchEndpoints(request: $_model.DescribeAgenticDBBranchEndpointsRequest): Promise<$_model.DescribeAgenticDBBranchEndpointsResponse>;
    /**
     * Queries the branch lineage of an AgenticDB cluster.
     *
     * @param request - DescribeAgenticDBBranchLineageRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAgenticDBBranchLineageResponse
     */
    describeAgenticDBBranchLineageWithOptions(request: $_model.DescribeAgenticDBBranchLineageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAgenticDBBranchLineageResponse>;
    /**
     * Queries the branch lineage of an AgenticDB cluster.
     *
     * @param request - DescribeAgenticDBBranchLineageRequest
     * @returns DescribeAgenticDBBranchLineageResponse
     */
    describeAgenticDBBranchLineage(request: $_model.DescribeAgenticDBBranchLineageRequest): Promise<$_model.DescribeAgenticDBBranchLineageResponse>;
    /**
     * Queries the earliest restorable time for an AgenticDB branch.
     *
     * @param request - DescribeAgenticDBBranchRestoreWindowRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAgenticDBBranchRestoreWindowResponse
     */
    describeAgenticDBBranchRestoreWindowWithOptions(request: $_model.DescribeAgenticDBBranchRestoreWindowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAgenticDBBranchRestoreWindowResponse>;
    /**
     * Queries the earliest restorable time for an AgenticDB branch.
     *
     * @param request - DescribeAgenticDBBranchRestoreWindowRequest
     * @returns DescribeAgenticDBBranchRestoreWindowResponse
     */
    describeAgenticDBBranchRestoreWindow(request: $_model.DescribeAgenticDBBranchRestoreWindowRequest): Promise<$_model.DescribeAgenticDBBranchRestoreWindowResponse>;
    /**
     * Queries the list of AgenticDB branches.
     *
     * @param request - DescribeAgenticDBBranchesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAgenticDBBranchesResponse
     */
    describeAgenticDBBranchesWithOptions(request: $_model.DescribeAgenticDBBranchesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAgenticDBBranchesResponse>;
    /**
     * Queries the list of AgenticDB branches.
     *
     * @param request - DescribeAgenticDBBranchesRequest
     * @returns DescribeAgenticDBBranchesResponse
     */
    describeAgenticDBBranches(request: $_model.DescribeAgenticDBBranchesRequest): Promise<$_model.DescribeAgenticDBBranchesResponse>;
    /**
     * Queries the list of Agentic Database clusters.
     *
     * @remarks
     * ## Operation description
     * - This operation supports filtering and returning the list of related model operators based on the `RelativeDBClusterId` and `KubeType` parameters.
     * - Note: Ensure that the `RelativeDBClusterId` provided in the request matches an existing PolarDB instance ID. Otherwise, data cannot be retrieved correctly.
     *
     * @param request - DescribeAgenticDBClustersRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAgenticDBClustersResponse
     */
    describeAgenticDBClustersWithOptions(request: $_model.DescribeAgenticDBClustersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAgenticDBClustersResponse>;
    /**
     * Queries the list of Agentic Database clusters.
     *
     * @remarks
     * ## Operation description
     * - This operation supports filtering and returning the list of related model operators based on the `RelativeDBClusterId` and `KubeType` parameters.
     * - Note: Ensure that the `RelativeDBClusterId` provided in the request matches an existing PolarDB instance ID. Otherwise, data cannot be retrieved correctly.
     *
     * @param request - DescribeAgenticDBClustersRequest
     * @returns DescribeAgenticDBClustersResponse
     */
    describeAgenticDBClusters(request: $_model.DescribeAgenticDBClustersRequest): Promise<$_model.DescribeAgenticDBClustersResponse>;
    /**
     * Queries a list of AgenticDB compute instances.
     *
     * @param request - DescribeAgenticDBComputeClustersRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAgenticDBComputeClustersResponse
     */
    describeAgenticDBComputeClustersWithOptions(request: $_model.DescribeAgenticDBComputeClustersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAgenticDBComputeClustersResponse>;
    /**
     * Queries a list of AgenticDB compute instances.
     *
     * @param request - DescribeAgenticDBComputeClustersRequest
     * @returns DescribeAgenticDBComputeClustersResponse
     */
    describeAgenticDBComputeClusters(request: $_model.DescribeAgenticDBComputeClustersRequest): Promise<$_model.DescribeAgenticDBComputeClustersResponse>;
    /**
     * Queries the details of an AgenticDB project.
     *
     * @param request - DescribeAgenticDBProjectRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAgenticDBProjectResponse
     */
    describeAgenticDBProjectWithOptions(request: $_model.DescribeAgenticDBProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAgenticDBProjectResponse>;
    /**
     * Queries the details of an AgenticDB project.
     *
     * @param request - DescribeAgenticDBProjectRequest
     * @returns DescribeAgenticDBProjectResponse
     */
    describeAgenticDBProject(request: $_model.DescribeAgenticDBProjectRequest): Promise<$_model.DescribeAgenticDBProjectResponse>;
    /**
     * Queries the actual history retention window of an AgenticDB project.
     *
     * @param request - DescribeAgenticDBProjectHistoryRetentionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAgenticDBProjectHistoryRetentionResponse
     */
    describeAgenticDBProjectHistoryRetentionWithOptions(request: $_model.DescribeAgenticDBProjectHistoryRetentionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAgenticDBProjectHistoryRetentionResponse>;
    /**
     * Queries the actual history retention window of an AgenticDB project.
     *
     * @param request - DescribeAgenticDBProjectHistoryRetentionRequest
     * @returns DescribeAgenticDBProjectHistoryRetentionResponse
     */
    describeAgenticDBProjectHistoryRetention(request: $_model.DescribeAgenticDBProjectHistoryRetentionRequest): Promise<$_model.DescribeAgenticDBProjectHistoryRetentionResponse>;
    /**
     * Queries the list of AgenticDB projects.
     *
     * @param request - DescribeAgenticDBProjectsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAgenticDBProjectsResponse
     */
    describeAgenticDBProjectsWithOptions(request: $_model.DescribeAgenticDBProjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAgenticDBProjectsResponse>;
    /**
     * Queries the list of AgenticDB projects.
     *
     * @param request - DescribeAgenticDBProjectsRequest
     * @returns DescribeAgenticDBProjectsResponse
     */
    describeAgenticDBProjects(request: $_model.DescribeAgenticDBProjectsRequest): Promise<$_model.DescribeAgenticDBProjectsResponse>;
    /**
     * Queries the list of API keys for an AgenticDB tenant.
     *
     * @param request - DescribeAgenticDBTenantApiKeysRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAgenticDBTenantApiKeysResponse
     */
    describeAgenticDBTenantApiKeysWithOptions(request: $_model.DescribeAgenticDBTenantApiKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAgenticDBTenantApiKeysResponse>;
    /**
     * Queries the list of API keys for an AgenticDB tenant.
     *
     * @param request - DescribeAgenticDBTenantApiKeysRequest
     * @returns DescribeAgenticDBTenantApiKeysResponse
     */
    describeAgenticDBTenantApiKeys(request: $_model.DescribeAgenticDBTenantApiKeysRequest): Promise<$_model.DescribeAgenticDBTenantApiKeysResponse>;
    /**
     * Queries the details of the API key.
     *
     * @param request - DescribeApikeyAttributeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeApikeyAttributeResponse
     */
    describeApikeyAttributeWithOptions(request: $_model.DescribeApikeyAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApikeyAttributeResponse>;
    /**
     * Queries the details of the API key.
     *
     * @param request - DescribeApikeyAttributeRequest
     * @returns DescribeApikeyAttributeResponse
     */
    describeApikeyAttribute(request: $_model.DescribeApikeyAttributeRequest): Promise<$_model.DescribeApikeyAttributeResponse>;
    /**
     * Queries the details of a specified PolarDB instance application.
     *
     * @remarks
     * This API queries all relevant information about a specific PolarDB application, including but not limited to component details and endpoints.
     *
     * @param request - DescribeApplicationAttributeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeApplicationAttributeResponse
     */
    describeApplicationAttributeWithOptions(request: $_model.DescribeApplicationAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApplicationAttributeResponse>;
    /**
     * Queries the details of a specified PolarDB instance application.
     *
     * @remarks
     * This API queries all relevant information about a specific PolarDB application, including but not limited to component details and endpoints.
     *
     * @param request - DescribeApplicationAttributeRequest
     * @returns DescribeApplicationAttributeResponse
     */
    describeApplicationAttribute(request: $_model.DescribeApplicationAttributeRequest): Promise<$_model.DescribeApplicationAttributeResponse>;
    /**
     * Queries the available models, default models, and memory capability configurations for a specified region and application type.
     *
     * @param request - DescribeApplicationAvailableModelsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeApplicationAvailableModelsResponse
     */
    describeApplicationAvailableModelsWithOptions(request: $_model.DescribeApplicationAvailableModelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApplicationAvailableModelsResponse>;
    /**
     * Queries the available models, default models, and memory capability configurations for a specified region and application type.
     *
     * @param request - DescribeApplicationAvailableModelsRequest
     * @returns DescribeApplicationAvailableModelsResponse
     */
    describeApplicationAvailableModels(request: $_model.DescribeApplicationAvailableModelsRequest): Promise<$_model.DescribeApplicationAvailableModelsResponse>;
    /**
     * Queries the upgradable versions for a specified application type.
     *
     * @param tmpReq - DescribeApplicationAvailableVersionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeApplicationAvailableVersionResponse
     */
    describeApplicationAvailableVersionWithOptions(tmpReq: $_model.DescribeApplicationAvailableVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApplicationAvailableVersionResponse>;
    /**
     * Queries the upgradable versions for a specified application type.
     *
     * @param request - DescribeApplicationAvailableVersionRequest
     * @returns DescribeApplicationAvailableVersionResponse
     */
    describeApplicationAvailableVersion(request: $_model.DescribeApplicationAvailableVersionRequest): Promise<$_model.DescribeApplicationAvailableVersionResponse>;
    /**
     * Queries the automatic backup cycle, backup time window, and level-1 backup retention period of a specified application.
     *
     * @param request - DescribeApplicationBackupPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeApplicationBackupPolicyResponse
     */
    describeApplicationBackupPolicyWithOptions(request: $_model.DescribeApplicationBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApplicationBackupPolicyResponse>;
    /**
     * Queries the automatic backup cycle, backup time window, and level-1 backup retention period of a specified application.
     *
     * @param request - DescribeApplicationBackupPolicyRequest
     * @returns DescribeApplicationBackupPolicyResponse
     */
    describeApplicationBackupPolicy(request: $_model.DescribeApplicationBackupPolicyRequest): Promise<$_model.DescribeApplicationBackupPolicyResponse>;
    /**
     * Queries the backup sets of a specified application by time range and backup status, and returns paginated backup details.
     *
     * @param request - DescribeApplicationBackupsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeApplicationBackupsResponse
     */
    describeApplicationBackupsWithOptions(request: $_model.DescribeApplicationBackupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApplicationBackupsResponse>;
    /**
     * Queries the backup sets of a specified application by time range and backup status, and returns paginated backup details.
     *
     * @param request - DescribeApplicationBackupsRequest
     * @returns DescribeApplicationBackupsResponse
     */
    describeApplicationBackups(request: $_model.DescribeApplicationBackupsRequest): Promise<$_model.DescribeApplicationBackupsResponse>;
    /**
     * Queries the performance metrics and sample data of a specified application component within a specified time range.
     *
     * @param request - DescribeApplicationComponentPerformanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeApplicationComponentPerformanceResponse
     */
    describeApplicationComponentPerformanceWithOptions(request: $_model.DescribeApplicationComponentPerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApplicationComponentPerformanceResponse>;
    /**
     * Queries the performance metrics and sample data of a specified application component within a specified time range.
     *
     * @param request - DescribeApplicationComponentPerformanceRequest
     * @returns DescribeApplicationComponentPerformanceResponse
     */
    describeApplicationComponentPerformance(request: $_model.DescribeApplicationComponentPerformanceRequest): Promise<$_model.DescribeApplicationComponentPerformanceResponse>;
    /**
     * Queries the details of AI application logs.
     *
     * @param request - DescribeApplicationLogsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeApplicationLogsResponse
     */
    describeApplicationLogsWithOptions(request: $_model.DescribeApplicationLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApplicationLogsResponse>;
    /**
     * Queries the details of AI application logs.
     *
     * @param request - DescribeApplicationLogsRequest
     * @returns DescribeApplicationLogsResponse
     */
    describeApplicationLogs(request: $_model.DescribeApplicationLogsRequest): Promise<$_model.DescribeApplicationLogsResponse>;
    /**
     * Retrieves the current parameters and template information for a specified application and its components.
     *
     * @param tmpReq - DescribeApplicationParametersRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeApplicationParametersResponse
     */
    describeApplicationParametersWithOptions(tmpReq: $_model.DescribeApplicationParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApplicationParametersResponse>;
    /**
     * Retrieves the current parameters and template information for a specified application and its components.
     *
     * @param request - DescribeApplicationParametersRequest
     * @returns DescribeApplicationParametersResponse
     */
    describeApplicationParameters(request: $_model.DescribeApplicationParametersRequest): Promise<$_model.DescribeApplicationParametersResponse>;
    /**
     * Queries the performance of PolarDB AI applications.
     *
     * @param tmpReq - DescribeApplicationPerformanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeApplicationPerformanceResponse
     */
    describeApplicationPerformanceWithOptions(tmpReq: $_model.DescribeApplicationPerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApplicationPerformanceResponse>;
    /**
     * Queries the performance of PolarDB AI applications.
     *
     * @param request - DescribeApplicationPerformanceRequest
     * @returns DescribeApplicationPerformanceResponse
     */
    describeApplicationPerformance(request: $_model.DescribeApplicationPerformanceRequest): Promise<$_model.DescribeApplicationPerformanceResponse>;
    /**
     * Queries all application prompt policies for the current application.
     *
     * @remarks
     * Prerequisites: First, create a PostgreSQL cluster, and then call the CreateApplication operation to create an application with ApplicationType set to mem0. When creating the application, you must prepare a VPC, a vSwitch, and a security group. After obtaining the ApplicationId, call this operation to query application prompts. Call sequence: CreateDBCluster → CreateApplication → DescribeApplicationPrompts.
     *
     * @param request - DescribeApplicationPromptsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeApplicationPromptsResponse
     */
    describeApplicationPromptsWithOptions(request: $_model.DescribeApplicationPromptsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApplicationPromptsResponse>;
    /**
     * Queries all application prompt policies for the current application.
     *
     * @remarks
     * Prerequisites: First, create a PostgreSQL cluster, and then call the CreateApplication operation to create an application with ApplicationType set to mem0. When creating the application, you must prepare a VPC, a vSwitch, and a security group. After obtaining the ApplicationId, call this operation to query application prompts. Call sequence: CreateDBCluster → CreateApplication → DescribeApplicationPrompts.
     *
     * @param request - DescribeApplicationPromptsRequest
     * @returns DescribeApplicationPromptsResponse
     */
    describeApplicationPrompts(request: $_model.DescribeApplicationPromptsRequest): Promise<$_model.DescribeApplicationPromptsResponse>;
    /**
     * Queries the SSL configuration of an application.
     *
     * @param request - DescribeApplicationSSLRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeApplicationSSLResponse
     */
    describeApplicationSSLWithOptions(request: $_model.DescribeApplicationSSLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApplicationSSLResponse>;
    /**
     * Queries the SSL configuration of an application.
     *
     * @param request - DescribeApplicationSSLRequest
     * @returns DescribeApplicationSSLResponse
     */
    describeApplicationSSL(request: $_model.DescribeApplicationSSLRequest): Promise<$_model.DescribeApplicationSSLResponse>;
    /**
     * Queries the Serverless configuration for a PolarDB application.
     *
     * @param request - DescribeApplicationServerlessConfRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeApplicationServerlessConfResponse
     */
    describeApplicationServerlessConfWithOptions(request: $_model.DescribeApplicationServerlessConfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApplicationServerlessConfResponse>;
    /**
     * Queries the Serverless configuration for a PolarDB application.
     *
     * @param request - DescribeApplicationServerlessConfRequest
     * @returns DescribeApplicationServerlessConfResponse
     */
    describeApplicationServerlessConf(request: $_model.DescribeApplicationServerlessConfRequest): Promise<$_model.DescribeApplicationServerlessConfResponse>;
    /**
     * Queries AI application sessions.
     *
     * @param request - DescribeApplicationSessionIdsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeApplicationSessionIdsResponse
     */
    describeApplicationSessionIdsWithOptions(request: $_model.DescribeApplicationSessionIdsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApplicationSessionIdsResponse>;
    /**
     * Queries AI application sessions.
     *
     * @param request - DescribeApplicationSessionIdsRequest
     * @returns DescribeApplicationSessionIdsResponse
     */
    describeApplicationSessionIds(request: $_model.DescribeApplicationSessionIdsRequest): Promise<$_model.DescribeApplicationSessionIdsResponse>;
    /**
     * Queries the session logs of a specified application, supports filtering by agent, session, and role, and returns paginated log records.
     *
     * @remarks
     * The fields included in logs may vary by role. User messages may include content. Assistant messages may include the model, token usage, and cost statistics. Tool execution results may include the tool name and execution status. Cost statistics are returned as-is from the log source, and this operation does not perform currency conversion.
     *
     * @param request - DescribeApplicationSessionLogsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeApplicationSessionLogsResponse
     */
    describeApplicationSessionLogsWithOptions(request: $_model.DescribeApplicationSessionLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApplicationSessionLogsResponse>;
    /**
     * Queries the session logs of a specified application, supports filtering by agent, session, and role, and returns paginated log records.
     *
     * @remarks
     * The fields included in logs may vary by role. User messages may include content. Assistant messages may include the model, token usage, and cost statistics. Tool execution results may include the tool name and execution status. Cost statistics are returned as-is from the log source, and this operation does not perform currency conversion.
     *
     * @param request - DescribeApplicationSessionLogsRequest
     * @returns DescribeApplicationSessionLogsResponse
     */
    describeApplicationSessionLogs(request: $_model.DescribeApplicationSessionLogsRequest): Promise<$_model.DescribeApplicationSessionLogsResponse>;
    /**
     * Queries the usage of an AI application.
     *
     * @param request - DescribeApplicationUsageRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeApplicationUsageResponse
     */
    describeApplicationUsageWithOptions(request: $_model.DescribeApplicationUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApplicationUsageResponse>;
    /**
     * Queries the usage of an AI application.
     *
     * @param request - DescribeApplicationUsageRequest
     * @returns DescribeApplicationUsageResponse
     */
    describeApplicationUsage(request: $_model.DescribeApplicationUsageRequest): Promise<$_model.DescribeApplicationUsageResponse>;
    /**
     * Retrieves a list of applications for all PolarDB instances in a specified region.
     *
     * @param request - DescribeApplicationsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeApplicationsResponse
     */
    describeApplicationsWithOptions(request: $_model.DescribeApplicationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApplicationsResponse>;
    /**
     * Retrieves a list of applications for all PolarDB instances in a specified region.
     *
     * @param request - DescribeApplicationsRequest
     * @returns DescribeApplicationsResponse
     */
    describeApplications(request: $_model.DescribeApplicationsRequest): Promise<$_model.DescribeApplicationsResponse>;
    /**
     * Describes the auto-renewal status of a subscription PolarDB cluster.
     *
     * @param request - DescribeAutoRenewAttributeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAutoRenewAttributeResponse
     */
    describeAutoRenewAttributeWithOptions(request: $_model.DescribeAutoRenewAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAutoRenewAttributeResponse>;
    /**
     * Describes the auto-renewal status of a subscription PolarDB cluster.
     *
     * @param request - DescribeAutoRenewAttributeRequest
     * @returns DescribeAutoRenewAttributeResponse
     */
    describeAutoRenewAttribute(request: $_model.DescribeAutoRenewAttributeRequest): Promise<$_model.DescribeAutoRenewAttributeResponse>;
    /**
     * Retrieves a list of regions available for cross-region backup.
     *
     * @param request - DescribeAvailableCrossRegionsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAvailableCrossRegionsResponse
     */
    describeAvailableCrossRegionsWithOptions(request: $_model.DescribeAvailableCrossRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAvailableCrossRegionsResponse>;
    /**
     * Retrieves a list of regions available for cross-region backup.
     *
     * @param request - DescribeAvailableCrossRegionsRequest
     * @returns DescribeAvailableCrossRegionsResponse
     */
    describeAvailableCrossRegions(request: $_model.DescribeAvailableCrossRegionsRequest): Promise<$_model.DescribeAvailableCrossRegionsResponse>;
    /**
     * Retrieves a list of models in an AI cluster.
     *
     * @param request - DescribeAvailableModelsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAvailableModelsResponse
     */
    describeAvailableModelsWithOptions(request: $_model.DescribeAvailableModelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAvailableModelsResponse>;
    /**
     * Retrieves a list of models in an AI cluster.
     *
     * @param request - DescribeAvailableModelsRequest
     * @returns DescribeAvailableModelsResponse
     */
    describeAvailableModels(request: $_model.DescribeAvailableModelsRequest): Promise<$_model.DescribeAvailableModelsResponse>;
    /**
     * Queries the download URLs of redo log backups.
     *
     * @param request - DescribeBackupLogDownloadLinksRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeBackupLogDownloadLinksResponse
     */
    describeBackupLogDownloadLinksWithOptions(request: $_model.DescribeBackupLogDownloadLinksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupLogDownloadLinksResponse>;
    /**
     * Queries the download URLs of redo log backups.
     *
     * @param request - DescribeBackupLogDownloadLinksRequest
     * @returns DescribeBackupLogDownloadLinksResponse
     */
    describeBackupLogDownloadLinks(request: $_model.DescribeBackupLogDownloadLinksRequest): Promise<$_model.DescribeBackupLogDownloadLinksResponse>;
    /**
     * Queries the list of backup logs and retrieves their download URLs.
     *
     * @param request - DescribeBackupLogsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeBackupLogsResponse
     */
    describeBackupLogsWithOptions(request: $_model.DescribeBackupLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupLogsResponse>;
    /**
     * Queries the list of backup logs and retrieves their download URLs.
     *
     * @param request - DescribeBackupLogsRequest
     * @returns DescribeBackupLogsResponse
     */
    describeBackupLogs(request: $_model.DescribeBackupLogsRequest): Promise<$_model.DescribeBackupLogsResponse>;
    /**
     * Queries the automatic backup policy of a PolarDB cluster.
     *
     * @param request - DescribeBackupPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeBackupPolicyResponse
     */
    describeBackupPolicyWithOptions(request: $_model.DescribeBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupPolicyResponse>;
    /**
     * Queries the automatic backup policy of a PolarDB cluster.
     *
     * @param request - DescribeBackupPolicyRequest
     * @returns DescribeBackupPolicyResponse
     */
    describeBackupPolicy(request: $_model.DescribeBackupPolicyRequest): Promise<$_model.DescribeBackupPolicyResponse>;
    /**
     * Queries the regions that store backup sets.
     *
     * @param request - DescribeBackupRegionsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeBackupRegionsResponse
     */
    describeBackupRegionsWithOptions(request: $_model.DescribeBackupRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupRegionsResponse>;
    /**
     * Queries the regions that store backup sets.
     *
     * @param request - DescribeBackupRegionsRequest
     * @returns DescribeBackupRegionsResponse
     */
    describeBackupRegions(request: $_model.DescribeBackupRegionsRequest): Promise<$_model.DescribeBackupRegionsResponse>;
    /**
     * Retrieves a list of backup jobs and their details for a cluster.
     *
     * @param request - DescribeBackupTasksRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeBackupTasksResponse
     */
    describeBackupTasksWithOptions(request: $_model.DescribeBackupTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupTasksResponse>;
    /**
     * Retrieves a list of backup jobs and their details for a cluster.
     *
     * @param request - DescribeBackupTasksRequest
     * @returns DescribeBackupTasksResponse
     */
    describeBackupTasks(request: $_model.DescribeBackupTasksRequest): Promise<$_model.DescribeBackupTasksResponse>;
    /**
     * Queries the backup information of a PolarDB cluster.
     *
     * @param request - DescribeBackupsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeBackupsResponse
     */
    describeBackupsWithOptions(request: $_model.DescribeBackupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupsResponse>;
    /**
     * Queries the backup information of a PolarDB cluster.
     *
     * @param request - DescribeBackupsRequest
     * @returns DescribeBackupsResponse
     */
    describeBackups(request: $_model.DescribeBackupsRequest): Promise<$_model.DescribeBackupsResponse>;
    /**
     * Queries the status details of a batch task.
     *
     * @param request - DescribeBatchTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeBatchTaskResponse
     */
    describeBatchTaskWithOptions(request: $_model.DescribeBatchTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBatchTaskResponse>;
    /**
     * Queries the status details of a batch task.
     *
     * @param request - DescribeBatchTaskRequest
     * @returns DescribeBatchTaskResponse
     */
    describeBatchTask(request: $_model.DescribeBatchTaskRequest): Promise<$_model.DescribeBatchTaskResponse>;
    /**
     * Queries the status of batch tasks.
     *
     * @param tmpReq - DescribeBatchTasksRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeBatchTasksResponse
     */
    describeBatchTasksWithOptions(tmpReq: $_model.DescribeBatchTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBatchTasksResponse>;
    /**
     * Queries the status of batch tasks.
     *
     * @param request - DescribeBatchTasksRequest
     * @returns DescribeBatchTasksResponse
     */
    describeBatchTasks(request: $_model.DescribeBatchTasksRequest): Promise<$_model.DescribeBatchTasksResponse>;
    /**
     * Queries budget policies.
     *
     * @param request - DescribeBudgetPoliciesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeBudgetPoliciesResponse
     */
    describeBudgetPoliciesWithOptions(request: $_model.DescribeBudgetPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBudgetPoliciesResponse>;
    /**
     * Queries budget policies.
     *
     * @param request - DescribeBudgetPoliciesRequest
     * @returns DescribeBudgetPoliciesResponse
     */
    describeBudgetPolicies(request: $_model.DescribeBudgetPoliciesRequest): Promise<$_model.DescribeBudgetPoliciesResponse>;
    /**
     * Queries the used quota, statistical window, and associated budget policies for a PolarDB gateway instance by budget dimension.
     *
     * @param request - DescribeBudgetUsageRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeBudgetUsageResponse
     */
    describeBudgetUsageWithOptions(request: $_model.DescribeBudgetUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBudgetUsageResponse>;
    /**
     * Queries the used quota, statistical window, and associated budget policies for a PolarDB gateway instance by budget dimension.
     *
     * @param request - DescribeBudgetUsageRequest
     * @returns DescribeBudgetUsageResponse
     */
    describeBudgetUsage(request: $_model.DescribeBudgetUsageRequest): Promise<$_model.DescribeBudgetUsageResponse>;
    /**
     * Queries the character sets supported by PolarDB for MySQL.
     *
     * @param request - DescribeCharacterSetNameRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeCharacterSetNameResponse
     */
    describeCharacterSetNameWithOptions(request: $_model.DescribeCharacterSetNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCharacterSetNameResponse>;
    /**
     * Queries the character sets supported by PolarDB for MySQL.
     *
     * @param request - DescribeCharacterSetNameRequest
     * @returns DescribeCharacterSetNameResponse
     */
    describeCharacterSetName(request: $_model.DescribeCharacterSetNameRequest): Promise<$_model.DescribeCharacterSetNameResponse>;
    /**
     * Lists the available cluster specifications.
     *
     * @param request - DescribeClassListRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeClassListResponse
     */
    describeClassListWithOptions(request: $_model.DescribeClassListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClassListResponse>;
    /**
     * Lists the available cluster specifications.
     *
     * @param request - DescribeClassListRequest
     * @returns DescribeClassListResponse
     */
    describeClassList(request: $_model.DescribeClassListRequest): Promise<$_model.DescribeClassListResponse>;
    /**
     * Queries cold storage instance information.
     *
     * @param request - DescribeColdStorageInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeColdStorageInstanceResponse
     */
    describeColdStorageInstanceWithOptions(request: $_model.DescribeColdStorageInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeColdStorageInstanceResponse>;
    /**
     * Queries cold storage instance information.
     *
     * @param request - DescribeColdStorageInstanceRequest
     * @returns DescribeColdStorageInstanceResponse
     */
    describeColdStorageInstance(request: $_model.DescribeColdStorageInstanceRequest): Promise<$_model.DescribeColdStorageInstanceResponse>;
    /**
     * Retrieves a list of consumer groups.
     *
     * @param request - DescribeConsumerGroupsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeConsumerGroupsResponse
     */
    describeConsumerGroupsWithOptions(request: $_model.DescribeConsumerGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeConsumerGroupsResponse>;
    /**
     * Retrieves a list of consumer groups.
     *
     * @param request - DescribeConsumerGroupsRequest
     * @returns DescribeConsumerGroupsResponse
     */
    describeConsumerGroups(request: $_model.DescribeConsumerGroupsRequest): Promise<$_model.DescribeConsumerGroupsResponse>;
    /**
     * Queries a list of consumers.
     *
     * @param request - DescribeConsumersRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeConsumersResponse
     */
    describeConsumersWithOptions(request: $_model.DescribeConsumersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeConsumersResponse>;
    /**
     * Queries a list of consumers.
     *
     * @param request - DescribeConsumersRequest
     * @returns DescribeConsumersResponse
     */
    describeConsumers(request: $_model.DescribeConsumersRequest): Promise<$_model.DescribeConsumersResponse>;
    /**
     * Queries cost rules.
     *
     * @param request - DescribeCostRulesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeCostRulesResponse
     */
    describeCostRulesWithOptions(request: $_model.DescribeCostRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCostRulesResponse>;
    /**
     * Queries cost rules.
     *
     * @param request - DescribeCostRulesRequest
     * @returns DescribeCostRulesResponse
     */
    describeCostRules(request: $_model.DescribeCostRulesRequest): Promise<$_model.DescribeCostRulesResponse>;
    /**
     * Queries the policies for automatically triggered tasks.
     *
     * @param request - DescribeCronJobPolicyServerlessRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeCronJobPolicyServerlessResponse
     */
    describeCronJobPolicyServerlessWithOptions(request: $_model.DescribeCronJobPolicyServerlessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCronJobPolicyServerlessResponse>;
    /**
     * Queries the policies for automatically triggered tasks.
     *
     * @param request - DescribeCronJobPolicyServerlessRequest
     * @returns DescribeCronJobPolicyServerlessResponse
     */
    describeCronJobPolicyServerless(request: $_model.DescribeCronJobPolicyServerlessRequest): Promise<$_model.DescribeCronJobPolicyServerlessResponse>;
    /**
     * Queries the list of specifications supported for cross-cloud scenarios.
     *
     * @param request - DescribeCrossCloudLevelsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeCrossCloudLevelsResponse
     */
    describeCrossCloudLevelsWithOptions(request: $_model.DescribeCrossCloudLevelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCrossCloudLevelsResponse>;
    /**
     * Queries the list of specifications supported for cross-cloud scenarios.
     *
     * @param request - DescribeCrossCloudLevelsRequest
     * @returns DescribeCrossCloudLevelsResponse
     */
    describeCrossCloudLevels(request: $_model.DescribeCrossCloudLevelsRequest): Promise<$_model.DescribeCrossCloudLevelsResponse>;
    /**
     * Queries cross-cloud regions.
     *
     * @param request - DescribeCrossCloudRegionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeCrossCloudRegionResponse
     */
    describeCrossCloudRegionWithOptions(request: $_model.DescribeCrossCloudRegionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCrossCloudRegionResponse>;
    /**
     * Queries cross-cloud regions.
     *
     * @param request - DescribeCrossCloudRegionRequest
     * @returns DescribeCrossCloudRegionResponse
     */
    describeCrossCloudRegion(request: $_model.DescribeCrossCloudRegionRequest): Promise<$_model.DescribeCrossCloudRegionResponse>;
    /**
     * This operation queries cross-cloud region mappings.
     *
     * @param request - DescribeCrossCloudRegionMappingToAliyunRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeCrossCloudRegionMappingToAliyunResponse
     */
    describeCrossCloudRegionMappingToAliyunWithOptions(request: $_model.DescribeCrossCloudRegionMappingToAliyunRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCrossCloudRegionMappingToAliyunResponse>;
    /**
     * This operation queries cross-cloud region mappings.
     *
     * @param request - DescribeCrossCloudRegionMappingToAliyunRequest
     * @returns DescribeCrossCloudRegionMappingToAliyunResponse
     */
    describeCrossCloudRegionMappingToAliyun(request: $_model.DescribeCrossCloudRegionMappingToAliyunRequest): Promise<$_model.DescribeCrossCloudRegionMappingToAliyunResponse>;
    /**
     * Queries the IP whitelist and security groups that are allowed to access a database cluster.
     *
     * @param request - DescribeDBClusterAccessWhitelistRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBClusterAccessWhitelistResponse
     */
    describeDBClusterAccessWhitelistWithOptions(request: $_model.DescribeDBClusterAccessWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterAccessWhitelistResponse>;
    /**
     * Queries the IP whitelist and security groups that are allowed to access a database cluster.
     *
     * @param request - DescribeDBClusterAccessWhitelistRequest
     * @returns DescribeDBClusterAccessWhitelistResponse
     */
    describeDBClusterAccessWhitelist(request: $_model.DescribeDBClusterAccessWhitelistRequest): Promise<$_model.DescribeDBClusterAccessWhitelistResponse>;
    /**
     * Queries the attribute information of a cluster.
     *
     * @param request - DescribeDBClusterAttributeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBClusterAttributeResponse
     */
    describeDBClusterAttributeWithOptions(request: $_model.DescribeDBClusterAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterAttributeResponse>;
    /**
     * Queries the attribute information of a cluster.
     *
     * @param request - DescribeDBClusterAttributeRequest
     * @returns DescribeDBClusterAttributeResponse
     */
    describeDBClusterAttribute(request: $_model.DescribeDBClusterAttributeRequest): Promise<$_model.DescribeDBClusterAttributeResponse>;
    /**
     * Describe SQL collector for a PolarDB cluster. Features related to SQL collector include audit log and SQL Explorer.
     *
     * @param request - DescribeDBClusterAuditLogCollectorRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBClusterAuditLogCollectorResponse
     */
    describeDBClusterAuditLogCollectorWithOptions(request: $_model.DescribeDBClusterAuditLogCollectorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterAuditLogCollectorResponse>;
    /**
     * Describe SQL collector for a PolarDB cluster. Features related to SQL collector include audit log and SQL Explorer.
     *
     * @param request - DescribeDBClusterAuditLogCollectorRequest
     * @returns DescribeDBClusterAuditLogCollectorResponse
     */
    describeDBClusterAuditLogCollector(request: $_model.DescribeDBClusterAuditLogCollectorRequest): Promise<$_model.DescribeDBClusterAuditLogCollectorResponse>;
    /**
     * Queries the available resources of a PolarDB cluster.
     *
     * @param request - DescribeDBClusterAvailableResourcesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBClusterAvailableResourcesResponse
     */
    describeDBClusterAvailableResourcesWithOptions(request: $_model.DescribeDBClusterAvailableResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterAvailableResourcesResponse>;
    /**
     * Queries the available resources of a PolarDB cluster.
     *
     * @param request - DescribeDBClusterAvailableResourcesRequest
     * @returns DescribeDBClusterAvailableResourcesResponse
     */
    describeDBClusterAvailableResources(request: $_model.DescribeDBClusterAvailableResourcesRequest): Promise<$_model.DescribeDBClusterAvailableResourcesResponse>;
    /**
     * Checks whether a database cluster is accessible from a source IP address.
     *
     * @param request - DescribeDBClusterConnectivityRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBClusterConnectivityResponse
     */
    describeDBClusterConnectivityWithOptions(request: $_model.DescribeDBClusterConnectivityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterConnectivityResponse>;
    /**
     * Checks whether a database cluster is accessible from a source IP address.
     *
     * @param request - DescribeDBClusterConnectivityRequest
     * @returns DescribeDBClusterConnectivityResponse
     */
    describeDBClusterConnectivity(request: $_model.DescribeDBClusterConnectivityRequest): Promise<$_model.DescribeDBClusterConnectivityResponse>;
    /**
     * Queries the key usage details for a specified PolarDB cluster.
     *
     * @remarks
     * ## Description
     * - Query the key usage details for a PolarDB cluster, such as the key ID, status, and type.
     * - The `DBClusterId`Parameter is required. It specifies the ID of the PolarDB cluster to query.
     * - Before you call this operation, make sure that the required Resource Access Management (RAM) roles and policies are configured.
     *
     * @param request - DescribeDBClusterEncryptionKeyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBClusterEncryptionKeyResponse
     */
    describeDBClusterEncryptionKeyWithOptions(request: $_model.DescribeDBClusterEncryptionKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterEncryptionKeyResponse>;
    /**
     * Queries the key usage details for a specified PolarDB cluster.
     *
     * @remarks
     * ## Description
     * - Query the key usage details for a PolarDB cluster, such as the key ID, status, and type.
     * - The `DBClusterId`Parameter is required. It specifies the ID of the PolarDB cluster to query.
     * - Before you call this operation, make sure that the required Resource Access Management (RAM) roles and policies are configured.
     *
     * @param request - DescribeDBClusterEncryptionKeyRequest
     * @returns DescribeDBClusterEncryptionKeyResponse
     */
    describeDBClusterEncryptionKey(request: $_model.DescribeDBClusterEncryptionKeyRequest): Promise<$_model.DescribeDBClusterEncryptionKeyResponse>;
    /**
     * Queries the endpoints of a PolarDB cluster.
     *
     * @param request - DescribeDBClusterEndpointsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBClusterEndpointsResponse
     */
    describeDBClusterEndpointsWithOptions(request: $_model.DescribeDBClusterEndpointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterEndpointsResponse>;
    /**
     * Queries the endpoints of a PolarDB cluster.
     *
     * @param request - DescribeDBClusterEndpointsRequest
     * @returns DescribeDBClusterEndpointsResponse
     */
    describeDBClusterEndpoints(request: $_model.DescribeDBClusterEndpointsRequest): Promise<$_model.DescribeDBClusterEndpointsResponse>;
    /**
     * Queries the endpoints of PolarDB on ENS.
     *
     * @param request - DescribeDBClusterEndpointsZonalRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBClusterEndpointsZonalResponse
     */
    describeDBClusterEndpointsZonalWithOptions(request: $_model.DescribeDBClusterEndpointsZonalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterEndpointsZonalResponse>;
    /**
     * Queries the endpoints of PolarDB on ENS.
     *
     * @param request - DescribeDBClusterEndpointsZonalRequest
     * @returns DescribeDBClusterEndpointsZonalResponse
     */
    describeDBClusterEndpointsZonal(request: $_model.DescribeDBClusterEndpointsZonalRequest): Promise<$_model.DescribeDBClusterEndpointsZonalResponse>;
    /**
     * Queries the migration status of a PolarDB cluster.
     *
     * @remarks
     * - You can use this operation to query the status of a one-click migration from an ApsaraDB RDS for MySQL instance to a PolarDB for MySQL cluster. For more information, see [Upgrade an ApsaraDB RDS for MySQL instance to PolarDB for MySQL](https://help.aliyun.com/document_detail/121582.html).
     * - Before you call this operation, you must create a one-click upgrade task for the cluster by calling the [CreateDBCluster](https://help.aliyun.com/document_detail/98169.html) operation and setting the **CreationOption** parameter to **MigrationFromRDS**.
     *
     * @param request - DescribeDBClusterMigrationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBClusterMigrationResponse
     */
    describeDBClusterMigrationWithOptions(request: $_model.DescribeDBClusterMigrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterMigrationResponse>;
    /**
     * Queries the migration status of a PolarDB cluster.
     *
     * @remarks
     * - You can use this operation to query the status of a one-click migration from an ApsaraDB RDS for MySQL instance to a PolarDB for MySQL cluster. For more information, see [Upgrade an ApsaraDB RDS for MySQL instance to PolarDB for MySQL](https://help.aliyun.com/document_detail/121582.html).
     * - Before you call this operation, you must create a one-click upgrade task for the cluster by calling the [CreateDBCluster](https://help.aliyun.com/document_detail/98169.html) operation and setting the **CreationOption** parameter to **MigrationFromRDS**.
     *
     * @param request - DescribeDBClusterMigrationRequest
     * @returns DescribeDBClusterMigrationResponse
     */
    describeDBClusterMigration(request: $_model.DescribeDBClusterMigrationRequest): Promise<$_model.DescribeDBClusterMigrationResponse>;
    /**
     * Queries the model enhancement status and the list of API keys for a specified PolarDB cluster.
     *
     * @param request - DescribeDBClusterModelEnhancementRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBClusterModelEnhancementResponse
     */
    describeDBClusterModelEnhancementWithOptions(request: $_model.DescribeDBClusterModelEnhancementRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterModelEnhancementResponse>;
    /**
     * Queries the model enhancement status and the list of API keys for a specified PolarDB cluster.
     *
     * @param request - DescribeDBClusterModelEnhancementRequest
     * @returns DescribeDBClusterModelEnhancementResponse
     */
    describeDBClusterModelEnhancement(request: $_model.DescribeDBClusterModelEnhancementRequest): Promise<$_model.DescribeDBClusterModelEnhancementResponse>;
    /**
     * Queries the interval at which the monitoring data of a PolarDB cluster is collected.
     *
     * @param request - DescribeDBClusterMonitorRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBClusterMonitorResponse
     */
    describeDBClusterMonitorWithOptions(request: $_model.DescribeDBClusterMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterMonitorResponse>;
    /**
     * Queries the interval at which the monitoring data of a PolarDB cluster is collected.
     *
     * @param request - DescribeDBClusterMonitorRequest
     * @returns DescribeDBClusterMonitorResponse
     */
    describeDBClusterMonitor(request: $_model.DescribeDBClusterMonitorRequest): Promise<$_model.DescribeDBClusterMonitorResponse>;
    /**
     * Queries database endpoints.
     *
     * @param request - DescribeDBClusterNetInfoRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBClusterNetInfoResponse
     */
    describeDBClusterNetInfoWithOptions(request: $_model.DescribeDBClusterNetInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterNetInfoResponse>;
    /**
     * Queries database endpoints.
     *
     * @param request - DescribeDBClusterNetInfoRequest
     * @returns DescribeDBClusterNetInfoResponse
     */
    describeDBClusterNetInfo(request: $_model.DescribeDBClusterNetInfoRequest): Promise<$_model.DescribeDBClusterNetInfoResponse>;
    /**
     * Queries the list of running parameters for a PolarDB cluster.
     *
     * @param request - DescribeDBClusterParametersRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBClusterParametersResponse
     */
    describeDBClusterParametersWithOptions(request: $_model.DescribeDBClusterParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterParametersResponse>;
    /**
     * Queries the list of running parameters for a PolarDB cluster.
     *
     * @param request - DescribeDBClusterParametersRequest
     * @returns DescribeDBClusterParametersResponse
     */
    describeDBClusterParameters(request: $_model.DescribeDBClusterParametersRequest): Promise<$_model.DescribeDBClusterParametersResponse>;
    /**
     * Queries the performance data of a PolarDB cluster.
     *
     * @remarks
     * If the monitoring frequency is 5 seconds:
     *     - When the query time range is less than or equal to 1 hour, the display granularity is 5 seconds.
     *     - When the query time range is less than or equal to 1 day, the display granularity is 1 minute.
     *     - When the query time range is less than or equal to 7 days, the display granularity is 10 minutes.
     *     - When the query time range is less than or equal to 30 days, the display granularity is 1 hour.
     *     - When the query time range is greater than 30 days, the display granularity is 1 day.
     * * If the monitoring frequency is 60 seconds:
     *     - When the query time range is less than or equal to 1 day, the display granularity is 1 minute.
     *     - When the query time range is less than or equal to 7 days, the display granularity is 10 minutes.
     *     - When the query time range is less than or equal to 30 days, the display granularity is 1 hour.
     *     - When the query time range is greater than 30 days, the display granularity is 1 day.
     * > The default monitoring frequency is 60 seconds. You can call the [ModifyDBClusterMonitor](https://help.aliyun.com/document_detail/159557.html) operation to set it to 5 seconds.
     *
     * @param request - DescribeDBClusterPerformanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBClusterPerformanceResponse
     */
    describeDBClusterPerformanceWithOptions(request: $_model.DescribeDBClusterPerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterPerformanceResponse>;
    /**
     * Queries the performance data of a PolarDB cluster.
     *
     * @remarks
     * If the monitoring frequency is 5 seconds:
     *     - When the query time range is less than or equal to 1 hour, the display granularity is 5 seconds.
     *     - When the query time range is less than or equal to 1 day, the display granularity is 1 minute.
     *     - When the query time range is less than or equal to 7 days, the display granularity is 10 minutes.
     *     - When the query time range is less than or equal to 30 days, the display granularity is 1 hour.
     *     - When the query time range is greater than 30 days, the display granularity is 1 day.
     * * If the monitoring frequency is 60 seconds:
     *     - When the query time range is less than or equal to 1 day, the display granularity is 1 minute.
     *     - When the query time range is less than or equal to 7 days, the display granularity is 10 minutes.
     *     - When the query time range is less than or equal to 30 days, the display granularity is 1 hour.
     *     - When the query time range is greater than 30 days, the display granularity is 1 day.
     * > The default monitoring frequency is 60 seconds. You can call the [ModifyDBClusterMonitor](https://help.aliyun.com/document_detail/159557.html) operation to set it to 5 seconds.
     *
     * @param request - DescribeDBClusterPerformanceRequest
     * @returns DescribeDBClusterPerformanceResponse
     */
    describeDBClusterPerformance(request: $_model.DescribeDBClusterPerformanceRequest): Promise<$_model.DescribeDBClusterPerformanceResponse>;
    /**
     * Queries the price of a cluster.
     *
     * @param tmpReq - DescribeDBClusterPriceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBClusterPriceResponse
     */
    describeDBClusterPriceWithOptions(tmpReq: $_model.DescribeDBClusterPriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterPriceResponse>;
    /**
     * Queries the price of a cluster.
     *
     * @param request - DescribeDBClusterPriceRequest
     * @returns DescribeDBClusterPriceResponse
     */
    describeDBClusterPrice(request: $_model.DescribeDBClusterPriceRequest): Promise<$_model.DescribeDBClusterPriceResponse>;
    /**
     * Queries a database cluster proxy.
     *
     * @param request - DescribeDBClusterProxyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBClusterProxyResponse
     */
    describeDBClusterProxyWithOptions(request: $_model.DescribeDBClusterProxyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterProxyResponse>;
    /**
     * Queries a database cluster proxy.
     *
     * @param request - DescribeDBClusterProxyRequest
     * @returns DescribeDBClusterProxyResponse
     */
    describeDBClusterProxy(request: $_model.DescribeDBClusterProxyRequest): Promise<$_model.DescribeDBClusterProxyResponse>;
    /**
     * Queries the SSL settings of a PolarDB cluster.
     *
     * @param request - DescribeDBClusterSSLRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBClusterSSLResponse
     */
    describeDBClusterSSLWithOptions(request: $_model.DescribeDBClusterSSLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterSSLResponse>;
    /**
     * Queries the SSL settings of a PolarDB cluster.
     *
     * @param request - DescribeDBClusterSSLRequest
     * @returns DescribeDBClusterSSLResponse
     */
    describeDBClusterSSL(request: $_model.DescribeDBClusterSSLRequest): Promise<$_model.DescribeDBClusterSSLResponse>;
    /**
     * Queries the configuration of a serverless cluster.
     *
     * @param request - DescribeDBClusterServerlessConfRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBClusterServerlessConfResponse
     */
    describeDBClusterServerlessConfWithOptions(request: $_model.DescribeDBClusterServerlessConfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterServerlessConfResponse>;
    /**
     * Queries the configuration of a serverless cluster.
     *
     * @param request - DescribeDBClusterServerlessConfRequest
     * @returns DescribeDBClusterServerlessConfResponse
     */
    describeDBClusterServerlessConf(request: $_model.DescribeDBClusterServerlessConfRequest): Promise<$_model.DescribeDBClusterServerlessConfResponse>;
    /**
     * Queries the Transparent Data Encryption (TDE) settings of a PolarDB cluster.
     *
     * @param request - DescribeDBClusterTDERequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBClusterTDEResponse
     */
    describeDBClusterTDEWithOptions(request: $_model.DescribeDBClusterTDERequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterTDEResponse>;
    /**
     * Queries the Transparent Data Encryption (TDE) settings of a PolarDB cluster.
     *
     * @param request - DescribeDBClusterTDERequest
     * @returns DescribeDBClusterTDEResponse
     */
    describeDBClusterTDE(request: $_model.DescribeDBClusterTDERequest): Promise<$_model.DescribeDBClusterTDEResponse>;
    /**
     * Queries the details of the current kernel version of a PolarDB for MySQL cluster.
     *
     * @remarks
     * >For more information about the Milvus versions of PolarDB for MySQL clusters, see [Milvus version overview](https://help.aliyun.com/document_detail/471239.html) and [Kernel release notes](https://help.aliyun.com/document_detail/423884.html).
     *
     * @param request - DescribeDBClusterVersionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBClusterVersionResponse
     */
    describeDBClusterVersionWithOptions(request: $_model.DescribeDBClusterVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterVersionResponse>;
    /**
     * Queries the details of the current kernel version of a PolarDB for MySQL cluster.
     *
     * @remarks
     * >For more information about the Milvus versions of PolarDB for MySQL clusters, see [Milvus version overview](https://help.aliyun.com/document_detail/471239.html) and [Kernel release notes](https://help.aliyun.com/document_detail/423884.html).
     *
     * @param request - DescribeDBClusterVersionRequest
     * @returns DescribeDBClusterVersionResponse
     */
    describeDBClusterVersion(request: $_model.DescribeDBClusterVersionRequest): Promise<$_model.DescribeDBClusterVersionResponse>;
    /**
     * Queries the version of a PolarDB on ENS cluster.
     *
     * @param request - DescribeDBClusterVersionZonalRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBClusterVersionZonalResponse
     */
    describeDBClusterVersionZonalWithOptions(request: $_model.DescribeDBClusterVersionZonalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterVersionZonalResponse>;
    /**
     * Queries the version of a PolarDB on ENS cluster.
     *
     * @param request - DescribeDBClusterVersionZonalRequest
     * @returns DescribeDBClusterVersionZonalResponse
     */
    describeDBClusterVersionZonal(request: $_model.DescribeDBClusterVersionZonalRequest): Promise<$_model.DescribeDBClusterVersionZonalResponse>;
    /**
     * Queries a list of PolarDB clusters or the details of clusters with RAM authorization.
     *
     * @param request - DescribeDBClustersRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBClustersResponse
     */
    describeDBClustersWithOptions(request: $_model.DescribeDBClustersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClustersResponse>;
    /**
     * Queries a list of PolarDB clusters or the details of clusters with RAM authorization.
     *
     * @param request - DescribeDBClustersRequest
     * @returns DescribeDBClustersResponse
     */
    describeDBClusters(request: $_model.DescribeDBClustersRequest): Promise<$_model.DescribeDBClustersResponse>;
    /**
     * Queries PolarDB clusters in a region that have backup sets.
     *
     * @param request - DescribeDBClustersWithBackupsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBClustersWithBackupsResponse
     */
    describeDBClustersWithBackupsWithOptions(request: $_model.DescribeDBClustersWithBackupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClustersWithBackupsResponse>;
    /**
     * Queries PolarDB clusters in a region that have backup sets.
     *
     * @param request - DescribeDBClustersWithBackupsRequest
     * @returns DescribeDBClustersWithBackupsResponse
     */
    describeDBClustersWithBackups(request: $_model.DescribeDBClustersWithBackupsRequest): Promise<$_model.DescribeDBClustersWithBackupsResponse>;
    /**
     * Lists the PolarDB clusters in MyBase.
     *
     * @param request - DescribeDBClustersZonalRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBClustersZonalResponse
     */
    describeDBClustersZonalWithOptions(request: $_model.DescribeDBClustersZonalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClustersZonalResponse>;
    /**
     * Lists the PolarDB clusters in MyBase.
     *
     * @param request - DescribeDBClustersZonalRequest
     * @returns DescribeDBClustersZonalResponse
     */
    describeDBClustersZonal(request: $_model.DescribeDBClustersZonalRequest): Promise<$_model.DescribeDBClustersZonalResponse>;
    /**
     * Queries the supported character sets, collations, and other properties of a PolarDB database.
     *
     * @param request - DescribeDBInitializeVariableRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBInitializeVariableResponse
     */
    describeDBInitializeVariableWithOptions(request: $_model.DescribeDBInitializeVariableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInitializeVariableResponse>;
    /**
     * Queries the supported character sets, collations, and other properties of a PolarDB database.
     *
     * @param request - DescribeDBInitializeVariableRequest
     * @returns DescribeDBInitializeVariableResponse
     */
    describeDBInitializeVariable(request: $_model.DescribeDBInitializeVariableRequest): Promise<$_model.DescribeDBInitializeVariableResponse>;
    /**
     * Queries the performance monitoring data for a compute node.
     *
     * @param request - DescribeDBInstancePerformanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBInstancePerformanceResponse
     */
    describeDBInstancePerformanceWithOptions(request: $_model.DescribeDBInstancePerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstancePerformanceResponse>;
    /**
     * Queries the performance monitoring data for a compute node.
     *
     * @param request - DescribeDBInstancePerformanceRequest
     * @returns DescribeDBInstancePerformanceResponse
     */
    describeDBInstancePerformance(request: $_model.DescribeDBInstancePerformanceRequest): Promise<$_model.DescribeDBInstancePerformanceResponse>;
    /**
     * Queries the list of instances.
     *
     * @param request - DescribeDBInstancesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBInstancesResponse
     */
    describeDBInstancesWithOptions(request: $_model.DescribeDBInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstancesResponse>;
    /**
     * Queries the list of instances.
     *
     * @param request - DescribeDBInstancesRequest
     * @returns DescribeDBInstancesResponse
     */
    describeDBInstances(request: $_model.DescribeDBInstancesRequest): Promise<$_model.DescribeDBInstancesResponse>;
    /**
     * Queries the database links of a PolarDB for Oracle cluster.
     *
     * @remarks
     * > You can query only the database links that use a PolarDB for Oracle cluster as the source.
     *
     * @param request - DescribeDBLinksRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBLinksResponse
     */
    describeDBLinksWithOptions(request: $_model.DescribeDBLinksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBLinksResponse>;
    /**
     * Queries the database links of a PolarDB for Oracle cluster.
     *
     * @remarks
     * > You can query only the database links that use a PolarDB for Oracle cluster as the source.
     *
     * @param request - DescribeDBLinksRequest
     * @returns DescribeDBLinksResponse
     */
    describeDBLinks(request: $_model.DescribeDBLinksRequest): Promise<$_model.DescribeDBLinksResponse>;
    /**
     * Queries the logs of a PolarDB cluster, such as primary/secondary failover logs.
     *
     * @param request - DescribeDBLogFilesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBLogFilesResponse
     */
    describeDBLogFilesWithOptions(request: $_model.DescribeDBLogFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBLogFilesResponse>;
    /**
     * Queries the logs of a PolarDB cluster, such as primary/secondary failover logs.
     *
     * @param request - DescribeDBLogFilesRequest
     * @returns DescribeDBLogFilesResponse
     */
    describeDBLogFiles(request: $_model.DescribeDBLogFilesRequest): Promise<$_model.DescribeDBLogFilesResponse>;
    /**
     * Queries the available minor engine versions.
     *
     * @param request - DescribeDBMiniEngineVersionsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBMiniEngineVersionsResponse
     */
    describeDBMiniEngineVersionsWithOptions(request: $_model.DescribeDBMiniEngineVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBMiniEngineVersionsResponse>;
    /**
     * Queries the available minor engine versions.
     *
     * @param request - DescribeDBMiniEngineVersionsRequest
     * @returns DescribeDBMiniEngineVersionsResponse
     */
    describeDBMiniEngineVersions(request: $_model.DescribeDBMiniEngineVersionsRequest): Promise<$_model.DescribeDBMiniEngineVersionsResponse>;
    /**
     * Queries performance data for a node in a PolarDB cluster.
     *
     * @remarks
     * - If the monitoring frequency is 5 seconds:
     *   - If the query time range is 1 hour or less, the data granularity is 5 seconds.
     *   - If the query time range is 1 day or less, the data granularity is 1 minute.
     *   - If the query time range is 7 days or less, the data granularity is 10 minutes.
     *   - If the query time range is 30 days or less, the data granularity is 1 hour.
     *   - If the query time range is more than 30 days, the data granularity is 1 day.
     * - If the monitoring frequency is 60 seconds:
     *   - If the query time range is 1 day or less, the data granularity is 1 minute.
     *   - If the query time range is 7 days or less, the data granularity is 10 minutes.
     *   - If the query time range is 30 days or less, the data granularity is 1 hour.
     *   - If the query time range is more than 30 days, the data granularity is 1 day.
     * > The default monitoring frequency is 60 seconds. Call the [ModifyDBClusterMonitor](https://help.aliyun.com/document_detail/159557.html) operation to set it to 5 seconds.
     *
     * @param request - DescribeDBNodePerformanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBNodePerformanceResponse
     */
    describeDBNodePerformanceWithOptions(request: $_model.DescribeDBNodePerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBNodePerformanceResponse>;
    /**
     * Queries performance data for a node in a PolarDB cluster.
     *
     * @remarks
     * - If the monitoring frequency is 5 seconds:
     *   - If the query time range is 1 hour or less, the data granularity is 5 seconds.
     *   - If the query time range is 1 day or less, the data granularity is 1 minute.
     *   - If the query time range is 7 days or less, the data granularity is 10 minutes.
     *   - If the query time range is 30 days or less, the data granularity is 1 hour.
     *   - If the query time range is more than 30 days, the data granularity is 1 day.
     * - If the monitoring frequency is 60 seconds:
     *   - If the query time range is 1 day or less, the data granularity is 1 minute.
     *   - If the query time range is 7 days or less, the data granularity is 10 minutes.
     *   - If the query time range is 30 days or less, the data granularity is 1 hour.
     *   - If the query time range is more than 30 days, the data granularity is 1 day.
     * > The default monitoring frequency is 60 seconds. Call the [ModifyDBClusterMonitor](https://help.aliyun.com/document_detail/159557.html) operation to set it to 5 seconds.
     *
     * @param request - DescribeDBNodePerformanceRequest
     * @returns DescribeDBNodePerformanceResponse
     */
    describeDBNodePerformance(request: $_model.DescribeDBNodePerformanceRequest): Promise<$_model.DescribeDBNodePerformanceResponse>;
    /**
     * Queries the parameters for specified nodes in a cluster.
     *
     * @param request - DescribeDBNodesParametersRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBNodesParametersResponse
     */
    describeDBNodesParametersWithOptions(request: $_model.DescribeDBNodesParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBNodesParametersResponse>;
    /**
     * Queries the parameters for specified nodes in a cluster.
     *
     * @param request - DescribeDBNodesParametersRequest
     * @returns DescribeDBNodesParametersResponse
     */
    describeDBNodesParameters(request: $_model.DescribeDBNodesParametersRequest): Promise<$_model.DescribeDBNodesParametersResponse>;
    /**
     * Queries the performance data of PolarProxy.
     *
     * @remarks
     * > This operation is applicable only to PolarDB for MySQL clusters.
     *
     * @param request - DescribeDBProxyPerformanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDBProxyPerformanceResponse
     */
    describeDBProxyPerformanceWithOptions(request: $_model.DescribeDBProxyPerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBProxyPerformanceResponse>;
    /**
     * Queries the performance data of PolarProxy.
     *
     * @remarks
     * > This operation is applicable only to PolarDB for MySQL clusters.
     *
     * @param request - DescribeDBProxyPerformanceRequest
     * @returns DescribeDBProxyPerformanceResponse
     */
    describeDBProxyPerformance(request: $_model.DescribeDBProxyPerformanceRequest): Promise<$_model.DescribeDBProxyPerformanceResponse>;
    /**
     * Queries the configurations of a cluster in Database Autonomy Service (DAS).
     *
     * @param request - DescribeDasConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDasConfigResponse
     */
    describeDasConfigWithOptions(request: $_model.DescribeDasConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDasConfigResponse>;
    /**
     * Queries the configurations of a cluster in Database Autonomy Service (DAS).
     *
     * @param request - DescribeDasConfigRequest
     * @returns DescribeDasConfigResponse
     */
    describeDasConfig(request: $_model.DescribeDasConfigRequest): Promise<$_model.DescribeDasConfigResponse>;
    /**
     * Queries the status, data source, destination database, and processing configuration of a specified data processing task.
     *
     * @param request - DescribeDataProcessJobAttributeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDataProcessJobAttributeResponse
     */
    describeDataProcessJobAttributeWithOptions(request: $_model.DescribeDataProcessJobAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataProcessJobAttributeResponse>;
    /**
     * Queries the status, data source, destination database, and processing configuration of a specified data processing task.
     *
     * @param request - DescribeDataProcessJobAttributeRequest
     * @returns DescribeDataProcessJobAttributeResponse
     */
    describeDataProcessJobAttribute(request: $_model.DescribeDataProcessJobAttributeRequest): Promise<$_model.DescribeDataProcessJobAttributeResponse>;
    /**
     * Queries data processing task templates by region, template ID, or type, and returns paginated template configurations.
     *
     * @param request - DescribeDataProcessJobTemplatesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDataProcessJobTemplatesResponse
     */
    describeDataProcessJobTemplatesWithOptions(request: $_model.DescribeDataProcessJobTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataProcessJobTemplatesResponse>;
    /**
     * Queries data processing task templates by region, template ID, or type, and returns paginated template configurations.
     *
     * @param request - DescribeDataProcessJobTemplatesRequest
     * @returns DescribeDataProcessJobTemplatesResponse
     */
    describeDataProcessJobTemplates(request: $_model.DescribeDataProcessJobTemplatesRequest): Promise<$_model.DescribeDataProcessJobTemplatesResponse>;
    /**
     * Queries the data processing jobs of a specified PolarFS instance. You can filter the jobs by job ID and paginate the results.
     *
     * @param request - DescribeDataProcessJobsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDataProcessJobsResponse
     */
    describeDataProcessJobsWithOptions(request: $_model.DescribeDataProcessJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataProcessJobsResponse>;
    /**
     * Queries the data processing jobs of a specified PolarFS instance. You can filter the jobs by job ID and paginate the results.
     *
     * @param request - DescribeDataProcessJobsRequest
     * @returns DescribeDataProcessJobsResponse
     */
    describeDataProcessJobs(request: $_model.DescribeDataProcessJobsRequest): Promise<$_model.DescribeDataProcessJobsResponse>;
    /**
     * Queries for the details of databases in a specified PolarDB cluster.
     *
     * @param request - DescribeDatabasesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDatabasesResponse
     */
    describeDatabasesWithOptions(request: $_model.DescribeDatabasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDatabasesResponse>;
    /**
     * Queries for the details of databases in a specified PolarDB cluster.
     *
     * @param request - DescribeDatabasesRequest
     * @returns DescribeDatabasesResponse
     */
    describeDatabases(request: $_model.DescribeDatabasesRequest): Promise<$_model.DescribeDatabasesResponse>;
    /**
     * Describes the databases in a PolarDB on ENS cluster.
     *
     * @param request - DescribeDatabasesZonalRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDatabasesZonalResponse
     */
    describeDatabasesZonalWithOptions(request: $_model.DescribeDatabasesZonalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDatabasesZonalResponse>;
    /**
     * Describes the databases in a PolarDB on ENS cluster.
     *
     * @param request - DescribeDatabasesZonalRequest
     * @returns DescribeDatabasesZonalResponse
     */
    describeDatabasesZonal(request: $_model.DescribeDatabasesZonalRequest): Promise<$_model.DescribeDatabasesZonalResponse>;
    /**
     * Queries the details of an edge cluster.
     *
     * @param request - DescribeDbClusterAttributeZonalRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDbClusterAttributeZonalResponse
     */
    describeDbClusterAttributeZonalWithOptions(request: $_model.DescribeDbClusterAttributeZonalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDbClusterAttributeZonalResponse>;
    /**
     * Queries the details of an edge cluster.
     *
     * @param request - DescribeDbClusterAttributeZonalRequest
     * @returns DescribeDbClusterAttributeZonalResponse
     */
    describeDbClusterAttributeZonal(request: $_model.DescribeDbClusterAttributeZonalRequest): Promise<$_model.DescribeDbClusterAttributeZonalResponse>;
    /**
     * Queries the details of backup sets in a released PolarDB cluster.
     *
     * @remarks
     * When you invoke this operation, the PolarDB cluster must be in the **Released** state, and one of the following backup retention options must have been selected when the cluster was released: **Long-term Retention (LTR) of All Backups** or **Long-term Retention (LTR) of the Last Backup (Automatic Backup Before Deletion)**. If all retained backup sets of a released cluster have been manually deleted, this operation can no longer query the cluster.
     * > You can invoke the [DescribeDBClusterAttribute](https://help.aliyun.com/document_detail/98181.html) operation to query the cluster status.
     *
     * @param request - DescribeDetachedBackupsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDetachedBackupsResponse
     */
    describeDetachedBackupsWithOptions(request: $_model.DescribeDetachedBackupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDetachedBackupsResponse>;
    /**
     * Queries the details of backup sets in a released PolarDB cluster.
     *
     * @remarks
     * When you invoke this operation, the PolarDB cluster must be in the **Released** state, and one of the following backup retention options must have been selected when the cluster was released: **Long-term Retention (LTR) of All Backups** or **Long-term Retention (LTR) of the Last Backup (Automatic Backup Before Deletion)**. If all retained backup sets of a released cluster have been manually deleted, this operation can no longer query the cluster.
     * > You can invoke the [DescribeDBClusterAttribute](https://help.aliyun.com/document_detail/98181.html) operation to query the cluster status.
     *
     * @param request - DescribeDetachedBackupsRequest
     * @returns DescribeDetachedBackupsResponse
     */
    describeDetachedBackups(request: $_model.DescribeDetachedBackupsRequest): Promise<$_model.DescribeDetachedBackupsResponse>;
    /**
     * Queries the available edge cloud regions for the current account, including their central control regions and standby edge cloud regions.
     *
     * @param request - DescribeEdgeCloudRegionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeEdgeCloudRegionResponse
     */
    describeEdgeCloudRegionWithOptions(request: $_model.DescribeEdgeCloudRegionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEdgeCloudRegionResponse>;
    /**
     * Queries the available edge cloud regions for the current account, including their central control regions and standby edge cloud regions.
     *
     * @param request - DescribeEdgeCloudRegionRequest
     * @returns DescribeEdgeCloudRegionResponse
     */
    describeEdgeCloudRegion(request: $_model.DescribeEdgeCloudRegionRequest): Promise<$_model.DescribeEdgeCloudRegionResponse>;
    /**
     * Queries a list of permissions for a database role.
     *
     * @param request - DescribeEncryptionDBRolePrivilegeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeEncryptionDBRolePrivilegeResponse
     */
    describeEncryptionDBRolePrivilegeWithOptions(request: $_model.DescribeEncryptionDBRolePrivilegeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEncryptionDBRolePrivilegeResponse>;
    /**
     * Queries a list of permissions for a database role.
     *
     * @param request - DescribeEncryptionDBRolePrivilegeRequest
     * @returns DescribeEncryptionDBRolePrivilegeResponse
     */
    describeEncryptionDBRolePrivilege(request: $_model.DescribeEncryptionDBRolePrivilegeRequest): Promise<$_model.DescribeEncryptionDBRolePrivilegeResponse>;
    /**
     * Queries encryption key information.
     *
     * @param request - DescribeEncryptionDBSecretRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeEncryptionDBSecretResponse
     */
    describeEncryptionDBSecretWithOptions(request: $_model.DescribeEncryptionDBSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEncryptionDBSecretResponse>;
    /**
     * Queries encryption key information.
     *
     * @param request - DescribeEncryptionDBSecretRequest
     * @returns DescribeEncryptionDBSecretResponse
     */
    describeEncryptionDBSecret(request: $_model.DescribeEncryptionDBSecretRequest): Promise<$_model.DescribeEncryptionDBSecretResponse>;
    /**
     * Queries plugin details.
     *
     * @param request - DescribeExtensionsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeExtensionsResponse
     */
    describeExtensionsWithOptions(request: $_model.DescribeExtensionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExtensionsResponse>;
    /**
     * Queries plugin details.
     *
     * @param request - DescribeExtensionsRequest
     * @returns DescribeExtensionsResponse
     */
    describeExtensions(request: $_model.DescribeExtensionsRequest): Promise<$_model.DescribeExtensionsResponse>;
    /**
     * Queries the file information under a specified path of a PolarFS instance and uses a pagination token to retrieve subsequent results.
     *
     * @param request - DescribeFileSystemsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeFileSystemsResponse
     */
    describeFileSystemsWithOptions(request: $_model.DescribeFileSystemsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFileSystemsResponse>;
    /**
     * Queries the file information under a specified path of a PolarFS instance and uses a pagination token to retrieve subsequent results.
     *
     * @param request - DescribeFileSystemsRequest
     * @returns DescribeFileSystemsResponse
     */
    describeFileSystems(request: $_model.DescribeFileSystemsRequest): Promise<$_model.DescribeFileSystemsResponse>;
    /**
     * Describes SQL firewall rules.
     *
     * @param request - DescribeFirewallRulesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeFirewallRulesResponse
     */
    describeFirewallRulesWithOptions(request: $_model.DescribeFirewallRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFirewallRulesResponse>;
    /**
     * Describes SQL firewall rules.
     *
     * @param request - DescribeFirewallRulesRequest
     * @returns DescribeFirewallRulesResponse
     */
    describeFirewallRules(request: $_model.DescribeFirewallRulesRequest): Promise<$_model.DescribeFirewallRulesResponse>;
    /**
     * Queries all API keys for the specified UID.
     *
     * @param request - DescribeGatewayApikeyListRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeGatewayApikeyListResponse
     */
    describeGatewayApikeyListWithOptions(request: $_model.DescribeGatewayApikeyListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGatewayApikeyListResponse>;
    /**
     * Queries all API keys for the specified UID.
     *
     * @param request - DescribeGatewayApikeyListRequest
     * @returns DescribeGatewayApikeyListResponse
     */
    describeGatewayApikeyList(request: $_model.DescribeGatewayApikeyListRequest): Promise<$_model.DescribeGatewayApikeyListResponse>;
    /**
     * Queries the details of a gateway instance.
     *
     * @param request - DescribeGatewayAttributeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeGatewayAttributeResponse
     */
    describeGatewayAttributeWithOptions(request: $_model.DescribeGatewayAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGatewayAttributeResponse>;
    /**
     * Queries the details of a gateway instance.
     *
     * @param request - DescribeGatewayAttributeRequest
     * @returns DescribeGatewayAttributeResponse
     */
    describeGatewayAttribute(request: $_model.DescribeGatewayAttributeRequest): Promise<$_model.DescribeGatewayAttributeResponse>;
    /**
     * Queries a list of gateway instances.
     *
     * @param request - DescribeGatewayListRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeGatewayListResponse
     */
    describeGatewayListWithOptions(request: $_model.DescribeGatewayListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGatewayListResponse>;
    /**
     * Queries a list of gateway instances.
     *
     * @param request - DescribeGatewayListRequest
     * @returns DescribeGatewayListResponse
     */
    describeGatewayList(request: $_model.DescribeGatewayListRequest): Promise<$_model.DescribeGatewayListResponse>;
    /**
     * Queries the details of Polarlakebase Global Database Networks (GDNs) across all regions.
     *
     * @param request - DescribeGlobalDataNetworkListRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeGlobalDataNetworkListResponse
     */
    describeGlobalDataNetworkListWithOptions(request: $_model.DescribeGlobalDataNetworkListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGlobalDataNetworkListResponse>;
    /**
     * Queries the details of Polarlakebase Global Database Networks (GDNs) across all regions.
     *
     * @param request - DescribeGlobalDataNetworkListRequest
     * @returns DescribeGlobalDataNetworkListResponse
     */
    describeGlobalDataNetworkList(request: $_model.DescribeGlobalDataNetworkListRequest): Promise<$_model.DescribeGlobalDataNetworkListResponse>;
    /**
     * Queries the details of a global database network (GDN).
     *
     * @param request - DescribeGlobalDatabaseNetworkRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeGlobalDatabaseNetworkResponse
     */
    describeGlobalDatabaseNetworkWithOptions(request: $_model.DescribeGlobalDatabaseNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGlobalDatabaseNetworkResponse>;
    /**
     * Queries the details of a global database network (GDN).
     *
     * @param request - DescribeGlobalDatabaseNetworkRequest
     * @returns DescribeGlobalDatabaseNetworkResponse
     */
    describeGlobalDatabaseNetwork(request: $_model.DescribeGlobalDatabaseNetworkRequest): Promise<$_model.DescribeGlobalDatabaseNetworkResponse>;
    /**
     * View details for all Global Database Networks (GDNs) in your account.
     *
     * @param request - DescribeGlobalDatabaseNetworksRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeGlobalDatabaseNetworksResponse
     */
    describeGlobalDatabaseNetworksWithOptions(request: $_model.DescribeGlobalDatabaseNetworksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGlobalDatabaseNetworksResponse>;
    /**
     * View details for all Global Database Networks (GDNs) in your account.
     *
     * @param request - DescribeGlobalDatabaseNetworksRequest
     * @returns DescribeGlobalDatabaseNetworksResponse
     */
    describeGlobalDatabaseNetworks(request: $_model.DescribeGlobalDatabaseNetworksRequest): Promise<$_model.DescribeGlobalDatabaseNetworksResponse>;
    /**
     * Queries the list of global IP allowlist templates.
     *
     * @param request - DescribeGlobalSecurityIPGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeGlobalSecurityIPGroupResponse
     */
    describeGlobalSecurityIPGroupWithOptions(request: $_model.DescribeGlobalSecurityIPGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGlobalSecurityIPGroupResponse>;
    /**
     * Queries the list of global IP allowlist templates.
     *
     * @param request - DescribeGlobalSecurityIPGroupRequest
     * @returns DescribeGlobalSecurityIPGroupResponse
     */
    describeGlobalSecurityIPGroup(request: $_model.DescribeGlobalSecurityIPGroupRequest): Promise<$_model.DescribeGlobalSecurityIPGroupResponse>;
    /**
     * Queries the relationship between a cluster and a global IP whitelist template.
     *
     * @param request - DescribeGlobalSecurityIPGroupRelationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeGlobalSecurityIPGroupRelationResponse
     */
    describeGlobalSecurityIPGroupRelationWithOptions(request: $_model.DescribeGlobalSecurityIPGroupRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGlobalSecurityIPGroupRelationResponse>;
    /**
     * Queries the relationship between a cluster and a global IP whitelist template.
     *
     * @param request - DescribeGlobalSecurityIPGroupRelationRequest
     * @returns DescribeGlobalSecurityIPGroupRelationResponse
     */
    describeGlobalSecurityIPGroupRelation(request: $_model.DescribeGlobalSecurityIPGroupRelationRequest): Promise<$_model.DescribeGlobalSecurityIPGroupRelationResponse>;
    /**
     * Queries high-availability logs of an instance.
     *
     * @remarks
     * >-  Only PolarDB for MySQL supports this operation.
     *
     * @param request - DescribeHALogsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeHALogsResponse
     */
    describeHALogsWithOptions(request: $_model.DescribeHALogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHALogsResponse>;
    /**
     * Queries high-availability logs of an instance.
     *
     * @remarks
     * >-  Only PolarDB for MySQL supports this operation.
     *
     * @param request - DescribeHALogsRequest
     * @returns DescribeHALogsResponse
     */
    describeHALogs(request: $_model.DescribeHALogsRequest): Promise<$_model.DescribeHALogsResponse>;
    /**
     * Queries the list of events in Event Center.
     *
     * @param request - DescribeHistoryEventsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeHistoryEventsResponse
     */
    describeHistoryEventsWithOptions(request: $_model.DescribeHistoryEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHistoryEventsResponse>;
    /**
     * Queries the list of events in Event Center.
     *
     * @param request - DescribeHistoryEventsRequest
     * @returns DescribeHistoryEventsResponse
     */
    describeHistoryEvents(request: $_model.DescribeHistoryEventsRequest): Promise<$_model.DescribeHistoryEventsResponse>;
    /**
     * Queries the number of events in the Event Center by event category.
     *
     * @param request - DescribeHistoryEventsStatRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeHistoryEventsStatResponse
     */
    describeHistoryEventsStatWithOptions(request: $_model.DescribeHistoryEventsStatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHistoryEventsStatResponse>;
    /**
     * Queries the number of events in the Event Center by event category.
     *
     * @param request - DescribeHistoryEventsStatRequest
     * @returns DescribeHistoryEventsStatResponse
     */
    describeHistoryEventsStat(request: $_model.DescribeHistoryEventsStatRequest): Promise<$_model.DescribeHistoryEventsStatResponse>;
    /**
     * Queries the historical task list for PolarDB for MySQL.
     *
     * @param request - DescribeHistoryTasksRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeHistoryTasksResponse
     */
    describeHistoryTasksWithOptions(request: $_model.DescribeHistoryTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHistoryTasksResponse>;
    /**
     * Queries the historical task list for PolarDB for MySQL.
     *
     * @param request - DescribeHistoryTasksRequest
     * @returns DescribeHistoryTasksResponse
     */
    describeHistoryTasks(request: $_model.DescribeHistoryTasksRequest): Promise<$_model.DescribeHistoryTasksResponse>;
    /**
     * Queries task statistics in Task Center.
     *
     * @param request - DescribeHistoryTasksStatRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeHistoryTasksStatResponse
     */
    describeHistoryTasksStatWithOptions(request: $_model.DescribeHistoryTasksStatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHistoryTasksStatResponse>;
    /**
     * Queries task statistics in Task Center.
     *
     * @param request - DescribeHistoryTasksStatRequest
     * @returns DescribeHistoryTasksStatResponse
     */
    describeHistoryTasksStat(request: $_model.DescribeHistoryTasksStatRequest): Promise<$_model.DescribeHistoryTasksStatResponse>;
    /**
     * Queries the reports of a specified inspection task. You can filter the reports by time and return the report details in a paginated format.
     *
     * @param request - DescribeInspectionReportListRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeInspectionReportListResponse
     */
    describeInspectionReportListWithOptions(request: $_model.DescribeInspectionReportListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInspectionReportListResponse>;
    /**
     * Queries the reports of a specified inspection task. You can filter the reports by time and return the report details in a paginated format.
     *
     * @param request - DescribeInspectionReportListRequest
     * @returns DescribeInspectionReportListResponse
     */
    describeInspectionReportList(request: $_model.DescribeInspectionReportListRequest): Promise<$_model.DescribeInspectionReportListResponse>;
    /**
     * Queries the execution plan, associated clusters, and validity period of a specified inspection task.
     *
     * @param request - DescribeInspectionTaskAttributeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeInspectionTaskAttributeResponse
     */
    describeInspectionTaskAttributeWithOptions(request: $_model.DescribeInspectionTaskAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInspectionTaskAttributeResponse>;
    /**
     * Queries the execution plan, associated clusters, and validity period of a specified inspection task.
     *
     * @param request - DescribeInspectionTaskAttributeRequest
     * @returns DescribeInspectionTaskAttributeResponse
     */
    describeInspectionTaskAttribute(request: $_model.DescribeInspectionTaskAttributeRequest): Promise<$_model.DescribeInspectionTaskAttributeResponse>;
    /**
     * Queries inspection tasks, their execution plans, and associated clusters by paging based on the inspection workspace.
     *
     * @param request - DescribeInspectionTaskListRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeInspectionTaskListResponse
     */
    describeInspectionTaskListWithOptions(request: $_model.DescribeInspectionTaskListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInspectionTaskListResponse>;
    /**
     * Queries inspection tasks, their execution plans, and associated clusters by paging based on the inspection workspace.
     *
     * @param request - DescribeInspectionTaskListRequest
     * @returns DescribeInspectionTaskListResponse
     */
    describeInspectionTaskList(request: $_model.DescribeInspectionTaskListRequest): Promise<$_model.DescribeInspectionTaskListResponse>;
    /**
     * Queries the overall score, status, and inspection results of an instance inspection report based on the report ID.
     *
     * @param request - DescribeInstanceReportAttributeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeInstanceReportAttributeResponse
     */
    describeInstanceReportAttributeWithOptions(request: $_model.DescribeInstanceReportAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceReportAttributeResponse>;
    /**
     * Queries the overall score, status, and inspection results of an instance inspection report based on the report ID.
     *
     * @param request - DescribeInstanceReportAttributeRequest
     * @returns DescribeInstanceReportAttributeResponse
     */
    describeInstanceReportAttribute(request: $_model.DescribeInstanceReportAttributeRequest): Promise<$_model.DescribeInstanceReportAttributeResponse>;
    /**
     * Queries the details of a knowledge base synchronization link.
     *
     * @param request - DescribeKBSyncLinkAttributeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeKBSyncLinkAttributeResponse
     */
    describeKBSyncLinkAttributeWithOptions(request: $_model.DescribeKBSyncLinkAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeKBSyncLinkAttributeResponse>;
    /**
     * Queries the details of a knowledge base synchronization link.
     *
     * @param request - DescribeKBSyncLinkAttributeRequest
     * @returns DescribeKBSyncLinkAttributeResponse
     */
    describeKBSyncLinkAttribute(request: $_model.DescribeKBSyncLinkAttributeRequest): Promise<$_model.DescribeKBSyncLinkAttributeResponse>;
    /**
     * Queries the list of knowledge base synchronization links.
     *
     * @param request - DescribeKBSyncLinksRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeKBSyncLinksResponse
     */
    describeKBSyncLinksWithOptions(request: $_model.DescribeKBSyncLinksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeKBSyncLinksResponse>;
    /**
     * Queries the list of knowledge base synchronization links.
     *
     * @param request - DescribeKBSyncLinksRequest
     * @returns DescribeKBSyncLinksResponse
     */
    describeKBSyncLinks(request: $_model.DescribeKBSyncLinksRequest): Promise<$_model.DescribeKBSyncLinksResponse>;
    /**
     * Queries the region, status, capacity, network, billing method, and expiration information of a specified KVCache instance.
     *
     * @param request - DescribeKVCacheInstanceAttributeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeKVCacheInstanceAttributeResponse
     */
    describeKVCacheInstanceAttributeWithOptions(request: $_model.DescribeKVCacheInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeKVCacheInstanceAttributeResponse>;
    /**
     * Queries the region, status, capacity, network, billing method, and expiration information of a specified KVCache instance.
     *
     * @param request - DescribeKVCacheInstanceAttributeRequest
     * @returns DescribeKVCacheInstanceAttributeResponse
     */
    describeKVCacheInstanceAttribute(request: $_model.DescribeKVCacheInstanceAttributeRequest): Promise<$_model.DescribeKVCacheInstanceAttributeResponse>;
    /**
     * Queries KVCache instances filtered by region, associated cluster, or instance ID, and returns paginated instance details.
     *
     * @param request - DescribeKVCacheInstancesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeKVCacheInstancesResponse
     */
    describeKVCacheInstancesWithOptions(request: $_model.DescribeKVCacheInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeKVCacheInstancesResponse>;
    /**
     * Queries KVCache instances filtered by region, associated cluster, or instance ID, and returns paginated instance details.
     *
     * @param request - DescribeKVCacheInstancesRequest
     * @returns DescribeKVCacheInstancesResponse
     */
    describeKVCacheInstances(request: $_model.DescribeKVCacheInstancesRequest): Promise<$_model.DescribeKVCacheInstancesResponse>;
    /**
     * Queries the single-turn Q&A results of a knowledge base.
     *
     * @param request - DescribeKnowledgeBaseAnswerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeKnowledgeBaseAnswerResponse
     */
    describeKnowledgeBaseAnswerWithOptions(request: $_model.DescribeKnowledgeBaseAnswerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeKnowledgeBaseAnswerResponse>;
    /**
     * Queries the single-turn Q&A results of a knowledge base.
     *
     * @param request - DescribeKnowledgeBaseAnswerRequest
     * @returns DescribeKnowledgeBaseAnswerResponse
     */
    describeKnowledgeBaseAnswer(request: $_model.DescribeKnowledgeBaseAnswerRequest): Promise<$_model.DescribeKnowledgeBaseAnswerResponse>;
    /**
     * Queries the details of a knowledge base.
     *
     * @param request - DescribeKnowledgeBaseAttributeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeKnowledgeBaseAttributeResponse
     */
    describeKnowledgeBaseAttributeWithOptions(request: $_model.DescribeKnowledgeBaseAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeKnowledgeBaseAttributeResponse>;
    /**
     * Queries the details of a knowledge base.
     *
     * @param request - DescribeKnowledgeBaseAttributeRequest
     * @returns DescribeKnowledgeBaseAttributeResponse
     */
    describeKnowledgeBaseAttribute(request: $_model.DescribeKnowledgeBaseAttributeRequest): Promise<$_model.DescribeKnowledgeBaseAttributeResponse>;
    /**
     * Queries the list of file shards in a knowledge base.
     *
     * @param request - DescribeKnowledgeBaseFileShardsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeKnowledgeBaseFileShardsResponse
     */
    describeKnowledgeBaseFileShardsWithOptions(request: $_model.DescribeKnowledgeBaseFileShardsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeKnowledgeBaseFileShardsResponse>;
    /**
     * Queries the list of file shards in a knowledge base.
     *
     * @param request - DescribeKnowledgeBaseFileShardsRequest
     * @returns DescribeKnowledgeBaseFileShardsResponse
     */
    describeKnowledgeBaseFileShards(request: $_model.DescribeKnowledgeBaseFileShardsRequest): Promise<$_model.DescribeKnowledgeBaseFileShardsResponse>;
    /**
     * Queries the list of files in a knowledge base.
     *
     * @param request - DescribeKnowledgeBaseFilesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeKnowledgeBaseFilesResponse
     */
    describeKnowledgeBaseFilesWithOptions(request: $_model.DescribeKnowledgeBaseFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeKnowledgeBaseFilesResponse>;
    /**
     * Queries the list of files in a knowledge base.
     *
     * @param request - DescribeKnowledgeBaseFilesRequest
     * @returns DescribeKnowledgeBaseFilesResponse
     */
    describeKnowledgeBaseFiles(request: $_model.DescribeKnowledgeBaseFilesRequest): Promise<$_model.DescribeKnowledgeBaseFilesResponse>;
    /**
     * Queries a list of knowledge bases.
     *
     * @param request - DescribeKnowledgeBasesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeKnowledgeBasesResponse
     */
    describeKnowledgeBasesWithOptions(request: $_model.DescribeKnowledgeBasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeKnowledgeBasesResponse>;
    /**
     * Queries a list of knowledge bases.
     *
     * @param request - DescribeKnowledgeBasesRequest
     * @returns DescribeKnowledgeBasesResponse
     */
    describeKnowledgeBases(request: $_model.DescribeKnowledgeBasesRequest): Promise<$_model.DescribeKnowledgeBasesResponse>;
    /**
     * Queries the details of a knowledge space.
     *
     * @param request - DescribeKnowledgeSpaceAttributeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeKnowledgeSpaceAttributeResponse
     */
    describeKnowledgeSpaceAttributeWithOptions(request: $_model.DescribeKnowledgeSpaceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeKnowledgeSpaceAttributeResponse>;
    /**
     * Queries the details of a knowledge space.
     *
     * @param request - DescribeKnowledgeSpaceAttributeRequest
     * @returns DescribeKnowledgeSpaceAttributeResponse
     */
    describeKnowledgeSpaceAttribute(request: $_model.DescribeKnowledgeSpaceAttributeRequest): Promise<$_model.DescribeKnowledgeSpaceAttributeResponse>;
    /**
     * Queries the details of a parameter template attached to Lakebase.
     *
     * @param request - DescribeLakebaseMountParameterGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeLakebaseMountParameterGroupResponse
     */
    describeLakebaseMountParameterGroupWithOptions(request: $_model.DescribeLakebaseMountParameterGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLakebaseMountParameterGroupResponse>;
    /**
     * Queries the details of a parameter template attached to Lakebase.
     *
     * @param request - DescribeLakebaseMountParameterGroupRequest
     * @returns DescribeLakebaseMountParameterGroupResponse
     */
    describeLakebaseMountParameterGroup(request: $_model.DescribeLakebaseMountParameterGroupRequest): Promise<$_model.DescribeLakebaseMountParameterGroupResponse>;
    /**
     * Queries the change history of parameter templates mounted to Lakebase.
     *
     * @param request - DescribeLakebaseMountParameterGroupChangeLogsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeLakebaseMountParameterGroupChangeLogsResponse
     */
    describeLakebaseMountParameterGroupChangeLogsWithOptions(request: $_model.DescribeLakebaseMountParameterGroupChangeLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLakebaseMountParameterGroupChangeLogsResponse>;
    /**
     * Queries the change history of parameter templates mounted to Lakebase.
     *
     * @param request - DescribeLakebaseMountParameterGroupChangeLogsRequest
     * @returns DescribeLakebaseMountParameterGroupChangeLogsResponse
     */
    describeLakebaseMountParameterGroupChangeLogs(request: $_model.DescribeLakebaseMountParameterGroupChangeLogsRequest): Promise<$_model.DescribeLakebaseMountParameterGroupChangeLogsResponse>;
    /**
     * Queries the list of parameter templates associated with Lakebase.
     *
     * @param request - DescribeLakebaseMountParameterGroupsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeLakebaseMountParameterGroupsResponse
     */
    describeLakebaseMountParameterGroupsWithOptions(request: $_model.DescribeLakebaseMountParameterGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLakebaseMountParameterGroupsResponse>;
    /**
     * Queries the list of parameter templates associated with Lakebase.
     *
     * @param request - DescribeLakebaseMountParameterGroupsRequest
     * @returns DescribeLakebaseMountParameterGroupsResponse
     */
    describeLakebaseMountParameterGroups(request: $_model.DescribeLakebaseMountParameterGroupsRequest): Promise<$_model.DescribeLakebaseMountParameterGroupsResponse>;
    /**
     * Queries the parameter dictionary supported by Lakebase mounted parameter templates.
     *
     * @param request - DescribeLakebaseMountParameterTemplateListRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeLakebaseMountParameterTemplateListResponse
     */
    describeLakebaseMountParameterTemplateListWithOptions(request: $_model.DescribeLakebaseMountParameterTemplateListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLakebaseMountParameterTemplateListResponse>;
    /**
     * Queries the parameter dictionary supported by Lakebase mounted parameter templates.
     *
     * @param request - DescribeLakebaseMountParameterTemplateListRequest
     * @returns DescribeLakebaseMountParameterTemplateListResponse
     */
    describeLakebaseMountParameterTemplateList(request: $_model.DescribeLakebaseMountParameterTemplateListRequest): Promise<$_model.DescribeLakebaseMountParameterTemplateListResponse>;
    /**
     * Queries the details of a PolarFS S3 account.
     *
     * @param request - DescribeLakebaseS3AccountRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeLakebaseS3AccountResponse
     */
    describeLakebaseS3AccountWithOptions(request: $_model.DescribeLakebaseS3AccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLakebaseS3AccountResponse>;
    /**
     * Queries the details of a PolarFS S3 account.
     *
     * @param request - DescribeLakebaseS3AccountRequest
     * @returns DescribeLakebaseS3AccountResponse
     */
    describeLakebaseS3Account(request: $_model.DescribeLakebaseS3AccountRequest): Promise<$_model.DescribeLakebaseS3AccountResponse>;
    /**
     * Queries a license order.
     *
     * @param request - DescribeLicenseOrderDetailsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeLicenseOrderDetailsResponse
     */
    describeLicenseOrderDetailsWithOptions(request: $_model.DescribeLicenseOrderDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLicenseOrderDetailsResponse>;
    /**
     * Queries a license order.
     *
     * @param request - DescribeLicenseOrderDetailsRequest
     * @returns DescribeLicenseOrderDetailsResponse
     */
    describeLicenseOrderDetails(request: $_model.DescribeLicenseOrderDetailsRequest): Promise<$_model.DescribeLicenseOrderDetailsResponse>;
    /**
     * Queries the list of license orders.
     *
     * @param request - DescribeLicenseOrdersRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeLicenseOrdersResponse
     */
    describeLicenseOrdersWithOptions(request: $_model.DescribeLicenseOrdersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLicenseOrdersResponse>;
    /**
     * Queries the list of license orders.
     *
     * @param request - DescribeLicenseOrdersRequest
     * @returns DescribeLicenseOrdersResponse
     */
    describeLicenseOrders(request: $_model.DescribeLicenseOrdersRequest): Promise<$_model.DescribeLicenseOrdersResponse>;
    /**
     * Queries the restorable time range of backups.
     *
     * @param request - DescribeLocalAvailableRecoveryTimeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeLocalAvailableRecoveryTimeResponse
     */
    describeLocalAvailableRecoveryTimeWithOptions(request: $_model.DescribeLocalAvailableRecoveryTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLocalAvailableRecoveryTimeResponse>;
    /**
     * Queries the restorable time range of backups.
     *
     * @param request - DescribeLocalAvailableRecoveryTimeRequest
     * @returns DescribeLocalAvailableRecoveryTimeResponse
     */
    describeLocalAvailableRecoveryTime(request: $_model.DescribeLocalAvailableRecoveryTimeRequest): Promise<$_model.DescribeLocalAvailableRecoveryTimeResponse>;
    /**
     * Queries the data retention policy for the log backups of a PolarDB cluster.
     *
     * @param request - DescribeLogBackupPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeLogBackupPolicyResponse
     */
    describeLogBackupPolicyWithOptions(request: $_model.DescribeLogBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLogBackupPolicyResponse>;
    /**
     * Queries the data retention policy for the log backups of a PolarDB cluster.
     *
     * @param request - DescribeLogBackupPolicyRequest
     * @returns DescribeLogBackupPolicyResponse
     */
    describeLogBackupPolicy(request: $_model.DescribeLogBackupPolicyRequest): Promise<$_model.DescribeLogBackupPolicyResponse>;
    /**
     * Queries the data masking rules of a PolarDB cluster or the information about a specified masking rule.
     *
     * @param request - DescribeMaskingRulesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeMaskingRulesResponse
     */
    describeMaskingRulesWithOptions(request: $_model.DescribeMaskingRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMaskingRulesResponse>;
    /**
     * Queries the data masking rules of a PolarDB cluster or the information about a specified masking rule.
     *
     * @param request - DescribeMaskingRulesRequest
     * @returns DescribeMaskingRulesResponse
     */
    describeMaskingRules(request: $_model.DescribeMaskingRulesRequest): Promise<$_model.DescribeMaskingRulesResponse>;
    /**
     * Queries recoverable databases and tables.
     *
     * @param request - DescribeMetaListRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeMetaListResponse
     */
    describeMetaListWithOptions(request: $_model.DescribeMetaListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMetaListResponse>;
    /**
     * Queries recoverable databases and tables.
     *
     * @param request - DescribeMetaListRequest
     * @returns DescribeMetaListResponse
     */
    describeMetaList(request: $_model.DescribeMetaListRequest): Promise<$_model.DescribeMetaListResponse>;
    /**
     * Queries model APIs.
     *
     * @param request - DescribeModelApisRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeModelApisResponse
     */
    describeModelApisWithOptions(request: $_model.DescribeModelApisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeModelApisResponse>;
    /**
     * Queries model APIs.
     *
     * @param request - DescribeModelApisRequest
     * @returns DescribeModelApisResponse
     */
    describeModelApis(request: $_model.DescribeModelApisRequest): Promise<$_model.DescribeModelApisResponse>;
    /**
     * Queries the list of model services.
     *
     * @param request - DescribeModelServicesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeModelServicesResponse
     */
    describeModelServicesWithOptions(request: $_model.DescribeModelServicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeModelServicesResponse>;
    /**
     * Queries the list of model services.
     *
     * @param request - DescribeModelServicesRequest
     * @returns DescribeModelServicesResponse
     */
    describeModelServices(request: $_model.DescribeModelServicesRequest): Promise<$_model.DescribeModelServicesResponse>;
    /**
     * Queries the modification history of query parameters.
     *
     * @param request - DescribeModifyParameterLogRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeModifyParameterLogResponse
     */
    describeModifyParameterLogWithOptions(request: $_model.DescribeModifyParameterLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeModifyParameterLogResponse>;
    /**
     * Queries the modification history of query parameters.
     *
     * @param request - DescribeModifyParameterLogRequest
     * @returns DescribeModifyParameterLogResponse
     */
    describeModifyParameterLog(request: $_model.DescribeModifyParameterLogRequest): Promise<$_model.DescribeModifyParameterLogResponse>;
    /**
     * Queries a network channel.
     *
     * @param request - DescribeNetworkChannelRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeNetworkChannelResponse
     */
    describeNetworkChannelWithOptions(request: $_model.DescribeNetworkChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNetworkChannelResponse>;
    /**
     * Queries a network channel.
     *
     * @param request - DescribeNetworkChannelRequest
     * @returns DescribeNetworkChannelResponse
     */
    describeNetworkChannel(request: $_model.DescribeNetworkChannelRequest): Promise<$_model.DescribeNetworkChannelResponse>;
    /**
     * Retrieves the details of a specified parameter template.
     *
     * @remarks
     * Parameter templates let you centrally manage parameters for multiple clusters. You can quickly apply a parameter template to PolarDB clusters. For more information, see [Use parameter templates](https://help.aliyun.com/document_detail/207009.html).
     * > This feature currently supports only PolarDB for MySQL clusters.
     *
     * @param request - DescribeParameterGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeParameterGroupResponse
     */
    describeParameterGroupWithOptions(request: $_model.DescribeParameterGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParameterGroupResponse>;
    /**
     * Retrieves the details of a specified parameter template.
     *
     * @remarks
     * Parameter templates let you centrally manage parameters for multiple clusters. You can quickly apply a parameter template to PolarDB clusters. For more information, see [Use parameter templates](https://help.aliyun.com/document_detail/207009.html).
     * > This feature currently supports only PolarDB for MySQL clusters.
     *
     * @param request - DescribeParameterGroupRequest
     * @returns DescribeParameterGroupResponse
     */
    describeParameterGroup(request: $_model.DescribeParameterGroupRequest): Promise<$_model.DescribeParameterGroupResponse>;
    /**
     * This operation queries the parameter templates in a specified region.
     *
     * @remarks
     * Parameter templates allow you to manage cluster parameters in batches and quickly apply them to PolarDB clusters. For more information, see [Use parameter templates](https://help.aliyun.com/document_detail/207009.html).
     * > This feature is available only for PolarDB for MySQL clusters.
     *
     * @param request - DescribeParameterGroupsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeParameterGroupsResponse
     */
    describeParameterGroupsWithOptions(request: $_model.DescribeParameterGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParameterGroupsResponse>;
    /**
     * This operation queries the parameter templates in a specified region.
     *
     * @remarks
     * Parameter templates allow you to manage cluster parameters in batches and quickly apply them to PolarDB clusters. For more information, see [Use parameter templates](https://help.aliyun.com/document_detail/207009.html).
     * > This feature is available only for PolarDB for MySQL clusters.
     *
     * @param request - DescribeParameterGroupsRequest
     * @returns DescribeParameterGroupsResponse
     */
    describeParameterGroups(request: $_model.DescribeParameterGroupsRequest): Promise<$_model.DescribeParameterGroupsResponse>;
    /**
     * Queries the default parameters of a database cluster.
     *
     * @param request - DescribeParameterTemplatesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeParameterTemplatesResponse
     */
    describeParameterTemplatesWithOptions(request: $_model.DescribeParameterTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParameterTemplatesResponse>;
    /**
     * Queries the default parameters of a database cluster.
     *
     * @param request - DescribeParameterTemplatesRequest
     * @returns DescribeParameterTemplatesResponse
     */
    describeParameterTemplates(request: $_model.DescribeParameterTemplatesRequest): Promise<$_model.DescribeParameterTemplatesResponse>;
    /**
     * Queries the information about a pending event.
     *
     * @param request - DescribePendingMaintenanceActionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePendingMaintenanceActionResponse
     */
    describePendingMaintenanceActionWithOptions(request: $_model.DescribePendingMaintenanceActionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePendingMaintenanceActionResponse>;
    /**
     * Queries the information about a pending event.
     *
     * @param request - DescribePendingMaintenanceActionRequest
     * @returns DescribePendingMaintenanceActionResponse
     */
    describePendingMaintenanceAction(request: $_model.DescribePendingMaintenanceActionRequest): Promise<$_model.DescribePendingMaintenanceActionResponse>;
    /**
     * Retrieves a count of pending events for various task types.
     *
     * @param request - DescribePendingMaintenanceActionsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePendingMaintenanceActionsResponse
     */
    describePendingMaintenanceActionsWithOptions(request: $_model.DescribePendingMaintenanceActionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePendingMaintenanceActionsResponse>;
    /**
     * Retrieves a count of pending events for various task types.
     *
     * @param request - DescribePendingMaintenanceActionsRequest
     * @returns DescribePendingMaintenanceActionsResponse
     */
    describePendingMaintenanceActions(request: $_model.DescribePendingMaintenanceActionsRequest): Promise<$_model.DescribePendingMaintenanceActionsResponse>;
    /**
     * Queries the details of a specified session.
     *
     * @remarks
     * Prerequisites: Use Signature Version 3.0 to call GetPolarAgent to initiate a conversation and obtain the SessionId from the returned stream. Then, call this operation to query the chat history of the session.
     *
     * @param request - DescribePolarAgentChatRecordsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePolarAgentChatRecordsResponse
     */
    describePolarAgentChatRecordsWithOptions(request: $_model.DescribePolarAgentChatRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolarAgentChatRecordsResponse>;
    /**
     * Queries the details of a specified session.
     *
     * @remarks
     * Prerequisites: Use Signature Version 3.0 to call GetPolarAgent to initiate a conversation and obtain the SessionId from the returned stream. Then, call this operation to query the chat history of the session.
     *
     * @param request - DescribePolarAgentChatRecordsRequest
     * @returns DescribePolarAgentChatRecordsResponse
     */
    describePolarAgentChatRecords(request: $_model.DescribePolarAgentChatRecordsRequest): Promise<$_model.DescribePolarAgentChatRecordsResponse>;
    /**
     * Queries the status of a session.
     *
     * @param request - DescribePolarAgentSessionStatusRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePolarAgentSessionStatusResponse
     */
    describePolarAgentSessionStatusWithOptions(request: $_model.DescribePolarAgentSessionStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolarAgentSessionStatusResponse>;
    /**
     * Queries the status of a session.
     *
     * @param request - DescribePolarAgentSessionStatusRequest
     * @returns DescribePolarAgentSessionStatusResponse
     */
    describePolarAgentSessionStatus(request: $_model.DescribePolarAgentSessionStatusRequest): Promise<$_model.DescribePolarAgentSessionStatusResponse>;
    /**
     * Queries historical session records.
     *
     * @param request - DescribePolarAgentUserSessionsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePolarAgentUserSessionsResponse
     */
    describePolarAgentUserSessionsWithOptions(request: $_model.DescribePolarAgentUserSessionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolarAgentUserSessionsResponse>;
    /**
     * Queries historical session records.
     *
     * @param request - DescribePolarAgentUserSessionsRequest
     * @returns DescribePolarAgentUserSessionsResponse
     */
    describePolarAgentUserSessions(request: $_model.DescribePolarAgentUserSessionsRequest): Promise<$_model.DescribePolarAgentUserSessionsResponse>;
    /**
     * Queries a PolarClaw Agent file.
     *
     * @param request - DescribePolarClawAgentFileRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePolarClawAgentFileResponse
     */
    describePolarClawAgentFileWithOptions(request: $_model.DescribePolarClawAgentFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolarClawAgentFileResponse>;
    /**
     * Queries a PolarClaw Agent file.
     *
     * @param request - DescribePolarClawAgentFileRequest
     * @returns DescribePolarClawAgentFileResponse
     */
    describePolarClawAgentFile(request: $_model.DescribePolarClawAgentFileRequest): Promise<$_model.DescribePolarClawAgentFileResponse>;
    /**
     * Queries the PolarClaw Agent tool catalog.
     *
     * @param request - DescribePolarClawAgentToolsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePolarClawAgentToolsResponse
     */
    describePolarClawAgentToolsWithOptions(request: $_model.DescribePolarClawAgentToolsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolarClawAgentToolsResponse>;
    /**
     * Queries the PolarClaw Agent tool catalog.
     *
     * @param request - DescribePolarClawAgentToolsRequest
     * @returns DescribePolarClawAgentToolsResponse
     */
    describePolarClawAgentTools(request: $_model.DescribePolarClawAgentToolsRequest): Promise<$_model.DescribePolarClawAgentToolsResponse>;
    /**
     * Queries all installed plug-ins and their status information under a specified application.
     *
     * @param tmpReq - DescribePolarClawAgentsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePolarClawAgentsResponse
     */
    describePolarClawAgentsWithOptions(tmpReq: $_model.DescribePolarClawAgentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolarClawAgentsResponse>;
    /**
     * Queries all installed plug-ins and their status information under a specified application.
     *
     * @param request - DescribePolarClawAgentsRequest
     * @returns DescribePolarClawAgentsResponse
     */
    describePolarClawAgents(request: $_model.DescribePolarClawAgentsRequest): Promise<$_model.DescribePolarClawAgentsResponse>;
    /**
     * Lists all installed PolarClaw channels and their status information.
     *
     * @param tmpReq - DescribePolarClawChannelsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePolarClawChannelsResponse
     */
    describePolarClawChannelsWithOptions(tmpReq: $_model.DescribePolarClawChannelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolarClawChannelsResponse>;
    /**
     * Lists all installed PolarClaw channels and their status information.
     *
     * @param request - DescribePolarClawChannelsRequest
     * @returns DescribePolarClawChannelsResponse
     */
    describePolarClawChannels(request: $_model.DescribePolarClawChannelsRequest): Promise<$_model.DescribePolarClawChannelsResponse>;
    /**
     * Queries all or specified scheduled jobs and their details in PolarClaw.
     *
     * @remarks
     * ## Request description
     * - You can use this API operation to retrieve all scheduled jobs in a PolarClaw application, or filter specific jobs by using the JobIdList parameter.
     * - If the JobIdList parameter is not provided, all scheduled jobs in the application are returned.
     * Before you begin: Call DescribeApplications to filter applications where ApplicationType is polardb_polarclaw, obtain the ApplicationId, and then call this operation to query scheduled jobs.
     *
     * @param tmpReq - DescribePolarClawCronJobsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePolarClawCronJobsResponse
     */
    describePolarClawCronJobsWithOptions(tmpReq: $_model.DescribePolarClawCronJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolarClawCronJobsResponse>;
    /**
     * Queries all or specified scheduled jobs and their details in PolarClaw.
     *
     * @remarks
     * ## Request description
     * - You can use this API operation to retrieve all scheduled jobs in a PolarClaw application, or filter specific jobs by using the JobIdList parameter.
     * - If the JobIdList parameter is not provided, all scheduled jobs in the application are returned.
     * Before you begin: Call DescribeApplications to filter applications where ApplicationType is polardb_polarclaw, obtain the ApplicationId, and then call this operation to query scheduled jobs.
     *
     * @param request - DescribePolarClawCronJobsRequest
     * @returns DescribePolarClawCronJobsResponse
     */
    describePolarClawCronJobs(request: $_model.DescribePolarClawCronJobsRequest): Promise<$_model.DescribePolarClawCronJobsResponse>;
    /**
     * Lists all installed PolarClaw MCP services and their configurations.
     *
     * @param request - DescribePolarClawMCPServersRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePolarClawMCPServersResponse
     */
    describePolarClawMCPServersWithOptions(request: $_model.DescribePolarClawMCPServersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolarClawMCPServersResponse>;
    /**
     * Lists all installed PolarClaw MCP services and their configurations.
     *
     * @param request - DescribePolarClawMCPServersRequest
     * @returns DescribePolarClawMCPServersResponse
     */
    describePolarClawMCPServers(request: $_model.DescribePolarClawMCPServersRequest): Promise<$_model.DescribePolarClawMCPServersResponse>;
    /**
     * Lists all installed PolarClaw plugins and their status information.
     *
     * @remarks
     * ## Request description
     * - Retrieves information about all plugins in a specified application, including built-in and user-installed plugins.
     * - You can use the PluginList parameter to request information about specific plugins. If this parameter is not provided, details of all plugins are returned.
     *
     * @param request - DescribePolarClawPluginsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePolarClawPluginsResponse
     */
    describePolarClawPluginsWithOptions(request: $_model.DescribePolarClawPluginsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolarClawPluginsResponse>;
    /**
     * Lists all installed PolarClaw plugins and their status information.
     *
     * @remarks
     * ## Request description
     * - Retrieves information about all plugins in a specified application, including built-in and user-installed plugins.
     * - You can use the PluginList parameter to request information about specific plugins. If this parameter is not provided, details of all plugins are returned.
     *
     * @param request - DescribePolarClawPluginsRequest
     * @returns DescribePolarClawPluginsResponse
     */
    describePolarClawPlugins(request: $_model.DescribePolarClawPluginsRequest): Promise<$_model.DescribePolarClawPluginsResponse>;
    /**
     * Retrieves the details of a PolarClaw skill security assessment.
     *
     * @param request - DescribePolarClawSkillAssessmentRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePolarClawSkillAssessmentResponse
     */
    describePolarClawSkillAssessmentWithOptions(request: $_model.DescribePolarClawSkillAssessmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolarClawSkillAssessmentResponse>;
    /**
     * Retrieves the details of a PolarClaw skill security assessment.
     *
     * @param request - DescribePolarClawSkillAssessmentRequest
     * @returns DescribePolarClawSkillAssessmentResponse
     */
    describePolarClawSkillAssessment(request: $_model.DescribePolarClawSkillAssessmentRequest): Promise<$_model.DescribePolarClawSkillAssessmentResponse>;
    /**
     * Queries the details of a PolarClaw Skill.
     *
     * @param request - DescribePolarClawSkillDetailRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePolarClawSkillDetailResponse
     */
    describePolarClawSkillDetailWithOptions(request: $_model.DescribePolarClawSkillDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolarClawSkillDetailResponse>;
    /**
     * Queries the details of a PolarClaw Skill.
     *
     * @param request - DescribePolarClawSkillDetailRequest
     * @returns DescribePolarClawSkillDetailResponse
     */
    describePolarClawSkillDetail(request: $_model.DescribePolarClawSkillDetailRequest): Promise<$_model.DescribePolarClawSkillDetailResponse>;
    /**
     * Queries the details of a PolarClaw skill template.
     *
     * @remarks
     * Queries the PolarClaw skill templates associated with a specified application. You must provide ApplicationId when calling this operation. If this parameter is not specified, InvalidApplicationId.Malformed is returned. The SkillTemplates field in the response is a list of templates, and Skills is a map of keys to strings. Each string can be parsed into an array of skill details, where each array element contains skillName and version.
     *
     * @param request - DescribePolarClawSkillTemplateRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePolarClawSkillTemplateResponse
     */
    describePolarClawSkillTemplateWithOptions(request: $_model.DescribePolarClawSkillTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolarClawSkillTemplateResponse>;
    /**
     * Queries the details of a PolarClaw skill template.
     *
     * @remarks
     * Queries the PolarClaw skill templates associated with a specified application. You must provide ApplicationId when calling this operation. If this parameter is not specified, InvalidApplicationId.Malformed is returned. The SkillTemplates field in the response is a list of templates, and Skills is a map of keys to strings. Each string can be parsed into an array of skill details, where each array element contains skillName and version.
     *
     * @param request - DescribePolarClawSkillTemplateRequest
     * @returns DescribePolarClawSkillTemplateResponse
     */
    describePolarClawSkillTemplate(request: $_model.DescribePolarClawSkillTemplateRequest): Promise<$_model.DescribePolarClawSkillTemplateResponse>;
    /**
     * Queries a list of PolarClaw skill templates. You can filter the results by template ID and time range, and the results are returned in pages.
     *
     * @param request - DescribePolarClawSkillTemplatesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePolarClawSkillTemplatesResponse
     */
    describePolarClawSkillTemplatesWithOptions(request: $_model.DescribePolarClawSkillTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolarClawSkillTemplatesResponse>;
    /**
     * Queries a list of PolarClaw skill templates. You can filter the results by template ID and time range, and the results are returned in pages.
     *
     * @param request - DescribePolarClawSkillTemplatesRequest
     * @returns DescribePolarClawSkillTemplatesResponse
     */
    describePolarClawSkillTemplates(request: $_model.DescribePolarClawSkillTemplatesRequest): Promise<$_model.DescribePolarClawSkillTemplatesResponse>;
    /**
     * Queries PolarClaw skills.
     *
     * @param request - DescribePolarClawSkillsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePolarClawSkillsResponse
     */
    describePolarClawSkillsWithOptions(request: $_model.DescribePolarClawSkillsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolarClawSkillsResponse>;
    /**
     * Queries PolarClaw skills.
     *
     * @param request - DescribePolarClawSkillsRequest
     * @returns DescribePolarClawSkillsResponse
     */
    describePolarClawSkills(request: $_model.DescribePolarClawSkillsRequest): Promise<$_model.DescribePolarClawSkillsResponse>;
    /**
     * Queries the PolarClaw skills marketplace.
     *
     * @param request - DescribePolarClawSkillsMarketRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePolarClawSkillsMarketResponse
     */
    describePolarClawSkillsMarketWithOptions(request: $_model.DescribePolarClawSkillsMarketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolarClawSkillsMarketResponse>;
    /**
     * Queries the PolarClaw skills marketplace.
     *
     * @param request - DescribePolarClawSkillsMarketRequest
     * @returns DescribePolarClawSkillsMarketResponse
     */
    describePolarClawSkillsMarket(request: $_model.DescribePolarClawSkillsMarketRequest): Promise<$_model.DescribePolarClawSkillsMarketResponse>;
    /**
     * Queries the status of a PolarClaw asynchronous task.
     *
     * @param request - DescribePolarClawTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePolarClawTaskResponse
     */
    describePolarClawTaskWithOptions(request: $_model.DescribePolarClawTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolarClawTaskResponse>;
    /**
     * Queries the status of a PolarClaw asynchronous task.
     *
     * @param request - DescribePolarClawTaskRequest
     * @returns DescribePolarClawTaskResponse
     */
    describePolarClawTask(request: $_model.DescribePolarClawTaskRequest): Promise<$_model.DescribePolarClawTaskResponse>;
    /**
     * Queries PolarFS information.
     *
     * @param request - DescribePolarFsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePolarFsResponse
     */
    describePolarFsWithOptions(request: $_model.DescribePolarFsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolarFsResponse>;
    /**
     * Queries PolarFS information.
     *
     * @param request - DescribePolarFsRequest
     * @returns DescribePolarFsResponse
     */
    describePolarFs(request: $_model.DescribePolarFsRequest): Promise<$_model.DescribePolarFsResponse>;
    /**
     * Retrieves the details of a Polarlakebase instance.
     *
     * @param request - DescribePolarFsAttributeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePolarFsAttributeResponse
     */
    describePolarFsAttributeWithOptions(request: $_model.DescribePolarFsAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolarFsAttributeResponse>;
    /**
     * Retrieves the details of a Polarlakebase instance.
     *
     * @param request - DescribePolarFsAttributeRequest
     * @returns DescribePolarFsAttributeResponse
     */
    describePolarFsAttribute(request: $_model.DescribePolarFsAttributeRequest): Promise<$_model.DescribePolarFsAttributeResponse>;
    /**
     * Queries the list of PolarFS path mappings.
     *
     * @param request - DescribePolarFsMappingRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePolarFsMappingResponse
     */
    describePolarFsMappingWithOptions(request: $_model.DescribePolarFsMappingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolarFsMappingResponse>;
    /**
     * Queries the list of PolarFS path mappings.
     *
     * @param request - DescribePolarFsMappingRequest
     * @returns DescribePolarFsMappingResponse
     */
    describePolarFsMapping(request: $_model.DescribePolarFsMappingRequest): Promise<$_model.DescribePolarFsMappingResponse>;
    /**
     * Lists the files and subdirectories in a specified path.
     *
     * @remarks
     * ## Request description
     * - The **Path** parameter must be an absolute path.
     * - The **Recursive** parameter defaults to `false`. If set to `true`, the contents of all subdirectories are listed recursively.
     * - The **Depth** parameter limits the recursion depth. Default value: `1`.
     * - The **Filter** parameter supports wildcards or regular expressions to filter results.
     *
     * @param request - DescribePolarFsObjectsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePolarFsObjectsResponse
     */
    describePolarFsObjectsWithOptions(request: $_model.DescribePolarFsObjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolarFsObjectsResponse>;
    /**
     * Lists the files and subdirectories in a specified path.
     *
     * @remarks
     * ## Request description
     * - The **Path** parameter must be an absolute path.
     * - The **Recursive** parameter defaults to `false`. If set to `true`, the contents of all subdirectories are listed recursively.
     * - The **Depth** parameter limits the recursion depth. Default value: `1`.
     * - The **Filter** parameter supports wildcards or regular expressions to filter results.
     *
     * @param request - DescribePolarFsObjectsRequest
     * @returns DescribePolarFsObjectsResponse
     */
    describePolarFsObjects(request: $_model.DescribePolarFsObjectsRequest): Promise<$_model.DescribePolarFsObjectsResponse>;
    /**
     * Queries the performance metrics and sampling data of a specified PolarFS instance within a specified time range.
     *
     * @remarks
     * Use Key to specify the metric group to query and Interval to specify the sampling granularity. The end time of the query must not be earlier than the start time, and the start time must not be later than the current time.
     *
     * @param request - DescribePolarFsPerformanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePolarFsPerformanceResponse
     */
    describePolarFsPerformanceWithOptions(request: $_model.DescribePolarFsPerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolarFsPerformanceResponse>;
    /**
     * Queries the performance metrics and sampling data of a specified PolarFS instance within a specified time range.
     *
     * @remarks
     * Use Key to specify the metric group to query and Interval to specify the sampling granularity. The end time of the query must not be earlier than the start time, and the start time must not be later than the current time.
     *
     * @param request - DescribePolarFsPerformanceRequest
     * @returns DescribePolarFsPerformanceResponse
     */
    describePolarFsPerformance(request: $_model.DescribePolarFsPerformanceRequest): Promise<$_model.DescribePolarFsPerformanceResponse>;
    /**
     * Retrieves all quota rule information for a specified Polarlakebase instance.
     *
     * @remarks
     * ## Request description
     * - This API operation queries all quota rules for a specific Polarlakebase instance. You can use the `QuotaNameMatch` and `PatternMatch` parameters for fuzzy matching.
     * - The pagination feature is not yet publicly available and will be released after the kernel is ready. Currently, results are returned without pagination limits.
     * - `PolarFsInstanceId` is required and specifies the Polarlakebase instance to query.
     * - Optional parameters such as `QuotaNameMatch` and `PatternMatch` can be used to further filter quota rules that meet the specified conditions.
     * - The returned data includes but is not limited to the total number of quota rules, the number of rules on the current page, and specific rule details such as rule ID, name, description, and capacity limits.
     *
     * @param request - DescribePolarFsQuotaRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePolarFsQuotaResponse
     */
    describePolarFsQuotaWithOptions(request: $_model.DescribePolarFsQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolarFsQuotaResponse>;
    /**
     * Retrieves all quota rule information for a specified Polarlakebase instance.
     *
     * @remarks
     * ## Request description
     * - This API operation queries all quota rules for a specific Polarlakebase instance. You can use the `QuotaNameMatch` and `PatternMatch` parameters for fuzzy matching.
     * - The pagination feature is not yet publicly available and will be released after the kernel is ready. Currently, results are returned without pagination limits.
     * - `PolarFsInstanceId` is required and specifies the Polarlakebase instance to query.
     * - Optional parameters such as `QuotaNameMatch` and `PatternMatch` can be used to further filter quota rules that meet the specified conditions.
     * - The returned data includes but is not limited to the total number of quota rules, the number of rules on the current page, and specific rule details such as rule ID, name, description, and capacity limits.
     *
     * @param request - DescribePolarFsQuotaRequest
     * @returns DescribePolarFsQuotaResponse
     */
    describePolarFsQuota(request: $_model.DescribePolarFsQuotaRequest): Promise<$_model.DescribePolarFsQuotaResponse>;
    /**
     * Queries the list of quotas.
     *
     * @param request - DescribePolarFsQuotaListRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePolarFsQuotaListResponse
     */
    describePolarFsQuotaListWithOptions(request: $_model.DescribePolarFsQuotaListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolarFsQuotaListResponse>;
    /**
     * Queries the list of quotas.
     *
     * @param request - DescribePolarFsQuotaListRequest
     * @returns DescribePolarFsQuotaListResponse
     */
    describePolarFsQuotaList(request: $_model.DescribePolarFsQuotaListRequest): Promise<$_model.DescribePolarFsQuotaListResponse>;
    /**
     * Checks whether the SQL Explorer feature is enabled for a target cluster.
     *
     * @remarks
     * *Note:**
     * This API operation is deprecated. Use [Query the configurations of DAS Enterprise Edition](https://help.aliyun.com/document_detail/2778837.html) instead.
     *
     * @param request - DescribePolarSQLCollectorPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePolarSQLCollectorPolicyResponse
     */
    describePolarSQLCollectorPolicyWithOptions(request: $_model.DescribePolarSQLCollectorPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolarSQLCollectorPolicyResponse>;
    /**
     * Checks whether the SQL Explorer feature is enabled for a target cluster.
     *
     * @remarks
     * *Note:**
     * This API operation is deprecated. Use [Query the configurations of DAS Enterprise Edition](https://help.aliyun.com/document_detail/2778837.html) instead.
     *
     * @param request - DescribePolarSQLCollectorPolicyRequest
     * @returns DescribePolarSQLCollectorPolicyResponse
     */
    describePolarSQLCollectorPolicy(request: $_model.DescribePolarSQLCollectorPolicyRequest): Promise<$_model.DescribePolarSQLCollectorPolicyResponse>;
    /**
     * Queries rate limit policies.
     *
     * @param request - DescribeRateLimitPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRateLimitPolicyResponse
     */
    describeRateLimitPolicyWithOptions(request: $_model.DescribeRateLimitPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRateLimitPolicyResponse>;
    /**
     * Queries rate limit policies.
     *
     * @param request - DescribeRateLimitPolicyRequest
     * @returns DescribeRateLimitPolicyResponse
     */
    describeRateLimitPolicy(request: $_model.DescribeRateLimitPolicyRequest): Promise<$_model.DescribeRateLimitPolicyResponse>;
    /**
     * Queries a list of vSwitches.
     *
     * @param request - DescribeRdsVSwitchsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRdsVSwitchsResponse
     */
    describeRdsVSwitchsWithOptions(request: $_model.DescribeRdsVSwitchsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRdsVSwitchsResponse>;
    /**
     * Queries a list of vSwitches.
     *
     * @param request - DescribeRdsVSwitchsRequest
     * @returns DescribeRdsVSwitchsResponse
     */
    describeRdsVSwitchs(request: $_model.DescribeRdsVSwitchsRequest): Promise<$_model.DescribeRdsVSwitchsResponse>;
    /**
     * Describes a list of VPCs.
     *
     * @param request - DescribeRdsVpcsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRdsVpcsResponse
     */
    describeRdsVpcsWithOptions(request: $_model.DescribeRdsVpcsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRdsVpcsResponse>;
    /**
     * Describes a list of VPCs.
     *
     * @param request - DescribeRdsVpcsRequest
     * @returns DescribeRdsVpcsResponse
     */
    describeRdsVpcs(request: $_model.DescribeRdsVpcsRequest): Promise<$_model.DescribeRdsVpcsResponse>;
    /**
     * Queries the regions and zones that are supported by PolarDB.
     *
     * @param request - DescribeRegionsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeRegionsResponse
     */
    describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse>;
    /**
     * Queries the regions and zones that are supported by PolarDB.
     *
     * @param request - DescribeRegionsRequest
     * @returns DescribeRegionsResponse
     */
    describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse>;
    /**
     * Queries the replication slots of a specified PolarDB cluster. You can filter the results by the child node name of a distributed instance.
     *
     * @param request - DescribeReplicationSlotsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeReplicationSlotsResponse
     */
    describeReplicationSlotsWithOptions(request: $_model.DescribeReplicationSlotsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeReplicationSlotsResponse>;
    /**
     * Queries the replication slots of a specified PolarDB cluster. You can filter the results by the child node name of a distributed instance.
     *
     * @param request - DescribeReplicationSlotsRequest
     * @returns DescribeReplicationSlotsResponse
     */
    describeReplicationSlots(request: $_model.DescribeReplicationSlotsRequest): Promise<$_model.DescribeReplicationSlotsResponse>;
    /**
     * Describes cross-cloud resource plans.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeResourcePackagesResponse
     */
    describeResourcePackagesWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResourcePackagesResponse>;
    /**
     * Describes cross-cloud resource plans.
     * @returns DescribeResourcePackagesResponse
     */
    describeResourcePackages(): Promise<$_model.DescribeResourcePackagesResponse>;
    /**
     * Checks whether the SQL Explorer feature is enabled for the specified cluster.
     *
     * @param request - DescribeSQLExplorerPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeSQLExplorerPolicyResponse
     */
    describeSQLExplorerPolicyWithOptions(request: $_model.DescribeSQLExplorerPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSQLExplorerPolicyResponse>;
    /**
     * Checks whether the SQL Explorer feature is enabled for the specified cluster.
     *
     * @param request - DescribeSQLExplorerPolicyRequest
     * @returns DescribeSQLExplorerPolicyResponse
     */
    describeSQLExplorerPolicy(request: $_model.DescribeSQLExplorerPolicyRequest): Promise<$_model.DescribeSQLExplorerPolicyResponse>;
    /**
     * Queries the SQL Explorer log retention period for a PolarDB cluster.
     *
     * @param request - DescribeSQLExplorerRetentionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeSQLExplorerRetentionResponse
     */
    describeSQLExplorerRetentionWithOptions(request: $_model.DescribeSQLExplorerRetentionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSQLExplorerRetentionResponse>;
    /**
     * Queries the SQL Explorer log retention period for a PolarDB cluster.
     *
     * @param request - DescribeSQLExplorerRetentionRequest
     * @returns DescribeSQLExplorerRetentionResponse
     */
    describeSQLExplorerRetention(request: $_model.DescribeSQLExplorerRetentionRequest): Promise<$_model.DescribeSQLExplorerRetentionResponse>;
    /**
     * Returns the details of SQL throttling rules.
     *
     * @param request - DescribeSQLRateLimitingRulesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeSQLRateLimitingRulesResponse
     */
    describeSQLRateLimitingRulesWithOptions(request: $_model.DescribeSQLRateLimitingRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSQLRateLimitingRulesResponse>;
    /**
     * Returns the details of SQL throttling rules.
     *
     * @param request - DescribeSQLRateLimitingRulesRequest
     * @returns DescribeSQLRateLimitingRulesResponse
     */
    describeSQLRateLimitingRules(request: $_model.DescribeSQLRateLimitingRulesRequest): Promise<$_model.DescribeSQLRateLimitingRulesResponse>;
    /**
     * Retrieves the details of all scheduled tasks.
     *
     * @param request - DescribeScheduleTasksRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeScheduleTasksResponse
     */
    describeScheduleTasksWithOptions(request: $_model.DescribeScheduleTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeScheduleTasksResponse>;
    /**
     * Retrieves the details of all scheduled tasks.
     *
     * @param request - DescribeScheduleTasksRequest
     * @returns DescribeScheduleTasksResponse
     */
    describeScheduleTasks(request: $_model.DescribeScheduleTasksRequest): Promise<$_model.DescribeScheduleTasksResponse>;
    /**
     * Queries the parameter modification history of PolarDB Search.
     *
     * @param request - DescribeSearchModifyParameterLogRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeSearchModifyParameterLogResponse
     */
    describeSearchModifyParameterLogWithOptions(request: $_model.DescribeSearchModifyParameterLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSearchModifyParameterLogResponse>;
    /**
     * Queries the parameter modification history of PolarDB Search.
     *
     * @param request - DescribeSearchModifyParameterLogRequest
     * @returns DescribeSearchModifyParameterLogResponse
     */
    describeSearchModifyParameterLog(request: $_model.DescribeSearchModifyParameterLogRequest): Promise<$_model.DescribeSearchModifyParameterLogResponse>;
    /**
     * Queries the parameters of a PolarDB Search cluster.
     *
     * @param request - DescribeSearchParametersRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeSearchParametersResponse
     */
    describeSearchParametersWithOptions(request: $_model.DescribeSearchParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSearchParametersResponse>;
    /**
     * Queries the parameters of a PolarDB Search cluster.
     *
     * @param request - DescribeSearchParametersRequest
     * @returns DescribeSearchParametersResponse
     */
    describeSearchParameters(request: $_model.DescribeSearchParametersRequest): Promise<$_model.DescribeSearchParametersResponse>;
    /**
     * Queries shared backup sets.
     *
     * @param request - DescribeSharedBackupsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeSharedBackupsResponse
     */
    describeSharedBackupsWithOptions(request: $_model.DescribeSharedBackupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSharedBackupsResponse>;
    /**
     * Queries shared backup sets.
     *
     * @param request - DescribeSharedBackupsRequest
     * @returns DescribeSharedBackupsResponse
     */
    describeSharedBackups(request: $_model.DescribeSharedBackupsRequest): Promise<$_model.DescribeSharedBackupsResponse>;
    /**
     * Queries the details of slow query logs for a PolarDB cluster.
     *
     * @remarks
     * > - This operation is supported only for PolarDB for MySQL clusters.
     * >
     * > - For PolarDB for PostgreSQL and PolarDB for PostgreSQL (Oracle Compatible) clusters, use the [DAS API to query slow log records](https://help.aliyun.com/document_detail/2922426.html).
     * >
     * > - Starting September 1, 2024, the value of the `SQLHash` field will change due to an optimization of the SQL templating algorithm. For more information, see [[Notice\\] Optimization of the templating algorithm for slow SQL queries](~~2845725~~).
     *
     * @param request - DescribeSlowLogRecordsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeSlowLogRecordsResponse
     */
    describeSlowLogRecordsWithOptions(request: $_model.DescribeSlowLogRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlowLogRecordsResponse>;
    /**
     * Queries the details of slow query logs for a PolarDB cluster.
     *
     * @remarks
     * > - This operation is supported only for PolarDB for MySQL clusters.
     * >
     * > - For PolarDB for PostgreSQL and PolarDB for PostgreSQL (Oracle Compatible) clusters, use the [DAS API to query slow log records](https://help.aliyun.com/document_detail/2922426.html).
     * >
     * > - Starting September 1, 2024, the value of the `SQLHash` field will change due to an optimization of the SQL templating algorithm. For more information, see [[Notice\\] Optimization of the templating algorithm for slow SQL queries](~~2845725~~).
     *
     * @param request - DescribeSlowLogRecordsRequest
     * @returns DescribeSlowLogRecordsResponse
     */
    describeSlowLogRecords(request: $_model.DescribeSlowLogRecordsRequest): Promise<$_model.DescribeSlowLogRecordsResponse>;
    /**
     * Queries the slow query log statistics information of a PolarDB cluster.
     *
     * @remarks
     * >- Only PolarDB for MySQL supports this operation.
     * >- Starting from September 1, 2024, due to the optimization of the SQL template algorithm, the value of the SQLHash field will change when you call this operation. For more information, see [Notice: Optimization of the slow SQL template algorithm](https://help.aliyun.com/document_detail/2845725.html).
     *
     * @param request - DescribeSlowLogsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeSlowLogsResponse
     */
    describeSlowLogsWithOptions(request: $_model.DescribeSlowLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlowLogsResponse>;
    /**
     * Queries the slow query log statistics information of a PolarDB cluster.
     *
     * @remarks
     * >- Only PolarDB for MySQL supports this operation.
     * >- Starting from September 1, 2024, due to the optimization of the SQL template algorithm, the value of the SQLHash field will change when you call this operation. For more information, see [Notice: Optimization of the slow SQL template algorithm](https://help.aliyun.com/document_detail/2845725.html).
     *
     * @param request - DescribeSlowLogsRequest
     * @returns DescribeSlowLogsResponse
     */
    describeSlowLogs(request: $_model.DescribeSlowLogsRequest): Promise<$_model.DescribeSlowLogsResponse>;
    /**
     * Queries the list of storage plans.
     *
     * @remarks
     * > This operation is supported only in regions where the endpoint is polardb.aliyuncs.com.
     *
     * @param request - DescribeStoragePlanRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeStoragePlanResponse
     */
    describeStoragePlanWithOptions(request: $_model.DescribeStoragePlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeStoragePlanResponse>;
    /**
     * Queries the list of storage plans.
     *
     * @remarks
     * > This operation is supported only in regions where the endpoint is polardb.aliyuncs.com.
     *
     * @param request - DescribeStoragePlanRequest
     * @returns DescribeStoragePlanResponse
     */
    describeStoragePlan(request: $_model.DescribeStoragePlanRequest): Promise<$_model.DescribeStoragePlanResponse>;
    /**
     * Queries the progress details of tasks generated through API operations, such as creating a cluster.
     *
     * @remarks
     * You can view tasks generated by directly calling an API operation such as [CreateDBCluster](https://help.aliyun.com/document_detail/98169.html), or tasks generated when the system calls the corresponding API operation while you use a feature in the PolarDB console, such as [creating a cluster](https://help.aliyun.com/document_detail/58769.html).
     * * Currently, you can view only the progress details of tasks generated when creating a cluster, that is, when the [CreateDBCluster](https://help.aliyun.com/document_detail/98169.html) operation is called and the `CreationOption` parameter is not set to `CreateGdnStandby`.
     *
     * @param request - DescribeTasksRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeTasksResponse
     */
    describeTasksWithOptions(request: $_model.DescribeTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTasksResponse>;
    /**
     * Queries the progress details of tasks generated through API operations, such as creating a cluster.
     *
     * @remarks
     * You can view tasks generated by directly calling an API operation such as [CreateDBCluster](https://help.aliyun.com/document_detail/98169.html), or tasks generated when the system calls the corresponding API operation while you use a feature in the PolarDB console, such as [creating a cluster](https://help.aliyun.com/document_detail/58769.html).
     * * Currently, you can view only the progress details of tasks generated when creating a cluster, that is, when the [CreateDBCluster](https://help.aliyun.com/document_detail/98169.html) operation is called and the `CreationOption` parameter is not set to `CreateGdnStandby`.
     *
     * @param request - DescribeTasksRequest
     * @returns DescribeTasksResponse
     */
    describeTasks(request: $_model.DescribeTasksRequest): Promise<$_model.DescribeTasksResponse>;
    /**
     * Queries an upgrade or migration verification report.
     *
     * @param request - DescribeUpgradeReportRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeUpgradeReportResponse
     */
    describeUpgradeReportWithOptions(request: $_model.DescribeUpgradeReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUpgradeReportResponse>;
    /**
     * Queries an upgrade or migration verification report.
     *
     * @param request - DescribeUpgradeReportRequest
     * @returns DescribeUpgradeReportResponse
     */
    describeUpgradeReport(request: $_model.DescribeUpgradeReportRequest): Promise<$_model.DescribeUpgradeReportResponse>;
    /**
     * Queries the list of KMS keys.
     *
     * @param request - DescribeUserEncryptionKeyListRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeUserEncryptionKeyListResponse
     */
    describeUserEncryptionKeyListWithOptions(request: $_model.DescribeUserEncryptionKeyListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserEncryptionKeyListResponse>;
    /**
     * Queries the list of KMS keys.
     *
     * @param request - DescribeUserEncryptionKeyListRequest
     * @returns DescribeUserEncryptionKeyListResponse
     */
    describeUserEncryptionKeyList(request: $_model.DescribeUserEncryptionKeyListRequest): Promise<$_model.DescribeUserEncryptionKeyListResponse>;
    /**
     * Queries vSwitch information.
     *
     * @param request - DescribeVSwitchListRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeVSwitchListResponse
     */
    describeVSwitchListWithOptions(request: $_model.DescribeVSwitchListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVSwitchListResponse>;
    /**
     * Queries vSwitch information.
     *
     * @param request - DescribeVSwitchListRequest
     * @returns DescribeVSwitchListResponse
     */
    describeVSwitchList(request: $_model.DescribeVSwitchListRequest): Promise<$_model.DescribeVSwitchListResponse>;
    /**
     * 查询交换机
     *
     * @param request - DescribeVSwitchesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeVSwitchesResponse
     */
    describeVSwitchesWithOptions(request: $_model.DescribeVSwitchesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVSwitchesResponse>;
    /**
     * 查询交换机
     *
     * @param request - DescribeVSwitchesRequest
     * @returns DescribeVSwitchesResponse
     */
    describeVSwitches(request: $_model.DescribeVSwitchesRequest): Promise<$_model.DescribeVSwitchesResponse>;
    /**
     * Queries one or more VPCs.
     *
     * @param request - DescribeVpcsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeVpcsResponse
     */
    describeVpcsWithOptions(request: $_model.DescribeVpcsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVpcsResponse>;
    /**
     * Queries one or more VPCs.
     *
     * @param request - DescribeVpcsRequest
     * @returns DescribeVpcsResponse
     */
    describeVpcs(request: $_model.DescribeVpcsRequest): Promise<$_model.DescribeVpcsResponse>;
    /**
     * Queries zones.
     *
     * @param request - DescribeZonesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeZonesResponse
     */
    describeZonesWithOptions(request: $_model.DescribeZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeZonesResponse>;
    /**
     * Queries zones.
     *
     * @param request - DescribeZonesRequest
     * @returns DescribeZonesResponse
     */
    describeZones(request: $_model.DescribeZonesRequest): Promise<$_model.DescribeZonesResponse>;
    /**
     * Disables the column store table feature for a specified PolarDB cluster.
     *
     * @param request - DisableDBClusterCTableRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DisableDBClusterCTableResponse
     */
    disableDBClusterCTableWithOptions(request: $_model.DisableDBClusterCTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableDBClusterCTableResponse>;
    /**
     * Disables the column store table feature for a specified PolarDB cluster.
     *
     * @param request - DisableDBClusterCTableRequest
     * @returns DisableDBClusterCTableResponse
     */
    disableDBClusterCTable(request: $_model.DisableDBClusterCTableRequest): Promise<$_model.DisableDBClusterCTableResponse>;
    /**
     * Disables document database support for a specified PolarDB cluster.
     *
     * @param request - DisableDBClusterDocumentDBRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DisableDBClusterDocumentDBResponse
     */
    disableDBClusterDocumentDBWithOptions(request: $_model.DisableDBClusterDocumentDBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableDBClusterDocumentDBResponse>;
    /**
     * Disables document database support for a specified PolarDB cluster.
     *
     * @param request - DisableDBClusterDocumentDBRequest
     * @returns DisableDBClusterDocumentDBResponse
     */
    disableDBClusterDocumentDB(request: $_model.DisableDBClusterDocumentDBRequest): Promise<$_model.DisableDBClusterDocumentDBResponse>;
    /**
     * Disables DynamoDB compatibility.
     *
     * @param request - DisableDBClusterDynamoDBRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DisableDBClusterDynamoDBResponse
     */
    disableDBClusterDynamoDBWithOptions(request: $_model.DisableDBClusterDynamoDBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableDBClusterDynamoDBResponse>;
    /**
     * Disables DynamoDB compatibility.
     *
     * @param request - DisableDBClusterDynamoDBRequest
     * @returns DisableDBClusterDynamoDBResponse
     */
    disableDBClusterDynamoDB(request: $_model.DisableDBClusterDynamoDBRequest): Promise<$_model.DisableDBClusterDynamoDBResponse>;
    /**
     * Closes the cluster relationship.
     *
     * @param request - DisableDBClusterOrcaRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DisableDBClusterOrcaResponse
     */
    disableDBClusterOrcaWithOptions(request: $_model.DisableDBClusterOrcaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableDBClusterOrcaResponse>;
    /**
     * Closes the cluster relationship.
     *
     * @param request - DisableDBClusterOrcaRequest
     * @returns DisableDBClusterOrcaResponse
     */
    disableDBClusterOrca(request: $_model.DisableDBClusterOrcaRequest): Promise<$_model.DisableDBClusterOrcaResponse>;
    /**
     * Disables steady-state Serverless.
     *
     * @param request - DisableDBClusterServerlessRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DisableDBClusterServerlessResponse
     */
    disableDBClusterServerlessWithOptions(request: $_model.DisableDBClusterServerlessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableDBClusterServerlessResponse>;
    /**
     * Disables steady-state Serverless.
     *
     * @param request - DisableDBClusterServerlessRequest
     * @returns DisableDBClusterServerlessResponse
     */
    disableDBClusterServerless(request: $_model.DisableDBClusterServerlessRequest): Promise<$_model.DisableDBClusterServerlessResponse>;
    /**
     * This API disables a specified PolarClaw channel.
     *
     * @remarks
     * ## Description
     * Call the`DisablePolarClawChannel` API to disable a PolarClaw channel for a specific application. Before you perform this operation, make sure you have the target channel ID and the application ID.
     *
     * @param request - DisablePolarClawChannelRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DisablePolarClawChannelResponse
     */
    disablePolarClawChannelWithOptions(request: $_model.DisablePolarClawChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisablePolarClawChannelResponse>;
    /**
     * This API disables a specified PolarClaw channel.
     *
     * @remarks
     * ## Description
     * Call the`DisablePolarClawChannel` API to disable a PolarClaw channel for a specific application. Before you perform this operation, make sure you have the target channel ID and the application ID.
     *
     * @param request - DisablePolarClawChannelRequest
     * @returns DisablePolarClawChannelResponse
     */
    disablePolarClawChannel(request: $_model.DisablePolarClawChannelRequest): Promise<$_model.DisablePolarClawChannelResponse>;
    /**
     * Disables a PolarClaw cron job.
     *
     * @param request - DisablePolarClawCronJobRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DisablePolarClawCronJobResponse
     */
    disablePolarClawCronJobWithOptions(request: $_model.DisablePolarClawCronJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisablePolarClawCronJobResponse>;
    /**
     * Disables a PolarClaw cron job.
     *
     * @param request - DisablePolarClawCronJobRequest
     * @returns DisablePolarClawCronJobResponse
     */
    disablePolarClawCronJob(request: $_model.DisablePolarClawCronJobRequest): Promise<$_model.DisablePolarClawCronJobResponse>;
    /**
     * Disables the PolarClaw plugin.
     *
     * @param request - DisablePolarClawPluginRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DisablePolarClawPluginResponse
     */
    disablePolarClawPluginWithOptions(request: $_model.DisablePolarClawPluginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisablePolarClawPluginResponse>;
    /**
     * Disables the PolarClaw plugin.
     *
     * @param request - DisablePolarClawPluginRequest
     * @returns DisablePolarClawPluginResponse
     */
    disablePolarClawPlugin(request: $_model.DisablePolarClawPluginRequest): Promise<$_model.DisablePolarClawPluginResponse>;
    /**
     * Enables the dataset service for a cold storage instance.
     *
     * @param request - EnableAIDBClusterDatasetServiceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns EnableAIDBClusterDatasetServiceResponse
     */
    enableAIDBClusterDatasetServiceWithOptions(request: $_model.EnableAIDBClusterDatasetServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableAIDBClusterDatasetServiceResponse>;
    /**
     * Enables the dataset service for a cold storage instance.
     *
     * @param request - EnableAIDBClusterDatasetServiceRequest
     * @returns EnableAIDBClusterDatasetServiceResponse
     */
    enableAIDBClusterDatasetService(request: $_model.EnableAIDBClusterDatasetServiceRequest): Promise<$_model.EnableAIDBClusterDatasetServiceResponse>;
    /**
     * Enables the column store table feature for the specified PolarDB cluster.
     *
     * @param request - EnableDBClusterCTableRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns EnableDBClusterCTableResponse
     */
    enableDBClusterCTableWithOptions(request: $_model.EnableDBClusterCTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableDBClusterCTableResponse>;
    /**
     * Enables the column store table feature for the specified PolarDB cluster.
     *
     * @param request - EnableDBClusterCTableRequest
     * @returns EnableDBClusterCTableResponse
     */
    enableDBClusterCTable(request: $_model.EnableDBClusterCTableRequest): Promise<$_model.EnableDBClusterCTableResponse>;
    /**
     * Enables document database support for an instance.
     *
     * @param request - EnableDBClusterDocumentDBRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns EnableDBClusterDocumentDBResponse
     */
    enableDBClusterDocumentDBWithOptions(request: $_model.EnableDBClusterDocumentDBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableDBClusterDocumentDBResponse>;
    /**
     * Enables document database support for an instance.
     *
     * @param request - EnableDBClusterDocumentDBRequest
     * @returns EnableDBClusterDocumentDBResponse
     */
    enableDBClusterDocumentDB(request: $_model.EnableDBClusterDocumentDBRequest): Promise<$_model.EnableDBClusterDocumentDBResponse>;
    /**
     * Enables DynamoDB compatibility.
     *
     * @param request - EnableDBClusterDynamoDBRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns EnableDBClusterDynamoDBResponse
     */
    enableDBClusterDynamoDBWithOptions(request: $_model.EnableDBClusterDynamoDBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableDBClusterDynamoDBResponse>;
    /**
     * Enables DynamoDB compatibility.
     *
     * @param request - EnableDBClusterDynamoDBRequest
     * @returns EnableDBClusterDynamoDBResponse
     */
    enableDBClusterDynamoDB(request: $_model.EnableDBClusterDynamoDBRequest): Promise<$_model.EnableDBClusterDynamoDBResponse>;
    /**
     * Enables the relational feature for a cluster.
     *
     * @param request - EnableDBClusterOrcaRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns EnableDBClusterOrcaResponse
     */
    enableDBClusterOrcaWithOptions(request: $_model.EnableDBClusterOrcaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableDBClusterOrcaResponse>;
    /**
     * Enables the relational feature for a cluster.
     *
     * @param request - EnableDBClusterOrcaRequest
     * @returns EnableDBClusterOrcaResponse
     */
    enableDBClusterOrca(request: $_model.EnableDBClusterOrcaRequest): Promise<$_model.EnableDBClusterOrcaResponse>;
    /**
     * Enables steady-state serverless.
     *
     * @param request - EnableDBClusterServerlessRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns EnableDBClusterServerlessResponse
     */
    enableDBClusterServerlessWithOptions(request: $_model.EnableDBClusterServerlessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableDBClusterServerlessResponse>;
    /**
     * Enables steady-state serverless.
     *
     * @param request - EnableDBClusterServerlessRequest
     * @returns EnableDBClusterServerlessResponse
     */
    enableDBClusterServerless(request: $_model.EnableDBClusterServerlessRequest): Promise<$_model.EnableDBClusterServerlessResponse>;
    /**
     * Modifies the status of SQL firewall rules for a cluster.
     *
     * @param request - EnableFirewallRulesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns EnableFirewallRulesResponse
     */
    enableFirewallRulesWithOptions(request: $_model.EnableFirewallRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableFirewallRulesResponse>;
    /**
     * Modifies the status of SQL firewall rules for a cluster.
     *
     * @param request - EnableFirewallRulesRequest
     * @returns EnableFirewallRulesResponse
     */
    enableFirewallRules(request: $_model.EnableFirewallRulesRequest): Promise<$_model.EnableFirewallRulesResponse>;
    /**
     * Enables a PolarClaw channel.
     *
     * @param request - EnablePolarClawChannelRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns EnablePolarClawChannelResponse
     */
    enablePolarClawChannelWithOptions(request: $_model.EnablePolarClawChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnablePolarClawChannelResponse>;
    /**
     * Enables a PolarClaw channel.
     *
     * @param request - EnablePolarClawChannelRequest
     * @returns EnablePolarClawChannelResponse
     */
    enablePolarClawChannel(request: $_model.EnablePolarClawChannelRequest): Promise<$_model.EnablePolarClawChannelResponse>;
    /**
     * Enables a cron job in PolarClaw.
     *
     * @remarks
     * ## Request
     * This operation enables a cron job in a PolarClaw application to run tasks on a schedule. Specify the correct `ApplicationId` to associate the job with the target application.
     *
     * @param request - EnablePolarClawCronJobRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns EnablePolarClawCronJobResponse
     */
    enablePolarClawCronJobWithOptions(request: $_model.EnablePolarClawCronJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnablePolarClawCronJobResponse>;
    /**
     * Enables a cron job in PolarClaw.
     *
     * @remarks
     * ## Request
     * This operation enables a cron job in a PolarClaw application to run tasks on a schedule. Specify the correct `ApplicationId` to associate the job with the target application.
     *
     * @param request - EnablePolarClawCronJobRequest
     * @returns EnablePolarClawCronJobResponse
     */
    enablePolarClawCronJob(request: $_model.EnablePolarClawCronJobRequest): Promise<$_model.EnablePolarClawCronJobResponse>;
    /**
     * Enables a PolarClaw plugin.
     *
     * @param request - EnablePolarClawPluginRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns EnablePolarClawPluginResponse
     */
    enablePolarClawPluginWithOptions(request: $_model.EnablePolarClawPluginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnablePolarClawPluginResponse>;
    /**
     * Enables a PolarClaw plugin.
     *
     * @param request - EnablePolarClawPluginRequest
     * @returns EnablePolarClawPluginResponse
     */
    enablePolarClawPlugin(request: $_model.EnablePolarClawPluginRequest): Promise<$_model.EnablePolarClawPluginResponse>;
    /**
     * Enables or disables SQL throttling rules.
     *
     * @param request - EnableSQLRateLimitingRulesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns EnableSQLRateLimitingRulesResponse
     */
    enableSQLRateLimitingRulesWithOptions(request: $_model.EnableSQLRateLimitingRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableSQLRateLimitingRulesResponse>;
    /**
     * Enables or disables SQL throttling rules.
     *
     * @param request - EnableSQLRateLimitingRulesRequest
     * @returns EnableSQLRateLimitingRulesResponse
     */
    enableSQLRateLimitingRules(request: $_model.EnableSQLRateLimitingRulesRequest): Promise<$_model.EnableSQLRateLimitingRulesResponse>;
    /**
     * Evaluates resource availability.
     *
     * @param request - EvaluateRegionResourceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns EvaluateRegionResourceResponse
     */
    evaluateRegionResourceWithOptions(request: $_model.EvaluateRegionResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EvaluateRegionResourceResponse>;
    /**
     * Evaluates resource availability.
     *
     * @param request - EvaluateRegionResourceRequest
     * @returns EvaluateRegionResourceResponse
     */
    evaluateRegionResource(request: $_model.EvaluateRegionResourceRequest): Promise<$_model.EvaluateRegionResourceResponse>;
    /**
     * Calls a cross-cloud OpenAPI.
     *
     * @param request - ExecuteCrossCloudOpenAPIRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ExecuteCrossCloudOpenAPIResponse
     */
    executeCrossCloudOpenAPIWithOptions(request: $_model.ExecuteCrossCloudOpenAPIRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteCrossCloudOpenAPIResponse>;
    /**
     * Calls a cross-cloud OpenAPI.
     *
     * @param request - ExecuteCrossCloudOpenAPIRequest
     * @returns ExecuteCrossCloudOpenAPIResponse
     */
    executeCrossCloudOpenAPI(request: $_model.ExecuteCrossCloudOpenAPIRequest): Promise<$_model.ExecuteCrossCloudOpenAPIResponse>;
    /**
     * Performs a manual primary/secondary switchover for a PolarDB cluster. You can specify a read-only node as the new primary node.
     *
     * @param request - FailoverDBClusterRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns FailoverDBClusterResponse
     */
    failoverDBClusterWithOptions(request: $_model.FailoverDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FailoverDBClusterResponse>;
    /**
     * Performs a manual primary/secondary switchover for a PolarDB cluster. You can specify a read-only node as the new primary node.
     *
     * @param request - FailoverDBClusterRequest
     * @returns FailoverDBClusterResponse
     */
    failoverDBCluster(request: $_model.FailoverDBClusterRequest): Promise<$_model.FailoverDBClusterResponse>;
    /**
     * Performs a manual primary/secondary switchover for an edge cluster.
     *
     * @param request - FailoverDBClusterZonalRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns FailoverDBClusterZonalResponse
     */
    failoverDBClusterZonalWithOptions(request: $_model.FailoverDBClusterZonalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FailoverDBClusterZonalResponse>;
    /**
     * Performs a manual primary/secondary switchover for an edge cluster.
     *
     * @param request - FailoverDBClusterZonalRequest
     * @returns FailoverDBClusterZonalResponse
     */
    failoverDBClusterZonal(request: $_model.FailoverDBClusterZonalRequest): Promise<$_model.FailoverDBClusterZonalResponse>;
    /**
     * Generates a check report.
     *
     * @param request - GenerateUpgradeReportForSyncCloneRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GenerateUpgradeReportForSyncCloneResponse
     */
    generateUpgradeReportForSyncCloneWithOptions(request: $_model.GenerateUpgradeReportForSyncCloneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateUpgradeReportForSyncCloneResponse>;
    /**
     * Generates a check report.
     *
     * @param request - GenerateUpgradeReportForSyncCloneRequest
     * @returns GenerateUpgradeReportForSyncCloneResponse
     */
    generateUpgradeReportForSyncClone(request: $_model.GenerateUpgradeReportForSyncCloneRequest): Promise<$_model.GenerateUpgradeReportForSyncCloneResponse>;
    /**
     * Retrieves the Lakebase tenant token (SPG tenant mount URL).
     *
     * @remarks
     * Retrieves the token required for mounting a Lakebase tenant. Only PolarFS instances whose CreationCategory is basic (Basic Edition) are supported. The server verifies the instance category before calling the backend, and returns OperationDenied.PolarFsCategory for other categories. Before calling this operation, provide PolarFsInstanceId and specify the associated DBClusterId, mount subdirectory, and tenant identifier as needed.
     *
     * @param request - GetLakebaseTenantTokenRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetLakebaseTenantTokenResponse
     */
    getLakebaseTenantTokenWithOptions(request: $_model.GetLakebaseTenantTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLakebaseTenantTokenResponse>;
    /**
     * Retrieves the Lakebase tenant token (SPG tenant mount URL).
     *
     * @remarks
     * Retrieves the token required for mounting a Lakebase tenant. Only PolarFS instances whose CreationCategory is basic (Basic Edition) are supported. The server verifies the instance category before calling the backend, and returns OperationDenied.PolarFsCategory for other categories. Before calling this operation, provide PolarFsInstanceId and specify the associated DBClusterId, mount subdirectory, and tenant identifier as needed.
     *
     * @param request - GetLakebaseTenantTokenRequest
     * @returns GetLakebaseTenantTokenResponse
     */
    getLakebaseTenantToken(request: $_model.GetLakebaseTenantTokenRequest): Promise<$_model.GetLakebaseTenantTokenResponse>;
    /**
     * Creates a chat record.
     *
     * @param request - GetPolarAgentRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetPolarAgentResponse
     */
    getPolarAgentWithSSE(request: $_model.GetPolarAgentRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.GetPolarAgentResponse, any, unknown>;
    /**
     * Creates a chat record.
     *
     * @param request - GetPolarAgentRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetPolarAgentResponse
     */
    getPolarAgentWithOptions(request: $_model.GetPolarAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPolarAgentResponse>;
    /**
     * Creates a chat record.
     *
     * @param request - GetPolarAgentRequest
     * @returns GetPolarAgentResponse
     */
    getPolarAgent(request: $_model.GetPolarAgentRequest): Promise<$_model.GetPolarAgentResponse>;
    /**
     * Retrieves the PolarClaw configuration.
     *
     * @param request - GetPolarClawConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetPolarClawConfigResponse
     */
    getPolarClawConfigWithOptions(request: $_model.GetPolarClawConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPolarClawConfigResponse>;
    /**
     * Retrieves the PolarClaw configuration.
     *
     * @param request - GetPolarClawConfigRequest
     * @returns GetPolarClawConfigResponse
     */
    getPolarClawConfig(request: $_model.GetPolarClawConfigRequest): Promise<$_model.GetPolarClawConfigResponse>;
    /**
     * Retrieves the central bucket for polarClawSkill.
     *
     * @remarks
     * ## Request description
     * This operation sets file quota rules for specific directories in a Polarlakebase instance. By configuring the `FilePathQuotas` parameter, you can specify the directories to which the quota rules apply and their related attributes. Note that when you use `FilePathId` to specify a directory, ensure that the path is an absolute path starting from the root directory rather than a mount point path. Additionally, you can use the `Strategy` parameter to control how the rules take effect on existing files. By default, the rules take effect only when no rules exist.
     * ### Important notes
     * - The maximum length of the `FilePathQuotas` list is 21.
     * - To apply rules to multi-level subdirectories under `FilePathId`, set the `MaxDepth` parameter. To traverse to the deepest level, set this value to 0.
     *
     * @param request - GetPolarClawSkillRegionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetPolarClawSkillRegionResponse
     */
    getPolarClawSkillRegionWithOptions(request: $_model.GetPolarClawSkillRegionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPolarClawSkillRegionResponse>;
    /**
     * Retrieves the central bucket for polarClawSkill.
     *
     * @remarks
     * ## Request description
     * This operation sets file quota rules for specific directories in a Polarlakebase instance. By configuring the `FilePathQuotas` parameter, you can specify the directories to which the quota rules apply and their related attributes. Note that when you use `FilePathId` to specify a directory, ensure that the path is an absolute path starting from the root directory rather than a mount point path. Additionally, you can use the `Strategy` parameter to control how the rules take effect on existing files. By default, the rules take effect only when no rules exist.
     * ### Important notes
     * - The maximum length of the `FilePathQuotas` list is 21.
     * - To apply rules to multi-level subdirectories under `FilePathId`, set the `MaxDepth` parameter. To traverse to the deepest level, set this value to 0.
     *
     * @param request - GetPolarClawSkillRegionRequest
     * @returns GetPolarClawSkillRegionResponse
     */
    getPolarClawSkillRegion(request: $_model.GetPolarClawSkillRegionRequest): Promise<$_model.GetPolarClawSkillRegionResponse>;
    /**
     * Grants a standard account the permissions to access one or more databases in a specified PolarDB cluster.
     *
     * @remarks
     * > - An account can be authorized to access one or more databases.
     * >
     * > - If the specified account already has the access permissions on the specified databases, the operation returns a successful response.
     * >
     * > - Before you call this operation, make sure that the cluster is in the Running state. Otherwise, the operation fails.
     * >
     * > - This operation is supported only for PolarDB for MySQL clusters.
     * >
     * > - By default, a privileged account for a cluster has all the permissions on the databases in the cluster.
     *
     * @param request - GrantAccountPrivilegeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GrantAccountPrivilegeResponse
     */
    grantAccountPrivilegeWithOptions(request: $_model.GrantAccountPrivilegeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GrantAccountPrivilegeResponse>;
    /**
     * Grants a standard account the permissions to access one or more databases in a specified PolarDB cluster.
     *
     * @remarks
     * > - An account can be authorized to access one or more databases.
     * >
     * > - If the specified account already has the access permissions on the specified databases, the operation returns a successful response.
     * >
     * > - Before you call this operation, make sure that the cluster is in the Running state. Otherwise, the operation fails.
     * >
     * > - This operation is supported only for PolarDB for MySQL clusters.
     * >
     * > - By default, a privileged account for a cluster has all the permissions on the databases in the cluster.
     *
     * @param request - GrantAccountPrivilegeRequest
     * @returns GrantAccountPrivilegeResponse
     */
    grantAccountPrivilege(request: $_model.GrantAccountPrivilegeRequest): Promise<$_model.GrantAccountPrivilegeResponse>;
    /**
     * Modifies the account permissions on a PolarDB for Xscale cluster.
     *
     * @param request - GrantAccountPrivilegeZonalRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GrantAccountPrivilegeZonalResponse
     */
    grantAccountPrivilegeZonalWithOptions(request: $_model.GrantAccountPrivilegeZonalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GrantAccountPrivilegeZonalResponse>;
    /**
     * Modifies the account permissions on a PolarDB for Xscale cluster.
     *
     * @param request - GrantAccountPrivilegeZonalRequest
     * @returns GrantAccountPrivilegeZonalResponse
     */
    grantAccountPrivilegeZonal(request: $_model.GrantAccountPrivilegeZonalRequest): Promise<$_model.GrantAccountPrivilegeZonalResponse>;
    /**
     * Installs the PolarClaw plug-in.
     *
     * @param request - InstallPolarClawPluginRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns InstallPolarClawPluginResponse
     */
    installPolarClawPluginWithOptions(request: $_model.InstallPolarClawPluginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InstallPolarClawPluginResponse>;
    /**
     * Installs the PolarClaw plug-in.
     *
     * @param request - InstallPolarClawPluginRequest
     * @returns InstallPolarClawPluginResponse
     */
    installPolarClawPlugin(request: $_model.InstallPolarClawPluginRequest): Promise<$_model.InstallPolarClawPluginResponse>;
    /**
     * Installs a PolarClaw skill.
     *
     * @param request - InstallPolarClawSkillRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns InstallPolarClawSkillResponse
     */
    installPolarClawSkillWithOptions(request: $_model.InstallPolarClawSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InstallPolarClawSkillResponse>;
    /**
     * Installs a PolarClaw skill.
     *
     * @param request - InstallPolarClawSkillRequest
     * @returns InstallPolarClawSkillResponse
     */
    installPolarClawSkill(request: $_model.InstallPolarClawSkillRequest): Promise<$_model.InstallPolarClawSkillResponse>;
    /**
     * Lists PolarFS S3 accounts.
     *
     * @param request - ListLakebaseS3AccountsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListLakebaseS3AccountsResponse
     */
    listLakebaseS3AccountsWithOptions(request: $_model.ListLakebaseS3AccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLakebaseS3AccountsResponse>;
    /**
     * Lists PolarFS S3 accounts.
     *
     * @param request - ListLakebaseS3AccountsRequest
     * @returns ListLakebaseS3AccountsResponse
     */
    listLakebaseS3Accounts(request: $_model.ListLakebaseS3AccountsRequest): Promise<$_model.ListLakebaseS3AccountsResponse>;
    /**
     * Queries orders.
     *
     * @param request - ListOrdersRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListOrdersResponse
     */
    listOrdersWithOptions(request: $_model.ListOrdersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOrdersResponse>;
    /**
     * Queries orders.
     *
     * @param request - ListOrdersRequest
     * @returns ListOrdersResponse
     */
    listOrders(request: $_model.ListOrdersRequest): Promise<$_model.ListOrdersResponse>;
    /**
     * Lists PolarClaw bindings.
     *
     * @param tmpReq - ListPolarClawBindingsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListPolarClawBindingsResponse
     */
    listPolarClawBindingsWithOptions(tmpReq: $_model.ListPolarClawBindingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPolarClawBindingsResponse>;
    /**
     * Lists PolarClaw bindings.
     *
     * @param request - ListPolarClawBindingsRequest
     * @returns ListPolarClawBindingsResponse
     */
    listPolarClawBindings(request: $_model.ListPolarClawBindingsRequest): Promise<$_model.ListPolarClawBindingsResponse>;
    /**
     * Lists PolarClaw device pairings.
     *
     * @param request - ListPolarClawDevicePairsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListPolarClawDevicePairsResponse
     */
    listPolarClawDevicePairsWithOptions(request: $_model.ListPolarClawDevicePairsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPolarClawDevicePairsResponse>;
    /**
     * Lists PolarClaw device pairings.
     *
     * @param request - ListPolarClawDevicePairsRequest
     * @returns ListPolarClawDevicePairsResponse
     */
    listPolarClawDevicePairs(request: $_model.ListPolarClawDevicePairsRequest): Promise<$_model.ListPolarClawDevicePairsResponse>;
    /**
     * Queries the tags bound to one or more PolarDB clusters, or the PolarDB clusters bound to one or more tags.
     *
     * @param request - ListTagResourcesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListTagResourcesResponse
     */
    listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse>;
    /**
     * Queries the tags bound to one or more PolarDB clusters, or the PolarDB clusters bound to one or more tags.
     *
     * @param request - ListTagResourcesRequest
     * @returns ListTagResourcesResponse
     */
    listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse>;
    /**
     * Queries the resource tags in a region.
     *
     * @param request - ListTagResourcesForRegionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListTagResourcesForRegionResponse
     */
    listTagResourcesForRegionWithOptions(request: $_model.ListTagResourcesForRegionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesForRegionResponse>;
    /**
     * Queries the resource tags in a region.
     *
     * @param request - ListTagResourcesForRegionRequest
     * @returns ListTagResourcesForRegionResponse
     */
    listTagResourcesForRegion(request: $_model.ListTagResourcesForRegionRequest): Promise<$_model.ListTagResourcesForRegionResponse>;
    /**
     * Logs into a PolarClaw channel.
     *
     * @param request - LoginPolarClawChannelRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns LoginPolarClawChannelResponse
     */
    loginPolarClawChannelWithOptions(request: $_model.LoginPolarClawChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LoginPolarClawChannelResponse>;
    /**
     * Logs into a PolarClaw channel.
     *
     * @param request - LoginPolarClawChannelRequest
     * @returns LoginPolarClawChannelResponse
     */
    loginPolarClawChannel(request: $_model.LoginPolarClawChannelRequest): Promise<$_model.LoginPolarClawChannelResponse>;
    /**
     * Starts a DB cluster.
     *
     * @param request - ManuallyStartDBClusterRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ManuallyStartDBClusterResponse
     */
    manuallyStartDBClusterWithOptions(request: $_model.ManuallyStartDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ManuallyStartDBClusterResponse>;
    /**
     * Starts a DB cluster.
     *
     * @param request - ManuallyStartDBClusterRequest
     * @returns ManuallyStartDBClusterResponse
     */
    manuallyStartDBCluster(request: $_model.ManuallyStartDBClusterRequest): Promise<$_model.ManuallyStartDBClusterResponse>;
    /**
     * Modify the name of an AI instance
     *
     * @param request - ModifyAIDBClusterDescriptionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyAIDBClusterDescriptionResponse
     */
    modifyAIDBClusterDescriptionWithOptions(request: $_model.ModifyAIDBClusterDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAIDBClusterDescriptionResponse>;
    /**
     * Modify the name of an AI instance
     *
     * @param request - ModifyAIDBClusterDescriptionRequest
     * @returns ModifyAIDBClusterDescriptionResponse
     */
    modifyAIDBClusterDescription(request: $_model.ModifyAIDBClusterDescriptionRequest): Promise<$_model.ModifyAIDBClusterDescriptionResponse>;
    /**
     * Modifies the AI cluster model or the customer-facing invocation name.
     *
     * @param request - ModifyAIDBClusterModelRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyAIDBClusterModelResponse
     */
    modifyAIDBClusterModelWithOptions(request: $_model.ModifyAIDBClusterModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAIDBClusterModelResponse>;
    /**
     * Modifies the AI cluster model or the customer-facing invocation name.
     *
     * @param request - ModifyAIDBClusterModelRequest
     * @returns ModifyAIDBClusterModelResponse
     */
    modifyAIDBClusterModel(request: $_model.ModifyAIDBClusterModelRequest): Promise<$_model.ModifyAIDBClusterModelResponse>;
    /**
     * Modifies a task.
     *
     * @param request - ModifyAIDBClusterTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyAIDBClusterTaskResponse
     */
    modifyAIDBClusterTaskWithOptions(request: $_model.ModifyAIDBClusterTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAIDBClusterTaskResponse>;
    /**
     * Modifies a task.
     *
     * @param request - ModifyAIDBClusterTaskRequest
     * @returns ModifyAIDBClusterTaskResponse
     */
    modifyAIDBClusterTask(request: $_model.ModifyAIDBClusterTaskRequest): Promise<$_model.ModifyAIDBClusterTaskResponse>;
    /**
     * Modifies the description of a PolarDB database account.
     *
     * @param request - ModifyAccountDescriptionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyAccountDescriptionResponse
     */
    modifyAccountDescriptionWithOptions(request: $_model.ModifyAccountDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccountDescriptionResponse>;
    /**
     * Modifies the description of a PolarDB database account.
     *
     * @param request - ModifyAccountDescriptionRequest
     * @returns ModifyAccountDescriptionResponse
     */
    modifyAccountDescription(request: $_model.ModifyAccountDescriptionRequest): Promise<$_model.ModifyAccountDescriptionResponse>;
    /**
     * Modifies the description of a PolarDB on ENS account.
     *
     * @param request - ModifyAccountDescriptionZonalRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyAccountDescriptionZonalResponse
     */
    modifyAccountDescriptionZonalWithOptions(request: $_model.ModifyAccountDescriptionZonalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccountDescriptionZonalResponse>;
    /**
     * Modifies the description of a PolarDB on ENS account.
     *
     * @param request - ModifyAccountDescriptionZonalRequest
     * @returns ModifyAccountDescriptionZonalResponse
     */
    modifyAccountDescriptionZonal(request: $_model.ModifyAccountDescriptionZonalRequest): Promise<$_model.ModifyAccountDescriptionZonalResponse>;
    /**
     * Changes the lock status of a PolarDB database account.
     *
     * @param request - ModifyAccountLockStateRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyAccountLockStateResponse
     */
    modifyAccountLockStateWithOptions(request: $_model.ModifyAccountLockStateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccountLockStateResponse>;
    /**
     * Changes the lock status of a PolarDB database account.
     *
     * @param request - ModifyAccountLockStateRequest
     * @returns ModifyAccountLockStateResponse
     */
    modifyAccountLockState(request: $_model.ModifyAccountLockStateRequest): Promise<$_model.ModifyAccountLockStateResponse>;
    /**
     * Changes the password of a database account for a specified PolarDB cluster.
     *
     * @param request - ModifyAccountPasswordRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyAccountPasswordResponse
     */
    modifyAccountPasswordWithOptions(request: $_model.ModifyAccountPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccountPasswordResponse>;
    /**
     * Changes the password of a database account for a specified PolarDB cluster.
     *
     * @param request - ModifyAccountPasswordRequest
     * @returns ModifyAccountPasswordResponse
     */
    modifyAccountPassword(request: $_model.ModifyAccountPasswordRequest): Promise<$_model.ModifyAccountPasswordResponse>;
    /**
     * Modifies the password of an account in a PolarDB for Xscale cluster.
     *
     * @param request - ModifyAccountPasswordZonalRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyAccountPasswordZonalResponse
     */
    modifyAccountPasswordZonalWithOptions(request: $_model.ModifyAccountPasswordZonalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccountPasswordZonalResponse>;
    /**
     * Modifies the password of an account in a PolarDB for Xscale cluster.
     *
     * @param request - ModifyAccountPasswordZonalRequest
     * @returns ModifyAccountPasswordZonalResponse
     */
    modifyAccountPasswordZonal(request: $_model.ModifyAccountPasswordZonalRequest): Promise<$_model.ModifyAccountPasswordZonalResponse>;
    /**
     * Configures the operations and maintenance (O&M) settings for a user. These settings include the active maintenance window.
     *
     * @param request - ModifyActiveOperationMaintainConfRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyActiveOperationMaintainConfResponse
     */
    modifyActiveOperationMaintainConfWithOptions(request: $_model.ModifyActiveOperationMaintainConfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyActiveOperationMaintainConfResponse>;
    /**
     * Configures the operations and maintenance (O&M) settings for a user. These settings include the active maintenance window.
     *
     * @param request - ModifyActiveOperationMaintainConfRequest
     * @returns ModifyActiveOperationMaintainConfResponse
     */
    modifyActiveOperationMaintainConf(request: $_model.ModifyActiveOperationMaintainConfRequest): Promise<$_model.ModifyActiveOperationMaintainConfResponse>;
    /**
     * Modifies the switchover time of a scheduled O&M event for an instance.
     *
     * @param request - ModifyActiveOperationTasksRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyActiveOperationTasksResponse
     */
    modifyActiveOperationTasksWithOptions(request: $_model.ModifyActiveOperationTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyActiveOperationTasksResponse>;
    /**
     * Modifies the switchover time of a scheduled O&M event for an instance.
     *
     * @param request - ModifyActiveOperationTasksRequest
     * @returns ModifyActiveOperationTasksResponse
     */
    modifyActiveOperationTasks(request: $_model.ModifyActiveOperationTasksRequest): Promise<$_model.ModifyActiveOperationTasksResponse>;
    /**
     * Modifies the history retention window for an AgenticDB project.
     *
     * @param request - ModifyAgenticDBProjectHistoryRetentionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyAgenticDBProjectHistoryRetentionResponse
     */
    modifyAgenticDBProjectHistoryRetentionWithOptions(request: $_model.ModifyAgenticDBProjectHistoryRetentionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAgenticDBProjectHistoryRetentionResponse>;
    /**
     * Modifies the history retention window for an AgenticDB project.
     *
     * @param request - ModifyAgenticDBProjectHistoryRetentionRequest
     * @returns ModifyAgenticDBProjectHistoryRetentionResponse
     */
    modifyAgenticDBProjectHistoryRetention(request: $_model.ModifyAgenticDBProjectHistoryRetentionRequest): Promise<$_model.ModifyAgenticDBProjectHistoryRetentionResponse>;
    /**
     * Modifies the automatic backup cycle, backup time window, and level-1 backup retention period of a specified application.
     *
     * @param request - ModifyApplicationBackupPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyApplicationBackupPolicyResponse
     */
    modifyApplicationBackupPolicyWithOptions(request: $_model.ModifyApplicationBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyApplicationBackupPolicyResponse>;
    /**
     * Modifies the automatic backup cycle, backup time window, and level-1 backup retention period of a specified application.
     *
     * @param request - ModifyApplicationBackupPolicyRequest
     * @returns ModifyApplicationBackupPolicyResponse
     */
    modifyApplicationBackupPolicy(request: $_model.ModifyApplicationBackupPolicyRequest): Promise<$_model.ModifyApplicationBackupPolicyResponse>;
    /**
     * Updates the description of a PolarDB application.
     *
     * @param request - ModifyApplicationDescriptionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyApplicationDescriptionResponse
     */
    modifyApplicationDescriptionWithOptions(request: $_model.ModifyApplicationDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyApplicationDescriptionResponse>;
    /**
     * Updates the description of a PolarDB application.
     *
     * @param request - ModifyApplicationDescriptionRequest
     * @returns ModifyApplicationDescriptionResponse
     */
    modifyApplicationDescription(request: $_model.ModifyApplicationDescriptionRequest): Promise<$_model.ModifyApplicationDescriptionResponse>;
    /**
     * Modifies a PolarDB application endpoint address.
     *
     * @param tmpReq - ModifyApplicationEndpointAddressRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyApplicationEndpointAddressResponse
     */
    modifyApplicationEndpointAddressWithOptions(tmpReq: $_model.ModifyApplicationEndpointAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyApplicationEndpointAddressResponse>;
    /**
     * Modifies a PolarDB application endpoint address.
     *
     * @param request - ModifyApplicationEndpointAddressRequest
     * @returns ModifyApplicationEndpointAddressResponse
     */
    modifyApplicationEndpointAddress(request: $_model.ModifyApplicationEndpointAddressRequest): Promise<$_model.ModifyApplicationEndpointAddressResponse>;
    /**
     * Modifies the configuration parameters of a sub-component within a specified PolarDB application.
     *
     * @param tmpReq - ModifyApplicationParameterRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyApplicationParameterResponse
     */
    modifyApplicationParameterWithOptions(tmpReq: $_model.ModifyApplicationParameterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyApplicationParameterResponse>;
    /**
     * Modifies the configuration parameters of a sub-component within a specified PolarDB application.
     *
     * @param request - ModifyApplicationParameterRequest
     * @returns ModifyApplicationParameterResponse
     */
    modifyApplicationParameter(request: $_model.ModifyApplicationParameterRequest): Promise<$_model.ModifyApplicationParameterResponse>;
    /**
     * Modifies the prompt for a specified application.
     *
     * @param request - ModifyApplicationPromptRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyApplicationPromptResponse
     */
    modifyApplicationPromptWithOptions(request: $_model.ModifyApplicationPromptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyApplicationPromptResponse>;
    /**
     * Modifies the prompt for a specified application.
     *
     * @param request - ModifyApplicationPromptRequest
     * @returns ModifyApplicationPromptResponse
     */
    modifyApplicationPrompt(request: $_model.ModifyApplicationPromptRequest): Promise<$_model.ModifyApplicationPromptResponse>;
    /**
     * Modifies the Serverless configuration of a PolarDB application.
     *
     * @param request - ModifyApplicationServerlessConfRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyApplicationServerlessConfResponse
     */
    modifyApplicationServerlessConfWithOptions(request: $_model.ModifyApplicationServerlessConfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyApplicationServerlessConfResponse>;
    /**
     * Modifies the Serverless configuration of a PolarDB application.
     *
     * @param request - ModifyApplicationServerlessConfRequest
     * @returns ModifyApplicationServerlessConfResponse
     */
    modifyApplicationServerlessConf(request: $_model.ModifyApplicationServerlessConfRequest): Promise<$_model.ModifyApplicationServerlessConfResponse>;
    /**
     * Modifies the IP address whitelist and security group configuration for a PolarDB application.
     *
     * @param request - ModifyApplicationWhitelistRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyApplicationWhitelistResponse
     */
    modifyApplicationWhitelistWithOptions(request: $_model.ModifyApplicationWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyApplicationWhitelistResponse>;
    /**
     * Modifies the IP address whitelist and security group configuration for a PolarDB application.
     *
     * @param request - ModifyApplicationWhitelistRequest
     * @returns ModifyApplicationWhitelistResponse
     */
    modifyApplicationWhitelist(request: $_model.ModifyApplicationWhitelistRequest): Promise<$_model.ModifyApplicationWhitelistResponse>;
    /**
     * Sets the auto-renewal status for a subscription PolarDB cluster.
     *
     * @param request - ModifyAutoRenewAttributeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyAutoRenewAttributeResponse
     */
    modifyAutoRenewAttributeWithOptions(request: $_model.ModifyAutoRenewAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAutoRenewAttributeResponse>;
    /**
     * Sets the auto-renewal status for a subscription PolarDB cluster.
     *
     * @param request - ModifyAutoRenewAttributeRequest
     * @returns ModifyAutoRenewAttributeResponse
     */
    modifyAutoRenewAttribute(request: $_model.ModifyAutoRenewAttributeRequest): Promise<$_model.ModifyAutoRenewAttributeResponse>;
    /**
     * Modifies the automatic backup policy of a PolarDB cluster.
     *
     * @remarks
     * > You can also modify the automatic backup policy of a PolarDB cluster in the console. For more information, see [Backup settings](https://help.aliyun.com/document_detail/280422.html).
     *
     * @param tmpReq - ModifyBackupPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyBackupPolicyResponse
     */
    modifyBackupPolicyWithOptions(tmpReq: $_model.ModifyBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBackupPolicyResponse>;
    /**
     * Modifies the automatic backup policy of a PolarDB cluster.
     *
     * @remarks
     * > You can also modify the automatic backup policy of a PolarDB cluster in the console. For more information, see [Backup settings](https://help.aliyun.com/document_detail/280422.html).
     *
     * @param request - ModifyBackupPolicyRequest
     * @returns ModifyBackupPolicyResponse
     */
    modifyBackupPolicy(request: $_model.ModifyBackupPolicyRequest): Promise<$_model.ModifyBackupPolicyResponse>;
    /**
     * Modifies a budget policy.
     *
     * @param request - ModifyBudgetPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyBudgetPolicyResponse
     */
    modifyBudgetPolicyWithOptions(request: $_model.ModifyBudgetPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBudgetPolicyResponse>;
    /**
     * Modifies a budget policy.
     *
     * @param request - ModifyBudgetPolicyRequest
     * @returns ModifyBudgetPolicyResponse
     */
    modifyBudgetPolicy(request: $_model.ModifyBudgetPolicyRequest): Promise<$_model.ModifyBudgetPolicyResponse>;
    /**
     * Modifies the properties of a consumer.
     *
     * @param request - ModifyConsumerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyConsumerResponse
     */
    modifyConsumerWithOptions(request: $_model.ModifyConsumerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyConsumerResponse>;
    /**
     * Modifies the properties of a consumer.
     *
     * @param request - ModifyConsumerRequest
     * @returns ModifyConsumerResponse
     */
    modifyConsumer(request: $_model.ModifyConsumerRequest): Promise<$_model.ModifyConsumerResponse>;
    /**
     * Modifies a consumer group.
     *
     * @param request - ModifyConsumerGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyConsumerGroupResponse
     */
    modifyConsumerGroupWithOptions(request: $_model.ModifyConsumerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyConsumerGroupResponse>;
    /**
     * Modifies a consumer group.
     *
     * @param request - ModifyConsumerGroupRequest
     * @returns ModifyConsumerGroupResponse
     */
    modifyConsumerGroup(request: $_model.ModifyConsumerGroupRequest): Promise<$_model.ModifyConsumerGroupResponse>;
    /**
     * Modifies a cost rule.
     *
     * @param request - ModifyCostRuleRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyCostRuleResponse
     */
    modifyCostRuleWithOptions(request: $_model.ModifyCostRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCostRuleResponse>;
    /**
     * Modifies a cost rule.
     *
     * @param request - ModifyCostRuleRequest
     * @returns ModifyCostRuleResponse
     */
    modifyCostRule(request: $_model.ModifyCostRuleRequest): Promise<$_model.ModifyCostRuleResponse>;
    /**
     * Modifies a scheduled task policy.
     *
     * @param request - ModifyCronJobPolicyServerlessRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyCronJobPolicyServerlessResponse
     */
    modifyCronJobPolicyServerlessWithOptions(request: $_model.ModifyCronJobPolicyServerlessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCronJobPolicyServerlessResponse>;
    /**
     * Modifies a scheduled task policy.
     *
     * @param request - ModifyCronJobPolicyServerlessRequest
     * @returns ModifyCronJobPolicyServerlessResponse
     */
    modifyCronJobPolicyServerless(request: $_model.ModifyCronJobPolicyServerlessRequest): Promise<$_model.ModifyCronJobPolicyServerlessResponse>;
    /**
     * Modifies the feature configurations of a PolarDB for MySQL cluster.
     *
     * @param request - ModifyDBClusterRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBClusterResponse
     */
    modifyDBClusterWithOptions(request: $_model.ModifyDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterResponse>;
    /**
     * Modifies the feature configurations of a PolarDB for MySQL cluster.
     *
     * @param request - ModifyDBClusterRequest
     * @returns ModifyDBClusterResponse
     */
    modifyDBCluster(request: $_model.ModifyDBClusterRequest): Promise<$_model.ModifyDBClusterResponse>;
    /**
     * Creates or modifies the whitelist of a cluster, including the IP whitelist and security groups.
     *
     * @param request - ModifyDBClusterAccessWhitelistRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBClusterAccessWhitelistResponse
     */
    modifyDBClusterAccessWhitelistWithOptions(request: $_model.ModifyDBClusterAccessWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterAccessWhitelistResponse>;
    /**
     * Creates or modifies the whitelist of a cluster, including the IP whitelist and security groups.
     *
     * @param request - ModifyDBClusterAccessWhitelistRequest
     * @returns ModifyDBClusterAccessWhitelistResponse
     */
    modifyDBClusterAccessWhitelist(request: $_model.ModifyDBClusterAccessWhitelistRequest): Promise<$_model.ModifyDBClusterAccessWhitelistResponse>;
    /**
     * Modify cluster parameters and apply them to specified nodes.
     *
     * @param request - ModifyDBClusterAndNodesParametersRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBClusterAndNodesParametersResponse
     */
    modifyDBClusterAndNodesParametersWithOptions(request: $_model.ModifyDBClusterAndNodesParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterAndNodesParametersResponse>;
    /**
     * Modify cluster parameters and apply them to specified nodes.
     *
     * @param request - ModifyDBClusterAndNodesParametersRequest
     * @returns ModifyDBClusterAndNodesParametersResponse
     */
    modifyDBClusterAndNodesParameters(request: $_model.ModifyDBClusterAndNodesParametersRequest): Promise<$_model.ModifyDBClusterAndNodesParametersResponse>;
    /**
     * Modifies the high-availability mode of a cluster.
     *
     * @param request - ModifyDBClusterArchRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBClusterArchResponse
     */
    modifyDBClusterArchWithOptions(request: $_model.ModifyDBClusterArchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterArchResponse>;
    /**
     * Modifies the high-availability mode of a cluster.
     *
     * @param request - ModifyDBClusterArchRequest
     * @returns ModifyDBClusterArchResponse
     */
    modifyDBClusterArch(request: $_model.ModifyDBClusterArchRequest): Promise<$_model.ModifyDBClusterArchResponse>;
    /**
     * Enables or disables SQL collector for a PolarDB cluster. The features related to SQL collector include Audit Logs and SQL Explorer.
     *
     * @remarks
     * *Note:** This API has been deprecated and is no longer maintained. We recommend that you use [Enable or configure DAS Enterprise Edition](https://help.aliyun.com/document_detail/2778835.html).
     * > If DAS Enterprise Edition is available in the region of the cluster, calling this API to enable SQL Audit automatically enables the latest DAS Enterprise Edition available in that region. For information about database engines and regions supported by each DAS Enterprise Edition version, see [Supported database engines and regions for DAS Enterprise Edition](https://help.aliyun.com/document_detail/156204.html).
     *
     * @param request - ModifyDBClusterAuditLogCollectorRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBClusterAuditLogCollectorResponse
     */
    modifyDBClusterAuditLogCollectorWithOptions(request: $_model.ModifyDBClusterAuditLogCollectorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterAuditLogCollectorResponse>;
    /**
     * Enables or disables SQL collector for a PolarDB cluster. The features related to SQL collector include Audit Logs and SQL Explorer.
     *
     * @remarks
     * *Note:** This API has been deprecated and is no longer maintained. We recommend that you use [Enable or configure DAS Enterprise Edition](https://help.aliyun.com/document_detail/2778835.html).
     * > If DAS Enterprise Edition is available in the region of the cluster, calling this API to enable SQL Audit automatically enables the latest DAS Enterprise Edition available in that region. For information about database engines and regions supported by each DAS Enterprise Edition version, see [Supported database engines and regions for DAS Enterprise Edition](https://help.aliyun.com/document_detail/156204.html).
     *
     * @param request - ModifyDBClusterAuditLogCollectorRequest
     * @returns ModifyDBClusterAuditLogCollectorResponse
     */
    modifyDBClusterAuditLogCollector(request: $_model.ModifyDBClusterAuditLogCollectorRequest): Promise<$_model.ModifyDBClusterAuditLogCollectorResponse>;
    /**
     * Modifies the minor engine version update policy for a specified PolarDB cluster.
     *
     * @param request - ModifyDBClusterAutoUpgradeMinorVersionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBClusterAutoUpgradeMinorVersionResponse
     */
    modifyDBClusterAutoUpgradeMinorVersionWithOptions(request: $_model.ModifyDBClusterAutoUpgradeMinorVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterAutoUpgradeMinorVersionResponse>;
    /**
     * Modifies the minor engine version update policy for a specified PolarDB cluster.
     *
     * @param request - ModifyDBClusterAutoUpgradeMinorVersionRequest
     * @returns ModifyDBClusterAutoUpgradeMinorVersionResponse
     */
    modifyDBClusterAutoUpgradeMinorVersion(request: $_model.ModifyDBClusterAutoUpgradeMinorVersionRequest): Promise<$_model.ModifyDBClusterAutoUpgradeMinorVersionResponse>;
    /**
     * Enables or disables the cluster lock.
     *
     * @param request - ModifyDBClusterDeletionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBClusterDeletionResponse
     */
    modifyDBClusterDeletionWithOptions(request: $_model.ModifyDBClusterDeletionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterDeletionResponse>;
    /**
     * Enables or disables the cluster lock.
     *
     * @param request - ModifyDBClusterDeletionRequest
     * @returns ModifyDBClusterDeletionResponse
     */
    modifyDBClusterDeletion(request: $_model.ModifyDBClusterDeletionRequest): Promise<$_model.ModifyDBClusterDeletionResponse>;
    /**
     * Modifies the description of a PolarDB cluster.
     *
     * @param request - ModifyDBClusterDescriptionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBClusterDescriptionResponse
     */
    modifyDBClusterDescriptionWithOptions(request: $_model.ModifyDBClusterDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterDescriptionResponse>;
    /**
     * Modifies the description of a PolarDB cluster.
     *
     * @param request - ModifyDBClusterDescriptionRequest
     * @returns ModifyDBClusterDescriptionResponse
     */
    modifyDBClusterDescription(request: $_model.ModifyDBClusterDescriptionRequest): Promise<$_model.ModifyDBClusterDescriptionResponse>;
    /**
     * Modifies the description of a cluster.
     *
     * @param request - ModifyDBClusterDescriptionZonalRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBClusterDescriptionZonalResponse
     */
    modifyDBClusterDescriptionZonalWithOptions(request: $_model.ModifyDBClusterDescriptionZonalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterDescriptionZonalResponse>;
    /**
     * Modifies the description of a cluster.
     *
     * @param request - ModifyDBClusterDescriptionZonalRequest
     * @returns ModifyDBClusterDescriptionZonalResponse
     */
    modifyDBClusterDescriptionZonal(request: $_model.ModifyDBClusterDescriptionZonalRequest): Promise<$_model.ModifyDBClusterDescriptionZonalResponse>;
    /**
     * Modifies the cluster endpoint attributes of a PolarDB cluster, including the read/write mode, whether new nodes are automatically added to the endpoint, consistency level, transaction splitting, whether the primary node accepts read requests, and connection pooling.
     *
     * @param request - ModifyDBClusterEndpointRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBClusterEndpointResponse
     */
    modifyDBClusterEndpointWithOptions(request: $_model.ModifyDBClusterEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterEndpointResponse>;
    /**
     * Modifies the cluster endpoint attributes of a PolarDB cluster, including the read/write mode, whether new nodes are automatically added to the endpoint, consistency level, transaction splitting, whether the primary node accepts read requests, and connection pooling.
     *
     * @param request - ModifyDBClusterEndpointRequest
     * @returns ModifyDBClusterEndpointResponse
     */
    modifyDBClusterEndpoint(request: $_model.ModifyDBClusterEndpointRequest): Promise<$_model.ModifyDBClusterEndpointResponse>;
    /**
     * Modifies the connection string for an edge cluster for PolarDB on ENS.
     *
     * @param request - ModifyDBClusterEndpointZonalRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBClusterEndpointZonalResponse
     */
    modifyDBClusterEndpointZonalWithOptions(request: $_model.ModifyDBClusterEndpointZonalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterEndpointZonalResponse>;
    /**
     * Modifies the connection string for an edge cluster for PolarDB on ENS.
     *
     * @param request - ModifyDBClusterEndpointZonalRequest
     * @returns ModifyDBClusterEndpointZonalResponse
     */
    modifyDBClusterEndpointZonal(request: $_model.ModifyDBClusterEndpointZonalRequest): Promise<$_model.ModifyDBClusterEndpointZonalResponse>;
    /**
     * Modifies the routine maintenance window for a PolarDB cluster.
     *
     * @remarks
     * > Set the routine maintenance window for the cluster to a time during off-peak hours. Alibaba Cloud performs cluster maintenance during this window to minimize the impact on your business.
     *
     * @param request - ModifyDBClusterMaintainTimeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBClusterMaintainTimeResponse
     */
    modifyDBClusterMaintainTimeWithOptions(request: $_model.ModifyDBClusterMaintainTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterMaintainTimeResponse>;
    /**
     * Modifies the routine maintenance window for a PolarDB cluster.
     *
     * @remarks
     * > Set the routine maintenance window for the cluster to a time during off-peak hours. Alibaba Cloud performs cluster maintenance during this window to minimize the impact on your business.
     *
     * @param request - ModifyDBClusterMaintainTimeRequest
     * @returns ModifyDBClusterMaintainTimeResponse
     */
    modifyDBClusterMaintainTime(request: $_model.ModifyDBClusterMaintainTimeRequest): Promise<$_model.ModifyDBClusterMaintainTimeResponse>;
    /**
     * Switches or rolls back a migration task for a one-click upgrade from RDS to PolarDB.
     *
     * @remarks
     * - If this operation is called before the switchover, it performs a switchover.
     * - If this operation is called after the switchover is complete, it performs a rollback.
     * > A one-click upgrade task must be created for the cluster before you call this operation. To create the task, call the [CreateDBCluster](https://help.aliyun.com/document_detail/98169.html) operation and set the **CreationOption** parameter to **MigrationFromRDS**. For more information, see [One-click upgrade from RDS MySQL to PolarDB for MySQL](https://help.aliyun.com/document_detail/121582.html).
     *
     * @param request - ModifyDBClusterMigrationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBClusterMigrationResponse
     */
    modifyDBClusterMigrationWithOptions(request: $_model.ModifyDBClusterMigrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterMigrationResponse>;
    /**
     * Switches or rolls back a migration task for a one-click upgrade from RDS to PolarDB.
     *
     * @remarks
     * - If this operation is called before the switchover, it performs a switchover.
     * - If this operation is called after the switchover is complete, it performs a rollback.
     * > A one-click upgrade task must be created for the cluster before you call this operation. To create the task, call the [CreateDBCluster](https://help.aliyun.com/document_detail/98169.html) operation and set the **CreationOption** parameter to **MigrationFromRDS**. For more information, see [One-click upgrade from RDS MySQL to PolarDB for MySQL](https://help.aliyun.com/document_detail/121582.html).
     *
     * @param request - ModifyDBClusterMigrationRequest
     * @returns ModifyDBClusterMigrationResponse
     */
    modifyDBClusterMigration(request: $_model.ModifyDBClusterMigrationRequest): Promise<$_model.ModifyDBClusterMigrationResponse>;
    /**
     * Modifies the source and target instances of a Data Transmission Service (DTS) task.
     *
     * @param request - ModifyDBClusterMigrationEndpointRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBClusterMigrationEndpointResponse
     */
    modifyDBClusterMigrationEndpointWithOptions(request: $_model.ModifyDBClusterMigrationEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterMigrationEndpointResponse>;
    /**
     * Modifies the source and target instances of a Data Transmission Service (DTS) task.
     *
     * @param request - ModifyDBClusterMigrationEndpointRequest
     * @returns ModifyDBClusterMigrationEndpointResponse
     */
    modifyDBClusterMigrationEndpoint(request: $_model.ModifyDBClusterMigrationEndpointRequest): Promise<$_model.ModifyDBClusterMigrationEndpointResponse>;
    /**
     * Modifies the interval at which the monitoring data of a PolarDB cluster is collected.
     *
     * @remarks
     *   When the monitoring data is collected every 5 seconds:
     *     *   If the query time range is less than or equal to 1 hour, the data is displayed at intervals of 5 seconds.
     *     *   If the query time range is less than or equal to one day, the data is displayed at intervals of 1 minute.
     *     *   If the query time range is less than or equal to seven days, the data is displayed at intervals of 10 minutes.
     *     *   If the query time range is less than or equal to 30 days, the data is displayed at intervals of 1 hour.
     *     *   When the query time range is greater than 30 days, the data is displayed at intervals of 1 day.
     * *   When the monitoring data is collected every 60 seconds:
     *     *   If the query time range is less than or equal to one day, the data is displayed at intervals of 1 minute.
     *     *   If the query time range is less than or equal to seven days, the data is displayed at intervals of 10 minutes.
     *     *   If the query time range is less than or equal to 30 days, the data is displayed at intervals of 1 hour.
     *     *   When the query time range is greater than 30 days, the data is displayed at intervals of 1 day.
     *
     * @param request - ModifyDBClusterMonitorRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBClusterMonitorResponse
     */
    modifyDBClusterMonitorWithOptions(request: $_model.ModifyDBClusterMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterMonitorResponse>;
    /**
     * Modifies the interval at which the monitoring data of a PolarDB cluster is collected.
     *
     * @remarks
     *   When the monitoring data is collected every 5 seconds:
     *     *   If the query time range is less than or equal to 1 hour, the data is displayed at intervals of 5 seconds.
     *     *   If the query time range is less than or equal to one day, the data is displayed at intervals of 1 minute.
     *     *   If the query time range is less than or equal to seven days, the data is displayed at intervals of 10 minutes.
     *     *   If the query time range is less than or equal to 30 days, the data is displayed at intervals of 1 hour.
     *     *   When the query time range is greater than 30 days, the data is displayed at intervals of 1 day.
     * *   When the monitoring data is collected every 60 seconds:
     *     *   If the query time range is less than or equal to one day, the data is displayed at intervals of 1 minute.
     *     *   If the query time range is less than or equal to seven days, the data is displayed at intervals of 10 minutes.
     *     *   If the query time range is less than or equal to 30 days, the data is displayed at intervals of 1 hour.
     *     *   When the query time range is greater than 30 days, the data is displayed at intervals of 1 day.
     *
     * @param request - ModifyDBClusterMonitorRequest
     * @returns ModifyDBClusterMonitorResponse
     */
    modifyDBClusterMonitor(request: $_model.ModifyDBClusterMonitorRequest): Promise<$_model.ModifyDBClusterMonitorResponse>;
    /**
     * Modifies the parameters of a PolarDB cluster or applies an existing parameter template to the specified cluster.
     *
     * @remarks
     * PolarDB provides the parameter template feature. You can use parameter templates to centrally manage parameters and quickly apply them to clusters. For more information, see [Use parameter templates](https://help.aliyun.com/document_detail/207009.html).
     * > Currently, only PolarDB for MySQL supports the parameter template feature.
     *
     * @param request - ModifyDBClusterParametersRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBClusterParametersResponse
     */
    modifyDBClusterParametersWithOptions(request: $_model.ModifyDBClusterParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterParametersResponse>;
    /**
     * Modifies the parameters of a PolarDB cluster or applies an existing parameter template to the specified cluster.
     *
     * @remarks
     * PolarDB provides the parameter template feature. You can use parameter templates to centrally manage parameters and quickly apply them to clusters. For more information, see [Use parameter templates](https://help.aliyun.com/document_detail/207009.html).
     * > Currently, only PolarDB for MySQL supports the parameter template feature.
     *
     * @param request - ModifyDBClusterParametersRequest
     * @returns ModifyDBClusterParametersResponse
     */
    modifyDBClusterParameters(request: $_model.ModifyDBClusterParametersRequest): Promise<$_model.ModifyDBClusterParametersResponse>;
    /**
     * Changes the primary zone of a PolarDB cluster.
     *
     * @param request - ModifyDBClusterPrimaryZoneRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBClusterPrimaryZoneResponse
     */
    modifyDBClusterPrimaryZoneWithOptions(request: $_model.ModifyDBClusterPrimaryZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterPrimaryZoneResponse>;
    /**
     * Changes the primary zone of a PolarDB cluster.
     *
     * @param request - ModifyDBClusterPrimaryZoneRequest
     * @returns ModifyDBClusterPrimaryZoneResponse
     */
    modifyDBClusterPrimaryZone(request: $_model.ModifyDBClusterPrimaryZoneRequest): Promise<$_model.ModifyDBClusterPrimaryZoneResponse>;
    /**
     * Modifies the resource group of a database cluster.
     *
     * @param request - ModifyDBClusterResourceGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBClusterResourceGroupResponse
     */
    modifyDBClusterResourceGroupWithOptions(request: $_model.ModifyDBClusterResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterResourceGroupResponse>;
    /**
     * Modifies the resource group of a database cluster.
     *
     * @param request - ModifyDBClusterResourceGroupRequest
     * @returns ModifyDBClusterResourceGroupResponse
     */
    modifyDBClusterResourceGroup(request: $_model.ModifyDBClusterResourceGroupRequest): Promise<$_model.ModifyDBClusterResourceGroupResponse>;
    /**
     * Enables or performs a shutdown of the Secure Sockets Layer (SSL) encryption feature for a PolarDB cluster, or updates the CA certificate of a PolarDB cluster.
     *
     * @param request - ModifyDBClusterSSLRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBClusterSSLResponse
     */
    modifyDBClusterSSLWithOptions(request: $_model.ModifyDBClusterSSLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterSSLResponse>;
    /**
     * Enables or performs a shutdown of the Secure Sockets Layer (SSL) encryption feature for a PolarDB cluster, or updates the CA certificate of a PolarDB cluster.
     *
     * @param request - ModifyDBClusterSSLRequest
     * @returns ModifyDBClusterSSLResponse
     */
    modifyDBClusterSSL(request: $_model.ModifyDBClusterSSLRequest): Promise<$_model.ModifyDBClusterSSLResponse>;
    /**
     * Modifies the configuration of a serverless cluster.
     *
     * @param request - ModifyDBClusterServerlessConfRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBClusterServerlessConfResponse
     */
    modifyDBClusterServerlessConfWithOptions(request: $_model.ModifyDBClusterServerlessConfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterServerlessConfResponse>;
    /**
     * Modifies the configuration of a serverless cluster.
     *
     * @param request - ModifyDBClusterServerlessConfRequest
     * @returns ModifyDBClusterServerlessConfResponse
     */
    modifyDBClusterServerlessConf(request: $_model.ModifyDBClusterServerlessConfRequest): Promise<$_model.ModifyDBClusterServerlessConfResponse>;
    /**
     * Modifies the storage performance of a PolarDB for MySQL cluster.
     *
     * @param request - ModifyDBClusterStoragePerformanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBClusterStoragePerformanceResponse
     */
    modifyDBClusterStoragePerformanceWithOptions(request: $_model.ModifyDBClusterStoragePerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterStoragePerformanceResponse>;
    /**
     * Modifies the storage performance of a PolarDB for MySQL cluster.
     *
     * @param request - ModifyDBClusterStoragePerformanceRequest
     * @returns ModifyDBClusterStoragePerformanceResponse
     */
    modifyDBClusterStoragePerformance(request: $_model.ModifyDBClusterStoragePerformanceRequest): Promise<$_model.ModifyDBClusterStoragePerformanceResponse>;
    /**
     * This operation modifies the storage space for pay-as-you-go enterprise edition and standard edition clusters.
     *
     * @remarks
     * > You cannot scale down the storage space of PolarDB for PostgreSQL clusters.
     *
     * @param request - ModifyDBClusterStorageSpaceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBClusterStorageSpaceResponse
     */
    modifyDBClusterStorageSpaceWithOptions(request: $_model.ModifyDBClusterStorageSpaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterStorageSpaceResponse>;
    /**
     * This operation modifies the storage space for pay-as-you-go enterprise edition and standard edition clusters.
     *
     * @remarks
     * > You cannot scale down the storage space of PolarDB for PostgreSQL clusters.
     *
     * @param request - ModifyDBClusterStorageSpaceRequest
     * @returns ModifyDBClusterStorageSpaceResponse
     */
    modifyDBClusterStorageSpace(request: $_model.ModifyDBClusterStorageSpaceRequest): Promise<$_model.ModifyDBClusterStorageSpaceResponse>;
    /**
     * Enables Transparent Data Encryption (TDE) for a specified PolarDB cluster. You must activate Key Management Service (KMS) before you enable TDE. TDE cannot be disabled after it is enabled.
     *
     * @remarks
     * >* You must activate KMS before you perform this operation. For more information, see [Purchase a dedicated KMS instance](https://help.aliyun.com/document_detail/153781.html).
     * >* TDE cannot be disabled after it is enabled.
     * Before you call this operation, call the OpenKmsService operation of KMS (version 2016-01-20) to activate KMS, and then call this operation to enable TDE for the cluster.
     *
     * @param request - ModifyDBClusterTDERequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBClusterTDEResponse
     */
    modifyDBClusterTDEWithOptions(request: $_model.ModifyDBClusterTDERequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterTDEResponse>;
    /**
     * Enables Transparent Data Encryption (TDE) for a specified PolarDB cluster. You must activate Key Management Service (KMS) before you enable TDE. TDE cannot be disabled after it is enabled.
     *
     * @remarks
     * >* You must activate KMS before you perform this operation. For more information, see [Purchase a dedicated KMS instance](https://help.aliyun.com/document_detail/153781.html).
     * >* TDE cannot be disabled after it is enabled.
     * Before you call this operation, call the OpenKmsService operation of KMS (version 2016-01-20) to activate KMS, and then call this operation to enable TDE for the cluster.
     *
     * @param request - ModifyDBClusterTDERequest
     * @returns ModifyDBClusterTDEResponse
     */
    modifyDBClusterTDE(request: $_model.ModifyDBClusterTDERequest): Promise<$_model.ModifyDBClusterTDEResponse>;
    /**
     * Modifies the vSwitch parameters for a cluster.
     *
     * @param request - ModifyDBClusterVpcRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBClusterVpcResponse
     */
    modifyDBClusterVpcWithOptions(request: $_model.ModifyDBClusterVpcRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterVpcResponse>;
    /**
     * Modifies the vSwitch parameters for a cluster.
     *
     * @param request - ModifyDBClusterVpcRequest
     * @returns ModifyDBClusterVpcResponse
     */
    modifyDBClusterVpc(request: $_model.ModifyDBClusterVpcRequest): Promise<$_model.ModifyDBClusterVpcResponse>;
    /**
     * Modifies the description of a database in a PolarDB for MySQL cluster.
     *
     * @param request - ModifyDBDescriptionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBDescriptionResponse
     */
    modifyDBDescriptionWithOptions(request: $_model.ModifyDBDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBDescriptionResponse>;
    /**
     * Modifies the description of a database in a PolarDB for MySQL cluster.
     *
     * @param request - ModifyDBDescriptionRequest
     * @returns ModifyDBDescriptionResponse
     */
    modifyDBDescription(request: $_model.ModifyDBDescriptionRequest): Promise<$_model.ModifyDBDescriptionResponse>;
    /**
     * Modifies the description of a database in a PolarDB on ENS cluster.
     *
     * @param request - ModifyDBDescriptionZonalRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBDescriptionZonalResponse
     */
    modifyDBDescriptionZonalWithOptions(request: $_model.ModifyDBDescriptionZonalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBDescriptionZonalResponse>;
    /**
     * Modifies the description of a database in a PolarDB on ENS cluster.
     *
     * @param request - ModifyDBDescriptionZonalRequest
     * @returns ModifyDBDescriptionZonalResponse
     */
    modifyDBDescriptionZonal(request: $_model.ModifyDBDescriptionZonalRequest): Promise<$_model.ModifyDBDescriptionZonalResponse>;
    /**
     * Modifies the connection address of a PolarDB cluster. The address can be a primary address, default cluster address, custom cluster address, or private domain name.
     *
     * @param request - ModifyDBEndpointAddressRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBEndpointAddressResponse
     */
    modifyDBEndpointAddressWithOptions(request: $_model.ModifyDBEndpointAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBEndpointAddressResponse>;
    /**
     * Modifies the connection address of a PolarDB cluster. The address can be a primary address, default cluster address, custom cluster address, or private domain name.
     *
     * @param request - ModifyDBEndpointAddressRequest
     * @returns ModifyDBEndpointAddressResponse
     */
    modifyDBEndpointAddress(request: $_model.ModifyDBEndpointAddressRequest): Promise<$_model.ModifyDBEndpointAddressResponse>;
    /**
     * Modifies the node specifications of a PolarDB cluster.
     *
     * @param request - ModifyDBNodeClassRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBNodeClassResponse
     */
    modifyDBNodeClassWithOptions(request: $_model.ModifyDBNodeClassRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBNodeClassResponse>;
    /**
     * Modifies the node specifications of a PolarDB cluster.
     *
     * @param request - ModifyDBNodeClassRequest
     * @returns ModifyDBNodeClassResponse
     */
    modifyDBNodeClass(request: $_model.ModifyDBNodeClassRequest): Promise<$_model.ModifyDBNodeClassResponse>;
    /**
     * Modifies the configuration of a node in a PolarDB cluster.
     *
     * @param request - ModifyDBNodeConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBNodeConfigResponse
     */
    modifyDBNodeConfigWithOptions(request: $_model.ModifyDBNodeConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBNodeConfigResponse>;
    /**
     * Modifies the configuration of a node in a PolarDB cluster.
     *
     * @param request - ModifyDBNodeConfigRequest
     * @returns ModifyDBNodeConfigResponse
     */
    modifyDBNodeConfig(request: $_model.ModifyDBNodeConfigRequest): Promise<$_model.ModifyDBNodeConfigResponse>;
    /**
     * Modifies the name of a node in a PolarDB cluster.
     *
     * @param request - ModifyDBNodeDescriptionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBNodeDescriptionResponse
     */
    modifyDBNodeDescriptionWithOptions(request: $_model.ModifyDBNodeDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBNodeDescriptionResponse>;
    /**
     * Modifies the name of a node in a PolarDB cluster.
     *
     * @param request - ModifyDBNodeDescriptionRequest
     * @returns ModifyDBNodeDescriptionResponse
     */
    modifyDBNodeDescription(request: $_model.ModifyDBNodeDescriptionRequest): Promise<$_model.ModifyDBNodeDescriptionResponse>;
    /**
     * Enables or disables the failover with hot replica feature for a node in a cluster.
     *
     * @param request - ModifyDBNodeHotReplicaModeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBNodeHotReplicaModeResponse
     */
    modifyDBNodeHotReplicaModeWithOptions(request: $_model.ModifyDBNodeHotReplicaModeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBNodeHotReplicaModeResponse>;
    /**
     * Enables or disables the failover with hot replica feature for a node in a cluster.
     *
     * @param request - ModifyDBNodeHotReplicaModeRequest
     * @returns ModifyDBNodeHotReplicaModeResponse
     */
    modifyDBNodeHotReplicaMode(request: $_model.ModifyDBNodeHotReplicaModeRequest): Promise<$_model.ModifyDBNodeHotReplicaModeResponse>;
    /**
     * Modifies the routing access weights of nodes.
     *
     * @param request - ModifyDBNodeRouterWeightRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBNodeRouterWeightResponse
     */
    modifyDBNodeRouterWeightWithOptions(request: $_model.ModifyDBNodeRouterWeightRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBNodeRouterWeightResponse>;
    /**
     * Modifies the routing access weights of nodes.
     *
     * @param request - ModifyDBNodeRouterWeightRequest
     * @returns ModifyDBNodeRouterWeightResponse
     */
    modifyDBNodeRouterWeight(request: $_model.ModifyDBNodeRouterWeightRequest): Promise<$_model.ModifyDBNodeRouterWeightResponse>;
    /**
     * Modifies the Snapshot Consistency Cluster (SCC) mode for a specified node in a PolarDB cluster.
     *
     * @param request - ModifyDBNodeSccModeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBNodeSccModeResponse
     */
    modifyDBNodeSccModeWithOptions(request: $_model.ModifyDBNodeSccModeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBNodeSccModeResponse>;
    /**
     * Modifies the Snapshot Consistency Cluster (SCC) mode for a specified node in a PolarDB cluster.
     *
     * @param request - ModifyDBNodeSccModeRequest
     * @returns ModifyDBNodeSccModeResponse
     */
    modifyDBNodeSccMode(request: $_model.ModifyDBNodeSccModeRequest): Promise<$_model.ModifyDBNodeSccModeResponse>;
    /**
     * Changes the specifications of a single node in a PolarDB cluster.
     *
     * @param request - ModifyDBNodesClassRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBNodesClassResponse
     */
    modifyDBNodesClassWithOptions(request: $_model.ModifyDBNodesClassRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBNodesClassResponse>;
    /**
     * Changes the specifications of a single node in a PolarDB cluster.
     *
     * @param request - ModifyDBNodesClassRequest
     * @returns ModifyDBNodesClassResponse
     */
    modifyDBNodesClass(request: $_model.ModifyDBNodesClassRequest): Promise<$_model.ModifyDBNodesClassResponse>;
    /**
     * Modifies and applies the parameters of one or more nodes.
     *
     * @param request - ModifyDBNodesParametersRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyDBNodesParametersResponse
     */
    modifyDBNodesParametersWithOptions(request: $_model.ModifyDBNodesParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBNodesParametersResponse>;
    /**
     * Modifies and applies the parameters of one or more nodes.
     *
     * @param request - ModifyDBNodesParametersRequest
     * @returns ModifyDBNodesParametersResponse
     */
    modifyDBNodesParameters(request: $_model.ModifyDBNodesParametersRequest): Promise<$_model.ModifyDBNodesParametersResponse>;
    /**
     * Modifies role permissions.
     *
     * @param request - ModifyEncryptionDBRolePrivilegeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyEncryptionDBRolePrivilegeResponse
     */
    modifyEncryptionDBRolePrivilegeWithOptions(request: $_model.ModifyEncryptionDBRolePrivilegeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyEncryptionDBRolePrivilegeResponse>;
    /**
     * Modifies role permissions.
     *
     * @param request - ModifyEncryptionDBRolePrivilegeRequest
     * @returns ModifyEncryptionDBRolePrivilegeResponse
     */
    modifyEncryptionDBRolePrivilege(request: $_model.ModifyEncryptionDBRolePrivilegeRequest): Promise<$_model.ModifyEncryptionDBRolePrivilegeResponse>;
    /**
     * Modifies an encryption policy.
     *
     * @param request - ModifyEncryptionDBSecretRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyEncryptionDBSecretResponse
     */
    modifyEncryptionDBSecretWithOptions(request: $_model.ModifyEncryptionDBSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyEncryptionDBSecretResponse>;
    /**
     * Modifies an encryption policy.
     *
     * @param request - ModifyEncryptionDBSecretRequest
     * @returns ModifyEncryptionDBSecretResponse
     */
    modifyEncryptionDBSecret(request: $_model.ModifyEncryptionDBSecretRequest): Promise<$_model.ModifyEncryptionDBSecretResponse>;
    /**
     * Modifies the configuration of the SQL firewall.
     *
     * @param request - ModifyFirewallRulesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyFirewallRulesResponse
     */
    modifyFirewallRulesWithOptions(request: $_model.ModifyFirewallRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyFirewallRulesResponse>;
    /**
     * Modifies the configuration of the SQL firewall.
     *
     * @param request - ModifyFirewallRulesRequest
     * @returns ModifyFirewallRulesResponse
     */
    modifyFirewallRules(request: $_model.ModifyFirewallRulesRequest): Promise<$_model.ModifyFirewallRulesResponse>;
    /**
     * Modifies a global database network (GDN).
     *
     * @param request - ModifyGlobalDatabaseNetworkRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyGlobalDatabaseNetworkResponse
     */
    modifyGlobalDatabaseNetworkWithOptions(request: $_model.ModifyGlobalDatabaseNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyGlobalDatabaseNetworkResponse>;
    /**
     * Modifies a global database network (GDN).
     *
     * @param request - ModifyGlobalDatabaseNetworkRequest
     * @returns ModifyGlobalDatabaseNetworkResponse
     */
    modifyGlobalDatabaseNetwork(request: $_model.ModifyGlobalDatabaseNetworkRequest): Promise<$_model.ModifyGlobalDatabaseNetworkResponse>;
    /**
     * Modifies an IP address whitelist template.
     *
     * @param request - ModifyGlobalSecurityIPGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyGlobalSecurityIPGroupResponse
     */
    modifyGlobalSecurityIPGroupWithOptions(request: $_model.ModifyGlobalSecurityIPGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyGlobalSecurityIPGroupResponse>;
    /**
     * Modifies an IP address whitelist template.
     *
     * @param request - ModifyGlobalSecurityIPGroupRequest
     * @returns ModifyGlobalSecurityIPGroupResponse
     */
    modifyGlobalSecurityIPGroup(request: $_model.ModifyGlobalSecurityIPGroupRequest): Promise<$_model.ModifyGlobalSecurityIPGroupResponse>;
    /**
     * Modifies the name of a global IP address whitelist template.
     *
     * @param request - ModifyGlobalSecurityIPGroupNameRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyGlobalSecurityIPGroupNameResponse
     */
    modifyGlobalSecurityIPGroupNameWithOptions(request: $_model.ModifyGlobalSecurityIPGroupNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyGlobalSecurityIPGroupNameResponse>;
    /**
     * Modifies the name of a global IP address whitelist template.
     *
     * @param request - ModifyGlobalSecurityIPGroupNameRequest
     * @returns ModifyGlobalSecurityIPGroupNameResponse
     */
    modifyGlobalSecurityIPGroupName(request: $_model.ModifyGlobalSecurityIPGroupNameRequest): Promise<$_model.ModifyGlobalSecurityIPGroupNameResponse>;
    /**
     * Modifies the association between a cluster and a global IP address whitelist template.
     *
     * @param request - ModifyGlobalSecurityIPGroupRelationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyGlobalSecurityIPGroupRelationResponse
     */
    modifyGlobalSecurityIPGroupRelationWithOptions(request: $_model.ModifyGlobalSecurityIPGroupRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyGlobalSecurityIPGroupRelationResponse>;
    /**
     * Modifies the association between a cluster and a global IP address whitelist template.
     *
     * @param request - ModifyGlobalSecurityIPGroupRelationRequest
     * @returns ModifyGlobalSecurityIPGroupRelationResponse
     */
    modifyGlobalSecurityIPGroupRelation(request: $_model.ModifyGlobalSecurityIPGroupRelationRequest): Promise<$_model.ModifyGlobalSecurityIPGroupRelationResponse>;
    /**
     * Modifies a mounted parameter template for Lakebase.
     *
     * @param request - ModifyLakebaseMountParameterGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyLakebaseMountParameterGroupResponse
     */
    modifyLakebaseMountParameterGroupWithOptions(request: $_model.ModifyLakebaseMountParameterGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyLakebaseMountParameterGroupResponse>;
    /**
     * Modifies a mounted parameter template for Lakebase.
     *
     * @param request - ModifyLakebaseMountParameterGroupRequest
     * @returns ModifyLakebaseMountParameterGroupResponse
     */
    modifyLakebaseMountParameterGroup(request: $_model.ModifyLakebaseMountParameterGroupRequest): Promise<$_model.ModifyLakebaseMountParameterGroupResponse>;
    /**
     * Modifies the PolarFS S3 account policy.
     *
     * @param request - ModifyLakebaseS3AccountPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyLakebaseS3AccountPolicyResponse
     */
    modifyLakebaseS3AccountPolicyWithOptions(request: $_model.ModifyLakebaseS3AccountPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyLakebaseS3AccountPolicyResponse>;
    /**
     * Modifies the PolarFS S3 account policy.
     *
     * @param request - ModifyLakebaseS3AccountPolicyRequest
     * @returns ModifyLakebaseS3AccountPolicyResponse
     */
    modifyLakebaseS3AccountPolicy(request: $_model.ModifyLakebaseS3AccountPolicyRequest): Promise<$_model.ModifyLakebaseS3AccountPolicyResponse>;
    /**
     * Modifies the log backup retention policy of a PolarDB cluster.
     *
     * @param tmpReq - ModifyLogBackupPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyLogBackupPolicyResponse
     */
    modifyLogBackupPolicyWithOptions(tmpReq: $_model.ModifyLogBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyLogBackupPolicyResponse>;
    /**
     * Modifies the log backup retention policy of a PolarDB cluster.
     *
     * @param request - ModifyLogBackupPolicyRequest
     * @returns ModifyLogBackupPolicyResponse
     */
    modifyLogBackupPolicy(request: $_model.ModifyLogBackupPolicyRequest): Promise<$_model.ModifyLogBackupPolicyResponse>;
    /**
     * Modifies or creates data masking rules.
     *
     * @param request - ModifyMaskingRulesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyMaskingRulesResponse
     */
    modifyMaskingRulesWithOptions(request: $_model.ModifyMaskingRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMaskingRulesResponse>;
    /**
     * Modifies or creates data masking rules.
     *
     * @param request - ModifyMaskingRulesRequest
     * @returns ModifyMaskingRulesResponse
     */
    modifyMaskingRules(request: $_model.ModifyMaskingRulesRequest): Promise<$_model.ModifyMaskingRulesResponse>;
    /**
     * Modifies a model API.
     *
     * @param request - ModifyModelApiRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyModelApiResponse
     */
    modifyModelApiWithOptions(request: $_model.ModifyModelApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyModelApiResponse>;
    /**
     * Modifies a model API.
     *
     * @param request - ModifyModelApiRequest
     * @returns ModifyModelApiResponse
     */
    modifyModelApi(request: $_model.ModifyModelApiRequest): Promise<$_model.ModifyModelApiResponse>;
    /**
     * Modifies a model service.
     *
     * @param request - ModifyModelServiceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyModelServiceResponse
     */
    modifyModelServiceWithOptions(request: $_model.ModifyModelServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyModelServiceResponse>;
    /**
     * Modifies a model service.
     *
     * @param request - ModifyModelServiceRequest
     * @returns ModifyModelServiceResponse
     */
    modifyModelService(request: $_model.ModifyModelServiceRequest): Promise<$_model.ModifyModelServiceResponse>;
    /**
     * Modifies the switching time of a pending event.
     *
     * @param request - ModifyPendingMaintenanceActionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyPendingMaintenanceActionResponse
     */
    modifyPendingMaintenanceActionWithOptions(request: $_model.ModifyPendingMaintenanceActionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPendingMaintenanceActionResponse>;
    /**
     * Modifies the switching time of a pending event.
     *
     * @param request - ModifyPendingMaintenanceActionRequest
     * @returns ModifyPendingMaintenanceActionResponse
     */
    modifyPendingMaintenanceAction(request: $_model.ModifyPendingMaintenanceActionRequest): Promise<$_model.ModifyPendingMaintenanceActionResponse>;
    /**
     * Modifies a PolarClaw skill.
     *
     * @remarks
     * > You can also modify the automatic backup policy of a PolarDB cluster in the console. For more information, see [Backup settings](https://help.aliyun.com/document_detail/280422.html).
     *
     * @param request - ModifyPolarClawSkillRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyPolarClawSkillResponse
     */
    modifyPolarClawSkillWithOptions(request: $_model.ModifyPolarClawSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPolarClawSkillResponse>;
    /**
     * Modifies a PolarClaw skill.
     *
     * @remarks
     * > You can also modify the automatic backup policy of a PolarDB cluster in the console. For more information, see [Backup settings](https://help.aliyun.com/document_detail/280422.html).
     *
     * @param request - ModifyPolarClawSkillRequest
     * @returns ModifyPolarClawSkillResponse
     */
    modifyPolarClawSkill(request: $_model.ModifyPolarClawSkillRequest): Promise<$_model.ModifyPolarClawSkillResponse>;
    /**
     * Modifies the PolarFs configuration.
     *
     * @param request - ModifyPolarFsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyPolarFsResponse
     */
    modifyPolarFsWithOptions(request: $_model.ModifyPolarFsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPolarFsResponse>;
    /**
     * Modifies the PolarFs configuration.
     *
     * @param request - ModifyPolarFsRequest
     * @returns ModifyPolarFsResponse
     */
    modifyPolarFs(request: $_model.ModifyPolarFsRequest): Promise<$_model.ModifyPolarFsResponse>;
    /**
     * Modifies the description of a PolarFS instance.
     *
     * @param request - ModifyPolarFsInstanceDescriptionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyPolarFsInstanceDescriptionResponse
     */
    modifyPolarFsInstanceDescriptionWithOptions(request: $_model.ModifyPolarFsInstanceDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPolarFsInstanceDescriptionResponse>;
    /**
     * Modifies the description of a PolarFS instance.
     *
     * @param request - ModifyPolarFsInstanceDescriptionRequest
     * @returns ModifyPolarFsInstanceDescriptionResponse
     */
    modifyPolarFsInstanceDescription(request: $_model.ModifyPolarFsInstanceDescriptionRequest): Promise<$_model.ModifyPolarFsInstanceDescriptionResponse>;
    /**
     * Modifies the bucket credentials for a PolarFS path mapping.
     *
     * @param request - ModifyPolarFsMappingAuthRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyPolarFsMappingAuthResponse
     */
    modifyPolarFsMappingAuthWithOptions(request: $_model.ModifyPolarFsMappingAuthRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPolarFsMappingAuthResponse>;
    /**
     * Modifies the bucket credentials for a PolarFS path mapping.
     *
     * @param request - ModifyPolarFsMappingAuthRequest
     * @returns ModifyPolarFsMappingAuthResponse
     */
    modifyPolarFsMappingAuth(request: $_model.ModifyPolarFsMappingAuthRequest): Promise<$_model.ModifyPolarFsMappingAuthResponse>;
    /**
     * Modifies a throttling policy.
     *
     * @param request - ModifyRateLimitPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyRateLimitPolicyResponse
     */
    modifyRateLimitPolicyWithOptions(request: $_model.ModifyRateLimitPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRateLimitPolicyResponse>;
    /**
     * Modifies a throttling policy.
     *
     * @param request - ModifyRateLimitPolicyRequest
     * @returns ModifyRateLimitPolicyResponse
     */
    modifyRateLimitPolicy(request: $_model.ModifyRateLimitPolicyRequest): Promise<$_model.ModifyRateLimitPolicyResponse>;
    /**
     * Modifies the CPU quota of an existing resource control rule in a specified PolarDB for MySQL cluster. You can modify the current quota value or switch between the maximum CPU quota percentage mode and the maximum CPU core count mode. When modifying the rule, you must specify either MaxCpu or CpuCount, but not both.
     *
     * @remarks
     * Resource Control is used to limit the CPU resources available to specified users, databases, queries, or connections in a PolarDB for MySQL cluster. This release supports creating, modifying, deleting, binding, and unbinding resource control rules, but does not support querying Resource Control CPU utilization.
     * ### Limits
     * - Applies only to PolarDB for MySQL Cluster Edition clusters that support Resource Control. PolarDB for MySQL Standard Edition is not supported.
     * - The cluster kernel parameter loose_enable_resource_control must be set to ON.
     * - MaxCpu and CpuCount are two mutually exclusive CPU quota modes.
     * - The maximum value of CpuCount is determined by the resource_control_cpu_count_limit kernel parameter of the target cluster.
     * >Notice: This is a notice.</notice>
     *
     * @param request - ModifyResourceControlRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyResourceControlResponse
     */
    modifyResourceControlWithOptions(request: $_model.ModifyResourceControlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyResourceControlResponse>;
    /**
     * Modifies the CPU quota of an existing resource control rule in a specified PolarDB for MySQL cluster. You can modify the current quota value or switch between the maximum CPU quota percentage mode and the maximum CPU core count mode. When modifying the rule, you must specify either MaxCpu or CpuCount, but not both.
     *
     * @remarks
     * Resource Control is used to limit the CPU resources available to specified users, databases, queries, or connections in a PolarDB for MySQL cluster. This release supports creating, modifying, deleting, binding, and unbinding resource control rules, but does not support querying Resource Control CPU utilization.
     * ### Limits
     * - Applies only to PolarDB for MySQL Cluster Edition clusters that support Resource Control. PolarDB for MySQL Standard Edition is not supported.
     * - The cluster kernel parameter loose_enable_resource_control must be set to ON.
     * - MaxCpu and CpuCount are two mutually exclusive CPU quota modes.
     * - The maximum value of CpuCount is determined by the resource_control_cpu_count_limit kernel parameter of the target cluster.
     * >Notice: This is a notice.</notice>
     *
     * @param request - ModifyResourceControlRequest
     * @returns ModifyResourceControlResponse
     */
    modifyResourceControl(request: $_model.ModifyResourceControlRequest): Promise<$_model.ModifyResourceControlResponse>;
    /**
     * Modifies a cross-cloud resource plan.
     *
     * @param request - ModifyResourcePackageRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyResourcePackageResponse
     */
    modifyResourcePackageWithOptions(request: $_model.ModifyResourcePackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyResourcePackageResponse>;
    /**
     * Modifies a cross-cloud resource plan.
     *
     * @param request - ModifyResourcePackageRequest
     * @returns ModifyResourcePackageResponse
     */
    modifyResourcePackage(request: $_model.ModifyResourcePackageRequest): Promise<$_model.ModifyResourcePackageResponse>;
    /**
     * Modifies SQL throttling rules.
     *
     * @param request - ModifySQLRateLimitingRulesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifySQLRateLimitingRulesResponse
     */
    modifySQLRateLimitingRulesWithOptions(request: $_model.ModifySQLRateLimitingRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySQLRateLimitingRulesResponse>;
    /**
     * Modifies SQL throttling rules.
     *
     * @param request - ModifySQLRateLimitingRulesRequest
     * @returns ModifySQLRateLimitingRulesResponse
     */
    modifySQLRateLimitingRules(request: $_model.ModifySQLRateLimitingRulesRequest): Promise<$_model.ModifySQLRateLimitingRulesResponse>;
    /**
     * Modifies the specified scheduled task.
     *
     * @param request - ModifyScheduleTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyScheduleTaskResponse
     */
    modifyScheduleTaskWithOptions(request: $_model.ModifyScheduleTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyScheduleTaskResponse>;
    /**
     * Modifies the specified scheduled task.
     *
     * @param request - ModifyScheduleTaskRequest
     * @returns ModifyScheduleTaskResponse
     */
    modifyScheduleTask(request: $_model.ModifyScheduleTaskRequest): Promise<$_model.ModifyScheduleTaskResponse>;
    /**
     * Modifies the parameters of a PolarDB Search cluster.
     *
     * @param request - ModifySearchParametersRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifySearchParametersResponse
     */
    modifySearchParametersWithOptions(request: $_model.ModifySearchParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySearchParametersResponse>;
    /**
     * Modifies the parameters of a PolarDB Search cluster.
     *
     * @param request - ModifySearchParametersRequest
     * @returns ModifySearchParametersResponse
     */
    modifySearchParameters(request: $_model.ModifySearchParametersRequest): Promise<$_model.ModifySearchParametersResponse>;
    /**
     * Modifies the IP address whitelist of a specified PolarDB cluster.
     *
     * @param request - ModifySecurityIpsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifySecurityIpsResponse
     */
    modifySecurityIpsWithOptions(request: $_model.ModifySecurityIpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySecurityIpsResponse>;
    /**
     * Modifies the IP address whitelist of a specified PolarDB cluster.
     *
     * @param request - ModifySecurityIpsRequest
     * @returns ModifySecurityIpsResponse
     */
    modifySecurityIps(request: $_model.ModifySecurityIpsRequest): Promise<$_model.ModifySecurityIpsResponse>;
    /**
     * Updates task information in the task center.
     *
     * @param request - ModifyTaskInfoRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyTaskInfoResponse
     */
    modifyTaskInfoWithOptions(request: $_model.ModifyTaskInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTaskInfoResponse>;
    /**
     * Updates task information in the task center.
     *
     * @param request - ModifyTaskInfoRequest
     * @returns ModifyTaskInfoResponse
     */
    modifyTaskInfo(request: $_model.ModifyTaskInfoRequest): Promise<$_model.ModifyTaskInfoResponse>;
    /**
     * Renames or moves files in a PolarFs instance.
     *
     * @param request - MovePolarFsObjectsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns MovePolarFsObjectsResponse
     */
    movePolarFsObjectsWithOptions(request: $_model.MovePolarFsObjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MovePolarFsObjectsResponse>;
    /**
     * Renames or moves files in a PolarFs instance.
     *
     * @param request - MovePolarFsObjectsRequest
     * @returns MovePolarFsObjectsResponse
     */
    movePolarFsObjects(request: $_model.MovePolarFsObjectsRequest): Promise<$_model.MovePolarFsObjectsResponse>;
    /**
     * Enables the PolarDB for AI feature.
     *
     * @param request - OpenAITaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns OpenAITaskResponse
     */
    openAITaskWithOptions(request: $_model.OpenAITaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenAITaskResponse>;
    /**
     * Enables the PolarDB for AI feature.
     *
     * @param request - OpenAITaskRequest
     * @returns OpenAITaskResponse
     */
    openAITask(request: $_model.OpenAITaskRequest): Promise<$_model.OpenAITaskResponse>;
    /**
     * Restarts, pauses, or starts an application on a PolarDB instance without deleting the instance.
     *
     * @param request - OperateApplicationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns OperateApplicationResponse
     */
    operateApplicationWithOptions(request: $_model.OperateApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateApplicationResponse>;
    /**
     * Restarts, pauses, or starts an application on a PolarDB instance without deleting the instance.
     *
     * @param request - OperateApplicationRequest
     * @returns OperateApplicationResponse
     */
    operateApplication(request: $_model.OperateApplicationRequest): Promise<$_model.OperateApplicationResponse>;
    /**
     * Updates the PolarClaw configuration.
     *
     * @param tmpReq - PatchPolarClawConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns PatchPolarClawConfigResponse
     */
    patchPolarClawConfigWithOptions(tmpReq: $_model.PatchPolarClawConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PatchPolarClawConfigResponse>;
    /**
     * Updates the PolarClaw configuration.
     *
     * @param request - PatchPolarClawConfigRequest
     * @returns PatchPolarClawConfigResponse
     */
    patchPolarClawConfig(request: $_model.PatchPolarClawConfigRequest): Promise<$_model.PatchPolarClawConfigResponse>;
    /**
     * Reactivates the backup feature.
     *
     * @param request - ReactivateDBClusterBackupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ReactivateDBClusterBackupResponse
     */
    reactivateDBClusterBackupWithOptions(request: $_model.ReactivateDBClusterBackupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReactivateDBClusterBackupResponse>;
    /**
     * Reactivates the backup feature.
     *
     * @param request - ReactivateDBClusterBackupRequest
     * @returns ReactivateDBClusterBackupResponse
     */
    reactivateDBClusterBackup(request: $_model.ReactivateDBClusterBackupRequest): Promise<$_model.ReactivateDBClusterBackupResponse>;
    /**
     * Refreshes the storage usage for a cluster instance.
     *
     * @param request - RefreshDBClusterStorageUsageRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RefreshDBClusterStorageUsageResponse
     */
    refreshDBClusterStorageUsageWithOptions(request: $_model.RefreshDBClusterStorageUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshDBClusterStorageUsageResponse>;
    /**
     * Refreshes the storage usage for a cluster instance.
     *
     * @param request - RefreshDBClusterStorageUsageRequest
     * @returns RefreshDBClusterStorageUsageResponse
     */
    refreshDBClusterStorageUsage(request: $_model.RefreshDBClusterStorageUsageRequest): Promise<$_model.RefreshDBClusterStorageUsageResponse>;
    /**
     * Modifies the proxy performance level of a specified PolarDB cluster. You can schedule the execution time.
     *
     * @param request - RefreshProxyLevelRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RefreshProxyLevelResponse
     */
    refreshProxyLevelWithOptions(request: $_model.RefreshProxyLevelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshProxyLevelResponse>;
    /**
     * Modifies the proxy performance level of a specified PolarDB cluster. You can schedule the execution time.
     *
     * @param request - RefreshProxyLevelRequest
     * @returns RefreshProxyLevelResponse
     */
    refreshProxyLevel(request: $_model.RefreshProxyLevelRequest): Promise<$_model.RefreshProxyLevelResponse>;
    /**
     * Registers a custom model for an AI cluster.
     *
     * @param tmpReq - RegisterAIDBClusterCustomModelRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RegisterAIDBClusterCustomModelResponse
     */
    registerAIDBClusterCustomModelWithOptions(tmpReq: $_model.RegisterAIDBClusterCustomModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterAIDBClusterCustomModelResponse>;
    /**
     * Registers a custom model for an AI cluster.
     *
     * @param request - RegisterAIDBClusterCustomModelRequest
     * @returns RegisterAIDBClusterCustomModelResponse
     */
    registerAIDBClusterCustomModel(request: $_model.RegisterAIDBClusterCustomModelRequest): Promise<$_model.RegisterAIDBClusterCustomModelResponse>;
    /**
     * Registers an OSS file for a knowledge base.
     *
     * @param request - RegisterKnowledgeBaseFileRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RegisterKnowledgeBaseFileResponse
     */
    registerKnowledgeBaseFileWithOptions(request: $_model.RegisterKnowledgeBaseFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterKnowledgeBaseFileResponse>;
    /**
     * Registers an OSS file for a knowledge base.
     *
     * @param request - RegisterKnowledgeBaseFileRequest
     * @returns RegisterKnowledgeBaseFileResponse
     */
    registerKnowledgeBaseFile(request: $_model.RegisterKnowledgeBaseFileRequest): Promise<$_model.RegisterKnowledgeBaseFileResponse>;
    /**
     * Rejects a PolarClaw device pairing request.
     *
     * @param request - RejectPolarClawDevicePairRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RejectPolarClawDevicePairResponse
     */
    rejectPolarClawDevicePairWithOptions(request: $_model.RejectPolarClawDevicePairRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RejectPolarClawDevicePairResponse>;
    /**
     * Rejects a PolarClaw device pairing request.
     *
     * @param request - RejectPolarClawDevicePairRequest
     * @returns RejectPolarClawDevicePairResponse
     */
    rejectPolarClawDevicePair(request: $_model.RejectPolarClawDevicePairRequest): Promise<$_model.RejectPolarClawDevicePairResponse>;
    /**
     * Removes application environment variables. This operation supports only PolarClaw.
     *
     * @param tmpReq - RemoveApplicationEnvironmentVariablesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RemoveApplicationEnvironmentVariablesResponse
     */
    removeApplicationEnvironmentVariablesWithOptions(tmpReq: $_model.RemoveApplicationEnvironmentVariablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveApplicationEnvironmentVariablesResponse>;
    /**
     * Removes application environment variables. This operation supports only PolarClaw.
     *
     * @param request - RemoveApplicationEnvironmentVariablesRequest
     * @returns RemoveApplicationEnvironmentVariablesResponse
     */
    removeApplicationEnvironmentVariables(request: $_model.RemoveApplicationEnvironmentVariablesRequest): Promise<$_model.RemoveApplicationEnvironmentVariablesResponse>;
    /**
     * Removes a secondary cluster from a Global Database Network (GDN).
     *
     * @remarks
     * > The primary cluster in a GDN cannot be removed.
     *
     * @param request - RemoveDBClusterFromGDNRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RemoveDBClusterFromGDNResponse
     */
    removeDBClusterFromGDNWithOptions(request: $_model.RemoveDBClusterFromGDNRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveDBClusterFromGDNResponse>;
    /**
     * Removes a secondary cluster from a Global Database Network (GDN).
     *
     * @remarks
     * > The primary cluster in a GDN cannot be removed.
     *
     * @param request - RemoveDBClusterFromGDNRequest
     * @returns RemoveDBClusterFromGDNResponse
     */
    removeDBClusterFromGDN(request: $_model.RemoveDBClusterFromGDNRequest): Promise<$_model.RemoveDBClusterFromGDNResponse>;
    /**
     * Removes a paired PolarClaw device.
     *
     * @param request - RemovePolarClawDevicePairRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RemovePolarClawDevicePairResponse
     */
    removePolarClawDevicePairWithOptions(request: $_model.RemovePolarClawDevicePairRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemovePolarClawDevicePairResponse>;
    /**
     * Removes a paired PolarClaw device.
     *
     * @param request - RemovePolarClawDevicePairRequest
     * @returns RemovePolarClawDevicePairResponse
     */
    removePolarClawDevicePair(request: $_model.RemovePolarClawDevicePairRequest): Promise<$_model.RemovePolarClawDevicePairResponse>;
    /**
     * Deletes a PolarClaw MCP service.
     *
     * @param request - RemovePolarClawMCPServerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RemovePolarClawMCPServerResponse
     */
    removePolarClawMCPServerWithOptions(request: $_model.RemovePolarClawMCPServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemovePolarClawMCPServerResponse>;
    /**
     * Deletes a PolarClaw MCP service.
     *
     * @param request - RemovePolarClawMCPServerRequest
     * @returns RemovePolarClawMCPServerResponse
     */
    removePolarClawMCPServer(request: $_model.RemovePolarClawMCPServerRequest): Promise<$_model.RemovePolarClawMCPServerResponse>;
    /**
     * Resets the permissions of a privileged account for a PolarDB cluster.
     *
     * @remarks
     * > - Only PolarDB for MySQL clusters support this operation.
     * >
     * > - If the privileged account of your cluster encounters exceptions, you can reset the permissions by using this operation. For example, the permissions are accidentally revoked.
     *
     * @param request - ResetAccountRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ResetAccountResponse
     */
    resetAccountWithOptions(request: $_model.ResetAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetAccountResponse>;
    /**
     * Resets the permissions of a privileged account for a PolarDB cluster.
     *
     * @remarks
     * > - Only PolarDB for MySQL clusters support this operation.
     * >
     * > - If the privileged account of your cluster encounters exceptions, you can reset the permissions by using this operation. For example, the permissions are accidentally revoked.
     *
     * @param request - ResetAccountRequest
     * @returns ResetAccountResponse
     */
    resetAccount(request: $_model.ResetAccountRequest): Promise<$_model.ResetAccountResponse>;
    /**
     * Resets the password for a PolarDB database account.
     *
     * @param request - ResetAccountPasswordRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ResetAccountPasswordResponse
     */
    resetAccountPasswordWithOptions(request: $_model.ResetAccountPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetAccountPasswordResponse>;
    /**
     * Resets the password for a PolarDB database account.
     *
     * @param request - ResetAccountPasswordRequest
     * @returns ResetAccountPasswordResponse
     */
    resetAccountPassword(request: $_model.ResetAccountPasswordRequest): Promise<$_model.ResetAccountPasswordResponse>;
    /**
     * Resets an account in a PolarDB for Xscale cluster.
     *
     * @param request - ResetAccountZonalRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ResetAccountZonalResponse
     */
    resetAccountZonalWithOptions(request: $_model.ResetAccountZonalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetAccountZonalResponse>;
    /**
     * Resets an account in a PolarDB for Xscale cluster.
     *
     * @param request - ResetAccountZonalRequest
     * @returns ResetAccountZonalResponse
     */
    resetAccountZonal(request: $_model.ResetAccountZonalRequest): Promise<$_model.ResetAccountZonalResponse>;
    /**
     * Resets the API key of an AgenticDB tenant.
     *
     * @param request - ResetAgenticDBTenantApiKeyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ResetAgenticDBTenantApiKeyResponse
     */
    resetAgenticDBTenantApiKeyWithOptions(request: $_model.ResetAgenticDBTenantApiKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetAgenticDBTenantApiKeyResponse>;
    /**
     * Resets the API key of an AgenticDB tenant.
     *
     * @param request - ResetAgenticDBTenantApiKeyRequest
     * @returns ResetAgenticDBTenantApiKeyResponse
     */
    resetAgenticDBTenantApiKey(request: $_model.ResetAgenticDBTenantApiKeyRequest): Promise<$_model.ResetAgenticDBTenantApiKeyResponse>;
    /**
     * Resets the password of an application account.
     *
     * @remarks
     * > * Only privileged accounts of PolarDB for MySQL clusters can be reset.
     * > * If the privileged account encounters issues, such as unexpected permission revocation (REVOKE), you can reset the permissions of the privileged account to restore normal access.
     *
     * @param request - ResetApplicationAccountPasswordRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ResetApplicationAccountPasswordResponse
     */
    resetApplicationAccountPasswordWithOptions(request: $_model.ResetApplicationAccountPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetApplicationAccountPasswordResponse>;
    /**
     * Resets the password of an application account.
     *
     * @remarks
     * > * Only privileged accounts of PolarDB for MySQL clusters can be reset.
     * > * If the privileged account encounters issues, such as unexpected permission revocation (REVOKE), you can reset the permissions of the privileged account to restore normal access.
     *
     * @param request - ResetApplicationAccountPasswordRequest
     * @returns ResetApplicationAccountPasswordResponse
     */
    resetApplicationAccountPassword(request: $_model.ResetApplicationAccountPasswordRequest): Promise<$_model.ResetApplicationAccountPasswordResponse>;
    /**
     * Resets an API key.
     *
     * @param request - ResetConsumerApiKeyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ResetConsumerApiKeyResponse
     */
    resetConsumerApiKeyWithOptions(request: $_model.ResetConsumerApiKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetConsumerApiKeyResponse>;
    /**
     * Resets an API key.
     *
     * @param request - ResetConsumerApiKeyRequest
     * @returns ResetConsumerApiKeyResponse
     */
    resetConsumerApiKey(request: $_model.ResetConsumerApiKeyRequest): Promise<$_model.ResetConsumerApiKeyResponse>;
    /**
     * Resets the network of a secondary cluster in a Global Database Network (GDN).
     *
     * @param request - ResetGlobalDatabaseNetworkRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ResetGlobalDatabaseNetworkResponse
     */
    resetGlobalDatabaseNetworkWithOptions(request: $_model.ResetGlobalDatabaseNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetGlobalDatabaseNetworkResponse>;
    /**
     * Resets the network of a secondary cluster in a Global Database Network (GDN).
     *
     * @param request - ResetGlobalDatabaseNetworkRequest
     * @returns ResetGlobalDatabaseNetworkResponse
     */
    resetGlobalDatabaseNetwork(request: $_model.ResetGlobalDatabaseNetworkRequest): Promise<$_model.ResetGlobalDatabaseNetworkResponse>;
    /**
     * Adjusts the model capacity of an AI cluster.
     *
     * @param request - ResizeAIDBClusterModelRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ResizeAIDBClusterModelResponse
     */
    resizeAIDBClusterModelWithOptions(request: $_model.ResizeAIDBClusterModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResizeAIDBClusterModelResponse>;
    /**
     * Adjusts the model capacity of an AI cluster.
     *
     * @param request - ResizeAIDBClusterModelRequest
     * @returns ResizeAIDBClusterModelResponse
     */
    resizeAIDBClusterModel(request: $_model.ResizeAIDBClusterModelRequest): Promise<$_model.ResizeAIDBClusterModelResponse>;
    /**
     * Restarts an AI cluster.
     *
     * @param request - RestartAIDBClusterRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RestartAIDBClusterResponse
     */
    restartAIDBClusterWithOptions(request: $_model.RestartAIDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartAIDBClusterResponse>;
    /**
     * Restarts an AI cluster.
     *
     * @param request - RestartAIDBClusterRequest
     * @returns RestartAIDBClusterResponse
     */
    restartAIDBCluster(request: $_model.RestartAIDBClusterRequest): Promise<$_model.RestartAIDBClusterResponse>;
    /**
     * Restarts a specified PolarDB cluster.
     *
     * @param request - RestartDBClusterRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RestartDBClusterResponse
     */
    restartDBClusterWithOptions(request: $_model.RestartDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartDBClusterResponse>;
    /**
     * Restarts a specified PolarDB cluster.
     *
     * @param request - RestartDBClusterRequest
     * @returns RestartDBClusterResponse
     */
    restartDBCluster(request: $_model.RestartDBClusterRequest): Promise<$_model.RestartDBClusterResponse>;
    /**
     * Restarts database links.
     *
     * @param request - RestartDBLinkRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RestartDBLinkResponse
     */
    restartDBLinkWithOptions(request: $_model.RestartDBLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartDBLinkResponse>;
    /**
     * Restarts database links.
     *
     * @param request - RestartDBLinkRequest
     * @returns RestartDBLinkResponse
     */
    restartDBLink(request: $_model.RestartDBLinkRequest): Promise<$_model.RestartDBLinkResponse>;
    /**
     * Restarts a node of a PolarDB cluster.
     *
     * @param request - RestartDBNodeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RestartDBNodeResponse
     */
    restartDBNodeWithOptions(request: $_model.RestartDBNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartDBNodeResponse>;
    /**
     * Restarts a node of a PolarDB cluster.
     *
     * @param request - RestartDBNodeRequest
     * @returns RestartDBNodeResponse
     */
    restartDBNode(request: $_model.RestartDBNodeRequest): Promise<$_model.RestartDBNodeResponse>;
    /**
     * Restarts a node of an edge cluster for PolarDB on ENS.
     *
     * @param request - RestartDBNodeZonalRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RestartDBNodeZonalResponse
     */
    restartDBNodeZonalWithOptions(request: $_model.RestartDBNodeZonalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartDBNodeZonalResponse>;
    /**
     * Restarts a node of an edge cluster for PolarDB on ENS.
     *
     * @param request - RestartDBNodeZonalRequest
     * @returns RestartDBNodeZonalResponse
     */
    restartDBNodeZonal(request: $_model.RestartDBNodeZonalRequest): Promise<$_model.RestartDBNodeZonalResponse>;
    /**
     * Restarts a PolarClaw gateway.
     *
     * @param request - RestartPolarClawGatewayRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RestartPolarClawGatewayResponse
     */
    restartPolarClawGatewayWithOptions(request: $_model.RestartPolarClawGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartPolarClawGatewayResponse>;
    /**
     * Restarts a PolarClaw gateway.
     *
     * @param request - RestartPolarClawGatewayRequest
     * @returns RestartPolarClawGatewayResponse
     */
    restartPolarClawGateway(request: $_model.RestartPolarClawGatewayRequest): Promise<$_model.RestartPolarClawGatewayResponse>;
    /**
     * Restores a PolarDB application from a specified backup set.
     *
     * @param request - RestoreApplicationByBackupSetRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RestoreApplicationByBackupSetResponse
     */
    restoreApplicationByBackupSetWithOptions(request: $_model.RestoreApplicationByBackupSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestoreApplicationByBackupSetResponse>;
    /**
     * Restores a PolarDB application from a specified backup set.
     *
     * @param request - RestoreApplicationByBackupSetRequest
     * @returns RestoreApplicationByBackupSetResponse
     */
    restoreApplicationByBackupSet(request: $_model.RestoreApplicationByBackupSetRequest): Promise<$_model.RestoreApplicationByBackupSetResponse>;
    /**
     * Restores databases or tables to a PolarDB cluster.
     *
     * @param request - RestoreTableRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RestoreTableResponse
     */
    restoreTableWithOptions(request: $_model.RestoreTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestoreTableResponse>;
    /**
     * Restores databases or tables to a PolarDB cluster.
     *
     * @param request - RestoreTableRequest
     * @returns RestoreTableResponse
     */
    restoreTable(request: $_model.RestoreTableRequest): Promise<$_model.RestoreTableResponse>;
    /**
     * Searches a knowledge base.
     *
     * @param request - RetrievalKnowledgeBaseRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RetrievalKnowledgeBaseResponse
     */
    retrievalKnowledgeBaseWithOptions(request: $_model.RetrievalKnowledgeBaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RetrievalKnowledgeBaseResponse>;
    /**
     * Searches a knowledge base.
     *
     * @param request - RetrievalKnowledgeBaseRequest
     * @returns RetrievalKnowledgeBaseResponse
     */
    retrievalKnowledgeBase(request: $_model.RetrievalKnowledgeBaseRequest): Promise<$_model.RetrievalKnowledgeBaseResponse>;
    /**
     * Retries failed files in a knowledge base in batches.
     *
     * @param request - RetryKnowledgeBaseFilesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RetryKnowledgeBaseFilesResponse
     */
    retryKnowledgeBaseFilesWithOptions(request: $_model.RetryKnowledgeBaseFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RetryKnowledgeBaseFilesResponse>;
    /**
     * Retries failed files in a knowledge base in batches.
     *
     * @param request - RetryKnowledgeBaseFilesRequest
     * @returns RetryKnowledgeBaseFilesResponse
     */
    retryKnowledgeBaseFiles(request: $_model.RetryKnowledgeBaseFilesRequest): Promise<$_model.RetryKnowledgeBaseFilesResponse>;
    /**
     * Revokes access permissions on a database from a PolarDB standard account.
     *
     * @param request - RevokeAccountPrivilegeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RevokeAccountPrivilegeResponse
     */
    revokeAccountPrivilegeWithOptions(request: $_model.RevokeAccountPrivilegeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeAccountPrivilegeResponse>;
    /**
     * Revokes access permissions on a database from a PolarDB standard account.
     *
     * @param request - RevokeAccountPrivilegeRequest
     * @returns RevokeAccountPrivilegeResponse
     */
    revokeAccountPrivilege(request: $_model.RevokeAccountPrivilegeRequest): Promise<$_model.RevokeAccountPrivilegeResponse>;
    /**
     * Revokes account permissions.
     *
     * @param request - RevokeAccountPrivilegeZonalRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RevokeAccountPrivilegeZonalResponse
     */
    revokeAccountPrivilegeZonalWithOptions(request: $_model.RevokeAccountPrivilegeZonalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeAccountPrivilegeZonalResponse>;
    /**
     * Revokes account permissions.
     *
     * @param request - RevokeAccountPrivilegeZonalRequest
     * @returns RevokeAccountPrivilegeZonalResponse
     */
    revokeAccountPrivilegeZonal(request: $_model.RevokeAccountPrivilegeZonalRequest): Promise<$_model.RevokeAccountPrivilegeZonalResponse>;
    /**
     * Executes a PolarClaw scheduled task.
     *
     * @param request - RunPolarClawCronJobRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RunPolarClawCronJobResponse
     */
    runPolarClawCronJobWithOptions(request: $_model.RunPolarClawCronJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunPolarClawCronJobResponse>;
    /**
     * Executes a PolarClaw scheduled task.
     *
     * @param request - RunPolarClawCronJobRequest
     * @returns RunPolarClawCronJobResponse
     */
    runPolarClawCronJob(request: $_model.RunPolarClawCronJobRequest): Promise<$_model.RunPolarClawCronJobResponse>;
    /**
     * Retrieves memories.
     *
     * @remarks
     * Retrieves memory data in a specified application.
     *
     * @param request - SearchMemoriesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SearchMemoriesResponse
     */
    searchMemoriesWithOptions(request: $_model.SearchMemoriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchMemoriesResponse>;
    /**
     * Retrieves memories.
     *
     * @remarks
     * Retrieves memory data in a specified application.
     *
     * @param request - SearchMemoriesRequest
     * @returns SearchMemoriesResponse
     */
    searchMemories(request: $_model.SearchMemoriesRequest): Promise<$_model.SearchMemoriesResponse>;
    /**
     * Searches for PolarClaw skills.
     *
     * @param request - SearchPolarClawSkillsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SearchPolarClawSkillsResponse
     */
    searchPolarClawSkillsWithOptions(request: $_model.SearchPolarClawSkillsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchPolarClawSkillsResponse>;
    /**
     * Searches for PolarClaw skills.
     *
     * @param request - SearchPolarClawSkillsRequest
     * @returns SearchPolarClawSkillsResponse
     */
    searchPolarClawSkills(request: $_model.SearchPolarClawSkillsRequest): Promise<$_model.SearchPolarClawSkillsResponse>;
    /**
     * Sets file quota rules for a specified directory in a Polarlakebase instance.
     *
     * @remarks
     * ## Request description
     * This operation sets file quota rules for a specific directory in a Polarlakebase instance. By configuring the `FilePathQuotas` parameter, you can specify the directories to which quota rules are applied and their related attributes. When you use `FilePathId` to specify a directory, ensure that the path is an absolute path from the root directory rather than a mount point path. You can also use the `Strategy` parameter to control how rules take effect on existing files. By default, rules take effect only when they are missing.
     * ### Notes
     * - The maximum length of the `FilePathQuotas` list is 21.
     * - To apply rules to multiple levels of subdirectories under `FilePathId`, set the `MaxDepth` parameter. To traverse to the deepest level, set this value to 0.
     *
     * @param request - SetPolarFsFileQuotaRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SetPolarFsFileQuotaResponse
     */
    setPolarFsFileQuotaWithOptions(request: $_model.SetPolarFsFileQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetPolarFsFileQuotaResponse>;
    /**
     * Sets file quota rules for a specified directory in a Polarlakebase instance.
     *
     * @remarks
     * ## Request description
     * This operation sets file quota rules for a specific directory in a Polarlakebase instance. By configuring the `FilePathQuotas` parameter, you can specify the directories to which quota rules are applied and their related attributes. When you use `FilePathId` to specify a directory, ensure that the path is an absolute path from the root directory rather than a mount point path. You can also use the `Strategy` parameter to control how rules take effect on existing files. By default, rules take effect only when they are missing.
     * ### Notes
     * - The maximum length of the `FilePathQuotas` list is 21.
     * - To apply rules to multiple levels of subdirectories under `FilePathId`, set the `MaxDepth` parameter. To traverse to the deepest level, set this value to 0.
     *
     * @param request - SetPolarFsFileQuotaRequest
     * @returns SetPolarFsFileQuotaResponse
     */
    setPolarFsFileQuota(request: $_model.SetPolarFsFileQuotaRequest): Promise<$_model.SetPolarFsFileQuotaResponse>;
    /**
     * Switches over the primary and secondary clusters in a global database network (GDN).
     *
     * @param request - SwitchOverGlobalDatabaseNetworkRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SwitchOverGlobalDatabaseNetworkResponse
     */
    switchOverGlobalDatabaseNetworkWithOptions(request: $_model.SwitchOverGlobalDatabaseNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchOverGlobalDatabaseNetworkResponse>;
    /**
     * Switches over the primary and secondary clusters in a global database network (GDN).
     *
     * @param request - SwitchOverGlobalDatabaseNetworkRequest
     * @returns SwitchOverGlobalDatabaseNetworkResponse
     */
    switchOverGlobalDatabaseNetwork(request: $_model.SwitchOverGlobalDatabaseNetworkRequest): Promise<$_model.SwitchOverGlobalDatabaseNetworkResponse>;
    /**
     * Adds tags to an instance.
     *
     * @param request - TagResourcesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns TagResourcesResponse
     */
    tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse>;
    /**
     * Adds tags to an instance.
     *
     * @param request - TagResourcesRequest
     * @returns TagResourcesResponse
     */
    tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse>;
    /**
     * Temporarily changes the specifications of a cluster.
     *
     * @param request - TempModifyDBNodeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns TempModifyDBNodeResponse
     */
    tempModifyDBNodeWithOptions(request: $_model.TempModifyDBNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TempModifyDBNodeResponse>;
    /**
     * Temporarily changes the specifications of a cluster.
     *
     * @param request - TempModifyDBNodeRequest
     * @returns TempModifyDBNodeResponse
     */
    tempModifyDBNode(request: $_model.TempModifyDBNodeRequest): Promise<$_model.TempModifyDBNodeResponse>;
    /**
     * Changes the billing method of a PolarDB cluster.
     *
     * @remarks
     * > - PolarDB clusters support the subscription and pay-as-you-go billing methods. You can switch from subscription to pay-as-you-go or from pay-as-you-go to subscription based on your business requirements. For more information, see [Switch from subscription to pay-as-you-go](https://help.aliyun.com/document_detail/172886.html) and [Switch from pay-as-you-go to subscription](https://help.aliyun.com/document_detail/84076.html).
     * >- If your Alibaba Cloud account balance is insufficient, the pay-as-you-go billing method cannot be switched to subscription.
     * >- When you switch from subscription to pay-as-you-go, the system automatically refunds the remaining balance of the fees that you have paid.
     *
     * @param request - TransformDBClusterPayTypeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns TransformDBClusterPayTypeResponse
     */
    transformDBClusterPayTypeWithOptions(request: $_model.TransformDBClusterPayTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TransformDBClusterPayTypeResponse>;
    /**
     * Changes the billing method of a PolarDB cluster.
     *
     * @remarks
     * > - PolarDB clusters support the subscription and pay-as-you-go billing methods. You can switch from subscription to pay-as-you-go or from pay-as-you-go to subscription based on your business requirements. For more information, see [Switch from subscription to pay-as-you-go](https://help.aliyun.com/document_detail/172886.html) and [Switch from pay-as-you-go to subscription](https://help.aliyun.com/document_detail/84076.html).
     * >- If your Alibaba Cloud account balance is insufficient, the pay-as-you-go billing method cannot be switched to subscription.
     * >- When you switch from subscription to pay-as-you-go, the system automatically refunds the remaining balance of the fees that you have paid.
     *
     * @param request - TransformDBClusterPayTypeRequest
     * @returns TransformDBClusterPayTypeResponse
     */
    transformDBClusterPayType(request: $_model.TransformDBClusterPayTypeRequest): Promise<$_model.TransformDBClusterPayTypeResponse>;
    /**
     * Triggers knowledge base synchronization.
     *
     * @param request - TriggerKnowledgeBaseSyncRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns TriggerKnowledgeBaseSyncResponse
     */
    triggerKnowledgeBaseSyncWithOptions(request: $_model.TriggerKnowledgeBaseSyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TriggerKnowledgeBaseSyncResponse>;
    /**
     * Triggers knowledge base synchronization.
     *
     * @param request - TriggerKnowledgeBaseSyncRequest
     * @returns TriggerKnowledgeBaseSyncResponse
     */
    triggerKnowledgeBaseSync(request: $_model.TriggerKnowledgeBaseSyncRequest): Promise<$_model.TriggerKnowledgeBaseSyncResponse>;
    /**
     * Disassociates a PolarClaw agent.
     *
     * @remarks
     * ## Request description
     * Before calling this operation, use BindPolarClawAgent to establish a binding for the specified application, agent, and channel. This operation uses the same ApplicationId, AgentId, and Channel to remove the binding.
     *
     * @param request - UnbindPolarClawAgentRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UnbindPolarClawAgentResponse
     */
    unbindPolarClawAgentWithOptions(request: $_model.UnbindPolarClawAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindPolarClawAgentResponse>;
    /**
     * Disassociates a PolarClaw agent.
     *
     * @remarks
     * ## Request description
     * Before calling this operation, use BindPolarClawAgent to establish a binding for the specified application, agent, and channel. This operation uses the same ApplicationId, AgentId, and Channel to remove the binding.
     *
     * @param request - UnbindPolarClawAgentRequest
     * @returns UnbindPolarClawAgentResponse
     */
    unbindPolarClawAgent(request: $_model.UnbindPolarClawAgentRequest): Promise<$_model.UnbindPolarClawAgentResponse>;
    /**
     * Unbinds a specified resource control rule from a user, database, query, or connection in a PolarDB for MySQL cluster. After the unbinding is successful, the resource control rule no longer limits the CPU quota of the corresponding target object.
     *
     * @remarks
     * Resource Control is used to limit the CPU resources that can be used by a specified user, database, query, or connection in a PolarDB for MySQL cluster. This release provides the capabilities to create, modify, delete, attach, and unbind resource control rules. It does not provide the capability to query Resource Control CPU usage.
     * ### Before you begin
     * - This operation applies only to PolarDB for MySQL Cluster Edition clusters that support Resource Control. PolarDB for MySQL Standard Edition is not supported.
     * - The cluster kernel parameter loose_enable_resource_control must be set to ON.
     * >Notice: This is a notice.</notice>
     *
     * @param request - UnbindResourceControlRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UnbindResourceControlResponse
     */
    unbindResourceControlWithOptions(request: $_model.UnbindResourceControlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindResourceControlResponse>;
    /**
     * Unbinds a specified resource control rule from a user, database, query, or connection in a PolarDB for MySQL cluster. After the unbinding is successful, the resource control rule no longer limits the CPU quota of the corresponding target object.
     *
     * @remarks
     * Resource Control is used to limit the CPU resources that can be used by a specified user, database, query, or connection in a PolarDB for MySQL cluster. This release provides the capabilities to create, modify, delete, attach, and unbind resource control rules. It does not provide the capability to query Resource Control CPU usage.
     * ### Before you begin
     * - This operation applies only to PolarDB for MySQL Cluster Edition clusters that support Resource Control. PolarDB for MySQL Standard Edition is not supported.
     * - The cluster kernel parameter loose_enable_resource_control must be set to ON.
     * >Notice: This is a notice.</notice>
     *
     * @param request - UnbindResourceControlRequest
     * @returns UnbindResourceControlResponse
     */
    unbindResourceControl(request: $_model.UnbindResourceControlRequest): Promise<$_model.UnbindResourceControlResponse>;
    /**
     * Uninstalls the PolarClaw plugin.
     *
     * @param request - UninstallPolarClawPluginRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UninstallPolarClawPluginResponse
     */
    uninstallPolarClawPluginWithOptions(request: $_model.UninstallPolarClawPluginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UninstallPolarClawPluginResponse>;
    /**
     * Uninstalls the PolarClaw plugin.
     *
     * @param request - UninstallPolarClawPluginRequest
     * @returns UninstallPolarClawPluginResponse
     */
    uninstallPolarClawPlugin(request: $_model.UninstallPolarClawPluginRequest): Promise<$_model.UninstallPolarClawPluginResponse>;
    /**
     * Uninstalls a PolarClaw skill.
     *
     * @remarks
     * ## Request description
     * - PolarFsInstanceId is required to identify the Polarlakebase instance to operate.
     * - The FilePathIds parameter is also required. It accepts a list of file path IDs in string format, which correspond to the specific file paths whose quota rules are to be deleted. Ensure that each provided ID is valid and belongs to the specified Polarlakebase instance.
     * - A single API call can process quota deletion requests for multiple file paths. However, control the request size to avoid performance issues.
     *
     * @param request - UninstallPolarClawSkillsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UninstallPolarClawSkillsResponse
     */
    uninstallPolarClawSkillsWithOptions(request: $_model.UninstallPolarClawSkillsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UninstallPolarClawSkillsResponse>;
    /**
     * Uninstalls a PolarClaw skill.
     *
     * @remarks
     * ## Request description
     * - PolarFsInstanceId is required to identify the Polarlakebase instance to operate.
     * - The FilePathIds parameter is also required. It accepts a list of file path IDs in string format, which correspond to the specific file paths whose quota rules are to be deleted. Ensure that each provided ID is valid and belongs to the specified Polarlakebase instance.
     * - A single API call can process quota deletion requests for multiple file paths. However, control the request size to avoid performance issues.
     *
     * @param request - UninstallPolarClawSkillsRequest
     * @returns UninstallPolarClawSkillsResponse
     */
    uninstallPolarClawSkills(request: $_model.UninstallPolarClawSkillsRequest): Promise<$_model.UninstallPolarClawSkillsResponse>;
    /**
     * Removes tags from one or more PolarDB clusters.
     *
     * @param request - UntagResourcesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UntagResourcesResponse
     */
    untagResourcesWithOptions(request: $_model.UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse>;
    /**
     * Removes tags from one or more PolarDB clusters.
     *
     * @param request - UntagResourcesRequest
     * @returns UntagResourcesResponse
     */
    untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse>;
    /**
     * Updates the environment variables of an application. This operation is only supported for PolarClaw.
     *
     * @param tmpReq - UpdateApplicationEnvironmentVariablesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateApplicationEnvironmentVariablesResponse
     */
    updateApplicationEnvironmentVariablesWithOptions(tmpReq: $_model.UpdateApplicationEnvironmentVariablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApplicationEnvironmentVariablesResponse>;
    /**
     * Updates the environment variables of an application. This operation is only supported for PolarClaw.
     *
     * @param request - UpdateApplicationEnvironmentVariablesRequest
     * @returns UpdateApplicationEnvironmentVariablesResponse
     */
    updateApplicationEnvironmentVariables(request: $_model.UpdateApplicationEnvironmentVariablesRequest): Promise<$_model.UpdateApplicationEnvironmentVariablesResponse>;
    /**
     * Updates one or more extensions.
     *
     * @param request - UpdateExtensionsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateExtensionsResponse
     */
    updateExtensionsWithOptions(request: $_model.UpdateExtensionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateExtensionsResponse>;
    /**
     * Updates one or more extensions.
     *
     * @param request - UpdateExtensionsRequest
     * @returns UpdateExtensionsResponse
     */
    updateExtensions(request: $_model.UpdateExtensionsRequest): Promise<$_model.UpdateExtensionsResponse>;
    /**
     * Updates the synchronization link for a knowledge base.
     *
     * @param request - UpdateKBSyncLinkRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateKBSyncLinkResponse
     */
    updateKBSyncLinkWithOptions(request: $_model.UpdateKBSyncLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateKBSyncLinkResponse>;
    /**
     * Updates the synchronization link for a knowledge base.
     *
     * @param request - UpdateKBSyncLinkRequest
     * @returns UpdateKBSyncLinkResponse
     */
    updateKBSyncLink(request: $_model.UpdateKBSyncLinkRequest): Promise<$_model.UpdateKBSyncLinkResponse>;
    /**
     * Updates a knowledge base.
     *
     * @param request - UpdateKnowledgeBaseRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateKnowledgeBaseResponse
     */
    updateKnowledgeBaseWithOptions(request: $_model.UpdateKnowledgeBaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateKnowledgeBaseResponse>;
    /**
     * Updates a knowledge base.
     *
     * @param request - UpdateKnowledgeBaseRequest
     * @returns UpdateKnowledgeBaseResponse
     */
    updateKnowledgeBase(request: $_model.UpdateKnowledgeBaseRequest): Promise<$_model.UpdateKnowledgeBaseResponse>;
    /**
     * Updates the chunking strategy for a file in a knowledge base.
     *
     * @param tmpReq - UpdateKnowledgeBaseFileShardingStrategyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateKnowledgeBaseFileShardingStrategyResponse
     */
    updateKnowledgeBaseFileShardingStrategyWithOptions(tmpReq: $_model.UpdateKnowledgeBaseFileShardingStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateKnowledgeBaseFileShardingStrategyResponse>;
    /**
     * Updates the chunking strategy for a file in a knowledge base.
     *
     * @param request - UpdateKnowledgeBaseFileShardingStrategyRequest
     * @returns UpdateKnowledgeBaseFileShardingStrategyResponse
     */
    updateKnowledgeBaseFileShardingStrategy(request: $_model.UpdateKnowledgeBaseFileShardingStrategyRequest): Promise<$_model.UpdateKnowledgeBaseFileShardingStrategyResponse>;
    /**
     * Updates a knowledge space.
     *
     * @param tmpReq - UpdateKnowledgeSpaceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateKnowledgeSpaceResponse
     */
    updateKnowledgeSpaceWithOptions(tmpReq: $_model.UpdateKnowledgeSpaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateKnowledgeSpaceResponse>;
    /**
     * Updates a knowledge space.
     *
     * @param request - UpdateKnowledgeSpaceRequest
     * @returns UpdateKnowledgeSpaceResponse
     */
    updateKnowledgeSpace(request: $_model.UpdateKnowledgeSpaceRequest): Promise<$_model.UpdateKnowledgeSpaceResponse>;
    /**
     * Updates a PolarClaw agent.
     *
     * @param tmpReq - UpdatePolarClawAgentRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdatePolarClawAgentResponse
     */
    updatePolarClawAgentWithOptions(tmpReq: $_model.UpdatePolarClawAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePolarClawAgentResponse>;
    /**
     * Updates a PolarClaw agent.
     *
     * @param request - UpdatePolarClawAgentRequest
     * @returns UpdatePolarClawAgentResponse
     */
    updatePolarClawAgent(request: $_model.UpdatePolarClawAgentRequest): Promise<$_model.UpdatePolarClawAgentResponse>;
    /**
     * Updates the skills of a PolarClaw agent.
     *
     * @param tmpReq - UpdatePolarClawAgentSkillsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdatePolarClawAgentSkillsResponse
     */
    updatePolarClawAgentSkillsWithOptions(tmpReq: $_model.UpdatePolarClawAgentSkillsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePolarClawAgentSkillsResponse>;
    /**
     * Updates the skills of a PolarClaw agent.
     *
     * @param request - UpdatePolarClawAgentSkillsRequest
     * @returns UpdatePolarClawAgentSkillsResponse
     */
    updatePolarClawAgentSkills(request: $_model.UpdatePolarClawAgentSkillsRequest): Promise<$_model.UpdatePolarClawAgentSkillsResponse>;
    /**
     * Updates the tool configuration of a PolarClaw Agent.
     *
     * @param tmpReq - UpdatePolarClawAgentToolsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdatePolarClawAgentToolsResponse
     */
    updatePolarClawAgentToolsWithOptions(tmpReq: $_model.UpdatePolarClawAgentToolsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePolarClawAgentToolsResponse>;
    /**
     * Updates the tool configuration of a PolarClaw Agent.
     *
     * @param request - UpdatePolarClawAgentToolsRequest
     * @returns UpdatePolarClawAgentToolsResponse
     */
    updatePolarClawAgentTools(request: $_model.UpdatePolarClawAgentToolsRequest): Promise<$_model.UpdatePolarClawAgentToolsResponse>;
    /**
     * Updates the configuration of a PolarClaw scheduled task, allowing for partial field updates.
     *
     * @param tmpReq - UpdatePolarClawCronJobRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdatePolarClawCronJobResponse
     */
    updatePolarClawCronJobWithOptions(tmpReq: $_model.UpdatePolarClawCronJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePolarClawCronJobResponse>;
    /**
     * Updates the configuration of a PolarClaw scheduled task, allowing for partial field updates.
     *
     * @param request - UpdatePolarClawCronJobRequest
     * @returns UpdatePolarClawCronJobResponse
     */
    updatePolarClawCronJob(request: $_model.UpdatePolarClawCronJobRequest): Promise<$_model.UpdatePolarClawCronJobResponse>;
    /**
     * Updates the PolarClaw skill configuration.
     *
     * @param tmpReq - UpdatePolarClawSkillRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdatePolarClawSkillResponse
     */
    updatePolarClawSkillWithOptions(tmpReq: $_model.UpdatePolarClawSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePolarClawSkillResponse>;
    /**
     * Updates the PolarClaw skill configuration.
     *
     * @param request - UpdatePolarClawSkillRequest
     * @returns UpdatePolarClawSkillResponse
     */
    updatePolarClawSkill(request: $_model.UpdatePolarClawSkillRequest): Promise<$_model.UpdatePolarClawSkillResponse>;
    /**
     * Upgrades an application to a new version.
     *
     * @param request - UpgradeApplicationVersionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpgradeApplicationVersionResponse
     */
    upgradeApplicationVersionWithOptions(request: $_model.UpgradeApplicationVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeApplicationVersionResponse>;
    /**
     * Upgrades an application to a new version.
     *
     * @param request - UpgradeApplicationVersionRequest
     * @returns UpgradeApplicationVersionResponse
     */
    upgradeApplicationVersion(request: $_model.UpgradeApplicationVersionRequest): Promise<$_model.UpgradeApplicationVersionResponse>;
    /**
     * Upgrades the kernel version of a PolarDB for MySQL cluster.
     *
     * @remarks
     * > *  You can update only the revision version of a PolarDB for MySQL cluster, for example, from 8.0.1.1.3 to 8.0.1.1.4.
     * >*   You can use only your Alibaba Cloud account to create scheduled tasks that update the kernel version of a PolarDB for MySQL cluster. RAM users are not authorized to update the kernel version of a PolarDB for MySQL cluster.
     *
     * @param request - UpgradeDBClusterVersionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpgradeDBClusterVersionResponse
     */
    upgradeDBClusterVersionWithOptions(request: $_model.UpgradeDBClusterVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeDBClusterVersionResponse>;
    /**
     * Upgrades the kernel version of a PolarDB for MySQL cluster.
     *
     * @remarks
     * > *  You can update only the revision version of a PolarDB for MySQL cluster, for example, from 8.0.1.1.3 to 8.0.1.1.4.
     * >*   You can use only your Alibaba Cloud account to create scheduled tasks that update the kernel version of a PolarDB for MySQL cluster. RAM users are not authorized to update the kernel version of a PolarDB for MySQL cluster.
     *
     * @param request - UpgradeDBClusterVersionRequest
     * @returns UpgradeDBClusterVersionResponse
     */
    upgradeDBClusterVersion(request: $_model.UpgradeDBClusterVersionRequest): Promise<$_model.UpgradeDBClusterVersionResponse>;
    /**
     * Upgrades the minor version of a PolarDB cluster.
     *
     * @param request - UpgradeDBClusterVersionZonalRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpgradeDBClusterVersionZonalResponse
     */
    upgradeDBClusterVersionZonalWithOptions(request: $_model.UpgradeDBClusterVersionZonalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeDBClusterVersionZonalResponse>;
    /**
     * Upgrades the minor version of a PolarDB cluster.
     *
     * @param request - UpgradeDBClusterVersionZonalRequest
     * @returns UpgradeDBClusterVersionZonalResponse
     */
    upgradeDBClusterVersionZonal(request: $_model.UpgradeDBClusterVersionZonalRequest): Promise<$_model.UpgradeDBClusterVersionZonalResponse>;
    /**
     * Upgrades a PolarClaw channel.
     *
     * @param tmpReq - UpgradePolarClawChannelRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpgradePolarClawChannelResponse
     */
    upgradePolarClawChannelWithOptions(tmpReq: $_model.UpgradePolarClawChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradePolarClawChannelResponse>;
    /**
     * Upgrades a PolarClaw channel.
     *
     * @param request - UpgradePolarClawChannelRequest
     * @returns UpgradePolarClawChannelResponse
     */
    upgradePolarClawChannel(request: $_model.UpgradePolarClawChannelRequest): Promise<$_model.UpgradePolarClawChannelResponse>;
    /**
     * Upgrades a plug-in in a PolarClaw application.
     *
     * @remarks
     * Upgrades a plug-in that is installed in a PolarClaw application.
     *
     * @param request - UpgradePolarClawPluginRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpgradePolarClawPluginResponse
     */
    upgradePolarClawPluginWithOptions(request: $_model.UpgradePolarClawPluginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradePolarClawPluginResponse>;
    /**
     * Upgrades a plug-in in a PolarClaw application.
     *
     * @remarks
     * Upgrades a plug-in that is installed in a PolarClaw application.
     *
     * @param request - UpgradePolarClawPluginRequest
     * @returns UpgradePolarClawPluginResponse
     */
    upgradePolarClawPlugin(request: $_model.UpgradePolarClawPluginRequest): Promise<$_model.UpgradePolarClawPluginResponse>;
    /**
     * Upgrades the PolarClaw feature.
     *
     * @param request - UpgradePolarClawSkillsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpgradePolarClawSkillsResponse
     */
    upgradePolarClawSkillsWithOptions(request: $_model.UpgradePolarClawSkillsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradePolarClawSkillsResponse>;
    /**
     * Upgrades the PolarClaw feature.
     *
     * @param request - UpgradePolarClawSkillsRequest
     * @returns UpgradePolarClawSkillsResponse
     */
    upgradePolarClawSkills(request: $_model.UpgradePolarClawSkillsRequest): Promise<$_model.UpgradePolarClawSkillsResponse>;
    /**
     * Validates an AgenticDB tenant API key.
     *
     * @param request - VerifyAgenticDBTenantApiKeyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns VerifyAgenticDBTenantApiKeyResponse
     */
    verifyAgenticDBTenantApiKeyWithOptions(request: $_model.VerifyAgenticDBTenantApiKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyAgenticDBTenantApiKeyResponse>;
    /**
     * Validates an AgenticDB tenant API key.
     *
     * @param request - VerifyAgenticDBTenantApiKeyRequest
     * @returns VerifyAgenticDBTenantApiKeyResponse
     */
    verifyAgenticDBTenantApiKey(request: $_model.VerifyAgenticDBTenantApiKeyRequest): Promise<$_model.VerifyAgenticDBTenantApiKeyResponse>;
}
