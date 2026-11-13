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
     * Writes messages or text to a memory store. By default, sync is set to true, which synchronously waits for extraction and returns only memories (an empty array is allowed). If sync is set to false, it returns only a taskId that can be queried by using GetMemoryTask.
     *
     * @remarks
     * Writes messages or text to a memory store to extract long-term memory for subsequent retrieval and use.
     * - sync omitted or set to true: Waits for extraction to complete and returns memories. If no memory is extracted, an empty array is returned.
     * - sync=false: Returns a taskId. You can query the extraction progress and results by using [GetMemoryTask](https://api.aliyun.com/document/AgentCore/2026-08-04/GetMemoryTask).
     *
     * @param tmpReq - AddMemoriesRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AddMemoriesResponse
     */
    addMemoriesWithOptions(workspaceId: string, memoryStoreName: string, tmpReq: $_model.AddMemoriesRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.AddMemoriesResponse>;
    /**
     * Writes messages or text to a memory store. By default, sync is set to true, which synchronously waits for extraction and returns only memories (an empty array is allowed). If sync is set to false, it returns only a taskId that can be queried by using GetMemoryTask.
     *
     * @remarks
     * Writes messages or text to a memory store to extract long-term memory for subsequent retrieval and use.
     * - sync omitted or set to true: Waits for extraction to complete and returns memories. If no memory is extracted, an empty array is returned.
     * - sync=false: Returns a taskId. You can query the extraction progress and results by using [GetMemoryTask](https://api.aliyun.com/document/AgentCore/2026-08-04/GetMemoryTask).
     *
     * @param request - AddMemoriesRequest
     * @returns AddMemoriesResponse
     */
    addMemories(workspaceId: string, memoryStoreName: string, request: $_model.AddMemoriesRequest): Promise<$_model.AddMemoriesResponse>;
    /**
     * Deletes models from a specified workspace in batches. If any model is in use, the entire batch request fails.
     *
     * @remarks
     * Deletes models from a specified workspace in batches. If any model is in use, the entire batch request fails.
     *
     * @param tmpReq - BatchDeleteModelsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns BatchDeleteModelsResponse
     */
    batchDeleteModelsWithOptions(workspaceId: string, tmpReq: $_model.BatchDeleteModelsRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDeleteModelsResponse>;
    /**
     * Deletes models from a specified workspace in batches. If any model is in use, the entire batch request fails.
     *
     * @remarks
     * Deletes models from a specified workspace in batches. If any model is in use, the entire batch request fails.
     *
     * @param request - BatchDeleteModelsRequest
     * @returns BatchDeleteModelsResponse
     */
    batchDeleteModels(workspaceId: string, request: $_model.BatchDeleteModelsRequest): Promise<$_model.BatchDeleteModelsResponse>;
    /**
     * Uploads multiple skill ZIP packages through OSS and returns the processing result for each skill.
     *
     * @remarks
     * Imports multiple skill ZIP packages that have been uploaded to OSS into a workspace in batches, and returns the processing result for each skill.
     * OSS is used here to temporarily store the ZIP packages to be imported. First, call [GetSkillImportFileUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetSkillImportFileUrl) to obtain the upload URL and upload the files, and then call this operation. To check the package content and name conflicts in advance, call [PrecheckSkillUploadViaOss](https://api.aliyun.com/document/AgentCore/2026-08-04/PrecheckSkillUploadViaOss).
     *
     * @param tmpReq - BatchUploadSkillsViaOssRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns BatchUploadSkillsViaOssResponse
     */
    batchUploadSkillsViaOssWithOptions(workspaceId: string, tmpReq: $_model.BatchUploadSkillsViaOssRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.BatchUploadSkillsViaOssResponse>;
    /**
     * Uploads multiple skill ZIP packages through OSS and returns the processing result for each skill.
     *
     * @remarks
     * Imports multiple skill ZIP packages that have been uploaded to OSS into a workspace in batches, and returns the processing result for each skill.
     * OSS is used here to temporarily store the ZIP packages to be imported. First, call [GetSkillImportFileUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetSkillImportFileUrl) to obtain the upload URL and upload the files, and then call this operation. To check the package content and name conflicts in advance, call [PrecheckSkillUploadViaOss](https://api.aliyun.com/document/AgentCore/2026-08-04/PrecheckSkillUploadViaOss).
     *
     * @param request - BatchUploadSkillsViaOssRequest
     * @returns BatchUploadSkillsViaOssResponse
     */
    batchUploadSkillsViaOss(workspaceId: string, request: $_model.BatchUploadSkillsViaOssRequest): Promise<$_model.BatchUploadSkillsViaOssResponse>;
    /**
     * Converts an MCP service to free edit mode.
     *
     * @remarks
     * Converts an MCP service installed from a marketplace template to free edit mode to allow direct modification of the service configuration.
     * After the conversion, the original source and tag information are retained, and the template editing restrictions are removed. The service no longer appears on the usage page associated with the template.
     *
     * @param request - ConvertMcpToFreeEditRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ConvertMcpToFreeEditResponse
     */
    convertMcpToFreeEditWithOptions(workspaceId: string, mcpServerId: string, request: $_model.ConvertMcpToFreeEditRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ConvertMcpToFreeEditResponse>;
    /**
     * Converts an MCP service to free edit mode.
     *
     * @remarks
     * Converts an MCP service installed from a marketplace template to free edit mode to allow direct modification of the service configuration.
     * After the conversion, the original source and tag information are retained, and the template editing restrictions are removed. The service no longer appears on the usage page associated with the template.
     *
     * @param request - ConvertMcpToFreeEditRequest
     * @returns ConvertMcpToFreeEditResponse
     */
    convertMcpToFreeEdit(workspaceId: string, mcpServerId: string, request: $_model.ConvertMcpToFreeEditRequest): Promise<$_model.ConvertMcpToFreeEditResponse>;
    /**
     * Creates an instant messaging (IM) channel for a specified agent and binds a publicly accessible ServiceEndpoint.
     *
     * @remarks
     * Creates an IM channel for an agent to route messages from instant messaging platforms to the agent. Binds a publicly accessible service endpoint (`ServiceEndpoint`) during creation. After the channel is created, you can query its configuration and status by calling [GetAgentIMChannel](https://api.aliyun.com/document/AgentCore/2026-08-04/GetAgentIMChannel).
     *
     * @param tmpReq - CreateAgentIMChannelRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAgentIMChannelResponse
     */
    createAgentIMChannelWithOptions(workspaceId: string, agentId: string, tmpReq: $_model.CreateAgentIMChannelRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAgentIMChannelResponse>;
    /**
     * Creates an instant messaging (IM) channel for a specified agent and binds a publicly accessible ServiceEndpoint.
     *
     * @remarks
     * Creates an IM channel for an agent to route messages from instant messaging platforms to the agent. Binds a publicly accessible service endpoint (`ServiceEndpoint`) during creation. After the channel is created, you can query its configuration and status by calling [GetAgentIMChannel](https://api.aliyun.com/document/AgentCore/2026-08-04/GetAgentIMChannel).
     *
     * @param request - CreateAgentIMChannelRequest
     * @returns CreateAgentIMChannelResponse
     */
    createAgentIMChannel(workspaceId: string, agentId: string, request: $_model.CreateAgentIMChannelRequest): Promise<$_model.CreateAgentIMChannelResponse>;
    /**
     * Creates an AgentSpec in a specified workspace and generates the first draft version. Returns a resource conflict error if an AgentSpec with the same name already exists.
     *
     * @remarks
     * Creates an agent template (AgentSpec) and generates the first draft version for editing reusable agent configurations. The creation fails if a template with the same name already exists in the same workspace. After creation, you can query the template and version information by calling [GetAgentSpec](https://api.aliyun.com/document/AgentCore/2026-08-04/GetAgentSpec).
     *
     * @param tmpReq - CreateAgentSpecRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAgentSpecResponse
     */
    createAgentSpecWithOptions(workspaceId: string, tmpReq: $_model.CreateAgentSpecRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAgentSpecResponse>;
    /**
     * Creates an AgentSpec in a specified workspace and generates the first draft version. Returns a resource conflict error if an AgentSpec with the same name already exists.
     *
     * @remarks
     * Creates an agent template (AgentSpec) and generates the first draft version for editing reusable agent configurations. The creation fails if a template with the same name already exists in the same workspace. After creation, you can query the template and version information by calling [GetAgentSpec](https://api.aliyun.com/document/AgentCore/2026-08-04/GetAgentSpec).
     *
     * @param request - CreateAgentSpecRequest
     * @returns CreateAgentSpecResponse
     */
    createAgentSpec(workspaceId: string, request: $_model.CreateAgentSpecRequest): Promise<$_model.CreateAgentSpecResponse>;
    /**
     * Creates a new draft version for an existing AgentSpec. The AgentSpec must exist and cannot have a draft currently being edited.
     *
     * @remarks
     * Creates a new draft version for an existing agent template (AgentSpec) to modify and publish the next version of the configuration.
     * The template must already exist and cannot have a draft currently being edited.
     *
     * @param tmpReq - CreateAgentSpecVersionRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAgentSpecVersionResponse
     */
    createAgentSpecVersionWithOptions(workspaceId: string, agentSpecName: string, tmpReq: $_model.CreateAgentSpecVersionRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAgentSpecVersionResponse>;
    /**
     * Creates a new draft version for an existing AgentSpec. The AgentSpec must exist and cannot have a draft currently being edited.
     *
     * @remarks
     * Creates a new draft version for an existing agent template (AgentSpec) to modify and publish the next version of the configuration.
     * The template must already exist and cannot have a draft currently being edited.
     *
     * @param request - CreateAgentSpecVersionRequest
     * @returns CreateAgentSpecVersionResponse
     */
    createAgentSpecVersion(workspaceId: string, agentSpecName: string, request: $_model.CreateAgentSpecVersionRequest): Promise<$_model.CreateAgentSpecVersionResponse>;
    /**
     * Saves an agent version.
     *
     * @remarks
     * Saves the currently effective configuration of a specified managed or custom agent as an immutable fixed version, and archives the version template and artifacts. This operation only saves the version and does not deploy an instance. Other types of agents, such as external agents, do not support versions and return AgentVersionSubtypeUnsupported. The latest release of the agent must be effective, meaning latestSpecVersion is equal to effectiveSpecVersion. The system generates an incrementing version number, agentVersion, such as v1 and v2, for each agent. The version number is unique within the agent, and the sequence numbers of deleted versions are not reused. This version number is used to query and delete versions, and for server endpoint references. Each agent can retain up to 50 undeleted versions. If the limit is reached, AgentVersionQuotaExceeded is returned. You can continue to save versions after deleting unused ones. Duplicate submissions with the same versionName and release serial number return the existing version and are not subject to the limit. If the versionName is the same but the release serial number is different, AgentVersionAlreadyExists is returned.
     *
     * @param tmpReq - CreateAgentVersionRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAgentVersionResponse
     */
    createAgentVersionWithOptions(workspaceId: string, agentId: string, tmpReq: $_model.CreateAgentVersionRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAgentVersionResponse>;
    /**
     * Saves an agent version.
     *
     * @remarks
     * Saves the currently effective configuration of a specified managed or custom agent as an immutable fixed version, and archives the version template and artifacts. This operation only saves the version and does not deploy an instance. Other types of agents, such as external agents, do not support versions and return AgentVersionSubtypeUnsupported. The latest release of the agent must be effective, meaning latestSpecVersion is equal to effectiveSpecVersion. The system generates an incrementing version number, agentVersion, such as v1 and v2, for each agent. The version number is unique within the agent, and the sequence numbers of deleted versions are not reused. This version number is used to query and delete versions, and for server endpoint references. Each agent can retain up to 50 undeleted versions. If the limit is reached, AgentVersionQuotaExceeded is returned. You can continue to save versions after deleting unused ones. Duplicate submissions with the same versionName and release serial number return the existing version and are not subject to the limit. If the versionName is the same but the release serial number is different, AgentVersionAlreadyExists is returned.
     *
     * @param request - CreateAgentVersionRequest
     * @returns CreateAgentVersionResponse
     */
    createAgentVersion(workspaceId: string, agentId: string, request: $_model.CreateAgentVersionRequest): Promise<$_model.CreateAgentVersionResponse>;
    /**
     * Creates an apiKey or mcpHeader credential in a workspace for agents or MCP to access external services. The credential content is submitted as a JSON string, and masked results are returned when queried.
     *
     * @remarks
     * Creates an apiKey or mcpHeader credential in a workspace for agents or MCP to access external services.
     * ### Credential types
     * - apiKey: credentialMetadata is a JSON string that contains only a non-empty apiKey. Do not submit resourceScope and resourceRefs.
     * - mcpHeader: credentialMetadata is a JSON string that contains a non-empty headers array. Each item contains a non-empty name and value, which are used to configure MCP request headers.
     * ### MCP header scope
     * You must specify resourceScope when creating an mcpHeader credential:
     * - ALL: Applies to all MCP services. Omit resourceRefs.
     * - SPECIFIED: Applies to specified MCP services. resourceRefs must be a non-empty array. For each item, set resourceType=mcpServer and specify resourceId.
     * ### Subsequent queries
     * Use [GetCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCredential) or [ListCredentials](https://api.aliyun.com/document/AgentCore/2026-08-04/ListCredentials) to query credentials. For apiKey, a masked value is returned. For mcpHeader, only header names are returned, and header values are not returned.
     *
     * @param tmpReq - CreateCredentialRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateCredentialResponse
     */
    createCredentialWithOptions(workspaceId: string, tmpReq: $_model.CreateCredentialRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCredentialResponse>;
    /**
     * Creates an apiKey or mcpHeader credential in a workspace for agents or MCP to access external services. The credential content is submitted as a JSON string, and masked results are returned when queried.
     *
     * @remarks
     * Creates an apiKey or mcpHeader credential in a workspace for agents or MCP to access external services.
     * ### Credential types
     * - apiKey: credentialMetadata is a JSON string that contains only a non-empty apiKey. Do not submit resourceScope and resourceRefs.
     * - mcpHeader: credentialMetadata is a JSON string that contains a non-empty headers array. Each item contains a non-empty name and value, which are used to configure MCP request headers.
     * ### MCP header scope
     * You must specify resourceScope when creating an mcpHeader credential:
     * - ALL: Applies to all MCP services. Omit resourceRefs.
     * - SPECIFIED: Applies to specified MCP services. resourceRefs must be a non-empty array. For each item, set resourceType=mcpServer and specify resourceId.
     * ### Subsequent queries
     * Use [GetCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCredential) or [ListCredentials](https://api.aliyun.com/document/AgentCore/2026-08-04/ListCredentials) to query credentials. For apiKey, a masked value is returned. For mcpHeader, only header names are returned, and header values are not returned.
     *
     * @param request - CreateCredentialRequest
     * @returns CreateCredentialResponse
     */
    createCredential(workspaceId: string, request: $_model.CreateCredentialRequest): Promise<$_model.CreateCredentialResponse>;
    /**
     * Creates a custom code or image agent in a specified workspace. Supports code package, ACR image, and custom image deployments, and executes the deployment asynchronously.
     *
     * @remarks
     * Deploys a user-provided code package or container image as an agent in a workspace. This corresponds to the "Custom Code / Image" creation method in the console.
     * ### Before you begin
     * Prepare a writable workspace and submit name, roleArn, artifact, and runtime. In runtime, specify both compute and sessionPolicy. roleArn is the RAM role used by the agent to access your cloud resources.
     * ### Select a deployment method
     * | Deployment method | Required configuration |
     * | --- | --- |
     * | ACR image | artifact.port, and type=acr, instanceId, namespace, repo, and tag in artifact.container. |
     * | Custom image | artifact.port, artifact.container.type=custom, and a complete customImage. The clientToken query parameter is required. |
     * | Code package | artifact.port, and sourceUri, languageRuntime, and entrypoint in artifact.code. |
     * artifact.code and artifact.container are mutually exclusive. The service listening port ranges from 1 to 65535. You can specify a startup command for a container image by using artifact.container.entrypoint. If omitted, the default startup method of the image is used.
     * ### Code package
     * - ZIP and TAR.GZ formats are supported. The compressed package size ranges from 1 to 500,000,000 bytes. Dependencies must be included in the package. The platform does not install dependencies or perform online builds.
     * - Invoke [ListAgentCodeRuntimes](https://api.aliyun.com/document/AgentCore/2026-08-04/ListAgentCodeRuntimes) to query the active languageRuntime values.
     * - For local files, first invoke [GetAgentCodePackageUploadUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetAgentCodePackageUploadUrl). Upload the file directly by using the upload method, URL, and request headers returned in the response, and then commit sourceUri.
     * - sourceUri supports oss:// or HTTPS object URLs with standard OSS public domain names, including signed URLs. Private OSS objects must allow the workspace role to read them. You can invoke [GetAgentCodePackageOssRamAuthorizeUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetAgentCodePackageOssRamAuthorizeUrl) to complete the authorization first.
     * - Read permissions, object existence, and size are checked upon commit, and a fixed copy is saved. If the transfer failed, the agent configuration is not created. Archive integrity and decompression are checked when the instance starts.
     * - entrypoint is the startup command executed in the /code folder, such as python main.py. The command does not automatically execute shell pipelines or expand environment variables. For complex startup logic, write the logic into a script within the package.
     * Sample request body for a code package (the runtime environment is subject to the query result):
     * ```json
     * {
     *   "name": "code-agent",
     *   "roleArn": "acs:ram::1234567890123456:role/AgentRuntimeRole",
     *   "artifact": {
     *     "port": 8000,
     *     "code": {
     *       "sourceUri": "oss://example-code-bucket/releases/agent.zip",
     *       "languageRuntime": "python3.12",
     *       "entrypoint": "python main.py"
     *     }
     *   },
     *   "runtime": {
     *     "compute": {
     *       "computeClass": "STANDARD"
     *     },
     *     "sessionPolicy": {
     *       "type": "AFFINITY"
     *     }
     *   }
     * }
     * ```
     * ### Custom image
     * For customImage.image, specify the complete image address. Tags or digests are supported. Do not include the protocol or user information. Configure the image pull network separately in customImage.pullNetwork:
     * | Pull method | Configuration |
     * | --- | --- |
     * | Internet | type=public. Do not specify VPC fields. |
     * | VPC | type=vpc. Specify vpcId, vSwitchId, and securityGroupId. |
     * If repository authentication is required, specify both customImage.username and customImage.password. For anonymous access, omit both. The password is not returned in the response. The image pull network and the agent runtime network are configured separately.
     * useImageCache=true applies only to ACR images. For custom images and code packages, use false or omit this field.
     * ### Runtime configuration
     * Omitted fields in runtime.hpa use the following default values:
     * | Field | Default value | Valid values and description |
     * | --- | --- | --- |
     * | enabled | false | Specifies whether to enable elastic scaling. |
     * | minSandboxCount | 1 | The minimum number of instances. Valid values: 0 to 100. |
     * | maxSandboxCount | 10 | The maximum number of instances. Valid values: 0 to 100. The value cannot be less than the minimum number. |
     * | maxConcurrentSessionsPerSandbox | 20 | The maximum number of concurrent sessions per instance. Valid values: 1 to 20. |
     * | sessionTtlSeconds | 600 | The maximum idle time for a session, in seconds. Valid values: 60 to 86400. |
     * If sessionPolicy.type=ISOLATED_HEADER_FIELD, you must provide a valid HTTP request header name in headerName. Do not specify this field for other policies.
     * If network is omitted, the default access policy on the agent side is used. Actual access is still subject to the workspace network restrictions. When submitting access items, specify the corresponding enabled value.
     * The total number of items in ossMounts and agenticFsMounts cannot exceed 10. The mount target mountPath uses an absolute path within the container, such as /data/train. It cannot conflict with platform reserved directories, and cannot be duplicated or form parent-child directory overrides.
     * File mounting allows the agent to access persistent data. When using AgenticFS, you can call [GetWorkspaceAgenticFsMountRamAuthorizeUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetWorkspaceAgenticFsMountRamAuthorizeUrl) to authorize the access point first.
     * The path for an OSS mount must be a non-empty directory prefix within the bucket. The server for an AgenticFS mount is the AccessPoint domain name, without a protocol, port, or path. The path is an existing non-empty relative directory within the AccessPoint. You cannot mount the root directory of the AccessPoint. If readOnly is omitted, the default value is false.
     * Environment variable names must be non-empty and unique in the list. Values are strings and can be empty strings. When configuring healthCheck, you must specify port. Omitting the health check means no health check is configured. When configuring logging.sls, specify both non-empty project and logstore.
     * ### Query results and retries
     * A successful response indicates that the request has been accepted. Save the agentId and call [GetCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCustomAgent). Check latestVersionStatus, latestExecutionError, status, and sandboxPhaseCounts to confirm the configuration processing and instance status.
     * You must provide the clientToken query parameter when submitting a custom image. It is optional for ACR image and code package submissions. The token length is 1 to 128 characters. Letters, digits, periods, underscores, colons, and hyphens are allowed. Reuse the original token to retry the same submission. The same parameters return the existing acceptance result. Use a new token for different submission content.
     *
     * @param tmpReq - CreateCustomAgentRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateCustomAgentResponse
     */
    createCustomAgentWithOptions(workspaceId: string, tmpReq: $_model.CreateCustomAgentRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomAgentResponse>;
    /**
     * Creates a custom code or image agent in a specified workspace. Supports code package, ACR image, and custom image deployments, and executes the deployment asynchronously.
     *
     * @remarks
     * Deploys a user-provided code package or container image as an agent in a workspace. This corresponds to the "Custom Code / Image" creation method in the console.
     * ### Before you begin
     * Prepare a writable workspace and submit name, roleArn, artifact, and runtime. In runtime, specify both compute and sessionPolicy. roleArn is the RAM role used by the agent to access your cloud resources.
     * ### Select a deployment method
     * | Deployment method | Required configuration |
     * | --- | --- |
     * | ACR image | artifact.port, and type=acr, instanceId, namespace, repo, and tag in artifact.container. |
     * | Custom image | artifact.port, artifact.container.type=custom, and a complete customImage. The clientToken query parameter is required. |
     * | Code package | artifact.port, and sourceUri, languageRuntime, and entrypoint in artifact.code. |
     * artifact.code and artifact.container are mutually exclusive. The service listening port ranges from 1 to 65535. You can specify a startup command for a container image by using artifact.container.entrypoint. If omitted, the default startup method of the image is used.
     * ### Code package
     * - ZIP and TAR.GZ formats are supported. The compressed package size ranges from 1 to 500,000,000 bytes. Dependencies must be included in the package. The platform does not install dependencies or perform online builds.
     * - Invoke [ListAgentCodeRuntimes](https://api.aliyun.com/document/AgentCore/2026-08-04/ListAgentCodeRuntimes) to query the active languageRuntime values.
     * - For local files, first invoke [GetAgentCodePackageUploadUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetAgentCodePackageUploadUrl). Upload the file directly by using the upload method, URL, and request headers returned in the response, and then commit sourceUri.
     * - sourceUri supports oss:// or HTTPS object URLs with standard OSS public domain names, including signed URLs. Private OSS objects must allow the workspace role to read them. You can invoke [GetAgentCodePackageOssRamAuthorizeUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetAgentCodePackageOssRamAuthorizeUrl) to complete the authorization first.
     * - Read permissions, object existence, and size are checked upon commit, and a fixed copy is saved. If the transfer failed, the agent configuration is not created. Archive integrity and decompression are checked when the instance starts.
     * - entrypoint is the startup command executed in the /code folder, such as python main.py. The command does not automatically execute shell pipelines or expand environment variables. For complex startup logic, write the logic into a script within the package.
     * Sample request body for a code package (the runtime environment is subject to the query result):
     * ```json
     * {
     *   "name": "code-agent",
     *   "roleArn": "acs:ram::1234567890123456:role/AgentRuntimeRole",
     *   "artifact": {
     *     "port": 8000,
     *     "code": {
     *       "sourceUri": "oss://example-code-bucket/releases/agent.zip",
     *       "languageRuntime": "python3.12",
     *       "entrypoint": "python main.py"
     *     }
     *   },
     *   "runtime": {
     *     "compute": {
     *       "computeClass": "STANDARD"
     *     },
     *     "sessionPolicy": {
     *       "type": "AFFINITY"
     *     }
     *   }
     * }
     * ```
     * ### Custom image
     * For customImage.image, specify the complete image address. Tags or digests are supported. Do not include the protocol or user information. Configure the image pull network separately in customImage.pullNetwork:
     * | Pull method | Configuration |
     * | --- | --- |
     * | Internet | type=public. Do not specify VPC fields. |
     * | VPC | type=vpc. Specify vpcId, vSwitchId, and securityGroupId. |
     * If repository authentication is required, specify both customImage.username and customImage.password. For anonymous access, omit both. The password is not returned in the response. The image pull network and the agent runtime network are configured separately.
     * useImageCache=true applies only to ACR images. For custom images and code packages, use false or omit this field.
     * ### Runtime configuration
     * Omitted fields in runtime.hpa use the following default values:
     * | Field | Default value | Valid values and description |
     * | --- | --- | --- |
     * | enabled | false | Specifies whether to enable elastic scaling. |
     * | minSandboxCount | 1 | The minimum number of instances. Valid values: 0 to 100. |
     * | maxSandboxCount | 10 | The maximum number of instances. Valid values: 0 to 100. The value cannot be less than the minimum number. |
     * | maxConcurrentSessionsPerSandbox | 20 | The maximum number of concurrent sessions per instance. Valid values: 1 to 20. |
     * | sessionTtlSeconds | 600 | The maximum idle time for a session, in seconds. Valid values: 60 to 86400. |
     * If sessionPolicy.type=ISOLATED_HEADER_FIELD, you must provide a valid HTTP request header name in headerName. Do not specify this field for other policies.
     * If network is omitted, the default access policy on the agent side is used. Actual access is still subject to the workspace network restrictions. When submitting access items, specify the corresponding enabled value.
     * The total number of items in ossMounts and agenticFsMounts cannot exceed 10. The mount target mountPath uses an absolute path within the container, such as /data/train. It cannot conflict with platform reserved directories, and cannot be duplicated or form parent-child directory overrides.
     * File mounting allows the agent to access persistent data. When using AgenticFS, you can call [GetWorkspaceAgenticFsMountRamAuthorizeUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetWorkspaceAgenticFsMountRamAuthorizeUrl) to authorize the access point first.
     * The path for an OSS mount must be a non-empty directory prefix within the bucket. The server for an AgenticFS mount is the AccessPoint domain name, without a protocol, port, or path. The path is an existing non-empty relative directory within the AccessPoint. You cannot mount the root directory of the AccessPoint. If readOnly is omitted, the default value is false.
     * Environment variable names must be non-empty and unique in the list. Values are strings and can be empty strings. When configuring healthCheck, you must specify port. Omitting the health check means no health check is configured. When configuring logging.sls, specify both non-empty project and logstore.
     * ### Query results and retries
     * A successful response indicates that the request has been accepted. Save the agentId and call [GetCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCustomAgent). Check latestVersionStatus, latestExecutionError, status, and sandboxPhaseCounts to confirm the configuration processing and instance status.
     * You must provide the clientToken query parameter when submitting a custom image. It is optional for ACR image and code package submissions. The token length is 1 to 128 characters. Letters, digits, periods, underscores, colons, and hyphens are allowed. Reuse the original token to retry the same submission. The same parameters return the existing acceptance result. Use a new token for different submission content.
     *
     * @param request - CreateCustomAgentRequest
     * @returns CreateCustomAgentResponse
     */
    createCustomAgent(workspaceId: string, request: $_model.CreateCustomAgentRequest): Promise<$_model.CreateCustomAgentResponse>;
    /**
     * Creates an agent that runs in an external environment, saves the configurations for the platform model, instructions, tools, and skills, and asynchronously processes the onboarding configuration.
     *
     * @remarks
     * Registers an agent hosted in a user runtime environment, which corresponds to the "Managed Agent" in the console. After registration, you can continue to obtain onboarding information and complete the connection.
     * ### Configure a managed agent
     * Provide `name` and select the configuration based on the model source:
     * | `modelSource` | Model configuration |
     * | --- | --- |
     * | `PLATFORM` | Uses a platform model. Provide `model.modelConnectionId` and `model.modelName`. |
     * | `RUNTIME` | The model is managed by an external runtime environment. Do not submit `model`. |
     * If `modelSource` is omitted but `model` is provided, it is processed as `PLATFORM`. If both are omitted, the agent cannot be created.
     * Configure instructions, MCP tools, and skills by using `instruction`, `tools`, and `skills`. You can also reference an agent template by using `template.aiRegistry`. The external process is deployed by the caller. This operation does not create a platform runtime instance.
     * ### Onboarding sequence
     * **Step 1:** After creation, save the `agentId` and call [GetExternalAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgent) to query the configuration processing result.
     * **Step 2:** After the latest configuration takes effect, call [GetExternalAgentBootstrapOptions](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgentBootstrapOptions) to obtain the available onboarding networks.
     * **Step 3:** Select an available network and call [CreateExternalAgentBootstrapToken](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateExternalAgentBootstrapToken) to obtain the onboarding token and CMS configuration. The external process completes the onboarding.
     * `clientToken` is a reserved query parameter and does not provide idempotency guarantees at this time.
     *
     * @param tmpReq - CreateExternalAgentRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateExternalAgentResponse
     */
    createExternalAgentWithOptions(workspaceId: string, tmpReq: $_model.CreateExternalAgentRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.CreateExternalAgentResponse>;
    /**
     * Creates an agent that runs in an external environment, saves the configurations for the platform model, instructions, tools, and skills, and asynchronously processes the onboarding configuration.
     *
     * @remarks
     * Registers an agent hosted in a user runtime environment, which corresponds to the "Managed Agent" in the console. After registration, you can continue to obtain onboarding information and complete the connection.
     * ### Configure a managed agent
     * Provide `name` and select the configuration based on the model source:
     * | `modelSource` | Model configuration |
     * | --- | --- |
     * | `PLATFORM` | Uses a platform model. Provide `model.modelConnectionId` and `model.modelName`. |
     * | `RUNTIME` | The model is managed by an external runtime environment. Do not submit `model`. |
     * If `modelSource` is omitted but `model` is provided, it is processed as `PLATFORM`. If both are omitted, the agent cannot be created.
     * Configure instructions, MCP tools, and skills by using `instruction`, `tools`, and `skills`. You can also reference an agent template by using `template.aiRegistry`. The external process is deployed by the caller. This operation does not create a platform runtime instance.
     * ### Onboarding sequence
     * **Step 1:** After creation, save the `agentId` and call [GetExternalAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgent) to query the configuration processing result.
     * **Step 2:** After the latest configuration takes effect, call [GetExternalAgentBootstrapOptions](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgentBootstrapOptions) to obtain the available onboarding networks.
     * **Step 3:** Select an available network and call [CreateExternalAgentBootstrapToken](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateExternalAgentBootstrapToken) to obtain the onboarding token and CMS configuration. The external process completes the onboarding.
     * `clientToken` is a reserved query parameter and does not provide idempotency guarantees at this time.
     *
     * @param request - CreateExternalAgentRequest
     * @returns CreateExternalAgentResponse
     */
    createExternalAgent(workspaceId: string, request: $_model.CreateExternalAgentRequest): Promise<$_model.CreateExternalAgentResponse>;
    /**
     * Issues an access token for a specified network to an active managed agent and returns the CMS configuration.
     *
     * @remarks
     * Issues an access token and connection configurations for a registered and active managed agent to complete the onboarding in the runtime environment where the agent resides.
     * ### Prerequisites and parameters
     * The managed agent must be in the running state and the latest configuration must be in effect. First, query the available networks by calling [GetExternalAgentBootstrapOptions](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgentBootstrapOptions).
     * networkType is passed as a query parameter. Valid values: INTRANET (internal network) and INTERNET (Internet). The selected endpoint must be available.
     * ### Use the response
     * Pass the bootstrapToken to the external runtime process to complete the onboarding. The tokenFingerprint is used to identify the token and cannot be used as a substitute for the token. cms contains the observability reporting configuration for the corresponding network. Configure it based on the endpoint, workspace, and license key provided in the response.
     *
     * @param request - CreateExternalAgentBootstrapTokenRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateExternalAgentBootstrapTokenResponse
     */
    createExternalAgentBootstrapTokenWithOptions(workspaceId: string, agentId: string, request: $_model.CreateExternalAgentBootstrapTokenRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.CreateExternalAgentBootstrapTokenResponse>;
    /**
     * Issues an access token for a specified network to an active managed agent and returns the CMS configuration.
     *
     * @remarks
     * Issues an access token and connection configurations for a registered and active managed agent to complete the onboarding in the runtime environment where the agent resides.
     * ### Prerequisites and parameters
     * The managed agent must be in the running state and the latest configuration must be in effect. First, query the available networks by calling [GetExternalAgentBootstrapOptions](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgentBootstrapOptions).
     * networkType is passed as a query parameter. Valid values: INTRANET (internal network) and INTERNET (Internet). The selected endpoint must be available.
     * ### Use the response
     * Pass the bootstrapToken to the external runtime process to complete the onboarding. The tokenFingerprint is used to identify the token and cannot be used as a substitute for the token. cms contains the observability reporting configuration for the corresponding network. Configure it based on the endpoint, workspace, and license key provided in the response.
     *
     * @param request - CreateExternalAgentBootstrapTokenRequest
     * @returns CreateExternalAgentBootstrapTokenResponse
     */
    createExternalAgentBootstrapToken(workspaceId: string, agentId: string, request: $_model.CreateExternalAgentBootstrapTokenRequest): Promise<$_model.CreateExternalAgentBootstrapTokenResponse>;
    /**
     * Integrates an external identity provider such as DingTalk, Lark, or a custom identity source into a workspace for enterprise account logon and user synchronization.
     *
     * @remarks
     * Integrates an enterprise identity source into a workspace to allow application users to log on with enterprise accounts or synchronize users from the enterprise address book to the workspace.
     * DingTalk, Lark, and custom identity sources (`CustomSSO`) are supported. A workspace can be bound to only one identity source. To change the integration method, you must unbind the current identity source first.
     * ### Select an integration method
     * | Integration method | Scenario | Operation performed by this API |
     * | --- | --- | --- |
     * | DingTalk or Lark | The enterprise already uses DingTalk or Lark and wants to integrate enterprise accounts and the address book. | Saves the enterprise application credentials and establishes a binding for subsequent logon and address book synchronization configuration. |
     * | Custom identity source (`CustomSSO`) | The enterprise wants to integrate its own identity authentication and user management system. | Creates a shared user pool to prepare for subsequent SAML single sign-on (SSO) and SCIM user synchronization configuration. |
     * The user pool is used to store application users and identity integration configurations. SAML handles enterprise account logon, and SCIM handles provisioning users from the enterprise identity system to the user pool. You can configure these two capabilities separately.
     * ### Bind DingTalk or Lark
     * Enter the enterprise application credentials in `metadata`: DingTalk requires `appKey`, `appSecret`, and `corpId`, while Lark requires `appId` and `appSecret`.
     * Logon is enabled by default. A user synchronization task is executed by default upon the first binding. If you want to select departments before synchronization, set `syncOnBind` to `false`.
     * Subsequent address book change synchronization is controlled by `syncEnabled` and is disabled by default. When enabled, you must also provide `encryptKey` and `verificationToken`.
     * ### Bind a custom identity source
     * When creating a `CustomSSO` binding, you only need to specify the identity source type:
     * ```http
     * POST /workspaces/{workspaceId}/identity-providers
     * {"identityProviderType":"CustomSSO"}
     * ```
     * This call only creates the user pool. Logon and user synchronization are disabled by default. Do not enter `metadata` or enable `loginEnabled` and `syncEnabled` during creation.
     * After creation, call [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider) to query the progress. If `WAITING_CONFIGURATION` is returned, the user pool is created and you can proceed with the integration configuration:
     * - **Integrate enterprise account logon**: Call [GetIdentityProviderServiceProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderServiceProvider) to obtain the SAML integration information of AgentCore and configure it in the enterprise identity system. Then, call [UpdateIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProvider) to save the SAML configuration of the enterprise identity system and enable logon as needed.
     * - **Integrate user synchronization**: Call [PrepareIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/PrepareIdentityProviderSCIM) to obtain the SCIM receiving endpoint and credentials, and configure them in the enterprise identity system. After the external configuration is complete, call [UpdateIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProviderSCIM) to enable AgentCore user synchronization.
     * The two processes are independent of each other. You can select one or both based on your business requirements.
     *
     * @param tmpReq - CreateIdentityProviderRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateIdentityProviderResponse
     */
    createIdentityProviderWithOptions(workspaceId: string, tmpReq: $_model.CreateIdentityProviderRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIdentityProviderResponse>;
    /**
     * Integrates an external identity provider such as DingTalk, Lark, or a custom identity source into a workspace for enterprise account logon and user synchronization.
     *
     * @remarks
     * Integrates an enterprise identity source into a workspace to allow application users to log on with enterprise accounts or synchronize users from the enterprise address book to the workspace.
     * DingTalk, Lark, and custom identity sources (`CustomSSO`) are supported. A workspace can be bound to only one identity source. To change the integration method, you must unbind the current identity source first.
     * ### Select an integration method
     * | Integration method | Scenario | Operation performed by this API |
     * | --- | --- | --- |
     * | DingTalk or Lark | The enterprise already uses DingTalk or Lark and wants to integrate enterprise accounts and the address book. | Saves the enterprise application credentials and establishes a binding for subsequent logon and address book synchronization configuration. |
     * | Custom identity source (`CustomSSO`) | The enterprise wants to integrate its own identity authentication and user management system. | Creates a shared user pool to prepare for subsequent SAML single sign-on (SSO) and SCIM user synchronization configuration. |
     * The user pool is used to store application users and identity integration configurations. SAML handles enterprise account logon, and SCIM handles provisioning users from the enterprise identity system to the user pool. You can configure these two capabilities separately.
     * ### Bind DingTalk or Lark
     * Enter the enterprise application credentials in `metadata`: DingTalk requires `appKey`, `appSecret`, and `corpId`, while Lark requires `appId` and `appSecret`.
     * Logon is enabled by default. A user synchronization task is executed by default upon the first binding. If you want to select departments before synchronization, set `syncOnBind` to `false`.
     * Subsequent address book change synchronization is controlled by `syncEnabled` and is disabled by default. When enabled, you must also provide `encryptKey` and `verificationToken`.
     * ### Bind a custom identity source
     * When creating a `CustomSSO` binding, you only need to specify the identity source type:
     * ```http
     * POST /workspaces/{workspaceId}/identity-providers
     * {"identityProviderType":"CustomSSO"}
     * ```
     * This call only creates the user pool. Logon and user synchronization are disabled by default. Do not enter `metadata` or enable `loginEnabled` and `syncEnabled` during creation.
     * After creation, call [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider) to query the progress. If `WAITING_CONFIGURATION` is returned, the user pool is created and you can proceed with the integration configuration:
     * - **Integrate enterprise account logon**: Call [GetIdentityProviderServiceProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderServiceProvider) to obtain the SAML integration information of AgentCore and configure it in the enterprise identity system. Then, call [UpdateIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProvider) to save the SAML configuration of the enterprise identity system and enable logon as needed.
     * - **Integrate user synchronization**: Call [PrepareIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/PrepareIdentityProviderSCIM) to obtain the SCIM receiving endpoint and credentials, and configure them in the enterprise identity system. After the external configuration is complete, call [UpdateIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProviderSCIM) to enable AgentCore user synchronization.
     * The two processes are independent of each other. You can select one or both based on your business requirements.
     *
     * @param request - CreateIdentityProviderRequest
     * @returns CreateIdentityProviderResponse
     */
    createIdentityProvider(workspaceId: string, request: $_model.CreateIdentityProviderRequest): Promise<$_model.CreateIdentityProviderResponse>;
    /**
     * Issues a SCIM credential explicitly and returns the plaintext token only in the current response. A maximum of two credentials are allowed per pool. This operation does not automatically revoke old credentials or enable AgentCore user synchronization.
     *
     * @remarks
     * Creates a SCIM access token to authorize an enterprise identity system to send user provisioning requests to AgentCore. For example, when you plan to replace the token used by the enterprise identity system, you can create a new token first and revoke the old token after the switchover is complete.
     * SCIM is a user provisioning protocol. The enterprise identity system sends user information by using the receiving endpoint and access token.
     * ### Prerequisites
     * A CustomSSO binding is created, and the SCIM receiving endpoint is enabled by calling [PrepareIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/PrepareIdentityProviderSCIM).
     * A maximum of two SCIM credentials can be retained in the same user pool. When the limit is reached, query existing credentials by calling [ListIdentityProviderSCIMCredentials](https://api.aliyun.com/document/AgentCore/2026-08-04/ListIdentityProviderSCIMCredentials) and revoke the credentials that are no longer in use.
     * ### How to use the credential after creation
     * **Step 1:** Save the plaintext of the token in the response. The token is returned only upon creation. You can only query the credential summary later.
     * **Step 2:** Configure the receiving endpoint and the new token in the enterprise identity system.
     * **Step 3:** After you confirm that the enterprise identity system uses the new token, revoke the old token by calling [DeleteIdentityProviderSCIMCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/DeleteIdentityProviderSCIMCredential) as needed.
     * If the creation response is lost, query the credential list to verify the creation result. This avoids duplicate creation and consuming the credential quota. The user synchronization switch is configured separately by calling [UpdateIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProviderSCIM).
     *
     * @param request - CreateIdentityProviderSCIMCredentialRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateIdentityProviderSCIMCredentialResponse
     */
    createIdentityProviderSCIMCredentialWithOptions(workspaceId: string, request: $_model.CreateIdentityProviderSCIMCredentialRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIdentityProviderSCIMCredentialResponse>;
    /**
     * Issues a SCIM credential explicitly and returns the plaintext token only in the current response. A maximum of two credentials are allowed per pool. This operation does not automatically revoke old credentials or enable AgentCore user synchronization.
     *
     * @remarks
     * Creates a SCIM access token to authorize an enterprise identity system to send user provisioning requests to AgentCore. For example, when you plan to replace the token used by the enterprise identity system, you can create a new token first and revoke the old token after the switchover is complete.
     * SCIM is a user provisioning protocol. The enterprise identity system sends user information by using the receiving endpoint and access token.
     * ### Prerequisites
     * A CustomSSO binding is created, and the SCIM receiving endpoint is enabled by calling [PrepareIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/PrepareIdentityProviderSCIM).
     * A maximum of two SCIM credentials can be retained in the same user pool. When the limit is reached, query existing credentials by calling [ListIdentityProviderSCIMCredentials](https://api.aliyun.com/document/AgentCore/2026-08-04/ListIdentityProviderSCIMCredentials) and revoke the credentials that are no longer in use.
     * ### How to use the credential after creation
     * **Step 1:** Save the plaintext of the token in the response. The token is returned only upon creation. You can only query the credential summary later.
     * **Step 2:** Configure the receiving endpoint and the new token in the enterprise identity system.
     * **Step 3:** After you confirm that the enterprise identity system uses the new token, revoke the old token by calling [DeleteIdentityProviderSCIMCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/DeleteIdentityProviderSCIMCredential) as needed.
     * If the creation response is lost, query the credential list to verify the creation result. This avoids duplicate creation and consuming the credential quota. The user synchronization switch is configured separately by calling [UpdateIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProviderSCIM).
     *
     * @param request - CreateIdentityProviderSCIMCredentialRequest
     * @returns CreateIdentityProviderSCIMCredentialResponse
     */
    createIdentityProviderSCIMCredential(workspaceId: string, request: $_model.CreateIdentityProviderSCIMCredentialRequest): Promise<$_model.CreateIdentityProviderSCIMCredentialResponse>;
    /**
     * Initiates a manual synchronization of an identity provider.
     *
     * @remarks
     * Synchronizes users from an enterprise identity provider to a workspace based on the saved department scope. This operation is suitable for importing users for the first time or manually updating workspace users after adjusting the synchronization scope.
     * ### Prerequisites
     * - The identity provider is configured and its status is `READY`. You can also re-initiate the synchronization if the status is `SYNC_FAILED` after a previous synchronization failure.
     * - The user pool is ready and no identity provider operations are in progress.
     * - Manual synchronization uses the saved `syncScope`. You do not need to enable `syncEnabled`, which is used for subsequent address book change synchronization.
     * ### Steps to synchronize by department
     * **Step 1:** Call [ListIdentityProviderDepartments](https://api.aliyun.com/document/AgentCore/2026-08-04/ListIdentityProviderDepartments) to query departments and select the scope to synchronize.
     * **Step 2:** Call [UpdateIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProvider) to save the `syncScope`, and then call [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider) to wait for the configuration processing to complete.
     * **Step 3:** Call this operation to initiate the synchronization and save the returned `taskId`.
     * **Step 4:** Call [GetIdentityProviderSyncJob](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderSyncJob) to query the progress. After the synchronization is complete, view the workspace user list.
     * If you want to select departments before the initial synchronization, set `syncOnBind=false` when creating the identity provider, and then perform the preceding steps.
     * ### Synchronization results and re-execution
     * Synchronization is subject to the maximum number of users allowed in the workspace. Narrowing the synchronization scope does not automatically delete users that have already been synchronized.
     * Each successful initiation creates a new synchronization task. If a request times out or the response is lost, check the identity provider status by calling [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider) before deciding whether to resubmit the request.
     *
     * @param request - CreateIdentityProviderSyncJobRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateIdentityProviderSyncJobResponse
     */
    createIdentityProviderSyncJobWithOptions(workspaceId: string, identityProviderType: string, request: $_model.CreateIdentityProviderSyncJobRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIdentityProviderSyncJobResponse>;
    /**
     * Initiates a manual synchronization of an identity provider.
     *
     * @remarks
     * Synchronizes users from an enterprise identity provider to a workspace based on the saved department scope. This operation is suitable for importing users for the first time or manually updating workspace users after adjusting the synchronization scope.
     * ### Prerequisites
     * - The identity provider is configured and its status is `READY`. You can also re-initiate the synchronization if the status is `SYNC_FAILED` after a previous synchronization failure.
     * - The user pool is ready and no identity provider operations are in progress.
     * - Manual synchronization uses the saved `syncScope`. You do not need to enable `syncEnabled`, which is used for subsequent address book change synchronization.
     * ### Steps to synchronize by department
     * **Step 1:** Call [ListIdentityProviderDepartments](https://api.aliyun.com/document/AgentCore/2026-08-04/ListIdentityProviderDepartments) to query departments and select the scope to synchronize.
     * **Step 2:** Call [UpdateIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProvider) to save the `syncScope`, and then call [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider) to wait for the configuration processing to complete.
     * **Step 3:** Call this operation to initiate the synchronization and save the returned `taskId`.
     * **Step 4:** Call [GetIdentityProviderSyncJob](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderSyncJob) to query the progress. After the synchronization is complete, view the workspace user list.
     * If you want to select departments before the initial synchronization, set `syncOnBind=false` when creating the identity provider, and then perform the preceding steps.
     * ### Synchronization results and re-execution
     * Synchronization is subject to the maximum number of users allowed in the workspace. Narrowing the synchronization scope does not automatically delete users that have already been synchronized.
     * Each successful initiation creates a new synchronization task. If a request times out or the response is lost, check the identity provider status by calling [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider) before deciding whether to resubmit the request.
     *
     * @param request - CreateIdentityProviderSyncJobRequest
     * @returns CreateIdentityProviderSyncJobResponse
     */
    createIdentityProviderSyncJob(workspaceId: string, identityProviderType: string, request: $_model.CreateIdentityProviderSyncJobRequest): Promise<$_model.CreateIdentityProviderSyncJobResponse>;
    /**
     * Creates or reuses an image cache for ACR Enterprise Edition images in a workspace, and returns the cache status upon acceptance.
     *
     * @remarks
     * Prepares or reuses an ACR Enterprise Edition image cache for custom code or image agents for subsequent deployment and startup.
     * ### Request parameters
     * `regionId`, `workspaceId`, and `clientToken` are passed as query parameters. The region must match the entry endpoint and the workspace.
     * The JSON request body provides `acrInstanceId`, `namespace`, `repository`, and `tag`. For `repository`, specify only the repository name without repeating the namespace. The source repository must have pull authorization for the workspace resource role. You can obtain the authorization URL by calling [GetWorkspaceAcrRamAuthorizeUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetWorkspaceAcrRamAuthorizeUrl).
     * ### Transfer network
     * Both `accessInternet` and `accessVpc` must be provided, and at least one of them must be set to `true`. The server validates these parameters based on the network conditions of the workspace. These parameters control the source reading and transfer for the current operation and do not modify the runtime network of the agent.
     * ### Acceptance and readiness
     * A successful response returns the current cache snapshot. `PENDING` indicates that the cache is being prepared, `READY` indicates that the cache is ready, and `FAILED` indicates a failure. For failures, check the `error` field. Save the `imageId` and call [GetImageCache](https://api.aliyun.com/document/AgentCore/2026-08-04/GetImageCache) to query subsequent results. If the image digest has not been parsed, `digest` may be empty.
     * Currently, `clientToken` is only validated to ensure it is not empty. It does not guarantee deduplication by this identifier or recovery of the original acceptance result. If the result is not confirmed, query the existing cache first.
     *
     * @param tmpReq - CreateImageCacheRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateImageCacheResponse
     */
    createImageCacheWithOptions(tmpReq: $_model.CreateImageCacheRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.CreateImageCacheResponse>;
    /**
     * Creates or reuses an image cache for ACR Enterprise Edition images in a workspace, and returns the cache status upon acceptance.
     *
     * @remarks
     * Prepares or reuses an ACR Enterprise Edition image cache for custom code or image agents for subsequent deployment and startup.
     * ### Request parameters
     * `regionId`, `workspaceId`, and `clientToken` are passed as query parameters. The region must match the entry endpoint and the workspace.
     * The JSON request body provides `acrInstanceId`, `namespace`, `repository`, and `tag`. For `repository`, specify only the repository name without repeating the namespace. The source repository must have pull authorization for the workspace resource role. You can obtain the authorization URL by calling [GetWorkspaceAcrRamAuthorizeUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetWorkspaceAcrRamAuthorizeUrl).
     * ### Transfer network
     * Both `accessInternet` and `accessVpc` must be provided, and at least one of them must be set to `true`. The server validates these parameters based on the network conditions of the workspace. These parameters control the source reading and transfer for the current operation and do not modify the runtime network of the agent.
     * ### Acceptance and readiness
     * A successful response returns the current cache snapshot. `PENDING` indicates that the cache is being prepared, `READY` indicates that the cache is ready, and `FAILED` indicates a failure. For failures, check the `error` field. Save the `imageId` and call [GetImageCache](https://api.aliyun.com/document/AgentCore/2026-08-04/GetImageCache) to query subsequent results. If the image digest has not been parsed, `digest` may be empty.
     * Currently, `clientToken` is only validated to ensure it is not empty. It does not guarantee deduplication by this identifier or recovery of the original acceptance result. If the result is not confirmed, query the existing cache first.
     *
     * @param request - CreateImageCacheRequest
     * @returns CreateImageCacheResponse
     */
    createImageCache(request: $_model.CreateImageCacheRequest): Promise<$_model.CreateImageCacheResponse>;
    /**
     * Creates a managed Harness agent in a specified workspace, configures the harness, model, skills, and runtime resources, and deploys it asynchronously.
     *
     * @remarks
     * Creates an agent by using a platform-managed runtime framework. This corresponds to the "Managed Harness" creation method in the console, where you can configure the model, instructions, and skills.
     * ### Required configurations
     * Submit `name`, `model`, and `runtime`. The `runtime` parameter must include both `compute` and `sessionPolicy`. The agent is deployed and run by the platform. You do not need to provide a code package or container image.
     * ### Harness and model
     * | Harness | Model and connector configurations |
     * | --- | --- |
     * | `qwenpaw` | If you omit `harness` during creation, this type is used by default. Set `model.modelConnectionId` to the workspace model connection ID, and set `model.modelName` to the name of the model created under this connection. |
     * | `qodercli` | The qodercli connector must be enabled in the workspace. Set `model.modelConnectionId` to the model identifier returned by [ListConnectorModels](https://api.aliyun.com/document/AgentCore/2026-08-04/ListConnectorModels). You can omit `model.modelName`. |
     * `harness` is an object, such as `{"type":"qwenpaw"}`. For qodercli, set `harness.configuration.connectorServiceAccountKey` to the account key record ID returned by [ListConnectors](https://api.aliyun.com/document/AgentCore/2026-08-04/ListConnectors), not the original service account key. You can omit this parameter if only one key record exists. You must specify it if multiple records exist. `connectorServiceAccountName` is the account name. Do not specify these two binding fields for qwenpaw.
     * The harness type cannot be changed after creation.
     * ### Instructions, templates, and skills
     * `skills` uses the skill names in the workspace AI registry. If `sourceType=REFERENCE`, the version is referenced by `versionSelector`: use `LABEL` with a label name, or `VERSION` with a specific version number. If the selector is omitted, `LABEL/latest` is used. If `sourceType=STATIC`, static files bundled with the package are used, and no version selector is provided.
     * For `template.aiRegistry`, specify the agent template name and an optional version. If the version is omitted during creation, the published version is resolved and fixed. When a template is used, `instruction`, `promptVariables`, and `subAgents` are derived from the template, and the corresponding fields in the current request do not take effect. Explicit skills and template skills are recorded separately. You can query the target and effective versions by using `configuredSkills` and `skills`.
     * If no template is used, you can set instructions by using `instruction`, declare variables by using `promptVariables`, and configure up to 20 sub-agents by using `subAgents`. The name and instruction of a sub-agent cannot be empty. Each sub-agent name must be unique. Tools currently use `tools[].type=MCP`.
     * ### Runtime configurations and mounts
     * Omitted fields in `runtime.hpa` use the following default values:
     * | Field | Default value | Valid values and description |
     * | --- | --- | --- |
     * | `enabled` | `false` | Specifies whether to enable elastic scaling. |
     * | `minSandboxCount` | `1` | The minimum number of instances. Valid values: 0 to 100. |
     * | `maxSandboxCount` | `10` | The maximum number of instances. Valid values: 0 to 100. The value cannot be less than the minimum number. |
     * | `maxConcurrentSessionsPerSandbox` | `20` | The maximum number of concurrent sessions per instance. Valid values: 1 to 20. |
     * | `sessionTtlSeconds` | `600` | The maximum idle time of a session, in seconds. Valid values: 60 to 86400. |
     * If `sessionPolicy.type=ISOLATED_HEADER_FIELD`, you must provide `headerName`. Do not specify this parameter for other policies.
     * If `network` is provided, you must specify both `accessInternet.enabled` and `accessVpc.enabled`. Actual access is restricted by the workspace network configurations.
     * The total number of `ossMounts` and `agenticFsMounts` cannot exceed 10. The mount target `mountPath` uses an absolute path in the container, such as `/data/train`. It cannot conflict with platform-reserved directories, be duplicated, or form parent-child directory overwrites.
     * File mounts are used to allow the agent to access persistent data. When you use AgenticFS, you can first complete the access point authorization by using [GetWorkspaceAgenticFsMountRamAuthorizeUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetWorkspaceAgenticFsMountRamAuthorizeUrl).
     * The `path` for an OSS mount must be a non-empty directory prefix in a bucket. The `server` for an AgenticFS mount is the access point domain name, without a protocol, port, or path. The `path` is an existing non-empty relative directory in the access point. You cannot mount the root directory of the access point. If `readOnly` is omitted, the default value is `false`.
     * `environment.variables` configures environment variables, and `environment.credentialReferences` references workspace credentials. Environment variable names must be non-empty and unique, and values must be strings.
     * ### Query deployment results
     * A successful response indicates that the request is accepted. Save the `agentId` and use [GetManagedAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetManagedAgent) to query `latestVersionStatus`, `status`, and `sandboxPhaseCounts` to confirm the configuration processing and instance status. `clientToken` is a reserved query parameter and currently does not provide idempotency guarantees.
     *
     * @param tmpReq - CreateManagedAgentRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateManagedAgentResponse
     */
    createManagedAgentWithOptions(workspaceId: string, tmpReq: $_model.CreateManagedAgentRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.CreateManagedAgentResponse>;
    /**
     * Creates a managed Harness agent in a specified workspace, configures the harness, model, skills, and runtime resources, and deploys it asynchronously.
     *
     * @remarks
     * Creates an agent by using a platform-managed runtime framework. This corresponds to the "Managed Harness" creation method in the console, where you can configure the model, instructions, and skills.
     * ### Required configurations
     * Submit `name`, `model`, and `runtime`. The `runtime` parameter must include both `compute` and `sessionPolicy`. The agent is deployed and run by the platform. You do not need to provide a code package or container image.
     * ### Harness and model
     * | Harness | Model and connector configurations |
     * | --- | --- |
     * | `qwenpaw` | If you omit `harness` during creation, this type is used by default. Set `model.modelConnectionId` to the workspace model connection ID, and set `model.modelName` to the name of the model created under this connection. |
     * | `qodercli` | The qodercli connector must be enabled in the workspace. Set `model.modelConnectionId` to the model identifier returned by [ListConnectorModels](https://api.aliyun.com/document/AgentCore/2026-08-04/ListConnectorModels). You can omit `model.modelName`. |
     * `harness` is an object, such as `{"type":"qwenpaw"}`. For qodercli, set `harness.configuration.connectorServiceAccountKey` to the account key record ID returned by [ListConnectors](https://api.aliyun.com/document/AgentCore/2026-08-04/ListConnectors), not the original service account key. You can omit this parameter if only one key record exists. You must specify it if multiple records exist. `connectorServiceAccountName` is the account name. Do not specify these two binding fields for qwenpaw.
     * The harness type cannot be changed after creation.
     * ### Instructions, templates, and skills
     * `skills` uses the skill names in the workspace AI registry. If `sourceType=REFERENCE`, the version is referenced by `versionSelector`: use `LABEL` with a label name, or `VERSION` with a specific version number. If the selector is omitted, `LABEL/latest` is used. If `sourceType=STATIC`, static files bundled with the package are used, and no version selector is provided.
     * For `template.aiRegistry`, specify the agent template name and an optional version. If the version is omitted during creation, the published version is resolved and fixed. When a template is used, `instruction`, `promptVariables`, and `subAgents` are derived from the template, and the corresponding fields in the current request do not take effect. Explicit skills and template skills are recorded separately. You can query the target and effective versions by using `configuredSkills` and `skills`.
     * If no template is used, you can set instructions by using `instruction`, declare variables by using `promptVariables`, and configure up to 20 sub-agents by using `subAgents`. The name and instruction of a sub-agent cannot be empty. Each sub-agent name must be unique. Tools currently use `tools[].type=MCP`.
     * ### Runtime configurations and mounts
     * Omitted fields in `runtime.hpa` use the following default values:
     * | Field | Default value | Valid values and description |
     * | --- | --- | --- |
     * | `enabled` | `false` | Specifies whether to enable elastic scaling. |
     * | `minSandboxCount` | `1` | The minimum number of instances. Valid values: 0 to 100. |
     * | `maxSandboxCount` | `10` | The maximum number of instances. Valid values: 0 to 100. The value cannot be less than the minimum number. |
     * | `maxConcurrentSessionsPerSandbox` | `20` | The maximum number of concurrent sessions per instance. Valid values: 1 to 20. |
     * | `sessionTtlSeconds` | `600` | The maximum idle time of a session, in seconds. Valid values: 60 to 86400. |
     * If `sessionPolicy.type=ISOLATED_HEADER_FIELD`, you must provide `headerName`. Do not specify this parameter for other policies.
     * If `network` is provided, you must specify both `accessInternet.enabled` and `accessVpc.enabled`. Actual access is restricted by the workspace network configurations.
     * The total number of `ossMounts` and `agenticFsMounts` cannot exceed 10. The mount target `mountPath` uses an absolute path in the container, such as `/data/train`. It cannot conflict with platform-reserved directories, be duplicated, or form parent-child directory overwrites.
     * File mounts are used to allow the agent to access persistent data. When you use AgenticFS, you can first complete the access point authorization by using [GetWorkspaceAgenticFsMountRamAuthorizeUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetWorkspaceAgenticFsMountRamAuthorizeUrl).
     * The `path` for an OSS mount must be a non-empty directory prefix in a bucket. The `server` for an AgenticFS mount is the access point domain name, without a protocol, port, or path. The `path` is an existing non-empty relative directory in the access point. You cannot mount the root directory of the access point. If `readOnly` is omitted, the default value is `false`.
     * `environment.variables` configures environment variables, and `environment.credentialReferences` references workspace credentials. Environment variable names must be non-empty and unique, and values must be strings.
     * ### Query deployment results
     * A successful response indicates that the request is accepted. Save the `agentId` and use [GetManagedAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetManagedAgent) to query `latestVersionStatus`, `status`, and `sandboxPhaseCounts` to confirm the configuration processing and instance status. `clientToken` is a reserved query parameter and currently does not provide idempotency guarantees.
     *
     * @param request - CreateManagedAgentRequest
     * @returns CreateManagedAgentResponse
     */
    createManagedAgent(workspaceId: string, request: $_model.CreateManagedAgentRequest): Promise<$_model.CreateManagedAgentResponse>;
    /**
     * Creates an MCP service in a specified workspace. The creation process is asynchronous. You can check the returned status or call a query operation to verify whether the service is ready.
     *
     * @remarks
     * Creates an MCP service in a workspace for agents to use the tools provided by the service.
     * The creation process is asynchronous. After submission, call [GetMcp](https://api.aliyun.com/document/AgentCore/2026-08-04/GetMcp) to check whether the service is ready.
     * To deploy using a local code package, first call [GetMcpCodePackageUploadUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetMcpCodePackageUploadUrl) to obtain the upload URL and upload the file. Then, fill the returned code package token into the deployment configuration.
     * The `clientToken` parameter does not currently provide idempotency guarantees. If the request result is not confirmed, query existing services before deciding whether to recreate.
     *
     * @param tmpReq - CreateMcpRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateMcpResponse
     */
    createMcpWithOptions(workspaceId: string, tmpReq: $_model.CreateMcpRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMcpResponse>;
    /**
     * Creates an MCP service in a specified workspace. The creation process is asynchronous. You can check the returned status or call a query operation to verify whether the service is ready.
     *
     * @remarks
     * Creates an MCP service in a workspace for agents to use the tools provided by the service.
     * The creation process is asynchronous. After submission, call [GetMcp](https://api.aliyun.com/document/AgentCore/2026-08-04/GetMcp) to check whether the service is ready.
     * To deploy using a local code package, first call [GetMcpCodePackageUploadUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetMcpCodePackageUploadUrl) to obtain the upload URL and upload the file. Then, fill the returned code package token into the deployment configuration.
     * The `clientToken` parameter does not currently provide idempotency guarantees. If the request result is not confirmed, query existing services before deciding whether to recreate.
     *
     * @param request - CreateMcpRequest
     * @returns CreateMcpResponse
     */
    createMcp(workspaceId: string, request: $_model.CreateMcpRequest): Promise<$_model.CreateMcpResponse>;
    /**
     * Creates a long-term memory store in a specified workspace.
     *
     * @remarks
     * Creates a long-term memory store (MemoryStore) in a workspace to organize the long-term memory of an agent and its source sessions.
     * After the memory store is created, you can use [AddMemories](https://api.aliyun.com/document/AgentCore/2026-08-04/AddMemories) to write messages or text, and use [SearchMemories](https://api.aliyun.com/document/AgentCore/2026-08-04/SearchMemories) to retrieve memories by semantics.
     *
     * @param tmpReq - CreateMemoryStoreRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateMemoryStoreResponse
     */
    createMemoryStoreWithOptions(workspaceId: string, tmpReq: $_model.CreateMemoryStoreRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMemoryStoreResponse>;
    /**
     * Creates a long-term memory store in a specified workspace.
     *
     * @remarks
     * Creates a long-term memory store (MemoryStore) in a workspace to organize the long-term memory of an agent and its source sessions.
     * After the memory store is created, you can use [AddMemories](https://api.aliyun.com/document/AgentCore/2026-08-04/AddMemories) to write messages or text, and use [SearchMemories](https://api.aliyun.com/document/AgentCore/2026-08-04/SearchMemories) to retrieve memories by semantics.
     *
     * @param request - CreateMemoryStoreRequest
     * @returns CreateMemoryStoreResponse
     */
    createMemoryStore(workspaceId: string, request: $_model.CreateMemoryStoreRequest): Promise<$_model.CreateMemoryStoreResponse>;
    /**
     * Creates a model configuration under a model connection in a specified workspace for model creation.
     *
     * @remarks
     * Creates a model configuration under a model connection in a workspace for model creation, allowing agents to select and invoke the model.
     *
     * @param tmpReq - CreateModelRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateModelResponse
     */
    createModelWithOptions(workspaceId: string, tmpReq: $_model.CreateModelRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.CreateModelResponse>;
    /**
     * Creates a model configuration under a model connection in a specified workspace for model creation.
     *
     * @remarks
     * Creates a model configuration under a model connection in a workspace for model creation, allowing agents to select and invoke the model.
     *
     * @param request - CreateModelRequest
     * @returns CreateModelResponse
     */
    createModel(workspaceId: string, request: $_model.CreateModelRequest): Promise<$_model.CreateModelResponse>;
    /**
     * Creates a model connection in a specified workspace and configures the upstream model service endpoint, invoke protocol, and access credentials for model creation.
     *
     * @remarks
     * Creates a model connection in a specified workspace and configures the upstream model service endpoint, invoke protocol, and access credentials for model creation.
     *
     * @param tmpReq - CreateModelConnectionRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateModelConnectionResponse
     */
    createModelConnectionWithOptions(workspaceId: string, tmpReq: $_model.CreateModelConnectionRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.CreateModelConnectionResponse>;
    /**
     * Creates a model connection in a specified workspace and configures the upstream model service endpoint, invoke protocol, and access credentials for model creation.
     *
     * @remarks
     * Creates a model connection in a specified workspace and configures the upstream model service endpoint, invoke protocol, and access credentials for model creation.
     *
     * @param request - CreateModelConnectionRequest
     * @returns CreateModelConnectionResponse
     */
    createModelConnection(workspaceId: string, request: $_model.CreateModelConnectionRequest): Promise<$_model.CreateModelConnectionResponse>;
    /**
     * Creates permission rules.
     *
     * @remarks
     * Creates access rules in bulk for specified resources in a workspace to define which users or agents can or cannot access the resources.
     *
     * @param tmpReq - CreatePermissionRulesRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreatePermissionRulesResponse
     */
    createPermissionRulesWithOptions(workspaceId: string, tmpReq: $_model.CreatePermissionRulesRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePermissionRulesResponse>;
    /**
     * Creates permission rules.
     *
     * @remarks
     * Creates access rules in bulk for specified resources in a workspace to define which users or agents can or cannot access the resources.
     *
     * @param request - CreatePermissionRulesRequest
     * @returns CreatePermissionRulesResponse
     */
    createPermissionRules(workspaceId: string, request: $_model.CreatePermissionRulesRequest): Promise<$_model.CreatePermissionRulesResponse>;
    /**
     * Creates a skill in a specified workspace and generates an editable draft version. You can derive the draft from an existing version, or specify a target version and a commit message.
     *
     * @remarks
     * Creates a skill and its draft in a workspace for editing skill instructions and related resources. You can derive the draft from an existing version, or specify a target version and a commit message.
     *
     * @param tmpReq - CreateSkillDraftRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateSkillDraftResponse
     */
    createSkillDraftWithOptions(workspaceId: string, tmpReq: $_model.CreateSkillDraftRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSkillDraftResponse>;
    /**
     * Creates a skill in a specified workspace and generates an editable draft version. You can derive the draft from an existing version, or specify a target version and a commit message.
     *
     * @remarks
     * Creates a skill and its draft in a workspace for editing skill instructions and related resources. You can derive the draft from an existing version, or specify a target version and a commit message.
     *
     * @param request - CreateSkillDraftRequest
     * @returns CreateSkillDraftResponse
     */
    createSkillDraft(workspaceId: string, request: $_model.CreateSkillDraftRequest): Promise<$_model.CreateSkillDraftResponse>;
    /**
     * Creates a team in a specified workspace and configures user members and agent members at the same time. The user members must include exactly one member with the ADMIN role, and agent members can only have the LEADER or WORKER role.
     *
     * @remarks
     * Creates a team in a specified workspace and configures user members and agent members at the same time.
     *
     * @param tmpReq - CreateTeamRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateTeamResponse
     */
    createTeamWithOptions(workspaceId: string, tmpReq: $_model.CreateTeamRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTeamResponse>;
    /**
     * Creates a team in a specified workspace and configures user members and agent members at the same time. The user members must include exactly one member with the ADMIN role, and agent members can only have the LEADER or WORKER role.
     *
     * @remarks
     * Creates a team in a specified workspace and configures user members and agent members at the same time.
     *
     * @param request - CreateTeamRequest
     * @returns CreateTeamResponse
     */
    createTeam(workspaceId: string, request: $_model.CreateTeamRequest): Promise<$_model.CreateTeamResponse>;
    /**
     * Creates a user in a specified workspace. The username must be unique within the workspace, can contain only lowercase letters, digits, and hyphens, and cannot be a reserved name such as manager, admin, or any name starting with worker-. If the password is not specified, the server generates an initial password and returns it in the initialPassword field of the response.
     *
     * @remarks
     * Creates a user in a workspace for member collaboration and application access, which can be used to configure team members and user logons.
     *
     * @param tmpReq - CreateUserRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateUserResponse
     */
    createUserWithOptions(workspaceId: string, tmpReq: $_model.CreateUserRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserResponse>;
    /**
     * Creates a user in a specified workspace. The username must be unique within the workspace, can contain only lowercase letters, digits, and hyphens, and cannot be a reserved name such as manager, admin, or any name starting with worker-. If the password is not specified, the server generates an initial password and returns it in the initialPassword field of the response.
     *
     * @remarks
     * Creates a user in a workspace for member collaboration and application access, which can be used to configure team members and user logons.
     *
     * @param request - CreateUserRequest
     * @returns CreateUserResponse
     */
    createUser(workspaceId: string, request: $_model.CreateUserRequest): Promise<$_model.CreateUserResponse>;
    /**
     * Creates an AgentCore workspace as a resource scope for organizing agents, models, MCP services, and collaboration configurations.
     *
     * @remarks
     * Creates an AgentCore workspace as a resource scope for organizing agents, models, MCP services, and collaboration configurations.
     * After the workspace is created, you can use the returned workspace ID to call [GetWorkspace](https://api.aliyun.com/document/AgentCore/2026-08-04/GetWorkspace) to query the details, and then manage agents and associated resources in the workspace. For network configuration fields and their dependencies, see the request parameters table.
     *
     * @param tmpReq - CreateWorkspaceRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateWorkspaceResponse
     */
    createWorkspaceWithOptions(tmpReq: $_model.CreateWorkspaceRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWorkspaceResponse>;
    /**
     * Creates an AgentCore workspace as a resource scope for organizing agents, models, MCP services, and collaboration configurations.
     *
     * @remarks
     * Creates an AgentCore workspace as a resource scope for organizing agents, models, MCP services, and collaboration configurations.
     * After the workspace is created, you can use the returned workspace ID to call [GetWorkspace](https://api.aliyun.com/document/AgentCore/2026-08-04/GetWorkspace) to query the details, and then manage agents and associated resources in the workspace. For network configuration fields and their dependencies, see the request parameters table.
     *
     * @param request - CreateWorkspaceRequest
     * @returns CreateWorkspaceResponse
     */
    createWorkspace(request: $_model.CreateWorkspaceRequest): Promise<$_model.CreateWorkspaceResponse>;
    /**
     * Invokes a specified model through a published model connection to verify whether the model invocation pipeline is available.
     *
     * @remarks
     * Invokes a specified model through a published model connection to verify whether the model invocation pipeline is available.
     *
     * @param tmpReq - DebugModelRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DebugModelResponse
     */
    debugModelWithOptions(workspaceId: string, modelId: string, tmpReq: $_model.DebugModelRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.DebugModelResponse>;
    /**
     * Invokes a specified model through a published model connection to verify whether the model invocation pipeline is available.
     *
     * @remarks
     * Invokes a specified model through a published model connection to verify whether the model invocation pipeline is available.
     *
     * @param request - DebugModelRequest
     * @returns DebugModelResponse
     */
    debugModel(workspaceId: string, modelId: string, request: $_model.DebugModelRequest): Promise<$_model.DebugModelResponse>;
    /**
     * Deletes an access application.
     *
     * @remarks
     * Deletes a specified access application and removes its access configuration from the workspace.
     *
     * @param request - DeleteAccessApplicationRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAccessApplicationResponse
     */
    deleteAccessApplicationWithOptions(workspaceId: string, applicationId: string, request: $_model.DeleteAccessApplicationRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAccessApplicationResponse>;
    /**
     * Deletes an access application.
     *
     * @remarks
     * Deletes a specified access application and removes its access configuration from the workspace.
     *
     * @param request - DeleteAccessApplicationRequest
     * @returns DeleteAccessApplicationResponse
     */
    deleteAccessApplication(workspaceId: string, applicationId: string, request: $_model.DeleteAccessApplicationRequest): Promise<$_model.DeleteAccessApplicationResponse>;
    /**
     * Deletes the IM channel of a specified agent.
     *
     * @remarks
     * Deletes the IM channel of a specified agent.
     *
     * @param request - DeleteAgentIMChannelRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAgentIMChannelResponse
     */
    deleteAgentIMChannelWithOptions(workspaceId: string, agentId: string, imChannelId: string, request: $_model.DeleteAgentIMChannelRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAgentIMChannelResponse>;
    /**
     * Deletes the IM channel of a specified agent.
     *
     * @remarks
     * Deletes the IM channel of a specified agent.
     *
     * @param request - DeleteAgentIMChannelRequest
     * @returns DeleteAgentIMChannelResponse
     */
    deleteAgentIMChannel(workspaceId: string, agentId: string, imChannelId: string, request: $_model.DeleteAgentIMChannelRequest): Promise<$_model.DeleteAgentIMChannelResponse>;
    /**
     * Deletes the specified AgentSpec and all its versions and metadata. The deletion operation is irreversible.
     *
     * @remarks
     * Deletes the specified agent template and all its versions and metadata.
     * The deletion operation is irreversible.
     *
     * @param request - DeleteAgentSpecRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAgentSpecResponse
     */
    deleteAgentSpecWithOptions(workspaceId: string, agentSpecName: string, request: $_model.DeleteAgentSpecRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAgentSpecResponse>;
    /**
     * Deletes the specified AgentSpec and all its versions and metadata. The deletion operation is irreversible.
     *
     * @remarks
     * Deletes the specified agent template and all its versions and metadata.
     * The deletion operation is irreversible.
     *
     * @param request - DeleteAgentSpecRequest
     * @returns DeleteAgentSpecResponse
     */
    deleteAgentSpec(workspaceId: string, agentSpecName: string, request: $_model.DeleteAgentSpecRequest): Promise<$_model.DeleteAgentSpecResponse>;
    /**
     * Deletes the draft version of the specified AgentSpec that is currently being edited and clears the draft version pointer.
     *
     * @remarks
     * Deletes the draft version of the agent template (AgentSpec) that is currently being edited.
     *
     * @param request - DeleteAgentSpecVersionRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAgentSpecVersionResponse
     */
    deleteAgentSpecVersionWithOptions(workspaceId: string, agentSpecName: string, request: $_model.DeleteAgentSpecVersionRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAgentSpecVersionResponse>;
    /**
     * Deletes the draft version of the specified AgentSpec that is currently being edited and clears the draft version pointer.
     *
     * @remarks
     * Deletes the draft version of the agent template (AgentSpec) that is currently being edited.
     *
     * @param request - DeleteAgentSpecVersionRequest
     * @returns DeleteAgentSpecVersionResponse
     */
    deleteAgentSpecVersion(workspaceId: string, agentSpecName: string, request: $_model.DeleteAgentSpecVersionRequest): Promise<$_model.DeleteAgentSpecVersionResponse>;
    /**
     * Deletes an agent version.
     *
     * @remarks
     * Deletes a saved fixed version of a specified managed or custom agent. Versions that are still referenced by service endpoints cannot be deleted, and the system-maintained latest version cannot be deleted.
     *
     * @param request - DeleteAgentVersionRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAgentVersionResponse
     */
    deleteAgentVersionWithOptions(workspaceId: string, agentId: string, agentVersion: string, request: $_model.DeleteAgentVersionRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAgentVersionResponse>;
    /**
     * Deletes an agent version.
     *
     * @remarks
     * Deletes a saved fixed version of a specified managed or custom agent. Versions that are still referenced by service endpoints cannot be deleted, and the system-maintained latest version cannot be deleted.
     *
     * @param request - DeleteAgentVersionRequest
     * @returns DeleteAgentVersionResponse
     */
    deleteAgentVersion(workspaceId: string, agentId: string, agentVersion: string, request: $_model.DeleteAgentVersionRequest): Promise<$_model.DeleteAgentVersionResponse>;
    /**
     * Deletes a specified credential in a workspace and the ciphertext hosted in the credential service. After the deletion, agents bound to the credential can no longer obtain the credential content.
     *
     * @remarks
     * Deletes access credentials that are no longer used in a workspace.
     * If a credential is still bound to an MCP service, dissociate it before deletion.
     *
     * @param request - DeleteCredentialRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteCredentialResponse
     */
    deleteCredentialWithOptions(workspaceId: string, credentialId: string, request: $_model.DeleteCredentialRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCredentialResponse>;
    /**
     * Deletes a specified credential in a workspace and the ciphertext hosted in the credential service. After the deletion, agents bound to the credential can no longer obtain the credential content.
     *
     * @remarks
     * Deletes access credentials that are no longer used in a workspace.
     * If a credential is still bound to an MCP service, dissociate it before deletion.
     *
     * @param request - DeleteCredentialRequest
     * @returns DeleteCredentialResponse
     */
    deleteCredential(workspaceId: string, credentialId: string, request: $_model.DeleteCredentialRequest): Promise<$_model.DeleteCredentialResponse>;
    /**
     * Deletes a custom code or image agent in a specified workspace and asynchronously cleans up its associated platform resources.
     *
     * @remarks
     * Deletes a custom code or image agent in a specified workspace and asynchronously cleans up its associated platform resources.
     * ### Prerequisites
     * The workspace must be writable. If the agent is still associated with a team, dissociate it from the team first.
     * ### Deletion results
     * A successful response indicates that the deletion request has been accepted, and the response summary is typically `status=Deleting`. If the agent is already being deleted, a subsequent request returns the current summary.
     * Call [GetCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCustomAgent) to query the deletion progress. After the deletion is complete, a details query returns a resource not found error. Runtime resources are cleaned up in the background.
     *
     * @param request - DeleteCustomAgentRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteCustomAgentResponse
     */
    deleteCustomAgentWithOptions(workspaceId: string, agentId: string, request: $_model.DeleteCustomAgentRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomAgentResponse>;
    /**
     * Deletes a custom code or image agent in a specified workspace and asynchronously cleans up its associated platform resources.
     *
     * @remarks
     * Deletes a custom code or image agent in a specified workspace and asynchronously cleans up its associated platform resources.
     * ### Prerequisites
     * The workspace must be writable. If the agent is still associated with a team, dissociate it from the team first.
     * ### Deletion results
     * A successful response indicates that the deletion request has been accepted, and the response summary is typically `status=Deleting`. If the agent is already being deleted, a subsequent request returns the current summary.
     * Call [GetCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCustomAgent) to query the deletion progress. After the deletion is complete, a details query returns a resource not found error. Runtime resources are cleaned up in the background.
     *
     * @param request - DeleteCustomAgentRequest
     * @returns DeleteCustomAgentResponse
     */
    deleteCustomAgent(workspaceId: string, agentId: string, request: $_model.DeleteCustomAgentRequest): Promise<$_model.DeleteCustomAgentResponse>;
    /**
     * Deletes a managed agent from a specified workspace and asynchronously cleans up its associated platform resources.
     *
     * @remarks
     * Deletes a managed agent from a specified workspace and asynchronously cleans up its associated platform resources.
     * ### Prerequisites
     * The workspace must be writable. If the agent is still associated with a team, dissociate it from the team first.
     * ### Deletion results
     * A successful response indicates that the deletion request has been accepted, and the response summary is typically `status=Deleting`. If the agent is already being deleted, a subsequent request returns the current summary.
     * Call [GetExternalAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgent) to query the deletion progress. After the deletion is complete, a details query returns a resource not found error. The processes and runtime environments of managed agents are managed by the caller.
     *
     * @param request - DeleteExternalAgentRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteExternalAgentResponse
     */
    deleteExternalAgentWithOptions(workspaceId: string, agentId: string, request: $_model.DeleteExternalAgentRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteExternalAgentResponse>;
    /**
     * Deletes a managed agent from a specified workspace and asynchronously cleans up its associated platform resources.
     *
     * @remarks
     * Deletes a managed agent from a specified workspace and asynchronously cleans up its associated platform resources.
     * ### Prerequisites
     * The workspace must be writable. If the agent is still associated with a team, dissociate it from the team first.
     * ### Deletion results
     * A successful response indicates that the deletion request has been accepted, and the response summary is typically `status=Deleting`. If the agent is already being deleted, a subsequent request returns the current summary.
     * Call [GetExternalAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgent) to query the deletion progress. After the deletion is complete, a details query returns a resource not found error. The processes and runtime environments of managed agents are managed by the caller.
     *
     * @param request - DeleteExternalAgentRequest
     * @returns DeleteExternalAgentResponse
     */
    deleteExternalAgent(workspaceId: string, agentId: string, request: $_model.DeleteExternalAgentRequest): Promise<$_model.DeleteExternalAgentResponse>;
    /**
     * Disconnects the identity source integration for a workspace. For CustomSSO, this operation clears the shared user pool and related SAML and SCIM resources. To disable only logon or synchronization, use the corresponding API operations.
     *
     * @remarks
     * Disconnects the workspace from the enterprise identity source to end identity federation, or clears the current attachment before attaching another identity source.
     * Disconnecting clears the AgentCore users and associated configurations imported from the identity source. For `CustomSSO`, it also clears the shared user pool and SAML and SCIM access resources. Applications created by users in the enterprise identity system must still be managed on the enterprise side.
     * ### Preparations before disconnection
     * First, remove the references between the relevant users and collaboration teams. If any team still references these users, the API operation rejects the disconnection request.
     * If you only want to temporarily disable a specific capability, you can retain the identity source binding: disable logon by calling [UpdateIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProvider), or disable SCIM synchronization by calling [UpdateIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProviderSCIM).
     * ### Verify the disconnection result
     * The disconnection is executed in the background. After the request is accepted, `DISCONNECTING` is returned. You can query the progress by calling [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider):
     * - If the query returns `IdentityProviderNotFound`, the binding has been removed and the disconnection is complete.
     * - If `DISCONNECT_FAILED` is returned, the cleanup failed. Some resources may have already been cleaned up. You can initiate the disconnection again.
     * You can bind a new identity source to the workspace only after the disconnection is complete.
     *
     * @param request - DeleteIdentityProviderRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteIdentityProviderResponse
     */
    deleteIdentityProviderWithOptions(workspaceId: string, identityProviderType: string, request: $_model.DeleteIdentityProviderRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIdentityProviderResponse>;
    /**
     * Disconnects the identity source integration for a workspace. For CustomSSO, this operation clears the shared user pool and related SAML and SCIM resources. To disable only logon or synchronization, use the corresponding API operations.
     *
     * @remarks
     * Disconnects the workspace from the enterprise identity source to end identity federation, or clears the current attachment before attaching another identity source.
     * Disconnecting clears the AgentCore users and associated configurations imported from the identity source. For `CustomSSO`, it also clears the shared user pool and SAML and SCIM access resources. Applications created by users in the enterprise identity system must still be managed on the enterprise side.
     * ### Preparations before disconnection
     * First, remove the references between the relevant users and collaboration teams. If any team still references these users, the API operation rejects the disconnection request.
     * If you only want to temporarily disable a specific capability, you can retain the identity source binding: disable logon by calling [UpdateIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProvider), or disable SCIM synchronization by calling [UpdateIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProviderSCIM).
     * ### Verify the disconnection result
     * The disconnection is executed in the background. After the request is accepted, `DISCONNECTING` is returned. You can query the progress by calling [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider):
     * - If the query returns `IdentityProviderNotFound`, the binding has been removed and the disconnection is complete.
     * - If `DISCONNECT_FAILED` is returned, the cleanup failed. Some resources may have already been cleaned up. You can initiate the disconnection again.
     * You can bind a new identity source to the workspace only after the disconnection is complete.
     *
     * @param request - DeleteIdentityProviderRequest
     * @returns DeleteIdentityProviderResponse
     */
    deleteIdentityProvider(workspaceId: string, identityProviderType: string, request: $_model.DeleteIdentityProviderRequest): Promise<$_model.DeleteIdentityProviderResponse>;
    /**
     * Revokes a specified SCIM credential. This operation does not trigger automatic creation of a new token, modify the access configuration synchronization switch, or disable SAML logon.
     *
     * @remarks
     * Revokes a SCIM access token to deactivate an old token or clean up unused or expired credentials.
     * SCIM tokens are used to authorize enterprise identity systems to send user provisioning requests to user pools. After revocation, the enterprise identity system can no longer use the token to access the SCIM endpoint.
     * ### Usage
     * **Step 1:** Query the credential list by calling [ListIdentityProviderSCIMCredentials](https://api.aliyun.com/document/AgentCore/2026-08-04/ListIdentityProviderSCIMCredentials) to obtain the target credentialId.
     * **Step 2:** If the enterprise identity system is still using the token, configure another valid token for it first.
     * **Step 3:** Call this operation to revoke the target credential, and then refresh the list to confirm the result.
     * This operation only revokes the specified token. Synchronized users, other tokens, logon configurations, and the user synchronization switch are retained. To disable user synchronization, call [UpdateIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProviderSCIM).
     *
     * @param request - DeleteIdentityProviderSCIMCredentialRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteIdentityProviderSCIMCredentialResponse
     */
    deleteIdentityProviderSCIMCredentialWithOptions(workspaceId: string, credentialId: string, request: $_model.DeleteIdentityProviderSCIMCredentialRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIdentityProviderSCIMCredentialResponse>;
    /**
     * Revokes a specified SCIM credential. This operation does not trigger automatic creation of a new token, modify the access configuration synchronization switch, or disable SAML logon.
     *
     * @remarks
     * Revokes a SCIM access token to deactivate an old token or clean up unused or expired credentials.
     * SCIM tokens are used to authorize enterprise identity systems to send user provisioning requests to user pools. After revocation, the enterprise identity system can no longer use the token to access the SCIM endpoint.
     * ### Usage
     * **Step 1:** Query the credential list by calling [ListIdentityProviderSCIMCredentials](https://api.aliyun.com/document/AgentCore/2026-08-04/ListIdentityProviderSCIMCredentials) to obtain the target credentialId.
     * **Step 2:** If the enterprise identity system is still using the token, configure another valid token for it first.
     * **Step 3:** Call this operation to revoke the target credential, and then refresh the list to confirm the result.
     * This operation only revokes the specified token. Synchronized users, other tokens, logon configurations, and the user synchronization switch are retained. To disable user synchronization, call [UpdateIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProviderSCIM).
     *
     * @param request - DeleteIdentityProviderSCIMCredentialRequest
     * @returns DeleteIdentityProviderSCIMCredentialResponse
     */
    deleteIdentityProviderSCIMCredential(workspaceId: string, credentialId: string, request: $_model.DeleteIdentityProviderSCIMCredentialRequest): Promise<$_model.DeleteIdentityProviderSCIMCredentialResponse>;
    /**
     * Deletes the image cache association in a workspace and checks agent references and instance usage before submission.
     *
     * @remarks
     * Deletes the image cache association in a workspace and checks agent references and instance usage before submission.
     * ### Deletion conditions
     * The deletion request is rejected if the cache is still referenced by an agent with the cache switch enabled, or if the cache is still in use by instances or being released. You can first query `agentCount`, `canDelete`, and `deleteBlockReason` by calling [GetImageCache](https://api.aliyun.com/document/AgentCore/2026-08-04/GetImageCache).
     * ### Query results
     * The `imageId` in the response corresponds to this request. The current implementation of `deletionPending` returns `false`. To check whether the cache is still visible, call [GetImageCache](https://api.aliyun.com/document/AgentCore/2026-08-04/GetImageCache) or [ListImageCaches](https://api.aliyun.com/document/AgentCore/2026-08-04/ListImageCaches).
     * This operation deletes the cache association in the specified workspace. It does not delete the source ACR repository or the source image.
     *
     * @param request - DeleteImageCacheRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteImageCacheResponse
     */
    deleteImageCacheWithOptions(imageId: string, request: $_model.DeleteImageCacheRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteImageCacheResponse>;
    /**
     * Deletes the image cache association in a workspace and checks agent references and instance usage before submission.
     *
     * @remarks
     * Deletes the image cache association in a workspace and checks agent references and instance usage before submission.
     * ### Deletion conditions
     * The deletion request is rejected if the cache is still referenced by an agent with the cache switch enabled, or if the cache is still in use by instances or being released. You can first query `agentCount`, `canDelete`, and `deleteBlockReason` by calling [GetImageCache](https://api.aliyun.com/document/AgentCore/2026-08-04/GetImageCache).
     * ### Query results
     * The `imageId` in the response corresponds to this request. The current implementation of `deletionPending` returns `false`. To check whether the cache is still visible, call [GetImageCache](https://api.aliyun.com/document/AgentCore/2026-08-04/GetImageCache) or [ListImageCaches](https://api.aliyun.com/document/AgentCore/2026-08-04/ListImageCaches).
     * This operation deletes the cache association in the specified workspace. It does not delete the source ACR repository or the source image.
     *
     * @param request - DeleteImageCacheRequest
     * @returns DeleteImageCacheResponse
     */
    deleteImageCache(imageId: string, request: $_model.DeleteImageCacheRequest): Promise<$_model.DeleteImageCacheResponse>;
    /**
     * Deletes a managed Harness agent in a specified workspace and asynchronously cleans up its platform-associated resources.
     *
     * @remarks
     * Deletes a managed Harness agent in a specified workspace and asynchronously cleans up its platform-associated resources.
     * ### Call conditions
     * The workspace must be writable. If the agent is still associated with a team, dissociate it from the team first.
     * ### Deletion results
     * A successful response indicates that the deletion request has been accepted, and the response summary is typically `status=Deleting`. If the agent is already being deleted, subsequent requests return the current summary.
     * Use [GetManagedAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetManagedAgent) to query the deletion progress. After the deletion is complete, a details query returns a resource not found error. Runtime resources are cleaned up in the background.
     *
     * @param request - DeleteManagedAgentRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteManagedAgentResponse
     */
    deleteManagedAgentWithOptions(workspaceId: string, agentId: string, request: $_model.DeleteManagedAgentRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteManagedAgentResponse>;
    /**
     * Deletes a managed Harness agent in a specified workspace and asynchronously cleans up its platform-associated resources.
     *
     * @remarks
     * Deletes a managed Harness agent in a specified workspace and asynchronously cleans up its platform-associated resources.
     * ### Call conditions
     * The workspace must be writable. If the agent is still associated with a team, dissociate it from the team first.
     * ### Deletion results
     * A successful response indicates that the deletion request has been accepted, and the response summary is typically `status=Deleting`. If the agent is already being deleted, subsequent requests return the current summary.
     * Use [GetManagedAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetManagedAgent) to query the deletion progress. After the deletion is complete, a details query returns a resource not found error. Runtime resources are cleaned up in the background.
     *
     * @param request - DeleteManagedAgentRequest
     * @returns DeleteManagedAgentResponse
     */
    deleteManagedAgent(workspaceId: string, agentId: string, request: $_model.DeleteManagedAgentRequest): Promise<$_model.DeleteManagedAgentResponse>;
    /**
     * Deletes a specified MCP service. The deletion is an asynchronous process. After the process is complete, the MCP service is no longer returned.
     *
     * @remarks
     * Deletes a specified MCP service.
     * The deletion is an asynchronous process. After the process is complete, the MCP service is no longer returned.
     *
     * @param request - DeleteMcpRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteMcpResponse
     */
    deleteMcpWithOptions(mcpServerId: string, workspaceId: string, request: $_model.DeleteMcpRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMcpResponse>;
    /**
     * Deletes a specified MCP service. The deletion is an asynchronous process. After the process is complete, the MCP service is no longer returned.
     *
     * @remarks
     * Deletes a specified MCP service.
     * The deletion is an asynchronous process. After the process is complete, the MCP service is no longer returned.
     *
     * @param request - DeleteMcpRequest
     * @returns DeleteMcpResponse
     */
    deleteMcp(mcpServerId: string, workspaceId: string, request: $_model.DeleteMcpRequest): Promise<$_model.DeleteMcpResponse>;
    /**
     * Deletes a long-term memory by memory ID.
     *
     * @remarks
     * Deletes a long-term memory by memory ID.
     *
     * @param request - DeleteMemoryRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteMemoryResponse
     */
    deleteMemoryWithOptions(workspaceId: string, memoryStoreName: string, memoryId: string, request: $_model.DeleteMemoryRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMemoryResponse>;
    /**
     * Deletes a long-term memory by memory ID.
     *
     * @remarks
     * Deletes a long-term memory by memory ID.
     *
     * @param request - DeleteMemoryRequest
     * @returns DeleteMemoryResponse
     */
    deleteMemory(workspaceId: string, memoryStoreName: string, memoryId: string, request: $_model.DeleteMemoryRequest): Promise<$_model.DeleteMemoryResponse>;
    /**
     * Asynchronously deletes a MemoryStore and all its long-term memory.
     *
     * @remarks
     * Asynchronously deletes a specified long-term memory store (MemoryStore) and all long-term memories within it.
     *
     * @param request - DeleteMemoryStoreRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteMemoryStoreResponse
     */
    deleteMemoryStoreWithOptions(workspaceId: string, memoryStoreName: string, request: $_model.DeleteMemoryStoreRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMemoryStoreResponse>;
    /**
     * Asynchronously deletes a MemoryStore and all its long-term memory.
     *
     * @remarks
     * Asynchronously deletes a specified long-term memory store (MemoryStore) and all long-term memories within it.
     *
     * @param request - DeleteMemoryStoreRequest
     * @returns DeleteMemoryStoreResponse
     */
    deleteMemoryStore(workspaceId: string, memoryStoreName: string, request: $_model.DeleteMemoryStoreRequest): Promise<$_model.DeleteMemoryStoreResponse>;
    /**
     * Deletes a model in a specified workspace. Models that are in use cannot be deleted.
     *
     * @remarks
     * Deletes a model in a specified workspace. Models that are in use cannot be deleted.
     *
     * @param request - DeleteModelRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteModelResponse
     */
    deleteModelWithOptions(workspaceId: string, modelId: string, request: $_model.DeleteModelRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteModelResponse>;
    /**
     * Deletes a model in a specified workspace. Models that are in use cannot be deleted.
     *
     * @remarks
     * Deletes a model in a specified workspace. Models that are in use cannot be deleted.
     *
     * @param request - DeleteModelRequest
     * @returns DeleteModelResponse
     */
    deleteModel(workspaceId: string, modelId: string, request: $_model.DeleteModelRequest): Promise<$_model.DeleteModelResponse>;
    /**
     * Submits an asynchronous deletion task for a specified model connection. The connection cannot be deleted if it has associated models or runtime references.
     *
     * @remarks
     * Submits an asynchronous deletion task for a specified model connection. The connection cannot be deleted if it has associated models or runtime references.
     *
     * @param request - DeleteModelConnectionRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteModelConnectionResponse
     */
    deleteModelConnectionWithOptions(workspaceId: string, connectionId: string, request: $_model.DeleteModelConnectionRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteModelConnectionResponse>;
    /**
     * Submits an asynchronous deletion task for a specified model connection. The connection cannot be deleted if it has associated models or runtime references.
     *
     * @remarks
     * Submits an asynchronous deletion task for a specified model connection. The connection cannot be deleted if it has associated models or runtime references.
     *
     * @param request - DeleteModelConnectionRequest
     * @returns DeleteModelConnectionResponse
     */
    deleteModelConnection(workspaceId: string, connectionId: string, request: $_model.DeleteModelConnectionRequest): Promise<$_model.DeleteModelConnectionResponse>;
    /**
     * Deletes a permission rule.
     *
     * @remarks
     * Deletes an access rule in a workspace and revokes the configuration of the rule. Repeated deletion requests still return a success response.
     *
     * @param request - DeletePermissionRuleRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeletePermissionRuleResponse
     */
    deletePermissionRuleWithOptions(workspaceId: string, permissionRuleId: string, request: $_model.DeletePermissionRuleRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePermissionRuleResponse>;
    /**
     * Deletes a permission rule.
     *
     * @remarks
     * Deletes an access rule in a workspace and revokes the configuration of the rule. Repeated deletion requests still return a success response.
     *
     * @param request - DeletePermissionRuleRequest
     * @returns DeletePermissionRuleResponse
     */
    deletePermissionRule(workspaceId: string, permissionRuleId: string, request: $_model.DeletePermissionRuleRequest): Promise<$_model.DeletePermissionRuleResponse>;
    /**
     * Deletes a skill and its related version data from the specified workspace. This operation is irreversible.
     *
     * @remarks
     * Deletes a skill and its related version data from the specified workspace.
     * This operation is irreversible.
     *
     * @param request - DeleteSkillRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteSkillResponse
     */
    deleteSkillWithOptions(workspaceId: string, skillName: string, request: $_model.DeleteSkillRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSkillResponse>;
    /**
     * Deletes a skill and its related version data from the specified workspace. This operation is irreversible.
     *
     * @remarks
     * Deletes a skill and its related version data from the specified workspace.
     * This operation is irreversible.
     *
     * @param request - DeleteSkillRequest
     * @returns DeleteSkillResponse
     */
    deleteSkill(workspaceId: string, skillName: string, request: $_model.DeleteSkillRequest): Promise<$_model.DeleteSkillResponse>;
    /**
     * Deletes the draft version of the specified skill that is currently being edited.
     *
     * @remarks
     * Deletes the draft of a skill that is being edited in normal version mode.
     * In `HEAD` mode, a persistent draft is used, and draft deletion is not supported. To modify the content, continue editing the draft. To remove the entire skill, use [DeleteSkill](https://api.aliyun.com/document/AgentCore/2026-08-04/DeleteSkill).
     *
     * @param request - DeleteSkillDraftRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteSkillDraftResponse
     */
    deleteSkillDraftWithOptions(workspaceId: string, skillName: string, request: $_model.DeleteSkillDraftRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSkillDraftResponse>;
    /**
     * Deletes the draft version of the specified skill that is currently being edited.
     *
     * @remarks
     * Deletes the draft of a skill that is being edited in normal version mode.
     * In `HEAD` mode, a persistent draft is used, and draft deletion is not supported. To modify the content, continue editing the draft. To remove the entire skill, use [DeleteSkill](https://api.aliyun.com/document/AgentCore/2026-08-04/DeleteSkill).
     *
     * @param request - DeleteSkillDraftRequest
     * @returns DeleteSkillDraftResponse
     */
    deleteSkillDraft(workspaceId: string, skillName: string, request: $_model.DeleteSkillDraftRequest): Promise<$_model.DeleteSkillDraftResponse>;
    /**
     * Deletes a team in a specified workspace. Deleting a team does not delete the users and agents within it, but only dissociates the members.
     *
     * @remarks
     * Deletes a team in a specified workspace.
     *
     * @param request - DeleteTeamRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteTeamResponse
     */
    deleteTeamWithOptions(workspaceId: string, teamId: string, request: $_model.DeleteTeamRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTeamResponse>;
    /**
     * Deletes a team in a specified workspace. Deleting a team does not delete the users and agents within it, but only dissociates the members.
     *
     * @remarks
     * Deletes a team in a specified workspace.
     *
     * @param request - DeleteTeamRequest
     * @returns DeleteTeamResponse
     */
    deleteTeam(workspaceId: string, teamId: string, request: $_model.DeleteTeamRequest): Promise<$_model.DeleteTeamResponse>;
    /**
     * Deletes a user from a specified workspace. A user cannot be deleted if they are still a member of any team. Remove the user from the team first.
     *
     * @remarks
     * Deletes a user from a specified workspace.
     *
     * @param request - DeleteUserRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteUserResponse
     */
    deleteUserWithOptions(workspaceId: string, agentCoreUserId: string, request: $_model.DeleteUserRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserResponse>;
    /**
     * Deletes a user from a specified workspace. A user cannot be deleted if they are still a member of any team. Remove the user from the team first.
     *
     * @remarks
     * Deletes a user from a specified workspace.
     *
     * @param request - DeleteUserRequest
     * @returns DeleteUserResponse
     */
    deleteUser(workspaceId: string, agentCoreUserId: string, request: $_model.DeleteUserRequest): Promise<$_model.DeleteUserResponse>;
    /**
     * Deletes a workspace that is no longer in use and ends the management lifecycle of the workspace.
     *
     * @remarks
     * Deletes a workspace that is no longer in use and ends the management lifecycle of the workspace.
     * If you repeatedly delete the same workspace that is in the `Deleting` or `Deleted` state, the API operation processes the request based on idempotence.
     *
     * @param request - DeleteWorkspaceRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteWorkspaceResponse
     */
    deleteWorkspaceWithOptions(workspaceId: string, request: $_model.DeleteWorkspaceRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWorkspaceResponse>;
    /**
     * Deletes a workspace that is no longer in use and ends the management lifecycle of the workspace.
     *
     * @remarks
     * Deletes a workspace that is no longer in use and ends the management lifecycle of the workspace.
     * If you repeatedly delete the same workspace that is in the `Deleting` or `Deleted` state, the API operation processes the request based on idempotence.
     *
     * @param request - DeleteWorkspaceRequest
     * @returns DeleteWorkspaceResponse
     */
    deleteWorkspace(workspaceId: string, request: $_model.DeleteWorkspaceRequest): Promise<$_model.DeleteWorkspaceResponse>;
    /**
     * Disables the QoderCLI connector in a specified workspace. The connector can be disabled only if no agents are using it. After the connector is disabled, the connector and its service account key configuration are removed.
     *
     * @remarks
     * Disables the QoderCLI connector in a workspace.
     *
     * @param request - DisableConnectorRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DisableConnectorResponse
     */
    disableConnectorWithOptions(workspaceId: string, connectorName: string, request: $_model.DisableConnectorRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.DisableConnectorResponse>;
    /**
     * Disables the QoderCLI connector in a specified workspace. The connector can be disabled only if no agents are using it. After the connector is disabled, the connector and its service account key configuration are removed.
     *
     * @remarks
     * Disables the QoderCLI connector in a workspace.
     *
     * @param request - DisableConnectorRequest
     * @returns DisableConnectorResponse
     */
    disableConnector(workspaceId: string, connectorName: string, request: $_model.DisableConnectorRequest): Promise<$_model.DisableConnectorResponse>;
    /**
     * Retrieves the OSS presigned download URL for a specified AgentSpec to download the AgentSpec ZIP package.
     *
     * @remarks
     * Retrieves the OSS presigned download URL for a specified agent template to download the agent template ZIP package.
     *
     * @param request - DownloadAgentSpecViaOssRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DownloadAgentSpecViaOssResponse
     */
    downloadAgentSpecViaOssWithOptions(workspaceId: string, agentSpecName: string, request: $_model.DownloadAgentSpecViaOssRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.DownloadAgentSpecViaOssResponse>;
    /**
     * Retrieves the OSS presigned download URL for a specified AgentSpec to download the AgentSpec ZIP package.
     *
     * @remarks
     * Retrieves the OSS presigned download URL for a specified agent template to download the agent template ZIP package.
     *
     * @param request - DownloadAgentSpecViaOssRequest
     * @returns DownloadAgentSpecViaOssResponse
     */
    downloadAgentSpecViaOss(workspaceId: string, agentSpecName: string, request: $_model.DownloadAgentSpecViaOssRequest): Promise<$_model.DownloadAgentSpecViaOssResponse>;
    /**
     * Retrieves the OSS pre-signed download URL for a specified skill version to download the corresponding skill ZIP package.
     *
     * @remarks
     * Retrieves the OSS pre-signed download URL for a specified skill version to download the corresponding skill ZIP package.
     *
     * @param request - DownloadSkillVersionViaOssRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DownloadSkillVersionViaOssResponse
     */
    downloadSkillVersionViaOssWithOptions(workspaceId: string, skillName: string, skillVersion: string, request: $_model.DownloadSkillVersionViaOssRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.DownloadSkillVersionViaOssResponse>;
    /**
     * Retrieves the OSS pre-signed download URL for a specified skill version to download the corresponding skill ZIP package.
     *
     * @remarks
     * Retrieves the OSS pre-signed download URL for a specified skill version to download the corresponding skill ZIP package.
     *
     * @param request - DownloadSkillVersionViaOssRequest
     * @returns DownloadSkillVersionViaOssResponse
     */
    downloadSkillVersionViaOss(workspaceId: string, skillName: string, skillVersion: string, request: $_model.DownloadSkillVersionViaOssRequest): Promise<$_model.DownloadSkillVersionViaOssResponse>;
    /**
     * Enables the QoderCLI connector in a specified workspace. The request must provide a site, an API key, and at least one service account key. The service verifies all account keys before saving the configuration.
     *
     * @remarks
     * Enables the QoderCLI connector in a workspace. Before enabling the connector, verify the credentials by calling [VerifyConnector](https://api.aliyun.com/document/AgentCore/2026-08-04/VerifyConnector).
     *
     * @param tmpReq - EnableConnectorRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns EnableConnectorResponse
     */
    enableConnectorWithOptions(workspaceId: string, connectorName: string, tmpReq: $_model.EnableConnectorRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.EnableConnectorResponse>;
    /**
     * Enables the QoderCLI connector in a specified workspace. The request must provide a site, an API key, and at least one service account key. The service verifies all account keys before saving the configuration.
     *
     * @remarks
     * Enables the QoderCLI connector in a workspace. Before enabling the connector, verify the credentials by calling [VerifyConnector](https://api.aliyun.com/document/AgentCore/2026-08-04/VerifyConnector).
     *
     * @param request - EnableConnectorRequest
     * @returns EnableConnectorResponse
     */
    enableConnector(workspaceId: string, connectorName: string, request: $_model.EnableConnectorRequest): Promise<$_model.EnableConnectorResponse>;
    /**
     * Retrieves a custom image preparation task by using a submitted client token and queries the current progress.
     *
     * @remarks
     * Uses the `clientToken` from a create or update request to retrieve a custom image preparation task, which allows you to continue querying the processing progress if the request response is lost.
     * ### Search scope
     * Pass the `clientToken` used when submitting [CreateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateCustomAgent) or [UpdateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateCustomAgent) as a query parameter, and use the original workspace.
     * The preparation task can be retrieved only if the acceptance result of that submission includes `imagePreparation`. If no corresponding preparation task exists, a resource not found error is returned.
     * ### Query phases
     * | `phase` | Description |
     * | --- | --- |
     * | `QUEUED`, `CHECKING` | Queued or checking the source. |
     * | `COPYING` | Copying the image. |
     * | `STARTING` | Starting the target version. |
     * | `HEALTH_CHECKING` | Waiting for the target version instance to be ready. |
     * | `SUCCEEDED` | The target version is deployed successfully. |
     * | `FAILED` | The preparation or deployment failed. Check `failedPhase` and `error`. |
     * | `CANCELLED` | The target version has been replaced by a subsequent configuration or canceled. |
     * After the task is found, you can use the `preparationId` to call [GetCustomAgentImagePreparation](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCustomAgentImagePreparation) for continuous queries.
     *
     * @param request - FindCustomAgentImagePreparationRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns FindCustomAgentImagePreparationResponse
     */
    findCustomAgentImagePreparationWithOptions(workspaceId: string, request: $_model.FindCustomAgentImagePreparationRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.FindCustomAgentImagePreparationResponse>;
    /**
     * Retrieves a custom image preparation task by using a submitted client token and queries the current progress.
     *
     * @remarks
     * Uses the `clientToken` from a create or update request to retrieve a custom image preparation task, which allows you to continue querying the processing progress if the request response is lost.
     * ### Search scope
     * Pass the `clientToken` used when submitting [CreateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateCustomAgent) or [UpdateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateCustomAgent) as a query parameter, and use the original workspace.
     * The preparation task can be retrieved only if the acceptance result of that submission includes `imagePreparation`. If no corresponding preparation task exists, a resource not found error is returned.
     * ### Query phases
     * | `phase` | Description |
     * | --- | --- |
     * | `QUEUED`, `CHECKING` | Queued or checking the source. |
     * | `COPYING` | Copying the image. |
     * | `STARTING` | Starting the target version. |
     * | `HEALTH_CHECKING` | Waiting for the target version instance to be ready. |
     * | `SUCCEEDED` | The target version is deployed successfully. |
     * | `FAILED` | The preparation or deployment failed. Check `failedPhase` and `error`. |
     * | `CANCELLED` | The target version has been replaced by a subsequent configuration or canceled. |
     * After the task is found, you can use the `preparationId` to call [GetCustomAgentImagePreparation](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCustomAgentImagePreparation) for continuous queries.
     *
     * @param request - FindCustomAgentImagePreparationRequest
     * @returns FindCustomAgentImagePreparationResponse
     */
    findCustomAgentImagePreparation(workspaceId: string, request: $_model.FindCustomAgentImagePreparationRequest): Promise<$_model.FindCustomAgentImagePreparationResponse>;
    /**
     * Forcibly publishes the specified skill version by bypassing the standard review process.
     *
     * @remarks
     * Forcibly publishes the specified skill version by bypassing the standard review process.
     *
     * @param tmpReq - ForcePublishSkillVersionRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ForcePublishSkillVersionResponse
     */
    forcePublishSkillVersionWithOptions(workspaceId: string, skillName: string, skillVersion: string, tmpReq: $_model.ForcePublishSkillVersionRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ForcePublishSkillVersionResponse>;
    /**
     * Forcibly publishes the specified skill version by bypassing the standard review process.
     *
     * @remarks
     * Forcibly publishes the specified skill version by bypassing the standard review process.
     *
     * @param request - ForcePublishSkillVersionRequest
     * @returns ForcePublishSkillVersionResponse
     */
    forcePublishSkillVersion(workspaceId: string, skillName: string, skillVersion: string, request: $_model.ForcePublishSkillVersionRequest): Promise<$_model.ForcePublishSkillVersionResponse>;
    /**
     * Queries the access application.
     *
     * @remarks
     * Queries the configuration of an access application in a workspace to view the application access information and user source settings.
     * The query result does not include the plaintext of the application secret. The secret is returned only when the application is created.
     *
     * @param request - GetAccessApplicationRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAccessApplicationResponse
     */
    getAccessApplicationWithOptions(workspaceId: string, applicationId: string, request: $_model.GetAccessApplicationRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccessApplicationResponse>;
    /**
     * Queries the access application.
     *
     * @remarks
     * Queries the configuration of an access application in a workspace to view the application access information and user source settings.
     * The query result does not include the plaintext of the application secret. The secret is returned only when the application is created.
     *
     * @param request - GetAccessApplicationRequest
     * @returns GetAccessApplicationResponse
     */
    getAccessApplication(workspaceId: string, applicationId: string, request: $_model.GetAccessApplicationRequest): Promise<$_model.GetAccessApplicationResponse>;
    /**
     * Retrieves the time-limited read-only download URL for the currently saved fixed code package of a custom code or image agent.
     *
     * @remarks
     * Retrieves the download URL for the currently saved code package of a custom code or image agent, which can be used to download, inspect, or reuse the fixed code package.
     * ### Download scope
     * Locates the fixed code package referenced by the currently saved configuration by using `workspaceId` and `agentId`. This applies to code packages uploaded locally or imported from OSS. Arbitrary bucket names, object keys, or historical version parameters are not accepted.
     * The current configuration must be deployed as a code package and the fixed package must be available. You do not need to wait for the running instance to be ready. An error is returned if the object has changed, is missing, or is unreadable.
     * ### Use the response
     * Use `downloadUrl` to download the file. The `fileName`, `fileSize`, `format`, `etag`, and `crc64` fields describe the corresponding fixed package. The `fileSize` is measured in bytes. The `resourceVersionId` identifies the saved configuration version corresponding to this download.
     * The URL is valid for up to 10 minutes and does not exceed the validity period of the underlying credentials, subject to `expiresAt`. Retrieve a new URL after it expires.
     *
     * @param request - GetAgentCodePackageDownloadUrlRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAgentCodePackageDownloadUrlResponse
     */
    getAgentCodePackageDownloadUrlWithOptions(workspaceId: string, agentId: string, request: $_model.GetAgentCodePackageDownloadUrlRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentCodePackageDownloadUrlResponse>;
    /**
     * Retrieves the time-limited read-only download URL for the currently saved fixed code package of a custom code or image agent.
     *
     * @remarks
     * Retrieves the download URL for the currently saved code package of a custom code or image agent, which can be used to download, inspect, or reuse the fixed code package.
     * ### Download scope
     * Locates the fixed code package referenced by the currently saved configuration by using `workspaceId` and `agentId`. This applies to code packages uploaded locally or imported from OSS. Arbitrary bucket names, object keys, or historical version parameters are not accepted.
     * The current configuration must be deployed as a code package and the fixed package must be available. You do not need to wait for the running instance to be ready. An error is returned if the object has changed, is missing, or is unreadable.
     * ### Use the response
     * Use `downloadUrl` to download the file. The `fileName`, `fileSize`, `format`, `etag`, and `crc64` fields describe the corresponding fixed package. The `fileSize` is measured in bytes. The `resourceVersionId` identifies the saved configuration version corresponding to this download.
     * The URL is valid for up to 10 minutes and does not exceed the validity period of the underlying credentials, subject to `expiresAt`. Retrieve a new URL after it expires.
     *
     * @param request - GetAgentCodePackageDownloadUrlRequest
     * @returns GetAgentCodePackageDownloadUrlResponse
     */
    getAgentCodePackageDownloadUrl(workspaceId: string, agentId: string, request: $_model.GetAgentCodePackageDownloadUrlRequest): Promise<$_model.GetAgentCodePackageDownloadUrlResponse>;
    /**
     * Generates a RAM authorization URL for a specified code package source bucket for the workspace resource role.
     *
     * @remarks
     * Generates an authorization URL for the workspace resource role to read the code package source bucket, which is used to complete authorization before deploying an existing OSS code package.
     * ### Authorization steps
     * **Step 1:** Provide the `ossBucketName` to obtain the `authorizeUrl` for the current workspace resource role.
     * **Step 2:** Open the returned URL and confirm the authorization.
     * **Step 3:** Call [VerifyAgentCodePackageOssRamAuthorization](https://api.aliyun.com/document/AgentCore/2026-08-04/VerifyAgentCodePackageOssRamAuthorization) to query the policy binding status. To verify a specific code package object, call [ValidateAgentCodePackageFromOss](https://api.aliyun.com/document/AgentCore/2026-08-04/ValidateAgentCodePackageFromOss).
     * ### Authorization scope
     * The role is selected by the server and cannot be overridden by the caller. This authorization reuses the `OSSObjectRestoreCustom` template, which includes permissions such as reading, writing, and deleting objects, and is not a read-only authorization. Existing authorizations for the same role and bucket can be reused.
     * Obtaining the URL itself does not complete the authorization, transfer the code package, or modify the default OSS binding of the workspace.
     *
     * @param request - GetAgentCodePackageOssRamAuthorizeUrlRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAgentCodePackageOssRamAuthorizeUrlResponse
     */
    getAgentCodePackageOssRamAuthorizeUrlWithOptions(workspaceId: string, request: $_model.GetAgentCodePackageOssRamAuthorizeUrlRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentCodePackageOssRamAuthorizeUrlResponse>;
    /**
     * Generates a RAM authorization URL for a specified code package source bucket for the workspace resource role.
     *
     * @remarks
     * Generates an authorization URL for the workspace resource role to read the code package source bucket, which is used to complete authorization before deploying an existing OSS code package.
     * ### Authorization steps
     * **Step 1:** Provide the `ossBucketName` to obtain the `authorizeUrl` for the current workspace resource role.
     * **Step 2:** Open the returned URL and confirm the authorization.
     * **Step 3:** Call [VerifyAgentCodePackageOssRamAuthorization](https://api.aliyun.com/document/AgentCore/2026-08-04/VerifyAgentCodePackageOssRamAuthorization) to query the policy binding status. To verify a specific code package object, call [ValidateAgentCodePackageFromOss](https://api.aliyun.com/document/AgentCore/2026-08-04/ValidateAgentCodePackageFromOss).
     * ### Authorization scope
     * The role is selected by the server and cannot be overridden by the caller. This authorization reuses the `OSSObjectRestoreCustom` template, which includes permissions such as reading, writing, and deleting objects, and is not a read-only authorization. Existing authorizations for the same role and bucket can be reused.
     * Obtaining the URL itself does not complete the authorization, transfer the code package, or modify the default OSS binding of the workspace.
     *
     * @param request - GetAgentCodePackageOssRamAuthorizeUrlRequest
     * @returns GetAgentCodePackageOssRamAuthorizeUrlResponse
     */
    getAgentCodePackageOssRamAuthorizeUrl(workspaceId: string, request: $_model.GetAgentCodePackageOssRamAuthorizeUrlRequest): Promise<$_model.GetAgentCodePackageOssRamAuthorizeUrlResponse>;
    /**
     * Generates a time-limited upload URL for a local code package and returns the upload method, request headers, and the sourceUri for subsequent deployment.
     *
     * @remarks
     * Obtains a time-limited direct upload URL and upload requirements for a local code package. After the upload is complete, use the returned sourceUri to submit the agent deployment.
     * ### Request conditions
     * | Field | Requirement |
     * | --- | --- |
     * | fileName | The name of the ZIP or TAR.GZ file without folders. Maximum length: 255 characters. |
     * | format | zip or tar.gz. Must match the file name extension. |
     * | fileSize | The size of the compressed package in bytes. Valid values: 1 to 500000000. |
     * ### Upload and deployment
     * **Step 1:** Use the uploadMethod, uploadUrl, and headers from the response to upload the file directly. This operation only generates the URL and does not upload the file content.
     * **Step 2:** After the upload is complete, specify the sourceUri in the artifact.code.sourceUri parameter of [CreateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateCustomAgent) or [UpdateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateCustomAgent), and provide the languageRuntime, entrypoint, and service port.
     * **Step 3:** During creation or update, the actual object and its size are verified again. The configuration is saved after the object is transferred to a fixed replica.
     * The upload URL is valid for up to 10 minutes and does not exceed the expiration time of the underlying temporary credentials. The exact expiration time is subject to expiresAt. If the URL expires, obtain a new one and use the original link and request headers from the response.
     *
     * @param tmpReq - GetAgentCodePackageUploadUrlRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAgentCodePackageUploadUrlResponse
     */
    getAgentCodePackageUploadUrlWithOptions(workspaceId: string, tmpReq: $_model.GetAgentCodePackageUploadUrlRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentCodePackageUploadUrlResponse>;
    /**
     * Generates a time-limited upload URL for a local code package and returns the upload method, request headers, and the sourceUri for subsequent deployment.
     *
     * @remarks
     * Obtains a time-limited direct upload URL and upload requirements for a local code package. After the upload is complete, use the returned sourceUri to submit the agent deployment.
     * ### Request conditions
     * | Field | Requirement |
     * | --- | --- |
     * | fileName | The name of the ZIP or TAR.GZ file without folders. Maximum length: 255 characters. |
     * | format | zip or tar.gz. Must match the file name extension. |
     * | fileSize | The size of the compressed package in bytes. Valid values: 1 to 500000000. |
     * ### Upload and deployment
     * **Step 1:** Use the uploadMethod, uploadUrl, and headers from the response to upload the file directly. This operation only generates the URL and does not upload the file content.
     * **Step 2:** After the upload is complete, specify the sourceUri in the artifact.code.sourceUri parameter of [CreateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateCustomAgent) or [UpdateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateCustomAgent), and provide the languageRuntime, entrypoint, and service port.
     * **Step 3:** During creation or update, the actual object and its size are verified again. The configuration is saved after the object is transferred to a fixed replica.
     * The upload URL is valid for up to 10 minutes and does not exceed the expiration time of the underlying temporary credentials. The exact expiration time is subject to expiresAt. If the URL expires, obtain a new one and use the original link and request headers from the response.
     *
     * @param request - GetAgentCodePackageUploadUrlRequest
     * @returns GetAgentCodePackageUploadUrlResponse
     */
    getAgentCodePackageUploadUrl(workspaceId: string, request: $_model.GetAgentCodePackageUploadUrlRequest): Promise<$_model.GetAgentCodePackageUploadUrlResponse>;
    /**
     * Queries the details of a specified agent IM channel.
     *
     * @remarks
     * Queries the details of a specified agent IM channel.
     *
     * @param request - GetAgentIMChannelRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAgentIMChannelResponse
     */
    getAgentIMChannelWithOptions(workspaceId: string, agentId: string, imChannelId: string, request: $_model.GetAgentIMChannelRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentIMChannelResponse>;
    /**
     * Queries the details of a specified agent IM channel.
     *
     * @remarks
     * Queries the details of a specified agent IM channel.
     *
     * @param request - GetAgentIMChannelRequest
     * @returns GetAgentIMChannelResponse
     */
    getAgentIMChannel(workspaceId: string, agentId: string, imChannelId: string, request: $_model.GetAgentIMChannelRequest): Promise<$_model.GetAgentIMChannelResponse>;
    /**
     * Queries the governance details of a specified AgentSpec, including basic information, governance pointers, and summaries of all versions.
     *
     * @remarks
     * Queries the basic information, version status, and summaries of all versions of an agent template (AgentSpec) for viewing the template and selecting a version.
     *
     * @param request - GetAgentSpecRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAgentSpecResponse
     */
    getAgentSpecWithOptions(workspaceId: string, agentSpecName: string, request: $_model.GetAgentSpecRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentSpecResponse>;
    /**
     * Queries the governance details of a specified AgentSpec, including basic information, governance pointers, and summaries of all versions.
     *
     * @remarks
     * Queries the basic information, version status, and summaries of all versions of an agent template (AgentSpec) for viewing the template and selecting a version.
     *
     * @param request - GetAgentSpecRequest
     * @returns GetAgentSpecResponse
     */
    getAgentSpec(workspaceId: string, agentSpecName: string, request: $_model.GetAgentSpecRequest): Promise<$_model.GetAgentSpecResponse>;
    /**
     * Retrieves the OSS presigned upload URL and object name required to import an AgentSpec ZIP package. After the upload is complete, you can call the AgentSpec OSS upload API operation to complete the import.
     *
     * @remarks
     * Retrieves the upload URL for an agent template (AgentSpec) ZIP package to import the template from a local file.
     * Files are transferred through Object Storage Service (OSS). First, upload the file by using the returned URL, and then call [UploadAgentSpecViaOss](https://api.aliyun.com/document/AgentCore/2026-08-04/UploadAgentSpecViaOss) to complete the import.
     *
     * @param request - GetAgentSpecImportFileUrlRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAgentSpecImportFileUrlResponse
     */
    getAgentSpecImportFileUrlWithOptions(workspaceId: string, request: $_model.GetAgentSpecImportFileUrlRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentSpecImportFileUrlResponse>;
    /**
     * Retrieves the OSS presigned upload URL and object name required to import an AgentSpec ZIP package. After the upload is complete, you can call the AgentSpec OSS upload API operation to complete the import.
     *
     * @remarks
     * Retrieves the upload URL for an agent template (AgentSpec) ZIP package to import the template from a local file.
     * Files are transferred through Object Storage Service (OSS). First, upload the file by using the returned URL, and then call [UploadAgentSpecViaOss](https://api.aliyun.com/document/AgentCore/2026-08-04/UploadAgentSpecViaOss) to complete the import.
     *
     * @param request - GetAgentSpecImportFileUrlRequest
     * @returns GetAgentSpecImportFileUrlResponse
     */
    getAgentSpecImportFileUrl(workspaceId: string, request: $_model.GetAgentSpecImportFileUrlRequest): Promise<$_model.GetAgentSpecImportFileUrlResponse>;
    /**
     * Queries the full content of the latest version of a specified AgentSpec for editing or viewing the latest version.
     *
     * @remarks
     * Queries the full content of the latest version of an agent template (AgentSpec) for viewing or editing the latest version.
     *
     * @param request - GetAgentSpecLatestRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAgentSpecLatestResponse
     */
    getAgentSpecLatestWithOptions(workspaceId: string, agentSpecName: string, request: $_model.GetAgentSpecLatestRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentSpecLatestResponse>;
    /**
     * Queries the full content of the latest version of a specified AgentSpec for editing or viewing the latest version.
     *
     * @remarks
     * Queries the full content of the latest version of an agent template (AgentSpec) for viewing or editing the latest version.
     *
     * @param request - GetAgentSpecLatestRequest
     * @returns GetAgentSpecLatestResponse
     */
    getAgentSpecLatest(workspaceId: string, agentSpecName: string, request: $_model.GetAgentSpecLatestRequest): Promise<$_model.GetAgentSpecLatestResponse>;
    /**
     * Queries the complete content of a specified AgentSpec version, including the manifest content, resource files, and metadata.
     *
     * @remarks
     * Queries the complete content of a specified agent template version, including the manifest content, resource files, and metadata.
     *
     * @param request - GetAgentSpecVersionRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAgentSpecVersionResponse
     */
    getAgentSpecVersionWithOptions(workspaceId: string, agentSpecName: string, agentSpecVersion: string, request: $_model.GetAgentSpecVersionRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentSpecVersionResponse>;
    /**
     * Queries the complete content of a specified AgentSpec version, including the manifest content, resource files, and metadata.
     *
     * @remarks
     * Queries the complete content of a specified agent template version, including the manifest content, resource files, and metadata.
     *
     * @param request - GetAgentSpecVersionRequest
     * @returns GetAgentSpecVersionResponse
     */
    getAgentSpecVersion(workspaceId: string, agentSpecName: string, agentSpecVersion: string, request: $_model.GetAgentSpecVersionRequest): Promise<$_model.GetAgentSpecVersionResponse>;
    /**
     * Queries the details of an agent version.
     *
     * @remarks
     * Queries the details of a saved fixed version for a specified managed or custom agent. The configuration field returns the agent configuration at the time the version was saved.
     *
     * @param request - GetAgentVersionRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAgentVersionResponse
     */
    getAgentVersionWithOptions(workspaceId: string, agentId: string, agentVersion: string, request: $_model.GetAgentVersionRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentVersionResponse>;
    /**
     * Queries the details of an agent version.
     *
     * @remarks
     * Queries the details of a saved fixed version for a specified managed or custom agent. The configuration field returns the agent configuration at the time the version was saved.
     *
     * @param request - GetAgentVersionRequest
     * @returns GetAgentVersionResponse
     */
    getAgentVersion(workspaceId: string, agentId: string, agentVersion: string, request: $_model.GetAgentVersionRequest): Promise<$_model.GetAgentVersionResponse>;
    /**
     * Queries the details of a specified credential and returns a list of agents bound to the credential. The credential content is returned in a masked format.
     *
     * @remarks
     * Queries the details of a specified credential and returns a list of agents bound to the credential.
     * ### Response content
     * Queries the credential type, description, application scope, and binding information. The `apiKey` and `mcpHeader` types are supported.
     * - `apiKey`: The key value is returned in a masked format.
     * - `mcpHeader`: The configured header name is returned, but the header value is not returned. The `resourceType` of the applicable resource is `mcpServer`.
     * To modify the configuration, call [UpdateCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateCredential).
     *
     * @param request - GetCredentialRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetCredentialResponse
     */
    getCredentialWithOptions(workspaceId: string, credentialId: string, request: $_model.GetCredentialRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetCredentialResponse>;
    /**
     * Queries the details of a specified credential and returns a list of agents bound to the credential. The credential content is returned in a masked format.
     *
     * @remarks
     * Queries the details of a specified credential and returns a list of agents bound to the credential.
     * ### Response content
     * Queries the credential type, description, application scope, and binding information. The `apiKey` and `mcpHeader` types are supported.
     * - `apiKey`: The key value is returned in a masked format.
     * - `mcpHeader`: The configured header name is returned, but the header value is not returned. The `resourceType` of the applicable resource is `mcpServer`.
     * To modify the configuration, call [UpdateCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateCredential).
     *
     * @param request - GetCredentialRequest
     * @returns GetCredentialResponse
     */
    getCredential(workspaceId: string, credentialId: string, request: $_model.GetCredentialRequest): Promise<$_model.GetCredentialResponse>;
    /**
     * Queries the latest deployment configuration, version processing results, code package or image information, and running instance status of a custom code or image agent.
     *
     * @remarks
     * Queries the configuration, artifacts, and running status of a custom code or image agent to confirm the processing and effective results of creation or updates.
     * ### Query configuration processing results
     * After you create or update an agent, you can poll this operation. The returned configuration belongs to the latest submitted version and may not have taken effect.
     * | Field | Description |
     * | --- | --- |
     * | `latestSpecVersion` | The latest expected configuration version. |
     * | `effectiveSpecVersion` | The currently effective configuration version. |
     * | `latestVersionStatus` | The processing status of the latest expected version. |
     * | `latestExecutionError` | The reason why the latest version is waiting for a retry or failed to execute, and whether automatic retry is enabled. |
     * | `status` | The overall status of the agent. |
     * | `sandboxPhaseCounts` | The snapshot of the number of running instances in each phase. |
     * The `pending`, `processing`, and `waiting_retry` values indicate that processing is continuing. The `succeeded` value indicates that the configuration is processed successfully. If the value is `failed`, troubleshoot the issue based on `latestExecutionError`. Instance status and configuration processing status are queried separately.
     * ### Code packages and images
     * In code package mode, `artifact.code.sourceUri` is the saved fixed package URL, and `codePackageInfo` provides the package information. To download the current fixed package, call [GetAgentCodePackageDownloadUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetAgentCodePackageDownloadUrl).
     * In image mode, `customImage` is the most recently saved custom source, and `currentImage` is the image source of the effective version. These values may differ. You can use `imagePreparation.preparationId` to call [GetCustomAgentImagePreparation](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCustomAgentImagePreparation) to query the preparation and deployment phases of the custom image. The `imageCachePreparation.statusAtAcceptance` parameter only indicates the cache status at the time of acceptance.
     * The response does not return the image repository password. If you query an agent that does not exist, has been deleted, or does not belong to the specified workspace, a resource not found error is returned.
     *
     * @param request - GetCustomAgentRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetCustomAgentResponse
     */
    getCustomAgentWithOptions(workspaceId: string, agentId: string, request: $_model.GetCustomAgentRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetCustomAgentResponse>;
    /**
     * Queries the latest deployment configuration, version processing results, code package or image information, and running instance status of a custom code or image agent.
     *
     * @remarks
     * Queries the configuration, artifacts, and running status of a custom code or image agent to confirm the processing and effective results of creation or updates.
     * ### Query configuration processing results
     * After you create or update an agent, you can poll this operation. The returned configuration belongs to the latest submitted version and may not have taken effect.
     * | Field | Description |
     * | --- | --- |
     * | `latestSpecVersion` | The latest expected configuration version. |
     * | `effectiveSpecVersion` | The currently effective configuration version. |
     * | `latestVersionStatus` | The processing status of the latest expected version. |
     * | `latestExecutionError` | The reason why the latest version is waiting for a retry or failed to execute, and whether automatic retry is enabled. |
     * | `status` | The overall status of the agent. |
     * | `sandboxPhaseCounts` | The snapshot of the number of running instances in each phase. |
     * The `pending`, `processing`, and `waiting_retry` values indicate that processing is continuing. The `succeeded` value indicates that the configuration is processed successfully. If the value is `failed`, troubleshoot the issue based on `latestExecutionError`. Instance status and configuration processing status are queried separately.
     * ### Code packages and images
     * In code package mode, `artifact.code.sourceUri` is the saved fixed package URL, and `codePackageInfo` provides the package information. To download the current fixed package, call [GetAgentCodePackageDownloadUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetAgentCodePackageDownloadUrl).
     * In image mode, `customImage` is the most recently saved custom source, and `currentImage` is the image source of the effective version. These values may differ. You can use `imagePreparation.preparationId` to call [GetCustomAgentImagePreparation](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCustomAgentImagePreparation) to query the preparation and deployment phases of the custom image. The `imageCachePreparation.statusAtAcceptance` parameter only indicates the cache status at the time of acceptance.
     * The response does not return the image repository password. If you query an agent that does not exist, has been deleted, or does not belong to the specified workspace, a resource not found error is returned.
     *
     * @param request - GetCustomAgentRequest
     * @returns GetCustomAgentResponse
     */
    getCustomAgent(workspaceId: string, agentId: string, request: $_model.GetCustomAgentRequest): Promise<$_model.GetCustomAgentResponse>;
    /**
     * Queries the preparation and deployment progress of the current submission for a custom image by preparation task ID.
     *
     * @remarks
     * Queries the processing progress, such as image checking, copying, and starting, by preparation task ID to track the result of the current custom image submission.
     * ### Obtain the task identifier
     * Pass the value of `imagePreparation.preparationId` from the response of creating or updating a custom code or image agent as the `preparationId` parameter without modification. It identifies the task for the current submission, not the running instance ID.
     * ### Determine completion
     * | `phase` | Meaning |
     * | --- | --- |
     * | `QUEUED`, `CHECKING` | Queued or checking the source. |
     * | `COPYING` | Copying the image. |
     * | `STARTING` | Starting the target version. |
     * | `HEALTH_CHECKING` | Waiting for the target version instance to be ready. |
     * | `SUCCEEDED` | The target version is deployed successfully. |
     * | `FAILED` | The preparation or deployment failed. Check `failedPhase` and `error`. |
     * | `CANCELLED` | The target version has been replaced by a subsequent configuration or canceled. |
     * The query only reads the status and does not recreate the copy task. `SUCCEEDED` applies to the current target version. Seeing only old instances running does not indicate that the current submission is complete. If the configuration version is replaced by a subsequent submission, the current task may return `CANCELLED`.
     * If the create or update response is lost, you can call [FindCustomAgentImagePreparation](https://api.aliyun.com/document/AgentCore/2026-08-04/FindCustomAgentImagePreparation) with the `clientToken` used at that time to retrieve the preparation task.
     *
     * @param request - GetCustomAgentImagePreparationRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetCustomAgentImagePreparationResponse
     */
    getCustomAgentImagePreparationWithOptions(workspaceId: string, preparationId: string, request: $_model.GetCustomAgentImagePreparationRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetCustomAgentImagePreparationResponse>;
    /**
     * Queries the preparation and deployment progress of the current submission for a custom image by preparation task ID.
     *
     * @remarks
     * Queries the processing progress, such as image checking, copying, and starting, by preparation task ID to track the result of the current custom image submission.
     * ### Obtain the task identifier
     * Pass the value of `imagePreparation.preparationId` from the response of creating or updating a custom code or image agent as the `preparationId` parameter without modification. It identifies the task for the current submission, not the running instance ID.
     * ### Determine completion
     * | `phase` | Meaning |
     * | --- | --- |
     * | `QUEUED`, `CHECKING` | Queued or checking the source. |
     * | `COPYING` | Copying the image. |
     * | `STARTING` | Starting the target version. |
     * | `HEALTH_CHECKING` | Waiting for the target version instance to be ready. |
     * | `SUCCEEDED` | The target version is deployed successfully. |
     * | `FAILED` | The preparation or deployment failed. Check `failedPhase` and `error`. |
     * | `CANCELLED` | The target version has been replaced by a subsequent configuration or canceled. |
     * The query only reads the status and does not recreate the copy task. `SUCCEEDED` applies to the current target version. Seeing only old instances running does not indicate that the current submission is complete. If the configuration version is replaced by a subsequent submission, the current task may return `CANCELLED`.
     * If the create or update response is lost, you can call [FindCustomAgentImagePreparation](https://api.aliyun.com/document/AgentCore/2026-08-04/FindCustomAgentImagePreparation) with the `clientToken` used at that time to retrieve the preparation task.
     *
     * @param request - GetCustomAgentImagePreparationRequest
     * @returns GetCustomAgentImagePreparationResponse
     */
    getCustomAgentImagePreparation(workspaceId: string, preparationId: string, request: $_model.GetCustomAgentImagePreparationRequest): Promise<$_model.GetCustomAgentImagePreparationResponse>;
    /**
     * Queries the configuration, model source, version processing status, and external runtime status of a managed agent.
     *
     * @remarks
     * Queries the platform configuration, version processing status, and external runtime status of a managed agent to verify access and configuration effectiveness.
     * ### Configuration processing and runtime status
     * `latestSpecVersion` and `latestVersionStatus` indicate the latest submitted configuration and its processing status. `status` represents the platform resource status, and `externalAgentStatus` represents the external runtime status. A successful configuration acceptance does not indicate that the external process is connected.
     * If `modelSource` is `PLATFORM`, the returned model configuration is used. `RUNTIME` indicates that the model is managed by the external environment. `configuredSkills` indicates explicit skill configurations, and `skills` represents the aggregated skill information.
     * ### External access
     * After the configuration takes effect, call [GetExternalAgentBootstrapOptions](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgentBootstrapOptions) to query available networks, and then call [CreateExternalAgentBootstrapToken](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateExternalAgentBootstrapToken) to obtain access information. If the agent does not exist, has been deleted, or does not belong to the workspace, a resource not found error is returned.
     *
     * @param request - GetExternalAgentRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetExternalAgentResponse
     */
    getExternalAgentWithOptions(workspaceId: string, agentId: string, request: $_model.GetExternalAgentRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetExternalAgentResponse>;
    /**
     * Queries the configuration, model source, version processing status, and external runtime status of a managed agent.
     *
     * @remarks
     * Queries the platform configuration, version processing status, and external runtime status of a managed agent to verify access and configuration effectiveness.
     * ### Configuration processing and runtime status
     * `latestSpecVersion` and `latestVersionStatus` indicate the latest submitted configuration and its processing status. `status` represents the platform resource status, and `externalAgentStatus` represents the external runtime status. A successful configuration acceptance does not indicate that the external process is connected.
     * If `modelSource` is `PLATFORM`, the returned model configuration is used. `RUNTIME` indicates that the model is managed by the external environment. `configuredSkills` indicates explicit skill configurations, and `skills` represents the aggregated skill information.
     * ### External access
     * After the configuration takes effect, call [GetExternalAgentBootstrapOptions](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgentBootstrapOptions) to query available networks, and then call [CreateExternalAgentBootstrapToken](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateExternalAgentBootstrapToken) to obtain access information. If the agent does not exist, has been deleted, or does not belong to the workspace, a resource not found error is returned.
     *
     * @param request - GetExternalAgentRequest
     * @returns GetExternalAgentResponse
     */
    getExternalAgent(workspaceId: string, agentId: string, request: $_model.GetExternalAgentRequest): Promise<$_model.GetExternalAgentResponse>;
    /**
     * Queries the available internal and public network access options for a managed agent.
     *
     * @remarks
     * Queries the available public and internal network access methods for a managed agent to select the network used for subsequent connections.
     * ### Prerequisites
     * The managed agent must be in the running state, and the latest desired configuration must be applied. If the configuration is still being created, updated, or not fully applied, query the status first by calling [GetExternalAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgent).
     * ### Select an access network
     * In the response, the networkType in networkOptions is INTRANET or INTERNET, and available indicates whether the corresponding access endpoint is available. Select a network with available set to true and call [CreateExternalAgentBootstrapToken](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateExternalAgentBootstrapToken) to obtain the corresponding access information.
     *
     * @param request - GetExternalAgentBootstrapOptionsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetExternalAgentBootstrapOptionsResponse
     */
    getExternalAgentBootstrapOptionsWithOptions(workspaceId: string, agentId: string, request: $_model.GetExternalAgentBootstrapOptionsRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetExternalAgentBootstrapOptionsResponse>;
    /**
     * Queries the available internal and public network access options for a managed agent.
     *
     * @remarks
     * Queries the available public and internal network access methods for a managed agent to select the network used for subsequent connections.
     * ### Prerequisites
     * The managed agent must be in the running state, and the latest desired configuration must be applied. If the configuration is still being created, updated, or not fully applied, query the status first by calling [GetExternalAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgent).
     * ### Select an access network
     * In the response, the networkType in networkOptions is INTRANET or INTERNET, and available indicates whether the corresponding access endpoint is available. Select a network with available set to true and call [CreateExternalAgentBootstrapToken](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateExternalAgentBootstrapToken) to obtain the corresponding access information.
     *
     * @param request - GetExternalAgentBootstrapOptionsRequest
     * @returns GetExternalAgentBootstrapOptionsResponse
     */
    getExternalAgentBootstrapOptions(workspaceId: string, agentId: string, request: $_model.GetExternalAgentBootstrapOptionsRequest): Promise<$_model.GetExternalAgentBootstrapOptionsResponse>;
    /**
     * Queries the binding and expected configuration of a specified identity provider. When SAML is configured for CustomSSO, this operation reads back the actual upstream SSO configuration. The SCIM status is queried through a separate API operation.
     *
     * @remarks
     * Queries the enterprise identity providers bound to a workspace. You can use this operation to view the access configuration, logon and user synchronization switches, and configuration processing progress.
     * For custom identity providers (`CustomSSO`), this API operation also retrieves the saved SAML logon configuration for viewing or modifying enterprise single sign-on (SSO) settings.
     * ### How to interpret the query results
     * | Field | Purpose |
     * | --- | --- |
     * | `identityProviderType` | Indicates whether DingTalk, Lark, or a custom identity provider is currently integrated. |
     * | `loginEnabled` | Indicates whether enterprise account logon is enabled. |
     * | `saml` | The saved SAML configuration of the enterprise identity system, used for backfilling when editing the configuration. |
     * | `configuration` | The actual SAML configuration read from the identity service, used to verify whether the logon configuration has taken effect. |
     * | `status` | The processing progress of the identity provider attachment or logon configuration. |
     * When `CustomSSO` returns `WAITING_CONFIGURATION`, it indicates that the user pool is ready and the SAML logon configuration is pending. In this case, you can call [GetIdentityProviderServiceProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderServiceProvider) to obtain the access information for AgentCore and continue configuring enterprise single sign-on.
     * After you save the logon configuration, you can query `status` to track the processing progress. `READY` indicates that the configuration processing is complete. To check whether logon is enabled, you must also verify `loginEnabled` and `configuration`.
     * ### Query the user synchronization status
     * SAML logon and SCIM user synchronization are configured separately. SCIM is used to pre-provision users from the enterprise identity system to the user pool. You can call [GetIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderSCIM) to query the receiver configuration and synchronization task results.
     *
     * @param request - GetIdentityProviderRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetIdentityProviderResponse
     */
    getIdentityProviderWithOptions(workspaceId: string, identityProviderType: string, request: $_model.GetIdentityProviderRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetIdentityProviderResponse>;
    /**
     * Queries the binding and expected configuration of a specified identity provider. When SAML is configured for CustomSSO, this operation reads back the actual upstream SSO configuration. The SCIM status is queried through a separate API operation.
     *
     * @remarks
     * Queries the enterprise identity providers bound to a workspace. You can use this operation to view the access configuration, logon and user synchronization switches, and configuration processing progress.
     * For custom identity providers (`CustomSSO`), this API operation also retrieves the saved SAML logon configuration for viewing or modifying enterprise single sign-on (SSO) settings.
     * ### How to interpret the query results
     * | Field | Purpose |
     * | --- | --- |
     * | `identityProviderType` | Indicates whether DingTalk, Lark, or a custom identity provider is currently integrated. |
     * | `loginEnabled` | Indicates whether enterprise account logon is enabled. |
     * | `saml` | The saved SAML configuration of the enterprise identity system, used for backfilling when editing the configuration. |
     * | `configuration` | The actual SAML configuration read from the identity service, used to verify whether the logon configuration has taken effect. |
     * | `status` | The processing progress of the identity provider attachment or logon configuration. |
     * When `CustomSSO` returns `WAITING_CONFIGURATION`, it indicates that the user pool is ready and the SAML logon configuration is pending. In this case, you can call [GetIdentityProviderServiceProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderServiceProvider) to obtain the access information for AgentCore and continue configuring enterprise single sign-on.
     * After you save the logon configuration, you can query `status` to track the processing progress. `READY` indicates that the configuration processing is complete. To check whether logon is enabled, you must also verify `loginEnabled` and `configuration`.
     * ### Query the user synchronization status
     * SAML logon and SCIM user synchronization are configured separately. SCIM is used to pre-provision users from the enterprise identity system to the user pool. You can call [GetIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderSCIM) to query the receiver configuration and synchronization task results.
     *
     * @param request - GetIdentityProviderRequest
     * @returns GetIdentityProviderResponse
     */
    getIdentityProvider(workspaceId: string, identityProviderType: string, request: $_model.GetIdentityProviderRequest): Promise<$_model.GetIdentityProviderResponse>;
    /**
     * Queries the actual SCIM receiving configuration, the expected AgentCore synchronization switch, and the status of the most recent independent SCIM task. SAML configuration is not required in advance.
     *
     * @remarks
     * Queries the access configuration and processing progress of SCIM user synchronization to determine whether the receiving end is ready, whether AgentCore user synchronization is enabled, and whether the most recent synchronization operation is completed.
     * SCIM is a user provisioning protocol. The enterprise identity system sends user information to the user pool through the receiving URL and access token. After AgentCore user synchronization is enabled, users in the user pool are imported into the workspace.
     * ### How to interpret the query results
     * | Field | Business meaning |
     * | --- | --- |
     * | `configuration` | The actual status and accept URL of the SCIM accept endpoint. |
     * | `syncEnabled` | The expected switch for AgentCore user synchronization. |
     * | `operationStatus` | The execute result of the most recent operation to enable or disable synchronization. An empty character string `""` is returned if no historical nodes exist. |
     * | `status` | The SCIM accessed state derived from the accept endpoint configuration, credentials, and operation results. |
     * ### Proceed based on the status
     * | `status` | Current stage | Next step |
     * | --- | --- | --- |
     * | `UNCONFIGURED` | The receiving end is not ready. | Call [PrepareIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/PrepareIdentityProviderSCIM) to prepare for access. |
     * | `WAITING_CONFIGURATION` | The URL and valid credentials are available. Waiting for the enterprise-side configuration to be completed and synchronization to be enabled. | Configure the URL and token in the enterprise identity system, and then call [UpdateIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProviderSCIM). |
     * | `UPDATING` | Synchronization is being enabled or disabled. | Continue to query this operation and wait for the operation to complete. |
     * | `READY` | Synchronization is enabled, the current enabling task is successful, and the receiving end and credentials are still available. | You can view the synchronized workspace users. |
     * | `DISABLED` | Synchronization is disabled. Existing configurations, credentials, and users are retained. | To reconnect, check and prepare the receiving end first, and then enable synchronization. |
     * | `UPDATE_FAILED` | The operation failed, or the enabled configuration and credentials are no longer available. | Check the operation result and access configuration in combination with `operationStatus`. |
     * This operation queries the SCIM status. The SAML enterprise account logon configuration is queried through [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider). `READY` reflects the result of the current enabling operation. The user assignment and provisioning status in the enterprise identity system must still be verified on the enterprise side.
     *
     * @param request - GetIdentityProviderSCIMRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetIdentityProviderSCIMResponse
     */
    getIdentityProviderSCIMWithOptions(workspaceId: string, request: $_model.GetIdentityProviderSCIMRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetIdentityProviderSCIMResponse>;
    /**
     * Queries the actual SCIM receiving configuration, the expected AgentCore synchronization switch, and the status of the most recent independent SCIM task. SAML configuration is not required in advance.
     *
     * @remarks
     * Queries the access configuration and processing progress of SCIM user synchronization to determine whether the receiving end is ready, whether AgentCore user synchronization is enabled, and whether the most recent synchronization operation is completed.
     * SCIM is a user provisioning protocol. The enterprise identity system sends user information to the user pool through the receiving URL and access token. After AgentCore user synchronization is enabled, users in the user pool are imported into the workspace.
     * ### How to interpret the query results
     * | Field | Business meaning |
     * | --- | --- |
     * | `configuration` | The actual status and accept URL of the SCIM accept endpoint. |
     * | `syncEnabled` | The expected switch for AgentCore user synchronization. |
     * | `operationStatus` | The execute result of the most recent operation to enable or disable synchronization. An empty character string `""` is returned if no historical nodes exist. |
     * | `status` | The SCIM accessed state derived from the accept endpoint configuration, credentials, and operation results. |
     * ### Proceed based on the status
     * | `status` | Current stage | Next step |
     * | --- | --- | --- |
     * | `UNCONFIGURED` | The receiving end is not ready. | Call [PrepareIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/PrepareIdentityProviderSCIM) to prepare for access. |
     * | `WAITING_CONFIGURATION` | The URL and valid credentials are available. Waiting for the enterprise-side configuration to be completed and synchronization to be enabled. | Configure the URL and token in the enterprise identity system, and then call [UpdateIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProviderSCIM). |
     * | `UPDATING` | Synchronization is being enabled or disabled. | Continue to query this operation and wait for the operation to complete. |
     * | `READY` | Synchronization is enabled, the current enabling task is successful, and the receiving end and credentials are still available. | You can view the synchronized workspace users. |
     * | `DISABLED` | Synchronization is disabled. Existing configurations, credentials, and users are retained. | To reconnect, check and prepare the receiving end first, and then enable synchronization. |
     * | `UPDATE_FAILED` | The operation failed, or the enabled configuration and credentials are no longer available. | Check the operation result and access configuration in combination with `operationStatus`. |
     * This operation queries the SCIM status. The SAML enterprise account logon configuration is queried through [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider). `READY` reflects the result of the current enabling operation. The user assignment and provisioning status in the enterprise identity system must still be verified on the enterprise side.
     *
     * @param request - GetIdentityProviderSCIMRequest
     * @returns GetIdentityProviderSCIMResponse
     */
    getIdentityProviderSCIM(workspaceId: string, request: $_model.GetIdentityProviderSCIMRequest): Promise<$_model.GetIdentityProviderSCIMResponse>;
    /**
     * Queries the SAML service provider (SP) information for CustomSSO, including the Entity ID, ACS URL, and SP metadata XML, to help users configure an external IdP.
     *
     * @remarks
     * Retrieves the SAML service provider (SP) access information of AgentCore for configuring single sign-on (SSO) in an enterprise identity provider (IdP).
     * An SP is a service provider that receives logon assertions. An IdP is an enterprise identity provider that verifies user identities and issues logon assertions. This operation returns the SP information on the AgentCore side.
     * ### Before you begin
     * The workspace is bound to `CustomSSO`, and the shared user pool is initialized. The `protocol` parameter is required and must be set to `SAML`.
     * You can call the [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider) operation to query the binding information. After the user pool becomes available, you can retrieve the SP information and then complete the SAML configuration.
     * ### Request example
     * ```http
     * GET /workspaces/{workspaceId}/identity-providers/CustomSSO/service-provider?protocol=SAML
     * ```
     * ### Response information
     * | Field | Purpose |
     * | --- | --- |
     * | `protocol` | The access protocol. This operation returns `SAML`. |
     * | `entityId` | The SP identifier of AgentCore. Configure this value as the service provider Entity ID in the enterprise IdP. |
     * | `acsUrl` | The URL where AgentCore receives SAML logon assertions. Configure this value as the ACS URL in the enterprise IdP. |
     * | `metadataXml` | The SP metadata XML. Use this file to import the SP configuration in an enterprise IdP that supports metadata import. |
     * ### Configuration procedure
     * **Step 1:** Call this operation to retrieve the SP information, and configure the SP identifier and assertion receiving URL of AgentCore in the enterprise IdP.
     * **Step 2:** Export the metadata XML from the enterprise IdP and save it to AgentCore by calling the [UpdateIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProvider) operation.
     * **Step 3:** After the configuration is complete, enable single sign-on by setting `loginEnabled` as needed.
     *
     * @param request - GetIdentityProviderServiceProviderRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetIdentityProviderServiceProviderResponse
     */
    getIdentityProviderServiceProviderWithOptions(workspaceId: string, identityProviderType: string, request: $_model.GetIdentityProviderServiceProviderRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetIdentityProviderServiceProviderResponse>;
    /**
     * Queries the SAML service provider (SP) information for CustomSSO, including the Entity ID, ACS URL, and SP metadata XML, to help users configure an external IdP.
     *
     * @remarks
     * Retrieves the SAML service provider (SP) access information of AgentCore for configuring single sign-on (SSO) in an enterprise identity provider (IdP).
     * An SP is a service provider that receives logon assertions. An IdP is an enterprise identity provider that verifies user identities and issues logon assertions. This operation returns the SP information on the AgentCore side.
     * ### Before you begin
     * The workspace is bound to `CustomSSO`, and the shared user pool is initialized. The `protocol` parameter is required and must be set to `SAML`.
     * You can call the [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider) operation to query the binding information. After the user pool becomes available, you can retrieve the SP information and then complete the SAML configuration.
     * ### Request example
     * ```http
     * GET /workspaces/{workspaceId}/identity-providers/CustomSSO/service-provider?protocol=SAML
     * ```
     * ### Response information
     * | Field | Purpose |
     * | --- | --- |
     * | `protocol` | The access protocol. This operation returns `SAML`. |
     * | `entityId` | The SP identifier of AgentCore. Configure this value as the service provider Entity ID in the enterprise IdP. |
     * | `acsUrl` | The URL where AgentCore receives SAML logon assertions. Configure this value as the ACS URL in the enterprise IdP. |
     * | `metadataXml` | The SP metadata XML. Use this file to import the SP configuration in an enterprise IdP that supports metadata import. |
     * ### Configuration procedure
     * **Step 1:** Call this operation to retrieve the SP information, and configure the SP identifier and assertion receiving URL of AgentCore in the enterprise IdP.
     * **Step 2:** Export the metadata XML from the enterprise IdP and save it to AgentCore by calling the [UpdateIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProvider) operation.
     * **Step 3:** After the configuration is complete, enable single sign-on by setting `loginEnabled` as needed.
     *
     * @param request - GetIdentityProviderServiceProviderRequest
     * @returns GetIdentityProviderServiceProviderResponse
     */
    getIdentityProviderServiceProvider(workspaceId: string, identityProviderType: string, request: $_model.GetIdentityProviderServiceProviderRequest): Promise<$_model.GetIdentityProviderServiceProviderResponse>;
    /**
     * Queries an identity provider synchronization task.
     *
     * @remarks
     * Queries the progress, number of processed users, and failure causes of a user synchronization task to track whether a manual synchronization is complete.
     * Use the `taskId` returned by [CreateIdentityProviderSyncJob](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateIdentityProviderSyncJob) and keep the same workspace and identity provider.
     * ### Determine synchronization results
     * | `status` | Meaning and what to do next |
     * | --- | --- |
     * | `PENDING`, `RUNNING` | The node is not yet complete. You can continue to query the status. |
     * | `PAUSED` | The node is paused and has not ended. |
     * | `SUCCESS` | The synchronization is complete. You can view the workspace users. |
     * | `FAILED` | The synchronization failed. Check the `failureReason`. |
     * | `CANCELED` | The node is canceled. |
     * `syncedUserCount` is the number of processed users, including updated existing users. It is not the number of newly added users and cannot be directly used as a completion percentage. If the count is not yet available, `null` is returned.
     *
     * @param request - GetIdentityProviderSyncJobRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetIdentityProviderSyncJobResponse
     */
    getIdentityProviderSyncJobWithOptions(workspaceId: string, identityProviderType: string, taskId: string, request: $_model.GetIdentityProviderSyncJobRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetIdentityProviderSyncJobResponse>;
    /**
     * Queries an identity provider synchronization task.
     *
     * @remarks
     * Queries the progress, number of processed users, and failure causes of a user synchronization task to track whether a manual synchronization is complete.
     * Use the `taskId` returned by [CreateIdentityProviderSyncJob](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateIdentityProviderSyncJob) and keep the same workspace and identity provider.
     * ### Determine synchronization results
     * | `status` | Meaning and what to do next |
     * | --- | --- |
     * | `PENDING`, `RUNNING` | The node is not yet complete. You can continue to query the status. |
     * | `PAUSED` | The node is paused and has not ended. |
     * | `SUCCESS` | The synchronization is complete. You can view the workspace users. |
     * | `FAILED` | The synchronization failed. Check the `failureReason`. |
     * | `CANCELED` | The node is canceled. |
     * `syncedUserCount` is the number of processed users, including updated existing users. It is not the number of newly added users and cannot be directly used as a completion percentage. If the count is not yet available, `null` is returned.
     *
     * @param request - GetIdentityProviderSyncJobRequest
     * @returns GetIdentityProviderSyncJobResponse
     */
    getIdentityProviderSyncJob(workspaceId: string, identityProviderType: string, taskId: string, request: $_model.GetIdentityProviderSyncJobRequest): Promise<$_model.GetIdentityProviderSyncJobResponse>;
    /**
     * Queries the synchronization scope of an identity provider.
     *
     * @remarks
     * Queries the saved user synchronization scope, checks whether the selected departments are valid, and views the estimated number of departments and users involved. You can use this operation to verify the scope before initiating a manual synchronization.
     * ### View the synchronization scope
     * | `syncScope.mode` | Synchronization scope |
     * | --- | --- |
     * | `AllAuthorized` | The address book scope authorized for the enterprise application. The specific scope is determined by the enterprise\\"s authorization. |
     * | `SelectedDepartments` | The saved scope of specified departments. Use `selectedDepartments` to view the selected departments and their validity. |
     * This operation reads the saved configurations. After adjusting the department selection, save the changes by calling [UpdateIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProvider) before querying the estimated results. To browse the complete department tree, use [ListIdentityProviderDepartments](https://api.aliyun.com/document/AgentCore/2026-08-04/ListIdentityProviderDepartments).
     * ### Use user count estimation
     * You can use `expandedDepartmentCount` and `estimatedUserCount` only when `estimateStatus` is `Ready` and the counts are not `null`. Counts that have not been obtained return `null` and must not be treated as 0.
     * After confirming the scope, initiate the synchronization by calling [CreateIdentityProviderSyncJob](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateIdentityProviderSyncJob).
     *
     * @param request - GetIdentityProviderSyncScopeRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetIdentityProviderSyncScopeResponse
     */
    getIdentityProviderSyncScopeWithOptions(workspaceId: string, identityProviderType: string, request: $_model.GetIdentityProviderSyncScopeRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetIdentityProviderSyncScopeResponse>;
    /**
     * Queries the synchronization scope of an identity provider.
     *
     * @remarks
     * Queries the saved user synchronization scope, checks whether the selected departments are valid, and views the estimated number of departments and users involved. You can use this operation to verify the scope before initiating a manual synchronization.
     * ### View the synchronization scope
     * | `syncScope.mode` | Synchronization scope |
     * | --- | --- |
     * | `AllAuthorized` | The address book scope authorized for the enterprise application. The specific scope is determined by the enterprise\\"s authorization. |
     * | `SelectedDepartments` | The saved scope of specified departments. Use `selectedDepartments` to view the selected departments and their validity. |
     * This operation reads the saved configurations. After adjusting the department selection, save the changes by calling [UpdateIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProvider) before querying the estimated results. To browse the complete department tree, use [ListIdentityProviderDepartments](https://api.aliyun.com/document/AgentCore/2026-08-04/ListIdentityProviderDepartments).
     * ### Use user count estimation
     * You can use `expandedDepartmentCount` and `estimatedUserCount` only when `estimateStatus` is `Ready` and the counts are not `null`. Counts that have not been obtained return `null` and must not be treated as 0.
     * After confirming the scope, initiate the synchronization by calling [CreateIdentityProviderSyncJob](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateIdentityProviderSyncJob).
     *
     * @param request - GetIdentityProviderSyncScopeRequest
     * @returns GetIdentityProviderSyncScopeResponse
     */
    getIdentityProviderSyncScope(workspaceId: string, identityProviderType: string, request: $_model.GetIdentityProviderSyncScopeRequest): Promise<$_model.GetIdentityProviderSyncScopeResponse>;
    /**
     * Queries the status, digest, size, and deletion conditions of an image cache in a specified workspace.
     *
     * @remarks
     * Queries the creation status and usage of an image cache to determine whether the cache is available and meets the deletion conditions.
     * ### Cache status
     * | `status` | Description |
     * | --- | --- |
     * | `PENDING` | Preparing. Continue querying. |
     * | `READY` | Ready. |
     * | `FAILED` | Preparation failed. Troubleshoot based on the `error` field. |
     * | `DELETING` | Deleting. |
     * | `DISABLED` | Disabled. |
     * The `digest` is provided after the source resolution is completed. The unit of `cacheSizeBytes` is bytes, and it may be empty when the cache is not yet available.
     * ### Usage and deletion
     * `agentCount` indicates the number of agents that have the cache switch enabled and reference this cache. `canDelete` and `deleteBlockReason` indicate whether the cache can be deleted and the reason for blocking deletion. Deletion requests will recheck the usage.
     * The query scope of this operation is determined by `regionId`, `workspaceId`, and `imageId`.
     *
     * @param request - GetImageCacheRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetImageCacheResponse
     */
    getImageCacheWithOptions(imageId: string, request: $_model.GetImageCacheRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetImageCacheResponse>;
    /**
     * Queries the status, digest, size, and deletion conditions of an image cache in a specified workspace.
     *
     * @remarks
     * Queries the creation status and usage of an image cache to determine whether the cache is available and meets the deletion conditions.
     * ### Cache status
     * | `status` | Description |
     * | --- | --- |
     * | `PENDING` | Preparing. Continue querying. |
     * | `READY` | Ready. |
     * | `FAILED` | Preparation failed. Troubleshoot based on the `error` field. |
     * | `DELETING` | Deleting. |
     * | `DISABLED` | Disabled. |
     * The `digest` is provided after the source resolution is completed. The unit of `cacheSizeBytes` is bytes, and it may be empty when the cache is not yet available.
     * ### Usage and deletion
     * `agentCount` indicates the number of agents that have the cache switch enabled and reference this cache. `canDelete` and `deleteBlockReason` indicate whether the cache can be deleted and the reason for blocking deletion. Deletion requests will recheck the usage.
     * The query scope of this operation is determined by `regionId`, `workspaceId`, and `imageId`.
     *
     * @param request - GetImageCacheRequest
     * @returns GetImageCacheResponse
     */
    getImageCache(imageId: string, request: $_model.GetImageCacheRequest): Promise<$_model.GetImageCacheResponse>;
    /**
     * Queries the latest configuration, Harness, skill versions, configuration processing status, and running instance statistics of a managed Harness agent.
     *
     * @remarks
     * Queries the configuration, skill versions, and running status of a managed Harness agent to view the current configuration and its processing results.
     * ### Configuration and running status
     * This operation returns the latest submitted configuration, which may still be processing. Use the following fields to determine the update progress and running status:
     * | Field | Purpose |
     * | --- | --- |
     * | `latestSpecVersion` | The latest submitted expected configuration version. |
     * | `latestVersionStatus` | The processing status of the expected version. |
     * | `status` | The overall status of the agent. |
     * | `sandboxPhaseCounts` | The current snapshot of the number of instances in each phase. |
     * Successful configuration processing does not mean that all old instances have been replaced. To view specific instances or active sessions, call [ListSandboxes](https://api.aliyun.com/document/AgentCore/2026-08-04/ListSandboxes) and [ListSandboxSessions](https://api.aliyun.com/document/AgentCore/2026-08-04/ListSandboxSessions) respectively.
     * ### Harness and skill versions
     * `harness.type` indicates the runtime framework determined at creation. The `connectorServiceAccountKey` of qodercli returns the ID of the bound account key record, not the original key.
     * `configuredSkills` are explicitly configured skills. `skills` contains the aggregated results of templates and explicit configurations. `resolvedVersion` is the current target version, and `appliedVersion` is the version that has taken effect at runtime. These two may differ during an update. `fromTemplate=true` indicates that the skill comes from a template.
     * If the queried agent does not exist, has been deleted, or does not belong to the specified workspace, a resource not found error is returned.
     *
     * @param request - GetManagedAgentRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetManagedAgentResponse
     */
    getManagedAgentWithOptions(workspaceId: string, agentId: string, request: $_model.GetManagedAgentRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetManagedAgentResponse>;
    /**
     * Queries the latest configuration, Harness, skill versions, configuration processing status, and running instance statistics of a managed Harness agent.
     *
     * @remarks
     * Queries the configuration, skill versions, and running status of a managed Harness agent to view the current configuration and its processing results.
     * ### Configuration and running status
     * This operation returns the latest submitted configuration, which may still be processing. Use the following fields to determine the update progress and running status:
     * | Field | Purpose |
     * | --- | --- |
     * | `latestSpecVersion` | The latest submitted expected configuration version. |
     * | `latestVersionStatus` | The processing status of the expected version. |
     * | `status` | The overall status of the agent. |
     * | `sandboxPhaseCounts` | The current snapshot of the number of instances in each phase. |
     * Successful configuration processing does not mean that all old instances have been replaced. To view specific instances or active sessions, call [ListSandboxes](https://api.aliyun.com/document/AgentCore/2026-08-04/ListSandboxes) and [ListSandboxSessions](https://api.aliyun.com/document/AgentCore/2026-08-04/ListSandboxSessions) respectively.
     * ### Harness and skill versions
     * `harness.type` indicates the runtime framework determined at creation. The `connectorServiceAccountKey` of qodercli returns the ID of the bound account key record, not the original key.
     * `configuredSkills` are explicitly configured skills. `skills` contains the aggregated results of templates and explicit configurations. `resolvedVersion` is the current target version, and `appliedVersion` is the version that has taken effect at runtime. These two may differ during an update. `fromTemplate=true` indicates that the skill comes from a template.
     * If the queried agent does not exist, has been deleted, or does not belong to the specified workspace, a resource not found error is returned.
     *
     * @param request - GetManagedAgentRequest
     * @returns GetManagedAgentResponse
     */
    getManagedAgent(workspaceId: string, agentId: string, request: $_model.GetManagedAgentRequest): Promise<$_model.GetManagedAgentResponse>;
    /**
     * Queries the details of a specified MCP service, such as the address, type, status, authentication configuration, and protocol.
     *
     * @remarks
     * Queries the details of a specified MCP service, such as the address, type, status, authentication configuration, and protocol.
     *
     * @param request - GetMcpRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetMcpResponse
     */
    getMcpWithOptions(workspaceId: string, mcpServerId: string, request: $_model.GetMcpRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetMcpResponse>;
    /**
     * Queries the details of a specified MCP service, such as the address, type, status, authentication configuration, and protocol.
     *
     * @remarks
     * Queries the details of a specified MCP service, such as the address, type, status, authentication configuration, and protocol.
     *
     * @param request - GetMcpRequest
     * @returns GetMcpResponse
     */
    getMcp(workspaceId: string, mcpServerId: string, request: $_model.GetMcpRequest): Promise<$_model.GetMcpResponse>;
    /**
     * Returns a time-limited presigned upload URL and a temporary code package token. After the upload is complete, the token can be directly used to create or update a code deployment.
     *
     * @remarks
     * Retrieves a temporary upload URL for a local MCP code package to create or update an MCP service of the code deployment type.
     * ### Upload and deployment steps
     * **Step 1:** Prepare a ZIP code package, specify the file name in `fileName`, and call this operation to obtain the upload information.
     * **Step 2:** Use the returned `uploadMethod`, `uploadUrl`, and `headers` to upload the file content. The package size cannot exceed `maxSize`. The current limit is 50 MiB (52,428,800 bytes).
     * **Step 3:** After the upload is complete, submit the `codePackageToken` to the code deployment configuration in [CreateMcp](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateMcp) or [UpdateMcp](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateMcp).
     * **Step 4:** After submitting the deployment, query the service status through [GetMcp](https://api.aliyun.com/document/AgentCore/2026-08-04/GetMcp).
     * ### Validity period
     * For the expiration time of the upload URL, see `expiresAt`. For the expiration time of the temporary code package, see `artifactExpiresAt`. Complete the upload and deployment within the corresponding time limits. If the upload URL expires, obtain it again.
     *
     * @param tmpReq - GetMcpCodePackageUploadUrlRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetMcpCodePackageUploadUrlResponse
     */
    getMcpCodePackageUploadUrlWithOptions(workspaceId: string, tmpReq: $_model.GetMcpCodePackageUploadUrlRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetMcpCodePackageUploadUrlResponse>;
    /**
     * Returns a time-limited presigned upload URL and a temporary code package token. After the upload is complete, the token can be directly used to create or update a code deployment.
     *
     * @remarks
     * Retrieves a temporary upload URL for a local MCP code package to create or update an MCP service of the code deployment type.
     * ### Upload and deployment steps
     * **Step 1:** Prepare a ZIP code package, specify the file name in `fileName`, and call this operation to obtain the upload information.
     * **Step 2:** Use the returned `uploadMethod`, `uploadUrl`, and `headers` to upload the file content. The package size cannot exceed `maxSize`. The current limit is 50 MiB (52,428,800 bytes).
     * **Step 3:** After the upload is complete, submit the `codePackageToken` to the code deployment configuration in [CreateMcp](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateMcp) or [UpdateMcp](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateMcp).
     * **Step 4:** After submitting the deployment, query the service status through [GetMcp](https://api.aliyun.com/document/AgentCore/2026-08-04/GetMcp).
     * ### Validity period
     * For the expiration time of the upload URL, see `expiresAt`. For the expiration time of the temporary code package, see `artifactExpiresAt`. Complete the upload and deployment within the corresponding time limits. If the upload URL expires, obtain it again.
     *
     * @param request - GetMcpCodePackageUploadUrlRequest
     * @returns GetMcpCodePackageUploadUrlResponse
     */
    getMcpCodePackageUploadUrl(workspaceId: string, request: $_model.GetMcpCodePackageUploadUrlRequest): Promise<$_model.GetMcpCodePackageUploadUrlResponse>;
    /**
     * Queries the details of an MCP marketplace template.
     *
     * @remarks
     * Queries the capabilities, parameters, and version information of an MCP marketplace template to help you select a template and prepare for installation and configuration.
     * Returns the current template version and the installation form schema.
     *
     * @param request - GetMcpMarketItemRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetMcpMarketItemResponse
     */
    getMcpMarketItemWithOptions(workspaceId: string, marketItemId: string, request: $_model.GetMcpMarketItemRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetMcpMarketItemResponse>;
    /**
     * Queries the details of an MCP marketplace template.
     *
     * @remarks
     * Queries the capabilities, parameters, and version information of an MCP marketplace template to help you select a template and prepare for installation and configuration.
     * Returns the current template version and the installation form schema.
     *
     * @param request - GetMcpMarketItemRequest
     * @returns GetMcpMarketItemResponse
     */
    getMcpMarketItem(workspaceId: string, marketItemId: string, request: $_model.GetMcpMarketItemRequest): Promise<$_model.GetMcpMarketItemResponse>;
    /**
     * Queries a long-term memory by memory ID.
     *
     * @remarks
     * Queries a long-term memory by memory ID.
     *
     * @param request - GetMemoryRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetMemoryResponse
     */
    getMemoryWithOptions(workspaceId: string, memoryStoreName: string, memoryId: string, request: $_model.GetMemoryRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetMemoryResponse>;
    /**
     * Queries a long-term memory by memory ID.
     *
     * @remarks
     * Queries a long-term memory by memory ID.
     *
     * @param request - GetMemoryRequest
     * @returns GetMemoryResponse
     */
    getMemory(workspaceId: string, memoryStoreName: string, memoryId: string, request: $_model.GetMemoryRequest): Promise<$_model.GetMemoryResponse>;
    /**
     * Queries the public information and current status of a MemoryStore in a specified workspace.
     *
     * @remarks
     * Queries the configuration and current status of a long-term memory store (MemoryStore) for viewing memory store information.
     *
     * @param request - GetMemoryStoreRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetMemoryStoreResponse
     */
    getMemoryStoreWithOptions(workspaceId: string, memoryStoreName: string, request: $_model.GetMemoryStoreRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetMemoryStoreResponse>;
    /**
     * Queries the public information and current status of a MemoryStore in a specified workspace.
     *
     * @remarks
     * Queries the configuration and current status of a long-term memory store (MemoryStore) for viewing memory store information.
     *
     * @param request - GetMemoryStoreRequest
     * @returns GetMemoryStoreResponse
     */
    getMemoryStore(workspaceId: string, memoryStoreName: string, request: $_model.GetMemoryStoreRequest): Promise<$_model.GetMemoryStoreResponse>;
    /**
     * Queries the memory extraction task by using the taskId returned by the asynchronous AddMemories operation.
     *
     * @remarks
     * Queries the progress and results of a memory extraction task by using the taskId returned when asynchronously writing data through [AddMemories](https://api.aliyun.com/document/AgentCore/2026-08-04/AddMemories).
     *
     * @param request - GetMemoryTaskRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetMemoryTaskResponse
     */
    getMemoryTaskWithOptions(workspaceId: string, memoryStoreName: string, taskId: string, request: $_model.GetMemoryTaskRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetMemoryTaskResponse>;
    /**
     * Queries the memory extraction task by using the taskId returned by the asynchronous AddMemories operation.
     *
     * @remarks
     * Queries the progress and results of a memory extraction task by using the taskId returned when asynchronously writing data through [AddMemories](https://api.aliyun.com/document/AgentCore/2026-08-04/AddMemories).
     *
     * @param request - GetMemoryTaskRequest
     * @returns GetMemoryTaskResponse
     */
    getMemoryTask(workspaceId: string, memoryStoreName: string, taskId: string, request: $_model.GetMemoryTaskRequest): Promise<$_model.GetMemoryTaskResponse>;
    /**
     * Queries the detailed configuration and region of a model in a specified workspace.
     *
     * @remarks
     * Queries the detailed configuration and region of a model in a specified workspace.
     *
     * @param request - GetModelRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetModelResponse
     */
    getModelWithOptions(workspaceId: string, modelId: string, request: $_model.GetModelRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetModelResponse>;
    /**
     * Queries the detailed configuration and region of a model in a specified workspace.
     *
     * @remarks
     * Queries the detailed configuration and region of a model in a specified workspace.
     *
     * @param request - GetModelRequest
     * @returns GetModelResponse
     */
    getModel(workspaceId: string, modelId: string, request: $_model.GetModelRequest): Promise<$_model.GetModelResponse>;
    /**
     * Queries the detailed configuration, credential configuration status, publish status, and region of a specified model connection.
     *
     * @remarks
     * Queries the detailed configuration, credential configuration status, publish status, and region of a specified model connection.
     *
     * @param request - GetModelConnectionRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetModelConnectionResponse
     */
    getModelConnectionWithOptions(workspaceId: string, connectionId: string, request: $_model.GetModelConnectionRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetModelConnectionResponse>;
    /**
     * Queries the detailed configuration, credential configuration status, publish status, and region of a specified model connection.
     *
     * @remarks
     * Queries the detailed configuration, credential configuration status, publish status, and region of a specified model connection.
     *
     * @param request - GetModelConnectionRequest
     * @returns GetModelConnectionResponse
     */
    getModelConnection(workspaceId: string, connectionId: string, request: $_model.GetModelConnectionRequest): Promise<$_model.GetModelConnectionResponse>;
    /**
     * Queries the overall result of a specified sandbox rebuild task. Always use the initial operationId returned by RebuildSandbox without tracking the rebuild task and subsequent creation tasks separately. Only the SUCCEEDED status indicates completion. Do not treat UNKNOWN, missing status, or query exceptions as success, and do not automatically resubmit the rebuild.
     *
     * @remarks
     * Always use the initial operationId returned by RebuildSandbox for the query. Magic aggregates and returns the rebuildOutcome result from Runtime Manager, so the frontend does not need to track Claim tasks. Only SUCCEEDED indicates overall completion. Do not treat UNKNOWN, missing fields, or query exceptions as success, and do not automatically resubmit the rebuild. You can specify the endpoint runtime version by using serviceEndpointId. If omitted, the default latest runtime identity is used.
     *
     * @param request - GetSandboxRebuildOperationRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetSandboxRebuildOperationResponse
     */
    getSandboxRebuildOperationWithOptions(workspaceId: string, agentId: string, sandboxId: string, operationId: string, request: $_model.GetSandboxRebuildOperationRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetSandboxRebuildOperationResponse>;
    /**
     * Queries the overall result of a specified sandbox rebuild task. Always use the initial operationId returned by RebuildSandbox without tracking the rebuild task and subsequent creation tasks separately. Only the SUCCEEDED status indicates completion. Do not treat UNKNOWN, missing status, or query exceptions as success, and do not automatically resubmit the rebuild.
     *
     * @remarks
     * Always use the initial operationId returned by RebuildSandbox for the query. Magic aggregates and returns the rebuildOutcome result from Runtime Manager, so the frontend does not need to track Claim tasks. Only SUCCEEDED indicates overall completion. Do not treat UNKNOWN, missing fields, or query exceptions as success, and do not automatically resubmit the rebuild. You can specify the endpoint runtime version by using serviceEndpointId. If omitted, the default latest runtime identity is used.
     *
     * @param request - GetSandboxRebuildOperationRequest
     * @returns GetSandboxRebuildOperationResponse
     */
    getSandboxRebuildOperation(workspaceId: string, agentId: string, sandboxId: string, operationId: string, request: $_model.GetSandboxRebuildOperationRequest): Promise<$_model.GetSandboxRebuildOperationResponse>;
    /**
     * Queries the details of a specified service endpoint, including the target route, access address, authentication configuration, and current status.
     *
     * @remarks
     * Queries the service endpoint of an agent or collaboration component to obtain a stable access address, authentication configuration, and current status.
     * A service endpoint associates an access address with a specified agent version or workspace collaboration component. You can use the target route and address list in the response to verify the access target.
     *
     * @param request - GetServiceEndpointRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetServiceEndpointResponse
     */
    getServiceEndpointWithOptions(workspaceId: string, serviceEndpointId: string, request: $_model.GetServiceEndpointRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceEndpointResponse>;
    /**
     * Queries the details of a specified service endpoint, including the target route, access address, authentication configuration, and current status.
     *
     * @remarks
     * Queries the service endpoint of an agent or collaboration component to obtain a stable access address, authentication configuration, and current status.
     * A service endpoint associates an access address with a specified agent version or workspace collaboration component. You can use the target route and address list in the response to verify the access target.
     *
     * @param request - GetServiceEndpointRequest
     * @returns GetServiceEndpointResponse
     */
    getServiceEndpoint(workspaceId: string, serviceEndpointId: string, request: $_model.GetServiceEndpointRequest): Promise<$_model.GetServiceEndpointResponse>;
    /**
     * Queries the currently effective API key and its invocation method for a service endpoint in a specified workspace.
     *
     * @remarks
     * Retrieves the currently effective API key and invocation method for a service endpoint to allow external applications to access the endpoint.
     * The endpoint must have API_KEY authentication enabled and access credentials ready. Keep the returned API key secure.
     *
     * @param request - GetServiceEndpointApiKeyRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetServiceEndpointApiKeyResponse
     */
    getServiceEndpointApiKeyWithOptions(workspaceId: string, serviceEndpointId: string, request: $_model.GetServiceEndpointApiKeyRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceEndpointApiKeyResponse>;
    /**
     * Queries the currently effective API key and its invocation method for a service endpoint in a specified workspace.
     *
     * @remarks
     * Retrieves the currently effective API key and invocation method for a service endpoint to allow external applications to access the endpoint.
     * The endpoint must have API_KEY authentication enabled and access credentials ready. Keep the returned API key secure.
     *
     * @param request - GetServiceEndpointApiKeyRequest
     * @returns GetServiceEndpointApiKeyResponse
     */
    getServiceEndpointApiKey(workspaceId: string, serviceEndpointId: string, request: $_model.GetServiceEndpointApiKeyRequest): Promise<$_model.GetServiceEndpointApiKeyResponse>;
    /**
     * Queries the basic information, version status, tags, visibility scope, and version list of a specified skill.
     *
     * @remarks
     * Queries the basic information, version status, tags, visibility scope, and version list of a specified skill.
     *
     * @param request - GetSkillDetailRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetSkillDetailResponse
     */
    getSkillDetailWithOptions(workspaceId: string, skillName: string, request: $_model.GetSkillDetailRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetSkillDetailResponse>;
    /**
     * Queries the basic information, version status, tags, visibility scope, and version list of a specified skill.
     *
     * @remarks
     * Queries the basic information, version status, tags, visibility scope, and version list of a specified skill.
     *
     * @param request - GetSkillDetailRequest
     * @returns GetSkillDetailResponse
     */
    getSkillDetail(workspaceId: string, skillName: string, request: $_model.GetSkillDetailRequest): Promise<$_model.GetSkillDetailResponse>;
    /**
     * Retrieves the OSS presigned upload URL and object name required to import a skill ZIP package. After the upload is complete, call the skill OSS upload API to complete the import.
     *
     * @remarks
     * Retrieves the upload URL for a skill ZIP package to import a skill from a local file.
     * Files are transferred through Object Storage Service (OSS): first upload the file using the returned URL, and then call [UploadSkillViaOss](https://api.aliyun.com/document/AgentCore/2026-08-04/UploadSkillViaOss) to complete the import. To check the package content and conflicts, call [PrecheckSkillUploadViaOss](https://api.aliyun.com/document/AgentCore/2026-08-04/PrecheckSkillUploadViaOss) first.
     *
     * @param request - GetSkillImportFileUrlRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetSkillImportFileUrlResponse
     */
    getSkillImportFileUrlWithOptions(workspaceId: string, request: $_model.GetSkillImportFileUrlRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetSkillImportFileUrlResponse>;
    /**
     * Retrieves the OSS presigned upload URL and object name required to import a skill ZIP package. After the upload is complete, call the skill OSS upload API to complete the import.
     *
     * @remarks
     * Retrieves the upload URL for a skill ZIP package to import a skill from a local file.
     * Files are transferred through Object Storage Service (OSS): first upload the file using the returned URL, and then call [UploadSkillViaOss](https://api.aliyun.com/document/AgentCore/2026-08-04/UploadSkillViaOss) to complete the import. To check the package content and conflicts, call [PrecheckSkillUploadViaOss](https://api.aliyun.com/document/AgentCore/2026-08-04/PrecheckSkillUploadViaOss) first.
     *
     * @param request - GetSkillImportFileUrlRequest
     * @returns GetSkillImportFileUrlResponse
     */
    getSkillImportFileUrl(workspaceId: string, request: $_model.GetSkillImportFileUrlRequest): Promise<$_model.GetSkillImportFileUrlResponse>;
    /**
     * Queries the complete details of a specified skill version, including version metadata, skill content, and associated resources.
     *
     * @remarks
     * Queries the complete details of a specified skill version, including version metadata, skill content, and associated resources.
     *
     * @param request - GetSkillVersionDetailRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetSkillVersionDetailResponse
     */
    getSkillVersionDetailWithOptions(workspaceId: string, skillName: string, skillVersion: string, request: $_model.GetSkillVersionDetailRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetSkillVersionDetailResponse>;
    /**
     * Queries the complete details of a specified skill version, including version metadata, skill content, and associated resources.
     *
     * @remarks
     * Queries the complete details of a specified skill version, including version metadata, skill content, and associated resources.
     *
     * @param request - GetSkillVersionDetailRequest
     * @returns GetSkillVersionDetailResponse
     */
    getSkillVersionDetail(workspaceId: string, skillName: string, skillVersion: string, request: $_model.GetSkillVersionDetailRequest): Promise<$_model.GetSkillVersionDetailResponse>;
    /**
     * Queries the details of a specified team. The response also returns the complete attributes and team roles of each user and agent member in the team.
     *
     * @remarks
     * Queries the details of a specified team. The response also returns the complete attributes and team roles of each user and agent member in the team.
     *
     * @param request - GetTeamRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetTeamResponse
     */
    getTeamWithOptions(workspaceId: string, teamId: string, request: $_model.GetTeamRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetTeamResponse>;
    /**
     * Queries the details of a specified team. The response also returns the complete attributes and team roles of each user and agent member in the team.
     *
     * @remarks
     * Queries the details of a specified team. The response also returns the complete attributes and team roles of each user and agent member in the team.
     *
     * @param request - GetTeamRequest
     * @returns GetTeamResponse
     */
    getTeam(workspaceId: string, teamId: string, request: $_model.GetTeamRequest): Promise<$_model.GetTeamResponse>;
    /**
     * Queries the details of a specific user in a specified workspace. Returns an error if the user does not exist.
     *
     * @remarks
     * Queries the details of a specific user in a specified workspace.
     *
     * @param request - GetUserRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetUserResponse
     */
    getUserWithOptions(workspaceId: string, agentCoreUserId: string, request: $_model.GetUserRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserResponse>;
    /**
     * Queries the details of a specific user in a specified workspace. Returns an error if the user does not exist.
     *
     * @remarks
     * Queries the details of a specific user in a specified workspace.
     *
     * @param request - GetUserRequest
     * @returns GetUserResponse
     */
    getUser(workspaceId: string, agentCoreUserId: string, request: $_model.GetUserRequest): Promise<$_model.GetUserResponse>;
    /**
     * Queries the details of a workspace by workspace ID, including the lifecycle status, CMS workspace, AI Registry namespace, and current network policies.
     *
     * @remarks
     * Queries the basic information, associated resources, and network configurations of a workspace to view the status or verify configurations.
     * The returned information includes the lifecycle status, associated observability workspace, AI Registry namespace, and current network policies.
     *
     * @param request - GetWorkspaceRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetWorkspaceResponse
     */
    getWorkspaceWithOptions(workspaceId: string, request: $_model.GetWorkspaceRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkspaceResponse>;
    /**
     * Queries the details of a workspace by workspace ID, including the lifecycle status, CMS workspace, AI Registry namespace, and current network policies.
     *
     * @remarks
     * Queries the basic information, associated resources, and network configurations of a workspace to view the status or verify configurations.
     * The returned information includes the lifecycle status, associated observability workspace, AI Registry namespace, and current network policies.
     *
     * @param request - GetWorkspaceRequest
     * @returns GetWorkspaceResponse
     */
    getWorkspace(workspaceId: string, request: $_model.GetWorkspaceRequest): Promise<$_model.GetWorkspaceResponse>;
    /**
     * Generates a RAM authorization link for a workspace resource role to pull images from a specified ACR Enterprise Edition repository.
     *
     * @remarks
     * Generates an authorization link for a workspace resource role to pull images from a specified ACR Enterprise Edition repository. This link is used to complete access authorization before image deployment.
     * ### Request parameters
     * workspaceId identifies the workspace. acrInstanceId, namespace, and repository are passed as query parameters. repository is the repository name without the namespace.
     * ### Complete authorization
     * Open the authorizeUrl in the response and confirm the authorization. Then, call [VerifyWorkspaceAcrRamAuthorization](https://api.aliyun.com/document/AgentCore/2026-08-04/VerifyWorkspaceAcrRamAuthorization) to check the binding status. The role is selected by the server. roleName and roleSource indicate the selected role and its source, which does not mean that the authorization is complete.
     * This authorization is used for ACR image deployment of custom agents and reading image cache sources. Obtaining the link itself does not pull images or create caches.
     *
     * @param request - GetWorkspaceAcrRamAuthorizeUrlRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetWorkspaceAcrRamAuthorizeUrlResponse
     */
    getWorkspaceAcrRamAuthorizeUrlWithOptions(workspaceId: string, request: $_model.GetWorkspaceAcrRamAuthorizeUrlRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkspaceAcrRamAuthorizeUrlResponse>;
    /**
     * Generates a RAM authorization link for a workspace resource role to pull images from a specified ACR Enterprise Edition repository.
     *
     * @remarks
     * Generates an authorization link for a workspace resource role to pull images from a specified ACR Enterprise Edition repository. This link is used to complete access authorization before image deployment.
     * ### Request parameters
     * workspaceId identifies the workspace. acrInstanceId, namespace, and repository are passed as query parameters. repository is the repository name without the namespace.
     * ### Complete authorization
     * Open the authorizeUrl in the response and confirm the authorization. Then, call [VerifyWorkspaceAcrRamAuthorization](https://api.aliyun.com/document/AgentCore/2026-08-04/VerifyWorkspaceAcrRamAuthorization) to check the binding status. The role is selected by the server. roleName and roleSource indicate the selected role and its source, which does not mean that the authorization is complete.
     * This authorization is used for ACR image deployment of custom agents and reading image cache sources. Obtaining the link itself does not pull images or create caches.
     *
     * @param request - GetWorkspaceAcrRamAuthorizeUrlRequest
     * @returns GetWorkspaceAcrRamAuthorizeUrlResponse
     */
    getWorkspaceAcrRamAuthorizeUrl(workspaceId: string, request: $_model.GetWorkspaceAcrRamAuthorizeUrlRequest): Promise<$_model.GetWorkspaceAcrRamAuthorizeUrlResponse>;
    /**
     * Retrieves the RAM page URL to authorize the workspace resource role to access a specified AgenticFS access point before configuring NAS storage mounting for an agent.
     *
     * @remarks
     * Retrieves the AgenticFS mount authorization link to enable agents in the workspace to access a specified file space.
     * [AgenticFS](https://www.alibabacloud.com/help/en/nas/product-overview/agenticfs-overview) is a storage class of File Storage NAS designed for AI agents, which can be used to persistently store files used by agents. AgenticSpace is the file space within it, and an access point provides the mount entry.
     * ### Authorization and mount steps
     * **Step 1:** Prepare a file system, an AgenticSpace, and an access point in NAS, and obtain the file system ID, access point ID, and domain name.
     * **Step 2:** Submit `fileSystemId`, `accessPointId`, and `server` as query parameters. For `server`, enter the access point domain name returned by the NAS `ListAccessPoints` operation, without the protocol, port, or path.
     * **Step 3:** Open the returned `authorizeUrl` to complete the authorization for the workspace resource role.
     * **Step 4:** Check the authorization status by calling [VerifyWorkspaceAgenticFsMountRamAuthorization](https://api.aliyun.com/document/AgentCore/2026-08-04/VerifyWorkspaceAgenticFsMountRamAuthorization).
     * **Step 5:** When creating or updating a custom code/image agent or a managed Harness agent, enter the access point domain name, the relative directory `path`, and the container mount path `mountPath` in `agenticFsMounts`.
     * The access point must be located in the VPC associated with the workspace, and VPC access must be enabled for the agent. The mount directory must already exist. Use a non-empty relative directory within the access point for `path`, and use an absolute path within the container for `mountPath`.
     *
     * @param request - GetWorkspaceAgenticFsMountRamAuthorizeUrlRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetWorkspaceAgenticFsMountRamAuthorizeUrlResponse
     */
    getWorkspaceAgenticFsMountRamAuthorizeUrlWithOptions(workspaceId: string, request: $_model.GetWorkspaceAgenticFsMountRamAuthorizeUrlRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkspaceAgenticFsMountRamAuthorizeUrlResponse>;
    /**
     * Retrieves the RAM page URL to authorize the workspace resource role to access a specified AgenticFS access point before configuring NAS storage mounting for an agent.
     *
     * @remarks
     * Retrieves the AgenticFS mount authorization link to enable agents in the workspace to access a specified file space.
     * [AgenticFS](https://www.alibabacloud.com/help/en/nas/product-overview/agenticfs-overview) is a storage class of File Storage NAS designed for AI agents, which can be used to persistently store files used by agents. AgenticSpace is the file space within it, and an access point provides the mount entry.
     * ### Authorization and mount steps
     * **Step 1:** Prepare a file system, an AgenticSpace, and an access point in NAS, and obtain the file system ID, access point ID, and domain name.
     * **Step 2:** Submit `fileSystemId`, `accessPointId`, and `server` as query parameters. For `server`, enter the access point domain name returned by the NAS `ListAccessPoints` operation, without the protocol, port, or path.
     * **Step 3:** Open the returned `authorizeUrl` to complete the authorization for the workspace resource role.
     * **Step 4:** Check the authorization status by calling [VerifyWorkspaceAgenticFsMountRamAuthorization](https://api.aliyun.com/document/AgentCore/2026-08-04/VerifyWorkspaceAgenticFsMountRamAuthorization).
     * **Step 5:** When creating or updating a custom code/image agent or a managed Harness agent, enter the access point domain name, the relative directory `path`, and the container mount path `mountPath` in `agenticFsMounts`.
     * The access point must be located in the VPC associated with the workspace, and VPC access must be enabled for the agent. The mount directory must already exist. Use a non-empty relative directory within the access point for `path`, and use an absolute path within the container for `mountPath`.
     *
     * @param request - GetWorkspaceAgenticFsMountRamAuthorizeUrlRequest
     * @returns GetWorkspaceAgenticFsMountRamAuthorizeUrlResponse
     */
    getWorkspaceAgenticFsMountRamAuthorizeUrl(workspaceId: string, request: $_model.GetWorkspaceAgenticFsMountRamAuthorizeUrlRequest): Promise<$_model.GetWorkspaceAgenticFsMountRamAuthorizeUrlResponse>;
    /**
     * Queries the activation status and configuration of a specified component in a workspace. The collaboration value corresponds to the Collaboration component displayed in the console.
     *
     * @remarks
     * Queries the status and configuration of the collaboration component in a workspace to check whether the component is activated and whether the configuration takes effect.
     * To specify the collaboration component, set `pluginName` to `collaboration`. To activate the component, call [InstallWorkspacePlugin](https://api.aliyun.com/document/AgentCore/2026-08-04/InstallWorkspacePlugin).
     *
     * @param request - GetWorkspacePluginRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetWorkspacePluginResponse
     */
    getWorkspacePluginWithOptions(workspaceId: string, pluginName: string, request: $_model.GetWorkspacePluginRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkspacePluginResponse>;
    /**
     * Queries the activation status and configuration of a specified component in a workspace. The collaboration value corresponds to the Collaboration component displayed in the console.
     *
     * @remarks
     * Queries the status and configuration of the collaboration component in a workspace to check whether the component is activated and whether the configuration takes effect.
     * To specify the collaboration component, set `pluginName` to `collaboration`. To activate the component, call [InstallWorkspacePlugin](https://api.aliyun.com/document/AgentCore/2026-08-04/InstallWorkspacePlugin).
     *
     * @param request - GetWorkspacePluginRequest
     * @returns GetWorkspacePluginResponse
     */
    getWorkspacePlugin(workspaceId: string, pluginName: string, request: $_model.GetWorkspacePluginRequest): Promise<$_model.GetWorkspacePluginResponse>;
    /**
     * Installs an MCP marketplace template.
     *
     * @remarks
     * Creates an MCP service by using a marketplace template to reuse the tool capabilities and configurations provided by the template.
     * First, call [GetMcpMarketItem](https://api.aliyun.com/document/AgentCore/2026-08-04/GetMcpMarketItem) to view the template versions and required parameters, and then submit the configuration based on the selected version. After the service is created, call [GetMcp](https://api.aliyun.com/document/AgentCore/2026-08-04/GetMcp) to query the service status.
     *
     * @param tmpReq - InstallMcpMarketItemRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns InstallMcpMarketItemResponse
     */
    installMcpMarketItemWithOptions(workspaceId: string, marketItemId: string, tmpReq: $_model.InstallMcpMarketItemRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.InstallMcpMarketItemResponse>;
    /**
     * Installs an MCP marketplace template.
     *
     * @remarks
     * Creates an MCP service by using a marketplace template to reuse the tool capabilities and configurations provided by the template.
     * First, call [GetMcpMarketItem](https://api.aliyun.com/document/AgentCore/2026-08-04/GetMcpMarketItem) to view the template versions and required parameters, and then submit the configuration based on the selected version. After the service is created, call [GetMcp](https://api.aliyun.com/document/AgentCore/2026-08-04/GetMcp) to query the service status.
     *
     * @param request - InstallMcpMarketItemRequest
     * @returns InstallMcpMarketItemResponse
     */
    installMcpMarketItem(workspaceId: string, marketItemId: string, request: $_model.InstallMcpMarketItemRequest): Promise<$_model.InstallMcpMarketItemResponse>;
    /**
     * Enables a component for a workspace, which corresponds to the operation of enabling the collaboration component in the console. After the component is enabled, you can query its status and current configurations.
     *
     * @remarks
     * Enables the collaboration component for a workspace and configures initial settings such as the network.
     * Use pluginName=collaboration to specify the collaboration component. The enabling process is executed asynchronously. After submission, use [GetWorkspacePlugin](https://api.aliyun.com/document/AgentCore/2026-08-04/GetWorkspacePlugin) to check the component status and processing result.
     *
     * @param tmpReq - InstallWorkspacePluginRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns InstallWorkspacePluginResponse
     */
    installWorkspacePluginWithOptions(workspaceId: string, pluginName: string, tmpReq: $_model.InstallWorkspacePluginRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.InstallWorkspacePluginResponse>;
    /**
     * Enables a component for a workspace, which corresponds to the operation of enabling the collaboration component in the console. After the component is enabled, you can query its status and current configurations.
     *
     * @remarks
     * Enables the collaboration component for a workspace and configures initial settings such as the network.
     * Use pluginName=collaboration to specify the collaboration component. The enabling process is executed asynchronously. After submission, use [GetWorkspacePlugin](https://api.aliyun.com/document/AgentCore/2026-08-04/GetWorkspacePlugin) to check the component status and processing result.
     *
     * @param request - InstallWorkspacePluginRequest
     * @returns InstallWorkspacePluginResponse
     */
    installWorkspacePlugin(workspaceId: string, pluginName: string, request: $_model.InstallWorkspacePluginRequest): Promise<$_model.InstallWorkspacePluginResponse>;
    /**
     * Queries the identity, name, and architecture of language runtime environments currently available for code package deployment.
     *
     * @remarks
     * Queries the available runtime environments for code package deployment of custom code or image agents, which is used to specify `artifact.code.languageRuntime`.
     * ### Select a runtime environment
     * Pass the `languageRuntime` value from the response exactly as is to the `artifact.code.languageRuntime` parameter in [CreateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateCustomAgent) or [UpdateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateCustomAgent). The catalog is dynamically provided by the current platform version, and internal base image addresses are not returned.
     * ### Pagination rules
     * If `maxResults` is omitted or set to `0`, the default value is 10. If the value is greater than 100, it is processed as 100. The value cannot be negative. Omit `nextToken` for the first request. For subsequent requests, use the token returned in the previous response and keep the workspace unchanged. An empty token indicates that the query is complete. If the token becomes invalid due to changes in the runtime environment catalog, restart the query from the first page.
     * For regular updates, restarts, and scale-outs of existing agents, their saved runtime images are still used. When you create an agent or switch the language runtime environment, the catalog currently returned by this operation prevails.
     *
     * @param request - ListAgentCodeRuntimesRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAgentCodeRuntimesResponse
     */
    listAgentCodeRuntimesWithOptions(workspaceId: string, request: $_model.ListAgentCodeRuntimesRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListAgentCodeRuntimesResponse>;
    /**
     * Queries the identity, name, and architecture of language runtime environments currently available for code package deployment.
     *
     * @remarks
     * Queries the available runtime environments for code package deployment of custom code or image agents, which is used to specify `artifact.code.languageRuntime`.
     * ### Select a runtime environment
     * Pass the `languageRuntime` value from the response exactly as is to the `artifact.code.languageRuntime` parameter in [CreateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateCustomAgent) or [UpdateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateCustomAgent). The catalog is dynamically provided by the current platform version, and internal base image addresses are not returned.
     * ### Pagination rules
     * If `maxResults` is omitted or set to `0`, the default value is 10. If the value is greater than 100, it is processed as 100. The value cannot be negative. Omit `nextToken` for the first request. For subsequent requests, use the token returned in the previous response and keep the workspace unchanged. An empty token indicates that the query is complete. If the token becomes invalid due to changes in the runtime environment catalog, restart the query from the first page.
     * For regular updates, restarts, and scale-outs of existing agents, their saved runtime images are still used. When you create an agent or switch the language runtime environment, the catalog currently returned by this operation prevails.
     *
     * @param request - ListAgentCodeRuntimesRequest
     * @returns ListAgentCodeRuntimesResponse
     */
    listAgentCodeRuntimes(workspaceId: string, request: $_model.ListAgentCodeRuntimesRequest): Promise<$_model.ListAgentCodeRuntimesResponse>;
    /**
     * Queries the IM channels of a specified agent.
     *
     * @remarks
     * Queries the IM channels of a specified agent.
     *
     * @param request - ListAgentIMChannelsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAgentIMChannelsResponse
     */
    listAgentIMChannelsWithOptions(workspaceId: string, agentId: string, request: $_model.ListAgentIMChannelsRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListAgentIMChannelsResponse>;
    /**
     * Queries the IM channels of a specified agent.
     *
     * @remarks
     * Queries the IM channels of a specified agent.
     *
     * @param request - ListAgentIMChannelsRequest
     * @returns ListAgentIMChannelsResponse
     */
    listAgentIMChannels(workspaceId: string, agentId: string, request: $_model.ListAgentIMChannelsRequest): Promise<$_model.ListAgentIMChannelsResponse>;
    /**
     * Performs a paging query for AgentSpecs in a specified workspace, and supports name search, sorting, and filtering by owner, visibility scope, and business labels.
     *
     * @remarks
     * Performs a paging query for agent templates in a specified workspace, and supports name search, sorting, and filtering by owner, visibility scope, and business labels.
     *
     * @param request - ListAgentSpecsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAgentSpecsResponse
     */
    listAgentSpecsWithOptions(workspaceId: string, request: $_model.ListAgentSpecsRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListAgentSpecsResponse>;
    /**
     * Performs a paging query for AgentSpecs in a specified workspace, and supports name search, sorting, and filtering by owner, visibility scope, and business labels.
     *
     * @remarks
     * Performs a paging query for agent templates in a specified workspace, and supports name search, sorting, and filtering by owner, visibility scope, and business labels.
     *
     * @param request - ListAgentSpecsRequest
     * @returns ListAgentSpecsResponse
     */
    listAgentSpecs(workspaceId: string, request: $_model.ListAgentSpecsRequest): Promise<$_model.ListAgentSpecsResponse>;
    /**
     * Queries the teams to which specified agents belong. Specify the agent IDs to query by using agentIds. The operation returns the membership information of each agent in its teams, including the team ID, team name, and the role of the agent in the team.
     *
     * @remarks
     * Queries the teams to which specified agents belong.
     *
     * @param tmpReq - ListAgentTeamsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAgentTeamsResponse
     */
    listAgentTeamsWithOptions(workspaceId: string, tmpReq: $_model.ListAgentTeamsRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListAgentTeamsResponse>;
    /**
     * Queries the teams to which specified agents belong. Specify the agent IDs to query by using agentIds. The operation returns the membership information of each agent in its teams, including the team ID, team name, and the role of the agent in the team.
     *
     * @remarks
     * Queries the teams to which specified agents belong.
     *
     * @param request - ListAgentTeamsRequest
     * @returns ListAgentTeamsResponse
     */
    listAgentTeams(workspaceId: string, request: $_model.ListAgentTeamsRequest): Promise<$_model.ListAgentTeamsResponse>;
    /**
     * Queries the list of agent versions.
     *
     * @remarks
     * Queries the saved fixed versions of a specified managed or custom agent by using paging. The results are returned in descending order of creation time and do not include the system-maintained latest version. The list items do not include the configuration. To view the configuration, call GetAgentVersion.
     *
     * @param request - ListAgentVersionsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAgentVersionsResponse
     */
    listAgentVersionsWithOptions(workspaceId: string, agentId: string, request: $_model.ListAgentVersionsRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListAgentVersionsResponse>;
    /**
     * Queries the list of agent versions.
     *
     * @remarks
     * Queries the saved fixed versions of a specified managed or custom agent by using paging. The results are returned in descending order of creation time and do not include the system-maintained latest version. The list items do not include the configuration. To view the configuration, call GetAgentVersion.
     *
     * @param request - ListAgentVersionsRequest
     * @returns ListAgentVersionsResponse
     */
    listAgentVersions(workspaceId: string, agentId: string, request: $_model.ListAgentVersionsRequest): Promise<$_model.ListAgentVersionsResponse>;
    /**
     * Queries the official and enterprise models available for the enabled QoderCLI connector. The service retrieves models in real time by using the saved API key and organization ID, and deduplicates them by model ID.
     *
     * @remarks
     * Queries the official and enterprise models available for the enabled QoderCLI connector.
     * Queries the list of models available for a specified connector. Pagination is supported.
     *
     * @param request - ListConnectorModelsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListConnectorModelsResponse
     */
    listConnectorModelsWithOptions(workspaceId: string, connectorName: string, request: $_model.ListConnectorModelsRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListConnectorModelsResponse>;
    /**
     * Queries the official and enterprise models available for the enabled QoderCLI connector. The service retrieves models in real time by using the saved API key and organization ID, and deduplicates them by model ID.
     *
     * @remarks
     * Queries the official and enterprise models available for the enabled QoderCLI connector.
     * Queries the list of models available for a specified connector. Pagination is supported.
     *
     * @param request - ListConnectorModelsRequest
     * @returns ListConnectorModelsResponse
     */
    listConnectorModels(workspaceId: string, connectorName: string, request: $_model.ListConnectorModelsRequest): Promise<$_model.ListConnectorModelsResponse>;
    /**
     * Queries the list of connectors supported by a specified workspace, along with their status, number of bound agents, and configurations. The current version returns the QoderCLI connector.
     *
     * @remarks
     * Queries the connectors supported by a workspace to view their activation status, configurations, and the number of bound agents.
     *
     * @param request - ListConnectorsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListConnectorsResponse
     */
    listConnectorsWithOptions(workspaceId: string, request: $_model.ListConnectorsRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListConnectorsResponse>;
    /**
     * Queries the list of connectors supported by a specified workspace, along with their status, number of bound agents, and configurations. The current version returns the QoderCLI connector.
     *
     * @remarks
     * Queries the connectors supported by a workspace to view their activation status, configurations, and the number of bound agents.
     *
     * @param request - ListConnectorsRequest
     * @returns ListConnectorsResponse
     */
    listConnectors(workspaceId: string, request: $_model.ListConnectorsRequest): Promise<$_model.ListConnectorsResponse>;
    /**
     * Queries credentials in a specified workspace with paging. Filters credentials by type using credentialType, performs fuzzy matching on credential names using nameLike, specifies the maximum number of records per page using maxResults, and retrieves the next page using nextToken. If maxResults is not specified, the server returns 10 records by default.
     *
     * @remarks
     * Queries credentials in a specified workspace with paging.
     * ### Query and paging
     * Filter credentials by `apiKey` or `mcpHeader` type using `credentialType`, and perform fuzzy matching on names using `nameLike`.
     * Use `maxResults` to specify the number of records per page, and use `nextToken` in the response to retrieve the next page. The returned credential content is masked. To query the details of a single credential, call [GetCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCredential).
     *
     * @param request - ListCredentialsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListCredentialsResponse
     */
    listCredentialsWithOptions(workspaceId: string, request: $_model.ListCredentialsRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListCredentialsResponse>;
    /**
     * Queries credentials in a specified workspace with paging. Filters credentials by type using credentialType, performs fuzzy matching on credential names using nameLike, specifies the maximum number of records per page using maxResults, and retrieves the next page using nextToken. If maxResults is not specified, the server returns 10 records by default.
     *
     * @remarks
     * Queries credentials in a specified workspace with paging.
     * ### Query and paging
     * Filter credentials by `apiKey` or `mcpHeader` type using `credentialType`, and perform fuzzy matching on names using `nameLike`.
     * Use `maxResults` to specify the number of records per page, and use `nextToken` in the response to retrieve the next page. The returned credential content is masked. To query the details of a single credential, call [GetCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCredential).
     *
     * @param request - ListCredentialsRequest
     * @returns ListCredentialsResponse
     */
    listCredentials(workspaceId: string, request: $_model.ListCredentialsRequest): Promise<$_model.ListCredentialsResponse>;
    /**
     * Performs a paging query for the identifiers, deployment methods, and status summaries of custom code or image agents in a workspace.
     *
     * @remarks
     * Performs a paging query for the identifiers, deployment methods, and status summaries of custom code or image agents in a workspace.
     * ### Paging query
     * If `maxResults` is omitted or set to `0`, the default value is 20, and the maximum value is 100. Omit `nextToken` in the first request. For subsequent requests, pass the token from the previous response as is, and keep the same workspace and filter conditions. An empty token indicates that paging is complete.
     * ### Response content
     * This operation returns the summary for the current page and does not return the complete deployment configurations or execution errors of the latest configurations. To query code packages, image sources, version execution results, and running instance statuses, use `items[].agentId` to call [GetCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCustomAgent).
     *
     * @param request - ListCustomAgentsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListCustomAgentsResponse
     */
    listCustomAgentsWithOptions(workspaceId: string, request: $_model.ListCustomAgentsRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomAgentsResponse>;
    /**
     * Performs a paging query for the identifiers, deployment methods, and status summaries of custom code or image agents in a workspace.
     *
     * @remarks
     * Performs a paging query for the identifiers, deployment methods, and status summaries of custom code or image agents in a workspace.
     * ### Paging query
     * If `maxResults` is omitted or set to `0`, the default value is 20, and the maximum value is 100. Omit `nextToken` in the first request. For subsequent requests, pass the token from the previous response as is, and keep the same workspace and filter conditions. An empty token indicates that paging is complete.
     * ### Response content
     * This operation returns the summary for the current page and does not return the complete deployment configurations or execution errors of the latest configurations. To query code packages, image sources, version execution results, and running instance statuses, use `items[].agentId` to call [GetCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCustomAgent).
     *
     * @param request - ListCustomAgentsRequest
     * @returns ListCustomAgentsResponse
     */
    listCustomAgents(workspaceId: string, request: $_model.ListCustomAgentsRequest): Promise<$_model.ListCustomAgentsResponse>;
    /**
     * Performs a paging query for the identity, configuration version, and status summary of managed agents in a workspace.
     *
     * @remarks
     * Performs a paging query for the identity, configuration version, and status summary of managed agents in a workspace.
     * ### Paging query
     * If `maxResults` is omitted or set to `0`, the default value is 20, and the maximum value is 100. Omit `nextToken` in the first request. For subsequent requests, pass the token returned in the previous response as is, and keep the same workspace and filter conditions. An empty token indicates that no more pages are available.
     * ### Response content
     * This operation returns the summary of managed agents. You can query the complete models, instructions, tools, skills, and accessed state by calling [GetExternalAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgent).
     *
     * @param request - ListExternalAgentsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListExternalAgentsResponse
     */
    listExternalAgentsWithOptions(workspaceId: string, request: $_model.ListExternalAgentsRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListExternalAgentsResponse>;
    /**
     * Performs a paging query for the identity, configuration version, and status summary of managed agents in a workspace.
     *
     * @remarks
     * Performs a paging query for the identity, configuration version, and status summary of managed agents in a workspace.
     * ### Paging query
     * If `maxResults` is omitted or set to `0`, the default value is 20, and the maximum value is 100. Omit `nextToken` in the first request. For subsequent requests, pass the token returned in the previous response as is, and keep the same workspace and filter conditions. An empty token indicates that no more pages are available.
     * ### Response content
     * This operation returns the summary of managed agents. You can query the complete models, instructions, tools, skills, and accessed state by calling [GetExternalAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgent).
     *
     * @param request - ListExternalAgentsRequest
     * @returns ListExternalAgentsResponse
     */
    listExternalAgents(workspaceId: string, request: $_model.ListExternalAgentsRequest): Promise<$_model.ListExternalAgentsResponse>;
    /**
     * Performs a paged query on the departments of an identity provider by using paging.
     *
     * @remarks
     * Performs a paged query on the list of DingTalk or Lark departments by parent department by using paging. This is used when selecting or adjusting the user synchronization scope.
     * ### Before you begin
     * The workspace is bound to a DingTalk or Lark identity provider, and the user pool, application credentials, and address book read authorization are ready.
     * ### Query methods
     * - Omit parentDepartmentId to query the root level. Pass a department ID to query its direct child departments.
     * - hasChildren indicates whether a department can be expanded. After expanding, use the department ID to query the next level.
     * - nextToken is used to continue reading the next page under the same parent department. An empty string indicates that there are no more pages.
     * ### Total count and pagination
     * This operation does not calculate the total number of departments. Currently, totalCount returns JSON null, which does not mean the number of departments is 0. Whether to continue pagination depends on nextToken.
     * ### Request example
     * ```http
     * GET /workspaces/{workspaceId}/identity-providers/{identityProviderType}/departments?maxResults=50
     * ```
     * ### Response example
     * The following shows the response structure for an empty directory page. totalCount retains the null value actually returned by the operation.
     * ```json
     * {
     *   "requestId": "01234567-89AB-CDEF-0123-456789ABCDEF",
     *   "message": "success",
     *   "httpStatusCode": 200,
     *   "code": "SUCCESS",
     *   "success": true,
     *   "maxResults": 50,
     *   "nextToken": "",
     *   "totalCount": null,
     *   "items": []
     * }
     * ```
     * ### What to do next
     * After selecting the departments to synchronize, save the synchronization scope by calling [UpdateIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProvider), and then call [CreateIdentityProviderSyncJob](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateIdentityProviderSyncJob) to initiate synchronization as needed.
     *
     * @param request - ListIdentityProviderDepartmentsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListIdentityProviderDepartmentsResponse
     */
    listIdentityProviderDepartmentsWithOptions(workspaceId: string, identityProviderType: string, request: $_model.ListIdentityProviderDepartmentsRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListIdentityProviderDepartmentsResponse>;
    /**
     * Performs a paged query on the departments of an identity provider by using paging.
     *
     * @remarks
     * Performs a paged query on the list of DingTalk or Lark departments by parent department by using paging. This is used when selecting or adjusting the user synchronization scope.
     * ### Before you begin
     * The workspace is bound to a DingTalk or Lark identity provider, and the user pool, application credentials, and address book read authorization are ready.
     * ### Query methods
     * - Omit parentDepartmentId to query the root level. Pass a department ID to query its direct child departments.
     * - hasChildren indicates whether a department can be expanded. After expanding, use the department ID to query the next level.
     * - nextToken is used to continue reading the next page under the same parent department. An empty string indicates that there are no more pages.
     * ### Total count and pagination
     * This operation does not calculate the total number of departments. Currently, totalCount returns JSON null, which does not mean the number of departments is 0. Whether to continue pagination depends on nextToken.
     * ### Request example
     * ```http
     * GET /workspaces/{workspaceId}/identity-providers/{identityProviderType}/departments?maxResults=50
     * ```
     * ### Response example
     * The following shows the response structure for an empty directory page. totalCount retains the null value actually returned by the operation.
     * ```json
     * {
     *   "requestId": "01234567-89AB-CDEF-0123-456789ABCDEF",
     *   "message": "success",
     *   "httpStatusCode": 200,
     *   "code": "SUCCESS",
     *   "success": true,
     *   "maxResults": 50,
     *   "nextToken": "",
     *   "totalCount": null,
     *   "items": []
     * }
     * ```
     * ### What to do next
     * After selecting the departments to synchronize, save the synchronization scope by calling [UpdateIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProvider), and then call [CreateIdentityProviderSyncJob](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateIdentityProviderSyncJob) to initiate synchronization as needed.
     *
     * @param request - ListIdentityProviderDepartmentsRequest
     * @returns ListIdentityProviderDepartmentsResponse
     */
    listIdentityProviderDepartments(workspaceId: string, identityProviderType: string, request: $_model.ListIdentityProviderDepartmentsRequest): Promise<$_model.ListIdentityProviderDepartmentsResponse>;
    /**
     * Queries the complete summary list of up to two SCIM credentials in a shared user pool. Plaintext tokens are not returned, and pagination is not supported.
     *
     * @remarks
     * Queries the list of SCIM access credentials to check which tokens are still valid, when they expire, and to select credentials for revocation.
     * SCIM tokens are used to authorize enterprise identity systems to send user provisioning requests to the user pool. This operation returns credential summaries, including the credential ID, status, creation time, and expiration time. Plaintext tokens are returned only upon creation.
     * ### How to use the query results
     * - Credentials with the `Enabled` status that have not expired can continue to be used.
     * - To obtain a new token, call [CreateIdentityProviderSCIMCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateIdentityProviderSCIMCredential).
     * - To revoke a token, pass the target `credentialId` to [DeleteIdentityProviderSCIMCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/DeleteIdentityProviderSCIMCredential).
     * A single user pool can retain up to two SCIM credentials. The list may include expired or disabled credentials. Clean up unused credentials before creating a new token.
     * ### Return method
     * This operation returns the complete array of credentials at once without using pagination parameters. If no credentials exist, the following response is returned:
     * ```json
     * {"data":[]}
     * ```
     *
     * @param request - ListIdentityProviderSCIMCredentialsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListIdentityProviderSCIMCredentialsResponse
     */
    listIdentityProviderSCIMCredentialsWithOptions(workspaceId: string, request: $_model.ListIdentityProviderSCIMCredentialsRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListIdentityProviderSCIMCredentialsResponse>;
    /**
     * Queries the complete summary list of up to two SCIM credentials in a shared user pool. Plaintext tokens are not returned, and pagination is not supported.
     *
     * @remarks
     * Queries the list of SCIM access credentials to check which tokens are still valid, when they expire, and to select credentials for revocation.
     * SCIM tokens are used to authorize enterprise identity systems to send user provisioning requests to the user pool. This operation returns credential summaries, including the credential ID, status, creation time, and expiration time. Plaintext tokens are returned only upon creation.
     * ### How to use the query results
     * - Credentials with the `Enabled` status that have not expired can continue to be used.
     * - To obtain a new token, call [CreateIdentityProviderSCIMCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateIdentityProviderSCIMCredential).
     * - To revoke a token, pass the target `credentialId` to [DeleteIdentityProviderSCIMCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/DeleteIdentityProviderSCIMCredential).
     * A single user pool can retain up to two SCIM credentials. The list may include expired or disabled credentials. Clean up unused credentials before creating a new token.
     * ### Return method
     * This operation returns the complete array of credentials at once without using pagination parameters. If no credentials exist, the following response is returned:
     * ```json
     * {"data":[]}
     * ```
     *
     * @param request - ListIdentityProviderSCIMCredentialsRequest
     * @returns ListIdentityProviderSCIMCredentialsResponse
     */
    listIdentityProviderSCIMCredentials(workspaceId: string, request: $_model.ListIdentityProviderSCIMCredentialsRequest): Promise<$_model.ListIdentityProviderSCIMCredentialsResponse>;
    /**
     * Queries the summary of existing identity provider bindings for a workspace, including CustomSSO. Returns local binding information without querying the actual upstream SAML or SCIM configurations.
     *
     * @remarks
     * Queries the enterprise identity providers currently connected to a workspace. You can use this operation to display the identity provider list or check whether a binding exists before configuring a connection.
     * A workspace can be bound to at most one external identity provider: DingTalk, Lark, or a custom identity provider (`CustomSSO`). If no identity provider is bound, the returned `items` array is empty.
     * ### What you can view in the list
     * The list returns the identity provider type, binding status, and the switches for logon and user synchronization. If the status of `CustomSSO` is `WAITING_CONFIGURATION`, it indicates that the user pool is ready and you can proceed to fill in the connection configuration.
     * This operation returns a binding summary. To view specific connection configurations, use the corresponding operations:
     * - [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider): Retrieves the identity provider details and SAML logon configuration.
     * - [GetIdentityProviderServiceProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderServiceProvider): Retrieves the SAML connection information required to configure AgentCore in the enterprise identity system.
     * - [GetIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderSCIM): Queries the SCIM receiver configuration and user synchronization status.
     * ### Pagination
     * Currently, at most one binding is returned. The `nextToken` parameter should be omitted or set to an empty string. The default value of `maxResults` is 10, and valid values are 1 to 100.
     *
     * @param request - ListIdentityProvidersRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListIdentityProvidersResponse
     */
    listIdentityProvidersWithOptions(workspaceId: string, request: $_model.ListIdentityProvidersRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListIdentityProvidersResponse>;
    /**
     * Queries the summary of existing identity provider bindings for a workspace, including CustomSSO. Returns local binding information without querying the actual upstream SAML or SCIM configurations.
     *
     * @remarks
     * Queries the enterprise identity providers currently connected to a workspace. You can use this operation to display the identity provider list or check whether a binding exists before configuring a connection.
     * A workspace can be bound to at most one external identity provider: DingTalk, Lark, or a custom identity provider (`CustomSSO`). If no identity provider is bound, the returned `items` array is empty.
     * ### What you can view in the list
     * The list returns the identity provider type, binding status, and the switches for logon and user synchronization. If the status of `CustomSSO` is `WAITING_CONFIGURATION`, it indicates that the user pool is ready and you can proceed to fill in the connection configuration.
     * This operation returns a binding summary. To view specific connection configurations, use the corresponding operations:
     * - [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider): Retrieves the identity provider details and SAML logon configuration.
     * - [GetIdentityProviderServiceProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderServiceProvider): Retrieves the SAML connection information required to configure AgentCore in the enterprise identity system.
     * - [GetIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderSCIM): Queries the SCIM receiver configuration and user synchronization status.
     * ### Pagination
     * Currently, at most one binding is returned. The `nextToken` parameter should be omitted or set to an empty string. The default value of `maxResults` is 10, and valid values are 1 to 100.
     *
     * @param request - ListIdentityProvidersRequest
     * @returns ListIdentityProvidersResponse
     */
    listIdentityProviders(workspaceId: string, request: $_model.ListIdentityProvidersRequest): Promise<$_model.ListIdentityProvidersResponse>;
    /**
     * Performs a paged query on image caches in a workspace, and supports paging and filtering by image source and cache status.
     *
     * @remarks
     * Performs a paged query on image caches in a workspace, and supports paging and filtering by image source and cache status.
     * ### Filter conditions
     * Provide regionId and workspaceId in the query parameters. You can filter by ACR instance, registry, namespace, repository, tag, digest, and status. Use imageRefContains to search for image address fragments.
     * ### Pagination rules
     * The default value of maxResults is 20. Valid values are 1 to 100. Omit nextToken for the first request. For subsequent requests, use the response token as is, and keep the workspace, region, page size, and all filter conditions unchanged. An empty token indicates that no more pages are available.
     * ### Response content
     * Each item includes the imageId, source, digest, status, size, reference count, and deletion conditions. PENDING only indicates that the cache is being prepared. For the cause of failure, see error. You can query a single cache by calling [GetImageCache](https://api.aliyun.com/document/AgentCore/2026-08-04/GetImageCache).
     *
     * @param request - ListImageCachesRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListImageCachesResponse
     */
    listImageCachesWithOptions(request: $_model.ListImageCachesRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListImageCachesResponse>;
    /**
     * Performs a paged query on image caches in a workspace, and supports paging and filtering by image source and cache status.
     *
     * @remarks
     * Performs a paged query on image caches in a workspace, and supports paging and filtering by image source and cache status.
     * ### Filter conditions
     * Provide regionId and workspaceId in the query parameters. You can filter by ACR instance, registry, namespace, repository, tag, digest, and status. Use imageRefContains to search for image address fragments.
     * ### Pagination rules
     * The default value of maxResults is 20. Valid values are 1 to 100. Omit nextToken for the first request. For subsequent requests, use the response token as is, and keep the workspace, region, page size, and all filter conditions unchanged. An empty token indicates that no more pages are available.
     * ### Response content
     * Each item includes the imageId, source, digest, status, size, reference count, and deletion conditions. PENDING only indicates that the cache is being prepared. For the cause of failure, see error. You can query a single cache by calling [GetImageCache](https://api.aliyun.com/document/AgentCore/2026-08-04/GetImageCache).
     *
     * @param request - ListImageCachesRequest
     * @returns ListImageCachesResponse
     */
    listImageCaches(request: $_model.ListImageCachesRequest): Promise<$_model.ListImageCachesResponse>;
    /**
     * Performs a paging query to retrieve the identity, harness, configuration version, and status summary of managed Harness agents in a workspace.
     *
     * @remarks
     * Performs a paging query to retrieve the identity, harness, configuration version, and status summary of managed Harness agents in a workspace.
     * ### Paging
     * If `maxResults` is omitted or set to `0`, the default value is 20, and the maximum value is 100. Omit `nextToken` in the first request. For subsequent requests, pass the token returned in the previous response as is, and keep the same workspace and filter conditions. An empty token indicates that there are no more pages.
     * ### Response content
     * The list returns summary information, where `harness.type` indicates the runtime framework. To query the complete configuration, skill targets and effective versions, and instance status statistics, call [GetManagedAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetManagedAgent).
     *
     * @param request - ListManagedAgentsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListManagedAgentsResponse
     */
    listManagedAgentsWithOptions(workspaceId: string, request: $_model.ListManagedAgentsRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListManagedAgentsResponse>;
    /**
     * Performs a paging query to retrieve the identity, harness, configuration version, and status summary of managed Harness agents in a workspace.
     *
     * @remarks
     * Performs a paging query to retrieve the identity, harness, configuration version, and status summary of managed Harness agents in a workspace.
     * ### Paging
     * If `maxResults` is omitted or set to `0`, the default value is 20, and the maximum value is 100. Omit `nextToken` in the first request. For subsequent requests, pass the token returned in the previous response as is, and keep the same workspace and filter conditions. An empty token indicates that there are no more pages.
     * ### Response content
     * The list returns summary information, where `harness.type` indicates the runtime framework. To query the complete configuration, skill targets and effective versions, and instance status statistics, call [GetManagedAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetManagedAgent).
     *
     * @param request - ListManagedAgentsRequest
     * @returns ListManagedAgentsResponse
     */
    listManagedAgents(workspaceId: string, request: $_model.ListManagedAgentsRequest): Promise<$_model.ListManagedAgentsResponse>;
    /**
     * Queries MCP marketplace templates.
     *
     * @remarks
     * Queries installable official MCP marketplace templates for selecting required tool services. Supports filtering by keyword, usage tag, and MCP type.
     *
     * @param request - ListMcpMarketItemsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListMcpMarketItemsResponse
     */
    listMcpMarketItemsWithOptions(workspaceId: string, request: $_model.ListMcpMarketItemsRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListMcpMarketItemsResponse>;
    /**
     * Queries MCP marketplace templates.
     *
     * @remarks
     * Queries installable official MCP marketplace templates for selecting required tool services. Supports filtering by keyword, usage tag, and MCP type.
     *
     * @param request - ListMcpMarketItemsRequest
     * @returns ListMcpMarketItemsResponse
     */
    listMcpMarketItems(workspaceId: string, request: $_model.ListMcpMarketItemsRequest): Promise<$_model.ListMcpMarketItemsResponse>;
    /**
     * Queries the list of tools exposed by a specified MCP service and their input and output schemas.
     *
     * @remarks
     * Queries the list of tools exposed by a specified MCP service and their input and output schemas.
     *
     * @param request - ListMcpToolsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListMcpToolsResponse
     */
    listMcpToolsWithOptions(workspaceId: string, mcpServerId: string, request: $_model.ListMcpToolsRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListMcpToolsResponse>;
    /**
     * Queries the list of tools exposed by a specified MCP service and their input and output schemas.
     *
     * @remarks
     * Queries the list of tools exposed by a specified MCP service and their input and output schemas.
     *
     * @param request - ListMcpToolsRequest
     * @returns ListMcpToolsResponse
     */
    listMcpTools(workspaceId: string, mcpServerId: string, request: $_model.ListMcpToolsRequest): Promise<$_model.ListMcpToolsResponse>;
    /**
     * Performs a paging query for the MCP services and their configurations and statuses in a specified workspace.
     *
     * @remarks
     * Performs a paging query for the MCP services and their configurations and statuses in a specified workspace.
     *
     * @param request - ListMcpsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListMcpsResponse
     */
    listMcpsWithOptions(workspaceId: string, request: $_model.ListMcpsRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListMcpsResponse>;
    /**
     * Performs a paging query for the MCP services and their configurations and statuses in a specified workspace.
     *
     * @remarks
     * Performs a paging query for the MCP services and their configurations and statuses in a specified workspace.
     *
     * @param request - ListMcpsRequest
     * @returns ListMcpsResponse
     */
    listMcps(workspaceId: string, request: $_model.ListMcpsRequest): Promise<$_model.ListMcpsResponse>;
    /**
     * Performs a paged query for long-term memory and supports independent paging and filtering by UserId, AgentId, and SessionId.
     *
     * @remarks
     * Performs a paged query for long-term memory and supports paging and filtering by `UserId`, `AgentId`, and `SessionId`.
     *
     * @param request - ListMemoriesRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListMemoriesResponse
     */
    listMemoriesWithOptions(workspaceId: string, memoryStoreName: string, request: $_model.ListMemoriesRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListMemoriesResponse>;
    /**
     * Performs a paged query for long-term memory and supports independent paging and filtering by UserId, AgentId, and SessionId.
     *
     * @remarks
     * Performs a paged query for long-term memory and supports paging and filtering by `UserId`, `AgentId`, and `SessionId`.
     *
     * @param request - ListMemoriesRequest
     * @returns ListMemoriesResponse
     */
    listMemories(workspaceId: string, memoryStoreName: string, request: $_model.ListMemoriesRequest): Promise<$_model.ListMemoriesResponse>;
    /**
     * Performs a paged query of raw messages by exact scope through paging. SessionId is required, and at least one of UserId or AgentId must be provided.
     *
     * @remarks
     * Performs a paged query of the raw messages of a specific session in the memory store through paging, allowing you to view the session content used to generate long-term memory. SessionId is required, and at least one of UserId or AgentId must be provided to identify the target session.
     *
     * @param request - ListMemorySessionMessagesRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListMemorySessionMessagesResponse
     */
    listMemorySessionMessagesWithOptions(workspaceId: string, memoryStoreName: string, request: $_model.ListMemorySessionMessagesRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListMemorySessionMessagesResponse>;
    /**
     * Performs a paged query of raw messages by exact scope through paging. SessionId is required, and at least one of UserId or AgentId must be provided.
     *
     * @remarks
     * Performs a paged query of the raw messages of a specific session in the memory store through paging, allowing you to view the session content used to generate long-term memory. SessionId is required, and at least one of UserId or AgentId must be provided to identify the target session.
     *
     * @param request - ListMemorySessionMessagesRequest
     * @returns ListMemorySessionMessagesResponse
     */
    listMemorySessionMessages(workspaceId: string, memoryStoreName: string, request: $_model.ListMemorySessionMessagesRequest): Promise<$_model.ListMemorySessionMessagesResponse>;
    /**
     * Performs a paging query for sessions in a MemoryStore. You can filter sessions independently by user ID and agent ID.
     *
     * @remarks
     * Performs a paging query for source sessions in a long-term memory store (MemoryStore). Supports filtering by `UserId` and `AgentId` respectively.
     *
     * @param request - ListMemorySessionsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListMemorySessionsResponse
     */
    listMemorySessionsWithOptions(workspaceId: string, memoryStoreName: string, request: $_model.ListMemorySessionsRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListMemorySessionsResponse>;
    /**
     * Performs a paging query for sessions in a MemoryStore. You can filter sessions independently by user ID and agent ID.
     *
     * @remarks
     * Performs a paging query for source sessions in a long-term memory store (MemoryStore). Supports filtering by `UserId` and `AgentId` respectively.
     *
     * @param request - ListMemorySessionsRequest
     * @returns ListMemorySessionsResponse
     */
    listMemorySessions(workspaceId: string, memoryStoreName: string, request: $_model.ListMemorySessionsRequest): Promise<$_model.ListMemorySessionsResponse>;
    /**
     * Queries MemoryStores in a specified workspace by using paging.
     *
     * @remarks
     * Queries long-term memory stores (MemoryStores) in a workspace by using paging to select or manage memory stores.
     *
     * @param request - ListMemoryStoresRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListMemoryStoresResponse
     */
    listMemoryStoresWithOptions(workspaceId: string, request: $_model.ListMemoryStoresRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListMemoryStoresResponse>;
    /**
     * Queries MemoryStores in a specified workspace by using paging.
     *
     * @remarks
     * Queries long-term memory stores (MemoryStores) in a workspace by using paging to select or manage memory stores.
     *
     * @param request - ListMemoryStoresRequest
     * @returns ListMemoryStoresResponse
     */
    listMemoryStores(workspaceId: string, request: $_model.ListMemoryStoresRequest): Promise<$_model.ListMemoryStoresResponse>;
    /**
     * Queries model connections in a specified workspace by using paging, and supports filtering by name, provider type, and invocation protocol.
     *
     * @remarks
     * Queries model connections in a workspace by using paging to view configured model services.
     * - Use `Name` to filter by name and `SearchType` to specify exact match or fuzzy match.
     * - You can filter by model provider type and invocation protocol.
     *
     * @param request - ListModelConnectionsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListModelConnectionsResponse
     */
    listModelConnectionsWithOptions(workspaceId: string, request: $_model.ListModelConnectionsRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListModelConnectionsResponse>;
    /**
     * Queries model connections in a specified workspace by using paging, and supports filtering by name, provider type, and invocation protocol.
     *
     * @remarks
     * Queries model connections in a workspace by using paging to view configured model services.
     * - Use `Name` to filter by name and `SearchType` to specify exact match or fuzzy match.
     * - You can filter by model provider type and invocation protocol.
     *
     * @param request - ListModelConnectionsRequest
     * @returns ListModelConnectionsResponse
     */
    listModelConnections(workspaceId: string, request: $_model.ListModelConnectionsRequest): Promise<$_model.ListModelConnectionsResponse>;
    /**
     * Performs a paging query for models in a specified workspace and supports filtering by model connection and model name.
     *
     * @remarks
     * Performs a paging query for models in a specified workspace and supports filtering by model connection and model name.
     *
     * @param request - ListModelsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListModelsResponse
     */
    listModelsWithOptions(workspaceId: string, request: $_model.ListModelsRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListModelsResponse>;
    /**
     * Performs a paging query for models in a specified workspace and supports filtering by model connection and model name.
     *
     * @remarks
     * Performs a paging query for models in a specified workspace and supports filtering by model connection and model name.
     *
     * @param request - ListModelsRequest
     * @returns ListModelsResponse
     */
    listModels(workspaceId: string, request: $_model.ListModelsRequest): Promise<$_model.ListModelsResponse>;
    /**
     * Queries permission rules.
     *
     * @remarks
     * Performs a paged query of access rules by resource, using paging to check existing rules and their sources.
     *
     * @param request - ListPermissionRulesRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListPermissionRulesResponse
     */
    listPermissionRulesWithOptions(workspaceId: string, request: $_model.ListPermissionRulesRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListPermissionRulesResponse>;
    /**
     * Queries permission rules.
     *
     * @remarks
     * Performs a paged query of access rules by resource, using paging to check existing rules and their sources.
     *
     * @param request - ListPermissionRulesRequest
     * @returns ListPermissionRulesResponse
     */
    listPermissionRules(workspaceId: string, request: $_model.ListPermissionRulesRequest): Promise<$_model.ListPermissionRulesResponse>;
    /**
     * Queries the providers supported by the AgentCore built-in model catalog and their default service configurations.
     *
     * @remarks
     * Queries the providers supported by the AgentCore built-in model catalog and their default service configurations.
     *
     * @param request - ListPredefinedModelProvidersRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListPredefinedModelProvidersResponse
     */
    listPredefinedModelProvidersWithOptions(request: $_model.ListPredefinedModelProvidersRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListPredefinedModelProvidersResponse>;
    /**
     * Queries the providers supported by the AgentCore built-in model catalog and their default service configurations.
     *
     * @remarks
     * Queries the providers supported by the AgentCore built-in model catalog and their default service configurations.
     *
     * @param request - ListPredefinedModelProvidersRequest
     * @returns ListPredefinedModelProvidersResponse
     */
    listPredefinedModelProviders(request: $_model.ListPredefinedModelProvidersRequest): Promise<$_model.ListPredefinedModelProvidersResponse>;
    /**
     * Queries the models and their capabilities in the built-in model catalog of AgentCore for a specified provider.
     *
     * @remarks
     * Queries the models and their capabilities in the built-in model catalog of AgentCore for a specified provider.
     *
     * @param request - ListPredefinedModelsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListPredefinedModelsResponse
     */
    listPredefinedModelsWithOptions(providerType: string, request: $_model.ListPredefinedModelsRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListPredefinedModelsResponse>;
    /**
     * Queries the models and their capabilities in the built-in model catalog of AgentCore for a specified provider.
     *
     * @remarks
     * Queries the models and their capabilities in the built-in model catalog of AgentCore for a specified provider.
     *
     * @param request - ListPredefinedModelsRequest
     * @returns ListPredefinedModelsResponse
     */
    listPredefinedModels(providerType: string, request: $_model.ListPredefinedModelsRequest): Promise<$_model.ListPredefinedModelsResponse>;
    /**
     * Performs a paging query to retrieve the current active sessions and their sources in a specified agent instance.
     *
     * @remarks
     * Queries the active sessions in a specified running instance to view the current mapping between sessions and instances.
     * ### Query scope
     * Locates the instance by using `workspaceId`, `agentId`, and `sandboxId`. You can obtain the `sandboxId` from [ListSandboxes](https://api.aliyun.com/document/AgentCore/2026-08-04/ListSandboxes). This operation queries the current active sessions.
     * ### Pagination
     * The default value of `maxResults` is 20. Valid values: 1 to 100. Omit `nextToken` in the first request. For subsequent requests, use the returned token as is, and keep the workspace, agent, instance, and page size unchanged. An empty token indicates that no more pages are available.
     * ### Session sources
     * The source can be `API`, `CONSOLE_DEBUG`, `EXTERNAL_CHANNEL`, or `UNKNOWN`. For external channels, the channel type is additionally returned. If no source information is provided, `UNKNOWN` is returned.
     *
     * @param request - ListSandboxSessionsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListSandboxSessionsResponse
     */
    listSandboxSessionsWithOptions(workspaceId: string, agentId: string, sandboxId: string, request: $_model.ListSandboxSessionsRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListSandboxSessionsResponse>;
    /**
     * Performs a paging query to retrieve the current active sessions and their sources in a specified agent instance.
     *
     * @remarks
     * Queries the active sessions in a specified running instance to view the current mapping between sessions and instances.
     * ### Query scope
     * Locates the instance by using `workspaceId`, `agentId`, and `sandboxId`. You can obtain the `sandboxId` from [ListSandboxes](https://api.aliyun.com/document/AgentCore/2026-08-04/ListSandboxes). This operation queries the current active sessions.
     * ### Pagination
     * The default value of `maxResults` is 20. Valid values: 1 to 100. Omit `nextToken` in the first request. For subsequent requests, use the returned token as is, and keep the workspace, agent, instance, and page size unchanged. An empty token indicates that no more pages are available.
     * ### Session sources
     * The source can be `API`, `CONSOLE_DEBUG`, `EXTERNAL_CHANNEL`, or `UNKNOWN`. For external channels, the channel type is additionally returned. If no source information is provided, `UNKNOWN` is returned.
     *
     * @param request - ListSandboxSessionsRequest
     * @returns ListSandboxSessionsResponse
     */
    listSandboxSessions(workspaceId: string, agentId: string, sandboxId: string, request: $_model.ListSandboxSessionsRequest): Promise<$_model.ListSandboxSessionsResponse>;
    /**
     * Performs a paging query on the running instances of an agent and supports filtering by sandbox ID and current valid session ID fragments.
     *
     * @remarks
     * Queries the running instances (sandboxes) of an agent to view the instance distribution and current running status.
     * ### Filter instances
     * `searchText` matches sandbox ID fragments, and `sessionId` matches current valid session ID fragments. Both are case-insensitive. If both are submitted, they are combined for filtering.
     * ### Pagination and status
     * The default value of `maxResults` is 20, and the valid values are 1 to 100. Omit `nextToken` for the first request. For subsequent requests, use the response token as is, and keep `workspaceId`, `agentId`, filter conditions, and `maxResults` unchanged. An empty token indicates that the query is complete.
     * `phase` indicates the instance phase, `activeSessionCount` indicates the number of current active sessions, and `maxConcurrentSessions` indicates the configured concurrency limit for a single instance. You can query the active sessions of an instance by calling [ListSandboxSessions](https://api.aliyun.com/document/AgentCore/2026-08-04/ListSandboxSessions).
     *
     * @param request - ListSandboxesRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListSandboxesResponse
     */
    listSandboxesWithOptions(workspaceId: string, agentId: string, request: $_model.ListSandboxesRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListSandboxesResponse>;
    /**
     * Performs a paging query on the running instances of an agent and supports filtering by sandbox ID and current valid session ID fragments.
     *
     * @remarks
     * Queries the running instances (sandboxes) of an agent to view the instance distribution and current running status.
     * ### Filter instances
     * `searchText` matches sandbox ID fragments, and `sessionId` matches current valid session ID fragments. Both are case-insensitive. If both are submitted, they are combined for filtering.
     * ### Pagination and status
     * The default value of `maxResults` is 20, and the valid values are 1 to 100. Omit `nextToken` for the first request. For subsequent requests, use the response token as is, and keep `workspaceId`, `agentId`, filter conditions, and `maxResults` unchanged. An empty token indicates that the query is complete.
     * `phase` indicates the instance phase, `activeSessionCount` indicates the number of current active sessions, and `maxConcurrentSessions` indicates the configured concurrency limit for a single instance. You can query the active sessions of an instance by calling [ListSandboxSessions](https://api.aliyun.com/document/AgentCore/2026-08-04/ListSandboxSessions).
     *
     * @param request - ListSandboxesRequest
     * @returns ListSandboxesResponse
     */
    listSandboxes(workspaceId: string, agentId: string, request: $_model.ListSandboxesRequest): Promise<$_model.ListSandboxesResponse>;
    /**
     * Performs a paging query of service endpoints in a specified workspace and supports filtering by target type, agent, collaboration component, and status.
     *
     * @remarks
     * Performs a paging query of service endpoints in a workspace to find the access endpoints of agents or collaboration components.
     * - Use targetType, agentId, agentVersion, resourceBindingId, collaborationComponent, and status to filter the results.
     * - Use maxResults to set the page size. If this parameter is not specified, the default value is 20.
     * - Use the returned nextToken to query the next page.
     *
     * @param request - ListServiceEndpointsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListServiceEndpointsResponse
     */
    listServiceEndpointsWithOptions(workspaceId: string, request: $_model.ListServiceEndpointsRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceEndpointsResponse>;
    /**
     * Performs a paging query of service endpoints in a specified workspace and supports filtering by target type, agent, collaboration component, and status.
     *
     * @remarks
     * Performs a paging query of service endpoints in a workspace to find the access endpoints of agents or collaboration components.
     * - Use targetType, agentId, agentVersion, resourceBindingId, collaborationComponent, and status to filter the results.
     * - Use maxResults to set the page size. If this parameter is not specified, the default value is 20.
     * - Use the returned nextToken to query the next page.
     *
     * @param request - ListServiceEndpointsRequest
     * @returns ListServiceEndpointsResponse
     */
    listServiceEndpoints(workspaceId: string, request: $_model.ListServiceEndpointsRequest): Promise<$_model.ListServiceEndpointsResponse>;
    /**
     * Queries the reference relationships of a skill.
     *
     * @remarks
     * Queries the reference relationships of a specified skill to verify its usage before modifying or cleaning up skill assets.
     *
     * @param request - ListSkillReferencesRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListSkillReferencesResponse
     */
    listSkillReferencesWithOptions(workspaceId: string, skillName: string, request: $_model.ListSkillReferencesRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListSkillReferencesResponse>;
    /**
     * Queries the reference relationships of a skill.
     *
     * @remarks
     * Queries the reference relationships of a specified skill to verify its usage before modifying or cleaning up skill assets.
     *
     * @param request - ListSkillReferencesRequest
     * @returns ListSkillReferencesResponse
     */
    listSkillReferences(workspaceId: string, skillName: string, request: $_model.ListSkillReferencesRequest): Promise<$_model.ListSkillReferencesResponse>;
    /**
     * Performs a paged query for skills in a specified workspace and returns the basic information, version status, and paging information of the skills.
     *
     * @remarks
     * Performs a paged query for skills in a specified workspace and returns the basic information, version status, and paging information of the skills.
     *
     * @param request - ListSkillsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListSkillsResponse
     */
    listSkillsWithOptions(workspaceId: string, request: $_model.ListSkillsRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListSkillsResponse>;
    /**
     * Performs a paged query for skills in a specified workspace and returns the basic information, version status, and paging information of the skills.
     *
     * @remarks
     * Performs a paged query for skills in a specified workspace and returns the basic information, version status, and paging information of the skills.
     *
     * @param request - ListSkillsRequest
     * @returns ListSkillsResponse
     */
    listSkills(workspaceId: string, request: $_model.ListSkillsRequest): Promise<$_model.ListSkillsResponse>;
    /**
     * Queries teams in a specified workspace with paging. You can use nameLike to filter teams by fuzzy match on the team name, maxResults to specify the maximum number of records per page, and nextToken to obtain the next page. If maxResults is not specified, the server returns 10 records by default. The member information in the list includes only the member identifier, name, and team role.
     *
     * @remarks
     * Queries teams in a specified workspace with paging.
     *
     * @param request - ListTeamsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListTeamsResponse
     */
    listTeamsWithOptions(workspaceId: string, request: $_model.ListTeamsRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListTeamsResponse>;
    /**
     * Queries teams in a specified workspace with paging. You can use nameLike to filter teams by fuzzy match on the team name, maxResults to specify the maximum number of records per page, and nextToken to obtain the next page. If maxResults is not specified, the server returns 10 records by default. The member information in the list includes only the member identifier, name, and team role.
     *
     * @remarks
     * Queries teams in a specified workspace with paging.
     *
     * @param request - ListTeamsRequest
     * @returns ListTeamsResponse
     */
    listTeams(workspaceId: string, request: $_model.ListTeamsRequest): Promise<$_model.ListTeamsResponse>;
    /**
     * Performs a paged query for users in a specified workspace. You can use nameLike to filter users by fuzzy match on the username, maxResults to specify the maximum number of records per page, and nextToken to retrieve the next page during paging. If maxResults is not specified, the server returns 10 records by default.
     *
     * @remarks
     * Queries the application user directory in a workspace for viewing users and selecting team members.
     *
     * @param request - ListUsersRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListUsersResponse
     */
    listUsersWithOptions(workspaceId: string, request: $_model.ListUsersRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersResponse>;
    /**
     * Performs a paged query for users in a specified workspace. You can use nameLike to filter users by fuzzy match on the username, maxResults to specify the maximum number of records per page, and nextToken to retrieve the next page during paging. If maxResults is not specified, the server returns 10 records by default.
     *
     * @remarks
     * Queries the application user directory in a workspace for viewing users and selecting team members.
     *
     * @param request - ListUsersRequest
     * @returns ListUsersResponse
     */
    listUsers(workspaceId: string, request: $_model.ListUsersRequest): Promise<$_model.ListUsersResponse>;
    /**
     * Performs a paged query of workspaces under the current tenant. By default, the list does not return soft-deleted records with the Deleted status, and the server performs stable sorting of the results by creation order during paging.
     *
     * @remarks
     * Performs a paged query of workspaces accessible to the current account for selecting a workspace or viewing a workspace overview.
     * - Use `nameLike` for fuzzy filtering by name.
     * - Use `maxResults` to configure the Settings for the number of entries per page. If this parameter is omitted or set to `0`, the default value is 20.
     * - Use `nextToken` to query the next page during paging, or use `skip` to skip a specified number of workspaces.
     * The list is arranged by creation order. By default, deleted workspaces with the `Deleted` status are not returned.
     *
     * @param request - ListWorkspacesRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListWorkspacesResponse
     */
    listWorkspacesWithOptions(request: $_model.ListWorkspacesRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkspacesResponse>;
    /**
     * Performs a paged query of workspaces under the current tenant. By default, the list does not return soft-deleted records with the Deleted status, and the server performs stable sorting of the results by creation order during paging.
     *
     * @remarks
     * Performs a paged query of workspaces accessible to the current account for selecting a workspace or viewing a workspace overview.
     * - Use `nameLike` for fuzzy filtering by name.
     * - Use `maxResults` to configure the Settings for the number of entries per page. If this parameter is omitted or set to `0`, the default value is 20.
     * - Use `nextToken` to query the next page during paging, or use `skip` to skip a specified number of workspaces.
     * The list is arranged by creation order. By default, deleted workspaces with the `Deleted` status are not returned.
     *
     * @param request - ListWorkspacesRequest
     * @returns ListWorkspacesResponse
     */
    listWorkspaces(request: $_model.ListWorkspacesRequest): Promise<$_model.ListWorkspacesResponse>;
    /**
     * Takes the online version of a specified skill offline so that it is no longer used as the online version.
     *
     * @remarks
     * Takes the online version of a specified skill offline so that it is no longer used as the online version.
     *
     * @param tmpReq - OfflineSkillRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns OfflineSkillResponse
     */
    offlineSkillWithOptions(workspaceId: string, skillName: string, tmpReq: $_model.OfflineSkillRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.OfflineSkillResponse>;
    /**
     * Takes the online version of a specified skill offline so that it is no longer used as the online version.
     *
     * @remarks
     * Takes the online version of a specified skill offline so that it is no longer used as the online version.
     *
     * @param request - OfflineSkillRequest
     * @returns OfflineSkillResponse
     */
    offlineSkill(workspaceId: string, skillName: string, request: $_model.OfflineSkillRequest): Promise<$_model.OfflineSkillResponse>;
    /**
     * Sets the specified skill version as the online version.
     *
     * @remarks
     * Sets the specified skill version as the online version.
     *
     * @param tmpReq - OnlineSkillRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns OnlineSkillResponse
     */
    onlineSkillWithOptions(workspaceId: string, skillName: string, tmpReq: $_model.OnlineSkillRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.OnlineSkillResponse>;
    /**
     * Sets the specified skill version as the online version.
     *
     * @remarks
     * Sets the specified skill version as the online version.
     *
     * @param request - OnlineSkillRequest
     * @returns OnlineSkillResponse
     */
    onlineSkill(workspaceId: string, skillName: string, request: $_model.OnlineSkillRequest): Promise<$_model.OnlineSkillResponse>;
    /**
     * Parses and checks one or more skill ZIP packages uploaded to OSS, and returns the names, versions, and conflict check results.
     *
     * @remarks
     * Checks one or more skill ZIP packages uploaded to OSS for skill names, versions, and import conflicts.
     * After the check passes, call [UploadSkillViaOss](https://api.aliyun.com/document/AgentCore/2026-08-04/UploadSkillViaOss) or [BatchUploadSkillsViaOss](https://api.aliyun.com/document/AgentCore/2026-08-04/BatchUploadSkillsViaOss) to import the skills into the workspace.
     *
     * @param tmpReq - PrecheckSkillUploadViaOssRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns PrecheckSkillUploadViaOssResponse
     */
    precheckSkillUploadViaOssWithOptions(workspaceId: string, tmpReq: $_model.PrecheckSkillUploadViaOssRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.PrecheckSkillUploadViaOssResponse>;
    /**
     * Parses and checks one or more skill ZIP packages uploaded to OSS, and returns the names, versions, and conflict check results.
     *
     * @remarks
     * Checks one or more skill ZIP packages uploaded to OSS for skill names, versions, and import conflicts.
     * After the check passes, call [UploadSkillViaOss](https://api.aliyun.com/document/AgentCore/2026-08-04/UploadSkillViaOss) or [BatchUploadSkillsViaOss](https://api.aliyun.com/document/AgentCore/2026-08-04/BatchUploadSkillsViaOss) to import the skills into the workspace.
     *
     * @param request - PrecheckSkillUploadViaOssRequest
     * @returns PrecheckSkillUploadViaOssResponse
     */
    precheckSkillUploadViaOss(workspaceId: string, request: $_model.PrecheckSkillUploadViaOssRequest): Promise<$_model.PrecheckSkillUploadViaOssResponse>;
    /**
     * Prepares the SCIM receiving configuration and returns the provisioning URL and credential summary. Issues a token if no available credentials exist and returns the plaintext only in the current response without automatically enabling user synchronization in AgentCore.
     *
     * @remarks
     * Prepares the receiving endpoint and access token for integrating SCIM user synchronization with an enterprise identity system. The enterprise identity system uses this information to provision users to the shared user pool of AgentCore.
     * SCIM is a user provisioning protocol. The enterprise identity system first sends users to the receiving endpoint, and then AgentCore synchronizes the users from the user pool to the workspace.
     * ### Before you begin
     * A `CustomSSO` binding has been created by calling [CreateIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateIdentityProvider), and the shared user pool is ready. SCIM integration can be performed independently of SAML logon configuration.
     * ### What this operation prepares
     * This operation enables the SCIM receiving endpoint and returns the receiving URL and credential summary:
     * | Current credential status | Return result |
     * | --- | --- |
     * | An unexpired credential with the status of `Enabled` already exists | Reuses the existing credential. The `token` field returns an empty string `""`. Use the previously saved token. |
     * | No available credentials exist | Creates a new credential. The `token` field returns the plaintext of the new token, which is returned only in the current response. |
     * The plaintext of an existing token cannot be queried again. If the token is lost, you can create a new token by calling [CreateIdentityProviderSCIMCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateIdentityProviderSCIMCredential). A single user pool can retain a maximum of two credentials. When the limit is reached, you must delete unused credentials first.
     * ### What to do next
     * **Step 1:** Configure the returned receiving URL and valid token in the SCIM user provisioning settings of the enterprise identity system.
     * **Step 2:** Complete the connection test and user assignment in the enterprise identity system.
     * **Step 3:** Enable AgentCore user synchronization by calling [UpdateIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProviderSCIM), and then query the synchronization results by calling [GetIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderSCIM).
     *
     * @param request - PrepareIdentityProviderSCIMRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns PrepareIdentityProviderSCIMResponse
     */
    prepareIdentityProviderSCIMWithOptions(workspaceId: string, request: $_model.PrepareIdentityProviderSCIMRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.PrepareIdentityProviderSCIMResponse>;
    /**
     * Prepares the SCIM receiving configuration and returns the provisioning URL and credential summary. Issues a token if no available credentials exist and returns the plaintext only in the current response without automatically enabling user synchronization in AgentCore.
     *
     * @remarks
     * Prepares the receiving endpoint and access token for integrating SCIM user synchronization with an enterprise identity system. The enterprise identity system uses this information to provision users to the shared user pool of AgentCore.
     * SCIM is a user provisioning protocol. The enterprise identity system first sends users to the receiving endpoint, and then AgentCore synchronizes the users from the user pool to the workspace.
     * ### Before you begin
     * A `CustomSSO` binding has been created by calling [CreateIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateIdentityProvider), and the shared user pool is ready. SCIM integration can be performed independently of SAML logon configuration.
     * ### What this operation prepares
     * This operation enables the SCIM receiving endpoint and returns the receiving URL and credential summary:
     * | Current credential status | Return result |
     * | --- | --- |
     * | An unexpired credential with the status of `Enabled` already exists | Reuses the existing credential. The `token` field returns an empty string `""`. Use the previously saved token. |
     * | No available credentials exist | Creates a new credential. The `token` field returns the plaintext of the new token, which is returned only in the current response. |
     * The plaintext of an existing token cannot be queried again. If the token is lost, you can create a new token by calling [CreateIdentityProviderSCIMCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateIdentityProviderSCIMCredential). A single user pool can retain a maximum of two credentials. When the limit is reached, you must delete unused credentials first.
     * ### What to do next
     * **Step 1:** Configure the returned receiving URL and valid token in the SCIM user provisioning settings of the enterprise identity system.
     * **Step 2:** Complete the connection test and user assignment in the enterprise identity system.
     * **Step 3:** Enable AgentCore user synchronization by calling [UpdateIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProviderSCIM), and then query the synchronization results by calling [GetIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderSCIM).
     *
     * @param request - PrepareIdentityProviderSCIMRequest
     * @returns PrepareIdentityProviderSCIMResponse
     */
    prepareIdentityProviderSCIM(workspaceId: string, request: $_model.PrepareIdentityProviderSCIMRequest): Promise<$_model.PrepareIdentityProviderSCIMResponse>;
    /**
     * Publishes a specified skill version and sets its status to published.
     *
     * @remarks
     * Publishes a specified skill version and sets its status to published.
     *
     * @param tmpReq - PublishSkillVersionRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns PublishSkillVersionResponse
     */
    publishSkillVersionWithOptions(workspaceId: string, skillName: string, skillVersion: string, tmpReq: $_model.PublishSkillVersionRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.PublishSkillVersionResponse>;
    /**
     * Publishes a specified skill version and sets its status to published.
     *
     * @remarks
     * Publishes a specified skill version and sets its status to published.
     *
     * @param request - PublishSkillVersionRequest
     * @returns PublishSkillVersionResponse
     */
    publishSkillVersion(workspaceId: string, skillName: string, skillVersion: string, request: $_model.PublishSkillVersionRequest): Promise<$_model.PublishSkillVersionResponse>;
    /**
     * Submits a request to rebuild a single sandbox image for a specified managed agent. Existing sessions may be interrupted. An HTTP 200 response only indicates that the request is accepted. Use the returned operationId to call GetSandboxRebuildOperation to query the overall result. Only a SUCCEEDED status indicates that the rebuild is complete. Do not automatically resubmit the rebuild request if the query times out, returns UNKNOWN, or the result is unclear.
     *
     * @remarks
     * Submits a request to rebuild a single sandbox image for a specified managed agent. Existing sessions may be interrupted. An HTTP 200 response only indicates that the request is successfully submitted and accepted. You must use the returned operationId to call GetSandboxRebuildOperation. Only an overall SUCCEEDED status indicates completion. Do not automatically resubmit the request if the query times out, returns UNKNOWN, or the result is unclear. You can specify the endpoint runtime version by using serviceEndpointId. If this parameter is omitted, the default latest runtime identity is used.
     *
     * @param request - RebuildSandboxRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RebuildSandboxResponse
     */
    rebuildSandboxWithOptions(workspaceId: string, agentId: string, sandboxId: string, request: $_model.RebuildSandboxRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.RebuildSandboxResponse>;
    /**
     * Submits a request to rebuild a single sandbox image for a specified managed agent. Existing sessions may be interrupted. An HTTP 200 response only indicates that the request is accepted. Use the returned operationId to call GetSandboxRebuildOperation to query the overall result. Only a SUCCEEDED status indicates that the rebuild is complete. Do not automatically resubmit the rebuild request if the query times out, returns UNKNOWN, or the result is unclear.
     *
     * @remarks
     * Submits a request to rebuild a single sandbox image for a specified managed agent. Existing sessions may be interrupted. An HTTP 200 response only indicates that the request is successfully submitted and accepted. You must use the returned operationId to call GetSandboxRebuildOperation. Only an overall SUCCEEDED status indicates completion. Do not automatically resubmit the request if the query times out, returns UNKNOWN, or the result is unclear. You can specify the endpoint runtime version by using serviceEndpointId. If this parameter is omitted, the default latest runtime identity is used.
     *
     * @param request - RebuildSandboxRequest
     * @returns RebuildSandboxResponse
     */
    rebuildSandbox(workspaceId: string, agentId: string, sandboxId: string, request: $_model.RebuildSandboxRequest): Promise<$_model.RebuildSandboxResponse>;
    /**
     * Reverts a specified skill version to an editable draft for further modification.
     *
     * @remarks
     * Reverts a specified skill version to an editable draft for further modification.
     *
     * @param tmpReq - RedraftSkillVersionRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RedraftSkillVersionResponse
     */
    redraftSkillVersionWithOptions(workspaceId: string, skillName: string, skillVersion: string, tmpReq: $_model.RedraftSkillVersionRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.RedraftSkillVersionResponse>;
    /**
     * Reverts a specified skill version to an editable draft for further modification.
     *
     * @remarks
     * Reverts a specified skill version to an editable draft for further modification.
     *
     * @param request - RedraftSkillVersionRequest
     * @returns RedraftSkillVersionResponse
     */
    redraftSkillVersion(workspaceId: string, skillName: string, skillVersion: string, request: $_model.RedraftSkillVersionRequest): Promise<$_model.RedraftSkillVersionResponse>;
    /**
     * Resets the logon password of a specified user. Specify the user by using agentCoreUserId or username. At least one of the two parameters is required. This operation only supports users who use local password authentication in the workspace. If the password parameter is not specified, the server generates a random password and returns it in the response.
     *
     * @remarks
     * Resets the logon password of a specified user.
     *
     * @param tmpReq - ResetUserPasswordRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ResetUserPasswordResponse
     */
    resetUserPasswordWithOptions(workspaceId: string, tmpReq: $_model.ResetUserPasswordRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ResetUserPasswordResponse>;
    /**
     * Resets the logon password of a specified user. Specify the user by using agentCoreUserId or username. At least one of the two parameters is required. This operation only supports users who use local password authentication in the workspace. If the password parameter is not specified, the server generates a random password and returns it in the response.
     *
     * @remarks
     * Resets the logon password of a specified user.
     *
     * @param request - ResetUserPasswordRequest
     * @returns ResetUserPasswordResponse
     */
    resetUserPassword(workspaceId: string, request: $_model.ResetUserPasswordRequest): Promise<$_model.ResetUserPasswordResponse>;
    /**
     * Resubmits the creation request for an ACR image cache in a specified workspace.
     *
     * @remarks
     * Resubmits the creation request for an existing image cache to recreate a cache that has not been successfully created.
     * ### Scope
     * Pass `regionId`, `workspaceId`, and `clientToken` as query parameters, and use `imageId` to locate the cache. This operation is intended for ACR-sourced caches and re-verifies the source repository authorization before submission.
     * ### Query retry results
     * A successful response indicates that a retry acceptance snapshot is returned, but it does not mean that the creation is complete. Query the status by calling [GetImageCache](https://api.aliyun.com/document/AgentCore/2026-08-04/GetImageCache). `READY` indicates that the cache is ready. If the status is `FAILED`, check the `error` field.
     * Currently, `clientToken` is only verified to be non-empty and does not guarantee deduplication or recovery of the original acceptance result based on this token.
     *
     * @param tmpReq - RetryImageCacheRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RetryImageCacheResponse
     */
    retryImageCacheWithOptions(imageId: string, tmpReq: $_model.RetryImageCacheRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.RetryImageCacheResponse>;
    /**
     * Resubmits the creation request for an ACR image cache in a specified workspace.
     *
     * @remarks
     * Resubmits the creation request for an existing image cache to recreate a cache that has not been successfully created.
     * ### Scope
     * Pass `regionId`, `workspaceId`, and `clientToken` as query parameters, and use `imageId` to locate the cache. This operation is intended for ACR-sourced caches and re-verifies the source repository authorization before submission.
     * ### Query retry results
     * A successful response indicates that a retry acceptance snapshot is returned, but it does not mean that the creation is complete. Query the status by calling [GetImageCache](https://api.aliyun.com/document/AgentCore/2026-08-04/GetImageCache). `READY` indicates that the cache is ready. If the status is `FAILED`, check the `error` field.
     * Currently, `clientToken` is only verified to be non-empty and does not guarantee deduplication or recovery of the original acceptance result based on this token.
     *
     * @param request - RetryImageCacheRequest
     * @returns RetryImageCacheResponse
     */
    retryImageCache(imageId: string, request: $_model.RetryImageCacheRequest): Promise<$_model.RetryImageCacheResponse>;
    /**
     * Retrieves long-term memory from a MemoryStore based on semantics.
     *
     * @remarks
     * Retrieves relevant memories from a long-term memory store (MemoryStore) based on semantic search, allowing agents to obtain information required for subsequent tasks.
     *
     * @param tmpReq - SearchMemoriesRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SearchMemoriesResponse
     */
    searchMemoriesWithOptions(workspaceId: string, memoryStoreName: string, tmpReq: $_model.SearchMemoriesRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.SearchMemoriesResponse>;
    /**
     * Retrieves long-term memory from a MemoryStore based on semantics.
     *
     * @remarks
     * Retrieves relevant memories from a long-term memory store (MemoryStore) based on semantic search, allowing agents to obtain information required for subsequent tasks.
     *
     * @param request - SearchMemoriesRequest
     * @returns SearchMemoriesResponse
     */
    searchMemories(workspaceId: string, memoryStoreName: string, request: $_model.SearchMemoriesRequest): Promise<$_model.SearchMemoriesResponse>;
    /**
     * Submits a specified draft version of an AgentSpec for review. If no release pipeline is configured, the version is directly published online.
     *
     * @remarks
     * Submits a specified draft version of an agent template for review. If no release pipeline is configured, the version is directly published online.
     *
     * @param tmpReq - SubmitAgentSpecVersionRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SubmitAgentSpecVersionResponse
     */
    submitAgentSpecVersionWithOptions(workspaceId: string, agentSpecName: string, agentSpecVersion: string, tmpReq: $_model.SubmitAgentSpecVersionRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitAgentSpecVersionResponse>;
    /**
     * Submits a specified draft version of an AgentSpec for review. If no release pipeline is configured, the version is directly published online.
     *
     * @remarks
     * Submits a specified draft version of an agent template for review. If no release pipeline is configured, the version is directly published online.
     *
     * @param request - SubmitAgentSpecVersionRequest
     * @returns SubmitAgentSpecVersionResponse
     */
    submitAgentSpecVersion(workspaceId: string, agentSpecName: string, agentSpecVersion: string, request: $_model.SubmitAgentSpecVersionRequest): Promise<$_model.SubmitAgentSpecVersionResponse>;
    /**
     * Submits a specified draft version of a skill for review.
     *
     * @remarks
     * Submits a specified draft version of a skill for review.
     *
     * @param tmpReq - SubmitSkillVersionRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SubmitSkillVersionResponse
     */
    submitSkillVersionWithOptions(workspaceId: string, skillName: string, skillVersion: string, tmpReq: $_model.SubmitSkillVersionRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitSkillVersionResponse>;
    /**
     * Submits a specified draft version of a skill for review.
     *
     * @remarks
     * Submits a specified draft version of a skill for review.
     *
     * @param request - SubmitSkillVersionRequest
     * @returns SubmitSkillVersionResponse
     */
    submitSkillVersion(workspaceId: string, skillName: string, skillVersion: string, request: $_model.SubmitSkillVersionRequest): Promise<$_model.SubmitSkillVersionResponse>;
    /**
     * Updates an access application.
     *
     * @remarks
     * Modifies the configuration of an access application in a workspace to adjust application integration and identity source settings.
     *
     * @param tmpReq - UpdateAccessApplicationRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateAccessApplicationResponse
     */
    updateAccessApplicationWithOptions(workspaceId: string, applicationId: string, tmpReq: $_model.UpdateAccessApplicationRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAccessApplicationResponse>;
    /**
     * Updates an access application.
     *
     * @remarks
     * Modifies the configuration of an access application in a workspace to adjust application integration and identity source settings.
     *
     * @param request - UpdateAccessApplicationRequest
     * @returns UpdateAccessApplicationResponse
     */
    updateAccessApplication(workspaceId: string, applicationId: string, request: $_model.UpdateAccessApplicationRequest): Promise<$_model.UpdateAccessApplicationResponse>;
    /**
     * Updates the ServiceEndpoint, enabling status, or channel behavior configuration bound to an IM channel. At least one updatable field must be provided.
     *
     * @remarks
     * Updates the ServiceEndpoint, enabling status, or channel behavior configuration bound to an IM channel.
     * At least one updatable field must be provided.
     *
     * @param tmpReq - UpdateAgentIMChannelRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateAgentIMChannelResponse
     */
    updateAgentIMChannelWithOptions(workspaceId: string, agentId: string, imChannelId: string, tmpReq: $_model.UpdateAgentIMChannelRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAgentIMChannelResponse>;
    /**
     * Updates the ServiceEndpoint, enabling status, or channel behavior configuration bound to an IM channel. At least one updatable field must be provided.
     *
     * @remarks
     * Updates the ServiceEndpoint, enabling status, or channel behavior configuration bound to an IM channel.
     * At least one updatable field must be provided.
     *
     * @param request - UpdateAgentIMChannelRequest
     * @returns UpdateAgentIMChannelResponse
     */
    updateAgentIMChannel(workspaceId: string, agentId: string, imChannelId: string, request: $_model.UpdateAgentIMChannelRequest): Promise<$_model.UpdateAgentIMChannelResponse>;
    /**
     * Updates all channel credentials for a specified IM channel. Secrets are not returned in the response.
     *
     * @remarks
     * Replaces all access credentials for an IM channel to rotate keys or correct authentication configurations.
     * Submit complete new credentials. The response does not return secrets in plaintext.
     *
     * @param tmpReq - UpdateAgentIMChannelCredentialRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateAgentIMChannelCredentialResponse
     */
    updateAgentIMChannelCredentialWithOptions(workspaceId: string, agentId: string, imChannelId: string, tmpReq: $_model.UpdateAgentIMChannelCredentialRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAgentIMChannelCredentialResponse>;
    /**
     * Updates all channel credentials for a specified IM channel. Secrets are not returned in the response.
     *
     * @remarks
     * Replaces all access credentials for an IM channel to rotate keys or correct authentication configurations.
     * Submit complete new credentials. The response does not return secrets in plaintext.
     *
     * @param request - UpdateAgentIMChannelCredentialRequest
     * @returns UpdateAgentIMChannelCredentialResponse
     */
    updateAgentIMChannelCredential(workspaceId: string, agentId: string, imChannelId: string, request: $_model.UpdateAgentIMChannelCredentialRequest): Promise<$_model.UpdateAgentIMChannelCredentialResponse>;
    /**
     * Updates the business tags, version tags, and visibility scope of a specified AgentSpec. Fields not passed remain unchanged.
     *
     * @remarks
     * Updates the business tags, version tags, and visibility scope of a specified agent template. Fields not passed remain unchanged.
     *
     * @param tmpReq - UpdateAgentSpecRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateAgentSpecResponse
     */
    updateAgentSpecWithOptions(workspaceId: string, agentSpecName: string, tmpReq: $_model.UpdateAgentSpecRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAgentSpecResponse>;
    /**
     * Updates the business tags, version tags, and visibility scope of a specified AgentSpec. Fields not passed remain unchanged.
     *
     * @remarks
     * Updates the business tags, version tags, and visibility scope of a specified agent template. Fields not passed remain unchanged.
     *
     * @param request - UpdateAgentSpecRequest
     * @returns UpdateAgentSpecResponse
     */
    updateAgentSpec(workspaceId: string, agentSpecName: string, request: $_model.UpdateAgentSpecRequest): Promise<$_model.UpdateAgentSpecResponse>;
    /**
     * Updates the API key or service account key collection for an enabled QoderCLI connector. When serviceAccountKeys is submitted, the service treats it as the updated complete key collection to perform additions, renames, rotations, and deletions.
     *
     * @remarks
     * Updates the API key or service account key collection for an enabled QoderCLI connector.
     * When updating service account keys, the service matches existing keys by their id.
     *
     * @param tmpReq - UpdateConnectorRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateConnectorResponse
     */
    updateConnectorWithOptions(workspaceId: string, connectorName: string, tmpReq: $_model.UpdateConnectorRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConnectorResponse>;
    /**
     * Updates the API key or service account key collection for an enabled QoderCLI connector. When serviceAccountKeys is submitted, the service treats it as the updated complete key collection to perform additions, renames, rotations, and deletions.
     *
     * @remarks
     * Updates the API key or service account key collection for an enabled QoderCLI connector.
     * When updating service account keys, the service matches existing keys by their id.
     *
     * @param request - UpdateConnectorRequest
     * @returns UpdateConnectorResponse
     */
    updateConnector(workspaceId: string, connectorName: string, request: $_model.UpdateConnectorRequest): Promise<$_model.UpdateConnectorResponse>;
    /**
     * Updates the content, description, or MCP header application scope of a specified credential. Unspecified configurations retain their original values. The credential name and type cannot be modified.
     *
     * @remarks
     * Updates the content, description, or MCP header application scope of a specified credential.
     * ### Update rules
     * You must modify at least one of the following: credential content, description, or application scope. If you only modify the application scope, you do not need to submit `credentialMetadata` or `description`.
     * - Omit `credentialMetadata`: The original credential content is retained. If provided, submit a JSON string according to the original credential type.
     * - Omit `description`: The original description is retained.
     * - The credential name and `credentialType` cannot be modified.
     * ### MCP header application scope
     * Only `mcpHeader` supports updating the application scope. Do not submit `resourceScope` or `resourceRefs` for `apiKey`.
     * - Omit both the scope and the resource list: The original configuration is retained.
     * - Submit `resourceRefs`: You must also submit `resourceScope`.
     * - `resourceScope=ALL`: Omit `resourceRefs`.
     * - `resourceScope=SPECIFIED`: Submit `resourceRefs`. An empty array `[]` is allowed during updates. For each item, specify `resourceType=mcpServer` and `resourceId`.
     * ### Query results
     * After the update, call [GetCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCredential) to query the current configuration and the masked credential content.
     *
     * @param tmpReq - UpdateCredentialRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateCredentialResponse
     */
    updateCredentialWithOptions(workspaceId: string, credentialId: string, tmpReq: $_model.UpdateCredentialRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCredentialResponse>;
    /**
     * Updates the content, description, or MCP header application scope of a specified credential. Unspecified configurations retain their original values. The credential name and type cannot be modified.
     *
     * @remarks
     * Updates the content, description, or MCP header application scope of a specified credential.
     * ### Update rules
     * You must modify at least one of the following: credential content, description, or application scope. If you only modify the application scope, you do not need to submit `credentialMetadata` or `description`.
     * - Omit `credentialMetadata`: The original credential content is retained. If provided, submit a JSON string according to the original credential type.
     * - Omit `description`: The original description is retained.
     * - The credential name and `credentialType` cannot be modified.
     * ### MCP header application scope
     * Only `mcpHeader` supports updating the application scope. Do not submit `resourceScope` or `resourceRefs` for `apiKey`.
     * - Omit both the scope and the resource list: The original configuration is retained.
     * - Submit `resourceRefs`: You must also submit `resourceScope`.
     * - `resourceScope=ALL`: Omit `resourceRefs`.
     * - `resourceScope=SPECIFIED`: Submit `resourceRefs`. An empty array `[]` is allowed during updates. For each item, specify `resourceType=mcpServer` and `resourceId`.
     * ### Query results
     * After the update, call [GetCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCredential) to query the current configuration and the masked credential content.
     *
     * @param request - UpdateCredentialRequest
     * @returns UpdateCredentialResponse
     */
    updateCredential(workspaceId: string, credentialId: string, request: $_model.UpdateCredentialRequest): Promise<$_model.UpdateCredentialResponse>;
    /**
     * Updates the configuration of a custom code or image agent in a specified workspace and executes the update asynchronously. Omitted top-level fields retain their original configurations. You can call the GetCustomAgent operation to query the update result.
     *
     * @remarks
     * Updates the deployment artifact or runtime configuration of a custom code or image agent to release new code, images, or configurations.
     * ### Update rules
     * Updates a custom code or image agent in a specified workspace. You must provide at least one top-level field to update. Omitted top-level fields retain their original configurations.
     * The update rules for each configuration are as follows.
     * | Configuration | Update method and precautions |
     * | --- | --- |
     * | `name` | Omitted to retain the original name. It cannot be `null` or a blank string. |
     * | `description` | Omitted to retain the original description. Pass `null` to clear the description. |
     * | `artifact` | When submitting, specify `port` and the required fields for the selected source. To retain a custom startup command, also specify `entrypoint`. `code` and `container` are mutually exclusive. |
     * | `runtime` | When submitting, specify both `compute` and `sessionPolicy`. To retain the elastic policy, submit the complete `hpa`. |
     * | `environment` | The environment variable list is replaced as a whole. You must include all variables that need to be retained. |
     * | `network` | When submitting, omitted access items are treated as allowed. To retain access restrictions, specify both `accessInternet` and `accessVpc`. |
     * | `healthCheck` | When submitting, you must specify `port`. Other unspecified configurations use default values. Pass `null` to remove the health check. |
     * | `logging` | When submitting `logging.sls`, specify non-empty `project` and `logstore` at the same time. |
     * | `protocol`, `ossMounts`, `agenticFsMounts` | When submitting, the corresponding list is replaced as a whole. Pass `[]` to clear the corresponding list. `agenticFsMounts` does not accept `null`. |
     * ### Deployment artifacts
     * Supports three deployment methods: code packages, ACR images, and custom images. When updating or switching the deployment method, provide the configuration according to the target method.
     * | Deployment method | Configuration requirements |
     * | --- | --- |
     * | ACR image | When updating the image tag, also provide `artifact.port`, as well as `type=acr`, `instanceId`, `namespace`, `repo`, and `tag` in `artifact.container`. To retain a custom startup command, also provide `entrypoint`. |
     * | Custom image | Set `artifact.container.type=custom`, provide the complete `customImage`, and provide `clientToken` in the query parameters. When switching to this method, also specify `artifact.port`. Do not include ACR instance, namespace, repository, and tag fields in `container`. |
     * | Code package | Provide `artifact.port`, as well as `sourceUri`, `languageRuntime`, and `entrypoint` in `artifact.code`. Do not submit `container` at the same time. |
     * **Custom images**
     * - `customImage` must include the complete image address `image` and the independent pull network `pullNetwork`. The image address does not include a protocol or user information, and supports addresses with tags or digests.
     * - For public network pulling, set `pullNetwork.type=public` and do not include VPC fields. For VPC pulling, set `type=vpc` and provide `vpcId`, `vSwitchId`, and `securityGroupId` at the same time. The image pull network and the agent runtime network are configured separately.
     * - When repository authentication is required, provide non-empty `username` and `password` at the same time. For anonymous access, omit both. The response does not return the password.
     * - Omitting the entire `customImage` retains the saved image source. Submit the complete object when updating the custom image source. You do not need to resubmit this object when only adjusting the runtime configuration.
     * - Custom images and code packages do not support enabling `useImageCache`. The value of this field in the final configuration must be `false`. When this field is omitted for a custom image, it is treated as `false`. When switching to a code package, if the original configuration is `true`, you must explicitly change it to `false`. When updating other sources, omitting this field retains the original value.
     * **Code packages**
     * - Supports ZIP or TAR.GZ. The compressed package size cannot exceed `500000000` bytes. Dependencies are packaged by the caller. The platform does not perform online building or dependency installation.
     * - Call [ListAgentCodeRuntimes](https://api.aliyun.com/document/AgentCore/2026-08-04/ListAgentCodeRuntimes) to query the available `languageRuntime`.
     * - `sourceUri` supports `oss://` addresses or HTTPS object addresses of standard OSS public domain names, including signed URLs.
     * - For local code packages, first call [GetAgentCodePackageUploadUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetAgentCodePackageUploadUrl), upload the file according to the response information, and then submit the returned `sourceUri`.
     * - The new source verifies read permissions, objects, and sizes before acceptance, and transfers them to a fixed platform copy. If the transfer fails, the current agent configuration is not saved. Common updates can reuse the saved fixed code package address.
     * ### Runtime configuration and elasticity
     * Omitting the entire `runtime` retains the original runtime configuration. When submitting `runtime`, you must specify both `compute` and `sessionPolicy`.
     * If you submit `runtime` but omit `hpa`, or omit some fields in `hpa`, the unspecified items use the following default values. **To retain the existing elastic policy, submit the complete `hpa`.**
     * | Field | Default value | Description |
     * | --- | --- | --- |
     * | `enabled` | `false` | Specifies whether to enable elastic scaling. |
     * | `minSandboxCount` | `1` | The minimum number of instances. |
     * | `maxSandboxCount` | `10` | The maximum number of instances, which cannot be less than the minimum number. |
     * | `maxConcurrentSessionsPerSandbox` | `20` | The maximum number of concurrent sessions per instance. Valid values: 1 to 20. |
     * | `sessionTtlSeconds` | `600` | The maximum idle time of a session, in seconds. |
     * The upper and lower limits of the number of instances are configuration values. You can query the current number of instances through `sandboxPhaseCounts`.
     * When `sessionPolicy.type=ISOLATED_HEADER_FIELD`, you must specify a valid HTTP request header name `headerName`. Do not specify `headerName` for other session policies.
     * ### Network and mounts
     * Omitting the entire `network` retains the original configuration. When submitting this object, omitted access items are treated as allowed on the agent side. Actual access is restricted by the workspace network configuration.
     * To retain the original restrictions, submit both `accessInternet.enabled` and `accessVpc.enabled` at the same time. Do not submit only one of them.
     * The total number of `ossMounts` and `agenticFsMounts` cannot exceed 10. When updating either list, you must include all mount items that need to be retained in the list. The two lists are updated separately. You can set `agenticFsMounts=[]` to clear AgenticFS mounts. You cannot use `null` to clear them.
     * In this operation, ACR images, custom images, and code packages all use the same user mount target rules: `mountPath` is the absolute path in the container, such as `/data/train`, and must not conflict with platform reserved directories. Mount targets must not be duplicated or form parent-child directory overwrites.
     * ### Environment variables
     * Omitting the entire `environment` retains the original configuration. When submitting `environment.variables`, the original list is replaced as a whole with the current list. You must include all variables that need to be retained.
     * The following methods all clear the environment variables configured by the user:
     * - `environment.variables=[]`.
     * - `environment=null`.
     * - Submit `environment` but omit `variables`, such as `environment={}`.
     * Variable names must be non-empty and unique in the list. Variable values must be strings, and empty strings are allowed.
     * ### Health checks and logging
     * Omitting the entire `healthCheck` retains the original configuration. Pass `null` to remove the health check. When submitting this object, you must specify `port`. Other unspecified items use the following default values.
     * | Field | Default value |
     * | --- | --- |
     * | `path` | `/healthz` |
     * | `intervalSeconds` | `10` seconds |
     * | `timeoutSeconds` | `2` seconds |
     * | `unhealthyThreshold` | `3` times |
     * The health check port ranges from 1 to 65535. Health Check Interval, timeout period, and failure threshold must be positive integers, and the timeout period must be less than Health Check Interval. Do not submit `healthyThreshold`.
     * When configuring log delivery, `logging.sls.project` and `logging.sls.logstore` must be provided at the same time and cannot be empty.
     * ### Asynchronous results and retries
     * `success=true` indicates that the update request has been accepted. Call [GetCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCustomAgent) to query the configuration processing result.
     * | Field | Purpose |
     * | --- | --- |
     * | `latestSpecVersion` | The latest expected configuration version. |
     * | `effectiveSpecVersion` | The effective configuration version. |
     * | `latestVersionStatus` | The processing status of the latest expected configuration version. |
     * | `latestExecutionError` | The reason why the latest configuration is waiting for a retry or fails to be executed, and whether to automatically retry. |
     * | `status` | The overall status of the agent. |
     * | `sandboxPhaseCounts` | A snapshot of the number of instances counted by phase. |
     * When `latestVersionStatus` is `pending`, `processing`, or `waiting_retry`, you can continue to query later. `succeeded` indicates that the configuration is processed successfully. When the value is `failed`, troubleshoot the configuration based on `latestExecutionError`.
     * When explicitly submitting `customImage` or explicitly setting `artifact.container.type=custom`, you must provide `clientToken` in the query parameters. You can also optionally pass this parameter when updating ACR images or code packages to reuse the acceptance result of the same submission. The identifier is 1 to 128 characters in length and can contain letters, digits, periods, underscores, colons, and hyphens.
     * When retrying the same submission, reuse the original `clientToken`. The service returns the existing acceptance result based on the tenant, workspace, and this identifier. Use a new identifier when modifying the submission content.
     *
     * @param tmpReq - UpdateCustomAgentRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateCustomAgentResponse
     */
    updateCustomAgentWithOptions(workspaceId: string, agentId: string, tmpReq: $_model.UpdateCustomAgentRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCustomAgentResponse>;
    /**
     * Updates the configuration of a custom code or image agent in a specified workspace and executes the update asynchronously. Omitted top-level fields retain their original configurations. You can call the GetCustomAgent operation to query the update result.
     *
     * @remarks
     * Updates the deployment artifact or runtime configuration of a custom code or image agent to release new code, images, or configurations.
     * ### Update rules
     * Updates a custom code or image agent in a specified workspace. You must provide at least one top-level field to update. Omitted top-level fields retain their original configurations.
     * The update rules for each configuration are as follows.
     * | Configuration | Update method and precautions |
     * | --- | --- |
     * | `name` | Omitted to retain the original name. It cannot be `null` or a blank string. |
     * | `description` | Omitted to retain the original description. Pass `null` to clear the description. |
     * | `artifact` | When submitting, specify `port` and the required fields for the selected source. To retain a custom startup command, also specify `entrypoint`. `code` and `container` are mutually exclusive. |
     * | `runtime` | When submitting, specify both `compute` and `sessionPolicy`. To retain the elastic policy, submit the complete `hpa`. |
     * | `environment` | The environment variable list is replaced as a whole. You must include all variables that need to be retained. |
     * | `network` | When submitting, omitted access items are treated as allowed. To retain access restrictions, specify both `accessInternet` and `accessVpc`. |
     * | `healthCheck` | When submitting, you must specify `port`. Other unspecified configurations use default values. Pass `null` to remove the health check. |
     * | `logging` | When submitting `logging.sls`, specify non-empty `project` and `logstore` at the same time. |
     * | `protocol`, `ossMounts`, `agenticFsMounts` | When submitting, the corresponding list is replaced as a whole. Pass `[]` to clear the corresponding list. `agenticFsMounts` does not accept `null`. |
     * ### Deployment artifacts
     * Supports three deployment methods: code packages, ACR images, and custom images. When updating or switching the deployment method, provide the configuration according to the target method.
     * | Deployment method | Configuration requirements |
     * | --- | --- |
     * | ACR image | When updating the image tag, also provide `artifact.port`, as well as `type=acr`, `instanceId`, `namespace`, `repo`, and `tag` in `artifact.container`. To retain a custom startup command, also provide `entrypoint`. |
     * | Custom image | Set `artifact.container.type=custom`, provide the complete `customImage`, and provide `clientToken` in the query parameters. When switching to this method, also specify `artifact.port`. Do not include ACR instance, namespace, repository, and tag fields in `container`. |
     * | Code package | Provide `artifact.port`, as well as `sourceUri`, `languageRuntime`, and `entrypoint` in `artifact.code`. Do not submit `container` at the same time. |
     * **Custom images**
     * - `customImage` must include the complete image address `image` and the independent pull network `pullNetwork`. The image address does not include a protocol or user information, and supports addresses with tags or digests.
     * - For public network pulling, set `pullNetwork.type=public` and do not include VPC fields. For VPC pulling, set `type=vpc` and provide `vpcId`, `vSwitchId`, and `securityGroupId` at the same time. The image pull network and the agent runtime network are configured separately.
     * - When repository authentication is required, provide non-empty `username` and `password` at the same time. For anonymous access, omit both. The response does not return the password.
     * - Omitting the entire `customImage` retains the saved image source. Submit the complete object when updating the custom image source. You do not need to resubmit this object when only adjusting the runtime configuration.
     * - Custom images and code packages do not support enabling `useImageCache`. The value of this field in the final configuration must be `false`. When this field is omitted for a custom image, it is treated as `false`. When switching to a code package, if the original configuration is `true`, you must explicitly change it to `false`. When updating other sources, omitting this field retains the original value.
     * **Code packages**
     * - Supports ZIP or TAR.GZ. The compressed package size cannot exceed `500000000` bytes. Dependencies are packaged by the caller. The platform does not perform online building or dependency installation.
     * - Call [ListAgentCodeRuntimes](https://api.aliyun.com/document/AgentCore/2026-08-04/ListAgentCodeRuntimes) to query the available `languageRuntime`.
     * - `sourceUri` supports `oss://` addresses or HTTPS object addresses of standard OSS public domain names, including signed URLs.
     * - For local code packages, first call [GetAgentCodePackageUploadUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetAgentCodePackageUploadUrl), upload the file according to the response information, and then submit the returned `sourceUri`.
     * - The new source verifies read permissions, objects, and sizes before acceptance, and transfers them to a fixed platform copy. If the transfer fails, the current agent configuration is not saved. Common updates can reuse the saved fixed code package address.
     * ### Runtime configuration and elasticity
     * Omitting the entire `runtime` retains the original runtime configuration. When submitting `runtime`, you must specify both `compute` and `sessionPolicy`.
     * If you submit `runtime` but omit `hpa`, or omit some fields in `hpa`, the unspecified items use the following default values. **To retain the existing elastic policy, submit the complete `hpa`.**
     * | Field | Default value | Description |
     * | --- | --- | --- |
     * | `enabled` | `false` | Specifies whether to enable elastic scaling. |
     * | `minSandboxCount` | `1` | The minimum number of instances. |
     * | `maxSandboxCount` | `10` | The maximum number of instances, which cannot be less than the minimum number. |
     * | `maxConcurrentSessionsPerSandbox` | `20` | The maximum number of concurrent sessions per instance. Valid values: 1 to 20. |
     * | `sessionTtlSeconds` | `600` | The maximum idle time of a session, in seconds. |
     * The upper and lower limits of the number of instances are configuration values. You can query the current number of instances through `sandboxPhaseCounts`.
     * When `sessionPolicy.type=ISOLATED_HEADER_FIELD`, you must specify a valid HTTP request header name `headerName`. Do not specify `headerName` for other session policies.
     * ### Network and mounts
     * Omitting the entire `network` retains the original configuration. When submitting this object, omitted access items are treated as allowed on the agent side. Actual access is restricted by the workspace network configuration.
     * To retain the original restrictions, submit both `accessInternet.enabled` and `accessVpc.enabled` at the same time. Do not submit only one of them.
     * The total number of `ossMounts` and `agenticFsMounts` cannot exceed 10. When updating either list, you must include all mount items that need to be retained in the list. The two lists are updated separately. You can set `agenticFsMounts=[]` to clear AgenticFS mounts. You cannot use `null` to clear them.
     * In this operation, ACR images, custom images, and code packages all use the same user mount target rules: `mountPath` is the absolute path in the container, such as `/data/train`, and must not conflict with platform reserved directories. Mount targets must not be duplicated or form parent-child directory overwrites.
     * ### Environment variables
     * Omitting the entire `environment` retains the original configuration. When submitting `environment.variables`, the original list is replaced as a whole with the current list. You must include all variables that need to be retained.
     * The following methods all clear the environment variables configured by the user:
     * - `environment.variables=[]`.
     * - `environment=null`.
     * - Submit `environment` but omit `variables`, such as `environment={}`.
     * Variable names must be non-empty and unique in the list. Variable values must be strings, and empty strings are allowed.
     * ### Health checks and logging
     * Omitting the entire `healthCheck` retains the original configuration. Pass `null` to remove the health check. When submitting this object, you must specify `port`. Other unspecified items use the following default values.
     * | Field | Default value |
     * | --- | --- |
     * | `path` | `/healthz` |
     * | `intervalSeconds` | `10` seconds |
     * | `timeoutSeconds` | `2` seconds |
     * | `unhealthyThreshold` | `3` times |
     * The health check port ranges from 1 to 65535. Health Check Interval, timeout period, and failure threshold must be positive integers, and the timeout period must be less than Health Check Interval. Do not submit `healthyThreshold`.
     * When configuring log delivery, `logging.sls.project` and `logging.sls.logstore` must be provided at the same time and cannot be empty.
     * ### Asynchronous results and retries
     * `success=true` indicates that the update request has been accepted. Call [GetCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCustomAgent) to query the configuration processing result.
     * | Field | Purpose |
     * | --- | --- |
     * | `latestSpecVersion` | The latest expected configuration version. |
     * | `effectiveSpecVersion` | The effective configuration version. |
     * | `latestVersionStatus` | The processing status of the latest expected configuration version. |
     * | `latestExecutionError` | The reason why the latest configuration is waiting for a retry or fails to be executed, and whether to automatically retry. |
     * | `status` | The overall status of the agent. |
     * | `sandboxPhaseCounts` | A snapshot of the number of instances counted by phase. |
     * When `latestVersionStatus` is `pending`, `processing`, or `waiting_retry`, you can continue to query later. `succeeded` indicates that the configuration is processed successfully. When the value is `failed`, troubleshoot the configuration based on `latestExecutionError`.
     * When explicitly submitting `customImage` or explicitly setting `artifact.container.type=custom`, you must provide `clientToken` in the query parameters. You can also optionally pass this parameter when updating ACR images or code packages to reuse the acceptance result of the same submission. The identifier is 1 to 128 characters in length and can contain letters, digits, periods, underscores, colons, and hyphens.
     * When retrying the same submission, reuse the original `clientToken`. The service returns the existing acceptance result based on the tenant, workspace, and this identifier. Use a new identifier when modifying the submission content.
     *
     * @param request - UpdateCustomAgentRequest
     * @returns UpdateCustomAgentResponse
     */
    updateCustomAgent(workspaceId: string, agentId: string, request: $_model.UpdateCustomAgentRequest): Promise<$_model.UpdateCustomAgentResponse>;
    /**
     * Updates the model source, instructions, tools, and skills of a managed agent, and processes the configuration asynchronously.
     *
     * @remarks
     * Updates the model, instruction, tool, or skill configurations saved on the platform for a managed agent to adjust its capability configurations after integration.
     * ### Update rules
     * Provide at least one updatable field. Omitted top-level fields retain their original configurations. You can set description=null to clear the description. The tools and skills fields are replaced in their entirety upon submission. You must include the items that you want to retain. Pass [] to clear the corresponding explicit list.
     * ### Switch model sources
     * - To switch to PLATFORM, provide modelSource=PLATFORM and a valid model configuration, including the model connection ID and model name.
     * - To switch to RUNTIME, update the Settings to modelSource=RUNTIME and do not commit the platform model. The original platform model configuration is removed when the source is switched.
     * When a template is used, configurations that belong to the template, such as instructions, are read from the template. A successful update indicates that the request is accepted. Invoke [GetExternalAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgent) to query the configuration version and external accessed state. The clientToken parameter does not provide idempotence guarantees at this time.
     *
     * @param tmpReq - UpdateExternalAgentRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateExternalAgentResponse
     */
    updateExternalAgentWithOptions(workspaceId: string, agentId: string, tmpReq: $_model.UpdateExternalAgentRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateExternalAgentResponse>;
    /**
     * Updates the model source, instructions, tools, and skills of a managed agent, and processes the configuration asynchronously.
     *
     * @remarks
     * Updates the model, instruction, tool, or skill configurations saved on the platform for a managed agent to adjust its capability configurations after integration.
     * ### Update rules
     * Provide at least one updatable field. Omitted top-level fields retain their original configurations. You can set description=null to clear the description. The tools and skills fields are replaced in their entirety upon submission. You must include the items that you want to retain. Pass [] to clear the corresponding explicit list.
     * ### Switch model sources
     * - To switch to PLATFORM, provide modelSource=PLATFORM and a valid model configuration, including the model connection ID and model name.
     * - To switch to RUNTIME, update the Settings to modelSource=RUNTIME and do not commit the platform model. The original platform model configuration is removed when the source is switched.
     * When a template is used, configurations that belong to the template, such as instructions, are read from the template. A successful update indicates that the request is accepted. Invoke [GetExternalAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgent) to query the configuration version and external accessed state. The clientToken parameter does not provide idempotence guarantees at this time.
     *
     * @param request - UpdateExternalAgentRequest
     * @returns UpdateExternalAgentResponse
     */
    updateExternalAgent(workspaceId: string, agentId: string, request: $_model.UpdateExternalAgentRequest): Promise<$_model.UpdateExternalAgentResponse>;
    /**
     * Modifies the logon configuration of a bound identity provider in a specified workspace. DingTalk and Lark support the logon switch, incremental synchronization switch, application configuration, and synchronization scope. CustomSSO supports SAML configuration and the logon switch. Updates take effect asynchronously. Call GetIdentityProvider to query the status.
     *
     * @remarks
     * Modifies the logon or directory configuration of a bound enterprise identity provider to update enterprise application credentials, adjust synchronized departments, or configure custom single sign-on (SSO).
     * ### Select the configuration to modify
     * | Identity provider | Updatable content |
     * | --- | --- |
     * | DingTalk (`DingTalk`), Lark (`Feishu`) | Enterprise application credentials `metadata`, logon switch `loginEnabled`, directory change synchronization switch `syncEnabled`, and synchronization scope `syncScope`. You must submit at least one item. |
     * | Custom identity provider (`CustomSSO`) | SAML protocol `protocol`, logon configuration `saml`, and logon switch `loginEnabled`. SCIM-based user synchronization is configured separately by using [UpdateIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProviderSCIM). |
     * ### Update DingTalk or Lark
     * `metadata` is updated by field. You only need to submit the fields that you want to modify. Omitted fields and existing keys remain unchanged. The provided values must be non-empty strings. When you enable directory change synchronization, the configuration must include `encryptKey` and `verificationToken`.
     * To adjust synchronized departments:
     * **Step 1:** Call [ListIdentityProviderDepartments](https://api.aliyun.com/document/AgentCore/2026-08-04/ListIdentityProviderDepartments) to query and select departments.
     * **Step 2:** Call this operation to save `syncScope`. If you omit this field or pass `null`, the current scope is retained.
     * **Step 3:** Call [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider) to wait for the configuration processing to complete, and then call [CreateIdentityProviderSyncJob](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateIdentityProviderSyncJob) to synchronize users based on the new scope.
     * Saving the scope does not automatically trigger a full synchronization. `syncEnabled` controls subsequent directory change events. The initial synchronization and manual synchronization are executed separately.
     * ### Configure custom single sign-on
     * `CustomSSO` uses the SAML protocol to allow users to log on through the enterprise identity system. First, call [GetIdentityProviderServiceProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderServiceProvider) to obtain the access information of AgentCore and configure it in the enterprise identity system. Then, fill in the enterprise-side information in `saml`.
     * Choose one of the following two methods:
     * | Method | Required configuration |
     * | --- | --- |
     * | Import metadata | `metadataXml`: A single IdP metadata XML text exported from the enterprise identity provider. The maximum size is 1 MiB. Enter the XML content instead of a download URL or file path. |
     * | Manual entry | Provide `entityId`, `loginUrl`, `bindingType`, and `x509Certificates` at the same time. Use an HTTPS logon URL and a signing certificate within its validity period. Set `bindingType` to `HTTP-Redirect` or `HTTP-POST`. You can provide up to two certificates. |
     * The `entityId` cannot be changed after it is saved. If the XML contains both binding methods at the same time, `HTTP-POST` and its corresponding URL are used first.
     * After saving the configuration, set `loginEnabled=true` to enable logon. You can also enable it when submitting a valid SAML configuration. Setting it to `false` disables logon and retains the existing configuration.
     * ### Confirm that the configuration takes effect
     * After the request is accepted, `UPDATING` is usually returned. Call [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider) to query the progress. `READY` indicates that the configuration processing is complete. If it fails, check the returned status and configuration.
     * If the request times out, query the current configuration and processing status first, and then decide whether to retry. Query the SCIM processing result by calling [GetIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderSCIM).
     *
     * @param tmpReq - UpdateIdentityProviderRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateIdentityProviderResponse
     */
    updateIdentityProviderWithOptions(workspaceId: string, identityProviderType: string, tmpReq: $_model.UpdateIdentityProviderRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIdentityProviderResponse>;
    /**
     * Modifies the logon configuration of a bound identity provider in a specified workspace. DingTalk and Lark support the logon switch, incremental synchronization switch, application configuration, and synchronization scope. CustomSSO supports SAML configuration and the logon switch. Updates take effect asynchronously. Call GetIdentityProvider to query the status.
     *
     * @remarks
     * Modifies the logon or directory configuration of a bound enterprise identity provider to update enterprise application credentials, adjust synchronized departments, or configure custom single sign-on (SSO).
     * ### Select the configuration to modify
     * | Identity provider | Updatable content |
     * | --- | --- |
     * | DingTalk (`DingTalk`), Lark (`Feishu`) | Enterprise application credentials `metadata`, logon switch `loginEnabled`, directory change synchronization switch `syncEnabled`, and synchronization scope `syncScope`. You must submit at least one item. |
     * | Custom identity provider (`CustomSSO`) | SAML protocol `protocol`, logon configuration `saml`, and logon switch `loginEnabled`. SCIM-based user synchronization is configured separately by using [UpdateIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProviderSCIM). |
     * ### Update DingTalk or Lark
     * `metadata` is updated by field. You only need to submit the fields that you want to modify. Omitted fields and existing keys remain unchanged. The provided values must be non-empty strings. When you enable directory change synchronization, the configuration must include `encryptKey` and `verificationToken`.
     * To adjust synchronized departments:
     * **Step 1:** Call [ListIdentityProviderDepartments](https://api.aliyun.com/document/AgentCore/2026-08-04/ListIdentityProviderDepartments) to query and select departments.
     * **Step 2:** Call this operation to save `syncScope`. If you omit this field or pass `null`, the current scope is retained.
     * **Step 3:** Call [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider) to wait for the configuration processing to complete, and then call [CreateIdentityProviderSyncJob](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateIdentityProviderSyncJob) to synchronize users based on the new scope.
     * Saving the scope does not automatically trigger a full synchronization. `syncEnabled` controls subsequent directory change events. The initial synchronization and manual synchronization are executed separately.
     * ### Configure custom single sign-on
     * `CustomSSO` uses the SAML protocol to allow users to log on through the enterprise identity system. First, call [GetIdentityProviderServiceProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderServiceProvider) to obtain the access information of AgentCore and configure it in the enterprise identity system. Then, fill in the enterprise-side information in `saml`.
     * Choose one of the following two methods:
     * | Method | Required configuration |
     * | --- | --- |
     * | Import metadata | `metadataXml`: A single IdP metadata XML text exported from the enterprise identity provider. The maximum size is 1 MiB. Enter the XML content instead of a download URL or file path. |
     * | Manual entry | Provide `entityId`, `loginUrl`, `bindingType`, and `x509Certificates` at the same time. Use an HTTPS logon URL and a signing certificate within its validity period. Set `bindingType` to `HTTP-Redirect` or `HTTP-POST`. You can provide up to two certificates. |
     * The `entityId` cannot be changed after it is saved. If the XML contains both binding methods at the same time, `HTTP-POST` and its corresponding URL are used first.
     * After saving the configuration, set `loginEnabled=true` to enable logon. You can also enable it when submitting a valid SAML configuration. Setting it to `false` disables logon and retains the existing configuration.
     * ### Confirm that the configuration takes effect
     * After the request is accepted, `UPDATING` is usually returned. Call [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider) to query the progress. `READY` indicates that the configuration processing is complete. If it fails, check the returned status and configuration.
     * If the request times out, query the current configuration and processing status first, and then decide whether to retry. Query the SCIM processing result by calling [GetIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderSCIM).
     *
     * @param request - UpdateIdentityProviderRequest
     * @returns UpdateIdentityProviderResponse
     */
    updateIdentityProvider(workspaceId: string, identityProviderType: string, request: $_model.UpdateIdentityProviderRequest): Promise<$_model.UpdateIdentityProviderResponse>;
    /**
     * Enables or disables SCIM-based user synchronization independently. When enabled, an initial full import is executed asynchronously. You can query the result by calling GetIdentityProviderSCIM. The SAML logon configuration is retained.
     *
     * @remarks
     * Enables or disables SCIM-based user synchronization for AgentCore. When enabled, all existing users in the shared user pool are fully imported into the workspace. Users in the user pool are provisioned by the enterprise identity system through SCIM.
     * ### Preparations before enabling
     * **Step 1:** Call [PrepareIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/PrepareIdentityProviderSCIM) to enable the receiving endpoint and obtain the receiving URL and a valid token.
     * **Step 2:** Complete the SCIM configuration, connection test, and user assignment in the enterprise identity system.
     * **Step 3:** Call this operation and set `syncEnabled` to `true`.
     * ```http
     * PUT /workspaces/{workspaceId}/scim-provisioning
     * {"syncEnabled":true}
     * ```
     * When the enabling task is executed, the system checks whether the receiving endpoint is enabled and whether valid credentials exist. If no users are provisioned in the enterprise identity system, the initial import may succeed but contain no user records.
     * ### Impact after disabling
     * Setting `syncEnabled` to `false` disables user synchronization and the upstream SCIM receiving endpoint. Imported users, existing credentials, and the SAML logon configuration are retained.
     * To re-enable synchronization later, call [PrepareIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/PrepareIdentityProviderSCIM) to prepare the receiving endpoint first, and then enable synchronization.
     * ### Verify the operation result
     * After this operation accepts the request, it executes the enabling or disabling task in the background. You can query the progress by calling [GetIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderSCIM):
     * - `syncEnabled` indicates whether synchronization is expected to be enabled or disabled.
     * - `operationStatus` indicates the execution result of the most recent operation.
     * - The `status` field in the query operation comprehensively indicates the current stage of SCIM, such as pending configuration, processing, available, or disabled.
     * If the operation fails, the saved `syncEnabled` value is not automatically rolled back. Verify the configuration based on the operation result before deciding on subsequent actions.
     *
     * @param tmpReq - UpdateIdentityProviderSCIMRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateIdentityProviderSCIMResponse
     */
    updateIdentityProviderSCIMWithOptions(workspaceId: string, tmpReq: $_model.UpdateIdentityProviderSCIMRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIdentityProviderSCIMResponse>;
    /**
     * Enables or disables SCIM-based user synchronization independently. When enabled, an initial full import is executed asynchronously. You can query the result by calling GetIdentityProviderSCIM. The SAML logon configuration is retained.
     *
     * @remarks
     * Enables or disables SCIM-based user synchronization for AgentCore. When enabled, all existing users in the shared user pool are fully imported into the workspace. Users in the user pool are provisioned by the enterprise identity system through SCIM.
     * ### Preparations before enabling
     * **Step 1:** Call [PrepareIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/PrepareIdentityProviderSCIM) to enable the receiving endpoint and obtain the receiving URL and a valid token.
     * **Step 2:** Complete the SCIM configuration, connection test, and user assignment in the enterprise identity system.
     * **Step 3:** Call this operation and set `syncEnabled` to `true`.
     * ```http
     * PUT /workspaces/{workspaceId}/scim-provisioning
     * {"syncEnabled":true}
     * ```
     * When the enabling task is executed, the system checks whether the receiving endpoint is enabled and whether valid credentials exist. If no users are provisioned in the enterprise identity system, the initial import may succeed but contain no user records.
     * ### Impact after disabling
     * Setting `syncEnabled` to `false` disables user synchronization and the upstream SCIM receiving endpoint. Imported users, existing credentials, and the SAML logon configuration are retained.
     * To re-enable synchronization later, call [PrepareIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/PrepareIdentityProviderSCIM) to prepare the receiving endpoint first, and then enable synchronization.
     * ### Verify the operation result
     * After this operation accepts the request, it executes the enabling or disabling task in the background. You can query the progress by calling [GetIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderSCIM):
     * - `syncEnabled` indicates whether synchronization is expected to be enabled or disabled.
     * - `operationStatus` indicates the execution result of the most recent operation.
     * - The `status` field in the query operation comprehensively indicates the current stage of SCIM, such as pending configuration, processing, available, or disabled.
     * If the operation fails, the saved `syncEnabled` value is not automatically rolled back. Verify the configuration based on the operation result before deciding on subsequent actions.
     *
     * @param request - UpdateIdentityProviderSCIMRequest
     * @returns UpdateIdentityProviderSCIMResponse
     */
    updateIdentityProviderSCIM(workspaceId: string, request: $_model.UpdateIdentityProviderSCIMRequest): Promise<$_model.UpdateIdentityProviderSCIMResponse>;
    /**
     * Updates the model, instructions, skills, and runtime configuration of a managed Harness agent and executes the update asynchronously. Omitted top-level fields retain their original configurations.
     *
     * @remarks
     * Updates the model, instructions, skills, or runtime configuration of a managed Harness agent to adjust the capabilities and runtime behavior of an existing agent.
     * ### Update rules
     * Provide at least one updatable field. Omitted top-level fields retain their original configurations. You can set `description=null` to clear the description.
     * | Configuration | Update method |
     * | --- | --- |
     * | `harness` | The type cannot be changed. When updating the qodercli account binding, keep the original `type` and submit the corresponding `configuration`. |
     * | `model` | Provide a model configuration that matches the current Harness. For qwenpaw, specify the model connection ID and model name. For qodercli, use the available model identifier of the connector. |
     * | `runtime` | Specify both `compute` and `sessionPolicy` when submitting. Omitting the entire object retains the original runtime configuration. |
     * | `tools`, `skills`, `promptVariables`, `subAgents` | The corresponding lists are entirely replaced upon submission. You must include the items to be retained. Pass `[]` to clear the corresponding explicit lists. |
     * | `environment` | The variable list and credential reference list are entirely replaced respectively. Submit the items to be retained together. |
     * | `network` | Specify both `accessInternet.enabled` and `accessVpc.enabled` when submitting. |
     * | `ossMounts`, `agenticFsMounts` | Entirely replaced respectively. Pass `[]` to clear the corresponding lists. `agenticFsMounts` does not accept `null`. |
     * ### Harnesses, templates, and skills
     * | Harness | Model and connector configuration |
     * | --- | --- |
     * | `qwenpaw` | This type is used by default if `harness` is omitted during creation. Set `model.modelConnectionId` to the workspace model connection ID, and set `model.modelName` to the name of the model created under this connection. |
     * | `qodercli` | The qodercli connector must be enabled in the workspace. Set `model.modelConnectionId` to the model identifier returned by [ListConnectorModels](https://api.aliyun.com/document/AgentCore/2026-08-04/ListConnectorModels). `model.modelName` can be omitted. |
     * `harness` is an object, such as `{"type":"qwenpaw"}`. For qodercli, set `harness.configuration.connectorServiceAccountKey` to the account key record ID returned by [ListConnectors](https://api.aliyun.com/document/AgentCore/2026-08-04/ListConnectors), not the original service account key. This field can be omitted if there is only one key record, but must be specified if there are multiple records. `connectorServiceAccountName` is the account name. Do not specify these two binding fields for qwenpaw.
     * `skills` uses the skill names in the workspace AI Registry. For `sourceType=REFERENCE`, reference the version by `versionSelector`: use `LABEL` with a tag name, or `VERSION` with a specific version number. If the selector is omitted, `LABEL/latest` is used. For `sourceType=STATIC`, static files bundled with the package are used, and no version selector is provided.
     * For `template.aiRegistry`, specify the agent template name and an optional version. If the version is omitted during creation, the published version is resolved and fixed. When a template is used, `instruction`, `promptVariables`, and `subAgents` are derived from the template, and the corresponding fields in the current request do not take effect. Explicit skills and template skills are recorded separately. You can query the target and effective versions through `configuredSkills` and `skills`.
     * ### Elasticity and instances
     * If `runtime` is committed but `hpa` or some of its fields are omitted, the following default values are used for unspecified items. To retain the existing elastic policy, commit the complete `hpa`.
     * | Field | Default value | Value and description |
     * | --- | --- | --- |
     * | `enabled` | `false` | Specifies whether elastic scaling is enabled. |
     * | `minSandboxCount` | `1` | The minimum number of instances. Valid values: 0 to 100. |
     * | `maxSandboxCount` | `10` | The maximum number of instances. Valid values: 0 to 100. The value cannot be less than the minimum number. |
     * | `maxConcurrentSessionsPerSandbox` | `20` | The maximum number of concurrent sessions per instance. Valid values: 1 to 20. |
     * | `sessionTtlSeconds` | `600` | The maximum idle time of a session, in seconds. Valid values: 60 to 86400. |
     * If you only modify instructions, models, or skills, you can omit the entire `runtime` to keep the original runtime configuration unchanged. The minimum and maximum numbers of instances are configuration borders. You can query the actual number through `sandboxPhaseCounts`.
     * ### Environment and mounts
     * Omitting the entire `environment` retains the original configuration. Submitting `environment={}` or `environment=null` clears the environment configuration. Environment variable values must be strings, and variable names must be non-empty and unique.
     * The total number of `ossMounts` and `agenticFsMounts` cannot exceed 10. The mount target `mountPath` uses an absolute path in the container, such as `/data/train`. It cannot conflict with platform reserved directories, and cannot be duplicated or form parent-child directory overwrites.
     * The `path` for OSS mounts must be a non-empty directory prefix in the bucket. For AgenticFS mounts, `server` is the access point domain name, without a protocol, port, or path. `path` is an existing non-empty relative directory in the access point. You cannot mount the root directory of the access point. If `readOnly` is omitted, the default value is `false`.
     * ### Query update results
     * A successful response indicates that the update request has been accepted. Call [GetManagedAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetManagedAgent) to query `latestSpecVersion`, `latestVersionStatus`, `status`, and `sandboxPhaseCounts` to confirm the configuration processing and instance status. `clientToken` does not provide idempotency guarantees at this time.
     *
     * @param tmpReq - UpdateManagedAgentRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateManagedAgentResponse
     */
    updateManagedAgentWithOptions(workspaceId: string, agentId: string, tmpReq: $_model.UpdateManagedAgentRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateManagedAgentResponse>;
    /**
     * Updates the model, instructions, skills, and runtime configuration of a managed Harness agent and executes the update asynchronously. Omitted top-level fields retain their original configurations.
     *
     * @remarks
     * Updates the model, instructions, skills, or runtime configuration of a managed Harness agent to adjust the capabilities and runtime behavior of an existing agent.
     * ### Update rules
     * Provide at least one updatable field. Omitted top-level fields retain their original configurations. You can set `description=null` to clear the description.
     * | Configuration | Update method |
     * | --- | --- |
     * | `harness` | The type cannot be changed. When updating the qodercli account binding, keep the original `type` and submit the corresponding `configuration`. |
     * | `model` | Provide a model configuration that matches the current Harness. For qwenpaw, specify the model connection ID and model name. For qodercli, use the available model identifier of the connector. |
     * | `runtime` | Specify both `compute` and `sessionPolicy` when submitting. Omitting the entire object retains the original runtime configuration. |
     * | `tools`, `skills`, `promptVariables`, `subAgents` | The corresponding lists are entirely replaced upon submission. You must include the items to be retained. Pass `[]` to clear the corresponding explicit lists. |
     * | `environment` | The variable list and credential reference list are entirely replaced respectively. Submit the items to be retained together. |
     * | `network` | Specify both `accessInternet.enabled` and `accessVpc.enabled` when submitting. |
     * | `ossMounts`, `agenticFsMounts` | Entirely replaced respectively. Pass `[]` to clear the corresponding lists. `agenticFsMounts` does not accept `null`. |
     * ### Harnesses, templates, and skills
     * | Harness | Model and connector configuration |
     * | --- | --- |
     * | `qwenpaw` | This type is used by default if `harness` is omitted during creation. Set `model.modelConnectionId` to the workspace model connection ID, and set `model.modelName` to the name of the model created under this connection. |
     * | `qodercli` | The qodercli connector must be enabled in the workspace. Set `model.modelConnectionId` to the model identifier returned by [ListConnectorModels](https://api.aliyun.com/document/AgentCore/2026-08-04/ListConnectorModels). `model.modelName` can be omitted. |
     * `harness` is an object, such as `{"type":"qwenpaw"}`. For qodercli, set `harness.configuration.connectorServiceAccountKey` to the account key record ID returned by [ListConnectors](https://api.aliyun.com/document/AgentCore/2026-08-04/ListConnectors), not the original service account key. This field can be omitted if there is only one key record, but must be specified if there are multiple records. `connectorServiceAccountName` is the account name. Do not specify these two binding fields for qwenpaw.
     * `skills` uses the skill names in the workspace AI Registry. For `sourceType=REFERENCE`, reference the version by `versionSelector`: use `LABEL` with a tag name, or `VERSION` with a specific version number. If the selector is omitted, `LABEL/latest` is used. For `sourceType=STATIC`, static files bundled with the package are used, and no version selector is provided.
     * For `template.aiRegistry`, specify the agent template name and an optional version. If the version is omitted during creation, the published version is resolved and fixed. When a template is used, `instruction`, `promptVariables`, and `subAgents` are derived from the template, and the corresponding fields in the current request do not take effect. Explicit skills and template skills are recorded separately. You can query the target and effective versions through `configuredSkills` and `skills`.
     * ### Elasticity and instances
     * If `runtime` is committed but `hpa` or some of its fields are omitted, the following default values are used for unspecified items. To retain the existing elastic policy, commit the complete `hpa`.
     * | Field | Default value | Value and description |
     * | --- | --- | --- |
     * | `enabled` | `false` | Specifies whether elastic scaling is enabled. |
     * | `minSandboxCount` | `1` | The minimum number of instances. Valid values: 0 to 100. |
     * | `maxSandboxCount` | `10` | The maximum number of instances. Valid values: 0 to 100. The value cannot be less than the minimum number. |
     * | `maxConcurrentSessionsPerSandbox` | `20` | The maximum number of concurrent sessions per instance. Valid values: 1 to 20. |
     * | `sessionTtlSeconds` | `600` | The maximum idle time of a session, in seconds. Valid values: 60 to 86400. |
     * If you only modify instructions, models, or skills, you can omit the entire `runtime` to keep the original runtime configuration unchanged. The minimum and maximum numbers of instances are configuration borders. You can query the actual number through `sandboxPhaseCounts`.
     * ### Environment and mounts
     * Omitting the entire `environment` retains the original configuration. Submitting `environment={}` or `environment=null` clears the environment configuration. Environment variable values must be strings, and variable names must be non-empty and unique.
     * The total number of `ossMounts` and `agenticFsMounts` cannot exceed 10. The mount target `mountPath` uses an absolute path in the container, such as `/data/train`. It cannot conflict with platform reserved directories, and cannot be duplicated or form parent-child directory overwrites.
     * The `path` for OSS mounts must be a non-empty directory prefix in the bucket. For AgenticFS mounts, `server` is the access point domain name, without a protocol, port, or path. `path` is an existing non-empty relative directory in the access point. You cannot mount the root directory of the access point. If `readOnly` is omitted, the default value is `false`.
     * ### Query update results
     * A successful response indicates that the update request has been accepted. Call [GetManagedAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetManagedAgent) to query `latestSpecVersion`, `latestVersionStatus`, `status`, and `sandboxPhaseCounts` to confirm the configuration processing and instance status. `clientToken` does not provide idempotency guarantees at this time.
     *
     * @param request - UpdateManagedAgentRequest
     * @returns UpdateManagedAgentResponse
     */
    updateManagedAgent(workspaceId: string, agentId: string, request: $_model.UpdateManagedAgentRequest): Promise<$_model.UpdateManagedAgentResponse>;
    /**
     * Updates the address, description, authentication, or Swagger configuration of a specified MCP service. The MCP type and protocol cannot be modified after creation. The update process is asynchronous.
     *
     * @remarks
     * Updates the address, description, authentication, or Swagger configuration of an MCP service. The service type and protocol cannot be modified after creation.
     * The update process is executed asynchronously. After submission, you can call the [GetMcp](https://api.aliyun.com/document/AgentCore/2026-08-04/GetMcp) operation to query the processing result. The `clientToken` parameter does not currently provide idempotency guarantees. If the request result is not confirmed, query the current configuration and status first.
     *
     * @param tmpReq - UpdateMcpRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateMcpResponse
     */
    updateMcpWithOptions(workspaceId: string, mcpServerId: string, tmpReq: $_model.UpdateMcpRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMcpResponse>;
    /**
     * Updates the address, description, authentication, or Swagger configuration of a specified MCP service. The MCP type and protocol cannot be modified after creation. The update process is asynchronous.
     *
     * @remarks
     * Updates the address, description, authentication, or Swagger configuration of an MCP service. The service type and protocol cannot be modified after creation.
     * The update process is executed asynchronously. After submission, you can call the [GetMcp](https://api.aliyun.com/document/AgentCore/2026-08-04/GetMcp) operation to query the processing result. The `clientToken` parameter does not currently provide idempotency guarantees. If the request result is not confirmed, query the current configuration and status first.
     *
     * @param request - UpdateMcpRequest
     * @returns UpdateMcpResponse
     */
    updateMcp(workspaceId: string, mcpServerId: string, request: $_model.UpdateMcpRequest): Promise<$_model.UpdateMcpResponse>;
    /**
     * Updates the parameters of an MCP service based on a template.
     *
     * @remarks
     * Updates parameters based on the marketplace template bound to the MCP service to adjust the configuration of the templated service. This operation uses the same template version that was bound when the MCP service was created to update the parameters exposed by the schema, without upgrading the template version.
     *
     * @param tmpReq - UpdateMcpTemplateConfigRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateMcpTemplateConfigResponse
     */
    updateMcpTemplateConfigWithOptions(workspaceId: string, mcpServerId: string, tmpReq: $_model.UpdateMcpTemplateConfigRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMcpTemplateConfigResponse>;
    /**
     * Updates the parameters of an MCP service based on a template.
     *
     * @remarks
     * Updates parameters based on the marketplace template bound to the MCP service to adjust the configuration of the templated service. This operation uses the same template version that was bound when the MCP service was created to update the parameters exposed by the schema, without upgrading the template version.
     *
     * @param request - UpdateMcpTemplateConfigRequest
     * @returns UpdateMcpTemplateConfigResponse
     */
    updateMcpTemplateConfig(workspaceId: string, mcpServerId: string, request: $_model.UpdateMcpTemplateConfigRequest): Promise<$_model.UpdateMcpTemplateConfigResponse>;
    /**
     * Updates the long-term memory text or metadata based on the memory ID.
     *
     * @remarks
     * Updates the long-term memory text or metadata based on the memory ID.
     *
     * @param tmpReq - UpdateMemoryRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateMemoryResponse
     */
    updateMemoryWithOptions(workspaceId: string, memoryStoreName: string, memoryId: string, tmpReq: $_model.UpdateMemoryRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMemoryResponse>;
    /**
     * Updates the long-term memory text or metadata based on the memory ID.
     *
     * @remarks
     * Updates the long-term memory text or metadata based on the memory ID.
     *
     * @param request - UpdateMemoryRequest
     * @returns UpdateMemoryResponse
     */
    updateMemory(workspaceId: string, memoryStoreName: string, memoryId: string, request: $_model.UpdateMemoryRequest): Promise<$_model.UpdateMemoryResponse>;
    /**
     * Updates a memory store.
     *
     * @remarks
     * Updates the mutable configurations of a long-term memory store to adjust the settings of an existing memory store.
     *
     * @param tmpReq - UpdateMemoryStoreRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateMemoryStoreResponse
     */
    updateMemoryStoreWithOptions(workspaceId: string, memoryStoreName: string, tmpReq: $_model.UpdateMemoryStoreRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMemoryStoreResponse>;
    /**
     * Updates a memory store.
     *
     * @remarks
     * Updates the mutable configurations of a long-term memory store to adjust the settings of an existing memory store.
     *
     * @param request - UpdateMemoryStoreRequest
     * @returns UpdateMemoryStoreResponse
     */
    updateMemoryStore(workspaceId: string, memoryStoreName: string, request: $_model.UpdateMemoryStoreRequest): Promise<$_model.UpdateMemoryStoreResponse>;
    /**
     * Updates the description, context token limit, maximum output token count, or capability configurations of a specified model.
     *
     * @remarks
     * Updates the description, context length, maximum output length, or capability configurations of a model.
     * ### Update rules
     * - Provide at least one non-`null` field among description, contextSize, maxTokens, and capabilities.
     * - Omitted fields or fields passed as `null` retain their original values.
     * - The capabilities object is replaced as a whole. Unsubmitted capabilities within the object are treated as `false`.
     * ### Impact on agents
     * After contextSize, maxTokens, or capabilities actually change, the platform asynchronously refreshes the managed Harness agents that reference this model, as well as the managed agents that use platform models (`modelSource=PLATFORM`). Modifying only the description or repeatedly submitting the same configuration does not trigger a refresh.
     * A successful response indicates that the model configuration has been saved. Verify the configuration by calling [GetModel](https://api.aliyun.com/document/AgentCore/2026-08-04/GetModel), and then check whether the configuration takes effect by calling the corresponding agent details API operation.
     *
     * @param tmpReq - UpdateModelRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateModelResponse
     */
    updateModelWithOptions(workspaceId: string, modelId: string, tmpReq: $_model.UpdateModelRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateModelResponse>;
    /**
     * Updates the description, context token limit, maximum output token count, or capability configurations of a specified model.
     *
     * @remarks
     * Updates the description, context length, maximum output length, or capability configurations of a model.
     * ### Update rules
     * - Provide at least one non-`null` field among description, contextSize, maxTokens, and capabilities.
     * - Omitted fields or fields passed as `null` retain their original values.
     * - The capabilities object is replaced as a whole. Unsubmitted capabilities within the object are treated as `false`.
     * ### Impact on agents
     * After contextSize, maxTokens, or capabilities actually change, the platform asynchronously refreshes the managed Harness agents that reference this model, as well as the managed agents that use platform models (`modelSource=PLATFORM`). Modifying only the description or repeatedly submitting the same configuration does not trigger a refresh.
     * A successful response indicates that the model configuration has been saved. Verify the configuration by calling [GetModel](https://api.aliyun.com/document/AgentCore/2026-08-04/GetModel), and then check whether the configuration takes effect by calling the corresponding agent details API operation.
     *
     * @param request - UpdateModelRequest
     * @returns UpdateModelResponse
     */
    updateModel(workspaceId: string, modelId: string, request: $_model.UpdateModelRequest): Promise<$_model.UpdateModelResponse>;
    /**
     * Updates the mutable configurations of a specified model connection and resubmits the publishing task. The invocation protocol cannot be modified after creation.
     *
     * @remarks
     * Updates the mutable configurations of a specified model connection and resubmits the publishing task. The invocation protocol cannot be modified after creation.
     * The request body must contain at least one non-null update field. If a field is omitted or set to null, the original value is retained. When apiKeys is submitted, the existing keys are completely replaced by the new list.
     *
     * @param tmpReq - UpdateModelConnectionRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateModelConnectionResponse
     */
    updateModelConnectionWithOptions(workspaceId: string, connectionId: string, tmpReq: $_model.UpdateModelConnectionRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateModelConnectionResponse>;
    /**
     * Updates the mutable configurations of a specified model connection and resubmits the publishing task. The invocation protocol cannot be modified after creation.
     *
     * @remarks
     * Updates the mutable configurations of a specified model connection and resubmits the publishing task. The invocation protocol cannot be modified after creation.
     * The request body must contain at least one non-null update field. If a field is omitted or set to null, the original value is retained. When apiKeys is submitted, the existing keys are completely replaced by the new list.
     *
     * @param request - UpdateModelConnectionRequest
     * @returns UpdateModelConnectionResponse
     */
    updateModelConnection(workspaceId: string, connectionId: string, request: $_model.UpdateModelConnectionRequest): Promise<$_model.UpdateModelConnectionResponse>;
    /**
     * Updates the business tags of a specified skill. Other attributes that are not specified remain unchanged.
     *
     * @remarks
     * Updates the business tags of a specified skill. Other attributes that are not specified remain unchanged.
     *
     * @param tmpReq - UpdateSkillBizTagsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateSkillBizTagsResponse
     */
    updateSkillBizTagsWithOptions(workspaceId: string, skillName: string, tmpReq: $_model.UpdateSkillBizTagsRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSkillBizTagsResponse>;
    /**
     * Updates the business tags of a specified skill. Other attributes that are not specified remain unchanged.
     *
     * @remarks
     * Updates the business tags of a specified skill. Other attributes that are not specified remain unchanged.
     *
     * @param request - UpdateSkillBizTagsRequest
     * @returns UpdateSkillBizTagsResponse
     */
    updateSkillBizTags(workspaceId: string, skillName: string, request: $_model.UpdateSkillBizTagsRequest): Promise<$_model.UpdateSkillBizTagsResponse>;
    /**
     * Updates the version labels and their mappings for a specified skill.
     *
     * @remarks
     * Updates the version labels and their mappings for a specified skill.
     *
     * @param tmpReq - UpdateSkillLabelsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateSkillLabelsResponse
     */
    updateSkillLabelsWithOptions(workspaceId: string, skillName: string, tmpReq: $_model.UpdateSkillLabelsRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSkillLabelsResponse>;
    /**
     * Updates the version labels and their mappings for a specified skill.
     *
     * @remarks
     * Updates the version labels and their mappings for a specified skill.
     *
     * @param request - UpdateSkillLabelsRequest
     * @returns UpdateSkillLabelsResponse
     */
    updateSkillLabels(workspaceId: string, skillName: string, request: $_model.UpdateSkillLabelsRequest): Promise<$_model.UpdateSkillLabelsResponse>;
    /**
     * Updates the visibility scope of a specified skill.
     *
     * @remarks
     * Updates the visibility scope of a specified skill.
     *
     * @param tmpReq - UpdateSkillScopeRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateSkillScopeResponse
     */
    updateSkillScopeWithOptions(workspaceId: string, skillName: string, tmpReq: $_model.UpdateSkillScopeRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSkillScopeResponse>;
    /**
     * Updates the visibility scope of a specified skill.
     *
     * @remarks
     * Updates the visibility scope of a specified skill.
     *
     * @param request - UpdateSkillScopeRequest
     * @returns UpdateSkillScopeResponse
     */
    updateSkillScope(workspaceId: string, skillName: string, request: $_model.UpdateSkillScopeRequest): Promise<$_model.UpdateSkillScopeResponse>;
    /**
     * Updates the description and members of a specified team. When users or agents are provided, the corresponding member list is replaced based on full overwrite semantics. Member lists that are not provided remain unchanged. The team name cannot be modified after creation.
     *
     * @remarks
     * Updates the description and members of a specified team.
     *
     * @param tmpReq - UpdateTeamRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateTeamResponse
     */
    updateTeamWithOptions(workspaceId: string, teamId: string, tmpReq: $_model.UpdateTeamRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTeamResponse>;
    /**
     * Updates the description and members of a specified team. When users or agents are provided, the corresponding member list is replaced based on full overwrite semantics. Member lists that are not provided remain unchanged. The team name cannot be modified after creation.
     *
     * @remarks
     * Updates the description and members of a specified team.
     *
     * @param request - UpdateTeamRequest
     * @returns UpdateTeamResponse
     */
    updateTeam(workspaceId: string, teamId: string, request: $_model.UpdateTeamRequest): Promise<$_model.UpdateTeamResponse>;
    /**
     * Updates the display name, email address, or note of a specified user. You must specify at least one of the displayName, email, and note parameters. Unspecified attributes remain unchanged. The username cannot be modified after creation.
     *
     * @remarks
     * Updates the display name, email address, or note of a specified user.
     *
     * @param tmpReq - UpdateUserRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateUserResponse
     */
    updateUserWithOptions(workspaceId: string, agentCoreUserId: string, tmpReq: $_model.UpdateUserRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserResponse>;
    /**
     * Updates the display name, email address, or note of a specified user. You must specify at least one of the displayName, email, and note parameters. Unspecified attributes remain unchanged. The username cannot be modified after creation.
     *
     * @remarks
     * Updates the display name, email address, or note of a specified user.
     *
     * @param request - UpdateUserRequest
     * @returns UpdateUserResponse
     */
    updateUser(workspaceId: string, agentCoreUserId: string, request: $_model.UpdateUserRequest): Promise<$_model.UpdateUserResponse>;
    /**
     * Updates the name or network configuration of a workspace. Only workspaces in the Initialized state can be updated. The Status, TenantId, and RegionId fields are maintained by the server and cannot be modified through this operation.
     *
     * @remarks
     * Modifies the name or network configuration of a workspace to adjust workspace information and the private network access environment for agents. The workspace must be in the `Initialized` state. To enable VPC networking, set `Enabled` in the network configuration to `true` and provide both `VpcId` and at least one `VSwitchIds`.
     *
     * @param tmpReq - UpdateWorkspaceRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateWorkspaceResponse
     */
    updateWorkspaceWithOptions(workspaceId: string, tmpReq: $_model.UpdateWorkspaceRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWorkspaceResponse>;
    /**
     * Updates the name or network configuration of a workspace. Only workspaces in the Initialized state can be updated. The Status, TenantId, and RegionId fields are maintained by the server and cannot be modified through this operation.
     *
     * @remarks
     * Modifies the name or network configuration of a workspace to adjust workspace information and the private network access environment for agents. The workspace must be in the `Initialized` state. To enable VPC networking, set `Enabled` in the network configuration to `true` and provide both `VpcId` and at least one `VSwitchIds`.
     *
     * @param request - UpdateWorkspaceRequest
     * @returns UpdateWorkspaceResponse
     */
    updateWorkspace(workspaceId: string, request: $_model.UpdateWorkspaceRequest): Promise<$_model.UpdateWorkspaceResponse>;
    /**
     * Retrieves an uploaded AgentSpec ZIP package from OSS, parses it, and imports the AgentSpec into the current workspace.
     *
     * @remarks
     * Retrieves an uploaded agent template ZIP package from OSS, parses it, and imports the agent template into the current workspace.
     *
     * @param tmpReq - UploadAgentSpecViaOssRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UploadAgentSpecViaOssResponse
     */
    uploadAgentSpecViaOssWithOptions(workspaceId: string, tmpReq: $_model.UploadAgentSpecViaOssRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.UploadAgentSpecViaOssResponse>;
    /**
     * Retrieves an uploaded AgentSpec ZIP package from OSS, parses it, and imports the AgentSpec into the current workspace.
     *
     * @remarks
     * Retrieves an uploaded agent template ZIP package from OSS, parses it, and imports the agent template into the current workspace.
     *
     * @param request - UploadAgentSpecViaOssRequest
     * @returns UploadAgentSpecViaOssResponse
     */
    uploadAgentSpecViaOss(workspaceId: string, request: $_model.UploadAgentSpecViaOssRequest): Promise<$_model.UploadAgentSpecViaOssResponse>;
    /**
     * Imports a skill into the current workspace by retrieving and parsing an uploaded skill ZIP package from OSS.
     *
     * @remarks
     * Imports a skill into the current workspace by retrieving and parsing an uploaded skill ZIP package from OSS.
     *
     * @param tmpReq - UploadSkillViaOssRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UploadSkillViaOssResponse
     */
    uploadSkillViaOssWithOptions(workspaceId: string, tmpReq: $_model.UploadSkillViaOssRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.UploadSkillViaOssResponse>;
    /**
     * Imports a skill into the current workspace by retrieving and parsing an uploaded skill ZIP package from OSS.
     *
     * @remarks
     * Imports a skill into the current workspace by retrieving and parsing an uploaded skill ZIP package from OSS.
     *
     * @param request - UploadSkillViaOssRequest
     * @returns UploadSkillViaOssResponse
     */
    uploadSkillViaOss(workspaceId: string, request: $_model.UploadSkillViaOssRequest): Promise<$_model.UploadSkillViaOssResponse>;
    /**
     * Validates the read permissions of the workspace role on a specified OSS code package object, and returns the source URI and package information.
     *
     * @remarks
     * Checks the read conditions and package information of a specified OSS object before submitting the code package for deployment, and obtains the source URI for subsequent deployment.
     * ### Request and validation scope
     * In the JSON request body, specify `ossBucketName` and the complete `ossObjectName`. Do not specify the HTTPS download URL. The object extension must be ZIP or TAR.GZ, and the compressed size must be between 1 and 500,000,000 bytes.
     * This operation uses the workspace role to check the object metadata and read permissions, and returns the `sourceUri`, file name, size, and format.
     * ### Subsequent deployment
     * Passing the validation indicates that the object check is successful, but does not mean that the archive content is complete or ready to start. Submit the returned `sourceUri` to [CreateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateCustomAgent) or [UpdateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateCustomAgent). The system will recheck the object and save a fixed copy upon submission.
     * This operation is an optional precheck and is not a required step for creating or updating an agent.
     *
     * @param tmpReq - ValidateAgentCodePackageFromOssRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ValidateAgentCodePackageFromOssResponse
     */
    validateAgentCodePackageFromOssWithOptions(workspaceId: string, tmpReq: $_model.ValidateAgentCodePackageFromOssRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.ValidateAgentCodePackageFromOssResponse>;
    /**
     * Validates the read permissions of the workspace role on a specified OSS code package object, and returns the source URI and package information.
     *
     * @remarks
     * Checks the read conditions and package information of a specified OSS object before submitting the code package for deployment, and obtains the source URI for subsequent deployment.
     * ### Request and validation scope
     * In the JSON request body, specify `ossBucketName` and the complete `ossObjectName`. Do not specify the HTTPS download URL. The object extension must be ZIP or TAR.GZ, and the compressed size must be between 1 and 500,000,000 bytes.
     * This operation uses the workspace role to check the object metadata and read permissions, and returns the `sourceUri`, file name, size, and format.
     * ### Subsequent deployment
     * Passing the validation indicates that the object check is successful, but does not mean that the archive content is complete or ready to start. Submit the returned `sourceUri` to [CreateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateCustomAgent) or [UpdateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateCustomAgent). The system will recheck the object and save a fixed copy upon submission.
     * This operation is an optional precheck and is not a required step for creating or updating an agent.
     *
     * @param request - ValidateAgentCodePackageFromOssRequest
     * @returns ValidateAgentCodePackageFromOssResponse
     */
    validateAgentCodePackageFromOss(workspaceId: string, request: $_model.ValidateAgentCodePackageFromOssRequest): Promise<$_model.ValidateAgentCodePackageFromOssResponse>;
    /**
     * Queries the binding status of the authorization policy for the code package source bucket to the current workspace resource role.
     *
     * @remarks
     * Queries whether the read authorization for the code package source bucket is bound to the workspace resource role to determine whether supplementary authorization is required.
     * ### Query results
     * `ossBucketName` is passed as a query parameter. `authorizationStatus=AUTHORIZED` indicates that the policy is bound, and `UNAUTHORIZED` indicates that it is not bound.
     * A bound policy does not mean that a specific code package object definitely exists or is readable. To check an object, call [ValidateAgentCodePackageFromOss](https://api.aliyun.com/document/AgentCore/2026-08-04/ValidateAgentCodePackageFromOss). To obtain an authorization link, call [GetAgentCodePackageOssRamAuthorizeUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetAgentCodePackageOssRamAuthorizeUrl).
     *
     * @param request - VerifyAgentCodePackageOssRamAuthorizationRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns VerifyAgentCodePackageOssRamAuthorizationResponse
     */
    verifyAgentCodePackageOssRamAuthorizationWithOptions(workspaceId: string, request: $_model.VerifyAgentCodePackageOssRamAuthorizationRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyAgentCodePackageOssRamAuthorizationResponse>;
    /**
     * Queries the binding status of the authorization policy for the code package source bucket to the current workspace resource role.
     *
     * @remarks
     * Queries whether the read authorization for the code package source bucket is bound to the workspace resource role to determine whether supplementary authorization is required.
     * ### Query results
     * `ossBucketName` is passed as a query parameter. `authorizationStatus=AUTHORIZED` indicates that the policy is bound, and `UNAUTHORIZED` indicates that it is not bound.
     * A bound policy does not mean that a specific code package object definitely exists or is readable. To check an object, call [ValidateAgentCodePackageFromOss](https://api.aliyun.com/document/AgentCore/2026-08-04/ValidateAgentCodePackageFromOss). To obtain an authorization link, call [GetAgentCodePackageOssRamAuthorizeUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetAgentCodePackageOssRamAuthorizeUrl).
     *
     * @param request - VerifyAgentCodePackageOssRamAuthorizationRequest
     * @returns VerifyAgentCodePackageOssRamAuthorizationResponse
     */
    verifyAgentCodePackageOssRamAuthorization(workspaceId: string, request: $_model.VerifyAgentCodePackageOssRamAuthorizationRequest): Promise<$_model.VerifyAgentCodePackageOssRamAuthorizationResponse>;
    /**
     * Validates whether one or more Qoder service account keys are available at a specified site. This operation does not save the keys or modify the connector status.
     *
     * @remarks
     * Validates Qoder service account keys at a specified site to check whether the credentials are available before you enable or update a connector. You can submit multiple keys at the same time. The response returns a list of invalid service account keys.
     *
     * @param tmpReq - VerifyConnectorRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns VerifyConnectorResponse
     */
    verifyConnectorWithOptions(workspaceId: string, connectorName: string, tmpReq: $_model.VerifyConnectorRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyConnectorResponse>;
    /**
     * Validates whether one or more Qoder service account keys are available at a specified site. This operation does not save the keys or modify the connector status.
     *
     * @remarks
     * Validates Qoder service account keys at a specified site to check whether the credentials are available before you enable or update a connector. You can submit multiple keys at the same time. The response returns a list of invalid service account keys.
     *
     * @param request - VerifyConnectorRequest
     * @returns VerifyConnectorResponse
     */
    verifyConnector(workspaceId: string, connectorName: string, request: $_model.VerifyConnectorRequest): Promise<$_model.VerifyConnectorResponse>;
    /**
     * Queries the authorization status of a workspace resource role for a specified ACR Enterprise Edition repository.
     *
     * @remarks
     * Queries the authorization status of a workspace resource role for a specified ACR Enterprise Edition image repository to determine whether to proceed with image preparation or grant additional authorizations.
     * ### Request parameters
     * The acrInstanceId, namespace, and repository parameters use query parameters and must be consistent with the target used when obtaining the authorization URL.
     * ### Authorization and deployment
     * authorizationStatus=AUTHORIZED indicates that the target authorization for the selected role is satisfied, and UNAUTHORIZED indicates that it is not yet satisfied. If authorization is required, call [GetWorkspaceAcrRamAuthorizeUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetWorkspaceAcrRamAuthorizeUrl) and confirm on the RAM page.
     * The authorization status is checked separately from whether the specific image tag exists and whether the pull network is reachable.
     *
     * @param request - VerifyWorkspaceAcrRamAuthorizationRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns VerifyWorkspaceAcrRamAuthorizationResponse
     */
    verifyWorkspaceAcrRamAuthorizationWithOptions(workspaceId: string, request: $_model.VerifyWorkspaceAcrRamAuthorizationRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyWorkspaceAcrRamAuthorizationResponse>;
    /**
     * Queries the authorization status of a workspace resource role for a specified ACR Enterprise Edition repository.
     *
     * @remarks
     * Queries the authorization status of a workspace resource role for a specified ACR Enterprise Edition image repository to determine whether to proceed with image preparation or grant additional authorizations.
     * ### Request parameters
     * The acrInstanceId, namespace, and repository parameters use query parameters and must be consistent with the target used when obtaining the authorization URL.
     * ### Authorization and deployment
     * authorizationStatus=AUTHORIZED indicates that the target authorization for the selected role is satisfied, and UNAUTHORIZED indicates that it is not yet satisfied. If authorization is required, call [GetWorkspaceAcrRamAuthorizeUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetWorkspaceAcrRamAuthorizeUrl) and confirm on the RAM page.
     * The authorization status is checked separately from whether the specific image tag exists and whether the pull network is reachable.
     *
     * @param request - VerifyWorkspaceAcrRamAuthorizationRequest
     * @returns VerifyWorkspaceAcrRamAuthorizationResponse
     */
    verifyWorkspaceAcrRamAuthorization(workspaceId: string, request: $_model.VerifyWorkspaceAcrRamAuthorizationRequest): Promise<$_model.VerifyWorkspaceAcrRamAuthorizationResponse>;
    /**
     * Queries whether the workspace resource role has been granted access to the target NAS (AgenticFS) access point for subsequent Agent mount configurations.
     *
     * @remarks
     * Checks whether the workspace has been granted access to the specified AgenticFS access point for subsequent Agent file mount configurations.
     * [AgenticFS](https://www.alibabacloud.com/help/en/nas/product-overview/agenticfs-overview) is a storage type of Apsara File Storage NAS designed for AI agents. Access points provide mount entries for file spaces.
     * ### Query and what to do next
     * For the `server` query parameter, enter the access point domain name without the protocol, port, or path. Keep it consistent with the value used when obtaining the authorization link.
     * | `authorizationStatus` | What to do next |
     * | --- | --- |
     * | `AUTHORIZED` | Authorization is completed. You can continue to configure `agenticFsMounts` for the Agent. |
     * | `UNAUTHORIZED` | Obtain the link through [GetWorkspaceAgenticFsMountRamAuthorizeUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetWorkspaceAgenticFsMountRamAuthorizeUrl), complete the authorization, and then query again. |
     * After authorization is completed, you must still commit the mount configuration in the Agent and check the configuration processing result through the Agent details. The mount folder must already exist, the access point must be located in the VPC associated with the workspace, and VPC access must be enabled for the Agent.
     *
     * @param request - VerifyWorkspaceAgenticFsMountRamAuthorizationRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns VerifyWorkspaceAgenticFsMountRamAuthorizationResponse
     */
    verifyWorkspaceAgenticFsMountRamAuthorizationWithOptions(workspaceId: string, request: $_model.VerifyWorkspaceAgenticFsMountRamAuthorizationRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyWorkspaceAgenticFsMountRamAuthorizationResponse>;
    /**
     * Queries whether the workspace resource role has been granted access to the target NAS (AgenticFS) access point for subsequent Agent mount configurations.
     *
     * @remarks
     * Checks whether the workspace has been granted access to the specified AgenticFS access point for subsequent Agent file mount configurations.
     * [AgenticFS](https://www.alibabacloud.com/help/en/nas/product-overview/agenticfs-overview) is a storage type of Apsara File Storage NAS designed for AI agents. Access points provide mount entries for file spaces.
     * ### Query and what to do next
     * For the `server` query parameter, enter the access point domain name without the protocol, port, or path. Keep it consistent with the value used when obtaining the authorization link.
     * | `authorizationStatus` | What to do next |
     * | --- | --- |
     * | `AUTHORIZED` | Authorization is completed. You can continue to configure `agenticFsMounts` for the Agent. |
     * | `UNAUTHORIZED` | Obtain the link through [GetWorkspaceAgenticFsMountRamAuthorizeUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetWorkspaceAgenticFsMountRamAuthorizeUrl), complete the authorization, and then query again. |
     * After authorization is completed, you must still commit the mount configuration in the Agent and check the configuration processing result through the Agent details. The mount folder must already exist, the access point must be located in the VPC associated with the workspace, and VPC access must be enabled for the Agent.
     *
     * @param request - VerifyWorkspaceAgenticFsMountRamAuthorizationRequest
     * @returns VerifyWorkspaceAgenticFsMountRamAuthorizationResponse
     */
    verifyWorkspaceAgenticFsMountRamAuthorization(workspaceId: string, request: $_model.VerifyWorkspaceAgenticFsMountRamAuthorizationRequest): Promise<$_model.VerifyWorkspaceAgenticFsMountRamAuthorizationResponse>;
    /**
     * Verifies the OSS mount authorization for a workspace, or checks and updates the authorization status of the default OSS storage for the workspace.
     *
     * @remarks
     * Verifies the OSS mount authorization for a workspace, or checks and updates the authorization status of the default OSS storage for the workspace.
     * ### Two query scopes
     * | Query parameter `bucketName` | Behavior |
     * | --- | --- |
     * | Bucket name provided | Checks the mount authorization of the bucket for the workspace resource role without modifying the default OSS binding. |
     * | Omitted | Checks the authorization of the default private OSS storage for the workspace and updates its authorization status. |
     * ### Return status
     * `AUTHORIZED` indicates that authorization is granted, `UNAUTHORIZED` indicates that authorization is not granted, and `NOT_REQUIRED` indicates that authorization is not required. The authorization status does not indicate whether the specific mount directory exists or whether the instance has completed the mount.
     * If the goal is to read from a code package source, use [VerifyAgentCodePackageOssRamAuthorization](https://api.aliyun.com/document/AgentCore/2026-08-04/VerifyAgentCodePackageOssRamAuthorization). Do not mix code package verification with runtime directory mounting.
     *
     * @param request - VerifyWorkspaceOssMountRamAuthorizationRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns VerifyWorkspaceOssMountRamAuthorizationResponse
     */
    verifyWorkspaceOssMountRamAuthorizationWithOptions(workspaceId: string, request: $_model.VerifyWorkspaceOssMountRamAuthorizationRequest, headers: {
        [key: string]: string;
    }, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyWorkspaceOssMountRamAuthorizationResponse>;
    /**
     * Verifies the OSS mount authorization for a workspace, or checks and updates the authorization status of the default OSS storage for the workspace.
     *
     * @remarks
     * Verifies the OSS mount authorization for a workspace, or checks and updates the authorization status of the default OSS storage for the workspace.
     * ### Two query scopes
     * | Query parameter `bucketName` | Behavior |
     * | --- | --- |
     * | Bucket name provided | Checks the mount authorization of the bucket for the workspace resource role without modifying the default OSS binding. |
     * | Omitted | Checks the authorization of the default private OSS storage for the workspace and updates its authorization status. |
     * ### Return status
     * `AUTHORIZED` indicates that authorization is granted, `UNAUTHORIZED` indicates that authorization is not granted, and `NOT_REQUIRED` indicates that authorization is not required. The authorization status does not indicate whether the specific mount directory exists or whether the instance has completed the mount.
     * If the goal is to read from a code package source, use [VerifyAgentCodePackageOssRamAuthorization](https://api.aliyun.com/document/AgentCore/2026-08-04/VerifyAgentCodePackageOssRamAuthorization). Do not mix code package verification with runtime directory mounting.
     *
     * @param request - VerifyWorkspaceOssMountRamAuthorizationRequest
     * @returns VerifyWorkspaceOssMountRamAuthorizationResponse
     */
    verifyWorkspaceOssMountRamAuthorization(workspaceId: string, request: $_model.VerifyWorkspaceOssMountRamAuthorizationRequest): Promise<$_model.VerifyWorkspaceOssMountRamAuthorizationResponse>;
}
