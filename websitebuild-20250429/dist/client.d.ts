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
     * Allocates a Supabase instance to a resource allocation.
     *
     * @remarks
     * Queries the Supabase instance information of a resource.
     *
     * @param request - AllocateSupabaseForAdminRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AllocateSupabaseForAdminResponse
     */
    allocateSupabaseForAdminWithOptions(request: $_model.AllocateSupabaseForAdminRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AllocateSupabaseForAdminResponse>;
    /**
     * Allocates a Supabase instance to a resource allocation.
     *
     * @remarks
     * Queries the Supabase instance information of a resource.
     *
     * @param request - AllocateSupabaseForAdminRequest
     * @returns AllocateSupabaseForAdminResponse
     */
    allocateSupabaseForAdmin(request: $_model.AllocateSupabaseForAdminRequest): Promise<$_model.AllocateSupabaseForAdminResponse>;
    /**
     * Grants a role to a user.
     *
     * @remarks
     * Queries the application instance information.
     *
     * @param request - AssignRbacUserRoleRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AssignRbacUserRoleResponse
     */
    assignRbacUserRoleWithOptions(request: $_model.AssignRbacUserRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssignRbacUserRoleResponse>;
    /**
     * Grants a role to a user.
     *
     * @remarks
     * Queries the application instance information.
     *
     * @param request - AssignRbacUserRoleRequest
     * @returns AssignRbacUserRoleResponse
     */
    assignRbacUserRole(request: $_model.AssignRbacUserRoleRequest): Promise<$_model.AssignRbacUserRoleResponse>;
    /**
     * Grants proxy-based O&M permissions for an application instance.
     *
     * @param request - AuthorizeAppProxyOpsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AuthorizeAppProxyOpsResponse
     */
    authorizeAppProxyOpsWithOptions(request: $_model.AuthorizeAppProxyOpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeAppProxyOpsResponse>;
    /**
     * Grants proxy-based O&M permissions for an application instance.
     *
     * @param request - AuthorizeAppProxyOpsRequest
     * @returns AuthorizeAppProxyOpsResponse
     */
    authorizeAppProxyOps(request: $_model.AuthorizeAppProxyOpsRequest): Promise<$_model.AuthorizeAppProxyOpsResponse>;
    /**
     * Checks resource usage in batches.
     *
     * @remarks
     * Manages the Supabase instance information associated with the resources.
     *
     * @param request - BatchCheckResourceMeasureRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns BatchCheckResourceMeasureResponse
     */
    batchCheckResourceMeasureWithOptions(request: $_model.BatchCheckResourceMeasureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchCheckResourceMeasureResponse>;
    /**
     * Checks resource usage in batches.
     *
     * @remarks
     * Manages the Supabase instance information associated with the resources.
     *
     * @param request - BatchCheckResourceMeasureRequest
     * @returns BatchCheckResourceMeasureResponse
     */
    batchCheckResourceMeasure(request: $_model.BatchCheckResourceMeasureRequest): Promise<$_model.BatchCheckResourceMeasureResponse>;
    /**
     * Binds a custom domain name to an application and automatically completes DNS resolution verification.
     *
     * @param request - BindAppDomainRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns BindAppDomainResponse
     */
    bindAppDomainWithOptions(request: $_model.BindAppDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindAppDomainResponse>;
    /**
     * Binds a custom domain name to an application and automatically completes DNS resolution verification.
     *
     * @param request - BindAppDomainRequest
     * @returns BindAppDomainResponse
     */
    bindAppDomain(request: $_model.BindAppDomainRequest): Promise<$_model.BindAppDomainResponse>;
    /**
     * Verifies a verification code.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - CheckAppVerifyCodeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CheckAppVerifyCodeResponse
     */
    checkAppVerifyCodeWithOptions(request: $_model.CheckAppVerifyCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckAppVerifyCodeResponse>;
    /**
     * Verifies a verification code.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - CheckAppVerifyCodeRequest
     * @returns CheckAppVerifyCodeResponse
     */
    checkAppVerifyCode(request: $_model.CheckAppVerifyCodeRequest): Promise<$_model.CheckAppVerifyCodeResponse>;
    /**
     * Checks resource usage.
     *
     * @remarks
     * Queries the Supabase instance information corresponding to the resource.
     *
     * @param request - CheckResourceMeasureRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CheckResourceMeasureResponse
     */
    checkResourceMeasureWithOptions(request: $_model.CheckResourceMeasureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckResourceMeasureResponse>;
    /**
     * Checks resource usage.
     *
     * @remarks
     * Queries the Supabase instance information corresponding to the resource.
     *
     * @param request - CheckResourceMeasureRequest
     * @returns CheckResourceMeasureResponse
     */
    checkResourceMeasure(request: $_model.CheckResourceMeasureRequest): Promise<$_model.CheckResourceMeasureResponse>;
    /**
     * Validates user resource metering.
     *
     * @remarks
     * Queries the Supabase instance information corresponding to the resource.
     *
     * @param request - CheckUserResourceMeasureRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CheckUserResourceMeasureResponse
     */
    checkUserResourceMeasureWithOptions(request: $_model.CheckUserResourceMeasureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckUserResourceMeasureResponse>;
    /**
     * Validates user resource metering.
     *
     * @remarks
     * Queries the Supabase instance information corresponding to the resource.
     *
     * @param request - CheckUserResourceMeasureRequest
     * @returns CheckUserResourceMeasureResponse
     */
    checkUserResourceMeasure(request: $_model.CheckUserResourceMeasureRequest): Promise<$_model.CheckUserResourceMeasureResponse>;
    /**
     * Converts a trial instance to a paid instance.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - ConfirmAppInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ConfirmAppInstanceResponse
     */
    confirmAppInstanceWithOptions(request: $_model.ConfirmAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfirmAppInstanceResponse>;
    /**
     * Converts a trial instance to a paid instance.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - ConfirmAppInstanceRequest
     * @returns ConfirmAppInstanceResponse
     */
    confirmAppInstance(request: $_model.ConfirmAppInstanceRequest): Promise<$_model.ConfirmAppInstanceResponse>;
    /**
     * Copies the plug-in configuration.
     *
     * @remarks
     * Retrieves the code generation plug-in configuration information.
     *
     * @param request - CopyAppPluginConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CopyAppPluginConfigResponse
     */
    copyAppPluginConfigWithOptions(request: $_model.CopyAppPluginConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CopyAppPluginConfigResponse>;
    /**
     * Copies the plug-in configuration.
     *
     * @remarks
     * Retrieves the code generation plug-in configuration information.
     *
     * @param request - CopyAppPluginConfigRequest
     * @returns CopyAppPluginConfigResponse
     */
    copyAppPluginConfig(request: $_model.CopyAppPluginConfigRequest): Promise<$_model.CopyAppPluginConfigResponse>;
    /**
     * Asynchronously initiates a conversation with an AI employee.
     *
     * @remarks
     * Initiates a WanXiaoZhi 2.0 AI conversation.
     *
     * @param request - CreateAIStaffChatRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAIStaffChatResponse
     */
    createAIStaffChatWithOptions(request: $_model.CreateAIStaffChatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAIStaffChatResponse>;
    /**
     * Asynchronously initiates a conversation with an AI employee.
     *
     * @remarks
     * Initiates a WanXiaoZhi 2.0 AI conversation.
     *
     * @param request - CreateAIStaffChatRequest
     * @returns CreateAIStaffChatResponse
     */
    createAIStaffChat(request: $_model.CreateAIStaffChatRequest): Promise<$_model.CreateAIStaffChatResponse>;
    /**
     * Creates an AI employee session.
     *
     * @remarks
     * Creates an AI session for Wan Xiaozhi 2.0.
     *
     * @param request - CreateAIStaffConversationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAIStaffConversationResponse
     */
    createAIStaffConversationWithOptions(request: $_model.CreateAIStaffConversationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAIStaffConversationResponse>;
    /**
     * Creates an AI employee session.
     *
     * @remarks
     * Creates an AI session for Wan Xiaozhi 2.0.
     *
     * @param request - CreateAIStaffConversationRequest
     * @returns CreateAIStaffConversationResponse
     */
    createAIStaffConversation(request: $_model.CreateAIStaffConversationRequest): Promise<$_model.CreateAIStaffConversationResponse>;
    /**
     * Creates an application assistant agent.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - CreateAppAssistantAgentRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAppAssistantAgentResponse
     */
    createAppAssistantAgentWithOptions(request: $_model.CreateAppAssistantAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppAssistantAgentResponse>;
    /**
     * Creates an application assistant agent.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - CreateAppAssistantAgentRequest
     * @returns CreateAppAssistantAgentResponse
     */
    createAppAssistantAgent(request: $_model.CreateAppAssistantAgentRequest): Promise<$_model.CreateAppAssistantAgentResponse>;
    /**
     * Generates an SSO logon-free URL for the application assistant.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - CreateAppAssistantAgentSsoLoginRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAppAssistantAgentSsoLoginResponse
     */
    createAppAssistantAgentSsoLoginWithOptions(request: $_model.CreateAppAssistantAgentSsoLoginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppAssistantAgentSsoLoginResponse>;
    /**
     * Generates an SSO logon-free URL for the application assistant.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - CreateAppAssistantAgentSsoLoginRequest
     * @returns CreateAppAssistantAgentSsoLoginResponse
     */
    createAppAssistantAgentSsoLogin(request: $_model.CreateAppAssistantAgentSsoLoginRequest): Promise<$_model.CreateAppAssistantAgentSsoLoginResponse>;
    /**
     * Initiates an AI conversation with WanXiaoZhi.
     *
     * @param request - CreateAppChatRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAppChatResponse
     */
    createAppChatWithSSE(request: $_model.CreateAppChatRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.CreateAppChatResponse, any, unknown>;
    /**
     * Initiates an AI conversation with WanXiaoZhi.
     *
     * @param request - CreateAppChatRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAppChatResponse
     */
    createAppChatWithOptions(request: $_model.CreateAppChatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppChatResponse>;
    /**
     * Initiates an AI conversation with WanXiaoZhi.
     *
     * @param request - CreateAppChatRequest
     * @returns CreateAppChatResponse
     */
    createAppChat(request: $_model.CreateAppChatRequest): Promise<$_model.CreateAppChatResponse>;
    /**
     * Creates a website builder application instance.
     *
     * @param tmpReq - CreateAppInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAppInstanceResponse
     */
    createAppInstanceWithOptions(tmpReq: $_model.CreateAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppInstanceResponse>;
    /**
     * Creates a website builder application instance.
     *
     * @param request - CreateAppInstanceRequest
     * @returns CreateAppInstanceResponse
     */
    createAppInstance(request: $_model.CreateAppInstanceRequest): Promise<$_model.CreateAppInstanceResponse>;
    /**
     * Creates a logon-free ticket.
     *
     * @param request - CreateAppInstanceTicketRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAppInstanceTicketResponse
     */
    createAppInstanceTicketWithOptions(request: $_model.CreateAppInstanceTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppInstanceTicketResponse>;
    /**
     * Creates a logon-free ticket.
     *
     * @param request - CreateAppInstanceTicketRequest
     * @returns CreateAppInstanceTicketResponse
     */
    createAppInstanceTicket(request: $_model.CreateAppInstanceTicketRequest): Promise<$_model.CreateAppInstanceTicketResponse>;
    /**
     * Creates an LLM gateway API key for an application instance.
     *
     * @remarks
     * Retrieves the code generation plugin configuration information.
     *
     * @param request - CreateAppLlmApiKeyForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAppLlmApiKeyForPartnerResponse
     */
    createAppLlmApiKeyForPartnerWithOptions(request: $_model.CreateAppLlmApiKeyForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppLlmApiKeyForPartnerResponse>;
    /**
     * Creates an LLM gateway API key for an application instance.
     *
     * @remarks
     * Retrieves the code generation plugin configuration information.
     *
     * @param request - CreateAppLlmApiKeyForPartnerRequest
     * @returns CreateAppLlmApiKeyForPartnerResponse
     */
    createAppLlmApiKeyForPartner(request: $_model.CreateAppLlmApiKeyForPartnerRequest): Promise<$_model.CreateAppLlmApiKeyForPartnerResponse>;
    /**
     * Creates a message notification scenario.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - CreateAppNotificationSceneRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAppNotificationSceneResponse
     */
    createAppNotificationSceneWithOptions(request: $_model.CreateAppNotificationSceneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppNotificationSceneResponse>;
    /**
     * Creates a message notification scenario.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - CreateAppNotificationSceneRequest
     * @returns CreateAppNotificationSceneResponse
     */
    createAppNotificationScene(request: $_model.CreateAppNotificationSceneRequest): Promise<$_model.CreateAppNotificationSceneResponse>;
    /**
     * Creates an application plug-in.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - CreateAppPluginRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAppPluginResponse
     */
    createAppPluginWithOptions(request: $_model.CreateAppPluginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppPluginResponse>;
    /**
     * Creates an application plug-in.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - CreateAppPluginRequest
     * @returns CreateAppPluginResponse
     */
    createAppPlugin(request: $_model.CreateAppPluginRequest): Promise<$_model.CreateAppPluginResponse>;
    /**
     * Activates the Wanxiaozhi inspiration value service.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - CreateAppTokenServiceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAppTokenServiceResponse
     */
    createAppTokenServiceWithOptions(request: $_model.CreateAppTokenServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppTokenServiceResponse>;
    /**
     * Activates the Wanxiaozhi inspiration value service.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - CreateAppTokenServiceRequest
     * @returns CreateAppTokenServiceResponse
     */
    createAppTokenService(request: $_model.CreateAppTokenServiceRequest): Promise<$_model.CreateAppTokenServiceResponse>;
    /**
     * Distributes and generates channel drafts.
     *
     * @remarks
     * Distributes and generates channel drafts.
     *
     * @param tmpReq - CreateDistributionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateDistributionResponse
     */
    createDistributionWithOptions(tmpReq: $_model.CreateDistributionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDistributionResponse>;
    /**
     * Distributes and generates channel drafts.
     *
     * @remarks
     * Distributes and generates channel drafts.
     *
     * @param request - CreateDistributionRequest
     * @returns CreateDistributionResponse
     */
    createDistribution(request: $_model.CreateDistributionRequest): Promise<$_model.CreateDistributionResponse>;
    /**
     * Creates a resource plan.
     *
     * @param request - CreateInspirationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateInspirationResponse
     */
    createInspirationWithOptions(request: $_model.CreateInspirationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInspirationResponse>;
    /**
     * Creates a resource plan.
     *
     * @param request - CreateInspirationRequest
     * @returns CreateInspirationResponse
     */
    createInspiration(request: $_model.CreateInspirationRequest): Promise<$_model.CreateInspirationResponse>;
    /**
     * Submits a logo generation task.
     *
     * @param request - CreateLogoTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateLogoTaskResponse
     */
    createLogoTaskWithOptions(request: $_model.CreateLogoTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLogoTaskResponse>;
    /**
     * Submits a logo generation task.
     *
     * @param request - CreateLogoTaskRequest
     * @returns CreateLogoTaskResponse
     */
    createLogoTask(request: $_model.CreateLogoTaskRequest): Promise<$_model.CreateLogoTaskResponse>;
    /**
     * Creates a subfolder in a parent folder.
     *
     * @param request - CreateMaterialDirectoryRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateMaterialDirectoryResponse
     */
    createMaterialDirectoryWithOptions(request: $_model.CreateMaterialDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMaterialDirectoryResponse>;
    /**
     * Creates a subfolder in a parent folder.
     *
     * @param request - CreateMaterialDirectoryRequest
     * @returns CreateMaterialDirectoryResponse
     */
    createMaterialDirectory(request: $_model.CreateMaterialDirectoryRequest): Promise<$_model.CreateMaterialDirectoryResponse>;
    /**
     * Creates an organizational unit.
     *
     * @remarks
     * Wanxiaozhi 2.0 AI conversation.
     *
     * @param request - CreateRbacOrgUnitRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateRbacOrgUnitResponse
     */
    createRbacOrgUnitWithOptions(request: $_model.CreateRbacOrgUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRbacOrgUnitResponse>;
    /**
     * Creates an organizational unit.
     *
     * @remarks
     * Wanxiaozhi 2.0 AI conversation.
     *
     * @param request - CreateRbacOrgUnitRequest
     * @returns CreateRbacOrgUnitResponse
     */
    createRbacOrgUnit(request: $_model.CreateRbacOrgUnitRequest): Promise<$_model.CreateRbacOrgUnitResponse>;
    /**
     * Creates RBAC permissions.
     *
     * @remarks
     * The Wanxiaozhi 2.0 API operation for creating an AI session.
     *
     * @param request - CreateRbacPermissionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateRbacPermissionResponse
     */
    createRbacPermissionWithOptions(request: $_model.CreateRbacPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRbacPermissionResponse>;
    /**
     * Creates RBAC permissions.
     *
     * @remarks
     * The Wanxiaozhi 2.0 API operation for creating an AI session.
     *
     * @param request - CreateRbacPermissionRequest
     * @returns CreateRbacPermissionResponse
     */
    createRbacPermission(request: $_model.CreateRbacPermissionRequest): Promise<$_model.CreateRbacPermissionResponse>;
    /**
     * Creates an RBAC role.
     *
     * @remarks
     * Wanxiaozhi 2.0 AI conversation.
     *
     * @param request - CreateRbacRoleRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateRbacRoleResponse
     */
    createRbacRoleWithOptions(request: $_model.CreateRbacRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRbacRoleResponse>;
    /**
     * Creates an RBAC role.
     *
     * @remarks
     * Wanxiaozhi 2.0 AI conversation.
     *
     * @param request - CreateRbacRoleRequest
     * @returns CreateRbacRoleResponse
     */
    createRbacRole(request: $_model.CreateRbacRoleRequest): Promise<$_model.CreateRbacRoleResponse>;
    /**
     * Deletes and unbinds the SSL certificate associated with a website.
     *
     * @param request - DeleteAppDomainCertificateRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAppDomainCertificateResponse
     */
    deleteAppDomainCertificateWithOptions(request: $_model.DeleteAppDomainCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppDomainCertificateResponse>;
    /**
     * Deletes and unbinds the SSL certificate associated with a website.
     *
     * @param request - DeleteAppDomainCertificateRequest
     * @returns DeleteAppDomainCertificateResponse
     */
    deleteAppDomainCertificate(request: $_model.DeleteAppDomainCertificateRequest): Promise<$_model.DeleteAppDomainCertificateResponse>;
    /**
     * Deletes an HTTP 301 status code redirect record bound to a website.
     *
     * @param request - DeleteAppDomainRedirectRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAppDomainRedirectResponse
     */
    deleteAppDomainRedirectWithOptions(request: $_model.DeleteAppDomainRedirectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppDomainRedirectResponse>;
    /**
     * Deletes an HTTP 301 status code redirect record bound to a website.
     *
     * @param request - DeleteAppDomainRedirectRequest
     * @returns DeleteAppDomainRedirectResponse
     */
    deleteAppDomainRedirect(request: $_model.DeleteAppDomainRedirectRequest): Promise<$_model.DeleteAppDomainRedirectResponse>;
    /**
     * Deletes a file.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - DeleteAppFileRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAppFileResponse
     */
    deleteAppFileWithOptions(request: $_model.DeleteAppFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppFileResponse>;
    /**
     * Deletes a file.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - DeleteAppFileRequest
     * @returns DeleteAppFileResponse
     */
    deleteAppFile(request: $_model.DeleteAppFileRequest): Promise<$_model.DeleteAppFileResponse>;
    /**
     * Deletes a file.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - DeleteAppInstanceFileRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAppInstanceFileResponse
     */
    deleteAppInstanceFileWithOptions(request: $_model.DeleteAppInstanceFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppInstanceFileResponse>;
    /**
     * Deletes a file.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - DeleteAppInstanceFileRequest
     * @returns DeleteAppInstanceFileResponse
     */
    deleteAppInstanceFile(request: $_model.DeleteAppInstanceFileRequest): Promise<$_model.DeleteAppInstanceFileResponse>;
    /**
     * Deletes a message notification scenario.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - DeleteAppNotificationSceneRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAppNotificationSceneResponse
     */
    deleteAppNotificationSceneWithOptions(request: $_model.DeleteAppNotificationSceneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppNotificationSceneResponse>;
    /**
     * Deletes a message notification scenario.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - DeleteAppNotificationSceneRequest
     * @returns DeleteAppNotificationSceneResponse
     */
    deleteAppNotificationScene(request: $_model.DeleteAppNotificationSceneRequest): Promise<$_model.DeleteAppNotificationSceneResponse>;
    /**
     * Deletes an application plugin.
     *
     * @param request - DeleteAppPluginRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAppPluginResponse
     */
    deleteAppPluginWithOptions(request: $_model.DeleteAppPluginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppPluginResponse>;
    /**
     * Deletes an application plugin.
     *
     * @param request - DeleteAppPluginRequest
     * @returns DeleteAppPluginResponse
     */
    deleteAppPlugin(request: $_model.DeleteAppPluginRequest): Promise<$_model.DeleteAppPluginResponse>;
    /**
     * Deletes a scenario recipient.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - DeleteAppSceneRecipientRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAppSceneRecipientResponse
     */
    deleteAppSceneRecipientWithOptions(request: $_model.DeleteAppSceneRecipientRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppSceneRecipientResponse>;
    /**
     * Deletes a scenario recipient.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - DeleteAppSceneRecipientRequest
     * @returns DeleteAppSceneRecipientResponse
     */
    deleteAppSceneRecipient(request: $_model.DeleteAppSceneRecipientRequest): Promise<$_model.DeleteAppSceneRecipientResponse>;
    /**
     * Deletes a Supabase key.
     *
     * @remarks
     * The Supabase instance information corresponding to the operated resource.
     *
     * @param request - DeleteAppSupabaseSecretsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAppSupabaseSecretsResponse
     */
    deleteAppSupabaseSecretsWithOptions(request: $_model.DeleteAppSupabaseSecretsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppSupabaseSecretsResponse>;
    /**
     * Deletes a Supabase key.
     *
     * @remarks
     * The Supabase instance information corresponding to the operated resource.
     *
     * @param request - DeleteAppSupabaseSecretsRequest
     * @returns DeleteAppSupabaseSecretsResponse
     */
    deleteAppSupabaseSecrets(request: $_model.DeleteAppSupabaseSecretsRequest): Promise<$_model.DeleteAppSupabaseSecretsResponse>;
    /**
     * Deletes a material folder.
     *
     * @param request - DeleteMaterialDirectoryRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteMaterialDirectoryResponse
     */
    deleteMaterialDirectoryWithOptions(request: $_model.DeleteMaterialDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMaterialDirectoryResponse>;
    /**
     * Deletes a material folder.
     *
     * @param request - DeleteMaterialDirectoryRequest
     * @returns DeleteMaterialDirectoryResponse
     */
    deleteMaterialDirectory(request: $_model.DeleteMaterialDirectoryRequest): Promise<$_model.DeleteMaterialDirectoryResponse>;
    /**
     * Deletes a material generation task.
     *
     * @param tmpReq - DeleteMaterialTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteMaterialTaskResponse
     */
    deleteMaterialTaskWithOptions(tmpReq: $_model.DeleteMaterialTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMaterialTaskResponse>;
    /**
     * Deletes a material generation task.
     *
     * @param request - DeleteMaterialTaskRequest
     * @returns DeleteMaterialTaskResponse
     */
    deleteMaterialTask(request: $_model.DeleteMaterialTaskRequest): Promise<$_model.DeleteMaterialTaskResponse>;
    /**
     * Deletes an organizational unit.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - DeleteRbacOrgUnitRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteRbacOrgUnitResponse
     */
    deleteRbacOrgUnitWithOptions(request: $_model.DeleteRbacOrgUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRbacOrgUnitResponse>;
    /**
     * Deletes an organizational unit.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - DeleteRbacOrgUnitRequest
     * @returns DeleteRbacOrgUnitResponse
     */
    deleteRbacOrgUnit(request: $_model.DeleteRbacOrgUnitRequest): Promise<$_model.DeleteRbacOrgUnitResponse>;
    /**
     * Deletes RBAC permissions.
     *
     * @remarks
     * The API operation for creating an AI session in Wanxiaozhi 2.0.
     *
     * @param request - DeleteRbacPermissionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteRbacPermissionResponse
     */
    deleteRbacPermissionWithOptions(request: $_model.DeleteRbacPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRbacPermissionResponse>;
    /**
     * Deletes RBAC permissions.
     *
     * @remarks
     * The API operation for creating an AI session in Wanxiaozhi 2.0.
     *
     * @param request - DeleteRbacPermissionRequest
     * @returns DeleteRbacPermissionResponse
     */
    deleteRbacPermission(request: $_model.DeleteRbacPermissionRequest): Promise<$_model.DeleteRbacPermissionResponse>;
    /**
     * Deletes an RBAC role.
     *
     * @remarks
     * Queries the application instance information.
     *
     * @param request - DeleteRbacRoleRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteRbacRoleResponse
     */
    deleteRbacRoleWithOptions(request: $_model.DeleteRbacRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRbacRoleResponse>;
    /**
     * Deletes an RBAC role.
     *
     * @remarks
     * Queries the application instance information.
     *
     * @param request - DeleteRbacRoleRequest
     * @returns DeleteRbacRoleResponse
     */
    deleteRbacRole(request: $_model.DeleteRbacRoleRequest): Promise<$_model.DeleteRbacRoleResponse>;
    /**
     * Query website DNS resolution records. Supports CNAME resolution and verification resolution queries.
     *
     * @param request - DescribeAppDomainDnsRecordRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAppDomainDnsRecordResponse
     */
    describeAppDomainDnsRecordWithOptions(request: $_model.DescribeAppDomainDnsRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppDomainDnsRecordResponse>;
    /**
     * Query website DNS resolution records. Supports CNAME resolution and verification resolution queries.
     *
     * @param request - DescribeAppDomainDnsRecordRequest
     * @returns DescribeAppDomainDnsRecordResponse
     */
    describeAppDomainDnsRecord(request: $_model.DescribeAppDomainDnsRecordRequest): Promise<$_model.DescribeAppDomainDnsRecordResponse>;
    /**
     * Calls a general API operation.
     *
     * @param request - DispatchConsoleAPIForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DispatchConsoleAPIForPartnerResponse
     */
    dispatchConsoleAPIForPartnerWithOptions(request: $_model.DispatchConsoleAPIForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DispatchConsoleAPIForPartnerResponse>;
    /**
     * Calls a general API operation.
     *
     * @param request - DispatchConsoleAPIForPartnerRequest
     * @returns DispatchConsoleAPIForPartnerResponse
     */
    dispatchConsoleAPIForPartner(request: $_model.DispatchConsoleAPIForPartnerRequest): Promise<$_model.DispatchConsoleAPIForPartnerResponse>;
    /**
     * Edits a plug-in configuration.
     *
     * @param request - EditPluginConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns EditPluginConfigResponse
     */
    editPluginConfigWithOptions(request: $_model.EditPluginConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EditPluginConfigResponse>;
    /**
     * Edits a plug-in configuration.
     *
     * @param request - EditPluginConfigRequest
     * @returns EditPluginConfigResponse
     */
    editPluginConfig(request: $_model.EditPluginConfigRequest): Promise<$_model.EditPluginConfigResponse>;
    /**
     * Exports material files.
     *
     * @param tmpReq - ExportMaterialFileRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ExportMaterialFileResponse
     */
    exportMaterialFileWithOptions(tmpReq: $_model.ExportMaterialFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportMaterialFileResponse>;
    /**
     * Exports material files.
     *
     * @param request - ExportMaterialFileRequest
     * @returns ExportMaterialFileResponse
     */
    exportMaterialFile(request: $_model.ExportMaterialFileRequest): Promise<$_model.ExportMaterialFileResponse>;
    /**
     * Exports the RBAC configuration.
     *
     * @remarks
     * Queries the Supabase instance configuration for a resource.
     *
     * @param request - ExportRbacConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ExportRbacConfigResponse
     */
    exportRbacConfigWithOptions(request: $_model.ExportRbacConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportRbacConfigResponse>;
    /**
     * Exports the RBAC configuration.
     *
     * @remarks
     * Queries the Supabase instance configuration for a resource.
     *
     * @param request - ExportRbacConfigRequest
     * @returns ExportRbacConfigResponse
     */
    exportRbacConfig(request: $_model.ExportRbacConfigRequest): Promise<$_model.ExportRbacConfigResponse>;
    /**
     * Retrieves the site preview URL for WanXiaoZhi 2.0.
     *
     * @remarks
     * Retrieves the site preview URL for WanXiaoZhi 2.0.
     *
     * @param request - GetAIStaffPreviewUrlRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAIStaffPreviewUrlResponse
     */
    getAIStaffPreviewUrlWithOptions(request: $_model.GetAIStaffPreviewUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAIStaffPreviewUrlResponse>;
    /**
     * Retrieves the site preview URL for WanXiaoZhi 2.0.
     *
     * @remarks
     * Retrieves the site preview URL for WanXiaoZhi 2.0.
     *
     * @param request - GetAIStaffPreviewUrlRequest
     * @returns GetAIStaffPreviewUrlResponse
     */
    getAIStaffPreviewUrl(request: $_model.GetAIStaffPreviewUrlRequest): Promise<$_model.GetAIStaffPreviewUrlResponse>;
    /**
     * Retrieves the details of a code workspace.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - GetAppCodeWorkspaceDetailRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppCodeWorkspaceDetailResponse
     */
    getAppCodeWorkspaceDetailWithOptions(request: $_model.GetAppCodeWorkspaceDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppCodeWorkspaceDetailResponse>;
    /**
     * Retrieves the details of a code workspace.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - GetAppCodeWorkspaceDetailRequest
     * @returns GetAppCodeWorkspaceDetailResponse
     */
    getAppCodeWorkspaceDetail(request: $_model.GetAppCodeWorkspaceDetailRequest): Promise<$_model.GetAppCodeWorkspaceDetailResponse>;
    /**
     * Retrieves the details of a conversation.
     *
     * @remarks
     * The Wanxiaozhi 2.0 API operation for creating AI conversations.
     *
     * @param request - GetAppConversationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppConversationResponse
     */
    getAppConversationWithOptions(request: $_model.GetAppConversationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppConversationResponse>;
    /**
     * Retrieves the details of a conversation.
     *
     * @remarks
     * The Wanxiaozhi 2.0 API operation for creating AI conversations.
     *
     * @param request - GetAppConversationRequest
     * @returns GetAppConversationResponse
     */
    getAppConversation(request: $_model.GetAppConversationRequest): Promise<$_model.GetAppConversationResponse>;
    /**
     * Retrieves the lock status of a session.
     *
     * @remarks
     * The API operation for creating an AI session in Wanxiaozhi 2.0.
     *
     * @param request - GetAppConversationLockStatusRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppConversationLockStatusResponse
     */
    getAppConversationLockStatusWithOptions(request: $_model.GetAppConversationLockStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppConversationLockStatusResponse>;
    /**
     * Retrieves the lock status of a session.
     *
     * @remarks
     * The API operation for creating an AI session in Wanxiaozhi 2.0.
     *
     * @param request - GetAppConversationLockStatusRequest
     * @returns GetAppConversationLockStatusResponse
     */
    getAppConversationLockStatus(request: $_model.GetAppConversationLockStatusRequest): Promise<$_model.GetAppConversationLockStatusResponse>;
    /**
     * Queries the table schema of a database.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - GetAppDatabaseTableSchemasRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppDatabaseTableSchemasResponse
     */
    getAppDatabaseTableSchemasWithOptions(request: $_model.GetAppDatabaseTableSchemasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppDatabaseTableSchemasResponse>;
    /**
     * Queries the table schema of a database.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - GetAppDatabaseTableSchemasRequest
     * @returns GetAppDatabaseTableSchemasResponse
     */
    getAppDatabaseTableSchemas(request: $_model.GetAppDatabaseTableSchemasRequest): Promise<$_model.GetAppDatabaseTableSchemasResponse>;
    /**
     * Retrieves a file and its modification time.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - GetAppFileContentRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppFileContentResponse
     */
    getAppFileContentWithOptions(request: $_model.GetAppFileContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppFileContentResponse>;
    /**
     * Retrieves a file and its modification time.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - GetAppFileContentRequest
     * @returns GetAppFileContentResponse
     */
    getAppFileContent(request: $_model.GetAppFileContentRequest): Promise<$_model.GetAppFileContentResponse>;
    /**
     * Queries the details of a website builder application instance.
     *
     * @remarks
     * Queries the details of a website builder application instance.
     *
     * @param request - GetAppInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppInstanceResponse
     */
    getAppInstanceWithOptions(request: $_model.GetAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppInstanceResponse>;
    /**
     * Queries the details of a website builder application instance.
     *
     * @remarks
     * Queries the details of a website builder application instance.
     *
     * @param request - GetAppInstanceRequest
     * @returns GetAppInstanceResponse
     */
    getAppInstance(request: $_model.GetAppInstanceRequest): Promise<$_model.GetAppInstanceResponse>;
    /**
     * Queries the entitlement information of an application instance.
     *
     * @remarks
     * Queries the entitlement information of an application instance.
     *
     * @param request - GetAppInstanceEntitlementRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppInstanceEntitlementResponse
     */
    getAppInstanceEntitlementWithOptions(request: $_model.GetAppInstanceEntitlementRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppInstanceEntitlementResponse>;
    /**
     * Queries the entitlement information of an application instance.
     *
     * @remarks
     * Queries the entitlement information of an application instance.
     *
     * @param request - GetAppInstanceEntitlementRequest
     * @returns GetAppInstanceEntitlementResponse
     */
    getAppInstanceEntitlement(request: $_model.GetAppInstanceEntitlementRequest): Promise<$_model.GetAppInstanceEntitlementResponse>;
    /**
     * Queries application instance information.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - GetAppInstanceForAdminRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppInstanceForAdminResponse
     */
    getAppInstanceForAdminWithOptions(request: $_model.GetAppInstanceForAdminRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppInstanceForAdminResponse>;
    /**
     * Queries application instance information.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - GetAppInstanceForAdminRequest
     * @returns GetAppInstanceForAdminResponse
     */
    getAppInstanceForAdmin(request: $_model.GetAppInstanceForAdminRequest): Promise<$_model.GetAppInstanceForAdminResponse>;
    /**
     * Queries the details of an instance.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - GetAppInstanceForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppInstanceForPartnerResponse
     */
    getAppInstanceForPartnerWithOptions(request: $_model.GetAppInstanceForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppInstanceForPartnerResponse>;
    /**
     * Queries the details of an instance.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - GetAppInstanceForPartnerRequest
     * @returns GetAppInstanceForPartnerResponse
     */
    getAppInstanceForPartner(request: $_model.GetAppInstanceForPartnerRequest): Promise<$_model.GetAppInstanceForPartnerResponse>;
    /**
     * Retrieves the temporary short link for an application.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - GetAppInstanceTempShortUrlRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppInstanceTempShortUrlResponse
     */
    getAppInstanceTempShortUrlWithOptions(request: $_model.GetAppInstanceTempShortUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppInstanceTempShortUrlResponse>;
    /**
     * Retrieves the temporary short link for an application.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - GetAppInstanceTempShortUrlRequest
     * @returns GetAppInstanceTempShortUrlResponse
     */
    getAppInstanceTempShortUrl(request: $_model.GetAppInstanceTempShortUrlRequest): Promise<$_model.GetAppInstanceTempShortUrlResponse>;
    /**
     * Queries the details of an application plugin.
     *
     * @remarks
     * Retrieves the configuration information of a code generation plugin.
     *
     * @param request - GetAppPluginRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppPluginResponse
     */
    getAppPluginWithOptions(request: $_model.GetAppPluginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppPluginResponse>;
    /**
     * Queries the details of an application plugin.
     *
     * @remarks
     * Retrieves the configuration information of a code generation plugin.
     *
     * @param request - GetAppPluginRequest
     * @returns GetAppPluginResponse
     */
    getAppPlugin(request: $_model.GetAppPluginRequest): Promise<$_model.GetAppPluginResponse>;
    /**
     * Retrieves the configuration information of a plugin.
     *
     * @remarks
     * Retrieves the configuration information of a code generation plugin.
     *
     * @param request - GetAppPluginConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppPluginConfigResponse
     */
    getAppPluginConfigWithOptions(request: $_model.GetAppPluginConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppPluginConfigResponse>;
    /**
     * Retrieves the configuration information of a plugin.
     *
     * @remarks
     * Retrieves the configuration information of a code generation plugin.
     *
     * @param request - GetAppPluginConfigRequest
     * @returns GetAppPluginConfigResponse
     */
    getAppPluginConfig(request: $_model.GetAppPluginConfigRequest): Promise<$_model.GetAppPluginConfigResponse>;
    /**
     * Retrieves the plugin configuration of a Wanxiaozhi site for internal services and returns an encrypted configuration string.
     *
     * @remarks
     * ## Request description
     * - The service design of this operation is exclusively for internal platform services to read the plugin configuration of a specific site by using a service identity.
     * - Authentication relies entirely on gateway RAM control and is available only to trusted internal service accounts.
     * - If the specified plugin is not installed on the site or the request parameters are empty, the operation returns a success status with an empty Module. Clients that invoke the operation should treat this as unconfigured.
     * - The returned `PluginConfig` field contains an AES-encrypted JSON character string. Clients that invoke the operation must perform decryption before use.
     * - To invoke in user mode, continue to use the `GetAppPluginConfig` operation instead of this operation.
     * - The `BizId` and `PluginId` parameters are both required in the contract. Passing empty character strings is not blocked by the gateway but causes the backend to return an empty Module. This is a fault-tolerance behavior, and clients that invoke the operation should not rely on it.
     * - This operation supports HTTPS and RPC-style POST requests, with parameters passed through formData.
     *
     * @param request - GetAppPluginConfigForAdminRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppPluginConfigForAdminResponse
     */
    getAppPluginConfigForAdminWithOptions(request: $_model.GetAppPluginConfigForAdminRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppPluginConfigForAdminResponse>;
    /**
     * Retrieves the plugin configuration of a Wanxiaozhi site for internal services and returns an encrypted configuration string.
     *
     * @remarks
     * ## Request description
     * - The service design of this operation is exclusively for internal platform services to read the plugin configuration of a specific site by using a service identity.
     * - Authentication relies entirely on gateway RAM control and is available only to trusted internal service accounts.
     * - If the specified plugin is not installed on the site or the request parameters are empty, the operation returns a success status with an empty Module. Clients that invoke the operation should treat this as unconfigured.
     * - The returned `PluginConfig` field contains an AES-encrypted JSON character string. Clients that invoke the operation must perform decryption before use.
     * - To invoke in user mode, continue to use the `GetAppPluginConfig` operation instead of this operation.
     * - The `BizId` and `PluginId` parameters are both required in the contract. Passing empty character strings is not blocked by the gateway but causes the backend to return an empty Module. This is a fault-tolerance behavior, and clients that invoke the operation should not rely on it.
     * - This operation supports HTTPS and RPC-style POST requests, with parameters passed through formData.
     *
     * @param request - GetAppPluginConfigForAdminRequest
     * @returns GetAppPluginConfigForAdminResponse
     */
    getAppPluginConfigForAdmin(request: $_model.GetAppPluginConfigForAdminRequest): Promise<$_model.GetAppPluginConfigForAdminResponse>;
    /**
     * Queries the publish status.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - GetAppPublishStatusRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppPublishStatusResponse
     */
    getAppPublishStatusWithOptions(request: $_model.GetAppPublishStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppPublishStatusResponse>;
    /**
     * Queries the publish status.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - GetAppPublishStatusRequest
     * @returns GetAppPublishStatusResponse
     */
    getAppPublishStatus(request: $_model.GetAppPublishStatusRequest): Promise<$_model.GetAppPublishStatusResponse>;
    /**
     * Queries recommended commodities.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - GetAppRecommendedCommoditiesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppRecommendedCommoditiesResponse
     */
    getAppRecommendedCommoditiesWithOptions(request: $_model.GetAppRecommendedCommoditiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppRecommendedCommoditiesResponse>;
    /**
     * Queries recommended commodities.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - GetAppRecommendedCommoditiesRequest
     * @returns GetAppRecommendedCommoditiesResponse
     */
    getAppRecommendedCommodities(request: $_model.GetAppRecommendedCommoditiesRequest): Promise<$_model.GetAppRecommendedCommoditiesResponse>;
    /**
     * Queries requirements.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - GetAppRequirementRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppRequirementResponse
     */
    getAppRequirementWithOptions(request: $_model.GetAppRequirementRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppRequirementResponse>;
    /**
     * Queries requirements.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - GetAppRequirementRequest
     * @returns GetAppRequirementResponse
     */
    getAppRequirement(request: $_model.GetAppRequirementRequest): Promise<$_model.GetAppRequirementResponse>;
    /**
     * Retrieves the sandbox preview URL.
     *
     * @remarks
     * Wanxiaozhi 2.0 - Retrieves the site preview URL.
     *
     * @param request - GetAppSandboxPreviewUrlRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppSandboxPreviewUrlResponse
     */
    getAppSandboxPreviewUrlWithOptions(request: $_model.GetAppSandboxPreviewUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppSandboxPreviewUrlResponse>;
    /**
     * Retrieves the sandbox preview URL.
     *
     * @remarks
     * Wanxiaozhi 2.0 - Retrieves the site preview URL.
     *
     * @param request - GetAppSandboxPreviewUrlRequest
     * @returns GetAppSandboxPreviewUrlResponse
     */
    getAppSandboxPreviewUrl(request: $_model.GetAppSandboxPreviewUrlRequest): Promise<$_model.GetAppSandboxPreviewUrlResponse>;
    /**
     * Queries the SEO index status.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - GetAppSeoStatusRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppSeoStatusResponse
     */
    getAppSeoStatusWithOptions(request: $_model.GetAppSeoStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppSeoStatusResponse>;
    /**
     * Queries the SEO index status.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - GetAppSeoStatusRequest
     * @returns GetAppSeoStatusResponse
     */
    getAppSeoStatus(request: $_model.GetAppSeoStatusRequest): Promise<$_model.GetAppSeoStatusResponse>;
    /**
     * SEO index chart.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - GetAppSeoTrendsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppSeoTrendsResponse
     */
    getAppSeoTrendsWithOptions(request: $_model.GetAppSeoTrendsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppSeoTrendsResponse>;
    /**
     * SEO index chart.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - GetAppSeoTrendsRequest
     * @returns GetAppSeoTrendsResponse
     */
    getAppSeoTrends(request: $_model.GetAppSeoTrendsRequest): Promise<$_model.GetAppSeoTrendsResponse>;
    /**
     * Retrieves the sitemap.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - GetAppSitemapRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppSitemapResponse
     */
    getAppSitemapWithOptions(request: $_model.GetAppSitemapRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppSitemapResponse>;
    /**
     * Retrieves the sitemap.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - GetAppSitemapRequest
     * @returns GetAppSitemapResponse
     */
    getAppSitemap(request: $_model.GetAppSitemapRequest): Promise<$_model.GetAppSitemapResponse>;
    /**
     * Queries the Supabase authentication settings.
     *
     * @remarks
     * Queries the Supabase instance authentication configuration information for a specified resource.
     *
     * @param request - GetAppSupabaseAuthConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppSupabaseAuthConfigResponse
     */
    getAppSupabaseAuthConfigWithOptions(request: $_model.GetAppSupabaseAuthConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppSupabaseAuthConfigResponse>;
    /**
     * Queries the Supabase authentication settings.
     *
     * @remarks
     * Queries the Supabase instance authentication configuration information for a specified resource.
     *
     * @param request - GetAppSupabaseAuthConfigRequest
     * @returns GetAppSupabaseAuthConfigResponse
     */
    getAppSupabaseAuthConfig(request: $_model.GetAppSupabaseAuthConfigRequest): Promise<$_model.GetAppSupabaseAuthConfigResponse>;
    /**
     * Retrieves the information about a Supabase instance.
     *
     * @remarks
     * Queries the information about an application instance.
     *
     * @param request - GetAppSupabaseInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppSupabaseInstanceResponse
     */
    getAppSupabaseInstanceWithOptions(request: $_model.GetAppSupabaseInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppSupabaseInstanceResponse>;
    /**
     * Retrieves the information about a Supabase instance.
     *
     * @remarks
     * Queries the information about an application instance.
     *
     * @param request - GetAppSupabaseInstanceRequest
     * @returns GetAppSupabaseInstanceResponse
     */
    getAppSupabaseInstance(request: $_model.GetAppSupabaseInstanceRequest): Promise<$_model.GetAppSupabaseInstanceResponse>;
    /**
     * Queries Supabase keys.
     *
     * @remarks
     * Queries the Supabase instance information corresponding to the specified resource.
     *
     * @param request - GetAppSupabaseSecretsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppSupabaseSecretsResponse
     */
    getAppSupabaseSecretsWithOptions(request: $_model.GetAppSupabaseSecretsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppSupabaseSecretsResponse>;
    /**
     * Queries Supabase keys.
     *
     * @remarks
     * Queries the Supabase instance information corresponding to the specified resource.
     *
     * @param request - GetAppSupabaseSecretsRequest
     * @returns GetAppSupabaseSecretsResponse
     */
    getAppSupabaseSecrets(request: $_model.GetAppSupabaseSecretsRequest): Promise<$_model.GetAppSupabaseSecretsResponse>;
    /**
     * Queries the details of a template.
     *
     * @remarks
     * Retrieves the configuration information of a code generation plug-in.
     *
     * @param request - GetAppTemplateRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppTemplateResponse
     */
    getAppTemplateWithOptions(request: $_model.GetAppTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppTemplateResponse>;
    /**
     * Queries the details of a template.
     *
     * @remarks
     * Retrieves the configuration information of a code generation plug-in.
     *
     * @param request - GetAppTemplateRequest
     * @returns GetAppTemplateResponse
     */
    getAppTemplate(request: $_model.GetAppTemplateRequest): Promise<$_model.GetAppTemplateResponse>;
    /**
     * Queries the Wanxiaozhi inspiration value service.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppTokenServiceResponse
     */
    getAppTokenServiceWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetAppTokenServiceResponse>;
    /**
     * Queries the Wanxiaozhi inspiration value service.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     * @returns GetAppTokenServiceResponse
     */
    getAppTokenService(): Promise<$_model.GetAppTokenServiceResponse>;
    /**
     * Retrieves the directory structure of a workspace.
     *
     * @remarks
     * Queries the information of an application instance.
     *
     * @param request - GetAppWorkspaceDirectoryRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppWorkspaceDirectoryResponse
     */
    getAppWorkspaceDirectoryWithOptions(request: $_model.GetAppWorkspaceDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppWorkspaceDirectoryResponse>;
    /**
     * Retrieves the directory structure of a workspace.
     *
     * @remarks
     * Queries the information of an application instance.
     *
     * @param request - GetAppWorkspaceDirectoryRequest
     * @returns GetAppWorkspaceDirectoryResponse
     */
    getAppWorkspaceDirectory(request: $_model.GetAppWorkspaceDirectoryRequest): Promise<$_model.GetAppWorkspaceDirectoryResponse>;
    /**
     * Queries a logo creation task.
     *
     * @param request - GetCreateLogoTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetCreateLogoTaskResponse
     */
    getCreateLogoTaskWithOptions(request: $_model.GetCreateLogoTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCreateLogoTaskResponse>;
    /**
     * Queries a logo creation task.
     *
     * @param request - GetCreateLogoTaskRequest
     * @returns GetCreateLogoTaskResponse
     */
    getCreateLogoTask(request: $_model.GetCreateLogoTaskRequest): Promise<$_model.GetCreateLogoTaskResponse>;
    /**
     * Provides a domain name query API for service providers.
     *
     * @param request - GetDomainInfoForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetDomainInfoForPartnerResponse
     */
    getDomainInfoForPartnerWithOptions(request: $_model.GetDomainInfoForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDomainInfoForPartnerResponse>;
    /**
     * Provides a domain name query API for service providers.
     *
     * @param request - GetDomainInfoForPartnerRequest
     * @returns GetDomainInfoForPartnerResponse
     */
    getDomainInfoForPartner(request: $_model.GetDomainInfoForPartnerRequest): Promise<$_model.GetDomainInfoForPartnerResponse>;
    /**
     * Queries the China Internet Content Provider (ICP) filing information of a domain name.
     *
     * @param request - GetIcpFilingInfoForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetIcpFilingInfoForPartnerResponse
     */
    getIcpFilingInfoForPartnerWithOptions(request: $_model.GetIcpFilingInfoForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIcpFilingInfoForPartnerResponse>;
    /**
     * Queries the China Internet Content Provider (ICP) filing information of a domain name.
     *
     * @param request - GetIcpFilingInfoForPartnerRequest
     * @returns GetIcpFilingInfoForPartnerResponse
     */
    getIcpFilingInfoForPartner(request: $_model.GetIcpFilingInfoForPartnerRequest): Promise<$_model.GetIcpFilingInfoForPartnerResponse>;
    /**
     * Queries the LLM Proxy configuration.
     *
     * @remarks
     * Queries the Supabase instance configuration information corresponding to a resource.
     *
     * @param request - GetLlmProxyConfigForAdminRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetLlmProxyConfigForAdminResponse
     */
    getLlmProxyConfigForAdminWithOptions(request: $_model.GetLlmProxyConfigForAdminRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLlmProxyConfigForAdminResponse>;
    /**
     * Queries the LLM Proxy configuration.
     *
     * @remarks
     * Queries the Supabase instance configuration information corresponding to a resource.
     *
     * @param request - GetLlmProxyConfigForAdminRequest
     * @returns GetLlmProxyConfigForAdminResponse
     */
    getLlmProxyConfigForAdmin(request: $_model.GetLlmProxyConfigForAdminRequest): Promise<$_model.GetLlmProxyConfigForAdminResponse>;
    /**
     * Retrieves the authorization URL for a mini program.
     *
     * @param request - GetMiniAppAuthUrlRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetMiniAppAuthUrlResponse
     */
    getMiniAppAuthUrlWithOptions(request: $_model.GetMiniAppAuthUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMiniAppAuthUrlResponse>;
    /**
     * Retrieves the authorization URL for a mini program.
     *
     * @param request - GetMiniAppAuthUrlRequest
     * @returns GetMiniAppAuthUrlResponse
     */
    getMiniAppAuthUrl(request: $_model.GetMiniAppAuthUrlRequest): Promise<$_model.GetMiniAppAuthUrlResponse>;
    /**
     * Queries the mini programs bound to a site.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param tmpReq - GetMiniAppBindingRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetMiniAppBindingResponse
     */
    getMiniAppBindingWithOptions(tmpReq: $_model.GetMiniAppBindingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMiniAppBindingResponse>;
    /**
     * Queries the mini programs bound to a site.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - GetMiniAppBindingRequest
     * @returns GetMiniAppBindingResponse
     */
    getMiniAppBinding(request: $_model.GetMiniAppBindingRequest): Promise<$_model.GetMiniAppBindingResponse>;
    /**
     * Queries the mini programs attached to an application instance by using a conditional query.
     *
     * @param request - GetMiniAppBindingForAdminRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetMiniAppBindingForAdminResponse
     */
    getMiniAppBindingForAdminWithOptions(request: $_model.GetMiniAppBindingForAdminRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMiniAppBindingForAdminResponse>;
    /**
     * Queries the mini programs attached to an application instance by using a conditional query.
     *
     * @param request - GetMiniAppBindingForAdminRequest
     * @returns GetMiniAppBindingForAdminResponse
     */
    getMiniAppBindingForAdmin(request: $_model.GetMiniAppBindingForAdminRequest): Promise<$_model.GetMiniAppBindingForAdminResponse>;
    /**
     * Generates a file upload policy.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - GetOssUploadPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetOssUploadPolicyResponse
     */
    getOssUploadPolicyWithOptions(request: $_model.GetOssUploadPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOssUploadPolicyResponse>;
    /**
     * Generates a file upload policy.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - GetOssUploadPolicyRequest
     * @returns GetOssUploadPolicyResponse
     */
    getOssUploadPolicy(request: $_model.GetOssUploadPolicyRequest): Promise<$_model.GetOssUploadPolicyResponse>;
    /**
     * Retrieves a temporary download URL.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - GetTempDownloadUrlRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetTempDownloadUrlResponse
     */
    getTempDownloadUrlWithOptions(request: $_model.GetTempDownloadUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTempDownloadUrlResponse>;
    /**
     * Retrieves a temporary download URL.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - GetTempDownloadUrlRequest
     * @returns GetTempDownloadUrlResponse
     */
    getTempDownloadUrl(request: $_model.GetTempDownloadUrlRequest): Promise<$_model.GetTempDownloadUrlResponse>;
    /**
     * Exchanges a temporary AccessKey for an access token.
     *
     * @param request - GetUserAccessTokenForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetUserAccessTokenForPartnerResponse
     */
    getUserAccessTokenForPartnerWithOptions(request: $_model.GetUserAccessTokenForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserAccessTokenForPartnerResponse>;
    /**
     * Exchanges a temporary AccessKey for an access token.
     *
     * @param request - GetUserAccessTokenForPartnerRequest
     * @returns GetUserAccessTokenForPartnerResponse
     */
    getUserAccessTokenForPartner(request: $_model.GetUserAccessTokenForPartnerRequest): Promise<$_model.GetUserAccessTokenForPartnerResponse>;
    /**
     * Obtains temporary credentials for a partner to assume a user\\"s service-linked role.
     *
     * @param request - GetUserTmpIdentityForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetUserTmpIdentityForPartnerResponse
     */
    getUserTmpIdentityForPartnerWithOptions(request: $_model.GetUserTmpIdentityForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserTmpIdentityForPartnerResponse>;
    /**
     * Obtains temporary credentials for a partner to assume a user\\"s service-linked role.
     *
     * @param request - GetUserTmpIdentityForPartnerRequest
     * @returns GetUserTmpIdentityForPartnerResponse
     */
    getUserTmpIdentityForPartner(request: $_model.GetUserTmpIdentityForPartnerRequest): Promise<$_model.GetUserTmpIdentityForPartnerResponse>;
    /**
     * Grants promotional benefits to partners.
     *
     * @remarks
     * Retrieves the configuration information for the code generation plugin.
     *
     * @param request - GrantPromotionOfferForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GrantPromotionOfferForPartnerResponse
     */
    grantPromotionOfferForPartnerWithOptions(request: $_model.GrantPromotionOfferForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GrantPromotionOfferForPartnerResponse>;
    /**
     * Grants promotional benefits to partners.
     *
     * @remarks
     * Retrieves the configuration information for the code generation plugin.
     *
     * @param request - GrantPromotionOfferForPartnerRequest
     * @returns GrantPromotionOfferForPartnerResponse
     */
    grantPromotionOfferForPartner(request: $_model.GrantPromotionOfferForPartnerRequest): Promise<$_model.GrantPromotionOfferForPartnerResponse>;
    /**
     * Installs an application plugin to the current user account.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - InstallAppPluginRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns InstallAppPluginResponse
     */
    installAppPluginWithOptions(request: $_model.InstallAppPluginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InstallAppPluginResponse>;
    /**
     * Installs an application plugin to the current user account.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - InstallAppPluginRequest
     * @returns InstallAppPluginResponse
     */
    installAppPlugin(request: $_model.InstallAppPluginRequest): Promise<$_model.InstallAppPluginResponse>;
    /**
     * Introspection analysis of免登 accessToken
     *
     * @param request - IntrospectAppInstanceTicketForPreviewRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns IntrospectAppInstanceTicketForPreviewResponse
     */
    introspectAppInstanceTicketForPreviewWithOptions(request: $_model.IntrospectAppInstanceTicketForPreviewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.IntrospectAppInstanceTicketForPreviewResponse>;
    /**
     * Introspection analysis of免登 accessToken
     *
     * @param request - IntrospectAppInstanceTicketForPreviewRequest
     * @returns IntrospectAppInstanceTicketForPreviewResponse
     */
    introspectAppInstanceTicketForPreview(request: $_model.IntrospectAppInstanceTicketForPreviewRequest): Promise<$_model.IntrospectAppInstanceTicketForPreviewResponse>;
    /**
     * Retrieves incremental Server-Sent Events (SSE) for AI agent conversations.
     *
     * @remarks
     * Wanxiaozhi 2.0 - Retrieves the streaming output results of AI conversations.
     *
     * @param request - ListAIStaffChatEventsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAIStaffChatEventsResponse
     */
    listAIStaffChatEventsWithOptions(request: $_model.ListAIStaffChatEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAIStaffChatEventsResponse>;
    /**
     * Retrieves incremental Server-Sent Events (SSE) for AI agent conversations.
     *
     * @remarks
     * Wanxiaozhi 2.0 - Retrieves the streaming output results of AI conversations.
     *
     * @param request - ListAIStaffChatEventsRequest
     * @returns ListAIStaffChatEventsResponse
     */
    listAIStaffChatEvents(request: $_model.ListAIStaffChatEventsRequest): Promise<$_model.ListAIStaffChatEventsResponse>;
    /**
     * Performs a paging query on the list of conversation messages for an AI agent.
     *
     * @remarks
     * Queries the AI conversation history for Wanxiaozhi 2.0.
     *
     * @param request - ListAIStaffChatMessagesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAIStaffChatMessagesResponse
     */
    listAIStaffChatMessagesWithOptions(request: $_model.ListAIStaffChatMessagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAIStaffChatMessagesResponse>;
    /**
     * Performs a paging query on the list of conversation messages for an AI agent.
     *
     * @remarks
     * Queries the AI conversation history for Wanxiaozhi 2.0.
     *
     * @param request - ListAIStaffChatMessagesRequest
     * @returns ListAIStaffChatMessagesResponse
     */
    listAIStaffChatMessages(request: $_model.ListAIStaffChatMessagesRequest): Promise<$_model.ListAIStaffChatMessagesResponse>;
    /**
     * Queries the list of application assistant agents.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - ListAppAssistantAgentsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppAssistantAgentsResponse
     */
    listAppAssistantAgentsWithOptions(request: $_model.ListAppAssistantAgentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppAssistantAgentsResponse>;
    /**
     * Queries the list of application assistant agents.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - ListAppAssistantAgentsRequest
     * @returns ListAppAssistantAgentsResponse
     */
    listAppAssistantAgents(request: $_model.ListAppAssistantAgentsRequest): Promise<$_model.ListAppAssistantAgentsResponse>;
    /**
     * Queries the messages in a specified chat.
     *
     * @remarks
     * Wanxiaozhi 2.0 - AI conversation history query API.
     *
     * @param request - ListAppChatMessagesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppChatMessagesResponse
     */
    listAppChatMessagesWithOptions(request: $_model.ListAppChatMessagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppChatMessagesResponse>;
    /**
     * Queries the messages in a specified chat.
     *
     * @remarks
     * Wanxiaozhi 2.0 - AI conversation history query API.
     *
     * @param request - ListAppChatMessagesRequest
     * @returns ListAppChatMessagesResponse
     */
    listAppChatMessages(request: $_model.ListAppChatMessagesRequest): Promise<$_model.ListAppChatMessagesResponse>;
    /**
     * The product information data.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @deprecated OpenAPI ListAppCommoditySpecificationsForPartner is deprecated, please use WebsiteBuild::2025-04-29::ListAppCommoditySpecificationsV2ForPartner instead.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppCommoditySpecificationsForPartnerResponse
     */
    listAppCommoditySpecificationsForPartnerWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListAppCommoditySpecificationsForPartnerResponse>;
    /**
     * The product information data.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @deprecated OpenAPI ListAppCommoditySpecificationsForPartner is deprecated, please use WebsiteBuild::2025-04-29::ListAppCommoditySpecificationsV2ForPartner instead.
     * @returns ListAppCommoditySpecificationsForPartnerResponse
     */
    listAppCommoditySpecificationsForPartner(): Promise<$_model.ListAppCommoditySpecificationsForPartnerResponse>;
    /**
     * Query Website Build Product Details
     *
     * @remarks
     * Get QR code plugin configuration information
     *
     * @param request - ListAppCommoditySpecificationsV2ForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppCommoditySpecificationsV2ForPartnerResponse
     */
    listAppCommoditySpecificationsV2ForPartnerWithOptions(request: $_model.ListAppCommoditySpecificationsV2ForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppCommoditySpecificationsV2ForPartnerResponse>;
    /**
     * Query Website Build Product Details
     *
     * @remarks
     * Get QR code plugin configuration information
     *
     * @param request - ListAppCommoditySpecificationsV2ForPartnerRequest
     * @returns ListAppCommoditySpecificationsV2ForPartnerResponse
     */
    listAppCommoditySpecificationsV2ForPartner(request: $_model.ListAppCommoditySpecificationsV2ForPartnerRequest): Promise<$_model.ListAppCommoditySpecificationsV2ForPartnerResponse>;
    /**
     * Queries the list of conversation messages by paging.
     *
     * @remarks
     * Wanxiaozhi 2.0 - API for querying AI session history information.
     *
     * @param request - ListAppConversationMessagesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppConversationMessagesResponse
     */
    listAppConversationMessagesWithOptions(request: $_model.ListAppConversationMessagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppConversationMessagesResponse>;
    /**
     * Queries the list of conversation messages by paging.
     *
     * @remarks
     * Wanxiaozhi 2.0 - API for querying AI session history information.
     *
     * @param request - ListAppConversationMessagesRequest
     * @returns ListAppConversationMessagesResponse
     */
    listAppConversationMessages(request: $_model.ListAppConversationMessagesRequest): Promise<$_model.ListAppConversationMessagesResponse>;
    /**
     * Queries the conversation list.
     *
     * @remarks
     * Creates an AI conversation in Wanxiaozhi 2.0.
     *
     * @param request - ListAppConversationsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppConversationsResponse
     */
    listAppConversationsWithOptions(request: $_model.ListAppConversationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppConversationsResponse>;
    /**
     * Queries the conversation list.
     *
     * @remarks
     * Creates an AI conversation in Wanxiaozhi 2.0.
     *
     * @param request - ListAppConversationsRequest
     * @returns ListAppConversationsResponse
     */
    listAppConversations(request: $_model.ListAppConversationsRequest): Promise<$_model.ListAppConversationsResponse>;
    /**
     * Queries the list of HTTP 301 status codes for a website.
     *
     * @param request - ListAppDomainRedirectRecordsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppDomainRedirectRecordsResponse
     */
    listAppDomainRedirectRecordsWithOptions(request: $_model.ListAppDomainRedirectRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppDomainRedirectRecordsResponse>;
    /**
     * Queries the list of HTTP 301 status codes for a website.
     *
     * @param request - ListAppDomainRedirectRecordsRequest
     * @returns ListAppDomainRedirectRecordsResponse
     */
    listAppDomainRedirectRecords(request: $_model.ListAppDomainRedirectRecordsRequest): Promise<$_model.ListAppDomainRedirectRecordsResponse>;
    /**
     * Queries the domain names bound to a website.
     *
     * @param request - ListAppInstanceDomainsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppInstanceDomainsResponse
     */
    listAppInstanceDomainsWithOptions(request: $_model.ListAppInstanceDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppInstanceDomainsResponse>;
    /**
     * Queries the domain names bound to a website.
     *
     * @param request - ListAppInstanceDomainsRequest
     * @returns ListAppInstanceDomainsResponse
     */
    listAppInstanceDomains(request: $_model.ListAppInstanceDomainsRequest): Promise<$_model.ListAppInstanceDomainsResponse>;
    /**
     * Queries the list of application instances.
     *
     * @param tmpReq - ListAppInstancesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppInstancesResponse
     */
    listAppInstancesWithOptions(tmpReq: $_model.ListAppInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppInstancesResponse>;
    /**
     * Queries the list of application instances.
     *
     * @param request - ListAppInstancesRequest
     * @returns ListAppInstancesResponse
     */
    listAppInstances(request: $_model.ListAppInstancesRequest): Promise<$_model.ListAppInstancesResponse>;
    /**
     * Retrieves the list of code generation plug-in configurations.
     *
     * @remarks
     * Retrieves the configuration information of code generation plug-ins.
     *
     * @param request - ListAppPluginConfigsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppPluginConfigsResponse
     */
    listAppPluginConfigsWithOptions(request: $_model.ListAppPluginConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppPluginConfigsResponse>;
    /**
     * Retrieves the list of code generation plug-in configurations.
     *
     * @remarks
     * Retrieves the configuration information of code generation plug-ins.
     *
     * @param request - ListAppPluginConfigsRequest
     * @returns ListAppPluginConfigsResponse
     */
    listAppPluginConfigs(request: $_model.ListAppPluginConfigsRequest): Promise<$_model.ListAppPluginConfigsResponse>;
    /**
     * Queries the list of application plugin files.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - ListAppPluginFilesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppPluginFilesResponse
     */
    listAppPluginFilesWithOptions(request: $_model.ListAppPluginFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppPluginFilesResponse>;
    /**
     * Queries the list of application plugin files.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - ListAppPluginFilesRequest
     * @returns ListAppPluginFilesResponse
     */
    listAppPluginFiles(request: $_model.ListAppPluginFilesRequest): Promise<$_model.ListAppPluginFilesResponse>;
    /**
     * Queries the application plug-in versions.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - ListAppPluginVersionsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppPluginVersionsResponse
     */
    listAppPluginVersionsWithOptions(request: $_model.ListAppPluginVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppPluginVersionsResponse>;
    /**
     * Queries the application plug-in versions.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - ListAppPluginVersionsRequest
     * @returns ListAppPluginVersionsResponse
     */
    listAppPluginVersions(request: $_model.ListAppPluginVersionsRequest): Promise<$_model.ListAppPluginVersionsResponse>;
    /**
     * Lists application plugins.
     *
     * @remarks
     * Retrieves the configuration information of code generation plugins.
     *
     * @param request - ListAppPluginsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppPluginsResponse
     */
    listAppPluginsWithOptions(request: $_model.ListAppPluginsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppPluginsResponse>;
    /**
     * Lists application plugins.
     *
     * @remarks
     * Retrieves the configuration information of code generation plugins.
     *
     * @param request - ListAppPluginsRequest
     * @returns ListAppPluginsResponse
     */
    listAppPlugins(request: $_model.ListAppPluginsRequest): Promise<$_model.ListAppPluginsResponse>;
    /**
     * Queries the release history.
     *
     * @remarks
     * Queries the information about application instances.
     *
     * @param request - ListAppPublishHistoryRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppPublishHistoryResponse
     */
    listAppPublishHistoryWithOptions(request: $_model.ListAppPublishHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppPublishHistoryResponse>;
    /**
     * Queries the release history.
     *
     * @remarks
     * Queries the information about application instances.
     *
     * @param request - ListAppPublishHistoryRequest
     * @returns ListAppPublishHistoryResponse
     */
    listAppPublishHistory(request: $_model.ListAppPublishHistoryRequest): Promise<$_model.ListAppPublishHistoryResponse>;
    /**
     * Queries a list of dictionaries.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - ListAppTemplateDictsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppTemplateDictsResponse
     */
    listAppTemplateDictsWithOptions(request: $_model.ListAppTemplateDictsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppTemplateDictsResponse>;
    /**
     * Queries a list of dictionaries.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - ListAppTemplateDictsRequest
     * @returns ListAppTemplateDictsResponse
     */
    listAppTemplateDicts(request: $_model.ListAppTemplateDictsRequest): Promise<$_model.ListAppTemplateDictsResponse>;
    /**
     * Queries a list of templates.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - ListAppTemplatesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppTemplatesResponse
     */
    listAppTemplatesWithOptions(request: $_model.ListAppTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppTemplatesResponse>;
    /**
     * Queries a list of templates.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - ListAppTemplatesRequest
     * @returns ListAppTemplatesResponse
     */
    listAppTemplates(request: $_model.ListAppTemplatesRequest): Promise<$_model.ListAppTemplatesResponse>;
    /**
     * Queries the Alipay ISV plugin configuration.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - ListIsvPaymentPluginConfigsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListIsvPaymentPluginConfigsResponse
     */
    listIsvPaymentPluginConfigsWithOptions(request: $_model.ListIsvPaymentPluginConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIsvPaymentPluginConfigsResponse>;
    /**
     * Queries the Alipay ISV plugin configuration.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - ListIsvPaymentPluginConfigsRequest
     * @returns ListIsvPaymentPluginConfigsResponse
     */
    listIsvPaymentPluginConfigs(request: $_model.ListIsvPaymentPluginConfigsRequest): Promise<$_model.ListIsvPaymentPluginConfigsResponse>;
    /**
     * Queries the list of application plug-ins in the marketplace.
     *
     * @remarks
     * Retrieves the configuration information of code generation plug-ins.
     *
     * @param request - ListMarketplaceAppPluginsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListMarketplaceAppPluginsResponse
     */
    listMarketplaceAppPluginsWithOptions(request: $_model.ListMarketplaceAppPluginsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMarketplaceAppPluginsResponse>;
    /**
     * Queries the list of application plug-ins in the marketplace.
     *
     * @remarks
     * Retrieves the configuration information of code generation plug-ins.
     *
     * @param request - ListMarketplaceAppPluginsRequest
     * @returns ListMarketplaceAppPluginsResponse
     */
    listMarketplaceAppPlugins(request: $_model.ListMarketplaceAppPluginsRequest): Promise<$_model.ListMarketplaceAppPluginsResponse>;
    /**
     * Queries the list of application plugins.
     *
     * @remarks
     * Retrieves the configuration information of code generation plugins.
     *
     * @param request - ListMyAppPluginsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListMyAppPluginsResponse
     */
    listMyAppPluginsWithOptions(request: $_model.ListMyAppPluginsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMyAppPluginsResponse>;
    /**
     * Queries the list of application plugins.
     *
     * @remarks
     * Retrieves the configuration information of code generation plugins.
     *
     * @param request - ListMyAppPluginsRequest
     * @returns ListMyAppPluginsResponse
     */
    listMyAppPlugins(request: $_model.ListMyAppPluginsRequest): Promise<$_model.ListMyAppPluginsResponse>;
    /**
     * Queries the list of application plug-ins that you have installed.
     *
     * @remarks
     * Retrieves the configuration information of code generation plug-ins.
     *
     * @param request - ListMyInstalledAppPluginsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListMyInstalledAppPluginsResponse
     */
    listMyInstalledAppPluginsWithOptions(request: $_model.ListMyInstalledAppPluginsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMyInstalledAppPluginsResponse>;
    /**
     * Queries the list of application plug-ins that you have installed.
     *
     * @remarks
     * Retrieves the configuration information of code generation plug-ins.
     *
     * @param request - ListMyInstalledAppPluginsRequest
     * @returns ListMyInstalledAppPluginsResponse
     */
    listMyInstalledAppPlugins(request: $_model.ListMyInstalledAppPluginsRequest): Promise<$_model.ListMyInstalledAppPluginsResponse>;
    /**
     * Queries the list of partner promotional activities.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - ListPromotionActivitiesForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListPromotionActivitiesForPartnerResponse
     */
    listPromotionActivitiesForPartnerWithOptions(request: $_model.ListPromotionActivitiesForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPromotionActivitiesForPartnerResponse>;
    /**
     * Queries the list of partner promotional activities.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - ListPromotionActivitiesForPartnerRequest
     * @returns ListPromotionActivitiesForPartnerResponse
     */
    listPromotionActivitiesForPartner(request: $_model.ListPromotionActivitiesForPartnerRequest): Promise<$_model.ListPromotionActivitiesForPartnerResponse>;
    /**
     * Queries the benefit issuance records of a partner.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - ListPromotionOfferRecordsForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListPromotionOfferRecordsForPartnerResponse
     */
    listPromotionOfferRecordsForPartnerWithOptions(request: $_model.ListPromotionOfferRecordsForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPromotionOfferRecordsForPartnerResponse>;
    /**
     * Queries the benefit issuance records of a partner.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - ListPromotionOfferRecordsForPartnerRequest
     * @returns ListPromotionOfferRecordsForPartnerResponse
     */
    listPromotionOfferRecordsForPartner(request: $_model.ListPromotionOfferRecordsForPartnerRequest): Promise<$_model.ListPromotionOfferRecordsForPartnerResponse>;
    /**
     * Queries the RBAC organization tree.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - ListRbacOrgTreeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListRbacOrgTreeResponse
     */
    listRbacOrgTreeWithOptions(request: $_model.ListRbacOrgTreeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRbacOrgTreeResponse>;
    /**
     * Queries the RBAC organization tree.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - ListRbacOrgTreeRequest
     * @returns ListRbacOrgTreeResponse
     */
    listRbacOrgTree(request: $_model.ListRbacOrgTreeRequest): Promise<$_model.ListRbacOrgTreeResponse>;
    /**
     * Queries the RBAC permissions.
     *
     * @remarks
     * Creates an AI session in Wanxiaozhi 2.0.
     *
     * @param request - ListRbacPermissionsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListRbacPermissionsResponse
     */
    listRbacPermissionsWithOptions(request: $_model.ListRbacPermissionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRbacPermissionsResponse>;
    /**
     * Queries the RBAC permissions.
     *
     * @remarks
     * Creates an AI session in Wanxiaozhi 2.0.
     *
     * @param request - ListRbacPermissionsRequest
     * @returns ListRbacPermissionsResponse
     */
    listRbacPermissions(request: $_model.ListRbacPermissionsRequest): Promise<$_model.ListRbacPermissionsResponse>;
    /**
     * Queries the RBAC role hierarchy.
     *
     * @remarks
     * Queries the application instance information.
     *
     * @param request - ListRbacRoleHierarchyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListRbacRoleHierarchyResponse
     */
    listRbacRoleHierarchyWithOptions(request: $_model.ListRbacRoleHierarchyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRbacRoleHierarchyResponse>;
    /**
     * Queries the RBAC role hierarchy.
     *
     * @remarks
     * Queries the application instance information.
     *
     * @param request - ListRbacRoleHierarchyRequest
     * @returns ListRbacRoleHierarchyResponse
     */
    listRbacRoleHierarchy(request: $_model.ListRbacRoleHierarchyRequest): Promise<$_model.ListRbacRoleHierarchyResponse>;
    /**
     * Queries a list of RBAC roles.
     *
     * @remarks
     * Queries the application instance information.
     *
     * @param request - ListRbacRolesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListRbacRolesResponse
     */
    listRbacRolesWithOptions(request: $_model.ListRbacRolesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRbacRolesResponse>;
    /**
     * Queries a list of RBAC roles.
     *
     * @remarks
     * Queries the application instance information.
     *
     * @param request - ListRbacRolesRequest
     * @returns ListRbacRolesResponse
     */
    listRbacRoles(request: $_model.ListRbacRolesRequest): Promise<$_model.ListRbacRolesResponse>;
    /**
     * Modifies the specifications of a website building application instance.
     *
     * @remarks
     * Modifies the specifications of a website building application instance.
     *
     * @param request - ModifyAppInstanceSpecRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyAppInstanceSpecResponse
     */
    modifyAppInstanceSpecWithOptions(request: $_model.ModifyAppInstanceSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAppInstanceSpecResponse>;
    /**
     * Modifies the specifications of a website building application instance.
     *
     * @remarks
     * Modifies the specifications of a website building application instance.
     *
     * @param request - ModifyAppInstanceSpecRequest
     * @returns ModifyAppInstanceSpecResponse
     */
    modifyAppInstanceSpec(request: $_model.ModifyAppInstanceSpecRequest): Promise<$_model.ModifyAppInstanceSpecResponse>;
    /**
     * Updates a material folder.
     *
     * @param request - ModifyMaterialDirectoryRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyMaterialDirectoryResponse
     */
    modifyMaterialDirectoryWithOptions(request: $_model.ModifyMaterialDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMaterialDirectoryResponse>;
    /**
     * Updates a material folder.
     *
     * @param request - ModifyMaterialDirectoryRequest
     * @returns ModifyMaterialDirectoryResponse
     */
    modifyMaterialDirectory(request: $_model.ModifyMaterialDirectoryRequest): Promise<$_model.ModifyMaterialDirectoryResponse>;
    /**
     * Updates a material file.
     *
     * @param request - ModifyMaterialFileRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyMaterialFileResponse
     */
    modifyMaterialFileWithOptions(request: $_model.ModifyMaterialFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMaterialFileResponse>;
    /**
     * Updates a material file.
     *
     * @param request - ModifyMaterialFileRequest
     * @returns ModifyMaterialFileResponse
     */
    modifyMaterialFile(request: $_model.ModifyMaterialFileRequest): Promise<$_model.ModifyMaterialFileResponse>;
    /**
     * Updates the status of material files.
     *
     * @param tmpReq - ModifyMaterialFileStatusRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyMaterialFileStatusResponse
     */
    modifyMaterialFileStatusWithOptions(tmpReq: $_model.ModifyMaterialFileStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMaterialFileStatusResponse>;
    /**
     * Updates the status of material files.
     *
     * @param request - ModifyMaterialFileStatusRequest
     * @returns ModifyMaterialFileStatusResponse
     */
    modifyMaterialFileStatus(request: $_model.ModifyMaterialFileStatusRequest): Promise<$_model.ModifyMaterialFileStatusResponse>;
    /**
     * Moves an asset folder.
     *
     * @param request - MoveMaterialDirectoryRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns MoveMaterialDirectoryResponse
     */
    moveMaterialDirectoryWithOptions(request: $_model.MoveMaterialDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveMaterialDirectoryResponse>;
    /**
     * Moves an asset folder.
     *
     * @param request - MoveMaterialDirectoryRequest
     * @returns MoveMaterialDirectoryResponse
     */
    moveMaterialDirectory(request: $_model.MoveMaterialDirectoryRequest): Promise<$_model.MoveMaterialDirectoryResponse>;
    /**
     * Moves asset files.
     *
     * @param tmpReq - MoveMaterialFileRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns MoveMaterialFileResponse
     */
    moveMaterialFileWithOptions(tmpReq: $_model.MoveMaterialFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveMaterialFileResponse>;
    /**
     * Moves asset files.
     *
     * @param request - MoveMaterialFileRequest
     * @returns MoveMaterialFileResponse
     */
    moveMaterialFile(request: $_model.MoveMaterialFileRequest): Promise<$_model.MoveMaterialFileResponse>;
    /**
     * Triggers a data change notification for administrators.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - NotifyAppNotificationForAdminRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns NotifyAppNotificationForAdminResponse
     */
    notifyAppNotificationForAdminWithOptions(request: $_model.NotifyAppNotificationForAdminRequest, runtime: $dara.RuntimeOptions): Promise<$_model.NotifyAppNotificationForAdminResponse>;
    /**
     * Triggers a data change notification for administrators.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - NotifyAppNotificationForAdminRequest
     * @returns NotifyAppNotificationForAdminResponse
     */
    notifyAppNotificationForAdmin(request: $_model.NotifyAppNotificationForAdminRequest): Promise<$_model.NotifyAppNotificationForAdminResponse>;
    /**
     * Takes a website offline by switching the CDN back-to-origin requests for all domain names under the site to an offline page.
     *
     * @param request - OfflineAppInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns OfflineAppInstanceResponse
     */
    offlineAppInstanceWithOptions(request: $_model.OfflineAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OfflineAppInstanceResponse>;
    /**
     * Takes a website offline by switching the CDN back-to-origin requests for all domain names under the site to an offline page.
     *
     * @param request - OfflineAppInstanceRequest
     * @returns OfflineAppInstanceResponse
     */
    offlineAppInstance(request: $_model.OfflineAppInstanceRequest): Promise<$_model.OfflineAppInstanceResponse>;
    /**
     * Restores a website to online status by reverting the CDN back-to-origin configuration for all domain names under the site to the normal path rewrite rules.
     *
     * @param request - OnlineAppInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns OnlineAppInstanceResponse
     */
    onlineAppInstanceWithOptions(request: $_model.OnlineAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnlineAppInstanceResponse>;
    /**
     * Restores a website to online status by reverting the CDN back-to-origin configuration for all domain names under the site to the normal path rewrite rules.
     *
     * @param request - OnlineAppInstanceRequest
     * @returns OnlineAppInstanceResponse
     */
    onlineAppInstance(request: $_model.OnlineAppInstanceRequest): Promise<$_model.OnlineAppInstanceResponse>;
    /**
     * Operates an application by a partner.
     *
     * @param request - OperateAppInstanceForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns OperateAppInstanceForPartnerResponse
     */
    operateAppInstanceForPartnerWithOptions(request: $_model.OperateAppInstanceForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateAppInstanceForPartnerResponse>;
    /**
     * Operates an application by a partner.
     *
     * @param request - OperateAppInstanceForPartnerRequest
     * @returns OperateAppInstanceForPartnerResponse
     */
    operateAppInstanceForPartner(request: $_model.OperateAppInstanceForPartnerRequest): Promise<$_model.OperateAppInstanceForPartnerResponse>;
    /**
     * Operates application services on behalf of a partner.
     *
     * @param request - OperateAppServiceForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns OperateAppServiceForPartnerResponse
     */
    operateAppServiceForPartnerWithOptions(request: $_model.OperateAppServiceForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateAppServiceForPartnerResponse>;
    /**
     * Operates application services on behalf of a partner.
     *
     * @param request - OperateAppServiceForPartnerRequest
     * @returns OperateAppServiceForPartnerResponse
     */
    operateAppServiceForPartner(request: $_model.OperateAppServiceForPartnerRequest): Promise<$_model.OperateAppServiceForPartnerResponse>;
    /**
     * Switches the like statistics for a template.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - OperateAppTemplateLikeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns OperateAppTemplateLikeResponse
     */
    operateAppTemplateLikeWithOptions(request: $_model.OperateAppTemplateLikeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateAppTemplateLikeResponse>;
    /**
     * Switches the like statistics for a template.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - OperateAppTemplateLikeRequest
     * @returns OperateAppTemplateLikeResponse
     */
    operateAppTemplateLike(request: $_model.OperateAppTemplateLikeRequest): Promise<$_model.OperateAppTemplateLikeResponse>;
    /**
     * Retrieves the Supabase instance information for the operated resource.
     *
     * @remarks
     * The Supabase instance information for the operated resource.
     *
     * @param request - OperateSupabaseForAdminRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns OperateSupabaseForAdminResponse
     */
    operateSupabaseForAdminWithOptions(request: $_model.OperateSupabaseForAdminRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateSupabaseForAdminResponse>;
    /**
     * Retrieves the Supabase instance information for the operated resource.
     *
     * @remarks
     * The Supabase instance information for the operated resource.
     *
     * @param request - OperateSupabaseForAdminRequest
     * @returns OperateSupabaseForAdminResponse
     */
    operateSupabaseForAdmin(request: $_model.OperateSupabaseForAdminRequest): Promise<$_model.OperateSupabaseForAdminResponse>;
    /**
     * Publishes an application instance.
     *
     * @remarks
     * Queries the application instance information.
     *
     * @param request - PublishAppInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns PublishAppInstanceResponse
     */
    publishAppInstanceWithOptions(request: $_model.PublishAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishAppInstanceResponse>;
    /**
     * Publishes an application instance.
     *
     * @remarks
     * Queries the application instance information.
     *
     * @param request - PublishAppInstanceRequest
     * @returns PublishAppInstanceResponse
     */
    publishAppInstance(request: $_model.PublishAppInstanceRequest): Promise<$_model.PublishAppInstanceResponse>;
    /**
     * Pushes resource metering data.
     *
     * @remarks
     * Queries the Supabase instance information corresponding to a resource.
     *
     * @param request - PushResourceMeasureRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns PushResourceMeasureResponse
     */
    pushResourceMeasureWithOptions(request: $_model.PushResourceMeasureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PushResourceMeasureResponse>;
    /**
     * Pushes resource metering data.
     *
     * @remarks
     * Queries the Supabase instance information corresponding to a resource.
     *
     * @param request - PushResourceMeasureRequest
     * @returns PushResourceMeasureResponse
     */
    pushResourceMeasure(request: $_model.PushResourceMeasureRequest): Promise<$_model.PushResourceMeasureResponse>;
    /**
     * Queries the acquisition details of inspiration points, including the list of quota accounts and their expiration status.
     *
     * @remarks
     * Queries the Supabase instance information corresponding to the resource.
     *
     * @param request - QueryInspirationAccountDetailsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QueryInspirationAccountDetailsResponse
     */
    queryInspirationAccountDetailsWithOptions(request: $_model.QueryInspirationAccountDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryInspirationAccountDetailsResponse>;
    /**
     * Queries the acquisition details of inspiration points, including the list of quota accounts and their expiration status.
     *
     * @remarks
     * Queries the Supabase instance information corresponding to the resource.
     *
     * @param request - QueryInspirationAccountDetailsRequest
     * @returns QueryInspirationAccountDetailsResponse
     */
    queryInspirationAccountDetails(request: $_model.QueryInspirationAccountDetailsRequest): Promise<$_model.QueryInspirationAccountDetailsResponse>;
    /**
     * Queries the overview of the inspiration value balance.
     *
     * @remarks
     * Queries the Supabase instance information corresponding to the resource.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QueryInspirationBalanceResponse
     */
    queryInspirationBalanceWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.QueryInspirationBalanceResponse>;
    /**
     * Queries the overview of the inspiration value balance.
     *
     * @remarks
     * Queries the Supabase instance information corresponding to the resource.
     * @returns QueryInspirationBalanceResponse
     */
    queryInspirationBalance(): Promise<$_model.QueryInspirationBalanceResponse>;
    /**
     * Queries the inspiration value for service providers.
     *
     * @param request - QueryInspirationBalanceForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QueryInspirationBalanceForPartnerResponse
     */
    queryInspirationBalanceForPartnerWithOptions(request: $_model.QueryInspirationBalanceForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryInspirationBalanceForPartnerResponse>;
    /**
     * Queries the inspiration value for service providers.
     *
     * @param request - QueryInspirationBalanceForPartnerRequest
     * @returns QueryInspirationBalanceForPartnerResponse
     */
    queryInspirationBalanceForPartner(request: $_model.QueryInspirationBalanceForPartnerRequest): Promise<$_model.QueryInspirationBalanceForPartnerResponse>;
    /**
     * Queries the consumption details of inspiration points.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - QueryInspirationConsumeRecordsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QueryInspirationConsumeRecordsResponse
     */
    queryInspirationConsumeRecordsWithOptions(request: $_model.QueryInspirationConsumeRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryInspirationConsumeRecordsResponse>;
    /**
     * Queries the consumption details of inspiration points.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - QueryInspirationConsumeRecordsRequest
     * @returns QueryInspirationConsumeRecordsResponse
     */
    queryInspirationConsumeRecords(request: $_model.QueryInspirationConsumeRecordsRequest): Promise<$_model.QueryInspirationConsumeRecordsResponse>;
    /**
     * Queries the asset folder tree.
     *
     * @param request - QueryMaterialDirectoryTreeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QueryMaterialDirectoryTreeResponse
     */
    queryMaterialDirectoryTreeWithOptions(request: $_model.QueryMaterialDirectoryTreeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMaterialDirectoryTreeResponse>;
    /**
     * Queries the asset folder tree.
     *
     * @param request - QueryMaterialDirectoryTreeRequest
     * @returns QueryMaterialDirectoryTreeResponse
     */
    queryMaterialDirectoryTree(request: $_model.QueryMaterialDirectoryTreeRequest): Promise<$_model.QueryMaterialDirectoryTreeResponse>;
    /**
     * Queries the details of an asset file.
     *
     * @param request - QueryMaterialFileDetailRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QueryMaterialFileDetailResponse
     */
    queryMaterialFileDetailWithOptions(request: $_model.QueryMaterialFileDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMaterialFileDetailResponse>;
    /**
     * Queries the details of an asset file.
     *
     * @param request - QueryMaterialFileDetailRequest
     * @returns QueryMaterialFileDetailResponse
     */
    queryMaterialFileDetail(request: $_model.QueryMaterialFileDetailRequest): Promise<$_model.QueryMaterialFileDetailResponse>;
    /**
     * Queries a list of asset files.
     *
     * @param tmpReq - QueryMaterialFileListRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QueryMaterialFileListResponse
     */
    queryMaterialFileListWithOptions(tmpReq: $_model.QueryMaterialFileListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMaterialFileListResponse>;
    /**
     * Queries a list of asset files.
     *
     * @param request - QueryMaterialFileListRequest
     * @returns QueryMaterialFileListResponse
     */
    queryMaterialFileList(request: $_model.QueryMaterialFileListRequest): Promise<$_model.QueryMaterialFileListResponse>;
    /**
     * Queries the file overview.
     *
     * @param tmpReq - QueryMaterialFileSummaryInfoRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QueryMaterialFileSummaryInfoResponse
     */
    queryMaterialFileSummaryInfoWithOptions(tmpReq: $_model.QueryMaterialFileSummaryInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMaterialFileSummaryInfoResponse>;
    /**
     * Queries the file overview.
     *
     * @param request - QueryMaterialFileSummaryInfoRequest
     * @returns QueryMaterialFileSummaryInfoResponse
     */
    queryMaterialFileSummaryInfo(request: $_model.QueryMaterialFileSummaryInfoRequest): Promise<$_model.QueryMaterialFileSummaryInfoResponse>;
    /**
     * Queries the details of a material generation task.
     *
     * @param request - QueryMaterialTaskDetailRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QueryMaterialTaskDetailResponse
     */
    queryMaterialTaskDetailWithOptions(request: $_model.QueryMaterialTaskDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMaterialTaskDetailResponse>;
    /**
     * Queries the details of a material generation task.
     *
     * @param request - QueryMaterialTaskDetailRequest
     * @returns QueryMaterialTaskDetailResponse
     */
    queryMaterialTaskDetail(request: $_model.QueryMaterialTaskDetailRequest): Promise<$_model.QueryMaterialTaskDetailResponse>;
    /**
     * Queries the list of material generation tasks.
     *
     * @remarks
     * Queries the list of material generation tasks.
     *
     * @param tmpReq - QueryMaterialTaskListRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QueryMaterialTaskListResponse
     */
    queryMaterialTaskListWithOptions(tmpReq: $_model.QueryMaterialTaskListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMaterialTaskListResponse>;
    /**
     * Queries the list of material generation tasks.
     *
     * @remarks
     * Queries the list of material generation tasks.
     *
     * @param request - QueryMaterialTaskListRequest
     * @returns QueryMaterialTaskListResponse
     */
    queryMaterialTaskList(request: $_model.QueryMaterialTaskListRequest): Promise<$_model.QueryMaterialTaskListResponse>;
    /**
     * Queries a single RBAC role.
     *
     * @remarks
     * Queries the information of an application instance.
     *
     * @param request - QueryRbacRoleRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QueryRbacRoleResponse
     */
    queryRbacRoleWithOptions(request: $_model.QueryRbacRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRbacRoleResponse>;
    /**
     * Queries a single RBAC role.
     *
     * @remarks
     * Queries the information of an application instance.
     *
     * @param request - QueryRbacRoleRequest
     * @returns QueryRbacRoleResponse
     */
    queryRbacRole(request: $_model.QueryRbacRoleRequest): Promise<$_model.QueryRbacRoleResponse>;
    /**
     * Queries the role permission list.
     *
     * @remarks
     * The API operation to create an AI session for Wanxiaozhi 2.0.
     *
     * @param request - QueryRbacRolePermissionsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QueryRbacRolePermissionsResponse
     */
    queryRbacRolePermissionsWithOptions(request: $_model.QueryRbacRolePermissionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRbacRolePermissionsResponse>;
    /**
     * Queries the role permission list.
     *
     * @remarks
     * The API operation to create an AI session for Wanxiaozhi 2.0.
     *
     * @param request - QueryRbacRolePermissionsRequest
     * @returns QueryRbacRolePermissionsResponse
     */
    queryRbacRolePermissions(request: $_model.QueryRbacRolePermissionsRequest): Promise<$_model.QueryRbacRolePermissionsResponse>;
    /**
     * Queries user role bindings.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - QueryRbacUserRolesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QueryRbacUserRolesResponse
     */
    queryRbacUserRolesWithOptions(request: $_model.QueryRbacUserRolesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRbacUserRolesResponse>;
    /**
     * Queries user role bindings.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - QueryRbacUserRolesRequest
     * @returns QueryRbacUserRolesResponse
     */
    queryRbacUserRoles(request: $_model.QueryRbacUserRolesRequest): Promise<$_model.QueryRbacUserRolesResponse>;
    /**
     * Queries the authentication configuration of the Supabase instance associated with the resource.
     *
     * @remarks
     * Queries the authentication configuration of the Supabase instance associated with the resource.
     *
     * @param request - QuerySupabaseAuthConfigsForAdminRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QuerySupabaseAuthConfigsForAdminResponse
     */
    querySupabaseAuthConfigsForAdminWithOptions(request: $_model.QuerySupabaseAuthConfigsForAdminRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySupabaseAuthConfigsForAdminResponse>;
    /**
     * Queries the authentication configuration of the Supabase instance associated with the resource.
     *
     * @remarks
     * Queries the authentication configuration of the Supabase instance associated with the resource.
     *
     * @param request - QuerySupabaseAuthConfigsForAdminRequest
     * @returns QuerySupabaseAuthConfigsForAdminResponse
     */
    querySupabaseAuthConfigsForAdmin(request: $_model.QuerySupabaseAuthConfigsForAdminRequest): Promise<$_model.QuerySupabaseAuthConfigsForAdminResponse>;
    /**
     * Queries the configuration information of the Supabase instance associated with a resource.
     *
     * @remarks
     * Queries the configuration information of the Supabase instance associated with a resource.
     *
     * @param request - QuerySupabaseConfigsForAdminRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QuerySupabaseConfigsForAdminResponse
     */
    querySupabaseConfigsForAdminWithOptions(request: $_model.QuerySupabaseConfigsForAdminRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySupabaseConfigsForAdminResponse>;
    /**
     * Queries the configuration information of the Supabase instance associated with a resource.
     *
     * @remarks
     * Queries the configuration information of the Supabase instance associated with a resource.
     *
     * @param request - QuerySupabaseConfigsForAdminRequest
     * @returns QuerySupabaseConfigsForAdminResponse
     */
    querySupabaseConfigsForAdmin(request: $_model.QuerySupabaseConfigsForAdminRequest): Promise<$_model.QuerySupabaseConfigsForAdminResponse>;
    /**
     * Queries the information of the Supabase instance associated with a resource.
     *
     * @remarks
     * Queries the information of the Supabase instance associated with a resource.
     *
     * @param request - QuerySupabaseInstanceInfoForAdminRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QuerySupabaseInstanceInfoForAdminResponse
     */
    querySupabaseInstanceInfoForAdminWithOptions(request: $_model.QuerySupabaseInstanceInfoForAdminRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySupabaseInstanceInfoForAdminResponse>;
    /**
     * Queries the information of the Supabase instance associated with a resource.
     *
     * @remarks
     * Queries the information of the Supabase instance associated with a resource.
     *
     * @param request - QuerySupabaseInstanceInfoForAdminRequest
     * @returns QuerySupabaseInstanceInfoForAdminResponse
     */
    querySupabaseInstanceInfoForAdmin(request: $_model.QuerySupabaseInstanceInfoForAdminRequest): Promise<$_model.QuerySupabaseInstanceInfoForAdminResponse>;
    /**
     * Reconnects to an AI conversation.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - ReconnectAppChatRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ReconnectAppChatResponse
     */
    reconnectAppChatWithSSE(request: $_model.ReconnectAppChatRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.ReconnectAppChatResponse, any, unknown>;
    /**
     * Reconnects to an AI conversation.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - ReconnectAppChatRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ReconnectAppChatResponse
     */
    reconnectAppChatWithOptions(request: $_model.ReconnectAppChatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReconnectAppChatResponse>;
    /**
     * Reconnects to an AI conversation.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - ReconnectAppChatRequest
     * @returns ReconnectAppChatResponse
     */
    reconnectAppChat(request: $_model.ReconnectAppChatRequest): Promise<$_model.ReconnectAppChatResponse>;
    /**
     * Refreshes the password-free login ticket for a website building instance.
     *
     * @param request - RefreshAppInstanceTicketRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RefreshAppInstanceTicketResponse
     */
    refreshAppInstanceTicketWithOptions(request: $_model.RefreshAppInstanceTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshAppInstanceTicketResponse>;
    /**
     * Refreshes the password-free login ticket for a website building instance.
     *
     * @param request - RefreshAppInstanceTicketRequest
     * @returns RefreshAppInstanceTicketResponse
     */
    refreshAppInstanceTicket(request: $_model.RefreshAppInstanceTicketRequest): Promise<$_model.RefreshAppInstanceTicketResponse>;
    /**
     * Processes a refund for a channel partner website building service.
     *
     * @param request - RefundAppInstanceForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RefundAppInstanceForPartnerResponse
     */
    refundAppInstanceForPartnerWithOptions(request: $_model.RefundAppInstanceForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefundAppInstanceForPartnerResponse>;
    /**
     * Processes a refund for a channel partner website building service.
     *
     * @param request - RefundAppInstanceForPartnerRequest
     * @returns RefundAppInstanceForPartnerResponse
     */
    refundAppInstanceForPartner(request: $_model.RefundAppInstanceForPartnerRequest): Promise<$_model.RefundAppInstanceForPartnerResponse>;
    /**
     * Removes the RBAC role hierarchy.
     *
     * @remarks
     * Queries the application instance information.
     *
     * @param request - RemoveRbacRoleHierarchyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RemoveRbacRoleHierarchyResponse
     */
    removeRbacRoleHierarchyWithOptions(request: $_model.RemoveRbacRoleHierarchyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveRbacRoleHierarchyResponse>;
    /**
     * Removes the RBAC role hierarchy.
     *
     * @remarks
     * Queries the application instance information.
     *
     * @param request - RemoveRbacRoleHierarchyRequest
     * @returns RemoveRbacRoleHierarchyResponse
     */
    removeRbacRoleHierarchy(request: $_model.RemoveRbacRoleHierarchyRequest): Promise<$_model.RemoveRbacRoleHierarchyResponse>;
    /**
     * Renews a website builder application instance.
     *
     * @param request - RenewAppInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RenewAppInstanceResponse
     */
    renewAppInstanceWithOptions(request: $_model.RenewAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewAppInstanceResponse>;
    /**
     * Renews a website builder application instance.
     *
     * @param request - RenewAppInstanceRequest
     * @returns RenewAppInstanceResponse
     */
    renewAppInstance(request: $_model.RenewAppInstanceRequest): Promise<$_model.RenewAppInstanceResponse>;
    /**
     * Renews or refreshes a sandbox environment.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - RenewAppSandboxRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RenewAppSandboxResponse
     */
    renewAppSandboxWithOptions(request: $_model.RenewAppSandboxRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewAppSandboxResponse>;
    /**
     * Renews or refreshes a sandbox environment.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - RenewAppSandboxRequest
     * @returns RenewAppSandboxResponse
     */
    renewAppSandbox(request: $_model.RenewAppSandboxRequest): Promise<$_model.RenewAppSandboxResponse>;
    /**
     * Reports the publishing result.
     *
     * @remarks
     * Reports the publishing result.
     *
     * @param request - ReportChannelPublishResultRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ReportChannelPublishResultResponse
     */
    reportChannelPublishResultWithOptions(request: $_model.ReportChannelPublishResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReportChannelPublishResultResponse>;
    /**
     * Reports the publishing result.
     *
     * @remarks
     * Reports the publishing result.
     *
     * @param request - ReportChannelPublishResultRequest
     * @returns ReportChannelPublishResultResponse
     */
    reportChannelPublishResult(request: $_model.ReportChannelPublishResultRequest): Promise<$_model.ReportChannelPublishResultResponse>;
    /**
     * Retries a publish operation.
     *
     * @remarks
     * Retries a publish operation.
     *
     * @param request - RetryChannelPublishRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RetryChannelPublishResponse
     */
    retryChannelPublishWithOptions(request: $_model.RetryChannelPublishRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RetryChannelPublishResponse>;
    /**
     * Retries a publish operation.
     *
     * @remarks
     * Retries a publish operation.
     *
     * @param request - RetryChannelPublishRequest
     * @returns RetryChannelPublishResponse
     */
    retryChannelPublish(request: $_model.RetryChannelPublishRequest): Promise<$_model.RetryChannelPublishResponse>;
    /**
     * Revokes a user role.
     *
     * @remarks
     * Wanxiaozhi 2.0 AI conversation.
     *
     * @param request - RevokeRbacUserRoleRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RevokeRbacUserRoleResponse
     */
    revokeRbacUserRoleWithOptions(request: $_model.RevokeRbacUserRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeRbacUserRoleResponse>;
    /**
     * Revokes a user role.
     *
     * @remarks
     * Wanxiaozhi 2.0 AI conversation.
     *
     * @param request - RevokeRbacUserRoleRequest
     * @returns RevokeRbacUserRoleResponse
     */
    revokeRbacUserRole(request: $_model.RevokeRbacUserRoleRequest): Promise<$_model.RevokeRbacUserRoleResponse>;
    /**
     * Rewrites a channel title using AI.
     *
     * @remarks
     * Rewrites a channel title.
     *
     * @param request - RewriteChannelTitleRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RewriteChannelTitleResponse
     */
    rewriteChannelTitleWithOptions(request: $_model.RewriteChannelTitleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RewriteChannelTitleResponse>;
    /**
     * Rewrites a channel title using AI.
     *
     * @remarks
     * Rewrites a channel title.
     *
     * @param request - RewriteChannelTitleRequest
     * @returns RewriteChannelTitleResponse
     */
    rewriteChannelTitle(request: $_model.RewriteChannelTitleRequest): Promise<$_model.RewriteChannelTitleResponse>;
    /**
     * Rolls back a code snapshot.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - RollbackAppCodeSnapshotRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RollbackAppCodeSnapshotResponse
     */
    rollbackAppCodeSnapshotWithOptions(request: $_model.RollbackAppCodeSnapshotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RollbackAppCodeSnapshotResponse>;
    /**
     * Rolls back a code snapshot.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - RollbackAppCodeSnapshotRequest
     * @returns RollbackAppCodeSnapshotResponse
     */
    rollbackAppCodeSnapshot(request: $_model.RollbackAppCodeSnapshotRequest): Promise<$_model.RollbackAppCodeSnapshotResponse>;
    /**
     * Rolls back the release of an application instance.
     *
     * @remarks
     * Queries the details of an application instance.
     *
     * @param request - RollbackAppInstancePublishRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RollbackAppInstancePublishResponse
     */
    rollbackAppInstancePublishWithOptions(request: $_model.RollbackAppInstancePublishRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RollbackAppInstancePublishResponse>;
    /**
     * Rolls back the release of an application instance.
     *
     * @remarks
     * Queries the details of an application instance.
     *
     * @param request - RollbackAppInstancePublishRequest
     * @returns RollbackAppInstancePublishResponse
     */
    rollbackAppInstancePublish(request: $_model.RollbackAppInstancePublishRequest): Promise<$_model.RollbackAppInstancePublishResponse>;
    /**
     * Rolls back the version of an application plugin.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - RollbackAppPluginVersionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RollbackAppPluginVersionResponse
     */
    rollbackAppPluginVersionWithOptions(request: $_model.RollbackAppPluginVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RollbackAppPluginVersionResponse>;
    /**
     * Rolls back the version of an application plugin.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - RollbackAppPluginVersionRequest
     * @returns RollbackAppPluginVersionResponse
     */
    rollbackAppPluginVersion(request: $_model.RollbackAppPluginVersionRequest): Promise<$_model.RollbackAppPluginVersionResponse>;
    /**
     * Save Requirement
     *
     * @remarks
     * Get code generation plugin configuration information
     *
     * @param request - SaveAppRequirementRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SaveAppRequirementResponse
     */
    saveAppRequirementWithOptions(request: $_model.SaveAppRequirementRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveAppRequirementResponse>;
    /**
     * Save Requirement
     *
     * @remarks
     * Get code generation plugin configuration information
     *
     * @param request - SaveAppRequirementRequest
     * @returns SaveAppRequirementResponse
     */
    saveAppRequirement(request: $_model.SaveAppRequirementRequest): Promise<$_model.SaveAppRequirementResponse>;
    /**
     * Saves Supabase secrets.
     *
     * @remarks
     * The Supabase instance information corresponding to the operated resource.
     *
     * @param request - SaveAppSupabaseSecretsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SaveAppSupabaseSecretsResponse
     */
    saveAppSupabaseSecretsWithOptions(request: $_model.SaveAppSupabaseSecretsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveAppSupabaseSecretsResponse>;
    /**
     * Saves Supabase secrets.
     *
     * @remarks
     * The Supabase instance information corresponding to the operated resource.
     *
     * @param request - SaveAppSupabaseSecretsRequest
     * @returns SaveAppSupabaseSecretsResponse
     */
    saveAppSupabaseSecrets(request: $_model.SaveAppSupabaseSecretsRequest): Promise<$_model.SaveAppSupabaseSecretsResponse>;
    /**
     * Saves a channel draft.
     *
     * @remarks
     * Saves a channel draft.
     *
     * @param tmpReq - SaveChannelDraftRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SaveChannelDraftResponse
     */
    saveChannelDraftWithOptions(tmpReq: $_model.SaveChannelDraftRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveChannelDraftResponse>;
    /**
     * Saves a channel draft.
     *
     * @remarks
     * Saves a channel draft.
     *
     * @param request - SaveChannelDraftRequest
     * @returns SaveChannelDraftResponse
     */
    saveChannelDraft(request: $_model.SaveChannelDraftRequest): Promise<$_model.SaveChannelDraftResponse>;
    /**
     * Searches for images.
     *
     * @param tmpReq - SearchImageRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SearchImageResponse
     */
    searchImageWithOptions(tmpReq: $_model.SearchImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchImageResponse>;
    /**
     * Searches for images.
     *
     * @param request - SearchImageRequest
     * @returns SearchImageResponse
     */
    searchImage(request: $_model.SearchImageRequest): Promise<$_model.SearchImageResponse>;
    /**
     * Sets the SSL certificate for a website.
     *
     * @param request - SetAppDomainCertificateRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SetAppDomainCertificateResponse
     */
    setAppDomainCertificateWithOptions(request: $_model.SetAppDomainCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetAppDomainCertificateResponse>;
    /**
     * Sets the SSL certificate for a website.
     *
     * @param request - SetAppDomainCertificateRequest
     * @returns SetAppDomainCertificateResponse
     */
    setAppDomainCertificate(request: $_model.SetAppDomainCertificateRequest): Promise<$_model.SetAppDomainCertificateResponse>;
    /**
     * Sets the RBAC role hierarchy.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - SetRbacRoleHierarchyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SetRbacRoleHierarchyResponse
     */
    setRbacRoleHierarchyWithOptions(request: $_model.SetRbacRoleHierarchyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetRbacRoleHierarchyResponse>;
    /**
     * Sets the RBAC role hierarchy.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - SetRbacRoleHierarchyRequest
     * @returns SetRbacRoleHierarchyResponse
     */
    setRbacRoleHierarchy(request: $_model.SetRbacRoleHierarchyRequest): Promise<$_model.SetRbacRoleHierarchyResponse>;
    /**
     * Submits an SEO index.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - SubmitAppSeoIndexRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SubmitAppSeoIndexResponse
     */
    submitAppSeoIndexWithOptions(request: $_model.SubmitAppSeoIndexRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitAppSeoIndexResponse>;
    /**
     * Submits an SEO index.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - SubmitAppSeoIndexRequest
     * @returns SubmitAppSeoIndexResponse
     */
    submitAppSeoIndex(request: $_model.SubmitAppSeoIndexRequest): Promise<$_model.SubmitAppSeoIndexResponse>;
    /**
     * Submits a material generation task.
     *
     * @remarks
     * Submits a material generation task.
     *
     * @param request - SubmitMaterialTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SubmitMaterialTaskResponse
     */
    submitMaterialTaskWithOptions(request: $_model.SubmitMaterialTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitMaterialTaskResponse>;
    /**
     * Submits a material generation task.
     *
     * @remarks
     * Submits a material generation task.
     *
     * @param request - SubmitMaterialTaskRequest
     * @returns SubmitMaterialTaskResponse
     */
    submitMaterialTask(request: $_model.SubmitMaterialTaskRequest): Promise<$_model.SubmitMaterialTaskResponse>;
    /**
     * Switches to a specified conversation.
     *
     * @remarks
     * Creates an AI conversation through the Wanxiaozhi 2.0 interface.
     *
     * @param request - SwitchAppConversationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SwitchAppConversationResponse
     */
    switchAppConversationWithOptions(request: $_model.SwitchAppConversationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchAppConversationResponse>;
    /**
     * Switches to a specified conversation.
     *
     * @remarks
     * Creates an AI conversation through the Wanxiaozhi 2.0 interface.
     *
     * @param request - SwitchAppConversationRequest
     * @returns SwitchAppConversationResponse
     */
    switchAppConversation(request: $_model.SwitchAppConversationRequest): Promise<$_model.SwitchAppConversationResponse>;
    /**
     * Synchronizes an application instance from a partner.
     *
     * @param tmpReq - SyncAppInstanceForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SyncAppInstanceForPartnerResponse
     */
    syncAppInstanceForPartnerWithOptions(tmpReq: $_model.SyncAppInstanceForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SyncAppInstanceForPartnerResponse>;
    /**
     * Synchronizes an application instance from a partner.
     *
     * @param request - SyncAppInstanceForPartnerRequest
     * @returns SyncAppInstanceForPartnerResponse
     */
    syncAppInstanceForPartner(request: $_model.SyncAppInstanceForPartnerRequest): Promise<$_model.SyncAppInstanceForPartnerResponse>;
    /**
     * Translates a channel draft.
     *
     * @remarks
     * Translates a channel draft.
     *
     * @param request - TranslateChannelDraftRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns TranslateChannelDraftResponse
     */
    translateChannelDraftWithOptions(request: $_model.TranslateChannelDraftRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TranslateChannelDraftResponse>;
    /**
     * Translates a channel draft.
     *
     * @remarks
     * Translates a channel draft.
     *
     * @param request - TranslateChannelDraftRequest
     * @returns TranslateChannelDraftResponse
     */
    translateChannelDraft(request: $_model.TranslateChannelDraftRequest): Promise<$_model.TranslateChannelDraftResponse>;
    /**
     * Unbinds a domain name from a website and deletes the associated DNS records.
     *
     * @param request - UnbindAppDomainRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UnbindAppDomainResponse
     */
    unbindAppDomainWithOptions(request: $_model.UnbindAppDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindAppDomainResponse>;
    /**
     * Unbinds a domain name from a website and deletes the associated DNS records.
     *
     * @param request - UnbindAppDomainRequest
     * @returns UnbindAppDomainResponse
     */
    unbindAppDomain(request: $_model.UnbindAppDomainRequest): Promise<$_model.UnbindAppDomainResponse>;
    /**
     * Uninstalls an application plug-in from the current user account.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - UninstallAppPluginRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UninstallAppPluginResponse
     */
    uninstallAppPluginWithOptions(request: $_model.UninstallAppPluginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UninstallAppPluginResponse>;
    /**
     * Uninstalls an application plug-in from the current user account.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - UninstallAppPluginRequest
     * @returns UninstallAppPluginResponse
     */
    uninstallAppPlugin(request: $_model.UninstallAppPluginRequest): Promise<$_model.UninstallAppPluginResponse>;
    /**
     * Updates the message content.
     *
     * @remarks
     * Queries the AI conversation history for Wanxiaozhi 2.0.
     *
     * @param request - UpdateAppChatMessageRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateAppChatMessageResponse
     */
    updateAppChatMessageWithOptions(request: $_model.UpdateAppChatMessageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAppChatMessageResponse>;
    /**
     * Updates the message content.
     *
     * @remarks
     * Queries the AI conversation history for Wanxiaozhi 2.0.
     *
     * @param request - UpdateAppChatMessageRequest
     * @returns UpdateAppChatMessageResponse
     */
    updateAppChatMessage(request: $_model.UpdateAppChatMessageRequest): Promise<$_model.UpdateAppChatMessageResponse>;
    /**
     * Edits JSX code.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - UpdateAppCodeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateAppCodeResponse
     */
    updateAppCodeWithOptions(request: $_model.UpdateAppCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAppCodeResponse>;
    /**
     * Edits JSX code.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - UpdateAppCodeRequest
     * @returns UpdateAppCodeResponse
     */
    updateAppCode(request: $_model.UpdateAppCodeRequest): Promise<$_model.UpdateAppCodeResponse>;
    /**
     * Updates a file.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - UpdateAppFileRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateAppFileResponse
     */
    updateAppFileWithOptions(request: $_model.UpdateAppFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAppFileResponse>;
    /**
     * Updates a file.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - UpdateAppFileRequest
     * @returns UpdateAppFileResponse
     */
    updateAppFile(request: $_model.UpdateAppFileRequest): Promise<$_model.UpdateAppFileResponse>;
    /**
     * Changes the specifications of a website building instance.
     *
     * @remarks
     * Queries the information of an application instance.
     *
     * @param tmpReq - UpdateAppInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateAppInstanceResponse
     */
    updateAppInstanceWithOptions(tmpReq: $_model.UpdateAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAppInstanceResponse>;
    /**
     * Changes the specifications of a website building instance.
     *
     * @remarks
     * Queries the information of an application instance.
     *
     * @param request - UpdateAppInstanceRequest
     * @returns UpdateAppInstanceResponse
     */
    updateAppInstance(request: $_model.UpdateAppInstanceRequest): Promise<$_model.UpdateAppInstanceResponse>;
    /**
     * Updates an application plugin.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - UpdateAppPluginRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateAppPluginResponse
     */
    updateAppPluginWithOptions(request: $_model.UpdateAppPluginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAppPluginResponse>;
    /**
     * Updates an application plugin.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - UpdateAppPluginRequest
     * @returns UpdateAppPluginResponse
     */
    updateAppPlugin(request: $_model.UpdateAppPluginRequest): Promise<$_model.UpdateAppPluginResponse>;
    /**
     * Updates the SEO index status.
     *
     * @remarks
     * Wanxiaozhi 2.0 AI conversation.
     *
     * @param request - UpdateAppSeoStatusRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateAppSeoStatusResponse
     */
    updateAppSeoStatusWithOptions(request: $_model.UpdateAppSeoStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAppSeoStatusResponse>;
    /**
     * Updates the SEO index status.
     *
     * @remarks
     * Wanxiaozhi 2.0 AI conversation.
     *
     * @param request - UpdateAppSeoStatusRequest
     * @returns UpdateAppSeoStatusResponse
     */
    updateAppSeoStatus(request: $_model.UpdateAppSeoStatusRequest): Promise<$_model.UpdateAppSeoStatusResponse>;
    /**
     * Updates the Supabase authentication configuration.
     *
     * @remarks
     * Queries the Supabase instance authentication configuration information corresponding to a resource.
     *
     * @param request - UpdateAppSupabaseAuthConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateAppSupabaseAuthConfigResponse
     */
    updateAppSupabaseAuthConfigWithOptions(request: $_model.UpdateAppSupabaseAuthConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAppSupabaseAuthConfigResponse>;
    /**
     * Updates the Supabase authentication configuration.
     *
     * @remarks
     * Queries the Supabase instance authentication configuration information corresponding to a resource.
     *
     * @param request - UpdateAppSupabaseAuthConfigRequest
     * @returns UpdateAppSupabaseAuthConfigResponse
     */
    updateAppSupabaseAuthConfig(request: $_model.UpdateAppSupabaseAuthConfigRequest): Promise<$_model.UpdateAppSupabaseAuthConfigResponse>;
    /**
     * Updates a Supabase key.
     *
     * @remarks
     * The Supabase instance information corresponding to the operated resource.
     *
     * @param request - UpdateAppSupabaseSecretRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateAppSupabaseSecretResponse
     */
    updateAppSupabaseSecretWithOptions(request: $_model.UpdateAppSupabaseSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAppSupabaseSecretResponse>;
    /**
     * Updates a Supabase key.
     *
     * @remarks
     * The Supabase instance information corresponding to the operated resource.
     *
     * @param request - UpdateAppSupabaseSecretRequest
     * @returns UpdateAppSupabaseSecretResponse
     */
    updateAppSupabaseSecret(request: $_model.UpdateAppSupabaseSecretRequest): Promise<$_model.UpdateAppSupabaseSecretResponse>;
    /**
     * Updates the binding information for a mini program.
     *
     * @param request - UpdateMiniAppBindingRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateMiniAppBindingResponse
     */
    updateMiniAppBindingWithOptions(request: $_model.UpdateMiniAppBindingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMiniAppBindingResponse>;
    /**
     * Updates the binding information for a mini program.
     *
     * @param request - UpdateMiniAppBindingRequest
     * @returns UpdateMiniAppBindingResponse
     */
    updateMiniAppBinding(request: $_model.UpdateMiniAppBindingRequest): Promise<$_model.UpdateMiniAppBindingResponse>;
    /**
     * Updates an organizational unit.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - UpdateRbacOrgUnitRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateRbacOrgUnitResponse
     */
    updateRbacOrgUnitWithOptions(request: $_model.UpdateRbacOrgUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRbacOrgUnitResponse>;
    /**
     * Updates an organizational unit.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - UpdateRbacOrgUnitRequest
     * @returns UpdateRbacOrgUnitResponse
     */
    updateRbacOrgUnit(request: $_model.UpdateRbacOrgUnitRequest): Promise<$_model.UpdateRbacOrgUnitResponse>;
    /**
     * Updates the RBAC role.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - UpdateRbacRoleRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateRbacRoleResponse
     */
    updateRbacRoleWithOptions(request: $_model.UpdateRbacRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRbacRoleResponse>;
    /**
     * Updates the RBAC role.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - UpdateRbacRoleRequest
     * @returns UpdateRbacRoleResponse
     */
    updateRbacRole(request: $_model.UpdateRbacRoleRequest): Promise<$_model.UpdateRbacRoleResponse>;
    /**
     * Uploads an application plugin version.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - UploadAppPluginVersionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UploadAppPluginVersionResponse
     */
    uploadAppPluginVersionWithOptions(request: $_model.UploadAppPluginVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadAppPluginVersionResponse>;
    /**
     * Uploads an application plugin version.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - UploadAppPluginVersionRequest
     * @returns UploadAppPluginVersionResponse
     */
    uploadAppPluginVersion(request: $_model.UploadAppPluginVersionRequest): Promise<$_model.UploadAppPluginVersionResponse>;
    /**
     * Uploads a file to the root directory of a site.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - UploadAppSiteValidationFileRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UploadAppSiteValidationFileResponse
     */
    uploadAppSiteValidationFileWithOptions(request: $_model.UploadAppSiteValidationFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadAppSiteValidationFileResponse>;
    /**
     * Uploads a file to the root directory of a site.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - UploadAppSiteValidationFileRequest
     * @returns UploadAppSiteValidationFileResponse
     */
    uploadAppSiteValidationFile(request: $_model.UploadAppSiteValidationFileRequest): Promise<$_model.UploadAppSiteValidationFileResponse>;
    /**
     * Uploads an asset file.
     *
     * @remarks
     * The Supabase instance information corresponding to the resource.
     *
     * @param request - UploadMaterialFileRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UploadMaterialFileResponse
     */
    uploadMaterialFileWithOptions(request: $_model.UploadMaterialFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadMaterialFileResponse>;
    /**
     * Uploads an asset file.
     *
     * @remarks
     * The Supabase instance information corresponding to the resource.
     *
     * @param request - UploadMaterialFileRequest
     * @returns UploadMaterialFileResponse
     */
    uploadMaterialFile(request: $_model.UploadMaterialFileRequest): Promise<$_model.UploadMaterialFileResponse>;
    /**
     * Uploads a material file as an administrator (AI-generated).
     *
     * @remarks
     * The Supabase instance information corresponding to the operation resource.
     *
     * @param request - UploadMaterialFileForAdminRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UploadMaterialFileForAdminResponse
     */
    uploadMaterialFileForAdminWithOptions(request: $_model.UploadMaterialFileForAdminRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadMaterialFileForAdminResponse>;
    /**
     * Uploads a material file as an administrator (AI-generated).
     *
     * @remarks
     * The Supabase instance information corresponding to the operation resource.
     *
     * @param request - UploadMaterialFileForAdminRequest
     * @returns UploadMaterialFileForAdminResponse
     */
    uploadMaterialFileForAdmin(request: $_model.UploadMaterialFileForAdminRequest): Promise<$_model.UploadMaterialFileForAdminResponse>;
}
