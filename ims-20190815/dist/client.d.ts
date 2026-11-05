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
     * Calls AddClientIdToOIDCProvider to add a specified client ID to an OIDC IdP.
     *
     * @remarks
     * ### Usage notes
     * This topic provides an example on how to add client ID `598469743454717****` to the OIDC IdP named `TestOIDCProvider`.
     *
     * @param request - AddClientIdToOIDCProviderRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AddClientIdToOIDCProviderResponse
     */
    addClientIdToOIDCProviderWithOptions(request: $_model.AddClientIdToOIDCProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddClientIdToOIDCProviderResponse>;
    /**
     * Calls AddClientIdToOIDCProvider to add a specified client ID to an OIDC IdP.
     *
     * @remarks
     * ### Usage notes
     * This topic provides an example on how to add client ID `598469743454717****` to the OIDC IdP named `TestOIDCProvider`.
     *
     * @param request - AddClientIdToOIDCProviderRequest
     * @returns AddClientIdToOIDCProviderResponse
     */
    addClientIdToOIDCProvider(request: $_model.AddClientIdToOIDCProviderRequest): Promise<$_model.AddClientIdToOIDCProviderResponse>;
    /**
     * Adds a fingerprint to an OpenID Connect (OIDC) identity provider (IdP).
     *
     * @remarks
     * ###
     * This topic provides an example on how to add the fingerprint `902ef2deeb3c5b13ea4c3d5193629309e231****` to the OIDC IdP named `TestOIDCProvider`.
     *
     * @param request - AddFingerprintToOIDCProviderRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AddFingerprintToOIDCProviderResponse
     */
    addFingerprintToOIDCProviderWithOptions(request: $_model.AddFingerprintToOIDCProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddFingerprintToOIDCProviderResponse>;
    /**
     * Adds a fingerprint to an OpenID Connect (OIDC) identity provider (IdP).
     *
     * @remarks
     * ###
     * This topic provides an example on how to add the fingerprint `902ef2deeb3c5b13ea4c3d5193629309e231****` to the OIDC IdP named `TestOIDCProvider`.
     *
     * @param request - AddFingerprintToOIDCProviderRequest
     * @returns AddFingerprintToOIDCProviderResponse
     */
    addFingerprintToOIDCProvider(request: $_model.AddFingerprintToOIDCProviderRequest): Promise<$_model.AddFingerprintToOIDCProviderResponse>;
    /**
     * Adds a Resource Access Management (RAM) user to a RAM user group.
     *
     * @param request - AddUserToGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AddUserToGroupResponse
     */
    addUserToGroupWithOptions(request: $_model.AddUserToGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddUserToGroupResponse>;
    /**
     * Adds a Resource Access Management (RAM) user to a RAM user group.
     *
     * @param request - AddUserToGroupRequest
     * @returns AddUserToGroupResponse
     */
    addUserToGroup(request: $_model.AddUserToGroupRequest): Promise<$_model.AddUserToGroupResponse>;
    /**
     * Binds a multi-factor authentication (MFA) device to a Resource Access Management (RAM) user.
     *
     * @param request - BindMFADeviceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns BindMFADeviceResponse
     */
    bindMFADeviceWithOptions(request: $_model.BindMFADeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindMFADeviceResponse>;
    /**
     * Binds a multi-factor authentication (MFA) device to a Resource Access Management (RAM) user.
     *
     * @param request - BindMFADeviceRequest
     * @returns BindMFADeviceResponse
     */
    bindMFADevice(request: $_model.BindMFADeviceRequest): Promise<$_model.BindMFADeviceResponse>;
    /**
     * Changes the password that is used to log on to the console for a Resource Access Management (RAM) user.
     *
     * @remarks
     * > This operation is available only for RAM users. Before you call this operation, make sure that `AllowUserToChangePassword` in [SetSecurityPreference](https://help.aliyun.com/document_detail/43765.html) is set to `True`. The value True indicates that RAM users can manage their passwords.
     *
     * @param request - ChangePasswordRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ChangePasswordResponse
     */
    changePasswordWithOptions(request: $_model.ChangePasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangePasswordResponse>;
    /**
     * Changes the password that is used to log on to the console for a Resource Access Management (RAM) user.
     *
     * @remarks
     * > This operation is available only for RAM users. Before you call this operation, make sure that `AllowUserToChangePassword` in [SetSecurityPreference](https://help.aliyun.com/document_detail/43765.html) is set to `True`. The value True indicates that RAM users can manage their passwords.
     *
     * @param request - ChangePasswordRequest
     * @returns ChangePasswordResponse
     */
    changePassword(request: $_model.ChangePasswordRequest): Promise<$_model.ChangePasswordResponse>;
    /**
     * Creates an access key for an Alibaba Cloud account or a Resource Access Management (RAM) user.
     *
     * @param request - CreateAccessKeyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAccessKeyResponse
     */
    createAccessKeyWithOptions(request: $_model.CreateAccessKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAccessKeyResponse>;
    /**
     * Creates an access key for an Alibaba Cloud account or a Resource Access Management (RAM) user.
     *
     * @param request - CreateAccessKeyRequest
     * @returns CreateAccessKeyResponse
     */
    createAccessKey(request: $_model.CreateAccessKeyRequest): Promise<$_model.CreateAccessKeyResponse>;
    /**
     * Creates an application secret for a specified application.
     *
     * @param request - CreateAppSecretRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAppSecretResponse
     */
    createAppSecretWithOptions(request: $_model.CreateAppSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppSecretResponse>;
    /**
     * Creates an application secret for a specified application.
     *
     * @param request - CreateAppSecretRequest
     * @returns CreateAppSecretResponse
     */
    createAppSecret(request: $_model.CreateAppSecretRequest): Promise<$_model.CreateAppSecretResponse>;
    /**
     * Creates an application.
     *
     * @param request - CreateApplicationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateApplicationResponse
     */
    createApplicationWithOptions(request: $_model.CreateApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApplicationResponse>;
    /**
     * Creates an application.
     *
     * @param request - CreateApplicationRequest
     * @returns CreateApplicationResponse
     */
    createApplication(request: $_model.CreateApplicationRequest): Promise<$_model.CreateApplicationResponse>;
    /**
     * Creates an application assignment record to grant a specified principal the permissions to use a specified application.
     *
     * @param request - CreateApplicationAssignmentRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateApplicationAssignmentResponse
     */
    createApplicationAssignmentWithOptions(request: $_model.CreateApplicationAssignmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApplicationAssignmentResponse>;
    /**
     * Creates an application assignment record to grant a specified principal the permissions to use a specified application.
     *
     * @param request - CreateApplicationAssignmentRequest
     * @returns CreateApplicationAssignmentResponse
     */
    createApplicationAssignment(request: $_model.CreateApplicationAssignmentRequest): Promise<$_model.CreateApplicationAssignmentResponse>;
    /**
     * Creates a user group.
     *
     * @param request - CreateGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateGroupResponse
     */
    createGroupWithOptions(request: $_model.CreateGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGroupResponse>;
    /**
     * Creates a user group.
     *
     * @param request - CreateGroupRequest
     * @returns CreateGroupResponse
     */
    createGroup(request: $_model.CreateGroupRequest): Promise<$_model.CreateGroupResponse>;
    /**
     * Creates a logon profile for a Resource Access Management (RAM) user.
     *
     * @param request - CreateLoginProfileRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateLoginProfileResponse
     */
    createLoginProfileWithOptions(request: $_model.CreateLoginProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLoginProfileResponse>;
    /**
     * Creates a logon profile for a Resource Access Management (RAM) user.
     *
     * @param request - CreateLoginProfileRequest
     * @returns CreateLoginProfileResponse
     */
    createLoginProfile(request: $_model.CreateLoginProfileRequest): Promise<$_model.CreateLoginProfileResponse>;
    /**
     * Creates an OpenID Connect (OIDC) identity provider (IdP) to configure a trust relationship between Alibaba Cloud and an external IdP. This topic provides an example on how to create an IdP named TestOIDCProvider to configure a trust relationship between the external IdP Okta and Alibaba Cloud.
     *
     * @remarks
     * ### [](#)Prerequisites
     * Before you call this operation, make sure that the information such as the URL of the issuer, the fingerprints of HTTPS certificate authority (CA) certificates, and the client IDs are obtained from an external IdP, such as Google Workspace or Okta.
     * ### [](#)Limits
     * - You can create a maximum of 100 OIDC IdPs in an Alibaba Cloud account.
     * - You can add a maximum of 50 client IDs to an OIDC IdP.
     * - You can add a maximum of five fingerprints to an OIDC IdP.
     * ### [](#)Operation description
     * This topic provides an example on how to create an IdP named `TestOIDCProvider` to configure a trust relationship between the external IdP and Alibaba Cloud.
     *
     * @param request - CreateOIDCProviderRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateOIDCProviderResponse
     */
    createOIDCProviderWithOptions(request: $_model.CreateOIDCProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOIDCProviderResponse>;
    /**
     * Creates an OpenID Connect (OIDC) identity provider (IdP) to configure a trust relationship between Alibaba Cloud and an external IdP. This topic provides an example on how to create an IdP named TestOIDCProvider to configure a trust relationship between the external IdP Okta and Alibaba Cloud.
     *
     * @remarks
     * ### [](#)Prerequisites
     * Before you call this operation, make sure that the information such as the URL of the issuer, the fingerprints of HTTPS certificate authority (CA) certificates, and the client IDs are obtained from an external IdP, such as Google Workspace or Okta.
     * ### [](#)Limits
     * - You can create a maximum of 100 OIDC IdPs in an Alibaba Cloud account.
     * - You can add a maximum of 50 client IDs to an OIDC IdP.
     * - You can add a maximum of five fingerprints to an OIDC IdP.
     * ### [](#)Operation description
     * This topic provides an example on how to create an IdP named `TestOIDCProvider` to configure a trust relationship between the external IdP and Alibaba Cloud.
     *
     * @param request - CreateOIDCProviderRequest
     * @returns CreateOIDCProviderResponse
     */
    createOIDCProvider(request: $_model.CreateOIDCProviderRequest): Promise<$_model.CreateOIDCProviderResponse>;
    /**
     * Creates an identity provider (IdP) for role-based single sign-on (SSO).
     *
     * @param request - CreateSAMLProviderRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateSAMLProviderResponse
     */
    createSAMLProviderWithOptions(request: $_model.CreateSAMLProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSAMLProviderResponse>;
    /**
     * Creates an identity provider (IdP) for role-based single sign-on (SSO).
     *
     * @param request - CreateSAMLProviderRequest
     * @returns CreateSAMLProviderResponse
     */
    createSAMLProvider(request: $_model.CreateSAMLProviderRequest): Promise<$_model.CreateSAMLProviderResponse>;
    /**
     * Creates a service credential for a Resource Access Management (RAM) user in a specified Alibaba Cloud service.
     *
     * @param request - CreateServiceCredentialRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateServiceCredentialResponse
     */
    createServiceCredentialWithOptions(request: $_model.CreateServiceCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceCredentialResponse>;
    /**
     * Creates a service credential for a Resource Access Management (RAM) user in a specified Alibaba Cloud service.
     *
     * @param request - CreateServiceCredentialRequest
     * @returns CreateServiceCredentialResponse
     */
    createServiceCredential(request: $_model.CreateServiceCredentialRequest): Promise<$_model.CreateServiceCredentialResponse>;
    /**
     * Creates a Resource Access Management (RAM) user.
     *
     * @param request - CreateUserRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateUserResponse
     */
    createUserWithOptions(request: $_model.CreateUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserResponse>;
    /**
     * Creates a Resource Access Management (RAM) user.
     *
     * @param request - CreateUserRequest
     * @returns CreateUserResponse
     */
    createUser(request: $_model.CreateUserRequest): Promise<$_model.CreateUserResponse>;
    /**
     * Creates a virtual multi-factor authentication (MFA) device.
     *
     * @param request - CreateVirtualMFADeviceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateVirtualMFADeviceResponse
     */
    createVirtualMFADeviceWithOptions(request: $_model.CreateVirtualMFADeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVirtualMFADeviceResponse>;
    /**
     * Creates a virtual multi-factor authentication (MFA) device.
     *
     * @param request - CreateVirtualMFADeviceRequest
     * @returns CreateVirtualMFADeviceResponse
     */
    createVirtualMFADevice(request: $_model.CreateVirtualMFADeviceRequest): Promise<$_model.CreateVirtualMFADeviceResponse>;
    /**
     * Deletes an AccessKey pair for an Alibaba Cloud account or a Resource Access Management (RAM) user.
     *
     * @param request - DeleteAccessKeyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAccessKeyResponse
     */
    deleteAccessKeyWithOptions(request: $_model.DeleteAccessKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAccessKeyResponse>;
    /**
     * Deletes an AccessKey pair for an Alibaba Cloud account or a Resource Access Management (RAM) user.
     *
     * @param request - DeleteAccessKeyRequest
     * @returns DeleteAccessKeyResponse
     */
    deleteAccessKey(request: $_model.DeleteAccessKeyRequest): Promise<$_model.DeleteAccessKeyResponse>;
    /**
     * Deletes a specific AccessKey pair that belongs to a Resource Access Management (RAM) user from the recycle bin.
     *
     * @param request - DeleteAccessKeyInRecycleBinRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAccessKeyInRecycleBinResponse
     */
    deleteAccessKeyInRecycleBinWithOptions(request: $_model.DeleteAccessKeyInRecycleBinRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAccessKeyInRecycleBinResponse>;
    /**
     * Deletes a specific AccessKey pair that belongs to a Resource Access Management (RAM) user from the recycle bin.
     *
     * @param request - DeleteAccessKeyInRecycleBinRequest
     * @returns DeleteAccessKeyInRecycleBinResponse
     */
    deleteAccessKeyInRecycleBin(request: $_model.DeleteAccessKeyInRecycleBinRequest): Promise<$_model.DeleteAccessKeyInRecycleBinResponse>;
    /**
     * Deletes the application secret of an application.
     *
     * @param request - DeleteAppSecretRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAppSecretResponse
     */
    deleteAppSecretWithOptions(request: $_model.DeleteAppSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppSecretResponse>;
    /**
     * Deletes the application secret of an application.
     *
     * @param request - DeleteAppSecretRequest
     * @returns DeleteAppSecretResponse
     */
    deleteAppSecret(request: $_model.DeleteAppSecretRequest): Promise<$_model.DeleteAppSecretResponse>;
    /**
     * Deletes an application.
     *
     * @param request - DeleteApplicationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteApplicationResponse
     */
    deleteApplicationWithOptions(request: $_model.DeleteApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApplicationResponse>;
    /**
     * Deletes an application.
     *
     * @param request - DeleteApplicationRequest
     * @returns DeleteApplicationResponse
     */
    deleteApplication(request: $_model.DeleteApplicationRequest): Promise<$_model.DeleteApplicationResponse>;
    /**
     * Deletes an application assignment record and revokes the access of a specified principal to a specified application.
     *
     * @param request - DeleteApplicationAssignmentRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteApplicationAssignmentResponse
     */
    deleteApplicationAssignmentWithOptions(request: $_model.DeleteApplicationAssignmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApplicationAssignmentResponse>;
    /**
     * Deletes an application assignment record and revokes the access of a specified principal to a specified application.
     *
     * @param request - DeleteApplicationAssignmentRequest
     * @returns DeleteApplicationAssignmentResponse
     */
    deleteApplicationAssignment(request: $_model.DeleteApplicationAssignmentRequest): Promise<$_model.DeleteApplicationAssignmentResponse>;
    /**
     * Deletes a Resource Access Management (RAM) user group.
     *
     * @remarks
     * Before you delete a RAM user group, make sure that no policies are attached to the group and no RAM users are included in the group.
     *
     * @param request - DeleteGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteGroupResponse
     */
    deleteGroupWithOptions(request: $_model.DeleteGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGroupResponse>;
    /**
     * Deletes a Resource Access Management (RAM) user group.
     *
     * @remarks
     * Before you delete a RAM user group, make sure that no policies are attached to the group and no RAM users are included in the group.
     *
     * @param request - DeleteGroupRequest
     * @returns DeleteGroupResponse
     */
    deleteGroup(request: $_model.DeleteGroupRequest): Promise<$_model.DeleteGroupResponse>;
    /**
     * Disables logon to the console for a Resource Access Management (RAM) user.
     *
     * @param request - DeleteLoginProfileRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteLoginProfileResponse
     */
    deleteLoginProfileWithOptions(request: $_model.DeleteLoginProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLoginProfileResponse>;
    /**
     * Disables logon to the console for a Resource Access Management (RAM) user.
     *
     * @param request - DeleteLoginProfileRequest
     * @returns DeleteLoginProfileResponse
     */
    deleteLoginProfile(request: $_model.DeleteLoginProfileRequest): Promise<$_model.DeleteLoginProfileResponse>;
    /**
     * Deletes an OpenID Connect (OIDC) identity provider (IdP).
     *
     * @remarks
     * ###
     * This topic provides an example on how to remove the OIDC IdP named `TestOIDCProvider`.
     *
     * @param request - DeleteOIDCProviderRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteOIDCProviderResponse
     */
    deleteOIDCProviderWithOptions(request: $_model.DeleteOIDCProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOIDCProviderResponse>;
    /**
     * Deletes an OpenID Connect (OIDC) identity provider (IdP).
     *
     * @remarks
     * ###
     * This topic provides an example on how to remove the OIDC IdP named `TestOIDCProvider`.
     *
     * @param request - DeleteOIDCProviderRequest
     * @returns DeleteOIDCProviderResponse
     */
    deleteOIDCProvider(request: $_model.DeleteOIDCProviderRequest): Promise<$_model.DeleteOIDCProviderResponse>;
    /**
     * Deletes the passkey of a user.
     *
     * @param request - DeletePasskeyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeletePasskeyResponse
     */
    deletePasskeyWithOptions(request: $_model.DeletePasskeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePasskeyResponse>;
    /**
     * Deletes the passkey of a user.
     *
     * @param request - DeletePasskeyRequest
     * @returns DeletePasskeyResponse
     */
    deletePasskey(request: $_model.DeletePasskeyRequest): Promise<$_model.DeletePasskeyResponse>;
    /**
     * Deletes an identity provider (IdP) for role-based single sign-on (SSO).
     *
     * @param request - DeleteSAMLProviderRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteSAMLProviderResponse
     */
    deleteSAMLProviderWithOptions(request: $_model.DeleteSAMLProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSAMLProviderResponse>;
    /**
     * Deletes an identity provider (IdP) for role-based single sign-on (SSO).
     *
     * @param request - DeleteSAMLProviderRequest
     * @returns DeleteSAMLProviderResponse
     */
    deleteSAMLProvider(request: $_model.DeleteSAMLProviderRequest): Promise<$_model.DeleteSAMLProviderResponse>;
    /**
     * Deletes the service credential of a Resource Access Management (RAM) user.
     *
     * @remarks
     * ### 使用说明
     * 删除服务凭证前，必须先调用 `UpdateServiceCredential` 将目标服务凭证的 `Status` 设置为 `Inactive`，再调用本接口。`Active` 状态的服务凭证不能直接删除。
     *
     * @param request - DeleteServiceCredentialRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteServiceCredentialResponse
     */
    deleteServiceCredentialWithOptions(request: $_model.DeleteServiceCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteServiceCredentialResponse>;
    /**
     * Deletes the service credential of a Resource Access Management (RAM) user.
     *
     * @remarks
     * ### 使用说明
     * 删除服务凭证前，必须先调用 `UpdateServiceCredential` 将目标服务凭证的 `Status` 设置为 `Inactive`，再调用本接口。`Active` 状态的服务凭证不能直接删除。
     *
     * @param request - DeleteServiceCredentialRequest
     * @returns DeleteServiceCredentialResponse
     */
    deleteServiceCredential(request: $_model.DeleteServiceCredentialRequest): Promise<$_model.DeleteServiceCredentialResponse>;
    /**
     * Deletes a Resource Access Management (RAM) user.
     *
     * @param request - DeleteUserRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteUserResponse
     */
    deleteUserWithOptions(request: $_model.DeleteUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserResponse>;
    /**
     * Deletes a Resource Access Management (RAM) user.
     *
     * @param request - DeleteUserRequest
     * @returns DeleteUserResponse
     */
    deleteUser(request: $_model.DeleteUserRequest): Promise<$_model.DeleteUserResponse>;
    /**
     * Deletes a specific Resource Access Management (RAM) user from the recycle bin.
     *
     * @param request - DeleteUserInRecycleBinRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteUserInRecycleBinResponse
     */
    deleteUserInRecycleBinWithOptions(request: $_model.DeleteUserInRecycleBinRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserInRecycleBinResponse>;
    /**
     * Deletes a specific Resource Access Management (RAM) user from the recycle bin.
     *
     * @param request - DeleteUserInRecycleBinRequest
     * @returns DeleteUserInRecycleBinResponse
     */
    deleteUserInRecycleBin(request: $_model.DeleteUserInRecycleBinRequest): Promise<$_model.DeleteUserInRecycleBinResponse>;
    /**
     * Deletes a multi-factor authentication (MFA) device.
     *
     * @param request - DeleteVirtualMFADeviceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteVirtualMFADeviceResponse
     */
    deleteVirtualMFADeviceWithOptions(request: $_model.DeleteVirtualMFADeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVirtualMFADeviceResponse>;
    /**
     * Deletes a multi-factor authentication (MFA) device.
     *
     * @param request - DeleteVirtualMFADeviceRequest
     * @returns DeleteVirtualMFADeviceResponse
     */
    deleteVirtualMFADevice(request: $_model.DeleteVirtualMFADeviceRequest): Promise<$_model.DeleteVirtualMFADeviceResponse>;
    /**
     * Uninstalls an installed external application or an internal application of the ServerApp type.
     *
     * @remarks
     * When you uninstall an internal application, the application must be of the **ServerApp** type. Otherwise, the call fails.
     * > Among **internal applications**, only applications of the ServerApp type require the **provisioning** operation. Therefore, only internal applications of the ServerApp type **can be uninstalled**. Internal applications of the WebApp and NativeApp types **do not require and cannot be uninstalled**.
     *
     * @param request - DeprovisionApplicationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeprovisionApplicationResponse
     */
    deprovisionApplicationWithOptions(request: $_model.DeprovisionApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeprovisionApplicationResponse>;
    /**
     * Uninstalls an installed external application or an internal application of the ServerApp type.
     *
     * @remarks
     * When you uninstall an internal application, the application must be of the **ServerApp** type. Otherwise, the call fails.
     * > Among **internal applications**, only applications of the ServerApp type require the **provisioning** operation. Therefore, only internal applications of the ServerApp type **can be uninstalled**. Internal applications of the WebApp and NativeApp types **do not require and cannot be uninstalled**.
     *
     * @param request - DeprovisionApplicationRequest
     * @returns DeprovisionApplicationResponse
     */
    deprovisionApplication(request: $_model.DeprovisionApplicationRequest): Promise<$_model.DeprovisionApplicationResponse>;
    /**
     * Uninstalls an installed external application.
     *
     * @param request - DeprovisionExternalApplicationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeprovisionExternalApplicationResponse
     */
    deprovisionExternalApplicationWithOptions(request: $_model.DeprovisionExternalApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeprovisionExternalApplicationResponse>;
    /**
     * Uninstalls an installed external application.
     *
     * @param request - DeprovisionExternalApplicationRequest
     * @returns DeprovisionExternalApplicationResponse
     */
    deprovisionExternalApplication(request: $_model.DeprovisionExternalApplicationRequest): Promise<$_model.DeprovisionExternalApplicationResponse>;
    /**
     * Unbinds and deletes a multi-factor authentication (MFA) device from a Resource Access Management (RAM) user.
     *
     * @param request - DisableVirtualMFARequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DisableVirtualMFAResponse
     */
    disableVirtualMFAWithOptions(request: $_model.DisableVirtualMFARequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableVirtualMFAResponse>;
    /**
     * Unbinds and deletes a multi-factor authentication (MFA) device from a Resource Access Management (RAM) user.
     *
     * @param request - DisableVirtualMFARequest
     * @returns DisableVirtualMFAResponse
     */
    disableVirtualMFA(request: $_model.DisableVirtualMFARequest): Promise<$_model.DisableVirtualMFAResponse>;
    /**
     * Generates the user credential report of an Alibaba Cloud account.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GenerateCredentialReportResponse
     */
    generateCredentialReportWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GenerateCredentialReportResponse>;
    /**
     * Generates the user credential report of an Alibaba Cloud account.
     * @returns GenerateCredentialReportResponse
     */
    generateCredentialReport(): Promise<$_model.GenerateCredentialReportResponse>;
    /**
     * Generates a check report for Cloud Governance.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GenerateGovernanceReportResponse
     */
    generateGovernanceReportWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GenerateGovernanceReportResponse>;
    /**
     * Generates a check report for Cloud Governance.
     * @returns GenerateGovernanceReportResponse
     */
    generateGovernanceReport(): Promise<$_model.GenerateGovernanceReportResponse>;
    /**
     * Queries the details of a specified revoked access key that belongs to a Resource Access Management (RAM) user.
     *
     * @param request - GetAccessKeyInfoInRecycleBinRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAccessKeyInfoInRecycleBinResponse
     */
    getAccessKeyInfoInRecycleBinWithOptions(request: $_model.GetAccessKeyInfoInRecycleBinRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccessKeyInfoInRecycleBinResponse>;
    /**
     * Queries the details of a specified revoked access key that belongs to a Resource Access Management (RAM) user.
     *
     * @param request - GetAccessKeyInfoInRecycleBinRequest
     * @returns GetAccessKeyInfoInRecycleBinResponse
     */
    getAccessKeyInfoInRecycleBin(request: $_model.GetAccessKeyInfoInRecycleBinRequest): Promise<$_model.GetAccessKeyInfoInRecycleBinResponse>;
    /**
     * Queries the last used time of a specified access key.
     *
     * @param request - GetAccessKeyLastUsedRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAccessKeyLastUsedResponse
     */
    getAccessKeyLastUsedWithOptions(request: $_model.GetAccessKeyLastUsedRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccessKeyLastUsedResponse>;
    /**
     * Queries the last used time of a specified access key.
     *
     * @param request - GetAccessKeyLastUsedRequest
     * @returns GetAccessKeyLastUsedResponse
     */
    getAccessKeyLastUsed(request: $_model.GetAccessKeyLastUsedRequest): Promise<$_model.GetAccessKeyLastUsedResponse>;
    /**
     * Queries the network access restriction policy of an access key for an Alibaba Cloud account or a Resource Access Management (RAM) user.
     *
     * @param request - GetAccessKeyPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAccessKeyPolicyResponse
     */
    getAccessKeyPolicyWithOptions(request: $_model.GetAccessKeyPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccessKeyPolicyResponse>;
    /**
     * Queries the network access restriction policy of an access key for an Alibaba Cloud account or a Resource Access Management (RAM) user.
     *
     * @param request - GetAccessKeyPolicyRequest
     * @returns GetAccessKeyPolicyResponse
     */
    getAccessKeyPolicy(request: $_model.GetAccessKeyPolicyRequest): Promise<$_model.GetAccessKeyPolicyResponse>;
    /**
     * Queries the account-level AccessKey network access control policy.
     *
     * @param request - GetAccessKeyPolicyForAccountRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAccessKeyPolicyForAccountResponse
     */
    getAccessKeyPolicyForAccountWithOptions(request: $_model.GetAccessKeyPolicyForAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccessKeyPolicyForAccountResponse>;
    /**
     * Queries the account-level AccessKey network access control policy.
     *
     * @param request - GetAccessKeyPolicyForAccountRequest
     * @returns GetAccessKeyPolicyForAccountResponse
     */
    getAccessKeyPolicyForAccount(request: $_model.GetAccessKeyPolicyForAccountRequest): Promise<$_model.GetAccessKeyPolicyForAccountResponse>;
    /**
     * Queries information about the multi-factor authentication (MFA) devices of an Alibaba Cloud account.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAccountMFAInfoResponse
     */
    getAccountMFAInfoWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetAccountMFAInfoResponse>;
    /**
     * Queries information about the multi-factor authentication (MFA) devices of an Alibaba Cloud account.
     * @returns GetAccountMFAInfoResponse
     */
    getAccountMFAInfo(): Promise<$_model.GetAccountMFAInfoResponse>;
    /**
     * Queries the security report of an Alibaba Cloud account.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAccountSecurityPracticeReportResponse
     */
    getAccountSecurityPracticeReportWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetAccountSecurityPracticeReportResponse>;
    /**
     * Queries the security report of an Alibaba Cloud account.
     * @returns GetAccountSecurityPracticeReportResponse
     */
    getAccountSecurityPracticeReport(): Promise<$_model.GetAccountSecurityPracticeReportResponse>;
    /**
     * Queries the overview information of an Alibaba Cloud account.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAccountSummaryResponse
     */
    getAccountSummaryWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetAccountSummaryResponse>;
    /**
     * Queries the overview information of an Alibaba Cloud account.
     * @returns GetAccountSummaryResponse
     */
    getAccountSummary(): Promise<$_model.GetAccountSummaryResponse>;
    /**
     * Queries the app secret information of a specified application.
     *
     * @param request - GetAppSecretRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppSecretResponse
     */
    getAppSecretWithOptions(request: $_model.GetAppSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppSecretResponse>;
    /**
     * Queries the app secret information of a specified application.
     *
     * @param request - GetAppSecretRequest
     * @returns GetAppSecretResponse
     */
    getAppSecret(request: $_model.GetAppSecretRequest): Promise<$_model.GetAppSecretResponse>;
    /**
     * Queries the configuration information of a specified application.
     *
     * @remarks
     * This topic provides an example to query the configuration information of the application `472457090344041****`.
     *
     * @param request - GetApplicationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetApplicationResponse
     */
    getApplicationWithOptions(request: $_model.GetApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationResponse>;
    /**
     * Queries the configuration information of a specified application.
     *
     * @remarks
     * This topic provides an example to query the configuration information of the application `472457090344041****`.
     *
     * @param request - GetApplicationRequest
     * @returns GetApplicationResponse
     */
    getApplication(request: $_model.GetApplicationRequest): Promise<$_model.GetApplicationResponse>;
    /**
     * Queries the installation information of a specified installed application.
     *
     * @remarks
     * Before you call this operation, the target application must be installed. You can call ProvisionApplication to install the application and use the AppId of the installed application. Calling this operation with an application ID returned by CreateApplication for an application that has not been installed will fail.
     *
     * @param request - GetApplicationProvisionInfoRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetApplicationProvisionInfoResponse
     */
    getApplicationProvisionInfoWithOptions(request: $_model.GetApplicationProvisionInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationProvisionInfoResponse>;
    /**
     * Queries the installation information of a specified installed application.
     *
     * @remarks
     * Before you call this operation, the target application must be installed. You can call ProvisionApplication to install the application and use the AppId of the installed application. Calling this operation with an application ID returned by CreateApplication for an application that has not been installed will fail.
     *
     * @param request - GetApplicationProvisionInfoRequest
     * @returns GetApplicationProvisionInfoResponse
     */
    getApplicationProvisionInfo(request: $_model.GetApplicationProvisionInfoRequest): Promise<$_model.GetApplicationProvisionInfoResponse>;
    /**
     * Queries the user credential report for an Alibaba Cloud account.
     *
     * @param request - GetCredentialReportRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetCredentialReportResponse
     */
    getCredentialReportWithOptions(request: $_model.GetCredentialReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCredentialReportResponse>;
    /**
     * Queries the user credential report for an Alibaba Cloud account.
     *
     * @param request - GetCredentialReportRequest
     * @returns GetCredentialReportResponse
     */
    getCredentialReport(request: $_model.GetCredentialReportRequest): Promise<$_model.GetCredentialReportResponse>;
    /**
     * Queries the default domain name of an Alibaba Cloud account.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetDefaultDomainResponse
     */
    getDefaultDomainWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetDefaultDomainResponse>;
    /**
     * Queries the default domain name of an Alibaba Cloud account.
     * @returns GetDefaultDomainResponse
     */
    getDefaultDomain(): Promise<$_model.GetDefaultDomainResponse>;
    /**
     * Queries information about an installed external application.
     *
     * @remarks
     * 调用本接口时，`AppId` 必须来自当前账号已安装的外部应用。可先调用 `ListExternalApplications` 获取；如果账号中没有已安装的外部应用，需先调用 `ProvisionExternalApplication` 安装。
     *
     * @param request - GetExternalApplicationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetExternalApplicationResponse
     */
    getExternalApplicationWithOptions(request: $_model.GetExternalApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetExternalApplicationResponse>;
    /**
     * Queries information about an installed external application.
     *
     * @remarks
     * 调用本接口时，`AppId` 必须来自当前账号已安装的外部应用。可先调用 `ListExternalApplications` 获取；如果账号中没有已安装的外部应用，需先调用 `ProvisionExternalApplication` 安装。
     *
     * @param request - GetExternalApplicationRequest
     * @returns GetExternalApplicationResponse
     */
    getExternalApplication(request: $_model.GetExternalApplicationRequest): Promise<$_model.GetExternalApplicationResponse>;
    /**
     * Queries the details of a specific check item in an identity and access governance report.
     *
     * @param request - GetGovernanceItemReportRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetGovernanceItemReportResponse
     */
    getGovernanceItemReportWithOptions(request: $_model.GetGovernanceItemReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetGovernanceItemReportResponse>;
    /**
     * Queries the details of a specific check item in an identity and access governance report.
     *
     * @param request - GetGovernanceItemReportRequest
     * @returns GetGovernanceItemReportResponse
     */
    getGovernanceItemReport(request: $_model.GetGovernanceItemReportRequest): Promise<$_model.GetGovernanceItemReportResponse>;
    /**
     * Retrieves the current generation status of an identity and access governance report.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetGovernanceReportStatusResponse
     */
    getGovernanceReportStatusWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetGovernanceReportStatusResponse>;
    /**
     * Retrieves the current generation status of an identity and access governance report.
     * @returns GetGovernanceReportStatusResponse
     */
    getGovernanceReportStatus(): Promise<$_model.GetGovernanceReportStatusResponse>;
    /**
     * Queries the details of a specified user group.
     *
     * @param request - GetGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetGroupResponse
     */
    getGroupWithOptions(request: $_model.GetGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetGroupResponse>;
    /**
     * Queries the details of a specified user group.
     *
     * @param request - GetGroupRequest
     * @returns GetGroupResponse
     */
    getGroup(request: $_model.GetGroupRequest): Promise<$_model.GetGroupResponse>;
    /**
     * Queries the logon information of a specified Resource Access Management (RAM) user.
     *
     * @remarks
     * Before querying, the target RAM user must have a console logon profile (LoginProfile). If the profile is not configured, call CreateLoginProfile to create a logon profile first.
     *
     * @param request - GetLoginProfileRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetLoginProfileResponse
     */
    getLoginProfileWithOptions(request: $_model.GetLoginProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLoginProfileResponse>;
    /**
     * Queries the logon information of a specified Resource Access Management (RAM) user.
     *
     * @remarks
     * Before querying, the target RAM user must have a console logon profile (LoginProfile). If the profile is not configured, call CreateLoginProfile to create a logon profile first.
     *
     * @param request - GetLoginProfileRequest
     * @returns GetLoginProfileResponse
     */
    getLoginProfile(request: $_model.GetLoginProfileRequest): Promise<$_model.GetLoginProfileResponse>;
    /**
     * Queries the information about an OIDC IdP.
     *
     * @remarks
     * ###
     * This topic provides an example on how to query the information about an OpenID Connect (OIDC) identity provider (IdP) named `TestOIDCProvider`.
     *
     * @param request - GetOIDCProviderRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetOIDCProviderResponse
     */
    getOIDCProviderWithOptions(request: $_model.GetOIDCProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOIDCProviderResponse>;
    /**
     * Queries the information about an OIDC IdP.
     *
     * @remarks
     * ###
     * This topic provides an example on how to query the information about an OpenID Connect (OIDC) identity provider (IdP) named `TestOIDCProvider`.
     *
     * @param request - GetOIDCProviderRequest
     * @returns GetOIDCProviderResponse
     */
    getOIDCProvider(request: $_model.GetOIDCProviderRequest): Promise<$_model.GetOIDCProviderResponse>;
    /**
     * Queries the password policy for Resource Access Management (RAM) users.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetPasswordPolicyResponse
     */
    getPasswordPolicyWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetPasswordPolicyResponse>;
    /**
     * Queries the password policy for Resource Access Management (RAM) users.
     * @returns GetPasswordPolicyResponse
     */
    getPasswordPolicy(): Promise<$_model.GetPasswordPolicyResponse>;
    /**
     * Queries the details of a specified role-based SSO identity provider.
     *
     * @param request - GetSAMLProviderRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetSAMLProviderResponse
     */
    getSAMLProviderWithOptions(request: $_model.GetSAMLProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSAMLProviderResponse>;
    /**
     * Queries the details of a specified role-based SSO identity provider.
     *
     * @param request - GetSAMLProviderRequest
     * @returns GetSAMLProviderResponse
     */
    getSAMLProvider(request: $_model.GetSAMLProviderRequest): Promise<$_model.GetSAMLProviderResponse>;
    /**
     * Use `GetSecurityPreference` to query the global security preferences of a RAM user.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetSecurityPreferenceResponse
     */
    getSecurityPreferenceWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetSecurityPreferenceResponse>;
    /**
     * Use `GetSecurityPreference` to query the global security preferences of a RAM user.
     * @returns GetSecurityPreferenceResponse
     */
    getSecurityPreference(): Promise<$_model.GetSecurityPreferenceResponse>;
    /**
     * Retrieves a specific service credential of a Resource Access Management (RAM) user.
     *
     * @param request - GetServiceCredentialRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetServiceCredentialResponse
     */
    getServiceCredentialWithOptions(request: $_model.GetServiceCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceCredentialResponse>;
    /**
     * Retrieves a specific service credential of a Resource Access Management (RAM) user.
     *
     * @param request - GetServiceCredentialRequest
     * @returns GetServiceCredentialResponse
     */
    getServiceCredential(request: $_model.GetServiceCredentialRequest): Promise<$_model.GetServiceCredentialResponse>;
    /**
     * Queries the details of a specified Resource Access Management (RAM) user.
     *
     * @param request - GetUserRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetUserResponse
     */
    getUserWithOptions(request: $_model.GetUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserResponse>;
    /**
     * Queries the details of a specified Resource Access Management (RAM) user.
     *
     * @param request - GetUserRequest
     * @returns GetUserResponse
     */
    getUser(request: $_model.GetUserRequest): Promise<$_model.GetUserResponse>;
    /**
     * Queries information about a specific Resource Access Management (RAM) user in the recycle bin.
     *
     * @param request - GetUserInRecycleBinRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetUserInRecycleBinResponse
     */
    getUserInRecycleBinWithOptions(request: $_model.GetUserInRecycleBinRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserInRecycleBinResponse>;
    /**
     * Queries information about a specific Resource Access Management (RAM) user in the recycle bin.
     *
     * @param request - GetUserInRecycleBinRequest
     * @returns GetUserInRecycleBinResponse
     */
    getUserInRecycleBin(request: $_model.GetUserInRecycleBinRequest): Promise<$_model.GetUserInRecycleBinResponse>;
    /**
     * Queries information about the multi-factor authentication (MFA) device that is bound to a Resource Access Management (RAM) user.
     *
     * @param request - GetUserMFAInfoRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetUserMFAInfoResponse
     */
    getUserMFAInfoWithOptions(request: $_model.GetUserMFAInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserMFAInfoResponse>;
    /**
     * Queries information about the multi-factor authentication (MFA) device that is bound to a Resource Access Management (RAM) user.
     *
     * @param request - GetUserMFAInfoRequest
     * @returns GetUserMFAInfoResponse
     */
    getUserMFAInfo(request: $_model.GetUserMFAInfoRequest): Promise<$_model.GetUserMFAInfoResponse>;
    /**
     * Queries the configurations of user-based single sign-on (SSO).
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetUserSsoSettingsResponse
     */
    getUserSsoSettingsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetUserSsoSettingsResponse>;
    /**
     * Queries the configurations of user-based single sign-on (SSO).
     * @returns GetUserSsoSettingsResponse
     */
    getUserSsoSettings(): Promise<$_model.GetUserSsoSettingsResponse>;
    /**
     * Queries the status of the secure phone or security email address of a Resource Access Management (RAM) user.
     *
     * @param request - GetVerificationInfoRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetVerificationInfoResponse
     */
    getVerificationInfoWithOptions(request: $_model.GetVerificationInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVerificationInfoResponse>;
    /**
     * Queries the status of the secure phone or security email address of a Resource Access Management (RAM) user.
     *
     * @param request - GetVerificationInfoRequest
     * @returns GetVerificationInfoResponse
     */
    getVerificationInfo(request: $_model.GetVerificationInfoRequest): Promise<$_model.GetVerificationInfoResponse>;
    /**
     * Queries the AccessKey pairs of an Alibaba Cloud account or a Resource Access Management (RAM) user.
     *
     * @param request - ListAccessKeysRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAccessKeysResponse
     */
    listAccessKeysWithOptions(request: $_model.ListAccessKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAccessKeysResponse>;
    /**
     * Queries the AccessKey pairs of an Alibaba Cloud account or a Resource Access Management (RAM) user.
     *
     * @param request - ListAccessKeysRequest
     * @returns ListAccessKeysResponse
     */
    listAccessKeys(request: $_model.ListAccessKeysRequest): Promise<$_model.ListAccessKeysResponse>;
    /**
     * Queries the AccessKey pairs of a specific Resource Access Management (RAM) user in the recycle bin.
     *
     * @param request - ListAccessKeysInRecycleBinRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAccessKeysInRecycleBinResponse
     */
    listAccessKeysInRecycleBinWithOptions(request: $_model.ListAccessKeysInRecycleBinRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAccessKeysInRecycleBinResponse>;
    /**
     * Queries the AccessKey pairs of a specific Resource Access Management (RAM) user in the recycle bin.
     *
     * @param request - ListAccessKeysInRecycleBinRequest
     * @returns ListAccessKeysInRecycleBinResponse
     */
    listAccessKeysInRecycleBin(request: $_model.ListAccessKeysInRecycleBinRequest): Promise<$_model.ListAccessKeysInRecycleBinResponse>;
    /**
     * Queries the secret IDs of an application.
     *
     * @param request - ListAppSecretIdsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppSecretIdsResponse
     */
    listAppSecretIdsWithOptions(request: $_model.ListAppSecretIdsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppSecretIdsResponse>;
    /**
     * Queries the secret IDs of an application.
     *
     * @param request - ListAppSecretIdsRequest
     * @returns ListAppSecretIdsResponse
     */
    listAppSecretIds(request: $_model.ListAppSecretIdsRequest): Promise<$_model.ListAppSecretIdsResponse>;
    /**
     * Lists the assignment records of a specified application.
     *
     * @param request - ListApplicationAssignmentsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListApplicationAssignmentsResponse
     */
    listApplicationAssignmentsWithOptions(request: $_model.ListApplicationAssignmentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationAssignmentsResponse>;
    /**
     * Lists the assignment records of a specified application.
     *
     * @param request - ListApplicationAssignmentsRequest
     * @returns ListApplicationAssignmentsResponse
     */
    listApplicationAssignments(request: $_model.ListApplicationAssignmentsRequest): Promise<$_model.ListApplicationAssignmentsResponse>;
    /**
     * Lists the application assignment records for a specified identity principal.
     *
     * @param request - ListApplicationAssignmentsForPrincipalRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListApplicationAssignmentsForPrincipalResponse
     */
    listApplicationAssignmentsForPrincipalWithOptions(request: $_model.ListApplicationAssignmentsForPrincipalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationAssignmentsForPrincipalResponse>;
    /**
     * Lists the application assignment records for a specified identity principal.
     *
     * @param request - ListApplicationAssignmentsForPrincipalRequest
     * @returns ListApplicationAssignmentsForPrincipalResponse
     */
    listApplicationAssignmentsForPrincipal(request: $_model.ListApplicationAssignmentsForPrincipalRequest): Promise<$_model.ListApplicationAssignmentsForPrincipalResponse>;
    /**
     * Queries the installation information of all installed applications.
     *
     * @param request - ListApplicationProvisionInfosRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListApplicationProvisionInfosResponse
     */
    listApplicationProvisionInfosWithOptions(request: $_model.ListApplicationProvisionInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationProvisionInfosResponse>;
    /**
     * Queries the installation information of all installed applications.
     *
     * @param request - ListApplicationProvisionInfosRequest
     * @returns ListApplicationProvisionInfosResponse
     */
    listApplicationProvisionInfos(request: $_model.ListApplicationProvisionInfosRequest): Promise<$_model.ListApplicationProvisionInfosResponse>;
    /**
     * Lists the applications.
     *
     * @remarks
     * This topic provides an example of querying the applications within the current account. The response indicates that the current account has only one application named `myapp`.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListApplicationsResponse
     */
    listApplicationsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationsResponse>;
    /**
     * Lists the applications.
     *
     * @remarks
     * This topic provides an example of querying the applications within the current account. The response indicates that the current account has only one application named `myapp`.
     * @returns ListApplicationsResponse
     */
    listApplications(): Promise<$_model.ListApplicationsResponse>;
    /**
     * Queries information about all installed external applications.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListExternalApplicationsResponse
     */
    listExternalApplicationsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListExternalApplicationsResponse>;
    /**
     * Queries information about all installed external applications.
     * @returns ListExternalApplicationsResponse
     */
    listExternalApplications(): Promise<$_model.ListExternalApplicationsResponse>;
    /**
     * Queries Resource Access Management (RAM) user groups.
     *
     * @param request - ListGroupsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListGroupsResponse
     */
    listGroupsWithOptions(request: $_model.ListGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGroupsResponse>;
    /**
     * Queries Resource Access Management (RAM) user groups.
     *
     * @param request - ListGroupsRequest
     * @returns ListGroupsResponse
     */
    listGroups(request: $_model.ListGroupsRequest): Promise<$_model.ListGroupsResponse>;
    /**
     * Queries the Resource Access Management (RAM) user groups to which a RAM user belongs.
     *
     * @param request - ListGroupsForUserRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListGroupsForUserResponse
     */
    listGroupsForUserWithOptions(request: $_model.ListGroupsForUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGroupsForUserResponse>;
    /**
     * Queries the Resource Access Management (RAM) user groups to which a RAM user belongs.
     *
     * @param request - ListGroupsForUserRequest
     * @returns ListGroupsForUserResponse
     */
    listGroupsForUser(request: $_model.ListGroupsForUserRequest): Promise<$_model.ListGroupsForUserResponse>;
    /**
     * Queries OIDC IdPs.
     *
     * @remarks
     * ###
     * This topic provides an example on how to query all OpenID Connect (OIDC) identity providers (IdPs) within your Alibaba Cloud account. The response shows that your Alibaba Cloud account has only one OIDC IdP named `TestOIDCProvider`.
     *
     * @param request - ListOIDCProvidersRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListOIDCProvidersResponse
     */
    listOIDCProvidersWithOptions(request: $_model.ListOIDCProvidersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOIDCProvidersResponse>;
    /**
     * Queries OIDC IdPs.
     *
     * @remarks
     * ###
     * This topic provides an example on how to query all OpenID Connect (OIDC) identity providers (IdPs) within your Alibaba Cloud account. The response shows that your Alibaba Cloud account has only one OIDC IdP named `TestOIDCProvider`.
     *
     * @param request - ListOIDCProvidersRequest
     * @returns ListOIDCProvidersResponse
     */
    listOIDCProviders(request: $_model.ListOIDCProvidersRequest): Promise<$_model.ListOIDCProvidersResponse>;
    /**
     * Queries the information about the passkeys that are bound to a Resource Access Management (RAM) user.
     *
     * @param request - ListPasskeysRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListPasskeysResponse
     */
    listPasskeysWithOptions(request: $_model.ListPasskeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPasskeysResponse>;
    /**
     * Queries the information about the passkeys that are bound to a Resource Access Management (RAM) user.
     *
     * @param request - ListPasskeysRequest
     * @returns ListPasskeysResponse
     */
    listPasskeys(request: $_model.ListPasskeysRequest): Promise<$_model.ListPasskeysResponse>;
    /**
     * Queries predefined application permissions.
     *
     * @param request - ListPredefinedScopesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListPredefinedScopesResponse
     */
    listPredefinedScopesWithOptions(request: $_model.ListPredefinedScopesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPredefinedScopesResponse>;
    /**
     * Queries predefined application permissions.
     *
     * @param request - ListPredefinedScopesRequest
     * @returns ListPredefinedScopesResponse
     */
    listPredefinedScopes(request: $_model.ListPredefinedScopesRequest): Promise<$_model.ListPredefinedScopesResponse>;
    /**
     * Queries all metric values in the most recent governance check.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListRecentGovernanceMetricsResponse
     */
    listRecentGovernanceMetricsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListRecentGovernanceMetricsResponse>;
    /**
     * Queries all metric values in the most recent governance check.
     * @returns ListRecentGovernanceMetricsResponse
     */
    listRecentGovernanceMetrics(): Promise<$_model.ListRecentGovernanceMetricsResponse>;
    /**
     * Queries information about identity providers (IdPs) for role-based single sign-on (SSO).
     *
     * @param request - ListSAMLProvidersRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListSAMLProvidersResponse
     */
    listSAMLProvidersWithOptions(request: $_model.ListSAMLProvidersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSAMLProvidersResponse>;
    /**
     * Queries information about identity providers (IdPs) for role-based single sign-on (SSO).
     *
     * @param request - ListSAMLProvidersRequest
     * @returns ListSAMLProvidersResponse
     */
    listSAMLProviders(request: $_model.ListSAMLProvidersRequest): Promise<$_model.ListSAMLProvidersResponse>;
    /**
     * Retrieves the list of service credentials for a Resource Access Management (RAM) user or all Resource Access Management (RAM) users under an Alibaba Cloud account.
     *
     * @param request - ListServiceCredentialsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListServiceCredentialsResponse
     */
    listServiceCredentialsWithOptions(request: $_model.ListServiceCredentialsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceCredentialsResponse>;
    /**
     * Retrieves the list of service credentials for a Resource Access Management (RAM) user or all Resource Access Management (RAM) users under an Alibaba Cloud account.
     *
     * @param request - ListServiceCredentialsRequest
     * @returns ListServiceCredentialsResponse
     */
    listServiceCredentials(request: $_model.ListServiceCredentialsRequest): Promise<$_model.ListServiceCredentialsResponse>;
    /**
     * Queries the tags that are added resources.
     *
     * @remarks
     * ###
     * You must specify at least one of the following parameters or parameter pairs in a request to determine a query object:
     * - `ResourceId.N`
     * - `Tag.N.Key`
     * - `Tag.N.Key` and `Tag.N.Value`
     *
     * @param request - ListTagResourcesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListTagResourcesResponse
     */
    listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse>;
    /**
     * Queries the tags that are added resources.
     *
     * @remarks
     * ###
     * You must specify at least one of the following parameters or parameter pairs in a request to determine a query object:
     * - `ResourceId.N`
     * - `Tag.N.Key`
     * - `Tag.N.Key` and `Tag.N.Value`
     *
     * @param request - ListTagResourcesRequest
     * @returns ListTagResourcesResponse
     */
    listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse>;
    /**
     * Queries the basic information about all Resource Access Management (RAM) users.
     *
     * @remarks
     * You can call the following API operations to query information about all RAM users:
     * - ListUsers: queries the details of all RAM users.
     * - ListUserBasicInfos: queries the basic information about all RAM users. The basic information includes only the logon names (`UserPrincipalName`), display names (`DisplayName`), and user IDs (`UserId`).
     *
     * @param request - ListUserBasicInfosRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListUserBasicInfosResponse
     */
    listUserBasicInfosWithOptions(request: $_model.ListUserBasicInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserBasicInfosResponse>;
    /**
     * Queries the basic information about all Resource Access Management (RAM) users.
     *
     * @remarks
     * You can call the following API operations to query information about all RAM users:
     * - ListUsers: queries the details of all RAM users.
     * - ListUserBasicInfos: queries the basic information about all RAM users. The basic information includes only the logon names (`UserPrincipalName`), display names (`DisplayName`), and user IDs (`UserId`).
     *
     * @param request - ListUserBasicInfosRequest
     * @returns ListUserBasicInfosResponse
     */
    listUserBasicInfos(request: $_model.ListUserBasicInfosRequest): Promise<$_model.ListUserBasicInfosResponse>;
    /**
     * Queries information about all Resource Access Management (RAM) users.
     *
     * @remarks
     * ### [](#)
     * You can call the following API operations to query the details of all RAM users:
     * - ListUsers: queries the details of all RAM users.
     * - ListUserBasicInfos: queries the basic information about all RAM users. The basic information includes only the logon names (`UserPrincipalName`), display names (`DisplayName`), and user IDs (`UserId`).
     *
     * @param request - ListUsersRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListUsersResponse
     */
    listUsersWithOptions(request: $_model.ListUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersResponse>;
    /**
     * Queries information about all Resource Access Management (RAM) users.
     *
     * @remarks
     * ### [](#)
     * You can call the following API operations to query the details of all RAM users:
     * - ListUsers: queries the details of all RAM users.
     * - ListUserBasicInfos: queries the basic information about all RAM users. The basic information includes only the logon names (`UserPrincipalName`), display names (`DisplayName`), and user IDs (`UserId`).
     *
     * @param request - ListUsersRequest
     * @returns ListUsersResponse
     */
    listUsers(request: $_model.ListUsersRequest): Promise<$_model.ListUsersResponse>;
    /**
     * Queries Resource Access Management (RAM) users in a RAM user group.
     *
     * @param request - ListUsersForGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListUsersForGroupResponse
     */
    listUsersForGroupWithOptions(request: $_model.ListUsersForGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersForGroupResponse>;
    /**
     * Queries Resource Access Management (RAM) users in a RAM user group.
     *
     * @param request - ListUsersForGroupRequest
     * @returns ListUsersForGroupResponse
     */
    listUsersForGroup(request: $_model.ListUsersForGroupRequest): Promise<$_model.ListUsersForGroupResponse>;
    /**
     * Queries the basic information about all Resource Access Management (RAM) users in the recycle bin.
     *
     * @param request - ListUsersInRecycleBinRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListUsersInRecycleBinResponse
     */
    listUsersInRecycleBinWithOptions(request: $_model.ListUsersInRecycleBinRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersInRecycleBinResponse>;
    /**
     * Queries the basic information about all Resource Access Management (RAM) users in the recycle bin.
     *
     * @param request - ListUsersInRecycleBinRequest
     * @returns ListUsersInRecycleBinResponse
     */
    listUsersInRecycleBin(request: $_model.ListUsersInRecycleBinRequest): Promise<$_model.ListUsersInRecycleBinResponse>;
    /**
     * Queries the list of multi-factor authentication devices.
     *
     * @param request - ListVirtualMFADevicesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListVirtualMFADevicesResponse
     */
    listVirtualMFADevicesWithOptions(request: $_model.ListVirtualMFADevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVirtualMFADevicesResponse>;
    /**
     * Queries the list of multi-factor authentication devices.
     *
     * @param request - ListVirtualMFADevicesRequest
     * @returns ListVirtualMFADevicesResponse
     */
    listVirtualMFADevices(request: $_model.ListVirtualMFADevicesRequest): Promise<$_model.ListVirtualMFADevicesResponse>;
    /**
     * Installs an application.
     *
     * @param request - ProvisionApplicationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ProvisionApplicationResponse
     */
    provisionApplicationWithOptions(request: $_model.ProvisionApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ProvisionApplicationResponse>;
    /**
     * Installs an application.
     *
     * @param request - ProvisionApplicationRequest
     * @returns ProvisionApplicationResponse
     */
    provisionApplication(request: $_model.ProvisionApplicationRequest): Promise<$_model.ProvisionApplicationResponse>;
    /**
     * Installs an external application.
     *
     * @param request - ProvisionExternalApplicationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ProvisionExternalApplicationResponse
     */
    provisionExternalApplicationWithOptions(request: $_model.ProvisionExternalApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ProvisionExternalApplicationResponse>;
    /**
     * Installs an external application.
     *
     * @param request - ProvisionExternalApplicationRequest
     * @returns ProvisionExternalApplicationResponse
     */
    provisionExternalApplication(request: $_model.ProvisionExternalApplicationRequest): Promise<$_model.ProvisionExternalApplicationResponse>;
    /**
     * Invokes RemoveClientIdFromOIDCProvider to remove a specified client ID from an OIDC IdP.
     *
     * @remarks
     * ### Usage notes
     * This topic provides an example on how to remove the client ID `498469743454717****` from an OIDC IdP named `TestOIDCProvider`.
     *
     * @param request - RemoveClientIdFromOIDCProviderRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RemoveClientIdFromOIDCProviderResponse
     */
    removeClientIdFromOIDCProviderWithOptions(request: $_model.RemoveClientIdFromOIDCProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveClientIdFromOIDCProviderResponse>;
    /**
     * Invokes RemoveClientIdFromOIDCProvider to remove a specified client ID from an OIDC IdP.
     *
     * @remarks
     * ### Usage notes
     * This topic provides an example on how to remove the client ID `498469743454717****` from an OIDC IdP named `TestOIDCProvider`.
     *
     * @param request - RemoveClientIdFromOIDCProviderRequest
     * @returns RemoveClientIdFromOIDCProviderResponse
     */
    removeClientIdFromOIDCProvider(request: $_model.RemoveClientIdFromOIDCProviderRequest): Promise<$_model.RemoveClientIdFromOIDCProviderResponse>;
    /**
     * Removes a fingerprint from an OpenID Connect (OIDC) identity provider (IdP).
     *
     * @remarks
     * ###
     * This topic provides an example on how to remove the fingerprint `6938fd4d98bab03faadb97b34396831e3780****` from the OIDC IdP named `TestOIDCProvider`.
     *
     * @param request - RemoveFingerprintFromOIDCProviderRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RemoveFingerprintFromOIDCProviderResponse
     */
    removeFingerprintFromOIDCProviderWithOptions(request: $_model.RemoveFingerprintFromOIDCProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveFingerprintFromOIDCProviderResponse>;
    /**
     * Removes a fingerprint from an OpenID Connect (OIDC) identity provider (IdP).
     *
     * @remarks
     * ###
     * This topic provides an example on how to remove the fingerprint `6938fd4d98bab03faadb97b34396831e3780****` from the OIDC IdP named `TestOIDCProvider`.
     *
     * @param request - RemoveFingerprintFromOIDCProviderRequest
     * @returns RemoveFingerprintFromOIDCProviderResponse
     */
    removeFingerprintFromOIDCProvider(request: $_model.RemoveFingerprintFromOIDCProviderRequest): Promise<$_model.RemoveFingerprintFromOIDCProviderResponse>;
    /**
     * Removes a Resource Access Management (RAM) user from a RAM user group.
     *
     * @param request - RemoveUserFromGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RemoveUserFromGroupResponse
     */
    removeUserFromGroupWithOptions(request: $_model.RemoveUserFromGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveUserFromGroupResponse>;
    /**
     * Removes a Resource Access Management (RAM) user from a RAM user group.
     *
     * @param request - RemoveUserFromGroupRequest
     * @returns RemoveUserFromGroupResponse
     */
    removeUserFromGroup(request: $_model.RemoveUserFromGroupRequest): Promise<$_model.RemoveUserFromGroupResponse>;
    /**
     * Restores a specific AccessKey pair that belongs to a Resource Access Management (RAM) user from the recycle bin.
     *
     * @param request - RestoreAccessKeyFromRecycleBinRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RestoreAccessKeyFromRecycleBinResponse
     */
    restoreAccessKeyFromRecycleBinWithOptions(request: $_model.RestoreAccessKeyFromRecycleBinRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestoreAccessKeyFromRecycleBinResponse>;
    /**
     * Restores a specific AccessKey pair that belongs to a Resource Access Management (RAM) user from the recycle bin.
     *
     * @param request - RestoreAccessKeyFromRecycleBinRequest
     * @returns RestoreAccessKeyFromRecycleBinResponse
     */
    restoreAccessKeyFromRecycleBin(request: $_model.RestoreAccessKeyFromRecycleBinRequest): Promise<$_model.RestoreAccessKeyFromRecycleBinResponse>;
    /**
     * Restores a specific Resource Access Management (RAM) user from the recycle bin.
     *
     * @param request - RestoreUserFromRecycleBinRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RestoreUserFromRecycleBinResponse
     */
    restoreUserFromRecycleBinWithOptions(request: $_model.RestoreUserFromRecycleBinRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestoreUserFromRecycleBinResponse>;
    /**
     * Restores a specific Resource Access Management (RAM) user from the recycle bin.
     *
     * @param request - RestoreUserFromRecycleBinRequest
     * @returns RestoreUserFromRecycleBinResponse
     */
    restoreUserFromRecycleBin(request: $_model.RestoreUserFromRecycleBinRequest): Promise<$_model.RestoreUserFromRecycleBinResponse>;
    /**
     * Settings the network access restriction policy for an access key of an Alibaba Cloud account or a Resource Access Management (RAM) user.
     *
     * @param request - SetAccessKeyPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SetAccessKeyPolicyResponse
     */
    setAccessKeyPolicyWithOptions(request: $_model.SetAccessKeyPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetAccessKeyPolicyResponse>;
    /**
     * Settings the network access restriction policy for an access key of an Alibaba Cloud account or a Resource Access Management (RAM) user.
     *
     * @param request - SetAccessKeyPolicyRequest
     * @returns SetAccessKeyPolicyResponse
     */
    setAccessKeyPolicy(request: $_model.SetAccessKeyPolicyRequest): Promise<$_model.SetAccessKeyPolicyResponse>;
    /**
     * Sets the account-level AccessKey network access control policy.
     *
     * @param request - SetAccessKeyPolicyForAccountRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SetAccessKeyPolicyForAccountResponse
     */
    setAccessKeyPolicyForAccountWithOptions(request: $_model.SetAccessKeyPolicyForAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetAccessKeyPolicyForAccountResponse>;
    /**
     * Sets the account-level AccessKey network access control policy.
     *
     * @param request - SetAccessKeyPolicyForAccountRequest
     * @returns SetAccessKeyPolicyForAccountResponse
     */
    setAccessKeyPolicyForAccount(request: $_model.SetAccessKeyPolicyForAccountRequest): Promise<$_model.SetAccessKeyPolicyForAccountResponse>;
    /**
     * Configures the default domain name for an Alibaba Cloud account.
     *
     * @param request - SetDefaultDomainRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SetDefaultDomainResponse
     */
    setDefaultDomainWithOptions(request: $_model.SetDefaultDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDefaultDomainResponse>;
    /**
     * Configures the default domain name for an Alibaba Cloud account.
     *
     * @param request - SetDefaultDomainRequest
     * @returns SetDefaultDomainResponse
     */
    setDefaultDomain(request: $_model.SetDefaultDomainRequest): Promise<$_model.SetDefaultDomainResponse>;
    /**
     * Set the password policy for Resource Access Management (RAM) users.
     *
     * @param request - SetPasswordPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SetPasswordPolicyResponse
     */
    setPasswordPolicyWithOptions(request: $_model.SetPasswordPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetPasswordPolicyResponse>;
    /**
     * Set the password policy for Resource Access Management (RAM) users.
     *
     * @param request - SetPasswordPolicyRequest
     * @returns SetPasswordPolicyResponse
     */
    setPasswordPolicy(request: $_model.SetPasswordPolicyRequest): Promise<$_model.SetPasswordPolicyResponse>;
    /**
     * Configure the global security preferences for a RAM user.
     *
     * @param tmpReq - SetSecurityPreferenceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SetSecurityPreferenceResponse
     */
    setSecurityPreferenceWithOptions(tmpReq: $_model.SetSecurityPreferenceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetSecurityPreferenceResponse>;
    /**
     * Configure the global security preferences for a RAM user.
     *
     * @param request - SetSecurityPreferenceRequest
     * @returns SetSecurityPreferenceResponse
     */
    setSecurityPreference(request: $_model.SetSecurityPreferenceRequest): Promise<$_model.SetSecurityPreferenceResponse>;
    /**
     * Configures information about user-based single sign-on (SSO).
     *
     * @param request - SetUserSsoSettingsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SetUserSsoSettingsResponse
     */
    setUserSsoSettingsWithOptions(request: $_model.SetUserSsoSettingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetUserSsoSettingsResponse>;
    /**
     * Configures information about user-based single sign-on (SSO).
     *
     * @param request - SetUserSsoSettingsRequest
     * @returns SetUserSsoSettingsResponse
     */
    setUserSsoSettings(request: $_model.SetUserSsoSettingsRequest): Promise<$_model.SetUserSsoSettingsResponse>;
    /**
     * Attaches a secure phone or security email address to a Resource Access Management (RAM) user.
     *
     * @param request - SetVerificationInfoRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SetVerificationInfoResponse
     */
    setVerificationInfoWithOptions(request: $_model.SetVerificationInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetVerificationInfoResponse>;
    /**
     * Attaches a secure phone or security email address to a Resource Access Management (RAM) user.
     *
     * @param request - SetVerificationInfoRequest
     * @returns SetVerificationInfoResponse
     */
    setVerificationInfo(request: $_model.SetVerificationInfoRequest): Promise<$_model.SetVerificationInfoResponse>;
    /**
     * Adds tags to resources.
     *
     * @param request - TagResourcesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns TagResourcesResponse
     */
    tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse>;
    /**
     * Adds tags to resources.
     *
     * @param request - TagResourcesRequest
     * @returns TagResourcesResponse
     */
    tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse>;
    /**
     * Unbinds a multi-factor authentication (MFA) device from a Resource Access Management (RAM) user.
     *
     * @param request - UnbindMFADeviceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UnbindMFADeviceResponse
     */
    unbindMFADeviceWithOptions(request: $_model.UnbindMFADeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindMFADeviceResponse>;
    /**
     * Unbinds a multi-factor authentication (MFA) device from a Resource Access Management (RAM) user.
     *
     * @param request - UnbindMFADeviceRequest
     * @returns UnbindMFADeviceResponse
     */
    unbindMFADevice(request: $_model.UnbindMFADeviceRequest): Promise<$_model.UnbindMFADeviceResponse>;
    /**
     * Unbinds a secure phone or security email address from a Resource Access Management (RAM) user.
     *
     * @param request - UnbindVerificationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UnbindVerificationResponse
     */
    unbindVerificationWithOptions(request: $_model.UnbindVerificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindVerificationResponse>;
    /**
     * Unbinds a secure phone or security email address from a Resource Access Management (RAM) user.
     *
     * @param request - UnbindVerificationRequest
     * @returns UnbindVerificationResponse
     */
    unbindVerification(request: $_model.UnbindVerificationRequest): Promise<$_model.UnbindVerificationResponse>;
    /**
     * Removes tags from a resource.
     *
     * @param request - UntagResourcesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UntagResourcesResponse
     */
    untagResourcesWithOptions(request: $_model.UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse>;
    /**
     * Removes tags from a resource.
     *
     * @param request - UntagResourcesRequest
     * @returns UntagResourcesResponse
     */
    untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse>;
    /**
     * Modifies the status of an AccessKey pair for an Alibaba Cloud account or a Resource Access Management (RAM) user.
     *
     * @param request - UpdateAccessKeyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateAccessKeyResponse
     */
    updateAccessKeyWithOptions(request: $_model.UpdateAccessKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAccessKeyResponse>;
    /**
     * Modifies the status of an AccessKey pair for an Alibaba Cloud account or a Resource Access Management (RAM) user.
     *
     * @param request - UpdateAccessKeyRequest
     * @returns UpdateAccessKeyResponse
     */
    updateAccessKey(request: $_model.UpdateAccessKeyRequest): Promise<$_model.UpdateAccessKeyResponse>;
    /**
     * Modifies the configuration information of a specified application.
     *
     * @param request - UpdateApplicationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateApplicationResponse
     */
    updateApplicationWithOptions(request: $_model.UpdateApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApplicationResponse>;
    /**
     * Modifies the configuration information of a specified application.
     *
     * @param request - UpdateApplicationRequest
     * @returns UpdateApplicationResponse
     */
    updateApplication(request: $_model.UpdateApplicationRequest): Promise<$_model.UpdateApplicationResponse>;
    /**
     * Modifies the basic information of a specified user group.
     *
     * @param request - UpdateGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateGroupResponse
     */
    updateGroupWithOptions(request: $_model.UpdateGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGroupResponse>;
    /**
     * Modifies the basic information of a specified user group.
     *
     * @param request - UpdateGroupRequest
     * @returns UpdateGroupResponse
     */
    updateGroup(request: $_model.UpdateGroupRequest): Promise<$_model.UpdateGroupResponse>;
    /**
     * Modifies the console logon information of a specified Resource Access Management (RAM) user.
     *
     * @param request - UpdateLoginProfileRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateLoginProfileResponse
     */
    updateLoginProfileWithOptions(request: $_model.UpdateLoginProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLoginProfileResponse>;
    /**
     * Modifies the console logon information of a specified Resource Access Management (RAM) user.
     *
     * @param request - UpdateLoginProfileRequest
     * @returns UpdateLoginProfileResponse
     */
    updateLoginProfile(request: $_model.UpdateLoginProfileRequest): Promise<$_model.UpdateLoginProfileResponse>;
    /**
     * Modifies the description and client IDs of an OpenID Connect (OIDC) identity provider (IdP).
     *
     * @remarks
     * ###
     * This topic provides an example on how to change the description of the OIDC IdP named `TestOIDCProvider` to `This is a new OIDC Provider.`
     *
     * @param request - UpdateOIDCProviderRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateOIDCProviderResponse
     */
    updateOIDCProviderWithOptions(request: $_model.UpdateOIDCProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOIDCProviderResponse>;
    /**
     * Modifies the description and client IDs of an OpenID Connect (OIDC) identity provider (IdP).
     *
     * @remarks
     * ###
     * This topic provides an example on how to change the description of the OIDC IdP named `TestOIDCProvider` to `This is a new OIDC Provider.`
     *
     * @param request - UpdateOIDCProviderRequest
     * @returns UpdateOIDCProviderResponse
     */
    updateOIDCProvider(request: $_model.UpdateOIDCProviderRequest): Promise<$_model.UpdateOIDCProviderResponse>;
    /**
     * Updates a passkey.
     *
     * @param request - UpdatePasskeyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdatePasskeyResponse
     */
    updatePasskeyWithOptions(request: $_model.UpdatePasskeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePasskeyResponse>;
    /**
     * Updates a passkey.
     *
     * @param request - UpdatePasskeyRequest
     * @returns UpdatePasskeyResponse
     */
    updatePasskey(request: $_model.UpdatePasskeyRequest): Promise<$_model.UpdatePasskeyResponse>;
    /**
     * Updates the information about a specified identity provider for role-based single sign-on (SSO).
     *
     * @remarks
     * This example shows how to change the description of the identity provider `test-provider` to `This is a new provider.`.
     *
     * @param request - UpdateSAMLProviderRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateSAMLProviderResponse
     */
    updateSAMLProviderWithOptions(request: $_model.UpdateSAMLProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSAMLProviderResponse>;
    /**
     * Updates the information about a specified identity provider for role-based single sign-on (SSO).
     *
     * @remarks
     * This example shows how to change the description of the identity provider `test-provider` to `This is a new provider.`.
     *
     * @param request - UpdateSAMLProviderRequest
     * @returns UpdateSAMLProviderResponse
     */
    updateSAMLProvider(request: $_model.UpdateSAMLProviderRequest): Promise<$_model.UpdateSAMLProviderResponse>;
    /**
     * Updates the status or name of a service credential for a Resource Access Management (RAM) user.
     *
     * @param request - UpdateServiceCredentialRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateServiceCredentialResponse
     */
    updateServiceCredentialWithOptions(request: $_model.UpdateServiceCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateServiceCredentialResponse>;
    /**
     * Updates the status or name of a service credential for a Resource Access Management (RAM) user.
     *
     * @param request - UpdateServiceCredentialRequest
     * @returns UpdateServiceCredentialResponse
     */
    updateServiceCredential(request: $_model.UpdateServiceCredentialRequest): Promise<$_model.UpdateServiceCredentialResponse>;
    /**
     * Invokes UpdateUser to modify the information of a Resource Access Management (RAM) user.
     *
     * @param request - UpdateUserRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateUserResponse
     */
    updateUserWithOptions(request: $_model.UpdateUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserResponse>;
    /**
     * Invokes UpdateUser to modify the information of a Resource Access Management (RAM) user.
     *
     * @param request - UpdateUserRequest
     * @returns UpdateUserResponse
     */
    updateUser(request: $_model.UpdateUserRequest): Promise<$_model.UpdateUserResponse>;
}
