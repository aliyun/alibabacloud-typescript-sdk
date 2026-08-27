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
      'cn-beijing': "agentteams.cn-beijing.aliyuncs.com",
      'ap-southeast-1': "agentteams.ap-southeast-1.aliyuncs.com",
      'cn-hangzhou': "agentteams.cn-hangzhou.aliyuncs.com",
    };
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
   * Binds an upstream identity provider to a specified instance and triggers a synchronization task.
   * 
   * @remarks
   * ## Operation description
   * - This is an asynchronous operation that immediately returns binding task information after the call.
   * - Use `GetInstanceAsyncTask` to poll for the asynchronous task result. The default polling interval is 30 seconds, with a maximum of 20 attempts.
   * - The `IdpMetadata` parameter contains sensitive information. Ensure secure transmission.
   * - The default values of `LoginEnabled` and `SyncEnabled` are `true` and `false`, respectively. If not explicitly specified, the default values are used.
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
   * Binds an upstream identity provider to a specified instance and triggers a synchronization task.
   * 
   * @remarks
   * ## Operation description
   * - This is an asynchronous operation that immediately returns binding task information after the call.
   * - Use `GetInstanceAsyncTask` to poll for the asynchronous task result. The default polling interval is 30 seconds, with a maximum of 20 attempts.
   * - The `IdpMetadata` parameter contains sensitive information. Ensure secure transmission.
   * - The default values of `LoginEnabled` and `SyncEnabled` are `true` and `false`, respectively. If not explicitly specified, the default values are used.
   * 
   * @param request - BindIdentityProviderRequest
   * @returns BindIdentityProviderResponse
   */
  async bindIdentityProvider(request: $_model.BindIdentityProviderRequest): Promise<$_model.BindIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindIdentityProviderWithOptions(request, runtime);
  }

  /**
   * Activates and configures an Internet NAT gateway for a specified AgentTeams instance.
   * 
   * @remarks
   * ## Operation description
   * - This operation creates an Internet NAT gateway and automatically applies for an elastic IP address (EIP), bindS the EIP, and configures SNAT rules.
   * - An asynchronous task ID is returned after the call. The actual resource ID is provided in the task result.
   * - NAT gateway name format: `magic-create-for-vpc-{vpcId}`.
   * - GET and POST methods are supported.
   * - The `eipBandwidth` parameter ranges from 1 to 200 Mbit/s. Default value: 5 Mbit/s.
   * - If `InstanceId` is invalid or `eipBandwidth` is out of range, the API returns an error response.
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
   * Activates and configures an Internet NAT gateway for a specified AgentTeams instance.
   * 
   * @remarks
   * ## Operation description
   * - This operation creates an Internet NAT gateway and automatically applies for an elastic IP address (EIP), bindS the EIP, and configures SNAT rules.
   * - An asynchronous task ID is returned after the call. The actual resource ID is provided in the task result.
   * - NAT gateway name format: `magic-create-for-vpc-{vpcId}`.
   * - GET and POST methods are supported.
   * - The `eipBandwidth` parameter ranges from 1 to 200 Mbit/s. Default value: 5 Mbit/s.
   * - If `InstanceId` is invalid or `eipBandwidth` is out of range, the API returns an error response.
   * 
   * @param request - ConfigureNatGatewayRequest
   * @returns ConfigureNatGatewayResponse
   */
  async configureNatGateway(request: $_model.ConfigureNatGatewayRequest): Promise<$_model.ConfigureNatGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configureNatGatewayWithOptions(request, runtime);
  }

  /**
   * Creates a new key-value credential under a specified AgentTeams instance.
   * 
   * @remarks
   * ## Operation description
   * - `ApiKey` is a sensitive field and is not returned in plaintext.
   * - `ClientToken` is used to ensure idempotence of the request. This parameter is optional but recommended.
   * - The credential name (Name) must match the regular expression `^[A-Z_][A-Z0-9_]*$`.
   * - If the specified credential name already exists in the specified instance, the error code `Credential.Name.AlreadyExists` is returned.
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
   * Creates a new key-value credential under a specified AgentTeams instance.
   * 
   * @remarks
   * ## Operation description
   * - `ApiKey` is a sensitive field and is not returned in plaintext.
   * - `ClientToken` is used to ensure idempotence of the request. This parameter is optional but recommended.
   * - The credential name (Name) must match the regular expression `^[A-Z_][A-Z0-9_]*$`.
   * - If the specified credential name already exists in the specified instance, the error code `Credential.Name.AlreadyExists` is returned.
   * 
   * @param request - CreateCredentialRequest
   * @returns CreateCredentialResponse
   */
  async createCredential(request: $_model.CreateCredentialRequest): Promise<$_model.CreateCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCredentialWithOptions(request, runtime);
  }

  /**
   * Asynchronously creates a cluster instance with the specified configurations.
   * 
   * @remarks
   * ## Operation description
   * - This is an asynchronous operation. After a successful call, the instance status changes to CREATING.
   * - The actual resource creation is completed asynchronously in the background. Poll the creation result by calling the `GetInstance` operation.
   * - You can pass request information by using form parameters or query parameters.
   * - If optional parameters are not provided, default values are used.
   * - Use `ClientToken` to ensure the idempotence of the request.
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
   * Asynchronously creates a cluster instance with the specified configurations.
   * 
   * @remarks
   * ## Operation description
   * - This is an asynchronous operation. After a successful call, the instance status changes to CREATING.
   * - The actual resource creation is completed asynchronously in the background. Poll the creation result by calling the `GetInstance` operation.
   * - You can pass request information by using form parameters or query parameters.
   * - If optional parameters are not provided, default values are used.
   * - Use `ClientToken` to ensure the idempotence of the request.
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: $_model.CreateInstanceRequest): Promise<$_model.CreateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  /**
   * Creates an MCP server.
   * 
   * @remarks
   * ## Operation description
   * - You must specify the `InstanceId`, `Name`, and `Addresses` parameters when you create an MCP server.
   * - The `CreateType` parameter defaults to `DIRECT_PROXY`. If you select the `HTTP_TO_MCP` mode, you must also specify `SwaggerConfig`.
   * - Set `AuthEnabled` to enable or disable authentication. If authentication is enabled, you must specify `AuthConfig`.
   * - Use `ClientToken` to ensure the idempotence of the request.
   * - Custom protocol types are supported. The `streamable` protocol is used by default.
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
   * Creates an MCP server.
   * 
   * @remarks
   * ## Operation description
   * - You must specify the `InstanceId`, `Name`, and `Addresses` parameters when you create an MCP server.
   * - The `CreateType` parameter defaults to `DIRECT_PROXY`. If you select the `HTTP_TO_MCP` mode, you must also specify `SwaggerConfig`.
   * - Set `AuthEnabled` to enable or disable authentication. If authentication is enabled, you must specify `AuthConfig`.
   * - Use `ClientToken` to ensure the idempotence of the request.
   * - Custom protocol types are supported. The `streamable` protocol is used by default.
   * 
   * @param request - CreateMcpRequest
   * @returns CreateMcpResponse
   */
  async createMcp(request: $_model.CreateMcpRequest): Promise<$_model.CreateMcpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMcpWithOptions(request, runtime);
  }

  /**
   * Creates an AI model under a specified AgentTeams instance. You must specify the model name, the model provider, and the list of supported protocols.
   * 
   * @remarks
   * Creates an AI model under a specified AgentTeams instance. You must specify the model name, the model provider, and the list of supported protocols.
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
   * Creates an AI model under a specified AgentTeams instance. You must specify the model name, the model provider, and the list of supported protocols.
   * 
   * @remarks
   * Creates an AI model under a specified AgentTeams instance. You must specify the model name, the model provider, and the list of supported protocols.
   * 
   * @param request - CreateModelRequest
   * @returns CreateModelResponse
   */
  async createModel(request: $_model.CreateModelRequest): Promise<$_model.CreateModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createModelWithOptions(request, runtime);
  }

  /**
   * Creates an AI model provider under a specified AgentTeams instance. You must specify the provider name, address, supported protocol list, and API keys.
   * 
   * @remarks
   * Creates an AI model provider under a specified AgentTeams instance. You must specify the provider name, address, supported protocol list, and API keys.
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
   * Creates an AI model provider under a specified AgentTeams instance. You must specify the provider name, address, supported protocol list, and API keys.
   * 
   * @remarks
   * Creates an AI model provider under a specified AgentTeams instance. You must specify the provider name, address, supported protocol list, and API keys.
   * 
   * @param request - CreateModelProviderRequest
   * @returns CreateModelProviderResponse
   */
  async createModelProvider(request: $_model.CreateModelProviderRequest): Promise<$_model.CreateModelProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createModelProviderWithOptions(request, runtime);
  }

  /**
   * Creates an endpoint for a specified instance. Multiple component types and gateway types are supported.
   * 
   * @remarks
   * Creates an endpoint for a specified instance. Multiple component types and gateway types are supported.
   * - The current controller uses standard parameter binding instead of @RequestBody, so parameters are better suited for query/form-based transmission.
   * - The domain field is trimmed and converted to lowercase on the server side.
   * - The query and headers must be in JSON object string format and cannot be arrays.
   * - The create operation only saves data to the database. The AI Gateway domain name synchronization logic is triggered only during an update when the conditions ELEMENT/MATRIX + AI_GATEWAY + INTERNET are met and the domain name or certificate has changed.
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
   * Creates an endpoint for a specified instance. Multiple component types and gateway types are supported.
   * 
   * @remarks
   * Creates an endpoint for a specified instance. Multiple component types and gateway types are supported.
   * - The current controller uses standard parameter binding instead of @RequestBody, so parameters are better suited for query/form-based transmission.
   * - The domain field is trimmed and converted to lowercase on the server side.
   * - The query and headers must be in JSON object string format and cannot be arrays.
   * - The create operation only saves data to the database. The AI Gateway domain name synchronization logic is triggered only during an update when the conditions ELEMENT/MATRIX + AI_GATEWAY + INTERNET are met and the domain name or certificate has changed.
   * 
   * @param request - CreateServiceEndpointRequest
   * @returns CreateServiceEndpointResponse
   */
  async createServiceEndpoint(request: $_model.CreateServiceEndpointRequest): Promise<$_model.CreateServiceEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceEndpointWithOptions(request, runtime);
  }

  /**
   * Creates a team under a specified instance. You can set the team name, description, administrator, and initial member list.
   * 
   * @remarks
   * Creates a team under a specified instance. You can set the team name, description, administrator, and initial member list.
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
   * Creates a team under a specified instance. You can set the team name, description, administrator, and initial member list.
   * 
   * @remarks
   * Creates a team under a specified instance. You can set the team name, description, administrator, and initial member list.
   * 
   * @param request - CreateTeamRequest
   * @returns CreateTeamResponse
   */
  async createTeam(request: $_model.CreateTeamRequest): Promise<$_model.CreateTeamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTeamWithOptions(request, runtime);
  }

  /**
   * Creates a user under a specified instance. You can set the username, display name, email address, authentication method, note, and password. If no password is specified, the system automatically generates an initial password and returns it in the response.
   * 
   * @remarks
   * Creates a user under a specified instance. You can set the username, display name, email address, authentication method, note, and password. If no password is specified, the system automatically generates an initial password and returns it in the response.
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
   * Creates a user under a specified instance. You can set the username, display name, email address, authentication method, note, and password. If no password is specified, the system automatically generates an initial password and returns it in the response.
   * 
   * @remarks
   * Creates a user under a specified instance. You can set the username, display name, email address, authentication method, note, and password. If no password is specified, the system automatically generates an initial password and returns it in the response.
   * 
   * @param request - CreateUserRequest
   * @returns CreateUserResponse
   */
  async createUser(request: $_model.CreateUserRequest): Promise<$_model.CreateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  /**
   * Creates a Worker instance with specified configurations such as model, skills, template, MCP servers, and channels.
   * 
   * @remarks
   * Creates a Worker instance with specified configurations such as model, skills, template, MCP servers, and channels.
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
   * Creates a Worker instance with specified configurations such as model, skills, template, MCP servers, and channels.
   * 
   * @remarks
   * Creates a Worker instance with specified configurations such as model, skills, template, MCP servers, and channels.
   * 
   * @param request - CreateWorkerRequest
   * @returns CreateWorkerResponse
   */
  async createWorker(request: $_model.CreateWorkerRequest): Promise<$_model.CreateWorkerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWorkerWithOptions(request, runtime);
  }

  /**
   * Creates a local management bootstrap token for a Worker, with support for specifying the network type.
   * 
   * @remarks
   * Creates a local management bootstrap token for a Worker, with support for specifying the network type.
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
   * Creates a local management bootstrap token for a Worker, with support for specifying the network type.
   * 
   * @remarks
   * Creates a local management bootstrap token for a Worker, with support for specifying the network type.
   * 
   * @param request - CreateWorkerBootstrapTokenRequest
   * @returns CreateWorkerBootstrapTokenResponse
   */
  async createWorkerBootstrapToken(request: $_model.CreateWorkerBootstrapTokenRequest): Promise<$_model.CreateWorkerBootstrapTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWorkerBootstrapTokenWithOptions(request, runtime);
  }

  /**
   * Deletes an existing credential from a specified AgentTeams instance. The credential cannot be deleted if it is still attached to a Worker.
   * 
   * @remarks
   * Deletes an existing credential from a specified AgentTeams instance. The credential cannot be deleted if it is still attached to a Worker.
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
   * Deletes an existing credential from a specified AgentTeams instance. The credential cannot be deleted if it is still attached to a Worker.
   * 
   * @remarks
   * Deletes an existing credential from a specified AgentTeams instance. The credential cannot be deleted if it is still attached to a Worker.
   * 
   * @param request - DeleteCredentialRequest
   * @returns DeleteCredentialResponse
   */
  async deleteCredential(request: $_model.DeleteCredentialRequest): Promise<$_model.DeleteCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCredentialWithOptions(request, runtime);
  }

  /**
   * Releases a specified AgentTeams instance and cleans up related resources. Supports GET and POST methods. After a successful call, the instance status changes to DELETING, and resource cleanup is performed asynchronously in the background.
   * 
   * @remarks
   * Releases a specified AgentTeams instance and cleans up related resources. Supports GET and POST methods. After a successful call, the instance status changes to DELETING, and resource cleanup is performed asynchronously in the background.
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
   * Releases a specified AgentTeams instance and cleans up related resources. Supports GET and POST methods. After a successful call, the instance status changes to DELETING, and resource cleanup is performed asynchronously in the background.
   * 
   * @remarks
   * Releases a specified AgentTeams instance and cleans up related resources. Supports GET and POST methods. After a successful call, the instance status changes to DELETING, and resource cleanup is performed asynchronously in the background.
   * 
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(request: $_model.DeleteInstanceRequest): Promise<$_model.DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  /**
   * Deletes an MCP server from a specified AgentTeams instance. The server cannot be deleted if it is associated with any Workers.
   * 
   * @remarks
   * Deletes an MCP server from a specified AgentTeams instance. The server cannot be deleted if it is associated with any Workers.
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
   * Deletes an MCP server from a specified AgentTeams instance. The server cannot be deleted if it is associated with any Workers.
   * 
   * @remarks
   * Deletes an MCP server from a specified AgentTeams instance. The server cannot be deleted if it is associated with any Workers.
   * 
   * @param request - DeleteMcpRequest
   * @returns DeleteMcpResponse
   */
  async deleteMcp(request: $_model.DeleteMcpRequest): Promise<$_model.DeleteMcpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMcpWithOptions(request, runtime);
  }

  /**
   * Deletes an AI model from a specified AgentTeams instance. The model cannot be deleted if it is still associated with a Worker.
   * 
   * @remarks
   * Deletes an AI model from a specified AgentTeams instance. The model cannot be deleted if it is still associated with a Worker.
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
   * Deletes an AI model from a specified AgentTeams instance. The model cannot be deleted if it is still associated with a Worker.
   * 
   * @remarks
   * Deletes an AI model from a specified AgentTeams instance. The model cannot be deleted if it is still associated with a Worker.
   * 
   * @param request - DeleteModelRequest
   * @returns DeleteModelResponse
   */
  async deleteModel(request: $_model.DeleteModelRequest): Promise<$_model.DeleteModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteModelWithOptions(request, runtime);
  }

  /**
   * Deletes an AI model provider from a specified AgentTeams instance. The provider cannot be deleted if it still has associated models.
   * 
   * @remarks
   * Deletes an AI model provider from a specified AgentTeams instance. The provider cannot be deleted if it still has associated models.
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
   * Deletes an AI model provider from a specified AgentTeams instance. The provider cannot be deleted if it still has associated models.
   * 
   * @remarks
   * Deletes an AI model provider from a specified AgentTeams instance. The provider cannot be deleted if it still has associated models.
   * 
   * @param request - DeleteModelProviderRequest
   * @returns DeleteModelProviderResponse
   */
  async deleteModelProvider(request: $_model.DeleteModelProviderRequest): Promise<$_model.DeleteModelProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteModelProviderWithOptions(request, runtime);
  }

  /**
   * Deletes an endpoint from a specified AgentTeams instance and cleans up related resources.
   * 
   * @remarks
   * Deletes an endpoint from a specified AgentTeams instance and cleans up related resources.
   * - This operation supports GET or POST methods.
   * - If the target endpoint is of the WORKER type, the system automatically cleans up associated APIG/AI Gateway cloud resources and KubeOne worker service configurations.
   * - The request parameters must include instanceId and endpointId, and neither can be empty.
   * - A successful response returns HTTP status code 200 and a success flag. An error response returns the corresponding HTTP status code (such as 400, 404, or 409) and an error message.
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
   * Deletes an endpoint from a specified AgentTeams instance and cleans up related resources.
   * 
   * @remarks
   * Deletes an endpoint from a specified AgentTeams instance and cleans up related resources.
   * - This operation supports GET or POST methods.
   * - If the target endpoint is of the WORKER type, the system automatically cleans up associated APIG/AI Gateway cloud resources and KubeOne worker service configurations.
   * - The request parameters must include instanceId and endpointId, and neither can be empty.
   * - A successful response returns HTTP status code 200 and a success flag. An error response returns the corresponding HTTP status code (such as 400, 404, or 409) and an error message.
   * 
   * @param request - DeleteServiceEndpointRequest
   * @returns DeleteServiceEndpointResponse
   */
  async deleteServiceEndpoint(request: $_model.DeleteServiceEndpointRequest): Promise<$_model.DeleteServiceEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteServiceEndpointWithOptions(request, runtime);
  }

  /**
   * Deletes a team under a specified instance. After deletion, the team and associated resources enter an asynchronous cleanup process.
   * 
   * @remarks
   * Deletes a team under a specified instance. After deletion, the team and associated resources enter an asynchronous cleanup process.
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
   * Deletes a team under a specified instance. After deletion, the team and associated resources enter an asynchronous cleanup process.
   * 
   * @remarks
   * Deletes a team under a specified instance. After deletion, the team and associated resources enter an asynchronous cleanup process.
   * 
   * @param request - DeleteTeamRequest
   * @returns DeleteTeamResponse
   */
  async deleteTeam(request: $_model.DeleteTeamRequest): Promise<$_model.DeleteTeamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTeamWithOptions(request, runtime);
  }

  /**
   * Deletes a specified user from a specified instance. After deletion, the user cannot log on to or access instance resources. Proceed with caution.
   * 
   * @remarks
   * Deletes a specified user from a specified instance. After deletion, the user cannot log on to or access instance resources. Proceed with caution.
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
   * Deletes a specified user from a specified instance. After deletion, the user cannot log on to or access instance resources. Proceed with caution.
   * 
   * @remarks
   * Deletes a specified user from a specified instance. After deletion, the user cannot log on to or access instance resources. Proceed with caution.
   * 
   * @param request - DeleteUserRequest
   * @returns DeleteUserResponse
   */
  async deleteUser(request: $_model.DeleteUserRequest): Promise<$_model.DeleteUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  /**
   * Deletes a Worker under a specified instance.
   * 
   * @remarks
   * Deletes a Worker under a specified instance.
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
   * Deletes a Worker under a specified instance.
   * 
   * @remarks
   * Deletes a Worker under a specified instance.
   * 
   * @param request - DeleteWorkerRequest
   * @returns DeleteWorkerResponse
   */
  async deleteWorker(request: $_model.DeleteWorkerRequest): Promise<$_model.DeleteWorkerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWorkerWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specified credential under an AgentTeams instance, including the status, description, and list of bound Workers.
   * 
   * @remarks
   * Queries the details of a specified credential under an AgentTeams instance, including the status, description, and list of bound Workers.
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
   * Queries the details of a specified credential under an AgentTeams instance, including the status, description, and list of bound Workers.
   * 
   * @remarks
   * Queries the details of a specified credential under an AgentTeams instance, including the status, description, and list of bound Workers.
   * 
   * @param request - GetCredentialRequest
   * @returns GetCredentialResponse
   */
  async getCredential(request: $_model.GetCredentialRequest): Promise<$_model.GetCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCredentialWithOptions(request, runtime);
  }

  /**
   * Queries the binding details of an upstream identity provider for a specified instance and identity provider type, including the logon callback URL and metadata.
   * 
   * @remarks
   * Queries the binding details of an upstream identity provider for a specified instance and identity provider type, including the logon callback URL and metadata.
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
   * Queries the binding details of an upstream identity provider for a specified instance and identity provider type, including the logon callback URL and metadata.
   * 
   * @remarks
   * Queries the binding details of an upstream identity provider for a specified instance and identity provider type, including the logon callback URL and metadata.
   * 
   * @param request - GetIdentityProviderRequest
   * @returns GetIdentityProviderResponse
   */
  async getIdentityProvider(request: $_model.GetIdentityProviderRequest): Promise<$_model.GetIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIdentityProviderWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specified instance by instance ID. Supports GET and POST methods. A successful response returns the detailed configuration and status of the instance.
   * 
   * @remarks
   * Queries the details of a specified instance by instance ID. Supports GET and POST methods. A successful response returns the detailed configuration and status of the instance.
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
   * Queries the details of a specified instance by instance ID. Supports GET and POST methods. A successful response returns the detailed configuration and status of the instance.
   * 
   * @remarks
   * Queries the details of a specified instance by instance ID. Supports GET and POST methods. A successful response returns the detailed configuration and status of the instance.
   * 
   * @param request - GetInstanceRequest
   * @returns GetInstanceResponse
   */
  async getInstance(request: $_model.GetInstanceRequest): Promise<$_model.GetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the status of asynchronous tasks associated with a specified AgentTeams instance, with pagination support.
   * 
   * @remarks
   * Queries the status of asynchronous tasks associated with a specified AgentTeams instance, with paging support.
   * - This operation queries the execution status of asynchronous tasks under a specific AgentTeams instance.
   * - Currently, only instance creation tasks related to the instance lifecycle are supported.
   * - Use the taskCode parameter to specify the task type to query. The default is the instance creation task.
   * - Use maxResults and nextToken for result paging.
   * - When a task is in the PAUSED state, the response includes information about the action the user needs to take (recoveryMessage).
   * - Querying task status directly by taskId is not currently supported.
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
   * Queries the status of asynchronous tasks associated with a specified AgentTeams instance, with pagination support.
   * 
   * @remarks
   * Queries the status of asynchronous tasks associated with a specified AgentTeams instance, with paging support.
   * - This operation queries the execution status of asynchronous tasks under a specific AgentTeams instance.
   * - Currently, only instance creation tasks related to the instance lifecycle are supported.
   * - Use the taskCode parameter to specify the task type to query. The default is the instance creation task.
   * - Use maxResults and nextToken for result paging.
   * - When a task is in the PAUSED state, the response includes information about the action the user needs to take (recoveryMessage).
   * - Querying task status directly by taskId is not currently supported.
   * 
   * @param request - GetInstanceAsyncTaskRequest
   * @returns GetInstanceAsyncTaskResponse
   */
  async getInstanceAsyncTask(request: $_model.GetInstanceAsyncTaskRequest): Promise<$_model.GetInstanceAsyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceAsyncTaskWithOptions(request, runtime);
  }

  /**
   * Retrieves the RAM authorization URL required to mount OSS to ACS for an instance.
   * 
   * @remarks
   * Retrieves the RAM authorization URL required to mount OSS to ACS for an instance.
   * - This operation supports GET and POST methods.
   * - The X-User-Id header must be included in the request to verify instance ownership.
   * - The InstanceId parameter is required to specify the instance. The backend generates the authorization URL based on the instance information.
   * - A successful response returns the RAM console authorization URL without creating a RAM role or policy.
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
   * Retrieves the RAM authorization URL required to mount OSS to ACS for an instance.
   * 
   * @remarks
   * Retrieves the RAM authorization URL required to mount OSS to ACS for an instance.
   * - This operation supports GET and POST methods.
   * - The X-User-Id header must be included in the request to verify instance ownership.
   * - The InstanceId parameter is required to specify the instance. The backend generates the authorization URL based on the instance information.
   * - A successful response returns the RAM console authorization URL without creating a RAM role or policy.
   * 
   * @param request - GetInstanceOssMountRamAuthorizeUrlRequest
   * @returns GetInstanceOssMountRamAuthorizeUrlResponse
   */
  async getInstanceOssMountRamAuthorizeUrl(request: $_model.GetInstanceOssMountRamAuthorizeUrlRequest): Promise<$_model.GetInstanceOssMountRamAuthorizeUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceOssMountRamAuthorizeUrlWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specified MCP server, including the address, authentication configuration, deployment status, and protocol.
   * 
   * @remarks
   * Queries the details of a specified MCP server, including the address, authentication configuration, deployment status, and protocol.
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
   * Queries the details of a specified MCP server, including the address, authentication configuration, deployment status, and protocol.
   * 
   * @remarks
   * Queries the details of a specified MCP server, including the address, authentication configuration, deployment status, and protocol.
   * 
   * @param request - GetMcpRequest
   * @returns GetMcpResponse
   */
  async getMcp(request: $_model.GetMcpRequest): Promise<$_model.GetMcpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMcpWithOptions(request, runtime);
  }

  /**
   * Queries the model call summary for a specified AgentTeams instance within a specified time range, including today\\"s and this week\\"s call counts, change rates, call frequency, and provider distribution.
   * 
   * @remarks
   * Queries the model call summary for a specified AgentTeams instance within a specified time range, including today\\"s and this week\\"s call counts, change rates, call frequency, and provider distribution.
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
   * Queries the model call summary for a specified AgentTeams instance within a specified time range, including today\\"s and this week\\"s call counts, change rates, call frequency, and provider distribution.
   * 
   * @remarks
   * Queries the model call summary for a specified AgentTeams instance within a specified time range, including today\\"s and this week\\"s call counts, change rates, call frequency, and provider distribution.
   * 
   * @param request - GetModelInvocationSummaryRequest
   * @returns GetModelInvocationSummaryResponse
   */
  async getModelInvocationSummary(request: $_model.GetModelInvocationSummaryRequest): Promise<$_model.GetModelInvocationSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getModelInvocationSummaryWithOptions(request, runtime);
  }

  /**
   * Queries the details of a single AI model provider, including the name, address, protocol list, API keys, and deployment status.
   * 
   * @remarks
   * Queries the details of a single AI model provider, including the name, address, protocol list, API keys, and deployment status.
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
   * Queries the details of a single AI model provider, including the name, address, protocol list, API keys, and deployment status.
   * 
   * @remarks
   * Queries the details of a single AI model provider, including the name, address, protocol list, API keys, and deployment status.
   * 
   * @param request - GetModelProviderRequest
   * @returns GetModelProviderResponse
   */
  async getModelProvider(request: $_model.GetModelProviderRequest): Promise<$_model.GetModelProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getModelProviderWithOptions(request, runtime);
  }

  /**
   * Queries the configuration status of the NAT gateway and its SNAT rules for a specified instance.
   * 
   * @remarks
   * Queries the configuration status of the NAT gateway and its SNAT rules for a specified instance.
   * - This API allows you to retrieve the NAT gateway configuration details and SNAT rule status associated with a specific instance. This operation supports GET or POST method calls and requires the instanceId as a request parameter to specify the instance to query.
   * - Ensure that the provided instanceId is valid and belongs to your account.
   * - Based on the returned status values (such as READY, NEED_CONFIGURE_NAT_GATEWAY, or NEED_CONFIGURE_SNAT_RULE), take the corresponding actions to complete the NAT gateway or SNAT rule configuration.
   * - When the status is NEED_CONFIGURE_NAT_GATEWAY, it indicates that no available NAT gateway exists in the current VPC. NEED_CONFIGURE_SNAT_RULE means that a NAT gateway exists but some subnet CIDRs are not covered by SNAT rules.
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
   * Queries the configuration status of the NAT gateway and its SNAT rules for a specified instance.
   * 
   * @remarks
   * Queries the configuration status of the NAT gateway and its SNAT rules for a specified instance.
   * - This API allows you to retrieve the NAT gateway configuration details and SNAT rule status associated with a specific instance. This operation supports GET or POST method calls and requires the instanceId as a request parameter to specify the instance to query.
   * - Ensure that the provided instanceId is valid and belongs to your account.
   * - Based on the returned status values (such as READY, NEED_CONFIGURE_NAT_GATEWAY, or NEED_CONFIGURE_SNAT_RULE), take the corresponding actions to complete the NAT gateway or SNAT rule configuration.
   * - When the status is NEED_CONFIGURE_NAT_GATEWAY, it indicates that no available NAT gateway exists in the current VPC. NEED_CONFIGURE_SNAT_RULE means that a NAT gateway exists but some subnet CIDRs are not covered by SNAT rules.
   * 
   * @param request - GetNatGatewayStatusRequest
   * @returns GetNatGatewayStatusResponse
   */
  async getNatGatewayStatus(request: $_model.GetNatGatewayStatusRequest): Promise<$_model.GetNatGatewayStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNatGatewayStatusWithOptions(request, runtime);
  }

  /**
   * Queries the details of an endpoint with a specified ID. You can verify the endpoint by instance ID.
   * 
   * @remarks
   * Queries the details of an endpoint with a specified ID. You can verify the endpoint by instance ID.
   * - This API operation queries the configuration and status information of a single endpoint based on the endpointId.
   * - The optional parameter instanceId is used to verify whether the endpoint belongs to a specific instance.
   * - The request supports both GET and POST methods. GET passes parameters through the query string, while POST submits parameters through form data.
   * - If endpointId is missing or empty, an InvalidParameter error is returned.
   * - If the requested endpoint does not exist, does not belong to the specified instance, or does not belong to the current user, a resource-not-found error is returned.
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
   * Queries the details of an endpoint with a specified ID. You can verify the endpoint by instance ID.
   * 
   * @remarks
   * Queries the details of an endpoint with a specified ID. You can verify the endpoint by instance ID.
   * - This API operation queries the configuration and status information of a single endpoint based on the endpointId.
   * - The optional parameter instanceId is used to verify whether the endpoint belongs to a specific instance.
   * - The request supports both GET and POST methods. GET passes parameters through the query string, while POST submits parameters through form data.
   * - If endpointId is missing or empty, an InvalidParameter error is returned.
   * - If the requested endpoint does not exist, does not belong to the specified instance, or does not belong to the current user, a resource-not-found error is returned.
   * 
   * @param request - GetServiceEndpointRequest
   * @returns GetServiceEndpointResponse
   */
  async getServiceEndpoint(request: $_model.GetServiceEndpointRequest): Promise<$_model.GetServiceEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceEndpointWithOptions(request, runtime);
  }

  /**
   * Queries the task statistics summary of a specified AgentTeams instance within a specified time range, including total tasks, average task duration, token consumption, and status distribution.
   * 
   * @remarks
   * Queries the task statistics summary of a specified AgentTeams instance within a specified time range, including total tasks, average task duration, token consumption, and status distribution.
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
   * Queries the task statistics summary of a specified AgentTeams instance within a specified time range, including total tasks, average task duration, token consumption, and status distribution.
   * 
   * @remarks
   * Queries the task statistics summary of a specified AgentTeams instance within a specified time range, including total tasks, average task duration, token consumption, and status distribution.
   * 
   * @param request - GetTaskStatsSummaryRequest
   * @returns GetTaskStatsSummaryResponse
   */
  async getTaskStatsSummary(request: $_model.GetTaskStatsSummaryRequest): Promise<$_model.GetTaskStatsSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTaskStatsSummaryWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specified team under a specified instance, including the description, administrator, leader, members, associated workers, and room status.
   * 
   * @remarks
   * Queries the details of a specified team under a specified instance, including the description, administrator, leader, members, associated workers, and room status.
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
   * Queries the details of a specified team under a specified instance, including the description, administrator, leader, members, associated workers, and room status.
   * 
   * @remarks
   * Queries the details of a specified team under a specified instance, including the description, administrator, leader, members, associated workers, and room status.
   * 
   * @param request - GetTeamRequest
   * @returns GetTeamResponse
   */
  async getTeam(request: $_model.GetTeamRequest): Promise<$_model.GetTeamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTeamWithOptions(request, runtime);
  }

  /**
   * Queries the token consumption trend of a specified AgentTeams instance within a specified time range, supports grouping by time dimension, and returns time series data that can be used for charting.
   * 
   * @remarks
   * Queries the token consumption trend of a specified AgentTeams instance within a specified time range, supports grouping by time dimension, and returns time series data that can be used for charting.
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
   * Queries the token consumption trend of a specified AgentTeams instance within a specified time range, supports grouping by time dimension, and returns time series data that can be used for charting.
   * 
   * @remarks
   * Queries the token consumption trend of a specified AgentTeams instance within a specified time range, supports grouping by time dimension, and returns time series data that can be used for charting.
   * 
   * @param request - GetTokenTrendRequest
   * @returns GetTokenTrendResponse
   */
  async getTokenTrend(request: $_model.GetTokenTrendRequest): Promise<$_model.GetTokenTrendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTokenTrendWithOptions(request, runtime);
  }

  /**
   * Queries the tool calling distribution of a specified AgentTeams instance within a specified time range, and returns the number of calls for each tool and the total number of calls.
   * 
   * @remarks
   * Queries the tool calling distribution of a specified AgentTeams instance within a specified time range, and returns the number of calls for each tool and the total number of calls.
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
   * Queries the tool calling distribution of a specified AgentTeams instance within a specified time range, and returns the number of calls for each tool and the total number of calls.
   * 
   * @remarks
   * Queries the tool calling distribution of a specified AgentTeams instance within a specified time range, and returns the number of calls for each tool and the total number of calls.
   * 
   * @param request - GetToolCallDistributionRequest
   * @returns GetToolCallDistributionResponse
   */
  async getToolCallDistribution(request: $_model.GetToolCallDistributionRequest): Promise<$_model.GetToolCallDistributionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getToolCallDistributionWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specified user under a specified instance, including the username, display name, email address, authentication method, status, and creation time.
   * 
   * @remarks
   * Queries the details of a specified user under a specified instance, including the username, display name, email address, authentication method, status, and creation time.
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
   * Queries the details of a specified user under a specified instance, including the username, display name, email address, authentication method, status, and creation time.
   * 
   * @remarks
   * Queries the details of a specified user under a specified instance, including the username, display name, email address, authentication method, status, and creation time.
   * 
   * @param request - GetUserRequest
   * @returns GetUserResponse
   */
  async getUser(request: $_model.GetUserRequest): Promise<$_model.GetUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  /**
   * Retrieves the initial password of a specified user under a specified instance. The initial password is generated by the system or specified by the user when the user is created.
   * 
   * @remarks
   * Retrieves the initial password of a specified user under a specified instance. The initial password is generated by the system or specified by the user when the user is created.
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
   * Retrieves the initial password of a specified user under a specified instance. The initial password is generated by the system or specified by the user when the user is created.
   * 
   * @remarks
   * Retrieves the initial password of a specified user under a specified instance. The initial password is generated by the system or specified by the user when the user is created.
   * 
   * @param request - GetUserPasswordRequest
   * @returns GetUserPasswordResponse
   */
  async getUserPassword(request: $_model.GetUserPasswordRequest): Promise<$_model.GetUserPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserPasswordWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specified worker, including configurations such as model, skills, sub-agents, MCP servers, channels, and quotas.
   * 
   * @remarks
   * Queries the details of a specified worker, including configurations such as model, skills, sub-agents, MCP servers, channels, and quotas.
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
   * Queries the details of a specified worker, including configurations such as model, skills, sub-agents, MCP servers, channels, and quotas.
   * 
   * @remarks
   * Queries the details of a specified worker, including configurations such as model, skills, sub-agents, MCP servers, channels, and quotas.
   * 
   * @param request - GetWorkerRequest
   * @returns GetWorkerResponse
   */
  async getWorker(request: $_model.GetWorkerRequest): Promise<$_model.GetWorkerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkerWithOptions(request, runtime);
  }

  /**
   * Queries the startup options for local Worker management and returns available network types.
   * 
   * @remarks
   * Queries the startup options for local Worker management and returns available network types.
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
   * Queries the startup options for local Worker management and returns available network types.
   * 
   * @remarks
   * Queries the startup options for local Worker management and returns available network types.
   * 
   * @param request - GetWorkerBootstrapOptionsRequest
   * @returns GetWorkerBootstrapOptionsResponse
   */
  async getWorkerBootstrapOptions(request: $_model.GetWorkerBootstrapOptionsRequest): Promise<$_model.GetWorkerBootstrapOptionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkerBootstrapOptionsWithOptions(request, runtime);
  }

  /**
   * Queries the maximum upgradable version of a worker.
   * 
   * @remarks
   * Queries the maximum upgradable version of a worker.
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
   * Queries the maximum upgradable version of a worker.
   * 
   * @remarks
   * Queries the maximum upgradable version of a worker.
   * 
   * @param request - GetWorkerMaxVersionRequest
   * @returns GetWorkerMaxVersionResponse
   */
  async getWorkerMaxVersion(request: $_model.GetWorkerMaxVersionRequest): Promise<$_model.GetWorkerMaxVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkerMaxVersionWithOptions(request, runtime);
  }

  /**
   * Queries the Worker statistics summary, including the total number of workers, the number of running workers, the number of stopped workers, and more.
   * 
   * @remarks
   * Queries the Worker statistics summary, including the total number of workers, the number of running workers, the number of stopped workers, and more.
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
   * Queries the Worker statistics summary, including the total number of workers, the number of running workers, the number of stopped workers, and more.
   * 
   * @remarks
   * Queries the Worker statistics summary, including the total number of workers, the number of running workers, the number of stopped workers, and more.
   * 
   * @param request - GetWorkerStatsSummaryRequest
   * @returns GetWorkerStatsSummaryResponse
   */
  async getWorkerStatsSummary(request: $_model.GetWorkerStatsSummaryRequest): Promise<$_model.GetWorkerStatsSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkerStatsSummaryWithOptions(request, runtime);
  }

  /**
   * Queries the credential list under a specified AgentTeams instance with paging, returning credential summary information and the number of Workers attached to each credential.
   * 
   * @remarks
   * Queries the credential list under a specified AgentTeams instance with paging, returning credential summary information and the number of Workers attached to each credential.
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
   * Queries the credential list under a specified AgentTeams instance with paging, returning credential summary information and the number of Workers attached to each credential.
   * 
   * @remarks
   * Queries the credential list under a specified AgentTeams instance with paging, returning credential summary information and the number of Workers attached to each credential.
   * 
   * @param request - ListCredentialsRequest
   * @returns ListCredentialsResponse
   */
  async listCredentials(request: $_model.ListCredentialsRequest): Promise<$_model.ListCredentialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCredentialsWithOptions(request, runtime);
  }

  /**
   * Queries the list of upstream identity provider bindings for a specified instance, with support for paginated responses.
   * 
   * @remarks
   * Queries the list of upstream identity provider bindings for a specified instance, with support for paginated responses.
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
   * Queries the list of upstream identity provider bindings for a specified instance, with support for paginated responses.
   * 
   * @remarks
   * Queries the list of upstream identity provider bindings for a specified instance, with support for paginated responses.
   * 
   * @param request - ListIdentityProvidersRequest
   * @returns ListIdentityProvidersResponse
   */
  async listIdentityProviders(request: $_model.ListIdentityProvidersRequest): Promise<$_model.ListIdentityProvidersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIdentityProvidersWithOptions(request, runtime);
  }

  /**
   * Queries a list of instances that meet the specified conditions. Supports pagination and fuzzy match. Supports GET and POST methods. The list is returned in reverse chronological order by creation time.
   * 
   * @remarks
   * Queries a list of instances that meet the specified conditions. Supports pagination and fuzzy match. Supports GET and POST methods. The list is returned in reverse chronological order by creation time.
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
   * Queries a list of instances that meet the specified conditions. Supports pagination and fuzzy match. Supports GET and POST methods. The list is returned in reverse chronological order by creation time.
   * 
   * @remarks
   * Queries a list of instances that meet the specified conditions. Supports pagination and fuzzy match. Supports GET and POST methods. The list is returned in reverse chronological order by creation time.
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: $_model.ListInstancesRequest): Promise<$_model.ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the list of tools provided by a specified MCP server, including tool names, titles, descriptions, and input schemas.
   * 
   * @remarks
   * Queries the list of tools provided by a specified MCP server, including tool names, titles, descriptions, and input schemas.
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
   * Queries the list of tools provided by a specified MCP server, including tool names, titles, descriptions, and input schemas.
   * 
   * @remarks
   * Queries the list of tools provided by a specified MCP server, including tool names, titles, descriptions, and input schemas.
   * 
   * @param request - ListMcpToolsRequest
   * @returns ListMcpToolsResponse
   */
  async listMcpTools(request: $_model.ListMcpToolsRequest): Promise<$_model.ListMcpToolsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMcpToolsWithOptions(request, runtime);
  }

  /**
   * Queries the MCP server list under a specified AgentTeams instance by using paging.
   * 
   * @remarks
   * Queries the MCP server list under a specified AgentTeams instance by using paging.
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
   * Queries the MCP server list under a specified AgentTeams instance by using paging.
   * 
   * @remarks
   * Queries the MCP server list under a specified AgentTeams instance by using paging.
   * 
   * @param request - ListMcpsRequest
   * @returns ListMcpsResponse
   */
  async listMcps(request: $_model.ListMcpsRequest): Promise<$_model.ListMcpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMcpsWithOptions(request, runtime);
  }

  /**
   * Queries the list of AI model providers under a specified AgentTeams instance. Paging is supported.
   * 
   * @remarks
   * Queries the list of AI model providers under a specified AgentTeams instance. Paging is supported.
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
   * Queries the list of AI model providers under a specified AgentTeams instance. Paging is supported.
   * 
   * @remarks
   * Queries the list of AI model providers under a specified AgentTeams instance. Paging is supported.
   * 
   * @param request - ListModelProvidersRequest
   * @returns ListModelProvidersResponse
   */
  async listModelProviders(request: $_model.ListModelProvidersRequest): Promise<$_model.ListModelProvidersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listModelProvidersWithOptions(request, runtime);
  }

  /**
   * Queries the list of AI models under a specified AgentTeams instance. You can filter results by model name or provider name, and paging is supported.
   * 
   * @remarks
   * Queries the list of AI models under a specified AgentTeams instance. You can filter results by model name or provider name, and paging is supported.
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
   * Queries the list of AI models under a specified AgentTeams instance. You can filter results by model name or provider name, and paging is supported.
   * 
   * @remarks
   * Queries the list of AI models under a specified AgentTeams instance. You can filter results by model name or provider name, and paging is supported.
   * 
   * @param request - ListModelsRequest
   * @returns ListModelsResponse
   */
  async listModels(request: $_model.ListModelsRequest): Promise<$_model.ListModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listModelsWithOptions(request, runtime);
  }

  /**
   * Queries the list of AI gateway endpoints under a specified instance.
   * 
   * @remarks
   * This API queries the list of AI gateway endpoints under a specified instance.
   * - instanceId is a required parameter that specifies the AgentTeams instance ID.
   * - Optional parameters include component, serviceName, networkType, and domainType, which are used to further filter the returned endpoint list.
   * - Filtering by the status parameter is not supported.
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
   * Queries the list of AI gateway endpoints under a specified instance.
   * 
   * @remarks
   * This API queries the list of AI gateway endpoints under a specified instance.
   * - instanceId is a required parameter that specifies the AgentTeams instance ID.
   * - Optional parameters include component, serviceName, networkType, and domainType, which are used to further filter the returned endpoint list.
   * - Filtering by the status parameter is not supported.
   * 
   * @param request - ListServiceEndpointsRequest
   * @returns ListServiceEndpointsResponse
   */
  async listServiceEndpoints(request: $_model.ListServiceEndpointsRequest): Promise<$_model.ListServiceEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceEndpointsWithOptions(request, runtime);
  }

  /**
   * Queries the list of SSL certificates available to the user in APIG.
   * 
   * @remarks
   * Queries the list of SSL certificates available to the user in APIG.
   * - This API retrieves the list of SSL certificates associated with a specified AgentTeams instance.
   * - The pagination parameters MaxResults and NextToken allow the client to control the number of returned results and retrieve the next page of data.
   * - A successful response includes the request ID, success flag, error code, next page token, total certificate count, and the certificate details list.
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
   * Queries the list of SSL certificates available to the user in APIG.
   * 
   * @remarks
   * Queries the list of SSL certificates available to the user in APIG.
   * - This API retrieves the list of SSL certificates associated with a specified AgentTeams instance.
   * - The pagination parameters MaxResults and NextToken allow the client to control the number of returned results and retrieve the next page of data.
   * - A successful response includes the request ID, success flag, error code, next page token, total certificate count, and the certificate details list.
   * 
   * @param request - ListSslCertsRequest
   * @returns ListSslCertsResponse
   */
  async listSslCerts(request: $_model.ListSslCertsRequest): Promise<$_model.ListSslCertsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSslCertsWithOptions(request, runtime);
  }

  /**
   * Queries the statistical details of teams under a specified instance, including aggregate metrics such as the number of workers, number of tasks, success rate, and token usage for each team.
   * 
   * @remarks
   * Queries the statistical details of teams under a specified instance, including aggregate metrics such as the number of workers, number of tasks, success rate, and token usage for each team.
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
   * Queries the statistical details of teams under a specified instance, including aggregate metrics such as the number of workers, number of tasks, success rate, and token usage for each team.
   * 
   * @remarks
   * Queries the statistical details of teams under a specified instance, including aggregate metrics such as the number of workers, number of tasks, success rate, and token usage for each team.
   * 
   * @param request - ListTeamDetailsRequest
   * @returns ListTeamDetailsResponse
   */
  async listTeamDetails(request: $_model.ListTeamDetailsRequest): Promise<$_model.ListTeamDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTeamDetailsWithOptions(request, runtime);
  }

  /**
   * Queries the task list of a specified team under a specified instance. The task metadata is sourced from the OSS bucket bound to the instance.
   * 
   * @remarks
   * Queries the task list of a specified team under a specified instance. The task metadata is sourced from the OSS bucket bound to the instance.
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
   * Queries the task list of a specified team under a specified instance. The task metadata is sourced from the OSS bucket bound to the instance.
   * 
   * @remarks
   * Queries the task list of a specified team under a specified instance. The task metadata is sourced from the OSS bucket bound to the instance.
   * 
   * @param request - ListTeamTasksRequest
   * @returns ListTeamTasksResponse
   */
  async listTeamTasks(request: $_model.ListTeamTasksRequest): Promise<$_model.ListTeamTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTeamTasksWithOptions(request, runtime);
  }

  /**
   * Queries the list of teams under a specified instance, with support for fuzzy filtering by name and pagination.
   * 
   * @remarks
   * Queries the list of teams under a specified instance, with support for fuzzy filtering by name and pagination.
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
   * Queries the list of teams under a specified instance, with support for fuzzy filtering by name and pagination.
   * 
   * @remarks
   * Queries the list of teams under a specified instance, with support for fuzzy filtering by name and pagination.
   * 
   * @param request - ListTeamsRequest
   * @returns ListTeamsResponse
   */
  async listTeams(request: $_model.ListTeamsRequest): Promise<$_model.ListTeamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTeamsWithOptions(request, runtime);
  }

  /**
   * Queries the list of users under a specified instance. Supports fuzzy match by username and paging query. The list is returned in reverse chronological order by creation time.
   * 
   * @remarks
   * Queries the list of users under a specified instance. Supports fuzzy match by username and paging query. The list is returned in reverse chronological order by creation time.
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
   * Queries the list of users under a specified instance. Supports fuzzy match by username and paging query. The list is returned in reverse chronological order by creation time.
   * 
   * @remarks
   * Queries the list of users under a specified instance. Supports fuzzy match by username and paging query. The list is returned in reverse chronological order by creation time.
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: $_model.ListUsersRequest): Promise<$_model.ListUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  /**
   * Queries a list of Worker statistics details by paging, including task count, token usage, and LLM call count.
   * 
   * @remarks
   * Queries a list of Worker statistics details by paging, including task count, token usage, and LLM call count.
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
   * Queries a list of Worker statistics details by paging, including task count, token usage, and LLM call count.
   * 
   * @remarks
   * Queries a list of Worker statistics details by paging, including task count, token usage, and LLM call count.
   * 
   * @param request - ListWorkerStatsDetailsRequest
   * @returns ListWorkerStatsDetailsResponse
   */
  async listWorkerStatsDetails(request: $_model.ListWorkerStatsDetailsRequest): Promise<$_model.ListWorkerStatsDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWorkerStatsDetailsWithOptions(request, runtime);
  }

  /**
   * Queries the list of Workers under a specified instance by using paging, with support for filtering by name, model, template, and other conditions.
   * 
   * @remarks
   * Queries the list of Workers under a specified instance by using paging, with support for filtering by name, model, template, and other conditions.
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
   * Queries the list of Workers under a specified instance by using paging, with support for filtering by name, model, template, and other conditions.
   * 
   * @remarks
   * Queries the list of Workers under a specified instance by using paging, with support for filtering by name, model, template, and other conditions.
   * 
   * @param request - ListWorkersRequest
   * @returns ListWorkersResponse
   */
  async listWorkers(request: $_model.ListWorkersRequest): Promise<$_model.ListWorkersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWorkersWithOptions(request, runtime);
  }

  /**
   * Creates or updates a CMS workspace.
   * 
   * @remarks
   * Creates or updates a CMS workspace.
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
   * Creates or updates a CMS workspace.
   * 
   * @remarks
   * Creates or updates a CMS workspace.
   * 
   * @param request - PutCmsWorkspaceRequest
   * @returns PutCmsWorkspaceResponse
   */
  async putCmsWorkspace(request: $_model.PutCmsWorkspaceRequest): Promise<$_model.PutCmsWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putCmsWorkspaceWithOptions(request, runtime);
  }

  /**
   * Queries the attribute status of a specified instance, worker, team, or individual.
   * 
   * @remarks
   * Queries the feature status of a specified instance, worker, team, or individual.
   * - This operation queries the feature status of different targets (such as INSTANCE, WORKER, TEAM, or HUMAN) under a specific instanceId.
   * - The targetScope parameter defines the target type for the query. Depending on the targetScope value, you may need to provide an additional resourceName parameter to specify the resource name.
   * - If a featureCodes list is provided, the status of those specific features is returned. Otherwise, the status of all features under the specified targetScope is returned.
   * - When using WORKER, TEAM, or HUMAN as the targetScope, make sure to correctly specify the corresponding resourceName.
   * - For INSTANCE-level queries, resourceName is not required.
   * - Feature support is affected by factors such as the base version and worker version. The unsupportedReasonCode and unsupportedReason fields provide the specific reason why a feature is not supported.
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
   * Queries the attribute status of a specified instance, worker, team, or individual.
   * 
   * @remarks
   * Queries the feature status of a specified instance, worker, team, or individual.
   * - This operation queries the feature status of different targets (such as INSTANCE, WORKER, TEAM, or HUMAN) under a specific instanceId.
   * - The targetScope parameter defines the target type for the query. Depending on the targetScope value, you may need to provide an additional resourceName parameter to specify the resource name.
   * - If a featureCodes list is provided, the status of those specific features is returned. Otherwise, the status of all features under the specified targetScope is returned.
   * - When using WORKER, TEAM, or HUMAN as the targetScope, make sure to correctly specify the corresponding resourceName.
   * - For INSTANCE-level queries, resourceName is not required.
   * - Feature support is affected by factors such as the base version and worker version. The unsupportedReasonCode and unsupportedReason fields provide the specific reason why a feature is not supported.
   * 
   * @param request - QueryFeaturesRequest
   * @returns QueryFeaturesResponse
   */
  async queryFeatures(request: $_model.QueryFeaturesRequest): Promise<$_model.QueryFeaturesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryFeaturesWithOptions(request, runtime);
  }

  /**
   * Retrieves all zone IDs supported by the current AgentTeams Resource Pool configuration.
   * 
   * @remarks
   * Retrieves all zone IDs supported by the current AgentTeams Resource Pool configuration.
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
   * Retrieves all zone IDs supported by the current AgentTeams Resource Pool configuration.
   * 
   * @remarks
   * Retrieves all zone IDs supported by the current AgentTeams Resource Pool configuration.
   * 
   * @param request - QuerySupportedZonesRequest
   * @returns QuerySupportedZonesResponse
   */
  async querySupportedZones(request: $_model.QuerySupportedZonesRequest): Promise<$_model.QuerySupportedZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySupportedZonesWithOptions(request, runtime);
  }

  /**
   * Resets the password of a specified user under a specified instance. After the reset, the user must log on with the new password.
   * 
   * @remarks
   * Resets the password of a specified user under a specified instance. After the reset, the user must log on with the new password.
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
   * Resets the password of a specified user under a specified instance. After the reset, the user must log on with the new password.
   * 
   * @remarks
   * Resets the password of a specified user under a specified instance. After the reset, the user must log on with the new password.
   * 
   * @param request - ResetUserPasswordRequest
   * @returns ResetUserPasswordResponse
   */
  async resetUserPassword(request: $_model.ResetUserPasswordRequest): Promise<$_model.ResetUserPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetUserPasswordWithOptions(request, runtime);
  }

  /**
   * Tests the connectivity of an AI model provider and model under a specified AgentTeams instance by sending a test prompt and returning the call result, latency, and token usage.
   * 
   * @remarks
   * Tests the connectivity of an AI model provider and model under a specified AgentTeams instance by sending a test prompt and returning the call result, latency, and token usage.
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
   * Tests the connectivity of an AI model provider and model under a specified AgentTeams instance by sending a test prompt and returning the call result, latency, and token usage.
   * 
   * @remarks
   * Tests the connectivity of an AI model provider and model under a specified AgentTeams instance by sending a test prompt and returning the call result, latency, and token usage.
   * 
   * @param request - TestModelProviderRequest
   * @returns TestModelProviderResponse
   */
  async testModelProvider(request: $_model.TestModelProviderRequest): Promise<$_model.TestModelProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.testModelProviderWithOptions(request, runtime);
  }

  /**
   * Unbinds the upstream identity provider from a specified instance, dissociates the identity federation relationship, and cleans up associated user identities and data.
   * 
   * @remarks
   * Unbinds the upstream identity provider from a specified instance, dissociates the identity federation relationship, and cleans up associated user identities and data.
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
   * Unbinds the upstream identity provider from a specified instance, dissociates the identity federation relationship, and cleans up associated user identities and data.
   * 
   * @remarks
   * Unbinds the upstream identity provider from a specified instance, dissociates the identity federation relationship, and cleans up associated user identities and data.
   * 
   * @param request - UnbindIdentityProviderRequest
   * @returns UnbindIdentityProviderResponse
   */
  async unbindIdentityProvider(request: $_model.UnbindIdentityProviderRequest): Promise<$_model.UnbindIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindIdentityProviderWithOptions(request, runtime);
  }

  /**
   * Updates the plaintext key of an existing credential in an AgentTeams instance.
   * 
   * @remarks
   * Updates the plaintext key of an existing credential in an AgentTeams instance.
   * - This operation updates the plaintext key of an existing Credential in an AgentTeams instance.
   * - Only the key value of the APIKeyCredentialProvider with the same name in the Agent Identity TokenVault is updated. Local metadata (description, createTime, updateTime, and status) is not modified.
   * - The response does not contain the apiKey plaintext. To obtain Worker details, call GetCredential.
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
   * Updates the plaintext key of an existing credential in an AgentTeams instance.
   * 
   * @remarks
   * Updates the plaintext key of an existing credential in an AgentTeams instance.
   * - This operation updates the plaintext key of an existing Credential in an AgentTeams instance.
   * - Only the key value of the APIKeyCredentialProvider with the same name in the Agent Identity TokenVault is updated. Local metadata (description, createTime, updateTime, and status) is not modified.
   * - The response does not contain the apiKey plaintext. To obtain Worker details, call GetCredential.
   * 
   * @param request - UpdateCredentialRequest
   * @returns UpdateCredentialResponse
   */
  async updateCredential(request: $_model.UpdateCredentialRequest): Promise<$_model.UpdateCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCredentialWithOptions(request, runtime);
  }

  /**
   * Updates the upstream identity provider configuration bound to a specified instance. You can adjust the logon switch and user synchronization switch.
   * 
   * @remarks
   * Updates the upstream identity provider configuration bound to a specified instance. You can adjust the logon switch and user synchronization switch.
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
   * Updates the upstream identity provider configuration bound to a specified instance. You can adjust the logon switch and user synchronization switch.
   * 
   * @remarks
   * Updates the upstream identity provider configuration bound to a specified instance. You can adjust the logon switch and user synchronization switch.
   * 
   * @param request - UpdateIdentityProviderRequest
   * @returns UpdateIdentityProviderResponse
   */
  async updateIdentityProvider(request: $_model.UpdateIdentityProviderRequest): Promise<$_model.UpdateIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIdentityProviderWithOptions(request, runtime);
  }

  /**
   * Changes the name of a specified AgentTeams instance. This operation supports GET and POST methods. You can only modify the instance name through this operation. You cannot change the namespace through this operation.
   * 
   * @remarks
   * Changes the name of a specified AgentTeams instance. This operation supports GET and POST methods. You can only modify the instance name through this operation. You cannot change the namespace through this operation.
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
   * Changes the name of a specified AgentTeams instance. This operation supports GET and POST methods. You can only modify the instance name through this operation. You cannot change the namespace through this operation.
   * 
   * @remarks
   * Changes the name of a specified AgentTeams instance. This operation supports GET and POST methods. You can only modify the instance name through this operation. You cannot change the namespace through this operation.
   * 
   * @param request - UpdateInstanceRequest
   * @returns UpdateInstanceResponse
   */
  async updateInstance(request: $_model.UpdateInstanceRequest): Promise<$_model.UpdateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceWithOptions(request, runtime);
  }

  /**
   * Restarts a paused asynchronous task for creating an instance.
   * 
   * @remarks
   * Restarts a paused asynchronous task for creating an instance.
   * - This operation restarts a create-instance task that is in the paused state.
   * - Only tasks of the agentteams:pay-order:create type are supported.
   * - Ensure that the InstanceId, TaskCode, and TaskId parameters are accurate. Otherwise, the request may fail.
   * - If the task is not in the paused state (PAUSED), you cannot call this operation to update the task.
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
   * Restarts a paused asynchronous task for creating an instance.
   * 
   * @remarks
   * Restarts a paused asynchronous task for creating an instance.
   * - This operation restarts a create-instance task that is in the paused state.
   * - Only tasks of the agentteams:pay-order:create type are supported.
   * - Ensure that the InstanceId, TaskCode, and TaskId parameters are accurate. Otherwise, the request may fail.
   * - If the task is not in the paused state (PAUSED), you cannot call this operation to update the task.
   * 
   * @param request - UpdateInstanceAsyncTaskRequest
   * @returns UpdateInstanceAsyncTaskResponse
   */
  async updateInstanceAsyncTask(request: $_model.UpdateInstanceAsyncTaskRequest): Promise<$_model.UpdateInstanceAsyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceAsyncTaskWithOptions(request, runtime);
  }

  /**
   * Updates the configuration of a specified MCP server, including the address list, authentication information, and description.
   * 
   * @remarks
   * Updates the configuration of a specified MCP server, including the address list, authentication information, and description.
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
   * Updates the configuration of a specified MCP server, including the address list, authentication information, and description.
   * 
   * @remarks
   * Updates the configuration of a specified MCP server, including the address list, authentication information, and description.
   * 
   * @param request - UpdateMcpRequest
   * @returns UpdateMcpResponse
   */
  async updateMcp(request: $_model.UpdateMcpRequest): Promise<$_model.UpdateMcpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMcpWithOptions(request, runtime);
  }

  /**
   * Updates the description and other information of an AI model in a specified AgentTeams instance.
   * 
   * @remarks
   * Updates the description and other information of an AI model in a specified AgentTeams instance.
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
   * Updates the description and other information of an AI model in a specified AgentTeams instance.
   * 
   * @remarks
   * Updates the description and other information of an AI model in a specified AgentTeams instance.
   * 
   * @param request - UpdateModelRequest
   * @returns UpdateModelResponse
   */
  async updateModel(request: $_model.UpdateModelRequest): Promise<$_model.UpdateModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateModelWithOptions(request, runtime);
  }

  /**
   * Updates the address, protocol list, API key, and other information of an AI model provider in a specified AgentTeams instance.
   * 
   * @remarks
   * Updates the address, protocol list, API key, and other information of an AI model provider in a specified AgentTeams instance.
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
   * Updates the address, protocol list, API key, and other information of an AI model provider in a specified AgentTeams instance.
   * 
   * @remarks
   * Updates the address, protocol list, API key, and other information of an AI model provider in a specified AgentTeams instance.
   * 
   * @param request - UpdateModelProviderRequest
   * @returns UpdateModelProviderResponse
   */
  async updateModelProvider(request: $_model.UpdateModelProviderRequest): Promise<$_model.UpdateModelProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateModelProviderWithOptions(request, runtime);
  }

  /**
   * Updates the domain name and SSL certificate information for a specified endpoint.
   * 
   * @remarks
   * Updates the domain name and SSL certificate information for a specified endpoint.
   * - This API operation supports updating endpoints of the ELEMENT or MATRIX type.
   * - If you attempt to update an endpoint of another type, a 400 error is returned.
   * - If the endpointId does not exist or does not belong to the current user instance, a 404 error is returned.
   * - When updating a domain name, the system creates or reuses a new HTTPS domain and binds it to the original endpoint route. The old domain is unbound but not deleted.
   * - If the domain or certIdentifier parameter is not specified, the existing settings are retained.
   * - Other fields such as component and gatewayType are not updated even if they are specified in the request.
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
   * Updates the domain name and SSL certificate information for a specified endpoint.
   * 
   * @remarks
   * Updates the domain name and SSL certificate information for a specified endpoint.
   * - This API operation supports updating endpoints of the ELEMENT or MATRIX type.
   * - If you attempt to update an endpoint of another type, a 400 error is returned.
   * - If the endpointId does not exist or does not belong to the current user instance, a 404 error is returned.
   * - When updating a domain name, the system creates or reuses a new HTTPS domain and binds it to the original endpoint route. The old domain is unbound but not deleted.
   * - If the domain or certIdentifier parameter is not specified, the existing settings are retained.
   * - Other fields such as component and gatewayType are not updated even if they are specified in the request.
   * 
   * @param request - UpdateServiceEndpointRequest
   * @returns UpdateServiceEndpointResponse
   */
  async updateServiceEndpoint(request: $_model.UpdateServiceEndpointRequest): Promise<$_model.UpdateServiceEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateServiceEndpointWithOptions(request, runtime);
  }

  /**
   * Updates the description and member list of a team under a specified instance, and returns the latest team information after the update.
   * 
   * @remarks
   * Updates the description and member list of a team under a specified instance, and returns the latest team information after the update.
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
   * Updates the description and member list of a team under a specified instance, and returns the latest team information after the update.
   * 
   * @remarks
   * Updates the description and member list of a team under a specified instance, and returns the latest team information after the update.
   * 
   * @param request - UpdateTeamRequest
   * @returns UpdateTeamResponse
   */
  async updateTeam(request: $_model.UpdateTeamRequest): Promise<$_model.UpdateTeamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTeamWithOptions(request, runtime);
  }

  /**
   * Updates the information of a specified user under a specified instance, including the display name, email address, authentication method, and remarks.
   * 
   * @remarks
   * Updates the information of a specified user under a specified instance, including the display name, email address, authentication method, and remarks.
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
   * Updates the information of a specified user under a specified instance, including the display name, email address, authentication method, and remarks.
   * 
   * @remarks
   * Updates the information of a specified user under a specified instance, including the display name, email address, authentication method, and remarks.
   * 
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(request: $_model.UpdateUserRequest): Promise<$_model.UpdateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

  /**
   * Updates the configuration of a specified Worker, including model, skills, template, MCP servers, channels, and quotas.
   * 
   * @remarks
   * Updates the configuration of a specified Worker, including model, skills, template, MCP servers, channels, and quotas.
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
   * Updates the configuration of a specified Worker, including model, skills, template, MCP servers, channels, and quotas.
   * 
   * @remarks
   * Updates the configuration of a specified Worker, including model, skills, template, MCP servers, channels, and quotas.
   * 
   * @param request - UpdateWorkerRequest
   * @returns UpdateWorkerResponse
   */
  async updateWorker(request: $_model.UpdateWorkerRequest): Promise<$_model.UpdateWorkerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWorkerWithOptions(request, runtime);
  }

}
