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
    this._endpoint = this.getEndpoint("eiam", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds an Employee Identity and Access Management (EIAM) account to multiple EIAM organizations of Identity as a Service (IDaaS). If the account already exists in the organizational unit, the system directly returns a success response.
   * 
   * @param request - AddUserToOrganizationalUnitsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserToOrganizationalUnitsResponse
   */
  async addUserToOrganizationalUnitsWithOptions(request: $_model.AddUserToOrganizationalUnitsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddUserToOrganizationalUnitsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUserToOrganizationalUnits",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddUserToOrganizationalUnitsResponse>(await this.callApi(params, req, runtime), new $_model.AddUserToOrganizationalUnitsResponse({}));
  }

  /**
   * Adds an Employee Identity and Access Management (EIAM) account to multiple EIAM organizations of Identity as a Service (IDaaS). If the account already exists in the organizational unit, the system directly returns a success response.
   * 
   * @param request - AddUserToOrganizationalUnitsRequest
   * @returns AddUserToOrganizationalUnitsResponse
   */
  async addUserToOrganizationalUnits(request: $_model.AddUserToOrganizationalUnitsRequest): Promise<$_model.AddUserToOrganizationalUnitsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUserToOrganizationalUnitsWithOptions(request, runtime);
  }

  /**
   * Adds Employee Identity and Access Management (EIAM) accounts to an EIAM group of Identity as a Service (IDaaS).
   * 
   * @param request - AddUsersToGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUsersToGroupResponse
   */
  async addUsersToGroupWithOptions(request: $_model.AddUsersToGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddUsersToGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUsersToGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddUsersToGroupResponse>(await this.callApi(params, req, runtime), new $_model.AddUsersToGroupResponse({}));
  }

  /**
   * Adds Employee Identity and Access Management (EIAM) accounts to an EIAM group of Identity as a Service (IDaaS).
   * 
   * @param request - AddUsersToGroupRequest
   * @returns AddUsersToGroupResponse
   */
  async addUsersToGroup(request: $_model.AddUsersToGroupRequest): Promise<$_model.AddUsersToGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUsersToGroupWithOptions(request, runtime);
  }

  /**
   * Grants the permissions to access an application to multiple account groups at a time in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - AuthorizeApplicationToGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeApplicationToGroupsResponse
   */
  async authorizeApplicationToGroupsWithOptions(request: $_model.AuthorizeApplicationToGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeApplicationToGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeApplicationToGroups",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthorizeApplicationToGroupsResponse>(await this.callApi(params, req, runtime), new $_model.AuthorizeApplicationToGroupsResponse({}));
  }

  /**
   * Grants the permissions to access an application to multiple account groups at a time in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - AuthorizeApplicationToGroupsRequest
   * @returns AuthorizeApplicationToGroupsResponse
   */
  async authorizeApplicationToGroups(request: $_model.AuthorizeApplicationToGroupsRequest): Promise<$_model.AuthorizeApplicationToGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authorizeApplicationToGroupsWithOptions(request, runtime);
  }

  /**
   * Grants the access permissions on an application to multiple Employee Identity and Access Management (EIAM) organizations at a time.
   * 
   * @param request - AuthorizeApplicationToOrganizationalUnitsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeApplicationToOrganizationalUnitsResponse
   */
  async authorizeApplicationToOrganizationalUnitsWithOptions(request: $_model.AuthorizeApplicationToOrganizationalUnitsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeApplicationToOrganizationalUnitsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeApplicationToOrganizationalUnits",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthorizeApplicationToOrganizationalUnitsResponse>(await this.callApi(params, req, runtime), new $_model.AuthorizeApplicationToOrganizationalUnitsResponse({}));
  }

  /**
   * Grants the access permissions on an application to multiple Employee Identity and Access Management (EIAM) organizations at a time.
   * 
   * @param request - AuthorizeApplicationToOrganizationalUnitsRequest
   * @returns AuthorizeApplicationToOrganizationalUnitsResponse
   */
  async authorizeApplicationToOrganizationalUnits(request: $_model.AuthorizeApplicationToOrganizationalUnitsRequest): Promise<$_model.AuthorizeApplicationToOrganizationalUnitsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authorizeApplicationToOrganizationalUnitsWithOptions(request, runtime);
  }

  /**
   * Grants the access permissions on an application to multiple Employee Identity and Access Management (EIAM) accounts at a time.
   * 
   * @param request - AuthorizeApplicationToUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeApplicationToUsersResponse
   */
  async authorizeApplicationToUsersWithOptions(request: $_model.AuthorizeApplicationToUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeApplicationToUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeApplicationToUsers",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthorizeApplicationToUsersResponse>(await this.callApi(params, req, runtime), new $_model.AuthorizeApplicationToUsersResponse({}));
  }

  /**
   * Grants the access permissions on an application to multiple Employee Identity and Access Management (EIAM) accounts at a time.
   * 
   * @param request - AuthorizeApplicationToUsersRequest
   * @returns AuthorizeApplicationToUsersResponse
   */
  async authorizeApplicationToUsers(request: $_model.AuthorizeApplicationToUsersRequest): Promise<$_model.AuthorizeApplicationToUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authorizeApplicationToUsersWithOptions(request, runtime);
  }

  /**
   * Adds an application to an Enterprise Identity Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @remarks
   * IDaaS EIAM supports the following two standard single sign-on (SSO) protocols for adding applications: SAML 2.0 and OIDC. You can select an SSO protocol based on your business requirements when you add an application. You cannot change the SSO protocol that you selected after the application is added.
   * 
   * @param request - CreateApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApplicationResponse
   */
  async createApplicationWithOptions(request: $_model.CreateApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!$dara.isNull(request.applicationSourceType)) {
      query["ApplicationSourceType"] = request.applicationSourceType;
    }

    if (!$dara.isNull(request.applicationTemplateId)) {
      query["ApplicationTemplateId"] = request.applicationTemplateId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.logoUrl)) {
      query["LogoUrl"] = request.logoUrl;
    }

    if (!$dara.isNull(request.ssoType)) {
      query["SsoType"] = request.ssoType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApplicationResponse>(await this.callApi(params, req, runtime), new $_model.CreateApplicationResponse({}));
  }

  /**
   * Adds an application to an Enterprise Identity Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @remarks
   * IDaaS EIAM supports the following two standard single sign-on (SSO) protocols for adding applications: SAML 2.0 and OIDC. You can select an SSO protocol based on your business requirements when you add an application. You cannot change the SSO protocol that you selected after the application is added.
   * 
   * @param request - CreateApplicationRequest
   * @returns CreateApplicationResponse
   */
  async createApplication(request: $_model.CreateApplicationRequest): Promise<$_model.CreateApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApplicationWithOptions(request, runtime);
  }

  /**
   * Creates a client key for an Employee Identity and Access Management (EIAM) application. An EIAM application can have up to two client keys.
   * 
   * @param request - CreateApplicationClientSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApplicationClientSecretResponse
   */
  async createApplicationClientSecretWithOptions(request: $_model.CreateApplicationClientSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApplicationClientSecretResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApplicationClientSecret",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApplicationClientSecretResponse>(await this.callApi(params, req, runtime), new $_model.CreateApplicationClientSecretResponse({}));
  }

  /**
   * Creates a client key for an Employee Identity and Access Management (EIAM) application. An EIAM application can have up to two client keys.
   * 
   * @param request - CreateApplicationClientSecretRequest
   * @returns CreateApplicationClientSecretResponse
   */
  async createApplicationClientSecret(request: $_model.CreateApplicationClientSecretRequest): Promise<$_model.CreateApplicationClientSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApplicationClientSecretWithOptions(request, runtime);
  }

  /**
   * Create Conditional Access Policy
   * 
   * @remarks
   * Create Conditional Access Policy
   * 
   * @param request - CreateConditionalAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConditionalAccessPolicyResponse
   */
  async createConditionalAccessPolicyWithOptions(request: $_model.CreateConditionalAccessPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConditionalAccessPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.conditionalAccessPolicyName)) {
      query["ConditionalAccessPolicyName"] = request.conditionalAccessPolicyName;
    }

    if (!$dara.isNull(request.conditionalAccessPolicyType)) {
      query["ConditionalAccessPolicyType"] = request.conditionalAccessPolicyType;
    }

    if (!$dara.isNull(request.conditionsConfig)) {
      query["ConditionsConfig"] = request.conditionsConfig;
    }

    if (!$dara.isNull(request.decisionConfig)) {
      query["DecisionConfig"] = request.decisionConfig;
    }

    if (!$dara.isNull(request.decisionType)) {
      query["DecisionType"] = request.decisionType;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.evaluateAt)) {
      query["EvaluateAt"] = request.evaluateAt;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConditionalAccessPolicy",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateConditionalAccessPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateConditionalAccessPolicyResponse({}));
  }

  /**
   * Create Conditional Access Policy
   * 
   * @remarks
   * Create Conditional Access Policy
   * 
   * @param request - CreateConditionalAccessPolicyRequest
   * @returns CreateConditionalAccessPolicyResponse
   */
  async createConditionalAccessPolicy(request: $_model.CreateConditionalAccessPolicyRequest): Promise<$_model.CreateConditionalAccessPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createConditionalAccessPolicyWithOptions(request, runtime);
  }

  /**
   * Creates a custom domain name for an Employee Identity and Access Management (EIAM) instance.
   * 
   * @param request - CreateDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDomainResponse
   */
  async createDomainWithOptions(request: $_model.CreateDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.filing)) {
      query["Filing"] = request.filing;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDomain",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDomainResponse>(await this.callApi(params, req, runtime), new $_model.CreateDomainResponse({}));
  }

  /**
   * Creates a custom domain name for an Employee Identity and Access Management (EIAM) instance.
   * 
   * @param request - CreateDomainRequest
   * @returns CreateDomainResponse
   */
  async createDomain(request: $_model.CreateDomainRequest): Promise<$_model.CreateDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDomainWithOptions(request, runtime);
  }

  /**
   * Creates a proxy token for a domain name of an Employee Identity and Access Management (EIAM) instance.
   * 
   * @param request - CreateDomainProxyTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDomainProxyTokenResponse
   */
  async createDomainProxyTokenWithOptions(request: $_model.CreateDomainProxyTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDomainProxyTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDomainProxyToken",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDomainProxyTokenResponse>(await this.callApi(params, req, runtime), new $_model.CreateDomainProxyTokenResponse({}));
  }

  /**
   * Creates a proxy token for a domain name of an Employee Identity and Access Management (EIAM) instance.
   * 
   * @param request - CreateDomainProxyTokenRequest
   * @returns CreateDomainProxyTokenResponse
   */
  async createDomainProxyToken(request: $_model.CreateDomainProxyTokenRequest): Promise<$_model.CreateDomainProxyTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDomainProxyTokenWithOptions(request, runtime);
  }

  /**
   * Creates an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - CreateGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGroupResponse
   */
  async createGroupWithOptions(request: $_model.CreateGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupExternalId)) {
      query["GroupExternalId"] = request.groupExternalId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateGroupResponse({}));
  }

  /**
   * Creates an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - CreateGroupRequest
   * @returns CreateGroupResponse
   */
  async createGroup(request: $_model.CreateGroupRequest): Promise<$_model.CreateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGroupWithOptions(request, runtime);
  }

  /**
   * Create Identity Provider
   * 
   * @param request - CreateIdentityProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIdentityProviderResponse
   */
  async createIdentityProviderWithOptions(request: $_model.CreateIdentityProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIdentityProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authnConfig)) {
      query["AuthnConfig"] = request.authnConfig;
    }

    if (!$dara.isNull(request.autoCreateUserConfig)) {
      query["AutoCreateUserConfig"] = request.autoCreateUserConfig;
    }

    if (!$dara.isNull(request.autoUpdateUserConfig)) {
      query["AutoUpdateUserConfig"] = request.autoUpdateUserConfig;
    }

    if (!$dara.isNull(request.bindingConfig)) {
      query["BindingConfig"] = request.bindingConfig;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dingtalkAppConfig)) {
      query["DingtalkAppConfig"] = request.dingtalkAppConfig;
    }

    if (!$dara.isNull(request.identityProviderName)) {
      query["IdentityProviderName"] = request.identityProviderName;
    }

    if (!$dara.isNull(request.identityProviderType)) {
      query["IdentityProviderType"] = request.identityProviderType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.larkConfig)) {
      query["LarkConfig"] = request.larkConfig;
    }

    if (!$dara.isNull(request.ldapConfig)) {
      query["LdapConfig"] = request.ldapConfig;
    }

    if (!$dara.isNull(request.logoUrl)) {
      query["LogoUrl"] = request.logoUrl;
    }

    if (!$dara.isNull(request.networkAccessEndpointId)) {
      query["NetworkAccessEndpointId"] = request.networkAccessEndpointId;
    }

    if (!$dara.isNull(request.oidcConfig)) {
      query["OidcConfig"] = request.oidcConfig;
    }

    if (!$dara.isNull(request.udPullConfig)) {
      query["UdPullConfig"] = request.udPullConfig;
    }

    if (!$dara.isNull(request.udPushConfig)) {
      query["UdPushConfig"] = request.udPushConfig;
    }

    if (!$dara.isNull(request.weComConfig)) {
      query["WeComConfig"] = request.weComConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIdentityProvider",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIdentityProviderResponse>(await this.callApi(params, req, runtime), new $_model.CreateIdentityProviderResponse({}));
  }

  /**
   * Create Identity Provider
   * 
   * @param request - CreateIdentityProviderRequest
   * @returns CreateIdentityProviderResponse
   */
  async createIdentityProvider(request: $_model.CreateIdentityProviderRequest): Promise<$_model.CreateIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createIdentityProviderWithOptions(request, runtime);
  }

  /**
   * Creates an instance based on which all capabilities of Identity as a Service (IDaaS) Enterprise Identity and Access Management (EIAM) are provided.
   * 
   * @param request - CreateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: $_model.CreateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstance",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceResponse({}));
  }

  /**
   * Creates an instance based on which all capabilities of Identity as a Service (IDaaS) Enterprise Identity and Access Management (EIAM) are provided.
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: $_model.CreateInstanceRequest): Promise<$_model.CreateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a dedicated endpoint.
   * 
   * @param request - CreateNetworkAccessEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNetworkAccessEndpointResponse
   */
  async createNetworkAccessEndpointWithOptions(request: $_model.CreateNetworkAccessEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNetworkAccessEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkAccessEndpointName)) {
      query["NetworkAccessEndpointName"] = request.networkAccessEndpointName;
    }

    if (!$dara.isNull(request.vSwitchIds)) {
      query["VSwitchIds"] = request.vSwitchIds;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vpcRegionId)) {
      query["VpcRegionId"] = request.vpcRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNetworkAccessEndpoint",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNetworkAccessEndpointResponse>(await this.callApi(params, req, runtime), new $_model.CreateNetworkAccessEndpointResponse({}));
  }

  /**
   * Creates a dedicated endpoint.
   * 
   * @param request - CreateNetworkAccessEndpointRequest
   * @returns CreateNetworkAccessEndpointResponse
   */
  async createNetworkAccessEndpoint(request: $_model.CreateNetworkAccessEndpointRequest): Promise<$_model.CreateNetworkAccessEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNetworkAccessEndpointWithOptions(request, runtime);
  }

  /**
   * Creates an organization in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - CreateOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrganizationalUnitResponse
   */
  async createOrganizationalUnitWithOptions(request: $_model.CreateOrganizationalUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrganizationalUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitExternalId)) {
      query["OrganizationalUnitExternalId"] = request.organizationalUnitExternalId;
    }

    if (!$dara.isNull(request.organizationalUnitName)) {
      query["OrganizationalUnitName"] = request.organizationalUnitName;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new $_model.CreateOrganizationalUnitResponse({}));
  }

  /**
   * Creates an organization in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - CreateOrganizationalUnitRequest
   * @returns CreateOrganizationalUnitResponse
   */
  async createOrganizationalUnit(request: $_model.CreateOrganizationalUnitRequest): Promise<$_model.CreateOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * Creates an account in an Identity as a Service (IDaaS) Enterprise Identity Access Management (EIAM) instance.
   * 
   * @param request - CreateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserResponse
   */
  async createUserWithOptions(request: $_model.CreateUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.customFields)) {
      query["CustomFields"] = request.customFields;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.emailVerified)) {
      query["EmailVerified"] = request.emailVerified;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.passwordInitializationConfig)) {
      query["PasswordInitializationConfig"] = request.passwordInitializationConfig;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.phoneNumberVerified)) {
      query["PhoneNumberVerified"] = request.phoneNumberVerified;
    }

    if (!$dara.isNull(request.phoneRegion)) {
      query["PhoneRegion"] = request.phoneRegion;
    }

    if (!$dara.isNull(request.primaryOrganizationalUnitId)) {
      query["PrimaryOrganizationalUnitId"] = request.primaryOrganizationalUnitId;
    }

    if (!$dara.isNull(request.userExternalId)) {
      query["UserExternalId"] = request.userExternalId;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUserResponse>(await this.callApi(params, req, runtime), new $_model.CreateUserResponse({}));
  }

  /**
   * Creates an account in an Identity as a Service (IDaaS) Enterprise Identity Access Management (EIAM) instance.
   * 
   * @param request - CreateUserRequest
   * @returns CreateUserResponse
   */
  async createUser(request: $_model.CreateUserRequest): Promise<$_model.CreateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  /**
   * Deletes an Employee Identity and Access Management (EIAM) application.
   * 
   * @remarks
   * Make sure that the EIAM application that you want to delete is not used before you delete the EIAM application. After you delete the EIAM application, all configurations are deleted and cannot be restored.
   * 
   * @param request - DeleteApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApplicationResponse
   */
  async deleteApplicationWithOptions(request: $_model.DeleteApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApplicationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApplicationResponse({}));
  }

  /**
   * Deletes an Employee Identity and Access Management (EIAM) application.
   * 
   * @remarks
   * Make sure that the EIAM application that you want to delete is not used before you delete the EIAM application. After you delete the EIAM application, all configurations are deleted and cannot be restored.
   * 
   * @param request - DeleteApplicationRequest
   * @returns DeleteApplicationResponse
   */
  async deleteApplication(request: $_model.DeleteApplicationRequest): Promise<$_model.DeleteApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApplicationWithOptions(request, runtime);
  }

  /**
   * Deletes a client key for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - DeleteApplicationClientSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApplicationClientSecretResponse
   */
  async deleteApplicationClientSecretWithOptions(request: $_model.DeleteApplicationClientSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApplicationClientSecretResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApplicationClientSecret",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApplicationClientSecretResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApplicationClientSecretResponse({}));
  }

  /**
   * Deletes a client key for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - DeleteApplicationClientSecretRequest
   * @returns DeleteApplicationClientSecretResponse
   */
  async deleteApplicationClientSecret(request: $_model.DeleteApplicationClientSecretRequest): Promise<$_model.DeleteApplicationClientSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApplicationClientSecretWithOptions(request, runtime);
  }

  /**
   * Delete Conditional Access Policy
   * 
   * @remarks
   * When deleting a specified conditional access policy, please ensure that the policy is no longer in use. After deletion, all configuration data will be removed and cannot be recovered.
   * 
   * @param request - DeleteConditionalAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConditionalAccessPolicyResponse
   */
  async deleteConditionalAccessPolicyWithOptions(request: $_model.DeleteConditionalAccessPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConditionalAccessPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.conditionalAccessPolicyId)) {
      query["ConditionalAccessPolicyId"] = request.conditionalAccessPolicyId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConditionalAccessPolicy",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConditionalAccessPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConditionalAccessPolicyResponse({}));
  }

  /**
   * Delete Conditional Access Policy
   * 
   * @remarks
   * When deleting a specified conditional access policy, please ensure that the policy is no longer in use. After deletion, all configuration data will be removed and cannot be recovered.
   * 
   * @param request - DeleteConditionalAccessPolicyRequest
   * @returns DeleteConditionalAccessPolicyResponse
   */
  async deleteConditionalAccessPolicy(request: $_model.DeleteConditionalAccessPolicyRequest): Promise<$_model.DeleteConditionalAccessPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteConditionalAccessPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes a custom domain name of an Employee Identity and Access Management (EIAM) instance. You cannot delete the initial domain name and default domain name of the instance.
   * 
   * @param request - DeleteDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainResponse
   */
  async deleteDomainWithOptions(request: $_model.DeleteDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDomain",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDomainResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDomainResponse({}));
  }

  /**
   * Deletes a custom domain name of an Employee Identity and Access Management (EIAM) instance. You cannot delete the initial domain name and default domain name of the instance.
   * 
   * @param request - DeleteDomainRequest
   * @returns DeleteDomainResponse
   */
  async deleteDomain(request: $_model.DeleteDomainRequest): Promise<$_model.DeleteDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDomainWithOptions(request, runtime);
  }

  /**
   * Deletes a proxy token for a domain name of an Employee Identity and Access Management (EIAM) instance. Only the proxy tokens in the disabled state can be deleted.
   * 
   * @param request - DeleteDomainProxyTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainProxyTokenResponse
   */
  async deleteDomainProxyTokenWithOptions(request: $_model.DeleteDomainProxyTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDomainProxyTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.domainProxyTokenId)) {
      query["DomainProxyTokenId"] = request.domainProxyTokenId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDomainProxyToken",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDomainProxyTokenResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDomainProxyTokenResponse({}));
  }

  /**
   * Deletes a proxy token for a domain name of an Employee Identity and Access Management (EIAM) instance. Only the proxy tokens in the disabled state can be deleted.
   * 
   * @param request - DeleteDomainProxyTokenRequest
   * @returns DeleteDomainProxyTokenResponse
   */
  async deleteDomainProxyToken(request: $_model.DeleteDomainProxyTokenRequest): Promise<$_model.DeleteDomainProxyTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDomainProxyTokenWithOptions(request, runtime);
  }

  /**
   * Deletes the information of an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - DeleteGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGroupResponse
   */
  async deleteGroupWithOptions(request: $_model.DeleteGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGroupResponse({}));
  }

  /**
   * Deletes the information of an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - DeleteGroupRequest
   * @returns DeleteGroupResponse
   */
  async deleteGroup(request: $_model.DeleteGroupRequest): Promise<$_model.DeleteGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGroupWithOptions(request, runtime);
  }

  /**
   * Delete identity provider
   * 
   * @param request - DeleteIdentityProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIdentityProviderResponse
   */
  async deleteIdentityProviderWithOptions(request: $_model.DeleteIdentityProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIdentityProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIdentityProvider",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIdentityProviderResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIdentityProviderResponse({}));
  }

  /**
   * Delete identity provider
   * 
   * @param request - DeleteIdentityProviderRequest
   * @returns DeleteIdentityProviderResponse
   */
  async deleteIdentityProvider(request: $_model.DeleteIdentityProviderRequest): Promise<$_model.DeleteIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIdentityProviderWithOptions(request, runtime);
  }

  /**
   * Deletes an Enterprise Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS) that you do not need.
   * 
   * @remarks
   * Make sure that the instance to be deleted is no longer used. If the instance is deleted, all data related to the instance will be deleted.
   * 
   * @param request - DeleteInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(request: $_model.DeleteInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstance",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceResponse({}));
  }

  /**
   * Deletes an Enterprise Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS) that you do not need.
   * 
   * @remarks
   * Make sure that the instance to be deleted is no longer used. If the instance is deleted, all data related to the instance will be deleted.
   * 
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(request: $_model.DeleteInstanceRequest): Promise<$_model.DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  /**
   * Delete a network endpoint of a specific type.
   * 
   * @param request - DeleteNetworkAccessEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNetworkAccessEndpointResponse
   */
  async deleteNetworkAccessEndpointWithOptions(request: $_model.DeleteNetworkAccessEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNetworkAccessEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkAccessEndpointId)) {
      query["NetworkAccessEndpointId"] = request.networkAccessEndpointId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNetworkAccessEndpoint",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNetworkAccessEndpointResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNetworkAccessEndpointResponse({}));
  }

  /**
   * Delete a network endpoint of a specific type.
   * 
   * @param request - DeleteNetworkAccessEndpointRequest
   * @returns DeleteNetworkAccessEndpointResponse
   */
  async deleteNetworkAccessEndpoint(request: $_model.DeleteNetworkAccessEndpointRequest): Promise<$_model.DeleteNetworkAccessEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNetworkAccessEndpointWithOptions(request, runtime);
  }

  /**
   * Deletes an organization in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM). If the organization has EIAM accounts or child organizations, the delete operation fails.
   * 
   * @param request - DeleteOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOrganizationalUnitResponse
   */
  async deleteOrganizationalUnitWithOptions(request: $_model.DeleteOrganizationalUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOrganizationalUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new $_model.DeleteOrganizationalUnitResponse({}));
  }

  /**
   * Deletes an organization in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM). If the organization has EIAM accounts or child organizations, the delete operation fails.
   * 
   * @param request - DeleteOrganizationalUnitRequest
   * @returns DeleteOrganizationalUnitResponse
   */
  async deleteOrganizationalUnit(request: $_model.DeleteOrganizationalUnitRequest): Promise<$_model.DeleteOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * Delete organizational unit information, forcibly deleting all accounts and sub-organizations beneath it
   * 
   * @param request - DeleteOrganizationalUnitChildrenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOrganizationalUnitChildrenResponse
   */
  async deleteOrganizationalUnitChildrenWithOptions(request: $_model.DeleteOrganizationalUnitChildrenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOrganizationalUnitChildrenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOrganizationalUnitChildren",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteOrganizationalUnitChildrenResponse>(await this.callApi(params, req, runtime), new $_model.DeleteOrganizationalUnitChildrenResponse({}));
  }

  /**
   * Delete organizational unit information, forcibly deleting all accounts and sub-organizations beneath it
   * 
   * @param request - DeleteOrganizationalUnitChildrenRequest
   * @returns DeleteOrganizationalUnitChildrenResponse
   */
  async deleteOrganizationalUnitChildren(request: $_model.DeleteOrganizationalUnitChildrenRequest): Promise<$_model.DeleteOrganizationalUnitChildrenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteOrganizationalUnitChildrenWithOptions(request, runtime);
  }

  /**
   * Deletes an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS). The information related to the account is cleared.
   * 
   * @param request - DeleteUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserResponse
   */
  async deleteUserWithOptions(request: $_model.DeleteUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserResponse({}));
  }

  /**
   * Deletes an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS). The information related to the account is cleared.
   * 
   * @param request - DeleteUserRequest
   * @returns DeleteUserResponse
   */
  async deleteUser(request: $_model.DeleteUserRequest): Promise<$_model.DeleteUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  /**
   * Disables an enabled Employee Identity and Access Management (EIAM) application. All features of the EIAM application cannot be used if you disable the EIAM application.
   * 
   * @remarks
   * All features of the EIAM application cannot be used if you disable the EIAM application, such as single sign-on (SSO) and account synchronization. Make sure that you acknowledge the risks of the delete operation.
   * 
   * @param request - DisableApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableApplicationResponse
   */
  async disableApplicationWithOptions(request: $_model.DisableApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableApplicationResponse>(await this.callApi(params, req, runtime), new $_model.DisableApplicationResponse({}));
  }

  /**
   * Disables an enabled Employee Identity and Access Management (EIAM) application. All features of the EIAM application cannot be used if you disable the EIAM application.
   * 
   * @remarks
   * All features of the EIAM application cannot be used if you disable the EIAM application, such as single sign-on (SSO) and account synchronization. Make sure that you acknowledge the risks of the delete operation.
   * 
   * @param request - DisableApplicationRequest
   * @returns DisableApplicationResponse
   */
  async disableApplication(request: $_model.DisableApplicationRequest): Promise<$_model.DisableApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableApplicationWithOptions(request, runtime);
  }

  /**
   * Disables the Developer API feature for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - DisableApplicationApiInvokeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableApplicationApiInvokeResponse
   */
  async disableApplicationApiInvokeWithOptions(request: $_model.DisableApplicationApiInvokeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableApplicationApiInvokeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableApplicationApiInvoke",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableApplicationApiInvokeResponse>(await this.callApi(params, req, runtime), new $_model.DisableApplicationApiInvokeResponse({}));
  }

  /**
   * Disables the Developer API feature for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - DisableApplicationApiInvokeRequest
   * @returns DisableApplicationApiInvokeResponse
   */
  async disableApplicationApiInvoke(request: $_model.DisableApplicationApiInvokeRequest): Promise<$_model.DisableApplicationApiInvokeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableApplicationApiInvokeWithOptions(request, runtime);
  }

  /**
   * Disables a client key of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - DisableApplicationClientSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableApplicationClientSecretResponse
   */
  async disableApplicationClientSecretWithOptions(request: $_model.DisableApplicationClientSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableApplicationClientSecretResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableApplicationClientSecret",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableApplicationClientSecretResponse>(await this.callApi(params, req, runtime), new $_model.DisableApplicationClientSecretResponse({}));
  }

  /**
   * Disables a client key of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - DisableApplicationClientSecretRequest
   * @returns DisableApplicationClientSecretResponse
   */
  async disableApplicationClientSecret(request: $_model.DisableApplicationClientSecretRequest): Promise<$_model.DisableApplicationClientSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableApplicationClientSecretWithOptions(request, runtime);
  }

  /**
   * Disables the account synchronization feature for an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - DisableApplicationProvisioningRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableApplicationProvisioningResponse
   */
  async disableApplicationProvisioningWithOptions(request: $_model.DisableApplicationProvisioningRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableApplicationProvisioningResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableApplicationProvisioning",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableApplicationProvisioningResponse>(await this.callApi(params, req, runtime), new $_model.DisableApplicationProvisioningResponse({}));
  }

  /**
   * Disables the account synchronization feature for an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - DisableApplicationProvisioningRequest
   * @returns DisableApplicationProvisioningResponse
   */
  async disableApplicationProvisioning(request: $_model.DisableApplicationProvisioningRequest): Promise<$_model.DisableApplicationProvisioningResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableApplicationProvisioningWithOptions(request, runtime);
  }

  /**
   * Disables the single sign-on (SSO) feature for an Employee Identity and Access Management (EIAM) application. This way, employees cannot log on to the application by using SSO.
   * 
   * @param request - DisableApplicationSsoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableApplicationSsoResponse
   */
  async disableApplicationSsoWithOptions(request: $_model.DisableApplicationSsoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableApplicationSsoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableApplicationSso",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableApplicationSsoResponse>(await this.callApi(params, req, runtime), new $_model.DisableApplicationSsoResponse({}));
  }

  /**
   * Disables the single sign-on (SSO) feature for an Employee Identity and Access Management (EIAM) application. This way, employees cannot log on to the application by using SSO.
   * 
   * @param request - DisableApplicationSsoRequest
   * @returns DisableApplicationSsoResponse
   */
  async disableApplicationSso(request: $_model.DisableApplicationSsoRequest): Promise<$_model.DisableApplicationSsoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableApplicationSsoWithOptions(request, runtime);
  }

  /**
   * Disable Conditional Access Policy
   * 
   * @remarks
   * When changing a conditional access policy from an enabled state to a disabled state, the policy will no longer intercept. Please confirm that you are aware of the potential risks associated with this action.
   * 
   * @param request - DisableConditionalAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableConditionalAccessPolicyResponse
   */
  async disableConditionalAccessPolicyWithOptions(request: $_model.DisableConditionalAccessPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableConditionalAccessPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.conditionalAccessPolicyId)) {
      query["ConditionalAccessPolicyId"] = request.conditionalAccessPolicyId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableConditionalAccessPolicy",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableConditionalAccessPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DisableConditionalAccessPolicyResponse({}));
  }

  /**
   * Disable Conditional Access Policy
   * 
   * @remarks
   * When changing a conditional access policy from an enabled state to a disabled state, the policy will no longer intercept. Please confirm that you are aware of the potential risks associated with this action.
   * 
   * @param request - DisableConditionalAccessPolicyRequest
   * @returns DisableConditionalAccessPolicyResponse
   */
  async disableConditionalAccessPolicy(request: $_model.DisableConditionalAccessPolicyRequest): Promise<$_model.DisableConditionalAccessPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableConditionalAccessPolicyWithOptions(request, runtime);
  }

  /**
   * Disables a proxy token for a domain name of an Employee Identity and Access Management (EIAM) instance. After the proxy token is disabled, the domain name may not be used as expected.
   * 
   * @param request - DisableDomainProxyTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableDomainProxyTokenResponse
   */
  async disableDomainProxyTokenWithOptions(request: $_model.DisableDomainProxyTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableDomainProxyTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.domainProxyTokenId)) {
      query["DomainProxyTokenId"] = request.domainProxyTokenId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableDomainProxyToken",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableDomainProxyTokenResponse>(await this.callApi(params, req, runtime), new $_model.DisableDomainProxyTokenResponse({}));
  }

  /**
   * Disables a proxy token for a domain name of an Employee Identity and Access Management (EIAM) instance. After the proxy token is disabled, the domain name may not be used as expected.
   * 
   * @param request - DisableDomainProxyTokenRequest
   * @returns DisableDomainProxyTokenResponse
   */
  async disableDomainProxyToken(request: $_model.DisableDomainProxyTokenRequest): Promise<$_model.DisableDomainProxyTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableDomainProxyTokenWithOptions(request, runtime);
  }

  /**
   * Disable identity provider synchronization
   * 
   * @param request - DisableIdentityProviderUdPullRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableIdentityProviderUdPullResponse
   */
  async disableIdentityProviderUdPullWithOptions(request: $_model.DisableIdentityProviderUdPullRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableIdentityProviderUdPullResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableIdentityProviderUdPull",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableIdentityProviderUdPullResponse>(await this.callApi(params, req, runtime), new $_model.DisableIdentityProviderUdPullResponse({}));
  }

  /**
   * Disable identity provider synchronization
   * 
   * @param request - DisableIdentityProviderUdPullRequest
   * @returns DisableIdentityProviderUdPullResponse
   */
  async disableIdentityProviderUdPull(request: $_model.DisableIdentityProviderUdPullRequest): Promise<$_model.DisableIdentityProviderUdPullResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableIdentityProviderUdPullWithOptions(request, runtime);
  }

  /**
   * Disables the feature of automatically redirecting the initial domain name to the default domain name for an Employee Identity and Access Management (EIAM) instance. After the feature is disabled, users who visit the portal page by using the initial domain name are not redirected to the default domain name.
   * 
   * @param request - DisableInitDomainAutoRedirectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableInitDomainAutoRedirectResponse
   */
  async disableInitDomainAutoRedirectWithOptions(request: $_model.DisableInitDomainAutoRedirectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableInitDomainAutoRedirectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableInitDomainAutoRedirect",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableInitDomainAutoRedirectResponse>(await this.callApi(params, req, runtime), new $_model.DisableInitDomainAutoRedirectResponse({}));
  }

  /**
   * Disables the feature of automatically redirecting the initial domain name to the default domain name for an Employee Identity and Access Management (EIAM) instance. After the feature is disabled, users who visit the portal page by using the initial domain name are not redirected to the default domain name.
   * 
   * @param request - DisableInitDomainAutoRedirectRequest
   * @returns DisableInitDomainAutoRedirectResponse
   */
  async disableInitDomainAutoRedirect(request: $_model.DisableInitDomainAutoRedirectRequest): Promise<$_model.DisableInitDomainAutoRedirectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableInitDomainAutoRedirectWithOptions(request, runtime);
  }

  /**
   * Disables an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account. If the account is disabled, a success message is returned.
   * 
   * @param request - DisableUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableUserResponse
   */
  async disableUserWithOptions(request: $_model.DisableUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableUserResponse>(await this.callApi(params, req, runtime), new $_model.DisableUserResponse({}));
  }

  /**
   * Disables an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account. If the account is disabled, a success message is returned.
   * 
   * @param request - DisableUserRequest
   * @returns DisableUserResponse
   */
  async disableUser(request: $_model.DisableUserRequest): Promise<$_model.DisableUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableUserWithOptions(request, runtime);
  }

  /**
   * Enables a disabled Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - EnableApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableApplicationResponse
   */
  async enableApplicationWithOptions(request: $_model.EnableApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableApplicationResponse>(await this.callApi(params, req, runtime), new $_model.EnableApplicationResponse({}));
  }

  /**
   * Enables a disabled Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - EnableApplicationRequest
   * @returns EnableApplicationResponse
   */
  async enableApplication(request: $_model.EnableApplicationRequest): Promise<$_model.EnableApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableApplicationWithOptions(request, runtime);
  }

  /**
   * Enables the Developer API feature for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - EnableApplicationApiInvokeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableApplicationApiInvokeResponse
   */
  async enableApplicationApiInvokeWithOptions(request: $_model.EnableApplicationApiInvokeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableApplicationApiInvokeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableApplicationApiInvoke",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableApplicationApiInvokeResponse>(await this.callApi(params, req, runtime), new $_model.EnableApplicationApiInvokeResponse({}));
  }

  /**
   * Enables the Developer API feature for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - EnableApplicationApiInvokeRequest
   * @returns EnableApplicationApiInvokeResponse
   */
  async enableApplicationApiInvoke(request: $_model.EnableApplicationApiInvokeRequest): Promise<$_model.EnableApplicationApiInvokeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableApplicationApiInvokeWithOptions(request, runtime);
  }

  /**
   * Enables the client key of an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - EnableApplicationClientSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableApplicationClientSecretResponse
   */
  async enableApplicationClientSecretWithOptions(request: $_model.EnableApplicationClientSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableApplicationClientSecretResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableApplicationClientSecret",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableApplicationClientSecretResponse>(await this.callApi(params, req, runtime), new $_model.EnableApplicationClientSecretResponse({}));
  }

  /**
   * Enables the client key of an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - EnableApplicationClientSecretRequest
   * @returns EnableApplicationClientSecretResponse
   */
  async enableApplicationClientSecret(request: $_model.EnableApplicationClientSecretRequest): Promise<$_model.EnableApplicationClientSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableApplicationClientSecretWithOptions(request, runtime);
  }

  /**
   * Enables the account synchronization feature for an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - EnableApplicationProvisioningRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableApplicationProvisioningResponse
   */
  async enableApplicationProvisioningWithOptions(request: $_model.EnableApplicationProvisioningRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableApplicationProvisioningResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableApplicationProvisioning",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableApplicationProvisioningResponse>(await this.callApi(params, req, runtime), new $_model.EnableApplicationProvisioningResponse({}));
  }

  /**
   * Enables the account synchronization feature for an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - EnableApplicationProvisioningRequest
   * @returns EnableApplicationProvisioningResponse
   */
  async enableApplicationProvisioning(request: $_model.EnableApplicationProvisioningRequest): Promise<$_model.EnableApplicationProvisioningResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableApplicationProvisioningWithOptions(request, runtime);
  }

  /**
   * Enables the single sign-on (SSO) feature for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - EnableApplicationSsoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableApplicationSsoResponse
   */
  async enableApplicationSsoWithOptions(request: $_model.EnableApplicationSsoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableApplicationSsoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableApplicationSso",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableApplicationSsoResponse>(await this.callApi(params, req, runtime), new $_model.EnableApplicationSsoResponse({}));
  }

  /**
   * Enables the single sign-on (SSO) feature for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - EnableApplicationSsoRequest
   * @returns EnableApplicationSsoResponse
   */
  async enableApplicationSso(request: $_model.EnableApplicationSsoRequest): Promise<$_model.EnableApplicationSsoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableApplicationSsoWithOptions(request, runtime);
  }

  /**
   * Enable Conditional Access Policy
   * 
   * @remarks
   * When changing the status of a conditional access policy from enabled to disabled, the policy will no longer intercept. Please confirm that you are aware of the potential risks associated with this action.
   * 
   * @param request - EnableConditionalAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableConditionalAccessPolicyResponse
   */
  async enableConditionalAccessPolicyWithOptions(request: $_model.EnableConditionalAccessPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableConditionalAccessPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.conditionalAccessPolicyId)) {
      query["ConditionalAccessPolicyId"] = request.conditionalAccessPolicyId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableConditionalAccessPolicy",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableConditionalAccessPolicyResponse>(await this.callApi(params, req, runtime), new $_model.EnableConditionalAccessPolicyResponse({}));
  }

  /**
   * Enable Conditional Access Policy
   * 
   * @remarks
   * When changing the status of a conditional access policy from enabled to disabled, the policy will no longer intercept. Please confirm that you are aware of the potential risks associated with this action.
   * 
   * @param request - EnableConditionalAccessPolicyRequest
   * @returns EnableConditionalAccessPolicyResponse
   */
  async enableConditionalAccessPolicy(request: $_model.EnableConditionalAccessPolicyRequest): Promise<$_model.EnableConditionalAccessPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableConditionalAccessPolicyWithOptions(request, runtime);
  }

  /**
   * Enables a proxy token for a domain name of an Employee Identity and Access Management (EIAM) instance. The proxy token is used to verify the security of the domain name.
   * 
   * @param request - EnableDomainProxyTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableDomainProxyTokenResponse
   */
  async enableDomainProxyTokenWithOptions(request: $_model.EnableDomainProxyTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableDomainProxyTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.domainProxyTokenId)) {
      query["DomainProxyTokenId"] = request.domainProxyTokenId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableDomainProxyToken",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableDomainProxyTokenResponse>(await this.callApi(params, req, runtime), new $_model.EnableDomainProxyTokenResponse({}));
  }

  /**
   * Enables a proxy token for a domain name of an Employee Identity and Access Management (EIAM) instance. The proxy token is used to verify the security of the domain name.
   * 
   * @param request - EnableDomainProxyTokenRequest
   * @returns EnableDomainProxyTokenResponse
   */
  async enableDomainProxyToken(request: $_model.EnableDomainProxyTokenRequest): Promise<$_model.EnableDomainProxyTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableDomainProxyTokenWithOptions(request, runtime);
  }

  /**
   * Enable identity provider synchronization.
   * 
   * @param request - EnableIdentityProviderUdPullRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableIdentityProviderUdPullResponse
   */
  async enableIdentityProviderUdPullWithOptions(request: $_model.EnableIdentityProviderUdPullRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableIdentityProviderUdPullResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableIdentityProviderUdPull",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableIdentityProviderUdPullResponse>(await this.callApi(params, req, runtime), new $_model.EnableIdentityProviderUdPullResponse({}));
  }

  /**
   * Enable identity provider synchronization.
   * 
   * @param request - EnableIdentityProviderUdPullRequest
   * @returns EnableIdentityProviderUdPullResponse
   */
  async enableIdentityProviderUdPull(request: $_model.EnableIdentityProviderUdPullRequest): Promise<$_model.EnableIdentityProviderUdPullResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableIdentityProviderUdPullWithOptions(request, runtime);
  }

  /**
   * Enables the feature of automatically redirecting the initial domain name to the default domain name for an Employee Identity and Access Management (EIAM) instance.
   * 
   * @param request - EnableInitDomainAutoRedirectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableInitDomainAutoRedirectResponse
   */
  async enableInitDomainAutoRedirectWithOptions(request: $_model.EnableInitDomainAutoRedirectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableInitDomainAutoRedirectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableInitDomainAutoRedirect",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableInitDomainAutoRedirectResponse>(await this.callApi(params, req, runtime), new $_model.EnableInitDomainAutoRedirectResponse({}));
  }

  /**
   * Enables the feature of automatically redirecting the initial domain name to the default domain name for an Employee Identity and Access Management (EIAM) instance.
   * 
   * @param request - EnableInitDomainAutoRedirectRequest
   * @returns EnableInitDomainAutoRedirectResponse
   */
  async enableInitDomainAutoRedirect(request: $_model.EnableInitDomainAutoRedirectRequest): Promise<$_model.EnableInitDomainAutoRedirectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableInitDomainAutoRedirectWithOptions(request, runtime);
  }

  /**
   * Enables an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS).
   * 
   * @param request - EnableUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableUserResponse
   */
  async enableUserWithOptions(request: $_model.EnableUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableUserResponse>(await this.callApi(params, req, runtime), new $_model.EnableUserResponse({}));
  }

  /**
   * Enables an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS).
   * 
   * @param request - EnableUserRequest
   * @returns EnableUserResponse
   */
  async enableUser(request: $_model.EnableUserRequest): Promise<$_model.EnableUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableUserWithOptions(request, runtime);
  }

  /**
   * Queries the details of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - GetApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationResponse
   */
  async getApplicationWithOptions(request: $_model.GetApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApplicationResponse>(await this.callApi(params, req, runtime), new $_model.GetApplicationResponse({}));
  }

  /**
   * Queries the details of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - GetApplicationRequest
   * @returns GetApplicationResponse
   */
  async getApplication(request: $_model.GetApplicationRequest): Promise<$_model.GetApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationWithOptions(request, runtime);
  }

  /**
   * Queries the permissions of the Developer API feature for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - GetApplicationGrantScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationGrantScopeResponse
   */
  async getApplicationGrantScopeWithOptions(request: $_model.GetApplicationGrantScopeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationGrantScopeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplicationGrantScope",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApplicationGrantScopeResponse>(await this.callApi(params, req, runtime), new $_model.GetApplicationGrantScopeResponse({}));
  }

  /**
   * Queries the permissions of the Developer API feature for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - GetApplicationGrantScopeRequest
   * @returns GetApplicationGrantScopeResponse
   */
  async getApplicationGrantScope(request: $_model.GetApplicationGrantScopeRequest): Promise<$_model.GetApplicationGrantScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationGrantScopeWithOptions(request, runtime);
  }

  /**
   * Queries the configuration of the account synchronization feature for an application in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - GetApplicationProvisioningConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationProvisioningConfigResponse
   */
  async getApplicationProvisioningConfigWithOptions(request: $_model.GetApplicationProvisioningConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationProvisioningConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplicationProvisioningConfig",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApplicationProvisioningConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetApplicationProvisioningConfigResponse({}));
  }

  /**
   * Queries the configuration of the account synchronization feature for an application in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - GetApplicationProvisioningConfigRequest
   * @returns GetApplicationProvisioningConfigResponse
   */
  async getApplicationProvisioningConfig(request: $_model.GetApplicationProvisioningConfigRequest): Promise<$_model.GetApplicationProvisioningConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationProvisioningConfigWithOptions(request, runtime);
  }

  /**
   * Queries the account synchronization scope of applications in Identity as a Service (IDaaS) Employee IAM (EIAM). This scope is the same as the scope within which developers can call the DeveloperAPI to query and manage accounts.
   * 
   * @param request - GetApplicationProvisioningScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationProvisioningScopeResponse
   */
  async getApplicationProvisioningScopeWithOptions(request: $_model.GetApplicationProvisioningScopeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationProvisioningScopeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplicationProvisioningScope",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApplicationProvisioningScopeResponse>(await this.callApi(params, req, runtime), new $_model.GetApplicationProvisioningScopeResponse({}));
  }

  /**
   * Queries the account synchronization scope of applications in Identity as a Service (IDaaS) Employee IAM (EIAM). This scope is the same as the scope within which developers can call the DeveloperAPI to query and manage accounts.
   * 
   * @param request - GetApplicationProvisioningScopeRequest
   * @returns GetApplicationProvisioningScopeResponse
   */
  async getApplicationProvisioningScope(request: $_model.GetApplicationProvisioningScopeRequest): Promise<$_model.GetApplicationProvisioningScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationProvisioningScopeWithOptions(request, runtime);
  }

  /**
   * Queries the single sign-on (SSO) configuration attributes of an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetApplicationSsoConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationSsoConfigResponse
   */
  async getApplicationSsoConfigWithOptions(request: $_model.GetApplicationSsoConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationSsoConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplicationSsoConfig",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApplicationSsoConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetApplicationSsoConfigResponse({}));
  }

  /**
   * Queries the single sign-on (SSO) configuration attributes of an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetApplicationSsoConfigRequest
   * @returns GetApplicationSsoConfigResponse
   */
  async getApplicationSsoConfig(request: $_model.GetApplicationSsoConfigRequest): Promise<$_model.GetApplicationSsoConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationSsoConfigWithOptions(request, runtime);
  }

  /**
   * Get Conditional Access Policy
   * 
   * @remarks
   * Query Conditional Access Policy
   * 
   * @param request - GetConditionalAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConditionalAccessPolicyResponse
   */
  async getConditionalAccessPolicyWithOptions(request: $_model.GetConditionalAccessPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetConditionalAccessPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.conditionalAccessPolicyId)) {
      query["ConditionalAccessPolicyId"] = request.conditionalAccessPolicyId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConditionalAccessPolicy",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConditionalAccessPolicyResponse>(await this.callApi(params, req, runtime), new $_model.GetConditionalAccessPolicyResponse({}));
  }

  /**
   * Get Conditional Access Policy
   * 
   * @remarks
   * Query Conditional Access Policy
   * 
   * @param request - GetConditionalAccessPolicyRequest
   * @returns GetConditionalAccessPolicyResponse
   */
  async getConditionalAccessPolicy(request: $_model.GetConditionalAccessPolicyRequest): Promise<$_model.GetConditionalAccessPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConditionalAccessPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the information about a domain name of an Employee Identity and Access Management (EIAM) instance.
   * 
   * @param request - GetDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDomainResponse
   */
  async getDomainWithOptions(request: $_model.GetDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDomain",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDomainResponse>(await this.callApi(params, req, runtime), new $_model.GetDomainResponse({}));
  }

  /**
   * Queries the information about a domain name of an Employee Identity and Access Management (EIAM) instance.
   * 
   * @param request - GetDomainRequest
   * @returns GetDomainResponse
   */
  async getDomain(request: $_model.GetDomainRequest): Promise<$_model.GetDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDomainWithOptions(request, runtime);
  }

  /**
   * Queries the domain name system (DNS) challenge records of a domain name of an Employee Identity and Access Management (EIAM) instance. The generated records are used to verify the ownership of the domain name.
   * 
   * @param request - GetDomainDnsChallengeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDomainDnsChallengeResponse
   */
  async getDomainDnsChallengeWithOptions(request: $_model.GetDomainDnsChallengeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDomainDnsChallengeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDomainDnsChallenge",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDomainDnsChallengeResponse>(await this.callApi(params, req, runtime), new $_model.GetDomainDnsChallengeResponse({}));
  }

  /**
   * Queries the domain name system (DNS) challenge records of a domain name of an Employee Identity and Access Management (EIAM) instance. The generated records are used to verify the ownership of the domain name.
   * 
   * @param request - GetDomainDnsChallengeRequest
   * @returns GetDomainDnsChallengeResponse
   */
  async getDomainDnsChallenge(request: $_model.GetDomainDnsChallengeRequest): Promise<$_model.GetDomainDnsChallengeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDomainDnsChallengeWithOptions(request, runtime);
  }

  /**
   * Queries the forgot password configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetForgetPasswordConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetForgetPasswordConfigurationResponse
   */
  async getForgetPasswordConfigurationWithOptions(request: $_model.GetForgetPasswordConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetForgetPasswordConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetForgetPasswordConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetForgetPasswordConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.GetForgetPasswordConfigurationResponse({}));
  }

  /**
   * Queries the forgot password configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetForgetPasswordConfigurationRequest
   * @returns GetForgetPasswordConfigurationResponse
   */
  async getForgetPasswordConfiguration(request: $_model.GetForgetPasswordConfigurationRequest): Promise<$_model.GetForgetPasswordConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getForgetPasswordConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the information of an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - GetGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGroupResponse
   */
  async getGroupWithOptions(request: $_model.GetGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetGroupResponse({}));
  }

  /**
   * Queries the information of an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - GetGroupRequest
   * @returns GetGroupResponse
   */
  async getGroup(request: $_model.GetGroupRequest): Promise<$_model.GetGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGroupWithOptions(request, runtime);
  }

  /**
   * Get identity provider
   * 
   * @param request - GetIdentityProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIdentityProviderResponse
   */
  async getIdentityProviderWithOptions(request: $_model.GetIdentityProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIdentityProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIdentityProvider",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIdentityProviderResponse>(await this.callApi(params, req, runtime), new $_model.GetIdentityProviderResponse({}));
  }

  /**
   * Get identity provider
   * 
   * @param request - GetIdentityProviderRequest
   * @returns GetIdentityProviderResponse
   */
  async getIdentityProvider(request: $_model.GetIdentityProviderRequest): Promise<$_model.GetIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIdentityProviderWithOptions(request, runtime);
  }

  /**
   * Get IdP Inbound Synchronization Configuration Information
   * 
   * @param request - GetIdentityProviderUdPullConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIdentityProviderUdPullConfigurationResponse
   */
  async getIdentityProviderUdPullConfigurationWithOptions(request: $_model.GetIdentityProviderUdPullConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIdentityProviderUdPullConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIdentityProviderUdPullConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIdentityProviderUdPullConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.GetIdentityProviderUdPullConfigurationResponse({}));
  }

  /**
   * Get IdP Inbound Synchronization Configuration Information
   * 
   * @param request - GetIdentityProviderUdPullConfigurationRequest
   * @returns GetIdentityProviderUdPullConfigurationResponse
   */
  async getIdentityProviderUdPullConfiguration(request: $_model.GetIdentityProviderUdPullConfigurationRequest): Promise<$_model.GetIdentityProviderUdPullConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIdentityProviderUdPullConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the information of an Enterprise Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
   */
  async getInstanceWithOptions(request: $_model.GetInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstance",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceResponse({}));
  }

  /**
   * Queries the information of an Enterprise Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetInstanceRequest
   * @returns GetInstanceResponse
   */
  async getInstance(request: $_model.GetInstanceRequest): Promise<$_model.GetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceWithOptions(request, runtime);
  }

  /**
   * Query the currently effective License information of the instance
   * 
   * @remarks
   * Please ensure that your current instance is no longer in use. When the EIAM instance is deleted, all related data will be deleted.
   * 
   * @param request - GetInstanceLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceLicenseResponse
   */
  async getInstanceLicenseWithOptions(request: $_model.GetInstanceLicenseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceLicense",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceLicenseResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceLicenseResponse({}));
  }

  /**
   * Query the currently effective License information of the instance
   * 
   * @remarks
   * Please ensure that your current instance is no longer in use. When the EIAM instance is deleted, all related data will be deleted.
   * 
   * @param request - GetInstanceLicenseRequest
   * @returns GetInstanceLicenseResponse
   */
  async getInstanceLicense(request: $_model.GetInstanceLicenseRequest): Promise<$_model.GetInstanceLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceLicenseWithOptions(request, runtime);
  }

  /**
   * Get Network Endpoint Information
   * 
   * @param request - GetNetworkAccessEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNetworkAccessEndpointResponse
   */
  async getNetworkAccessEndpointWithOptions(request: $_model.GetNetworkAccessEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNetworkAccessEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkAccessEndpointId)) {
      query["NetworkAccessEndpointId"] = request.networkAccessEndpointId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNetworkAccessEndpoint",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNetworkAccessEndpointResponse>(await this.callApi(params, req, runtime), new $_model.GetNetworkAccessEndpointResponse({}));
  }

  /**
   * Get Network Endpoint Information
   * 
   * @param request - GetNetworkAccessEndpointRequest
   * @returns GetNetworkAccessEndpointResponse
   */
  async getNetworkAccessEndpoint(request: $_model.GetNetworkAccessEndpointRequest): Promise<$_model.GetNetworkAccessEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNetworkAccessEndpointWithOptions(request, runtime);
  }

  /**
   * Queries the information about an organizational unit in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOrganizationalUnitResponse
   */
  async getOrganizationalUnitWithOptions(request: $_model.GetOrganizationalUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOrganizationalUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new $_model.GetOrganizationalUnitResponse({}));
  }

  /**
   * Queries the information about an organizational unit in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetOrganizationalUnitRequest
   * @returns GetOrganizationalUnitResponse
   */
  async getOrganizationalUnit(request: $_model.GetOrganizationalUnitRequest): Promise<$_model.GetOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * Queries the password complexity configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordComplexityConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPasswordComplexityConfigurationResponse
   */
  async getPasswordComplexityConfigurationWithOptions(request: $_model.GetPasswordComplexityConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPasswordComplexityConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPasswordComplexityConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPasswordComplexityConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.GetPasswordComplexityConfigurationResponse({}));
  }

  /**
   * Queries the password complexity configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordComplexityConfigurationRequest
   * @returns GetPasswordComplexityConfigurationResponse
   */
  async getPasswordComplexityConfiguration(request: $_model.GetPasswordComplexityConfigurationRequest): Promise<$_model.GetPasswordComplexityConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPasswordComplexityConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the password expiration configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordExpirationConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPasswordExpirationConfigurationResponse
   */
  async getPasswordExpirationConfigurationWithOptions(request: $_model.GetPasswordExpirationConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPasswordExpirationConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPasswordExpirationConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPasswordExpirationConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.GetPasswordExpirationConfigurationResponse({}));
  }

  /**
   * Queries the password expiration configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordExpirationConfigurationRequest
   * @returns GetPasswordExpirationConfigurationResponse
   */
  async getPasswordExpirationConfiguration(request: $_model.GetPasswordExpirationConfigurationRequest): Promise<$_model.GetPasswordExpirationConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPasswordExpirationConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the password history configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordHistoryConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPasswordHistoryConfigurationResponse
   */
  async getPasswordHistoryConfigurationWithOptions(request: $_model.GetPasswordHistoryConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPasswordHistoryConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPasswordHistoryConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPasswordHistoryConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.GetPasswordHistoryConfigurationResponse({}));
  }

  /**
   * Queries the password history configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordHistoryConfigurationRequest
   * @returns GetPasswordHistoryConfigurationResponse
   */
  async getPasswordHistoryConfiguration(request: $_model.GetPasswordHistoryConfigurationRequest): Promise<$_model.GetPasswordHistoryConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPasswordHistoryConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the password initialization configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordInitializationConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPasswordInitializationConfigurationResponse
   */
  async getPasswordInitializationConfigurationWithOptions(request: $_model.GetPasswordInitializationConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPasswordInitializationConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPasswordInitializationConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPasswordInitializationConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.GetPasswordInitializationConfigurationResponse({}));
  }

  /**
   * Queries the password initialization configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordInitializationConfigurationRequest
   * @returns GetPasswordInitializationConfigurationResponse
   */
  async getPasswordInitializationConfiguration(request: $_model.GetPasswordInitializationConfigurationRequest): Promise<$_model.GetPasswordInitializationConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPasswordInitializationConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the information about the root organizational unit in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetRootOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRootOrganizationalUnitResponse
   */
  async getRootOrganizationalUnitWithOptions(request: $_model.GetRootOrganizationalUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRootOrganizationalUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRootOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRootOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new $_model.GetRootOrganizationalUnitResponse({}));
  }

  /**
   * Queries the information about the root organizational unit in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetRootOrganizationalUnitRequest
   * @returns GetRootOrganizationalUnitResponse
   */
  async getRootOrganizationalUnit(request: $_model.GetRootOrganizationalUnitRequest): Promise<$_model.GetRootOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRootOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * Obtains the information about a single synchronization job.
   * 
   * @param request - GetSynchronizationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSynchronizationJobResponse
   */
  async getSynchronizationJobWithOptions(request: $_model.GetSynchronizationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSynchronizationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSynchronizationJob",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSynchronizationJobResponse>(await this.callApi(params, req, runtime), new $_model.GetSynchronizationJobResponse({}));
  }

  /**
   * Obtains the information about a single synchronization job.
   * 
   * @param request - GetSynchronizationJobRequest
   * @returns GetSynchronizationJobResponse
   */
  async getSynchronizationJob(request: $_model.GetSynchronizationJobRequest): Promise<$_model.GetSynchronizationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSynchronizationJobWithOptions(request, runtime);
  }

  /**
   * Queries the details of an account in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserResponse
   */
  async getUserWithOptions(request: $_model.GetUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserResponse>(await this.callApi(params, req, runtime), new $_model.GetUserResponse({}));
  }

  /**
   * Queries the details of an account in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetUserRequest
   * @returns GetUserResponse
   */
  async getUser(request: $_model.GetUserRequest): Promise<$_model.GetUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  /**
   * Queries all client keys of an Employee Identity and Access Management (EIAM) application. The returned key secret is not masked. If you want to query the key secret that is masked, call the ObtainApplicationClientSecret operation.
   * 
   * @param request - ListApplicationClientSecretsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationClientSecretsResponse
   */
  async listApplicationClientSecretsWithOptions(request: $_model.ListApplicationClientSecretsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationClientSecretsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplicationClientSecrets",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationClientSecretsResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationClientSecretsResponse({}));
  }

  /**
   * Queries all client keys of an Employee Identity and Access Management (EIAM) application. The returned key secret is not masked. If you want to query the key secret that is masked, call the ObtainApplicationClientSecret operation.
   * 
   * @param request - ListApplicationClientSecretsRequest
   * @returns ListApplicationClientSecretsResponse
   */
  async listApplicationClientSecrets(request: $_model.ListApplicationClientSecretsRequest): Promise<$_model.ListApplicationClientSecretsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationClientSecretsWithOptions(request, runtime);
  }

  /**
   * Queries the information about one or multiple Employee Identity and Access Management (EIAM) applications by page.
   * 
   * @param request - ListApplicationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsResponse
   */
  async listApplicationsWithOptions(request: $_model.ListApplicationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationIds)) {
      query["ApplicationIds"] = request.applicationIds;
    }

    if (!$dara.isNull(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!$dara.isNull(request.authorizationType)) {
      query["AuthorizationType"] = request.authorizationType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.m2MClientStatus)) {
      query["M2MClientStatus"] = request.m2MClientStatus;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceServerStatus)) {
      query["ResourceServerStatus"] = request.resourceServerStatus;
    }

    if (!$dara.isNull(request.ssoType)) {
      query["SsoType"] = request.ssoType;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplications",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationsResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationsResponse({}));
  }

  /**
   * Queries the information about one or multiple Employee Identity and Access Management (EIAM) applications by page.
   * 
   * @param request - ListApplicationsRequest
   * @returns ListApplicationsResponse
   */
  async listApplications(request: $_model.ListApplicationsRequest): Promise<$_model.ListApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationsWithOptions(request, runtime);
  }

  /**
   * Queries the applications that an Employee Identity and Access Management (EIAM) organization can access. The return result includes the IDs of the applications. If you want to obtain the details of the applications, call the GetApplication operation.
   * 
   * @remarks
   * You can only query the permissions that are directly granted to the EIAM organization by calling the ListApplicationsForOrganizationalUnit operation. You can filter applications by configuring the **ApplicationIds** parameter when you call this operation.
   * 
   * @param request - ListApplicationsForOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsForOrganizationalUnitResponse
   */
  async listApplicationsForOrganizationalUnitWithOptions(request: $_model.ListApplicationsForOrganizationalUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationsForOrganizationalUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationIds)) {
      query["ApplicationIds"] = request.applicationIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

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
      action: "ListApplicationsForOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationsForOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationsForOrganizationalUnitResponse({}));
  }

  /**
   * Queries the applications that an Employee Identity and Access Management (EIAM) organization can access. The return result includes the IDs of the applications. If you want to obtain the details of the applications, call the GetApplication operation.
   * 
   * @remarks
   * You can only query the permissions that are directly granted to the EIAM organization by calling the ListApplicationsForOrganizationalUnit operation. You can filter applications by configuring the **ApplicationIds** parameter when you call this operation.
   * 
   * @param request - ListApplicationsForOrganizationalUnitRequest
   * @returns ListApplicationsForOrganizationalUnitResponse
   */
  async listApplicationsForOrganizationalUnit(request: $_model.ListApplicationsForOrganizationalUnitRequest): Promise<$_model.ListApplicationsForOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationsForOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * Queries the applications that an Employee Identity and Access Management (EIAM) account can access. The return result includes the IDs of the applications. If you want to obtain the details of the applications, call the GetApplication operation.
   * 
   * @param request - ListApplicationsForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsForUserResponse
   */
  async listApplicationsForUserWithOptions(request: $_model.ListApplicationsForUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationsForUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationIds)) {
      query["ApplicationIds"] = request.applicationIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryMode)) {
      query["QueryMode"] = request.queryMode;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplicationsForUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationsForUserResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationsForUserResponse({}));
  }

  /**
   * Queries the applications that an Employee Identity and Access Management (EIAM) account can access. The return result includes the IDs of the applications. If you want to obtain the details of the applications, call the GetApplication operation.
   * 
   * @param request - ListApplicationsForUserRequest
   * @returns ListApplicationsForUserResponse
   */
  async listApplicationsForUser(request: $_model.ListApplicationsForUserRequest): Promise<$_model.ListApplicationsForUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationsForUserWithOptions(request, runtime);
  }

  /**
   * List of Conditional Access Policies
   * 
   * @remarks
   * Paginated query for the list of conditional access policies
   * 
   * @param request - ListConditionalAccessPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConditionalAccessPoliciesResponse
   */
  async listConditionalAccessPoliciesWithOptions(request: $_model.ListConditionalAccessPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListConditionalAccessPoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.previousToken)) {
      query["PreviousToken"] = request.previousToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConditionalAccessPolicies",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConditionalAccessPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ListConditionalAccessPoliciesResponse({}));
  }

  /**
   * List of Conditional Access Policies
   * 
   * @remarks
   * Paginated query for the list of conditional access policies
   * 
   * @param request - ListConditionalAccessPoliciesRequest
   * @returns ListConditionalAccessPoliciesResponse
   */
  async listConditionalAccessPolicies(request: $_model.ListConditionalAccessPoliciesRequest): Promise<$_model.ListConditionalAccessPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConditionalAccessPoliciesWithOptions(request, runtime);
  }

  /**
   * List Conditional Access Policies Associated with Network Areas
   * 
   * @remarks
   * List Conditional Access Policies Associated with Network Zones
   * 
   * @param request - ListConditionalAccessPoliciesForNetworkZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConditionalAccessPoliciesForNetworkZoneResponse
   */
  async listConditionalAccessPoliciesForNetworkZoneWithOptions(request: $_model.ListConditionalAccessPoliciesForNetworkZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListConditionalAccessPoliciesForNetworkZoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkZoneId)) {
      query["NetworkZoneId"] = request.networkZoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConditionalAccessPoliciesForNetworkZone",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConditionalAccessPoliciesForNetworkZoneResponse>(await this.callApi(params, req, runtime), new $_model.ListConditionalAccessPoliciesForNetworkZoneResponse({}));
  }

  /**
   * List Conditional Access Policies Associated with Network Areas
   * 
   * @remarks
   * List Conditional Access Policies Associated with Network Zones
   * 
   * @param request - ListConditionalAccessPoliciesForNetworkZoneRequest
   * @returns ListConditionalAccessPoliciesForNetworkZoneResponse
   */
  async listConditionalAccessPoliciesForNetworkZone(request: $_model.ListConditionalAccessPoliciesForNetworkZoneRequest): Promise<$_model.ListConditionalAccessPoliciesForNetworkZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConditionalAccessPoliciesForNetworkZoneWithOptions(request, runtime);
  }

  /**
   * Queries the proxy tokens of a domain name of an Employee Identity and Access Management (EIAM) instance.
   * 
   * @param request - ListDomainProxyTokensRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDomainProxyTokensResponse
   */
  async listDomainProxyTokensWithOptions(request: $_model.ListDomainProxyTokensRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDomainProxyTokensResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDomainProxyTokens",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDomainProxyTokensResponse>(await this.callApi(params, req, runtime), new $_model.ListDomainProxyTokensResponse({}));
  }

  /**
   * Queries the proxy tokens of a domain name of an Employee Identity and Access Management (EIAM) instance.
   * 
   * @param request - ListDomainProxyTokensRequest
   * @returns ListDomainProxyTokensResponse
   */
  async listDomainProxyTokens(request: $_model.ListDomainProxyTokensRequest): Promise<$_model.ListDomainProxyTokensResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDomainProxyTokensWithOptions(request, runtime);
  }

  /**
   * Queries a list of domain names of an Employee Identity and Access Management (EIAM) instance. The list contains the initial domain name and custom domain names.
   * 
   * @param request - ListDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDomainsResponse
   */
  async listDomainsWithOptions(request: $_model.ListDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDomains",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDomainsResponse>(await this.callApi(params, req, runtime), new $_model.ListDomainsResponse({}));
  }

  /**
   * Queries a list of domain names of an Employee Identity and Access Management (EIAM) instance. The list contains the initial domain name and custom domain names.
   * 
   * @param request - ListDomainsRequest
   * @returns ListDomainsResponse
   */
  async listDomains(request: $_model.ListDomainsRequest): Promise<$_model.ListDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDomainsWithOptions(request, runtime);
  }

  /**
   * Queries the information about Employee Identity and Access Management (EIAM) V1.0 instances or EIAM V2.0 instances.
   * 
   * @param request - ListEiamInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEiamInstancesResponse
   */
  async listEiamInstancesWithOptions(request: $_model.ListEiamInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEiamInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.instanceRegionId)) {
      query["InstanceRegionId"] = request.instanceRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEiamInstances",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEiamInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListEiamInstancesResponse({}));
  }

  /**
   * Queries the information about Employee Identity and Access Management (EIAM) V1.0 instances or EIAM V2.0 instances.
   * 
   * @param request - ListEiamInstancesRequest
   * @returns ListEiamInstancesResponse
   */
  async listEiamInstances(request: $_model.ListEiamInstancesRequest): Promise<$_model.ListEiamInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEiamInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the regions in which Employee Identity and Access Management (EIAM) V1.0 instances or EIAM V2.0 instances reside.
   * 
   * @param request - ListEiamRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEiamRegionsResponse
   */
  async listEiamRegionsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListEiamRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListEiamRegions",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEiamRegionsResponse>(await this.callApi(params, req, runtime), new $_model.ListEiamRegionsResponse({}));
  }

  /**
   * Queries the regions in which Employee Identity and Access Management (EIAM) V1.0 instances or EIAM V2.0 instances reside.
   * @returns ListEiamRegionsResponse
   */
  async listEiamRegions(): Promise<$_model.ListEiamRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEiamRegionsWithOptions(runtime);
  }

  /**
   * Queries a list of account groups in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - ListGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupsResponse
   */
  async listGroupsWithOptions(request: $_model.ListGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupExternalId)) {
      query["GroupExternalId"] = request.groupExternalId;
    }

    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.groupNameStartsWith)) {
      query["GroupNameStartsWith"] = request.groupNameStartsWith;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

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
      action: "ListGroups",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListGroupsResponse({}));
  }

  /**
   * Queries a list of account groups in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - ListGroupsRequest
   * @returns ListGroupsResponse
   */
  async listGroups(request: $_model.ListGroupsRequest): Promise<$_model.ListGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGroupsWithOptions(request, runtime);
  }

  /**
   * Queries a list of account groups to which the permissions to access an application are granted. The returned results contain the group IDs. You can call the GetGroup operation to query the information about an account group based on the group ID.
   * 
   * @param request - ListGroupsForApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupsForApplicationResponse
   */
  async listGroupsForApplicationWithOptions(request: $_model.ListGroupsForApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGroupsForApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

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
      action: "ListGroupsForApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGroupsForApplicationResponse>(await this.callApi(params, req, runtime), new $_model.ListGroupsForApplicationResponse({}));
  }

  /**
   * Queries a list of account groups to which the permissions to access an application are granted. The returned results contain the group IDs. You can call the GetGroup operation to query the information about an account group based on the group ID.
   * 
   * @param request - ListGroupsForApplicationRequest
   * @returns ListGroupsForApplicationResponse
   */
  async listGroupsForApplication(request: $_model.ListGroupsForApplicationRequest): Promise<$_model.ListGroupsForApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGroupsForApplicationWithOptions(request, runtime);
  }

  /**
   * Queries a list of account groups to which an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS) belongs.
   * 
   * @param request - ListGroupsForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupsForUserResponse
   */
  async listGroupsForUserWithOptions(request: $_model.ListGroupsForUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGroupsForUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGroupsForUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGroupsForUserResponse>(await this.callApi(params, req, runtime), new $_model.ListGroupsForUserResponse({}));
  }

  /**
   * Queries a list of account groups to which an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS) belongs.
   * 
   * @param request - ListGroupsForUserRequest
   * @returns ListGroupsForUserResponse
   */
  async listGroupsForUser(request: $_model.ListGroupsForUserRequest): Promise<$_model.ListGroupsForUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGroupsForUserWithOptions(request, runtime);
  }

  /**
   * Query the list of identity providers.
   * 
   * @param request - ListIdentityProvidersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIdentityProvidersResponse
   */
  async listIdentityProvidersWithOptions(request: $_model.ListIdentityProvidersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIdentityProvidersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

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
      action: "ListIdentityProviders",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIdentityProvidersResponse>(await this.callApi(params, req, runtime), new $_model.ListIdentityProvidersResponse({}));
  }

  /**
   * Query the list of identity providers.
   * 
   * @param request - ListIdentityProvidersRequest
   * @returns ListIdentityProvidersResponse
   */
  async listIdentityProviders(request: $_model.ListIdentityProvidersRequest): Promise<$_model.ListIdentityProvidersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIdentityProvidersWithOptions(request, runtime);
  }

  /**
   * Queries the information of one or more Enterprise Identity and Access Management (EIAM) instances of Identity as a Service (IDaaS).
   * 
   * @param request - ListInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(request: $_model.ListInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancesResponse({}));
  }

  /**
   * Queries the information of one or more Enterprise Identity and Access Management (EIAM) instances of Identity as a Service (IDaaS).
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: $_model.ListInstancesRequest): Promise<$_model.ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  /**
   * Get a list of regions that support network access endpoints.
   * 
   * @param request - ListNetworkAccessEndpointAvailableRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNetworkAccessEndpointAvailableRegionsResponse
   */
  async listNetworkAccessEndpointAvailableRegionsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListNetworkAccessEndpointAvailableRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListNetworkAccessEndpointAvailableRegions",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNetworkAccessEndpointAvailableRegionsResponse>(await this.callApi(params, req, runtime), new $_model.ListNetworkAccessEndpointAvailableRegionsResponse({}));
  }

  /**
   * Get a list of regions that support network access endpoints.
   * @returns ListNetworkAccessEndpointAvailableRegionsResponse
   */
  async listNetworkAccessEndpointAvailableRegions(): Promise<$_model.ListNetworkAccessEndpointAvailableRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNetworkAccessEndpointAvailableRegionsWithOptions(runtime);
  }

  /**
   * 获取支持NAE的可用区列表
   * 
   * @param request - ListNetworkAccessEndpointAvailableZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNetworkAccessEndpointAvailableZonesResponse
   */
  async listNetworkAccessEndpointAvailableZonesWithOptions(request: $_model.ListNetworkAccessEndpointAvailableZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNetworkAccessEndpointAvailableZonesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.naeRegionId)) {
      query["NaeRegionId"] = request.naeRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNetworkAccessEndpointAvailableZones",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNetworkAccessEndpointAvailableZonesResponse>(await this.callApi(params, req, runtime), new $_model.ListNetworkAccessEndpointAvailableZonesResponse({}));
  }

  /**
   * 获取支持NAE的可用区列表
   * 
   * @param request - ListNetworkAccessEndpointAvailableZonesRequest
   * @returns ListNetworkAccessEndpointAvailableZonesResponse
   */
  async listNetworkAccessEndpointAvailableZones(request: $_model.ListNetworkAccessEndpointAvailableZonesRequest): Promise<$_model.ListNetworkAccessEndpointAvailableZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNetworkAccessEndpointAvailableZonesWithOptions(request, runtime);
  }

  /**
   * 列表查询专属网络端点。
   * 
   * @param request - ListNetworkAccessEndpointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNetworkAccessEndpointsResponse
   */
  async listNetworkAccessEndpointsWithOptions(request: $_model.ListNetworkAccessEndpointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNetworkAccessEndpointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.networkAccessEndpointStatus)) {
      query["NetworkAccessEndpointStatus"] = request.networkAccessEndpointStatus;
    }

    if (!$dara.isNull(request.networkAccessEndpointType)) {
      query["NetworkAccessEndpointType"] = request.networkAccessEndpointType;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vpcRegionId)) {
      query["VpcRegionId"] = request.vpcRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNetworkAccessEndpoints",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNetworkAccessEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.ListNetworkAccessEndpointsResponse({}));
  }

  /**
   * 列表查询专属网络端点。
   * 
   * @param request - ListNetworkAccessEndpointsRequest
   * @returns ListNetworkAccessEndpointsResponse
   */
  async listNetworkAccessEndpoints(request: $_model.ListNetworkAccessEndpointsRequest): Promise<$_model.ListNetworkAccessEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNetworkAccessEndpointsWithOptions(request, runtime);
  }

  /**
   * List the access paths under a certain network access endpoint.
   * 
   * @param request - ListNetworkAccessPathsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNetworkAccessPathsResponse
   */
  async listNetworkAccessPathsWithOptions(request: $_model.ListNetworkAccessPathsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNetworkAccessPathsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkAccessEndpointId)) {
      query["NetworkAccessEndpointId"] = request.networkAccessEndpointId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNetworkAccessPaths",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNetworkAccessPathsResponse>(await this.callApi(params, req, runtime), new $_model.ListNetworkAccessPathsResponse({}));
  }

  /**
   * List the access paths under a certain network access endpoint.
   * 
   * @param request - ListNetworkAccessPathsRequest
   * @returns ListNetworkAccessPathsResponse
   */
  async listNetworkAccessPaths(request: $_model.ListNetworkAccessPathsRequest): Promise<$_model.ListNetworkAccessPathsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNetworkAccessPathsWithOptions(request, runtime);
  }

  /**
   * Queries all parent organizations of an Employee Identity and Access Management (EIAM) organization.
   * 
   * @param request - ListOrganizationalUnitParentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOrganizationalUnitParentsResponse
   */
  async listOrganizationalUnitParentsWithOptions(request: $_model.ListOrganizationalUnitParentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOrganizationalUnitParentsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOrganizationalUnitParents",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOrganizationalUnitParentsResponse>(await this.callApi(params, req, runtime), new $_model.ListOrganizationalUnitParentsResponse({}));
  }

  /**
   * Queries all parent organizations of an Employee Identity and Access Management (EIAM) organization.
   * 
   * @param request - ListOrganizationalUnitParentsRequest
   * @returns ListOrganizationalUnitParentsResponse
   */
  async listOrganizationalUnitParents(request: $_model.ListOrganizationalUnitParentsRequest): Promise<$_model.ListOrganizationalUnitParentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOrganizationalUnitParentsWithOptions(request, runtime);
  }

  /**
   * Queries the information about organizational units in Identity as a Service (IDaaS) Employee IAM (EIAM) by page.
   * 
   * @param request - ListOrganizationalUnitsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOrganizationalUnitsResponse
   */
  async listOrganizationalUnitsWithOptions(request: $_model.ListOrganizationalUnitsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOrganizationalUnitsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

    if (!$dara.isNull(request.organizationalUnitName)) {
      query["OrganizationalUnitName"] = request.organizationalUnitName;
    }

    if (!$dara.isNull(request.organizationalUnitNameStartsWith)) {
      query["OrganizationalUnitNameStartsWith"] = request.organizationalUnitNameStartsWith;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOrganizationalUnits",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOrganizationalUnitsResponse>(await this.callApi(params, req, runtime), new $_model.ListOrganizationalUnitsResponse({}));
  }

  /**
   * Queries the information about organizational units in Identity as a Service (IDaaS) Employee IAM (EIAM) by page.
   * 
   * @param request - ListOrganizationalUnitsRequest
   * @returns ListOrganizationalUnitsResponse
   */
  async listOrganizationalUnits(request: $_model.ListOrganizationalUnitsRequest): Promise<$_model.ListOrganizationalUnitsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOrganizationalUnitsWithOptions(request, runtime);
  }

  /**
   * Queries the organizations that are allowed to access an Employee Identity and Access Management (EIAM) application by page. The return result includes the IDs of the organizations. If you want to obtain the details of the organizations, call the GetOrganizationalUnit operation.
   * 
   * @param request - ListOrganizationalUnitsForApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOrganizationalUnitsForApplicationResponse
   */
  async listOrganizationalUnitsForApplicationWithOptions(request: $_model.ListOrganizationalUnitsForApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOrganizationalUnitsForApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

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
      action: "ListOrganizationalUnitsForApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOrganizationalUnitsForApplicationResponse>(await this.callApi(params, req, runtime), new $_model.ListOrganizationalUnitsForApplicationResponse({}));
  }

  /**
   * Queries the organizations that are allowed to access an Employee Identity and Access Management (EIAM) application by page. The return result includes the IDs of the organizations. If you want to obtain the details of the organizations, call the GetOrganizationalUnit operation.
   * 
   * @param request - ListOrganizationalUnitsForApplicationRequest
   * @returns ListOrganizationalUnitsForApplicationResponse
   */
  async listOrganizationalUnitsForApplication(request: $_model.ListOrganizationalUnitsForApplicationRequest): Promise<$_model.ListOrganizationalUnitsForApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOrganizationalUnitsForApplicationWithOptions(request, runtime);
  }

  /**
   * Queries the supported Alibaba Cloud regions.
   * 
   * @param request - ListRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegionsResponse
   */
  async listRegionsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListRegions",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRegionsResponse>(await this.callApi(params, req, runtime), new $_model.ListRegionsResponse({}));
  }

  /**
   * Queries the supported Alibaba Cloud regions.
   * @returns ListRegionsResponse
   */
  async listRegions(): Promise<$_model.ListRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRegionsWithOptions(runtime);
  }

  /**
   * 查询同步任务
   * 
   * @param request - ListSynchronizationJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSynchronizationJobsResponse
   */
  async listSynchronizationJobsWithOptions(request: $_model.ListSynchronizationJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSynchronizationJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.targetIds)) {
      query["TargetIds"] = request.targetIds;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSynchronizationJobs",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSynchronizationJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListSynchronizationJobsResponse({}));
  }

  /**
   * 查询同步任务
   * 
   * @param request - ListSynchronizationJobsRequest
   * @returns ListSynchronizationJobsResponse
   */
  async listSynchronizationJobs(request: $_model.ListSynchronizationJobsRequest): Promise<$_model.ListSynchronizationJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSynchronizationJobsWithOptions(request, runtime);
  }

  /**
   * Queries the details of accounts in Identity as a Service (IDaaS) Employee IAM (EIAM) by page.
   * 
   * @param request - ListUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
   */
  async listUsersWithOptions(request: $_model.ListUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.displayNameStartsWith)) {
      query["DisplayNameStartsWith"] = request.displayNameStartsWith;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.phoneRegion)) {
      query["PhoneRegion"] = request.phoneRegion;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.userExternalId)) {
      query["UserExternalId"] = request.userExternalId;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    if (!$dara.isNull(request.userSourceId)) {
      query["UserSourceId"] = request.userSourceId;
    }

    if (!$dara.isNull(request.userSourceType)) {
      query["UserSourceType"] = request.userSourceType;
    }

    if (!$dara.isNull(request.usernameStartsWith)) {
      query["UsernameStartsWith"] = request.usernameStartsWith;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsers",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUsersResponse>(await this.callApi(params, req, runtime), new $_model.ListUsersResponse({}));
  }

  /**
   * Queries the details of accounts in Identity as a Service (IDaaS) Employee IAM (EIAM) by page.
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: $_model.ListUsersRequest): Promise<$_model.ListUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  /**
   * Queries the accounts that are allowed to access an Employee Identity and Access Management (EIAM) application. The return results include the IDs of the accounts. If you need to obtain the details of the accounts, call the GetUser operation.
   * 
   * @param request - ListUsersForApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersForApplicationResponse
   */
  async listUsersForApplicationWithOptions(request: $_model.ListUsersForApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersForApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsersForApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUsersForApplicationResponse>(await this.callApi(params, req, runtime), new $_model.ListUsersForApplicationResponse({}));
  }

  /**
   * Queries the accounts that are allowed to access an Employee Identity and Access Management (EIAM) application. The return results include the IDs of the accounts. If you need to obtain the details of the accounts, call the GetUser operation.
   * 
   * @param request - ListUsersForApplicationRequest
   * @returns ListUsersForApplicationResponse
   */
  async listUsersForApplication(request: $_model.ListUsersForApplicationRequest): Promise<$_model.ListUsersForApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersForApplicationWithOptions(request, runtime);
  }

  /**
   * Queries the information of accounts in an Employee Identity and Access Management (EIAM) group of Identity as a Service (IDaaS).
   * 
   * @param request - ListUsersForGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersForGroupResponse
   */
  async listUsersForGroupWithOptions(request: $_model.ListUsersForGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersForGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsersForGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUsersForGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListUsersForGroupResponse({}));
  }

  /**
   * Queries the information of accounts in an Employee Identity and Access Management (EIAM) group of Identity as a Service (IDaaS).
   * 
   * @param request - ListUsersForGroupRequest
   * @returns ListUsersForGroupResponse
   */
  async listUsersForGroup(request: $_model.ListUsersForGroupRequest): Promise<$_model.ListUsersForGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersForGroupWithOptions(request, runtime);
  }

  /**
   * Queries a client key of an Employee Identity and Access Management (EIAM) application. The returned key secret is masked. If you want to query the key secret that is not masked, call the ListApplicationClientSecrets operation.
   * 
   * @param request - ObtainApplicationClientSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ObtainApplicationClientSecretResponse
   */
  async obtainApplicationClientSecretWithOptions(request: $_model.ObtainApplicationClientSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ObtainApplicationClientSecretResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ObtainApplicationClientSecret",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ObtainApplicationClientSecretResponse>(await this.callApi(params, req, runtime), new $_model.ObtainApplicationClientSecretResponse({}));
  }

  /**
   * Queries a client key of an Employee Identity and Access Management (EIAM) application. The returned key secret is masked. If you want to query the key secret that is not masked, call the ListApplicationClientSecrets operation.
   * 
   * @param request - ObtainApplicationClientSecretRequest
   * @returns ObtainApplicationClientSecretResponse
   */
  async obtainApplicationClientSecret(request: $_model.ObtainApplicationClientSecretRequest): Promise<$_model.ObtainApplicationClientSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.obtainApplicationClientSecretWithOptions(request, runtime);
  }

  /**
   * Queries the information about a proxy token of a domain name of an Employee Identity and Access Management (EIAM) instance.
   * 
   * @param request - ObtainDomainProxyTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ObtainDomainProxyTokenResponse
   */
  async obtainDomainProxyTokenWithOptions(request: $_model.ObtainDomainProxyTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ObtainDomainProxyTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.domainProxyTokenId)) {
      query["DomainProxyTokenId"] = request.domainProxyTokenId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ObtainDomainProxyToken",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ObtainDomainProxyTokenResponse>(await this.callApi(params, req, runtime), new $_model.ObtainDomainProxyTokenResponse({}));
  }

  /**
   * Queries the information about a proxy token of a domain name of an Employee Identity and Access Management (EIAM) instance.
   * 
   * @param request - ObtainDomainProxyTokenRequest
   * @returns ObtainDomainProxyTokenResponse
   */
  async obtainDomainProxyToken(request: $_model.ObtainDomainProxyTokenRequest): Promise<$_model.ObtainDomainProxyTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.obtainDomainProxyTokenWithOptions(request, runtime);
  }

  /**
   * Removes an Employee Identity and Access Management (EIAM) account from multiple EIAM organizations of Identity as a Service (IDaaS). You cannot remove an account from a primary organization.
   * 
   * @param request - RemoveUserFromOrganizationalUnitsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUserFromOrganizationalUnitsResponse
   */
  async removeUserFromOrganizationalUnitsWithOptions(request: $_model.RemoveUserFromOrganizationalUnitsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveUserFromOrganizationalUnitsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveUserFromOrganizationalUnits",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveUserFromOrganizationalUnitsResponse>(await this.callApi(params, req, runtime), new $_model.RemoveUserFromOrganizationalUnitsResponse({}));
  }

  /**
   * Removes an Employee Identity and Access Management (EIAM) account from multiple EIAM organizations of Identity as a Service (IDaaS). You cannot remove an account from a primary organization.
   * 
   * @param request - RemoveUserFromOrganizationalUnitsRequest
   * @returns RemoveUserFromOrganizationalUnitsResponse
   */
  async removeUserFromOrganizationalUnits(request: $_model.RemoveUserFromOrganizationalUnitsRequest): Promise<$_model.RemoveUserFromOrganizationalUnitsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeUserFromOrganizationalUnitsWithOptions(request, runtime);
  }

  /**
   * Removes Employee Identity and Access Management (EIAM) accounts from an EIAM group of Identity as a Service (IDaaS).
   * 
   * @param request - RemoveUsersFromGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUsersFromGroupResponse
   */
  async removeUsersFromGroupWithOptions(request: $_model.RemoveUsersFromGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveUsersFromGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveUsersFromGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveUsersFromGroupResponse>(await this.callApi(params, req, runtime), new $_model.RemoveUsersFromGroupResponse({}));
  }

  /**
   * Removes Employee Identity and Access Management (EIAM) accounts from an EIAM group of Identity as a Service (IDaaS).
   * 
   * @param request - RemoveUsersFromGroupRequest
   * @returns RemoveUsersFromGroupResponse
   */
  async removeUsersFromGroup(request: $_model.RemoveUsersFromGroupRequest): Promise<$_model.RemoveUsersFromGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeUsersFromGroupWithOptions(request, runtime);
  }

  /**
   * Revokes the permissions to access an application from multiple account groups at a time in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - RevokeApplicationFromGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeApplicationFromGroupsResponse
   */
  async revokeApplicationFromGroupsWithOptions(request: $_model.RevokeApplicationFromGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeApplicationFromGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeApplicationFromGroups",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeApplicationFromGroupsResponse>(await this.callApi(params, req, runtime), new $_model.RevokeApplicationFromGroupsResponse({}));
  }

  /**
   * Revokes the permissions to access an application from multiple account groups at a time in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - RevokeApplicationFromGroupsRequest
   * @returns RevokeApplicationFromGroupsResponse
   */
  async revokeApplicationFromGroups(request: $_model.RevokeApplicationFromGroupsRequest): Promise<$_model.RevokeApplicationFromGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeApplicationFromGroupsWithOptions(request, runtime);
  }

  /**
   * Revokes the permissions to access an application from multiple Employee Identity and Access Management (EIAM) organizations at a time.
   * 
   * @param request - RevokeApplicationFromOrganizationalUnitsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeApplicationFromOrganizationalUnitsResponse
   */
  async revokeApplicationFromOrganizationalUnitsWithOptions(request: $_model.RevokeApplicationFromOrganizationalUnitsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeApplicationFromOrganizationalUnitsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeApplicationFromOrganizationalUnits",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeApplicationFromOrganizationalUnitsResponse>(await this.callApi(params, req, runtime), new $_model.RevokeApplicationFromOrganizationalUnitsResponse({}));
  }

  /**
   * Revokes the permissions to access an application from multiple Employee Identity and Access Management (EIAM) organizations at a time.
   * 
   * @param request - RevokeApplicationFromOrganizationalUnitsRequest
   * @returns RevokeApplicationFromOrganizationalUnitsResponse
   */
  async revokeApplicationFromOrganizationalUnits(request: $_model.RevokeApplicationFromOrganizationalUnitsRequest): Promise<$_model.RevokeApplicationFromOrganizationalUnitsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeApplicationFromOrganizationalUnitsWithOptions(request, runtime);
  }

  /**
   * Revokes the permissions to access an application from multiple Employee Identity and Access Management (EIAM) accounts at a time.
   * 
   * @param request - RevokeApplicationFromUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeApplicationFromUsersResponse
   */
  async revokeApplicationFromUsersWithOptions(request: $_model.RevokeApplicationFromUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeApplicationFromUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeApplicationFromUsers",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeApplicationFromUsersResponse>(await this.callApi(params, req, runtime), new $_model.RevokeApplicationFromUsersResponse({}));
  }

  /**
   * Revokes the permissions to access an application from multiple Employee Identity and Access Management (EIAM) accounts at a time.
   * 
   * @param request - RevokeApplicationFromUsersRequest
   * @returns RevokeApplicationFromUsersResponse
   */
  async revokeApplicationFromUsers(request: $_model.RevokeApplicationFromUsersRequest): Promise<$_model.RevokeApplicationFromUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeApplicationFromUsersWithOptions(request, runtime);
  }

  /**
   * Creates a synchronization job and immediately runs the job.
   * 
   * @param request - RunSynchronizationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunSynchronizationJobResponse
   */
  async runSynchronizationJobWithOptions(request: $_model.RunSynchronizationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunSynchronizationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.passwordInitialization)) {
      query["PasswordInitialization"] = request.passwordInitialization;
    }

    if (!$dara.isNull(request.synchronizationScopeConfig)) {
      query["SynchronizationScopeConfig"] = request.synchronizationScopeConfig;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    if (!$dara.isNull(request.userIdentityTypes)) {
      query["UserIdentityTypes"] = request.userIdentityTypes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunSynchronizationJob",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunSynchronizationJobResponse>(await this.callApi(params, req, runtime), new $_model.RunSynchronizationJobResponse({}));
  }

  /**
   * Creates a synchronization job and immediately runs the job.
   * 
   * @param request - RunSynchronizationJobRequest
   * @returns RunSynchronizationJobResponse
   */
  async runSynchronizationJob(request: $_model.RunSynchronizationJobRequest): Promise<$_model.RunSynchronizationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runSynchronizationJobWithOptions(request, runtime);
  }

  /**
   * Configures the permissions of the Developer API feature of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - SetApplicationGrantScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetApplicationGrantScopeResponse
   */
  async setApplicationGrantScopeWithOptions(request: $_model.SetApplicationGrantScopeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetApplicationGrantScopeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.grantScopes)) {
      query["GrantScopes"] = request.grantScopes;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetApplicationGrantScope",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetApplicationGrantScopeResponse>(await this.callApi(params, req, runtime), new $_model.SetApplicationGrantScopeResponse({}));
  }

  /**
   * Configures the permissions of the Developer API feature of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - SetApplicationGrantScopeRequest
   * @returns SetApplicationGrantScopeResponse
   */
  async setApplicationGrantScope(request: $_model.SetApplicationGrantScopeRequest): Promise<$_model.SetApplicationGrantScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setApplicationGrantScopeWithOptions(request, runtime);
  }

  /**
   * Configures the account synchronization feature for an application in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - SetApplicationProvisioningConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetApplicationProvisioningConfigResponse
   */
  async setApplicationProvisioningConfigWithOptions(request: $_model.SetApplicationProvisioningConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetApplicationProvisioningConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.callbackProvisioningConfig)) {
      query["CallbackProvisioningConfig"] = request.callbackProvisioningConfig;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.provisionPassword)) {
      query["ProvisionPassword"] = request.provisionPassword;
    }

    if (!$dara.isNull(request.provisionProtocolType)) {
      query["ProvisionProtocolType"] = request.provisionProtocolType;
    }

    if (!$dara.isNull(request.scimProvisioningConfig)) {
      query["ScimProvisioningConfig"] = request.scimProvisioningConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetApplicationProvisioningConfig",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetApplicationProvisioningConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetApplicationProvisioningConfigResponse({}));
  }

  /**
   * Configures the account synchronization feature for an application in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - SetApplicationProvisioningConfigRequest
   * @returns SetApplicationProvisioningConfigResponse
   */
  async setApplicationProvisioningConfig(request: $_model.SetApplicationProvisioningConfigRequest): Promise<$_model.SetApplicationProvisioningConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setApplicationProvisioningConfigWithOptions(request, runtime);
  }

  /**
   * Sets the account synchronization scope of applications in Identity as a Service (IDaaS) Employee IAM (EIAM). This scope is the same as the scope within which developers can call the DeveloperAPI to query and manage accounts.
   * 
   * @param request - SetApplicationProvisioningScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetApplicationProvisioningScopeResponse
   */
  async setApplicationProvisioningScopeWithOptions(request: $_model.SetApplicationProvisioningScopeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetApplicationProvisioningScopeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetApplicationProvisioningScope",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetApplicationProvisioningScopeResponse>(await this.callApi(params, req, runtime), new $_model.SetApplicationProvisioningScopeResponse({}));
  }

  /**
   * Sets the account synchronization scope of applications in Identity as a Service (IDaaS) Employee IAM (EIAM). This scope is the same as the scope within which developers can call the DeveloperAPI to query and manage accounts.
   * 
   * @param request - SetApplicationProvisioningScopeRequest
   * @returns SetApplicationProvisioningScopeResponse
   */
  async setApplicationProvisioningScope(request: $_model.SetApplicationProvisioningScopeRequest): Promise<$_model.SetApplicationProvisioningScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setApplicationProvisioningScopeWithOptions(request, runtime);
  }

  /**
   * Specifies the single sign-on (SSO) configuration attributes of an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @remarks
   * In IDaaS EIAM, the application management feature supports multiple SSO protocols for applications, including SAML 2.0 and OIDC protocols. Each application supports only one protocol, and the protocol cannot be changed after the application is created. You can specify the SSO configuration attributes of an application based on the supported SSO protocol.
   * 
   * @param request - SetApplicationSsoConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetApplicationSsoConfigResponse
   */
  async setApplicationSsoConfigWithOptions(request: $_model.SetApplicationSsoConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetApplicationSsoConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.initLoginType)) {
      query["InitLoginType"] = request.initLoginType;
    }

    if (!$dara.isNull(request.initLoginUrl)) {
      query["InitLoginUrl"] = request.initLoginUrl;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.oidcSsoConfig)) {
      query["OidcSsoConfig"] = request.oidcSsoConfig;
    }

    if (!$dara.isNull(request.samlSsoConfig)) {
      query["SamlSsoConfig"] = request.samlSsoConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetApplicationSsoConfig",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetApplicationSsoConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetApplicationSsoConfigResponse({}));
  }

  /**
   * Specifies the single sign-on (SSO) configuration attributes of an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @remarks
   * In IDaaS EIAM, the application management feature supports multiple SSO protocols for applications, including SAML 2.0 and OIDC protocols. Each application supports only one protocol, and the protocol cannot be changed after the application is created. You can specify the SSO configuration attributes of an application based on the supported SSO protocol.
   * 
   * @param request - SetApplicationSsoConfigRequest
   * @returns SetApplicationSsoConfigResponse
   */
  async setApplicationSsoConfig(request: $_model.SetApplicationSsoConfigRequest): Promise<$_model.SetApplicationSsoConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setApplicationSsoConfigWithOptions(request, runtime);
  }

  /**
   * Sets a domain name of an Employee Identity and Access Management (EIAM) instance as the default domain name.
   * 
   * @param request - SetDefaultDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDefaultDomainResponse
   */
  async setDefaultDomainWithOptions(request: $_model.SetDefaultDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDefaultDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDefaultDomain",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDefaultDomainResponse>(await this.callApi(params, req, runtime), new $_model.SetDefaultDomainResponse({}));
  }

  /**
   * Sets a domain name of an Employee Identity and Access Management (EIAM) instance as the default domain name.
   * 
   * @param request - SetDefaultDomainRequest
   * @returns SetDefaultDomainResponse
   */
  async setDefaultDomain(request: $_model.SetDefaultDomainRequest): Promise<$_model.SetDefaultDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDefaultDomainWithOptions(request, runtime);
  }

  /**
   * Configures a forgot password policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetForgetPasswordConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetForgetPasswordConfigurationResponse
   */
  async setForgetPasswordConfigurationWithOptions(request: $_model.SetForgetPasswordConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetForgetPasswordConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authenticationChannels)) {
      query["AuthenticationChannels"] = request.authenticationChannels;
    }

    if (!$dara.isNull(request.forgetPasswordStatus)) {
      query["ForgetPasswordStatus"] = request.forgetPasswordStatus;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetForgetPasswordConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetForgetPasswordConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.SetForgetPasswordConfigurationResponse({}));
  }

  /**
   * Configures a forgot password policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetForgetPasswordConfigurationRequest
   * @returns SetForgetPasswordConfigurationResponse
   */
  async setForgetPasswordConfiguration(request: $_model.SetForgetPasswordConfigurationRequest): Promise<$_model.SetForgetPasswordConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setForgetPasswordConfigurationWithOptions(request, runtime);
  }

  /**
   * Update IdP synchronization configuration.
   * 
   * @param request - SetIdentityProviderUdPullConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetIdentityProviderUdPullConfigurationResponse
   */
  async setIdentityProviderUdPullConfigurationWithOptions(request: $_model.SetIdentityProviderUdPullConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetIdentityProviderUdPullConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupSyncStatus)) {
      query["GroupSyncStatus"] = request.groupSyncStatus;
    }

    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.incrementalCallbackStatus)) {
      query["IncrementalCallbackStatus"] = request.incrementalCallbackStatus;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ldapUdPullConfig)) {
      query["LdapUdPullConfig"] = request.ldapUdPullConfig;
    }

    if (!$dara.isNull(request.periodicSyncConfig)) {
      query["PeriodicSyncConfig"] = request.periodicSyncConfig;
    }

    if (!$dara.isNull(request.periodicSyncStatus)) {
      query["PeriodicSyncStatus"] = request.periodicSyncStatus;
    }

    if (!$dara.isNull(request.pullProtectedRule)) {
      query["PullProtectedRule"] = request.pullProtectedRule;
    }

    if (!$dara.isNull(request.udSyncScopeConfig)) {
      query["UdSyncScopeConfig"] = request.udSyncScopeConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetIdentityProviderUdPullConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetIdentityProviderUdPullConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.SetIdentityProviderUdPullConfigurationResponse({}));
  }

  /**
   * Update IdP synchronization configuration.
   * 
   * @param request - SetIdentityProviderUdPullConfigurationRequest
   * @returns SetIdentityProviderUdPullConfigurationResponse
   */
  async setIdentityProviderUdPullConfiguration(request: $_model.SetIdentityProviderUdPullConfigurationRequest): Promise<$_model.SetIdentityProviderUdPullConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setIdentityProviderUdPullConfigurationWithOptions(request, runtime);
  }

  /**
   * Configures a password complexity policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordComplexityConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPasswordComplexityConfigurationResponse
   */
  async setPasswordComplexityConfigurationWithOptions(request: $_model.SetPasswordComplexityConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetPasswordComplexityConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.passwordComplexityRules)) {
      query["PasswordComplexityRules"] = request.passwordComplexityRules;
    }

    if (!$dara.isNull(request.passwordMinLength)) {
      query["PasswordMinLength"] = request.passwordMinLength;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetPasswordComplexityConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetPasswordComplexityConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.SetPasswordComplexityConfigurationResponse({}));
  }

  /**
   * Configures a password complexity policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordComplexityConfigurationRequest
   * @returns SetPasswordComplexityConfigurationResponse
   */
  async setPasswordComplexityConfiguration(request: $_model.SetPasswordComplexityConfigurationRequest): Promise<$_model.SetPasswordComplexityConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setPasswordComplexityConfigurationWithOptions(request, runtime);
  }

  /**
   * Configures a password expiration policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordExpirationConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPasswordExpirationConfigurationResponse
   */
  async setPasswordExpirationConfigurationWithOptions(request: $_model.SetPasswordExpirationConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetPasswordExpirationConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.effectiveAuthenticationSourceIds)) {
      query["EffectiveAuthenticationSourceIds"] = request.effectiveAuthenticationSourceIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.passwordExpirationAction)) {
      query["PasswordExpirationAction"] = request.passwordExpirationAction;
    }

    if (!$dara.isNull(request.passwordExpirationNotificationChannels)) {
      query["PasswordExpirationNotificationChannels"] = request.passwordExpirationNotificationChannels;
    }

    if (!$dara.isNull(request.passwordExpirationNotificationDuration)) {
      query["PasswordExpirationNotificationDuration"] = request.passwordExpirationNotificationDuration;
    }

    if (!$dara.isNull(request.passwordExpirationNotificationStatus)) {
      query["PasswordExpirationNotificationStatus"] = request.passwordExpirationNotificationStatus;
    }

    if (!$dara.isNull(request.passwordExpirationStatus)) {
      query["PasswordExpirationStatus"] = request.passwordExpirationStatus;
    }

    if (!$dara.isNull(request.passwordForcedUpdateDuration)) {
      query["PasswordForcedUpdateDuration"] = request.passwordForcedUpdateDuration;
    }

    if (!$dara.isNull(request.passwordValidMaxDay)) {
      query["PasswordValidMaxDay"] = request.passwordValidMaxDay;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetPasswordExpirationConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetPasswordExpirationConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.SetPasswordExpirationConfigurationResponse({}));
  }

  /**
   * Configures a password expiration policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordExpirationConfigurationRequest
   * @returns SetPasswordExpirationConfigurationResponse
   */
  async setPasswordExpirationConfiguration(request: $_model.SetPasswordExpirationConfigurationRequest): Promise<$_model.SetPasswordExpirationConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setPasswordExpirationConfigurationWithOptions(request, runtime);
  }

  /**
   * Configures a password history policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordHistoryConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPasswordHistoryConfigurationResponse
   */
  async setPasswordHistoryConfigurationWithOptions(request: $_model.SetPasswordHistoryConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetPasswordHistoryConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.passwordHistoryMaxRetention)) {
      query["PasswordHistoryMaxRetention"] = request.passwordHistoryMaxRetention;
    }

    if (!$dara.isNull(request.passwordHistoryStatus)) {
      query["PasswordHistoryStatus"] = request.passwordHistoryStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetPasswordHistoryConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetPasswordHistoryConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.SetPasswordHistoryConfigurationResponse({}));
  }

  /**
   * Configures a password history policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordHistoryConfigurationRequest
   * @returns SetPasswordHistoryConfigurationResponse
   */
  async setPasswordHistoryConfiguration(request: $_model.SetPasswordHistoryConfigurationRequest): Promise<$_model.SetPasswordHistoryConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setPasswordHistoryConfigurationWithOptions(request, runtime);
  }

  /**
   * Sets the password initialization configurations for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordInitializationConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPasswordInitializationConfigurationResponse
   */
  async setPasswordInitializationConfigurationWithOptions(request: $_model.SetPasswordInitializationConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetPasswordInitializationConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.passwordForcedUpdateStatus)) {
      query["PasswordForcedUpdateStatus"] = request.passwordForcedUpdateStatus;
    }

    if (!$dara.isNull(request.passwordInitializationNotificationChannels)) {
      query["PasswordInitializationNotificationChannels"] = request.passwordInitializationNotificationChannels;
    }

    if (!$dara.isNull(request.passwordInitializationStatus)) {
      query["PasswordInitializationStatus"] = request.passwordInitializationStatus;
    }

    if (!$dara.isNull(request.passwordInitializationType)) {
      query["PasswordInitializationType"] = request.passwordInitializationType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetPasswordInitializationConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetPasswordInitializationConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.SetPasswordInitializationConfigurationResponse({}));
  }

  /**
   * Sets the password initialization configurations for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordInitializationConfigurationRequest
   * @returns SetPasswordInitializationConfigurationResponse
   */
  async setPasswordInitializationConfiguration(request: $_model.SetPasswordInitializationConfigurationRequest): Promise<$_model.SetPasswordInitializationConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setPasswordInitializationConfigurationWithOptions(request, runtime);
  }

  /**
   * Updates the primary organizational unit to which an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account belongs. This account will be removed from the previous primary organizational unit and added to the new primary organization.
   * 
   * @param request - SetUserPrimaryOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetUserPrimaryOrganizationalUnitResponse
   */
  async setUserPrimaryOrganizationalUnitWithOptions(request: $_model.SetUserPrimaryOrganizationalUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetUserPrimaryOrganizationalUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetUserPrimaryOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetUserPrimaryOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new $_model.SetUserPrimaryOrganizationalUnitResponse({}));
  }

  /**
   * Updates the primary organizational unit to which an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account belongs. This account will be removed from the previous primary organizational unit and added to the new primary organization.
   * 
   * @param request - SetUserPrimaryOrganizationalUnitRequest
   * @returns SetUserPrimaryOrganizationalUnitResponse
   */
  async setUserPrimaryOrganizationalUnit(request: $_model.SetUserPrimaryOrganizationalUnitRequest): Promise<$_model.SetUserPrimaryOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setUserPrimaryOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * Unlocks an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS) that is locked.
   * 
   * @param request - UnlockUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnlockUserResponse
   */
  async unlockUserWithOptions(request: $_model.UnlockUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnlockUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnlockUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnlockUserResponse>(await this.callApi(params, req, runtime), new $_model.UnlockUserResponse({}));
  }

  /**
   * Unlocks an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS) that is locked.
   * 
   * @param request - UnlockUserRequest
   * @returns UnlockUserResponse
   */
  async unlockUser(request: $_model.UnlockUserRequest): Promise<$_model.UnlockUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unlockUserWithOptions(request, runtime);
  }

  /**
   * Modifies the authorization type of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - UpdateApplicationAuthorizationTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationAuthorizationTypeResponse
   */
  async updateApplicationAuthorizationTypeWithOptions(request: $_model.UpdateApplicationAuthorizationTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApplicationAuthorizationTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.authorizationType)) {
      query["AuthorizationType"] = request.authorizationType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApplicationAuthorizationType",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApplicationAuthorizationTypeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApplicationAuthorizationTypeResponse({}));
  }

  /**
   * Modifies the authorization type of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - UpdateApplicationAuthorizationTypeRequest
   * @returns UpdateApplicationAuthorizationTypeResponse
   */
  async updateApplicationAuthorizationType(request: $_model.UpdateApplicationAuthorizationTypeRequest): Promise<$_model.UpdateApplicationAuthorizationTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateApplicationAuthorizationTypeWithOptions(request, runtime);
  }

  /**
   * Modifies the description of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - UpdateApplicationDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationDescriptionResponse
   */
  async updateApplicationDescriptionWithOptions(request: $_model.UpdateApplicationDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApplicationDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApplicationDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApplicationDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApplicationDescriptionResponse({}));
  }

  /**
   * Modifies the description of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - UpdateApplicationDescriptionRequest
   * @returns UpdateApplicationDescriptionResponse
   */
  async updateApplicationDescription(request: $_model.UpdateApplicationDescriptionRequest): Promise<$_model.UpdateApplicationDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateApplicationDescriptionWithOptions(request, runtime);
  }

  /**
   * Update Conditional Access Policy
   * 
   * @remarks
   * Update Conditional Access Policy
   * 
   * @param request - UpdateConditionalAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConditionalAccessPolicyResponse
   */
  async updateConditionalAccessPolicyWithOptions(request: $_model.UpdateConditionalAccessPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConditionalAccessPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.conditionalAccessPolicyId)) {
      query["ConditionalAccessPolicyId"] = request.conditionalAccessPolicyId;
    }

    if (!$dara.isNull(request.conditionalAccessPolicyName)) {
      query["ConditionalAccessPolicyName"] = request.conditionalAccessPolicyName;
    }

    if (!$dara.isNull(request.conditionsConfig)) {
      query["ConditionsConfig"] = request.conditionsConfig;
    }

    if (!$dara.isNull(request.decisionConfig)) {
      query["DecisionConfig"] = request.decisionConfig;
    }

    if (!$dara.isNull(request.decisionType)) {
      query["DecisionType"] = request.decisionType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConditionalAccessPolicy",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateConditionalAccessPolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConditionalAccessPolicyResponse({}));
  }

  /**
   * Update Conditional Access Policy
   * 
   * @remarks
   * Update Conditional Access Policy
   * 
   * @param request - UpdateConditionalAccessPolicyRequest
   * @returns UpdateConditionalAccessPolicyResponse
   */
  async updateConditionalAccessPolicy(request: $_model.UpdateConditionalAccessPolicyRequest): Promise<$_model.UpdateConditionalAccessPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateConditionalAccessPolicyWithOptions(request, runtime);
  }

  /**
   * Update Conditional Access Policy Description
   * 
   * @remarks
   * Update Conditional Access Policy Description
   * 
   * @param request - UpdateConditionalAccessPolicyDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConditionalAccessPolicyDescriptionResponse
   */
  async updateConditionalAccessPolicyDescriptionWithOptions(request: $_model.UpdateConditionalAccessPolicyDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConditionalAccessPolicyDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.conditionalAccessPolicyId)) {
      query["ConditionalAccessPolicyId"] = request.conditionalAccessPolicyId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConditionalAccessPolicyDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateConditionalAccessPolicyDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConditionalAccessPolicyDescriptionResponse({}));
  }

  /**
   * Update Conditional Access Policy Description
   * 
   * @remarks
   * Update Conditional Access Policy Description
   * 
   * @param request - UpdateConditionalAccessPolicyDescriptionRequest
   * @returns UpdateConditionalAccessPolicyDescriptionResponse
   */
  async updateConditionalAccessPolicyDescription(request: $_model.UpdateConditionalAccessPolicyDescriptionRequest): Promise<$_model.UpdateConditionalAccessPolicyDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateConditionalAccessPolicyDescriptionWithOptions(request, runtime);
  }

  /**
   * Updates the information about an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM). If the information is empty, the information is not updated by default.
   * 
   * @param request - UpdateGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGroupResponse
   */
  async updateGroupWithOptions(request: $_model.UpdateGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupExternalId)) {
      query["GroupExternalId"] = request.groupExternalId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGroupResponse({}));
  }

  /**
   * Updates the information about an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM). If the information is empty, the information is not updated by default.
   * 
   * @param request - UpdateGroupRequest
   * @returns UpdateGroupResponse
   */
  async updateGroup(request: $_model.UpdateGroupRequest): Promise<$_model.UpdateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGroupWithOptions(request, runtime);
  }

  /**
   * Updates the description of an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account group.
   * 
   * @param request - UpdateGroupDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGroupDescriptionResponse
   */
  async updateGroupDescriptionWithOptions(request: $_model.UpdateGroupDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGroupDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGroupDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGroupDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGroupDescriptionResponse({}));
  }

  /**
   * Updates the description of an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account group.
   * 
   * @param request - UpdateGroupDescriptionRequest
   * @returns UpdateGroupDescriptionResponse
   */
  async updateGroupDescription(request: $_model.UpdateGroupDescriptionRequest): Promise<$_model.UpdateGroupDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGroupDescriptionWithOptions(request, runtime);
  }

  /**
   * 更新idp基础配置
   * 
   * @param request - UpdateIdentityProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIdentityProviderResponse
   */
  async updateIdentityProviderWithOptions(request: $_model.UpdateIdentityProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIdentityProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dingtalkAppConfig)) {
      query["DingtalkAppConfig"] = request.dingtalkAppConfig;
    }

    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.identityProviderName)) {
      query["IdentityProviderName"] = request.identityProviderName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.larkConfig)) {
      query["LarkConfig"] = request.larkConfig;
    }

    if (!$dara.isNull(request.ldapConfig)) {
      query["LdapConfig"] = request.ldapConfig;
    }

    if (!$dara.isNull(request.logoUrl)) {
      query["LogoUrl"] = request.logoUrl;
    }

    if (!$dara.isNull(request.networkAccessEndpointId)) {
      query["NetworkAccessEndpointId"] = request.networkAccessEndpointId;
    }

    if (!$dara.isNull(request.oidcConfig)) {
      query["OidcConfig"] = request.oidcConfig;
    }

    if (!$dara.isNull(request.weComConfig)) {
      query["WeComConfig"] = request.weComConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIdentityProvider",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIdentityProviderResponse>(await this.callApi(params, req, runtime), new $_model.UpdateIdentityProviderResponse({}));
  }

  /**
   * 更新idp基础配置
   * 
   * @param request - UpdateIdentityProviderRequest
   * @returns UpdateIdentityProviderResponse
   */
  async updateIdentityProvider(request: $_model.UpdateIdentityProviderRequest): Promise<$_model.UpdateIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIdentityProviderWithOptions(request, runtime);
  }

  /**
   * Modifies the description of an Enterprise Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - UpdateInstanceDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceDescriptionResponse
   */
  async updateInstanceDescriptionWithOptions(request: $_model.UpdateInstanceDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceDescriptionResponse({}));
  }

  /**
   * Modifies the description of an Enterprise Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - UpdateInstanceDescriptionRequest
   * @returns UpdateInstanceDescriptionResponse
   */
  async updateInstanceDescription(request: $_model.UpdateInstanceDescriptionRequest): Promise<$_model.UpdateInstanceDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceDescriptionWithOptions(request, runtime);
  }

  /**
   * 更新一个专属网络端点的名称。
   * 
   * @param request - UpdateNetworkAccessEndpointNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNetworkAccessEndpointNameResponse
   */
  async updateNetworkAccessEndpointNameWithOptions(request: $_model.UpdateNetworkAccessEndpointNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNetworkAccessEndpointNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkAccessEndpointId)) {
      query["NetworkAccessEndpointId"] = request.networkAccessEndpointId;
    }

    if (!$dara.isNull(request.networkAccessEndpointName)) {
      query["NetworkAccessEndpointName"] = request.networkAccessEndpointName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNetworkAccessEndpointName",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNetworkAccessEndpointNameResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNetworkAccessEndpointNameResponse({}));
  }

  /**
   * 更新一个专属网络端点的名称。
   * 
   * @param request - UpdateNetworkAccessEndpointNameRequest
   * @returns UpdateNetworkAccessEndpointNameResponse
   */
  async updateNetworkAccessEndpointName(request: $_model.UpdateNetworkAccessEndpointNameRequest): Promise<$_model.UpdateNetworkAccessEndpointNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNetworkAccessEndpointNameWithOptions(request, runtime);
  }

  /**
   * Updates the basic information about an Employee Identity and Access Management (EIAM) organization. The basic information about the organization is not updated by default if no parameter is specified.
   * 
   * @param request - UpdateOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOrganizationalUnitResponse
   */
  async updateOrganizationalUnitWithOptions(request: $_model.UpdateOrganizationalUnitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOrganizationalUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    if (!$dara.isNull(request.organizationalUnitName)) {
      query["OrganizationalUnitName"] = request.organizationalUnitName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new $_model.UpdateOrganizationalUnitResponse({}));
  }

  /**
   * Updates the basic information about an Employee Identity and Access Management (EIAM) organization. The basic information about the organization is not updated by default if no parameter is specified.
   * 
   * @param request - UpdateOrganizationalUnitRequest
   * @returns UpdateOrganizationalUnitResponse
   */
  async updateOrganizationalUnit(request: $_model.UpdateOrganizationalUnitRequest): Promise<$_model.UpdateOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * Modifies the description of an Employee Identity and Access Management (EIAM) organization.
   * 
   * @param request - UpdateOrganizationalUnitDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOrganizationalUnitDescriptionResponse
   */
  async updateOrganizationalUnitDescriptionWithOptions(request: $_model.UpdateOrganizationalUnitDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOrganizationalUnitDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOrganizationalUnitDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateOrganizationalUnitDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateOrganizationalUnitDescriptionResponse({}));
  }

  /**
   * Modifies the description of an Employee Identity and Access Management (EIAM) organization.
   * 
   * @param request - UpdateOrganizationalUnitDescriptionRequest
   * @returns UpdateOrganizationalUnitDescriptionResponse
   */
  async updateOrganizationalUnitDescription(request: $_model.UpdateOrganizationalUnitDescriptionRequest): Promise<$_model.UpdateOrganizationalUnitDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateOrganizationalUnitDescriptionWithOptions(request, runtime);
  }

  /**
   * Updates the parent organization ID of an organization in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM). In this case, the organization is moved from a parent node to a new node.
   * 
   * @param request - UpdateOrganizationalUnitParentIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOrganizationalUnitParentIdResponse
   */
  async updateOrganizationalUnitParentIdWithOptions(request: $_model.UpdateOrganizationalUnitParentIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOrganizationalUnitParentIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOrganizationalUnitParentId",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateOrganizationalUnitParentIdResponse>(await this.callApi(params, req, runtime), new $_model.UpdateOrganizationalUnitParentIdResponse({}));
  }

  /**
   * Updates the parent organization ID of an organization in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM). In this case, the organization is moved from a parent node to a new node.
   * 
   * @param request - UpdateOrganizationalUnitParentIdRequest
   * @returns UpdateOrganizationalUnitParentIdResponse
   */
  async updateOrganizationalUnitParentId(request: $_model.UpdateOrganizationalUnitParentIdRequest): Promise<$_model.UpdateOrganizationalUnitParentIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateOrganizationalUnitParentIdWithOptions(request, runtime);
  }

  /**
   * Updates the basic information about an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS).
   * 
   * @param request - UpdateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserResponse
   */
  async updateUserWithOptions(request: $_model.UpdateUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customFields)) {
      query["CustomFields"] = request.customFields;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.emailVerified)) {
      query["EmailVerified"] = request.emailVerified;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.phoneNumberVerified)) {
      query["PhoneNumberVerified"] = request.phoneNumberVerified;
    }

    if (!$dara.isNull(request.phoneRegion)) {
      query["PhoneRegion"] = request.phoneRegion;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserResponse({}));
  }

  /**
   * Updates the basic information about an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS).
   * 
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(request: $_model.UpdateUserRequest): Promise<$_model.UpdateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

  /**
   * Modifies the description of an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account.
   * 
   * @param request - UpdateUserDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserDescriptionResponse
   */
  async updateUserDescriptionWithOptions(request: $_model.UpdateUserDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserDescriptionResponse({}));
  }

  /**
   * Modifies the description of an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account.
   * 
   * @param request - UpdateUserDescriptionRequest
   * @returns UpdateUserDescriptionResponse
   */
  async updateUserDescription(request: $_model.UpdateUserDescriptionRequest): Promise<$_model.UpdateUserDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserDescriptionWithOptions(request, runtime);
  }

  /**
   * Updates the password information of an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS). The password must meet the requirements of the password policies that are configured in the IDaaS console.
   * 
   * @param request - UpdateUserPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserPasswordResponse
   */
  async updateUserPasswordWithOptions(request: $_model.UpdateUserPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.passwordForcedUpdateStatus)) {
      query["PasswordForcedUpdateStatus"] = request.passwordForcedUpdateStatus;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userNotificationChannels)) {
      query["UserNotificationChannels"] = request.userNotificationChannels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserPassword",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserPasswordResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserPasswordResponse({}));
  }

  /**
   * Updates the password information of an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS). The password must meet the requirements of the password policies that are configured in the IDaaS console.
   * 
   * @param request - UpdateUserPasswordRequest
   * @returns UpdateUserPasswordResponse
   */
  async updateUserPassword(request: $_model.UpdateUserPasswordRequest): Promise<$_model.UpdateUserPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserPasswordWithOptions(request, runtime);
  }

}
