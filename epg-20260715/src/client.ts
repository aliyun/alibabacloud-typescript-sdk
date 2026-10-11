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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("epg", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 向出口代理地址池添加IP地址
   * 
   * @param request - AddIpAddressesToEgressProxyIpPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddIpAddressesToEgressProxyIpPoolResponse
   */
  async addIpAddressesToEgressProxyIpPoolWithOptions(request: $_model.AddIpAddressesToEgressProxyIpPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddIpAddressesToEgressProxyIpPoolResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.egressProxyIpPoolId)) {
      body["EgressProxyIpPoolId"] = request.egressProxyIpPoolId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.zoneMappings)) {
      bodyFlat["ZoneMappings"] = request.zoneMappings;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddIpAddressesToEgressProxyIpPool",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddIpAddressesToEgressProxyIpPoolResponse>(await this.callApi(params, req, runtime), new $_model.AddIpAddressesToEgressProxyIpPoolResponse({}));
  }

  /**
   * 向出口代理地址池添加IP地址
   * 
   * @param request - AddIpAddressesToEgressProxyIpPoolRequest
   * @returns AddIpAddressesToEgressProxyIpPoolResponse
   */
  async addIpAddressesToEgressProxyIpPool(request: $_model.AddIpAddressesToEgressProxyIpPoolRequest): Promise<$_model.AddIpAddressesToEgressProxyIpPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addIpAddressesToEgressProxyIpPoolWithOptions(request, runtime);
  }

  /**
   * Attaches egress proxy rule groups to an egress proxy configuration.
   * 
   * @remarks
   * When you call this operation to attach egress proxy rule groups to an egress proxy configuration, take note of the following items:
   * - This operation attaches one or more egress proxy rule groups to a specified egress proxy configuration and specifies the priority of each egress proxy rule group in the egress proxy configuration.
   * - The **AttachEgressProxyRuleGroupsToConfiguration** operation is asynchronous. After you send the request, the system returns a response, but the egress proxy rule groups are not yet attached. The attachment task is still running in the background. You can call GetEgressProxyConfigurationAttribute to query the status of the egress proxy configuration:
   *     - If the egress proxy configuration is in the **Configuring** state, the configuration is being updated.
   *     - If the egress proxy configuration is in the **Available** state, the attachment is successful.
   * 
   * @param request - AttachEgressProxyRuleGroupsToConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachEgressProxyRuleGroupsToConfigurationResponse
   */
  async attachEgressProxyRuleGroupsToConfigurationWithOptions(request: $_model.AttachEgressProxyRuleGroupsToConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachEgressProxyRuleGroupsToConfigurationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.egressProxyConfigurationId)) {
      body["EgressProxyConfigurationId"] = request.egressProxyConfigurationId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.egressProxyRuleGroups)) {
      bodyFlat["EgressProxyRuleGroups"] = request.egressProxyRuleGroups;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachEgressProxyRuleGroupsToConfiguration",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachEgressProxyRuleGroupsToConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.AttachEgressProxyRuleGroupsToConfigurationResponse({}));
  }

  /**
   * Attaches egress proxy rule groups to an egress proxy configuration.
   * 
   * @remarks
   * When you call this operation to attach egress proxy rule groups to an egress proxy configuration, take note of the following items:
   * - This operation attaches one or more egress proxy rule groups to a specified egress proxy configuration and specifies the priority of each egress proxy rule group in the egress proxy configuration.
   * - The **AttachEgressProxyRuleGroupsToConfiguration** operation is asynchronous. After you send the request, the system returns a response, but the egress proxy rule groups are not yet attached. The attachment task is still running in the background. You can call GetEgressProxyConfigurationAttribute to query the status of the egress proxy configuration:
   *     - If the egress proxy configuration is in the **Configuring** state, the configuration is being updated.
   *     - If the egress proxy configuration is in the **Available** state, the attachment is successful.
   * 
   * @param request - AttachEgressProxyRuleGroupsToConfigurationRequest
   * @returns AttachEgressProxyRuleGroupsToConfigurationResponse
   */
  async attachEgressProxyRuleGroupsToConfiguration(request: $_model.AttachEgressProxyRuleGroupsToConfigurationRequest): Promise<$_model.AttachEgressProxyRuleGroupsToConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachEgressProxyRuleGroupsToConfigurationWithOptions(request, runtime);
  }

  /**
   * Creates an egress proxy configuration.
   * 
   * @remarks
   * When you call this operation to create an egress proxy configuration, take note of the following items:
   * - The **CreateEgressProxyConfiguration** operation is asynchronous. After you call this operation, the system returns the ID of the egress proxy configuration, but the configuration is not yet created. The creation task is still running in the background. You can call GetEgressProxyConfigurationAttribute to query the status of the egress proxy configuration:
   *     - If the egress proxy configuration is in the **Provisioning** state, the configuration is being created.
   *     - If the egress proxy configuration is in the **Available** state, the configuration is created.
   * 
   * @param request - CreateEgressProxyConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEgressProxyConfigurationResponse
   */
  async createEgressProxyConfigurationWithOptions(request: $_model.CreateEgressProxyConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEgressProxyConfigurationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.defaultRulePhaseActions)) {
      bodyFlat["DefaultRulePhaseActions"] = request.defaultRulePhaseActions;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.egressProxyConfigurationName)) {
      body["EgressProxyConfigurationName"] = request.egressProxyConfigurationName;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      bodyFlat["Tag"] = request.tag;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEgressProxyConfiguration",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEgressProxyConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.CreateEgressProxyConfigurationResponse({}));
  }

  /**
   * Creates an egress proxy configuration.
   * 
   * @remarks
   * When you call this operation to create an egress proxy configuration, take note of the following items:
   * - The **CreateEgressProxyConfiguration** operation is asynchronous. After you call this operation, the system returns the ID of the egress proxy configuration, but the configuration is not yet created. The creation task is still running in the background. You can call GetEgressProxyConfigurationAttribute to query the status of the egress proxy configuration:
   *     - If the egress proxy configuration is in the **Provisioning** state, the configuration is being created.
   *     - If the egress proxy configuration is in the **Available** state, the configuration is created.
   * 
   * @param request - CreateEgressProxyConfigurationRequest
   * @returns CreateEgressProxyConfigurationResponse
   */
  async createEgressProxyConfiguration(request: $_model.CreateEgressProxyConfigurationRequest): Promise<$_model.CreateEgressProxyConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEgressProxyConfigurationWithOptions(request, runtime);
  }

  /**
   * Creates an egress proxy gateway instance.
   * 
   * @remarks
   * The **CreateEgressProxyGateway** operation is asynchronous. After you call this operation, the system returns an instance ID, but the egress proxy gateway instance is not yet created and the creation task is still running in the background. You can call GetEgressProxyGatewayAttribute to query the creation status of the egress proxy gateway instance:
   * - When the egress proxy gateway instance is in the **Provisioning** state, the instance is being created.
   * - When the egress proxy gateway instance is in the **Active** state, the instance is created.
   * 
   * @param request - CreateEgressProxyGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEgressProxyGatewayResponse
   */
  async createEgressProxyGatewayWithOptions(request: $_model.CreateEgressProxyGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEgressProxyGatewayResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.egressProxyConfigurationId)) {
      body["EgressProxyConfigurationId"] = request.egressProxyConfigurationId;
    }

    if (!$dara.isNull(request.egressProxyGatewayName)) {
      body["EgressProxyGatewayName"] = request.egressProxyGatewayName;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.listenerProperties)) {
      bodyFlat["ListenerProperties"] = request.listenerProperties;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      bodyFlat["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.tlsInterceptProperties)) {
      bodyFlat["TlsInterceptProperties"] = request.tlsInterceptProperties;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zoneMappings)) {
      bodyFlat["ZoneMappings"] = request.zoneMappings;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEgressProxyGateway",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEgressProxyGatewayResponse>(await this.callApi(params, req, runtime), new $_model.CreateEgressProxyGatewayResponse({}));
  }

  /**
   * Creates an egress proxy gateway instance.
   * 
   * @remarks
   * The **CreateEgressProxyGateway** operation is asynchronous. After you call this operation, the system returns an instance ID, but the egress proxy gateway instance is not yet created and the creation task is still running in the background. You can call GetEgressProxyGatewayAttribute to query the creation status of the egress proxy gateway instance:
   * - When the egress proxy gateway instance is in the **Provisioning** state, the instance is being created.
   * - When the egress proxy gateway instance is in the **Active** state, the instance is created.
   * 
   * @param request - CreateEgressProxyGatewayRequest
   * @returns CreateEgressProxyGatewayResponse
   */
  async createEgressProxyGateway(request: $_model.CreateEgressProxyGatewayRequest): Promise<$_model.CreateEgressProxyGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEgressProxyGatewayWithOptions(request, runtime);
  }

  /**
   * 创建出口代理地址池
   * 
   * @param request - CreateEgressProxyIpPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEgressProxyIpPoolResponse
   */
  async createEgressProxyIpPoolWithOptions(request: $_model.CreateEgressProxyIpPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEgressProxyIpPoolResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addressType)) {
      body["AddressType"] = request.addressType;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.egressProxyGatewayId)) {
      body["EgressProxyGatewayId"] = request.egressProxyGatewayId;
    }

    if (!$dara.isNull(request.egressProxyIpPoolName)) {
      body["EgressProxyIpPoolName"] = request.egressProxyIpPoolName;
    }

    if (!$dara.isNull(request.hashFactor)) {
      body["HashFactor"] = request.hashFactor;
    }

    if (!$dara.isNull(request.hashHeaderName)) {
      body["HashHeaderName"] = request.hashHeaderName;
    }

    if (!$dara.isNull(request.scheduler)) {
      body["Scheduler"] = request.scheduler;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tag)) {
      bodyFlat["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.zoneMappings)) {
      bodyFlat["ZoneMappings"] = request.zoneMappings;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEgressProxyIpPool",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEgressProxyIpPoolResponse>(await this.callApi(params, req, runtime), new $_model.CreateEgressProxyIpPoolResponse({}));
  }

  /**
   * 创建出口代理地址池
   * 
   * @param request - CreateEgressProxyIpPoolRequest
   * @returns CreateEgressProxyIpPoolResponse
   */
  async createEgressProxyIpPool(request: $_model.CreateEgressProxyIpPoolRequest): Promise<$_model.CreateEgressProxyIpPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEgressProxyIpPoolWithOptions(request, runtime);
  }

  /**
   * Creates an egress rule group.
   * 
   * @remarks
   * When you call this operation to create an egress rule group, take note of the following items:
   * - You can create egress rules in batches by phase (PreDns, PreRequest, and PostResponse) when you create the rule group.
   * - Within the same phase of a rule group, rule priorities (Priority) must be unique. Valid values: 1 to 1000. A smaller value indicates a higher priority.
   * - This operation is asynchronous. After you call this operation, the system returns the ID of the egress rule group, but the rule group is not yet created. The creation task is still running in the background. You can call GetEgressProxyRuleGroupAttribute to query the status of the egress rule group:
   *     - If the egress rule group is in the **Provisioning** state, the rule group is being created.
   *     - If the egress rule group is in the **Available** state, the rule group is created.
   * 
   * @param request - CreateEgressProxyRuleGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEgressProxyRuleGroupResponse
   */
  async createEgressProxyRuleGroupWithOptions(request: $_model.CreateEgressProxyRuleGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEgressProxyRuleGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.egressProxyIpPoolId)) {
      body["EgressProxyIpPoolId"] = request.egressProxyIpPoolId;
    }

    if (!$dara.isNull(request.egressProxyRuleGroupName)) {
      body["EgressProxyRuleGroupName"] = request.egressProxyRuleGroupName;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.egressProxyRules)) {
      bodyFlat["EgressProxyRules"] = request.egressProxyRules;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      bodyFlat["Tag"] = request.tag;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEgressProxyRuleGroup",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEgressProxyRuleGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateEgressProxyRuleGroupResponse({}));
  }

  /**
   * Creates an egress rule group.
   * 
   * @remarks
   * When you call this operation to create an egress rule group, take note of the following items:
   * - You can create egress rules in batches by phase (PreDns, PreRequest, and PostResponse) when you create the rule group.
   * - Within the same phase of a rule group, rule priorities (Priority) must be unique. Valid values: 1 to 1000. A smaller value indicates a higher priority.
   * - This operation is asynchronous. After you call this operation, the system returns the ID of the egress rule group, but the rule group is not yet created. The creation task is still running in the background. You can call GetEgressProxyRuleGroupAttribute to query the status of the egress rule group:
   *     - If the egress rule group is in the **Provisioning** state, the rule group is being created.
   *     - If the egress rule group is in the **Available** state, the rule group is created.
   * 
   * @param request - CreateEgressProxyRuleGroupRequest
   * @returns CreateEgressProxyRuleGroupResponse
   */
  async createEgressProxyRuleGroup(request: $_model.CreateEgressProxyRuleGroupRequest): Promise<$_model.CreateEgressProxyRuleGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEgressProxyRuleGroupWithOptions(request, runtime);
  }

  /**
   * Creates multiple egress proxy rules.
   * 
   * @remarks
   * When you call this operation to create multiple egress proxy rules in a specified egress rule group, note the following items:
   * - Egress rules are created in groups based on the effective phase (PreDns, PreRequest, or PostResponse).
   * - Within the same effective phase of an egress rule group, the priority of rules must be unique.
   * - Valid values for the priority: 1 to 1000. A smaller value indicates a higher priority.
   * - This operation is asynchronous. After you call this operation, the system returns the IDs of the created egress rules, but the rules are not yet created. The creation task is still running in the background. You can call the GetEgressProxyRuleGroupAttribute operation to query the status of the egress rule group:
   *     - If the egress rule group is in the **Provisioning** state, the rules are being created.
   *     - If the egress rule group is in the **Available** state, the rules are created.
   * 
   * @param request - CreateEgressProxyRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEgressProxyRulesResponse
   */
  async createEgressProxyRulesWithOptions(request: $_model.CreateEgressProxyRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEgressProxyRulesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.egressProxyRuleGroupId)) {
      body["EgressProxyRuleGroupId"] = request.egressProxyRuleGroupId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.egressProxyRules)) {
      bodyFlat["EgressProxyRules"] = request.egressProxyRules;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEgressProxyRules",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEgressProxyRulesResponse>(await this.callApi(params, req, runtime), new $_model.CreateEgressProxyRulesResponse({}));
  }

  /**
   * Creates multiple egress proxy rules.
   * 
   * @remarks
   * When you call this operation to create multiple egress proxy rules in a specified egress rule group, note the following items:
   * - Egress rules are created in groups based on the effective phase (PreDns, PreRequest, or PostResponse).
   * - Within the same effective phase of an egress rule group, the priority of rules must be unique.
   * - Valid values for the priority: 1 to 1000. A smaller value indicates a higher priority.
   * - This operation is asynchronous. After you call this operation, the system returns the IDs of the created egress rules, but the rules are not yet created. The creation task is still running in the background. You can call the GetEgressProxyRuleGroupAttribute operation to query the status of the egress rule group:
   *     - If the egress rule group is in the **Provisioning** state, the rules are being created.
   *     - If the egress rule group is in the **Available** state, the rules are created.
   * 
   * @param request - CreateEgressProxyRulesRequest
   * @returns CreateEgressProxyRulesResponse
   */
  async createEgressProxyRules(request: $_model.CreateEgressProxyRulesRequest): Promise<$_model.CreateEgressProxyRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEgressProxyRulesWithOptions(request, runtime);
  }

  /**
   * Deletes an egress proxy configuration.
   * 
   * @param request - DeleteEgressProxyConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEgressProxyConfigurationResponse
   */
  async deleteEgressProxyConfigurationWithOptions(request: $_model.DeleteEgressProxyConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEgressProxyConfigurationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.egressProxyConfigurationId)) {
      body["EgressProxyConfigurationId"] = request.egressProxyConfigurationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEgressProxyConfiguration",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEgressProxyConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEgressProxyConfigurationResponse({}));
  }

  /**
   * Deletes an egress proxy configuration.
   * 
   * @param request - DeleteEgressProxyConfigurationRequest
   * @returns DeleteEgressProxyConfigurationResponse
   */
  async deleteEgressProxyConfiguration(request: $_model.DeleteEgressProxyConfigurationRequest): Promise<$_model.DeleteEgressProxyConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEgressProxyConfigurationWithOptions(request, runtime);
  }

  /**
   * Deletes an egress proxy gateway instance.
   * 
   * @remarks
   * ## Request description
   * - `EgressProxyGatewayId` is a required parameter that specifies the egress proxy gateway instance ID to delete.
   * - `ClientToken` is an optional parameter used to ensure the idempotence of the request.
   * 
   * @param request - DeleteEgressProxyGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEgressProxyGatewayResponse
   */
  async deleteEgressProxyGatewayWithOptions(request: $_model.DeleteEgressProxyGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEgressProxyGatewayResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.egressProxyGatewayId)) {
      body["EgressProxyGatewayId"] = request.egressProxyGatewayId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEgressProxyGateway",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEgressProxyGatewayResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEgressProxyGatewayResponse({}));
  }

  /**
   * Deletes an egress proxy gateway instance.
   * 
   * @remarks
   * ## Request description
   * - `EgressProxyGatewayId` is a required parameter that specifies the egress proxy gateway instance ID to delete.
   * - `ClientToken` is an optional parameter used to ensure the idempotence of the request.
   * 
   * @param request - DeleteEgressProxyGatewayRequest
   * @returns DeleteEgressProxyGatewayResponse
   */
  async deleteEgressProxyGateway(request: $_model.DeleteEgressProxyGatewayRequest): Promise<$_model.DeleteEgressProxyGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEgressProxyGatewayWithOptions(request, runtime);
  }

  /**
   * Deletes an egress proxy IP address pool.
   * 
   * @remarks
   * ## Request description
   * - **EgressProxyIpPoolId** is a required parameter that specifies the ID of the egress proxy IP address pool to delete.
   * - **ClientToken** is an optional parameter used to ensure the idempotence of the request.
   * - **DryRun** is an optional parameter. Default value: `false`. If you set this parameter to `true`, the system only prechecks the request and does not perform the delete operation.
   * 
   * @param request - DeleteEgressProxyIpPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEgressProxyIpPoolResponse
   */
  async deleteEgressProxyIpPoolWithOptions(request: $_model.DeleteEgressProxyIpPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEgressProxyIpPoolResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.egressProxyIpPoolId)) {
      body["EgressProxyIpPoolId"] = request.egressProxyIpPoolId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEgressProxyIpPool",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEgressProxyIpPoolResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEgressProxyIpPoolResponse({}));
  }

  /**
   * Deletes an egress proxy IP address pool.
   * 
   * @remarks
   * ## Request description
   * - **EgressProxyIpPoolId** is a required parameter that specifies the ID of the egress proxy IP address pool to delete.
   * - **ClientToken** is an optional parameter used to ensure the idempotence of the request.
   * - **DryRun** is an optional parameter. Default value: `false`. If you set this parameter to `true`, the system only prechecks the request and does not perform the delete operation.
   * 
   * @param request - DeleteEgressProxyIpPoolRequest
   * @returns DeleteEgressProxyIpPoolResponse
   */
  async deleteEgressProxyIpPool(request: $_model.DeleteEgressProxyIpPoolRequest): Promise<$_model.DeleteEgressProxyIpPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEgressProxyIpPoolWithOptions(request, runtime);
  }

  /**
   * Deletes an egress proxy rule group.
   * 
   * @param request - DeleteEgressProxyRuleGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEgressProxyRuleGroupResponse
   */
  async deleteEgressProxyRuleGroupWithOptions(request: $_model.DeleteEgressProxyRuleGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEgressProxyRuleGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.egressProxyRuleGroupId)) {
      body["EgressProxyRuleGroupId"] = request.egressProxyRuleGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEgressProxyRuleGroup",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEgressProxyRuleGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEgressProxyRuleGroupResponse({}));
  }

  /**
   * Deletes an egress proxy rule group.
   * 
   * @param request - DeleteEgressProxyRuleGroupRequest
   * @returns DeleteEgressProxyRuleGroupResponse
   */
  async deleteEgressProxyRuleGroup(request: $_model.DeleteEgressProxyRuleGroupRequest): Promise<$_model.DeleteEgressProxyRuleGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEgressProxyRuleGroupWithOptions(request, runtime);
  }

  /**
   * Deletes multiple egress proxy rules.
   * 
   * @param request - DeleteEgressProxyRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEgressProxyRulesResponse
   */
  async deleteEgressProxyRulesWithOptions(request: $_model.DeleteEgressProxyRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEgressProxyRulesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.egressProxyRuleGroupId)) {
      body["EgressProxyRuleGroupId"] = request.egressProxyRuleGroupId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.egressProxyRuleIds)) {
      bodyFlat["EgressProxyRuleIds"] = request.egressProxyRuleIds;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEgressProxyRules",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEgressProxyRulesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEgressProxyRulesResponse({}));
  }

  /**
   * Deletes multiple egress proxy rules.
   * 
   * @param request - DeleteEgressProxyRulesRequest
   * @returns DeleteEgressProxyRulesResponse
   */
  async deleteEgressProxyRules(request: $_model.DeleteEgressProxyRulesRequest): Promise<$_model.DeleteEgressProxyRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEgressProxyRulesWithOptions(request, runtime);
  }

  /**
   * Queries the available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionsResponse({}));
  }

  /**
   * Queries the available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries zones.
   * 
   * @param request - DescribeZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeZonesResponse
   */
  async describeZonesWithOptions(request: $_model.DescribeZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeZonesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeZones",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeZonesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeZonesResponse({}));
  }

  /**
   * Queries zones.
   * 
   * @param request - DescribeZonesRequest
   * @returns DescribeZonesResponse
   */
  async describeZones(request: $_model.DescribeZonesRequest): Promise<$_model.DescribeZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  /**
   * Disassociates egress proxy rule groups from an egress proxy configuration.
   * 
   * @remarks
   * When you call this operation to disassociate egress proxy rule groups from an egress proxy configuration, take note of the following items:
   * - This operation disassociates one or more egress proxy rule groups from a specified egress proxy configuration. After the disassociation, these egress proxy rule groups no longer take effect in the egress proxy configuration.
   * - The **DetachEgressProxyRuleGroupsFromConfiguration** operation is asynchronous. After you send a request, the system returns a response, but the egress proxy rule groups are not yet disassociated. The disassociation task is still running in the background. You can call the GetEgressProxyConfigurationAttribute operation to query the status of the egress proxy configuration:
   *     - If the egress proxy configuration is in the **Configuring** state, the configuration is being updated.
   *     - If the egress proxy configuration is in the **Available** state, the disassociation is successful.
   * 
   * @param request - DetachEgressProxyRuleGroupsFromConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachEgressProxyRuleGroupsFromConfigurationResponse
   */
  async detachEgressProxyRuleGroupsFromConfigurationWithOptions(request: $_model.DetachEgressProxyRuleGroupsFromConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachEgressProxyRuleGroupsFromConfigurationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.egressProxyConfigurationId)) {
      body["EgressProxyConfigurationId"] = request.egressProxyConfigurationId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.egressProxyRuleGroupIds)) {
      bodyFlat["EgressProxyRuleGroupIds"] = request.egressProxyRuleGroupIds;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachEgressProxyRuleGroupsFromConfiguration",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachEgressProxyRuleGroupsFromConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.DetachEgressProxyRuleGroupsFromConfigurationResponse({}));
  }

  /**
   * Disassociates egress proxy rule groups from an egress proxy configuration.
   * 
   * @remarks
   * When you call this operation to disassociate egress proxy rule groups from an egress proxy configuration, take note of the following items:
   * - This operation disassociates one or more egress proxy rule groups from a specified egress proxy configuration. After the disassociation, these egress proxy rule groups no longer take effect in the egress proxy configuration.
   * - The **DetachEgressProxyRuleGroupsFromConfiguration** operation is asynchronous. After you send a request, the system returns a response, but the egress proxy rule groups are not yet disassociated. The disassociation task is still running in the background. You can call the GetEgressProxyConfigurationAttribute operation to query the status of the egress proxy configuration:
   *     - If the egress proxy configuration is in the **Configuring** state, the configuration is being updated.
   *     - If the egress proxy configuration is in the **Available** state, the disassociation is successful.
   * 
   * @param request - DetachEgressProxyRuleGroupsFromConfigurationRequest
   * @returns DetachEgressProxyRuleGroupsFromConfigurationResponse
   */
  async detachEgressProxyRuleGroupsFromConfiguration(request: $_model.DetachEgressProxyRuleGroupsFromConfigurationRequest): Promise<$_model.DetachEgressProxyRuleGroupsFromConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachEgressProxyRuleGroupsFromConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the details of an egress proxy configuration.
   * 
   * @remarks
   * *GetEgressProxyConfigurationAttribute** is a synchronous API operation that returns the details of a specified egress proxy configuration in real time after the call. You can determine the current status of the egress proxy configuration based on the returned **Status**. For example, **Provisioning** indicates that the configuration is being created, and **Available** indicates that the configuration is created and available.
   * 
   * @param request - GetEgressProxyConfigurationAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEgressProxyConfigurationAttributeResponse
   */
  async getEgressProxyConfigurationAttributeWithOptions(request: $_model.GetEgressProxyConfigurationAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEgressProxyConfigurationAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.egressProxyConfigurationId)) {
      body["EgressProxyConfigurationId"] = request.egressProxyConfigurationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEgressProxyConfigurationAttribute",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEgressProxyConfigurationAttributeResponse>(await this.callApi(params, req, runtime), new $_model.GetEgressProxyConfigurationAttributeResponse({}));
  }

  /**
   * Queries the details of an egress proxy configuration.
   * 
   * @remarks
   * *GetEgressProxyConfigurationAttribute** is a synchronous API operation that returns the details of a specified egress proxy configuration in real time after the call. You can determine the current status of the egress proxy configuration based on the returned **Status**. For example, **Provisioning** indicates that the configuration is being created, and **Available** indicates that the configuration is created and available.
   * 
   * @param request - GetEgressProxyConfigurationAttributeRequest
   * @returns GetEgressProxyConfigurationAttributeResponse
   */
  async getEgressProxyConfigurationAttribute(request: $_model.GetEgressProxyConfigurationAttributeRequest): Promise<$_model.GetEgressProxyConfigurationAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEgressProxyConfigurationAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the details of an egress proxy gateway instance.
   * 
   * @remarks
   * *GetEgressProxyGatewayAttribute** is a synchronous operation that returns the current attribute information of the egress proxy gateway in real time after it is called.
   * You can determine the current status of the egress proxy gateway based on the returned **Status**. For example, **Provisioning** indicates that the instance is being created, **Active** indicates that the instance is running, **Configuring** indicates that the instance is being reconfigured, and **Inactive** indicates that the instance is stopped.
   * 
   * @param request - GetEgressProxyGatewayAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEgressProxyGatewayAttributeResponse
   */
  async getEgressProxyGatewayAttributeWithOptions(request: $_model.GetEgressProxyGatewayAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEgressProxyGatewayAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.egressProxyGatewayId)) {
      body["EgressProxyGatewayId"] = request.egressProxyGatewayId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEgressProxyGatewayAttribute",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEgressProxyGatewayAttributeResponse>(await this.callApi(params, req, runtime), new $_model.GetEgressProxyGatewayAttributeResponse({}));
  }

  /**
   * Queries the details of an egress proxy gateway instance.
   * 
   * @remarks
   * *GetEgressProxyGatewayAttribute** is a synchronous operation that returns the current attribute information of the egress proxy gateway in real time after it is called.
   * You can determine the current status of the egress proxy gateway based on the returned **Status**. For example, **Provisioning** indicates that the instance is being created, **Active** indicates that the instance is running, **Configuring** indicates that the instance is being reconfigured, and **Inactive** indicates that the instance is stopped.
   * 
   * @param request - GetEgressProxyGatewayAttributeRequest
   * @returns GetEgressProxyGatewayAttributeResponse
   */
  async getEgressProxyGatewayAttribute(request: $_model.GetEgressProxyGatewayAttributeRequest): Promise<$_model.GetEgressProxyGatewayAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEgressProxyGatewayAttributeWithOptions(request, runtime);
  }

  /**
   * 查询出口代理地址池详细信息
   * 
   * @remarks
   * ## 请求说明
   * 通过提供`EgressProxyIpPoolId`，可以获取到与该ID关联的出口代理IP池的所有相关信息，包括但不限于名称、描述、网络类型等。请确保提供的`EgressProxyIpPoolId`是有效的且属于您的账户。
   * 
   * @param request - GetEgressProxyIpPoolAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEgressProxyIpPoolAttributeResponse
   */
  async getEgressProxyIpPoolAttributeWithOptions(request: $_model.GetEgressProxyIpPoolAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEgressProxyIpPoolAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.egressProxyIpPoolId)) {
      body["EgressProxyIpPoolId"] = request.egressProxyIpPoolId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEgressProxyIpPoolAttribute",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEgressProxyIpPoolAttributeResponse>(await this.callApi(params, req, runtime), new $_model.GetEgressProxyIpPoolAttributeResponse({}));
  }

  /**
   * 查询出口代理地址池详细信息
   * 
   * @remarks
   * ## 请求说明
   * 通过提供`EgressProxyIpPoolId`，可以获取到与该ID关联的出口代理IP池的所有相关信息，包括但不限于名称、描述、网络类型等。请确保提供的`EgressProxyIpPoolId`是有效的且属于您的账户。
   * 
   * @param request - GetEgressProxyIpPoolAttributeRequest
   * @returns GetEgressProxyIpPoolAttributeResponse
   */
  async getEgressProxyIpPoolAttribute(request: $_model.GetEgressProxyIpPoolAttributeRequest): Promise<$_model.GetEgressProxyIpPoolAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEgressProxyIpPoolAttributeWithOptions(request, runtime);
  }

  /**
   * 查询出口代理规则组详细信息
   * 
   * @param request - GetEgressProxyRuleGroupAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEgressProxyRuleGroupAttributeResponse
   */
  async getEgressProxyRuleGroupAttributeWithOptions(request: $_model.GetEgressProxyRuleGroupAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEgressProxyRuleGroupAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.egressProxyRuleGroupId)) {
      body["EgressProxyRuleGroupId"] = request.egressProxyRuleGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEgressProxyRuleGroupAttribute",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEgressProxyRuleGroupAttributeResponse>(await this.callApi(params, req, runtime), new $_model.GetEgressProxyRuleGroupAttributeResponse({}));
  }

  /**
   * 查询出口代理规则组详细信息
   * 
   * @param request - GetEgressProxyRuleGroupAttributeRequest
   * @returns GetEgressProxyRuleGroupAttributeResponse
   */
  async getEgressProxyRuleGroupAttribute(request: $_model.GetEgressProxyRuleGroupAttributeRequest): Promise<$_model.GetEgressProxyRuleGroupAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEgressProxyRuleGroupAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the list of egress proxy configurations.
   * 
   * @remarks
   * *ListEgressProxyConfigurations** is a synchronous API operation that returns a list of egress proxy configurations that meet the specified conditions in real time after the call. The returned results are paginated by using **MaxResults** and **NextToken**:
   * - If **NextToken** is empty, all data has been returned.
   * - If **NextToken** has a value, you can use it as the **NextToken** for the next call to continue the query.
   * 
   * @param request - ListEgressProxyConfigurationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEgressProxyConfigurationsResponse
   */
  async listEgressProxyConfigurationsWithOptions(request: $_model.ListEgressProxyConfigurationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEgressProxyConfigurationsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.egressProxyConfigurationIds)) {
      bodyFlat["EgressProxyConfigurationIds"] = request.egressProxyConfigurationIds;
    }

    if (!$dara.isNull(request.egressProxyConfigurationNames)) {
      bodyFlat["EgressProxyConfigurationNames"] = request.egressProxyConfigurationNames;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.skip)) {
      body["Skip"] = request.skip;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      bodyFlat["Tag"] = request.tag;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEgressProxyConfigurations",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEgressProxyConfigurationsResponse>(await this.callApi(params, req, runtime), new $_model.ListEgressProxyConfigurationsResponse({}));
  }

  /**
   * Queries the list of egress proxy configurations.
   * 
   * @remarks
   * *ListEgressProxyConfigurations** is a synchronous API operation that returns a list of egress proxy configurations that meet the specified conditions in real time after the call. The returned results are paginated by using **MaxResults** and **NextToken**:
   * - If **NextToken** is empty, all data has been returned.
   * - If **NextToken** has a value, you can use it as the **NextToken** for the next call to continue the query.
   * 
   * @param request - ListEgressProxyConfigurationsRequest
   * @returns ListEgressProxyConfigurationsResponse
   */
  async listEgressProxyConfigurations(request: $_model.ListEgressProxyConfigurationsRequest): Promise<$_model.ListEgressProxyConfigurationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEgressProxyConfigurationsWithOptions(request, runtime);
  }

  /**
   * 查询出口代理网关列表
   * 
   * @remarks
   * ## 请求说明
   * - `MaxResults` 参数用于指定每页返回的最大结果数量，默认值为20，最大可设置为1000。
   * - `NextToken` 参数用于分页查询时获取下一页的数据。
   * - `Skip` 参数用于跳过指定数量的结果，默认值为0。
   * - `VpcIds` 参数允许通过指定一个或多个VPC ID来过滤查询结果，一次最多支持20个ID。
   * - `EgressProxyGatewayIds` 和 `EgressProxyGatewayNames` 分别允许通过实例ID和实例名称来过滤查询结果，每次请求中每个参数最多支持20个值。
   * - `Status` 参数可用于根据实例状态（如Active, Inactive等）进行过滤。
   * - `ResourceGroupId` 参数允许按资源组ID过滤查询结果。
   * - `Tags` 参数支持基于标签键值对的过滤条件，可以用来更精确地定位特定资源。
   * 请注意，所有数组类型的参数在实际使用时需要按照API的具体要求格式化输入数据。
   * 
   * @param request - ListEgressProxyGatewaysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEgressProxyGatewaysResponse
   */
  async listEgressProxyGatewaysWithOptions(request: $_model.ListEgressProxyGatewaysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEgressProxyGatewaysResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.egressProxyConfigurationIds)) {
      bodyFlat["EgressProxyConfigurationIds"] = request.egressProxyConfigurationIds;
    }

    if (!$dara.isNull(request.egressProxyGatewayIds)) {
      bodyFlat["EgressProxyGatewayIds"] = request.egressProxyGatewayIds;
    }

    if (!$dara.isNull(request.egressProxyGatewayNames)) {
      bodyFlat["EgressProxyGatewayNames"] = request.egressProxyGatewayNames;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.skip)) {
      body["Skip"] = request.skip;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      bodyFlat["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vpcIds)) {
      bodyFlat["VpcIds"] = request.vpcIds;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEgressProxyGateways",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEgressProxyGatewaysResponse>(await this.callApi(params, req, runtime), new $_model.ListEgressProxyGatewaysResponse({}));
  }

  /**
   * 查询出口代理网关列表
   * 
   * @remarks
   * ## 请求说明
   * - `MaxResults` 参数用于指定每页返回的最大结果数量，默认值为20，最大可设置为1000。
   * - `NextToken` 参数用于分页查询时获取下一页的数据。
   * - `Skip` 参数用于跳过指定数量的结果，默认值为0。
   * - `VpcIds` 参数允许通过指定一个或多个VPC ID来过滤查询结果，一次最多支持20个ID。
   * - `EgressProxyGatewayIds` 和 `EgressProxyGatewayNames` 分别允许通过实例ID和实例名称来过滤查询结果，每次请求中每个参数最多支持20个值。
   * - `Status` 参数可用于根据实例状态（如Active, Inactive等）进行过滤。
   * - `ResourceGroupId` 参数允许按资源组ID过滤查询结果。
   * - `Tags` 参数支持基于标签键值对的过滤条件，可以用来更精确地定位特定资源。
   * 请注意，所有数组类型的参数在实际使用时需要按照API的具体要求格式化输入数据。
   * 
   * @param request - ListEgressProxyGatewaysRequest
   * @returns ListEgressProxyGatewaysResponse
   */
  async listEgressProxyGateways(request: $_model.ListEgressProxyGatewaysRequest): Promise<$_model.ListEgressProxyGatewaysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEgressProxyGatewaysWithOptions(request, runtime);
  }

  /**
   * 查询出口代理地址池列表
   * 
   * @remarks
   * ## 请求说明
   * - `MaxResults` 参数用于控制每页返回的结果数量，默认为20，最大值为1000。
   * - `NextToken` 用于分页查询时获取下一页的数据。
   * - `Skip` 参数用于跳过指定数量的记录，默认值为0。
   * - 可以通过 `EgressProxyGatewayIds`, `EgressProxyIpPoolIds`, `EgressProxyIpPoolNames` 等参数进行过滤查询。
   * - `Status` 参数支持按状态过滤结果。
   * - `Tags` 参数可用于更细粒度的资源筛选。
   * - 返回结果中包含 `NextToken` 以便于继续请求后续页面的数据。
   * - `CreateTime` 字段表示的是UTC时间格式。
   * 
   * @param request - ListEgressProxyIpPoolsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEgressProxyIpPoolsResponse
   */
  async listEgressProxyIpPoolsWithOptions(request: $_model.ListEgressProxyIpPoolsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEgressProxyIpPoolsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.egressProxyGatewayIds)) {
      bodyFlat["EgressProxyGatewayIds"] = request.egressProxyGatewayIds;
    }

    if (!$dara.isNull(request.egressProxyIpPoolIds)) {
      bodyFlat["EgressProxyIpPoolIds"] = request.egressProxyIpPoolIds;
    }

    if (!$dara.isNull(request.egressProxyIpPoolNames)) {
      bodyFlat["EgressProxyIpPoolNames"] = request.egressProxyIpPoolNames;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.skip)) {
      body["Skip"] = request.skip;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      bodyFlat["Tag"] = request.tag;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEgressProxyIpPools",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEgressProxyIpPoolsResponse>(await this.callApi(params, req, runtime), new $_model.ListEgressProxyIpPoolsResponse({}));
  }

  /**
   * 查询出口代理地址池列表
   * 
   * @remarks
   * ## 请求说明
   * - `MaxResults` 参数用于控制每页返回的结果数量，默认为20，最大值为1000。
   * - `NextToken` 用于分页查询时获取下一页的数据。
   * - `Skip` 参数用于跳过指定数量的记录，默认值为0。
   * - 可以通过 `EgressProxyGatewayIds`, `EgressProxyIpPoolIds`, `EgressProxyIpPoolNames` 等参数进行过滤查询。
   * - `Status` 参数支持按状态过滤结果。
   * - `Tags` 参数可用于更细粒度的资源筛选。
   * - 返回结果中包含 `NextToken` 以便于继续请求后续页面的数据。
   * - `CreateTime` 字段表示的是UTC时间格式。
   * 
   * @param request - ListEgressProxyIpPoolsRequest
   * @returns ListEgressProxyIpPoolsResponse
   */
  async listEgressProxyIpPools(request: $_model.ListEgressProxyIpPoolsRequest): Promise<$_model.ListEgressProxyIpPoolsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEgressProxyIpPoolsWithOptions(request, runtime);
  }

  /**
   * 查询出口代理规则组列表
   * 
   * @param request - ListEgressProxyRuleGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEgressProxyRuleGroupsResponse
   */
  async listEgressProxyRuleGroupsWithOptions(request: $_model.ListEgressProxyRuleGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEgressProxyRuleGroupsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.egressProxyRuleGroupIds)) {
      bodyFlat["EgressProxyRuleGroupIds"] = request.egressProxyRuleGroupIds;
    }

    if (!$dara.isNull(request.egressProxyRuleGroupNames)) {
      bodyFlat["EgressProxyRuleGroupNames"] = request.egressProxyRuleGroupNames;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.skip)) {
      body["Skip"] = request.skip;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      bodyFlat["Tag"] = request.tag;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEgressProxyRuleGroups",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEgressProxyRuleGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListEgressProxyRuleGroupsResponse({}));
  }

  /**
   * 查询出口代理规则组列表
   * 
   * @param request - ListEgressProxyRuleGroupsRequest
   * @returns ListEgressProxyRuleGroupsResponse
   */
  async listEgressProxyRuleGroups(request: $_model.ListEgressProxyRuleGroupsRequest): Promise<$_model.ListEgressProxyRuleGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEgressProxyRuleGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the tags bound to the specified resources.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceId)) {
      bodyFlat["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      bodyFlat["Tag"] = request.tag;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResourcesResponse({}));
  }

  /**
   * Queries the tags bound to the specified resources.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies the resource group to which a resource belongs.
   * 
   * @remarks
   * Shifts a resource to another resource group. After the shift, the resource belongs to the new resource group. For valid values of the ResourceType parameter, see the metric description.
   * 
   * @param request - MoveResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroupWithOptions(request: $_model.MoveResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveResourceGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.newResourceGroupId)) {
      body["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveResourceGroup",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.MoveResourceGroupResponse({}));
  }

  /**
   * Modifies the resource group to which a resource belongs.
   * 
   * @remarks
   * Shifts a resource to another resource group. After the shift, the resource belongs to the new resource group. For valid values of the ResourceType parameter, see the metric description.
   * 
   * @param request - MoveResourceGroupRequest
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroup(request: $_model.MoveResourceGroupRequest): Promise<$_model.MoveResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
   * 从出口代理地址池移除IP地址
   * 
   * @param request - RemoveIpAddressesFromEgressProxyIpPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveIpAddressesFromEgressProxyIpPoolResponse
   */
  async removeIpAddressesFromEgressProxyIpPoolWithOptions(request: $_model.RemoveIpAddressesFromEgressProxyIpPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveIpAddressesFromEgressProxyIpPoolResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.egressProxyIpPoolId)) {
      body["EgressProxyIpPoolId"] = request.egressProxyIpPoolId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.zoneMappings)) {
      bodyFlat["ZoneMappings"] = request.zoneMappings;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveIpAddressesFromEgressProxyIpPool",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveIpAddressesFromEgressProxyIpPoolResponse>(await this.callApi(params, req, runtime), new $_model.RemoveIpAddressesFromEgressProxyIpPoolResponse({}));
  }

  /**
   * 从出口代理地址池移除IP地址
   * 
   * @param request - RemoveIpAddressesFromEgressProxyIpPoolRequest
   * @returns RemoveIpAddressesFromEgressProxyIpPoolResponse
   */
  async removeIpAddressesFromEgressProxyIpPool(request: $_model.RemoveIpAddressesFromEgressProxyIpPoolRequest): Promise<$_model.RemoveIpAddressesFromEgressProxyIpPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeIpAddressesFromEgressProxyIpPoolWithOptions(request, runtime);
  }

  /**
   * Creates and attaches tags to a specified list of resources.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceId)) {
      bodyFlat["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      bodyFlat["Tag"] = request.tag;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * Creates and attaches tags to a specified list of resources.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from the specified resources.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.all)) {
      body["All"] = request.all;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceId)) {
      bodyFlat["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      bodyFlat["TagKey"] = request.tagKey;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UntagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UntagResourcesResponse({}));
  }

  /**
   * Removes tags from the specified resources.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * 更新出口代理配置属性
   * 
   * @param request - UpdateEgressProxyConfigurationAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEgressProxyConfigurationAttributeResponse
   */
  async updateEgressProxyConfigurationAttributeWithOptions(request: $_model.UpdateEgressProxyConfigurationAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEgressProxyConfigurationAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.defaultRulePhaseActions)) {
      bodyFlat["DefaultRulePhaseActions"] = request.defaultRulePhaseActions;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.egressProxyConfigurationId)) {
      body["EgressProxyConfigurationId"] = request.egressProxyConfigurationId;
    }

    if (!$dara.isNull(request.egressProxyConfigurationName)) {
      body["EgressProxyConfigurationName"] = request.egressProxyConfigurationName;
    }

    if (!$dara.isNull(request.egressProxyRuleGroups)) {
      bodyFlat["EgressProxyRuleGroups"] = request.egressProxyRuleGroups;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEgressProxyConfigurationAttribute",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEgressProxyConfigurationAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEgressProxyConfigurationAttributeResponse({}));
  }

  /**
   * 更新出口代理配置属性
   * 
   * @param request - UpdateEgressProxyConfigurationAttributeRequest
   * @returns UpdateEgressProxyConfigurationAttributeResponse
   */
  async updateEgressProxyConfigurationAttribute(request: $_model.UpdateEgressProxyConfigurationAttributeRequest): Promise<$_model.UpdateEgressProxyConfigurationAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEgressProxyConfigurationAttributeWithOptions(request, runtime);
  }

  /**
   * 修改出口代理网关属性
   * 
   * @param request - UpdateEgressProxyGatewayAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEgressProxyGatewayAttributeResponse
   */
  async updateEgressProxyGatewayAttributeWithOptions(request: $_model.UpdateEgressProxyGatewayAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEgressProxyGatewayAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addListenerProperties)) {
      bodyFlat["AddListenerProperties"] = request.addListenerProperties;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.defaultEgressProxyIpPoolId)) {
      body["DefaultEgressProxyIpPoolId"] = request.defaultEgressProxyIpPoolId;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.egressProxyGatewayId)) {
      body["EgressProxyGatewayId"] = request.egressProxyGatewayId;
    }

    if (!$dara.isNull(request.egressProxyGatewayName)) {
      body["EgressProxyGatewayName"] = request.egressProxyGatewayName;
    }

    if (!$dara.isNull(request.removeListenerProperties)) {
      bodyFlat["RemoveListenerProperties"] = request.removeListenerProperties;
    }

    if (!$dara.isNull(request.tlsInterceptProperties)) {
      bodyFlat["TlsInterceptProperties"] = request.tlsInterceptProperties;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEgressProxyGatewayAttribute",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEgressProxyGatewayAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEgressProxyGatewayAttributeResponse({}));
  }

  /**
   * 修改出口代理网关属性
   * 
   * @param request - UpdateEgressProxyGatewayAttributeRequest
   * @returns UpdateEgressProxyGatewayAttributeResponse
   */
  async updateEgressProxyGatewayAttribute(request: $_model.UpdateEgressProxyGatewayAttributeRequest): Promise<$_model.UpdateEgressProxyGatewayAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEgressProxyGatewayAttributeWithOptions(request, runtime);
  }

  /**
   * 更新出口代理地址池属性
   * 
   * @remarks
   * ## 请求说明
   * - `EgressProxyIpPoolId` 是必填参数，用来指定要更新的出口地址池ID。
   * - `DryRun` 参数可以设置为 `true` 来预检此次请求而不实际执行更改，默认值为 `false`。
   * - `Scheduler` 和 `HashFactor` 参数用于定义出口IP的选择逻辑及相关的哈希因子，可根据具体需求进行设置。
   * - 其他参数如 `EgressProxyIpPoolName`, `Description` 等均为可选项，提供给用户根据需要自定义出口地址池的名字和描述等信息。
   * 
   * @param request - UpdateEgressProxyIpPoolAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEgressProxyIpPoolAttributeResponse
   */
  async updateEgressProxyIpPoolAttributeWithOptions(request: $_model.UpdateEgressProxyIpPoolAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEgressProxyIpPoolAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.egressProxyIpPoolId)) {
      body["EgressProxyIpPoolId"] = request.egressProxyIpPoolId;
    }

    if (!$dara.isNull(request.egressProxyIpPoolName)) {
      body["EgressProxyIpPoolName"] = request.egressProxyIpPoolName;
    }

    if (!$dara.isNull(request.hashFactor)) {
      body["HashFactor"] = request.hashFactor;
    }

    if (!$dara.isNull(request.hashHeaderName)) {
      body["HashHeaderName"] = request.hashHeaderName;
    }

    if (!$dara.isNull(request.scheduler)) {
      body["Scheduler"] = request.scheduler;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEgressProxyIpPoolAttribute",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEgressProxyIpPoolAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEgressProxyIpPoolAttributeResponse({}));
  }

  /**
   * 更新出口代理地址池属性
   * 
   * @remarks
   * ## 请求说明
   * - `EgressProxyIpPoolId` 是必填参数，用来指定要更新的出口地址池ID。
   * - `DryRun` 参数可以设置为 `true` 来预检此次请求而不实际执行更改，默认值为 `false`。
   * - `Scheduler` 和 `HashFactor` 参数用于定义出口IP的选择逻辑及相关的哈希因子，可根据具体需求进行设置。
   * - 其他参数如 `EgressProxyIpPoolName`, `Description` 等均为可选项，提供给用户根据需要自定义出口地址池的名字和描述等信息。
   * 
   * @param request - UpdateEgressProxyIpPoolAttributeRequest
   * @returns UpdateEgressProxyIpPoolAttributeResponse
   */
  async updateEgressProxyIpPoolAttribute(request: $_model.UpdateEgressProxyIpPoolAttributeRequest): Promise<$_model.UpdateEgressProxyIpPoolAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEgressProxyIpPoolAttributeWithOptions(request, runtime);
  }

  /**
   * 更新出口代理规则组属性
   * 
   * @param request - UpdateEgressProxyRuleGroupAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEgressProxyRuleGroupAttributeResponse
   */
  async updateEgressProxyRuleGroupAttributeWithOptions(request: $_model.UpdateEgressProxyRuleGroupAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEgressProxyRuleGroupAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.egressProxyIpPoolId)) {
      body["EgressProxyIpPoolId"] = request.egressProxyIpPoolId;
    }

    if (!$dara.isNull(request.egressProxyRuleGroupId)) {
      body["EgressProxyRuleGroupId"] = request.egressProxyRuleGroupId;
    }

    if (!$dara.isNull(request.egressProxyRuleGroupName)) {
      body["EgressProxyRuleGroupName"] = request.egressProxyRuleGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEgressProxyRuleGroupAttribute",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEgressProxyRuleGroupAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEgressProxyRuleGroupAttributeResponse({}));
  }

  /**
   * 更新出口代理规则组属性
   * 
   * @param request - UpdateEgressProxyRuleGroupAttributeRequest
   * @returns UpdateEgressProxyRuleGroupAttributeResponse
   */
  async updateEgressProxyRuleGroupAttribute(request: $_model.UpdateEgressProxyRuleGroupAttributeRequest): Promise<$_model.UpdateEgressProxyRuleGroupAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEgressProxyRuleGroupAttributeWithOptions(request, runtime);
  }

  /**
   * 批量更新出口代理规则属性
   * 
   * @param request - UpdateEgressProxyRulesAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEgressProxyRulesAttributeResponse
   */
  async updateEgressProxyRulesAttributeWithOptions(request: $_model.UpdateEgressProxyRulesAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEgressProxyRulesAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.egressProxyRuleGroupId)) {
      body["EgressProxyRuleGroupId"] = request.egressProxyRuleGroupId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.egressProxyRules)) {
      bodyFlat["EgressProxyRules"] = request.egressProxyRules;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEgressProxyRulesAttribute",
      version: "2026-07-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEgressProxyRulesAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEgressProxyRulesAttributeResponse({}));
  }

  /**
   * 批量更新出口代理规则属性
   * 
   * @param request - UpdateEgressProxyRulesAttributeRequest
   * @returns UpdateEgressProxyRulesAttributeResponse
   */
  async updateEgressProxyRulesAttribute(request: $_model.UpdateEgressProxyRulesAttributeRequest): Promise<$_model.UpdateEgressProxyRulesAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEgressProxyRulesAttributeWithOptions(request, runtime);
  }

}
