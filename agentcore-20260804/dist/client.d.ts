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
     * Writes messages or text to a memory store. By default, sync is set to true, which means the operation synchronously waits for extraction and returns only memories (an empty array is allowed). If sync is set to false, the operation returns only a taskId, which you can query by calling GetMemoryTask.
     *
     * @remarks
     * Writes messages or text to a memory store. By default, sync is set to true, which means the operation synchronously waits for extraction and returns only memories (an empty array is allowed). If sync is set to false, the operation returns only a taskId, which you can query by calling GetMemoryTask.
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
     * Writes messages or text to a memory store. By default, sync is set to true, which means the operation synchronously waits for extraction and returns only memories (an empty array is allowed). If sync is set to false, the operation returns only a taskId, which you can query by calling GetMemoryTask.
     *
     * @remarks
     * Writes messages or text to a memory store. By default, sync is set to true, which means the operation synchronously waits for extraction and returns only memories (an empty array is allowed). If sync is set to false, the operation returns only a taskId, which you can query by calling GetMemoryTask.
     *
     * @param request - AddMemoriesRequest
     * @returns AddMemoriesResponse
     */
    addMemories(workspaceId: string, memoryStoreName: string, request: $_model.AddMemoriesRequest): Promise<$_model.AddMemoriesResponse>;
    /**
     * Deletes multiple models in a specified workspace. If any model is in use, the entire batch request fails.
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
     * Deletes multiple models in a specified workspace. If any model is in use, the entire batch request fails.
     *
     * @param request - BatchDeleteModelsRequest
     * @returns BatchDeleteModelsResponse
     */
    batchDeleteModels(workspaceId: string, request: $_model.BatchDeleteModelsRequest): Promise<$_model.BatchDeleteModelsResponse>;
    /**
     * Uploads skill ZIP packages in batches through OSS and returns the processing result for each skill.
     *
     * @remarks
     * ## Request description
     * Uploads skill ZIP packages in batches through OSS and returns the processing result for each skill.
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
     * Uploads skill ZIP packages in batches through OSS and returns the processing result for each skill.
     *
     * @remarks
     * ## Request description
     * Uploads skill ZIP packages in batches through OSS and returns the processing result for each skill.
     *
     * @param request - BatchUploadSkillsViaOssRequest
     * @returns BatchUploadSkillsViaOssResponse
     */
    batchUploadSkillsViaOss(workspaceId: string, request: $_model.BatchUploadSkillsViaOssRequest): Promise<$_model.BatchUploadSkillsViaOssResponse>;
    /**
     * Converts an MCP to free-edit mode.
     *
     * @remarks
     * Disables template usage constraints. After the conversion, the MCP retains its source and tags, but no longer appears on the usage page.
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
     * Converts an MCP to free-edit mode.
     *
     * @remarks
     * Disables template usage constraints. After the conversion, the MCP retains its source and tags, but no longer appears on the usage page.
     *
     * @param request - ConvertMcpToFreeEditRequest
     * @returns ConvertMcpToFreeEditResponse
     */
    convertMcpToFreeEdit(workspaceId: string, mcpServerId: string, request: $_model.ConvertMcpToFreeEditRequest): Promise<$_model.ConvertMcpToFreeEditResponse>;
    /**
     * Creates an IM channel for a specified agent and binds it to a publicly accessible ServiceEndpoint.
     *
     * @remarks
     * Creates an IM channel for a specified agent and binds it to a publicly accessible ServiceEndpoint.
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
     * Creates an IM channel for a specified agent and binds it to a publicly accessible ServiceEndpoint.
     *
     * @remarks
     * Creates an IM channel for a specified agent and binds it to a publicly accessible ServiceEndpoint.
     *
     * @param request - CreateAgentIMChannelRequest
     * @returns CreateAgentIMChannelResponse
     */
    createAgentIMChannel(workspaceId: string, agentId: string, request: $_model.CreateAgentIMChannelRequest): Promise<$_model.CreateAgentIMChannelResponse>;
    /**
     * Creates an AgentSpec in a specified workspace and generates the first draft version. Returns a resource conflict error if an AgentSpec with the same name already exists.
     *
     * @remarks
     * ## Request description
     * Creates an AgentSpec in a specified workspace and generates the first draft version. Returns a resource conflict error if an AgentSpec with the same name already exists.
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
     * ## Request description
     * Creates an AgentSpec in a specified workspace and generates the first draft version. Returns a resource conflict error if an AgentSpec with the same name already exists.
     *
     * @param request - CreateAgentSpecRequest
     * @returns CreateAgentSpecResponse
     */
    createAgentSpec(workspaceId: string, request: $_model.CreateAgentSpecRequest): Promise<$_model.CreateAgentSpecResponse>;
    /**
     * Creates a new draft version for an existing AgentSpec. The AgentSpec must exist and must not have a draft currently being edited.
     *
     * @remarks
     * ## Request description
     * Creates a new draft version for an existing AgentSpec. The AgentSpec must exist and must not have a draft currently being edited.
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
     * Creates a new draft version for an existing AgentSpec. The AgentSpec must exist and must not have a draft currently being edited.
     *
     * @remarks
     * ## Request description
     * Creates a new draft version for an existing AgentSpec. The AgentSpec must exist and must not have a draft currently being edited.
     *
     * @param request - CreateAgentSpecVersionRequest
     * @returns CreateAgentSpecVersionResponse
     */
    createAgentSpecVersion(workspaceId: string, agentSpecName: string, request: $_model.CreateAgentSpecVersionRequest): Promise<$_model.CreateAgentSpecVersionResponse>;
    /**
     * Creates a credential in a specified workspace for authentication when an agent accesses external services. Currently, only the apiKey type is supported. The credential content is passed as a JSON string through credentialMetadata and can only be queried in a desensitized format after it is written.
     *
     * @remarks
     * Creates a credential in a workspace for authentication of services such as Connector.
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
     * Creates a credential in a specified workspace for authentication when an agent accesses external services. Currently, only the apiKey type is supported. The credential content is passed as a JSON string through credentialMetadata and can only be queried in a desensitized format after it is written.
     *
     * @remarks
     * Creates a credential in a workspace for authentication of services such as Connector.
     *
     * @param request - CreateCredentialRequest
     * @returns CreateCredentialResponse
     */
    createCredential(workspaceId: string, request: $_model.CreateCredentialRequest): Promise<$_model.CreateCredentialResponse>;
    /**
     * Creates a custom agent in a specified workspace by using a container image or a code package. The creation process is asynchronous. You can call the GetCustomAgent operation to query the deployment result.
     *
     * @remarks
     * Before you call this operation, prepare a writable workspace, a RAM role ARN, a container image or code package, and runtime configurations. You must specify the name, artifact, roleArn, and runtime parameters. The runtime parameter must include both compute and sessionPolicy.
     * To use the container mode, configure artifact.container and specify artifact.port. The image must have the required access permissions and be accessible over the network allowed by the workspace.
     * To use the code package pattern, specify artifact.port and the sourceUri, languageRuntime, and entrypoint parameters of artifact.code. Do not specify the container parameter at the same time. Dependencies must be packaged by the user. The supported formats are ZIP and TAR.GZ, and the compressed package size cannot exceed 500,000,000 bytes. You can call the ListAgentCodeRuntimes operation to query the runtime environment identity. The sourceUri parameter supports oss:// addresses or HTTPS object addresses of standard OSS public domain names, including signed URLs. To upload a local file, call the GetAgentCodePackageUploadUrl operation to obtain the upload URL, upload the file directly, and then commit the returned sourceUri.
     * When you submit a new code package source, the backend rechecks the read permissions, object, and size. The configuration is saved only after the transfer succeeds. If the transfer fails, the current configuration is not saved. Saved fixed packages can be reused. Set the client timeout to 210 seconds for code package requests. Archive integrity and secure decompression are checked at startup. A successful acceptance does not indicate that the agent is ready to run.
     * The creation process is asynchronous. A successful response indicates that the request is accepted. Use the returned agentId to call the GetCustomAgent operation and check the latestVersionStatus, latestExecutionError, and status parameters corresponding to latestSpecVersion to confirm the deployment result. After the deployment is ready, you can call the CreateServiceEndpoint operation to configure the access endpoint.
     * The clientToken parameter does not currently provide idempotency guarantees. Do not rely on this parameter to prevent duplicate requests. The healthyThreshold parameter for health checks does not currently take effect. Omit this parameter.
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
     * Creates a custom agent in a specified workspace by using a container image or a code package. The creation process is asynchronous. You can call the GetCustomAgent operation to query the deployment result.
     *
     * @remarks
     * Before you call this operation, prepare a writable workspace, a RAM role ARN, a container image or code package, and runtime configurations. You must specify the name, artifact, roleArn, and runtime parameters. The runtime parameter must include both compute and sessionPolicy.
     * To use the container mode, configure artifact.container and specify artifact.port. The image must have the required access permissions and be accessible over the network allowed by the workspace.
     * To use the code package pattern, specify artifact.port and the sourceUri, languageRuntime, and entrypoint parameters of artifact.code. Do not specify the container parameter at the same time. Dependencies must be packaged by the user. The supported formats are ZIP and TAR.GZ, and the compressed package size cannot exceed 500,000,000 bytes. You can call the ListAgentCodeRuntimes operation to query the runtime environment identity. The sourceUri parameter supports oss:// addresses or HTTPS object addresses of standard OSS public domain names, including signed URLs. To upload a local file, call the GetAgentCodePackageUploadUrl operation to obtain the upload URL, upload the file directly, and then commit the returned sourceUri.
     * When you submit a new code package source, the backend rechecks the read permissions, object, and size. The configuration is saved only after the transfer succeeds. If the transfer fails, the current configuration is not saved. Saved fixed packages can be reused. Set the client timeout to 210 seconds for code package requests. Archive integrity and secure decompression are checked at startup. A successful acceptance does not indicate that the agent is ready to run.
     * The creation process is asynchronous. A successful response indicates that the request is accepted. Use the returned agentId to call the GetCustomAgent operation and check the latestVersionStatus, latestExecutionError, and status parameters corresponding to latestSpecVersion to confirm the deployment result. After the deployment is ready, you can call the CreateServiceEndpoint operation to configure the access endpoint.
     * The clientToken parameter does not currently provide idempotency guarantees. Do not rely on this parameter to prevent duplicate requests. The healthyThreshold parameter for health checks does not currently take effect. Omit this parameter.
     *
     * @param request - CreateCustomAgentRequest
     * @returns CreateCustomAgentResponse
     */
    createCustomAgent(workspaceId: string, request: $_model.CreateCustomAgentRequest): Promise<$_model.CreateCustomAgentResponse>;
    /**
     * Creates an external agent in a specified workspace.
     *
     * @remarks
     * Creates an external agent in a specified workspace.
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
     * Creates an external agent in a specified workspace.
     *
     * @remarks
     * Creates an external agent in a specified workspace.
     *
     * @param request - CreateExternalAgentRequest
     * @returns CreateExternalAgentResponse
     */
    createExternalAgent(workspaceId: string, request: $_model.CreateExternalAgentRequest): Promise<$_model.CreateExternalAgentResponse>;
    /**
     * Creates the Bootstrap token and CMS configuration required to onboard a specified external agent.
     *
     * @remarks
     * Creates the Bootstrap token and CMS configuration required to onboard a specified external agent.
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
     * Creates the Bootstrap token and CMS configuration required to onboard a specified external agent.
     *
     * @remarks
     * Creates the Bootstrap token and CMS configuration required to onboard a specified external agent.
     *
     * @param request - CreateExternalAgentBootstrapTokenRequest
     * @returns CreateExternalAgentBootstrapTokenResponse
     */
    createExternalAgentBootstrapToken(workspaceId: string, agentId: string, request: $_model.CreateExternalAgentBootstrapTokenRequest): Promise<$_model.CreateExternalAgentBootstrapTokenResponse>;
    /**
     * Binds a DingTalk, Lark, or CustomSSO identity source to a workspace. CustomSSO only asynchronously initializes the shared user pool. SAML logon and SCIM synchronization are configured separately later.
     *
     * @remarks
     * ## Features and prerequisites
     * The WAITING_CONFIGURATION status also occupies the single external identity source quota for a workspace. CustomSSO (SAML/OIDC and SCIM) is mutually exclusive with DingTalk and Lark. SCIM reuses the CustomSSO binding and does not create a second identity source. Creating another type returns a 409 IdentityProviderAlreadyBound error. You can change the identity source only after the existing binding is unbound and removed.
     * A workspace can have only one external identity source binding. The identityProviderType parameter supports DingTalk, Lark, and CustomSSO. CustomSSO only initializes the shared user pool. Do not pass non-empty metadata, and do not pass true for loginEnabled or syncEnabled. Both switches are disabled by default. Protocols and SAML configurations are saved by using UpdateIdentityProvider. SCIM is configured by using a separate API operation. You do not need to save SAML configurations first. If initialization is complete but SAML metadata is not saved, the system returns WAITING_CONFIGURATION. CONFIGURED and SYNCING indicate that the resource is still being initialized. You can call GetIdentityProvider to query the status. After you save the metadata, the system returns UPDATING. After the configuration is complete and the internal OIDC is published, the system returns READY. READY does not mean that the logon switch is enabled. For the same CustomSSO binding, the system may return the existing binding after the initialization request is accepted or completed. You cannot treat all statuses as repeatable creations.
     * For DingTalk, the metadata must include appKey, appSecret, and corpId. For Lark, the metadata must include appId and appSecret. The vendor logon switch is enabled by default, and the synchronization switch is disabled by default. If synchronization is enabled, encryptKey and verificationToken are also required. The vendor syncOnBind and syncScope parameters retain the existing department-based synchronization definitions. Do not use these vendor pull parameters to replace SCIM configurations during CustomSSO initialization.
     * ## Requests and examples
     * POST /workspaces/{workspaceId}/identity-providers
     * Call conventions: Call the API operation in the region of the target workspace by using an AccessKey pair or STS token that has permissions on the identity source resources of the workspace. In the following examples, ws-example, URLs, certificates, and tokens are placeholder values and must be replaced with actual values. The request body example shows the body parameters of the public API operation, not the extra body wrapper of the backend direct connection API operation. The response example shows only the business part. The outer layer also includes requestId, success, code, message, and httpStatusCode. Retain the requestId for troubleshooting and do not record keys. Asynchronous business tasks do not mean that the HTTP request uses a long connection to wait for completion.
     * ```text
     * POST /workspaces/ws-example/identity-providers
     * {"identityProviderType": "CustomSSO"}
     * ```
     * ## Response examples
     * ```json
     * {
     *   "data": {
     *     "workspaceId": "ws-example",
     *     "identityProviderType": "CustomSSO",
     *     "loginEnabled": false,
     *     "syncEnabled": false,
     *     "status": "WAITING_CONFIGURATION"
     *   }
     * }
     * ```
     * ## Errors and handling
     * Error handling: A 400 InvalidParameter error indicates that the parameters or current configuration prerequisites are not met. A 404 IdentityProviderNotFound error indicates that no binding of the matching type exists. If a synchronous call to the upstream service fails, a 503 IdentityProviderProvisioningUnavailable error may be returned. Retain the request ID for troubleshooting and do not interpret a read failure as unconfigured. Actual authentication and workspace non-existence errors follow the common error handling process.
     * 409 IdentityProviderAlreadyBound: An external binding already exists. Query and reuse the correct binding first. Do not automatically unbind the entire binding. If the initialization request fails, retain the request ID for troubleshooting. If a binding already exists, query the current status first to avoid repeated creation.
     * ## Call relationships and usage boundaries
     * CustomSSO call sequence: Create the binding first. After initialization is complete, the system returns WAITING_CONFIGURATION. If the system returns CONFIGURED or SYNCING, you can call GetIdentityProvider to query the status. Then, you can configure SAML and SCIM separately. You do not need to complete them in a fixed sequence. For SAML, use GetIdentityProviderServiceProvider to obtain the SP information of your side, and use UpdateIdentityProvider to save the external IdP configuration. For SCIM, use PrepareIdentityProviderSCIM to obtain the pre-provisioning address and credentials, and then use UpdateIdentityProviderSCIM to confirm synchronization.
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
     * Binds a DingTalk, Lark, or CustomSSO identity source to a workspace. CustomSSO only asynchronously initializes the shared user pool. SAML logon and SCIM synchronization are configured separately later.
     *
     * @remarks
     * ## Features and prerequisites
     * The WAITING_CONFIGURATION status also occupies the single external identity source quota for a workspace. CustomSSO (SAML/OIDC and SCIM) is mutually exclusive with DingTalk and Lark. SCIM reuses the CustomSSO binding and does not create a second identity source. Creating another type returns a 409 IdentityProviderAlreadyBound error. You can change the identity source only after the existing binding is unbound and removed.
     * A workspace can have only one external identity source binding. The identityProviderType parameter supports DingTalk, Lark, and CustomSSO. CustomSSO only initializes the shared user pool. Do not pass non-empty metadata, and do not pass true for loginEnabled or syncEnabled. Both switches are disabled by default. Protocols and SAML configurations are saved by using UpdateIdentityProvider. SCIM is configured by using a separate API operation. You do not need to save SAML configurations first. If initialization is complete but SAML metadata is not saved, the system returns WAITING_CONFIGURATION. CONFIGURED and SYNCING indicate that the resource is still being initialized. You can call GetIdentityProvider to query the status. After you save the metadata, the system returns UPDATING. After the configuration is complete and the internal OIDC is published, the system returns READY. READY does not mean that the logon switch is enabled. For the same CustomSSO binding, the system may return the existing binding after the initialization request is accepted or completed. You cannot treat all statuses as repeatable creations.
     * For DingTalk, the metadata must include appKey, appSecret, and corpId. For Lark, the metadata must include appId and appSecret. The vendor logon switch is enabled by default, and the synchronization switch is disabled by default. If synchronization is enabled, encryptKey and verificationToken are also required. The vendor syncOnBind and syncScope parameters retain the existing department-based synchronization definitions. Do not use these vendor pull parameters to replace SCIM configurations during CustomSSO initialization.
     * ## Requests and examples
     * POST /workspaces/{workspaceId}/identity-providers
     * Call conventions: Call the API operation in the region of the target workspace by using an AccessKey pair or STS token that has permissions on the identity source resources of the workspace. In the following examples, ws-example, URLs, certificates, and tokens are placeholder values and must be replaced with actual values. The request body example shows the body parameters of the public API operation, not the extra body wrapper of the backend direct connection API operation. The response example shows only the business part. The outer layer also includes requestId, success, code, message, and httpStatusCode. Retain the requestId for troubleshooting and do not record keys. Asynchronous business tasks do not mean that the HTTP request uses a long connection to wait for completion.
     * ```text
     * POST /workspaces/ws-example/identity-providers
     * {"identityProviderType": "CustomSSO"}
     * ```
     * ## Response examples
     * ```json
     * {
     *   "data": {
     *     "workspaceId": "ws-example",
     *     "identityProviderType": "CustomSSO",
     *     "loginEnabled": false,
     *     "syncEnabled": false,
     *     "status": "WAITING_CONFIGURATION"
     *   }
     * }
     * ```
     * ## Errors and handling
     * Error handling: A 400 InvalidParameter error indicates that the parameters or current configuration prerequisites are not met. A 404 IdentityProviderNotFound error indicates that no binding of the matching type exists. If a synchronous call to the upstream service fails, a 503 IdentityProviderProvisioningUnavailable error may be returned. Retain the request ID for troubleshooting and do not interpret a read failure as unconfigured. Actual authentication and workspace non-existence errors follow the common error handling process.
     * 409 IdentityProviderAlreadyBound: An external binding already exists. Query and reuse the correct binding first. Do not automatically unbind the entire binding. If the initialization request fails, retain the request ID for troubleshooting. If a binding already exists, query the current status first to avoid repeated creation.
     * ## Call relationships and usage boundaries
     * CustomSSO call sequence: Create the binding first. After initialization is complete, the system returns WAITING_CONFIGURATION. If the system returns CONFIGURED or SYNCING, you can call GetIdentityProvider to query the status. Then, you can configure SAML and SCIM separately. You do not need to complete them in a fixed sequence. For SAML, use GetIdentityProviderServiceProvider to obtain the SP information of your side, and use UpdateIdentityProvider to save the external IdP configuration. For SCIM, use PrepareIdentityProviderSCIM to obtain the pre-provisioning address and credentials, and then use UpdateIdentityProviderSCIM to confirm synchronization.
     *
     * @param request - CreateIdentityProviderRequest
     * @returns CreateIdentityProviderResponse
     */
    createIdentityProvider(workspaceId: string, request: $_model.CreateIdentityProviderRequest): Promise<$_model.CreateIdentityProviderResponse>;
    /**
     * Issues a SCIM credential explicitly and returns the plaintext token only in the current response. A maximum of two credentials are allowed per pool. This operation does not automatically revoke old credentials or enable AC user synchronization.
     *
     * @remarks
     * ## Features and prerequisites\\nExplicitly issues a new credential, which requires an available shared pool and the AgentIdentity SCIM receiver to be Enabled. This operation does not automatically enable the receiver. If it is not enabled, call the prepare operation first. Returns the configuration, credential summary, and the current token. The maximum limit of two credentials is enforced by AgentIdentity. An existing available token does not prevent users from explicitly creating a second one. Old credentials are not automatically revoked, and no extended rotation process is provided.\\nThe token is returned only once and cannot be retrieved again in subsequent list or query operations. Do not automatically retry the issuance. If the response is lost, check the list first to verify whether it has been created. Creating a credential does not enable AC syncEnabled, start a full user import, or switch SAML logon. Deleting an old token should be explicitly performed by the user after confirming the actual usage of the external provisioning system.\\n\\n## Requests and examples\\nPOST /workspaces/{workspaceId}/scim-provisioning/credentials\\nCalling conventions: Call the operation in the region of the target workspace, using an AccessKey (AK) or Security Token Service (STS) identity that has permissions for the identity provider resources of the corresponding workspace. The ws-example, URL, certificate, and token in the following examples are placeholder values and must be replaced with actual values. The request body example represents the body parameters of the public API, not the extra body wrapper of the backend direct connection API. The response example only shows the business part. The outer layer also includes requestId, success, code, message, and httpStatusCode. Keep the requestId for troubleshooting and do not log the key. Asynchronous business tasks do not mean that the HTTP request uses a long connection to wait for completion.\\n```text\\nPOST /workspaces/ws-example/scim-provisioning/credentials\\nNo business request body.\\n```\\n\\n## Response example\\n```json\\n{\\n  "data": {\\n    "configuration": {\\n      "status": "Enabled",\\n      "baseUrl": "https://example.com/scim/v2"\\n    },\\n    "credential": {\\n      "credentialId": "credential-example",\\n      "status": "Enabled",\\n      "expireTime": "<Upstream expiration time>"\\n    },\\n    "token": "<Newly issued token for this request>"\\n  }\\n}\\n```\\n\\n## Errors and handling\\nError handling: 400 InvalidParameter indicates that the parameters or current configuration prerequisites are not met. 404 IdentityProviderNotFound indicates that there is no binding of the matching type. Synchronous calls to the upstream may fail and return 503 IdentityProviderProvisioningUnavailable. Keep the request ID for troubleshooting and do not interpret read failures as unconfigured. Actual authentication and workspace not found errors follow the common error handling.\\n400 LimitExceeded.ScimCredential: A maximum of two credentials are allowed. Delete one before creating another. 400 InvalidParameter: The receiver is not enabled or the shared pool is unavailable. Do not retry quota errors as system failures.\\n\\n## Call relationships and usage boundaries\\nAfter creation, securely save the token that is returned only once and configure it in the external provisioning system. Existing tokens remain valid. Only DeleteIdentityProviderSCIMCredential revokes the specified credential. Do not automatically retry if the response is lost. Call ListIdentityProviderSCIMCredentials to check first. This operation does not provide automatic rotation or scaling.
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
     * Issues a SCIM credential explicitly and returns the plaintext token only in the current response. A maximum of two credentials are allowed per pool. This operation does not automatically revoke old credentials or enable AC user synchronization.
     *
     * @remarks
     * ## Features and prerequisites\\nExplicitly issues a new credential, which requires an available shared pool and the AgentIdentity SCIM receiver to be Enabled. This operation does not automatically enable the receiver. If it is not enabled, call the prepare operation first. Returns the configuration, credential summary, and the current token. The maximum limit of two credentials is enforced by AgentIdentity. An existing available token does not prevent users from explicitly creating a second one. Old credentials are not automatically revoked, and no extended rotation process is provided.\\nThe token is returned only once and cannot be retrieved again in subsequent list or query operations. Do not automatically retry the issuance. If the response is lost, check the list first to verify whether it has been created. Creating a credential does not enable AC syncEnabled, start a full user import, or switch SAML logon. Deleting an old token should be explicitly performed by the user after confirming the actual usage of the external provisioning system.\\n\\n## Requests and examples\\nPOST /workspaces/{workspaceId}/scim-provisioning/credentials\\nCalling conventions: Call the operation in the region of the target workspace, using an AccessKey (AK) or Security Token Service (STS) identity that has permissions for the identity provider resources of the corresponding workspace. The ws-example, URL, certificate, and token in the following examples are placeholder values and must be replaced with actual values. The request body example represents the body parameters of the public API, not the extra body wrapper of the backend direct connection API. The response example only shows the business part. The outer layer also includes requestId, success, code, message, and httpStatusCode. Keep the requestId for troubleshooting and do not log the key. Asynchronous business tasks do not mean that the HTTP request uses a long connection to wait for completion.\\n```text\\nPOST /workspaces/ws-example/scim-provisioning/credentials\\nNo business request body.\\n```\\n\\n## Response example\\n```json\\n{\\n  "data": {\\n    "configuration": {\\n      "status": "Enabled",\\n      "baseUrl": "https://example.com/scim/v2"\\n    },\\n    "credential": {\\n      "credentialId": "credential-example",\\n      "status": "Enabled",\\n      "expireTime": "<Upstream expiration time>"\\n    },\\n    "token": "<Newly issued token for this request>"\\n  }\\n}\\n```\\n\\n## Errors and handling\\nError handling: 400 InvalidParameter indicates that the parameters or current configuration prerequisites are not met. 404 IdentityProviderNotFound indicates that there is no binding of the matching type. Synchronous calls to the upstream may fail and return 503 IdentityProviderProvisioningUnavailable. Keep the request ID for troubleshooting and do not interpret read failures as unconfigured. Actual authentication and workspace not found errors follow the common error handling.\\n400 LimitExceeded.ScimCredential: A maximum of two credentials are allowed. Delete one before creating another. 400 InvalidParameter: The receiver is not enabled or the shared pool is unavailable. Do not retry quota errors as system failures.\\n\\n## Call relationships and usage boundaries\\nAfter creation, securely save the token that is returned only once and configure it in the external provisioning system. Existing tokens remain valid. Only DeleteIdentityProviderSCIMCredential revokes the specified credential. Do not automatically retry if the response is lost. Call ListIdentityProviderSCIMCredentials to check first. This operation does not provide automatic rotation or scaling.
     *
     * @param request - CreateIdentityProviderSCIMCredentialRequest
     * @returns CreateIdentityProviderSCIMCredentialResponse
     */
    createIdentityProviderSCIMCredential(workspaceId: string, request: $_model.CreateIdentityProviderSCIMCredentialRequest): Promise<$_model.CreateIdentityProviderSCIMCredentialResponse>;
    /**
     * Initiates a manual synchronization of an identity provider.
     *
     * @remarks
     * Initiates a user synchronization based on the saved scope without saving the configuration or requiring syncEnabled=true. The prerequisites are that the identity provider is in the READY or SYNC_FAILED state, a user pool exists, and no other identity provider operations are in progress. The returned taskId only indicates that the request is accepted. Call GetIdentityProviderSyncJob to poll the status until it reaches SUCCESS, FAILED, or CANCELED. If the task fails, check failureReason. The workspace user quota is still enforced, and synchronized users are not automatically deleted when the scope is reduced.
     * Authorization information: The RAM action is agentcore:CreateIdentityProviderSyncJob, the access level is Write, and the resource ARN is acs:agentcore:{regionId}:{accountId}:workspace/{workspaceId}/identityProvider/{identityProviderType}. This resource is required for authorization.
     * Idempotency and retries: This operation does not provide a ClientToken parameter for conditional idempotency. Repeated submissions do not guarantee that the same task is returned. If an operation is already in progress, an operation conflict is returned. Submitting the request again after the task ends creates a new synchronization task. If a submission times out, query the identity provider status first to avoid unnecessary repeated submissions.
     * Calling this API is free of charge, and operation records support ActionTrail auditing.
     * First-time selective synchronization flow: CreateIdentityProvider (syncOnBind=false, we recommend that you keep syncEnabled=false initially) → GetIdentityProvider and wait for the READY state → ListIdentityProviderDepartments to select departments → UpdateIdentityProvider to save syncScope and wait for the READY state → CreateIdentityProviderSyncJob → GetIdentityProviderSyncJob to query the final state. To enable incremental synchronization, configure callbacks and event subscriptions, and then set syncEnabled=true.
     * Response example:
     * ```json
     * {
     *   "requestId": "01234567-89AB-CDEF-0123-456789ABCDEF",
     *   "message": "success",
     *   "httpStatusCode": 200,
     *   "code": "SUCCESS",
     *   "success": true,
     *   "data": {
     *     "taskId": "12345678-1234-4234-8234-123456789abc",
     *     "status": "PENDING"
     *   }
     * }
     * ```
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
     * Initiates a user synchronization based on the saved scope without saving the configuration or requiring syncEnabled=true. The prerequisites are that the identity provider is in the READY or SYNC_FAILED state, a user pool exists, and no other identity provider operations are in progress. The returned taskId only indicates that the request is accepted. Call GetIdentityProviderSyncJob to poll the status until it reaches SUCCESS, FAILED, or CANCELED. If the task fails, check failureReason. The workspace user quota is still enforced, and synchronized users are not automatically deleted when the scope is reduced.
     * Authorization information: The RAM action is agentcore:CreateIdentityProviderSyncJob, the access level is Write, and the resource ARN is acs:agentcore:{regionId}:{accountId}:workspace/{workspaceId}/identityProvider/{identityProviderType}. This resource is required for authorization.
     * Idempotency and retries: This operation does not provide a ClientToken parameter for conditional idempotency. Repeated submissions do not guarantee that the same task is returned. If an operation is already in progress, an operation conflict is returned. Submitting the request again after the task ends creates a new synchronization task. If a submission times out, query the identity provider status first to avoid unnecessary repeated submissions.
     * Calling this API is free of charge, and operation records support ActionTrail auditing.
     * First-time selective synchronization flow: CreateIdentityProvider (syncOnBind=false, we recommend that you keep syncEnabled=false initially) → GetIdentityProvider and wait for the READY state → ListIdentityProviderDepartments to select departments → UpdateIdentityProvider to save syncScope and wait for the READY state → CreateIdentityProviderSyncJob → GetIdentityProviderSyncJob to query the final state. To enable incremental synchronization, configure callbacks and event subscriptions, and then set syncEnabled=true.
     * Response example:
     * ```json
     * {
     *   "requestId": "01234567-89AB-CDEF-0123-456789ABCDEF",
     *   "message": "success",
     *   "httpStatusCode": 200,
     *   "code": "SUCCESS",
     *   "success": true,
     *   "data": {
     *     "taskId": "12345678-1234-4234-8234-123456789abc",
     *     "status": "PENDING"
     *   }
     * }
     * ```
     *
     * @param request - CreateIdentityProviderSyncJobRequest
     * @returns CreateIdentityProviderSyncJobResponse
     */
    createIdentityProviderSyncJob(workspaceId: string, identityProviderType: string, request: $_model.CreateIdentityProviderSyncJobRequest): Promise<$_model.CreateIdentityProviderSyncJobResponse>;
    /**
     * Creates an image cache.
     *
     * @remarks
     * Creates or reuses an image cache in the current workspace based on the image source and tag. Both public and private images reuse the workspace\\"s source image pull authorization and resource roles. The resource manager parses the tag during the transfer task and performs image replication based on the parsed digest. The digest is empty before parsing is complete. For regular tags, the saved digest is reused after parsing. For the latest tag, re-registration after reaching the final state triggers re-parsing, and duplicate in-progress registrations reuse the task. The logical imageId remains stable. AccessInternet and AccessVpc only determine the source read and transfer for the current request and do not modify the agent network. An HTTP 200 response returns an acceptance snapshot with a status of PENDING, READY, or FAILED, which does not indicate that the creation is complete. The ClientToken does not guarantee request deduplication or original result recovery. If the result is unconfirmed, query the cache status first before deciding whether to resubmit.
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
     * Creates an image cache.
     *
     * @remarks
     * Creates or reuses an image cache in the current workspace based on the image source and tag. Both public and private images reuse the workspace\\"s source image pull authorization and resource roles. The resource manager parses the tag during the transfer task and performs image replication based on the parsed digest. The digest is empty before parsing is complete. For regular tags, the saved digest is reused after parsing. For the latest tag, re-registration after reaching the final state triggers re-parsing, and duplicate in-progress registrations reuse the task. The logical imageId remains stable. AccessInternet and AccessVpc only determine the source read and transfer for the current request and do not modify the agent network. An HTTP 200 response returns an acceptance snapshot with a status of PENDING, READY, or FAILED, which does not indicate that the creation is complete. The ClientToken does not guarantee request deduplication or original result recovery. If the result is unconfirmed, query the cache status first before deciding whether to resubmit.
     *
     * @param request - CreateImageCacheRequest
     * @returns CreateImageCacheResponse
     */
    createImageCache(request: $_model.CreateImageCacheRequest): Promise<$_model.CreateImageCacheResponse>;
    /**
     * Creates a managed agent in a specified workspace.
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
     * Creates a managed agent in a specified workspace.
     *
     * @param request - CreateManagedAgentRequest
     * @returns CreateManagedAgentResponse
     */
    createManagedAgent(workspaceId: string, request: $_model.CreateManagedAgentRequest): Promise<$_model.CreateManagedAgentResponse>;
    /**
     * Creates an MCP service in a specified workspace. The creation is an asynchronous process. You can check the returned status or call a query operation to confirm whether the service is ready.
     *
     * @remarks
     * ## Request description
     * Creates an MCP service in a specified workspace. The creation is an asynchronous process. You can check the returned status or call a query operation to confirm whether the service is ready.
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
     * Creates an MCP service in a specified workspace. The creation is an asynchronous process. You can check the returned status or call a query operation to confirm whether the service is ready.
     *
     * @remarks
     * ## Request description
     * Creates an MCP service in a specified workspace. The creation is an asynchronous process. You can check the returned status or call a query operation to confirm whether the service is ready.
     *
     * @param request - CreateMcpRequest
     * @returns CreateMcpResponse
     */
    createMcp(workspaceId: string, request: $_model.CreateMcpRequest): Promise<$_model.CreateMcpResponse>;
    /**
     * Creates a long-term memory store in a specified workspace.
     *
     * @remarks
     * Creates a long-term memory store in a specified workspace.
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
     * Creates a long-term memory store in a specified workspace.
     *
     * @param request - CreateMemoryStoreRequest
     * @returns CreateMemoryStoreResponse
     */
    createMemoryStore(workspaceId: string, request: $_model.CreateMemoryStoreRequest): Promise<$_model.CreateMemoryStoreResponse>;
    /**
     * Creates a model configuration for model creation under a model connection in a specified workspace.
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
     * Creates a model configuration for model creation under a model connection in a specified workspace.
     *
     * @param request - CreateModelRequest
     * @returns CreateModelResponse
     */
    createModel(workspaceId: string, request: $_model.CreateModelRequest): Promise<$_model.CreateModelResponse>;
    /**
     * Creates a model connection in a specified workspace and configures the upstream model service endpoint, invoke protocol, and access credentials to support model creation.
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
     * Creates a model connection in a specified workspace and configures the upstream model service endpoint, invoke protocol, and access credentials to support model creation.
     *
     * @param request - CreateModelConnectionRequest
     * @returns CreateModelConnectionResponse
     */
    createModelConnection(workspaceId: string, request: $_model.CreateModelConnectionRequest): Promise<$_model.CreateModelConnectionResponse>;
    /**
     * Creates permission rules.
     *
     * @remarks
     * Creates permission rules in bulk for resources in a specified workspace.
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
     * Creates permission rules in bulk for resources in a specified workspace.
     *
     * @param request - CreatePermissionRulesRequest
     * @returns CreatePermissionRulesResponse
     */
    createPermissionRules(workspaceId: string, request: $_model.CreatePermissionRulesRequest): Promise<$_model.CreatePermissionRulesResponse>;
    /**
     * Creates a Skill in the specified workspace and generates a draft version that can be further edited. You can derive a draft from an existing version or specify a target version and commit message.
     *
     * @remarks
     * ## Operation description
     * Creates a Skill in the specified workspace and generates a draft version that can be further edited. You can derive a draft from an existing version or specify a target version and commit message.
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
     * Creates a Skill in the specified workspace and generates a draft version that can be further edited. You can derive a draft from an existing version or specify a target version and commit message.
     *
     * @remarks
     * ## Operation description
     * Creates a Skill in the specified workspace and generates a draft version that can be further edited. You can derive a draft from an existing version or specify a target version and commit message.
     *
     * @param request - CreateSkillDraftRequest
     * @returns CreateSkillDraftResponse
     */
    createSkillDraft(workspaceId: string, request: $_model.CreateSkillDraftRequest): Promise<$_model.CreateSkillDraftResponse>;
    /**
     * Creates a team in a specified workspace and configures user members and agent members at the same time. Exactly one user member must have the ADMIN role, and agent members can only have the LEADER or WORKER role.
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
     * Creates a team in a specified workspace and configures user members and agent members at the same time. Exactly one user member must have the ADMIN role, and agent members can only have the LEADER or WORKER role.
     *
     * @param request - CreateTeamRequest
     * @returns CreateTeamResponse
     */
    createTeam(workspaceId: string, request: $_model.CreateTeamRequest): Promise<$_model.CreateTeamResponse>;
    /**
     * Creates a user in a specified workspace. The username must be unique within the workspace, can contain only lowercase letters, digits, and hyphens, and cannot use reserved names such as manager, admin, or names starting with worker-. If the password is not specified, the server generates an initial password and returns it in the initialPassword field of the response.
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
     * Creates a user in a specified workspace. The username must be unique within the workspace, can contain only lowercase letters, digits, and hyphens, and cannot use reserved names such as manager, admin, or names starting with worker-. If the password is not specified, the server generates an initial password and returns it in the initialPassword field of the response.
     *
     * @param request - CreateUserRequest
     * @returns CreateUserResponse
     */
    createUser(workspaceId: string, request: $_model.CreateUserRequest): Promise<$_model.CreateUserResponse>;
    /**
     * Creates an AgentCore workspace control plane record. The server completes the state transition from Initializing to Initialized within the same transaction.
     *
     * @remarks
     * ## Request description\\nCreates an AgentCore workspace control plane record. The server completes the state transition from `Initializing` to `Initialized` within the same transaction. The network configuration uses `Enabled` to specify whether to enable the VPC network. If enabled, you must provide `VpcId` and at least one `VSwitchIds`.\\n.
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
     * Creates an AgentCore workspace control plane record. The server completes the state transition from Initializing to Initialized within the same transaction.
     *
     * @remarks
     * ## Request description\\nCreates an AgentCore workspace control plane record. The server completes the state transition from `Initializing` to `Initialized` within the same transaction. The network configuration uses `Enabled` to specify whether to enable the VPC network. If enabled, you must provide `VpcId` and at least one `VSwitchIds`.\\n.
     *
     * @param request - CreateWorkspaceRequest
     * @returns CreateWorkspaceResponse
     */
    createWorkspace(request: $_model.CreateWorkspaceRequest): Promise<$_model.CreateWorkspaceResponse>;
    /**
     * Calls a specified model through a published model connection to verify whether the model call chain is available.
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
     * Calls a specified model through a published model connection to verify whether the model call chain is available.
     *
     * @param request - DebugModelRequest
     * @returns DebugModelResponse
     */
    debugModel(workspaceId: string, modelId: string, request: $_model.DebugModelRequest): Promise<$_model.DebugModelResponse>;
    /**
     * Deletes an access application.
     *
     * @remarks
     * Deletes an access application. The secret key is returned only upon creation and is not returned by query operations.
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
     * Deletes an access application. The secret key is returned only upon creation and is not returned by query operations.
     *
     * @param request - DeleteAccessApplicationRequest
     * @returns DeleteAccessApplicationResponse
     */
    deleteAccessApplication(workspaceId: string, applicationId: string, request: $_model.DeleteAccessApplicationRequest): Promise<$_model.DeleteAccessApplicationResponse>;
    /**
     * Deletes an IM channel of a specified agent.
     *
     * @remarks
     * Deletes an IM channel of a specified agent.
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
     * Deletes an IM channel of a specified agent.
     *
     * @remarks
     * Deletes an IM channel of a specified agent.
     *
     * @param request - DeleteAgentIMChannelRequest
     * @returns DeleteAgentIMChannelResponse
     */
    deleteAgentIMChannel(workspaceId: string, agentId: string, imChannelId: string, request: $_model.DeleteAgentIMChannelRequest): Promise<$_model.DeleteAgentIMChannelResponse>;
    /**
     * Deletes the specified AgentSpec and all its versions and metadata. The deletion is irreversible.
     *
     * @remarks
     * ## Operation description
     * Deletes the specified AgentSpec and all its versions and metadata. The deletion is irreversible.
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
     * Deletes the specified AgentSpec and all its versions and metadata. The deletion is irreversible.
     *
     * @remarks
     * ## Operation description
     * Deletes the specified AgentSpec and all its versions and metadata. The deletion is irreversible.
     *
     * @param request - DeleteAgentSpecRequest
     * @returns DeleteAgentSpecResponse
     */
    deleteAgentSpec(workspaceId: string, agentSpecName: string, request: $_model.DeleteAgentSpecRequest): Promise<$_model.DeleteAgentSpecResponse>;
    /**
     * Deletes the draft version currently being edited for a specified AgentSpec and clears the draft version pointer.
     *
     * @remarks
     * ## Request description
     * Deletes the draft version currently being edited for a specified AgentSpec and clears the draft version pointer.
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
     * Deletes the draft version currently being edited for a specified AgentSpec and clears the draft version pointer.
     *
     * @remarks
     * ## Request description
     * Deletes the draft version currently being edited for a specified AgentSpec and clears the draft version pointer.
     *
     * @param request - DeleteAgentSpecVersionRequest
     * @returns DeleteAgentSpecVersionResponse
     */
    deleteAgentSpecVersion(workspaceId: string, agentSpecName: string, request: $_model.DeleteAgentSpecVersionRequest): Promise<$_model.DeleteAgentSpecVersionResponse>;
    /**
     * Deletes a credential in a specified workspace and deletes the ciphertext hosted in the credential service. After deletion, agents bound to the credential can no longer obtain the credential content.
     *
     * @remarks
     * Deletes an access credential in a specified workspace. A credential cannot be deleted if it is still bound to an MCP service.
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
     * Deletes a credential in a specified workspace and deletes the ciphertext hosted in the credential service. After deletion, agents bound to the credential can no longer obtain the credential content.
     *
     * @remarks
     * Deletes an access credential in a specified workspace. A credential cannot be deleted if it is still bound to an MCP service.
     *
     * @param request - DeleteCredentialRequest
     * @returns DeleteCredentialResponse
     */
    deleteCredential(workspaceId: string, credentialId: string, request: $_model.DeleteCredentialRequest): Promise<$_model.DeleteCredentialResponse>;
    /**
     * Deletes a custom agent in a specified workspace. A successful request indicates that the deletion is accepted, and the runtime resources are subsequently cleaned up in the background.
     *
     * @remarks
     * Before calling this operation, ensure that the workspace is writable. If the agent is still associated with a team, dissociate the agent from the team first.
     * Deletion is an asynchronous process. After the request is accepted, the associated invocation endpoints become unavailable, and the runtime resources are subsequently cleaned up. The status in the response is typically Deleting. If the agent is already being deleted, a subsequent request returns the current summary.
     * You can call GetCustomAgent to check the deletion progress. After the deletion is complete, a detail query returns a resource not found error.
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
     * Deletes a custom agent in a specified workspace. A successful request indicates that the deletion is accepted, and the runtime resources are subsequently cleaned up in the background.
     *
     * @remarks
     * Before calling this operation, ensure that the workspace is writable. If the agent is still associated with a team, dissociate the agent from the team first.
     * Deletion is an asynchronous process. After the request is accepted, the associated invocation endpoints become unavailable, and the runtime resources are subsequently cleaned up. The status in the response is typically Deleting. If the agent is already being deleted, a subsequent request returns the current summary.
     * You can call GetCustomAgent to check the deletion progress. After the deletion is complete, a detail query returns a resource not found error.
     *
     * @param request - DeleteCustomAgentRequest
     * @returns DeleteCustomAgentResponse
     */
    deleteCustomAgent(workspaceId: string, agentId: string, request: $_model.DeleteCustomAgentRequest): Promise<$_model.DeleteCustomAgentResponse>;
    /**
     * Deletes a specified external agent.
     *
     * @remarks
     * Deletes a specified external agent.
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
     * Deletes a specified external agent.
     *
     * @remarks
     * Deletes a specified external agent.
     *
     * @param request - DeleteExternalAgentRequest
     * @returns DeleteExternalAgentResponse
     */
    deleteExternalAgent(workspaceId: string, agentId: string, request: $_model.DeleteExternalAgentRequest): Promise<$_model.DeleteExternalAgentResponse>;
    /**
     * Disconnects the identity source integration of a workspace. For CustomSSO, this operation clears the shared user pool and related SAML and SCIM resources. To disable only logon or synchronization, use the corresponding toggle operations.
     *
     * @remarks
     * ## Features and prerequisites
     * This operation disconnects the integration as a whole, rather than disabling logon individually. Disconnecting CustomSSO clears the users imported from this identity source, the remote shared user pool and related resources, and the logon publishing configurations and bindings. Therefore, both SAML and SCIM are affected. This operation does not delete the enterprise applications created by users on external platforms such as Azure. The system checks the references between users and teams before disconnecting. If references exist, the disconnection is rejected.
     * After the request is accepted, the system returns DISCONNECTING. You can call GetIdentityProvider to query the status. The cleanup is complete only when the binding does not exist (IdentityProviderNotFound). The binding should also no longer appear in the list. DISCONNECT_FAILED indicates that partial cleanup may have occurred and the state cannot be restored to a brand new unconfigured state. You can retry based on the returned status. If the binding does not exist in the first place, the operation returns a placeholder result indicating no binding without creating new resources. An ongoing disconnection task may return the current binding. Do not use this operation as a substitute for setting loginEnabled=false, syncEnabled=false, or deleting a single token.
     * ## Requests and examples
     * DELETE /workspaces/{workspaceId}/identity-providers/{identityProviderType}
     * Calling conventions: Call this operation in the region of the target workspace by using an AccessKey pair or STS token that has permissions on the identity source resources of the workspace. In the following examples, ws-example, URLs, certificates, and tokens are placeholder values and must be replaced with actual values. The request body example shows the body parameters of the public API operation, not the extra body wrapper of the backend direct connection API operation. The response example shows only the business part. The outer layer also includes requestId, success, code, message, and httpStatusCode. Retain the requestId for troubleshooting and do not record keys. Asynchronous business tasks do not mean that the HTTP request uses a long connection to wait for completion.
     * ```text
     * DELETE /workspaces/ws-example/identity-providers/CustomSSO
     * ```
     * ## Response examples
     * ```json
     * {
     *   "data": {
     *     "workspaceId": "ws-example",
     *     "identityProviderType": "CustomSSO",
     *     "status": "DISCONNECTING"
     *   }
     * }
     * ```
     * ## Errors and handling
     * Error handling: 400 InvalidParameter indicates that the parameters or current configuration prerequisites are not met. 404 IdentityProviderNotFound indicates that no binding of the matching type exists. Synchronous calls to the upstream may fail and return 503 IdentityProviderProvisioningUnavailable. Retain the request ID for troubleshooting and do not interpret read failures as unconfigured. Actual authentication and workspace non-existence errors follow the common error handling.
     * 409 IdentityProvider.Disconnect.Conflict: Users of this identity source still belong to a team. Remove the references first. 409 IdentityProviderOperationConflict: The current status does not allow disconnection. 404 IdentityProviderNotFound: An external binding exists but the type does not match. Asynchronous failures may result in partial cleanup. You cannot claim completion based solely on the first response.
     * ## Call relationships and usage boundaries
     * If you only need to disable a specific capability: To disable SAML logon, set loginEnabled=false in UpdateIdentityProvider. To disable SCIM, set syncEnabled=false in UpdateIdentityProviderSCIM. To revoke a single token, use DeleteIdentityProviderSCIMCredential. Call this operation only when you need to disconnect the integration as a whole.
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
     * Disconnects the identity source integration of a workspace. For CustomSSO, this operation clears the shared user pool and related SAML and SCIM resources. To disable only logon or synchronization, use the corresponding toggle operations.
     *
     * @remarks
     * ## Features and prerequisites
     * This operation disconnects the integration as a whole, rather than disabling logon individually. Disconnecting CustomSSO clears the users imported from this identity source, the remote shared user pool and related resources, and the logon publishing configurations and bindings. Therefore, both SAML and SCIM are affected. This operation does not delete the enterprise applications created by users on external platforms such as Azure. The system checks the references between users and teams before disconnecting. If references exist, the disconnection is rejected.
     * After the request is accepted, the system returns DISCONNECTING. You can call GetIdentityProvider to query the status. The cleanup is complete only when the binding does not exist (IdentityProviderNotFound). The binding should also no longer appear in the list. DISCONNECT_FAILED indicates that partial cleanup may have occurred and the state cannot be restored to a brand new unconfigured state. You can retry based on the returned status. If the binding does not exist in the first place, the operation returns a placeholder result indicating no binding without creating new resources. An ongoing disconnection task may return the current binding. Do not use this operation as a substitute for setting loginEnabled=false, syncEnabled=false, or deleting a single token.
     * ## Requests and examples
     * DELETE /workspaces/{workspaceId}/identity-providers/{identityProviderType}
     * Calling conventions: Call this operation in the region of the target workspace by using an AccessKey pair or STS token that has permissions on the identity source resources of the workspace. In the following examples, ws-example, URLs, certificates, and tokens are placeholder values and must be replaced with actual values. The request body example shows the body parameters of the public API operation, not the extra body wrapper of the backend direct connection API operation. The response example shows only the business part. The outer layer also includes requestId, success, code, message, and httpStatusCode. Retain the requestId for troubleshooting and do not record keys. Asynchronous business tasks do not mean that the HTTP request uses a long connection to wait for completion.
     * ```text
     * DELETE /workspaces/ws-example/identity-providers/CustomSSO
     * ```
     * ## Response examples
     * ```json
     * {
     *   "data": {
     *     "workspaceId": "ws-example",
     *     "identityProviderType": "CustomSSO",
     *     "status": "DISCONNECTING"
     *   }
     * }
     * ```
     * ## Errors and handling
     * Error handling: 400 InvalidParameter indicates that the parameters or current configuration prerequisites are not met. 404 IdentityProviderNotFound indicates that no binding of the matching type exists. Synchronous calls to the upstream may fail and return 503 IdentityProviderProvisioningUnavailable. Retain the request ID for troubleshooting and do not interpret read failures as unconfigured. Actual authentication and workspace non-existence errors follow the common error handling.
     * 409 IdentityProvider.Disconnect.Conflict: Users of this identity source still belong to a team. Remove the references first. 409 IdentityProviderOperationConflict: The current status does not allow disconnection. 404 IdentityProviderNotFound: An external binding exists but the type does not match. Asynchronous failures may result in partial cleanup. You cannot claim completion based solely on the first response.
     * ## Call relationships and usage boundaries
     * If you only need to disable a specific capability: To disable SAML logon, set loginEnabled=false in UpdateIdentityProvider. To disable SCIM, set syncEnabled=false in UpdateIdentityProviderSCIM. To revoke a single token, use DeleteIdentityProviderSCIMCredential. Call this operation only when you need to disconnect the integration as a whole.
     *
     * @param request - DeleteIdentityProviderRequest
     * @returns DeleteIdentityProviderResponse
     */
    deleteIdentityProvider(workspaceId: string, identityProviderType: string, request: $_model.DeleteIdentityProviderRequest): Promise<$_model.DeleteIdentityProviderResponse>;
    /**
     * Revokes a specified SCIM credential. This operation does not trigger automatic creation of a new token, modify the AC synchronization switch, or disable SAML logon.
     *
     * @remarks
     * ## Features and prerequisites
     * Revokes a specified credential. The credentialId parameter is required and cannot be empty. You can obtain it from the credential list. The shared pool must be available. SAML configuration or enabled SCIM receiving is not required. After deletion, external provisioning requests that use this token become invalid. This operation only affects the selected credential. It does not automatically disable receiving, turn off the AC syncEnabled switch, or affect other credentials or SAML.
     * Even if you delete the last credential, the synchronization switch is not automatically written back and a new token is not reissued. Disable external provisioning or replace the token in use as needed. A successful response returns a common response without business data content. Refresh the list to confirm. The result for unknown or deleted IDs is determined by the upstream system. A unified 404 error or unconditional idempotent success is not guaranteed.
     * ## Request and examples
     * DELETE /workspaces/{workspaceId}/scim-provisioning/credentials/{credentialId}
     * Call conventions: Call the API in the region of the target workspace by using an AccessKey (AK) or Security Token Service (STS) identity that has permissions on the identity provider resources of the workspace. In the following examples, ws-example, URLs, certificates, and tokens are placeholder values and must be replaced with actual values. The request body example shows the body parameters of the public API, not the extra body wrapper of the backend direct connection API. The response example shows only the business part. The outer layer also includes requestId, success, code, message, and httpStatusCode. Keep the requestId for troubleshooting and do not record keys. Asynchronous business tasks do not mean that the HTTP request uses a long connection to wait for completion.
     * ```text
     * DELETE /workspaces/ws-example/scim-provisioning/credentials/credential-example
     * ```
     * ## Response example
     * ```json
     * {
     *   "success": true,
     *   "httpStatusCode": 200
     * }
     * ```
     * ## Errors and handling
     * Error handling: 400 InvalidParameter indicates that the parameter or current configuration prerequisite is not met. 404 IdentityProviderNotFound indicates that no binding of the matching type exists. If a synchronous call to the upstream system fails, it may return 503 IdentityProviderProvisioningUnavailable. Keep the request ID for troubleshooting and do not interpret a read failure as unconfigured. Actual authentication and workspace non-existence errors follow common error handling.
     * 400 InvalidParameter: The credentialId parameter is empty or the shared pool is not available. 404 IdentityProviderNotFound indicates that the binding does not exist. This does not mean that all unknown credential IDs return this code. Handle other deletion errors based on upstream results. If the operation fails, refresh the list to check. Automatic creation of a replacement token is not triggered.
     * ## Call relationships and usage boundaries
     * Use ListIdentityProviderSCIMCredentials to obtain the credentialId and then delete the specified credential. If the external provisioning system still uses this token, subsequent provisioning may result in an authentication failure. Therefore, confirm the actual usage first. After deletion, a new credential is not automatically created, the AC synchronization switch is not turned off, and SAML logon is not disabled.
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
     * Revokes a specified SCIM credential. This operation does not trigger automatic creation of a new token, modify the AC synchronization switch, or disable SAML logon.
     *
     * @remarks
     * ## Features and prerequisites
     * Revokes a specified credential. The credentialId parameter is required and cannot be empty. You can obtain it from the credential list. The shared pool must be available. SAML configuration or enabled SCIM receiving is not required. After deletion, external provisioning requests that use this token become invalid. This operation only affects the selected credential. It does not automatically disable receiving, turn off the AC syncEnabled switch, or affect other credentials or SAML.
     * Even if you delete the last credential, the synchronization switch is not automatically written back and a new token is not reissued. Disable external provisioning or replace the token in use as needed. A successful response returns a common response without business data content. Refresh the list to confirm. The result for unknown or deleted IDs is determined by the upstream system. A unified 404 error or unconditional idempotent success is not guaranteed.
     * ## Request and examples
     * DELETE /workspaces/{workspaceId}/scim-provisioning/credentials/{credentialId}
     * Call conventions: Call the API in the region of the target workspace by using an AccessKey (AK) or Security Token Service (STS) identity that has permissions on the identity provider resources of the workspace. In the following examples, ws-example, URLs, certificates, and tokens are placeholder values and must be replaced with actual values. The request body example shows the body parameters of the public API, not the extra body wrapper of the backend direct connection API. The response example shows only the business part. The outer layer also includes requestId, success, code, message, and httpStatusCode. Keep the requestId for troubleshooting and do not record keys. Asynchronous business tasks do not mean that the HTTP request uses a long connection to wait for completion.
     * ```text
     * DELETE /workspaces/ws-example/scim-provisioning/credentials/credential-example
     * ```
     * ## Response example
     * ```json
     * {
     *   "success": true,
     *   "httpStatusCode": 200
     * }
     * ```
     * ## Errors and handling
     * Error handling: 400 InvalidParameter indicates that the parameter or current configuration prerequisite is not met. 404 IdentityProviderNotFound indicates that no binding of the matching type exists. If a synchronous call to the upstream system fails, it may return 503 IdentityProviderProvisioningUnavailable. Keep the request ID for troubleshooting and do not interpret a read failure as unconfigured. Actual authentication and workspace non-existence errors follow common error handling.
     * 400 InvalidParameter: The credentialId parameter is empty or the shared pool is not available. 404 IdentityProviderNotFound indicates that the binding does not exist. This does not mean that all unknown credential IDs return this code. Handle other deletion errors based on upstream results. If the operation fails, refresh the list to check. Automatic creation of a replacement token is not triggered.
     * ## Call relationships and usage boundaries
     * Use ListIdentityProviderSCIMCredentials to obtain the credentialId and then delete the specified credential. If the external provisioning system still uses this token, subsequent provisioning may result in an authentication failure. Therefore, confirm the actual usage first. After deletion, a new credential is not automatically created, the AC synchronization switch is not turned off, and SAML logon is not disabled.
     *
     * @param request - DeleteIdentityProviderSCIMCredentialRequest
     * @returns DeleteIdentityProviderSCIMCredentialResponse
     */
    deleteIdentityProviderSCIMCredential(workspaceId: string, credentialId: string, request: $_model.DeleteIdentityProviderSCIMCredentialRequest): Promise<$_model.DeleteIdentityProviderSCIMCredentialResponse>;
    /**
     * Deletes an image cache.
     *
     * @remarks
     * Deletes the logical image cache of the current workspace. The deletion requires that no enabled agent configuration references the cache and no valid instances are using it. Concurrency is rechecked upon submission. The PENDING or FAILED status does not prevent deletion, and the backend handles the cleanup. An HTTP 200 response returns an imageId that matches the request. If deletionPending is true, the deletion is still in progress for the current workspace, and a Get request returns DELETING until ImageCacheNotFound is explicitly returned. If false, the deletion is complete or the current workspace no longer exists. Usage by other workspaces does not block the deletion for the current workspace. The physical content is reclaimed after all workspaces in the same region delete their associations and no valid instances are using it.
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
     * Deletes an image cache.
     *
     * @remarks
     * Deletes the logical image cache of the current workspace. The deletion requires that no enabled agent configuration references the cache and no valid instances are using it. Concurrency is rechecked upon submission. The PENDING or FAILED status does not prevent deletion, and the backend handles the cleanup. An HTTP 200 response returns an imageId that matches the request. If deletionPending is true, the deletion is still in progress for the current workspace, and a Get request returns DELETING until ImageCacheNotFound is explicitly returned. If false, the deletion is complete or the current workspace no longer exists. Usage by other workspaces does not block the deletion for the current workspace. The physical content is reclaimed after all workspaces in the same region delete their associations and no valid instances are using it.
     *
     * @param request - DeleteImageCacheRequest
     * @returns DeleteImageCacheResponse
     */
    deleteImageCache(imageId: string, request: $_model.DeleteImageCacheRequest): Promise<$_model.DeleteImageCacheResponse>;
    /**
     * Deletes a specified managed agent.
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
     * Deletes a specified managed agent.
     *
     * @param request - DeleteManagedAgentRequest
     * @returns DeleteManagedAgentResponse
     */
    deleteManagedAgent(workspaceId: string, agentId: string, request: $_model.DeleteManagedAgentRequest): Promise<$_model.DeleteManagedAgentResponse>;
    /**
     * Deletes a specified MCP server. The deletion is an asynchronous process, and the MCP server is no longer returned after the process is complete.
     *
     * @remarks
     * ## Request description
     * Deletes a specified MCP server. The deletion is an asynchronous process, and the MCP server is no longer returned after the process is complete.
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
     * Deletes a specified MCP server. The deletion is an asynchronous process, and the MCP server is no longer returned after the process is complete.
     *
     * @remarks
     * ## Request description
     * Deletes a specified MCP server. The deletion is an asynchronous process, and the MCP server is no longer returned after the process is complete.
     *
     * @param request - DeleteMcpRequest
     * @returns DeleteMcpResponse
     */
    deleteMcp(mcpServerId: string, workspaceId: string, request: $_model.DeleteMcpRequest): Promise<$_model.DeleteMcpResponse>;
    /**
     * Deletes a long-term memory based on the memory ID.
     *
     * @remarks
     * Deletes a long-term memory based on the memory ID.
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
     * Deletes a long-term memory based on the memory ID.
     *
     * @remarks
     * Deletes a long-term memory based on the memory ID.
     *
     * @param request - DeleteMemoryRequest
     * @returns DeleteMemoryResponse
     */
    deleteMemory(workspaceId: string, memoryStoreName: string, memoryId: string, request: $_model.DeleteMemoryRequest): Promise<$_model.DeleteMemoryResponse>;
    /**
     * Asynchronously deletes a MemoryStore and all long-term memory within it.
     *
     * @remarks
     * Asynchronously deletes a MemoryStore and all long-term memory within it.
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
     * Asynchronously deletes a MemoryStore and all long-term memory within it.
     *
     * @remarks
     * Asynchronously deletes a MemoryStore and all long-term memory within it.
     *
     * @param request - DeleteMemoryStoreRequest
     * @returns DeleteMemoryStoreResponse
     */
    deleteMemoryStore(workspaceId: string, memoryStoreName: string, request: $_model.DeleteMemoryStoreRequest): Promise<$_model.DeleteMemoryStoreResponse>;
    /**
     * Deletes a model from a specified workspace. Models that are currently in use cannot be deleted.
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
     * Deletes a model from a specified workspace. Models that are currently in use cannot be deleted.
     *
     * @param request - DeleteModelRequest
     * @returns DeleteModelResponse
     */
    deleteModel(workspaceId: string, modelId: string, request: $_model.DeleteModelRequest): Promise<$_model.DeleteModelResponse>;
    /**
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
     * @param request - DeleteModelConnectionRequest
     * @returns DeleteModelConnectionResponse
     */
    deleteModelConnection(workspaceId: string, connectionId: string, request: $_model.DeleteModelConnectionRequest): Promise<$_model.DeleteModelConnectionResponse>;
    /**
     * Deletes a permission rule.
     *
     * @remarks
     * Deletes a permission rule in a specified workspace. Repeated deletion requests still return a success response.
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
     * Deletes a permission rule in a specified workspace. Repeated deletion requests still return a success response.
     *
     * @param request - DeletePermissionRuleRequest
     * @returns DeletePermissionRuleResponse
     */
    deletePermissionRule(workspaceId: string, permissionRuleId: string, request: $_model.DeletePermissionRuleRequest): Promise<$_model.DeletePermissionRuleResponse>;
    /**
     * Deletes a skill and its related version data from a specified workspace. This operation is irreversible.
     *
     * @remarks
     * ## Operation description
     * Deletes a skill and its related version data from a specified workspace. This operation is irreversible.
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
     * Deletes a skill and its related version data from a specified workspace. This operation is irreversible.
     *
     * @remarks
     * ## Operation description
     * Deletes a skill and its related version data from a specified workspace. This operation is irreversible.
     *
     * @param request - DeleteSkillRequest
     * @returns DeleteSkillResponse
     */
    deleteSkill(workspaceId: string, skillName: string, request: $_model.DeleteSkillRequest): Promise<$_model.DeleteSkillResponse>;
    /**
     * Deletes the draft version currently being edited for a specified Skill.
     *
     * @remarks
     * ## Operation description
     * Deletes the draft version currently being edited for a specified Skill.
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
     * Deletes the draft version currently being edited for a specified Skill.
     *
     * @remarks
     * ## Operation description
     * Deletes the draft version currently being edited for a specified Skill.
     *
     * @param request - DeleteSkillDraftRequest
     * @returns DeleteSkillDraftResponse
     */
    deleteSkillDraft(workspaceId: string, skillName: string, request: $_model.DeleteSkillDraftRequest): Promise<$_model.DeleteSkillDraftResponse>;
    /**
     * Deletes a team from a specified workspace. Deleting a team does not delete the users or agents within it. Only the membership associations are removed.
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
     * Deletes a team from a specified workspace. Deleting a team does not delete the users or agents within it. Only the membership associations are removed.
     *
     * @param request - DeleteTeamRequest
     * @returns DeleteTeamResponse
     */
    deleteTeam(workspaceId: string, teamId: string, request: $_model.DeleteTeamRequest): Promise<$_model.DeleteTeamResponse>;
    /**
     * Deletes a user from a specified workspace. A user cannot be deleted while the user is still a member of any team. Remove the user from all teams before deleting the user.
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
     * Deletes a user from a specified workspace. A user cannot be deleted while the user is still a member of any team. Remove the user from all teams before deleting the user.
     *
     * @param request - DeleteUserRequest
     * @returns DeleteUserResponse
     */
    deleteUser(workspaceId: string, agentCoreUserId: string, request: $_model.DeleteUserRequest): Promise<$_model.DeleteUserResponse>;
    /**
     * Deletes the control plane record of a specified workspace. The server completes the state transition from Deleting to Deleted within the same transaction. The server processes repeated deletion requests for workspaces in the Deleting or Deleted state idempotently.
     *
     * @remarks
     * ## Request description\\nDeletes the control plane record of a specified workspace. The server completes the state transition from `Deleting` to `Deleted` within the same transaction. The server processes repeated deletion requests for workspaces in the `Deleting` or `Deleted` state idempotently.\\n.
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
     * Deletes the control plane record of a specified workspace. The server completes the state transition from Deleting to Deleted within the same transaction. The server processes repeated deletion requests for workspaces in the Deleting or Deleted state idempotently.
     *
     * @remarks
     * ## Request description\\nDeletes the control plane record of a specified workspace. The server completes the state transition from `Deleting` to `Deleted` within the same transaction. The server processes repeated deletion requests for workspaces in the `Deleting` or `Deleted` state idempotently.\\n.
     *
     * @param request - DeleteWorkspaceRequest
     * @returns DeleteWorkspaceResponse
     */
    deleteWorkspace(workspaceId: string, request: $_model.DeleteWorkspaceRequest): Promise<$_model.DeleteWorkspaceResponse>;
    /**
     * Disables a QoderCLI Connector in a specified workspace. The Connector can be disabled only when no Agent is using it. After the Connector is disabled, the Connector and its Service Account Key configuration are removed.
     *
     * @remarks
     * Disables a Connector in a specified workspace.
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
     * Disables a QoderCLI Connector in a specified workspace. The Connector can be disabled only when no Agent is using it. After the Connector is disabled, the Connector and its Service Account Key configuration are removed.
     *
     * @remarks
     * Disables a Connector in a specified workspace.
     *
     * @param request - DisableConnectorRequest
     * @returns DisableConnectorResponse
     */
    disableConnector(workspaceId: string, connectorName: string, request: $_model.DisableConnectorRequest): Promise<$_model.DisableConnectorResponse>;
    /**
     * Retrieves the presigned OSS download URL of a specified AgentSpec to download the AgentSpec ZIP package.
     *
     * @remarks
     * ## Request description
     * Retrieves the presigned OSS download URL of a specified AgentSpec to download the AgentSpec ZIP package.
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
     * Retrieves the presigned OSS download URL of a specified AgentSpec to download the AgentSpec ZIP package.
     *
     * @remarks
     * ## Request description
     * Retrieves the presigned OSS download URL of a specified AgentSpec to download the AgentSpec ZIP package.
     *
     * @param request - DownloadAgentSpecViaOssRequest
     * @returns DownloadAgentSpecViaOssResponse
     */
    downloadAgentSpecViaOss(workspaceId: string, agentSpecName: string, request: $_model.DownloadAgentSpecViaOssRequest): Promise<$_model.DownloadAgentSpecViaOssResponse>;
    /**
     * Retrieves a pre-signed OSS download URL for a specified Skill version, which is used to download the corresponding Skill ZIP package.
     *
     * @remarks
     * ## Operation description
     * Retrieves a pre-signed OSS download URL for a specified Skill version, which is used to download the corresponding Skill ZIP package.
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
     * Retrieves a pre-signed OSS download URL for a specified Skill version, which is used to download the corresponding Skill ZIP package.
     *
     * @remarks
     * ## Operation description
     * Retrieves a pre-signed OSS download URL for a specified Skill version, which is used to download the corresponding Skill ZIP package.
     *
     * @param request - DownloadSkillVersionViaOssRequest
     * @returns DownloadSkillVersionViaOssResponse
     */
    downloadSkillVersionViaOss(workspaceId: string, skillName: string, skillVersion: string, request: $_model.DownloadSkillVersionViaOssRequest): Promise<$_model.DownloadSkillVersionViaOssResponse>;
    /**
     * Enables a QoderCLI Connector in a specified workspace. The request must include the site, API key, and at least one service account key. The service validates all account keys before saving the configuration.
     *
     * @remarks
     * Enables a Connector in a specified workspace. Credential verification is required before the Connector can be enabled.
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
     * Enables a QoderCLI Connector in a specified workspace. The request must include the site, API key, and at least one service account key. The service validates all account keys before saving the configuration.
     *
     * @remarks
     * Enables a Connector in a specified workspace. Credential verification is required before the Connector can be enabled.
     *
     * @param request - EnableConnectorRequest
     * @returns EnableConnectorResponse
     */
    enableConnector(workspaceId: string, connectorName: string, request: $_model.EnableConnectorRequest): Promise<$_model.EnableConnectorResponse>;
    /**
     * Retrieves the image preparation task by using the client token submitted when creating or explicitly updating an image. This operation only queries the task and does not create a dump. If the returned phase is SUCCEEDED, the target version is deployed successfully.
     *
     * @remarks
     * Retrieves the task by using the original client token for creation or update when the response is lost. The backend parses the target agent and verifies permissions. A 404 error does not necessarily mean that the original submission was not accepted.
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
     * Retrieves the image preparation task by using the client token submitted when creating or explicitly updating an image. This operation only queries the task and does not create a dump. If the returned phase is SUCCEEDED, the target version is deployed successfully.
     *
     * @remarks
     * Retrieves the task by using the original client token for creation or update when the response is lost. The backend parses the target agent and verifies permissions. A 404 error does not necessarily mean that the original submission was not accepted.
     *
     * @param request - FindCustomAgentImagePreparationRequest
     * @returns FindCustomAgentImagePreparationResponse
     */
    findCustomAgentImagePreparation(workspaceId: string, request: $_model.FindCustomAgentImagePreparationRequest): Promise<$_model.FindCustomAgentImagePreparationResponse>;
    /**
     * Skips the regular review process and forcibly publishes a specified Skill version.
     *
     * @remarks
     * ## Operation description
     * Skips the regular review process and forcibly publishes a specified Skill version.
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
     * Skips the regular review process and forcibly publishes a specified Skill version.
     *
     * @remarks
     * ## Operation description
     * Skips the regular review process and forcibly publishes a specified Skill version.
     *
     * @param request - ForcePublishSkillVersionRequest
     * @returns ForcePublishSkillVersionResponse
     */
    forcePublishSkillVersion(workspaceId: string, skillName: string, skillVersion: string, request: $_model.ForcePublishSkillVersionRequest): Promise<$_model.ForcePublishSkillVersionResponse>;
    /**
     * Queries the access application.
     *
     * @remarks
     * Queries the access application. The secret is returned only upon creation and is not returned by the query operation.
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
     * Queries the access application. The secret is returned only upon creation and is not returned by the query operation.
     *
     * @param request - GetAccessApplicationRequest
     * @returns GetAccessApplicationResponse
     */
    getAccessApplication(workspaceId: string, applicationId: string, request: $_model.GetAccessApplicationRequest): Promise<$_model.GetAccessApplicationResponse>;
    /**
     * Retrieves the download URL for the saved code package of an agent.
     *
     * @remarks
     * Generates a time-limited, read-only download URL for the code package referenced by the currently saved agent configuration. This applies to code packages uploaded locally or imported from OSS. The package is located by using workspaceId and agentId. Arbitrary Bucket, Object Key, or historical version parameters are not accepted.
     * The current configuration must reference an available, fixed code package, and there is no need to wait for a running instance to be ready. An error is returned if the code package does not exist, has been changed, or is unreadable. The link is valid for up to 10 minutes and does not exceed the underlying credential expiration time. Call the API again after it expires. The resourceVersionId indicates the saved configuration version corresponding to this download. The sample download link is redacted. Use the downloadUrl in this response.
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
     * Retrieves the download URL for the saved code package of an agent.
     *
     * @remarks
     * Generates a time-limited, read-only download URL for the code package referenced by the currently saved agent configuration. This applies to code packages uploaded locally or imported from OSS. The package is located by using workspaceId and agentId. Arbitrary Bucket, Object Key, or historical version parameters are not accepted.
     * The current configuration must reference an available, fixed code package, and there is no need to wait for a running instance to be ready. An error is returned if the code package does not exist, has been changed, or is unreadable. The link is valid for up to 10 minutes and does not exceed the underlying credential expiration time. Call the API again after it expires. The resourceVersionId indicates the saved configuration version corresponding to this download. The sample download link is redacted. Use the downloadUrl in this response.
     *
     * @param request - GetAgentCodePackageDownloadUrlRequest
     * @returns GetAgentCodePackageDownloadUrlResponse
     */
    getAgentCodePackageDownloadUrl(workspaceId: string, agentId: string, request: $_model.GetAgentCodePackageDownloadUrlRequest): Promise<$_model.GetAgentCodePackageDownloadUrlResponse>;
    /**
     * Retrieves the OSS RAM authorization URL for the agent code package.
     *
     * @remarks
     * Generates a RAM authorization URL for the resource role of the current workspace for a specified source bucket. Clients cannot specify or override the role. After you open the authorizeUrl and confirm the authorization, call VerifyAgentCodePackageOssRamAuthorization to check the policy binding, and call ValidateAgentCodePackageFromOss to check specific objects.
     * This authorization reuses the OSSObjectRestoreCustom template, which includes permissions such as reading, writing, and deleting objects. It is not a read-only authorization. Retrieving the URL itself does not complete the authorization, transfer the code package, or modify the default OSS binding of the workspace. Existing authorizations for the same role and bucket can be reused. The example URL is provided to demonstrate the format. Use the actual authorization URL returned by the API operation.
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
     * Retrieves the OSS RAM authorization URL for the agent code package.
     *
     * @remarks
     * Generates a RAM authorization URL for the resource role of the current workspace for a specified source bucket. Clients cannot specify or override the role. After you open the authorizeUrl and confirm the authorization, call VerifyAgentCodePackageOssRamAuthorization to check the policy binding, and call ValidateAgentCodePackageFromOss to check specific objects.
     * This authorization reuses the OSSObjectRestoreCustom template, which includes permissions such as reading, writing, and deleting objects. It is not a read-only authorization. Retrieving the URL itself does not complete the authorization, transfer the code package, or modify the default OSS binding of the workspace. Existing authorizations for the same role and bucket can be reused. The example URL is provided to demonstrate the format. Use the actual authorization URL returned by the API operation.
     *
     * @param request - GetAgentCodePackageOssRamAuthorizeUrlRequest
     * @returns GetAgentCodePackageOssRamAuthorizeUrlResponse
     */
    getAgentCodePackageOssRamAuthorizeUrl(workspaceId: string, request: $_model.GetAgentCodePackageOssRamAuthorizeUrlRequest): Promise<$_model.GetAgentCodePackageOssRamAuthorizeUrlResponse>;
    /**
     * Retrieves the upload URL for an agent code package.
     *
     * @remarks
     * Retrieves a time-limited upload URL for a code package without uploading the file content. The fileName must be a ZIP or TAR.GZ file name without a directory path. The format must match the file extension. The fileSize is specified in bytes, with valid values ranging from 1 to 500,000,000.
     * Use the uploadMethod, uploadUrl, and headers from the response to upload the file directly. After the upload is complete, pass the sourceUri to the artifact.code.sourceUri parameter of CreateCustomAgent or UpdateCustomAgent. The actual object and size are verified and a fixed copy is saved during creation or update. The upload URL is valid for up to 10 minutes and does not exceed the validity period of the underlying temporary credentials. Retrieve a new URL if it expires. The example URL is redacted and cannot be used for actual uploads. Use the original URL and request headers from this response.
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
     * Retrieves the upload URL for an agent code package.
     *
     * @remarks
     * Retrieves a time-limited upload URL for a code package without uploading the file content. The fileName must be a ZIP or TAR.GZ file name without a directory path. The format must match the file extension. The fileSize is specified in bytes, with valid values ranging from 1 to 500,000,000.
     * Use the uploadMethod, uploadUrl, and headers from the response to upload the file directly. After the upload is complete, pass the sourceUri to the artifact.code.sourceUri parameter of CreateCustomAgent or UpdateCustomAgent. The actual object and size are verified and a fixed copy is saved during creation or update. The upload URL is valid for up to 10 minutes and does not exceed the validity period of the underlying temporary credentials. Retrieve a new URL if it expires. The example URL is redacted and cannot be used for actual uploads. Use the original URL and request headers from this response.
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
     * ## Request description
     * Queries the governance details of a specified AgentSpec, including basic information, governance pointers, and summaries of all versions.
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
     * ## Request description
     * Queries the governance details of a specified AgentSpec, including basic information, governance pointers, and summaries of all versions.
     *
     * @param request - GetAgentSpecRequest
     * @returns GetAgentSpecResponse
     */
    getAgentSpec(workspaceId: string, agentSpecName: string, request: $_model.GetAgentSpecRequest): Promise<$_model.GetAgentSpecResponse>;
    /**
     * Retrieves the OSS presigned upload URL and object name required to import an AgentSpec ZIP package. After the upload is complete, you can call the AgentSpec OSS upload API to complete the import.
     *
     * @remarks
     * ## Request description
     * Retrieves the OSS presigned upload URL and object name required to import an AgentSpec ZIP package. After the upload is complete, you can call the AgentSpec OSS upload API to complete the import.
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
     * Retrieves the OSS presigned upload URL and object name required to import an AgentSpec ZIP package. After the upload is complete, you can call the AgentSpec OSS upload API to complete the import.
     *
     * @remarks
     * ## Request description
     * Retrieves the OSS presigned upload URL and object name required to import an AgentSpec ZIP package. After the upload is complete, you can call the AgentSpec OSS upload API to complete the import.
     *
     * @param request - GetAgentSpecImportFileUrlRequest
     * @returns GetAgentSpecImportFileUrlResponse
     */
    getAgentSpecImportFileUrl(workspaceId: string, request: $_model.GetAgentSpecImportFileUrlRequest): Promise<$_model.GetAgentSpecImportFileUrlResponse>;
    /**
     * Queries the full content of the latest version of a specified AgentSpec for editing or viewing.
     *
     * @remarks
     * ## Operation description
     * Queries the full content of the latest version of a specified AgentSpec for editing or viewing.
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
     * Queries the full content of the latest version of a specified AgentSpec for editing or viewing.
     *
     * @remarks
     * ## Operation description
     * Queries the full content of the latest version of a specified AgentSpec for editing or viewing.
     *
     * @param request - GetAgentSpecLatestRequest
     * @returns GetAgentSpecLatestResponse
     */
    getAgentSpecLatest(workspaceId: string, agentSpecName: string, request: $_model.GetAgentSpecLatestRequest): Promise<$_model.GetAgentSpecLatestResponse>;
    /**
     * Queries the complete content of a specified AgentSpec version, including the manifest content, resource files, and metadata.
     *
     * @remarks
     * ## Request description
     * Queries the complete content of a specified AgentSpec version, including the manifest content, resource files, and metadata.
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
     * ## Request description
     * Queries the complete content of a specified AgentSpec version, including the manifest content, resource files, and metadata.
     *
     * @param request - GetAgentSpecVersionRequest
     * @returns GetAgentSpecVersionResponse
     */
    getAgentSpecVersion(workspaceId: string, agentSpecName: string, agentSpecVersion: string, request: $_model.GetAgentSpecVersionRequest): Promise<$_model.GetAgentSpecVersionResponse>;
    /**
     * Queries the details of a specified credential and returns the list of agents bound to the credential. The credential content is returned in a masked format.
     *
     * @remarks
     * Queries the details of a single credential. Sensitive fields are not returned.
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
     * Queries the details of a specified credential and returns the list of agents bound to the credential. The credential content is returned in a masked format.
     *
     * @remarks
     * Queries the details of a single credential. Sensitive fields are not returned.
     *
     * @param request - GetCredentialRequest
     * @returns GetCredentialResponse
     */
    getCredential(workspaceId: string, credentialId: string, request: $_model.GetCredentialRequest): Promise<$_model.GetCredentialResponse>;
    /**
     * Queries the details of a custom agent in a specified workspace, including the deployment configuration, the execute status of the latest configuration version, and the running instance status statistics.
     *
     * @remarks
     * After you create or update a custom agent, you can poll this operation to query the execution result of the latest configuration version. latestVersionStatus corresponds to latestSpecVersion. latestExecutionError indicates the cause of the pending or failed status for the version. If retryable is true, you can query again later.
     * The returned configuration is the latest submitted configuration and may not have taken effect. Verify the deployment and running status by checking latestVersionStatus, the overall agent status, and the sandboxPhaseCounts running instance statistics.
     * If the queried custom agent does not exist, has been deleted, or does not belong to the specified workspace, a resource not found error is returned.
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
     * Queries the details of a custom agent in a specified workspace, including the deployment configuration, the execute status of the latest configuration version, and the running instance status statistics.
     *
     * @remarks
     * After you create or update a custom agent, you can poll this operation to query the execution result of the latest configuration version. latestVersionStatus corresponds to latestSpecVersion. latestExecutionError indicates the cause of the pending or failed status for the version. If retryable is true, you can query again later.
     * The returned configuration is the latest submitted configuration and may not have taken effect. Verify the deployment and running status by checking latestVersionStatus, the overall agent status, and the sandboxPhaseCounts running instance statistics.
     * If the queried custom agent does not exist, has been deleted, or does not belong to the specified workspace, a resource not found error is returned.
     *
     * @param request - GetCustomAgentRequest
     * @returns GetCustomAgentResponse
     */
    getCustomAgent(workspaceId: string, agentId: string, request: $_model.GetCustomAgentRequest): Promise<$_model.GetCustomAgentResponse>;
    /**
     * Queries the image preparation and deployment phases by using the preparation ID. Regular polling does not create a dump task. Only phase=SUCCEEDED indicates that the target version is deployed successfully. The health of the previous instance does not indicate the success of the current deployment.
     *
     * @remarks
     * Queries the preparation and deployment phases of the current submission. The health of the previous instance does not indicate the success of the current deployment. Only phase=SUCCEEDED indicates completion. Regular polling does not create a dump task. A network interruption does not indicate task failure.
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
     * Queries the image preparation and deployment phases by using the preparation ID. Regular polling does not create a dump task. Only phase=SUCCEEDED indicates that the target version is deployed successfully. The health of the previous instance does not indicate the success of the current deployment.
     *
     * @remarks
     * Queries the preparation and deployment phases of the current submission. The health of the previous instance does not indicate the success of the current deployment. Only phase=SUCCEEDED indicates completion. Regular polling does not create a dump task. A network interruption does not indicate task failure.
     *
     * @param request - GetCustomAgentImagePreparationRequest
     * @returns GetCustomAgentImagePreparationResponse
     */
    getCustomAgentImagePreparation(workspaceId: string, preparationId: string, request: $_model.GetCustomAgentImagePreparationRequest): Promise<$_model.GetCustomAgentImagePreparationResponse>;
    /**
     * Queries the details of a specified external agent.
     *
     * @remarks
     * Queries the details of a specified external agent.
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
     * Queries the details of a specified external agent.
     *
     * @remarks
     * Queries the details of a specified external agent.
     *
     * @param request - GetExternalAgentRequest
     * @returns GetExternalAgentResponse
     */
    getExternalAgent(workspaceId: string, agentId: string, request: $_model.GetExternalAgentRequest): Promise<$_model.GetExternalAgentResponse>;
    /**
     * Queries the available access network types for a specified external agent.
     *
     * @remarks
     * Queries the available access network types for a specified external agent.
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
     * Queries the available access network types for a specified external agent.
     *
     * @remarks
     * Queries the available access network types for a specified external agent.
     *
     * @param request - GetExternalAgentBootstrapOptionsRequest
     * @returns GetExternalAgentBootstrapOptionsResponse
     */
    getExternalAgentBootstrapOptions(workspaceId: string, agentId: string, request: $_model.GetExternalAgentBootstrapOptionsRequest): Promise<$_model.GetExternalAgentBootstrapOptionsResponse>;
    /**
     * Queries the binding and expected configuration of a specified identity provider. If CustomSSO is configured with SAML, this operation reads back the actual upstream SSO configuration. The SCIM status is queried through a separate API operation.
     *
     * @remarks
     * ## Features and prerequisites
     * Reads existing bindings by type. CustomSSO returns the saved protocol, normalized saml, expected loginEnabled, syncEnabled, and shared binding status. If SAML is not configured, saml and configuration may not be returned. If saml is configured, the system additionally queries AgentIdentity, and configuration represents the actual SSO configuration. The saml field is the data source for the edit form. The status switch for configuration is Enabled or Disabled. If the upstream query fails, an error is returned. The failure cannot be treated as an unconfigured state.
     * Only this operation reads back the actual SAML configuration. List and write operations do not guarantee that configuration is returned. WAITING_CONFIGURATION indicates that user pool initialization is complete but the SAML metadata has not been saved. In this case, you can read the service provider (SP) information, fill in the configuration, or disconnect the integration. Do not lock the form and wait for the READY state. UPDATING and UPDATE_FAILED describe logon configuration tasks, not SCIM tasks. The vendor callback URL for CustomSSO is empty. Use GetIdentityProviderSCIM.operationStatus to query SCIM operation results.
     * ## Requests and examples
     * GET /workspaces/{workspaceId}/identity-providers/{identityProviderType}
     * Call conventions: Call the operation in the region of the target workspace by using an AccessKey pair or STS credential that has permissions on the identity provider resources of the workspace. In the following examples, ws-example, URLs, certificates, and tokens are placeholder values and must be replaced with actual values. The request body example represents the body parameters of the public API operation, not the extra body wrapper of the backend direct-connection API operation. The response example shows only the business data. The outer layer also includes requestId, success, code, message, and httpStatusCode. Keep the requestId for troubleshooting and do not record keys. Asynchronous business tasks do not mean that the HTTP request uses a persistent connection to wait for completion.
     * ```text
     * GET /workspaces/ws-example/identity-providers/CustomSSO
     * ```
     * ## Response examples
     * ```json
     * {
     *   "data": {
     *     "workspaceId": "ws-example",
     *     "identityProviderType": "CustomSSO",
     *     "status": "WAITING_CONFIGURATION",
     *     "loginEnabled": false,
     *     "syncEnabled": false
     *   }
     * }
     * ```
     * ## Errors and handling
     * Error handling: 400 InvalidParameter indicates that the parameters or current configuration prerequisites are not met. 404 IdentityProviderNotFound indicates that no binding of the matching type exists. A synchronous call to the upstream service may fail and return 503 IdentityProviderProvisioningUnavailable. Keep the request ID for troubleshooting and do not interpret a read failure as an unconfigured state. Actual authentication and workspace non-existence errors follow common error handling procedures.
     * 404 IdentityProviderNotFound: No binding exists, or the input type is inconsistent with the current binding. If SAML is already configured, an upstream readback failure does not degrade to a successful empty configuration.
     * ## Call relationships and usage boundaries
     * SAML configuration completion and logon enabling are independent operations. protocol=SAML and the presence of the saml field indicate that the logon configuration has been submitted, and loginEnabled indicates the expected logon switch. Check the effective status based on the actual SSO status in configuration. SCIM uses an independent query operation. Do not use status=READY of this operation as the basis for successful SCIM synchronization. Currently, OIDC and JIT configurations or JIT status fields are not provided.
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
     * Queries the binding and expected configuration of a specified identity provider. If CustomSSO is configured with SAML, this operation reads back the actual upstream SSO configuration. The SCIM status is queried through a separate API operation.
     *
     * @remarks
     * ## Features and prerequisites
     * Reads existing bindings by type. CustomSSO returns the saved protocol, normalized saml, expected loginEnabled, syncEnabled, and shared binding status. If SAML is not configured, saml and configuration may not be returned. If saml is configured, the system additionally queries AgentIdentity, and configuration represents the actual SSO configuration. The saml field is the data source for the edit form. The status switch for configuration is Enabled or Disabled. If the upstream query fails, an error is returned. The failure cannot be treated as an unconfigured state.
     * Only this operation reads back the actual SAML configuration. List and write operations do not guarantee that configuration is returned. WAITING_CONFIGURATION indicates that user pool initialization is complete but the SAML metadata has not been saved. In this case, you can read the service provider (SP) information, fill in the configuration, or disconnect the integration. Do not lock the form and wait for the READY state. UPDATING and UPDATE_FAILED describe logon configuration tasks, not SCIM tasks. The vendor callback URL for CustomSSO is empty. Use GetIdentityProviderSCIM.operationStatus to query SCIM operation results.
     * ## Requests and examples
     * GET /workspaces/{workspaceId}/identity-providers/{identityProviderType}
     * Call conventions: Call the operation in the region of the target workspace by using an AccessKey pair or STS credential that has permissions on the identity provider resources of the workspace. In the following examples, ws-example, URLs, certificates, and tokens are placeholder values and must be replaced with actual values. The request body example represents the body parameters of the public API operation, not the extra body wrapper of the backend direct-connection API operation. The response example shows only the business data. The outer layer also includes requestId, success, code, message, and httpStatusCode. Keep the requestId for troubleshooting and do not record keys. Asynchronous business tasks do not mean that the HTTP request uses a persistent connection to wait for completion.
     * ```text
     * GET /workspaces/ws-example/identity-providers/CustomSSO
     * ```
     * ## Response examples
     * ```json
     * {
     *   "data": {
     *     "workspaceId": "ws-example",
     *     "identityProviderType": "CustomSSO",
     *     "status": "WAITING_CONFIGURATION",
     *     "loginEnabled": false,
     *     "syncEnabled": false
     *   }
     * }
     * ```
     * ## Errors and handling
     * Error handling: 400 InvalidParameter indicates that the parameters or current configuration prerequisites are not met. 404 IdentityProviderNotFound indicates that no binding of the matching type exists. A synchronous call to the upstream service may fail and return 503 IdentityProviderProvisioningUnavailable. Keep the request ID for troubleshooting and do not interpret a read failure as an unconfigured state. Actual authentication and workspace non-existence errors follow common error handling procedures.
     * 404 IdentityProviderNotFound: No binding exists, or the input type is inconsistent with the current binding. If SAML is already configured, an upstream readback failure does not degrade to a successful empty configuration.
     * ## Call relationships and usage boundaries
     * SAML configuration completion and logon enabling are independent operations. protocol=SAML and the presence of the saml field indicate that the logon configuration has been submitted, and loginEnabled indicates the expected logon switch. Check the effective status based on the actual SSO status in configuration. SCIM uses an independent query operation. Do not use status=READY of this operation as the basis for successful SCIM synchronization. Currently, OIDC and JIT configurations or JIT status fields are not provided.
     *
     * @param request - GetIdentityProviderRequest
     * @returns GetIdentityProviderResponse
     */
    getIdentityProvider(workspaceId: string, identityProviderType: string, request: $_model.GetIdentityProviderRequest): Promise<$_model.GetIdentityProviderResponse>;
    /**
     * Queries the actual SCIM receiving configuration, the expected AC synchronization switch, and the status of the most recent independent SCIM task. Prior SAML configuration is not required.
     *
     * @remarks
     * ## Features and prerequisites
     * The shared CustomSSO user pool must be created and not in the process of overall unbinding or unbinding failure. Prior SAML configuration is not required. Ongoing SAML updates or update failures do not block the query. The configuration.status and baseUrl fields are retrieved from AgentIdentity. syncEnabled is the expected synchronization switch for AC. operationStatus represents the most recent independent SCIM switch and the initial full import task when enabled. The presence of a URL does not indicate that external provisioning is complete, nor does it mean that AC synchronization is enabled.
     * operationStatus: PENDING (waiting), RUNNING (executing), PAUSED (paused), SUCCESS (succeeded), FAILED (failed), CANCELED (canceled). Returns null or is omitted if no historical tasks exist. You can poll the status when it is PENDING or RUNNING. Stop polling when it reaches a terminal state. You can manually refresh the status when it is PAUSED. This operation does not provide the taskId or failure details, and does not indicate credential issuance, external provisioning connection tests, or the health of continuous incremental synchronization. The URL, credentials, and historical task records may be retained after it is disabled.
     * status is the independent SCIM configuration state: UNCONFIGURED (preparation is not complete); WAITING_CONFIGURATION (the receiving endpoint is enabled, the HTTPS URL is valid, and at least one valid token exists, waiting for external configuration and enablement confirmation); UPDATING (an enablement or disablement task is being executed); READY (synchronization is enabled and the current enablement task succeeded, and the receiving endpoint, URL, and credentials remain available); DISABLED (disabled and the configuration is retained); UPDATE_FAILED (the operation failed, was paused, was canceled, or the configuration and credentials are unavailable after enablement). The original facts of configuration, syncEnabled, and operationStatus are retained. The SAML or OIDC binding status is not used to determine the SCIM status. The READY state does not prove that Matrix execution is complete, the external connection test has passed, or continuous incremental synchronization is healthy.
     * ## Requests and examples
     * GET /workspaces/{workspaceId}/scim-provisioning
     * Calling conventions: Call this operation in the region of the target workspace by using an AccessKey pair or STS credential that has the required permissions on the identity source resources of the workspace. In the following examples, ws-example, URLs, certificates, and tokens are placeholder values and must be replaced with actual values. The request body example shows the body parameters of the public API operation, not the extra body wrapper of the backend direct connection API operation. The response example shows only the business data. The outer layer also includes requestId, success, code, message, and httpStatusCode. Retain the requestId for troubleshooting and do not log secrets. Asynchronous business tasks do not imply that the HTTP request uses a long-lived connection to wait for completion.
     * ```text
     * GET /workspaces/ws-example/scim-provisioning
     * ```
     * ## Response examples
     * ```json
     * {
     *   "data": {
     *     "status": "READY",
     *     "configuration": {
     *       "status": "Enabled",
     *       "baseUrl": "https://example.com/scim/v2"
     *     },
     *     "syncEnabled": true,
     *     "operationStatus": "SUCCESS"
     *   }
     * }
     * ```
     * ## Errors and handling
     * Error handling: 400 InvalidParameter indicates that the parameters or current configuration prerequisites are not met. 404 IdentityProviderNotFound indicates that no binding of the matching type exists. Synchronous calls that fail upstream may return 503 IdentityProviderProvisioningUnavailable. Retain the request ID for troubleshooting and do not interpret read failures as unconfigured. Actual authentication and workspace-not-found errors follow the common error handling process.
     * 400 InvalidParameter: the shared user pool is unavailable, being unbound, or failed to unbind. If no binding exists, 404 IdentityProviderNotFound is returned. Upstream read failures must retain the original error and cannot be mapped to Disabled, unconfigured, or synchronization succeeded.
     * ## Call relationships and usage boundaries
     * SCIM configuration sequence: After preparing the shared pool, call PrepareIdentityProviderSCIM and configure the returned baseUrl and newly issued token into the provisioning system of the external IdP. After completing the external connection test, call UpdateIdentityProviderSCIM to enable synchronization, and then call this operation to query operationStatus. SUCCESS only indicates that the most recent SCIM task is complete. It does not indicate the health of continuous incremental synchronization or the success of the external provisioning connection test.
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
     * Queries the actual SCIM receiving configuration, the expected AC synchronization switch, and the status of the most recent independent SCIM task. Prior SAML configuration is not required.
     *
     * @remarks
     * ## Features and prerequisites
     * The shared CustomSSO user pool must be created and not in the process of overall unbinding or unbinding failure. Prior SAML configuration is not required. Ongoing SAML updates or update failures do not block the query. The configuration.status and baseUrl fields are retrieved from AgentIdentity. syncEnabled is the expected synchronization switch for AC. operationStatus represents the most recent independent SCIM switch and the initial full import task when enabled. The presence of a URL does not indicate that external provisioning is complete, nor does it mean that AC synchronization is enabled.
     * operationStatus: PENDING (waiting), RUNNING (executing), PAUSED (paused), SUCCESS (succeeded), FAILED (failed), CANCELED (canceled). Returns null or is omitted if no historical tasks exist. You can poll the status when it is PENDING or RUNNING. Stop polling when it reaches a terminal state. You can manually refresh the status when it is PAUSED. This operation does not provide the taskId or failure details, and does not indicate credential issuance, external provisioning connection tests, or the health of continuous incremental synchronization. The URL, credentials, and historical task records may be retained after it is disabled.
     * status is the independent SCIM configuration state: UNCONFIGURED (preparation is not complete); WAITING_CONFIGURATION (the receiving endpoint is enabled, the HTTPS URL is valid, and at least one valid token exists, waiting for external configuration and enablement confirmation); UPDATING (an enablement or disablement task is being executed); READY (synchronization is enabled and the current enablement task succeeded, and the receiving endpoint, URL, and credentials remain available); DISABLED (disabled and the configuration is retained); UPDATE_FAILED (the operation failed, was paused, was canceled, or the configuration and credentials are unavailable after enablement). The original facts of configuration, syncEnabled, and operationStatus are retained. The SAML or OIDC binding status is not used to determine the SCIM status. The READY state does not prove that Matrix execution is complete, the external connection test has passed, or continuous incremental synchronization is healthy.
     * ## Requests and examples
     * GET /workspaces/{workspaceId}/scim-provisioning
     * Calling conventions: Call this operation in the region of the target workspace by using an AccessKey pair or STS credential that has the required permissions on the identity source resources of the workspace. In the following examples, ws-example, URLs, certificates, and tokens are placeholder values and must be replaced with actual values. The request body example shows the body parameters of the public API operation, not the extra body wrapper of the backend direct connection API operation. The response example shows only the business data. The outer layer also includes requestId, success, code, message, and httpStatusCode. Retain the requestId for troubleshooting and do not log secrets. Asynchronous business tasks do not imply that the HTTP request uses a long-lived connection to wait for completion.
     * ```text
     * GET /workspaces/ws-example/scim-provisioning
     * ```
     * ## Response examples
     * ```json
     * {
     *   "data": {
     *     "status": "READY",
     *     "configuration": {
     *       "status": "Enabled",
     *       "baseUrl": "https://example.com/scim/v2"
     *     },
     *     "syncEnabled": true,
     *     "operationStatus": "SUCCESS"
     *   }
     * }
     * ```
     * ## Errors and handling
     * Error handling: 400 InvalidParameter indicates that the parameters or current configuration prerequisites are not met. 404 IdentityProviderNotFound indicates that no binding of the matching type exists. Synchronous calls that fail upstream may return 503 IdentityProviderProvisioningUnavailable. Retain the request ID for troubleshooting and do not interpret read failures as unconfigured. Actual authentication and workspace-not-found errors follow the common error handling process.
     * 400 InvalidParameter: the shared user pool is unavailable, being unbound, or failed to unbind. If no binding exists, 404 IdentityProviderNotFound is returned. Upstream read failures must retain the original error and cannot be mapped to Disabled, unconfigured, or synchronization succeeded.
     * ## Call relationships and usage boundaries
     * SCIM configuration sequence: After preparing the shared pool, call PrepareIdentityProviderSCIM and configure the returned baseUrl and newly issued token into the provisioning system of the external IdP. After completing the external connection test, call UpdateIdentityProviderSCIM to enable synchronization, and then call this operation to query operationStatus. SUCCESS only indicates that the most recent SCIM task is complete. It does not indicate the health of continuous incremental synchronization or the success of the external provisioning connection test.
     *
     * @param request - GetIdentityProviderSCIMRequest
     * @returns GetIdentityProviderSCIMResponse
     */
    getIdentityProviderSCIM(workspaceId: string, request: $_model.GetIdentityProviderSCIMRequest): Promise<$_model.GetIdentityProviderSCIMResponse>;
    /**
     * Queries the SAML service provider (SP) information of CustomSSO, including the Entity ID, Assertion Consumer Service (ACS) URL, and SP metadata XML, for users to configure an external identity provider (IdP).
     *
     * @remarks
     * ## Features and prerequisites
     * An available CustomSSO shared user pool is required. The identityProviderType must be CustomSSO, and the protocol parameter is required and only supports the exact value SAML. Uploading the IdP metadata in advance is not required. This operation returns the entityId, acsUrl, and metadataXml of the local SP for users to configure an external IdP. These values are not the logon URL or IdP Entity ID of the external IdP. You cannot submit the SP XML as the IdP XML to UpdateIdentityProvider.
     * This operation is read-only. It does not enable logon, enable SCIM, create credentials, or perform logon connection tests. You cannot read the information when the shared pool is being initialized, being unbound, or failed to be unbound.
     * ## Requests and examples
     * GET /workspaces/{workspaceId}/identity-providers/{identityProviderType}/service-provider
     * Call conventions: Call this operation in the region of the target workspace by using an AccessKey pair or STS token that has the permissions on the identity source resources of the workspace. The ws-example, URLs, certificates, and tokens in the following examples are placeholder values and must be replaced with actual values. The request body example shows the body parameters of the public API operation, not the extra body wrapper of the backend direct connection API operation. The response example shows only the business part. The outer layer also includes requestId, success, code, message, and httpStatusCode. Retain the requestId for troubleshooting and do not record keys. Asynchronous business tasks do not mean that the HTTP request uses a long connection to wait for completion.
     * ```text
     * GET /workspaces/ws-example/identity-providers/CustomSSO/service-provider?protocol=SAML
     * ```
     * ## Response examples
     * ```json
     * {
     *   "data": {
     *     "protocol": "SAML",
     *     "entityId": "<Local SP Entity ID>",
     *     "acsUrl": "https://example.com/saml/acs",
     *     "metadataXml": "<Local SP Metadata XML>"
     *   }
     * }
     * ```
     * ## Errors and handling
     * Error handling: 400 InvalidParameter indicates that the parameters or current configuration prerequisites are not met. 404 IdentityProviderNotFound indicates that no binding of the matching type exists. A synchronous call failure to the upstream service may return 503 IdentityProviderProvisioningUnavailable. Retain the request ID for troubleshooting and do not interpret a read failure as unconfigured. Actual authentication and workspace non-existence errors follow the common error handling.
     * 400 InvalidParameter: The identityProviderType or protocol is not supported. 404 IdentityProviderNotFound: No CustomSSO binding exists. 409 IdentityProviderOperationConflict: The user pool is not ready, is being unbound, or failed to be unbound.
     * ## Call relationships and usage boundaries
     * SAML configuration sequence: Call CreateIdentityProvider to initialize the CustomSSO shared pool and wait for GetIdentityProvider to return READY. Call this operation to obtain the SP information and configure it in the external IdP. Then, submit the external IdP metadata XML or complete manual configuration to UpdateIdentityProvider. After saving, enable loginEnabled separately as needed. Querying the SP information does not complete the external IdP configuration or verify logon.
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
     * Queries the SAML service provider (SP) information of CustomSSO, including the Entity ID, Assertion Consumer Service (ACS) URL, and SP metadata XML, for users to configure an external identity provider (IdP).
     *
     * @remarks
     * ## Features and prerequisites
     * An available CustomSSO shared user pool is required. The identityProviderType must be CustomSSO, and the protocol parameter is required and only supports the exact value SAML. Uploading the IdP metadata in advance is not required. This operation returns the entityId, acsUrl, and metadataXml of the local SP for users to configure an external IdP. These values are not the logon URL or IdP Entity ID of the external IdP. You cannot submit the SP XML as the IdP XML to UpdateIdentityProvider.
     * This operation is read-only. It does not enable logon, enable SCIM, create credentials, or perform logon connection tests. You cannot read the information when the shared pool is being initialized, being unbound, or failed to be unbound.
     * ## Requests and examples
     * GET /workspaces/{workspaceId}/identity-providers/{identityProviderType}/service-provider
     * Call conventions: Call this operation in the region of the target workspace by using an AccessKey pair or STS token that has the permissions on the identity source resources of the workspace. The ws-example, URLs, certificates, and tokens in the following examples are placeholder values and must be replaced with actual values. The request body example shows the body parameters of the public API operation, not the extra body wrapper of the backend direct connection API operation. The response example shows only the business part. The outer layer also includes requestId, success, code, message, and httpStatusCode. Retain the requestId for troubleshooting and do not record keys. Asynchronous business tasks do not mean that the HTTP request uses a long connection to wait for completion.
     * ```text
     * GET /workspaces/ws-example/identity-providers/CustomSSO/service-provider?protocol=SAML
     * ```
     * ## Response examples
     * ```json
     * {
     *   "data": {
     *     "protocol": "SAML",
     *     "entityId": "<Local SP Entity ID>",
     *     "acsUrl": "https://example.com/saml/acs",
     *     "metadataXml": "<Local SP Metadata XML>"
     *   }
     * }
     * ```
     * ## Errors and handling
     * Error handling: 400 InvalidParameter indicates that the parameters or current configuration prerequisites are not met. 404 IdentityProviderNotFound indicates that no binding of the matching type exists. A synchronous call failure to the upstream service may return 503 IdentityProviderProvisioningUnavailable. Retain the request ID for troubleshooting and do not interpret a read failure as unconfigured. Actual authentication and workspace non-existence errors follow the common error handling.
     * 400 InvalidParameter: The identityProviderType or protocol is not supported. 404 IdentityProviderNotFound: No CustomSSO binding exists. 409 IdentityProviderOperationConflict: The user pool is not ready, is being unbound, or failed to be unbound.
     * ## Call relationships and usage boundaries
     * SAML configuration sequence: Call CreateIdentityProvider to initialize the CustomSSO shared pool and wait for GetIdentityProvider to return READY. Call this operation to obtain the SP information and configure it in the external IdP. Then, submit the external IdP metadata XML or complete manual configuration to UpdateIdentityProvider. After saving, enable loginEnabled separately as needed. Querying the SP information does not complete the external IdP configuration or verify logon.
     *
     * @param request - GetIdentityProviderServiceProviderRequest
     * @returns GetIdentityProviderServiceProviderResponse
     */
    getIdentityProviderServiceProvider(workspaceId: string, identityProviderType: string, request: $_model.GetIdentityProviderServiceProviderRequest): Promise<$_model.GetIdentityProviderServiceProviderResponse>;
    /**
     * Queries an identity provider synchronization task.
     *
     * @remarks
     * Queries the status, current step, number of processed users, and failure cause of a manual synchronization task based on the local taskId in AgentCore. The taskId must be returned by CreateIdentityProviderSyncJob for the same workspace and identity provider. It is not the synchronizationJobId of AgentIdentity. Poll the task until the status is SUCCESS, FAILED, or CANCELED. The PENDING, RUNNING, and PAUSED statuses do not indicate completion. The syncedUserCount includes updated existing users and does not represent the number of newly added users or the progress percentage.
     * Authorization information: The RAM action is agentcore:GetIdentityProviderSyncJob. The access level is Read. The resource ARN is acs:agentcore:{regionId}:{accountId}:workspace/{workspaceId}/identityProvider/{identityProviderType}. This resource is required for authorization.
     * Idempotence and retry: This API operation is read-only and can be repeatedly called.
     * Calling this API operation is free of charge. Operation records support ActionTrail audit.
     * Sample response:
     * ```json
     * {
     *   "requestId": "01234567-89AB-CDEF-0123-456789ABCDEF",
     *   "message": "success",
     *   "httpStatusCode": 200,
     *   "code": "SUCCESS",
     *   "success": true,
     *   "data": {
     *     "taskId": "12345678-1234-4234-8234-123456789abc",
     *     "status": "SUCCESS",
     *     "currentStep": "SYNC",
     *     "synchronizationJobId": "syncjob_0123456789abcdef0123456789abcdef",
     *     "syncedUserCount": 12
     *   }
     * }
     * ```
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
     * Queries the status, current step, number of processed users, and failure cause of a manual synchronization task based on the local taskId in AgentCore. The taskId must be returned by CreateIdentityProviderSyncJob for the same workspace and identity provider. It is not the synchronizationJobId of AgentIdentity. Poll the task until the status is SUCCESS, FAILED, or CANCELED. The PENDING, RUNNING, and PAUSED statuses do not indicate completion. The syncedUserCount includes updated existing users and does not represent the number of newly added users or the progress percentage.
     * Authorization information: The RAM action is agentcore:GetIdentityProviderSyncJob. The access level is Read. The resource ARN is acs:agentcore:{regionId}:{accountId}:workspace/{workspaceId}/identityProvider/{identityProviderType}. This resource is required for authorization.
     * Idempotence and retry: This API operation is read-only and can be repeatedly called.
     * Calling this API operation is free of charge. Operation records support ActionTrail audit.
     * Sample response:
     * ```json
     * {
     *   "requestId": "01234567-89AB-CDEF-0123-456789ABCDEF",
     *   "message": "success",
     *   "httpStatusCode": 200,
     *   "code": "SUCCESS",
     *   "success": true,
     *   "data": {
     *     "taskId": "12345678-1234-4234-8234-123456789abc",
     *     "status": "SUCCESS",
     *     "currentStep": "SYNC",
     *     "synchronizationJobId": "syncjob_0123456789abcdef0123456789abcdef",
     *     "syncedUserCount": 12
     *   }
     * }
     * ```
     *
     * @param request - GetIdentityProviderSyncJobRequest
     * @returns GetIdentityProviderSyncJobResponse
     */
    getIdentityProviderSyncJob(workspaceId: string, identityProviderType: string, taskId: string, request: $_model.GetIdentityProviderSyncJobRequest): Promise<$_model.GetIdentityProviderSyncJobResponse>;
    /**
     * Queries the synchronization scope of an identity provider.
     *
     * @remarks
     * Queries the saved synchronization scope, selected department validity, and user count estimation of the downstream identity provider. This operation is not used for real-time estimation of unsaved selections. AllAuthorized indicates the address book scope authorized for the application, which is not equivalent to the entire enterprise organization. An empty selectedDepartments array does not indicate that the organization has no sub-departments. Estimations can only be used when estimateStatus is Ready and a count is returned. A missing count does not indicate 0.
     * Authorization information: The RAM operation is agentcore:GetIdentityProviderSyncScope. The access level is Read. The resource ARN is acs:agentcore:{regionId}:{accountId}:workspace/{workspaceId}/identityProvider/{identityProviderType}. This resource is a required authorization resource.
     * Idempotence and retry: This operation is read-only and can be called repeatedly.
     * Calling this API is free of charge. Operation records support ActionTrail auditing.
     * Response example:
     * ```json
     * {
     *   "requestId": "01234567-89AB-CDEF-0123-456789ABCDEF",
     *   "message": "success",
     *   "httpStatusCode": 200,
     *   "code": "SUCCESS",
     *   "success": true,
     *   "data": {
     *     "syncScope": {
     *       "mode": "SelectedDepartments",
     *       "departmentIds": [
     *         "10001"
     *       ]
     *     },
     *     "selectedDepartments": [
     *       {
     *         "id": "10001",
     *         "name": "R&D Department",
     *         "exists": true
     *       }
     *     ],
     *     "estimateStatus": "Ready",
     *     "expandedDepartmentCount": 2,
     *     "estimatedUserCount": 12
     *   }
     * }
     * ```
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
     * Queries the saved synchronization scope, selected department validity, and user count estimation of the downstream identity provider. This operation is not used for real-time estimation of unsaved selections. AllAuthorized indicates the address book scope authorized for the application, which is not equivalent to the entire enterprise organization. An empty selectedDepartments array does not indicate that the organization has no sub-departments. Estimations can only be used when estimateStatus is Ready and a count is returned. A missing count does not indicate 0.
     * Authorization information: The RAM operation is agentcore:GetIdentityProviderSyncScope. The access level is Read. The resource ARN is acs:agentcore:{regionId}:{accountId}:workspace/{workspaceId}/identityProvider/{identityProviderType}. This resource is a required authorization resource.
     * Idempotence and retry: This operation is read-only and can be called repeatedly.
     * Calling this API is free of charge. Operation records support ActionTrail auditing.
     * Response example:
     * ```json
     * {
     *   "requestId": "01234567-89AB-CDEF-0123-456789ABCDEF",
     *   "message": "success",
     *   "httpStatusCode": 200,
     *   "code": "SUCCESS",
     *   "success": true,
     *   "data": {
     *     "syncScope": {
     *       "mode": "SelectedDepartments",
     *       "departmentIds": [
     *         "10001"
     *       ]
     *     },
     *     "selectedDepartments": [
     *       {
     *         "id": "10001",
     *         "name": "R&D Department",
     *         "exists": true
     *       }
     *     ],
     *     "estimateStatus": "Ready",
     *     "expandedDepartmentCount": 2,
     *     "estimatedUserCount": 12
     *   }
     * }
     * ```
     *
     * @param request - GetIdentityProviderSyncScopeRequest
     * @returns GetIdentityProviderSyncScopeResponse
     */
    getIdentityProviderSyncScope(workspaceId: string, identityProviderType: string, request: $_model.GetIdentityProviderSyncScopeRequest): Promise<$_model.GetIdentityProviderSyncScopeResponse>;
    /**
     * Queries the details of an image cache.
     *
     * @remarks
     * Queries the details of the logical image cache in the current workspace. It returns the complete source, current digest, actual capacity, creation time, status, and secure error messages. The AgentCount field counts the configuration references with the feature enabled. The CanDelete field verifies both configuration references and instance usage. If the feature is disabled, the count is 0, but deletion remains prohibited if legacy instances are not released. Resources with the same content from other workspaces are not returned if the resource does not belong to the current workspace.
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
     * Queries the details of an image cache.
     *
     * @remarks
     * Queries the details of the logical image cache in the current workspace. It returns the complete source, current digest, actual capacity, creation time, status, and secure error messages. The AgentCount field counts the configuration references with the feature enabled. The CanDelete field verifies both configuration references and instance usage. If the feature is disabled, the count is 0, but deletion remains prohibited if legacy instances are not released. Resources with the same content from other workspaces are not returned if the resource does not belong to the current workspace.
     *
     * @param request - GetImageCacheRequest
     * @returns GetImageCacheResponse
     */
    getImageCache(imageId: string, request: $_model.GetImageCacheRequest): Promise<$_model.GetImageCacheResponse>;
    /**
     * Queries the details of a specified managed agent.
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
     * Queries the details of a specified managed agent.
     *
     * @param request - GetManagedAgentRequest
     * @returns GetManagedAgentResponse
     */
    getManagedAgent(workspaceId: string, agentId: string, request: $_model.GetManagedAgentRequest): Promise<$_model.GetManagedAgentResponse>;
    /**
     * Queries the details of a specified MCP service, such as the address, type, status, authentication configuration, and protocol.
     *
     * @remarks
     * ## Request description
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
     * ## Request description
     * Queries the details of a specified MCP service, such as the address, type, status, authentication configuration, and protocol.
     *
     * @param request - GetMcpRequest
     * @returns GetMcpResponse
     */
    getMcp(workspaceId: string, mcpServerId: string, request: $_model.GetMcpRequest): Promise<$_model.GetMcpResponse>;
    /**
     * Queries the details of an MCP marketplace template.
     *
     * @remarks
     * Returns the current template version and installation form schema.
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
     * Returns the current template version and installation form schema.
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
     * Queries the public information and current status of a MemoryStore in a specified workspace.
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
     * Queries the public information and current status of a MemoryStore in a specified workspace.
     *
     * @param request - GetMemoryStoreRequest
     * @returns GetMemoryStoreResponse
     */
    getMemoryStore(workspaceId: string, memoryStoreName: string, request: $_model.GetMemoryStoreRequest): Promise<$_model.GetMemoryStoreResponse>;
    /**
     * Queries the task ID returned by the asynchronous AddMemories operation.
     *
     * @remarks
     * Queries the task ID returned by the asynchronous AddMemories operation.
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
     * Queries the task ID returned by the asynchronous AddMemories operation.
     *
     * @remarks
     * Queries the task ID returned by the asynchronous AddMemories operation.
     *
     * @param request - GetMemoryTaskRequest
     * @returns GetMemoryTaskResponse
     */
    getMemoryTask(workspaceId: string, memoryStoreName: string, taskId: string, request: $_model.GetMemoryTaskRequest): Promise<$_model.GetMemoryTaskResponse>;
    /**
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
     * @param request - GetModelRequest
     * @returns GetModelResponse
     */
    getModel(workspaceId: string, modelId: string, request: $_model.GetModelRequest): Promise<$_model.GetModelResponse>;
    /**
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
     * @param request - GetModelConnectionRequest
     * @returns GetModelConnectionResponse
     */
    getModelConnection(workspaceId: string, connectionId: string, request: $_model.GetModelConnectionRequest): Promise<$_model.GetModelConnectionResponse>;
    /**
     * Queries the details of a specified service endpoint, including target routing, access URLs, authentication configuration, and current status.
     *
     * @remarks
     * ## Operation description\\nQueries the details of a specified service endpoint. A service endpoint (ServiceEndpoint) provides a stable access URL for a specific agent version (AgentVersion) or workspace collaboration component. The response includes target routing, access URL list, authentication configuration, and current lifecycle status.\\n.
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
     * Queries the details of a specified service endpoint, including target routing, access URLs, authentication configuration, and current status.
     *
     * @remarks
     * ## Operation description\\nQueries the details of a specified service endpoint. A service endpoint (ServiceEndpoint) provides a stable access URL for a specific agent version (AgentVersion) or workspace collaboration component. The response includes target routing, access URL list, authentication configuration, and current lifecycle status.\\n.
     *
     * @param request - GetServiceEndpointRequest
     * @returns GetServiceEndpointResponse
     */
    getServiceEndpoint(workspaceId: string, serviceEndpointId: string, request: $_model.GetServiceEndpointRequest): Promise<$_model.GetServiceEndpointResponse>;
    /**
     * Queries the currently active API key and its invocation method for a service endpoint in a specified workspace.
     *
     * @remarks
     * Queries the currently active API key for a specified service endpoint. The call succeeds only when API key authentication is enabled for the service endpoint and the gateway consumer and credentials are ready. The service reads the API key from the gateway in real time, and AgentCore does not persist the plaintext. Keep the returned API key secure and avoid logging it or exposing it in public configurations.
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
     * Queries the currently active API key and its invocation method for a service endpoint in a specified workspace.
     *
     * @remarks
     * Queries the currently active API key for a specified service endpoint. The call succeeds only when API key authentication is enabled for the service endpoint and the gateway consumer and credentials are ready. The service reads the API key from the gateway in real time, and AgentCore does not persist the plaintext. Keep the returned API key secure and avoid logging it or exposing it in public configurations.
     *
     * @param request - GetServiceEndpointApiKeyRequest
     * @returns GetServiceEndpointApiKeyResponse
     */
    getServiceEndpointApiKey(workspaceId: string, serviceEndpointId: string, request: $_model.GetServiceEndpointApiKeyRequest): Promise<$_model.GetServiceEndpointApiKeyResponse>;
    /**
     * Queries the basic information, version status, tags, visibility scope, and version list of a specified skill.
     *
     * @remarks
     * ## Request description
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
     * ## Request description
     * Queries the basic information, version status, tags, visibility scope, and version list of a specified skill.
     *
     * @param request - GetSkillDetailRequest
     * @returns GetSkillDetailResponse
     */
    getSkillDetail(workspaceId: string, skillName: string, request: $_model.GetSkillDetailRequest): Promise<$_model.GetSkillDetailResponse>;
    /**
     * Retrieves the OSS presigned upload URL and object name required to import a Skill ZIP package. After the upload is complete, you can call the Skill OSS upload API to complete the import.
     *
     * @remarks
     * ## Request description
     * Retrieves the OSS presigned upload URL and object name required to import a Skill ZIP package. After the upload is complete, you can call the Skill OSS upload API to complete the import.
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
     * Retrieves the OSS presigned upload URL and object name required to import a Skill ZIP package. After the upload is complete, you can call the Skill OSS upload API to complete the import.
     *
     * @remarks
     * ## Request description
     * Retrieves the OSS presigned upload URL and object name required to import a Skill ZIP package. After the upload is complete, you can call the Skill OSS upload API to complete the import.
     *
     * @param request - GetSkillImportFileUrlRequest
     * @returns GetSkillImportFileUrlResponse
     */
    getSkillImportFileUrl(workspaceId: string, request: $_model.GetSkillImportFileUrlRequest): Promise<$_model.GetSkillImportFileUrlResponse>;
    /**
     * Queries the complete details of a specified Skill version, including version metadata, Skill content, and associated resources.
     *
     * @remarks
     * ## Operation description
     * Queries the complete details of a specified Skill version, including version metadata, Skill content, and associated resources.
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
     * Queries the complete details of a specified Skill version, including version metadata, Skill content, and associated resources.
     *
     * @remarks
     * ## Operation description
     * Queries the complete details of a specified Skill version, including version metadata, Skill content, and associated resources.
     *
     * @param request - GetSkillVersionDetailRequest
     * @returns GetSkillVersionDetailResponse
     */
    getSkillVersionDetail(workspaceId: string, skillName: string, skillVersion: string, request: $_model.GetSkillVersionDetailRequest): Promise<$_model.GetSkillVersionDetailResponse>;
    /**
     * Queries the details of a specified team. The response includes the complete attributes and team roles of each user member and agent member in the team.
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
     * Queries the details of a specified team. The response includes the complete attributes and team roles of each user member and agent member in the team.
     *
     * @param request - GetTeamRequest
     * @returns GetTeamResponse
     */
    getTeam(workspaceId: string, teamId: string, request: $_model.GetTeamRequest): Promise<$_model.GetTeamResponse>;
    /**
     * Queries the details of a specific user in a specified workspace. Returns an error if the user does not exist.
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
     * @param request - GetUserRequest
     * @returns GetUserResponse
     */
    getUser(workspaceId: string, agentCoreUserId: string, request: $_model.GetUserRequest): Promise<$_model.GetUserResponse>;
    /**
     * Queries the details of a workspace by workspace ID, including the lifecycle status, CMS Workspace, AIRegistry Namespace, and current network policies.
     *
     * @remarks
     * ## Request description\\nQueries the details of a workspace by workspace ID, including the lifecycle status, CMS Workspace, AIRegistry Namespace, and current network policies.\\n.
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
     * Queries the details of a workspace by workspace ID, including the lifecycle status, CMS Workspace, AIRegistry Namespace, and current network policies.
     *
     * @remarks
     * ## Request description\\nQueries the details of a workspace by workspace ID, including the lifecycle status, CMS Workspace, AIRegistry Namespace, and current network policies.\\n.
     *
     * @param request - GetWorkspaceRequest
     * @returns GetWorkspaceResponse
     */
    getWorkspace(workspaceId: string, request: $_model.GetWorkspaceRequest): Promise<$_model.GetWorkspaceResponse>;
    /**
     * Queries the RAM authorization URL for ACR in a workspace.
     *
     * @remarks
     * ACR and user OSS mounts share the workspace role. If no existing role is found, AliyunAgentCoreWorkspace-{workspaceId} is used. If a valid legacy OSS mount role exists, it is retained and only new permissions are appended without overwriting existing OSS policies. Fixed historical shared roles continue to be reused and are not recreated or renamed due to new naming templates. The acrInstanceId, namespace, and repository parameters are required. The region and account are derived from the workspace context. Returns the role resolved by the backend and the authorization URL for the target repository. It does not create ACR or agent execution versions, nor does it deliver runtime configurations. After authorization is complete, you can verify it and then create or update the agent without calling a separate Ensure operation.
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
     * Queries the RAM authorization URL for ACR in a workspace.
     *
     * @remarks
     * ACR and user OSS mounts share the workspace role. If no existing role is found, AliyunAgentCoreWorkspace-{workspaceId} is used. If a valid legacy OSS mount role exists, it is retained and only new permissions are appended without overwriting existing OSS policies. Fixed historical shared roles continue to be reused and are not recreated or renamed due to new naming templates. The acrInstanceId, namespace, and repository parameters are required. The region and account are derived from the workspace context. Returns the role resolved by the backend and the authorization URL for the target repository. It does not create ACR or agent execution versions, nor does it deliver runtime configurations. After authorization is complete, you can verify it and then create or update the agent without calling a separate Ensure operation.
     *
     * @param request - GetWorkspaceAcrRamAuthorizeUrlRequest
     * @returns GetWorkspaceAcrRamAuthorizeUrlResponse
     */
    getWorkspaceAcrRamAuthorizeUrl(workspaceId: string, request: $_model.GetWorkspaceAcrRamAuthorizeUrlRequest): Promise<$_model.GetWorkspaceAcrRamAuthorizeUrlResponse>;
    /**
     * Queries the RAM authorization URL for mounting AgenticFS in a workspace.
     *
     * @remarks
     * Determines the account, region, and shared role based on the workspace, and concatenates the resource ARN based on the provided fileSystemId and accessPointId. The server parameter is used to generate the policy name. This operation does not query NAS or check the resource status, and returns an authorization URL that contains only the target NAS policy. After completing RAM authorization, you must call the verification API.
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
     * Queries the RAM authorization URL for mounting AgenticFS in a workspace.
     *
     * @remarks
     * Determines the account, region, and shared role based on the workspace, and concatenates the resource ARN based on the provided fileSystemId and accessPointId. The server parameter is used to generate the policy name. This operation does not query NAS or check the resource status, and returns an authorization URL that contains only the target NAS policy. After completing RAM authorization, you must call the verification API.
     *
     * @param request - GetWorkspaceAgenticFsMountRamAuthorizeUrlRequest
     * @returns GetWorkspaceAgenticFsMountRamAuthorizeUrlResponse
     */
    getWorkspaceAgenticFsMountRamAuthorizeUrl(workspaceId: string, request: $_model.GetWorkspaceAgenticFsMountRamAuthorizeUrlRequest): Promise<$_model.GetWorkspaceAgenticFsMountRamAuthorizeUrlResponse>;
    /**
     * Queries the plugin status of a specified workspace.
     *
     * @remarks
     * ## Request description\\nQueries the plugin status of a specified workspace. Returns whether the plugin is enabled, its lifecycle status, and the currently effective configuration. Currently, two types of plugins are supported: collaboration and agentloop. If a plugin is not installed, its status is DISABLED.\\n.
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
     * Queries the plugin status of a specified workspace.
     *
     * @remarks
     * ## Request description\\nQueries the plugin status of a specified workspace. Returns whether the plugin is enabled, its lifecycle status, and the currently effective configuration. Currently, two types of plugins are supported: collaboration and agentloop. If a plugin is not installed, its status is DISABLED.\\n.
     *
     * @param request - GetWorkspacePluginRequest
     * @returns GetWorkspacePluginResponse
     */
    getWorkspacePlugin(workspaceId: string, pluginName: string, request: $_model.GetWorkspacePluginRequest): Promise<$_model.GetWorkspacePluginResponse>;
    /**
     * Installs an MCP marketplace template.
     *
     * @remarks
     * Validates the input based on the specified template version and creates an MCP in the workspace.
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
     * Validates the input based on the specified template version and creates an MCP in the workspace.
     *
     * @param request - InstallMcpMarketItemRequest
     * @returns InstallMcpMarketItemResponse
     */
    installMcpMarketItem(workspaceId: string, marketItemId: string, request: $_model.InstallMcpMarketItemRequest): Promise<$_model.InstallMcpMarketItemResponse>;
    /**
     * Installs a plugin for a specified AgentCore workspace. Currently, only the collaboration plugin is supported. The installation process runs asynchronously.
     *
     * @remarks
     * ## Request description\\nInstalls a plugin for a specified AgentCore workspace. Currently, only the `collaboration` plugin is supported. Plugin configurations are passed through the `Config` parameter, and different plugins can define their own configuration structures. The `collaboration` plugin uses `Config.NetworkConfiguration` to specify the VPC and public network access policy. The installation procedure executes asynchronously. If you repeatedly invoke this operation for a plugin with the same name that is being installed or already installed, the operation returns the current status based on idempotent semantics if the configurations are identical. If the configurations are different, the operation returns an operation conflict.\\n
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
     * Installs a plugin for a specified AgentCore workspace. Currently, only the collaboration plugin is supported. The installation process runs asynchronously.
     *
     * @remarks
     * ## Request description\\nInstalls a plugin for a specified AgentCore workspace. Currently, only the `collaboration` plugin is supported. Plugin configurations are passed through the `Config` parameter, and different plugins can define their own configuration structures. The `collaboration` plugin uses `Config.NetworkConfiguration` to specify the VPC and public network access policy. The installation procedure executes asynchronously. If you repeatedly invoke this operation for a plugin with the same name that is being installed or already installed, the operation returns the current status based on idempotent semantics if the configurations are identical. If the configurations are different, the operation returns an operation conflict.\\n
     *
     * @param request - InstallWorkspacePluginRequest
     * @returns InstallWorkspacePluginResponse
     */
    installWorkspacePlugin(workspaceId: string, pluginName: string, request: $_model.InstallWorkspacePluginRequest): Promise<$_model.InstallWorkspacePluginResponse>;
    /**
     * Queries the runtime environments supported for code deployment.
     *
     * @remarks
     * Queries the directory of runtime environments available in the current workspace for creating code package agents or switching runtime environments. The runtime environments are dynamically provided based on the current version configuration, and internal image addresses are not returned.
     * If maxResults is omitted or set to 0, the default value is 10. If it is greater than 100, it is processed as 100. Omit nextToken in the first request. For subsequent requests, use the token returned in the previous response as is, and keep the workspace unchanged. If the token becomes invalid due to directory changes, query from the first page again. An empty nextToken indicates that there are no more pages. Existing agents continue to use the saved images for restarts, scale-outs, and regular updates.
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
     * Queries the runtime environments supported for code deployment.
     *
     * @remarks
     * Queries the directory of runtime environments available in the current workspace for creating code package agents or switching runtime environments. The runtime environments are dynamically provided based on the current version configuration, and internal image addresses are not returned.
     * If maxResults is omitted or set to 0, the default value is 10. If it is greater than 100, it is processed as 100. Omit nextToken in the first request. For subsequent requests, use the token returned in the previous response as is, and keep the workspace unchanged. If the token becomes invalid due to directory changes, query from the first page again. An empty nextToken indicates that there are no more pages. Existing agents continue to use the saved images for restarts, scale-outs, and regular updates.
     *
     * @param request - ListAgentCodeRuntimesRequest
     * @returns ListAgentCodeRuntimesResponse
     */
    listAgentCodeRuntimes(workspaceId: string, request: $_model.ListAgentCodeRuntimesRequest): Promise<$_model.ListAgentCodeRuntimesResponse>;
    /**
     * Queries the list of IM channels for a specified agent.
     *
     * @remarks
     * Queries the list of IM channels for a specified agent.
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
     * Queries the list of IM channels for a specified agent.
     *
     * @remarks
     * Queries the list of IM channels for a specified agent.
     *
     * @param request - ListAgentIMChannelsRequest
     * @returns ListAgentIMChannelsResponse
     */
    listAgentIMChannels(workspaceId: string, agentId: string, request: $_model.ListAgentIMChannelsRequest): Promise<$_model.ListAgentIMChannelsResponse>;
    /**
     * Queries AgentSpec resources in a specified workspace by using paging, and supports name-based search, sorting, and filtering by owner, visibility scope, and business labels.
     *
     * @remarks
     * ## Operation description
     * Queries AgentSpec resources in a specified workspace by using paging, and supports name-based search, sorting, and filtering by owner, visibility scope, and business labels.
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
     * Queries AgentSpec resources in a specified workspace by using paging, and supports name-based search, sorting, and filtering by owner, visibility scope, and business labels.
     *
     * @remarks
     * ## Operation description
     * Queries AgentSpec resources in a specified workspace by using paging, and supports name-based search, sorting, and filtering by owner, visibility scope, and business labels.
     *
     * @param request - ListAgentSpecsRequest
     * @returns ListAgentSpecsResponse
     */
    listAgentSpecs(workspaceId: string, request: $_model.ListAgentSpecsRequest): Promise<$_model.ListAgentSpecsResponse>;
    /**
     * Queries the teams to which specified agents belong. Specify the agent IDs by using agentIds to retrieve the membership information of each agent in the teams, including the team ID, team name, and the role of the agent in the team.
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
     * Queries the teams to which specified agents belong. Specify the agent IDs by using agentIds to retrieve the membership information of each agent in the teams, including the team ID, team name, and the role of the agent in the team.
     *
     * @param request - ListAgentTeamsRequest
     * @returns ListAgentTeamsResponse
     */
    listAgentTeams(workspaceId: string, request: $_model.ListAgentTeamsRequest): Promise<$_model.ListAgentTeamsResponse>;
    /**
     * Queries the available official models and enterprise models for an enabled QoderCLI Connector. The service retrieves models in real time by using the saved API key and organization ID, and deduplicates the results by model ID.
     *
     * @remarks
     * Queries the list of available models for a specified Connector. Pagination is supported.
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
     * Queries the available official models and enterprise models for an enabled QoderCLI Connector. The service retrieves models in real time by using the saved API key and organization ID, and deduplicates the results by model ID.
     *
     * @remarks
     * Queries the list of available models for a specified Connector. Pagination is supported.
     *
     * @param request - ListConnectorModelsRequest
     * @returns ListConnectorModelsResponse
     */
    listConnectorModels(workspaceId: string, connectorName: string, request: $_model.ListConnectorModelsRequest): Promise<$_model.ListConnectorModelsResponse>;
    /**
     * Queries the list of connectors supported by a specified workspace, including their status, number of bound agents, and configurations. The current version returns the QoderCLI connector.
     *
     * @remarks
     * Queries the list of connectors in a specified workspace.
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
     * Queries the list of connectors supported by a specified workspace, including their status, number of bound agents, and configurations. The current version returns the QoderCLI connector.
     *
     * @remarks
     * Queries the list of connectors in a specified workspace.
     *
     * @param request - ListConnectorsRequest
     * @returns ListConnectorsResponse
     */
    listConnectors(workspaceId: string, request: $_model.ListConnectorsRequest): Promise<$_model.ListConnectorsResponse>;
    /**
     * Performs a paged query for credentials in a specified workspace. Filters by type using credentialType, performs fuzzy filtering by credential name using nameLike, configures paging by specifying the maximum number of records per page using maxResults, and retrieves the next page using nextToken. If maxResults is not specified, the server returns 10 records by default.
     *
     * @remarks
     * Performs a paged query for the credential list in a workspace, and supports filtering by type and name during paging.
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
     * Performs a paged query for credentials in a specified workspace. Filters by type using credentialType, performs fuzzy filtering by credential name using nameLike, configures paging by specifying the maximum number of records per page using maxResults, and retrieves the next page using nextToken. If maxResults is not specified, the server returns 10 records by default.
     *
     * @remarks
     * Performs a paged query for the credential list in a workspace, and supports filtering by type and name during paging.
     *
     * @param request - ListCredentialsRequest
     * @returns ListCredentialsResponse
     */
    listCredentials(workspaceId: string, request: $_model.ListCredentialsRequest): Promise<$_model.ListCredentialsResponse>;
    /**
     * Performs a paging query to retrieve the summaries of custom agents in a specified workspace. To obtain the complete configuration and the execution results of the latest version, call GetCustomAgent.
     *
     * @remarks
     * The default value of maxResults is 20, and the maximum value is 100. If this parameter is omitted or set to 0, the default value is used.
     * For the first request, omit nextToken. For subsequent requests, pass the nextToken value returned in the previous response as is, and keep the same workspace. The nextToken is an opaque token. Do not parse or construct it yourself. An empty token in the response indicates that there are no more pages.
     * This operation returns the summaries for the current page and does not return the complete deployment configuration or the execution errors of the latest version. To obtain this information, call GetCustomAgent by using the agentId in the items.
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
     * Performs a paging query to retrieve the summaries of custom agents in a specified workspace. To obtain the complete configuration and the execution results of the latest version, call GetCustomAgent.
     *
     * @remarks
     * The default value of maxResults is 20, and the maximum value is 100. If this parameter is omitted or set to 0, the default value is used.
     * For the first request, omit nextToken. For subsequent requests, pass the nextToken value returned in the previous response as is, and keep the same workspace. The nextToken is an opaque token. Do not parse or construct it yourself. An empty token in the response indicates that there are no more pages.
     * This operation returns the summaries for the current page and does not return the complete deployment configuration or the execution errors of the latest version. To obtain this information, call GetCustomAgent by using the agentId in the items.
     *
     * @param request - ListCustomAgentsRequest
     * @returns ListCustomAgentsResponse
     */
    listCustomAgents(workspaceId: string, request: $_model.ListCustomAgentsRequest): Promise<$_model.ListCustomAgentsResponse>;
    /**
     * Queries the list of external agents in a specified workspace.
     *
     * @remarks
     * Queries the list of external agents in a specified workspace.
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
     * Queries the list of external agents in a specified workspace.
     *
     * @remarks
     * Queries the list of external agents in a specified workspace.
     *
     * @param request - ListExternalAgentsRequest
     * @returns ListExternalAgentsResponse
     */
    listExternalAgents(workspaceId: string, request: $_model.ListExternalAgentsRequest): Promise<$_model.ListExternalAgentsResponse>;
    /**
     * Performs a paging query on the departments of an identity provider.
     *
     * @remarks
     * Performs a paging query on DingTalk or Lark departments by hierarchy. You must attach an identity provider, configure a user pool, obtain valid application credentials, and grant address book read authorization. If parentDepartmentId is not specified, the root hierarchy is queried. When expanding a node, use the ID of the node to query its direct child departments. The hasChildren field is used to determine expandability and does not indicate that child nodes have been returned. The nextToken field is only used to continue querying the next page under the current parent department. The query only reads the directory, does not save the synchronization scope, and does not import users. After a new department is added to a DingTalk or Lark organization, you should re-query the corresponding parent department because the old list cannot represent the latest directory.
     * Authorization information: The RAM action is agentcore:ListIdentityProviderDepartments, the access level is List, and the resource ARN is acs:agentcore:{regionId}:{accountId}:workspace/{workspaceId}/identityProvider/{identityProviderType}. This resource is a required authorization resource.
     * Idempotence and retry: This operation is read-only and can be queried repeatedly.
     * It is free of charge to invoke this API operation, and operation records support ActionTrail auditing.
     * Response example:
     * ```json
     * {
     *   "requestId": "01234567-89AB-CDEF-0123-456789ABCDEF",
     *   "message": "success",
     *   "httpStatusCode": 200,
     *   "code": "SUCCESS",
     *   "success": true,
     *   "maxResults": 50,
     *   "nextToken": "",
     *   "items": [
     *     {
     *       "id": "10001",
     *       "name": "R&D Department",
     *       "parentId": "1",
     *       "memberCount": 12,
     *       "hasChildren": true
     *     }
     *   ]
     * }
     * ```
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
     * Performs a paging query on the departments of an identity provider.
     *
     * @remarks
     * Performs a paging query on DingTalk or Lark departments by hierarchy. You must attach an identity provider, configure a user pool, obtain valid application credentials, and grant address book read authorization. If parentDepartmentId is not specified, the root hierarchy is queried. When expanding a node, use the ID of the node to query its direct child departments. The hasChildren field is used to determine expandability and does not indicate that child nodes have been returned. The nextToken field is only used to continue querying the next page under the current parent department. The query only reads the directory, does not save the synchronization scope, and does not import users. After a new department is added to a DingTalk or Lark organization, you should re-query the corresponding parent department because the old list cannot represent the latest directory.
     * Authorization information: The RAM action is agentcore:ListIdentityProviderDepartments, the access level is List, and the resource ARN is acs:agentcore:{regionId}:{accountId}:workspace/{workspaceId}/identityProvider/{identityProviderType}. This resource is a required authorization resource.
     * Idempotence and retry: This operation is read-only and can be queried repeatedly.
     * It is free of charge to invoke this API operation, and operation records support ActionTrail auditing.
     * Response example:
     * ```json
     * {
     *   "requestId": "01234567-89AB-CDEF-0123-456789ABCDEF",
     *   "message": "success",
     *   "httpStatusCode": 200,
     *   "code": "SUCCESS",
     *   "success": true,
     *   "maxResults": 50,
     *   "nextToken": "",
     *   "items": [
     *     {
     *       "id": "10001",
     *       "name": "R&D Department",
     *       "parentId": "1",
     *       "memberCount": 12,
     *       "hasChildren": true
     *     }
     *   ]
     * }
     * ```
     *
     * @param request - ListIdentityProviderDepartmentsRequest
     * @returns ListIdentityProviderDepartmentsResponse
     */
    listIdentityProviderDepartments(workspaceId: string, identityProviderType: string, request: $_model.ListIdentityProviderDepartmentsRequest): Promise<$_model.ListIdentityProviderDepartmentsResponse>;
    /**
     * Queries the complete summary list of up to two SCIM credentials in the shared user pool. Plaintext tokens are not returned, and pagination is not supported.
     *
     * @remarks
     * ## Features and prerequisites
     * Retrieves the current credential summary list from AgentIdentity and returns a data array. Each item contains credentialId, status, createTime, and expireTime. An empty array is returned if no credentials exist. This operation does not support the maxResults or nextToken parameters, and does not provide pagination capabilities. Do not call this operation with fake pagination fields. The list never returns plaintext tokens, nor does it enable receiving or issuing new credentials.
     * Receiving is not required to be currently enabled, but the shared pool must be available. A credential is considered available if its status is Enabled and its expireTime is later than the current time. The maximum limit of two credentials is determined by AgentIdentity. Client-side counting is for reference only. The list may contain unavailable or expired credentials. Do not assume that available tokens exist based on this list.
     * ## Requests and examples
     * GET /workspaces/{workspaceId}/scim-provisioning/credentials
     * Calling conventions: Call this operation in the region of the target workspace by using an AccessKey pair or STS credential that has the required permissions on the identity source resources of the workspace. In the following examples, ws-example, URLs, certificates, and tokens are placeholder values and must be replaced with actual values. The request body example shows the body parameters of the public API operation, rather than the extra body wrapper of the backend direct-connection API operation. The response example shows only the business data. The outer layer also includes requestId, success, code, message, and httpStatusCode. Retain the requestId for troubleshooting and do not record keys. Asynchronous business tasks do not imply that the HTTP request uses a persistent connection to wait for completion.
     * ```text
     * GET /workspaces/ws-example/scim-provisioning/credentials
     * ```
     * ## Response examples
     * ```json
     * {
     *   "data": [
     *     {
     *       "credentialId": "credential-example",
     *       "status": "Enabled",
     *       "createTime": "<upstream creation time>",
     *       "expireTime": "<upstream expiration time>"
     *     }
     *   ]
     * }
     * ```
     * ## Errors and handling
     * Error handling: A 400 InvalidParameter error indicates that the parameters or current configuration prerequisites are not met. A 404 IdentityProviderNotFound error indicates that no binding of the matching type exists. Synchronous calls to the upstream service may return a 503 IdentityProviderProvisioningUnavailable error if they fail. Retain the request ID for troubleshooting and do not interpret read failures as an unconfigured state. Actual authentication and workspace non-existence errors follow the common error handling process.
     * 400 InvalidParameter: The shared user pool is unavailable. 404 IdentityProviderNotFound: No corresponding binding exists. Upstream query failures must not be replaced with an empty list. Otherwise, users may be induced to repeatedly create credentials.
     * ## Call relationships and usage boundaries
     * Used for configuration recovery and credential management: Existing plaintext tokens cannot be queried and retrieved again. The list provides only credential summaries. Call CreateIdentityProviderSCIMCredential when a new token is required. Submit the credentialId from the list to DeleteIdentityProviderSCIMCredential when a credential needs to be revoked. A maximum of two credentials are allowed in the same pool. This operation returns the complete array and does not support or fabricate pagination parameters.
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
     * Queries the complete summary list of up to two SCIM credentials in the shared user pool. Plaintext tokens are not returned, and pagination is not supported.
     *
     * @remarks
     * ## Features and prerequisites
     * Retrieves the current credential summary list from AgentIdentity and returns a data array. Each item contains credentialId, status, createTime, and expireTime. An empty array is returned if no credentials exist. This operation does not support the maxResults or nextToken parameters, and does not provide pagination capabilities. Do not call this operation with fake pagination fields. The list never returns plaintext tokens, nor does it enable receiving or issuing new credentials.
     * Receiving is not required to be currently enabled, but the shared pool must be available. A credential is considered available if its status is Enabled and its expireTime is later than the current time. The maximum limit of two credentials is determined by AgentIdentity. Client-side counting is for reference only. The list may contain unavailable or expired credentials. Do not assume that available tokens exist based on this list.
     * ## Requests and examples
     * GET /workspaces/{workspaceId}/scim-provisioning/credentials
     * Calling conventions: Call this operation in the region of the target workspace by using an AccessKey pair or STS credential that has the required permissions on the identity source resources of the workspace. In the following examples, ws-example, URLs, certificates, and tokens are placeholder values and must be replaced with actual values. The request body example shows the body parameters of the public API operation, rather than the extra body wrapper of the backend direct-connection API operation. The response example shows only the business data. The outer layer also includes requestId, success, code, message, and httpStatusCode. Retain the requestId for troubleshooting and do not record keys. Asynchronous business tasks do not imply that the HTTP request uses a persistent connection to wait for completion.
     * ```text
     * GET /workspaces/ws-example/scim-provisioning/credentials
     * ```
     * ## Response examples
     * ```json
     * {
     *   "data": [
     *     {
     *       "credentialId": "credential-example",
     *       "status": "Enabled",
     *       "createTime": "<upstream creation time>",
     *       "expireTime": "<upstream expiration time>"
     *     }
     *   ]
     * }
     * ```
     * ## Errors and handling
     * Error handling: A 400 InvalidParameter error indicates that the parameters or current configuration prerequisites are not met. A 404 IdentityProviderNotFound error indicates that no binding of the matching type exists. Synchronous calls to the upstream service may return a 503 IdentityProviderProvisioningUnavailable error if they fail. Retain the request ID for troubleshooting and do not interpret read failures as an unconfigured state. Actual authentication and workspace non-existence errors follow the common error handling process.
     * 400 InvalidParameter: The shared user pool is unavailable. 404 IdentityProviderNotFound: No corresponding binding exists. Upstream query failures must not be replaced with an empty list. Otherwise, users may be induced to repeatedly create credentials.
     * ## Call relationships and usage boundaries
     * Used for configuration recovery and credential management: Existing plaintext tokens cannot be queried and retrieved again. The list provides only credential summaries. Call CreateIdentityProviderSCIMCredential when a new token is required. Submit the credentialId from the list to DeleteIdentityProviderSCIMCredential when a credential needs to be revoked. A maximum of two credentials are allowed in the same pool. This operation returns the complete array and does not support or fabricate pagination parameters.
     *
     * @param request - ListIdentityProviderSCIMCredentialsRequest
     * @returns ListIdentityProviderSCIMCredentialsResponse
     */
    listIdentityProviderSCIMCredentials(workspaceId: string, request: $_model.ListIdentityProviderSCIMCredentialsRequest): Promise<$_model.ListIdentityProviderSCIMCredentialsResponse>;
    /**
     * Queries the summary of existing identity provider bindings for a workspace, including CustomSSO. Returns local binding information without querying the actual upstream SAML or SCIM configurations.
     *
     * @remarks
     * ## Features and prerequisites
     * WAITING_CONFIGURATION also occupies the unique external identity provider quota for the workspace. CustomSSO (SAML/OIDC and SCIM) is mutually exclusive with DingTalk and Lark. SCIM reuses the CustomSSO binding and does not create a second identity provider. Creating other types returns 409 IdentityProviderAlreadyBound. You can change the binding only after unbinding and removing the existing binding.
     * Returns the local binding summary without querying the actual SAML and SCIM configurations of AgentIdentity. If no binding exists, items is an empty array. Currently, a workspace supports only one external binding. The default value of maxResults is 10, and the valid values are 1 to 100. Currently, nextToken can only be omitted or left empty. A non-empty value returns InvalidParameter, and multi-page results cannot be fabricated.
     * When CustomSSO initialization is complete but SAML metadata is not saved, the status is WAITING_CONFIGURATION. You can upload the configuration, which does not indicate that a background task is still running. After the configuration is saved, the status changes to UPDATING, and changes to READY after the task succeeds. To query SCIM independently, use GetIdentityProviderSCIM. The list does not issue tokens and does not return the vendor appSecret, encryptKey, or verificationToken.
     * ## Requests and examples
     * GET /workspaces/{workspaceId}/identity-providers
     * Call conventions: Call the API in the region of the target workspace by using an AccessKey pair or STS token that has permissions on the identity provider resources of the workspace. The ws-example, URLs, certificates, and tokens in the following examples are placeholder values and must be replaced with actual values. The request example shows the body parameters of the public API, not the extra body wrapper of the backend direct connection API. The response example shows only the business part. The outer layer also includes requestId, success, code, message, and httpStatusCode. Retain the requestId for troubleshooting and do not record keys. Asynchronous business tasks do not mean that the HTTP request uses a long connection to wait for completion.
     * ```text
     * GET /workspaces/ws-example/identity-providers?maxResults=10
     * ```
     * ## Response examples
     * ```json
     * {
     *   "items": [
     *     {
     *       "workspaceId": "ws-example",
     *       "identityProviderType": "CustomSSO",
     *       "status": "WAITING_CONFIGURATION",
     *       "loginEnabled": false,
     *       "syncEnabled": false
     *     }
     *   ],
     *   "maxResults": 10,
     *   "totalCount": 1
     * }
     * ```
     * ## Errors and handling
     * Error handling: 400 InvalidParameter indicates that the parameters or current configuration prerequisites are not met. 404 IdentityProviderNotFound indicates that no binding of the matching type exists. A synchronous call failure to the upstream may return 503 IdentityProviderProvisioningUnavailable. Retain the request ID for troubleshooting and do not interpret a read failure as unconfigured. Actual authentication and workspace non-existence errors follow the common error handling.
     * 400 InvalidParameter: maxResults is out of bounds or nextToken is non-empty, which is currently not supported. When a query fails, an error is displayed, and the status is not cleared to unconfigured.
     * ## Call relationships and usage boundaries
     * This API is used to discover the current binding. To query the specific SAML configuration of CustomSSO, use GetIdentityProvider. To query the SP address, use GetIdentityProviderServiceProvider. To query the actual SCIM configuration and independent operation results, use GetIdentityProviderSCIM.
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
     * ## Features and prerequisites
     * WAITING_CONFIGURATION also occupies the unique external identity provider quota for the workspace. CustomSSO (SAML/OIDC and SCIM) is mutually exclusive with DingTalk and Lark. SCIM reuses the CustomSSO binding and does not create a second identity provider. Creating other types returns 409 IdentityProviderAlreadyBound. You can change the binding only after unbinding and removing the existing binding.
     * Returns the local binding summary without querying the actual SAML and SCIM configurations of AgentIdentity. If no binding exists, items is an empty array. Currently, a workspace supports only one external binding. The default value of maxResults is 10, and the valid values are 1 to 100. Currently, nextToken can only be omitted or left empty. A non-empty value returns InvalidParameter, and multi-page results cannot be fabricated.
     * When CustomSSO initialization is complete but SAML metadata is not saved, the status is WAITING_CONFIGURATION. You can upload the configuration, which does not indicate that a background task is still running. After the configuration is saved, the status changes to UPDATING, and changes to READY after the task succeeds. To query SCIM independently, use GetIdentityProviderSCIM. The list does not issue tokens and does not return the vendor appSecret, encryptKey, or verificationToken.
     * ## Requests and examples
     * GET /workspaces/{workspaceId}/identity-providers
     * Call conventions: Call the API in the region of the target workspace by using an AccessKey pair or STS token that has permissions on the identity provider resources of the workspace. The ws-example, URLs, certificates, and tokens in the following examples are placeholder values and must be replaced with actual values. The request example shows the body parameters of the public API, not the extra body wrapper of the backend direct connection API. The response example shows only the business part. The outer layer also includes requestId, success, code, message, and httpStatusCode. Retain the requestId for troubleshooting and do not record keys. Asynchronous business tasks do not mean that the HTTP request uses a long connection to wait for completion.
     * ```text
     * GET /workspaces/ws-example/identity-providers?maxResults=10
     * ```
     * ## Response examples
     * ```json
     * {
     *   "items": [
     *     {
     *       "workspaceId": "ws-example",
     *       "identityProviderType": "CustomSSO",
     *       "status": "WAITING_CONFIGURATION",
     *       "loginEnabled": false,
     *       "syncEnabled": false
     *     }
     *   ],
     *   "maxResults": 10,
     *   "totalCount": 1
     * }
     * ```
     * ## Errors and handling
     * Error handling: 400 InvalidParameter indicates that the parameters or current configuration prerequisites are not met. 404 IdentityProviderNotFound indicates that no binding of the matching type exists. A synchronous call failure to the upstream may return 503 IdentityProviderProvisioningUnavailable. Retain the request ID for troubleshooting and do not interpret a read failure as unconfigured. Actual authentication and workspace non-existence errors follow the common error handling.
     * 400 InvalidParameter: maxResults is out of bounds or nextToken is non-empty, which is currently not supported. When a query fails, an error is displayed, and the status is not cleared to unconfigured.
     * ## Call relationships and usage boundaries
     * This API is used to discover the current binding. To query the specific SAML configuration of CustomSSO, use GetIdentityProvider. To query the SP address, use GetIdentityProviderServiceProvider. To query the actual SCIM configuration and independent operation results, use GetIdentityProviderSCIM.
     *
     * @param request - ListIdentityProvidersRequest
     * @returns ListIdentityProvidersResponse
     */
    listIdentityProviders(workspaceId: string, request: $_model.ListIdentityProvidersRequest): Promise<$_model.ListIdentityProvidersResponse>;
    /**
     * Lists image caches.
     *
     * @remarks
     * Queries the logical image caches within the current account, region, and workspace. WorkspaceId is required, and caches are invisible across workspaces. All conditions filter the full set using the AND operator before pagination is calculated. The results are sorted in descending order by logical resource creation time and ascending order by ImageId. The cursor is bound to the account, region, workspace, all filters, and sorting criteria. Returns the complete cache objects, the AgentCount based on the configuration switch, and the actual deletion eligibility. Query failures are not disguised as empty lists, and the nextToken on the last page is an empty string.
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
     * Lists image caches.
     *
     * @remarks
     * Queries the logical image caches within the current account, region, and workspace. WorkspaceId is required, and caches are invisible across workspaces. All conditions filter the full set using the AND operator before pagination is calculated. The results are sorted in descending order by logical resource creation time and ascending order by ImageId. The cursor is bound to the account, region, workspace, all filters, and sorting criteria. Returns the complete cache objects, the AgentCount based on the configuration switch, and the actual deletion eligibility. Query failures are not disguised as empty lists, and the nextToken on the last page is an empty string.
     *
     * @param request - ListImageCachesRequest
     * @returns ListImageCachesResponse
     */
    listImageCaches(request: $_model.ListImageCachesRequest): Promise<$_model.ListImageCachesResponse>;
    /**
     * Queries a list of managed agents in a specified workspace.
     *
     * @remarks
     * Performs a paged query for the list of managed agents in a specified workspace and returns summary information for each agent, including the identity, name, status, template, and specifications. Paging is supported.
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
     * Queries a list of managed agents in a specified workspace.
     *
     * @remarks
     * Performs a paged query for the list of managed agents in a specified workspace and returns summary information for each agent, including the identity, name, status, template, and specifications. Paging is supported.
     *
     * @param request - ListManagedAgentsRequest
     * @returns ListManagedAgentsResponse
     */
    listManagedAgents(workspaceId: string, request: $_model.ListManagedAgentsRequest): Promise<$_model.ListManagedAgentsResponse>;
    /**
     * Queries MCP marketplace templates.
     *
     * @remarks
     * Queries all online official MCP templates. You can filter results by keyword, usage tag, and MCP type.
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
     * Queries all online official MCP templates. You can filter results by keyword, usage tag, and MCP type.
     *
     * @param request - ListMcpMarketItemsRequest
     * @returns ListMcpMarketItemsResponse
     */
    listMcpMarketItems(workspaceId: string, request: $_model.ListMcpMarketItemsRequest): Promise<$_model.ListMcpMarketItemsResponse>;
    /**
     * Queries the list of tools exposed by a specified MCP service and their input/output schemas.
     *
     * @remarks
     * ## Operation description
     * Queries the list of tools exposed by a specified MCP service and their input/output schemas.
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
     * Queries the list of tools exposed by a specified MCP service and their input/output schemas.
     *
     * @remarks
     * ## Operation description
     * Queries the list of tools exposed by a specified MCP service and their input/output schemas.
     *
     * @param request - ListMcpToolsRequest
     * @returns ListMcpToolsResponse
     */
    listMcpTools(workspaceId: string, mcpServerId: string, request: $_model.ListMcpToolsRequest): Promise<$_model.ListMcpToolsResponse>;
    /**
     * Performs a paging query to retrieve the MCP services and their configurations and statuses in a specified workspace.
     *
     * @remarks
     * ## Request description
     * Performs a paging query to retrieve the MCP services and their configurations and statuses in a specified workspace.
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
     * Performs a paging query to retrieve the MCP services and their configurations and statuses in a specified workspace.
     *
     * @remarks
     * ## Request description
     * Performs a paging query to retrieve the MCP services and their configurations and statuses in a specified workspace.
     *
     * @param request - ListMcpsRequest
     * @returns ListMcpsResponse
     */
    listMcps(workspaceId: string, request: $_model.ListMcpsRequest): Promise<$_model.ListMcpsResponse>;
    /**
     * Performs a paged query on long-term memory records. The results can be filtered independently by user ID, agent ID, and session ID. Paging is supported.
     *
     * @remarks
     * Performs a paged query on long-term memory records. The results can be filtered independently by user ID, agent ID, and session ID. Paging is supported.
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
     * Performs a paged query on long-term memory records. The results can be filtered independently by user ID, agent ID, and session ID. Paging is supported.
     *
     * @remarks
     * Performs a paged query on long-term memory records. The results can be filtered independently by user ID, agent ID, and session ID. Paging is supported.
     *
     * @param request - ListMemoriesRequest
     * @returns ListMemoriesResponse
     */
    listMemories(workspaceId: string, memoryStoreName: string, request: $_model.ListMemoriesRequest): Promise<$_model.ListMemoriesResponse>;
    /**
     * Performs a paging query for raw messages by exact scope. SessionId is required, and at least one of UserId and AgentId must be provided.
     *
     * @remarks
     * Performs a paging query for raw messages by exact scope. SessionId is required, and at least one of UserId and AgentId must be provided.
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
     * Performs a paging query for raw messages by exact scope. SessionId is required, and at least one of UserId and AgentId must be provided.
     *
     * @remarks
     * Performs a paging query for raw messages by exact scope. SessionId is required, and at least one of UserId and AgentId must be provided.
     *
     * @param request - ListMemorySessionMessagesRequest
     * @returns ListMemorySessionMessagesResponse
     */
    listMemorySessionMessages(workspaceId: string, memoryStoreName: string, request: $_model.ListMemorySessionMessagesRequest): Promise<$_model.ListMemorySessionMessagesResponse>;
    /**
     * Performs a paging query for sessions in a MemoryStore. You can filter the sessions independently by user ID and agent ID.
     *
     * @remarks
     * Performs a paging query for sessions in a MemoryStore. You can filter the sessions independently by user ID and agent ID.
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
     * Performs a paging query for sessions in a MemoryStore. You can filter the sessions independently by user ID and agent ID.
     *
     * @remarks
     * Performs a paging query for sessions in a MemoryStore. You can filter the sessions independently by user ID and agent ID.
     *
     * @param request - ListMemorySessionsRequest
     * @returns ListMemorySessionsResponse
     */
    listMemorySessions(workspaceId: string, memoryStoreName: string, request: $_model.ListMemorySessionsRequest): Promise<$_model.ListMemorySessionsResponse>;
    /**
     * Performs a paged query for MemoryStores in a specified workspace with paging.
     *
     * @remarks
     * Performs a paged query for MemoryStores in a specified workspace with paging.
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
     * Performs a paged query for MemoryStores in a specified workspace with paging.
     *
     * @remarks
     * Performs a paged query for MemoryStores in a specified workspace with paging.
     *
     * @param request - ListMemoryStoresRequest
     * @returns ListMemoryStoresResponse
     */
    listMemoryStores(workspaceId: string, request: $_model.ListMemoryStoresRequest): Promise<$_model.ListMemoryStoresResponse>;
    /**
     * Queries model connections in a specified workspace with paging. Supports filtering by name, provider type, and invoke protocol.
     *
     * @remarks
     * Queries model connections in a specified AgentCore workspace. Supports filtering by name through `Name` and selecting exact match or fuzzy match through `SearchType`. Also supports filtering by model provider type and invoke protocol, and supports paging.
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
     * Queries model connections in a specified workspace with paging. Supports filtering by name, provider type, and invoke protocol.
     *
     * @remarks
     * Queries model connections in a specified AgentCore workspace. Supports filtering by name through `Name` and selecting exact match or fuzzy match through `SearchType`. Also supports filtering by model provider type and invoke protocol, and supports paging.
     *
     * @param request - ListModelConnectionsRequest
     * @returns ListModelConnectionsResponse
     */
    listModelConnections(workspaceId: string, request: $_model.ListModelConnectionsRequest): Promise<$_model.ListModelConnectionsResponse>;
    /**
     * Queries models in a specified workspace by using paging. Supports filtering by model connection and model name.
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
     * Queries models in a specified workspace by using paging. Supports filtering by model connection and model name.
     *
     * @param request - ListModelsRequest
     * @returns ListModelsResponse
     */
    listModels(workspaceId: string, request: $_model.ListModelsRequest): Promise<$_model.ListModelsResponse>;
    /**
     * Queries permission rules.
     *
     * @remarks
     * Performs a paged query of permission rules by resource with paging.
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
     * Performs a paged query of permission rules by resource with paging.
     *
     * @param request - ListPermissionRulesRequest
     * @returns ListPermissionRulesResponse
     */
    listPermissionRules(workspaceId: string, request: $_model.ListPermissionRulesRequest): Promise<$_model.ListPermissionRulesResponse>;
    /**
     * Queries the providers supported by the built-in model catalog of AgentCore and their default service configurations.
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
     * Queries the providers supported by the built-in model catalog of AgentCore and their default service configurations.
     *
     * @param request - ListPredefinedModelProvidersRequest
     * @returns ListPredefinedModelProvidersResponse
     */
    listPredefinedModelProviders(request: $_model.ListPredefinedModelProvidersRequest): Promise<$_model.ListPredefinedModelProvidersResponse>;
    /**
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
     * @param request - ListPredefinedModelsRequest
     * @returns ListPredefinedModelsResponse
     */
    listPredefinedModels(providerType: string, request: $_model.ListPredefinedModelsRequest): Promise<$_model.ListPredefinedModelsResponse>;
    /**
     * Queries the list of active sessions in the sandbox of a specified managed agent by paging, and returns the session source and external channel type.
     *
     * @remarks
     * Queries the list of active sessions in the sandbox of a specified managed agent.
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
     * Queries the list of active sessions in the sandbox of a specified managed agent by paging, and returns the session source and external channel type.
     *
     * @remarks
     * Queries the list of active sessions in the sandbox of a specified managed agent.
     *
     * @param request - ListSandboxSessionsRequest
     * @returns ListSandboxSessionsResponse
     */
    listSandboxSessions(workspaceId: string, agentId: string, sandboxId: string, request: $_model.ListSandboxSessionsRequest): Promise<$_model.ListSandboxSessionsResponse>;
    /**
     * Queries the list of sandboxes for a managed agent in a specified workspace. You can filter results by sandbox ID and active session ID fragments.
     *
     * @remarks
     * Queries the list of sandboxes for a specified managed agent. The searchText parameter performs a fuzzy match on sandbox ID fragments, and the sessionId parameter performs a fuzzy match on active session ID fragments. Both parameters are case-insensitive and can be used together with AND logic.
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
     * Queries the list of sandboxes for a managed agent in a specified workspace. You can filter results by sandbox ID and active session ID fragments.
     *
     * @remarks
     * Queries the list of sandboxes for a specified managed agent. The searchText parameter performs a fuzzy match on sandbox ID fragments, and the sessionId parameter performs a fuzzy match on active session ID fragments. Both parameters are case-insensitive and can be used together with AND logic.
     *
     * @param request - ListSandboxesRequest
     * @returns ListSandboxesResponse
     */
    listSandboxes(workspaceId: string, agentId: string, request: $_model.ListSandboxesRequest): Promise<$_model.ListSandboxesResponse>;
    /**
     * Queries service endpoints in a specified workspace with paging and supports filtering by target type, agent, collaboration component, and status.
     *
     * @remarks
     * ## Request description\\nQueries service endpoints in a specified workspace with paging. You can filter the results by targetType, agentId, agentVersion, resourceBindingId, collaborationComponent, and status. Use maxResults to specify the maximum number of records per page, and use nextToken to retrieve the next page. If maxResults is not specified, the server returns 20 records by default.\\n
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
     * Queries service endpoints in a specified workspace with paging and supports filtering by target type, agent, collaboration component, and status.
     *
     * @remarks
     * ## Request description\\nQueries service endpoints in a specified workspace with paging. You can filter the results by targetType, agentId, agentVersion, resourceBindingId, collaborationComponent, and status. Use maxResults to specify the maximum number of records per page, and use nextToken to retrieve the next page. If maxResults is not specified, the server returns 20 records by default.\\n
     *
     * @param request - ListServiceEndpointsRequest
     * @returns ListServiceEndpointsResponse
     */
    listServiceEndpoints(workspaceId: string, request: $_model.ListServiceEndpointsRequest): Promise<$_model.ListServiceEndpointsResponse>;
    /**
     * Queries skill reference relationships.
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
     * Queries skill reference relationships.
     *
     * @param request - ListSkillReferencesRequest
     * @returns ListSkillReferencesResponse
     */
    listSkillReferences(workspaceId: string, skillName: string, request: $_model.ListSkillReferencesRequest): Promise<$_model.ListSkillReferencesResponse>;
    /**
     * Performs a paged query for skills in a specified workspace and returns basic information, version statuses, and paging information.
     *
     * @remarks
     * ## Request description
     * Performs a paged query for skills in a specified workspace and returns basic information, version statuses, and paging information.
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
     * Performs a paged query for skills in a specified workspace and returns basic information, version statuses, and paging information.
     *
     * @remarks
     * ## Request description
     * Performs a paged query for skills in a specified workspace and returns basic information, version statuses, and paging information.
     *
     * @param request - ListSkillsRequest
     * @returns ListSkillsResponse
     */
    listSkills(workspaceId: string, request: $_model.ListSkillsRequest): Promise<$_model.ListSkillsResponse>;
    /**
     * Queries teams in a specified workspace by using paging. You can use nameLike to filter teams by fuzzy matching the team name, maxResults to specify the maximum number of records per page, and nextToken to retrieve the next page. If maxResults is not specified, the server returns 10 records by default. The member information in the list includes only the member identifier, name, and team role.
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
     * Queries teams in a specified workspace by using paging. You can use nameLike to filter teams by fuzzy matching the team name, maxResults to specify the maximum number of records per page, and nextToken to retrieve the next page. If maxResults is not specified, the server returns 10 records by default. The member information in the list includes only the member identifier, name, and team role.
     *
     * @param request - ListTeamsRequest
     * @returns ListTeamsResponse
     */
    listTeams(workspaceId: string, request: $_model.ListTeamsRequest): Promise<$_model.ListTeamsResponse>;
    /**
     * Performs a paged query for users in a specified workspace. You can use nameLike to filter users by fuzzy match on the username, maxResults to specify the maximum number of records per page for paging, and nextToken to retrieve the next page. If maxResults is not specified, 10 records are returned by default.
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
     * Performs a paged query for users in a specified workspace. You can use nameLike to filter users by fuzzy match on the username, maxResults to specify the maximum number of records per page for paging, and nextToken to retrieve the next page. If maxResults is not specified, 10 records are returned by default.
     *
     * @param request - ListUsersRequest
     * @returns ListUsersResponse
     */
    listUsers(workspaceId: string, request: $_model.ListUsersRequest): Promise<$_model.ListUsersResponse>;
    /**
     * Performs a paged query on the workspaces under the current tenant. By default, the list does not return soft-deleted records with the Deleted status. The server performs stable sorting on the results by creation order to facilitate paging.
     *
     * @remarks
     * ## Request description\\nPerforms a paged query on the workspaces under the current tenant. By default, the list does not return soft-deleted records with the Deleted status. The server performs stable sorting on the results by creation order to facilitate paging. You can use nextToken to obtain the next page, skip to skip a specified number of workspaces, maxResults to specify the maximum number of records per page, and nameLike to perform fuzzy filtering by workspace name. If maxResults is not specified or is set to 0, the server returns 20 records by default.\\n
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
     * Performs a paged query on the workspaces under the current tenant. By default, the list does not return soft-deleted records with the Deleted status. The server performs stable sorting on the results by creation order to facilitate paging.
     *
     * @remarks
     * ## Request description\\nPerforms a paged query on the workspaces under the current tenant. By default, the list does not return soft-deleted records with the Deleted status. The server performs stable sorting on the results by creation order to facilitate paging. You can use nextToken to obtain the next page, skip to skip a specified number of workspaces, maxResults to specify the maximum number of records per page, and nameLike to perform fuzzy filtering by workspace name. If maxResults is not specified or is set to 0, the server returns 20 records by default.\\n
     *
     * @param request - ListWorkspacesRequest
     * @returns ListWorkspacesResponse
     */
    listWorkspaces(request: $_model.ListWorkspacesRequest): Promise<$_model.ListWorkspacesResponse>;
    /**
     * Takes the online version of a specified Skill offline so that it is no longer used as the online version.
     *
     * @remarks
     * ## Operation description
     * Takes the online version of a specified Skill offline so that it is no longer used as the online version.
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
     * Takes the online version of a specified Skill offline so that it is no longer used as the online version.
     *
     * @remarks
     * ## Operation description
     * Takes the online version of a specified Skill offline so that it is no longer used as the online version.
     *
     * @param request - OfflineSkillRequest
     * @returns OfflineSkillResponse
     */
    offlineSkill(workspaceId: string, skillName: string, request: $_model.OfflineSkillRequest): Promise<$_model.OfflineSkillResponse>;
    /**
     * Sets a specified Skill version as the online version.
     *
     * @remarks
     * ## Operation description
     * Sets a specified Skill version as the online version.
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
     * Sets a specified Skill version as the online version.
     *
     * @remarks
     * ## Operation description
     * Sets a specified Skill version as the online version.
     *
     * @param request - OnlineSkillRequest
     * @returns OnlineSkillResponse
     */
    onlineSkill(workspaceId: string, skillName: string, request: $_model.OnlineSkillRequest): Promise<$_model.OnlineSkillResponse>;
    /**
     * Parses and checks one or more Skill ZIP packages uploaded to OSS, and returns the name, version, and conflict check results.
     *
     * @remarks
     * ## Operation description
     * Parses and checks one or more Skill ZIP packages uploaded to OSS, and returns the name, version, and conflict check results.
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
     * Parses and checks one or more Skill ZIP packages uploaded to OSS, and returns the name, version, and conflict check results.
     *
     * @remarks
     * ## Operation description
     * Parses and checks one or more Skill ZIP packages uploaded to OSS, and returns the name, version, and conflict check results.
     *
     * @param request - PrecheckSkillUploadViaOssRequest
     * @returns PrecheckSkillUploadViaOssResponse
     */
    precheckSkillUploadViaOss(workspaceId: string, request: $_model.PrecheckSkillUploadViaOssRequest): Promise<$_model.PrecheckSkillUploadViaOssResponse>;
    /**
     * Prepares the SCIM receiving configuration and returns the provisioning URL and credential summary. Issues a token if no available credentials exist and returns the plaintext only for the current request. This operation does not automatically enable user synchronization.
     *
     * @remarks
     * ## Features and prerequisites
     * Requires an available CustomSSO shared user pool. Does not depend on SAML metadata and is not locked by SAML updating or update failure statuses. Synchronously calls AgentIdentity to enable SCIM receiving and reads the configuration and credential list. Reuses the existing configuration if receiving is already enabled. Repeated initialization does not create duplicate valid credentials or automatically enable user synchronization. If a credential with the Enabled status exists and has not expired, its summary is returned and token is null. If no available credentials exist, a new credential is created and the token is returned only for the current request. Existing invalid or expired credentials are not automatically deleted and may still trigger the upstream limit of up to two credentials.
     * The prepare operation has the side effects of enabling receiving and potentially issuing credentials, but does not set the access control syncEnabled parameter, initiate the first import, or indicate that the external provisioning connection test has passed. After configuring the baseUrl and the current token in the external provisioning system, call UpdateIdentityProviderSCIM to confirm and enable synchronization. Existing tokens cannot be retrieved again. If the response is lost, query the credential list first instead of automatically reissuing the token. Tokens should not be logged or persisted in frontend caches.
     * ## Request and examples
     * POST /workspaces/{workspaceId}/scim-provisioning/prepare
     * Calling conventions: Call this operation in the region of the target workspace by using an AccessKey pair or STS credential that has permissions on the identity provider resources of the workspace. The ws-example, URL, certificate, and token in the following examples are placeholder values and must be replaced with actual values. The request body example represents the body parameters of the public API, not the extra body wrapper of the backend direct connection API. The response example shows only the business part. The outer layer also includes requestId, success, code, message, and httpStatusCode. Retain the requestId for troubleshooting and do not log the keys. Asynchronous business tasks do not mean that the HTTP request uses a long connection to wait for completion.
     * ```text
     * POST /workspaces/ws-example/scim-provisioning/prepare
     * No business request body.
     * ```
     * ## Response example
     * ```json
     * {
     *   "data": {
     *     "configuration": {
     *       "status": "Enabled",
     *       "baseUrl": "https://example.com/scim/v2"
     *     },
     *     "credential": {
     *       "credentialId": "credential-example",
     *       "status": "Enabled",
     *       "expireTime": "<Expiration time returned by the upstream>"
     *     },
     *     "token": "<Token newly issued for the current request only. Null if an available credential already exists.>"
     *   }
     * }
     * ```
     * ## Errors and handling
     * Error handling: 400 InvalidParameter indicates that the parameters or current configuration prerequisites are not met. 404 IdentityProviderNotFound indicates that no binding of the matching type exists. Synchronous calls to the upstream may return 503 IdentityProviderProvisioningUnavailable if they fail. Retain the request ID for troubleshooting and do not interpret read failures as unconfigured. Actual authentication and workspace not found errors follow the common error handling.
     * 400 LimitExceeded.ScimCredential: The maximum limit of two credentials has been reached. You must explicitly delete one credential before retrying. Credentials are not automatically deleted, rotated, or expanded. 400 InvalidParameter: The shared pool is unavailable. This call may have enabled upstream receiving and then reported an error due to issuance failure. The error does not mean that the operation has been automatically rolled back.
     * ## Call relationships and usage boundaries
     * The shared pool is created by using CreateIdentityProvider with identityProviderType=CustomSSO. SAML configuration is not required. If an existing credential is reused and token is null, use the token already saved by the user. Do not configure a null value in the external system. If the token is lost, call ListIdentityProviderSCIMCredentials to verify first, and then explicitly call CreateIdentityProviderSCIMCredential to issue a new one. When the limit of two credentials is reached, the user must confirm and delete the unused credential.
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
     * Prepares the SCIM receiving configuration and returns the provisioning URL and credential summary. Issues a token if no available credentials exist and returns the plaintext only for the current request. This operation does not automatically enable user synchronization.
     *
     * @remarks
     * ## Features and prerequisites
     * Requires an available CustomSSO shared user pool. Does not depend on SAML metadata and is not locked by SAML updating or update failure statuses. Synchronously calls AgentIdentity to enable SCIM receiving and reads the configuration and credential list. Reuses the existing configuration if receiving is already enabled. Repeated initialization does not create duplicate valid credentials or automatically enable user synchronization. If a credential with the Enabled status exists and has not expired, its summary is returned and token is null. If no available credentials exist, a new credential is created and the token is returned only for the current request. Existing invalid or expired credentials are not automatically deleted and may still trigger the upstream limit of up to two credentials.
     * The prepare operation has the side effects of enabling receiving and potentially issuing credentials, but does not set the access control syncEnabled parameter, initiate the first import, or indicate that the external provisioning connection test has passed. After configuring the baseUrl and the current token in the external provisioning system, call UpdateIdentityProviderSCIM to confirm and enable synchronization. Existing tokens cannot be retrieved again. If the response is lost, query the credential list first instead of automatically reissuing the token. Tokens should not be logged or persisted in frontend caches.
     * ## Request and examples
     * POST /workspaces/{workspaceId}/scim-provisioning/prepare
     * Calling conventions: Call this operation in the region of the target workspace by using an AccessKey pair or STS credential that has permissions on the identity provider resources of the workspace. The ws-example, URL, certificate, and token in the following examples are placeholder values and must be replaced with actual values. The request body example represents the body parameters of the public API, not the extra body wrapper of the backend direct connection API. The response example shows only the business part. The outer layer also includes requestId, success, code, message, and httpStatusCode. Retain the requestId for troubleshooting and do not log the keys. Asynchronous business tasks do not mean that the HTTP request uses a long connection to wait for completion.
     * ```text
     * POST /workspaces/ws-example/scim-provisioning/prepare
     * No business request body.
     * ```
     * ## Response example
     * ```json
     * {
     *   "data": {
     *     "configuration": {
     *       "status": "Enabled",
     *       "baseUrl": "https://example.com/scim/v2"
     *     },
     *     "credential": {
     *       "credentialId": "credential-example",
     *       "status": "Enabled",
     *       "expireTime": "<Expiration time returned by the upstream>"
     *     },
     *     "token": "<Token newly issued for the current request only. Null if an available credential already exists.>"
     *   }
     * }
     * ```
     * ## Errors and handling
     * Error handling: 400 InvalidParameter indicates that the parameters or current configuration prerequisites are not met. 404 IdentityProviderNotFound indicates that no binding of the matching type exists. Synchronous calls to the upstream may return 503 IdentityProviderProvisioningUnavailable if they fail. Retain the request ID for troubleshooting and do not interpret read failures as unconfigured. Actual authentication and workspace not found errors follow the common error handling.
     * 400 LimitExceeded.ScimCredential: The maximum limit of two credentials has been reached. You must explicitly delete one credential before retrying. Credentials are not automatically deleted, rotated, or expanded. 400 InvalidParameter: The shared pool is unavailable. This call may have enabled upstream receiving and then reported an error due to issuance failure. The error does not mean that the operation has been automatically rolled back.
     * ## Call relationships and usage boundaries
     * The shared pool is created by using CreateIdentityProvider with identityProviderType=CustomSSO. SAML configuration is not required. If an existing credential is reused and token is null, use the token already saved by the user. Do not configure a null value in the external system. If the token is lost, call ListIdentityProviderSCIMCredentials to verify first, and then explicitly call CreateIdentityProviderSCIMCredential to issue a new one. When the limit of two credentials is reached, the user must confirm and delete the unused credential.
     *
     * @param request - PrepareIdentityProviderSCIMRequest
     * @returns PrepareIdentityProviderSCIMResponse
     */
    prepareIdentityProviderSCIM(workspaceId: string, request: $_model.PrepareIdentityProviderSCIMRequest): Promise<$_model.PrepareIdentityProviderSCIMResponse>;
    /**
     * Publishes a specified Skill version to transition it to the published state.
     *
     * @remarks
     * ## Operation description
     * Publishes a specified Skill version to transition it to the published state.
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
     * Publishes a specified Skill version to transition it to the published state.
     *
     * @remarks
     * ## Operation description
     * Publishes a specified Skill version to transition it to the published state.
     *
     * @param request - PublishSkillVersionRequest
     * @returns PublishSkillVersionResponse
     */
    publishSkillVersion(workspaceId: string, skillName: string, skillVersion: string, request: $_model.PublishSkillVersionRequest): Promise<$_model.PublishSkillVersionResponse>;
    /**
     * Converts a specified Skill version back to an editable draft so that you can continue to modify it.
     *
     * @remarks
     * ## Request description
     * Converts a specified Skill version back to an editable draft so that you can continue to modify it.
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
     * Converts a specified Skill version back to an editable draft so that you can continue to modify it.
     *
     * @remarks
     * ## Request description
     * Converts a specified Skill version back to an editable draft so that you can continue to modify it.
     *
     * @param request - RedraftSkillVersionRequest
     * @returns RedraftSkillVersionResponse
     */
    redraftSkillVersion(workspaceId: string, skillName: string, skillVersion: string, request: $_model.RedraftSkillVersionRequest): Promise<$_model.RedraftSkillVersionResponse>;
    /**
     * Resets the logon password of a specified user. You can specify the user by using agentCoreUserId or username, and you must specify at least one of them. This operation only supports resetting passwords for users who use local password authentication in the workspace. If you do not specify the password parameter, the server generates a random password and returns it in the response.
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
     * Resets the logon password of a specified user. You can specify the user by using agentCoreUserId or username, and you must specify at least one of them. This operation only supports resetting passwords for users who use local password authentication in the workspace. If you do not specify the password parameter, the server generates a random password and returns it in the response.
     *
     * @param request - ResetUserPasswordRequest
     * @returns ResetUserPasswordResponse
     */
    resetUserPassword(workspaceId: string, request: $_model.ResetUserPasswordRequest): Promise<$_model.ResetUserPasswordResponse>;
    /**
     * Retries an image cache.
     *
     * @remarks
     * Retries an image cache for the original ImageId in the current workspace. WorkspaceId is required. The business request body is not required and can be omitted or provided as an empty object. The source authorization and transfer network reuse the original trusted context of the registration. If a digest exists, the retry uses the original digest. If no digest exists, the original tag is re-parsed. A new request in the FAILED state can start a new production round. Requests in the PENDING or READY state are reused. Requests in the DELETING state are rejected, and deleted resources are not recreated. PUBLIC or PRIVATE resources reuse the pull authorization of the original workspace. Returns a complete acceptance snapshot and retains the original ImageId and CreatedAt. ClientToken does not guarantee request deduplication. If the result is not confirmed, query the real-time status first before deciding whether to resubmit.
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
     * Retries an image cache.
     *
     * @remarks
     * Retries an image cache for the original ImageId in the current workspace. WorkspaceId is required. The business request body is not required and can be omitted or provided as an empty object. The source authorization and transfer network reuse the original trusted context of the registration. If a digest exists, the retry uses the original digest. If no digest exists, the original tag is re-parsed. A new request in the FAILED state can start a new production round. Requests in the PENDING or READY state are reused. Requests in the DELETING state are rejected, and deleted resources are not recreated. PUBLIC or PRIVATE resources reuse the pull authorization of the original workspace. Returns a complete acceptance snapshot and retains the original ImageId and CreatedAt. ClientToken does not guarantee request deduplication. If the result is not confirmed, query the real-time status first before deciding whether to resubmit.
     *
     * @param request - RetryImageCacheRequest
     * @returns RetryImageCacheResponse
     */
    retryImageCache(imageId: string, request: $_model.RetryImageCacheRequest): Promise<$_model.RetryImageCacheResponse>;
    /**
     * Retrieves long-term memory from a MemoryStore based on semantics.
     *
     * @remarks
     * Retrieves long-term memory from a MemoryStore based on semantics.
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
     * Retrieves long-term memory from a MemoryStore based on semantics.
     *
     * @param request - SearchMemoriesRequest
     * @returns SearchMemoriesResponse
     */
    searchMemories(workspaceId: string, memoryStoreName: string, request: $_model.SearchMemoriesRequest): Promise<$_model.SearchMemoriesResponse>;
    /**
     * Submits a specified draft version of an AgentSpec for review. If no release pipeline is configured, the version is directly published online.
     *
     * @remarks
     * ## Request description
     * Submits a specified draft version of an AgentSpec for review. If no release pipeline is configured, the version is directly published online.
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
     * ## Request description
     * Submits a specified draft version of an AgentSpec for review. If no release pipeline is configured, the version is directly published online.
     *
     * @param request - SubmitAgentSpecVersionRequest
     * @returns SubmitAgentSpecVersionResponse
     */
    submitAgentSpecVersion(workspaceId: string, agentSpecName: string, agentSpecVersion: string, request: $_model.SubmitAgentSpecVersionRequest): Promise<$_model.SubmitAgentSpecVersionResponse>;
    /**
     * Submits a specified draft version of a skill for review.
     *
     * @remarks
     * ## Operation description
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
     * ## Operation description
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
     * Updates an access application. The secret is returned only when the application is created and is not returned by query operations.
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
     * Updates an access application. The secret is returned only when the application is created and is not returned by query operations.
     *
     * @param request - UpdateAccessApplicationRequest
     * @returns UpdateAccessApplicationResponse
     */
    updateAccessApplication(workspaceId: string, applicationId: string, request: $_model.UpdateAccessApplicationRequest): Promise<$_model.UpdateAccessApplicationResponse>;
    /**
     * Updates the ServiceEndpoint, enablement status, or channel behavior configuration bound to an IM channel. At least one updatable field must be provided.
     *
     * @remarks
     * Updates the ServiceEndpoint, enablement status, or channel behavior configuration bound to an IM channel. At least one updatable field must be provided.
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
     * Updates the ServiceEndpoint, enablement status, or channel behavior configuration bound to an IM channel. At least one updatable field must be provided.
     *
     * @remarks
     * Updates the ServiceEndpoint, enablement status, or channel behavior configuration bound to an IM channel. At least one updatable field must be provided.
     *
     * @param request - UpdateAgentIMChannelRequest
     * @returns UpdateAgentIMChannelResponse
     */
    updateAgentIMChannel(workspaceId: string, agentId: string, imChannelId: string, request: $_model.UpdateAgentIMChannelRequest): Promise<$_model.UpdateAgentIMChannelResponse>;
    /**
     * Fully updates the channel credentials of a specified IM channel. Secrets are not returned in the response.
     *
     * @remarks
     * Fully updates the channel credentials of a specified IM channel. Secrets are not returned in the response.
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
     * Fully updates the channel credentials of a specified IM channel. Secrets are not returned in the response.
     *
     * @remarks
     * Fully updates the channel credentials of a specified IM channel. Secrets are not returned in the response.
     *
     * @param request - UpdateAgentIMChannelCredentialRequest
     * @returns UpdateAgentIMChannelCredentialResponse
     */
    updateAgentIMChannelCredential(workspaceId: string, agentId: string, imChannelId: string, request: $_model.UpdateAgentIMChannelCredentialRequest): Promise<$_model.UpdateAgentIMChannelCredentialResponse>;
    /**
     * Updates the business tags, version labels, and visibility scope of a specified AgentSpec. Fields that are not provided remain unchanged.
     *
     * @remarks
     * ## Operation description
     * Updates the business tags, version labels, and visibility scope of a specified AgentSpec. Fields that are not provided remain unchanged.
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
     * Updates the business tags, version labels, and visibility scope of a specified AgentSpec. Fields that are not provided remain unchanged.
     *
     * @remarks
     * ## Operation description
     * Updates the business tags, version labels, and visibility scope of a specified AgentSpec. Fields that are not provided remain unchanged.
     *
     * @param request - UpdateAgentSpecRequest
     * @returns UpdateAgentSpecResponse
     */
    updateAgentSpec(workspaceId: string, agentSpecName: string, request: $_model.UpdateAgentSpecRequest): Promise<$_model.UpdateAgentSpecResponse>;
    /**
     * Updates the API Key or Service Account Key collection for an enabled QoderCLI Connector. When serviceAccountKeys is submitted, the service treats it as the complete updated key collection and performs additions, renames, rotations, and deletions accordingly.
     *
     * @remarks
     * Updates the sensitive configuration of a specified Connector and aligns Service Account Keys by ID.
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
     * Updates the API Key or Service Account Key collection for an enabled QoderCLI Connector. When serviceAccountKeys is submitted, the service treats it as the complete updated key collection and performs additions, renames, rotations, and deletions accordingly.
     *
     * @remarks
     * Updates the sensitive configuration of a specified Connector and aligns Service Account Keys by ID.
     *
     * @param request - UpdateConnectorRequest
     * @returns UpdateConnectorResponse
     */
    updateConnector(workspaceId: string, connectorName: string, request: $_model.UpdateConnectorRequest): Promise<$_model.UpdateConnectorResponse>;
    /**
     * Updates the content or description of a specified credential. You must specify at least one of credentialMetadata and description. Unspecified attributes remain unchanged. The credential name and credential type cannot be modified after creation.
     *
     * @remarks
     * Updates the metadata or application scope of a specified credential.
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
     * Updates the content or description of a specified credential. You must specify at least one of credentialMetadata and description. Unspecified attributes remain unchanged. The credential name and credential type cannot be modified after creation.
     *
     * @remarks
     * Updates the metadata or application scope of a specified credential.
     *
     * @param request - UpdateCredentialRequest
     * @returns UpdateCredentialResponse
     */
    updateCredential(workspaceId: string, credentialId: string, request: $_model.UpdateCredentialRequest): Promise<$_model.UpdateCredentialResponse>;
    /**
     * Updates the configuration of a specified custom agent in a workspace and executes the update asynchronously. Omitted top-level fields retain their original configurations. You can query the update results by calling GetCustomAgent.
     *
     * @remarks
     * Provide at least one top-level field to update. Omitted top-level fields retain their original configurations. When providing a configuration object, specify its required subfields and include any optional configurations that you want to retain. Arrays are replaced as a whole. Pass an empty array [] to clear a list. The agenticFsMounts field does not accept null. Pass null for description to clear the description, and pass null for healthCheck to remove the health check.
     * When retaining the current ACR image source, you can submit only the artifact subfields that need to be modified. For example, to update the image tag of the same repository, submit only artifact.container.tag. Unsubmitted ports, source fields, and startup commands retain their original values. When switching sources, the merged artifact configuration must meet the required fields of the corresponding source and the mutual exclusivity requirement between code and container.
     * In code package pattern, specify artifact.port and the sourceUri, languageRuntime, and entrypoint of artifact.code. Do not specify container at the same time. Dependencies are packaged by the user. ZIP and TAR.GZ formats are supported. The compressed package size cannot exceed 500,000,000 bytes. Query the runtime environment identity by calling ListAgentCodeRuntimes. The sourceUri field supports oss:// addresses or HTTPS object addresses of standard OSS public domain names, including signed URLs. For local files, first call GetAgentCodePackageUploadUrl to obtain the upload URL and upload the file directly, and then commit the returned sourceUri.
     * When submitting a new code package source, the backend rechecks the read permissions, object, and size. The configuration is saved only after the transfer succeeds. If the transfer fails, the current configuration is not saved. Saved fixed packages can be reused. Set the client timeout to 210 seconds for code package requests. Archive integrity and secure decompression are checked at startup. A successful acceptance does not indicate that the agent is ready to run.
     * Instance count and elasticity: When providing runtime, compute and sessionPolicy must be provided at the same time. When hpa or its partial fields are omitted, unspecified elastic configurations use the default values: enabled=false, minSandboxCount=1, maxSandboxCount=10, maxConcurrentSessionsPerSandbox=100, and sessionTtlSeconds=600. To retain the original elastic configuration, provide the complete hpa. Omitting the entire runtime retains the original configuration. minSandboxCount and maxSandboxCount are configuration boundaries. Query the actual instance count by using sandboxPhaseCounts. When providing network, omitted access items are treated as allowed, but actual access is still restricted by the workspace network. To retain the original restrictions, provide both accessInternet and accessVpc. When providing healthCheck, you must specify port. Other unspecified items use the default values. When providing logging.sls, you must specify both project and logstore.
     * Environment variables: Omitting the entire environment retains the original configuration. When providing variables, the list is replaced as a whole, and variables to be retained must also be submitted. Setting variables=[] or environment=null clears the user-configured environment variables. Providing environment but omitting variables also clears the variables. Variable names must be non-empty and unique in the list. The value must be a string, and empty strings are allowed.
     * The update is an asynchronous process. A successful response indicates that the request is accepted. Call GetCustomAgent to query latestSpecVersion, effectiveSpecVersion, latestVersionStatus, and latestExecutionError, and check status and sandboxPhaseCounts to confirm the configuration processing progress and instance status. A successful configuration process does not indicate that all old instances have been replaced.
     * When explicitly submitting customImage, you must provide clientToken. After clientToken is passed, the backend records the submission based on the tenant, workspace, and this identifier. Retries with the same parameters reuse the acceptance result. Use a new identifier for different submission content. If clientToken is not passed, query the status first before deciding whether to retry. The healthyThreshold field for health checks does not take effect currently. Omit this field.
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
     * Updates the configuration of a specified custom agent in a workspace and executes the update asynchronously. Omitted top-level fields retain their original configurations. You can query the update results by calling GetCustomAgent.
     *
     * @remarks
     * Provide at least one top-level field to update. Omitted top-level fields retain their original configurations. When providing a configuration object, specify its required subfields and include any optional configurations that you want to retain. Arrays are replaced as a whole. Pass an empty array [] to clear a list. The agenticFsMounts field does not accept null. Pass null for description to clear the description, and pass null for healthCheck to remove the health check.
     * When retaining the current ACR image source, you can submit only the artifact subfields that need to be modified. For example, to update the image tag of the same repository, submit only artifact.container.tag. Unsubmitted ports, source fields, and startup commands retain their original values. When switching sources, the merged artifact configuration must meet the required fields of the corresponding source and the mutual exclusivity requirement between code and container.
     * In code package pattern, specify artifact.port and the sourceUri, languageRuntime, and entrypoint of artifact.code. Do not specify container at the same time. Dependencies are packaged by the user. ZIP and TAR.GZ formats are supported. The compressed package size cannot exceed 500,000,000 bytes. Query the runtime environment identity by calling ListAgentCodeRuntimes. The sourceUri field supports oss:// addresses or HTTPS object addresses of standard OSS public domain names, including signed URLs. For local files, first call GetAgentCodePackageUploadUrl to obtain the upload URL and upload the file directly, and then commit the returned sourceUri.
     * When submitting a new code package source, the backend rechecks the read permissions, object, and size. The configuration is saved only after the transfer succeeds. If the transfer fails, the current configuration is not saved. Saved fixed packages can be reused. Set the client timeout to 210 seconds for code package requests. Archive integrity and secure decompression are checked at startup. A successful acceptance does not indicate that the agent is ready to run.
     * Instance count and elasticity: When providing runtime, compute and sessionPolicy must be provided at the same time. When hpa or its partial fields are omitted, unspecified elastic configurations use the default values: enabled=false, minSandboxCount=1, maxSandboxCount=10, maxConcurrentSessionsPerSandbox=100, and sessionTtlSeconds=600. To retain the original elastic configuration, provide the complete hpa. Omitting the entire runtime retains the original configuration. minSandboxCount and maxSandboxCount are configuration boundaries. Query the actual instance count by using sandboxPhaseCounts. When providing network, omitted access items are treated as allowed, but actual access is still restricted by the workspace network. To retain the original restrictions, provide both accessInternet and accessVpc. When providing healthCheck, you must specify port. Other unspecified items use the default values. When providing logging.sls, you must specify both project and logstore.
     * Environment variables: Omitting the entire environment retains the original configuration. When providing variables, the list is replaced as a whole, and variables to be retained must also be submitted. Setting variables=[] or environment=null clears the user-configured environment variables. Providing environment but omitting variables also clears the variables. Variable names must be non-empty and unique in the list. The value must be a string, and empty strings are allowed.
     * The update is an asynchronous process. A successful response indicates that the request is accepted. Call GetCustomAgent to query latestSpecVersion, effectiveSpecVersion, latestVersionStatus, and latestExecutionError, and check status and sandboxPhaseCounts to confirm the configuration processing progress and instance status. A successful configuration process does not indicate that all old instances have been replaced.
     * When explicitly submitting customImage, you must provide clientToken. After clientToken is passed, the backend records the submission based on the tenant, workspace, and this identifier. Retries with the same parameters reuse the acceptance result. Use a new identifier for different submission content. If clientToken is not passed, query the status first before deciding whether to retry. The healthyThreshold field for health checks does not take effect currently. Omit this field.
     *
     * @param request - UpdateCustomAgentRequest
     * @returns UpdateCustomAgentResponse
     */
    updateCustomAgent(workspaceId: string, agentId: string, request: $_model.UpdateCustomAgentRequest): Promise<$_model.UpdateCustomAgentResponse>;
    /**
     * Updates the configuration of a specified external agent.
     *
     * @remarks
     * Updates the configuration of a specified external agent.
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
     * Updates the configuration of a specified external agent.
     *
     * @remarks
     * Updates the configuration of a specified external agent.
     *
     * @param request - UpdateExternalAgentRequest
     * @returns UpdateExternalAgentResponse
     */
    updateExternalAgent(workspaceId: string, agentId: string, request: $_model.UpdateExternalAgentRequest): Promise<$_model.UpdateExternalAgentResponse>;
    /**
     * Modifies the logon configuration of a bound identity provider in a specified workspace. DingTalk and Feishu support the logon switch, incremental synchronization switch, application configuration, and synchronization scope. CustomSSO supports SAML configuration and the logon switch. Actual updates take effect asynchronously. Call GetIdentityProvider to query the status.
     *
     * @remarks
     * ### Prerequisites and update methods
     * The workspace must be bound to an identity provider of the corresponding type. For DingTalk and Feishu, you must submit at least one of the following fields: loginEnabled, syncEnabled, metadata, and syncScope. The protocol and saml fields are not accepted. For CustomSSO, use the protocol, saml, and loginEnabled fields. The metadata, syncEnabled, and syncScope fields are not accepted. The SCIM synchronization switch is managed separately by using UpdateIdentityProviderSCIM.
     * ### DingTalk and Feishu
     * The metadata field is merged by field. Submit only the fields that need to be updated. Omitted fields and existing keys remain unchanged. Explicitly submitting null, empty strings, or blank strings is rejected. The server validates the complete configuration after merging. When incremental synchronization is enabled, the merged configuration must include the encryptKey and verificationToken fields.
     * The syncEnabled field controls subsequent address book change events and does not control the initial synchronization or manual synchronization. The syncScope field applies only to DingTalk and Feishu. If this field is omitted or set to null, the current scope is retained. Saving the scope does not automatically trigger a full synchronization. To perform a manual synchronization, call CreateIdentityProviderSyncJob after the save operation is complete and the identity provider is ready, and then call GetIdentityProviderSyncJob to query the task result.
     * ### Custom SAML identity provider
     * CustomSSO currently supports only SAML. The saml field supports two mutually exclusive methods: providing metadataXml, or providing the four manually entered configuration fields: entityId, loginUrl, bindingType, and x509Certificates.
     * The metadataXml field is a single IdP EntityDescriptor XML text of up to 1 MiB, not a URL or file path. DTD and external entities are prohibited. When manually entering the configuration, the entityId field must be non-empty and contain up to 2,048 characters, and cannot be changed after saving. The loginUrl field must be an absolute HTTPS URL without user credentials and fragments. The bindingType field must be HTTP-Redirect or HTTP-POST. The certificates must be valid X.509 signing certificates, with a maximum of 10 certificates.
     * The jitProvisionEnabled field controls the automatic creation of users during the initial logon. The jitUpdateEnabled field controls whether user information is updated during logon. Omitting these switches during an update retains the existing values. Modifying only the JIT switches also requires an existing valid SAML configuration. Saving the SAML configuration does not automatically enable logon. A valid configuration must exist before enabling logon. Setting loginEnabled to false only triggers a shutdown of logon and does not delete the saved SAML or SCIM configuration.
     * ### Asynchronous results and retries
     * When actual changes exist, the expected configuration and the UPDATING status of the identity provider are returned. The CONFIGURED status may also be returned when resource configuration is restored. Call GetIdentityProvider to wait for the READY status. If the operation fails, check for statuses such as UPDATE_FAILED. If the configuration is identical and no restoration is required, the current binding may be returned directly without generating a new task. A successful HTTP request does not indicate that the background task or upstream configuration has taken effect.
     * Operation conflicts occur when in-flight operations exist. If a submission times out, query the configuration and status before deciding whether to retry. The status field describes the status of the identity provider resource and logon configuration. The SCIM operation results for CustomSSO must be queried by using GetIdentityProviderSCIM and cannot be inferred from this status.
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
     * Modifies the logon configuration of a bound identity provider in a specified workspace. DingTalk and Feishu support the logon switch, incremental synchronization switch, application configuration, and synchronization scope. CustomSSO supports SAML configuration and the logon switch. Actual updates take effect asynchronously. Call GetIdentityProvider to query the status.
     *
     * @remarks
     * ### Prerequisites and update methods
     * The workspace must be bound to an identity provider of the corresponding type. For DingTalk and Feishu, you must submit at least one of the following fields: loginEnabled, syncEnabled, metadata, and syncScope. The protocol and saml fields are not accepted. For CustomSSO, use the protocol, saml, and loginEnabled fields. The metadata, syncEnabled, and syncScope fields are not accepted. The SCIM synchronization switch is managed separately by using UpdateIdentityProviderSCIM.
     * ### DingTalk and Feishu
     * The metadata field is merged by field. Submit only the fields that need to be updated. Omitted fields and existing keys remain unchanged. Explicitly submitting null, empty strings, or blank strings is rejected. The server validates the complete configuration after merging. When incremental synchronization is enabled, the merged configuration must include the encryptKey and verificationToken fields.
     * The syncEnabled field controls subsequent address book change events and does not control the initial synchronization or manual synchronization. The syncScope field applies only to DingTalk and Feishu. If this field is omitted or set to null, the current scope is retained. Saving the scope does not automatically trigger a full synchronization. To perform a manual synchronization, call CreateIdentityProviderSyncJob after the save operation is complete and the identity provider is ready, and then call GetIdentityProviderSyncJob to query the task result.
     * ### Custom SAML identity provider
     * CustomSSO currently supports only SAML. The saml field supports two mutually exclusive methods: providing metadataXml, or providing the four manually entered configuration fields: entityId, loginUrl, bindingType, and x509Certificates.
     * The metadataXml field is a single IdP EntityDescriptor XML text of up to 1 MiB, not a URL or file path. DTD and external entities are prohibited. When manually entering the configuration, the entityId field must be non-empty and contain up to 2,048 characters, and cannot be changed after saving. The loginUrl field must be an absolute HTTPS URL without user credentials and fragments. The bindingType field must be HTTP-Redirect or HTTP-POST. The certificates must be valid X.509 signing certificates, with a maximum of 10 certificates.
     * The jitProvisionEnabled field controls the automatic creation of users during the initial logon. The jitUpdateEnabled field controls whether user information is updated during logon. Omitting these switches during an update retains the existing values. Modifying only the JIT switches also requires an existing valid SAML configuration. Saving the SAML configuration does not automatically enable logon. A valid configuration must exist before enabling logon. Setting loginEnabled to false only triggers a shutdown of logon and does not delete the saved SAML or SCIM configuration.
     * ### Asynchronous results and retries
     * When actual changes exist, the expected configuration and the UPDATING status of the identity provider are returned. The CONFIGURED status may also be returned when resource configuration is restored. Call GetIdentityProvider to wait for the READY status. If the operation fails, check for statuses such as UPDATE_FAILED. If the configuration is identical and no restoration is required, the current binding may be returned directly without generating a new task. A successful HTTP request does not indicate that the background task or upstream configuration has taken effect.
     * Operation conflicts occur when in-flight operations exist. If a submission times out, query the configuration and status before deciding whether to retry. The status field describes the status of the identity provider resource and logon configuration. The SCIM operation results for CustomSSO must be queried by using GetIdentityProviderSCIM and cannot be inferred from this status.
     *
     * @param request - UpdateIdentityProviderRequest
     * @returns UpdateIdentityProviderResponse
     */
    updateIdentityProvider(workspaceId: string, identityProviderType: string, request: $_model.UpdateIdentityProviderRequest): Promise<$_model.UpdateIdentityProviderResponse>;
    /**
     * Enables or disables SCIM user synchronization independently. When enabled, the initial full import is asynchronously executed. You can query the results by calling GetIdentityProviderSCIM. The SAML logon configuration is retained.
     *
     * @remarks
     * ## Features and prerequisites
     * syncEnabled is required. If you set this parameter to true, an independent SCIM enabling and initial full user import task is submitted. During execution, the AgentIdentity receiving status must be Enabled, and an enabled and unexpired credential must exist. Therefore, call the prepare operation first and complete the URL and token configuration in the external system. If you set this parameter to false, a task to disable synchronization and upstream receiving is submitted. Existing users, credentials, and SAML logon configurations are retained. If you re-enable the feature later and receiving is disabled, call the prepare operation again.
     * After the request is accepted, the expected switch status in AC is saved and an independent SCIM task is submitted. The original shared binding fields are returned, and the status still indicates the shared resource and logon configuration status. The new scimStatus parameter indicates the independent SCIM status, and operationStatus indicates task result of the original SCIM task. The SCIM taskId is not returned. Call GetIdentityProviderSCIM to query and wait for task result. The prerequisite checks for enabling are executed within the task. If the prerequisites are not met, you may receive a successful request response first, and then operationStatus is set to FAILED. A failure does not automatically roll back the expected switch status.
     * SCIM does not depend on SAML configurations and does not affect the SAML status or switch. A successful task and a successful full import of empty users do not prove that continuous incremental synchronization is healthy. Whether users exist depends on whether the external system actually pre-provisions them.
     * scimStatus indicates the independent SCIM configuration status. Valid values:
     * - UNCONFIGURED: The preparation is not completed.
     * - WAITING_CONFIGURATION: The receiving end is enabled, the HTTPS URL is valid, and a valid token exists. The system is waiting for external configuration and enabling confirmation.
     * - UPDATING: The enabling or disabling operation is being executed.
     * - READY: Synchronization is enabled and the current enabling task is successful. The receiving end, URL, and credentials are still available.
     * - DISABLED: The feature is disabled and the configuration is retained.
     * - UPDATE_FAILED: The operation failed, was paused, was canceled, or the configuration and credentials became unavailable after enabling.
     * The original facts of configuration, syncEnabled, and operationStatus are retained. The SAML or OIDC binding status is not used to determine the SCIM status. The READY status does not prove that Matrix execution is completed, the external connection test is passed, or continuous incremental synchronization is healthy.
     * ## Requests and examples
     * PUT /workspaces/{workspaceId}/scim-provisioning
     * Call conventions: Call the API in the region of the target workspace by using an AccessKey pair or STS token that has the permissions on the identity provider resources of the workspace. In the following examples, ws-example, URLs, certificates, and tokens are placeholder values and must be replaced with actual values. The request body example shows the body parameters of the public API, not the extra body wrapper of the backend direct connection API. The response example shows only the business part. The outer layer also includes requestId, success, code, message, and httpStatusCode. Retain the requestId for troubleshooting and do not record keys. Asynchronous business tasks do not mean that the HTTP request uses a long connection to wait for completion.
     * ```text
     * PUT /workspaces/ws-example/scim-provisioning
     * {"syncEnabled": true}
     * To disable the feature: {"syncEnabled": false}
     * ```
     * ## Response example
     * ```json
     * {
     *   "data": {
     *     "workspaceId": "ws-example",
     *     "identityProviderType": "CustomSSO",
     *     "status": "READY",
     *     "loginEnabled": false,
     *     "scimStatus": "UPDATING",
     *     "syncEnabled": true,
     *     "operationStatus": "PENDING"
     *   }
     * }
     * ```
     * ## Errors and handling
     * Error handling: 400 InvalidParameter indicates that the parameters or current configuration prerequisites are not met. 404 IdentityProviderNotFound indicates that no binding of the matching type exists. A synchronous call to the upstream system that fails may return 503 IdentityProviderProvisioningUnavailable. Retain the request ID for troubleshooting and do not interpret a read failure as unconfigured. Actual authentication and workspace non-existence errors follow the common error handling process.
     * 400 InvalidParameter: syncEnabled is missing. 404 IdentityProviderNotFound: No CustomSSO binding exists. 409 IdentityProviderOperationConflict: The user pool is not ready, is being unbound, failed to be unbound, or has a concurrent status conflict. If the upstream system is not enabled or has no valid credentials, it may manifest as an asynchronous FAILED status after acceptance. You cannot handle only HTTP errors.
     * ## Call relationships and usage boundaries
     * The request body for enabling the feature is {"syncEnabled":true}, and the request body for disabling the feature is {"syncEnabled":false}. This API retains the original binding details and the meaning of status, and adds scimStatus and operationStatus. After the request is accepted, call GetIdentityProviderSCIM to query the independent status and operationStatus. Pre-provisioning tests or user assignments for external IdPs must still be completed in the external system. AC does not configure external IdPs for users.
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
     * Enables or disables SCIM user synchronization independently. When enabled, the initial full import is asynchronously executed. You can query the results by calling GetIdentityProviderSCIM. The SAML logon configuration is retained.
     *
     * @remarks
     * ## Features and prerequisites
     * syncEnabled is required. If you set this parameter to true, an independent SCIM enabling and initial full user import task is submitted. During execution, the AgentIdentity receiving status must be Enabled, and an enabled and unexpired credential must exist. Therefore, call the prepare operation first and complete the URL and token configuration in the external system. If you set this parameter to false, a task to disable synchronization and upstream receiving is submitted. Existing users, credentials, and SAML logon configurations are retained. If you re-enable the feature later and receiving is disabled, call the prepare operation again.
     * After the request is accepted, the expected switch status in AC is saved and an independent SCIM task is submitted. The original shared binding fields are returned, and the status still indicates the shared resource and logon configuration status. The new scimStatus parameter indicates the independent SCIM status, and operationStatus indicates task result of the original SCIM task. The SCIM taskId is not returned. Call GetIdentityProviderSCIM to query and wait for task result. The prerequisite checks for enabling are executed within the task. If the prerequisites are not met, you may receive a successful request response first, and then operationStatus is set to FAILED. A failure does not automatically roll back the expected switch status.
     * SCIM does not depend on SAML configurations and does not affect the SAML status or switch. A successful task and a successful full import of empty users do not prove that continuous incremental synchronization is healthy. Whether users exist depends on whether the external system actually pre-provisions them.
     * scimStatus indicates the independent SCIM configuration status. Valid values:
     * - UNCONFIGURED: The preparation is not completed.
     * - WAITING_CONFIGURATION: The receiving end is enabled, the HTTPS URL is valid, and a valid token exists. The system is waiting for external configuration and enabling confirmation.
     * - UPDATING: The enabling or disabling operation is being executed.
     * - READY: Synchronization is enabled and the current enabling task is successful. The receiving end, URL, and credentials are still available.
     * - DISABLED: The feature is disabled and the configuration is retained.
     * - UPDATE_FAILED: The operation failed, was paused, was canceled, or the configuration and credentials became unavailable after enabling.
     * The original facts of configuration, syncEnabled, and operationStatus are retained. The SAML or OIDC binding status is not used to determine the SCIM status. The READY status does not prove that Matrix execution is completed, the external connection test is passed, or continuous incremental synchronization is healthy.
     * ## Requests and examples
     * PUT /workspaces/{workspaceId}/scim-provisioning
     * Call conventions: Call the API in the region of the target workspace by using an AccessKey pair or STS token that has the permissions on the identity provider resources of the workspace. In the following examples, ws-example, URLs, certificates, and tokens are placeholder values and must be replaced with actual values. The request body example shows the body parameters of the public API, not the extra body wrapper of the backend direct connection API. The response example shows only the business part. The outer layer also includes requestId, success, code, message, and httpStatusCode. Retain the requestId for troubleshooting and do not record keys. Asynchronous business tasks do not mean that the HTTP request uses a long connection to wait for completion.
     * ```text
     * PUT /workspaces/ws-example/scim-provisioning
     * {"syncEnabled": true}
     * To disable the feature: {"syncEnabled": false}
     * ```
     * ## Response example
     * ```json
     * {
     *   "data": {
     *     "workspaceId": "ws-example",
     *     "identityProviderType": "CustomSSO",
     *     "status": "READY",
     *     "loginEnabled": false,
     *     "scimStatus": "UPDATING",
     *     "syncEnabled": true,
     *     "operationStatus": "PENDING"
     *   }
     * }
     * ```
     * ## Errors and handling
     * Error handling: 400 InvalidParameter indicates that the parameters or current configuration prerequisites are not met. 404 IdentityProviderNotFound indicates that no binding of the matching type exists. A synchronous call to the upstream system that fails may return 503 IdentityProviderProvisioningUnavailable. Retain the request ID for troubleshooting and do not interpret a read failure as unconfigured. Actual authentication and workspace non-existence errors follow the common error handling process.
     * 400 InvalidParameter: syncEnabled is missing. 404 IdentityProviderNotFound: No CustomSSO binding exists. 409 IdentityProviderOperationConflict: The user pool is not ready, is being unbound, failed to be unbound, or has a concurrent status conflict. If the upstream system is not enabled or has no valid credentials, it may manifest as an asynchronous FAILED status after acceptance. You cannot handle only HTTP errors.
     * ## Call relationships and usage boundaries
     * The request body for enabling the feature is {"syncEnabled":true}, and the request body for disabling the feature is {"syncEnabled":false}. This API retains the original binding details and the meaning of status, and adds scimStatus and operationStatus. After the request is accepted, call GetIdentityProviderSCIM to query the independent status and operationStatus. Pre-provisioning tests or user assignments for external IdPs must still be completed in the external system. AC does not configure external IdPs for users.
     *
     * @param request - UpdateIdentityProviderSCIMRequest
     * @returns UpdateIdentityProviderSCIMResponse
     */
    updateIdentityProviderSCIM(workspaceId: string, request: $_model.UpdateIdentityProviderSCIMRequest): Promise<$_model.UpdateIdentityProviderSCIMResponse>;
    /**
     * Updates the configuration of a specified managed agent.
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
     * Updates the configuration of a specified managed agent.
     *
     * @param request - UpdateManagedAgentRequest
     * @returns UpdateManagedAgentResponse
     */
    updateManagedAgent(workspaceId: string, agentId: string, request: $_model.UpdateManagedAgentRequest): Promise<$_model.UpdateManagedAgentResponse>;
    /**
     * Updates the address, description, authentication, or Swagger configuration of a specified MCP service. The MCP type and protocol cannot be modified after creation. The update process is asynchronous.
     *
     * @remarks
     * ## Request description
     * Updates the address, description, authentication, or Swagger configuration of a specified MCP service. The MCP type and protocol cannot be modified after creation. The update process is asynchronous.
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
     * ## Request description
     * Updates the address, description, authentication, or Swagger configuration of a specified MCP service. The MCP type and protocol cannot be modified after creation. The update process is asynchronous.
     *
     * @param request - UpdateMcpRequest
     * @returns UpdateMcpResponse
     */
    updateMcp(workspaceId: string, mcpServerId: string, request: $_model.UpdateMcpRequest): Promise<$_model.UpdateMcpResponse>;
    /**
     * Updates MCP parameters by template.
     *
     * @remarks
     * Updates the schema-exposed parameters by using the same template version that was bound when the MCP was created, without upgrading the template version.
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
     * Updates MCP parameters by template.
     *
     * @remarks
     * Updates the schema-exposed parameters by using the same template version that was bound when the MCP was created, without upgrading the template version.
     *
     * @param request - UpdateMcpTemplateConfigRequest
     * @returns UpdateMcpTemplateConfigResponse
     */
    updateMcpTemplateConfig(workspaceId: string, mcpServerId: string, request: $_model.UpdateMcpTemplateConfigRequest): Promise<$_model.UpdateMcpTemplateConfigResponse>;
    /**
     * Updates the text or metadata of a long-term memory based on the memory ID.
     *
     * @remarks
     * Updates the text or metadata of a long-term memory based on the memory ID.
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
     * Updates the text or metadata of a long-term memory based on the memory ID.
     *
     * @remarks
     * Updates the text or metadata of a long-term memory based on the memory ID.
     *
     * @param request - UpdateMemoryRequest
     * @returns UpdateMemoryResponse
     */
    updateMemory(workspaceId: string, memoryStoreName: string, memoryId: string, request: $_model.UpdateMemoryRequest): Promise<$_model.UpdateMemoryResponse>;
    /**
     * Updates a memory store.
     *
     * @remarks
     * Updates a memory store.
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
     * Updates a memory store.
     *
     * @param request - UpdateMemoryStoreRequest
     * @returns UpdateMemoryStoreResponse
     */
    updateMemoryStore(workspaceId: string, memoryStoreName: string, request: $_model.UpdateMemoryStoreRequest): Promise<$_model.UpdateMemoryStoreResponse>;
    /**
     * Updates the description, context token limit, maximum output token count, or capability configurations of a specified model.
     *
     * @remarks
     * This operation supports updating description, contextSize, maxTokens, and capabilities. You must specify at least one non-null parameter. Parameters that are not specified or are set to null retain their original values. The capabilities parameter is replaced as a whole object. Capability fields that are not specified in the object are treated as false.
     * Modifying only the description does not refresh the model configurations of associated agents. When contextSize, maxTokens, or capabilities actually change, the system asynchronously refreshes managed agents that reference the model within the same workspace, as well as external agents whose model source is PLATFORM. External agents whose model source is RUNTIME are not affected. Repeatedly submitting the same configuration does not trigger a new model configuration refresh.
     * A successful response indicates that the model configuration has been saved, but does not indicate that associated agents have completed the configuration refresh or that the runtime has loaded the new configuration. You can call GetModel to query the saved model configuration.
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
     * This operation supports updating description, contextSize, maxTokens, and capabilities. You must specify at least one non-null parameter. Parameters that are not specified or are set to null retain their original values. The capabilities parameter is replaced as a whole object. Capability fields that are not specified in the object are treated as false.
     * Modifying only the description does not refresh the model configurations of associated agents. When contextSize, maxTokens, or capabilities actually change, the system asynchronously refreshes managed agents that reference the model within the same workspace, as well as external agents whose model source is PLATFORM. External agents whose model source is RUNTIME are not affected. Repeatedly submitting the same configuration does not trigger a new model configuration refresh.
     * A successful response indicates that the model configuration has been saved, but does not indicate that associated agents have completed the configuration refresh or that the runtime has loaded the new configuration. You can call GetModel to query the saved model configuration.
     *
     * @param request - UpdateModelRequest
     * @returns UpdateModelResponse
     */
    updateModel(workspaceId: string, modelId: string, request: $_model.UpdateModelRequest): Promise<$_model.UpdateModelResponse>;
    /**
     * Updates the mutable configurations of a specified model connection and resubmits the publish task. The invocation protocol cannot be modified after creation.
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
     * Updates the mutable configurations of a specified model connection and resubmits the publish task. The invocation protocol cannot be modified after creation.
     *
     * @param request - UpdateModelConnectionRequest
     * @returns UpdateModelConnectionResponse
     */
    updateModelConnection(workspaceId: string, connectionId: string, request: $_model.UpdateModelConnectionRequest): Promise<$_model.UpdateModelConnectionResponse>;
    /**
     * Updates the business tags of a specified skill. Other attributes not provided in the request remain unchanged.
     *
     * @remarks
     * ## Request description
     * Updates the business tags of a specified skill. Other attributes not provided in the request remain unchanged.
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
     * Updates the business tags of a specified skill. Other attributes not provided in the request remain unchanged.
     *
     * @remarks
     * ## Request description
     * Updates the business tags of a specified skill. Other attributes not provided in the request remain unchanged.
     *
     * @param request - UpdateSkillBizTagsRequest
     * @returns UpdateSkillBizTagsResponse
     */
    updateSkillBizTags(workspaceId: string, skillName: string, request: $_model.UpdateSkillBizTagsRequest): Promise<$_model.UpdateSkillBizTagsResponse>;
    /**
     * Updates the version labels and their mappings for a specified Skill.
     *
     * @remarks
     * ## Operation description
     * Updates the version labels and their mappings for a specified Skill.
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
     * Updates the version labels and their mappings for a specified Skill.
     *
     * @remarks
     * ## Operation description
     * Updates the version labels and their mappings for a specified Skill.
     *
     * @param request - UpdateSkillLabelsRequest
     * @returns UpdateSkillLabelsResponse
     */
    updateSkillLabels(workspaceId: string, skillName: string, request: $_model.UpdateSkillLabelsRequest): Promise<$_model.UpdateSkillLabelsResponse>;
    /**
     * Updates the visibility scope of a specified skill.
     *
     * @remarks
     * ## Request description
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
     * ## Request description
     * Updates the visibility scope of a specified skill.
     *
     * @param request - UpdateSkillScopeRequest
     * @returns UpdateSkillScopeResponse
     */
    updateSkillScope(workspaceId: string, skillName: string, request: $_model.UpdateSkillScopeRequest): Promise<$_model.UpdateSkillScopeResponse>;
    /**
     * Updates the description and members of a specified team. When users or agents are passed, the corresponding member list is replaced based on full overwrite semantics. Member lists that are not passed remain unchanged. The team name cannot be modified after creation.
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
     * Updates the description and members of a specified team. When users or agents are passed, the corresponding member list is replaced based on full overwrite semantics. Member lists that are not passed remain unchanged. The team name cannot be modified after creation.
     *
     * @param request - UpdateTeamRequest
     * @returns UpdateTeamResponse
     */
    updateTeam(workspaceId: string, teamId: string, request: $_model.UpdateTeamRequest): Promise<$_model.UpdateTeamResponse>;
    /**
     * Updates the display name, email address, or note of a specified user. You must specify at least one of the displayName, email, and note parameters. Unspecified attributes remain unchanged. The username cannot be modified after creation.
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
     * @param request - UpdateUserRequest
     * @returns UpdateUserResponse
     */
    updateUser(workspaceId: string, agentCoreUserId: string, request: $_model.UpdateUserRequest): Promise<$_model.UpdateUserResponse>;
    /**
     * Updates the name or network configuration of a workspace. Only workspaces in the Initialized state can be updated. Status, TenantId, and RegionId are maintained by the server and cannot be modified through this API operation.
     *
     * @remarks
     * ## Request description\\nUpdates the name or network configuration of a workspace. Only workspaces in the `Initialized` state can be updated. `Status`, `TenantId`, and `RegionId` are maintained by the server and cannot be modified through this API operation. The network configuration uses `Enabled` to specify whether to enable the VPC network. If enabled, you must provide `VpcId` and at least one `VSwitchIds`.\\n.
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
     * Updates the name or network configuration of a workspace. Only workspaces in the Initialized state can be updated. Status, TenantId, and RegionId are maintained by the server and cannot be modified through this API operation.
     *
     * @remarks
     * ## Request description\\nUpdates the name or network configuration of a workspace. Only workspaces in the `Initialized` state can be updated. `Status`, `TenantId`, and `RegionId` are maintained by the server and cannot be modified through this API operation. The network configuration uses `Enabled` to specify whether to enable the VPC network. If enabled, you must provide `VpcId` and at least one `VSwitchIds`.\\n.
     *
     * @param request - UpdateWorkspaceRequest
     * @returns UpdateWorkspaceResponse
     */
    updateWorkspace(workspaceId: string, request: $_model.UpdateWorkspaceRequest): Promise<$_model.UpdateWorkspaceResponse>;
    /**
     * Imports an AgentSpec into the current workspace by retrieving and parsing an uploaded AgentSpec ZIP package from OSS.
     *
     * @remarks
     * ## Request description
     * Retrieves an uploaded AgentSpec ZIP package from OSS, parses the package, and imports the AgentSpec into the current workspace.
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
     * Imports an AgentSpec into the current workspace by retrieving and parsing an uploaded AgentSpec ZIP package from OSS.
     *
     * @remarks
     * ## Request description
     * Retrieves an uploaded AgentSpec ZIP package from OSS, parses the package, and imports the AgentSpec into the current workspace.
     *
     * @param request - UploadAgentSpecViaOssRequest
     * @returns UploadAgentSpecViaOssResponse
     */
    uploadAgentSpecViaOss(workspaceId: string, request: $_model.UploadAgentSpecViaOssRequest): Promise<$_model.UploadAgentSpecViaOssResponse>;
    /**
     * Retrieves an uploaded Skill ZIP package from OSS, parses it, and imports the Skill into the current workspace.
     *
     * @remarks
     * ## Operation description
     * Retrieves an uploaded Skill ZIP package from OSS, parses it, and imports the Skill into the current workspace.
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
     * Retrieves an uploaded Skill ZIP package from OSS, parses it, and imports the Skill into the current workspace.
     *
     * @remarks
     * ## Operation description
     * Retrieves an uploaded Skill ZIP package from OSS, parses it, and imports the Skill into the current workspace.
     *
     * @param request - UploadSkillViaOssRequest
     * @returns UploadSkillViaOssResponse
     */
    uploadSkillViaOss(workspaceId: string, request: $_model.UploadSkillViaOssRequest): Promise<$_model.UploadSkillViaOssResponse>;
    /**
     * Validates the OSS code package source for an agent.
     *
     * @remarks
     * Uses the current workspace role to check whether the customer OSS object exists and is readable, and checks the file name extension and compressed size. Returns the sourceUri, file name, size, and format read in this request. The bucket and object key are passed separately, and HTTPS download URLs are not accepted.
     * The validation uses object metadata and read probing, and does not perform full downloads, transfers, decompression, or SHA-256 generation. Passing the validation does not indicate that the archive content is complete or can be started. The validation and transfer are performed again when CreateCustomAgent or UpdateCustomAgent is submitted. You do not need to invoke this operation in advance as a prerequisite for submission.
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
     * Validates the OSS code package source for an agent.
     *
     * @remarks
     * Uses the current workspace role to check whether the customer OSS object exists and is readable, and checks the file name extension and compressed size. Returns the sourceUri, file name, size, and format read in this request. The bucket and object key are passed separately, and HTTPS download URLs are not accepted.
     * The validation uses object metadata and read probing, and does not perform full downloads, transfers, decompression, or SHA-256 generation. Passing the validation does not indicate that the archive content is complete or can be started. The validation and transfer are performed again when CreateCustomAgent or UpdateCustomAgent is submitted. You do not need to invoke this operation in advance as a prerequisite for submission.
     *
     * @param request - ValidateAgentCodePackageFromOssRequest
     * @returns ValidateAgentCodePackageFromOssResponse
     */
    validateAgentCodePackageFromOss(workspaceId: string, request: $_model.ValidateAgentCodePackageFromOssRequest): Promise<$_model.ValidateAgentCodePackageFromOssResponse>;
    /**
     * Checks the OSS RAM authorization status of the agent code package.
     *
     * @remarks
     * Queries the binding status of the authorization policy for the specified source bucket to the current workspace role. AUTHORIZED indicates that the policy is bound, and UNAUTHORIZED indicates that the policy is not bound. A bound policy does not necessarily mean that a specific code package object exists or is readable.
     * To check a specific object, call ValidateAgentCodePackageFromOss. This operation does not copy code packages or modify the default OSS binding of the workspace.
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
     * Checks the OSS RAM authorization status of the agent code package.
     *
     * @remarks
     * Queries the binding status of the authorization policy for the specified source bucket to the current workspace role. AUTHORIZED indicates that the policy is bound, and UNAUTHORIZED indicates that the policy is not bound. A bound policy does not necessarily mean that a specific code package object exists or is readable.
     * To check a specific object, call ValidateAgentCodePackageFromOss. This operation does not copy code packages or modify the default OSS binding of the workspace.
     *
     * @param request - VerifyAgentCodePackageOssRamAuthorizationRequest
     * @returns VerifyAgentCodePackageOssRamAuthorizationResponse
     */
    verifyAgentCodePackageOssRamAuthorization(workspaceId: string, request: $_model.VerifyAgentCodePackageOssRamAuthorizationRequest): Promise<$_model.VerifyAgentCodePackageOssRamAuthorizationResponse>;
    /**
     * Validates whether one or more Qoder Service Account Keys are available at a specified site. This operation does not save keys or modify the Connector status.
     *
     * @remarks
     * Validates whether the credentials of a specified Connector are valid and returns a list of invalid Service Account Keys.
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
     * Validates whether one or more Qoder Service Account Keys are available at a specified site. This operation does not save keys or modify the Connector status.
     *
     * @remarks
     * Validates whether the credentials of a specified Connector are valid and returns a list of invalid Service Account Keys.
     *
     * @param request - VerifyConnectorRequest
     * @returns VerifyConnectorResponse
     */
    verifyConnector(workspaceId: string, connectorName: string, request: $_model.VerifyConnectorRequest): Promise<$_model.VerifyConnectorResponse>;
    /**
     * Verifies the ACR RAM authorization for a workspace.
     *
     * @remarks
     * ACR and user OSS mounts share the workspace role. If no existing role is found, AliyunAgentCoreWorkspace-{workspaceId} is used. If a valid legacy OSS mount role exists, it is retained and only new permissions are appended without overwriting existing OSS policies. Fixed historical shared roles continue to be reused and are not recreated or renamed due to new naming templates. This operation performs a read-only check to verify whether the custom policies corresponding to the target instance, namespace, and repository are attached to the shared role, and checks the workspace prerequisites. It does not create execution versions or trigger configuration delivery. AUTHORIZED only indicates that the custom policy for the target name is attached, without parsing the policy content or simulating the final permissions. ELIGIBLE does not mean that RuntimeManager capacity or template admission is complete, nor does it require ACR configuration to be delivered. Creating or updating an agent re-verifies permissions and processes ACR dependencies on the backend. Configuration waiting, failures, and retries are reported through agent details.
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
     * Verifies the ACR RAM authorization for a workspace.
     *
     * @remarks
     * ACR and user OSS mounts share the workspace role. If no existing role is found, AliyunAgentCoreWorkspace-{workspaceId} is used. If a valid legacy OSS mount role exists, it is retained and only new permissions are appended without overwriting existing OSS policies. Fixed historical shared roles continue to be reused and are not recreated or renamed due to new naming templates. This operation performs a read-only check to verify whether the custom policies corresponding to the target instance, namespace, and repository are attached to the shared role, and checks the workspace prerequisites. It does not create execution versions or trigger configuration delivery. AUTHORIZED only indicates that the custom policy for the target name is attached, without parsing the policy content or simulating the final permissions. ELIGIBLE does not mean that RuntimeManager capacity or template admission is complete, nor does it require ACR configuration to be delivered. Creating or updating an agent re-verifies permissions and processes ACR dependencies on the backend. Configuration waiting, failures, and retries are reported through agent details.
     *
     * @param request - VerifyWorkspaceAcrRamAuthorizationRequest
     * @returns VerifyWorkspaceAcrRamAuthorizationResponse
     */
    verifyWorkspaceAcrRamAuthorization(workspaceId: string, request: $_model.VerifyWorkspaceAcrRamAuthorizationRequest): Promise<$_model.VerifyWorkspaceAcrRamAuthorizationResponse>;
    /**
     * Queries the RAM authorization status of AgenticFS mounting for a workspace.
     *
     * @remarks
     * Determines the shared role and target access point based on the workspace and server, checks whether the role has a mounted policy with the expected name and a type of Custom, and returns AUTHORIZED or UNAUTHORIZED. Consistent with OSS/ACR, this operation does not verify the policy body, role trust, or actual mount read/write permissions. If the upstream query fails, an error is returned.
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
     * Queries the RAM authorization status of AgenticFS mounting for a workspace.
     *
     * @remarks
     * Determines the shared role and target access point based on the workspace and server, checks whether the role has a mounted policy with the expected name and a type of Custom, and returns AUTHORIZED or UNAUTHORIZED. Consistent with OSS/ACR, this operation does not verify the policy body, role trust, or actual mount read/write permissions. If the upstream query fails, an error is returned.
     *
     * @param request - VerifyWorkspaceAgenticFsMountRamAuthorizationRequest
     * @returns VerifyWorkspaceAgenticFsMountRamAuthorizationResponse
     */
    verifyWorkspaceAgenticFsMountRamAuthorization(workspaceId: string, request: $_model.VerifyWorkspaceAgenticFsMountRamAuthorizationRequest): Promise<$_model.VerifyWorkspaceAgenticFsMountRamAuthorizationResponse>;
    /**
     * Verifies the RAM authorization for a workspace to access an OSS bucket and returns the current authorization status. When bucketName is specified, verifies the authorization for an agent-mounted bucket. When bucketName is not specified, verifies and updates the authorization status of the workspace\\"s private OSS storage.
     *
     * @remarks
     * Queries whether the workspace OSS mount role is bound to the custom RAM policy corresponding to the target bucket, and returns AUTHORIZED or UNAUTHORIZED. When bucketName is not specified, the existing user-managed OSS binding of the workspace is used and the authorization status is saved. When bucketName is specified, only the authorization status of the specified bucket is queried without modifying the workspace OSS binding. This operation does not verify OSS data plane access permissions or resume workspace initialization tasks. Alibaba Cloud Container Registry (ACR) and user OSS mounts share the workspace role. If no existing role is available, AliyunAgentCoreWorkspace-{workspaceId} is used. If a valid legacy OSS mount role exists, it is reused and permissions are only appended without overwriting existing OSS policies. Previously pinned shared roles continue to be reused and are not recreated or renamed due to new naming templates.
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
     * Verifies the RAM authorization for a workspace to access an OSS bucket and returns the current authorization status. When bucketName is specified, verifies the authorization for an agent-mounted bucket. When bucketName is not specified, verifies and updates the authorization status of the workspace\\"s private OSS storage.
     *
     * @remarks
     * Queries whether the workspace OSS mount role is bound to the custom RAM policy corresponding to the target bucket, and returns AUTHORIZED or UNAUTHORIZED. When bucketName is not specified, the existing user-managed OSS binding of the workspace is used and the authorization status is saved. When bucketName is specified, only the authorization status of the specified bucket is queried without modifying the workspace OSS binding. This operation does not verify OSS data plane access permissions or resume workspace initialization tasks. Alibaba Cloud Container Registry (ACR) and user OSS mounts share the workspace role. If no existing role is available, AliyunAgentCoreWorkspace-{workspaceId} is used. If a valid legacy OSS mount role exists, it is reused and permissions are only appended without overwriting existing OSS policies. Previously pinned shared roles continue to be reused and are not recreated or renamed due to new naming templates.
     *
     * @param request - VerifyWorkspaceOssMountRamAuthorizationRequest
     * @returns VerifyWorkspaceOssMountRamAuthorizationResponse
     */
    verifyWorkspaceOssMountRamAuthorization(workspaceId: string, request: $_model.VerifyWorkspaceOssMountRamAuthorizationRequest): Promise<$_model.VerifyWorkspaceOssMountRamAuthorizationResponse>;
}
