// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-hangzhou': "csas.aliyuncs.com",
      public: "csas.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("csas", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Attaches the private access applications of a Connector under the current Alibaba Cloud account.
   * 
   * @param tmpReq - AttachApplication2ConnectorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachApplication2ConnectorResponse
   */
  async attachApplication2ConnectorWithOptions(tmpReq: $_model.AttachApplication2ConnectorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachApplication2ConnectorResponse> {
    tmpReq.validate();
    let request = new $_model.AttachApplication2ConnectorShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.applicationIds)) {
      request.applicationIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.applicationIds, "ApplicationIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationIdsShrink)) {
      body["ApplicationIds"] = request.applicationIdsShrink;
    }

    if (!$dara.isNull(request.connectorId)) {
      body["ConnectorId"] = request.connectorId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachApplication2Connector",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachApplication2ConnectorResponse>(await this.callApi(params, req, runtime), new $_model.AttachApplication2ConnectorResponse({}));
  }

  /**
   * Attaches the private access applications of a Connector under the current Alibaba Cloud account.
   * 
   * @param request - AttachApplication2ConnectorRequest
   * @returns AttachApplication2ConnectorResponse
   */
  async attachApplication2Connector(request: $_model.AttachApplication2ConnectorRequest): Promise<$_model.AttachApplication2ConnectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachApplication2ConnectorWithOptions(request, runtime);
  }

  /**
   * Attaches a business policy to a specified approval process.
   * 
   * @param request - AttachPolicy2ApprovalProcessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachPolicy2ApprovalProcessResponse
   */
  async attachPolicy2ApprovalProcessWithOptions(request: $_model.AttachPolicy2ApprovalProcessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachPolicy2ApprovalProcessResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.policyType)) {
      body["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.processId)) {
      body["ProcessId"] = request.processId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachPolicy2ApprovalProcess",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachPolicy2ApprovalProcessResponse>(await this.callApi(params, req, runtime), new $_model.AttachPolicy2ApprovalProcessResponse({}));
  }

  /**
   * Attaches a business policy to a specified approval process.
   * 
   * @param request - AttachPolicy2ApprovalProcessRequest
   * @returns AttachPolicy2ApprovalProcessResponse
   */
  async attachPolicy2ApprovalProcess(request: $_model.AttachPolicy2ApprovalProcessRequest): Promise<$_model.AttachPolicy2ApprovalProcessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachPolicy2ApprovalProcessWithOptions(request, runtime);
  }

  /**
   * Creates an approval process under the current Alibaba Cloud account.
   * 
   * @param tmpReq - CreateApprovalProcessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApprovalProcessResponse
   */
  async createApprovalProcessWithOptions(tmpReq: $_model.CreateApprovalProcessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApprovalProcessResponse> {
    tmpReq.validate();
    let request = new $_model.CreateApprovalProcessShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.matchSchemas)) {
      request.matchSchemasShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.matchSchemas, "MatchSchemas", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.matchSchemasShrink)) {
      body["MatchSchemas"] = request.matchSchemasShrink;
    }

    if (!$dara.isNull(request.processName)) {
      body["ProcessName"] = request.processName;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.processNodes)) {
      bodyFlat["ProcessNodes"] = request.processNodes;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApprovalProcess",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApprovalProcessResponse>(await this.callApi(params, req, runtime), new $_model.CreateApprovalProcessResponse({}));
  }

  /**
   * Creates an approval process under the current Alibaba Cloud account.
   * 
   * @param request - CreateApprovalProcessRequest
   * @returns CreateApprovalProcessResponse
   */
  async createApprovalProcess(request: $_model.CreateApprovalProcessRequest): Promise<$_model.CreateApprovalProcessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApprovalProcessWithOptions(request, runtime);
  }

  /**
   * Create a custom identity source user for your Alibaba Cloud account.
   * 
   * @param request - CreateClientUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClientUserResponse
   */
  async createClientUserWithOptions(request: $_model.CreateClientUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateClientUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.idpConfigId)) {
      query["IdpConfigId"] = request.idpConfigId;
    }

    if (!$dara.isNull(request.mobileNumber)) {
      query["MobileNumber"] = request.mobileNumber;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateClientUser",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateClientUserResponse>(await this.callApi(params, req, runtime), new $_model.CreateClientUserResponse({}));
  }

  /**
   * Create a custom identity source user for your Alibaba Cloud account.
   * 
   * @param request - CreateClientUserRequest
   * @returns CreateClientUserResponse
   */
  async createClientUser(request: $_model.CreateClientUserRequest): Promise<$_model.CreateClientUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createClientUserWithOptions(request, runtime);
  }

  /**
   * Creates a domain name list.
   * 
   * @remarks
   * Creates a domain name list of a specified type (blacklist or whitelist) under the current tenant and returns the ListId of the new list. A maximum of 100 lists can be created for each list type per tenant.
   * 
   * @param request - CreateDomainMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDomainMetaResponse
   */
  async createDomainMetaWithOptions(request: $_model.CreateDomainMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDomainMetaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listType)) {
      body["ListType"] = request.listType;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDomainMeta",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDomainMetaResponse>(await this.callApi(params, req, runtime), new $_model.CreateDomainMetaResponse({}));
  }

  /**
   * Creates a domain name list.
   * 
   * @remarks
   * Creates a domain name list of a specified type (blacklist or whitelist) under the current tenant and returns the ListId of the new list. A maximum of 100 lists can be created for each list type per tenant.
   * 
   * @param request - CreateDomainMetaRequest
   * @returns CreateDomainMetaResponse
   */
  async createDomainMeta(request: $_model.CreateDomainMetaRequest): Promise<$_model.CreateDomainMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDomainMetaWithOptions(request, runtime);
  }

  /**
   * Create dynamic routes for the current Alibaba Cloud account.
   * 
   * @remarks
   * By default, you can create a maximum of 100 dynamic routes.
   * 
   * @param request - CreateDynamicRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDynamicRouteResponse
   */
  async createDynamicRouteWithOptions(request: $_model.CreateDynamicRouteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDynamicRouteResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationIds)) {
      bodyFlat["ApplicationIds"] = request.applicationIds;
    }

    if (!$dara.isNull(request.applicationType)) {
      body["ApplicationType"] = request.applicationType;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.dynamicRouteType)) {
      body["DynamicRouteType"] = request.dynamicRouteType;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.nextHop)) {
      body["NextHop"] = request.nextHop;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.regionIds)) {
      bodyFlat["RegionIds"] = request.regionIds;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.tagIds)) {
      bodyFlat["TagIds"] = request.tagIds;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDynamicRoute",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDynamicRouteResponse>(await this.callApi(params, req, runtime), new $_model.CreateDynamicRouteResponse({}));
  }

  /**
   * Create dynamic routes for the current Alibaba Cloud account.
   * 
   * @remarks
   * By default, you can create a maximum of 100 dynamic routes.
   * 
   * @param request - CreateDynamicRouteRequest
   * @returns CreateDynamicRouteResponse
   */
  async createDynamicRoute(request: $_model.CreateDynamicRouteRequest): Promise<$_model.CreateDynamicRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDynamicRouteWithOptions(request, runtime);
  }

  /**
   * Creates an enterprise accelerate policy.
   * 
   * @param request - CreateEnterpriseAcceleratePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEnterpriseAcceleratePolicyResponse
   */
  async createEnterpriseAcceleratePolicyWithOptions(request: $_model.CreateEnterpriseAcceleratePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEnterpriseAcceleratePolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accelerationType)) {
      body["AccelerationType"] = request.accelerationType;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.showInClient)) {
      body["ShowInClient"] = request.showInClient;
    }

    if (!$dara.isNull(request.upstreamHost)) {
      body["UpstreamHost"] = request.upstreamHost;
    }

    if (!$dara.isNull(request.upstreamPort)) {
      body["UpstreamPort"] = request.upstreamPort;
    }

    if (!$dara.isNull(request.upstreamType)) {
      body["UpstreamType"] = request.upstreamType;
    }

    if (!$dara.isNull(request.userAttributeGroup)) {
      body["UserAttributeGroup"] = request.userAttributeGroup;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEnterpriseAcceleratePolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEnterpriseAcceleratePolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateEnterpriseAcceleratePolicyResponse({}));
  }

  /**
   * Creates an enterprise accelerate policy.
   * 
   * @param request - CreateEnterpriseAcceleratePolicyRequest
   * @returns CreateEnterpriseAcceleratePolicyResponse
   */
  async createEnterpriseAcceleratePolicy(request: $_model.CreateEnterpriseAcceleratePolicyRequest): Promise<$_model.CreateEnterpriseAcceleratePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEnterpriseAcceleratePolicyWithOptions(request, runtime);
  }

  /**
   * Creates enterprise acceleration addresses.
   * 
   * @param request - CreateEnterpriseAccelerateTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEnterpriseAccelerateTargetResponse
   */
  async createEnterpriseAccelerateTargetWithOptions(request: $_model.CreateEnterpriseAccelerateTargetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEnterpriseAccelerateTargetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.eapId)) {
      body["EapId"] = request.eapId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.target)) {
      bodyFlat["Target"] = request.target;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEnterpriseAccelerateTarget",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEnterpriseAccelerateTargetResponse>(await this.callApi(params, req, runtime), new $_model.CreateEnterpriseAccelerateTargetResponse({}));
  }

  /**
   * Creates enterprise acceleration addresses.
   * 
   * @param request - CreateEnterpriseAccelerateTargetRequest
   * @returns CreateEnterpriseAccelerateTargetResponse
   */
  async createEnterpriseAccelerateTarget(request: $_model.CreateEnterpriseAccelerateTargetRequest): Promise<$_model.CreateEnterpriseAccelerateTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEnterpriseAccelerateTargetWithOptions(request, runtime);
  }

  /**
   * Creates a department for a custom identity source in the current Alibaba Cloud account.
   * 
   * @param request - CreateIdpDepartmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIdpDepartmentResponse
   */
  async createIdpDepartmentWithOptions(request: $_model.CreateIdpDepartmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIdpDepartmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.departmentName)) {
      query["DepartmentName"] = request.departmentName;
    }

    if (!$dara.isNull(request.idpConfigId)) {
      query["IdpConfigId"] = request.idpConfigId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIdpDepartment",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIdpDepartmentResponse>(await this.callApi(params, req, runtime), new $_model.CreateIdpDepartmentResponse({}));
  }

  /**
   * Creates a department for a custom identity source in the current Alibaba Cloud account.
   * 
   * @param request - CreateIdpDepartmentRequest
   * @returns CreateIdpDepartmentResponse
   */
  async createIdpDepartment(request: $_model.CreateIdpDepartmentRequest): Promise<$_model.CreateIdpDepartmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createIdpDepartmentWithOptions(request, runtime);
  }

  /**
   * Creates a diagnostic task for internal network access.
   * 
   * @param tmpReq - CreatePADiagnosisTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePADiagnosisTaskResponse
   */
  async createPADiagnosisTaskWithOptions(tmpReq: $_model.CreatePADiagnosisTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePADiagnosisTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePADiagnosisTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.udpExtraConfigs)) {
      request.udpExtraConfigsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.udpExtraConfigs, "UdpExtraConfigs", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.devTag)) {
      body["DevTag"] = request.devTag;
    }

    if (!$dara.isNull(request.diagnoseType)) {
      body["DiagnoseType"] = request.diagnoseType;
    }

    if (!$dara.isNull(request.host)) {
      body["Host"] = request.host;
    }

    if (!$dara.isNull(request.popId)) {
      body["PopId"] = request.popId;
    }

    if (!$dara.isNull(request.popMode)) {
      body["PopMode"] = request.popMode;
    }

    if (!$dara.isNull(request.port)) {
      body["Port"] = request.port;
    }

    if (!$dara.isNull(request.protocol)) {
      body["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.udpExtraConfigsShrink)) {
      body["UdpExtraConfigs"] = request.udpExtraConfigsShrink;
    }

    if (!$dara.isNull(request.userGroupId)) {
      body["UserGroupId"] = request.userGroupId;
    }

    if (!$dara.isNull(request.username)) {
      body["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePADiagnosisTask",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePADiagnosisTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreatePADiagnosisTaskResponse({}));
  }

  /**
   * Creates a diagnostic task for internal network access.
   * 
   * @param request - CreatePADiagnosisTaskRequest
   * @returns CreatePADiagnosisTaskResponse
   */
  async createPADiagnosisTask(request: $_model.CreatePADiagnosisTaskRequest): Promise<$_model.CreatePADiagnosisTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPADiagnosisTaskWithOptions(request, runtime);
  }

  /**
   * Creates an internal-facing access application under the current Alibaba Cloud account.
   * 
   * @remarks
   * You can create up to 500 internal-facing access applications by default.
   * 
   * @param tmpReq - CreatePrivateAccessApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePrivateAccessApplicationResponse
   */
  async createPrivateAccessApplicationWithOptions(tmpReq: $_model.CreatePrivateAccessApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePrivateAccessApplicationResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePrivateAccessApplicationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.l7Config)) {
      request.l7ConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.l7Config, "L7Config", "json");
    }

    if (!$dara.isNull(tmpReq.unauthorizedAccessConfig)) {
      request.unauthorizedAccessConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.unauthorizedAccessConfig, "UnauthorizedAccessConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addressGroups)) {
      bodyFlat["AddressGroups"] = request.addressGroups;
    }

    if (!$dara.isNull(request.addresses)) {
      bodyFlat["Addresses"] = request.addresses;
    }

    if (!$dara.isNull(request.browserAccessStatus)) {
      body["BrowserAccessStatus"] = request.browserAccessStatus;
    }

    if (!$dara.isNull(request.configMode)) {
      body["ConfigMode"] = request.configMode;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.l7ConfigShrink)) {
      body["L7Config"] = request.l7ConfigShrink;
    }

    if (!$dara.isNull(request.l7ProxyDomainAutomaticPrefix)) {
      body["L7ProxyDomainAutomaticPrefix"] = request.l7ProxyDomainAutomaticPrefix;
    }

    if (!$dara.isNull(request.l7ProxyDomainCustom)) {
      body["L7ProxyDomainCustom"] = request.l7ProxyDomainCustom;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.portRanges)) {
      bodyFlat["PortRanges"] = request.portRanges;
    }

    if (!$dara.isNull(request.protocol)) {
      body["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.tagIds)) {
      bodyFlat["TagIds"] = request.tagIds;
    }

    if (!$dara.isNull(request.unauthorizedAccessConfigShrink)) {
      body["UnauthorizedAccessConfig"] = request.unauthorizedAccessConfigShrink;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePrivateAccessApplication",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePrivateAccessApplicationResponse>(await this.callApi(params, req, runtime), new $_model.CreatePrivateAccessApplicationResponse({}));
  }

  /**
   * Creates an internal-facing access application under the current Alibaba Cloud account.
   * 
   * @remarks
   * You can create up to 500 internal-facing access applications by default.
   * 
   * @param request - CreatePrivateAccessApplicationRequest
   * @returns CreatePrivateAccessApplicationResponse
   */
  async createPrivateAccessApplication(request: $_model.CreatePrivateAccessApplicationRequest): Promise<$_model.CreatePrivateAccessApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPrivateAccessApplicationWithOptions(request, runtime);
  }

  /**
   * Create Private Access Policy
   * 
   * @remarks
   * By default, up to 500 private access policies can be created.
   * 
   * @param request - CreatePrivateAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePrivateAccessPolicyResponse
   */
  async createPrivateAccessPolicyWithOptions(request: $_model.CreatePrivateAccessPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePrivateAccessPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationIds)) {
      bodyFlat["ApplicationIds"] = request.applicationIds;
    }

    if (!$dara.isNull(request.applicationType)) {
      body["ApplicationType"] = request.applicationType;
    }

    if (!$dara.isNull(request.customUserAttributes)) {
      bodyFlat["CustomUserAttributes"] = request.customUserAttributes;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.deviceAttributeAction)) {
      body["DeviceAttributeAction"] = request.deviceAttributeAction;
    }

    if (!$dara.isNull(request.deviceAttributeId)) {
      body["DeviceAttributeId"] = request.deviceAttributeId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.policyAction)) {
      body["PolicyAction"] = request.policyAction;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.tagIds)) {
      bodyFlat["TagIds"] = request.tagIds;
    }

    if (!$dara.isNull(request.triggerTemplateId)) {
      body["TriggerTemplateId"] = request.triggerTemplateId;
    }

    if (!$dara.isNull(request.trustedProcessGroupIds)) {
      bodyFlat["TrustedProcessGroupIds"] = request.trustedProcessGroupIds;
    }

    if (!$dara.isNull(request.trustedProcessStatus)) {
      body["TrustedProcessStatus"] = request.trustedProcessStatus;
    }

    if (!$dara.isNull(request.trustedSoftwareIds)) {
      bodyFlat["TrustedSoftwareIds"] = request.trustedSoftwareIds;
    }

    if (!$dara.isNull(request.userGroupIds)) {
      bodyFlat["UserGroupIds"] = request.userGroupIds;
    }

    if (!$dara.isNull(request.userGroupMode)) {
      body["UserGroupMode"] = request.userGroupMode;
    }

    if (!$dara.isNull(request.validFrom)) {
      body["ValidFrom"] = request.validFrom;
    }

    if (!$dara.isNull(request.validTimeStatus)) {
      body["ValidTimeStatus"] = request.validTimeStatus;
    }

    if (!$dara.isNull(request.validUntil)) {
      body["ValidUntil"] = request.validUntil;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePrivateAccessPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePrivateAccessPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreatePrivateAccessPolicyResponse({}));
  }

  /**
   * Create Private Access Policy
   * 
   * @remarks
   * By default, up to 500 private access policies can be created.
   * 
   * @param request - CreatePrivateAccessPolicyRequest
   * @returns CreatePrivateAccessPolicyResponse
   */
  async createPrivateAccessPolicy(request: $_model.CreatePrivateAccessPolicyRequest): Promise<$_model.CreatePrivateAccessPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPrivateAccessPolicyWithOptions(request, runtime);
  }

  /**
   * Creates a private access tag for the current Alibaba Cloud account.
   * 
   * @remarks
   * By default, you can create up to 500 private access tags.
   * 
   * @param request - CreatePrivateAccessTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePrivateAccessTagResponse
   */
  async createPrivateAccessTagWithOptions(request: $_model.CreatePrivateAccessTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePrivateAccessTagResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePrivateAccessTag",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePrivateAccessTagResponse>(await this.callApi(params, req, runtime), new $_model.CreatePrivateAccessTagResponse({}));
  }

  /**
   * Creates a private access tag for the current Alibaba Cloud account.
   * 
   * @remarks
   * By default, you can create up to 500 private access tags.
   * 
   * @param request - CreatePrivateAccessTagRequest
   * @returns CreatePrivateAccessTagResponse
   */
  async createPrivateAccessTag(request: $_model.CreatePrivateAccessTagRequest): Promise<$_model.CreatePrivateAccessTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPrivateAccessTagWithOptions(request, runtime);
  }

  /**
   * Create a device registration policy for your Alibaba Cloud account.
   * 
   * @param tmpReq - CreateRegistrationPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRegistrationPolicyResponse
   */
  async createRegistrationPolicyWithOptions(tmpReq: $_model.CreateRegistrationPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRegistrationPolicyResponse> {
    tmpReq.validate();
    let request = new $_model.CreateRegistrationPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.companyLimitCount)) {
      request.companyLimitCountShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.companyLimitCount, "CompanyLimitCount", "json");
    }

    if (!$dara.isNull(tmpReq.personalLimitCount)) {
      request.personalLimitCountShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.personalLimitCount, "PersonalLimitCount", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.companyLimitCountShrink)) {
      body["CompanyLimitCount"] = request.companyLimitCountShrink;
    }

    if (!$dara.isNull(request.companyLimitType)) {
      body["CompanyLimitType"] = request.companyLimitType;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.matchMode)) {
      body["MatchMode"] = request.matchMode;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.personalLimitCountShrink)) {
      body["PersonalLimitCount"] = request.personalLimitCountShrink;
    }

    if (!$dara.isNull(request.personalLimitType)) {
      body["PersonalLimitType"] = request.personalLimitType;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userGroupIds)) {
      bodyFlat["UserGroupIds"] = request.userGroupIds;
    }

    if (!$dara.isNull(request.whitelist)) {
      bodyFlat["Whitelist"] = request.whitelist;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRegistrationPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRegistrationPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateRegistrationPolicyResponse({}));
  }

  /**
   * Create a device registration policy for your Alibaba Cloud account.
   * 
   * @param request - CreateRegistrationPolicyRequest
   * @returns CreateRegistrationPolicyResponse
   */
  async createRegistrationPolicy(request: $_model.CreateRegistrationPolicyRequest): Promise<$_model.CreateRegistrationPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRegistrationPolicyWithOptions(request, runtime);
  }

  /**
   * Creates a user group for your Alibaba Cloud account.
   * 
   * @remarks
   * You can create up to 500 user groups.
   * 
   * @param request - CreateUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserGroupResponse
   */
  async createUserGroupWithOptions(request: $_model.CreateUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attributes)) {
      bodyFlat["Attributes"] = request.attributes;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUserGroup",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateUserGroupResponse({}));
  }

  /**
   * Creates a user group for your Alibaba Cloud account.
   * 
   * @remarks
   * You can create up to 500 user groups.
   * 
   * @param request - CreateUserGroupRequest
   * @returns CreateUserGroupResponse
   */
  async createUserGroup(request: $_model.CreateUserGroupRequest): Promise<$_model.CreateUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUserGroupWithOptions(request, runtime);
  }

  /**
   * Generates a transparent base image for web, screen, or app watermarks.
   * 
   * @param tmpReq - CreateWmBaseImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWmBaseImageResponse
   */
  async createWmBaseImageWithOptions(tmpReq: $_model.CreateWmBaseImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWmBaseImageResponse> {
    tmpReq.validate();
    let request = new $_model.CreateWmBaseImageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.imageControl)) {
      request.imageControlShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageControl, "ImageControl", "json");
    }

    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["comment"] = request.comment;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.height)) {
      body["Height"] = request.height;
    }

    if (!$dara.isNull(request.imageControlShrink)) {
      body["ImageControl"] = request.imageControlShrink;
    }

    if (!$dara.isNull(request.opacity)) {
      body["Opacity"] = request.opacity;
    }

    if (!$dara.isNull(request.scale)) {
      body["Scale"] = request.scale;
    }

    if (!$dara.isNull(request.width)) {
      body["Width"] = request.width;
    }

    if (!$dara.isNull(request.wmInfoBytesB64)) {
      body["WmInfoBytesB64"] = request.wmInfoBytesB64;
    }

    if (!$dara.isNull(request.wmInfoSize)) {
      body["WmInfoSize"] = request.wmInfoSize;
    }

    if (!$dara.isNull(request.wmInfoUint)) {
      body["WmInfoUint"] = request.wmInfoUint;
    }

    if (!$dara.isNull(request.wmType)) {
      body["WmType"] = request.wmType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWmBaseImage",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWmBaseImageResponse>(await this.callApi(params, req, runtime), new $_model.CreateWmBaseImageResponse({}));
  }

  /**
   * Generates a transparent base image for web, screen, or app watermarks.
   * 
   * @param request - CreateWmBaseImageRequest
   * @returns CreateWmBaseImageResponse
   */
  async createWmBaseImage(request: $_model.CreateWmBaseImageRequest): Promise<$_model.CreateWmBaseImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWmBaseImageWithOptions(request, runtime);
  }

  /**
   * Create a digital watermarking embedding Job.
   * 
   * @remarks
   * By default, you can create up to 500 groups.
   * 
   * @param tmpReq - CreateWmEmbedTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWmEmbedTaskResponse
   */
  async createWmEmbedTaskWithOptions(tmpReq: $_model.CreateWmEmbedTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWmEmbedTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateWmEmbedTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.audioControl)) {
      request.audioControlShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.audioControl, "AudioControl", "json");
    }

    if (!$dara.isNull(tmpReq.csvControl)) {
      request.csvControlShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.csvControl, "CsvControl", "json");
    }

    if (!$dara.isNull(tmpReq.documentControl)) {
      request.documentControlShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.documentControl, "DocumentControl", "json");
    }

    if (!$dara.isNull(tmpReq.imageControl)) {
      request.imageControlShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageControl, "ImageControl", "json");
    }

    if (!$dara.isNull(tmpReq.videoControl)) {
      request.videoControlShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.videoControl, "VideoControl", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.audioControlShrink)) {
      body["AudioControl"] = request.audioControlShrink;
    }

    if (!$dara.isNull(request.csvControlShrink)) {
      body["CsvControl"] = request.csvControlShrink;
    }

    if (!$dara.isNull(request.documentControlShrink)) {
      body["DocumentControl"] = request.documentControlShrink;
    }

    if (!$dara.isNull(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.filename)) {
      body["Filename"] = request.filename;
    }

    if (!$dara.isNull(request.imageControlShrink)) {
      body["ImageControl"] = request.imageControlShrink;
    }

    if (!$dara.isNull(request.imageEmbedJpegQuality)) {
      body["ImageEmbedJpegQuality"] = request.imageEmbedJpegQuality;
    }

    if (!$dara.isNull(request.imageEmbedLevel)) {
      body["ImageEmbedLevel"] = request.imageEmbedLevel;
    }

    if (!$dara.isNull(request.invisibleEnable)) {
      body["InvisibleEnable"] = request.invisibleEnable;
    }

    if (!$dara.isNull(request.videoBitrate)) {
      body["VideoBitrate"] = request.videoBitrate;
    }

    if (!$dara.isNull(request.videoControlShrink)) {
      body["VideoControl"] = request.videoControlShrink;
    }

    if (!$dara.isNull(request.videoIsLong)) {
      body["VideoIsLong"] = request.videoIsLong;
    }

    if (!$dara.isNull(request.wmInfoBytesB64)) {
      body["WmInfoBytesB64"] = request.wmInfoBytesB64;
    }

    if (!$dara.isNull(request.wmInfoSize)) {
      body["WmInfoSize"] = request.wmInfoSize;
    }

    if (!$dara.isNull(request.wmInfoUint)) {
      body["WmInfoUint"] = request.wmInfoUint;
    }

    if (!$dara.isNull(request.wmType)) {
      body["WmType"] = request.wmType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWmEmbedTask",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWmEmbedTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateWmEmbedTaskResponse({}));
  }

  /**
   * Create a digital watermarking embedding Job.
   * 
   * @remarks
   * By default, you can create up to 500 groups.
   * 
   * @param request - CreateWmEmbedTaskRequest
   * @returns CreateWmEmbedTaskResponse
   */
  async createWmEmbedTask(request: $_model.CreateWmEmbedTaskRequest): Promise<$_model.CreateWmEmbedTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWmEmbedTaskWithOptions(request, runtime);
  }

  /**
   * Create a digital watermarking fetch job.
   * 
   * @param tmpReq - CreateWmExtractTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWmExtractTaskResponse
   */
  async createWmExtractTaskWithOptions(tmpReq: $_model.CreateWmExtractTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWmExtractTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateWmExtractTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.csvControl)) {
      request.csvControlShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.csvControl, "CsvControl", "json");
    }

    if (!$dara.isNull(tmpReq.imageExtractParamsOpenApi)) {
      request.imageExtractParamsOpenApiShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imageExtractParamsOpenApi, "ImageExtractParamsOpenApi", "json");
    }

    let query = { };
    if (!$dara.isNull(request.csvControlShrink)) {
      query["CsvControl"] = request.csvControlShrink;
    }

    if (!$dara.isNull(request.imageExtractParamsOpenApiShrink)) {
      query["ImageExtractParamsOpenApi"] = request.imageExtractParamsOpenApiShrink;
    }

    if (!$dara.isNull(request.isClientEmbed)) {
      query["IsClientEmbed"] = request.isClientEmbed;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.documentIsCapture)) {
      body["DocumentIsCapture"] = request.documentIsCapture;
    }

    if (!$dara.isNull(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.filename)) {
      body["Filename"] = request.filename;
    }

    if (!$dara.isNull(request.videoIsLong)) {
      body["VideoIsLong"] = request.videoIsLong;
    }

    if (!$dara.isNull(request.videoSpeed)) {
      body["VideoSpeed"] = request.videoSpeed;
    }

    if (!$dara.isNull(request.wmInfoSize)) {
      body["WmInfoSize"] = request.wmInfoSize;
    }

    if (!$dara.isNull(request.wmType)) {
      body["WmType"] = request.wmType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWmExtractTask",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWmExtractTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateWmExtractTaskResponse({}));
  }

  /**
   * Create a digital watermarking fetch job.
   * 
   * @param request - CreateWmExtractTaskRequest
   * @returns CreateWmExtractTaskResponse
   */
  async createWmExtractTask(request: $_model.CreateWmExtractTaskRequest): Promise<$_model.CreateWmExtractTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWmExtractTaskWithOptions(request, runtime);
  }

  /**
   * Creates a mapping from string-format watermark information to digital-format watermark information.
   * 
   * @param request - CreateWmInfoMappingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWmInfoMappingResponse
   */
  async createWmInfoMappingWithOptions(request: $_model.CreateWmInfoMappingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWmInfoMappingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.wmInfoBytesB64)) {
      body["WmInfoBytesB64"] = request.wmInfoBytesB64;
    }

    if (!$dara.isNull(request.wmInfoSize)) {
      body["WmInfoSize"] = request.wmInfoSize;
    }

    if (!$dara.isNull(request.wmType)) {
      body["WmType"] = request.wmType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWmInfoMapping",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWmInfoMappingResponse>(await this.callApi(params, req, runtime), new $_model.CreateWmInfoMappingResponse({}));
  }

  /**
   * Creates a mapping from string-format watermark information to digital-format watermark information.
   * 
   * @param request - CreateWmInfoMappingRequest
   * @returns CreateWmInfoMappingResponse
   */
  async createWmInfoMapping(request: $_model.CreateWmInfoMappingRequest): Promise<$_model.CreateWmInfoMappingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWmInfoMappingWithOptions(request, runtime);
  }

  /**
   * Deletes approval processes in batches from your Alibaba Cloud account.
   * 
   * @param request - DeleteApprovalProcessesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApprovalProcessesResponse
   */
  async deleteApprovalProcessesWithOptions(request: $_model.DeleteApprovalProcessesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApprovalProcessesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.processIds)) {
      bodyFlat["ProcessIds"] = request.processIds;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApprovalProcesses",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApprovalProcessesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApprovalProcessesResponse({}));
  }

  /**
   * Deletes approval processes in batches from your Alibaba Cloud account.
   * 
   * @param request - DeleteApprovalProcessesRequest
   * @returns DeleteApprovalProcessesResponse
   */
  async deleteApprovalProcesses(request: $_model.DeleteApprovalProcessesRequest): Promise<$_model.DeleteApprovalProcessesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApprovalProcessesWithOptions(request, runtime);
  }

  /**
   * Delete a specified user from your Alibaba Cloud account\\"s custom identity source.
   * 
   * @param request - DeleteClientUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClientUserResponse
   */
  async deleteClientUserWithOptions(request: $_model.DeleteClientUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteClientUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteClientUser",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteClientUserResponse>(await this.callApi(params, req, runtime), new $_model.DeleteClientUserResponse({}));
  }

  /**
   * Delete a specified user from your Alibaba Cloud account\\"s custom identity source.
   * 
   * @param request - DeleteClientUserRequest
   * @returns DeleteClientUserResponse
   */
  async deleteClientUser(request: $_model.DeleteClientUserRequest): Promise<$_model.DeleteClientUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteClientUserWithOptions(request, runtime);
  }

  /**
   * Deletes a domain name list.
   * 
   * @remarks
   * Deletes a specified domain name list under the current tenant. Before deletion, the system checks whether any domain name policy references the list. If the list is referenced, the deletion is rejected.
   * 
   * @param request - DeleteDomainMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainMetaResponse
   */
  async deleteDomainMetaWithOptions(request: $_model.DeleteDomainMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDomainMetaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listId)) {
      body["ListId"] = request.listId;
    }

    if (!$dara.isNull(request.listType)) {
      body["ListType"] = request.listType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDomainMeta",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDomainMetaResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDomainMetaResponse({}));
  }

  /**
   * Deletes a domain name list.
   * 
   * @remarks
   * Deletes a specified domain name list under the current tenant. Before deletion, the system checks whether any domain name policy references the list. If the list is referenced, the deletion is rejected.
   * 
   * @param request - DeleteDomainMetaRequest
   * @returns DeleteDomainMetaResponse
   */
  async deleteDomainMeta(request: $_model.DeleteDomainMetaRequest): Promise<$_model.DeleteDomainMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDomainMetaWithOptions(request, runtime);
  }

  /**
   * Delete a dynamic route from your current Alibaba Cloud account.
   * 
   * @param request - DeleteDynamicRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDynamicRouteResponse
   */
  async deleteDynamicRouteWithOptions(request: $_model.DeleteDynamicRouteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDynamicRouteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dynamicRouteId)) {
      query["DynamicRouteId"] = request.dynamicRouteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDynamicRoute",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDynamicRouteResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDynamicRouteResponse({}));
  }

  /**
   * Delete a dynamic route from your current Alibaba Cloud account.
   * 
   * @param request - DeleteDynamicRouteRequest
   * @returns DeleteDynamicRouteResponse
   */
  async deleteDynamicRoute(request: $_model.DeleteDynamicRouteRequest): Promise<$_model.DeleteDynamicRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDynamicRouteWithOptions(request, runtime);
  }

  /**
   * Deletes an enterprise acceleration policy.
   * 
   * @param request - DeleteEnterpriseAcceleratePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEnterpriseAcceleratePolicyResponse
   */
  async deleteEnterpriseAcceleratePolicyWithOptions(request: $_model.DeleteEnterpriseAcceleratePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEnterpriseAcceleratePolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.eapId)) {
      body["EapId"] = request.eapId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEnterpriseAcceleratePolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEnterpriseAcceleratePolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEnterpriseAcceleratePolicyResponse({}));
  }

  /**
   * Deletes an enterprise acceleration policy.
   * 
   * @param request - DeleteEnterpriseAcceleratePolicyRequest
   * @returns DeleteEnterpriseAcceleratePolicyResponse
   */
  async deleteEnterpriseAcceleratePolicy(request: $_model.DeleteEnterpriseAcceleratePolicyRequest): Promise<$_model.DeleteEnterpriseAcceleratePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEnterpriseAcceleratePolicyWithOptions(request, runtime);
  }

  /**
   * Deletes an enterprise acceleration address.
   * 
   * @param request - DeleteEnterpriseAccelerateTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEnterpriseAccelerateTargetResponse
   */
  async deleteEnterpriseAccelerateTargetWithOptions(request: $_model.DeleteEnterpriseAccelerateTargetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEnterpriseAccelerateTargetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.eapId)) {
      body["EapId"] = request.eapId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.target)) {
      bodyFlat["Target"] = request.target;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEnterpriseAccelerateTarget",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEnterpriseAccelerateTargetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEnterpriseAccelerateTargetResponse({}));
  }

  /**
   * Deletes an enterprise acceleration address.
   * 
   * @param request - DeleteEnterpriseAccelerateTargetRequest
   * @returns DeleteEnterpriseAccelerateTargetResponse
   */
  async deleteEnterpriseAccelerateTarget(request: $_model.DeleteEnterpriseAccelerateTargetRequest): Promise<$_model.DeleteEnterpriseAccelerateTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEnterpriseAccelerateTargetWithOptions(request, runtime);
  }

  /**
   * Delete a department from a custom identity provider in your Alibaba Cloud account.
   * 
   * @param request - DeleteIdpDepartmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIdpDepartmentResponse
   */
  async deleteIdpDepartmentWithOptions(request: $_model.DeleteIdpDepartmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIdpDepartmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!$dara.isNull(request.idpConfigId)) {
      query["IdpConfigId"] = request.idpConfigId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIdpDepartment",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIdpDepartmentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIdpDepartmentResponse({}));
  }

  /**
   * Delete a department from a custom identity provider in your Alibaba Cloud account.
   * 
   * @param request - DeleteIdpDepartmentRequest
   * @returns DeleteIdpDepartmentResponse
   */
  async deleteIdpDepartment(request: $_model.DeleteIdpDepartmentRequest): Promise<$_model.DeleteIdpDepartmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIdpDepartmentWithOptions(request, runtime);
  }

  /**
   * Deletes a user\\"s One-Time Password (OTP) configuration.
   * 
   * @param request - DeleteOtpConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOtpConfigResponse
   */
  async deleteOtpConfigWithOptions(request: $_model.DeleteOtpConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOtpConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.username)) {
      body["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOtpConfig",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteOtpConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteOtpConfigResponse({}));
  }

  /**
   * Deletes a user\\"s One-Time Password (OTP) configuration.
   * 
   * @param request - DeleteOtpConfigRequest
   * @returns DeleteOtpConfigResponse
   */
  async deleteOtpConfig(request: $_model.DeleteOtpConfigRequest): Promise<$_model.DeleteOtpConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteOtpConfigWithOptions(request, runtime);
  }

  /**
   * Deletes an internal network access application from your Alibaba Cloud account.
   * 
   * @remarks
   * You cannot delete an application if it is referenced by an office zone or a policy. For more information, see:
   * - [ListPrivateAccessApplications](~~ListPrivateAccessApplications~~): Lists internal network access applications.
   * - [ListPrivateAccessPolicies](~~ListPrivateAccessPolices~~): Lists internal network access policies.
   * 
   * @param request - DeletePrivateAccessApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePrivateAccessApplicationResponse
   */
  async deletePrivateAccessApplicationWithOptions(request: $_model.DeletePrivateAccessApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePrivateAccessApplicationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePrivateAccessApplication",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePrivateAccessApplicationResponse>(await this.callApi(params, req, runtime), new $_model.DeletePrivateAccessApplicationResponse({}));
  }

  /**
   * Deletes an internal network access application from your Alibaba Cloud account.
   * 
   * @remarks
   * You cannot delete an application if it is referenced by an office zone or a policy. For more information, see:
   * - [ListPrivateAccessApplications](~~ListPrivateAccessApplications~~): Lists internal network access applications.
   * - [ListPrivateAccessPolicies](~~ListPrivateAccessPolices~~): Lists internal network access policies.
   * 
   * @param request - DeletePrivateAccessApplicationRequest
   * @returns DeletePrivateAccessApplicationResponse
   */
  async deletePrivateAccessApplication(request: $_model.DeletePrivateAccessApplicationRequest): Promise<$_model.DeletePrivateAccessApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePrivateAccessApplicationWithOptions(request, runtime);
  }

  /**
   * Deletes a private network access policy for the current Alibaba Cloud account.
   * 
   * @param request - DeletePrivateAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePrivateAccessPolicyResponse
   */
  async deletePrivateAccessPolicyWithOptions(request: $_model.DeletePrivateAccessPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePrivateAccessPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePrivateAccessPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePrivateAccessPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeletePrivateAccessPolicyResponse({}));
  }

  /**
   * Deletes a private network access policy for the current Alibaba Cloud account.
   * 
   * @param request - DeletePrivateAccessPolicyRequest
   * @returns DeletePrivateAccessPolicyResponse
   */
  async deletePrivateAccessPolicy(request: $_model.DeletePrivateAccessPolicyRequest): Promise<$_model.DeletePrivateAccessPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePrivateAccessPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes an internal access tag from the current Alibaba Cloud account.
   * 
   * @remarks
   * Deletion is not allowed when the tag is referenced by applications, office networks, or policies. References:
   * - [ListPrivateAccessApplications](~~ListPrivateAccessApplications~~): Lists internal access applications.
   * - [ListPrivateAccessTags](~~ListPrivateAccessTags~~): Lists internal access tags.
   * - [ListPrivateAccessPolices](~~ListPrivateAccessPolices~~): Lists internal access policies.
   * 
   * @param request - DeletePrivateAccessTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePrivateAccessTagResponse
   */
  async deletePrivateAccessTagWithOptions(request: $_model.DeletePrivateAccessTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePrivateAccessTagResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tagId)) {
      body["TagId"] = request.tagId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePrivateAccessTag",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePrivateAccessTagResponse>(await this.callApi(params, req, runtime), new $_model.DeletePrivateAccessTagResponse({}));
  }

  /**
   * Deletes an internal access tag from the current Alibaba Cloud account.
   * 
   * @remarks
   * Deletion is not allowed when the tag is referenced by applications, office networks, or policies. References:
   * - [ListPrivateAccessApplications](~~ListPrivateAccessApplications~~): Lists internal access applications.
   * - [ListPrivateAccessTags](~~ListPrivateAccessTags~~): Lists internal access tags.
   * - [ListPrivateAccessPolices](~~ListPrivateAccessPolices~~): Lists internal access policies.
   * 
   * @param request - DeletePrivateAccessTagRequest
   * @returns DeletePrivateAccessTagResponse
   */
  async deletePrivateAccessTag(request: $_model.DeletePrivateAccessTagRequest): Promise<$_model.DeletePrivateAccessTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePrivateAccessTagWithOptions(request, runtime);
  }

  /**
   * Batch delete device registration policies under your Alibaba Cloud account.
   * 
   * @param request - DeleteRegistrationPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRegistrationPoliciesResponse
   */
  async deleteRegistrationPoliciesWithOptions(request: $_model.DeleteRegistrationPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRegistrationPoliciesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.policyIds)) {
      bodyFlat["PolicyIds"] = request.policyIds;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRegistrationPolicies",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRegistrationPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRegistrationPoliciesResponse({}));
  }

  /**
   * Batch delete device registration policies under your Alibaba Cloud account.
   * 
   * @param request - DeleteRegistrationPoliciesRequest
   * @returns DeleteRegistrationPoliciesResponse
   */
  async deleteRegistrationPolicies(request: $_model.DeleteRegistrationPoliciesRequest): Promise<$_model.DeleteRegistrationPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRegistrationPoliciesWithOptions(request, runtime);
  }

  /**
   * Deletes user endpoint devices in batches.
   * 
   * @remarks
   * You can delete up to 100 devices at a time. Each device must be in a non-online status. If some device IDs in the specified collection do not meet the status requirement, only the devices that meet the requirement are deleted, and the operation still returns a success response.
   * 
   * @param request - DeleteUserDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserDevicesResponse
   */
  async deleteUserDevicesWithOptions(request: $_model.DeleteUserDevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserDevicesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceTags)) {
      bodyFlat["DeviceTags"] = request.deviceTags;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserDevices",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserDevicesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserDevicesResponse({}));
  }

  /**
   * Deletes user endpoint devices in batches.
   * 
   * @remarks
   * You can delete up to 100 devices at a time. Each device must be in a non-online status. If some device IDs in the specified collection do not meet the status requirement, only the devices that meet the requirement are deleted, and the operation still returns a success response.
   * 
   * @param request - DeleteUserDevicesRequest
   * @returns DeleteUserDevicesResponse
   */
  async deleteUserDevices(request: $_model.DeleteUserDevicesRequest): Promise<$_model.DeleteUserDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserDevicesWithOptions(request, runtime);
  }

  /**
   * Delete a user group in your Alibaba Cloud account.
   * 
   * @remarks
   * For more information, see:
   * - [ListPolicesForUserGroup](~~ListPolicesForUserGroup~~): Query policies attached to a user group.
   * 
   * @param request - DeleteUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserGroupResponse
   */
  async deleteUserGroupWithOptions(request: $_model.DeleteUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userGroupId)) {
      body["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserGroup",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserGroupResponse({}));
  }

  /**
   * Delete a user group in your Alibaba Cloud account.
   * 
   * @remarks
   * For more information, see:
   * - [ListPolicesForUserGroup](~~ListPolicesForUserGroup~~): Query policies attached to a user group.
   * 
   * @param request - DeleteUserGroupRequest
   * @returns DeleteUserGroupResponse
   */
  async deleteUserGroup(request: $_model.DeleteUserGroupRequest): Promise<$_model.DeleteUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserGroupWithOptions(request, runtime);
  }

  /**
   * Detaches private network access applications from a Connector in your Alibaba Cloud account.
   * 
   * @deprecated OpenAPI DetachApplication2Connector is deprecated, please use csas::2023-01-20::ModifyForwardStrategy instead.
   * 
   * @param tmpReq - DetachApplication2ConnectorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachApplication2ConnectorResponse
   */
  async detachApplication2ConnectorWithOptions(tmpReq: $_model.DetachApplication2ConnectorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachApplication2ConnectorResponse> {
    tmpReq.validate();
    let request = new $_model.DetachApplication2ConnectorShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.applicationIds)) {
      request.applicationIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.applicationIds, "ApplicationIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationIdsShrink)) {
      body["ApplicationIds"] = request.applicationIdsShrink;
    }

    if (!$dara.isNull(request.connectorId)) {
      body["ConnectorId"] = request.connectorId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachApplication2Connector",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachApplication2ConnectorResponse>(await this.callApi(params, req, runtime), new $_model.DetachApplication2ConnectorResponse({}));
  }

  /**
   * Detaches private network access applications from a Connector in your Alibaba Cloud account.
   * 
   * @deprecated OpenAPI DetachApplication2Connector is deprecated, please use csas::2023-01-20::ModifyForwardStrategy instead.
   * 
   * @param request - DetachApplication2ConnectorRequest
   * @returns DetachApplication2ConnectorResponse
   */
  // Deprecated
  async detachApplication2Connector(request: $_model.DetachApplication2ConnectorRequest): Promise<$_model.DetachApplication2ConnectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachApplication2ConnectorWithOptions(request, runtime);
  }

  /**
   * Detach a business policy from an approval process.
   * 
   * @param request - DetachPolicy2ApprovalProcessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachPolicy2ApprovalProcessResponse
   */
  async detachPolicy2ApprovalProcessWithOptions(request: $_model.DetachPolicy2ApprovalProcessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachPolicy2ApprovalProcessResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.policyType)) {
      body["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.processId)) {
      body["ProcessId"] = request.processId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachPolicy2ApprovalProcess",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachPolicy2ApprovalProcessResponse>(await this.callApi(params, req, runtime), new $_model.DetachPolicy2ApprovalProcessResponse({}));
  }

  /**
   * Detach a business policy from an approval process.
   * 
   * @param request - DetachPolicy2ApprovalProcessRequest
   * @returns DetachPolicy2ApprovalProcessResponse
   */
  async detachPolicy2ApprovalProcess(request: $_model.DetachPolicy2ApprovalProcessRequest): Promise<$_model.DetachPolicy2ApprovalProcessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachPolicy2ApprovalProcessWithOptions(request, runtime);
  }

  /**
   * Disables an enterprise acceleration policy.
   * 
   * @param request - DisableEnterpriseAcceleratePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableEnterpriseAcceleratePolicyResponse
   */
  async disableEnterpriseAcceleratePolicyWithOptions(request: $_model.DisableEnterpriseAcceleratePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableEnterpriseAcceleratePolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.eapId)) {
      body["EapId"] = request.eapId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableEnterpriseAcceleratePolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableEnterpriseAcceleratePolicyResponse>(await this.callApi(params, req, runtime), new $_model.DisableEnterpriseAcceleratePolicyResponse({}));
  }

  /**
   * Disables an enterprise acceleration policy.
   * 
   * @param request - DisableEnterpriseAcceleratePolicyRequest
   * @returns DisableEnterpriseAcceleratePolicyResponse
   */
  async disableEnterpriseAcceleratePolicy(request: $_model.DisableEnterpriseAcceleratePolicyRequest): Promise<$_model.DisableEnterpriseAcceleratePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableEnterpriseAcceleratePolicyWithOptions(request, runtime);
  }

  /**
   * Enables an enterprise acceleration policy.
   * 
   * @param request - EnableEnterpriseAcceleratePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableEnterpriseAcceleratePolicyResponse
   */
  async enableEnterpriseAcceleratePolicyWithOptions(request: $_model.EnableEnterpriseAcceleratePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableEnterpriseAcceleratePolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.eapId)) {
      body["EapId"] = request.eapId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableEnterpriseAcceleratePolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableEnterpriseAcceleratePolicyResponse>(await this.callApi(params, req, runtime), new $_model.EnableEnterpriseAcceleratePolicyResponse({}));
  }

  /**
   * Enables an enterprise acceleration policy.
   * 
   * @param request - EnableEnterpriseAcceleratePolicyRequest
   * @returns EnableEnterpriseAcceleratePolicyResponse
   */
  async enableEnterpriseAcceleratePolicy(request: $_model.EnableEnterpriseAcceleratePolicyRequest): Promise<$_model.EnableEnterpriseAcceleratePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableEnterpriseAcceleratePolicyWithOptions(request, runtime);
  }

  /**
   * Export a list of user terminal devices to an Excel file.
   * 
   * @param request - ExportUserDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportUserDevicesResponse
   */
  async exportUserDevicesWithOptions(request: $_model.ExportUserDevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportUserDevicesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appStatuses)) {
      bodyFlat["AppStatuses"] = request.appStatuses;
    }

    if (!$dara.isNull(request.department)) {
      body["Department"] = request.department;
    }

    if (!$dara.isNull(request.deviceBelong)) {
      body["DeviceBelong"] = request.deviceBelong;
    }

    if (!$dara.isNull(request.deviceStatuses)) {
      bodyFlat["DeviceStatuses"] = request.deviceStatuses;
    }

    if (!$dara.isNull(request.deviceTags)) {
      bodyFlat["DeviceTags"] = request.deviceTags;
    }

    if (!$dara.isNull(request.deviceTypes)) {
      bodyFlat["DeviceTypes"] = request.deviceTypes;
    }

    if (!$dara.isNull(request.dlpStatuses)) {
      bodyFlat["DlpStatuses"] = request.dlpStatuses;
    }

    if (!$dara.isNull(request.hostname)) {
      body["Hostname"] = request.hostname;
    }

    if (!$dara.isNull(request.iaStatuses)) {
      bodyFlat["IaStatuses"] = request.iaStatuses;
    }

    if (!$dara.isNull(request.mac)) {
      body["Mac"] = request.mac;
    }

    if (!$dara.isNull(request.nacStatuses)) {
      bodyFlat["NacStatuses"] = request.nacStatuses;
    }

    if (!$dara.isNull(request.paStatuses)) {
      bodyFlat["PaStatuses"] = request.paStatuses;
    }

    if (!$dara.isNull(request.saseUserId)) {
      body["SaseUserId"] = request.saseUserId;
    }

    if (!$dara.isNull(request.sharingStatus)) {
      body["SharingStatus"] = request.sharingStatus;
    }

    if (!$dara.isNull(request.username)) {
      body["Username"] = request.username;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportUserDevices",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportUserDevicesResponse>(await this.callApi(params, req, runtime), new $_model.ExportUserDevicesResponse({}));
  }

  /**
   * Export a list of user terminal devices to an Excel file.
   * 
   * @param request - ExportUserDevicesRequest
   * @returns ExportUserDevicesResponse
   */
  async exportUserDevices(request: $_model.ExportUserDevicesRequest): Promise<$_model.ExportUserDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportUserDevicesWithOptions(request, runtime);
  }

  /**
   * Queries the identity provider configuration enabled for your Alibaba Cloud account.
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetActiveIdpConfigResponse
   */
  async getActiveIdpConfigWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetActiveIdpConfigResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetActiveIdpConfig",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetActiveIdpConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetActiveIdpConfigResponse({}));
  }

  /**
   * Queries the identity provider configuration enabled for your Alibaba Cloud account.
   * @returns GetActiveIdpConfigResponse
   */
  async getActiveIdpConfig(): Promise<$_model.GetActiveIdpConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getActiveIdpConfigWithOptions(runtime);
  }

  /**
   * Retrieves the details of an approval instance for your Alibaba Cloud account.
   * 
   * @param request - GetApprovalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApprovalResponse
   */
  async getApprovalWithOptions(request: $_model.GetApprovalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApprovalResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApproval",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApprovalResponse>(await this.callApi(params, req, runtime), new $_model.GetApprovalResponse({}));
  }

  /**
   * Retrieves the details of an approval instance for your Alibaba Cloud account.
   * 
   * @param request - GetApprovalRequest
   * @returns GetApprovalResponse
   */
  async getApproval(request: $_model.GetApprovalRequest): Promise<$_model.GetApprovalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApprovalWithOptions(request, runtime);
  }

  /**
   * Queries the details of an approval flow under the current Alibaba Cloud account.
   * 
   * @param request - GetApprovalProcessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApprovalProcessResponse
   */
  async getApprovalProcessWithOptions(request: $_model.GetApprovalProcessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApprovalProcessResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApprovalProcess",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApprovalProcessResponse>(await this.callApi(params, req, runtime), new $_model.GetApprovalProcessResponse({}));
  }

  /**
   * Queries the details of an approval flow under the current Alibaba Cloud account.
   * 
   * @param request - GetApprovalProcessRequest
   * @returns GetApprovalProcessResponse
   */
  async getApprovalProcess(request: $_model.GetApprovalProcessRequest): Promise<$_model.GetApprovalProcessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApprovalProcessWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of an approval template for your Alibaba Cloud account.
   * 
   * @param request - GetApprovalSchemaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApprovalSchemaResponse
   */
  async getApprovalSchemaWithOptions(request: $_model.GetApprovalSchemaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApprovalSchemaResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApprovalSchema",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApprovalSchemaResponse>(await this.callApi(params, req, runtime), new $_model.GetApprovalSchemaResponse({}));
  }

  /**
   * Retrieves the details of an approval template for your Alibaba Cloud account.
   * 
   * @param request - GetApprovalSchemaRequest
   * @returns GetApprovalSchemaResponse
   */
  async getApprovalSchema(request: $_model.GetApprovalSchemaRequest): Promise<$_model.GetApprovalSchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApprovalSchemaWithOptions(request, runtime);
  }

  /**
   * Queries the details of the auto-start and anti-uninstall policy for your Alibaba Cloud account.
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBootAndAntiUninstallPolicyResponse
   */
  async getBootAndAntiUninstallPolicyWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetBootAndAntiUninstallPolicyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetBootAndAntiUninstallPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBootAndAntiUninstallPolicyResponse>(await this.callApi(params, req, runtime), new $_model.GetBootAndAntiUninstallPolicyResponse({}));
  }

  /**
   * Queries the details of the auto-start and anti-uninstall policy for your Alibaba Cloud account.
   * @returns GetBootAndAntiUninstallPolicyResponse
   */
  async getBootAndAntiUninstallPolicy(): Promise<$_model.GetBootAndAntiUninstallPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBootAndAntiUninstallPolicyWithOptions(runtime);
  }

  /**
   * Retrieves the details of a user from a custom identity source in your Alibaba Cloud account.
   * 
   * @param request - GetClientUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClientUserResponse
   */
  async getClientUserWithOptions(request: $_model.GetClientUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetClientUserResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetClientUser",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetClientUserResponse>(await this.callApi(params, req, runtime), new $_model.GetClientUserResponse({}));
  }

  /**
   * Retrieves the details of a user from a custom identity source in your Alibaba Cloud account.
   * 
   * @param request - GetClientUserRequest
   * @returns GetClientUserResponse
   */
  async getClientUser(request: $_model.GetClientUserRequest): Promise<$_model.GetClientUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getClientUserWithOptions(request, runtime);
  }

  /**
   * Retrieves details about a dynamic route in your Alibaba Cloud account.
   * 
   * @param request - GetDynamicRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDynamicRouteResponse
   */
  async getDynamicRouteWithOptions(request: $_model.GetDynamicRouteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDynamicRouteResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDynamicRoute",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDynamicRouteResponse>(await this.callApi(params, req, runtime), new $_model.GetDynamicRouteResponse({}));
  }

  /**
   * Retrieves details about a dynamic route in your Alibaba Cloud account.
   * 
   * @param request - GetDynamicRouteRequest
   * @returns GetDynamicRouteResponse
   */
  async getDynamicRoute(request: $_model.GetDynamicRouteRequest): Promise<$_model.GetDynamicRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDynamicRouteWithOptions(request, runtime);
  }

  /**
   * Retrieve the configuration details of a specified identity provider for your Alibaba Cloud account.
   * 
   * @param request - GetIdpConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIdpConfigResponse
   */
  async getIdpConfigWithOptions(request: $_model.GetIdpConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIdpConfigResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIdpConfig",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIdpConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetIdpConfigResponse({}));
  }

  /**
   * Retrieve the configuration details of a specified identity provider for your Alibaba Cloud account.
   * 
   * @param request - GetIdpConfigRequest
   * @returns GetIdpConfigResponse
   */
  async getIdpConfig(request: $_model.GetIdpConfigRequest): Promise<$_model.GetIdpConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIdpConfigWithOptions(request, runtime);
  }

  /**
   * Retrieves the phone number whitelist for visitor admission SMS logon.
   * 
   * @remarks
   * Retrieves all phone numbers in the whitelist.
   * 
   * @param request - GetNacPortalSmsPhoneWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNacPortalSmsPhoneWhitelistResponse
   */
  async getNacPortalSmsPhoneWhitelistWithOptions(request: $_model.GetNacPortalSmsPhoneWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNacPortalSmsPhoneWhitelistResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetNacPortalSmsPhoneWhitelist",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNacPortalSmsPhoneWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.GetNacPortalSmsPhoneWhitelistResponse({}));
  }

  /**
   * Retrieves the phone number whitelist for visitor admission SMS logon.
   * 
   * @remarks
   * Retrieves all phone numbers in the whitelist.
   * 
   * @param request - GetNacPortalSmsPhoneWhitelistRequest
   * @returns GetNacPortalSmsPhoneWhitelistResponse
   */
  async getNacPortalSmsPhoneWhitelist(request: $_model.GetNacPortalSmsPhoneWhitelistRequest): Promise<$_model.GetNacPortalSmsPhoneWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNacPortalSmsPhoneWhitelistWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a private access diagnostic task.
   * 
   * @param request - GetPADiagnosisTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPADiagnosisTaskResponse
   */
  async getPADiagnosisTaskWithOptions(request: $_model.GetPADiagnosisTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPADiagnosisTaskResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPADiagnosisTask",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPADiagnosisTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetPADiagnosisTaskResponse({}));
  }

  /**
   * Retrieves the details of a private access diagnostic task.
   * 
   * @param request - GetPADiagnosisTaskRequest
   * @returns GetPADiagnosisTaskResponse
   */
  async getPADiagnosisTask(request: $_model.GetPADiagnosisTaskRequest): Promise<$_model.GetPADiagnosisTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPADiagnosisTaskWithOptions(request, runtime);
  }

  /**
   * Queries the details of an internal-facing access application under the current Alibaba Cloud account.
   * 
   * @param request - GetPrivateAccessApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPrivateAccessApplicationResponse
   */
  async getPrivateAccessApplicationWithOptions(request: $_model.GetPrivateAccessApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPrivateAccessApplicationResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPrivateAccessApplication",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPrivateAccessApplicationResponse>(await this.callApi(params, req, runtime), new $_model.GetPrivateAccessApplicationResponse({}));
  }

  /**
   * Queries the details of an internal-facing access application under the current Alibaba Cloud account.
   * 
   * @param request - GetPrivateAccessApplicationRequest
   * @returns GetPrivateAccessApplicationResponse
   */
  async getPrivateAccessApplication(request: $_model.GetPrivateAccessApplicationRequest): Promise<$_model.GetPrivateAccessApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPrivateAccessApplicationWithOptions(request, runtime);
  }

  /**
   * Query Intranet Access Policy Details
   * 
   * @param request - GetPrivateAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPrivateAccessPolicyResponse
   */
  async getPrivateAccessPolicyWithOptions(request: $_model.GetPrivateAccessPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPrivateAccessPolicyResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPrivateAccessPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPrivateAccessPolicyResponse>(await this.callApi(params, req, runtime), new $_model.GetPrivateAccessPolicyResponse({}));
  }

  /**
   * Query Intranet Access Policy Details
   * 
   * @param request - GetPrivateAccessPolicyRequest
   * @returns GetPrivateAccessPolicyResponse
   */
  async getPrivateAccessPolicy(request: $_model.GetPrivateAccessPolicyRequest): Promise<$_model.GetPrivateAccessPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPrivateAccessPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the details of a device registration policy within the current Alibaba Cloud account.
   * 
   * @param request - GetRegistrationPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRegistrationPolicyResponse
   */
  async getRegistrationPolicyWithOptions(request: $_model.GetRegistrationPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRegistrationPolicyResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRegistrationPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRegistrationPolicyResponse>(await this.callApi(params, req, runtime), new $_model.GetRegistrationPolicyResponse({}));
  }

  /**
   * Queries the details of a device registration policy within the current Alibaba Cloud account.
   * 
   * @param request - GetRegistrationPolicyRequest
   * @returns GetRegistrationPolicyResponse
   */
  async getRegistrationPolicy(request: $_model.GetRegistrationPolicyRequest): Promise<$_model.GetRegistrationPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRegistrationPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the details of a user endpoint device under the current Alibaba Cloud account.
   * 
   * @param request - GetUserDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserDeviceResponse
   */
  async getUserDeviceWithOptions(request: $_model.GetUserDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserDeviceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserDevice",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserDeviceResponse>(await this.callApi(params, req, runtime), new $_model.GetUserDeviceResponse({}));
  }

  /**
   * Queries the details of a user endpoint device under the current Alibaba Cloud account.
   * 
   * @param request - GetUserDeviceRequest
   * @returns GetUserDeviceResponse
   */
  async getUserDevice(request: $_model.GetUserDeviceRequest): Promise<$_model.GetUserDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserDeviceWithOptions(request, runtime);
  }

  /**
   * Queries the details of a user group in the current Alibaba Cloud account.
   * 
   * @param request - GetUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserGroupResponse
   */
  async getUserGroupWithOptions(request: $_model.GetUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserGroupResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserGroup",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetUserGroupResponse({}));
  }

  /**
   * Queries the details of a user group in the current Alibaba Cloud account.
   * 
   * @param request - GetUserGroupRequest
   * @returns GetUserGroupResponse
   */
  async getUserGroup(request: $_model.GetUserGroupRequest): Promise<$_model.GetUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserGroupWithOptions(request, runtime);
  }

  /**
   * Use the job ID obtained from creating a watermark embedding job to query the embedding job result.
   * 
   * @param request - GetWmEmbedTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWmEmbedTaskResponse
   */
  async getWmEmbedTaskWithOptions(request: $_model.GetWmEmbedTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWmEmbedTaskResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWmEmbedTask",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWmEmbedTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetWmEmbedTaskResponse({}));
  }

  /**
   * Use the job ID obtained from creating a watermark embedding job to query the embedding job result.
   * 
   * @param request - GetWmEmbedTaskRequest
   * @returns GetWmEmbedTaskResponse
   */
  async getWmEmbedTask(request: $_model.GetWmEmbedTaskRequest): Promise<$_model.GetWmEmbedTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWmEmbedTaskWithOptions(request, runtime);
  }

  /**
   * Queries the result of a watermark extraction task using the task ID that is returned when you create the task.
   * 
   * @param request - GetWmExtractTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWmExtractTaskResponse
   */
  async getWmExtractTaskWithOptions(request: $_model.GetWmExtractTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWmExtractTaskResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWmExtractTask",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWmExtractTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetWmExtractTaskResponse({}));
  }

  /**
   * Queries the result of a watermark extraction task using the task ID that is returned when you create the task.
   * 
   * @param request - GetWmExtractTaskRequest
   * @returns GetWmExtractTaskResponse
   */
  async getWmExtractTask(request: $_model.GetWmExtractTaskRequest): Promise<$_model.GetWmExtractTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWmExtractTaskWithOptions(request, runtime);
  }

  /**
   * Batch import acceleration addresses.
   * 
   * @param request - ImportEnterpriseAccelerateTargetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportEnterpriseAccelerateTargetsResponse
   */
  async importEnterpriseAccelerateTargetsWithOptions(request: $_model.ImportEnterpriseAccelerateTargetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportEnterpriseAccelerateTargetsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.eapId)) {
      body["EapId"] = request.eapId;
    }

    if (!$dara.isNull(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportEnterpriseAccelerateTargets",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportEnterpriseAccelerateTargetsResponse>(await this.callApi(params, req, runtime), new $_model.ImportEnterpriseAccelerateTargetsResponse({}));
  }

  /**
   * Batch import acceleration addresses.
   * 
   * @param request - ImportEnterpriseAccelerateTargetsRequest
   * @returns ImportEnterpriseAccelerateTargetsResponse
   */
  async importEnterpriseAccelerateTargets(request: $_model.ImportEnterpriseAccelerateTargetsRequest): Promise<$_model.ImportEnterpriseAccelerateTargetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importEnterpriseAccelerateTargetsWithOptions(request, runtime);
  }

  /**
   * Queries the applications associated with one or more private access policies.
   * 
   * @param request - ListApplicationsForPrivateAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsForPrivateAccessPolicyResponse
   */
  async listApplicationsForPrivateAccessPolicyWithOptions(request: $_model.ListApplicationsForPrivateAccessPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationsForPrivateAccessPolicyResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplicationsForPrivateAccessPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationsForPrivateAccessPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationsForPrivateAccessPolicyResponse({}));
  }

  /**
   * Queries the applications associated with one or more private access policies.
   * 
   * @param request - ListApplicationsForPrivateAccessPolicyRequest
   * @returns ListApplicationsForPrivateAccessPolicyResponse
   */
  async listApplicationsForPrivateAccessPolicy(request: $_model.ListApplicationsForPrivateAccessPolicyRequest): Promise<$_model.ListApplicationsForPrivateAccessPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationsForPrivateAccessPolicyWithOptions(request, runtime);
  }

  /**
   * Batch-query applications associated with private network access tags within your Alibaba Cloud account.
   * 
   * @param request - ListApplicationsForPrivateAccessTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsForPrivateAccessTagResponse
   */
  async listApplicationsForPrivateAccessTagWithOptions(request: $_model.ListApplicationsForPrivateAccessTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationsForPrivateAccessTagResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplicationsForPrivateAccessTag",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationsForPrivateAccessTagResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationsForPrivateAccessTagResponse({}));
  }

  /**
   * Batch-query applications associated with private network access tags within your Alibaba Cloud account.
   * 
   * @param request - ListApplicationsForPrivateAccessTagRequest
   * @returns ListApplicationsForPrivateAccessTagResponse
   */
  async listApplicationsForPrivateAccessTag(request: $_model.ListApplicationsForPrivateAccessTagRequest): Promise<$_model.ListApplicationsForPrivateAccessTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationsForPrivateAccessTagWithOptions(request, runtime);
  }

  /**
   * Queries the list of approval processes under the current Alibaba Cloud account.
   * 
   * @param request - ListApprovalProcessesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApprovalProcessesResponse
   */
  async listApprovalProcessesWithOptions(request: $_model.ListApprovalProcessesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApprovalProcessesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApprovalProcesses",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApprovalProcessesResponse>(await this.callApi(params, req, runtime), new $_model.ListApprovalProcessesResponse({}));
  }

  /**
   * Queries the list of approval processes under the current Alibaba Cloud account.
   * 
   * @param request - ListApprovalProcessesRequest
   * @returns ListApprovalProcessesResponse
   */
  async listApprovalProcesses(request: $_model.ListApprovalProcessesRequest): Promise<$_model.ListApprovalProcessesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApprovalProcessesWithOptions(request, runtime);
  }

  /**
   * Queries the approval flows associated with approval rendering templates.
   * 
   * @param request - ListApprovalProcessesForApprovalSchemasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApprovalProcessesForApprovalSchemasResponse
   */
  async listApprovalProcessesForApprovalSchemasWithOptions(request: $_model.ListApprovalProcessesForApprovalSchemasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApprovalProcessesForApprovalSchemasResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApprovalProcessesForApprovalSchemas",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApprovalProcessesForApprovalSchemasResponse>(await this.callApi(params, req, runtime), new $_model.ListApprovalProcessesForApprovalSchemasResponse({}));
  }

  /**
   * Queries the approval flows associated with approval rendering templates.
   * 
   * @param request - ListApprovalProcessesForApprovalSchemasRequest
   * @returns ListApprovalProcessesForApprovalSchemasResponse
   */
  async listApprovalProcessesForApprovalSchemas(request: $_model.ListApprovalProcessesForApprovalSchemasRequest): Promise<$_model.ListApprovalProcessesForApprovalSchemasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApprovalProcessesForApprovalSchemasWithOptions(request, runtime);
  }

  /**
   * Lists the approval templates for your Alibaba Cloud account.
   * 
   * @param request - ListApprovalSchemasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApprovalSchemasResponse
   */
  async listApprovalSchemasWithOptions(request: $_model.ListApprovalSchemasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApprovalSchemasResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApprovalSchemas",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApprovalSchemasResponse>(await this.callApi(params, req, runtime), new $_model.ListApprovalSchemasResponse({}));
  }

  /**
   * Lists the approval templates for your Alibaba Cloud account.
   * 
   * @param request - ListApprovalSchemasRequest
   * @returns ListApprovalSchemasResponse
   */
  async listApprovalSchemas(request: $_model.ListApprovalSchemasRequest): Promise<$_model.ListApprovalSchemasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApprovalSchemasWithOptions(request, runtime);
  }

  /**
   * Queries the rendering templates associated with approval processes.
   * 
   * @param request - ListApprovalSchemasForApprovalProcessesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApprovalSchemasForApprovalProcessesResponse
   */
  async listApprovalSchemasForApprovalProcessesWithOptions(request: $_model.ListApprovalSchemasForApprovalProcessesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApprovalSchemasForApprovalProcessesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApprovalSchemasForApprovalProcesses",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApprovalSchemasForApprovalProcessesResponse>(await this.callApi(params, req, runtime), new $_model.ListApprovalSchemasForApprovalProcessesResponse({}));
  }

  /**
   * Queries the rendering templates associated with approval processes.
   * 
   * @param request - ListApprovalSchemasForApprovalProcessesRequest
   * @returns ListApprovalSchemasForApprovalProcessesResponse
   */
  async listApprovalSchemasForApprovalProcesses(request: $_model.ListApprovalSchemasForApprovalProcessesRequest): Promise<$_model.ListApprovalSchemasForApprovalProcessesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApprovalSchemasForApprovalProcessesWithOptions(request, runtime);
  }

  /**
   * Lists approval instances for your Alibaba Cloud account.
   * 
   * @param request - ListApprovalsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApprovalsResponse
   */
  async listApprovalsWithOptions(request: $_model.ListApprovalsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApprovalsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApprovals",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApprovalsResponse>(await this.callApi(params, req, runtime), new $_model.ListApprovalsResponse({}));
  }

  /**
   * Lists approval instances for your Alibaba Cloud account.
   * 
   * @param request - ListApprovalsRequest
   * @returns ListApprovalsResponse
   */
  async listApprovals(request: $_model.ListApprovalsRequest): Promise<$_model.ListApprovalsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApprovalsWithOptions(request, runtime);
  }

  /**
   * Query user information from custom identity sources in your Alibaba Cloud account.
   * 
   * @param request - ListClientUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClientUsersResponse
   */
  async listClientUsersWithOptions(request: $_model.ListClientUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClientUsersResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClientUsers",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClientUsersResponse>(await this.callApi(params, req, runtime), new $_model.ListClientUsersResponse({}));
  }

  /**
   * Query user information from custom identity sources in your Alibaba Cloud account.
   * 
   * @param request - ListClientUsersRequest
   * @returns ListClientUsersResponse
   */
  async listClientUsers(request: $_model.ListClientUsersRequest): Promise<$_model.ListClientUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClientUsersWithOptions(request, runtime);
  }

  /**
   * Query connectors in batches.
   * 
   * @param request - ListConnectorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConnectorsResponse
   */
  async listConnectorsWithOptions(request: $_model.ListConnectorsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListConnectorsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConnectors",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConnectorsResponse>(await this.callApi(params, req, runtime), new $_model.ListConnectorsResponse({}));
  }

  /**
   * Query connectors in batches.
   * 
   * @param request - ListConnectorsRequest
   * @returns ListConnectorsResponse
   */
  async listConnectors(request: $_model.ListConnectorsRequest): Promise<$_model.ListConnectorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConnectorsWithOptions(request, runtime);
  }

  /**
   * Queries the list of domain name lists.
   * 
   * @remarks
   * Performs a paged query on the metadata of domain name lists (the header information of domain name blacklists/whitelists, excluding the specific domain name entries within the lists) for the current tenant with paging. You can filter by list type (blacklist/whitelist), perform fuzzy search by name, and specify whether to include system built-in default template lists in the results. Each record includes the number of domain name entries in the list.
   * 
   * @param request - ListDomainMetasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDomainMetasResponse
   */
  async listDomainMetasWithOptions(request: $_model.ListDomainMetasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDomainMetasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.defaultTemplate)) {
      query["DefaultTemplate"] = request.defaultTemplate;
    }

    if (!$dara.isNull(request.listType)) {
      query["ListType"] = request.listType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDomainMetas",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDomainMetasResponse>(await this.callApi(params, req, runtime), new $_model.ListDomainMetasResponse({}));
  }

  /**
   * Queries the list of domain name lists.
   * 
   * @remarks
   * Performs a paged query on the metadata of domain name lists (the header information of domain name blacklists/whitelists, excluding the specific domain name entries within the lists) for the current tenant with paging. You can filter by list type (blacklist/whitelist), perform fuzzy search by name, and specify whether to include system built-in default template lists in the results. Each record includes the number of domain name entries in the list.
   * 
   * @param request - ListDomainMetasRequest
   * @returns ListDomainMetasResponse
   */
  async listDomainMetas(request: $_model.ListDomainMetasRequest): Promise<$_model.ListDomainMetasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDomainMetasWithOptions(request, runtime);
  }

  /**
   * Batch Query Dynamic Policy Disposal Processes
   * 
   * @param request - ListDynamicDisposalProcessesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDynamicDisposalProcessesResponse
   */
  async listDynamicDisposalProcessesWithOptions(request: $_model.ListDynamicDisposalProcessesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDynamicDisposalProcessesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDynamicDisposalProcesses",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDynamicDisposalProcessesResponse>(await this.callApi(params, req, runtime), new $_model.ListDynamicDisposalProcessesResponse({}));
  }

  /**
   * Batch Query Dynamic Policy Disposal Processes
   * 
   * @param request - ListDynamicDisposalProcessesRequest
   * @returns ListDynamicDisposalProcessesResponse
   */
  async listDynamicDisposalProcesses(request: $_model.ListDynamicDisposalProcessesRequest): Promise<$_model.ListDynamicDisposalProcessesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDynamicDisposalProcessesWithOptions(request, runtime);
  }

  /**
   * Queries the regions that are supported by the access points of SASE POP clusters for your Alibaba Cloud account.
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDynamicRouteRegionsResponse
   */
  async listDynamicRouteRegionsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListDynamicRouteRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListDynamicRouteRegions",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDynamicRouteRegionsResponse>(await this.callApi(params, req, runtime), new $_model.ListDynamicRouteRegionsResponse({}));
  }

  /**
   * Queries the regions that are supported by the access points of SASE POP clusters for your Alibaba Cloud account.
   * @returns ListDynamicRouteRegionsResponse
   */
  async listDynamicRouteRegions(): Promise<$_model.ListDynamicRouteRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDynamicRouteRegionsWithOptions(runtime);
  }

  /**
   * Retrieves information about all dynamic routes for the current Alibaba Cloud account.
   * 
   * @param request - ListDynamicRoutesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDynamicRoutesResponse
   */
  async listDynamicRoutesWithOptions(request: $_model.ListDynamicRoutesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDynamicRoutesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDynamicRoutes",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDynamicRoutesResponse>(await this.callApi(params, req, runtime), new $_model.ListDynamicRoutesResponse({}));
  }

  /**
   * Retrieves information about all dynamic routes for the current Alibaba Cloud account.
   * 
   * @param request - ListDynamicRoutesRequest
   * @returns ListDynamicRoutesResponse
   */
  async listDynamicRoutes(request: $_model.ListDynamicRoutesRequest): Promise<$_model.ListDynamicRoutesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDynamicRoutesWithOptions(request, runtime);
  }

  /**
   * Queries audit logs for enterprise acceleration.
   * 
   * @param request - ListEnterpriseAccelerateLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnterpriseAccelerateLogsResponse
   */
  async listEnterpriseAccelerateLogsWithOptions(request: $_model.ListEnterpriseAccelerateLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEnterpriseAccelerateLogsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEnterpriseAccelerateLogs",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEnterpriseAccelerateLogsResponse>(await this.callApi(params, req, runtime), new $_model.ListEnterpriseAccelerateLogsResponse({}));
  }

  /**
   * Queries audit logs for enterprise acceleration.
   * 
   * @param request - ListEnterpriseAccelerateLogsRequest
   * @returns ListEnterpriseAccelerateLogsResponse
   */
  async listEnterpriseAccelerateLogs(request: $_model.ListEnterpriseAccelerateLogsRequest): Promise<$_model.ListEnterpriseAccelerateLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEnterpriseAccelerateLogsWithOptions(request, runtime);
  }

  /**
   * Query acceleration policies
   * 
   * @param request - ListEnterpriseAcceleratePoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnterpriseAcceleratePoliciesResponse
   */
  async listEnterpriseAcceleratePoliciesWithOptions(request: $_model.ListEnterpriseAcceleratePoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEnterpriseAcceleratePoliciesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEnterpriseAcceleratePolicies",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEnterpriseAcceleratePoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ListEnterpriseAcceleratePoliciesResponse({}));
  }

  /**
   * Query acceleration policies
   * 
   * @param request - ListEnterpriseAcceleratePoliciesRequest
   * @returns ListEnterpriseAcceleratePoliciesResponse
   */
  async listEnterpriseAcceleratePolicies(request: $_model.ListEnterpriseAcceleratePoliciesRequest): Promise<$_model.ListEnterpriseAcceleratePoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEnterpriseAcceleratePoliciesWithOptions(request, runtime);
  }

  /**
   * Query the list of enterprise acceleration targets.
   * 
   * @param request - ListEnterpriseAccelerateTargetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnterpriseAccelerateTargetsResponse
   */
  async listEnterpriseAccelerateTargetsWithOptions(request: $_model.ListEnterpriseAccelerateTargetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEnterpriseAccelerateTargetsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEnterpriseAccelerateTargets",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEnterpriseAccelerateTargetsResponse>(await this.callApi(params, req, runtime), new $_model.ListEnterpriseAccelerateTargetsResponse({}));
  }

  /**
   * Query the list of enterprise acceleration targets.
   * 
   * @param request - ListEnterpriseAccelerateTargetsRequest
   * @returns ListEnterpriseAccelerateTargetsResponse
   */
  async listEnterpriseAccelerateTargets(request: $_model.ListEnterpriseAccelerateTargetsRequest): Promise<$_model.ListEnterpriseAccelerateTargetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEnterpriseAccelerateTargetsWithOptions(request, runtime);
  }

  /**
   * Lists excess end-user device registration applications in the current Alibaba Cloud account.
   * 
   * @param request - ListExcessiveDeviceRegistrationApplicationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExcessiveDeviceRegistrationApplicationsResponse
   */
  async listExcessiveDeviceRegistrationApplicationsWithOptions(request: $_model.ListExcessiveDeviceRegistrationApplicationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListExcessiveDeviceRegistrationApplicationsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExcessiveDeviceRegistrationApplications",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExcessiveDeviceRegistrationApplicationsResponse>(await this.callApi(params, req, runtime), new $_model.ListExcessiveDeviceRegistrationApplicationsResponse({}));
  }

  /**
   * Lists excess end-user device registration applications in the current Alibaba Cloud account.
   * 
   * @param request - ListExcessiveDeviceRegistrationApplicationsRequest
   * @returns ListExcessiveDeviceRegistrationApplicationsResponse
   */
  async listExcessiveDeviceRegistrationApplications(request: $_model.ListExcessiveDeviceRegistrationApplicationsRequest): Promise<$_model.ListExcessiveDeviceRegistrationApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExcessiveDeviceRegistrationApplicationsWithOptions(request, runtime);
  }

  /**
   * Queries forwarding rules in batches.
   * 
   * @param request - ListForwardStrategiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListForwardStrategiesResponse
   */
  async listForwardStrategiesWithOptions(request: $_model.ListForwardStrategiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListForwardStrategiesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListForwardStrategies",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListForwardStrategiesResponse>(await this.callApi(params, req, runtime), new $_model.ListForwardStrategiesResponse({}));
  }

  /**
   * Queries forwarding rules in batches.
   * 
   * @param request - ListForwardStrategiesRequest
   * @returns ListForwardStrategiesResponse
   */
  async listForwardStrategies(request: $_model.ListForwardStrategiesRequest): Promise<$_model.ListForwardStrategiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listForwardStrategiesWithOptions(request, runtime);
  }

  /**
   * Queries the bindings of forwarding rules in batches.
   * 
   * @param request - ListForwardStrategyBindingItemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListForwardStrategyBindingItemsResponse
   */
  async listForwardStrategyBindingItemsWithOptions(request: $_model.ListForwardStrategyBindingItemsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListForwardStrategyBindingItemsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListForwardStrategyBindingItems",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListForwardStrategyBindingItemsResponse>(await this.callApi(params, req, runtime), new $_model.ListForwardStrategyBindingItemsResponse({}));
  }

  /**
   * Queries the bindings of forwarding rules in batches.
   * 
   * @param request - ListForwardStrategyBindingItemsRequest
   * @returns ListForwardStrategyBindingItemsResponse
   */
  async listForwardStrategyBindingItems(request: $_model.ListForwardStrategyBindingItemsRequest): Promise<$_model.ListForwardStrategyBindingItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listForwardStrategyBindingItemsWithOptions(request, runtime);
  }

  /**
   * Lists identity provider configurations for the current Alibaba Cloud account.
   * 
   * @param request - ListIdpConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIdpConfigsResponse
   */
  async listIdpConfigsWithOptions(request: $_model.ListIdpConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIdpConfigsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIdpConfigs",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIdpConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListIdpConfigsResponse({}));
  }

  /**
   * Lists identity provider configurations for the current Alibaba Cloud account.
   * 
   * @param request - ListIdpConfigsRequest
   * @returns ListIdpConfigsResponse
   */
  async listIdpConfigs(request: $_model.ListIdpConfigsRequest): Promise<$_model.ListIdpConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIdpConfigsWithOptions(request, runtime);
  }

  /**
   * Retrieves department information for a custom identity provider (IdP) associated with your Alibaba Cloud account.
   * 
   * @param request - ListIdpDepartmentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIdpDepartmentsResponse
   */
  async listIdpDepartmentsWithOptions(request: $_model.ListIdpDepartmentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIdpDepartmentsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIdpDepartments",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIdpDepartmentsResponse>(await this.callApi(params, req, runtime), new $_model.ListIdpDepartmentsResponse({}));
  }

  /**
   * Retrieves department information for a custom identity provider (IdP) associated with your Alibaba Cloud account.
   * 
   * @param request - ListIdpDepartmentsRequest
   * @returns ListIdpDepartmentsResponse
   */
  async listIdpDepartments(request: $_model.ListIdpDepartmentsRequest): Promise<$_model.ListIdpDepartmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIdpDepartmentsWithOptions(request, runtime);
  }

  /**
   * Lists onboarded users.
   * 
   * @param request - ListNacUserCertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNacUserCertResponse
   */
  async listNacUserCertWithOptions(request: $_model.ListNacUserCertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNacUserCertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.department)) {
      query["Department"] = request.department;
    }

    if (!$dara.isNull(request.deviceType)) {
      query["DeviceType"] = request.deviceType;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNacUserCert",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNacUserCertResponse>(await this.callApi(params, req, runtime), new $_model.ListNacUserCertResponse({}));
  }

  /**
   * Lists onboarded users.
   * 
   * @param request - ListNacUserCertRequest
   * @returns ListNacUserCertResponse
   */
  async listNacUserCert(request: $_model.ListNacUserCertRequest): Promise<$_model.ListNacUserCertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNacUserCertWithOptions(request, runtime);
  }

  /**
   * Queries policies for private access applications in your Alibaba Cloud account in batches.
   * 
   * @param request - ListPolicesForPrivateAccessApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPolicesForPrivateAccessApplicationResponse
   */
  async listPolicesForPrivateAccessApplicationWithOptions(request: $_model.ListPolicesForPrivateAccessApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPolicesForPrivateAccessApplicationResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicesForPrivateAccessApplication",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPolicesForPrivateAccessApplicationResponse>(await this.callApi(params, req, runtime), new $_model.ListPolicesForPrivateAccessApplicationResponse({}));
  }

  /**
   * Queries policies for private access applications in your Alibaba Cloud account in batches.
   * 
   * @param request - ListPolicesForPrivateAccessApplicationRequest
   * @returns ListPolicesForPrivateAccessApplicationResponse
   */
  async listPolicesForPrivateAccessApplication(request: $_model.ListPolicesForPrivateAccessApplicationRequest): Promise<$_model.ListPolicesForPrivateAccessApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPolicesForPrivateAccessApplicationWithOptions(request, runtime);
  }

  /**
   * Batch query policies for private network access tags in your Alibaba Cloud account.
   * 
   * @param request - ListPolicesForPrivateAccessTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPolicesForPrivateAccessTagResponse
   */
  async listPolicesForPrivateAccessTagWithOptions(request: $_model.ListPolicesForPrivateAccessTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPolicesForPrivateAccessTagResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicesForPrivateAccessTag",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPolicesForPrivateAccessTagResponse>(await this.callApi(params, req, runtime), new $_model.ListPolicesForPrivateAccessTagResponse({}));
  }

  /**
   * Batch query policies for private network access tags in your Alibaba Cloud account.
   * 
   * @param request - ListPolicesForPrivateAccessTagRequest
   * @returns ListPolicesForPrivateAccessTagResponse
   */
  async listPolicesForPrivateAccessTag(request: $_model.ListPolicesForPrivateAccessTagRequest): Promise<$_model.ListPolicesForPrivateAccessTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPolicesForPrivateAccessTagWithOptions(request, runtime);
  }

  /**
   * Queries policies for multiple user groups within your Alibaba Cloud account.
   * 
   * @param request - ListPolicesForUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPolicesForUserGroupResponse
   */
  async listPolicesForUserGroupWithOptions(request: $_model.ListPolicesForUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPolicesForUserGroupResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicesForUserGroup",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPolicesForUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListPolicesForUserGroupResponse({}));
  }

  /**
   * Queries policies for multiple user groups within your Alibaba Cloud account.
   * 
   * @param request - ListPolicesForUserGroupRequest
   * @returns ListPolicesForUserGroupResponse
   */
  async listPolicesForUserGroup(request: $_model.ListPolicesForUserGroupRequest): Promise<$_model.ListPolicesForUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPolicesForUserGroupWithOptions(request, runtime);
  }

  /**
   * Retrieves bandwidth usage statistics for Secure Access Service Edge (SASE) points of presence (POPs).
   * 
   * @param request - ListPopTrafficStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPopTrafficStatisticsResponse
   */
  async listPopTrafficStatisticsWithOptions(request: $_model.ListPopTrafficStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPopTrafficStatisticsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPopTrafficStatistics",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPopTrafficStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.ListPopTrafficStatisticsResponse({}));
  }

  /**
   * Retrieves bandwidth usage statistics for Secure Access Service Edge (SASE) points of presence (POPs).
   * 
   * @param request - ListPopTrafficStatisticsRequest
   * @returns ListPopTrafficStatisticsResponse
   */
  async listPopTrafficStatistics(request: $_model.ListPopTrafficStatisticsRequest): Promise<$_model.ListPopTrafficStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPopTrafficStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries information about all internal-facing access applications under the current Alibaba Cloud account.
   * 
   * @param request - ListPrivateAccessApplicationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrivateAccessApplicationsResponse
   */
  async listPrivateAccessApplicationsWithOptions(request: $_model.ListPrivateAccessApplicationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPrivateAccessApplicationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessModes)) {
      query["AccessModes"] = request.accessModes;
    }

    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.applicationIds)) {
      query["ApplicationIds"] = request.applicationIds;
    }

    if (!$dara.isNull(request.connectorId)) {
      query["ConnectorId"] = request.connectorId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tagId)) {
      query["TagId"] = request.tagId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrivateAccessApplications",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPrivateAccessApplicationsResponse>(await this.callApi(params, req, runtime), new $_model.ListPrivateAccessApplicationsResponse({}));
  }

  /**
   * Queries information about all internal-facing access applications under the current Alibaba Cloud account.
   * 
   * @param request - ListPrivateAccessApplicationsRequest
   * @returns ListPrivateAccessApplicationsResponse
   */
  async listPrivateAccessApplications(request: $_model.ListPrivateAccessApplicationsRequest): Promise<$_model.ListPrivateAccessApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPrivateAccessApplicationsWithOptions(request, runtime);
  }

  /**
   * List private access applications for dynamic routes in your Alibaba Cloud account.
   * 
   * @param request - ListPrivateAccessApplicationsForDynamicRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrivateAccessApplicationsForDynamicRouteResponse
   */
  async listPrivateAccessApplicationsForDynamicRouteWithOptions(request: $_model.ListPrivateAccessApplicationsForDynamicRouteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPrivateAccessApplicationsForDynamicRouteResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrivateAccessApplicationsForDynamicRoute",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPrivateAccessApplicationsForDynamicRouteResponse>(await this.callApi(params, req, runtime), new $_model.ListPrivateAccessApplicationsForDynamicRouteResponse({}));
  }

  /**
   * List private access applications for dynamic routes in your Alibaba Cloud account.
   * 
   * @param request - ListPrivateAccessApplicationsForDynamicRouteRequest
   * @returns ListPrivateAccessApplicationsForDynamicRouteResponse
   */
  async listPrivateAccessApplicationsForDynamicRoute(request: $_model.ListPrivateAccessApplicationsForDynamicRouteRequest): Promise<$_model.ListPrivateAccessApplicationsForDynamicRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPrivateAccessApplicationsForDynamicRouteWithOptions(request, runtime);
  }

  /**
   * Queries the information about all private access policies under the current Alibaba Cloud account.
   * 
   * @param request - ListPrivateAccessPolicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrivateAccessPolicesResponse
   */
  async listPrivateAccessPolicesWithOptions(request: $_model.ListPrivateAccessPolicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPrivateAccessPolicesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrivateAccessPolices",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPrivateAccessPolicesResponse>(await this.callApi(params, req, runtime), new $_model.ListPrivateAccessPolicesResponse({}));
  }

  /**
   * Queries the information about all private access policies under the current Alibaba Cloud account.
   * 
   * @param request - ListPrivateAccessPolicesRequest
   * @returns ListPrivateAccessPolicesResponse
   */
  async listPrivateAccessPolices(request: $_model.ListPrivateAccessPolicesRequest): Promise<$_model.ListPrivateAccessPolicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPrivateAccessPolicesWithOptions(request, runtime);
  }

  /**
   * Queries the information about all internal access tags within the current Alibaba Cloud account.
   * 
   * @param request - ListPrivateAccessTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrivateAccessTagsResponse
   */
  async listPrivateAccessTagsWithOptions(request: $_model.ListPrivateAccessTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPrivateAccessTagsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrivateAccessTags",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPrivateAccessTagsResponse>(await this.callApi(params, req, runtime), new $_model.ListPrivateAccessTagsResponse({}));
  }

  /**
   * Queries the information about all internal access tags within the current Alibaba Cloud account.
   * 
   * @param request - ListPrivateAccessTagsRequest
   * @returns ListPrivateAccessTagsResponse
   */
  async listPrivateAccessTags(request: $_model.ListPrivateAccessTagsRequest): Promise<$_model.ListPrivateAccessTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPrivateAccessTagsWithOptions(request, runtime);
  }

  /**
   * Lists the tags for dynamic routes in your Alibaba Cloud account.
   * 
   * @param request - ListPrivateAccessTagsForDynamicRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrivateAccessTagsForDynamicRouteResponse
   */
  async listPrivateAccessTagsForDynamicRouteWithOptions(request: $_model.ListPrivateAccessTagsForDynamicRouteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPrivateAccessTagsForDynamicRouteResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrivateAccessTagsForDynamicRoute",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPrivateAccessTagsForDynamicRouteResponse>(await this.callApi(params, req, runtime), new $_model.ListPrivateAccessTagsForDynamicRouteResponse({}));
  }

  /**
   * Lists the tags for dynamic routes in your Alibaba Cloud account.
   * 
   * @param request - ListPrivateAccessTagsForDynamicRouteRequest
   * @returns ListPrivateAccessTagsForDynamicRouteResponse
   */
  async listPrivateAccessTagsForDynamicRoute(request: $_model.ListPrivateAccessTagsForDynamicRouteRequest): Promise<$_model.ListPrivateAccessTagsForDynamicRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPrivateAccessTagsForDynamicRouteWithOptions(request, runtime);
  }

  /**
   * Query the list of device registration policies for your Alibaba Cloud account.
   * 
   * @param request - ListRegistrationPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegistrationPoliciesResponse
   */
  async listRegistrationPoliciesWithOptions(request: $_model.ListRegistrationPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRegistrationPoliciesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRegistrationPolicies",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRegistrationPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ListRegistrationPoliciesResponse({}));
  }

  /**
   * Query the list of device registration policies for your Alibaba Cloud account.
   * 
   * @param request - ListRegistrationPoliciesRequest
   * @returns ListRegistrationPoliciesResponse
   */
  async listRegistrationPolicies(request: $_model.ListRegistrationPoliciesRequest): Promise<$_model.ListRegistrationPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRegistrationPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries the device registration policies that are associated with user groups in your Alibaba Cloud account.
   * 
   * @param request - ListRegistrationPoliciesForUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegistrationPoliciesForUserGroupResponse
   */
  async listRegistrationPoliciesForUserGroupWithOptions(request: $_model.ListRegistrationPoliciesForUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRegistrationPoliciesForUserGroupResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRegistrationPoliciesForUserGroup",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRegistrationPoliciesForUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListRegistrationPoliciesForUserGroupResponse({}));
  }

  /**
   * Queries the device registration policies that are associated with user groups in your Alibaba Cloud account.
   * 
   * @param request - ListRegistrationPoliciesForUserGroupRequest
   * @returns ListRegistrationPoliciesForUserGroupResponse
   */
  async listRegistrationPoliciesForUserGroup(request: $_model.ListRegistrationPoliciesForUserGroupRequest): Promise<$_model.ListRegistrationPoliciesForUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRegistrationPoliciesForUserGroupWithOptions(request, runtime);
  }

  /**
   * Lists the software installed on a user device.
   * 
   * @param request - ListSoftwareForUserDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSoftwareForUserDeviceResponse
   */
  async listSoftwareForUserDeviceWithOptions(request: $_model.ListSoftwareForUserDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSoftwareForUserDeviceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSoftwareForUserDevice",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSoftwareForUserDeviceResponse>(await this.callApi(params, req, runtime), new $_model.ListSoftwareForUserDeviceResponse({}));
  }

  /**
   * Lists the software installed on a user device.
   * 
   * @param request - ListSoftwareForUserDeviceRequest
   * @returns ListSoftwareForUserDeviceResponse
   */
  async listSoftwareForUserDevice(request: $_model.ListSoftwareForUserDeviceRequest): Promise<$_model.ListSoftwareForUserDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSoftwareForUserDeviceWithOptions(request, runtime);
  }

  /**
   * Batch query tags for private network access applications under the current Alibaba Cloud account.
   * 
   * @param request - ListTagsForPrivateAccessApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagsForPrivateAccessApplicationResponse
   */
  async listTagsForPrivateAccessApplicationWithOptions(request: $_model.ListTagsForPrivateAccessApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagsForPrivateAccessApplicationResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagsForPrivateAccessApplication",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagsForPrivateAccessApplicationResponse>(await this.callApi(params, req, runtime), new $_model.ListTagsForPrivateAccessApplicationResponse({}));
  }

  /**
   * Batch query tags for private network access applications under the current Alibaba Cloud account.
   * 
   * @param request - ListTagsForPrivateAccessApplicationRequest
   * @returns ListTagsForPrivateAccessApplicationResponse
   */
  async listTagsForPrivateAccessApplication(request: $_model.ListTagsForPrivateAccessApplicationRequest): Promise<$_model.ListTagsForPrivateAccessApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagsForPrivateAccessApplicationWithOptions(request, runtime);
  }

  /**
   * Queries the tags of internal network access policies in your Alibaba Cloud account.
   * 
   * @param request - ListTagsForPrivateAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagsForPrivateAccessPolicyResponse
   */
  async listTagsForPrivateAccessPolicyWithOptions(request: $_model.ListTagsForPrivateAccessPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagsForPrivateAccessPolicyResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagsForPrivateAccessPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagsForPrivateAccessPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ListTagsForPrivateAccessPolicyResponse({}));
  }

  /**
   * Queries the tags of internal network access policies in your Alibaba Cloud account.
   * 
   * @param request - ListTagsForPrivateAccessPolicyRequest
   * @returns ListTagsForPrivateAccessPolicyResponse
   */
  async listTagsForPrivateAccessPolicy(request: $_model.ListTagsForPrivateAccessPolicyRequest): Promise<$_model.ListTagsForPrivateAccessPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagsForPrivateAccessPolicyWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of uninstallation requests for your Alibaba Cloud account.
   * 
   * @param request - ListUninstallApplicationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUninstallApplicationsResponse
   */
  async listUninstallApplicationsWithOptions(request: $_model.ListUninstallApplicationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUninstallApplicationsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUninstallApplications",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUninstallApplicationsResponse>(await this.callApi(params, req, runtime), new $_model.ListUninstallApplicationsResponse({}));
  }

  /**
   * Retrieves a list of uninstallation requests for your Alibaba Cloud account.
   * 
   * @param request - ListUninstallApplicationsRequest
   * @returns ListUninstallApplicationsResponse
   */
  async listUninstallApplications(request: $_model.ListUninstallApplicationsRequest): Promise<$_model.ListUninstallApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUninstallApplicationsWithOptions(request, runtime);
  }

  /**
   * Queries the application permissions of the logged-in user in the current Alibaba Cloud account.
   * 
   * @param request - ListUserApplicationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserApplicationsResponse
   */
  async listUserApplicationsWithOptions(request: $_model.ListUserApplicationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserApplicationsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserApplications",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserApplicationsResponse>(await this.callApi(params, req, runtime), new $_model.ListUserApplicationsResponse({}));
  }

  /**
   * Queries the application permissions of the logged-in user in the current Alibaba Cloud account.
   * 
   * @param request - ListUserApplicationsRequest
   * @returns ListUserApplicationsResponse
   */
  async listUserApplications(request: $_model.ListUserApplicationsRequest): Promise<$_model.ListUserApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserApplicationsWithOptions(request, runtime);
  }

  /**
   * Queries the list of user endpoint devices under the current Alibaba Cloud account.
   * 
   * @param request - ListUserDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserDevicesResponse
   */
  async listUserDevicesWithOptions(request: $_model.ListUserDevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appStatuses)) {
      query["AppStatuses"] = request.appStatuses;
    }

    if (!$dara.isNull(request.appVersions)) {
      query["AppVersions"] = request.appVersions;
    }

    if (!$dara.isNull(request.autoLoginStatuses)) {
      query["AutoLoginStatuses"] = request.autoLoginStatuses;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.department)) {
      query["Department"] = request.department;
    }

    if (!$dara.isNull(request.deviceBelong)) {
      query["DeviceBelong"] = request.deviceBelong;
    }

    if (!$dara.isNull(request.deviceGroupId)) {
      query["DeviceGroupId"] = request.deviceGroupId;
    }

    if (!$dara.isNull(request.deviceStatuses)) {
      query["DeviceStatuses"] = request.deviceStatuses;
    }

    if (!$dara.isNull(request.deviceTags)) {
      query["DeviceTags"] = request.deviceTags;
    }

    if (!$dara.isNull(request.deviceTypes)) {
      query["DeviceTypes"] = request.deviceTypes;
    }

    if (!$dara.isNull(request.dlpStatuses)) {
      query["DlpStatuses"] = request.dlpStatuses;
    }

    if (!$dara.isNull(request.hostname)) {
      query["Hostname"] = request.hostname;
    }

    if (!$dara.isNull(request.iaStatuses)) {
      query["IaStatuses"] = request.iaStatuses;
    }

    if (!$dara.isNull(request.innerIp)) {
      query["InnerIp"] = request.innerIp;
    }

    if (!$dara.isNull(request.mac)) {
      query["Mac"] = request.mac;
    }

    if (!$dara.isNull(request.nacStatuses)) {
      query["NacStatuses"] = request.nacStatuses;
    }

    if (!$dara.isNull(request.paStatuses)) {
      query["PaStatuses"] = request.paStatuses;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.saseUserId)) {
      query["SaseUserId"] = request.saseUserId;
    }

    if (!$dara.isNull(request.sharingStatus)) {
      query["SharingStatus"] = request.sharingStatus;
    }

    if (!$dara.isNull(request.snBios)) {
      query["SnBios"] = request.snBios;
    }

    if (!$dara.isNull(request.snSystem)) {
      query["SnSystem"] = request.snSystem;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    if (!$dara.isNull(request.workshop)) {
      query["Workshop"] = request.workshop;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserDevices",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserDevicesResponse>(await this.callApi(params, req, runtime), new $_model.ListUserDevicesResponse({}));
  }

  /**
   * Queries the list of user endpoint devices under the current Alibaba Cloud account.
   * 
   * @param request - ListUserDevicesRequest
   * @returns ListUserDevicesResponse
   */
  async listUserDevices(request: $_model.ListUserDevicesRequest): Promise<$_model.ListUserDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserDevicesWithOptions(request, runtime);
  }

  /**
   * Retrieves information about all user groups in your Alibaba Cloud account.
   * 
   * @param request - ListUserGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserGroupsResponse
   */
  async listUserGroupsWithOptions(request: $_model.ListUserGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserGroupsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserGroups",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListUserGroupsResponse({}));
  }

  /**
   * Retrieves information about all user groups in your Alibaba Cloud account.
   * 
   * @param request - ListUserGroupsRequest
   * @returns ListUserGroupsResponse
   */
  async listUserGroups(request: $_model.ListUserGroupsRequest): Promise<$_model.ListUserGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserGroupsWithOptions(request, runtime);
  }

  /**
   * Retrieve user groups for private network access policies in batches under your Alibaba Cloud account.
   * 
   * @param request - ListUserGroupsForPrivateAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserGroupsForPrivateAccessPolicyResponse
   */
  async listUserGroupsForPrivateAccessPolicyWithOptions(request: $_model.ListUserGroupsForPrivateAccessPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserGroupsForPrivateAccessPolicyResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserGroupsForPrivateAccessPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserGroupsForPrivateAccessPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ListUserGroupsForPrivateAccessPolicyResponse({}));
  }

  /**
   * Retrieve user groups for private network access policies in batches under your Alibaba Cloud account.
   * 
   * @param request - ListUserGroupsForPrivateAccessPolicyRequest
   * @returns ListUserGroupsForPrivateAccessPolicyResponse
   */
  async listUserGroupsForPrivateAccessPolicy(request: $_model.ListUserGroupsForPrivateAccessPolicyRequest): Promise<$_model.ListUserGroupsForPrivateAccessPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserGroupsForPrivateAccessPolicyWithOptions(request, runtime);
  }

  /**
   * Lists the user groups associated with device registration policies in your Alibaba Cloud account.
   * 
   * @param request - ListUserGroupsForRegistrationPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserGroupsForRegistrationPolicyResponse
   */
  async listUserGroupsForRegistrationPolicyWithOptions(request: $_model.ListUserGroupsForRegistrationPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserGroupsForRegistrationPolicyResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserGroupsForRegistrationPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserGroupsForRegistrationPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ListUserGroupsForRegistrationPolicyResponse({}));
  }

  /**
   * Lists the user groups associated with device registration policies in your Alibaba Cloud account.
   * 
   * @param request - ListUserGroupsForRegistrationPolicyRequest
   * @returns ListUserGroupsForRegistrationPolicyResponse
   */
  async listUserGroupsForRegistrationPolicy(request: $_model.ListUserGroupsForRegistrationPolicyRequest): Promise<$_model.ListUserGroupsForRegistrationPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserGroupsForRegistrationPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the list of user zero trust policies.
   * 
   * @param request - ListUserPrivateAccessPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserPrivateAccessPoliciesResponse
   */
  async listUserPrivateAccessPoliciesWithOptions(request: $_model.ListUserPrivateAccessPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserPrivateAccessPoliciesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserPrivateAccessPolicies",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserPrivateAccessPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ListUserPrivateAccessPoliciesResponse({}));
  }

  /**
   * Queries the list of user zero trust policies.
   * 
   * @param request - ListUserPrivateAccessPoliciesRequest
   * @returns ListUserPrivateAccessPoliciesResponse
   */
  async listUserPrivateAccessPolicies(request: $_model.ListUserPrivateAccessPoliciesRequest): Promise<$_model.ListUserPrivateAccessPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserPrivateAccessPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries the users for the current Alibaba Cloud account.
   * 
   * @param request - ListUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
   */
  async listUsersWithOptions(request: $_model.ListUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsers",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUsersResponse>(await this.callApi(params, req, runtime), new $_model.ListUsersResponse({}));
  }

  /**
   * Queries the users for the current Alibaba Cloud account.
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: $_model.ListUsersRequest): Promise<$_model.ListUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  /**
   * Look up an existing watermark information mapping to retrieve the corresponding string-formatted watermark information from numeric-formatted watermark data.
   * 
   * @param request - LookupWmInfoMappingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LookupWmInfoMappingResponse
   */
  async lookupWmInfoMappingWithOptions(request: $_model.LookupWmInfoMappingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LookupWmInfoMappingResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LookupWmInfoMapping",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LookupWmInfoMappingResponse>(await this.callApi(params, req, runtime), new $_model.LookupWmInfoMappingResponse({}));
  }

  /**
   * Look up an existing watermark information mapping to retrieve the corresponding string-formatted watermark information from numeric-formatted watermark data.
   * 
   * @param request - LookupWmInfoMappingRequest
   * @returns LookupWmInfoMappingResponse
   */
  async lookupWmInfoMapping(request: $_model.LookupWmInfoMappingRequest): Promise<$_model.LookupWmInfoMappingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.lookupWmInfoMappingWithOptions(request, runtime);
  }

  /**
   * Modifies an enterprise acceleration policy.
   * 
   * @param request - ModifyEnterpriseAcceleratePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyEnterpriseAcceleratePolicyResponse
   */
  async modifyEnterpriseAcceleratePolicyWithOptions(request: $_model.ModifyEnterpriseAcceleratePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyEnterpriseAcceleratePolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accelerationType)) {
      body["AccelerationType"] = request.accelerationType;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.eapId)) {
      body["EapId"] = request.eapId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.onTls)) {
      body["OnTls"] = request.onTls;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.showInClient)) {
      body["ShowInClient"] = request.showInClient;
    }

    if (!$dara.isNull(request.upstreamHost)) {
      body["UpstreamHost"] = request.upstreamHost;
    }

    if (!$dara.isNull(request.upstreamPort)) {
      body["UpstreamPort"] = request.upstreamPort;
    }

    if (!$dara.isNull(request.upstreamType)) {
      body["UpstreamType"] = request.upstreamType;
    }

    if (!$dara.isNull(request.userAttributeGroup)) {
      body["UserAttributeGroup"] = request.userAttributeGroup;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyEnterpriseAcceleratePolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyEnterpriseAcceleratePolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyEnterpriseAcceleratePolicyResponse({}));
  }

  /**
   * Modifies an enterprise acceleration policy.
   * 
   * @param request - ModifyEnterpriseAcceleratePolicyRequest
   * @returns ModifyEnterpriseAcceleratePolicyResponse
   */
  async modifyEnterpriseAcceleratePolicy(request: $_model.ModifyEnterpriseAcceleratePolicyRequest): Promise<$_model.ModifyEnterpriseAcceleratePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyEnterpriseAcceleratePolicyWithOptions(request, runtime);
  }

  /**
   * Revokes a user device session.
   * 
   * @param request - RevokeUserDeviceSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeUserDeviceSessionResponse
   */
  async revokeUserDeviceSessionWithOptions(request: $_model.RevokeUserDeviceSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeUserDeviceSessionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.devTag)) {
      body["DevTag"] = request.devTag;
    }

    if (!$dara.isNull(request.saseUserId)) {
      body["SaseUserId"] = request.saseUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeUserDeviceSession",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeUserDeviceSessionResponse>(await this.callApi(params, req, runtime), new $_model.RevokeUserDeviceSessionResponse({}));
  }

  /**
   * Revokes a user device session.
   * 
   * @param request - RevokeUserDeviceSessionRequest
   * @returns RevokeUserDeviceSessionResponse
   */
  async revokeUserDeviceSession(request: $_model.RevokeUserDeviceSessionRequest): Promise<$_model.RevokeUserDeviceSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeUserDeviceSessionWithOptions(request, runtime);
  }

  /**
   * Revokes a user logon session.
   * 
   * @deprecated OpenAPI RevokeUserSession is deprecated
   * 
   * @param request - RevokeUserSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeUserSessionResponse
   */
  async revokeUserSessionWithOptions(request: $_model.RevokeUserSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeUserSessionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.externalIds)) {
      query["ExternalIds"] = request.externalIds;
    }

    if (!$dara.isNull(request.idpId)) {
      query["IdpId"] = request.idpId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeUserSession",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeUserSessionResponse>(await this.callApi(params, req, runtime), new $_model.RevokeUserSessionResponse({}));
  }

  /**
   * Revokes a user logon session.
   * 
   * @deprecated OpenAPI RevokeUserSession is deprecated
   * 
   * @param request - RevokeUserSessionRequest
   * @returns RevokeUserSessionResponse
   */
  // Deprecated
  async revokeUserSession(request: $_model.RevokeUserSessionRequest): Promise<$_model.RevokeUserSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeUserSessionWithOptions(request, runtime);
  }

  /**
   * Updates an approval flow under the current Alibaba Cloud account.
   * 
   * @param tmpReq - UpdateApprovalProcessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApprovalProcessResponse
   */
  async updateApprovalProcessWithOptions(tmpReq: $_model.UpdateApprovalProcessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApprovalProcessResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateApprovalProcessShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.matchSchemaConfigs)) {
      request.matchSchemaConfigsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.matchSchemaConfigs, "MatchSchemaConfigs", "json");
    }

    if (!$dara.isNull(tmpReq.matchSchemas)) {
      request.matchSchemasShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.matchSchemas, "MatchSchemas", "json");
    }

    let query = { };
    if (!$dara.isNull(request.approvalType)) {
      query["ApprovalType"] = request.approvalType;
    }

    if (!$dara.isNull(request.eventLabel)) {
      query["EventLabel"] = request.eventLabel;
    }

    if (!$dara.isNull(request.externalConfig)) {
      query["ExternalConfig"] = request.externalConfig;
    }

    if (!$dara.isNull(request.matchSchemaConfigsShrink)) {
      query["MatchSchemaConfigs"] = request.matchSchemaConfigsShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.matchSchemasShrink)) {
      body["MatchSchemas"] = request.matchSchemasShrink;
    }

    if (!$dara.isNull(request.processId)) {
      body["ProcessId"] = request.processId;
    }

    if (!$dara.isNull(request.processName)) {
      body["ProcessName"] = request.processName;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.processNodes)) {
      bodyFlat["ProcessNodes"] = request.processNodes;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApprovalProcess",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApprovalProcessResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApprovalProcessResponse({}));
  }

  /**
   * Updates an approval flow under the current Alibaba Cloud account.
   * 
   * @param request - UpdateApprovalProcessRequest
   * @returns UpdateApprovalProcessResponse
   */
  async updateApprovalProcess(request: $_model.UpdateApprovalProcessRequest): Promise<$_model.UpdateApprovalProcessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateApprovalProcessWithOptions(request, runtime);
  }

  /**
   * Updates the status of an approval instance under your Alibaba Cloud account.
   * 
   * @param request - UpdateApprovalStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApprovalStatusResponse
   */
  async updateApprovalStatusWithOptions(request: $_model.UpdateApprovalStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApprovalStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.approvalId)) {
      query["ApprovalId"] = request.approvalId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApprovalStatus",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApprovalStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApprovalStatusResponse({}));
  }

  /**
   * Updates the status of an approval instance under your Alibaba Cloud account.
   * 
   * @param request - UpdateApprovalStatusRequest
   * @returns UpdateApprovalStatusResponse
   */
  async updateApprovalStatus(request: $_model.UpdateApprovalStatusRequest): Promise<$_model.UpdateApprovalStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateApprovalStatusWithOptions(request, runtime);
  }

  /**
   * Update the auto-start and anti-uninstall policy for your Alibaba Cloud account.
   * 
   * @param tmpReq - UpdateBootAndAntiUninstallPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBootAndAntiUninstallPolicyResponse
   */
  async updateBootAndAntiUninstallPolicyWithOptions(tmpReq: $_model.UpdateBootAndAntiUninstallPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateBootAndAntiUninstallPolicyResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateBootAndAntiUninstallPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.blockContent)) {
      request.blockContentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.blockContent, "BlockContent", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allowReport)) {
      body["AllowReport"] = request.allowReport;
    }

    if (!$dara.isNull(request.blockContentShrink)) {
      body["BlockContent"] = request.blockContentShrink;
    }

    if (!$dara.isNull(request.isAntiUninstall)) {
      body["IsAntiUninstall"] = request.isAntiUninstall;
    }

    if (!$dara.isNull(request.isBoot)) {
      body["IsBoot"] = request.isBoot;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userGroupIds)) {
      bodyFlat["UserGroupIds"] = request.userGroupIds;
    }

    if (!$dara.isNull(request.whitelistUsers)) {
      bodyFlat["WhitelistUsers"] = request.whitelistUsers;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBootAndAntiUninstallPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateBootAndAntiUninstallPolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateBootAndAntiUninstallPolicyResponse({}));
  }

  /**
   * Update the auto-start and anti-uninstall policy for your Alibaba Cloud account.
   * 
   * @param request - UpdateBootAndAntiUninstallPolicyRequest
   * @returns UpdateBootAndAntiUninstallPolicyResponse
   */
  async updateBootAndAntiUninstallPolicy(request: $_model.UpdateBootAndAntiUninstallPolicyRequest): Promise<$_model.UpdateBootAndAntiUninstallPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateBootAndAntiUninstallPolicyWithOptions(request, runtime);
  }

  /**
   * Update user information for a custom identity provider in your Alibaba Cloud account.
   * 
   * @param request - UpdateClientUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateClientUserResponse
   */
  async updateClientUserWithOptions(request: $_model.UpdateClientUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateClientUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.mobileNumber)) {
      query["MobileNumber"] = request.mobileNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateClientUser",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateClientUserResponse>(await this.callApi(params, req, runtime), new $_model.UpdateClientUserResponse({}));
  }

  /**
   * Update user information for a custom identity provider in your Alibaba Cloud account.
   * 
   * @param request - UpdateClientUserRequest
   * @returns UpdateClientUserResponse
   */
  async updateClientUser(request: $_model.UpdateClientUserRequest): Promise<$_model.UpdateClientUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateClientUserWithOptions(request, runtime);
  }

  /**
   * Sets the password for a specified user that belongs to a custom identity source.
   * 
   * @param request - UpdateClientUserPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateClientUserPasswordResponse
   */
  async updateClientUserPasswordWithOptions(request: $_model.UpdateClientUserPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateClientUserPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateClientUserPassword",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateClientUserPasswordResponse>(await this.callApi(params, req, runtime), new $_model.UpdateClientUserPasswordResponse({}));
  }

  /**
   * Sets the password for a specified user that belongs to a custom identity source.
   * 
   * @param request - UpdateClientUserPasswordRequest
   * @returns UpdateClientUserPasswordResponse
   */
  async updateClientUserPassword(request: $_model.UpdateClientUserPasswordRequest): Promise<$_model.UpdateClientUserPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateClientUserPasswordWithOptions(request, runtime);
  }

  /**
   * Sets the status of a specified user from a custom identity source for your Alibaba Cloud account.
   * 
   * @param request - UpdateClientUserStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateClientUserStatusResponse
   */
  async updateClientUserStatusWithOptions(request: $_model.UpdateClientUserStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateClientUserStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateClientUserStatus",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateClientUserStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateClientUserStatusResponse({}));
  }

  /**
   * Sets the status of a specified user from a custom identity source for your Alibaba Cloud account.
   * 
   * @param request - UpdateClientUserStatusRequest
   * @returns UpdateClientUserStatusResponse
   */
  async updateClientUserStatus(request: $_model.UpdateClientUserStatusRequest): Promise<$_model.UpdateClientUserStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateClientUserStatusWithOptions(request, runtime);
  }

  /**
   * Updates the name of a domain name list.
   * 
   * @param request - UpdateDomainMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDomainMetaResponse
   */
  async updateDomainMetaWithOptions(request: $_model.UpdateDomainMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDomainMetaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listId)) {
      body["ListId"] = request.listId;
    }

    if (!$dara.isNull(request.listType)) {
      body["ListType"] = request.listType;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDomainMeta",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDomainMetaResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDomainMetaResponse({}));
  }

  /**
   * Updates the name of a domain name list.
   * 
   * @param request - UpdateDomainMetaRequest
   * @returns UpdateDomainMetaResponse
   */
  async updateDomainMeta(request: $_model.UpdateDomainMetaRequest): Promise<$_model.UpdateDomainMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDomainMetaWithOptions(request, runtime);
  }

  /**
   * Modifies a dynamic route in your Alibaba Cloud account.
   * 
   * @param request - UpdateDynamicRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDynamicRouteResponse
   */
  async updateDynamicRouteWithOptions(request: $_model.UpdateDynamicRouteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDynamicRouteResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationIds)) {
      bodyFlat["ApplicationIds"] = request.applicationIds;
    }

    if (!$dara.isNull(request.applicationType)) {
      body["ApplicationType"] = request.applicationType;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.dynamicRouteId)) {
      body["DynamicRouteId"] = request.dynamicRouteId;
    }

    if (!$dara.isNull(request.dynamicRouteType)) {
      body["DynamicRouteType"] = request.dynamicRouteType;
    }

    if (!$dara.isNull(request.modifyType)) {
      body["ModifyType"] = request.modifyType;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.nextHop)) {
      body["NextHop"] = request.nextHop;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.regionIds)) {
      bodyFlat["RegionIds"] = request.regionIds;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.tagIds)) {
      bodyFlat["TagIds"] = request.tagIds;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDynamicRoute",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDynamicRouteResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDynamicRouteResponse({}));
  }

  /**
   * Modifies a dynamic route in your Alibaba Cloud account.
   * 
   * @param request - UpdateDynamicRouteRequest
   * @returns UpdateDynamicRouteResponse
   */
  async updateDynamicRoute(request: $_model.UpdateDynamicRouteRequest): Promise<$_model.UpdateDynamicRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDynamicRouteWithOptions(request, runtime);
  }

  /**
   * Update the status of device registration applications that exceed your Alibaba Cloud account\\"s quota.
   * 
   * @param request - UpdateExcessiveDeviceRegistrationApplicationsStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateExcessiveDeviceRegistrationApplicationsStatusResponse
   */
  async updateExcessiveDeviceRegistrationApplicationsStatusWithOptions(request: $_model.UpdateExcessiveDeviceRegistrationApplicationsStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateExcessiveDeviceRegistrationApplicationsStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationIds)) {
      bodyFlat["ApplicationIds"] = request.applicationIds;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateExcessiveDeviceRegistrationApplicationsStatus",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateExcessiveDeviceRegistrationApplicationsStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateExcessiveDeviceRegistrationApplicationsStatusResponse({}));
  }

  /**
   * Update the status of device registration applications that exceed your Alibaba Cloud account\\"s quota.
   * 
   * @param request - UpdateExcessiveDeviceRegistrationApplicationsStatusRequest
   * @returns UpdateExcessiveDeviceRegistrationApplicationsStatusResponse
   */
  async updateExcessiveDeviceRegistrationApplicationsStatus(request: $_model.UpdateExcessiveDeviceRegistrationApplicationsStatusRequest): Promise<$_model.UpdateExcessiveDeviceRegistrationApplicationsStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateExcessiveDeviceRegistrationApplicationsStatusWithOptions(request, runtime);
  }

  /**
   * Deletes a department from a custom identity provider for the current Alibaba Cloud account.
   * 
   * @param request - UpdateIdpDepartmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIdpDepartmentResponse
   */
  async updateIdpDepartmentWithOptions(request: $_model.UpdateIdpDepartmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIdpDepartmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!$dara.isNull(request.departmentName)) {
      query["DepartmentName"] = request.departmentName;
    }

    if (!$dara.isNull(request.idpConfigId)) {
      query["IdpConfigId"] = request.idpConfigId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIdpDepartment",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIdpDepartmentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateIdpDepartmentResponse({}));
  }

  /**
   * Deletes a department from a custom identity provider for the current Alibaba Cloud account.
   * 
   * @param request - UpdateIdpDepartmentRequest
   * @returns UpdateIdpDepartmentResponse
   */
  async updateIdpDepartment(request: $_model.UpdateIdpDepartmentRequest): Promise<$_model.UpdateIdpDepartmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIdpDepartmentWithOptions(request, runtime);
  }

  /**
   * Updates the phone number whitelist for visitor access SMS logon.
   * 
   * @remarks
   * - A maximum of 1024 phone numbers are supported.
   * - Duplicate phone numbers are not allowed. Phone numbers in invalid formats are rejected. Only Chinese mainland phone numbers are supported.
   * - You must update all phone numbers at once. Incremental updates are not supported.
   * 
   * @param request - UpdateNacPortalSmsPhoneWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNacPortalSmsPhoneWhitelistResponse
   */
  async updateNacPortalSmsPhoneWhitelistWithOptions(request: $_model.UpdateNacPortalSmsPhoneWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNacPortalSmsPhoneWhitelistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.phones)) {
      query["Phones"] = request.phones;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNacPortalSmsPhoneWhitelist",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNacPortalSmsPhoneWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNacPortalSmsPhoneWhitelistResponse({}));
  }

  /**
   * Updates the phone number whitelist for visitor access SMS logon.
   * 
   * @remarks
   * - A maximum of 1024 phone numbers are supported.
   * - Duplicate phone numbers are not allowed. Phone numbers in invalid formats are rejected. Only Chinese mainland phone numbers are supported.
   * - You must update all phone numbers at once. Incremental updates are not supported.
   * 
   * @param request - UpdateNacPortalSmsPhoneWhitelistRequest
   * @returns UpdateNacPortalSmsPhoneWhitelistResponse
   */
  async updateNacPortalSmsPhoneWhitelist(request: $_model.UpdateNacPortalSmsPhoneWhitelistRequest): Promise<$_model.UpdateNacPortalSmsPhoneWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNacPortalSmsPhoneWhitelistWithOptions(request, runtime);
  }

  /**
   * Updates the network access certificate status for users in your Alibaba Cloud account.
   * 
   * @param request - UpdateNacUserCertStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNacUserCertStatusResponse
   */
  async updateNacUserCertStatusWithOptions(request: $_model.UpdateNacUserCertStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNacUserCertStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.idList)) {
      bodyFlat["IdList"] = request.idList;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNacUserCertStatus",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNacUserCertStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNacUserCertStatusResponse({}));
  }

  /**
   * Updates the network access certificate status for users in your Alibaba Cloud account.
   * 
   * @param request - UpdateNacUserCertStatusRequest
   * @returns UpdateNacUserCertStatusResponse
   */
  async updateNacUserCertStatus(request: $_model.UpdateNacUserCertStatusRequest): Promise<$_model.UpdateNacUserCertStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNacUserCertStatusWithOptions(request, runtime);
  }

  /**
   * Modifies an internal-facing access application under the current Alibaba Cloud account.
   * 
   * @param tmpReq - UpdatePrivateAccessApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePrivateAccessApplicationResponse
   */
  async updatePrivateAccessApplicationWithOptions(tmpReq: $_model.UpdatePrivateAccessApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePrivateAccessApplicationResponse> {
    tmpReq.validate();
    let request = new $_model.UpdatePrivateAccessApplicationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.l7Config)) {
      request.l7ConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.l7Config, "L7Config", "json");
    }

    if (!$dara.isNull(tmpReq.unauthorizedAccessConfig)) {
      request.unauthorizedAccessConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.unauthorizedAccessConfig, "UnauthorizedAccessConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addressGroups)) {
      bodyFlat["AddressGroups"] = request.addressGroups;
    }

    if (!$dara.isNull(request.addresses)) {
      bodyFlat["Addresses"] = request.addresses;
    }

    if (!$dara.isNull(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.configMode)) {
      body["ConfigMode"] = request.configMode;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.l7ConfigShrink)) {
      body["L7Config"] = request.l7ConfigShrink;
    }

    if (!$dara.isNull(request.l7ProxyDomainAutomaticPrefix)) {
      body["L7ProxyDomainAutomaticPrefix"] = request.l7ProxyDomainAutomaticPrefix;
    }

    if (!$dara.isNull(request.l7ProxyDomainCustom)) {
      body["L7ProxyDomainCustom"] = request.l7ProxyDomainCustom;
    }

    if (!$dara.isNull(request.l7ProxyDomainPrivate)) {
      body["L7ProxyDomainPrivate"] = request.l7ProxyDomainPrivate;
    }

    if (!$dara.isNull(request.modifyType)) {
      body["ModifyType"] = request.modifyType;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.portRanges)) {
      bodyFlat["PortRanges"] = request.portRanges;
    }

    if (!$dara.isNull(request.protocol)) {
      body["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.tagIds)) {
      bodyFlat["TagIds"] = request.tagIds;
    }

    if (!$dara.isNull(request.unauthorizedAccessConfigShrink)) {
      body["UnauthorizedAccessConfig"] = request.unauthorizedAccessConfigShrink;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePrivateAccessApplication",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePrivateAccessApplicationResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePrivateAccessApplicationResponse({}));
  }

  /**
   * Modifies an internal-facing access application under the current Alibaba Cloud account.
   * 
   * @param request - UpdatePrivateAccessApplicationRequest
   * @returns UpdatePrivateAccessApplicationResponse
   */
  async updatePrivateAccessApplication(request: $_model.UpdatePrivateAccessApplicationRequest): Promise<$_model.UpdatePrivateAccessApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePrivateAccessApplicationWithOptions(request, runtime);
  }

  /**
   * Update an internal network access policy for your Alibaba Cloud account.
   * 
   * @param request - UpdatePrivateAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePrivateAccessPolicyResponse
   */
  async updatePrivateAccessPolicyWithOptions(request: $_model.UpdatePrivateAccessPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePrivateAccessPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationIds)) {
      bodyFlat["ApplicationIds"] = request.applicationIds;
    }

    if (!$dara.isNull(request.applicationType)) {
      body["ApplicationType"] = request.applicationType;
    }

    if (!$dara.isNull(request.customUserAttributes)) {
      bodyFlat["CustomUserAttributes"] = request.customUserAttributes;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.deviceAttributeAction)) {
      body["DeviceAttributeAction"] = request.deviceAttributeAction;
    }

    if (!$dara.isNull(request.deviceAttributeId)) {
      body["DeviceAttributeId"] = request.deviceAttributeId;
    }

    if (!$dara.isNull(request.modifyType)) {
      body["ModifyType"] = request.modifyType;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.policyAction)) {
      body["PolicyAction"] = request.policyAction;
    }

    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.tagIds)) {
      bodyFlat["TagIds"] = request.tagIds;
    }

    if (!$dara.isNull(request.triggerTemplateId)) {
      body["TriggerTemplateId"] = request.triggerTemplateId;
    }

    if (!$dara.isNull(request.trustedProcessGroupIds)) {
      bodyFlat["TrustedProcessGroupIds"] = request.trustedProcessGroupIds;
    }

    if (!$dara.isNull(request.trustedProcessStatus)) {
      body["TrustedProcessStatus"] = request.trustedProcessStatus;
    }

    if (!$dara.isNull(request.trustedSoftwareIds)) {
      bodyFlat["TrustedSoftwareIds"] = request.trustedSoftwareIds;
    }

    if (!$dara.isNull(request.userGroupIds)) {
      bodyFlat["UserGroupIds"] = request.userGroupIds;
    }

    if (!$dara.isNull(request.userGroupMode)) {
      body["UserGroupMode"] = request.userGroupMode;
    }

    if (!$dara.isNull(request.validFrom)) {
      body["ValidFrom"] = request.validFrom;
    }

    if (!$dara.isNull(request.validTimeStatus)) {
      body["ValidTimeStatus"] = request.validTimeStatus;
    }

    if (!$dara.isNull(request.validUntil)) {
      body["ValidUntil"] = request.validUntil;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePrivateAccessPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePrivateAccessPolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePrivateAccessPolicyResponse({}));
  }

  /**
   * Update an internal network access policy for your Alibaba Cloud account.
   * 
   * @param request - UpdatePrivateAccessPolicyRequest
   * @returns UpdatePrivateAccessPolicyResponse
   */
  async updatePrivateAccessPolicy(request: $_model.UpdatePrivateAccessPolicyRequest): Promise<$_model.UpdatePrivateAccessPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePrivateAccessPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies a device registration policy for your Alibaba Cloud account.
   * 
   * @param tmpReq - UpdateRegistrationPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRegistrationPolicyResponse
   */
  async updateRegistrationPolicyWithOptions(tmpReq: $_model.UpdateRegistrationPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRegistrationPolicyResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateRegistrationPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.companyLimitCount)) {
      request.companyLimitCountShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.companyLimitCount, "CompanyLimitCount", "json");
    }

    if (!$dara.isNull(tmpReq.personalLimitCount)) {
      request.personalLimitCountShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.personalLimitCount, "PersonalLimitCount", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.companyLimitCountShrink)) {
      body["CompanyLimitCount"] = request.companyLimitCountShrink;
    }

    if (!$dara.isNull(request.companyLimitType)) {
      body["CompanyLimitType"] = request.companyLimitType;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.matchMode)) {
      body["MatchMode"] = request.matchMode;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.personalLimitCountShrink)) {
      body["PersonalLimitCount"] = request.personalLimitCountShrink;
    }

    if (!$dara.isNull(request.personalLimitType)) {
      body["PersonalLimitType"] = request.personalLimitType;
    }

    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userGroupIds)) {
      bodyFlat["UserGroupIds"] = request.userGroupIds;
    }

    if (!$dara.isNull(request.whitelist)) {
      bodyFlat["Whitelist"] = request.whitelist;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRegistrationPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRegistrationPolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRegistrationPolicyResponse({}));
  }

  /**
   * Modifies a device registration policy for your Alibaba Cloud account.
   * 
   * @param request - UpdateRegistrationPolicyRequest
   * @returns UpdateRegistrationPolicyResponse
   */
  async updateRegistrationPolicy(request: $_model.UpdateRegistrationPolicyRequest): Promise<$_model.UpdateRegistrationPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRegistrationPolicyWithOptions(request, runtime);
  }

  /**
   * Batch updates the status of uninstall requests for your Alibaba Cloud account.
   * 
   * @param request - UpdateUninstallApplicationsStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUninstallApplicationsStatusResponse
   */
  async updateUninstallApplicationsStatusWithOptions(request: $_model.UpdateUninstallApplicationsStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUninstallApplicationsStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationIds)) {
      bodyFlat["ApplicationIds"] = request.applicationIds;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUninstallApplicationsStatus",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUninstallApplicationsStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUninstallApplicationsStatusResponse({}));
  }

  /**
   * Batch updates the status of uninstall requests for your Alibaba Cloud account.
   * 
   * @param request - UpdateUninstallApplicationsStatusRequest
   * @returns UpdateUninstallApplicationsStatusResponse
   */
  async updateUninstallApplicationsStatus(request: $_model.UpdateUninstallApplicationsStatusRequest): Promise<$_model.UpdateUninstallApplicationsStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUninstallApplicationsStatusWithOptions(request, runtime);
  }

  /**
   * Updates the sharing status of devices for multiple enterprise users.
   * 
   * @param request - UpdateUserDevicesSharingStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserDevicesSharingStatusResponse
   */
  async updateUserDevicesSharingStatusWithOptions(request: $_model.UpdateUserDevicesSharingStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserDevicesSharingStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceTags)) {
      bodyFlat["DeviceTags"] = request.deviceTags;
    }

    if (!$dara.isNull(request.sharingStatus)) {
      body["SharingStatus"] = request.sharingStatus;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserDevicesSharingStatus",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserDevicesSharingStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserDevicesSharingStatusResponse({}));
  }

  /**
   * Updates the sharing status of devices for multiple enterprise users.
   * 
   * @param request - UpdateUserDevicesSharingStatusRequest
   * @returns UpdateUserDevicesSharingStatusResponse
   */
  async updateUserDevicesSharingStatus(request: $_model.UpdateUserDevicesSharingStatusRequest): Promise<$_model.UpdateUserDevicesSharingStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserDevicesSharingStatusWithOptions(request, runtime);
  }

  /**
   * Update the status of endpoint devices for your Alibaba Cloud account.
   * 
   * @param request - UpdateUserDevicesStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserDevicesStatusResponse
   */
  async updateUserDevicesStatusWithOptions(request: $_model.UpdateUserDevicesStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserDevicesStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceAction)) {
      body["DeviceAction"] = request.deviceAction;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceTags)) {
      bodyFlat["DeviceTags"] = request.deviceTags;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserDevicesStatus",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserDevicesStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserDevicesStatusResponse({}));
  }

  /**
   * Update the status of endpoint devices for your Alibaba Cloud account.
   * 
   * @param request - UpdateUserDevicesStatusRequest
   * @returns UpdateUserDevicesStatusResponse
   */
  async updateUserDevicesStatus(request: $_model.UpdateUserDevicesStatusRequest): Promise<$_model.UpdateUserDevicesStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserDevicesStatusWithOptions(request, runtime);
  }

  /**
   * Modifies a user group under the current Alibaba Cloud account.
   * 
   * @param request - UpdateUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserGroupResponse
   */
  async updateUserGroupWithOptions(request: $_model.UpdateUserGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attributes)) {
      bodyFlat["Attributes"] = request.attributes;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.modifyType)) {
      body["ModifyType"] = request.modifyType;
    }

    if (!$dara.isNull(request.userGroupId)) {
      body["UserGroupId"] = request.userGroupId;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserGroup",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserGroupResponse({}));
  }

  /**
   * Modifies a user group under the current Alibaba Cloud account.
   * 
   * @param request - UpdateUserGroupRequest
   * @returns UpdateUserGroupResponse
   */
  async updateUserGroup(request: $_model.UpdateUserGroupRequest): Promise<$_model.UpdateUserGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserGroupWithOptions(request, runtime);
  }

  /**
   * Updates the status of users in your Alibaba Cloud account.
   * 
   * @param request - UpdateUsersStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUsersStatusResponse
   */
  async updateUsersStatusWithOptions(request: $_model.UpdateUsersStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUsersStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.saseUserIds)) {
      query["SaseUserIds"] = request.saseUserIds;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUsersStatus",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUsersStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUsersStatusResponse({}));
  }

  /**
   * Updates the status of users in your Alibaba Cloud account.
   * 
   * @param request - UpdateUsersStatusRequest
   * @returns UpdateUsersStatusResponse
   */
  async updateUsersStatus(request: $_model.UpdateUsersStatusRequest): Promise<$_model.UpdateUsersStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUsersStatusWithOptions(request, runtime);
  }

}
