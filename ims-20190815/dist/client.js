"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
const openapi_core_1 = __importDefault(require("@alicloud/openapi-core"));
const openapi_core_2 = require("@alicloud/openapi-core");
const $_model = __importStar(require("./models/model"));
__exportStar(require("./models/model"), exports);
class Client extends openapi_core_1.default {
    constructor(config) {
        super(config);
        this._endpointRule = "central";
        this.checkConfig(config);
        this._endpoint = this.getEndpoint("ims", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
    }
    getEndpoint(productId, regionId, endpointRule, network, suffix, endpointMap, endpoint) {
        if (!$dara.isNull(endpoint)) {
            return endpoint;
        }
        if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
            return endpointMap[regionId];
        }
        return openapi_core_2.OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
    }
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
    async addClientIdToOIDCProviderWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientId)) {
            query["ClientId"] = request.clientId;
        }
        if (!$dara.isNull(request.OIDCProviderName)) {
            query["OIDCProviderName"] = request.OIDCProviderName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "AddClientIdToOIDCProvider",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.AddClientIdToOIDCProviderResponse({}));
    }
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
    async addClientIdToOIDCProvider(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.addClientIdToOIDCProviderWithOptions(request, runtime);
    }
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
    async addFingerprintToOIDCProviderWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.fingerprint)) {
            query["Fingerprint"] = request.fingerprint;
        }
        if (!$dara.isNull(request.OIDCProviderName)) {
            query["OIDCProviderName"] = request.OIDCProviderName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "AddFingerprintToOIDCProvider",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.AddFingerprintToOIDCProviderResponse({}));
    }
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
    async addFingerprintToOIDCProvider(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.addFingerprintToOIDCProviderWithOptions(request, runtime);
    }
    /**
     * Adds a Resource Access Management (RAM) user to a RAM user group.
     *
     * @param request - AddUserToGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AddUserToGroupResponse
     */
    async addUserToGroupWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.groupName)) {
            query["GroupName"] = request.groupName;
        }
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "AddUserToGroup",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.AddUserToGroupResponse({}));
    }
    /**
     * Adds a Resource Access Management (RAM) user to a RAM user group.
     *
     * @param request - AddUserToGroupRequest
     * @returns AddUserToGroupResponse
     */
    async addUserToGroup(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.addUserToGroupWithOptions(request, runtime);
    }
    /**
     * Binds a multi-factor authentication (MFA) device to a Resource Access Management (RAM) user.
     *
     * @param request - BindMFADeviceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns BindMFADeviceResponse
     */
    async bindMFADeviceWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.authenticationCode1)) {
            query["AuthenticationCode1"] = request.authenticationCode1;
        }
        if (!$dara.isNull(request.authenticationCode2)) {
            query["AuthenticationCode2"] = request.authenticationCode2;
        }
        if (!$dara.isNull(request.serialNumber)) {
            query["SerialNumber"] = request.serialNumber;
        }
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "BindMFADevice",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.BindMFADeviceResponse({}));
    }
    /**
     * Binds a multi-factor authentication (MFA) device to a Resource Access Management (RAM) user.
     *
     * @param request - BindMFADeviceRequest
     * @returns BindMFADeviceResponse
     */
    async bindMFADevice(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.bindMFADeviceWithOptions(request, runtime);
    }
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
    async changePasswordWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.newPassword)) {
            query["NewPassword"] = request.newPassword;
        }
        if (!$dara.isNull(request.oldPassword)) {
            query["OldPassword"] = request.oldPassword;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ChangePassword",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ChangePasswordResponse({}));
    }
    /**
     * Changes the password that is used to log on to the console for a Resource Access Management (RAM) user.
     *
     * @remarks
     * > This operation is available only for RAM users. Before you call this operation, make sure that `AllowUserToChangePassword` in [SetSecurityPreference](https://help.aliyun.com/document_detail/43765.html) is set to `True`. The value True indicates that RAM users can manage their passwords.
     *
     * @param request - ChangePasswordRequest
     * @returns ChangePasswordResponse
     */
    async changePassword(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.changePasswordWithOptions(request, runtime);
    }
    /**
     * Creates an access key for an Alibaba Cloud account or a Resource Access Management (RAM) user.
     *
     * @param request - CreateAccessKeyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAccessKeyResponse
     */
    async createAccessKeyWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateAccessKey",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateAccessKeyResponse({}));
    }
    /**
     * Creates an access key for an Alibaba Cloud account or a Resource Access Management (RAM) user.
     *
     * @param request - CreateAccessKeyRequest
     * @returns CreateAccessKeyResponse
     */
    async createAccessKey(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createAccessKeyWithOptions(request, runtime);
    }
    /**
     * Creates an application secret for a specified application.
     *
     * @param request - CreateAppSecretRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAppSecretResponse
     */
    async createAppSecretWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.appId)) {
            query["AppId"] = request.appId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateAppSecret",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateAppSecretResponse({}));
    }
    /**
     * Creates an application secret for a specified application.
     *
     * @param request - CreateAppSecretRequest
     * @returns CreateAppSecretResponse
     */
    async createAppSecret(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createAppSecretWithOptions(request, runtime);
    }
    /**
     * Creates an application.
     *
     * @param request - CreateApplicationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateApplicationResponse
     */
    async createApplicationWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.accessTokenValidity)) {
            query["AccessTokenValidity"] = request.accessTokenValidity;
        }
        if (!$dara.isNull(request.appName)) {
            query["AppName"] = request.appName;
        }
        if (!$dara.isNull(request.appType)) {
            query["AppType"] = request.appType;
        }
        if (!$dara.isNull(request.assignmentType)) {
            query["AssignmentType"] = request.assignmentType;
        }
        if (!$dara.isNull(request.displayName)) {
            query["DisplayName"] = request.displayName;
        }
        if (!$dara.isNull(request.isMultiTenant)) {
            query["IsMultiTenant"] = request.isMultiTenant;
        }
        if (!$dara.isNull(request.needPrincipalConsent)) {
            query["NeedPrincipalConsent"] = request.needPrincipalConsent;
        }
        if (!$dara.isNull(request.predefinedScopes)) {
            query["PredefinedScopes"] = request.predefinedScopes;
        }
        if (!$dara.isNull(request.protocolVersion)) {
            query["ProtocolVersion"] = request.protocolVersion;
        }
        if (!$dara.isNull(request.redirectUris)) {
            query["RedirectUris"] = request.redirectUris;
        }
        if (!$dara.isNull(request.refreshTokenValidity)) {
            query["RefreshTokenValidity"] = request.refreshTokenValidity;
        }
        if (!$dara.isNull(request.requiredScopes)) {
            query["RequiredScopes"] = request.requiredScopes;
        }
        if (!$dara.isNull(request.secretRequired)) {
            query["SecretRequired"] = request.secretRequired;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateApplication",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateApplicationResponse({}));
    }
    /**
     * Creates an application.
     *
     * @param request - CreateApplicationRequest
     * @returns CreateApplicationResponse
     */
    async createApplication(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createApplicationWithOptions(request, runtime);
    }
    /**
     * Creates an application assignment record to grant a specified principal the permissions to use a specified application.
     *
     * @param request - CreateApplicationAssignmentRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateApplicationAssignmentResponse
     */
    async createApplicationAssignmentWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.appId)) {
            query["AppId"] = request.appId;
        }
        if (!$dara.isNull(request.principalName)) {
            query["PrincipalName"] = request.principalName;
        }
        if (!$dara.isNull(request.principalType)) {
            query["PrincipalType"] = request.principalType;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateApplicationAssignment",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateApplicationAssignmentResponse({}));
    }
    /**
     * Creates an application assignment record to grant a specified principal the permissions to use a specified application.
     *
     * @param request - CreateApplicationAssignmentRequest
     * @returns CreateApplicationAssignmentResponse
     */
    async createApplicationAssignment(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createApplicationAssignmentWithOptions(request, runtime);
    }
    /**
     * Creates a user group.
     *
     * @param request - CreateGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateGroupResponse
     */
    async createGroupWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.comments)) {
            query["Comments"] = request.comments;
        }
        if (!$dara.isNull(request.displayName)) {
            query["DisplayName"] = request.displayName;
        }
        if (!$dara.isNull(request.groupName)) {
            query["GroupName"] = request.groupName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateGroup",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateGroupResponse({}));
    }
    /**
     * Creates a user group.
     *
     * @param request - CreateGroupRequest
     * @returns CreateGroupResponse
     */
    async createGroup(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createGroupWithOptions(request, runtime);
    }
    /**
     * Creates a logon profile for a Resource Access Management (RAM) user.
     *
     * @param request - CreateLoginProfileRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateLoginProfileResponse
     */
    async createLoginProfileWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.MFABindRequired)) {
            query["MFABindRequired"] = request.MFABindRequired;
        }
        if (!$dara.isNull(request.password)) {
            query["Password"] = request.password;
        }
        if (!$dara.isNull(request.passwordResetRequired)) {
            query["PasswordResetRequired"] = request.passwordResetRequired;
        }
        if (!$dara.isNull(request.status)) {
            query["Status"] = request.status;
        }
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateLoginProfile",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateLoginProfileResponse({}));
    }
    /**
     * Creates a logon profile for a Resource Access Management (RAM) user.
     *
     * @param request - CreateLoginProfileRequest
     * @returns CreateLoginProfileResponse
     */
    async createLoginProfile(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createLoginProfileWithOptions(request, runtime);
    }
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
    async createOIDCProviderWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientIds)) {
            query["ClientIds"] = request.clientIds;
        }
        if (!$dara.isNull(request.description)) {
            query["Description"] = request.description;
        }
        if (!$dara.isNull(request.fingerprints)) {
            query["Fingerprints"] = request.fingerprints;
        }
        if (!$dara.isNull(request.issuanceLimitTime)) {
            query["IssuanceLimitTime"] = request.issuanceLimitTime;
        }
        if (!$dara.isNull(request.issuerUrl)) {
            query["IssuerUrl"] = request.issuerUrl;
        }
        if (!$dara.isNull(request.OIDCProviderName)) {
            query["OIDCProviderName"] = request.OIDCProviderName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateOIDCProvider",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateOIDCProviderResponse({}));
    }
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
    async createOIDCProvider(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createOIDCProviderWithOptions(request, runtime);
    }
    /**
     * Creates an identity provider (IdP) for role-based single sign-on (SSO).
     *
     * @param request - CreateSAMLProviderRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateSAMLProviderResponse
     */
    async createSAMLProviderWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.authnSignAlgo)) {
            query["AuthnSignAlgo"] = request.authnSignAlgo;
        }
        if (!$dara.isNull(request.description)) {
            query["Description"] = request.description;
        }
        if (!$dara.isNull(request.encodedSAMLMetadataDocument)) {
            query["EncodedSAMLMetadataDocument"] = request.encodedSAMLMetadataDocument;
        }
        if (!$dara.isNull(request.SAMLProviderName)) {
            query["SAMLProviderName"] = request.SAMLProviderName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateSAMLProvider",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateSAMLProviderResponse({}));
    }
    /**
     * Creates an identity provider (IdP) for role-based single sign-on (SSO).
     *
     * @param request - CreateSAMLProviderRequest
     * @returns CreateSAMLProviderResponse
     */
    async createSAMLProvider(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createSAMLProviderWithOptions(request, runtime);
    }
    /**
     * Creates a service credential for a Resource Access Management (RAM) user in a specified Alibaba Cloud service.
     *
     * @param request - CreateServiceCredentialRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateServiceCredentialResponse
     */
    async createServiceCredentialWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.credentialAgeDays)) {
            query["CredentialAgeDays"] = request.credentialAgeDays;
        }
        if (!$dara.isNull(request.serviceCredentialName)) {
            query["ServiceCredentialName"] = request.serviceCredentialName;
        }
        if (!$dara.isNull(request.serviceName)) {
            query["ServiceName"] = request.serviceName;
        }
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateServiceCredential",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateServiceCredentialResponse({}));
    }
    /**
     * Creates a service credential for a Resource Access Management (RAM) user in a specified Alibaba Cloud service.
     *
     * @param request - CreateServiceCredentialRequest
     * @returns CreateServiceCredentialResponse
     */
    async createServiceCredential(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createServiceCredentialWithOptions(request, runtime);
    }
    /**
     * Creates a Resource Access Management (RAM) user.
     *
     * @param request - CreateUserRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateUserResponse
     */
    async createUserWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.comments)) {
            query["Comments"] = request.comments;
        }
        if (!$dara.isNull(request.displayName)) {
            query["DisplayName"] = request.displayName;
        }
        if (!$dara.isNull(request.email)) {
            query["Email"] = request.email;
        }
        if (!$dara.isNull(request.mobilePhone)) {
            query["MobilePhone"] = request.mobilePhone;
        }
        if (!$dara.isNull(request.tag)) {
            query["Tag"] = request.tag;
        }
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateUser",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateUserResponse({}));
    }
    /**
     * Creates a Resource Access Management (RAM) user.
     *
     * @param request - CreateUserRequest
     * @returns CreateUserResponse
     */
    async createUser(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createUserWithOptions(request, runtime);
    }
    /**
     * Creates a virtual multi-factor authentication (MFA) device.
     *
     * @param request - CreateVirtualMFADeviceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateVirtualMFADeviceResponse
     */
    async createVirtualMFADeviceWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.virtualMFADeviceName)) {
            query["VirtualMFADeviceName"] = request.virtualMFADeviceName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateVirtualMFADevice",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateVirtualMFADeviceResponse({}));
    }
    /**
     * Creates a virtual multi-factor authentication (MFA) device.
     *
     * @param request - CreateVirtualMFADeviceRequest
     * @returns CreateVirtualMFADeviceResponse
     */
    async createVirtualMFADevice(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createVirtualMFADeviceWithOptions(request, runtime);
    }
    /**
     * Deletes an AccessKey pair for an Alibaba Cloud account or a Resource Access Management (RAM) user.
     *
     * @param request - DeleteAccessKeyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAccessKeyResponse
     */
    async deleteAccessKeyWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.userAccessKeyId)) {
            query["UserAccessKeyId"] = request.userAccessKeyId;
        }
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteAccessKey",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteAccessKeyResponse({}));
    }
    /**
     * Deletes an AccessKey pair for an Alibaba Cloud account or a Resource Access Management (RAM) user.
     *
     * @param request - DeleteAccessKeyRequest
     * @returns DeleteAccessKeyResponse
     */
    async deleteAccessKey(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteAccessKeyWithOptions(request, runtime);
    }
    /**
     * Deletes a specific AccessKey pair that belongs to a Resource Access Management (RAM) user from the recycle bin.
     *
     * @param request - DeleteAccessKeyInRecycleBinRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAccessKeyInRecycleBinResponse
     */
    async deleteAccessKeyInRecycleBinWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.userAccessKeyId)) {
            query["UserAccessKeyId"] = request.userAccessKeyId;
        }
        if (!$dara.isNull(request.userId)) {
            query["UserId"] = request.userId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteAccessKeyInRecycleBin",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteAccessKeyInRecycleBinResponse({}));
    }
    /**
     * Deletes a specific AccessKey pair that belongs to a Resource Access Management (RAM) user from the recycle bin.
     *
     * @param request - DeleteAccessKeyInRecycleBinRequest
     * @returns DeleteAccessKeyInRecycleBinResponse
     */
    async deleteAccessKeyInRecycleBin(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteAccessKeyInRecycleBinWithOptions(request, runtime);
    }
    /**
     * Deletes the application secret of an application.
     *
     * @param request - DeleteAppSecretRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAppSecretResponse
     */
    async deleteAppSecretWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.appId)) {
            query["AppId"] = request.appId;
        }
        if (!$dara.isNull(request.appSecretId)) {
            query["AppSecretId"] = request.appSecretId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteAppSecret",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteAppSecretResponse({}));
    }
    /**
     * Deletes the application secret of an application.
     *
     * @param request - DeleteAppSecretRequest
     * @returns DeleteAppSecretResponse
     */
    async deleteAppSecret(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteAppSecretWithOptions(request, runtime);
    }
    /**
     * Deletes an application.
     *
     * @param request - DeleteApplicationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteApplicationResponse
     */
    async deleteApplicationWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.appId)) {
            query["AppId"] = request.appId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteApplication",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteApplicationResponse({}));
    }
    /**
     * Deletes an application.
     *
     * @param request - DeleteApplicationRequest
     * @returns DeleteApplicationResponse
     */
    async deleteApplication(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteApplicationWithOptions(request, runtime);
    }
    /**
     * Deletes an application assignment record and revokes the access of a specified principal to a specified application.
     *
     * @param request - DeleteApplicationAssignmentRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteApplicationAssignmentResponse
     */
    async deleteApplicationAssignmentWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.appId)) {
            query["AppId"] = request.appId;
        }
        if (!$dara.isNull(request.principalName)) {
            query["PrincipalName"] = request.principalName;
        }
        if (!$dara.isNull(request.principalType)) {
            query["PrincipalType"] = request.principalType;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteApplicationAssignment",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteApplicationAssignmentResponse({}));
    }
    /**
     * Deletes an application assignment record and revokes the access of a specified principal to a specified application.
     *
     * @param request - DeleteApplicationAssignmentRequest
     * @returns DeleteApplicationAssignmentResponse
     */
    async deleteApplicationAssignment(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteApplicationAssignmentWithOptions(request, runtime);
    }
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
    async deleteGroupWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.groupName)) {
            query["GroupName"] = request.groupName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteGroup",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteGroupResponse({}));
    }
    /**
     * Deletes a Resource Access Management (RAM) user group.
     *
     * @remarks
     * Before you delete a RAM user group, make sure that no policies are attached to the group and no RAM users are included in the group.
     *
     * @param request - DeleteGroupRequest
     * @returns DeleteGroupResponse
     */
    async deleteGroup(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteGroupWithOptions(request, runtime);
    }
    /**
     * Disables logon to the console for a Resource Access Management (RAM) user.
     *
     * @param request - DeleteLoginProfileRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteLoginProfileResponse
     */
    async deleteLoginProfileWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteLoginProfile",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteLoginProfileResponse({}));
    }
    /**
     * Disables logon to the console for a Resource Access Management (RAM) user.
     *
     * @param request - DeleteLoginProfileRequest
     * @returns DeleteLoginProfileResponse
     */
    async deleteLoginProfile(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteLoginProfileWithOptions(request, runtime);
    }
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
    async deleteOIDCProviderWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.OIDCProviderName)) {
            query["OIDCProviderName"] = request.OIDCProviderName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteOIDCProvider",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteOIDCProviderResponse({}));
    }
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
    async deleteOIDCProvider(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteOIDCProviderWithOptions(request, runtime);
    }
    /**
     * Deletes the passkey of a user.
     *
     * @param request - DeletePasskeyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeletePasskeyResponse
     */
    async deletePasskeyWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.passkeyId)) {
            query["PasskeyId"] = request.passkeyId;
        }
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeletePasskey",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeletePasskeyResponse({}));
    }
    /**
     * Deletes the passkey of a user.
     *
     * @param request - DeletePasskeyRequest
     * @returns DeletePasskeyResponse
     */
    async deletePasskey(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deletePasskeyWithOptions(request, runtime);
    }
    /**
     * Deletes an identity provider (IdP) for role-based single sign-on (SSO).
     *
     * @param request - DeleteSAMLProviderRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteSAMLProviderResponse
     */
    async deleteSAMLProviderWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.SAMLProviderName)) {
            query["SAMLProviderName"] = request.SAMLProviderName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteSAMLProvider",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteSAMLProviderResponse({}));
    }
    /**
     * Deletes an identity provider (IdP) for role-based single sign-on (SSO).
     *
     * @param request - DeleteSAMLProviderRequest
     * @returns DeleteSAMLProviderResponse
     */
    async deleteSAMLProvider(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteSAMLProviderWithOptions(request, runtime);
    }
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
    async deleteServiceCredentialWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.serviceCredentialId)) {
            query["ServiceCredentialId"] = request.serviceCredentialId;
        }
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteServiceCredential",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteServiceCredentialResponse({}));
    }
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
    async deleteServiceCredential(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteServiceCredentialWithOptions(request, runtime);
    }
    /**
     * Deletes a Resource Access Management (RAM) user.
     *
     * @param request - DeleteUserRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteUserResponse
     */
    async deleteUserWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.userId)) {
            query["UserId"] = request.userId;
        }
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteUser",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteUserResponse({}));
    }
    /**
     * Deletes a Resource Access Management (RAM) user.
     *
     * @param request - DeleteUserRequest
     * @returns DeleteUserResponse
     */
    async deleteUser(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteUserWithOptions(request, runtime);
    }
    /**
     * Deletes a specific Resource Access Management (RAM) user from the recycle bin.
     *
     * @param request - DeleteUserInRecycleBinRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteUserInRecycleBinResponse
     */
    async deleteUserInRecycleBinWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.userId)) {
            query["UserId"] = request.userId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteUserInRecycleBin",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteUserInRecycleBinResponse({}));
    }
    /**
     * Deletes a specific Resource Access Management (RAM) user from the recycle bin.
     *
     * @param request - DeleteUserInRecycleBinRequest
     * @returns DeleteUserInRecycleBinResponse
     */
    async deleteUserInRecycleBin(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteUserInRecycleBinWithOptions(request, runtime);
    }
    /**
     * Deletes a multi-factor authentication (MFA) device.
     *
     * @param request - DeleteVirtualMFADeviceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteVirtualMFADeviceResponse
     */
    async deleteVirtualMFADeviceWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.serialNumber)) {
            query["SerialNumber"] = request.serialNumber;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteVirtualMFADevice",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteVirtualMFADeviceResponse({}));
    }
    /**
     * Deletes a multi-factor authentication (MFA) device.
     *
     * @param request - DeleteVirtualMFADeviceRequest
     * @returns DeleteVirtualMFADeviceResponse
     */
    async deleteVirtualMFADevice(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteVirtualMFADeviceWithOptions(request, runtime);
    }
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
    async deprovisionApplicationWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.appId)) {
            query["AppId"] = request.appId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeprovisionApplication",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeprovisionApplicationResponse({}));
    }
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
    async deprovisionApplication(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deprovisionApplicationWithOptions(request, runtime);
    }
    /**
     * Uninstalls an installed external application.
     *
     * @param request - DeprovisionExternalApplicationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeprovisionExternalApplicationResponse
     */
    async deprovisionExternalApplicationWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.appId)) {
            query["AppId"] = request.appId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeprovisionExternalApplication",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeprovisionExternalApplicationResponse({}));
    }
    /**
     * Uninstalls an installed external application.
     *
     * @param request - DeprovisionExternalApplicationRequest
     * @returns DeprovisionExternalApplicationResponse
     */
    async deprovisionExternalApplication(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deprovisionExternalApplicationWithOptions(request, runtime);
    }
    /**
     * Unbinds and deletes a multi-factor authentication (MFA) device from a Resource Access Management (RAM) user.
     *
     * @param request - DisableVirtualMFARequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DisableVirtualMFAResponse
     */
    async disableVirtualMFAWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DisableVirtualMFA",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DisableVirtualMFAResponse({}));
    }
    /**
     * Unbinds and deletes a multi-factor authentication (MFA) device from a Resource Access Management (RAM) user.
     *
     * @param request - DisableVirtualMFARequest
     * @returns DisableVirtualMFAResponse
     */
    async disableVirtualMFA(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.disableVirtualMFAWithOptions(request, runtime);
    }
    /**
     * Generates the user credential report of an Alibaba Cloud account.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GenerateCredentialReportResponse
     */
    async generateCredentialReportWithOptions(runtime) {
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({});
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GenerateCredentialReport",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GenerateCredentialReportResponse({}));
    }
    /**
     * Generates the user credential report of an Alibaba Cloud account.
     * @returns GenerateCredentialReportResponse
     */
    async generateCredentialReport() {
        let runtime = new $dara.RuntimeOptions({});
        return await this.generateCredentialReportWithOptions(runtime);
    }
    /**
     * Generates a check report for Cloud Governance.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GenerateGovernanceReportResponse
     */
    async generateGovernanceReportWithOptions(runtime) {
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({});
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GenerateGovernanceReport",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GenerateGovernanceReportResponse({}));
    }
    /**
     * Generates a check report for Cloud Governance.
     * @returns GenerateGovernanceReportResponse
     */
    async generateGovernanceReport() {
        let runtime = new $dara.RuntimeOptions({});
        return await this.generateGovernanceReportWithOptions(runtime);
    }
    /**
     * Queries the details of a specified revoked access key that belongs to a Resource Access Management (RAM) user.
     *
     * @param request - GetAccessKeyInfoInRecycleBinRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAccessKeyInfoInRecycleBinResponse
     */
    async getAccessKeyInfoInRecycleBinWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.userAccessKeyId)) {
            query["UserAccessKeyId"] = request.userAccessKeyId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAccessKeyInfoInRecycleBin",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAccessKeyInfoInRecycleBinResponse({}));
    }
    /**
     * Queries the details of a specified revoked access key that belongs to a Resource Access Management (RAM) user.
     *
     * @param request - GetAccessKeyInfoInRecycleBinRequest
     * @returns GetAccessKeyInfoInRecycleBinResponse
     */
    async getAccessKeyInfoInRecycleBin(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAccessKeyInfoInRecycleBinWithOptions(request, runtime);
    }
    /**
     * Queries the last used time of a specified access key.
     *
     * @param request - GetAccessKeyLastUsedRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAccessKeyLastUsedResponse
     */
    async getAccessKeyLastUsedWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.userAccessKeyId)) {
            query["UserAccessKeyId"] = request.userAccessKeyId;
        }
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAccessKeyLastUsed",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAccessKeyLastUsedResponse({}));
    }
    /**
     * Queries the last used time of a specified access key.
     *
     * @param request - GetAccessKeyLastUsedRequest
     * @returns GetAccessKeyLastUsedResponse
     */
    async getAccessKeyLastUsed(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAccessKeyLastUsedWithOptions(request, runtime);
    }
    /**
     * Queries the network access restriction policy of an access key for an Alibaba Cloud account or a Resource Access Management (RAM) user.
     *
     * @param request - GetAccessKeyPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAccessKeyPolicyResponse
     */
    async getAccessKeyPolicyWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.userAccessKeyId)) {
            query["UserAccessKeyId"] = request.userAccessKeyId;
        }
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAccessKeyPolicy",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAccessKeyPolicyResponse({}));
    }
    /**
     * Queries the network access restriction policy of an access key for an Alibaba Cloud account or a Resource Access Management (RAM) user.
     *
     * @param request - GetAccessKeyPolicyRequest
     * @returns GetAccessKeyPolicyResponse
     */
    async getAccessKeyPolicy(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAccessKeyPolicyWithOptions(request, runtime);
    }
    /**
     * Queries the account-level AccessKey network access control policy.
     *
     * @param request - GetAccessKeyPolicyForAccountRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAccessKeyPolicyForAccountResponse
     */
    async getAccessKeyPolicyForAccountWithOptions(request, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({});
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAccessKeyPolicyForAccount",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAccessKeyPolicyForAccountResponse({}));
    }
    /**
     * Queries the account-level AccessKey network access control policy.
     *
     * @param request - GetAccessKeyPolicyForAccountRequest
     * @returns GetAccessKeyPolicyForAccountResponse
     */
    async getAccessKeyPolicyForAccount(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAccessKeyPolicyForAccountWithOptions(request, runtime);
    }
    /**
     * Queries information about the multi-factor authentication (MFA) devices of an Alibaba Cloud account.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAccountMFAInfoResponse
     */
    async getAccountMFAInfoWithOptions(runtime) {
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({});
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAccountMFAInfo",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAccountMFAInfoResponse({}));
    }
    /**
     * Queries information about the multi-factor authentication (MFA) devices of an Alibaba Cloud account.
     * @returns GetAccountMFAInfoResponse
     */
    async getAccountMFAInfo() {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAccountMFAInfoWithOptions(runtime);
    }
    /**
     * Queries the security report of an Alibaba Cloud account.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAccountSecurityPracticeReportResponse
     */
    async getAccountSecurityPracticeReportWithOptions(runtime) {
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({});
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAccountSecurityPracticeReport",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAccountSecurityPracticeReportResponse({}));
    }
    /**
     * Queries the security report of an Alibaba Cloud account.
     * @returns GetAccountSecurityPracticeReportResponse
     */
    async getAccountSecurityPracticeReport() {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAccountSecurityPracticeReportWithOptions(runtime);
    }
    /**
     * Queries the overview information of an Alibaba Cloud account.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAccountSummaryResponse
     */
    async getAccountSummaryWithOptions(runtime) {
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({});
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAccountSummary",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAccountSummaryResponse({}));
    }
    /**
     * Queries the overview information of an Alibaba Cloud account.
     * @returns GetAccountSummaryResponse
     */
    async getAccountSummary() {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAccountSummaryWithOptions(runtime);
    }
    /**
     * Queries the app secret information of a specified application.
     *
     * @param request - GetAppSecretRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppSecretResponse
     */
    async getAppSecretWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.appId)) {
            query["AppId"] = request.appId;
        }
        if (!$dara.isNull(request.appSecretId)) {
            query["AppSecretId"] = request.appSecretId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAppSecret",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAppSecretResponse({}));
    }
    /**
     * Queries the app secret information of a specified application.
     *
     * @param request - GetAppSecretRequest
     * @returns GetAppSecretResponse
     */
    async getAppSecret(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAppSecretWithOptions(request, runtime);
    }
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
    async getApplicationWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.appId)) {
            query["AppId"] = request.appId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetApplication",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetApplicationResponse({}));
    }
    /**
     * Queries the configuration information of a specified application.
     *
     * @remarks
     * This topic provides an example to query the configuration information of the application `472457090344041****`.
     *
     * @param request - GetApplicationRequest
     * @returns GetApplicationResponse
     */
    async getApplication(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getApplicationWithOptions(request, runtime);
    }
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
    async getApplicationProvisionInfoWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.appId)) {
            query["AppId"] = request.appId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetApplicationProvisionInfo",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetApplicationProvisionInfoResponse({}));
    }
    /**
     * Queries the installation information of a specified installed application.
     *
     * @remarks
     * Before you call this operation, the target application must be installed. You can call ProvisionApplication to install the application and use the AppId of the installed application. Calling this operation with an application ID returned by CreateApplication for an application that has not been installed will fail.
     *
     * @param request - GetApplicationProvisionInfoRequest
     * @returns GetApplicationProvisionInfoResponse
     */
    async getApplicationProvisionInfo(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getApplicationProvisionInfoWithOptions(request, runtime);
    }
    /**
     * Queries the user credential report for an Alibaba Cloud account.
     *
     * @param request - GetCredentialReportRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetCredentialReportResponse
     */
    async getCredentialReportWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.maxItems)) {
            query["MaxItems"] = request.maxItems;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetCredentialReport",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetCredentialReportResponse({}));
    }
    /**
     * Queries the user credential report for an Alibaba Cloud account.
     *
     * @param request - GetCredentialReportRequest
     * @returns GetCredentialReportResponse
     */
    async getCredentialReport(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getCredentialReportWithOptions(request, runtime);
    }
    /**
     * Queries the default domain name of an Alibaba Cloud account.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetDefaultDomainResponse
     */
    async getDefaultDomainWithOptions(runtime) {
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({});
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetDefaultDomain",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetDefaultDomainResponse({}));
    }
    /**
     * Queries the default domain name of an Alibaba Cloud account.
     * @returns GetDefaultDomainResponse
     */
    async getDefaultDomain() {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getDefaultDomainWithOptions(runtime);
    }
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
    async getExternalApplicationWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.appId)) {
            query["AppId"] = request.appId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetExternalApplication",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetExternalApplicationResponse({}));
    }
    /**
     * Queries information about an installed external application.
     *
     * @remarks
     * 调用本接口时，`AppId` 必须来自当前账号已安装的外部应用。可先调用 `ListExternalApplications` 获取；如果账号中没有已安装的外部应用，需先调用 `ProvisionExternalApplication` 安装。
     *
     * @param request - GetExternalApplicationRequest
     * @returns GetExternalApplicationResponse
     */
    async getExternalApplication(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getExternalApplicationWithOptions(request, runtime);
    }
    /**
     * Queries the details of a specific check item in an identity and access governance report.
     *
     * @param request - GetGovernanceItemReportRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetGovernanceItemReportResponse
     */
    async getGovernanceItemReportWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.governanceItemType)) {
            query["GovernanceItemType"] = request.governanceItemType;
        }
        if (!$dara.isNull(request.marker)) {
            query["Marker"] = request.marker;
        }
        if (!$dara.isNull(request.maxItems)) {
            query["MaxItems"] = request.maxItems;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetGovernanceItemReport",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetGovernanceItemReportResponse({}));
    }
    /**
     * Queries the details of a specific check item in an identity and access governance report.
     *
     * @param request - GetGovernanceItemReportRequest
     * @returns GetGovernanceItemReportResponse
     */
    async getGovernanceItemReport(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getGovernanceItemReportWithOptions(request, runtime);
    }
    /**
     * Retrieves the current generation status of an identity and access governance report.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetGovernanceReportStatusResponse
     */
    async getGovernanceReportStatusWithOptions(runtime) {
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({});
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetGovernanceReportStatus",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetGovernanceReportStatusResponse({}));
    }
    /**
     * Retrieves the current generation status of an identity and access governance report.
     * @returns GetGovernanceReportStatusResponse
     */
    async getGovernanceReportStatus() {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getGovernanceReportStatusWithOptions(runtime);
    }
    /**
     * Queries the details of a specified user group.
     *
     * @param request - GetGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetGroupResponse
     */
    async getGroupWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.groupName)) {
            query["GroupName"] = request.groupName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetGroup",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetGroupResponse({}));
    }
    /**
     * Queries the details of a specified user group.
     *
     * @param request - GetGroupRequest
     * @returns GetGroupResponse
     */
    async getGroup(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getGroupWithOptions(request, runtime);
    }
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
    async getLoginProfileWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetLoginProfile",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetLoginProfileResponse({}));
    }
    /**
     * Queries the logon information of a specified Resource Access Management (RAM) user.
     *
     * @remarks
     * Before querying, the target RAM user must have a console logon profile (LoginProfile). If the profile is not configured, call CreateLoginProfile to create a logon profile first.
     *
     * @param request - GetLoginProfileRequest
     * @returns GetLoginProfileResponse
     */
    async getLoginProfile(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getLoginProfileWithOptions(request, runtime);
    }
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
    async getOIDCProviderWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.OIDCProviderName)) {
            query["OIDCProviderName"] = request.OIDCProviderName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetOIDCProvider",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetOIDCProviderResponse({}));
    }
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
    async getOIDCProvider(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getOIDCProviderWithOptions(request, runtime);
    }
    /**
     * Queries the password policy for Resource Access Management (RAM) users.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetPasswordPolicyResponse
     */
    async getPasswordPolicyWithOptions(runtime) {
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({});
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetPasswordPolicy",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetPasswordPolicyResponse({}));
    }
    /**
     * Queries the password policy for Resource Access Management (RAM) users.
     * @returns GetPasswordPolicyResponse
     */
    async getPasswordPolicy() {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getPasswordPolicyWithOptions(runtime);
    }
    /**
     * Queries the details of a specified role-based SSO identity provider.
     *
     * @param request - GetSAMLProviderRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetSAMLProviderResponse
     */
    async getSAMLProviderWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.SAMLProviderName)) {
            query["SAMLProviderName"] = request.SAMLProviderName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetSAMLProvider",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetSAMLProviderResponse({}));
    }
    /**
     * Queries the details of a specified role-based SSO identity provider.
     *
     * @param request - GetSAMLProviderRequest
     * @returns GetSAMLProviderResponse
     */
    async getSAMLProvider(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getSAMLProviderWithOptions(request, runtime);
    }
    /**
     * Use `GetSecurityPreference` to query the global security preferences of a RAM user.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetSecurityPreferenceResponse
     */
    async getSecurityPreferenceWithOptions(runtime) {
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({});
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetSecurityPreference",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetSecurityPreferenceResponse({}));
    }
    /**
     * Use `GetSecurityPreference` to query the global security preferences of a RAM user.
     * @returns GetSecurityPreferenceResponse
     */
    async getSecurityPreference() {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getSecurityPreferenceWithOptions(runtime);
    }
    /**
     * Retrieves a specific service credential of a Resource Access Management (RAM) user.
     *
     * @param request - GetServiceCredentialRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetServiceCredentialResponse
     */
    async getServiceCredentialWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.serviceCredentialId)) {
            query["ServiceCredentialId"] = request.serviceCredentialId;
        }
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetServiceCredential",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetServiceCredentialResponse({}));
    }
    /**
     * Retrieves a specific service credential of a Resource Access Management (RAM) user.
     *
     * @param request - GetServiceCredentialRequest
     * @returns GetServiceCredentialResponse
     */
    async getServiceCredential(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getServiceCredentialWithOptions(request, runtime);
    }
    /**
     * Queries the details of a specified Resource Access Management (RAM) user.
     *
     * @param request - GetUserRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetUserResponse
     */
    async getUserWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.userAccessKeyId)) {
            query["UserAccessKeyId"] = request.userAccessKeyId;
        }
        if (!$dara.isNull(request.userId)) {
            query["UserId"] = request.userId;
        }
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetUser",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetUserResponse({}));
    }
    /**
     * Queries the details of a specified Resource Access Management (RAM) user.
     *
     * @param request - GetUserRequest
     * @returns GetUserResponse
     */
    async getUser(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getUserWithOptions(request, runtime);
    }
    /**
     * Queries information about a specific Resource Access Management (RAM) user in the recycle bin.
     *
     * @param request - GetUserInRecycleBinRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetUserInRecycleBinResponse
     */
    async getUserInRecycleBinWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.userAccessKeyId)) {
            query["UserAccessKeyId"] = request.userAccessKeyId;
        }
        if (!$dara.isNull(request.userId)) {
            query["UserId"] = request.userId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetUserInRecycleBin",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetUserInRecycleBinResponse({}));
    }
    /**
     * Queries information about a specific Resource Access Management (RAM) user in the recycle bin.
     *
     * @param request - GetUserInRecycleBinRequest
     * @returns GetUserInRecycleBinResponse
     */
    async getUserInRecycleBin(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getUserInRecycleBinWithOptions(request, runtime);
    }
    /**
     * Queries information about the multi-factor authentication (MFA) device that is bound to a Resource Access Management (RAM) user.
     *
     * @param request - GetUserMFAInfoRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetUserMFAInfoResponse
     */
    async getUserMFAInfoWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetUserMFAInfo",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetUserMFAInfoResponse({}));
    }
    /**
     * Queries information about the multi-factor authentication (MFA) device that is bound to a Resource Access Management (RAM) user.
     *
     * @param request - GetUserMFAInfoRequest
     * @returns GetUserMFAInfoResponse
     */
    async getUserMFAInfo(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getUserMFAInfoWithOptions(request, runtime);
    }
    /**
     * Queries the configurations of user-based single sign-on (SSO).
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetUserSsoSettingsResponse
     */
    async getUserSsoSettingsWithOptions(runtime) {
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({});
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetUserSsoSettings",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetUserSsoSettingsResponse({}));
    }
    /**
     * Queries the configurations of user-based single sign-on (SSO).
     * @returns GetUserSsoSettingsResponse
     */
    async getUserSsoSettings() {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getUserSsoSettingsWithOptions(runtime);
    }
    /**
     * Queries the status of the secure phone or security email address of a Resource Access Management (RAM) user.
     *
     * @param request - GetVerificationInfoRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetVerificationInfoResponse
     */
    async getVerificationInfoWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetVerificationInfo",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetVerificationInfoResponse({}));
    }
    /**
     * Queries the status of the secure phone or security email address of a Resource Access Management (RAM) user.
     *
     * @param request - GetVerificationInfoRequest
     * @returns GetVerificationInfoResponse
     */
    async getVerificationInfo(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getVerificationInfoWithOptions(request, runtime);
    }
    /**
     * Queries the AccessKey pairs of an Alibaba Cloud account or a Resource Access Management (RAM) user.
     *
     * @param request - ListAccessKeysRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAccessKeysResponse
     */
    async listAccessKeysWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListAccessKeys",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListAccessKeysResponse({}));
    }
    /**
     * Queries the AccessKey pairs of an Alibaba Cloud account or a Resource Access Management (RAM) user.
     *
     * @param request - ListAccessKeysRequest
     * @returns ListAccessKeysResponse
     */
    async listAccessKeys(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listAccessKeysWithOptions(request, runtime);
    }
    /**
     * Queries the AccessKey pairs of a specific Resource Access Management (RAM) user in the recycle bin.
     *
     * @param request - ListAccessKeysInRecycleBinRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAccessKeysInRecycleBinResponse
     */
    async listAccessKeysInRecycleBinWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.userId)) {
            query["UserId"] = request.userId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListAccessKeysInRecycleBin",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListAccessKeysInRecycleBinResponse({}));
    }
    /**
     * Queries the AccessKey pairs of a specific Resource Access Management (RAM) user in the recycle bin.
     *
     * @param request - ListAccessKeysInRecycleBinRequest
     * @returns ListAccessKeysInRecycleBinResponse
     */
    async listAccessKeysInRecycleBin(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listAccessKeysInRecycleBinWithOptions(request, runtime);
    }
    /**
     * Queries the secret IDs of an application.
     *
     * @param request - ListAppSecretIdsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppSecretIdsResponse
     */
    async listAppSecretIdsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.appId)) {
            query["AppId"] = request.appId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListAppSecretIds",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListAppSecretIdsResponse({}));
    }
    /**
     * Queries the secret IDs of an application.
     *
     * @param request - ListAppSecretIdsRequest
     * @returns ListAppSecretIdsResponse
     */
    async listAppSecretIds(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listAppSecretIdsWithOptions(request, runtime);
    }
    /**
     * Lists the assignment records of a specified application.
     *
     * @param request - ListApplicationAssignmentsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListApplicationAssignmentsResponse
     */
    async listApplicationAssignmentsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.appId)) {
            query["AppId"] = request.appId;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListApplicationAssignments",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListApplicationAssignmentsResponse({}));
    }
    /**
     * Lists the assignment records of a specified application.
     *
     * @param request - ListApplicationAssignmentsRequest
     * @returns ListApplicationAssignmentsResponse
     */
    async listApplicationAssignments(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listApplicationAssignmentsWithOptions(request, runtime);
    }
    /**
     * Lists the application assignment records for a specified identity principal.
     *
     * @param request - ListApplicationAssignmentsForPrincipalRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListApplicationAssignmentsForPrincipalResponse
     */
    async listApplicationAssignmentsForPrincipalWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.principalName)) {
            query["PrincipalName"] = request.principalName;
        }
        if (!$dara.isNull(request.principalType)) {
            query["PrincipalType"] = request.principalType;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListApplicationAssignmentsForPrincipal",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListApplicationAssignmentsForPrincipalResponse({}));
    }
    /**
     * Lists the application assignment records for a specified identity principal.
     *
     * @param request - ListApplicationAssignmentsForPrincipalRequest
     * @returns ListApplicationAssignmentsForPrincipalResponse
     */
    async listApplicationAssignmentsForPrincipal(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listApplicationAssignmentsForPrincipalWithOptions(request, runtime);
    }
    /**
     * Queries the installation information of all installed applications.
     *
     * @param request - ListApplicationProvisionInfosRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListApplicationProvisionInfosResponse
     */
    async listApplicationProvisionInfosWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.sourceType)) {
            query["SourceType"] = request.sourceType;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListApplicationProvisionInfos",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListApplicationProvisionInfosResponse({}));
    }
    /**
     * Queries the installation information of all installed applications.
     *
     * @param request - ListApplicationProvisionInfosRequest
     * @returns ListApplicationProvisionInfosResponse
     */
    async listApplicationProvisionInfos(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listApplicationProvisionInfosWithOptions(request, runtime);
    }
    /**
     * Lists the applications.
     *
     * @remarks
     * This topic provides an example of querying the applications within the current account. The response indicates that the current account has only one application named `myapp`.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListApplicationsResponse
     */
    async listApplicationsWithOptions(runtime) {
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({});
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListApplications",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListApplicationsResponse({}));
    }
    /**
     * Lists the applications.
     *
     * @remarks
     * This topic provides an example of querying the applications within the current account. The response indicates that the current account has only one application named `myapp`.
     * @returns ListApplicationsResponse
     */
    async listApplications() {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listApplicationsWithOptions(runtime);
    }
    /**
     * Queries information about all installed external applications.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListExternalApplicationsResponse
     */
    async listExternalApplicationsWithOptions(runtime) {
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({});
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListExternalApplications",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListExternalApplicationsResponse({}));
    }
    /**
     * Queries information about all installed external applications.
     * @returns ListExternalApplicationsResponse
     */
    async listExternalApplications() {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listExternalApplicationsWithOptions(runtime);
    }
    /**
     * Queries Resource Access Management (RAM) user groups.
     *
     * @param request - ListGroupsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListGroupsResponse
     */
    async listGroupsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.marker)) {
            query["Marker"] = request.marker;
        }
        if (!$dara.isNull(request.maxItems)) {
            query["MaxItems"] = request.maxItems;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListGroups",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListGroupsResponse({}));
    }
    /**
     * Queries Resource Access Management (RAM) user groups.
     *
     * @param request - ListGroupsRequest
     * @returns ListGroupsResponse
     */
    async listGroups(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listGroupsWithOptions(request, runtime);
    }
    /**
     * Queries the Resource Access Management (RAM) user groups to which a RAM user belongs.
     *
     * @param request - ListGroupsForUserRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListGroupsForUserResponse
     */
    async listGroupsForUserWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListGroupsForUser",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListGroupsForUserResponse({}));
    }
    /**
     * Queries the Resource Access Management (RAM) user groups to which a RAM user belongs.
     *
     * @param request - ListGroupsForUserRequest
     * @returns ListGroupsForUserResponse
     */
    async listGroupsForUser(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listGroupsForUserWithOptions(request, runtime);
    }
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
    async listOIDCProvidersWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.marker)) {
            query["Marker"] = request.marker;
        }
        if (!$dara.isNull(request.maxItems)) {
            query["MaxItems"] = request.maxItems;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListOIDCProviders",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListOIDCProvidersResponse({}));
    }
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
    async listOIDCProviders(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listOIDCProvidersWithOptions(request, runtime);
    }
    /**
     * Queries the information about the passkeys that are bound to a Resource Access Management (RAM) user.
     *
     * @param request - ListPasskeysRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListPasskeysResponse
     */
    async listPasskeysWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListPasskeys",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListPasskeysResponse({}));
    }
    /**
     * Queries the information about the passkeys that are bound to a Resource Access Management (RAM) user.
     *
     * @param request - ListPasskeysRequest
     * @returns ListPasskeysResponse
     */
    async listPasskeys(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listPasskeysWithOptions(request, runtime);
    }
    /**
     * Queries predefined application permissions.
     *
     * @param request - ListPredefinedScopesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListPredefinedScopesResponse
     */
    async listPredefinedScopesWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.appType)) {
            query["AppType"] = request.appType;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListPredefinedScopes",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListPredefinedScopesResponse({}));
    }
    /**
     * Queries predefined application permissions.
     *
     * @param request - ListPredefinedScopesRequest
     * @returns ListPredefinedScopesResponse
     */
    async listPredefinedScopes(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listPredefinedScopesWithOptions(request, runtime);
    }
    /**
     * Queries all metric values in the most recent governance check.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListRecentGovernanceMetricsResponse
     */
    async listRecentGovernanceMetricsWithOptions(runtime) {
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({});
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListRecentGovernanceMetrics",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListRecentGovernanceMetricsResponse({}));
    }
    /**
     * Queries all metric values in the most recent governance check.
     * @returns ListRecentGovernanceMetricsResponse
     */
    async listRecentGovernanceMetrics() {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listRecentGovernanceMetricsWithOptions(runtime);
    }
    /**
     * Queries information about identity providers (IdPs) for role-based single sign-on (SSO).
     *
     * @param request - ListSAMLProvidersRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListSAMLProvidersResponse
     */
    async listSAMLProvidersWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.marker)) {
            query["Marker"] = request.marker;
        }
        if (!$dara.isNull(request.maxItems)) {
            query["MaxItems"] = request.maxItems;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListSAMLProviders",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListSAMLProvidersResponse({}));
    }
    /**
     * Queries information about identity providers (IdPs) for role-based single sign-on (SSO).
     *
     * @param request - ListSAMLProvidersRequest
     * @returns ListSAMLProvidersResponse
     */
    async listSAMLProviders(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listSAMLProvidersWithOptions(request, runtime);
    }
    /**
     * Retrieves the list of service credentials for a Resource Access Management (RAM) user or all Resource Access Management (RAM) users under an Alibaba Cloud account.
     *
     * @param request - ListServiceCredentialsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListServiceCredentialsResponse
     */
    async listServiceCredentialsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.allUsers)) {
            query["AllUsers"] = request.allUsers;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.serviceName)) {
            query["ServiceName"] = request.serviceName;
        }
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListServiceCredentials",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListServiceCredentialsResponse({}));
    }
    /**
     * Retrieves the list of service credentials for a Resource Access Management (RAM) user or all Resource Access Management (RAM) users under an Alibaba Cloud account.
     *
     * @param request - ListServiceCredentialsRequest
     * @returns ListServiceCredentialsResponse
     */
    async listServiceCredentials(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listServiceCredentialsWithOptions(request, runtime);
    }
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
    async listTagResourcesWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.resourceId)) {
            query["ResourceId"] = request.resourceId;
        }
        if (!$dara.isNull(request.resourcePrincipalName)) {
            query["ResourcePrincipalName"] = request.resourcePrincipalName;
        }
        if (!$dara.isNull(request.resourceType)) {
            query["ResourceType"] = request.resourceType;
        }
        if (!$dara.isNull(request.tag)) {
            query["Tag"] = request.tag;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListTagResources",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListTagResourcesResponse({}));
    }
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
    async listTagResources(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listTagResourcesWithOptions(request, runtime);
    }
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
    async listUserBasicInfosWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.marker)) {
            query["Marker"] = request.marker;
        }
        if (!$dara.isNull(request.maxItems)) {
            query["MaxItems"] = request.maxItems;
        }
        if (!$dara.isNull(request.status)) {
            query["Status"] = request.status;
        }
        if (!$dara.isNull(request.tag)) {
            query["Tag"] = request.tag;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListUserBasicInfos",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListUserBasicInfosResponse({}));
    }
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
    async listUserBasicInfos(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listUserBasicInfosWithOptions(request, runtime);
    }
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
    async listUsersWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.marker)) {
            query["Marker"] = request.marker;
        }
        if (!$dara.isNull(request.maxItems)) {
            query["MaxItems"] = request.maxItems;
        }
        if (!$dara.isNull(request.status)) {
            query["Status"] = request.status;
        }
        if (!$dara.isNull(request.tag)) {
            query["Tag"] = request.tag;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListUsers",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListUsersResponse({}));
    }
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
    async listUsers(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listUsersWithOptions(request, runtime);
    }
    /**
     * Queries Resource Access Management (RAM) users in a RAM user group.
     *
     * @param request - ListUsersForGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListUsersForGroupResponse
     */
    async listUsersForGroupWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.groupName)) {
            query["GroupName"] = request.groupName;
        }
        if (!$dara.isNull(request.marker)) {
            query["Marker"] = request.marker;
        }
        if (!$dara.isNull(request.maxItems)) {
            query["MaxItems"] = request.maxItems;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListUsersForGroup",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListUsersForGroupResponse({}));
    }
    /**
     * Queries Resource Access Management (RAM) users in a RAM user group.
     *
     * @param request - ListUsersForGroupRequest
     * @returns ListUsersForGroupResponse
     */
    async listUsersForGroup(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listUsersForGroupWithOptions(request, runtime);
    }
    /**
     * Queries the basic information about all Resource Access Management (RAM) users in the recycle bin.
     *
     * @param request - ListUsersInRecycleBinRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListUsersInRecycleBinResponse
     */
    async listUsersInRecycleBinWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.filter)) {
            query["Filter"] = request.filter;
        }
        if (!$dara.isNull(request.marker)) {
            query["Marker"] = request.marker;
        }
        if (!$dara.isNull(request.maxItems)) {
            query["MaxItems"] = request.maxItems;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListUsersInRecycleBin",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListUsersInRecycleBinResponse({}));
    }
    /**
     * Queries the basic information about all Resource Access Management (RAM) users in the recycle bin.
     *
     * @param request - ListUsersInRecycleBinRequest
     * @returns ListUsersInRecycleBinResponse
     */
    async listUsersInRecycleBin(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listUsersInRecycleBinWithOptions(request, runtime);
    }
    /**
     * Queries the list of multi-factor authentication devices.
     *
     * @param request - ListVirtualMFADevicesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListVirtualMFADevicesResponse
     */
    async listVirtualMFADevicesWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.marker)) {
            query["Marker"] = request.marker;
        }
        if (!$dara.isNull(request.maxItems)) {
            query["MaxItems"] = request.maxItems;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListVirtualMFADevices",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListVirtualMFADevicesResponse({}));
    }
    /**
     * Queries the list of multi-factor authentication devices.
     *
     * @param request - ListVirtualMFADevicesRequest
     * @returns ListVirtualMFADevicesResponse
     */
    async listVirtualMFADevices(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listVirtualMFADevicesWithOptions(request, runtime);
    }
    /**
     * Installs an application.
     *
     * @param request - ProvisionApplicationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ProvisionApplicationResponse
     */
    async provisionApplicationWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.appId)) {
            query["AppId"] = request.appId;
        }
        if (!$dara.isNull(request.scopes)) {
            query["Scopes"] = request.scopes;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ProvisionApplication",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ProvisionApplicationResponse({}));
    }
    /**
     * Installs an application.
     *
     * @param request - ProvisionApplicationRequest
     * @returns ProvisionApplicationResponse
     */
    async provisionApplication(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.provisionApplicationWithOptions(request, runtime);
    }
    /**
     * Installs an external application.
     *
     * @param request - ProvisionExternalApplicationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ProvisionExternalApplicationResponse
     */
    async provisionExternalApplicationWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.appId)) {
            query["AppId"] = request.appId;
        }
        if (!$dara.isNull(request.scopes)) {
            query["Scopes"] = request.scopes;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ProvisionExternalApplication",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ProvisionExternalApplicationResponse({}));
    }
    /**
     * Installs an external application.
     *
     * @param request - ProvisionExternalApplicationRequest
     * @returns ProvisionExternalApplicationResponse
     */
    async provisionExternalApplication(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.provisionExternalApplicationWithOptions(request, runtime);
    }
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
    async removeClientIdFromOIDCProviderWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientId)) {
            query["ClientId"] = request.clientId;
        }
        if (!$dara.isNull(request.OIDCProviderName)) {
            query["OIDCProviderName"] = request.OIDCProviderName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "RemoveClientIdFromOIDCProvider",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.RemoveClientIdFromOIDCProviderResponse({}));
    }
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
    async removeClientIdFromOIDCProvider(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.removeClientIdFromOIDCProviderWithOptions(request, runtime);
    }
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
    async removeFingerprintFromOIDCProviderWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.fingerprint)) {
            query["Fingerprint"] = request.fingerprint;
        }
        if (!$dara.isNull(request.OIDCProviderName)) {
            query["OIDCProviderName"] = request.OIDCProviderName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "RemoveFingerprintFromOIDCProvider",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.RemoveFingerprintFromOIDCProviderResponse({}));
    }
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
    async removeFingerprintFromOIDCProvider(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.removeFingerprintFromOIDCProviderWithOptions(request, runtime);
    }
    /**
     * Removes a Resource Access Management (RAM) user from a RAM user group.
     *
     * @param request - RemoveUserFromGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RemoveUserFromGroupResponse
     */
    async removeUserFromGroupWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.groupName)) {
            query["GroupName"] = request.groupName;
        }
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "RemoveUserFromGroup",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.RemoveUserFromGroupResponse({}));
    }
    /**
     * Removes a Resource Access Management (RAM) user from a RAM user group.
     *
     * @param request - RemoveUserFromGroupRequest
     * @returns RemoveUserFromGroupResponse
     */
    async removeUserFromGroup(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.removeUserFromGroupWithOptions(request, runtime);
    }
    /**
     * Restores a specific AccessKey pair that belongs to a Resource Access Management (RAM) user from the recycle bin.
     *
     * @param request - RestoreAccessKeyFromRecycleBinRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RestoreAccessKeyFromRecycleBinResponse
     */
    async restoreAccessKeyFromRecycleBinWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.userAccessKeyId)) {
            query["UserAccessKeyId"] = request.userAccessKeyId;
        }
        if (!$dara.isNull(request.userId)) {
            query["UserId"] = request.userId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "RestoreAccessKeyFromRecycleBin",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.RestoreAccessKeyFromRecycleBinResponse({}));
    }
    /**
     * Restores a specific AccessKey pair that belongs to a Resource Access Management (RAM) user from the recycle bin.
     *
     * @param request - RestoreAccessKeyFromRecycleBinRequest
     * @returns RestoreAccessKeyFromRecycleBinResponse
     */
    async restoreAccessKeyFromRecycleBin(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.restoreAccessKeyFromRecycleBinWithOptions(request, runtime);
    }
    /**
     * Restores a specific Resource Access Management (RAM) user from the recycle bin.
     *
     * @param request - RestoreUserFromRecycleBinRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RestoreUserFromRecycleBinResponse
     */
    async restoreUserFromRecycleBinWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.userId)) {
            query["UserId"] = request.userId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "RestoreUserFromRecycleBin",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.RestoreUserFromRecycleBinResponse({}));
    }
    /**
     * Restores a specific Resource Access Management (RAM) user from the recycle bin.
     *
     * @param request - RestoreUserFromRecycleBinRequest
     * @returns RestoreUserFromRecycleBinResponse
     */
    async restoreUserFromRecycleBin(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.restoreUserFromRecycleBinWithOptions(request, runtime);
    }
    /**
     * Settings the network access restriction policy for an access key of an Alibaba Cloud account or a Resource Access Management (RAM) user.
     *
     * @param request - SetAccessKeyPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SetAccessKeyPolicyResponse
     */
    async setAccessKeyPolicyWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.accessKeyPolicy)) {
            query["AccessKeyPolicy"] = request.accessKeyPolicy;
        }
        if (!$dara.isNull(request.userAccessKeyId)) {
            query["UserAccessKeyId"] = request.userAccessKeyId;
        }
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "SetAccessKeyPolicy",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.SetAccessKeyPolicyResponse({}));
    }
    /**
     * Settings the network access restriction policy for an access key of an Alibaba Cloud account or a Resource Access Management (RAM) user.
     *
     * @param request - SetAccessKeyPolicyRequest
     * @returns SetAccessKeyPolicyResponse
     */
    async setAccessKeyPolicy(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.setAccessKeyPolicyWithOptions(request, runtime);
    }
    /**
     * Sets the account-level AccessKey network access control policy.
     *
     * @param request - SetAccessKeyPolicyForAccountRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SetAccessKeyPolicyForAccountResponse
     */
    async setAccessKeyPolicyForAccountWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.accessKeyPolicy)) {
            query["AccessKeyPolicy"] = request.accessKeyPolicy;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "SetAccessKeyPolicyForAccount",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.SetAccessKeyPolicyForAccountResponse({}));
    }
    /**
     * Sets the account-level AccessKey network access control policy.
     *
     * @param request - SetAccessKeyPolicyForAccountRequest
     * @returns SetAccessKeyPolicyForAccountResponse
     */
    async setAccessKeyPolicyForAccount(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.setAccessKeyPolicyForAccountWithOptions(request, runtime);
    }
    /**
     * Configures the default domain name for an Alibaba Cloud account.
     *
     * @param request - SetDefaultDomainRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SetDefaultDomainResponse
     */
    async setDefaultDomainWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.defaultDomainName)) {
            query["DefaultDomainName"] = request.defaultDomainName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "SetDefaultDomain",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.SetDefaultDomainResponse({}));
    }
    /**
     * Configures the default domain name for an Alibaba Cloud account.
     *
     * @param request - SetDefaultDomainRequest
     * @returns SetDefaultDomainResponse
     */
    async setDefaultDomain(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.setDefaultDomainWithOptions(request, runtime);
    }
    /**
     * Set the password policy for Resource Access Management (RAM) users.
     *
     * @param request - SetPasswordPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SetPasswordPolicyResponse
     */
    async setPasswordPolicyWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.hardExpire)) {
            query["HardExpire"] = request.hardExpire;
        }
        if (!$dara.isNull(request.initialPasswordAge)) {
            query["InitialPasswordAge"] = request.initialPasswordAge;
        }
        if (!$dara.isNull(request.interceptRiskPasswordOnApi)) {
            query["InterceptRiskPasswordOnApi"] = request.interceptRiskPasswordOnApi;
        }
        if (!$dara.isNull(request.maxLoginAttemps)) {
            query["MaxLoginAttemps"] = request.maxLoginAttemps;
        }
        if (!$dara.isNull(request.maxPasswordAge)) {
            query["MaxPasswordAge"] = request.maxPasswordAge;
        }
        if (!$dara.isNull(request.minimumPasswordDifferentCharacter)) {
            query["MinimumPasswordDifferentCharacter"] = request.minimumPasswordDifferentCharacter;
        }
        if (!$dara.isNull(request.minimumPasswordLength)) {
            query["MinimumPasswordLength"] = request.minimumPasswordLength;
        }
        if (!$dara.isNull(request.passwordNotContainUserName)) {
            query["PasswordNotContainUserName"] = request.passwordNotContainUserName;
        }
        if (!$dara.isNull(request.passwordReusePrevention)) {
            query["PasswordReusePrevention"] = request.passwordReusePrevention;
        }
        if (!$dara.isNull(request.requireLowercaseCharacters)) {
            query["RequireLowercaseCharacters"] = request.requireLowercaseCharacters;
        }
        if (!$dara.isNull(request.requireNumbers)) {
            query["RequireNumbers"] = request.requireNumbers;
        }
        if (!$dara.isNull(request.requireSymbols)) {
            query["RequireSymbols"] = request.requireSymbols;
        }
        if (!$dara.isNull(request.requireUppercaseCharacters)) {
            query["RequireUppercaseCharacters"] = request.requireUppercaseCharacters;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "SetPasswordPolicy",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.SetPasswordPolicyResponse({}));
    }
    /**
     * Set the password policy for Resource Access Management (RAM) users.
     *
     * @param request - SetPasswordPolicyRequest
     * @returns SetPasswordPolicyResponse
     */
    async setPasswordPolicy(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.setPasswordPolicyWithOptions(request, runtime);
    }
    /**
     * Configure the global security preferences for a RAM user.
     *
     * @param tmpReq - SetSecurityPreferenceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SetSecurityPreferenceResponse
     */
    async setSecurityPreferenceWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.SetSecurityPreferenceShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.verificationTypes)) {
            request.verificationTypesShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.verificationTypes, "VerificationTypes", "json");
        }
        let query = {};
        if (!$dara.isNull(request.allowUserToChangePassword)) {
            query["AllowUserToChangePassword"] = request.allowUserToChangePassword;
        }
        if (!$dara.isNull(request.allowUserToLoginWithPasskey)) {
            query["AllowUserToLoginWithPasskey"] = request.allowUserToLoginWithPasskey;
        }
        if (!$dara.isNull(request.allowUserToManageAccessKeys)) {
            query["AllowUserToManageAccessKeys"] = request.allowUserToManageAccessKeys;
        }
        if (!$dara.isNull(request.allowUserToManageMFADevices)) {
            query["AllowUserToManageMFADevices"] = request.allowUserToManageMFADevices;
        }
        if (!$dara.isNull(request.allowUserToManagePersonalDingTalk)) {
            query["AllowUserToManagePersonalDingTalk"] = request.allowUserToManagePersonalDingTalk;
        }
        if (!$dara.isNull(request.allowUserToManageServiceCredentials)) {
            query["AllowUserToManageServiceCredentials"] = request.allowUserToManageServiceCredentials;
        }
        if (!$dara.isNull(request.enableSaveMFATicket)) {
            query["EnableSaveMFATicket"] = request.enableSaveMFATicket;
        }
        if (!$dara.isNull(request.loginNetworkMasks)) {
            query["LoginNetworkMasks"] = request.loginNetworkMasks;
        }
        if (!$dara.isNull(request.loginSessionDuration)) {
            query["LoginSessionDuration"] = request.loginSessionDuration;
        }
        if (!$dara.isNull(request.MFAOperationForLogin)) {
            query["MFAOperationForLogin"] = request.MFAOperationForLogin;
        }
        if (!$dara.isNull(request.maxIdleDaysForAccessKeys)) {
            query["MaxIdleDaysForAccessKeys"] = request.maxIdleDaysForAccessKeys;
        }
        if (!$dara.isNull(request.maxIdleDaysForUsers)) {
            query["MaxIdleDaysForUsers"] = request.maxIdleDaysForUsers;
        }
        if (!$dara.isNull(request.operationForRiskLogin)) {
            query["OperationForRiskLogin"] = request.operationForRiskLogin;
        }
        if (!$dara.isNull(request.verificationTypesShrink)) {
            query["VerificationTypes"] = request.verificationTypesShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "SetSecurityPreference",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.SetSecurityPreferenceResponse({}));
    }
    /**
     * Configure the global security preferences for a RAM user.
     *
     * @param request - SetSecurityPreferenceRequest
     * @returns SetSecurityPreferenceResponse
     */
    async setSecurityPreference(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.setSecurityPreferenceWithOptions(request, runtime);
    }
    /**
     * Configures information about user-based single sign-on (SSO).
     *
     * @param request - SetUserSsoSettingsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SetUserSsoSettingsResponse
     */
    async setUserSsoSettingsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.authnSignAlgo)) {
            query["AuthnSignAlgo"] = request.authnSignAlgo;
        }
        if (!$dara.isNull(request.auxiliaryDomain)) {
            query["AuxiliaryDomain"] = request.auxiliaryDomain;
        }
        if (!$dara.isNull(request.metadataDocument)) {
            query["MetadataDocument"] = request.metadataDocument;
        }
        if (!$dara.isNull(request.ssoEnabled)) {
            query["SsoEnabled"] = request.ssoEnabled;
        }
        if (!$dara.isNull(request.ssoLoginWithDomain)) {
            query["SsoLoginWithDomain"] = request.ssoLoginWithDomain;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "SetUserSsoSettings",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.SetUserSsoSettingsResponse({}));
    }
    /**
     * Configures information about user-based single sign-on (SSO).
     *
     * @param request - SetUserSsoSettingsRequest
     * @returns SetUserSsoSettingsResponse
     */
    async setUserSsoSettings(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.setUserSsoSettingsWithOptions(request, runtime);
    }
    /**
     * Attaches a secure phone or security email address to a Resource Access Management (RAM) user.
     *
     * @param request - SetVerificationInfoRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SetVerificationInfoResponse
     */
    async setVerificationInfoWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.email)) {
            query["Email"] = request.email;
        }
        if (!$dara.isNull(request.mobilePhone)) {
            query["MobilePhone"] = request.mobilePhone;
        }
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        if (!$dara.isNull(request.verifyType)) {
            query["VerifyType"] = request.verifyType;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "SetVerificationInfo",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.SetVerificationInfoResponse({}));
    }
    /**
     * Attaches a secure phone or security email address to a Resource Access Management (RAM) user.
     *
     * @param request - SetVerificationInfoRequest
     * @returns SetVerificationInfoResponse
     */
    async setVerificationInfo(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.setVerificationInfoWithOptions(request, runtime);
    }
    /**
     * Adds tags to resources.
     *
     * @param request - TagResourcesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns TagResourcesResponse
     */
    async tagResourcesWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.resourceId)) {
            query["ResourceId"] = request.resourceId;
        }
        if (!$dara.isNull(request.resourcePrincipalName)) {
            query["ResourcePrincipalName"] = request.resourcePrincipalName;
        }
        if (!$dara.isNull(request.resourceType)) {
            query["ResourceType"] = request.resourceType;
        }
        if (!$dara.isNull(request.tag)) {
            query["Tag"] = request.tag;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "TagResources",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
    }
    /**
     * Adds tags to resources.
     *
     * @param request - TagResourcesRequest
     * @returns TagResourcesResponse
     */
    async tagResources(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.tagResourcesWithOptions(request, runtime);
    }
    /**
     * Unbinds a multi-factor authentication (MFA) device from a Resource Access Management (RAM) user.
     *
     * @param request - UnbindMFADeviceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UnbindMFADeviceResponse
     */
    async unbindMFADeviceWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UnbindMFADevice",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UnbindMFADeviceResponse({}));
    }
    /**
     * Unbinds a multi-factor authentication (MFA) device from a Resource Access Management (RAM) user.
     *
     * @param request - UnbindMFADeviceRequest
     * @returns UnbindMFADeviceResponse
     */
    async unbindMFADevice(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.unbindMFADeviceWithOptions(request, runtime);
    }
    /**
     * Unbinds a secure phone or security email address from a Resource Access Management (RAM) user.
     *
     * @param request - UnbindVerificationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UnbindVerificationResponse
     */
    async unbindVerificationWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.email)) {
            query["Email"] = request.email;
        }
        if (!$dara.isNull(request.mobilePhone)) {
            query["MobilePhone"] = request.mobilePhone;
        }
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        if (!$dara.isNull(request.verifyType)) {
            query["VerifyType"] = request.verifyType;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UnbindVerification",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UnbindVerificationResponse({}));
    }
    /**
     * Unbinds a secure phone or security email address from a Resource Access Management (RAM) user.
     *
     * @param request - UnbindVerificationRequest
     * @returns UnbindVerificationResponse
     */
    async unbindVerification(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.unbindVerificationWithOptions(request, runtime);
    }
    /**
     * Removes tags from a resource.
     *
     * @param request - UntagResourcesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UntagResourcesResponse
     */
    async untagResourcesWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.all)) {
            query["All"] = request.all;
        }
        if (!$dara.isNull(request.resourceId)) {
            query["ResourceId"] = request.resourceId;
        }
        if (!$dara.isNull(request.resourcePrincipalName)) {
            query["ResourcePrincipalName"] = request.resourcePrincipalName;
        }
        if (!$dara.isNull(request.resourceType)) {
            query["ResourceType"] = request.resourceType;
        }
        if (!$dara.isNull(request.tagKey)) {
            query["TagKey"] = request.tagKey;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UntagResources",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UntagResourcesResponse({}));
    }
    /**
     * Removes tags from a resource.
     *
     * @param request - UntagResourcesRequest
     * @returns UntagResourcesResponse
     */
    async untagResources(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.untagResourcesWithOptions(request, runtime);
    }
    /**
     * Modifies the status of an AccessKey pair for an Alibaba Cloud account or a Resource Access Management (RAM) user.
     *
     * @param request - UpdateAccessKeyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateAccessKeyResponse
     */
    async updateAccessKeyWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.status)) {
            query["Status"] = request.status;
        }
        if (!$dara.isNull(request.userAccessKeyId)) {
            query["UserAccessKeyId"] = request.userAccessKeyId;
        }
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateAccessKey",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateAccessKeyResponse({}));
    }
    /**
     * Modifies the status of an AccessKey pair for an Alibaba Cloud account or a Resource Access Management (RAM) user.
     *
     * @param request - UpdateAccessKeyRequest
     * @returns UpdateAccessKeyResponse
     */
    async updateAccessKey(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateAccessKeyWithOptions(request, runtime);
    }
    /**
     * Modifies the configuration information of a specified application.
     *
     * @param request - UpdateApplicationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateApplicationResponse
     */
    async updateApplicationWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.appId)) {
            query["AppId"] = request.appId;
        }
        if (!$dara.isNull(request.newAccessTokenValidity)) {
            query["NewAccessTokenValidity"] = request.newAccessTokenValidity;
        }
        if (!$dara.isNull(request.newAssignmentType)) {
            query["NewAssignmentType"] = request.newAssignmentType;
        }
        if (!$dara.isNull(request.newDisplayName)) {
            query["NewDisplayName"] = request.newDisplayName;
        }
        if (!$dara.isNull(request.newIsMultiTenant)) {
            query["NewIsMultiTenant"] = request.newIsMultiTenant;
        }
        if (!$dara.isNull(request.newNeedPrincipalConsent)) {
            query["NewNeedPrincipalConsent"] = request.newNeedPrincipalConsent;
        }
        if (!$dara.isNull(request.newPredefinedScopes)) {
            query["NewPredefinedScopes"] = request.newPredefinedScopes;
        }
        if (!$dara.isNull(request.newRedirectUris)) {
            query["NewRedirectUris"] = request.newRedirectUris;
        }
        if (!$dara.isNull(request.newRefreshTokenValidity)) {
            query["NewRefreshTokenValidity"] = request.newRefreshTokenValidity;
        }
        if (!$dara.isNull(request.newRequiredScopes)) {
            query["NewRequiredScopes"] = request.newRequiredScopes;
        }
        if (!$dara.isNull(request.newSecretRequired)) {
            query["NewSecretRequired"] = request.newSecretRequired;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateApplication",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateApplicationResponse({}));
    }
    /**
     * Modifies the configuration information of a specified application.
     *
     * @param request - UpdateApplicationRequest
     * @returns UpdateApplicationResponse
     */
    async updateApplication(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateApplicationWithOptions(request, runtime);
    }
    /**
     * Modifies the basic information of a specified user group.
     *
     * @param request - UpdateGroupRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateGroupResponse
     */
    async updateGroupWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.groupName)) {
            query["GroupName"] = request.groupName;
        }
        if (!$dara.isNull(request.newComments)) {
            query["NewComments"] = request.newComments;
        }
        if (!$dara.isNull(request.newDisplayName)) {
            query["NewDisplayName"] = request.newDisplayName;
        }
        if (!$dara.isNull(request.newGroupName)) {
            query["NewGroupName"] = request.newGroupName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateGroup",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateGroupResponse({}));
    }
    /**
     * Modifies the basic information of a specified user group.
     *
     * @param request - UpdateGroupRequest
     * @returns UpdateGroupResponse
     */
    async updateGroup(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateGroupWithOptions(request, runtime);
    }
    /**
     * Modifies the console logon information of a specified Resource Access Management (RAM) user.
     *
     * @param request - UpdateLoginProfileRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateLoginProfileResponse
     */
    async updateLoginProfileWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.MFABindRequired)) {
            query["MFABindRequired"] = request.MFABindRequired;
        }
        if (!$dara.isNull(request.password)) {
            query["Password"] = request.password;
        }
        if (!$dara.isNull(request.passwordResetRequired)) {
            query["PasswordResetRequired"] = request.passwordResetRequired;
        }
        if (!$dara.isNull(request.status)) {
            query["Status"] = request.status;
        }
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateLoginProfile",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateLoginProfileResponse({}));
    }
    /**
     * Modifies the console logon information of a specified Resource Access Management (RAM) user.
     *
     * @param request - UpdateLoginProfileRequest
     * @returns UpdateLoginProfileResponse
     */
    async updateLoginProfile(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateLoginProfileWithOptions(request, runtime);
    }
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
    async updateOIDCProviderWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientIds)) {
            query["ClientIds"] = request.clientIds;
        }
        if (!$dara.isNull(request.issuanceLimitTime)) {
            query["IssuanceLimitTime"] = request.issuanceLimitTime;
        }
        if (!$dara.isNull(request.newDescription)) {
            query["NewDescription"] = request.newDescription;
        }
        if (!$dara.isNull(request.OIDCProviderName)) {
            query["OIDCProviderName"] = request.OIDCProviderName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateOIDCProvider",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateOIDCProviderResponse({}));
    }
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
    async updateOIDCProvider(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateOIDCProviderWithOptions(request, runtime);
    }
    /**
     * Updates a passkey.
     *
     * @param request - UpdatePasskeyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdatePasskeyResponse
     */
    async updatePasskeyWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.passkeyId)) {
            query["PasskeyId"] = request.passkeyId;
        }
        if (!$dara.isNull(request.passkeyName)) {
            query["PasskeyName"] = request.passkeyName;
        }
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdatePasskey",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdatePasskeyResponse({}));
    }
    /**
     * Updates a passkey.
     *
     * @param request - UpdatePasskeyRequest
     * @returns UpdatePasskeyResponse
     */
    async updatePasskey(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updatePasskeyWithOptions(request, runtime);
    }
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
    async updateSAMLProviderWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.authnSignAlgo)) {
            query["AuthnSignAlgo"] = request.authnSignAlgo;
        }
        if (!$dara.isNull(request.newDescription)) {
            query["NewDescription"] = request.newDescription;
        }
        if (!$dara.isNull(request.newEncodedSAMLMetadataDocument)) {
            query["NewEncodedSAMLMetadataDocument"] = request.newEncodedSAMLMetadataDocument;
        }
        if (!$dara.isNull(request.SAMLProviderName)) {
            query["SAMLProviderName"] = request.SAMLProviderName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateSAMLProvider",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateSAMLProviderResponse({}));
    }
    /**
     * Updates the information about a specified identity provider for role-based single sign-on (SSO).
     *
     * @remarks
     * This example shows how to change the description of the identity provider `test-provider` to `This is a new provider.`.
     *
     * @param request - UpdateSAMLProviderRequest
     * @returns UpdateSAMLProviderResponse
     */
    async updateSAMLProvider(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateSAMLProviderWithOptions(request, runtime);
    }
    /**
     * Updates the status or name of a service credential for a Resource Access Management (RAM) user.
     *
     * @param request - UpdateServiceCredentialRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateServiceCredentialResponse
     */
    async updateServiceCredentialWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.serviceCredentialId)) {
            query["ServiceCredentialId"] = request.serviceCredentialId;
        }
        if (!$dara.isNull(request.serviceCredentialName)) {
            query["ServiceCredentialName"] = request.serviceCredentialName;
        }
        if (!$dara.isNull(request.status)) {
            query["Status"] = request.status;
        }
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateServiceCredential",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateServiceCredentialResponse({}));
    }
    /**
     * Updates the status or name of a service credential for a Resource Access Management (RAM) user.
     *
     * @param request - UpdateServiceCredentialRequest
     * @returns UpdateServiceCredentialResponse
     */
    async updateServiceCredential(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateServiceCredentialWithOptions(request, runtime);
    }
    /**
     * Invokes UpdateUser to modify the information of a Resource Access Management (RAM) user.
     *
     * @param request - UpdateUserRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateUserResponse
     */
    async updateUserWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.newComments)) {
            query["NewComments"] = request.newComments;
        }
        if (!$dara.isNull(request.newDisplayName)) {
            query["NewDisplayName"] = request.newDisplayName;
        }
        if (!$dara.isNull(request.newEmail)) {
            query["NewEmail"] = request.newEmail;
        }
        if (!$dara.isNull(request.newMobilePhone)) {
            query["NewMobilePhone"] = request.newMobilePhone;
        }
        if (!$dara.isNull(request.newUserPrincipalName)) {
            query["NewUserPrincipalName"] = request.newUserPrincipalName;
        }
        if (!$dara.isNull(request.userId)) {
            query["UserId"] = request.userId;
        }
        if (!$dara.isNull(request.userPrincipalName)) {
            query["UserPrincipalName"] = request.userPrincipalName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateUser",
            version: "2019-08-15",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateUserResponse({}));
    }
    /**
     * Invokes UpdateUser to modify the information of a Resource Access Management (RAM) user.
     *
     * @param request - UpdateUserRequest
     * @returns UpdateUserResponse
     */
    async updateUser(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateUserWithOptions(request, runtime);
    }
}
exports.default = Client;
//# sourceMappingURL=client.js.map