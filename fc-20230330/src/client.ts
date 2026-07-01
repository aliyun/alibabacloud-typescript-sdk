// This file is auto-generated, don't edit it
import { Readable } from 'stream';
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
      'us-west-1': "fcv3.us-west-1.aliyuncs.com",
      'us-east-1': "fcv3.us-east-1.aliyuncs.com",
      'me-central-1': "me-central-1.fc.aliyuncs.com",
      'eu-west-1': "fcv3.eu-west-1.aliyuncs.com",
      'eu-central-1': "fcv3.eu-central-1.aliyuncs.com",
      'cn-zhangjiakou': "fcv3.cn-zhangjiakou.aliyuncs.com",
      'cn-wulanchabu': "fcv3.cn-wulanchabu.aliyuncs.com",
      'cn-shenzhen': "fcv3.cn-shenzhen.aliyuncs.com",
      'cn-shanghai-finance-1': "cn-shanghai-finance-1.fc.aliyuncs.com",
      'cn-shanghai': "fcv3.cn-shanghai.aliyuncs.com",
      'cn-qingdao': "fcv3.cn-qingdao.aliyuncs.com",
      'cn-huhehaote': "fcv3.cn-huhehaote.aliyuncs.com",
      'cn-hongkong': "fcv3.cn-hongkong.aliyuncs.com",
      'cn-heyuan-acdr-1': "cn-heyuan-acdr-1.fc.aliyuncs.com",
      'cn-hangzhou-finance': "cn-hangzhou-finance.fc.aliyuncs.com",
      'cn-hangzhou': "fcv3.cn-hangzhou.aliyuncs.com",
      'cn-chengdu': "fcv3.cn-chengdu.aliyuncs.com",
      'cn-beijing': "fcv3.cn-beijing.aliyuncs.com",
      'ap-southeast-7': "fcv3.ap-southeast-7.aliyuncs.com",
      'ap-southeast-5': "fcv3.ap-southeast-5.aliyuncs.com	",
      'ap-southeast-3': "fcv3.ap-southeast-3.aliyuncs.com",
      'ap-southeast-2': "fcv3.ap-southeast-2.aliyuncs.com",
      'ap-southeast-1': "fcv3.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "fcv3.ap-south-1.aliyuncs.com",
      'ap-northeast-2': "fcv3.ap-northeast-2.aliyuncs.com",
      'ap-northeast-1': "fcv3.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("fc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Changes the resource group of a Function Compute resource.
   * 
   * @remarks
   * To change the resource group of a Function Compute resource, you must have the ChangeResourceGroup permission for both the current and target resource groups.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/resource-groups`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeResourceGroupResponse({}));
  }

  /**
   * Changes the resource group of a Function Compute resource.
   * 
   * @remarks
   * To change the resource group of a Function Compute resource, you must have the ChangeResourceGroup permission for both the current and target resource groups.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.changeResourceGroupWithOptions(request, headers, runtime);
  }

  /**
   * Creates an alias.
   * 
   * @param request - CreateAliasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAliasResponse
   */
  async createAliasWithOptions(functionName: string, request: $_model.CreateAliasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAliasResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAlias",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/aliases`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAliasResponse>(await this.callApi(params, req, runtime), new $_model.CreateAliasResponse({}));
  }

  /**
   * Creates an alias.
   * 
   * @param request - CreateAliasRequest
   * @returns CreateAliasResponse
   */
  async createAlias(functionName: string, request: $_model.CreateAliasRequest): Promise<$_model.CreateAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAliasWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Creates a custom domain name.
   * 
   * @remarks
   * You can attach a custom domain name to an application or function in Function Compute to access it through a fixed domain name in a production environment, or to resolve the forced download behavior when you access an HTTP trigger.
   * 
   * @param request - CreateCustomDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomDomainResponse
   */
  async createCustomDomainWithOptions(request: $_model.CreateCustomDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomDomainResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomDomain",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/custom-domains`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCustomDomainResponse>(await this.callApi(params, req, runtime), new $_model.CreateCustomDomainResponse({}));
  }

  /**
   * Creates a custom domain name.
   * 
   * @remarks
   * You can attach a custom domain name to an application or function in Function Compute to access it through a fixed domain name in a production environment, or to resolve the forced download behavior when you access an HTTP trigger.
   * 
   * @param request - CreateCustomDomainRequest
   * @returns CreateCustomDomainResponse
   */
  async createCustomDomain(request: $_model.CreateCustomDomainRequest): Promise<$_model.CreateCustomDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCustomDomainWithOptions(request, headers, runtime);
  }

  /**
   * Creates a function by calling the CreateFunction operation.
   * 
   * @remarks
   * When you create a function by using an OSS code package, if the error "unable to access object xxx in bucket xxx" is reported, grant the current user access permissions on the OSS bucket. For example, you can use the system access policy AliyunOSSReadOnlyAccess or a custom policy with finer granularity of authorization such as oss:GetObject. For details about the policy content, see [Grant a Resource Access Management (RAM) user permissions to read all resources in a bucket](https://help.aliyun.com/document_detail/199058.html).
   * 
   * @param request - CreateFunctionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFunctionResponse
   */
  async createFunctionWithOptions(request: $_model.CreateFunctionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFunctionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFunction",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFunctionResponse>(await this.callApi(params, req, runtime), new $_model.CreateFunctionResponse({}));
  }

  /**
   * Creates a function by calling the CreateFunction operation.
   * 
   * @remarks
   * When you create a function by using an OSS code package, if the error "unable to access object xxx in bucket xxx" is reported, grant the current user access permissions on the OSS bucket. For example, you can use the system access policy AliyunOSSReadOnlyAccess or a custom policy with finer granularity of authorization such as oss:GetObject. For details about the policy content, see [Grant a Resource Access Management (RAM) user permissions to read all resources in a bucket](https://help.aliyun.com/document_detail/199058.html).
   * 
   * @param request - CreateFunctionRequest
   * @returns CreateFunctionResponse
   */
  async createFunction(request: $_model.CreateFunctionRequest): Promise<$_model.CreateFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFunctionWithOptions(request, headers, runtime);
  }

  /**
   * This operation publishes a layer version.
   * 
   * @param request - CreateLayerVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLayerVersionResponse
   */
  async createLayerVersionWithOptions(layerName: string, request: $_model.CreateLayerVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLayerVersionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLayerVersion",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/layers/${$dara.URL.percentEncode(layerName)}/versions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLayerVersionResponse>(await this.callApi(params, req, runtime), new $_model.CreateLayerVersionResponse({}));
  }

  /**
   * This operation publishes a layer version.
   * 
   * @param request - CreateLayerVersionRequest
   * @returns CreateLayerVersionResponse
   */
  async createLayerVersion(layerName: string, request: $_model.CreateLayerVersionRequest): Promise<$_model.CreateLayerVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLayerVersionWithOptions(layerName, request, headers, runtime);
  }

  /**
   * Creates an explicit session resource. The system automatically generates a unique SessionID, pre-allocates a function instance, and binds it to the session. You can specify TTL and IdleTimeout. This operation applies to the HEADER_FIELD or GENERATED_COOKIE affinity types, enabling session warm-up and configuration initialization. After the call, you can include the session in InvokeFunction requests for request routing.
   * 
   * @param request - CreateSessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSessionResponse
   */
  async createSessionWithOptions(functionName: string, request: $_model.CreateSessionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSessionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSession",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/sessions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSessionResponse>(await this.callApi(params, req, runtime), new $_model.CreateSessionResponse({}));
  }

  /**
   * Creates an explicit session resource. The system automatically generates a unique SessionID, pre-allocates a function instance, and binds it to the session. You can specify TTL and IdleTimeout. This operation applies to the HEADER_FIELD or GENERATED_COOKIE affinity types, enabling session warm-up and configuration initialization. After the call, you can include the session in InvokeFunction requests for request routing.
   * 
   * @param request - CreateSessionRequest
   * @returns CreateSessionResponse
   */
  async createSession(functionName: string, request: $_model.CreateSessionRequest): Promise<$_model.CreateSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSessionWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Creates a trigger.
   * 
   * @param request - CreateTriggerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTriggerResponse
   */
  async createTriggerWithOptions(functionName: string, request: $_model.CreateTriggerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTriggerResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTrigger",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/triggers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTriggerResponse>(await this.callApi(params, req, runtime), new $_model.CreateTriggerResponse({}));
  }

  /**
   * Creates a trigger.
   * 
   * @param request - CreateTriggerRequest
   * @returns CreateTriggerResponse
   */
  async createTrigger(functionName: string, request: $_model.CreateTriggerRequest): Promise<$_model.CreateTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTriggerWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Creates a VPC connection.
   * 
   * @param request - CreateVpcBindingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVpcBindingResponse
   */
  async createVpcBindingWithOptions(functionName: string, request: $_model.CreateVpcBindingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVpcBindingResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVpcBinding",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/vpc-bindings`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateVpcBindingResponse>(await this.callApi(params, req, runtime), new $_model.CreateVpcBindingResponse({}));
  }

  /**
   * Creates a VPC connection.
   * 
   * @param request - CreateVpcBindingRequest
   * @returns CreateVpcBindingResponse
   */
  async createVpcBinding(functionName: string, request: $_model.CreateVpcBindingRequest): Promise<$_model.CreateVpcBindingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createVpcBindingWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Deletes an alias.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAliasResponse
   */
  async deleteAliasWithOptions(functionName: string, aliasName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAliasResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAlias",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/aliases/${$dara.URL.percentEncode(aliasName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteAliasResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAliasResponse({}));
  }

  /**
   * Deletes an alias.
   * @returns DeleteAliasResponse
   */
  async deleteAlias(functionName: string, aliasName: string): Promise<$_model.DeleteAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAliasWithOptions(functionName, aliasName, headers, runtime);
  }

  /**
   * Deletes an asynchronous invocation configuration.
   * 
   * @param request - DeleteAsyncInvokeConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAsyncInvokeConfigResponse
   */
  async deleteAsyncInvokeConfigWithOptions(functionName: string, request: $_model.DeleteAsyncInvokeConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAsyncInvokeConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAsyncInvokeConfig",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/async-invoke-config`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteAsyncInvokeConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAsyncInvokeConfigResponse({}));
  }

  /**
   * Deletes an asynchronous invocation configuration.
   * 
   * @param request - DeleteAsyncInvokeConfigRequest
   * @returns DeleteAsyncInvokeConfigResponse
   */
  async deleteAsyncInvokeConfig(functionName: string, request: $_model.DeleteAsyncInvokeConfigRequest): Promise<$_model.DeleteAsyncInvokeConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAsyncInvokeConfigWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Deletes a concurrency configuration.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConcurrencyConfigResponse
   */
  async deleteConcurrencyConfigWithOptions(functionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConcurrencyConfigResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConcurrencyConfig",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/concurrency`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteConcurrencyConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConcurrencyConfigResponse({}));
  }

  /**
   * Deletes a concurrency configuration.
   * @returns DeleteConcurrencyConfigResponse
   */
  async deleteConcurrencyConfig(functionName: string): Promise<$_model.DeleteConcurrencyConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConcurrencyConfigWithOptions(functionName, headers, runtime);
  }

  /**
   * Deletes a custom domain name.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomDomainResponse
   */
  async deleteCustomDomainWithOptions(domainName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomDomainResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomDomain",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/custom-domains/${$dara.URL.percentEncode(domainName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteCustomDomainResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomDomainResponse({}));
  }

  /**
   * Deletes a custom domain name.
   * @returns DeleteCustomDomainResponse
   */
  async deleteCustomDomain(domainName: string): Promise<$_model.DeleteCustomDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCustomDomainWithOptions(domainName, headers, runtime);
  }

  /**
   * Deletes a function.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFunctionResponse
   */
  async deleteFunctionWithOptions(functionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFunctionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFunction",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteFunctionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFunctionResponse({}));
  }

  /**
   * Deletes a function.
   * @returns DeleteFunctionResponse
   */
  async deleteFunction(functionName: string): Promise<$_model.DeleteFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFunctionWithOptions(functionName, headers, runtime);
  }

  /**
   * Deletes a function version.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFunctionVersionResponse
   */
  async deleteFunctionVersionWithOptions(functionName: string, versionId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFunctionVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFunctionVersion",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/versions/${$dara.URL.percentEncode(versionId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteFunctionVersionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFunctionVersionResponse({}));
  }

  /**
   * Deletes a function version.
   * @returns DeleteFunctionVersionResponse
   */
  async deleteFunctionVersion(functionName: string, versionId: string): Promise<$_model.DeleteFunctionVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFunctionVersionWithOptions(functionName, versionId, headers, runtime);
  }

  /**
   * Deletes a layer version.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLayerVersionResponse
   */
  async deleteLayerVersionWithOptions(layerName: string, version: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLayerVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLayerVersion",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/layers/${$dara.URL.percentEncode(layerName)}/versions/${$dara.URL.percentEncode(version)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteLayerVersionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLayerVersionResponse({}));
  }

  /**
   * Deletes a layer version.
   * @returns DeleteLayerVersionResponse
   */
  async deleteLayerVersion(layerName: string, version: string): Promise<$_model.DeleteLayerVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLayerVersionWithOptions(layerName, version, headers, runtime);
  }

  /**
   * Deletes a provisioned configuration.
   * 
   * @param request - DeleteProvisionConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProvisionConfigResponse
   */
  async deleteProvisionConfigWithOptions(functionName: string, request: $_model.DeleteProvisionConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProvisionConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProvisionConfig",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/provision-config`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteProvisionConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProvisionConfigResponse({}));
  }

  /**
   * Deletes a provisioned configuration.
   * 
   * @param request - DeleteProvisionConfigRequest
   * @returns DeleteProvisionConfigResponse
   */
  async deleteProvisionConfig(functionName: string, request: $_model.DeleteProvisionConfigRequest): Promise<$_model.DeleteProvisionConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProvisionConfigWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Deletes the scaling settings of a function.
   * 
   * @param request - DeleteScalingConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScalingConfigResponse
   */
  async deleteScalingConfigWithOptions(functionName: string, request: $_model.DeleteScalingConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteScalingConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteScalingConfig",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/scaling-config`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteScalingConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteScalingConfigResponse({}));
  }

  /**
   * Deletes the scaling settings of a function.
   * 
   * @param request - DeleteScalingConfigRequest
   * @returns DeleteScalingConfigResponse
   */
  async deleteScalingConfig(functionName: string, request: $_model.DeleteScalingConfigRequest): Promise<$_model.DeleteScalingConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteScalingConfigWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Deletes the specified session and prohibits new requests from being routed to it. Clears the session metadata from the database, so subsequent requests with the same session ID are treated as new sessions. Releases resources and performs session cleanup. In session isolation scenarios, terminates running requests and releases the instance bound to the session. In non-session isolation scenarios, allows running requests to continue and gracefully terminates them.
   * 
   * @param request - DeleteSessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSessionResponse
   */
  async deleteSessionWithOptions(functionName: string, sessionId: string, request: $_model.DeleteSessionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSessionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSession",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/sessions/${$dara.URL.percentEncode(sessionId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteSessionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSessionResponse({}));
  }

  /**
   * Deletes the specified session and prohibits new requests from being routed to it. Clears the session metadata from the database, so subsequent requests with the same session ID are treated as new sessions. Releases resources and performs session cleanup. In session isolation scenarios, terminates running requests and releases the instance bound to the session. In non-session isolation scenarios, allows running requests to continue and gracefully terminates them.
   * 
   * @param request - DeleteSessionRequest
   * @returns DeleteSessionResponse
   */
  async deleteSession(functionName: string, sessionId: string, request: $_model.DeleteSessionRequest): Promise<$_model.DeleteSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSessionWithOptions(functionName, sessionId, request, headers, runtime);
  }

  /**
   * Deletes the specified trigger.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTriggerResponse
   */
  async deleteTriggerWithOptions(functionName: string, triggerName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTriggerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTrigger",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/triggers/${$dara.URL.percentEncode(triggerName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteTriggerResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTriggerResponse({}));
  }

  /**
   * Deletes the specified trigger.
   * @returns DeleteTriggerResponse
   */
  async deleteTrigger(functionName: string, triggerName: string): Promise<$_model.DeleteTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTriggerWithOptions(functionName, triggerName, headers, runtime);
  }

  /**
   * Deletes an access control policy from a specified VPC firewall policy group.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVpcBindingResponse
   */
  async deleteVpcBindingWithOptions(functionName: string, vpcId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVpcBindingResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVpcBinding",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/vpc-bindings/${$dara.URL.percentEncode(vpcId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteVpcBindingResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVpcBindingResponse({}));
  }

  /**
   * Deletes an access control policy from a specified VPC firewall policy group.
   * @returns DeleteVpcBindingResponse
   */
  async deleteVpcBinding(functionName: string, vpcId: string): Promise<$_model.DeleteVpcBindingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteVpcBindingWithOptions(functionName, vpcId, headers, runtime);
  }

  /**
   * Queries the regions where Function Compute 3.0 is available.
   * 
   * @param request - DescribeRegionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/regions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionsResponse({}));
  }

  /**
   * Queries the regions where Function Compute 3.0 is available.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRegionsWithOptions(request, headers, runtime);
  }

  /**
   * Disables function invocations. You can also stop all ongoing requests. When a function is disabled, new instances cannot be created and provisioned instances are destroyed. This OpenAPI is in beta.
   * 
   * @remarks
   * Use caution when calling this API for functions in a production environment because disabling function invocations can disrupt your services.
   * 
   * @param request - DisableFunctionInvocationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableFunctionInvocationResponse
   */
  async disableFunctionInvocationWithOptions(functionName: string, request: $_model.DisableFunctionInvocationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DisableFunctionInvocationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.abortOngoingRequest)) {
      body["abortOngoingRequest"] = request.abortOngoingRequest;
    }

    if (!$dara.isNull(request.reason)) {
      body["reason"] = request.reason;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableFunctionInvocation",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/invoke/disable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableFunctionInvocationResponse>(await this.callApi(params, req, runtime), new $_model.DisableFunctionInvocationResponse({}));
  }

  /**
   * Disables function invocations. You can also stop all ongoing requests. When a function is disabled, new instances cannot be created and provisioned instances are destroyed. This OpenAPI is in beta.
   * 
   * @remarks
   * Use caution when calling this API for functions in a production environment because disabling function invocations can disrupt your services.
   * 
   * @param request - DisableFunctionInvocationRequest
   * @returns DisableFunctionInvocationResponse
   */
  async disableFunctionInvocation(functionName: string, request: $_model.DisableFunctionInvocationRequest): Promise<$_model.DisableFunctionInvocationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableFunctionInvocationWithOptions(functionName, request, headers, runtime);
  }

  /**
   * The EnableFunctionInvocation operation allows a function to be invoked and resumes the creation of provisioned instances. This operation is currently in private preview.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableFunctionInvocationResponse
   */
  async enableFunctionInvocationWithOptions(functionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EnableFunctionInvocationResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableFunctionInvocation",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/invoke/enable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableFunctionInvocationResponse>(await this.callApi(params, req, runtime), new $_model.EnableFunctionInvocationResponse({}));
  }

  /**
   * The EnableFunctionInvocation operation allows a function to be invoked and resumes the creation of provisioned instances. This operation is currently in private preview.
   * @returns EnableFunctionInvocationResponse
   */
  async enableFunctionInvocation(functionName: string): Promise<$_model.EnableFunctionInvocationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableFunctionInvocationWithOptions(functionName, headers, runtime);
  }

  /**
   * Retrieves information about an alias.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAliasResponse
   */
  async getAliasWithOptions(functionName: string, aliasName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAliasResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAlias",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/aliases/${$dara.URL.percentEncode(aliasName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAliasResponse>(await this.callApi(params, req, runtime), new $_model.GetAliasResponse({}));
  }

  /**
   * Retrieves information about an alias.
   * @returns GetAliasResponse
   */
  async getAlias(functionName: string, aliasName: string): Promise<$_model.GetAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAliasWithOptions(functionName, aliasName, headers, runtime);
  }

  /**
   * Retrieves the asynchronous invocation configuration of a specified function.
   * 
   * @param request - GetAsyncInvokeConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAsyncInvokeConfigResponse
   */
  async getAsyncInvokeConfigWithOptions(functionName: string, request: $_model.GetAsyncInvokeConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAsyncInvokeConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAsyncInvokeConfig",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/async-invoke-config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAsyncInvokeConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetAsyncInvokeConfigResponse({}));
  }

  /**
   * Retrieves the asynchronous invocation configuration of a specified function.
   * 
   * @param request - GetAsyncInvokeConfigRequest
   * @returns GetAsyncInvokeConfigResponse
   */
  async getAsyncInvokeConfig(functionName: string, request: $_model.GetAsyncInvokeConfigRequest): Promise<$_model.GetAsyncInvokeConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAsyncInvokeConfigWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Retrieves the details of a specified asynchronous task.
   * 
   * @param request - GetAsyncTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAsyncTaskResponse
   */
  async getAsyncTaskWithOptions(functionName: string, taskId: string, request: $_model.GetAsyncTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAsyncTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAsyncTask",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/async-tasks/${$dara.URL.percentEncode(taskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAsyncTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetAsyncTaskResponse({}));
  }

  /**
   * Retrieves the details of a specified asynchronous task.
   * 
   * @param request - GetAsyncTaskRequest
   * @returns GetAsyncTaskResponse
   */
  async getAsyncTask(functionName: string, taskId: string, request: $_model.GetAsyncTaskRequest): Promise<$_model.GetAsyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAsyncTaskWithOptions(functionName, taskId, request, headers, runtime);
  }

  /**
   * Retrieves the concurrency configuration.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConcurrencyConfigResponse
   */
  async getConcurrencyConfigWithOptions(functionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetConcurrencyConfigResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConcurrencyConfig",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/concurrency`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConcurrencyConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetConcurrencyConfigResponse({}));
  }

  /**
   * Retrieves the concurrency configuration.
   * @returns GetConcurrencyConfigResponse
   */
  async getConcurrencyConfig(functionName: string): Promise<$_model.GetConcurrencyConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConcurrencyConfigWithOptions(functionName, headers, runtime);
  }

  /**
   * Retrieves the configuration of a custom domain name.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomDomainResponse
   */
  async getCustomDomainWithOptions(domainName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCustomDomainResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCustomDomain",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/custom-domains/${$dara.URL.percentEncode(domainName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCustomDomainResponse>(await this.callApi(params, req, runtime), new $_model.GetCustomDomainResponse({}));
  }

  /**
   * Retrieves the configuration of a custom domain name.
   * @returns GetCustomDomainResponse
   */
  async getCustomDomain(domainName: string): Promise<$_model.GetCustomDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCustomDomainWithOptions(domainName, headers, runtime);
  }

  /**
   * Retrieves information about a function.
   * 
   * @param request - GetFunctionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFunctionResponse
   */
  async getFunctionWithOptions(functionName: string, request: $_model.GetFunctionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetFunctionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFunction",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFunctionResponse>(await this.callApi(params, req, runtime), new $_model.GetFunctionResponse({}));
  }

  /**
   * Retrieves information about a function.
   * 
   * @param request - GetFunctionRequest
   * @returns GetFunctionResponse
   */
  async getFunction(functionName: string, request: $_model.GetFunctionRequest): Promise<$_model.GetFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFunctionWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Retrieves the details of a function code package.
   * 
   * @param request - GetFunctionCodeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFunctionCodeResponse
   */
  async getFunctionCodeWithOptions(functionName: string, request: $_model.GetFunctionCodeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetFunctionCodeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFunctionCode",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/code`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFunctionCodeResponse>(await this.callApi(params, req, runtime), new $_model.GetFunctionCodeResponse({}));
  }

  /**
   * Retrieves the details of a function code package.
   * 
   * @param request - GetFunctionCodeRequest
   * @returns GetFunctionCodeResponse
   */
  async getFunctionCode(functionName: string, request: $_model.GetFunctionCodeRequest): Promise<$_model.GetFunctionCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFunctionCodeWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Retrieves information about a layer version.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLayerVersionResponse
   */
  async getLayerVersionWithOptions(layerName: string, version: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLayerVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLayerVersion",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/layers/${$dara.URL.percentEncode(layerName)}/versions/${$dara.URL.percentEncode(version)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLayerVersionResponse>(await this.callApi(params, req, runtime), new $_model.GetLayerVersionResponse({}));
  }

  /**
   * Retrieves information about a layer version.
   * @returns GetLayerVersionResponse
   */
  async getLayerVersion(layerName: string, version: string): Promise<$_model.GetLayerVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLayerVersionWithOptions(layerName, version, headers, runtime);
  }

  /**
   * Retrieves the version information of a layer by its Alibaba Cloud Resource Name (ARN).
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLayerVersionByArnResponse
   */
  async getLayerVersionByArnWithOptions(arn: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLayerVersionByArnResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLayerVersionByArn",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/layerarn/${$dara.URL.percentEncode(arn)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLayerVersionByArnResponse>(await this.callApi(params, req, runtime), new $_model.GetLayerVersionByArnResponse({}));
  }

  /**
   * Retrieves the version information of a layer by its Alibaba Cloud Resource Name (ARN).
   * @returns GetLayerVersionByArnResponse
   */
  async getLayerVersionByArn(arn: string): Promise<$_model.GetLayerVersionByArnResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLayerVersionByArnWithOptions(arn, headers, runtime);
  }

  /**
   * Retrieves the provisioned configuration.
   * 
   * @param request - GetProvisionConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProvisionConfigResponse
   */
  async getProvisionConfigWithOptions(functionName: string, request: $_model.GetProvisionConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetProvisionConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProvisionConfig",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/provision-config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProvisionConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetProvisionConfigResponse({}));
  }

  /**
   * Retrieves the provisioned configuration.
   * 
   * @param request - GetProvisionConfigRequest
   * @returns GetProvisionConfigResponse
   */
  async getProvisionConfig(functionName: string, request: $_model.GetProvisionConfigRequest): Promise<$_model.GetProvisionConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProvisionConfigWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Retrieves the scaling configuration for a function.
   * 
   * @param request - GetScalingConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScalingConfigResponse
   */
  async getScalingConfigWithOptions(functionName: string, request: $_model.GetScalingConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetScalingConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetScalingConfig",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/scaling-config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetScalingConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetScalingConfigResponse({}));
  }

  /**
   * Retrieves the scaling configuration for a function.
   * 
   * @param request - GetScalingConfigRequest
   * @returns GetScalingConfigResponse
   */
  async getScalingConfig(functionName: string, request: $_model.GetScalingConfigRequest): Promise<$_model.GetScalingConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getScalingConfigWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Retrieves the details of a specified session, including the session ID, associated function, affinity type, lifecycle configuration, status, and instance information. This operation queries the current metadata of a single session and supports exact matching by functionName and qualifier for external system monitoring and debugging. Only sessions in the Active state can be queried.
   * 
   * @param request - GetSessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSessionResponse
   */
  async getSessionWithOptions(functionName: string, sessionId: string, request: $_model.GetSessionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSessionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSession",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/sessions/${$dara.URL.percentEncode(sessionId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSessionResponse>(await this.callApi(params, req, runtime), new $_model.GetSessionResponse({}));
  }

  /**
   * Retrieves the details of a specified session, including the session ID, associated function, affinity type, lifecycle configuration, status, and instance information. This operation queries the current metadata of a single session and supports exact matching by functionName and qualifier for external system monitoring and debugging. Only sessions in the Active state can be queried.
   * 
   * @param request - GetSessionRequest
   * @returns GetSessionResponse
   */
  async getSession(functionName: string, sessionId: string, request: $_model.GetSessionRequest): Promise<$_model.GetSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSessionWithOptions(functionName, sessionId, request, headers, runtime);
  }

  /**
   * Retrieves the details of a specified trigger.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTriggerResponse
   */
  async getTriggerWithOptions(functionName: string, triggerName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTriggerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTrigger",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/triggers/${$dara.URL.percentEncode(triggerName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTriggerResponse>(await this.callApi(params, req, runtime), new $_model.GetTriggerResponse({}));
  }

  /**
   * Retrieves the details of a specified trigger.
   * @returns GetTriggerResponse
   */
  async getTrigger(functionName: string, triggerName: string): Promise<$_model.GetTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTriggerWithOptions(functionName, triggerName, headers, runtime);
  }

  /**
   * Invokes a function.
   * 
   * @param request - InvokeFunctionRequest
   * @param headers - InvokeFunctionHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvokeFunctionResponse
   */
  async invokeFunctionWithOptions(functionName: string, request: $_model.InvokeFunctionRequest, headers: $_model.InvokeFunctionHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.InvokeFunctionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xFcAsyncTaskId)) {
      realHeaders["x-fc-async-task-id"] = String(headers.xFcAsyncTaskId);
    }

    if (!$dara.isNull(headers.xFcInvocationType)) {
      realHeaders["x-fc-invocation-type"] = String(headers.xFcInvocationType);
    }

    if (!$dara.isNull(headers.xFcLogType)) {
      realHeaders["x-fc-log-type"] = String(headers.xFcLogType);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "InvokeFunction",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/invocations`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "binary",
    });
    let res = new $_model.InvokeFunctionResponse({ });
    let tmp = await this.callApi(params, req, runtime);
    if (!$dara.isNull(tmp["body"])) {
      let respBody = tmp["body"] instanceof Readable ? tmp["body"] : Readable.from(tmp["body"]);
      res.body = respBody;
    }

    if (!$dara.isNull(tmp["headers"])) {
      let respHeaders = tmp["headers"];
      res.headers = OpenApiUtil.stringifyMapValue(respHeaders);
    }

    if (!$dara.isNull(tmp["statusCode"])) {
      let statusCode = parseInt(tmp["statusCode"]);
      res.statusCode = statusCode;
    }

    return res;
  }

  /**
   * Invokes a function.
   * 
   * @param request - InvokeFunctionRequest
   * @returns InvokeFunctionResponse
   */
  async invokeFunction(functionName: string, request: $_model.InvokeFunctionRequest): Promise<$_model.InvokeFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.InvokeFunctionHeaders({ });
    return await this.invokeFunctionWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Lists aliases.
   * 
   * @param request - ListAliasesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAliasesResponse
   */
  async listAliasesWithOptions(functionName: string, request: $_model.ListAliasesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAliasesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAliases",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/aliases`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAliasesResponse>(await this.callApi(params, req, runtime), new $_model.ListAliasesResponse({}));
  }

  /**
   * Lists aliases.
   * 
   * @param request - ListAliasesRequest
   * @returns ListAliasesResponse
   */
  async listAliases(functionName: string, request: $_model.ListAliasesRequest): Promise<$_model.ListAliasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAliasesWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Lists the asynchronous invocation configurations for one or more functions.
   * 
   * @param request - ListAsyncInvokeConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAsyncInvokeConfigsResponse
   */
  async listAsyncInvokeConfigsWithOptions(request: $_model.ListAsyncInvokeConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAsyncInvokeConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.functionName)) {
      query["functionName"] = request.functionName;
    }

    if (!$dara.isNull(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAsyncInvokeConfigs",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/async-invoke-configs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAsyncInvokeConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListAsyncInvokeConfigsResponse({}));
  }

  /**
   * Lists the asynchronous invocation configurations for one or more functions.
   * 
   * @param request - ListAsyncInvokeConfigsRequest
   * @returns ListAsyncInvokeConfigsResponse
   */
  async listAsyncInvokeConfigs(request: $_model.ListAsyncInvokeConfigsRequest): Promise<$_model.ListAsyncInvokeConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAsyncInvokeConfigsWithOptions(request, headers, runtime);
  }

  /**
   * Lists the details of asynchronous tasks.
   * 
   * @param request - ListAsyncTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAsyncTasksResponse
   */
  async listAsyncTasksWithOptions(functionName: string, request: $_model.ListAsyncTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAsyncTasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.includePayload)) {
      query["includePayload"] = request.includePayload;
    }

    if (!$dara.isNull(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    if (!$dara.isNull(request.sortOrderByTime)) {
      query["sortOrderByTime"] = request.sortOrderByTime;
    }

    if (!$dara.isNull(request.startedTimeBegin)) {
      query["startedTimeBegin"] = request.startedTimeBegin;
    }

    if (!$dara.isNull(request.startedTimeEnd)) {
      query["startedTimeEnd"] = request.startedTimeEnd;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAsyncTasks",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/async-tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAsyncTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListAsyncTasksResponse({}));
  }

  /**
   * Lists the details of asynchronous tasks.
   * 
   * @param request - ListAsyncTasksRequest
   * @returns ListAsyncTasksResponse
   */
  async listAsyncTasks(functionName: string, request: $_model.ListAsyncTasksRequest): Promise<$_model.ListAsyncTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAsyncTasksWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Lists the concurrency configurations.
   * 
   * @param request - ListConcurrencyConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConcurrencyConfigsResponse
   */
  async listConcurrencyConfigsWithOptions(request: $_model.ListConcurrencyConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListConcurrencyConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.functionName)) {
      query["functionName"] = request.functionName;
    }

    if (!$dara.isNull(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConcurrencyConfigs",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/concurrency-configs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConcurrencyConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListConcurrencyConfigsResponse({}));
  }

  /**
   * Lists the concurrency configurations.
   * 
   * @param request - ListConcurrencyConfigsRequest
   * @returns ListConcurrencyConfigsResponse
   */
  async listConcurrencyConfigs(request: $_model.ListConcurrencyConfigsRequest): Promise<$_model.ListConcurrencyConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConcurrencyConfigsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a list of custom domain names.
   * 
   * @param request - ListCustomDomainsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomDomainsResponse
   */
  async listCustomDomainsWithOptions(request: $_model.ListCustomDomainsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomDomainsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomDomains",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/custom-domains`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCustomDomainsResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomDomainsResponse({}));
  }

  /**
   * Retrieves a list of custom domain names.
   * 
   * @param request - ListCustomDomainsRequest
   * @returns ListCustomDomainsResponse
   */
  async listCustomDomains(request: $_model.ListCustomDomainsRequest): Promise<$_model.ListCustomDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCustomDomainsWithOptions(request, headers, runtime);
  }

  /**
   * Lists the versions of a specified function.
   * 
   * @param request - ListFunctionVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFunctionVersionsResponse
   */
  async listFunctionVersionsWithOptions(functionName: string, request: $_model.ListFunctionVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListFunctionVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.direction)) {
      query["direction"] = request.direction;
    }

    if (!$dara.isNull(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFunctionVersions",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFunctionVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListFunctionVersionsResponse({}));
  }

  /**
   * Lists the versions of a specified function.
   * 
   * @param request - ListFunctionVersionsRequest
   * @returns ListFunctionVersionsResponse
   */
  async listFunctionVersions(functionName: string, request: $_model.ListFunctionVersionsRequest): Promise<$_model.ListFunctionVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFunctionVersionsWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Retrieves a list of functions.
   * 
   * @remarks
   * ListFunctions returns only a subset of fields for function properties. To retrieve additional property fields for a specific function, including state, stateReasonCode, stateReason, lastUpdateStatus, lastUpdateStatusReasonCode, and lastUpdateStatusReason, use [GetFunction](https://help.aliyun.com/document_detail/2618610.html).
   * 
   * @param tmpReq - ListFunctionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFunctionsResponse
   */
  async listFunctionsWithOptions(tmpReq: $_model.ListFunctionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListFunctionsResponse> {
    tmpReq.validate();
    let request = new $_model.ListFunctionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.fcVersion)) {
      query["fcVersion"] = request.fcVersion;
    }

    if (!$dara.isNull(request.functionName)) {
      query["functionName"] = request.functionName;
    }

    if (!$dara.isNull(request.gpuType)) {
      query["gpuType"] = request.gpuType;
    }

    if (!$dara.isNull(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.runtime)) {
      query["runtime"] = request.runtime;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFunctions",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFunctionsResponse>(await this.callApi(params, req, runtime), new $_model.ListFunctionsResponse({}));
  }

  /**
   * Retrieves a list of functions.
   * 
   * @remarks
   * ListFunctions returns only a subset of fields for function properties. To retrieve additional property fields for a specific function, including state, stateReasonCode, stateReason, lastUpdateStatus, lastUpdateStatusReasonCode, and lastUpdateStatusReason, use [GetFunction](https://help.aliyun.com/document_detail/2618610.html).
   * 
   * @param request - ListFunctionsRequest
   * @returns ListFunctionsResponse
   */
  async listFunctions(request: $_model.ListFunctionsRequest): Promise<$_model.ListFunctionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFunctionsWithOptions(request, headers, runtime);
  }

  /**
   * Lists function instances.
   * 
   * @param tmpReq - ListInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(functionName: string, tmpReq: $_model.ListInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.ListInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "instanceIds", "json");
    }

    if (!$dara.isNull(tmpReq.instanceStatus)) {
      request.instanceStatusShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceStatus, "instanceStatus", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTimeMs)) {
      query["endTimeMs"] = request.endTimeMs;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["instanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.instanceStatusShrink)) {
      query["instanceStatus"] = request.instanceStatusShrink;
    }

    if (!$dara.isNull(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    if (!$dara.isNull(request.startKey)) {
      query["startKey"] = request.startKey;
    }

    if (!$dara.isNull(request.startTimeMs)) {
      query["startTimeMs"] = request.startTimeMs;
    }

    if (!$dara.isNull(request.withAllActive)) {
      query["withAllActive"] = request.withAllActive;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancesResponse({}));
  }

  /**
   * Lists function instances.
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(functionName: string, request: $_model.ListInstancesRequest): Promise<$_model.ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Retrieves a list of layer versions.
   * 
   * @param request - ListLayerVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLayerVersionsResponse
   */
  async listLayerVersionsWithOptions(layerName: string, request: $_model.ListLayerVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListLayerVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!$dara.isNull(request.startVersion)) {
      query["startVersion"] = request.startVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLayerVersions",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/layers/${$dara.URL.percentEncode(layerName)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLayerVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListLayerVersionsResponse({}));
  }

  /**
   * Retrieves a list of layer versions.
   * 
   * @param request - ListLayerVersionsRequest
   * @returns ListLayerVersionsResponse
   */
  async listLayerVersions(layerName: string, request: $_model.ListLayerVersionsRequest): Promise<$_model.ListLayerVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLayerVersionsWithOptions(layerName, request, headers, runtime);
  }

  /**
   * Lists layers.
   * 
   * @param request - ListLayersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLayersResponse
   */
  async listLayersWithOptions(request: $_model.ListLayersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListLayersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.official)) {
      query["official"] = request.official;
    }

    if (!$dara.isNull(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    if (!$dara.isNull(request.public)) {
      query["public"] = request.public;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLayers",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/layers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLayersResponse>(await this.callApi(params, req, runtime), new $_model.ListLayersResponse({}));
  }

  /**
   * Lists layers.
   * 
   * @param request - ListLayersRequest
   * @returns ListLayersResponse
   */
  async listLayers(request: $_model.ListLayersRequest): Promise<$_model.ListLayersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLayersWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a list of provisioned configurations.
   * 
   * @param request - ListProvisionConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProvisionConfigsResponse
   */
  async listProvisionConfigsWithOptions(request: $_model.ListProvisionConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListProvisionConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.functionName)) {
      query["functionName"] = request.functionName;
    }

    if (!$dara.isNull(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProvisionConfigs",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/provision-configs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProvisionConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListProvisionConfigsResponse({}));
  }

  /**
   * Retrieves a list of provisioned configurations.
   * 
   * @param request - ListProvisionConfigsRequest
   * @returns ListProvisionConfigsResponse
   */
  async listProvisionConfigs(request: $_model.ListProvisionConfigsRequest): Promise<$_model.ListProvisionConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProvisionConfigsWithOptions(request, headers, runtime);
  }

  /**
   * Lists the auto scaling configurations for a function.
   * 
   * @param request - ListScalingConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScalingConfigsResponse
   */
  async listScalingConfigsWithOptions(request: $_model.ListScalingConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListScalingConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.functionName)) {
      query["functionName"] = request.functionName;
    }

    if (!$dara.isNull(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScalingConfigs",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/scaling-configs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListScalingConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListScalingConfigsResponse({}));
  }

  /**
   * Lists the auto scaling configurations for a function.
   * 
   * @param request - ListScalingConfigsRequest
   * @returns ListScalingConfigsResponse
   */
  async listScalingConfigs(request: $_model.ListScalingConfigsRequest): Promise<$_model.ListScalingConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listScalingConfigsWithOptions(request, headers, runtime);
  }

  /**
   * Lists sessions in Active or Expired status under a specified function. Supports filtering by qualifier, status, and session ID, and supports paged query. Returns basic session properties for batch viewing of session distribution and status, facilitating operations management and external system integration, and improving session visibility and management capability.
   * 
   * @param request - ListSessionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSessionsResponse
   */
  async listSessionsWithOptions(functionName: string, request: $_model.ListSessionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSessionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.sessionStatus)) {
      query["sessionStatus"] = request.sessionStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSessions",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/sessions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSessionsResponse>(await this.callApi(params, req, runtime), new $_model.ListSessionsResponse({}));
  }

  /**
   * Lists sessions in Active or Expired status under a specified function. Supports filtering by qualifier, status, and session ID, and supports paged query. Returns basic session properties for batch viewing of session distribution and status, facilitating operations management and external system integration, and improving session visibility and management capability.
   * 
   * @param request - ListSessionsRequest
   * @returns ListSessionsResponse
   */
  async listSessions(functionName: string, request: $_model.ListSessionsRequest): Promise<$_model.ListSessionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSessionsWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Lists all tagged resources.
   * 
   * @param tmpReq - ListTagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(tmpReq: $_model.ListTagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    tmpReq.validate();
    let request = new $_model.ListTagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceId)) {
      request.resourceIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceId, "ResourceId", "json");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceIdShrink)) {
      query["ResourceId"] = request.resourceIdShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/tags-v2`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResourcesResponse({}));
  }

  /**
   * Lists all tagged resources.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Lists the triggers for a specified function.
   * 
   * @param request - ListTriggersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTriggersResponse
   */
  async listTriggersWithOptions(functionName: string, request: $_model.ListTriggersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTriggersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTriggers",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/triggers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTriggersResponse>(await this.callApi(params, req, runtime), new $_model.ListTriggersResponse({}));
  }

  /**
   * Lists the triggers for a specified function.
   * 
   * @param request - ListTriggersRequest
   * @returns ListTriggersResponse
   */
  async listTriggers(functionName: string, request: $_model.ListTriggersRequest): Promise<$_model.ListTriggersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTriggersWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Queries existing VPC attachments.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVpcBindingsResponse
   */
  async listVpcBindingsWithOptions(functionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListVpcBindingsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVpcBindings",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/vpc-bindings`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVpcBindingsResponse>(await this.callApi(params, req, runtime), new $_model.ListVpcBindingsResponse({}));
  }

  /**
   * Queries existing VPC attachments.
   * @returns ListVpcBindingsResponse
   */
  async listVpcBindings(functionName: string): Promise<$_model.ListVpcBindingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVpcBindingsWithOptions(functionName, headers, runtime);
  }

  /**
   * Pauses and saves a session.
   * 
   * @remarks
   * Pauses an active session by persisting the state of its associated runtime environment and then releasing compute resources. After the call, the session status changes to Paused, and the session no longer accepts function invocation requests. This operation retains the session configuration (such as SessionTTL) and SessionID. You can use this operation to interrupt long-running tasks or save snapshots of development environments for cost optimization and state management. This operation applies to custom image functions that are configured with the HEADER_FIELD or GENERATED_COOKIE affinity type and session isolation.
   * 
   * @param request - PauseSessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PauseSessionResponse
   */
  async pauseSessionWithOptions(functionName: string, sessionId: string, request: $_model.PauseSessionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PauseSessionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PauseSession",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/sessions/${$dara.URL.percentEncode(sessionId)}/pause`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PauseSessionResponse>(await this.callApi(params, req, runtime), new $_model.PauseSessionResponse({}));
  }

  /**
   * Pauses and saves a session.
   * 
   * @remarks
   * Pauses an active session by persisting the state of its associated runtime environment and then releasing compute resources. After the call, the session status changes to Paused, and the session no longer accepts function invocation requests. This operation retains the session configuration (such as SessionTTL) and SessionID. You can use this operation to interrupt long-running tasks or save snapshots of development environments for cost optimization and state management. This operation applies to custom image functions that are configured with the HEADER_FIELD or GENERATED_COOKIE affinity type and session isolation.
   * 
   * @param request - PauseSessionRequest
   * @returns PauseSessionResponse
   */
  async pauseSession(functionName: string, sessionId: string, request: $_model.PauseSessionRequest): Promise<$_model.PauseSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pauseSessionWithOptions(functionName, sessionId, request, headers, runtime);
  }

  /**
   * Publishes a function version.
   * 
   * @param request - PublishFunctionVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishFunctionVersionResponse
   */
  async publishFunctionVersionWithOptions(functionName: string, request: $_model.PublishFunctionVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PublishFunctionVersionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishFunctionVersion",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/versions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishFunctionVersionResponse>(await this.callApi(params, req, runtime), new $_model.PublishFunctionVersionResponse({}));
  }

  /**
   * Publishes a function version.
   * 
   * @param request - PublishFunctionVersionRequest
   * @returns PublishFunctionVersionResponse
   */
  async publishFunctionVersion(functionName: string, request: $_model.PublishFunctionVersionRequest): Promise<$_model.PublishFunctionVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishFunctionVersionWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Creates or updates the asynchronous invocation configuration for a function.
   * 
   * @param request - PutAsyncInvokeConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutAsyncInvokeConfigResponse
   */
  async putAsyncInvokeConfigWithOptions(functionName: string, request: $_model.PutAsyncInvokeConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PutAsyncInvokeConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutAsyncInvokeConfig",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/async-invoke-config`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutAsyncInvokeConfigResponse>(await this.callApi(params, req, runtime), new $_model.PutAsyncInvokeConfigResponse({}));
  }

  /**
   * Creates or updates the asynchronous invocation configuration for a function.
   * 
   * @param request - PutAsyncInvokeConfigRequest
   * @returns PutAsyncInvokeConfigResponse
   */
  async putAsyncInvokeConfig(functionName: string, request: $_model.PutAsyncInvokeConfigRequest): Promise<$_model.PutAsyncInvokeConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putAsyncInvokeConfigWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Sets the concurrency for a function.
   * 
   * @param request - PutConcurrencyConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutConcurrencyConfigResponse
   */
  async putConcurrencyConfigWithOptions(functionName: string, request: $_model.PutConcurrencyConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PutConcurrencyConfigResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutConcurrencyConfig",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/concurrency`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutConcurrencyConfigResponse>(await this.callApi(params, req, runtime), new $_model.PutConcurrencyConfigResponse({}));
  }

  /**
   * Sets the concurrency for a function.
   * 
   * @param request - PutConcurrencyConfigRequest
   * @returns PutConcurrencyConfigResponse
   */
  async putConcurrencyConfig(functionName: string, request: $_model.PutConcurrencyConfigRequest): Promise<$_model.PutConcurrencyConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putConcurrencyConfigWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Modifies the permissions of a layer.
   * 
   * @param request - PutLayerACLRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutLayerACLResponse
   */
  async putLayerACLWithOptions(layerName: string, request: $_model.PutLayerACLRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PutLayerACLResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acl)) {
      query["acl"] = request.acl;
    }

    if (!$dara.isNull(request.public)) {
      query["public"] = request.public;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutLayerACL",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/layers/${$dara.URL.percentEncode(layerName)}/acl`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.PutLayerACLResponse>(await this.callApi(params, req, runtime), new $_model.PutLayerACLResponse({}));
  }

  /**
   * Modifies the permissions of a layer.
   * 
   * @param request - PutLayerACLRequest
   * @returns PutLayerACLResponse
   */
  async putLayerACL(layerName: string, request: $_model.PutLayerACLRequest): Promise<$_model.PutLayerACLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putLayerACLWithOptions(layerName, request, headers, runtime);
  }

  /**
   * Creates a provisioned configuration.
   * 
   * @param request - PutProvisionConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutProvisionConfigResponse
   */
  async putProvisionConfigWithOptions(functionName: string, request: $_model.PutProvisionConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PutProvisionConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutProvisionConfig",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/provision-config`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutProvisionConfigResponse>(await this.callApi(params, req, runtime), new $_model.PutProvisionConfigResponse({}));
  }

  /**
   * Creates a provisioned configuration.
   * 
   * @param request - PutProvisionConfigRequest
   * @returns PutProvisionConfigResponse
   */
  async putProvisionConfig(functionName: string, request: $_model.PutProvisionConfigRequest): Promise<$_model.PutProvisionConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putProvisionConfigWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Set the elastic scaling configuration for a function.
   * 
   * @param request - PutScalingConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutScalingConfigResponse
   */
  async putScalingConfigWithOptions(functionName: string, request: $_model.PutScalingConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PutScalingConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutScalingConfig",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/scaling-config`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutScalingConfigResponse>(await this.callApi(params, req, runtime), new $_model.PutScalingConfigResponse({}));
  }

  /**
   * Set the elastic scaling configuration for a function.
   * 
   * @param request - PutScalingConfigRequest
   * @returns PutScalingConfigResponse
   */
  async putScalingConfig(functionName: string, request: $_model.PutScalingConfigRequest): Promise<$_model.PutScalingConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putScalingConfigWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Resumes a session.
   * 
   * @remarks
   * Resumes a session that is in the Paused state. The system quickly restores the session in a new execution environment based on the previously persisted state, returning it to the state before it was paused. After the session is successfully resumed, its status changes back to Active, and it can continue to accept function calling requests and route them to the restored instance. This operation applies to custom image functions that have HEADER_FIELD or GENERATED_COOKIE affinity types configured and session isolation enabled.
   * 
   * @param request - ResumeSessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeSessionResponse
   */
  async resumeSessionWithOptions(functionName: string, sessionId: string, request: $_model.ResumeSessionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeSessionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileSystemOnly)) {
      query["fileSystemOnly"] = request.fileSystemOnly;
    }

    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeSession",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/sessions/${$dara.URL.percentEncode(sessionId)}/resume`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeSessionResponse>(await this.callApi(params, req, runtime), new $_model.ResumeSessionResponse({}));
  }

  /**
   * Resumes a session.
   * 
   * @remarks
   * Resumes a session that is in the Paused state. The system quickly restores the session in a new execution environment based on the previously persisted state, returning it to the state before it was paused. After the session is successfully resumed, its status changes back to Active, and it can continue to accept function calling requests and route them to the restored instance. This operation applies to custom image functions that have HEADER_FIELD or GENERATED_COOKIE affinity types configured and session isolation enabled.
   * 
   * @param request - ResumeSessionRequest
   * @returns ResumeSessionResponse
   */
  async resumeSession(functionName: string, sessionId: string, request: $_model.ResumeSessionRequest): Promise<$_model.ResumeSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeSessionWithOptions(functionName, sessionId, request, headers, runtime);
  }

  /**
   * Stops an asynchronous task.
   * 
   * @param request - StopAsyncTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopAsyncTaskResponse
   */
  async stopAsyncTaskWithOptions(functionName: string, taskId: string, request: $_model.StopAsyncTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopAsyncTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopAsyncTask",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/async-tasks/${$dara.URL.percentEncode(taskId)}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.StopAsyncTaskResponse>(await this.callApi(params, req, runtime), new $_model.StopAsyncTaskResponse({}));
  }

  /**
   * Stops an asynchronous task.
   * 
   * @param request - StopAsyncTaskRequest
   * @returns StopAsyncTaskResponse
   */
  async stopAsyncTask(functionName: string, taskId: string, request: $_model.StopAsyncTaskRequest): Promise<$_model.StopAsyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopAsyncTaskWithOptions(functionName, taskId, request, headers, runtime);
  }

  /**
   * Adds tags to specified resources.
   * 
   * @param request - TagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/tags-v2`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * Adds tags to specified resources.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Removes tags from resources.
   * 
   * @param tmpReq - UntagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(tmpReq: $_model.UntagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    tmpReq.validate();
    let request = new $_model.UntagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceId)) {
      request.resourceIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceId, "ResourceId", "json");
    }

    if (!$dara.isNull(tmpReq.tagKey)) {
      request.tagKeyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagKey, "TagKey", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.resourceIdShrink)) {
      query["ResourceId"] = request.resourceIdShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKeyShrink)) {
      query["TagKey"] = request.tagKeyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/tags-v2`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UntagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UntagResourcesResponse({}));
  }

  /**
   * Removes tags from resources.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.untagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Updates an alias.
   * 
   * @param request - UpdateAliasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAliasResponse
   */
  async updateAliasWithOptions(functionName: string, aliasName: string, request: $_model.UpdateAliasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAliasResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAlias",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/aliases/${$dara.URL.percentEncode(aliasName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAliasResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAliasResponse({}));
  }

  /**
   * Updates an alias.
   * 
   * @param request - UpdateAliasRequest
   * @returns UpdateAliasResponse
   */
  async updateAlias(functionName: string, aliasName: string, request: $_model.UpdateAliasRequest): Promise<$_model.UpdateAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAliasWithOptions(functionName, aliasName, request, headers, runtime);
  }

  /**
   * Updates a custom domain name.
   * 
   * @param request - UpdateCustomDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomDomainResponse
   */
  async updateCustomDomainWithOptions(domainName: string, request: $_model.UpdateCustomDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCustomDomainResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCustomDomain",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/custom-domains/${$dara.URL.percentEncode(domainName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCustomDomainResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCustomDomainResponse({}));
  }

  /**
   * Updates a custom domain name.
   * 
   * @param request - UpdateCustomDomainRequest
   * @returns UpdateCustomDomainResponse
   */
  async updateCustomDomain(domainName: string, request: $_model.UpdateCustomDomainRequest): Promise<$_model.UpdateCustomDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateCustomDomainWithOptions(domainName, request, headers, runtime);
  }

  /**
   * Updates a function\\"s configuration.
   * 
   * @param request - UpdateFunctionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFunctionResponse
   */
  async updateFunctionWithOptions(functionName: string, request: $_model.UpdateFunctionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFunctionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFunction",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFunctionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFunctionResponse({}));
  }

  /**
   * Updates a function\\"s configuration.
   * 
   * @param request - UpdateFunctionRequest
   * @returns UpdateFunctionResponse
   */
  async updateFunction(functionName: string, request: $_model.UpdateFunctionRequest): Promise<$_model.UpdateFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFunctionWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Updates the configuration of a session in Active status, such as lifecycle settings including SessionTTLInSeconds and SessionIdleTimeoutInSeconds. The changes take effect immediately, and LastModifiedTime is automatically refreshed. You can use this operation to extend or shorten the session validity period for dynamic management without changing the execution environment bound to the session.
   * 
   * @param request - UpdateSessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSessionResponse
   */
  async updateSessionWithOptions(functionName: string, sessionId: string, request: $_model.UpdateSessionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSessionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSession",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/sessions/${$dara.URL.percentEncode(sessionId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSessionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSessionResponse({}));
  }

  /**
   * Updates the configuration of a session in Active status, such as lifecycle settings including SessionTTLInSeconds and SessionIdleTimeoutInSeconds. The changes take effect immediately, and LastModifiedTime is automatically refreshed. You can use this operation to extend or shorten the session validity period for dynamic management without changing the execution environment bound to the session.
   * 
   * @param request - UpdateSessionRequest
   * @returns UpdateSessionResponse
   */
  async updateSession(functionName: string, sessionId: string, request: $_model.UpdateSessionRequest): Promise<$_model.UpdateSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSessionWithOptions(functionName, sessionId, request, headers, runtime);
  }

  /**
   * Updates the information of a trigger.
   * 
   * @param request - UpdateTriggerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTriggerResponse
   */
  async updateTriggerWithOptions(functionName: string, triggerName: string, request: $_model.UpdateTriggerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTriggerResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTrigger",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/triggers/${$dara.URL.percentEncode(triggerName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTriggerResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTriggerResponse({}));
  }

  /**
   * Updates the information of a trigger.
   * 
   * @param request - UpdateTriggerRequest
   * @returns UpdateTriggerResponse
   */
  async updateTrigger(functionName: string, triggerName: string, request: $_model.UpdateTriggerRequest): Promise<$_model.UpdateTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTriggerWithOptions(functionName, triggerName, request, headers, runtime);
  }

}
