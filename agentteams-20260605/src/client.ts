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
    this._endpoint = this.getEndpoint("agentteams", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 绑定上游身份提供商
   * 
   * @param request - BindIdentityProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindIdentityProviderResponse
   */
  async bindIdentityProviderWithOptions(request: $_model.BindIdentityProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindIdentityProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderType)) {
      query["IdentityProviderType"] = request.identityProviderType;
    }

    if (!$dara.isNull(request.idpMetadata)) {
      query["IdpMetadata"] = request.idpMetadata;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.loginEnabled)) {
      query["LoginEnabled"] = request.loginEnabled;
    }

    if (!$dara.isNull(request.syncEnabled)) {
      query["SyncEnabled"] = request.syncEnabled;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindIdentityProvider",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindIdentityProviderResponse>(await this.callApi(params, req, runtime), new $_model.BindIdentityProviderResponse({}));
  }

  /**
   * 绑定上游身份提供商
   * 
   * @param request - BindIdentityProviderRequest
   * @returns BindIdentityProviderResponse
   */
  async bindIdentityProvider(request: $_model.BindIdentityProviderRequest): Promise<$_model.BindIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindIdentityProviderWithOptions(request, runtime);
  }

  /**
   * 为指定AgentTeams实例异步开通并配置阿里云公网NAT网关。
   * 
   * @remarks
   * ## 请求说明
   * - 本接口用于为特定的AgentTeams实例创建公网NAT网关，并自动完成EIP申请、绑定以及SNAT规则的设置。
   * - 接口调用后将返回一个异步任务ID，实际的NAT网关、EIP及SNAT资源ID会在异步任务完成后通过任务结果提供。
   * - NAT网关名称由系统自动生成，格式为`magic-create-for-vpc-{vpcId}`。
   * - 支持GET和POST方法进行请求。
   * - `eipBandwidth`参数指定了自动申请EIP时的带宽大小，默认值为5Mbps，范围在1-200Mbps之间。
   * - 如果`instanceId`为空或无效，或者提供的`eipBandwidth`不在允许范围内，API将返回错误响应。
   * 
   * @param request - ConfigureNatGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigureNatGatewayResponse
   */
  async configureNatGatewayWithOptions(request: $_model.ConfigureNatGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigureNatGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.eipAllocationId)) {
      query["EipAllocationId"] = request.eipAllocationId;
    }

    if (!$dara.isNull(request.eipBandwidth)) {
      query["EipBandwidth"] = request.eipBandwidth;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.natGatewayInstanceId)) {
      query["NatGatewayInstanceId"] = request.natGatewayInstanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigureNatGateway",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigureNatGatewayResponse>(await this.callApi(params, req, runtime), new $_model.ConfigureNatGatewayResponse({}));
  }

  /**
   * 为指定AgentTeams实例异步开通并配置阿里云公网NAT网关。
   * 
   * @remarks
   * ## 请求说明
   * - 本接口用于为特定的AgentTeams实例创建公网NAT网关，并自动完成EIP申请、绑定以及SNAT规则的设置。
   * - 接口调用后将返回一个异步任务ID，实际的NAT网关、EIP及SNAT资源ID会在异步任务完成后通过任务结果提供。
   * - NAT网关名称由系统自动生成，格式为`magic-create-for-vpc-{vpcId}`。
   * - 支持GET和POST方法进行请求。
   * - `eipBandwidth`参数指定了自动申请EIP时的带宽大小，默认值为5Mbps，范围在1-200Mbps之间。
   * - 如果`instanceId`为空或无效，或者提供的`eipBandwidth`不在允许范围内，API将返回错误响应。
   * 
   * @param request - ConfigureNatGatewayRequest
   * @returns ConfigureNatGatewayResponse
   */
  async configureNatGateway(request: $_model.ConfigureNatGatewayRequest): Promise<$_model.ConfigureNatGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configureNatGatewayWithOptions(request, runtime);
  }

  /**
   * 创建凭证
   * 
   * @param request - CreateCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCredentialResponse
   */
  async createCredentialWithOptions(request: $_model.CreateCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKey)) {
      body["ApiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCredential",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCredentialResponse>(await this.callApi(params, req, runtime), new $_model.CreateCredentialResponse({}));
  }

  /**
   * 创建凭证
   * 
   * @param request - CreateCredentialRequest
   * @returns CreateCredentialResponse
   */
  async createCredential(request: $_model.CreateCredentialRequest): Promise<$_model.CreateCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCredentialWithOptions(request, runtime);
  }

  /**
   * 用于创建指定配置的集群实例。
   * 
   * @remarks
   * ## 请求说明
   * - 本接口支持通过表单参数或 query 参数传递请求信息。
   * - `instanceSpec` 和 `networkType` 等部分参数有默认值，若未指定则使用默认值。
   * - 必须提供 `instanceName`, `regionId`, `vpcId`, 和 `vSwitchId` 参数。
   * - `networkType` 支持三种选项：`PRIVATE_PUBNET`, `PRIVATE_NET`, `PUB_NET`，默认为 `PRIVATE_NET`。
   * - 如果指定了 `zoneId`，则会尝试在该可用区创建实例；否则将根据系统策略选择合适的可用区。
   * 
   * @param tmpReq - CreateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(tmpReq: $_model.CreateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.zones)) {
      request.zonesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.zones, "Zones", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceSpec)) {
      query["InstanceSpec"] = request.instanceSpec;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zonesShrink)) {
      query["Zones"] = request.zonesShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.paymentType)) {
      body["PaymentType"] = request.paymentType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstance",
      version: "2026-06-05",
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
   * 用于创建指定配置的集群实例。
   * 
   * @remarks
   * ## 请求说明
   * - 本接口支持通过表单参数或 query 参数传递请求信息。
   * - `instanceSpec` 和 `networkType` 等部分参数有默认值，若未指定则使用默认值。
   * - 必须提供 `instanceName`, `regionId`, `vpcId`, 和 `vSwitchId` 参数。
   * - `networkType` 支持三种选项：`PRIVATE_PUBNET`, `PRIVATE_NET`, `PUB_NET`，默认为 `PRIVATE_NET`。
   * - 如果指定了 `zoneId`，则会尝试在该可用区创建实例；否则将根据系统策略选择合适的可用区。
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: $_model.CreateInstanceRequest): Promise<$_model.CreateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  /**
   * 创建MCP
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有AgentTeams实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param tmpReq - CreateMcpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMcpResponse
   */
  async createMcpWithOptions(tmpReq: $_model.CreateMcpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMcpResponse> {
    tmpReq.validate();
    let request = new $_model.CreateMcpShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.addresses)) {
      request.addressesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addresses, "Addresses", "json");
    }

    let query = { };
    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addressesShrink)) {
      body["Addresses"] = request.addressesShrink;
    }

    if (!$dara.isNull(request.authConfig)) {
      body["AuthConfig"] = request.authConfig;
    }

    if (!$dara.isNull(request.authEnabled)) {
      body["AuthEnabled"] = request.authEnabled;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.createType)) {
      body["CreateType"] = request.createType;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.swaggerConfig)) {
      body["SwaggerConfig"] = request.swaggerConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMcp",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMcpResponse>(await this.callApi(params, req, runtime), new $_model.CreateMcpResponse({}));
  }

  /**
   * 创建MCP
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有AgentTeams实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param request - CreateMcpRequest
   * @returns CreateMcpResponse
   */
  async createMcp(request: $_model.CreateMcpRequest): Promise<$_model.CreateMcpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMcpWithOptions(request, runtime);
  }

  /**
   * 创建模型
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有AgentTeams实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param tmpReq - CreateModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModelResponse
   */
  async createModelWithOptions(tmpReq: $_model.CreateModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateModelResponse> {
    tmpReq.validate();
    let request = new $_model.CreateModelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.protocols)) {
      request.protocolsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.protocols, "Protocols", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.protocolsShrink)) {
      body["Protocols"] = request.protocolsShrink;
    }

    if (!$dara.isNull(request.provider)) {
      body["Provider"] = request.provider;
    }

    if (!$dara.isNull(request.providerId)) {
      body["ProviderId"] = request.providerId;
    }

    if (!$dara.isNull(request.providerName)) {
      body["ProviderName"] = request.providerName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateModel",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateModelResponse>(await this.callApi(params, req, runtime), new $_model.CreateModelResponse({}));
  }

  /**
   * 创建模型
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有AgentTeams实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param request - CreateModelRequest
   * @returns CreateModelResponse
   */
  async createModel(request: $_model.CreateModelRequest): Promise<$_model.CreateModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createModelWithOptions(request, runtime);
  }

  /**
   * 创建模型
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有AgentTeams实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param tmpReq - CreateModelProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModelProviderResponse
   */
  async createModelProviderWithOptions(tmpReq: $_model.CreateModelProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateModelProviderResponse> {
    tmpReq.validate();
    let request = new $_model.CreateModelProviderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.apiKeys)) {
      request.apiKeysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.apiKeys, "ApiKeys", "json");
    }

    if (!$dara.isNull(tmpReq.protocols)) {
      request.protocolsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.protocols, "Protocols", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.address)) {
      body["Address"] = request.address;
    }

    if (!$dara.isNull(request.apiKeysShrink)) {
      body["ApiKeys"] = request.apiKeysShrink;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.protocolsShrink)) {
      body["Protocols"] = request.protocolsShrink;
    }

    if (!$dara.isNull(request.provider)) {
      body["Provider"] = request.provider;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateModelProvider",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateModelProviderResponse>(await this.callApi(params, req, runtime), new $_model.CreateModelProviderResponse({}));
  }

  /**
   * 创建模型
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有AgentTeams实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param request - CreateModelProviderRequest
   * @returns CreateModelProviderResponse
   */
  async createModelProvider(request: $_model.CreateModelProviderRequest): Promise<$_model.CreateModelProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createModelProviderWithOptions(request, runtime);
  }

  /**
   * 用于创建指定实例的Endpoint，支持多种组件和网关类型。
   * 
   * @remarks
   * ## 请求说明
   * - 当前controller使用的是普通参数绑定，不是`@RequestBody`，因此参数更适合按query/form方式传递。
   * - `domain`字段会在服务端进行`trim + lowerCase`处理。
   * - `query`和`headers`必须是JSON object字符串格式，不能为数组。
   * - 创建操作仅将数据保存到数据库；只有在更新时，如果满足`ELEMENT/MATRIX + AI_GATEWAY + INTERNET`且域名或证书发生变化，才会触发AI Gateway域名同步逻辑。
   * 
   * @param request - CreateServiceEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceEndpointResponse
   */
  async createServiceEndpointWithOptions(request: $_model.CreateServiceEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!$dara.isNull(request.component)) {
      query["Component"] = request.component;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceEndpoint",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServiceEndpointResponse>(await this.callApi(params, req, runtime), new $_model.CreateServiceEndpointResponse({}));
  }

  /**
   * 用于创建指定实例的Endpoint，支持多种组件和网关类型。
   * 
   * @remarks
   * ## 请求说明
   * - 当前controller使用的是普通参数绑定，不是`@RequestBody`，因此参数更适合按query/form方式传递。
   * - `domain`字段会在服务端进行`trim + lowerCase`处理。
   * - `query`和`headers`必须是JSON object字符串格式，不能为数组。
   * - 创建操作仅将数据保存到数据库；只有在更新时，如果满足`ELEMENT/MATRIX + AI_GATEWAY + INTERNET`且域名或证书发生变化，才会触发AI Gateway域名同步逻辑。
   * 
   * @param request - CreateServiceEndpointRequest
   * @returns CreateServiceEndpointResponse
   */
  async createServiceEndpoint(request: $_model.CreateServiceEndpointRequest): Promise<$_model.CreateServiceEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceEndpointWithOptions(request, runtime);
  }

  /**
   * 创建团队
   * 
   * @param tmpReq - CreateTeamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTeamResponse
   */
  async createTeamWithOptions(tmpReq: $_model.CreateTeamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTeamResponse> {
    tmpReq.validate();
    let request = new $_model.CreateTeamShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.teamMembers)) {
      request.teamMembersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.teamMembers, "TeamMembers", "json");
    }

    let query = { };
    if (!$dara.isNull(request.adminName)) {
      query["AdminName"] = request.adminName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.teamMembersShrink)) {
      query["TeamMembers"] = request.teamMembersShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTeam",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTeamResponse>(await this.callApi(params, req, runtime), new $_model.CreateTeamResponse({}));
  }

  /**
   * 创建团队
   * 
   * @param request - CreateTeamRequest
   * @returns CreateTeamResponse
   */
  async createTeam(request: $_model.CreateTeamRequest): Promise<$_model.CreateTeamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTeamWithOptions(request, runtime);
  }

  /**
   * 创建用户
   * 
   * @param request - CreateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserResponse
   */
  async createUserWithOptions(request: $_model.CreateUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authMethod)) {
      query["AuthMethod"] = request.authMethod;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.note)) {
      query["Note"] = request.note;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUser",
      version: "2026-06-05",
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
   * 创建用户
   * 
   * @param request - CreateUserRequest
   * @returns CreateUserResponse
   */
  async createUser(request: $_model.CreateUserRequest): Promise<$_model.CreateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  /**
   * 创建Worker
   * 
   * @param tmpReq - CreateWorkerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkerResponse
   */
  async createWorkerWithOptions(tmpReq: $_model.CreateWorkerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWorkerResponse> {
    tmpReq.validate();
    let request = new $_model.CreateWorkerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.channels)) {
      request.channelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.channels, "Channels", "json");
    }

    if (!$dara.isNull(tmpReq.credentials)) {
      request.credentialsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentials, "Credentials", "json");
    }

    if (!$dara.isNull(tmpReq.groups)) {
      request.groupsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groups, "Groups", "json");
    }

    if (!$dara.isNull(tmpReq.limitConfig)) {
      request.limitConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.limitConfig, "LimitConfig", "json");
    }

    if (!$dara.isNull(tmpReq.mcpServers)) {
      request.mcpServersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.mcpServers, "McpServers", "json");
    }

    if (!$dara.isNull(tmpReq.model)) {
      request.modelShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.model, "Model", "json");
    }

    if (!$dara.isNull(tmpReq.skills)) {
      request.skillsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.skills, "Skills", "json");
    }

    if (!$dara.isNull(tmpReq.subagents)) {
      request.subagentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.subagents, "Subagents", "json");
    }

    if (!$dara.isNull(tmpReq.template)) {
      request.templateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.template, "Template", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentType)) {
      query["AgentType"] = request.agentType;
    }

    if (!$dara.isNull(request.agents)) {
      query["Agents"] = request.agents;
    }

    if (!$dara.isNull(request.channelsShrink)) {
      query["Channels"] = request.channelsShrink;
    }

    if (!$dara.isNull(request.deployType)) {
      query["DeployType"] = request.deployType;
    }

    if (!$dara.isNull(request.groupsShrink)) {
      query["Groups"] = request.groupsShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.limitConfigShrink)) {
      query["LimitConfig"] = request.limitConfigShrink;
    }

    if (!$dara.isNull(request.mcpServersShrink)) {
      query["McpServers"] = request.mcpServersShrink;
    }

    if (!$dara.isNull(request.modelShrink)) {
      query["Model"] = request.modelShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.skillsShrink)) {
      query["Skills"] = request.skillsShrink;
    }

    if (!$dara.isNull(request.soul)) {
      query["Soul"] = request.soul;
    }

    if (!$dara.isNull(request.subagentsShrink)) {
      query["Subagents"] = request.subagentsShrink;
    }

    if (!$dara.isNull(request.templateShrink)) {
      query["Template"] = request.templateShrink;
    }

    if (!$dara.isNull(request.versionCode)) {
      query["VersionCode"] = request.versionCode;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.credentialsShrink)) {
      body["Credentials"] = request.credentialsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWorker",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWorkerResponse>(await this.callApi(params, req, runtime), new $_model.CreateWorkerResponse({}));
  }

  /**
   * 创建Worker
   * 
   * @param request - CreateWorkerRequest
   * @returns CreateWorkerResponse
   */
  async createWorker(request: $_model.CreateWorkerRequest): Promise<$_model.CreateWorkerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWorkerWithOptions(request, runtime);
  }

  /**
   * 创建Worker本地纳管启动Token
   * 
   * @param request - CreateWorkerBootstrapTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkerBootstrapTokenResponse
   */
  async createWorkerBootstrapTokenWithOptions(request: $_model.CreateWorkerBootstrapTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWorkerBootstrapTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWorkerBootstrapToken",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWorkerBootstrapTokenResponse>(await this.callApi(params, req, runtime), new $_model.CreateWorkerBootstrapTokenResponse({}));
  }

  /**
   * 创建Worker本地纳管启动Token
   * 
   * @param request - CreateWorkerBootstrapTokenRequest
   * @returns CreateWorkerBootstrapTokenResponse
   */
  async createWorkerBootstrapToken(request: $_model.CreateWorkerBootstrapTokenRequest): Promise<$_model.CreateWorkerBootstrapTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWorkerBootstrapTokenWithOptions(request, runtime);
  }

  /**
   * 删除凭证
   * 
   * @param request - DeleteCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCredentialResponse
   */
  async deleteCredentialWithOptions(request: $_model.DeleteCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCredential",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCredentialResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCredentialResponse({}));
  }

  /**
   * 删除凭证
   * 
   * @param request - DeleteCredentialRequest
   * @returns DeleteCredentialResponse
   */
  async deleteCredential(request: $_model.DeleteCredentialRequest): Promise<$_model.DeleteCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCredentialWithOptions(request, runtime);
  }

  /**
   * 用于释放指定的AgentTeams实例，并清理相关资源。
   * 
   * @remarks
   * ## 请求说明
   * - 本API支持`GET`和`POST`方法，两者语义相同。
   * - 使用`POST`方法时，参数通过`application/x-www-form-urlencoded`格式提交。
   * - 当前实例状态为`CREATING`、`DELETING`或`DELETED`时，请求将被拒绝。
   * - 成功调用后，实例状态将首先更改为`DELETING`，实际的资源清理过程由后台异步执行。
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
      version: "2026-06-05",
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
   * 用于释放指定的AgentTeams实例，并清理相关资源。
   * 
   * @remarks
   * ## 请求说明
   * - 本API支持`GET`和`POST`方法，两者语义相同。
   * - 使用`POST`方法时，参数通过`application/x-www-form-urlencoded`格式提交。
   * - 当前实例状态为`CREATING`、`DELETING`或`DELETED`时，请求将被拒绝。
   * - 成功调用后，实例状态将首先更改为`DELETING`，实际的资源清理过程由后台异步执行。
   * 
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(request: $_model.DeleteInstanceRequest): Promise<$_model.DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  /**
   * 删除MCP
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有AgentTeams实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param request - DeleteMcpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMcpResponse
   */
  async deleteMcpWithOptions(request: $_model.DeleteMcpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMcpResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMcp",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMcpResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMcpResponse({}));
  }

  /**
   * 删除MCP
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有AgentTeams实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param request - DeleteMcpRequest
   * @returns DeleteMcpResponse
   */
  async deleteMcp(request: $_model.DeleteMcpRequest): Promise<$_model.DeleteMcpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMcpWithOptions(request, runtime);
  }

  /**
   * 删除模型
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有AgentTeams实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param request - DeleteModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelResponse
   */
  async deleteModelWithOptions(request: $_model.DeleteModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteModelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.providerId)) {
      body["ProviderId"] = request.providerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteModel",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteModelResponse>(await this.callApi(params, req, runtime), new $_model.DeleteModelResponse({}));
  }

  /**
   * 删除模型
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有AgentTeams实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param request - DeleteModelRequest
   * @returns DeleteModelResponse
   */
  async deleteModel(request: $_model.DeleteModelRequest): Promise<$_model.DeleteModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteModelWithOptions(request, runtime);
  }

  /**
   * 删除模型供应商
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有AgentTeams实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param request - DeleteModelProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelProviderResponse
   */
  async deleteModelProviderWithOptions(request: $_model.DeleteModelProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteModelProviderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteModelProvider",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteModelProviderResponse>(await this.callApi(params, req, runtime), new $_model.DeleteModelProviderResponse({}));
  }

  /**
   * 删除模型供应商
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有AgentTeams实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param request - DeleteModelProviderRequest
   * @returns DeleteModelProviderResponse
   */
  async deleteModelProvider(request: $_model.DeleteModelProviderRequest): Promise<$_model.DeleteModelProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteModelProviderWithOptions(request, runtime);
  }

  /**
   * 用于删除指定AgentTeams实例下的endpoint，并清理相关资源。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口支持通过GET或POST方法调用。
   * - 如果目标endpoint是`WORKER`类型，系统将自动清理与之关联的APIG/AI Gateway云资源及KubeOne worker service配置。
   * - 请求参数必须包含`instanceId`和`endpointId`，且不能为空。
   * - 成功响应会返回HTTP状态码200以及成功标志；错误响应则根据具体情况返回相应的HTTP状态码（如400、404、409）及错误信息。
   * 
   * @param request - DeleteServiceEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceEndpointResponse
   */
  async deleteServiceEndpointWithOptions(request: $_model.DeleteServiceEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteServiceEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteServiceEndpoint",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteServiceEndpointResponse>(await this.callApi(params, req, runtime), new $_model.DeleteServiceEndpointResponse({}));
  }

  /**
   * 用于删除指定AgentTeams实例下的endpoint，并清理相关资源。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口支持通过GET或POST方法调用。
   * - 如果目标endpoint是`WORKER`类型，系统将自动清理与之关联的APIG/AI Gateway云资源及KubeOne worker service配置。
   * - 请求参数必须包含`instanceId`和`endpointId`，且不能为空。
   * - 成功响应会返回HTTP状态码200以及成功标志；错误响应则根据具体情况返回相应的HTTP状态码（如400、404、409）及错误信息。
   * 
   * @param request - DeleteServiceEndpointRequest
   * @returns DeleteServiceEndpointResponse
   */
  async deleteServiceEndpoint(request: $_model.DeleteServiceEndpointRequest): Promise<$_model.DeleteServiceEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteServiceEndpointWithOptions(request, runtime);
  }

  /**
   * 删除团队
   * 
   * @param request - DeleteTeamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTeamResponse
   */
  async deleteTeamWithOptions(request: $_model.DeleteTeamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTeamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTeam",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTeamResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTeamResponse({}));
  }

  /**
   * 删除团队
   * 
   * @param request - DeleteTeamRequest
   * @returns DeleteTeamResponse
   */
  async deleteTeam(request: $_model.DeleteTeamRequest): Promise<$_model.DeleteTeamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTeamWithOptions(request, runtime);
  }

  /**
   * 删除用户
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

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUser",
      version: "2026-06-05",
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
   * 删除用户
   * 
   * @param request - DeleteUserRequest
   * @returns DeleteUserResponse
   */
  async deleteUser(request: $_model.DeleteUserRequest): Promise<$_model.DeleteUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  /**
   * 删除Worker
   * 
   * @param request - DeleteWorkerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkerResponse
   */
  async deleteWorkerWithOptions(request: $_model.DeleteWorkerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWorkerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorker",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWorkerResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWorkerResponse({}));
  }

  /**
   * 删除Worker
   * 
   * @param request - DeleteWorkerRequest
   * @returns DeleteWorkerResponse
   */
  async deleteWorker(request: $_model.DeleteWorkerRequest): Promise<$_model.DeleteWorkerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWorkerWithOptions(request, runtime);
  }

  /**
   * 查询凭证详情
   * 
   * @param request - GetCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCredentialResponse
   */
  async getCredentialWithOptions(request: $_model.GetCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCredential",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCredentialResponse>(await this.callApi(params, req, runtime), new $_model.GetCredentialResponse({}));
  }

  /**
   * 查询凭证详情
   * 
   * @param request - GetCredentialRequest
   * @returns GetCredentialResponse
   */
  async getCredential(request: $_model.GetCredentialRequest): Promise<$_model.GetCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCredentialWithOptions(request, runtime);
  }

  /**
   * 查询指定类型的上游身份提供商详情
   * 
   * @param request - GetIdentityProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIdentityProviderResponse
   */
  async getIdentityProviderWithOptions(request: $_model.GetIdentityProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIdentityProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderType)) {
      query["IdentityProviderType"] = request.identityProviderType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIdentityProvider",
      version: "2026-06-05",
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
   * 查询指定类型的上游身份提供商详情
   * 
   * @param request - GetIdentityProviderRequest
   * @returns GetIdentityProviderResponse
   */
  async getIdentityProvider(request: $_model.GetIdentityProviderRequest): Promise<$_model.GetIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIdentityProviderWithOptions(request, runtime);
  }

  /**
   * 通过实例ID查询指定实例的详细信息。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口支持`GET`和`POST`方法。
   * - 请求时必须在头部包含`X-User-Id`，用于校验实例归属。
   * - `X-Acs-Request-Id`为可选项，如果提供，则响应中的`requestId`将优先使用此值。
   * - 必须通过`instanceId`参数指定要查询的实例。
   * - 成功响应会返回实例的详细配置信息及状态。
   * - 如果请求失败，根据错误类型返回相应的HTTP状态码及错误消息。
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
      version: "2026-06-05",
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
   * 通过实例ID查询指定实例的详细信息。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口支持`GET`和`POST`方法。
   * - 请求时必须在头部包含`X-User-Id`，用于校验实例归属。
   * - `X-Acs-Request-Id`为可选项，如果提供，则响应中的`requestId`将优先使用此值。
   * - 必须通过`instanceId`参数指定要查询的实例。
   * - 成功响应会返回实例的详细配置信息及状态。
   * - 如果请求失败，根据错误类型返回相应的HTTP状态码及错误消息。
   * 
   * @param request - GetInstanceRequest
   * @returns GetInstanceResponse
   */
  async getInstance(request: $_model.GetInstanceRequest): Promise<$_model.GetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceWithOptions(request, runtime);
  }

  /**
   * 查询指定AgentTeams实例关联的异步任务状态，支持分页。
   * 
   * @remarks
   * ## 请求说明
   * - 本接口用于查询特定AgentTeams实例下的异步任务执行状态。
   * - 目前仅支持查询与实例生命周期相关的创建实例任务。
   * - 可通过`taskCode`参数指定要查询的任务类型，默认为创建实例任务。
   * - 支持使用`maxResults`和`nextToken`进行结果分页。
   * - 当任务处于暂停(`PAUSED`)状态时，会返回用户需要采取行动的信息(`recoveryMessage`)。
   * - 注意：当前不支持通过`taskId`直接查询任务状态。
   * 
   * @param request - GetInstanceAsyncTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceAsyncTaskResponse
   */
  async getInstanceAsyncTaskWithOptions(request: $_model.GetInstanceAsyncTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceAsyncTaskResponse> {
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

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskCode)) {
      query["TaskCode"] = request.taskCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceAsyncTask",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceAsyncTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceAsyncTaskResponse({}));
  }

  /**
   * 查询指定AgentTeams实例关联的异步任务状态，支持分页。
   * 
   * @remarks
   * ## 请求说明
   * - 本接口用于查询特定AgentTeams实例下的异步任务执行状态。
   * - 目前仅支持查询与实例生命周期相关的创建实例任务。
   * - 可通过`taskCode`参数指定要查询的任务类型，默认为创建实例任务。
   * - 支持使用`maxResults`和`nextToken`进行结果分页。
   * - 当任务处于暂停(`PAUSED`)状态时，会返回用户需要采取行动的信息(`recoveryMessage`)。
   * - 注意：当前不支持通过`taskId`直接查询任务状态。
   * 
   * @param request - GetInstanceAsyncTaskRequest
   * @returns GetInstanceAsyncTaskResponse
   */
  async getInstanceAsyncTask(request: $_model.GetInstanceAsyncTaskRequest): Promise<$_model.GetInstanceAsyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceAsyncTaskWithOptions(request, runtime);
  }

  /**
   * 获取实例 OSS 挂载到 ACS 所需的 RAM 授权链接。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口支持`GET`和`POST`方法。
   * - 请求时必须在头部包含`X-User-Id`，用于校验实例归属。
   * - 必须通过`instanceId`参数指定实例，后端会根据实例信息生成授权链接。
   * - 成功响应会返回 RAM 控制台授权链接，不会创建 RAM 角色或策略。
   * 
   * @param request - GetInstanceOssMountRamAuthorizeUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceOssMountRamAuthorizeUrlResponse
   */
  async getInstanceOssMountRamAuthorizeUrlWithOptions(request: $_model.GetInstanceOssMountRamAuthorizeUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceOssMountRamAuthorizeUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceOssMountRamAuthorizeUrl",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceOssMountRamAuthorizeUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceOssMountRamAuthorizeUrlResponse({}));
  }

  /**
   * 获取实例 OSS 挂载到 ACS 所需的 RAM 授权链接。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口支持`GET`和`POST`方法。
   * - 请求时必须在头部包含`X-User-Id`，用于校验实例归属。
   * - 必须通过`instanceId`参数指定实例，后端会根据实例信息生成授权链接。
   * - 成功响应会返回 RAM 控制台授权链接，不会创建 RAM 角色或策略。
   * 
   * @param request - GetInstanceOssMountRamAuthorizeUrlRequest
   * @returns GetInstanceOssMountRamAuthorizeUrlResponse
   */
  async getInstanceOssMountRamAuthorizeUrl(request: $_model.GetInstanceOssMountRamAuthorizeUrlRequest): Promise<$_model.GetInstanceOssMountRamAuthorizeUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceOssMountRamAuthorizeUrlWithOptions(request, runtime);
  }

  /**
   * 查询MCP详情
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有AgentTeams实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param request - GetMcpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMcpResponse
   */
  async getMcpWithOptions(request: $_model.GetMcpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMcpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMcp",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMcpResponse>(await this.callApi(params, req, runtime), new $_model.GetMcpResponse({}));
  }

  /**
   * 查询MCP详情
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有AgentTeams实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param request - GetMcpRequest
   * @returns GetMcpResponse
   */
  async getMcp(request: $_model.GetMcpRequest): Promise<$_model.GetMcpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMcpWithOptions(request, runtime);
  }

  /**
   * 模型调用摘要
   * 
   * @param request - GetModelInvocationSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModelInvocationSummaryResponse
   */
  async getModelInvocationSummaryWithOptions(request: $_model.GetModelInvocationSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetModelInvocationSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetModelInvocationSummary",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetModelInvocationSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetModelInvocationSummaryResponse({}));
  }

  /**
   * 模型调用摘要
   * 
   * @param request - GetModelInvocationSummaryRequest
   * @returns GetModelInvocationSummaryResponse
   */
  async getModelInvocationSummary(request: $_model.GetModelInvocationSummaryRequest): Promise<$_model.GetModelInvocationSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getModelInvocationSummaryWithOptions(request, runtime);
  }

  /**
   * 查询模型供应商详情
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有AgentTeams实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param request - GetModelProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModelProviderResponse
   */
  async getModelProviderWithOptions(request: $_model.GetModelProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetModelProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetModelProvider",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetModelProviderResponse>(await this.callApi(params, req, runtime), new $_model.GetModelProviderResponse({}));
  }

  /**
   * 查询模型供应商详情
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有AgentTeams实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param request - GetModelProviderRequest
   * @returns GetModelProviderResponse
   */
  async getModelProvider(request: $_model.GetModelProviderRequest): Promise<$_model.GetModelProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getModelProviderWithOptions(request, runtime);
  }

  /**
   * 查询指定实例的NAT网关及其SNAT规则的配置状态。
   * 
   * @remarks
   * ## 请求说明
   * 通过此API，您可以获取特定实例关联的NAT网关配置详情及SNAT规则的状态。该接口支持GET或POST方法调用，并需要提供`instanceId`作为请求参数来指定要查询的实例。
   * ### 注意事项
   * - 确保提供的`instanceId`是有效的且属于您的账户。
   * - 根据返回的状态值（如`READY`, `NEED_CONFIGURE_NAT_GATEWAY`, `NEED_CONFIGURE_SNAT_RULE`），采取相应的操作以完成NAT网关或SNAT规则的配置。
   * - 当状态为`NEED_CONFIGURE_NAT_GATEWAY`时，表示当前VPC下没有可用的NAT网关；而`NEED_CONFIGURE_SNAT_RULE`则意味着虽然存在NAT网关但某些子网CIDR未被SNAT规则覆盖。
   * 
   * @param request - GetNatGatewayStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNatGatewayStatusResponse
   */
  async getNatGatewayStatusWithOptions(request: $_model.GetNatGatewayStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNatGatewayStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNatGatewayStatus",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNatGatewayStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetNatGatewayStatusResponse({}));
  }

  /**
   * 查询指定实例的NAT网关及其SNAT规则的配置状态。
   * 
   * @remarks
   * ## 请求说明
   * 通过此API，您可以获取特定实例关联的NAT网关配置详情及SNAT规则的状态。该接口支持GET或POST方法调用，并需要提供`instanceId`作为请求参数来指定要查询的实例。
   * ### 注意事项
   * - 确保提供的`instanceId`是有效的且属于您的账户。
   * - 根据返回的状态值（如`READY`, `NEED_CONFIGURE_NAT_GATEWAY`, `NEED_CONFIGURE_SNAT_RULE`），采取相应的操作以完成NAT网关或SNAT规则的配置。
   * - 当状态为`NEED_CONFIGURE_NAT_GATEWAY`时，表示当前VPC下没有可用的NAT网关；而`NEED_CONFIGURE_SNAT_RULE`则意味着虽然存在NAT网关但某些子网CIDR未被SNAT规则覆盖。
   * 
   * @param request - GetNatGatewayStatusRequest
   * @returns GetNatGatewayStatusResponse
   */
  async getNatGatewayStatus(request: $_model.GetNatGatewayStatusRequest): Promise<$_model.GetNatGatewayStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNatGatewayStatusWithOptions(request, runtime);
  }

  /**
   * 查询指定ID的Endpoint详细信息，支持通过实例ID进行校验。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于根据`endpointId`查询单个Endpoint的具体配置与状态信息。
   * - 可选参数`instanceId`用于验证Endpoint是否属于特定实例。
   * - 请求方式支持`GET`和`POST`，其中`GET`使用query string传递参数，而`POST`则可以通过form参数提交。
   * - 如果`endpointId`缺失或为空，则会返回`InvalidParameter`错误。
   * - 当请求的Endpoint不存在、不属于提供的实例或者不属于当前用户时，将收到相应的资源不存在类错误响应。
   * 
   * @param request - GetServiceEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceEndpointResponse
   */
  async getServiceEndpointWithOptions(request: $_model.GetServiceEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceEndpoint",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceEndpointResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceEndpointResponse({}));
  }

  /**
   * 查询指定ID的Endpoint详细信息，支持通过实例ID进行校验。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于根据`endpointId`查询单个Endpoint的具体配置与状态信息。
   * - 可选参数`instanceId`用于验证Endpoint是否属于特定实例。
   * - 请求方式支持`GET`和`POST`，其中`GET`使用query string传递参数，而`POST`则可以通过form参数提交。
   * - 如果`endpointId`缺失或为空，则会返回`InvalidParameter`错误。
   * - 当请求的Endpoint不存在、不属于提供的实例或者不属于当前用户时，将收到相应的资源不存在类错误响应。
   * 
   * @param request - GetServiceEndpointRequest
   * @returns GetServiceEndpointResponse
   */
  async getServiceEndpoint(request: $_model.GetServiceEndpointRequest): Promise<$_model.GetServiceEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceEndpointWithOptions(request, runtime);
  }

  /**
   * 任务统计摘要
   * 
   * @param request - GetTaskStatsSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskStatsSummaryResponse
   */
  async getTaskStatsSummaryWithOptions(request: $_model.GetTaskStatsSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskStatsSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskStatsSummary",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskStatsSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskStatsSummaryResponse({}));
  }

  /**
   * 任务统计摘要
   * 
   * @param request - GetTaskStatsSummaryRequest
   * @returns GetTaskStatsSummaryResponse
   */
  async getTaskStatsSummary(request: $_model.GetTaskStatsSummaryRequest): Promise<$_model.GetTaskStatsSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTaskStatsSummaryWithOptions(request, runtime);
  }

  /**
   * 查询团队详情
   * 
   * @param request - GetTeamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTeamResponse
   */
  async getTeamWithOptions(request: $_model.GetTeamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTeamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTeam",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTeamResponse>(await this.callApi(params, req, runtime), new $_model.GetTeamResponse({}));
  }

  /**
   * 查询团队详情
   * 
   * @param request - GetTeamRequest
   * @returns GetTeamResponse
   */
  async getTeam(request: $_model.GetTeamRequest): Promise<$_model.GetTeamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTeamWithOptions(request, runtime);
  }

  /**
   * Token趋势统计
   * 
   * @param request - GetTokenTrendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTokenTrendResponse
   */
  async getTokenTrendWithOptions(request: $_model.GetTokenTrendRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTokenTrendResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.groupBy)) {
      query["GroupBy"] = request.groupBy;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTokenTrend",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTokenTrendResponse>(await this.callApi(params, req, runtime), new $_model.GetTokenTrendResponse({}));
  }

  /**
   * Token趋势统计
   * 
   * @param request - GetTokenTrendRequest
   * @returns GetTokenTrendResponse
   */
  async getTokenTrend(request: $_model.GetTokenTrendRequest): Promise<$_model.GetTokenTrendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTokenTrendWithOptions(request, runtime);
  }

  /**
   * 工具调用分布
   * 
   * @param request - GetToolCallDistributionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetToolCallDistributionResponse
   */
  async getToolCallDistributionWithOptions(request: $_model.GetToolCallDistributionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetToolCallDistributionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetToolCallDistribution",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetToolCallDistributionResponse>(await this.callApi(params, req, runtime), new $_model.GetToolCallDistributionResponse({}));
  }

  /**
   * 工具调用分布
   * 
   * @param request - GetToolCallDistributionRequest
   * @returns GetToolCallDistributionResponse
   */
  async getToolCallDistribution(request: $_model.GetToolCallDistributionRequest): Promise<$_model.GetToolCallDistributionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getToolCallDistributionWithOptions(request, runtime);
  }

  /**
   * 查询用户详情
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

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUser",
      version: "2026-06-05",
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
   * 查询用户详情
   * 
   * @param request - GetUserRequest
   * @returns GetUserResponse
   */
  async getUser(request: $_model.GetUserRequest): Promise<$_model.GetUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  /**
   * 获取用户初始密码
   * 
   * @param request - GetUserPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserPasswordResponse
   */
  async getUserPasswordWithOptions(request: $_model.GetUserPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserPassword",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserPasswordResponse>(await this.callApi(params, req, runtime), new $_model.GetUserPasswordResponse({}));
  }

  /**
   * 获取用户初始密码
   * 
   * @param request - GetUserPasswordRequest
   * @returns GetUserPasswordResponse
   */
  async getUserPassword(request: $_model.GetUserPasswordRequest): Promise<$_model.GetUserPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserPasswordWithOptions(request, runtime);
  }

  /**
   * 查询Worker详情
   * 
   * @param request - GetWorkerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkerResponse
   */
  async getWorkerWithOptions(request: $_model.GetWorkerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorker",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkerResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkerResponse({}));
  }

  /**
   * 查询Worker详情
   * 
   * @param request - GetWorkerRequest
   * @returns GetWorkerResponse
   */
  async getWorker(request: $_model.GetWorkerRequest): Promise<$_model.GetWorkerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkerWithOptions(request, runtime);
  }

  /**
   * 查询Worker本地纳管启动选项
   * 
   * @param request - GetWorkerBootstrapOptionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkerBootstrapOptionsResponse
   */
  async getWorkerBootstrapOptionsWithOptions(request: $_model.GetWorkerBootstrapOptionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkerBootstrapOptionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkerBootstrapOptions",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkerBootstrapOptionsResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkerBootstrapOptionsResponse({}));
  }

  /**
   * 查询Worker本地纳管启动选项
   * 
   * @param request - GetWorkerBootstrapOptionsRequest
   * @returns GetWorkerBootstrapOptionsResponse
   */
  async getWorkerBootstrapOptions(request: $_model.GetWorkerBootstrapOptionsRequest): Promise<$_model.GetWorkerBootstrapOptionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkerBootstrapOptionsWithOptions(request, runtime);
  }

  /**
   * 查询Worker最大可升级版本
   * 
   * @param request - GetWorkerMaxVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkerMaxVersionResponse
   */
  async getWorkerMaxVersionWithOptions(request: $_model.GetWorkerMaxVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkerMaxVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkerMaxVersion",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkerMaxVersionResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkerMaxVersionResponse({}));
  }

  /**
   * 查询Worker最大可升级版本
   * 
   * @param request - GetWorkerMaxVersionRequest
   * @returns GetWorkerMaxVersionResponse
   */
  async getWorkerMaxVersion(request: $_model.GetWorkerMaxVersionRequest): Promise<$_model.GetWorkerMaxVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkerMaxVersionWithOptions(request, runtime);
  }

  /**
   * Worker统计摘要
   * 
   * @param request - GetWorkerStatsSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkerStatsSummaryResponse
   */
  async getWorkerStatsSummaryWithOptions(request: $_model.GetWorkerStatsSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkerStatsSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkerStatsSummary",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkerStatsSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkerStatsSummaryResponse({}));
  }

  /**
   * Worker统计摘要
   * 
   * @param request - GetWorkerStatsSummaryRequest
   * @returns GetWorkerStatsSummaryResponse
   */
  async getWorkerStatsSummary(request: $_model.GetWorkerStatsSummaryRequest): Promise<$_model.GetWorkerStatsSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkerStatsSummaryWithOptions(request, runtime);
  }

  /**
   * 查询凭证列表
   * 
   * @param request - ListCredentialsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCredentialsResponse
   */
  async listCredentialsWithOptions(request: $_model.ListCredentialsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCredentialsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nameLike)) {
      query["NameLike"] = request.nameLike;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCredentials",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCredentialsResponse>(await this.callApi(params, req, runtime), new $_model.ListCredentialsResponse({}));
  }

  /**
   * 查询凭证列表
   * 
   * @param request - ListCredentialsRequest
   * @returns ListCredentialsResponse
   */
  async listCredentials(request: $_model.ListCredentialsRequest): Promise<$_model.ListCredentialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCredentialsWithOptions(request, runtime);
  }

  /**
   * 查询上游身份提供商绑定列表
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

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIdentityProviders",
      version: "2026-06-05",
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
   * 查询上游身份提供商绑定列表
   * 
   * @param request - ListIdentityProvidersRequest
   * @returns ListIdentityProvidersResponse
   */
  async listIdentityProviders(request: $_model.ListIdentityProvidersRequest): Promise<$_model.ListIdentityProvidersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIdentityProvidersWithOptions(request, runtime);
  }

  /**
   * 用于查询符合条件的实例列表，并支持分页和模糊匹配。
   * 
   * @remarks
   * ## 请求说明
   * - **分页规则**：
   *   - 如果传了 `NextToken`，优先按 `NextToken` 解析 offset。
   *   - 如果没传 `NextToken`，则使用 `skip`。
   *   - `MaxResults` 的取值范围为 1 到 100，非法值会返回 `400` 错误。
   *   - `NextToken` 必须是有效的整数，否则会返回 `400` 错误。
   *   - `skip` 的值不能小于 0，否则会返回 `400` 错误。
   * - **排序规则**：列表按创建时间倒序返回。
   * - **请求参数**：
   *   - `instanceName`：实例名称，支持模糊匹配。
   *   - `status`：实例状态。
   *   - `MaxResults`：分页大小，默认值为 20。
   *   - `NextToken`：下一页游标。
   *   - `skip`：跳过的记录数，默认值为 0。
   * 
   * @param request - ListInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(request: $_model.ListInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.skip)) {
      query["Skip"] = request.skip;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2026-06-05",
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
   * 用于查询符合条件的实例列表，并支持分页和模糊匹配。
   * 
   * @remarks
   * ## 请求说明
   * - **分页规则**：
   *   - 如果传了 `NextToken`，优先按 `NextToken` 解析 offset。
   *   - 如果没传 `NextToken`，则使用 `skip`。
   *   - `MaxResults` 的取值范围为 1 到 100，非法值会返回 `400` 错误。
   *   - `NextToken` 必须是有效的整数，否则会返回 `400` 错误。
   *   - `skip` 的值不能小于 0，否则会返回 `400` 错误。
   * - **排序规则**：列表按创建时间倒序返回。
   * - **请求参数**：
   *   - `instanceName`：实例名称，支持模糊匹配。
   *   - `status`：实例状态。
   *   - `MaxResults`：分页大小，默认值为 20。
   *   - `NextToken`：下一页游标。
   *   - `skip`：跳过的记录数，默认值为 0。
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: $_model.ListInstancesRequest): Promise<$_model.ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  /**
   * 测试模型供应商和模型
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有Magic实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param request - ListMcpToolsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMcpToolsResponse
   */
  async listMcpToolsWithOptions(request: $_model.ListMcpToolsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMcpToolsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMcpTools",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMcpToolsResponse>(await this.callApi(params, req, runtime), new $_model.ListMcpToolsResponse({}));
  }

  /**
   * 测试模型供应商和模型
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有Magic实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param request - ListMcpToolsRequest
   * @returns ListMcpToolsResponse
   */
  async listMcpTools(request: $_model.ListMcpToolsRequest): Promise<$_model.ListMcpToolsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMcpToolsWithOptions(request, runtime);
  }

  /**
   * 查询MCP列表
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有AgentTeams实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param request - ListMcpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMcpsResponse
   */
  async listMcpsWithOptions(request: $_model.ListMcpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMcpsResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMcps",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMcpsResponse>(await this.callApi(params, req, runtime), new $_model.ListMcpsResponse({}));
  }

  /**
   * 查询MCP列表
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有AgentTeams实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param request - ListMcpsRequest
   * @returns ListMcpsResponse
   */
  async listMcps(request: $_model.ListMcpsRequest): Promise<$_model.ListMcpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMcpsWithOptions(request, runtime);
  }

  /**
   * 查询模型供应商列表
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有AgentTeams实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param request - ListModelProvidersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelProvidersResponse
   */
  async listModelProvidersWithOptions(request: $_model.ListModelProvidersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListModelProvidersResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListModelProviders",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListModelProvidersResponse>(await this.callApi(params, req, runtime), new $_model.ListModelProvidersResponse({}));
  }

  /**
   * 查询模型供应商列表
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有AgentTeams实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param request - ListModelProvidersRequest
   * @returns ListModelProvidersResponse
   */
  async listModelProviders(request: $_model.ListModelProvidersRequest): Promise<$_model.ListModelProvidersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listModelProvidersWithOptions(request, runtime);
  }

  /**
   * 查询模型列表
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有AgentTeams实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param request - ListModelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelsResponse
   */
  async listModelsWithOptions(request: $_model.ListModelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListModelsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.providerName)) {
      query["ProviderName"] = request.providerName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListModels",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListModelsResponse>(await this.callApi(params, req, runtime), new $_model.ListModelsResponse({}));
  }

  /**
   * 查询模型列表
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有AgentTeams实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param request - ListModelsRequest
   * @returns ListModelsResponse
   */
  async listModels(request: $_model.ListModelsRequest): Promise<$_model.ListModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listModelsWithOptions(request, runtime);
  }

  /**
   * 此API用于查询指定实例下的AI网关端点列表。
   * 
   * @remarks
   * ## 请求说明
   * - `instanceId` 是必填参数，用来指定 AgentTeams 实例 ID。
   * - 可选参数包括 `component`, `serviceName`, `networkType`, 和 `domainType`，用于进一步筛选返回的端点列表。
   * - 不支持通过 `status` 参数进行筛选。
   * 
   * @param request - ListServiceEndpointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceEndpointsResponse
   */
  async listServiceEndpointsWithOptions(request: $_model.ListServiceEndpointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceEndpointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.component)) {
      query["Component"] = request.component;
    }

    if (!$dara.isNull(request.domainType)) {
      query["DomainType"] = request.domainType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.skip)) {
      query["Skip"] = request.skip;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceEndpoints",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceEndpointsResponse({}));
  }

  /**
   * 此API用于查询指定实例下的AI网关端点列表。
   * 
   * @remarks
   * ## 请求说明
   * - `instanceId` 是必填参数，用来指定 AgentTeams 实例 ID。
   * - 可选参数包括 `component`, `serviceName`, `networkType`, 和 `domainType`，用于进一步筛选返回的端点列表。
   * - 不支持通过 `status` 参数进行筛选。
   * 
   * @param request - ListServiceEndpointsRequest
   * @returns ListServiceEndpointsResponse
   */
  async listServiceEndpoints(request: $_model.ListServiceEndpointsRequest): Promise<$_model.ListServiceEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceEndpointsWithOptions(request, runtime);
  }

  /**
   * 查询用户侧APIG可用的SSL证书列表
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于获取与指定AgentTeams实例相关的SSL证书列表。
   * - 可通过`certNameLike`和`domainName`参数进行模糊搜索或精确匹配证书名称及绑定域名。
   * - 分页参数`pageNumber`和`pageSize`允许客户端控制返回结果的数量和页码，默认每页显示10条记录。
   * - 成功响应将包含请求ID、是否成功标志、错误代码（如果有的话）、HTTP状态码、本次请求的最大结果数、下一页标记（如果有更多数据的话）、总证书数量以及具体的证书详情列表。
   * 
   * @param request - ListSslCertsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSslCertsResponse
   */
  async listSslCertsWithOptions(request: $_model.ListSslCertsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSslCertsResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSslCerts",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSslCertsResponse>(await this.callApi(params, req, runtime), new $_model.ListSslCertsResponse({}));
  }

  /**
   * 查询用户侧APIG可用的SSL证书列表
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于获取与指定AgentTeams实例相关的SSL证书列表。
   * - 可通过`certNameLike`和`domainName`参数进行模糊搜索或精确匹配证书名称及绑定域名。
   * - 分页参数`pageNumber`和`pageSize`允许客户端控制返回结果的数量和页码，默认每页显示10条记录。
   * - 成功响应将包含请求ID、是否成功标志、错误代码（如果有的话）、HTTP状态码、本次请求的最大结果数、下一页标记（如果有更多数据的话）、总证书数量以及具体的证书详情列表。
   * 
   * @param request - ListSslCertsRequest
   * @returns ListSslCertsResponse
   */
  async listSslCerts(request: $_model.ListSslCertsRequest): Promise<$_model.ListSslCertsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSslCertsWithOptions(request, runtime);
  }

  /**
   * 团队详情列表
   * 
   * @param request - ListTeamDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTeamDetailsResponse
   */
  async listTeamDetailsWithOptions(request: $_model.ListTeamDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTeamDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTeamDetails",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTeamDetailsResponse>(await this.callApi(params, req, runtime), new $_model.ListTeamDetailsResponse({}));
  }

  /**
   * 团队详情列表
   * 
   * @param request - ListTeamDetailsRequest
   * @returns ListTeamDetailsResponse
   */
  async listTeamDetails(request: $_model.ListTeamDetailsRequest): Promise<$_model.ListTeamDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTeamDetailsWithOptions(request, runtime);
  }

  /**
   * 查询Team任务列表
   * 
   * @param request - ListTeamTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTeamTasksResponse
   */
  async listTeamTasksWithOptions(request: $_model.ListTeamTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTeamTasksResponse> {
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

    if (!$dara.isNull(request.team)) {
      query["Team"] = request.team;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTeamTasks",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTeamTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListTeamTasksResponse({}));
  }

  /**
   * 查询Team任务列表
   * 
   * @param request - ListTeamTasksRequest
   * @returns ListTeamTasksResponse
   */
  async listTeamTasks(request: $_model.ListTeamTasksRequest): Promise<$_model.ListTeamTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTeamTasksWithOptions(request, runtime);
  }

  /**
   * 查询团队列表
   * 
   * @param request - ListTeamsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTeamsResponse
   */
  async listTeamsWithOptions(request: $_model.ListTeamsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTeamsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nameLike)) {
      query["NameLike"] = request.nameLike;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTeams",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTeamsResponse>(await this.callApi(params, req, runtime), new $_model.ListTeamsResponse({}));
  }

  /**
   * 查询团队列表
   * 
   * @param request - ListTeamsRequest
   * @returns ListTeamsResponse
   */
  async listTeams(request: $_model.ListTeamsRequest): Promise<$_model.ListTeamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTeamsWithOptions(request, runtime);
  }

  /**
   * 查询用户列表
   * 
   * @param request - ListUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
   */
  async listUsersWithOptions(request: $_model.ListUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nameLike)) {
      query["NameLike"] = request.nameLike;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsers",
      version: "2026-06-05",
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
   * 查询用户列表
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: $_model.ListUsersRequest): Promise<$_model.ListUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  /**
   * Worker统计详情列表
   * 
   * @param request - ListWorkerStatsDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkerStatsDetailsResponse
   */
  async listWorkerStatsDetailsWithOptions(request: $_model.ListWorkerStatsDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkerStatsDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkerStatsDetails",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkerStatsDetailsResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkerStatsDetailsResponse({}));
  }

  /**
   * Worker统计详情列表
   * 
   * @param request - ListWorkerStatsDetailsRequest
   * @returns ListWorkerStatsDetailsResponse
   */
  async listWorkerStatsDetails(request: $_model.ListWorkerStatsDetailsRequest): Promise<$_model.ListWorkerStatsDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWorkerStatsDetailsWithOptions(request, runtime);
  }

  /**
   * 查询Worker列表
   * 
   * @param tmpReq - ListWorkersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkersResponse
   */
  async listWorkersWithOptions(tmpReq: $_model.ListWorkersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkersResponse> {
    tmpReq.validate();
    let request = new $_model.ListWorkersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.group)) {
      request.groupShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.group, "Group", "json");
    }

    if (!$dara.isNull(tmpReq.template)) {
      request.templateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.template, "Template", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentType)) {
      query["AgentType"] = request.agentType;
    }

    if (!$dara.isNull(request.credential)) {
      query["Credential"] = request.credential;
    }

    if (!$dara.isNull(request.groupShrink)) {
      query["Group"] = request.groupShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.mcp)) {
      query["Mcp"] = request.mcp;
    }

    if (!$dara.isNull(request.modelName)) {
      query["ModelName"] = request.modelName;
    }

    if (!$dara.isNull(request.modelProvider)) {
      query["ModelProvider"] = request.modelProvider;
    }

    if (!$dara.isNull(request.nameLike)) {
      query["NameLike"] = request.nameLike;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.templateShrink)) {
      query["Template"] = request.templateShrink;
    }

    if (!$dara.isNull(request.versionCode)) {
      query["VersionCode"] = request.versionCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkers",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkersResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkersResponse({}));
  }

  /**
   * 查询Worker列表
   * 
   * @param request - ListWorkersRequest
   * @returns ListWorkersResponse
   */
  async listWorkers(request: $_model.ListWorkersRequest): Promise<$_model.ListWorkersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWorkersWithOptions(request, runtime);
  }

  /**
   * 创建或更新CMS工作空间
   * 
   * @param request - PutCmsWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutCmsWorkspaceResponse
   */
  async putCmsWorkspaceWithOptions(request: $_model.PutCmsWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutCmsWorkspaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutCmsWorkspace",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutCmsWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.PutCmsWorkspaceResponse({}));
  }

  /**
   * 创建或更新CMS工作空间
   * 
   * @param request - PutCmsWorkspaceRequest
   * @returns PutCmsWorkspaceResponse
   */
  async putCmsWorkspace(request: $_model.PutCmsWorkspaceRequest): Promise<$_model.PutCmsWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putCmsWorkspaceWithOptions(request, runtime);
  }

  /**
   * 查询指定实例、worker、团队或个人的功能特性状态。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询特定`instanceId`下的不同目标（如`INSTANCE`、`WORKER`、`TEAM`、`HUMAN`）的功能特性状态。
   * - `targetScope`参数定义了查询的目标类型，根据不同的`targetScope`值，可能需要提供额外的`resourceName`参数来指定具体的资源名称。
   * - 如果提供了`featureCodes`列表，则返回这些特定功能特性的状态；否则，将返回指定`targetScope`下所有功能特性的状态。
   * - 当使用`WORKER`、`TEAM`或`HUMAN`作为`targetScope`时，请确保正确填写对应的`resourceName`。
   * - 对于`INSTANCE`级别的查询，无需提供`resourceName`。
   * - 特性支持情况受基础版本、工作器版本等因素影响，并通过`unsupportedReasonCode`和`unsupportedReason`字段给出不支持的具体原因。
   * 
   * @param request - QueryFeaturesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFeaturesResponse
   */
  async queryFeaturesWithOptions(request: $_model.QueryFeaturesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryFeaturesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.targetScope)) {
      query["TargetScope"] = request.targetScope;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryFeatures",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryFeaturesResponse>(await this.callApi(params, req, runtime), new $_model.QueryFeaturesResponse({}));
  }

  /**
   * 查询指定实例、worker、团队或个人的功能特性状态。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询特定`instanceId`下的不同目标（如`INSTANCE`、`WORKER`、`TEAM`、`HUMAN`）的功能特性状态。
   * - `targetScope`参数定义了查询的目标类型，根据不同的`targetScope`值，可能需要提供额外的`resourceName`参数来指定具体的资源名称。
   * - 如果提供了`featureCodes`列表，则返回这些特定功能特性的状态；否则，将返回指定`targetScope`下所有功能特性的状态。
   * - 当使用`WORKER`、`TEAM`或`HUMAN`作为`targetScope`时，请确保正确填写对应的`resourceName`。
   * - 对于`INSTANCE`级别的查询，无需提供`resourceName`。
   * - 特性支持情况受基础版本、工作器版本等因素影响，并通过`unsupportedReasonCode`和`unsupportedReason`字段给出不支持的具体原因。
   * 
   * @param request - QueryFeaturesRequest
   * @returns QueryFeaturesResponse
   */
  async queryFeatures(request: $_model.QueryFeaturesRequest): Promise<$_model.QueryFeaturesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryFeaturesWithOptions(request, runtime);
  }

  /**
   * 获取当前AgentTeams Resource Pool配置支持的所有可用区ID。
   * 
   * @remarks
   * ## 请求说明
   * 
   * @param request - QuerySupportedZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySupportedZonesResponse
   */
  async querySupportedZonesWithOptions(request: $_model.QuerySupportedZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySupportedZonesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySupportedZones",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySupportedZonesResponse>(await this.callApi(params, req, runtime), new $_model.QuerySupportedZonesResponse({}));
  }

  /**
   * 获取当前AgentTeams Resource Pool配置支持的所有可用区ID。
   * 
   * @remarks
   * ## 请求说明
   * 
   * @param request - QuerySupportedZonesRequest
   * @returns QuerySupportedZonesResponse
   */
  async querySupportedZones(request: $_model.QuerySupportedZonesRequest): Promise<$_model.QuerySupportedZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySupportedZonesWithOptions(request, runtime);
  }

  /**
   * 设置用户密码
   * 
   * @param request - ResetUserPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetUserPasswordResponse
   */
  async resetUserPasswordWithOptions(request: $_model.ResetUserPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetUserPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetUserPassword",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetUserPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ResetUserPasswordResponse({}));
  }

  /**
   * 设置用户密码
   * 
   * @param request - ResetUserPasswordRequest
   * @returns ResetUserPasswordResponse
   */
  async resetUserPassword(request: $_model.ResetUserPasswordRequest): Promise<$_model.ResetUserPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetUserPasswordWithOptions(request, runtime);
  }

  /**
   * 测试模型供应商和模型
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有AgentTeams实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param request - TestModelProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TestModelProviderResponse
   */
  async testModelProviderWithOptions(request: $_model.TestModelProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TestModelProviderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.modelName)) {
      body["ModelName"] = request.modelName;
    }

    if (!$dara.isNull(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.providerId)) {
      body["ProviderId"] = request.providerId;
    }

    if (!$dara.isNull(request.providerName)) {
      body["ProviderName"] = request.providerName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TestModelProvider",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TestModelProviderResponse>(await this.callApi(params, req, runtime), new $_model.TestModelProviderResponse({}));
  }

  /**
   * 测试模型供应商和模型
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有AgentTeams实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param request - TestModelProviderRequest
   * @returns TestModelProviderResponse
   */
  async testModelProvider(request: $_model.TestModelProviderRequest): Promise<$_model.TestModelProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.testModelProviderWithOptions(request, runtime);
  }

  /**
   * 解绑上游身份提供商
   * 
   * @param request - UnbindIdentityProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindIdentityProviderResponse
   */
  async unbindIdentityProviderWithOptions(request: $_model.UnbindIdentityProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindIdentityProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderType)) {
      query["IdentityProviderType"] = request.identityProviderType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindIdentityProvider",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindIdentityProviderResponse>(await this.callApi(params, req, runtime), new $_model.UnbindIdentityProviderResponse({}));
  }

  /**
   * 解绑上游身份提供商
   * 
   * @param request - UnbindIdentityProviderRequest
   * @returns UnbindIdentityProviderResponse
   */
  async unbindIdentityProvider(request: $_model.UnbindIdentityProviderRequest): Promise<$_model.UnbindIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindIdentityProviderWithOptions(request, runtime);
  }

  /**
   * 更新凭证密钥
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于更新 AgentTeams 实例下已有 Credential 的密钥明文。
   * - 仅更新 Agent Identity TokenVault 中同名 APIKeyCredentialProvider 的密钥值，不修改本地元数据（description、createTime、updateTime、status）。
   * - 响应不包含 apiKey 明文；如需绑定 Worker 明细请调用 GetCredential。
   * 
   * @param request - UpdateCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCredentialResponse
   */
  async updateCredentialWithOptions(request: $_model.UpdateCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKey)) {
      body["ApiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCredential",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCredentialResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCredentialResponse({}));
  }

  /**
   * 更新凭证密钥
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于更新 AgentTeams 实例下已有 Credential 的密钥明文。
   * - 仅更新 Agent Identity TokenVault 中同名 APIKeyCredentialProvider 的密钥值，不修改本地元数据（description、createTime、updateTime、status）。
   * - 响应不包含 apiKey 明文；如需绑定 Worker 明细请调用 GetCredential。
   * 
   * @param request - UpdateCredentialRequest
   * @returns UpdateCredentialResponse
   */
  async updateCredential(request: $_model.UpdateCredentialRequest): Promise<$_model.UpdateCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCredentialWithOptions(request, runtime);
  }

  /**
   * 更新上游身份提供商绑定
   * 
   * @param request - UpdateIdentityProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIdentityProviderResponse
   */
  async updateIdentityProviderWithOptions(request: $_model.UpdateIdentityProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIdentityProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderType)) {
      query["IdentityProviderType"] = request.identityProviderType;
    }

    if (!$dara.isNull(request.idpMetadata)) {
      query["IdpMetadata"] = request.idpMetadata;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.loginEnabled)) {
      query["LoginEnabled"] = request.loginEnabled;
    }

    if (!$dara.isNull(request.syncEnabled)) {
      query["SyncEnabled"] = request.syncEnabled;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIdentityProvider",
      version: "2026-06-05",
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
   * 更新上游身份提供商绑定
   * 
   * @param request - UpdateIdentityProviderRequest
   * @returns UpdateIdentityProviderResponse
   */
  async updateIdentityProvider(request: $_model.UpdateIdentityProviderRequest): Promise<$_model.UpdateIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIdentityProviderWithOptions(request, runtime);
  }

  /**
   * 用于更改指定AgentTeams实例的名称，支持通过GET或POST方法调用。
   * 
   * @remarks
   * ## 请求说明
   * - 推荐使用`POST`方法，并以表单形式提交参数。
   * - 当前实现不支持JSON格式的请求体，请勿尝试使用`@RequestBody`方式调用。
   * - 必须提供有效的`instanceId`和非空的`instanceName`作为参数。
   * - 该接口仅允许修改实例名称(`instanceName`)，不允许通过此接口变更命名空间(`namespace`)。
   * 
   * @param tmpReq - UpdateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceResponse
   */
  async updateInstanceWithOptions(tmpReq: $_model.UpdateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.zones)) {
      request.zonesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.zones, "Zones", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!$dara.isNull(request.zonesShrink)) {
      query["Zones"] = request.zonesShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstance",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceResponse({}));
  }

  /**
   * 用于更改指定AgentTeams实例的名称，支持通过GET或POST方法调用。
   * 
   * @remarks
   * ## 请求说明
   * - 推荐使用`POST`方法，并以表单形式提交参数。
   * - 当前实现不支持JSON格式的请求体，请勿尝试使用`@RequestBody`方式调用。
   * - 必须提供有效的`instanceId`和非空的`instanceName`作为参数。
   * - 该接口仅允许修改实例名称(`instanceName`)，不允许通过此接口变更命名空间(`namespace`)。
   * 
   * @param request - UpdateInstanceRequest
   * @returns UpdateInstanceResponse
   */
  async updateInstance(request: $_model.UpdateInstanceRequest): Promise<$_model.UpdateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceWithOptions(request, runtime);
  }

  /**
   * 重启暂停中的创建实例异步任务。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于重新启动一个处于暂停状态的创建实例任务。
   * - 目前仅支持 `agentteams:pay-order:create` 类型的任务。
   * - 确保提供的 `instanceId`、`taskCode` 和 `taskId` 参数准确无误，否则可能导致请求失败。
   * - 如果任务不是暂停状态（PAUSED），则不允许调用此接口进行更新。
   * 
   * @param request - UpdateInstanceAsyncTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceAsyncTaskResponse
   */
  async updateInstanceAsyncTaskWithOptions(request: $_model.UpdateInstanceAsyncTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceAsyncTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isResume)) {
      query["IsResume"] = request.isResume;
    }

    if (!$dara.isNull(request.taskCode)) {
      query["TaskCode"] = request.taskCode;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceAsyncTask",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceAsyncTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceAsyncTaskResponse({}));
  }

  /**
   * 重启暂停中的创建实例异步任务。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于重新启动一个处于暂停状态的创建实例任务。
   * - 目前仅支持 `agentteams:pay-order:create` 类型的任务。
   * - 确保提供的 `instanceId`、`taskCode` 和 `taskId` 参数准确无误，否则可能导致请求失败。
   * - 如果任务不是暂停状态（PAUSED），则不允许调用此接口进行更新。
   * 
   * @param request - UpdateInstanceAsyncTaskRequest
   * @returns UpdateInstanceAsyncTaskResponse
   */
  async updateInstanceAsyncTask(request: $_model.UpdateInstanceAsyncTaskRequest): Promise<$_model.UpdateInstanceAsyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceAsyncTaskWithOptions(request, runtime);
  }

  /**
   * 更新MCP
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有AgentTeams实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param tmpReq - UpdateMcpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMcpResponse
   */
  async updateMcpWithOptions(tmpReq: $_model.UpdateMcpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMcpResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateMcpShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.addresses)) {
      request.addressesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addresses, "Addresses", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addressesShrink)) {
      body["Addresses"] = request.addressesShrink;
    }

    if (!$dara.isNull(request.authConfig)) {
      body["AuthConfig"] = request.authConfig;
    }

    if (!$dara.isNull(request.authEnabled)) {
      body["AuthEnabled"] = request.authEnabled;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.createType)) {
      body["CreateType"] = request.createType;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.swaggerConfig)) {
      body["SwaggerConfig"] = request.swaggerConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMcp",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMcpResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMcpResponse({}));
  }

  /**
   * 更新MCP
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有AgentTeams实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param request - UpdateMcpRequest
   * @returns UpdateMcpResponse
   */
  async updateMcp(request: $_model.UpdateMcpRequest): Promise<$_model.UpdateMcpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMcpWithOptions(request, runtime);
  }

  /**
   * 更新模型
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有AgentTeams实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param request - UpdateModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateModelResponse
   */
  async updateModelWithOptions(request: $_model.UpdateModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateModelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateModel",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateModelResponse>(await this.callApi(params, req, runtime), new $_model.UpdateModelResponse({}));
  }

  /**
   * 更新模型
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有AgentTeams实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param request - UpdateModelRequest
   * @returns UpdateModelResponse
   */
  async updateModel(request: $_model.UpdateModelRequest): Promise<$_model.UpdateModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateModelWithOptions(request, runtime);
  }

  /**
   * 更新模型供应商
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有AgentTeams实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param tmpReq - UpdateModelProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateModelProviderResponse
   */
  async updateModelProviderWithOptions(tmpReq: $_model.UpdateModelProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateModelProviderResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateModelProviderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.apiKeys)) {
      request.apiKeysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.apiKeys, "ApiKeys", "json");
    }

    if (!$dara.isNull(tmpReq.protocols)) {
      request.protocolsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.protocols, "Protocols", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.address)) {
      body["Address"] = request.address;
    }

    if (!$dara.isNull(request.apiKeysShrink)) {
      body["ApiKeys"] = request.apiKeysShrink;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.protocolsShrink)) {
      body["Protocols"] = request.protocolsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateModelProvider",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateModelProviderResponse>(await this.callApi(params, req, runtime), new $_model.UpdateModelProviderResponse({}));
  }

  /**
   * 更新模型供应商
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询当前登录用户所拥有的所有AgentTeams实例。
   * - 用户身份通过请求头`X-User-Id`传递，服务端会根据此ID自动过滤只返回属于该用户的实例数据。
   * - 支持使用`instanceName`进行模糊匹配以及通过`status`参数精确匹配实例状态来过滤查询结果。
   * - 默认情况下，结果将按照创建时间倒序排列，并且可以通过设置`limit`和`offset`参数来进行分页控制，默认每页显示20条记录。
   * - 如果请求中缺少`X-User-Id`或者其值为空，则会返回400错误；如果指定的实例不存在或不属于当前用户，则返回404错误。
   * 
   * @param request - UpdateModelProviderRequest
   * @returns UpdateModelProviderResponse
   */
  async updateModelProvider(request: $_model.UpdateModelProviderRequest): Promise<$_model.UpdateModelProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateModelProviderWithOptions(request, runtime);
  }

  /**
   * 用于更新指定Endpoint的域名和SSL证书信息。
   * 
   * @remarks
   * ## 请求说明
   * - 本API支持更新`ELEMENT`、`MATRIX`类型的Endpoint。
   * - 如果尝试更新其他类型的Endpoint，将返回400错误。
   * - 当`endpointId`不存在或不属于当前用户实例时，将返回404错误。
   * - 更新域名时，系统会创建或复用新的HTTPS domain，并将其绑定到原endpoint route上，同时解绑旧domain，但不会删除旧domain。
   * - 若不提供`domain`或`certIdentifier`参数，则保持原有设置不变。
   * - 其他如`component`、`gatewayType`等字段即使传入也不会被更新。
   * 
   * @param request - UpdateServiceEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceEndpointResponse
   */
  async updateServiceEndpointWithOptions(request: $_model.UpdateServiceEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateServiceEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.endpointId)) {
      query["EndpointId"] = request.endpointId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceEndpoint",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateServiceEndpointResponse>(await this.callApi(params, req, runtime), new $_model.UpdateServiceEndpointResponse({}));
  }

  /**
   * 用于更新指定Endpoint的域名和SSL证书信息。
   * 
   * @remarks
   * ## 请求说明
   * - 本API支持更新`ELEMENT`、`MATRIX`类型的Endpoint。
   * - 如果尝试更新其他类型的Endpoint，将返回400错误。
   * - 当`endpointId`不存在或不属于当前用户实例时，将返回404错误。
   * - 更新域名时，系统会创建或复用新的HTTPS domain，并将其绑定到原endpoint route上，同时解绑旧domain，但不会删除旧domain。
   * - 若不提供`domain`或`certIdentifier`参数，则保持原有设置不变。
   * - 其他如`component`、`gatewayType`等字段即使传入也不会被更新。
   * 
   * @param request - UpdateServiceEndpointRequest
   * @returns UpdateServiceEndpointResponse
   */
  async updateServiceEndpoint(request: $_model.UpdateServiceEndpointRequest): Promise<$_model.UpdateServiceEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateServiceEndpointWithOptions(request, runtime);
  }

  /**
   * 更新团队
   * 
   * @param tmpReq - UpdateTeamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTeamResponse
   */
  async updateTeamWithOptions(tmpReq: $_model.UpdateTeamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTeamResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateTeamShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.teamMembers)) {
      request.teamMembersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.teamMembers, "TeamMembers", "json");
    }

    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.teamMembersShrink)) {
      query["TeamMembers"] = request.teamMembersShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTeam",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTeamResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTeamResponse({}));
  }

  /**
   * 更新团队
   * 
   * @param request - UpdateTeamRequest
   * @returns UpdateTeamResponse
   */
  async updateTeam(request: $_model.UpdateTeamRequest): Promise<$_model.UpdateTeamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTeamWithOptions(request, runtime);
  }

  /**
   * 更新用户信息
   * 
   * @param request - UpdateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserResponse
   */
  async updateUserWithOptions(request: $_model.UpdateUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authMethod)) {
      query["AuthMethod"] = request.authMethod;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.note)) {
      query["Note"] = request.note;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUser",
      version: "2026-06-05",
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
   * 更新用户信息
   * 
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(request: $_model.UpdateUserRequest): Promise<$_model.UpdateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

  /**
   * 更新Worker
   * 
   * @param tmpReq - UpdateWorkerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkerResponse
   */
  async updateWorkerWithOptions(tmpReq: $_model.UpdateWorkerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWorkerResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateWorkerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.channels)) {
      request.channelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.channels, "Channels", "json");
    }

    if (!$dara.isNull(tmpReq.credentials)) {
      request.credentialsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentials, "Credentials", "json");
    }

    if (!$dara.isNull(tmpReq.limitConfig)) {
      request.limitConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.limitConfig, "LimitConfig", "json");
    }

    if (!$dara.isNull(tmpReq.mcpServers)) {
      request.mcpServersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.mcpServers, "McpServers", "json");
    }

    if (!$dara.isNull(tmpReq.model)) {
      request.modelShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.model, "Model", "json");
    }

    if (!$dara.isNull(tmpReq.skills)) {
      request.skillsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.skills, "Skills", "json");
    }

    if (!$dara.isNull(tmpReq.template)) {
      request.templateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.template, "Template", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agents)) {
      query["Agents"] = request.agents;
    }

    if (!$dara.isNull(request.channelsShrink)) {
      query["Channels"] = request.channelsShrink;
    }

    if (!$dara.isNull(request.credentialsShrink)) {
      query["Credentials"] = request.credentialsShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.limitConfigShrink)) {
      query["LimitConfig"] = request.limitConfigShrink;
    }

    if (!$dara.isNull(request.mcpServersShrink)) {
      query["McpServers"] = request.mcpServersShrink;
    }

    if (!$dara.isNull(request.modelShrink)) {
      query["Model"] = request.modelShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.skillsShrink)) {
      query["Skills"] = request.skillsShrink;
    }

    if (!$dara.isNull(request.soul)) {
      query["Soul"] = request.soul;
    }

    if (!$dara.isNull(request.templateShrink)) {
      query["Template"] = request.templateShrink;
    }

    if (!$dara.isNull(request.versionCode)) {
      query["VersionCode"] = request.versionCode;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorker",
      version: "2026-06-05",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWorkerResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWorkerResponse({}));
  }

  /**
   * 更新Worker
   * 
   * @param request - UpdateWorkerRequest
   * @returns UpdateWorkerResponse
   */
  async updateWorker(request: $_model.UpdateWorkerRequest): Promise<$_model.UpdateWorkerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWorkerWithOptions(request, runtime);
  }

}
